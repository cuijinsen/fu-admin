import{a as y,b8 as $,ay as k,aA as n,o as s,j as c,z as r,h as p,F as m,aD as _,n as x,m as l,q as o,t as i,B as d,k as g}from"./index.b74cf1bc.js";import{L as u}from"./index.0e8eb54d.js";/* empty css               */import{T as B}from"./index.ea1d2165.js";import{articleList as T,actions as M}from"./data.55909081.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./eagerComputed.05d44b0c.js";const N=y({components:{List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:B,Icon:$},setup(){return{prefixCls:"account-center-article",list:T,actions:M}}});function V(e,b,h,A,z,D){const f=n("Tag"),C=n("ListItemMeta"),I=n("Icon"),L=n("ListItem"),v=n("List");return s(),c(v,{"item-layout":"vertical",class:o(e.prefixCls)},{default:r(()=>[(s(!0),p(m,null,_(e.list,a=>(s(),c(L,{key:a.title},{default:r(()=>[x(C,null,{description:r(()=>[l("div",{class:o(`${e.prefixCls}__content`)},i(a.content),3)]),title:r(()=>[l("p",{class:o(`${e.prefixCls}__title`)},i(a.title),3),l("div",null,[(s(!0),p(m,null,_(a.description,t=>(s(),c(f,{key:t,class:"mb-2"},{default:r(()=>[d(i(t),1)]),_:2},1024))),128))])]),_:2},1024),l("div",null,[(s(!0),p(m,null,_(e.actions,t=>(s(),p("div",{key:t.text,class:o(`${e.prefixCls}__action`)},[t.icon?(s(),c(I,{key:0,class:o(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):g("",!0),d(" "+i(t.text),1)],2))),128)),l("span",{class:o(`${e.prefixCls}__time`)},i(a.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var J=k(N,[["render",V],["__scopeId","data-v-5165bd6c"]]);export{J as default};
