---
name: check-links
description: Check external URLs in portfolio JSON and MDX frontmatter. Use before deployment, after adding links, or when investigating broken portfolio actions.
---

# Check portfolio links

Run from the repository root:

```bash
node .agents/skills/check-links/scripts/check-links.mjs
```

The helper checks URLs in the authoritative JSON constants and all MDX frontmatter, retries HEAD failures with GET, applies a ten-second timeout, and treats authentication, rate-limit, and anti-bot responses as unverifiable rather than broken.

Report broken links and their source files. Suggest replacements or removal, but do not change content without user approval. Exit status `1` means at least one link is broken; unverifiable links alone do not fail the command.
