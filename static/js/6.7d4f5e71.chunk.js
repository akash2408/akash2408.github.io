(this["webpackJsonpakash-portfolio"]=this["webpackJsonpakash-portfolio"]||[]).push([[6],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(90),a(4)),s=a.n(c),i=a(21),o=a(65),r=a(72),l=a(59),d=a(14),u=a(0),b=a(56),j=a(57);a(91);var h=({className:e,resize:t="none",value:a,onChange:c,minRows:i=1,maxRows:o,...r})=>{const[l,d]=Object(u.useState)(i),[b,j]=Object(u.useState)(),h=Object(u.useRef)();Object(u.useEffect)((()=>{const e=getComputedStyle(h.current),t=parseInt(e.lineHeight,10),a=parseInt(e.paddingTop,10)+parseInt(e.paddingBottom,10);j({lineHeight:t,paddingHeight:a})}),[]);return Object(n.jsx)("textarea",{className:s()("textarea",e),ref:h,onChange:e=>{c(e);const{lineHeight:t,paddingHeight:a}=b,n=e.target.rows;e.target.rows=i;const s=~~((e.target.scrollHeight-a)/t);s===n&&(e.target.rows=s),o&&s>=o&&(e.target.rows=o,e.target.scrollTop=e.target.scrollHeight),d(o&&s>o?o:s)},style:{"--resize":t},rows:l,value:a,...r})},m=a(9),p=a(20),O=a(10),_=a(2);a(92);var g=({id:e,label:t,hasValue:a,value:c,multiline:i,className:o,style:r,error:l,onBlur:g,...f})=>{const[x,v]=Object(u.useState)(!1),y=Object(m.c)(),N=Object(u.useRef)(),w=e||`input-${y}`,$=`${w}-label`,S=`${w}-error`,M=i?h:"input";return Object(n.jsxs)("div",{className:s()("input",o,{"input--error":!!l}),style:r,children:[Object(n.jsxs)("div",{className:"input__content",children:[Object(n.jsx)("label",{className:s()("input__label",{"input__label--focused":x,"input__label--has-value":!!c}),id:$,htmlFor:w,children:t}),Object(n.jsx)(M,{className:"input__element",id:w,"aria-labelledby":$,"aria-describedby":l?S:void 0,onFocus:()=>v(!0),onBlur:e=>{v(!1),g&&g(e)},value:c,...f}),Object(n.jsx)("div",{className:s()("input__underline",{"input__underline--focused":x})})]}),Object(n.jsx)(b.a,{component:null,children:!!l&&Object(n.jsx)(j.a,{timeout:Object(_.b)(O.b.base.durationM),children:e=>{var t;return Object(n.jsx)("div",{className:s()("input__error",`input__error--${e}`),id:S,role:"alert",style:{"--height":Object(p.a)(e)?Object(_.d)(null===(t=N.current)||void 0===t?void 0:t.getBoundingClientRect().height):"0px"},children:Object(n.jsxs)("div",{className:"input__error-message",ref:N,children:[Object(n.jsx)(d.a,{icon:"error"}),l]})})}})})]})},f=a(62),x=a(60),v=a(23),y=a(33);const N=O.b.base.durationS;function w(e,t=Object(_.c)(0),a=1){const n=Object(_.b)(e)*a;return{"--delay":Object(_.c)((Object(_.b)(t)+n).toFixed(0))}}t.default=()=>{const{status:e}=Object(m.j)(),t=Object(u.useRef)(),a=Object(m.b)(""),c=Object(m.b)(""),[h,$]=Object(u.useState)(!1),[S,M]=Object(u.useState)(!1),[H,k]=Object(u.useState)("");Object(m.k)();const R=Object(u.useCallback)((async e=>{if(e.preventDefault(),k(""),!h)try{$(!0);const e=await fetch("/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.value,message:c.value})}),t=await e.json(),n=function({status:e,errorMessage:t,fallback:a="There was a problem with your request"}){return 200!==e&&(t||{500:"There was a problem with the server, try again later",404:"There was a problem connecting to the server. Make sure you are connected to the internet"}[e]||a)}({status:null===e||void 0===e?void 0:e.status,errorMessage:null===t||void 0===t?void 0:t.error,fallback:"There was a problem sending your message"});if(n)throw new Error(n);M(!0),$(!1)}catch(t){$(!1),k(t.message)}}),[a.value,c.value,h]);return Object(n.jsxs)(f.a,{className:s()("contact",`contact--${e}`),children:[Object(n.jsxs)(v.a,{children:[Object(n.jsx)("title",{children:"Contact"}),Object(n.jsx)("meta",{name:"description",content:"Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"})]}),Object(n.jsxs)(b.a,{component:null,children:[!S&&Object(n.jsx)(j.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1600,onEnter:p.b,children:e=>Object(n.jsxs)("form",{className:"contact__form",method:"post",onSubmit:R,children:[Object(n.jsx)(l.a,{className:s()("contact__title",`contact__title--${e}`,{"contact__title--hidden":y.a}),level:3,as:"h1",style:w(O.b.base.durationXS,N,.3),children:Object(n.jsx)(o.a,{text:"Say hello",start:"exited"!==e&&!y.a,delay:300})}),Object(n.jsx)(r.a,{className:s()("contact__divider",`contact__divider--${e}`,{"contact__divider--hidden":y.a}),style:w(O.b.base.durationXS,N,.4)}),Object(n.jsx)(g,{required:!0,className:s()("contact__input",`contact__input--${e}`,{"contact__input--hidden":y.a}),style:w(O.b.base.durationXS,N),autoComplete:"email",label:"Your Email",type:"email",maxLength:512,...a}),Object(n.jsx)(g,{required:!0,multiline:!0,className:s()("contact__input",`contact__input--${e}`,{"contact__input--hidden":y.a}),style:w(O.b.base.durationS,N),autoComplete:"off",label:"Message",maxLength:4096,...c}),Object(n.jsx)(b.a,{component:null,children:!!H&&Object(n.jsx)(j.a,{timeout:Object(_.b)(O.b.base.durationM),children:e=>{var a;return Object(n.jsx)("div",{className:s()("contact__form-error",`contact__form-error--${e}`),style:{"--height":Object(p.a)(e)?Object(_.d)(null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height):"0px"},children:Object(n.jsx)("div",{className:"contact__form-error-content",ref:t,children:Object(n.jsxs)("div",{className:"contact__form-error-message",children:[Object(n.jsx)(d.a,{className:"contact__form-error-icon",icon:"error"}),H]})})})}})}),Object(n.jsx)(i.a,{className:s()("contact__button",`contact__button--${e}`,{"contact__button--hidden":y.a,"contact__button--sending":h}),style:w(O.b.base.durationM,N),disabled:h,loading:h,loadingText:"Sending...",icon:"send",type:"submit",children:"Send Message"})]})}),S&&Object(n.jsx)(j.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:p.b,timeout:0,children:e=>Object(n.jsxs)("div",{className:"contact__complete","aria-live":"polite",children:[Object(n.jsx)(l.a,{level:3,as:"h3",className:s()("contact__complete-title",`contact__complete-title--${e}`),children:"Message Sent"}),Object(n.jsx)(x.a,{size:"l",className:s()("contact__complete-text",`contact__complete-text--${e}`),style:w(O.b.base.durationXS),children:"I\u2019ll get back to you within a couple days, sit tight"}),Object(n.jsx)(i.a,{secondary:!0,iconHoverShift:!0,className:s()("contact__complete-button",`contact__complete-button--${e}`),style:w(O.b.base.durationM),href:"/",icon:"chevronRight",children:"Back to homepage"})]})})]})]})}},59:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s),o=a(23),r=a.p+"static/media/gotham-bold.73ce573b.woff2";a(61);t.a=({children:e,level:t=1,as:a,align:s="auto",weight:l="medium",className:d,...u})=>{const b=Math.min(Math.max(t,0),4),j=a||`h${Math.max(b,1)}`;return Object(n.jsxs)(c.Fragment,{children:["bold"===l&&Object(n.jsxs)(o.a,{children:[Object(n.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(j,{className:i()(d,"heading",`heading--align-${s}`,`heading--level-${b}`,`heading--weight-${l}`),...u,children:e})]})}},60:function(e,t,a){"use strict";var n=a(1),c=a(4),s=a.n(c);a(63);t.a=({children:e,size:t="m",as:a="p",align:c="auto",weight:i="auto",secondary:o,className:r,...l})=>Object(n.jsx)(a,{className:s()(r,"text",`text--align-${c}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":o}),...l,children:e})},61:function(e,t,a){},62:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s);a(67);const o=Object(c.forwardRef)((({as:e="div",children:t,className:a,...c},s)=>Object(n.jsx)(e,{className:i()("section",a),ref:s,...c,children:t})));t.a=o},63:function(e,t,a){},65:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s),o=a(9),r=a(70),l=a(22),d=a(33);a(66);const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],b="glyph",j="value";const h=({text:e,start:t=!0,delay:a=0,className:s,...h})=>{const m=Object(c.useRef)([{type:b,value:""}]),p=Object(c.useRef)(),O=Object(o.h)();return Object(c.useEffect)((()=>{const n=p.current,c=e.split("");let s;const i=()=>{const e=m.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},o=Object(r.d)(0,(e=>{m.current=function(e,t,a){return e.map(((e,n)=>{if(n<a)return{type:j,value:e};if(a%1<.5){const e=Math.floor(Math.random()*u.length);return{type:b,value:u[e]}}return{type:b,value:t[n].value}}))}(c,m.current,e),i()}));return!t||s||O||d.a||(s=Object(r.a)(Object(r.b)(a),Object(r.c)({from:0,to:c.length,stiffness:8,damping:5})).start(o)),O&&(m.current=c.map(((e,t)=>({type:j,value:c[t]}))),i()),()=>{s&&s.stop()}}),[O,t,a,e]),Object(n.jsxs)("span",{className:i()("decoder-text",s),...h,children:[Object(n.jsx)(l.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:p})]})};t.a=Object(c.memo)(h)},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";var n=a(1),c=a(4),s=a.n(c),i=a(2);a(76);const o=({lineWidth:e,lineHeight:t,notchWidth:a,notchHeight:c,collapseDelay:o,collapsed:r,className:l,style:d})=>Object(n.jsxs)("div",{className:s()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":a,"--notchHeight":c,"--collapseDelay":Object(i.c)(o),...d},children:[Object(n.jsx)("div",{className:s()("divider__line",{"divider__line--collapsed":r})}),Object(n.jsx)("div",{className:s()("divider__notch",{"divider__notch--collapsed":r}),style:{"--collapseDelay":Object(i.c)(o+160)}})]});o.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=o},76:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}}]);
//# sourceMappingURL=6.7d4f5e71.chunk.js.map