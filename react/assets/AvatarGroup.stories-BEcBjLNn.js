import{r as s,B as b,c as M,j as r,R as v,T as C}from"./index-DfTeYc2P.js";import{A as c}from"./Avatar-A_ORQ6vI.js";import{g as u}from"./colors-DN-6A0ES.js";const d=s.forwardRef((t,e)=>{const{children:i,animated:g=!1,stacked:o=!0,maxIcons:a=5,iconSize:l="small",countIconProps:m,className:x,...A}=t,p=s.Children.toArray(i),h=p.length,y=j=>p.slice(0,j).map(f=>s.cloneElement(f,{status:void 0,size:l}));return s.createElement(b,{className:M("iui-avatar-list",{"iui-animated":g,"iui-stacked":o},x),ref:e,...A},p.length<=a+1&&y(a+1),p.length>a+1&&s.createElement(s.Fragment,null,y(a),s.createElement(b,{...m,className:M("iui-avatar","iui-avatar-count",m==null?void 0:m.className),"data-iui-size":l!=="medium"?l:void 0},h<=99?`${h-a}`:"99+")))}),N={title:"AvatarGroup"},T=()=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ace Cash","Tanner Fraser","Ashley Miles","Jean Mullins"];return r.jsx(d,{iconSize:"medium",children:t.map((e,n)=>r.jsx(c,{abbreviation:e.split(" ").map(i=>i[0]).join(""),backgroundColor:u(e),title:e},`${e}-${n}`))})},k=()=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Jean Mullins","Ashley Miles"];return r.jsx(d,{animated:!0,iconSize:"medium",children:t.map((e,n)=>r.jsx(c,{abbreviation:e.split(" ").map(i=>i[0]).join(""),backgroundColor:u(e),title:e},`${e}-${n}`))})},w=()=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ace Cash","Tanner Fraser","Ashley Miles","Jean Mullins","Nico Triplett","Drew Abel","Kendall Simons","Kennedy Gray","Charlie Mayfield","Peyton Pennington","Justice Harrington","Jessie Dodd"];return r.jsx(r.Fragment,{children:r.jsx(d,{iconSize:"large",children:Array(110).fill(null).map((e,n)=>t[n%t.length]).map((e,n)=>r.jsx(c,{abbreviation:e.split(" ").map(i=>i[0]).join(""),backgroundColor:u(e),title:e},`${e}-${n}`))})})},J=()=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ashley Miles","Jean Mullins","Charlie Mayfield","Peyton Pennington","Justice Harrington"];return r.jsx(d,{stacked:!1,iconSize:"medium",children:t.map((e,n)=>r.jsx(c,{abbreviation:e.split(" ").map(i=>i[0]).join(""),backgroundColor:u(e),title:e},`${e}-${n}`))})},z=()=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ashley Miles","Jean Mullins","Charlie Mayfield","Peyton Pennington","Justice Harrington"],[e,n]=v.useState(null),g=t.slice(5).join(`
`);return r.jsxs(r.Fragment,{children:[r.jsx(d,{countIconProps:{ref:n},iconSize:"medium",children:t.map((o,a)=>r.jsx(c,{abbreviation:o.split(" ").map(l=>l[0]).join(""),backgroundColor:u(o),title:o},`${o}-${a}`))}),r.jsx(C,{reference:e,content:g,placement:"right",style:{whiteSpace:"pre"}})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{k as Animated,T as Basic,w as ManyAvatars,J as NonStacked,z as WithTooltip,N as default};
