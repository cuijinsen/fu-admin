import{B as l}from"./TableImg.85d93572.js";import"./BasicForm.d8c9eebf.js";import{u as c}from"./useTable.36fa029c.js";import{getBasicColumns as d}from"./tableData.38d0f3c2.js";import{P as f}from"./index.d73ca278.js";import{d as _}from"./table.89385274.js";import{ay as g,a as B,aA as e,o as C,j as b,z as t,n as i,B as n}from"./index.437c4479.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./useForm.468df0fb.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.4dfcb51c.js";import"./uuid.2b29000c.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./get.1b284c6a.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./useSize.20fe1af9.js";import"./useWindowSizeFn.19d582eb.js";import"./index.d115f57c.js";import"./FullscreenOutlined.01c6694a.js";import"./index.f52f7562.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c484a87a.js";import"./index.ac415180.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ee088757.js";import"./index.07f5517b.js";/* empty css              *//* empty css               */import"./index.1b5fb899.js";import"./index.db2dd425.js";import"./index.637cef53.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.51f3da4c.js";import"./index.11505f04.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";import"./index.3aa321be.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";const h=B({components:{BasicTable:l,PageWrapper:f},setup(){const[o,{reload:r}]=c({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:_,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}});function T(o,r,p,m,k,F){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),b(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[n(" \u5237\u65B0\u5F53\u524D\u9875 ")]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Ro=g(h,[["render",T]]);export{Ro as default};