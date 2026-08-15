# Pro Handyman SG

Premium Astro website for Pro Handyman SG, a professional handyman services brand serving homes, offices, commercial spaces, and properties across Singapore.

## Tech Stack

- Astro
- JavaScript
- Tailwind CSS
- Astro components
- Lightweight client-side JavaScript
- Lucide Astro icons

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment

The production site URL is configured in `astro.config.mjs` as `https://www.prohandymansg.com`. Deploy the generated `dist` directory to any static hosting provider.

## Project Structure

- `src/data/services.js` - extracted service hierarchy and new presentation metadata
- `src/layouts/BaseLayout.astro` - SEO, global shell, structured data support
- `src/components` - reusable UI sections and interactive components
- `src/pages` - static pages and dynamic service routes
- `src/styles/global.css` - Tailwind layers, design tokens, animation utilities
- `src/scripts/site.js` - navigation, reveal, search, filters, form states

## Environment Variables

No environment variables are required for the static website. Use `.env.example` as the starting point when adding a form backend or CRM integration.
