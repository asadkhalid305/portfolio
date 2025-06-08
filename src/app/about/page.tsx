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
      <section id="intro" className="bg-c-semidark">
        <div className="px-4 lg:h-[93.1vh] lg:max-w-7xl lg:mx-auto">
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
    </>
  );
}
