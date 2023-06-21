var t=(t,e,s)=>new Promise(((n,o)=>{var i=t=>{try{c(s.next(t))}catch(e){o(e)}},a=t=>{try{c(s.throw(t))}catch(e){o(e)}},c=t=>t.done?n(t.value):Promise.resolve(t.value).then(i,a);c((s=s.apply(t,e)).next())}));import{a as e,s,bs as n,aF as o,bT as i,o as a,f as c,m as r,y as l,w as u,i as d,z as m,h as y,t as p,f6 as f,j as h,E as g}from"./index-d32d699d.js";import{T as b}from"./index-280a19eb.js";import{u as w,B as C}from"./useTable-ba3fb261.js";import{T as S}from"./useForm-39f6e704.js";import{u as _}from"./index-b361c612.js";import{f as D,c as v,s as k,_ as x,r as j,e as I,a as R}from"./FormModal.vue_vue_type_script_setup_true_lang-282bd5ba.js";import{s as F}from"./index-2e5c6a76.js";import{a as T}from"./download-29600a9b.js";const O=e({__name:"index",emits:["dict-change"],setup(e,{emit:O}){const U=s([]);n((()=>t(this,null,(function*(){U.value=yield F({dictCode:"sys_status"})}))));const{createMessage:B,createConfirm:K}=g(),[M,{openModal:P}]=_(),[E,{reload:z,getForm:V,getDataSource:W,getSelectRowKeys:q,setSelectedRowKeys:A}]=w({title:"字典列表",api:D,rowKey:"id",columns:v,rowSelection:{type:"radio"},formConfig:{baseColProps:{sm:24,lg:12},labelWidth:90,schemas:k,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["system:sysDict:updateSysDict","system:sysDict:removeSysDict"],width:80,title:"操作",dataIndex:"action"},afterFetch:function(t){t.length>0?A([t[0].id]):A([]);Z()}});function G(){P(!0,{isUpdate:!1})}function H(t){P(!0,{record:t,isUpdate:!0})}function J(e){return t(this,null,(function*(){yield j({ids:e.id}),B.success("删除成功！"),yield z();const t=W();t.length>0?A([t[0].id]):A([]),Z()}))}function L(){return t(this,null,(function*(){K({iconType:"warning",title:"提示",content:"确认导出？",onOk:()=>t(this,null,(function*(){const t=V().getFieldsValue(),e=yield I(t),s=e.data,n=e.headers["content-disposition"].split(";")[1].split("=")[1],o=decodeURIComponent(escape(n));T(s,o)}))})}))}function N(){return t(this,null,(function*(){K({iconType:"warning",title:"提示",content:"确认刷新所有数据字典缓存？",onOk:()=>t(this,null,(function*(){yield R(),B.success("刷新成功！")}))})}))}function Q(e){return t(this,arguments,(function*({isUpdate:t,values:e}){if(yield z(),t)A([e.id]);else{const t=W();t.length>0?A([t[0].id]):A([])}Z()}))}function X(t){A([t.id]),Z()}function Y({keys:t,rows:e}){Z()}function Z(){const t=q();O("dict-change",t.length>0?t[0]:"")}return(t,e)=>{const s=o("a-button"),n=i("auth");return a(),c("div",null,[r(y(C),{onRegister:y(E),onSelectionChange:Y,onRowClick:X},{toolbar:l((()=>[u((a(),d(s,{type:"primary",onClick:G,preIcon:"ant-design:plus-outlined"},{default:l((()=>[m("新增")])),_:1})),[[n,["system:sysDict:addSysDict"]]]),u((a(),d(s,{color:"warning",onClick:L,preIcon:"ant-design:download-outlined"},{default:l((()=>[m("导出")])),_:1})),[[n,["system:sysDict:exportSysDict"]]]),u((a(),d(s,{color:"success",onClick:N,preIcon:"ant-design:redo-outlined"},{default:l((()=>[m("刷新缓存")])),_:1})),[[n,["system:sysDict:refreshSysDictCache"]]])])),bodyCell:l((({column:t,record:e})=>["status"===t.key?(a(),d(y(b),{key:0,color:"0"===e.status?"processing":"error"},{default:l((()=>[m(p(y(f)(U.value,e.status)),1)])),_:2},1032,["color"])):h("",!0),"action"===t.key?(a(),d(y(S),{key:1,actions:[{auth:["system:sysDict:updateSysDict"],icon:"clarity:note-edit-line",tooltip:"编辑",onClick:H.bind(null,e)},{auth:["system:sysDict:removeSysDict"],icon:"ant-design:delete-outlined",tooltip:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:J.bind(null,e)}}]},null,8,["actions"])):h("",!0)])),_:1},8,["onRegister"]),r(x,{onRegister:y(M),onSuccess:Q},null,8,["onRegister"])])}}});export{O as _};
