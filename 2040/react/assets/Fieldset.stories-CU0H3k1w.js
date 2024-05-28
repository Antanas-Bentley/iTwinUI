import{r as t,B as h,c as j,R as m,j as e}from"./index-DqM7PEDh.js";import{L as p}from"./LabeledSelect-DV2ZCCIe.js";import{I as n}from"./InputGroup-BK7YrSeR.js";import{R as a}from"./Radio-BpSyU9Ow.js";import{T as i}from"./ToggleSwitch-D-zV4UBN.js";import"./Select-CFWtznNi.js";import"./Menu-DZB4gUmZ.js";import"./focusable-DQv_vybo.js";import"./ListItem-DTeTH4sf.js";import"./LinkAction-D7Cq3V1M.js";import"./Popover-DFbg7f-3.js";import"./Icon-JvRWdXm7.js";import"./List-Dk9r3w2L.js";import"./SvgCheckmark-B60mQIo3.js";import"./SvgCaretDownSmall-Djb6o1Lw.js";import"./InputGrid-C-NoLjg1.js";import"./Label-Bd7BE8gz.js";import"./Input-T-6vpHhI.js";import"./Textarea-CEu6Spt5.js";import"./InputWithDecorations-CfoZy9l4.js";import"./InputFlexContainer-g41FgPaH.js";import"./MenuExtraContent-BdzP06Zx.js";import"./Text-UFuJharM.js";import"./useContainerWidth-BlsemVMJ.js";import"./VirtualScroll-HSdajKuW.js";const u=t.forwardRef((s,o)=>{const{children:l,className:x,disabled:c,legend:d,...b}=s;return t.createElement(h,{as:"fieldset",className:j("iui-fieldset",x),disabled:c,ref:o,...b},d&&t.createElement("legend",null,d),c?t.Children.map(l,r=>t.isValidElement(r)?t.cloneElement(r,{disabled:!0}):r):l)}),J={title:"Fieldset"},K=()=>{const[s,o]=m.useState(void 0);return e.jsxs(u,{legend:"General Settings",style:{display:"flex",flexDirection:"column",gap:11},children:[e.jsx(p,{label:"Resolution",options:[{value:1,label:"1200 x 1000"},{value:2,label:"1600 x 1200"},{value:3,label:"2560 x 1600"}],displayStyle:"inline",value:s,onChange:l=>o(l),placeholder:"Select"}),e.jsxs(n,{label:"Color Theme",displayStyle:"inline",children:[e.jsx(a,{name:"choice",value:"option1",label:"Light"}),e.jsx(a,{name:"choice",value:"option2",label:"Dark"}),e.jsx(a,{name:"choice",value:"option3",label:"Match device"})]}),e.jsxs(n,{children:[e.jsx(i,{label:"Share usage statistics"}),e.jsx(i,{label:"Share crash logs"}),e.jsx(i,{disabled:!0,label:"Advanced settings"})]})]})},O=()=>{const[s,o]=m.useState(void 0);return e.jsxs(u,{legend:"General Settings",style:{display:"flex",flexDirection:"column",gap:11},disabled:!0,children:[e.jsx(p,{label:"Resolution",options:[{value:1,label:"1200 x 1000"},{value:2,label:"1600 x 1200"},{value:3,label:"2560 x 1600"}],displayStyle:"inline",value:s,onChange:l=>o(l),placeholder:"Select"}),e.jsxs(n,{label:"Color Theme",displayStyle:"inline",children:[e.jsx(a,{name:"choice",value:"option1",label:"Light"}),e.jsx(a,{name:"choice",value:"option2",label:"Dark"}),e.jsx(a,{name:"choice",value:"option3",label:"Match device"})]}),e.jsxs(n,{children:[e.jsx(i,{label:"Share usage statistics"}),e.jsx(i,{label:"Share crash logs"}),e.jsx(i,{label:"Advanced settings"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Basic,O as Disabled,J as default};
