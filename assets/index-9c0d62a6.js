import{A as e}from"./index-2887dac0.js";import{a as t,V as a,S as r,cc as o,$ as n,cn as s,m as c,br as i,_ as l}from"./index-d32d699d.js";import{a as u}from"./useSize-e28be3fa.js";const p=t({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}},setup:function(t,p){var m=p.slots,v=p.attrs,f=a("avatar-group",t),d=f.prefixCls,y=f.direction;return u(t),function(){var a,u=t.maxPopoverPlacement,p=void 0===u?"top":u,f=t.maxCount,g=t.maxStyle,x=t.maxPopoverTrigger,S=void 0===x?"hover":x,b=(r(a={},d.value,!0),r(a,"".concat(d.value,"-rtl"),"rtl"===y.value),r(a,"".concat(v.class),!!v.class),a),C=o(m,t),P=n(C).map((function(e,t){return s(e,{key:"avatar-key-".concat(t)})})),j=P.length;if(f&&f<j){var h=P.slice(0,f),k=P.slice(f,j);return h.push(c(i,{key:"avatar-popover-key",content:k,trigger:S,placement:p,overlayClassName:"".concat(d.value,"-popover")},{default:function(){return[c(e,{style:g},{default:function(){return["+".concat(j-f)]}})]}})),c("div",l(l({},v),{},{class:b,style:v.style}),[h])}return c("div",l(l({},v),{},{class:b,style:v.style}),[P])}}});e.Group=p,e.install=function(t){return t.component(e.name,e),t.component(p.name,p),t};