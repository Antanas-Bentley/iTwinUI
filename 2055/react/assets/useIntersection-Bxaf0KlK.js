import{r as f,h as g}from"./index-B2uU-R2F.js";const l=(r,b={},t=!0)=>{const{root:s,rootMargin:n,threshold:o}=b,e=f.useRef(()=>{});return f.useCallback(c=>{var u,a;if((u=e.current)==null||u.call(e),e.current=()=>{},!c||!((a=g())!=null&&a.IntersectionObserver))return;const i=new IntersectionObserver(([v],d)=>{v.isIntersecting&&(t&&d.disconnect(),r())},{root:s,rootMargin:n,threshold:o});i.observe(c),e.current=()=>i.disconnect()},[r,t,s,n,o])};export{l as u};
