import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_B4R6OevK.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_7yIXDLJ0.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

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
      query GetPostBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `,
      variables: { id: slug }
    })
  });
  const { data } = await response.json();
  const post = data?.post;
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} | My Headless Site`, "data-astro-cid-gysqo7gh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="l-main" data-astro-cid-gysqo7gh> <article class="p-entry" data-astro-cid-gysqo7gh> <header class="p-entry__header" data-astro-cid-gysqo7gh> <div class="p-entry__meta" data-astro-cid-gysqo7gh> <time class="p-entry__date"${addAttribute(post.date, "datetime")} data-astro-cid-gysqo7gh> ${new Date(post.date).toLocaleDateString("ja-JP")} </time> </div> <h1 class="p-entry__title" data-astro-cid-gysqo7gh>${post.title}</h1> ${post.featuredImage && renderTemplate`<div class="p-entry__img" data-astro-cid-gysqo7gh> <img${addAttribute(post.featuredImage.node.sourceUrl, "src")} alt="" data-astro-cid-gysqo7gh> </div>`} </header>  <div class="p-entry__body" data-astro-cid-gysqo7gh>${unescapeHTML(post.content)}</div> <div class="p-entry__footer" data-astro-cid-gysqo7gh> <a href="/list" class="c-btn-back" data-astro-cid-gysqo7gh>記事一覧へ戻る</a> </div> </article> </main> ` })} `;
}, "C:/Users/Mottram/my-headless-site/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/Mottram/my-headless-site/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
