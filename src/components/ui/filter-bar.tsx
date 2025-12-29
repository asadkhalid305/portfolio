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
    <div className={clsx("flex flex-wrap gap-3", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
            activeFilter === option.value
              ? "bg-c-dark text-white shadow-md dark:bg-white dark:text-c-dark"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
