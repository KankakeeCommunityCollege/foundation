(self.webpackChunkkcc_foundation=self.webpackChunkkcc_foundation||[]).push([[397,310],{5370:function(t,e,n){"use strict";n.r(e),n(2222);var o=n(7981);function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function t(e,n,o,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.buttonEl=e,this.content=n,this.file="".concat(o,".").concat(r),this.mime=i}var e,n;return e=t,(n=[{key:"init",value:function(){var t,e=this,n=this.buttonEl;try{if("string"==typeof n&&(null!=document.querySelector(n)?t=document.querySelector(n):null!=document.getElementById(n)&&(t=document.getElementById(n))),null==n)throw"Error: ".concat(this.buttonEl," cannot be found!");t=n}catch(t){console.error(t)}t.addEventListener("click",(function(t){console.log(t),(0,o.default)(e.content,e.file,e.mime)}))}}])&&r(e.prototype,n),t}();e.default=i},7981:function(t,e,n){"use strict";n.r(e),n(4916),n(3123),n(6992),n(1539),n(2472),n(2990),n(8927),n(3105),n(5035),n(4345),n(7174),n(2846),n(4731),n(7209),n(6319),n(8867),n(7789),n(3739),n(9368),n(4483),n(2056),n(3462),n(678),n(7462),n(3824),n(5021),n(2974),n(5016),n(8783),n(3948),n(285),n(5306),e.default=function t(e,n,o){var r,i,a=window,c="application/octet-stream",u=o||c,l=e,f=!n&&!o&&l,s=document.createElement("a"),d=function(t){return String(t)},p=a.Blob||a.MozBlob||a.WebKitBlob||d,h=n||"download";if(p=p.call?p.bind(a):Blob,"true"===String(this)&&(u=(l=[l,u])[0],l=l[1]),f&&f.length<2048&&(h=f.split("/").pop().split("?")[0],s.href=f,-1!==s.href.indexOf(f))){var v=new XMLHttpRequest;return v.open("GET",f,!0),v.responseType="blob",v.onload=function(e){t(e.target.response,h,c)},setTimeout((function(){v.send()}),0),v}if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(l)){if(!(l.length>2096103.424&&p!==d))return navigator.msSaveBlob?navigator.msSaveBlob(m(l),h):b(l);u=(l=m(l)).type||c}function m(t){for(var e=t.split(/[:;,]/),n=e[1],o=("base64"==e[2]?atob:decodeURIComponent)(e.pop()),r=o.length,i=0,a=new Uint8Array(r);i<r;++i)a[i]=o.charCodeAt(i);return new p([a],{type:n})}function b(t,e){if("download"in s)return s.href=t,s.setAttribute("download",h),s.className="download-js-link",s.innerHTML="downloading...",s.style.display="none",document.body.appendChild(s),setTimeout((function(){s.click(),document.body.removeChild(s),!0===e&&setTimeout((function(){a.URL.revokeObjectURL(s.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return t=t.replace(/^data:([\w\/\-\+]+)/,c),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),e||(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=l instanceof p?l:new p([l],{type:u}),navigator.msSaveBlob)return navigator.msSaveBlob(r,h);if(a.URL)b(a.URL.createObjectURL(r),!0);else{if("string"==typeof r||r.constructor===d)try{return b("data:"+u+";base64,"+a.btoa(r))}catch(t){return b("data:"+u+","+encodeURIComponent(r))}(i=new FileReader).onload=function(t){b(this.result)},i.readAsDataURL(r)}return!0}},8457:function(t,e,n){"use strict";var o=n(9974),r=n(7908),i=n(3411),a=n(7659),c=n(7466),u=n(6135),l=n(1246);t.exports=function(t){var e,n,f,s,d,p,h=r(t),v="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,w=void 0!==b,y=l(h),g=0;if(w&&(b=o(b,m>2?arguments[2]:void 0,2)),null==y||v==Array&&a(y))for(n=new v(e=c(h.length));e>g;g++)p=w?b(h[g],g):h[g],u(n,g,p);else for(d=(s=y.call(h)).next,n=new v;!(f=d.call(s)).done;g++)p=w?i(s,b,[f.value,g],!0):f.value,u(n,g,p);return n.length=g,n}},1194:function(t,e,n){var o=n(7293),r=n(5112),i=n(7392),a=r("species");t.exports=function(t){return i>=51||!o((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3411:function(t,e,n){var o=n(9670),r=n(9212);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(e){throw r(t),e}}},2222:function(t,e,n){"use strict";var o=n(2109),r=n(7293),i=n(3157),a=n(111),c=n(7908),u=n(7466),l=n(6135),f=n(5417),s=n(1194),d=n(5112),p=n(7392),h=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),w=s("concat"),y=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};o({target:"Array",proto:!0,forced:!b||!w},{concat:function(t){var e,n,o,r,i,a=c(this),s=f(a,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(y(i=-1===e?a:arguments[e])){if(d+(r=u(i.length))>v)throw TypeError(m);for(n=0;n<r;n++,d++)n in i&&l(s,d,i[n])}else{if(d>=v)throw TypeError(m);l(s,d++,i)}return s.length=d,s}})}}]);