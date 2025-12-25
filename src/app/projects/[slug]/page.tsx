import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getPostBySlug, getFiles } from "@/lib/mdx";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import LinkButton from "@/app/about/components/general/link-button";
import projectsData from "@/content/projects.json";

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

    return (
      <Section className="min-h-[calc(100vh-80px)] py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <LinkButton
              href="/projects"
              text={projectsData.detail.backButton}
              variant="minimal"
              className="mb-8"
              showIcon={true}
              iconPosition="left"
            />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {project.frontmatter.title}
            </h1>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-800">
              <Image
                src={project.frontmatter.image.src}
                alt={project.frontmatter.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

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
                {(project.frontmatter.liveUrl ||
                  project.frontmatter.repoUrl) && (
                  <div className="bg-c-semidark rounded-2xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24 space-y-4">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      {projectsData.detail.actionsHeading}
                    </h3>
                    {project.frontmatter.liveUrl && (
                      <a
                        href={project.frontmatter.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 px-4 bg-c-dark hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-center font-medium rounded-xl transition-colors shadow-lg hover:shadow-2xl"
                      >
                        {projectsData.detail.visitButton}
                      </a>
                    )}
                  </div>
                )}
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
