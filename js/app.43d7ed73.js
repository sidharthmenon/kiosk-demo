(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],c=0,f=[];c<i.length;c++)o=i[c],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6acad29f"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"7d3a41bf"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],c=u.getAttribute("data-href");if(c===r||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.request=r,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e),u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"1a4e":function(e,t,n){"use strict";var r=n("557e"),o=n.n(r);o.a},"428f":function(e,t,n){},"557e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},l=Object(s["a"])(i,o,a,!1,null,null,null),u=l.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{attrs:{lass:"swiper-slide swiper-slide-active",id:"slider"}},[n("div",{staticClass:"container d-inline-flex align-content-center flex-wrap"},[n("h3",{staticClass:"raleway text-left navy_blue font_400 swiper-slider-small-heading margin_default_bottom",staticStyle:{width:"100%"}},[e._v("Medical Services")]),n("h1",{staticClass:"raleway navy_blue text-left swiper-slider-heading font_600 margin_default_bottom"},[e._v("That You Can\n        "),n("span",{staticClass:"font_600 pink_color"},[e._v("Trust")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("p",{staticClass:"open_sans default_small_heading navy_blue margin_default_bottom text-left"},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]),n("div",{staticClass:"text-left"},[n("a",{staticClass:"button button_default_style open_sans bg_pink bg_before_navy btn1",attrs:{href:"#/about"}},[e._v("Our Doctors")])]),n("div",{staticClass:"text-left ml-2"},[n("a",{staticClass:"button button_default_style open_sans bg_pink bg_before_navy btn2",attrs:{href:"#/feedback"}},[e._v("Submit Feedback")])])])])])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},b=h,_=(n("1a4e"),Object(s["a"])(b,p,v,!1,null,"776ca2e7",null)),g=_.exports,m={name:"home",components:{HelloWorld:g}},w=m,y=(n("e0af"),Object(s["a"])(w,f,d,!1,null,"3eb6765d",null)),k=y.exports;r["a"].use(c["a"]);var j=new c["a"]({routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/feedback",name:"feedback",component:function(){return n.e("about").then(n.bind(null,"c6bd"))}},{path:"/thank",name:"thank",component:function(){return n.e("about").then(n.bind(null,"db09"))}}]}),C=n("9483");Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=n("9f7b"),E=n.n(x),O=n("7212"),S=n.n(O);n("dfa4"),n("f9e3"),n("2dd8"),n("428f"),n("8a1d"),n("c2f6"),n("8aef");r["a"].use(E.a),r["a"].use(S.a,{loop:!0}),r["a"].config.productionTip=!1,new r["a"]({router:j,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,n){},"8a1d":function(e,t,n){},"8aef":function(e,t,n){},9691:function(e,t,n){},c2f6:function(e,t,n){},e0af:function(e,t,n){"use strict";var r=n("9691"),o=n.n(r);o.a}});
//# sourceMappingURL=app.43d7ed73.js.map