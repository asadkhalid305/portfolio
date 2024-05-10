import Image from "next/image";
import ImageDefault from "public/images/default.jpeg";
import { TCardProps } from "@/app/utils/types";

export default function TCard({ text, author }: TCardProps) {
  const {
    name,
    image: { src = ImageDefault, alt = "" } = {},
    job,
    link,
  } = author || {};
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
      <blockquote className="max-w-xl mx-auto mb-4 text-gray-500 lg:mb-8">
        <p className="my-4 line-clamp-3">{text}</p>
      </blockquote>
      <a href={link} target="_blank">
        <figcaption className="flex items-center justify-center ">
          <Image className="rounded-full w-9 h-9" src={src} alt={alt} />
          <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
            <div>{name}</div>
            <div className="text-sm text-gray-500">{job}</div>
          </div>
        </figcaption>
      </a>
    </figure>
  );
}
