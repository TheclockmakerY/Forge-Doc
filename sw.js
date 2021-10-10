(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=y(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"16fb3532d39ff727e210e18c37857f23","url":"404.html"},{"revision":"cef4f53fbdf8178b6f5f0386ea5d8a8f","url":"assets/css/styles.8499c125.css"},{"revision":"37ead1fc519861e4af88c904b2e6d2d5","url":"assets/js/01a85c17.51b117d2.js"},{"revision":"47e32a85fbba0a7036e47a8d3d408126","url":"assets/js/0339aa28.7a5e9230.js"},{"revision":"3e4619a8fc6983d05a8349314e40ae86","url":"assets/js/06dd7867.afe9da3e.js"},{"revision":"5331a75e9cda3873f4a0d671559c3ccc","url":"assets/js/08ac8579.62985efb.js"},{"revision":"7afc0e39ec7fefca70931572d4bdae51","url":"assets/js/0ba3f265.b961f9b4.js"},{"revision":"02071b507a0da66d1c551fa9c8c119e8","url":"assets/js/0e384e19.001e6d96.js"},{"revision":"a75ac66e1420c718e2ab1a6366f132d9","url":"assets/js/17896441.771a0b89.js"},{"revision":"6f596aa5c7afd50708ab1f983915533a","url":"assets/js/18007095.2c963586.js"},{"revision":"50e5b5aebaa62ab863f05a05a48f6e94","url":"assets/js/1be78505.5e2f0caa.js"},{"revision":"0f64723ed51a448ca7a6f5a6fe260d11","url":"assets/js/1c4f1457.1a8f92c5.js"},{"revision":"0006fe6936d5f7dc3bc3fa6bce201956","url":"assets/js/1f391b9e.f69f18a9.js"},{"revision":"589f3f3b5b4b6e769fdb05069b8adcf5","url":"assets/js/2ed736ae.984c8e19.js"},{"revision":"437f80d66b63410aba0459b18eebc510","url":"assets/js/32d144c9.4b7a9c4e.js"},{"revision":"c145691a105be5a80c2c7c9e041bcdb4","url":"assets/js/3720c009.03fe8882.js"},{"revision":"be0f81204a95a3c0df9a1270bc1c0159","url":"assets/js/393be207.dc8e6a15.js"},{"revision":"e78ca6eb706b9684165f697a6608508a","url":"assets/js/395f6e3a.7b5ea96a.js"},{"revision":"1639fbba60cbfc68ab94107fce42e5e2","url":"assets/js/4608.8daf8b53.js"},{"revision":"fcdd966657d8ab9ad9f491af9acb5fa2","url":"assets/js/4852ba84.af9bb878.js"},{"revision":"bf0350094c7dc8061f93bc719a4ee05b","url":"assets/js/49141cf2.300fe639.js"},{"revision":"631f498774aba01eebee44c2c825740c","url":"assets/js/5131.817a014e.js"},{"revision":"24c9507d1182fd5490d511a95d30cf35","url":"assets/js/5410.51ab14bc.js"},{"revision":"1bfed4f713c08f1b4dae729444e42206","url":"assets/js/55960ee5.57431feb.js"},{"revision":"23ed041c322b258325cac3d4ddfed45d","url":"assets/js/57158644.984e6b86.js"},{"revision":"0ddd65f4dc69161ccf263d16a628999d","url":"assets/js/6403.2a21d758.js"},{"revision":"93f5309e89f0f915bd178eed380aed16","url":"assets/js/6698.62bb188c.js"},{"revision":"97d1bcf240fb3776c3b60d7e245d960d","url":"assets/js/6875c492.4723aa6a.js"},{"revision":"adfc39204826ffb143f18d2286a7775a","url":"assets/js/6b2346a3.38a5a3a4.js"},{"revision":"b5b3a7ac8bdeaae780cc7c3a0a745581","url":"assets/js/6ebfc125.30999a2b.js"},{"revision":"dc4c7be27e8e2336fa2db8a4a4250ac1","url":"assets/js/80f5e4fa.db046da9.js"},{"revision":"ca1c750a3da28bbc9596efbf7089d90c","url":"assets/js/814f3328.2d33d8bf.js"},{"revision":"b70e8fd3b9d13941097d24af9453e5d9","url":"assets/js/88c6804c.e425d40e.js"},{"revision":"96e2ce77a5a6f6dd30e523b13b229c45","url":"assets/js/8903e609.051a15af.js"},{"revision":"a422eb00bfd294643cd0b030932695cd","url":"assets/js/8c7972ff.01f2e744.js"},{"revision":"2d4af4228435a2dbd45d8715da403971","url":"assets/js/923.7ee9b2b8.js"},{"revision":"e435f6b6fee8e6c2572e5de3781ee9c0","url":"assets/js/935f2afb.1f37d74e.js"},{"revision":"bd4876c049e15923c0ee39cba5cac752","url":"assets/js/9429132a.f0250e26.js"},{"revision":"54cc3f6cc231f2b4a3e5dd0801e5d1b8","url":"assets/js/971286d5.7e9ea24a.js"},{"revision":"bde0b4207e0a5452d225b07a85c6e167","url":"assets/js/9c7fdbf6.870b2ae5.js"},{"revision":"06ff67f57f41dd11d2bc4565bba31b8c","url":"assets/js/9e4087bc.1a64a084.js"},{"revision":"f27fd975a2ccdb5ed0a2d93c5c1151a3","url":"assets/js/9ffc8b9a.0ec5e011.js"},{"revision":"29d097dab68dcb1e62a44e0764cc0023","url":"assets/js/a6aa9e1f.24fb1638.js"},{"revision":"55da3d6a7583c585d69e16386e874ea6","url":"assets/js/a7023ddc.e526b5d4.js"},{"revision":"7375e3859fb80d50995f91d90debf0f9","url":"assets/js/a98860cd.e9dc74f9.js"},{"revision":"d1713143dbc5d5034f12e297871d27ef","url":"assets/js/a9e12450.215a8db6.js"},{"revision":"e2013d0a9ab1f0b784871d79b78e0773","url":"assets/js/aaf1daa5.d5908d27.js"},{"revision":"7f303a83d5e9639789a428baa1620cbc","url":"assets/js/b11ca90c.8740f65f.js"},{"revision":"9f60ecdbe64ddbde77f15978f298518c","url":"assets/js/b2b675dd.ebc45063.js"},{"revision":"4d59fe407a46decec5232facb7a41432","url":"assets/js/b2f554cd.920a8bb1.js"},{"revision":"c58e3a05a6afe1d83a3927163faec5a5","url":"assets/js/bc88f846.f608ae2e.js"},{"revision":"ff6c7b2a1746bbe5864da67568e65deb","url":"assets/js/bf014bf2.a49a184c.js"},{"revision":"f4e36968ac065b17556ed205e2a48ffe","url":"assets/js/c4f5d8e4.e381d4f7.js"},{"revision":"850a479f39a5a8ae7f0b1a309b3472f1","url":"assets/js/ccc49370.eec17042.js"},{"revision":"cfe62efcd6cf4b1046201a7f97016c31","url":"assets/js/d49a1445.b5ad2178.js"},{"revision":"154d88de85552a2ff69f0e4f1e16685c","url":"assets/js/df203c0f.7394ff99.js"},{"revision":"ed5cca679b11195f7c76895ae71c93e5","url":"assets/js/e9f408b4.a6419447.js"},{"revision":"04c39f0a0dc899bc43aec3c5b929eb4f","url":"assets/js/f2f2efe7.0479f03b.js"},{"revision":"89077f3b6a8447d175e8175a813d7e39","url":"assets/js/main.47a0392a.js"},{"revision":"527bc1175afcc1a7046bfeecb555122b","url":"assets/js/runtime~main.fb86b956.js"},{"revision":"ce823830a63c74b9fcd0a09d67b82517","url":"blog/archive/index.html"},{"revision":"62a87e2ca0d88ebb9f7142616a1361cd","url":"blog/forge-116-362/index.html"},{"revision":"04d50bffe9dbd32192c3820dc896950d","url":"blog/forge-117-370/index.html"},{"revision":"36f943a1131ba33558434a36f998df54","url":"blog/index.html"},{"revision":"bf62bbf8229b3c94c50693f7cbab1d10","url":"blog/tags/1-16-5/index.html"},{"revision":"dc014158cac570ca36558ae1492ed32a","url":"blog/tags/1-17-1/index.html"},{"revision":"0360132aa64ac178904dc126993b6602","url":"blog/tags/forge/index.html"},{"revision":"7d6eecaad69a99eff2fe908c5bfca67e","url":"blog/tags/index.html"},{"revision":"8d3bfa8ce5cec486262deb95b54c91a5","url":"blog/tags/update/index.html"},{"revision":"6c4e43ecc82ea7e1ec16b6c216d8fb83","url":"docs/advanced/access-transformer/index.html"},{"revision":"c9b94cb6a727aa33fbd0658dcd62e745","url":"docs/advanced/dist-executor/index.html"},{"revision":"47e61ecc6962f3716b1183a91d10f4eb","url":"docs/bases/base_du_mod/index.html"},{"revision":"71ae6e2bdd32573febc64f02498fe2f8","url":"docs/bases/exporter-le-mod/index.html"},{"revision":"ee71f586f58f9b97247792ecc049e86e","url":"docs/bases/installation/index.html"},{"revision":"ea2ddc2ba5a3095cbd4c46ef37802d45","url":"docs/blocs/bloc-basic/index.html"},{"revision":"83583831a378e1d943c0ef89881599a4","url":"docs/blocs/properties/index.html"},{"revision":"bfff2925c489d57f24a3400e48963310","url":"docs/data/data_generator/index.html"},{"revision":"383f2f5f3dc87ea20b3c9b0a049ea754","url":"docs/data/recipe_data_generator/index.html"},{"revision":"4d08ebf5793250ba22f5c03c95164db6","url":"docs/intro/index.html"},{"revision":"842d7624c890c89318f55d37b946e020","url":"docs/items/item-basic/index.html"},{"revision":"c2f3d2580a560713fdbab08e298f367c","url":"docs/items/properties/index.html"},{"revision":"de6223cdb8dd33fdf99b4d8ab52eb4ca","url":"docs/register/deferred_register/index.html"},{"revision":"1c2ca23d433ac71bd7cde3d4bdb86e92","url":"docs/tags/avance/index.html"},{"revision":"15522f920b82e6f7f1c310b4c5d358e7","url":"docs/tags/bases/index.html"},{"revision":"0998c3ebf31fba7d18e798aa0e7ae9c9","url":"docs/tags/blocs/index.html"},{"revision":"2d6f87f284c96dffb35f9204b4c06b39","url":"docs/tags/data-generatos/index.html"},{"revision":"04563699b0e68b70f0c427d48bc318b8","url":"docs/tags/enregistrement/index.html"},{"revision":"80d6e917de5da13be5acb47d539f5606","url":"docs/tags/index.html"},{"revision":"eef3e9efc3190ea07ebd82c1ed677ec3","url":"docs/tags/introduction/index.html"},{"revision":"9009cdaab075bc5f689bf74c029cd4cd","url":"docs/tags/items/index.html"},{"revision":"e686790242a08d486bffbba2fbcdff7c","url":"docs/tags/proprietes/index.html"},{"revision":"4ef4c251766455c20f0aec34770ea67e","url":"faq/intro/index.html"},{"revision":"4a382a54e2dfae00ec0e927908b0697c","url":"faq/tags/index.html"},{"revision":"3996e8350fa927c44786120fc98e9294","url":"index.html"},{"revision":"f80dec2d4076d56d7deea7bf93e0e44e","url":"manifest.json"},{"revision":"186eb42404e13526c71a4c7aaa08801e","url":"markdown-page/index.html"},{"revision":"842ea3a3a6ee2f3e2cc7f0ddbff3627e","url":"assets/images/le_moddeur_ultime-2e81b939fe9ef4f1fe6e4a27f1938717.jpg"},{"revision":"88e78a62a091bba22ba8d8f4563d5070","url":"img/docs/exemple_craft_shaped.png"},{"revision":"59997f5229d5d5b38bbaac98d596ea41","url":"img/favicon.ico"},{"revision":"8d636572dafed78ac1aeb163ee116aa4","url":"img/icons/icon-128x128.png"},{"revision":"caafa06a8b3770cbfa8a14977612e6c1","url":"img/icons/icon-256x256.png"},{"revision":"26c9e9a5b20f4add80ca1fae7c08566e","url":"img/icons/icon-512x512.png"},{"revision":"e96a9a5d0ba709b54de2e9b25a65ed32","url":"img/icons/icon-64x64.png"},{"revision":"842ea3a3a6ee2f3e2cc7f0ddbff3627e","url":"img/le_moddeur_ultime.jpg"},{"revision":"2807337cf671833e2751019cfa6dd6dd","url":"img/logo.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();