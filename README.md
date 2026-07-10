# aslishah.github.io

Personal academic website of Aslisho Qurboniev, built with
[Astro](https://astro.build/) and TypeScript. Deployed automatically to GitHub
Pages on every push to `main`.

## Working locally

```bash
npm install     # once
npm run dev     # live-reload dev server at http://localhost:4321
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## How to add content

### Write a blog post

Create a Markdown file in `src/content/blog/`, e.g.
`2026-08-01-my-post.md`:

```markdown
---
title: My post title
description: One-sentence summary shown in lists and RSS.
pubDate: 2026-08-01
tags: [digital humanities]
---

Your post in Markdown. Images go in `public/images/` and are referenced as
`![caption](/images/file.png)`.
```

Set `draft: true` in the frontmatter to keep a post unpublished. Use `.mdx`
instead of `.md` if you want to embed components or raw HTML/iframes.

For Persian or Arabic passages, wrap them so they render right-to-left:

```html
<div class="verse" lang="fa">
شعر یا متن فارسی
</div>
```

### Add an application

Create a Markdown file in `src/content/apps/`, e.g. `my-app.md`:

```markdown
---
title: My App
description: Shown on the gallery card.
order: 7                      # lower = earlier in the gallery
embed: https://example.com/   # iframe URL; omit for link-only entries
embedHeight: 700
link: https://example.com/    # "open in new tab" button
tags: [network analysis]
---

Description of the app in Markdown, shown below the embed.
```

Anything embeddable works: Power BI reports, Observable notebooks, Retina
network graphs, Streamlit/Render apps, etc.

### Add a publication

Edit `src/data/publications.ts` and add an object to the `publications`
array. The Publications page groups by `type` and sorts by year
automatically.

### Update your bio, role, or links

- Name, role, email, social links: `src/consts.ts`
- About page text: `src/pages/about.astro`
- Home page intro: `src/pages/index.astro`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys the site
on every push to `main`. In the repository settings, **Settings → Pages →
Source** must be set to **GitHub Actions** (not "Deploy from a branch").

## Old URLs

Redirects from the old Jekyll site (`/Mujmal`, `/Ikhwan`, `/Ismaili`,
`/projects`, …) are defined in `astro.config.mjs`.
