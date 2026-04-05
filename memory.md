# Median Point - Project State & Memory

## Current Status
- Project successfully initialized using **Astro 5** and **Tailwind CSS v4**.
- Base typography and styling are completed, mirroring elite geopolitical publications using the "Academic Modernism" aesthetic.
- The project is fully functional, type-safe, and offline-tested.

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

## Where We Stopped
- We successfully tested automated hot-reloading by writing and modifying the `Hormuz Strait.mdx` article.
- The user successfully added YouTube links and embedded images. 
- The local development server (`npm run dev`) was safely shut down to conclude the session.

## Next Session Action Items
- **Start the server:** Run `npm run dev` in the terminal to boot the site back up.
- **Write:** Continue drafting and formatting articles in the `src/content/blog/` directory. Keep ensuring that the frontmatter block (`---`) is properly closed and contains the exact `pubDate:` property.
- **Configure Forms:** 
  - Review the Formspree endpoint in `src/pages/contact.astro` and insert your actual Formspree ID.
  - Review the Substack/Mailchimp endpoint in `src/components/Footer.astro` to ensure it points to your actual newsletter link.
