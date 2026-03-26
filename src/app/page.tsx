'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim().length < 20) { setError('Please enter at least 20 characters.'); return; }
    setLoading(true); setError('');
    try {
      const extractRes = await fetch('/api/extract', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) });
      const { claims } = await extractRes.json();
      if (!claims?.length) { setError('No verifiable claims found. Try adding specific numbers or requirements.'); setLoading(false); return; }
      const verifyRes = await fetch('/api/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text, claims }) });
      const { report } = await verifyRes.json();
      sessionStorage.setItem('verificationReport', JSON.stringify(report));
      router.push('/results');
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  }

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: 28, fontWeight: 500, marginBottom: 8 }}>Compliance checker</h1>
      <p style={{ fontSize: 15, color: '#666', marginBottom: 32, lineHeight: 1.6 }}>Paste AI-generated text about building codes. We check it against the Ontario Fire Code and flag conflicts.</p>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={e => { setText(e.target.value); setError(''); }} placeholder='e.g. "Exit aisles must be at least 900mm wide. Extinguishers inspected every 18 months."' rows={8} style={{ width: '100%', padding: 14, fontSize: 14, borderRadius: 8, border: '1px solid #ddd', marginBottom: 12, fontFamily: 'inherit', resize: 'vertical' }} />
        {error && <p style={{ color: 'red', fontSize: 13, marginBottom: 12 }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ padding: '10px 24px', fontSize: 14, borderRadius: 8, border: '1px solid #ccc', cursor: loading ? 'not-allowed' : 'pointer', background: 'white' }}>
          {loading ? 'Checking...' : 'Check compliance →'}
        </button>
      </form>
    </main>
  );
}
