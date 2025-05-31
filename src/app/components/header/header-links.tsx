import { HeaderLinksProps } from "../../utils/types";
import { socials } from "../../utils/constants";
import LinkButton from "../../about/components/general/link-button";
import Link from "next/link";

const {
  topmateIO: { href },
} = socials;

export default function HeaderLinks({ links }: Readonly<HeaderLinksProps>) {
  return (
    <ul className="space-x-2 text-md font-medium md:flex lg:text-lg">
      {links.map((link) => (
        <li
          key={link.href}
          className="p-2 px-3 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-300"
        >
          {link.href.startsWith("#") ? (
            <a href={link.href}>{link.name}</a>
          ) : (
            <Link href={link.href} legacyBehavior passHref>
              <a href={link.href}>{link.name}</a>
            </Link>
          )}
        </li>
      ))}
      <LinkButton
        className="outline outline-2 transition-all duration-300 ease-in-out bg-c-dark text-c-light hover:bg-c-light hover:text-c-dark focus:outline-none"
        href={href}
        showIcon={false}
        text="Book 1:1 Session"
      />
    </ul>
  );
}
