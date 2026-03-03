import { dashboardStats, markets, alerts } from "@/lib/mock-data";
import { formatNumber, formatChange, statusColor, severityBg, categoryIcon } from "@/lib/utils";

function StatCard({ label, value, sub, icon }: { label: string; value: string; sub?: string; icon: string }) {
  return (
    <div className="card-glow bg-[#1a2332] border border-[#1e293b] rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-slate-400">{label}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
    </div>
  );
}

function MiniMarketRow({ name, price, unit, change, status }: {
  name: string; price: number; unit: string; change: number; status: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-[#1e293b] last:border-0">
      <div className="flex items-center gap-2">
        <span className={`status-dot ${status}`} />
        <span className="text-sm text-slate-200">{name}</span>
      </div>
      <div className="text-right">
        <span className="text-sm font-medium text-white">{formatNumber(price)} <span className="text-xs text-slate-500">{unit}</span></span>
        <span className={`ml-3 text-xs font-medium ${change > 0 ? "text-red-400" : change < 0 ? "text-emerald-400" : "text-slate-500"}`}>
          {formatChange(change)}
        </span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const topMovers = [...markets].sort((a, b) => Math.abs(b.change24h) - Math.abs(a.change24h)).slice(0, 6);
  const recentAlerts = alerts.filter(a => !a.acknowledged).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-sm text-slate-400 mt-1">Myanmar Market Patrol — Real-time monitoring</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total Markets"
          value={dashboardStats.totalMarkets.toString()}
          sub={`${dashboardStats.marketsNormal} normal · ${dashboardStats.marketsWarning} warning · ${dashboardStats.marketsAlert} alert`}
          icon="🏪"
        />
        <StatCard
          label="Active Alerts"
          value={dashboardStats.activeAlerts.toString()}
          sub="2 critical · 1 high · 2 medium"
          icon="🚨"
        />
        <StatCard
          label="Last Patrol"
          value="22:00"
          sub="MMT — 2026-03-03"
          icon="🕐"
        />
        <StatCard
          label="Market Health"
          value={`${Math.round((dashboardStats.marketsNormal / dashboardStats.totalMarkets) * 100)}%`}
          sub="Markets at normal levels"
          icon="💚"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Movers */}
        <div className="bg-[#1a2332] border border-[#1e293b] rounded-xl p-5">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            📈 Top Movers (24h)
          </h2>
          <div>
            {topMovers.map((m) => (
              <MiniMarketRow
                key={m.id}
                name={m.name}
                price={m.price}
                unit={m.unit}
                change={m.change24h}
                status={m.status}
              />
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-[#1a2332] border border-[#1e293b] rounded-xl p-5">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            🔔 Unacknowledged Alerts
          </h2>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="p-3 rounded-lg bg-[#111827] border border-[#1e293b]">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${severityBg(alert.severity)}`}>
                    {alert.severity.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-slate-200">{alert.message}</p>
                <p className="text-xs text-slate-500 mt-1">{alert.market}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Summary */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {(["commodity", "currency", "consumer"] as const).map((cat) => {
          const items = markets.filter((m) => m.category === cat);
          const alertCount = items.filter((m) => m.status !== "normal").length;
          return (
            <div key={cat} className="bg-[#1a2332] border border-[#1e293b] rounded-xl p-4 flex items-center gap-4">
              <span className="text-3xl">{categoryIcon(cat)}</span>
              <div>
                <p className="text-sm font-medium text-white">
                  {cat === "commodity" ? "Commodities" : cat === "currency" ? "Currency" : "Consumer Goods"}
                </p>
                <p className="text-xs text-slate-400">
                  {items.length} items tracked · {alertCount > 0 ? <span className="text-amber-400">{alertCount} alerts</span> : <span className="text-emerald-400">All normal</span>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
