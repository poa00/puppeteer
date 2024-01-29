/*! For license information please see 2809a1b3.982f4d61.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23396],{65210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(85893),i=n(11151);const s={sidebar_label:"ElementHandle.isIntersectingViewport"},l="ElementHandle.isIntersectingViewport() method",o={id:"api/puppeteer.elementhandle.isintersectingviewport",title:"ElementHandle.isIntersectingViewport() method",description:"Resolves to true if the element is visible in the current viewport. If an element is an SVG, we check if the svg owner element is in the viewport instead. See https://crbug.com/963246.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.elementhandle.isintersectingviewport.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.isintersectingviewport",permalink:"/api/puppeteer.elementhandle.isintersectingviewport",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"ElementHandle.isIntersectingViewport"},sidebar:"api",previous:{title:"ElementHandle.isHidden",permalink:"/api/puppeteer.elementhandle.ishidden"},next:{title:"ElementHandle.isVisible",permalink:"/api/puppeteer.elementhandle.isvisible"}},a={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandleisintersectingviewport-method",children:"ElementHandle.isIntersectingViewport() method"}),"\n",(0,r.jsxs)(t.p,{children:["Resolves to true if the element is visible in the current viewport. If an element is an SVG, we check if the svg owner element is in the viewport instead. See ",(0,r.jsx)(t.a,{href:"https://crbug.com/963246",children:"https://crbug.com/963246"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  isIntersectingViewport(\n    this: ElementHandle<Element>,\n    options?: {\n      threshold?: number;\n    }\n  ): Promise<boolean>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"this"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Element>"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:"{ threshold?: number; }"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Threshold for the intersection between 0 (no intersection) and 1 (full intersection). Defaults to 1."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<boolean>"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:c,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(67294);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);