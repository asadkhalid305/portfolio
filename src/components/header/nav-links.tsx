import Link from "next/link";
import { useActiveNavLink } from "@/lib/hooks/useActiveNavLink";
import { HeaderLinksProps } from "@/lib/utils/types";

interface NavLinksProps extends HeaderLinksProps {
  menuOpen: boolean;
  isDark?: boolean;
}

export function NavLinks({ links, menuOpen, isDark }: Readonly<NavLinksProps>) {
  const { pathname, currentHash, navLinkClass } = useActiveNavLink();

  return (
    <ul
      className={`${
        menuOpen
          ? "absolute left-0 top-full mt-2 w-56 flex flex-col bg-c-dark text-c-light rounded-lg shadow-lg z-50 border-2 border-c-dark py-2 px-3 space-y-1 animate-fade-in lg:static lg:flex-row lg:bg-transparent lg:text-inherit lg:shadow-none lg:border-none lg:space-y-0 lg:gap-4 lg:px-0"
          : "hidden lg:flex lg:flex-row lg:bg-transparent lg:text-inherit lg:shadow-none lg:border-none lg:space-y-0 lg:gap-4"
      } text-md font-medium lg:text-lg`}
    >
      {links.map((link) => {
        const isAnchor = link.href.startsWith("#");
        const isActive = isAnchor
          ? (currentHash || pathname) === link.href
          : pathname === link.href || pathname === link.href + "/";
        return (
          <li key={link.href}>
            {isAnchor ? (
              <a
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={navLinkClass(isActive, isDark)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={navLinkClass(isActive, isDark)}
              >
                {link.name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
