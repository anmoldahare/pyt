import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene6Comparison() {
  const container = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={container} className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Visual Regression Testing</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-6">
          Pixel-Perfect Accuracy
        </h3>
        <p className="text-xl text-muted max-w-3xl mx-auto">
          We use SSIM (Structural Similarity Index) to compare the generated React build against the original website screenshot.
        </p>
      </div>

      <motion.div style={{ scale }} className="max-w-6xl mx-auto px-6">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border luxury-shadow group cursor-ew-resize"
             onMouseMove={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
               setSliderPos((x / rect.width) * 100);
             }}>
          
          {/* Original (Underneath) */}
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-300">Original Website</div>
            {/* In a real app, this would be an image: <img src="/original.jpg" className="w-full h-full object-cover" /> */}
          </div>

          {/* Generated (Clipped on top) */}
          <div 
            className="absolute inset-0 bg-white border-r-2 border-primary flex items-center justify-center overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="text-4xl font-bold text-primary opacity-50">Generated React Code</div>
            {/* <img src="/generated.jpg" className="w-full h-full object-cover" /> */}
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-primary/50"></div>
                <div className="w-0.5 h-3 bg-primary/50"></div>
              </div>
            </div>
          </div>

          {/* Live SSIM Score */}
          <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full font-mono font-bold text-success flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            SSIM: 0.97
          </div>

        </div>
      </motion.div>
    </div>
  );
}
