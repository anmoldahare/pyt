import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Scene3Recording() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to('.floating-card', {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      })
      .to('.floating-card', {
        x: '50vw',
        y: '50vh',
        scale: 0.2,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power2.in'
      }, "+=0.5")
      .from('.core-intelligence', {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.5)'
      }, "-=0.5")
      .to('.core-glow', {
        scale: 2,
        opacity: 0.8,
        duration: 1,
      }, "-=0.5");

    }, container);

    return () => ctx.revert();
  }, []);

  const dataTypes = [
    { label: "DOM Snapshot", pos: "top-10 left-10" },
    { label: "CSS Tokens", pos: "top-20 right-20" },
    { label: "Typography", pos: "bottom-20 left-20" },
    { label: "SVGs & Images", pos: "bottom-10 right-10" },
    { label: "Color Palette", pos: "top-1/2 left-5" },
    { label: "Animations", pos: "top-1/3 right-5" },
  ];

  return (
    <div ref={container} className="h-screen bg-background relative overflow-hidden flex items-center justify-center">
      
      <div className="absolute top-20 text-center z-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text mb-4">
          Record Everything. instantly.
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Our browser agent captures a full molecular scan of the target website in seconds.
        </p>
      </div>

      {dataTypes.map((type, i) => (
        <div 
          key={i}
          className={`floating-card absolute ${type.pos} glass px-6 py-4 rounded-xl shadow-xl border border-border opacity-0 translate-y-20 scale-90 z-10`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="font-mono text-sm font-semibold text-text">{type.label}</span>
          </div>
        </div>
      ))}

      <div className="core-intelligence absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-0">
        <div className="core-glow absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="w-32 h-32 bg-white rounded-2xl shadow-2xl border border-border flex items-center justify-center luxury-shadow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">AI Core</span>
        </div>
      </div>

    </div>
  );
}
