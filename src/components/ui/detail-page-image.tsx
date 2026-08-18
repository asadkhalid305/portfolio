import Image from "next/image";
import { Lens } from "@/components/ui/lens";

interface DetailPageImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  layout?: "square" | "video";
}

export default function DetailPageImage({
  src,
  alt,
  priority = true,
  className = "",
  layout = "video",
}: Readonly<DetailPageImageProps>) {
  const sizes =
    "(max-width: 768px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 4rem), 896px";

  return (
    <Lens
      ariaLabel={`Zoom into ${alt}`}
      className={`group mb-12 w-full rounded-2xl border border-gray-200 shadow-2xl dark:border-gray-800 ${
        layout === "square" ? "aspect-square" : "aspect-video"
      } ${className}`}
      lensSize={180}
      zoomFactor={1.2}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Blurred background */}
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          className="object-cover blur-3xl scale-110 opacity-50 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70"
          aria-hidden="true"
          priority={priority}
        />

        {/* Main image */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-contain transition-transform duration-500 group-hover:scale-[1.01] ${
            layout === "square" ? "p-0" : "p-4"
          }`}
          priority={priority}
        />
      </div>
    </Lens>
  );
}
