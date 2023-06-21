import{a as e,I as s,b as a,r as l,s as t,v as o,e as n,o as r,f as i,w as c,x as u,m as d,y as m,h as p,z as f,t as g,B as y,C as _,F as x,q as v,D as h,E as k}from"./index-d32d699d.js";import{C as w}from"./index-e84e313c.js";import"./index-cd646f4b.js";import{F as b}from"./index-06c8a48f.js";import{u as C,a as S,_ as E,L as T,b as F}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-2c716353.js";import"./index-22735145.js";import{C as R,R as j}from"./index-8e2feec8.js";const I=e({__name:"LoginForm",setup(e){const I=R,L=j,z=b.Item,P=s.Password,{t:B}=v(),{notification:D,createErrorModal:M}=k(),{prefixCls:O}=a("login"),q=l(),{setLoginState:N,getLoginState:U}=C(),{getFormRules:$}=S(),G=t(),K=t(!1),A=t(!1),Q=o({account:"",password:""}),{validForm:W}=F(G),H=n((()=>p(U)===T.LOGIN));function J(){return e=this,s=null,a=function*(){const e=yield W();if(e)try{K.value=!0;const s=yield q.login(h({grantType:"1",password:e.password,username:e.account,mode:"none"}));s&&D.success({message:B("sys.login.loginSuccessTitle"),description:`${B("sys.login.loginSuccessDesc")}: ${s.realName}`,duration:3})}catch(s){M({title:B("sys.api.errorTip"),content:s.message||B("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${O}`)||document.body})}finally{K.value=!1}},new Promise(((l,t)=>{var o=e=>{try{r(a.next(e))}catch(s){t(s)}},n=e=>{try{r(a.throw(e))}catch(s){t(s)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,n);r((a=a.apply(e,s)).next())}));var e,s,a}return(e,a)=>(r(),i(x,null,[c(d(E,{class:"enter-x"},null,512),[[u,H.value]]),c(d(p(b),{ref_key:"formRef",ref:G,model:Q,rules:p($),class:"p-4 enter-x",onKeypress:_(J,["enter"])},{default:m((()=>[d(p(z),{class:"enter-x",name:"account"},{default:m((()=>[d(p(s),{value:Q.account,"onUpdate:value":a[0]||(a[0]=e=>Q.account=e),placeholder:p(B)("sys.login.userName"),class:"fix-auto-fill",size:"large"},null,8,["value","placeholder"])])),_:1}),d(p(z),{class:"enter-x",name:"password"},{default:m((()=>[d(p(P),{value:Q.password,"onUpdate:value":a[1]||(a[1]=e=>Q.password=e),placeholder:p(B)("sys.login.password"),size:"large",visibilityToggle:""},null,8,["value","placeholder"])])),_:1}),d(p(L),{class:"enter-x"},{default:m((()=>[d(p(I),{span:12},{default:m((()=>[d(p(z),null,{default:m((()=>[d(p(w),{checked:A.value,"onUpdate:checked":a[2]||(a[2]=e=>A.value=e),size:"small"},{default:m((()=>[f(g(p(B)("sys.login.rememberMe")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),d(p(I),{span:12},{default:m((()=>[d(p(z),{style:{"text-align":"right"}},{default:m((()=>[d(p(y),{size:"small",type:"link",onClick:a[3]||(a[3]=e=>p(N)(p(T).RESET_PASSWORD))},{default:m((()=>[f(g(p(B)("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(p(z),{class:"enter-x"},{default:m((()=>[d(p(y),{loading:K.value,block:"",size:"large",type:"primary",onClick:J},{default:m((()=>[f(g(p(B)("sys.login.loginButton")),1)])),_:1},8,["loading"])])),_:1}),d(p(L),{class:"enter-x"},{default:m((()=>[d(p(I),{md:8,xs:24},{default:m((()=>[d(p(y),{block:"",onClick:a[4]||(a[4]=e=>p(N)(p(T).MOBILE))},{default:m((()=>[f(g(p(B)("sys.login.mobileSignInFormTitle")),1)])),_:1})])),_:1}),d(p(I),{md:8,xs:24,class:"!my-2 !md:my-0 xs:mx-0 md:mx-2"},{default:m((()=>[d(p(y),{block:"",onClick:a[5]||(a[5]=e=>p(N)(p(T).QR_CODE))},{default:m((()=>[f(g(p(B)("sys.login.qrSignInFormTitle")),1)])),_:1})])),_:1}),d(p(I),{md:6,xs:24},{default:m((()=>[d(p(y),{block:"",onClick:a[6]||(a[6]=e=>p(N)(p(T).REGISTER))},{default:m((()=>[f(g(p(B)("sys.login.registerButton")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","onKeypress"]),[[u,H.value]])],64))}});export{I as _};