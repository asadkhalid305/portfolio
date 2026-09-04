import { LinkButtonProps } from "@/utils/types";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/button-styles";
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

  const commonClasses = buttonStyles({
    className,
    rounded,
    size,
    tone,
    variant,
  });

  if (isInternal) {
    return (
      <Link
        href={href}
        aria-label={text}
        className={commonClasses}
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
      className={commonClasses}
    >
      {content}
    </a>
  );
}
