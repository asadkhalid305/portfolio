import Image from "next/image";
import { TCardProps } from "@/utils/types";
import { getImageProps } from "@/utils/image-helpers";

export default function TCard({ text, author, source = "LinkedIn", rating, expanded = false }: Readonly<TCardProps>) {
  const { name, image, job, link } = author ?? {};
  const { src, alt } = getImageProps(image);

  // Helper to render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-3 w-3 ${i < rating ? "text-yellow-500" : "text-gray-200 dark:text-gray-700"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/40 backdrop-blur-md p-6 shadow-lg transition-all duration-500 hover:bg-white/60 hover:shadow-2xl hover:-translate-y-1 dark:border-white/5 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 relative">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <svg
            className="h-8 w-8 text-slate-300 dark:text-gray-600 opacity-50 transition-colors group-hover:text-slate-400 dark:group-hover:text-gray-500"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <div className="flex flex-col items-end gap-1.5">
             <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm ${source === "Topmate.io" ? "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300" : "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"}`}>
              {source}
            </span>
            {rating && renderStars(rating)}
          </div>
        </div>
        <p className={`mb-6 text-[15px] font-medium leading-relaxed text-slate-600 dark:text-gray-300 ${!expanded ? "line-clamp-4" : ""}`}>
          {text}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-c-dark"
        aria-label={`View ${name}'s ${source} profile`}
      >
        <Image
          className="h-10 w-10 rounded-full object-cover grayscale ring-2 ring-white dark:ring-gray-800 transition-all duration-300 group-hover:grayscale-0 group-hover:ring-slate-200 dark:group-hover:ring-gray-600"
          width={40}
          height={40}
          src={src}
          alt={alt ?? `Photo of ${name}`}
          loading="lazy"
        />
        <div className="flex flex-col">
          <div className="text-sm font-bold text-slate-900 dark:text-white transition-colors group-hover:text-black dark:group-hover:text-slate-200">{name}</div>
          <div className="text-xs font-medium text-slate-500 dark:text-gray-400">{job}</div>
        </div>
      </a>
    </div>
  );
}
