import Link from "next/link";
import { useActiveNavLink } from "@/hooks/useActiveNavLink";
import { HeaderLinksProps } from "@/utils/types";

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
          ? "absolute left-0 top-full mt-2 w-56 flex flex-col bg-c-dark text-c-light rounded-lg shadow-lg z-50 border-2 border-c-dark py-2 px-3 space-y-1 animate-fade-in xl:static xl:flex-row xl:bg-transparent xl:text-inherit xl:shadow-none xl:border-none xl:space-y-0 xl:gap-4 xl:px-0"
          : "hidden xl:flex xl:flex-row xl:bg-transparent xl:text-inherit xl:shadow-none xl:border-none xl:space-y-0"
      } text-md font-medium lg:text-base lg:gap-2 xl:text-lg xl:gap-4`}
    >
      {links.map((link) => {
        const isAnchor =
          link.href.startsWith("#") || link.href.startsWith("/#");
        const hrefHash = link.href.includes("#")
          ? "#" + link.href.split("#")[1]
          : "";
        const hrefPath = link.href.split("#")[0] || "/";

        const isActive = isAnchor
          ? pathname === hrefPath &&
            (currentHash === hrefHash ||
              (!currentHash && hrefHash === "#about"))
          : pathname === link.href || pathname === link.href + "/";

        if (link.dropdown) {
          return (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`${navLinkClass(
                  isActive,
                  isDark
                )} flex items-center gap-1`}
              >
                {link.name}
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <ul className="xl:absolute xl:left-0 xl:top-full xl:mt-2 xl:w-48 xl:bg-c-dark xl:text-c-light xl:rounded-lg xl:shadow-xl xl:opacity-0 xl:invisible xl:group-hover:opacity-100 xl:group-hover:visible xl:transition-all xl:duration-200 xl:z-50 xl:p-2 space-y-1 pl-4 xl:pl-2">
                {link.dropdown.map((dropItem) => (
                  <li key={dropItem.href}>
                    <Link
                      href={dropItem.href}
                      className="block px-3 py-2 rounded-md hover:bg-white/10 text-sm lg:text-base xl:text-c-light"
                    >
                      {dropItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

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
