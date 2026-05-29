import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Scene5Pipeline() {
  const container = useRef<HTMLDivElement>(null);
  const scrollWrapper = useRef<HTMLDivElement>(null);

  const steps = [
    "Recording", "Extraction", "Generation", "Build", "Screenshot Capture", "SSIM Analysis", "Qwen Analysis", "Refinement", "Deploy"
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wrapper = scrollWrapper.current;
      if (!wrapper) return;

      gsap.to(wrapper, {
        x: () => -(wrapper.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
      
      gsap.utils.toArray('.pipeline-step').forEach((step: any) => {
        gsap.fromTo(step, 
          { opacity: 0.2, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1,
            scrollTrigger: {
              trigger: step,
              containerAnimation: gsap.getById("pipeline-scroll"),
              start: "left center",
              end: "right center",
              scrub: true,
            }
          }
        );
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-screen bg-background flex flex-col justify-center overflow-hidden relative">
      
      <div className="absolute top-20 left-10 md:left-20 z-10">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Automated Pipeline</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
          Zero Human Intervention
        </h3>
      </div>

      <div ref={scrollWrapper} id="pipeline-scroll" className="flex items-center gap-12 px-[50vw] mt-20">
        {steps.map((step, i) => (
          <div key={i} className="pipeline-step flex items-center gap-12 shrink-0">
            <div className="glass-card w-80 h-80 flex flex-col items-center justify-center p-8 text-center luxury-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-6">
                {i + 1}
              </div>
              <h4 className="text-2xl font-bold text-text mb-2">{step}</h4>
              <p className="text-muted">Automated processing stage</p>
            </div>
            
            {i < steps.length - 1 && (
              <div className="w-24 h-1 bg-border relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-primary -translate-x-full" 
                     data-speed="fast" />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
