
export default function Scene4CodeGen() {
  return (
    <section id="pipeline" className="section-container">
      <div className="flex items-baseline gap-5 mb-12 pb-5 border-b-2 border-[var(--ink)]">
        <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">02</span>
        <h2>The <em>pipeline</em> sequence</h2>
      </div>

      <p>The code generation pipeline breaks down complex web pages into modular React components through a deterministic 3-step sequence.</p>

      <div className="flex flex-col md:flex-row items-stretch border-2 border-[var(--ink)] my-10 overflow-hidden">
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] relative bg-[var(--ink)] text-[var(--paper)]">
          <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/50 mb-2.5">Step 01</div>
          <div className="text-[15px] font-normal mb-2 font-mono">DOM Analysis</div>
          <div className="text-[13px] text-white/55 leading-[1.5] font-mono">
            The agent traverses the live DOM, extracting the layout tree, computed styles, and accessibility attributes while filtering out noise.
          </div>
        </div>
        
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-[var(--border)] relative bg-[var(--paper)]">
          <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--muted)] mb-2.5">Step 02</div>
          <div className="text-[15px] font-normal mb-2 font-mono text-[var(--ink)]">Style Translation</div>
          <div className="text-[13px] text-[var(--muted)] leading-[1.5] font-mono">
            Computed CSS is mapped to exact Tailwind classes. Unmatched styles are extracted into a structured custom CSS or arbitrary variants.
          </div>
        </div>
        
        <div className="flex-1 p-6 relative bg-[var(--paper)]">
          <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--muted)] mb-2.5">Step 03</div>
          <div className="text-[15px] font-normal mb-2 font-mono text-[var(--ink)]">React Generation</div>
          <div className="text-[13px] text-[var(--muted)] leading-[1.5] font-mono">
            The tree is split into logical React components. Props are inferred, and the final Typescript code is formatted and verified.
          </div>
        </div>
      </div>
    </section>
  );
}
