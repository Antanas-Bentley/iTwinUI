import{p as w,R as i,n as S,B as N,c as y,u as T,d as W,r as v,j as e,I as h}from"./index-BCHkuJyl.js";import{S as g}from"./ChevronRightDouble-CcPmk779.js";import{L as B}from"./List-CRJDY97C.js";import{L as K}from"./ListItem-DzNkp6A4.js";import{L as F}from"./Label-BYaOw0Zo.js";import{g as z}from"./focusable-DQv_vybo.js";import"./LinkAction-CQmEXePC.js";const C=w("iui-transfer-list-wrapper");C.displayName="TransferList";const I=i.forwardRef((r,c)=>{const{className:b,children:n,...d}=r,t=S(),[s,f]=i.useState(t);return i.createElement(N,{as:"div",className:y("iui-transfer-list-listbox-wrapper",b),ref:c,...d},i.createElement(j.Provider,{value:{labelId:s,setLabelId:f}},n))});I.displayName="TransferList.ListboxWrapper";const E=i.forwardRef((r,c)=>{const{children:b,className:n,...d}=r,{labelId:t}=T(j),[s,f]=i.useState(),p=i.useRef(null),o=W(p,c),a=i.useCallback(()=>{const l=z(p.current);return l.filter(m=>!l.some(L=>L.contains(m.parentElement)))},[]);i.useEffect(()=>{var m;const l=a();if(s!=null){(m=l==null?void 0:l[s])==null||m.focus();return}},[s,a]);const x=l=>{if(l.altKey)return;const m=a();if(!(m!=null&&m.length))return;const L=s??0;switch(l.key){case"ArrowDown":{f(Math.min(L+1,m.length-1)),l.preventDefault(),l.stopPropagation();break}case"ArrowUp":{f(Math.max(L-1,0)),l.preventDefault(),l.stopPropagation();break}}};return i.createElement(B,{className:y("iui-transfer-list-listbox",n),onKeyDown:x,role:"listbox","aria-multiselectable":!0,"aria-labelledby":t,tabIndex:0,ref:o,...d},b)});E.displayName="TransferList.Listbox";const D=i.forwardRef((r,c)=>{const{actionable:b=!0,disabled:n,onActiveChange:d,children:t,active:s,...f}=r,p=()=>b&&d&&d(!s),o=a=>{a.altKey||(a.key==="Enter"||a.key===" "||a.key==="Spacebar")&&(!n&&p(),a.preventDefault())};return i.createElement(K,{ref:c,onClick:p,onKeyDown:o,active:s,actionable:b,tabIndex:-1,role:"option","aria-disabled":n?"true":void 0,"aria-selected":s?"true":void 0,disabled:n,...f},t)});D.displayName="TransferList.Item";const O=i.forwardRef((r,c)=>{const{children:b,id:n,...d}=r,{labelId:t,setLabelId:s}=T(j);return i.useEffect(()=>{n&&n!==t&&s(n)},[n,t,s]),i.createElement(F,{as:"div",id:t,ref:c,...d},b)});O.displayName="TransferList.ListboxLabel";const k=w("iui-transfer-list-toolbar",{role:"toolbar"});k.displayName="TransferList.Toolbar";const u=Object.assign(C,{ListboxWrapper:I,Listbox:E,Item:D,ListboxLabel:O,Toolbar:k}),j=i.createContext(void 0),R=r=>v.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...r},v.createElement("path",{d:"M14.6 0L16 1.4 9.4 8l6.6 6.6-1.4 1.4-8-8zM8 0l1.4 1.4L2.8 8l6.6 6.6L8 16 0 8z"})),A=r=>v.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...r},v.createElement("path",{d:"M11.3 0l1.4 1.4L6.1 8l6.6 6.6-1.4 1.4-8-8z"})),M=r=>v.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...r},v.createElement("path",{d:"M4.7 0L3.3 1.4 9.9 8l-6.6 6.6L4.7 16l8-8z"})),Q={title:"TransferList"},V=()=>{const[r,c]=i.useState([{name:"Option 1",active:!1},{name:"Option 2",active:!1},{name:"Option 3",active:!1},{name:"Option 4",active:!1},{name:"Option 5",active:!1},{name:"Option 6",active:!1}]),[b,n]=i.useState([{name:"Option 7",active:!1}]),d=(t,s,f,p)=>{f(o=>{const a=[...o],x=[];return t.forEach(l=>{if(p||l.active===!0){const m=l;m.active=!1,a.push(m)}else x.push(l)}),s(x),a})};return e.jsxs(u,{children:[e.jsx(u.ListboxWrapper,{children:e.jsx(u.Listbox,{children:r==null?void 0:r.map((t,s)=>e.jsx(u.Item,{actionable:!0,active:t.active,onActiveChange:f=>{c(p=>{const o=[...p],a={...o[s]};return a.active=f,o[s]=a,o})},children:t.name},t.name))})}),e.jsxs(u.Toolbar,{children:[e.jsx(h,{styleType:"borderless",label:"Move Right All",onClick:()=>{d(r,c,n,!0)},children:e.jsx(g,{})}),e.jsx(h,{styleType:"borderless",label:"Move Right",onClick:()=>d(r,c,n,!1),children:e.jsx(M,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left",onClick:()=>d(b,n,c,!1),children:e.jsx(A,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left All",onClick:()=>d(b,n,c,!0),children:e.jsx(R,{})})]}),e.jsx(u.ListboxWrapper,{children:e.jsx(u.Listbox,{children:b.map((t,s)=>e.jsx(u.Item,{actionable:!0,active:t.active,onActiveChange:f=>{n(p=>{const o=[...p],a={...o[s]};return a.active=f,o[s]=a,o})},children:t.name},t.name))})})]})},X=()=>{const[r,c]=i.useState([{name:"Option 1",active:!1},{name:"Option 2",active:!1},{name:"Option 3",active:!1},{name:"Option 4",active:!1},{name:"Option 5",active:!1},{name:"Option 6",active:!1}]),[b,n]=i.useState([{name:"Option 7",active:!1}]),d=(t,s,f,p)=>{f(o=>{const a=[...o],x=[];return t.forEach(l=>{if(p||l.active===!0){const m=l;m.active=!1,a.push(m)}else x.push(l)}),s(x),a})};return e.jsxs(u,{children:[e.jsxs(u.ListboxWrapper,{children:[e.jsx(u.ListboxLabel,{children:"Options"}),e.jsx(u.Listbox,{children:r==null?void 0:r.map((t,s)=>e.jsx(u.Item,{actionable:!0,active:t.active,onActiveChange:f=>{c(p=>{const o=[...p],a={...o[s]};return a.active=f,o[s]=a,o})},children:t.name},t.name))})]}),e.jsxs(u.Toolbar,{children:[e.jsx(h,{styleType:"borderless",label:"Move Right All",onClick:()=>{d(r,c,n,!0)},children:e.jsx(g,{})}),e.jsx(h,{styleType:"borderless",label:"Move Right",onClick:()=>d(r,c,n,!1),children:e.jsx(M,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left",onClick:()=>d(b,n,c,!1),children:e.jsx(A,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left All",onClick:()=>d(b,n,c,!0),children:e.jsx(R,{})})]}),e.jsxs(u.ListboxWrapper,{children:[e.jsx(u.ListboxLabel,{children:"Applied"}),e.jsx(u.Listbox,{children:b.map((t,s)=>e.jsx(u.Item,{actionable:!0,active:t.active,onActiveChange:f=>{n(p=>{const o=[...p],a={...o[s]};return a.active=f,o[s]=a,o})},children:t.name},t.name))})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{V as Basic,X as WithLabel,Q as default};
