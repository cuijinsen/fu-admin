import{ay as y,a as _,aA as t,o as A,j as E,z as p,n as r,B as a}from"./index.437c4479.js";import{A as R}from"./index.637cef53.js";import{u}from"./index.02eb7cfa.js";import k from"./Drawer1.bbc8657a.js";import B from"./Drawer2.44551e08.js";import $ from"./Drawer3.1c8e9d88.js";import v from"./Drawer4.86d85a44.js";import P from"./Drawer5.5943216c.js";import{P as W}from"./index.d73ca278.js";import"./index.db6a278a.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./BasicForm.d8c9eebf.js";/* empty css              *//* empty css               */import"./index.f52f7562.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.4dfcb51c.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.1b5fb899.js";import"./get.1b284c6a.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./useSize.20fe1af9.js";import"./index.db2dd425.js";import"./index.d115f57c.js";import"./useWindowSizeFn.19d582eb.js";import"./FullscreenOutlined.01c6694a.js";import"./index.ac415180.js";import"./uuid.2b29000c.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.51f3da4c.js";import"./index.11505f04.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";import"./useForm.468df0fb.js";import"./index.3aa321be.js";import"./useContentViewHeight.459f0c64.js";const b=_({components:{Alert:R,PageWrapper:W,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:v,Drawer5:P},setup(){const[e,{openDrawer:o,setDrawerProps:m}]=u(),[g,{openDrawer:f}]=u(),[d,{openDrawer:n}]=u(),[i,{openDrawer:s}]=u(),[w,{openDrawer:D}]=u();function l(){s(!0,{data:"content",info:"Info"})}function c(){o(),m({loading:!0}),setTimeout(()=>{m({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:i,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,m,g,f,d){const n=t("Alert"),i=t("a-button"),s=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return A(),E(F,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:p(()=>[r(n,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:p(()=>[a(" \u6253\u5F00Drawer ")]),_:1},8,["onClick"]),r(n,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:p(()=>[a(" \u6253\u5F00Drawer ")]),_:1}),r(n,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:p(()=>[a(" \u6253\u5F00Drawer ")]),_:1}),r(n,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.send},{default:p(()=>[a(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),r(n,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:p(()=>[a(" \u6253\u5F00\u8BE6\u60C5Drawer ")]),_:1}),r(s,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var Wr=y(b,[["render",L]]);export{Wr as default};