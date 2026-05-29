import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Scene7Refinement() {
  const [activeRound, setActiveRound] = useState(0);

  const rounds = [
    {
      title: "Round 1: Initial Build",
      score: "0.71",
      issues: ["Incorrect font weight on hero", "Missing box-shadow on cards"],
      color: "border-red-200 bg-red-50 text-red-700"
    },
    {
      title: "Round 2: Correction",
      score: "0.88",
      issues: ["Padding mismatch in footer"],
      color: "border-yellow-200 bg-yellow-50 text-yellow-700"
    },
    {
      title: "Round 3: Pixel Perfect",
      score: "0.98",
      issues: ["None - Build Verified"],
      color: "border-green-200 bg-green-50 text-green-700"
    }
  ];

  return (
    <div className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Self-Healing</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-6">
          Multi-Round Optimization
        </h3>
        <p className="text-xl text-muted max-w-3xl mx-auto">
          If the SSIM score is below 0.95, the AI agent uses Qwen3-VL to analyze the visual diff and automatically writes a patch.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>
          {rounds.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveRound(idx)}
              className={`relative z-10 w-12 h-12 rounded-full font-bold flex items-center justify-center transition-all ${
                activeRound >= idx ? 'bg-primary text-white shadow-lg' : 'bg-white border-2 border-border text-muted hover:border-primary/50'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div className="h-64 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRound}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`glass-card p-8 border-2 ${activeRound === 2 ? 'border-success' : 'border-border'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-text mb-1">{rounds[activeRound].title}</h4>
                  <p className="text-muted text-sm">Visual analysis complete</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-muted mb-1">SSIM Score</div>
                  <div className={`text-3xl font-mono font-bold ${activeRound === 2 ? 'text-success' : 'text-text'}`}>
                    {rounds[activeRound].score}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-text mb-2">Identified Issues:</div>
                {rounds[activeRound].issues.map((issue, idx) => (
                  <div key={idx} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${rounds[activeRound].color}`}>
                    {activeRound === 2 ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    {issue}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
