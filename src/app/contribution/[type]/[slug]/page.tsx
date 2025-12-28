import { getPostBySlug, getFiles, ContentType } from "@/lib/mdx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import contributionData from "@/constants/contribution.json";
import DetailPageHeader from "@/components/ui/detail-page-header";
import DetailPageImage from "@/components/ui/detail-page-image";
import ActionsSidebar from "@/components/ui/actions-sidebar";

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

    const actions = frontmatter.originalLink
      ? [
          {
            href: frontmatter.originalLink,
            label: visitButtonText,
            external: true,
          },
        ]
      : [];

    const badges = [...(frontmatter.badges || [])];
    if (frontmatter.type) badges.push(frontmatter.type);
    if (frontmatter.event) badges.push(frontmatter.event);

    return (
      <Section className="min-h-[calc(100vh-80px)] pt-24 pb-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <DetailPageHeader
              title={frontmatter.title}
              backHref="/contribution"
              backText={contributionData.detail.backButton}
              date={frontmatter.date}
              badges={badges}
            />

            <DetailPageImage
              src={frontmatter.image.src}
              alt={frontmatter.image.alt}
              className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800"
            />

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {contributionData.detail.aboutHeading}
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <MDXRemote source={content} />
                </div>
              </div>

              <div className="lg:col-span-1">
                <ActionsSidebar
                  title={contributionData.detail.actionsHeading}
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
