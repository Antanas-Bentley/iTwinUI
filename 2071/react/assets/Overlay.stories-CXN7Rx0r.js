function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as r,B as m,p as u,ag as y,j as t}from"./index-zHmCT5U4.js";import{P as v}from"./ProgressLinear-Dkwpnwtl.js";import{P as x}from"./ProgressRadial-DbuSBmf9.js";const c=r.forwardRef((e,n)=>{const{content:a,children:o,...p}=e;return r.createElement(d,{ref:n,...p},r.createElement(s,null,a),r.createElement(l,null,o))});c.displayName="Overlay";const l=r.forwardRef((e,n)=>{const{children:a,...o}=e;return f(),r.createElement(m,{inert:"",ref:n,...o},a)});l.displayName="Overlay.HiddenContent";const s=u("iui-overlay");s.displayName="Overlay.Overlay";const d=u("iui-overlay-wrapper");d.displayName="Overlay.Wrapper";const i=Object.assign(c,{Wrapper:d,HiddenContent:l,Overlay:s}),f=()=>{const e=r.useRef(!1),n="https://cdn.jsdelivr.net/npm/wicg-inert@3.1.2/dist/inert.min.js";r.useEffect(()=>{(async()=>!HTMLElement.prototype.hasOwnProperty("inert")&&!e.current&&(await y(()=>import(n),__vite__mapDeps([]),import.meta.url),e.current=!0))()},[])},j={title:"Overlay"},w=()=>{const e={border:"1px solid var(--iui-color-border)",position:"relative",marginBottom:"12px"};return t.jsxs(i.Wrapper,{style:e,children:[t.jsx(i.HiddenContent,{style:{padding:"12px"},children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),t.jsx(i.Overlay,{children:t.jsx(v,{indeterminate:!0})})]})},E=()=>{const e={border:"1px solid var(--iui-color-border)",position:"relative",marginBottom:"12px"};return t.jsxs(i.Wrapper,{style:e,children:[t.jsx(i.HiddenContent,{style:{padding:"12px"},children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),t.jsx(i.Overlay,{children:t.jsx(x,{indeterminate:!0})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Linear,E as Radial,j as default};
