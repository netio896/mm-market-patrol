import { alerts } from "@/lib/mock-data";
import { severityBg } from "@/lib/utils";

const typeLabels: Record<string, string> = {
  price_spike: "Price Spike",
  price_drop: "Price Drop",
  supply_shortage: "Supply Shortage",
  unusual_activity: "Unusual Activity",
};

const typeIcons: Record<string, string> = {
  price_spike: "📈",
  price_drop: "📉",
  supply_shortage: "⚠️",
  unusual_activity: "🔍",
};

export default function AlertsPage() {
  const unacknowledged = alerts.filter((a) => !a.acknowledged);
  const acknowledged = alerts.filter((a) => a.acknowledged);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Alerts</h1>
        <p className="text-sm text-slate-400 mt-1">
          Market alerts and notifications — {unacknowledged.length} unacknowledged
        </p>
      </div>

      {/* Unacknowledged */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-red-400 uppercase tracking-wide mb-4">
          🔴 Unacknowledged ({unacknowledged.length})
        </h2>
        <div className="space-y-3">
          {unacknowledged.map((alert) => (
            <div
              key={alert.id}
              className="bg-[#1a2332] border border-[#1e293b] rounded-xl p-5 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{typeIcons[alert.type]}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${severityBg(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500 bg-[#111827] px-2 py-0.5 rounded">
                      {typeLabels[alert.type]}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 mb-1">{alert.message}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>📍 {alert.market}</span>
                    <span>🕐 {alert.timestamp}</span>
                  </div>
                </div>
                <button className="text-xs text-slate-400 border border-[#1e293b] rounded-lg px-3 py-1.5 hover:bg-white/5 transition-colors">
                  Acknowledge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acknowledged */}
      <div>
        <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
          ✅ Acknowledged ({acknowledged.length})
        </h2>
        <div className="space-y-3 opacity-60">
          {acknowledged.map((alert) => (
            <div
              key={alert.id}
              className="bg-[#1a2332] border border-[#1e293b] rounded-xl p-5"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{typeIcons[alert.type]}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${severityBg(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500">{typeLabels[alert.type]}</span>
                  </div>
                  <p className="text-sm text-slate-300">{alert.message}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                    <span>📍 {alert.market}</span>
                    <span>🕐 {alert.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
