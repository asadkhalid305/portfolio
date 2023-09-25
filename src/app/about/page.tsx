import Contact from "./components/sections/contact";
import Intro from "./components/sections/intro";
import Journey from "./components/sections/journey";

export default function About() {
  return (
    <main>
      <section className="bg-c-gray">
        <div className="px-4 md:container md:mx-auto lg:px-36">
          <Intro />
        </div>
      </section>
      <section className="px-4 md:container md:mx-auto lg:px-36">
        <Journey />
      </section>
      <section className="bg-c-gray">
        <div className="px-4 md:container md:mx-auto lg:px-36">
          <Contact />
        </div>
      </section>
    </main>
  );
}
