import Contact from "./components/sections/contact";
import ContentCreation from "./components/sections/content-creation";
import Experience from "./components/sections/experience";
import Intro from "./components/sections/intro";
import Journey from "./components/sections/journey";

export default function About() {
  return (
    <main>
      <section className="bg-c-gray">
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
        <ContentCreation />
      </section>
      <section className="bg-c-gray">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <Contact />
        </div>
      </section>
    </main>
  );
}
