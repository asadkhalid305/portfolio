import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useMenuOpen } from "@/hooks/useMenuOpen";
import { NavMenuButton } from "@/components/header/nav-menu-button";
import { NavLinks } from "@/components/header/nav-links";
import LinkButton from "@/components/ui/link-button";
import { HeaderLinksProps } from "@/utils/types";
import commonData from "@/constants/common.json";
import socialsData from "@/constants/socials.json";
import { interactionStyles } from "@/constants/interaction-styles";

interface HeaderLinksWithThemeProps extends HeaderLinksProps {
  isDark: boolean;
}

export default function HeaderLinks({
  isDark,
  links,
}: Readonly<HeaderLinksWithThemeProps>) {
  const [menuOpen, setMenuOpen] = useMenuOpen();
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeWhenOutside = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen, setMenuOpen]);

  const menuButtonClassName = clsx(
    "grid h-10 w-10 place-items-center rounded-full border shadow-sm lg:hidden",
    interactionStyles.colorTransition,
    interactionStyles.focusRing,
    isDark
      ? "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15"
      : "border-black/15 bg-white/80 text-c-dark hover:border-black/30 hover:bg-white"
  );

  return (
    <nav
      ref={navigationRef}
      aria-label="Main navigation"
      className="flex items-center gap-3 lg:gap-4 xl:gap-6 relative"
    >
      <NavMenuButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className={menuButtonClassName}
      />
      <NavLinks isDark={isDark} links={links} menuOpen={menuOpen} />
      <div className="hidden lg:block">
        <LinkButton
          className="ml-auto whitespace-nowrap"
          href={socialsData.topmateIO.href}
          size="sm"
          text={commonData.navigation.bookSession}
          tone={isDark ? "light" : "dark"}
        />
      </div>
    </nav>
  );
}
