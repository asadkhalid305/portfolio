import { HeaderLinksProps } from "../../utils/types";
import { socials } from "../../utils/constants";
import LinkButton from "../../about/components/general/link-button";
import Link from "next/link";

const {
  topmateIO: { href },
} = socials;

export default function HeaderLinks({ links }: Readonly<HeaderLinksProps>) {
  let pathname = "";

  if (typeof window !== "undefined") {
    pathname = window.location.hash || window.location.pathname;
  }

  return (
    <nav aria-label="Main navigation">
      <div className="flex items-center gap-2 md:gap-2 lg:gap-3">
        <ul className="hidden lg:flex text-md font-medium lg:text-lg">
          {links.map((link) => {
            const isActive = link.href.startsWith("#")
              ? pathname === link.href
              : pathname === link.href || pathname === link.href + "/";
            return (
              <li
                key={link.href}
                className="p-2 px-3 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-300"
              >
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className="focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.href} legacyBehavior passHref>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className="focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      {link.name}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <LinkButton
          className="outline outline-2 transition-all duration-300 ease-in-out bg-c-dark text-c-light hover:bg-c-light hover:text-c-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-2"
          href={href}
          showIcon={false}
          text="Book 1:1 Session"
        />
      </div>
    </nav>
  );
}
