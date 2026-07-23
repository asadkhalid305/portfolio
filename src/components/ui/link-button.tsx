import { LinkButtonProps } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";

function ArrowIcon({
  className,
  direction,
}: {
  className?: string;
  direction: "left" | "right";
}) {
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
        d={direction === "left" ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"}
      />
    </svg>
  );
}

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

  const content = (
    <>
      {iconPosition === "left" && isMinimal && (
        <ArrowIcon direction="left" className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />
      )}
      <span>{text}</span>
      {iconPosition === "right" && isMinimal && (
        <ArrowIcon direction="right" className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      )}
      {/* Non-minimal variant icon support can be added if needed, currently only handling minimal for back button */}
      {!isMinimal && showIcon && iconPosition === "right" && (
        <svg
          className="w-3 h-3 ml-2 2xl:m-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      )}
    </>
  );

  const commonClasses = isMinimal
    ? "group inline-flex items-center gap-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:text-gray-600"
    : "inline-flex items-center w-fit text-sm font-medium rounded-lg px-5 py-3 shadow transition-all duration-300 ease-in-out lg:text-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-c-dark focus-visible:outline";

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
