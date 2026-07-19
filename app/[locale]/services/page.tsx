import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Laptop,
  LaptopMinimal,
  Gamepad2,
  Printer,
  Cctv,
  Cpu,
  Keyboard,
  PcCase,
  Network,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title") };
}

const SALES_ICONS: Record<string, LucideIcon> = {
  "laptop-baru": Laptop,
  "laptop-bekas": LaptopMinimal,
  "pc-gamer": Gamepad2,
  printer: Printer,
  cctv: Cctv,
  "spare-part": Cpu,
  accessories: Keyboard,
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  laptop: Laptop,
  pc: PcCase,
  printer: Printer,
  jaringan: Network,
};

type Item = { id: string; name: string; desc: string };

function Group({
  groupKey,
  icon: GroupIcon,
  items,
  icons,
  title,
  desc,
}: {
  groupKey: string;
  icon: LucideIcon;
  items: Item[];
  icons: Record<string, LucideIcon>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center bg-orange text-white">
          <GroupIcon className="h-5.5 w-5.5" />
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-sm text-muted">{desc}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.id] ?? Wrench;
          return (
            <div
              key={`${groupKey}-${item.id}`}
              className="notch flex flex-col gap-3 border border-mist-2 bg-paper p-6 transition-colors hover:border-orange/40"
            >
              <Icon className="h-6 w-6 text-blue" />
              <h3 className="text-lg">{item.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesContent() {
  const t = useTranslations("services");
  const tc = useTranslations("common");
  const salesItems = t.raw("sales.items") as Item[];
  const serviceItems = t.raw("service.items") as Item[];

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
        <div className="flex flex-col gap-16">
          <Group
            groupKey="sales"
            icon={ShoppingBag}
            items={salesItems}
            icons={SALES_ICONS}
            title={t("sales.title")}
            desc={t("sales.desc")}
          />
          <Group
            groupKey="service"
            icon={Wrench}
            items={serviceItems}
            icons={SERVICE_ICONS}
            title={t("service.title")}
            desc={t("service.desc")}
          />
        </div>
      </Section>

      <Section tone="mist" className="!py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            title={t("ctaTitle")}
            subtitle={t("ctaSubtitle")}
            align="center"
          />
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
