import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as renderTemplate } from './entrypoint_4te5mXyS.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_-1Urarhd.mjs';
import { S as SITE_TITLE } from './consts_Dkp9vf7D.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `About | ${SITE_TITLE}`, "description": "About Median Point and its Author." })}${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow max-w-[720px] mx-auto px-4 py-12 w-full"> <h1 class="text-4xl font-black mb-8">About</h1> <div class="prose dark:prose-invert prose-lg block max-w-none font-serif leading-relaxed text-gray-800 dark:text-gray-200"> <p>
Welcome to <strong>Median Point</strong>, your premium destination for geopolitical analysis. 
					In an increasingly fragmented world, clarity is our most valuable asset. My name is Sid, and 
					I act as your guide through the interwoven narratives of international relations, economics, and 
					security.
</p> </div> <div class="mt-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-sm"> <h2 class="text-2xl font-bold mb-4 font-sans flex items-center"> <span class="bg-brand w-1.5 h-6 mr-3 block"></span>
Mission Statement
</h2> <p class="font-serif text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic mb-0">
"The 'Median Point' philosophy is rooted in finding the signal amidst the noise of global affairs. 
					We avoid sensationalism, prioritizing rigorous analysis, historical context, and objective forecasting 
					to navigate the true center of global power."
</p> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/IDE - My sites/Median Point IDE/src/pages/about.astro", void 0);

const $$file = "D:/IDE - My sites/Median Point IDE/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
