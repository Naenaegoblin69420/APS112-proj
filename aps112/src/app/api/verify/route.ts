import { NextRequest, NextResponse } from 'next/server';
import { geminiPro } from '@/lib/gemini';
import { findCandidates } from '@/lib/matcher';
import { getAllRules } from '@/lib/rules';
import { ExtractedClaim, VerificationResult, VerificationReport } from '@/types';

const COMPARE_PROMPT = `You are an Ontario Fire Code compliance checker.

Given a CLAIM extracted from AI-generated text, and a list of CANDIDATE RULES from the Ontario Fire Code, determine whether the claim is accurate.

Respond ONLY with a valid JSON object — no markdown, no backticks:
{"status":"verified"|"conflict"|"unknown","matchedRuleId":"<rule ID>"|null,"explanation":"<1-2 sentence explanation>","claimedValue":"<value as stated>"|null,"ruleValue":"<actual rule value>"|null,"confidence":"High"|"Medium"|"Low"}

Status definitions:
- "verified": claim is consistent with a matching rule
- "conflict": claim contradicts a matching rule (wrong value, wrong direction, wrong constraint type, etc.)
- "unknown": no candidate rule clearly covers this claim`;

function computeScore(results: VerificationResult[]): number {
  if (results.length === 0) return 100;
  let deductions = 0;
  for (const r of results) {
    if (r.status === 'conflict') {
      const base = r.matchedRule?.severity === 'Critical' ? 20
        : r.matchedRule?.severity === 'Major' ? 10 : 5;
      const confidenceScale = r.confidence === 'High' ? 1.0
        : r.confidence === 'Medium' ? 0.7 : 0.4;
      deductions += base * confidenceScale;
    } else if (r.status === 'unknown') {
      deductions += 3;
    }
  }
  return Math.max(0, Math.min(100, Math.round(100 - deductions)));
}

export async function POST(req: NextRequest) {
  try {
    const { text, claims }: { text: string; claims: ExtractedClaim[] } = await req.json();
    if (!claims?.length) return NextResponse.json({ error: 'Claims are required' }, { status: 400 });

    const allRules = getAllRules();

    const results: VerificationResult[] = await Promise.all(
      claims.map(async claim => {
        // Use match engine to find most relevant candidate rules
        const candidates = findCandidates(claim, 12);
        const candidateRules = candidates.length > 0
          ? candidates.map(m => m.rule)
          : allRules.slice(0, 15);

        let parsed: {
          status: VerificationResult['status'];
          matchedRuleId: string | null;
          explanation: string;
          claimedValue: string | null;
          ruleValue: string | null;
          confidence: VerificationResult['confidence'];
        };

        try {
          const result = await geminiPro.generateContent(
            `${COMPARE_PROMPT}\n\nCLAIM:\n${JSON.stringify(claim, null, 2)}\n\nCANDIDATE RULES:\n${JSON.stringify(candidateRules, null, 2)}`
          );
          const raw = result.response.text().replace(/```json/gi, '').replace(/```/g, '').trim();
          parsed = JSON.parse(raw);
        } catch {
          parsed = { status: 'unknown', matchedRuleId: null, explanation: 'Could not parse AI response.', claimedValue: null, ruleValue: null, confidence: 'Low' };
        }

        const matchedRule = parsed.matchedRuleId
          ? (allRules.find(r => r.id === parsed.matchedRuleId) ?? candidateRules[0])
          : undefined;

        return {
          claim,
          status: parsed.status,
          matchedRule,
          explanation: parsed.explanation,
          claimedValue: parsed.claimedValue ?? undefined,
          ruleValue: parsed.ruleValue ?? undefined,
          confidence: parsed.confidence,
        };
      })
    );

    const report: VerificationReport = {
      submittedText: text,
      results,
      score: computeScore(results),
      verifiedCount: results.filter(r => r.status === 'verified').length,
      conflictCount: results.filter(r => r.status === 'conflict').length,
      unknownCount: results.filter(r => r.status === 'unknown').length,
      criticalConflicts: results.filter(r => r.status === 'conflict' && r.matchedRule?.severity === 'Critical').length,
      checkedAt: new Date().toISOString(),
      sourcesChecked: ['Ontario Fire Code (O. Reg. 213/07)'],
    };

    return NextResponse.json({ report });
  } catch (error) {
    console.error('[verify]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
