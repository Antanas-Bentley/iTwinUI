import{r as t,u,B as D}from"./index-DfTeYc2P.js";import{I as f,a as b,b as m}from"./InputFlexContainer-DdpT7pfg.js";const d=t.createContext(void 0),h=t.forwardRef((i,o)=>{const{children:s,size:e,isDisabled:n,...a}=i;return t.createElement(d.Provider,{value:{size:e,isDisabled:n}},t.createElement(f,{isDisabled:n,size:e,ref:o,...a},s))}),l=t.forwardRef((i,o)=>{const{id:s,size:e,disabled:n,...a}=i,{size:r,isDisabled:c}=u(d);return t.createElement(D,{as:"input",ref:o,"data-iui-size":e??r,disabled:n??c,id:s,...a})});l.displayName="InputWithDecorations.Input";const p=t.forwardRef((i,o)=>{const{children:s,size:e,disabled:n,...a}=i,{size:r,isDisabled:c}=u(d);return t.createElement(b,{ref:o,size:e??r,disabled:n??c,...a},s)});p.displayName="InputWithDecorations.Button";const I=m;I.displayName="InputWithDecorations.Icon";const W=Object.assign(h,{Input:l,Button:p,Icon:I});export{W as I};
