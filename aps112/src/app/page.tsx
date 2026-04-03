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

  const isDisabled = loading || text.trim().length < 20;

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
          <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'rgba(220, 38, 38, 0.8)', boxShadow: '0 2px 8px rgba(220,38,38,0.3)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L8 9M5 6L8 2L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12C3 10 5 8.5 8 8.5C11 8.5 13 10 13 12C13 13.5 11.5 14 8 14C4.5 14 3 13.5 3 12Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>OFC Compliance Checker</span>
        </div>
      </header>

      {/* Body — vertically centered */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-xl">
          {/* Title */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>Verify fire code compliance</h2>
            <p style={{ color: '#8e8ea0', fontSize: '14px', lineHeight: 1.6 }}>
              Paste text containing Ontario Fire Code claims. We'll check each one against our indexed rules.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <textarea
                value={text}
                onChange={e => { setText(e.target.value); setError(''); }}
                placeholder={EXAMPLE}
                rows={7}
                disabled={loading}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '14px',
                  color: 'white',
                  resize: 'none',
                  lineHeight: 1.7,
                  outline: 'none',
                  opacity: loading ? 0.6 : 1,
                  overflow: 'hidden',
                }}
                className="placeholder-[#6b6b7b] focus:border-white/20"
              />
              {text.length > 0 && (
                <span style={{ position: 'absolute', bottom: '16px', right: '16px', fontSize: '12px', color: '#6b6b7b' }}>{text.length}</span>
              )}
            </div>

            {error && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                borderRadius: '12px', 
                background: 'rgba(127, 29, 29, 0.4)', 
                border: '1px solid rgba(153, 27, 27, 0.4)', 
                padding: '16px',
                marginBottom: '20px'
              }}>
                <svg style={{ width: '16px', height: '16px', color: '#f87171', marginTop: '2px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <p style={{ fontSize: '14px', color: '#fca5a5' }}>{error}</p>
              </div>
            )}

            {/* Centered button */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
              <button
                type="submit"
                disabled={isDisabled}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '8px',
                  background: isDisabled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
                  color: isDisabled ? 'rgba(255,255,255,0.3)' : '#111',
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '12px 24px',
                  border: 'none',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: isDisabled ? 'none' : '0 2px 12px rgba(255,255,255,0.15)',
                }}
                onMouseEnter={e => { if (!isDisabled) e.currentTarget.style.background = 'white'; }}
                onMouseLeave={e => { if (!isDisabled) e.currentTarget.style.background = 'rgba(255,255,255,0.95)'; }}
              >
                {loading ? (
                  <>
                    <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
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
      <button
        type="button"
        onClick={() => { setText(EXAMPLE); setError(''); }}
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          fontSize: '12px',
          color: '#3a3a3a',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#6b6b7b'}
        onMouseLeave={e => e.currentTarget.style.color = '#3a3a3a'}
      >
        try example
      </button>

      {/* Keyframe for spinner */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}