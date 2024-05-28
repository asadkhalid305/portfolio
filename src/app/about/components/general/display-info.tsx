import clsx from "clsx";
import { DisplayInfoProps } from "@/app/utils/types";

export default function DisplayInfo({
  description = "",
  heading = "",
  paddingRight = false,
  paddingTop = false,
  paddingBottom = false,
}: DisplayInfoProps) {
  return (
    <div
      className={clsx({
        "pb-16": paddingBottom,
        "pt-16": paddingTop,
        "lg:pr-10": paddingRight,
      })}
    >
      <h1 className="text-center text-5xl font-extrabold pb-6 lg:text-6xl lg:text-left">
        {heading}
      </h1>
      <p
        className="whitespace-pre-wrap leading-relaxed text-xl lg:text-2xl lg:leading-9"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
}
