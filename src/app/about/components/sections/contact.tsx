import Image from "next/image";
import DisplayInfo from "../general/display-info";
import ContactForm from "../general/contact-form";

const description =
  "If you want to connect with me for any purpose, write me a message and I will get back to you.";
const heading = "Contact Me 😊";

export default function Contact() {
  return (
    <div className="flex flex-col items-center py-20 lg:flex-row lg:py-36">
      <div className="flex-1">
        <DisplayInfo
          description={description}
          heading={heading}
          paddingRight
          paddingTop
        />
      </div>
      <div className="flex-1 w-full">
        <ContactForm />
      </div>
    </div>
  );
}
