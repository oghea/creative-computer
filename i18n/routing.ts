import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  // Indonesian (default) is served without a prefix ("/", "/services", …);
  // only English is prefixed ("/en", "/en/services", …).
  localePrefix: "as-needed",
  // Don't auto-switch based on the browser language.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
