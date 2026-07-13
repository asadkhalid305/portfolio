---
name: update-seo
description: Audit or update SEO metadata, social previews, structured data, and AI discoverability for this portfolio. Use when improving search visibility or preparing metadata for new content.
---

# Update SEO

1. Inspect `src/constants/metadata.json`, route metadata, `src/app/layout.tsx`, and `next.config.js` before proposing changes.
2. Report the current gaps, then confirm which requested areas to change: titles and descriptions, Open Graph/Twitter previews, structured data, or content discoverability.
3. Keep titles specific and descriptions accurate. Never invent employment, location, credentials, or project claims for ranking purposes.
4. Use Next.js App Router metadata APIs and route-level metadata where appropriate. Add structured data only when the page contains the represented facts.
5. Require any referenced social image to exist in `public/images/` and match the intended dimensions.
6. Run the portfolio validator and production build after implementation.
7. Summarize code changes and any remaining manual asset or deployment work.
