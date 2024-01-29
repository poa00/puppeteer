/*! For license information please see 32e72cac.c2301710.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19399],{60130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=r(85893),n=r(11151);const s={sidebar_label:"Page.createPDFStream"},i="Page.createPDFStream() method",o={id:"api/puppeteer.page.createpdfstream",title:"Page.createPDFStream() method",description:"Generates a PDF of the page with the print CSS media type.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.page.createpdfstream.md",sourceDirName:"api",slug:"/api/puppeteer.page.createpdfstream",permalink:"/api/puppeteer.page.createpdfstream",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"Page.createPDFStream"},sidebar:"api",previous:{title:"Page.createCDPSession",permalink:"/api/puppeteer.page.createcdpsession"},next:{title:"Page.deleteCookie",permalink:"/api/puppeteer.page.deletecookie"}},p={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"pagecreatepdfstream-method",children:"Page.createPDFStream() method"}),"\n",(0,a.jsxs)(t.p,{children:["Generates a PDF of the page with the ",(0,a.jsx)(t.code,{children:"print"})," CSS media type."]}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract createPDFStream(options?: PDFOptions): Promise<Readable>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"options"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/api/puppeteer.pdfoptions",children:"PDFOptions"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.em,{children:"(Optional)"})," options for generating the PDF."]})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<Readable>"}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(t.p,{children:["To generate a PDF with the ",(0,a.jsx)(t.code,{children:"screen"})," media type, call ",(0,a.jsx)(t.a,{href:"/api/puppeteer.page.emulatemediatype",children:"`page.emulateMediaType('screen')`"})," before calling ",(0,a.jsx)(t.code,{children:"page.pdf()"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.code,{children:"page.pdf()"})," generates a pdf with modified colors for printing. Use the ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust",children:"`-webkit-print-color-adjust`"})," property to force rendering of exact colors."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,s={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!p.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:d,ref:c,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(67294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);