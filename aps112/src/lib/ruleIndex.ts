/**
 * ruleIndex.ts
 *
 * Builds all fast-lookup data structures ONCE at module load time.
 * Every subsequent query is O(1) map access for section lookups and
 * O(k) for token-based retrieval where k is the candidate set size.
 *
 * Structures built:
 *
 *   allRules               — flat Rule[] (source of truth, subarticles file)
 *
 *   rulesByExactSection    — Map<normalizedSection, Rule[]>
 *                            e.g. "2.4.4.2(3)(a)" → [Rule, ...]
 *
 *   rulesByArticleRoot     — Map<rootArticle, Rule[]>
 *                            All rules whose section starts with that root,
 *                            including descendants.
 *                            e.g. "2.4.4.2" → rules for 2.4.4.2, (1),(2),(3),(3)(a)…
 *
 *   tokenIndex             — Map<token, Set<ruleIndex>>
 *                            Inverted index over subject + value + condition +
 *                            buildingType + sectionReference tokens.
 *                            Used for keyword retrieval when section lookup fails.
 */

// @ts-ignore — subarticles file uses @ts-nocheck internally; cast below
import rawRules from './ontario_fire_code_rules_exhaustive_subarticles';
import type { Rule } from '@/types';
import { normalizeSection, articleRoot } from './sectionNormalizer';

// ─── Stopwords ────────────────────────────────────────────────────────────────
const STOPWORDS = new Set([
  'the','a','an','of','for','in','to','and','or','is','are','be','with',
  'on','at','from','by','as','per','that','this','must','shall','should',
  'may','not','no','all','any','its','it','if','when','where','which',
  'has','have','been','each','every','only','also','than','more','less',
  'such','other','under','above','used','use','within','without',
]);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function tokenizeForIndex(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w));
}

// ─── Build indexes ────────────────────────────────────────────────────────────

const allRules: Rule[] = rawRules as Rule[];

const rulesByExactSection = new Map<string, Rule[]>();
const rulesByArticleRoot  = new Map<string, Rule[]>();
const tokenIndex          = new Map<string, Set<number>>();

function addToExact(key: string, rule: Rule) {
  let bucket = rulesByExactSection.get(key);
  if (!bucket) { bucket = []; rulesByExactSection.set(key, bucket); }
  bucket.push(rule);
}

function addToRoot(key: string, rule: Rule) {
  let bucket = rulesByArticleRoot.get(key);
  if (!bucket) { bucket = []; rulesByArticleRoot.set(key, bucket); }
  bucket.push(rule);
}

function addToken(token: string, ruleIdx: number) {
  let set = tokenIndex.get(token);
  if (!set) { set = new Set(); tokenIndex.set(token, set); }
  set.add(ruleIdx);
}

console.time('[ruleIndex] build');

for (let i = 0; i < allRules.length; i++) {
  const rule = allRules[i];

  // ── Section reference indexing ──────────────────────────────────────────────
  const normSection = normalizeSection(rule.sectionReference);
  if (normSection) {
    addToExact(normSection, rule);
    addToRoot(articleRoot(normSection), rule);
  }

  // ── Token indexing over content fields ──────────────────────────────────────
  const textParts = [
    rule.subject,
    rule.value,
    rule.condition ?? '',
    rule.buildingType,
    rule.sectionReference,
  ];
  for (const part of textParts) {
    if (!part) continue;
    for (const tok of tokenizeForIndex(part)) {
      addToken(tok, i);
    }
  }
}

console.timeEnd('[ruleIndex] build');
console.log(
  `[ruleIndex] ${allRules.length} rules | ` +
  `${rulesByExactSection.size} exact sections | ` +
  `${rulesByArticleRoot.size} article roots | ` +
  `${tokenIndex.size} tokens`
);

// ─── Public API ───────────────────────────────────────────────────────────────

export { allRules, rulesByExactSection, rulesByArticleRoot, tokenIndex };

/** Tokenize a query string using the same logic as the index build. */
export function tokenizeQuery(text: string): string[] {
  return tokenizeForIndex(text);
}
