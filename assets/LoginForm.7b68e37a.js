var I=(s,r,l)=>new Promise((o,c)=>{var i=u=>{try{g(l.next(u))}catch(p){c(p)}},S=u=>{try{g(l.throw(u))}catch(p){c(p)}},g=u=>u.done?o(u.value):Promise.resolve(u.value).then(i,S);g((l=l.apply(s,r)).next())});import{n as t,r as B,a as M,I as P,c as N,b as U,s as V,v as F,w as q,f as W,i as e,o as H,h as Q,x as E,y as R,z as a,B as m,t as f,C as y,m as J,q as X,D as Y,F as Z,E as K,G as ee}from"./index.b74cf1bc.js";import{C as te}from"./index.35afe08d.js";/* empty css              *//* empty css               */import{D as re}from"./index.76f0947d.js";import{u as le,a as se,L as b,_ as ae,b as oe}from"./LoginFormTitle.c9e0039d.js";import{F as D}from"./Form.38c81947.js";import{G as ne}from"./GithubFilled.b27b84e4.js";import{W as ie,A as ce}from"./WechatFilled.18956558.js";import{C as ue,R as de}from"./index.be7c702f.js";import"./Checkbox.e80d61eb.js";import"./Col.d211a93e.js";import"./useFlexGapSupport.2ae4dc05.js";import"./_baseIteratee.b387a4e9.js";import"./get.ef800ccd.js";import"./useSize.6193d609.js";var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"}}]},name:"google-circle",theme:"filled"},fe=me;function z(s){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(l).filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable}))),o.forEach(function(c){ge(s,c,l[c])})}return s}function ge(s,r,l){return r in s?Object.defineProperty(s,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[r]=l,s}var _=function(r,l){var o=z({},r,l.attrs);return t(B,z({},o,{icon:fe}),null)};_.displayName="GoogleCircleFilled";_.inheritAttrs=!1;var pe=_,ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"}}]},name:"twitter-circle",theme:"filled"},ye=ve;function G(s){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(l).filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable}))),o.forEach(function(c){be(s,c,l[c])})}return s}function be(s,r,l){return r in s?Object.defineProperty(s,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[r]=l,s}var O=function(r,l){var o=G({},r,l.attrs);return t(B,G({},o,{icon:ye}),null)};O.displayName="TwitterCircleFilled";O.inheritAttrs=!1;var we=O;const Be=M({__name:"LoginForm",setup(s){const r=ue,l=de,o=D.Item,c=P.Password,{t:i}=N(),{notification:S,createErrorModal:g}=ee(),{prefixCls:u}=U("login"),p=V(),{setLoginState:w,getLoginState:L}=le(),{getFormRules:j}=se(),h=F(),x=F(!1),T=F(!1),v=q({account:"root",password:"123456"}),{validForm:A}=oe(h),$=W(()=>e(L)===b.LOGIN);function k(){return I(this,null,function*(){const C=yield A();if(!!C)try{x.value=!0;const n=yield p.login(K({grantType:"1",password:C.password,username:C.account,mode:"none"}));n&&S.success({message:i("sys.login.loginSuccessTitle"),description:`${i("sys.login.loginSuccessDesc")}: ${n.realName}`,duration:3})}catch(n){g({title:i("sys.api.errorTip"),content:n.message||i("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${u}`)||document.body})}finally{x.value=!1}})}return(C,n)=>(H(),Q(Z,null,[E(t(ae,{class:"enter-x"},null,512),[[R,e($)]]),E(t(e(D),{class:"p-4 enter-x",model:v,rules:e(j),ref_key:"formRef",ref:h,onKeypress:Y(k,["enter"])},{default:a(()=>[t(e(o),{name:"account",class:"enter-x"},{default:a(()=>[t(e(P),{size:"large",value:v.account,"onUpdate:value":n[0]||(n[0]=d=>v.account=d),placeholder:e(i)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),t(e(o),{name:"password",class:"enter-x"},{default:a(()=>[t(e(c),{size:"large",visibilityToggle:"",value:v.password,"onUpdate:value":n[1]||(n[1]=d=>v.password=d),placeholder:e(i)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),t(e(l),{class:"enter-x"},{default:a(()=>[t(e(r),{span:12},{default:a(()=>[t(e(o),null,{default:a(()=>[t(e(te),{checked:T.value,"onUpdate:checked":n[2]||(n[2]=d=>T.value=d),size:"small"},{default:a(()=>[m(f(e(i)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),t(e(r),{span:12},{default:a(()=>[t(e(o),{style:{"text-align":"right"}},{default:a(()=>[t(e(y),{type:"link",size:"small",onClick:n[3]||(n[3]=d=>e(w)(e(b).RESET_PASSWORD))},{default:a(()=>[m(f(e(i)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(e(o),{class:"enter-x"},{default:a(()=>[t(e(y),{type:"primary",size:"large",block:"",onClick:k,loading:x.value},{default:a(()=>[m(f(e(i)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),t(e(l),{class:"enter-x"},{default:a(()=>[t(e(r),{md:8,xs:24},{default:a(()=>[t(e(y),{block:"",onClick:n[4]||(n[4]=d=>e(w)(e(b).MOBILE))},{default:a(()=>[m(f(e(i)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),t(e(r),{md:8,xs:24,class:"!my-2 !md:my-0 xs:mx-0 md:mx-2"},{default:a(()=>[t(e(y),{block:"",onClick:n[5]||(n[5]=d=>e(w)(e(b).QR_CODE))},{default:a(()=>[m(f(e(i)("sys.login.qrSignInFormTitle")),1)]),_:1})]),_:1}),t(e(r),{md:6,xs:24},{default:a(()=>[t(e(y),{block:"",onClick:n[6]||(n[6]=d=>e(w)(e(b).REGISTER))},{default:a(()=>[m(f(e(i)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1}),t(e(re),{class:"enter-x"},{default:a(()=>[m(f(e(i)("sys.login.otherSignIn")),1)]),_:1}),J("div",{class:X(["flex justify-evenly enter-x",`${e(u)}-sign-in-way`])},[t(e(ne)),t(e(ie)),t(e(ce)),t(e(pe)),t(e(we))],2)]),_:1},8,["model","rules","onKeypress"]),[[R,e($)]])],64))}});export{Be as default};
