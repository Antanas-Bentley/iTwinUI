import{R as u,j as e}from"./index-CwFMGc_c.js";import{S as i}from"./Calendar-DtMbvdAd.js";import{I as n}from"./InputWithDecorations-CM7u0FOx.js";import{P as c}from"./Popover-CVx8craP.js";import{T as a}from"./TimePicker-Dzi-lxZX.js";import"./InputFlexContainer-bMnlYOkE.js";import"./Icon-BWsFlEhY.js";const S={title:"TimePicker"},y=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,22)),s=t=>{o(t),console.log(`New Time value: ${t}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:150},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(c,{applyBackground:!0,placement:"bottom-end",content:e.jsx(a,{date:r,onChange:s,setFocusHour:!0,use12Hours:!1}),children:e.jsx(n.Button,{children:e.jsx(i,{})})})]})})},w=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,22)),s=t=>{o(t),console.log(`New Time value: ${t}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:200},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(c,{applyBackground:!0,placement:"bottom-end",content:e.jsx(a,{date:r,onChange:s,setFocusHour:!0,use12Hours:!1,hourRenderer:t=>t.getHours()===1?`${t.getHours()} hr`:`${t.getHours()} hrs`,minuteRenderer:t=>t.getMinutes()===1?`${t.getMinutes()} min`:`${t.getMinutes()} mins`,meridiemRenderer:t=>t==="AM"?"Before":"After"}),children:e.jsx(n.Button,{children:e.jsx(i,{})})})]})})},f=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,30)),s=m=>{o(m),console.log(`New Time value: ${m}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:150},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(c,{applyBackground:!0,placement:"bottom-end",content:e.jsx(a,{date:r,onChange:s,setFocusHour:!0,useCombinedRenderer:!0,precision:"minutes",hourStep:1,minuteStep:1,secondStep:15,use12Hours:!0}),children:e.jsx(n.Button,{children:e.jsx(i,{})})})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Basic,f as Combined,w as CustomRenderers,S as default};
