webpackJsonp([1],{"8H+m":function(t,e){},NHnr:function(t,e,a){"use strict";function n(){for(var t=document.getElementById("balloonicon"),e=["#ab47bc","#5c6bc0","#29b6f6","#66bb6a","#ffee58","#ffa726","#ef5350"],a=0;a<49;a++){var n=document.createElement("div");n.style["background-color"]=e[a%7],n.style.width="1vw",n.style.height="1vw",n.style.position="absolute",n.style.bottom="-14vw",n.style.right="-8vw",n.style["border-radius"]="50%",n.style["z-index"]=0,t.appendChild(n),function(t,e){c()({targets:t,delay:function(){return 8*e},translateX:function(){return c.a.random(6,12)+"vw"},translateY:function(){return c.a.random(8,15)+"vw"},duration:function(t){return 1200},scale:c.a.random(1.5,2),opacity:0,loop:!0,easing:"linear"})}(n,a)}}function i(t,e,a){for(var n=document.getElementById(t),i=Math.ceil(2*window.screen.availWidth/250),o=0;o<i;o++){var r=document.createElement("div"),s=c.a.random(225,275);r.style["background-color"]=e,r.style.width=s+"px",r.style.height=s+"px",r.style.position="absolute",r.style.bottom=-s/2+"px",r.style.left=175*o-s/2+c.a.random(-20,20)+a+"px",r.style["border-radius"]="50%",r.style["z-index"]=20,n.appendChild(r),function(t){c()({targets:t,direction:"alternate",delay:function(){return c.a.random(0,1e3)},translateY:function(){return c.a.random(1,2)+"vw"},duration:2e3,loop:!0,easing:"easeInOutQuad"})}(r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},s=a("VU/8")({name:"app"},r,!1,function(t){a("u/tC")},null,null).exports,d=a("/ocq"),l=a("A5qe"),c=a.n(l),u=void 0,f=void 0,p={name:"Landing",mounted:function(){u=c.a.timeline({direction:"normal",autoplay:!0,begin:function(){i("cloud-far","#CBC2DF",-75),i("cloud-close","white",0),n()}}),f=c()({targets:"#unicorn",direction:"alternate",translateY:"2vh",autoplay:!1,duration:1500,loop:!0,easing:"easeInOutQuad"}),u.add({targets:".cloud",opacity:[0,1],translateY:["10vh",0],duration:2e3,easing:"easeInOutQuad",delay:function(t,e){return 500*e}}).add({targets:"#balloonicon",translateY:["90vh",0],translateX:["40vw",0],duration:3e3,elasticity:200,easing:"easeInOutElastic",offset:1e3,complete:function(){return f.play()}}).add({targets:"span",opacity:[0,1],duration:8e3,delay:function(){return c.a.random(0,1e3)},offset:4e3}).add({targets:"#subtitle",opacity:[0,1],duration:3e3,offset:5e3}).add({targets:"#caret",opacity:[0,1],duration:1e3,offset:6e3,complete:function(){return u.pause()}}).add({targets:["#caret","#subtitle","#title"],opacity:0,duration:3e3,offset:7500}).add({targets:"#balloonicon",translateY:"-90vh",translateX:"-40vw",duration:3e3,elasticity:200,easing:"easeInOutElastic",offset:8e3,begin:function(){return f.pause()}}).add({targets:"#cloud-far",opacity:0,translateY:"5vh",duration:3e3,offset:9e3}).add({targets:"#stage",translateY:"-100vh",duration:600,easing:"easeInQuad",offset:9e3,complete:function(){return console.log("complete")}})},methods:{go:function(){u.play()}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"stage"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{attrs:{id:"caret"}},[a("img",{attrs:{src:"/me/svg/caret_down.min.svg"},on:{click:function(e){t.go()}}})]),t._v(" "),a("div",{staticClass:"cloud",attrs:{id:"cloud-far"}}),t._v(" "),a("div",{staticClass:"cloud",attrs:{id:"cloud-close"}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"text"}},[e("h1",{attrs:{id:"title"}},[e("span",[this._v("L")]),e("span",[this._v("O")]),this._v("      "),e("span",[this._v("K")]),e("span",[this._v("K")]),e("span",[this._v("I")]),e("span",[this._v("D")])]),this._v(" "),e("h4",{attrs:{id:"subtitle"}},[this._v("An optimistic 21 years old Thai youth, in love with integrating code and design.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"balloonicon"}},[e("object",{attrs:{id:"unicorn",data:"/me/balloonicorn2.min.svg",type:"image/svg+xml"}})])}]},m=a("VU/8")(p,v,!1,function(t){a("8H+m")},"data-v-9d860ba2",null).exports;o.a.use(d.a);var g=new d.a({mode:"history",routes:[{path:"/me",name:"Landing",component:m}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:g,template:"<App/>",components:{App:s}})},"u/tC":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.24f5370a583c5cd80219.js.map
