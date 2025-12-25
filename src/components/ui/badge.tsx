interface BadgeProps {
  text: string;
  className?: string;
}

// Badge color mapping based on badge text
const getBadgeColors = (badgeText: string): string => {
  const badge = badgeText.toLowerCase();

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

  // Default color
  return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
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
