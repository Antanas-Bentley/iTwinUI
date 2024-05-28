import{r as e,q as U,B as h,c as g,m as I,p as D,u as w,h as H,d as M,V as O,n as V,j as o,R as N,I as $}from"./index-vgP8bFIz.js";import{L as k}from"./LabeledInput-aySbPaLI.js";import{A as P}from"./Anchor-C49blg69.js";import"./Input-CWEhGyQQ.js";import"./InputGrid-DrK3hkrx.js";import"./Label-CMf6sI9L.js";import"./Textarea-BEFJA5oV.js";import"./Icon-POEIFJ1c.js";import"./InputWithDecorations-m_omyK8m.js";import"./InputFlexContainer-DtSLebM1.js";import"./MenuExtraContent-BN_n4i_d.js";import"./Select-DEWOqJDL.js";import"./Menu-CfuoIR3e.js";import"./focusable-DQv_vybo.js";import"./ListItem-B9y7liFf.js";import"./LinkAction-B8Nk11Ed.js";import"./Popover-B2DrQss5.js";import"./List-DOqXShwW.js";import"./SvgCheckmark-BuyEiyjZ.js";import"./SvgCaretDownSmall-sUFjg8K6.js";import"./Text-CyMrpsH0.js";import"./useContainerWidth-CLZOf4cy.js";import"./VirtualScroll-OXMxfKXR.js";const W=t=>e.createElement(U,{...t},e.createElement("path",{d:"m2 5h4v7h4v-7h4l-6-5zm12 6v3h-12v-3h-2v5h16v-5z"})),_=t=>e.createElement(U,{...t},e.createElement("path",{d:"M10 0H2v16h12V4h-4zm1 0v3h3z"})),A=e.forwardRef((t,a)=>{const{dragContent:n,children:d,onFileDropped:i,contentProps:r,...m}=t,[p,u]=e.useState(!1),f=l=>{l.preventDefault(),l.stopPropagation()},E=l=>{var s,x,j;l.preventDefault(),l.stopPropagation(),!p&&((j=(x=(s=l.dataTransfer)==null?void 0:s.items)==null?void 0:x[0])==null?void 0:j.kind)==="file"&&u(!0)},F=l=>{var s;l.preventDefault(),l.stopPropagation(),p&&!((s=l.currentTarget)!=null&&s.contains(l.relatedTarget))&&u(!1)},v=l=>{var s;l.preventDefault(),l.stopPropagation(),p&&(u(!1),i((s=l.dataTransfer)==null?void 0:s.files,l))};return e.createElement(h,{...m,className:g("iui-file-upload",{"iui-drag":p},t==null?void 0:t.className),ref:a,onDragEnter:I(t.onDragEnter,E),onDragOver:I(t.onDragOver,f),onDragLeave:I(t.onDragLeave,F),onDrop:I(t.onDrop,v)},n?d:e.createElement(h,{as:"div",...r,className:g("iui-content",r==null?void 0:r.className)},d),n&&e.createElement(h,{as:"div",...r,className:g("iui-content",r==null?void 0:r.className)},n))}),q=D.span("iui-file-card-empty-icon",{children:e.createElement(W,null)}),G=D.span("iui-file-card-empty-action"),K=e.forwardRef((t,a)=>{const{children:n,className:d,...i}=t;return e.createElement(h,{className:g("iui-file-card-empty",d),ref:a,...i},n??e.createElement(e.Fragment,null,e.createElement(C.Icon,null),e.createElement(C.Text,null,e.createElement(c.InputLabel,null,"Choose a file"),e.createElement("div",null,"to upload."))))}),C=Object.assign(K,{Icon:q,Text:G}),J=t=>{const a=[" bytes","KB","MB","GB","TB"];let n=0;for(;t>=1024&&++n;)t=t/1024;return t.toFixed(t<10&&n>0?2:0)+a[n]},Q=t=>{const a=new Date(t);return a.toDateString()+" "+a.toLocaleTimeString()},T=D.span("iui-file-card-icon",{children:e.createElement(_,null)});T.displayName="FileUploadCard.Icon";const S=D.span("iui-file-card-text");S.displayName="FileUploadCard.Info";const R=e.forwardRef((t,a)=>{const{children:n,className:d,...i}=t,{files:r}=w(y),m=r.length>1?r.length+" files selected":r[0].name;return e.createElement(h,{as:"span",className:g("iui-file-card-title",d),ref:a,...i},n??m)});R.displayName="FileUploadCard.Title";const L=e.forwardRef((t,a)=>{const{children:n,className:d,...i}=t,{files:r}=w(y);let m=r.length>1?r[0].name+", "+r[1].name:J(r[0].size)+" "+Q(r[0].lastModified);return r.length>2&&(m+=", and "+(r.length-2)+" others"),e.createElement(h,{as:"span",className:g("iui-file-card-description",d),ref:a,...i},n??m)});L.displayName="FileUploadCard.Description";const z=D.div("iui-file-card-action");z.displayName="FileUploadCard.Action";const b=e.forwardRef((t,a)=>{const{children:n,...d}=t,{inputId:i}=w(y);return e.createElement(P,{as:"label",ref:a,htmlFor:i,...d},n)});b.displayName="FileUploadCard.InputLabel";const B=e.forwardRef((t,a)=>{const{children:n,onChange:d,id:i,...r}=t,{files:m,onFilesChange:p,setInternalFiles:u,inputId:f,setInputId:E}=w(y),F=e.useCallback(l=>{var x;if(!l||!((x=H())!=null&&x.DataTransfer))return;const s=new DataTransfer;s.items.clear(),Array.from(m).forEach(j=>s.items.add(j)),l.files=s.files},[m]),v=M(a,F);return e.useEffect(()=>{i&&i!==f&&E(i)},[i,f,E]),e.createElement(e.Fragment,null,e.createElement(O,{as:"input",type:"file",unhideOnFocus:!1,onChange:I(d,l=>{const s=Array.from(l.currentTarget.files||[]);p==null||p(s),u(s)}),ref:v,id:i??f,...r}),n)});B.displayName="FileUploadCard.Input";const X=e.forwardRef((t,a)=>{const{className:n,children:d,files:i,onFilesChange:r,emptyCard:m=e.createElement(C,null),input:p,...u}=t,[f,E]=e.useState(),F=V(),[v,l]=e.useState(F),s=i??f??[];return e.createElement(y.Provider,{value:{files:s,onFilesChange:r,setInternalFiles:E,inputId:v,setInputId:l}},s!=null&&s.length?e.createElement(h,{className:g("iui-file-card",n),ref:a,...u},d??e.createElement(e.Fragment,null,e.createElement(c.Icon,null),e.createElement(c.Info,null,e.createElement(c.Title,null),e.createElement(c.Description,null)),e.createElement(c.Action,null,e.createElement(c.InputLabel,null,"Replace")))):m,p??e.createElement(c.Input,null))}),c=Object.assign(X,{Icon:T,Info:S,Title:R,Description:L,Action:z,InputLabel:b,Input:B});c.displayName="FileUploadCard";const y=e.createContext(void 0),Y=t=>e.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},e.createElement("path",{d:"M14 0L8 6 2 0 0 2l6 6-6 6 2 2 6-6 6 6 2-2-6-6 6-6"})),Z=t=>e.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},e.createElement("path",{d:"M8 0a8 8 0 108 8 7.998 7.998 0 00-8-8zm3 5a1.147 1.147 0 011 1.25 1.147 1.147 0 01-1 1.25 1.147 1.147 0 01-1-1.25A1.147 1.147 0 0111 5zM5 5a1.147 1.147 0 011 1.25A1.147 1.147 0 015 7.5a1.147 1.147 0 01-1-1.25A1.147 1.147 0 015 5zm3 8.5A4.774 4.774 0 013 9a.5.5 0 011 0 3.772 3.772 0 004 3.5A3.772 3.772 0 0012 9a.5.5 0 011 0 4.774 4.774 0 01-5 4.5z"})),ee=t=>e.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...t},e.createElement("path",{d:"M8 0a8 8 0 108 8 7.998 7.998 0 00-8-8zm2.46 5.23l1.5.75a2.512 2.512 0 01.04.27 1.147 1.147 0 01-1 1.25 1.147 1.147 0 01-1-1.25 1.29 1.29 0 01.46-1.02zm-6.42.75l1.5-.75A1.29 1.29 0 016 6.25 1.147 1.147 0 015 7.5a1.147 1.147 0 01-1-1.25 2.512 2.512 0 01.04-.27zm8.4 6.49a.453.453 0 01-.16.03.508.508 0 01-.48-.34A3.934 3.934 0 008 9.5a3.934 3.934 0 00-3.8 2.66.495.495 0 01-.63.31.485.485 0 01-.32-.63A4.947 4.947 0 018 8.5h.07a4.943 4.943 0 014.68 3.34.487.487 0 01-.31.63z"})),ye={title:"FileUpload"},je=()=>{const[t,a]=e.useState([]);return o.jsx(A,{dragContent:"Drop file to upload",onFileDropped:n=>{a(Array.from(n)),console.log(`${n.length} files uploaded`)},children:o.jsx(k,{placeholder:"Type a message",style:{width:"100%"},message:t.length?`Attached: ${t.map(n=>n.name)}`:"Drag files to attach"})})},we=()=>{const[t,a]=e.useState([]);return o.jsx(A,{onFileDropped:n=>{a(Array.from(n)),console.log(`${n.length} files uploaded`)},children:o.jsx(c,{files:t,onFilesChange:n=>a(n)})})},Ae=()=>{const t=N.useRef(null),[a,n]=N.useState([]),d=o.jsxs(C,{children:[o.jsx(C.Icon,{children:o.jsx(ee,{})}),o.jsxs(C.Text,{children:[o.jsx(c.InputLabel,{children:"Custom Label Text"}),o.jsx("div",{children:"Custom Description Text"})]})]});return o.jsx(A,{onFileDropped:i=>{n(Array.from(i)),console.log(`${i.length} files uploaded`)},children:o.jsxs(c,{files:a,onFilesChange:i=>n(i),emptyCard:d,input:o.jsx(c.Input,{name:"my-file",ref:t}),children:[o.jsx(c.Icon,{children:o.jsx(Z,{})}),o.jsxs(c.Info,{children:[o.jsx(c.Title,{children:"Custom File Name"}),o.jsx(c.Description,{children:"Custom File Description"})]}),o.jsx(c.Action,{children:o.jsx($,{onClick:()=>{n([])},styleType:"borderless",children:o.jsx(Y,{})})})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ae as CustomFileUploadCard,we as DefaultFileUploadCard,je as WrappingInput,ye as default};
