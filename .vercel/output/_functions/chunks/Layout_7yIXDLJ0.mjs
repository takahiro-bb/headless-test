import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, f as createAstro, l as renderHead, k as renderComponent, n as renderSlot } from './astro/server_B4R6OevK.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://xs688150.xsrv.jp/headless/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query GetMenu {
        menuItems(where: {location: PRIMARY}) {
          nodes {
            label
            uri
            connectedObject {
              __typename
              ... on Post {
                slug
              }
              ... on Page {
                slug
              }
            }
          }
        }
      }
    `
    })
  });
  const json = await response.json();
  const menuItems = json.data?.menuItems?.nodes || [];
  return renderTemplate`${maybeRenderHead()}<header class="l-header" data-astro-cid-3ef6ksr2> <div class="l-header__inner" data-astro-cid-3ef6ksr2> <a href="/" class="l-header__logo" data-astro-cid-3ef6ksr2>My Headless Site</a> <nav data-astro-cid-3ef6ksr2> <ul class="p-gnav" data-astro-cid-3ef6ksr2> ${menuItems.map((item) => {
    const type = item.connectedObject?.__typename;
    const slug = item.connectedObject?.slug;
    let href = "";
    if (type === "Post") {
      href = `/posts/${slug}`;
    } else if (type === "Page") {
      href = `/${slug}`;
    } else {
      href = item.uri.replace("https://xs688150.xsrv.jp/headless", "");
    }
    return renderTemplate`<li class="p-gnav__item" data-astro-cid-3ef6ksr2> <a${addAttribute(href, "href")} class="p-gnav__link" data-astro-cid-3ef6ksr2>${item.label}</a> </li>`;
  })} </ul> </nav> </div> </header> `;
}, "C:/Users/Mottram/my-headless-site/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Mottram/my-headless-site/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
