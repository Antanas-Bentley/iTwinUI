import{r as e,B as g,c as y,V as B}from"./index-DcTlL2oN.js";import{i as k,S as p}from"./colors-DN-6A0ES.js";const S=t=>t?k(t)?p[t]:t:"",x={away:"Away",busy:"Busy",offline:"Offline",online:"Online"},E=e.forwardRef((t,i)=>{const{size:n="small",status:s,abbreviation:a,image:r,backgroundColor:l,title:u,translatedStatusTitles:o,className:d,style:c,...f}=t,m={...x,...o};return e.createElement(g,{as:"span",className:y("iui-avatar",d),"data-iui-size":n!=="medium"?n:void 0,"data-iui-status":s,title:u,style:{backgroundColor:S(l),...c},ref:i,...f},r?null:a==null?void 0:a.substring(0,2),r,s?e.createElement(B,null,m[s]):null)});export{E as A};
