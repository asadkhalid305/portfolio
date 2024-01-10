import DisplayInfo from "../general/display-info";
import ContactForm from "../general/contact-form";
import {
  contactHeading as heading,
  contactDescription as description,
} from "@/app/utils/constants";

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
      <div className="flex-1 w-full">
        <ContactForm />
      </div>
    </div>
  );
}
