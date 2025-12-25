import Testimonial from "@/components/about/testimonial";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

import metadataContent from "@/constants/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.pages.testimonials.title,
  description: metadataContent.pages.testimonials.description,
};

export default function TestimonialsPage() {
  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container>
        <Testimonial />
      </Container>
    </Section>
  );
}
