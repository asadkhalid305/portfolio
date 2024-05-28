import Intro from "./components/sections/intro";
import Journey from "./components/sections/journey";
import Experience from "./components/sections/experience";
import Contribution from "./components/sections/contribution";
import Testimonial from "./components/sections/testimonial";
import Contact from "./components/sections/contact";

export default function About() {
  return (
    <main>
      <section id="intro" className="bg-c-semidark">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Intro />
        </div>
      </section>
      <section id="journey" className="px-4 lg:max-w-7xl lg:mx-auto">
        <Journey />
      </section>
      <section id="experience" className="px-4 lg:max-w-7xl lg:mx-auto">
        <Experience />
      </section>
      <section id="contribution" className="px-4 lg:max-w-7xl lg:mx-auto">
        <Contribution />
      </section>
      <section id="testimonial" className="px-4 lg:max-w-7xl lg:mx-auto">
        <Testimonial />
      </section>
      <section id="contact" className="bg-c-semidark">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Contact />
        </div>
      </section>
    </main>
  );
}
