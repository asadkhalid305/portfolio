import { useMenuOpen } from "@/lib/hooks/useMenuOpen";
import { NavMenuButton } from "@/components/header/nav-menu-button";
import { NavLinks } from "@/components/header/nav-links";
import LinkButton from "@/app/about/components/general/link-button";
import { HeaderLinksProps } from "@/lib/utils/types";
import commonData from "@/content/common.json";
import socialsData from "@/content/socials.json";

export default function HeaderLinks({ links }: Readonly<HeaderLinksProps>) {
  const [menuOpen, setMenuOpen] = useMenuOpen();

  const menuButtonClassName = `lg:hidden p-2 rounded-md bg-c-dark text-c-light shadow-md transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-c-dark outline outline-2 outline-c-light focus-visible:ring-offset-2`;

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center gap-4 lg:gap-6 relative"
    >
      <NavMenuButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className={menuButtonClassName}
      />
      <NavLinks links={links} menuOpen={menuOpen} />
      <LinkButton
        className="whitespace-nowrap outline outline-2 transition-all duration-300 ease-in-out bg-c-dark text-c-light hover:bg-c-light hover:text-c-dark rounded-md shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2 px-4 py-2 ml-auto"
        href={socialsData.topmateIO.href}
        showIcon={false}
        text={commonData.navigation.bookSession}
      />
    </nav>
  );
}
