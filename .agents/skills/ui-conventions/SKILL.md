---
name: ui-conventions
description: Apply the portfolio's shared UI implementation rules when creating or materially modifying user-facing cards, images, buttons, links, forms, layouts, animations, or responsive behavior. Use before visual Next.js or Tailwind work; skip for data-only, API, copy-only, or non-visual changes.
---

# Portfolio UI conventions

Use existing shared primitives before creating a visual pattern. Treat an intentional exception as a design decision: explain it briefly in the pull request.

## Build workflow

1. Identify the changed visual surface and inspect the closest existing implementation before editing.
2. Reuse or extend the shared primitive when one exists; do not recreate its visual states locally.
3. Preserve accessible focus, keyboard behavior, reduced-motion behavior, and responsive reading order where relevant.
4. Browser-check the changed surface at desktop and mobile widths before review.

## Current shared rules

### Cards

- Use `src/components/ui/card-shell.tsx` for new or materially redesigned content cards.
- Preserve its Magic Card gradient, focus treatment for linked cards, radius, hover motion, and featured-card treatment.
- Add a small, documented exception only when the structure cannot use `CardShell` without harming semantics or usability.

### Images

- Assess `src/components/ui/lens.tsx` for meaningful editorial, project, or story imagery. Use it when closer inspection adds value and does not conflict with another interaction.
- Skip Lens for tiny identity avatars, logos, and purely decorative assets.
- Keep useful alt text. Set a per-image `objectPosition` whenever `object-cover` would crop the subject poorly.

### Future shared surfaces

- For buttons, links, forms, feedback states, visualizations, or animations, first inspect existing shared components and tokens. Reuse them where they meet the need.
- When a new pattern becomes established across more than one surface, record its reusable rules here and introduce a shared primitive before repeating custom implementations.

## Verification

- Check hover, focus, and keyboard behavior for interactive elements.
- Check image crop and Lens usefulness for changed imagery.
- Check desktop and mobile layout, including overflow and reading order.
