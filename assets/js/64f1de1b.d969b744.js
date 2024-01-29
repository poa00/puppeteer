/*! For license information please see 64f1de1b.d969b744.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85151],{12574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(85893),a=n(11151);const o={sidebar_label:"ElementFor"},p="ElementFor type",s={id:"api/puppeteer.elementfor",title:"ElementFor type",description:"Signature:",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.elementfor.md",sourceDirName:"api",slug:"/api/puppeteer.elementfor",permalink:"/api/puppeteer.elementfor",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"ElementFor"},sidebar:"api",previous:{title:"devices",permalink:"/api/puppeteer.devices"},next:{title:"ElementScreenshotOptions",permalink:"/api/puppeteer.elementscreenshotoptions"}},i={},l=[{value:"Signature:",id:"signature",level:4}];function c(e){const t={code:"code",h1:"h1",h4:"h4",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementfor-type",children:"ElementFor type"}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type ElementFor<\n  TagName extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,\n> = TagName extends keyof HTMLElementTagNameMap\n  ? HTMLElementTagNameMap[TagName]\n  : TagName extends keyof SVGElementTagNameMap\n    ? SVGElementTagNameMap[TagName]\n    : never;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)p.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>p});var r=n(67294);const a={},o=r.createContext(a);function p(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:p(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);