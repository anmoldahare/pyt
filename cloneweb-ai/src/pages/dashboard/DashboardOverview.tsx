import { FileCode2, Globe, Clock, ArrowUpRight, Copy } from 'lucide-react';

export default function DashboardOverview() {
  const recentGenerations = [
    { id: "gen-8f92a", url: "stripe.com/sessions", status: "Completed", time: "2 mins ago", ssim: "0.98", react: true },
    { id: "gen-4c11b", url: "linear.app/features", status: "Refining", time: "15 mins ago", ssim: "0.91", react: false },
    { id: "gen-9a00f", url: "framer.com/templates", status: "Completed", time: "2 hours ago", ssim: "0.99", react: true },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-text mb-1">Welcome back, User</h1>
        <p className="text-muted">Here's what's happening with your projects today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> 12%
            </span>
          </div>
          <div className="text-3xl font-bold text-text mb-1">128</div>
          <div className="text-sm font-medium text-muted">Total Pages Cloned</div>
        </div>
        
        <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <FileCode2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-text mb-1">45.2k</div>
          <div className="text-sm font-medium text-muted">Lines of React Generated</div>
        </div>

        <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-text mb-1">0.96</div>
          <div className="text-sm font-medium text-muted">Average SSIM Score</div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-bold text-text">Recent Generations</h2>
          <button className="text-sm font-medium text-primary hover:text-primary/80">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted uppercase bg-gray-50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold">Target URL</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">SSIM Score</th>
                <th className="px-6 py-4 font-semibold">Time</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentGenerations.map((gen, i) => (
                <tr key={i} className="border-b border-border hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-text flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs text-muted">
                      <Globe className="w-4 h-4" />
                    </div>
                    {gen.url}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      gen.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {gen.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-medium">
                    {gen.ssim}
                  </td>
                  <td className="px-6 py-4 text-muted">
                    {gen.time}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {gen.react && (
                      <button className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 justify-end ml-auto">
                        <Copy className="w-4 h-4" />
                        Code
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
