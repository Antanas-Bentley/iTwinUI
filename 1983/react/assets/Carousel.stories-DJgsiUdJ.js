import{r as e,g as G,d as K,h as L,B as j,c as p,m as J,i as Q,k as X,l as B,I as z,n as Y,o as Z,j as d,R as O}from"./index-DcTlL2oN.js";import{u as ee}from"./useIntersection-CWKvzQKL.js";import{S as te}from"./SvgChevronLeft-DPtFWOrn.js";import{S as re}from"./SvgChevronRight-CxIVt-7l.js";import{T as se}from"./Text-CrVlHi0R.js";import{C as P}from"./Code-DVETrYcn.js";const D=e.createContext(void 0),oe=e.forwardRef((t,u)=>{const{children:r,className:s,...i}=t,c=e.useContext(D);if(!c)throw new Error("CarouselSlider must be used within Carousel");const{setSlideCount:a,idPrefix:f,scrollToSlide:n,isManuallyUpdating:o}=c,h=e.useMemo(()=>e.Children.map(r,(x,g)=>e.isValidElement(x)?e.cloneElement(x,{id:`${f}--slide-${g}`,"aria-labelledby":`${f}--dot-${g}`,index:g}):x)??[],[r,f]);G(()=>{a(h.length)},[h.length,a]);const C=e.useRef(null),y=K(C,u);n.current=(x,{instant:g}={})=>{var I,E,T;o.current=!0;const k=(I=C.current)==null?void 0:I.children.item(x);if(!C.current||!k)return;const v=(T=(E=L())==null?void 0:E.matchMedia("(prefers-reduced-motion: no-preference)"))==null?void 0:T.matches;C.current.scrollTo({left:k.offsetLeft-C.current.offsetLeft,behavior:g||!v?"instant":"smooth"})};const b=e.useRef(),w=e.useCallback(()=>{var x,g;b.current&&((x=L())==null||x.clearTimeout(b.current)),b.current=(g=L())==null?void 0:g.setTimeout(()=>{o.current=!1},100)},[o]);return e.createElement(j,{className:p("iui-carousel-slider",s),ref:y,onScroll:w,tabIndex:-1,...i},h)}),ne=e.forwardRef((t,u)=>{const{index:r,className:s,children:i,...c}=t,a=e.useContext(D);if(!a||r==null)throw new Error("CarouselSlide must be used within Carousel");const{isManuallyUpdating:f,currentIndex:n,setCurrentIndex:o}=a,h=e.useCallback(()=>{f.current||o(r)},[r,f,o]),C=ee(h,{threshold:.5},!1),y=K(C,u);return e.createElement(j,{className:p("iui-carousel-slider-item",s),role:"tabpanel","aria-roledescription":"slide",tabIndex:r===n?0:void 0,ref:y,inert:r!==n?"":void 0,...c,onKeyDown:J(t.onKeyDown,b=>{(b.key==="ArrowLeft"||b.key==="ArrowRight")&&b.preventDefault()})},i)}),U=e.forwardRef((t,u)=>{const{isActive:r,isSmaller:s,isSmall:i,className:c,...a}=t;return e.createElement(Q,{role:"tab",tabIndex:r?0:-1,className:p("iui-carousel-navigation-dot",{"iui-active":r,"iui-first":s,"iui-second":i},c),"aria-selected":r,ref:u,...a})}),V=e.forwardRef((t,u)=>{const{currentIndex:r,length:s,className:i,onSlideChange:c,children:a,...f}=t,n=e.useContext(D),o=s??(n==null?void 0:n.slideCount)??e.Children.count(a),h=r??(n==null?void 0:n.currentIndex)??0,C=t.id??(n==null?void 0:n.idPrefix),y=e.useCallback(m=>{var l,R;n&&(n.setCurrentIndex(m),n.scrollToSlide.current(m)),(R=(l=g.current)==null?void 0:l.children[m])==null||R.focus(),c==null||c(m)},[n,c]),b=e.useRef(!0),[w,x]=e.useState(o),g=e.useRef(null),[k,v]=e.useState(),[I,E]=X(({width:m})=>{if(!g.current)return;v(m);const l=g.current.children[0].offsetWidth;x(Math.floor(m/l))});e.useEffect(()=>E==null?void 0:E.disconnect(),[E]);const T=K(u,I,g),N=e.useMemo(()=>B(h-Math.ceil(w/2)+1,0,o-w),[h,o,w]),M=e.useMemo(()=>B(h+Math.floor(w/2),w-1,o-1),[h,o,w]),_=e.useMemo(()=>Array(o).fill(null).map((m,l)=>{const R=l===N&&l!==0||l===M&&l!==o-1,$=l===N+1&&l!==1||l===M-1&&l!==o-2,A=l<N||l>M;return e.createElement(U,{key:l,"aria-label":`Slide ${l+1}`,isActive:l===h,onClick:()=>y(l),isSmall:$,isSmaller:R||A,id:C&&`${C}--dot-${l}`})}),[o,N,M,h,C,y]);e.useEffect(()=>{var R,$,A;const m=(R=g.current)==null?void 0:R.children[N];if(!g.current||!m)return;const l=(A=($=L())==null?void 0:$.matchMedia("(prefers-reduced-motion: no-preference)"))==null?void 0:A.matches;g.current.scrollTo({left:m.offsetLeft-g.current.offsetLeft,behavior:l&&!b.current?"smooth":"auto"}),b.current&&(b.current=!1)},[h,N,o,w,k]);const H=m=>{if(m.altKey||m.ctrlKey||m.metaKey||m.shiftKey)return;const l=m.key;(l==="ArrowLeft"||l==="ArrowRight")&&m.preventDefault()},q=m=>{switch(m.key){case"ArrowLeft":{y((o+h-1)%o);break}case"ArrowRight":{y((o+h+1)%o);break}}};return e.createElement(e.Fragment,null,e.createElement(j,{className:p("iui-carousel-navigation-dots",i),role:"tablist","aria-label":"Slides",ref:T,onKeyDown:H,onKeyUp:q,tabIndex:-1,...f},a??_))}),le=e.forwardRef((t,u)=>{const{className:r,children:s,...i}=t;return e.createElement(j,{className:p("iui-carousel-navigation",r),ref:u,...i},s??e.createElement(e.Fragment,null,e.createElement(j,{className:"iui-carousel-navigation-left"},e.createElement(W,null)),e.createElement(V,null),e.createElement(j,{className:"iui-carousel-navigation-right"},e.createElement(F,null))))}),W=e.forwardRef((t,u)=>{const r=e.useContext(D);if(!r)throw new Error("CarouselNavigation should be used inside Carousel");const{slideCount:s,currentIndex:i,setCurrentIndex:c,scrollToSlide:a}=r;return e.createElement(z,{styleType:"borderless",size:"small",tabIndex:-1,"aria-label":"Previous",ref:u,...t,onClick:f=>{var o;const n=(s+i-1)%s;c(n),a.current(n,{instant:f.detail>3}),(o=t==null?void 0:t.onClick)==null||o.call(t,f)}},e.createElement(te,null))}),F=e.forwardRef((t,u)=>{const r=e.useContext(D);if(!r)throw new Error("CarouselNavigation should be used inside Carousel");const{slideCount:s,currentIndex:i,setCurrentIndex:c,scrollToSlide:a}=r;return e.createElement(z,{styleType:"borderless",size:"small",tabIndex:-1,"aria-label":"Next",ref:u,...t,onClick:f=>{var o;const n=(s+i+1)%s;c(n),a.current(n,{instant:f.detail>3}),(o=t==null?void 0:t.onClick)==null||o.call(t,f)}},e.createElement(re,null))}),ie=Object.assign(le,{PreviousButton:W,NextButton:F}),ce=e.forwardRef((t,u)=>{const r=Y(),{activeSlideIndex:s=0,onSlideChange:i,className:c,children:a,id:f=r,...n}=t,o=e.useRef(!1),h=e.useRef(null),C=K(h,u),[y,b]=e.useState(s),w=e.useRef(()=>{}),x=e.useRef(!0);e.useEffect(()=>{b(s),w.current(s,{instant:x.current}),x.current=!1},[s]);const[g,k]=e.useState(0),v=Z(i);return e.useEffect(()=>{var I;(I=v.current)==null||I.call(v,y)},[v,y]),e.createElement(j,{as:"section","aria-roledescription":"carousel",ref:C,className:p("iui-carousel",c),...n,id:f},e.createElement(D.Provider,{value:{currentIndex:y,setCurrentIndex:b,slideCount:g,setSlideCount:k,idPrefix:f,isManuallyUpdating:o,scrollToSlide:w}},a))}),S=Object.assign(ce,{Slider:oe,Slide:ne,Navigation:ie,DotsList:V,Dot:U}),Ce={title:"Carousel"},xe=()=>{const t=[{from:"#cc2b5e",to:"#753a88"},{from:"#00467f",to:"#a5cc82"},{from:"#2193b0",to:"#6dd5ed"},{from:"#ffe000",to:"#799f0c"},{from:"#e65c00",to:"#f9d423"},{from:"#1488cc",to:"#2b32b2"},{from:"#bbd2c5",to:"#536976"},{from:"#9796f0",to:"#fbc7d4"},{from:"#b79891",to:"#94716b"},{from:"#acb6e5",to:"#86fde8"}];return d.jsxs(S,{style:{width:"min(800px, 90vw)"},children:[d.jsx(S.Navigation,{}),d.jsx(S.Slider,{children:t.map(({from:u,to:r},s)=>d.jsx(S.Slide,{children:d.jsx("div",{style:{background:`linear-gradient(to right, ${u}, ${r})`,height:350,width:"100%",display:"grid",placeItems:"center"},children:d.jsx("div",{style:{fontSize:48,color:"hsl(0deg 0% 100% / 0.7)"},children:s+1})})},s))})]})},ye=()=>{const t=[{from:"#cc2b5e",to:"#753a88"},{from:"#00467f",to:"#a5cc82"},{from:"#2193b0",to:"#6dd5ed"},{from:"#ffe000",to:"#799f0c"},{from:"#e65c00",to:"#f9d423"},{from:"#1488cc",to:"#2b32b2"},{from:"#bbd2c5",to:"#536976"},{from:"#9796f0",to:"#fbc7d4"},{from:"#b79891",to:"#94716b"},{from:"#acb6e5",to:"#86fde8"}],[u,r]=O.useState(5);return d.jsxs(S,{style:{width:"min(800px, 90vw)"},activeSlideIndex:u,onSlideChange:s=>r(s),children:[d.jsx(S.Navigation,{}),d.jsx(S.Slider,{children:t.map(({from:s,to:i},c)=>d.jsx(S.Slide,{children:d.jsx("div",{style:{background:`linear-gradient(to right, ${s}, ${i})`,height:350,width:"100%",display:"grid",placeItems:"center"},children:d.jsx("div",{style:{fontSize:48,color:"hsl(0deg 0% 100% / 0.7)"},children:c+1})})},c))})]})},ae=()=>"my-custom-carousel",de=()=>{const t=[{from:"#cc2b5e",to:"#753a88"},{from:"#00467f",to:"#a5cc82"},{from:"#2193b0",to:"#6dd5ed"},{from:"#ffe000",to:"#799f0c"},{from:"#e65c00",to:"#f9d423"},{from:"#1488cc",to:"#2b32b2"},{from:"#bbd2c5",to:"#536976"},{from:"#9796f0",to:"#fbc7d4"},{from:"#b79891",to:"#94716b"},{from:"#acb6e5",to:"#86fde8"}],u=ae(),[r,s]=O.useState(0);return d.jsxs("section",{"aria-roledescription":"carousel",tabIndex:0,onKeyUp:({key:i})=>{const c=i==="ArrowRight"?1:i==="ArrowLeft"?-1:0;s(a=>(t.length+a+c)%t.length)},style:{display:"inline-grid",width:"min(90vw, 40vh)"},children:[d.jsx(S.DotsList,{id:u,length:t.length,currentIndex:r,onSlideChange:i=>s(i),style:{justifySelf:"center",maxWidth:"min(100%, 200px)"}}),d.jsx("div",{style:{display:"grid",grid:"[slide] 1fr / [slide] 1fr",order:"-1"},children:t.map(({from:i,to:c},a)=>d.jsx("div",{role:"tabpanel",id:`${u}-slide-${a}`,onClick:({currentTarget:{clientWidth:f},clientX:n})=>{const o=f-n>f/2?-1:1;s(h=>(t.length+h+o)%t.length)},style:{gridArea:"slide",opacity:r===a?1:0,pointerEvents:r===a?"auto":"none",transition:"opacity 0.5s",cursor:"pointer"},children:d.jsx("div",{style:{background:`linear-gradient(to right, ${i}, ${c})`,height:"min(600px, 70vh)",display:"grid",placeItems:"center",fontSize:48,color:"hsl(0deg 0% 100% / 0.7)"},children:a+1})},a))})]})};de.decorators=[t=>d.jsxs("div",{style:{display:"inline-grid",gap:"1rem"},children:[d.jsxs(se,{isMuted:!0,style:{fontStyle:"italic"},children:["This example shows how ",d.jsx(P,{children:"Carousel.DotsList"})," can be used outside ",d.jsx(P,{children:"Carousel"}),".",d.jsx("br",{}),"Clicking on the right half of the slide will advance the carousel to the next slide, whereas clicking on the left half will go to the previous slide."]}),d.jsx(t,{})]})];typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{xe as Basic,ye as Controlled,de as OnlyDots,Ce as default};
