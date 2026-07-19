import { cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "secondary" | "onDark" | "onLight";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-orange-hot shadow-sm shadow-orange/20",
  secondary: "bg-blue text-white hover:brightness-110",
  onDark: "border border-white/20 text-white hover:bg-white/10",
  onLight: "border border-mist-2 text-ink hover:border-ink/30 hover:bg-mist",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md") {
  return cn(base, variants[variant], sizes[size]);
}

/** A ready-made WhatsApp CTA link with the glyph. */
export function WhatsAppButton({
  message,
  label,
  variant = "primary",
  size = "md",
  className,
}: {
  message: string;
  label: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonClasses(variant, size), className)}
    >
      <WhatsAppIcon className="h-[1.15em] w-[1.15em]" />
      {label}
    </a>
  );
}
