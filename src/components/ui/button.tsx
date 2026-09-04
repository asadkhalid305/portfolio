import type { ButtonHTMLAttributes } from "react";
import { buttonStyles } from "@/components/ui/button-styles";
import type {
  ButtonRounded,
  ButtonSize,
  ButtonTone,
  ButtonVariant,
} from "@/utils/types";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  rounded?: ButtonRounded;
  size?: ButtonSize;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

export default function Button({
  children,
  className,
  rounded = "md",
  size = "md",
  tone = "dark",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({
        className,
        element: "button",
        rounded,
        size,
        tone,
        variant,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
