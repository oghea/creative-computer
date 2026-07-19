import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Cpu, PcCase, Wrench, Keyboard, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title") };
}

const ICONS: Record<string, LucideIcon> = {
  sales: Cpu,
  builds: PcCase,
  service: Wrench,
  accessories: Keyboard,
};

type Item = {
  id: string;
  title: string;
  desc: string;
  features: string[];
};

function ServicesContent() {
  const t = useTranslations("services");
  const tc = useTranslations("common");
  const items = t.raw("items") as Item[];

  return (
    <>
      <section className="bg-ink px-5 pb-16 pt-16 text-white sm:pt-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="max-w-xl text-lg text-muted-dark">{t("subtitle")}</p>
        </div>
      </section>

      <Section tone="paper" className="!pt-16">
        <div className="flex flex-col gap-4">
          {items.map((item, i) => {
            const Icon = ICONS[item.id] ?? Cpu;
            return (
              <article
                key={item.id}
                className="notch grid gap-8 border border-mist-2 bg-paper p-8 md:grid-cols-[1fr_1fr] md:p-10"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-ink text-orange">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-sm text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">{item.title}</h2>
                  <p className="max-w-md leading-relaxed text-muted">
                    {item.desc}
                  </p>
                  <a
                    href={waLink(`${item.title} — ${tc("waGeneric")}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit items-center gap-2 font-mono text-sm font-medium text-blue hover:text-orange"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {tc("waCta")}
                  </a>
                </div>
                <ul className="flex flex-col justify-center gap-3 md:border-l md:border-mist-2 md:pl-10">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className="h-4.5 w-4.5 shrink-0 text-orange" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="mist" className="!py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading title={t("ctaTitle")} subtitle={t("ctaSubtitle")} align="center" />
          <WhatsAppButton message={tc("waGeneric")} label={tc("waCta")} size="lg" />
        </div>
      </Section>
    </>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}
