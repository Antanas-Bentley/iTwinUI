import{r as a,q as Z,n as ve,B as b,c as Y,I as x}from"./index-CwFMGc_c.js";import{T as Ee}from"./TimePicker-Dzi-lxZX.js";import{S as ke}from"./SvgChevronLeft-CveJUkrT.js";import{S as Te}from"./SvgChevronRight-K_hQ2uGC.js";const Q=(i,l)=>{if(!i||!l)return!1;const o=new Date(i),n=new Date(l);return o&&o.setHours(0,0,0,0),n&&n.setHours(0,0,0,0),o<n},Re=i=>a.createElement(Z,{...i},a.createElement("path",{d:"m14.6 0 1.4 1.4-6.6 6.6 6.6 6.6-1.4 1.4-8-8zm-6.6 0 1.4 1.4-6.6 6.6 6.6 6.6-1.4 1.4-8-8z"})),Ne=i=>a.createElement(Z,{...i},a.createElement("path",{d:"m1.4 0-1.4 1.4 6.6 6.6-6.6 6.6 1.4 1.4 8-8zm6.6 0-1.4 1.4 6.6 6.6-6.6 6.6 1.4 1.4 8-8z"})),p=(i,l)=>i&&l&&i.getFullYear()===l.getFullYear()&&i.getMonth()===l.getMonth()&&i.getDate()===l.getDate(),He=(i,l,o)=>{if(!i||!l||!o)return!1;const n=new Date(l),m=new Date(o),d=new Date(i);return d&&d.setHours(0,0,0,0),n&&n.setHours(0,0,0,0),m&&m.setHours(0,0,0,0),d>n&&d<m},X=(i,l)=>!l,Ie=["January","February","March","April","May","June","July","August","September","October","November","December"],xe=["Su","Mo","Tu","We","Th","Fr","Sa"],ye=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Oe=i=>{const l=new Intl.DateTimeFormat(i,{weekday:"short"}),o=new Intl.DateTimeFormat(i,{weekday:"long"}),n=new Intl.DateTimeFormat(i,{month:"long"}),m=[n.format(new Date(2020,0,1)),n.format(new Date(2020,1,1)),n.format(new Date(2020,2,1)),n.format(new Date(2020,3,1)),n.format(new Date(2020,4,1)),n.format(new Date(2020,5,1)),n.format(new Date(2020,6,1)),n.format(new Date(2020,7,1)),n.format(new Date(2020,8,1)),n.format(new Date(2020,9,1)),n.format(new Date(2020,10,1)),n.format(new Date(2020,11,1))],d=[o.format(new Date(2020,10,1)),o.format(new Date(2020,10,2)),o.format(new Date(2020,10,3)),o.format(new Date(2020,10,4)),o.format(new Date(2020,10,5)),o.format(new Date(2020,10,6)),o.format(new Date(2020,10,7))],y=[l.format(new Date(2020,10,1)).slice(0,2),l.format(new Date(2020,10,2)).slice(0,2),l.format(new Date(2020,10,3)).slice(0,2),l.format(new Date(2020,10,4)).slice(0,2),l.format(new Date(2020,10,5)).slice(0,2),l.format(new Date(2020,10,6)).slice(0,2),l.format(new Date(2020,10,7)).slice(0,2)];return{months:m,shortDays:y,days:d}},ze=a.forwardRef((i,l)=>{const{date:o,onChange:n,localizedNames:m,className:d,setFocus:y=!1,showTime:_=!1,use12Hours:ee=!1,precision:te,hourStep:ne,minuteStep:re,secondStep:ae,useCombinedRenderer:se,combinedRenderer:oe,hourRenderer:ce,minuteRenderer:le,secondRenderer:ue,meridiemRenderer:ie,showYearSelection:J=!1,enableRangeSelect:E=!1,startDate:w,endDate:A,monthYearProps:T,calendarProps:me,monthProps:R,weekDayProps:N,dayProps:S,weekProps:H,isDateDisabled:v,applyBackground:ge=!0,showDatesOutsideMonth:C=!0,...fe}=i,K=(m==null?void 0:m.months)??Ie,De=(m==null?void 0:m.shortDays)??xe,he=(m==null?void 0:m.days)??ye,[g,j]=a.useState(o),[s,$]=a.useState(w),[u,B]=a.useState(A),[D,f]=a.useState(s??g??new Date),[c,we]=a.useState((s==null?void 0:s.getMonth())??(g==null?void 0:g.getMonth())??new Date().getMonth()),[h,Me]=a.useState((s==null?void 0:s.getFullYear())??(g==null?void 0:g.getFullYear())??new Date().getFullYear()),[de,q]=a.useState(!0),F=a.useRef(y);a.useEffect(()=>{F.current&&(F.current=!1)});const M=a.useCallback((e,t)=>{we(e),Me(t)},[]);a.useEffect(()=>{const e=new Date;j(o),$(w),B(A),E||f(o??e),M((w==null?void 0:w.getMonth())??(o==null?void 0:o.getMonth())??e.getMonth(),(w==null?void 0:w.getFullYear())??(o==null?void 0:o.getFullYear())??e.getFullYear())},[o,M,w,A,E]);const L=a.useMemo(()=>{let e=new Date(h,c,1).getDay();e===0&&C&&(e=7);const t=[];for(let r=1;r<=42;r++){const k=r-e;t.push(new Date(h,c,k))}return t},[c,h,C]),pe=a.useMemo(()=>{const e=[],t=Math.ceil(L.length/7);for(let r=0;r<t;r++)e.push(L.slice(r*7,(r+1)*7));return e},[L]),I=(e,t)=>{const r=s??g??new Date;return new Date(e,t,r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds())},Se=()=>{const e=h-1;M(c,e),f(I(e,c))},Fe=()=>{const e=h+1;M(c,e),f(I(e,c))},O=()=>{const e=c!==0?c-1:11,t=c!==0?h:h-1;M(e,t),f(I(t,e))},z=()=>{const e=c!==11?c+1:0,t=c!==11?h:h+1;M(e,t),f(I(t,e))},U=e=>{if(E)if(de){e.getMonth()!==(s==null?void 0:s.getMonth())&&M(e.getMonth(),e.getFullYear());const t=s??new Date,r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());$(r),f(r),Q(r,u)?u&&(n==null||n(r,u)):(B(r),n==null||n(r,r)),q(!1)}else{e.getMonth()!==(u==null?void 0:u.getMonth())&&M(e.getMonth(),e.getFullYear());const t=u??new Date,r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());f(r),Q(r,s)?($(r),u&&(n==null||n(r,u))):(B(r),s&&(n==null||n(s,r)),q(!0))}else{e.getMonth()!==(g==null?void 0:g.getMonth())&&M(e.getMonth(),e.getFullYear());const t=g??new Date,r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());j(r),f(r),X(n,E)&&(n==null||n(r))}},be=e=>{if(e.altKey||!D)return;const t=new Date(D);switch(e.key){case"ArrowDown":t.setDate(D.getDate()+7),t.getMonth()!==c&&z(),f(t),F.current=!0,e.preventDefault();break;case"ArrowUp":t.setDate(D.getDate()-7),t.getMonth()!==c&&O(),f(t),F.current=!0,e.preventDefault();break;case"ArrowLeft":t.setDate(D.getDate()-1),t.getMonth()!==c&&O(),f(t),F.current=!0,e.preventDefault();break;case"ArrowRight":t.setDate(D.getDate()+1),t.getMonth()!==c&&z(),f(t),F.current=!0,e.preventDefault();break;case"Enter":case" ":case"Spacebar":v!=null&&v(D)||U(D),e.preventDefault();break}},V=e=>{if(e.getMonth()!==c)return"iui-calendar-day-outside-month";let t="iui-calendar-day";return p(e,g)||p(e,s)&&p(e,u)?t+="-selected":p(e,s)?t+="-range-start":p(e,u)&&(t+="-range-end"),s&&u&&He(e,s,u)&&(t+="-range"),p(e,new Date)&&(t+="-today"),t},G=ve();return a.createElement(b,{className:Y("iui-date-picker",{"iui-popover-surface":ge},d),ref:l,...fe},a.createElement("div",null,a.createElement(b,{as:"div",...T,className:Y("iui-calendar-month-year",T==null?void 0:T.className)},J&&a.createElement(x,{styleType:"borderless",onClick:Se,"aria-label":"Previous year",size:"small"},a.createElement(Re,null)),a.createElement(x,{styleType:"borderless",onClick:O,"aria-label":"Previous month",size:"small"},a.createElement(ke,null)),a.createElement("span",{"aria-live":"polite"},a.createElement(b,{as:"span",id:G,title:K[c],...R,className:Y("iui-calendar-month",R==null?void 0:R.className)},K[c])," ",h),a.createElement(x,{styleType:"borderless",onClick:z,"aria-label":"Next month",size:"small"},a.createElement(Te,null)),J&&a.createElement(x,{styleType:"borderless",onClick:Fe,"aria-label":"Next year",size:"small"},a.createElement(Ne,null))),a.createElement(b,{as:"div",...N,className:Y("iui-calendar-weekdays",N==null?void 0:N.className)},De.map((e,t)=>a.createElement("div",{key:e,title:he[t]},e))),a.createElement("div",{onKeyDown:be,role:"listbox","aria-labelledby":G,...me},pe.map((e,t)=>a.createElement(b,{as:"div",key:`week-${c}-${t}`,...H,className:Y("iui-calendar-week",H==null?void 0:H.className)},e.map((r,k)=>{const Ye=r.getDate(),P=v==null?void 0:v(r);return r.getMonth()!==c&&!C?a.createElement(b,{key:`day-${c}-${k}`,className:Y(V(r),S==null?void 0:S.className),"aria-hidden":!0}):a.createElement(b,{as:"div",key:`day-${c}-${k}`,onClick:()=>!P&&U(r),role:"option",tabIndex:p(r,D)?0:-1,"aria-disabled":P?"true":void 0,ref:W=>p(r,D)&&F.current&&(W==null?void 0:W.focus()),...S,className:Y(V(r),S==null?void 0:S.className)},Ye)}))))),_&&a.createElement(Ee,{date:s??g,use12Hours:ee,precision:te,hourStep:ne,minuteStep:re,secondStep:ae,useCombinedRenderer:se,combinedRenderer:oe,hourRenderer:ce,minuteRenderer:le,secondRenderer:ue,meridiemRenderer:ie,onChange:e=>X(n,E)?n==null?void 0:n(e):n==null?void 0:n(new Date((s==null?void 0:s.getFullYear())??e.getFullYear(),(s==null?void 0:s.getMonth())??e.getMonth(),(s==null?void 0:s.getDate())??e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()),new Date((u==null?void 0:u.getFullYear())??e.getFullYear(),(u==null?void 0:u.getMonth())??e.getMonth(),(u==null?void 0:u.getDate())??e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()))}))});export{ze as D,Oe as g,Q as i};
