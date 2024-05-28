import{r as t,B as T,c as y,T as ce,d as me,l as R}from"./index-BXBlTZh6.js";import{u as G}from"./useEventListener-DQfxgVie.js";function de(s,r){return r==="odd-segments"&&(s+1)%2===0?!0:r==="even-segments"&&s%2===0}function J(s,r,e){const n=[],i=[...s];if(i.sort((m,p)=>m-p),i.length===0||i[0]<r||i[i.length-1]>e||r===e)return[];let l=r;for(let m=0;m<i.length;m++)n.push({left:l,right:i[m]}),l=i[m];return n.push({left:l,right:e}),n}const fe=s=>{const{className:r,trackDisplayMode:e,sliderMin:n,sliderMax:i,values:l,orientation:m}=s,[p,w]=t.useState(()=>J(l,n,i));return t.useEffect(()=>{w(J(l,n,i))},[l,n,i]),t.createElement(t.Fragment,null,e!=="none"&&p.map((V,h)=>{const D=V.left>=n&&i!==n?100*(V.left-n)/(i-n):0,M=V.right>=n&&i!==n?100-100*(V.right-n)/(i-n):100;return t.createElement(t.Fragment,{key:h},de(h,e)?t.createElement(T,{className:y("iui-slider-track",r),style:{...m==="horizontal"?{insetInlineStart:`${D}%`,insetInlineEnd:`${M}%`}:{insetBlockStart:`${M}%`,insetBlockEnd:`${D}%`}}}):null)}))},ge=s=>{const{value:r,index:e,minVal:n,maxVal:i,step:l,sliderMin:m,sliderMax:p,isActive:w,onThumbActivated:V,onThumbValueChanged:h,tooltipProps:D,thumbProps:M,disabled:u}=s,g=t.useRef(null),P=t.useCallback((b,E)=>{if(!(u||b.altKey)){switch(b.key){case"ArrowLeft":case"ArrowDown":h(e,Math.max(r-l,n),E);break;case"ArrowRight":case"ArrowUp":h(e,Math.min(r+l,i),E);break;case"Home":h(e,n,E);break;case"End":h(e,i,E);break;default:return}b.preventDefault()}},[u,h,e,r,l,n,i]),F=t.useCallback(()=>{!u&&V(e)},[u,e,V]),A=t.useMemo(()=>r<m?m:r>p?p:r,[p,m,r]),C=t.useMemo(()=>p===m?0:100*(A-m)/(p-m),[A,p,m]),{style:L,className:$,...v}=M||{};return t.createElement(ce,{placement:"top",autoUpdateOptions:{animationFrame:!0},ariaStrategy:"none",...D},t.createElement(T,{...v,ref:me(g,M==null?void 0:M.ref),style:{...L,"--iui-slider-thumb-position":`${C}%`},className:y("iui-slider-thumb",{"iui-active":w},$),role:"slider",tabIndex:u?void 0:0,"aria-valuemin":n,"aria-valuenow":r,"aria-valuemax":i,"aria-disabled":u,onPointerDown:F,onKeyDown:b=>P(b,!1),onKeyUp:b=>P(b,!0)}))},Q=(s,r,e,n)=>{if(n==="horizontal")return(R(r,s.left,s.right)-s.left)/s.width;const i=R(e,s.top,s.bottom);return(s.bottom-i)/s.height},pe=(s,r)=>{if(s.length===1)return 0;const e=s.map(i=>Math.abs(i-r)),n=Math.min(...e);return e.indexOf(n)},U=(s,r)=>s!=="auto"?s:r.length%2?"even-segments":"odd-segments",W=(s,r,e)=>Math.round((s-e)/r)*r+e,be=(s,r,e)=>Number.isInteger(r)?s.toFixed(0):s.toFixed(e),he=(s,r)=>{var n;const e=s.ownerDocument;if(!s.contains(e.activeElement)||Number((n=e.activeElement)==null?void 0:n.getAttribute("data-index"))!==r){const i=s.querySelector(`[data-index="${r}"]`);i&&i.focus()}},ke=t.forwardRef((s,r)=>{var q,H;const{min:e=0,max:n=100,values:i,step:l=1,tooltipProps:m,disabled:p=!1,tickLabels:w,minLabel:V,maxLabel:h,trackDisplayMode:D="auto",thumbMode:M="inhibit-crossing",onChange:u,onUpdate:g,thumbProps:P,className:F,trackContainerProps:A,minProps:C,maxProps:L,trackProps:$,tickProps:v,ticksProps:b,orientation:E="horizontal",...Z}=s,[c,I]=t.useState(i);t.useEffect(()=>{I(i)},[i]);const[z,_]=t.useState(()=>V??e.toString());t.useEffect(()=>{_(V??e.toString())},[V,e]);const[X,ee]=t.useState(()=>h??n.toString());t.useEffect(()=>{ee(h??n.toString())},[h,n]);const[te,ne]=t.useState(()=>U(D,c));t.useEffect(()=>{ne(U(D,c))},[D,c]);const x=t.useRef(null),Y=t.useMemo(()=>{const a=l.toString(),o=a.indexOf(".");return a.length-(o+1)},[l]),B=t.useCallback(a=>{if(M==="inhibit-crossing"){const o=a===0?e:c[a-1]+l,d=a<c.length-1?c[a+1]-l:n;return[o,d]}return[e,n]},[n,e,l,M,c]),[k,j]=t.useState(void 0),O=t.useCallback((a,o)=>{if(x.current&&k!==void 0){const d=Q(x.current.getBoundingClientRect(),a.clientX,a.clientY,E);let f=e+(n-e)*d;f=W(f,l,e);const[N,K]=B(k);if(f=R(f,N,K),f!==c[k]){const S=[...c];S[k]=f,I(S),o==="onChange"?u==null||u(S):g==null||g(S)}else o==="onChange"&&(u==null||u(c))}},[k,e,n,l,B,c,g,u,E]),ae=t.useCallback(a=>{k!==void 0&&(a.preventDefault(),a.stopPropagation(),O(a,"onUpdate"))},[k,O]),se=t.useCallback((a,o,d)=>{if(!(c[a]===o&&!d))if(d)u==null||u(c);else{const f=[...c];f[a]=o,g==null||g(f),I(f)}},[c,g,u]),re=t.useCallback(a=>{j(a)},[]),ie=t.useCallback(a=>{k!==void 0&&(O(a,"onChange"),j(void 0),a.preventDefault(),a.stopPropagation())},[k,O]),le=t.useCallback(a=>{if(x.current){const o=Q(x.current.getBoundingClientRect(),a.clientX,a.clientY,E);let d=e+(n-e)*o;d=W(d,l,e);const f=pe(c,d),[N,K]=B(f);if(d=R(d,N,K),d===c[f])return;const S=[...c];S[f]=d,I(S),u==null||u(S),g==null||g(S),he(x.current,f),a.preventDefault(),a.stopPropagation()}},[e,n,l,c,B,u,g,E]);G("pointermove",ae,(q=x.current)==null?void 0:q.ownerDocument),G("pointerup",ie,(H=x.current)==null?void 0:H.ownerDocument);const oe=t.useMemo(()=>w?Array.isArray(w)?t.createElement(T,{as:"div",...b,className:y("iui-slider-ticks",b==null?void 0:b.className)},w.map((a,o)=>t.createElement(T,{as:"span",...v,key:o,className:y("iui-slider-tick",v==null?void 0:v.className)},a))):w:null,[w,v,b]),ue=t.useCallback((a,o)=>{const d=m?m(a,o,l):{};return{...d,content:d.content?d.content:be(o,l,Y)}},[Y,l,m]);return t.createElement(T,{ref:r,className:y("iui-slider-container",F),"data-iui-orientation":E,"data-iui-disabled":p?"true":void 0,...Z},z&&t.createElement(T,{as:"span",...C,className:y("iui-slider-min",C==null?void 0:C.className)},z),t.createElement(T,{ref:x,...A,className:y("iui-slider",{"iui-grabbing":k!==void 0},A==null?void 0:A.className),onPointerDown:le},c.map((a,o)=>{const[d,f]=B(o),N=P==null?void 0:P(o);return t.createElement(ge,{key:(N==null?void 0:N.id)??o,index:o,disabled:p,isActive:k===o,onThumbActivated:re,onThumbValueChanged:se,minVal:d,maxVal:f,value:a,tooltipProps:ue(o,a),thumbProps:N,step:l,sliderMin:e,sliderMax:n})}),t.createElement(fe,{trackDisplayMode:te,sliderMin:e,sliderMax:n,values:c,orientation:E,...$})),oe,X&&t.createElement(T,{as:"span",...L,className:y("iui-slider-max",L==null?void 0:L.className)},X))});export{ke as S};
