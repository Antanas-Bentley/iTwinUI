import{r as t,v as T,I as y,B as l,c as v,T as k,j as e,R as b}from"./index-DqM7PEDh.js";import{S as D}from"./Placeholder-dQYzmf0-.js";import{S as j}from"./Settings-CJ9kJ7Xs.js";import{W as O}from"./WithCSSTransition-DwlwF3Op.js";import{S as M}from"./SvgChevronRight-B_lhtDBK.js";import{B as F}from"./Button-t-hwzJ-C.js";import{T as E}from"./Text-UFuJharM.js";import{A as V}from"./Anchor-4U1OlUFa.js";const A=t.createContext(void 0),I=t.forwardRef((s,i)=>{const{items:c,secondaryItems:n,expanderPlacement:a="top",className:m,isExpanded:p,onExpanderClick:o,submenu:x,isSubmenuOpen:d=!1,wrapperProps:r,contentProps:u,topProps:g,bottomProps:f,...R}=s,[S,N]=T(!1,p),w=t.createElement(y,{label:"Toggle icon labels","aria-expanded":S,className:"iui-sidenav-button iui-expand",size:"small",onClick:t.useCallback(()=>{N(z=>!z),o==null||o()},[o,N])},t.createElement(M,null));return t.createElement(A.Provider,{value:S},t.createElement(l,{...r,className:v("iui-side-navigation-wrapper",r==null?void 0:r.className),ref:i},t.createElement(l,{as:"div",className:v("iui-side-navigation",{"iui-expanded":S,"iui-collapsed":!S},m),...R},a==="top"&&w,t.createElement(l,{as:"div",...u,className:v("iui-sidenav-content",u==null?void 0:u.className)},t.createElement(l,{as:"div",...g,className:v("iui-top",g==null?void 0:g.className)},c),t.createElement(l,{as:"div",...f,className:v("iui-bottom",f==null?void 0:f.className)},n)),a==="bottom"&&w),x&&t.createElement(O,{in:d,dimension:"width",timeout:200,classNames:"iui"},x)))}),h=t.forwardRef((s,i)=>{const{className:c,children:n,isActive:a=!1,disabled:m=!1,isSubmenuOpen:p=!1,...o}=s,x=t.useContext(A)===!0,d=t.createElement(F,{className:v("iui-sidenav-button",{"iui-submenu-open":p},c),"data-iui-active":a,size:"large",disabled:m,ref:i,...o},n);return x?d:t.createElement(k,{content:n,placement:"right",ariaStrategy:"none"},d)}),L=t.forwardRef((s,i)=>{const{children:c,className:n,...a}=s;return t.createElement(l,{className:v("iui-side-navigation-submenu",n),ref:i,...a},t.createElement(l,{className:"iui-side-navigation-submenu-content"},c))}),_=t.forwardRef((s,i)=>{const{children:c,actions:n,className:a,...m}=s;return t.createElement(l,{className:v("iui-side-navigation-submenu-header",a),ref:i,...m},t.createElement(l,{className:"iui-side-navigation-submenu-header-label"},c),n&&t.createElement(l,{className:"iui-side-navigation-submenu-header-actions"},n))}),C=s=>t.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...s},t.createElement("path",{d:"M5.472 15.978a.616.616 0 01-.756-.466L1.521 2.845a.66.66 0 01.437-.803.615.615 0 01.755.465l3.194 12.667a.662.662 0 01-.435.804zm7.159-8.09a6.694 6.694 0 01-1.834.183c-.602-.009-1.197-.05-1.8-.057a6.743 6.743 0 00-1.831.184 3.595 3.595 0 00-1.871 1.156l-.592-2.345-.516-2.043c-.175-.699-.365-1.446-.59-2.344a3.6 3.6 0 011.87-1.157 6.645 6.645 0 011.834-.18c.601.006 1.196.047 1.798.053a6.608 6.608 0 001.833-.181A3.606 3.606 0 0012.803 0l.592 2.343c.175.699.34 1.347.516 2.044l.589 2.346a3.616 3.616 0 01-1.87 1.156z",fillRule:"evenodd"})),B=s=>t.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...s},t.createElement("path",{d:"M3.07 7h12.19a.7.7 0 01.68 1l-1.66 5a1.53 1.53 0 01-1.35 1H.74a.7.7 0 01-.68-1l1.66-5a1.53 1.53 0 011.35-1z"}),t.createElement("path",{d:"M.77 7.68A2.54 2.54 0 013.07 6H14V5a1 1 0 00-1-1H6V3a1 1 0 00-1-1H1a1 1 0 00-1 1v7z"})),H=s=>t.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...s},t.createElement("path",{d:"M2 14.6s0 .4.3.4H7v-4h2v4h4.5c.5 0 .5-.4.5-.4V8.5L8 4 2 8.5zm12-9.3V2h-2v1.8L8 1 0 6.7 1 8l7-5 7 5 1-1.3z"})),U={decorators:[s=>e.jsx("div",{style:{height:"calc(100vh - 24px)"},children:e.jsx(s,{})})],title:"SideNavigation"},X=()=>e.jsx(I,{items:[e.jsx(h,{startIcon:e.jsx(H,{}),children:"Home"},0),e.jsx(h,{startIcon:e.jsx(C,{}),children:"Issues"},1),e.jsx(h,{startIcon:e.jsx(B,{}),disabled:!0,children:"Documents"},2)],secondaryItems:[e.jsx(h,{startIcon:e.jsx(j,{}),children:"Settings"},3)]}),Y=()=>{const[s,i]=b.useState(0),c=[...Array(3).fill(null)].map((n,a)=>e.jsx(h,{startIcon:e.jsx(D,{}),isActive:s===a,onClick:()=>i(a),children:`App ${a}`},a));return e.jsx(I,{items:c,secondaryItems:[e.jsx(h,{startIcon:e.jsx(j,{}),children:"Settings"},3)]})},Z=()=>{var x;const s=[{label:"Home",icon:e.jsx(H,{})},{label:"Issues",icon:e.jsx(C,{})},{label:"Documents",icon:e.jsx(B,{})},{label:"Settings",icon:e.jsx(j,{})}],[i,c]=b.useState(2),[n,a]=b.useState(!0),[m,p]=b.useState(0),o=s.map(({label:d,icon:r},u)=>e.jsx(h,{startIcon:r,isActive:i===u,isSubmenuOpen:d==="Documents"&&n,onClick:()=>{d!=="Documents"?(c(u),p(-1),a(!1)):a(g=>!g)},children:d},u));return e.jsxs("div",{style:{display:"flex",height:"100%"},children:[e.jsx(I,{expanderPlacement:"bottom",items:o.slice(0,3),secondaryItems:[o[3]],isSubmenuOpen:n,submenu:e.jsxs(L,{children:[e.jsx(_,{actions:e.jsx(y,{styleType:"borderless",children:e.jsx(j,{})}),children:e.jsx("span",{children:"Documents"})}),e.jsx(E,{variant:"leading",children:"All documents"}),e.jsx("ul",{children:[...Array(10).fill(null)].map((d,r)=>e.jsx("li",{children:e.jsxs(V,{onClick:()=>{c(2),p(r)},children:["Folder ",r]})},r))})]})}),e.jsxs("div",{style:{background:"var(--iui-color-background-disabled)",padding:16,flexGrow:1,display:"grid",placeContent:"center",placeItems:"center"},children:[e.jsxs(E,{children:[(x=s[i])==null?void 0:x.label," page"]}),e.jsx(E,{isMuted:!0,children:m>=0&&`Contents of Folder ${m}`})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as ActiveItem,X as Basic,Z as Submenu,U as default};
