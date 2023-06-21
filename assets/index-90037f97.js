import{a as e,d3 as t,ba as o,bv as s,aM as a,b as r,r as n,e as i,b0 as c,q as l,aP as d,L as p,aF as u,o as m,f,m as g,y as k,i as b,j,l as x,p as _,t as h,F as C}from"./index-d32d699d.js";import{D as w,P as y}from"./siteSetting-5f4ec59c.js";import{c as D,u as L}from"./index-6f88e26d.js";import{u as M}from"./index-b361c612.js";import{h as v}from"./header-e7a2da68.js";import"./FullscreenOutlined-091fbcf5.js";import"./index-253b619b.js";import"./useWindowSizeFn-6acabc85.js";import"./useContentViewHeight-295eef1a.js";import"./uniqBy-19fec0f2.js";import"./_baseIteratee-b178d67d.js";import"./get-8e454bdf.js";import"./index-41a26491.js";import"./index-80ea7d72.js";import"./useRefs-b0536d84.js";import"./RedoOutlined-481f10d7.js";import"./index-42f6d054.js";import"./lock-4003443a.js";const I=e({name:"UserDropdown",components:{Dropdown:t,Menu:o,MenuItem:D((()=>s((()=>import("./DropMenuItem-0f50e3bb.js")),["assets/DropMenuItem-0f50e3bb.js","assets/index-d32d699d.js","assets/index-e760a4fc.css"]))),MenuDivider:o.Divider,LockAction:D((()=>s((()=>import("./LockModal-0c0277c8.js")),["assets/LockModal-0c0277c8.js","assets/index-d32d699d.js","assets/index-e760a4fc.css","assets/index-b361c612.js","assets/useWindowSizeFn-6acabc85.js","assets/FullscreenOutlined-091fbcf5.js","assets/index-d1d82f5c.css","assets/useForm-39f6e704.js","assets/index-06c8a48f.js","assets/index-cd646f4b.js","assets/index-a18cc309.css","assets/_baseIteratee-b178d67d.js","assets/get-8e454bdf.js","assets/useSize-e28be3fa.js","assets/index-c0abe676.css","assets/index-b4d18824.js","assets/index-3a3c1369.css","assets/index-da1a1de3.js","assets/index-e84e313c.js","assets/index-ec0cd87d.css","assets/index-27193f3e.css","assets/index-ee500efb.js","assets/createForOfIteratorHelper-19a6e609.js","assets/index-280a19eb.js","assets/index-5719ca16.css","assets/index-5c3d2cff.css","assets/index-706c8391.js","assets/index-ff1f448e.css","assets/index-bf8f159c.js","assets/index-8914d246.css","assets/index-fe305bf5.js","assets/iconUtil-b885d1ac.js","assets/eagerComputed-b16e681c.js","assets/index-f826e27e.css","assets/index-476a8598.js","assets/index-7b8b5e30.css","assets/index-64da741e.js","assets/index-25b893e3.css","assets/index-a72363e5.js","assets/css-49036a2d.js","assets/index-0ec4bbd2.css","assets/useRefs-b0536d84.js","assets/download-29600a9b.js","assets/index-406c2228.js","assets/index-dc78efae.css","assets/index-2887dac0.js","assets/index-43ba843e.css","assets/index-22735145.js","assets/index-8e2feec8.js","assets/uniqBy-19fec0f2.js","assets/useForm-b66e22e9.css","assets/lock-4003443a.js","assets/header-e7a2da68.js","assets/LockModal-0068f88c.css"])))},props:{theme:a.oneOf(["dark","light"])},setup(){const{prefixCls:e}=r("header-user-dropdown"),{t:t}=l(),{getShowDoc:o,getUseLockPage:s}=L(),a=n(),p=i((()=>{const{realName:e="",avatar:t,desc:o}=a.getUserInfo||{};return{realName:e,avatar:t||v,desc:o}})),[u,{openModal:m}]=M(),f=c();return{prefixCls:e,t:t,getUserInfo:p,handleMenuClick:function(e){switch(e.key){case"logout":a.confirmLoginOut();break;case"doc":d(w);break;case"projectAddress":d(y);break;case"accountCenter":f("/account/center");break;case"accountSetting":f("/account/setting");break;case"lock":m(!0)}},getShowDoc:o,register:u,getUseLockPage:s}}}),U=["src"];const O=p(I,[["render",function(e,t,o,s,a,r){const n=u("MenuDivider"),i=u("MenuItem"),c=u("Menu"),l=u("Dropdown"),d=u("LockAction");return m(),f(C,null,[g(l,{overlayClassName:`${e.prefixCls}-dropdown-overlay`,placement:"bottomLeft"},{overlay:k((()=>[g(c,{onClick:e.handleMenuClick},{default:k((()=>[e.getShowDoc?(m(),b(n,{key:0})):j("",!0),g(i,{key:"accountSetting",text:"账户设置",icon:"grommet-icons:user-settings"}),g(n),e.getUseLockPage?(m(),b(i,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):j("",!0),g(i,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:k((()=>[x("span",{class:_([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[x("img",{class:_(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,U),x("span",{class:_(`${e.prefixCls}__info hidden md:block`)},[x("span",{class:_([`${e.prefixCls}__name  `,"truncate"])},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),g(d,{onRegister:e.register},null,8,["onRegister"])],64)}]]);export{O as default};
