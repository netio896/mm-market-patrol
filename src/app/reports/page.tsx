import { reports } from "@/lib/mock-data";

export default function ReportsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Patrol Reports</h1>
        <p className="text-sm text-slate-400 mt-1">Daily market patrol summaries</p>
      </div>

      <div className="space-y-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="card-glow bg-[#1a2332] border border-[#1e293b] rounded-xl p-6"
          >
            {/* Report Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
                  📋
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{report.date}</h3>
                  <p className="text-xs text-slate-400">
                    {report.marketsPatrolled} markets · {report.alertsTriggered} alerts
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{report.marketsPatrolled}</span>
                    <span className="text-xs text-slate-500">patrolled</span>
                  </div>
                  <div className={`text-sm font-medium ${report.alertsTriggered > 3 ? "text-amber-400" : "text-emerald-400"}`}>
                    {report.alertsTriggered} alert{report.alertsTriggered !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#111827] rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-300">{report.summary}</p>
            </div>

            {/* Findings */}
            <div>
              <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                Key Findings
              </h4>
              <ul className="space-y-2">
                {report.findings.map((finding, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-blue-400 mt-0.5">•</span>
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
