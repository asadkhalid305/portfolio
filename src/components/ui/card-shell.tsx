import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { interactionStyles } from "@/constants/interaction-styles";
import { MagicCard } from "@/components/ui/magic-card";

type CardShellProps = {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  href?: string;
};

export default function CardShell({
  children,
  className,
  featured = false,
  href,
}: Readonly<CardShellProps>) {
  const classes = clsx(
    "group/card relative overflow-hidden rounded-2xl border border-black/10 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800",
    featured
      ? "border-c-dark bg-c-dark text-c-light dark:border-c-dark dark:bg-c-dark"
      : "bg-white hover:bg-c-semidark dark:bg-gray-900 dark:hover:bg-gray-800",
    href && interactionStyles.focusRing,
    className
  );

  const cardSurface = featured ? "#000000" : "#ffffff";
  const magicCardClasses = clsx(
    "h-full w-full border-2",
    featured
      ? "[&>div:first-of-type]:bg-c-dark"
      : "[&>div:first-of-type]:bg-white group-hover/card:[&>div:first-of-type]:bg-c-semidark"
  );

  const cardContent = (
    <MagicCard
      className={magicCardClasses}
      backgroundColor={cardSurface}
      borderColor="transparent"
      gradientColor="rgba(10, 102, 194, 0.12)"
      gradientFrom="#0A66C2"
      gradientOpacity={0.2}
      gradientSize={330}
      gradientTo="#00B7FF"
    >
      {children}
    </MagicCard>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {cardContent}
      </Link>
    );
  }

  return <article className={classes}>{cardContent}</article>;
}
