var r=(F,b,o)=>new Promise((n,d)=>{var C=e=>{try{i(o.next(e))}catch(a){d(a)}},w=e=>{try{i(o.throw(e))}catch(a){d(a)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(C,w);i((o=o.apply(F,b)).next())});import{B as U}from"./TableImg.19bd1df3.js";import{j as V}from"./BasicForm.23326f3b.js";import{u as N}from"./useTable.39e6d3ba.js";import{a as z,v as B,br as W,a9 as G,an as K,aA as $,bS as q,o as c,h as H,n as k,z as g,x as v,j as y,B as A,i as p,k as P,G as J}from"./index.01016e1b.js";import{I as Q}from"./index.b6126e6e.js";import{b as X}from"./index.e55212df.js";import{c as Y,s as Z,_ as tt}from"./FormModal.c414b539.js";import{f as et,r as ot,a as st,e as it}from"./productApi.bcaeb9b7.js";import{s as I}from"./index.55456fcf.js";import{a as rt}from"./download.e8ebbf84.js";import"./index.261e1402.js";import"./Checkbox.0393c1df.js";import"./index.59b7c00c.js";import"./index.703a23e2.js";import"./eagerComputed.19683db9.js";import"./useForm.5283242d.js";import"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";import"./index.b4367855.js";import"./index.be501b20.js";import"./index.ad15f2c8.js";import"./uuid.2b29000c.js";import"./index.b8bb4c84.js";import"./_baseIteratee.c73c9502.js";import"./get.1a35d26d.js";import"./DeleteOutlined.60895bb2.js";import"./index.d1bfa846.js";import"./useRefs.b8e07b47.js";import"./Form.45f609aa.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";import"./index.44e8fa84.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.efe9779a.js";import"./FullscreenOutlined.969211bf.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0cc164ce.js";import"./index.d5369391.js";/* empty css              *//* empty css               */import"./index.499a6f59.js";import"./index.3205f76b.js";import"./index.bb233b92.js";import"./index.2f9433fa.js";import"./cropper.bcc4a72c.js";import"./base64Conver.08b9f4ec.js";import"./index.9ada290f.js";import"./uniqBy.5ad5c6ba.js";const ae=z({__name:"index",props:{nodeId:{type:String}},emits:["refresh-tree"],setup(F,{expose:b,emit:o}){const n=F,d=B([]),C=B([]),w=B([]);W(()=>r(this,null,function*(){d.value=yield I({dictCode:"sys_status"}),C.value=yield I({dictCode:"sys_lock_flag"}),w.value=yield I({dictCode:"sys_sex"})}));const{createMessage:i,createConfirm:e}=J(),[a,{openModal:_}]=X(),[x,{reload:u,getForm:O}]=N({title:"\u5BA1\u6279\u5217\u8868 ",api:et,rowKey:"id",columns:Y,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:Z,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:Product:updateProduct","system:Product:removeProduct","system:Product:approveProduct"],width:120,title:"\u64CD\u4F5C",dataIndex:"action"},beforeFetch:R});function S(){const t={deptId:n.nodeId};_(!0,{record:t,isUpdate:!1})}function D(t){t.deptId=t.deptId===""?null:t.deptId,_(!0,{record:t,isUpdate:!0})}function T(t){return r(this,null,function*(){yield ot({ids:t.id}),i.success("\u5220\u9664\u6210\u529F\uFF01"),o("refresh-tree",t.deptId),yield u()})}function E(t){return r(this,null,function*(){yield st({ids:t.id}),i.success("\u5BA1\u6279\u6210\u529F\uFF01"),o("refresh-tree",t.deptId),yield u()})}function M(){return r(this,null,function*(){e({iconType:"warning",title:"\u63D0\u793A",content:"\u786E\u8BA4\u5BFC\u51FA\uFF1F",onOk:()=>r(this,null,function*(){const t=O().getFieldsValue(),s=yield it(t),l=s.data;if(s.headers,!s.headers["content-disposition"]){i.error("\u5BFC\u51FA\u5931\u8D25\uFF01");return}const m=s.headers["content-disposition"].split(";")[1].split("=")[1],f=decodeURIComponent(escape(m));rt(l,f)})})})}function j(l){return r(this,arguments,function*({isUpdate:t,values:s}){o("refresh-tree",s.deptId),yield u()})}function R(t){return Object.assign(t,{deptId:n.nodeId})}function L(){u()}return G(()=>n.nodeId,()=>{K(()=>{u()})}),b({refresh:L}),(t,s)=>{const l=$("a-button"),m=q("auth");return c(),H("div",null,[k(p(U),{onRegister:p(x)},{toolbar:g(()=>[v((c(),y(l,{type:"primary",onClick:S,preIcon:"ant-design:plus-outlined"},{default:g(()=>[A("\u65B0\u589E ")]),_:1})),[[m,["system:Product:addProduct"]]]),v((c(),y(l,{color:"warning",onClick:M,preIcon:"ant-design:download-outlined"},{default:g(()=>[A("\u5BFC\u51FA ")]),_:1})),[[m,["system:Product:exportProduct"]]])]),bodyCell:g(({column:f,record:h})=>[f.key==="imgAddr"?(c(),y(p(Q),{key:0,size:60,src:h.imgAddr},null,8,["src"])):P("",!0),f.key==="action"?(c(),y(p(V),{key:1,actions:[{auth:["system:sysUser:resetPwd"],icon:"ant-design:check-outlined",tooltip:"\u5BA1\u6279\u901A\u8FC7",onClick:E.bind(null,h)},{auth:["system:Product:updateProduct"],icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91",onClick:D.bind(null,h)},{auth:["system:Product:removeProduct"],icon:"ant-design:delete-outlined",tooltip:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:T.bind(null,h)}}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister"]),k(tt,{onRegister:p(a),onSuccess:j},null,8,["onRegister"])])}}});export{ae as default};