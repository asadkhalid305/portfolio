import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: "light" | "dark" | "semidark";
}

/**
 * Section component for consistent section structure
 *
 * Example usage:
 * <Section id="intro" bgColor="semidark">
 *   <Container>
 *     <IntroContent />
 *   </Container>
 * </Section>
 */
export function Section({
  id,
  children,
  className = "",
  bgColor,
}: SectionProps) {
  const bgClass = bgColor
    ? bgColor === "dark"
      ? "bg-c-dark"
      : bgColor === "semidark"
      ? "bg-c-semidark"
      : "bg-c-light"
    : "";

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      {children}
    </section>
  );
}
