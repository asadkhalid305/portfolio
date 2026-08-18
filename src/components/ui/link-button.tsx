import { LinkButtonProps } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";
import { interactionStyles } from "@/constants/interaction-styles";
import DirectionalArrow from "@/components/ui/directional-arrow";

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

  const content = (
    <>
      {showIcon && iconPosition === "left" && (
        <DirectionalArrow
          direction={arrowDirection}
        />
      )}
      <span>{text}</span>
      {showIcon && iconPosition === "right" && (
        <DirectionalArrow
          direction={arrowDirection}
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
