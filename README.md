# Think Stack

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Digging into tech ideas to understand how they actually work. Less tutorial, more "what's going on under the hood."

**[thinkstack.blog](https://thinkstack.blog)** · [Read the first post →](https://thinkstack.blog/blog/capybaras-and-ai-text/)

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | [Astro 5](https://astro.build) — static output, zero JS by default |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config, no JS config file |
| Typography | [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) — prose styling for markdown |
| SEO | Auto-generated sitemap, RSS feed, Open Graph, Twitter Cards, JSON-LD |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |

## Project Structure

```
├── content/blog/          # Markdown posts (separate from app code)
├── public/                # Static assets (favicon, OG image, robots.txt)
├── src/
│   ├── components/        # BaseHead, Header, Footer, PostCard, TagList
│   ├── layouts/           # Base (HTML shell), Post (article + prose)
│   ├── pages/             # Routes: /, /blog, /tags, /rss.xml, /404
│   └── styles/global.css  # Tailwind v4 theme + custom styles
└── astro.config.mjs
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # Static output in dist/
npm run preview    # Preview the build locally
```

## Features

- **Content collections** with typed schema and glob loader
- **Tag system** with per-tag pages and tag index with counts
- **RSS feed** at `/rss.xml`
- **Sitemap** auto-generated via `@astrojs/sitemap`
- **SEO meta** — OG image, Twitter Cards, JSON-LD structured data, canonical URLs
- **Syntax highlighting** — Shiki with `github-light` theme
- **Copy button** on code blocks
- **Google Analytics** — conditional, only renders when `GA_ID` env var is set
- **404 page**

## Environment Variables

```bash
cp .env.example .env
```

| Variable | Description | Required |
|----------|-------------|----------|
| `GA_ID`  | Google Analytics measurement ID (e.g. `G-XXXXXXX`) | No |

## License

[MIT](./LICENSE)
