import Intro from "@/app/about/components/sections/intro";
import Journey from "@/app/about/components/sections/journey";
import Experience from "@/app/about/components/sections/experience";
import Contribution from "@/app/about/components/sections/contribution";
import Testimonial from "@/app/about/components/sections/testimonial";
import Contact from "@/app/about/components/sections/contact";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export default function About() {
  return (
    <>
      <h1 className="sr-only">About Asad Ullah Khalid</h1>
      <Section id="intro" bgColor="semidark">
        <Container>
          <Intro />
        </Container>
      </Section>
      <Section id="journey" className="min-h-[600px]">
        <Container>
          <Journey />
        </Container>
      </Section>
      <Section id="experience" className="min-h-[600px]">
        <Container>
          <Experience />
        </Container>
      </Section>
      <Section id="contribution">
        <Container>
          <Contribution />
        </Container>
      </Section>
      <Section id="testimonial" className="min-h-[600px]">
        <Container>
          <Testimonial />
        </Container>
      </Section>
      <Section id="contact" bgColor="semidark">
        <Container>
          <Contact />
        </Container>
      </Section>
    </>
  );
}
