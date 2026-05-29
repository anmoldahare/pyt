import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene14CTA() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={container} className="h-screen bg-text text-white relative overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/50 via-transparent to-transparent"></div>
      </div>

      <motion.div style={{ y }} className="relative z-10 text-center px-6">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
          The Future of<br />
          <span className="text-gradient">Website Replication</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto mb-12">
          Transform any website into production-ready React code with AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-white text-text px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors">
            Start Cloning Now
          </button>
          <button className="w-full sm:w-auto bg-white/10 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-colors backdrop-blur-md">
            Book Enterprise Demo
          </button>
        </div>
      </motion.div>

    </div>
  );
}
