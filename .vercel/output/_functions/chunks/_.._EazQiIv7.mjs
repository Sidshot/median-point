import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as renderTemplate, e as renderSlot, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_4te5mXyS.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_BUxvRWWP.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, r as renderScript } from './Footer_-1Urarhd.mjs';
import { $ as $$Image } from './_astro_assets_Cg9oCcv_.mjs';
import { $ as $$FormattedDate } from './FormattedDate_Z1l_JKty.mjs';

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, author, category, tags } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow max-w-[720px] mx-auto px-4 py-12 w-full"> <article id="article-content"> <div class="mb-8 text-center pb-8 border-b border-gray-200 dark:border-gray-800"> ${category && renderTemplate`<div class="text-sm text-brand dark:text-brand-dark font-sans font-bold uppercase tracking-wider mb-4"> ${category} </div>`} <h1 class="text-4xl md:text-5xl font-black mb-6 leading-tight">${title}</h1> <div class="flex items-center justify-center text-sm text-gray-500 font-sans space-x-3 mb-2"> <div class="font-bold text-gray-800 dark:text-gray-200">${author || "Sid"}</div> <span>•</span> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} <span class="hidden md:inline">•</span> <div id="reading-time-display" class="font-medium text-brand dark:text-brand-dark hidden md:block"> <span id="reading-time">x</span> min read
</div> </div> ${updatedDate && renderTemplate`<div class="text-xs text-gray-400 italic mt-2">
Last updated: ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} </div> ${heroImage && renderTemplate`<div class="mb-10 w-full"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-auto rounded-sm", "width": 1020, "height": 510, "src": heroImage, "alt": "" })} </div>`} <div class="prose dark:prose-invert prose-lg md:prose-xl max-w-none font-serif leading-relaxed text-gray-800 dark:text-gray-200"> ${renderSlot($$result, $$slots["default"])} </div> ${tags && tags.length > 0 && renderTemplate`<div class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800"> <div class="flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<span class="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-sans font-bold uppercase tracking-wide px-3 py-1 rounded-sm">
#${tag} </span>`)} </div> </div>`} <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between no-print"> <div class="flex items-center space-x-3 mb-4 sm:mb-0"> <img${addAttribute(`https://ui-avatars.com/api/?name=${encodeURIComponent(author || "Sid")}&background=b91c1c&color=fff`, "src")}${addAttribute(author, "alt")} class="w-12 h-12 rounded-full border-2 border-gray-100 dark:border-gray-800"> <div> <div class="font-bold text-sm text-gray-900 dark:text-gray-100">${author || "Sid"}</div> <div class="text-xs text-gray-500 font-sans">Geopolitical Analyst</div> </div> </div> <div class="flex items-center space-x-3"> <span class="text-sm text-gray-500 font-sans font-medium uppercase tracking-wider mr-2">Share</span> <button onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(window.location.href), '_blank')" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors" aria-label="Share on Twitter"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg> </button> <button onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href), '_blank')" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors" aria-label="Share on LinkedIn"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </button> <button onclick="window.print()" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors" aria-label="Print article"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2h-6a2 2 0 00-2 2v4h10z"></path></svg> </button> </div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/IDE - My sites/Median Point IDE/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/IDE - My sites/Median Point IDE/src/layouts/BlogPost.astro", void 0);

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    style,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  const styles = [];
  if (style) styles.push(style);
  if (posterURL) styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": styles.join(";") }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lyt-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel || "Play"}</span> </a> ` })} ${renderScript($$result, "D:/IDE - My sites/Median Point IDE/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/IDE - My sites/Median Point IDE/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
const safeGet = makeSafeGetter((res) => res.json());
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(
            `Failed to fetch ${url}`,
            `Error ${response.status}: ${response.statusText}`
          )
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
      return void 0;
    }
  };
}

const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Tweet;
  const { id, theme = "light" } = Astro2.props;
  async function fetchTweet(id2, theme2 = "light") {
    const oembedUrl = new URL("https://publish.twitter.com/oembed");
    oembedUrl.searchParams.set("url", id2);
    oembedUrl.searchParams.set("omit_script", "true");
    oembedUrl.searchParams.set("dnt", "true");
    oembedUrl.searchParams.set("theme", theme2);
    return await safeGet(oembedUrl.href);
  }
  const tweet = await fetchTweet(id, theme);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "D:/IDE - My sites/Median Point IDE/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, { "components": { YouTube: $$YouTube, Tweet: $$Tweet } })} ` })}`;
}, "D:/IDE - My sites/Median Point IDE/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/IDE - My sites/Median Point IDE/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
