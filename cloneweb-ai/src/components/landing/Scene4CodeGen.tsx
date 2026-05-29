import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, FileCode2 } from 'lucide-react';

const codeSnippet = `
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
        >
          Accounting {' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="..."></path></svg>
            <span className="relative">made simple</span>
          </span>
          {' '}for small businesses.
        </motion.h1>
      </div>
    </section>
  );
}
`;

export default function Scene4CodeGen() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const [displayedCode, setDisplayedCode] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(codeSnippet.slice(0, index));
      index += 5;
      if (index > codeSnippet.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const files = [
    "Header.tsx", "HeroSection.tsx", "FeatureGrid.tsx", "Testimonials.tsx", "Pricing.tsx", "Footer.tsx"
  ];

  return (
    <div ref={container} className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-4 space-y-8 z-10">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Code Generation</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              DeepSeek-V4 Engine
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              Our specialized LLM translates visual layouts and tokenized DOM structures directly into perfectly typed, modular React components.
            </p>
          </div>
          
          <div className="space-y-3">
            {files.map((file, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-lg"
              >
                <FileCode2 className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-gray-300">{file}</span>
                <div className="ml-auto w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          style={{ y }}
          className="lg:col-span-8 bg-[#111111] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[600px]"
        >
          <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1A1A1A]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center font-mono text-xs text-gray-500 flex items-center justify-center gap-2">
              <Terminal className="w-3 h-3" />
              generating HeroSection.tsx
            </div>
          </div>
          
          <div className="p-6 flex-1 overflow-auto font-mono text-sm text-gray-300 leading-relaxed">
            <pre><code>{displayedCode}</code><span className="animate-pulse">|</span></pre>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
