import{B as n}from"./BasicForm.1636ebdd.js";import{ay as u,a as l,cE as c,aA as r,o as d,j as f,z as p,n as i,bU as C,G as _}from"./index.b74cf1bc.js";import{M as h}from"./index.66dca059.js";import{P as b}from"./index.94d6a8fb.js";/* empty css              *//* empty css               */import"./index.76f0947d.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.ea1d2165.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.6fc50966.js";import"./get.ef800ccd.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./DeleteOutlined.58479ebe.js";import"./index.9f1863b7.js";import"./useRefs.3b949e72.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useSize.6193d609.js";import"./index.78b5d5cb.js";import"./index.8d73dc63.js";import"./useWindowSizeFn.59b3a207.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.91d33a28.js";import"./index.8ef9877f.js";import"./uuid.2b29000c.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./index.cb3d1a7e.js";import"./index.b833bb1c.js";import"./index.be7c702f.js";import"./uniqBy.7a457808.js";import"./index.3c1ff6fb.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,w,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:p(()=>[i(m,{title:"MarkDown\u8868\u5355"},{default:p(()=>[i(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var _o=u(k,[["render",B]]);export{_o as default};
