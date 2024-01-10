import { DisplayInfoProps } from "@/app/utils/types";
import clsx from "clsx";

export default function DisplayInfo({
  description = "",
  heading = "",
  centerHeading = false,
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
        className={clsx("text-5xl font-extrabold pb-6 lg:text-6xl", {
          "text-center": centerHeading,
        })}
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
