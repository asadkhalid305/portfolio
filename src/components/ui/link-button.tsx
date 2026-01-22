import { LinkButtonProps } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";

export default function LinkButton({
  href,
  text,
  showIcon,
  className,
  variant = "primary",
  iconPosition = "right",
}: Readonly<LinkButtonProps>) {
  const isInternal = href.startsWith("/");
  const isMinimal = variant === "minimal";

  const ArrowIcon = ({ className }: { className?: string }) => {
    if (iconPosition === "left") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={clsx("lucide lucide-arrow-left transition-transform duration-500 group-hover:-translate-x-1.5", className)}
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      );
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx("lucide lucide-arrow-right transition-transform duration-500 group-hover:translate-x-1.5", className)}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  };

  const content = (
    <>
      {iconPosition === "left" && (isMinimal || showIcon) && (
        <ArrowIcon />
      )}
      <span>{text}</span>
      {iconPosition === "right" && (isMinimal || showIcon) && (
        <ArrowIcon />
      )}
    </>
  );

  const commonClasses = clsx(
    "inline-flex items-center gap-2 transition-all duration-500 font-bold uppercase tracking-widest text-xs",
    {
      "group text-slate-900 hover:text-black dark:text-white dark:hover:text-slate-300": isMinimal,
      "px-8 py-4 rounded-2xl bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 dark:bg-white dark:text-slate-900": variant === "primary",
      "px-8 py-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 text-slate-900 shadow-lg hover:bg-white/60 hover:-translate-y-1 active:scale-95 dark:bg-gray-900/40 dark:border-white/5 dark:text-white": variant === "secondary",
    },
    className
  );

  if (isInternal) {
    return (
      <Link
        href={href}
        aria-label={text}
        className={clsx(commonClasses, className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className={clsx(commonClasses, className)}
    >
      {content}
    </a>
  );
}
