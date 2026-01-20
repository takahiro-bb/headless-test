import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_B4R6OevK.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_7yIXDLJ0.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const response = await fetch("https://xs688150.xsrv.jp/headless/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query GetPageBySlug($id: ID!) {
        page(id: $id, idType: URI) {
          title
          content
        }
      }
    `,
      variables: { id: slug }
    })
  });
  const { data } = await response.json();
  const page = data?.page;
  if (!page) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `TOP | ${page.title}`, "data-astro-cid-yvbahnfj": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<main class="l-main" data-astro-cid-yvbahnfj><article class="p-page" data-astro-cid-yvbahnfj><h1 class="p-page__title" data-astro-cid-yvbahnfj>${page.title}</h1><div class="p-page__body" data-astro-cid-yvbahnfj>${unescapeHTML(page.content)}</div></article></main>` })}`;
}, "C:/Users/Mottram/my-headless-site/src/pages/[slug].astro", void 0);

const $$file = "C:/Users/Mottram/my-headless-site/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
