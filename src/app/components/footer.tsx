import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10">
      <div className="flex flex-col justify-between items-center px-4 md:flex-row lg:max-w-5xl lg:mx-auto">
        <div className="space-x-1">
          <span>&#169;</span>
          <span>2023 Asad Ullah Khalid. All rights reserved.</span>
        </div>
        <ul className="flex space-x-4 max-md:pt-2">
          <li>
            <Link href="https://www.linkedin.com/in/asadkhalid305">
              <Image
                alt="LinkedIn URI"
                className="fill-white"
                draggable="false"
                src="/icons/linkedin.min.svg"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/asadkhalid305/">
              <Image
                alt="GitHub URI"
                className="fill-white"
                draggable="false"
                src="/icons/github.min.svg"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
