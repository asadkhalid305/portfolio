import Image from "next/image";
import { Pin } from "lucide-react";
import { VCardProps } from "@/utils/types";
import { getImageProps } from "@/utils/image-helpers";
import { getShimmerDataUrl } from "@/utils/shimmer";
import Badge from "./badge";
import CardShell from "./card-shell";
import CardAction from "./card-action";
import { Lens } from "./lens";

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
  const isSquareImage = image.layout === "square";
  const imageSizes = horizontal
    ? "(max-width: 1024px) calc(100vw - 2.5rem), 50vw"
    : "(max-width: 768px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 384px";

  // Common image component
  const imageComponent = (
    <Lens
      ariaLabel={`Zoom into ${alt}`}
      className={
        horizontal
          ? isSquareImage
            ? "aspect-square order-1 w-full self-center rounded-xl lg:order-2 lg:max-w-[22rem] lg:justify-self-end"
            : "aspect-video order-1 h-fit w-full self-center rounded-xl lg:order-2"
          : "h-96 w-full rounded-t-2xl border-b border-gray-100 dark:border-gray-800"
      }
      focusable={false}
      lensSize={150}
      zoomFactor={1.18}
    >
      <div className="relative h-full w-full overflow-hidden bg-c-semidark">
      {/* Blurred background for fixing aspect ratio issues */}
      <Image
        src={src}
        alt=""
        fill
        sizes={imageSizes}
        className="object-cover blur-3xl scale-110 opacity-50 dark:opacity-40 transition-opacity duration-500 group-hover/card:opacity-70"
        aria-hidden="true"
      />

      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={imageSizes}
        className={`object-contain transition-transform duration-500 group-hover/card:scale-[1.01] ${
          isSquareImage ? "p-0" : "p-4"
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
    </Lens>
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
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
      <div className="pt-5">
        <CardAction text={linkText} />
      </div>
    </div>
  );

  // Horizontal layout
  if (horizontal) {
    return (
      <CardShell
        href={link}
        className="block h-full"
      >
        <div className="grid h-full gap-8 p-5 sm:p-7 lg:grid-cols-2 lg:p-8">
          {contentComponent}
          {imageComponent}
        </div>
      </CardShell>
    );
  }

  // Vertical layout
  return (
    <CardShell
      href={link}
      className="mx-auto flex h-full w-full max-w-sm flex-col"
    >
      {imageComponent}
      {contentComponent}
    </CardShell>
  );
}
