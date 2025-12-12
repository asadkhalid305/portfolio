import Image from "next/image";
import { TCardProps } from "@/lib/utils/types";
import Tooltip from "@/app/about/components/general/tooltip";
import { getImageProps } from "@/lib/utils/image-helpers";

export default function TCard({ text, author }: Readonly<TCardProps>) {
  const { name, image, job, link } = author ?? {};
  const { src, alt } = getImageProps(image);
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-c-light border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e transition-all duration-300 ease-in-out hover:bg-c-semidark hover:shadow-2xl">
      <blockquote className="max-w-xl mx-auto mb-4 text-c-dark cursor-pointer lg:mb-8">
        <Tooltip text={text}>
          <p className="my-4 text-md font-normal line-clamp-3">{text}</p>
        </Tooltip>
      </blockquote>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Testimonial by ${name}`}
        className="focus-visible:outline-2 focus-visible:outline-c-dark focus-visible:outline"
      >
        <figcaption className="flex items-center justify-center">
          <Image
            className="w-9 h-9 rounded-full"
            width={200}
            height={200}
            src={src}
            alt={alt ?? `Photo of ${name}`}
          />
          <div className="ms-3 space-y-0.5 text-left rtl:text-right font-medium">
            <div className="text-md font-medium">{name}</div>
            <div className="text-sm font-light">{job}</div>
          </div>
        </figcaption>
      </a>
    </figure>
  );
}
