var n=(b,S,a)=>new Promise((y,u)=>{var B=o=>{try{m(a.next(o))}catch(p){u(p)}},g=o=>{try{m(a.throw(o))}catch(p){u(p)}},m=o=>o.done?y(o.value):Promise.resolve(o.value).then(B,g);m((a=a.apply(b,S)).next())});import{a as j,v as L,br as N,aA as W,bS as z,o as r,h as G,n as k,z as c,x as w,j as f,B as D,i as l,t as P,fB as U,k as v,G as $}from"./index.01016e1b.js";import{T as q}from"./index.ad15f2c8.js";import{B as H}from"./TableImg.19bd1df3.js";import{j as J}from"./BasicForm.23326f3b.js";import{u as Q}from"./useTable.39e6d3ba.js";import{b as X}from"./index.e55212df.js";import{f as Y,c as Z,s as tt,_ as et,r as ot,e as st,a as it}from"./FormModal.1d36bb3f.js";import{s as nt}from"./index.55456fcf.js";import{a as at}from"./download.e8ebbf84.js";import"./index.261e1402.js";import"./Checkbox.0393c1df.js";import"./index.59b7c00c.js";import"./index.703a23e2.js";import"./eagerComputed.19683db9.js";import"./useForm.5283242d.js";import"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";import"./index.b4367855.js";import"./index.be501b20.js";import"./uuid.2b29000c.js";import"./index.b8bb4c84.js";import"./_baseIteratee.c73c9502.js";import"./get.1a35d26d.js";import"./DeleteOutlined.60895bb2.js";import"./index.d1bfa846.js";import"./useRefs.b8e07b47.js";import"./Form.45f609aa.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";import"./index.44e8fa84.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.efe9779a.js";import"./FullscreenOutlined.969211bf.js";import"./index.b6126e6e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0cc164ce.js";import"./index.d5369391.js";/* empty css              *//* empty css               */import"./index.499a6f59.js";import"./index.3205f76b.js";import"./index.bb233b92.js";import"./index.2f9433fa.js";import"./cropper.bcc4a72c.js";import"./base64Conver.08b9f4ec.js";import"./index.9ada290f.js";import"./uniqBy.5ad5c6ba.js";const re=j({__name:"index",emits:["dict-change"],setup(b,{emit:S}){const a=L([]);N(()=>n(this,null,function*(){a.value=yield nt({dictCode:"sys_status"})}));const{createMessage:y,createConfirm:u}=$(),[B,{openModal:g}]=X(),[m,{reload:o,getForm:p,getDataSource:_,getSelectRowKeys:x,setSelectedRowKeys:s}]=Q({title:"\u5B57\u5178\u5217\u8868",api:Y,rowKey:"id",columns:Z,rowSelection:{type:"radio"},formConfig:{baseColProps:{sm:24,lg:12},labelWidth:90,schemas:tt,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:sysDict:updateSysDict","system:sysDict:removeSysDict"],width:80,title:"\u64CD\u4F5C",dataIndex:"action"},afterFetch:O});function A(){g(!0,{isUpdate:!1})}function R(t){g(!0,{record:t,isUpdate:!0})}function T(t){return n(this,null,function*(){yield ot({ids:t.id}),y.success("\u5220\u9664\u6210\u529F\uFF01"),yield o();const e=_();e.length>0?s([e[0].id]):s([]),d()})}function E(){return n(this,null,function*(){u({iconType:"warning",title:"\u63D0\u793A",content:"\u786E\u8BA4\u5BFC\u51FA\uFF1F",onOk:()=>n(this,null,function*(){const t=p().getFieldsValue(),e=yield st(t),h=e.data,i=e.headers["content-disposition"].split(";")[1].split("=")[1],C=decodeURIComponent(escape(i));at(h,C)})})})}function I(){return n(this,null,function*(){u({iconType:"warning",title:"\u63D0\u793A",content:"\u786E\u8BA4\u5237\u65B0\u6240\u6709\u6570\u636E\u5B57\u5178\u7F13\u5B58\uFF1F",onOk:()=>n(this,null,function*(){yield it(),y.success("\u5237\u65B0\u6210\u529F\uFF01")})})})}function M(h){return n(this,arguments,function*({isUpdate:t,values:e}){if(yield o(),t)s([e.id]);else{const i=_();i.length>0?s([i[0].id]):s([])}d()})}function O(t){t.length>0?s([t[0].id]):s([]),d()}function V(t){s([t.id]),d()}function K({keys:t,rows:e}){d()}function d(){const t=x();S("dict-change",t.length>0?t[0]:"")}return(t,e)=>{const h=W("a-button"),i=z("auth");return r(),G("div",null,[k(l(H),{onRegister:l(m),onSelectionChange:K,onRowClick:V},{toolbar:c(()=>[w((r(),f(h,{type:"primary",onClick:A,preIcon:"ant-design:plus-outlined"},{default:c(()=>[D("\u65B0\u589E")]),_:1})),[[i,["system:sysDict:addSysDict"]]]),w((r(),f(h,{color:"warning",onClick:E,preIcon:"ant-design:download-outlined"},{default:c(()=>[D("\u5BFC\u51FA")]),_:1})),[[i,["system:sysDict:exportSysDict"]]]),w((r(),f(h,{color:"success",onClick:I,preIcon:"ant-design:redo-outlined"},{default:c(()=>[D("\u5237\u65B0\u7F13\u5B58")]),_:1})),[[i,["system:sysDict:refreshSysDictCache"]]])]),bodyCell:c(({column:C,record:F})=>[C.key==="status"?(r(),f(l(q),{key:0,color:F.status==="0"?"processing":"error"},{default:c(()=>[D(P(l(U)(a.value,F.status)),1)]),_:2},1032,["color"])):v("",!0),C.key==="action"?(r(),f(l(J),{key:1,actions:[{auth:["system:sysDict:updateSysDict"],icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91",onClick:R.bind(null,F)},{auth:["system:sysDict:removeSysDict"],icon:"ant-design:delete-outlined",tooltip:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:T.bind(null,F)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),k(et,{onRegister:l(B),onSuccess:M},null,8,["onRegister"])])}}});export{re as default};