import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "mist" | "ink";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  ink: "bg-ink text-white",
};

export function Section({
  children,
  tone = "paper",
  className,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("px-5 py-20 sm:py-24 md:py-28", toneClasses[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Mono, tracked, uppercase label with a small orange module marker. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2.5 text-orange", className)}>
      <span aria-hidden className="h-2.5 w-2.5 bg-orange" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "max-w-2xl text-3xl sm:text-4xl md:text-[2.75rem]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-muted-dark" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
