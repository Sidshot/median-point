# Median Point - Project State & Memory

## Current Status
- **Live Site:** https://median-point.vercel.app
- **CMS Dashboard:** https://median-point.vercel.app/keystatic
- **Tech Stack:** Astro 6, Tailwind CSS v4, MDX, Keystatic CMS, Vercel (SSR mode)
- **GitHub Repo:** https://github.com/Sidshot/median-point
- Base typography and styling are completed, mirroring elite geopolitical publications using the "Academic Modernism" aesthetic.

## What We Accomplished
1. **Core Scaffolding:** Configured `global.css` with Tailwind v4 variables for the custom "Median Point" color palette (Diplomatic Red, Deep Charcoal, Eggshell).
2. **Layout & Routes:** 
   - Created `index.astro` (Homepage with Latest Insights).
   - Created `about.astro` (Author biography & Mission Statement).
   - Created `contact.astro` (Formspree contact form).
   - Created `archive.astro` (Fast client-side region filtering).
3. **Typography & UX:** 
   - Added a custom Markdown parsing rule (`remark-breaks`) so that hitting "Enter" in the editor naturally creates line breaks without needing double spaces.
   - Added professional drop caps and elegant blockquotes to article bodies.
   - Built a dynamic red reading-progress bar across the top of the viewport.
   - Added an automatic reading-time calculator.
   - Implemented a seamless Light/Dark mode toggle in the navigation header.
   - Added social sharing buttons (Twitter/X, LinkedIn, Print) and an Author avatar to `BlogPost.astro`.
4. **Media Embeds (Zero-Config):**
   - Switched content files to `.mdx` and configured MDX integration.
   - Globally exposed the `<YouTube id="..." />` and `<Tweet id="..." />` components so they can be dropped effortlessly into any article without manual imports.
5. **Vercel Deployment:**
   - Deployed to Vercel with SSR mode using `@astrojs/vercel` adapter.
   - Added `.npmrc` with `legacy-peer-deps=true` to resolve Keystatic/Astro 6 peer dependency conflict.
   - Auto-deploys on every `git push` to `main`.
6. **Keystatic CMS (WordPress-like Publishing):**
   - Installed `@keystatic/core` and `@keystatic/astro`.
   - Created `keystatic.config.ts` with GitHub storage mode pointing to `Sidshot/median-point`.
   - Blog collection schema includes: title, description, pubDate, author, category, tags, and MDX content with YouTube/Tweet components.
   - Created a GitHub App (`median-point`) for OAuth authentication.
   - Environment variables set in Vercel: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
   - **DO NOT commit `.env` to Git** — it contains secrets and is in `.gitignore`.

## Publishing Workflow
1. Go to https://median-point.vercel.app/keystatic
2. Log in with GitHub
3. Click "Blog Posts" → "+ Add"
4. Fill in title, description, date, author, tags
5. Write content in the visual editor (supports copy-paste from Word)
6. Use `/` command to insert YouTube or Tweet embeds
7. Click "Save" → Keystatic commits to GitHub → Vercel auto-deploys

## Important Notes
- **Astro 6 + Keystatic:** Keystatic officially supports Astro 2-5. We use `legacy-peer-deps` to work around this. The production build works fine, but the local dev server may show Vite errors on the `/keystatic` route. This doesn't affect the live site.
- **Local development:** Use `npm run dev` for the blog site. The Keystatic admin works best on the deployed Vercel URL.

## Next Session Action Items
- **Configure Forms:** 
  - Review the Formspree endpoint in `src/pages/contact.astro` and insert your actual Formspree ID.
  - Review the Substack/Mailchimp endpoint in `src/components/Footer.astro` to ensure it points to your actual newsletter link.
