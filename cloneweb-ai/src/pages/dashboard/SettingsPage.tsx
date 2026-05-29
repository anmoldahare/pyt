import { useState } from 'react';
import { 
  Settings, 
  Key, 
  Sliders, 
  HardDrive, 
  Eye, 
  EyeOff, 
  CheckCircle,
  Database
} from 'lucide-react';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<'General' | 'API' | 'Preferences'>('General');
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({
    openai: false,
    anthropic: false,
    cloneweb: false
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form states
  const [licenseKey, setLicenseKey] = useState('cw_pro_f839a9c21820db91a82');
  const [openaiKey, setOpenaiKey] = useState('sk-proj-••••••••••••••••••••3E9b');
  const [anthropicKey, setAnthropicKey] = useState('sk-ant-••••••••••••••••••••A2c1');
  const [framework, setFramework] = useState('nextjs');
  const [styleMode, setStyleMode] = useState('tailwind');
  const [exportPath, setExportPath] = useState('/Users/anmoldahare/Desktop/pyt/cloneweb-ai/src/output');
  const [componentNaming, setComponentNaming] = useState('pascal');
  const [localAssets, setLocalAssets] = useState(true);

  const toggleKeyVisibility = (key: string) => {
    setShowKeys(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 fade-up">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--border)] pb-6 gap-4">
        <div>
          <span className="font-mono text-xs tracking-wider uppercase text-[var(--red)] mb-2 block">
            Workspace Configuration
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[var(--ink)]">
            System Settings
          </h1>
          <p className="text-[17px] text-[var(--muted)] italic mt-2 max-w-[600px] leading-relaxed">
            Configure compiler paths, credentials, output framework variables, and audit current workspace subscription usage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="flex flex-row md:flex-col overflow-x-auto whitespace-nowrap space-x-2 md:space-x-0 md:space-y-1.5 pb-2 md:pb-0 font-mono text-xs uppercase tracking-wider">
          <button 
            onClick={() => setActiveSection('General')}
            className={`px-4 py-3 border-2 transition-all flex items-center justify-center md:justify-start gap-2.5 font-bold flex-1 md:flex-none md:w-full shrink-0 ${
              activeSection === 'General' 
                ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]' 
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] bg-[var(--paper)]'
            }`}
          >
            <Settings className="w-4 h-4" />
            General & Usage
          </button>
          
          <button 
            onClick={() => setActiveSection('API')}
            className={`px-4 py-3 border-2 transition-all flex items-center justify-center md:justify-start gap-2.5 font-bold flex-1 md:flex-none md:w-full shrink-0 ${
              activeSection === 'API' 
                ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]' 
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] bg-[var(--paper)]'
            }`}
          >
            <Key className="w-4 h-4" />
            API Keys & Licenses
          </button>

          <button 
            onClick={() => setActiveSection('Preferences')}
            className={`px-4 py-3 border-2 transition-all flex items-center justify-center md:justify-start gap-2.5 font-bold flex-1 md:flex-none md:w-full shrink-0 ${
              activeSection === 'Preferences' 
                ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]' 
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)] bg-[var(--paper)]'
            }`}
          >
            <Sliders className="w-4 h-4" />
            Compiler Options
          </button>
        </div>

        {/* Content Sheet */}
        <form onSubmit={handleSave} className="md:col-span-3 bg-[var(--paper)] border-2 border-[var(--ink)] p-6 md:p-8 space-y-8 shadow-[4px_4px_0px_0px_rgba(10,10,10,0.08)]">
          {activeSection === 'General' && (
            <div className="space-y-6">
              <div className="border-b border-[var(--border)] pb-3">
                <h3 className="font-serif text-2xl text-[var(--ink)]">General Workspace</h3>
                <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">Account plan, local output directory, and utilization logs</span>
              </div>

              {/* Quota meters */}
              <div className="space-y-4">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink)] font-bold">
                  Quota Utilization Statistics
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Meter 1 */}
                  <div className="border border-[var(--border)] bg-[var(--paper-dark)]/40 p-4 space-y-2">
                    <div className="flex justify-between items-center font-mono text-[11px]">
                      <span className="text-[var(--muted)] uppercase">Pages Synced</span>
                      <span className="font-bold text-[var(--ink)]">128 / 500</span>
                    </div>
                    <div className="h-2 bg-[var(--paper-dark)] border border-[var(--ink)] p-[1px]">
                      <div className="bg-[var(--ink)] h-full w-[25.6%]" />
                    </div>
                    <span className="block font-mono text-[9px] text-[var(--muted)] uppercase italic">
                      Resets next billing period: June 25, 2026
                    </span>
                  </div>

                  {/* Meter 2 */}
                  <div className="border border-[var(--border)] bg-[var(--paper-dark)]/40 p-4 space-y-2">
                    <div className="flex justify-between items-center font-mono text-[11px]">
                      <span className="text-[var(--muted)] uppercase">Concurrent Active Domains</span>
                      <span className="font-bold text-[var(--ink)]">3 / 10</span>
                    </div>
                    <div className="h-2 bg-[var(--paper-dark)] border border-[var(--ink)] p-[1px]">
                      <div className="bg-[var(--ink)] h-full w-[30%]" />
                    </div>
                    <span className="block font-mono text-[9px] text-[var(--muted)] uppercase italic">
                      7 Available Domain slots remaining
                    </span>
                  </div>
                </div>
              </div>

              {/* Local directory path */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider">
                  Default Target Code Export Directory
                </label>
                <div className="flex items-stretch border-2 border-[var(--ink)] font-mono text-xs">
                  <span className="bg-[var(--paper-dark)] px-3 py-2 flex items-center border-r border-[var(--ink)] text-[var(--muted)]">
                    <HardDrive className="w-3.5 h-3.5" />
                  </span>
                  <input 
                    type="text" 
                    value={exportPath}
                    onChange={(e) => setExportPath(e.target.value)}
                    className="w-full bg-transparent px-3 py-2 text-[var(--ink)] outline-none focus:bg-white transition-colors"
                  />
                </div>
                <span className="block font-mono text-[9px] text-[var(--muted)] italic uppercase">
                  CloneWeb will compile output modules directly into this directory when clicking "Compile" on projects.
                </span>
              </div>
            </div>
          )}

          {activeSection === 'API' && (
            <div className="space-y-6">
              <div className="border-b border-[var(--border)] pb-3">
                <h3 className="font-serif text-2xl text-[var(--ink)]">API Keys & Licenses</h3>
                <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">Credential management for secure headless models and subscription keys</span>
              </div>

              {/* License key */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider">
                  CloneWeb AI License Key
                </label>
                <div className="flex items-stretch border-2 border-[var(--ink)] font-mono text-xs">
                  <input 
                    type={showKeys.cloneweb ? "text" : "password"} 
                    value={licenseKey}
                    onChange={(e) => setLicenseKey(e.target.value)}
                    className="w-full bg-transparent px-3 py-2.5 text-[var(--ink)] outline-none focus:bg-white transition-colors"
                  />
                  <button 
                    type="button"
                    onClick={() => toggleKeyVisibility('cloneweb')}
                    className="bg-[var(--paper-dark)] px-3 py-2 border-l border-[var(--ink)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    {showKeys.cloneweb ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <span className="block font-mono text-[9px] text-[var(--green)] uppercase font-semibold">
                  ✓ License Active — Professional Developer Tier
                </span>
              </div>

              {/* OpenAI Key */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider">
                  OpenAI API Key (Required for layout optimization models)
                </label>
                <div className="flex items-stretch border-2 border-[var(--ink)] font-mono text-xs">
                  <input 
                    type={showKeys.openai ? "text" : "password"} 
                    value={openaiKey}
                    onChange={(e) => setOpenaiKey(e.target.value)}
                    className="w-full bg-transparent px-3 py-2.5 text-[var(--ink)] outline-none focus:bg-white transition-colors"
                  />
                  <button 
                    type="button"
                    onClick={() => toggleKeyVisibility('openai')}
                    className="bg-[var(--paper-dark)] px-3 py-2 border-l border-[var(--ink)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    {showKeys.openai ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Anthropic Key */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider">
                  Anthropic API Key (Required for React TSX refactoring synthesis)
                </label>
                <div className="flex items-stretch border-2 border-[var(--ink)] font-mono text-xs">
                  <input 
                    type={showKeys.anthropic ? "text" : "password"} 
                    value={anthropicKey}
                    onChange={(e) => setAnthropicKey(e.target.value)}
                    className="w-full bg-transparent px-3 py-2.5 text-[var(--ink)] outline-none focus:bg-white transition-colors"
                  />
                  <button 
                    type="button"
                    onClick={() => toggleKeyVisibility('anthropic')}
                    className="bg-[var(--paper-dark)] px-3 py-2 border-l border-[var(--ink)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    {showKeys.anthropic ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'Preferences' && (
            <div className="space-y-6">
              <div className="border-b border-[var(--border)] pb-3">
                <h3 className="font-serif text-2xl text-[var(--ink)]">Compiler Options</h3>
                <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">Configure component syntax formatting and scoping details</span>
              </div>

              {/* Target framework selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider">
                    Target Code Framework
                  </label>
                  <select 
                    value={framework}
                    onChange={(e) => setFramework(e.target.value)}
                    className="w-full bg-[var(--paper-dark)] border-2 border-[var(--ink)] px-3 py-2.5 font-mono text-xs focus:outline-none focus:bg-[var(--paper)] text-[var(--ink)] appearance-none rounded-none"
                  >
                    <option value="nextjs">Next.js 15 App Router (TSX)</option>
                    <option value="react-vite">React + Vite SPA (TSX)</option>
                    <option value="html-tailwind">HTML5 + Utility Tailwind</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase text-[var(--muted)] tracking-wider">
                    Styling Integration Preference
                  </label>
                  <select 
                    value={styleMode}
                    onChange={(e) => setStyleMode(e.target.value)}
                    className="w-full bg-[var(--paper-dark)] border-2 border-[var(--ink)] px-3 py-2.5 font-mono text-xs focus:outline-none focus:bg-[var(--paper)] text-[var(--ink)] appearance-none rounded-none"
                  >
                    <option value="tailwind">Tailwind v4 Scoped Classes</option>
                    <option value="modules">CSS Modules (.module.css)</option>
                    <option value="inline">Vanilla Inline React Styles</option>
                  </select>
                </div>
              </div>

              {/* Formatting and directories checkboxes */}
              <div className="space-y-3.5 pt-4 border-t border-[var(--border)]">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink)] font-bold">
                  Structure Formatting Guidelines
                </h4>
                
                <div className="space-y-2.5 font-mono text-[11px] text-[var(--ink)]">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={componentNaming === 'pascal'} 
                      onChange={(e) => setComponentNaming(e.target.checked ? 'pascal' : 'camel')}
                      className="w-4 h-4 accent-[var(--ink)] border-2 border-[var(--ink)] rounded-none"
                    />
                    <span className="uppercase font-semibold">Enforce PascalCase Names (e.g. StripeCheckout.tsx)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={localAssets} 
                      onChange={(e) => setLocalAssets(e.target.checked)}
                      className="w-4 h-4 accent-[var(--ink)] border-2 border-[var(--ink)] rounded-none"
                    />
                    <span className="uppercase font-semibold">Localize remote assets & download assets internally</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="font-mono text-[10px] text-[var(--muted)] uppercase italic">
              All configurations stored locally inside standard dot-config files.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {saveSuccess && (
                <div className="flex items-center gap-1.5 text-[var(--green)] font-mono text-[11px] uppercase font-bold animate-fade-in">
                  <CheckCircle className="w-4 h-4" />
                  Saved Preferences
                </div>
              )}
              <button 
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto bg-[var(--ink)] text-[var(--paper)] px-6 py-3 border-2 border-[var(--ink)] font-mono text-[11px] uppercase tracking-widest hover:bg-[var(--paper)] hover:text-[var(--ink)] transition-all cursor-pointer font-bold disabled:opacity-50"
              >
                {isSaving ? "Writing Config Files..." : "Save Preferences"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Bottom Info Banner */}
      <div className="border-t-2 border-[var(--ink)] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-[var(--muted)]">
        <div>
          <span>CONFIG FILE: .cloneweb.config.json</span>
          <span className="mx-2">•</span>
          <span>COMPILER THREADS: 8 HEADLESS WORKERS</span>
        </div>
        <div className="flex items-center gap-1 text-[var(--red)]">
          <Database className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider">Never share license keys or environment tokens publicly.</span>
        </div>
      </div>
    </div>
  );
}
