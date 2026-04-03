import exhaustiveRules from '@/lib/ontario_fire_code_rules_exhaustive';
import type { Rule } from '@/types';

const RULES = exhaustiveRules as Rule[];

export function getAllRules(): Rule[] {
  return RULES;
}

export function getRuleById(id: string): Rule | undefined {
  return RULES.find(r => r.id === id);
}
