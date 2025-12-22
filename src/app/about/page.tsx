import Intro from "@/app/about/components/sections/intro";
import Journey from "@/app/about/components/sections/journey";
import Experience from "@/app/about/components/sections/experience";
import Contribution from "@/app/about/components/sections/contribution";
import Testimonial from "@/app/about/components/sections/testimonial";
import Contact from "@/app/about/components/sections/contact";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import LinkButton from "@/app/about/components/general/link-button";

import contactData from "@/content/contact.json";

export default function About() {
  return (
    <>
      <h1 className="sr-only">About Asad Ullah Khalid</h1>
      <Section id="intro" bgColor="semidark" padding={false}>
        <Container>
          <Intro />
        </Container>
      </Section>
      <Section id="journey">
        <Container>
          <Journey isOverview />
        </Container>
      </Section>
      <Section id="experience">
        <Container>
          <Experience isOverview />
        </Container>
      </Section>
      <Section id="contribution">
        <Container>
          <Contribution isOverview />
        </Container>
      </Section>
      <Section id="testimonial">
        <Container>
          <Testimonial isOverview />
        </Container>
      </Section>
      <Section id="contact" bgColor="semidark">
        <Container>
          <Contact />
          <div className="mt-12 flex justify-center lg:justify-start">
            <LinkButton
              href="/contact"
              showIcon={false}
              text={contactData.cta}
              variant="minimal"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
