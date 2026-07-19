import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/ui/section";
import Simulator from "@/components/simulator/Simulator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "simulator" });
  return { title: t("title") };
}

function SimulatorHeader() {
  const t = useTranslations("simulator");
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl">{t("title")}</h1>
      <p className="max-w-2xl text-lg text-muted-dark">{t("subtitle")}</p>
    </div>
  );
}

export default async function SimulatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-ink px-5 pb-16 pt-16 text-white sm:pt-20">
        <SimulatorHeader />
      </section>
      <section className="bg-mist px-5 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Simulator />
        </div>
      </section>
    </>
  );
}
