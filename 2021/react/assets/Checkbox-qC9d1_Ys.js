import{r as e,d as y,B as t,c as l}from"./index-DCZUONDF.js";import{P as R}from"./ProgressRadial-Cc0ZyUfU.js";const v=e.forwardRef((m,u)=>{const{className:p,disabled:c=!1,indeterminate:i=!1,label:r,status:n,variant:d="default",isLoading:s=!1,wrapperProps:b={},labelProps:f={},style:x,...h}=m,a=e.useRef(null),k=y(a,u);e.useEffect(()=>{a.current&&(a.current.indeterminate=i,a.current.checked=i?!1:a.current.checked)});const o=e.createElement(e.Fragment,null,e.createElement(t,{as:"input",className:l("iui-checkbox",{"iui-checkbox-visibility":d==="eyeball","iui-loading":s},p),style:x,disabled:c||s,type:"checkbox",ref:k,...h}),s&&e.createElement(R,{size:"x-small",indeterminate:!0})),{className:E,...N}=b,{className:g,...P}=f;return r?e.createElement(t,{as:"label",className:l("iui-checkbox-wrapper",{"iui-disabled":c,[`iui-${n}`]:!!n,"iui-loading":s},E),...N},o,r&&e.createElement(t,{as:"span",className:l("iui-checkbox-label",g),...P},r)):o});export{v as C};
