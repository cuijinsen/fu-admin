import{ah as W,v as y,i as c,fr as w,fs as x,N as _,ft as b,av as $,dH as g,ay as B,a as R,cE as I,aA as C,o as P,j as z,z as m,n as u,B as k}from"./index.67a988db.js";import{P as E}from"./index.8b70e5a3.js";import"./index.66e9e120.js";import"./index.253e4730.js";import"./useSize.1222867c.js";import"./eagerComputed.841da0b8.js";import"./useWindowSizeFn.4d53064e.js";import"./useContentViewHeight.97060834.js";import"./ArrowLeftOutlined.7c433682.js";import"./index.5b15cd76.js";const M=Symbol("watermark-dom");function N(n=y(document.body)){const r=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:o}=t;i({height:e,width:o})}),s=M.toString(),l=W(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),w(e,r))};function v(t){const e=document.createElement("canvas"),o=300,d=240;Object.assign(e,{width:o,height:d});const a=e.getContext("2d");return a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o/20,d)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${v(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const o=c(n);if(!o)return s;const{clientHeight:d,clientWidth:a}=o;return i({str:t,width:a,height:d}),o.appendChild(e),s};function h(t){p(t),x(document.documentElement,r),$()&&_(()=>{f()})}return{setWatermark:h,clear:f}}const S=R({components:{CollapseContainer:I,PageWrapper:E},setup(){const n=y(null),{setWatermark:r,clear:s}=N();return{setWatermark:r,clear:s,areaRef:n}}});function A(n,r,s,l,f,v){const i=C("a-button"),p=C("CollapseContainer"),h=C("PageWrapper");return P(),z(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:m(()=>[u(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:m(()=>[u(i,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=t=>n.setWatermark("WaterMark Info"))},{default:m(()=>[k(" Create ")]),_:1}),u(i,{color:"error",class:"mr-2",onClick:n.clear},{default:m(()=>[k(" Clear ")]),_:1},8,["onClick"]),u(i,{color:"warning",class:"mr-2",onClick:r[1]||(r[1]=t=>n.setWatermark("WaterMark Info New"))},{default:m(()=>[k(" Reset ")]),_:1})]),_:1})]),_:1})}var q=B(S,[["render",A]]);export{q as default};