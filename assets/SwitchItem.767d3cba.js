import{ay as s,a as p,b as m,c as d,f as l,aA as c,o as h,h as u,m as f,t as C,n as g,aB as _,q as v}from"./index.b74cf1bc.js";import{S as y}from"./index.c17593cf.js";import{b as S}from"./index.09c47655.js";import"./index.55455f51.js";import"./index.bcdf5440.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.76f0947d.js";import"./index.320a3aba.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.d0d79b7c.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./uniqBy.7a457808.js";import"./_baseIteratee.b387a4e9.js";import"./get.ef800ccd.js";import"./index.283fe8c9.js";import"./useRefs.3b949e72.js";import"./PlusOutlined.ccd4e1ca.js";import"./RedoOutlined.5e7d45ad.js";import"./index.f63e810c.js";import"./lock.acb5ea64.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:n}=d(),o=l(()=>e.def?{checked:e.def}:{});function a(i){e.event&&S(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:o}}});function B(e,t,n,o,a,i){const r=c("Switch");return h(),u("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(r,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var Q=s(b,[["render",B],["__scopeId","data-v-fd7354e2"]]);export{Q as default};