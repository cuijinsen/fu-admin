import{ay as l,a as m,b8 as f,bm as d,c as _,bf as g,fu as E,f as C,aA as e,o as L,j as h,z as a,n as c,b1 as b}from"./index.67a988db.js";import{B}from"./index.d60ca517.js";const T=m({name:"ErrorAction",components:{Icon:f,Tooltip:d,Badge:B},setup(){const{t:o}=_(),{push:n}=g(),t=E(),r=C(()=>t.getErrorLogListCount);function s(){n(b.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,y){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return L(),h(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var R=l(T,[["render",k]]);export{R as default};