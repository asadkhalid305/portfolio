import { LinkButtonProps } from "@/lib/utils/types";
import clsx from "clsx";

export default function LinkButton({
  href,
  text,
  showIcon,
  className,
}: Readonly<LinkButtonProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className={clsx(
        "inline-flex items-center w-fit text-sm font-medium rounded-lg px-5 py-3 shadow transition-all duration-300 ease-in-out lg:text-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-c-dark focus-visible:outline",
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
