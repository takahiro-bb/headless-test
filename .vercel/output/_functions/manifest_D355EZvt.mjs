import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_B4R6OevK.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D686mqal.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Mottram/my-headless-site/","cacheDir":"file:///C:/Users/Mottram/my-headless-site/node_modules/.astro/","outDir":"file:///C:/Users/Mottram/my-headless-site/dist/","srcDir":"file:///C:/Users/Mottram/my-headless-site/src/","publicDir":"file:///C:/Users/Mottram/my-headless-site/public/","buildClientDir":"file:///C:/Users/Mottram/my-headless-site/dist/client/","buildServerDir":"file:///C:/Users/Mottram/my-headless-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".p-contact[data-astro-cid-uw5kdbxl]{max-width:800px;margin:0 auto;padding:60px 20px}.p-contact__title[data-astro-cid-uw5kdbxl]{font-size:2.5rem;text-align:center;margin-bottom:40px}.p-form__item[data-astro-cid-uw5kdbxl]{margin-bottom:24px}.p-form__item[data-astro-cid-uw5kdbxl] label[data-astro-cid-uw5kdbxl]{display:block;margin-bottom:8px;font-weight:700}.p-form__item[data-astro-cid-uw5kdbxl] input[data-astro-cid-uw5kdbxl],.p-form__item[data-astro-cid-uw5kdbxl] textarea[data-astro-cid-uw5kdbxl]{width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:16px}.p-form__item[data-astro-cid-uw5kdbxl] input[data-astro-cid-uw5kdbxl]:focus,.p-form__item[data-astro-cid-uw5kdbxl] textarea[data-astro-cid-uw5kdbxl]:focus{outline:none;border-color:#333}.c-btn-submit[data-astro-cid-uw5kdbxl]{width:100%;padding:16px;background:#333;color:#fff;border:none;border-radius:4px;font-size:1rem;font-weight:700;cursor:pointer;transition:opacity .3s}.c-btn-submit[data-astro-cid-uw5kdbxl]:hover{opacity:.8}.c-btn-submit[data-astro-cid-uw5kdbxl]:disabled{background:#ccc;cursor:not-allowed}.p-form-msg[data-astro-cid-uw5kdbxl]{padding:30px;text-align:center;border-radius:4px}.p-form-msg[data-astro-cid-uw5kdbxl].--success{background:#f0fdf4;color:#166534;border:1px solid #bbf7d0}.p-form-msg[data-astro-cid-uw5kdbxl].--error{background:#fef2f2;color:#991b1b;border:1px solid #fecaca}.c-btn-back[data-astro-cid-uw5kdbxl]{display:inline-block;margin-top:20px;color:#333;text-decoration:underline}\n.l-header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid #eee}.l-header__inner[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;max-width:1000px;margin:0 auto;padding:20px}.p-gnav[data-astro-cid-3ef6ksr2]{display:flex;gap:20px;list-style:none}.p-gnav__link[data-astro-cid-3ef6ksr2]{text-decoration:none;color:#333}.p-gnav__link[data-astro-cid-3ef6ksr2]:hover{color:#0073aa}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".p-post-list[data-astro-cid-ibjr7xao]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px;padding:40px}.p-post-list[data-astro-cid-ibjr7xao] .p-post-card[data-astro-cid-ibjr7xao]{border:1px solid #eee;box-shadow:0 4px 12px #0000000d;text-decoration:none;color:inherit;transition:transform .2s}.p-post-list[data-astro-cid-ibjr7xao] .p-post-card[data-astro-cid-ibjr7xao]:hover{transform:translateY(-5px)}.p-post-list[data-astro-cid-ibjr7xao] .p-post-card__img[data-astro-cid-ibjr7xao] img[data-astro-cid-ibjr7xao]{width:100%;aspect-ratio:16/9;object-fit:cover}.p-post-list[data-astro-cid-ibjr7xao] .p-post-card__content[data-astro-cid-ibjr7xao]{padding:20px}.p-post-list[data-astro-cid-ibjr7xao] .p-post-card__title[data-astro-cid-ibjr7xao]{font-size:1.25rem;margin-bottom:10px;color:#333}.p-post-list[data-astro-cid-ibjr7xao] .p-post-card__date[data-astro-cid-ibjr7xao]{font-size:.9rem;color:#888}.c-no-image[data-astro-cid-ibjr7xao]{aspect-ratio:16/9;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#ccc}\n.l-header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid #eee}.l-header__inner[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;max-width:1000px;margin:0 auto;padding:20px}.p-gnav[data-astro-cid-3ef6ksr2]{display:flex;gap:20px;list-style:none}.p-gnav__link[data-astro-cid-3ef6ksr2]{text-decoration:none;color:#333}.p-gnav__link[data-astro-cid-3ef6ksr2]:hover{color:#0073aa}\n"}],"routeData":{"route":"/posts/list","isIndex":false,"type":"page","pattern":"^\\/posts\\/list\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"list","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/list.astro","pathname":"/posts/list","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".p-entry[data-astro-cid-gysqo7gh]{max-width:800px;margin:0 auto;padding:60px 20px}.p-entry__meta[data-astro-cid-gysqo7gh]{margin-bottom:15px}.p-entry__date[data-astro-cid-gysqo7gh]{font-size:.9rem;color:#888}.p-entry__title[data-astro-cid-gysqo7gh]{font-size:clamp(1.75rem,4vw,2.5rem);line-height:1.3;margin-bottom:30px}.p-entry__img[data-astro-cid-gysqo7gh]{margin-bottom:40px}.p-entry__img[data-astro-cid-gysqo7gh] img[data-astro-cid-gysqo7gh]{width:100%;height:auto;border-radius:8px}.p-entry__body[data-astro-cid-gysqo7gh]{line-height:1.9;color:#333}.p-entry__body[data-astro-cid-gysqo7gh] h2{font-size:1.75rem;margin:2.5em 0 1em;padding-bottom:10px;border-bottom:2px solid #eee}.p-entry__body[data-astro-cid-gysqo7gh] h3{font-size:1.4rem;margin:2em 0 1em}.p-entry__body[data-astro-cid-gysqo7gh] p{margin-bottom:1.8rem}.p-entry__body[data-astro-cid-gysqo7gh] img{max-width:100%;height:auto;margin:20px 0}.p-entry__footer[data-astro-cid-gysqo7gh]{margin-top:60px;padding-top:40px;border-top:1px solid #eee;text-align:center}.c-btn-back[data-astro-cid-gysqo7gh]{display:inline-block;padding:12px 40px;background:#333;color:#fff;text-decoration:none;font-size:.9rem;border-radius:4px;transition:opacity .3s}.c-btn-back[data-astro-cid-gysqo7gh]:hover{opacity:.8}\n.l-header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid #eee}.l-header__inner[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;max-width:1000px;margin:0 auto;padding:20px}.p-gnav[data-astro-cid-3ef6ksr2]{display:flex;gap:20px;list-style:none}.p-gnav__link[data-astro-cid-3ef6ksr2]{text-decoration:none;color:#333}.p-gnav__link[data-astro-cid-3ef6ksr2]:hover{color:#0073aa}\n"}],"routeData":{"route":"/posts/[slug]","isIndex":false,"type":"page","pattern":"^\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/posts/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".p-page[data-astro-cid-yvbahnfj]{max-width:1000px;margin:0 auto;padding:80px 20px}.p-page__title[data-astro-cid-yvbahnfj]{font-size:2.5rem;text-align:center;margin-bottom:60px}.p-page__body[data-astro-cid-yvbahnfj]{line-height:1.8}.p-page__body[data-astro-cid-yvbahnfj] p{margin-bottom:1.5em}\n.l-header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid #eee}.l-header__inner[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;max-width:1000px;margin:0 auto;padding:20px}.p-gnav[data-astro-cid-3ef6ksr2]{display:flex;gap:20px;list-style:none}.p-gnav__link[data-astro-cid-3ef6ksr2]{text-decoration:none;color:#333}.p-gnav__link[data-astro-cid-3ef6ksr2]:hover{color:#0073aa}\n"}],"routeData":{"route":"/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".c-sec-title[data-astro-cid-j7pv25f6]{font-size:2rem;font-weight:700;letter-spacing:.05em;position:relative;padding-bottom:15px}.c-sec-title[data-astro-cid-j7pv25f6]:after{content:\"\";position:absolute;left:0;bottom:0;width:60px;height:4px;background:#333}.c-btn[data-astro-cid-j7pv25f6]{display:inline-block;padding:10px 30px;border:1px solid #333;text-decoration:none;color:#333;font-size:.9rem;transition:all .3s}.c-btn[data-astro-cid-j7pv25f6]:hover{background:#333;color:#fff}.p-hero[data-astro-cid-j7pv25f6]{background:#f8f9fa;padding:120px 20px;text-align:center}.p-hero__title[data-astro-cid-j7pv25f6]{font-size:clamp(2rem,5vw,4rem);line-height:1.2;margin-bottom:20px}.p-hero__text[data-astro-cid-j7pv25f6]{color:#666}.p-top-posts[data-astro-cid-j7pv25f6]{padding:80px 20px}.p-top-posts__inner[data-astro-cid-j7pv25f6]{max-width:1200px;margin:0 auto}.p-top-posts__head[data-astro-cid-j7pv25f6]{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px}.p-post-list[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px}.p-post-card__link[data-astro-cid-j7pv25f6]{text-decoration:none;color:inherit;display:block}.p-post-card__link[data-astro-cid-j7pv25f6]:hover .p-post-card__img[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{transform:scale(1.05)}.p-post-card__img[data-astro-cid-j7pv25f6]{aspect-ratio:16/9;overflow:hidden;background:#eee}.p-post-card__img[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.p-post-card__content[data-astro-cid-j7pv25f6]{padding-top:15px}.p-post-card__date[data-astro-cid-j7pv25f6]{font-size:.85rem;color:#888}.p-post-card__title[data-astro-cid-j7pv25f6]{font-size:1.1rem;margin-top:5px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.l-header[data-astro-cid-3ef6ksr2]{border-bottom:1px solid #eee}.l-header__inner[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;max-width:1000px;margin:0 auto;padding:20px}.p-gnav[data-astro-cid-3ef6ksr2]{display:flex;gap:20px;list-style:none}.p-gnav__link[data-astro-cid-3ef6ksr2]{text-decoration:none;color:#333}.p-gnav__link[data-astro-cid-3ef6ksr2]:hover{color:#0073aa}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Mottram/my-headless-site/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Mottram/my-headless-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Mottram/my-headless-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Mottram/my-headless-site/src/pages/posts/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Mottram/my-headless-site/src/pages/posts/list.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/posts/list@_@astro":"pages/posts/list.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D355EZvt.mjs","C:/Users/Mottram/my-headless-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BEdFy_cO.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"Pj8jKZbCLtDsFEL3MGHdmHv+AnyknY8ECvostJrVZ4A="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
