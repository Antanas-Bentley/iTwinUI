import{r as t,B as v,c as m,u as p,S as q,p as A,I as b,a as k,j as i}from"./index-DfTeYc2P.js";import{S as I}from"./Placeholder-CmC8obpM.js";import{S as E}from"./SmileyHappy-Ir1auMGW.js";import{I as M}from"./Icon-o4Qd3D8w.js";import{A as S}from"./Anchor-C6Ie7_fA.js";import"./Text-DLI7yAAu.js";const u=t.createContext(void 0),f=t.forwardRef((o,n)=>{const{children:s,type:a="informational",isSticky:r=!1,clickableText:l,clickableTextProps:c,onClose:d,...y}=o;return t.createElement(e.Wrapper,{type:a,isSticky:r,ref:n,...y},t.createElement(e.Icon,null),t.createElement(e.Message,null,s,l?t.createElement(e.Action,{...c},l):null),d?t.createElement(e.CloseButton,{onClick:d}):null)});f.displayName="Alert";const x=t.forwardRef((o,n)=>{const{children:s,className:a,type:r="informational",isSticky:l=!1,...c}=o;return t.createElement(v,{className:m("iui-alert",a),"data-iui-status":r,"data-iui-variant":l?"sticky":void 0,ref:n,...c},t.createElement(u.Provider,{value:{type:r}},s))});x.displayName="Alert.Wrapper";const g=t.forwardRef((o,n)=>{const{children:s,...a}=o,{type:r}=p(u),l=q[r];return t.createElement(M,{fill:r,ref:n,...a},s??t.createElement(l,null))});g.displayName="Alert.Icon";const h=A.span("iui-alert-message");h.displayName="Alert.Message";const C=t.forwardRef((o,n)=>{const{children:s,className:a,...r}=o,{type:l}=p(u);return t.createElement(S,{as:o.href?"a":"button",className:m("iui-button-base","iui-alert-link",a),underline:!0,"data-iui-status":l,ref:n,...r},s)});C.displayName="Alert.Action";const j=t.forwardRef((o,n)=>{const{children:s,...a}=o;return t.createElement(b,{styleType:"borderless",size:"small","aria-label":"Close",ref:n,...a},s??t.createElement(k,null))});j.displayName="Alert.CloseButton";const e=Object.assign(f,{Wrapper:x,Icon:g,Message:h,Action:C,CloseButton:j}),L={title:"Alert"},R=()=>i.jsxs(e.Wrapper,{type:"informational",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is an informational message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),U=()=>i.jsxs(e.Wrapper,{type:"positive",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is a positive message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),P=()=>i.jsxs(e.Wrapper,{type:"warning",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is a warning message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),z=()=>i.jsxs(e.Wrapper,{type:"negative",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is a negative message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),H=()=>i.jsxs("div",{style:{height:"150px",overflow:"overlay",textAlign:"justify",border:"solid 0.5px"},children:[i.jsxs(e.Wrapper,{type:"informational",isSticky:!0,children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is sticky!",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),i.jsx("p",{style:{margin:0,padding:"8px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),O=()=>i.jsxs(e.Wrapper,{type:"informational",children:[i.jsx(e.Icon,{}),i.jsx(e.Message,{children:"This is an empty info message."})]}),_=()=>i.jsxs(e.Wrapper,{type:"informational",children:[i.jsx(e.Icon,{children:i.jsx(E,{})}),i.jsx(e.Message,{children:"This is an info message with a custom icon."}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!"),children:i.jsx(I,{})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_ as CustomIcon,O as Empty,R as Informational,z as Negative,U as Positive,H as Sticky,P as Warning,L as default};
