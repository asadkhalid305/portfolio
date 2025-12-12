import Image from "next/image";
import { intro, socials } from "@/lib/constants";
import DisplayInfo from "@/app/about/components/general/display-info";

const { heading, description } = intro;
const {
  mercedesBenzIO: { href },
} = socials;

export default function Intro() {
  return (
    <div className="flex flex-col h-full py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <div className="lg:pr-10 pb-16 lg:pb-0">
          <DisplayInfo description={description} heading={heading} />
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
          <Image
            alt="personal photo"
            className="object-cover rounded-full"
            draggable="false"
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 400px, 500px"
            src="/images/myself.webp"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </div>
  );
}
