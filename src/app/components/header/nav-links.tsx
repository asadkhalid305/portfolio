import Link from "next/link";
import { useActiveNavLink } from "../../hooks/useActiveNavLink";
import { HeaderLinksProps } from "../../utils/types";

interface NavLinksProps extends HeaderLinksProps {
  menuOpen: boolean;
}

export function NavLinks({ links, menuOpen }: Readonly<NavLinksProps>) {
  const { pathname, currentHash } = useActiveNavLink();

  const navLinkClass = (isActive: boolean) =>
    `focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2 focus-visible:outline-none block px-3 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
      isActive
        ? "bg-c-light text-c-dark font-semibold outline outline-2 outline-c-dark"
        : "hover:bg-c-light hover:text-c-dark focus:bg-c-light focus:text-c-dark"
    }`;

  return (
    <ul
      className={`flex-1 ${
        menuOpen
          ? "absolute left-0 top-full mt-2 w-56 flex flex-col bg-c-dark text-c-light rounded-lg shadow-lg z-50 border-2 border-c-dark py-2 space-y-1 animate-fade-in lg:static lg:flex-row lg:bg-transparent lg:text-inherit lg:shadow-none lg:border-none lg:space-y-0 lg:space-x-2"
          : "hidden lg:flex lg:flex-row lg:bg-transparent lg:text-inherit lg:shadow-none lg:border-none lg:space-y-0 lg:space-x-2"
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
                className={navLinkClass(isActive)}
              >
                {link.name}
              </a>
            ) : (
              <Link href={link.href} legacyBehavior passHref>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={navLinkClass(isActive)}
                >
                  {link.name}
                </a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
