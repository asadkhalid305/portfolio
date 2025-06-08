import { useEffect, useState } from "react";

export default function useHeader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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

    const intro = document.getElementById("intro");
    if (intro) observer.observe(intro);

    return () => {
      if (intro) observer.unobserve(intro);
    };
  }, []);

  return { isDark };
}
