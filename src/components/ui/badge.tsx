interface BadgeProps {
  text: string;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
}

// Badge color mapping based on badge text
const getBadgeColors = (badgeText: string, variant: string): string => {
  const badge = badgeText.toLowerCase();
  
  const colors: Record<string, string> = {
    featured: "blue",
    latest: "emerald",
    new: "emerald",
    upcoming: "purple",
    "coming soon": "purple",
    beta: "purple",
    deprecated: "gray",
    archived: "gray",
    popular: "orange",
    trending: "orange",
    "open source": "sky",
  };

  const color = colors[badge] || "slate";

  if (variant === "outline") {
    return `border border-${color}-200 dark:border-${color}-800/50 text-${color}-600 dark:text-${color}-400`;
  }
  
  if (variant === "ghost") {
    return `bg-${color}-50/50 dark:bg-${color}-900/10 text-${color}-600 dark:text-${color}-400`;
  }

  return `bg-${color}-50 dark:bg-${color}-900/20 text-${color}-700 dark:text-${color}-300`;
};

export default function Badge({ 
  text, 
  className = "", 
  variant = "solid" 
}: Readonly<BadgeProps>) {
  return (
    <span
      className={`inline-block px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase rounded-full transition-all duration-300 ${getBadgeColors(
        text,
        variant
      )} ${className}`}
    >
      {text}
    </span>
  );
}
