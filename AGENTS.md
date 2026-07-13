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

## Verification

Run checks proportionate to the change:

- Content integrity: `node .agents/skills/validate-portfolio/scripts/validate-portfolio.mjs`
- Email validation: `npm run test:email-validation`
- Production build: `npm run build`

The chatbot integration test requires a running development server and a configured provider API key.
