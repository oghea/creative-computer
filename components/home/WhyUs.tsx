import { useTranslations } from "next-intl";
import { ShieldCheck, Wrench, BadgeCheck, MessagesSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const ICONS: LucideIcon[] = [ShieldCheck, Wrench, BadgeCheck, MessagesSquare];

type Item = { title: string; desc: string };

export default function WhyUs() {
  const t = useTranslations("home.whyUs");
  const items = t.raw("items") as Item[];

  return (
    <Section tone="mist">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <li key={item.title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue/10 text-blue">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
