import{B as g,T as _}from"./TableImg.7860a006.js";import"./BasicForm.1111a937.js";import{u as E}from"./useTable.5f72d90a.js";import{ay as T,a as k,aA as r,o as t,h as l,n as y,z as a,F as A,B as m,t as p,j as i,k as B}from"./index.7f67491a.js";import{T as C}from"./index.c7d3ad48.js";import{A as f}from"./index.2d5e9d07.js";import{d as I}from"./table.3377a3f0.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./useForm.e97ebf24.js";import"./index.c5711bd7.js";import"./index.f7e77d68.js";import"./useWindowSizeFn.8bbcad12.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";import"./index.a6d90cc9.js";import"./useSize.95a68d73.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./uuid.2b29000c.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./get.c67596ea.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./index.296b7df0.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.a655c1dc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./index.e1e5d99d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";/* empty css              *//* empty css               */import"./index.531e8692.js";import"./index.04a8cbbf.js";import"./index.3022938f.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";const b=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],x=k({components:{BasicTable:g,TableImg:_,Tag:C,Avatar:f},setup(){const[u]=E({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:I,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),h={class:"p-4"};function D(u,v,w,L,z,$){const s=r("Tag"),c=r("Avatar"),n=r("TableImg"),F=r("BasicTable");return t(),l("div",h,[y(F,{onRegister:u.registerTable},{bodyCell:a(({column:e,record:o,text:d})=>[e.key==="id"?(t(),l(A,{key:0},[m(" ID: "+p(o.id),1)],64)):e.key==="no"?(t(),i(s,{key:1,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):e.key==="avatar"?(t(),i(c,{key:2,size:60,src:o.avatar},null,8,["src"])):e.key==="imgArr"?(t(),i(n,{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):e.key==="imgs"?(t(),i(n,{key:4,size:60,imgList:d},null,8,["imgList"])):e.key==="category"?(t(),i(s,{key:5,color:"green"},{default:a(()=>[m(p(o.no),1)]),_:2},1024)):B("",!0)]),_:1},8,["onRegister"])])}var zt=T(x,[["render",D]]);export{zt as default};