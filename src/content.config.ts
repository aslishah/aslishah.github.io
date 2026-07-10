import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live in src/content/blog/ as .md or .mdx files.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Set to true to keep a post out of the published site.
    draft: z.boolean().default(false),
  }),
});

// Interactive applications live in src/content/apps/. Each file's body is
// the app's description; the frontmatter drives the gallery card and the
// embed on the app's page.
const apps = defineCollection({
  loader: glob({ base: './src/content/apps', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Lower numbers appear first in the gallery.
    order: z.number().default(99),
    // URL to embed in an <iframe>. Omit for link-only entries.
    embed: z.string().url().optional(),
    embedHeight: z.number().default(700),
    // External link to the app / repository, shown as a button.
    link: z.string().url().optional(),
    linkLabel: z.string().default('Open in a new tab'),
    // Screenshot shown on the gallery card (path under /public).
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['live', 'beta', 'archived']).default('live'),
  }),
});

export const collections = { blog, apps };
