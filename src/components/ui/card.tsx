import Image from "next/image";
import Link from "next/link";
import { Pin } from "lucide-react";
import { VCardProps } from "@/utils/types";
import { getImageProps } from "@/utils/image-helpers";
import { getShimmerDataUrl } from "@/utils/shimmer";
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
  pinned = false,
}: Readonly<VCardProps>) {
  const { src, alt } = getImageProps(image);

  // Common image component
  const imageComponent = (
    <div
      className={`relative overflow-hidden shadow-lg ${
        horizontal
          ? "aspect-video rounded-lg order-1 lg:order-2 h-fit self-center w-full"
          : "h-96 w-full rounded-t-lg border-b border-gray-100 dark:border-gray-800"
      }`}
    >
      {/* Blurred background for fixing aspect ratio issues */}
      <Image
        src={src}
        alt=""
        fill
        className="object-cover blur-3xl scale-110 opacity-50 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        aria-hidden="true"
      />

      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.01]"
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

  // Pinned Indicator
  const pinnedComponent = pinned && (
    <div className="flex items-center gap-2 mb-3 text-primary dark:text-primary-400 font-medium">
      <Pin className="w-4 h-4 fill-current" />
      <span className="text-sm uppercase tracking-wide">Pinned Project</span>
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
        {pinnedComponent}
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
        className="group relative block rounded-lg  overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:bg-c-semidark hover:shadow-2xl h-full"
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
      className="group w-full max-w-sm mx-auto h-full border border-gray-200 dark:border-gray-800 rounded-lg shadow flex flex-col transition-all duration-300 ease-in-out hover:bg-c-semidark hover:shadow-2xl"
    >
      {imageComponent}
      {contentComponent}
    </Link>
  );
}
