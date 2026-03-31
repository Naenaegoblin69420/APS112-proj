/**
 * Deterministic value-mismatch detection.
 *
 * The verifier's job is to check whether a claim *accurately states* what the
 * Ontario Fire Code requires — not whether a stricter practice would still
 * satisfy the code.  If the code says "monthly" and the claim says "weekly",
 * that is a factual mismatch and must be a conflict regardless of which is
 * stricter.
 *
 * This module normalizes frequency strings and numeric-with-unit strings so
 * that obvious mismatches can be caught deterministically, overriding any
 * overly-lenient LLM response.
 */

/** Normalize a frequency description to an equivalent number of days. */
function normalizeFrequencyToDays(value: string): number | null {
  const v = value.toLowerCase().trim();

  const map: [RegExp, number][] = [
    [/\bdaily\b|\bevery\s*day\b|\b1\s*day\b/, 1],
    [/\bweekly\b|\bevery\s*week\b|\b1\s*week\b/, 7],
    [/\bbi-?weekly\b|\bevery\s*two\s*weeks?\b|\bevery\s*2\s*weeks?\b/, 14],
    [/\bmonthly\b|\bevery\s*month\b|\b1\s*month\b/, 30],
    [/\bquarterly\b|\bevery\s*(?:3\s*months?|quarter)\b/, 90],
    [/\bsemi-?ann?ually\b|\bevery\s*6\s*months?\b/, 180],
    [/\b18[- ]months?\b|\bevery\s*18\s*months?\b/, 545],
    [/\bann?ually\b|\byearly\b|\bevery\s*year\b|\b1\s*year\b/, 365],
    [/\bevery\s*2\s*years?\b/, 730],
  ];

  for (const [pattern, days] of map) {
    if (pattern.test(v)) return days;
  }

  // Generic "every N <unit>" pattern
  const m = v.match(/every\s+(\d+(?:\.\d+)?)\s*(day|week|month|year)s?/);
  if (m) {
    const n = parseFloat(m[1]);
    const multipliers: Record<string, number> = { day: 1, week: 7, month: 30, year: 365 };
    return n * (multipliers[m[2]] ?? 1);
  }

  return null;
}

/** Parse a string like "1100 mm" or "10 L" into a comparable number+unit pair. */
function normalizeNumeric(value: string): { num: number; unit: string } | null {
  const m = value.match(/(\d+(?:\.\d+)?)\s*([a-zA-Z%°]*)/);
  if (!m) return null;
  return { num: parseFloat(m[1]), unit: m[2].toLowerCase() };
}

export interface MismatchResult {
  mismatch: boolean;
  explanation?: string;
}

/**
 * Given the claimed value and the rule value (both as strings extracted by the
 * LLM), return whether they are demonstrably different.
 *
 * Returns `{ mismatch: true, explanation }` when a clear difference is found.
 * Returns `{ mismatch: false }` when values appear to match or cannot be
 * compared reliably.
 */
export function detectValueMismatch(
  claimedValue: string,
  ruleValue: string,
): MismatchResult {
  // --- Frequency comparison ---
  const claimedDays = normalizeFrequencyToDays(claimedValue);
  const ruleDays = normalizeFrequencyToDays(ruleValue);

  if (claimedDays !== null && ruleDays !== null && claimedDays !== ruleDays) {
    return {
      mismatch: true,
      explanation:
        `The claim states a ${claimedValue} inspection/review interval, but ` +
        `the matched Ontario Fire Code rule specifies ${ruleValue}. ` +
        `Because this project checks whether the claim accurately states what ` +
        `the code requires, any difference in the specified interval is a conflict ` +
        `— even when the claimed interval is more frequent than the rule.`,
    };
  }

  // --- Numeric + unit comparison ---
  const claimedNum = normalizeNumeric(claimedValue);
  const ruleNum = normalizeNumeric(ruleValue);

  if (
    claimedNum &&
    ruleNum &&
    claimedNum.unit === ruleNum.unit &&
    claimedNum.num !== ruleNum.num
  ) {
    return {
      mismatch: true,
      explanation:
        `The claim states a value of ${claimedValue}, but the matched ` +
        `Ontario Fire Code rule specifies ${ruleValue}. ` +
        `Because this project checks whether the claim accurately states what ` +
        `the code requires, any difference in the specified value is a conflict ` +
        `— even when the claimed value is stricter or more conservative than the rule.`,
    };
  }

  return { mismatch: false };
}
