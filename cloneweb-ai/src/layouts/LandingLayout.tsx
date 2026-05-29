import { Outlet, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function LandingLayout() {
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.08)']
  );
  const headerBlur = useTransform(scrollY, [0, 50], ['0px', '12px']);

  return (
    <div className="min-h-screen bg-background text-text flex flex-col selection:bg-primary/30">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: headerBg,
          borderBottomWidth: 1,
          borderBottomColor: headerBorder,
          backdropFilter: useTransform(headerBlur, (b) => `blur(${b})`),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Bot className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">CloneWeb AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <a href="#features" className="hover:text-text transition-colors">Features</a>
            <a href="#pipeline" className="hover:text-text transition-colors">Pipeline</a>
            <a href="#pricing" className="hover:text-text transition-colors">Pricing</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Log in
            </Link>
            <Link to="/dashboard" className="bg-text text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors luxury-shadow">
              Start Cloning
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-muted">
            <Bot className="w-5 h-5" />
            <span className="font-semibold text-text">CloneWeb AI</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-text transition-colors">Twitter</a>
            <a href="#" className="hover:text-text transition-colors">GitHub</a>
            <a href="#" className="hover:text-text transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
