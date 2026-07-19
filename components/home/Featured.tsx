import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeading } from "@/components/ui/section";

type Item = { name: string; tag: string; desc: string };

// Accent color per card, cycling brand colors.
const ACCENTS = ["bg-orange", "bg-blue", "bg-sky"];

export default function Featured() {
  const t = useTranslations("home.featured");
  const tc = useTranslations("common");
  const items = t.raw("items") as Item[];

  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <article
            key={item.name}
            className="relative flex flex-col gap-4 overflow-hidden border border-mist-2 bg-paper p-7"
          >
            <span className={`absolute inset-x-0 top-0 h-1 ${ACCENTS[i % 3]}`} />
            <span className="w-fit bg-mist px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted">
              {item.tag}
            </span>
            <h3 className="text-2xl">{item.name}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            <Link
              href="/simulator"
              className="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-sm font-medium text-blue hover:text-orange"
            >
              {tc("trySimulator")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
