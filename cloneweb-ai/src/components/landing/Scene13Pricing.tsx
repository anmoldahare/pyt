import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Scene13Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      desc: "Perfect for freelance developers.",
      features: ["50 generations per month", "Standard React output", "1 refinement round", "Community support"],
      popular: false
    },
    {
      name: "Pro",
      price: "$149",
      desc: "For product teams and agencies.",
      features: ["Unlimited generations", "TypeScript & Tailwind", "3 refinement rounds", "Priority support", "Asset extraction"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large scale operations.",
      features: ["Custom UI component mapping", "Private deployment", "Unlimited refinements", "Dedicated account manager", "SLA guarantee"],
      popular: false
    }
  ];

  return (
    <div className="py-32 bg-background relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 bg-white border ${
                plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-text">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted">/mo</span>}
                </div>
                <p className="text-sm text-muted">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-text">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-colors ${
                plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-100 text-text hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
