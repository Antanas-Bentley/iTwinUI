import{r as s,k as $,g as h,z as j,a7 as q}from"./index-vgP8bFIz.js";const A=q.unstable_batchedUpdates??(r=>void r()),P=(r,t=document)=>!r||r===t.body?t.body:G(r)?r:P(r.parentElement,t),G=r=>/(auto|scroll|overlay)/.test(v(r,"overflow")+v(r,"overflow-y")),v=(r,t)=>getComputedStyle(r,null).getPropertyValue(t),D=r=>(r==null?void 0:r.getBoundingClientRect().height)??0,y=r=>{if(!r)return;const t=parseFloat(v(r,"margin-block-start"))+parseFloat(v(r,"margin-block-end"));return D(r)+(isNaN(t)?0:t)},N=(r,t)=>r?Math.floor(t/r):0,J=(r,t)=>t>0?r*t:0,L=(r,t,m,a)=>Math.min(m-t,N(r,D(a))),X=s.forwardRef((r,t)=>{const{innerProps:m,outerProps:a,visibleChildren:u}=K(r);return s.createElement("div",{...a,ref:t},s.createElement("div",{...m},u))}),K=r=>{const{itemsLength:t,itemRenderer:m,bufferSize:a=10,scrollToIndex:u,style:F,...B}=r,[M,U]=s.useState(0),[R,_]=s.useState(0),f=s.useRef(),l=s.useRef(null),c=s.useRef({first:0,middle:0,last:0}),b=s.useRef(),[T,O]=s.useState(0),d=s.useRef({start:0,end:0}),[k,W]=s.useState(!1),w=()=>{var e;return f.current??((e=l.current)==null?void 0:e.ownerDocument.scrollingElement)},E=s.useMemo(()=>{const e=[],n=Math.min(t,M+R+a*2);for(let o=M;o<n;o++)e.push(m(o));return e},[t,m,a,M,R]),p=s.useCallback(()=>{var V,z,I;if(!l.current||!E.length)return;const e=l.current.children.item(0),n=l.current.children.item(1),o=l.current.children.item(l.current.children.length-1),i=Number(((V=y(e))==null?void 0:V.toFixed(2))??0);c.current={first:i,middle:Number(((z=y(n))==null?void 0:z.toFixed(2))??i),last:Number(((I=y(o))==null?void 0:I.toFixed(2))??i)}},[E.length]),Y=s.useCallback(({height:e})=>{e>0&&W(!0),A(()=>{O(e),p()})},[p]),[H,g]=$(Y);h(()=>{var n;const e=P(l.current,(n=l.current)==null?void 0:n.ownerDocument);f.current=e,H(e)},[H]),h(()=>()=>g==null?void 0:g.disconnect(),[g]),h(()=>p(),[p]);const C=s.useCallback(()=>{const e=w();if(!e)return;const n=N(c.current.middle,Math.round(e.scrollTop)),o=L(c.current.middle,n,t,e),i=Math.min(Math.max(0,n-a),Math.max(0,t-a*2-o));d.current={start:n,end:n+o},U(i),_(o),l.current&&(l.current.style.transform=`translateY(${J(c.current.middle,i)}px)`)},[a,t]),S=s.useCallback(()=>{C()},[C]),x=s.useCallback(()=>{var e,n;b.current&&(!f.current||f.current===((e=l.current)==null?void 0:e.ownerDocument.body)?(n=l.current)==null||n.ownerDocument.removeEventListener("scroll",b.current):f.current.removeEventListener("scroll",b.current))},[]);return h(()=>{var e,n;return x(),b.current=S,!f.current||f.current===((e=l.current)==null?void 0:e.ownerDocument.body)?(n=l.current)==null||n.ownerDocument.addEventListener("scroll",S):f.current.addEventListener("scroll",S),x},[S,x]),h(()=>{if(!k)return;const e=w();if(!(!e||u==null)){if(u>d.current.end||u<d.current.start){const n=u>d.current.end?u-d.current.end:u-d.current.start;if(u===0){e.scrollTo({top:0});return}e.scrollTo({top:n>0?Math.ceil(e.scrollTop)+n*c.current.middle:u*c.current.middle});const o=N(c.current.middle,Math.round(e.scrollTop)),i=L(c.current.middle,o,t,e);d.current={start:o,end:o+i}}if(u===d.current.start){const n=Math.round(e.scrollTop),o=n%c.current.middle;o>0&&e.scrollTo({top:n-o});return}if(u===d.current.end){const n=(e.offsetHeight-c.current.first)%c.current.middle,o=Math.ceil(e.scrollTop),i=o%c.current.middle;n>0&&i===0&&e.scrollTo({top:o+c.current.middle-n})}}},[u,k,t]),h(()=>{T&&C()},[T,C]),{outerProps:{style:{minBlockSize:t>1?Math.max(t-2,0)*c.current.middle+c.current.first+c.current.last:c.current.middle,minInlineSize:"100%",...F},...B},innerProps:{style:{willChange:"transform"},ref:j(l)},visibleChildren:E}};export{X as V,K as u};
