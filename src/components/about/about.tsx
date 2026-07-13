import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import aboutData from "@/constants/about.json";
import socialsData from "@/constants/socials.json";
import { getShimmerDataUrl } from "@/utils/shimmer";

const { eyebrow, heading, description, detail, personalPhoto, primaryCta } =
  aboutData;

export default function About() {
  return (
    <div className="grid min-h-[calc(100svh-80px)] items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-10">
      <div className="relative z-10 max-w-3xl">
        <div className="hero-enter hero-delay-1 mb-5 flex items-center justify-between gap-4 lg:block">
          <p className="max-w-[14rem] text-xs font-bold tracking-[0.22em] text-gray-500 sm:max-w-none sm:text-sm">
            {eyebrow}
          </p>
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-black/10 bg-[#e7eef1] lg:hidden">
            <Image
              alt={personalPhoto.alt}
              className="object-cover"
              draggable="false"
              fill
              priority
              sizes="64px"
              src={personalPhoto.src}
              placeholder="blur"
              blurDataURL={getShimmerDataUrl(64, 64)}
            />
          </div>
        </div>
        <h1 className="hero-enter hero-delay-2 max-w-3xl text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.055em]">
          {heading}
        </h1>
        <p className="hero-enter hero-delay-3 mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl sm:leading-9">
          {description.split("Mercedes-Benz.io")[0]}
          <a
            href={socialsData.mercedesBenzIO.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-c-dark underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black"
          >
            Mercedes-Benz.io
          </a>
          {description.split("Mercedes-Benz.io")[1]}
          <span className="hidden sm:inline"> {detail}</span>
        </p>

        <div className="hero-enter hero-delay-4 mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-c-dark px-6 py-3.5 text-sm font-semibold text-c-light shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-dark"
          >
            {primaryCta.text}
            <ArrowDownRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <a
            href={socialsData.topmateIO.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-3 text-sm font-semibold underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-dark"
          >
            Book a 1:1 session
          </a>
        </div>
      </div>

      <div className="hero-enter hero-delay-3 relative mx-auto hidden w-full max-w-[30rem] items-center justify-center lg:flex lg:justify-end">
        <div className="hero-portrait-frame relative aspect-square w-[min(88vw,30rem)]">
          <div className="absolute inset-[7%] overflow-hidden rounded-full bg-[#e7eef1]">
            <Image
              alt={personalPhoto.alt}
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              draggable="false"
              fill
              priority
              sizes="(max-width: 768px) 88vw, (max-width: 1024px) 480px, 544px"
              src={personalPhoto.src}
              placeholder="blur"
              blurDataURL={getShimmerDataUrl(544, 544)}
            />
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide shadow-sm backdrop-blur lg:left-auto lg:right-2 lg:translate-x-0">
          Building products · sharing knowledge
        </div>
      </div>
    </div>
  );
}
