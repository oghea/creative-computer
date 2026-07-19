import { useTranslations } from "next-intl";
import { WhatsAppButton } from "@/components/ui/button";

export default function CtaBanner() {
  const t = useTranslations("home.ctaBanner");
  const tc = useTranslations("common");

  return (
    <section className="bg-ink px-5 py-20 text-white sm:py-24">
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange/20 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-4xl sm:text-5xl">{t("title")}</h2>
          <p className="max-w-lg text-lg text-muted-dark">{t("subtitle")}</p>
          <WhatsAppButton
            message={tc("waGeneric")}
            label={t("cta")}
            size="lg"
            className="mt-2"
          />
        </div>
      </div>
    </section>
  );
}
