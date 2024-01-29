/*! For license information please see cff98906.95b891bd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39101],{39426:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var t=s(85893),r=s(11151);const o={sidebar_label:"CDPSession.send"},i="CDPSession.send() method",d={id:"api/puppeteer.cdpsession.send",title:"CDPSession.send() method",description:"Signature:",source:"@site/versioned_docs/version-21.10.0/api/puppeteer.cdpsession.send.md",sourceDirName:"api",slug:"/api/puppeteer.cdpsession.send",permalink:"/api/puppeteer.cdpsession.send",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{sidebar_label:"CDPSession.send"},sidebar:"api",previous:{title:"CDPSession.id",permalink:"/api/puppeteer.cdpsession.id"},next:{title:"Coverage",permalink:"/api/puppeteer.coverage"}},a={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cdpsessionsend-method",children:"CDPSession.send() method"}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class CDPSession {\n  abstract send<T extends keyof ProtocolMapping.Commands>(\n    method: T,\n    params?: ProtocolMapping.Commands[T]['paramsType'][0],\n    options?: CommandOptions\n  ): Promise<ProtocolMapping.Commands[T]['returnType']>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"method"}),(0,t.jsx)(n.td,{children:"T"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"params"}),(0,t.jsx)(n.td,{children:"ProtocolMapping.Commands[T]['paramsType'][0]"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/api/puppeteer.commandoptions",children:"CommandOptions"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<ProtocolMapping.Commands[T]['returnType']>"})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,n,s)=>{var t=s(67294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,s){var t,o={},p=null,c=null;for(t in void 0!==s&&(p=""+s),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:r,type:e,key:p,ref:c,props:o,_owner:d.current}}n.Fragment=o,n.jsx=p,n.jsxs=p},85893:(e,n,s)=>{e.exports=s(75251)},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var t=s(67294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);