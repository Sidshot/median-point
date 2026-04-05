import { c as createComponent } from './astro-component_A_Ad7olw.mjs';
import 'piccolore';
import { m as maybeRenderHead, d as addAttribute, c as renderTemplate } from './entrypoint_4te5mXyS.mjs';
import 'clsx';

const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "D:/IDE - My sites/Median Point IDE/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
