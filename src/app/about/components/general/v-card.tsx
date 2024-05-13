import Image from "next/image";
import { VCardProps } from "@/app/utils/types";
import LinkButton from "./link-button";

export default function VCard({
  title,
  description = "",
  image,
  link,
}: VCardProps) {
  const { src = "/images/default.jpeg", alt = "" } = image || {};
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow flex flex-col">
      <Image
        alt={alt}
        className="rounded-t-lg h-96"
        draggable="false"
        width={1000}
        height={1000}
        src={src}
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <p className="mb-3 font-normal ">{description}</p>
        </div>
        <LinkButton href={link} text="Read more" />
      </div>
    </div>
  );
}
