var p=(e,a,r)=>new Promise((m,n)=>{var l=t=>{try{s(r.next(t))}catch(o){n(o)}},i=t=>{try{s(r.throw(t))}catch(o){n(o)}},s=t=>t.done?m(t.value):Promise.resolve(t.value).then(l,i);s((r=r.apply(e,a)).next())});import{dK as h,a as B,v as C,br as b,o as c,h as w,n as x,z as d,j as f,i as u,B as y,t as I,fB as P,k as F,G as _}from"./index.67a988db.js";import{T as D}from"./index.c9944a8c.js";import{B as k}from"./TableImg.93e6d55e.js";import{j as A}from"./BasicForm.05ee908a.js";import{u as E}from"./useTable.6336253d.js";import{s as g}from"./index.80508645.js";import"./index.475977fd.js";import"./Checkbox.46a1d435.js";import"./index.510f4eba.js";import"./index.848e1eef.js";import"./eagerComputed.841da0b8.js";import"./useForm.f8fae255.js";import"./index.8b70e5a3.js";import"./index.66e9e120.js";import"./index.253e4730.js";import"./useSize.1222867c.js";import"./useWindowSizeFn.4d53064e.js";import"./useContentViewHeight.97060834.js";import"./ArrowLeftOutlined.7c433682.js";import"./index.5b15cd76.js";import"./index.a722cbfd.js";import"./index.f3227c85.js";import"./uuid.2b29000c.js";import"./index.3f00b8d1.js";import"./_baseIteratee.3527c98a.js";import"./get.87514043.js";import"./DeleteOutlined.cf817082.js";import"./index.0280075c.js";import"./useRefs.ac08b2f5.js";import"./Form.ab29d6a8.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./index.f1863477.js";import"./FullscreenOutlined.a71f1151.js";import"./index.c763c491.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.b0ed5806.js";import"./index.8fb4702c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a82af03e.js";import"./index.d60ca517.js";/* empty css              *//* empty css               */import"./index.64075906.js";import"./index.95a0a2ac.js";import"./index.ff6c01e4.js";import"./download.cb83b819.js";import"./base64Conver.08b9f4ec.js";import"./index.7034e6c7.js";import"./cropper.bcc4a72c.js";import"./index.56a49b73.js";import"./uniqBy.be172303.js";const T=[{title:"\u4F1A\u8BDDID",dataIndex:"token",width:280},{title:"\u7528\u6237\u5E73\u53F0",dataIndex:"userPlatform",width:120},{title:"\u7528\u6237\u540D",dataIndex:"username",width:150},{title:"\u767B\u5F55IP\u5730\u5740",dataIndex:"ipAddress",width:120},{title:"\u767B\u5F55\u5730\u70B9",dataIndex:"loginLocation",width:150},{title:"\u6D4F\u89C8\u5668\u7C7B\u578B",dataIndex:"browser",width:150},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os"},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"loginTime",width:160}],L=[{field:"userPlatform",label:"\u7528\u6237\u5E73\u53F0",component:"ApiSelect",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u5E73\u53F0",api:g,params:{dictCode:"sys_user_platform"}}},{field:"username",label:"\u7528\u6237\u540D",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}}];function S(e){return h.get({url:"/system/monitor/online/selectSysUserOnlineWithPage",params:e})}function O(e){return h.post({url:"/system/monitor/online/forceLogout",params:e},{joinParamsToUrl:!0})}const Ot=B({__name:"index",setup(e){const a=C([]);b(()=>p(this,null,function*(){a.value=yield g({dictCode:"sys_user_platform"})}));const{createMessage:r}=_(),[m,{reload:n}]=E({title:"\u5728\u7EBF\u7528\u6237\u5217\u8868 ",api:S,rowKey:"token",columns:T,formConfig:{baseColProps:{sm:24,lg:6},labelWidth:90,schemas:L,autoSubmitOnEnter:!0,resetButtonOptions:{preIcon:"ant-design:delete-outlined"},submitButtonOptions:{preIcon:"ant-design:search-outlined"}},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{auth:["monitor:onlineUser:forceLogout"],width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function l(i){return p(this,null,function*(){yield O({userPlatform:i.userPlatform,token:i.token}),r.success("\u5F3A\u9000\u6210\u529F\uFF01"),yield n()})}return(i,s)=>(c(),w("div",null,[x(u(k),{onRegister:u(m)},{bodyCell:d(({column:t,record:o})=>[t.key==="userPlatform"?(c(),f(u(D),{key:0,color:o.userPlatform==="WEB"?"processing":"default"},{default:d(()=>[y(I(u(P)(a.value,o.userPlatform)),1)]),_:2},1032,["color"])):F("",!0),t.key==="action"?(c(),f(u(A),{key:1,actions:[{auth:["monitor:onlineUser:forceLogout"],icon:"ant-design:delete-outlined",tooltip:"\u5F3A\u5236\u9000\u51FA",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5F3A\u5236\u9000\u51FA",confirm:l.bind(null,o)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"])]))}});export{Ot as default};