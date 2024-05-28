import{r as e,S as Le,B as ee,c as le,u as A,d as be,m as pe,P as De,n as Re,o as oe,g as Pe,x as ze,w as Q}from"./index-DcTlL2oN.js";import{L as ye}from"./Label-CpnIBlKX.js";import{I as ke}from"./Input-CtUZdstL.js";import{T as Te}from"./Textarea-DHMDotYl.js";import{I as we}from"./Icon-Wk-BsVi0.js";import{I as ue}from"./InputWithDecorations-C222oPaY.js";import{M as qe}from"./MenuExtraContent-BPnyYiww.js";import{a as Fe,I as ce,b as We,A as je,S as te}from"./Select-CF83dACy.js";import{T as He}from"./Text-CrVlHi0R.js";import{u as Ke}from"./Popover-DjArJ8lA.js";import{S as Ge}from"./SvgCaretDownSmall-D9_C3sxM.js";import{u as Ue}from"./useContainerWidth-B1gUdm8C.js";import{a as Je}from"./MenuItem-lrvOKTsJ.js";import{u as Qe}from"./VirtualScroll-6SlxjIPE.js";import{L as _}from"./ListItem-CLNx_BW0.js";import{S as Xe}from"./SvgCheckmark-Me0aDFcJ.js";const de=e.forwardRef((t,i)=>{const{children:c,startIcon:s,status:r,className:u,iconProps:a,contentProps:n,...l}=t,m=s??(r&&Le[r]()),C=s!==null&&!!m;return e.createElement(ee,{className:le("iui-status-message",u),"data-iui-status":r,ref:i,...l},C?e.createElement(we,{"aria-hidden":!0,...a},m):null,e.createElement(ee,{...n},c))}),Ye=e.forwardRef((t,i)=>{const{label:c,disabled:s,required:r,status:u,message:a,icon:n,isLabelInline:l,children:m,className:C,style:E,statusMessage:b,inputId:d,labelId:h,...M}=t;return e.createElement(ee,{className:le("iui-input-grid",C),"data-iui-status":u,"data-iui-label-placement":l?"inline":void 0,style:E,ref:i,...M},c&&e.createElement(ye,{as:d&&t.as!=="label"?"label":"div",required:r,disabled:s,htmlFor:d,id:h},c),m,b||a&&e.createElement(de,{startIcon:n,status:u},a))}),Ze=(t,i)=>{switch(i.type){case"open":return{...t,isOpen:!0};case"close":return{...t,isOpen:!1};case"select":return Array.isArray(t.selected)?{...t}:{...t,selected:i.value??t.selected,focusedIndex:i.value??t.focusedIndex};case"multiselect":return Array.isArray(t.selected)?{...t,selected:i.value}:{...t};case"focus":return Array.isArray(t.selected)?{...t,focusedIndex:i.value??-1}:{...t,focusedIndex:i.value??t.selected??-1};default:return t}},ne=e.createContext(void 0);ne.displayName="ComboBoxRefsContext";const K=e.createContext(void 0);K.displayName="ComboBoxStateContext";const Ie=e.createContext(void 0);Ie.displayName="ComboBoxActionContext";const he=e.forwardRef((t,i)=>{const{className:c,children:s,disabled:r,isOpen:u,...a}=t;return e.createElement(we,{as:"span",ref:i,className:le("iui-end-icon",{"iui-disabled":r,"iui-open":u},c),...a},s??e.createElement(Ge,{"aria-hidden":!0}))});he.displayName="ComboBoxEndIcon";const Be=e.forwardRef((t,i)=>{const{selectedItems:c=[],...s}=t;return e.createElement(Fe,{ref:i,tags:c,...s})});Be.displayName="ComboBoxMultipleContainer";const Me=e.forwardRef((t,i)=>{const{selectTags:c,size:s,style:r,...u}=t,{isOpen:a,id:n,focusedIndex:l,enableVirtualization:m,multiple:C,onClickHandler:E,popover:b,show:d,hide:h}=A(K),M=A(Ie),{inputRef:D,menuRef:k,optionsExtraInfoRef:N}=A(ne),fe=be(D,b.refs.setReference,i),y=e.useRef(l??-1);e.useEffect(()=>{y.current=l??-1},[l]);const g=w=>{var O,V;return((V=(O=k.current)==null?void 0:O.querySelector(`[data-iui-index="${w}"]`))==null?void 0:V.id)??""},P=e.useCallback(w=>{var V,T,G,q,F,Y,re,se,ae,W;const O=Object.keys(N.current).length??0;if(!w.altKey)switch(w.key){case"ArrowDown":{if(w.preventDefault(),!a)return d();if(O===0)return;if(y.current===-1){const v=(V=k.current)==null?void 0:V.querySelector("[data-iui-index]");return M({type:"focus",value:Number((v==null?void 0:v.getAttribute("data-iui-index"))??0)})}if(m&&!((G=(T=k.current)==null?void 0:T.querySelector(`[data-iui-index="${y.current}"]`))!=null&&G.nextElementSibling))return;let B=y.current;do{const v=(q=k.current)==null?void 0:q.querySelector(`[data-iui-index="${B}"]`),R=(v==null?void 0:v.nextElementSibling)??((F=k.current)==null?void 0:F.querySelector("[data-iui-index]"));if(B=Number(R==null?void 0:R.getAttribute("data-iui-index")),R)return M({type:"focus",value:B})}while(B!==y.current);break}case"ArrowUp":{if(w.preventDefault(),!a)return d();if(O===0||m&&!((re=(Y=k.current)==null?void 0:Y.querySelector(`[data-iui-index="${y.current}"]`))!=null&&re.previousElementSibling))return;if(y.current===-1)return M({type:"focus",value:((se=Object.values(N.current))==null?void 0:se[O-1].__originalIndex)??-1});let B=y.current;do{const v=(ae=k.current)==null?void 0:ae.querySelector(`[data-iui-index="${B}"]`),R=(v==null?void 0:v.previousElementSibling)??((W=k.current)==null?void 0:W.querySelector("[data-iui-index]:last-of-type"));if(B=Number(R==null?void 0:R.getAttribute("data-iui-index")),R)return M({type:"focus",value:B})}while(B!==y.current);break}case"Enter":{w.preventDefault(),a?y.current>-1&&(E==null||E(y.current)):d();break}case"Escape":{w.preventDefault(),h();break}case"Tab":h();break}},[M,m,a,k,E,N,d,h]),X=e.useRef(!1),z=e.useCallback(()=>{X.current=a},[a]),I=e.useCallback(()=>{X.current?h():d(),X.current=!1},[h,d]),[$,S]=Ue();return e.createElement(e.Fragment,null,e.createElement(ke,{ref:fe,"aria-expanded":a,"aria-activedescendant":a&&l!=null&&l>-1?g(l):void 0,role:"combobox","aria-controls":a?`${n}-list`:void 0,"aria-autocomplete":"list",spellCheck:!1,autoCapitalize:"none",autoCorrect:"off",style:{...C&&{paddingInlineStart:S+18},...r},"aria-describedby":C?`${n}-selected-live`:void 0,size:s,...b.getReferenceProps({...u,onPointerDown:pe(t.onPointerDown,z),onClick:pe(t.onClick,I),onKeyDown:pe(t.onKeyDown,P)})}),C&&c?e.createElement(Be,{ref:$,selectedItems:c,id:`${n}-selected-live`}):null)});Me.displayName="ComboBoxInput";const Ne=e.forwardRef((t,i)=>{const{className:c,status:s,message:r,children:u,...a}=t,{id:n}=A(K);return e.createElement(Ye,{className:c,status:s,statusMessage:typeof r=="string"?e.createElement(de,{status:s},r):e.isValidElement(r)&&e.cloneElement(r,{status:s}),ref:i,...a,id:n},e.createElement(ce,null,u))});Ne.displayName="ComboBoxInputContainer";const _e=t=>{const{children:i,...c}=t,{filteredOptions:s,getMenuItem:r,focusedIndex:u}=A(K),{menuRef:a}=A(ne),n=e.useCallback(b=>s.length>0?r(s[b],b):i,[s,r,i]),l=e.useMemo(()=>{var d;const b=(d=a.current)==null?void 0:d.querySelector(`[data-iui-index="${u}"]`);return b?Number(b.getAttribute("data-iui-filtered-index")??u):u},[u,a]),{outerProps:m,innerProps:C,visibleChildren:E}=Qe({itemsLength:s.length||1,itemRenderer:n,scrollToIndex:l});return e.createElement(ee,{as:"div",...m,...c},e.createElement("div",{...C,ref:C.ref},E))},Oe=e.forwardRef((t,i)=>{const{children:c,style:s,...r}=t,{id:u,enableVirtualization:a,popover:n}=A(K),{menuRef:l}=A(ne),m=be(n.refs.setFloating,i,l);return n.open&&e.createElement(De,{portal:!0},e.createElement(Je,{id:`${u}-list`,setFocus:!1,role:"listbox",ref:m,...n.getFloatingProps({style:a?{maxInlineSize:0,...s}:s,...r})},a?e.createElement(_e,null,c):c))});Oe.displayName="ComboBoxMenu";const Ve=e.memo(e.forwardRef((t,i)=>{const{children:c,isSelected:s,disabled:r,value:u,onClick:a,sublabel:n,size:l=n?"large":"default",startIcon:m,endIcon:C,role:E="option",index:b,...d}=t,{focusedIndex:h,enableVirtualization:M}=A(K),k=be(i,N=>{!M&&h===b&&(N==null||N.scrollIntoView({block:"nearest"}))});return e.createElement(_,{as:"div",actionable:!0,size:l,active:s,disabled:r,focused:h===b,ref:k,onClick:()=>a==null?void 0:a(u),role:E,tabIndex:E==="presentation"?void 0:-1,"aria-selected":s,"aria-disabled":r,"data-iui-index":b,...d},m&&e.createElement(_.Icon,{as:"span","aria-hidden":!0},m),e.createElement(_.Content,null,c,n&&e.createElement(_.Description,null,n)),C||s&&e.createElement(_.Icon,{as:"span","aria-hidden":!0},C??e.createElement(Xe,null)))}));Ve.displayName="ComboBoxMenuItem";const J=(t,i)=>i&&(Array.isArray(t)||t===void 0),et=(t,i)=>!i,Se=(t,i)=>t.id??`${i}-option-${t.label.replace(/\s/g,"-")}`,xe=e.forwardRef((t,i)=>{var ge;const c=Re(),{options:s,value:r,onChange:u,filterFunction:a,inputProps:n,endIconProps:l,dropdownMenuProps:m,emptyStateMessage:C="No options found",itemRenderer:E,enableVirtualization:b=!1,multiple:d=!1,onShow:h,onHide:M,id:D=n!=null&&n.id?`iui-${n.id}-cb`:c,...k}=t,N=e.useRef(null),fe=e.useRef(null),y=oe(u),g=oe(s),P=e.useRef({});e.useEffect(()=>{P.current={}},[s]),s.length>0&&Object.keys(P.current).length===0&&s.forEach((o,f)=>{P.current[Se(o,D)]={__originalIndex:f}});const X=e.useCallback(()=>{if(J(r,d)){const o=[];return r==null||r.forEach(f=>{const p=s.findIndex(x=>x.value===f);p>-1&&o.push(p)}),o}else return s.findIndex(o=>o.value===r)},[d,s,r]),[{isOpen:z,selected:I,focusedIndex:$},S]=e.useReducer(Ze,{isOpen:!1,selected:X(),focusedIndex:-1}),w=oe(h),O=oe(M),V=e.useCallback(()=>{var o;S({type:"open"}),(o=w.current)==null||o.call(w)},[w]),T=e.useCallback(()=>{var o;S({type:"close"}),(o=O.current)==null||o.call(O)},[O]);Pe(()=>{var o,f;z?((o=N.current)==null||o.focus(),d||(q(g.current),S({type:"focus",value:void 0}))):(S({type:"focus",value:void 0}),J(I,d)||Y(I!=null&&I>=0?(f=g.current[I])==null?void 0:f.label:""))},[z,d,g,I]);const[G,q]=e.useState(s);e.useEffect(()=>{q(F?(a==null?void 0:a(s,F))??s.filter(o=>o.label.toLowerCase().includes(F.toLowerCase())):s),S({type:"focus",value:void 0})},[s]);const[F,Y]=e.useState(((ge=n==null?void 0:n.value)==null?void 0:ge.toString())??""),[re,se]=e.useState(""),ae=e.useCallback(o=>{var p;const{value:f}=o.currentTarget;Y(f),V(),q((a==null?void 0:a(g.current,f))??g.current.filter(x=>x.label.toLowerCase().includes(f.toLowerCase()))),$!=-1&&S({type:"focus",value:-1}),(p=n==null?void 0:n.onChange)==null||p.call(n,o)},[a,$,n,g,V]);e.useEffect(()=>{if(J(r,d))if(r){const o=r.map(f=>s.findIndex(p=>p.value===f));S({type:"multiselect",value:o.filter(f=>f!==-1)})}else S({type:"multiselect",value:[]});else S({type:"select",value:s.findIndex(o=>o.value===r)})},[r,s,d]);const W=e.useCallback(o=>J(I,d)?!!I.includes(o):I===o,[d,I]),B=e.useCallback((o,f)=>f==="added"?[...I,o]:I.filter(p=>p!==o),[I]),v=e.useCallback((o,f,p)=>{var x,L,U,j;et(y.current,d)?(L=y.current)==null||L.call(y,(x=g.current[o])==null?void 0:x.value):f&&p&&((j=y.current)==null||j.call(y,p==null?void 0:p.map(me=>{var H;return(H=g.current[me])==null?void 0:H.value}),{value:(U=g.current[o])==null?void 0:U.value,type:f}))},[d,y,g]),R=e.useCallback(o=>{var f,p;if((f=N.current)==null||f.focus({preventScroll:!0}),!((p=g.current[o])!=null&&p.disabled))if(J(I,d)){const x=W(o)?"removed":"added",L=B(o,x);S({type:"multiselect",value:L}),v(o,x,L),se(L.map(U=>{var j;return(j=g.current[U])==null?void 0:j.label}).filter(Boolean).join(", "))}else S({type:"select",value:o}),T(),v(o)},[B,W,d,v,I,g,T]),Ce=e.useCallback((o,f)=>{const p=Se(o,D),{__originalIndex:x}=P.current[p],{icon:L,startIcon:U,...j}=o,me=U??L,H=E?E(o,{isFocused:$===x,isSelected:I===x,index:x,id:p}):null;return H?e.cloneElement(H,{onClick:Z=>{var Ee,ve;R(x),(ve=(Ee=H.props).onClick)==null||ve.call(Ee,Z)},focused:$===x,"data-iui-index":x,"data-iui-filtered-index":f,ref:ze(H.props.ref,Z=>{!b&&$===x&&(Z==null||Z.scrollIntoView({block:"nearest"}))})}):e.createElement(Ve,{key:p,id:p,startIcon:me,...j,isSelected:W(x),onClick:()=>{R(x)},index:x,"data-iui-filtered-index":f},o.label)},[b,$,D,W,E,R,I]),$e=e.useMemo(()=>e.createElement(e.Fragment,null,e.isValidElement(C)?C:e.createElement(qe,null,e.createElement(He,{isMuted:!0},C))),[C]),Ae=Ke({visible:z,onVisibleChange:o=>o?V():T(),matchWidth:!0,closeOnOutsideClick:!0,trigger:{focus:!0}});return e.createElement(ne.Provider,{value:{inputRef:N,menuRef:fe,optionsExtraInfoRef:P}},e.createElement(Ie.Provider,{value:S},e.createElement(K.Provider,{value:{id:D,isOpen:z,focusedIndex:$,onClickHandler:R,enableVirtualization:b,filteredOptions:G,getMenuItem:Ce,multiple:d,popover:Ae,show:V,hide:T}},e.createElement(Ne,{ref:i,disabled:n==null?void 0:n.disabled,...k},e.createElement(e.Fragment,null,e.createElement(Me,{value:F,disabled:n==null?void 0:n.disabled,...n,onChange:ae,selectTags:J(I,d)?I.map(o=>{const f=g.current[o];return e.createElement(We,{key:f.label,label:f.label})}):void 0})),e.createElement(he,{...l,disabled:n==null?void 0:n.disabled,isOpen:z}),d?e.createElement(je,{text:re}):null),e.createElement(Oe,{as:"div",...m},G.length>0&&!b?G.map(Ce):$e))))}),gt=e.forwardRef((t,i)=>{const{children:c,className:s,labelPlacement:r=void 0,...u}=t,a=tt(c);return e.createElement(ee,{className:le("iui-input-grid",s),"data-iui-label-placement":r,ref:i,...u},a)}),tt=t=>{const{labelId:i,inputId:c,messageId:s}=nt(t);return e.useMemo(()=>e.Children.map(t,r=>e.isValidElement(r)?r.type===ye||r.type==="label"?Q(r,u=>({...u.props,htmlFor:u.props.htmlFor||c,id:u.props.id||i})):r.type===de?Q(r,u=>({...u.props,id:u.props.id||s})):ie(r)||r.type===ue||r.type===ce?rt(r,{labelId:i,inputId:c,messageId:s}):r:r),[t,c,i,s])},nt=t=>{const i=Re();let c,s,r,u=!1,a=!1;const n=l=>{var m;if(e.isValidElement(l)){if(l.type===xe)return((m=l.props.inputProps)==null?void 0:m.id)||`${i}--input`;if(l.type!==te)return l.props.id||`${i}--input`}};return e.Children.forEach(t,l=>{e.isValidElement(l)&&((l.type===ye||l.type==="label")&&(u=!0,c||(c=l.props.id||`${i}--label`)),l.type===de&&(r||(r=l.props.id||`${i}--message`)),l.type===ue||l.type===ce?e.Children.forEach(l.props.children,m=>{ie(m)&&(s||(s=n(m)))}):ie(l)&&(s||(s=n(l))),l.type===te&&(a=!0))}),{labelId:a?c:void 0,inputId:u&&!a?s:void 0,messageId:r}},rt=(t,{labelId:i,inputId:c,messageId:s})=>{const r=(a={})=>{const n=[a["aria-describedby"],s].filter(Boolean).join(" ");return{...a,...t.type!==te&&{id:a.id||c},"aria-describedby":(n==null?void 0:n.trim())||void 0}},u=a=>a.type===xe?Q(a,n=>({inputProps:r(n.props.inputProps)})):a.type===te?Q(a,n=>({triggerProps:{"aria-labelledby":i,...r(n.props.triggerProps)}})):Q(a,n=>r(n.props));return t.type===ue||t.type===ce?Q(t,a=>({children:e.Children.map(a.props.children,n=>e.isValidElement(n)&&ie(n)?u(n):n)})):u(t)},ie=t=>e.isValidElement(t)&&(t.type==="input"||t.type==="textarea"||t.type==="select"||t.type===ke||t.type===Te||t.type===ue.Input||t.type===te||t.type===xe);export{xe as C,gt as I,de as S};
