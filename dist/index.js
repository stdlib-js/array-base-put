"use strict";var w=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var j=w(function(z,b){
var p=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),m=require('@stdlib/array-base-assert-is-boolean-data-type/dist'),f=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/strided-base-reinterpret-complex/dist'),q=require('@stdlib/strided-base-reinterpret-boolean/dist'),D=require('@stdlib/ndarray-base-ind/dist').factory,P=require('@stdlib/error-tools-fmtprodmsg/dist');function T(r,a,v,u,s,i){var e,t,o;for(e=0,t=0;t<a.length;t++)o=s(a[t],i),r[o]=v[e],e+=u;return r}function k(r,a,v,u,s,i){var e,t,o,n,c,d,g,h,l;for(e=r.data,t=a.data,o=v.data,n=r.accessors[1],c=a.accessors[0],d=v.accessors[0],g=0,h=0;h<t.length;h++)l=s(c(t,h),i),n(e,l,d(o,g)),g+=u;return e}function B(r,a,v,u,s,i){var e,t,o,n,c,d,g;for(e=a.data,t=a.accessors[0],n=u*2,o=0,c=0;c<e.length;c++)d=s(t(e,c),i),g=d*2,r[g]=v[o],r[g+1]=v[o+1],o+=n;return r}function C(r,a,v,u,s,i){var e,t,o,n,c;for(e=a.data,t=a.accessors[0],o=0,n=0;n<e.length;n++)c=s(t(e,n),i),r[c]=v[o],o+=u;return r}function A(r,a,v,u){var s,i,e,t,o,n;if(a.length>0)if(v.length===a.length)i=1;else if(v.length===1)i=0;else throw new Error(P('1wJFw',v.length,a.length));return s=D(u),e=r.length-1,t=f(r),o=f(a),n=f(v),t.accessorProtocol||o.accessorProtocol||n.accessorProtocol?p(t.dtype)&&p(n.dtype)?(B(y(r,0),o,y(v,0),i,s,e),r):m(t.dtype)&&m(n.dtype)?(C(q(r,0),o,q(v,0),i,s,e),r):(k(t,o,n,i,s,e),r):(T(r,a,v,i,s,e),r)}b.exports=A
});var E=j();module.exports=E;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
