import { ExperienceCardProps } from "@/utils/types";
import clsx from "clsx";
import CardShell from "@/components/ui/card-shell";
import CardAction from "@/components/ui/card-action";

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
    <CardShell
      featured={featured}
      contentClassName={clsx(
        "p-6",
        compact ? "flex h-full flex-col" : "xl:grid xl:grid-cols-[17rem_1fr] xl:gap-10 xl:p-8"
      )}
    >
      <div
        className={clsx(
          !compact &&
            (featured
              ? "xl:border-r xl:border-white/15 xl:pr-8"
              : "xl:border-r xl:border-black/10 xl:pr-8 dark:xl:border-white/10")
        )}
      >
        <div
          className={clsx(
            "flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]",
            featured ? "text-gray-300" : "text-gray-500"
          )}
        >
          <span className={clsx(featured && "text-blue-300")}>
            {featured ? "Current role" : period}
          </span>
          {featured && (
            <>
              <span aria-hidden="true">·</span>
              <span>{period}</span>
            </>
          )}
        </div>
        <h3
          className={clsx(
            "mt-3 text-xl font-bold leading-tight tracking-[-0.025em] sm:text-2xl",
            featured ? "text-white" : "text-gray-950 dark:text-white"
          )}
        >
          {role}
        </h3>
        <p
          className={clsx(
            "mt-2 text-base font-semibold",
            featured ? "text-gray-200" : "text-gray-700 dark:text-gray-300"
          )}
        >
          {company}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[type, mode].map((item) => (
            <span
              key={item}
              className={clsx(
                "rounded-full px-3 py-1 text-xs font-semibold",
                featured
                  ? "bg-white/10 text-gray-200"
                  : "bg-black/[0.045] text-gray-600 dark:bg-white/10 dark:text-gray-300"
              )}
            >
              {item}
            </span>
          ))}
        </div>
        {!compact && (
          <p
            className={clsx(
              "mt-5 text-sm leading-6",
              featured ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {duration} · {location}
          </p>
        )}
      </div>

      <div className={clsx("flex flex-col", compact ? "mt-5 flex-1" : "mt-6 xl:mt-0")}>
        <p
          className={clsx(
            "text-base leading-7 sm:text-lg sm:leading-8",
            featured ? "text-gray-200" : "text-gray-700 dark:text-gray-300"
          )}
        >
          {description}
        </p>

        {strongestOutcomes.length > 0 && (
          <div className="mt-5">
            <h4
              className={clsx(
                "text-xs font-bold uppercase tracking-[0.16em]",
                featured ? "text-gray-300" : "text-gray-500"
              )}
            >
              {achievements.length > 0 ? "Selected impact" : "Key work"}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {strongestOutcomes.map((item) => (
                <li
                  key={item}
                  className={clsx(
                    "flex items-start gap-3 text-sm leading-6",
                    featured ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full",
                      featured ? "bg-blue-300" : "bg-brand-blue"
                    )}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {link && (
          <div className="mt-6">
            <CardAction
              direction="up-right"
              featured={featured}
              href={link}
              size="sm"
              text={`Visit ${company}`}
              underlined
            />
          </div>
        )}
      </div>
    </CardShell>
  );
}
