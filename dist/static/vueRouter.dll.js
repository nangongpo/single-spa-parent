var vueRouter_3b29d4efcb8b9816fd38=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}({15:function(t,e,r){t.exports=r},16:function(t,e,r){"use strict";function n(t,e){for(var r in e)t[r]=e[r];return t}r.r(e);var o=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,u=function(t){return encodeURIComponent(t).replace(o,i).replace(a,",")};function s(t){try{return decodeURIComponent(t)}catch(t){0}return t}var c=function(t){return null==t||"object"==typeof t?t:String(t)};function p(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=s(r.shift()),o=r.length>0?s(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return u(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(u(e)):n.push(u(e)+"="+u(t)))})),n.join("&")}return u(e)+"="+u(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var h=/\/?$/;function l(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=d(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:m(e,o),matched:t?y(t):[]};return r&&(a.redirectedFrom=m(r,o)),Object.freeze(a)}function d(t){if(Array.isArray(t))return t.map(d);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=d(t[r]);return e}return t}var v=l(null,{path:"/"});function y(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function m(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||f)(n)+o}function g(t,e,r){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(h,"")===e.path.replace(h,"")&&(r||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(r||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length===n.length&&r.every((function(r,o){var i=t[r];if(n[o]!==r)return!1;var a=e[r];return null==i||null==a?i===a:"object"==typeof i&&"object"==typeof a?b(i,a):String(i)===String(a)}))}function w(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var x={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=i.$createElement,s=r.name,c=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;){var l=i.$vnode?i.$vnode.data:{};l.routerView&&f++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=f,h){var d=p[s],v=d&&d.component;return v?(d.configProps&&R(v,a,d.route,d.configProps),u(v,a,o)):u()}var y=c.matched[f],m=y&&y.components[s];if(!y||!m)return p[s]=null,u();p[s]={component:m},a.registerRouteInstance=function(t,e){var r=y.instances[s];(e&&r!==t||!e&&r===t)&&(y.instances[s]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[s]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[s]&&(y.instances[s]=t.componentInstance),w(c)};var g=y.props&&y.props[s];return g&&(n(p[s],{route:c,configProps:g}),R(m,a,c,g)),u(m,a,o)}};function R(t,e,r,o){var i=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,o);if(i){i=e.props=n({},i);var a=e.attrs=e.attrs||{};for(var u in i)t.props&&u in t.props||(a[u]=i[u],delete i[u])}}function k(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function E(t){return t.replace(/\/\//g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},C=V,_=T,A=function(t,e){return $(T(t,e),e)},j=$,S=I,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=P.exec(t));){var s=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=r[2]||u,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:R?M(R):m?".*":"[^"+q(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function L(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",B(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?L:encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var c,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(O(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!r[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function B(t){return t&&t.sensitive?"":"i"}function I(t,e,r){O(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=q(u);else{var s=q(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var p=q(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",U(new RegExp("^"+i,B(r)),e)}function V(t,e,r){return O(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}(t,e):O(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(V(t[o],e,r).source);return U(new RegExp("(?:"+n.join("|")+")",B(r)),e)}(t,e,r):function(t,e,r){return I(T(t,r),e,r)}(t,e,r)}C.parse=_,C.compile=A,C.tokensToFunction=j,C.tokensToRegExp=S;var H=Object.create(null);function N(t,e,r){e=e||{};try{var n=H[t]||(H[t]=C.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function F(t,e,r,o){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){var a=(i=n({},t)).params;return a&&"object"==typeof a&&(i.params=n({},a)),i}if(!i.path&&i.params&&e){(i=n({},i))._normalized=!0;var u=n(n({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;i.path=N(s,u,e.path)}else 0;return i}var f=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),h=e&&e.path||"/",l=f.path?k(f.path,h,r||i.append):h,d=function(t,e,r){void 0===e&&(e={});var n,o=r||p;try{n=o(t||"")}catch(t){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(c):c(a)}return n}(f.query,i.query,o&&o.options.parseQuery),v=i.hash||f.hash;return v&&"#"!==v.charAt(0)&&(v="#"+v),{_normalized:!0,path:l,query:d,hash:v}}var z,D=function(){},K={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,i=r.resolve(this.to,o,this.append),a=i.location,u=i.route,s=i.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,d=null==p?"router-link-active":p,v=null==f?"router-link-exact-active":f,y=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?v:this.exactActiveClass,b=u.redirectedFrom?l(null,F(u.redirectedFrom),null,r):u;c[m]=g(o,b,this.exactPath),c[y]=this.exact||this.exactPath?c[m]:function(t,e){return 0===t.path.replace(h,"/").indexOf(e.path.replace(h,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(o,b);var w=c[m]?this.ariaCurrentValue:null,x=function(t){J(t)&&(e.replace?r.replace(a,D):r.push(a,D))},R={click:J};Array.isArray(this.event)?this.event.forEach((function(t){R[t]=x})):R[this.event]=x;var k={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:x,isActive:c[y],isExactActive:c[m]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)k.on=R,k.attrs={href:s,"aria-current":w};else{var O=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(O){O.isStatic=!1;var C=O.data=n({},O.data);for(var _ in C.on=C.on||{},C.on){var A=C.on[_];_ in R&&(C.on[_]=Array.isArray(A)?A:[A])}for(var j in R)j in C.on?C.on[j].push(R[j]):C.on[j]=x;var S=O.data.attrs=n({},O.data.attrs);S.href=s,S["aria-current"]=w}else k.on=R}return t(this.tag,k,this.$slots.default)}};function J(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var Q="undefined"!=typeof window;function X(t,e,r,n,o){var i=e||[],a=r||Object.create(null),u=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var u=o.path,s=o.name;0;var c=o.pathToRegexpOptions||{},p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return E(e.path+"/"+t)}(u,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:Y(p,c),components:o.components||{default:o.component},alias:o.alias?"string"==typeof o.alias?[o.alias]:o.alias:[],instances:{},enteredCbs:{},name:s,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var i=a?E(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}));r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){0;var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}s&&(n[s]||(n[s]=f))}(i,a,u,t,o)}));for(var s=0,c=i.length;s<c;s++)"*"===i[s]&&(i.push(i.splice(s,1)[0]),c--,s--);return{pathList:i,pathMap:a,nameMap:u}}function Y(t,e){return C(t,[],e)}function W(t,e){var r=X(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=F(t,r,!1,e),c=u.name;if(c){var p=i[c];if(!p)return s(null,u);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=N(p.path,u.params),s(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(G(v.regex,u.path,u.params))return s(v,u,a)}}return s(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(l(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var u=o,c=u.name,p=u.path,f=r.query,h=r.hash,d=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,d=u.hasOwnProperty("params")?u.params:d,c){i[c];return a({_normalized:!0,name:c,query:f,hash:h,params:d},void 0,r)}if(p){var v=function(t,e){return k(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:N(v,d),query:f,hash:h},void 0,r)}return s(null,r)}function s(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:N(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):l(t,r,n,e)}return{match:a,addRoute:function(t,e){var r="object"!=typeof t?i[t]:void 0;X([e||t],n,o,i,r),r&&r.alias.length&&X(r.alias.map((function(t){return{path:t,children:[e]}})),n,o,i,r)},getRoutes:function(){return n.map((function(t){return o[t]}))},addRoutes:function(t){X(t,n,o,i)}}}function G(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1];a&&(r[a.name||"pathMatch"]="string"==typeof n[o]?s(n[o]):n[o])}return!0}var Z=Q&&window.performance&&window.performance.now?window.performance:Date;function tt(){return Z.now().toFixed(3)}var et=tt();function rt(){return et}function nt(t){return et=t}var ot=Object.create(null);function it(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=rt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",st),function(){window.removeEventListener("popstate",st)}}function at(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=rt();if(t)return ot[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){lt(t,i)})).catch((function(t){0})):lt(a,i))}))}}function ut(){var t=rt();t&&(ot[t]={x:window.pageXOffset,y:window.pageYOffset})}function st(t){ut(),t.state&&t.state.key&&nt(t.state.key)}function ct(t){return ft(t.x)||ft(t.y)}function pt(t){return{x:ft(t.x)?t.x:window.pageXOffset,y:ft(t.y)?t.y:window.pageYOffset}}function ft(t){return"number"==typeof t}var ht=/^#\d/;function lt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ht.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:ft((r=i).x)?r.x:0,y:ft(r.y)?r.y:0})}else ct(t)&&(e=pt(t))}else n&&ct(t)&&(e=pt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var dt,vt=Q&&((-1===(dt=window.navigator.userAgent).indexOf("Android 2.")&&-1===dt.indexOf("Android 4.0")||-1===dt.indexOf("Mobile Safari")||-1!==dt.indexOf("Chrome")||-1!==dt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function yt(t,e){ut();var r=window.history;try{if(e){var o=n({},r.state);o.key=rt(),r.replaceState(o,"",t)}else r.pushState({key:nt(tt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function mt(t){yt(t,!0)}function gt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var bt={redirected:2,aborted:4,cancelled:8,duplicated:16};function wt(t,e){return Rt(t,e,bt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return kt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function xt(t,e){return Rt(t,e,bt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Rt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var kt=["params","query","hash"];function Et(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Ot(t,e){return Et(t)&&t._isRouter&&(null==e||t.type===e)}function Ct(t){return function(e,r,n){var o=!1,i=0,a=null;_t(t,(function(t,e,r,u){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var s,c=St((function(e){var o;((o=e).__esModule||jt&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:z.extend(e),r.components[u]=e,--i<=0&&n()})),p=St((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Et(t)?t:new Error(e),n(a))}));try{s=t(c,p)}catch(t){p(t)}if(s)if("function"==typeof s.then)s.then(c,p);else{var f=s.component;f&&"function"==typeof f.then&&f.then(c,p)}}})),o||n()}}function _t(t,e){return At(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function At(t){return Array.prototype.concat.apply([],t)}var jt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function St(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Pt=function(t,e){this.router=t,this.base=function(t){if(!t)if(Q){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Tt(t,e,r,n){var o=_t(t,(function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=z.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return At(n?o.reverse():o)}function Lt(t,e){if(e)return function(){return t.apply(e,arguments)}}Pt.prototype.listen=function(t){this.cb=t},Pt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Pt.prototype.onError=function(t){this.errorCbs.push(t)},Pt.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach((function(e){e(t)})),t}var i=this.current;this.confirmTransition(n,(function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(n,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(Ot(t,bt.redirected)&&i===v||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},Pt.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current;this.pending=t;var i,a,u=function(t){!Ot(t)&&Et(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},s=t.matched.length-1,c=o.matched.length-1;if(g(t,o)&&s===c&&t.matched[s]===o.matched[c])return this.ensureURL(),u(((a=Rt(i=o,t,bt.duplicated,'Avoided redundant navigation to current location: "'+i.fullPath+'".')).name="NavigationDuplicated",a));var p=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),f=p.updated,h=p.deactivated,l=p.activated,d=[].concat(function(t){return Tt(t,"beforeRouteLeave",Lt,!0)}(h),this.router.beforeHooks,function(t){return Tt(t,"beforeRouteUpdate",Lt)}(f),l.map((function(t){return t.beforeEnter})),Ct(l)),v=function(e,r){if(n.pending!==t)return u(xt(o,t));try{e(t,o,(function(e){!1===e?(n.ensureURL(!0),u(function(t,e){return Rt(t,e,bt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(o,t))):Et(e)?(n.ensureURL(!0),u(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(u(wt(o,t)),"object"==typeof e&&e.replace?n.replace(e):n.push(e)):r(e)}))}catch(t){u(t)}};gt(d,v,(function(){gt(function(t){return Tt(t,"beforeRouteEnter",(function(t,e,r,n){return function(t,e,r){return function(n,o,i){return t(n,o,(function(t){"function"==typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)}))}}(t,r,n)}))}(l).concat(n.router.resolveHooks),v,(function(){if(n.pending!==t)return u(xt(o,t));n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){w(t)}))}))}))},Pt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Pt.prototype.setupListeners=function(){},Pt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var $t=function(t){function e(e,r){t.call(this,e,r),this._startLocation=qt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=vt&&r;n&&this.listeners.push(it());var o=function(){var r=t.current,o=qt(t.base);t.current===v&&o===t._startLocation||t.transitionTo(o,(function(t){n&&at(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){yt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){mt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(qt(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?yt(e):mt(e)}},e.prototype.getCurrentLocation=function(){return qt(this.base)},e}(Pt);function qt(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return!t||r!==n&&0!==r.indexOf(E(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Mt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=qt(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}(this.base)||Ut()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=vt&&e;r&&this.listeners.push(it());var n=function(){var e=t.current;Ut()&&t.transitionTo(Bt(),(function(n){r&&at(t.router,n,e,!0),vt||Ht(n.fullPath)}))},o=vt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Vt(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ht(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Bt()!==e&&(t?Vt(e):Ht(e))},e.prototype.getCurrentLocation=function(){return Bt()},e}(Pt);function Ut(){var t=Bt();return"/"===t.charAt(0)||(Ht("/"+t),!1)}function Bt(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function It(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Vt(t){vt?yt(It(t)):window.location.hash=t}function Ht(t){vt?mt(It(t)):window.location.replace(It(t))}var Nt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Ot(t,bt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Pt),Ft=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=W(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!vt&&!1!==t.fallback,this.fallback&&(e="hash"),Q||(e="abstract"),this.mode=e,e){case"history":this.history=new $t(this,t.base);break;case"hash":this.history=new Mt(this,t.base,this.fallback);break;case"abstract":this.history=new Nt(this,t.base);break;default:0}},zt={currentRoute:{configurable:!0}};function Dt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Ft.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},zt.currentRoute.get=function(){return this.history&&this.history.current},Ft.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var r=this.history;if(r instanceof $t||r instanceof Mt){var n=function(t){r.setupListeners(),function(t){var n=r.current,o=e.options.scrollBehavior;vt&&o&&"fullPath"in t&&at(e,t,n,!1)}(t)};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Ft.prototype.beforeEach=function(t){return Dt(this.beforeHooks,t)},Ft.prototype.beforeResolve=function(t){return Dt(this.resolveHooks,t)},Ft.prototype.afterEach=function(t){return Dt(this.afterHooks,t)},Ft.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ft.prototype.onError=function(t){this.history.onError(t)},Ft.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Ft.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Ft.prototype.go=function(t){this.history.go(t)},Ft.prototype.back=function(){this.go(-1)},Ft.prototype.forward=function(){this.go(1)},Ft.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Ft.prototype.resolve=function(t,e,r){var n=F(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Ft.prototype.getRoutes=function(){return this.matcher.getRoutes()},Ft.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Ft.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ft.prototype,zt),Ft.install=function t(e){if(!t.installed||z!==e){t.installed=!0,z=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",x),e.component("RouterLink",K);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Ft.version="3.5.2",Ft.isNavigationFailure=Ot,Ft.NavigationFailureType=bt,Ft.START_LOCATION=v,Q&&window.Vue&&window.Vue.use(Ft),e.default=Ft}});