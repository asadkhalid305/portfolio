import { Fragment } from "react";
import Image from "next/image";
import clsx from "clsx";
import LinkButton from "@/components/ui/link-button";
import JourneyMap from "@/components/about/journey-map";
import { Lens } from "@/components/ui/lens";
import journeyData from "@/constants/journey.json";
import { JourneyChapter } from "@/utils/types";

const { label, heading, intro, cta } = journeyData;
const chapters = journeyData.chapters as JourneyChapter[];

export default function Journey({
  isOverview = false,
}: {
  isOverview?: boolean;
}) {
  const visibleChapters = isOverview
    ? chapters.filter((chapter) => chapter.featured)
    : chapters;

  return (
    <div>
      <div className="max-w-4xl">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
          {label}
        </span>
        <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl sm:leading-9">
          {intro}
        </p>
      </div>

      {isOverview ? (
        <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {visibleChapters.map((chapter) => (
            <li key={chapter.id} className="border-t border-black/15 pt-5">
              <article>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                  <span className="text-brand-blue">{chapter.marker}</span>
                  <span className="text-gray-500">{chapter.label}</span>
                </div>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.025em]">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-700">
                  {chapter.summary}
                </p>
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <ol className="mt-12 space-y-5">
          {visibleChapters.map((chapter, index) => {
            const imageOnRight = index % 2 === 1;
            const imageSrc = chapter.image?.src ?? "/images/default.webp";
            const isPlaceholder = imageSrc === "/images/default.webp";

            return (
              <Fragment key={chapter.id}>
                {chapter.id === "starting-again" ? (
                  <li className="py-5 sm:py-8">
                    <JourneyMap />
                  </li>
                ) : null}

                <li
                  className={clsx(
                    "rounded-[2rem] py-8 sm:py-10 lg:py-12",
                    index % 2 === 1
                      ? "bg-c-semidark px-5 sm:px-8 lg:px-10"
                      : "border-y border-black/10"
                  )}
                >
                  <article className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
                    <figure
                      className={clsx(
                        "relative lg:col-span-5",
                        imageOnRight ? "lg:order-2" : "lg:order-1"
                      )}
                    >
                      <Lens
                        ariaLabel={`Explore the image for ${chapter.label}`}
                        className="aspect-[5/4] rounded-2xl border border-black/10 bg-slate-700 shadow-xl"
                        focusable={!isPlaceholder}
                        lensSize={190}
                        zoomFactor={1.24}
                      >
                        <Image
                          alt={chapter.image?.alt ?? ""}
                          className="object-cover"
                          fill
                          sizes="(min-width: 1024px) 38vw, 100vw"
                          src={imageSrc}
                        />
                        {isPlaceholder ? (
                          <span
                            aria-hidden="true"
                            className="absolute right-5 top-3 text-7xl font-bold tracking-[-0.08em] text-white/10 sm:text-8xl"
                          >
                            {chapter.marker}
                          </span>
                        ) : null}
                      </Lens>
                      <figcaption className="absolute inset-x-0 bottom-0 z-30 rounded-b-2xl bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent px-5 pb-5 pt-12 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
                        {chapter.label}
                        {isPlaceholder ? " · photo to be added" : " · personal archive"}
                      </figcaption>
                    </figure>

                    <div
                      className={clsx(
                        "lg:col-span-7",
                        imageOnRight ? "lg:order-1" : "lg:order-2"
                      )}
                    >
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                        <span className="text-brand-blue">{chapter.marker}</span>
                        <span className="text-gray-500">{chapter.label}</span>
                      </div>
                      <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                        {chapter.title}
                      </h3>
                      <p className="mt-5 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                        {chapter.fullText}
                      </p>
                    </div>
                  </article>
                </li>
              </Fragment>
            );
          })}
        </ol>
      )}

      {isOverview && (
        <div className="mt-8 flex justify-center lg:justify-start">
          <LinkButton
            href="/journey"
            showIcon
            text={cta}
            variant="minimal"
          />
        </div>
      )}
    </div>
  );
}
