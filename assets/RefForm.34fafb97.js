import{B as C}from"./BasicForm.1111a937.js";import{ay as B,a as E,cE as P,v as b,aA as p,o as F,j as v,z as t,m as a,n as u,B as l,G as k}from"./index.7f67491a.js";import{P as c}from"./index.c5711bd7.js";/* empty css              *//* empty css               */import"./index.a655c1dc.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.c7d3ad48.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.531e8692.js";import"./get.c67596ea.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./useSize.95a68d73.js";import"./index.04a8cbbf.js";import"./index.296b7df0.js";import"./useWindowSizeFn.8bbcad12.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.3022938f.js";import"./index.e1e5d99d.js";import"./uuid.2b29000c.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.2d5e9d07.js";import"./index.a6d90cc9.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./index.f7e77d68.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";const $=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],A=E({components:{BasicForm:C,CollapseContainer:P,PageWrapper:c},setup(){const e=b(null),{createMessage:o}=k();return{formElRef:e,schemas:$,handleSubmit:n=>{o.success("click search,values:"+JSON.stringify(n))},setProps(n){const i=e.value;!i||i.setProps(n)}}}}),D={class:"mb-4"},g={class:"mb-4"};function S(e,o,n,i,w,W){const s=p("a-button"),m=p("BasicForm"),d=p("CollapseContainer"),f=p("PageWrapper");return F(),v(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[a("div",D,[u(s,{onClick:o[0]||(o[0]=r=>e.setProps({labelWidth:150})),class:"mr-2"},{default:t(()=>[l(" \u66F4\u6539labelWidth ")]),_:1}),u(s,{onClick:o[1]||(o[1]=r=>e.setProps({labelWidth:120})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539FlabelWidth ")]),_:1}),u(s,{onClick:o[2]||(o[2]=r=>e.setProps({size:"large"})),class:"mr-2"},{default:t(()=>[l(" \u66F4\u6539Size ")]),_:1}),u(s,{onClick:o[3]||(o[3]=r=>e.setProps({size:"default"})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539FSize ")]),_:1}),u(s,{onClick:o[4]||(o[4]=r=>e.setProps({disabled:!0})),class:"mr-2"},{default:t(()=>[l(" \u7981\u7528\u8868\u5355 ")]),_:1}),u(s,{onClick:o[5]||(o[5]=r=>e.setProps({disabled:!1})),class:"mr-2"},{default:t(()=>[l(" \u89E3\u9664\u7981\u7528 ")]),_:1}),u(s,{onClick:o[6]||(o[6]=r=>e.setProps({compact:!0})),class:"mr-2"},{default:t(()=>[l(" \u7D27\u51D1\u8868\u5355 ")]),_:1}),u(s,{onClick:o[7]||(o[7]=r=>e.setProps({compact:!1})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ")]),_:1}),u(s,{onClick:o[8]||(o[8]=r=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:t(()=>[l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ")]),_:1})]),a("div",g,[u(s,{onClick:o[9]||(o[9]=r=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[10]||(o[10]=r=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[11]||(o[11]=r=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[12]||(o[12]=r=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[13]||(o[13]=r=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[14]||(o[14]=r=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[15]||(o[15]=r=>e.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:t(()=>[l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[16]||(o[16]=r=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:t(()=>[l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1})]),u(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:t(()=>[u(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var vo=B(A,[["render",S]]);export{vo as default};