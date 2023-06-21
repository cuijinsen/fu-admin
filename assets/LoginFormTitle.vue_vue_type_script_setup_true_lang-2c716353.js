var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var l in s||(s={}))r.call(s,l)&&n(e,l,s[l]);if(t)for(var l of t(s))o.call(s,l)&&n(e,l,s[l]);return e},l=(e,t,r)=>new Promise(((o,n)=>{var s=e=>{try{a(r.next(e))}catch(t){n(t)}},l=e=>{try{a(r.throw(e))}catch(t){n(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,l);a((r=r.apply(e,t)).next())}));import{s as a,e as i,q as c,h as u,a as g,o as d,f as m,t as f}from"./index-d32d699d.js";var y=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(y||{});const p=a(0);function h(){function e(e){p.value=e}return{setLoginState:e,getLoginState:i((()=>p.value)),handleBackLogin:function(){e(0)}}}function P(e){return{validForm:function(){return l(this,null,(function*(){const t=u(e);if(!t)return;return yield t.validate()}))}}}function v(e){const{t:t}=c(),r=i((()=>E(t("sys.login.accountPlaceholder")))),o=i((()=>E(t("sys.login.passwordPlaceholder")))),n=i((()=>E(t("sys.login.smsPlaceholder")))),a=i((()=>E(t("sys.login.mobilePlaceholder")))),g=(e,r)=>l(this,null,(function*(){return r?Promise.resolve():Promise.reject(t("sys.login.policyPlaceholder"))})),d=e=>(r,o)=>l(this,null,(function*(){return o?o!==e?Promise.reject(t("sys.login.diffPwd")):Promise.resolve():Promise.reject(t("sys.login.passwordPlaceholder"))}));return{getFormRules:i((()=>{const t=u(r),l=u(o),i={sms:u(n),mobile:u(a)};switch(u(p)){case 1:return s({account:t,password:l,confirmPassword:[{validator:d(null==e?void 0:e.password),trigger:"change"}],policy:[{validator:g,trigger:"change"}]},i);case 2:return s({account:t},i);case 3:return i;default:return{account:t,password:l}}}))}}function E(e){return[{required:!0,message:e,trigger:"change"}]}const O={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},S=g({__name:"LoginFormTitle",setup(e){const{t:t}=c(),{getLoginState:r}=h(),o=i((()=>({[y.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[y.LOGIN]:t("sys.login.signInFormTitle"),[y.REGISTER]:t("sys.login.signUpFormTitle"),[y.MOBILE]:t("sys.login.mobileSignInFormTitle"),[y.QR_CODE]:t("sys.login.qrSignInFormTitle")}[u(r)])));return(e,t)=>(d(),m("h2",O,f(o.value),1))}});export{y as L,S as _,v as a,P as b,h as u};