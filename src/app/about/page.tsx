import About from "@/app/about/components/sections/about";
import Journey from "@/app/about/components/sections/journey";
import Experience from "@/app/about/components/sections/experience";
import Contribution from "@/app/about/components/sections/contribution";
import Testimonial from "@/app/about/components/sections/testimonial";
import Contact from "@/app/about/components/sections/contact";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import LinkButton from "@/app/about/components/general/link-button";
import { getAllPosts } from "@/lib/mdx";

import contactData from "@/content/contact.json";
import aboutData from "@/content/about.json";

export default async function index() {
  const events = await getAllPosts("events");
  const blogs = await getAllPosts("blogs");

  return (
    <>
      <h1 className="sr-only">{aboutData.screenReaderTitle}</h1>
      <Section id="about" bgColor="semidark" padding={false}>
        <Container>
          <About />
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
          <Contribution isOverview events={events} blogs={blogs} />
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
