import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/config";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/icons";

const NAV = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/simulator", key: "simulator" },
  { href: "/contact", key: "contact" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tc = useTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.3fr]">
        <div className="flex flex-col gap-5">
          <Image
            src="/brand/logo.png"
            alt="Creative Computer"
            width={1400}
            height={600}
            className="h-14 w-auto self-start"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted-dark">
            {t("tagline")}
          </p>
          <div className="flex gap-2">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/80 transition-colors hover:border-orange hover:text-orange"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
              @creative.komputer
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-muted-dark">{t("explore")}</h3>
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-orange"
                >
                  {tn(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-muted-dark">{t("reach")}</h3>
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange" />
              <span>
                {site.address.street}, {site.address.area}
                <br />
                {site.address.city} {site.address.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange" />
              <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-orange">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange" />
              <a
                href={waLink(tc("waGeneric"))}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange"
              >
                {tc("waCta")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. {t("rights")}
          </span>
          <span className="font-mono tracking-wider">SALES · SERVICE · ACCESSORIES</span>
        </div>
      </div>
    </footer>
  );
}
