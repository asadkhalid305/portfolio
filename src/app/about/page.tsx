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
import MotionReveal from "@/components/ui/motion-reveal";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

import contactData from "@/constants/contact.json";
export default async function index() {
  const [events, blogs, bookReviews, langcompassProject] = await Promise.all([
    getAllPosts("events"),
    getAllPosts("blogs"),
    getAllPosts("book-reviews"),
    getPostBySlug("projects", "langcompass"),
  ]);

  return (
    <>
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
          <MotionReveal>
            <Experience isOverview />
          </MotionReveal>
        </Container>
      </Section>
      {langcompassProject && (
        <Section id="projects">
          <Container>
            <MotionReveal>
              <Projects project={langcompassProject} />
            </MotionReveal>
          </Container>
        </Section>
      )}
      <Section id="contribution">
        <Container>
          <MotionReveal>
            <Contribution
              isOverview
              events={events}
              blogs={blogs}
              bookReviews={bookReviews}
            />
          </MotionReveal>
        </Container>
      </Section>
      <Section id="testimonial">
        <Container>
          <MotionReveal>
            <Testimonial isOverview />
          </MotionReveal>
        </Container>
      </Section>
      <Section id="contact" bgColor="semidark">
        <Container>
          <MotionReveal>
            <Contact />
            <div className="mt-12 flex justify-center lg:justify-start">
              <LinkButton
                href="/contact"
                showIcon={false}
                text={contactData.cta}
                variant="minimal"
              />
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
