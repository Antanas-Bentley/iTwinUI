import{r,R as u,j as e}from"./index-B2uU-R2F.js";import{B as t}from"./Button-DGhwdhuC.js";import{D as c,a as O,b as M}from"./Dialog-C1Qhm7yJ.js";import"./ProgressRadial-BDRkFxrq.js";import"./useEventListener-ClqvxF5B.js";import"./focusable-DQv_vybo.js";const d=r.forwardRef((n,i)=>{const{isOpen:o=!1,isDismissible:s=!0,closeOnEsc:l=!0,closeOnExternalClick:a=!0,onClose:y,title:h,children:x,portal:g=!0,wrapperProps:b,backdropProps:f,titleBarProps:j,...C}=n;return r.createElement(c,{isOpen:o,closeOnEsc:l,closeOnExternalClick:a,isDismissible:s,onClose:y,preventDocumentScroll:!0,trapFocus:!0,setFocus:!0,ref:i,portal:g,...b},r.createElement(c.Backdrop,{...f}),r.createElement(c.Main,{"aria-modal":!0,...C},r.createElement(c.TitleBar,{titleText:h,...j}),x))}),m=Object.assign({},O),p=Object.assign({},M),w={title:"Modal"},T=()=>{const[n,i]=u.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(d,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),children:[e.jsx(m,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(p,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})},P=()=>{const[n,i]=u.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(d,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),isDismissible:!1,children:[e.jsx(m,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(p,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})},S=()=>{const[n,i]=u.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(d,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),closeOnEsc:!1,closeOnExternalClick:!1,children:[e.jsx(m,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(p,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})},H=()=>{const[n,i]=u.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(d,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),styleType:"fullPage",children:[e.jsx(m,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(p,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Basic,H as FullPageModal,P as NonDismissibleModal,S as OutsideClickAndEscDoesNotClose,w as default};
