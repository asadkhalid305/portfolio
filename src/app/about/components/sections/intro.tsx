import Image from "next/image";
import { intro } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";

const { heading, description } = intro;

export default function Intro() {
  return (
    <div className="flex flex-col py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingRight
          paddingTop
          paddingBottom
        />
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative h-96 w-96">
          <Image
            alt="personal photo"
            className="bg-c-dark rounded-full pt-2"
            draggable="false"
            fill={true}
            priority
            src="/images/myself.png"
          />
        </div>
      </div>
    </div>
  );
}
