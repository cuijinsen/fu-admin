import{C as a}from"./index-d5b1635c.js";import{a as t,V as e,S as n,cc as r,m as l,T as o,e as i}from"./index-d32d699d.js";const s=t({compatConfig:{MODE:3},name:"ACardMeta",props:{prefixCls:String,title:o.any,description:o.any,avatar:o.any},slots:["title","description","avatar"],setup:function(a,t){var o=t.slots,i=e("card",a).prefixCls;return function(){var t=n({},"".concat(i.value,"-meta"),!0),e=r(o,a,"avatar"),s=r(o,a,"title"),c=r(o,a,"description"),d=e?l("div",{class:"".concat(i.value,"-meta-avatar")},[e]):null,u=s?l("div",{class:"".concat(i.value,"-meta-title")},[s]):null,v=c?l("div",{class:"".concat(i.value,"-meta-description")},[c]):null,p=u||v?l("div",{class:"".concat(i.value,"-meta-detail")},[u,v]):null;return l("div",{class:t},[d,p])}}});const c=t({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:String,hoverable:{type:Boolean,default:!0}},setup:function(a,t){var r=t.slots,o=e("card",a).prefixCls,s=i((function(){var t;return n(t={},"".concat(o.value,"-grid"),!0),n(t,"".concat(o.value,"-grid-hoverable"),a.hoverable),t}));return function(){var a;return l("div",{class:s.value},[null===(a=r.default)||void 0===a?void 0:a.call(r)])}}});a.Meta=s,a.Grid=c,a.install=function(t){return t.component(a.name,a),t.component(s.name,s),t.component(c.name,c),t};export{s as C};
