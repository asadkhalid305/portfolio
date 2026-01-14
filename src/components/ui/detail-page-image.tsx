import Image from "next/image";

interface DetailPageImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function DetailPageImage({
  src,
  alt,
  priority = true,
  className = "",
}: Readonly<DetailPageImageProps>) {
  return (
    <div
      className={`group relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-800 ${className}`}
    >
      {/* Blurred background */}
      <Image
        src={src}
        alt=""
        fill
        className="object-cover blur-3xl scale-110 opacity-50 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        aria-hidden="true"
        priority={priority}
      />

      {/* Main image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.01]"
        priority={priority}
      />
    </div>
  );
}
