import{r as e}from"./index-BsM-neoq.js";const i=(s,u,r)=>{const t=e.useRef();e.useEffect(()=>{t.current=u},[u]),e.useEffect(()=>{if(!r)return;const c=o=>{var n;return(n=t.current)==null?void 0:n.call(t,o)};return r.addEventListener(s,c),()=>{r.removeEventListener(s,c)}},[s,r])};export{i as u};
