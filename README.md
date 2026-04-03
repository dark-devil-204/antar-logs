# Antar Logs

A minimal, text-first technical blog built with Astro.

The focus is fast loading, clean writing, and strong crawlability:

- Client-side post search
- Tag filtering and tag archive pages
- Previous and next post navigation
- Related post links (tag-based)
- RSS feed and sitemap
- SEO-first metadata and canonical URLs
- Custom 404 page

## Live Site

https://www.antarlogs.tech

## Tech Stack

- Astro 6
- Astro Content Collections
- @astrojs/sitemap
- @astrojs/rss
- reading-time

## Local Development

Requirements:

- Node.js >= 22.12.0

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   ├── favicon assets
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── content/
│   │   └── blog/*.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro
│   │   ├── rss.xml.ts
│   │   ├── blog/[...slug].astro
│   │   └── tags/[tag].astro
│   └── styles/global.css
├── astro.config.mjs
└── src/content.config.ts
```

## Writing Posts

Add markdown files in:

```text
src/content/blog/
```

Each post must include frontmatter:

```yaml
---
title: "Your post title"
date: 2026-04-03
description: "A short summary for SEO and listings"
tags: ["astro", "backend", "notes"]
---
```

## SEO and Discovery

This project is already set up with:

- Canonical URLs
- Meta description tags
- Open Graph and Twitter tags
- robots.txt
- Sitemap generation via @astrojs/sitemap
- RSS feed at /rss.xml

After deployment, submit your sitemap in Google Search Console:

```text
https://www.antarlogs.tech/sitemap-index.xml
```

## Blog UX Features

- Homepage search by title, description, and tags
- Tag dropdown filtering
- Tag-specific archive pages
- Related posts section on article pages
- Newer and older post navigation on article pages

## Design Philosophy

No heavy UI framework. No visual noise.

Just semantic HTML, accessible structure, and Sakura-style global CSS for a classic old-web reading experience.

## License

MIT (or your preferred license)
