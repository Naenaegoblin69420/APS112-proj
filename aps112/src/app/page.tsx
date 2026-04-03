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
      {/* Header - minimal */}
      <header className="px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-red-600/80 flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(220,38,38,0.3)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L8 9M5 6L8 2L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12C3 10 5 8.5 8 8.5C11 8.5 13 10 13 12C13 13.5 11.5 14 8 14C4.5 14 3 13.5 3 12Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-white">OFC Compliance Checker</span>
        </div>
      </header>

      {/* Body — vertically centered */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-xl">
          {/* Title */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-white mb-3">Verify fire code compliance</h2>
            <p className="text-[#8e8ea0] text-sm leading-relaxed">
              Paste text containing Ontario Fire Code claims. We'll check each one against 272 indexed rules.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <textarea
                value={text}
                onChange={e => { setText(e.target.value); setError(''); }}
                placeholder={EXAMPLE}
                rows={7}
                disabled={loading}
                className="glass-input w-full rounded-xl px-5 py-5 text-sm text-white placeholder-[#6b6b7b] resize-y disabled:opacity-60 leading-relaxed"
              />
              {text.length > 0 && (
                <span className="absolute bottom-4 right-4 text-xs text-[#6b6b7b]">{text.length}</span>
              )}
            </div>

            {error && (
              <div className="flex items-start gap-3 rounded-xl bg-red-950/40 border border-red-800/40 px-4 py-4">
                <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            {/* Centered button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={loading || text.trim().length < 20}
                className="flex items-center gap-2 rounded-lg bg-white/90 hover:bg-white disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-[#111] text-sm font-medium px-6 py-3 transition-all"
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
            </div>
          </form>
        </div>
      </div>

      {/* Subtle try example - bottom left */}
      <div className="fixed bottom-4 left-4">
        <button
          type="button"
          onClick={() => { setText(EXAMPLE); setError(''); }}
          className="text-xs text-[#4a4a4a] hover:text-[#6b6b7b] transition-colors"
        >
          try example
        </button>
      </div>
    </main>
  );
}