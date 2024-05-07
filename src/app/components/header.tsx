"use client";

import clsx from "clsx";
import Image from "next/image";
import LogoDark from "public/images/logo-dark.png";
import LogoLight from "public/images/logo-light.png";
import useHeader from "../hooks/useHeader";

export default function Header() {
  const { isDark } = useHeader();

  return (
    <header
      className={clsx(
        "transition-colors duration-300 ease-in-out sticky top-0 z-50 py-5",
        {
          "bg-c-dark text-white": isDark,
          "bg-c-semiDark": !isDark,
        }
      )}
    >
      <nav className="flex justify-between px-4 lg:max-w-7xl lg:mx-auto">
        <Image
          alt="brand logo"
          draggable="false"
          src={isDark ? LogoLight : LogoDark}
          width="144"
          height="30"
        />
        <ul className="hidden space-x-4 uppercase font-medium text-xl md:show md:flex">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
