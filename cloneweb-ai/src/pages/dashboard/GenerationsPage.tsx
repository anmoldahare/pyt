import { useState } from 'react';
import { 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Terminal, 
  Copy, 
  Download, 
  Layers, 
  Sparkles, 
  RefreshCw, 
  Search 
} from 'lucide-react';

interface GenerationRun {
  id: string;
  url: string;
  status: 'Completed' | 'Processing' | 'Failed';
  stage: string;
  progress: number;
  framework: string;
  ssim: number;
  time: string;
  duration: string;
  lines: number;
  codeSnippet: string;
  diffSnippet: string;
  error?: string;
}

export default function GenerationsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Completed' | 'Processing' | 'Failed'>('All');
  const [selectedRun, setSelectedRun] = useState<GenerationRun | null>(null);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [runs, setRuns] = useState<GenerationRun[]>([
    {
      id: "gen-8f92a",
      url: "stripe.com/checkout",
      status: "Completed",
      stage: "Optimization Complete",
      progress: 100,
      framework: "React TSX (Tailwind)",
      ssim: 0.98,
      time: "2 mins ago",
      duration: "14.2s",
      lines: 245,
      codeSnippet: `import React from 'react';\nimport { Shield, Lock } from 'lucide-react';\n\nexport default function StripeCheckout() {\n  return (\n    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">\n      <header className="border-b border-[var(--border)] py-4 px-6">\n        <div className="flex justify-between items-center">\n          <span className="font-mono text-sm tracking-wider">STRIPE SECURE</span>\n        </div>\n      </header>\n      {/* Generated DOM Nodes converted to pure React components */}\n    </div>\n  );\n}`,
      diffSnippet: `- <div style="background-color: #f5f2eb; color: #0a0a0a; border: none">\n+ <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">`
    },
    {
      id: "gen-4c11b",
      url: "linear.app/features",
      status: "Processing",
      stage: "React Component Hierarchy Synthesis",
      progress: 75,
      framework: "Next.js 15 (TSX)",
      ssim: 0.91,
      time: "15 mins ago",
      duration: "Running",
      lines: 110,
      codeSnippet: `// Processing code...`,
      diffSnippet: `// Processing code...`
    },
    {
      id: "gen-9a00f",
      url: "framer.com/templates",
      status: "Completed",
      stage: "Asset Extraction & Scoping Complete",
      progress: 100,
      framework: "React TSX (Tailwind)",
      ssim: 0.99,
      time: "2 hours ago",
      duration: "28.5s",
      lines: 840,
      codeSnippet: `import React, { useState } from 'react';\n\nexport default function FramerTemplates() {\n  const [activeTab, setActiveTab] = useState('all');\n  return (\n    <section className="relative overflow-hidden py-24">\n      <h2 className="font-serif text-5xl">Explore layouts</h2>\n    </section>\n  );\n}`,
      diffSnippet: `- <div class="grid col-4 sm-col-1 md-col-2">\n+ <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`
    },
    {
      id: "gen-2d99c",
      url: "vercel.com/analytics",
      status: "Failed",
      stage: "DOM Tree Snapshotting",
      progress: 20,
      framework: "React TSX (CSS Modules)",
      ssim: 0,
      time: "1 day ago",
      duration: "4.1s",
      lines: 0,
      codeSnippet: "",
      diffSnippet: "",
      error: "ERR_TIMEOUT: Headless browser target took longer than 30s to respond. Check if target has cloudflare bot protection enabled."
    }
  ]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestartRun = (runId: string) => {
    setRuns(runs.map(run => {
      if (run.id === runId) {
        return {
          ...run,
          status: 'Processing',
          progress: 5,
          stage: 'Initializing engine headless state...',
          duration: 'Re-running',
          error: undefined
        };
      }
      return run;
    }));
    
    // Simulate pipeline completion
    setTimeout(() => {
      setRuns(prevRuns => prevRuns.map(run => {
        if (run.id === runId) {
          return {
            ...run,
            status: 'Completed',
            progress: 100,
            stage: 'Re-compilation Successful',
            ssim: 0.97,
            duration: '18.4s',
            lines: 312,
            codeSnippet: `import React from 'react';\n\nexport default function VercelAnalytics() {\n  return (\n    <div className="p-8">\n      <h1 className="font-serif text-3xl">Analytics Ledger</h1>\n    </div>\n  );\n}`,
            diffSnippet: `+ <h1 className="font-serif text-3xl">Analytics Ledger</h1>`
          };
        }
        return run;
      }));
    }, 4000);
  };

  const filteredRuns = runs.filter(run => {
    const matchesFilter = activeFilter === 'All' || run.status === activeFilter;
    const matchesSearch = run.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          run.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          run.framework.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 fade-up">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--border)] pb-6 gap-4">
        <div>
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--red)] mb-2 block">
            Generation History
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[var(--ink)]">
            Compiler Ledger
          </h1>
          <p className="text-[17px] text-[var(--muted)] italic mt-2 max-w-[600px] leading-relaxed">
            A comprehensive history of DOM structural conversions, SSIM fidelity assessments, and generated framework structures.
          </p>
        </div>
      </div>

      {/* Filter and search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Tab filters */}
        <div className="flex border-2 border-[var(--ink)] p-0.5 bg-[var(--paper-dark)] font-mono text-xs overflow-x-auto whitespace-nowrap">
          {(['All', 'Completed', 'Processing', 'Failed'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            const count = filter === 'All' 
              ? runs.length 
              : runs.filter(r => r.status === filter).length;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all shrink-0 ${
                  isActive 
                    ? 'bg-[var(--ink)] text-[var(--paper)]' 
                    : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--border)]/30'
                }`}
              >
                {filter} ({count})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="flex items-center border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-1.5 md:w-80 gap-2">
          <Search className="w-4 h-4 text-[var(--muted)]" />
          <input 
            type="text"
            placeholder="FILTER BY RUN ID OR DOMAIN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none font-mono text-xs w-full uppercase tracking-wider text-[var(--ink)] placeholder:text-[var(--border)] focus:ring-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Runs ledger table */}
        <div className="lg:col-span-2 bg-[var(--paper)] border-2 border-[var(--ink)] overflow-hidden shadow-[4px_4px_0px_0px_rgba(10,10,10,0.08)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--ink)] bg-[var(--paper-dark)] text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                  <th className="px-5 py-4 font-semibold">Run ID</th>
                  <th className="px-5 py-4 font-semibold">Target URL</th>
                  <th className="px-5 py-4 font-semibold">Fidelity</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {filteredRuns.map((run) => {
                  const isSelected = selectedRun?.id === run.id;
                  return (
                    <tr 
                      key={run.id}
                      onClick={() => setSelectedRun(run)}
                      className={`hover:bg-[var(--paper-dark)]/50 cursor-pointer transition-colors text-sm ${
                        isSelected ? 'bg-[var(--paper-dark)]' : ''
                      }`}
                    >
                      <td className="px-5 py-4 font-mono font-semibold text-[13px] text-[var(--ink)]">
                        {run.id}
                      </td>
                      <td className="px-5 py-4 font-serif">
                        <div className="font-semibold text-[16px]">{run.url}</div>
                        <div className="text-[10px] text-[var(--muted)] font-mono uppercase mt-0.5">
                          {run.framework}
                        </div>
                      </td>
                      <td className="px-5 py-4 font-mono">
                        {run.status === 'Failed' ? (
                          <span className="text-[var(--red)]">—</span>
                        ) : (
                          <span className={`${run.ssim >= 0.95 ? 'text-[var(--green)]' : 'text-[var(--amber)]'} font-bold`}>
                            {(run.ssim * 100).toFixed(0)}% SSIM
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            run.status === 'Completed' ? 'bg-[var(--green)]' :
                            run.status === 'Processing' ? 'bg-[var(--amber)] animate-pulse' :
                            'bg-[var(--red)]'
                          }`} />
                          <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink)]">
                            {run.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end gap-1.5">
                          {run.status === 'Completed' && (
                            <>
                              <button 
                                onClick={() => copyToClipboard(run.codeSnippet)}
                                className="p-1.5 border border-[var(--border)] hover:border-[var(--ink)] text-[var(--muted)] hover:text-[var(--ink)] bg-[var(--paper)] transition-all"
                                title="Copy React Code"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => alert(`Downloading TSX module bundle for ${run.id}`)}
                                className="p-1.5 border border-[var(--border)] hover:border-[var(--ink)] text-[var(--muted)] hover:text-[var(--ink)] bg-[var(--paper)] transition-all"
                                title="Download Module"
                              >
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                          {run.status === 'Failed' && (
                            <button 
                              onClick={() => handleRestartRun(run.id)}
                              className="p-1.5 border border-[var(--border)] hover:border-[var(--ink)] text-[var(--red)] hover:bg-[var(--red-soft)] bg-[var(--paper)] transition-all flex items-center gap-1 font-mono text-[9px] font-bold uppercase"
                              title="Re-run pipeline compile"
                            >
                              <RefreshCw className="w-3 h-3" />
                              Retry
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Detail Panel */}
        <div className="bg-[var(--paper)] border-2 border-[var(--ink)] p-5 space-y-6 shadow-[4px_4px_0px_0px_rgba(10,10,10,0.08)]">
          {selectedRun ? (
            <div className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--red)] uppercase block mb-1">
                    RUN PROFILE
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--ink)] font-semibold">{selectedRun.id}</h3>
                  <span className="font-mono text-xs text-[var(--muted)]">{selectedRun.url}</span>
                </div>
                <button 
                  onClick={() => setSelectedRun(null)}
                  className="text-xs font-mono border border-[var(--border)] px-2 py-1 uppercase tracking-wider text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
                >
                  Clear
                </button>
              </div>

              {/* Status info */}
              <div className="grid grid-cols-2 gap-4 border-b border-[var(--border)] pb-4 font-mono text-xs">
                <div>
                  <span className="text-[var(--muted)] uppercase tracking-wider text-[10px] block">Duration</span>
                  <span className="font-semibold text-[var(--ink)] block mt-0.5">{selectedRun.duration}</span>
                </div>
                <div>
                  <span className="text-[var(--muted)] uppercase tracking-wider text-[10px] block">Captured Date</span>
                  <span className="font-semibold text-[var(--ink)] block mt-0.5">{selectedRun.time}</span>
                </div>
                <div>
                  <span className="text-[var(--muted)] uppercase tracking-wider text-[10px] block">Framework</span>
                  <span className="font-semibold text-[var(--ink)] block mt-0.5">{selectedRun.framework}</span>
                </div>
                <div>
                  <span className="text-[var(--muted)] uppercase tracking-wider text-[10px] block">Total Lines</span>
                  <span className="font-semibold text-[var(--ink)] block mt-0.5">{selectedRun.lines} lines</span>
                </div>
              </div>

              {/* Pipeline Progress stages */}
              <div>
                <h4 className="font-mono text-[11px] uppercase text-[var(--ink)] tracking-widest mb-3 flex items-center gap-1.5 font-bold">
                  <Layers className="w-3.5 h-3.5 text-[var(--red)]" />
                  Synthesis Pipeline Progress
                </h4>
                
                <div className="space-y-3.5 font-mono text-[11px]">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[var(--ink)] uppercase">Pipeline Pipeline Code:</span>
                      <span className="font-bold">{selectedRun.progress}%</span>
                    </div>
                    <div className="h-2 bg-[var(--paper-dark)] border border-[var(--ink)] overflow-hidden p-[1px]">
                      <div 
                        className="bg-[var(--ink)] h-full transition-all duration-500" 
                        style={{ width: `${selectedRun.progress}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-[var(--muted)] italic mt-1 uppercase tracking-wider">
                      Current stage: {selectedRun.stage}
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-[var(--border)] pt-3 text-[10px] text-[var(--muted)] uppercase">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--green)] font-bold">✓</span>
                      <span>DOM Hierarchy parsing (Complete)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedRun.progress >= 50 ? "text-[var(--green)] font-bold" : "text-[var(--border)]"}>
                        {selectedRun.progress >= 50 ? "✓" : "○"}
                      </span>
                      <span>Aesthetic Layout alignment checking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedRun.progress >= 75 ? "text-[var(--green)] font-bold" : "text-[var(--border)]"}>
                        {selectedRun.progress >= 75 ? "✓" : "○"}
                      </span>
                      <span>React component modular refactoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedRun.progress === 100 ? "text-[var(--green)] font-bold" : "text-[var(--border)]"}>
                        {selectedRun.progress === 100 ? "✓" : "○"}
                      </span>
                      <span>TypeScript type injection & Scoping rules</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code viewer / Error Message */}
              {selectedRun.status === 'Failed' ? (
                <div className="border-2 border-[var(--red)] bg-[var(--red-soft)] p-4 font-mono text-[10px] text-[var(--ink)] space-y-2">
                  <div className="flex items-center gap-1.5 text-[var(--red)] font-bold uppercase">
                    <AlertTriangle className="w-4 h-4" />
                    Fatal Compilation Error
                  </div>
                  <p className="normal-case leading-relaxed leading-normal whitespace-pre-wrap">{selectedRun.error}</p>
                </div>
              ) : selectedRun.status === 'Processing' ? (
                <div className="border-2 border-dashed border-[var(--border)] p-6 text-center text-xs font-mono text-[var(--muted)] space-y-2 bg-[var(--paper-dark)]/30">
                  <RefreshCw className="w-5 h-5 animate-spin mx-auto text-[var(--muted)]" />
                  <span className="block uppercase tracking-wider font-semibold">Awaiting synthesis completion...</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-mono text-[11px] uppercase text-[var(--ink)] tracking-widest font-bold">
                      AST Cleaned Diff Snapshot
                    </h4>
                    <span className="font-mono text-[9px] text-[var(--muted)] uppercase border border-[var(--border)] px-1.5 py-0.5">
                      Unified Diff
                    </span>
                  </div>
                  
                  {/* Styled Code Diff block */}
                  <div className="bg-[var(--ink)] text-[var(--paper)] p-3.5 font-mono text-[10px] overflow-x-auto rounded-sm leading-relaxed border-2 border-[var(--ink)]">
                    <pre className="text-gray-400">{selectedRun.diffSnippet}</pre>
                  </div>

                  <button 
                    onClick={() => {
                      copyToClipboard(selectedRun.codeSnippet);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[var(--ink)] text-[var(--paper)] py-2.5 font-mono text-[11px] uppercase tracking-wider hover:bg-transparent hover:text-[var(--ink)] border border-[var(--ink)] transition-all font-bold"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-soft)]" />
                        Copied TSX Module
                      </>
                    ) : (
                      <>
                        <Terminal className="w-3.5 h-3.5" />
                        Copy Full TSX Component
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="py-16 text-center text-xs font-mono text-[var(--muted)] space-y-3">
              <Activity className="w-10 h-10 text-[var(--border)] mx-auto" />
              <span className="block uppercase tracking-widest font-semibold">Select a compiler run</span>
              <p className="max-w-[200px] mx-auto italic text-[10px] leading-relaxed">
                Review the extraction pipelines, audit fidelity indices, and inspect synthesized React code templates.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Info Banner */}
      <div className="border-t-2 border-[var(--ink)] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-[var(--muted)]">
        <div>
          <span>REPOSITORIES DETECTED: 4 CLIENT TARGETS</span>
          <span className="mx-2">•</span>
          <span>PIPELINE ENGINE: AST-SYNTH-V1</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--green)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider">All compiler builds run in secure sandboxed headless workers.</span>
        </div>
      </div>
    </div>
  );
}
