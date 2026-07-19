// Curated component catalogue for the PC Build Simulator.
// No prices — each part carries a 0–100 suitability score per use case, and the
// simulator aggregates the selected parts into a rating for each use case.
// Edit freely: add/remove parts, adjust scores, or swap in your real inventory.

export type UseCase = "gaming" | "work" | "content" | "everyday";

export type CategoryId =
  | "cpu"
  | "gpu"
  | "motherboard"
  | "ram"
  | "storage"
  | "psu"
  | "cooler"
  | "case";

export type Tier = "entry" | "mid" | "high" | "enthusiast";

export interface Part {
  id: string;
  category: CategoryId;
  name: string;
  spec: string; // short technical descriptor (locale-neutral)
  tier: Tier;
  scores: Record<UseCase, number>;
}

export const USE_CASES: UseCase[] = ["gaming", "work", "content", "everyday"];

// Category display order + how much each category matters to each use case.
// The aggregate rating is a weighted average over the parts the user has chosen.
export interface CategoryMeta {
  id: CategoryId;
  weights: Record<UseCase, number>;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: "cpu", weights: { gaming: 3, work: 4, content: 4, everyday: 3 } },
  { id: "gpu", weights: { gaming: 5, work: 1, content: 4, everyday: 1 } },
  { id: "ram", weights: { gaming: 2, work: 3, content: 4, everyday: 2 } },
  { id: "storage", weights: { gaming: 1, work: 2, content: 2, everyday: 2 } },
  { id: "motherboard", weights: { gaming: 1, work: 1, content: 1, everyday: 1 } },
  { id: "psu", weights: { gaming: 1, work: 1, content: 1, everyday: 1 } },
  { id: "cooler", weights: { gaming: 1, work: 1, content: 1, everyday: 1 } },
  { id: "case", weights: { gaming: 0.5, work: 0.5, content: 0.5, everyday: 0.5 } },
];

export const PARTS: Part[] = [
  // ---- CPU ----------------------------------------------------------------
  { id: "cpu-i3-12100f", category: "cpu", name: "Intel Core i3-12100F", spec: "4 core / 8 thread", tier: "entry", scores: { gaming: 55, work: 55, content: 40, everyday: 85 } },
  { id: "cpu-r5-5600", category: "cpu", name: "AMD Ryzen 5 5600", spec: "6 core / 12 thread", tier: "entry", scores: { gaming: 68, work: 65, content: 55, everyday: 90 } },
  { id: "cpu-i5-12400f", category: "cpu", name: "Intel Core i5-12400F", spec: "6 core / 12 thread", tier: "mid", scores: { gaming: 74, work: 70, content: 62, everyday: 92 } },
  { id: "cpu-r5-7600", category: "cpu", name: "AMD Ryzen 5 7600", spec: "6 core / 12 thread, AM5", tier: "mid", scores: { gaming: 80, work: 74, content: 68, everyday: 93 } },
  { id: "cpu-r7-7800x3d", category: "cpu", name: "AMD Ryzen 7 7800X3D", spec: "8 core, 3D V-Cache", tier: "high", scores: { gaming: 98, work: 82, content: 84, everyday: 95 } },
  { id: "cpu-i7-14700k", category: "cpu", name: "Intel Core i7-14700K", spec: "20 core / 28 thread", tier: "enthusiast", scores: { gaming: 92, work: 92, content: 95, everyday: 96 } },
  { id: "cpu-r9-7900x", category: "cpu", name: "AMD Ryzen 9 7900X", spec: "12 core / 24 thread", tier: "enthusiast", scores: { gaming: 88, work: 94, content: 97, everyday: 95 } },

  // ---- GPU ----------------------------------------------------------------
  { id: "gpu-igpu", category: "gpu", name: "Integrated Graphics", spec: "onboard, no dedicated GPU", tier: "entry", scores: { gaming: 25, work: 70, content: 35, everyday: 85 } },
  { id: "gpu-gtx1650", category: "gpu", name: "NVIDIA GTX 1650", spec: "4GB GDDR6", tier: "entry", scores: { gaming: 52, work: 65, content: 45, everyday: 82 } },
  { id: "gpu-rtx3050", category: "gpu", name: "NVIDIA RTX 3050", spec: "8GB GDDR6", tier: "entry", scores: { gaming: 62, work: 68, content: 58, everyday: 84 } },
  { id: "gpu-rtx4060", category: "gpu", name: "NVIDIA RTX 4060", spec: "8GB GDDR6, DLSS 3", tier: "mid", scores: { gaming: 78, work: 72, content: 74, everyday: 88 } },
  { id: "gpu-rx7600", category: "gpu", name: "AMD Radeon RX 7600", spec: "8GB GDDR6", tier: "mid", scores: { gaming: 76, work: 70, content: 70, everyday: 87 } },
  { id: "gpu-rtx4070s", category: "gpu", name: "NVIDIA RTX 4070 Super", spec: "12GB GDDR6X", tier: "high", scores: { gaming: 90, work: 80, content: 90, everyday: 90 } },
  { id: "gpu-rtx4080s", category: "gpu", name: "NVIDIA RTX 4080 Super", spec: "16GB GDDR6X, 4K", tier: "enthusiast", scores: { gaming: 98, work: 85, content: 97, everyday: 92 } },

  // ---- Motherboard --------------------------------------------------------
  { id: "mb-h610", category: "motherboard", name: "Intel H610", spec: "LGA1700, DDR4", tier: "entry", scores: { gaming: 60, work: 62, content: 55, everyday: 88 } },
  { id: "mb-b760", category: "motherboard", name: "Intel B760", spec: "LGA1700, DDR5", tier: "mid", scores: { gaming: 78, work: 78, content: 76, everyday: 90 } },
  { id: "mb-b650", category: "motherboard", name: "AMD B650", spec: "AM5, DDR5, PCIe 5.0", tier: "mid", scores: { gaming: 82, work: 80, content: 80, everyday: 90 } },
  { id: "mb-z790", category: "motherboard", name: "Intel Z790", spec: "LGA1700, overclock", tier: "high", scores: { gaming: 90, work: 88, content: 88, everyday: 92 } },
  { id: "mb-x670e", category: "motherboard", name: "AMD X670E", spec: "AM5, PCIe 5.0, OC", tier: "enthusiast", scores: { gaming: 92, work: 92, content: 92, everyday: 92 } },

  // ---- RAM ----------------------------------------------------------------
  { id: "ram-8-ddr4", category: "ram", name: "8GB DDR4-3200", spec: "1×8GB", tier: "entry", scores: { gaming: 50, work: 55, content: 40, everyday: 82 } },
  { id: "ram-16-ddr4", category: "ram", name: "16GB DDR4-3200", spec: "2×8GB dual channel", tier: "mid", scores: { gaming: 78, work: 78, content: 68, everyday: 92 } },
  { id: "ram-16-ddr5", category: "ram", name: "16GB DDR5-6000", spec: "2×8GB dual channel", tier: "mid", scores: { gaming: 84, work: 82, content: 74, everyday: 93 } },
  { id: "ram-32-ddr5", category: "ram", name: "32GB DDR5-6000", spec: "2×16GB dual channel", tier: "high", scores: { gaming: 90, work: 92, content: 92, everyday: 94 } },
  { id: "ram-64-ddr5", category: "ram", name: "64GB DDR5-6000", spec: "2×32GB dual channel", tier: "enthusiast", scores: { gaming: 88, work: 96, content: 98, everyday: 92 } },

  // ---- Storage ------------------------------------------------------------
  { id: "ssd-256-sata", category: "storage", name: "256GB SATA SSD", spec: "2.5\" SATA", tier: "entry", scores: { gaming: 55, work: 60, content: 45, everyday: 85 } },
  { id: "ssd-512-nvme", category: "storage", name: "512GB NVMe SSD", spec: "PCIe Gen3", tier: "mid", scores: { gaming: 78, work: 78, content: 70, everyday: 92 } },
  { id: "ssd-1tb-nvme", category: "storage", name: "1TB NVMe SSD", spec: "PCIe Gen4", tier: "high", scores: { gaming: 90, work: 88, content: 88, everyday: 94 } },
  { id: "ssd-2tb-nvme", category: "storage", name: "2TB NVMe SSD", spec: "PCIe Gen4", tier: "enthusiast", scores: { gaming: 94, work: 92, content: 96, everyday: 94 } },

  // ---- PSU ----------------------------------------------------------------
  { id: "psu-450w", category: "psu", name: "450W 80+ White", spec: "non-modular", tier: "entry", scores: { gaming: 55, work: 65, content: 55, everyday: 85 } },
  { id: "psu-550w", category: "psu", name: "550W 80+ Bronze", spec: "non-modular", tier: "mid", scores: { gaming: 72, work: 74, content: 70, everyday: 90 } },
  { id: "psu-650w", category: "psu", name: "650W 80+ Bronze", spec: "semi-modular", tier: "mid", scores: { gaming: 82, work: 80, content: 80, everyday: 90 } },
  { id: "psu-750w", category: "psu", name: "750W 80+ Gold", spec: "fully modular", tier: "high", scores: { gaming: 92, work: 88, content: 90, everyday: 92 } },
  { id: "psu-850w", category: "psu", name: "850W 80+ Gold", spec: "fully modular", tier: "enthusiast", scores: { gaming: 96, work: 90, content: 94, everyday: 92 } },

  // ---- Cooler -------------------------------------------------------------
  { id: "cool-stock", category: "cooler", name: "Stock Cooler", spec: "bundled air cooler", tier: "entry", scores: { gaming: 55, work: 62, content: 50, everyday: 88 } },
  { id: "cool-tower", category: "cooler", name: "Tower Air Cooler", spec: "single-tower, 4 heatpipe", tier: "mid", scores: { gaming: 80, work: 80, content: 78, everyday: 92 } },
  { id: "cool-aio240", category: "cooler", name: "240mm AIO Liquid", spec: "dual 120mm fans", tier: "high", scores: { gaming: 90, work: 86, content: 88, everyday: 90 } },
  { id: "cool-aio360", category: "cooler", name: "360mm AIO Liquid", spec: "triple 120mm fans", tier: "enthusiast", scores: { gaming: 94, work: 90, content: 94, everyday: 90 } },

  // ---- Case ---------------------------------------------------------------
  { id: "case-matx", category: "case", name: "Micro-ATX Case", spec: "compact, basic airflow", tier: "entry", scores: { gaming: 65, work: 72, content: 60, everyday: 90 } },
  { id: "case-airflow", category: "case", name: "Mid-Tower Airflow", spec: "mesh front, 3 fans", tier: "mid", scores: { gaming: 85, work: 82, content: 82, everyday: 92 } },
  { id: "case-glass", category: "case", name: "Mid-Tower Glass", spec: "tempered glass, RGB", tier: "high", scores: { gaming: 90, work: 82, content: 86, everyday: 90 } },
];

export function partsByCategory(category: CategoryId): Part[] {
  return PARTS.filter((p) => p.category === category);
}

export type Selection = Partial<Record<CategoryId, string>>; // category -> part id

/**
 * Aggregate a selection into a 0–100 rating per use case, using a weighted
 * average over the categories the user has actually picked. Returns null-ish 0
 * for use cases when nothing is selected (caller decides how to render empty).
 */
export function rateBuild(selection: Selection): Record<UseCase, number> {
  const result: Record<UseCase, number> = {
    gaming: 0,
    work: 0,
    content: 0,
    everyday: 0,
  };

  for (const uc of USE_CASES) {
    let weighted = 0;
    let totalWeight = 0;
    for (const cat of CATEGORIES) {
      const partId = selection[cat.id];
      if (!partId) continue;
      const part = PARTS.find((p) => p.id === partId);
      if (!part) continue;
      const w = cat.weights[uc];
      weighted += part.scores[uc] * w;
      totalWeight += w;
    }
    result[uc] = totalWeight === 0 ? 0 : Math.round(weighted / totalWeight);
  }

  return result;
}

/**
 * Map a 0–100 score to a level index 0–4
 * (Basic / Fair / Good / Great / Excellent). Thresholds are intentionally
 * demanding so "Excellent" means a genuinely high-end, balanced build.
 */
export function levelIndex(value: number): number {
  if (value < 40) return 0;
  if (value < 60) return 1;
  if (value < 75) return 2;
  if (value < 90) return 3;
  return 4;
}

/** Number of chosen categories. */
export function selectionCount(selection: Selection): number {
  return CATEGORIES.reduce(
    (n, cat) => (selection[cat.id] ? n + 1 : n),
    0,
  );
}
