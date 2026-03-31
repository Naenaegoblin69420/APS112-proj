import { NextRequest, NextResponse } from 'next/server';
import { geminiPro } from '@/lib/gemini';
import { getAllRules } from '@/lib/rules';
import { ExtractedClaim } from '@/types';

// Build a compact index of all rules so the model can extract claims that align with our schema
const RULE_INDEX = getAllRules()
  .map(r => `${r.id} | ${r.subject} | ${r.constraintType} | ${r.buildingType} | Ref: ${r.sectionReference}`)
  .join('\n');

const SYSTEM_PROMPT = `You are an Ontario Fire Code compliance assistant. Extract every verifiable factual claim from the input text about building codes or fire safety regulations.

CONSTRAINT TYPES (pick the closest one):
- Minimum — a lower bound (e.g. "at least 1100mm")
- Maximum — an upper bound (e.g. "no more than 10 litres")
- Exact — a precise fixed value
- Required — a mandatory requirement with no numeric threshold
- Prohibited — something that must NOT be done
- Exempt — an exemption or exception

ONTARIO FIRE CODE RULE INDEX (ID | Subject | ConstraintType | BuildingType | SectionRef):
${RULE_INDEX}

Use the rule index above to understand what subjects and constraint types exist in the Ontario Fire Code. Format claims so they match this schema as closely as possible.

For each claim, extract:
- subject: what the rule governs (match wording from the rule index where possible)
- contextLocation: jurisdiction, default "Ontario" if not stated
- constraintType: one of the types listed above
- value: the specific number, threshold, or requirement stated
- unit: measurement unit if applicable (e.g. "mm", "m", "months", "litres"), or omit
- buildingType: building type the claim applies to, or "All" if general
- originalText: the exact sentence or phrase from the input

Respond ONLY with a valid JSON array. No preamble, no markdown, no backticks. If no verifiable claims exist, return [].`;

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text || text.trim().length < 10) {
      return NextResponse.json({ error: 'Text is required (min 10 characters)' }, { status: 400 });
    }

    const result = await geminiPro.generateContent(
      `${SYSTEM_PROMPT}\n\nExtract all verifiable claims from this text:\n\n${text}`
    );

    const raw = result.response.text().replace(/```json/gi, '').replace(/```/g, '').trim();
    const parsed: Omit<ExtractedClaim, 'id'>[] = JSON.parse(raw);

    const claims: ExtractedClaim[] = parsed.map((c, i) => ({ ...c, id: `claim_${i + 1}` }));
    return NextResponse.json({ claims });
  } catch (error) {
    console.error('[extract]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
