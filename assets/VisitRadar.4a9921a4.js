import{a as r,v as i,a9 as u,o as n,j as s,z as l,m,bo as d,i as p}from"./index.b74cf1bc.js";import{C as f}from"./index.907f0eac.js";import"./index.283fe8c9.js";/* empty css               */import{u as c}from"./useECharts.e47fe942.js";import"./index.f63e810c.js";import"./index.be7c702f.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useRefs.3b949e72.js";import"./PlusOutlined.ccd4e1ca.js";const z=r({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=i(null),{setOptions:o}=c(t);return u(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"\u7535\u8111"},{name:"\u5145\u7535\u5668"},{name:"\u8033\u673A"},{name:"\u624B\u673A"},{name:"Ipad"},{name:"\u8033\u673A"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(h,g)=>(n(),s(p(f),{title:"\u8F6C\u5316\u7387",loading:a.loading},{default:l(()=>[m("div",{ref_key:"chartRef",ref:t,style:d({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{z as default};