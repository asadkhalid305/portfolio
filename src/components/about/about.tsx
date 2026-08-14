import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import aboutData from "@/constants/about.json";
import socialsData from "@/constants/socials.json";
import { getShimmerDataUrl } from "@/utils/shimmer";

const {
  heading,
  description,
  detail,
  personalPhoto,
  primaryCta,
  pillars,
} = aboutData;

export default function About() {
  return (
      <div className="relative overflow-x-clip pb-8 lg:pb-0">
        <div className="relative grid items-center gap-10 py-12 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-7">
          <div className="relative z-10 mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <h1 className="mx-auto max-w-4xl text-[clamp(2.5rem,10vw,4rem)] font-bold leading-[0.94] tracking-[-0.06em] text-slate-950 lg:mx-0 lg:text-[clamp(2.8rem,4.5vw,4rem)]">
              {heading}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 lg:mx-0">
              {description.split("Mercedes-Benz.io")[0]}
              <a
                href={socialsData.mercedesBenzIO.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-950 underline decoration-blue-500/50 underline-offset-4 transition-colors hover:decoration-blue-600"
              >
                Mercedes-Benz.io
              </a>
              {description.split("Mercedes-Benz.io")[1]}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base lg:mx-0">
              {detail}
            </p>

            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 text-left lg:mx-0">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="bg-white/70 px-3 py-4 backdrop-blur-sm sm:px-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
                    {pillar.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-800 sm:text-sm">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-c-dark px-6 py-3.5 text-sm font-semibold text-c-light shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-dark"
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
                className="group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-c-dark"
              >
                Book a session
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] lg:mr-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-slate-900 shadow-[0_35px_80px_rgba(15,23,42,0.22)]">
              <Image
                alt={personalPhoto.alt}
                className="object-cover object-[center_22%]"
                draggable="false"
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 544px"
                src={personalPhoto.src}
                placeholder="blur"
                blurDataURL={getShimmerDataUrl(544, 680)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Workshop in action
                </p>
                <p className="mt-2 max-w-sm text-lg font-semibold leading-7 sm:text-xl">
                  Turning complex technology into practical, hands-on learning.
                </p>
              </div>
            </div>

            <div className="absolute right-6 top-6 hidden rounded-2xl bg-blue-600 px-3.5 py-2.5 text-white shadow-lg sm:block">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-blue-100">
                Current focus
              </p>
              <p className="mt-1 text-sm font-semibold">Applied AI systems</p>
            </div>
          </div>
        </div>

      </div>
  );
}
