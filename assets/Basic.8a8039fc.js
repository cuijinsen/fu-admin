import{B}from"./TableImg.19bd1df3.js";import"./BasicForm.23326f3b.js";import{getBasicColumns as v,getBasicData as b}from"./tableData.38d0f3c2.js";import{ay as h,a as A,v as e,aA as c,o as E,h as k,n as i,z as r,B as u,t as l}from"./index.01016e1b.js";import"./index.261e1402.js";import"./Checkbox.0393c1df.js";import"./index.59b7c00c.js";import"./index.703a23e2.js";import"./eagerComputed.19683db9.js";import"./useForm.5283242d.js";import"./index.5eaa6961.js";import"./index.cefdbd36.js";import"./index.460eb416.js";import"./useSize.368ff12a.js";import"./useWindowSizeFn.5f64a474.js";import"./useContentViewHeight.9f4adb83.js";import"./ArrowLeftOutlined.65423a20.js";import"./index.b66e8182.js";import"./index.b4367855.js";import"./index.be501b20.js";import"./index.ad15f2c8.js";import"./uuid.2b29000c.js";import"./index.b8bb4c84.js";import"./_baseIteratee.c73c9502.js";import"./get.1a35d26d.js";import"./DeleteOutlined.60895bb2.js";import"./index.d1bfa846.js";import"./useRefs.b8e07b47.js";import"./Form.45f609aa.js";import"./Col.d5380690.js";import"./useFlexGapSupport.0520fe90.js";import"./index.e55212df.js";import"./FullscreenOutlined.969211bf.js";import"./index.44e8fa84.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.efe9779a.js";import"./index.b6126e6e.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0cc164ce.js";import"./index.d5369391.js";/* empty css              *//* empty css               */import"./index.499a6f59.js";import"./index.3205f76b.js";import"./index.bb233b92.js";import"./download.e8ebbf84.js";import"./base64Conver.08b9f4ec.js";import"./index.2f9433fa.js";import"./cropper.bcc4a72c.js";import"./index.9ada290f.js";import"./uniqBy.5ad5c6ba.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:v(),data:b(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"};function F(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[u(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var zo=h(y,[["render",F]]);export{zo as default};
