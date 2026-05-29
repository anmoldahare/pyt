import { motion } from 'framer-motion';
import { LayoutTemplate, ScanEye, Code2, Layers, RefreshCcw, Settings2 } from 'lucide-react';

const features = [
  { icon: LayoutTemplate, title: "DOM Intelligence", desc: "Extracts precise semantic HTML and layout structures." },
  { icon: ScanEye, title: "Visual Regression", desc: "Pixel-by-pixel SSIM analysis to ensure 100% accuracy." },
  { icon: Code2, title: "React Generation", desc: "Produces modular, clean, and typed React components." },
  { icon: Layers, title: "Asset Extraction", desc: "Automatically downloads and optimizes SVGs and images." },
  { icon: RefreshCcw, title: "Multi-Round Repair", desc: "Self-corrects layout inconsistencies autonomously." },
  { icon: Settings2, title: "Dynamic Content", desc: "Identifies and creates props for dynamic text and data." }
];

export default function Scene10Features() {
  return (
    <div className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Everything you need. <br />Nothing you don't.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl border border-border bg-surface hover:shadow-xl transition-shadow group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-text mb-3">{feat.title}</h4>
              <p className="text-muted leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
