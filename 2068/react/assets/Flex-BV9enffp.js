import{r as t,B as u,c as m}from"./index-vgP8bFIz.js";const F=["3xs","2xs","xs","s","m","l","xl","2xl","3xl"],o=e=>F.includes(e)?`var(--iui-size-${e})`:e,p=t.forwardRef((e,a)=>{const{display:i,flexDirection:l,justifyContent:s,alignItems:r,gap:f,flexWrap:x,className:n,style:c,...y}=e;return t.createElement(u,{className:m("iui-flex",n),style:{"--iui-flex-display":i,"--iui-flex-direction":l,"--iui-flex-justify":s,"--iui-flex-align":r,"--iui-flex-gap":o(f),"--iui-flex-wrap":x,...c},ref:a,...y})});p.displayName="Flex";const g=t.forwardRef((e,a)=>{const{flex:i,className:l,style:s,...r}=e;return t.createElement(u,{className:m("iui-flex-spacer",l),style:{"--iui-flex-spacer-flex":i,...s},ref:a,...r})});g.displayName="Flex.Spacer";const d=t.forwardRef((e,a)=>{const{gapBefore:i,gapAfter:l,flex:s,alignSelf:r,className:f,style:x,...n}=e,c={"--iui-flex-item-flex":s,"--iui-flex-item-align":r,"--iui-flex-item-gap-before":o(i),"--iui-flex-item-gap-after":o(l),...i!==void 0&&{"--iui-flex-item-gap-before-toggle":"var(--iui-on)"},...l!==void 0&&{"--iui-flex-item-gap-after-toggle":"var(--iui-on)"},...x};return t.createElement(u,{className:m("iui-flex-item",f),ref:a,style:c,...n})});d.displayName="Flex.Item";const w=Object.assign(p,{Item:d,Spacer:g});export{w as F};
