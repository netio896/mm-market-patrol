"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Overview", icon: "📊" },
  { href: "/markets", label: "Markets", icon: "🏪" },
  { href: "/alerts", label: "Alerts", icon: "🚨" },
  { href: "/reports", label: "Reports", icon: "📋" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-[#1e293b] bg-[#111827] p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
          M
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">MM Patrol</h1>
          <p className="text-xs text-slate-400">Market Monitor</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                active
                  ? "bg-blue-500/10 text-blue-400 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
              {item.label === "Alerts" && (
                <span className="ml-auto bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded-full">
                  5
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#1e293b] pt-4 mt-4">
        <div className="px-3 py-2 text-xs text-slate-500">
          <p>Last patrol: 22:00 MMT</p>
          <p className="mt-1">Status: <span className="text-emerald-400">● Active</span></p>
        </div>
      </div>
    </aside>
  );
}
