import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  maxWidth?: string;
}

/**
 * Container component for consistent page width and padding
 * Uses Tailwind's built-in container utility with custom configuration
 */
export function Container({
  children,
  className = "",
  center = false,
  maxWidth = "",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "container mx-auto px-4 lg:px-8 w-full",
        maxWidth,
        className
      )}
    >
      {children}
    </div>
  );
}
