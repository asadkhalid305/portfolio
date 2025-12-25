import { getPostBySlug, getFiles, ContentType } from "@/lib/mdx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import LinkButton from "@/app/about/components/general/link-button";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import contributionData from "@/content/contribution.json";

interface Props {
  params: Promise<{
    type: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const types: ContentType[] = ["events", "blogs"];
  const params: { type: string; slug: string }[] = [];

  for (const type of types) {
    const files = await getFiles(type);
    for (const file of files) {
      params.push({
        type,
        slug: file.replace(".mdx", ""),
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  if (type !== "events" && type !== "blogs") return {};

  try {
    const { frontmatter } = await getPostBySlug(type as ContentType, slug);
    return {
      title: `${frontmatter.title} | Asad Ullah Khalid`,
      description: frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function ContributionDetailPage({ params }: Props) {
  const { type, slug } = await params;

  if (type !== "events" && type !== "blogs") {
    notFound();
  }

  try {
    const { content, frontmatter } = await getPostBySlug(
      type as ContentType,
      slug
    );

    const visitButtonText =
      type === "events"
        ? contributionData.detail.visitEventButton
        : contributionData.detail.visitBlogButton;

    return (
      <Section className="min-h-[calc(100vh-80px)] pt-24 pb-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <LinkButton
              href="/contribution"
              text={contributionData.detail.backButton}
              variant="minimal"
              className="mb-8"
              showIcon={true}
              iconPosition="left"
            />

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {frontmatter.title}
            </h1>

            <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src={frontmatter.image.src}
                alt={frontmatter.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {contributionData.detail.aboutHeading}
                </h2>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{frontmatter.date}</span>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <MDXRemote source={content} />
                </div>
              </div>

              <div className="lg:col-span-1">
                {frontmatter.originalLink && (
                  <div className="bg-c-semidark rounded-2xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24 space-y-4">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      {contributionData.detail.actionsHeading}
                    </h3>
                    <a
                      href={frontmatter.originalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 px-4 bg-c-dark hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-center font-medium rounded-xl transition-colors shadow-lg hover:shadow-2xl"
                    >
                      {visitButtonText}
                    </a>
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
