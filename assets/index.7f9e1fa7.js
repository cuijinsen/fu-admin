var i=(y,F,r)=>new Promise((n,d)=>{var C=e=>{try{s(r.next(e))}catch(a){d(a)}},b=e=>{try{s(r.throw(e))}catch(a){d(a)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(C,b);s((r=r.apply(y,F)).next())});import{B as L}from"./TableImg.85d93572.js";import{j as V}from"./BasicForm.d8c9eebf.js";import{u as N}from"./useTable.36fa029c.js";import{a as U,v as I,br as z,a9 as W,an as G,aA as K,bS as $,o as u,h as q,n as k,z as h,x,j as g,B as P,i as c,k as v,G as H}from"./index.437c4479.js";import{I as J}from"./index.ac415180.js";import{b as Q}from"./index.d115f57c.js";import{c as X,s as Y,_ as Z}from"./FormModal.9ae0b371.js";import{d as tt,r as et,e as ot}from"./productApi.aeee7a66.js";import{s as w}from"./index.16117ce1.js";import{a as rt}from"./download.e2b2d1d2.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./useForm.468df0fb.js";import"./index.d73ca278.js";import"./index.3aa321be.js";import"./index.51f3da4c.js";import"./useSize.20fe1af9.js";import"./useWindowSizeFn.19d582eb.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./index.11505f04.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.4dfcb51c.js";import"./uuid.2b29000c.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./get.1b284c6a.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./index.f52f7562.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c484a87a.js";import"./FullscreenOutlined.01c6694a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ee088757.js";import"./index.07f5517b.js";/* empty css              *//* empty css               */import"./index.1b5fb899.js";import"./index.db2dd425.js";import"./index.637cef53.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./base64Conver.08b9f4ec.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";const ie=U({__name:"index",props:{nodeId:{type:String}},emits:["refresh-tree"],setup(y,{expose:F,emit:r}){const n=y,d=I([]),C=I([]),b=I([]);z(()=>i(this,null,function*(){d.value=yield w({dictCode:"sys_status"}),C.value=yield w({dictCode:"sys_lock_flag"}),b.value=yield w({dictCode:"sys_sex"})}));const{createMessage:s,createConfirm:e}=H(),[a,{openModal:B}]=Q(),[A,{reload:p,getForm:S}]=N({title:"\u5546\u54C1\u5217\u8868 ",api:tt,rowKey:"id",columns:X,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:Y,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:Product:updateProduct","system:Product:removeProduct"],width:120,title:"\u64CD\u4F5C",dataIndex:"action"},beforeFetch:R});function O(){const t={deptId:n.nodeId};B(!0,{record:t,isUpdate:!1})}function D(t){t.deptId=t.deptId===""?null:t.deptId,B(!0,{record:t,isUpdate:!0})}function T(t){return i(this,null,function*(){yield et({ids:t.id}),s.success("\u5220\u9664\u6210\u529F\uFF01"),r("refresh-tree",t.deptId),yield p()})}function E(){return i(this,null,function*(){e({iconType:"warning",title:"\u63D0\u793A",content:"\u786E\u8BA4\u5BFC\u51FA\uFF1F",onOk:()=>i(this,null,function*(){const t=S().getFieldsValue(),o=yield ot(t),m=o.data;if(o.headers,!o.headers["content-disposition"]){s.error("\u5BFC\u51FA\u5931\u8D25\uFF01");return}const l=o.headers["content-disposition"].split(";")[1].split("=")[1],f=decodeURIComponent(escape(l));rt(m,f)})})})}function M(m){return i(this,arguments,function*({isUpdate:t,values:o}){r("refresh-tree",o.deptId),yield p()})}function R(t){return Object.assign(t,{deptId:n.nodeId})}function j(){p()}return W(()=>n.nodeId,()=>{G(()=>{p()})}),F({refresh:j}),(t,o)=>{const m=K("a-button"),l=$("auth");return u(),q("div",null,[k(c(L),{onRegister:c(A)},{toolbar:h(()=>[x((u(),g(m,{type:"primary",onClick:O,preIcon:"ant-design:plus-outlined"},{default:h(()=>[P("\u65B0\u589E")]),_:1})),[[l,["system:Product:addProduct"]]]),x((u(),g(m,{color:"warning",onClick:E,preIcon:"ant-design:download-outlined"},{default:h(()=>[P("\u5BFC\u51FA")]),_:1})),[[l,["system:Product:exportProduct"]]])]),bodyCell:h(({column:f,record:_})=>[f.key==="imgAddr"?(u(),g(c(J),{key:0,size:60,src:_.imgAddr},null,8,["src"])):v("",!0),f.key==="action"?(u(),g(c(V),{key:1,actions:[{auth:["system:Product:updateProduct"],icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91",onClick:D.bind(null,_)},{auth:["system:Product:removeProduct"],icon:"ant-design:delete-outlined",tooltip:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:T.bind(null,_)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),k(Z,{onRegister:c(a),onSuccess:M},null,8,["onRegister"])])}}});export{ie as default};