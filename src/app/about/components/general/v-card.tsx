import Image from "next/image";
import { VCardProps } from "@/app/utils/types";
import LinkButton from "./link-button";

export default function VCard({
  title,
  description = "",
  image,
  link,
  date,
}: VCardProps) {
  const { src = "/images/default.webp", alt = "" } = image || {};
  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow flex flex-col transition-all duration-300 ease-in-out hover:bg-c-semidark hover:shadow-2xl">
      <div className="relative h-96 w-full">
        <Image
          alt={alt}
          className="rounded-t-lg object-cover object-top bg-c-light"
          draggable="false"
          fill
          sizes="100%"
          src={src}
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="mb-2 text-sm font-light italic">{date}</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <p className="mb-3 font-normal">{description}</p>
        </div>
        <LinkButton
          className="text-c-light bg-c-dark hover:bg-gray-800"
          href={link}
          showIcon
          text="Read more"
        />
      </div>
    </div>
  );
}
