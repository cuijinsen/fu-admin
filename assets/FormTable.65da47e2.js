import{B as d}from"./TableImg.85d93572.js";import"./BasicForm.d8c9eebf.js";import{u as h}from"./useTable.36fa029c.js";import{getBasicColumns as F,getFormConfig as k}from"./tableData.38d0f3c2.js";import{ay as y,a as B,v as C,aA as i,o as m,j as b,z as e,B as p,n as s,h as c,F as _,m as A,t as E}from"./index.437c4479.js";import{A as T}from"./index.637cef53.js";import{d as S}from"./table.89385274.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./useForm.468df0fb.js";import"./index.d73ca278.js";import"./index.3aa321be.js";import"./index.51f3da4c.js";import"./useSize.20fe1af9.js";import"./useWindowSizeFn.19d582eb.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./index.11505f04.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.4dfcb51c.js";import"./uuid.2b29000c.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./get.1b284c6a.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./index.d115f57c.js";import"./FullscreenOutlined.01c6694a.js";import"./index.f52f7562.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c484a87a.js";import"./index.ac415180.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ee088757.js";import"./index.07f5517b.js";/* empty css              *//* empty css               */import"./index.1b5fb899.js";import"./index.db2dd425.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";const D=B({components:{BasicTable:d,AAlert:T},setup(){const o=C([]),[t,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:F(),useSearchForm:!0,formConfig:k(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:t,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w={key:1};function K(o,t,n,a,u,r){const l=i("a-button"),f=i("a-alert"),g=i("BasicTable");return m(),b(g,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":e(()=>[p(" custom-slot ")]),headerTop:e(()=>[s(f,{type:"info","show-icon":""},{message:e(()=>[o.checkedKeys.length>0?(m(),c(_,{key:0},[A("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:t[0]||(t[0]=V=>o.checkedKeys=[]),size:"small"},{default:e(()=>[p("\u6E05\u7A7A")]),_:1})],64)):(m(),c("span",w,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:e(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:e(()=>[p("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var vo=y(D,[["render",K]]);export{vo as default};
