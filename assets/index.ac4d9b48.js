import{ay as B,a as k,cE as A,I as D,a$ as g,v as b,bY as T,aA as r,o as d,j as v,z as t,n as u,m as h,B as o,h as $,F as P,aD as y,t as w,G as L}from"./index.b74cf1bc.js";import{P as N}from"./index.94d6a8fb.js";import{A as _}from"./index.91d33a28.js";import"./index.3c1ff6fb.js";import"./index.cb3d1a7e.js";import"./useSize.6193d609.js";import"./eagerComputed.05d44b0c.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.b833bb1c.js";const V=k({name:"TabsDemo",components:{CollapseContainer:A,PageWrapper:N,[D.name]:D,[_.name]:_},setup(){const e=g(),l=b(""),{closeAll:p,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:c,refreshPage:a,setTitle:i}=T(),{createMessage:n}=L();function m(){l.value?i(l.value):n.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}function s(E){e(`/feat/tabs/detail/${E}`)}return{closeAll:p,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:c,toDetail:s,refreshPage:a,setTabTitle:m,title:l}}}),W={class:"mt-2 flex flex-grow-0"};function G(e,l,p,C,F,f){const c=r("a-alert"),a=r("a-button"),i=r("a-input"),n=r("CollapseContainer"),m=r("PageWrapper");return d(),v(m,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:t(()=>[u(c,{banner:"",message:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),h("div",W,[u(a,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:t(()=>[o(" \u8BBE\u7F6ETab\u6807\u9898 ")]),_:1},8,["onClick"]),u(i,{placeholder:"\u8BF7\u8F93\u5165",value:e.title,"onUpdate:value":l[0]||(l[0]=s=>e.title=s),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:t(()=>[u(a,{class:"mr-2",onClick:e.closeAll},{default:t(()=>[o(" \u5173\u95ED\u6240\u6709 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeLeft},{default:t(()=>[o(" \u5173\u95ED\u5DE6\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeRight},{default:t(()=>[o(" \u5173\u95ED\u53F3\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeOther},{default:t(()=>[o(" \u5173\u95ED\u5176\u4ED6 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeCurrent},{default:t(()=>[o(" \u5173\u95ED\u5F53\u524D ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.refreshPage},{default:t(()=>[o(" \u5237\u65B0\u5F53\u524D ")]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"},{default:t(()=>[(d(),$(P,null,y(6,s=>u(a,{key:s,class:"mr-2",onClick:E=>e.toDetail(s)},{default:t(()=>[o(" \u6253\u5F00"+w(s)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}var J=B(V,[["render",G]]);export{J as default};
