import{B as i,a as c}from"./index.d115f57c.js";import{a as p,ay as d,aA as r,o as m,j as M,z as o,n,B as l}from"./index.437c4479.js";import"./useWindowSizeFn.19d582eb.js";import"./FullscreenOutlined.01c6694a.js";const _=p({components:{BasicModal:i},setup(){const[e,{closeModal:t,setModalProps:a}]=c();return{register:e,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}});function f(e,t,a,C,E,B){const s=r("a-button"),u=r("BasicModal");return m(),M(u,{onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:o(()=>[n(s,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 ")]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:e.setModalProps},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var P=d(_,[["render",f]]);export{P as default};