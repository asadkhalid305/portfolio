import Image from "next/image";
import React from "react";
import LinkButton from "./link-button";
import { socials } from "@/app/utils/constants";

const {
  linkedIn: { href },
} = socials;

export default function PCard() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 ease-in-out hover:shadow-2xl">
      <div className="w-full bg-gray-200 px-4 py-2">
        <div className="relative w-24 h-8">
          <Image
            alt="linkedin logo"
            fill
            sizes="100px"
            src="icons/linkedin-wide.min.svg"
          />
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="relative w-14 h-14 mb-2">
          <Image
            alt="personal image"
            className="bg-blue-700 rounded-full pt-2"
            fill
            sizes="100px"
            src="/images/myself.webp"
          />
        </div>
        <h5 className="text-lg font-medium">Asad Ullah Khalid</h5>
        <div className="mb-4 text-sm font-normal">
          <p>Senior Software Engineer @MB.io</p>
          <p>Fullstack Expertice with Focus on JavaScript</p>
        </div>
        <LinkButton
          className="bg-c-light text-blue-700 border border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-c-light"
          href={href}
          showIcon={false}
          text="View Profile"
        />
      </div>
    </div>
  );
}
