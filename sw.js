if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/arco-vendor-OEvToo8W.js",revision:null},{url:"assets/en-US-1uj3u8Th.js",revision:null},{url:"assets/es-ES-BSsPNZba.js",revision:null},{url:"assets/fr-FR-DkdHjMGW.js",revision:null},{url:"assets/highlight-vendor-B8Jra40s.js",revision:null},{url:"assets/index-BpiJHa9-.js",revision:null},{url:"assets/index-Df3K1o-s.css",revision:null},{url:"assets/react-vendor-C6Asy4-L.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/zh-CN-CNJyJefJ.js",revision:null},{url:"index.html",revision:"bbc453a2910cecfb78adfb2e8bb63682"},{url:"styles/loading.css",revision:"83707a709e3e73526a7e0a9095c59d3b"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
