'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const EXAMPLE = `In Ontario, exit aisles in assembly occupancies must be a minimum of 900mm wide. Fire extinguishers must be inspected every 18 months. Flammable liquids stored in an educational building cannot exceed 25 litres. Smoke alarms in residential units must be interconnected if the building has more than two storeys.`;

export default function HomePage() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text.trim().length < 20) { setError('Please enter at least 20 characters.'); return; }
    setLoading(true); setError(''); setStage('Extracting claims…');

    try {
      const extractRes = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const extractData = await extractRes.json();
      if (!extractRes.ok) { setError(extractData.error ?? 'Extraction failed.'); return; }
      const { claims } = extractData;
      if (!claims?.length) {
        setError('No verifiable claims found. Try including specific numbers or requirements.');
        return;
      }

      setStage(`Verifying ${claims.length} claim${claims.length !== 1 ? 's' : ''}…`);
      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, claims }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok) { setError(verifyData.error ?? 'Verification failed.'); return; }

      sessionStorage.setItem('verificationReport', JSON.stringify(verifyData.report));
      router.push('/results');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); setStage('');
    }
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 70%, #000000 100%)' }}>
      {/* Header */}
      <header className="glass-header px-6 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-600/80 flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(220,38,38,0.4)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L8 9M5 6L8 2L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12C3 10 5 8.5 8 8.5C11 8.5 13 10 13 12C13 13.5 11.5 14 8 14C4.5 14 3 13.5 3 12Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white leading-none">OFC Compliance Checker</h1>
            <p className="text-xs text-[#8e8ea0] mt-0.5">Ontario Fire Code · O. Reg. 213/07 · 272 rules</p>
          </div>
        </div>
      </header>

      {/* Body — vertically centered */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">Verify fire code claims</h2>
            <p className="text-[#8e8ea0] text-sm leading-relaxed">
              Paste AI-generated text that makes claims about the Ontario Fire Code. The system extracts each claim, matches it against 272 rules, and flags any discrepancies.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={text}
                onChange={e => { setText(e.target.value); setError(''); }}
                placeholder={EXAMPLE}
                rows={8}
                disabled={loading}
                className="glass-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-[#8e8ea0] resize-y disabled:opacity-60"
              />
              {text.length > 0 && (
                <span className="absolute bottom-3 right-3 text-xs text-[#8e8ea0]">{text.length} chars</span>
              )}
            </div>

            {error && (
              <div className="flex items-start gap-2 rounded-lg bg-red-950/40 border border-red-800/40 px-3 py-2.5 backdrop-blur-sm">
                <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              <button
                type="submit"
                disabled={loading || text.trim().length < 20}
                className="flex items-center gap-2 rounded-lg bg-white/90 hover:bg-white disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-[#111] text-sm font-medium px-5 py-2.5 transition-all backdrop-blur-sm"
                style={{ boxShadow: loading || text.trim().length < 20 ? 'none' : '0 2px 12px rgba(255,255,255,0.15)' }}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin text-gray-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    {stage}
                  </>
                ) : (
                  <>Analyze text →</>
                )}
              </button>
              <button
                type="button"
                onClick={() => { setText(EXAMPLE); setError(''); }}
                className="text-sm text-[#8e8ea0] hover:text-white underline underline-offset-2 transition-colors"
              >
                Load example
              </button>
            </div>
          </form>

          {/* Info cards */}
          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { label: '272 rules', desc: 'Ontario Fire Code rules indexed' },
              { label: 'AI + match', desc: 'Gemini + keyword engine' },
              { label: 'Scored /100', desc: 'Confidence-weighted result' },
            ].map(c => (
              <div key={c.label} className="glass-card rounded-xl px-4 py-3 text-center">
                <p className="text-sm font-semibold text-white">{c.label}</p>
                <p className="text-xs text-[#8e8ea0] mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
