"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import useHeader from "@/hooks/useHeader";
import HeaderLinks from "@/components/header/header-links";
import commonData from "@/constants/common.json";
import { interactionStyles } from "@/constants/interaction-styles";
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
        "sticky top-0 z-50 py-3.5 transition-colors duration-300 ease-out",
        {
          "bg-c-dark text-c-light shadow-[0_10px_35px_rgba(0,0,0,0.12)]":
            isDark,
          "bg-c-semidark text-c-dark": !isDark,
        }
      )}
      role="banner"
      aria-label="Site header"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className={clsx(
            "rounded-md transition-opacity duration-200 hover:opacity-75",
            interactionStyles.focusRing
          )}
          aria-label="Go to home page"
        >
          <span className="relative block h-6 w-28 sm:h-7 sm:w-32">
            <Image
              alt={commonData.header.logoAlt}
              draggable="false"
              fill
              sizes="(max-width: 639px) 112px, 128px"
              src={isDark ? "/images/logo-light.webp" : "/images/logo-dark.webp"}
            />
          </span>
        </Link>
        <HeaderLinks isDark={isDark} links={links} />
      </nav>
    </header>
  );
}
