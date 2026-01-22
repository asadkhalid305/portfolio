import Image from "next/image";
import Link from "next/link";
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
}: Readonly<VCardProps>) {
  const { src, alt } = getImageProps(image);

  // Common image component
  const imageComponent = (
    <div
      className={`relative overflow-hidden shadow-2xl ${
        horizontal
          ? "aspect-video rounded-2xl order-1 lg:order-2 h-fit self-center w-full"
          : "h-72 w-full rounded-t-2xl border-b border-white/10 dark:border-white/5"
      }`}
    >
      {/* Blurred background for fixing aspect ratio issues */}
      <Image
        src={src}
        alt=""
        fill
        className="object-cover blur-2xl scale-125 opacity-30 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-50"
        aria-hidden="true"
      />

      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain transition-transform duration-700 group-hover:scale-110 ${
          horizontal ? "p-2" : "p-6"
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
    <div className="flex flex-wrap gap-2 mb-4">
      {badges.map((badge, index) => (
        <Badge key={index} text={badge} variant="outline" className="bg-white/50 dark:bg-gray-800/50" />
      ))}
    </div>
  );

  // Common content component
  const contentComponent = (
    <div
      className={
        horizontal
          ? "flex flex-col justify-center space-y-6 order-2 lg:order-1"
          : "p-8 flex-1 flex flex-col justify-between"
      }
    >
      <div className="space-y-4">
        {badgesComponent}
        {date && (
          <p className="text-xs font-bold tracking-widest text-slate-400 dark:text-gray-500 uppercase">
            {date}
          </p>
        )}
        <h3
          className={`font-bold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-black dark:group-hover:text-slate-200 ${
            horizontal ? "text-3xl lg:text-4xl mt-1" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-slate-600 dark:text-gray-300 line-clamp-3 leading-relaxed ${
            horizontal ? "text-lg" : "text-[15px]"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="pt-8 flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
        {linkText}{" "}
        <div className="ml-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 transition-transform group-hover:translate-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );

  // Horizontal layout
  if (horizontal) {
    return (
      <Link
        href={link}
        className="group relative block rounded-3xl overflow-hidden border border-white/20 bg-white/40 backdrop-blur-md transition-all duration-500 hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-full dark:border-white/5 dark:bg-gray-900/40 dark:hover:bg-gray-900/60"
      >
        <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 h-full">
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
      className="group w-full max-w-sm mx-auto h-full border border-white/20 bg-white/40 backdrop-blur-md rounded-3xl shadow-lg flex flex-col transition-all duration-500 ease-in-out hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 dark:border-white/5 dark:bg-gray-900/40 dark:hover:bg-gray-900/60"
    >
      {imageComponent}
      {contentComponent}
    </Link>
  );
}
