# Median Point

Editorial analysis site built with Astro, MDX, Tailwind CSS, Keystatic and the Vercel adapter.

## Requirements

- Node.js 22.12 or newer
- npm
- GitHub OAuth environment variables for production Keystatic access

## Local development

```powershell
npm install
npm run dev
```

Astro serves the development site at `http://localhost:4321`.

## Validation

Run both static analysis and the production build before publishing:

```powershell
npm run validate
```

Useful individual commands:

```powershell
npm run check
npm run build
npm run preview
```

## Content

Articles live in `src/content/blog` and are managed through Keystatic. Draft and future-dated posts are excluded from:

- article routes
- homepage and listing pages
- archive and search
- RSS
- generated Open Graph images

## Deployment

The `main` branch deploys through Vercel. Production configuration is in:

- `astro.config.mjs`
- `vercel.json`
- `keystatic.config.ts`

Never commit `.env` files or GitHub/Keystatic secrets.
