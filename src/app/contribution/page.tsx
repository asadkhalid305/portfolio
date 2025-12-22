import Contribution from "@/app/about/components/sections/contribution";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribution | Asad Ullah Khalid",
  description: "Events, talks, and community contributions.",
};

export default function ContributionPage() {
  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container maxWidth="max-w-5xl">
        <Contribution />
      </Container>
    </Section>
  );
}
