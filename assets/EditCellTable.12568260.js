var p=(t,n,r)=>new Promise((d,a)=>{var m=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(m,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.a6725d76.js";import"./BasicForm.1636ebdd.js";import{u as l}from"./useTable.0df0234c.js";import{o as c,t as F}from"./tree.e14d71a7.js";import{d as C}from"./table.b7172fc1.js";import{ay as f,a as E,aA as b,o as h,h as B,n as D,bU as A,G as _}from"./index.b74cf1bc.js";import{P as w}from"./index.9f1863b7.js";import"./index.3c4b54d0.js";import"./Checkbox.e80d61eb.js";import"./index.35afe08d.js";import"./index.3b1d7b49.js";import"./eagerComputed.05d44b0c.js";import"./useForm.454b56eb.js";import"./index.94d6a8fb.js";import"./index.3c1ff6fb.js";import"./index.cb3d1a7e.js";import"./useSize.6193d609.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.b833bb1c.js";import"./index.5100a9cd.js";import"./index.c17593cf.js";import"./index.ea1d2165.js";import"./uuid.2b29000c.js";import"./index.d20438cb.js";import"./_baseIteratee.b387a4e9.js";import"./get.ef800ccd.js";import"./DeleteOutlined.58479ebe.js";import"./Form.38c81947.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./index.8d73dc63.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.76f0947d.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5e7d45ad.js";import"./index.8ef9877f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.2cba7252.js";import"./index.2cc6874f.js";/* empty css              *//* empty css               */import"./index.6fc50966.js";import"./index.78b5d5cb.js";import"./index.91d33a28.js";import"./download.cc1448f4.js";import"./base64Conver.08b9f4ec.js";import"./index.97bc65bc.js";import"./cropper.bcc4a72c.js";import"./useRefs.3b949e72.js";import"./index.be7c702f.js";import"./uniqBy.7a457808.js";const x=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>p(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>A(w,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name71",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200}],I=E({components:{BasicTable:s},setup(){const[t]=l({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:x,showIndexColumn:!1,bordered:!0}),{createMessage:n}=_();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Tt){return p(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function m(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:m,beforeEditSubmit:a}}}),P={class:"p-4"};function g(t,n,r,d,a,m){const o=b("BasicTable");return h(),B("div",P,[D(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var kt=f(I,[["render",g]]);export{kt as default};