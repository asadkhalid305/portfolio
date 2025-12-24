import { getPostBySlug, getFiles, ContentType } from "@/lib/mdx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import LinkButton from "@/app/about/components/general/link-button";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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

    return (
      <Section className="min-h-[calc(100vh-80px)] pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <LinkButton
              href="/contribution"
              text="Back to Contributions"
              variant="minimal"
              className="mb-8"
              showIcon={true}
              iconPosition="left"
            />

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {frontmatter.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <span>{frontmatter.date}</span>
              {frontmatter.link && (
                <>
                  <span>•</span>
                  <a
                    href={frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Original Link
                  </a>
                </>
              )}
            </div>

            <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              <Image
                src={frontmatter.image.src}
                alt={frontmatter.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={content} />
            </div>
          </div>
        </Container>
      </Section>
    );
  } catch (error) {
    notFound();
  }
}
