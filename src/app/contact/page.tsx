import Contact from "@/app/about/components/sections/contact";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

import metadataContent from "@/content/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.pages.contact.title,
  description: metadataContent.pages.contact.description,
};

export default function ContactPage() {
  return (
    <Section className="min-h-[calc(100vh-80px)]" bgColor="semidark" vCenter>
      <Container maxWidth="max-w-5xl">
        <Contact />
      </Container>
    </Section>
  );
}
