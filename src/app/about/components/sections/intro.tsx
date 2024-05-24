import Image from "next/image";
import { intro, socials } from "@/app/utils/constants";

const { heading } = intro;
const {
  mercedesBenzIO: { href },
} = socials;

export default function Intro() {
  return (
    <div className="flex flex-col py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <div className="lg:pr-10 pb-16 pt-16">
          <h1 className="text-center text-5xl font-extrabold pb-6 lg:text-6xl lg:text-left">
            {heading}
          </h1>
          <p className="text-xl whitespace-pre-wrap leading-relaxed lg:text-2xl">
            Hey, I am <span className="font-bold">Asad Ullah</span>, a Senior
            Software Engineer at{" "}
            <a
              className="underline focus:decoration-none"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mercedes-Benz.io
            </a>{" "}
            in Germany. With 6+ years in the field, I have come a long way,
            learning, networking, and giving back to the community. As a{" "}
            <span className="font-bold">mentor and public speaker</span>, I have
            helped numerous students and professionals in their career journeys.
            <br />
            <br />
            If you are seeking guidance or interested in collaborating,{" "}
            <span className="font-bold">let&apos;s connect!</span>
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-96 h-96">
          <Image
            alt="personal photo"
            className="bg-c-dark rounded-full pt-2"
            draggable="false"
            fill
            priority
            sizes="100%"
            src="/images/myself.png"
          />
        </div>
      </div>
    </div>
  );
}
