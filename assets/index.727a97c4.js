import{n as a,U as $,L as ae,v as B,F as re,cK as ce,cL as se,cM as ie,_ as b,H as R,a as te,K as ue,br as de,aM as W,Z as ne,N as ve,a6 as fe,bF as X,f as ye,R as be,aN as Y,cm as pe,Q as me}from"./index.b74cf1bc.js";function O(l){return l!=null}var Se=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,o=e.labelStyle,u=e.contentStyle,m=e.bordered,c=e.label,i=e.content,s=e.colon,S=t;if(m){var v;return a(S,{class:[(v={},$(v,"".concat(n,"-item-label"),O(c)),$(v,"".concat(n,"-item-content"),O(i)),v)],colSpan:r},{default:function(){return[O(c)&&a("span",{style:o},[c]),O(i)&&a("span",{style:u},[i])]}})}return a(S,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[a("div",{class:"".concat(n,"-item-container")},[c&&a("span",{class:["".concat(n,"-item-label"),$({},"".concat(n,"-item-no-colon"),!s)],style:o},[c]),i&&a("span",{class:"".concat(n,"-item-content"),style:u},[i])])]}})},z=Se,Ce=function(e){var n=function(v,d,p){var _=d.colon,I=d.prefixCls,C=d.bordered,x=p.component,L=p.type,k=p.showLabel,N=p.showContent,h=p.labelStyle,P=p.contentStyle;return v.map(function(f,j){var g,D,y=f.props||{},U=y.prefixCls,M=U===void 0?I:U,K=y.span,T=K===void 0?1:K,H=y.labelStyle,Q=H===void 0?y["label-style"]:H,V=y.contentStyle,Z=V===void 0?y["content-style"]:V,q=y.label,G=q===void 0?(g=f.children)===null||g===void 0||(D=g.label)===null||D===void 0?void 0:D.call(g):q,J=ce(f),E=se(f),A=ie(f),F=f.key;return typeof x=="string"?a(z,{key:"".concat(L,"-").concat(String(F)||j),class:E,style:A,labelStyle:b(b({},h),Q),contentStyle:b(b({},P),Z),span:T,colon:_,component:x,itemPrefixCls:M,bordered:C,label:k?G:null,content:N?J:null},null):[a(z,{key:"label-".concat(String(F)||j),class:E,style:b(b(b({},h),A),Q),span:1,colon:_,component:x[0],itemPrefixCls:M,bordered:C,label:G},null),a(z,{key:"content-".concat(String(F)||j),class:E,style:b(b(b({},P),A),Z),span:T*2-1,component:x[1],itemPrefixCls:M,bordered:C,content:J},null)]})},t=e.prefixCls,r=e.vertical,o=e.row,u=e.index,m=e.bordered,c=ae(oe,{labelStyle:B({}),contentStyle:B({})}),i=c.labelStyle,s=c.contentStyle;return r?a(re,null,[a("tr",{key:"label-".concat(u),class:"".concat(t,"-row")},[n(o,e,{component:"th",type:"label",showLabel:!0,labelStyle:i.value,contentStyle:s.value})]),a("tr",{key:"content-".concat(u),class:"".concat(t,"-row")},[n(o,e,{component:"td",type:"content",showContent:!0,labelStyle:i.value,contentStyle:s.value})])]):a("tr",{key:u,class:"".concat(t,"-row")},[n(o,e,{component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:i.value,contentStyle:s.value})])},xe=Ce;R.any;var he=function(){return{prefixCls:String,label:R.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},ge=te({compatConfig:{MODE:3},name:"ADescriptionsItem",props:he(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),le={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function we(l,e){if(typeof l=="number")return l;if(ne(l)==="object")for(var n=0;n<Y.length;n++){var t=Y[n];if(e[t]&&l[t]!==void 0)return l[t]||le[t]}return 3}function ee(l,e,n){var t=l;return(e===void 0||e>n)&&(t=pe(l,{span:n}),me(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function $e(l,e){var n=be(l),t=[],r=[],o=e;return n.forEach(function(u,m){var c,i=(c=u.props)===null||c===void 0?void 0:c.span,s=i||1;if(m===n.length-1){r.push(ee(u,i,o)),t.push(r);return}s<o?(o-=s,r.push(u)):(r.push(ee(u,s,o)),t.push(r),o=e,r=[])}),t}var _e=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:R.any,extra:R.any,column:{type:[Number,Object],default:function(){return le}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},oe=Symbol("descriptionsContext"),w=te({compatConfig:{MODE:3},name:"ADescriptions",props:_e(),slots:["title","extra"],Item:ge,setup:function(e,n){var t=n.slots,r=ue("descriptions",e),o=r.prefixCls,u=r.direction,m,c=B({});de(function(){m=W.subscribe(function(s){ne(e.column)==="object"&&(c.value=s)})}),ve(function(){W.unsubscribe(m)}),fe(oe,{labelStyle:X(e,"labelStyle"),contentStyle:X(e,"contentStyle")});var i=ye(function(){return we(e.column,c.value)});return function(){var s,S,v,d,p=e.size,_=e.bordered,I=_===void 0?!1:_,C=e.layout,x=C===void 0?"horizontal":C,L=e.colon,k=L===void 0?!0:L,N=e.title,h=N===void 0?(s=t.title)===null||s===void 0?void 0:s.call(t):N,P=e.extra,f=P===void 0?(S=t.extra)===null||S===void 0?void 0:S.call(t):P,j=(v=t.default)===null||v===void 0?void 0:v.call(t),g=$e(j,i.value);return a("div",{class:[o.value,(d={},$(d,"".concat(o.value,"-").concat(p),p!=="default"),$(d,"".concat(o.value,"-bordered"),!!I),$(d,"".concat(o.value,"-rtl"),u.value==="rtl"),d)]},[(h||f)&&a("div",{class:"".concat(o.value,"-header")},[h&&a("div",{class:"".concat(o.value,"-title")},[h]),f&&a("div",{class:"".concat(o.value,"-extra")},[f])]),a("div",{class:"".concat(o.value,"-view")},[a("table",null,[a("tbody",null,[g.map(function(D,y){return a(xe,{key:y,index:y,colon:k,prefixCls:o.value,vertical:x==="vertical",bordered:I,row:D},null)})])])])])}}});w.install=function(l){return l.component(w.name,w),l.component(w.Item.name,w.Item),l};var je=w;export{je as D};
