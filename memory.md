# Median Point - Project State & Memory

## Current Status
- **Live Site:** https://median-point.vercel.app
- **CMS Dashboard:** https://median-point.vercel.app/keystatic
- **Tech Stack:** Astro 6, Tailwind CSS v4, MDX, Keystatic CMS, Vercel (SSR mode)
- **GitHub Repo:** https://github.com/Sidshot/median-point
- Base typography and styling are completed, mirroring elite geopolitical publications using the "Academic Modernism" aesthetic.
- **Copyright Level Style:** The name "MEDIAN POINT" must **always** be rendered in **Blue** (`text-blue-700 dark:text-blue-500`) wherever it appears across the entire site — homepage, footer, about page, blog layout, etc. Uniformity is essential.
- **3D Logo (Homepage):** The homepage masthead uses a pure CSS glassmorphism logo (`src/components/GlassLogo.astro`). Features: frosted glass card with `backdrop-filter: blur`, blue gradient text, ambient glow, animated shimmer sweep, hover lift effect. No JavaScript — renders instantly with zero hydration flash. Fully adapts to light/dark mode.

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
7. **Build & Image Fixes:**
   - Switched Vercel adapter output to `static` for optimal performance.
   - Removed `.vercel` folder from git tracking to prevent build cache conflicts.
   - Configured Keystatic to globally save images dynamically into the `public/images/blog` directory to enable seamless drag-and-drop support that works instantly with Astro's MDX renderer without broken paths.
8. **Comprehensive SEO Architecture:**
   - Generated `sitemap-index.xml` via `@astrojs/sitemap`.
   - Created `robots.txt` allowing all crawlers and pointing to the sitemap.
   - Added explicit `<meta name="robots" content="index, follow...">` to all pages.
   - Implemented dynamic JSON-LD structured data (`NewsArticle` for blog posts, `WebSite` and `SearchAction` for homepage) to enable Google rich results, Google News compatibility, and sitelinks search box.
   - Configured `og:type="article"` with `article:published_time`, author, and tags for optimal social sharing.
8. **Enhanced Article Editor (Rich Formatting & Embeds):**
   - **Auto-Embed URLs:** Added `astro-embed/integration` — paste a YouTube, Twitter/X, Vimeo, or Bluesky URL on its own line in the editor and it auto-renders as a rich embed on the live site. No slash commands needed.
   - **Instagram & Facebook:** Manual embed components via `/` menu in editor (Instagram uses oEmbed, Facebook uses FB SDK).
   - **Text Formatting:** Highlight (mark text like a yellow marker), TextSize wrapper (small/normal/large/xlarge).
   - **Editorial Components (all via `/` slash menu in Keystatic):**
     - Callout Box — 4 variants: Info (blue), Warning (amber), Important (red), Tip (green). Good for Editor's Notes, Breaking News, etc.
     - Pull Quote — Large, centered, decorative quote with optional attribution. Different from blockquote.
     - Section Divider — 3 styles: ornamental (diamond), plain, dotted.
     - Image with Caption — `<figure>` with styled caption, photo credit, and optional full-width toggle.
     - Info/Fact Box — Sidebar-style card for key facts and data summaries.
     - Related Reading — Inline link card for cross-referencing other articles.
   - All components support dark mode.
   - Components defined in `keystatic.config.ts` using `@keystatic/core/content-components` (`block`, `wrapper`, `mark`).
   - Frontend components in `src/components/editorial/` and `src/components/embeds/`.
   - Components wired in `src/pages/blog/[...slug].astro` via the `components` prop.
   - Styles in `src/styles/global.css`.

## Publishing Workflow
1. Go to https://median-point.vercel.app/keystatic
2. Log in with GitHub
3. Click "Blog Posts" → "+ Add"
4. Fill in title, description, date, author, tags
5. Write content in the visual editor (supports copy-paste from Word)
6. **Images:** Drag and drop images directly into the text editor. They will automatically upload and display correctly on the live site.
7. **Social Embeds (Auto):** Paste a YouTube, Vimeo, or Bluesky URL on its own line. It will automatically render as a rich embed on the live site.
8. **Social Embeds (Manual):** Use `/` command to insert Twitter/X, Instagram, or Facebook embeds. (Twitter auto-embed disabled due to API blocking; must use the `/` menu block).
9. **Formatting:** Use `/` command to insert Callout Box, Pull Quote, Text Size, Divider, Info Box, Image with Caption, Related Reading, or select text and apply Highlight.
10. **Deleting Blocks:** To delete any block component, click it so it gets a blue outline, then press `Backspace` or `Delete` on your keyboard.
11. Click "Save" → Keystatic commits to GitHub → Vercel auto-deploys

## Important Notes
- **Data Migration (Crucial):** On June 19, 2026, the Keystatic schema was massively upgraded to support rich SEO metadata (`seoTitle`, `seoDescription`), custom `coverImage`, and `isDraft` toggles. Existing articles (created before this date) will render normally, but to use these new fields or fully migrate them to the new schema, you simply need to open them in Keystatic and click "Save".
- **Astro 6 + Keystatic:** Keystatic officially supports Astro 2-5. We use `legacy-peer-deps` to work around this. The production build works fine, but the local dev server may show Vite errors on the `/keystatic` route or when redirecting after GitHub Auth. This doesn't affect the live site.
- **Images:** Legacy manually added images may break if the path isn't perfectly configured. From now on, just drag and drop via the Editor, and it will handle the markdown path automatically.
- **Local development:** Use `npm run dev` for the blog site. The Keystatic admin works best on the deployed Vercel URL.
- **Auto-Embed Quirk:** Only URLs on their own line (not inside a paragraph) get auto-converted. Inline links remain as normal links.

## Next Session Action Items
- **Configure Forms:** 
  - Review the Formspree endpoint in `src/pages/contact.astro` and insert your actual Formspree ID.
  - Review the Substack/Mailchimp endpoint in `src/components/Footer.astro` to ensure it points to your actual newsletter link.

