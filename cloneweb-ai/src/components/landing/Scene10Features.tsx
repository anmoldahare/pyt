
export default function Scene10Features() {
  return (
    <section id="features" className="section-container">
      <div className="flex items-baseline gap-5 mb-12 pb-5 border-b-2 border-[var(--ink)]">
        <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">03</span>
        <h2>Key <em>features</em> & metrics</h2>
      </div>

      <div className="data-grid grid-cols-2 md:grid-cols-4">
        <div className="data-grid-item">
          <div className="font-mono text-[11px] tracking-[0.06em] text-[var(--muted)] uppercase mb-2">Tailwind v4</div>
          <div className="font-mono text-3xl text-[var(--ink)] leading-none">100%</div>
          <div className="font-mono text-[10px] text-[var(--muted)] mt-1">Utility class coverage</div>
        </div>
        <div className="data-grid-item">
          <div className="font-mono text-[11px] tracking-[0.06em] text-[var(--muted)] uppercase mb-2">Components</div>
          <div className="font-mono text-3xl text-[var(--ink)] leading-none text-[var(--red)]">Auto</div>
          <div className="font-mono text-[10px] text-[var(--muted)] mt-1">Intelligent extraction</div>
        </div>
        <div className="data-grid-item">
          <div className="font-mono text-[11px] tracking-[0.06em] text-[var(--muted)] uppercase mb-2">Typescript</div>
          <div className="font-mono text-3xl text-[var(--ink)] leading-none text-[var(--green)]">Strict</div>
          <div className="font-mono text-[10px] text-[var(--muted)] mt-1">Type definitions</div>
        </div>
        <div className="data-grid-item">
          <div className="font-mono text-[11px] tracking-[0.06em] text-[var(--muted)] uppercase mb-2">Export</div>
          <div className="font-mono text-3xl text-[var(--ink)] leading-none text-[var(--amber)]">ZIP</div>
          <div className="font-mono text-[10px] text-[var(--muted)] mt-1">Ready-to-run package</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[var(--ink)] border-2 border-[var(--ink)] my-8">
        <div className="bg-[var(--paper)] p-9">
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] mb-3">Feature 01</div>
          <div className="text-[22px] italic mb-4 text-[var(--ink)] font-serif">Pixel-Perfect Recreation</div>
          <div className="text-[15px] text-[var(--muted)] leading-[1.65] font-mono">
            CloneWeb AI ensures that the generated React application matches the exact visual specs of the source, translating complex absolute positioning and flex layouts faithfully.
          </div>
          <div className="mt-5 p-3.5 bg-black/5 border-l-[3px] border-[var(--amber)] font-mono text-[12px] text-[var(--amber)] italic leading-[1.6]">
            "Output visually indistinguishable from source."
          </div>
        </div>
        <div className="bg-[var(--paper)] p-9">
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] mb-3">Feature 02</div>
          <div className="text-[22px] italic mb-4 text-[var(--ink)] font-serif">Clean Code Architecture</div>
          <div className="text-[15px] text-[var(--muted)] leading-[1.65] font-mono">
            Instead of a single massive file, the engine splits repeating patterns into reusable React components (e.g., Cards, Buttons, Navbars).
          </div>
          <div className="mt-5 p-3.5 bg-black/5 border-l-[3px] border-[var(--green)] font-mono text-[12px] text-[var(--green)] italic leading-[1.6]">
            "Follows standard frontend best practices."
          </div>
        </div>
      </div>
    </section>
  );
}
