(function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5900f9dd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var u=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],a=(n("034f"),n("2877")),s={},l=Object(a["a"])(s,o,i,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},_=h,b=(n("8f11"),Object(a["a"])(_,v,d,!1,null,"ebbc34ee",null)),m=b.exports,g={name:"Home",components:{HelloWorld:m}},w=g,k=Object(a["a"])(w,p,f,!1,null,null,null),j=k.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NavBar",{attrs:{title:"备忘录"},on:{"click-back":e.backFn}}),n("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:e.swiperOptions}},[n("swiper-slide",[e._v("Slide 1")]),n("swiper-slide",[e._v("Slide 2")]),n("swiper-slide",[e._v("Slide 3")]),n("swiper-slide",[e._v("Slide 4")]),n("swiper-slide",[e._v("Slide 5")]),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),n("h1",[e._v("todolist")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("button",{on:{click:e.addFn}},[e._v("添加")]),e._l(e.todos,(function(t,r){return n("ul",{key:r},[n("li",[e._v(e._s(t.title)+" "),n("button",{on:{click:function(t){return e.delFn(r)}}},[e._v("删除")])])])}))],2)},S=[],x=(n("a434"),n("d02f")),O=(n("488c"),{methods:{addFn:function(){this.todos.push({id:this.todos.length+1,title:this.title})},delFn:function(e){this.todos.splice(e,1)},backFn:function(){alert("back")}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"}},title:"",todos:[{id:1,title:"吃饭"},{id:2,title:"睡觉"},{id:3,title:"女讲师"}]}},components:{Swiper:x["Swiper"],SwiperSlide:x["SwiperSlide"]},directives:{swiper:x["directive"]},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){console.log("Current Swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!1),fetch("/api/v2/cate/index.php").then((function(e){return e.text()})).then((function(e){console.log(e)})),fetch("/v2/cate/index.php").then((function(e){return e.text()})).then((function(e){console.log(e)}))}}),E=O,$=(n("b4e0"),Object(a["a"])(E,y,S,!1,null,"325fdb0c",null)),C=$.exports;r["default"].use(c["a"]);var P=[{path:"/TodoList",component:C},{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],F=new c["a"]({routes:P}),T=F,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qf-navbar"},[n("span",[e._v("logo")]),n("span",[e._v(e._s(e.title))]),n("span",{on:{click:e.backFn}},[e._v("返回")])])},L=[],A={methods:{backFn:function(){this.$emit("click-back")}},props:{title:{type:String,required:!0}}},M=A,N=(n("6bc6"),Object(a["a"])(M,H,L,!1,null,"316ebe68",null)),W=N.exports,q=n("9fae"),B=n.n(q);n("cb7f");r["default"].config.productionTip=!1,r["default"].use((function(e){e.component("NavBar",W)})),r["default"].use(B.a),new r["default"]({router:T,render:function(e){return e(u)}}).$mount("#app")},"6bc6":function(e,t,n){"use strict";n("a57e")},"85ec":function(e,t,n){},8885:function(e,t,n){},"8f11":function(e,t,n){"use strict";n("df05")},a57e:function(e,t,n){},b4e0:function(e,t,n){"use strict";n("8885")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},df05:function(e,t,n){}});
//# sourceMappingURL=app.e75dad20.js.map