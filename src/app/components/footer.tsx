export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="px-4 md:px-60 md:container md:mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-1">
          <span>&#169;</span>
          <span>2023 Asad Ullah Khalid. All rights reserved.</span>
        </div>
        <ul className="flex space-x-4">
          <li>LinkedIn</li>
          <li>X Page</li>
        </ul>
      </div>
    </footer>
  );
}
