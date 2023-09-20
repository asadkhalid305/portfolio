import Image from "next/image";
import GeneralInfo from "./general-info";
import ContactForm from "./contact-form";

const description =
  "If you want to connect with me for any purpose, write me a message and I will get back to you.";
const heading = "Contact Me 😊";

export default function Contact() {
  return (
    <div className="flex flex-col items-center py-20 lg:flex-row lg:py-10">
      <div className="flex-1">
        <GeneralInfo description={description} heading={heading} />
      </div>
      <div className="flex-1 w-full">
        <ContactForm />
      </div>
    </div>
  );
}
