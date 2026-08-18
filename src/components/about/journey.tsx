import clsx from "clsx";
import LinkButton from "@/components/ui/link-button";
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

      <ol className="relative mt-12 space-y-10 before:absolute before:bottom-0 before:left-[0.45rem] before:top-2 before:w-px before:bg-black/10 lg:mt-16 lg:space-y-2 lg:before:left-1/2">
        {visibleChapters.map((chapter, index) => (
          <li
            key={chapter.id}
            className="relative pl-10 lg:grid lg:min-h-52 lg:grid-cols-2 lg:pl-0"
          >
            <span className="absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full bg-brand-blue ring-8 ring-white lg:left-1/2 lg:-translate-x-1/2" />
            <article
              className={clsx(
                "border-t border-black/15 pt-5",
                index % 2 === 0
                  ? "lg:mr-14 lg:pr-8"
                  : "lg:col-start-2 lg:ml-14 lg:pl-8"
              )}
            >
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                <span className="text-brand-blue">{chapter.marker}</span>
                <span className="text-gray-500">{chapter.label}</span>
              </div>
              <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-[-0.025em] sm:text-3xl">
                {chapter.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                {isOverview ? chapter.summary : chapter.fullText}
              </p>
            </article>
          </li>
        ))}
      </ol>

      {isOverview && (
        <div className="mt-10 flex justify-center lg:justify-start">
          <LinkButton
            className="hover:text-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
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
