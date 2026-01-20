interface BadgeProps {
  text: string;
  className?: string;
}

// Available color palettes for dynamic assignment
const COLOR_PALETTES = [
  "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
  "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
];

// Badge color mapping based on badge text
const getBadgeColors = (badgeText: string): string => {
  const badge = badgeText.toLowerCase();

  // 1. Specific overrides requested by user
  if (badge.includes("coming soon")) {
    // Yellow/Amber for attention
    return "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300";
  }
  if (badge.includes("open source")) {
    // Green for Open Source
    return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
  }

  // 2. Existing Semantic Mappings
  if (badge.includes("featured")) {
    return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
  }
  if (badge.includes("latest") || badge.includes("new")) {
    return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300";
  }
  if (badge.includes("upcoming") || badge.includes("beta")) {
    return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300";
  }
  if (badge.includes("deprecated") || badge.includes("archived")) {
    return "bg-gray-100 dark:bg-gray-800/30 text-gray-700 dark:text-gray-400";
  }
  if (badge.includes("popular") || badge.includes("trending")) {
    return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300";
  }

  // 3. Deterministic Random Color for unknown badges
  // Simple hash to ensure the same badge always gets the same color
  let hash = 0;
  for (let i = 0; i < badge.length; i++) {
    hash = badge.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % COLOR_PALETTES.length;
  return COLOR_PALETTES[index];
};

export default function Badge({ text, className = "" }: Readonly<BadgeProps>) {
  return (
    <span
      className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-md ${getBadgeColors(
        text
      )} ${className}`}
    >
      {text}
    </span>
  );
}
