import{r as n,B as E,c as u,u as f,p as v,a as D,m as z,n as P,S as F,j as a}from"./index-7nKTUIFH.js";import{I as B}from"./Icon-EokrK5CX.js";import{L as _}from"./LinkAction-Cm4bdjPi.js";import{S as H}from"./SvgChevronRight-yTtxq0rE.js";const b=n.createContext(void 0);b.displayName="ExpandableBlockContext";const h=n.forwardRef((t,l)=>{const{children:r,title:c,caption:s,endIcon:o,...i}=t;return n.createElement(e.Wrapper,{...i,ref:l},n.createElement(e.Trigger,{label:c,caption:s,endIcon:o}),n.createElement(e.Content,null,r))});h.displayName="ExpandableBlock";const C=n.forwardRef((t,l)=>{const{children:r,className:c,onToggle:s,style:o,isExpanded:i,status:x,size:p="default",styleType:d="default",disabled:m=!1,...W}=t,[S,R]=n.useState(i??!1),k=i??S,[A,L]=n.useState(void 0);return n.createElement(b.Provider,{value:{status:x,isExpanded:k,onToggle:s,size:p,styleType:d,disabled:m,setExpanded:R,children:r,descriptionId:A,setDescriptionId:L}},n.createElement(E,{className:u("iui-expandable-block",c),"data-iui-expanded":k,"data-iui-size":p,"data-iui-variant":d!=="default"?d:void 0,style:o,ref:l,...W},r))});C.displayName="ExpandableBlock.Wrapper";const j=n.forwardRef((t,l)=>{const{className:r,children:c,label:s,caption:o,expandIcon:i,endIcon:x,...p}=t,{disabled:d,status:m}=f(b);return n.createElement(_,{className:u("iui-expandable-header",r),"data-iui-disabled":d?"true":void 0,ref:l,...p},c??n.createElement(n.Fragment,null,i??n.createElement(e.ExpandIcon,null),n.createElement(e.LabelArea,null,n.createElement(e.Title,null,s),o&&n.createElement(e.Caption,null,o)),x||m?n.createElement(e.EndIcon,null,x):null))});j.displayName="ExpandableBlock.Trigger";const g=n.forwardRef((t,l)=>{const{className:r,children:c,...s}=t;return n.createElement(B,{className:u("iui-expandable-block-icon",r),ref:l,...s},c??n.createElement(H,{"aria-hidden":!0}))});g.displayName="ExpandableBlock.ExpandIcon";const I=v.span("iui-expandable-block-label");I.displayName="ExpandableBlock.LabelArea";const N=n.forwardRef((t,l)=>{const{className:r,children:c,onClick:s,...o}=t,{isExpanded:i,setExpanded:x,disabled:p,onToggle:d,descriptionId:m}=f(b);return n.createElement(D,{className:u("iui-expandable-block-title","iui-link-action",r),"aria-expanded":i,"aria-disabled":p,onClick:z(s,()=>{p||(x(!i),d==null||d(!i))}),ref:l,"aria-describedby":m,...o},c)});N.displayName="ExpandableBlock.Title";const y=n.forwardRef((t,l)=>{const r=P(),{setDescriptionId:c}=f(b);return n.useEffect(()=>(c(t.id||r),()=>c(void 0)),[t.id,r,c]),n.createElement(E,{ref:l,id:r,...t,className:u("iui-expandable-block-caption",t==null?void 0:t.className)})});y.displayName="ExpandableBlock.Caption";const T=n.forwardRef((t,l)=>{const{children:r,...c}=t,{status:s}=f(b),o=r??(s&&F[s]());return n.createElement(B,{fill:s,ref:l,...c},o)});T.displayName="ExpandableBlock.EndIcon";const w=n.forwardRef((t,l)=>{const{className:r,children:c,innerProps:s,...o}=t;return n.createElement(E,{className:u("iui-expandable-content",r),ref:l,...o},n.createElement(E,{...s},c))});w.displayName="ExpandableBlock.Content";const e=Object.assign(h,{Wrapper:C,Trigger:j,ExpandIcon:g,LabelArea:I,Title:N,Caption:y,EndIcon:T,Content:w}),G={title:"ExpandableBlock"},J=()=>a.jsx(e,{title:"Basic Block",children:"Content in block!"}),K=()=>a.jsxs(e.Wrapper,{children:[a.jsxs(e.Trigger,{children:[a.jsx(e.ExpandIcon,{}),a.jsxs(e.LabelArea,{children:[a.jsx(e.Title,{children:"Basic Block"}),a.jsx(e.Caption,{children:"basic caption"})]})]}),a.jsx(e.Content,{children:"Content in block!"})]}),Q=()=>a.jsx(a.Fragment,{children:[...Array(3).fill(null)].map((t,l)=>a.jsxs(e.Wrapper,{children:[a.jsx(e.Trigger,{label:`Basic Block #${l+1}`}),a.jsx(e.Content,{children:"Content in block!"})]},l))}),U=()=>a.jsxs(e.Wrapper,{status:"positive",children:[a.jsxs(e.Trigger,{children:[a.jsx(e.ExpandIcon,{}),a.jsx(e.LabelArea,{children:a.jsx(e.Title,{children:"Basic Block With Status"})}),a.jsx(e.EndIcon,{})]}),a.jsx(e.Content,{children:"Content in block!"})]}),V=()=>a.jsxs(e.Wrapper,{size:"small",children:[a.jsx(e.Trigger,{label:"Basic Block"}),a.jsx(e.Content,{children:"Content in block!"})]}),X=()=>a.jsxs(e.Wrapper,{styleType:"borderless",children:[a.jsx(e.Trigger,{label:"Basic Block"}),a.jsx(e.Content,{children:"Content in block!"})]}),Y=()=>a.jsxs(e.Wrapper,{disabled:!0,children:[a.jsx(e.Trigger,{label:"Disabled Block"}),a.jsx(e.Content,{children:"Content in block!"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Q as Accordion,J as Basic,X as Borderless,Y as Disabled,V as Small,U as StatusIcon,K as WithCaption,G as default};
