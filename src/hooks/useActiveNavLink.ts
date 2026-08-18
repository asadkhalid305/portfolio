import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Returns the current active nav link href, handling both hash and pathname.
 * - For anchor links, returns window.location.hash if present, otherwise pathname.
 * - For normal links, returns pathname.
 * Also provides a navLinkClass helper for styling.
 */
export function useActiveNavLink() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    queueMicrotask(updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Scroll to section on mount if hash is present and not just '#'
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hash &&
      window.location.hash.length > 1 // Only if there is a real hash
    ) {
      const id = window.location.hash.replace("#", "");
      // Wait for DOM to be ready
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure DOM is ready
    }
  }, []);

  const navLinkClass = (isActive: boolean, isDark = false) => {
    const base =
      "relative block rounded-md px-2.5 py-2 text-sm font-medium text-current transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";
    if (isActive) {
      return (
        base +
        " font-semibold after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-blue" +
        (isDark ? " focus-visible:ring-offset-c-dark" : " focus-visible:ring-offset-c-semidark")
      );
    }

    return (
      base +
      " opacity-75 hover:text-brand-blue hover:opacity-100 focus:opacity-100" +
      (isDark ? " focus-visible:ring-offset-c-dark" : " focus-visible:ring-offset-c-semidark")
    );
  };

  return { pathname, currentHash, navLinkClass };
}
