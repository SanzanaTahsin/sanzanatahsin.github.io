(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[696],{9712:function(e,t){},8883:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return at}});var r=n(7294),o=n(3935);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t,n){var o=(0,r.useRef)(void 0!==e),i=(0,r.useState)(t),a=i[0],s=i[1],l=void 0!==e,u=o.current;return o.current=l,!l&&u&&a!==t&&s(t),[l?e:a,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}function c(e,t){return Object.keys(t).reduce((function(n,r){var o,c=n,d=c[s(r)],f=c[r],v=a(c,[s(r),r].map(l)),p=t[r],E=u(f,d,e[p]),m=E[0],x=E[1];return i({},v,((o={})[r]=m,o[p]=x,o))}),e)}n(9712);const d={prefix:String(Math.round(1e10*Math.random())),current:0},f=r.createContext(d);let v=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);var p=r.createContext(null);const E=(e,t=null)=>null!=e?String(e):t||null;var m=r.createContext(null);var x=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function h(e){var t=x(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var b=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var y=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=b(e),r=b(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var g=function({children:e,in:t,onExited:n,mountOnEnter:o,unmountOnExit:i}){const a=(0,r.useRef)(null),s=(0,r.useRef)(t),l=h(n);(0,r.useEffect)((()=>{t?s.current=!0:l(a.current)}),[t,l]);const u=y(a,e.ref),c=(0,r.cloneElement)(e,{ref:u});return t?c:i||!s.current&&o?null:c},O=n(5893);const C=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w=["activeKey","getControlledId","getControllerId"],j=["as"];function N(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function k(e){let{active:t,eventKey:n,mountOnEnter:o,transition:i,unmountOnExit:a,role:s="tabpanel",onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v}=e,m=N(e,C);const x=(0,r.useContext)(p);if(!x)return[Object.assign({},m,{role:s}),{eventKey:n,isActive:t,mountOnEnter:o,transition:i,unmountOnExit:a,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v}];const{activeKey:h,getControlledId:b,getControllerId:y}=x,g=N(x,w),O=E(n);return[Object.assign({},m,{role:s,id:b(n),"aria-labelledby":y(n)}),{eventKey:n,isActive:null==t&&null!=O?E(h)===O:t,transition:i||g.transition,mountOnEnter:null!=o?o:g.mountOnEnter,unmountOnExit:null!=a?a:g.unmountOnExit,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v}]}const S=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=N(e,j);const[o,{isActive:i,onEnter:a,onEntering:s,onEntered:l,onExit:u,onExiting:c,onExited:d,mountOnEnter:f,unmountOnExit:v,transition:E=g}]=k(r);return(0,O.jsx)(p.Provider,{value:null,children:(0,O.jsx)(m.Provider,{value:null,children:(0,O.jsx)(E,{in:i,onEnter:a,onEntering:s,onEntered:l,onExit:u,onExiting:c,onExited:d,mountOnEnter:f,unmountOnExit:v,children:(0,O.jsx)(n,Object.assign({},o,{ref:t,hidden:!i,"aria-hidden":!i}))})})})}));S.displayName="TabPanel";const K=e=>{const{id:t,generateChildId:n,onSelect:o,activeKey:i,defaultActiveKey:a,transition:s,mountOnEnter:l,unmountOnExit:c,children:E}=e,[x,h]=u(i,a,o),b=function(e){let t=(0,r.useContext)(f);return t!==d||v||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${t.prefix}-${++t.current}`),[e])}(t),y=(0,r.useMemo)((()=>n||((e,t)=>b?`${b}-${t}-${e}`:null)),[b,n]),g=(0,r.useMemo)((()=>({onSelect:h,activeKey:x,transition:s,mountOnEnter:l||!1,unmountOnExit:c||!1,getControlledId:e=>y(e,"tabpane"),getControllerId:e=>y(e,"tab")})),[h,x,s,l,c,y]);return(0,O.jsx)(p.Provider,{value:g,children:(0,O.jsx)(m.Provider,{value:h||null,children:E})})};K.Panel=S;var R=K,P=n(4184),T=n.n(P),A=(n(4391),Function.prototype.bind.call(Function.prototype.call,[].slice));const D=r.createContext(null);D.displayName="NavContext";var I=D;const L="data-rr-ui-",M="rrUi";function $(e){return`${L}${e}`}var _=n(861);const U=["as","active","eventKey"];function F({key:e,onClick:t,active:n,id:o,role:i,disabled:a}){const s=(0,r.useContext)(m),l=(0,r.useContext)(I),u=(0,r.useContext)(p);let c=n;const d={role:i};if(l){i||"tablist"!==l.role||(d.role="tab");const t=l.getControllerId(null!=e?e:null),r=l.getControlledId(null!=e?e:null);d[$("event-key")]=e,d.id=t||o,c=null==n&&null!=e?l.activeKey===e:n,!c&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(d["aria-controls"]=r)}return"tab"===d.role&&(d["aria-selected"]=c,c||(d.tabIndex=-1),a&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=h((n=>{a||(null==t||t(n),null!=e&&s&&!n.isPropagationStopped()&&s(e,n))})),[d,{isActive:c}]}const Z=r.forwardRef(((e,t)=>{let{as:n=_.ZP,active:r,eventKey:o}=e,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,U);const[a,s]=F(Object.assign({key:E(o,i.href),active:r},i));return a[$("active")]=s.isActive,(0,O.jsx)(n,Object.assign({},i,a,{ref:t}))}));Z.displayName="NavItem";var q=Z;const G=["as","onSelect","activeKey","role","onKeyDown"];const B=()=>{},W=$("event-key"),X=r.forwardRef(((e,t)=>{let{as:n="div",onSelect:o,activeKey:i,role:a,onKeyDown:s}=e,l=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,G);const u=(0,r.useReducer)((function(e){return!e}),!1)[1],c=(0,r.useRef)(!1),d=(0,r.useContext)(m),f=(0,r.useContext)(p);let v,x;f&&(a=a||"tablist",i=f.activeKey,v=f.getControlledId,x=f.getControllerId);const h=(0,r.useRef)(null),b=e=>{const t=h.current;if(!t)return null;const n=(r=`[${W}]:not([aria-disabled=true])`,A(t.querySelectorAll(r)));var r;const o=t.querySelector("[aria-selected=true]");if(!o||o!==document.activeElement)return null;const i=n.indexOf(o);if(-1===i)return null;let a=i+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},g=(e,t)=>{null!=e&&(null==o||o(e,t),null==d||d(e,t))};(0,r.useEffect)((()=>{if(h.current&&c.current){const e=h.current.querySelector(`[${W}][aria-selected=true]`);null==e||e.focus()}c.current=!1}));const C=y(t,h);return(0,O.jsx)(m.Provider,{value:g,children:(0,O.jsx)(I.Provider,{value:{role:a,activeKey:E(i),getControlledId:v||B,getControllerId:x||B},children:(0,O.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==s||s(e),!f)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=b(-1);break;case"ArrowRight":case"ArrowDown":t=b(1);break;default:return}var n;t&&(e.preventDefault(),g(t.dataset[(n="EventKey",`${M}${n}`)]||null,e),c.current=!0,u())},ref:C,role:a}))})})}));X.displayName="Nav";var H=Object.assign(X,{Item:q}),V=n(6792);const Y=r.createContext(null);Y.displayName="NavbarContext";var z=Y,J=n(9059),Q=n(4680),ee=(0,Q.Z)("nav-item");var te=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!=typeof document||te?r.useLayoutEffect:r.useEffect,new WeakMap;const ne=["onKeyDown"];const re=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,ne);const[o]=(0,_.FT)(Object.assign({tagName:"a"},r)),i=h((e=>{o.onKeyDown(e),null==n||n(e)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,O.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,O.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:i}));var a}));re.displayName="Anchor";var oe=re;const ie=r.forwardRef((({bsPrefix:e,className:t,as:n=oe,active:r,eventKey:o,...i},a)=>{e=(0,V.vE)(e,"nav-link");const[s,l]=F({key:E(o,i.href),active:r,...i});return(0,O.jsx)(n,{...i,...s,ref:a,className:T()(t,e,i.disabled&&"disabled",l.isActive&&"active")})}));ie.displayName="NavLink",ie.defaultProps={disabled:!1};var ae=ie;const se=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:o,variant:i,fill:a,justify:s,navbar:l,navbarScroll:u,className:d,activeKey:f,...v}=c(e,{activeKey:"onSelect"}),p=(0,V.vE)(o,"nav");let E,m,x=!1;const h=(0,r.useContext)(z),b=(0,r.useContext)(J.Z);return h?(E=h.bsPrefix,x=null==l||l):b&&({cardHeaderBsPrefix:m}=b),(0,O.jsx)(H,{as:n,ref:t,activeKey:f,className:T()(d,{[p]:!x,[`${E}-nav`]:x,[`${E}-nav-scroll`]:x&&u,[`${m}-${i}`]:!!m,[`${p}-${i}`]:!!i,[`${p}-fill`]:a,[`${p}-justified`]:s}),...v})}));se.displayName="Nav",se.defaultProps={justify:!1,fill:!1};var le=Object.assign(se,{Item:ee,Link:ae}),ue=(0,Q.Z)("tab-content"),ce=n(4578),de=!1,fe=r.createContext(null),ve="unmounted",pe="exited",Ee="entering",me="entered",xe="exiting",he=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=pe,r.appearStatus=Ee):o=me:o=t.unmountOnExit||t.mountOnEnter?ve:pe,r.state={status:o},r.nextCallback=null,r}(0,ce.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ve?{status:pe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==Ee&&n!==me&&(t=Ee):n!==Ee&&n!==me||(t=xe)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===Ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===pe&&this.setState({status:ve})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[o.findDOMNode(this),r],a=i[0],s=i[1],l=this.getTimeouts(),u=r?l.appear:l.enter;!e&&!n||de?this.safeSetState({status:me},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:Ee},(function(){t.props.onEntering(a,s),t.onTransitionEnd(u,(function(){t.safeSetState({status:me},(function(){t.props.onEntered(a,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:o.findDOMNode(this);t&&!de?(this.props.onExit(r),this.safeSetState({status:xe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:pe},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:pe},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],s=i[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===ve)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,a(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(fe.Provider,{value:null},"function"==typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},t}(r.Component);function be(){}he.contextType=fe,he.propTypes={},he.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:be,onEntering:be,onEntered:be,onExit:be,onExiting:be,onExited:be},he.UNMOUNTED=ve,he.EXITED=pe,he.ENTERING=Ee,he.ENTERED=me,he.EXITING=xe;var ye=he;function ge(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var Oe=/([A-Z])/g;var Ce=/^ms-/;function we(e){return function(e){return e.replace(Oe,"-$1").toLowerCase()}(e).replace(Ce,"-ms-")}var je=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var Ne=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(we(t))||function(e,t){return ge(e).getComputedStyle(e,t)}(e).getPropertyValue(we(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!je.test(e))}(o)?n+=we(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(we(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},ke=!("undefined"==typeof window||!window.document||!window.document.createElement),Se=!1,Ke=!1;try{var Re={get passive(){return Se=!0},get once(){return Ke=Se=!0}};ke&&(window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,!0))}catch(st){}var Pe=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!Ke){var o=r.once,i=r.capture,a=n;!Ke&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,Se?r:i)}e.addEventListener(t,n,r)};var Te=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var Ae=function(e,t,n,r){return Pe(e,t,n,r),function(){Te(e,t,n,r)}};function De(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=Ae(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function Ie(e,t,n,r){var o,i;null==n&&(o=Ne(e,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var a=De(e,n,r),s=Ae(e,"transitionend",t);return function(){a(),s()}}function Le(e,t){const n=Ne(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Me(e,t){const n=Le(e,"transitionDuration"),r=Le(e,"transitionDelay"),o=Ie(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var $e=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:i,onExiting:a,onExited:s,addEndListener:l,children:u,childRef:c,...d},f)=>{const v=(0,r.useRef)(null),p=y(v,c),E=e=>{var t;p((t=e)&&"setState"in t?o.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&v.current&&e(v.current,t)},x=(0,r.useCallback)(m(e),[e]),h=(0,r.useCallback)(m(t),[t]),b=(0,r.useCallback)(m(n),[n]),g=(0,r.useCallback)(m(i),[i]),C=(0,r.useCallback)(m(a),[a]),w=(0,r.useCallback)(m(s),[s]),j=(0,r.useCallback)(m(l),[l]);return(0,O.jsx)(ye,{ref:f,...d,onEnter:x,onEntered:b,onEntering:h,onExit:g,onExited:w,onExiting:C,addEndListener:j,nodeRef:v,children:"function"==typeof u?(e,t)=>u(e,{...t,ref:E}):r.cloneElement(u,{ref:E})})}));const _e={[Ee]:"show",[me]:"show"},Ue=r.forwardRef((({className:e,children:t,transitionClasses:n={},...o},i)=>{const a=(0,r.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==o.onEnter||o.onEnter(e,t)}),[o]);return(0,O.jsx)($e,{ref:i,addEndListener:Me,...o,onEnter:a,childRef:t.ref,children:(o,i)=>r.cloneElement(t,{...i,className:T()("fade",e,t.props.className,_e[o],n[o])})})}));Ue.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Ue.displayName="Fade";var Fe=Ue;function Ze(e){return"boolean"==typeof e?e?Fe:g:e}const qe=r.forwardRef((({bsPrefix:e,transition:t,...n},r)=>{const[{className:o,as:i="div",...a},{isActive:s,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v,mountOnEnter:E,unmountOnExit:x,transition:h=Fe}]=k({...n,transition:Ze(t)}),b=(0,V.vE)(e,"tab-pane");return(0,O.jsx)(p.Provider,{value:null,children:(0,O.jsx)(m.Provider,{value:null,children:(0,O.jsx)(h,{in:s,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v,mountOnEnter:E,unmountOnExit:x,children:(0,O.jsx)(i,{...a,ref:r,className:T()(o,b,s&&"active")})})})})}));qe.displayName="TabPane";var Ge=qe,Be=n(3439);function We(e){let t;return(0,Be.Ed)(e,(e=>{null==t&&(t=e.props.eventKey)})),t}function Xe(e){const{title:t,eventKey:n,disabled:r,tabClassName:o,tabAttrs:i,id:a}=e.props;return null==t?null:(0,O.jsx)(ee,{as:"li",role:"presentation",children:(0,O.jsx)(ae,{as:"button",type:"button",eventKey:n,disabled:r,id:a,className:o,...i,children:t})})}const He=e=>{const{id:t,onSelect:n,transition:r,mountOnEnter:o,unmountOnExit:i,children:a,activeKey:s=We(a),...l}=c(e,{activeKey:"onSelect"});return(0,O.jsxs)(R,{id:t,activeKey:s,onSelect:n,transition:Ze(r),mountOnEnter:o,unmountOnExit:i,children:[(0,O.jsx)(le,{...l,role:"tablist",as:"ul",children:(0,Be.UI)(a,Xe)}),(0,O.jsx)(ue,{children:(0,Be.UI)(a,(e=>{const t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,O.jsx)(Ge,{...t})}))})]})};He.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},He.displayName="Tabs";var Ve=He,Ye=n(5697),ze=n.n(Ye);const Je=({transition:e,...t})=>(0,O.jsx)(R,{...t,transition:Ze(e)});Je.displayName="TabContainer";var Qe=Je;const et={eventKey:ze().oneOfType([ze().string,ze().number]),title:ze().node.isRequired,disabled:ze().bool,tabClassName:ze().string,tabAttrs:ze().object},tt=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};tt.propTypes=et;var nt=Object.assign(tt,{Container:Qe,Content:ue,Pane:Ge}),rt=n(6461),ot=n(559),it=n(882);var at=function(){const[e,t]=(0,ot.Z)("dataItems",[]);return r.createElement("div",{className:"wrapper",style:{width:"80%",margin:"50px auto"}},r.createElement("h1",{style:{textAlign:"center",fontWeight:"300",fontFamily:"Ubuntu",color:"#B82D18"}},"My GPA"),r.createElement("div",{className:"tab-wrapper"},r.createElement("div",{className:"container-fluid "},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12",style:{boxShadow:"1px 1px 10px  #9E9E9E",borderRadius:"10px"}},r.createElement(Ve,{defaultActiveKey:"grade"},r.createElement(nt,{justify:!0,variant:"tabs",eventKey:"grade",title:"Grade"},r.createElement("div",{className:"tab-item-wrapper"},r.createElement("h5",null,"Calculate GPA"),r.createElement(rt.default,null))),r.createElement(nt,{eventKey:"courselist",title:"Course List"},r.createElement("div",{className:"tab-item-wrapper"},r.createElement("h5",{style:{textAlign:"center",fontSize:"24px"}},"Computer Science"),r.createElement(it.default,{data:e,setDataItems:t})))))))))}},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}))};var r,o=n(2613),i=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,i,a){var s=o||"<<anonymous>>",l=a||r;if(null==n[r])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,s,i,l].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-grade-index-js-a738bddbdedf1eee4ca5.js.map