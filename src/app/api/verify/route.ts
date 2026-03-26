import { NextRequest, NextResponse } from 'next/server';
import { geminiPro } from '@/lib/gemini';
import { getAllRules } from '@/lib/rules';
import { ExtractedClaim, VerificationResult, VerificationReport } from '@/types';

const SYSTEM_PROMPT = `You are a building code compliance checker. Given a claim and a rule database, determine if the claim is verified, conflict, or unknown.

Respond ONLY with a valid JSON object — no markdown, no backticks:
{"status":"verified"|"conflict"|"unknown","matchedRuleId":string|null,"explanation":"1-2 sentences","claimedValue":string|null,"ruleValue":string|null,"confidence":"High"|"Medium"|"Low"}`;

function computeScore(results: VerificationResult[]): number {
  let deductions = 0;
  for (const r of results) {
    if (r.status === 'conflict') deductions += r.matchedRule?.severity === 'Critical' ? 20 : r.matchedRule?.severity === 'Major' ? 10 : 5;
    else if (r.status === 'unknown') deductions += 5;
  }
  return Math.max(0, Math.min(100, 100 - deductions));
}

export async function POST(req: NextRequest) {
  try {
    const { text, claims }: { text: string; claims: ExtractedClaim[] } = await req.json();
    if (!claims?.length) return NextResponse.json({ error: 'Claims required' }, { status: 400 });

    const rules = getAllRules();

    const results: VerificationResult[] = await Promise.all(claims.map(async (claim) => {
      const result = await geminiPro.generateContent(`${SYSTEM_PROMPT}\n\nCLAIM:\n${JSON.stringify(claim)}\n\nRULES:\n${JSON.stringify(rules)}`);
      const cleaned = result.response.text().replace(/```json/gi, '').replace(/```/g, '').trim();
      let parsed;
      try { parsed = JSON.parse(cleaned); } catch { parsed = { status: 'unknown', matchedRuleId: null, explanation: 'Parse error', confidence: 'Low' }; }
      return { claim, status: parsed.status, matchedRule: rules.find(r => r.id === parsed.matchedRuleId), explanation: parsed.explanation, claimedValue: parsed.claimedValue, ruleValue: parsed.ruleValue, confidence: parsed.confidence };
    }));

    const report: VerificationReport = {
      submittedText: text, results,
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
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
