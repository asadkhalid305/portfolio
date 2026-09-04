"use client";

import clsx from "clsx";
import { interactionStyles } from "@/constants/interaction-styles";

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
    <div className={clsx("flex flex-wrap gap-3", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={activeFilter === option.value}
          onClick={() => onFilterChange(option.value)}
          className={clsx(
            "rounded-full border px-4 py-2 text-sm font-semibold",
            interactionStyles.colorTransition,
            interactionStyles.focusRing,
            activeFilter === option.value
              ? "border-c-dark bg-c-dark text-white dark:border-white dark:bg-white dark:text-c-dark"
              : "border-black/10 bg-white/70 text-gray-600 hover:border-brand-blue/40 hover:text-brand-blue-hover dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-300"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
