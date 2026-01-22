"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import useHeader from "@/hooks/useHeader";
import HeaderLinks from "@/components/header/header-links";
import commonData from "@/constants/common.json";
import { Post } from "@/utils/types";

interface HeaderProps {
  projects?: Post[];
}

export default function SiteHeader({ projects = [] }: Readonly<HeaderProps>) {
  const { isDark } = useHeader();
  const { navigation } = commonData;

  const projectDropdown = projects.map((project) => ({
    name: project.frontmatter.title,
    href: `/projects/${project.slug}`,
  }));

  const links = [
    {
      name: navigation.about,
      href: "/#about",
      dropdown: [
        { name: navigation.journey, href: "/journey" },
        { name: navigation.experience, href: "/experience" },
        { name: navigation.testimonial, href: "/testimonials" },
      ],
    },
    {
      name: navigation.projects,
      href: "/projects",
      dropdown: projectDropdown.length > 0 ? projectDropdown : undefined,
    },
    {
      name: navigation.contribution,
      href: "/contribution",
      dropdown: [
        { name: navigation.events, href: "/contribution#events" },
        { name: navigation.blogs, href: "/contribution#blogs" },
        { name: navigation.bookReviews, href: "/contribution#book-reviews" },
      ],
    },
    { name: navigation.contact, href: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "transition-all duration-500 ease-in-out sticky top-0 z-50 py-4",
        "bg-white/40 backdrop-blur-xl border-b border-white/20 dark:bg-black/40 dark:border-white/5 shadow-sm"
      )}
      role="banner"
      aria-label="Site header"
    >
      <nav
        className="flex items-center justify-between px-4 lg:max-w-7xl lg:mx-auto"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center justify-center transition-all hover:scale-[1.02] active:scale-95"
          aria-label="Go to home page"
        >
          <div className="relative w-36 h-8">
            <Image
              alt={commonData.header.logoAlt}
              draggable="false"
              fill
              sizes="144px"
              className="object-contain"
              src={
                isDark ? "/images/logo-light.webp" : "/images/logo-dark.webp"
              }
            />
          </div>
        </Link>
        <HeaderLinks links={links} />
      </nav>
    </header>
  );
}
