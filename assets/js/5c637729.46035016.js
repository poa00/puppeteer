/*! For license information please see 5c637729.46035016.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9681],{39973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(85893),a=r(11151);const s={sidebar_label:"Frame.$eval"},i="Frame.$eval() method",l={id:"api/puppeteer.frame._eval",title:"Frame.$eval() method",description:"Runs the given function on the first element matching the given selector in the frame.",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.frame._eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame._eval",permalink:"/api/puppeteer.frame._eval",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"Frame.$eval"},sidebar:"api",previous:{title:"Frame.$$eval",permalink:"/api/puppeteer.frame.__eval"},next:{title:"Frame.$x",permalink:"/api/puppeteer.frame._x"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frameeval-method",children:"Frame.$eval() method"}),"\n",(0,n.jsx)(t.p,{children:"Runs the given function on the first element matching the given selector in the frame."}),"\n",(0,n.jsx)(t.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<\n      NodeFor<Selector>,\n      Params\n    >,\n  >(\n    selector: Selector,\n    pageFunction: string | Func,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"selector"}),(0,n.jsx)(t.td,{children:"Selector"}),(0,n.jsx)(t.td,{children:"The selector to query for."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pageFunction"}),(0,n.jsx)(t.td,{children:"string | Func"}),(0,n.jsx)(t.td,{children:"The function to be evaluated in the frame's context. The first element matching the selector will be passed to the function as its first argument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"args"}),(0,n.jsx)(t.td,{children:"Params"}),(0,n.jsxs)(t.td,{children:["Additional arguments to pass to ",(0,n.jsx)("code",{children:"pageFunction"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,n.jsx)(t.p,{children:"A promise to the result of the function."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const searchValue = await frame.$eval('#search', el => el.value);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!o.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);