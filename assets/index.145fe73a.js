import{B as S}from"./TableImg.7860a006.js";import{j as B}from"./BasicForm.1111a937.js";import{u as F}from"./useTable.5f72d90a.js";import{g as w}from"./system.ec43b2cf.js";import{P as A}from"./index.c5711bd7.js";import D from"./DeptTree.11c9ed29.js";import{b as y}from"./index.296b7df0.js";import{A as k,c as I,s as M}from"./AccountModal.533ebea8.js";import{ay as E,a as R,a$ as V,w as $,aA as t,o as C,j as _,z as n,n as r,B as P,k as W}from"./index.7f67491a.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./useForm.e97ebf24.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.c7d3ad48.js";import"./uuid.2b29000c.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./get.c67596ea.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./useSize.95a68d73.js";import"./useWindowSizeFn.8bbcad12.js";import"./index.a655c1dc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.e1e5d99d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";/* empty css              *//* empty css               */import"./index.531e8692.js";import"./index.04a8cbbf.js";import"./index.3022938f.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.2d5e9d07.js";import"./index.a6d90cc9.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./index.f7e77d68.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";import"./index.609a5c7f.js";import"./useContextMenu.a054c63d.js";const N=R({name:"AccountManagement",components:{BasicTable:S,PageWrapper:A,DeptTree:D,AccountModal:k,TableAction:B},setup(){const e=V(),[h,{openModal:i}]=y(),a=$({}),[g,{reload:l,updateTableDataRecord:s}]=F({title:"\u8D26\u53F7\u5217\u8868",api:w,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function p(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function m(o){}function u({isUpdate:o,values:b}){if(o){const T=s(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:p,handleEdit:c,handleDelete:m,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}});function j(e,h,i,a,g,l){const s=t("DeptTree"),p=t("a-button"),c=t("TableAction"),m=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),r(m,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:n(()=>[r(p,{type:"primary",onClick:e.handleCreate},{default:n(()=>[P("\u65B0\u589E\u8D26\u53F7")]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:o})=>[f.key==="action"?(C(),_(c,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),r(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Uo=E(N,[["render",j]]);export{Uo as default};