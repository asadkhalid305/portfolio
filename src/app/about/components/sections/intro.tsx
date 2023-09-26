import Image from "next/image";
import DisplayInfo from "../general/display-info";
import IntroPhoto from "public/about-me.jpeg";

const description =
  "Hi! My name is Asad Ullah Khalid. I am a senior software engineer and content creator.";
const heading = "About Me 👋";

export default function Intro() {
  return (
    <div className="flex flex-col py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingRight
          paddingTop
        />
      </div>
      <div className="flex-1 w-full">
        <Image
          alt="personal photo"
          className="w-full rounded-xl"
          draggable="false"
          src={IntroPhoto}
          width="550"
          height="550"
          priority
        />
      </div>
    </div>
  );
}
