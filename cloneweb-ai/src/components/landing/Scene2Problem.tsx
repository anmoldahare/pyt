
export default function Scene2Problem() {
  return (
    <section id="problem" className="section-container">
      <div className="flex items-baseline gap-5 mb-12 pb-5 border-b-2 border-[var(--ink)]">
        <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">01</span>
        <h2>The <em>problem</em> we're solving</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
        <div>
          <p>Traditional website cloning tools scrape flat HTML and inline CSS. They give you a static snapshot that is completely unmaintainable in a modern web development workflow.</p>
          <p>Developers need more than just visual similarity. They need <strong>component hierarchies, reusable utility classes, and semantic structures</strong>. We take a different approach: teach an agent to understand the DOM the way a senior frontend engineer does.</p>
        </div>
        <div>
          <div className="pullquote">
            <p>"The engine cannot win by simple scraping. It must learn <em>what constitutes a component, how styles map to utilities, and why</em>."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
