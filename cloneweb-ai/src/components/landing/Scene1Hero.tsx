import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene1Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={container} className="relative h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #4F46E5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <motion.div 
        style={{ scale, opacity, y: yText }} 
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium">CloneWeb AI is now available in beta</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-extrabold tracking-tighter text-text mb-6"
        >
          CloneWeb <span className="text-gradient">AI</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl text-muted font-medium max-w-3xl mb-12"
        >
          Clone Any Website Into Production-Ready React Code
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6"
        >
          <button className="bg-text text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-colors luxury-shadow">
            Start Cloning
          </button>
          <button className="flex items-center gap-3 text-text font-medium hover:text-primary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-border group-hover:scale-105 transition-transform">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48113 13.5 8.86603L1.5 15.7942C0.833334 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" fill="currentColor"/>
              </svg>
            </div>
            Watch Demo
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
