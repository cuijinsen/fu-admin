var A=Object.defineProperty,F=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(t,o,a)=>o in t?A(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,v=(t,o)=>{for(var a in o||(o={}))w.call(o,a)&&f(t,a,o[a]);if(_)for(var a of _(o))S.call(o,a)&&f(t,a,o[a]);return t},C=(t,o)=>F(t,I(o));var d=(t,o,a)=>new Promise((u,m)=>{var l=e=>{try{r(a.next(e))}catch(s){m(s)}},c=e=>{try{r(a.throw(e))}catch(s){m(s)}},r=e=>e.done?u(e.value):Promise.resolve(e.value).then(l,c);r((a=a.apply(t,o)).next())});import{a as b,cE as y,C as x,s as U,O as k,fy as R,f as E,fz as M,ay as N,G as V,aA as i,o as $,j as D,z as p,n,m as g,B as z,ff as G,fg as O}from"./index.67a988db.js";/* empty css               */import{B as P}from"./BasicForm.05ee908a.js";import{u as T}from"./useForm.f8fae255.js";import{a as W}from"./index.95c54b88.js";import{h as j}from"./header.d801b988.js";import{b as L}from"./data.ac415711.js";import{s as q,u as H}from"./index.80508645.js";import{R as J,C as K}from"./index.56a49b73.js";/* empty css              */import"./index.c763c491.js";import"./index.475977fd.js";import"./Checkbox.46a1d435.js";import"./index.510f4eba.js";import"./index.c9944a8c.js";import"./index.a722cbfd.js";import"./index.f3227c85.js";import"./index.64075906.js";import"./get.87514043.js";import"./index.848e1eef.js";import"./eagerComputed.841da0b8.js";import"./index.3f00b8d1.js";import"./_baseIteratee.3527c98a.js";import"./DeleteOutlined.cf817082.js";import"./index.0280075c.js";import"./useRefs.ac08b2f5.js";import"./Form.ab29d6a8.js";import"./Col.830be021.js";import"./useFlexGapSupport.72716606.js";import"./useSize.1222867c.js";import"./index.95a0a2ac.js";import"./index.f1863477.js";import"./useWindowSizeFn.4d53064e.js";import"./FullscreenOutlined.a71f1151.js";import"./index.ff6c01e4.js";import"./index.8fb4702c.js";import"./uuid.2b29000c.js";import"./download.cb83b819.js";import"./base64Conver.08b9f4ec.js";import"./index.7034e6c7.js";import"./cropper.bcc4a72c.js";import"./index.253e4730.js";import"./index.5b15cd76.js";import"./uniqBy.be172303.js";const Q=b({components:{BasicForm:P,CollapseContainer:y,Button:x,ARow:J,ACol:K,CropperAvatar:W},setup(){const{createMessage:t}=V(),o=U(),[a,{setFieldsValue:u,updateSchema:m,validate:l}]=T({labelWidth:120,schemas:L,showActionButtonGroup:!1});k(()=>d(this,null,function*(){const e=yield q({dictCode:"sys_sex"}),s=yield R();u(s),m([{field:"sex",componentProps:{options:e}}])}));const c=E(()=>{const{avatar:e}=o.getUserInfo;return e||j});function r(e){const s=o.getUserInfo;s.avatar=e,o.setUserInfo(s)}return{avatar:c,register:a,uploadApi:H,updateAvatar:r,handleSubmit:()=>d(this,null,function*(){const e=yield l(),s=o.getUserInfo;yield M(C(v({},e),{avatar:(s==null?void 0:s.avatar)||null})),s.realName=e.nickname,o.setUserInfo(s),t.success("\u66F4\u65B0\u6210\u529F\uFF01")})}}}),X=t=>(G("data-v-0a0ad9b7"),t=t(),O(),t),Y={class:"change-avatar"},Z=X(()=>g("div",{class:"mb-2"}," \u5934\u50CF ",-1));function tt(t,o,a,u,m,l){const c=i("BasicForm"),r=i("a-col"),e=i("CropperAvatar"),s=i("a-row"),h=i("Button"),B=i("CollapseContainer");return $(),D(B,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:p(()=>[n(s,{gutter:24},{default:p(()=>[n(r,{span:14},{default:p(()=>[n(c,{onRegister:t.register},null,8,["onRegister"])]),_:1}),n(r,{span:10},{default:p(()=>[g("div",Y,[Z,n(e,{uploadApi:t.uploadApi,value:t.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:t.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(s,{gutter:24},{default:p(()=>[n(r,{span:10,style:{"text-align":"center"}},{default:p(()=>[n(h,{type:"primary",onClick:t.handleSubmit},{default:p(()=>[z("\u4FDD\u5B58")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var qt=N(Q,[["render",tt],["__scopeId","data-v-0a0ad9b7"]]);export{qt as default};