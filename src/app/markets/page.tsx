import { markets } from "@/lib/mock-data";
import { formatNumber, formatChange, statusColor, statusBg, categoryIcon, categoryLabel } from "@/lib/utils";

export default function MarketsPage() {
  const categories = ["commodity", "currency", "consumer"] as const;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Markets</h1>
        <p className="text-sm text-slate-400 mt-1">All tracked markets and current prices</p>
      </div>

      {categories.map((cat) => {
        const items = markets.filter((m) => m.category === cat);
        return (
          <div key={cat} className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              {categoryIcon(cat)} {categoryLabel(cat)}
            </h2>
            <div className="bg-[#1a2332] border border-[#1e293b] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e293b] text-xs text-slate-500 uppercase">
                    <th className="text-left px-5 py-3">Market</th>
                    <th className="text-left px-5 py-3 hidden sm:table-cell">Myanmar</th>
                    <th className="text-right px-5 py-3">Price</th>
                    <th className="text-right px-5 py-3">24h Change</th>
                    <th className="text-center px-5 py-3">Status</th>
                    <th className="text-right px-5 py-3 hidden md:table-cell">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((m) => (
                    <tr key={m.id} className="border-b border-[#1e293b] last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-3.5">
                        <span className="text-sm font-medium text-white">{m.name}</span>
                      </td>
                      <td className="px-5 py-3.5 hidden sm:table-cell">
                        <span className="text-sm text-slate-400">{m.nameMM}</span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <span className="text-sm font-medium text-white">{formatNumber(m.price)}</span>
                        <span className="text-xs text-slate-500 ml-1">{m.unit}</span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <span className={`text-sm font-medium ${m.change24h > 0 ? "text-red-400" : m.change24h < 0 ? "text-emerald-400" : "text-slate-500"}`}>
                          {formatChange(m.change24h)}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${statusBg(m.status)}`}>
                          <span className={`status-dot ${m.status}`} />
                          {m.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right hidden md:table-cell">
                        <span className="text-xs text-slate-500">{m.lastUpdated}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
