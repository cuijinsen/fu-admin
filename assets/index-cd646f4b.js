import{s as t,J as a,a0 as r,W as n,e,a1 as o,a2 as c,a as u,V as i,a3 as l,a4 as s,Y as p,a5 as f,R as d,S as v,m as g,_ as m}from"./index-d32d699d.js";const x=function(){var n=t(!1);return a((function(){n.value=r()})),n};var b=Symbol("rowContextKey");c("top","middle","bottom","stretch"),c("start","end","center","space-around","space-between");const y=u({compatConfig:{MODE:3},name:"ARow",props:{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}},setup:function(r,n){var c,u=n.slots,m=i("row",r),y=m.prefixCls,S=m.direction,j=t({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),h=x();a((function(){c=l.subscribe((function(t){var a=r.gutter||0;(!Array.isArray(a)&&"object"===s(a)||Array.isArray(a)&&("object"===s(a[0])||"object"===s(a[1])))&&(j.value=t)}))})),p((function(){l.unsubscribe(c)}));var N,w=e((function(){var t=[0,0],a=r.gutter,n=void 0===a?0:a;return(Array.isArray(n)?n:[n,0]).forEach((function(a,r){if("object"===s(a))for(var n=0;n<f.length;n++){var e=f[n];if(j.value[e]&&void 0!==a[e]){t[r]=a[e];break}}else t[r]=a||0})),t}));N={gutter:w,supportFlexGap:h,wrap:e((function(){return r.wrap}))},o(b,N);var O=e((function(){var t;return d(y.value,(v(t={},"".concat(y.value,"-no-wrap"),!1===r.wrap),v(t,"".concat(y.value,"-").concat(r.justify),r.justify),v(t,"".concat(y.value,"-").concat(r.align),r.align),v(t,"".concat(y.value,"-rtl"),"rtl"===S.value),t))})),A=e((function(){var t=w.value,a={},r=t[0]>0?"".concat(t[0]/-2,"px"):void 0,n=t[1]>0?"".concat(t[1]/-2,"px"):void 0;return r&&(a.marginLeft=r,a.marginRight=r),h.value?a.rowGap="".concat(t[1],"px"):n&&(a.marginTop=n,a.marginBottom=n),a}));return function(){var t;return g("div",{class:O.value,style:A.value},[null===(t=u.default)||void 0===t?void 0:t.call(u)])}}});const S=u({compatConfig:{MODE:3},name:"ACol",props:{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]},setup:function(t,a){var r=a.slots,o=n(b,{gutter:e((function(){})),wrap:e((function(){})),supportFlexGap:e((function(){}))}),c=o.gutter,u=o.supportFlexGap,l=o.wrap,p=i("col",t),f=p.prefixCls,x=p.direction,y=e((function(){var a,r=t.span,n=t.order,e=t.offset,o=t.push,c=t.pull,u=f.value,i={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach((function(a){var r,n={},e=t[a];"number"==typeof e?n.span=e:"object"===s(e)&&(n=e||{}),i=m(m({},i),{},(v(r={},"".concat(u,"-").concat(a,"-").concat(n.span),void 0!==n.span),v(r,"".concat(u,"-").concat(a,"-order-").concat(n.order),n.order||0===n.order),v(r,"".concat(u,"-").concat(a,"-offset-").concat(n.offset),n.offset||0===n.offset),v(r,"".concat(u,"-").concat(a,"-push-").concat(n.push),n.push||0===n.push),v(r,"".concat(u,"-").concat(a,"-pull-").concat(n.pull),n.pull||0===n.pull),v(r,"".concat(u,"-rtl"),"rtl"===x.value),r))})),d(u,(v(a={},"".concat(u,"-").concat(r),void 0!==r),v(a,"".concat(u,"-order-").concat(n),n),v(a,"".concat(u,"-offset-").concat(e),e),v(a,"".concat(u,"-push-").concat(o),o),v(a,"".concat(u,"-pull-").concat(c),c),a),i)})),S=e((function(){var a=t.flex,r=c.value,n={};if(r&&r[0]>0){var e="".concat(r[0]/2,"px");n.paddingLeft=e,n.paddingRight=e}if(r&&r[1]>0&&!u.value){var o="".concat(r[1]/2,"px");n.paddingTop=o,n.paddingBottom=o}return a&&(n.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(a),!1!==l.value||n.minWidth||(n.minWidth=0)),n}));return function(){var t;return g("div",{class:y.value,style:S.value},[null===(t=r.default)||void 0===t?void 0:t.call(r)])}}});export{S as C,y as R,x as u};
