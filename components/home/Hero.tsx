import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Eyebrow } from "@/components/ui/section";
import { SegmentedBar } from "@/components/ui/segmented-bar";
import { WhatsAppButton, buttonClasses } from "@/components/ui/button";
import { levelIndex } from "@/data/components";

// A sample build shown in the hero panel — a static teaser of the simulator.
const SAMPLE = [
  { key: "content", value: 95 },
  { key: "everyday", value: 90 },
  { key: "work", value: 88 },
  { key: "gaming", value: 82 },
] as const;

export default function Hero() {
  const t = useTranslations("home.hero");
  const tc = useTranslations("common");
  const ts = useTranslations("simulator");
  const chips = t.raw("chips") as string[];

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid-backdrop absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col gap-7">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            {t("titleLine1")}
            <br />
            <span className="text-orange">{t("titleLine2")}</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-dark">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton
              message={tc("waGeneric")}
              label={tc("waCta")}
              size="lg"
            />
            <Link href="/simulator" className={buttonClasses("onDark", "lg")}>
              {tc("trySimulator")}
            </Link>
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <Check className="h-4 w-4 text-orange" />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Signature: a spec-panel that previews the build simulator */}
        <div className="notch-lg relative border border-white/10 bg-carbon/80 p-6 backdrop-blur sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dark">
              {ts("ratingTitle")}
            </span>
            <span className="font-display text-sm font-semibold text-orange">
              Creator Rig
            </span>
          </div>
          <ul className="flex flex-col gap-5">
            {SAMPLE.map((row) => (
              <li key={row.key} className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-white">
                    {ts(`useCases.${row.key}`)}
                  </span>
                  <span className="font-mono text-xs text-muted-dark">
                    {ts(`levels.${levelIndex(row.value)}`)}
                  </span>
                </div>
                <SegmentedBar value={row.value} />
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-white/10 pt-4 font-mono text-[0.7rem] leading-relaxed text-muted-dark">
            {ts("priceNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
