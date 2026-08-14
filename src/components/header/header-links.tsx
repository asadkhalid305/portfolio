import { useMenuOpen } from "@/hooks/useMenuOpen";
import { NavMenuButton } from "@/components/header/nav-menu-button";
import { NavLinks } from "@/components/header/nav-links";
import LinkButton from "@/components/ui/link-button";
import { HeaderLinksProps } from "@/utils/types";
import commonData from "@/constants/common.json";
import socialsData from "@/constants/socials.json";

export default function HeaderLinks({ links }: Readonly<HeaderLinksProps>) {
  const [menuOpen, setMenuOpen] = useMenuOpen();

  const menuButtonClassName = `lg:hidden grid h-10 w-10 place-items-center rounded-full border border-slate-900/15 bg-white/80 text-c-dark shadow-sm transition-all duration-300 hover:border-slate-900/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2`;

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center gap-3 lg:gap-4 xl:gap-6 relative"
    >
      <NavMenuButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className={menuButtonClassName}
      />
      <NavLinks links={links} menuOpen={menuOpen} />
      <div className="hidden lg:block">
        <LinkButton
          className="ml-auto whitespace-nowrap rounded-full bg-c-dark px-5 py-2.5 text-sm font-semibold text-c-light shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-4"
          href={socialsData.topmateIO.href}
          showIcon={false}
          text={commonData.navigation.bookSession}
        />
      </div>
    </nav>
  );
}
