"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=c(function(A,f){
var d=require('@stdlib/array-base-resolve-getter/dist'),q=require('@stdlib/array-base-resolve-setter/dist'),b=require('@stdlib/ndarray-base-ind/dist').factory,w=require('@stdlib/error-tools-fmtprodmsg/dist');function x(e,r,t,p){var o,h,s,g,u,v,n,a,i,m;if(h=q(e),s=d(r),g=d(t),o=b(p),u=e.length-1,a=r.length,a>0)if(t.length===a)v=1;else if(t.length===1)v=0;else throw new Error(w("invalid argument. The third argument must be broadcast compatible with the second argument. Array shape: (%d). Desired shape: (%d).",t.length,a));for(n=0,i=0;i<a;i++)m=o(s(r,i),u),h(e,m,g(t,n)),n+=v;return e}f.exports=x
});var y=l();module.exports=y;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
