import Testimonial from "@/app/about/components/sections/testimonial";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Asad Ullah Khalid",
  description: "What people say about my work and impact.",
};

export default function TestimonialsPage() {
  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container maxWidth="max-w-5xl">
        <Testimonial />
      </Container>
    </Section>
  );
}
