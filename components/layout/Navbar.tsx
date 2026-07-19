"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { buttonClasses } from "@/components/ui/button";
import LocaleToggle from "./LocaleToggle";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/simulator", key: "simulator" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-mist-2 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label="Creative Computer">
          <Image
            src="/brand/logo-wordmark.png"
            alt="Creative Computer"
            width={1267}
            height={349}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "rounded px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-orange"
                  : "text-ink/70 hover:text-ink",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle />
          <a
            href={waLink(tc("waGeneric"))}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("primary", "md")}
          >
            <WhatsAppIcon className="h-[1.15em] w-[1.15em]" />
            {tc("waShort")}
          </a>
        </div>

        <button
          type="button"
          className="rounded p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-mist-2 bg-paper md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-mist-2 py-3 text-base font-medium last:border-0",
                  isActive(item.href) ? "text-orange" : "text-ink",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-4">
              <LocaleToggle />
              <a
                href={waLink(tc("waGeneric"))}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonClasses("primary", "md"), "flex-1")}
              >
                <WhatsAppIcon className="h-[1.15em] w-[1.15em]" />
                {tc("waShort")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
