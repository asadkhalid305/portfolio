import Image from "next/image";
import React from "react";
import LinkButton from "./link-button";

export default function PCard() {
  return (
    <div className="w-full max-w-sm bg-white py-10 border border-gray-200 rounded-lg shadow hover:bg-c-semiDark hover:shadow-2xl">
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-12">
          <Image
            alt="personal image"
            className="mb-3"
            fill
            sizes="100px"
            src="icons/linkedin-wide.min.svg"
          />
        </div>
        <h5 className="mt-4 mb-1 text-2xl font-medium">Asad Ullah Khalid</h5>
        <span className="mb-4 text-md font-light">
          Senior Software Engineer
        </span>
        <LinkButton
          className="bg-blue-600 hover:bg-blue-700"
          href="https://www.linkedin.com/in/asadkhalid305"
          showIcon={false}
          text="Profile"
        />
      </div>
    </div>
  );
}
