import Image from "next/image";
import IconName from "public/icons/name.png";
import IconEmail from "public/icons/email.png";
import IconMessage from "public/icons/message.png";

export default function ContactForm() {
  return (
    <form>
      <div className="pb-4">
        <div className="relative">
          <input
            className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-black"
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
            <Image
              alt="name icon"
              className="w-full rounded-xl"
              draggable="false"
              src={IconName}
              width="32"
              height="32"
            />
          </span>
        </div>
      </div>
      <div className="pb-4">
        <div className="relative">
          <input
            className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-black"
            type="text"
            name="email"
            placeholder="Email"
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
            <Image
              alt="email icon"
              className="w-full rounded-xl"
              draggable="false"
              src={IconEmail}
              width="32"
              height="32"
            />
          </span>
        </div>
      </div>
      <div className="pb-4">
        <div className="relative">
          <textarea
            className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-black"
            name="message"
            placeholder="Message"
            rows={5}
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
            <Image
              alt="message icon"
              className="w-full rounded-xl"
              draggable="false"
              src={IconMessage}
              width="32"
              height="32"
            />
          </span>
        </div>
      </div>
      <button className="w-full inline-block rounded-lg bg-black text-white px-5 py-3 font-medium shadow-lg">
        Submit
      </button>
    </form>
  );
}
