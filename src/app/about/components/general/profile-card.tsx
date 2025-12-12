import Image from "next/image";
import React from "react";
import LinkButton from "@/app/about/components/general/link-button";
import { socials } from "@/lib/constants";
import { ProfileCardProps } from "@/lib/utils/types";

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
      <div className="w-full max-w-sm bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg shadow transition-all duration-300 ease-in-out hover:shadow-2xl">
        <div className="w-full bg-c-dark px-4 py-3 flex items-center gap-2">
          <span className="text-c-light text-xl font-semibold tracking-tight">
            Linked
          </span>
          <span className="text-c-dark text-xl font-semibold bg-c-light px-1.5 rounded tracking-tight">
            in
          </span>
        </div>
        <div className="flex flex-col p-4">
          <div className="relative w-16 h-16 mb-2">
            <Image
              alt={"Personal photo of " + name}
              className="rounded-full"
              fill
              sizes="100px"
              src="/images/linkedin-profile.webp"
            />
          </div>
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="space-y-0.5 mt-1 mb-4 text-sm">
            <p className="font-normal">
              {role}@{company}
            </p>
            <p className="font-light">{position}</p>
          </div>
          <LinkButton
            className="bg-c-dark text-c-light border-2 border-c-dark rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-c-dark focus-visible:outline"
            href={href}
            showIcon={false}
            text="View LinkedIn profile"
          />
        </div>
      </div>
    </div>
  );
}
