/**
 * rules.ts
 *
 * Public facade for rule access.
 * Source of truth: ontario_fire_code_rules_exhaustive_subarticles.ts (5046 rules)
 *
 * For fast indexed retrieval use the `retriever` module directly.
 * This module exists for legacy call sites that need getAllRules() / getRuleById().
 */

import { allRules, rulesByExactSection } from './ruleIndex';
import type { Rule } from '@/types';

export function getAllRules(): Rule[] {
  return allRules;
}

export function getRuleById(id: string): Rule | undefined {
  return allRules.find(r => r.id === id);
}

/** O(1) lookup by normalized section reference. */
export function getRulesBySection(normalizedSection: string): Rule[] {
  return rulesByExactSection.get(normalizedSection) ?? [];
}
