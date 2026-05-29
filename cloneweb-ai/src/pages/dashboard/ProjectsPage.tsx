import React, { useState } from 'react';
import { 
  ExternalLink, 
  Plus, 
  Trash2, 
  Play, 
  Code2, 
  Search, 
  FolderGit2, 
  X,
  Sparkles
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  url: string;
  status: 'Active' | 'Refining' | 'Archived';
  pages: number;
  components: number;
  ssim: number;
  lastSynced: string;
  category: string;
  schematic: string[];
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'All' | 'Active' | 'Archived'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);
  const [newProjectUrl, setNewProjectUrl] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectCategory, setNewProjectCategory] = useState('landing');
  
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "proj-1",
      name: "Stripe Checkout",
      url: "stripe.com/checkout",
      status: "Active",
      pages: 12,
      components: 42,
      ssim: 0.98,
      lastSynced: "10 mins ago",
      category: "SaaS",
      schematic: ["Header", "Checkout Form", "Payment Methods", "Order Summary", "Footer"]
    },
    {
      id: "proj-2",
      name: "Linear App Features",
      url: "linear.app/features",
      status: "Refining",
      pages: 8,
      components: 29,
      ssim: 0.92,
      lastSynced: "1 hour ago",
      category: "Productivity",
      schematic: ["Nav", "Hero Grid", "Feature Carousel", "Integrations", "Pricing Card"]
    },
    {
      id: "proj-3",
      name: "Framer Templates",
      url: "framer.com/templates",
      status: "Active",
      pages: 15,
      components: 67,
      ssim: 0.99,
      lastSynced: "1 day ago",
      category: "Design",
      schematic: ["Top Banner", "Sticky Header", "Category Filter", "Template Grid", "Fidelity Checker"]
    },
    {
      id: "proj-4",
      name: "Vercel Analytics Dashboard",
      url: "vercel.com/analytics",
      status: "Archived",
      pages: 4,
      components: 18,
      ssim: 0.94,
      lastSynced: "1 week ago",
      category: "Analytics",
      schematic: ["Sidebar Layout", "Date Range Picker", "Metric Grid", "Interactive Charts"]
    }
  ]);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectUrl) return;

    const domain = newProjectUrl.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    const name = newProjectName || domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      name: name,
      url: domain,
      status: 'Active',
      pages: 1,
      components: 5,
      ssim: 0.95,
      lastSynced: "Just now",
      category: newProjectCategory,
      schematic: ["Header Navigation", "Main Content Section", "Footer Link Blocks"]
    };

    setProjects([newProject, ...projects]);
    setNewProjectUrl('');
    setNewProjectName('');
    setIsNewProjectOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setProjects(projects.map(p => {
      if (p.id === id) {
        const nextStatus: Record<Project['status'], Project['status']> = {
          'Active': 'Refining',
          'Refining': 'Archived',
          'Archived': 'Active'
        };
        return { ...p, status: nextStatus[p.status] };
      }
      return p;
    }));
  };

  const filteredProjects = projects.filter(project => {
    const matchesTab = activeTab === 'All' || project.status === activeTab;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 fade-up">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--border)] pb-6 gap-4">
        <div>
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--red)] mb-2 block">
            Workspace Repository
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[var(--ink)]">
            Projects Ledger
          </h1>
          <p className="text-[17px] text-[var(--muted)] italic mt-2 max-w-[600px] leading-relaxed">
            Manage your synchronized domains, view DOM structure analysis, and compile full pages directly into production React layouts.
          </p>
        </div>
        <button 
          onClick={() => setIsNewProjectOpen(true)}
          className="flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-5 py-3 border-2 border-[var(--ink)] font-mono text-[11px] uppercase tracking-widest hover:bg-[var(--paper)] hover:text-[var(--ink)] transition-all cursor-pointer font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
        >
          <Plus className="w-4 h-4" />
          Synchronize New Site
        </button>
      </div>

      {/* Interactive Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Brutalist Tab Selector */}
        <div className="flex border-2 border-[var(--ink)] p-0.5 bg-[var(--paper-dark)] font-mono text-xs">
          {(['All', 'Active', 'Archived'] as const).map((tab) => {
            const isActive = activeTab === tab;
            const count = tab === 'All' 
              ? projects.length 
              : projects.filter(p => p.status === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all ${
                  isActive 
                    ? 'bg-[var(--ink)] text-[var(--paper)]' 
                    : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--border)]/30'
                }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Field */}
        <div className="flex items-center border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-1.5 md:w-80 gap-2">
          <Search className="w-4 h-4 text-[var(--muted)]" />
          <input 
            type="text"
            placeholder="FILTER BY DOMAIN, NAME..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none font-mono text-xs w-full uppercase tracking-wider text-[var(--ink)] placeholder:text-[var(--border)] focus:ring-0"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-[var(--muted)] hover:text-[var(--ink)]">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Drawer Overlay for Creating New Project */}
      {isNewProjectOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[var(--paper)] border-4 border-[var(--ink)] w-full max-w-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 space-y-6 relative">
            <button 
              onClick={() => setIsNewProjectOpen(false)}
              className="absolute top-4 right-4 p-1 border-2 border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="border-b border-[var(--border)] pb-3">
              <span className="font-mono text-[10px] tracking-widest text-[var(--red)] uppercase block mb-1">Pipeline Initialization</span>
              <h3 className="font-serif text-2xl text-[var(--ink)]">Ingest Remote Web Page</h3>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider mb-1.5">Target Website URL</label>
                <input 
                  type="text"
                  required
                  placeholder="https://example.com/checkout"
                  value={newProjectUrl}
                  onChange={(e) => setNewProjectUrl(e.target.value)}
                  className="w-full bg-[var(--paper-dark)] border-2 border-[var(--ink)] px-3 py-2.5 font-mono text-xs focus:outline-none focus:bg-[var(--paper)] text-[var(--ink)]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider mb-1.5">Project Display Name (Optional)</label>
                <input 
                  type="text"
                  placeholder="e.g. Example Payment Flow"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full bg-[var(--paper-dark)] border-2 border-[var(--ink)] px-3 py-2.5 font-mono text-xs focus:outline-none focus:bg-[var(--paper)] text-[var(--ink)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider mb-1.5">Category</label>
                  <select 
                    value={newProjectCategory}
                    onChange={(e) => setNewProjectCategory(e.target.value)}
                    className="w-full bg-[var(--paper-dark)] border-2 border-[var(--ink)] px-3 py-2.5 font-mono text-xs focus:outline-none focus:bg-[var(--paper)] text-[var(--ink)] appearance-none rounded-none"
                  >
                    <option value="SaaS">SaaS</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Design">Design</option>
                    <option value="Analytics">Analytics</option>
                    <option value="E-commerce">E-commerce</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="font-mono text-[10px] text-[var(--muted)] leading-tight italic pb-2">
                    CloneWeb will run a headless browser engine to capture the DOM structure and CSS rulesets.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="submit"
                  className="flex-1 bg-[var(--ink)] text-[var(--paper)] py-3 font-mono text-[11px] uppercase tracking-widest border-2 border-[var(--ink)] hover:bg-transparent hover:text-[var(--ink)] transition-all font-bold text-center"
                >
                  Start Capture
                </button>
                <button 
                  type="button"
                  onClick={() => setIsNewProjectOpen(false)}
                  className="px-6 py-3 border-2 border-[var(--border)] text-[var(--muted)] font-mono text-[11px] uppercase tracking-widest hover:border-[var(--ink)] hover:text-[var(--ink)] transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="border-2 border-dashed border-[var(--border)] py-16 text-center">
          <FolderGit2 className="w-12 h-12 text-[var(--border)] mx-auto mb-4" />
          <h3 className="font-serif text-xl text-[var(--ink)] mb-1">No Projects Found</h3>
          <p className="text-sm text-[var(--muted)] font-mono">ADJUST SEARCH CRITERIA OR INITIALIZE A NEW INTEGRATION</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[var(--paper)] border-2 border-[var(--ink)] flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_rgba(10,10,10,0.08)] transition-all relative group"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-[var(--border)] flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest bg-[var(--paper-dark)] px-2 py-0.5 border border-[var(--border)] text-[var(--muted)]">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--ink)] mt-2 font-normal leading-tight group-hover:text-[var(--red)] transition-colors">
                    {project.name}
                  </h3>
                  <a 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-mono text-xs text-[var(--muted)] hover:text-[var(--ink)] inline-flex items-center gap-1.5 mt-1 transition-colors"
                  >
                    {project.url}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                <button
                  onClick={() => handleToggleStatus(project.id)}
                  className={`font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 border transition-all hover:scale-105 ${
                    project.status === 'Active' 
                      ? 'bg-[var(--green-soft)] text-[var(--green)] border-[var(--green)]' 
                      : project.status === 'Refining'
                      ? 'bg-[var(--amber-soft)] text-[var(--amber)] border-[var(--amber)] animate-pulse'
                      : 'bg-gray-100 text-gray-500 border-gray-300'
                  }`}
                >
                  ● {project.status}
                </button>
              </div>

              {/* DOM Analysis Schematic Visualization */}
              <div className="bg-[var(--paper-dark)] p-5 border-b border-[var(--border)] font-mono text-[10px] text-[var(--muted)] space-y-2 relative overflow-hidden h-40 flex flex-col justify-end">
                <div className="absolute top-2 left-3 text-[9px] tracking-widest uppercase opacity-40 select-none">
                  DOM AST Map Blueprint
                </div>
                
                {/* Blueprint Drawing simulation */}
                <div className="border border-dashed border-[var(--border)] p-2.5 bg-[var(--paper)] rounded-sm space-y-1.5 z-10">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-1 mb-1">
                    <span className="text-[9px] text-[var(--red)] font-semibold">body &gt; #layout-root</span>
                    <span className="text-[8px] opacity-65">w: 1280px</span>
                  </div>
                  
                  <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
                    {project.schematic.map((block, idx) => (
                      <span 
                        key={idx} 
                        className="bg-[var(--paper-dark)] border border-[var(--border)] px-1.5 py-0.5 text-[8px] rounded-xs font-mono font-medium hover:border-[var(--ink)] hover:text-[var(--ink)] cursor-help transition-all"
                        title={`DOM branch compiled: ${block}`}
                      >
                        {block}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-[1px] bg-[var(--border)] text-center font-mono">
                <div className="bg-[var(--paper)] py-3">
                  <span className="block text-xs text-[var(--muted)] uppercase tracking-wider scale-[0.85] origin-center">Pages</span>
                  <span className="block text-[15px] font-bold text-[var(--ink)] mt-0.5">{project.pages}</span>
                </div>
                <div className="bg-[var(--paper)] py-3 border-x border-[var(--border)]">
                  <span className="block text-xs text-[var(--muted)] uppercase tracking-wider scale-[0.85] origin-center">Components</span>
                  <span className="block text-[15px] font-bold text-[var(--ink)] mt-0.5">{project.components}</span>
                </div>
                <div className="bg-[var(--paper)] py-3">
                  <span className="block text-xs text-[var(--muted)] uppercase tracking-wider scale-[0.85] origin-center">SSIM Score</span>
                  <span className="block text-[15px] font-bold text-[var(--green)] mt-0.5">{(project.ssim * 100).toFixed(0)}%</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-[var(--paper-dark)] flex items-center justify-between border-t border-[var(--border)]">
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  SYNCED: {project.lastSynced.toUpperCase()}
                </span>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => alert(`Starting React generation build for ${project.name}`)}
                    className="flex items-center gap-1.5 bg-[var(--ink)] text-[var(--paper)] px-3 py-1.5 border border-[var(--ink)] font-mono text-[9px] uppercase tracking-wider hover:bg-transparent hover:text-[var(--ink)] transition-all font-bold cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Compile
                  </button>
                  <button 
                    onClick={() => alert(`Reviewing AST hierarchy components for ${project.name}`)}
                    className="flex items-center gap-1.5 border border-[var(--ink)] text-[var(--ink)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all font-bold cursor-pointer"
                  >
                    <Code2 className="w-3 h-3" />
                    AST Tree
                  </button>
                  <button 
                    onClick={() => handleDeleteProject(project.id)}
                    title="Delete project"
                    className="p-1.5 border border-[var(--border)] text-[var(--muted)] hover:text-[var(--red)] hover:border-[var(--red)] transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Info Banner */}
      <div className="border-t-2 border-[var(--ink)] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-[var(--muted)]">
        <div>
          <span>LEDGER ID: CW-WORKSPACE-PRO-2026</span>
          <span className="mx-2">•</span>
          <span>COMPILER: V1.8.2-PROD</span>
        </div>
        <div className="flex items-center gap-1.5 text-[var(--red)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider">DOM analysis accuracy guaranteed via visual SSIM differential validation.</span>
        </div>
      </div>
    </div>
  );
}
