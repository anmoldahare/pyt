import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Scene2Problem() {
  const container = useRef<HTMLDivElement>(null);
  const elements = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      tl.from('.problem-text', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.complexity-box', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        rotation: 5,
        ease: 'back.out(1.7)'
      }, "-=0.5")
      .to('.complexity-box', {
        x: (i) => (i % 2 === 0 ? 50 : -50),
        y: (i) => (i % 2 === 0 ? -20 : 20),
        rotation: (i) => (i % 2 === 0 ? -10 : 10),
        duration: 2,
        ease: 'power1.inOut'
      }, "-=0.5");

    }, container);

    return () => ctx.revert();
  }, []);

  const boxes = [
    { title: "Inspect Elements", color: "bg-red-50 text-red-600 border-red-200" },
    { title: "Manual CSS", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { title: "Rebuild Layout", color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
    { title: "Extract Assets", color: "bg-green-50 text-green-600 border-green-200" },
    { title: "Responsive Fixes", color: "bg-purple-50 text-purple-600 border-purple-200" },
  ];

  return (
    <div ref={container} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <div className="problem-text">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text leading-tight">
              Rebuilding a website takes <span className="text-red-500">weeks of manual labor.</span>
            </h3>
          </div>
          
          <p className="problem-text text-xl text-muted leading-relaxed">
            Developers waste countless hours inspecting DOM elements, copying CSS properties, saving assets, and fighting layout inconsistencies. It's an outdated, frustrating process.
          </p>
        </div>

        <div ref={elements} className="relative h-[500px] flex items-center justify-center">
          <div className="absolute w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative w-full max-w-md aspect-square">
            {boxes.map((box, i) => (
              <div 
                key={i}
                className={`complexity-box absolute glass-card border px-6 py-4 shadow-lg ${box.color}`}
                style={{
                  top: `${10 + i * 15}%`,
                  left: `${10 + (i % 2) * 30}%`,
                  zIndex: 10 - i
                }}
              >
                <span className="font-mono text-sm font-semibold">{box.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
