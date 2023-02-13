var d=(o,l,r)=>new Promise((m,a)=>{var c=t=>{try{e(r.next(t))}catch(n){a(n)}},u=t=>{try{e(r.throw(t))}catch(n){a(n)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.05ee908a.js";import{u as B}from"./useForm.f8fae255.js";import A from"./PersonTable.43274b39.js";import{P as F}from"./index.8b70e5a3.js";import{ay as g,a as v,v as C,aA as s,o as D,j as h,z as i,n as p,B as q}from"./index.67a988db.js";import{C as _}from"./index.519e46f0.js";import"./index.22067dac.js";/* empty css               */import"./index.9b5e95b9.js";/* empty css              */import"./index.c763c491.js";import"./index.475977fd.js";import"./Checkbox.46a1d435.js";import"./index.510f4eba.js";import"./index.c9944a8c.js";import"./index.a722cbfd.js";import"./index.f3227c85.js";import"./index.64075906.js";import"./get.87514043.js";import"./index.848e1eef.js";import"./eagerComputed.841da0b8.js";import"./index.3f00b8d1.js";import"./_baseIteratee.3527c98a.js";import"./DeleteOutlined.cf817082.js";import"./index.0280075c.js";import"./useRefs.ac08b2f5.js";import"./Form.ab29d6a8.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./useSize.1222867c.js";import"./index.95a0a2ac.js";import"./index.f1863477.js";import"./useWindowSizeFn.4d53064e.js";import"./FullscreenOutlined.a71f1151.js";import"./index.ff6c01e4.js";import"./index.8fb4702c.js";import"./uuid.2b29000c.js";import"./download.cb83b819.js";import"./base64Conver.08b9f4ec.js";import"./index.7034e6c7.js";import"./cropper.bcc4a72c.js";import"./index.253e4730.js";import"./index.5b15cd76.js";import"./index.56a49b73.js";import"./uniqBy.be172303.js";import"./TableImg.93e6d55e.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b0ed5806.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a82af03e.js";import"./index.d60ca517.js";import"./useTable.6336253d.js";import"./index.66e9e120.js";import"./useContentViewHeight.97060834.js";import"./ArrowLeftOutlined.7c433682.js";import"./index.27706f42.js";import"./PlusOutlined.93f7d3e8.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],b=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[_.name]:_},setup(){const o=C(null),[l,{validate:r}]=B({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:a}]=B({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),a()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}});function S(o,l,r,m,a,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),n=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(n,{type:"primary",onClick:o.submitAll},{default:i(()=>[q(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Vo=g(T,[["render",S],["__scopeId","data-v-3ea9a428"]]);export{Vo as default};