import{ay as _,a as R,ah as w,v as C,aA as a,o as y,j as k,z as r,n as u,B as n,aK as $,an as T}from"./index.437c4479.js";import{A as V}from"./index.637cef53.js";import{S as P}from"./index.db2dd425.js";import{b as d}from"./index.d115f57c.js";import D from"./Modal1.c1f52856.js";import v from"./Modal2.42f6403b.js";import b from"./Modal3.3f6753ce.js";import B from"./Modal4.958cfc28.js";import{P as S}from"./index.d73ca278.js";import"./useFlexGapSupport.aeef873b.js";import"./useWindowSizeFn.19d582eb.js";import"./FullscreenOutlined.01c6694a.js";import"./BasicForm.d8c9eebf.js";/* empty css              *//* empty css               */import"./index.f52f7562.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.4dfcb51c.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.1b5fb899.js";import"./get.1b284c6a.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useSize.20fe1af9.js";import"./index.ac415180.js";import"./uuid.2b29000c.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.51f3da4c.js";import"./index.11505f04.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";import"./useForm.468df0fb.js";import"./index.3aa321be.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";const W=R({components:{Alert:V,Modal1:D,Modal2:v,Modal3:b,Modal4:B,PageWrapper:S,ASpace:P},setup(){const o=w(null),[e,{openModal:F}]=d(),[f,{openModal:M}]=d(),[g,{openModal:i}]=d(),[t,{openModal:s}]=d(),l=C(!1),m=C(null);function A(){s(!0,{data:"content",info:"Info"})}function c(){F(!0)}function E(p){switch(p){case 1:o.value=D;break;case 2:o.value=v;break;case 3:o.value=b;break;default:o.value=B;break}T(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:f,openModal2:M,register3:g,openModal3:i,register4:t,openModal4:s,modalVisible:l,userData:m,openTargetModal:E,send:A,currentModal:o,openModalLoading:c}}});function h(o,e,F,f,M,g){const i=a("Alert"),t=a("a-button"),s=a("a-space"),l=a("Modal1"),m=a("Modal2"),A=a("Modal3"),c=a("Modal4"),E=a("PageWrapper");return y(),k(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:r(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable\r
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(s,null,{default:r(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=p=>o.openTargetModal(1))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A971 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=p=>o.openTargetModal(2))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A972 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=p=>o.openTargetModal(3))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A973 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=p=>o.openTargetModal(4))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A974 ")]),_:1})]),_:1}),(y(),k($(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=p=>o.modalVisible=p),userData:o.userData},null,40,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(A,{onRegister:o.register3},null,8,["onRegister"]),u(c,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var Vo=_(W,[["render",h]]);export{Vo as default};