var d=(o,s,r)=>new Promise((c,i)=>{var l=e=>{try{a(r.next(e))}catch(m){i(m)}},t=e=>{try{a(r.throw(e))}catch(m){i(m)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,t);a((r=r.apply(o,s)).next())});import{a as v,ay as g,cE as h,C as B,s as F,O as A,f as I,aA as p,o as S,j as w,z as u,n,m as _,B as b,G as y,ff as E,fg as R}from"./index.b74cf1bc.js";/* empty css               */import{B as k}from"./BasicForm.1636ebdd.js";import{u as U}from"./useForm.454b56eb.js";import{a as V}from"./index.f2c9969a.js";import{h as $}from"./header.d801b988.js";import{a as x}from"./account.c4e9b6e4.js";import{b as M}from"./data.08d7c751.js";import{u as N}from"./upload.dd866e9b.js";import{R as G,C as T}from"./index.be7c702f.js";/* empty css              */import"./index.76f0947d.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.ea1d2165.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.6fc50966.js";import"./get.ef800ccd.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./DeleteOutlined.58479ebe.js";import"./index.9f1863b7.js";import"./useRefs.3b949e72.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useSize.6193d609.js";import"./index.78b5d5cb.js";import"./index.8d73dc63.js";import"./useWindowSizeFn.59b3a207.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.91d33a28.js";import"./index.8ef9877f.js";import"./uuid.2b29000c.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./index.cb3d1a7e.js";import"./index.b833bb1c.js";import"./uniqBy.7a457808.js";const j=v({components:{BasicForm:k,CollapseContainer:h,Button:B,ARow:G,ACol:T,CropperAvatar:V},setup(){const{createMessage:o}=y(),s=F(),[r,{setFieldsValue:c}]=U({labelWidth:120,schemas:M,showActionButtonGroup:!1});A(()=>d(this,null,function*(){const t=yield x();c(t)}));const i=I(()=>{const{avatar:t}=s.getUserInfo;return t||$});function l(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:N,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),z=o=>(E("data-v-f09834e4"),o=o(),R(),o),O={class:"change-avatar"},P=z(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1));function W(o,s,r,c,i,l){const t=p("BasicForm"),a=p("a-col"),e=p("CropperAvatar"),m=p("a-row"),f=p("Button"),C=p("CollapseContainer");return S(),w(C,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(a,{span:14},{default:u(()=>[n(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(a,{span:10},{default:u(()=>[_("div",O,[P,n(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[b(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var Go=g(j,[["render",W],["__scopeId","data-v-f09834e4"]]);export{Go as default};