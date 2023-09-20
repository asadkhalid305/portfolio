import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col items-center py-20 lg:flex-row lg:py-10">
      <div className="flex-1">
        <div className="max-lg:pb-20 lg:pr-20">
          <div className="text-4xl font-extrabold mb-6">About Me 👋</div>
          <div className="text-xl">
            Hi! My name is Asad Ullah Khalid. I am a senior software engineer
            and content creator.
          </div>
        </div>
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
