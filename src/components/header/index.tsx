"use client";

import clsx from "clsx";
import Image from "next/image";
import useHeader from "@/lib/hooks/useHeader";
import HeaderLinks from "@/components/header/header-links";
import commonData from "@/content/common.json";

export default function Header() {
  const { isDark } = useHeader();
  const { navigation } = commonData;

  const links = [
    { name: navigation.about, href: "/#about" },
    { name: navigation.journey, href: "/journey" },
    { name: navigation.experience, href: "/experience" },
    {
      name: navigation.contribution,
      href: "/contribution",
      dropdown: [
        { name: "Events", href: "/contribution#events" },
        { name: "Blogs", href: "/contribution#blogs" },
      ],
    },
    { name: navigation.testimonial, href: "/testimonials" },
    { name: navigation.contact, href: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "transition-colors duration-300 ease-in-out sticky top-0 z-50 py-5",
        {
          "bg-c-dark text-c-light": isDark,
          "bg-c-semidark": !isDark,
        }
      )}
      role="banner"
      aria-label="Site header"
    >
      <nav
        className="flex justify-between px-4 lg:max-w-7xl lg:mx-auto"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-center">
          <div className="relative w-36 h-8">
            <Image
              alt="Asad Ullah Khalid brand logo"
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
