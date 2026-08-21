---
name: add-testimonial
description: Add a LinkedIn or Topmate testimonial to this portfolio. Use when the user provides or wants to record a new testimonial or recommendation.
---

# Add a testimonial

1. Read `src/constants/testimonials.json` and inspect an item from the requested source.
2. Gather missing details one small block at a time: exact quote, author name, job, profile URL, source, optional Topmate rating, and photo.
3. Preserve the quote exactly unless the user asks for editing. Accept only `LinkedIn` or `Topmate.io`; require a rating from 1 to 5 only for Topmate.
4. Require an existing WebP photo under `public/images/`, or use `/images/default.webp`. Include the author's name as alt text.
5. Append the new object to `items`. Do not reorder or modify existing testimonials.
6. Run the portfolio validator and fix errors caused by the new item.
7. Summarize the addition and flag likely chatbot drift without editing the chatbot automatically.
