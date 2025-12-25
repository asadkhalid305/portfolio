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
      className={`relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-800 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
