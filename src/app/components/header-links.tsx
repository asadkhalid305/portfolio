import clsx from "clsx";
import { HeaderLinksProps } from "../utils/types";
import { socials } from "../utils/constants";

const {
  topmateIO: { href },
} = socials;

export default function HeaderLinks({ links }: HeaderLinksProps) {
  return (
    <ul className="space-x-2 text-md font-medium md:flex lg:text-lg">
      {/* <div className="hidden md:show md:flex">
        {links.map((link) => (
          <li
            key={link.href}
            className="p-2 px-3 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-300"
          >
            <Link href={`/${link.href}`}>{link.name}</Link>
          </li>
        ))}
      </div> */}
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className={clsx(
            "p-1.5 px-3 font-semibold outline outline-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-300"
          )}
        >
          Book 1:1 Session
        </button>
      </a>
    </ul>
  );
}
