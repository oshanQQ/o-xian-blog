if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise((async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},c=(c,i)=>{Promise.all(c.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(c)};self.define=(c,n,s)=>{i[c]||(i[c]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+c.slice(1)};return Promise.all(n.map((c=>{switch(c){case"exports":return i;case"module":return r;default:return e(c)}}))).then((e=>{const c=s(...e);return i.default||(i.default=c),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZrKUis091Z4MirWS2FjHK/_buildManifest.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/ZrKUis091Z4MirWS2FjHK/_ssgManifest.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/301-bc5b6dbc155b3ed0143c.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/framework-2f612445bd50b211f15a.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/main-a5db87ce56f4b042f8d3.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/pages/_app-808e7512a8cc31550585.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/pages/_error-ea939aab753d9e9db3bd.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/pages/index-d53c98f3a1187385000f.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-f199bb1bcd80ff3f9a8b.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/chunks/webpack-90a60b87fd0d5fc150f2.js",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/_next/static/css/cabb46bd3f9fbcce4c7c.css",revision:"ZrKUis091Z4MirWS2FjHK"},{url:"/android-chrome-128x128.png",revision:"c5a20685b0902507db54c019e2d369c1"},{url:"/android-chrome-144x144.png",revision:"c1cdd9f6a5e88bdc49421b32e978f2fe"},{url:"/android-chrome-152x152.png",revision:"568efe0e3b193eb01e5492aaf6262485"},{url:"/android-chrome-192x192.png",revision:"3320bd8907cade5308524b95f622111a"},{url:"/android-chrome-256x256.png",revision:"b2bcf31f06f42e77caeaf964d4c8c5f0"},{url:"/android-chrome-36x36.png",revision:"0b772c6bc58f9749dc5ad4a0701df379"},{url:"/android-chrome-384x384.png",revision:"0ca1b71c7b9c3c1373fffdd1a19febb8"},{url:"/android-chrome-48x48.png",revision:"61240e7c8c109fa5f398acfb3c6d6259"},{url:"/android-chrome-512x512.png",revision:"513885efac2bf4121604f21322a5827f"},{url:"/android-chrome-72x72.png",revision:"07bbcc142dcce39efcb7c24d77d6fe10"},{url:"/android-chrome-96x96.png",revision:"3c1a8b7c1b95bf9e8f1059fc7faa8725"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"611030e0d8d448979a725e2bfc0197c6"},{url:"/apple-touch-icon-114x114.png",revision:"611030e0d8d448979a725e2bfc0197c6"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"a7281044f1c6c3d8c7c8d52cdc12e6fc"},{url:"/apple-touch-icon-120x120.png",revision:"a7281044f1c6c3d8c7c8d52cdc12e6fc"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"c1cdd9f6a5e88bdc49421b32e978f2fe"},{url:"/apple-touch-icon-144x144.png",revision:"c1cdd9f6a5e88bdc49421b32e978f2fe"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"568efe0e3b193eb01e5492aaf6262485"},{url:"/apple-touch-icon-152x152.png",revision:"568efe0e3b193eb01e5492aaf6262485"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"3940cffff77ae5a2ca19ac7eefd80394"},{url:"/apple-touch-icon-180x180.png",revision:"3940cffff77ae5a2ca19ac7eefd80394"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"510c233f65aedd173f3497af5b70ec24"},{url:"/apple-touch-icon-57x57.png",revision:"510c233f65aedd173f3497af5b70ec24"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"b78b5feb75f009788fd29d98fa4aadfc"},{url:"/apple-touch-icon-60x60.png",revision:"b78b5feb75f009788fd29d98fa4aadfc"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"07bbcc142dcce39efcb7c24d77d6fe10"},{url:"/apple-touch-icon-72x72.png",revision:"07bbcc142dcce39efcb7c24d77d6fe10"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"9fb74691e2254d86382a278c6345c6d2"},{url:"/apple-touch-icon-76x76.png",revision:"9fb74691e2254d86382a278c6345c6d2"},{url:"/apple-touch-icon-precomposed.png",revision:"3940cffff77ae5a2ca19ac7eefd80394"},{url:"/apple-touch-icon.png",revision:"3940cffff77ae5a2ca19ac7eefd80394"},{url:"/favicon.ico",revision:"d44063912d5da7173d58dc675285e47a"},{url:"/icon-128x128.png",revision:"c5a20685b0902507db54c019e2d369c1"},{url:"/icon-144x144.png",revision:"c1cdd9f6a5e88bdc49421b32e978f2fe"},{url:"/icon-152x152.png",revision:"568efe0e3b193eb01e5492aaf6262485"},{url:"/icon-160x160.png",revision:"80e8aa38d165984eb5432ab47d60630f"},{url:"/icon-16x16.png",revision:"6c8fb98e8ea22eaddca416b5432696d8"},{url:"/icon-192x192.png",revision:"3320bd8907cade5308524b95f622111a"},{url:"/icon-196x196.png",revision:"9c3417ba3801082137f9ab0d3890d215"},{url:"/icon-24x24.png",revision:"8127cd9ddb739bfeff64ac850e0bbf9f"},{url:"/icon-256x256.png",revision:"b2bcf31f06f42e77caeaf964d4c8c5f0"},{url:"/icon-32x32.png",revision:"ff81abedc298d1918a7012cb5292791b"},{url:"/icon-36x36.png",revision:"0b772c6bc58f9749dc5ad4a0701df379"},{url:"/icon-384x384.png",revision:"0ca1b71c7b9c3c1373fffdd1a19febb8"},{url:"/icon-48x48.png",revision:"61240e7c8c109fa5f398acfb3c6d6259"},{url:"/icon-512x512.png",revision:"513885efac2bf4121604f21322a5827f"},{url:"/icon-72x72.png",revision:"07bbcc142dcce39efcb7c24d77d6fe10"},{url:"/icon-96x96.png",revision:"3c1a8b7c1b95bf9e8f1059fc7faa8725"},{url:"/manifest.json",revision:"73df75802f8991a2120260826a6486f1"},{url:"/site-tile-150x150.png",revision:"efd03291d7f662b1f4cdc0e0a0ca5636"},{url:"/site-tile-310x150.png",revision:"55c99902319a6849fae834744b3bce6a"},{url:"/site-tile-310x310.png",revision:"b033cbc78bc68467a26f86935b8ccd7f"},{url:"/site-tile-70x70.png",revision:"892928e7992336e60ced110b59920b41"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:i,state:n})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
