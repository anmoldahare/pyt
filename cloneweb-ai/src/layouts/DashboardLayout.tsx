import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Bot, 
  LayoutDashboard, 
  FolderGit2, 
  Activity, 
  Settings, 
  LogOut, 
  Search,
  Bell,
  Plus,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderGit2 },
  { name: 'Generations', href: '/dashboard/generations', icon: Activity },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-background text-text overflow-hidden relative">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-border flex flex-col z-50 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bot className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg">CloneWeb</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-1 rounded-md text-muted hover:text-text hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <button className="w-full flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors mb-6">
            <Plus className="w-5 h-5" />
            New Project
          </button>

          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-muted hover:bg-gray-50 hover:text-text'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted'}`} />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-border">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg font-medium text-muted hover:bg-gray-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-border flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2 text-muted flex-1 md:flex-none">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 mr-1 rounded-md text-muted hover:text-text hover:bg-gray-50 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Search className="w-5 h-5 shrink-0" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full max-w-[120px] sm:max-w-[200px] md:w-64 text-text placeholder-muted"
            />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative text-muted hover:text-text transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-2.5 md:gap-3">
              <div className="text-right hidden md:block">
                <div className="text-sm font-semibold">User</div>
                <div className="text-xs text-muted">Pro Plan</div>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-primary to-accent border-2 border-white shadow-sm flex items-center justify-center text-white font-bold text-sm md:text-base">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
