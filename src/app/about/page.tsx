import Contact from "./components/contact";
import Intro from "./components/intro";

export default function About() {
  return (
    <section className="flex-1">
      <div className="px-4 md:px-60 md:container md:mx-auto">
        <Intro />
        <Contact />
      </div>
    </section>
  );
}
