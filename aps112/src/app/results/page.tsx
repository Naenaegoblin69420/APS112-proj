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
  const color = score >= 80 ? '#16a34a' : score >= 50 ? '#d97706' : '#dc2626';
  const label = score >= 80 ? 'Compliant' : score >= 50 ? 'Review needed' : 'Non-compliant';

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="80" viewBox="0 0 140 80">
        {/* Track */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round"
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
    verified: 'bg-green-500',
    conflict: 'bg-red-500',
    unknown: 'bg-amber-400',
  };
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${map[status]} shrink-0 mt-1`} />;
}

function ClaimCard({ result }: { result: VerificationResult }) {
  const [open, setOpen] = useState(result.status === 'conflict');

  const statusConfig = {
    verified: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', badge: 'bg-green-100 text-green-700', label: 'Verified' },
    conflict: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', badge: 'bg-red-100 text-red-700', label: 'Conflict' },
    unknown: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-100 text-amber-700', label: 'Unknown' },
  };
  const s = statusConfig[result.status];

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors"
      >
        <StatusDot status={result.status} />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-800 leading-snug">"{result.claim.originalText}"</p>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.badge}`}>{s.label}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{result.claim.subject}</span>
            {result.matchedRule && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-mono">{result.matchedRule.sectionReference}</span>
            )}
            {result.matchedRule?.severity === 'Critical' && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">Critical</span>
            )}
          </div>
        </div>
        <svg className={`w-4 h-4 text-gray-400 shrink-0 mt-0.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded detail */}
      {open && (
        <div className={`px-4 pb-4 border-t border-gray-100`}>
          <div className={`mt-3 rounded-lg border ${s.border} ${s.bg} px-3 py-2.5`}>
            <p className={`text-sm ${s.text} leading-relaxed`}>{result.explanation}</p>
          </div>

          {(result.claimedValue || result.ruleValue) && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-2">
                <p className="text-xs text-gray-500 mb-1">Claimed value</p>
                <p className="text-sm font-medium text-gray-900">{result.claimedValue ?? '—'}</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-2">
                <p className="text-xs text-gray-500 mb-1">Rule value</p>
                <p className="text-sm font-medium text-gray-900">{result.ruleValue ?? '—'}</p>
              </div>
            </div>
          )}

          {result.matchedRule && (
            <div className="mt-3 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2">
              <p className="text-xs text-gray-500 mb-1">Matched rule</p>
              <p className="text-sm text-gray-900">
                <span className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded mr-2">{result.matchedRule.id}</span>
                {result.matchedRule.subject}
              </p>
              <p className="text-xs text-gray-500 mt-1">{result.matchedRule.value}</p>
            </div>
          )}

          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-xs text-gray-400">AI confidence:</span>
            <span className={`text-xs font-medium ${result.confidence === 'High' ? 'text-green-600' : result.confidence === 'Medium' ? 'text-amber-600' : 'text-red-500'}`}>
              {result.confidence}
            </span>
          </div>
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

  if (!report) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-500">
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
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L8 9M5 6L8 2L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12C3 10 5 8.5 8 8.5C11 8.5 13 10 13 12C13 13.5 11.5 14 8 14C4.5 14 3 13.5 3 12Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-900 leading-none">OFC Compliance Checker</h1>
              <p className="text-xs text-gray-500 mt-0.5">Verification results</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/')}
            className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1.5 transition-colors"
          >
            ← New analysis
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* Score + summary card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-start gap-8">
            <ScoreGauge score={report.score} />
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900 mb-1">Compliance score</h2>
              <p className="text-xs text-gray-500 mb-4">{report.results.length} claims checked · {checkedAt}</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Verified', count: report.verifiedCount, color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
                  { label: 'Conflicts', count: report.conflictCount, color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
                  { label: 'Unknown', count: report.unknownCount, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
                ].map(s => (
                  <div key={s.label} className={`rounded-xl border px-3 py-2.5 ${s.bg}`}>
                    <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              {report.criticalConflicts > 0 && (
                <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xs font-medium text-red-700">{report.criticalConflicts} critical conflict{report.criticalConflicts !== 1 ? 's' : ''} detected</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Claim cards */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Claims breakdown</h3>
          <div className="space-y-2">
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

        {/* Source */}
        <div className="text-xs text-gray-400 pb-4">
          Source: {report.sourcesChecked.join(', ')}
        </div>
      </div>
    </main>
  );
}
