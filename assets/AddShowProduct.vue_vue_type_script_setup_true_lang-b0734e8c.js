var e=(e,t,i)=>new Promise(((r,s)=>{var o=e=>{try{a(i.next(e))}catch(t){s(t)}},d=e=>{try{a(i.throw(e))}catch(t){s(t)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,d);a((i=i.apply(e,t)).next())}));import{b as t,B as i}from"./index-b361c612.js";import{a as r,s,v as o,aF as d,o as a,f as n,m as l,y as c,aG as u,h as f,E as m}from"./index-d32d699d.js";import{s as h,i as g}from"./productApi-29a579d7.js";import{I as p}from"./index-a72363e5.js";const v=r({__name:"AddShowProduct",emits:["success","register"],setup(r,{emit:v}){const x=s(!1),y=s(),{createMessage:w}=m(),[b,{setModalProps:k,closeModal:_}]=t((t=>e(this,null,(function*(){k({confirmLoading:!1}),y.value=t.record.deptId})))),C=s(),j=o({border:!0,keepSource:!0,height:"500",columnConfig:{resizable:!0},rowConfig:{keyField:"id",height:120},checkboxConfig:{reserve:!0},showOverflow:!0,showHeaderOverflow:!0,align:"center",proxyConfig:{seq:!0,ajax:{query:({})=>h({deptId:y.value})}},columns:[{type:"checkbox"},{type:"seq",minWidth:60,title:"序号"},{title:"id",field:"id",minWidth:100},{title:"商品名称",field:"productName",minWidth:100},{title:"商品图片",field:"imgAddr",minWidth:100,slots:{default:"img_default"}}]});function I(){return e(this,null,(function*(){try{const e=C.value;if(!e)return;if(!e.getCheckboxRecords().length)return w.error("请选择商品！");k({confirmLoading:!0}),yield g({ids:e.getCheckboxRecords().map((e=>e.id)),deptId:y.value}),w.success("新增成功！"),_(),v("success",{isUpdate:f(x),values:{deptId:y.value}})}finally{k({confirmLoading:!1})}}))}return(e,t)=>{const r=d("vxe-grid");return a(),n("div",null,[l(f(i),u({title:"添加展示商品",destroyOnClose:""},e.$attrs,{width:"1000px",onOk:I,onRegister:f(b)}),{default:c((()=>[l(r,u({ref_key:"xGrid",ref:C},j),{img_default:c((({row:e})=>[l(f(p),{src:e.imgAddr,height:"50",width:"50"},null,8,["src"])])),_:1},16)])),_:1},16,["onRegister"])])}}});export{v as _};