import Image from "next/image";
import DisplayInfo from "../general/display-info";
import IntroImage from "public/images/myself.png";
import { intro } from "@/app/utils/constants";

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
        <Image
          alt="personal photo"
          className="bg-c-dark rounded-full pt-2"
          draggable="false"
          src={IntroImage}
          width="394"
          height="399"
          priority
        />
      </div>
    </div>
  );
}
