import{a as c,bf as p,i as _,o as i,h as l}from"./index.b74cf1bc.js";const h=c({__name:"index",setup(u){const{currentRoute:o,replace:a}=p(),{params:e,query:n}=_(o),{path:r,_redirect_type:s="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(s==="name"?{name:t,query:n,params:e}:{path:t.startsWith("/")?t:"/"+t,query:n}),(f,m)=>(i(),l("div"))}});export{h as default};
