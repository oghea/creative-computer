import { Chakra_Petch, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

// Display — squared, technical caps that echo the logo's angular letterforms.
export const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body — engineered, highly readable, good for bilingual ID/EN copy.
export const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Utility — spec-sheet labels, eyebrows, and rating numerals.
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
