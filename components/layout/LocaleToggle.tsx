"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function LocaleToggle({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-md p-0.5 font-mono text-xs",
        tone === "dark" ? "bg-white/10" : "bg-mist",
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-pressed={loc === locale}
          className={cn(
            "rounded px-2 py-1 uppercase tracking-wider transition-colors",
            loc === locale
              ? "bg-orange text-white"
              : tone === "dark"
                ? "text-white/70 hover:text-white"
                : "text-muted hover:text-ink",
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
