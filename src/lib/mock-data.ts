// Mock data for Myanmar Market Patrol Dashboard

export interface MarketItem {
  id: string;
  name: string;
  nameMM: string;
  category: "commodity" | "currency" | "consumer";
  price: number;
  unit: string;
  change24h: number;
  status: "normal" | "warning" | "alert";
  lastUpdated: string;
}

export interface Alert {
  id: string;
  type: "price_spike" | "price_drop" | "supply_shortage" | "unusual_activity";
  severity: "low" | "medium" | "high" | "critical";
  market: string;
  message: string;
  timestamp: string;
  acknowledged: boolean;
}

export interface PatrolReport {
  id: string;
  date: string;
  marketsPatrolled: number;
  alertsTriggered: number;
  summary: string;
  findings: string[];
}

export interface DashboardStats {
  totalMarkets: number;
  activeAlerts: number;
  lastPatrolTime: string;
  marketsNormal: number;
  marketsWarning: number;
  marketsAlert: number;
}

export const dashboardStats: DashboardStats = {
  totalMarkets: 18,
  activeAlerts: 5,
  lastPatrolTime: "2026-03-03 22:00 MMT",
  marketsNormal: 12,
  marketsWarning: 4,
  marketsAlert: 2,
};

export const markets: MarketItem[] = [
  // Commodities
  {
    id: "rice-emata",
    name: "Rice (Emata)",
    nameMM: "ဆန် (ဧမတာ)",
    category: "commodity",
    price: 72000,
    unit: "MMK/bag",
    change24h: 2.3,
    status: "warning",
    lastUpdated: "2026-03-03 21:45",
  },
  {
    id: "rice-pawsan",
    name: "Rice (Paw San)",
    nameMM: "ဆန် (ပေါ်ဆန်း)",
    category: "commodity",
    price: 95000,
    unit: "MMK/bag",
    change24h: 0.5,
    status: "normal",
    lastUpdated: "2026-03-03 21:45",
  },
  {
    id: "palm-oil",
    name: "Palm Oil",
    nameMM: "ဆီ",
    category: "commodity",
    price: 8500,
    unit: "MMK/viss",
    change24h: -1.2,
    status: "normal",
    lastUpdated: "2026-03-03 21:30",
  },
  {
    id: "gold-ygn",
    name: "Gold (Yangon)",
    nameMM: "ရွှေ (ရန်ကုန်)",
    category: "commodity",
    price: 4850000,
    unit: "MMK/tical",
    change24h: 3.8,
    status: "alert",
    lastUpdated: "2026-03-03 22:00",
  },
  {
    id: "gold-mdy",
    name: "Gold (Mandalay)",
    nameMM: "ရွှေ (မန္တလေး)",
    category: "commodity",
    price: 4855000,
    unit: "MMK/tical",
    change24h: 3.9,
    status: "alert",
    lastUpdated: "2026-03-03 22:00",
  },
  {
    id: "onion",
    name: "Onion",
    nameMM: "ကြက်သွန်နီ",
    category: "commodity",
    price: 3200,
    unit: "MMK/viss",
    change24h: -0.5,
    status: "normal",
    lastUpdated: "2026-03-03 20:00",
  },
  // Currency
  {
    id: "usd-mmk",
    name: "USD/MMK",
    nameMM: "ဒေါ်လာ/ကျပ်",
    category: "currency",
    price: 3580,
    unit: "MMK",
    change24h: 0.8,
    status: "normal",
    lastUpdated: "2026-03-03 22:00",
  },
  {
    id: "thb-mmk",
    name: "THB/MMK",
    nameMM: "ဘတ်/ကျပ်",
    category: "currency",
    price: 105,
    unit: "MMK",
    change24h: 1.5,
    status: "warning",
    lastUpdated: "2026-03-03 22:00",
  },
  {
    id: "cny-mmk",
    name: "CNY/MMK",
    nameMM: "ယွမ်/ကျပ်",
    category: "currency",
    price: 495,
    unit: "MMK",
    change24h: 0.3,
    status: "normal",
    lastUpdated: "2026-03-03 22:00",
  },
  {
    id: "sgd-mmk",
    name: "SGD/MMK",
    nameMM: "စင်ကာပူဒေါ်လာ/ကျပ်",
    category: "currency",
    price: 2680,
    unit: "MMK",
    change24h: -0.2,
    status: "normal",
    lastUpdated: "2026-03-03 22:00",
  },
  // Consumer Goods
  {
    id: "cooking-oil",
    name: "Cooking Oil (5L)",
    nameMM: "ဆီ (၅လီတာ)",
    category: "consumer",
    price: 18500,
    unit: "MMK",
    change24h: 0.0,
    status: "normal",
    lastUpdated: "2026-03-03 18:00",
  },
  {
    id: "sugar",
    name: "Sugar",
    nameMM: "သကြား",
    category: "consumer",
    price: 2800,
    unit: "MMK/viss",
    change24h: 5.2,
    status: "warning",
    lastUpdated: "2026-03-03 19:00",
  },
  {
    id: "chicken",
    name: "Chicken",
    nameMM: "ကြက်သား",
    category: "consumer",
    price: 7500,
    unit: "MMK/viss",
    change24h: -0.8,
    status: "normal",
    lastUpdated: "2026-03-03 17:00",
  },
  {
    id: "eggs",
    name: "Eggs (10 pcs)",
    nameMM: "ကြက်ဥ (၁၀လုံး)",
    category: "consumer",
    price: 3800,
    unit: "MMK",
    change24h: 1.2,
    status: "normal",
    lastUpdated: "2026-03-03 18:00",
  },
  {
    id: "diesel",
    name: "Diesel",
    nameMM: "ဒီဇယ်",
    category: "consumer",
    price: 2950,
    unit: "MMK/L",
    change24h: 2.1,
    status: "warning",
    lastUpdated: "2026-03-03 20:00",
  },
  {
    id: "petrol-92",
    name: "Petrol (92)",
    nameMM: "ဓာတ်ဆီ (၉၂)",
    category: "consumer",
    price: 2850,
    unit: "MMK/L",
    change24h: 1.8,
    status: "normal",
    lastUpdated: "2026-03-03 20:00",
  },
  {
    id: "cement",
    name: "Cement (50kg)",
    nameMM: "ဘိလပ်မြေ",
    category: "consumer",
    price: 9500,
    unit: "MMK/bag",
    change24h: 0.0,
    status: "normal",
    lastUpdated: "2026-03-03 16:00",
  },
  {
    id: "steel-rod",
    name: "Steel Rod",
    nameMM: "သံချောင်း",
    category: "consumer",
    price: 32000,
    unit: "MMK/rod",
    change24h: -1.5,
    status: "normal",
    lastUpdated: "2026-03-03 16:00",
  },
];

export const alerts: Alert[] = [
  {
    id: "alert-1",
    type: "price_spike",
    severity: "critical",
    market: "Gold (Yangon)",
    message: "Gold price surged 3.8% in 24h — highest daily jump this month",
    timestamp: "2026-03-03 22:00",
    acknowledged: false,
  },
  {
    id: "alert-2",
    type: "price_spike",
    severity: "high",
    market: "Sugar",
    message: "Sugar price up 5.2% — potential supply disruption in Mandalay region",
    timestamp: "2026-03-03 19:30",
    acknowledged: false,
  },
  {
    id: "alert-3",
    type: "unusual_activity",
    severity: "medium",
    market: "USD/MMK",
    message: "Unusual volume in informal USD exchange — parallel rate widening",
    timestamp: "2026-03-03 18:15",
    acknowledged: true,
  },
  {
    id: "alert-4",
    type: "price_spike",
    severity: "medium",
    market: "Rice (Emata)",
    message: "Emata rice up 2.3% — monsoon logistics delays reported",
    timestamp: "2026-03-03 17:00",
    acknowledged: false,
  },
  {
    id: "alert-5",
    type: "price_spike",
    severity: "low",
    market: "Diesel",
    message: "Diesel price inching up — fuel import delays at border",
    timestamp: "2026-03-03 15:00",
    acknowledged: true,
  },
];

export const reports: PatrolReport[] = [
  {
    id: "report-1",
    date: "2026-03-03",
    marketsPatrolled: 18,
    alertsTriggered: 5,
    summary: "Gold and sugar markets showing significant volatility. Currency markets stable but informal rates diverging.",
    findings: [
      "Gold surged to 4.85M MMK/tical — driven by regional demand and USD uncertainty",
      "Sugar supply disruption in Mandalay — traders reporting 5%+ price jumps",
      "Emata rice up 2.3% due to logistics delays in delta region",
      "Diesel prices rising at border towns — import bottleneck",
      "THB/MMK spread widening in border markets",
    ],
  },
  {
    id: "report-2",
    date: "2026-03-02",
    marketsPatrolled: 18,
    alertsTriggered: 2,
    summary: "Relatively calm trading day. Minor currency fluctuations. Commodity prices stable.",
    findings: [
      "Gold steady around 4.67M MMK/tical",
      "USD/MMK informal rate within normal spread",
      "Rice prices stable across all varieties",
      "Fuel prices flat — no supply issues reported",
    ],
  },
  {
    id: "report-3",
    date: "2026-03-01",
    marketsPatrolled: 16,
    alertsTriggered: 3,
    summary: "Month-start restocking drove minor price movements. Two markets not reachable.",
    findings: [
      "Month-end restocking caused temporary palm oil price bump (+1.5%)",
      "Gold dipped slightly as sellers took profit",
      "CNY/MMK tightened — likely seasonal trade settlement",
      "Lashio and Myitkyina markets unreachable — connectivity issues",
    ],
  },
];
