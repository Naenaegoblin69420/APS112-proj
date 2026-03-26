import { NextRequest, NextResponse } from 'next/server';
import { geminiPro } from '@/lib/gemini';
import { ExtractedClaim } from '@/types';

const SYSTEM_PROMPT = `You are a building code compliance assistant. Extract verifiable factual claims from text about building codes or fire safety regulations.

For each claim extract:
- subject: what the rule is about
- contextLocation: jurisdiction (e.g. "Ontario")
- constraintType: one of Minimum / Maximum / Exact / Required / Prohibited / Exempt
- value: the specific number or requirement claimed
- unit: measurement unit if applicable
- buildingType: what building type this applies to
- originalText: the exact sentence from the input

Respond ONLY with a valid JSON array. No preamble, no markdown, no backticks. If no claims exist, return [].`;

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text || text.trim().length < 10) return NextResponse.json({ error: 'Text is required' }, { status: 400 });

    const result = await geminiPro.generateContent(`${SYSTEM_PROMPT}\n\nExtract claims from:\n\n${text}`);
    const cleaned = result.response.text().replace(/```json/gi, '').replace(/```/g, '').trim();

    const parsed = JSON.parse(cleaned);
    const claims: ExtractedClaim[] = parsed.map((c: Omit<ExtractedClaim, 'id'>, i: number) => ({ ...c, id: `claim_${i + 1}` }));

    return NextResponse.json({ claims });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
