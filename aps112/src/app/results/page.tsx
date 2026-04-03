'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { VerificationReport, VerificationResult } from '@/types';

// SVG arc score gauge
function ScoreGauge({ score }: { score: number }) {
  const r = 54;
  const cx = 70, cy = 70;
  const circumference = Math.PI * r; // half-circle
  const progress = (score / 100) * circumference;
  const color = score >= 80 ? '#4ade80' : score >= 50 ? '#fbbf24' : '#f87171';
  const label = score >= 80 ? 'Compliant' : score >= 50 ? 'Review needed' : 'Non-compliant';

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="80" viewBox="0 0 140 80">
        {/* Track */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke="#3f3f46" strokeWidth="10" strokeLinecap="round"
        />
        {/* Progress */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          style={{ transition: 'stroke-dasharray 0.8s ease' }}
        />
      </svg>
      <p className="text-4xl font-bold mt-[-12px]" style={{ color }}>{score}</p>
      <p className="text-xs font-medium mt-1" style={{ color }}>{label}</p>
    </div>
  );
}

function StatusDot({ status }: { status: VerificationResult['status'] }) {
  const map = {
    verified: 'bg-green-400',
    conflict: 'bg-red-400',
    unknown: 'bg-amber-400',
  };
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${map[status]} shrink-0 mt-1.5`} />;
}

function ClaimCard({ result }: { result: VerificationResult }) {
  const [open, setOpen] = useState(result.status === 'conflict');

  const statusConfig = {
    verified: {
      bg: 'bg-green-950/40',
      border: 'border-green-800/60',
      text: 'text-green-300',
      badge: 'bg-green-900/60 text-green-400',
      label: 'Verified',
    },
    conflict: {
      bg: 'bg-red-950/40',
      border: 'border-red-800/60',
      text: 'text-red-300',
      badge: 'bg-red-900/60 text-red-400',
      label: 'Conflict',
    },
    unknown: {
      bg: 'bg-amber-950/40',
      border: 'border-amber-800/60',
      text: 'text-amber-300',
      badge: 'bg-amber-900/60 text-amber-400',
      label: 'Unknown',
    },
  };
  const s = statusConfig[result.status];

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      {/* Header row - increased padding */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 px-6 py-6 text-left hover:bg-white/5 transition-colors"
      >
        <StatusDot status={result.status} />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-200 leading-relaxed mb-4">"{result.claim.originalText}"</p>
          <div className="flex flex-wrap gap-2.5">
            <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${s.badge}`}>{s.label}</span>
            <span className="text-xs px-3 py-1.5 rounded-full bg-blue-900/50 text-blue-300">{result.claim.subject}</span>
            {result.matchedRule && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-400 font-mono">{result.matchedRule.sectionReference}</span>
            )}
            {result.matchedRule?.severity === 'Critical' && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-red-900/60 text-red-400 font-medium">Critical</span>
            )}
          </div>
        </div>
        <svg className={`w-4 h-4 text-[#8e8ea0] shrink-0 mt-1 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded detail */}
      {open && (
        <div className="px-6 pb-6 border-t border-white/10">
          <div className={`mt-5 rounded-lg border ${s.border} ${s.bg} px-5 py-4`}>
            <p className={`text-sm ${s.text} leading-relaxed`}>{result.explanation}</p>
          </div>

          {(result.claimedValue || result.ruleValue) && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg glass-card px-4 py-3.5">
                <p className="text-xs text-[#8e8ea0] mb-1.5">Claimed value</p>
                <p className="text-sm font-medium text-white">{result.claimedValue ?? '—'}</p>
              </div>
              <div className="rounded-lg glass-card px-4 py-3.5">
                <p className="text-xs text-[#8e8ea0] mb-1.5">Rule value</p>
                <p className="text-sm font-medium text-white">{result.ruleValue ?? '—'}</p>
              </div>
            </div>
          )}

          {result.matchedRule && (
            <div className="mt-4 rounded-lg glass-card px-4 py-3.5">
              <p className="text-xs text-[#8e8ea0] mb-1.5">Matched rule</p>
              <p className="text-sm text-gray-200">
                <span className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded mr-2">{result.matchedRule.id}</span>
                {result.matchedRule.subject}
              </p>
              <p className="text-xs text-[#8e8ea0] mt-2 leading-relaxed">{result.matchedRule.value}</p>
            </div>
          )}

          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-[#8e8ea0]">AI confidence:</span>
            <span className={`text-xs font-medium ${result.confidence === 'High' ? 'text-green-400' : result.confidence === 'Medium' ? 'text-amber-400' : 'text-red-400'}`}>
              {result.confidence}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function OFCReferenceSidebar({ results }: { results: VerificationResult[] }) {
  // Collect matched rules with their result status, deduplicated by sectionReference
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

  // Group by sourceDocument
  const bySource = new Map<string, typeof refMap>();
  for (const [key, val] of refMap) {
    const src = val.rule.sourceDocument;
    if (!bySource.has(src)) bySource.set(src, new Map());
    bySource.get(src)!.set(key, val);
  }

  const statusDotColor = (statuses: VerificationResult['status'][]) => {
    if (statuses.includes('conflict')) return 'bg-red-400';
    if (statuses.includes('unknown')) return 'bg-amber-400';
    return 'bg-green-400';
  };

  if (refMap.size === 0) {
    return (
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xs font-semibold text-[#8e8ea0] uppercase tracking-wider mb-4">OFC References</h3>
        <p className="text-sm text-[#8e8ea0]/60">No specific sections matched.</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 space-y-5">
      <h3 className="text-xs font-semibold text-[#8e8ea0] uppercase tracking-wider">OFC References</h3>
      {Array.from(bySource.entries()).map(([source, refs]) => (
        <div key={source}>
          <p className="text-sm font-medium text-white/80 mb-4 leading-tight">{source}</p>
          <div className="space-y-3">
            {Array.from(refs.entries())
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([sectionRef, { rule, statuses }]) => (
                <div key={sectionRef} className="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3.5">
                  <span className={`inline-block w-2 h-2 rounded-full ${statusDotColor(statuses)} shrink-0 mt-1.5`} />
                  <div className="min-w-0">
                    <p className="text-sm font-mono font-medium text-white">{sectionRef}</p>
                    <p className="text-sm text-[#8e8ea0] mt-1.5 leading-snug">{rule.subject}</p>
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
      <main className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 70%, #000000 100%)' }}>
        <div className="flex items-center gap-2 text-[#8e8ea0]">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Loading…
        </div>
      </main>
    );
  }

  const checkedAt = new Date(report.checkedAt).toLocaleString();

  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 70%, #000000 100%)' }}>
      {/* Header */}
      <header className="glass-header px-6 py-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/80 flex items-center justify-center" style={{ boxShadow: '0 2px 8px rgba(220,38,38,0.4)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L8 9M5 6L8 2L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12C3 10 5 8.5 8 8.5C11 8.5 13 10 13 12C13 13.5 11.5 14 8 14C4.5 14 3 13.5 3 12Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white leading-none">OFC Compliance Checker</h1>
              <p className="text-xs text-[#8e8ea0] mt-0.5">Verification results</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/')}
            className="text-sm text-[#8e8ea0] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            ← New analysis
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Score + summary card - centered at top */}
        <div className="glass rounded-2xl p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ScoreGauge score={report.score} />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg font-semibold text-white mb-2">Compliance Score</h2>
              <p className="text-sm text-[#8e8ea0] mb-5">{report.results.length} claims checked · {checkedAt}</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Verified', count: report.verifiedCount, color: 'text-green-400', bg: 'bg-green-950/40 border-green-800/60' },
                  { label: 'Conflicts', count: report.conflictCount, color: 'text-red-400', bg: 'bg-red-950/40 border-red-800/60' },
                  { label: 'Unknown', count: report.unknownCount, color: 'text-amber-400', bg: 'bg-amber-950/40 border-amber-800/60' },
                ].map(s => (
                  <div key={s.label} className={`rounded-xl border px-4 py-4 ${s.bg}`}>
                    <p className={`text-3xl font-bold ${s.color}`}>{s.count}</p>
                    <p className="text-xs text-[#8e8ea0] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              {report.criticalConflicts > 0 && (
                <div className="mt-4 flex items-center justify-center md:justify-start gap-2 rounded-lg bg-red-950/50 border border-red-800/60 px-4 py-3">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-sm font-medium text-red-300">{report.criticalConflicts} critical conflict{report.criticalConflicts !== 1 ? 's' : ''} detected</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Two column layout for claims and references */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content - Claims */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-[#8e8ea0] uppercase tracking-wider mb-5">Claims Breakdown</h3>
            <div className="space-y-5">
              {/* Show conflicts first, then unknowns, then verified */}
              {[...report.results]
                .sort((a, b) => {
                  const order = { conflict: 0, unknown: 1, verified: 2 };
                  return order[a.status] - order[b.status];
                })
                .map(r => <ClaimCard key={r.claim.id} result={r} />)
              }
            </div>
          </div>

          {/* Right sidebar — OFC references - now wider */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-24">
              <OFCReferenceSidebar results={report.results} />
            </div>
          </div>
        </div>

        {/* Source footer */}
        <div className="text-xs text-[#8e8ea0]/60 pt-10 pb-6 text-center">
          Source: {report.sourcesChecked.join(', ')}
        </div>
      </div>
    </main>
  );
}
