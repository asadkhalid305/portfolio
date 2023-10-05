import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-c-semiDark overflow-x-hidden py-5">
      <nav className="flex justify-between items-center px-4 lg:max-w-7xl lg:mx-auto">
        <Image
          alt="brand logo"
          draggable="false"
          src="/logo.png"
          width="120"
          height="120"
        />
        <ul className="flex space-x-4 uppercase font-medium text-xl">
          <li className="transition ease-in hover:border-b-4 border-c-dark">
            About
          </li>
          <li className="hover:border-b-4 border-c-dark">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
