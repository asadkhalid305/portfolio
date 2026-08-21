---
name: add-blog
description: Add a blog post to this portfolio's MDX content. Use when the user wants to publish, scaffold, import, or draft a new blog entry.
---

# Add a blog

1. Read `docs/content-management.md`, `src/utils/types.ts`, and one recent file in `src/content/blogs/`.
2. Gather missing information in small batches: title, card description, publication month and year, optional original URL, image, and article body. Preserve supplied prose unless editing is requested.
3. Derive a lowercase kebab-case slug. Stop and ask before replacing an existing slug.
4. Require a valid WebP image in `public/images/`; use `/images/default.webp` only when the user has no image. Always include both `image.src` and `image.alt`.
5. Create `src/content/blogs/<slug>.mdx` using the current frontmatter schema. Put an original URL in `links` with a descriptive name.
6. Run the portfolio validator. Fix errors caused by the new entry.
7. Report the created route, image choice, and any likely chatbot dataset drift. Do not update the chatbot unless asked or `sync-chatbot` is also invoked.
