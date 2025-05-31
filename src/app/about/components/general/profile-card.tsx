import Image from "next/image";
import React from "react";
import LinkButton from "./link-button";
import { socials } from "@/app/utils/constants";
import { ProfileCardProps } from "@/app/utils/types";

const {
  linkedIn: { href },
} = socials;

export default function ProfileCard({
  company,
  name,
  role,
  position,
}: Readonly<ProfileCardProps>) {
  return (
    <div className="flex-1 flex justify-center lg:justify-end">
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
          <div className="relative w-16 h-16 mb-2">
            <Image
              alt="personal photo"
              className="rounded-full"
              fill
              sizes="100px"
              src="/images/linkedin-profile.webp"
            />
          </div>
          <h5 className="text-lg font-medium">{name}</h5>
          <div className="space-y-0.5 mt-1 mb-4 text-sm">
            <p className="font-normal">
              {role}@{company}
            </p>
            <p className="font-light">{position}</p>
          </div>
          <LinkButton
            className="bg-c-light text-[#0A66C2] border-2 border-blue-700 rounded-full hover:bg-[#0A66C2] hover:text-c-light"
            href={href}
            showIcon={false}
            text="View Profile"
          />
        </div>
      </div>
    </div>
  );
}
