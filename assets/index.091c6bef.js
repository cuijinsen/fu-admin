import{D as f}from"./index.fd738dce.js";import{B as _}from"./TableImg.7860a006.js";import"./BasicForm.1111a937.js";import{u as l}from"./useTable.5f72d90a.js";import{P as T}from"./index.c5711bd7.js";import{ay as h,a as g,aA as r,o as D,j as b,z as B,n as t}from"./index.7f67491a.js";import{D as c}from"./index.a655c1dc.js";import{refundSchema as S,refundData as v,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as E,refundTimeTableData as w}from"./data.375c0399.js";import"./index.2070ec09.js";import"./get.c67596ea.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./useForm.e97ebf24.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.c7d3ad48.js";import"./uuid.2b29000c.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./useSize.95a68d73.js";import"./useWindowSizeFn.8bbcad12.js";import"./index.296b7df0.js";import"./FullscreenOutlined.505d9d0b.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./index.e1e5d99d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";/* empty css              *//* empty css               */import"./index.531e8692.js";import"./index.04a8cbbf.js";import"./index.3022938f.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.2d5e9d07.js";import"./index.a6d90cc9.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./index.f7e77d68.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";const A=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:E,pagination:!1,dataSource:w,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:S,refundData:v,personSchema:y,personData:C}}});function P(e,p,n,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var $e=h(A,[["render",P],["__scopeId","data-v-109959ad"]]);export{$e as default};