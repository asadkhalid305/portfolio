import Image from "next/image";
import aboutData from "@/constants/about.json";
import socialsData from "@/constants/socials.json";
import DisplayInfo from "@/components/about/display-info";
import { getShimmerDataUrl } from "@/utils/shimmer";

const { heading, description, personalPhoto } = aboutData;
const {
  mercedesBenzIO: { href },
} = socialsData;

export default function About() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] justify-center lg:flex-row lg:items-center">
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
            blurDataURL={getShimmerDataUrl(500, 500)}
          />
        </div>
      </div>
    </div>
  );
}
