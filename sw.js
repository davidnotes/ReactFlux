if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/en-US-CD3hYYdV.js",revision:null},{url:"assets/es-ES-DfoSseyR.js",revision:null},{url:"assets/index-CuurzGCR.css",revision:null},{url:"assets/index-DOb2SPKP.js",revision:null},{url:"assets/vendor-BduRoXZB.js",revision:null},{url:"assets/vendor-CbF1Di_m.css",revision:null},{url:"assets/zh-CN-BcGsx3tM.js",revision:null},{url:"index.html",revision:"0c705d51d8b7078c41065c276abc86d3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
