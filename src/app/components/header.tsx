import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-c-gray overflow-x-hidden pb-10 pt-5">
      <nav className="flex justify-between items-center px-4 md:container md:mx-auto lg:px-36">
        <Image
          alt="brand logo"
          draggable="false"
          src="/logo.png"
          width="150"
          height="150"
        />
        <ul className="flex space-x-4 uppercase font-medium">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
