---
name: add-book-review
description: Add a book review to this portfolio's MDX content. Use when the user wants to publish, scaffold, import, or draft a new book review.
---

# Add a book review

1. Read `docs/content-management.md`, `src/utils/types.ts`, and one file in `src/content/book-reviews/`.
2. Gather missing information in small batches: book title and author, summary, review month and year, optional badges and original URL, cover image, and review body.
3. Derive a lowercase kebab-case slug. Stop and ask before replacing an existing slug.
4. Require a valid WebP image in `public/images/`; use `/images/default.webp` only when no cover is available. Always include image alt text.
5. Create `src/content/book-reviews/<slug>.mdx` using the current frontmatter schema and `links` array.
6. Run the portfolio validator and fix errors caused by the new entry.
7. Report the created route and image choice. Flag likely chatbot drift without editing the chatbot automatically.

## Shared visual treatment

When this work adds or changes a review card, reuse `src/components/ui/card-shell.tsx`. Assess `src/components/ui/lens.tsx` for meaningful cover or editorial imagery; skip it when it adds no value. Browser-check the card gradient/focus treatment and image crop at desktop and mobile widths.
