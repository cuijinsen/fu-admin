var e=(e,s,t)=>new Promise(((o,i)=>{var n=e=>{try{a(t.next(e))}catch(s){i(s)}},r=e=>{try{a(t.throw(e))}catch(s){i(s)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,r);a((t=t.apply(e,s)).next())}));import{a as s,s as t,bs as o,aF as i,bT as n,o as r,f as a,m as d,y as l,w as p,i as c,z as m,h as u,t as f,f6 as j,j as y,E as b}from"./index-d32d699d.js";import{T as x}from"./index-280a19eb.js";import{u as g,B as _}from"./useTable-ba3fb261.js";import{T as h}from"./useForm-39f6e704.js";import{u as R}from"./index-b361c612.js";import{c as v,s as C,_ as w}from"./FormModal.vue_vue_type_script_setup_true_lang-285a7901.js";import{_ as S}from"./FormModalAssignMenu.vue_vue_type_script_setup_true_lang-d332b1a5.js";import{f as k,r as F,c as I}from"./sysRoleApi-b6b41faf.js";import{s as M}from"./index-2e5c6a76.js";import{a as O}from"./download-29600a9b.js";import"./index-428eee78.js";import"./eagerComputed-b16e681c.js";import"./css-49036a2d.js";import"./fromPairs-c5e23fef.js";import"./iconUtil-b885d1ac.js";import"./index-22735145.js";import"./index-e84e313c.js";import"./createForOfIteratorHelper-19a6e609.js";import"./index-da1a1de3.js";import"./index-64da741e.js";import"./scrollTo-7d931d9a.js";import"./index-ceb1e509.js";import"./index-e9d5eda1.js";import"./index-2887dac0.js";import"./useSize-e28be3fa.js";import"./useWindowSizeFn-6acabc85.js";import"./useContentViewHeight-295eef1a.js";import"./ArrowLeftOutlined-f42bc447.js";import"./index-9c0d62a6.js";import"./transButton-c20bc4d9.js";import"./index-706c8391.js";import"./index-bf8f159c.js";import"./index-ee500efb.js";import"./get-8e454bdf.js";import"./index-b4d18824.js";import"./sortable.esm-871e648d.js";import"./RedoOutlined-481f10d7.js";import"./FullscreenOutlined-091fbcf5.js";import"./index-a72363e5.js";import"./index-f7867750.js";import"./index-6cd0fcd2.js";import"./index-06c8a48f.js";import"./index-cd646f4b.js";import"./_baseIteratee-b178d67d.js";import"./index-fe305bf5.js";import"./index-476a8598.js";import"./useRefs-b0536d84.js";import"./index-406c2228.js";import"./index-8e2feec8.js";import"./uniqBy-19fec0f2.js";import"./index-5d4f29a6.js";import"./sysDeptApi-2c1e26d4.js";import"./sysMenuApi-b7b39e4b.js";const T=s({__name:"index",setup(s){const T=t([]),A=t([]);o((()=>e(this,null,(function*(){T.value=yield M({dictCode:"sys_status"}),A.value=yield M({dictCode:"sys_data_scope"})}))));const{createMessage:B,createConfirm:U}=b(),[P,{openModal:z}]=R(),[E,{openModal:H}]=R(),[V,{reload:W,getForm:q}]=g({title:"角色列表 ",api:k,rowKey:"id",columns:v,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:C,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:sysRole:assignMenu","system:sysRole:updateSysRole","system:sysRole:removeSysRole"],width:120,title:"操作",dataIndex:"action"}});function D(){z(!0,{isUpdate:!1})}function K(e){z(!0,{record:e,isUpdate:!0})}function L(s){return e(this,null,(function*(){yield F({ids:s.id}),B.success("删除成功！"),yield W()}))}function G(){return e(this,null,(function*(){U({iconType:"warning",title:"提示",content:"确认导出？",onOk:()=>e(this,null,(function*(){const e=q().getFieldsValue(),s=yield I(e),t=s.data,o=s.headers["content-disposition"].split(";")[1].split("=")[1],i=decodeURIComponent(escape(o));O(t,i)}))})}))}function J(s){return e(this,arguments,(function*({isUpdate:e,values:s}){yield W()}))}function N(e){H(!0,{record:e})}return(e,s)=>{const t=i("a-button"),o=n("auth");return r(),a("div",null,[d(u(_),{onRegister:u(V)},{toolbar:l((()=>[p((r(),c(t,{type:"primary",onClick:D,preIcon:"ant-design:plus-outlined"},{default:l((()=>[m("新增")])),_:1})),[[o,["system:sysRole:addSysRole"]]]),p((r(),c(t,{color:"warning",onClick:G,preIcon:"ant-design:download-outlined"},{default:l((()=>[m("导出")])),_:1})),[[o,["system:sysRole:exportSysRole"]]])])),bodyCell:l((({column:e,record:s})=>["dataScope"===e.key?(r(),c(u(x),{key:0,color:"processing"},{default:l((()=>[m(f(u(j)(A.value,s.dataScope)),1)])),_:2},1024)):y("",!0),"status"===e.key?(r(),c(u(x),{key:1,color:"0"===s.status?"processing":"error"},{default:l((()=>[m(f(u(j)(T.value,s.status)),1)])),_:2},1032,["color"])):y("",!0),"action"===e.key?(r(),c(u(h),{key:2,actions:[{auth:["system:sysRole:assignMenu"],icon:"ant-design:setting-outlined",tooltip:"分配菜单",onClick:N.bind(null,s)},{auth:["system:sysRole:updateSysRole"],icon:"clarity:note-edit-line",tooltip:"编辑",onClick:K.bind(null,s)},{auth:["system:sysRole:removeSysRole"],icon:"ant-design:delete-outlined",tooltip:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:L.bind(null,s)}}]},null,8,["actions"])):y("",!0)])),_:1},8,["onRegister"]),d(w,{onRegister:u(P),onSuccess:J},null,8,["onRegister"]),d(S,{onRegister:u(E)},null,8,["onRegister"])])}}});export{T as default};