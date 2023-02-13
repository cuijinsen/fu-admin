var d=(o,l,r)=>new Promise((m,a)=>{var c=t=>{try{e(r.next(t))}catch(n){a(n)}},u=t=>{try{e(r.throw(t))}catch(n){a(n)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.d8c9eebf.js";import{u as B}from"./useForm.468df0fb.js";import A from"./PersonTable.3a3e986e.js";import{P as F}from"./index.d73ca278.js";import{ay as g,a as v,v as C,aA as s,o as D,j as h,z as i,n as p,B as q}from"./index.437c4479.js";import{C as _}from"./index.76ccd65c.js";import"./index.dcff1896.js";/* empty css               */import"./index.7d83212f.js";/* empty css              */import"./index.f52f7562.js";import"./index.45981b2c.js";import"./Checkbox.cb3a4866.js";import"./index.5c5d714e.js";import"./index.4dfcb51c.js";import"./index.b89f5701.js";import"./index.ce4e9e92.js";import"./index.1b5fb899.js";import"./get.1b284c6a.js";import"./index.3fcc8e0f.js";import"./eagerComputed.99632747.js";import"./index.5072074a.js";import"./_baseIteratee.a1e53483.js";import"./DeleteOutlined.64c6bd02.js";import"./index.ddab58b9.js";import"./useRefs.c3a848b5.js";import"./Form.1e90d758.js";import"./Col.29a1baf2.js";import"./useFlexGapSupport.aeef873b.js";import"./useSize.20fe1af9.js";import"./index.db2dd425.js";import"./index.d115f57c.js";import"./useWindowSizeFn.19d582eb.js";import"./FullscreenOutlined.01c6694a.js";import"./index.637cef53.js";import"./index.ac415180.js";import"./uuid.2b29000c.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";import"./index.7e15fbbb.js";import"./cropper.bcc4a72c.js";import"./index.51f3da4c.js";import"./index.11505f04.js";import"./index.060124a8.js";import"./uniqBy.793a8e49.js";import"./TableImg.85d93572.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c484a87a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ee088757.js";import"./index.07f5517b.js";import"./useTable.36fa029c.js";import"./index.3aa321be.js";import"./useContentViewHeight.459f0c64.js";import"./ArrowLeftOutlined.8c3ea7e6.js";import"./index.d2461a05.js";import"./PlusOutlined.4ad566d4.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],b=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[_.name]:_},setup(){const o=C(null),[l,{validate:r}]=B({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:a}]=B({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),a()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}});function S(o,l,r,m,a,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),n=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(n,{type:"primary",onClick:o.submitAll},{default:i(()=>[q(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Vo=g(T,[["render",S],["__scopeId","data-v-3ea9a428"]]);export{Vo as default};