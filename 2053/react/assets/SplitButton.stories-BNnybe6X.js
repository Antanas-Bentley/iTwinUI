import{r as e,n as k,B,c as j,d as w,I as R,P as v,j as r}from"./index-Da93hvVR.js";import{B as M}from"./Button-DAFutOsw.js";import{b as T,M as m}from"./Menu-DoB7U-YA.js";import{u as N}from"./Popover-v2-btKYE.js";import{S as z}from"./SvgCaretUpSmall-BJSa0BMd.js";import{S as D}from"./SvgCaretDownSmall-Dk1Kwvg2.js";import"./focusable-DQv_vybo.js";import"./ListItem-8-W8Bsdo.js";import"./LinkAction-DdnjBpCy.js";const F=e.forwardRef((t,c)=>{var x;const{onClick:n,menuItems:s,className:I,menuPlacement:C="bottom-end",styleType:u="default",size:d,children:g,wrapperProps:a,menuButtonProps:E,portal:P=!0,...S}=t,f=e.useRef(null),[p,b]=e.useState(!1),i=e.useCallback(()=>{var l;b(!1),(l=f.current)==null||l.focus({preventScroll:!0})},[]),h=e.useMemo(()=>typeof s=="function"?s(i):s,[s,i]),o=N({visible:p,onVisibleChange:l=>l?b(!0):i(),placement:C,matchWidth:!0}),y=k();return e.createElement(B,{...a,ref:o.refs.setPositionReference,className:j("iui-button-split",{"iui-disabled":t.disabled},a==null?void 0:a.className)},e.createElement(M,{className:I,styleType:u,size:d,onClick:n,ref:w(f,c),...S,labelProps:{id:y,...t.labelProps}},g),e.createElement(R,{styleType:u,size:d,disabled:t.disabled,"aria-labelledby":((x=t.labelProps)==null?void 0:x.id)||y,"aria-expanded":o.open,ref:o.refs.setReference,...o.getReferenceProps(E)},p?e.createElement(z,null):e.createElement(D,null)),o.open&&e.createElement(v,{portal:P},e.createElement(T,{...o.getFloatingProps({onKeyDown:({key:l})=>{l==="Tab"&&i()}}),ref:o.refs.setFloating},h)))}),G={title:"SplitButton",decorators:[t=>r.jsx("div",{style:{minHeight:150},children:r.jsx(t,{})})]},J=()=>{const t=(n,s)=>()=>{console.log(`Item #${n} clicked!`),s()},c=n=>[r.jsx(m,{onClick:t(1,n),children:"Item #1"},1),r.jsx(m,{onClick:t(2,n),children:"Item #2"},2),r.jsx(m,{onClick:t(3,n),children:"Item #3"},3)];return r.jsx(F,{onClick:()=>console.log("Primary button clicked!"),menuItems:c,styleType:"default",children:"Default"})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{J as Basic,G as default};
