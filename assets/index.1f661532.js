import{ay as _,a as m,cX as S,eB as T,eC as f,eD as X,eE as x,eF as R,eG as y,eH as h,eI as B,eJ as C,eK as E,eL as Y,eM as w,eN as F,v as n,aA as o,o as r,j as i,z as s,m as l,n as p,B as k,aK as $,x as b,y as g}from"./index.437c4479.js";import{P as A}from"./index.d73ca278.js";import"./index.3aa321be.js";import"./index.51f3da4c.js";import"./useSize.20fe1af9.js";import"./eagerComputed.99632747.js";import"./useWindowSizeFn.19d582eb.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./index.11505f04.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],P=N.map(e=>({label:e,value:e,key:e})),D=m({components:{Select:S,PageWrapper:A,FadeTransition:T,ScaleTransition:f,SlideYTransition:X,ScrollYTransition:x,SlideYReverseTransition:R,ScrollYReverseTransition:y,SlideXTransition:h,ScrollXTransition:B,SlideXReverseTransition:C,ScrollXReverseTransition:E,ScaleRotateTransition:Y,ExpandXTransition:w,ExpandTransition:F},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:P,value:e,start:t,show:a}}}),V={class:"flex"},W={class:"box"};function I(e,a,t,K,L,j){const c=o("Select"),u=o("a-button"),d=o("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[l("div",V,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:s(()=>[k(" start ")]),_:1},8,["onClick"])]),(r(),i($(`${e.value}Transition`),null,{default:s(()=>[b(l("div",W,null,512),[[g,e.show]])]),_:1}))]),_:1})}var ee=_(D,[["render",I],["__scopeId","data-v-191e0ae4"]]);export{ee as default};