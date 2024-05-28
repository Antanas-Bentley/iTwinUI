import{r as c,j as e,f as n,I as o}from"./index-Da93hvVR.js";import{S as u}from"./Add-CjycxxV-.js";import{S as h}from"./Edit-V7wNaCg5.js";import{S as x}from"./More-NfrbyKHd.js";import{S as d}from"./Placeholder-DIHlgWUy.js";import{T as j}from"./Text-UirKHgJD.js";import{D as p}from"./DropdownMenu-BvJMVklt.js";import{M as I}from"./Menu-DoB7U-YA.js";import{I as g}from"./Input-e-cDZHPk.js";import{B as b}from"./Button-DAFutOsw.js";import"./Popover-v2-btKYE.js";import"./focusable-DQv_vybo.js";import"./ListItem-8-W8Bsdo.js";import"./LinkAction-DdnjBpCy.js";const C=t=>c.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},c.createElement("path",{d:"M14 1v1H2V1h3l1-1h4l1 1zM3 3h10v12a1 1 0 01-1 1H4a1 1 0 01-1-1zm6 11h1V5H9zm-3 0h1V5H6z"})),v=t=>c.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},c.createElement("path",{d:"M16 14c0-5.2-4.2-9.3-9-9.4V2L0 7.3l7 5.3V10c4.3 0 6.7 1.8 9 4"})),H={title:"ButtonGroup"},N=()=>e.jsxs(n,{role:"toolbar",children:[e.jsx(o,{label:"Add",onClick:()=>console.log("Clicked add!"),children:e.jsx(u,{})}),e.jsx(o,{label:"Edit",onClick:()=>console.log("Clicked edit!"),isActive:!0,children:e.jsx(h,{})}),e.jsx(o,{disabled:!0,label:"Delete",onClick:()=>console.log("Clicked delete!"),children:e.jsx(C,{})}),e.jsx(o,{label:"Undo",onClick:()=>console.log("Clicked undo!"),children:e.jsx(v,{})})]}),D=()=>{const t=Array.from({length:10},(i,l)=>e.jsx(o,{label:`Item #${l}`,children:e.jsx(d,{})},l));return e.jsxs(e.Fragment,{children:[e.jsx(j,{variant:"small",as:"small",isMuted:!0,children:"Resize the viewport to see overflow behavior."}),e.jsx("div",{style:{maxWidth:"clamp(300px, 50%, 100%)",border:"1px solid hotpink",padding:8},children:e.jsx(n,{orientation:"horizontal",overflowButton:i=>e.jsx(p,{menuItems:l=>{const a=t.length-i;return Array.from({length:a},(m,r)=>{const s=i+r;return e.jsxs(I,{onClick:l,icon:e.jsx(d,{}),children:["Item #",s]},s)})},children:e.jsx(o,{label:"More",children:e.jsx(x,{})})}),children:t})})]})},U=()=>e.jsxs(n,{children:[e.jsx(g,{defaultValue:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ",readOnly:!0,style:{minWidth:"30ch"}}),e.jsx(b,{styleType:"high-visibility",onClick:async()=>{await navigator.clipboard.writeText("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"),console.log("Copied bearer token to clipboard")},children:"Copy"})]}),F=()=>e.jsxs(n,{orientation:"vertical",children:[e.jsx(o,{label:"Add",onClick:()=>console.log("Clicked add!"),children:e.jsx(u,{})}),e.jsx(o,{label:"Edit",onClick:()=>console.log("Clicked edit!"),isActive:!0,children:e.jsx(h,{})}),e.jsx(o,{disabled:!0,label:"Delete",onClick:()=>console.log("Clicked delete!"),children:e.jsx(C,{})}),e.jsx(o,{label:"Undo",onClick:()=>console.log("Clicked undo!"),children:e.jsx(v,{})})]}),k=()=>{const t=Array(10).fill(null).map((i,l)=>e.jsx(o,{onClick:()=>console.log(`Clicked on button ${l+1}`),children:e.jsx(d,{})},l));return e.jsx(n,{orientation:"vertical",style:{height:"clamp(100px, 40vmax, 80vh)"},overflowButton:i=>e.jsx(p,{menuItems:l=>Array(t.length-i+1).fill(null).map((a,m)=>{const r=i+m,s=()=>{console.log(`Clicked button ${r} (overflow)`),l()};return e.jsxs(I,{onClick:s,icon:e.jsx(d,{}),children:["Button #",r]},r)}),children:e.jsx(o,{onClick:()=>console.log("Clicked on overflow icon"),children:e.jsx(x,{})})}),children:t})};k.decorators=[t=>e.jsxs(e.Fragment,{children:[e.jsx(j,{variant:"small",as:"small",isMuted:!0,children:"Resize the viewport to see overflow behavior."}),e.jsx("div",{style:{border:"1px solid hotpink",padding:8},children:e.jsx(t,{})})]})];typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{U as InputButtonCombo,D as Overflow,F as Vertical,k as VerticalOverflow,N as WithIcons,H as default};
