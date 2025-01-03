import Image from "next/image";
import { intro, socials } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";

const { heading, description } = intro;
const {
  mercedesBenzIO: { href },
} = socials;

export default function Intro() {
  return (
    <div className="flex flex-col h-full py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <div className="lg:pr-10">
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
            sizes="100%"
            src="/images/myself.webp"
          />
        </div>
      </div>
    </div>
  );
}
