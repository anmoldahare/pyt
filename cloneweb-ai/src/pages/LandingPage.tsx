import Scene1Hero from '../components/landing/Scene1Hero';
import Scene2Problem from '../components/landing/Scene2Problem';
import Scene4CodeGen from '../components/landing/Scene4CodeGen';
import Scene10Features from '../components/landing/Scene10Features';
import Scene14CTA from '../components/landing/Scene14CTA';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Scene1Hero />
      
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--ink)] text-[var(--paper)] px-6 md:px-12 flex border-b-2 border-[var(--ink)] overflow-x-auto whitespace-nowrap">
        <a href="#problem" className="text-[var(--paper)] no-underline font-mono text-[11px] tracking-[0.08em] uppercase py-[14px] px-5 opacity-50 transition-opacity hover:opacity-100 border-r border-white/10">
          Problem
        </a>
        <a href="#pipeline" className="text-[var(--paper)] no-underline font-mono text-[11px] tracking-[0.08em] uppercase py-[14px] px-5 opacity-50 transition-opacity hover:opacity-100 border-r border-white/10">
          Pipeline
        </a>
        <a href="#features" className="text-[var(--paper)] no-underline font-mono text-[11px] tracking-[0.08em] uppercase py-[14px] px-5 opacity-50 transition-opacity hover:opacity-100 border-r border-white/10">
          Features
        </a>
        <a href="#demo" className="text-[var(--paper)] no-underline font-mono text-[11px] tracking-[0.08em] uppercase py-[14px] px-5 opacity-50 transition-opacity hover:opacity-100 border-r border-white/10">
          Demo
        </a>
      </nav>

      <Scene2Problem />
      <Scene4CodeGen />
      <Scene10Features />
      <Scene14CTA />
    </div>
  );
}
