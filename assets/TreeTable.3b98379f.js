import{B as l}from"./TableImg.a6725d76.js";import"./BasicForm.1636ebdd.js";import{u as n}from"./useTable.0df0234c.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.38d0f3c2.js";import{ay as _,a as b,aA as a,o as f,h as C,n as t,z as r,B as s}from"./index.b74cf1bc.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./useForm.454b56eb.js";import"./index.94d6a8fb.js";import"./index.3c1ff6fb.js";import"./index.cb3d1a7e.js";import"./useSize.6193d609.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.b833bb1c.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.ea1d2165.js";import"./uuid.2b29000c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./get.ef800ccd.js";import"./DeleteOutlined.58479ebe.js";import"./index.9f1863b7.js";import"./useRefs.3b949e72.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./index.8d73dc63.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.76f0947d.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5e7d45ad.js";import"./index.8ef9877f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.2cba7252.js";import"./index.2cc6874f.js";/* empty css              *//* empty css               */import"./index.6fc50966.js";import"./index.78b5d5cb.js";import"./index.91d33a28.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./index.be7c702f.js";import"./uniqBy.7a457808.js";const T=b({components:{BasicTable:l},setup(){const[o,{expandAll:e,collapseAll:i}]=n({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"};function g(o,e,i,p,k,E){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[s("\u5C55\u5F00\u5168\u90E8")]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[s("\u6298\u53E0\u5168\u90E8")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Eo=_(T,[["render",g]]);export{Eo as default};