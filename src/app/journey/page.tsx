import Journey from "@/app/about/components/sections/journey";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

import metadataContent from "@/content/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.pages.journey.title,
  description: metadataContent.pages.journey.description,
};

export default function JourneyPage() {
  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container maxWidth="max-w-5xl">
        <Journey />
      </Container>
    </Section>
  );
}
