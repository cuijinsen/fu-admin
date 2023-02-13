import{B as d}from"./TableImg.19bd1df3.js";import{j as F}from"./BasicForm.23326f3b.js";import{u as B}from"./useTable.39e6d3ba.js";import{P as C}from"./index.5eaa6961.js";import{getBasicColumns as f}from"./tableData.38d0f3c2.js";import{d as b}from"./table.4b39d8f7.js";import{ay as E,a as g,aA as i,o as a,j as m,z as r,n as _,m as T,t as A,k as D}from"./index.01016e1b.js";import"./index.261e1402.js";import"./Checkbox.0393c1df.js";import"./index.59b7c00c.js";import"./index.703a23e2.js";import"./eagerComputed.19683db9.js";import"./useForm.5283242d.js";import"./index.b4367855.js";import"./index.be501b20.js";import"./index.ad15f2c8.js";import"./uuid.2b29000c.js";import"./index.b8bb4c84.js";import"./_baseIteratee.c73c9502.js";import"./get.1a35d26d.js";import"./DeleteOutlined.60895bb2.js";import"./index.d1bfa846.js";import"./useRefs.b8e07b47.js";import"./Form.45f609aa.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";import"./useSize.368ff12a.js";import"./useWindowSizeFn.5f64a474.js";import"./index.e55212df.js";import"./FullscreenOutlined.969211bf.js";import"./index.44e8fa84.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.efe9779a.js";import"./index.b6126e6e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0cc164ce.js";import"./index.d5369391.js";/* empty css              *//* empty css               */import"./index.499a6f59.js";import"./index.3205f76b.js";import"./index.bb233b92.js";import"./download.e8ebbf84.js";import"./base64Conver.08b9f4ec.js";import"./index.2f9433fa.js";import"./cropper.bcc4a72c.js";import"./index.460eb416.js";import"./index.b66e8182.js";import"./index.9ada290f.js";import"./uniqBy.5ad5c6ba.js";import"./index.cefdbd36.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";const k=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function p(t){}function n(t){}return{registerTable:o,handleDelete:p,handleOpen:n}}});function w(o,p,n,t,y,h){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:r(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:r(({record:e})=>[T("span",null,"No: "+A(e.no),1)]),bodyCell:r(({column:e,record:u})=>[e.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1})}var xo=E(k,[["render",w]]);export{xo as default};
