import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { interactionStyles } from "@/constants/interaction-styles";

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

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <article className={classes}>{children}</article>;
}
