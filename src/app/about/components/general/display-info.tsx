import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  description: ReactNode;
  heading: string;
  centerHeading?: boolean;
  paddingRight?: boolean;
  paddingTop?: boolean;
};

export default function DisplayInfo({
  description = "",
  heading = "",
  centerHeading = false,
  paddingRight = false,
  paddingTop = false,
}: Props) {
  return (
    <div
      className={clsx("pb-16", {
        "lg:pr-10": paddingRight,
        "pt-16": paddingTop,
      })}
    >
      <h1
        className={clsx("text-4xl font-extrabold pb-6", {
          "text-center": centerHeading,
        })}
      >
        {heading}
      </h1>
      <p className="text-xl">{description}</p>
    </div>
  );
}
