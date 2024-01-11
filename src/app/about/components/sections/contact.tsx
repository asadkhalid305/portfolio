import DisplayInfo from "../general/display-info";

import {
  contactHeading as heading,
  contactDescription as description,
} from "@/app/utils/constants";
import LinkedInBadge from "../general/linkedin-badge";

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
      <div className="flex-1 flex justify-center">
        {/* Todo: Enable ContactForm once email integration is complete */}
        {/* <ContactForm /> */}
        <LinkedInBadge />
      </div>
    </div>
  );
}
