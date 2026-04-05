import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, d as addAttribute, c as renderTemplate } from './entrypoint_4te5mXyS.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_-1Urarhd.mjs';
import { a as SITE_DESCRIPTION, S as SITE_TITLE } from './consts_Dkp9vf7D.mjs';
import { g as getCollection } from './_astro_content_BUxvRWWP.mjs';
import { $ as $$FormattedDate } from './FormattedDate_Z1l_JKty.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> <section class="mb-12 text-center py-20 px-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"> <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-4 text-base dark:text-base-dark">Median Point</h1> <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-serif italic max-w-2xl mx-auto">
"Navigating the Center of Global Power."
</p> </section> <section class="max-w-[720px] mx-auto px-4 pb-16"> <h2 class="text-2xl font-bold mb-8 flex items-center"> <span class="bg-brand dark:bg-brand-dark w-1.5 h-6 mr-3 block"></span>
Latest Insights
</h2> <ul class="space-y-10"> ${posts.map((post) => renderTemplate`<li class="group border-b border-gray-100 dark:border-gray-800 pb-10 last:border-0"> <a${addAttribute(`/blog/${post.id}/`, "href")} class="block no-underline"> <div class="text-sm text-brand dark:text-brand-dark font-sans font-bold uppercase tracking-wider mb-2"> ${post.data.category || "Analysis"} </div> <h3 class="text-3xl font-bold mb-3 group-hover:text-brand dark:group-hover:text-brand-dark transition-colors leading-tight"> ${post.data.title} </h3> <p class="text-lg text-gray-600 dark:text-gray-400 font-serif mb-4 line-clamp-3 leading-relaxed"> ${post.data.description} </p> <div class="text-sm text-gray-500 font-sans flex items-center"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} <span class="mx-2">•</span> <span>${post.data.author || "Sid"}</span> </div> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/IDE - My sites/Median Point IDE/src/pages/index.astro", void 0);

const $$file = "D:/IDE - My sites/Median Point IDE/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
