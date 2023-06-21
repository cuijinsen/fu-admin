var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&l(e,o,t[o]);if(a)for(var o of a(t))r.call(t,o)&&l(e,o,t[o]);return e},i=(e,a)=>t(e,o(a)),d=(e,t,o)=>new Promise(((a,s)=>{var r=e=>{try{n(o.next(e))}catch(t){s(t)}},l=e=>{try{n(o.throw(e))}catch(t){s(t)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,l);n((o=o.apply(e,t)).next())}));import{b as p,B as c}from"./index-b361c612.js";import{k as m,B as u}from"./useForm-39f6e704.js";import{a as f,e as h,h as y,s as b,o as g,i as v,y as x,m as P,aG as I,E as w}from"./index-d32d699d.js";import{s as O}from"./index-2e5c6a76.js";import{v as j,a as C,e as R}from"./sysPostApi-f832c107.js";const _=[{title:"岗位名称",dataIndex:"postName",width:150,align:"left"},{title:"岗位编码",dataIndex:"postCode",width:150,align:"left"},{title:"排序",dataIndex:"sort",width:90},{title:"状态",dataIndex:"sysStatus",width:80},{title:"备注",dataIndex:"remarks"},{title:"创建时间",dataIndex:"createTime",width:160},{title:"更新时间",dataIndex:"updateTime",width:160}],k=[{field:"postName",label:"岗位名称",component:"Input",componentProps:{placeholder:"请输入岗位名称"}},{field:"postCode",label:"岗位编码",component:"Input",componentProps:{placeholder:"请输入岗位编码"}}],q=[{field:"postName",label:"岗位名称",component:"Input",required:!0,componentProps:{placeholder:"请输入岗位名称",maxlength:100}},{field:"postCode",label:"岗位编码",component:"Input",required:!0,componentProps:{placeholder:"请输入岗位编码",maxlength:100}},{field:"sort",label:"排序",component:"InputNumber",required:!0,defaultValue:"1",componentProps:{placeholder:"请输入排序",min:1}},{field:"sysStatus",label:"状态",component:"ApiRadioGroup",required:!0,componentProps:{api:O,params:{dictCode:"sys_status"}},defaultValue:"0"},{label:"备注",field:"remarks",component:"InputTextArea",componentProps:{placeholder:"请输入备注",maxlength:500}}],A=f({__name:"FormModal",emits:["success","register"],setup(e,{emit:t}){const o=h((()=>y(a)?"编辑岗位":"新增岗位")),a=b(!1),s=b(),{createMessage:r}=w(),[l,{setFieldsValue:f,resetFields:O,validate:_}]=m({labelWidth:100,schemas:q,showActionButtonGroup:!1,actionColOptions:{span:23},baseColProps:{span:24}}),[k,{setModalProps:A,closeModal:F}]=p((e=>d(this,null,(function*(){if(yield O(),A({confirmLoading:!1}),a.value=!!(null==e?void 0:e.isUpdate),y(a)){s.value=e.record.id;const t=yield j({id:e.record.id});yield f(n({},t))}}))));function M(){return d(this,null,(function*(){try{const e=yield _();A({confirmLoading:!0}),y(a)?yield R(i(n({},e),{id:s.value})):yield C(n({},e)),y(a)?r.success("编辑成功！"):r.success("新增成功！"),F(),t("success",{isUpdate:y(a),values:i(n({},e),{id:s.value})})}finally{A({confirmLoading:!1})}}))}return(e,t)=>(g(),v(y(c),I(e.$attrs,{destroyOnClose:"",onRegister:y(k),title:o.value,onOk:M}),{default:x((()=>[P(y(u),{onRegister:y(l)},null,8,["onRegister"])])),_:1},16,["onRegister","title"]))}});export{A as _,_ as c,k as s};
