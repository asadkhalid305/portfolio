---
name: add-project
description: Add a project to this portfolio's MDX content. Use when the user wants to publish, scaffold, import, or document a new project.
---

# Add a project

1. Read `docs/content-management.md`, `src/utils/types.ts`, and one recent file in `src/content/projects/`.
2. Gather missing information in small batches: name, card description, ISO launch date, pinned state, optional badges, live and source links, image, and project body.
3. Derive a lowercase kebab-case slug. Stop and ask before replacing an existing slug.
4. Require a valid WebP image in `public/images/`; use `/images/default.webp` only when no project image is available. Always include image alt text.
5. Create `src/content/projects/<slug>.mdx` using the current frontmatter schema. Use `links` entries rather than legacy `liveUrl` or `repoUrl` fields.
6. Run the portfolio validator and fix errors caused by the new entry.
7. Report the created route, pinned state, and image choice. Flag likely chatbot drift without editing the chatbot automatically.
