// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-setter@v0.2.1-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,d,i,m){var a,o,h,l,g,p,j,v,f;if(o=t(n),h=e(d),l=e(i),a=r(m),g=n.length-1,(v=d.length)>0)if(i.length===v)p=1;else{if(1!==i.length)throw new Error(s("invalid argument. The third argument must be broadcast compatible with the second argument. Array shape: (%d). Desired shape: (%d).",i.length,v));p=0}for(j=0,f=0;f<v;f++)o(n,a(h(d,f),g),l(i,j)),j+=p;return n}export{n as default};
//# sourceMappingURL=index.mjs.map
