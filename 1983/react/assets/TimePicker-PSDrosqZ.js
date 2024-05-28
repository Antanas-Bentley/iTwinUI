import{r as u,B as P,c as z}from"./index-DcTlL2oN.js";const N=(r,s,o)=>{const d=o?T(r.getHours(),o):r.getHours();return o?!!s&&d%12===s.getHours()%12:!!s&&d===s.getHours()},x=(r,s)=>!!s&&r.getMinutes()===s.getMinutes(),K=(r,s)=>!!s&&r.getSeconds()===s.getSeconds(),$=(r,s,o,d)=>{let n=!0;switch(o){case"seconds":if(n=K(r,s),!n)break;case"minutes":if(n=x(r,s),!n)break;case"hours":n=N(r,s,d)}return n},q=(r,s)=>!!s&&(r==="AM"?s.getHours()<12:s.getHours()>=12),T=(r,s)=>{const o=r%12;return s==="PM"?o+12:o},M=(r,s)=>new Date(s.getFullYear(),s.getMonth(),s.getDate(),r,s.getMinutes(),s.getSeconds()),te=(r,s)=>{let o="";switch(s){case"seconds":o=":"+r.getSeconds().toLocaleString(void 0,{minimumIntegerDigits:2});case"minutes":o=":"+r.getMinutes().toLocaleString(void 0,{minimumIntegerDigits:2})+o;case"hours":o=r.getHours().toLocaleString(void 0,{minimumIntegerDigits:2})+o}return o},ne=u.forwardRef((r,s)=>{const{date:o,onChange:d,use12Hours:n=!1,precision:g="minutes",hourStep:p=1,minuteStep:k=1,secondStep:C=1,setFocusHour:R=!1,hourRenderer:F=e=>e.getHours().toLocaleString(void 0,{minimumIntegerDigits:2}),minuteRenderer:j=e=>e.getMinutes().toLocaleString(void 0,{minimumIntegerDigits:2}),secondRenderer:I=e=>e.getSeconds().toLocaleString(void 0,{minimumIntegerDigits:2}),meridiemRenderer:i=e=>e,useCombinedRenderer:D=!1,combinedRenderer:h=te,className:S,...l}=r,[c,B]=u.useState(o),[f,w]=u.useState(c??new Date),[H,Y]=u.useState(n?(f==null?void 0:f.getHours())>11?"PM":"AM":void 0);u.useEffect(()=>{w(o??new Date),B(o)},[o]);const G=e=>{const t=n?T(e.getHours(),H):e.getHours(),a=M(t,c??new Date);E(a)},J=e=>{const t=n?T(e.getHours(),H):e.getHours(),a=M(t,e);E(a)},O=e=>{let t=c??new Date;const a=t.getHours();Y(e),e==="AM"&&a>11&&(t=M(a-12,t)),e==="PM"&&a<=12&&(t=M(a+12,t)),E(t)},E=e=>{let t=e;g==="hours"&&(t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),0,0)),g==="minutes"&&(t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),0)),w(t),B(t),d==null||d(t)},Q=e=>{const t=n?T(e.getHours(),H):e.getHours();w(M(t,f))},W=e=>{const t=n?T(e.getHours(),H):e.getHours();w(M(t,e))},X=e=>{let t=c??new Date;const a=t.getHours();e==="AM"&&a>11&&(Y(e),t=M(a-12,t)),e==="PM"&&a<=12&&(Y(e),t=M(a+12,t)),w(t)},L=(e,t,a)=>{const b=[];for(let y=0;y<e;y++)y%a===0&&b.push(t(y));return b},Z=u.useMemo(()=>{const e=c??new Date,t=[],a=Array.from(Array(n?12:24).keys()).filter(m=>m%p===0).map(m=>n&&m===0?12:m),b=Array.from(Array(60).keys()).filter(m=>m%k===0),y=Array.from(Array(60).keys()).filter(m=>m%C===0);return a.forEach(m=>{g==="hours"?t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate(),m,e.getMinutes(),e.getSeconds())):b.forEach(U=>{g==="minutes"?t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate(),m,U,e.getSeconds())):y.forEach(ee=>{t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate(),m,U,ee))})})}),t},[p,k,C,c,n,g]),_=u.useMemo(()=>{const e=c??new Date;return L(n?12:24,t=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),n&&t===0?12:t,e.getMinutes(),e.getSeconds()),p)},[p,c,n]),V=u.useMemo(()=>{const e=c??new Date;return L(60,t=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),t,e.getSeconds()),k)},[k,c]),v=u.useMemo(()=>{const e=c??new Date;return L(60,t=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),t),C)},[C,c]);return u.createElement(P,{className:z("iui-time-picker",S),ref:s,...l},D?u.createElement(A,{data:Z,isSameFocused:e=>$(e,f,g,n?H:void 0),isSameSelected:e=>$(e,c,g,n?H:void 0),onFocusChange:W,onSelectChange:J,setFocus:R,precision:g,valueRenderer:h}):u.createElement(u.Fragment,null,u.createElement(A,{data:_,isSameFocused:e=>N(e,f,n?H:void 0),isSameSelected:e=>N(e,c,n?H:void 0),onFocusChange:Q,onSelectChange:G,setFocus:R,valueRenderer:F}),g!=="hours"&&u.createElement(A,{data:V,isSameFocused:e=>x(e,f),isSameSelected:e=>x(e,c),onFocusChange:e=>w(e),onSelectChange:e=>E(e),valueRenderer:j}),g==="seconds"&&u.createElement(A,{data:v,isSameFocused:e=>K(e,f),isSameSelected:e=>K(e,c),onFocusChange:e=>w(e),onSelectChange:e=>E(e),valueRenderer:I})),n&&u.createElement(A,{data:["AM","PM"],isSameFocused:e=>q(e,f),isSameSelected:e=>q(e,c),onFocusChange:e=>X(e),onSelectChange:e=>O(e),valueRenderer:i,className:"iui-period"}))}),A=r=>{const{data:s,onFocusChange:o,onSelectChange:d,isSameFocused:n,isSameSelected:g,setFocus:p=!1,valueRenderer:k,precision:C="minutes",className:R="iui-time"}=r,F=u.useRef(p);u.useEffect(()=>{F.current&&(F.current=!1)});const j=(i,D)=>{D&&(i==null||i.scrollIntoView({block:"nearest",inline:"nearest"}))},I=(i,D,h,S,l)=>{if(!i.altKey)switch(i.key){case"ArrowDown":if(l+1>D)break;h(l+1),F.current=!0,i.preventDefault();break;case"ArrowUp":if(l-1<0)break;h(l-1),F.current=!0,i.preventDefault();break;case"Enter":case" ":case"Spacebar":S(l),i.preventDefault();break}};return u.createElement(P,{className:`${R}`},u.createElement("ol",null,s.map((i,D)=>{const h=n(i);return u.createElement(P,{as:"li",onKeyDown:S=>{I(S,s.length-1,l=>o(s[l]),l=>d(s[l]),D)},className:z({"iui-selected":g(i)}),key:D,tabIndex:h?0:void 0,ref:S=>{j(S,h),F.current&&h&&(S==null||S.focus())},onClick:()=>{d(i)}},k(i,C))})))};export{ne as T};
