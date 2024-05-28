import Image from "next/image";
import Link from "next/link";
import { footer, socials } from "../utils/constants";

const {
  linkedIn: { name: linkedInName, icon: linkedInIcon, href: linkedInHref },
  github: { name: githubNamem, icon: githubIcon, href: githubHref },
} = socials;

const { copyright } = footer;

export default function Footer() {
  return (
    <footer className="bg-c-dark text-c-light text-center py-10">
      <div className="flex flex-col justify-between items-center px-4 lg:max-w-7xl lg:mx-auto">
        <div className="space-x-1 text-xl">
          <span>&#169;</span>
          <span>{copyright}</span>
        </div>
        <ul className="flex space-x-4 pt-2">
          <li>
            <Link href={linkedInHref}>
              <Image
                alt={linkedInName}
                className="fill-c-light"
                draggable="false"
                src={linkedInIcon}
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href={githubHref}>
              <Image
                alt={githubNamem}
                className="fill-c-light"
                draggable="false"
                src={githubIcon}
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
