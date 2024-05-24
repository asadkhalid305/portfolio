import Image from "next/image";

export default function ContactForm() {
  return (
    <form>
      <div className="pb-4">
        <div className="relative">
          <input
            className="w-full rounded-lg p-4 pe-16 shadow-lg outline-c-dark caret-c-dark"
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
            <Image
              alt="name icon"
              className="rounded-xl"
              draggable="false"
              src="icons/name.png"
              width="24"
              height="24"
            />
          </span>
        </div>
      </div>
      <div className="pb-4">
        <div className="relative">
          <input
            className="w-full rounded-lg p-4 pe-16 shadow-lg outline-c-dark caret-c-dark"
            type="text"
            name="email"
            placeholder="Email"
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
            <Image
              alt="email icon"
              className="rounded-xl"
              draggable="false"
              src="icons/email.png"
              width="24"
              height="24"
            />
          </span>
        </div>
      </div>
      <div className="pb-4">
        <div className="relative">
          <textarea
            className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-c-dark"
            name="message"
            placeholder="Message"
            rows={5}
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
            <Image
              alt="message icon"
              className="rounded-xl"
              draggable="false"
              src="icons/message.png"
              width="24"
              height="24"
            />
          </span>
        </div>
      </div>
      <button className="w-full inline-block rounded-lg bg-c-dark text-c-light px-5 py-3 font-medium shadow-lg focus:ring-4 focus:outline-none">
        Submit
      </button>
    </form>
  );
}
