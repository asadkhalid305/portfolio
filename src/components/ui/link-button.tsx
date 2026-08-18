import { LinkButtonProps } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";
import { interactionStyles } from "@/constants/interaction-styles";

function ArrowIcon({
  className,
  direction,
}: {
  className?: string;
  direction: NonNullable<LinkButtonProps["arrowDirection"]>;
}) {
  const paths = {
    left: "M7 16l-4-4m0 0l4-4m-4 4h18",
    right: "M17 8l4 4m0 0l-4 4m4-4H3",
    "up-right": "M7 17 17 7M7 7h10v10",
    "down-right": "m7 7 10 10M17 7v10H7",
  };

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={paths[direction]}
      />
    </svg>
  );
}

export default function LinkButton({
  href,
  text,
  showIcon = false,
  className,
  variant = "primary",
  iconPosition = "right",
  arrowDirection = iconPosition === "left" ? "left" : "right",
  rounded = "md",
  size = "md",
  tone = "dark",
}: Readonly<LinkButtonProps>) {
  const isInternal = href.startsWith("/");
  const isMinimal = variant === "minimal";
  const arrowMotion = {
    left: "group-hover:-translate-x-1",
    right: "group-hover:translate-x-1",
    "up-right": "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
    "down-right": "group-hover:translate-x-0.5 group-hover:translate-y-0.5",
  }[arrowDirection];

  const content = (
    <>
      {showIcon && iconPosition === "left" && (
        <ArrowIcon
          direction={arrowDirection}
          className={clsx(
            "h-4 w-4 transition-transform duration-300 ease-out",
            arrowMotion
          )}
        />
      )}
      <span>{text}</span>
      {showIcon && iconPosition === "right" && (
        <ArrowIcon
          direction={arrowDirection}
          className={clsx(
            "h-4 w-4 transition-transform duration-300 ease-out",
            arrowMotion
          )}
        />
      )}
    </>
  );

  const commonClasses = clsx(
    "group inline-flex w-fit items-center justify-center font-semibold",
    interactionStyles.focusRing,
    isMinimal
      ? "gap-2 rounded-sm text-lg text-c-dark transition-colors duration-200 ease-out hover:text-brand-blue-hover"
      : [
          "gap-3 text-sm shadow-lg transition-[color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:shadow-xl active:translate-y-0 active:shadow-md",
          rounded === "full" ? "rounded-full" : "rounded-md",
          size === "sm" ? "px-4 py-2.5" : "px-6 py-3.5",
          tone === "light"
            ? "bg-c-light text-c-dark"
            : "bg-c-dark text-c-light",
        ]
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
