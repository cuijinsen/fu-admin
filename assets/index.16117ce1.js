import{u as o,dK as e}from"./index.437c4479.js";const n=o();function l(t){return e.get({url:"/system/sysDict/selectDictModelWithList",params:t})}function i(t){return e.get({url:"/system/sysConfig/getConfigValue",params:t})}function a(t,s){return e.uploadFile({url:n.apiUrl+"/system/common/upload",onUploadProgress:s},t)}function r(t,s){return e.uploadImg({url:"http://localhost:7162/mchsApp/profession/HeyanBase/uploadHeyanOne",onUploadProgress:s},t)}export{r as a,i as g,l as s,a as u};