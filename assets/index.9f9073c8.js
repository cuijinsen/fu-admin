var h=(_,m,i)=>new Promise((u,p)=>{var l=o=>{try{s(i.next(o))}catch(e){p(e)}},c=o=>{try{s(i.throw(o))}catch(e){p(e)}},s=o=>o.done?u(o.value):Promise.resolve(o.value).then(l,c);s((i=i.apply(_,m)).next())});import{a as T,v as w,br as S,o as a,h as C,n as b,z as f,j as g,i as r,B as y,t as d,fB as k,k as n,F as v}from"./index.437c4479.js";import{T as B}from"./index.4dfcb51c.js";import{B as x}from"./TableImg.85d93572.js";import{j as F}from"./BasicForm.d8c9eebf.js";import{u as E}from"./useTable.36fa029c.js";import{u as L}from"./index.02eb7cfa.js";import{f as O,c as P,s as V,_ as I}from"./DescDrawer.e34ff7bf.js";import{s as D}from"./index.16117ce1.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./useForm.468df0fb.js";import"./index.d73ca278.js";import"./index.3aa321be.js";import"./index.51f3da4c.js";import"./useSize.20fe1af9.js";import"./useWindowSizeFn.19d582eb.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./index.11505f04.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./uuid.2b29000c.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./get.1b284c6a.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./index.d115f57c.js";import"./FullscreenOutlined.01c6694a.js";import"./index.f52f7562.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c484a87a.js";import"./index.ac415180.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ee088757.js";import"./index.07f5517b.js";/* empty css              *//* empty css               */import"./index.1b5fb899.js";import"./index.db2dd425.js";import"./index.637cef53.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";import"./index.db6a278a.js";import"./index.96902fe6.js";import"./index.937da716.js";import"./useDescription.45bc334b.js";const Mt=T({__name:"index",setup(_){const m=w([]),i=w([]);S(()=>h(this,null,function*(){m.value=yield D({dictCode:"sys_log_status"}),i.value=yield D({dictCode:"sys_user_platform"})}));const[u]=E({title:"\u64CD\u4F5C\u65E5\u5FD7\u5217\u8868",api:O,rowKey:"id",columns:P,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:V,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:sysLog:view"],width:50,title:"\u64CD\u4F5C",dataIndex:"action"}}),[p,{openDrawer:l}]=L();function c(s){l(!0,{record:s})}return(s,o)=>(a(),C("div",null,[b(r(x),{onRegister:r(u)},{bodyCell:f(({column:e,record:t})=>[e.key==="logStatus"?(a(),g(r(B),{key:0,color:t.logStatus==="0"?"processing":"error"},{default:f(()=>[y(d(r(k)(m.value,t.logStatus)),1)]),_:2},1032,["color"])):n("",!0),e.key==="userPlatform"?(a(),g(r(B),{key:1,color:t.userPlatform==="WEB"?"processing":"error"},{default:f(()=>[y(d(r(k)(i.value,t.userPlatform)),1)]),_:2},1032,["color"])):n("",!0),e.key==="requsetTime"?(a(),C(v,{key:2},[y(d(t.requsetTime&&(t==null?void 0:t.requsetTime)+"ms"),1)],64)):n("",!0),e.key==="action"?(a(),g(r(F),{key:3,actions:[{auth:"system:sysLog:view",icon:"ant-design:eye-twotone",tooltip:"\u67E5\u770B",onClick:c.bind(null,t)}]},null,8,["actions"])):n("",!0)]),_:1},8,["onRegister"]),b(I,{onRegister:r(p)},null,8,["onRegister"])]))}});export{Mt as default};
