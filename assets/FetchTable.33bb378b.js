import{B as l}from"./TableImg.7860a006.js";import"./BasicForm.1111a937.js";import{u as c}from"./useTable.5f72d90a.js";import{getBasicColumns as d}from"./tableData.38d0f3c2.js";import{P as f}from"./index.c5711bd7.js";import{d as _}from"./table.3377a3f0.js";import{ay as g,a as B,aA as e,o as C,j as b,z as t,n as i,B as n}from"./index.7f67491a.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./useForm.e97ebf24.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.c7d3ad48.js";import"./uuid.2b29000c.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./get.c67596ea.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./useSize.95a68d73.js";import"./useWindowSizeFn.8bbcad12.js";import"./index.296b7df0.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.a655c1dc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./index.e1e5d99d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";/* empty css              *//* empty css               */import"./index.531e8692.js";import"./index.04a8cbbf.js";import"./index.3022938f.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.2d5e9d07.js";import"./index.a6d90cc9.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./index.f7e77d68.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";const h=B({components:{BasicTable:l,PageWrapper:f},setup(){const[o,{reload:r}]=c({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:_,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}});function T(o,r,p,m,k,F){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),b(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[n(" \u5237\u65B0\u5F53\u524D\u9875 ")]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Ro=g(h,[["render",T]]);export{Ro as default};