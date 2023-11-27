import DisplayInfo from "../general/display-info";
import ContactForm from "../general/contact-form";

const description = `Your thoughts and questions are always welcome here so do not hesitate to drop me a message if you need assistance or have something to talk about.`;
const heading = `Let's Connect`;

export default function Contact() {
  return (
    <div className="flex flex-col mt-20 py-20 lg:flex-row lg:py-36 lg:mt-36 lg:items-center">
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
