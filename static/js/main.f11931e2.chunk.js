(this["webpackJsonpakash-portfolio"]=this["webpackJsonpakash-portfolio"]||[]).push([[2],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));const a={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},r=e=>`${e}px`,c=e=>e/16+"rem",o=e=>Number(e.replace("ms","")),i=e=>`${e}ms`,s=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return O}));var a=n(0),r=n(17);var c=function(){return Object(a.useContext)(r.a)};var o=function(e=""){const[t,n]=Object(a.useState)(e),[r,c]=Object(a.useState)(),[o,i]=Object(a.useState)(!1);return{value:t,error:r,onChange:e=>{n(e.target.value),i(!0),r&&e.target.checkValidity()&&c(null)},onBlur:e=>{o&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let i=0;var s=()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)((()=>t(++i)),[]),e};var l=function(e,t,n){const r=Object(a.useRef)();Object(a.useEffect)((()=>{r.current=e})),Object(a.useEffect)((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},r=!0){const[c,o]=Object(a.useState)(!1),[i,s]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const a=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:r}=e;o(n),n&&t&&(a.unobserve(r),s(!0))}),n);return!i&&r&&a.observe(e.current),()=>a.disconnect()}),[e,t,n,i,r]),c};var d=function(e,t){const[n,r]=Object(a.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const a=t instanceof Function?t(n):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error(a)}}]};var b=function(e,t=!0){const[n,r]=Object(a.useState)(0),c=h();return Object(a.useEffect)((()=>{let n=!1,a=null;const o=()=>{const{innerHeight:a}=window,c=Math.max(0,window.scrollY)*e,o=Math.max(-a,Math.min(a,c));r(t?o:c),n=!1},i=()=>{n||(n=!0,a=requestAnimationFrame(o))};return c||window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(a)}}),[t,e,c]),n};var h=function(){const[e,t]=Object(a.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(a.useEffect)((()=>{var e,n;const a=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),r=()=>{t(null===a||void 0===a?void 0:a.matches)};return null===a||void 0===a||a.addListener(r),r(),()=>{null===a||void 0===a||a.removeListener(r)}}),[]),e};var j=function(e){const t=Object(a.useRef)();return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current};var f=function(){return Object(a.useContext)(r.b)};var m=function(){const{status:e}=f(),t=j(e),n=h();Object(a.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var O=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(a.useRef)((()=>({w:0,h:0}))),r=Object(a.useRef)((()=>Math.abs(window.orientation))),c=Object(a.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),r.current.w=90===n.current?e.offsetHeight:window.innerWidth,r.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),o=Object(a.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?r.current.h:r.current.w):window.innerHeight:0),[c,e,t]),i=Object(a.useCallback)((()=>({width:e?window.innerWidth:0,height:o()})),[o,e]),[s,l]=Object(a.useState)((()=>i()));return Object(a.useEffect)((()=>{const e=()=>{l(i())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[i,e]),s}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(2);const r="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:r,fontStack:`Gotham, ${r}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(a.e)(140),fontSizeH1:Object(a.e)(100),fontSizeH2:Object(a.e)(58),fontSizeH3:Object(a.e)(38),fontSizeH4:Object(a.e)(28),fontSizeBodyXL:Object(a.e)(22),fontSizeBodyL:Object(a.e)(20),fontSizeBodyM:Object(a.e)(18),fontSizeBodyS:Object(a.e)(16),fontSizeBodyXS:Object(a.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(a.e)(120),fontSizeH1:Object(a.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(a.e)(100),fontSizeH1:Object(a.e)(70),fontSizeH2:Object(a.e)(52),fontSizeH3:Object(a.e)(36),fontSizeH4:Object(a.e)(26)},tablet:{fontSizeH0:Object(a.e)(80),fontSizeH1:Object(a.e)(60),fontSizeH2:Object(a.e)(48),fontSizeH3:Object(a.e)(32),fontSizeH4:Object(a.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(a.e)(56),fontSizeH1:Object(a.e)(40),fontSizeH2:Object(a.e)(34),fontSizeH3:Object(a.e)(28),fontSizeH4:Object(a.e)(22),fontSizeBodyL:Object(a.e)(18),fontSizeBodyM:Object(a.e)(16),fontSizeBodyS:Object(a.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(a.e)(42),fontSizeH1:Object(a.e)(38),fontSizeH2:Object(a.e)(28),fontSizeH3:Object(a.e)(24),fontSizeH4:Object(a.e)(20)}},o={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var a=n(1),r=n(4),c=n.n(r),o=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=o.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"});function l({title:e,titleId:t,...n},a){return o.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,s)}const u=o.forwardRef(l);n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b=o.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"});function h({title:e,titleId:t,...n},a){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,b)}const j=o.forwardRef(h);n.p;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=o.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"});function O({title:e,titleId:t,...n},a){return o.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,m)}const p=o.forwardRef(O);n.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g=o.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"});function x({title:e,titleId:t,...n},a){return o.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,g)}const w=o.forwardRef(x);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=o.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"});function S({title:e,titleId:t,...n},a){return o.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,_)}const k=o.forwardRef(S);n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var M=o.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"});function N({title:e,titleId:t,...n},a){return o.createElement("svg",z({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,M)}const E=o.forwardRef(N);n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"});function B({title:e,titleId:t,...n},a){return o.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,L)}const C=o.forwardRef(B);n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var $=o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"});function P({title:e,titleId:t,...n},a){return o.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,$)}const T=o.forwardRef(P);n.p,n(44);const R={twitter:u,github:j,error:p,menu:w,arrowRight:k,chevronRight:E,close:C,send:T};t.a=({icon:e,style:t,className:n,...r})=>{const o=R[e];return Object(a.jsx)(o,{"aria-hidden":!0,className:c()("icon",n),...r})}},,function(e,t,n){"use strict";function a(e){e.currentTarget.blur()}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return $}));var a=n(1),r=n(0),c=n(15),o=n(5),i=n(56),s=n(57),l=n(4),u=n.n(l),d=(n(23),n(9));n(43);var b=function({highlight:e,className:t,...n}){const r=`monogram-clip-${Object(d.c)()}`;return Object(a.jsxs)("svg",{"aria-hidden":!0,className:u()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:r,children:Object(a.jsx)("path",{d:"M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z"})})}),Object(a.jsx)("rect",{clipPath:`url(#${r})`,width:"100%",height:"100%"}),e&&Object(a.jsx)("g",{clipPath:`url(#${r})`,children:Object(a.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},h=n(14),j=n(21);n(50);var f=({menuOpen:e,...t})=>{const n=u()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(a.jsx)(j.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(a.jsxs)("div",{className:"nav-toggle__inner",children:[Object(a.jsx)(h.a,{className:u()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(a.jsx)(h.a,{className:u()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var m=({isMobile:e,...t})=>{const{dispatch:n,theme:r}=Object(d.a)(),c="dark"===r,o=`theme-toggle-mask-${Object(d.c)()}`;return Object(a.jsx)(j.a,{iconOnly:!0,className:u()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(a.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(a.jsx)("defs",{children:Object(a.jsxs)("mask",{id:o,children:[Object(a.jsx)("circle",{className:u()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":c}),cx:"19",cy:"19",r:"13"}),Object(a.jsx)("circle",{className:u()("theme-toggle__mask",{"theme-toggle__mask--dark":c}),cx:"25",cy:"14",r:"9"})]})}),Object(a.jsx)("path",{className:u()("theme-toggle__path",{"theme-toggle__path--dark":c}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(a.jsx)("circle",{className:u()("theme-toggle__circle",{"theme-toggle__circle--dark":c}),mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})};const O=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],p=[{label:"Github",url:"https://github.com/akash2408",icon:"github"}];var v=n(20),g=n(2),x=n(10),w=n(16);n(52);const y=()=>Object(a.jsx)("div",{className:"navbar__nav-icons",children:p.map((({label:e,url:t,icon:n})=>Object(a.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:w.a,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(h.a,{className:"navbar__nav-icon",icon:n})},e)))});function _(e){const{menuOpen:t,dispatch:n}=Object(d.a)(),{location:o}=e,[i,l]=Object(r.useState)(),u=Object(d.l)(),h=Object(r.useRef)(),j=u.width<=g.a.mobile||u.height<=696,p=()=>{l(Math.random().toString(32).substr(2,8))},_=()=>{p(),t&&n({type:"toggleMenu"})};return Object(a.jsxs)("header",{className:"navbar",ref:h,children:[Object(a.jsx)(c.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:i},"aria-label":"Akashdeep, Engineer",onClick:_,onMouseUp:w.a,children:Object(a.jsx)(b,{highlight:!0})}),Object(a.jsx)(f,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(a.jsxs)("nav",{className:"navbar__nav",children:[Object(a.jsx)("div",{className:"navbar__nav-list",children:O.map((({label:e,pathname:t,hash:n})=>Object(a.jsx)(c.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${o.pathname}${o.hash}`)({match:e,hash:n}),onClick:p,to:{pathname:t,hash:n,state:i},onMouseUp:w.a,children:e},e)))}),Object(a.jsx)(y,{})]}),Object(a.jsx)(s.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(g.b)(x.b.base.durationL)},onEnter:v.b,children:e=>Object(a.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[O.map((({label:t,pathname:n,hash:r},o)=>Object(a.jsx)(c.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:_,to:{pathname:n,hash:r,state:i},onMouseUp:w.a,style:{transitionDelay:Object(g.c)(Number(Object(g.b)(x.b.base.durationS))+50*o)},children:t},t))),Object(a.jsx)(y,{}),Object(a.jsx)(m,{isMobile:!0})]})}),!j&&Object(a.jsx)(m,{})]})}var S=Object(r.memo)(_),k=n(27),z=n(22);n(33);const M={menuOpen:!1,theme:"dark"};function N(e,t){const{type:n,value:a}=t;switch(n){case"setTheme":return{...e,theme:a};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const E=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(9),n.e(4)]).then(n.bind(null,98)))),H=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,101)))),L=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(11)]).then(n.bind(null,99)))),B=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(8)]).then(n.bind(null,100)))),C=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,102)))),I=Object(r.createContext)(),$=Object(r.createContext)(),P=()=>{const e=Object(o.f)(),{pathname:t}=e;return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(z.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(a.jsx)(S,{location:e}),Object(a.jsx)(i.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(a.jsx)(s.a,{timeout:Object(g.b)(x.b.base.durationS),onEnter:v.b,children:t=>Object(a.jsx)($.Provider,{value:{status:t},children:Object(a.jsx)("div",{className:u()("app__page",`app__page--${t}`),children:Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(r.Fragment,{}),children:Object(a.jsxs)(o.c,{location:e,children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:E}),Object(a.jsx)(o.a,{path:"/contact",component:H}),Object(a.jsx)(o.a,{path:"/projects/visualizer",component:L}),Object(a.jsx)(o.a,{path:"/projects/heartbeat",component:B}),Object(a.jsx)(o.a,{component:C})]})})})})},t)})]})};t.c=()=>{const[e]=Object(d.f)("theme","dark"),[t,n]=Object(r.useReducer)(N,M);return Object(r.useEffect)((()=>{window.history.scrollRestoration="manual"}),[]),Object(r.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(a.jsx)(I.Provider,{value:{...t,dispatch:n},children:Object(a.jsx)(k.b,{themeId:t.theme,children:Object(a.jsx)(c.a,{children:Object(a.jsx)(P,{})})})})}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const a=["entering","entered"],r=e=>a.includes(e),c=e=>e&&e.offsetHeight},function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(1),r=n(0),c=n(4),o=n.n(c),i=n(15),s=n(13),l=n(9),u=n(2),d=n(22);n(46);var b=({className:e,style:t,size:n=32,text:r="Loading...",...c})=>{const i=()=>Object(s.createPortal)(Object(a.jsx)(d.a,{className:"loader-announcement","aria-live":"assertive",children:r}),document.body);if(Object(l.h)())return Object(a.jsxs)("div",{className:"loader-text",...c,children:[r,i()]});const b=Math.round(n/3*.2),h=Math.round(n/3-2*b-1);return Object(a.jsxs)("div",{className:o()("loader",e),"aria-label":r,style:{"--size":Object(u.d)(n),"--spanSize":Object(u.d)(h),"--gapSize":Object(u.d)(b),...t},...c,children:[Object(a.jsxs)("div",{className:"loader__content",children:[Object(a.jsx)("div",{className:"loader__span"}),Object(a.jsx)("div",{className:"loader__span"}),Object(a.jsx)("div",{className:"loader__span"})]}),i()]})},h=n(14),j=n(16);n(47);const f=Object(r.forwardRef)((({className:e,as:t,secondary:n,loading:r,loadingText:c="loading",icon:s,iconEnd:l,iconHoverShift:u,iconOnly:d,children:f,rel:m,target:O,href:p,...v},g)=>{const x=null===p||void 0===p?void 0:p.includes("://"),w=x||"#"===(null===p||void 0===p?void 0:p[0])?"a":i.b,y=t||(p?w:"button");return Object(a.jsxs)(y,{className:o()("button",e,{"button--loading":r,"button--icon-only":d,"button--secondary":n}),href:p&&x?p:void 0,to:p&&!x?p:void 0,rel:m||x?"noopener noreferrer":void 0,target:O||x?"_blank":void 0,onMouseUp:j.a,ref:g,...v,children:[!!s&&Object(a.jsx)(h.a,{className:o()("button__icon",{"button__icon--start":!d,"button__icon--shift":u}),icon:s}),!!f&&Object(a.jsx)("span",{className:"button__text",children:f}),!!l&&Object(a.jsx)(h.a,{className:o()("button__icon",{"button__icon--end":!d,"button__icon--shift":u}),icon:l}),r&&Object(a.jsx)(b,{className:"button__loader",size:32,text:c})]})}))},function(e,t,n){"use strict";var a=n(1),r=n(4),c=n.n(r);n(45);t.a=({className:e,showOnFocus:t,as:n="span",children:r,visible:o,...i})=>Object(a.jsx)(n,{className:c()("visually-hidden",e,{"visually-hidden--hidden":!o&&!t,"visually-hidden--show-on-focus":t}),...i,children:r})},,,,,function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return j}));var a=n(1),r=n(0),c=n(23),o=n(4),i=n.n(o);var s=function(){return Object(r.useContext)(j)},l=n(10),u=n(2),d=n.p+"static/media/gotham-book.9c2a0ce4.woff2",b=n.p+"static/media/gotham-medium.0ad7d622.woff2";const h=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${d}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${b}) format("woff2");\n    font-display: swap;\n  }\n`,j=Object(r.createContext)({});function f(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function m(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const O=`\n  :root {\n    ${f(l.b.base)}\n  }\n\n  ${Object.keys(u.a).map((e=>`\n        @media (max-width: ${u.a[e]}px) {\n          :root {\n            ${f(l.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${f(l.a.dark)}\n  }\n\n  .light {\n    ${f(l.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:o,as:u="div"})=>{const f={...l.a[e],...t},p=!s().themeId;return Object(r.useEffect)((()=>{p&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,p]),Object(a.jsxs)(j.Provider,{value:f,children:[p&&Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("link",{rel:"preload",href:b,as:"font",crossorigin:""}),Object(a.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(a.jsx)("style",{children:h}),Object(a.jsx)("style",{children:O})]}),n]}),!p&&Object(a.jsx)(u,{className:i()("theme-provider",o),style:m(f),children:n})]})}},,,,,,function(e,t,n){"use strict";const a="ReactSnap"===navigator.userAgent;t.a=a},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(13),c=n(17);const o=document.getElementById("root");o.hasChildNodes()?Object(r.hydrate)(Object(a.jsx)(c.c,{}),o):Object(r.render)(Object(a.jsx)(c.c,{}),o)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,3,5]]]);
//# sourceMappingURL=main.f11931e2.chunk.js.map