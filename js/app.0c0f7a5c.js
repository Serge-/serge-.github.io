(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-01bf92e2":"527f7fc4","chunk-071588ca":"c739d5a8","chunk-58bc8615":"87c4ccf6","chunk-944af4a6":"ef6add5b"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-01bf92e2":1,"chunk-071588ca":1,"chunk-58bc8615":1,"chunk-944af4a6":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-01bf92e2":"5806e377","chunk-071588ca":"ce086005","chunk-58bc8615":"98ac858c","chunk-944af4a6":"07d7043f"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08bf":function(t,e,n){},"0cd0":function(t,e,n){},3881:function(t,e,n){t.exports=n.p+"img/home.79c4a279.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b"),o=n("b1e0");n("ab8b"),n("2dd8");r["default"].use(a["a"]),r["default"].use(o["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view"),n("Footer")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"hello"},[n("b-container",[n("b-row",{attrs:{"align-h":"around"}},[n("b-col",{staticClass:"mt-4",attrs:{align:"start",md:"auto"}},[n("p",[n("b",[t._v("Contact")])]),n("ul",[n("li"),n("li",[t._v("Phone: +1(00) 000-00-00")]),n("li",[t._v("Email: distinguishedsociety@mail.com")]),n("li",[t._v("Social: "),n("b-icon",{attrs:{icon:"facebook","aria-hidden":"true"}}),n("b-icon",{attrs:{icon:"linkedin","aria-hidden":"true"}}),n("b-icon",{attrs:{icon:"twitter","aria-hidden":"true"}})],1)])]),n("b-col",{staticClass:"mt-4",attrs:{align:"start",md:"auto"}},[n("p",[n("b",[t._v("Newsletter")])]),n("ul",[n("li",[t._v("Email: distinguishedsociety@mail.com")])])])],1),n("b-row",{attrs:{"align-h":"center"}},[n("p",[t._v("© 2021 DistinguishedSociety")])])],1)],1)},l=[],u={name:"Footer"},d=u,f=(n("9de6"),n("2877")),h=Object(f["a"])(d,c,l,!1,null,"3cd841f3",null),p=h.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("img",{staticStyle:{width:"50px"},attrs:{alt:"DistinguishedSociety",src:n("f295")}}),r("img",{staticClass:"logo",attrs:{alt:"DistinguishedSociety",src:n("f45b")}})]),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/about"}},[t._v("About Us")]),r("router-link",{attrs:{to:"/services"}},[t._v("Services")]),r("router-link",{attrs:{to:"/faq"}},[t._v("FAQ")]),r("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1)],1)],1)},v=[],m={name:"Nav"},g=m,y=(n("6575"),Object(f["a"])(g,b,v,!1,null,"3b29afac",null)),w=y.exports,_={components:{Nav:w,Footer:p}},k=_,x=(n("5c0b"),Object(f["a"])(k,i,s,!1,null,null,null)),S=x.exports,C=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",{attrs:{"align-h":"center"}},[r("h3",[t._v("The recognition you deserve to achieve the status you desire")])]),r("b-row",{attrs:{align:"start"}},[r("p",[t._v("DistinguishedSociety is a personal branding consulting firm that specializes in building social recognition, a solid reputation and a great first impression through honorary academic titles, prestigious international awards, and chivalry and nobility titles tailored to your needs.")])]),r("b-row",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{title:"Honorary Academic Titles"}},[r("b-card-text",[t._v("An honorary doctoral degree bestowed as an honor from licensed and highly ranked awarding institutions – perfect to solidify your accomplishments.")])],1),r("b-card",{attrs:{title:"Chivalry & Nobility Titles"}},[r("b-card-text",[t._v("Legitimate chivalry and nobility titles from the most-coveted European countries with centuries of history and tradition – perfect to elevate your social status, instantly.")])],1),r("b-card",{attrs:{title:"Prestigious International Awards"}},[r("b-card-text",[t._v("State-level awards in the United States, United Kingdom and other countries as well as memberships at renowned organizations and fraternities – which will give your personal brand a distinguished boost.")])],1)],1)],1),r("b-row",[r("h3",[t._v("Why Choose DistinguishedSociety?")])]),r("b-row",{attrs:{align:"start"}},[r("ul",[r("li",[t._v("Decades of experience in personal branding")]),r("li",[t._v("A team with experience, knowledge and connections")]),r("li",[t._v("A comprehensive approach that includes academic titles, chivalry and nobility titles, as well as prestigious international awards and memberships")]),r("li",[t._v("Build a great first impression")]),r("li",[t._v("Express high status instantly")]),r("li",[t._v("Open new personal and professional opportunities")])])]),r("b-row",{staticClass:"justify-content-around",attrs:{"align-v":"center"}},[r("b-col",{attrs:{md:"auto"}},[r("b-calendar",{attrs:{locale:"en-US"},on:{context:t.onContext},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),r("b-col",{attrs:{md:"auto"}},[r("b-button",{attrs:{variant:"outline-primary"}},[t._v("schedule a consultation")])],1)],1),r("b-row",[r("b-img",{attrs:{src:n("3881"),"fluid-grow":"",alt:"Fluid-grow image"}})],1)],1)},E=[],O={name:"Home",data:function(){return{value:"",context:null}},methods:{onContext:function(t){this.context=t}}},A=O,P=(n("c2a6"),Object(f["a"])(A,j,E,!1,null,"207eb7b1",null)),T=P.exports;r["default"].use(C["a"]);var N=[{path:"/",name:"Home",component:T},{path:"/services",name:"Services",component:function(){return n.e("chunk-01bf92e2").then(n.bind(null,"f23e"))}},{path:"/faq",name:"FAQ",component:function(){return n.e("chunk-071588ca").then(n.bind(null,"10c2"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-58bc8615").then(n.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-944af4a6").then(n.bind(null,"b8fa"))}}],D=new C["a"]({mode:"history",base:"/",routes:N}),F=D;r["default"].config.productionTip=!1,new r["default"]({router:F,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6575:function(t,e,n){"use strict";n("08bf")},"9c0c":function(t,e,n){},"9de6":function(t,e,n){"use strict";n("0cd0")},a81b:function(t,e,n){},c2a6:function(t,e,n){"use strict";n("a81b")},f295:function(t,e,n){t.exports=n.p+"img/logo-white.dac25f8d.svg"},f45b:function(t,e,n){t.exports=n.p+"img/distinguishedsociety-white.7f4a8a4e.svg"}});
//# sourceMappingURL=app.0c0f7a5c.js.map