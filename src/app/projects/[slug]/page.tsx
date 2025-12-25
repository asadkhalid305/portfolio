import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getPostBySlug, getFiles } from "@/lib/mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import projectsData from "@/constants/projects.json";
import DetailPageHeader from "@/components/ui/detail-page-header";
import DetailPageImage from "@/components/ui/detail-page-image";
import ActionsSidebar from "@/components/ui/actions-sidebar";

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

    const actions = project.frontmatter.liveUrl
      ? [
          {
            href: project.frontmatter.liveUrl,
            label: projectsData.detail.visitButton,
            external: true,
          },
        ]
      : [];

    return (
      <Section className="min-h-[calc(100vh-80px)] py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <DetailPageHeader
              title={project.frontmatter.title}
              backHref="/projects"
              backText={projectsData.detail.backButton}
            />

            <DetailPageImage
              src={project.frontmatter.image.src}
              alt={project.frontmatter.image.alt}
            />

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {projectsData.detail.aboutHeading}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <MDXRemote source={project.content} />
                </div>
              </div>

              <div className="lg:col-span-1">
                <ActionsSidebar
                  title={projectsData.detail.actionsHeading}
                  actions={actions}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  } catch (error) {
    notFound();
  }
}
