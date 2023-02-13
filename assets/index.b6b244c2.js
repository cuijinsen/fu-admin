import{ay as $,a as U,cI as P,b9 as D,bu as y,aI as x,b as O,c as R,s as B,f as N,a$ as V,aA as n,o as r,h as j,n as t,z as g,j as c,k as i,m as u,q as l,t as F,F as T,aP as v}from"./index.b74cf1bc.js";import{D as z,P as q}from"./siteSetting.ef5bf0f0.js";import{c as w,u as G}from"./index.320a3aba.js";import{b as H}from"./index.8d73dc63.js";import{h as J}from"./header.d801b988.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.d0d79b7c.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./uniqBy.7a457808.js";import"./_baseIteratee.b387a4e9.js";import"./get.ef800ccd.js";import"./index.bcdf5440.js";import"./index.283fe8c9.js";import"./useRefs.3b949e72.js";import"./PlusOutlined.ccd4e1ca.js";import"./RedoOutlined.5e7d45ad.js";import"./index.f63e810c.js";import"./lock.acb5ea64.js";const W=U({name:"UserDropdown",components:{Dropdown:P,Menu:D,MenuItem:w(()=>y(()=>import("./DropMenuItem.1131368e.js"),["assets/DropMenuItem.1131368e.js","assets/index.b74cf1bc.js","assets/index.e9ea3324.css"])),MenuDivider:D.Divider,LockAction:w(()=>y(()=>import("./LockModal.b3fbe61e.js"),["assets/LockModal.b3fbe61e.js","assets/LockModal.0068f88c.css","assets/index.7a9a4920.css","assets/index.a18cc309.css","assets/index.b74cf1bc.js","assets/index.e9ea3324.css","assets/index.8d73dc63.js","assets/index.d1d82f5c.css","assets/useWindowSizeFn.59b3a207.js","assets/FullscreenOutlined.2c5fc800.js","assets/BasicForm.1636ebdd.js","assets/BasicForm.12c338c2.css","assets/index.76f0947d.js","assets/index.3a3c1369.css","assets/index.3c4b54d0.js","assets/index.a0a9f5ac.css","assets/Checkbox.e80d61eb.js","assets/index.35afe08d.js","assets/index.cda8cbc4.css","assets/index.ea1d2165.js","assets/index.5719ca16.css","assets/index.5100a9cd.js","assets/index.334cdf27.css","assets/index.c17593cf.js","assets/index.8914d246.css","assets/index.6fc50966.js","assets/index.7b8b5e30.css","assets/get.ef800ccd.js","assets/index.3b1d7b49.js","assets/index.064b5fe0.css","assets/eagerComputed.05d44b0c.js","assets/index.d20438cb.js","assets/index.0ac1ab84.css","assets/_baseIteratee.b387a4e9.js","assets/DeleteOutlined.58479ebe.js","assets/index.9f1863b7.js","assets/index.b6ff300c.css","assets/useRefs.3b949e72.js","assets/Form.38c81947.js","assets/Col.d211a93e.js","assets/useFlexGapSupport.2ae4dc05.js","assets/useSize.6193d609.js","assets/index.78b5d5cb.js","assets/index.cd256673.css","assets/index.91d33a28.js","assets/index.dfe20ef8.css","assets/index.8ef9877f.js","assets/index.0ec4bbd2.css","assets/uuid.2b29000c.js","assets/download.cc1448f4.js","assets/base64Conver.08b9f4ec.js","assets/index.97bc65bc.js","assets/index.88b1d373.css","assets/cropper.bcc4a72c.js","assets/cropper.88891c90.css","assets/index.cb3d1a7e.js","assets/index.43ba843e.css","assets/index.b833bb1c.js","assets/index.be7c702f.js","assets/uniqBy.7a457808.js","assets/useForm.454b56eb.js","assets/lock.acb5ea64.js","assets/header.d801b988.js"]))},props:{theme:x.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:k}=R(),{getShowDoc:_,getUseLockPage:C}=G(),p=B(),h=N(()=>{const{realName:f="",avatar:S,desc:b}=p.getUserInfo||{};return{realName:f,avatar:S||J,desc:b}}),[o,{openModal:s}]=H(),a=V();function m(){s(!0)}function d(){p.confirmLoginOut()}function A(){v(z)}function I(){v(q)}function L(){a("/account/center")}function E(){a("/account/setting")}function M(f){switch(f.key){case"logout":d();break;case"doc":A();break;case"projectAddress":I();break;case"accountCenter":L();break;case"accountSetting":E();break;case"lock":m();break}}return{prefixCls:e,t:k,getUserInfo:h,handleMenuClick:M,getShowDoc:_,register:o,getUseLockPage:C}}}),K=["src"];function Q(e,k,_,C,p,h){const o=n("MenuItem"),s=n("MenuDivider"),a=n("Menu"),m=n("Dropdown"),d=n("LockAction");return r(),j(T,null,[t(m,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g(()=>[t(a,{onClick:e.handleMenuClick},{default:g(()=>[e.getShowDoc?(r(),c(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):i("",!0),e.getShowDoc?(r(),c(o,{key:"projectAddress",text:"\u9879\u76EE\u5730\u5740",icon:"ion:document-text-outline"})):i("",!0),e.getShowDoc?(r(),c(s,{key:2})):i("",!0),t(o,{key:"accountCenter",text:"\u4E2A\u4EBA\u4E2D\u5FC3",icon:"grommet-icons:user"}),t(o,{key:"accountSetting",text:"\u8D26\u6237\u8BBE\u7F6E",icon:"grommet-icons:user-settings"}),t(s),e.getUseLockPage?(r(),c(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):i("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:g(()=>[u("span",{class:l([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[u("img",{class:l(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,K),u("span",{class:l(`${e.prefixCls}__info hidden md:block`)},[u("span",{class:l([`${e.prefixCls}__name  `,"truncate"])},F(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(d,{onRegister:e.register},null,8,["onRegister"])],64)}var ke=$(W,[["render",Q]]);export{ke as default};
