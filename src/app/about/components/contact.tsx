import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col items-center py-20 lg:flex-row lg:py-10">
      <div className="flex-1">
        <div className="lg:pr-20 max-lg:pb-20">
          <div className="text-4xl font-extrabold mb-6">Contact Me 😊</div>
          <div className="text-xl">
            If you want to connect with me for any purpose, write me a message
            and I will get back to you.
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <form>
          <div className="pb-4">
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-c-light-grey"
                type="text"
                name="fullName"
                placeholder="Full Name"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
                <Image
                  alt="name icon"
                  className="w-full rounded-xl"
                  draggable="false"
                  src="/icons/name.png"
                  width="32"
                  height="32"
                />
              </span>
            </div>
          </div>
          <div className="pb-4">
            <div className="relative">
              <input
                className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-c-light-grey"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
                <Image
                  alt="email icon"
                  className="w-full rounded-xl"
                  draggable="false"
                  src="/icons/email.png"
                  width="32"
                  height="32"
                />
              </span>
            </div>
          </div>
          <div className="pb-4">
            <div className="relative ">
              <input
                className="w-full rounded-lg p-4 pe-16 shadow-lg focus:outline-c-light-grey"
                type="text"
                name="message"
                placeholder="Message"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center pr-4">
                <Image
                  alt="message icon"
                  className="w-full rounded-xl"
                  draggable="false"
                  src="/icons/message.png"
                  width="32"
                  height="32"
                />
              </span>
            </div>
          </div>
          <button className="w-full inline-block rounded-lg bg-c-light-grey px-5 py-3 text-sm font-medium  shadow-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
