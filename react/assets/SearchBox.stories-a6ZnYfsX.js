import{r,j as e,R as d}from"./index-DfTeYc2P.js";import{S as t}from"./SearchBox-mYeoh6Vb.js";import{T as u}from"./Text-DLI7yAAu.js";import{D as s}from"./Divider-CxqSwvb8.js";import"./InputFlexContainer-DdpT7pfg.js";import"./Icon-o4Qd3D8w.js";const n=a=>r.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...a},r.createElement("path",{d:"M4.807 6h6.395a.28.28 0 01.24.443L8.27 9.9a.34.34 0 01-.481 0L4.566 6.443A.27.27 0 014.806 6z"})),o=a=>r.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...a},r.createElement("path",{d:"M4.807 9.997h6.395a.28.28 0 00.24-.443L8.27 6.097a.34.34 0 00-.48 0h-.001L4.566 9.554a.27.27 0 00.24.443z"})),E={title:"SearchBox"},S=()=>e.jsx(t,{inputProps:{placeholder:"Basic search"}}),b=()=>e.jsxs(t,{children:[e.jsx(t.Button,{title:"Search button"}),e.jsx(t.Input,{placeholder:"Basic search with custom interactions"}),e.jsx(u,{isMuted:!0,variant:"body",as:"p",style:{paddingRight:"var(--iui-size-s)",alignSelf:"center"},children:"0/3"}),e.jsx(s,{orientation:"vertical"}),e.jsx(t.Button,{"aria-label":"Previous result",children:e.jsx(o,{})}),e.jsx(t.Button,{"aria-label":"Next result",children:e.jsx(n,{})})]}),v=()=>e.jsx(t,{inputProps:{placeholder:"Search with warning"},status:"warning"}),w=()=>e.jsx(t,{expandable:!0,inputProps:{placeholder:"Expandable search"}}),g=()=>e.jsxs(t,{expandable:!0,children:[e.jsx(t.CollapsedState,{}),e.jsxs(t.ExpandedState,{children:[e.jsx(t.Input,{placeholder:"Expandable search with custom interactions"}),e.jsx(t.Button,{"aria-label":"Previous result",children:e.jsx(o,{})}),e.jsx(t.Button,{"aria-label":"Next result",children:e.jsx(n,{})}),e.jsx(s,{orientation:"vertical"}),e.jsx(t.CollapseButton,{})]})]}),C=()=>e.jsx(t,{size:"small",inputProps:{placeholder:"Search..."}}),f=()=>{const[a,l]=d.useState(!1),i=()=>{console.log("Expanding searchbox"),l(!0)},c=()=>{console.log("Collapsing searchbox"),l(!1)};return e.jsxs(t,{expandable:!0,isExpanded:a,onExpand:i,onCollapse:c,children:[e.jsx(t.CollapsedState,{children:e.jsx(t.ExpandButton,{})}),e.jsxs(t.ExpandedState,{children:[e.jsx(t.Input,{placeholder:"Test"}),e.jsx(t.CollapseButton,{}),e.jsx(s,{orientation:"vertical"}),e.jsx(t.Button,{"aria-label":"Previous result",children:e.jsx(o,{})}),e.jsx(t.Button,{"aria-label":"Next result",children:e.jsx(n,{})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Basic,b as BasicWithCustomItems,v as BasicWithStatus,w as Expandable,g as ExpandableWithCustomItems,C as Small,f as WithCustomAction,E as default};
