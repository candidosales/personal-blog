if (!self.define) {
  let e,
    i = {};
  const a = (a, s) => (
    (a = new URL(a + ".js", s).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let r = {};
    const o = (e) => a(e, c),
      d = {module: {uri: c}, exports: r, require: o};
    i[c] = Promise.all(s.map((e) => d[e] || o(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-6a1bf588"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/611-ad563c1fa5419eae.js",
          revision: "ad563c1fa5419eae",
        },
        {
          url: "/_next/static/chunks/78e521c3-295aefbf2453a713.js",
          revision: "295aefbf2453a713",
        },
        {
          url: "/_next/static/chunks/d0447323-4bee88b99f0714ea.js",
          revision: "4bee88b99f0714ea",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-2f34e298b26b423f.js",
          revision: "2f34e298b26b423f",
        },
        {
          url: "/_next/static/chunks/pages/_app-2b28fe1212dad490.js",
          revision: "2b28fe1212dad490",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/index-d6184cb4ed946774.js",
          revision: "d6184cb4ed946774",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-7e0a04d6d1a844f2.js",
          revision: "7e0a04d6d1a844f2",
        },
        {
          url: "/_next/static/css/027138218cf9f416.css",
          revision: "027138218cf9f416",
        },
        {
          url: "/_next/static/fVUI_m5e3CRSeDJIreO49/_buildManifest.js",
          revision: "87d31acc7fe490abd8176981c7b57209",
        },
        {
          url: "/_next/static/fVUI_m5e3CRSeDJIreO49/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/background-dark.bbd7c169.jpeg",
          revision: "bbd7c169",
        },
        {
          url: "/_next/static/media/background-light.b26372f5.jpg",
          revision: "b26372f5",
        },
        {
          url: "/_next/static/media/questrial-all-400-normal.2516b91a.woff",
          revision: "2516b91a",
        },
        {
          url: "/_next/static/media/questrial-latin-400-normal.221a17ee.woff2",
          revision: "221a17ee",
        },
        {
          url: "/_next/static/media/questrial-latin-ext-400-normal.e07800a6.woff2",
          revision: "e07800a6",
        },
        {
          url: "/_next/static/media/questrial-vietnamese-400-normal.830a06b4.woff2",
          revision: "830a06b4",
        },
        {
          url: "/articles/post-1.png",
          revision: "8fd3ec0b2a6d42ff63ab418ee27d629b",
        },
        {
          url: "/articles/post-2.png",
          revision: "28ee095b9cb51c2f42d58884ff3dad40",
        },
        {
          url: "/articles/post-3.png",
          revision: "f9943ba0523f0d844bdbe094db089711",
        },
        {
          url: "/articles/post-medicina.jpeg",
          revision: "03eba00ae6aa4e1ab40004250f3d1663",
        },
        {
          url: "/articles/post-organize-figma.webp",
          revision: "d77349d63b82eb31a5932a4d923f649d",
        },
        {
          url: "/articles/post-strapi-digital-ocean.webp",
          revision: "08f477e18723dc9ff0570402afca2d33",
        },
        {
          url: "/articles/post-strapi-railway.jpeg",
          revision: "09b1f5f6b88ce5d6fa0889f774744983",
        },
        {
          url: "/articles/post-strapi-railway.webp",
          revision: "f2174e79f004d7ca34c26e1f36f0aabf",
        },
        {
          url: "/background-dark.jpeg",
          revision: "b4d64cd8550e5657544b3dc4b7af6ca5",
        },
        {
          url: "/background-dark.png",
          revision: "63ce301ab1d3f1bdf1a3a058365632fb",
        },
        {
          url: "/background-light.jpg",
          revision: "d9f94d312ebe066f3f44a98e1cfd42f6",
        },
        {url: "/background.jpg", revision: "748d4eb0763a9bf1fa439b7a17d16773"},
        {
          url: "/card-social-media-1200.png",
          revision: "d76159819c7378be34fc6b25c667258a",
        },
        {
          url: "/devicon/adplist-icon.svg",
          revision: "8113382560bc210beb898ef729fafe4d",
        },
        {
          url: "/devicon/adplist.svg",
          revision: "6268fc55109427e5ce79a157d9743b4e",
        },
        {
          url: "/devicon/angular.svg",
          revision: "d881b28e95d2b7f224ffda214b43086c",
        },
        {
          url: "/devicon/astro.svg",
          revision: "8c3ab42f2617093af28a968486ea7ad2",
        },
        {
          url: "/devicon/bootstrap.svg",
          revision: "ef464025ab2713c6b9c58d29faf9e8cd",
        },
        {
          url: "/devicon/chakra-ui.svg",
          revision: "c1e816730197517b6977fda1c8ee0ec9",
        },
        {
          url: "/devicon/devto.svg",
          revision: "cae872c87a77bff0ddad2f47178901d8",
        },
        {
          url: "/devicon/digitalocean.svg",
          revision: "afbe56a197b08944a8753e25ecf67f42",
        },
        {
          url: "/devicon/docker.svg",
          revision: "ff73f4ac316925d0bd9a6ac3f96c1097",
        },
        {
          url: "/devicon/figma.svg",
          revision: "5469474802f827aed53a4776548411e1",
        },
        {
          url: "/devicon/firebase.svg",
          revision: "e82ac0d543eef3eee95655e430f8645c",
        },
        {
          url: "/devicon/github.svg",
          revision: "1485b113bf9651afdb50d96465e3e983",
        },
        {url: "/devicon/go.svg", revision: "974a75814a1339c82cb497ea1ab56383"},
        {
          url: "/devicon/google-cloud.svg",
          revision: "0e67159c560419d29c39a8c2d72bbe27",
        },
        {
          url: "/devicon/netlify.svg",
          revision: "41555d529c6dac488b4292fe55632cad",
        },
        {
          url: "/devicon/nextjs.svg",
          revision: "8bed324391af60e266ba29523a45e6af",
        },
        {url: "/devicon/npm.svg", revision: "c9ec3ecc87c4d47e961e10642b1397cd"},
        {
          url: "/devicon/partytown.svg",
          revision: "2418e2f5dd5a5a527ae417a26d6c04cc",
        },
        {url: "/devicon/php.svg", revision: "a33a27344c0f16ef0545481cbb9e7419"},
        {url: "/devicon/pwa.svg", revision: "f2a8c28208e6f6ff42dd00f9c2737945"},
        {
          url: "/devicon/rails.svg",
          revision: "9381a4729b2a47ba531d87aba9795a00",
        },
        {
          url: "/devicon/react.svg",
          revision: "42c60246d6cc083be05201c7ae581092",
        },
        {
          url: "/devicon/ruby.svg",
          revision: "913e833558509f26312e57461aef663c",
        },
        {
          url: "/devicon/sass.svg",
          revision: "03f6561f5624ee2f1419f973dae38241",
        },
        {
          url: "/devicon/supabase.svg",
          revision: "357c209cd8c6fa1c20761fe5486aac22",
        },
        {
          url: "/devicon/svelte.svg",
          revision: "a44d391a11f4ebc63d538c5f98b2c37e",
        },
        {
          url: "/devicon/tailwind.svg",
          revision: "0596c723c20edd4b27d05af0d4b4fe9c",
        },
        {
          url: "/devicon/typescript.svg",
          revision: "5e5bfe703238e5e2e39929b5f1039e1b",
        },
        {
          url: "/devicon/upstash.svg",
          revision: "df41f8bb3e67d1b4d40e08bc4e2f7e23",
        },
        {
          url: "/devicon/vercel.svg",
          revision: "ee5c56fe3eee4d431c633793aa1f8052",
        },
        {
          url: "/devicon/vite.svg",
          revision: "5d1b52185429a0d414c5861617e99513",
        },
        {
          url: "/devicon/webpack.svg",
          revision: "6fcc12a3fa21c99066dada06fca0068e",
        },
        {
          url: "/devicon/wordpress.svg",
          revision: "e101d94609765a0090b32bb49f094143",
        },
        {
          url: "/extras/my-agenda-cultural.gif",
          revision: "ec62b57d8c8603dc5887af6d174cbed6",
        },
        {
          url: "/extras/receituario-medico.png",
          revision: "567b880838b7dc74f130e46a8fd06459",
        },
        {url: "/favicon.png", revision: "8f2c46a8067e8fdbc5dac3066e4f147a"},
        {
          url: "/hobbies/carnauba-radiante.webp",
          revision: "9c089ef392abe5ddfec3fa5c345d0616",
        },
        {
          url: "/hobbies/desert-flower.webp",
          revision: "6bc1a13d7f9bf8cc5f7fba01734b0883",
        },
        {
          url: "/hobbies/horizon.webp",
          revision: "7dbbb2b0167e15de5cc10049ffcb6971",
        },
        {
          url: "/hobbies/salvation.webp",
          revision: "7c670f0206dbcd5a7a724e8936283c5f",
        },
        {
          url: "/hobbies/sunflower.webp",
          revision: "86ccd224cdddd4a2fb559135a5dc5e62",
        },
        {url: "/manifest.json", revision: "0ffd09baf736460d967c6351224e3252"},
        {url: "/me-2.png", revision: "437fb394c8918dd38f540c9a3df2e336"},
        {
          url: "/portfolio/cloud-function-go.png",
          revision: "19ae186dd51bbfb3992e4444498debcd",
        },
        {
          url: "/portfolio/dependency-report-optimized.gif",
          revision: "aeb36d141a60cb1a6006b71cd44d8a88",
        },
        {
          url: "/portfolio/dependency-report.gif",
          revision: "ac581fe5ce1d53cb1f54106a21eb7d64",
        },
        {
          url: "/portfolio/empresas-angular.png",
          revision: "78db09927b6be71df8587e644d8eabf0",
        },
        {
          url: "/portfolio/figma-plugin-svelte-vite.png",
          revision: "22181a6649e559aeb6547c312bb4cc4b",
        },
        {
          url: "/portfolio/format-code.png",
          revision: "cf2fa7b16de295d078f1ba535439ae76",
        },
        {
          url: "/portfolio/landing-page-book-1v.png",
          revision: "3d06bd655543657909c69dfc5fe45a2c",
        },
        {
          url: "/portfolio/landing-page-book-2v.jpg",
          revision: "0d0134e83c02ca9daf884bc1556a2bc7",
        },
        {
          url: "/portfolio/material-time-picker.gif",
          revision: "926e78400e88a357b8a7b2f95a998b56",
        },
        {
          url: "/portfolio/personal-blog.png",
          revision: "1615afe9e762129e86fc986d2dd4f986",
        },
        {
          url: "/pwa/icon-144.png",
          revision: "f144a2f39efbeaf372daa9306d579794",
        },
        {
          url: "/pwa/icon-192.png",
          revision: "24b03f2bae1de89044beedf6453465c3",
        },
        {
          url: "/pwa/icon-512.png",
          revision: "69c024a41a587898218c48998ba91a4b",
        },
        {
          url: "/volunteer/geleia-total.gif",
          revision: "159c91a42ec7dc0477e547436230d8f1",
        },
        {
          url: "/volunteer/mapa-aborto-legal.gif",
          revision: "b4faaafe4ccc5528dee8e04bd164c41f",
        },
        {
          url: "/were-not-really-strangers.png",
          revision: "337d49064040510dfd6808621a81a09e",
        },
      ],
      {ignoreURLParametersMatching: []}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: a,
              state: s,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({url: e}) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600}),
        ],
      }),
      "GET"
    );
});
