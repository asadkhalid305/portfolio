import Image from "next/image";
import GeneralInfo from "./general-info";

const description =
  "Hi! My name is Asad Ullah Khalid. I am a senior software engineer and content creator.";
const heading = "About Me 👋";

export default function Intro() {
  return (
    <div className="flex flex-col items-center py-20 lg:flex-row lg:py-10">
      <div className="flex-1">
        <GeneralInfo description={description} heading={heading} />
      </div>
      <div className="flex-1 w-full">
        <Image
          alt="personal photo"
          className="w-full rounded-xl"
          draggable="false"
          src="/about-me.jpeg"
          width="550"
          height="550"
        />
      </div>
    </div>
  );
}
