---
name: add-event
description: Add an event, talk, workshop, mentorship, panel, conference, or community activity to this portfolio. Use when recording a new speaking or community engagement.
---

# Add an event

1. Read `docs/content-management.md`, `src/utils/types.ts`, and one recent file in `src/content/events/`.
2. Gather missing information in small batches: title, event name, type, month and year, card description, optional badges and links, image, and body. Valid types are `Talk`, `Panel`, `Conference`, `Workshop`, `Mentorship`, and `Community`.
3. Derive a concise lowercase kebab-case slug. Stop and ask before replacing an existing slug.
4. Require a valid WebP image in `public/images/`; use `/images/default.webp` only when no event image is available. Always include image alt text.
5. Create `src/content/events/<slug>.mdx` using the current frontmatter schema. Store all external actions in `links` with meaningful names.
6. Run the portfolio validator and fix errors caused by the new entry.
7. Report the created route and image choice. Flag likely chatbot drift without editing the chatbot automatically.
