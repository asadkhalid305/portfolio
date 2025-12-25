import Image from "next/image";
import Link from "next/link";
import { VCardProps } from "@/lib/utils/types";
import { getImageProps } from "@/lib/utils/image-helpers";
import { getShimmerDataUrl } from "@/lib/utils/shimmer";
import Badge from "./badge";

export default function Card({
  title,
  description = "",
  image,
  link,
  date,
  horizontal = false,
  badges = [],
  linkText = "Read more",
}: Readonly<VCardProps>) {
  const { src, alt } = getImageProps(image);

  // Common image component
  const imageComponent = (
    <div
      className={`relative overflow-hidden shadow-lg ${
        horizontal
          ? "aspect-video rounded-lg order-1 lg:order-2 h-fit self-center w-full"
          : "h-96 w-full rounded-t-lg"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
          horizontal ? "" : "object-top bg-c-light"
        }`}
        placeholder="blur"
        blurDataURL={getShimmerDataUrl(
          horizontal ? 640 : 384,
          horizontal ? 360 : 384
        )}
        loading="lazy"
        draggable="false"
      />
    </div>
  );

  // Common badges component
  const badgesComponent = badges.length > 0 && (
    <div className="flex flex-wrap gap-2 mb-3">
      {badges.map((badge, index) => (
        <Badge key={index} text={badge} />
      ))}
    </div>
  );

  // Common content component
  const contentComponent = (
    <div
      className={
        horizontal
          ? "flex flex-col justify-center space-y-5 order-2 lg:order-1"
          : "p-6 flex-1 flex flex-col justify-between"
      }
    >
      <div className="space-y-3">
        {badgesComponent}
        {date && (
          <p className="text-sm font-light italic text-gray-500 dark:text-gray-400">
            {date}
          </p>
        )}
        <h3
          className={`font-bold tracking-tight ${
            horizontal ? "text-2xl lg:text-3xl mt-1" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`line-clamp-3 ${
            horizontal ? "leading-relaxed text-base" : "font-normal"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="pt-5 flex items-center text-base font-semibold">
        {linkText}{" "}
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </div>
  );

  // Horizontal layout
  if (horizontal) {
    return (
      <Link
        href={link}
        className="group relative block rounded-lg bg-c-semidark overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl h-full"
      >
        <div className="grid lg:grid-cols-2 gap-6 p-6 lg:p-8 h-full">
          {contentComponent}
          {imageComponent}
        </div>
      </Link>
    );
  }

  // Vertical layout
  return (
    <Link
      href={link}
      className="group w-full max-w-sm h-full border border-gray-200 dark:border-gray-800 rounded-lg shadow flex flex-col transition-all duration-300 ease-in-out bg-c-semidark hover:shadow-2xl"
    >
      {imageComponent}
      {contentComponent}
    </Link>
  );
}
