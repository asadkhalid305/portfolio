"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Calendar } from "lucide-react";
import { useActiveNavLink } from "@/hooks/useActiveNavLink";
import { HeaderLinksProps } from "@/utils/types";
import commonData from "@/constants/common.json";
import socialsData from "@/constants/socials.json";

interface NavLinksProps extends HeaderLinksProps {
  menuOpen: boolean;
}

export function NavLinks({ links, menuOpen }: Readonly<NavLinksProps>) {
  const { pathname, currentHash, navLinkClass } = useActiveNavLink();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!openDropdown) return;

    const closeWhenOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openDropdown]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <ul
      ref={navRef}
      className={`${
        menuOpen
          ? "absolute right-0 top-full z-50 mt-2 flex w-64 flex-col space-y-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white shadow-xl animate-fade-in lg:static lg:mt-0 lg:w-auto lg:flex-row lg:gap-5 lg:space-y-0 lg:border-none lg:bg-transparent lg:px-0 lg:py-0 lg:text-inherit lg:shadow-none"
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
            <li key={link.href} className="relative flex flex-col lg:block">
              {/* Container for Link + Mobile Toggle */}
              <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start lg:gap-1">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${navLinkClass(isActive)} flex-grow lg:flex-grow-0`}
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.name}
                </Link>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleDropdown(link.name);
                  }}
                  className="-mr-1 rounded-md p-1.5 text-current opacity-60 transition-all hover:bg-black/5 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current lg:p-1"
                  aria-expanded={isDropdownOpen}
                  aria-label={`Toggle ${link.name} menu`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

              </div>

              {/* Dropdown Menu */}
              <ul
                style={{ backgroundColor: "#020617", color: "#ffffff" }}
                className={`
                    lg:absolute lg:right-0 lg:top-full lg:mt-2 lg:w-44 lg:rounded-xl lg:bg-slate-950 lg:text-white lg:shadow-xl lg:p-1.5 lg:z-50
                    ${
                      isDropdownOpen
                        ? "block animate-in slide-in-from-top-2"
                        : "hidden"
                    }
                    mt-1 space-y-1 rounded-md bg-white/5 px-2 py-1 lg:mt-2 lg:bg-transparent lg:p-0
                `}
              >
                {link.dropdown.map((dropItem) => (
                  <li key={dropItem.href}>
                    <Link
                      href={dropItem.href}
                      className="block rounded-md px-2.5 py-2 text-sm hover:bg-white/10 lg:text-white"
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
                className={navLinkClass(isActive)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={navLinkClass(isActive)}
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
