(self.webpackChunkkcc_foundation=self.webpackChunkkcc_foundation||[]).push([[944],{4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,r){"use strict";var n,o,i,a=r(4019),u=r(9781),f=r(7854),s=r(111),c=r(6656),h=r(648),l=r(8880),p=r(1320),y=r(3070).f,v=r(9518),d=r(7674),g=r(5112),A=r(9711),w=f.Int8Array,m=w&&w.prototype,b=f.Uint8ClampedArray,T=b&&b.prototype,R=w&&v(w),x=m&&v(m),U=Object.prototype,L=U.isPrototypeOf,k=g("toStringTag"),E=A("TYPED_ARRAY_TAG"),I=A("TYPED_ARRAY_CONSTRUCTOR"),S=a&&!!d&&"Opera"!==h(f.opera),M=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},P=function(t){if(!s(t))return!1;var e=h(t);return c(O,e)||c(B,e)};for(n in O)(i=(o=f[n])&&o.prototype)?l(i,I,o):S=!1;for(n in B)(i=(o=f[n])&&o.prototype)&&l(i,I,o);if((!S||"function"!=typeof R||R===Function.prototype)&&(R=function(){throw TypeError("Incorrect invocation")},S))for(n in O)f[n]&&d(f[n],R);if((!S||!x||x===U)&&(x=R.prototype,S))for(n in O)f[n]&&d(f[n].prototype,x);if(S&&v(T)!==x&&d(T,x),u&&!c(x,k))for(n in M=!0,y(x,k,{get:function(){return s(this)?this[E]:void 0}}),O)f[n]&&l(f[n],E,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:S,TYPED_ARRAY_CONSTRUCTOR:I,TYPED_ARRAY_TAG:M&&E,aTypedArray:function(t){if(P(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(d&&!L.call(R,t))throw TypeError("Target is not a typed array constructor");return t},exportTypedArrayMethod:function(t,e,r){if(u){if(r)for(var n in O){var o=f[n];if(o&&c(o.prototype,t))try{delete o.prototype[t]}catch(t){}}x[t]&&!r||p(x,t,r?e:S&&m[t]||e)}},exportTypedArrayStaticMethod:function(t,e,r){var n,o;if(u){if(d){if(r)for(n in O)if((o=f[n])&&c(o,t))try{delete o[t]}catch(t){}if(R[t]&&!r)return;try{return p(R,t,r?e:S&&R[t]||e)}catch(t){}}for(n in O)!(o=f[n])||o[t]&&!r||p(o,t,e)}},isView:function(t){if(!s(t))return!1;var e=h(t);return"DataView"===e||c(O,e)||c(B,e)},isTypedArray:P,TypedArray:R,TypedArrayPrototype:x}},3331:function(t,e,r){"use strict";var n=r(7854),o=r(9781),i=r(4019),a=r(8880),u=r(2248),f=r(7293),s=r(5787),c=r(9958),h=r(7466),l=r(7067),p=r(1179),y=r(9518),v=r(7674),d=r(8006).f,g=r(3070).f,A=r(1285),w=r(8003),m=r(9909),b=m.get,T=m.set,R="ArrayBuffer",x="DataView",U="Wrong index",L=n.ArrayBuffer,k=L,E=n.DataView,I=E&&E.prototype,S=Object.prototype,M=n.RangeError,O=p.pack,B=p.unpack,P=function(t){return[255&t]},q=function(t){return[255&t,t>>8&255]},C=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},_=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},j=function(t){return O(t,23,4)},F=function(t){return O(t,52,8)},Y=function(t,e){g(t.prototype,e,{get:function(){return b(this)[e]}})},$=function(t,e,r,n){var o=l(r),i=b(t);if(o+e>i.byteLength)throw M(U);var a=b(i.buffer).bytes,u=o+i.byteOffset,f=a.slice(u,u+e);return n?f:f.reverse()},N=function(t,e,r,n,o,i){var a=l(r),u=b(t);if(a+e>u.byteLength)throw M(U);for(var f=b(u.buffer).bytes,s=a+u.byteOffset,c=n(+o),h=0;h<e;h++)f[s+h]=c[i?h:e-h-1]};if(i){if(!f((function(){L(1)}))||!f((function(){new L(-1)}))||f((function(){return new L,new L(1.5),new L(NaN),L.name!=R}))){for(var D,V=(k=function(t){return s(this,k),new L(l(t))}).prototype=L.prototype,W=d(L),G=0;W.length>G;)(D=W[G++])in k||a(k,D,L[D]);V.constructor=k}v&&y(I)!==S&&v(I,S);var z=new E(new k(2)),J=I.setInt8;z.setInt8(0,2147483648),z.setInt8(1,2147483649),!z.getInt8(0)&&z.getInt8(1)||u(I,{setInt8:function(t,e){J.call(this,t,e<<24>>24)},setUint8:function(t,e){J.call(this,t,e<<24>>24)}},{unsafe:!0})}else k=function(t){s(this,k,R);var e=l(t);T(this,{bytes:A.call(new Array(e),0),byteLength:e}),o||(this.byteLength=e)},E=function(t,e,r){s(this,E,x),s(t,k,x);var n=b(t).byteLength,i=c(e);if(i<0||i>n)throw M("Wrong offset");if(i+(r=void 0===r?n-i:h(r))>n)throw M("Wrong length");T(this,{buffer:t,byteLength:r,byteOffset:i}),o||(this.buffer=t,this.byteLength=r,this.byteOffset=i)},o&&(Y(k,"byteLength"),Y(E,"buffer"),Y(E,"byteLength"),Y(E,"byteOffset")),u(E.prototype,{getInt8:function(t){return $(this,1,t)[0]<<24>>24},getUint8:function(t){return $(this,1,t)[0]},getInt16:function(t){var e=$(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=$(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return _($(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return _($(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return B($(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return B($(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){N(this,1,t,P,e)},setUint8:function(t,e){N(this,1,t,P,e)},setInt16:function(t,e){N(this,2,t,q,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){N(this,2,t,q,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){N(this,4,t,C,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){N(this,4,t,C,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){N(this,4,t,j,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){N(this,8,t,F,e,arguments.length>2?arguments[2]:void 0)}});w(k,R),w(E,x),t.exports={ArrayBuffer:k,DataView:E}},1048:function(t,e,r){"use strict";var n=r(7908),o=r(1400),i=r(7466),a=Math.min;t.exports=[].copyWithin||function(t,e){var r=n(this),u=i(r.length),f=o(t,u),s=o(e,u),c=arguments.length>2?arguments[2]:void 0,h=a((void 0===c?u:o(c,u))-s,u-f),l=1;for(s<f&&f<s+h&&(l=-1,s+=h-1,f+=h-1);h-- >0;)s in r?r[f]=r[s]:delete r[f],f+=l,s+=l;return r}},1285:function(t,e,r){"use strict";var n=r(7908),o=r(1400),i=r(7466);t.exports=function(t){for(var e=n(this),r=i(e.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,r),f=a>2?arguments[2]:void 0,s=void 0===f?r:o(f,r);s>u;)e[u++]=t;return e}},7745:function(t){t.exports=function(t,e){for(var r=0,n=e.length,o=new t(n);n>r;)o[r]=e[r++];return o}},8457:function(t,e,r){"use strict";var n=r(9974),o=r(7908),i=r(3411),a=r(7659),u=r(7466),f=r(6135),s=r(1246);t.exports=function(t){var e,r,c,h,l,p,y=o(t),v="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,A=void 0!==g,w=s(y),m=0;if(A&&(g=n(g,d>2?arguments[2]:void 0,2)),null==w||v==Array&&a(w))for(r=new v(e=u(y.length));e>m;m++)p=A?g(y[m],m):y[m],f(r,m,p);else for(l=(h=w.call(y)).next,r=new v;!(c=l.call(h)).done;m++)p=A?i(h,g,[c.value,m],!0):c.value,f(r,m,p);return r.length=m,r}},6583:function(t,e,r){"use strict";var n=r(5656),o=r(9958),i=r(7466),a=r(9341),u=Math.min,f=[].lastIndexOf,s=!!f&&1/[1].lastIndexOf(1,-0)<0,c=a("lastIndexOf"),h=s||!c;t.exports=h?function(t){if(s)return f.apply(this,arguments)||0;var e=n(this),r=i(e.length),a=r-1;for(arguments.length>1&&(a=u(a,o(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:f},3671:function(t,e,r){var n=r(3099),o=r(7908),i=r(8361),a=r(7466),u=function(t){return function(e,r,u,f){n(r);var s=o(e),c=i(s),h=a(s.length),l=t?h-1:0,p=t?-1:1;if(u<2)for(;;){if(l in c){f=c[l],l+=p;break}if(l+=p,t?l<0:h<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:h>l;l+=p)l in c&&(f=r(f,c[l],l,s));return f}};t.exports={left:u(!1),right:u(!0)}},4362:function(t){var e=Math.floor,r=function(t,i){var a=t.length,u=e(a/2);return a<8?n(t,i):o(r(t.slice(0,u),i),r(t.slice(u),i),i)},n=function(t,e){for(var r,n,o=t.length,i=1;i<o;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},o=function(t,e,r){for(var n=t.length,o=e.length,i=0,a=0,u=[];i<n||a<o;)i<n&&a<o?u.push(r(t[i],e[a])<=0?t[i++]:e[a++]):u.push(i<n?t[i++]:e[a++]);return u};t.exports=r},3411:function(t,e,r){var n=r(9670),o=r(9212);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){throw o(t),e}}},8886:function(t,e,r){var n=r(8113).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},256:function(t,e,r){var n=r(8113);t.exports=/MSIE|Trident/.test(n)},8008:function(t,e,r){var n=r(8113).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},8554:function(t,e,r){var n=r(9670),o=r(1246);t.exports=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return n(e.call(t))}},647:function(t,e,r){var n=r(7908),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,f,s,c){var h=r+t.length,l=f.length,p=u;return void 0!==s&&(s=n(s),p=a),i.call(c,p,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(h);case"<":a=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var c=o(u/10);return 0===c?n:c<=l?void 0===f[c-1]?i.charAt(1):f[c-1]+i.charAt(1):n}a=f[u-1]}return void 0===a?"":a}))}},1179:function(t){var e=Math.abs,r=Math.pow,n=Math.floor,o=Math.log,i=Math.LN2;t.exports={pack:function(t,a,u){var f,s,c,h=new Array(u),l=8*u-a-1,p=(1<<l)-1,y=p>>1,v=23===a?r(2,-24)-r(2,-77):0,d=t<0||0===t&&1/t<0?1:0,g=0;for((t=e(t))!=t||t===1/0?(s=t!=t?1:0,f=p):(f=n(o(t)/i),t*(c=r(2,-f))<1&&(f--,c*=2),(t+=f+y>=1?v/c:v*r(2,1-y))*c>=2&&(f++,c/=2),f+y>=p?(s=0,f=p):f+y>=1?(s=(t*c-1)*r(2,a),f+=y):(s=t*r(2,y-1)*r(2,a),f=0));a>=8;h[g++]=255&s,s/=256,a-=8);for(f=f<<a|s,l+=a;l>0;h[g++]=255&f,f/=256,l-=8);return h[--g]|=128*d,h},unpack:function(t,e){var n,o=t.length,i=8*o-e-1,a=(1<<i)-1,u=a>>1,f=i-7,s=o-1,c=t[s--],h=127&c;for(c>>=7;f>0;h=256*h+t[s],s--,f-=8);for(n=h&(1<<-f)-1,h>>=-f,f+=e;f>0;n=256*n+t[s],s--,f-=8);if(0===h)h=1-u;else{if(h===a)return n?NaN:c?-1/0:1/0;n+=r(2,e),h-=u}return(c?-1:1)*n*r(2,h-e)}}},9587:function(t,e,r){var n=r(111),o=r(7674);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},8730:function(t,e,r){var n=r(111),o=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&o(t)===t}},590:function(t,e,r){var n=r(7293),o=r(5112),i=r(1913),a=o("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),i&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},1574:function(t,e,r){"use strict";var n=r(9781),o=r(7293),i=r(1956),a=r(5181),u=r(5296),f=r(7908),s=r(8361),c=Object.assign,h=Object.defineProperty;t.exports=!c||o((function(){if(n&&1!==c({b:1},c(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),o="abcdefghijklmnopqrst";return t[r]=7,o.split("").forEach((function(t){e[t]=t})),7!=c({},t)[r]||i(c({},e)).join("")!=o}))?function(t,e){for(var r=f(t),o=arguments.length,c=1,h=a.f,l=u.f;o>c;)for(var p,y=s(arguments[c++]),v=h?i(y).concat(h(y)):i(y),d=v.length,g=0;d>g;)p=v[g++],n&&!l.call(y,p)||(r[p]=y[p]);return r}:c},3197:function(t){"use strict";var e=2147483647,r=/[^\0-\u007E]/,n=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",i=Math.floor,a=String.fromCharCode,u=function(t){return t+22+75*(t<26)},f=function(t,e,r){var n=0;for(t=r?i(t/700):t>>1,t+=i(t/e);t>455;n+=36)t=i(t/35);return i(n+36*t/(t+38))},s=function(t){var r,n,s=[],c=(t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=t.charCodeAt(r++);56320==(64512&i)?e.push(((1023&o)<<10)+(1023&i)+65536):(e.push(o),r--)}else e.push(o)}return e}(t)).length,h=128,l=0,p=72;for(r=0;r<t.length;r++)(n=t[r])<128&&s.push(a(n));var y=s.length,v=y;for(y&&s.push("-");v<c;){var d=e;for(r=0;r<t.length;r++)(n=t[r])>=h&&n<d&&(d=n);var g=v+1;if(d-h>i((e-l)/g))throw RangeError(o);for(l+=(d-h)*g,h=d,r=0;r<t.length;r++){if((n=t[r])<h&&++l>e)throw RangeError(o);if(n==h){for(var A=l,w=36;;w+=36){var m=w<=p?1:w>=p+26?26:w-p;if(A<m)break;var b=A-m,T=36-m;s.push(a(u(m+b%T))),A=i(b/T)}s.push(a(u(A))),p=f(l,g,v==y),l=0,++v}}++l,++h}return s.join("")};t.exports=function(t){var e,o,i=[],a=t.toLowerCase().replace(n,".").split(".");for(e=0;e<a.length;e++)o=a[e],i.push(r.test(o)?"xn--"+s(o):o);return i.join(".")}},7067:function(t,e,r){var n=r(9958),o=r(7466);t.exports=function(t){if(void 0===t)return 0;var e=n(t),r=o(e);if(e!==r)throw RangeError("Wrong length or index");return r}},4590:function(t,e,r){var n=r(3002);t.exports=function(t,e){var r=n(t);if(r%e)throw RangeError("Wrong offset");return r}},3002:function(t,e,r){var n=r(9958);t.exports=function(t){var e=n(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},9843:function(t,e,r){"use strict";var n=r(2109),o=r(7854),i=r(9781),a=r(3832),u=r(260),f=r(3331),s=r(5787),c=r(9114),h=r(8880),l=r(8730),p=r(7466),y=r(7067),v=r(4590),d=r(4948),g=r(6656),A=r(648),w=r(111),m=r(2190),b=r(30),T=r(7674),R=r(8006).f,x=r(7321),U=r(2092).forEach,L=r(6340),k=r(3070),E=r(1236),I=r(9909),S=r(9587),M=I.get,O=I.set,B=k.f,P=E.f,q=Math.round,C=o.RangeError,_=f.ArrayBuffer,j=f.DataView,F=u.NATIVE_ARRAY_BUFFER_VIEWS,Y=u.TYPED_ARRAY_CONSTRUCTOR,$=u.TYPED_ARRAY_TAG,N=u.TypedArray,D=u.TypedArrayPrototype,V=u.aTypedArrayConstructor,W=u.isTypedArray,G="BYTES_PER_ELEMENT",z="Wrong length",J=function(t,e){for(var r=0,n=e.length,o=new(V(t))(n);n>r;)o[r]=e[r++];return o},Z=function(t,e){B(t,e,{get:function(){return M(this)[e]}})},H=function(t){var e;return t instanceof _||"ArrayBuffer"==(e=A(t))||"SharedArrayBuffer"==e},K=function(t,e){return W(t)&&!m(e)&&e in t&&l(+e)&&e>=0},Q=function(t,e){return e=d(e),K(t,e)?c(2,t[e]):P(t,e)},X=function(t,e,r){return e=d(e),!(K(t,e)&&w(r)&&g(r,"value"))||g(r,"get")||g(r,"set")||r.configurable||g(r,"writable")&&!r.writable||g(r,"enumerable")&&!r.enumerable?B(t,e,r):(t[e]=r.value,t)};i?(F||(E.f=Q,k.f=X,Z(D,"buffer"),Z(D,"byteOffset"),Z(D,"byteLength"),Z(D,"length")),n({target:"Object",stat:!0,forced:!F},{getOwnPropertyDescriptor:Q,defineProperty:X}),t.exports=function(t,e,r){var i=t.match(/\d+$/)[0]/8,u=t+(r?"Clamped":"")+"Array",f="get"+t,c="set"+t,l=o[u],d=l,g=d&&d.prototype,A={},m=function(t,e){B(t,e,{get:function(){return function(t,e){var r=M(t);return r.view[f](e*i+r.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,n){var o=M(t);r&&(n=(n=q(n))<0?0:n>255?255:255&n),o.view[c](e*i+o.byteOffset,n,!0)}(this,e,t)},enumerable:!0})};F?a&&(d=e((function(t,e,r,n){return s(t,d,u),S(w(e)?H(e)?void 0!==n?new l(e,v(r,i),n):void 0!==r?new l(e,v(r,i)):new l(e):W(e)?J(d,e):x.call(d,e):new l(y(e)),t,d)})),T&&T(d,N),U(R(l),(function(t){t in d||h(d,t,l[t])})),d.prototype=g):(d=e((function(t,e,r,n){s(t,d,u);var o,a,f,c=0,h=0;if(w(e)){if(!H(e))return W(e)?J(d,e):x.call(d,e);o=e,h=v(r,i);var l=e.byteLength;if(void 0===n){if(l%i)throw C(z);if((a=l-h)<0)throw C(z)}else if((a=p(n)*i)+h>l)throw C(z);f=a/i}else f=y(e),o=new _(a=f*i);for(O(t,{buffer:o,byteOffset:h,byteLength:a,length:f,view:new j(o)});c<f;)m(t,c++)})),T&&T(d,N),g=d.prototype=b(D)),g.constructor!==d&&h(g,"constructor",d),h(g,Y,d),$&&h(g,$,u),A[u]=d,n({global:!0,forced:d!=l,sham:!F},A),G in d||h(d,G,i),G in g||h(g,G,i),L(u)}):t.exports=function(){}},3832:function(t,e,r){var n=r(7854),o=r(7293),i=r(7072),a=r(260).NATIVE_ARRAY_BUFFER_VIEWS,u=n.ArrayBuffer,f=n.Int8Array;t.exports=!a||!o((function(){f(1)}))||!o((function(){new f(-1)}))||!i((function(t){new f,new f(null),new f(1.5),new f(t)}),!0)||o((function(){return 1!==new f(new u(2),1,void 0).length}))},3074:function(t,e,r){var n=r(7745),o=r(6304);t.exports=function(t,e){return n(o(t),e)}},7321:function(t,e,r){var n=r(7908),o=r(7466),i=r(1246),a=r(7659),u=r(9974),f=r(260).aTypedArrayConstructor;t.exports=function(t){var e,r,s,c,h,l,p=n(t),y=arguments.length,v=y>1?arguments[1]:void 0,d=void 0!==v,g=i(p);if(null!=g&&!a(g))for(l=(h=g.call(p)).next,p=[];!(c=l.call(h)).done;)p.push(c.value);for(d&&y>2&&(v=u(v,arguments[2],2)),r=o(p.length),s=new(f(this))(r),e=0;r>e;e++)s[e]=d?v(p[e],e):p[e];return s}},6304:function(t,e,r){var n=r(260),o=r(6707),i=n.TYPED_ARRAY_CONSTRUCTOR,a=n.aTypedArrayConstructor;t.exports=function(t){return a(o(t,t[i]))}},5306:function(t,e,r){"use strict";var n=r(7007),o=r(7293),i=r(9670),a=r(9958),u=r(7466),f=r(1340),s=r(4488),c=r(1530),h=r(647),l=r(7651),p=r(5112)("replace"),y=Math.max,v=Math.min,d="$0"==="a".replace(/./,"$0"),g=!!/./[p]&&""===/./[p]("a","$0");n("replace",(function(t,e,r){var n=g?"$":"$0";return[function(t,r){var n=s(this),o=null==t?void 0:t[p];return void 0!==o?o.call(t,n,r):e.call(f(n),t,r)},function(t,o){var s=i(this),p=f(t);if("string"==typeof o&&-1===o.indexOf(n)&&-1===o.indexOf("$<")){var d=r(e,s,p,o);if(d.done)return d.value}var g="function"==typeof o;g||(o=f(o));var A=s.global;if(A){var w=s.unicode;s.lastIndex=0}for(var m=[];;){var b=l(s,p);if(null===b)break;if(m.push(b),!A)break;""===f(b[0])&&(s.lastIndex=c(p,u(s.lastIndex),w))}for(var T,R="",x=0,U=0;U<m.length;U++){b=m[U];for(var L=f(b[0]),k=y(v(a(b.index),p.length),0),E=[],I=1;I<b.length;I++)E.push(void 0===(T=b[I])?T:String(T));var S=b.groups;if(g){var M=[L].concat(E,k,p);void 0!==S&&M.push(S);var O=f(o.apply(void 0,M))}else O=h(L,p,k,E,S,o);k>=x&&(R+=p.slice(x,k)+O,x=k+L.length)}return R+p.slice(x)}]}),!!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!d||g)},2990:function(t,e,r){"use strict";var n=r(260),o=r(1048),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("copyWithin",(function(t,e){return o.call(i(this),t,e,arguments.length>2?arguments[2]:void 0)}))},8927:function(t,e,r){"use strict";var n=r(260),o=r(2092).every,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("every",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3105:function(t,e,r){"use strict";var n=r(260),o=r(1285),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("fill",(function(t){return o.apply(i(this),arguments)}))},5035:function(t,e,r){"use strict";var n=r(260),o=r(2092).filter,i=r(3074),a=n.aTypedArray;(0,n.exportTypedArrayMethod)("filter",(function(t){var e=o(a(this),t,arguments.length>1?arguments[1]:void 0);return i(this,e)}))},7174:function(t,e,r){"use strict";var n=r(260),o=r(2092).findIndex,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("findIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4345:function(t,e,r){"use strict";var n=r(260),o=r(2092).find,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("find",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},2846:function(t,e,r){"use strict";var n=r(260),o=r(2092).forEach,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("forEach",(function(t){o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4731:function(t,e,r){"use strict";var n=r(260),o=r(1318).includes,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("includes",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},7209:function(t,e,r){"use strict";var n=r(260),o=r(1318).indexOf,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("indexOf",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},6319:function(t,e,r){"use strict";var n=r(7854),o=r(260),i=r(6992),a=r(5112)("iterator"),u=n.Uint8Array,f=i.values,s=i.keys,c=i.entries,h=o.aTypedArray,l=o.exportTypedArrayMethod,p=u&&u.prototype[a],y=!!p&&("values"==p.name||null==p.name),v=function(){return f.call(h(this))};l("entries",(function(){return c.call(h(this))})),l("keys",(function(){return s.call(h(this))})),l("values",v,!y),l(a,v,!y)},8867:function(t,e,r){"use strict";var n=r(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].join;i("join",(function(t){return a.apply(o(this),arguments)}))},7789:function(t,e,r){"use strict";var n=r(260),o=r(6583),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("lastIndexOf",(function(t){return o.apply(i(this),arguments)}))},3739:function(t,e,r){"use strict";var n=r(260),o=r(2092).map,i=r(6304),a=n.aTypedArray;(0,n.exportTypedArrayMethod)("map",(function(t){return o(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(i(t))(e)}))}))},4483:function(t,e,r){"use strict";var n=r(260),o=r(3671).right,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduceRight",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},9368:function(t,e,r){"use strict";var n=r(260),o=r(3671).left,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduce",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2056:function(t,e,r){"use strict";var n=r(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=Math.floor;i("reverse",(function(){for(var t,e=this,r=o(e).length,n=a(r/2),i=0;i<n;)t=e[i],e[i++]=e[--r],e[r]=t;return e}))},3462:function(t,e,r){"use strict";var n=r(260),o=r(7466),i=r(4590),a=r(7908),u=r(7293),f=n.aTypedArray;(0,n.exportTypedArrayMethod)("set",(function(t){f(this);var e=i(arguments.length>1?arguments[1]:void 0,1),r=this.length,n=a(t),u=o(n.length),s=0;if(u+e>r)throw RangeError("Wrong length");for(;s<u;)this[e+s]=n[s++]}),u((function(){new Int8Array(1).set({})})))},678:function(t,e,r){"use strict";var n=r(260),o=r(6304),i=r(7293),a=n.aTypedArray,u=n.exportTypedArrayMethod,f=[].slice;u("slice",(function(t,e){for(var r=f.call(a(this),t,e),n=o(this),i=0,u=r.length,s=new n(u);u>i;)s[i]=r[i++];return s}),i((function(){new Int8Array(1).slice()})))},7462:function(t,e,r){"use strict";var n=r(260),o=r(2092).some,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("some",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3824:function(t,e,r){"use strict";var n=r(260),o=r(7854),i=r(7293),a=r(3099),u=r(7466),f=r(4362),s=r(8886),c=r(256),h=r(7392),l=r(8008),p=n.aTypedArray,y=n.exportTypedArrayMethod,v=o.Uint16Array,d=v&&v.prototype.sort,g=!!d&&!i((function(){var t=new v(2);t.sort(null),t.sort({})})),A=!!d&&!i((function(){if(h)return h<74;if(s)return s<67;if(c)return!0;if(l)return l<602;var t,e,r=new v(516),n=Array(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(r.sort((function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0}));y("sort",(function(t){var e=this;if(void 0!==t&&a(t),A)return d.call(e,t);p(e);var r,n=u(e.length),o=Array(n);for(r=0;r<n;r++)o[r]=e[r];for(o=f(e,function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}}(t)),r=0;r<n;r++)e[r]=o[r];return e}),!A||g)},5021:function(t,e,r){"use strict";var n=r(260),o=r(7466),i=r(1400),a=r(6304),u=n.aTypedArray;(0,n.exportTypedArrayMethod)("subarray",(function(t,e){var r=u(this),n=r.length,f=i(t,n);return new(a(r))(r.buffer,r.byteOffset+f*r.BYTES_PER_ELEMENT,o((void 0===e?n:i(e,n))-f))}))},2974:function(t,e,r){"use strict";var n=r(7854),o=r(260),i=r(7293),a=n.Int8Array,u=o.aTypedArray,f=o.exportTypedArrayMethod,s=[].toLocaleString,c=[].slice,h=!!a&&i((function(){s.call(new a(1))}));f("toLocaleString",(function(){return s.apply(h?c.call(u(this)):u(this),arguments)}),i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])})))},5016:function(t,e,r){"use strict";var n=r(260).exportTypedArrayMethod,o=r(7293),i=r(7854).Uint8Array,a=i&&i.prototype||{},u=[].toString,f=[].join;o((function(){u.call({})}))&&(u=function(){return f.call(this)});var s=a.toString!=u;n("toString",u,s)},2472:function(t,e,r){r(9843)("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},1637:function(t,e,r){"use strict";r(6992);var n=r(2109),o=r(5005),i=r(590),a=r(1320),u=r(2248),f=r(8003),s=r(4994),c=r(9909),h=r(5787),l=r(6656),p=r(9974),y=r(648),v=r(9670),d=r(111),g=r(1340),A=r(30),w=r(9114),m=r(8554),b=r(1246),T=r(5112),R=o("fetch"),x=o("Request"),U=x&&x.prototype,L=o("Headers"),k=T("iterator"),E="URLSearchParams",I="URLSearchParamsIterator",S=c.set,M=c.getterFor(E),O=c.getterFor(I),B=/\+/g,P=Array(4),q=function(t){return P[t-1]||(P[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},C=function(t){try{return decodeURIComponent(t)}catch(e){return t}},_=function(t){var e=t.replace(B," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=e.replace(q(r--),C);return e}},j=/[!'()~]|%20/g,F={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Y=function(t){return F[t]},$=function(t){return encodeURIComponent(t).replace(j,Y)},N=function(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:_(n.shift()),value:_(n.join("="))}))},D=function(t){this.entries.length=0,N(this.entries,t)},V=function(t,e){if(t<e)throw TypeError("Not enough arguments")},W=s((function(t,e){S(this,{type:I,iterator:m(M(t).entries),kind:e})}),"Iterator",(function(){var t=O(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r})),G=function(){h(this,G,E);var t,e,r,n,o,i,a,u,f,s=arguments.length>0?arguments[0]:void 0,c=this,p=[];if(S(c,{type:E,entries:p,updateURL:function(){},updateSearchParams:D}),void 0!==s)if(d(s))if("function"==typeof(t=b(s)))for(r=(e=t.call(s)).next;!(n=r.call(e)).done;){if((a=(i=(o=m(v(n.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");p.push({key:g(a.value),value:g(u.value)})}else for(f in s)l(s,f)&&p.push({key:f,value:g(s[f])});else N(p,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:g(s))},z=G.prototype;if(u(z,{append:function(t,e){V(arguments.length,2);var r=M(this);r.entries.push({key:g(t),value:g(e)}),r.updateURL()},delete:function(t){V(arguments.length,1);for(var e=M(this),r=e.entries,n=g(t),o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},get:function(t){V(arguments.length,1);for(var e=M(this).entries,r=g(t),n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){V(arguments.length,1);for(var e=M(this).entries,r=g(t),n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},has:function(t){V(arguments.length,1);for(var e=M(this).entries,r=g(t),n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){V(arguments.length,1);for(var r,n=M(this),o=n.entries,i=!1,a=g(t),u=g(e),f=0;f<o.length;f++)(r=o[f]).key===a&&(i?o.splice(f--,1):(i=!0,r.value=u));i||o.push({key:a,value:u}),n.updateURL()},sort:function(){var t,e,r,n=M(this),o=n.entries,i=o.slice();for(o.length=0,r=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},forEach:function(t){for(var e,r=M(this).entries,n=p(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new W(this,"keys")},values:function(){return new W(this,"values")},entries:function(){return new W(this,"entries")}},{enumerable:!0}),a(z,k,z.entries),a(z,"toString",(function(){for(var t,e=M(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push($(t.key)+"="+$(t.value));return r.join("&")}),{enumerable:!0}),f(G,E),n({global:!0,forced:!i},{URLSearchParams:G}),!i&&"function"==typeof L){var J=function(t){if(d(t)){var e,r=t.body;if(y(r)===E)return(e=t.headers?new L(t.headers):new L).has("content-type")||e.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),A(t,{body:w(0,String(r)),headers:w(0,e)})}return t};if("function"==typeof R&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return R(t,arguments.length>1?J(arguments[1]):{})}}),"function"==typeof x){var Z=function(t){return h(this,Z,"Request"),new x(t,arguments.length>1?J(arguments[1]):{})};U.constructor=Z,Z.prototype=U,n({global:!0,forced:!0},{Request:Z})}}t.exports={URLSearchParams:G,getState:M}},285:function(t,e,r){"use strict";r(8783);var n,o=r(2109),i=r(9781),a=r(590),u=r(7854),f=r(6048),s=r(1320),c=r(5787),h=r(6656),l=r(1574),p=r(8457),y=r(8710).codeAt,v=r(3197),d=r(1340),g=r(8003),A=r(1637),w=r(9909),m=u.URL,b=A.URLSearchParams,T=A.getState,R=w.set,x=w.getterFor("URL"),U=Math.floor,L=Math.pow,k="Invalid scheme",E="Invalid host",I="Invalid port",S=/[A-Za-z]/,M=/[\d+-.A-Za-z]/,O=/\d/,B=/^0x/i,P=/^[0-7]+$/,q=/^\d+$/,C=/^[\dA-Fa-f]+$/,_=/[\0\t\n\r #%/:<>?@[\\\]^|]/,j=/[\0\t\n\r #/:<>?@[\\\]^|]/,F=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,Y=/[\t\n\r]/g,$=function(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return E;if(!(r=D(e.slice(1,-1))))return E;t.host=r}else if(K(t)){if(e=v(e),_.test(e))return E;if(null===(r=N(e)))return E;t.host=r}else{if(j.test(e))return E;for(r="",n=p(e),o=0;o<n.length;o++)r+=Z(n[o],W);t.host=r}},N=function(t){var e,r,n,o,i,a,u,f=t.split(".");if(f.length&&""==f[f.length-1]&&f.pop(),(e=f.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(o=f[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=B.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?q:8==i?P:C).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=L(256,5-e))return null}else if(a>255)return null;for(u=r.pop(),n=0;n<r.length;n++)u+=r[n]*L(256,3-n);return u},D=function(t){var e,r,n,o,i,a,u,f=[0,0,0,0,0,0,0,0],s=0,c=null,h=0,l=function(){return t.charAt(h)};if(":"==l()){if(":"!=t.charAt(1))return;h+=2,c=++s}for(;l();){if(8==s)return;if(":"!=l()){for(e=r=0;r<4&&C.test(l());)e=16*e+parseInt(l(),16),h++,r++;if("."==l()){if(0==r)return;if(h-=r,s>6)return;for(n=0;l();){if(o=null,n>0){if(!("."==l()&&n<4))return;h++}if(!O.test(l()))return;for(;O.test(l());){if(i=parseInt(l(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;h++}f[s]=256*f[s]+o,2!=++n&&4!=n||s++}if(4!=n)return;break}if(":"==l()){if(h++,!l())return}else if(l())return;f[s++]=e}else{if(null!==c)return;h++,c=++s}}if(null!==c)for(a=s-c,s=7;0!=s&&a>0;)u=f[s],f[s--]=f[c+a-1],f[c+--a]=u;else if(8!=s)return;return f},V=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=U(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}return t},W={},G=l({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),z=l({},G,{"#":1,"?":1,"{":1,"}":1}),J=l({},z,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Z=function(t,e){var r=y(t,0);return r>32&&r<127&&!h(e,t)?t:encodeURIComponent(t)},H={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(t){return h(H,t.scheme)},Q=function(t){return""!=t.username||""!=t.password},X=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},tt=function(t,e){var r;return 2==t.length&&S.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)},et=function(t){var e;return t.length>1&&tt(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},rt=function(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&tt(e[0],!0)||e.pop()},nt=function(t){return"."===t||"%2e"===t.toLowerCase()},ot={},it={},at={},ut={},ft={},st={},ct={},ht={},lt={},pt={},yt={},vt={},dt={},gt={},At={},wt={},mt={},bt={},Tt={},Rt={},xt={},Ut=function(t,e,r,o){var i,a,u,f,s,c=r||ot,l=0,y="",v=!1,d=!1,g=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(F,"")),e=e.replace(Y,""),i=p(e);l<=i.length;){switch(a=i[l],c){case ot:if(!a||!S.test(a)){if(r)return k;c=at;continue}y+=a.toLowerCase(),c=it;break;case it:if(a&&(M.test(a)||"+"==a||"-"==a||"."==a))y+=a.toLowerCase();else{if(":"!=a){if(r)return k;y="",c=at,l=0;continue}if(r&&(K(t)!=h(H,y)||"file"==y&&(Q(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=y,r)return void(K(t)&&H[t.scheme]==t.port&&(t.port=null));y="","file"==t.scheme?c=gt:K(t)&&o&&o.scheme==t.scheme?c=ut:K(t)?c=ht:"/"==i[l+1]?(c=ft,l++):(t.cannotBeABaseURL=!0,t.path.push(""),c=Tt)}break;case at:if(!o||o.cannotBeABaseURL&&"#"!=a)return k;if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,c=xt;break}c="file"==o.scheme?gt:st;continue;case ut:if("/"!=a||"/"!=i[l+1]){c=st;continue}c=lt,l++;break;case ft:if("/"==a){c=pt;break}c=bt;continue;case st:if(t.scheme=o.scheme,a==n)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\"==a&&K(t))c=ct;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",c=Rt;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),c=bt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",c=xt}break;case ct:if(!K(t)||"/"!=a&&"\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,c=bt;continue}c=pt}else c=lt;break;case ht:if(c=lt,"/"!=a||"/"!=y.charAt(l+1))continue;l++;break;case lt:if("/"!=a&&"\\"!=a){c=pt;continue}break;case pt:if("@"==a){v&&(y="%40"+y),v=!0,u=p(y);for(var A=0;A<u.length;A++){var w=u[A];if(":"!=w||g){var m=Z(w,J);g?t.password+=m:t.username+=m}else g=!0}y=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)){if(v&&""==y)return"Invalid authority";l-=p(y).length+1,y="",c=yt}else y+=a;break;case yt:case vt:if(r&&"file"==t.scheme){c=wt;continue}if(":"!=a||d){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)){if(K(t)&&""==y)return E;if(r&&""==y&&(Q(t)||null!==t.port))return;if(f=$(t,y))return f;if(y="",c=mt,r)return;continue}"["==a?d=!0:"]"==a&&(d=!1),y+=a}else{if(""==y)return E;if(f=$(t,y))return f;if(y="",c=dt,r==vt)return}break;case dt:if(!O.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&K(t)||r){if(""!=y){var b=parseInt(y,10);if(b>65535)return I;t.port=K(t)&&b===H[t.scheme]?null:b,y=""}if(r)return;c=mt;continue}return I}y+=a;break;case gt:if(t.scheme="file","/"==a||"\\"==a)c=At;else{if(!o||"file"!=o.scheme){c=bt;continue}if(a==n)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",c=Rt;else{if("#"!=a){et(i.slice(l).join(""))||(t.host=o.host,t.path=o.path.slice(),rt(t)),c=bt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",c=xt}}break;case At:if("/"==a||"\\"==a){c=wt;break}o&&"file"==o.scheme&&!et(i.slice(l).join(""))&&(tt(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),c=bt;continue;case wt:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!r&&tt(y))c=bt;else if(""==y){if(t.host="",r)return;c=mt}else{if(f=$(t,y))return f;if("localhost"==t.host&&(t.host=""),r)return;y="",c=mt}continue}y+=a;break;case mt:if(K(t)){if(c=bt,"/"!=a&&"\\"!=a)continue}else if(r||"?"!=a)if(r||"#"!=a){if(a!=n&&(c=bt,"/"!=a))continue}else t.fragment="",c=xt;else t.query="",c=Rt;break;case bt:if(a==n||"/"==a||"\\"==a&&K(t)||!r&&("?"==a||"#"==a)){if(".."===(s=(s=y).toLowerCase())||"%2e."===s||".%2e"===s||"%2e%2e"===s?(rt(t),"/"==a||"\\"==a&&K(t)||t.path.push("")):nt(y)?"/"==a||"\\"==a&&K(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&tt(y)&&(t.host&&(t.host=""),y=y.charAt(0)+":"),t.path.push(y)),y="","file"==t.scheme&&(a==n||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",c=Rt):"#"==a&&(t.fragment="",c=xt)}else y+=Z(a,z);break;case Tt:"?"==a?(t.query="",c=Rt):"#"==a?(t.fragment="",c=xt):a!=n&&(t.path[0]+=Z(a,W));break;case Rt:r||"#"!=a?a!=n&&("'"==a&&K(t)?t.query+="%27":t.query+="#"==a?"%23":Z(a,W)):(t.fragment="",c=xt);break;case xt:a!=n&&(t.fragment+=Z(a,G))}l++}},Lt=function(t){var e,r,n=c(this,Lt,"URL"),o=arguments.length>1?arguments[1]:void 0,a=d(t),u=R(n,{type:"URL"});if(void 0!==o)if(o instanceof Lt)e=x(o);else if(r=Ut(e={},d(o)))throw TypeError(r);if(r=Ut(u,a,null,e))throw TypeError(r);var f=u.searchParams=new b,s=T(f);s.updateSearchParams(u.query),s.updateURL=function(){u.query=String(f)||null},i||(n.href=Et.call(n),n.origin=It.call(n),n.protocol=St.call(n),n.username=Mt.call(n),n.password=Ot.call(n),n.host=Bt.call(n),n.hostname=Pt.call(n),n.port=qt.call(n),n.pathname=Ct.call(n),n.search=_t.call(n),n.searchParams=jt.call(n),n.hash=Ft.call(n))},kt=Lt.prototype,Et=function(){var t=x(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,f=t.fragment,s=e+":";return null!==o?(s+="//",Q(t)&&(s+=r+(n?":"+n:"")+"@"),s+=V(o),null!==i&&(s+=":"+i)):"file"==e&&(s+="//"),s+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(s+="?"+u),null!==f&&(s+="#"+f),s},It=function(){var t=x(this),e=t.scheme,r=t.port;if("blob"==e)try{return new Lt(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&K(t)?e+"://"+V(t.host)+(null!==r?":"+r:""):"null"},St=function(){return x(this).scheme+":"},Mt=function(){return x(this).username},Ot=function(){return x(this).password},Bt=function(){var t=x(this),e=t.host,r=t.port;return null===e?"":null===r?V(e):V(e)+":"+r},Pt=function(){var t=x(this).host;return null===t?"":V(t)},qt=function(){var t=x(this).port;return null===t?"":String(t)},Ct=function(){var t=x(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},_t=function(){var t=x(this).query;return t?"?"+t:""},jt=function(){return x(this).searchParams},Ft=function(){var t=x(this).fragment;return t?"#"+t:""},Yt=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(i&&f(kt,{href:Yt(Et,(function(t){var e=x(this),r=d(t),n=Ut(e,r);if(n)throw TypeError(n);T(e.searchParams).updateSearchParams(e.query)})),origin:Yt(It),protocol:Yt(St,(function(t){var e=x(this);Ut(e,d(t)+":",ot)})),username:Yt(Mt,(function(t){var e=x(this),r=p(d(t));if(!X(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=Z(r[n],J)}})),password:Yt(Ot,(function(t){var e=x(this),r=p(d(t));if(!X(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=Z(r[n],J)}})),host:Yt(Bt,(function(t){var e=x(this);e.cannotBeABaseURL||Ut(e,d(t),yt)})),hostname:Yt(Pt,(function(t){var e=x(this);e.cannotBeABaseURL||Ut(e,d(t),vt)})),port:Yt(qt,(function(t){var e=x(this);X(e)||(""==(t=d(t))?e.port=null:Ut(e,t,dt))})),pathname:Yt(Ct,(function(t){var e=x(this);e.cannotBeABaseURL||(e.path=[],Ut(e,d(t),mt))})),search:Yt(_t,(function(t){var e=x(this);""==(t=d(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",Ut(e,t,Rt)),T(e.searchParams).updateSearchParams(e.query)})),searchParams:Yt(jt),hash:Yt(Ft,(function(t){var e=x(this);""!=(t=d(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",Ut(e,t,xt)):e.fragment=null}))}),s(kt,"toJSON",(function(){return Et.call(this)}),{enumerable:!0}),s(kt,"toString",(function(){return Et.call(this)}),{enumerable:!0}),m){var $t=m.createObjectURL,Nt=m.revokeObjectURL;$t&&s(Lt,"createObjectURL",(function(t){return $t.apply(m,arguments)})),Nt&&s(Lt,"revokeObjectURL",(function(t){return Nt.apply(m,arguments)}))}g(Lt,"URL"),o({global:!0,forced:!a,sham:!i},{URL:Lt})}}]);