var p=(e,o,t)=>new Promise((s,r)=>{var l=a=>{try{i(t.next(a))}catch(n){r(n)}},f=a=>{try{i(t.throw(a))}catch(n){r(n)}},i=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,f);i((t=t.apply(e,o)).next())});import{ay as c,a as m,v as u,O as d,bu as h,o as _,h as g,bo as b}from"./index.01016e1b.js";import{u as y,r as S}from"./useECharts.0747408d.js";import{m as v}from"./data.29a5f341.js";import"./index.f3db527a.js";const w=m({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=u(null),{setOptions:o}=y(e);return d(()=>p(this,null,function*(){const t=yield(yield h(()=>import("./china.a225b5d5.js"),[])).default;S("china",t),o({visualMap:[{min:0,max:1e3,left:"left",top:"bottom",text:["\u9AD8","\u4F4E"],calculable:!1,orient:"horizontal",inRange:{color:["#e0ffff","#006edd"],symbolSize:[30,100]}}],tooltip:{trigger:"item",backgroundColor:"rgba(0, 0, 0, .6)",textStyle:{color:"#fff",fontSize:12}},series:[{name:"iphone4",type:"map",map:"china",label:{show:!0,color:"rgb(249, 249, 249)",fontSize:10},itemStyle:{areaColor:"#2f82ce",borderColor:"#0DAAC1"},data:v}]})})),{chartRef:e}}});function C(e,o,t,s,r,l){return _(),g("div",{ref:"chartRef",style:b({height:e.height,width:e.width})},null,4)}var M=c(w,[["render",C]]);export{M as default};