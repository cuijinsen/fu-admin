import{u as l,L as d,_ as u}from"./LoginFormTitle.ae5660dc.js";import{a as _,c as f,f as p,i as e,o as g,h as x,n as t,m as C,z as a,B as n,t as o,C as h,F as k,k as S}from"./index.437c4479.js";import{D as y}from"./index.f52f7562.js";import{Q as B}from"./index.ef13a15d.js";import"./download.e2b2d1d2.js";import"./base64Conver.08b9f4ec.js";const v={class:"enter-x min-w-64 min-h-64"},j=_({__name:"QrCodeForm",setup(L){const r="https://vvbin.cn/next/login",{t:s}=f(),{handleBackLogin:i,getLoginState:c}=l(),m=p(()=>e(c)===d.QR_CODE);return(w,D)=>e(m)?(g(),x(k,{key:0},[t(u,{class:"enter-x"}),C("div",v,[t(e(B),{value:r,class:"enter-x flex justify-center xl:justify-start",width:280}),t(e(y),{class:"enter-x"},{default:a(()=>[n(o(e(s)("sys.login.scanSign")),1)]),_:1}),t(e(h),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(i)},{default:a(()=>[n(o(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])])],64)):S("",!0)}});export{j as default};