/**
 * matcher.ts
 *
 * Public API used by the verify route.
 *
 * Strategy (fastest → slowest, stops early when enough candidates found):
 *   1. Indexed retrieval (exact section → parent fallback → root article → keyword)
 *   2. If indexed retrieval found candidates, optionally re-rank by semantic score
 *      (Jaccard) within that small set — never scan the full 5 000+ rules.
 *   3. Only if the index returns nothing at all, fall back to Jaccard over the
 *      full dataset capped at 15 candidates (last resort).
 */

import type { Rule, ExtractedClaim } from '@/types';
import { retrieveCandidates } from './retriever';
import { allRules } from './ruleIndex';

// ─── Helpers (used only for semantic reranking of small candidate sets) ───────

const STOPWORDS = new Set([
  'the','a','an','of','for','in','to','and','or','is','are','be','with',
  'on','at','from','by','as','per','that','this','must','shall','should',
  'may','not','no','all','any','its','it','if','when','where','which',
  'has','have','been','each','every','only','also','than','more','less',
]);

function tokenize(text: string): Set<string> {
  return new Set(
    text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOPWORDS.has(w))
  );
}

function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  const intersectionSize = [...a].filter(x => b.has(x)).length;
  const unionSize = new Set([...a, ...b]).size;
  return intersectionSize / unionSize;
}

function extractNumbers(text: string): number[] {
  return (text.match(/\d+\.?\d*/g) || []).map(Number);
}

function semanticScore(claim: ExtractedClaim, rule: Rule): number {
  let score = 0;

  const claimSubjectTokens  = tokenize(claim.subject);
  const ruleSubjectTokens   = tokenize(rule.subject);
  score += jaccardSimilarity(claimSubjectTokens, ruleSubjectTokens) * 40;
  score += [...claimSubjectTokens].filter(t => ruleSubjectTokens.has(t)).length * 4;

  if (claim.constraintType === rule.constraintType) score += 10;

  const claimBuildingTokens = tokenize(claim.buildingType ?? 'all');
  const ruleBuildingTokens  = tokenize(rule.buildingType);
  if (rule.buildingType.toLowerCase() === 'all') {
    score += 2;
  } else {
    score += jaccardSimilarity(claimBuildingTokens, ruleBuildingTokens) * 12;
    score += [...claimBuildingTokens].filter(t => ruleBuildingTokens.has(t)).length * 3;
  }

  const claimLoc = (claim.contextLocation ?? '').toLowerCase();
  if (claimLoc.includes('ontario') && rule.contextLocation.toLowerCase().includes('ontario')) {
    score += 4;
  }

  const claimValueNumbers = extractNumbers(claim.value ?? '');
  const ruleValueNumbers  = extractNumbers(rule.value ?? '');
  score += claimValueNumbers.filter(n => ruleValueNumbers.includes(n)).length * 6;

  if (claim.unit && rule.unit && claim.unit.toLowerCase() === rule.unit.toLowerCase()) {
    score += 5;
  }

  return score;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export interface RuleMatch {
  rule: Rule;
  score: number;
}

/**
 * Find the best candidate rules for a claim.
 *
 * Uses the indexed retriever first (O(1) section lookups + inverted-index keyword
 * search). Semantic scoring (Jaccard) is only applied to the small candidate set
 * returned by the retriever — never over the full rule corpus.
 *
 * Falls back to full-corpus Jaccard scan ONLY when the retriever finds nothing.
 */
export function findCandidates(claim: ExtractedClaim, topN = 15): RuleMatch[] {
  const retrieval = retrieveCandidates(claim);

  // ── Path A: retriever found candidates ────────────────────────────────────
  if (retrieval.candidates.length > 0) {
    const scored = retrieval.candidates.map(rule => ({
      rule,
      score: semanticScore(claim, rule),
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topN);
  }

  // ── Path B: last-resort full-corpus scan (retriever found nothing) ─────────
  // This path should rarely trigger given the keyword index covers all rules.
  console.warn(
    `[matcher] fallback to full scan for claim: "${claim.subject}"`
  );

  const FALLBACK_LIMIT = 15;
  const scored = allRules.map(rule => ({ rule, score: semanticScore(claim, rule) }));
  return scored
    .filter(m => m.score > 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, FALLBACK_LIMIT);
}
