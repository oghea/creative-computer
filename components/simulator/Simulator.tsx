"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, RotateCcw } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { SegmentedBar } from "@/components/ui/segmented-bar";
import { buttonClasses } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import {
  CATEGORIES,
  PARTS,
  USE_CASES,
  partsByCategory,
  rateBuild,
  selectionCount,
  levelIndex,
  type CategoryId,
  type Selection,
} from "@/data/components";

// Natural assembly order for the UI (differs from scoring-weight order).
const DISPLAY_ORDER: CategoryId[] = [
  "cpu",
  "motherboard",
  "gpu",
  "ram",
  "storage",
  "cooler",
  "psu",
  "case",
];

export default function Simulator() {
  const t = useTranslations("simulator");
  const [selection, setSelection] = useState<Selection>({});

  const ratings = useMemo(() => rateBuild(selection), [selection]);
  const count = selectionCount(selection);
  const total = CATEGORIES.length;

  const setPart = (category: CategoryId, partId: string) =>
    setSelection((prev) => {
      const next = { ...prev };
      if (partId) next[category] = partId;
      else delete next[category];
      return next;
    });

  const reset = () => setSelection({});

  const message = useMemo(() => {
    const lines: string[] = [t("wa.greeting"), "", t("wa.buildHeading")];
    for (const cat of DISPLAY_ORDER) {
      const label = t(`categories.${cat}`);
      const part = PARTS.find((p) => p.id === selection[cat]);
      lines.push(`• ${label}: ${part ? part.name : t("notSelected")}`);
    }
    lines.push("", t("wa.suitedHeading"));
    for (const uc of USE_CASES) {
      lines.push(`• ${t(`useCases.${uc}`)}: ${t(`levels.${levelIndex(ratings[uc])}`)}`);
    }
    lines.push("", t("wa.closing"));
    return lines.join("\n");
  }, [selection, ratings, t]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_0.9fr] lg:gap-6">
      {/* Component picker */}
      <div className="border border-mist-2 bg-paper p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl">{t("buildTitle")}</h2>
          <button
            type="button"
            onClick={reset}
            disabled={count === 0}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-orange disabled:opacity-40"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {t("resetCta")}
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {DISPLAY_ORDER.map((cat) => {
            const options = partsByCategory(cat);
            const selected = PARTS.find((p) => p.id === selection[cat]);
            return (
              <label key={cat} className="flex flex-col gap-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {t(`categories.${cat}`)}
                </span>
                <div className="relative">
                  <select
                    value={selection[cat] ?? ""}
                    onChange={(e) => setPart(cat, e.target.value)}
                    className={cn(
                      "h-12 w-full appearance-none rounded-md border bg-mist px-3.5 pr-10 text-sm outline-none transition-colors focus:border-orange",
                      selected
                        ? "border-blue/40 text-ink"
                        : "border-mist-2 text-muted",
                    )}
                  >
                    <option value="">{t("choosePlaceholder")}</option>
                    {options.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} · {p.spec}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
                {selected && (
                  <span className="flex items-center gap-2 pl-0.5 text-xs text-muted">
                    <span className="bg-blue/10 px-1.5 py-0.5 font-mono uppercase tracking-wide text-blue">
                      {t(`tiers.${selected.tier}`)}
                    </span>
                    {selected.spec}
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      {/* Ratings + send (sticky on desktop) */}
      <div className="lg:sticky lg:top-20 lg:self-start">
        <div className="notch-lg border border-white/10 bg-ink p-6 text-white sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dark">
              {t("ratingTitle")}
            </span>
            <span className="font-mono text-xs text-muted-dark">
              {t("selectedCount", { count, total })}
            </span>
          </div>

          {count === 0 && (
            <p className="mb-6 rounded-md bg-white/5 p-3 text-sm text-muted-dark">
              {t("emptyState")}
            </p>
          )}

          <ul className="flex flex-col gap-5">
            {USE_CASES.map((uc) => (
              <li key={uc} className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium">{t(`useCases.${uc}`)}</span>
                  <span className="font-mono text-xs text-muted-dark">
                    {count === 0 ? "—" : t(`levels.${levelIndex(ratings[uc])}`)}
                  </span>
                </div>
                <SegmentedBar value={count === 0 ? 0 : ratings[uc]} />
              </li>
            ))}
          </ul>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={count === 0}
            onClick={(e) => count === 0 && e.preventDefault()}
            className={cn(
              buttonClasses("primary", "lg"),
              "mt-7 w-full",
              count === 0 && "pointer-events-none opacity-50",
            )}
          >
            <WhatsAppIcon className="h-[1.15em] w-[1.15em]" />
            {t("sendCta")}
          </a>

          <p className="mt-4 font-mono text-[0.7rem] leading-relaxed text-muted-dark">
            {t("priceNote")}
          </p>
        </div>
      </div>
    </div>
  );
}
