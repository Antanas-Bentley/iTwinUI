import{r as n,q,B as T,c as f,u as H,p,I as $,S as ee,j as e,R as ie}from"./index-DCZUONDF.js";import{S as ne}from"./Folder-C9HhMpOn.js";import{S as te}from"./Star-DtxEhizJ.js";import{D as ae}from"./DropdownMenu-B1kjU8JX.js";import{P as le}from"./ProgressRadial-Cc0ZyUfU.js";import{a as se}from"./LinkAction-BSLqULYt.js";import{s as re}from"./supports-h38Wrqg6.js";import{S as ce}from"./SvgCheckmark-C455eDNA.js";import{B as N}from"./Badge-CqlNgh4J.js";import{M as o}from"./MenuItem-BGNL_vfi.js";import{T as C}from"./TagContainer-CovtGkSK.js";import{T as j}from"./Tag-BzpDSlVR.js";import{B as M}from"./Button-BS1uiIuu.js";import{A as oe}from"./Avatar-bZgLeaTn.js";import{g as de}from"./colors-DN-6A0ES.js";import"./Popover-BLhm8qum.js";import"./focusable-DQv_vybo.js";import"./ListItem-D-z2ub0H.js";const me=t=>n.createElement(q,{...t},n.createElement("path",{d:"m4 8a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm4-2a2 2 0 1 0 2 2 2 2 0 0 0 -2-2zm6 0a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"})),ue=t=>n.createElement(q,{...t},n.createElement("path",{d:"M8 5a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zM4.535 7a.997.997 0 0 1-.499-.134l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 4.536 7zM1.94 12.5a1 1 0 0 1-.501-1.866l2.598-1.5a1 1 0 1 1 1 1.732l-2.598 1.5a.997.997 0 0 1-.499.134zM8 16a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zm6.061-3.5a.995.995 0 0 1-.499-.134l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5a1 1 0 0 1-.5 1.866zM11.465 7a1 1 0 0 1-.501-1.866l2.598-1.5a1 1 0 1 1 1 1.732l-2.598 1.5a.995.995 0 0 1-.5.134z"})),I=n.createContext(void 0);I.displayName="TileContext";const w=n.forwardRef((t,s)=>{const{className:l,status:a,variant:r,isNew:c,isSelected:m,isLoading:u,isDisabled:h,...x}=t,[d,b]=n.useState(!1),g=d;return n.createElement(I.Provider,{value:{status:a,variant:r,isNew:c,isSelected:m,isLoading:u,isActionable:g,isDisabled:h,setActionable:b}},n.createElement(T,{className:f("iui-tile",{"iui-folder":r==="folder","iui-new":c,"iui-selected":m,"iui-actionable":g,[`iui-${a}`]:!!a,"iui-loading":u},l),"aria-disabled":h,ref:s,...x}))});w.displayName="Tile.Wrapper";const B=n.forwardRef((t,s)=>{const{onClick:l,children:a,href:r,...c}=t,{setActionable:m,isDisabled:u}=H(I);return n.useEffect(()=>{re()||m(!0)},[m]),n.createElement(se,{as:t.href?"a":"button",href:r,onClick:u?void 0:l,"aria-disabled":u,ref:s,...c},a)});B.displayName="Tile.Action";const S=p("iui-tile-thumbnail");S.displayName="Tile.ThumbnailArea";const A=n.forwardRef((t,s)=>{const{className:l,url:a,children:r,...c}=t;return a?n.createElement(T,{className:f("iui-tile-thumbnail-picture",l),style:{backgroundImage:typeof a=="string"?`url(${a})`:void 0},ref:s,...c}):n.createElement(T,{className:f("iui-thumbnail-icon",l),ref:s,...c},r)});A.displayName="Tile.TileThumbnailPicture";const L=p("iui-tile-thumbnail-quick-action");L.displayName="Tile.QuickAction";const D=p("iui-tile-thumbnail-type-indicator");D.displayName="Tile.TypeIndicator";const _=n.forwardRef((t,s)=>{const{className:l,children:a,...r}=t;return n.createElement($,{className:l,styleType:"borderless",size:"small",ref:s,...r},a)});_.displayName="Tile.IconButton";const v=p("iui-tile-thumbnail-badge-container");v.displayName="Tile.BadgeContainer";const G=n.forwardRef((t,s)=>{const{className:l,children:a,name:r,...c}=t;return n.createElement(T,{className:f("iui-tile-name",l),ref:s,...c},a??r)});v.displayName="Tile.Name";const z=n.forwardRef((t,s)=>{const{children:l,className:a,...r}=t,{status:c,isLoading:m,isSelected:u,isNew:h}=H(I),x=!!c&&ee[c];let d;return x&&(d=n.createElement(x,{"aria-hidden":!0})),m&&(d=n.createElement(le,{size:"x-small","aria-hidden":!0,indeterminate:!0})),u&&(d=n.createElement(ce,{"aria-hidden":!0})),h&&(d=n.createElement(ue,{"aria-hidden":!0})),l||d?n.createElement(T,{className:f("iui-tile-status-icon",a),ref:s,...r},l??d):null});z.displayName="Tile.NameIcon";const P=p.span("iui-tile-name-label");P.displayName="Tile.NameLabel";const R=p("iui-tile-content");R.displayName="Tile.ContentArea";const W=p("iui-tile-description");W.displayName="Tile.Description";const O=p("iui-tile-metadata");O.displayName="Tile.Metadata";const U=n.forwardRef((t,s)=>{const{className:l,children:a=[],buttonProps:r,...c}=t,[m,u]=n.useState(!1);return n.createElement(T,{className:f("iui-tile-more-options",{"iui-visible":m},l),ref:s,...c},n.createElement(ae,{onVisibleChange:u,menuItems:h=>a==null?void 0:a.map(x=>n.cloneElement(x,{onClick:d=>{var b,g;h(),(g=(b=x.props).onClick)==null||g.call(b,d)}}))},n.createElement($,{styleType:"borderless",size:"small","aria-label":"More options",...r},n.createElement(me,null))))});U.displayName="Tile.MoreOptions";const V=p("iui-tile-buttons");V.displayName="Tile.Buttons";const J=n.forwardRef((t,s)=>{const{name:l,description:a,status:r,isNew:c,isLoading:m,isSelected:u,thumbnail:h,badge:x,leftIcon:d,rightIcon:b,buttons:g,metadata:F,moreOptions:Q,children:K,isActionable:X,isDisabled:y,onClick:Y,...Z}=t;return n.createElement(w,{ref:s,isNew:c,isSelected:u,isLoading:m,status:r,isDisabled:y,...Z},n.createElement(G,null,(r||c||m||u)&&n.createElement(z,null),n.createElement(P,null,X?n.createElement(B,{onClick:y?void 0:Y,"aria-disabled":y},l):l)),h&&n.createElement(S,null,typeof h!="string"?n.createElement(A,null,h):n.createElement(A,{url:h}),x&&n.createElement(v,null,x),d&&n.createElement(D,null,d),b&&n.createElement(L,null,b)),n.createElement(R,null,a&&n.createElement(W,null,a),Q&&n.createElement(U,null,Q),F&&n.createElement(O,null,F),K),g&&n.createElement(V,null,g))});J.displayName="Tile";const i=Object.assign(J,{Wrapper:w,ThumbnailArea:S,ThumbnailPicture:A,QuickAction:L,TypeIndicator:D,BadgeContainer:v,IconButton:_,Name:G,NameIcon:z,NameLabel:P,Action:B,ContentArea:R,Description:W,Metadata:O,MoreOptions:U,Buttons:V}),E=t=>n.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},n.createElement("path",{d:"M8 1a1.004 1.004 0 01.514.138l5.01 2.981a.951.951 0 01.476.82v6.097a1.004 1.004 0 01-.486.851l-5 2.975a1.023 1.023 0 01-1.028 0l-4.984-2.965a1.032 1.032 0 01-.502-.86V4.963a1.004 1.004 0 01.486-.851l5-2.975A1.004 1.004 0 018 1m0-1a2.006 2.006 0 00-1.025.28l-5 2.974A1.994 1.994 0 001 4.963v6.073a2.025 2.025 0 00.975 1.71l5 2.975a2.023 2.023 0 002.05 0l5-2.974a1.994 1.994 0 00.975-1.71V4.938a1.953 1.953 0 00-.975-1.686l-5-2.974A2.006 2.006 0 008 0zm0 3.25a1.063 1.063 0 11-1.063 1.063A1.063 1.063 0 018 3.25zm3 9.19a.25.25 0 01-.122.214l-2.725 1.623a.25.25 0 01-.255 0L5.123 12.64A.25.25 0 015 12.424v-1.441a.25.25 0 01.378-.215L7 11.667v-3.43l-.878-.56A.25.25 0 016 7.462V6.016a.25.25 0 01.378-.214l2.5 1.383A.25.25 0 019 7.399v4.268l1.622-.899a.25.25 0 01.378.215z"})),he=t=>n.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},n.createElement("path",{d:"M10 0a1.539 1.539 0 011.662 1.405q.004.048.005.095a2.182 2.182 0 01-2.167 2 1.575 1.575 0 01-1.667-1.667A2.047 2.047 0 0110 0M6.667 16c-.833 0-1.5-.5-.833-2.833l1-4C7 8.5 7 8.333 6.833 8.333c-.333-.167-1.5.333-2.167.833l-.333-.833c2-1.667 4.333-2.667 5.5-2.667.833 0 1 1 .5 2.667l-1.166 4.334c-.167.833-.167 1 .167 1a3.338 3.338 0 001.833-1l.5.667a9.615 9.615 0 01-5 2.666"})),k=t=>n.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},n.createElement("path",{d:"M9 0L0 9l7 7 9-9V0zm3.5 5A1.5 1.5 0 1114 3.5 1.5 1.5 0 0112.5 5z"})),Se={title:"Tile"},Le=()=>e.jsxs(i.Wrapper,{children:[e.jsx(i.Name,{name:"Stadium"}),e.jsxs(i.ThumbnailArea,{children:[e.jsx(i.BadgeContainer,{children:e.jsx(N,{backgroundColor:"skyblue",children:"Badge"})}),e.jsx(i.ThumbnailPicture,{url:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png"})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"National stadium in Singapore. Features landscape details and a metro station. This is the largest sample iModel."}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]}),e.jsxs(i.Metadata,{children:[e.jsx(k,{}),e.jsxs(C,{children:[e.jsx(j,{variant:"basic",children:"tag 1"}),e.jsx(j,{variant:"basic",children:"tag 2"})]})]})]})]}),De=()=>e.jsxs(i.Wrapper,{isSelected:!0,children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Stadium"})]}),e.jsxs(i.ThumbnailArea,{children:[e.jsx(i.BadgeContainer,{children:e.jsx(N,{backgroundColor:"skyblue",children:"Badge"})}),e.jsx(i.ThumbnailPicture,{url:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png"}),e.jsx(i.TypeIndicator,{children:e.jsx(i.IconButton,{children:e.jsx(te,{})})}),e.jsx(i.QuickAction,{children:e.jsx(i.IconButton,{children:e.jsx(he,{})})})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"National stadium in Singapore. Features landscape details and a metro station. This is the largest sample iModel."}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]}),e.jsxs(i.Metadata,{children:[e.jsx(k,{}),e.jsxs(C,{children:[e.jsx(j,{variant:"basic",children:"tag 1"}),e.jsx(j,{variant:"basic",children:"tag 2"})]})]})]}),e.jsxs(i.Buttons,{children:[e.jsx(M,{onClick:()=>console.log("clicked left button"),children:"Manage"},1),e.jsx(M,{onClick:()=>console.log("clicked right button"),children:"Projects"},2)]})]}),ze=()=>{const[t,s]=ie.useState(!1);return e.jsxs(i.Wrapper,{isSelected:t,children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:e.jsx(i.Action,{onClick:()=>s(l=>!l),children:"Stadium"})})]}),e.jsxs(i.ThumbnailArea,{children:[e.jsx(i.ThumbnailPicture,{url:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png"}),e.jsx(i.BadgeContainer,{children:e.jsx(N,{backgroundColor:"skyblue",children:"Badge"})})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"If you click on this stadium, it is going to be selected."}),e.jsxs(i.Metadata,{children:[e.jsx(k,{}),e.jsxs(C,{children:[e.jsx(j,{variant:"basic",children:"tag 1"}),e.jsx(j,{variant:"basic",children:"tag 2"})]})]})]})]})},Pe=()=>e.jsxs(i.Wrapper,{children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:e.jsx(i.Action,{href:"https://inclusive-components.design/cards/",children:"Stadium"})})]}),e.jsxs(i.ThumbnailArea,{children:[e.jsx(i.BadgeContainer,{children:e.jsx(N,{backgroundColor:"skyblue",children:"Badge"})}),e.jsx(i.ThumbnailPicture,{url:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png"})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"If you click on this stadium, it is going to open another page."}),e.jsxs(i.Metadata,{children:[e.jsx(k,{}),e.jsxs(C,{children:[e.jsx(j,{variant:"basic",children:"tag 1"}),e.jsx(j,{variant:"basic",children:"tag 2"})]})]})]})]}),Re=()=>e.jsxs(i.Wrapper,{children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Condensed"})]}),e.jsx(i.ThumbnailArea,{children:e.jsx(i.ThumbnailPicture,{children:e.jsx(E,{})})}),e.jsx(i.ContentArea,{children:e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]})})]}),We=()=>e.jsxs(i.Wrapper,{children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Some User"})]}),e.jsxs(i.ThumbnailArea,{children:[e.jsx(i.BadgeContainer,{children:e.jsx(N,{backgroundColor:"skyblue",children:"Badge"})}),e.jsx(i.ThumbnailPicture,{children:e.jsx(oe,{size:"x-large",status:"online",abbreviation:"TR",backgroundColor:de("Terry Rivers"),image:e.jsx("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png"}),title:"Terry Rivers"})})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"User Description"}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]})]})]}),Oe=()=>e.jsxs(i.Wrapper,{variant:"folder",children:[e.jsx(i.ThumbnailArea,{children:e.jsx(i.ThumbnailPicture,{children:e.jsx(ne,{})})}),e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Folder Name"})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"Folder description"}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]}),e.jsx(i.Metadata,{children:e.jsx("span",{children:"Folder metadata"})})]})]}),Ue=()=>e.jsxs(i.Wrapper,{status:"positive",children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Tile Name"})]}),e.jsx(i.ThumbnailArea,{children:e.jsx(i.ThumbnailPicture,{children:e.jsx(E,{})})}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"Description"}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]}),e.jsx(i.Metadata,{children:e.jsx("span",{children:"Tile with status"})})]})]}),Ve=()=>e.jsxs(i.Wrapper,{isLoading:!0,children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Tile Name"})]}),e.jsx(i.ThumbnailArea,{children:e.jsx(i.ThumbnailPicture,{children:e.jsx(E,{})})}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"Description"}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]}),e.jsx(i.Metadata,{children:e.jsx("span",{children:"Loading tile"})})]})]}),Fe=()=>e.jsxs(i.Wrapper,{isDisabled:!0,children:[e.jsxs(i.Name,{children:[e.jsx(i.NameIcon,{}),e.jsx(i.NameLabel,{children:"Tile Name"})]}),e.jsxs(i.ThumbnailArea,{children:[e.jsx(i.BadgeContainer,{children:e.jsx(N,{backgroundColor:"skyblue",children:"Badge"})}),e.jsx(i.ThumbnailPicture,{children:e.jsx(E,{})})]}),e.jsxs(i.ContentArea,{children:[e.jsx(i.Description,{children:"Description"}),e.jsxs(i.MoreOptions,{children:[e.jsx(o,{onClick:()=>console.log("clicked item 1"),children:"Item 1"},1),e.jsx(o,{onClick:()=>console.log("clicked item 2"),children:"Item 2"},2)]}),e.jsxs(i.Metadata,{children:[e.jsx(k,{}),e.jsxs(C,{children:[e.jsx(j,{variant:"basic",children:"tag 1"}),e.jsx(j,{variant:"basic",children:"tag 2"})]})]})]}),e.jsx(i.Buttons,{children:e.jsx(M,{disabled:!0,children:"Button"})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ze as Actionable,De as AllProps,Pe as AnchorLink,Le as Basic,Re as Condensed,Fe as Disabled,Oe as Folder,Ve as Loading,Ue as Status,We as WithAvatar,Se as default};
