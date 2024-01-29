/*! For license information please see 924f2ea8.83784d70.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25993],{77871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=r(85893),a=r(11151);const i={sidebar_label:"Frame.addScriptTag"},s="Frame.addScriptTag() method",d={id:"api/puppeteer.frame.addscripttag",title:"Frame.addScriptTag() method",description:"Adds a `` tag into the page with the desired url or content.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.frame.addscripttag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addscripttag",permalink:"/api/puppeteer.frame.addscripttag",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"Frame.addScriptTag"},sidebar:"api",previous:{title:"Frame.$x",permalink:"/api/puppeteer.frame._x"},next:{title:"Frame.addStyleTag",permalink:"/api/puppeteer.frame.addstyletag"}},p={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frameaddscripttag-method",children:"Frame.addScriptTag() method"}),"\n",(0,n.jsxs)(t.p,{children:["Adds a ",(0,n.jsx)(t.code,{children:"<script>"})," tag into the page with the desired url or content."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  addScriptTag(\n    options: FrameAddScriptTagOptions\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.frameaddscripttagoptions",children:"FrameAddScriptTagOptions"})}),(0,n.jsx)(t.td,{children:"Options for the script."})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLScriptElement>>"]}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,n.jsx)(t.code,{children:"<script>"})," element."]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,i={},o=null,c=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!p.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:o,ref:c,props:i,_owner:d.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);