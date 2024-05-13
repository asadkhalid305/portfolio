"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "public/images/logo-dark.png";
import LogoLight from "public/images/logo-light.png";
import { header } from "@/app/utils/constants";
import useHeader from "../hooks/useHeader";

const { links } = header;

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
        <ul className="hidden text-lg font-medium md:show md:flex">
          {links.map((link) => (
            <li
              key={link.href}
              className="transition-colors duration-300 ease-in-out hover:bg-gray-200 rounded-lg p-1 px-3"
            >
              <Link href={`/${link.href}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
