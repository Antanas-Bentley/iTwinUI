import{r as e,q as H,n as L,c as x,u as d,B as O,e as g,I as T,m as k,b as A}from"./index-7nKTUIFH.js";import{I as G}from"./Icon-EokrK5CX.js";import{I as J}from"./InputFlexContainer-dOco2Abc.js";const S=t=>e.createElement(H,{...t},e.createElement("path",{d:"m11 9.7c.7-1 1.1-2.2 1.1-3.5.1-3.5-2.7-6.2-6-6.2-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1c1.3 0 2.5-.4 3.5-1.1l4.9 4.9 1.4-1.4zm-5 .5c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1"})),i=e.createContext(void 0),K=e.forwardRef((t,s)=>{const{size:n,expandable:a=!1,isDisabled:l=!1,onCollapse:r,onExpand:o,isExpanded:c,children:u,inputProps:f,className:v,...w}=t,D=L(),[F,P]=e.useState(D),N=e.useRef(null),R=e.useRef(null),[q,z]=e.useState(c),y=c??q,M=()=>{z(!1),r==null||r(),queueMicrotask(()=>{var p;return(p=R.current)==null?void 0:p.focus({preventScroll:!0})})},j=()=>{z(!0),o==null||o(),queueMicrotask(()=>{var p;return(p=N.current)==null?void 0:p.focus({preventScroll:!0})})};return e.createElement(i.Provider,{value:{size:n,isDisabled:l,onCollapse:M,onExpand:j,inputRef:N,inputId:F,setInputId:P,openButtonRef:R,isExpanded:y,expandable:a}},e.createElement(J,{ref:s,className:x("iui-searchbox",{"iui-expandable-searchbox":a},v),size:n,isDisabled:l,"data-iui-expanded":y,...w},u??e.createElement(e.Fragment,null,e.createElement(h,null,e.createElement(E,null)),e.createElement(B,null,e.createElement(b,null),e.createElement(C,{...f}),a?e.createElement(I,null):null))))}),h=({children:t})=>{const{isExpanded:s,expandable:n}=d(i);return!n||s?null:e.createElement(e.Fragment,null,t??e.createElement(E,null))};h.displayName="SearchBox.CollapsedState";const B=({children:t})=>{const{isExpanded:s,expandable:n}=d(i);return n&&!s?null:e.createElement(e.Fragment,null,t)};B.displayName="SearchBox.ExpandedState";const b=e.forwardRef((t,s)=>{const{className:n,children:a,...l}=t;return e.createElement(G,{"aria-hidden":!0,className:x("iui-search-icon",n),ref:s,...l},a??e.createElement(S,null))});b.displayName="SearchBox.Icon";const C=e.forwardRef((t,s)=>{const{className:n,id:a,...l}=t,{inputId:r,setInputId:o,isDisabled:c,inputRef:u}=d(i);return e.useEffect(()=>{a&&a!==r&&o(a)},[a,r,o]),e.createElement(O,{as:"input",id:a??r,ref:g(s,u),role:"searchbox",type:"text",className:x("iui-search-input",n),disabled:c,...l})});C.displayName="SearchBox.Input";const m=e.forwardRef((t,s)=>{const{children:n,...a}=t,{size:l,isDisabled:r}=d(i);return e.createElement(T,{styleType:"borderless",size:l,ref:s,disabled:r,...a},n??e.createElement(S,null))});m.displayName="SearchBox.Button";const I=e.forwardRef((t,s)=>{const{children:n,onClick:a,...l}=t,{onCollapse:r,size:o,isDisabled:c}=d(i);return e.createElement(m,{ref:s,"aria-label":"Close searchbox",size:o,disabled:c,onClick:k(a,r),...l},n??e.createElement(A,null))});I.displayName="SearchBox.CollapseButton";const E=e.forwardRef((t,s)=>{const{children:n,className:a,onClick:l,...r}=t,{onExpand:o,size:c,isDisabled:u,openButtonRef:f}=d(i);return e.createElement(m,{ref:g(s,f),className:x("iui-searchbox-open-button",a),"aria-label":"Expand searchbox",size:c,disabled:u,onClick:k(l,o),...r},n??e.createElement(S,null))});E.displayName="SearchBox.ExpandButton";const Q=Object.assign(K,{Icon:b,Input:C,Button:m,CollapseButton:I,ExpandButton:E,ExpandedState:B,CollapsedState:h});Q.displayName="SearchBox";export{Q as S};
