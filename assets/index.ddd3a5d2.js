import{ay as f,a as g,cE as C,v as _,bJ as p,aA as n,o as k,j as F,z as o,n as t,B as r,t as w,m as y}from"./index.01016e1b.js";import{P as S}from"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./eagerComputed.19683db9.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";const h=g({components:{CollapseContainer:C,PageWrapper:S},setup(){const e=_(null),{enter:a,toggle:s,exit:c,isFullscreen:i}=p(),{toggle:m}=p(e);return{enter:a,toggleDom:m,toggle:s,isFullscreen:i,exit:c,domRef:e}}}),D={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"};function W(e,a,s,c,i,m){const l=n("a-button"),u=n("CollapseContainer"),d=n("PageWrapper");return k(),F(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(u,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(l,{type:"primary",onClick:e.enter,class:"mr-2"},{default:o(()=>[r(" Enter Window Full Screen ")]),_:1},8,["onClick"]),t(l,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[r(" Toggle Window Full Screen ")]),_:1},8,["onClick"]),t(l,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[r(" Exit Window Full Screen ")]),_:1},8,["onClick"]),r(" Current State: "+w(e.isFullscreen),1)]),_:1}),t(u,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(l,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[r(" Enter Dom Full Screen ")]),_:1},8,["onClick"])]),_:1}),y("div",D,[t(l,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[r(" Exit Dom Full Screen ")]),_:1},8,["onClick"])],512)]),_:1})}var A=f(h,[["render",W]]);export{A as default};