---
name: update-journey
description: Update the short or full personal journey narrative in this portfolio. Use when the user wants to revise their story, add a life chapter, or refresh the journey page.
---

# Update the journey

1. Read `src/constants/journey.json` and identify whether the request affects `description`, `fullStory`, or both.
2. Ask only for missing facts, desired emphasis, and tone. Preserve the existing personal and reflective voice unless instructed otherwise.
3. Integrate new chapters into the narrative rather than appending disconnected paragraphs.
4. Keep the JSON valid and preserve unrelated fields.
5. Run the portfolio validator.
6. Summarize the changed sections and flag likely chatbot drift without editing the chatbot automatically.

## Shared visual treatment

When this work adds or changes Journey cards, reuse `src/components/ui/card-shell.tsx`. Assess `src/components/ui/lens.tsx` for meaningful personal imagery and set per-image `objectPosition` when `object-cover` would crop the subject poorly. Browser-check the card gradient/focus treatment and image crop at desktop and mobile widths.
