import { ExperienceCardProps } from "@/utils/types";
import clsx from "clsx";
import { interactionStyles } from "@/constants/interaction-styles";

type ExperienceCardViewProps = ExperienceCardProps & {
  compact?: boolean;
  featured?: boolean;
};

export default function ExperienceCard({
  company,
  role,
  type,
  period,
  duration,
  location,
  mode,
  link,
  description,
  responsibilities,
  achievements,
  compact = false,
  featured = false,
}: Readonly<ExperienceCardViewProps>) {
  const strongestOutcomes = (
    achievements.length > 0 ? achievements : responsibilities
  ).slice(0, compact ? 2 : 3);

  return (
    <article
      className={clsx(
        "relative overflow-hidden rounded-2xl border bg-white/80 p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-lg dark:bg-gray-900/80",
        featured
          ? "border-brand-blue/40 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-brand-blue"
          : "border-black/10 dark:border-white/10",
        compact ? "flex h-full flex-col" : "lg:grid lg:grid-cols-[17rem_1fr] lg:gap-10 lg:p-8"
      )}
    >
      <div className={clsx(!compact && "lg:border-r lg:border-black/10 lg:pr-8 dark:lg:border-white/10")}>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
          <span className={clsx(featured && "text-brand-blue")}>
            {featured ? "Current role" : period}
          </span>
          {featured && (
            <>
              <span aria-hidden="true">·</span>
              <span>{period}</span>
            </>
          )}
        </div>
        <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.025em] text-gray-950 dark:text-white sm:text-2xl">
          {role}
        </h3>
        <p className="mt-2 text-base font-semibold text-gray-700 dark:text-gray-300">
          {company}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[type, mode].map((item) => (
            <span
              key={item}
              className="rounded-full bg-black/[0.045] px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-white/10 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
        {!compact && (
          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {duration} · {location}
          </p>
        )}
      </div>

      <div className={clsx("flex flex-col", compact ? "mt-5 flex-1" : "mt-6 lg:mt-0")}>
        <p className="text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-8">
          {description}
        </p>

        {strongestOutcomes.length > 0 && (
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
              {achievements.length > 0 ? "Selected outcomes" : "Key work"}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {strongestOutcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {link && (
          <a
            className={clsx(
              "mt-6 w-fit rounded-sm text-sm font-bold text-c-dark underline decoration-brand-blue decoration-2 underline-offset-4 dark:text-white",
              interactionStyles.colorTransition,
              interactionStyles.blueText,
              interactionStyles.focusRing
            )}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {company}
            <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
