var k=(h,n,t)=>new Promise((e,p)=>{var f=r=>{try{i(t.next(r))}catch(a){p(a)}},d=r=>{try{i(t.throw(r))}catch(a){p(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,n)).next())});import{dK as x,a as D,v as C,c as T,fu as A,a9 as B,an as R,aj as j,aA as V,o as u,h as _,F as I,aD as S,x as M,y as N,n as s,i as o,z as m,B as y,t as b,j as F,k as $}from"./index.67a988db.js";import z from"./DetailModal.2f13ff90.js";import{B as H}from"./TableImg.93e6d55e.js";import{j as K}from"./BasicForm.05ee908a.js";import{u as q}from"./useTable.6336253d.js";import{b as G}from"./index.f1863477.js";import{getColumns as J}from"./data.0dc58ae3.js";import"./index.165cd237.js";import"./index.5187eb87.js";import"./get.87514043.js";import"./useDescription.467bb03b.js";import"./index.475977fd.js";import"./Checkbox.46a1d435.js";import"./index.510f4eba.js";import"./index.848e1eef.js";import"./eagerComputed.841da0b8.js";import"./useForm.f8fae255.js";import"./index.8b70e5a3.js";import"./index.66e9e120.js";import"./index.253e4730.js";import"./useSize.1222867c.js";import"./useWindowSizeFn.4d53064e.js";import"./useContentViewHeight.97060834.js";import"./ArrowLeftOutlined.7c433682.js";import"./index.5b15cd76.js";import"./index.a722cbfd.js";import"./index.f3227c85.js";import"./index.c9944a8c.js";import"./uuid.2b29000c.js";import"./index.3f00b8d1.js";import"./_baseIteratee.3527c98a.js";import"./DeleteOutlined.cf817082.js";import"./index.0280075c.js";import"./useRefs.ac08b2f5.js";import"./Form.ab29d6a8.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./index.c763c491.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b0ed5806.js";import"./FullscreenOutlined.a71f1151.js";import"./index.8fb4702c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a82af03e.js";import"./index.d60ca517.js";/* empty css              *//* empty css               */import"./index.64075906.js";import"./index.95a0a2ac.js";import"./index.ff6c01e4.js";import"./download.cb83b819.js";import"./base64Conver.08b9f4ec.js";import"./index.7034e6c7.js";import"./cropper.bcc4a72c.js";import"./index.56a49b73.js";import"./uniqBy.be172303.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],Zr=D({__name:"index",setup(h){const n=C(),t=C([]),{t:e}=T(),p=A(),[f,{setTableData:d}]=q({title:e("sys.errorLog.tableTitle"),columns:J(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=G();B(()=>p.getErrorLogInfoList,l=>{R(()=>{d(j(l))})},{immediate:!0});function a(l){n.value=l,r(!0)}function E(){throw new Error("fire vue error!")}function L(){t.value.push(`${new Date().getTime()}.png`)}function v(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=V("a-button");return u(),_("div",P,[(u(!0),_(I,null,S(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),s(z,{info:n.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:m(()=>[s(g,{onClick:E,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),s(g,{onClick:L,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),s(g,{onClick:v,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:m(({column:c,record:w})=>[c.key==="action"?(u(),F(o(K),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,w)}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"])])}}});export{Zr as default};
