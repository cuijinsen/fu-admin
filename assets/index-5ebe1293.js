import{a as e,bg as t,h as r,o as a,f as s}from"./index-d32d699d.js";const p=e({__name:"index",setup(e){const{currentRoute:p,replace:d}=t(),{params:n,query:o}=r(p),{path:c,_redirect_type:i="path"}=n;Reflect.deleteProperty(n,"_redirect_type"),Reflect.deleteProperty(n,"path");const y=Array.isArray(c)?c.join("/"):c;return d("name"===i?{name:y,query:o,params:n}:{path:y.startsWith("/")?y:"/"+y,query:o}),(e,t)=>(a(),s("div"))}});export{p as default};
