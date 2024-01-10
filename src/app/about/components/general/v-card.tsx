import Image from "next/image";
import LinkButton from "./link-button";
import ImageDefault from "public/default.jpeg";
import { CardProps } from "@/app/utils/types";

/*
 * Note: Even though TypeScript ensures that image is always defined according to the Props interface,
 * it's still possible to get a runtime error if image is undefined when the component is used.
 * Therefore, we use optional chaining (?.) to prevent trying to access properties of undefined.
 */
export default function VCard({
  title,
  description = "",
  image,
  link,
}: CardProps) {
  const src = image?.src || "";
  const alt = image?.alt || "";
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow flex flex-col">
      <Image
        alt={alt}
        className="rounded-t-lg h-96"
        draggable="false"
        src={src || ImageDefault}
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
