var d=(o,l,r)=>new Promise((m,a)=>{var c=t=>{try{e(r.next(t))}catch(n){a(n)}},u=t=>{try{e(r.throw(t))}catch(n){a(n)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.1111a937.js";import{u as B}from"./useForm.e97ebf24.js";import A from"./PersonTable.759cd145.js";import{P as F}from"./index.c5711bd7.js";import{ay as g,a as v,v as C,aA as s,o as D,j as h,z as i,n as p,B as q}from"./index.7f67491a.js";import{C as _}from"./index.93b805e0.js";import"./index.8edf0851.js";/* empty css               */import"./index.a6237845.js";/* empty css              */import"./index.a655c1dc.js";import"./index.1b4bd88f.js";import"./Checkbox.aea9b5e0.js";import"./index.6a3fee19.js";import"./index.c7d3ad48.js";import"./index.1fa128b8.js";import"./index.764a0e1f.js";import"./index.531e8692.js";import"./get.c67596ea.js";import"./index.1db504fc.js";import"./eagerComputed.e27f22e8.js";import"./index.0bcabb8d.js";import"./_baseIteratee.97f9b71e.js";import"./DeleteOutlined.07ed6de3.js";import"./index.9732cd98.js";import"./useRefs.57e308ad.js";import"./Form.28bc30e2.js";import"./Col.55c72773.js";import"./useFlexGapSupport.b80a92ac.js";import"./useSize.95a68d73.js";import"./index.04a8cbbf.js";import"./index.296b7df0.js";import"./useWindowSizeFn.8bbcad12.js";import"./FullscreenOutlined.505d9d0b.js";import"./index.3022938f.js";import"./index.e1e5d99d.js";import"./uuid.2b29000c.js";import"./download.d6fee51a.js";import"./base64Conver.08b9f4ec.js";import"./index.beb3d0e1.js";import"./cropper.bcc4a72c.js";import"./index.2d5e9d07.js";import"./index.a6d90cc9.js";import"./index.1037e95f.js";import"./uniqBy.950a4484.js";import"./TableImg.7860a006.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a420e087.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c8cf0ab1.js";import"./index.d2dfecd1.js";import"./useTable.5f72d90a.js";import"./index.f7e77d68.js";import"./useContentViewHeight.0f7f785e.js";import"./ArrowLeftOutlined.3ff00aee.js";import"./index.1e747fb0.js";import"./PlusOutlined.0e87e577.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],b=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[_.name]:_},setup(){const o=C(null),[l,{validate:r}]=B({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:a}]=B({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),a()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}});function S(o,l,r,m,a,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),n=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(n,{type:"primary",onClick:o.submitAll},{default:i(()=>[q(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Vo=g(T,[["render",S],["__scopeId","data-v-3ea9a428"]]);export{Vo as default};