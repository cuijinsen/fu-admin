import{B as n}from"./BasicForm.d8c9eebf.js";import{ay as u,a as l,cE as c,aA as e,o as d,j as C,z as i,n as p,bU as f,G as _}from"./index.437c4479.js";import{T as h}from"./index.ae74973e.js";import{P as b}from"./index.d73ca278.js";/* empty css              *//* empty css               */import"./index.f52f7562.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.4dfcb51c.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.1b5fb899.js";import"./get.1b284c6a.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./useSize.20fe1af9.js";import"./index.db2dd425.js";import"./index.d115f57c.js";import"./useWindowSizeFn.19d582eb.js";import"./FullscreenOutlined.01c6694a.js";import"./index.637cef53.js";import"./index.ac415180.js";import"./uuid.2b29000c.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.51f3da4c.js";import"./index.11505f04.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";import"./index.3aa321be.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";const B=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>f(h,{value:t[o],onChange:r=>{t[o]=r}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:t}=_();return{schemas:B,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function y(t,o,r,P,S,V){const a=e("BasicForm"),m=e("CollapseContainer"),s=e("PageWrapper");return d(),C(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(m,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var ft=u(g,[["render",y]]);export{ft as default};
