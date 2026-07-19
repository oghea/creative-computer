import { useTranslations } from "next-intl";
import { Cpu, PcCase, Wrench, Keyboard, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeading } from "@/components/ui/section";

const ICONS: Record<string, LucideIcon> = {
  sales: Cpu,
  builds: PcCase,
  service: Wrench,
  accessories: Keyboard,
};

type Item = { id: string; title: string; desc: string };

export default function ServicesOverview() {
  const t = useTranslations("home.servicesOverview");
  const tc = useTranslations("common");
  const items = t.raw("items") as Item[];

  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = ICONS[item.id] ?? Cpu;
          return (
            <div
              key={item.id}
              className="notch group flex flex-col gap-4 border border-mist-2 bg-paper p-6 transition-colors hover:border-orange/40"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-ink text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-mono text-sm font-medium text-blue hover:text-orange"
        >
          {tc("seeServices")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
