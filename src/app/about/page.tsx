import About from "@/components/about/about";
import Journey from "@/components/about/journey";
import Experience from "@/components/about/experience";
import Contribution from "@/components/about/contribution";
import Testimonial from "@/components/about/testimonial";
import Contact from "@/components/about/contact";
import Projects from "@/components/about/projects";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import LinkButton from "@/components/ui/link-button";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

import contactData from "@/constants/contact.json";
import aboutData from "@/constants/about.json";

export default async function index() {
  const events = await getAllPosts("events");
  const blogs = await getAllPosts("blogs");
  const keyfinzProject = await getPostBySlug("projects", "keyfinz");


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
      {keyfinzProject && (
        <Section id="projects">
          <Container>
            <Projects project={keyfinzProject} />
          </Container>
        </Section>
      )}
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
