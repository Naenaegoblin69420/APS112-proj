import { Rule, ExtractedClaim } from '@/types';
import { getAllRules } from './rules';

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

function extractNumbers(text: string): number[] {
  return (text.match(/\d+\.?\d*/g) || []).map(Number);
}

function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  const intersectionSize = [...a].filter(x => b.has(x)).length;
  const unionSize = new Set([...a, ...b]).size;
  return intersectionSize / unionSize;
}

export interface RuleMatch {
  rule: Rule;
  score: number;
}

export function findCandidates(claim: ExtractedClaim, topN = 12): RuleMatch[] {
  const rules = getAllRules();

  const claimSubjectTokens = tokenize(claim.subject);
  const claimBuildingTokens = tokenize(claim.buildingType ?? 'all');
  const claimValueNumbers = extractNumbers(claim.value ?? '');

  const scored: RuleMatch[] = rules.map(rule => {
    let score = 0;

    // Subject similarity — Jaccard + raw keyword overlap
    const ruleSubjectTokens = tokenize(rule.subject);
    score += jaccardSimilarity(claimSubjectTokens, ruleSubjectTokens) * 40;
    const subjectOverlap = [...claimSubjectTokens].filter(t => ruleSubjectTokens.has(t));
    score += subjectOverlap.length * 4;

    // Exact constraint type match
    if (claim.constraintType === rule.constraintType) score += 10;

    // Building type match
    const ruleBuildingTokens = tokenize(rule.buildingType);
    if (rule.buildingType.toLowerCase() === 'all') {
      score += 2;
    } else {
      score += jaccardSimilarity(claimBuildingTokens, ruleBuildingTokens) * 12;
      const buildingOverlap = [...claimBuildingTokens].filter(t => ruleBuildingTokens.has(t));
      score += buildingOverlap.length * 3;
    }

    // Jurisdiction match
    const claimLoc = (claim.contextLocation ?? '').toLowerCase();
    if (claimLoc.includes('ontario') && rule.contextLocation.toLowerCase().includes('ontario')) {
      score += 4;
    }

    // Numeric value overlap in the rule/claim values
    const ruleValueNumbers = extractNumbers(rule.value ?? '');
    const numberMatches = claimValueNumbers.filter(n => ruleValueNumbers.includes(n));
    score += numberMatches.length * 6;

    // Unit match bonus
    if (claim.unit && rule.unit && claim.unit.toLowerCase() === rule.unit.toLowerCase()) {
      score += 5;
    }

    return { rule, score };
  });

  return scored
    .filter(m => m.score > 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
}
