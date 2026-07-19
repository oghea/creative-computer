import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/ui/button";
import { site } from "@/lib/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

function ContactContent() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const locale = useLocale();
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery,
  )}&output=embed`;

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

      <section className="bg-paper px-5 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="flex items-center gap-2.5 text-lg">
                <MapPin className="h-5 w-5 text-orange" />
                {t("addressTitle")}
              </h2>
              <p className="leading-relaxed text-muted">
                {site.address.street}
                <br />
                {site.address.area}
                <br />
                {site.address.city} {site.address.postal}
              </p>
              <a
                href={site.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 font-mono text-sm font-medium text-blue hover:text-orange"
              >
                {tc("getDirections")}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="flex items-center gap-2.5 text-lg">
                <Clock className="h-5 w-5 text-orange" />
                {t("hoursTitle")}
              </h2>
              <ul className="flex flex-col divide-y divide-mist-2 border-y border-mist-2">
                {site.hours.map((h) => {
                  const day = locale === "en" ? h.dayEn : h.dayId;
                  return (
                    <li
                      key={h.dayEn}
                      className="flex items-center justify-between py-2.5 text-sm"
                    >
                      <span className="text-ink">{day}</span>
                      <span
                        className={
                          h.open ? "font-mono text-muted" : "font-mono text-orange"
                        }
                      >
                        {h.open ? `${h.open} – ${h.close}` : t("closed")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg">{t("reachTitle")}</h2>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2.5 text-muted hover:text-orange"
                >
                  <Phone className="h-4.5 w-4.5 text-blue" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-muted hover:text-orange"
                >
                  <Mail className="h-4.5 w-4.5 text-blue" />
                  {site.email}
                </a>
              </div>
              <WhatsAppButton
                message={tc("waGeneric")}
                label={tc("waCta")}
                size="lg"
                className="mt-2 w-fit"
              />
            </div>
          </div>

          {/* Map */}
          <div className="notch min-h-80 overflow-hidden border border-mist-2 bg-mist">
            <iframe
              title={t("mapTitle")}
              src={mapSrc}
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}
