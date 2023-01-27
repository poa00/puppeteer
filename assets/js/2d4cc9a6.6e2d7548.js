"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"Page.waitForSelector"},l="Page.waitForSelector() method",p={unversionedId:"api/puppeteer.page.waitforselector",id:"version-19.6.2/api/puppeteer.page.waitforselector",title:"Page.waitForSelector() method",description:"Wait for the selector to appear in page. If at the moment of calling the method the selector already exists, the method will return immediately. If the selector doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-19.6.2/api/puppeteer.page.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforselector",permalink:"/api/puppeteer.page.waitforselector",draft:!1,tags:[],version:"19.6.2",frontMatter:{sidebar_label:"Page.waitForSelector"},sidebar:"api",previous:{title:"Page.waitForResponse",permalink:"/api/puppeteer.page.waitforresponse"},next:{title:"Page.waitForTimeout",permalink:"/api/puppeteer.page.waitfortimeout"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:c};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"pagewaitforselector-method"}),"Page.waitForSelector() method"),(0,n.kt)("p",null,"Wait for the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," to appear in page. If at the moment of calling the method the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," already exists, the method will return immediately. If the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," doesn't appear after the ",(0,n.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,n.kt)("p",null,"This method works across navigations:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"selector"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Selector"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A ",(0,n.kt)("a",a({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"}),"selector")," of an element to wait for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.waitforselectoroptions"}),"WaitForSelectorOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.nodefor"}),"NodeFor"),"<","Selector",">",">"," ","|"," null",">"),(0,n.kt)("p",null,"Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if waiting for hidden: ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," and selector is not found in DOM."),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The optional Parameter in Arguments ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"visible"),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",(0,n.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"hidden"),": Wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,n.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"timeout"),": maximum time to wait for in milliseconds. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.page.setdefaulttimeout"}),"Page.setDefaultTimeout()")," method."))))}u.isMDXComponent=!0}}]);