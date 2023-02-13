import{B as h}from"./TableImg.19bd1df3.js";import{j as C}from"./BasicForm.23326f3b.js";import{u as g}from"./useTable.39e6d3ba.js";import{a as _}from"./system.f3fe7d33.js";import{b as T}from"./index.e55212df.js";import{D as B,c as k,s as D}from"./DeptModal.eb0d11f6.js";import{ay as E,a as M,aA as e,o as d,h as y,n as a,z as m,B as S,j as A,k as R}from"./index.01016e1b.js";import"./index.261e1402.js";import"./Checkbox.0393c1df.js";import"./index.59b7c00c.js";import"./index.703a23e2.js";import"./eagerComputed.19683db9.js";import"./useForm.5283242d.js";import"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";import"./index.b4367855.js";import"./index.be501b20.js";import"./index.ad15f2c8.js";import"./uuid.2b29000c.js";import"./index.b8bb4c84.js";import"./_baseIteratee.c73c9502.js";import"./get.1a35d26d.js";import"./DeleteOutlined.60895bb2.js";import"./index.d1bfa846.js";import"./useRefs.b8e07b47.js";import"./Form.45f609aa.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";import"./index.44e8fa84.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.efe9779a.js";import"./FullscreenOutlined.969211bf.js";import"./index.b6126e6e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0cc164ce.js";import"./index.d5369391.js";/* empty css              *//* empty css               */import"./index.499a6f59.js";import"./index.3205f76b.js";import"./index.bb233b92.js";import"./download.e8ebbf84.js";import"./base64Conver.08b9f4ec.js";import"./index.2f9433fa.js";import"./cropper.bcc4a72c.js";import"./index.9ada290f.js";import"./uniqBy.5ad5c6ba.js";const v=M({name:"DeptManagement",components:{BasicTable:h,DeptModal:B,TableAction:C},setup(){const[o,{openModal:i}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:k,formConfig:{labelWidth:120,schemas:D},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function r(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:r,handleSuccess:n}}});function w(o,i,p,s,l,c){const r=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),y("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(r,{type:"primary",onClick:o.handleCreate},{default:m(()=>[S(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),bodyCell:m(({column:b,record:u})=>[b.key==="action"?(d(),A(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Fo=E(v,[["render",w]]);export{Fo as default};
