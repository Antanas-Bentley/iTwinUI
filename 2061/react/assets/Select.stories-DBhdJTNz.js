import{b as p,r as i,j as l,R as n}from"./index-BsM-neoq.js";import{S as x}from"./SmileyHappy-Do5lHYEb.js";import{S}from"./SmileySad-BE7wSa9F.js";import{S as r}from"./Select-C3W9rGUf.js";import{M as v}from"./Menu-dmwNOltS.js";import"./Icon-JMgRki_A.js";import"./Popover-54JxWjdK.js";import"./List-CVuVSj-3.js";import"./SvgCheckmark-utXYliQY.js";import"./SvgCaretDownSmall-D1DqE4qB.js";import"./focusable-DQv_vybo.js";import"./ListItem-BqZ5uioC.js";import"./LinkAction-q6uIRqcz.js";const m="…",h=e=>{const{text:t,endCharsCount:a=6,textRenderer:o,style:s,...u}=e,[b,c]=p(t),d=i.useMemo(()=>c<t.length?`${t.substring(0,c-a-m.length)}${m}${t.substring(t.length-a)}`:t,[a,t,c]);return i.createElement("span",{style:{display:"flex",minWidth:0,flexGrow:1,whiteSpace:"nowrap",...s},ref:b,...u},(o==null?void 0:o(d,t))??d)},I=e=>i.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...e},i.createElement("path",{d:"M8 0a8 8 0 108 8 7.998 7.998 0 00-8-8zM5 5a1.147 1.147 0 011 1.25A1.147 1.147 0 015 7.5a1.147 1.147 0 01-1-1.25A1.147 1.147 0 015 5zm6.5 6h-7a.5.5 0 010-1h7a.5.5 0 010 1zM11 7.5a1.147 1.147 0 01-1-1.25A1.147 1.147 0 0111 5a1.147 1.147 0 011 1.25 1.147 1.147 0 01-1 1.25z"})),B={title:"Select",decorators:[(e,t)=>t.globalState.story.includes("truncate-middle-text")?l.jsx("div",{style:{minHeight:365,width:300},children:l.jsx(e,{})}):l.jsx("div",{style:{minHeight:365},children:l.jsx(e,{})})]},F=()=>{const e=[{value:"1",label:"Item #1"},{value:"2",label:"Item #2",disabled:!0},{value:"3",label:"Item #3"}];return l.jsx(r,{options:e,placeholder:"Placeholder text"})},_=()=>{const e=[{value:"happy",label:"Happy",startIcon:l.jsx(x,{})},{value:"neutral",label:"Neutral",startIcon:l.jsx(I,{})},{value:"sad",label:"Sad",startIcon:l.jsx(S,{})}],[t,a]=n.useState(void 0);return l.jsx(r,{options:e,value:t,onChange:a,placeholder:"How are you today?"})},E=()=>{const e=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],[t,a]=n.useState(2);return l.jsx(r,{options:e,value:t,onChange:a,placeholder:"Placeholder text",popoverProps:{visible:!0}})},W=()=>{const e=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],[t,a]=n.useState(void 0);return l.jsx("div",{style:{minHeight:350},children:l.jsx(r,{disabled:!0,options:e,value:t,onChange:a,placeholder:"Placeholder text"})})},N=()=>{const e=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],[t,a]=n.useState(2);return l.jsx("div",{style:{minHeight:350},children:l.jsx(r,{options:e,value:t,onChange:a,placeholder:"Placeholder text",disabled:!0})})},L=()=>{const[e,t]=n.useState(void 0);return l.jsx(r,{options:[...Array(20).fill(null)].map((a,o)=>({label:`Item #${o}`,value:o})),value:e,onChange:t,placeholder:"Placeholder text"})},$=()=>{const e=[{value:1,label:"Item #1",sublabel:"Sublabel #1"},{value:2,label:"Item #2",sublabel:"Sublabel #2"},{value:3,label:"Item #3",sublabel:"Sublabel #3"}],[t,a]=n.useState(void 0);return l.jsx(r,{options:e,value:t,onChange:a,placeholder:"Placeholder text",size:"large"})},z=()=>{const e=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"red",label:"Red"}],[t,a]=n.useState(void 0);return l.jsx(r,{options:e,value:t,onChange:a,placeholder:"Placeholder text",itemRenderer:o=>l.jsx(v,{style:{color:o.value},children:o.label}),selectedItemRenderer:o=>l.jsx("span",{style:{backgroundColor:o.value},children:o.label})})},O=()=>{const e=[{value:"MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html",label:"MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html"},{value:"ShortNameFile.jpg",label:"ShortNameFile.jpg"},{value:"SomeOtherFile.dgn",label:"SomeOtherFile.dgn"}],[t,a]=n.useState(e[0].value),o=i.useCallback((s,u)=>l.jsx("span",{title:s!==u?u:void 0,children:s}),[]);return l.jsx(r,{options:e,value:t,onChange:a,placeholder:"Placeholder text",itemRenderer:s=>l.jsx(v,{children:l.jsx(h,{text:s.label,textRenderer:o})}),selectedItemRenderer:s=>l.jsx(h,{text:s.label,textRenderer:o})})},k=()=>{const[e,t]=n.useState([]);return l.jsx("div",{style:{minHeight:350},children:l.jsx(r,{options:[...Array(20).fill(null)].map((a,o)=>({label:`Item #${o}`,value:o})),value:e,onChange:(a,o)=>t(s=>o==="removed"?s.filter(u=>a!==u):[...s,a]),placeholder:"Placeholder text",multiple:!0})})},D=()=>{const[e,t]=n.useState([]);return l.jsx("div",{style:{minHeight:350},children:l.jsx(r,{options:[...Array(20).fill(null)].map((a,o)=>({label:`Item #${o}`,value:o})),value:e,onChange:(a,o)=>t(s=>o==="removed"?s.filter(u=>a!==u):[...s??[],a]),placeholder:"Placeholder text",multiple:!0,selectedItemRenderer:a=>l.jsx(l.Fragment,{children:a.map(o=>o.label).join(", ")})})})},G=()=>{const e=[{value:"1",label:"Item #1"},{value:"2",label:"Item #2",disabled:!0},{value:"3",label:"Item #3"},{value:"4",label:"Item #4"}];return l.jsx(r,{native:!0,options:e,placeholder:"Choose an option"})},Y=()=>{const e=[{value:"1",label:"Item #1"},{value:"2",label:"Item #2",disabled:!0},{value:"3",label:"Item #3"}];return l.jsx(r,{native:!0,styleType:"borderless",defaultValue:"1",options:e})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{F as Basic,Y as Borderless,z as Custom,W as Disabled,N as DisabledWithSelectedValue,L as ManyItems,k as Multi,D as MultiCustomRenderer,G as Native,$ as Sublabels,O as TruncateMiddleText,_ as WithIcons,E as WithSelectedValue,B as default};
