import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: "light" | "dark" | "semidark" | "transparent";
  padding?: boolean;
  vCenter?: boolean;
}

/**
 * Section component for consistent section structure
 *
 * Example usage:
 * <Section id="about" bgColor="transparent">
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
      ? "bg-c-semidark/50 backdrop-blur-sm"
      : bgColor === "transparent"
      ? "bg-transparent"
      : "bg-c-light/50 backdrop-blur-sm"
    : "bg-transparent";

  const paddingClass = padding ? "py-20 lg:py-28" : "";
  const vCenterClass = vCenter ? "flex flex-col justify-center" : "";

  return (
    <section
      id={id}
      className={clsx(bgClass, paddingClass, vCenterClass, className)}
    >
      {children}
    </section>
  );
}
