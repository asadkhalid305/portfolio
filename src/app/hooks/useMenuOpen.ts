import { useState, useEffect } from "react";

/**
 * Custom hook to manage mobile menu open state and auto-close on desktop.
 */
export function useMenuOpen() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [menuOpen, setMenuOpen] as const;
}
