import{B as n}from"./BasicForm.1111a937.js";import{ay as u,a as l,cE as c,aA as r,o as d,j as f,z as p,n as i,bU as C,G as _}from"./index.7f67491a.js";import{M as h}from"./index.8a27d161.js";import{P as b}from"./index.c5711bd7.js";/* empty css              *//* empty css               */import"./index.a655c1dc.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.c7d3ad48.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.531e8692.js";import"./get.c67596ea.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./useSize.95a68d73.js";import"./index.04a8cbbf.js";import"./index.296b7df0.js";import"./useWindowSizeFn.8bbcad12.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.3022938f.js";import"./index.e1e5d99d.js";import"./uuid.2b29000c.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.2d5e9d07.js";import"./index.a6d90cc9.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./index.f7e77d68.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,w,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:p(()=>[i(m,{title:"MarkDown\u8868\u5355"},{default:p(()=>[i(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var _o=u(k,[["render",B]]);export{_o as default};
