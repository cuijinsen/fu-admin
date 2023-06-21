import{s as e,Y as t,cf as a,a as n,e as o,m as l,c8 as i,R as r,S as u,X as c,_ as v,cg as s,ah as d,J as f,K as b,ch as p,ba as y,ci as h,cj as m,T as g,a1 as x,W as C,bf as k,a8 as T,ck as E,cl as P,cm as B,cn as S,aZ as I,O as w,$ as O,c7 as A,ab as M,co as j,cb as N,V as D,a4 as K,cp as L,cq as F,cd as R}from"./index-d32d699d.js";import{u as W}from"./useRefs-b0536d84.js";function q(n){var o,l,i,r=e([]),u=e("function"==typeof n?n():n),c=(o=function(){var e=u.value;r.value.forEach((function(t){e=t(e)})),r.value=[],u.value=e},l=e(),i=e(!1),t((function(){i.value=!0,a.cancel(l.value)})),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i.value||(a.cancel(l.value),l.value=a((function(){o.apply(void 0,t)})))});return[u,function(e){r.value.push(e),c()}]}const z=n({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(t,a){var n=a.expose,c=a.attrs,v=e();function s(e){var a;null!==(a=t.tab)&&void 0!==a&&a.disabled||t.onClick(e)}n({domRef:v});var d=o((function(){var e;return t.editable&&!1!==t.closable&&!(null!==(e=t.tab)&&void 0!==e&&e.disabled)}));return function(){var e,a,n=t.prefixCls,o=t.id,f=t.active,b=t.tab,p=b.key,y=b.tab,h=b.disabled,m=b.closeIcon,g=t.renderWrapper,x=t.removeAriaLabel,C=t.editable,k=t.onFocus,T="".concat(n,"-tab"),E=l("div",{key:p,ref:v,class:r(T,(e={},u(e,"".concat(T,"-with-remove"),d.value),u(e,"".concat(T,"-active"),f),u(e,"".concat(T,"-disabled"),h),e)),style:c.style,onClick:s},[l("div",{role:"tab","aria-selected":f,id:o&&"".concat(o,"-tab-").concat(p),class:"".concat(T,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(p),"aria-disabled":h,tabindex:h?null:0,onClick:function(e){e.stopPropagation(),s(e)},onKeydown:function(e){[i.SPACE,i.ENTER].includes(e.which)&&(e.preventDefault(),s(e))},onFocus:k},["function"==typeof y?y():y]),d.value&&l("button",{type:"button","aria-label":x||"remove",tabindex:0,class:"".concat(T,"-remove"),onClick:function(e){var a,n;e.stopPropagation(),(a=e).preventDefault(),a.stopPropagation(),t.editable.onEdit("remove",{key:null===(n=t.tab)||void 0===n?void 0:n.key,event:a})}},[(null==m?void 0:m())||(null===(a=C.removeIcon)||void 0===a?void 0:a.call(C))||"×"])]);return g?g(E):E}}});var G={width:0,height:0,left:0,top:0};const V=n({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(t,a){var n=a.expose,o=a.attrs,i=e();return n({domRef:i}),function(){var e=t.prefixCls,a=t.editable,n=t.locale;return a&&!1!==a.showAdd?l("button",{ref:i,type:"button",class:"".concat(e,"-nav-add"),style:o.style,"aria-label":(null==n?void 0:n.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},[a.addIcon?a.addIcon():"+"]):null}}});const H=n({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:{prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:g.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var a=t.attrs,n=t.slots,c=s(!1),v=d(c,2),g=v[0],x=v[1],C=s(null),k=d(C,2),T=k[0],E=k[1],P=function(t){for(var a=e.tabs.filter((function(e){return!e.disabled})),n=a.findIndex((function(e){return e.key===T.value}))||0,o=a.length,l=0;l<o;l+=1){var i=a[n=(n+t+o)%o];if(!i.disabled)return void E(i.key)}},B=function(t){var a=t.which;if(g.value)switch(a){case i.UP:P(-1),t.preventDefault();break;case i.DOWN:P(1),t.preventDefault();break;case i.ESC:x(!1);break;case i.SPACE:case i.ENTER:null!==T.value&&e.onTabClick(T.value,t)}else[i.DOWN,i.SPACE,i.ENTER].includes(a)&&(x(!0),t.preventDefault())},S=o((function(){return"".concat(e.id,"-more-popup")})),I=o((function(){return null!==T.value?"".concat(S.value,"-").concat(T.value):null}));return f((function(){b(T,(function(){var e=document.getElementById(I.value);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),{flush:"post",immediate:!0})})),b(g,(function(){g.value||E(null)})),function(){var t,o=e.prefixCls,i=e.id,c=e.tabs,v=e.locale,s=e.mobile,d=e.moreIcon,f=void 0===d?(null===(t=n.moreIcon)||void 0===t?void 0:t.call(n))||l(p,null,null):d,b=e.moreTransitionName,C=e.editable,k=e.tabBarGutter,E=e.rtl,P=e.onTabClick,w="".concat(o,"-dropdown"),O=null==v?void 0:v.dropdownAriaLabel,A=u({},E?"marginRight":"marginLeft",k);c.length||(A.visibility="hidden",A.order=1);var M=r(u({},"".concat(w,"-rtl"),E)),j=s?null:l(m,{prefixCls:w,trigger:["hover"],visible:g.value,transitionName:b,onVisibleChange:x,overlayClassName:M,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return l(y,{onClick:function(e){var t=e.key,a=e.domEvent;P(t,a),x(!1)},id:S.value,tabindex:-1,role:"listbox","aria-activedescendant":I.value,selectedKeys:[T.value],"aria-label":void 0!==O?O:"expanded dropdown"},{default:function(){return[c.map((function(t){var a,n,o=C&&!1!==t.closable&&!t.disabled;return l(h,{key:t.key,id:"".concat(S.value,"-").concat(t.key),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(t.key),disabled:t.disabled},{default:function(){return[l("span",null,["function"==typeof t.tab?t.tab():t.tab]),o&&l("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(w,"-menu-item-remove"),onClick:function(a){var n,o;a.stopPropagation(),n=a,o=t.key,n.preventDefault(),n.stopPropagation(),e.editable.onEdit("remove",{key:o,event:n})}},[(null===(a=t.closeIcon)||void 0===a?void 0:a.call(t))||(null===(n=C.removeIcon)||void 0===n?void 0:n.call(C))||"×"])]}})}))]}})},default:function(){return l("button",{type:"button",class:"".concat(o,"-nav-more"),style:A,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":S.value,id:"".concat(i,"-more"),"aria-expanded":g.value,onKeydown:B},[f])}});return l("div",{class:r("".concat(o,"-nav-operations"),a.class),style:a.style},[j,l(V,{prefixCls:o,locale:v,editable:C},null)])}}});var X=Symbol("tabsContextKey"),Y=function(e){x(X,e)},U=function(){return C(X,{tabs:e([]),prefixCls:e()})};n({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var a=t.slots;return Y(k(e)),function(){var e;return null===(e=a.default)||void 0===e?void 0:e.call(a)}}});var $=Math.pow(.995,20);function J(t,a){var n=e(t);return[n,function(e){var t="function"==typeof e?e(n.value):e;t!==n.value&&a(t,n.value),n.value=t}]}var Z={width:0,height:0,left:0,top:0,right:0};const _=n({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:g.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}},slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(n,i){var p=i.attrs,y=i.slots,h=U(),m=h.tabs,g=h.prefixCls,x=e(),C=e(),k=e(),S=e(),I=W(),w=d(I,2),O=w[0],A=w[1],M=o((function(){return"top"===n.tabPosition||"bottom"===n.tabPosition})),j=J(0,(function(e,t){M.value&&n.onTabScroll&&n.onTabScroll({direction:e>t?"left":"right"})})),N=d(j,2),D=N[0],K=N[1],L=J(0,(function(e,t){!M.value&&n.onTabScroll&&n.onTabScroll({direction:e>t?"top":"bottom"})})),F=d(L,2),R=F[0],X=F[1],Y=s(0),_=d(Y,2),Q=_[0],ee=_[1],te=s(0),ae=d(te,2),ne=ae[0],oe=ae[1],le=s(null),ie=d(le,2),re=ie[0],ue=ie[1],ce=s(null),ve=d(ce,2),se=ve[0],de=ve[1],fe=s(0),be=d(fe,2),pe=be[0],ye=be[1],he=s(0),me=d(he,2),ge=me[0],xe=me[1],Ce=q(new Map),ke=d(Ce,2),Te=ke[0],Ee=ke[1],Pe=function(t,a){var n=e(new Map);return c((function(){for(var e,o=new Map,l=t.value,i=a.value.get(null===(e=l[0])||void 0===e?void 0:e.key)||G,r=i.left+i.width,u=0;u<l.length;u+=1){var c,s=l[u].key,d=a.value.get(s);d||(d=a.value.get(null===(c=l[u-1])||void 0===c?void 0:c.key)||G);var f=o.get(s)||v({},d);f.right=r-f.left-f.width,o.set(s,f)}n.value=new Map(o)})),n}(m,Te),Be=o((function(){return"".concat(g.value,"-nav-operations-hidden")})),Se=e(0),Ie=e(0);c((function(){M.value?n.rtl?(Se.value=0,Ie.value=Math.max(0,Q.value-re.value)):(Se.value=Math.min(0,re.value-Q.value),Ie.value=0):(Se.value=Math.min(0,se.value-ne.value),Ie.value=0)}));var we=function(e){return e<Se.value?Se.value:e>Ie.value?Ie.value:e},Oe=e(),Ae=s(),Me=d(Ae,2),je=Me[0],Ne=Me[1],De=function(){Ne(Date.now())},Ke=function(){clearTimeout(Oe.value)},Le=function(e,t){e((function(e){return we(e+t)}))};!function(a,n){var o=s(),l=d(o,2),i=l[0],r=l[1],u=s(0),c=d(u,2),v=c[0],b=c[1],p=s(0),y=d(p,2),h=y[0],m=y[1],g=s(),x=d(g,2),C=x[0],k=x[1],T=e(),E=e(),P=e({onTouchStart:function(e){var t=e.touches[0],a=t.screenX,n=t.screenY;r({x:a,y:n}),clearInterval(T.value)},onTouchMove:function(e){if(i.value){e.preventDefault();var t=e.touches[0],a=t.screenX,o=t.screenY,l=a-i.value.x,u=o-i.value.y;n(l,u),r({x:a,y:o});var c=Date.now();m(c-v.value),b(c),k({x:l,y:u})}},onTouchEnd:function(){if(i.value){var e=C.value;if(r(null),k(null),e){var t=e.x/h.value,a=e.y/h.value,o=Math.abs(t),l=Math.abs(a);if(Math.max(o,l)<.1)return;var u=t,c=a;T.value=setInterval((function(){Math.abs(u)<.01&&Math.abs(c)<.01?clearInterval(T.value):n(20*(u*=$),20*(c*=$))}),20)}}},onWheel:function(e){var t=e.deltaX,a=e.deltaY,o=0,l=Math.abs(t),i=Math.abs(a);l===i?o="x"===E.value?t:a:l>i?(o=t,E.value="x"):(o=a,E.value="y"),n(-o,-o)&&e.preventDefault()}});function B(e){P.value.onTouchStart(e)}function S(e){P.value.onTouchMove(e)}function I(e){P.value.onTouchEnd(e)}function w(e){P.value.onWheel(e)}f((function(){var e,t;document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",I,{passive:!1}),null===(e=a.value)||void 0===e||e.addEventListener("touchstart",B,{passive:!1}),null===(t=a.value)||void 0===t||t.addEventListener("wheel",w,{passive:!1})})),t((function(){document.removeEventListener("touchmove",S),document.removeEventListener("touchend",I)}))}(x,(function(e,t){if(M.value){if(re.value>=Q.value)return!1;Le(K,e)}else{if(se.value>=ne.value)return!1;Le(X,t)}return Ke(),De(),!0})),b(je,(function(){Ke(),je.value&&(Oe.value=setTimeout((function(){Ne(0)}),100))}));var Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.activeKey,t=Pe.value.get(e)||{width:0,height:0,left:0,right:0,top:0};if(M.value){var a=D.value;n.rtl?t.right<D.value?a=t.right:t.right+t.width>D.value+re.value&&(a=t.right+t.width-re.value):t.left<-D.value?a=-t.left:t.left+t.width>-D.value+re.value&&(a=-(t.left+t.width-re.value)),X(0),K(we(a))}else{var o=R.value;t.top<-R.value?o=-t.top:t.top+t.height>-R.value+se.value&&(o=-(t.top+t.height-se.value)),K(0),X(we(o))}},Re=e(0),We=e(0);c((function(){var e,t,a,o,l,i,r,u=Pe.value;["top","bottom"].includes(n.tabPosition)?(t="width",l=re.value,i=Q.value,r=pe.value,a=n.rtl?"right":"left",o=Math.abs(D.value)):(t="height",l=se.value,i=Q.value,r=ge.value,a="top",o=-R.value);var c=l;i+r>l&&i<l&&(c=l-r);var v,s=m.value;if(!s.length)return v=[0,0],Re.value=v[0],We.value=v[1],v;for(var d=s.length,f=d,b=0;b<d;b+=1){var p=u.get(s[b].key)||Z;if(p[a]+p[t]>o+c){f=b-1;break}}for(var y=0,h=d-1;h>=0;h-=1){if((u.get(s[h].key)||Z)[a]<o){y=h+1;break}}return e=[y,f],Re.value=e[0],We.value=e[1],e}));var qe=function(){var e,t,a,n,o,l=(null===(e=x.value)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=x.value)||void 0===t?void 0:t.offsetHeight)||0,r=(null===(a=S.value)||void 0===a?void 0:a.$el)||{},u=r.offsetWidth||0,c=r.offsetHeight||0;ue(l),de(i),ye(u),xe(c);var v=((null===(n=C.value)||void 0===n?void 0:n.offsetWidth)||0)-u,s=((null===(o=C.value)||void 0===o?void 0:o.offsetHeight)||0)-c;ee(v),oe(s),Ee((function(){var e=new Map;return m.value.forEach((function(t){var a=t.key,n=A.value.get(a),o=(null==n?void 0:n.$el)||n;o&&e.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})})),e}))},ze=o((function(){return[].concat(T(m.value.slice(0,Re.value)),T(m.value.slice(We.value+1)))})),Ge=s(),Ve=d(Ge,2),He=Ve[0],Xe=Ve[1],Ye=o((function(){return Pe.value.get(n.activeKey)})),Ue=e(),$e=function(){a.cancel(Ue.value)};b([Ye,M,function(){return n.rtl}],(function(){var e={};Ye.value&&(M.value?(n.rtl?e.right=E(Ye.value.right):e.left=E(Ye.value.left),e.width=E(Ye.value.width)):(e.top=E(Ye.value.top),e.height=E(Ye.value.height))),$e(),Ue.value=a((function(){Xe(e)}))})),b([function(){return n.activeKey},Ye,Pe,M],(function(){Fe()}),{flush:"post"}),b([function(){return n.rtl},function(){return n.tabBarGutter},function(){return n.activeKey},function(){return m.value}],(function(){qe()}),{flush:"post"});var Je=function(e){var t=e.position,a=e.prefixCls,n=e.extra;if(!n)return null;var o=null==n?void 0:n({position:t});return o?l("div",{class:"".concat(a,"-extra-content")},[o]):null};return t((function(){Ke(),$e()})),function(){var e,t,a,o,i,c=n.id,s=n.animated,d=n.activeKey,f=n.rtl,b=n.editable,h=n.locale,T=n.tabPosition,E=n.tabBarGutter,I=n.onTabClick,w=p.class,A=p.style,j=g.value,N=!!ze.value.length,K="".concat(j,"-nav-wrap");M.value?f?(a=D.value>0,t=D.value+re.value<Q.value):(t=D.value<0,a=-D.value+re.value<Q.value):(o=R.value<0,i=-R.value+se.value<ne.value);var L={};"top"===T||"bottom"===T?L[f?"marginRight":"marginLeft"]="number"==typeof E?"".concat(E,"px"):E:L.marginTop="number"==typeof E?"".concat(E,"px"):E;var F=m.value.map((function(e,t){var a=e.key;return l(z,{id:c,prefixCls:j,key:a,tab:e,style:0===t?void 0:L,closable:e.closable,editable:b,active:a===d,removeAriaLabel:null==h?void 0:h.removeAriaLabel,ref:O(a),onClick:function(e){I(a,e)},onFocus:function(){Fe(a),De(),x.value&&(f||(x.value.scrollLeft=0),x.value.scrollTop=0)}},y)}));return l("div",{role:"tablist",class:r("".concat(j,"-nav"),w),style:A,onKeydown:function(){De()}},[l(Je,{position:"left",prefixCls:j,extra:y.leftExtra},null),l(P,{onResize:qe},{default:function(){return[l("div",{class:r(K,(e={},u(e,"".concat(K,"-ping-left"),t),u(e,"".concat(K,"-ping-right"),a),u(e,"".concat(K,"-ping-top"),o),u(e,"".concat(K,"-ping-bottom"),i),e)),ref:x},[l(P,{onResize:qe},{default:function(){return[l("div",{ref:C,class:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(D.value,"px, ").concat(R.value,"px)"),transition:je.value?"none":void 0}},[F,l(V,{ref:S,prefixCls:j,locale:h,editable:b,style:v(v({},0===F.length?void 0:L),{},{visibility:N?"hidden":null})},null),l("div",{class:r("".concat(j,"-ink-bar"),u({},"".concat(j,"-ink-bar-animated"),s.inkBar)),style:He.value},null)])]}})])]}}),l(H,v(v({},n),{},{removeAriaLabel:null==h?void 0:h.removeAriaLabel,ref:k,prefixCls:j,tabs:ze.value,class:!N&&Be.value}),B(y,["moreIcon"])),l(Je,{position:"right",prefixCls:j,extra:y.rightExtra},null),l(Je,{position:"right",prefixCls:j,extra:y.tabBarExtraContent},null)])}}}),Q=n({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=U(),a=t.tabs,n=t.prefixCls;return function(){var t=e.id,o=e.activeKey,i=e.animated,r=e.tabPosition,c=e.rtl,v=e.destroyInactiveTabPane,s=i.tabPane,d=n.value,f=a.value.findIndex((function(e){return e.key===o}));return l("div",{class:"".concat(d,"-content-holder")},[l("div",{class:["".concat(d,"-content"),"".concat(d,"-content-").concat(r),u({},"".concat(d,"-content-animated"),s)],style:f&&s?u({},c?"marginRight":"marginLeft","-".concat(f,"00%")):null},[a.value.map((function(e){return S(e.node,{key:e.key,prefixCls:d,tabKey:e.key,id:t,animated:s,active:e.key===o,destroyInactiveTabPane:v})}))])])}}});const ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){ae(e,t,a[t])}))}return e}function ae(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ne=function(e,t){var a=te({},e,t.attrs);return l(I,te({},a,{icon:ee}),null)};ne.displayName="PlusOutlined",ne.inheritAttrs=!1;const oe=ne;var le=0,ie=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:g.any}};var re=n({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:v(v({},w(ie(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var a=t.attrs,n=t.slots;N(!(void 0!==e.onPrevClick||void 0!==e.onNextClick),"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),N(!(void 0!==e.tabBarExtraContent),"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),N(!(void 0!==n.tabBarExtraContent),"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=D("tabs",e),b=i.prefixCls,p=i.direction,y=i.size,h=i.rootPrefixCls,m=o((function(){return"rtl"===p.value})),g=o((function(){var t=e.animated,a=e.tabPosition;return!1===t||["left","right"].includes(a)?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!0}:v({inkBar:!0,tabPane:!1},"object"===K(t)?t:{})})),x=s(!1),C=d(x,2),k=C[0],T=C[1];f((function(){T(L())}));var E=F((function(){var t;return null===(t=e.tabs[0])||void 0===t?void 0:t.key}),{value:o((function(){return e.activeKey})),defaultValue:e.defaultActiveKey}),P=d(E,2),S=P[0],I=P[1],w=s((function(){return e.tabs.findIndex((function(e){return e.key===S.value}))})),O=d(w,2),A=O[0],M=O[1];c((function(){var t,a=e.tabs.findIndex((function(e){return e.key===S.value}));-1===a&&(a=Math.max(0,Math.min(A.value,e.tabs.length-1)),I(null===(t=e.tabs[a])||void 0===t?void 0:t.key));M(a)}));var j=F(null,{value:o((function(){return e.id}))}),W=d(j,2),q=W[0],z=W[1],G=o((function(){return k.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition}));f((function(){e.id||(z("rc-tabs-".concat(le)),le+=1)}));var V=function(t,a){var n;null===(n=e.onTabClick)||void 0===n||n.call(e,t,a);var o,l=t!==S.value;(I(t),l)&&(null===(o=e.onChange)||void 0===o||o.call(e,t))};return Y({tabs:o((function(){return e.tabs})),prefixCls:b}),function(){var t,o,i,c=e.id,s=e.type,d=e.tabBarGutter,f=e.tabBarStyle,p=e.locale,x=e.destroyInactiveTabPane,C=e.renderTabBar,T=void 0===C?n.renderTabBar:C,E=e.onTabScroll,P=e.hideAdd,I=e.centered,w={id:q.value,activeKey:S.value,animated:g.value,tabPosition:G.value,rtl:m.value,mobile:k.value};"editable-card"===s&&(o={onEdit:function(t,a){var n,o=a.key,l=a.event;null===(n=e.onEdit)||void 0===n||n.call(e,"add"===t?l:o,t)},removeIcon:function(){return l(R,null,null)},addIcon:n.addIcon?n.addIcon:function(){return l(oe,null,null)},showAdd:!0!==P});var O=v(v({},w),{},{moreTransitionName:"".concat(h.value,"-slide-up"),editable:o,locale:p,tabBarGutter:d,onTabClick:V,onTabScroll:E,style:f});i=T?T(v(v({},O),{},{DefaultTabBar:_})):l(_,O,B(n,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var A=b.value;return l("div",v(v({},a),{},{id:c,class:r(A,"".concat(A,"-").concat(G.value),(t={},u(t,"".concat(A,"-").concat(y.value),y.value),u(t,"".concat(A,"-card"),["card","editable-card"].includes(s)),u(t,"".concat(A,"-editable-card"),"editable-card"===s),u(t,"".concat(A,"-centered"),I),u(t,"".concat(A,"-mobile"),k.value),u(t,"".concat(A,"-editable"),"editable-card"===s),u(t,"".concat(A,"-rtl"),m.value),t),a.class)}),[i,l(Q,v(v({destroyInactiveTabPane:x},w),{},{animated:g.value}),null)])}}});const ue=n({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:w(ie(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var a=t.attrs,n=t.slots,o=t.emit,i=function(e){o("update:activeKey",e),o("change",e)};return function(){var t,o=O(null===(t=n.default)||void 0===t?void 0:t.call(n)).map((function(e){if(M(e)){for(var t=v({},e.props||{}),a=0,n=Object.entries(t);a<n.length;a++){var o=d(n[a],2),l=o[0],i=o[1];delete t[l],t[j(l)]=i}var r=e.children||{},u=void 0!==e.key?e.key:void 0,c=t.tab,s=void 0===c?r.tab:c,f=t.disabled,b=t.forceRender,p=t.closable,y=t.animated,h=t.active,m=t.destroyInactiveTabPane;return v(v({key:u},t),{},{node:e,closeIcon:r.closeIcon,tab:s,disabled:""===f||f,forceRender:""===b||b,closable:""===p||p,animated:""===y||y,active:""===h||h,destroyInactiveTabPane:""===m||m})}return null})).filter((function(e){return e}));return l(re,v(v(v({},A(e,["onUpdate:activeKey"])),a),{},{onChange:i,tabs:o}),n)}}});export{ue as T};