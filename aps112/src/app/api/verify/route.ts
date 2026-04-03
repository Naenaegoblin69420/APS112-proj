import { NextRequest, NextResponse } from 'next/server';
import { geminiPro } from '@/lib/gemini';
import { findCandidates } from '@/lib/matcher';
import { getRuleById } from '@/lib/rules';
import { detectValueMismatch } from '@/lib/mismatch';
import { ExtractedClaim, VerificationResult, VerificationReport } from '@/types';

const COMPARE_PROMPT = `You are an Ontario Fire Code fact-checker.

Your task: determine whether a CLAIM accurately states what the Ontario Fire Code requires.
You are NOT checking whether a practice would still be compliant or whether it is stricter than the code.
You ARE checking whether the claim is a factually correct statement of the code's actual requirement.

Respond ONLY with a valid JSON object — no markdown, no backticks:
{"status":"verified"|"conflict"|"unknown","matchedRuleId":"<rule ID>"|null,"explanation":"<1-2 sentence explanation>","claimedValue":"<value as stated in the claim>"|null,"ruleValue":"<exact value/frequency/threshold from the matched rule>"|null,"confidence":"High"|"Medium"|"Low"}

Status definitions:
- "verified": the claim accurately states the exact requirement in the matched rule — same value, frequency, threshold, unit, constraint direction, and scope.
- "conflict": the claim misrepresents what the code requires. This includes ANY mismatch in value, frequency, threshold, unit, direction, scope, or constraint type — even if the claim is stricter or more conservative than the code.
- "unknown": no candidate rule clearly covers this claim.

CRITICAL — stricter does NOT mean verified. Examples:
- Rule says monthly inspection → claim says weekly inspection → CONFLICT (weekly is not what the code requires, even though it is more frequent)
- Rule says minimum 1100 mm → claim says code requires 1200 mm → CONFLICT (1200 mm is not what the code specifies)
- Rule says maximum 10 L → claim says code requires no more than 8 L → CONFLICT (8 L is not the code's actual limit)
- Rule says annual inspection → claim says annual inspection → verified

Always extract claimedValue and ruleValue as concise comparable strings (e.g. "weekly", "monthly", "1100 mm", "10 L").`;

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

    const results: VerificationResult[] = await Promise.all(
      claims.map(async claim => {
        // Use the indexed match engine — never falls back to raw slice(0,15)
        const candidates = findCandidates(claim, 15);
        // If the retriever/matcher found nothing, skip the LLM call — unknown
        const candidateRules = candidates.map(m => m.rule);

        // Short-circuit: no candidates → mark unknown without wasting an LLM call
        if (candidateRules.length === 0) {
          return {
            claim,
            status: 'unknown' as const,
            matchedRule: undefined,
            explanation: 'No matching Ontario Fire Code rules found for this claim.',
            confidence: 'Low' as const,
          };
        }

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
          ? (getRuleById(parsed.matchedRuleId) ?? candidateRules[0])
          : undefined;

        // Deterministic override: if the LLM said "verified" but the claimed
        // and rule values are demonstrably different, force a conflict.
        let finalStatus = parsed.status;
        let finalExplanation = parsed.explanation;

        if (
          parsed.status === 'verified' &&
          parsed.claimedValue &&
          parsed.ruleValue
        ) {
          const check = detectValueMismatch(parsed.claimedValue, parsed.ruleValue);
          if (check.mismatch) {
            finalStatus = 'conflict';
            finalExplanation = check.explanation!;
          }
        }

        return {
          claim,
          status: finalStatus,
          matchedRule,
          explanation: finalExplanation,
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
