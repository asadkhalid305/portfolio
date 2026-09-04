import clsx from "clsx";
import DirectionalArrow from "@/components/ui/directional-arrow";
import { interactionStyles } from "@/constants/interaction-styles";
import type { ArrowDirection } from "@/utils/types";

type CardActionProps = {
  direction?: ArrowDirection;
  featured?: boolean;
  href?: string;
  size?: "sm" | "md";
  text: string;
  underlined?: boolean;
};

export default function CardAction({
  direction = "right",
  featured = false,
  href,
  size = "md",
  text,
  underlined = false,
}: Readonly<CardActionProps>) {
  const classes = clsx(
    "group inline-flex w-fit items-center gap-2 rounded-sm font-bold transition-colors duration-200 ease-out",
    size === "sm" ? "text-sm" : "text-base",
    featured
      ? "text-white group-hover/card:text-blue-200 hover:text-blue-200"
      : "text-c-dark group-hover/card:text-brand-blue-hover hover:text-brand-blue-hover dark:text-white",
    underlined &&
      (featured
        ? "underline decoration-2 decoration-blue-300 underline-offset-4"
        : "underline decoration-2 decoration-brand-blue underline-offset-4"),
    href && interactionStyles.focusRing
  );

  const content = (
    <>
      <span>{text}</span>
      <DirectionalArrow direction={direction} hoverGroup="card" />
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <span className={classes}>{content}</span>;
}
