/**
 * retriever.ts
 *
 * Indexed retrieval pipeline for Ontario Fire Code rules.
 *
 * Matching order (fast → slow, stops as soon as enough candidates are found):
 *
 *   A. Exact section reference match        — O(1) map lookup
 *   B. Parent-chain fallback                — O(depth) lookups, depth ≤ 3
 *   C. Article-root group                  — O(1) lookup, returns all descendants
 *   D. Keyword / inverted-index retrieval   — O(|query tokens| × avg posting size)
 *                                             capped at MAX_KEYWORD_CANDIDATES
 *
 * Semantic reranking (step E) happens outside this module in the LLM call —
 * we just return a small shortlist of candidates.
 *
 * Never returns more than MAX_FINAL_CANDIDATES rules to the LLM.
 */

import type { Rule } from '@/types';
import type { ExtractedClaim } from '@/types';
import {
  allRules,
  rulesByExactSection,
  rulesByArticleRoot,
  tokenIndex,
  tokenizeQuery,
} from './ruleIndex';
import {
  normalizeSection,
  extractSectionsFromText,
  parentChain,
  articleRoot,
} from './sectionNormalizer';

// ─── Limits ───────────────────────────────────────────────────────────────────

/** Maximum rules returned from keyword retrieval before dedup/sort */
const MAX_KEYWORD_CANDIDATES = 50;
/** Maximum rules passed to the LLM for semantic reranking */
const MAX_FINAL_CANDIDATES = 15;

// ─── Result shape ─────────────────────────────────────────────────────────────

export type MatchedBy =
  | 'exact_section'
  | 'parent_fallback'
  | 'root_article'
  | 'keyword'
  | 'none';

export interface RetrievalResult {
  matchedBy: MatchedBy;
  normalizedQuerySection: string | null;
  candidateCount: number;
  candidates: Rule[];
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

/** Deduplicate rules by id, preserving order. */
function dedupe(rules: Rule[]): Rule[] {
  const seen = new Set<string>();
  return rules.filter(r => {
    if (seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });
}

/**
 * Keyword retrieval using the inverted token index.
 * Ranks rules by number of matching tokens (more = higher rank).
 * Returns up to MAX_KEYWORD_CANDIDATES rule indices.
 */
function keywordCandidates(queryTokens: string[]): Rule[] {
  // Count how many query tokens each candidate rule matches
  const hitCount = new Map<number, number>();

  for (const tok of queryTokens) {
    const posting = tokenIndex.get(tok);
    if (!posting) continue;
    for (const ruleIdx of posting) {
      hitCount.set(ruleIdx, (hitCount.get(ruleIdx) ?? 0) + 1);
    }
  }

  // Sort by descending hit count, take top N
  return [...hitCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_KEYWORD_CANDIDATES)
    .map(([idx]) => allRules[idx]);
}

// ─── Main retrieval function ──────────────────────────────────────────────────

/**
 * Retrieve the best candidate rules for a claim.
 *
 * The pipeline tries each stage in order and stops once it has candidates,
 * then caps the final list at MAX_FINAL_CANDIDATES for LLM consumption.
 */
export function retrieveCandidates(claim: ExtractedClaim): RetrievalResult {
  // Collect every section reference mentioned: from the dedicated field and
  // from the raw original text (handles "Article 2.4.4.2" inline citations).
  const sectionHints: string[] = [];

  if (claim.sectionReference) {
    const norm = normalizeSection(claim.sectionReference);
    if (norm) sectionHints.push(norm);
  }

  const fromText = extractSectionsFromText(claim.originalText ?? '');
  for (const s of fromText) {
    if (!sectionHints.includes(s)) sectionHints.push(s);
  }

  const primarySection = sectionHints[0] ?? null;

  // ── A. Exact section match ─────────────────────────────────────────────────
  if (sectionHints.length > 0) {
    const exactMatches: Rule[] = [];
    for (const sec of sectionHints) {
      const bucket = rulesByExactSection.get(sec);
      if (bucket) exactMatches.push(...bucket);
    }
    if (exactMatches.length > 0) {
      const candidates = dedupe(exactMatches).slice(0, MAX_FINAL_CANDIDATES);
      console.log(
        `[retriever] exact_section: "${primarySection}" → ${candidates.length} candidates`
      );
      return {
        matchedBy: 'exact_section',
        normalizedQuerySection: primarySection,
        candidateCount: candidates.length,
        candidates,
      };
    }
  }

  // ── B. Parent-chain fallback ───────────────────────────────────────────────
  if (sectionHints.length > 0) {
    const parentMatches: Rule[] = [];
    for (const sec of sectionHints) {
      for (const ancestor of parentChain(sec)) {
        if (ancestor === sec) continue; // already tried exact above
        const bucket = rulesByExactSection.get(ancestor);
        if (bucket) parentMatches.push(...bucket);
      }
    }
    if (parentMatches.length > 0) {
      const candidates = dedupe(parentMatches).slice(0, MAX_FINAL_CANDIDATES);
      console.log(
        `[retriever] parent_fallback: "${primarySection}" → ${candidates.length} candidates`
      );
      return {
        matchedBy: 'parent_fallback',
        normalizedQuerySection: primarySection,
        candidateCount: candidates.length,
        candidates,
      };
    }
  }

  // ── C. Article-root group ──────────────────────────────────────────────────
  // If the claim cites "2.4.4.2", return ALL descendants (2.4.4.2, (1), (2), (3)(a)…)
  if (sectionHints.length > 0) {
    const rootMatches: Rule[] = [];
    for (const sec of sectionHints) {
      const root = articleRoot(sec);
      const bucket = rulesByArticleRoot.get(root);
      if (bucket) rootMatches.push(...bucket);
    }
    if (rootMatches.length > 0) {
      const candidates = dedupe(rootMatches).slice(0, MAX_FINAL_CANDIDATES);
      console.log(
        `[retriever] root_article: "${primarySection}" → root "${articleRoot(primarySection ?? '')}" → ${candidates.length} candidates`
      );
      return {
        matchedBy: 'root_article',
        normalizedQuerySection: primarySection,
        candidateCount: candidates.length,
        candidates,
      };
    }
  }

  // ── D. Keyword / inverted-index retrieval ──────────────────────────────────
  const queryText = [
    claim.subject,
    claim.value,
    claim.buildingType ?? '',
    claim.originalText ?? '',
  ].join(' ');

  const queryTokens = tokenizeQuery(queryText);
  const kwCandidates = keywordCandidates(queryTokens);

  if (kwCandidates.length > 0) {
    const candidates = dedupe(kwCandidates).slice(0, MAX_FINAL_CANDIDATES);
    console.log(
      `[retriever] keyword: ${queryTokens.length} tokens → ${candidates.length} candidates`
    );
    return {
      matchedBy: 'keyword',
      normalizedQuerySection: primarySection,
      candidateCount: candidates.length,
      candidates,
    };
  }

  // ── Nothing found ──────────────────────────────────────────────────────────
  console.log(`[retriever] none: no candidates for claim "${claim.subject}"`);
  return {
    matchedBy: 'none',
    normalizedQuerySection: primarySection,
    candidateCount: 0,
    candidates: [],
  };
}
