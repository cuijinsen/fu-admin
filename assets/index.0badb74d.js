import{u as m}from"./useContextMenu.d2657ca3.js";import{ay as d,a as C,cE as _,aA as l,o as f,j as b,z as t,n as a,B as c,G as x}from"./index.b74cf1bc.js";import{P as h}from"./index.94d6a8fb.js";import"./index.76f0947d.js";import"./index.3c1ff6fb.js";import"./index.cb3d1a7e.js";import"./useSize.6193d609.js";import"./eagerComputed.05d44b0c.js";import"./useWindowSizeFn.59b3a207.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.b833bb1c.js";const w=C({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=m(),{createMessage:n}=x();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}});function N(e,n,s,i,o,g){const r=l("a-button"),p=l("CollapseContainer"),u=l("PageWrapper");return f(),b(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(p,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[c(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1}),a(p,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[c(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var V=d(w,[["render",N]]);export{V as default};