import { HeaderLinksProps } from "../../utils/types";
import { socials } from "../../utils/constants";
import LinkButton from "../../about/components/general/link-button";

const {
  topmateIO: { href },
} = socials;

export default function HeaderLinks({ links }: HeaderLinksProps) {
  return (
    <ul className="space-x-2 text-md font-medium md:flex lg:text-lg">
      {/* BugFix: There's an issue with Link that when you click an item, it doesn't navigate UI to the corresponding anchor element. 
      This problem only occurs in the Production environment, while it works as expected in the Development environment. 
      Hence, links can be used again once the issue is resolved */}
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
        className="outline outline-2 transition-all duration-300 ease-in-out bg-c-dark text-c-light hover:bg-c-light hover:text-c-dark focus:outline-none"
        href={href}
        showIcon={false}
        text="Book 1:1 Session"
      />
    </ul>
  );
}
