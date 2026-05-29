
export default function Scene1Hero() {
  return (
    <header className="border-b-2 border-[var(--ink)] relative overflow-hidden">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-[var(--border)] font-mono text-[11px] text-[var(--muted)] tracking-[0.08em] uppercase">
        <span>CloneWeb AI — Code Generation</span>
        <span>React · Tailwind · Typescript</span>
      </div>
      <div className="pt-16 pb-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 items-end">
        <div className="fade-up">
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--red)] mb-5 flex items-center gap-2.5 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[var(--red)]">
            Production-Ready Output
          </div>
          <h1 className="mb-6">
            CloneWeb <em>AI</em>
          </h1>
          <p className="text-[20px] text-[var(--muted)] leading-[1.5] max-w-[540px] italic">
            A powerful engine that transforms any website into clean, component-based React code — using intelligent DOM analysis, never generic templates.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[2px] bg-[var(--ink)] border-2 border-[var(--ink)] fade-up">
          <div className="bg-[var(--ink)] text-[var(--paper)] p-5 text-center">
            <span className="block text-4xl font-normal leading-none mb-1.5 font-mono">10x</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-50">Faster Dev</span>
          </div>
          <div className="bg-[var(--paper)] p-5 text-center">
            <span className="block text-4xl font-normal leading-none mb-1.5 font-mono">100%</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-60">React Code</span>
          </div>
          <div className="bg-[var(--paper)] p-5 text-center">
            <span className="block text-4xl font-normal leading-none mb-1.5 font-mono">DOM</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-60">Analysis</span>
          </div>
          <div className="bg-[var(--paper)] p-5 text-center">
            <span className="block text-4xl font-normal leading-none mb-1.5 font-mono">Zero</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-60">Lock-in</span>
          </div>
        </div>
      </div>
    </header>
  );
}
