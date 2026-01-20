import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B4R6OevK.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_7yIXDLJ0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await fetch("https://xs688150.xsrv.jp/headless/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query GetLatestPosts {
        posts(first: 3) {
          nodes {
            id
            title
            slug
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
  const latestPosts = data.posts.nodes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TOP | My Headless Site", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<section class="p-hero" data-astro-cid-j7pv25f6> <div class="p-hero__inner" data-astro-cid-j7pv25f6> <h1 class="p-hero__title" data-astro-cid-j7pv25f6>Creative Frontend <br data-astro-cid-j7pv25f6>with Headless WP</h1> <p class="p-hero__text" data-astro-cid-j7pv25f6>AstroとWordPressを組み合わせた、爆速で自由なWeb制作。</p> </div> </section> <section class="p-top-posts" data-astro-cid-j7pv25f6> <div class="p-top-posts__inner" data-astro-cid-j7pv25f6> <div class="p-top-posts__head" data-astro-cid-j7pv25f6> <h2 class="c-sec-title" data-astro-cid-j7pv25f6>Latest News</h2> <a href="/list" class="c-btn" data-astro-cid-j7pv25f6>View All</a> </div> <div class="p-post-list" data-astro-cid-j7pv25f6> ${latestPosts.map((post) => renderTemplate`<article class="p-post-card" data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${post.slug}`, "href")} class="p-post-card__link" data-astro-cid-j7pv25f6> <div class="p-post-card__img" data-astro-cid-j7pv25f6> ${post.featuredImage ? renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} data-astro-cid-j7pv25f6>` : renderTemplate`<div class="c-no-image" data-astro-cid-j7pv25f6>No Image</div>`} </div> <div class="p-post-card__content" data-astro-cid-j7pv25f6> <time class="p-post-card__date" data-astro-cid-j7pv25f6>${new Date(post.date).toLocaleDateString()}</time> <h3 class="p-post-card__title" data-astro-cid-j7pv25f6>${post.title}</h3> </div> </a> </article>`)} </div> </div> </section> ` })} `;
}, "C:/Users/Mottram/my-headless-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/Mottram/my-headless-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
