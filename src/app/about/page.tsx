import Contact from "./components/contact";
import Intro from "./components/intro";

export default function About() {
  return (
    <section className="flex-1">
      <div className="bg-c-light-grey max-lg:text-center">
        <div className="px-4 md:container md:mx-auto lg:px-60 ">
          <Intro />
        </div>
      </div>
      <div className="px-4 md:container md:mx-auto lg:px-60">
        <Contact />
      </div>
    </section>
  );
}
