import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

type Item = { name: string; role: string; quote: string };

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const items = t.raw("items") as Item[];

  return (
    <Section tone="mist">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col gap-5 border border-mist-2 bg-paper p-7"
          >
            <Quote className="h-7 w-7 text-orange" />
            <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink">
              “{item.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-3 border-t border-mist-2 pt-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 font-display font-semibold text-blue">
                {item.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold">{item.name}</span>
                <span className="block font-mono text-xs text-muted">
                  {item.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
