import{T as i}from"./index.283fe8c9.js";import{a as y,v as m,a9 as P,f as T,n as h,H as B}from"./index.b74cf1bc.js";var g=function(){return{tab:B.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}},l=y({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:g(),slots:["closeIcon","tab"],setup:function(e,c){var s=c.attrs,d=c.slots,o=m(e.forceRender);P([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?o.value=!0:e.destroyInactiveTabPane&&(o.value=!1)},{immediate:!0});var v=T(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var r,u=e.prefixCls,b=e.forceRender,t=e.id,n=e.active,f=e.tabKey;return h("div",{id:t&&"".concat(t,"-panel-").concat(f),role:"tabpanel",tabindex:n?0:-1,"aria-labelledby":t&&"".concat(t,"-tab-").concat(f),"aria-hidden":!n,style:[v.value,s.style],class:["".concat(u,"-tabpane"),n&&"".concat(u,"-tabpane-active"),s.class]},[(n||o.value||b)&&((r=d.default)===null||r===void 0?void 0:r.call(d))])}}});i.TabPane=l;i.install=function(a){return a.component(i.name,i),a.component(l.name,l),a};
