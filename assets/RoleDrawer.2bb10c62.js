var v=Object.defineProperty;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(e,a,t)=>a in e?v(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,F=(e,a)=>{for(var t in a||(a={}))S.call(a,t)&&g(e,t,a[t]);if(h)for(var t of h(a))C.call(a,t)&&g(e,t,a[t]);return e};var d=(e,a,t)=>new Promise((o,l)=>{var c=u=>{try{n(t.next(u))}catch(s){l(s)}},i=u=>{try{n(t.throw(u))}catch(s){l(s)}},n=u=>u.done?o(u.value):Promise.resolve(u.value).then(c,i);n((t=t.apply(e,a)).next())});import{B as I}from"./BasicForm.1636ebdd.js";import{u as R}from"./useForm.454b56eb.js";import{bU as k,G as y,a as E,v as w,f as P,i as f,ay as T,aA as D,o as N,j as $,z as B,n as b,aB as x}from"./index.b74cf1bc.js";import{S as U}from"./index.c17593cf.js";import{s as V,d as A}from"./system.01e407ee.js";import{B as L,a as M}from"./index.55455f51.js";import{_ as O}from"./index.c7ad7d48.js";const ee=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",width:200},{title:"\u89D2\u8272\u503C",dataIndex:"roleValue",width:180},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),k(U,{checked:e.status==="1",checkedChildren:"\u5DF2\u542F\u7528",unCheckedChildren:"\u5DF2\u7981\u7528",loading:e.pendingStatus,onChange(a){e.pendingStatus=!0;const t=a?"1":"0",{createMessage:o}=y();V(e.id,t).then(()=>{e.status=t,o.success("\u5DF2\u6210\u529F\u4FEE\u6539\u89D2\u8272\u72B6\u6001")}).catch(()=>{o.error("\u4FEE\u6539\u89D2\u8272\u72B6\u6001\u5931\u8D25")}).finally(()=>{e.pendingStatus=!1})}}))},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],te=[{field:"roleNme",label:"\u89D2\u8272\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],j=[{field:"roleName",label:"\u89D2\u8272\u540D\u79F0",required:!0,component:"Input"},{field:"roleValue",label:"\u89D2\u8272\u503C",required:!0,component:"Input"},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]}},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}],G=E({name:"RoleDrawer",components:{BasicDrawer:L,BasicForm:I,BasicTree:O},emits:["success","register"],setup(e,{emit:a}){const t=w(!0),o=w([]),[l,{resetFields:c,setFieldsValue:i,validate:n}]=R({labelWidth:90,baseColProps:{span:24},schemas:j,showActionButtonGroup:!1}),[u,{setDrawerProps:s,closeDrawer:m}]=M(r=>d(this,null,function*(){c(),s({confirmLoading:!1}),f(o).length===0&&(o.value=yield A()),t.value=!!(r!=null&&r.isUpdate),f(t)&&i(F({},r.record))})),p=P(()=>f(t)?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272");function _(){return d(this,null,function*(){try{const r=yield n();s({confirmLoading:!0}),m(),a("success")}finally{s({confirmLoading:!1})}})}return{registerDrawer:u,registerForm:l,getTitle:p,handleSubmit:_,treeData:o}}});function q(e,a,t,o,l,c){const i=D("BasicTree"),n=D("BasicForm"),u=D("BasicDrawer");return N(),$(u,x(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:B(()=>[b(n,{onRegister:e.registerForm},{menu:B(({model:s,field:m})=>[b(i,{value:s[m],"onUpdate:value":p=>s[m]=p,treeData:e.treeData,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"\u83DC\u5355\u5206\u914D"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var z=T(G,[["render",q]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as R,ae as a,ee as c,te as s};
