if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let i = Promise.resolve();
      return (
        r[e] ||
          (i = new Promise(async (i) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = i);
            } else importScripts(e), i();
          })),
        i.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    i = (i, r) => {
      Promise.all(i.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = {require: Promise.resolve(i)};
  self.define = (i, n, s) => {
    r[i] ||
      (r[i] = Promise.resolve().then(() => {
        let r = {};
        const a = {uri: location.origin + i.slice(1)};
        return Promise.all(
          n.map((i) => {
            switch (i) {
              case "exports":
                return r;
              case "module":
                return a;
              default:
                return e(i);
            }
          })
        ).then((e) => {
          const i = s(...e);
          return r.default || (r.default = i), r;
        });
      }));
  };
}
define("./sw.js", ["./workbox-ea903bce"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/Z9tZXWZ6fHT254M9e3ziS/_buildManifest.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/Z9tZXWZ6fHT254M9e3ziS/_ssgManifest.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/346-816869c9800faabcc7cf.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/78e521c3-7536b4eb14d8db150358.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/framework-0441fae7fd130f37dee1.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/main-b5e2aedae0a71e6390ea.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/pages/_app-5d2da0cd508ac3bdcbd1.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/pages/index-820462b591a46c8ec85d.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/chunks/webpack-20d43e08bea62467b090.js",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/css/cbd5c23672575b36a0ca.css",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/media/background-dark.eeccbc37f41457cb44907f47bd214880.jpeg",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
        },
        {
          url: "/_next/static/media/background-light.1f8c31464ccccdeaedf6c3f29c715502.jpg",
          revision: "Z9tZXWZ6fHT254M9e3ziS",
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
          revision: "454e818a780f43ed41ad7e5363848af1",
        },
        {
          url: "/cloud-function-go.png",
          revision: "7b2905376507f98a737f578fb18c5d94",
        },
        {
          url: "/dependency-report-optimized.gif",
          revision: "aeb36d141a60cb1a6006b71cd44d8a88",
        },
        {
          url: "/dependency-report.gif",
          revision: "ac581fe5ce1d53cb1f54106a21eb7d64",
        },
        {
          url: "/devicon/angular.svg",
          revision: "d881b28e95d2b7f224ffda214b43086c",
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
          revision: "372d1e68bd6a35b9c76753ddced10993",
        },
        {url: "/devicon/npm.svg", revision: "c9ec3ecc87c4d47e961e10642b1397cd"},
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
          url: "/devicon/typescript.svg",
          revision: "5e5bfe703238e5e2e39929b5f1039e1b",
        },
        {
          url: "/devicon/vercel.svg",
          revision: "4b4f1876502eb6721764637fe5c41702",
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
          url: "/empresas-angular.png",
          revision: "78db09927b6be71df8587e644d8eabf0",
        },
        {url: "/favicon.jpg", revision: "a663af999d906920deec7e2c610e9ebd"},
        {url: "/favicon.png", revision: "8f2c46a8067e8fdbc5dac3066e4f147a"},
        {url: "/format-code.png", revision: "48c72e8678a8016897b25e2b011b8bf7"},
        {
          url: "/geleia-total.gif",
          revision: "159c91a42ec7dc0477e547436230d8f1",
        },
        {
          url: "/landing-page-book.png",
          revision: "3d06bd655543657909c69dfc5fe45a2c",
        },
        {url: "/manifest.json", revision: "0ffd09baf736460d967c6351224e3252"},
        {
          url: "/mapa-aborto-legal.gif",
          revision: "b4faaafe4ccc5528dee8e04bd164c41f",
        },
        {
          url: "/material-time-picker.gif",
          revision: "926e78400e88a357b8a7b2f95a998b56",
        },
        {url: "/me-2.png", revision: "437fb394c8918dd38f540c9a3df2e336"},
        {url: "/me.png", revision: "7f02c7a064a0c4ec8e445f16363b4947"},
        {
          url: "/my-agenda-cultural.gif",
          revision: "ec62b57d8c8603dc5887af6d174cbed6",
        },
        {
          url: "/personal-blog.png",
          revision: "1615afe9e762129e86fc986d2dd4f986",
        },
        {url: "/post-1.png", revision: "8fd3ec0b2a6d42ff63ab418ee27d629b"},
        {url: "/post-2.png", revision: "28ee095b9cb51c2f42d58884ff3dad40"},
        {url: "/post-3.png", revision: "f9943ba0523f0d844bdbe094db089711"},
        {
          url: "/pwa/icon-144.png",
          revision: "7032343847405c6a59741b2752a2ddb9",
        },
        {
          url: "/pwa/icon-192.png",
          revision: "c142208ce7faecd16c30b15cd38f817e",
        },
        {
          url: "/pwa/icon-512.png",
          revision: "39c8d2727e4740995610c1936d736472",
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
              event: r,
              state: n,
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
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
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
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
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
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
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
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
