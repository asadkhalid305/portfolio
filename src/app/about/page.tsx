import Intro from "@/app/about/components/sections/intro";
import Journey from "@/app/about/components/sections/journey";
import Experience from "@/app/about/components/sections/experience";
import Contribution from "@/app/about/components/sections/contribution";
import Testimonial from "@/app/about/components/sections/testimonial";
import Contact from "@/app/about/components/sections/contact";

export default function About() {
  return (
    <>
      <h1 className="sr-only">About Asad Ullah Khalid</h1>
      {/* TODO: Migrate to Section wrapper component for consistency */}
      <section id="intro" className="bg-c-semidark">
        <div className="container">
          <Intro />
        </div>
      </section>
      <section id="journey" className="container min-h-[600px]">
        <Journey />
      </section>
      <section id="experience" className="container min-h-[600px]">
        <Experience />
      </section>
      <section id="contribution" className="container">
        <Contribution />
      </section>
      <section id="testimonial" className="container min-h-[600px]">
        <Testimonial />
      </section>
      <section id="contact" className="bg-c-semidark">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
}
