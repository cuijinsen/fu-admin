import{m as e,aZ as n,eA as t,eB as a,S as r,a as i,s as u,Y as o,cp as l,R as s,_ as c,aq as v,cf as d,a4 as f,e as p,ah as g,K as m,Q as b,c8 as h,au as y,U as S,V as N,d2 as E,c7 as w,cn as I,T as x}from"./index-d32d699d.js";const M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?Object(arguments[n]):{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){B(e,n,t[n])}))}return e}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var A=function(t,a){var r=k({},t,a.attrs);return e(n,k({},r,{icon:M}),null)};A.displayName="UpOutlined",A.inheritAttrs=!1;const F=A;function D(){return"function"==typeof BigInt}function C(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),(n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(n="0".concat(n));var a=n||"0",r=a.split("."),i=r[0]||"0",u=r[1]||"0";"0"===i&&"0"===u&&(t=!1);var o=t?"-":"";return{negative:t,negativeStr:o,trimStr:a,integerStr:i,decimalStr:u,fullStr:"".concat(o).concat(a)}}function T(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function O(e){var n=String(e);if(T(e)){var t=Number(n.slice(n.indexOf("e-")+2)),a=n.match(/\.(\d+)/);return null!=a&&a[1]&&(t+=a[1].length),t}return n.includes(".")&&q(n)?n.length-n.indexOf(".")-1:0}function _(e){var n=String(e);if(T(e)){if(e>Number.MAX_SAFE_INTEGER)return String(D()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(D()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(O(n))}return C(n).fullStr}function q(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}function P(e){return!e&&0!==e&&!Number.isNaN(e)||!String(e).trim()}var R=function(){function e(n){a(this,e),r(this,"origin",""),P(n)?this.empty=!0:(this.origin=String(n),this.number=Number(n))}return t(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var t=Number(n);if(Number.isNaN(t))return this;var a=this.number+t;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var r=Math.max(O(this.number),O(t));return new e(a.toFixed(r))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.isInvalidate()?"":_(this.number):this.origin}}]),e}(),z=function(){function e(n){if(a(this,e),r(this,"origin",""),P(n))this.empty=!0;else if(this.origin=String(n),"-"===n||Number.isNaN(n))this.nan=!0;else{var t=n;if(T(t)&&(t=Number(t)),q(t="string"==typeof t?t:_(t))){var i=C(t);this.negative=i.negative;var u=i.trimStr.split(".");this.integer=BigInt(u[0]);var o=u[1]||"0";this.decimal=BigInt(o),this.decimalLen=o.length}else this.nan=!0}}return t(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var n="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(n)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var t=new e(n);if(t.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,t.getDecimalStr().length),r=C((this.alignDecimal(a)+t.alignDecimal(a)).toString()),i=r.negativeStr,u=r.trimStr,o="".concat(i).concat(u.padStart(a+1,"0"));return new e("".concat(o.slice(0,-a),".").concat(o.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.isInvalidate()?"":C("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function j(e){return D()?new z(e):new R(e)}function G(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var r=C(e),i=r.negativeStr,u=r.integerStr,o=r.decimalStr,l="".concat(n).concat(o),s="".concat(i).concat(u);if(t>=0){var c=Number(o[t]);return c>=5&&!a?G(j(e).add("".concat(i,"0.").concat("0".repeat(t)).concat(10-c)).toString(),n,t,a):0===t?s:"".concat(s).concat(n).concat(o.padEnd(t,"0").slice(0,t))}return".0"===l?s:"".concat(s).concat(l)}const V=i({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(n,t){var a=t.slots,i=t.emit,v=u(),d=function(e,n){e.preventDefault(),i("step",n),v.value=setTimeout((function e(){i("step",n),v.value=setTimeout(e,200)}),600)},f=function(){clearTimeout(v.value)};return o((function(){f()})),function(){if(l())return null;var t=n.prefixCls,i=n.upDisabled,u=n.downDisabled,o="".concat(t,"-handler"),v=s(o,"".concat(o,"-up"),r({},"".concat(o,"-up-disabled"),i)),p=s(o,"".concat(o,"-down"),r({},"".concat(o,"-down-disabled"),u)),g={unselectable:"on",role:"button",onMouseup:f,onMouseleave:f},m=a.upNode,b=a.downNode;return e("div",{class:"".concat(o,"-wrap")},[e("span",c(c({},g),{},{onMousedown:function(e){d(e,!0)},"aria-label":"Increase Value","aria-disabled":i,class:v}),[(null==m?void 0:m())||e("span",{unselectable:"on",class:"".concat(t,"-handler-up-inner")},null)]),e("span",c(c({},g),{},{onMousedown:function(e){d(e,!1)},"aria-label":"Decrease Value","aria-disabled":u,class:p}),[(null==b?void 0:b())||e("span",{unselectable:"on",class:"".concat(t,"-handler-down-inner")},null)])])}}});var H=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],$=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},L=function(e){var n=j(e);return n.isInvalidate()?null:n},U=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const W=i({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:c(c({},U()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(n,t){var a=t.attrs,i=t.slots,l=t.emit,y=t.expose,S=u(),N=u(!1),E=u(!1),w=u(!1),I=u(j(n.value));var x,M=function(e,t){if(!t)return n.precision>=0?n.precision:Math.max(O(e),O(n.step))},k=function(e){var t=String(e);if(n.parser)return n.parser(t);var a=t;return n.decimalSeparator&&(a=a.replace(n.decimalSeparator,".")),a.replace(/[^\w.-]+/g,"")},B=u(""),A=function(e,t){if(n.formatter)return n.formatter(e,{userTyping:t,input:String(B.value)});var a="number"==typeof e?_(e):e;if(!t){var r=M(a,t);if(q(a)&&(n.decimalSeparator||r>=0))a=G(a,n.decimalSeparator||".",r)}return a},F=(x=n.value,I.value.isInvalidate()&&["string","number"].includes(f(x))?Number.isNaN(x)?"":x:A(I.value.toString(),!1));function D(e,n){B.value=A(e.isInvalidate()?e.toString(!1):e.toString(!n),n)}B.value=F;var C,T,P=p((function(){return L(n.max)})),R=p((function(){return L(n.min)})),z=p((function(){return!(!P.value||!I.value||I.value.isInvalidate())&&P.value.lessEquals(I.value)})),U=p((function(){return!(!R.value||!I.value||I.value.isInvalidate())&&I.value.lessEquals(R.value)})),W=function(e,n){var t=u(null);return[function(){try{var n=e.value,a=n.selectionStart,r=n.selectionEnd,i=n.value,u=i.substring(0,a),o=i.substring(r);t.value={start:a,end:r,value:i,beforeTxt:u,afterTxt:o}}catch(l){}},function(){if(e.value&&t.value&&n.value)try{var a=e.value.value,r=t.value,i=r.beforeTxt,u=r.afterTxt,o=r.start,l=a.length;if(a.endsWith(u))l=a.length-t.value.afterTxt.length;else if(a.startsWith(i))l=i.length;else{var s=i[o-1],c=a.indexOf(s,o-1);-1!==c&&(l=c+1)}e.value.setSelectionRange(l,l)}catch(d){v(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(d.message))}}]}(S,N),X=g(W,2),K=X[0],Q=X[1],Y=function(e){return P.value&&!e.lessEquals(P.value)?P.value:R.value&&!R.value.lessEquals(e)?R.value:null},Z=function(e){return!Y(e)},J=function(e,t){var a,r=e,i=Z(r)||r.isEmpty();if(r.isEmpty()||t||(r=Y(r)||r,i=!0),!n.readonly&&!n.disabled&&i){var u,o=r.toString(),l=M(o,t);if(l>=0&&(r=j(G(o,".",l))),!r.equals(I.value))a=r,void 0===n.value&&(I.value=a),null===(u=n.onChange)||void 0===u||u.call(n,r.isEmpty()?null:$(n.stringMode,r)),void 0===n.value&&D(r,t);return r}return I.value},ee=(C=u(0),T=function(){d.cancel(C.value)},o((function(){T()})),function(e){T(),C.value=d((function(){e()}))}),ne=function e(t){var a;if(K(),B.value=t,!w.value){var r=j(k(t));r.isNaN()||J(r,!0)}null===(a=n.onInput)||void 0===a||a.call(n,t),ee((function(){var a=t;n.parser||(a=t.replace(/。/g,".")),a!==t&&e(a)}))},te=function(){w.value=!0},ae=function(){w.value=!1,ne(S.value.value)},re=function(e){ne(e.target.value)},ie=function(e){var t,a;if(!(e&&z.value||!e&&U.value)){E.value=!1;var r=j(n.step);e||(r=r.negate());var i=(I.value||j(0)).add(r.toString()),u=J(i,!1);null===(t=n.onStep)||void 0===t||t.call(n,$(n.stringMode,u),{offset:n.step,type:e?"up":"down"}),null===(a=S.value)||void 0===a||a.focus()}},ue=function(e){var t=j(k(B.value)),a=t;a=t.isNaN()?I.value:J(t,e),void 0!==n.value?D(I.value,!1):a.isNaN()||D(a,!1)},oe=function(e){var t,a=e.which;(E.value=!0,a===h.ENTER)&&(w.value||(E.value=!1),ue(!1),null===(t=n.onPressEnter)||void 0===t||t.call(n,e));!1!==n.keyboard&&!w.value&&[h.UP,h.DOWN].includes(a)&&(ie(h.UP===a),e.preventDefault())},le=function(){E.value=!1},se=function(e){ue(!1),N.value=!1,E.value=!1,l("blur",e)};return m((function(){return n.precision}),(function(){I.value.isInvalidate()||D(I.value,!1)}),{flush:"post"}),m((function(){return n.value}),(function(){var e=j(n.value);I.value=e;var t=j(k(B.value));e.equals(t)&&E.value&&!n.formatter||D(e,E.value)}),{flush:"post"}),m(B,(function(){n.formatter&&Q()}),{flush:"post"}),m((function(){return n.disabled}),(function(e){e&&(N.value=!1)})),y({focus:function(){var e;null===(e=S.value)||void 0===e||e.focus()},blur:function(){var e;null===(e=S.value)||void 0===e||e.blur()}}),function(){var t,u=c(c({},a),n),o=u.prefixCls,v=void 0===o?"rc-input-number":o,d=u.min,f=u.max,p=u.step,g=void 0===p?1:p;u.defaultValue,u.value;var m=u.disabled,h=u.readonly;u.keyboard;var y=u.controls,E=void 0===y||y,w=u.autofocus;u.stringMode,u.parser,u.formatter,u.precision,u.decimalSeparator,u.onChange,u.onInput,u.onPressEnter,u.onStep;var x=u.lazy,M=u.class,k=u.style,A=b(u,H),F=i.upHandler,D=i.downHandler,C="".concat(v,"-input"),T={};return x?T.onChange=re:T.onInput=re,e("div",{class:s(v,M,(t={},r(t,"".concat(v,"-focused"),N.value),r(t,"".concat(v,"-disabled"),m),r(t,"".concat(v,"-readonly"),h),r(t,"".concat(v,"-not-a-number"),I.value.isNaN()),r(t,"".concat(v,"-out-of-range"),!I.value.isInvalidate()&&!Z(I.value)),t)),style:k,onKeydown:oe,onKeyup:le},[E&&e(V,{prefixCls:v,upDisabled:z.value,downDisabled:U.value,onStep:ie},{upNode:F,downNode:D}),e("div",{class:"".concat(C,"-wrap")},[e("input",c(c(c({autofocus:w,autocomplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":f,"aria-valuenow":I.value.isInvalidate()?null:I.value.toString(),step:g},A),{},{ref:S,class:C,value:B.value,disabled:m,readonly:h,onFocus:function(e){N.value=!0,l("focus",e)}},T),{},{onBlur:se,onCompositionstart:te,onCompositionend:ae}),null)])])}}});function X(e){return null!=e}var K=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],Q=U(),Y=i({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:c(c({},Q),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:x.any,addonAfter:x.any,prefix:x.any,"onUpdate:value":Q.onChange,valueModifiers:Object}),slots:["addonBefore","addonAfter","prefix"],setup:function(n,t){var a=t.emit,i=t.expose,o=t.attrs,l=t.slots,v=S(),d=N("input-number",n),f=d.prefixCls,p=d.size,g=d.direction,h=u(void 0===n.value?n.defaultValue:n.value),y=u(!1);m((function(){return n.value}),(function(){h.value=n.value}));var x=u(null);i({focus:function(){var e;null===(e=x.value)||void 0===e||e.focus()},blur:function(){var e;null===(e=x.value)||void 0===e||e.blur()}});var M=function(e){void 0===n.value&&(h.value=e),a("update:value",e),a("change",e),v.onFieldChange()},k=function(e){y.value=!1,a("blur",e),v.onFieldBlur()},B=function(e){y.value=!0,a("focus",e)};return function(){var t,a,i,u,v=c(c({},o),n),d=v.class,m=v.bordered,S=v.readonly,N=v.style,A=v.addonBefore,D=void 0===A?null===(t=l.addonBefore)||void 0===t?void 0:t.call(l):A,C=v.addonAfter,T=void 0===C?null===(a=l.addonAfter)||void 0===a?void 0:a.call(l):C,O=v.prefix,_=void 0===O?null===(i=l.prefix)||void 0===i?void 0:i.call(l):O,q=v.valueModifiers,P=void 0===q?{}:q,R=b(v,K),z=f.value,j=p.value,G=s((r(u={},"".concat(z,"-lg"),"large"===j),r(u,"".concat(z,"-sm"),"small"===j),r(u,"".concat(z,"-rtl"),"rtl"===g.value),r(u,"".concat(z,"-readonly"),S),r(u,"".concat(z,"-borderless"),!m),u),d),V=e(W,c(c({},w(R,["size","defaultValue"])),{},{ref:x,lazy:!!P.lazy,value:h.value,class:G,prefixCls:z,readonly:S,onChange:M,onBlur:k,onFocus:B}),{upHandler:function(){return e(F,{class:"".concat(z,"-handler-up-inner")},null)},downHandler:function(){return e(E,{class:"".concat(z,"-handler-down-inner")},null)}}),H=X(D)||X(T);if(X(_)){var $,L=s("".concat(z,"-affix-wrapper"),(r($={},"".concat(z,"-affix-wrapper-focused"),y.value),r($,"".concat(z,"-affix-wrapper-disabled"),n.disabled),r($,"".concat(z,"-affix-wrapper-rtl"),"rtl"===g.value),r($,"".concat(z,"-affix-wrapper-readonly"),S),r($,"".concat(z,"-affix-wrapper-borderless"),!m),r($,"".concat(d),!H&&d),$));V=e("div",{class:L,style:N,onMouseup:function(){return x.value.focus()}},[e("span",{class:"".concat(z,"-prefix")},[_]),V])}if(H){var U,Q="".concat(z,"-group"),Y="".concat(Q,"-addon"),Z=D?e("div",{class:Y},[D]):null,J=T?e("div",{class:Y},[T]):null,ee=s("".concat(z,"-wrapper"),Q,r({},"".concat(Q,"-rtl"),"rtl"===g.value)),ne=s("".concat(z,"-group-wrapper"),(r(U={},"".concat(z,"-group-wrapper-sm"),"small"===j),r(U,"".concat(z,"-group-wrapper-lg"),"large"===j),r(U,"".concat(z,"-group-wrapper-rtl"),"rtl"===g.value),U),d);V=e("div",{class:ne,style:N},[e("div",{class:ee},[Z,V,J])])}return I(V,{style:N})}}});const Z=y(Y,{install:function(e){return e.component(Y.name,Y),e}});export{Z as I};