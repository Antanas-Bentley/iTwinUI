import{r as e,d as I,n as k,g as M,A as S,G as O,H as L,B as W,c as z,J as B,K as T,E as $,w as A,v as D,L as H,M as U,N as K,O as V,Q as j,U as G,W as J,X as Q,Y as X,Z as Y,_ as Z,$ as _,a0 as q,a1 as ee,a2 as te,a3 as se,a4 as oe}from"./index-DCZUONDF.js";import{g as ne}from"./focusable-DQv_vybo.js";const ae=l=>{const{placement:f="bottom-start",visible:d,onVisibleChange:h,closeOnOutsideClick:m,autoUpdateOptions:p,matchWidth:r,interactions:E,role:v,...R}=l,s=e.useMemo(()=>({click:!0,dismiss:!0,hover:!1,focus:!1,listNavigation:!1,...E}),[E]),F=A(),i=e.useMemo(()=>({flip:!0,shift:!0,...l.middleware}),[l.middleware]),[u,t]=D(!1,d,h),o=H({placement:f,open:u,onOpenChange:t,whileElementsMounted:e.useMemo(()=>u?(...n)=>U(...n,p):void 0,[p,u]),...R,middleware:e.useMemo(()=>[i.offset!==void 0&&K(i.offset),i.flip&&V(),i.shift&&j(),r&&G({apply:({rects:n})=>{N(n.reference.width)}}),i.autoPlacement&&J(),i.inline&&Q(),i.hide&&X()].filter(Boolean),[r,i])}),a=e.useMemo(()=>({click:s.click!==!1,dismiss:s.dismiss!==!1,hover:s.hover!==!1,focus:s.focus!==!1,role:!!v,listNavigation:s.listNavigation!==!1}),[s,v]),c=le(typeof s.listNavigation=="object"?s.listNavigation:void 0),x=e.useCallback(()=>{const n=ne(o.refs.floating.current);return n.filter(w=>!n.some(C=>C.contains(w.parentElement)))},[o.refs.floating]);e.useEffect(()=>{if(!a.listNavigation)return;const n=x();(c==null?void 0:c.listRef)!=null&&c.listRef.current!==n&&(c.listRef.current=n)},[x,c,u,a.listNavigation]);const b=Y([Z(o.context,{enabled:a.click,...s.click}),_(o.context,{enabled:a.dismiss,outsidePress:m,bubbles:F!=null,...s.dismiss}),q(o.context,{enabled:a.hover,delay:100,handleClose:ee({buffer:1,blockPointerEvents:!0}),move:!1,...s.hover}),te(o.context,{enabled:a.focus,...s.focus}),se(o.context,{role:"dialog",enabled:a.role}),oe(o.context,{enabled:a.listNavigation,...c})]),[g,N]=e.useState(),y=e.useCallback(n=>b.getFloatingProps({...n,style:{...o.floatingStyles,zIndex:9999,...r&&g?{minInlineSize:`${g}px`,maxInlineSize:`min(${g*2}px, 90vw)`}:{},...n==null?void 0:n.style}}),[o.floatingStyles,b,r,g]);return e.useMemo(()=>({open:u,onOpenChange:t,...b,getFloatingProps:y,...o,interactionsEnabledStates:a}),[u,t,b,y,o,a])},le=l=>{const[f,d]=e.useState(null),h=e.useRef([]),{onNavigate:m,...p}=l||{};return{activeIndex:f,onNavigate:r=>{d(r),m==null||m(r)},listRef:h,openOnArrowKeyDown:!1,focusItemOnHover:!1,...p}},ue=e.forwardRef((l,f)=>{var g;const{portal:d=!0,visible:h,placement:m="bottom-start",onVisibleChange:p,closeOnOutsideClick:r=!0,middleware:E,positionReference:v,className:R,children:s,content:F,applyBackground:i=!1,...u}=l,t=ae({visible:h,placement:m,onVisibleChange:p,closeOnOutsideClick:r,role:"dialog",middleware:E}),[o,a]=e.useState(),c=I(t.refs.setFloating,f,a),x=`${k()}-trigger`,b=!!l["aria-labelledby"]||!!l["aria-label"];return M(()=>{if(v)return t.refs.setPositionReference(v),()=>void t.refs.setPositionReference(null)},[t.refs,v]),e.createElement(e.Fragment,null,S(s,N=>({id:N.props.id||x,...t.getReferenceProps(N.props),ref:t.refs.setReference})),t.open?e.createElement(ie,{portal:d},e.createElement(O,{portalContainer:o},e.createElement(P,null),e.createElement(L,{context:t.context,modal:!1,initialFocus:t.refs.floating},e.createElement(W,{className:z({"iui-popover-surface":i},R),"aria-labelledby":b||(g=t.refs.domReference.current)==null?void 0:g.id,...t.getFloatingProps(u),ref:c},F)))):null)}),ie=({children:l,portal:f=!0})=>{const d=B(f);return e.createElement(T,{root:d},e.createElement(P,null),l)},P=e.memo(()=>e.createElement($,{css:`
        :host {
          display: contents;
        }
      `},e.createElement("slot",null)));export{ue as P,ae as u};
