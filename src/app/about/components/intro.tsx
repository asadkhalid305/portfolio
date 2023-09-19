import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col items-center py-20 lg:flex-row lg:py-10">
      <div className="flex-1 lg:pr-20 max-lg:pb-20">
        <div className="text-4xl font-extrabold mb-6">About Me</div>
        <div className="text-xl">
          Hi 👋 My name is Asad Ullah Khalid. I am a senior software engineer
          and content creator.
        </div>
      </div>
      <div className="flex-1 text-center w-full">
        <Image
          className="w-full rounded-xl"
          src="/about-me.jpeg"
          width="550"
          height="550"
          alt="personal photo"
        />
      </div>
    </div>
  );
}
