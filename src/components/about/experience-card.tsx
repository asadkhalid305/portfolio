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
      className="group block rounded-2xl border border-white/20 bg-white/40 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:bg-white/60 hover:shadow-2xl hover:-translate-y-1 dark:border-gray-800/30 dark:bg-gray-900/40 dark:hover:bg-gray-900/60"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
            {role}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge text={type} variant="outline" className="bg-white/50 dark:bg-gray-800/50" />
            <Badge text={mode} variant="outline" className="bg-white/50 dark:bg-gray-800/50" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {company}
          </p>
          <div className="flex flex-wrap gap-x-4 items-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md italic">{period}</span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span>{duration}</span>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            {location}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Responsibilities */}
      {responsibilities.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4">
            Key Responsibilities
          </h4>
          <ul className="grid grid-cols-1 gap-3">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[15px] text-gray-600 dark:text-gray-300 group/item"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 flex-shrink-0 transition-colors group-hover/item:bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-2">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4">
            Key Achievements
          </h4>
          <ul className="grid grid-cols-1 gap-3">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[15px] text-gray-600 dark:text-gray-300 group/item"
              >
                <div className="w-5 h-5 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover/item:bg-green-100">
                  <span className="text-green-600 dark:text-green-400 text-[10px] font-bold">
                    ✓
                  </span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link indicator */}
      {link && (
        <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Visit Project
          </span>
          <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black transition-transform group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      )}
    </CardWrapper>
  );
}
