import { ReactNode } from "react";
import clsx from "clsx";
import { NoiseTexture } from "@/components/ui/noise-texture";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: "light" | "dark" | "semidark";
  padding?: boolean;
  vCenter?: boolean;
}

/**
 * Section component for consistent section structure
 *
 * Example usage:
 * <Section id="about" bgColor="semidark">
 *   <Container>
 *     <AboutContent />
 *   </Container>
 * </Section>
 */
export function Section({
  id,
  children,
  className = "",
  bgColor,
  padding = true,
  vCenter = false,
}: SectionProps) {
  const bgClass = bgColor
    ? bgColor === "dark"
      ? "bg-c-dark"
      : bgColor === "semidark"
        ? "bg-c-semidark"
        : "bg-c-light"
    : "";

  const paddingClass = padding ? "py-16 sm:py-20 lg:py-24" : "";
  const vCenterClass = vCenter ? "flex flex-col justify-center" : "";
  const textureColorClass =
    bgColor === "dark" ? "fill-current text-white" : "fill-current text-black";

  return (
    <section
      id={id}
      className={clsx(
        "relative isolate",
        bgClass,
        paddingClass,
        vCenterClass,
        className,
      )}
    >
      <NoiseTexture
        aria-hidden="true"
        className={clsx("opacity-[0.1]", textureColorClass)}
        frequency={0.5}
        noiseOpacity={0.8}
        octaves={4}
        slope={0.08}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
