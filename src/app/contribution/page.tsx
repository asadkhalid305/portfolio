import Contribution from "@/app/about/components/sections/contribution";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";

import metadataContent from "@/content/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.pages.contribution.title,
  description: metadataContent.pages.contribution.description,
};

export default async function ContributionPage() {
  const events = await getAllPosts("events");
  const blogs = await getAllPosts("blogs");

  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container>
        <Contribution events={events} blogs={blogs} />
      </Container>
    </Section>
  );
}
