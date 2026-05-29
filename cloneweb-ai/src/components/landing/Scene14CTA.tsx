
export default function Scene14CTA() {
  return (
    <footer id="demo" className="bg-[var(--ink)] text-[var(--paper)] p-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t-2 border-[var(--ink)] mt-12">
      <div>
        <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40 mb-3.5">
          About
        </div>
        <div className="font-mono text-[13px] text-white/70 leading-[1.8]">
          CloneWeb AI is an experimental platform built for developers, agencies, and designers to instantly migrate static websites into fully functional React applications.
        </div>
      </div>
      
      <div>
        <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40 mb-3.5">
          Resources
        </div>
        <div className="font-mono text-[13px] text-white/70 leading-[1.8] flex flex-col gap-2">
          <a href="#" className="hover:text-[var(--paper)] transition-colors">Documentation</a>
          <a href="#" className="hover:text-[var(--paper)] transition-colors">API Reference</a>
          <a href="#" className="hover:text-[var(--paper)] transition-colors">Supported Frameworks</a>
          <a href="#" className="hover:text-[var(--paper)] transition-colors">Privacy Policy</a>
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40 mb-3.5">
          Action
        </div>
        <div className="font-mono text-[13px] text-white/70 leading-[1.8]">
          <button className="bg-[var(--paper)] text-[var(--ink)] px-6 py-3 font-mono text-[12px] uppercase tracking-wider hover:bg-[var(--red)] hover:text-[var(--paper)] transition-colors w-full mb-4">
            Try CloneWeb AI
          </button>
          <div className="text-center text-[10px] opacity-60">
            Version 1.0.0 (Beta)
          </div>
        </div>
      </div>
    </footer>
  );
}
