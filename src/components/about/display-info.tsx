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
  center = false,
}: Readonly<DisplayInfoProps & { center?: boolean }>) {
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
        "text-center flex flex-col items-center": center,
        "text-left items-start": !center,
      })}
    >
      {label && (
        <span className="block text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-4xl font-extrabold pb-8 lg:text-5xl leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-slate-600 to-gray-900 animate-gradient-x dark:from-white dark:via-slate-300 dark:to-white">
          {heading}
        </span>
      </h2>
      <p
        className={clsx(
          "whitespace-pre-wrap leading-relaxed text-lg lg:text-xl lg:leading-8 text-gray-600 dark:text-gray-300",
          { "max-w-3xl": center }
        )}
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      ></p>
    </div>
  );
}
