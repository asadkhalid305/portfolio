import Experience from "@/app/about/components/sections/experience";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

import metadataContent from "@/content/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.pages.experience.title,
  description: metadataContent.pages.experience.description,
};

export default function ExperiencePage() {
  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container maxWidth="max-w-5xl">
        <Experience />
      </Container>
    </Section>
  );
}
