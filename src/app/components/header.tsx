import Image from "next/image";

export default function Header() {
  return (
    <header className="py-10 bg-c-light-grey overflow-x-hidden">
      <nav className="px-4 flex justify-between items-center md:container md:mx-auto lg:px-60">
        <Image src="/logo.png" width="150" height="150" alt="brand logo" />
        <ul className="flex space-x-4 uppercase">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
