(this["webpackJsonpakash-portfolio"]=this["webpackJsonpakash-portfolio"]||[]).push([[1],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));const a={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},c=e=>`${e}px`,r=e=>e/16+"rem",o=e=>Number(e.replace("ms","")),i=e=>`${e}ms`,s=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return O}));var a=n(0),c=n(16);var r=function(){return Object(a.useContext)(c.a)};var o=function(e=""){const[t,n]=Object(a.useState)(e),[c,r]=Object(a.useState)(),[o,i]=Object(a.useState)(!1);return{value:t,error:c,onChange:e=>{n(e.target.value),i(!0),c&&e.target.checkValidity()&&r(null)},onBlur:e=>{o&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),r(e.target.validationMessage)}}};let i=0;var s=()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)((()=>t(++i)),[]),e};var l=function(e,t,n){const c=Object(a.useRef)();Object(a.useEffect)((()=>{c.current=e})),Object(a.useEffect)((()=>{if(null!==t){let e=setInterval((function(){c.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},c=!0){const[r,o]=Object(a.useState)(!1),[i,s]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const a=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:c}=e;o(n),n&&t&&(a.unobserve(c),s(!0))}),n);return!i&&c&&a.observe(e.current),()=>a.disconnect()}),[e,t,n,i,c]),r};var d=function(e,t){const[n,c]=Object(a.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const a=t instanceof Function?t(n):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error(a)}}]};var b=function(e,t=!0){const[n,c]=Object(a.useState)(0),r=h();return Object(a.useEffect)((()=>{let n=!1,a=null;const o=()=>{const{innerHeight:a}=window,r=Math.max(0,window.scrollY)*e,o=Math.max(-a,Math.min(a,r));c(t?o:r),n=!1},i=()=>{n||(n=!0,a=requestAnimationFrame(o))};return r||window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(a)}}),[t,e,r]),n};var h=function(){const[e,t]=Object(a.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(a.useEffect)((()=>{var e,n;const a=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),c=()=>{t(null===a||void 0===a?void 0:a.matches)};return null===a||void 0===a||a.addListener(c),c(),()=>{null===a||void 0===a||a.removeListener(c)}}),[]),e};var j=function(e){const t=Object(a.useRef)();return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current};var m=function(){return Object(a.useContext)(c.b)};var f=function(){const{status:e}=m(),t=j(e),n=h();Object(a.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var O=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(a.useRef)((()=>({w:0,h:0}))),c=Object(a.useRef)((()=>Math.abs(window.orientation))),r=Object(a.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),c.current.w=90===n.current?e.offsetHeight:window.innerWidth,c.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),o=Object(a.useCallback)((()=>e?t?(r(),90!==Math.abs(window.orientation)?c.current.h:c.current.w):window.innerHeight:0),[r,e,t]),i=Object(a.useCallback)((()=>({width:e?window.innerWidth:0,height:o()})),[o,e]),[s,l]=Object(a.useState)((()=>i()));return Object(a.useEffect)((()=>{const e=()=>{l(i())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[i,e]),s}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(2);const c="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",r={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:c,fontStack:`Gotham, ${c}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(a.e)(140),fontSizeH1:Object(a.e)(100),fontSizeH2:Object(a.e)(58),fontSizeH3:Object(a.e)(38),fontSizeH4:Object(a.e)(28),fontSizeBodyXL:Object(a.e)(22),fontSizeBodyL:Object(a.e)(20),fontSizeBodyM:Object(a.e)(18),fontSizeBodyS:Object(a.e)(16),fontSizeBodyXS:Object(a.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(a.e)(120),fontSizeH1:Object(a.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(a.e)(100),fontSizeH1:Object(a.e)(70),fontSizeH2:Object(a.e)(52),fontSizeH3:Object(a.e)(36),fontSizeH4:Object(a.e)(26)},tablet:{fontSizeH0:Object(a.e)(80),fontSizeH1:Object(a.e)(60),fontSizeH2:Object(a.e)(48),fontSizeH3:Object(a.e)(32),fontSizeH4:Object(a.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(a.e)(56),fontSizeH1:Object(a.e)(40),fontSizeH2:Object(a.e)(34),fontSizeH3:Object(a.e)(28),fontSizeH4:Object(a.e)(22),fontSizeBodyL:Object(a.e)(18),fontSizeBodyM:Object(a.e)(16),fontSizeBodyS:Object(a.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(a.e)(42),fontSizeH1:Object(a.e)(38),fontSizeH2:Object(a.e)(28),fontSizeH3:Object(a.e)(24),fontSizeH4:Object(a.e)(20)}},o={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var a=n(1),c=n(4),r=n.n(c),o=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=o.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"});function l({title:e,titleId:t,...n},a){return o.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,s)}const u=o.forwardRef(l);n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b=o.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"});function h({title:e,titleId:t,...n},a){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,b)}const j=o.forwardRef(h);n.p;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=o.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"});function O({title:e,titleId:t,...n},a){return o.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,f)}const p=o.forwardRef(O);n.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var v=o.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"});function x({title:e,titleId:t,...n},a){return o.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,v)}const y=o.forwardRef(x);n.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"});function S({title:e,titleId:t,...n},a){return o.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,_)}const k=o.forwardRef(S);n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var N=o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"});function M({title:e,titleId:t,...n},a){return o.createElement("svg",z({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,N)}const E=o.forwardRef(M);n.p,n(44);const H={github:u,menu:j,arrowRight:p,chevronRight:y,close:k,send:E};t.a=({icon:e,style:t,className:n,...c})=>{const o=H[e];return Object(a.jsx)(o,{"aria-hidden":!0,className:r()("icon",n),...c})}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return P}));var a=n(1),c=n(0),r=n(15),o=n(5),i=n(56),s=n(57),l=n(4),u=n.n(l),d=(n(23),n(9));n(43);var b=function({highlight:e,className:t,...n}){const c=`monogram-clip-${Object(d.c)()}`;return Object(a.jsxs)("svg",{"aria-hidden":!0,className:u()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:c,children:Object(a.jsx)("path",{d:"M 23 20 L 20 16 L 23 0 L 3 29 z z L 43 29 L 23 0 L 26 16"})})}),Object(a.jsx)("rect",{clipPath:`url(#${c})`,width:"100%",height:"100%"}),e&&Object(a.jsx)("g",{clipPath:`url(#${c})`,children:Object(a.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},h=n(14),j=n(20);n(50);var m=({menuOpen:e,...t})=>{const n=u()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(a.jsx)(j.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(a.jsxs)("div",{className:"nav-toggle__inner",children:[Object(a.jsx)(h.a,{className:u()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(a.jsx)(h.a,{className:u()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var f=({isMobile:e,...t})=>{const{dispatch:n,theme:c}=Object(d.a)(),r="dark"===c,o=`theme-toggle-mask-${Object(d.c)()}`;return Object(a.jsx)(j.a,{iconOnly:!0,className:u()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(a.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(a.jsx)("defs",{children:Object(a.jsxs)("mask",{id:o,children:[Object(a.jsx)("circle",{className:u()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":r}),cx:"19",cy:"19",r:"13"}),Object(a.jsx)("circle",{className:u()("theme-toggle__mask",{"theme-toggle__mask--dark":r}),cx:"25",cy:"14",r:"9"})]})}),Object(a.jsx)("path",{className:u()("theme-toggle__path",{"theme-toggle__path--dark":r}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(a.jsx)("circle",{className:u()("theme-toggle__circle",{"theme-toggle__circle--dark":r}),mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})};const O=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],p=[{label:"Github",url:"https://github.com/akash2408",icon:"github"}];var g=n(21),v=n(2),x=n(10),y=n(17);n(52);const w=()=>Object(a.jsx)("div",{className:"navbar__nav-icons",children:p.map((({label:e,url:t,icon:n})=>Object(a.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:y.a,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(h.a,{className:"navbar__nav-icon",icon:n})},e)))});function _(e){const{menuOpen:t,dispatch:n}=Object(d.a)(),{location:o}=e,[i,l]=Object(c.useState)(),u=Object(d.l)(),h=Object(c.useRef)(),j=u.width<=v.a.mobile||u.height<=696,p=()=>{l(Math.random().toString(32).substr(2,8))},_=()=>{p(),t&&n({type:"toggleMenu"})};return Object(a.jsxs)("header",{className:"navbar",ref:h,children:[Object(a.jsx)(r.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:i},"aria-label":"Akashdeep, Engineer",onClick:_,onMouseUp:y.a,children:Object(a.jsx)(b,{highlight:!0})}),Object(a.jsx)(m,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(a.jsxs)("nav",{className:"navbar__nav",children:[Object(a.jsx)("div",{className:"navbar__nav-list",children:O.map((({label:e,pathname:t,hash:n})=>Object(a.jsx)(r.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${o.pathname}${o.hash}`)({match:e,hash:n}),onClick:p,to:{pathname:t,hash:n,state:i},onMouseUp:y.a,children:e},e)))}),Object(a.jsx)(w,{})]}),Object(a.jsx)(s.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(v.b)(x.b.base.durationL)},onEnter:g.b,children:e=>Object(a.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[O.map((({label:t,pathname:n,hash:c},o)=>Object(a.jsx)(r.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:_,to:{pathname:n,hash:c,state:i},onMouseUp:y.a,style:{transitionDelay:Object(v.c)(Number(Object(v.b)(x.b.base.durationS))+50*o)},children:t},t))),Object(a.jsx)(w,{}),Object(a.jsx)(f,{isMobile:!0})]})}),!j&&Object(a.jsx)(f,{})]})}var S=Object(c.memo)(_),k=n(27),z=n(22);n(33);const N={menuOpen:!1,theme:"dark"};function M(e,t){const{type:n,value:a}=t;switch(n){case"setTheme":return{...e,theme:a};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const E=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(11),n.e(3)]).then(n.bind(null,102)))),H=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,107)))),L=Object(c.lazy)((()=>n.e(8).then(n.bind(null,103)))),B=Object(c.lazy)((()=>n.e(6).then(n.bind(null,104)))),C=Object(c.lazy)((()=>n.e(5).then(n.bind(null,105)))),I=Object(c.lazy)((()=>n.e(7).then(n.bind(null,106)))),$=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,108)))),T=Object(c.createContext)(),P=Object(c.createContext)(),R=()=>{const e=Object(o.f)(),{pathname:t}=e;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(z.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(a.jsx)(S,{location:e}),Object(a.jsx)(i.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(a.jsx)(s.a,{timeout:Object(v.b)(x.b.base.durationS),onEnter:g.b,children:t=>Object(a.jsx)(P.Provider,{value:{status:t},children:Object(a.jsx)("div",{className:u()("app__page",`app__page--${t}`),children:Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(c.Fragment,{}),children:Object(a.jsxs)(o.c,{location:e,children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:E}),Object(a.jsx)(o.a,{path:"/contact",component:H}),Object(a.jsx)(o.a,{path:"/projects/visualizer",component:L}),Object(a.jsx)(o.a,{path:"/projects/heartbeat",component:B}),Object(a.jsx)(o.a,{path:"/projects/beato",component:C}),Object(a.jsx)(o.a,{path:"/projects/keeto",component:I}),Object(a.jsx)(o.a,{component:$})]})})})})},t)})]})};t.c=()=>{const[e]=Object(d.f)("theme","dark"),[t,n]=Object(c.useReducer)(M,N);return Object(c.useEffect)((()=>{window.history.scrollRestoration="manual"}),[]),Object(c.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(a.jsx)(T.Provider,{value:{...t,dispatch:n},children:Object(a.jsx)(k.b,{themeId:t.theme,children:Object(a.jsx)(r.a,{children:Object(a.jsx)(R,{})})})})}},function(e,t,n){"use strict";function a(e){e.currentTarget.blur()}n.d(t,"a",(function(){return a}))},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),c=n(0),r=n(4),o=n.n(r),i=n(15),s=n(13),l=n(9),u=n(2),d=n(22);n(46);var b=({className:e,style:t,size:n=32,text:c="Loading...",...r})=>{const i=()=>Object(s.createPortal)(Object(a.jsx)(d.a,{className:"loader-announcement","aria-live":"assertive",children:c}),document.body);if(Object(l.h)())return Object(a.jsxs)("div",{className:"loader-text",...r,children:[c,i()]});const b=Math.round(n/3*.2),h=Math.round(n/3-2*b-1);return Object(a.jsxs)("div",{className:o()("loader",e),"aria-label":c,style:{"--size":Object(u.d)(n),"--spanSize":Object(u.d)(h),"--gapSize":Object(u.d)(b),...t},...r,children:[Object(a.jsxs)("div",{className:"loader__content",children:[Object(a.jsx)("div",{className:"loader__span"}),Object(a.jsx)("div",{className:"loader__span"}),Object(a.jsx)("div",{className:"loader__span"})]}),i()]})},h=n(14),j=n(17);n(47);const m=Object(c.forwardRef)((({className:e,as:t,secondary:n,loading:c,loadingText:r="loading",icon:s,iconEnd:l,iconHoverShift:u,iconOnly:d,children:m,rel:f,target:O,href:p,...g},v)=>{const x=null===p||void 0===p?void 0:p.includes("://"),y=x||"#"===(null===p||void 0===p?void 0:p[0])?"a":i.b,w=t||(p?y:"button");return Object(a.jsxs)(w,{className:o()("button",e,{"button--loading":c,"button--icon-only":d,"button--secondary":n}),href:p&&x?p:void 0,to:p&&!x?p:void 0,rel:f||x?"noopener noreferrer":void 0,target:O||x?"_blank":void 0,onMouseUp:j.a,ref:v,...g,children:[!!s&&Object(a.jsx)(h.a,{className:o()("button__icon",{"button__icon--start":!d,"button__icon--shift":u}),icon:s}),!!m&&Object(a.jsx)("span",{className:"button__text",children:m}),!!l&&Object(a.jsx)(h.a,{className:o()("button__icon",{"button__icon--end":!d,"button__icon--shift":u}),icon:l}),c&&Object(a.jsx)(b,{className:"button__loader",size:32,text:r})]})}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));const a=["entering","entered"],c=e=>a.includes(e),r=e=>e&&e.offsetHeight},function(e,t,n){"use strict";var a=n(1),c=n(4),r=n.n(c);n(45);t.a=({className:e,showOnFocus:t,as:n="span",children:c,visible:o,...i})=>Object(a.jsx)(n,{className:r()("visually-hidden",e,{"visually-hidden--hidden":!o&&!t,"visually-hidden--show-on-focus":t}),...i,children:c})},,,,,function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return j}));var a=n(1),c=n(0),r=n(23),o=n(4),i=n.n(o);var s=function(){return Object(c.useContext)(j)},l=n(10),u=n(2),d=n.p+"static/media/gotham-book.9c2a0ce4.woff2",b=n.p+"static/media/gotham-medium.0ad7d622.woff2";const h=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${d}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${b}) format("woff2");\n    font-display: swap;\n  }\n`,j=Object(c.createContext)({});function m(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function f(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const O=`\n  :root {\n    ${m(l.b.base)}\n  }\n\n  ${Object.keys(u.a).map((e=>`\n        @media (max-width: ${u.a[e]}px) {\n          :root {\n            ${m(l.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${m(l.a.dark)}\n  }\n\n  .light {\n    ${m(l.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:o,as:u="div"})=>{const m={...l.a[e],...t},p=!s().themeId;return Object(c.useEffect)((()=>{p&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,p]),Object(a.jsxs)(j.Provider,{value:m,children:[p&&Object(a.jsxs)(c.Fragment,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)("link",{rel:"preload",href:b,as:"font",crossorigin:""}),Object(a.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(a.jsx)("style",{children:h}),Object(a.jsx)("style",{children:O})]}),n]}),!p&&Object(a.jsx)(u,{className:i()("theme-provider",o),style:f(m),children:n})]})}},,,,,,function(e,t,n){"use strict";const a="ReactSnap"===navigator.userAgent;t.a=a},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(13),r=n(16);const o=document.getElementById("root");o.hasChildNodes()?Object(c.hydrate)(Object(a.jsx)(r.c,{}),o):Object(c.render)(Object(a.jsx)(r.c,{}),o)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,2,4]]]);
//# sourceMappingURL=main.5842559e.chunk.js.map