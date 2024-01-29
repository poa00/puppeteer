/*! For license information please see 0afb7086.16c69efb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93282],{10376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(85893),a=n(11151);const r={sidebar_label:"Page.emulateVisionDeficiency"},s="Page.emulateVisionDeficiency() method",o={id:"api/puppeteer.page.emulatevisiondeficiency",title:"Page.emulateVisionDeficiency() method",description:"Simulates the given vision deficiency on the page.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.page.emulatevisiondeficiency.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatevisiondeficiency",permalink:"/api/puppeteer.page.emulatevisiondeficiency",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"Page.emulateVisionDeficiency"},sidebar:"api",previous:{title:"Page.emulateTimezone",permalink:"/api/puppeteer.page.emulatetimezone"},next:{title:"Page.evaluate",permalink:"/api/puppeteer.page.evaluate"}},c={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pageemulatevisiondeficiency-method",children:"Page.emulateVisionDeficiency() method"}),"\n",(0,i.jsx)(t.p,{children:"Simulates the given vision deficiency on the page."}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateVisionDeficiency(\n    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']\n  ): Promise<void>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.em,{children:"(Optional)"})," the type of deficiency to simulate, or ",(0,i.jsx)("code",{children:"'none'"})," to reset."]})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://v8.dev/blog/10-years');\n\n  await page.emulateVisionDeficiency('achromatopsia');\n  await page.screenshot({path: 'achromatopsia.png'});\n\n  await page.emulateVisionDeficiency('deuteranopia');\n  await page.screenshot({path: 'deuteranopia.png'});\n\n  await page.emulateVisionDeficiency('blurredVision');\n  await page.screenshot({path: 'blurred-vision.png'});\n\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var i=n(67294),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var i,r={},p=null,l=null;for(i in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:p,ref:l,props:r,_owner:o.current}}t.Fragment=r,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);