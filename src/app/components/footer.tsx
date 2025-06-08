import Image from "next/image";
import Link from "next/link";
import { footer, socials } from "@/app/utils/constants";

const {
  linkedIn: { name: linkedInName, icon: linkedInIcon, href: linkedInHref },
  github: { name: githubName, icon: githubIcon, href: githubHref },
} = socials;

const { copyright } = footer;

export default function Footer() {
  return (
    <footer className="bg-c-dark text-c-light text-center py-10">
      <div className="flex flex-col justify-between items-center px-4 lg:max-w-7xl lg:mx-auto">
        <div className="space-x-1 text-xl">
          <span aria-hidden="true">&#169;</span>
          <span>{copyright}</span>
        </div>
        <nav aria-label="Social links">
          <ul className="flex space-x-4 pt-2">
            <li>
              <Link
                href={linkedInHref}
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={linkedInName + " icon"}
                  className="fill-c-light"
                  draggable="false"
                  src={linkedInIcon}
                  width={24}
                  height={24}
                />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href={githubHref}
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={githubName + " icon"}
                  className="fill-c-light"
                  draggable="false"
                  src={githubIcon}
                  width={24}
                  height={24}
                />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
