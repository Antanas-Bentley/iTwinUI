import{r as s,c,B as b}from"./index-CwFMGc_c.js";import{I as y,S as E}from"./InputGrid-DRFwJEAe.js";import{L as v}from"./Label-BklEgSCi.js";const B=s.forwardRef((i,e)=>{const{className:a,children:t,disabled:o=!1,displayStyle:r="default",label:n,status:u,required:m=!1,labelProps:p,innerProps:l,message:d,svgIcon:g,messageProps:f,...I}=i;return s.createElement(y,{ref:e,as:"div",labelPlacement:r,className:c("iui-input-group-wrapper",a),"data-iui-status":u,...I},n&&s.createElement(v,{as:"label",required:m,disabled:o,...p},n),s.createElement(b,{as:"div",...l,className:c("iui-input-group",l==null?void 0:l.className)},t),s.createElement(P,{message:d,status:u,svgIcon:g,displayStyle:r,messageProps:f}))}),P=i=>{const{message:e,status:a,svgIcon:t,displayStyle:o,messageProps:r}=i;return e&&typeof e!="string"?e:e||a||t?s.createElement(E,{iconProps:{"aria-hidden":!0},startIcon:t,status:a,...r},o!=="inline"&&e):null};export{B as I};
