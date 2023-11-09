"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49562],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),g=a,b=f["".concat(i,".").concat(g)]||f[g]||c[g]||o;return t?n.createElement(b,p(p({ref:r},l),{},{components:t})):n.createElement(b,p({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var u=2;u<o;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>l});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={sidebar_label:"Browser.userAgent"},s="Browser.userAgent() method",i={unversionedId:"api/puppeteer.browser.useragent",id:"version-21.5.1/api/puppeteer.browser.useragent",title:"Browser.userAgent() method",description:"Gets this browser's original user agent.",source:"@site/versioned_docs/version-21.5.1/api/puppeteer.browser.useragent.md",sourceDirName:"api",slug:"/api/puppeteer.browser.useragent",permalink:"/api/puppeteer.browser.useragent",draft:!1,tags:[],version:"21.5.1",frontMatter:{sidebar_label:"Browser.userAgent"},sidebar:"api",previous:{title:"Browser.targets",permalink:"/api/puppeteer.browser.targets"},next:{title:"Browser.version",permalink:"/api/puppeteer.browser.version"}},u={},l=[{value:"Signature:",id:"signature",level:4}],c={toc:l};function f(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"browseruseragent-method"}),"Browser.userAgent() method"),(0,n.kt)("p",null,"Gets this ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.browser"}),"browser's")," original user agent."),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page"}),"Pages")," can override the user agent with ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setuseragent"}),"Page.setUserAgent()"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  userAgent(): Promise<string>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","string",">"))}f.isMDXComponent=!0}}]);