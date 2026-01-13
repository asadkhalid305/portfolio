import { ExperienceCardProps } from "@/utils/types";
import Badge from "@/components/ui/badge";

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
}: Readonly<ExperienceCardProps>) {
  const CardWrapper = link ? "a" : "div";
  const cardProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="group block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:bg-c-semidark hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {role}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge text={type} />
            <Badge text={mode} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {company}
          </p>
          <div className="flex flex-wrap gap-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="italic">{period}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Responsibilities */}
      {responsibilities.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Key Responsibilities
          </h4>
          <ul className="space-y-1.5">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <span className="text-gray-400 dark:text-gray-500 mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Key Achievements
          </h4>
          <ul className="space-y-1.5">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <span className="text-green-500 dark:text-green-400 mt-1.5 flex-shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link indicator */}
      {link && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            Visit company website
            <span className="ml-2 transition-transform inline-block group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      )}
    </CardWrapper>
  );
}
