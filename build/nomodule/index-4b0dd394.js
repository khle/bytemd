System.register(["./main-6d0ee66f.js"],(function(t){"use strict";var e,s,r,n,o,c,i,u,h,l,d,a,p,m;return{setters:[function(t){e=t.S,s=t.i,r=t.s,n=t.F,o=t.k,c=t.G,i=t.b,u=t.I,h=t.r,l=t.h,d=t.u,a=t.J,p=t.K,m=t.m}],execute:function(){function v(t){let e,s=[t[1],{src:t[0]}],r={};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return{c(){e=o("audio"),c(e,r)},m(t,s){i(t,e,s)},p(t,[r]){c(e,u(s,[2&r&&t[1],1&r&&{src:t[0]}]))},i:h,o:h,d(t){t&&l(e)}}}function g(t,e,s){let{src:r}=e,{attrs:n}=e;return t.$set=t=>{"src"in t&&s(0,r=t.src),"attrs"in t&&s(1,n=t.attrs)},[r,n]}t("default",(function({video:{defaultAttrs:t={controls:!0},onClickIcon:e=V("video")}={},audio:{defaultAttrs:s={controls:!0},onClickIcon:r=V("audio")}={}}={}){return{renderNode(e){if("element"===e.type)switch(e.tagName){case"video":{const{src:s,poster:r,width:n,height:o}=e.properties;return{component:k,props:{src:s,poster:r,width:n,height:o,attrs:t}}}case"audio":return{component:f,props:{src:e.properties.src,attrs:s}}}},toolbarItems:[{component:y,onClick:r},{component:z,onClick:e}]}}));class f extends e{constructor(t){super(),s(this,t,g,v,r,{src:0,attrs:1})}}function w(t){let e,s=[t[4],{src:t[0]},{poster:t[1]},{width:t[2]},{height:t[3]}],r={};for(let t=0;t<s.length;t+=1)r=n(r,s[t]);return{c(){e=o("video"),c(e,r),a(e,"svelte-31k182",!0)},m(t,s){i(t,e,s)},p(t,[r]){c(e,u(s,[16&r&&t[4],1&r&&{src:t[0]},2&r&&{poster:t[1]},4&r&&{width:t[2]},8&r&&{height:t[3]}])),a(e,"svelte-31k182",!0)},i:h,o:h,d(t){t&&l(e)}}}function x(t,e,s){let{src:r}=e,{poster:n}=e,{width:o}=e,{height:c}=e,{attrs:i}=e;return t.$set=t=>{"src"in t&&s(0,r=t.src),"poster"in t&&s(1,n=t.poster),"width"in t&&s(2,o=t.width),"height"in t&&s(3,c=t.height),"attrs"in t&&s(4,i=t.attrs)},[r,n,o,c,i]}class k extends e{constructor(t){var e;super(),document.getElementById("svelte-31k182-style")||((e=o("style")).id="svelte-31k182-style",e.textContent="video.svelte-31k182{max-width:100%}",d(document.head,e)),s(this,t,x,w,r,{src:0,poster:1,width:2,height:3,attrs:4})}}function C(t){let e,s;return{c(){e=p("svg"),s=p("path"),m(s,"d","M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 24 24")},m(t,r){i(t,e,r),d(e,s)},p:h,i:h,o:h,d(t){t&&l(e)}}}class y extends e{constructor(t){super(),s(this,t,null,C,r,{})}}function I(t){let e,s;return{c(){e=p("svg"),s=p("path"),m(s,"d","M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 24 24")},m(t,r){i(t,e,r),d(e,s)},p:h,i:h,o:h,d(t){t&&l(e)}}}class z extends e{constructor(t){super(),s(this,t,null,I,r,{})}}function V(t){return e=>{const s=e.getCursor("from");e.replaceRange(`<${t} src=""></${t}>`,s),e.setCursor({line:s.line,ch:s.ch+12}),e.focus()}}}}}));
//# sourceMappingURL=index-4b0dd394.js.map