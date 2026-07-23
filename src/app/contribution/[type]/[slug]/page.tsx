import { getPostBySlug, getFiles, ContentType } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import contributionData from "@/constants/contribution.json";
import DetailPageLayout from "@/components/layout/DetailPageLayout";

interface Props {
  params: Promise<{
    type: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const types: ContentType[] = ["events", "blogs", "book-reviews"];
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
  if (type !== "events" && type !== "blogs" && type !== "book-reviews")
    return {};

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

  if (type !== "events" && type !== "blogs" && type !== "book-reviews") {
    notFound();
  }

  let post;
  try {
    post = await getPostBySlug(
      type as ContentType,
      slug
    );
  } catch {
    notFound();
  }

  const { content, frontmatter } = post;

  const actions = (frontmatter.links || []).map((link) => ({
    href: link.url,
    label: link.name,
    external: true,
  }));

  const badges = [...(frontmatter.badges || [])];
  if (frontmatter.type) badges.push(frontmatter.type);
  if (frontmatter.event) badges.push(frontmatter.event);

  return (
    <DetailPageLayout
      title={frontmatter.title}
      backHref="/contribution"
      backText={contributionData.detail.backButton}
      badges={badges}
      date={frontmatter.date}
      image={frontmatter.image}
      actions={actions}
      aboutHeading={contributionData.detail.aboutHeading}
      actionsHeading={contributionData.detail.actionsHeading}
      className="min-h-[calc(100vh-80px)] pt-24 pb-12"
    >
      <MDXRemote source={content} />
    </DetailPageLayout>
  );
}
