import { contact } from "@/app/utils/constants";
import LinkedInBadge from "../general/linkedin-badge";
import DisplayInfo from "../general/display-info";

const { heading, description } = contact;

export default function Contact() {
  return (
    <div className="flex flex-col mt-20 py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingRight
          paddingTop
          paddingBottom
        />
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        {/* Todo: Enable ContactForm once email integration is complete */}
        {/* <ContactForm /> */}
        <LinkedInBadge />
      </div>
    </div>
  );
}
