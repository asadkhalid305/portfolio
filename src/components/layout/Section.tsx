import { ReactNode } from "react";
import clsx from "clsx";

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

  return (
    <section
      id={id}
      className={clsx(bgClass, paddingClass, vCenterClass, className)}
    >
      {children}
    </section>
  );
}
