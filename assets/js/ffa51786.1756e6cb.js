/*! For license information please see ffa51786.1756e6cb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87665],{15952:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=i(85893),s=i(11151);const l={},t="Experimental WebDriver BiDi support",o={id:"webdriver-bidi",title:"Experimental WebDriver BiDi support",description:"WebDriver BiDi is a new cross-browser",source:"@site/versioned_docs/version-21.10.0/webdriver-bidi.md",sourceDirName:".",slug:"/webdriver-bidi",permalink:"/webdriver-bidi",draft:!1,unlisted:!1,tags:[],version:"21.10.0",frontMatter:{},sidebar:"docs",previous:{title:"Puppeteer Angular Schematic",permalink:"/integrations/ng-schematics"},next:{title:"Chromium Support",permalink:"/chromium-support"}},d={},c=[{value:"Automate with Chrome and Firefox",id:"automate-with-chrome-and-firefox",level:2},{value:"Measuring progress",id:"measuring-progress",level:2},{value:"Get started",id:"get-started",level:2},{value:"Puppeteer features supported over WebDriver BiDi",id:"puppeteer-features-supported-over-webdriver-bidi",level:2},{value:"Puppeteer features not yet supported over WebDriver BiDi",id:"puppeteer-features-not-yet-supported-over-webdriver-bidi",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"experimental-webdriver-bidi-support",children:"Experimental WebDriver BiDi support"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"})," is a new cross-browser\nautomation protocol currently under development, aiming to combine the best of both WebDriver \u201cClassic\u201d and CDP. WebDriver BiDi promises bi-directional communication, making it fast by default, and it comes packed with low-level control."]}),"\n",(0,n.jsx)(r.p,{children:"See also:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://developer.chrome.com/articles/webdriver-bidi/",children:"WebDriver BiDi - The future of cross-browser automation"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/webdriver-bidi-2023/",children:"WebDriver BiDi: 2023 status update"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"automate-with-chrome-and-firefox",children:"Automate with Chrome and Firefox"}),"\n",(0,n.jsx)(r.p,{children:"Puppeteer supports WebDriver BiDi automation with Chrome and Firefox."}),"\n",(0,n.jsxs)(r.p,{children:["Firefox integration is nearing feature parity with its previous CDP-based approach. Learn more in the ",(0,n.jsx)(r.a,{href:"https://hacks.mozilla.org/2023/12/puppeteer-webdriver-bidi/",children:"dedicated announcement"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"measuring-progress",children:"Measuring progress"}),"\n",(0,n.jsxs)(r.p,{children:["To gauge the capabilities of WebDriver BiDi, we utilized the comprehensive ",(0,n.jsx)(r.a,{href:"https://puppeteer.github.io/ispuppeteerwebdriverbidiready/",children:"Puppeteer test suite"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["For Firefox, there are currently under ",(0,n.jsx)(r.a,{href:"https://puppeteer.github.io/ispuppeteerwebdriverbidiready/firefox-delta.json",children:"60"})," failing tests compared to the CDP implementation, while over ",(0,n.jsx)(r.a,{href:"https://puppeteer.github.io/ispuppeteerwebdriverbidiready/firefox-delta.json",children:"82"})," new tests successfully utilize WebDriver BiDi, demonstrating its growing potential."]}),"\n",(0,n.jsx)(r.li,{children:"For Chrome, around 68% of tests pass with WebDriver BiDi, indicating room for improvement compared to the CDP-based approach."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"get-started",children:"Get started"}),"\n",(0,n.jsx)(r.p,{children:"Below is an example of launching Firefox or Chrome with WebDriver BiDi:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({\n  product: 'firefox', // or 'chrome'\n  protocol: 'webDriverBiDi',\n});\nconst page = await browser.newPage();\n...\nawait browser.close();\n"})}),"\n",(0,n.jsx)(r.p,{children:"This is an exciting step towards a more unified and efficient cross-browser automation experience. We encourage you to explore WebDriver BiDi with Puppeteer and join us in shaping the future of browser automation."}),"\n",(0,n.jsx)(r.h2,{id:"puppeteer-features-supported-over-webdriver-bidi",children:"Puppeteer features supported over WebDriver BiDi"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Browser and page automation"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Browser.close"}),"\n",(0,n.jsxs)(r.li,{children:["Frame.goto() (except ",(0,n.jsx)(r.code,{children:"referer"})," and ",(0,n.jsx)(r.code,{children:"referrerPolicy"}),")"]}),"\n",(0,n.jsx)(r.li,{children:"Page.bringToFront"}),"\n",(0,n.jsx)(r.li,{children:"Page.goBack()"}),"\n",(0,n.jsx)(r.li,{children:"Page.goForward()"}),"\n",(0,n.jsxs)(r.li,{children:["Page.goto (except ",(0,n.jsx)(r.code,{children:"referer"})," and ",(0,n.jsx)(r.code,{children:"referrerPolicy"}),")"]}),"\n",(0,n.jsxs)(r.li,{children:["Page.reload (except for ",(0,n.jsx)(r.code,{children:"ignoreCache"})," parameter)"]}),"\n",(0,n.jsxs)(r.li,{children:["Page.setViewport (",(0,n.jsx)(r.code,{children:"width"}),", ",(0,n.jsx)(r.code,{children:"height"}),", ",(0,n.jsx)(r.code,{children:"deviceScaleFactor"})," only)"]}),"\n",(0,n.jsx)(r.li,{children:"Puppeteer.launch"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/evaluate-javascript",children:"Script evaluation"}),":"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"JSHandle.evaluate"}),"\n",(0,n.jsx)(r.li,{children:"JSHandle.evaluateHandle"}),"\n",(0,n.jsx)(r.li,{children:"Page.evaluate"}),"\n",(0,n.jsx)(r.li,{children:"Page.exposeFunction"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/query-selectors",children:"Selectors"})," and ",(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/locators",children:"locators"})," except for ARIA:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Page.$ (ARIA selectors supported in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.$$ (ARIA selectors supported in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.$$eval (ARIA selectors supported in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.$eval (ARIA selectors supported in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.waitForSelector (ARIA selectors supported in Chrome)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Input"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"ElementHandle.click"}),"\n",(0,n.jsx)(r.li,{children:"Keyboard.down"}),"\n",(0,n.jsx)(r.li,{children:"Keyboard.press"}),"\n",(0,n.jsx)(r.li,{children:"Keyboard.sendCharacter"}),"\n",(0,n.jsx)(r.li,{children:"Keyboard.type"}),"\n",(0,n.jsx)(r.li,{children:"Keyboard.up"}),"\n",(0,n.jsx)(r.li,{children:"Mouse events (except for dedicated drag'n'drop API methods)"}),"\n",(0,n.jsx)(r.li,{children:"Page.tap"}),"\n",(0,n.jsx)(r.li,{children:"TouchScreen.*"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"JavaScript dialog interception"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"page.on('dialog')"}),"\n",(0,n.jsx)(r.li,{children:"Dialog.*"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Screenshots (not all parameters are supported)"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Page.screenshot (supported parameters ",(0,n.jsx)(r.code,{children:"clip"}),", ",(0,n.jsx)(r.code,{children:"encoding"}),", ",(0,n.jsx)(r.code,{children:"fullPage"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"PDF generation (not all parameters are supported)"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Page.pdf (only ",(0,n.jsx)(r.code,{children:"format"}),", ",(0,n.jsx)(r.code,{children:"height"}),", ",(0,n.jsx)(r.code,{children:"landscape"}),", ",(0,n.jsx)(r.code,{children:"margin"}),", ",(0,n.jsx)(r.code,{children:"pageRanges"}),", ",(0,n.jsx)(r.code,{children:"printBackground"}),", ",(0,n.jsx)(r.code,{children:"scale"}),", ",(0,n.jsx)(r.code,{children:"width"})," are supported)"]}),"\n",(0,n.jsxs)(r.li,{children:["Page.createPDFStream (only ",(0,n.jsx)(r.code,{children:"format"}),", ",(0,n.jsx)(r.code,{children:"height"}),", ",(0,n.jsx)(r.code,{children:"landscape"}),", ",(0,n.jsx)(r.code,{children:"margin"}),", ",(0,n.jsx)(r.code,{children:"pageRanges"}),", ",(0,n.jsx)(r.code,{children:"printBackground"}),", ",(0,n.jsx)(r.code,{children:"scale"}),", ",(0,n.jsx)(r.code,{children:"width"})," are supported)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"puppeteer-features-not-yet-supported-over-webdriver-bidi",children:"Puppeteer features not yet supported over WebDriver BiDi"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://pptr.dev/guides/request-interception",children:"Request interception"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"HTTPRequest.abort()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.abortErrorReason()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.client()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.continue()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.continueRequestOverrides()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.failure()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.finalizeInterceptions()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.interceptResolutionState()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.isInterceptResolutionHandled()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.respond()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPRequest.responseForRequest()"}),"\n",(0,n.jsx)(r.li,{children:"Page.setRequestInterception()"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Permissions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"BrowserContext.clearPermissionOverrides()"}),"\n",(0,n.jsx)(r.li,{children:"BrowserContext.overridePermissions()"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Various emulations (most are supported with Chrome)"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Page.emulate() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateCPUThrottling() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateIdleState() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateMediaFeatures() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateMediaType() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateTimezone() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateVisionDeficiency() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.setBypassCSP() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.setCacheEnabled() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.setGeolocation() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.setJavaScriptEnabled() (supported only in Chrome)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"CDP-specific features"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Page.createCDPSession() (supported only in Chrome)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Tracing (supported only in Chrome)"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Coverage (supported only in Chrome)"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Accessibility (supported only in Chrome)"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Other methods:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Browser.userAgent()"}),"\n",(0,n.jsx)(r.li,{children:"ElementHandle.uploadFile()"}),"\n",(0,n.jsx)(r.li,{children:"Frame.isOOPFrame()"}),"\n",(0,n.jsx)(r.li,{children:"Frame.waitForDevicePrompt()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPResponse.buffer()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPResponse.fromServiceWorker()"}),"\n",(0,n.jsx)(r.li,{children:"HTTPResponse.securityDetails()"}),"\n",(0,n.jsx)(r.li,{children:"Input.drag()"}),"\n",(0,n.jsx)(r.li,{children:"Input.dragAndDrop()"}),"\n",(0,n.jsx)(r.li,{children:"Input.dragOver()"}),"\n",(0,n.jsx)(r.li,{children:"Input.drop()"}),"\n",(0,n.jsx)(r.li,{children:"Page.authenticate()"}),"\n",(0,n.jsx)(r.li,{children:"Page.cookies()"}),"\n",(0,n.jsx)(r.li,{children:"Page.deleteCookie()"}),"\n",(0,n.jsx)(r.li,{children:"Page.emulateNetworkConditions()"}),"\n",(0,n.jsx)(r.li,{children:"Page.isDragInterceptionEnabled()"}),"\n",(0,n.jsx)(r.li,{children:"Page.isJavaScriptEnabled() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.isServiceWorkerBypassed()"}),"\n",(0,n.jsx)(r.li,{children:"Page.metrics()"}),"\n",(0,n.jsx)(r.li,{children:"Page.queryObjects() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.screencast() (supported only in Chrome)"}),"\n",(0,n.jsx)(r.li,{children:"Page.setBypassServiceWorker()"}),"\n",(0,n.jsx)(r.li,{children:"Page.setCookie()"}),"\n",(0,n.jsx)(r.li,{children:"Page.setDragInterception()"}),"\n",(0,n.jsx)(r.li,{children:"Page.setExtraHTTPHeaders()"}),"\n",(0,n.jsx)(r.li,{children:"Page.setOfflineMode()"}),"\n",(0,n.jsx)(r.li,{children:"Page.setUserAgent()"}),"\n",(0,n.jsx)(r.li,{children:"Page.waitForDevicePrompt()"}),"\n",(0,n.jsx)(r.li,{children:"Page.waitForFileChooser()"}),"\n",(0,n.jsx)(r.li,{children:"Page.workers()"}),"\n",(0,n.jsx)(r.li,{children:"PageEvent.popup"}),"\n",(0,n.jsx)(r.li,{children:"PageEvent.WorkerCreated"}),"\n",(0,n.jsx)(r.li,{children:"PageEvent.WorkerDestroyed"}),"\n",(0,n.jsx)(r.li,{children:"Target.opener()"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},75251:(e,r,i)=>{var n=i(67294),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,i){var n,l={},c=null,a=null;for(n in void 0!==i&&(c=""+i),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)t.call(r,n)&&!d.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:a,props:l,_owner:o.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},85893:(e,r,i)=>{e.exports=i(75251)},11151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>t});var n=i(67294);const s={},l=n.createContext(s);function t(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);