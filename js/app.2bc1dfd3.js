(function(t){function e(e){for(var n,l,a=e[0],o=e[1],h=e[2],c=0,f=[];c<a.length;c++)l=a[c],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&f.push(s[l][0]),s[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,h||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},s={app:0},r=[];function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-image-fade-scroll/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var h=0;h<a.length;h++)e(a[h]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._l(10,(function(e){return i("div",{key:e},[t._v(t._s(e))])})),i("div",[i("button",{attrs:{type:"button"},on:{click:function(e){t.isChangeList=!t.isChangeList}}},[t._v("리스트 변경")]),i("fade-scroll",{attrs:{imagePathList:t.isChangeList?["img/apple-0.png","img/apple-1.png","img/apple-2.png","img/apple-0.png","img/apple-1.png"]:["img/apple-2.png","img/apple-1.png","img/apple-0.png"]}})],1),t._l(20,(function(e){return i("div",{key:"a"+e},[t._v(t._s(e))])})),i("div",[i("fade-scroll",{attrs:{imagePathList:["img/apple-0.png","img/apple-1.png","img/apple-2.png","img/apple-0.png","img/apple-1.png"],isHorizontal:""}})],1),i("div",{staticStyle:{height:"400px",overflow:"auto"}},[t._l(20,(function(e){return i("div",{key:"b"+e},[t._v(t._s(e))])})),i("fade-scroll",{attrs:{imagePathList:["img/apple-0.png","img/apple-1.png","img/apple-2.png","img/apple-0.png","img/apple-1.png"]}}),t._l(20,(function(e){return i("div",{key:"c"+e},[t._v(t._s(e))])}))],2)],2)},r=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{width:t.fullWidth+"px",height:t.fullHeight+"px"}})},a=[],o=(i("99af"),i("c975"),i("d3b7"),i("96cf"),i("d4ec")),h=i("bee2"),u=i("1da1"),c=/(auto|scroll)/,f=function(){var t=document.createElement("a");return t.setAttribute("style","position:sticky;position:-webkit-sticky;position:-ms-sticky;"),-1!==t.style.position.indexOf("sticky")}();function g(t,e){return getComputedStyle(t,null).getPropertyValue(e)}function d(t){return c.test(g(t,"overflow")+g(t,"overflow-y")+g(t,"overflow-x"))}function p(t){return t&&t!==document.body?d(t)?t:p(t.parentNode):window}function m(){var t=document.createElement("div");t.setAttribute("style","position:fixed;height:100vh;width:0;top:0;"),document.documentElement.appendChild(t);var e=t.offsetHeight;return document.documentElement.removeChild(t),e}function v(t){return t.innerWidth||t.offsetWidth}function y(t){return t.innerHeight?m():t.offsetHeight}function w(t){var e=t.scrollY,i=t.scrollTop,n=t.offsetTop;return e||i&&n+i||0}function b(t){return new Promise((function(e,i){var n=new Image;n.onload=function(){return e(n)},n.onerror=i,n.src=t}))}function H(){var t=document.createElement("canvas");return t.setAttribute("style","pointer-events:none;position:sticky;transform-origin:top center;top:0px;"),t}function S(t){return k.apply(this,arguments)}function k(){return k=Object(u["a"])(regeneratorRuntime.mark((function t(e){var i,n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],n=0,s=e.length;case 2:if(!(n<s)){t.next=10;break}return t.next=5,b(e[n]);case 5:r=t.sent,i.push(r);case 7:n++,t.next=2;break;case 10:return t.abrupt("return",Promise.resolve(i));case 11:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}var x=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(o["a"])(this,t),this.el=e,this.imagePathList=i,this.scrollEl=p(e),this.canvas=H(),this.ctx=this.canvas.getContext("2d"),this.fullWidth=0,this.fullHeight=0,this.containerHeight=0,this.isScrolling=!1,this.imageList=[],this.imageIndex=0,this.onScroll=null,this.onResize=null,this.isHorizontal=!1,this.onScroll=this._onScroll.bind(this),this.onResize=this._onResize.bind(this),this.addEventListener()}return Object(h["a"])(t,[{key:"init",value:function(){this.imageList.length?this.initRender():this.loadImageList()}},{key:"addEventListener",value:function(){this.scrollEl.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)}},{key:"removeEventListener",value:function(){this.scrollEl.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}},{key:"getOffsetWidth",value:function(){return v(this.scrollEl)}},{key:"getOffsetHeight",value:function(){return y(this.scrollEl)}},{key:"loadImageList",value:function(){var t=this;S(this.imagePathList,this.imageList).then((function(e){t.imageList=e,t.initRender()}))}},{key:"initSize",value:function(){this.fullWidth=this.getOffsetWidth(),this.fullHeight=this.getOffsetHeight(),this.containerHeight=f?this.fullHeight*this.imageList.length:this.fullHeight}},{key:"initDom",value:function(){this.el.hasChildNodes()&&this.el.removeChild(this.canvas),this.el.appendChild(this.canvas)}},{key:"initDomStyle",value:function(){this.el.setAttribute("style","".concat(this.el.getAttribute("style"),"display:inline-block;width:").concat(this.fullWidth,"px;height:").concat(this.containerHeight,"px;")),this.canvas.width=this.fullWidth,this.canvas.height=this.fullHeight}},{key:"initRender",value:function(){this.initSize(),this.initDomStyle(),this.initDom(),this.draw()}},{key:"setImagePathList",value:function(t){this.imagePathList=t,this.loadImageList()}},{key:"getBounds",value:function(){var t=this.el.offsetTop-w(this.scrollEl);return{top:t,bottom:t+this.containerHeight}}},{key:"drawImage",value:function(t,e,i,n,s){this.ctx.save();var r=t.width,l=t.height,a=r*this.fullHeight/l;this.ctx.drawImage(t,0,e,r,i,(this.fullWidth-a)/2,n,a,s),this.ctx.restore()}},{key:"drawStaticImage",value:function(t){var e=this.imageList[t];e&&this.drawImage(e,0,e.height,0,this.fullHeight)}},{key:"drawHorizontalFadeImage",value:function(t){this.drawStaticImage(this.imageIndex+1);var e=this.imageList[this.imageIndex];if(e){this.ctx.save();var i=e.width,n=e.height,s=i*this.fullHeight/n,r=t*s/this.fullHeight,l=r*i/s;this.ctx.drawImage(e,l,0,i-l,n,(this.fullWidth-s)/2+r,0,s-r,this.fullHeight),this.ctx.restore()}}},{key:"drawVerticalFadeImage",value:function(t){var e=this.imageList[this.imageIndex];if(e){var i=e.height,n=t*i/this.fullHeight;this.drawImage(e,0,i-n,0,this.fullHeight-t)}var s=this.imageList[this.imageIndex+1];if(s){var r=s.height,l=t*r/this.fullHeight;this.drawImage(s,r-l,l,this.fullHeight-t,t)}}},{key:"draw",value:function(){for(var t=this.getBounds(),e=t.top,i=t.bottom,n=Math.abs(e),s=this.imageList.length,r=0;r<s;r++)n>this.fullHeight*r&&(this.imageIndex=r);if(this.ctx.clearRect(0,0,this.fullWidth,this.fullHeight),e<=0&&i>=this.fullHeight){var l=n-this.fullHeight*this.imageIndex;this.isHorizontal?this.drawHorizontalFadeImage(l):this.drawVerticalFadeImage(l)}else e>0?this.drawStaticImage(0):i<this.fullHeight&&this.drawStaticImage(s-1)}},{key:"_onScroll",value:function(){var t=this;this.isScrolling||(window.requestAnimationFrame((function(){var e=t.getBounds(),i=e.top;i<t.fullHeight&&t.draw(),t.isScrolling=!1})),this.isScrolling=!0)}},{key:"_onResize",value:function(){this.initSize(),this.initDomStyle(),this.draw()}}]),t}(),L={name:"FadeScroll",props:{imagePathList:{type:Array,required:!0},isHorizontal:{type:Boolean,default:!1}},data:function(){return{fadeScrollView:null,fullWidth:0,fullHeight:0}},watch:{imagePathList:function(t){this.fadeScrollView&&this.fadeScrollView.setImagePathList(t)},isHorizontal:{immediate:!0,handler:function(t){this.fadeScrollView&&(this.fadeScrollView.isHorizontal=t)}}},mounted:function(){this.fadeScrollView||(this.fadeScrollView=new x(this.$el,this.imagePathList),this.fullWidth=this.fadeScrollView.getOffsetWidth(),this.fullHeight=this.fadeScrollView.getOffsetHeight()),this.fadeScrollView.init()},beforeDestroy:function(){this.fadeScrollView&&this.fadeScrollView.removeEventListener()}},I=L,_=i("2877"),O=Object(_["a"])(I,l,a,!1,null,null,null),E=O.exports,P={name:"app",components:{FadeScroll:E},data:function(){return{isChangeList:!1}}},z=P,V=(i("5c0b"),Object(_["a"])(z,s,r,!1,null,null,null)),W=V.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(W)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.2bc1dfd3.js.map