var I=Object.defineProperty,C=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(o,t,e)=>t in o?I(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,c=(o,t)=>{for(var e in t||(t={}))x.call(t,e)&&l(o,e,t[e]);if(d)for(var e of d(t))y.call(t,e)&&l(o,e,t[e]);return o},F=(o,t)=>C(o,b(t));var h=(o,t,e)=>new Promise((n,a)=>{var s=r=>{try{m(e.next(r))}catch(i){a(i)}},p=r=>{try{m(e.throw(r))}catch(i){a(i)}},m=r=>r.done?n(r.value):Promise.resolve(r.value).then(s,p);m((e=e.apply(o,t)).next())});import{a as D,v as T,br as w,a9 as g,an as A,o as f,h as _,n as k,z as B,j as S,i as u,B as E,t as N,fB as v,k as O}from"./index.7f67491a.js";import{T as V}from"./index.c7d3ad48.js";import{B as P}from"./TableImg.7860a006.js";import"./BasicForm.1111a937.js";import{u as L}from"./useTable.5f72d90a.js";import{f as M}from"./sysAreaApi.c29ecc1b.js";import{s as R}from"./index.f816d15d.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./useForm.e97ebf24.js";import"./index.c5711bd7.js";import"./index.f7e77d68.js";import"./index.2d5e9d07.js";import"./useSize.95a68d73.js";import"./useWindowSizeFn.8bbcad12.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";import"./index.a6d90cc9.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./uuid.2b29000c.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./get.c67596ea.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./index.296b7df0.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.a655c1dc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./index.e1e5d99d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";/* empty css              *//* empty css               */import"./index.531e8692.js";import"./index.04a8cbbf.js";import"./index.3022938f.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";const W=[{title:"\u533A\u57DF\u7F16\u7801",dataIndex:"areaCode",width:120},{title:"\u533A\u57DF\u540D\u79F0",dataIndex:"areaName",width:120},{title:"\u533A\u57DF\u7C7B\u578B",dataIndex:"areaType",width:120},{title:"\u5907\u6CE8",dataIndex:"remarks",width:120},{title:"\u6392\u5E8F",dataIndex:"sort",width:120},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:160},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",width:160}],j=[{field:"areaCode",label:"\u533A\u57DF\u7F16\u7801",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u533A\u57DF\u7F16\u7801"}},{field:"areaName",label:"\u533A\u57DF\u540D\u79F0",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u533A\u57DF\u540D\u79F0"}}],zt=D({__name:"index",props:{nodeId:{type:String}},setup(o){const t=o,e=T([]);w(()=>h(this,null,function*(){e.value=yield R({dictCode:"sys_area_type"})}));const[n,{reload:a}]=L({title:"\u884C\u653F\u533A\u57DF\u5217\u8868",api:M,rowKey:"areaCode",columns:W,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:j,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,beforeFetch:s});function s(p){return F(c({},p),{parentCode:t.nodeId?t.nodeId:"0"})}return g(()=>t.nodeId,()=>{A(()=>{a()})}),(p,m)=>(f(),_("div",null,[k(u(P),{onRegister:u(n)},{bodyCell:B(({column:r,record:i})=>[r.key==="areaType"?(f(),S(u(V),{key:0,color:"processing"},{default:B(()=>[E(N(u(v)(e.value,i.areaType)),1)]),_:2},1024)):O("",!0)]),_:1},8,["onRegister"])]))}});export{zt as default};