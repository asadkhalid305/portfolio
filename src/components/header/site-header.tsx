"use client";

import clsx from "clsx";
import Link from "next/link";
import useHeader from "@/hooks/useHeader";
import HeaderLinks from "@/components/header/header-links";
import BrandMark from "@/components/header/brand-mark";
import commonData from "@/constants/common.json";
import { Post } from "@/utils/types";

interface HeaderProps {
  projects?: Post[];
}

export default function SiteHeader({ projects = [] }: Readonly<HeaderProps>) {
  const { isElevated } = useHeader();
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
        "sticky top-0 z-50 border-b py-3.5 text-c-dark transition-all duration-300 ease-out",
        {
          "border-black/10 bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl":
            isElevated,
          "border-transparent bg-c-semidark/90 backdrop-blur-md": !isElevated,
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
          className="rounded-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c-dark focus-visible:ring-offset-4"
          aria-label="Go to home page"
        >
          <BrandMark />
        </Link>
        <HeaderLinks links={links} />
      </nav>
    </header>
  );
}
