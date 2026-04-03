'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { VerificationReport, VerificationResult } from '@/types';

function ScoreGauge({ score }: { score: number }) {
  const r = 54;
  const cx = 70, cy = 70;
  const circumference = Math.PI * r;
  const progress = (score / 100) * circumference;
  const color = score >= 80 ? '#4ade80' : score >= 50 ? '#fbbf24' : '#f87171';
  const label = score >= 80 ? 'Compliant' : score >= 50 ? 'Review needed' : 'Non-compliant';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="140" height="80" viewBox="0 0 140 80">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke="#3f3f46" strokeWidth="10" strokeLinecap="round"
        />
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          style={{ transition: 'stroke-dasharray 0.8s ease' }}
        />
      </svg>
      <p style={{ fontSize: '36px', fontWeight: 'bold', marginTop: '-12px', color }}>{score}</p>
      <p style={{ fontSize: '12px', fontWeight: 500, marginTop: '4px', color }}>{label}</p>
    </div>
  );
}

function StatusDot({ status }: { status: VerificationResult['status'] }) {
  const colors = { verified: '#4ade80', conflict: '#f87171', unknown: '#fbbf24' };
  return (
    <span style={{
      display: 'inline-block',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: colors[status],
      flexShrink: 0,
      marginTop: '6px'
    }} />
  );
}

function ClaimCard({ result }: { result: VerificationResult }) {
  const [open, setOpen] = useState(result.status === 'conflict');

  const statusConfig = {
    verified: { bg: 'rgba(22, 101, 52, 0.4)', border: 'rgba(22, 101, 52, 0.6)', text: '#86efac', badgeBg: 'rgba(22, 101, 52, 0.6)', badgeText: '#4ade80', label: 'Verified' },
    conflict: { bg: 'rgba(127, 29, 29, 0.4)', border: 'rgba(127, 29, 29, 0.6)', text: '#fca5a5', badgeBg: 'rgba(127, 29, 29, 0.6)', badgeText: '#f87171', label: 'Conflict' },
    unknown: { bg: 'rgba(120, 53, 15, 0.4)', border: 'rgba(120, 53, 15, 0.6)', text: '#fcd34d', badgeBg: 'rgba(120, 53, 15, 0.6)', badgeText: '#fbbf24', label: 'Unknown' },
  };
  const s = statusConfig[result.status];

  return (
    <div style={{
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(255,255,255,0.02)'
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '24px 28px',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        <StatusDot status={result.status} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: '14px', color: '#e5e5e5', lineHeight: 1.6, marginBottom: '14px' }}>"{result.claim.originalText}"</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '9999px', fontWeight: 500, background: s.badgeBg, color: s.badgeText }}>{s.label}</span>
            <span style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '9999px', background: 'rgba(30, 58, 138, 0.5)', color: '#93c5fd' }}>{result.claim.subject}</span>
            {result.matchedRule && (
              <span style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', color: '#9ca3af', fontFamily: 'monospace' }}>{result.matchedRule.sectionReference}</span>
            )}
            {result.matchedRule?.severity === 'Critical' && (
              <span style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '9999px', fontWeight: 500, background: 'rgba(127, 29, 29, 0.6)', color: '#f87171' }}>Critical</span>
            )}
          </div>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8e8ea0" strokeWidth="2"
          style={{
            flexShrink: 0,
            marginTop: '4px',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable content with animation */}
      <div style={{
        maxHeight: open ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease, opacity 0.3s ease',
        opacity: open ? 1 : 0,
      }}>
        <div style={{
          padding: '0 32px 28px 32px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          {/* Explanation box */}
          <div style={{
            marginTop: '20px',
            borderRadius: '8px',
            border: `1px solid ${s.border}`,
            background: s.bg,
            padding: '20px 24px'
          }}>
            <p style={{ fontSize: '14px', color: s.text, lineHeight: 1.6 }}>{result.explanation}</p>
          </div>

          {/* Claimed vs Rule values */}
          {(result.claimedValue || result.ruleValue) && (
            <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ borderRadius: '8px', padding: '16px 20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                <p style={{ fontSize: '12px', color: '#8e8ea0', marginBottom: '8px' }}>Claimed value</p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>{result.claimedValue ?? '—'}</p>
              </div>
              <div style={{ borderRadius: '8px', padding: '16px 20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                <p style={{ fontSize: '12px', color: '#8e8ea0', marginBottom: '8px' }}>Rule value</p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>{result.ruleValue ?? '—'}</p>
              </div>
            </div>
          )}

          {/* Matched rule */}
          {result.matchedRule && (
            <div style={{ marginTop: '16px', borderRadius: '8px', padding: '16px 20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
              <p style={{ fontSize: '12px', color: '#8e8ea0', marginBottom: '8px' }}>Matched rule</p>
              <p style={{ fontSize: '14px', color: '#e5e5e5' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '12px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', marginRight: '8px' }}>{result.matchedRule.id}</span>
                {result.matchedRule.subject}
              </p>
              <p style={{ fontSize: '12px', color: '#8e8ea0', marginTop: '8px', lineHeight: 1.6 }}>{result.matchedRule.value}</p>
            </div>
          )}

          {/* AI confidence */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
            <span style={{ fontSize: '12px', color: '#8e8ea0' }}>AI confidence:</span>
            <span style={{
              fontSize: '12px',
              fontWeight: 500,
              color: result.confidence === 'High' ? '#4ade80' : result.confidence === 'Medium' ? '#fbbf24' : '#f87171'
            }}>
              {result.confidence}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OFCReferenceSidebar({ results }: { results: VerificationResult[] }) {
  const refMap = new Map<string, { rule: NonNullable<VerificationResult['matchedRule']>; statuses: VerificationResult['status'][] }>();
  for (const r of results) {
    if (!r.matchedRule) continue;
    const key = r.matchedRule.sectionReference;
    if (refMap.has(key)) {
      refMap.get(key)!.statuses.push(r.status);
    } else {
      refMap.set(key, { rule: r.matchedRule, statuses: [r.status] });
    }
  }

  const bySource = new Map<string, typeof refMap>();
  for (const [key, val] of refMap) {
    const src = val.rule.sourceDocument;
    if (!bySource.has(src)) bySource.set(src, new Map());
    bySource.get(src)!.set(key, val);
  }

  const statusDotColor = (statuses: VerificationResult['status'][]) => {
    if (statuses.includes('conflict')) return '#f87171';
    if (statuses.includes('unknown')) return '#fbbf24';
    return '#4ade80';
  };

  if (refMap.size === 0) {
    return (
      <div style={{ borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
        <p style={{ fontSize: '14px', color: 'rgba(142,142,160,0.6)' }}>No specific sections matched.</p>
      </div>
    );
  }

  return (
    <div style={{ borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
      {Array.from(bySource.entries()).map(([source, refs]) => (
        <div key={source} style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>{source}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Array.from(refs.entries())
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([sectionRef, { rule, statuses }]) => (
                <div key={sectionRef} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 20px'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: statusDotColor(statuses),
                    flexShrink: 0,
                    marginTop: '6px'
                  }} />
                  <div>
                    <p style={{ fontSize: '14px', fontFamily: 'monospace', fontWeight: 500, color: 'white' }}>{sectionRef}</p>
                    <p style={{ fontSize: '13px', color: '#8e8ea0', marginTop: '6px', lineHeight: 1.5 }}>{rule.subject}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
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

  if (!report) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 70%, #000000 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8e8ea0' }}>
          <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Loading…
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </main>
    );
  }

  const checkedAt = new Date(report.checkedAt).toLocaleString();

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 70%, #000000 100%)' }}>
      {/* Header */}
      <header style={{ padding: '16px 24px', position: 'sticky', top: 0, zIndex: 10, background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(220, 38, 38, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(220,38,38,0.4)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L8 9M5 6L8 2L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12C3 10 5 8.5 8 8.5C11 8.5 13 10 13 12C13 13.5 11.5 14 8 14C4.5 14 3 13.5 3 12Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '14px', fontWeight: 600, color: 'white', lineHeight: 1 }}>OFC Compliance Checker</h1>
              <p style={{ fontSize: '12px', color: '#8e8ea0', marginTop: '2px' }}>Verification results</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/')}
            style={{ fontSize: '14px', color: '#8e8ea0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = '#8e8ea0'}
          >
            ← New analysis
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Score card */}
        <div style={{ borderRadius: '16px', padding: '32px', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', width: '100%' }}>
              <ScoreGauge score={report.score} />
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>Compliance Score</h2>
                <p style={{ fontSize: '14px', color: '#8e8ea0', marginBottom: '20px' }}>{report.results.length} claims checked · {checkedAt}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {[
                    { label: 'Verified', count: report.verifiedCount, color: '#4ade80', bg: 'rgba(22, 101, 52, 0.4)', border: 'rgba(22, 101, 52, 0.6)' },
                    { label: 'Conflicts', count: report.conflictCount, color: '#f87171', bg: 'rgba(127, 29, 29, 0.4)', border: 'rgba(127, 29, 29, 0.6)' },
                    { label: 'Unknown', count: report.unknownCount, color: '#fbbf24', bg: 'rgba(120, 53, 15, 0.4)', border: 'rgba(120, 53, 15, 0.6)' },
                  ].map(s => (
                    <div key={s.label} style={{ borderRadius: '12px', border: `1px solid ${s.border}`, background: s.bg, padding: '16px' }}>
                      <p style={{ fontSize: '28px', fontWeight: 'bold', color: s.color }}>{s.count}</p>
                      <p style={{ fontSize: '12px', color: '#8e8ea0', marginTop: '4px' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                {report.criticalConflicts > 0 && (
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '8px', background: 'rgba(127, 29, 29, 0.5)', border: '1px solid rgba(127, 29, 29, 0.6)', padding: '12px 16px' }}>
                    <svg style={{ width: '16px', height: '16px', color: '#f87171' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#fca5a5' }}>{report.criticalConflicts} critical conflict{report.criticalConflicts !== 1 ? 's' : ''} detected</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {/* Claims - wider */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#8e8ea0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>Claims Breakdown</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[...report.results]
                .sort((a, b) => {
                  const order = { conflict: 0, unknown: 1, verified: 2 };
                  return order[a.status] - order[b.status];
                })
                .map(r => <ClaimCard key={r.claim.id} result={r} />)
              }
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ width: '340px', flexShrink: 0 }}>
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#8e8ea0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>OFC References</h3>
            <div style={{ position: 'sticky', top: '96px' }}>
              <OFCReferenceSidebar results={report.results} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ fontSize: '12px', color: 'rgba(142,142,160,0.6)', paddingTop: '40px', paddingBottom: '24px', textAlign: 'center' }}>
          Source: {report.sourcesChecked.join(', ')}
        </div>
      </div>
    </main>
  );
}