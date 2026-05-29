import { motion } from 'framer-motion';

export default function Scene11DashboardPreview() {
  return (
    <div className="py-32 bg-background overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">The Platform</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-6">
          Command Central
        </h3>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Manage generations, review visual tests, and export code directly from our powerful web dashboard.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border/50 bg-white shadow-2xl p-2 pb-0"
        >
          <div className="rounded-t-lg bg-surface border-x border-t border-border overflow-hidden">
            {/* Window Controls */}
            <div className="h-10 border-b border-border flex items-center px-4 gap-2 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-xs font-medium text-muted flex-1 text-center pr-12">
                app.cloneweb.ai
              </div>
            </div>
            
            {/* Mock Dashboard UI */}
            <div className="flex h-[500px]">
              <div className="w-48 border-r border-border bg-gray-50 p-4 space-y-2">
                <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4 mb-6"></div>
                <div className="h-6 bg-primary/10 rounded w-full"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                <div className="h-6 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="flex-1 p-6 space-y-6">
                <div className="h-10 bg-gray-100 rounded-lg w-1/3"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-gray-50 border border-border rounded-lg"></div>
                  <div className="h-24 bg-gray-50 border border-border rounded-lg"></div>
                  <div className="h-24 bg-gray-50 border border-border rounded-lg"></div>
                </div>
                <div className="h-64 bg-gray-50 border border-border rounded-lg"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
