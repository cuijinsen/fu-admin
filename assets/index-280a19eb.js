import{a as n,V as e,e as o,R as c,S as a,m as l,cH as t,cI as i,s,X as u,F as r,cJ as v,T as d,cd as p}from"./index-d32d699d.js";const f=n({compatConfig:{MODE:3},name:"ACheckableTag",props:{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function},setup:function(n,t){var i=t.slots,s=t.emit,u=e("tag",n).prefixCls,r=function(e){var o=n.checked;s("update:checked",!o),s("change",!o),s("click",e)},v=o((function(){var e;return c(u.value,(a(e={},"".concat(u.value,"-checkable"),!0),a(e,"".concat(u.value,"-checkable-checked"),n.checked),e))}));return function(){var n;return l("span",{class:v.value,onClick:r},[null===(n=i.default)||void 0===n?void 0:n.call(i)])}}});var k=new RegExp("^(".concat(t.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(i.join("|"),")$")),C=n({compatConfig:{MODE:3},name:"ATag",props:{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:d.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:d.any},slots:["closeIcon","icon"],setup:function(n,t){var i=t.slots,d=t.emit,f=t.attrs,C=e("tag",n),h=C.prefixCls,b=C.direction,m=s(!0);u((function(){void 0!==n.visible&&(m.value=n.visible)}));var y=function(e){e.stopPropagation(),d("update:visible",!1),d("close",e),e.defaultPrevented||void 0===n.visible&&(m.value=!1)},x=o((function(){var e=n.color;return!!e&&(k.test(e)||g.test(e))})),F=o((function(){var e;return c(h.value,(a(e={},"".concat(h.value,"-").concat(n.color),x.value),a(e,"".concat(h.value,"-has-color"),n.color&&!x.value),a(e,"".concat(h.value,"-hidden"),!m.value),a(e,"".concat(h.value,"-rtl"),"rtl"===b.value),e))}));return function(){var e,o,c,a=n.icon,t=void 0===a?null===(e=i.icon)||void 0===e?void 0:e.call(i):a,s=n.color,u=n.closeIcon,d=void 0===u?null===(o=i.closeIcon)||void 0===o?void 0:o.call(i):u,k=n.closable,g=void 0!==k&&k,C={backgroundColor:s&&!x.value?s:void 0},b=t||null,m=null===(c=i.default)||void 0===c?void 0:c.call(i),I=b?l(r,null,[b,l("span",null,[m])]):m,T="onClick"in f,E=l("span",{class:F.value,style:C},[I,g?d?l("span",{class:"".concat(h.value,"-close-icon"),onClick:y},[d]):l(p,{class:"".concat(h.value,"-close-icon"),onClick:y},null):null]);return T?l(v,null,{default:function(){return[E]}}):E}}});C.CheckableTag=f,C.install=function(n){return n.component(C.name,C),n.component(f.name,f),n};const h=C;export{h as T};
