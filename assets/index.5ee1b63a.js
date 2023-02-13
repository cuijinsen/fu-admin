import{B as b}from"./TableImg.93e6d55e.js";import{j as C}from"./BasicForm.05ee908a.js";import{u as g}from"./useTable.6336253d.js";import{d as T}from"./system.010099c6.js";import{u as D}from"./index.4d10e6e7.js";import{M as _,c as w,s as S}from"./MenuDrawer.f32e8940.js";import{ay as k,a as B,aA as t,o as h,h as F,n as m,z as p,B as y,j as M,k as A,an as E}from"./index.67a988db.js";import"./index.475977fd.js";import"./Checkbox.46a1d435.js";import"./index.510f4eba.js";import"./index.848e1eef.js";import"./eagerComputed.841da0b8.js";import"./useForm.f8fae255.js";import"./index.8b70e5a3.js";import"./index.66e9e120.js";import"./index.253e4730.js";import"./useSize.1222867c.js";import"./useWindowSizeFn.4d53064e.js";import"./useContentViewHeight.97060834.js";import"./ArrowLeftOutlined.7c433682.js";import"./index.5b15cd76.js";import"./index.a722cbfd.js";import"./index.f3227c85.js";import"./index.c9944a8c.js";import"./uuid.2b29000c.js";import"./index.3f00b8d1.js";import"./_baseIteratee.3527c98a.js";import"./get.87514043.js";import"./DeleteOutlined.cf817082.js";import"./index.0280075c.js";import"./useRefs.ac08b2f5.js";import"./Form.ab29d6a8.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./index.f1863477.js";import"./FullscreenOutlined.a71f1151.js";import"./index.c763c491.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b0ed5806.js";import"./index.8fb4702c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a82af03e.js";import"./index.d60ca517.js";/* empty css              *//* empty css               */import"./index.64075906.js";import"./index.95a0a2ac.js";import"./index.ff6c01e4.js";import"./download.cb83b819.js";import"./base64Conver.08b9f4ec.js";import"./index.7034e6c7.js";import"./cropper.bcc4a72c.js";import"./index.56a49b73.js";import"./uniqBy.be172303.js";import"./index.21b0e032.js";const R=B({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:_,TableAction:C},setup(){const[e,{openDrawer:r}]=D(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:w,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function s(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:s}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[m(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[m(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),m(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var $e=k(R,[["render",v]]);export{$e as default};
