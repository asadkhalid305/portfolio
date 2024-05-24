import clsx from "clsx";
import { HeaderLinksProps } from "../utils/types";
import { socials } from "../utils/constants";
import LinkButton from "../about/components/general/link-button";

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
      <LinkButton
        href={href}
        text="Book 1:1 Session"
        showIcon={false}
        className="outline outline-2 transition-all duration-300 ease-in-out bg-c-dark hover:bg-c-light hover:text-c-dark focus:outline-none"
      />
    </ul>
  );
}
