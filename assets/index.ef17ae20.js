import{M as E,a as F}from"./index.66dca059.js";import{P as C}from"./index.94d6a8fb.js";import{ay as k,a as w,v as p,aA as t,o as g,j as A,z as r,m as s,n as a,B as d,i as B}from"./index.b74cf1bc.js";import{C as D}from"./index.907f0eac.js";import"./index.283fe8c9.js";/* empty css               */import"./index.8d73dc63.js";import"./useWindowSizeFn.59b3a207.js";import"./FullscreenOutlined.2c5fc800.js";import"./index.3c1ff6fb.js";import"./index.cb3d1a7e.js";import"./useSize.6193d609.js";import"./eagerComputed.05d44b0c.js";import"./useContentViewHeight.e5c7a5a0.js";import"./ArrowLeftOutlined.3eadb42d.js";import"./index.b833bb1c.js";import"./index.f63e810c.js";import"./index.be7c702f.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./useRefs.3b949e72.js";import"./PlusOutlined.ccd4e1ca.js";const M=w({components:{MarkDown:E,PageWrapper:C,MarkdownViewer:F,ACard:D},setup(){const e=p(null),u=p(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function m(){const o=B(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function l(o){u.value=o}function i(){u.value=""}return{value:u,toggleTheme:m,markDownRef:e,handleChange:l,clearValue:i}}}),V={class:"mt-2"};function R(e,u,m,l,i,o){const n=t("a-button"),c=t("MarkDown"),f=t("MarkdownViewer"),_=t("a-card"),h=t("PageWrapper");return g(),A(h,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[s("div",null,[a(n,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[d(" \u9ED1\u6697\u4E3B\u9898 ")]),_:1},8,["onClick"]),a(n,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[d(" \u6E05\u7A7A\u5185\u5BB9 ")]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),s("div",V,[a(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[a(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var Y=k(M,[["render",R]]);export{Y as default};
