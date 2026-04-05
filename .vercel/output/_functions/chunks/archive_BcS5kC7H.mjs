import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, d as addAttribute, c as renderTemplate } from './entrypoint_4te5mXyS.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, r as renderScript } from './Footer_-1Urarhd.mjs';
import { S as SITE_TITLE } from './consts_Dkp9vf7D.mjs';
import { g as getCollection } from './_astro_content_BUxvRWWP.mjs';
import { $ as $$FormattedDate } from './FormattedDate_Z1l_JKty.mjs';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const regions = [...new Set(posts.map((post) => post.data.category || "Analysis"))];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Archive | ${SITE_TITLE}`, "description": "Browse the Median Point archive by region." })}${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow max-w-[720px] mx-auto px-4 py-12 w-full"> <h1 class="text-4xl font-black mb-8">Archive</h1> <div class="mb-10"> <h3 class="text-sm font-bold font-sans uppercase tracking-wider mb-3 text-gray-500">Filter by Region</h3> <div class="flex flex-wrap gap-2" id="filter-buttons"> <button class="filter-btn active bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-sans font-bold rounded-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition" data-region="all">
All
</button> ${regions.map((region) => renderTemplate`<button class="filter-btn bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 px-4 py-2 text-sm font-sans font-medium rounded-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"${addAttribute(region, "data-region")}> ${region} </button>`)} </div> </div> <ul class="space-y-6" id="archive-list"> ${posts.map((post) => renderTemplate`<li class="group border-b border-gray-100 dark:border-gray-800 pb-6 archive-item"${addAttribute(post.data.category || "Analysis", "data-region")}> <a${addAttribute(`/blog/${post.id}/`, "href")} class="block no-underline"> <div class="flex items-center justify-between mb-1"> <div class="text-xs text-brand dark:text-brand-dark font-sans font-bold uppercase tracking-wider bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded inline-block"> ${post.data.category || "Analysis"} </div> <div class="text-sm text-gray-500 font-sans"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </div> </div> <h3 class="text-xl font-bold mt-2 group-hover:text-brand dark:group-hover:text-brand-dark transition-colors leading-tight"> ${post.data.title} </h3> </a> </li>`)} </ul> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/IDE - My sites/Median Point IDE/src/pages/archive.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/IDE - My sites/Median Point IDE/src/pages/archive.astro", void 0);

const $$file = "D:/IDE - My sites/Median Point IDE/src/pages/archive.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Archive,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
