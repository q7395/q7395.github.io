(function(t){function s(s){for(var e,a,c=s[0],r=s[1],l=s[2],p=0,d=[];p<c.length;p++)a=c[p],n[a]&&d.push(n[a][0]),n[a]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(s);while(d.length)d.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,s=0;s<o.length;s++){for(var i=o[s],e=!0,c=1;c<i.length;c++){var r=i[c];0!==n[r]&&(e=!1)}e&&(o.splice(s--,1),t=a(a.s=i[0]))}return t}var e={},n={app:0},o=[];function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,s,i){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)a.d(i,e,function(s){return t[s]}.bind(null,e));return i},a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;o.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"198a":function(t,s,i){"use strict";var e=i("c7e4"),n=i.n(e);n.a},"425c":function(t,s,i){},"552f":function(t,s,i){"use strict";var e=i("d037"),n=i.n(e);n.a},"56d7":function(t,s,i){"use strict";i.r(s);i("cadf"),i("551c"),i("f751"),i("097d");var e=i("2b0e"),n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("app-header",{attrs:{poiInfo:t.poiInfo}}),i("app-nav"),i("router-view")],1)},o=[],a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"header"},[t._m(0),i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"icon",style:t.head_bg}),i("div",{staticClass:"name"},[i("h3",[t._v(t._s(t.poiInfo.name))])]),t._m(1)]),i("div",{staticClass:"bulletin-wrapper"},[t.poiInfo.discounts2?i("img",{staticClass:"icon",attrs:{src:t.poiInfo.discounts2[0].icon_url}}):t._e(),t.poiInfo.discounts2?i("span",{staticClass:"text"},[t._v(t._s(t.poiInfo.discounts2[0].info))]):t._e(),t.poiInfo.discounts2?i("div",{staticClass:"detail",on:{click:t.showBulletin}},[t._v("\n      "+t._s(t.poiInfo.discounts2.length)+"个活动\n      "),i("span",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),i("div",{staticClass:"bg-wrapper",style:t.head_pic_url}),i("transition",{attrs:{name:"bulletin-detail"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"bulletin-detail"},[i("div",{staticClass:"detail-wrapper"},[i("div",{staticClass:"main-wrapper",style:t.detail_bg},[i("div",{staticClass:"icon",style:t.head_bg}),i("h3",{staticClass:"name"},[t._v(t._s(t.poiInfo.name))]),i("div",{staticClass:"score"},[i("app-star",{attrs:{score:t.poiInfo.wm_poi_score}}),i("span",[t._v(t._s(t.poiInfo.wm_poi_score))])],1),i("p",{staticClass:"tip"},[t._v("\n            "+t._s(t.poiInfo.min_price_tip)+"\n            "),i("i",[t._v("|")]),t._v("\n            "+t._s(t.poiInfo.shipping_fee_tip)+"\n            "),i("i",[t._v("|")]),t._v("\n            "+t._s(t.poiInfo.delivery_time_tip)+"\n          ")]),i("p",{staticClass:"time"},[t._v("配送时间："+t._s(t.poiInfo.shipping_time))]),t.poiInfo.discounts2?i("div",{staticClass:"discounts"},[i("p",[i("img",{attrs:{src:t.poiInfo.discounts2[0].icon_url}}),i("span",[t._v(t._s(t.poiInfo.discounts2[0].info))])])]):t._e()]),i("div",{staticClass:"close-wrapper"},[i("span",{staticClass:"icon-close",on:{click:t.closeBulletin}})])])])])],1)},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"top-wrapper"},[i("div",{staticClass:"back-wrapper"},[i("span",{staticClass:"icon-arrow_lift"})]),i("form",{staticClass:"search-wrapper"},[i("span",{staticClass:"search-icon"}),i("input",{staticClass:"search-bar",attrs:{type:"text",placeholder:"搜索店内商品"}})]),i("div",{staticClass:"more-wrapper"},[i("a",{staticClass:"spelling-bt",attrs:{href:"#"}},[t._v("拼单")]),i("div",{staticClass:"more-bt"},[i("i",{staticClass:"s-radius"}),i("i",{staticClass:"s-radius"}),i("i",{staticClass:"s-radius"})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"collect"},[i("img",{attrs:{src:"img/star.png"}}),i("span",[t._v("收藏")])])}],r=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"star"},t._l(t.itemClasses,function(t,s){return i("span",{key:s,staticClass:"star-item",class:t})}),0)},l=[],u=(i("c5f6"),5),p="on",d="half",f="off",h={props:{score:{type:Number}},computed:{itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,i=s%1!==0,e=Math.floor(s),n=0;n<e;n++)t.push(p);i&&t.push(d);while(t.length<u)t.push(f);return t}}},v=h,_=(i("f504"),i("2877")),m=Object(_["a"])(v,r,l,!1,null,"0f8cb428",null),C=m.exports,g={data:function(){return{isShow:!1}},components:{"app-star":C},props:{poiInfo:{type:Object,default:{}}},computed:{head_pic_url:function(){return"background-image:url("+this.poiInfo.head_pic_url+")"},head_bg:function(){return"background-image:url("+this.poiInfo.pic_url+")"},detail_bg:function(){return"background-image:url("+this.poiInfo.poi_back_pic_url+")"}},methods:{showBulletin:function(){this.isShow=!0},closeBulletin:function(){this.isShow=!1}}},w=g,b=(i("cff6"),Object(_["a"])(w,a,c,!1,null,"561dc8a6",null)),y=b.exports,k=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav"},[i("router-link",{staticClass:"nav-item",attrs:{to:"/mt/goods"}},[t._v("\n    点餐\n    "),i("i",{staticClass:"line"})]),i("router-link",{staticClass:"nav-item",attrs:{to:"/mt/ratings"}},[t._v("\n    评价\n    "),i("i",{staticClass:"line"})]),i("router-link",{staticClass:"nav-item",attrs:{to:"/mt/seller"}},[t._v("\n    商家\n    "),i("i",{staticClass:"line"})])],1)},I=[],x={},S=x,j=(i("6fdc"),Object(_["a"])(S,k,I,!1,null,"9f5dc36a",null)),O=j.exports,E={name:"App",components:{"app-header":y,"app-nav":O},data:function(){return{poiInfo:{}}},created:function(){var t=this;fetch("/mt/data/goods.json").then(function(t){return t.json()}).then(function(s){0==s.code&&(t.poiInfo=s.data.poi_info)})}},$=E,M=Object(_["a"])($,n,o,!1,null,null,null),N=M.exports,P=(i("c7db"),i("8c4f")),H=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"goods"},[i("div",{ref:"menuScroll",staticClass:"menu-wrapper"},[i("ul",[i("li",{staticClass:"menu-item",class:{current:0===t.currentIndex},on:{click:function(s){return t.selectMenu(0)}}},[i("p",{staticClass:"text"},[t.container.tag_icon?i("img",{staticClass:"icon",attrs:{src:t.container.tag_icon}}):t._e(),t._v("\n          "+t._s(t.container.tag_name)+"\n        ")])]),t._l(t.goods,function(s,e){return i("li",{key:e,staticClass:"menu-item",class:{current:t.currentIndex===e+1},on:{click:function(s){return t.selectMenu(e+1)}}},[i("p",{staticClass:"text"},[s.icon?i("img",{staticClass:"icon",attrs:{src:s.icon}}):t._e(),t._v("\n          "+t._s(s.name)+"\n        ")]),i("i",{directives:[{name:"show",rawName:"v-show",value:t.calculateCount(s.spus),expression:"calculateCount(item.spus)"}],staticClass:"num"},[t._v(t._s(t.calculateCount(s.spus)))])])})],2)]),i("div",{ref:"foodScroll",staticClass:"foods-wrapper"},[i("ul",[i("li",{staticClass:"container-list food-list-hook"},t._l(t.container.operation_source_list,function(t,s){return i("div",{key:s},[i("img",{attrs:{src:t.pic_url}})])}),0),t._l(t.goods,function(s,e){return i("li",{key:e,staticClass:"food-list food-list-hook"},[i("h3",{staticClass:"title"},[t._v(t._s(s.name))]),i("ul",t._l(s.spus,function(s,e){return i("li",{key:e,staticClass:"food-item"},[i("div",{staticClass:"icon",style:t.head_bg(s.picture)}),i("div",{staticClass:"content"},[i("h3",{staticClass:"name"},[t._v(t._s(s.name))]),s.description?i("p",{staticClass:"desc"},[t._v(t._s(s.description))]):t._e(),i("div",{staticClass:"extra"},[i("span",{staticClass:"saled"},[t._v(t._s(s.month_saled_content))]),i("span",{staticClass:"praise"},[t._v(t._s(s.praise_content))])]),i("img",{staticClass:"product",attrs:{src:s.product_label_picture}}),i("p",{staticClass:"price"},[i("span",{staticClass:"text"},[t._v("￥"+t._s(s.min_price))]),i("span",{staticClass:"unit"},[t._v("/"+t._s(s.unit))])])]),i("div",{staticClass:"cartcontrol-wrapper"},[i("app-cart-control",{attrs:{food:s}})],1)])}),0)])})],2)]),i("app-shopcart",{attrs:{poiInfo:t.poiInfo,selectFoods:t.selectFoods}})],1)},F=[],T=(i("ac6a"),i("1fba")),B=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"shopcart",class:{highligh:t.totalCount>0}},[i("div",{staticClass:"shopcart-wrapper"},[i("div",{staticClass:"content-left"},[i("div",{staticClass:"logo-wrapper",class:{highligh:t.totalCount>0}},[i("span",{staticClass:"icon-shopping_cart logo",class:{highligh:t.totalCount>0},on:{click:t.toggleList}}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),i("div",{staticClass:"desc-wrapper"},[i("p",{directives:[{name:"show",rawName:"v-show",value:t.totalPrice,expression:"totalPrice"}],staticClass:"total-price"},[t._v("￥"+t._s(t.totalPrice))]),i("p",{staticClass:"tip",class:{highligh:t.totalCount>0}},[t._v("另需"+t._s(t.poiInfo.shipping_fee_tip))])])]),i("div",{staticClass:"content-right",class:{highligh:t.totalCount>0}},[t._v(t._s(t.payStr))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list",class:{show:t.listShow}},[t.poiInfo.discounts2?i("div",{staticClass:"list-top"},[t._v(t._s(t.poiInfo.discounts2[0].info))]):t._e(),i("div",{staticClass:"list-header"},[i("h3",{staticClass:"title"},[t._v("1号口袋")]),i("div",{staticClass:"empty",on:{click:t.clearAll}},[i("img",{attrs:{src:"img/ash_bin.png"}}),i("span",[t._v("清空购物车")])])]),i("div",{ref:"listContent",staticClass:"list-content"},[i("ul",t._l(t.selectFoods,function(s,e){return i("li",{key:e,staticClass:"food-item"},[i("div",{staticClass:"desc-wrapper"},[i("div",{staticClass:"desc-left"},[i("p",{staticClass:"name"},[t._v(t._s(s.name))]),i("p",{directives:[{name:"show",rawName:"v-show",value:!s.description,expression:"!food.description"}],staticClass:"unit"},[t._v(t._s(s.unit))]),i("p",{directives:[{name:"show",rawName:"v-show",value:!s.unit,expression:"!food.unit"}],staticClass:"description"},[t._v(t._s(s.description))])]),i("div",{staticClass:"desc-right"},[t._v("￥"+t._s(s.min_price))])]),i("div",{staticClass:"cartcontrol-wrapper"},[i("app-cart-control",{attrs:{food:s}})],1)])}),0)]),i("div",{staticClass:"list-bottom"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-mask",on:{click:t.hideMask}})])},A=[],Y=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"cartcontrol"},[i("transition",{attrs:{name:"move"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count,expression:"food.count"}],staticClass:"cart-decrease icon-remove_circle_outline",on:{click:t.decreaseCart}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count,expression:"food.count"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),i("div",{staticClass:"cart-add icon-add_circle",on:{click:t.increaseCart}},[i("i",{staticClass:"bg"})])],1)},J=[],L={props:{food:{type:Object}},methods:{decreaseCart:function(){this.food.count--},increaseCart:function(){this.food.count?this.food.count++:e["a"].set(this.food,"count",1)}}},q=L,z=(i("b183"),Object(_["a"])(q,Y,J,!1,null,"ef765644",null)),D=z.exports,G={data:function(){return{fold:!0}},props:{poiInfo:{type:Object,default:{}},selectFoods:{type:Array,default:function(){return[]}}},computed:{totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.min_price*s.count}),t},payStr:function(){return this.totalCount>0?"去结算":this.poiInfo.min_price_tip},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.shopScroll?t.shopScroll.refresh():t.shopScroll=new T["a"](t.$refs.listContent,{click:!0})}),s}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},clearAll:function(){this.selectFoods.forEach(function(t){t.count=0})},hideMask:function(){this.fold=!0}},components:{"app-cart-control":D}},K=G,Q=(i("198a"),Object(_["a"])(K,B,A,!1,null,"c41ef5f2",null)),R=Q.exports,U={data:function(){return{container:{},goods:[],poiInfo:{},listHeight:[],menuScroll:{},foodScroll:{},scrollY:0}},methods:{head_bg:function(t){return"background-image:url("+t+")"},initScroll:function(){var t=this;this.menuScroll=new T["a"](this.$refs.menuScroll),this.foodScroll=new T["a"](this.$refs.foodScroll,{probeType:3,click:!0}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},calculateHeigh:function(){var t=this.$refs.foodScroll.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var i=0;i<t.length;i++){var e=t[i];s+=e.clientHeight,this.listHeight.push(s)}},selectMenu:function(t){var s=this.$refs.foodScroll.getElementsByClassName("food-list-hook"),i=s[t];this.foodScroll.scrollToElement(i,250)},calculateCount:function(t){var s=0;return t.forEach(function(t){t.count>0&&(s+=t.count)}),s}},created:function(){var t=this;fetch("/mt/data/goods.json").then(function(t){return t.json()}).then(function(s){0==s.code&&(t.container=s.data.container_operation_source,t.goods=s.data.food_spu_tags,t.poiInfo=s.data.poi_info,t.$nextTick(function(){t.initScroll(),t.calculateHeigh()}))})},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],i=this.listHeight[t+1];if(!i||this.scrollY>=s&&this.scrollY<i)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.spus.forEach(function(s){s.count>0&&t.push(s)})}),t}},components:{"app-shopcart":R,"app-cart-control":D}},V=U,W=(i("552f"),Object(_["a"])(V,H,F,!1,null,"f2c9aad4",null)),X=W.exports,Z=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ratings"},[t._v("评价信息")])},tt=[],st={},it=st,et=Object(_["a"])(it,Z,tt,!1,null,"39025654",null),nt=et.exports,ot=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"seller"},[t._v("商家信息")])},at=[],ct={},rt=ct,lt=Object(_["a"])(rt,ot,at,!1,null,"12a6081c",null),ut=lt.exports;e["a"].config.productionTip=!1,e["a"].use(P["a"]);var pt=[{path:"/mt",redirect:"/mt/goods"},{path:"/mt/goods",redirect:"/mt",component:X},{path:"/mt/ratings",redirect:"/mt",component:nt},{path:"/mt/seller",redirect:"/mt",component:ut}],dt=new P["a"]({mode:"history",routes:pt,linkActiveClass:"active"});new e["a"]({router:dt,render:function(t){return t(N)}}).$mount("#app")},"6fdc":function(t,s,i){"use strict";var e=i("79db"),n=i.n(e);n.a},"79db":function(t,s,i){},b183:function(t,s,i){"use strict";var e=i("425c"),n=i.n(e);n.a},c7db:function(t,s,i){},c7e4:function(t,s,i){},cff6:function(t,s,i){"use strict";var e=i("d937"),n=i.n(e);n.a},d037:function(t,s,i){},d410:function(t,s,i){},d937:function(t,s,i){},f504:function(t,s,i){"use strict";var e=i("d410"),n=i.n(e);n.a}});
//# sourceMappingURL=app.11db2678.js.map