import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component for consistent page width and padding
 * Uses Tailwind's built-in container utility with custom configuration
 */
export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`container ${className}`}>{children}</div>;
}
