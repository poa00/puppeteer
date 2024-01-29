/*! For license information please see cb8a72d1.984f0ba9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10761],{7471:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var n=t(85893),s=t(11151);const o={sidebar_label:"BrowserLaunchArgumentOptions"},i="BrowserLaunchArgumentOptions interface",d={id:"api/puppeteer.browserlaunchargumentoptions",title:"BrowserLaunchArgumentOptions interface",description:"Launcher options that only apply to Chrome.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.browserlaunchargumentoptions.md",sourceDirName:"api",slug:"/api/puppeteer.browserlaunchargumentoptions",permalink:"/api/puppeteer.browserlaunchargumentoptions",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"BrowserLaunchArgumentOptions"},sidebar:"api",previous:{title:"BrowserEvents",permalink:"/api/puppeteer.browserevents"},next:{title:"CDPEvents",permalink:"/api/puppeteer.cdpevents"}},c={},a=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"browserlaunchargumentoptions-interface",children:"BrowserLaunchArgumentOptions interface"}),"\n",(0,n.jsx)(r.p,{children:"Launcher options that only apply to Chrome."}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface BrowserLaunchArgumentOptions\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"args"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(r.td,{children:"string[]"}),(0,n.jsx)(r.td,{children:"Additional command line arguments to pass to the browser instance."}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"debuggingPort"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"Specify the debugging port number to use"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"devtools"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsxs)(r.td,{children:["Whether to auto-open a DevTools panel for each tab. If this is set to ",(0,n.jsx)("code",{children:"true"}),", then ",(0,n.jsx)("code",{children:"headless"})," will be forced to ",(0,n.jsx)("code",{children:"false"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"headless"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(r.td,{children:"boolean | 'new'"}),(0,n.jsx)(r.td,{children:"Whether to run the browser in headless mode."}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"true"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"userDataDir"}),(0,n.jsx)(r.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsxs)(r.td,{children:["Path to a user data directory. ",(0,n.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/user_data_dir.md",children:"see the Chromium docs"})," for more info."]}),(0,n.jsx)(r.td,{})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,o={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:d.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);