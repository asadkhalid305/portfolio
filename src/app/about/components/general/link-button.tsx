import { LinkButtonProps } from "@/lib/utils/types";
import clsx from "clsx";

export default function LinkButton({
  href,
  text,
  showIcon,
  className,
  variant = "primary",
}: Readonly<LinkButtonProps>) {
  const isInternal = href.startsWith("/");
  const isMinimal = variant === "minimal";

  if (isMinimal) {
    return (
      <a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        aria-label={text}
        className={clsx(
          "group inline-flex items-center gap-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:text-gray-600",
          className
        )}
      >
        <span>{text}</span>
        <svg
          className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      aria-label={text}
      className={clsx(
        "inline-flex items-center w-fit text-sm font-medium rounded-lg px-4 py-2 shadow transition-all duration-300 ease-in-out lg:text-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-c-dark focus-visible:outline",
        className
      )}
    >
      <span>{text}</span>
      {showIcon && (
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
    </a>
  );
}
