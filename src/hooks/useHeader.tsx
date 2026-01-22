import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useHeader() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If not on the homepage, always use dark header
    if (pathname !== "/") {
      setIsDark(true);
      return;
    }

    // Header height in px (py-5 = 1.25rem top + bottom = 2.5rem = 40px, plus font/line-height, so use 80px for safety)
    const HEADER_HEIGHT = 80;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
      }
    );

    const about = document.getElementById("about");
    if (about) {
      // Initial check
      const rect = about.getBoundingClientRect();
      const isPast = rect.top <= HEADER_HEIGHT;
      setIsDark(isPast);
      
      observer.observe(about);
    } else {
        // Fallback if about section is missing on homepage for some reason
        setIsDark(false); 
    }

    return () => {
      if (about) observer.unobserve(about);
      observer.disconnect();
    };
  }, [pathname]);

  return { isDark };
}
