# Portfolio (Private)

Personal Next.js portfolio with a content-driven site, AI chatbot, and contact
form. This README is written for me so I can quickly remember how it works, what
services it depends on, and where to update content.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS, tailwindcss-animate, class-variance-authority, clsx,
  tailwind-merge
- Radix UI Dialog, Lucide icons
- OpenAI SDK for chatbot (OpenAI or OpenRouter)
- Resend for contact form emails
- Vercel Analytics + Speed Insights
- Zod env validation, isomorphic-dompurify for safe HTML, Sharp for images

## Documentation

- [Content Management Guide](docs/content-management.md) - Learn how to add new
  blogs, events, or content categories.

## Local Development

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run start
npm run lint
npm run test:chatbot
```

## Project Structure

- `src/app/` app routes (App Router)
  - Pages: `/about`, `/journey`, `/experience`, `/testimonials`, `/contribution`, `/contact`, `/projects`
  - API routes: `src/app/api/chatbot/route.ts`, `src/app/api/contact/route.ts`
  - Only pages, layouts, and API routes per Next.js best practices
- `src/components/` organized by feature (about, chatbot, contact, header, ui)
  - All reusable components outside app/ folder
  - Feature-based organization with shared ui/ components
- `src/lib/` library-specific configurations only
  - `mdx.ts` - MDX content processing
  - `openai.ts` - OpenAI/OpenRouter client setup
- `src/utils/` general utility functions
- `src/hooks/` React custom hooks
- `src/constants/` JSON configuration files
- `src/config/` environment validation
- `src/content/` MDX content (blogs, events, projects)
- `public/images/` static assets

## Content Updates

- Main content: `src/constants/*.json` (about, common, contact, contribution, experience, journey, metadata, projects, socials, testimonials)
- Chatbot config: `src/constants/chatbot.json` (includes prompt, dataset, model configs)
- Metadata: `src/constants/metadata.json`

## API Routes

- `POST /api/chatbot`
  - Expects `{ messages: [{ role, content }] }` (full conversation)
  - Server injects system prompt + dataset, then calls OpenAI/OpenRouter
  - Stateless; chat history lives in browser localStorage
- `POST /api/contact`
  - Sends email via Resend
  - Uses `from: Portfolio <contact@send.asadullahkhalid.com>`
  - Uses `asadkhalid305@gmail.com` as both the recipient and `replyTo`; the submitted address remains visible in the message body

## Environment Variables (Private)

Use `.env.local` (keep secrets out of git). `.env.example` is the template.

- `OPENAI_API_KEY` - OpenAI key (used when `USE_OPENROUTER` is not true)
- `OPENROUTER_API_KEY` - OpenRouter key
- `USE_OPENROUTER` - set `"true"` to use OpenRouter instead of OpenAI
- `ENABLE_CHATBOT` - set `"false"` to hide chatbot UI even if keys exist
- `NEXT_PUBLIC_SITE_URL` - required for OpenRouter referer header
- `RESEND_API_KEY` - Resend API key for contact emails
- `CONTACT_FORM_SECRET` - Random secret of at least 32 characters used to sign contact form timestamps
- `NODE_ENV` - standard Node env

Chatbot renders only when a key is present and `ENABLE_CHATBOT !== "false"` (see
`src/app/layout.tsx`).

## External Services

- OpenAI or OpenRouter for chatbot responses
- Resend for email delivery (verify `send.asadullahkhalid.com` domain)
- Vercel Analytics + Speed Insights when deployed on Vercel

## Deployment (Vercel)

- Deploys on Vercel (standard Next.js setup)
- Set the same env vars in Vercel project settings as `.env.local`
- Ensure `NEXT_PUBLIC_SITE_URL` matches the production domain so OpenRouter
  referer headers are correct
- Resend domain `send.asadullahkhalid.com` must remain verified for outbound
  email

## Behavior Notes

- Chatbot history is saved to localStorage (`messages` key)
- HTML in content cards is sanitized with DOMPurify
- `/` rewrites to `/about` via `next.config.js`
- Security headers set in `next.config.js`

## Quick Checklist When Editing

- Update content JSON for copy changes
- Update chatbot dataset when resume/experience changes
- Keep `.env.example` in sync with required env vars
