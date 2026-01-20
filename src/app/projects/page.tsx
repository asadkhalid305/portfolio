import { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import HCardGrid from "@/components/about/h-card-grid";
import projectsData from "@/constants/projects.json";

export const metadata: Metadata = projectsData.metadata;

export default async function ProjectsPage() {
  const allProjects = await getAllPosts("projects");

  // Sort: Pinned projects first
  const pinnedProjects = allProjects.filter((p) => p.frontmatter.isPinned);
  const otherProjects = allProjects.filter((p) => !p.frontmatter.isPinned);

  const projects = [...pinnedProjects, ...otherProjects];

  return (
    <Section className="min-h-[calc(100vh-80px)]" vCenter>
      <Container>
        <h1 className="sr-only">{projectsData.metadata.title}</h1>
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold mb-4 lg:text-5xl">
            {projectsData.title}
          </h2>
          <p className="text-lg">{projectsData.description}</p>
        </div>
        <HCardGrid projects={projects} />
      </Container>
    </Section>
  );
}
