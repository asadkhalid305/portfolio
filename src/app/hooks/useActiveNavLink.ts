import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Returns the current active nav link href, handling both hash and pathname.
 * - For anchor links, returns window.location.hash if present, otherwise pathname.
 * - For normal links, returns pathname.
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

  return { pathname, currentHash };
}
