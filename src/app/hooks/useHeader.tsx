import { useEffect, useState } from "react";

export default function useHeader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const intro = document.getElementById("intro");
    if (intro) observer.observe(intro);

    return () => {
      if (intro) observer.unobserve(intro);
    };
  }, []);

  return { isDark };
}
