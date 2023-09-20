import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 bg-black text-white text-center">
      <div className="px-4 flex flex-col justify-between items-center md:flex-row md:container md:mx-auto lg:px-60">
        <div className="space-x-1">
          <span>&#169;</span>
          <span>2023 Asad Ullah Khalid. All rights reserved.</span>
        </div>
        <ul className="flex space-x-4 max-md:pt-2">
          <li>
            <Link href="https://www.linkedin.com/in/asadkhalid305">
              <Image
                src="/icons/linkedin.min.svg"
                alt="LinkedIn URI"
                draggable="false"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/asadkhalid305/">
              <Image
                className="fill-white"
                src="/icons/github.min.svg"
                alt="GitHub URI"
                draggable="false"
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
