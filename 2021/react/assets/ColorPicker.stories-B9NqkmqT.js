import{l as G,r as s,q as he,B as F,c as z,d as oe,i as fe,V as ge,n as de,I as Y,R as M,j as C,f as ne}from"./index-DCZUONDF.js";import{P as X}from"./Popover-BLhm8qum.js";import{S as re}from"./Slider-DCUxFa0A.js";import{u as W}from"./useEventListener-BLJmVA4X.js";import{I as T}from"./Input-DsS9iOgW.js";import{B as se}from"./Button-BS1uiIuu.js";import"./focusable-DQv_vybo.js";import"./ProgressRadial-Cc0ZyUfU.js";const A=new Uint8Array(4),K=new Uint32Array(A.buffer),pe=m=>typeof m!="string"&&"r"in m&&"g"in m&&"b"in m,be=m=>typeof m!="string"&&"h"in m&&"s"in m&&"l"in m,Ce=m=>typeof m!="string"&&"h"in m&&"s"in m&&"v"in m;class d{constructor(t,o){K[0]=t,this._tbgr=K[0],this._hue=o}static create(t){return t?pe(t)?d.fromRGB(t):be(t)?d.fromHSL(t):Ce(t)?d.fromHSV(t):typeof t=="string"?d.fromString(t,d.fromTbgr(0)):d.fromTbgr(0):d.fromTbgr(0)}toTbgr(){return this._tbgr}static fromTbgr(t){return new d(t)}static fromRgbt(t,o,l,r){return this.fromTbgr(this.computeTbgrFromComponents(t,o,l,r))}static computeTbgrFromComponents(t,o,l,r){return A[0]=t,A[1]=o,A[2]=l,A[3]=r||0,K[0]}static fromString(t,o){const[l,r]=this.computeTbgrFromString(t,o==null?void 0:o.toTbgr());return new d(l,r)}static fromHSL(t){const o=t.a??1;return new d(this.computeTbgrFromHSL(t.h/360,t.s/100,t.l/100,Math.round((1-o)*255)),t.h)}static fromRGB(t){const o=t.a??1;return d.fromRgbt(t.r,t.g,t.b,Math.round((1-o)*255))}static fromHSV(t){const o=t.a??1,l=Math.round((1-o)*255);if(!t.s||t.h===-1){const N=255&Math.floor(255*t.v/100+.5+3e-14);return d.fromRgbt(N,N,N,0)}let r=t.h,h=t.s,f=t.v;r===360&&(r=0),r/=60;const c=Math.floor(r),b=r-c;f/=100,h/=100;const i=255&Math.floor(f*(1-h)*255+.5),u=255&Math.floor(f*(1-h*b)*255+.5),a=255&Math.floor(f*(1-h*(1-b))*255+.5),g=255&Math.floor(f*255+.5);let n=0,x=0,v=0;switch(c){case 0:n=g,v=a,x=i;break;case 1:n=u,v=g,x=i;break;case 2:n=i,v=g,x=a;break;case 3:n=i,v=u,x=g;break;case 4:n=a,v=i,x=g;break;case 5:n=g,v=i,x=u;break}return new d(d.computeTbgrFromComponents(n,v,x,l),t.h)}static computeTbgrFromString(t,o){t=t.toLowerCase();let l=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t);if(l){let r;const h=l[1],f=l[2],c=u=>u[u.length-1]==="%",b=u=>{const a=parseFloat(u);return 255*G(c(u)?a/100:a,0,1)},i=u=>{const a=c(u)?parseFloat(u)/100*255:parseInt(u,10);return G(a,0,255)};switch(h){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f),r)return[this.computeTbgrFromComponents(i(r[1]),i(r[2]),i(r[3]),typeof r[4]=="string"?255-b(r[4]):0),void 0];break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f),r){const u=parseFloat(r[1]),a=parseInt(r[2],10)/100,g=parseInt(r[3],10)/100,n=typeof r[4]=="string"?255-b(r[4]):0;return[this.computeTbgrFromHSL(u/360,a,g,n),u]}break}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=l[1],h=r.length;if(h===3)return[this.computeTbgrFromComponents(parseInt(r.charAt(0)+r.charAt(0),16),parseInt(r.charAt(1)+r.charAt(1),16),parseInt(r.charAt(2)+r.charAt(2),16),0),void 0];if(h===6)return[this.computeTbgrFromComponents(parseInt(r.charAt(0)+r.charAt(1),16),parseInt(r.charAt(2)+r.charAt(3),16),parseInt(r.charAt(4)+r.charAt(5),16),0),void 0];if(h===8)return[this.computeTbgrFromComponents(parseInt(r.charAt(0)+r.charAt(1),16),parseInt(r.charAt(2)+r.charAt(3),16),parseInt(r.charAt(4)+r.charAt(5),16),255-parseInt(r.charAt(6)+r.charAt(7),16)),void 0]}if(o)return[o,void 0];throw new Error("unable to parse string into ColorValue")}static getColors(t){return K[0]=t,{b:A[2],g:A[1],r:A[0],t:A[3]}}getRgb(t){return K[0]=this._tbgr,t?(A[0]<<24)+(A[1]<<16)+(A[2]<<8)+(255-A[3]):(A[0]<<16)+(A[1]<<8)+A[2]}getAlpha(){return d.getAlpha(this._tbgr)}static getAlpha(t){return K[0]=t,255-A[3]}toHexString(t){if(t){let o=this.getRgb(t);return o<0&&(o=4294967295+o+1),`#${`00000000${o.toString(16)}`.slice(-8)}`}return`#${`000000${this.getRgb().toString(16)}`.slice(-6)}`}static computeTbgrFromHSL(t,o,l,r=0){const h=(u,a,g)=>(g<0&&(g+=1),g>1&&(g-=1),g<.16666666666666666?u+(a-u)*6*g:g<.5?a:g<.6666666666666666?u+(a-u)*6*(.6666666666666666-g):u),f=(u,a,g)=>Math.round(h(u,a,g)*255);if(t=((u,a)=>(u%a+a)%a)(t,1),o=G(o,0,1),l=G(l,0,1),o===0)return l*=255,this.computeTbgrFromComponents(l,l,l,r);const b=l<=.5?l*(1+o):l+o-l*o,i=2*l-b;return this.computeTbgrFromComponents(f(i,b,t+1/3),f(i,b,t),f(i,b,t-1/3),r)}toHslColor(){return{...d.toHsl(this._tbgr),...this._hue!=null&&{h:this._hue}}}static toHsl(t){const{r:o,g:l,b:r}=d.getColors(t),h=o/255,f=l/255,c=r/255,b=Math.min(h,f,c),i=Math.max(h,f,c),u=i-b;let a=0,g=0;u===0?a=0:h===i?a=(f-c)/u%6:f===i?a=(c-h)/u+2:a=(h-f)/u+4,a=Math.round(a*60),a<0&&(a+=360);let n=(i+b)/2;return g=u===0?0:u/(1-Math.abs(2*n-1)),g=Number((g*100).toFixed(1)),n=Number((n*100).toFixed(1)),{h:a,s:g,l:n,a:this.getAlpha(t)/255}}toRgbColor(){const{r:t,g:o,b:l}=d.getColors(this._tbgr);return{r:t,g:o,b:l,a:this.getAlpha()/255}}toHsvColor(){return{...d.toHsv(this._tbgr),...this._hue!=null&&{h:this._hue}}}static toHsv(t){const{r:o,g:l,b:r}=d.getColors(t),h=o/255,f=l/255,c=r/255,b=Math.min(h,f,c),i=Math.max(h,f,c),u=i-b;let a=0;u===0?a=0:h===i?a=(f-c)/u%6:f===i?a=(c-h)/u+2:a=(h-f)/u+4,a=Math.round(a*60),a<0&&(a+=360);let g=i,n=i===0?0:u/i;return n=Number((n*100).toFixed(1)),g=Number((g*100).toFixed(1)),{h:a,s:n,v:g,a:this.getAlpha(t)/255}}equals(t){return this._tbgr===t._tbgr}static getFormattedColorNumber(t,o=1){return o===0&&Math.round(t).toString(),Number(t.toFixed(o)).toString()}toRgbString(t){const o=this.toRgbColor(),l=`${o.r}, ${o.g}, ${o.b}`;if(t){const r=o.a??1;return`rgba(${l}, ${d.getFormattedColorNumber(r,2)})`}return`rgb(${l})`}toHslString(t){const o=this.toHslColor(),l=`${d.getFormattedColorNumber(this._hue??o.h)}, ${d.getFormattedColorNumber(o.s)}%, ${d.getFormattedColorNumber(o.l)}%`;if(t){const r=o.a??1;return`hsla(${l}, ${d.getFormattedColorNumber(r,2)})`}return`hsl(${l})`}toHsvString(t){const o=this.toHsvColor(),l=`${this._hue??o.h}, ${o.s}%, ${o.v}%`;if(t){const r=o.a??1;return`hsva(${l}, ${d.getFormattedColorNumber(r,2)})`}return`hsv(${l})`}}const xe=m=>s.createElement(he,{...m},s.createElement("path",{d:"m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z"})),ae=s.createContext(void 0),Z=()=>{const m=s.useContext(ae);if(m==null)throw new Error("useColorPickerContext must be used within a ColorPickerContext.Provider");return m},J=m=>m instanceof d?m:d.create(m),Q=s.forwardRef((m,t)=>{const{children:o,className:l,selectedColor:r,onChange:h,onChangeComplete:f,showAlpha:c=!1,applyBackground:b=!0,...i}=m,u=s.useRef(null),a=s.useMemo(()=>J(r),[r]),g=s.useRef(a.toTbgr()),[n,x]=s.useState(a);s.useEffect(()=>{x(a)},[a]);const[v,N]=s.useState(()=>n.toHsvColor());s.useEffect(()=>{a.toTbgr()!==g.current&&(g.current=a.toTbgr(),N(a.toHsvColor()))},[a]);const $=s.useCallback((H,E,O)=>{N(H);const I=O??d.create(H);E?f==null||f(I):h==null||h(I),g.current=I.toTbgr(),x(I)},[h,f]);return s.createElement(F,{className:z("iui-color-picker",{"iui-popover-surface":b},l),ref:oe(u,t),...i},s.createElement(ae.Provider,{value:{activeColor:n,setActiveColor:x,hsvColor:v,applyHsvColorChange:$,onChangeComplete:f,showAlpha:c}},o))}),q=s.forwardRef((m,t)=>{const{color:o,style:l,onClick:r,isActive:h,className:f,...c}=m,b=s.useMemo(()=>typeof o=="string"?o:J(o).toHslString(!0),[o]);return s.createElement(F,{as:r?fe:"span",className:z("iui-color-swatch",{"iui-active":h},f),style:{"--iui-color-swatch-background":b,...l},onClick:r,"aria-pressed":r&&h?"true":void 0,ref:t,...c},m.children??s.createElement(ge,null,b.toUpperCase()))}),Ee=(m,t)=>(G(t,m.top,m.bottom)-m.top)/m.height*100,Se=(m,t)=>(G(t,m.left,m.right)-m.left)/m.width*100,le=s.forwardRef((m,t)=>{var V,ee,te;const{className:o,...l}=m,r=s.useRef(),h=oe(r,t),{activeColor:f,hsvColor:c,onChangeComplete:b,applyHsvColorChange:i,showAlpha:u}=Z(),a=s.useMemo(()=>d.create({h:c.h,s:100,v:100}),[c.h]),g=s.useMemo(()=>c.h,[c]),n=s.useMemo(()=>u?c.a??1:1,[c.a,u]),x=s.useMemo(()=>f.toHexString(),[f]),[v,N]=s.useState(!1),$=a.toHexString(),H=100-c.v,E=c.s,O=s.useCallback((p,w)=>{const B={h:Number(p.toFixed(2)),s:c.s,v:c.v,a:c.a};i(B,w)},[i,c]),I=s.useCallback((p,w)=>{const R=Number(p.toFixed(2)),B={h:c.h,s:c.s,v:c.v,a:R};i(B,w)},[i,c]),P=s.useRef(null),U=s.useRef(null),e=s.useCallback((p,w,R)=>{const B={h:c.h,s:p,v:100-w,a:c.a};i(B,R)},[i,c]),S=s.useCallback((p,w)=>{if(P.current&&v||P.current&&w==="onClick"){const R=Se(P.current.getBoundingClientRect(),p.clientX),B=Ee(P.current.getBoundingClientRect(),p.clientY);w==="onChange"?e(R,B,!0):e(R,B,!1)}},[v,e]),k=s.useCallback(p=>{v&&(S(p,"onChange"),N(!1),p.preventDefault(),p.stopPropagation())},[v,S]);W("pointerup",k,(V=r.current)==null?void 0:V.ownerDocument);const D=s.useCallback(p=>{v&&(p.preventDefault(),p.stopPropagation(),S(p,"onUpdate"))},[v,S]);W("pointermove",D,(ee=r.current)==null?void 0:ee.ownerDocument);const L=s.useCallback(p=>{v&&(S(p,"onChange"),N(!1))},[v,S]);W("pointerleave",L,(te=r.current)==null?void 0:te.ownerDocument);const y=s.useRef({}),ue=p=>{if(p.altKey)return;let w=E,R=H;switch(y.current[p.key]=!0,p.key){case"ArrowDown":{R=Math.min(R+1,100),e(w,R,!1);break}case"ArrowUp":{R=Math.max(R-1,0),e(w,R,!1);break}case"ArrowLeft":w=Math.max(w-1,0),e(w,R,!1);break;case"ArrowRight":w=Math.min(w+1,100),e(w,R,!1);break}},me=p=>{switch(y.current[p.key]=!1,p.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":if(y.current.ArrowUp||y.current.ArrowDown||y.current.ArrowLeft||y.current.ArrowRight)return;b==null||b(d.create(c));break}};return s.createElement(F,{className:z("iui-color-selection-wrapper",o),ref:h,...l},s.createElement(F,{className:"iui-color-field",style:{"--iui-color-field-hue":$,"--iui-color-picker-selected-color":x},ref:P,onPointerDown:p=>{var w;p.preventDefault(),S(p,"onClick"),N(!0),(w=U.current)==null||w.focus()}},s.createElement(F,{className:"iui-color-dot",style:{"--iui-color-dot-inset-block":`${H.toString()}% auto`,"--iui-color-dot-inset-inline":`${E.toString()}% auto`},onPointerDown:()=>{var p;N(!0),(p=U.current)==null||p.focus()},onKeyDown:ue,onKeyUp:me,tabIndex:0,ref:U})),s.createElement(re,{minLabel:"",maxLabel:"",values:[g],className:"iui-hue-slider",trackDisplayMode:"none",tooltipProps:()=>({visible:!1}),onChange:p=>{O(p[0],!0)},onUpdate:p=>{O(p[0],!1)},min:0,max:359,thumbProps:()=>({"aria-label":"Hue"})}),u&&s.createElement(re,{minLabel:"",maxLabel:"",values:[n],className:"iui-opacity-slider",trackDisplayMode:"none",tooltipProps:()=>({visible:!1}),onChange:p=>{I(p[0],!0)},onUpdate:p=>{I(p[0],!1)},min:0,max:1,step:.01,style:{"--iui-color-picker-selected-color":$},thumbProps:()=>({"aria-label":"Opacity"})}))}),ce=s.forwardRef((m,t)=>{const{defaultColorFormat:o,allowedColorFormats:l=["hsl","rgb","hex"],className:r,...h}=m,f=s.useRef(null),{activeColor:c,applyHsvColorChange:b,hsvColor:i,showAlpha:u}=Z(),[a,g]=s.useState(o);s.useEffect(()=>{g(o)},[o]);const[n,x]=s.useState(["","","",""]);s.useEffect(()=>{if(a==="hsl"){const e=c.toHslColor();x([d.getFormattedColorNumber(i.h),d.getFormattedColorNumber(e.s),d.getFormattedColorNumber(e.l),d.getFormattedColorNumber(e.a??c.getAlpha()/255,2)])}else if(a==="rgb"){const e=c.toRgbColor();x([e.r.toString(),e.g.toString(),e.b.toString(),d.getFormattedColorNumber(e.a??c.getAlpha()/255,2)])}else x([c.toHexString(u)]),N(!0)},[c,i.h,a,u]);const[v,N]=s.useState(!0),$=s.useCallback(()=>{const e=l[(l.indexOf(a)+1)%l.length]??l[0];g(e)},[a,l]),H=e=>!!(e&&f.current&&f.current.contains(e)),E=()=>{let e;if(a==="hex")try{const S=n[0].replace(/ /g,"").toLowerCase();if(e=d.create(S),N(!0),c.toHexString(u).toLowerCase()===S)return}catch{N(!1);return}if(a==="hsl"){const[S,k,D,L]=n.map(Number);if(S<0||S>360||k<0||k>100||D<0||D>100||L<0||L>1)return;const y=c.toHslColor();if(y.h===S&&y.s===k&&y.l===D&&y.a===L)return;e=d.create({h:S,s:k,l:D,a:L})}if(a==="rgb"){const[S,k,D,L]=n.map(Number);if(S<0||S>255||k<0||k>255||D<0||D>255||L<0||L>1)return;const y=c.toRgbColor();if(y.r===S&&y.g===k&&y.b===D&&y.a===L)return;e=d.create({r:S,g:k,b:D,a:L})}e&&b(e.toHsvColor(),!0,e)},O=s.createElement(T,{size:"small",maxLength:u?9:7,minLength:1,placeholder:"HEX","aria-label":"Hex",value:n[0],onChange:e=>{const S=e.target.value.startsWith("#")?e.target.value:`#${e.target.value}`;x([S])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),E()},status:v?void 0:"negative"}),I=s.createElement(s.Fragment,null,s.createElement(T,{size:"small",type:"number",min:"0",max:"359",step:".1",placeholder:"H","aria-label":"Hue",value:n[0]??"",onChange:e=>{x([e.target.value,n[1],n[2],n[3]])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[0])<0||Number(n[0])>360?"negative":void 0}),s.createElement(T,{size:"small",type:"number",min:"0",max:"100",step:".1",placeholder:"S","aria-label":"Saturation",value:n[1]??"",onChange:e=>{x([n[0],e.target.value,n[2],n[3]])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[1])<0||Number(n[1])>100?"negative":void 0}),s.createElement(T,{size:"small",type:"number",min:"0",max:"100",step:".1",placeholder:"L","aria-label":"Lightness",value:n[2]??"",onChange:e=>{x([n[0],n[1],e.target.value,n[3]])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[2])<0||Number(n[2])>100?"negative":void 0}),u&&s.createElement(T,{size:"small",type:"number",min:"0",max:"1",step:".01",placeholder:"A","aria-label":"Alpha",value:n[3]??"",onChange:e=>{x([n[0],n[1],n[2],e.target.value])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[3])<0||Number(n[3])>1?"negative":void 0})),P=s.createElement(s.Fragment,null,s.createElement(T,{size:"small",type:"number",min:"0",max:"255",placeholder:"R","aria-label":"Red",value:n[0]??"",onChange:e=>{x([e.target.value,n[1],n[2],n[3]])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[0])<0||Number(n[0])>255?"negative":void 0}),s.createElement(T,{size:"small",type:"number",min:"0",max:"255",placeholder:"G","aria-label":"Green",value:n[1]??"",onChange:e=>{x([n[0],e.target.value,n[2],n[3]])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[1])<0||Number(n[1])>255?"negative":void 0}),s.createElement(T,{size:"small",type:"number",min:"0",max:"255",placeholder:"B","aria-label":"Blue",value:n[2]??"",onChange:e=>{x([n[0],n[1],e.target.value,n[3]])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[2])<0||Number(n[2])>255?"negative":void 0}),u&&s.createElement(T,{size:"small",type:"number",min:"0",max:"1",step:".01",placeholder:"A","aria-label":"Alpha",value:n[3]??"",onChange:e=>{x([n[0],n[1],n[2],e.target.value])},onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),E())},onBlur:e=>{e.preventDefault(),H(e.relatedTarget)||E()},status:Number(n[3])<0||Number(n[3])>1?"negative":void 0})),U=de();return s.createElement(F,{className:z("iui-color-input-wrapper",r),ref:t,...h},s.createElement(F,{className:"iui-color-picker-section-label",id:U},u&&a!=="hex"?a.toUpperCase()+"A":a.toUpperCase()),s.createElement(F,{className:"iui-color-input"},l.length>1&&s.createElement(Y,{styleType:"borderless",onClick:$,size:"small",label:"Switch format"},s.createElement(xe,null)),s.createElement(F,{ref:f,className:"iui-color-input-fields",role:a!=="hex"?"group":void 0,"aria-labelledby":a!=="hex"?U:void 0},a==="hex"&&O,a==="rgb"&&P,a==="hsl"&&I)))}),_=s.forwardRef((m,t)=>{const{colors:o,label:l,className:r,children:h,...f}=m,{activeColor:c,setActiveColor:b,onChangeComplete:i}=Z();return s.createElement(F,{className:z("iui-color-palette-wrapper",r),ref:t,...f},l&&s.createElement(F,{className:"iui-color-picker-section-label"},l),s.createElement(F,{className:"iui-color-palette"},h,o&&o.map((u,a)=>{const g=J(u);return s.createElement(q,{key:a,color:g,onClick:()=>{i==null||i(g),b(g)},isActive:g.equals(c)})})))}),ie=m=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...m},s.createElement("path",{d:"M5 15l-3.781-3.5L5 8v2h8v3H5zm6-7l3.781-3.5L11 1v2H3v3h8z"})),ke={title:"ColorPicker"},j=[{color:"#ffffff",name:"WHITE"},{color:"#5a6973",name:"GREY"},{color:"#00121d",name:"KURETAKE BLACK MANGA"},{color:"#002a44",name:"RHAPSODY IN BLUE"},{color:"#00426b",name:"DARK IMPERIAL BLUE"},{color:"#005a92",name:"JETSKI RACE"},{color:"#0073ba",name:"FRENCH BLUE"},{color:"#008be1",name:"BLUE COLA"},{color:"#30b0ff",name:"FANTASY CONSOLE SKY"},{color:"#58bfff",name:"HELLO SUMMER"},{color:"#7fceff",name:"CHROMIS DAMSEL BLUE"},{color:"#a6ddff",name:"DROPLET"},{color:"#cdecff",name:"LUCID DREAMS"},{color:"#e5f5fd",name:"KODAMA WHITE"},{color:"#010200",name:"REGISTRATION BLACK"},{color:"#122306",name:"YUZU SOY"},{color:"#23450b",name:"FOREST GREEN"},{color:"#346711",name:"TATZELWURM GREEN"},{color:"#458816",name:"CHLOROPHYLL"},{color:"#56aa1c",name:"PLASTIC PINES"},{color:"#5fbb1f",name:"FIELD GREEN"},{color:"#67cc22",name:"GREEN HIGH"},{color:"#91e458",name:"LILLIPUTIAN LIME"},{color:"#b2ec8b",name:"GREEN DAY"},{color:"#d4f4bd",name:"TEA GREEN"},{color:"#eef6e8",name:"VERDE PASTEL"},{color:"#9ba5af",name:"SERYI GREY"},{color:"#cf0000",name:"RED EPIPHYLLUM"},{color:"#ff6300",name:"SAFETY ORANGE"},{color:"#ffc335",name:"RISE-N-SHINE"}],De=()=>{const[m,t]=M.useState(!1),[o,l]=M.useState(j[5]),[r,h]=M.useState(j[5].name),f=c=>{const b=c.toHexString(),i=j.findIndex(u=>u.color===b.toLowerCase());l(j[i]),h(j[i].name),console.log(`Selected ${j[i].color}`)};return C.jsxs(C.Fragment,{children:[C.jsx(X,{content:C.jsx(Q,{selectedColor:o.color,onChangeComplete:f,children:C.jsx(_,{colors:j.map(({color:c})=>c)})}),visible:m,onVisibleChange:t,placement:"bottom-start",children:C.jsx(Y,{children:C.jsx(q,{style:{pointerEvents:"none",margin:0},color:o.color})})}),C.jsx("span",{style:{marginLeft:16},children:r})]})},Le=()=>{const[m,t]=M.useState(!1),[o,l]=M.useState(d.create({h:0,s:100,l:50})),r=["hsl","rgb","hex"],[h,f]=M.useState(r[0]),c=i=>{l(i),console.log(`Selected ${b(i)}`)},b=(i=o)=>{switch(h){case"hsl":return i.toHslString();case"rgb":return i.toRgbString();case"hex":return i.toHexString().toUpperCase()}};return C.jsx(C.Fragment,{children:C.jsxs(ne,{children:[C.jsx(X,{content:C.jsxs(Q,{selectedColor:o,onChangeComplete:c,children:[C.jsx(le,{}),C.jsx(ce,{defaultColorFormat:h}),C.jsx(_,{label:"Saved Colors",colors:[{h:0,s:100,l:50},{r:255,g:98,b:0},"#fec134","#5A6973",{h:95,s:83,v:72},{h:250,s:100,l:59}]})]}),visible:m,onVisibleChange:t,placement:"bottom-start",children:C.jsx(Y,{children:C.jsx(q,{style:{pointerEvents:"none",margin:0},color:o})})}),C.jsx(se,{onClick:()=>{f(r[(r.indexOf(h)+1)%r.length])},endIcon:C.jsx(ie,{}),children:C.jsx("div",{style:{width:170},children:b()??"No color selected."})})]})})},Ie=()=>{const[m,t]=M.useState(!1),[o,l]=M.useState(d.create({r:90,g:105,b:115,a:.4})),r=["hsl","rgb","hex"],[h,f]=M.useState(r[0]),c=i=>{l(i),console.log(`Selected ${b(i)}`)},b=(i=o)=>{switch(h){case"hsl":return i.toHslString(!0);case"rgb":return i.toRgbString(!0);case"hex":return i.toHexString(!0)}};return C.jsx(C.Fragment,{children:C.jsxs(ne,{children:[C.jsx(X,{content:C.jsxs(Q,{selectedColor:o,onChangeComplete:c,showAlpha:!0,children:[C.jsx(le,{}),C.jsx(ce,{defaultColorFormat:h}),C.jsx(_,{label:"Saved Colors",colors:[{r:90,g:105,b:115,a:1},{r:90,g:105,b:115,a:.81},{r:90,g:105,b:115,a:.4}]})]}),visible:m,onVisibleChange:t,placement:"bottom-start",children:C.jsx(Y,{children:C.jsx(q,{style:{pointerEvents:"none",margin:0},color:o})})}),C.jsx(se,{onClick:()=>{f(r[(r.indexOf(h)+1)%r.length])},endIcon:C.jsx(ie,{}),children:C.jsx("div",{style:{width:200},children:b()??"No color selected."})})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Le as Advanced,De as Basic,Ie as WithAlpha,ke as default};
