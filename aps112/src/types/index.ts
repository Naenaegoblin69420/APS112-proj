export type ConstraintType = 'Minimum' | 'Maximum' | 'Exact' | 'Required' | 'Prohibited' | 'Exempt';
export type Severity = 'Critical' | 'Major' | 'Minor';
export type MatchStatus = 'verified' | 'conflict' | 'unknown';

export interface Rule {
  id: string;
  subject: string;
  contextLocation: string;
  constraintType: ConstraintType;
  value: string;
  unit?: string;
  buildingType: string;
  sectionReference: string;
  condition?: string;
  severity: Severity;
  confidence: 'High' | 'Medium' | 'Low';
  sourceDocument: string;
  authorityRank: number;
  appliesToScope: 'New' | 'Existing' | 'Both';
  supersedes?: string[];
  supersededBy?: string[];
}

export interface ExtractedClaim {
  id: string;
  originalText: string;
  subject: string;
  contextLocation: string;
  constraintType: ConstraintType;
  value: string;
  unit?: string;
  buildingType?: string;
  /** Ontario Fire Code section reference cited in the claim, e.g. "2.4.4.2(3)(a)" */
  sectionReference?: string;
}

export interface VerificationResult {
  claim: ExtractedClaim;
  status: MatchStatus;
  matchedRule?: Rule;
  explanation: string;
  claimedValue?: string;
  ruleValue?: string;
  confidence: 'High' | 'Medium' | 'Low';
}

export interface VerificationReport {
  submittedText: string;
  results: VerificationResult[];
  score: number;
  verifiedCount: number;
  conflictCount: number;
  unknownCount: number;
  criticalConflicts: number;
  checkedAt: string;
  sourcesChecked: string[];
}
