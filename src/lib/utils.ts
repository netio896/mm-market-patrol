import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatChange(change: number): string {
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
}

export function statusColor(status: "normal" | "warning" | "alert"): string {
  switch (status) {
    case "normal":
      return "text-emerald-400";
    case "warning":
      return "text-amber-400";
    case "alert":
      return "text-red-400";
  }
}

export function statusBg(status: "normal" | "warning" | "alert"): string {
  switch (status) {
    case "normal":
      return "bg-emerald-400/10 border-emerald-400/20";
    case "warning":
      return "bg-amber-400/10 border-amber-400/20";
    case "alert":
      return "bg-red-400/10 border-red-400/20";
  }
}

export function severityColor(severity: "low" | "medium" | "high" | "critical"): string {
  switch (severity) {
    case "low":
      return "text-blue-400";
    case "medium":
      return "text-amber-400";
    case "high":
      return "text-orange-400";
    case "critical":
      return "text-red-400";
  }
}

export function severityBg(severity: "low" | "medium" | "high" | "critical"): string {
  switch (severity) {
    case "low":
      return "bg-blue-400/10 text-blue-400";
    case "medium":
      return "bg-amber-400/10 text-amber-400";
    case "high":
      return "bg-orange-400/10 text-orange-400";
    case "critical":
      return "bg-red-400/10 text-red-400";
  }
}

export function categoryLabel(cat: "commodity" | "currency" | "consumer"): string {
  switch (cat) {
    case "commodity":
      return "Commodities";
    case "currency":
      return "Currency";
    case "consumer":
      return "Consumer Goods";
  }
}

export function categoryIcon(cat: "commodity" | "currency" | "consumer"): string {
  switch (cat) {
    case "commodity":
      return "📦";
    case "currency":
      return "💱";
    case "consumer":
      return "🛒";
  }
}
