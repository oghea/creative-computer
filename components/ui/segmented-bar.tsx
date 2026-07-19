import { cn } from "@/lib/utils";

/**
 * Signature element: a rating shown as filled rectangular segments — an EQ-style
 * strip that echoes the sliced segments of the Creative Computer logo letters.
 */
export function SegmentedBar({
  value,
  segments = 12,
  tone = "dark",
}: {
  value: number; // 0–100
  segments?: number;
  tone?: "dark" | "light";
}) {
  const filled = Math.round((Math.max(0, Math.min(100, value)) / 100) * segments);

  return (
    <div
      className="flex gap-1"
      role="meter"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {Array.from({ length: segments }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-3 flex-1 rounded-[2px] transition-colors duration-500",
            i < filled
              ? "bg-orange"
              : tone === "dark"
                ? "bg-white/10"
                : "bg-ink/10",
          )}
        />
      ))}
    </div>
  );
}
