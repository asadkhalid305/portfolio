import Experience from "@/components/about/experience";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

import metadataContent from "@/constants/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.pages.experience.title,
  description: metadataContent.pages.experience.description,
};

export default function ExperiencePage() {
  return (
    <Section className="min-h-[calc(100vh-68px)]">
      <Container>
        <Experience />
      </Container>
    </Section>
  );
}
