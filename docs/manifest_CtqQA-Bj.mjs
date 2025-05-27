import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_5TcfeB0C.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/","cacheDir":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/node_modules/.astro/","outDir":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/","srcDir":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/","publicDir":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/public/","buildClientDir":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/client/","buildServerDir":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/server/","adapterName":"","routes":[{"file":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/essential-stretches-for-runners/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/essential-stretches-for-runners","isIndex":false,"type":"page","pattern":"^\\/blog\\/essential-stretches-for-runners\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"essential-stretches-for-runners","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/essential-stretches-for-runners.md","pathname":"/blog/essential-stretches-for-runners","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/finding-your-ideal-running-pace/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/finding-your-ideal-running-pace","isIndex":false,"type":"page","pattern":"^\\/blog\\/finding-your-ideal-running-pace\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"finding-your-ideal-running-pace","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/finding-your-ideal-running-pace.md","pathname":"/blog/finding-your-ideal-running-pace","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/getting-started-with-running/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/getting-started-with-running","isIndex":false,"type":"page","pattern":"^\\/blog\\/getting-started-with-running\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"getting-started-with-running","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/getting-started-with-running.md","pathname":"/blog/getting-started-with-running","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://shun-kohatsu582.github.io","base":"/runfun-blog-copilot","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/blog/essential-stretches-for-runners.md",{"propagation":"none","containsHead":true}],["/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/blog/finding-your-ideal-running-pace.md",{"propagation":"none","containsHead":true}],["/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/blog/getting-started-with-running.md",{"propagation":"none","containsHead":true}],["/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/essential-stretches-for-runners@_@md":"pages/blog/essential-stretches-for-runners.astro.mjs","\u0000@astro-page:src/pages/blog/finding-your-ideal-running-pace@_@md":"pages/blog/finding-your-ideal-running-pace.astro.mjs","\u0000@astro-page:src/pages/blog/getting-started-with-running@_@md":"pages/blog/getting-started-with-running.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CtqQA-Bj.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/runfun-blog-copilot/file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/about/index.html","/runfun-blog-copilot/file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/essential-stretches-for-runners/index.html","/runfun-blog-copilot/file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/finding-your-ideal-running-pace/index.html","/runfun-blog-copilot/file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/getting-started-with-running/index.html","/runfun-blog-copilot/file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/blog/index.html","/runfun-blog-copilot/file:///home/runner/work/runfun-blog-copilot/runfun-blog-copilot/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"e9C/Lj783+DTLtzd1P4fMnCt8YGdvAJW2wucUudx6Bw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
