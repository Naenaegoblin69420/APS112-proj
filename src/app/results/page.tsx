'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { VerificationReport, VerificationResult } from '@/types';

function ClaimCard({ result }: { result: VerificationResult }) {
  const [open, setOpen] = useState(result.status === 'conflict');
  const colors = { verified: { bg: '#f0fdf4', border: '#86efac', text: '#166534' }, conflict: { bg: '#fef2f2', border: '#fca5a5', text: '#991b1b' }, unknown: { bg: '#fffbeb', border: '#fcd34d', text: '#92400e' } };
  const c = colors[result.status];
  return (
    <div onClick={() => setOpen(!open)} style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', cursor: 'pointer', marginBottom: 10 }}>
      <div style={{ display: 'flex', gap: 12, padding: '14px 16px', background: 'white' }}>
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: c.bg, border: `1px solid ${c.border}`, flexShrink: 0, marginTop: 2 }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 14, marginBottom: 6 }}>"{result.claim.originalText}"</p>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, background: '#eff6ff', color: '#1d4ed8' }}>{result.claim.subject}</span>
            {result.matchedRule && <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, background: '#f9fafb', color: '#374151' }}>{result.matchedRule.sectionReference}</span>}
          </div>
        </div>
      </div>
      {open && (
        <div style={{ padding: '12px 16px', background: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8, padding: '10px 12px', fontSize: 13, color: c.text, marginBottom: 10 }}>{result.explanation}</div>
          {result.claimedValue && <p style={{ fontSize: 13, marginBottom: 4 }}><strong>Claimed:</strong> {result.claimedValue} &nbsp; <strong>Rule:</strong> {result.ruleValue}</p>}
        </div>
      )}
    </div>
  );
}

export default function ResultsPage() {
  const [report, setReport] = useState<VerificationReport | null>(null);
  const router = useRouter();
  useEffect(() => {
    const stored = sessionStorage.getItem('verificationReport');
    if (!stored) { router.push('/'); return; }
    setReport(JSON.parse(stored));
  }, [router]);

  if (!report) return <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.5rem' }}><p>Loading...</p></main>;

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      <h1 style={{ fontSize: 22, fontWeight: 500, marginBottom: 8 }}>Verification results</h1>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>{report.results.length} claims checked — {report.verifiedCount} verified, {report.conflictCount} conflicts, {report.unknownCount} unknown. Score: {report.score}%</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 24 }}>
        {[{ label: 'Verified', count: report.verifiedCount, color: '#16a34a' }, { label: 'Conflicts', count: report.conflictCount, color: '#dc2626' }, { label: 'Unknown', count: report.unknownCount, color: '#d97706' }].map(s => (
          <div key={s.label} style={{ background: '#f9fafb', borderRadius: 8, padding: '12px 14px' }}>
            <p style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>{s.label}</p>
            <p style={{ fontSize: 24, fontWeight: 500, color: s.color }}>{s.count}</p>
          </div>
        ))}
      </div>
      {report.results.map(r => <ClaimCard key={r.claim.id} result={r} />)}
      <button onClick={() => router.push('/')} style={{ marginTop: 16, padding: '8px 16px', borderRadius: 8, border: '1px solid #ddd', cursor: 'pointer', background: 'white' }}>← Check new text</button>
    </main>
  );
}
