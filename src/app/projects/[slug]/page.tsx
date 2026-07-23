import { getPostBySlug, getFiles } from "@/lib/mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import projectsData from "@/constants/projects.json";
import DetailPageLayout from "@/components/layout/DetailPageLayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const files = await getFiles("projects");
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const project = await getPostBySlug("projects", slug);
    return {
      title: `${project.frontmatter.title} | Asad Ullah Khalid`,
      description: project.frontmatter.description,
    };
  } catch {
    return {
      title: "Project Not Found",
    };
  }
}

export default async function ProjectPage({ params }: Props) {
  let project;
  try {
    const { slug } = await params;
    project = await getPostBySlug("projects", slug);
  } catch {
    notFound();
  }

  const actions =
    project.frontmatter.links?.map((link) => ({
      href: link.url,
      label: link.name,
      external: true,
    })) || [];

  return (
    <DetailPageLayout
      title={project.frontmatter.title}
      backHref="/projects"
      backText={projectsData.detail.backButton}
      badges={project.frontmatter.badges}
      image={project.frontmatter.image}
      actions={actions}
      aboutHeading={projectsData.detail.aboutHeading}
      actionsHeading={projectsData.detail.actionsHeading}
    >
      <MDXRemote source={project.content} />
    </DetailPageLayout>
  );
}
