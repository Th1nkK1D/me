webpackJsonp([1],{NHnr:function(t,e,n){"use strict";function a(){for(var t=document.getElementById("balloonicon"),e=["#ab47bc","#5c6bc0","#29b6f6","#66bb6a","#ffee58","#ffa726","#ef5350"],n=0;n<49;n++){var a=document.createElement("div");a.style["background-color"]=e[n%7],a.style.width="1vw",a.style.height="1vw",a.style.position="absolute",a.style.bottom="-14vw",a.style.right="-8vw",a.style["border-radius"]="50%",a.style["z-index"]=0,t.appendChild(a),function(t,e){c()({targets:t,delay:function(){return 8*e},translateX:function(){return c.a.random(6,12)+"vw"},translateY:function(){return c.a.random(8,15)+"vw"},duration:function(t){return 1200},scale:c.a.random(1.5,2),opacity:0,loop:!0,easing:"linear"})}(a,n)}}function o(t,e,n){for(var a=document.getElementById(t),o=0;o<9;o++){var i=document.createElement("div"),r=c.a.random(16,20);i.style["background-color"]=e,i.style.width=r+"vw",i.style.height=r+"vw",i.style.position="absolute",i.style.bottom=-r/2+"vw",i.style.left=100*o/8-r/2+c.a.random(-1,1)+n+"vw",i.style["border-radius"]="50%",i.style["z-index"]=20,a.appendChild(i),function(t){c()({targets:t,direction:"alternate",delay:function(){return c.a.random(0,1e3)},translateY:function(){return c.a.random(1,2)+"vw"},duration:2e3,loop:!0,easing:"easeInOutQuad"})}(i)}}Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},s=n("VU/8")({name:"app"},r,!1,function(t){n("u/tC")},null,null).exports,d=n("/ocq"),l=n("A5qe"),c=n.n(l),u={name:"Landing",mounted:function(){c.a.timeline({direction:"normal",autoplay:!0,begin:function(){o("cloud-far","#CBC2DF",5),o("cloud-close","white",0),a()}}).add({targets:".cloud",opacity:[0,1],translateY:["10vh",0],duration:2e3,easing:"easeInOutQuad",delay:function(t,e){return 500*e}}).add({targets:"#balloonicon",translateY:["90vh",0],translateX:["40vw",0],duration:3e3,elasticity:200,easing:"easeInOutElastic",offset:"-=1500"}).add({targets:"span",opacity:[0,1],duration:8e3,delay:function(){return c.a.random(0,1e3)},offset:"-=500"}).add({targets:"#subtitle",opacity:[0,1],duration:3e3,offset:"-=7000"})}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stage"}},[n("div",{attrs:{id:"text"}},[n("h1",{attrs:{id:"title"}},[n("span",[t._v("L")]),n("span",[t._v("O")]),t._v("      "),n("span",[t._v("K")]),n("span",[t._v("K")]),n("span",[t._v("I")]),n("span",[t._v("D")])]),t._v(" "),n("h4",{attrs:{id:"subtitle"}},[t._v("An optimistic 21 years old Thai youth, in love with integrating code and design.")])]),t._v(" "),n("div",{attrs:{id:"balloonicon"}},[n("object",{attrs:{id:"unicorn",data:"/static/balloonicorn2.min.svg",type:"image/svg+xml"}})]),t._v(" "),n("div",{staticClass:"cloud",attrs:{id:"cloud-far"}}),t._v(" "),n("div",{staticClass:"cloud",attrs:{id:"cloud-close"}})])}]},f=n("VU/8")(u,v,!1,function(t){n("dOZc")},"data-v-0596a656",null).exports;i.a.use(d.a);var p=new d.a({mode:"history",routes:[{path:"/",name:"Landing",component:f}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,template:"<App/>",components:{App:s}})},dOZc:function(t,e){},"u/tC":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.db329820e7068795e799.js.map