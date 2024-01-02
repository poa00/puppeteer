/*! For license information please see a46e2631.430ca95e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63706],{14592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(85893),s=n(11151);const i={sidebar_label:"EventEmitter"},d="EventEmitter class",l={id:"api/puppeteer.eventemitter",title:"EventEmitter class",description:"The EventEmitter class that many Puppeteer classes extend.",source:"@site/../docs/api/puppeteer.eventemitter.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter",permalink:"/next/api/puppeteer.eventemitter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"EventEmitter"},sidebar:"api",previous:{title:"TimeoutError",permalink:"/next/api/puppeteer.timeouterror"},next:{title:"EventEmitter.addListener",permalink:"/next/api/puppeteer.eventemitter.addlistener"}},a={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"eventemitter-class",children:"EventEmitter class"}),"\n",(0,r.jsx)(t.p,{children:"The EventEmitter class that many Puppeteer classes extend."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare class EventEmitter<Events extends Record<EventType, unknown>> implements CommonEventEmitter<EventsWithWildcard<Events>>\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Implements:"})," ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.commoneventemitter",children:"CommonEventEmitter"}),"<",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>>"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["This allows you to listen to events that Puppeteer classes fire and act accordingly. Therefore you'll mostly use ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.on",children:"on"})," and ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.off",children:"off"})," to bind and unbind to event listeners."]}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"EventEmitter"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.addlistener",children:"addListener(type, handler)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Add an event listener."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.emit",children:"emit(type, event)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Emit an event and call any associated listeners."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.listenercount",children:"listenerCount(type)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Gets the number of listeners for a given event."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.off",children:"off(type, handler)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Remove an event listener from firing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.on",children:"on(type, handler)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Bind an event listener to fire when an event occurs."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.once",children:"once(type, handler)"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Like ",(0,r.jsx)("code",{children:"on"})," but the listener will only be fired once and then it will be removed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.removealllisteners",children:"removeAllListeners(type)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Removes all listeners. If given an event argument, it will remove only listeners for that event."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter.removelistener",children:"removeListener(type, handler)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Remove an event listener."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,i={},o=null,c=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var r=n(67294);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);