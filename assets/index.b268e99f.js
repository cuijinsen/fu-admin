var h=(_,m,i)=>new Promise((u,p)=>{var l=o=>{try{s(i.next(o))}catch(e){p(e)}},c=o=>{try{s(i.throw(o))}catch(e){p(e)}},s=o=>o.done?u(o.value):Promise.resolve(o.value).then(l,c);s((i=i.apply(_,m)).next())});import{a as T,v as w,br as S,o as a,h as C,n as b,z as f,j as g,i as r,B as y,t as d,fB as k,k as n,F as v}from"./index.01016e1b.js";import{T as B}from"./index.ad15f2c8.js";import{B as x}from"./TableImg.19bd1df3.js";import{j as F}from"./BasicForm.23326f3b.js";import{u as E}from"./useTable.39e6d3ba.js";import{u as L}from"./index.adb18440.js";import{f as O,c as P,s as V,_ as I}from"./DescDrawer.5ed009e0.js";import{s as D}from"./index.55456fcf.js";import"./index.261e1402.js";import"./Checkbox.0393c1df.js";import"./index.59b7c00c.js";import"./index.703a23e2.js";import"./eagerComputed.19683db9.js";import"./useForm.5283242d.js";import"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";import"./index.b4367855.js";import"./index.be501b20.js";import"./uuid.2b29000c.js";import"./index.b8bb4c84.js";import"./_baseIteratee.c73c9502.js";import"./get.1a35d26d.js";import"./DeleteOutlined.60895bb2.js";import"./index.d1bfa846.js";import"./useRefs.b8e07b47.js";import"./Form.45f609aa.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";import"./index.e55212df.js";import"./FullscreenOutlined.969211bf.js";import"./index.44e8fa84.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.efe9779a.js";import"./index.b6126e6e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0cc164ce.js";import"./index.d5369391.js";/* empty css              *//* empty css               */import"./index.499a6f59.js";import"./index.3205f76b.js";import"./index.bb233b92.js";import"./download.e8ebbf84.js";import"./base64Conver.08b9f4ec.js";import"./index.2f9433fa.js";import"./cropper.bcc4a72c.js";import"./index.9ada290f.js";import"./uniqBy.5ad5c6ba.js";import"./index.95d1c561.js";import"./index.791c2c4d.js";import"./index.89afecb9.js";import"./useDescription.f5552a0a.js";const Mt=T({__name:"index",setup(_){const m=w([]),i=w([]);S(()=>h(this,null,function*(){m.value=yield D({dictCode:"sys_log_status"}),i.value=yield D({dictCode:"sys_user_platform"})}));const[u]=E({title:"\u64CD\u4F5C\u65E5\u5FD7\u5217\u8868",api:O,rowKey:"id",columns:P,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:V,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:sysLog:view"],width:50,title:"\u64CD\u4F5C",dataIndex:"action"}}),[p,{openDrawer:l}]=L();function c(s){l(!0,{record:s})}return(s,o)=>(a(),C("div",null,[b(r(x),{onRegister:r(u)},{bodyCell:f(({column:e,record:t})=>[e.key==="logStatus"?(a(),g(r(B),{key:0,color:t.logStatus==="0"?"processing":"error"},{default:f(()=>[y(d(r(k)(m.value,t.logStatus)),1)]),_:2},1032,["color"])):n("",!0),e.key==="userPlatform"?(a(),g(r(B),{key:1,color:t.userPlatform==="WEB"?"processing":"error"},{default:f(()=>[y(d(r(k)(i.value,t.userPlatform)),1)]),_:2},1032,["color"])):n("",!0),e.key==="requsetTime"?(a(),C(v,{key:2},[y(d(t.requsetTime&&(t==null?void 0:t.requsetTime)+"ms"),1)],64)):n("",!0),e.key==="action"?(a(),g(r(F),{key:3,actions:[{auth:"system:sysLog:view",icon:"ant-design:eye-twotone",tooltip:"\u67E5\u770B",onClick:c.bind(null,t)}]},null,8,["actions"])):n("",!0)]),_:1},8,["onRegister"]),b(I,{onRegister:r(p)},null,8,["onRegister"])]))}});export{Mt as default};
