import{r as e,B as n,c as i,E as p,V as x,l as N}from"./index-DCZUONDF.js";const y=e.forwardRef((r,l)=>{const{value:t,indeterminate:d=t===void 0,labels:s=[],isAnimated:u=!1,status:o,className:c,labelGroupProps:a,...m}=r,f=N(t??100,0,100);return e.createElement(n,{className:i("iui-progress-indicator-linear",c),ref:l,"data-iui-status":o,"data-iui-indeterminate":d?"true":void 0,"data-iui-animated":u?"true":void 0,style:{"--iui-progress-percentage":`${f}%`},...m},e.createElement(p,null,t!==100&&e.createElement(x,null,"Loading."),e.createElement("slot",null)),s.length>0&&e.createElement(n,{as:"div",...a,className:i("iui-progress-indicator-linear-label",a==null?void 0:a.className)},s.map((g,E)=>e.createElement("span",{key:E},g))))});export{y as P};
