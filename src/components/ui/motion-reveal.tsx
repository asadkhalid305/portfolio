"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
}

export default function MotionReveal({
  children,
  className,
}: Readonly<MotionRevealProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const animationFrame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx("motion-reveal", className)}
      data-visible={isVisible}
    >
      {children}
    </div>
  );
}
