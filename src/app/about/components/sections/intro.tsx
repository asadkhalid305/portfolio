import Image from "next/image";
import DisplayInfo from "../general/display-info";
import IntroPhoto from "public/myself.png";


const description =
  "Hey! My name is Asad Ullah Khalid, I am a Senior Software Engineer who is enthusiastic about JavaScript. Also, I am passionate about creating content to help people navigate their career effectively.";
const heading = "About Me";

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
      <div className="flex-1 flex justify-center">
        <Image
          alt="personal photo"
          draggable="false"
          src={IntroPhoto}
          width="450"
          height="450"
          priority
        />
      </div>
    </div>
  );
}
