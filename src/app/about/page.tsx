import Intro from "./components/sections/intro";
import Journey from "./components/sections/journey";
import Experience from "./components/sections/experience";
import Contribution from "./components/sections/contribution";
import Testimonial from "./components/sections/testimonial";
import Contact from "./components/sections/contact";

const similarSections = {
  journey: <Journey />,
  experience: <Experience />,
  contribution: <Contribution />,
  testimonial: <Testimonial />,
};

export default function About() {
  return (
    <main>
      <section id="intro" className="bg-c-semiDark">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Intro />
        </div>
      </section>
      {Object.values(similarSections).map((section, index) => (
        <section key={index} className="px-4 lg:max-w-7xl lg:mx-auto">
          {section}
        </section>
      ))}
      <section className="bg-c-semiDark">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Contact />
        </div>
      </section>
    </main>
  );
}
