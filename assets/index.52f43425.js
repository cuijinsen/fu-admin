import{B as b}from"./TableImg.7860a006.js";import{j as C}from"./BasicForm.1111a937.js";import{u as g}from"./useTable.5f72d90a.js";import{c as _}from"./system.ec43b2cf.js";import{u as D}from"./index.e76ff6f2.js";import{R as w,c as B,s as T}from"./RoleDrawer.12cb3f21.js";import{ay as R,a as k,aA as t,o as d,h as y,n as a,z as m,B as S,j as A,k as E}from"./index.7f67491a.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./useForm.e97ebf24.js";import"./index.c5711bd7.js";import"./index.f7e77d68.js";import"./index.2d5e9d07.js";import"./useSize.95a68d73.js";import"./useWindowSizeFn.8bbcad12.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";import"./index.a6d90cc9.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.c7d3ad48.js";import"./uuid.2b29000c.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./get.c67596ea.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./index.296b7df0.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.a655c1dc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./index.e1e5d99d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";/* empty css              *//* empty css               */import"./index.531e8692.js";import"./index.04a8cbbf.js";import"./index.3022938f.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./index.9871a889.js";import"./index.609a5c7f.js";import"./useContextMenu.a054c63d.js";const v=k({name:"RoleManagement",components:{BasicTable:b,RoleDrawer:w,TableAction:C},setup(){const[o,{openDrawer:r}]=D(),[p,{reload:s}]=g({title:"\u89D2\u8272\u5217\u8868",api:_,columns:B,formConfig:{labelWidth:120,schemas:T},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function i(e){}function n(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}});function F(o,r,p,s,l,c){const i=t("a-button"),n=t("TableAction"),e=t("BasicTable"),f=t("RoleDrawer");return d(),y("div",null,[a(e,{onRegister:o.registerTable},{toolbar:m(()=>[a(i,{type:"primary",onClick:o.handleCreate},{default:m(()=>[S(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),A(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var jo=R(v,[["render",F]]);export{jo as default};