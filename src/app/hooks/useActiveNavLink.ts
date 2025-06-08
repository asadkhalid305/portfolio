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
    setCurrentHash(window.location.hash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const navLinkClass = (isActive: boolean, isDark?: boolean) => {
    let base =
      "focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2 focus-visible:outline-none block px-3 py-2 rounded-lg transition-colors duration-300 ease-in-out";
    if (isActive) {
      return (
        base +
        " bg-c-light text-c-dark font-semibold outline outline-2 outline-c-dark"
      );
    } else {
      let hover =
        "hover:bg-c-light hover:text-c-dark focus:bg-c-light focus:text-c-dark";
      let outline = !isDark
        ? " outline-c-dark hover:outline hover:outline-2 focus:outline focus:outline-2"
        : "";
      return base + " " + hover + outline;
    }
  };

  return { pathname, currentHash, navLinkClass };
}
