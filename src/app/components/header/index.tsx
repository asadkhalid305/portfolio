"use client";

import clsx from "clsx";
import Image from "next/image";
import { header } from "@/app/utils/constants";
import useHeader from "../../hooks/useHeader";
import HeaderLinks from "./header-links";

const { links } = header;

export default function Header() {
  const { isDark } = useHeader();

  return (
    <header
      className={clsx(
        "transition-colors duration-300 ease-in-out sticky top-0 z-50 py-5",
        {
          "bg-c-dark text-c-light": isDark,
          "bg-c-semidark": !isDark,
        }
      )}
    >
      <nav className="flex justify-between px-4 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center justify-center">
          <div className="relative w-36 h-8">
            <Image
              alt="brand logo"
              draggable="false"
              fill
              sizes="100%"
              src={
                isDark ? "/images/logo-light.webp" : "/images/logo-dark.webp"
              }
            />
          </div>
        </div>
        <HeaderLinks links={links} />
      </nav>
    </header>
  );
}
