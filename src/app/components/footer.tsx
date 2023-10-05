import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-c-dark text-c-light text-center py-10">
      <div className="flex flex-col justify-between items-center px-4 md:flex-row lg:max-w-7xl lg:mx-auto">
        <div className="space-x-1 text-xl">
          <span>&#169;</span>
          <span>2023 Asad Ullah Khalid. All rights reserved.</span>
        </div>
        <ul className="flex space-x-4 max-md:pt-2">
          <li>
            <Link href="https://www.linkedin.com/in/asadkhalid305">
              <Image
                alt="LinkedIn URI"
                className="fill-c-light"
                draggable="false"
                src="/icons/linkedin.min.svg"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/asadkhalid305/">
              <Image
                alt="GitHub URI"
                className="fill-c-light"
                draggable="false"
                src="/icons/github.min.svg"
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
