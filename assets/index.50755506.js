var i=(y,F,r)=>new Promise((n,d)=>{var C=e=>{try{s(r.next(e))}catch(a){d(a)}},b=e=>{try{s(r.throw(e))}catch(a){d(a)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(C,b);s((r=r.apply(y,F)).next())});import{B as L}from"./TableImg.93e6d55e.js";import{j as V}from"./BasicForm.05ee908a.js";import{u as N}from"./useTable.6336253d.js";import{a as U,v as I,br as z,a9 as W,an as G,aA as K,bS as $,o as u,h as q,n as k,z as h,x,j as g,B as P,i as c,k as v,G as H}from"./index.67a988db.js";import{I as J}from"./index.8fb4702c.js";import{b as Q}from"./index.f1863477.js";import{c as X,s as Y,_ as Z}from"./FormModal.ef1c537b.js";import{d as tt,r as et,e as ot}from"./productApi.6e4a4bb1.js";import{s as w}from"./index.80508645.js";import{a as rt}from"./download.cb83b819.js";import"./index.475977fd.js";import"./Checkbox.46a1d435.js";import"./index.510f4eba.js";import"./index.848e1eef.js";import"./eagerComputed.841da0b8.js";import"./useForm.f8fae255.js";import"./index.8b70e5a3.js";import"./index.66e9e120.js";import"./index.253e4730.js";import"./useSize.1222867c.js";import"./useWindowSizeFn.4d53064e.js";import"./useContentViewHeight.97060834.js";import"./ArrowLeftOutlined.7c433682.js";import"./index.5b15cd76.js";import"./index.a722cbfd.js";import"./index.f3227c85.js";import"./index.c9944a8c.js";import"./uuid.2b29000c.js";import"./index.3f00b8d1.js";import"./_baseIteratee.3527c98a.js";import"./get.87514043.js";import"./DeleteOutlined.cf817082.js";import"./index.0280075c.js";import"./useRefs.ac08b2f5.js";import"./Form.ab29d6a8.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./index.c763c491.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b0ed5806.js";import"./FullscreenOutlined.a71f1151.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a82af03e.js";import"./index.d60ca517.js";/* empty css              *//* empty css               */import"./index.64075906.js";import"./index.95a0a2ac.js";import"./index.ff6c01e4.js";import"./index.7034e6c7.js";import"./cropper.bcc4a72c.js";import"./base64Conver.08b9f4ec.js";import"./index.56a49b73.js";import"./uniqBy.be172303.js";const ie=U({__name:"index",props:{nodeId:{type:String}},emits:["refresh-tree"],setup(y,{expose:F,emit:r}){const n=y,d=I([]),C=I([]),b=I([]);z(()=>i(this,null,function*(){d.value=yield w({dictCode:"sys_status"}),C.value=yield w({dictCode:"sys_lock_flag"}),b.value=yield w({dictCode:"sys_sex"})}));const{createMessage:s,createConfirm:e}=H(),[a,{openModal:B}]=Q(),[A,{reload:p,getForm:S}]=N({title:"\u5546\u54C1\u5217\u8868 ",api:tt,rowKey:"id",columns:X,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:Y,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:Product:updateProduct","system:Product:removeProduct"],width:120,title:"\u64CD\u4F5C",dataIndex:"action"},beforeFetch:R});function O(){const t={deptId:n.nodeId};B(!0,{record:t,isUpdate:!1})}function D(t){t.deptId=t.deptId===""?null:t.deptId,B(!0,{record:t,isUpdate:!0})}function T(t){return i(this,null,function*(){yield et({ids:t.id}),s.success("\u5220\u9664\u6210\u529F\uFF01"),r("refresh-tree",t.deptId),yield p()})}function E(){return i(this,null,function*(){e({iconType:"warning",title:"\u63D0\u793A",content:"\u786E\u8BA4\u5BFC\u51FA\uFF1F",onOk:()=>i(this,null,function*(){const t=S().getFieldsValue(),o=yield ot(t),m=o.data;if(o.headers,!o.headers["content-disposition"]){s.error("\u5BFC\u51FA\u5931\u8D25\uFF01");return}const l=o.headers["content-disposition"].split(";")[1].split("=")[1],f=decodeURIComponent(escape(l));rt(m,f)})})})}function M(m){return i(this,arguments,function*({isUpdate:t,values:o}){r("refresh-tree",o.deptId),yield p()})}function R(t){return Object.assign(t,{deptId:n.nodeId})}function j(){p()}return W(()=>n.nodeId,()=>{G(()=>{p()})}),F({refresh:j}),(t,o)=>{const m=K("a-button"),l=$("auth");return u(),q("div",null,[k(c(L),{onRegister:c(A)},{toolbar:h(()=>[x((u(),g(m,{type:"primary",onClick:O,preIcon:"ant-design:plus-outlined"},{default:h(()=>[P("\u65B0\u589E")]),_:1})),[[l,["system:Product:addProduct"]]]),x((u(),g(m,{color:"warning",onClick:E,preIcon:"ant-design:download-outlined"},{default:h(()=>[P("\u5BFC\u51FA")]),_:1})),[[l,["system:Product:exportProduct"]]])]),bodyCell:h(({column:f,record:_})=>[f.key==="imgAddr"?(u(),g(c(J),{key:0,size:60,src:_.imgAddr},null,8,["src"])):v("",!0),f.key==="action"?(u(),g(c(V),{key:1,actions:[{auth:["system:Product:updateProduct"],icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91",onClick:D.bind(null,_)},{auth:["system:Product:removeProduct"],icon:"ant-design:delete-outlined",tooltip:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:T.bind(null,_)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),k(Z,{onRegister:c(a),onSuccess:M},null,8,["onRegister"])])}}});export{ie as default};