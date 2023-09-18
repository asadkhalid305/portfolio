import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6 text-xl bg-slate-100">
      <nav className="px-4 md:px-60 md:container md:mx-auto flex justify-between items-center">
        <div className="text-3xl">
          <Image src="/logo.png" width="120" height="120" alt="brand logo" />
        </div>
        <ul className="flex space-x-4">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
