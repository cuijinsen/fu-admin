import{B as l}from"./TableImg.85d93572.js";import{j as s}from"./BasicForm.d8c9eebf.js";import{u as d}from"./useTable.36fa029c.js";import{d as c}from"./table.89385274.js";import{ay as F,a as b,aA as n,o as m,h as f,n as h,z as B,j as A,k as C}from"./index.437c4479.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./useForm.468df0fb.js";import"./index.d73ca278.js";import"./index.3aa321be.js";import"./index.51f3da4c.js";import"./useSize.20fe1af9.js";import"./useWindowSizeFn.19d582eb.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./index.11505f04.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.4dfcb51c.js";import"./uuid.2b29000c.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./get.1b284c6a.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./index.d115f57c.js";import"./FullscreenOutlined.01c6694a.js";import"./index.f52f7562.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c484a87a.js";import"./index.ac415180.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ee088757.js";import"./index.07f5517b.js";/* empty css              *//* empty css               */import"./index.1b5fb899.js";import"./index.db2dd425.js";import"./index.637cef53.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),w={class:"p-4"};function x(t,i,e,o,D,I){const p=n("TableAction"),a=n("BasicTable");return m(),f("div",w,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(m(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Dt=F(_,[["render",x]]);export{Dt as default};