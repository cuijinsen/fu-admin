import{C as i}from"./index.93b805e0.js";import{a as D,K as M,U as d,c8 as u,n as o,H as v,f as y}from"./index.7f67491a.js";var G=function(){return{prefixCls:String,title:v.any,description:v.any,avatar:v.any}},f=D({compatConfig:{MODE:3},name:"ACardMeta",props:G(),slots:["title","description","avatar"],setup:function(r,s){var n=s.slots,l=M("card",r),e=l.prefixCls;return function(){var c=d({},"".concat(e.value,"-meta"),!0),a=u(n,r,"avatar"),p=u(n,r,"title"),C=u(n,r,"description"),P=a?o("div",{class:"".concat(e.value,"-meta-avatar")},[a]):null,g=p?o("div",{class:"".concat(e.value,"-meta-title")},[p]):null,_=C?o("div",{class:"".concat(e.value,"-meta-description")},[C]):null,x=g||_?o("div",{class:"".concat(e.value,"-meta-detail")},[g,_]):null;return o("div",{class:c},[P,x])}}}),A=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},m=D({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:A(),setup:function(r,s){var n=s.slots,l=M("card",r),e=l.prefixCls,c=y(function(){var a;return a={},d(a,"".concat(e.value,"-grid"),!0),d(a,"".concat(e.value,"-grid-hoverable"),r.hoverable),a});return function(){var a;return o("div",{class:c.value},[(a=n.default)===null||a===void 0?void 0:a.call(n)])}}});i.Meta=f;i.Grid=m;i.install=function(t){return t.component(i.name,i),t.component(f.name,f),t.component(m.name,m),t};