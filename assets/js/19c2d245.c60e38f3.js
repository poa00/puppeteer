/*! For license information please see 19c2d245.c60e38f3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2849],{64451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(85893),n=r(11151);const o={sidebar_label:"FileChooser.accept"},i="FileChooser.accept() method",c={id:"api/puppeteer.filechooser.accept",title:"FileChooser.accept() method",description:"Accept the file chooser request with the given file paths.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.filechooser.accept.md",sourceDirName:"api",slug:"/api/puppeteer.filechooser.accept",permalink:"/api/puppeteer.filechooser.accept",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"FileChooser.accept"},sidebar:"api",previous:{title:"FileChooser",permalink:"/api/puppeteer.filechooser"},next:{title:"FileChooser.cancel",permalink:"/api/puppeteer.filechooser.cancel"}},a={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"filechooseraccept-method",children:"FileChooser.accept() method"}),"\n",(0,s.jsx)(t.p,{children:"Accept the file chooser request with the given file paths."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class FileChooser {\n  accept(paths: string[]): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"paths"}),(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsx)(t.td,{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["This will not validate whether the file paths exists. Also, if a path is relative, then it is resolved against the ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/process.html#process_process_cwd",children:"current working directory"}),". For locals script connecting to remote chrome environments, paths must be absolute."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,o={},l=null,p=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,s)&&!a.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:p,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var s=r(67294);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);