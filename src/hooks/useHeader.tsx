import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useHeader() {
  const [isHomepageDark, setIsHomepageDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    // Header height in px (py-5 = 1.25rem top + bottom = 2.5rem = 40px, plus font/line-height, so use 80px for safety)
    const HEADER_HEIGHT = 80;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomepageDark(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
      }
    );

    const about = document.getElementById("about");
    if (about) {
      const animationFrame = requestAnimationFrame(() => {
        setIsHomepageDark(about.getBoundingClientRect().top <= HEADER_HEIGHT);
      });
      observer.observe(about);

      return () => {
        cancelAnimationFrame(animationFrame);
        observer.unobserve(about);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [pathname]);

  return { isDark: pathname !== "/" || isHomepageDark };
}
