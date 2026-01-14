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
  try {
    const { slug } = await params;
    const project = await getPostBySlug("projects", slug);

    const actions = [];

    if (project.frontmatter.liveUrl) {
      actions.push({
        href: project.frontmatter.liveUrl,
        label: projectsData.detail.visitButton,
        external: true,
      });
    }

    if (project.frontmatter.githubUrl) {
      actions.push({
        href: project.frontmatter.githubUrl,
        label: projectsData.detail.githubButton,
        external: true,
      });
    }

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
  } catch (error) {
    notFound();
  }
}
