import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { ContentType, Frontmatter, Post } from "@/utils/types";

const root = process.cwd();

export type { ContentType, Frontmatter, Post };

export async function getFiles(type: ContentType) {
  return fs.readdirSync(path.join(root, "src", "content", type));
}

export async function getPostBySlug(
  type: ContentType,
  slug: string
): Promise<Post> {
  const source = fs.readFileSync(
    path.join(root, "src", "content", type, `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    slug,
    content,
    frontmatter: data as Frontmatter,
  };
}

export async function getAllPosts(type: ContentType): Promise<Post[]> {
  const files = fs.readdirSync(path.join(root, "src", "content", type));

  const posts = files.reduce((allPosts: Post[], postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src", "content", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);

    return [
      {
        slug: postSlug.replace(".mdx", ""),
        content,
        frontmatter: data as Frontmatter,
      },
      ...allPosts,
    ];
  }, []);

  // Sort posts by date (descending)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();

    // If both dates are valid, sort descending
    if (!isNaN(dateA) && !isNaN(dateB)) {
      return dateB - dateA;
    }

    // Fallback if one date is invalid
    return 0;
  });
}
