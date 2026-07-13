---
name: sync-chatbot
description: Audit or synchronize the portfolio chatbot dataset with authoritative portfolio content. Use after profile, experience, project, event, blog, review, testimonial, or journey changes, or when chatbot answers appear stale.
---

# Sync the chatbot

1. Read `src/constants/chatbot.ts` without changing `config`, `prompt`, `info`, or `header`.
2. Read authoritative content from `src/constants/{about,experience,journey,socials,testimonials}.json` and all MDX frontmatter in `src/content/`.
3. Compare the `dataset` string with those sources. Report new, outdated, missing, or contradictory facts before editing.
4. Default to a targeted update of stale sections. Ask for explicit approval before fully regenerating the dataset.
5. Preserve the dataset's established structure, factual tone, and first-person-friendly voice. Do not invent facts or copy private data not already intended for the public portfolio.
6. Run the portfolio validator and the chatbot test when a configured development server is available.
7. Summarize the dataset sections changed and any unresolved discrepancies.
