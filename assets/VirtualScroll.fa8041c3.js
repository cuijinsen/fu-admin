import{a as D,v as R,w as T,f as c,i,a9 as B,O as I,an as M,cS as k,n as o,cD as P,ay as E,aH as L,aA as S,o as j,j as q,z as _,B as W,m as g,t as C}from"./index.01016e1b.js";import{D as z}from"./index.44e8fa84.js";import{P as O}from"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./eagerComputed.19683db9.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";const U={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function s(t,a="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${a}`}var G=D({name:"VirtualScroll",props:U,setup(t,{slots:a}){const u=R(null),n=T({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),m=c(()=>parseInt(t.itemHeight,10)),h=c(()=>Math.max(0,n.first-i(p))),f=c(()=>Math.min((t.items||[]).length,n.last+i(p))),v=c(()=>({height:s((t.items||[]).length*i(m))})),d=c(()=>{const e={},r=s(t.height),l=s(t.minHeight),x=s(t.minWidth),N=s(t.maxHeight),F=s(t.maxWidth),b=s(t.width);return r&&(e.height=r),l&&(e.minHeight=l),x&&(e.minWidth=x),N&&(e.maxHeight=N),F&&(e.maxWidth=F),b&&(e.width=b),e});B([()=>t.itemHeight,()=>t.height],()=>{H()});function y(e){const r=i(u);if(!r)return 0;const l=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(l/i(m))}function V(){return Math.floor(n.scrollTop/i(m))}function H(){const e=i(u);!e||(n.scrollTop=e.scrollTop,n.first=V(),n.last=y(n.first))}function $(){const{items:e=[]}=t;return e.slice(i(h),i(f)).map(A)}function A(e,r){r+=i(h);const l=s(r*i(m));return o("div",{class:`${w}__item`,style:{top:l},key:r},[P(a,"default",{index:r,item:e})])}return I(()=>{n.last=y(0),M(()=>{const e=i(u);!e||k({el:e,name:"scroll",listener:H,wait:0})})}),()=>o("div",{class:w,style:i(d),ref:u},[o("div",{class:`${w}__container`,style:i(v)},[$()])])}});var J=E(G,[["__scopeId","data-v-0610daca"]]);const K=L(J);const Q=(()=>{const t=[];for(let a=1;a<2e4;a++)t.push({title:"\u5217\u8868\u9879"+a});return t})(),X=D({components:{VScroll:K,Divider:z,PageWrapper:O},setup(){return{data:Q}}}),Y={class:"virtual-scroll-demo-wrap"},Z={class:"virtual-scroll-demo__item"},tt={class:"virtual-scroll-demo-wrap"},et={class:"virtual-scroll-demo__item"};function it(t,a,u,n,p,m){const h=S("Divider"),f=S("VScroll"),v=S("PageWrapper");return j(),q(v,{class:"virtual-scroll-demo"},{default:_(()=>[o(h,null,{default:_(()=>[W("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B")]),_:1}),g("div",Y,[o(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:d})=>[g("div",Z,C(d.title),1)]),_:1},8,["items"])]),o(h,null,{default:_(()=>[W("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D")]),_:1}),g("div",tt,[o(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:d})=>[g("div",et,C(d.title),1)]),_:1},8,["items"])])]),_:1})}var _t=E(X,[["render",it],["__scopeId","data-v-918662a0"]]);export{_t as default};