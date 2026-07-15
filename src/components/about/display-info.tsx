import clsx from "clsx";
import DOMPurify from "isomorphic-dompurify";
import { DisplayInfoProps } from "@/utils/types";

export default function DisplayInfo({
  description = "",
  heading = "",
  label = "",
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
      {label && (
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
          {label}
        </span>
      )}
      <h2 className="max-w-4xl pb-6 text-left text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
        {heading}
      </h2>
      <p
        className="max-w-4xl whitespace-pre-wrap text-lg leading-8 text-gray-700 sm:text-xl sm:leading-9"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      ></p>
    </div>
  );
}
