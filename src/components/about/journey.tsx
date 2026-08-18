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
        <ol className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {visibleChapters.map((chapter) => (
            <li
              key={chapter.id}
              className="grid gap-4 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8 lg:grid-cols-[12rem_1fr] lg:py-10"
            >
              <div className="flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[0.18em] sm:pt-1.5">
                <span className="text-brand-blue">{chapter.marker}</span>
                <span className="text-gray-500">{chapter.label}</span>
              </div>
              <article className="max-w-3xl">
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] sm:text-3xl">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                  {chapter.fullText}
                </p>
              </article>
            </li>
          ))}
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
