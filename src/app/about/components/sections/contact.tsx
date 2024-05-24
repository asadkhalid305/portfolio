import { contact } from "@/app/utils/constants";
import DisplayInfo from "../general/display-info";
import PCard from "../general/p-card";

const { heading, description } = contact;

export default function Contact() {
  return (
    <div className="flex flex-col mt-20 py-20 lg:flex-row lg:py-36 lg:items-center">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingBottom
          paddingRight
          paddingTop
        />
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        {/* Todo: Enable ContactForm once email integration is complete */}
        {/* <ContactForm /> */}
        <PCard />
      </div>
    </div>
  );
}
