import{B}from"./TableImg.a6725d76.js";import"./BasicForm.1636ebdd.js";import{getBasicColumns as v,getBasicData as b}from"./tableData.38d0f3c2.js";import{ay as h,a as A,v as e,aA as c,o as E,h as k,n as i,z as r,B as u,t as l}from"./index.b74cf1bc.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./useForm.454b56eb.js";import"./index.94d6a8fb.js";import"./index.3c1ff6fb.js";import"./index.cb3d1a7e.js";import"./useSize.6193d609.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.b833bb1c.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.ea1d2165.js";import"./uuid.2b29000c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./get.ef800ccd.js";import"./DeleteOutlined.58479ebe.js";import"./index.9f1863b7.js";import"./useRefs.3b949e72.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./index.8d73dc63.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.76f0947d.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5e7d45ad.js";import"./index.8ef9877f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.2cba7252.js";import"./index.2cc6874f.js";/* empty css              *//* empty css               */import"./index.6fc50966.js";import"./index.78b5d5cb.js";import"./index.91d33a28.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./index.be7c702f.js";import"./uniqBy.7a457808.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:v(),data:b(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"};function F(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[u(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var zo=h(y,[["render",F]]);export{zo as default};
