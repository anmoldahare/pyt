import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function Counter({ from, to, duration, suffix = '' }: any) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Scene9Metrics() {
  const metrics = [
    { label: "Visual Fidelity", to: 97, suffix: "%", color: "text-primary" },
    { label: "Refinement Rounds", to: 3, suffix: "", color: "text-accent" },
    { label: "Build Success", to: 99, suffix: ".9%", color: "text-success" },
    { label: "Lines of React", to: 8500, suffix: "+", color: "text-secondary" },
  ];

  return (
    <div className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {metrics.map((m, i) => (
          <div key={i} className="space-y-2">
            <div className={`text-5xl md:text-6xl font-bold tracking-tighter ${m.color}`}>
              <Counter from={0} to={m.to} duration={2000} suffix={m.suffix} />
            </div>
            <div className="text-sm font-semibold text-muted tracking-wide uppercase">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
