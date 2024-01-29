/*! For license information please see 95a5794d.67c71470.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53790],{21235:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(85893),a=t(11151);const o={sidebar_label:"Coverage.startJSCoverage"},n="Coverage.startJSCoverage() method",i={id:"api/puppeteer.coverage.startjscoverage",title:"Coverage.startJSCoverage() method",description:"Signature:",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.coverage.startjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.startjscoverage",permalink:"/api/puppeteer.coverage.startjscoverage",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"Coverage.startJSCoverage"},sidebar:"api",previous:{title:"Coverage.startCSSCoverage",permalink:"/api/puppeteer.coverage.startcsscoverage"},next:{title:"Coverage.stopCSSCoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage"}},c={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"coveragestartjscoverage-method",children:"Coverage.startJSCoverage() method"}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Coverage {\n  startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"options"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.jscoverageoptions",children:"JSCoverageOptions"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," Set of configurable options for coverage defaults to ",(0,s.jsx)("code",{children:"resetOnNavigation : true, reportAnonymousScripts : false,"})," ",(0,s.jsx)("code",{children:"includeRawScriptCoverage : false, useBlockCoverage : true"})]})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.p,{children:"Promise that resolves when coverage is started."}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,s.jsx)(r.code,{children:"eval"})," or ",(0,s.jsx)(r.code,{children:"new Function"}),". If ",(0,s.jsx)(r.code,{children:"reportAnonymousScripts"})," is set to ",(0,s.jsx)(r.code,{children:"true"}),", anonymous scripts URL will start with ",(0,s.jsx)(r.code,{children:"debugger://VM"})," (unless a magic //# sourceURL comment is present, in which case that will the be URL)."]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var s=t(67294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,o={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:a,type:e,key:d,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>n});var s=t(67294);const a={},o=s.createContext(a);function n(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);