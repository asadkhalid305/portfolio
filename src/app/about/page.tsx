import Contact from "./components/sections/contact";
import Intro from "./components/sections/intro";
import Journey from "./components/sections/journey";

export default function About() {
  return (
    <main>
      <section className="bg-c-gray">
        <div className="px-4 lg:max-w-5xl lg:mx-auto">
          <Intro />
        </div>
      </section>
      <section className="px-4 lg:max-w-5xl lg:mx-auto">
        <Journey />
      </section>
      <section className="bg-c-gray">
        <div className="px-4 lg:max-w-5xl lg:mx-auto">
          <Contact />
        </div>
      </section>
    </main>
  );
}
