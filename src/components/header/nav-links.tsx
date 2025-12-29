"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Calendar } from "lucide-react";
import { useActiveNavLink } from "@/hooks/useActiveNavLink";
import { HeaderLinksProps } from "@/utils/types";
import commonData from "@/constants/common.json";
import socialsData from "@/constants/socials.json";

interface NavLinksProps extends HeaderLinksProps {
  menuOpen: boolean;
  isDark?: boolean;
}

export function NavLinks({ links, menuOpen, isDark }: Readonly<NavLinksProps>) {
  const { pathname, currentHash, navLinkClass } = useActiveNavLink();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <ul
      className={`${
        menuOpen
          ? "absolute right-0 top-full mt-2 w-64 flex flex-col bg-c-dark text-c-light rounded-lg shadow-lg z-50 border-2 border-c-dark py-3 px-4 space-y-1 animate-fade-in lg:static lg:flex-row lg:bg-transparent lg:text-inherit lg:shadow-none lg:border-none lg:space-y-0 lg:gap-5 lg:px-0 lg:py-0 lg:w-auto lg:mt-0"
          : "hidden lg:flex lg:flex-row lg:bg-transparent lg:text-inherit lg:shadow-none lg:border-none lg:space-y-0"
      } text-md font-medium lg:text-base lg:gap-5`}
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
          const isDropdownOpen = openDropdown === link.name;

          return (
            <li key={link.href} className="relative group flex flex-col lg:block">
              {/* Container for Link + Mobile Toggle */}
              <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start lg:gap-1">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${navLinkClass(
                    isActive,
                    isDark
                  )} flex-grow lg:flex-grow-0`}
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.name}
                </Link>

                {/* Mobile Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleDropdown(link.name);
                  }}
                  className="lg:hidden p-2 -mr-2 text-c-light hover:text-white transition-colors"
                  aria-expanded={isDropdownOpen}
                  aria-label={`Toggle ${link.name} menu`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Desktop Chevron */}
                <ChevronDown className="hidden lg:block w-4 h-4 transition-transform group-hover:rotate-180" />
              </div>

              {/* Dropdown Menu */}
              <ul
                className={`
                    lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-48 lg:bg-c-dark lg:text-c-light lg:rounded-lg lg:shadow-xl lg:p-2 lg:z-50
                    lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-all lg:duration-200
                    ${
                      isDropdownOpen
                        ? "block animate-in slide-in-from-top-2"
                        : "hidden lg:block"
                    }
                    space-y-1 pl-4 border-l-2 border-white/20 ml-2 mt-1 lg:border-none lg:pl-0 lg:ml-0 lg:mt-2
                `}
              >
                {link.dropdown.map((dropItem) => (
                  <li key={dropItem.href}>
                    <Link
                      href={dropItem.href}
                      className="block px-3 py-2 rounded-md hover:bg-white/10 text-sm lg:text-base lg:text-c-light"
                      onClick={() => setOpenDropdown(null)}
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

      {/* Mobile CTA Link (Subtle variant) */}
      <li className="lg:hidden pt-4 mt-2 border-t border-white/10">
        <Link
          href={socialsData.topmateIO.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md bg-white/5 border border-white/20 text-c-light hover:bg-white/10 hover:border-white/30"
        >
          <Calendar className="w-4 h-4" />
          {commonData.navigation.bookSession}
        </Link>
      </li>
    </ul>
  );
}