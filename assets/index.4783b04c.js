import{ay as k,a as D,cE as w,b8 as x,s as S,f as F,aA as l,o as t,h as r,n as o,z as s,q as n,m as p,F as i,aD as u,B as b,t as m,j as _,aK as P,ff as V,fg as A}from"./index.67a988db.js";import{T as L}from"./index.c9944a8c.js";import{T as h}from"./index.22067dac.js";/* empty css               */import N from"./Article.625721ef.js";import j from"./Application.f75a8084.js";import z from"./Project.23fea264.js";import{h as R}from"./header.d801b988.js";import{tags as U,teams as q,details as K,achieveList as G}from"./data.3087e932.js";import{R as T,C as $}from"./index.56a49b73.js";import"./useRefs.ac08b2f5.js";import"./PlusOutlined.93f7d3e8.js";import"./index.df6e4dfe.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./eagerComputed.841da0b8.js";import"./index.519e46f0.js";import"./index.27706f42.js";import"./demo.25a24f17.js";const H=D({components:{CollapseContainer:w,Icon:x,Tag:L,Tabs:h,TabPane:h.TabPane,Article:N,Application:j,Project:z,[T.name]:T,[$.name]:$},setup(){const a=S(),f=F(()=>a.getUserInfo.avatar||R);return{prefixCls:"account-center",avatar:f,tags:U,teams:q,details:K,achieveList:G}}}),g=a=>(V("data-v-4449b230"),a=a(),A(),a),J=["src"],M=g(()=>p("span",null,"Vben",-1)),O=g(()=>p("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(a,f,W,X,Y,Z){const c=l("a-col"),d=l("Icon"),C=l("a-row"),y=l("Tag"),v=l("CollapseContainer"),B=l("TabPane"),E=l("Tabs");return t(),r("div",{class:n(a.prefixCls)},[o(C,{class:n(`${a.prefixCls}-top`)},{default:s(()=>[o(c,{span:9,class:n(`${a.prefixCls}-col`)},{default:s(()=>[o(C,null,{default:s(()=>[o(c,{span:8},{default:s(()=>[p("div",{class:n(`${a.prefixCls}-top__avatar`)},[p("img",{width:"70",src:a.avatar},null,8,J),M,O],2)]),_:1}),o(c,{span:16},{default:s(()=>[p("div",{class:n(`${a.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(a.details,e=>(t(),r("p",{key:e.title},[o(d,{icon:e.icon},null,8,["icon"]),b(" "+m(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),o(c,{span:7,class:n(`${a.prefixCls}-col`)},{default:s(()=>[o(v,{title:"\u6807\u7B7E",canExpan:!1},{default:s(()=>[(t(!0),r(i,null,u(a.tags,e=>(t(),_(y,{key:e,class:"mb-2"},{default:s(()=>[b(m(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),o(c,{span:8,class:n(`${a.prefixCls}-col`)},{default:s(()=>[o(v,{class:n(`${a.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:s(()=>[(t(!0),r(i,null,u(a.teams,(e,I)=>(t(),r("div",{key:I,class:n(`${a.prefixCls}-top__team-item`)},[o(d,{icon:e.icon,color:e.color},null,8,["icon","color"]),p("span",null,m(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),p("div",{class:n(`${a.prefixCls}-bottom`)},[o(E,null,{default:s(()=>[(t(!0),r(i,null,u(a.achieveList,e=>(t(),_(B,{key:e.key,tab:e.name},{default:s(()=>[(t(),_(P(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var ha=k(H,[["render",Q],["__scopeId","data-v-4449b230"]]);export{ha as default};