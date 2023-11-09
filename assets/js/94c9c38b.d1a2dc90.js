"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12993],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var u=2;u<i;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58170:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={sidebar_label:"PuppeteerNode.trimCache"},a="PuppeteerNode.trimCache() method",c={unversionedId:"api/puppeteer.puppeteernode.trimcache",id:"version-21.5.1/api/puppeteer.puppeteernode.trimcache",title:"PuppeteerNode.trimCache() method",description:"Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless configuration.browserRevision is provided.",source:"@site/versioned_docs/version-21.5.1/api/puppeteer.puppeteernode.trimcache.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.trimcache",permalink:"/api/puppeteer.puppeteernode.trimcache",draft:!1,tags:[],version:"21.5.1",frontMatter:{sidebar_label:"PuppeteerNode.trimCache"},sidebar:"api",previous:{title:"PuppeteerNode.launch",permalink:"/api/puppeteer.puppeteernode.launch"},next:{title:"Puppeteer.clearCustomQueryHandlers",permalink:"/api/puppeteer.puppeteer.clearcustomqueryhandlers"}},u={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],s={toc:l};function d(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"puppeteernodetrimcache-method"}),"PuppeteerNode.trimCache() method"),(0,n.kt)("p",null,"Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,n.kt)("inlineCode",{parentName:"p"},"configuration.browserRevision")," is provided."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class PuppeteerNode {\n  trimCache(): Promise<void>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Note that the method does not check if any other Puppeteer versions installed on the host that use the same cache directory require the non-current binaries."))}d.isMDXComponent=!0}}]);