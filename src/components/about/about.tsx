import clsx from "clsx";
import Image from "next/image";
import LinkButton from "@/components/ui/link-button";
import aboutData from "@/constants/about.json";
import socialsData from "@/constants/socials.json";
import { interactionStyles } from "@/constants/interaction-styles";
import { getShimmerDataUrl } from "@/utils/shimmer";

const { heading, description, detail, personalPhoto, primaryCta } = aboutData;

function Portrait({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={clsx(
        "hero-portrait-frame relative aspect-square",
        compact ? "w-28 sm:w-32" : "w-[min(88vw,30rem)]"
      )}
    >
      <div className="absolute inset-[7%] overflow-hidden rounded-full bg-[#e7eef1]">
        <Image
          alt={personalPhoto.alt}
          className="object-cover object-[center_32%] transition-transform duration-700 ease-out hover:scale-[1.015]"
          draggable="false"
          fill
          priority
          sizes={compact ? "128px" : "(max-width: 1024px) 480px, 544px"}
          src={personalPhoto.src}
          placeholder="blur"
          blurDataURL={getShimmerDataUrl(
            compact ? 128 : 544,
            compact ? 128 : 544
          )}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="grid items-center gap-8 py-10 sm:gap-10 sm:py-12 xl:min-h-[calc(100svh-68px)] xl:grid-cols-[1.15fr_0.85fr] xl:gap-12 xl:py-10">
      <div className="relative z-10 mx-auto max-w-3xl text-center xl:mx-0 xl:text-left">
        <div className="hero-enter hero-delay-1 mb-7 flex justify-center xl:hidden">
          <Portrait compact />
        </div>

        <h1 className="hero-enter hero-delay-2 max-w-3xl text-[clamp(2.65rem,10vw,4.5rem)] font-bold leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-[clamp(3.25rem,8vw,4.5rem)]">
          {heading}
        </h1>

        <p className="hero-enter hero-delay-3 mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl sm:leading-9 xl:mx-0">
          {description.split("Mercedes-Benz.io")[0]}
          <a
            href={socialsData.mercedesBenzIO.href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "font-semibold text-c-dark underline decoration-brand-blue/45 underline-offset-4 hover:decoration-brand-blue",
              interactionStyles.colorTransition,
              interactionStyles.focusRing
            )}
          >
            Mercedes-Benz.io
          </a>
          {description.split("Mercedes-Benz.io")[1]}
        </p>

        <p className="hero-enter hero-delay-3 mx-auto mt-3 max-w-xl text-base leading-7 text-gray-600 xl:mx-0">
          {detail}
        </p>

        <div className="hero-enter hero-delay-4 mt-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
          <LinkButton
            href={primaryCta.href}
            showIcon
            text={primaryCta.text}
          />
          <LinkButton
            href={socialsData.topmateIO.href}
            showIcon
            text="Book a session"
            variant="minimal"
          />
        </div>
      </div>

      <div className="hero-enter hero-delay-3 relative mx-auto hidden w-full max-w-[30rem] items-center justify-center xl:flex xl:justify-end">
        <Portrait />
      </div>
    </div>
  );
}
