# Portfolio Agent Guide

This is Asad Ullah Khalid's personal portfolio, built with Next.js 16 App Router, TypeScript, and Tailwind CSS.

## Architecture

- Content is file-backed; there is no database or CMS.
- Projects, blogs, events, and book reviews live in `src/content/<type>/*.mdx`.
- Profile and interface content lives in `src/constants/*.json`.
- The chatbot prompt and dataset live in `src/constants/chatbot.ts`.
- Static images live in `public/images/` and use WebP.

Before editing content, inspect the current type in `src/utils/types.ts` and one existing record of the same kind. Preserve established ordering unless the relevant workflow says otherwise.

## Reusable workflows

Project-specific workflows live in `.agents/skills/`. Use the matching skill when adding or updating portfolio content, synchronizing the chatbot, checking links, updating SEO, or validating the portfolio.

## Branch and release policy

- Never commit or push ordinary work directly to `main`.
- Work must reach `main` only through the repository's release workflow, unless the user explicitly authorizes a direct `main` operation.
- A generic request to "commit and push" does not authorize committing or pushing to `main`; use the appropriate non-main branch, normally `develop`.
- If the current branch is `main` when delivery is requested, switch to or create the appropriate non-main branch before committing. Ask for direction if the intended branch cannot be determined safely.

## Stacked pull requests

- The personal-brand rebrand is delivered as GitHub Stacked PRs based on `develop`: one independently reviewable domain per layer (for example setup, header, chatbot, then hero).
- Use the official `gh stack` extension to create, navigate, rebase, and submit this stack. Keep each PR’s base as the preceding layer; do not flatten the stack into a single rebrand PR.
- Put shared foundations in the lowest relevant layer. Keep later layers focused even when they touch the same file, and rebase the stack after changes to a lower layer.
- For future multi-domain redesigns or refactors, prefer this same stack pattern when the work benefits from independent review and rollback; use a single PR for genuinely small, isolated changes.

## Verification

Run checks proportionate to the change:

- Content integrity: `node .agents/skills/validate-portfolio/scripts/validate-portfolio.mjs`
- Email validation: `npm run test:email-validation`
- Production build: `npm run build`

The chatbot integration test requires a running development server and a configured provider API key.
