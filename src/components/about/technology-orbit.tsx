import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";

const expertise = [
  { compactLabel: "JS · TS", featured: true, label: "JS · TS" },
  { compactLabel: "FULL-STACK", featured: true, label: "FULL-STACK" },
  { compactLabel: "PRODUCT", label: "PRODUCT ENGINEERING" },
  { compactLabel: "AI", label: "APPLIED AI" },
  { compactLabel: "SPEAKER", label: "TALKS · WORKSHOPS" },
] as const;

export default function TechnologyOrbit({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-label="Core expertise: JavaScript and TypeScript, full-stack and product engineering, applied AI, talks and workshops"
      className="pointer-events-none absolute inset-0 z-20"
      role="img"
    >
      <OrbitingCircles
        duration={compact ? 28 : 42}
        iconSize={compact ? 22 : 32}
        radius={compact ? 66 : 260}
      >
        {expertise.map((item) => (
          <span
            className={cn(
              "flex flex-none whitespace-nowrap rounded-full border font-bold text-white",
              compact
                ? "px-2 py-1 text-[7px] tracking-[0.12em] shadow-sm"
                : "px-3 py-2 text-[10px] tracking-[0.14em] shadow-md",
              "featured" in item
                ? "border-brand-blue bg-brand-blue"
                : "border-c-dark bg-c-dark"
            )}
            key={item.label}
          >
            {compact ? item.compactLabel : item.label}
          </span>
        ))}
      </OrbitingCircles>
    </div>
  );
}
