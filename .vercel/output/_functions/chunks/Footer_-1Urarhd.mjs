import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { f as createRenderInstruction, c as renderTemplate, d as addAttribute, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, r as renderComponent } from './entrypoint_4te5mXyS.mjs';
import 'clsx';
import { S as SITE_TITLE } from './consts_Dkp9vf7D.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/IDE - My sites/Median Point IDE/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', '><!-- Font preloads --><!-- Fonts are self-hosted via fontsource --><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- Theme Script --><script>\n  const theme = (() => {\n    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n      return localStorage.getItem('theme');\n    }\n    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n      return 'dark';\n    }\n    return 'light';\n  })();\n  if (theme === 'dark') {\n    document.documentElement.classList.add('dark');\n  } else {\n    document.documentElement.classList.remove('dark');\n  }\n<\/script>"])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.src, Astro2.url), "content"));
}, "D:/IDE - My sites/Median Point IDE/src/components/BaseHead.astro", void 0);

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "D:/IDE - My sites/Median Point IDE/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="progress-container" class="fixed top-0 left-0 w-full h-[3px] z-50 bg-transparent pointer-events-none"> <div id="progress-bar" class="h-full bg-brand dark:bg-brand-dark w-0 transition-[width] duration-150 ease-out"></div> </div> <header class="border-b border-gray-200 dark:border-gray-800 bg-bg/90 dark:bg-bg-dark/90 sticky top-0 z-40 backdrop-blur"> <nav class="max-w-[720px] mx-auto px-4 py-4 flex items-center justify-between"> <h2 class="font-sans font-black text-xl tracking-tight"> <a href="/" class="text-base dark:text-base-dark hover:text-brand dark:hover:text-brand-dark transition-colors no-underline"> ${SITE_TITLE} </a> </h2> <div class="flex items-center space-x-6 font-sans text-sm font-medium"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-dark" }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/archive", "class": "text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-dark" }, { "default": ($$result2) => renderTemplate`Archive` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-dark" }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "class": "text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-dark" }, { "default": ($$result2) => renderTemplate`Contact` })} <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors" aria-label="Toggle dark mode"> <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> </button> </div> </nav> </header> ${renderScript($$result, "D:/IDE - My sites/Median Point IDE/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/IDE - My sites/Median Point IDE/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-4 mt-auto"> <div class="max-w-[720px] mx-auto text-center"> <div class="mb-12 bg-white dark:bg-gray-800 p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-700"> <h3 class="text-2xl md:text-3xl font-black mb-3 text-base dark:text-base-dark">Subscribe to the Newsletter</h3> <p class="text-base md:text-lg font-serif text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
A weekly dispatch on the center of global power. No spam, only signal.
</p> <!-- Mailchimp/Substack Form --> <form action="https://medianpoint.substack.com/subscribe" method="GET" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"> <input type="email" name="email" placeholder="Your email address" required class="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-brand focus:outline-none text-base dark:text-base-dark font-sans"> <button type="submit" class="bg-brand hover:bg-brand-dark text-white font-bold uppercase tracking-wider text-sm px-6 py-3 transition-colors shrink-0">
Subscribe
</button> </form> </div> <div class="text-sm text-gray-500 font-sans">
&copy; ${today.getFullYear()} Median Point. All rights reserved.
</div> </div> </footer>`;
}, "D:/IDE - My sites/Median Point IDE/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b, renderScript as r };
