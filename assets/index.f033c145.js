import{ay as $,a as A,b8 as P,aA as a,o as l,j as u,z as e,q as r,m as s,n as i,h as d,aD as k,F as w,k as m,t as c,B as f,ff as y,fg as L}from"./index.01016e1b.js";import{P as S}from"./index.d1bfa846.js";/* empty css               */import{cardList as b}from"./data.04444808.js";import{P as N}from"./index.5eaa6961.js";import{L as p}from"./index.3b3e88d2.js";import{R as v,C as h}from"./index.9ada290f.js";import"./useRefs.b8e07b47.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./eagerComputed.19683db9.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";const V=A({components:{Icon:P,Progress:S,PageWrapper:N,[p.name]:p,[p.Item.name]:p.Item,AListItemMeta:p.Item.Meta,[v.name]:v,[h.name]:h},setup(){return{prefixCls:"list-basic",list:b,pagination:{show:!0,pageSize:3}}}}),n=t=>(y("data-v-de67b38a"),t=t(),L(),t),z=n(()=>s("div",null,"\u6211\u7684\u5F85\u529E",-1)),W=n(()=>s("p",null,"8\u4E2A\u4EFB\u52A1",-1)),D=n(()=>s("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),M=n(()=>s("p",null,"32\u5206\u949F",-1)),R=n(()=>s("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),j=n(()=>s("p",null,"24\u4E2A\u4EFB\u52A1",-1)),q={key:0,class:"extra"},O={class:"description"},T={class:"info"},G=n(()=>s("span",null,"Owner",-1)),H=n(()=>s("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),J={class:"progress"};function K(t,Q,U,X,Y,Z){const _=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),B=a("a-list-item-meta"),I=a("a-list-item"),x=a("a-list"),E=a("PageWrapper");return l(),u(E,{class:r(t.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:e(()=>[s("div",{class:r(`${t.prefixCls}__top`)},[i(C,{gutter:12},{default:e(()=>[i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[z,W]),_:1},8,["class"]),i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[D,M]),_:1},8,["class"]),i(_,{span:8,class:r(`${t.prefixCls}__top-col`)},{default:e(()=>[R,j]),_:1},8,["class"])]),_:1})],2),s("div",{class:r(`${t.prefixCls}__content`)},[i(x,{pagination:t.pagination},{default:e(()=>[(l(!0),d(w,null,k(t.list,o=>(l(),u(I,{key:o.id,class:"list"},{default:e(()=>[i(B,null,{avatar:e(()=>[o.icon?(l(),u(g,{key:0,class:"icon",icon:o.icon,color:o.color},null,8,["icon","color"])):m("",!0)]),title:e(()=>[s("span",null,c(o.title),1),o.extra?(l(),d("div",q,c(o.extra),1)):m("",!0)]),description:e(()=>[s("div",O,c(o.description),1),s("div",T,[s("div",null,[G,f(c(o.author),1)]),s("div",null,[H,f(c(o.datetime),1)])]),s("div",J,[i(F,{percent:o.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var Cs=$(V,[["render",K],["__scopeId","data-v-de67b38a"]]);export{Cs as default};