---
name: validate-portfolio
description: Validate portfolio content, images, schemas, metadata, and chatbot consistency. Use after content changes, before committing, or when auditing portfolio integrity.
---

# Validate the portfolio

Run from the repository root:

```bash
node .agents/skills/validate-portfolio/scripts/validate-portfolio.mjs
```

Fix errors introduced by the current work. Report pre-existing warnings separately instead of silently changing unrelated content. Exit status `1` indicates structural or missing-file errors; warnings identify drift that needs judgment.

For application-code changes, also run the focused test for the affected surface and `npm run build`.

For a new or materially changed card/image layout, browser-check desktop and mobile: verify `CardShell` gradient/focus behavior and that any Lens treatment is useful and crops its subject correctly.
