var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function d(t,e,n,r,o,s){if(o){const c=a(e,n,r,s);t.p(c,o)}}function p(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t){return null==t?"":t}const m="undefined"!=typeof window;let h=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const y=new Set;function v(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&g(v)}function w(t){let e;return 0===y.size&&g(v),{promise:new Promise((n=>{y.add(e={c:t,f:n})})),abort(){y.delete(e)}}}function b(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function A(t){const e=C("style");return function(t,e){b(t.head||t,e),e.sheet}(x(t),e),e.sheet}function B(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function _(){return j(" ")}function q(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e){t.value=null==e?"":e}function O(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function z(t,e,n){t.classList[n?"add":"remove"](e)}function D(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}const N=new Map;let R,I=0;function K(t,e,n,r,o,s,c,i=0){const l=16.666/r;let u="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*s(t);u+=100*t+`%{${c(r,1-r)}}\n`}const a=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,d=x(t),{stylesheet:p,rules:$}=N.get(d)||function(t,e){const n={stylesheet:A(e),rules:{}};return N.set(t,n),n}(d,t);$[f]||($[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${o}ms 1 both`,I+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),I-=o,I||g((()=>{I||(N.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)})),N.clear())})))}function F(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),o="none"===r.transform?"":r.transform;t.style.transform=`${o} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function L(t){R=t}function Y(){const t=function(){if(!R)throw new Error("Function called outside component initialization");return R}();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=D(e,n,{cancelable:r});return o.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function Q(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const U=[],H=[],G=[],J=[],V=Promise.resolve();let W=!1;function X(t){G.push(t)}const Z=new Set;let tt,et=0;function nt(){if(0!==et)return;const t=R;do{try{for(;et<U.length;){const t=U[et];et++,L(t),rt(t.$$)}}catch(t){throw U.length=0,et=0,t}for(L(null),U.length=0,et=0;H.length;)H.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Z.has(e)||(Z.add(e),e())}G.length=0}while(U.length);for(;J.length;)J.pop()();W=!1,Z.clear(),L(t)}function rt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function ot(){return tt||(tt=Promise.resolve(),tt.then((()=>{tt=null}))),tt}function st(t,e,n){t.dispatchEvent(D(`${e?"intro":"outro"}${n}`))}const ct=new Set;let it;function lt(){it={r:0,c:[],p:it}}function ut(){it.r||s(it.c),it=it.p}function at(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function ft(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),it.c.push((()=>{ct.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}const dt={duration:0};function pt(t,e){t.f(),function(t,e){ft(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function $t(t){t&&t.c()}function mt(t,e,n,o){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),o||X((()=>{const e=t.$$.on_mount.map(r).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(X)}function ht(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){-1===t.$$.dirty[0]&&(U.push(t),W||(W=!0,V.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,r,c,i,l,u,a=[-1]){const f=R;L(e);const d=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&gt(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&at(e.$$.fragment),mt(e,n.target,n.anchor,n.customElement),nt()}L(f)}class vt{$destroy(){ht(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function wt(e){let n;return{c(){n=C("header"),n.innerHTML='<h1 class="svelte-43zebd"><img src="./img/logo.svg" alt="Poll" class="svelte-43zebd"/></h1>',P(n,"class","svelte-43zebd")},m(t,e){B(t,n,e)},p:t,i:t,o:t,d(t){t&&k(n)}}}class bt extends vt{constructor(t){super(),yt(this,t,null,wt,i,{})}}function xt(e){let n,r;return{c(){n=C("footer"),r=C("div"),r.textContent=`Copyright ${e[0]} Object😊Object`,P(r,"class","copyright svelte-1puf9y1"),P(n,"class","svelte-1puf9y1")},m(t,e){B(t,n,e),b(n,r)},p:t,i:t,o:t,d(t){t&&k(n)}}}function At(t){return[(new Date).getFullYear()]}class Bt extends vt{constructor(t){super(),yt(this,t,At,xt,i,{})}}function kt(t){const e=t-1;return e*e*e+1}function Ct(t,{delay:n=0,duration:r=400,easing:o=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*s}}function jt(t,{delay:e=0,duration:n=400,easing:r=kt,start:o=0,opacity:s=0}={}){const c=getComputedStyle(t),i=+c.opacity,l="none"===c.transform?"":c.transform,u=1-o,a=i*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${l} scale(${1-u*e});\n\t\t\topacity: ${i-a*e}\n\t\t`}}function _t(t,{from:e,to:n},r={}){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform,[i,l]=o.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*i/n.width-(n.left+i),a=e.top+e.height*l/n.height-(n.top+l),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=kt}=r;return{delay:f,duration:c(d)?d(Math.sqrt(u*u+a*a)):d,easing:p,css:(t,r)=>{const o=r*u,c=r*a,i=t+r*e.width/n.width,l=t+r*e.height/n.height;return`transform: ${s} translate(${o}px, ${c}px) scale(${i}, ${l});`}}}const qt=[];function Et(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!qt.length;for(const t of o)t[1](),qt.push(t,e);if(t){for(let t=0;t<qt.length;t+=2)qt[t][0](qt[t+1]);qt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return o.add(l),1===o.size&&(r=n(s)||t),c(e),()=>{o.delete(l),0===o.size&&(r(),r=null)}}}}const Pt=Et([{question:"Are you happy?",answerA:"Yes! ❤️",answerB:"Sure 💕",votesA:5,votesB:10,id:"52c3c402-00f1-4c8b-be40-6c7707c1afce"},{question:"Do you like it?",answerA:"Yes! 👍🏻",answerB:"Of course 😍",votesA:1,votesB:3,id:"52c3c402-00f1-4c8b-be40-6c7707c1afca"}]);function St(t){return"[object Date]"===Object.prototype.toString.call(t)}function Mt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>Mt(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(St(t)&&St(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=Mt(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=r[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function Ot(t,r={}){const o=Et(t);let s,c=t;function i(i,l){if(null==t)return o.set(t=i),Promise.resolve();c=i;let u=s,a=!1,{delay:f=0,duration:d=400,easing:p=e,interpolate:$=Mt}=n(n({},r),l);if(0===d)return u&&(u.abort(),u=null),o.set(t=c),Promise.resolve();const m=h()+f;let g;return s=w((e=>{if(e<m)return!0;a||(g=$(t,i),"function"==typeof d&&(d=d(t,i)),a=!0),u&&(u.abort(),u=null);const n=e-m;return n>d?(o.set(t=i),!1):(o.set(t=g(p(n/d))),!0)})),s.promise}return{set:i,update:(e,n)=>i(e(c,t),n),subscribe:o.subscribe}}function zt(t){let e,n;const r=t[1].default,o=u(r,t,t[0],null);return{c(){e=C("div"),o&&o.c(),P(e,"class","card svelte-1ro9ues")},m(t,r){B(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&(!n||1&e)&&d(o,r,t,t[0],n?f(r,t[0],e,null):p(t[0]),null)},i(t){n||(at(o,t),n=!0)},o(t){ft(o,t),n=!1},d(t){t&&k(e),o&&o.d(t)}}}function Dt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Nt extends vt{constructor(t){super(),yt(this,t,Dt,zt,i,{})}}function Rt(t){let e,n,r,o,s;const c=t[4].default,i=u(c,t,t[3],null);return{c(){e=C("button"),i&&i.c(),P(e,"class",n=$(t[0])+" svelte-ziw73s"),z(e,"flat",t[1]),z(e,"inverse",t[2])},m(n,c){B(n,e,c),i&&i.m(e,null),r=!0,o||(s=q(e,"click",t[5]),o=!0)},p(t,[o]){i&&i.p&&(!r||8&o)&&d(i,c,t,t[3],r?f(c,t[3],o,null):p(t[3]),null),(!r||1&o&&n!==(n=$(t[0])+" svelte-ziw73s"))&&P(e,"class",n),(!r||3&o)&&z(e,"flat",t[1]),(!r||5&o)&&z(e,"inverse",t[2])},i(t){r||(at(i,t),r=!0)},o(t){ft(i,t),r=!1},d(t){t&&k(e),i&&i.d(t),o=!1,s()}}}function It(t,e,n){let{$$slots:r={},$$scope:o}=e,{type:s="primary"}=e,{flat:c=!1}=e,{inverse:i=!1}=e;return t.$$set=t=>{"type"in t&&n(0,s=t.type),"flat"in t&&n(1,c=t.flat),"inverse"in t&&n(2,i=t.inverse),"$$scope"in t&&n(3,o=t.$$scope)},[s,c,i,o,r,function(e){Q.call(this,t,e)}]}class Kt extends vt{constructor(t){super(),yt(this,t,It,Rt,i,{type:0,flat:1,inverse:2})}}function Tt(e){let n,r,o,c,i,l,u,a,f,d;return{c(){n=C("div"),r=C("div"),o=_(),c=C("span"),i=j(e[0]),l=j(" ("),u=j(e[1]),a=j(")"),P(r,"class","percent svelte-1d9aac3"),O(r,"width",e[2]+"%"),O(r,"background-color",e[3]),O(r,"border-left","4px solid "+e[3]),P(c,"class","svelte-1d9aac3"),P(n,"class","answer svelte-1d9aac3")},m(t,s){B(t,n,s),b(n,r),b(n,o),b(n,c),b(c,i),b(c,l),b(c,u),b(c,a),f||(d=[q(n,"click",E(e[4])),q(n,"keydown",e[7])],f=!0)},p(t,[e]){4&e&&O(r,"width",t[2]+"%"),8&e&&O(r,"background-color",t[3]),8&e&&O(r,"border-left","4px solid "+t[3]),1&e&&S(i,t[0]),2&e&&S(u,t[1])},i:t,o:t,d(t){t&&k(n),f=!1,s(d)}}}function Ft(t,e,n){let{answer:r}=e,{votes:o}=e,{answerKey:s}=e,{id:c}=e,{percent:i}=e,{barColor:l}=e;return t.$$set=t=>{"answer"in t&&n(0,r=t.answer),"votes"in t&&n(1,o=t.votes),"answerKey"in t&&n(5,s=t.answerKey),"id"in t&&n(6,c=t.id),"percent"in t&&n(2,i=t.percent),"barColor"in t&&n(3,l=t.barColor)},[r,o,i,l,function(){Pt.update((t=>t.map((t=>{if(t.id===c){const e=`votes${s}`,n=t[e];return{...t,[e]:n+1}}return t}))))},s,c,function(e){Q.call(this,t,e)}]}class Lt extends vt{constructor(t){super(),yt(this,t,Ft,Tt,i,{answer:0,votes:1,answerKey:5,id:6,percent:2,barColor:3})}}function Yt(t){let e;return{c(){e=j("Delete")},m(t,n){B(t,e,n)},d(t){t&&k(e)}}}function Qt(t){let e,n,r,o,s,c,i,l,u,a,f,d,p,$,m,h=t[0].question+"";return u=new Lt({props:{id:t[0].id,answer:t[0].answerA,votes:t[0].votesA,answerKey:"A",percent:t[4],barColor:t[3]}}),f=new Lt({props:{id:t[0].id,answer:t[0].answerB,votes:t[0].votesB,answerKey:"B",percent:t[5],barColor:t[2]}}),$=new Kt({props:{flat:!0,$$slots:{default:[Yt]},$$scope:{ctx:t}}}),$.$on("click",t[8]),{c(){e=C("div"),n=C("h3"),r=j(h),o=_(),s=C("p"),c=j("Total votes: "),i=j(t[1]),l=_(),$t(u.$$.fragment),a=_(),$t(f.$$.fragment),d=_(),p=C("div"),$t($.$$.fragment),P(n,"class","svelte-n8jry0"),P(s,"class","svelte-n8jry0"),P(p,"class","delete svelte-n8jry0"),P(e,"class","poll")},m(t,h){B(t,e,h),b(e,n),b(n,r),b(e,o),b(e,s),b(s,c),b(s,i),b(e,l),mt(u,e,null),b(e,a),mt(f,e,null),b(e,d),b(e,p),mt($,p,null),m=!0},p(t,e){(!m||1&e)&&h!==(h=t[0].question+"")&&S(r,h),(!m||2&e)&&S(i,t[1]);const n={};1&e&&(n.id=t[0].id),1&e&&(n.answer=t[0].answerA),1&e&&(n.votes=t[0].votesA),16&e&&(n.percent=t[4]),8&e&&(n.barColor=t[3]),u.$set(n);const o={};1&e&&(o.id=t[0].id),1&e&&(o.answer=t[0].answerB),1&e&&(o.votes=t[0].votesB),32&e&&(o.percent=t[5]),4&e&&(o.barColor=t[2]),f.$set(o);const s={};2048&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){m||(at(u.$$.fragment,t),at(f.$$.fragment,t),at($.$$.fragment,t),m=!0)},o(t){ft(u.$$.fragment,t),ft(f.$$.fragment,t),ft($.$$.fragment,t),m=!1},d(t){t&&k(e),ht(u),ht(f),ht($)}}}function Ut(t){let e,n;return e=new Nt({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){$t(e.$$.fragment)},m(t,r){mt(e,t,r),n=!0},p(t,[n]){const r={};2111&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(at(e.$$.fragment,t),n=!0)},o(t){ft(e.$$.fragment,t),n=!1},d(t){ht(e,t)}}}function Ht(t,e,n){let r,o,s,c,i,u,a,{poll:f={}}=e;const d=Ot(0);l(t,d,(t=>n(4,u=t)));const p=Ot(0);return l(t,p,(t=>n(5,a=t))),t.$$set=t=>{"poll"in t&&n(0,f=t.poll)},t.$$.update=()=>{1&t.$$.dirty&&n(1,r=f.votesA+f.votesB),3&t.$$.dirty&&n(10,o=Math.floor(100/r*f.votesA)||0),3&t.$$.dirty&&n(9,s=Math.floor(100/r*f.votesB)||0),1536&t.$$.dirty&&n(3,c=o>=s?"rgba(69, 196, 150, 0.2)":"rgba(217, 27, 66, 0.2)"),1536&t.$$.dirty&&n(2,i=s>=o?"rgba(69, 196, 150, 0.2)":"rgba(217, 27, 66, 0.2)"),1024&t.$$.dirty&&d.set(o),512&t.$$.dirty&&p.set(s)},[f,r,i,c,u,a,d,p,function(){Pt.update((t=>t.filter((({id:t})=>t!==f.id))))},s,o]}class Gt extends vt{constructor(t){super(),yt(this,t,Ht,Ut,i,{poll:0})}}function Jt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Vt(n,r){let o,i,l,u,a,f,d,p=t;return i=new Gt({props:{poll:r[1]}}),{key:n,first:null,c(){o=C("div"),$t(i.$$.fragment),l=_(),this.first=o},m(t,e){B(t,o,e),mt(i,o,null),b(o,l),d=!0},p(t,e){r=t;const n={};1&e&&(n.poll=r[1]),i.$set(n)},r(){f=o.getBoundingClientRect()},f(){!function(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:r}=e,o=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,F(t,o)}}(o),p(),F(o,f)},a(){p(),p=function(n,r,o,s){if(!r)return t;const c=n.getBoundingClientRect();if(r.left===c.left&&r.right===c.right&&r.top===c.top&&r.bottom===c.bottom)return t;const{delay:i=0,duration:l=300,easing:u=e,start:a=h()+i,end:f=a+l,tick:d=t,css:p}=o(n,{from:r,to:c},s);let $,m=!0,g=!1;function y(){p&&T(n,$),m=!1}return w((t=>{if(!g&&t>=a&&(g=!0),g&&t>=f&&(d(1,0),y()),!m)return!1;if(g){const e=0+1*u((t-a)/l);d(e,1-e)}return!0})),p&&($=K(n,0,1,l,i,u,p)),i||(g=!0),d(0,1),y}(o,f,_t,{duration:500})},i(n){d||(at(i.$$.fragment,n),X((()=>{a&&a.end(1),u=function(n,r,o){const s={direction:"in"};let i,l,u=r(n,o,s),a=!1,f=0;function d(){i&&T(n,i)}function p(){const{delay:r=0,duration:o=300,easing:s=e,tick:c=t,css:p}=u||dt;p&&(i=K(n,0,1,o,r,s,p,f++)),c(0,1);const $=h()+r,m=$+o;l&&l.abort(),a=!0,X((()=>st(n,!0,"start"))),l=w((t=>{if(a){if(t>=m)return c(1,0),st(n,!0,"end"),d(),a=!1;if(t>=$){const e=s((t-$)/o);c(e,1-e)}}return a}))}let $=!1;return{start(){$||($=!0,T(n),c(u)?(u=u(s),ot().then(p)):p())},invalidate(){$=!1},end(){a&&(d(),a=!1)}}}(o,Ct,{}),u.start()})),d=!0)},o(n){ft(i.$$.fragment,n),u&&u.invalidate(),n&&(a=function(n,r,o){const i={direction:"out"};let l,u=r(n,o,i),a=!0;const f=it;function d(){const{delay:r=0,duration:o=300,easing:c=e,tick:i=t,css:d}=u||dt;d&&(l=K(n,1,0,o,r,c,d));const p=h()+r,$=p+o;X((()=>st(n,!1,"start"))),w((t=>{if(a){if(t>=$)return i(0,1),st(n,!1,"end"),--f.r||s(f.c),!1;if(t>=p){const e=c((t-p)/o);i(1-e,e)}}return a}))}return f.r+=1,c(u)?ot().then((()=>{u=u(i),d()})):d(),{end(t){t&&u.tick&&u.tick(1,0),a&&(l&&T(n,l),a=!1)}}}(o,jt,{})),d=!1},d(t){t&&k(o),ht(i),t&&a&&a.end()}}}function Wt(t){let e,n,r=[],o=new Map,s=t[0];const c=t=>t[1].id;for(let e=0;e<s.length;e+=1){let n=Jt(t,s,e),i=c(n);o.set(i,r[e]=Vt(i,n))}return{c(){e=C("div");for(let t=0;t<r.length;t+=1)r[t].c();P(e,"class","poll-list svelte-1njm1c3")},m(t,o){B(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(1&n){s=t[0],lt();for(let t=0;t<r.length;t+=1)r[t].r();r=function(t,e,n,r,o,s,c,i,l,u,a,f){let d=t.length,p=s.length,$=d;const m={};for(;$--;)m[t[$].key]=$;const h=[],g=new Map,y=new Map;for($=p;$--;){const t=f(o,s,$),i=n(t);let l=c.get(i);l?r&&l.p(t,e):(l=u(i,t),l.c()),g.set(i,h[$]=l),i in m&&y.set(i,Math.abs($-m[i]))}const v=new Set,w=new Set;function b(t){at(t,1),t.m(i,a),c.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=h[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(a=e.first,d--,p--):g.has(o)?!c.has(r)||v.has(r)?b(e):w.has(o)?d--:y.get(r)>y.get(o)?(w.add(r),b(e)):(v.add(o),d--):(l(n,c),d--)}for(;d--;){const e=t[d];g.has(e.key)||l(e,c)}for(;p;)b(h[p-1]);return h}(r,n,c,1,t,s,o,e,pt,Vt,null,Jt);for(let t=0;t<r.length;t+=1)r[t].a();ut()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)at(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)ft(r[t]);n=!1},d(t){t&&k(e);for(let t=0;t<r.length;t+=1)r[t].d()}}}function Xt(t,e,n){let r;return l(t,Pt,(t=>n(0,r=t))),[r]}class Zt extends vt{constructor(t){super(),yt(this,t,Xt,Wt,i,{})}}function te(t){let e,n,r=t[1].question+"";return{c(){e=C("p"),n=j(r),P(e,"class","error-message svelte-jhcu07")},m(t,r){B(t,e,r),b(e,n)},p(t,e){2&e&&r!==(r=t[1].question+"")&&S(n,r)},d(t){t&&k(e)}}}function ee(t){let e,n,r=t[1].answerA+"";return{c(){e=C("p"),n=j(r),P(e,"class","error-message svelte-jhcu07")},m(t,r){B(t,e,r),b(e,n)},p(t,e){2&e&&r!==(r=t[1].answerA+"")&&S(n,r)},d(t){t&&k(e)}}}function ne(t){let e,n,r=t[1].answerB+"";return{c(){e=C("p"),n=j(r),P(e,"class","error-message svelte-jhcu07")},m(t,r){B(t,e,r),b(e,n)},p(t,e){2&e&&r!==(r=t[1].answerB+"")&&S(n,r)},d(t){t&&k(e)}}}function re(t){let e;return{c(){e=j("Add Poll")},m(t,n){B(t,e,n)},d(t){t&&k(e)}}}function oe(t){let e,n,r,o,c,i,l,u,a,f,d,p,$,m,h,g,y,v,w,x,A,j,S,O=t[2]&&t[1].question&&te(t),D=t[2]&&t[1].answerA&&ee(t),N=t[2]&&t[1].answerB&&ne(t);return x=new Kt({props:{type:"secondary",flat:!0,$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){e=C("form"),n=C("div"),r=C("label"),r.textContent="Poll Question:",o=_(),O&&O.c(),c=_(),i=C("input"),l=_(),u=C("div"),a=C("label"),a.textContent="Answer A:",f=_(),D&&D.c(),d=_(),p=C("input"),$=_(),m=C("div"),h=C("label"),h.textContent="Answer B:",g=_(),N&&N.c(),y=_(),v=C("input"),w=_(),$t(x.$$.fragment),P(r,"for","question"),P(r,"class","svelte-jhcu07"),P(i,"type","text"),P(i,"id","question"),P(i,"class","svelte-jhcu07"),z(i,"error",t[2]&&t[1].question),P(n,"class","form-field svelte-jhcu07"),P(a,"for","answer-a"),P(a,"class","svelte-jhcu07"),P(p,"type","text"),P(p,"id","answer-a"),P(p,"class","svelte-jhcu07"),z(p,"error",t[2]&&t[1].answerA),P(u,"class","form-field svelte-jhcu07"),P(h,"for","answer-b"),P(h,"class","svelte-jhcu07"),P(v,"type","text"),P(v,"id","answer-b"),P(v,"class","svelte-jhcu07"),z(v,"error",t[2]&&t[1].answerB),P(m,"class","form-field svelte-jhcu07"),P(e,"class","svelte-jhcu07")},m(s,k){B(s,e,k),b(e,n),b(n,r),b(n,o),O&&O.m(n,null),b(n,c),b(n,i),M(i,t[0].question),b(e,l),b(e,u),b(u,a),b(u,f),D&&D.m(u,null),b(u,d),b(u,p),M(p,t[0].answerA),b(e,$),b(e,m),b(m,h),b(m,g),N&&N.m(m,null),b(m,y),b(m,v),M(v,t[0].answerB),b(e,w),mt(x,e,null),A=!0,j||(S=[q(i,"input",t[4]),q(p,"input",t[5]),q(v,"input",t[6]),q(e,"submit",E(t[3]))],j=!0)},p(t,[e]){t[2]&&t[1].question?O?O.p(t,e):(O=te(t),O.c(),O.m(n,c)):O&&(O.d(1),O=null),1&e&&i.value!==t[0].question&&M(i,t[0].question),(!A||6&e)&&z(i,"error",t[2]&&t[1].question),t[2]&&t[1].answerA?D?D.p(t,e):(D=ee(t),D.c(),D.m(u,d)):D&&(D.d(1),D=null),1&e&&p.value!==t[0].answerA&&M(p,t[0].answerA),(!A||6&e)&&z(p,"error",t[2]&&t[1].answerA),t[2]&&t[1].answerB?N?N.p(t,e):(N=ne(t),N.c(),N.m(m,y)):N&&(N.d(1),N=null),1&e&&v.value!==t[0].answerB&&M(v,t[0].answerB),(!A||6&e)&&z(v,"error",t[2]&&t[1].answerB);const r={};512&e&&(r.$$scope={dirty:e,ctx:t}),x.$set(r)},i(t){A||(at(x.$$.fragment,t),A=!0)},o(t){ft(x.$$.fragment,t),A=!1},d(t){t&&k(e),O&&O.d(),D&&D.d(),N&&N.d(),ht(x),j=!1,s(S)}}}function se(t,e,n){let r;const o=Y();let s={question:"",answerA:"",answerB:""},c={question:null,answerA:null,answerB:null},i=!1;return t.$$.update=()=>{1&t.$$.dirty&&(n(1,c.question=s.question.trim().length<5?"Question must be at least more then 5 characters":null,c),n(1,c.answerA=s.answerA.trim().length?null:"Answer A must be exist",c),n(1,c.answerB=s.answerB.trim().length?null:"Answer B must be exist",c)),2&t.$$.dirty&&(r=!c.question&&!c.answerA&&!c.answerB)},[s,c,i,function(){if(n(2,i=!0),r){const t={...s,votesA:0,votesB:0,id:self.crypto.randomUUID()};Pt.update((e=>[...e,t])),o("submit"),n(2,i=!1),n(0,s={question:"",answerA:"",answerB:""})}},function(){s.question=this.value,n(0,s)},function(){s.answerA=this.value,n(0,s)},function(){s.answerB=this.value,n(0,s)}]}class ce extends vt{constructor(t){super(),yt(this,t,se,oe,i,{})}}function ie(t,e,n){const r=t.slice();return r[5]=e[n],r}function le(t){let e,n,r,o,c,i,l=t[5]+"";function u(){return t[4](t[5])}return{c(){e=C("li"),n=C("div"),r=j(l),o=_(),P(n,"class","svelte-1i6yvcf"),z(n,"active",t[5]===t[1]),P(e,"class","svelte-1i6yvcf")},m(s,l){B(s,e,l),b(e,n),b(n,r),b(e,o),c||(i=[q(e,"click",u),q(e,"keydown",t[3])],c=!0)},p(e,o){t=e,1&o&&l!==(l=t[5]+"")&&S(r,l),3&o&&z(n,"active",t[5]===t[1])},d(t){t&&k(e),c=!1,s(i)}}}function ue(e){let n,r,o=e[0],s=[];for(let t=0;t<o.length;t+=1)s[t]=le(ie(e,o,t));return{c(){n=C("div"),r=C("ul");for(let t=0;t<s.length;t+=1)s[t].c();P(r,"class","svelte-1i6yvcf"),P(n,"class","tabs svelte-1i6yvcf")},m(t,e){B(t,n,e),b(n,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null)},p(t,[e]){if(7&e){let n;for(o=t[0],n=0;n<o.length;n+=1){const c=ie(t,o,n);s[n]?s[n].p(c,e):(s[n]=le(c),s[n].c(),s[n].m(r,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=o.length}},i:t,o:t,d(t){t&&k(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function ae(t,e,n){const r=Y();let{items:o=[]}=e,{activeItem:s=null}=e;return t.$$set=t=>{"items"in t&&n(0,o=t.items),"activeItem"in t&&n(1,s=t.activeItem)},[o,s,r,function(e){Q.call(this,t,e)},t=>r("tabChange",t)]}class fe extends vt{constructor(t){super(),yt(this,t,ae,ue,i,{items:0,activeItem:1})}}function de(e){let n,r;return n=new ce({}),n.$on("submit",e[3]),{c(){$t(n.$$.fragment)},m(t,e){mt(n,t,e),r=!0},p:t,i(t){r||(at(n.$$.fragment,t),r=!0)},o(t){ft(n.$$.fragment,t),r=!1},d(t){ht(n,t)}}}function pe(e){let n,r;return n=new Zt({}),{c(){$t(n.$$.fragment)},m(t,e){mt(n,t,e),r=!0},p:t,i(t){r||(at(n.$$.fragment,t),r=!0)},o(t){ft(n.$$.fragment,t),r=!1},d(t){ht(n,t)}}}function $e(t){let e,n,r,o,s,c,i,l,u,a;e=new bt({}),o=new fe({props:{items:t[1],activeItem:t[0]}}),o.$on("tabChange",t[2]);const f=[pe,de],d=[];function p(t,e){return t[0]===t[1][0]?0:t[0]===t[1][1]?1:-1}return~(c=p(t))&&(i=d[c]=f[c](t)),u=new Bt({}),{c(){$t(e.$$.fragment),n=_(),r=C("main"),$t(o.$$.fragment),s=_(),i&&i.c(),l=_(),$t(u.$$.fragment),P(r,"class","svelte-1t9jcdk")},m(t,i){mt(e,t,i),B(t,n,i),B(t,r,i),mt(o,r,null),b(r,s),~c&&d[c].m(r,null),B(t,l,i),mt(u,t,i),a=!0},p(t,[e]){const n={};1&e&&(n.activeItem=t[0]),o.$set(n);let s=c;c=p(t),c===s?~c&&d[c].p(t,e):(i&&(lt(),ft(d[s],1,1,(()=>{d[s]=null})),ut()),~c?(i=d[c],i?i.p(t,e):(i=d[c]=f[c](t),i.c()),at(i,1),i.m(r,null)):i=null)},i(t){a||(at(e.$$.fragment,t),at(o.$$.fragment,t),at(i),at(u.$$.fragment,t),a=!0)},o(t){ft(e.$$.fragment,t),ft(o.$$.fragment,t),ft(i),ft(u.$$.fragment,t),a=!1},d(t){ht(e,t),t&&k(n),t&&k(r),ht(o),~c&&d[c].d(),t&&k(l),ht(u,t)}}}function me(t,e,n){let r=["Current Polls","Add New Poll"],o=r[0];return[o,r,function(t){n(0,o=t.detail)},function(){n(0,o=r[0])}]}return new class extends vt{constructor(t){super(),yt(this,t,me,$e,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map