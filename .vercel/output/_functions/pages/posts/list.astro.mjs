import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_B4R6OevK.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_7yIXDLJ0.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$List = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://xs688150.xsrv.jp/headless/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query GetPosts {
        posts {
          nodes {
            id
            title
            slug  # \u30EA\u30F3\u30AF\u306B\u4F7F\u3046\u306E\u3067\u5FC5\u9808
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `
    })
  });
  const { data } = await response.json();
  const posts = data.posts.nodes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8A18\u4E8B\u4E00\u89A7", "data-astro-cid-ibjr7xao": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ibjr7xao> <h1 class="c-title" data-astro-cid-ibjr7xao>記事一覧</h1> <div class="p-post-list" data-astro-cid-ibjr7xao> ${posts.map((post) => renderTemplate`<article class="p-post-card" data-astro-cid-ibjr7xao>  <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-ibjr7xao> <div class="p-post-card__img" data-astro-cid-ibjr7xao> ${post.featuredImage ? renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} data-astro-cid-ibjr7xao>` : renderTemplate`<div class="c-no-image" data-astro-cid-ibjr7xao>No Image</div>`} </div> <div class="p-post-card__content" data-astro-cid-ibjr7xao> <h2 class="p-post-card__title" data-astro-cid-ibjr7xao>${post.title}</h2> <time class="p-post-card__date" data-astro-cid-ibjr7xao>${new Date(post.date).toLocaleDateString()}</time> </div> </a> </article>`)} </div> </main> ` })} `;
}, "C:/Users/Mottram/my-headless-site/src/pages/posts/list.astro", void 0);

const $$file = "C:/Users/Mottram/my-headless-site/src/pages/posts/list.astro";
const $$url = "/posts/list";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$List,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
