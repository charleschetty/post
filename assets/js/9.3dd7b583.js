(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{265:function(t,e,i){},284:function(t,e,i){"use strict";i(265)},293:function(t,e,i){"use strict";i.r(e);var s=i(22),l=i.n(s),a={name:"RightAnchor",data:()=>({listData:[],activeIndex:null}),watch:{"$page.regularPath":function(){this.filterDataByLevel()}},mounted(){this.filterDataByLevel(),setTimeout(this.filterDataByLevel,5e3),window.addEventListener("scroll",l()(()=>{const t=this.getScrollTop();this.listData.map((e,i)=>{e.offsetTop&&t>=e.offsetTop&&(this.activeIndex=i)})},300))},methods:{itemClick(t,e){this.filterDataByLevel(),this.activeIndex=t,window.scrollTo({top:document.getElementById(e).offsetTop,behavior:"smooth"})},filterDataByLevel(){this.listData=[];(this.$page.headers||[]).forEach(t=>{2!==t.level&&3!==t.level||this.listData.push(JSON.parse(JSON.stringify(t)))}),this.$nextTick(()=>{this.listData.forEach(t=>{this.getEleById(t.slug).then(e=>{t.offsetTop=e.offsetTop})})})},getEleById:t=>new Promise(e=>{const i=setInterval(()=>{const s=document.getElementById(t);s&&(clearInterval(i),e(s))},100)}),getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},n=(i(284),i(3)),o=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"right-anchor"},t._l(t.listData,(function(i,s){return e("li",{key:s,staticClass:"right-anchor-item",class:{active:s===t.activeIndex,sub:3===i.level},on:{click:function(e){return t.itemClick(s,i.slug)}}},[t._v("\n    "+t._s(i.title)+"\n  ")])})),0)}),[],!1,null,"db26a932",null);e.default=o.exports}}]);