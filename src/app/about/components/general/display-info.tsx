import clsx from "clsx";
import { DisplayInfoProps } from "@/app/utils/types";

export default function DisplayInfo({
  description = "",
  heading = "",
  paddingRight = false,
  paddingTop = false,
  paddingBottom = false,
  whitespacePreWrap = false,
}: DisplayInfoProps) {
  return (
    <div
      className={clsx({
        "lg:pr-10": paddingRight,
        "pb-16": paddingBottom,
        "pt-16": paddingTop,
      })}
    >
      <h1
        className={clsx(
          "text-center text-5xl font-extrabold pb-6 lg:text-6xl lg:text-left"
        )}
      >
        {heading}
      </h1>
      <p
        className={clsx("text-xl lg:text-2xl", {
          "whitespace-pre-wrap": whitespacePreWrap,
          "leading-normal": true,
        })}
      >
        {description}
      </p>
    </div>
  );
}
