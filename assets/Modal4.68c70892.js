import{B as l,a as c}from"./index.8d73dc63.js";import{B as d}from"./BasicForm.1636ebdd.js";import{u}from"./useForm.454b56eb.js";import{a as f,v as B,ay as g,an as h,aA as p,o as _,j as b,z as C,m as v,n as R,aB as V}from"./index.b74cf1bc.js";import"./useWindowSizeFn.59b3a207.js";import"./FullscreenOutlined.2c5fc800.js";/* empty css              *//* empty css               */import"./index.76f0947d.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.ea1d2165.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.6fc50966.js";import"./get.ef800ccd.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./DeleteOutlined.58479ebe.js";import"./index.9f1863b7.js";import"./useRefs.3b949e72.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useSize.6193d609.js";import"./index.78b5d5cb.js";import"./index.91d33a28.js";import"./index.8ef9877f.js";import"./uuid.2b29000c.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./index.cb3d1a7e.js";import"./index.b833bb1c.js";import"./index.be7c702f.js";import"./uniqBy.7a457808.js";const m=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:m,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),n=p("BasicModal");return _(),b(n,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:C(()=>[v("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var fo=g(F,[["render",D]]);export{fo as default};
