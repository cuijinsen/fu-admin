var e=(e,t,s)=>new Promise(((n,a)=>{var r=e=>{try{i(s.next(e))}catch(t){a(t)}},o=e=>{try{i(s.throw(e))}catch(t){a(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,o);i((s=s.apply(e,t)).next())}));import{_ as t}from"./index-5d4f29a6.js";import{s}from"./sysDeptApi-2c1e26d4.js";import{a as n,s as a,bs as r,o,f as i,m as l,h as c,eK as d}from"./index-d32d699d.js";const u={class:"bg-white m-4 mr-0 overflow-hidden"},f=n({__name:"DeptTree",emits:["select"],setup(n,{expose:f,emit:m}){const p=a([]),h=a();function v(){return e(this,null,(function*(){p.value=yield s()}))}function y(e,t){m("select",e[0])}function x(){return"ant-design:apartment-outlined"}return r((()=>{v()})),f({refresh:function(t){return e(this,null,(function*(){yield v();const e=t?[t]:[];h.value.setSelectedKeys(e);const s=d(p.value,t);h.value.setExpandedKeys(t?[...s,t]:[])}))}}),(e,s)=>(o(),i("div",u,[l(c(t),{ref_key:"treeRef",ref:h,title:"部门列表",toolbar:"",search:"",treeData:p.value,clickRowToExpand:!1,fieldNames:{key:"id",title:"name"},showIcon:"",renderIcon:x,onSelect:y},null,8,["treeData"])]))}});export{f as _};