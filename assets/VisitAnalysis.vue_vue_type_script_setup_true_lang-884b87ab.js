var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{u as i}from"./useECharts-8dd670ef.js";import{b as s}from"./props-7ae7f0b4.js";import{a as l,s as p,J as n,o as y,f as b,bp as c}from"./index-d32d699d.js";const d=l({__name:"VisitAnalysis",props:((e,i)=>{for(var s in i||(i={}))r.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))a.call(i,s)&&o(e,s,i[s]);return e})({},s),setup(e){const t=p(null),{setOptions:r}=i(t);return n((()=>{r({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},xAxis:{type:"category",boundaryGap:!1,data:[...new Array(18)].map(((e,t)=>`${t+6}:00`)),splitLine:{show:!0,lineStyle:{width:1,type:"solid",color:"rgba(226,226,226,0.5)"}},axisTick:{show:!1}},yAxis:[{type:"value",max:8e4,splitNumber:4,axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0.2)","rgba(226,226,226,0.2)"]}}}],grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},series:[{smooth:!0,data:[111,222,4e3,18e3,33333,55555,66666,33333,14e3,36e3,66666,44444,22222,11111,4e3,2e3,500,333,222,111],type:"line",areaStyle:{},itemStyle:{color:"#5ab1ef"}},{smooth:!0,data:[33,66,88,333,3333,5e3,18e3,3e3,1200,13e3,22e3,11e3,2221,1201,390,198,60,30,22,11],type:"line",areaStyle:{},itemStyle:{color:"#019680"}}]})})),(e,r)=>(y(),b("div",{ref_key:"chartRef",ref:t,style:c({height:e.height,width:e.width})},null,4))}});export{d as _};
