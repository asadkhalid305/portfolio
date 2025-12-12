import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { footer, socials } from "@/lib/constants";

const {
  linkedIn: { name: linkedInName, href: linkedInHref },
  github: { name: githubName, href: githubHref },
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
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">{linkedInName}</span>
              </Link>
            </li>
            <li>
              <Link
                href={githubHref}
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">{githubName}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
