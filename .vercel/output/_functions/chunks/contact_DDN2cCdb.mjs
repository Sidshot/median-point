import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { r as renderComponent, b as renderHead, c as renderTemplate } from './entrypoint_4te5mXyS.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_-1Urarhd.mjs';
import { S as SITE_TITLE } from './consts_Dkp9vf7D.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Contact | ${SITE_TITLE}`, "description": "Contact Median Point for speaking and analysis inquiries." })}${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow max-w-[720px] mx-auto px-4 py-12 w-full"> <h1 class="text-4xl font-black mb-4">Contact</h1> <p class="text-xl text-gray-600 dark:text-gray-400 font-serif mb-10">
For speaking engagements, consulting, or general inquiries.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> <div class="md:col-span-2"> <form action="https://formspree.io/f/your_formspree_id" method="POST" class="space-y-6"> <div> <label for="name" class="block text-sm font-bold font-sans uppercase tracking-wide mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand font-sans dark:text-white"> </div> <div> <label for="email" class="block text-sm font-bold font-sans uppercase tracking-wide mb-2">Email Address</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand font-sans dark:text-white"> </div> <div> <label for="message" class="block text-sm font-bold font-sans uppercase tracking-wide mb-2">Message</label> <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand font-sans dark:text-white resize-y"></textarea> </div> <button type="submit" class="bg-brand hover:bg-red-800 text-white font-sans font-bold uppercase tracking-wider py-3 px-8 rounded-sm transition-colors w-full md:w-auto">
Send Message
</button> </form> </div> <div> <h3 class="text-lg font-bold font-sans uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Connect</h3> <ul class="space-y-4 font-sans"> <li> <a href="https://linkedin.com/" class="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand font-medium">LinkedIn</a> </li> <li> <a href="mailto:contact@medianpoint.com" class="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand font-medium">contact@medianpoint.com</a> </li> <li> <a href="https://twitter.com/medianpoint" class="text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand font-medium">X (Twitter)</a> </li> </ul> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/IDE - My sites/Median Point IDE/src/pages/contact.astro", void 0);

const $$file = "D:/IDE - My sites/Median Point IDE/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
