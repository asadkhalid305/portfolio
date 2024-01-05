import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-c-semiDark py-5">
      <nav className="flex justify-between items-center px-4 lg:max-w-7xl lg:mx-auto">
        <Image
          alt="brand logo"
          draggable="false"
          src="/logo.png"
          width="144"
          height="28"
        />
        <ul className="hidden space-x-4 uppercase font-medium text-xl md:show md:flex">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
