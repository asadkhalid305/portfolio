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
3. Add the required Frontmatter at the top of the file. These fields are common
   to all content types:

```markdown
---
title: "Your Post Title"
description: "A brief description of the post."
date: "Dec, 2023"
image:
  src: "/images/your-image.webp"
  alt: "Alt text for the image"
link: "https://external-link.com" # Optional for events/blogs
---

Your content goes here. You can use **Markdown** syntax and standard HTML
components.
```

Projects can include extra frontmatter for badges and action links:

```markdown
---
title: "Project Name"
description: "A short project summary."
date: "2024-12-24"
image:
  src: "/images/project.webp"
  alt: "Project preview"
badges: ["Featured"] # Optional
liveUrl: "https://example.com" # Optional
repoUrl: "https://github.com/user/repo" # Optional
---
```

4. That's it! The new item will automatically appear on the relevant pages and
   be accessible via its slug (e.g., `/contribution/blogs/my-new-post` or
   `/projects/my-project`).

## 2. Adding a New Content Type (e.g., "Projects")

The system is designed to be extendable, but adding a completely new
**category** (like "Projects") requires a few code updates to ensure routing and
type safety work correctly.

**Checklist:**

1. [ ] Create Content Directory
2. [ ] Update Type Definitions
3. [ ] Create List and Detail Pages
4. [ ] Add Page Copy and Metadata
5. [ ] Update Routing (if part of Contribution)
6. [ ] Update Navigation

### Step-by-Step Guide

#### 1. Create Content Directory

Create a new folder in `src/content/` for your new type.

- Example: `src/content/projects/`

#### 2. Update Type Definitions (`src/lib/utils/types.ts`)

Update the `ContentType` type definition to include your new folder name. Add
any new frontmatter fields here as needed.

```typescript
// src/lib/utils/types.ts
export type ContentType = "blogs" | "events" | "projects"; // Add "projects"
```

#### 3. Create List and Detail Pages

Standalone types like Projects get their own routes:

```typescript
// src/app/projects/page.tsx
const projects = await getAllPosts("projects");
```

```typescript
// src/app/projects/[slug]/page.tsx
const project = await getPostBySlug("projects", slug);
```

#### 4. Add Page Copy and Metadata

Create a matching JSON file for page titles, descriptions, and labels.

- Example: `src/content/projects.json`

#### 5. Update Routing (if part of Contribution)

If the new type should live under Contribution, update the validation logic in
the dynamic route and the Contribution landing page.

```typescript
// src/app/contribution/[type]/[slug]/page.tsx

// In generateStaticParams
const types: ContentType[] = ["events", "blogs", "projects"]; // Add "projects"

// In generateMetadata and Page Component
if (type !== "events" && type !== "blogs" && type !== "projects") {
  // Add check
  notFound(); // or return {}
}
```

#### 6. Update Navigation (`src/components/header/site-header.tsx`)

Add the new category to the navigation links so users can find it.

```typescript
// src/components/header/site-header.tsx

const projectDropdown = projects.map((project) => ({
  name: project.frontmatter.title,
  href: `/projects/${project.slug}`,
}));

{
  name: navigation.projects,
  href: "/projects",
  dropdown: projectDropdown.length > 0 ? projectDropdown : undefined,
},

// OR

{
  name: navigation.contribution,
  href: "/contribution",
  dropdown: [
    { name: navigation.events, href: "/contribution#events" },
    { name: navigation.blogs, href: "/contribution#blogs" },
  ],
},
```

Also add the link labels to `src/content/common.json`. For dynamic dropdowns
(like Projects), `src/components/header/index.tsx` can fetch content and pass it
down to the client header.
