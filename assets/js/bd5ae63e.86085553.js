/*! For license information please see bd5ae63e.86085553.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23],{65361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(85893),a=r(11151);const i={sidebar_label:"Predicate"},o="Predicate type",p={id:"api/puppeteer.predicate",title:"Predicate type",description:"Signature:",source:"@site/../docs/api/puppeteer.predicate.md",sourceDirName:"api",slug:"/api/puppeteer.predicate",permalink:"/next/api/puppeteer.predicate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Predicate"},sidebar:"api",previous:{title:"PredefinedNetworkConditions",permalink:"/next/api/puppeteer.predefinednetworkconditions"},next:{title:"Product",permalink:"/next/api/puppeteer.product"}},s={},c=[{value:"Signature:",id:"signature",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"predicate-type",children:"Predicate type"}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type Predicate<From, To extends From = From> =\n  | ((value: From) => value is To)\n  | ((value: From) => Awaitable<boolean>);\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/next/api/puppeteer.awaitable",children:"Awaitable"})]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:p.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>o});var n=r(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);