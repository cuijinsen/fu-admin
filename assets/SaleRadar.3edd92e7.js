import{a as i,v as r,a9 as s,o as l,j as n,z as m,m as d,bo as u,i as p}from"./index.b74cf1bc.js";import{C as f}from"./index.907f0eac.js";import"./index.283fe8c9.js";/* empty css               */import{u as c}from"./useECharts.e47fe942.js";import"./index.f63e810c.js";import"./index.be7c702f.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useRefs.3b949e72.js";import"./PlusOutlined.ccd4e1ca.js";const O=i({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=r(null),{setOptions:o}=c(t);return s(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(h,g)=>(l(),n(p(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:m(()=>[d("div",{ref_key:"chartRef",ref:t,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{O as default};