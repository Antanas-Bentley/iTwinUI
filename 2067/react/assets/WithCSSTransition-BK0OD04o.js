import{ac as h,ad as N,ae as $,R as E,a9 as A,af as S,r as f,ab as d}from"./index-BXBlTZh6.js";function _(t,n){return t.classList?!!n&&t.classList.contains(n):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" ")!==-1}function L(t,n){t.classList?t.classList.add(n):_(t,n)||(typeof t.className=="string"?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n))}function m(t,n){return t.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function R(t,n){t.classList?t.classList.remove(n):typeof t.className=="string"?t.className=m(t.className,n):t.setAttribute("class",m(t.className&&t.className.baseVal||"",n))}var T=function(n,i){return n&&i&&i.split(" ").forEach(function(s){return L(n,s)})},C=function(n,i){return n&&i&&i.split(" ").forEach(function(s){return R(n,s)})},g=function(t){h(n,t);function n(){for(var s,l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return s=t.call.apply(t,[this].concat(c))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(e,r){var a=s.resolveArguments(e,r),p=a[0],u=a[1];s.removeClasses(p,"exit"),s.addClass(p,u?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(e,r)},s.onEntering=function(e,r){var a=s.resolveArguments(e,r),p=a[0],u=a[1],v=u?"appear":"enter";s.addClass(p,v,"active"),s.props.onEntering&&s.props.onEntering(e,r)},s.onEntered=function(e,r){var a=s.resolveArguments(e,r),p=a[0],u=a[1],v=u?"appear":"enter";s.removeClasses(p,v),s.addClass(p,v,"done"),s.props.onEntered&&s.props.onEntered(e,r)},s.onExit=function(e){var r=s.resolveArguments(e),a=r[0];s.removeClasses(a,"appear"),s.removeClasses(a,"enter"),s.addClass(a,"exit","base"),s.props.onExit&&s.props.onExit(e)},s.onExiting=function(e){var r=s.resolveArguments(e),a=r[0];s.addClass(a,"exit","active"),s.props.onExiting&&s.props.onExiting(e)},s.onExited=function(e){var r=s.resolveArguments(e),a=r[0];s.removeClasses(a,"exit"),s.addClass(a,"exit","done"),s.props.onExited&&s.props.onExited(e)},s.resolveArguments=function(e,r){return s.props.nodeRef?[s.props.nodeRef.current,e]:[e,r]},s.getClassNames=function(e){var r=s.props.classNames,a=typeof r=="string",p=a&&r?r+"-":"",u=a?""+p+e:r[e],v=a?u+"-active":r[e+"Active"],x=a?u+"-done":r[e+"Done"];return{baseClassName:u,activeClassName:v,doneClassName:x}},s}var i=n.prototype;return i.addClass=function(l,c,o){var e=this.getClassNames(c)[o+"ClassName"],r=this.getClassNames("enter"),a=r.doneClassName;c==="appear"&&o==="done"&&a&&(e+=" "+a),o==="active"&&l&&N(l),e&&(this.appliedClasses[c][o]=e,T(l,e))},i.removeClasses=function(l,c){var o=this.appliedClasses[c],e=o.base,r=o.active,a=o.done;this.appliedClasses[c]={},e&&C(l,e),r&&C(l,r),a&&C(l,a)},i.render=function(){var l=this.props;l.classNames;var c=$(l,["classNames"]);return E.createElement(A,S({},c,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(E.Component);g.defaultProps={classNames:""};g.propTypes={};const V=g,b=t=>{const{in:n,dimension:i="height",children:s,...l}=t,c=f.useRef(0),o=i==="height"?"Height":"Width";return f.createElement(V,{in:n,timeout:200,unmountOnExit:!0,onEnter:e=>{e.style[`min${o}`]="initial",e.style[i]="0px"},onEntering:e=>{e.style[i]=`${c.current}px`},onEntered:e=>{e.style[`min${o}`]="",e.style[i]=""},onExit:e=>{e.style[i]=`${c.current}px`},onExiting:e=>{e.style[`min${o}`]="initial",e.style[i]="0px"},classNames:{enter:d["iui-enter"],enterActive:d["iui-enter-active"],exit:d["iui-exit"],exitActive:d["iui-exit-active"]},...l},f.isValidElement(s)?f.cloneElement(s,{ref:e=>{e&&(c.current=e.getBoundingClientRect()[i])}}):f.createElement(f.Fragment,null))};export{b as W};
