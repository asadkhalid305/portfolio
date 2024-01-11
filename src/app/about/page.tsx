import Intro from "./components/sections/intro";
import Journey from "./components/sections/journey";
import Experience from "./components/sections/experience";
import Contribution from "./components/sections/contribution";
import Testimonial from "./components/sections/testimonial";
import Contact from "./components/sections/contact";

export default function About() {
  return (
    <main>
      <section className="bg-c-semiDark">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Intro />
        </div>
      </section>
      <section className="px-4 lg:max-w-7xl lg:mx-auto">
        <Journey />
      </section>
      <section className="px-4 lg:max-w-7xl lg:mx-auto">
        <Experience />
      </section>
      <section className="px-4 lg:max-w-7xl lg:mx-auto">
        <Contribution />
      </section>
      <section className="px-4 lg:max-w-7xl lg:mx-auto">
        <Testimonial />
      </section>
      <section className="bg-c-semiDark">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Contact />
        </div>
      </section>
    </main>
  );
}
