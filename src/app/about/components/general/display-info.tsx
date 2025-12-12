import clsx from "clsx";
import DOMPurify from "isomorphic-dompurify";
import { DisplayInfoProps } from "@/lib/utils/types";

export default function DisplayInfo({
  description = "",
  heading = "",
  paddingRight = false,
  paddingTop = false,
  paddingBottom = false,
}: Readonly<DisplayInfoProps>) {
  // Sanitize HTML to prevent XSS attacks
  const sanitizedDescription = DOMPurify.sanitize(description, {
    ALLOWED_TAGS: ["span", "a", "br", "strong", "em"],
    ALLOWED_ATTR: ["class", "href", "target", "rel"],
  });

  return (
    <div
      className={clsx({
        "pb-16": paddingBottom,
        "pt-16": paddingTop,
        "lg:pr-10": paddingRight,
      })}
    >
      <h2 className="text-center text-5xl font-extrabold pb-6 lg:text-6xl lg:text-left">
        {heading}
      </h2>
      <p
        className="whitespace-pre-wrap leading-relaxed text-xl lg:text-2xl lg:leading-9"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      ></p>
    </div>
  );
}
