import{a as e,s as t,J as a,bv as r,L as o,o as i,f as l,bp as n}from"./index-d32d699d.js";import{u as s,r as f}from"./useECharts-8dd670ef.js";import{m as c}from"./data-cbecb255.js";import"./index-071e5974.js";const d=o(e({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=t(null),{setOptions:o}=s(e);return a((()=>{return e=this,t=null,a=function*(){const e=yield(yield r((()=>import("./china-f8477eea.js")),[])).default;f("china",e),o({visualMap:[{min:0,max:1e3,left:"left",top:"bottom",text:["高","低"],calculable:!1,orient:"horizontal",inRange:{color:["#e0ffff","#006edd"],symbolSize:[30,100]}}],tooltip:{trigger:"item",backgroundColor:"rgba(0, 0, 0, .6)",textStyle:{color:"#fff",fontSize:12}},series:[{name:"iphone4",type:"map",map:"china",label:{show:!0,color:"rgb(249, 249, 249)",fontSize:10},itemStyle:{areaColor:"#2f82ce",borderColor:"#0DAAC1"},data:c}]})},new Promise(((r,o)=>{var i=e=>{try{n(a.next(e))}catch(t){o(t)}},l=e=>{try{n(a.throw(e))}catch(t){o(t)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,l);n((a=a.apply(e,t)).next())}));var e,t,a})),{chartRef:e}}}),[["render",function(e,t,a,r,o,s){return i(),l("div",{ref:"chartRef",style:n({height:e.height,width:e.width})},null,4)}]]);export{d as default};