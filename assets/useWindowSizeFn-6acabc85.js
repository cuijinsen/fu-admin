import{bw as e,ce as n,aD as t}from"./index-d32d699d.js";function i(i,s=150,r){let d=()=>{i()};const o=e(d,s);d=o;const a=()=>{r&&r.immediate&&d(),window.addEventListener("resize",d)},m=()=>{window.removeEventListener("resize",d)};return n((()=>{a()})),t((()=>{m()})),[a,m]}export{i as u};
