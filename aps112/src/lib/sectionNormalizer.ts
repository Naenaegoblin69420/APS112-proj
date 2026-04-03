/**
 * sectionNormalizer.ts
 *
 * Converts all Ontario Fire Code section reference variants to a single
 * canonical form used as map keys throughout the retrieval pipeline.
 *
 * Canonical format examples:
 *   2.4.4.2
 *   2.4.4.2(3)
 *   2.4.4.2(3)(a)
 *
 * Inputs handled:
 *   "OFC 2.4.4.2"          → "2.4.4.2"
 *   "Article 2.4.4.2"      → "2.4.4.2"
 *   "2.4.4.2 (3) (a)"      → "2.4.4.2(3)(a)"
 *   "Section 2.4.4.2(3)(a)"→ "2.4.4.2(3)(a)"
 */

// Matches a dotted numeric section like 1.2 / 1.2.3 / 1.2.3.4 / 1.2.3.4.5
// followed by zero or more parenthetical clauses like (2) (a) (iii)
const SECTION_RE =
  /(\d+(?:\.\d+){1,4})((?:\s*\([^)]{1,10}\))*)/;

/**
 * Normalize a section reference string to canonical form.
 * Returns null if the string contains no valid section reference.
 */
export function normalizeSection(raw: string): string | null {
  if (!raw || typeof raw !== 'string') return null;

  // Strip well-known prefixes (case-insensitive), then collapse whitespace
  const cleaned = raw
    .replace(/\b(OFC|Article|Articles|Section|Sections|Subsection|Clause|Part)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const m = cleaned.match(SECTION_RE);
  if (!m) return null;

  const dotted = m[1]; // e.g. "2.4.4.2"

  // Normalize parentheticals: remove all internal/surrounding spaces
  const parentheticals = m[2]
    .replace(/\s*\(\s*/g, '(')
    .replace(/\s*\)\s*/g, ')')
    .trim(); // e.g. "(3)(a)"

  return dotted + parentheticals;
}

/**
 * Extract every section reference found in a free-form text string.
 * Returns deduplicated, normalized results.
 */
export function extractSectionsFromText(text: string): string[] {
  if (!text) return [];

  const found = new Set<string>();

  // Scan for patterns: optional prefix, dotted number, optional parens
  const re =
    /(?:(?:OFC|Article|Section)\s+)?(\d+(?:\.\d+){1,4})((?:\s*\([^)]{1,10}\))*)/g;

  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const norm = normalizeSection(m[0]);
    if (norm) found.add(norm);
  }

  return [...found];
}

/**
 * Return the full parent chain for a normalized section (most-specific first).
 *
 * "2.4.4.2(3)(a)" → ["2.4.4.2(3)(a)", "2.4.4.2(3)", "2.4.4.2"]
 */
export function parentChain(normalized: string): string[] {
  const chain: string[] = [normalized];
  let current = normalized;

  // Strip the last parenthetical one at a time
  while (true) {
    const idx = current.lastIndexOf('(');
    if (idx === -1) break;
    current = current.slice(0, idx);
    chain.push(current);
  }

  return chain;
}

/**
 * Return the root article (dotted part only, no parentheticals).
 *
 * "2.4.4.2(3)(a)" → "2.4.4.2"
 * "2.4.4.2"       → "2.4.4.2"
 */
export function articleRoot(normalized: string): string {
  const idx = normalized.indexOf('(');
  return idx === -1 ? normalized : normalized.slice(0, idx);
}
