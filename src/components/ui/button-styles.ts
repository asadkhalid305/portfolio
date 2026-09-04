import clsx from "clsx";
import { interactionStyles } from "@/constants/interaction-styles";
import type {
  ButtonRounded,
  ButtonSize,
  ButtonTone,
  ButtonVariant,
} from "@/utils/types";

type ButtonStyleOptions = {
  className?: string;
  element?: "button" | "link";
  rounded?: ButtonRounded;
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

export function buttonStyles({
  className,
  element = "link",
  rounded = "md",
  size = "md",
  tone = "dark",
  variant = "primary",
}: ButtonStyleOptions = {}) {
  const isMinimal = variant === "minimal";
  const minimalInteraction =
    element === "button"
      ? "enabled:hover:text-brand-blue-hover"
      : "hover:text-brand-blue-hover";
  const primaryInteraction =
    element === "button"
      ? "enabled:hover:-translate-y-0.5 enabled:hover:bg-brand-blue enabled:hover:text-white enabled:hover:shadow-xl enabled:active:translate-y-0 enabled:active:shadow-md"
      : "hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:shadow-xl active:translate-y-0 active:shadow-md";

  return clsx(
    "group inline-flex w-fit items-center justify-center font-semibold disabled:cursor-not-allowed disabled:opacity-70",
    interactionStyles.focusRing,
    isMinimal
      ? [
          "gap-2 rounded-sm text-lg text-c-dark transition-colors duration-200 ease-out",
          minimalInteraction,
        ]
      : [
          "gap-3 text-sm shadow-lg transition-[color,background-color,box-shadow,transform] duration-300 ease-out",
          primaryInteraction,
          rounded === "full"
            ? "rounded-full"
            : rounded === "xl"
              ? "rounded-xl"
              : "rounded-md",
          size === "sm"
            ? "px-4 py-2.5"
            : size === "lg"
              ? "px-6 py-4"
              : "px-6 py-3.5",
          tone === "light"
            ? "bg-c-light text-c-dark"
            : "bg-c-dark text-c-light",
        ],
    className
  );
}
