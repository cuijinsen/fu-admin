var f=(a,s,r)=>new Promise((c,i)=>{var _=o=>{try{t(r.next(o))}catch(u){i(u)}},m=o=>{try{t(r.throw(o))}catch(u){i(u)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((r=r.apply(a,s)).next())});import{B as v}from"./BasicForm.d8c9eebf.js";import{u as E}from"./useForm.468df0fb.js";import{step2Schemas as b}from"./data.1866c55a.js";import{a as x,ay as C,aA as n,o as g,h,n as e,z as p,B as l}from"./index.437c4479.js";import{A as B}from"./index.637cef53.js";import{D}from"./index.f52f7562.js";import{D as d}from"./index.937da716.js";/* empty css              *//* empty css               */import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.4dfcb51c.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.1b5fb899.js";import"./get.1b284c6a.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./useSize.20fe1af9.js";import"./index.db2dd425.js";import"./index.d115f57c.js";import"./useWindowSizeFn.19d582eb.js";import"./FullscreenOutlined.01c6694a.js";import"./index.ac415180.js";import"./uuid.2b29000c.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.51f3da4c.js";import"./index.11505f04.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";const A=x({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(a,{emit:s}){const[r,{validate:c,setProps:i}]=E({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();i({submitButtonOptions:{loading:!0}}),setTimeout(()=>{i({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:r}}}),y={class:"step2"};function O(a,s,r,c,i,_){const m=n("a-alert"),t=n("a-descriptions-item"),o=n("a-descriptions"),u=n("a-divider"),F=n("BasicForm");return g(),h("div",y,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:p(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:p(()=>[l(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:p(()=>[l(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:p(()=>[l(" Vben ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:p(()=>[l(" 500\u5143 ")]),_:1})]),_:1}),e(u),e(F,{onRegister:a.register},null,8,["onRegister"])])}var Ft=C(A,[["render",O],["__scopeId","data-v-0c66c08b"]]);export{Ft as default};