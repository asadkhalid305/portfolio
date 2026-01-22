"use client";

import clsx from "clsx";

interface FilterBarProps<T extends string> {
  options: { value: T; label: string }[];
  activeFilter: T;
  onFilterChange: (value: T) => void;
  className?: string;
}

export default function FilterBar<T extends string>({
  options,
  activeFilter,
  onFilterChange,
  className,
}: Readonly<FilterBarProps<T>>) {
  return (
    <div className={clsx("flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl w-fit dark:bg-gray-900/30 dark:border-white/5", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={clsx(
            "rounded-xl px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-500",
            activeFilter === option.value
              ? "bg-slate-900 text-white shadow-xl scale-[1.02] dark:bg-white dark:text-slate-900"
              : "text-slate-500 hover:text-slate-900 hover:bg-white/50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800/50"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
