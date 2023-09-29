import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  description: ReactNode;
  heading: string;
  centerHeading?: boolean;
  paddingRight?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  whitespacePreWrap?: boolean;
};

export default function DisplayInfo({
  description = "",
  heading = "",
  centerHeading = false,
  paddingRight = false,
  paddingTop = false,
  paddingBottom = false,
  whitespacePreWrap = false,
}: Props) {
  return (
    <div
      className={clsx({
        "lg:pr-10": paddingRight,
        "pb-16": paddingBottom,
        "pt-16": paddingTop,
      })}
    >
      <h1
        className={clsx("text-6xl font-extrabold pb-6", {
          "text-center": centerHeading,
        })}
      >
        {heading}
      </h1>
      <p
        className={clsx("text-2xl", {
          "whitespace-pre-wrap": whitespacePreWrap,
        })}
      >
        {description}
      </p>
    </div>
  );
}
