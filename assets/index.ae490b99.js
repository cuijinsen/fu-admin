import{ay as _,a as R,ah as w,v as C,aA as a,o as y,j as k,z as r,n as u,B as n,aK as $,an as T}from"./index.b74cf1bc.js";import{A as V}from"./index.91d33a28.js";import{S as P}from"./index.78b5d5cb.js";import{b as d}from"./index.8d73dc63.js";import D from"./Modal1.cb66efe6.js";import v from"./Modal2.9314a880.js";import b from"./Modal3.1c54181a.js";import B from"./Modal4.68c70892.js";import{P as S}from"./index.94d6a8fb.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useWindowSizeFn.59b3a207.js";import"./FullscreenOutlined.2c5fc800.js";import"./BasicForm.1636ebdd.js";/* empty css              *//* empty css               */import"./index.76f0947d.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.ea1d2165.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.6fc50966.js";import"./get.ef800ccd.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./DeleteOutlined.58479ebe.js";import"./index.9f1863b7.js";import"./useRefs.3b949e72.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useSize.6193d609.js";import"./index.8ef9877f.js";import"./uuid.2b29000c.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./index.cb3d1a7e.js";import"./index.b833bb1c.js";import"./index.be7c702f.js";import"./uniqBy.7a457808.js";import"./useForm.454b56eb.js";import"./index.3c1ff6fb.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";const W=R({components:{Alert:V,Modal1:D,Modal2:v,Modal3:b,Modal4:B,PageWrapper:S,ASpace:P},setup(){const o=w(null),[e,{openModal:F}]=d(),[f,{openModal:M}]=d(),[g,{openModal:i}]=d(),[t,{openModal:s}]=d(),l=C(!1),m=C(null);function A(){s(!0,{data:"content",info:"Info"})}function c(){F(!0)}function E(p){switch(p){case 1:o.value=D;break;case 2:o.value=v;break;case 3:o.value=b;break;default:o.value=B;break}T(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:f,openModal2:M,register3:g,openModal3:i,register4:t,openModal4:s,modalVisible:l,userData:m,openTargetModal:E,send:A,currentModal:o,openModalLoading:c}}});function h(o,e,F,f,M,g){const i=a("Alert"),t=a("a-button"),s=a("a-space"),l=a("Modal1"),m=a("Modal2"),A=a("Modal3"),c=a("Modal4"),E=a("PageWrapper");return y(),k(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:r(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable\r
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97 ")]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(s,null,{default:r(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=p=>o.openTargetModal(1))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A971 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=p=>o.openTargetModal(2))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A972 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=p=>o.openTargetModal(3))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A973 ")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=p=>o.openTargetModal(4))},{default:r(()=>[n(" \u6253\u5F00\u5F39\u7A974 ")]),_:1})]),_:1}),(y(),k($(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=p=>o.modalVisible=p),userData:o.userData},null,40,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(A,{onRegister:o.register3},null,8,["onRegister"]),u(c,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var Vo=_(W,[["render",h]]);export{Vo as default};
