# Content Management System

This portfolio uses a file-based content management system powered by MDX. This
document outlines how to add new content items and how to extend the system with
new content categories.

## 1. Adding New Content items

To add a new item to an existing category (e.g., a new Blog or Event), you
simply need to create a new `.mdx` file.

**Steps:**

1. Navigate to `src/content/[category]/` (e.g., `src/content/blogs/`).
2. Create a new file with a `.mdx` extension, for example `my-new-post.mdx`.
3. Add the required Frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
description: "A brief description of the post."
date: "Dec, 2023"
image:
  src: "/images/your-image.webp"
  alt: "Alt text for the image"
link: "https://external-link.com" # Optional
---

Your content goes here. You can use **Markdown** syntax and standard HTML
components.
```

4. That's it! The new item will automatically appear on the relevant pages and
   be accessible via its slug (e.g., `/contribution/blogs/my-new-post`).

## 2. Adding a New Content Type (e.g., "Projects")

The system is designed to be extendable, but adding a completely new
**category** (like "Apps" or "Projects") requires a few code updates to ensure
routing and type safety work correctly.

**Checklist:**

1. [ ] Create Content Directory
2. [ ] Update Type Definitions
3. [ ] Update Routing Logic
4. [ ] Update Navigation

### Step-by-Step Guide

#### 1. Create Content Directory

Create a new folder in `src/content/` for your new type.

- Example: `src/content/projects/`

#### 2. Update Type Definitions (`src/lib/mdx.ts`)

Update the `ContentType` type definition to include your new folder name.

```typescript
// src/lib/mdx.ts
export type ContentType = "blogs" | "events" | "projects"; // Add "projects"
```

#### 3. Update Routing Logic (`src/app/contribution/[type]/[slug]/page.tsx`)

The dynamic route needs to know that this new type is a valid path. Update the
validation logic in the `generateStaticParams` and the main page component.

```typescript
// src/app/contribution/[type]/[slug]/page.tsx

// In generateStaticParams
const types: ContentType[] = ["events", "blogs", "projects"]; // Add "projects"

// In generateMetadata and Page Component
if (type !== "events" && type !== "blogs" && type !== "projects") { // Add check
    notFound(); // or return {}
}
```

#### 4. Update Navigation (`src/components/header/index.tsx`)

Add the new category to the dropdown menu so users can find it.

```typescript
// src/components/header/index.tsx

{
  name: navigation.contribution,
  href: "/contribution",
  dropdown: [
    { name: "Events", href: "/contribution#events" },
    { name: "Blogs", href: "/contribution#blogs" },
    { name: "Projects", href: "/contribution#projects" }, // Add this
  ],
},
```

_(Optional) If you want a dedicated section on the Contribution landing page
(`src/app/contribution/page.tsx`), you will also need to duplicate the section
integration logic there._
