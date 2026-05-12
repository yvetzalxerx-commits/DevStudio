function My(e,r){for(var i=0;i<r.length;i++){const a=r[i];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in e)){const u=Object.getOwnPropertyDescriptor(a,l);u&&Object.defineProperty(e,l,u.get?u:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function nl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xs={exports:{}},Qi={},Js={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function Ay(){if(lp)return je;lp=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function w(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,P={};function C(R,B,E){this.props=R,this.context=B,this.refs=P,this.updater=E||y}C.prototype.isReactComponent={},C.prototype.setState=function(R,B){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,B,"setState")},C.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function j(){}j.prototype=C.prototype;function A(R,B,E){this.props=R,this.context=B,this.refs=P,this.updater=E||y}var _=A.prototype=new j;_.constructor=A,z(_,C.prototype),_.isPureReactComponent=!0;var W=Array.isArray,H=Object.prototype.hasOwnProperty,L={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function Y(R,B,E){var ae,ge={},he=null,be=null;if(B!=null)for(ae in B.ref!==void 0&&(be=B.ref),B.key!==void 0&&(he=""+B.key),B)H.call(B,ae)&&!V.hasOwnProperty(ae)&&(ge[ae]=B[ae]);var Ee=arguments.length-2;if(Ee===1)ge.children=E;else if(1<Ee){for(var Re=Array(Ee),De=0;De<Ee;De++)Re[De]=arguments[De+2];ge.children=Re}if(R&&R.defaultProps)for(ae in Ee=R.defaultProps,Ee)ge[ae]===void 0&&(ge[ae]=Ee[ae]);return{$$typeof:e,type:R,key:he,ref:be,props:ge,_owner:L.current}}function Z(R,B){return{$$typeof:e,type:R.type,key:B,ref:R.ref,props:R.props,_owner:R._owner}}function J(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function te(R){var B={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(E){return B[E]})}var ne=/\/+/g;function xe(R,B){return typeof R=="object"&&R!==null&&R.key!=null?te(""+R.key):B.toString(36)}function ie(R,B,E,ae,ge){var he=typeof R;(he==="undefined"||he==="boolean")&&(R=null);var be=!1;if(R===null)be=!0;else switch(he){case"string":case"number":be=!0;break;case"object":switch(R.$$typeof){case e:case r:be=!0}}if(be)return be=R,ge=ge(be),R=ae===""?"."+xe(be,0):ae,W(ge)?(E="",R!=null&&(E=R.replace(ne,"$&/")+"/"),ie(ge,B,E,"",function(De){return De})):ge!=null&&(J(ge)&&(ge=Z(ge,E+(!ge.key||be&&be.key===ge.key?"":(""+ge.key).replace(ne,"$&/")+"/")+R)),B.push(ge)),1;if(be=0,ae=ae===""?".":ae+":",W(R))for(var Ee=0;Ee<R.length;Ee++){he=R[Ee];var Re=ae+xe(he,Ee);be+=ie(he,B,E,Re,ge)}else if(Re=w(R),typeof Re=="function")for(R=Re.call(R),Ee=0;!(he=R.next()).done;)he=he.value,Re=ae+xe(he,Ee++),be+=ie(he,B,E,Re,ge);else if(he==="object")throw B=String(R),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return be}function U(R,B,E){if(R==null)return R;var ae=[],ge=0;return ie(R,ae,"","",function(he){return B.call(E,he,ge++)}),ae}function re(R){if(R._status===-1){var B=R._result;B=B(),B.then(function(E){(R._status===0||R._status===-1)&&(R._status=1,R._result=E)},function(E){(R._status===0||R._status===-1)&&(R._status=2,R._result=E)}),R._status===-1&&(R._status=0,R._result=B)}if(R._status===1)return R._result.default;throw R._result}var me={current:null},F={transition:null},le={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:F,ReactCurrentOwner:L};function S(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:U,forEach:function(R,B,E){U(R,function(){B.apply(this,arguments)},E)},count:function(R){var B=0;return U(R,function(){B++}),B},toArray:function(R){return U(R,function(B){return B})||[]},only:function(R){if(!J(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},je.Component=C,je.Fragment=i,je.Profiler=l,je.PureComponent=A,je.StrictMode=a,je.Suspense=h,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,je.act=S,je.cloneElement=function(R,B,E){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ae=z({},R.props),ge=R.key,he=R.ref,be=R._owner;if(B!=null){if(B.ref!==void 0&&(he=B.ref,be=L.current),B.key!==void 0&&(ge=""+B.key),R.type&&R.type.defaultProps)var Ee=R.type.defaultProps;for(Re in B)H.call(B,Re)&&!V.hasOwnProperty(Re)&&(ae[Re]=B[Re]===void 0&&Ee!==void 0?Ee[Re]:B[Re])}var Re=arguments.length-2;if(Re===1)ae.children=E;else if(1<Re){Ee=Array(Re);for(var De=0;De<Re;De++)Ee[De]=arguments[De+2];ae.children=Ee}return{$$typeof:e,type:R.type,key:ge,ref:he,props:ae,_owner:be}},je.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:u,_context:R},R.Consumer=R},je.createElement=Y,je.createFactory=function(R){var B=Y.bind(null,R);return B.type=R,B},je.createRef=function(){return{current:null}},je.forwardRef=function(R){return{$$typeof:f,render:R}},je.isValidElement=J,je.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:re}},je.memo=function(R,B){return{$$typeof:m,type:R,compare:B===void 0?null:B}},je.startTransition=function(R){var B=F.transition;F.transition={};try{R()}finally{F.transition=B}},je.unstable_act=S,je.useCallback=function(R,B){return me.current.useCallback(R,B)},je.useContext=function(R){return me.current.useContext(R)},je.useDebugValue=function(){},je.useDeferredValue=function(R){return me.current.useDeferredValue(R)},je.useEffect=function(R,B){return me.current.useEffect(R,B)},je.useId=function(){return me.current.useId()},je.useImperativeHandle=function(R,B,E){return me.current.useImperativeHandle(R,B,E)},je.useInsertionEffect=function(R,B){return me.current.useInsertionEffect(R,B)},je.useLayoutEffect=function(R,B){return me.current.useLayoutEffect(R,B)},je.useMemo=function(R,B){return me.current.useMemo(R,B)},je.useReducer=function(R,B,E){return me.current.useReducer(R,B,E)},je.useRef=function(R){return me.current.useRef(R)},je.useState=function(R){return me.current.useState(R)},je.useSyncExternalStore=function(R,B,E){return me.current.useSyncExternalStore(R,B,E)},je.useTransition=function(){return me.current.useTransition()},je.version="18.3.1",je}var sp;function Qu(){return sp||(sp=1,Js.exports=Ay()),Js.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function Oy(){if(up)return Qi;up=1;var e=Qu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var g,v={},w=null,y=null;m!==void 0&&(w=""+m),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)a.call(h,g)&&!u.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:r,type:f,key:w,ref:y,props:v,_owner:l.current}}return Qi.Fragment=i,Qi.jsx=c,Qi.jsxs=c,Qi}var cp;function Dy(){return cp||(cp=1,Xs.exports=Oy()),Xs.exports}var b=Dy(),Ra={},Zs={exports:{}},bt={},eu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function Fy(){return dp||(dp=1,(function(e){function r(F,le){var S=F.length;F.push(le);e:for(;0<S;){var R=S-1>>>1,B=F[R];if(0<l(B,le))F[R]=le,F[S]=B,S=R;else break e}}function i(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var le=F[0],S=F.pop();if(S!==le){F[0]=S;e:for(var R=0,B=F.length,E=B>>>1;R<E;){var ae=2*(R+1)-1,ge=F[ae],he=ae+1,be=F[he];if(0>l(ge,S))he<B&&0>l(be,ge)?(F[R]=be,F[he]=S,R=he):(F[R]=ge,F[ae]=S,R=ae);else if(he<B&&0>l(be,S))F[R]=be,F[he]=S,R=he;else break e}}return le}function l(F,le){var S=F.sortIndex-le.sortIndex;return S!==0?S:F.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();e.unstable_now=function(){return c.now()-f}}var h=[],m=[],g=1,v=null,w=3,y=!1,z=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var le=i(m);le!==null;){if(le.callback===null)a(m);else if(le.startTime<=F)a(m),le.sortIndex=le.expirationTime,r(h,le);else break;le=i(m)}}function W(F){if(P=!1,_(F),!z)if(i(h)!==null)z=!0,re(H);else{var le=i(m);le!==null&&me(W,le.startTime-F)}}function H(F,le){z=!1,P&&(P=!1,j(Y),Y=-1),y=!0;var S=w;try{for(_(le),v=i(h);v!==null&&(!(v.expirationTime>le)||F&&!te());){var R=v.callback;if(typeof R=="function"){v.callback=null,w=v.priorityLevel;var B=R(v.expirationTime<=le);le=e.unstable_now(),typeof B=="function"?v.callback=B:v===i(h)&&a(h),_(le)}else a(h);v=i(h)}if(v!==null)var E=!0;else{var ae=i(m);ae!==null&&me(W,ae.startTime-le),E=!1}return E}finally{v=null,w=S,y=!1}}var L=!1,V=null,Y=-1,Z=5,J=-1;function te(){return!(e.unstable_now()-J<Z)}function ne(){if(V!==null){var F=e.unstable_now();J=F;var le=!0;try{le=V(!0,F)}finally{le?xe():(L=!1,V=null)}}else L=!1}var xe;if(typeof A=="function")xe=function(){A(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,U=ie.port2;ie.port1.onmessage=ne,xe=function(){U.postMessage(null)}}else xe=function(){C(ne,0)};function re(F){V=F,L||(L=!0,xe())}function me(F,le){Y=C(function(){F(e.unstable_now())},le)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){z||y||(z=!0,re(H))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return i(h)},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var le=3;break;default:le=w}var S=w;w=le;try{return F()}finally{w=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,le){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var S=w;w=F;try{return le()}finally{w=S}},e.unstable_scheduleCallback=function(F,le,S){var R=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?R+S:R):S=R,F){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=S+B,F={id:g++,callback:le,priorityLevel:F,startTime:S,expirationTime:B,sortIndex:-1},S>R?(F.sortIndex=S,r(m,F),i(h)===null&&F===i(m)&&(P?(j(Y),Y=-1):P=!0,me(W,S-R))):(F.sortIndex=B,r(h,F),z||y||(z=!0,re(H))),F},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(F){var le=w;return function(){var S=w;w=le;try{return F.apply(this,arguments)}finally{w=S}}}})(tu)),tu}var fp;function By(){return fp||(fp=1,eu.exports=Fy()),eu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function Uy(){if(pp)return bt;pp=1;var e=Qu(),r=By();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function u(t,n){c(t,n),c(t+"Capture",n)}function c(t,n){for(l[t]=n,t=0;t<n.length;t++)a.add(n[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function w(t){return h.call(v,t)?!0:h.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function y(t,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function z(t,n,o,s){if(n===null||typeof n>"u"||y(t,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(t,n,o,s,d,p,x){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=p,this.removeEmptyString=x}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){C[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];C[n]=new P(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){C[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){C[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){C[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){C[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){C[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){C[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){C[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function A(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(j,A);C[n]=new P(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(j,A);C[n]=new P(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(j,A);C[n]=new P(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){C[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),C.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){C[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function _(t,n,o,s){var d=C.hasOwnProperty(n)?C[n]:null;(d!==null?d.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(z(n,o,d,s)&&(o=null),s||d===null?w(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,s=d.attributeNamespace,o===null?t.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,s?t.setAttributeNS(s,n,o):t.setAttribute(n,o))))}var W=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),L=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),te=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),F=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var S=Object.assign,R;function B(t){if(R===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);R=n&&n[1]||""}return`
`+R+t}var E=!1;function ae(t,n){if(!t||E)return"";E=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(D){var s=D}Reflect.construct(t,[],n)}else{try{n.call()}catch(D){s=D}t.call(n.prototype)}else{try{throw Error()}catch(D){s=D}t()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var d=D.stack.split(`
`),p=s.stack.split(`
`),x=d.length-1,N=p.length-1;1<=x&&0<=N&&d[x]!==p[N];)N--;for(;1<=x&&0<=N;x--,N--)if(d[x]!==p[N]){if(x!==1||N!==1)do if(x--,N--,0>N||d[x]!==p[N]){var T=`
`+d[x].replace(" at new "," at ");return t.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",t.displayName)),T}while(1<=x&&0<=N);break}}}finally{E=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?B(t):""}function ge(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case L:return"Portal";case Z:return"Profiler";case Y:return"StrictMode";case xe:return"Suspense";case ie:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case te:return(t.displayName||"Context")+".Consumer";case J:return(t._context.displayName||"Context")+".Provider";case ne:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case re:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}function be(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(n);case 8:return n===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ee(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function De(t){var n=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(x){s=""+x,p.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Et(t){t._valueTracker||(t._valueTracker=De(t))}function un(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return t&&(s=Re(t)?t.checked?"true":"false":t.value),t=s,t!==o?(n.setValue(t),!0):!1}function br(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ui(t,n){var o=n.checked;return S({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ci(t,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=Ee(n.value!=null?n.value:o),t._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function di(t,n){n=n.checked,n!=null&&_(t,"checked",n,!1)}function wr(t,n){di(t,n);var o=Ee(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(s==="submit"||s==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?kr(t,n.type,o):n.hasOwnProperty("defaultValue")&&kr(t,n.type,Ee(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function yo(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function kr(t,n,o){(n!=="number"||br(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var En=Array.isArray;function Cn(t,n,o,s){if(t=t.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=n.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&s&&(t[o].defaultSelected=!0)}else{for(o=""+Ee(o),n=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,s&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function fi(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return S({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xo(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(En(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:Ee(o)}}function bo(t,n){var o=Ee(n.value),s=Ee(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),s!=null&&(t.defaultValue=""+s)}function wo(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function $(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ee(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?$(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Pe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,d){MSApp.execUnsafeLocalFunction(function(){return t(n,o,s,d)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Te(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cn=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(t){cn.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),nt[n]=nt[t]})});function Lt(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||nt.hasOwnProperty(t)&&nt[t]?(""+n).trim():n+"px"}function Nn(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,d=Lt(o,n[o],s);o==="float"&&(o="cssFloat"),s?t.setProperty(o,d):t[o]=d}}var Jn=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(t,n){if(n){if(Jn[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Xt(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function fl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,Sr=null,Er=null;function Sc(t){if(t=_i(t)){if(typeof pl!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Ho(n),pl(t.stateNode,t.type,n))}}function Ec(t){Sr?Er?Er.push(t):Er=[t]:Sr=t}function Cc(){if(Sr){var t=Sr,n=Er;if(Er=Sr=null,Sc(t),n)for(t=0;t<n.length;t++)Sc(n[t])}}function Nc(t,n){return t(n)}function Pc(){}var ml=!1;function jc(t,n,o){if(ml)return t(n,o);ml=!0;try{return Nc(t,n,o)}finally{ml=!1,(Sr!==null||Er!==null)&&(Pc(),Cc())}}function pi(t,n){var o=t.stateNode;if(o===null)return null;var s=Ho(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var hl=!1;if(f)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){hl=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{hl=!1}function Ug(t,n,o,s,d,p,x,N,T){var D=Array.prototype.slice.call(arguments,3);try{n.apply(o,D)}catch(G){this.onError(G)}}var hi=!1,ko=null,So=!1,gl=null,$g={onError:function(t){hi=!0,ko=t}};function Vg(t,n,o,s,d,p,x,N,T){hi=!1,ko=null,Ug.apply($g,arguments)}function Hg(t,n,o,s,d,p,x,N,T){if(Vg.apply(this,arguments),hi){if(hi){var D=ko;hi=!1,ko=null}else throw Error(i(198));So||(So=!0,gl=D)}}function Zn(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function Rc(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Tc(t){if(Zn(t)!==t)throw Error(i(188))}function Wg(t){var n=t.alternate;if(!n){if(n=Zn(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,s=n;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(s=d.return,s!==null){o=s;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Tc(d),t;if(p===s)return Tc(d),n;p=p.sibling}throw Error(i(188))}if(o.return!==s.return)o=d,s=p;else{for(var x=!1,N=d.child;N;){if(N===o){x=!0,o=d,s=p;break}if(N===s){x=!0,s=d,o=p;break}N=N.sibling}if(!x){for(N=p.child;N;){if(N===o){x=!0,o=p,s=d;break}if(N===s){x=!0,s=p,o=d;break}N=N.sibling}if(!x)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function zc(t){return t=Wg(t),t!==null?Ic(t):null}function Ic(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Ic(t);if(n!==null)return n;t=t.sibling}return null}var Lc=r.unstable_scheduleCallback,_c=r.unstable_cancelCallback,Yg=r.unstable_shouldYield,qg=r.unstable_requestPaint,Ye=r.unstable_now,Gg=r.unstable_getCurrentPriorityLevel,vl=r.unstable_ImmediatePriority,Mc=r.unstable_UserBlockingPriority,Eo=r.unstable_NormalPriority,Qg=r.unstable_LowPriority,Ac=r.unstable_IdlePriority,Co=null,Jt=null;function Kg(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Co,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Zg,Xg=Math.log,Jg=Math.LN2;function Zg(t){return t>>>=0,t===0?32:31-(Xg(t)/Jg|0)|0}var No=64,Po=4194304;function gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jo(t,n){var o=t.pendingLanes;if(o===0)return 0;var s=0,d=t.suspendedLanes,p=t.pingedLanes,x=o&268435455;if(x!==0){var N=x&~d;N!==0?s=gi(N):(p&=x,p!==0&&(s=gi(p)))}else x=o&~d,x!==0?s=gi(x):p!==0&&(s=gi(p));if(s===0)return 0;if(n!==0&&n!==s&&(n&d)===0&&(d=s&-s,p=n&-n,d>=p||d===16&&(p&4194240)!==0))return n;if((s&4)!==0&&(s|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=s;0<n;)o=31-$t(n),d=1<<o,s|=t[o],n&=~d;return s}function ev(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(t,n){for(var o=t.suspendedLanes,s=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var x=31-$t(p),N=1<<x,T=d[x];T===-1?((N&o)===0||(N&s)!==0)&&(d[x]=ev(N,n)):T<=n&&(t.expiredLanes|=N),p&=~N}}function yl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oc(){var t=No;return No<<=1,(No&4194240)===0&&(No=64),t}function xl(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function vi(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-$t(n),t[n]=o}function nv(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var s=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-$t(o),p=1<<d;n[d]=0,s[d]=-1,t[d]=-1,o&=~p}}function bl(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var s=31-$t(o),d=1<<s;d&n|t[s]&n&&(t[s]|=n),o&=~d}}var _e=0;function Dc(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Fc,wl,Bc,Uc,$c,kl=!1,Ro=[],Pn=null,jn=null,Rn=null,yi=new Map,xi=new Map,Tn=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(t,n){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":yi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(n.pointerId)}}function bi(t,n,o,s,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:p,targetContainers:[d]},n!==null&&(n=_i(n),n!==null&&wl(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function iv(t,n,o,s,d){switch(n){case"focusin":return Pn=bi(Pn,t,n,o,s,d),!0;case"dragenter":return jn=bi(jn,t,n,o,s,d),!0;case"mouseover":return Rn=bi(Rn,t,n,o,s,d),!0;case"pointerover":var p=d.pointerId;return yi.set(p,bi(yi.get(p)||null,t,n,o,s,d)),!0;case"gotpointercapture":return p=d.pointerId,xi.set(p,bi(xi.get(p)||null,t,n,o,s,d)),!0}return!1}function Hc(t){var n=er(t.target);if(n!==null){var o=Zn(n);if(o!==null){if(n=o.tag,n===13){if(n=Rc(o),n!==null){t.blockedOn=n,$c(t.priority,function(){Bc(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=El(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var s=new o.constructor(o.type,o);Ct=s,o.target.dispatchEvent(s),Ct=null}else return n=_i(o),n!==null&&wl(n),t.blockedOn=o,!1;n.shift()}return!0}function Wc(t,n,o){To(t)&&o.delete(n)}function ov(){kl=!1,Pn!==null&&To(Pn)&&(Pn=null),jn!==null&&To(jn)&&(jn=null),Rn!==null&&To(Rn)&&(Rn=null),yi.forEach(Wc),xi.forEach(Wc)}function wi(t,n){t.blockedOn===n&&(t.blockedOn=null,kl||(kl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ov)))}function ki(t){function n(d){return wi(d,t)}if(0<Ro.length){wi(Ro[0],t);for(var o=1;o<Ro.length;o++){var s=Ro[o];s.blockedOn===t&&(s.blockedOn=null)}}for(Pn!==null&&wi(Pn,t),jn!==null&&wi(jn,t),Rn!==null&&wi(Rn,t),yi.forEach(n),xi.forEach(n),o=0;o<Tn.length;o++)s=Tn[o],s.blockedOn===t&&(s.blockedOn=null);for(;0<Tn.length&&(o=Tn[0],o.blockedOn===null);)Hc(o),o.blockedOn===null&&Tn.shift()}var Cr=W.ReactCurrentBatchConfig,zo=!0;function av(t,n,o,s){var d=_e,p=Cr.transition;Cr.transition=null;try{_e=1,Sl(t,n,o,s)}finally{_e=d,Cr.transition=p}}function lv(t,n,o,s){var d=_e,p=Cr.transition;Cr.transition=null;try{_e=4,Sl(t,n,o,s)}finally{_e=d,Cr.transition=p}}function Sl(t,n,o,s){if(zo){var d=El(t,n,o,s);if(d===null)Ul(t,n,s,Io,o),Vc(t,s);else if(iv(d,t,n,o,s))s.stopPropagation();else if(Vc(t,s),n&4&&-1<rv.indexOf(t)){for(;d!==null;){var p=_i(d);if(p!==null&&Fc(p),p=El(t,n,o,s),p===null&&Ul(t,n,s,Io,o),p===d)break;d=p}d!==null&&s.stopPropagation()}else Ul(t,n,s,null,o)}}var Io=null;function El(t,n,o,s){if(Io=null,t=fl(s),t=er(t),t!==null)if(n=Zn(t),n===null)t=null;else if(o=n.tag,o===13){if(t=Rc(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Io=t,null}function Yc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gg()){case vl:return 1;case Mc:return 4;case Eo:case Qg:return 16;case Ac:return 536870912;default:return 16}default:return 16}}var zn=null,Cl=null,Lo=null;function qc(){if(Lo)return Lo;var t,n=Cl,o=n.length,s,d="value"in zn?zn.value:zn.textContent,p=d.length;for(t=0;t<o&&n[t]===d[t];t++);var x=o-t;for(s=1;s<=x&&n[o-s]===d[p-s];s++);return Lo=d.slice(t,1<s?1-s:void 0)}function _o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function Gc(){return!1}function Nt(t){function n(o,s,d,p,x){this._reactName=o,this._targetInst=d,this.type=s,this.nativeEvent=p,this.target=x,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Mo:Gc,this.isPropagationStopped=Gc,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),n}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Nt(Nr),Si=S({},Nr,{view:0,detail:0}),sv=Nt(Si),Pl,jl,Ei,Ao=S({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Pl=t.screenX-Ei.screenX,jl=t.screenY-Ei.screenY):jl=Pl=0,Ei=t),Pl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),Qc=Nt(Ao),uv=S({},Ao,{dataTransfer:0}),cv=Nt(uv),dv=S({},Si,{relatedTarget:0}),Rl=Nt(dv),fv=S({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=Nt(fv),mv=S({},Nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hv=Nt(mv),gv=S({},Nr,{data:0}),Kc=Nt(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xv[t])?!!n[t]:!1}function Tl(){return bv}var wv=S({},Si,{key:function(t){if(t.key){var n=vv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kv=Nt(wv),Sv=S({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=Nt(Sv),Ev=S({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),Cv=Nt(Ev),Nv=S({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=Nt(Nv),jv=S({},Ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Nt(jv),Tv=[9,13,27,32],zl=f&&"CompositionEvent"in window,Ci=null;f&&"documentMode"in document&&(Ci=document.documentMode);var zv=f&&"TextEvent"in window&&!Ci,Jc=f&&(!zl||Ci&&8<Ci&&11>=Ci),Zc=" ",ed=!1;function td(t,n){switch(t){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function Iv(t,n){switch(t){case"compositionend":return nd(n);case"keypress":return n.which!==32?null:(ed=!0,Zc);case"textInput":return t=n.data,t===Zc&&ed?null:t;default:return null}}function Lv(t,n){if(Pr)return t==="compositionend"||!zl&&td(t,n)?(t=qc(),Lo=Cl=zn=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jc&&n.locale!=="ko"?null:n.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_v[t.type]:n==="textarea"}function id(t,n,o,s){Ec(s),n=Uo(n,"onChange"),0<n.length&&(o=new Nl("onChange","change",null,o,s),t.push({event:o,listeners:n}))}var Ni=null,Pi=null;function Mv(t){kd(t,0)}function Oo(t){var n=Ir(t);if(un(n))return t}function Av(t,n){if(t==="change")return n}var od=!1;if(f){var Il;if(f){var Ll="oninput"in document;if(!Ll){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Ll=typeof ad.oninput=="function"}Il=Ll}else Il=!1;od=Il&&(!document.documentMode||9<document.documentMode)}function ld(){Ni&&(Ni.detachEvent("onpropertychange",sd),Pi=Ni=null)}function sd(t){if(t.propertyName==="value"&&Oo(Pi)){var n=[];id(n,Pi,t,fl(t)),jc(Mv,n)}}function Ov(t,n,o){t==="focusin"?(ld(),Ni=n,Pi=o,Ni.attachEvent("onpropertychange",sd)):t==="focusout"&&ld()}function Dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oo(Pi)}function Fv(t,n){if(t==="click")return Oo(n)}function Bv(t,n){if(t==="input"||t==="change")return Oo(n)}function Uv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vt=typeof Object.is=="function"?Object.is:Uv;function ji(t,n){if(Vt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var d=o[s];if(!h.call(n,d)||!Vt(t[d],n[d]))return!1}return!0}function ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cd(t,n){var o=ud(t);t=0;for(var s;o;){if(o.nodeType===3){if(s=t+o.textContent.length,t<=n&&s>=n)return{node:o,offset:n-t};t=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ud(o)}}function dd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fd(){for(var t=window,n=br();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=br(t.document)}return n}function _l(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function $v(t){var n=fd(),o=t.focusedElem,s=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&dd(o.ownerDocument.documentElement,o)){if(s!==null&&_l(o)){if(n=s.start,t=s.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(s.start,d);s=s.end===void 0?p:Math.min(s.end,d),!t.extend&&p>s&&(d=s,s=p,p=d),d=cd(o,p);var x=cd(o,s);d&&x&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==x.node||t.focusOffset!==x.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),t.removeAllRanges(),p>s?(t.addRange(n),t.extend(x.node,x.offset)):(n.setEnd(x.node,x.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vv=f&&"documentMode"in document&&11>=document.documentMode,jr=null,Ml=null,Ri=null,Al=!1;function pd(t,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Al||jr==null||jr!==br(s)||(s=jr,"selectionStart"in s&&_l(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ri&&ji(Ri,s)||(Ri=s,s=Uo(Ml,"onSelect"),0<s.length&&(n=new Nl("onSelect","select",null,n,o),t.push({event:n,listeners:s}),n.target=jr)))}function Do(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var Rr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Ol={},md={};f&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Fo(t){if(Ol[t])return Ol[t];if(!Rr[t])return t;var n=Rr[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in md)return Ol[t]=n[o];return t}var hd=Fo("animationend"),gd=Fo("animationiteration"),vd=Fo("animationstart"),yd=Fo("transitionend"),xd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,n){xd.set(t,n),u(n,[t])}for(var Dl=0;Dl<bd.length;Dl++){var Fl=bd[Dl],Hv=Fl.toLowerCase(),Wv=Fl[0].toUpperCase()+Fl.slice(1);In(Hv,"on"+Wv)}In(hd,"onAnimationEnd"),In(gd,"onAnimationIteration"),In(vd,"onAnimationStart"),In("dblclick","onDoubleClick"),In("focusin","onFocus"),In("focusout","onBlur"),In(yd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function wd(t,n,o){var s=t.type||"unknown-event";t.currentTarget=o,Hg(s,n,void 0,t),t.currentTarget=null}function kd(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var s=t[o],d=s.event;s=s.listeners;e:{var p=void 0;if(n)for(var x=s.length-1;0<=x;x--){var N=s[x],T=N.instance,D=N.currentTarget;if(N=N.listener,T!==p&&d.isPropagationStopped())break e;wd(d,N,D),p=T}else for(x=0;x<s.length;x++){if(N=s[x],T=N.instance,D=N.currentTarget,N=N.listener,T!==p&&d.isPropagationStopped())break e;wd(d,N,D),p=T}}}if(So)throw t=gl,So=!1,gl=null,t}function Fe(t,n){var o=n[ql];o===void 0&&(o=n[ql]=new Set);var s=t+"__bubble";o.has(s)||(Sd(n,t,2,!1),o.add(s))}function Bl(t,n,o){var s=0;n&&(s|=4),Sd(o,t,s,n)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[Bo]){t[Bo]=!0,a.forEach(function(o){o!=="selectionchange"&&(Yv.has(o)||Bl(o,!1,t),Bl(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bo]||(n[Bo]=!0,Bl("selectionchange",!1,n))}}function Sd(t,n,o,s){switch(Yc(n)){case 1:var d=av;break;case 4:d=lv;break;default:d=Sl}o=d.bind(null,n,o,t),d=void 0,!hl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?t.addEventListener(n,o,{capture:!0,passive:d}):t.addEventListener(n,o,!0):d!==void 0?t.addEventListener(n,o,{passive:d}):t.addEventListener(n,o,!1)}function Ul(t,n,o,s,d){var p=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var N=s.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(x===4)for(x=s.return;x!==null;){var T=x.tag;if((T===3||T===4)&&(T=x.stateNode.containerInfo,T===d||T.nodeType===8&&T.parentNode===d))return;x=x.return}for(;N!==null;){if(x=er(N),x===null)return;if(T=x.tag,T===5||T===6){s=p=x;continue e}N=N.parentNode}}s=s.return}jc(function(){var D=p,G=fl(o),Q=[];e:{var q=xd.get(t);if(q!==void 0){var oe=Nl,ue=t;switch(t){case"keypress":if(_o(o)===0)break e;case"keydown":case"keyup":oe=kv;break;case"focusin":ue="focus",oe=Rl;break;case"focusout":ue="blur",oe=Rl;break;case"beforeblur":case"afterblur":oe=Rl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Cv;break;case hd:case gd:case vd:oe=pv;break;case yd:oe=Pv;break;case"scroll":oe=sv;break;case"wheel":oe=Rv;break;case"copy":case"cut":case"paste":oe=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Xc}var fe=(n&4)!==0,qe=!fe&&t==="scroll",M=fe?q!==null?q+"Capture":null:q;fe=[];for(var I=D,O;I!==null;){O=I;var X=O.stateNode;if(O.tag===5&&X!==null&&(O=X,M!==null&&(X=pi(I,M),X!=null&&fe.push(Ii(I,X,O)))),qe)break;I=I.return}0<fe.length&&(q=new oe(q,ue,null,o,G),Q.push({event:q,listeners:fe}))}}if((n&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",q&&o!==Ct&&(ue=o.relatedTarget||o.fromElement)&&(er(ue)||ue[dn]))break e;if((oe||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,oe?(ue=o.relatedTarget||o.toElement,oe=D,ue=ue?er(ue):null,ue!==null&&(qe=Zn(ue),ue!==qe||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(oe=null,ue=D),oe!==ue)){if(fe=Qc,X="onMouseLeave",M="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(fe=Xc,X="onPointerLeave",M="onPointerEnter",I="pointer"),qe=oe==null?q:Ir(oe),O=ue==null?q:Ir(ue),q=new fe(X,I+"leave",oe,o,G),q.target=qe,q.relatedTarget=O,X=null,er(G)===D&&(fe=new fe(M,I+"enter",ue,o,G),fe.target=O,fe.relatedTarget=qe,X=fe),qe=X,oe&&ue)t:{for(fe=oe,M=ue,I=0,O=fe;O;O=Tr(O))I++;for(O=0,X=M;X;X=Tr(X))O++;for(;0<I-O;)fe=Tr(fe),I--;for(;0<O-I;)M=Tr(M),O--;for(;I--;){if(fe===M||M!==null&&fe===M.alternate)break t;fe=Tr(fe),M=Tr(M)}fe=null}else fe=null;oe!==null&&Ed(Q,q,oe,fe,!1),ue!==null&&qe!==null&&Ed(Q,qe,ue,fe,!0)}}e:{if(q=D?Ir(D):window,oe=q.nodeName&&q.nodeName.toLowerCase(),oe==="select"||oe==="input"&&q.type==="file")var pe=Av;else if(rd(q))if(od)pe=Bv;else{pe=Dv;var ve=Ov}else(oe=q.nodeName)&&oe.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(pe=Fv);if(pe&&(pe=pe(t,D))){id(Q,pe,o,G);break e}ve&&ve(t,q,D),t==="focusout"&&(ve=q._wrapperState)&&ve.controlled&&q.type==="number"&&kr(q,"number",q.value)}switch(ve=D?Ir(D):window,t){case"focusin":(rd(ve)||ve.contentEditable==="true")&&(jr=ve,Ml=D,Ri=null);break;case"focusout":Ri=Ml=jr=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,pd(Q,o,G);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":pd(Q,o,G)}var ye;if(zl)e:{switch(t){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Pr?td(t,o)&&(ke="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ke="onCompositionStart");ke&&(Jc&&o.locale!=="ko"&&(Pr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Pr&&(ye=qc()):(zn=G,Cl="value"in zn?zn.value:zn.textContent,Pr=!0)),ve=Uo(D,ke),0<ve.length&&(ke=new Kc(ke,t,null,o,G),Q.push({event:ke,listeners:ve}),ye?ke.data=ye:(ye=nd(o),ye!==null&&(ke.data=ye)))),(ye=zv?Iv(t,o):Lv(t,o))&&(D=Uo(D,"onBeforeInput"),0<D.length&&(G=new Kc("onBeforeInput","beforeinput",null,o,G),Q.push({event:G,listeners:D}),G.data=ye))}kd(Q,n)})}function Ii(t,n,o){return{instance:t,listener:n,currentTarget:o}}function Uo(t,n){for(var o=n+"Capture",s=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=pi(t,o),p!=null&&s.unshift(Ii(t,p,d)),p=pi(t,n),p!=null&&s.push(Ii(t,p,d))),t=t.return}return s}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ed(t,n,o,s,d){for(var p=n._reactName,x=[];o!==null&&o!==s;){var N=o,T=N.alternate,D=N.stateNode;if(T!==null&&T===s)break;N.tag===5&&D!==null&&(N=D,d?(T=pi(o,p),T!=null&&x.unshift(Ii(o,T,N))):d||(T=pi(o,p),T!=null&&x.push(Ii(o,T,N)))),o=o.return}x.length!==0&&t.push({event:n,listeners:x})}var qv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Cd(t){return(typeof t=="string"?t:""+t).replace(qv,`
`).replace(Gv,"")}function $o(t,n,o){if(n=Cd(n),Cd(t)!==n&&o)throw Error(i(425))}function Vo(){}var $l=null,Vl=null;function Hl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(Xv)}:Wl;function Xv(t){setTimeout(function(){throw t})}function Yl(t,n){var o=n,s=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(s===0){t.removeChild(d),ki(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=d}while(o);ki(n)}function Ln(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Pd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+zr,Li="__reactProps$"+zr,dn="__reactContainer$"+zr,ql="__reactEvents$"+zr,Jv="__reactListeners$"+zr,Zv="__reactHandles$"+zr;function er(t){var n=t[Zt];if(n)return n;for(var o=t.parentNode;o;){if(n=o[dn]||o[Zt]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=Pd(t);t!==null;){if(o=t[Zt])return o;t=Pd(t)}return n}t=o,o=t.parentNode}return null}function _i(t){return t=t[Zt]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Ho(t){return t[Li]||null}var Gl=[],Lr=-1;function _n(t){return{current:t}}function Be(t){0>Lr||(t.current=Gl[Lr],Gl[Lr]=null,Lr--)}function Me(t,n){Lr++,Gl[Lr]=t.current,t.current=n}var Mn={},lt=_n(Mn),ht=_n(!1),tr=Mn;function _r(t,n){var o=t.type.contextTypes;if(!o)return Mn;var s=t.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=n[p];return s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=d),d}function gt(t){return t=t.childContextTypes,t!=null}function Wo(){Be(ht),Be(lt)}function jd(t,n,o){if(lt.current!==Mn)throw Error(i(168));Me(lt,n),Me(ht,o)}function Rd(t,n,o){var s=t.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var d in s)if(!(d in n))throw Error(i(108,be(t)||"Unknown",d));return S({},o,s)}function Yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,tr=lt.current,Me(lt,t),Me(ht,ht.current),!0}function Td(t,n,o){var s=t.stateNode;if(!s)throw Error(i(169));o?(t=Rd(t,n,tr),s.__reactInternalMemoizedMergedChildContext=t,Be(ht),Be(lt),Me(lt,t)):Be(ht),Me(ht,o)}var fn=null,qo=!1,Ql=!1;function zd(t){fn===null?fn=[t]:fn.push(t)}function ey(t){qo=!0,zd(t)}function An(){if(!Ql&&fn!==null){Ql=!0;var t=0,n=_e;try{var o=fn;for(_e=1;t<o.length;t++){var s=o[t];do s=s(!0);while(s!==null)}fn=null,qo=!1}catch(d){throw fn!==null&&(fn=fn.slice(t+1)),Lc(vl,An),d}finally{_e=n,Ql=!1}}return null}var Mr=[],Ar=0,Go=null,Qo=0,_t=[],Mt=0,nr=null,pn=1,mn="";function rr(t,n){Mr[Ar++]=Qo,Mr[Ar++]=Go,Go=t,Qo=n}function Id(t,n,o){_t[Mt++]=pn,_t[Mt++]=mn,_t[Mt++]=nr,nr=t;var s=pn;t=mn;var d=32-$t(s)-1;s&=~(1<<d),o+=1;var p=32-$t(n)+d;if(30<p){var x=d-d%5;p=(s&(1<<x)-1).toString(32),s>>=x,d-=x,pn=1<<32-$t(n)+d|o<<d|s,mn=p+t}else pn=1<<p|o<<d|s,mn=t}function Kl(t){t.return!==null&&(rr(t,1),Id(t,1,0))}function Xl(t){for(;t===Go;)Go=Mr[--Ar],Mr[Ar]=null,Qo=Mr[--Ar],Mr[Ar]=null;for(;t===nr;)nr=_t[--Mt],_t[Mt]=null,mn=_t[--Mt],_t[Mt]=null,pn=_t[--Mt],_t[Mt]=null}var Pt=null,jt=null,Ue=!1,Ht=null;function Ld(t,n){var o=Ft(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function _d(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Pt=t,jt=Ln(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Pt=t,jt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=nr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Ft(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,Pt=t,jt=null,!0):!1;default:return!1}}function Jl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zl(t){if(Ue){var n=jt;if(n){var o=n;if(!_d(t,n)){if(Jl(t))throw Error(i(418));n=Ln(o.nextSibling);var s=Pt;n&&_d(t,n)?Ld(s,o):(t.flags=t.flags&-4097|2,Ue=!1,Pt=t)}}else{if(Jl(t))throw Error(i(418));t.flags=t.flags&-4097|2,Ue=!1,Pt=t}}}function Md(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ko(t){if(t!==Pt)return!1;if(!Ue)return Md(t),Ue=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Hl(t.type,t.memoizedProps)),n&&(n=jt)){if(Jl(t))throw Ad(),Error(i(418));for(;n;)Ld(t,n),n=Ln(n.nextSibling)}if(Md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){jt=Ln(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}jt=null}}else jt=Pt?Ln(t.stateNode.nextSibling):null;return!0}function Ad(){for(var t=jt;t;)t=Ln(t.nextSibling)}function Or(){jt=Pt=null,Ue=!1}function es(t){Ht===null?Ht=[t]:Ht.push(t)}var ty=W.ReactCurrentBatchConfig;function Mi(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,t));var d=s,p=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(x){var N=d.refs;x===null?delete N[p]:N[p]=x},n._stringRef=p,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function Xo(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Od(t){var n=t._init;return n(t._payload)}function Dd(t){function n(M,I){if(t){var O=M.deletions;O===null?(M.deletions=[I],M.flags|=16):O.push(I)}}function o(M,I){if(!t)return null;for(;I!==null;)n(M,I),I=I.sibling;return null}function s(M,I){for(M=new Map;I!==null;)I.key!==null?M.set(I.key,I):M.set(I.index,I),I=I.sibling;return M}function d(M,I){return M=Hn(M,I),M.index=0,M.sibling=null,M}function p(M,I,O){return M.index=O,t?(O=M.alternate,O!==null?(O=O.index,O<I?(M.flags|=2,I):O):(M.flags|=2,I)):(M.flags|=1048576,I)}function x(M){return t&&M.alternate===null&&(M.flags|=2),M}function N(M,I,O,X){return I===null||I.tag!==6?(I=Ws(O,M.mode,X),I.return=M,I):(I=d(I,O),I.return=M,I)}function T(M,I,O,X){var pe=O.type;return pe===V?G(M,I,O.props.children,X,O.key):I!==null&&(I.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===re&&Od(pe)===I.type)?(X=d(I,O.props),X.ref=Mi(M,I,O),X.return=M,X):(X=wa(O.type,O.key,O.props,null,M.mode,X),X.ref=Mi(M,I,O),X.return=M,X)}function D(M,I,O,X){return I===null||I.tag!==4||I.stateNode.containerInfo!==O.containerInfo||I.stateNode.implementation!==O.implementation?(I=Ys(O,M.mode,X),I.return=M,I):(I=d(I,O.children||[]),I.return=M,I)}function G(M,I,O,X,pe){return I===null||I.tag!==7?(I=dr(O,M.mode,X,pe),I.return=M,I):(I=d(I,O),I.return=M,I)}function Q(M,I,O){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Ws(""+I,M.mode,O),I.return=M,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case H:return O=wa(I.type,I.key,I.props,null,M.mode,O),O.ref=Mi(M,null,I),O.return=M,O;case L:return I=Ys(I,M.mode,O),I.return=M,I;case re:var X=I._init;return Q(M,X(I._payload),O)}if(En(I)||le(I))return I=dr(I,M.mode,O,null),I.return=M,I;Xo(M,I)}return null}function q(M,I,O,X){var pe=I!==null?I.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return pe!==null?null:N(M,I,""+O,X);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case H:return O.key===pe?T(M,I,O,X):null;case L:return O.key===pe?D(M,I,O,X):null;case re:return pe=O._init,q(M,I,pe(O._payload),X)}if(En(O)||le(O))return pe!==null?null:G(M,I,O,X,null);Xo(M,O)}return null}function oe(M,I,O,X,pe){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(O)||null,N(I,M,""+X,pe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case H:return M=M.get(X.key===null?O:X.key)||null,T(I,M,X,pe);case L:return M=M.get(X.key===null?O:X.key)||null,D(I,M,X,pe);case re:var ve=X._init;return oe(M,I,O,ve(X._payload),pe)}if(En(X)||le(X))return M=M.get(O)||null,G(I,M,X,pe,null);Xo(I,X)}return null}function ue(M,I,O,X){for(var pe=null,ve=null,ye=I,ke=I=0,tt=null;ye!==null&&ke<O.length;ke++){ye.index>ke?(tt=ye,ye=null):tt=ye.sibling;var Ie=q(M,ye,O[ke],X);if(Ie===null){ye===null&&(ye=tt);break}t&&ye&&Ie.alternate===null&&n(M,ye),I=p(Ie,I,ke),ve===null?pe=Ie:ve.sibling=Ie,ve=Ie,ye=tt}if(ke===O.length)return o(M,ye),Ue&&rr(M,ke),pe;if(ye===null){for(;ke<O.length;ke++)ye=Q(M,O[ke],X),ye!==null&&(I=p(ye,I,ke),ve===null?pe=ye:ve.sibling=ye,ve=ye);return Ue&&rr(M,ke),pe}for(ye=s(M,ye);ke<O.length;ke++)tt=oe(ye,M,ke,O[ke],X),tt!==null&&(t&&tt.alternate!==null&&ye.delete(tt.key===null?ke:tt.key),I=p(tt,I,ke),ve===null?pe=tt:ve.sibling=tt,ve=tt);return t&&ye.forEach(function(Wn){return n(M,Wn)}),Ue&&rr(M,ke),pe}function fe(M,I,O,X){var pe=le(O);if(typeof pe!="function")throw Error(i(150));if(O=pe.call(O),O==null)throw Error(i(151));for(var ve=pe=null,ye=I,ke=I=0,tt=null,Ie=O.next();ye!==null&&!Ie.done;ke++,Ie=O.next()){ye.index>ke?(tt=ye,ye=null):tt=ye.sibling;var Wn=q(M,ye,Ie.value,X);if(Wn===null){ye===null&&(ye=tt);break}t&&ye&&Wn.alternate===null&&n(M,ye),I=p(Wn,I,ke),ve===null?pe=Wn:ve.sibling=Wn,ve=Wn,ye=tt}if(Ie.done)return o(M,ye),Ue&&rr(M,ke),pe;if(ye===null){for(;!Ie.done;ke++,Ie=O.next())Ie=Q(M,Ie.value,X),Ie!==null&&(I=p(Ie,I,ke),ve===null?pe=Ie:ve.sibling=Ie,ve=Ie);return Ue&&rr(M,ke),pe}for(ye=s(M,ye);!Ie.done;ke++,Ie=O.next())Ie=oe(ye,M,ke,Ie.value,X),Ie!==null&&(t&&Ie.alternate!==null&&ye.delete(Ie.key===null?ke:Ie.key),I=p(Ie,I,ke),ve===null?pe=Ie:ve.sibling=Ie,ve=Ie);return t&&ye.forEach(function(_y){return n(M,_y)}),Ue&&rr(M,ke),pe}function qe(M,I,O,X){if(typeof O=="object"&&O!==null&&O.type===V&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case H:e:{for(var pe=O.key,ve=I;ve!==null;){if(ve.key===pe){if(pe=O.type,pe===V){if(ve.tag===7){o(M,ve.sibling),I=d(ve,O.props.children),I.return=M,M=I;break e}}else if(ve.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===re&&Od(pe)===ve.type){o(M,ve.sibling),I=d(ve,O.props),I.ref=Mi(M,ve,O),I.return=M,M=I;break e}o(M,ve);break}else n(M,ve);ve=ve.sibling}O.type===V?(I=dr(O.props.children,M.mode,X,O.key),I.return=M,M=I):(X=wa(O.type,O.key,O.props,null,M.mode,X),X.ref=Mi(M,I,O),X.return=M,M=X)}return x(M);case L:e:{for(ve=O.key;I!==null;){if(I.key===ve)if(I.tag===4&&I.stateNode.containerInfo===O.containerInfo&&I.stateNode.implementation===O.implementation){o(M,I.sibling),I=d(I,O.children||[]),I.return=M,M=I;break e}else{o(M,I);break}else n(M,I);I=I.sibling}I=Ys(O,M.mode,X),I.return=M,M=I}return x(M);case re:return ve=O._init,qe(M,I,ve(O._payload),X)}if(En(O))return ue(M,I,O,X);if(le(O))return fe(M,I,O,X);Xo(M,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,I!==null&&I.tag===6?(o(M,I.sibling),I=d(I,O),I.return=M,M=I):(o(M,I),I=Ws(O,M.mode,X),I.return=M,M=I),x(M)):o(M,I)}return qe}var Dr=Dd(!0),Fd=Dd(!1),Jo=_n(null),Zo=null,Fr=null,ts=null;function ns(){ts=Fr=Zo=null}function rs(t){var n=Jo.current;Be(Jo),t._currentValue=n}function is(t,n,o){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===o)break;t=t.return}}function Br(t,n){Zo=t,ts=Fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(vt=!0),t.firstContext=null)}function At(t){var n=t._currentValue;if(ts!==t)if(t={context:t,memoizedValue:n,next:null},Fr===null){if(Zo===null)throw Error(i(308));Fr=t,Zo.dependencies={lanes:0,firstContext:t}}else Fr=Fr.next=t;return n}var ir=null;function os(t){ir===null?ir=[t]:ir.push(t)}function Bd(t,n,o,s){var d=n.interleaved;return d===null?(o.next=o,os(n)):(o.next=d.next,d.next=o),n.interleaved=o,hn(t,s)}function hn(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var On=!1;function as(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Dn(t,n,o){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ze&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,hn(t,o)}return d=s.interleaved,d===null?(n.next=n,os(s)):(n.next=d.next,d.next=n),s.interleaved=n,hn(t,o)}function ea(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=t.pendingLanes,o|=s,n.lanes=o,bl(t,o)}}function $d(t,n){var o=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var x={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=x:p=p.next=x,o=o.next}while(o!==null);p===null?d=p=n:p=p.next=n}else d=p=n;o={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:s.shared,effects:s.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function ta(t,n,o,s){var d=t.updateQueue;On=!1;var p=d.firstBaseUpdate,x=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var T=N,D=T.next;T.next=null,x===null?p=D:x.next=D,x=T;var G=t.alternate;G!==null&&(G=G.updateQueue,N=G.lastBaseUpdate,N!==x&&(N===null?G.firstBaseUpdate=D:N.next=D,G.lastBaseUpdate=T))}if(p!==null){var Q=d.baseState;x=0,G=D=T=null,N=p;do{var q=N.lane,oe=N.eventTime;if((s&q)===q){G!==null&&(G=G.next={eventTime:oe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ue=t,fe=N;switch(q=n,oe=o,fe.tag){case 1:if(ue=fe.payload,typeof ue=="function"){Q=ue.call(oe,Q,q);break e}Q=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=fe.payload,q=typeof ue=="function"?ue.call(oe,Q,q):ue,q==null)break e;Q=S({},Q,q);break e;case 2:On=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,q=d.effects,q===null?d.effects=[N]:q.push(N))}else oe={eventTime:oe,lane:q,tag:N.tag,payload:N.payload,callback:N.callback,next:null},G===null?(D=G=oe,T=Q):G=G.next=oe,x|=q;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;q=N,N=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(G===null&&(T=Q),d.baseState=T,d.firstBaseUpdate=D,d.lastBaseUpdate=G,n=d.shared.interleaved,n!==null){d=n;do x|=d.lane,d=d.next;while(d!==n)}else p===null&&(d.shared.lanes=0);lr|=x,t.lanes=x,t.memoizedState=Q}}function Vd(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var s=t[n],d=s.callback;if(d!==null){if(s.callback=null,s=o,typeof d!="function")throw Error(i(191,d));d.call(s)}}}var Ai={},en=_n(Ai),Oi=_n(Ai),Di=_n(Ai);function or(t){if(t===Ai)throw Error(i(174));return t}function ls(t,n){switch(Me(Di,n),Me(Oi,t),Me(en,Ai),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ee(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=ee(n,t)}Be(en),Me(en,n)}function Ur(){Be(en),Be(Oi),Be(Di)}function Hd(t){or(Di.current);var n=or(en.current),o=ee(n,t.type);n!==o&&(Me(Oi,t),Me(en,o))}function ss(t){Oi.current===t&&(Be(en),Be(Oi))}var $e=_n(0);function na(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var us=[];function cs(){for(var t=0;t<us.length;t++)us[t]._workInProgressVersionPrimary=null;us.length=0}var ra=W.ReactCurrentDispatcher,ds=W.ReactCurrentBatchConfig,ar=0,Ve=null,Ke=null,Ze=null,ia=!1,Fi=!1,Bi=0,ny=0;function st(){throw Error(i(321))}function fs(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!Vt(t[o],n[o]))return!1;return!0}function ps(t,n,o,s,d,p){if(ar=p,Ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ra.current=t===null||t.memoizedState===null?ay:ly,t=o(s,d),Fi){p=0;do{if(Fi=!1,Bi=0,25<=p)throw Error(i(301));p+=1,Ze=Ke=null,n.updateQueue=null,ra.current=sy,t=o(s,d)}while(Fi)}if(ra.current=la,n=Ke!==null&&Ke.next!==null,ar=0,Ze=Ke=Ve=null,ia=!1,n)throw Error(i(300));return t}function ms(){var t=Bi!==0;return Bi=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ve.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Ot(){if(Ke===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=Ze===null?Ve.memoizedState:Ze.next;if(n!==null)Ze=n,Ke=t;else{if(t===null)throw Error(i(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?Ve.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Ui(t,n){return typeof n=="function"?n(t):n}function hs(t){var n=Ot(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var s=Ke,d=s.baseQueue,p=o.pending;if(p!==null){if(d!==null){var x=d.next;d.next=p.next,p.next=x}s.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,s=s.baseState;var N=x=null,T=null,D=p;do{var G=D.lane;if((ar&G)===G)T!==null&&(T=T.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:t(s,D.action);else{var Q={lane:G,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};T===null?(N=T=Q,x=s):T=T.next=Q,Ve.lanes|=G,lr|=G}D=D.next}while(D!==null&&D!==p);T===null?x=s:T.next=N,Vt(s,n.memoizedState)||(vt=!0),n.memoizedState=s,n.baseState=x,n.baseQueue=T,o.lastRenderedState=s}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Ve.lanes|=p,lr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function gs(t){var n=Ot(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var s=o.dispatch,d=o.pending,p=n.memoizedState;if(d!==null){o.pending=null;var x=d=d.next;do p=t(p,x.action),x=x.next;while(x!==d);Vt(p,n.memoizedState)||(vt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,s]}function Wd(){}function Yd(t,n){var o=Ve,s=Ot(),d=n(),p=!Vt(s.memoizedState,d);if(p&&(s.memoizedState=d,vt=!0),s=s.queue,vs(Qd.bind(null,o,s,t),[t]),s.getSnapshot!==n||p||Ze!==null&&Ze.memoizedState.tag&1){if(o.flags|=2048,$i(9,Gd.bind(null,o,s,d,n),void 0,null),et===null)throw Error(i(349));(ar&30)!==0||qd(o,n,d)}return d}function qd(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=Ve.updateQueue,n===null?(n={lastEffect:null,stores:null},Ve.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Gd(t,n,o,s){n.value=o,n.getSnapshot=s,Kd(n)&&Xd(t)}function Qd(t,n,o){return o(function(){Kd(n)&&Xd(t)})}function Kd(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!Vt(t,o)}catch{return!0}}function Xd(t){var n=hn(t,1);n!==null&&Gt(n,t,1,-1)}function Jd(t){var n=tn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},n.queue=t,t=t.dispatch=oy.bind(null,Ve,t),[n.memoizedState,t]}function $i(t,n,o,s){return t={tag:t,create:n,destroy:o,deps:s,next:null},n=Ve.updateQueue,n===null?(n={lastEffect:null,stores:null},Ve.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(s=o.next,o.next=t,t.next=s,n.lastEffect=t)),t}function Zd(){return Ot().memoizedState}function oa(t,n,o,s){var d=tn();Ve.flags|=t,d.memoizedState=$i(1|n,o,void 0,s===void 0?null:s)}function aa(t,n,o,s){var d=Ot();s=s===void 0?null:s;var p=void 0;if(Ke!==null){var x=Ke.memoizedState;if(p=x.destroy,s!==null&&fs(s,x.deps)){d.memoizedState=$i(n,o,p,s);return}}Ve.flags|=t,d.memoizedState=$i(1|n,o,p,s)}function ef(t,n){return oa(8390656,8,t,n)}function vs(t,n){return aa(2048,8,t,n)}function tf(t,n){return aa(4,2,t,n)}function nf(t,n){return aa(4,4,t,n)}function rf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function of(t,n,o){return o=o!=null?o.concat([t]):null,aa(4,4,rf.bind(null,n,t),o)}function ys(){}function af(t,n){var o=Ot();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&fs(n,s[1])?s[0]:(o.memoizedState=[t,n],t)}function lf(t,n){var o=Ot();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&fs(n,s[1])?s[0]:(t=t(),o.memoizedState=[t,n],t)}function sf(t,n,o){return(ar&21)===0?(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=o):(Vt(o,n)||(o=Oc(),Ve.lanes|=o,lr|=o,t.baseState=!0),n)}function ry(t,n){var o=_e;_e=o!==0&&4>o?o:4,t(!0);var s=ds.transition;ds.transition={};try{t(!1),n()}finally{_e=o,ds.transition=s}}function uf(){return Ot().memoizedState}function iy(t,n,o){var s=$n(t);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},cf(t))df(n,o);else if(o=Bd(t,n,o,s),o!==null){var d=pt();Gt(o,t,s,d),ff(o,n,s)}}function oy(t,n,o){var s=$n(t),d={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(cf(t))df(n,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var x=n.lastRenderedState,N=p(x,o);if(d.hasEagerState=!0,d.eagerState=N,Vt(N,x)){var T=n.interleaved;T===null?(d.next=d,os(n)):(d.next=T.next,T.next=d),n.interleaved=d;return}}catch{}finally{}o=Bd(t,n,d,s),o!==null&&(d=pt(),Gt(o,t,s,d),ff(o,n,s))}}function cf(t){var n=t.alternate;return t===Ve||n!==null&&n===Ve}function df(t,n){Fi=ia=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function ff(t,n,o){if((o&4194240)!==0){var s=n.lanes;s&=t.pendingLanes,o|=s,n.lanes=o,bl(t,o)}}var la={readContext:At,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},ay={readContext:At,useCallback:function(t,n){return tn().memoizedState=[t,n===void 0?null:n],t},useContext:At,useEffect:ef,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,oa(4194308,4,rf.bind(null,n,t),o)},useLayoutEffect:function(t,n){return oa(4194308,4,t,n)},useInsertionEffect:function(t,n){return oa(4,2,t,n)},useMemo:function(t,n){var o=tn();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var s=tn();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},s.queue=t,t=t.dispatch=iy.bind(null,Ve,t),[s.memoizedState,t]},useRef:function(t){var n=tn();return t={current:t},n.memoizedState=t},useState:Jd,useDebugValue:ys,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Jd(!1),n=t[0];return t=ry.bind(null,t[1]),tn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var s=Ve,d=tn();if(Ue){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),et===null)throw Error(i(349));(ar&30)!==0||qd(s,n,o)}d.memoizedState=o;var p={value:o,getSnapshot:n};return d.queue=p,ef(Qd.bind(null,s,p,t),[t]),s.flags|=2048,$i(9,Gd.bind(null,s,p,o,n),void 0,null),o},useId:function(){var t=tn(),n=et.identifierPrefix;if(Ue){var o=mn,s=pn;o=(s&~(1<<32-$t(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=Bi++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=ny++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},ly={readContext:At,useCallback:af,useContext:At,useEffect:vs,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:lf,useReducer:hs,useRef:Zd,useState:function(){return hs(Ui)},useDebugValue:ys,useDeferredValue:function(t){var n=Ot();return sf(n,Ke.memoizedState,t)},useTransition:function(){var t=hs(Ui)[0],n=Ot().memoizedState;return[t,n]},useMutableSource:Wd,useSyncExternalStore:Yd,useId:uf,unstable_isNewReconciler:!1},sy={readContext:At,useCallback:af,useContext:At,useEffect:vs,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:lf,useReducer:gs,useRef:Zd,useState:function(){return gs(Ui)},useDebugValue:ys,useDeferredValue:function(t){var n=Ot();return Ke===null?n.memoizedState=t:sf(n,Ke.memoizedState,t)},useTransition:function(){var t=gs(Ui)[0],n=Ot().memoizedState;return[t,n]},useMutableSource:Wd,useSyncExternalStore:Yd,useId:uf,unstable_isNewReconciler:!1};function Wt(t,n){if(t&&t.defaultProps){n=S({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function xs(t,n,o,s){n=t.memoizedState,o=o(s,n),o=o==null?n:S({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var sa={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var s=pt(),d=$n(t),p=gn(s,d);p.payload=n,o!=null&&(p.callback=o),n=Dn(t,p,d),n!==null&&(Gt(n,t,d,s),ea(n,t,d))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var s=pt(),d=$n(t),p=gn(s,d);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=Dn(t,p,d),n!==null&&(Gt(n,t,d,s),ea(n,t,d))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=pt(),s=$n(t),d=gn(o,s);d.tag=2,n!=null&&(d.callback=n),n=Dn(t,d,s),n!==null&&(Gt(n,t,s,o),ea(n,t,s))}};function pf(t,n,o,s,d,p,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,p,x):n.prototype&&n.prototype.isPureReactComponent?!ji(o,s)||!ji(d,p):!0}function mf(t,n,o){var s=!1,d=Mn,p=n.contextType;return typeof p=="object"&&p!==null?p=At(p):(d=gt(n)?tr:lt.current,s=n.contextTypes,p=(s=s!=null)?_r(t,d):Mn),n=new n(o,p),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=sa,t.stateNode=n,n._reactInternals=t,s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),n}function hf(t,n,o,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==t&&sa.enqueueReplaceState(n,n.state,null)}function bs(t,n,o,s){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},as(t);var p=n.contextType;typeof p=="object"&&p!==null?d.context=At(p):(p=gt(n)?tr:lt.current,d.context=_r(t,p)),d.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(xs(t,n,p,o),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&sa.enqueueReplaceState(d,d.state,null),ta(t,o,d,s),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function $r(t,n){try{var o="",s=n;do o+=ge(s),s=s.return;while(s);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:n,stack:d,digest:null}}function ws(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function ks(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function gf(t,n,o){o=gn(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){ha||(ha=!0,Os=s),ks(t,n)},o}function vf(t,n,o){o=gn(-1,o),o.tag=3;var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var d=n.value;o.payload=function(){return s(d)},o.callback=function(){ks(t,n)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ks(t,n),typeof s!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var x=n.stack;this.componentDidCatch(n.value,{componentStack:x!==null?x:""})}),o}function yf(t,n,o){var s=t.pingCache;if(s===null){s=t.pingCache=new uy;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(o)||(d.add(o),t=Sy.bind(null,t,n,o),n.then(t,t))}function xf(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function bf(t,n,o,s,d){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=gn(-1,1),n.tag=2,Dn(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var cy=W.ReactCurrentOwner,vt=!1;function ft(t,n,o,s){n.child=t===null?Fd(n,null,o,s):Dr(n,t.child,o,s)}function wf(t,n,o,s,d){o=o.render;var p=n.ref;return Br(n,d),s=ps(t,n,o,s,p,d),o=ms(),t!==null&&!vt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,vn(t,n,d)):(Ue&&o&&Kl(n),n.flags|=1,ft(t,n,s,d),n.child)}function kf(t,n,o,s,d){if(t===null){var p=o.type;return typeof p=="function"&&!Hs(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,Sf(t,n,p,s,d)):(t=wa(o.type,null,s,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,(t.lanes&d)===0){var x=p.memoizedProps;if(o=o.compare,o=o!==null?o:ji,o(x,s)&&t.ref===n.ref)return vn(t,n,d)}return n.flags|=1,t=Hn(p,s),t.ref=n.ref,t.return=n,n.child=t}function Sf(t,n,o,s,d){if(t!==null){var p=t.memoizedProps;if(ji(p,s)&&t.ref===n.ref)if(vt=!1,n.pendingProps=s=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(vt=!0);else return n.lanes=t.lanes,vn(t,n,d)}return Ss(t,n,o,s,d)}function Ef(t,n,o){var s=n.pendingProps,d=s.children,p=t!==null?t.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Hr,Rt),Rt|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Me(Hr,Rt),Rt|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=p!==null?p.baseLanes:o,Me(Hr,Rt),Rt|=s}else p!==null?(s=p.baseLanes|o,n.memoizedState=null):s=o,Me(Hr,Rt),Rt|=s;return ft(t,n,d,o),n.child}function Cf(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Ss(t,n,o,s,d){var p=gt(o)?tr:lt.current;return p=_r(n,p),Br(n,d),o=ps(t,n,o,s,p,d),s=ms(),t!==null&&!vt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,vn(t,n,d)):(Ue&&s&&Kl(n),n.flags|=1,ft(t,n,o,d),n.child)}function Nf(t,n,o,s,d){if(gt(o)){var p=!0;Yo(n)}else p=!1;if(Br(n,d),n.stateNode===null)ca(t,n),mf(n,o,s),bs(n,o,s,d),s=!0;else if(t===null){var x=n.stateNode,N=n.memoizedProps;x.props=N;var T=x.context,D=o.contextType;typeof D=="object"&&D!==null?D=At(D):(D=gt(o)?tr:lt.current,D=_r(n,D));var G=o.getDerivedStateFromProps,Q=typeof G=="function"||typeof x.getSnapshotBeforeUpdate=="function";Q||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(N!==s||T!==D)&&hf(n,x,s,D),On=!1;var q=n.memoizedState;x.state=q,ta(n,s,x,d),T=n.memoizedState,N!==s||q!==T||ht.current||On?(typeof G=="function"&&(xs(n,o,G,s),T=n.memoizedState),(N=On||pf(n,o,N,s,q,T,D))?(Q||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(n.flags|=4194308)):(typeof x.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=T),x.props=s,x.state=T,x.context=D,s=N):(typeof x.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{x=n.stateNode,Ud(t,n),N=n.memoizedProps,D=n.type===n.elementType?N:Wt(n.type,N),x.props=D,Q=n.pendingProps,q=x.context,T=o.contextType,typeof T=="object"&&T!==null?T=At(T):(T=gt(o)?tr:lt.current,T=_r(n,T));var oe=o.getDerivedStateFromProps;(G=typeof oe=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(N!==Q||q!==T)&&hf(n,x,s,T),On=!1,q=n.memoizedState,x.state=q,ta(n,s,x,d);var ue=n.memoizedState;N!==Q||q!==ue||ht.current||On?(typeof oe=="function"&&(xs(n,o,oe,s),ue=n.memoizedState),(D=On||pf(n,o,D,s,q,ue,T)||!1)?(G||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(s,ue,T),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(s,ue,T)),typeof x.componentDidUpdate=="function"&&(n.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof x.componentDidUpdate!="function"||N===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ue),x.props=s,x.state=ue,x.context=T,s=D):(typeof x.componentDidUpdate!="function"||N===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),s=!1)}return Es(t,n,o,s,p,d)}function Es(t,n,o,s,d,p){Cf(t,n);var x=(n.flags&128)!==0;if(!s&&!x)return d&&Td(n,o,!1),vn(t,n,p);s=n.stateNode,cy.current=n;var N=x&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,t!==null&&x?(n.child=Dr(n,t.child,null,p),n.child=Dr(n,null,N,p)):ft(t,n,N,p),n.memoizedState=s.state,d&&Td(n,o,!0),n.child}function Pf(t){var n=t.stateNode;n.pendingContext?jd(t,n.pendingContext,n.pendingContext!==n.context):n.context&&jd(t,n.context,!1),ls(t,n.containerInfo)}function jf(t,n,o,s,d){return Or(),es(d),n.flags|=256,ft(t,n,o,s),n.child}var Cs={dehydrated:null,treeContext:null,retryLane:0};function Ns(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rf(t,n,o){var s=n.pendingProps,d=$e.current,p=!1,x=(n.flags&128)!==0,N;if((N=x)||(N=t!==null&&t.memoizedState===null?!1:(d&2)!==0),N?(p=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Me($e,d&1),t===null)return Zl(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(x=s.children,t=s.fallback,p?(s=n.mode,p=n.child,x={mode:"hidden",children:x},(s&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=x):p=ka(x,s,0,null),t=dr(t,s,o,null),p.return=n,t.return=n,p.sibling=t,n.child=p,n.child.memoizedState=Ns(o),n.memoizedState=Cs,t):Ps(n,x));if(d=t.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return dy(t,n,x,s,N,d,o);if(p){p=s.fallback,x=n.mode,d=t.child,N=d.sibling;var T={mode:"hidden",children:s.children};return(x&1)===0&&n.child!==d?(s=n.child,s.childLanes=0,s.pendingProps=T,n.deletions=null):(s=Hn(d,T),s.subtreeFlags=d.subtreeFlags&14680064),N!==null?p=Hn(N,p):(p=dr(p,x,o,null),p.flags|=2),p.return=n,s.return=n,s.sibling=p,n.child=s,s=p,p=n.child,x=t.child.memoizedState,x=x===null?Ns(o):{baseLanes:x.baseLanes|o,cachePool:null,transitions:x.transitions},p.memoizedState=x,p.childLanes=t.childLanes&~o,n.memoizedState=Cs,s}return p=t.child,t=p.sibling,s=Hn(p,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=o),s.return=n,s.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=s,n.memoizedState=null,s}function Ps(t,n){return n=ka({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function ua(t,n,o,s){return s!==null&&es(s),Dr(n,t.child,null,o),t=Ps(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dy(t,n,o,s,d,p,x){if(o)return n.flags&256?(n.flags&=-257,s=ws(Error(i(422))),ua(t,n,x,s)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(p=s.fallback,d=n.mode,s=ka({mode:"visible",children:s.children},d,0,null),p=dr(p,d,x,null),p.flags|=2,s.return=n,p.return=n,s.sibling=p,n.child=s,(n.mode&1)!==0&&Dr(n,t.child,null,x),n.child.memoizedState=Ns(x),n.memoizedState=Cs,p);if((n.mode&1)===0)return ua(t,n,x,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var N=s.dgst;return s=N,p=Error(i(419)),s=ws(p,s,void 0),ua(t,n,x,s)}if(N=(x&t.childLanes)!==0,vt||N){if(s=et,s!==null){switch(x&-x){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(s.suspendedLanes|x))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,hn(t,d),Gt(s,t,d,-1))}return Vs(),s=ws(Error(i(421))),ua(t,n,x,s)}return d.data==="$?"?(n.flags|=128,n.child=t.child,n=Ey.bind(null,t),d._reactRetry=n,null):(t=p.treeContext,jt=Ln(d.nextSibling),Pt=n,Ue=!0,Ht=null,t!==null&&(_t[Mt++]=pn,_t[Mt++]=mn,_t[Mt++]=nr,pn=t.id,mn=t.overflow,nr=n),n=Ps(n,s.children),n.flags|=4096,n)}function Tf(t,n,o){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),is(t.return,n,o)}function js(t,n,o,s,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=s,p.tail=o,p.tailMode=d)}function zf(t,n,o){var s=n.pendingProps,d=s.revealOrder,p=s.tail;if(ft(t,n,s.children,o),s=$e.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tf(t,o,n);else if(t.tag===19)Tf(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}if(Me($e,s),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)t=o.alternate,t!==null&&na(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),js(n,!1,d,o,p);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&na(t)===null){n.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}js(n,!0,o,null,p);break;case"together":js(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ca(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function vn(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),lr|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=Hn(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=Hn(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function fy(t,n,o){switch(n.tag){case 3:Pf(n),Or();break;case 5:Hd(n);break;case 1:gt(n.type)&&Yo(n);break;case 4:ls(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,d=n.memoizedProps.value;Me(Jo,s._currentValue),s._currentValue=d;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Me($e,$e.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?Rf(t,n,o):(Me($e,$e.current&1),t=vn(t,n,o),t!==null?t.sibling:null);Me($e,$e.current&1);break;case 19:if(s=(o&n.childLanes)!==0,(t.flags&128)!==0){if(s)return zf(t,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Me($e,$e.current),s)break;return null;case 22:case 23:return n.lanes=0,Ef(t,n,o)}return vn(t,n,o)}var If,Rs,Lf,_f;If=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Rs=function(){},Lf=function(t,n,o,s){var d=t.memoizedProps;if(d!==s){t=n.stateNode,or(en.current);var p=null;switch(o){case"input":d=ui(t,d),s=ui(t,s),p=[];break;case"select":d=S({},d,{value:void 0}),s=S({},s,{value:void 0}),p=[];break;case"textarea":d=fi(t,d),s=fi(t,s),p=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(t.onclick=Vo)}rt(o,s);var x;o=null;for(D in d)if(!s.hasOwnProperty(D)&&d.hasOwnProperty(D)&&d[D]!=null)if(D==="style"){var N=d[D];for(x in N)N.hasOwnProperty(x)&&(o||(o={}),o[x]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(l.hasOwnProperty(D)?p||(p=[]):(p=p||[]).push(D,null));for(D in s){var T=s[D];if(N=d!=null?d[D]:void 0,s.hasOwnProperty(D)&&T!==N&&(T!=null||N!=null))if(D==="style")if(N){for(x in N)!N.hasOwnProperty(x)||T&&T.hasOwnProperty(x)||(o||(o={}),o[x]="");for(x in T)T.hasOwnProperty(x)&&N[x]!==T[x]&&(o||(o={}),o[x]=T[x])}else o||(p||(p=[]),p.push(D,o)),o=T;else D==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,N=N?N.__html:void 0,T!=null&&N!==T&&(p=p||[]).push(D,T)):D==="children"?typeof T!="string"&&typeof T!="number"||(p=p||[]).push(D,""+T):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(l.hasOwnProperty(D)?(T!=null&&D==="onScroll"&&Fe("scroll",t),p||N===T||(p=[])):(p=p||[]).push(D,T))}o&&(p=p||[]).push("style",o);var D=p;(n.updateQueue=D)&&(n.flags|=4)}},_f=function(t,n,o,s){o!==s&&(n.flags|=4)};function Vi(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ut(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,s=0;if(n)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=s,t.childLanes=o,n}function py(t,n,o){var s=n.pendingProps;switch(Xl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(n),null;case 1:return gt(n.type)&&Wo(),ut(n),null;case 3:return s=n.stateNode,Ur(),Be(ht),Be(lt),cs(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ko(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ht!==null&&(Bs(Ht),Ht=null))),Rs(t,n),ut(n),null;case 5:ss(n);var d=or(Di.current);if(o=n.type,t!==null&&n.stateNode!=null)Lf(t,n,o,s,d),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return ut(n),null}if(t=or(en.current),Ko(n)){s=n.stateNode,o=n.type;var p=n.memoizedProps;switch(s[Zt]=n,s[Li]=p,t=(n.mode&1)!==0,o){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(d=0;d<Ti.length;d++)Fe(Ti[d],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":ci(s,p),Fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!p.multiple},Fe("invalid",s);break;case"textarea":xo(s,p),Fe("invalid",s)}rt(o,p),d=null;for(var x in p)if(p.hasOwnProperty(x)){var N=p[x];x==="children"?typeof N=="string"?s.textContent!==N&&(p.suppressHydrationWarning!==!0&&$o(s.textContent,N,t),d=["children",N]):typeof N=="number"&&s.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&$o(s.textContent,N,t),d=["children",""+N]):l.hasOwnProperty(x)&&N!=null&&x==="onScroll"&&Fe("scroll",s)}switch(o){case"input":Et(s),yo(s,p,!0);break;case"textarea":Et(s),wo(s);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(s.onclick=Vo)}s=d,n.updateQueue=s,s!==null&&(n.flags|=4)}else{x=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=x.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof s.is=="string"?t=x.createElement(o,{is:s.is}):(t=x.createElement(o),o==="select"&&(x=t,s.multiple?x.multiple=!0:s.size&&(x.size=s.size))):t=x.createElementNS(t,o),t[Zt]=n,t[Li]=s,If(t,n,!1,!1),n.stateNode=t;e:{switch(x=Xt(o,s),o){case"dialog":Fe("cancel",t),Fe("close",t),d=s;break;case"iframe":case"object":case"embed":Fe("load",t),d=s;break;case"video":case"audio":for(d=0;d<Ti.length;d++)Fe(Ti[d],t);d=s;break;case"source":Fe("error",t),d=s;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),d=s;break;case"details":Fe("toggle",t),d=s;break;case"input":ci(t,s),d=ui(t,s),Fe("invalid",t);break;case"option":d=s;break;case"select":t._wrapperState={wasMultiple:!!s.multiple},d=S({},s,{value:void 0}),Fe("invalid",t);break;case"textarea":xo(t,s),d=fi(t,s),Fe("invalid",t);break;default:d=s}rt(o,d),N=d;for(p in N)if(N.hasOwnProperty(p)){var T=N[p];p==="style"?Nn(t,T):p==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Pe(t,T)):p==="children"?typeof T=="string"?(o!=="textarea"||T!=="")&&Te(t,T):typeof T=="number"&&Te(t,""+T):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?T!=null&&p==="onScroll"&&Fe("scroll",t):T!=null&&_(t,p,T,x))}switch(o){case"input":Et(t),yo(t,s,!1);break;case"textarea":Et(t),wo(t);break;case"option":s.value!=null&&t.setAttribute("value",""+Ee(s.value));break;case"select":t.multiple=!!s.multiple,p=s.value,p!=null?Cn(t,!!s.multiple,p,!1):s.defaultValue!=null&&Cn(t,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Vo)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ut(n),null;case 6:if(t&&n.stateNode!=null)_f(t,n,t.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=or(Di.current),or(en.current),Ko(n)){if(s=n.stateNode,o=n.memoizedProps,s[Zt]=n,(p=s.nodeValue!==o)&&(t=Pt,t!==null))switch(t.tag){case 3:$o(s.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(s.nodeValue,o,(t.mode&1)!==0)}p&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[Zt]=n,n.stateNode=s}return ut(n),null;case 13:if(Be($e),s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ue&&jt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ad(),Or(),n.flags|=98560,p=!1;else if(p=Ko(n),s!==null&&s.dehydrated!==null){if(t===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Zt]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ut(n),p=!1}else Ht!==null&&(Bs(Ht),Ht=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(s=s!==null,s!==(t!==null&&t.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||($e.current&1)!==0?Xe===0&&(Xe=3):Vs())),n.updateQueue!==null&&(n.flags|=4),ut(n),null);case 4:return Ur(),Rs(t,n),t===null&&zi(n.stateNode.containerInfo),ut(n),null;case 10:return rs(n.type._context),ut(n),null;case 17:return gt(n.type)&&Wo(),ut(n),null;case 19:if(Be($e),p=n.memoizedState,p===null)return ut(n),null;if(s=(n.flags&128)!==0,x=p.rendering,x===null)if(s)Vi(p,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(x=na(t),x!==null){for(n.flags|=128,Vi(p,!1),s=x.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)p=o,t=s,p.flags&=14680066,x=p.alternate,x===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=x.childLanes,p.lanes=x.lanes,p.child=x.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=x.memoizedProps,p.memoizedState=x.memoizedState,p.updateQueue=x.updateQueue,p.type=x.type,t=x.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Me($e,$e.current&1|2),n.child}t=t.sibling}p.tail!==null&&Ye()>Wr&&(n.flags|=128,s=!0,Vi(p,!1),n.lanes=4194304)}else{if(!s)if(t=na(x),t!==null){if(n.flags|=128,s=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Vi(p,!0),p.tail===null&&p.tailMode==="hidden"&&!x.alternate&&!Ue)return ut(n),null}else 2*Ye()-p.renderingStartTime>Wr&&o!==1073741824&&(n.flags|=128,s=!0,Vi(p,!1),n.lanes=4194304);p.isBackwards?(x.sibling=n.child,n.child=x):(o=p.last,o!==null?o.sibling=x:n.child=x,p.last=x)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Ye(),n.sibling=null,o=$e.current,Me($e,s?o&1|2:o&1),n):(ut(n),null);case 22:case 23:return $s(),s=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(Rt&1073741824)!==0&&(ut(n),n.subtreeFlags&6&&(n.flags|=8192)):ut(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function my(t,n){switch(Xl(n),n.tag){case 1:return gt(n.type)&&Wo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ur(),Be(ht),Be(lt),cs(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return ss(n),null;case 13:if(Be($e),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Be($e),null;case 4:return Ur(),null;case 10:return rs(n.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var da=!1,ct=!1,hy=typeof WeakSet=="function"?WeakSet:Set,se=null;function Vr(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){We(t,n,s)}else o.current=null}function Ts(t,n,o){try{o()}catch(s){We(t,n,s)}}var Mf=!1;function gy(t,n){if($l=zo,t=fd(),_l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var d=s.anchorOffset,p=s.focusNode;s=s.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var x=0,N=-1,T=-1,D=0,G=0,Q=t,q=null;t:for(;;){for(var oe;Q!==o||d!==0&&Q.nodeType!==3||(N=x+d),Q!==p||s!==0&&Q.nodeType!==3||(T=x+s),Q.nodeType===3&&(x+=Q.nodeValue.length),(oe=Q.firstChild)!==null;)q=Q,Q=oe;for(;;){if(Q===t)break t;if(q===o&&++D===d&&(N=x),q===p&&++G===s&&(T=x),(oe=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=oe}o=N===-1||T===-1?null:{start:N,end:T}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vl={focusedElem:t,selectionRange:o},zo=!1,se=n;se!==null;)if(n=se,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,se=t;else for(;se!==null;){n=se;try{var ue=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var fe=ue.memoizedProps,qe=ue.memoizedState,M=n.stateNode,I=M.getSnapshotBeforeUpdate(n.elementType===n.type?fe:Wt(n.type,fe),qe);M.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var O=n.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(X){We(n,n.return,X)}if(t=n.sibling,t!==null){t.return=n.return,se=t;break}se=n.return}return ue=Mf,Mf=!1,ue}function Hi(t,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ts(n,o,p)}d=d.next}while(d!==s)}}function fa(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function zs(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function Af(t){var n=t.alternate;n!==null&&(t.alternate=null,Af(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Zt],delete n[Li],delete n[ql],delete n[Jv],delete n[Zv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Of(t){return t.tag===5||t.tag===3||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Of(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Is(t,n,o){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Vo));else if(s!==4&&(t=t.child,t!==null))for(Is(t,n,o),t=t.sibling;t!==null;)Is(t,n,o),t=t.sibling}function Ls(t,n,o){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(s!==4&&(t=t.child,t!==null))for(Ls(t,n,o),t=t.sibling;t!==null;)Ls(t,n,o),t=t.sibling}var it=null,Yt=!1;function Fn(t,n,o){for(o=o.child;o!==null;)Ff(t,n,o),o=o.sibling}function Ff(t,n,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Co,o)}catch{}switch(o.tag){case 5:ct||Vr(o,n);case 6:var s=it,d=Yt;it=null,Fn(t,n,o),it=s,Yt=d,it!==null&&(Yt?(t=it,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):it.removeChild(o.stateNode));break;case 18:it!==null&&(Yt?(t=it,o=o.stateNode,t.nodeType===8?Yl(t.parentNode,o):t.nodeType===1&&Yl(t,o),ki(t)):Yl(it,o.stateNode));break;case 4:s=it,d=Yt,it=o.stateNode.containerInfo,Yt=!0,Fn(t,n,o),it=s,Yt=d;break;case 0:case 11:case 14:case 15:if(!ct&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var p=d,x=p.destroy;p=p.tag,x!==void 0&&((p&2)!==0||(p&4)!==0)&&Ts(o,n,x),d=d.next}while(d!==s)}Fn(t,n,o);break;case 1:if(!ct&&(Vr(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(N){We(o,n,N)}Fn(t,n,o);break;case 21:Fn(t,n,o);break;case 22:o.mode&1?(ct=(s=ct)||o.memoizedState!==null,Fn(t,n,o),ct=s):Fn(t,n,o);break;default:Fn(t,n,o)}}function Bf(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new hy),n.forEach(function(s){var d=Cy.bind(null,t,s);o.has(s)||(o.add(s),s.then(d,d))})}}function qt(t,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var d=o[s];try{var p=t,x=n,N=x;e:for(;N!==null;){switch(N.tag){case 5:it=N.stateNode,Yt=!1;break e;case 3:it=N.stateNode.containerInfo,Yt=!0;break e;case 4:it=N.stateNode.containerInfo,Yt=!0;break e}N=N.return}if(it===null)throw Error(i(160));Ff(p,x,d),it=null,Yt=!1;var T=d.alternate;T!==null&&(T.return=null),d.return=null}catch(D){We(d,n,D)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uf(n,t),n=n.sibling}function Uf(t,n){var o=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(n,t),nn(t),s&4){try{Hi(3,t,t.return),fa(3,t)}catch(fe){We(t,t.return,fe)}try{Hi(5,t,t.return)}catch(fe){We(t,t.return,fe)}}break;case 1:qt(n,t),nn(t),s&512&&o!==null&&Vr(o,o.return);break;case 5:if(qt(n,t),nn(t),s&512&&o!==null&&Vr(o,o.return),t.flags&32){var d=t.stateNode;try{Te(d,"")}catch(fe){We(t,t.return,fe)}}if(s&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,x=o!==null?o.memoizedProps:p,N=t.type,T=t.updateQueue;if(t.updateQueue=null,T!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&di(d,p),Xt(N,x);var D=Xt(N,p);for(x=0;x<T.length;x+=2){var G=T[x],Q=T[x+1];G==="style"?Nn(d,Q):G==="dangerouslySetInnerHTML"?Pe(d,Q):G==="children"?Te(d,Q):_(d,G,Q,D)}switch(N){case"input":wr(d,p);break;case"textarea":bo(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var oe=p.value;oe!=null?Cn(d,!!p.multiple,oe,!1):q!==!!p.multiple&&(p.defaultValue!=null?Cn(d,!!p.multiple,p.defaultValue,!0):Cn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Li]=p}catch(fe){We(t,t.return,fe)}}break;case 6:if(qt(n,t),nn(t),s&4){if(t.stateNode===null)throw Error(i(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(fe){We(t,t.return,fe)}}break;case 3:if(qt(n,t),nn(t),s&4&&o!==null&&o.memoizedState.isDehydrated)try{ki(n.containerInfo)}catch(fe){We(t,t.return,fe)}break;case 4:qt(n,t),nn(t);break;case 13:qt(n,t),nn(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(As=Ye())),s&4&&Bf(t);break;case 22:if(G=o!==null&&o.memoizedState!==null,t.mode&1?(ct=(D=ct)||G,qt(n,t),ct=D):qt(n,t),nn(t),s&8192){if(D=t.memoizedState!==null,(t.stateNode.isHidden=D)&&!G&&(t.mode&1)!==0)for(se=t,G=t.child;G!==null;){for(Q=se=G;se!==null;){switch(q=se,oe=q.child,q.tag){case 0:case 11:case 14:case 15:Hi(4,q,q.return);break;case 1:Vr(q,q.return);var ue=q.stateNode;if(typeof ue.componentWillUnmount=="function"){s=q,o=q.return;try{n=s,ue.props=n.memoizedProps,ue.state=n.memoizedState,ue.componentWillUnmount()}catch(fe){We(s,o,fe)}}break;case 5:Vr(q,q.return);break;case 22:if(q.memoizedState!==null){Hf(Q);continue}}oe!==null?(oe.return=q,se=oe):Hf(Q)}G=G.sibling}e:for(G=null,Q=t;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,D?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Q.stateNode,T=Q.memoizedProps.style,x=T!=null&&T.hasOwnProperty("display")?T.display:null,N.style.display=Lt("display",x))}catch(fe){We(t,t.return,fe)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=D?"":Q.memoizedProps}catch(fe){We(t,t.return,fe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===t)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===t)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===t)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:qt(n,t),nn(t),s&4&&Bf(t);break;case 21:break;default:qt(n,t),nn(t)}}function nn(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(Of(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(Te(d,""),s.flags&=-33);var p=Df(t);Ls(t,p,d);break;case 3:case 4:var x=s.stateNode.containerInfo,N=Df(t);Is(t,N,x);break;default:throw Error(i(161))}}catch(T){We(t,t.return,T)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function vy(t,n,o){se=t,$f(t)}function $f(t,n,o){for(var s=(t.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&s){var x=d.memoizedState!==null||da;if(!x){var N=d.alternate,T=N!==null&&N.memoizedState!==null||ct;N=da;var D=ct;if(da=x,(ct=T)&&!D)for(se=d;se!==null;)x=se,T=x.child,x.tag===22&&x.memoizedState!==null?Wf(d):T!==null?(T.return=x,se=T):Wf(d);for(;p!==null;)se=p,$f(p),p=p.sibling;se=d,da=N,ct=D}Vf(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Vf(t)}}function Vf(t){for(;se!==null;){var n=se;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ct||fa(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ct)if(o===null)s.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:Wt(n.type,o.memoizedProps);s.componentDidUpdate(d,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Vd(n,p,s);break;case 3:var x=n.updateQueue;if(x!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Vd(n,x,o)}break;case 5:var N=n.stateNode;if(o===null&&n.flags&4){o=N;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&o.focus();break;case"img":T.src&&(o.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var D=n.alternate;if(D!==null){var G=D.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&ki(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}ct||n.flags&512&&zs(n)}catch(q){We(n,n.return,q)}}if(n===t){se=null;break}if(o=n.sibling,o!==null){o.return=n.return,se=o;break}se=n.return}}function Hf(t){for(;se!==null;){var n=se;if(n===t){se=null;break}var o=n.sibling;if(o!==null){o.return=n.return,se=o;break}se=n.return}}function Wf(t){for(;se!==null;){var n=se;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{fa(4,n)}catch(T){We(n,o,T)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var d=n.return;try{s.componentDidMount()}catch(T){We(n,d,T)}}var p=n.return;try{zs(n)}catch(T){We(n,p,T)}break;case 5:var x=n.return;try{zs(n)}catch(T){We(n,x,T)}}}catch(T){We(n,n.return,T)}if(n===t){se=null;break}var N=n.sibling;if(N!==null){N.return=n.return,se=N;break}se=n.return}}var yy=Math.ceil,pa=W.ReactCurrentDispatcher,_s=W.ReactCurrentOwner,Dt=W.ReactCurrentBatchConfig,ze=0,et=null,Ge=null,ot=0,Rt=0,Hr=_n(0),Xe=0,Wi=null,lr=0,ma=0,Ms=0,Yi=null,yt=null,As=0,Wr=1/0,yn=null,ha=!1,Os=null,Bn=null,ga=!1,Un=null,va=0,qi=0,Ds=null,ya=-1,xa=0;function pt(){return(ze&6)!==0?Ye():ya!==-1?ya:ya=Ye()}function $n(t){return(t.mode&1)===0?1:(ze&2)!==0&&ot!==0?ot&-ot:ty.transition!==null?(xa===0&&(xa=Oc()),xa):(t=_e,t!==0||(t=window.event,t=t===void 0?16:Yc(t.type)),t)}function Gt(t,n,o,s){if(50<qi)throw qi=0,Ds=null,Error(i(185));vi(t,o,s),((ze&2)===0||t!==et)&&(t===et&&((ze&2)===0&&(ma|=o),Xe===4&&Vn(t,ot)),xt(t,s),o===1&&ze===0&&(n.mode&1)===0&&(Wr=Ye()+500,qo&&An()))}function xt(t,n){var o=t.callbackNode;tv(t,n);var s=jo(t,t===et?ot:0);if(s===0)o!==null&&_c(o),t.callbackNode=null,t.callbackPriority=0;else if(n=s&-s,t.callbackPriority!==n){if(o!=null&&_c(o),n===1)t.tag===0?ey(qf.bind(null,t)):zd(qf.bind(null,t)),Kv(function(){(ze&6)===0&&An()}),o=null;else{switch(Dc(s)){case 1:o=vl;break;case 4:o=Mc;break;case 16:o=Eo;break;case 536870912:o=Ac;break;default:o=Eo}o=tp(o,Yf.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function Yf(t,n){if(ya=-1,xa=0,(ze&6)!==0)throw Error(i(327));var o=t.callbackNode;if(Yr()&&t.callbackNode!==o)return null;var s=jo(t,t===et?ot:0);if(s===0)return null;if((s&30)!==0||(s&t.expiredLanes)!==0||n)n=ba(t,s);else{n=s;var d=ze;ze|=2;var p=Qf();(et!==t||ot!==n)&&(yn=null,Wr=Ye()+500,ur(t,n));do try{wy();break}catch(N){Gf(t,N)}while(!0);ns(),pa.current=p,ze=d,Ge!==null?n=0:(et=null,ot=0,n=Xe)}if(n!==0){if(n===2&&(d=yl(t),d!==0&&(s=d,n=Fs(t,d))),n===1)throw o=Wi,ur(t,0),Vn(t,s),xt(t,Ye()),o;if(n===6)Vn(t,s);else{if(d=t.current.alternate,(s&30)===0&&!xy(d)&&(n=ba(t,s),n===2&&(p=yl(t),p!==0&&(s=p,n=Fs(t,p))),n===1))throw o=Wi,ur(t,0),Vn(t,s),xt(t,Ye()),o;switch(t.finishedWork=d,t.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:cr(t,yt,yn);break;case 3:if(Vn(t,s),(s&130023424)===s&&(n=As+500-Ye(),10<n)){if(jo(t,0)!==0)break;if(d=t.suspendedLanes,(d&s)!==s){pt(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Wl(cr.bind(null,t,yt,yn),n);break}cr(t,yt,yn);break;case 4:if(Vn(t,s),(s&4194240)===s)break;for(n=t.eventTimes,d=-1;0<s;){var x=31-$t(s);p=1<<x,x=n[x],x>d&&(d=x),s&=~p}if(s=d,s=Ye()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*yy(s/1960))-s,10<s){t.timeoutHandle=Wl(cr.bind(null,t,yt,yn),s);break}cr(t,yt,yn);break;case 5:cr(t,yt,yn);break;default:throw Error(i(329))}}}return xt(t,Ye()),t.callbackNode===o?Yf.bind(null,t):null}function Fs(t,n){var o=Yi;return t.current.memoizedState.isDehydrated&&(ur(t,n).flags|=256),t=ba(t,n),t!==2&&(n=yt,yt=o,n!==null&&Bs(n)),t}function Bs(t){yt===null?yt=t:yt.push.apply(yt,t)}function xy(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var d=o[s],p=d.getSnapshot;d=d.value;try{if(!Vt(p(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(t,n){for(n&=~Ms,n&=~ma,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-$t(n),s=1<<o;t[o]=-1,n&=~s}}function qf(t){if((ze&6)!==0)throw Error(i(327));Yr();var n=jo(t,0);if((n&1)===0)return xt(t,Ye()),null;var o=ba(t,n);if(t.tag!==0&&o===2){var s=yl(t);s!==0&&(n=s,o=Fs(t,s))}if(o===1)throw o=Wi,ur(t,0),Vn(t,n),xt(t,Ye()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,cr(t,yt,yn),xt(t,Ye()),null}function Us(t,n){var o=ze;ze|=1;try{return t(n)}finally{ze=o,ze===0&&(Wr=Ye()+500,qo&&An())}}function sr(t){Un!==null&&Un.tag===0&&(ze&6)===0&&Yr();var n=ze;ze|=1;var o=Dt.transition,s=_e;try{if(Dt.transition=null,_e=1,t)return t()}finally{_e=s,Dt.transition=o,ze=n,(ze&6)===0&&An()}}function $s(){Rt=Hr.current,Be(Hr)}function ur(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Qv(o)),Ge!==null)for(o=Ge.return;o!==null;){var s=o;switch(Xl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Wo();break;case 3:Ur(),Be(ht),Be(lt),cs();break;case 5:ss(s);break;case 4:Ur();break;case 13:Be($e);break;case 19:Be($e);break;case 10:rs(s.type._context);break;case 22:case 23:$s()}o=o.return}if(et=t,Ge=t=Hn(t.current,null),ot=Rt=n,Xe=0,Wi=null,Ms=ma=lr=0,yt=Yi=null,ir!==null){for(n=0;n<ir.length;n++)if(o=ir[n],s=o.interleaved,s!==null){o.interleaved=null;var d=s.next,p=o.pending;if(p!==null){var x=p.next;p.next=d,s.next=x}o.pending=s}ir=null}return t}function Gf(t,n){do{var o=Ge;try{if(ns(),ra.current=la,ia){for(var s=Ve.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}ia=!1}if(ar=0,Ze=Ke=Ve=null,Fi=!1,Bi=0,_s.current=null,o===null||o.return===null){Xe=1,Wi=n,Ge=null;break}e:{var p=t,x=o.return,N=o,T=n;if(n=ot,N.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var D=T,G=N,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=G.alternate;q?(G.updateQueue=q.updateQueue,G.memoizedState=q.memoizedState,G.lanes=q.lanes):(G.updateQueue=null,G.memoizedState=null)}var oe=xf(x);if(oe!==null){oe.flags&=-257,bf(oe,x,N,p,n),oe.mode&1&&yf(p,D,n),n=oe,T=D;var ue=n.updateQueue;if(ue===null){var fe=new Set;fe.add(T),n.updateQueue=fe}else ue.add(T);break e}else{if((n&1)===0){yf(p,D,n),Vs();break e}T=Error(i(426))}}else if(Ue&&N.mode&1){var qe=xf(x);if(qe!==null){(qe.flags&65536)===0&&(qe.flags|=256),bf(qe,x,N,p,n),es($r(T,N));break e}}p=T=$r(T,N),Xe!==4&&(Xe=2),Yi===null?Yi=[p]:Yi.push(p),p=x;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var M=gf(p,T,n);$d(p,M);break e;case 1:N=T;var I=p.type,O=p.stateNode;if((p.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Bn===null||!Bn.has(O)))){p.flags|=65536,n&=-n,p.lanes|=n;var X=vf(p,N,n);$d(p,X);break e}}p=p.return}while(p!==null)}Xf(o)}catch(pe){n=pe,Ge===o&&o!==null&&(Ge=o=o.return);continue}break}while(!0)}function Qf(){var t=pa.current;return pa.current=la,t===null?la:t}function Vs(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),et===null||(lr&268435455)===0&&(ma&268435455)===0||Vn(et,ot)}function ba(t,n){var o=ze;ze|=2;var s=Qf();(et!==t||ot!==n)&&(yn=null,ur(t,n));do try{by();break}catch(d){Gf(t,d)}while(!0);if(ns(),ze=o,pa.current=s,Ge!==null)throw Error(i(261));return et=null,ot=0,Xe}function by(){for(;Ge!==null;)Kf(Ge)}function wy(){for(;Ge!==null&&!Yg();)Kf(Ge)}function Kf(t){var n=ep(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,n===null?Xf(t):Ge=n,_s.current=null}function Xf(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=py(o,n,Rt),o!==null){Ge=o;return}}else{if(o=my(o,n),o!==null){o.flags&=32767,Ge=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Ge=null;return}}if(n=n.sibling,n!==null){Ge=n;return}Ge=n=t}while(n!==null);Xe===0&&(Xe=5)}function cr(t,n,o){var s=_e,d=Dt.transition;try{Dt.transition=null,_e=1,ky(t,n,o,s)}finally{Dt.transition=d,_e=s}return null}function ky(t,n,o,s){do Yr();while(Un!==null);if((ze&6)!==0)throw Error(i(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(nv(t,p),t===et&&(Ge=et=null,ot=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ga||(ga=!0,tp(Eo,function(){return Yr(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Dt.transition,Dt.transition=null;var x=_e;_e=1;var N=ze;ze|=4,_s.current=null,gy(t,o),Uf(o,t),$v(Vl),zo=!!$l,Vl=$l=null,t.current=o,vy(o),qg(),ze=N,_e=x,Dt.transition=p}else t.current=o;if(ga&&(ga=!1,Un=t,va=d),p=t.pendingLanes,p===0&&(Bn=null),Kg(o.stateNode),xt(t,Ye()),n!==null)for(s=t.onRecoverableError,o=0;o<n.length;o++)d=n[o],s(d.value,{componentStack:d.stack,digest:d.digest});if(ha)throw ha=!1,t=Os,Os=null,t;return(va&1)!==0&&t.tag!==0&&Yr(),p=t.pendingLanes,(p&1)!==0?t===Ds?qi++:(qi=0,Ds=t):qi=0,An(),null}function Yr(){if(Un!==null){var t=Dc(va),n=Dt.transition,o=_e;try{if(Dt.transition=null,_e=16>t?16:t,Un===null)var s=!1;else{if(t=Un,Un=null,va=0,(ze&6)!==0)throw Error(i(331));var d=ze;for(ze|=4,se=t.current;se!==null;){var p=se,x=p.child;if((se.flags&16)!==0){var N=p.deletions;if(N!==null){for(var T=0;T<N.length;T++){var D=N[T];for(se=D;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Hi(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,se=Q;else for(;se!==null;){G=se;var q=G.sibling,oe=G.return;if(Af(G),G===D){se=null;break}if(q!==null){q.return=oe,se=q;break}se=oe}}}var ue=p.alternate;if(ue!==null){var fe=ue.child;if(fe!==null){ue.child=null;do{var qe=fe.sibling;fe.sibling=null,fe=qe}while(fe!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&x!==null)x.return=p,se=x;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Hi(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var I=t.current;for(se=I;se!==null;){x=se;var O=x.child;if((x.subtreeFlags&2064)!==0&&O!==null)O.return=x,se=O;else e:for(x=I;se!==null;){if(N=se,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:fa(9,N)}}catch(pe){We(N,N.return,pe)}if(N===x){se=null;break e}var X=N.sibling;if(X!==null){X.return=N.return,se=X;break e}se=N.return}}if(ze=d,An(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Co,t)}catch{}s=!0}return s}finally{_e=o,Dt.transition=n}}return!1}function Jf(t,n,o){n=$r(o,n),n=gf(t,n,1),t=Dn(t,n,1),n=pt(),t!==null&&(vi(t,1,n),xt(t,n))}function We(t,n,o){if(t.tag===3)Jf(t,t,o);else for(;n!==null;){if(n.tag===3){Jf(n,t,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Bn===null||!Bn.has(s))){t=$r(o,t),t=vf(n,t,1),n=Dn(n,t,1),t=pt(),n!==null&&(vi(n,1,t),xt(n,t));break}}n=n.return}}function Sy(t,n,o){var s=t.pingCache;s!==null&&s.delete(n),n=pt(),t.pingedLanes|=t.suspendedLanes&o,et===t&&(ot&o)===o&&(Xe===4||Xe===3&&(ot&130023424)===ot&&500>Ye()-As?ur(t,0):Ms|=o),xt(t,n)}function Zf(t,n){n===0&&((t.mode&1)===0?n=1:(n=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var o=pt();t=hn(t,n),t!==null&&(vi(t,n,o),xt(t,o))}function Ey(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),Zf(t,o)}function Cy(t,n){var o=0;switch(t.tag){case 13:var s=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:s=t.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),Zf(t,o)}var ep;ep=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||ht.current)vt=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return vt=!1,fy(t,n,o);vt=(t.flags&131072)!==0}else vt=!1,Ue&&(n.flags&1048576)!==0&&Id(n,Qo,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;ca(t,n),t=n.pendingProps;var d=_r(n,lt.current);Br(n,o),d=ps(null,n,s,t,d,o);var p=ms();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,gt(s)?(p=!0,Yo(n)):p=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,as(n),d.updater=sa,n.stateNode=d,d._reactInternals=n,bs(n,s,t,o),n=Es(null,n,s,!0,p,o)):(n.tag=0,Ue&&p&&Kl(n),ft(null,n,d,o),n=n.child),n;case 16:s=n.elementType;e:{switch(ca(t,n),t=n.pendingProps,d=s._init,s=d(s._payload),n.type=s,d=n.tag=Py(s),t=Wt(s,t),d){case 0:n=Ss(null,n,s,t,o);break e;case 1:n=Nf(null,n,s,t,o);break e;case 11:n=wf(null,n,s,t,o);break e;case 14:n=kf(null,n,s,Wt(s.type,t),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:Wt(s,d),Ss(t,n,s,d,o);case 1:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:Wt(s,d),Nf(t,n,s,d,o);case 3:e:{if(Pf(n),t===null)throw Error(i(387));s=n.pendingProps,p=n.memoizedState,d=p.element,Ud(t,n),ta(n,s,null,o);var x=n.memoizedState;if(s=x.element,p.isDehydrated)if(p={element:s,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){d=$r(Error(i(423)),n),n=jf(t,n,s,o,d);break e}else if(s!==d){d=$r(Error(i(424)),n),n=jf(t,n,s,o,d);break e}else for(jt=Ln(n.stateNode.containerInfo.firstChild),Pt=n,Ue=!0,Ht=null,o=Fd(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Or(),s===d){n=vn(t,n,o);break e}ft(t,n,s,o)}n=n.child}return n;case 5:return Hd(n),t===null&&Zl(n),s=n.type,d=n.pendingProps,p=t!==null?t.memoizedProps:null,x=d.children,Hl(s,d)?x=null:p!==null&&Hl(s,p)&&(n.flags|=32),Cf(t,n),ft(t,n,x,o),n.child;case 6:return t===null&&Zl(n),null;case 13:return Rf(t,n,o);case 4:return ls(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Dr(n,null,s,o):ft(t,n,s,o),n.child;case 11:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:Wt(s,d),wf(t,n,s,d,o);case 7:return ft(t,n,n.pendingProps,o),n.child;case 8:return ft(t,n,n.pendingProps.children,o),n.child;case 12:return ft(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,d=n.pendingProps,p=n.memoizedProps,x=d.value,Me(Jo,s._currentValue),s._currentValue=x,p!==null)if(Vt(p.value,x)){if(p.children===d.children&&!ht.current){n=vn(t,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var N=p.dependencies;if(N!==null){x=p.child;for(var T=N.firstContext;T!==null;){if(T.context===s){if(p.tag===1){T=gn(-1,o&-o),T.tag=2;var D=p.updateQueue;if(D!==null){D=D.shared;var G=D.pending;G===null?T.next=T:(T.next=G.next,G.next=T),D.pending=T}}p.lanes|=o,T=p.alternate,T!==null&&(T.lanes|=o),is(p.return,o,n),N.lanes|=o;break}T=T.next}}else if(p.tag===10)x=p.type===n.type?null:p.child;else if(p.tag===18){if(x=p.return,x===null)throw Error(i(341));x.lanes|=o,N=x.alternate,N!==null&&(N.lanes|=o),is(x,o,n),x=p.sibling}else x=p.child;if(x!==null)x.return=p;else for(x=p;x!==null;){if(x===n){x=null;break}if(p=x.sibling,p!==null){p.return=x.return,x=p;break}x=x.return}p=x}ft(t,n,d.children,o),n=n.child}return n;case 9:return d=n.type,s=n.pendingProps.children,Br(n,o),d=At(d),s=s(d),n.flags|=1,ft(t,n,s,o),n.child;case 14:return s=n.type,d=Wt(s,n.pendingProps),d=Wt(s.type,d),kf(t,n,s,d,o);case 15:return Sf(t,n,n.type,n.pendingProps,o);case 17:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:Wt(s,d),ca(t,n),n.tag=1,gt(s)?(t=!0,Yo(n)):t=!1,Br(n,o),mf(n,s,d),bs(n,s,d,o),Es(null,n,s,!0,t,o);case 19:return zf(t,n,o);case 22:return Ef(t,n,o)}throw Error(i(156,n.tag))};function tp(t,n){return Lc(t,n)}function Ny(t,n,o,s){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,n,o,s){return new Ny(t,n,o,s)}function Hs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return Hs(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===U)return 14}return 2}function Hn(t,n){var o=t.alternate;return o===null?(o=Ft(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function wa(t,n,o,s,d,p){var x=2;if(s=t,typeof t=="function")Hs(t)&&(x=1);else if(typeof t=="string")x=5;else e:switch(t){case V:return dr(o.children,d,p,n);case Y:x=8,d|=8;break;case Z:return t=Ft(12,o,n,d|2),t.elementType=Z,t.lanes=p,t;case xe:return t=Ft(13,o,n,d),t.elementType=xe,t.lanes=p,t;case ie:return t=Ft(19,o,n,d),t.elementType=ie,t.lanes=p,t;case me:return ka(o,d,p,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:x=10;break e;case te:x=9;break e;case ne:x=11;break e;case U:x=14;break e;case re:x=16,s=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=Ft(x,o,n,d),n.elementType=t,n.type=s,n.lanes=p,n}function dr(t,n,o,s){return t=Ft(7,t,s,n),t.lanes=o,t}function ka(t,n,o,s){return t=Ft(22,t,s,n),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function Ws(t,n,o){return t=Ft(6,t,null,n),t.lanes=o,t}function Ys(t,n,o){return n=Ft(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function jy(t,n,o,s,d){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function qs(t,n,o,s,d,p,x,N,T){return t=new jy(t,n,o,N,T),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Ft(3,null,null,n),t.current=p,p.stateNode=t,p.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(p),t}function Ry(t,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:s==null?null:""+s,children:t,containerInfo:n,implementation:o}}function np(t){if(!t)return Mn;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(gt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(gt(o))return Rd(t,o,n)}return n}function rp(t,n,o,s,d,p,x,N,T){return t=qs(o,s,!0,t,d,p,x,N,T),t.context=np(null),o=t.current,s=pt(),d=$n(o),p=gn(s,d),p.callback=n??null,Dn(o,p,d),t.current.lanes=d,vi(t,d,s),xt(t,s),t}function Sa(t,n,o,s){var d=n.current,p=pt(),x=$n(d);return o=np(o),n.context===null?n.context=o:n.pendingContext=o,n=gn(p,x),n.payload={element:t},s=s===void 0?null:s,s!==null&&(n.callback=s),t=Dn(d,n,x),t!==null&&(Gt(t,d,x,p),ea(t,d,x)),x}function Ea(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ip(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function Gs(t,n){ip(t,n),(t=t.alternate)&&ip(t,n)}function Ty(){return null}var op=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qs(t){this._internalRoot=t}Ca.prototype.render=Qs.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));Sa(t,n,null,null)},Ca.prototype.unmount=Qs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;sr(function(){Sa(null,t,null,null)}),n[dn]=null}};function Ca(t){this._internalRoot=t}Ca.prototype.unstable_scheduleHydration=function(t){if(t){var n=Uc();t={blockedOn:null,target:t,priority:n};for(var o=0;o<Tn.length&&n!==0&&n<Tn[o].priority;o++);Tn.splice(o,0,t),o===0&&Hc(t)}};function Ks(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Na(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ap(){}function zy(t,n,o,s,d){if(d){if(typeof s=="function"){var p=s;s=function(){var D=Ea(x);p.call(D)}}var x=rp(n,s,t,0,null,!1,!1,"",ap);return t._reactRootContainer=x,t[dn]=x.current,zi(t.nodeType===8?t.parentNode:t),sr(),x}for(;d=t.lastChild;)t.removeChild(d);if(typeof s=="function"){var N=s;s=function(){var D=Ea(T);N.call(D)}}var T=qs(t,0,!1,null,null,!1,!1,"",ap);return t._reactRootContainer=T,t[dn]=T.current,zi(t.nodeType===8?t.parentNode:t),sr(function(){Sa(n,T,o,s)}),T}function Pa(t,n,o,s,d){var p=o._reactRootContainer;if(p){var x=p;if(typeof d=="function"){var N=d;d=function(){var T=Ea(x);N.call(T)}}Sa(n,x,t,d)}else x=zy(o,n,t,d,s);return Ea(x)}Fc=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=gi(n.pendingLanes);o!==0&&(bl(n,o|1),xt(n,Ye()),(ze&6)===0&&(Wr=Ye()+500,An()))}break;case 13:sr(function(){var s=hn(t,1);if(s!==null){var d=pt();Gt(s,t,1,d)}}),Gs(t,1)}},wl=function(t){if(t.tag===13){var n=hn(t,134217728);if(n!==null){var o=pt();Gt(n,t,134217728,o)}Gs(t,134217728)}},Bc=function(t){if(t.tag===13){var n=$n(t),o=hn(t,n);if(o!==null){var s=pt();Gt(o,t,n,s)}Gs(t,n)}},Uc=function(){return _e},$c=function(t,n){var o=_e;try{return _e=t,n()}finally{_e=o}},pl=function(t,n,o){switch(n){case"input":if(wr(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==t&&s.form===t.form){var d=Ho(s);if(!d)throw Error(i(90));un(s),wr(s,d)}}}break;case"textarea":bo(t,o);break;case"select":n=o.value,n!=null&&Cn(t,!!o.multiple,n,!1)}},Nc=Us,Pc=sr;var Iy={usingClientEntryPoint:!1,Events:[_i,Ir,Ho,Ec,Cc,Us]},Gi={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zc(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Co=ja.inject(Ly),Jt=ja}catch{}}return bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy,bt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(n))throw Error(i(200));return Ry(t,n,null,o)},bt.createRoot=function(t,n){if(!Ks(t))throw Error(i(299));var o=!1,s="",d=op;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=qs(t,1,!1,null,null,o,!1,s,d),t[dn]=n.current,zi(t.nodeType===8?t.parentNode:t),new Qs(n)},bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=zc(n),t=t===null?null:t.stateNode,t},bt.flushSync=function(t){return sr(t)},bt.hydrate=function(t,n,o){if(!Na(n))throw Error(i(200));return Pa(null,t,n,!0,o)},bt.hydrateRoot=function(t,n,o){if(!Ks(t))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,d=!1,p="",x=op;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(x=o.onRecoverableError)),n=rp(n,null,t,1,o??null,d,!1,p,x),t[dn]=n.current,zi(t),s)for(t=0;t<s.length;t++)o=s[t],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new Ca(n)},bt.render=function(t,n,o){if(!Na(n))throw Error(i(200));return Pa(null,t,n,!1,o)},bt.unmountComponentAtNode=function(t){if(!Na(t))throw Error(i(40));return t._reactRootContainer?(sr(function(){Pa(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1},bt.unstable_batchedUpdates=Us,bt.unstable_renderSubtreeIntoContainer=function(t,n,o,s){if(!Na(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Pa(t,n,o,!1,s)},bt.version="18.3.1-next-f1338f8080-20240426",bt}var mp;function Mm(){if(mp)return Zs.exports;mp=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Zs.exports=Uy(),Zs.exports}var hp;function $y(){if(hp)return Ra;hp=1;var e=Mm();return Ra.createRoot=e.createRoot,Ra.hydrateRoot=e.hydrateRoot,Ra}var Vy=$y(),k=Qu();const pr=nl(k),Hy=My({__proto__:null,default:pr},[k]);/**
 * react-router v7.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gp="popstate";function vp(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Wy(e={}){function r(a,l){var m;let u=(m=l.state)==null?void 0:m.masked,{pathname:c,search:f,hash:h}=u||a.location;return zu("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function i(a,l){return typeof l=="string"?l:lo(l)}return qy(r,i,null,e)}function He(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function ln(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Yy(){return Math.random().toString(36).substring(2,10)}function yp(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function zu(e,r,i=null,a,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?ri(r):r,state:i,key:r&&r.key||a||Yy(),mask:l}}function lo({pathname:e="/",search:r="",hash:i=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ri(e){let r={};if(e){let i=e.indexOf("#");i>=0&&(r.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(r.search=e.substring(a),e=e.substring(0,a)),e&&(r.pathname=e)}return r}function qy(e,r,i,a={}){let{window:l=document.defaultView,v5Compat:u=!1}=a,c=l.history,f="POP",h=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function v(){f="POP";let C=g(),j=C==null?null:C-m;m=C,h&&h({action:f,location:P.location,delta:j})}function w(C,j){f="PUSH";let A=vp(C)?C:zu(P.location,C,j);m=g()+1;let _=yp(A,m),W=P.createHref(A.mask||A);try{c.pushState(_,"",W)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(W)}u&&h&&h({action:f,location:P.location,delta:1})}function y(C,j){f="REPLACE";let A=vp(C)?C:zu(P.location,C,j);m=g();let _=yp(A,m),W=P.createHref(A.mask||A);c.replaceState(_,"",W),u&&h&&h({action:f,location:P.location,delta:0})}function z(C){return Gy(C)}let P={get action(){return f},get location(){return e(l,c)},listen(C){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(gp,v),h=C,()=>{l.removeEventListener(gp,v),h=null}},createHref(C){return r(l,C)},createURL:z,encodeLocation(C){let j=z(C);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:w,replace:y,go(C){return c.go(C)}};return P}function Gy(e,r=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),He(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:lo(e);return a=a.replace(/ $/,"%20"),!r&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Am(e,r,i="/"){return Qy(e,r,i,!1)}function Qy(e,r,i,a,l){let u=typeof r=="string"?ri(r):r,c=bn(u.pathname||"/",i);if(c==null)return null;let f=Ky(e),h=null,m=s0(c);for(let g=0;h==null&&g<f.length;++g)h=a0(f[g],m,a);return h}function Ky(e){let r=Om(e);return Xy(r),r}function Om(e,r=[],i=[],a="",l=!1){let u=(c,f,h=l,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&h)return;He(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=Qt([a,g.relativePath]),w=i.concat(g);c.children&&c.children.length>0&&(He(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Om(c.children,r,w,v,h)),!(c.path==null&&!c.index)&&r.push({path:v,score:i0(v,c.index),routesMeta:w})};return e.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))u(c,f);else for(let m of Dm(c.path))u(c,f,!0,m)}),r}function Dm(e){let r=e.split("/");if(r.length===0)return[];let[i,...a]=r,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return l?[u,""]:[u];let c=Dm(a.join("/")),f=[];return f.push(...c.map(h=>h===""?u:[u,h].join("/"))),l&&f.push(...c),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function Xy(e){e.sort((r,i)=>r.score!==i.score?i.score-r.score:o0(r.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var Jy=/^:[\w-]+$/,Zy=3,e0=2,t0=1,n0=10,r0=-2,xp=e=>e==="*";function i0(e,r){let i=e.split("/"),a=i.length;return i.some(xp)&&(a+=r0),r&&(a+=e0),i.filter(l=>!xp(l)).reduce((l,u)=>l+(Jy.test(u)?Zy:u===""?t0:n0),a)}function o0(e,r){return e.length===r.length&&e.slice(0,-1).every((a,l)=>a===r[l])?e[e.length-1]-r[r.length-1]:0}function a0(e,r,i=!1){let{routesMeta:a}=e,l={},u="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],m=f===a.length-1,g=u==="/"?r:r.slice(u.length)||"/",v=Qa({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),w=h.route;if(!v&&m&&i&&!a[a.length-1].route.index&&(v=Qa({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),c.push({params:l,pathname:Qt([u,v.pathname]),pathnameBase:f0(Qt([u,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(u=Qt([u,v.pathnameBase]))}return c}function Qa(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=l0(e.path,e.caseSensitive,e.end),l=r.match(i);if(!l)return null;let u=l[0],c=u.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},w)=>{if(g==="*"){let z=f[w]||"";c=u.slice(0,u.length-z.length).replace(/(.)\/+$/,"$1")}const y=f[w];return v&&!y?m[g]=void 0:m[g]=(y||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:e}}function l0(e,r=!1,i=!0){ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h,m,g)=>{if(a.push({paramName:f,isOptional:h!=null}),h){let v=g.charAt(m+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),a]}function s0(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ln(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function bn(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}var u0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function c0(e,r="/"){let{pathname:i,search:a="",hash:l=""}=typeof e=="string"?ri(e):e,u;return i?(i=Bm(i),i.startsWith("/")?u=bp(i.substring(1),"/"):u=bp(i,r)):u=r,{pathname:u,search:p0(a),hash:m0(l)}}function bp(e,r){let i=Ka(r).split("/");return e.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function nu(e,r,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function d0(e){return e.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Fm(e){let r=d0(e);return r.map((i,a)=>a===r.length-1?i.pathname:i.pathnameBase)}function Ku(e,r,i,a=!1){let l;typeof e=="string"?l=ri(e):(l={...e},He(!l.pathname||!l.pathname.includes("?"),nu("?","pathname","search",l)),He(!l.pathname||!l.pathname.includes("#"),nu("#","pathname","hash",l)),He(!l.search||!l.search.includes("#"),nu("#","search","hash",l)));let u=e===""||l.pathname==="",c=u?"/":l.pathname,f;if(c==null)f=i;else{let v=r.length-1;if(!a&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),v-=1;l.pathname=w.join("/")}f=v>=0?r[v]:"/"}let h=c0(l,f),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}var Bm=e=>e.replace(/\/\/+/g,"/"),Qt=e=>Bm(e.join("/")),Ka=e=>e.replace(/\/+$/,""),f0=e=>Ka(e).replace(/^\/*/,"/"),p0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,h0=class{constructor(e,r,i,a=!1){this.status=e,this.statusText=r||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function g0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function v0(e){let r=e.map(i=>i.route.path).filter(Boolean);return Qt(r)||"/"}var Um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $m(e,r){let i=e;if(typeof i!="string"||!u0.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,l=!1;if(Um)try{let u=new URL(window.location.href),c=i.startsWith("//")?new URL(u.protocol+i):new URL(i),f=bn(c.pathname,r);c.origin===u.origin&&f!=null?i=f+c.search+c.hash:l=!0}catch{ln(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vm=["POST","PUT","PATCH","DELETE"];new Set(Vm);var y0=["GET",...Vm];new Set(y0);var ii=k.createContext(null);ii.displayName="DataRouter";var rl=k.createContext(null);rl.displayName="DataRouterState";var Hm=k.createContext(!1);function x0(){return k.useContext(Hm)}var Wm=k.createContext({isTransitioning:!1});Wm.displayName="ViewTransition";var b0=k.createContext(new Map);b0.displayName="Fetchers";var w0=k.createContext(null);w0.displayName="Await";var Ut=k.createContext(null);Ut.displayName="Navigation";var fo=k.createContext(null);fo.displayName="Location";var wn=k.createContext({outlet:null,matches:[],isDataRoute:!1});wn.displayName="Route";var Xu=k.createContext(null);Xu.displayName="RouteError";var Ym="REACT_ROUTER_ERROR",k0="REDIRECT",S0="ROUTE_ERROR_RESPONSE";function E0(e){if(e.startsWith(`${Ym}:${k0}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function C0(e){if(e.startsWith(`${Ym}:${S0}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new h0(r.status,r.statusText,r.data)}catch{}}function N0(e,{relative:r}={}){He(po(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=k.useContext(Ut),{hash:l,pathname:u,search:c}=mo(e,{relative:r}),f=u;return i!=="/"&&(f=u==="/"?i:Qt([i,u])),a.createHref({pathname:f,search:c,hash:l})}function po(){return k.useContext(fo)!=null}function kn(){return He(po(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(fo).location}var qm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gm(e){k.useContext(Ut).static||k.useLayoutEffect(e)}function gr(){let{isDataRoute:e}=k.useContext(wn);return e?F0():P0()}function P0(){He(po(),"useNavigate() may be used only in the context of a <Router> component.");let e=k.useContext(ii),{basename:r,navigator:i}=k.useContext(Ut),{matches:a}=k.useContext(wn),{pathname:l}=kn(),u=JSON.stringify(Fm(a)),c=k.useRef(!1);return Gm(()=>{c.current=!0}),k.useCallback((h,m={})=>{if(ln(c.current,qm),!c.current)return;if(typeof h=="number"){i.go(h);return}let g=Ku(h,JSON.parse(u),l,m.relative==="path");e==null&&r!=="/"&&(g.pathname=g.pathname==="/"?r:Qt([r,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[r,i,u,l,e])}k.createContext(null);function mo(e,{relative:r}={}){let{matches:i}=k.useContext(wn),{pathname:a}=kn(),l=JSON.stringify(Fm(i));return k.useMemo(()=>Ku(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function j0(e,r){return Qm(e,r)}function Qm(e,r,i){var C;He(po(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=k.useContext(Ut),{matches:l}=k.useContext(wn),u=l[l.length-1],c=u?u.params:{},f=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let j=m&&m.path||"";Xm(f,!m||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let g=kn(),v;if(r){let j=typeof r=="string"?ri(r):r;He(h==="/"||((C=j.pathname)==null?void 0:C.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${j.pathname}" was given in the \`location\` prop.`),v=j}else v=g;let w=v.pathname||"/",y=w;if(h!=="/"){let j=h.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(j.length).join("/")}let z=i&&i.state.matches.length?i.state.matches.map(j=>Object.assign(j,{route:i.manifest[j.route.id]||j.route})):Am(e,{pathname:y});ln(m||z!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),ln(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=L0(z&&z.map(j=>Object.assign({},j,{params:Object.assign({},c,j.params),pathname:Qt([h,a.encodeLocation?a.encodeLocation(j.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?h:Qt([h,a.encodeLocation?a.encodeLocation(j.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),l,i);return r&&P?k.createElement(fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},P):P}function R0(){let e=D0(),r=g0(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:u},"ErrorBoundary")," or"," ",k.createElement("code",{style:u},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},r),i?k.createElement("pre",{style:l},i):null,c)}var T0=k.createElement(R0,null),Km=class extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=C0(e.digest);i&&(e=i)}let r=e!==void 0?k.createElement(wn.Provider,{value:this.props.routeContext},k.createElement(Xu.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?k.createElement(z0,{error:e},r):r}};Km.contextType=Hm;var ru=new WeakMap;function z0({children:e,error:r}){let{basename:i}=k.useContext(Ut);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let a=E0(r.digest);if(a){let l=ru.get(r);if(l)throw l;let u=$m(a.location,i);if(Um&&!ru.get(r))if(u.isExternal||a.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:a.replace}));throw ru.set(r,c),c}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function I0({routeContext:e,match:r,children:i}){let a=k.useContext(ii);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(wn.Provider,{value:e},i)}function L0(e,r=[],i){let a=i==null?void 0:i.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(r.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,u=a==null?void 0:a.errors;if(u!=null){let g=l.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);He(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,f=-1;if(i&&a){c=a.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=g),v.route.id){let{loaderData:w,errors:y}=a,z=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!y||y[v.route.id]===void 0);if(v.route.lazy||z){i.isStatic&&(c=!0),f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}}let h=i==null?void 0:i.onError,m=a&&h?(g,v)=>{var w,y;h(g,{location:a.location,params:((y=(w=a.matches)==null?void 0:w[0])==null?void 0:y.params)??{},pattern:v0(a.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,w)=>{let y,z=!1,P=null,C=null;a&&(y=u&&v.route.id?u[v.route.id]:void 0,P=v.route.errorElement||T0,c&&(f<0&&w===0?(Xm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,C=null):f===w&&(z=!0,C=v.route.hydrateFallbackElement||null)));let j=r.concat(l.slice(0,w+1)),A=()=>{let _;return y?_=P:z?_=C:v.route.Component?_=k.createElement(v.route.Component,null):v.route.element?_=v.route.element:_=g,k.createElement(I0,{match:v,routeContext:{outlet:g,matches:j,isDataRoute:a!=null},children:_})};return a&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?k.createElement(Km,{location:a.location,revalidation:a.revalidation,component:P,error:y,children:A(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:m}):A()},null)}function Ju(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _0(e){let r=k.useContext(ii);return He(r,Ju(e)),r}function M0(e){let r=k.useContext(rl);return He(r,Ju(e)),r}function A0(e){let r=k.useContext(wn);return He(r,Ju(e)),r}function Zu(e){let r=A0(e),i=r.matches[r.matches.length-1];return He(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function O0(){return Zu("useRouteId")}function D0(){var a;let e=k.useContext(Xu),r=M0("useRouteError"),i=Zu("useRouteError");return e!==void 0?e:(a=r.errors)==null?void 0:a[i]}function F0(){let{router:e}=_0("useNavigate"),r=Zu("useNavigate"),i=k.useRef(!1);return Gm(()=>{i.current=!0}),k.useCallback(async(l,u={})=>{ln(i.current,qm),i.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:r,...u}))},[e,r])}var wp={};function Xm(e,r,i){!r&&!wp[e]&&(wp[e]=!0,ln(!1,i))}k.memo(B0);function B0({routes:e,manifest:r,future:i,state:a,isStatic:l,onError:u}){return Qm(e,void 0,{manifest:r,state:a,isStatic:l,onError:u})}function Va(e){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function U0({basename:e="/",children:r=null,location:i,navigationType:a="POP",navigator:l,static:u=!1,useTransitions:c}){He(!po(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),h=k.useMemo(()=>({basename:f,navigator:l,static:u,useTransitions:c,future:{}}),[f,l,u,c]);typeof i=="string"&&(i=ri(i));let{pathname:m="/",search:g="",hash:v="",state:w=null,key:y="default",mask:z}=i,P=k.useMemo(()=>{let C=bn(m,f);return C==null?null:{location:{pathname:C,search:g,hash:v,state:w,key:y,mask:z},navigationType:a}},[f,m,g,v,w,y,a,z]);return ln(P!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:k.createElement(Ut.Provider,{value:h},k.createElement(fo.Provider,{children:r,value:P}))}function $0({children:e,location:r}){return j0(Iu(e),r)}function Iu(e,r=[]){let i=[];return k.Children.forEach(e,(a,l)=>{if(!k.isValidElement(a))return;let u=[...r,l];if(a.type===k.Fragment){i.push.apply(i,Iu(a.props.children,u));return}He(a.type===Va,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Iu(a.props.children,u)),i.push(c)}),i}var Ha="get",Wa="application/x-www-form-urlencoded";function il(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function V0(e){return il(e)&&e.tagName.toLowerCase()==="button"}function H0(e){return il(e)&&e.tagName.toLowerCase()==="form"}function W0(e){return il(e)&&e.tagName.toLowerCase()==="input"}function Y0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q0(e,r){return e.button===0&&(!r||r==="_self")&&!Y0(e)}var Ta=null;function G0(){if(Ta===null)try{new FormData(document.createElement("form"),0),Ta=!1}catch{Ta=!0}return Ta}var Q0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function iu(e){return e!=null&&!Q0.has(e)?(ln(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wa}"`),null):e}function K0(e,r){let i,a,l,u,c;if(H0(e)){let f=e.getAttribute("action");a=f?bn(f,r):null,i=e.getAttribute("method")||Ha,l=iu(e.getAttribute("enctype"))||Wa,u=new FormData(e)}else if(V0(e)||W0(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(a=h?bn(h,r):null,i=e.getAttribute("formmethod")||f.getAttribute("method")||Ha,l=iu(e.getAttribute("formenctype"))||iu(f.getAttribute("enctype"))||Wa,u=new FormData(f,e),!G0()){let{name:m,type:g,value:v}=e;if(g==="image"){let w=m?`${m}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else m&&u.append(m,v)}}else{if(il(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ha,a=null,l=Wa,c=e}return u&&l==="text/plain"&&(c=u,u=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ec(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Jm(e,r,i,a){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${a}`:l.pathname=`${l.pathname}.${a}`:l.pathname==="/"?l.pathname=`_root.${a}`:r&&bn(l.pathname,r)==="/"?l.pathname=`${Ka(r)}/_root.${a}`:l.pathname=`${Ka(l.pathname)}.${a}`,l}async function X0(e,r){if(e.id in r)return r[e.id];try{let i=await import(e.module);return r[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function J0(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Z0(e,r,i){let a=await Promise.all(e.map(async l=>{let u=r.routes[l.route.id];if(u){let c=await X0(u,i);return c.links?c.links():[]}return[]}));return rx(a.flat(1).filter(J0).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function kp(e,r,i,a,l,u){let c=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,f=(h,m)=>{var g;return i[m].pathname!==h.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return u==="assets"?r.filter((h,m)=>c(h,m)||f(h,m)):u==="data"?r.filter((h,m)=>{var v;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,m)||f(h,m))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ex(e,r,{includeHydrateFallback:i}={}){return tx(e.map(a=>{let l=r.routes[a.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function tx(e){return[...new Set(e)]}function nx(e){let r={},i=Object.keys(e).sort();for(let a of i)r[a]=e[a];return r}function rx(e,r){let i=new Set;return new Set(r),e.reduce((a,l)=>{let u=JSON.stringify(nx(l));return i.has(u)||(i.add(u),a.push({key:u,link:l})),a},[])}function tc(){let e=k.useContext(ii);return ec(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ix(){let e=k.useContext(rl);return ec(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var nc=k.createContext(void 0);nc.displayName="FrameworkContext";function rc(){let e=k.useContext(nc);return ec(e,"You must render this element inside a <HydratedRouter> element"),e}function ox(e,r){let i=k.useContext(nc),[a,l]=k.useState(!1),[u,c]=k.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=r,w=k.useRef(null);k.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let P=j=>{j.forEach(A=>{c(A.isIntersecting)})},C=new IntersectionObserver(P,{threshold:.5});return w.current&&C.observe(w.current),()=>{C.disconnect()}}},[e]),k.useEffect(()=>{if(a){let P=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(P)}}},[a]);let y=()=>{l(!0)},z=()=>{l(!1),c(!1)};return i?e!=="intent"?[u,w,{}]:[u,w,{onFocus:Ki(f,y),onBlur:Ki(h,z),onMouseEnter:Ki(m,y),onMouseLeave:Ki(g,z),onTouchStart:Ki(v,y)}]:[!1,w,{}]}function Ki(e,r){return i=>{e&&e(i),i.defaultPrevented||r(i)}}function ax({page:e,...r}){let i=x0(),{router:a}=tc(),l=k.useMemo(()=>Am(a.routes,e,a.basename),[a.routes,e,a.basename]);return l?i?k.createElement(sx,{page:e,matches:l,...r}):k.createElement(ux,{page:e,matches:l,...r}):null}function lx(e){let{manifest:r,routeModules:i}=rc(),[a,l]=k.useState([]);return k.useEffect(()=>{let u=!1;return Z0(e,r,i).then(c=>{u||l(c)}),()=>{u=!0}},[e,r,i]),a}function sx({page:e,matches:r,...i}){let a=kn(),{future:l}=rc(),{basename:u}=tc(),c=k.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let f=Jm(e,u,l.unstable_trailingSlashAwareDataRequests,"rsc"),h=!1,m=[];for(let g of r)typeof g.route.shouldRevalidate=="function"?h=!0:m.push(g.route.id);return h&&m.length>0&&f.searchParams.set("_routes",m.join(",")),[f.pathname+f.search]},[u,l.unstable_trailingSlashAwareDataRequests,e,a,r]);return k.createElement(k.Fragment,null,c.map(f=>k.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...i})))}function ux({page:e,matches:r,...i}){let a=kn(),{future:l,manifest:u,routeModules:c}=rc(),{basename:f}=tc(),{loaderData:h,matches:m}=ix(),g=k.useMemo(()=>kp(e,r,m,u,a,"data"),[e,r,m,u,a]),v=k.useMemo(()=>kp(e,r,m,u,a,"assets"),[e,r,m,u,a]),w=k.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let P=new Set,C=!1;if(r.forEach(A=>{var W;let _=u.routes[A.route.id];!_||!_.hasLoader||(!g.some(H=>H.route.id===A.route.id)&&A.route.id in h&&((W=c[A.route.id])!=null&&W.shouldRevalidate)||_.hasClientLoader?C=!0:P.add(A.route.id))}),P.size===0)return[];let j=Jm(e,f,l.unstable_trailingSlashAwareDataRequests,"data");return C&&P.size>0&&j.searchParams.set("_routes",r.filter(A=>P.has(A.route.id)).map(A=>A.route.id).join(",")),[j.pathname+j.search]},[f,l.unstable_trailingSlashAwareDataRequests,h,a,u,g,r,e,c]),y=k.useMemo(()=>ex(v,u),[v,u]),z=lx(v);return k.createElement(k.Fragment,null,w.map(P=>k.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...i})),y.map(P=>k.createElement("link",{key:P,rel:"modulepreload",href:P,...i})),z.map(({key:P,link:C})=>k.createElement("link",{key:P,nonce:i.nonce,...C,crossOrigin:C.crossOrigin??i.crossOrigin})))}function cx(...e){return r=>{e.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var dx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dx&&(window.__reactRouterVersion="7.15.0")}catch{}function fx({basename:e,children:r,useTransitions:i,window:a}){let l=k.useRef();l.current==null&&(l.current=Wy({window:a,v5Compat:!0}));let u=l.current,[c,f]=k.useState({action:u.action,location:u.location}),h=k.useCallback(m=>{i===!1?f(m):k.startTransition(()=>f(m))},[i]);return k.useLayoutEffect(()=>u.listen(h),[u,h]),k.createElement(U0,{basename:e,children:r,location:c.location,navigationType:c.action,navigator:u,useTransitions:i})}var Zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eh=k.forwardRef(function({onClick:r,discover:i="render",prefetch:a="none",relative:l,reloadDocument:u,replace:c,mask:f,state:h,target:m,to:g,preventScrollReset:v,viewTransition:w,defaultShouldRevalidate:y,...z},P){let{basename:C,navigator:j,useTransitions:A}=k.useContext(Ut),_=typeof g=="string"&&Zm.test(g),W=$m(g,C);g=W.to;let H=N0(g,{relative:l}),L=kn(),V=null;if(f){let U=Ku(f,[],L.mask?L.mask.pathname:"/",!0);C!=="/"&&(U.pathname=U.pathname==="/"?C:Qt([C,U.pathname])),V=j.createHref(U)}let[Y,Z,J]=ox(a,z),te=gx(g,{replace:c,mask:f,state:h,target:m,preventScrollReset:v,relative:l,viewTransition:w,defaultShouldRevalidate:y,useTransitions:A});function ne(U){r&&r(U),U.defaultPrevented||te(U)}let xe=!(W.isExternal||u),ie=k.createElement("a",{...z,...J,href:(xe?V:void 0)||W.absoluteURL||H,onClick:xe?ne:r,ref:cx(P,Z),target:m,"data-discover":!_&&i==="render"?"true":void 0});return Y&&!_?k.createElement(k.Fragment,null,ie,k.createElement(ax,{page:H})):ie});eh.displayName="Link";var px=k.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:a="",end:l=!1,style:u,to:c,viewTransition:f,children:h,...m},g){let v=mo(c,{relative:m.relative}),w=kn(),y=k.useContext(rl),{navigator:z,basename:P}=k.useContext(Ut),C=y!=null&&wx(v)&&f===!0,j=z.encodeLocation?z.encodeLocation(v).pathname:v.pathname,A=w.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(A=A.toLowerCase(),_=_?_.toLowerCase():null,j=j.toLowerCase()),_&&P&&(_=bn(_,P)||_);const W=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let H=A===j||!l&&A.startsWith(j)&&A.charAt(W)==="/",L=_!=null&&(_===j||!l&&_.startsWith(j)&&_.charAt(j.length)==="/"),V={isActive:H,isPending:L,isTransitioning:C},Y=H?r:void 0,Z;typeof a=="function"?Z=a(V):Z=[a,H?"active":null,L?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let J=typeof u=="function"?u(V):u;return k.createElement(eh,{...m,"aria-current":Y,className:Z,ref:g,style:J,to:c,viewTransition:f},typeof h=="function"?h(V):h)});px.displayName="NavLink";var mx=k.forwardRef(({discover:e="render",fetcherKey:r,navigate:i,reloadDocument:a,replace:l,state:u,method:c=Ha,action:f,onSubmit:h,relative:m,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:w,...y},z)=>{let{useTransitions:P}=k.useContext(Ut),C=xx(),j=bx(f,{relative:m}),A=c.toLowerCase()==="get"?"get":"post",_=typeof f=="string"&&Zm.test(f),W=H=>{if(h&&h(H),H.defaultPrevented)return;H.preventDefault();let L=H.nativeEvent.submitter,V=(L==null?void 0:L.getAttribute("formmethod"))||c,Y=()=>C(L||H.currentTarget,{fetcherKey:r,method:V,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:w});P&&i!==!1?k.startTransition(()=>Y()):Y()};return k.createElement("form",{ref:z,method:A,action:j,onSubmit:a?h:W,...y,"data-discover":!_&&e==="render"?"true":void 0})});mx.displayName="Form";function hx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function th(e){let r=k.useContext(ii);return He(r,hx(e)),r}function gx(e,{target:r,replace:i,mask:a,state:l,preventScrollReset:u,relative:c,viewTransition:f,defaultShouldRevalidate:h,useTransitions:m}={}){let g=gr(),v=kn(),w=mo(e,{relative:c});return k.useCallback(y=>{if(q0(y,r)){y.preventDefault();let z=i!==void 0?i:lo(v)===lo(w),P=()=>g(e,{replace:z,mask:a,state:l,preventScrollReset:u,relative:c,viewTransition:f,defaultShouldRevalidate:h});m?k.startTransition(()=>P()):P()}},[v,g,w,i,a,l,r,e,u,c,f,h,m])}var vx=0,yx=()=>`__${String(++vx)}__`;function xx(){let{router:e}=th("useSubmit"),{basename:r}=k.useContext(Ut),i=O0(),a=e.fetch,l=e.navigate;return k.useCallback(async(u,c={})=>{let{action:f,method:h,encType:m,formData:g,body:v}=K0(u,r);if(c.navigate===!1){let w=c.fetcherKey||yx();await a(w,i,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:v,formMethod:c.method||h,formEncType:c.encType||m,flushSync:c.flushSync})}else await l(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:v,formMethod:c.method||h,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:i,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,l,r,i])}function bx(e,{relative:r}={}){let{basename:i}=k.useContext(Ut),a=k.useContext(wn);He(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),u={...mo(e||".",{relative:r})},c=kn();if(e==null){u.search=c.search;let f=new URLSearchParams(u.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();u.search=g?`?${g}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Qt([i,u.pathname])),lo(u)}function wx(e,{relative:r}={}){let i=k.useContext(Wm);He(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=th("useViewTransitionState"),l=mo(e,{relative:r});if(!i.isTransitioning)return!1;let u=bn(i.currentLocation.pathname,a)||i.currentLocation.pathname,c=bn(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Qa(l.pathname,c)!=null||Qa(l.pathname,u)!=null}var nh=Mm();const kx=nl(nh);function Sp(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function rh(...e){return r=>{let i=!1;const a=e.map(l=>{const u=Sp(l,r);return!i&&typeof u=="function"&&(i=!0),u});if(i)return()=>{for(let l=0;l<a.length;l++){const u=a[l];typeof u=="function"?u():Sp(e[l],null)}}}}function vr(...e){return k.useCallback(rh(...e),e)}var ol=k.forwardRef((e,r)=>{const{children:i,...a}=e,l=k.Children.toArray(i),u=l.find(Ex);if(u){const c=u.props.children,f=l.map(h=>h===u?k.Children.count(c)>1?k.Children.only(null):k.isValidElement(c)?c.props.children:null:h);return b.jsx(Lu,{...a,ref:r,children:k.isValidElement(c)?k.cloneElement(c,void 0,f):null})}return b.jsx(Lu,{...a,ref:r,children:i})});ol.displayName="Slot";var Lu=k.forwardRef((e,r)=>{const{children:i,...a}=e;if(k.isValidElement(i)){const l=Nx(i),u=Cx(a,i.props);return i.type!==k.Fragment&&(u.ref=r?rh(r,l):l),k.cloneElement(i,u)}return k.Children.count(i)>1?k.Children.only(null):null});Lu.displayName="SlotClone";var Sx=({children:e})=>b.jsx(b.Fragment,{children:e});function Ex(e){return k.isValidElement(e)&&e.type===Sx}function Cx(e,r){const i={...r};for(const a in r){const l=e[a],u=r[a];/^on[A-Z]/.test(a)?l&&u?i[a]=(...f)=>{u(...f),l(...f)}:l&&(i[a]=l):a==="style"?i[a]={...l,...u}:a==="className"&&(i[a]=[l,u].filter(Boolean).join(" "))}return{...e,...i}}function Nx(e){var a,l;let r=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?e.ref:(r=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?e.props.ref:e.props.ref||e.ref)}function ih(e){var r,i,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(r=0;r<l;r++)e[r]&&(i=ih(e[r]))&&(a&&(a+=" "),a+=i)}else for(i in e)e[i]&&(a&&(a+=" "),a+=i);return a}function oh(){for(var e,r,i=0,a="",l=arguments.length;i<l;i++)(e=arguments[i])&&(r=ih(e))&&(a&&(a+=" "),a+=r);return a}const Ep=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Cp=oh,Px=(e,r)=>i=>{var a;if((r==null?void 0:r.variants)==null)return Cp(e,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:l,defaultVariants:u}=r,c=Object.keys(l).map(m=>{const g=i==null?void 0:i[m],v=u==null?void 0:u[m];if(g===null)return null;const w=Ep(g)||Ep(v);return l[m][w]}),f=i&&Object.entries(i).reduce((m,g)=>{let[v,w]=g;return w===void 0||(m[v]=w),m},{}),h=r==null||(a=r.compoundVariants)===null||a===void 0?void 0:a.reduce((m,g)=>{let{class:v,className:w,...y}=g;return Object.entries(y).every(z=>{let[P,C]=z;return Array.isArray(C)?C.includes({...u,...f}[P]):{...u,...f}[P]===C})?[...m,v,w]:m},[]);return Cp(e,c,h,i==null?void 0:i.class,i==null?void 0:i.className)},ic="-",jx=e=>{const r=Tx(e),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:c=>{const f=c.split(ic);return f[0]===""&&f.length!==1&&f.shift(),ah(f,r)||Rx(c)},getConflictingClassGroupIds:(c,f)=>{const h=i[c]||[];return f&&a[c]?[...h,...a[c]]:h}}},ah=(e,r)=>{var c;if(e.length===0)return r.classGroupId;const i=e[0],a=r.nextPart.get(i),l=a?ah(e.slice(1),a):void 0;if(l)return l;if(r.validators.length===0)return;const u=e.join(ic);return(c=r.validators.find(({validator:f})=>f(u)))==null?void 0:c.classGroupId},Np=/^\[(.+)\]$/,Rx=e=>{if(Np.test(e)){const r=Np.exec(e)[1],i=r==null?void 0:r.substring(0,r.indexOf(":"));if(i)return"arbitrary.."+i}},Tx=e=>{const{theme:r,classGroups:i}=e,a={nextPart:new Map,validators:[]};for(const l in i)_u(i[l],a,l,r);return a},_u=(e,r,i,a)=>{e.forEach(l=>{if(typeof l=="string"){const u=l===""?r:Pp(r,l);u.classGroupId=i;return}if(typeof l=="function"){if(zx(l)){_u(l(a),r,i,a);return}r.validators.push({validator:l,classGroupId:i});return}Object.entries(l).forEach(([u,c])=>{_u(c,Pp(r,u),i,a)})})},Pp=(e,r)=>{let i=e;return r.split(ic).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i},zx=e=>e.isThemeGetter,Ix=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,i=new Map,a=new Map;const l=(u,c)=>{i.set(u,c),r++,r>e&&(r=0,a=i,i=new Map)};return{get(u){let c=i.get(u);if(c!==void 0)return c;if((c=a.get(u))!==void 0)return l(u,c),c},set(u,c){i.has(u)?i.set(u,c):l(u,c)}}},Mu="!",Au=":",Lx=Au.length,_x=e=>{const{prefix:r,experimentalParseClassName:i}=e;let a=l=>{const u=[];let c=0,f=0,h=0,m;for(let z=0;z<l.length;z++){let P=l[z];if(c===0&&f===0){if(P===Au){u.push(l.slice(h,z)),h=z+Lx;continue}if(P==="/"){m=z;continue}}P==="["?c++:P==="]"?c--:P==="("?f++:P===")"&&f--}const g=u.length===0?l:l.substring(h),v=Mx(g),w=v!==g,y=m&&m>h?m-h:void 0;return{modifiers:u,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:y}};if(r){const l=r+Au,u=a;a=c=>c.startsWith(l)?u(c.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(i){const l=a;a=u=>i({className:u,parseClassName:l})}return a},Mx=e=>e.endsWith(Mu)?e.substring(0,e.length-1):e.startsWith(Mu)?e.substring(1):e,Ax=e=>{const r=Object.fromEntries(e.orderSensitiveModifiers.map(a=>[a,!0]));return a=>{if(a.length<=1)return a;const l=[];let u=[];return a.forEach(c=>{c[0]==="["||r[c]?(l.push(...u.sort(),c),u=[]):u.push(c)}),l.push(...u.sort()),l}},Ox=e=>({cache:Ix(e.cacheSize),parseClassName:_x(e),sortModifiers:Ax(e),...jx(e)}),Dx=/\s+/,Fx=(e,r)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:l,sortModifiers:u}=r,c=[],f=e.trim().split(Dx);let h="";for(let m=f.length-1;m>=0;m-=1){const g=f[m],{isExternal:v,modifiers:w,hasImportantModifier:y,baseClassName:z,maybePostfixModifierPosition:P}=i(g);if(v){h=g+(h.length>0?" "+h:h);continue}let C=!!P,j=a(C?z.substring(0,P):z);if(!j){if(!C){h=g+(h.length>0?" "+h:h);continue}if(j=a(z),!j){h=g+(h.length>0?" "+h:h);continue}C=!1}const A=u(w).join(":"),_=y?A+Mu:A,W=_+j;if(c.includes(W))continue;c.push(W);const H=l(j,C);for(let L=0;L<H.length;++L){const V=H[L];c.push(_+V)}h=g+(h.length>0?" "+h:h)}return h};function Bx(){let e=0,r,i,a="";for(;e<arguments.length;)(r=arguments[e++])&&(i=lh(r))&&(a&&(a+=" "),a+=i);return a}const lh=e=>{if(typeof e=="string")return e;let r,i="";for(let a=0;a<e.length;a++)e[a]&&(r=lh(e[a]))&&(i&&(i+=" "),i+=r);return i};function Ux(e,...r){let i,a,l,u=c;function c(h){const m=r.reduce((g,v)=>v(g),e());return i=Ox(m),a=i.cache.get,l=i.cache.set,u=f,f(h)}function f(h){const m=a(h);if(m)return m;const g=Fx(h,i);return l(h,g),g}return function(){return u(Bx.apply(null,arguments))}}const Je=e=>{const r=i=>i[e]||[];return r.isThemeGetter=!0,r},sh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,uh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$x=/^\d+\/\d+$/,Vx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Hx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Wx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Yx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,qr=e=>$x.test(e),Ne=e=>!!e&&!Number.isNaN(Number(e)),Yn=e=>!!e&&Number.isInteger(Number(e)),ou=e=>e.endsWith("%")&&Ne(e.slice(0,-1)),xn=e=>Vx.test(e),Gx=()=>!0,Qx=e=>Hx.test(e)&&!Wx.test(e),ch=()=>!1,Kx=e=>Yx.test(e),Xx=e=>qx.test(e),Jx=e=>!ce(e)&&!de(e),Zx=e=>oi(e,ph,ch),ce=e=>sh.test(e),fr=e=>oi(e,mh,Qx),au=e=>oi(e,ib,Ne),jp=e=>oi(e,dh,ch),eb=e=>oi(e,fh,Xx),za=e=>oi(e,hh,Kx),de=e=>uh.test(e),Xi=e=>ai(e,mh),tb=e=>ai(e,ob),Rp=e=>ai(e,dh),nb=e=>ai(e,ph),rb=e=>ai(e,fh),Ia=e=>ai(e,hh,!0),oi=(e,r,i)=>{const a=sh.exec(e);return a?a[1]?r(a[1]):i(a[2]):!1},ai=(e,r,i=!1)=>{const a=uh.exec(e);return a?a[1]?r(a[1]):i:!1},dh=e=>e==="position"||e==="percentage",fh=e=>e==="image"||e==="url",ph=e=>e==="length"||e==="size"||e==="bg-size",mh=e=>e==="length",ib=e=>e==="number",ob=e=>e==="family-name",hh=e=>e==="shadow",ab=()=>{const e=Je("color"),r=Je("font"),i=Je("text"),a=Je("font-weight"),l=Je("tracking"),u=Je("leading"),c=Je("breakpoint"),f=Je("container"),h=Je("spacing"),m=Je("radius"),g=Je("shadow"),v=Je("inset-shadow"),w=Je("text-shadow"),y=Je("drop-shadow"),z=Je("blur"),P=Je("perspective"),C=Je("aspect"),j=Je("ease"),A=Je("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],H=()=>[...W(),de,ce],L=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],Y=()=>[de,ce,h],Z=()=>[qr,"full","auto",...Y()],J=()=>[Yn,"none","subgrid",de,ce],te=()=>["auto",{span:["full",Yn,de,ce]},Yn,de,ce],ne=()=>[Yn,"auto",de,ce],xe=()=>["auto","min","max","fr",de,ce],ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],U=()=>["start","end","center","stretch","center-safe","end-safe"],re=()=>["auto",...Y()],me=()=>[qr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Y()],F=()=>[e,de,ce],le=()=>[...W(),Rp,jp,{position:[de,ce]}],S=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",nb,Zx,{size:[de,ce]}],B=()=>[ou,Xi,fr],E=()=>["","none","full",m,de,ce],ae=()=>["",Ne,Xi,fr],ge=()=>["solid","dashed","dotted","double"],he=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],be=()=>[Ne,ou,Rp,jp],Ee=()=>["","none",z,de,ce],Re=()=>["none",Ne,de,ce],De=()=>["none",Ne,de,ce],Et=()=>[Ne,de,ce],un=()=>[qr,"full",...Y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xn],breakpoint:[xn],color:[Gx],container:[xn],"drop-shadow":[xn],ease:["in","out","in-out"],font:[Jx],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xn],shadow:[xn],spacing:["px",Ne],text:[xn],"text-shadow":[xn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",qr,ce,de,C]}],container:["container"],columns:[{columns:[Ne,ce,de,f]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:H()}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Z()}],"inset-x":[{"inset-x":Z()}],"inset-y":[{"inset-y":Z()}],start:[{start:Z()}],end:[{end:Z()}],top:[{top:Z()}],right:[{right:Z()}],bottom:[{bottom:Z()}],left:[{left:Z()}],visibility:["visible","invisible","collapse"],z:[{z:[Yn,"auto",de,ce]}],basis:[{basis:[qr,"full","auto",f,...Y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ne,qr,"auto","initial","none",ce]}],grow:[{grow:["",Ne,de,ce]}],shrink:[{shrink:["",Ne,de,ce]}],order:[{order:[Yn,"first","last","none",de,ce]}],"grid-cols":[{"grid-cols":J()}],"col-start-end":[{col:te()}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":J()}],"row-start-end":[{row:te()}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":xe()}],"auto-rows":[{"auto-rows":xe()}],gap:[{gap:Y()}],"gap-x":[{"gap-x":Y()}],"gap-y":[{"gap-y":Y()}],"justify-content":[{justify:[...ie(),"normal"]}],"justify-items":[{"justify-items":[...U(),"normal"]}],"justify-self":[{"justify-self":["auto",...U()]}],"align-content":[{content:["normal",...ie()]}],"align-items":[{items:[...U(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...U(),{baseline:["","last"]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...U(),"baseline"]}],"place-self":[{"place-self":["auto",...U()]}],p:[{p:Y()}],px:[{px:Y()}],py:[{py:Y()}],ps:[{ps:Y()}],pe:[{pe:Y()}],pt:[{pt:Y()}],pr:[{pr:Y()}],pb:[{pb:Y()}],pl:[{pl:Y()}],m:[{m:re()}],mx:[{mx:re()}],my:[{my:re()}],ms:[{ms:re()}],me:[{me:re()}],mt:[{mt:re()}],mr:[{mr:re()}],mb:[{mb:re()}],ml:[{ml:re()}],"space-x":[{"space-x":Y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Y()}],"space-y-reverse":["space-y-reverse"],size:[{size:me()}],w:[{w:[f,"screen",...me()]}],"min-w":[{"min-w":[f,"screen","none",...me()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[c]},...me()]}],h:[{h:["screen",...me()]}],"min-h":[{"min-h":["screen","none",...me()]}],"max-h":[{"max-h":["screen",...me()]}],"font-size":[{text:["base",i,Xi,fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,de,au]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ou,ce]}],"font-family":[{font:[tb,ce,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,de,ce]}],"line-clamp":[{"line-clamp":[Ne,"none",de,au]}],leading:[{leading:[u,...Y()]}],"list-image":[{"list-image":["none",de,ce]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",de,ce]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ge(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ne,"from-font","auto",de,fr]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[Ne,"auto",de,ce]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",de,ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",de,ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:le()}],"bg-repeat":[{bg:S()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Yn,de,ce],radial:["",de,ce],conic:[Yn,de,ce]},rb,eb]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:B()}],"gradient-via-pos":[{via:B()}],"gradient-to-pos":[{to:B()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:E()}],"rounded-s":[{"rounded-s":E()}],"rounded-e":[{"rounded-e":E()}],"rounded-t":[{"rounded-t":E()}],"rounded-r":[{"rounded-r":E()}],"rounded-b":[{"rounded-b":E()}],"rounded-l":[{"rounded-l":E()}],"rounded-ss":[{"rounded-ss":E()}],"rounded-se":[{"rounded-se":E()}],"rounded-ee":[{"rounded-ee":E()}],"rounded-es":[{"rounded-es":E()}],"rounded-tl":[{"rounded-tl":E()}],"rounded-tr":[{"rounded-tr":E()}],"rounded-br":[{"rounded-br":E()}],"rounded-bl":[{"rounded-bl":E()}],"border-w":[{border:ae()}],"border-w-x":[{"border-x":ae()}],"border-w-y":[{"border-y":ae()}],"border-w-s":[{"border-s":ae()}],"border-w-e":[{"border-e":ae()}],"border-w-t":[{"border-t":ae()}],"border-w-r":[{"border-r":ae()}],"border-w-b":[{"border-b":ae()}],"border-w-l":[{"border-l":ae()}],"divide-x":[{"divide-x":ae()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ae()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ge(),"hidden","none"]}],"divide-style":[{divide:[...ge(),"hidden","none"]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...ge(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ne,de,ce]}],"outline-w":[{outline:["",Ne,Xi,fr]}],"outline-color":[{outline:F()}],shadow:[{shadow:["","none",g,Ia,za]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":["none",v,Ia,za]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[Ne,fr]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":ae()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":["none",w,Ia,za]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[Ne,de,ce]}],"mix-blend":[{"mix-blend":[...he(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":he()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ne]}],"mask-image-linear-from-pos":[{"mask-linear-from":be()}],"mask-image-linear-to-pos":[{"mask-linear-to":be()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":be()}],"mask-image-t-to-pos":[{"mask-t-to":be()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":be()}],"mask-image-r-to-pos":[{"mask-r-to":be()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":be()}],"mask-image-b-to-pos":[{"mask-b-to":be()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":be()}],"mask-image-l-to-pos":[{"mask-l-to":be()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":be()}],"mask-image-x-to-pos":[{"mask-x-to":be()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":be()}],"mask-image-y-to-pos":[{"mask-y-to":be()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[de,ce]}],"mask-image-radial-from-pos":[{"mask-radial-from":be()}],"mask-image-radial-to-pos":[{"mask-radial-to":be()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":W()}],"mask-image-conic-pos":[{"mask-conic":[Ne]}],"mask-image-conic-from-pos":[{"mask-conic-from":be()}],"mask-image-conic-to-pos":[{"mask-conic-to":be()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:le()}],"mask-repeat":[{mask:S()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",de,ce]}],filter:[{filter:["","none",de,ce]}],blur:[{blur:Ee()}],brightness:[{brightness:[Ne,de,ce]}],contrast:[{contrast:[Ne,de,ce]}],"drop-shadow":[{"drop-shadow":["","none",y,Ia,za]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:["",Ne,de,ce]}],"hue-rotate":[{"hue-rotate":[Ne,de,ce]}],invert:[{invert:["",Ne,de,ce]}],saturate:[{saturate:[Ne,de,ce]}],sepia:[{sepia:["",Ne,de,ce]}],"backdrop-filter":[{"backdrop-filter":["","none",de,ce]}],"backdrop-blur":[{"backdrop-blur":Ee()}],"backdrop-brightness":[{"backdrop-brightness":[Ne,de,ce]}],"backdrop-contrast":[{"backdrop-contrast":[Ne,de,ce]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ne,de,ce]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ne,de,ce]}],"backdrop-invert":[{"backdrop-invert":["",Ne,de,ce]}],"backdrop-opacity":[{"backdrop-opacity":[Ne,de,ce]}],"backdrop-saturate":[{"backdrop-saturate":[Ne,de,ce]}],"backdrop-sepia":[{"backdrop-sepia":["",Ne,de,ce]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Y()}],"border-spacing-x":[{"border-spacing-x":Y()}],"border-spacing-y":[{"border-spacing-y":Y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",de,ce]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ne,"initial",de,ce]}],ease:[{ease:["linear","initial",j,de,ce]}],delay:[{delay:[Ne,de,ce]}],animate:[{animate:["none",A,de,ce]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[P,de,ce]}],"perspective-origin":[{"perspective-origin":H()}],rotate:[{rotate:Re()}],"rotate-x":[{"rotate-x":Re()}],"rotate-y":[{"rotate-y":Re()}],"rotate-z":[{"rotate-z":Re()}],scale:[{scale:De()}],"scale-x":[{"scale-x":De()}],"scale-y":[{"scale-y":De()}],"scale-z":[{"scale-z":De()}],"scale-3d":["scale-3d"],skew:[{skew:Et()}],"skew-x":[{"skew-x":Et()}],"skew-y":[{"skew-y":Et()}],transform:[{transform:[de,ce,"","none","gpu","cpu"]}],"transform-origin":[{origin:H()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:un()}],"translate-x":[{"translate-x":un()}],"translate-y":[{"translate-y":un()}],"translate-z":[{"translate-z":un()}],"translate-none":["translate-none"],accent:[{accent:F()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",de,ce]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Y()}],"scroll-mx":[{"scroll-mx":Y()}],"scroll-my":[{"scroll-my":Y()}],"scroll-ms":[{"scroll-ms":Y()}],"scroll-me":[{"scroll-me":Y()}],"scroll-mt":[{"scroll-mt":Y()}],"scroll-mr":[{"scroll-mr":Y()}],"scroll-mb":[{"scroll-mb":Y()}],"scroll-ml":[{"scroll-ml":Y()}],"scroll-p":[{"scroll-p":Y()}],"scroll-px":[{"scroll-px":Y()}],"scroll-py":[{"scroll-py":Y()}],"scroll-ps":[{"scroll-ps":Y()}],"scroll-pe":[{"scroll-pe":Y()}],"scroll-pt":[{"scroll-pt":Y()}],"scroll-pr":[{"scroll-pr":Y()}],"scroll-pb":[{"scroll-pb":Y()}],"scroll-pl":[{"scroll-pl":Y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",de,ce]}],fill:[{fill:["none",...F()]}],"stroke-w":[{stroke:[Ne,Xi,fr,au]}],stroke:[{stroke:["none",...F()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},lb=Ux(ab);function yr(...e){return lb(oh(e))}const sb=Px("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function mt({className:e,variant:r,size:i,asChild:a=!1,...l}){const u=a?ol:"button";return b.jsx(u,{"data-slot":"button",className:yr(sb({variant:r,size:i,className:e})),...l})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,a)=>a?a.toUpperCase():i.toLowerCase()),Tp=e=>{const r=cb(e);return r.charAt(0).toUpperCase()+r.slice(1)},gh=(...e)=>e.filter((r,i,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var db={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=k.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:u,iconNode:c,...f},h)=>k.createElement("svg",{ref:h,...db,width:r,height:r,stroke:e,strokeWidth:a?Number(i)*24/Number(r):i,className:gh("lucide",l),...f},[...c.map(([m,g])=>k.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(e,r)=>{const i=k.forwardRef(({className:a,...l},u)=>k.createElement(fb,{ref:u,iconNode:r,className:gh(`lucide-${ub(Tp(e))}`,`lucide-${e}`,a),...l}));return i.displayName=Tp(e),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],mb=at("arrow-up",pb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],gb=at("book",hb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yb=at("chevron-down",vb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],bb=at("download",xb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kb=at("eye",wb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Eb=at("graduation-cap",Sb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Nb=at("lightbulb",Cb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],so=at("loader",Pb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Rb=at("menu",jb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],zp=at("message-square",Tb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Ib=at("panels-top-left",zb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],vh=at("play",Lb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Mb=at("sparkles",_b);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Ob=at("target",Ab);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Fb=at("trophy",Db);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yh=at("x",Bb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$b=at("zap",Ub);function Qn(e,r,{checkForDefaultPrevented:i=!0}={}){return function(l){if(e==null||e(l),i===!1||!l.defaultPrevented)return r==null?void 0:r(l)}}function Vb(e,r){const i=k.createContext(r),a=u=>{const{children:c,...f}=u,h=k.useMemo(()=>f,Object.values(f));return b.jsx(i.Provider,{value:h,children:c})};a.displayName=e+"Provider";function l(u){const c=k.useContext(i);if(c)return c;if(r!==void 0)return r;throw new Error(`\`${u}\` must be used within \`${e}\``)}return[a,l]}function Hb(e,r=[]){let i=[];function a(u,c){const f=k.createContext(c),h=i.length;i=[...i,c];const m=v=>{var j;const{scope:w,children:y,...z}=v,P=((j=w==null?void 0:w[e])==null?void 0:j[h])||f,C=k.useMemo(()=>z,Object.values(z));return b.jsx(P.Provider,{value:C,children:y})};m.displayName=u+"Provider";function g(v,w){var P;const y=((P=w==null?void 0:w[e])==null?void 0:P[h])||f,z=k.useContext(y);if(z)return z;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${u}\``)}return[m,g]}const l=()=>{const u=i.map(c=>k.createContext(c));return function(f){const h=(f==null?void 0:f[e])||u;return k.useMemo(()=>({[`__scope${e}`]:{...f,[e]:h}}),[f,h])}};return l.scopeName=e,[a,Wb(l,...r)]}function Wb(...e){const r=e[0];if(e.length===1)return r;const i=()=>{const a=e.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(u){const c=a.reduce((f,{useScope:h,scopeName:m})=>{const v=h(u)[`__scope${m}`];return{...f,...v}},{});return k.useMemo(()=>({[`__scope${r.scopeName}`]:c}),[c])}};return i.scopeName=r.scopeName,i}var Xa=globalThis!=null&&globalThis.document?k.useLayoutEffect:()=>{},Yb=Hy.useId||(()=>{}),qb=0;function lu(e){const[r,i]=k.useState(Yb());return Xa(()=>{i(a=>a??String(qb++))},[e]),e||(r?`radix-${r}`:"")}function mr(e){const r=k.useRef(e);return k.useEffect(()=>{r.current=e}),k.useMemo(()=>(...i)=>{var a;return(a=r.current)==null?void 0:a.call(r,...i)},[])}function Gb({prop:e,defaultProp:r,onChange:i=()=>{}}){const[a,l]=Qb({defaultProp:r,onChange:i}),u=e!==void 0,c=u?e:a,f=mr(i),h=k.useCallback(m=>{if(u){const v=typeof m=="function"?m(e):m;v!==e&&f(v)}else l(m)},[u,e,l,f]);return[c,h]}function Qb({defaultProp:e,onChange:r}){const i=k.useState(e),[a]=i,l=k.useRef(a),u=mr(r);return k.useEffect(()=>{l.current!==a&&(u(a),l.current=a)},[a,l,u]),i}var Kb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Sn=Kb.reduce((e,r)=>{const i=k.forwardRef((a,l)=>{const{asChild:u,...c}=a,f=u?ol:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(f,{...c,ref:l})});return i.displayName=`Primitive.${r}`,{...e,[r]:i}},{});function Xb(e,r){e&&nh.flushSync(()=>e.dispatchEvent(r))}function Jb(e,r=globalThis==null?void 0:globalThis.document){const i=mr(e);k.useEffect(()=>{const a=l=>{l.key==="Escape"&&i(l)};return r.addEventListener("keydown",a,{capture:!0}),()=>r.removeEventListener("keydown",a,{capture:!0})},[i,r])}var Zb="DismissableLayer",Ou="dismissableLayer.update",ew="dismissableLayer.pointerDownOutside",tw="dismissableLayer.focusOutside",Ip,xh=k.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),bh=k.forwardRef((e,r)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:c,onDismiss:f,...h}=e,m=k.useContext(xh),[g,v]=k.useState(null),w=(g==null?void 0:g.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=k.useState({}),z=vr(r,V=>v(V)),P=Array.from(m.layers),[C]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),j=P.indexOf(C),A=g?P.indexOf(g):-1,_=m.layersWithOutsidePointerEventsDisabled.size>0,W=A>=j,H=iw(V=>{const Y=V.target,Z=[...m.branches].some(J=>J.contains(Y));!W||Z||(l==null||l(V),c==null||c(V),V.defaultPrevented||f==null||f())},w),L=ow(V=>{const Y=V.target;[...m.branches].some(J=>J.contains(Y))||(u==null||u(V),c==null||c(V),V.defaultPrevented||f==null||f())},w);return Jb(V=>{A===m.layers.size-1&&(a==null||a(V),!V.defaultPrevented&&f&&(V.preventDefault(),f()))},w),k.useEffect(()=>{if(g)return i&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Ip=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(g)),m.layers.add(g),Lp(),()=>{i&&m.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=Ip)}},[g,w,i,m]),k.useEffect(()=>()=>{g&&(m.layers.delete(g),m.layersWithOutsidePointerEventsDisabled.delete(g),Lp())},[g,m]),k.useEffect(()=>{const V=()=>y({});return document.addEventListener(Ou,V),()=>document.removeEventListener(Ou,V)},[]),b.jsx(Sn.div,{...h,ref:z,style:{pointerEvents:_?W?"auto":"none":void 0,...e.style},onFocusCapture:Qn(e.onFocusCapture,L.onFocusCapture),onBlurCapture:Qn(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:Qn(e.onPointerDownCapture,H.onPointerDownCapture)})});bh.displayName=Zb;var nw="DismissableLayerBranch",rw=k.forwardRef((e,r)=>{const i=k.useContext(xh),a=k.useRef(null),l=vr(r,a);return k.useEffect(()=>{const u=a.current;if(u)return i.branches.add(u),()=>{i.branches.delete(u)}},[i.branches]),b.jsx(Sn.div,{...e,ref:l})});rw.displayName=nw;function iw(e,r=globalThis==null?void 0:globalThis.document){const i=mr(e),a=k.useRef(!1),l=k.useRef(()=>{});return k.useEffect(()=>{const u=f=>{if(f.target&&!a.current){let h=function(){wh(ew,i,m,{discrete:!0})};const m={originalEvent:f};f.pointerType==="touch"?(r.removeEventListener("click",l.current),l.current=h,r.addEventListener("click",l.current,{once:!0})):h()}else r.removeEventListener("click",l.current);a.current=!1},c=window.setTimeout(()=>{r.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(c),r.removeEventListener("pointerdown",u),r.removeEventListener("click",l.current)}},[r,i]),{onPointerDownCapture:()=>a.current=!0}}function ow(e,r=globalThis==null?void 0:globalThis.document){const i=mr(e),a=k.useRef(!1);return k.useEffect(()=>{const l=u=>{u.target&&!a.current&&wh(tw,i,{originalEvent:u},{discrete:!1})};return r.addEventListener("focusin",l),()=>r.removeEventListener("focusin",l)},[r,i]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function Lp(){const e=new CustomEvent(Ou);document.dispatchEvent(e)}function wh(e,r,i,{discrete:a}){const l=i.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:i});r&&l.addEventListener(e,r,{once:!0}),a?Xb(l,u):l.dispatchEvent(u)}var su="focusScope.autoFocusOnMount",uu="focusScope.autoFocusOnUnmount",_p={bubbles:!1,cancelable:!0},aw="FocusScope",kh=k.forwardRef((e,r)=>{const{loop:i=!1,trapped:a=!1,onMountAutoFocus:l,onUnmountAutoFocus:u,...c}=e,[f,h]=k.useState(null),m=mr(l),g=mr(u),v=k.useRef(null),w=vr(r,P=>h(P)),y=k.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;k.useEffect(()=>{if(a){let P=function(_){if(y.paused||!f)return;const W=_.target;f.contains(W)?v.current=W:Gn(v.current,{select:!0})},C=function(_){if(y.paused||!f)return;const W=_.relatedTarget;W!==null&&(f.contains(W)||Gn(v.current,{select:!0}))},j=function(_){if(document.activeElement===document.body)for(const H of _)H.removedNodes.length>0&&Gn(f)};document.addEventListener("focusin",P),document.addEventListener("focusout",C);const A=new MutationObserver(j);return f&&A.observe(f,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",P),document.removeEventListener("focusout",C),A.disconnect()}}},[a,f,y.paused]),k.useEffect(()=>{if(f){Ap.add(y);const P=document.activeElement;if(!f.contains(P)){const j=new CustomEvent(su,_p);f.addEventListener(su,m),f.dispatchEvent(j),j.defaultPrevented||(lw(fw(Sh(f)),{select:!0}),document.activeElement===P&&Gn(f))}return()=>{f.removeEventListener(su,m),setTimeout(()=>{const j=new CustomEvent(uu,_p);f.addEventListener(uu,g),f.dispatchEvent(j),j.defaultPrevented||Gn(P??document.body,{select:!0}),f.removeEventListener(uu,g),Ap.remove(y)},0)}}},[f,m,g,y]);const z=k.useCallback(P=>{if(!i&&!a||y.paused)return;const C=P.key==="Tab"&&!P.altKey&&!P.ctrlKey&&!P.metaKey,j=document.activeElement;if(C&&j){const A=P.currentTarget,[_,W]=sw(A);_&&W?!P.shiftKey&&j===W?(P.preventDefault(),i&&Gn(_,{select:!0})):P.shiftKey&&j===_&&(P.preventDefault(),i&&Gn(W,{select:!0})):j===A&&P.preventDefault()}},[i,a,y.paused]);return b.jsx(Sn.div,{tabIndex:-1,...c,ref:w,onKeyDown:z})});kh.displayName=aw;function lw(e,{select:r=!1}={}){const i=document.activeElement;for(const a of e)if(Gn(a,{select:r}),document.activeElement!==i)return}function sw(e){const r=Sh(e),i=Mp(r,e),a=Mp(r.reverse(),e);return[i,a]}function Sh(e){const r=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const l=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||l?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)r.push(i.currentNode);return r}function Mp(e,r){for(const i of e)if(!uw(i,{upTo:r}))return i}function uw(e,{upTo:r}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(r!==void 0&&e===r)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function cw(e){return e instanceof HTMLInputElement&&"select"in e}function Gn(e,{select:r=!1}={}){if(e&&e.focus){const i=document.activeElement;e.focus({preventScroll:!0}),e!==i&&cw(e)&&r&&e.select()}}var Ap=dw();function dw(){let e=[];return{add(r){const i=e[0];r!==i&&(i==null||i.pause()),e=Op(e,r),e.unshift(r)},remove(r){var i;e=Op(e,r),(i=e[0])==null||i.resume()}}}function Op(e,r){const i=[...e],a=i.indexOf(r);return a!==-1&&i.splice(a,1),i}function fw(e){return e.filter(r=>r.tagName!=="A")}var pw="Portal",Eh=k.forwardRef((e,r)=>{var f;const{container:i,...a}=e,[l,u]=k.useState(!1);Xa(()=>u(!0),[]);const c=i||l&&((f=globalThis==null?void 0:globalThis.document)==null?void 0:f.body);return c?kx.createPortal(b.jsx(Sn.div,{...a,ref:r}),c):null});Eh.displayName=pw;function mw(e,r){return k.useReducer((i,a)=>r[i][a]??i,e)}var al=e=>{const{present:r,children:i}=e,a=hw(r),l=typeof i=="function"?i({present:a.isPresent}):k.Children.only(i),u=vr(a.ref,gw(l));return typeof i=="function"||a.isPresent?k.cloneElement(l,{ref:u}):null};al.displayName="Presence";function hw(e){const[r,i]=k.useState(),a=k.useRef({}),l=k.useRef(e),u=k.useRef("none"),c=e?"mounted":"unmounted",[f,h]=mw(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return k.useEffect(()=>{const m=La(a.current);u.current=f==="mounted"?m:"none"},[f]),Xa(()=>{const m=a.current,g=l.current;if(g!==e){const w=u.current,y=La(m);e?h("MOUNT"):y==="none"||(m==null?void 0:m.display)==="none"?h("UNMOUNT"):h(g&&w!==y?"ANIMATION_OUT":"UNMOUNT"),l.current=e}},[e,h]),Xa(()=>{if(r){let m;const g=r.ownerDocument.defaultView??window,v=y=>{const P=La(a.current).includes(y.animationName);if(y.target===r&&P&&(h("ANIMATION_END"),!l.current)){const C=r.style.animationFillMode;r.style.animationFillMode="forwards",m=g.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=C)})}},w=y=>{y.target===r&&(u.current=La(a.current))};return r.addEventListener("animationstart",w),r.addEventListener("animationcancel",v),r.addEventListener("animationend",v),()=>{g.clearTimeout(m),r.removeEventListener("animationstart",w),r.removeEventListener("animationcancel",v),r.removeEventListener("animationend",v)}}else h("ANIMATION_END")},[r,h]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:k.useCallback(m=>{m&&(a.current=getComputedStyle(m)),i(m)},[])}}function La(e){return(e==null?void 0:e.animationName)||"none"}function gw(e){var a,l;let r=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?e.ref:(r=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,i=r&&"isReactWarning"in r&&r.isReactWarning,i?e.props.ref:e.props.ref||e.ref)}var cu=0;function vw(){k.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Dp()),document.body.insertAdjacentElement("beforeend",e[1]??Dp()),cu++,()=>{cu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),cu--}},[])}function Dp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var on=function(){return on=Object.assign||function(r){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(r[u]=i[u])}return r},on.apply(this,arguments)};function Ch(e,r){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(i[a[l]]=e[a[l]]);return i}function yw(e,r,i){if(i||arguments.length===2)for(var a=0,l=r.length,u;a<l;a++)(u||!(a in r))&&(u||(u=Array.prototype.slice.call(r,0,a)),u[a]=r[a]);return e.concat(u||Array.prototype.slice.call(r))}var Ya="right-scroll-bar-position",qa="width-before-scroll-bar",xw="with-scroll-bars-hidden",bw="--removed-body-scroll-bar-size";function du(e,r){return typeof e=="function"?e(r):e&&(e.current=r),e}function ww(e,r){var i=k.useState(function(){return{value:e,callback:r,facade:{get current(){return i.value},set current(a){var l=i.value;l!==a&&(i.value=a,i.callback(a,l))}}}})[0];return i.callback=r,i.facade}var kw=typeof window<"u"?k.useLayoutEffect:k.useEffect,Fp=new WeakMap;function Sw(e,r){var i=ww(null,function(a){return e.forEach(function(l){return du(l,a)})});return kw(function(){var a=Fp.get(i);if(a){var l=new Set(a),u=new Set(e),c=i.current;l.forEach(function(f){u.has(f)||du(f,null)}),u.forEach(function(f){l.has(f)||du(f,c)})}Fp.set(i,e)},[e]),i}function Ew(e){return e}function Cw(e,r){r===void 0&&(r=Ew);var i=[],a=!1,l={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:e},useMedium:function(u){var c=r(u,a);return i.push(c),function(){i=i.filter(function(f){return f!==c})}},assignSyncMedium:function(u){for(a=!0;i.length;){var c=i;i=[],c.forEach(u)}i={push:function(f){return u(f)},filter:function(){return i}}},assignMedium:function(u){a=!0;var c=[];if(i.length){var f=i;i=[],f.forEach(u),c=i}var h=function(){var g=c;c=[],g.forEach(u)},m=function(){return Promise.resolve().then(h)};m(),i={push:function(g){c.push(g),m()},filter:function(g){return c=c.filter(g),i}}}};return l}function Nw(e){e===void 0&&(e={});var r=Cw(null);return r.options=on({async:!0,ssr:!1},e),r}var Nh=function(e){var r=e.sideCar,i=Ch(e,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=r.read();if(!a)throw new Error("Sidecar medium not found");return k.createElement(a,on({},i))};Nh.isSideCarExport=!0;function Pw(e,r){return e.useMedium(r),Nh}var Ph=Nw(),fu=function(){},ll=k.forwardRef(function(e,r){var i=k.useRef(null),a=k.useState({onScrollCapture:fu,onWheelCapture:fu,onTouchMoveCapture:fu}),l=a[0],u=a[1],c=e.forwardProps,f=e.children,h=e.className,m=e.removeScrollBar,g=e.enabled,v=e.shards,w=e.sideCar,y=e.noRelative,z=e.noIsolation,P=e.inert,C=e.allowPinchZoom,j=e.as,A=j===void 0?"div":j,_=e.gapMode,W=Ch(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),H=w,L=Sw([i,r]),V=on(on({},W),l);return k.createElement(k.Fragment,null,g&&k.createElement(H,{sideCar:Ph,removeScrollBar:m,shards:v,noRelative:y,noIsolation:z,inert:P,setCallbacks:u,allowPinchZoom:!!C,lockRef:i,gapMode:_}),c?k.cloneElement(k.Children.only(f),on(on({},V),{ref:L})):k.createElement(A,on({},V,{className:h,ref:L}),f))});ll.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ll.classNames={fullWidth:qa,zeroRight:Ya};var jw=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Rw(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var r=jw();return r&&e.setAttribute("nonce",r),e}function Tw(e,r){e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}function zw(e){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(e)}var Iw=function(){var e=0,r=null;return{add:function(i){e==0&&(r=Rw())&&(Tw(r,i),zw(r)),e++},remove:function(){e--,!e&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},Lw=function(){var e=Iw();return function(r,i){k.useEffect(function(){return e.add(r),function(){e.remove()}},[r&&i])}},jh=function(){var e=Lw(),r=function(i){var a=i.styles,l=i.dynamic;return e(a,l),null};return r},_w={left:0,top:0,right:0,gap:0},pu=function(e){return parseInt(e||"",10)||0},Mw=function(e){var r=window.getComputedStyle(document.body),i=r[e==="padding"?"paddingLeft":"marginLeft"],a=r[e==="padding"?"paddingTop":"marginTop"],l=r[e==="padding"?"paddingRight":"marginRight"];return[pu(i),pu(a),pu(l)]},Aw=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return _w;var r=Mw(e),i=document.documentElement.clientWidth,a=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,a-i+r[2]-r[0])}},Ow=jh(),ei="data-scroll-locked",Dw=function(e,r,i,a){var l=e.left,u=e.top,c=e.right,f=e.gap;return i===void 0&&(i="margin"),`
  .`.concat(xw,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(f,"px ").concat(a,`;
  }
  body[`).concat(ei,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(a,";"),i==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f,"px ").concat(a,`;
    `),i==="padding"&&"padding-right: ".concat(f,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Ya,` {
    right: `).concat(f,"px ").concat(a,`;
  }
  
  .`).concat(qa,` {
    margin-right: `).concat(f,"px ").concat(a,`;
  }
  
  .`).concat(Ya," .").concat(Ya,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(qa," .").concat(qa,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(ei,`] {
    `).concat(bw,": ").concat(f,`px;
  }
`)},Bp=function(){var e=parseInt(document.body.getAttribute(ei)||"0",10);return isFinite(e)?e:0},Fw=function(){k.useEffect(function(){return document.body.setAttribute(ei,(Bp()+1).toString()),function(){var e=Bp()-1;e<=0?document.body.removeAttribute(ei):document.body.setAttribute(ei,e.toString())}},[])},Bw=function(e){var r=e.noRelative,i=e.noImportant,a=e.gapMode,l=a===void 0?"margin":a;Fw();var u=k.useMemo(function(){return Aw(l)},[l]);return k.createElement(Ow,{styles:Dw(u,!r,l,i?"":"!important")})},Du=!1;if(typeof window<"u")try{var _a=Object.defineProperty({},"passive",{get:function(){return Du=!0,!0}});window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{Du=!1}var Gr=Du?{passive:!1}:!1,Uw=function(e){return e.tagName==="TEXTAREA"},Rh=function(e,r){if(!(e instanceof Element))return!1;var i=window.getComputedStyle(e);return i[r]!=="hidden"&&!(i.overflowY===i.overflowX&&!Uw(e)&&i[r]==="visible")},$w=function(e){return Rh(e,"overflowY")},Vw=function(e){return Rh(e,"overflowX")},Up=function(e,r){var i=r.ownerDocument,a=r;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var l=Th(e,a);if(l){var u=zh(e,a),c=u[1],f=u[2];if(c>f)return!0}a=a.parentNode}while(a&&a!==i.body);return!1},Hw=function(e){var r=e.scrollTop,i=e.scrollHeight,a=e.clientHeight;return[r,i,a]},Ww=function(e){var r=e.scrollLeft,i=e.scrollWidth,a=e.clientWidth;return[r,i,a]},Th=function(e,r){return e==="v"?$w(r):Vw(r)},zh=function(e,r){return e==="v"?Hw(r):Ww(r)},Yw=function(e,r){return e==="h"&&r==="rtl"?-1:1},qw=function(e,r,i,a,l){var u=Yw(e,window.getComputedStyle(r).direction),c=u*a,f=i.target,h=r.contains(f),m=!1,g=c>0,v=0,w=0;do{if(!f)break;var y=zh(e,f),z=y[0],P=y[1],C=y[2],j=P-C-u*z;(z||j)&&Th(e,f)&&(v+=j,w+=z);var A=f.parentNode;f=A&&A.nodeType===Node.DOCUMENT_FRAGMENT_NODE?A.host:A}while(!h&&f!==document.body||h&&(r.contains(f)||r===f));return(g&&Math.abs(v)<1||!g&&Math.abs(w)<1)&&(m=!0),m},Ma=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},$p=function(e){return[e.deltaX,e.deltaY]},Vp=function(e){return e&&"current"in e?e.current:e},Gw=function(e,r){return e[0]===r[0]&&e[1]===r[1]},Qw=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Kw=0,Qr=[];function Xw(e){var r=k.useRef([]),i=k.useRef([0,0]),a=k.useRef(),l=k.useState(Kw++)[0],u=k.useState(jh)[0],c=k.useRef(e);k.useEffect(function(){c.current=e},[e]),k.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var P=yw([e.lockRef.current],(e.shards||[]).map(Vp),!0).filter(Boolean);return P.forEach(function(C){return C.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),P.forEach(function(C){return C.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var f=k.useCallback(function(P,C){if("touches"in P&&P.touches.length===2||P.type==="wheel"&&P.ctrlKey)return!c.current.allowPinchZoom;var j=Ma(P),A=i.current,_="deltaX"in P?P.deltaX:A[0]-j[0],W="deltaY"in P?P.deltaY:A[1]-j[1],H,L=P.target,V=Math.abs(_)>Math.abs(W)?"h":"v";if("touches"in P&&V==="h"&&L.type==="range")return!1;var Y=window.getSelection(),Z=Y&&Y.anchorNode,J=Z?Z===L||Z.contains(L):!1;if(J)return!1;var te=Up(V,L);if(!te)return!0;if(te?H=V:(H=V==="v"?"h":"v",te=Up(V,L)),!te)return!1;if(!a.current&&"changedTouches"in P&&(_||W)&&(a.current=H),!H)return!0;var ne=a.current||H;return qw(ne,C,P,ne==="h"?_:W)},[]),h=k.useCallback(function(P){var C=P;if(!(!Qr.length||Qr[Qr.length-1]!==u)){var j="deltaY"in C?$p(C):Ma(C),A=r.current.filter(function(H){return H.name===C.type&&(H.target===C.target||C.target===H.shadowParent)&&Gw(H.delta,j)})[0];if(A&&A.should){C.cancelable&&C.preventDefault();return}if(!A){var _=(c.current.shards||[]).map(Vp).filter(Boolean).filter(function(H){return H.contains(C.target)}),W=_.length>0?f(C,_[0]):!c.current.noIsolation;W&&C.cancelable&&C.preventDefault()}}},[]),m=k.useCallback(function(P,C,j,A){var _={name:P,delta:C,target:j,should:A,shadowParent:Jw(j)};r.current.push(_),setTimeout(function(){r.current=r.current.filter(function(W){return W!==_})},1)},[]),g=k.useCallback(function(P){i.current=Ma(P),a.current=void 0},[]),v=k.useCallback(function(P){m(P.type,$p(P),P.target,f(P,e.lockRef.current))},[]),w=k.useCallback(function(P){m(P.type,Ma(P),P.target,f(P,e.lockRef.current))},[]);k.useEffect(function(){return Qr.push(u),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:w}),document.addEventListener("wheel",h,Gr),document.addEventListener("touchmove",h,Gr),document.addEventListener("touchstart",g,Gr),function(){Qr=Qr.filter(function(P){return P!==u}),document.removeEventListener("wheel",h,Gr),document.removeEventListener("touchmove",h,Gr),document.removeEventListener("touchstart",g,Gr)}},[]);var y=e.removeScrollBar,z=e.inert;return k.createElement(k.Fragment,null,z?k.createElement(u,{styles:Qw(l)}):null,y?k.createElement(Bw,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Jw(e){for(var r=null;e!==null;)e instanceof ShadowRoot&&(r=e.host,e=e.host),e=e.parentNode;return r}const Zw=Pw(Ph,Xw);var Ih=k.forwardRef(function(e,r){return k.createElement(ll,on({},e,{ref:r,sideCar:Zw}))});Ih.classNames=ll.classNames;var e1=function(e){if(typeof document>"u")return null;var r=Array.isArray(e)?e[0]:e;return r.ownerDocument.body},Kr=new WeakMap,Aa=new WeakMap,Oa={},mu=0,Lh=function(e){return e&&(e.host||Lh(e.parentNode))},t1=function(e,r){return r.map(function(i){if(e.contains(i))return i;var a=Lh(i);return a&&e.contains(a)?a:(console.error("aria-hidden",i,"in not contained inside",e,". Doing nothing"),null)}).filter(function(i){return!!i})},n1=function(e,r,i,a){var l=t1(r,Array.isArray(e)?e:[e]);Oa[i]||(Oa[i]=new WeakMap);var u=Oa[i],c=[],f=new Set,h=new Set(l),m=function(v){!v||f.has(v)||(f.add(v),m(v.parentNode))};l.forEach(m);var g=function(v){!v||h.has(v)||Array.prototype.forEach.call(v.children,function(w){if(f.has(w))g(w);else try{var y=w.getAttribute(a),z=y!==null&&y!=="false",P=(Kr.get(w)||0)+1,C=(u.get(w)||0)+1;Kr.set(w,P),u.set(w,C),c.push(w),P===1&&z&&Aa.set(w,!0),C===1&&w.setAttribute(i,"true"),z||w.setAttribute(a,"true")}catch(j){console.error("aria-hidden: cannot operate on ",w,j)}})};return g(r),f.clear(),mu++,function(){c.forEach(function(v){var w=Kr.get(v)-1,y=u.get(v)-1;Kr.set(v,w),u.set(v,y),w||(Aa.has(v)||v.removeAttribute(a),Aa.delete(v)),y||v.removeAttribute(i)}),mu--,mu||(Kr=new WeakMap,Kr=new WeakMap,Aa=new WeakMap,Oa={})}},r1=function(e,r,i){i===void 0&&(i="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),l=e1(e);return l?(a.push.apply(a,Array.from(l.querySelectorAll("[aria-live], script"))),n1(a,l,i,"aria-hidden")):function(){return null}},oc="Dialog",[_h]=Hb(oc),[i1,Kt]=_h(oc),Mh=e=>{const{__scopeDialog:r,children:i,open:a,defaultOpen:l,onOpenChange:u,modal:c=!0}=e,f=k.useRef(null),h=k.useRef(null),[m=!1,g]=Gb({prop:a,defaultProp:l,onChange:u});return b.jsx(i1,{scope:r,triggerRef:f,contentRef:h,contentId:lu(),titleId:lu(),descriptionId:lu(),open:m,onOpenChange:g,onOpenToggle:k.useCallback(()=>g(v=>!v),[g]),modal:c,children:i})};Mh.displayName=oc;var Ah="DialogTrigger",Oh=k.forwardRef((e,r)=>{const{__scopeDialog:i,...a}=e,l=Kt(Ah,i),u=vr(r,l.triggerRef);return b.jsx(Sn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":sc(l.open),...a,ref:u,onClick:Qn(e.onClick,l.onOpenToggle)})});Oh.displayName=Ah;var ac="DialogPortal",[o1,Dh]=_h(ac,{forceMount:void 0}),Fh=e=>{const{__scopeDialog:r,forceMount:i,children:a,container:l}=e,u=Kt(ac,r);return b.jsx(o1,{scope:r,forceMount:i,children:k.Children.map(a,c=>b.jsx(al,{present:i||u.open,children:b.jsx(Eh,{asChild:!0,container:l,children:c})}))})};Fh.displayName=ac;var Ja="DialogOverlay",Bh=k.forwardRef((e,r)=>{const i=Dh(Ja,e.__scopeDialog),{forceMount:a=i.forceMount,...l}=e,u=Kt(Ja,e.__scopeDialog);return u.modal?b.jsx(al,{present:a||u.open,children:b.jsx(a1,{...l,ref:r})}):null});Bh.displayName=Ja;var a1=k.forwardRef((e,r)=>{const{__scopeDialog:i,...a}=e,l=Kt(Ja,i);return b.jsx(Ih,{as:ol,allowPinchZoom:!0,shards:[l.contentRef],children:b.jsx(Sn.div,{"data-state":sc(l.open),...a,ref:r,style:{pointerEvents:"auto",...a.style}})})}),hr="DialogContent",Uh=k.forwardRef((e,r)=>{const i=Dh(hr,e.__scopeDialog),{forceMount:a=i.forceMount,...l}=e,u=Kt(hr,e.__scopeDialog);return b.jsx(al,{present:a||u.open,children:u.modal?b.jsx(l1,{...l,ref:r}):b.jsx(s1,{...l,ref:r})})});Uh.displayName=hr;var l1=k.forwardRef((e,r)=>{const i=Kt(hr,e.__scopeDialog),a=k.useRef(null),l=vr(r,i.contentRef,a);return k.useEffect(()=>{const u=a.current;if(u)return r1(u)},[]),b.jsx($h,{...e,ref:l,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Qn(e.onCloseAutoFocus,u=>{var c;u.preventDefault(),(c=i.triggerRef.current)==null||c.focus()}),onPointerDownOutside:Qn(e.onPointerDownOutside,u=>{const c=u.detail.originalEvent,f=c.button===0&&c.ctrlKey===!0;(c.button===2||f)&&u.preventDefault()}),onFocusOutside:Qn(e.onFocusOutside,u=>u.preventDefault())})}),s1=k.forwardRef((e,r)=>{const i=Kt(hr,e.__scopeDialog),a=k.useRef(!1),l=k.useRef(!1);return b.jsx($h,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:u=>{var c,f;(c=e.onCloseAutoFocus)==null||c.call(e,u),u.defaultPrevented||(a.current||(f=i.triggerRef.current)==null||f.focus(),u.preventDefault()),a.current=!1,l.current=!1},onInteractOutside:u=>{var h,m;(h=e.onInteractOutside)==null||h.call(e,u),u.defaultPrevented||(a.current=!0,u.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const c=u.target;((m=i.triggerRef.current)==null?void 0:m.contains(c))&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&l.current&&u.preventDefault()}})}),$h=k.forwardRef((e,r)=>{const{__scopeDialog:i,trapFocus:a,onOpenAutoFocus:l,onCloseAutoFocus:u,...c}=e,f=Kt(hr,i),h=k.useRef(null),m=vr(r,h);return vw(),b.jsxs(b.Fragment,{children:[b.jsx(kh,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:l,onUnmountAutoFocus:u,children:b.jsx(bh,{role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":sc(f.open),...c,ref:m,onDismiss:()=>f.onOpenChange(!1)})}),b.jsxs(b.Fragment,{children:[b.jsx(u1,{titleId:f.titleId}),b.jsx(d1,{contentRef:h,descriptionId:f.descriptionId})]})]})}),lc="DialogTitle",Vh=k.forwardRef((e,r)=>{const{__scopeDialog:i,...a}=e,l=Kt(lc,i);return b.jsx(Sn.h2,{id:l.titleId,...a,ref:r})});Vh.displayName=lc;var Hh="DialogDescription",Wh=k.forwardRef((e,r)=>{const{__scopeDialog:i,...a}=e,l=Kt(Hh,i);return b.jsx(Sn.p,{id:l.descriptionId,...a,ref:r})});Wh.displayName=Hh;var Yh="DialogClose",qh=k.forwardRef((e,r)=>{const{__scopeDialog:i,...a}=e,l=Kt(Yh,i);return b.jsx(Sn.button,{type:"button",...a,ref:r,onClick:Qn(e.onClick,()=>l.onOpenChange(!1))})});qh.displayName=Yh;function sc(e){return e?"open":"closed"}var Gh="DialogTitleWarning",[yC,Qh]=Vb(Gh,{contentName:hr,titleName:lc,docsSlug:"dialog"}),u1=({titleId:e})=>{const r=Qh(Gh),i=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return k.useEffect(()=>{e&&(document.getElementById(e)||console.error(i))},[i,e]),null},c1="DialogDescriptionWarning",d1=({contentRef:e,descriptionId:r})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qh(c1).contentName}}.`;return k.useEffect(()=>{var u;const l=(u=e.current)==null?void 0:u.getAttribute("aria-describedby");r&&l&&(document.getElementById(r)||console.warn(a))},[a,e,r]),null},f1=Mh,p1=Oh,m1=Fh,h1=Bh,g1=Uh,v1=Vh,y1=Wh,Kh=qh;function x1({...e}){return b.jsx(f1,{"data-slot":"dialog",...e})}function Hp({...e}){return b.jsx(p1,{"data-slot":"dialog-trigger",...e})}function b1({...e}){return b.jsx(m1,{"data-slot":"dialog-portal",...e})}function w1({...e}){return b.jsx(Kh,{"data-slot":"dialog-close",...e})}function k1({className:e,...r}){return b.jsx(h1,{"data-slot":"dialog-overlay",className:yr("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...r})}function S1({className:e,children:r,...i}){return b.jsxs(b1,{"data-slot":"dialog-portal",children:[b.jsx(k1,{}),b.jsxs(g1,{"data-slot":"dialog-content",className:yr("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...i,children:[r,b.jsxs(Kh,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[b.jsx(yh,{}),b.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function E1({className:e,...r}){return b.jsx("div",{"data-slot":"dialog-header",className:yr("flex flex-col gap-2 text-center sm:text-left",e),...r})}function C1({className:e,...r}){return b.jsx("div",{"data-slot":"dialog-footer",className:yr("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...r})}function N1({className:e,...r}){return b.jsx(v1,{"data-slot":"dialog-title",className:yr("text-lg leading-none font-semibold",e),...r})}function P1({className:e,...r}){return b.jsx(y1,{"data-slot":"dialog-description",className:yr("text-muted-foreground text-sm",e),...r})}function j1(){const[e,r]=k.useState(!1),[i,a]=k.useState(!1),l=gr(),u=()=>{a(!0),setTimeout(()=>{l("/webmaker")},500)};return b.jsxs(x1,{children:[b.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800",children:b.jsxs("div",{className:"container mx-auto px-6 py-4",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("img",{src:"/DevStudio-Logo.png",alt:"DevStudio",className:"w-8 h-8 object-contain object-center"}),b.jsx("span",{className:"font-semibold text-white text-lg",children:"DevStudio"})]}),b.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[b.jsxs("nav",{className:"flex items-center gap-8",children:[b.jsx("a",{href:"#features",className:"text-slate-300 hover:text-white transition-colors",children:"Features"}),b.jsx("a",{href:"#handbook",className:"text-slate-300 hover:text-white transition-colors",children:"Handbook"}),b.jsx("a",{href:"#code-compiler",className:"text-slate-300 hover:text-white transition-colors",children:"Compiler"}),b.jsx(Hp,{asChild:!0,children:b.jsx("button",{type:"button",className:"text-slate-300 hover:text-white transition-colors font-normal",children:"Sign In"})})]}),b.jsx(mt,{className:"bg-blue-600 hover:bg-blue-700 text-white",onClick:u,disabled:i,children:i?b.jsx(so,{className:"w-4 h-4 animate-spin"}):"Start Building Free"})]}),b.jsx("button",{type:"button",className:"md:hidden text-slate-300 hover:text-white transition-colors",onClick:()=>r(c=>!c),"aria-label":e?"Close menu":"Open menu",children:e?b.jsx(yh,{className:"w-5 h-5"}):b.jsx(Rb,{className:"w-5 h-5"})})]}),b.jsxs("div",{className:`md:hidden mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3 overflow-hidden transition-all duration-300 ease-out ${e?"max-h-[1000px] opacity-100 scale-100":"max-h-0 opacity-0 scale-95 pointer-events-none"}`,"aria-hidden":!e,children:[b.jsx("a",{href:"#features",className:"block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors",onClick:()=>r(!1),children:"Features"}),b.jsx("a",{href:"#handbook",className:"block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors",onClick:()=>r(!1),children:"Handbook"}),b.jsx("a",{href:"#code-compiler",className:"block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors",onClick:()=>r(!1),children:"Compiler"}),b.jsx(Hp,{asChild:!0,children:b.jsx("button",{type:"button",className:"w-full rounded-lg px-3 py-2 text-left text-slate-300 hover:bg-slate-900 hover:text-white transition-colors font-normal",onClick:()=>r(!1),children:"Sign In"})}),b.jsx(mt,{className:"w-full bg-blue-600 hover:bg-blue-700 text-white",onClick:u,disabled:i,children:i?b.jsx(so,{className:"w-4 h-4 animate-spin"}):"Start Building Free"})]})]})}),b.jsxs(S1,{children:[b.jsxs(E1,{children:[b.jsx(N1,{children:"Sign In"}),b.jsx(P1,{children:"This feature is not available yet. Enter your email to get notified when sign in is ready."})]}),b.jsx("div",{className:"grid gap-4 py-4",children:b.jsxs("label",{className:"grid gap-2 text-sm border-slate-600",children:["Email address",b.jsx("input",{type:"email",placeholder:"you@example.com",className:"rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:border-blue-500"})]})}),b.jsxs(C1,{children:[b.jsx(mt,{className:"bg-blue-600 hover:bg-blue-700",children:"Notify me"}),b.jsx(w1,{asChild:!0,children:b.jsx(mt,{variant:"outline",children:"Close"})})]})]})]})}function R1(){const e=gr(),[r,i]=k.useState(!1),a=()=>{i(!0),setTimeout(()=>{e("/compiler")},500)};return b.jsx("section",{className:"pt-36 pb-20 px-6",children:b.jsx("div",{className:"container mx-auto",children:b.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[b.jsxs("div",{children:[b.jsxs("h1",{className:"text-5xl lg:text-6xl font-bold text-white mb-6",children:["Build Website.",b.jsx("br",{}),"Master code.",b.jsx("br",{}),b.jsx("span",{className:"text-blue-500",children:"With Ai"})]}),b.jsx("p",{className:"text-slate-400 text-lg mb-8 max-w-xl",children:"The AI-powered coding assistant with an interactive drag-and-drop & code builder. Personalized paths, instant feedback, and gamified learning."}),b.jsx(mt,{className:"bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 inline-flex items-center justify-center min-w-[240px]",onClick:a,disabled:r,children:r?b.jsx(so,{className:"w-6 h-6 animate-spin"}):"Launch Interactive Builder"})]}),b.jsx("div",{className:"relative",children:b.jsxs("div",{className:"rounded-2xl overflow-hidden border border-slate-700 shadow-2xl",children:[b.jsx("img",{src:"https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzU2MjExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Code editor with AI",className:"w-full h-auto"}),b.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:b.jsx("div",{className:"bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-blue-500/50",children:b.jsx("span",{className:"text-white font-bold text-2xl",children:"AI"})})})]})})]})})})}function T1(){const e=[{icon:Mb,title:"AI-Powered Assistance",description:"Instant feedback & guidance"},{icon:Ib,title:"Hybrid Builder",description:"Drag-and-drop + real code editing"},{icon:Fb,title:"Gamified Learning",description:"Track progress with real-world projects"}];return b.jsx("section",{id:"features",className:"py-20 px-6",children:b.jsxs("div",{className:"container mx-auto",children:[b.jsx("h2",{className:"text-3xl font-bold text-white mb-12",children:"Key Features"}),b.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:e.map((r,i)=>{const a=r.icon;return b.jsxs("div",{className:"bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-600/50 transition-all",children:[b.jsx("div",{className:"w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4",children:b.jsx(a,{className:"w-6 h-6 text-blue-500"})}),b.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:r.title}),b.jsx("p",{className:"text-slate-400",children:r.description})]},i)})})]})})}function z1(){const e=gr(),[r,i]=k.useState(!1),a=()=>{i(!0),setTimeout(()=>{e("/webmaker")},500)};return b.jsx("section",{className:"py-20 px-6 bg-slate-900/30",children:b.jsxs("div",{className:"container mx-auto",children:[b.jsxs("div",{className:"text-center mb-12",children:[b.jsxs("h2",{className:"text-4xl font-bold text-white mb-4",children:["Describe it. Build it. ",b.jsx("span",{className:"text-blue-500",children:"Instantly."})]}),b.jsx("p",{className:"text-slate-400 max-w-2xl mx-auto",children:"Web Maker turns your ideas into fully-designed website prototypes in seconds, edit the code what you want — live AI refactor the site."})]}),b.jsx("div",{className:"flex justify-center gap-8 mb-12",children:[{icon:zp,label:"AI Prompt",subtitle:"Describe your idea"},{icon:kb,label:"Use Reader",subtitle:"Review & refine"},{icon:bb,label:"Download Ready",subtitle:"Export your code"}].map((l,u)=>{const c=l.icon;return b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-600/30",children:b.jsx(c,{className:"w-8 h-8 text-blue-500"})}),b.jsx("h4",{className:"text-white font-semibold mb-1",children:l.label}),b.jsx("p",{className:"text-slate-400 text-sm",children:l.subtitle})]},u)})}),b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl",children:[b.jsxs("div",{className:"bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700",children:[b.jsxs("div",{className:"flex gap-2",children:[b.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),b.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),b.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),b.jsx("span",{className:"text-slate-400 text-sm ml-4",children:"Web Maker - AI Builder"})]}),b.jsxs("div",{className:"p-8",children:[b.jsxs("div",{className:"bg-slate-800 rounded-lg p-6 mb-4",children:[b.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[b.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center",children:b.jsx(zp,{className:"w-4 h-4 text-white"})}),b.jsxs("div",{children:[b.jsx("p",{className:"text-white font-medium",children:"Streamline Tour"}),b.jsx("p",{className:"text-slate-400 text-sm",children:"Web Maker"})]})]}),b.jsxs("div",{className:"bg-slate-900 rounded p-4 flex items-center gap-4",children:[b.jsx("div",{className:"w-12 h-12 shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded overflow-hidden",children:b.jsx("img",{src:"/silhouette.png",alt:"Silhouette",className:"w-full h-full object-cover"})}),b.jsx("p",{className:"text-white",children:"Create a modern portfolio website with a dark theme, featuring sections for projects, about me, and contact information."})]})]}),b.jsxs("div",{className:"flex gap-2",children:[b.jsx("input",{type:"text",placeholder:"Describe what you want...",className:"flex-1 bg-slate-800 text-white px-4 py-2 rounded border border-slate-700 focus:outline-none focus:border-blue-600"}),b.jsx(mt,{className:"bg-blue-600 hover:bg-blue-700",children:"Send"})]})]})]}),b.jsx("div",{className:"text-center mt-8",children:b.jsx(mt,{className:"bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 inline-flex items-center justify-center min-w-[220px]",onClick:a,disabled:r,children:r?b.jsx(so,{className:"w-4 h-4 animate-spin"}):"Try Web Maker Free"})})]})]})})}function I1(){const[e,r]=k.useState("variables"),[i,a]=k.useState(["basics","loops","conditionals"]),l=[{id:"basics",name:"BASICS",lessons:[{id:"variables",label:"Variables",description:"Learn how to store and use data"},{id:"arrays",label:"Arrays",description:"Store multiple values in one variable"}]},{id:"loops",name:"LOOPS",lessons:[{id:"whileloop",label:"While Loop",description:"Repeat code while a condition is true"},{id:"forloop",label:"For Loop",description:"Loop with a counter"}]},{id:"conditionals",name:"CONDITIONALS",lessons:[{id:"statements",label:"If Statement",description:"Make decisions in your code"}]}],u=h=>{a(m=>m.includes(h)?m.filter(g=>g!==h):[...m,h])},f={variables:{title:"Variables",description:"Learn how to store and use data",code:["let age = 25;",'let name = "John";',"const PI = 3.14159;","let isStudent = true;","","console.log(name); // John"],explanation:"Variables are containers that store data values. Think of them like labeled boxes where you can put information and use it later. Each variable can have a name and a type determines what sort of data it can hold."},arrays:{title:"Arrays",description:"Work with collections of data",code:['let fruits = ["apple", "banana", "orange"];',"console.log(fruits[0]); // apple","",'fruits.push("grape");',"console.log(fruits.length); // 4","fruits.forEach(fruit => console.log(fruit));"],explanation:"Arrays are collections of data stored in a single variable. Each item in an array has an index (position) starting from 0. Arrays provide useful methods like push(), pop(), map(), and filter() to manipulate and iterate through data efficiently."},whileloop:{title:"While Loop",description:"Repeat code while a condition is true",code:["let count = 0;","","while (count < 5) {",'  console.log("Count: " + count);',"  count++;","}"],explanation:"A while loop repeats as long as a condition is true. It checks the condition before each iteration. While loops are useful when you don't know exactly how many times you need to repeat, like reading data until a file ends."},forloop:{title:"For Loop",description:"Loop with a counter",code:["for (let i = 0; i < 5; i++) {",'  console.log("Count: " + i);',"}","",'let fruits = ["apple", "banana"];',"for (const fruit of fruits) { console.log(fruit); }"],explanation:"A for loop is perfect when you know exactly how many times you want to loop. It has three parts: initialization, condition, and increment. For loops are ideal for iterating through arrays and repeating code a specific number of times."},statements:{title:"If Statement",description:"Make decisions in your code",code:["let score = 85;","",'if (score >= 90) { console.log("A"); }','else if (score >= 80) { console.log("B"); }','else if (score >= 70) { console.log("C"); }','else { console.log("F"); }'],explanation:"If statements are fundamental control structures in programming. They allow your code to execute different blocks based on specific conditions. Chain multiple if-else statements for complex decision-making. Always use clear conditions to make your code readable."}}[e];return b.jsx("section",{id:"handbook",className:"py-20 px-6",children:b.jsxs("div",{className:"container mx-auto",children:[b.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[b.jsx(gb,{className:"w-8 h-8 text-blue-500"}),b.jsx("h2",{className:"text-3xl font-bold text-white",children:"Code Handbook"})]}),b.jsxs("div",{className:"grid lg:grid-cols-4 gap-6",children:[b.jsx("div",{className:"lg:col-span-1",children:b.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 p-4 max-h-[600px] overflow-y-auto",children:[b.jsx("h3",{className:"text-white font-semibold mb-6",children:"Lessons"}),b.jsx("div",{className:"space-y-4",children:l.map(h=>b.jsxs("div",{children:[b.jsxs("button",{onClick:()=>u(h.id),className:"w-full flex items-center justify-between mb-2 px-2 py-1 hover:opacity-80 transition-opacity",children:[b.jsx("span",{className:"text-blue-400 font-semibold text-sm",children:h.name}),b.jsx(yb,{className:`w-4 h-4 text-blue-400 transition-transform ${i.includes(h.id)?"rotate-180":""}`})]}),i.includes(h.id)&&b.jsx("div",{className:"space-y-2 ml-2",children:h.lessons.map(m=>b.jsxs("button",{onClick:()=>r(m.id),className:`w-full text-left px-3 py-3 rounded transition-colors border ${e===m.id?"bg-slate-800 border-blue-500 text-white":"bg-slate-950 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600"}`,children:[b.jsx("div",{className:"font-medium text-sm",children:m.label}),b.jsx("div",{className:"text-xs text-slate-400 mt-1",children:m.description})]},m.id))})]},h.id))})]})}),b.jsx("div",{className:"lg:col-span-3",children:b.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 p-8",children:[b.jsxs("div",{className:"mb-6",children:[b.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:f.title}),b.jsx("p",{className:"text-slate-400",children:f.description})]}),b.jsxs("div",{className:"bg-slate-950 rounded-lg p-6 mb-6 border border-slate-800",children:[b.jsx("div",{className:"flex items-center gap-2 mb-4",children:b.jsx("div",{className:"px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium",children:"JavaScript"})}),b.jsxs("div",{className:"text-slate-300 font-mono text-sm space-y-2",children:[b.jsx("div",{className:"text-slate-500",children:"// Example Code"}),f.code.map((h,m)=>b.jsx("div",{children:h.split(/(\b(?:let|const|function|if|else|for|while|return|console|true|false|new)\b)/g).map((g,v)=>g.match(/\b(?:let|const|function|if|else|for|while|return|console|true|false|new)\b/)?b.jsx("span",{className:"text-purple-400",children:g},v):g.match(/^".*"|^'.*'/)?b.jsx("span",{className:"text-green-400",children:g},v):g.match(/^\d+/)?b.jsx("span",{className:"text-green-400",children:g},v):g.match(/^\/\/.*/)?b.jsx("span",{className:"text-slate-500",children:g},v):b.jsx("span",{children:g},v))},m))]})]}),b.jsx("div",{className:"bg-amber-900/20 border border-amber-700/50 rounded-lg p-6",children:b.jsxs("div",{className:"flex gap-3",children:[b.jsx(Nb,{className:"w-5 h-5 text-amber-500 flex-shrink-0 mt-1"}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-white font-semibold mb-2",children:"How it works"}),b.jsx("p",{className:"text-slate-300 text-sm",children:f.explanation})]})]})})]})})]})]})})}function L1(){const[e,r]=k.useState("html"),[i,a]=k.useState(""),l=k.useRef(null),[u,c]=k.useState(!1),f=gr(),m={html:{fileName:"index.html",code:["< !DOCTYPE html >",'<html lang="en">',"<head>",'<meta charset="UTF-8">','<meta name="viewport" content="width=device-width, initial-scale=1.0">',"<title>Web Dev</title>","</head>","<body>",'<h1 id="name">DevStudio</h1>',"</body>","</html>","","","","",""]},css:{fileName:"config.txt",code:["#name {","  color: white;","  font-size: 2em;","  cursor: pointer;","  transition: all 0.3s ease;","}","","","","","","","","","",""]},js:{fileName:"script.js",code:['const name = document.querySelector("#name");',"","",'name.addEventListener("click", (e) => {',"",'  name.style.color = "red";',"  ",'  name.style.fontWeight = "bold";','  name.style.transition = "all 0.3s ease";',"});","","","","","",""]}}[e],g=(v,w)=>{if(!v.trim())return b.jsx("span",{children:v});if(w==="html"){const y=[];let z=0;const P=/(<\/?[^>]+>|&\w+;)/g;let C=0,j;for(;(j=P.exec(v))!==null;){j.index>C&&y.push(b.jsx("span",{className:"text-slate-300",children:v.substring(C,j.index)},z++));const A=j[0];if(A.includes("=")){const _=A.match(/(<[^>]*?)(\s+\w+)(=)("[^"]*"|'[^']*')([^>]*>)/);_?(y.push(b.jsx("span",{className:"text-blue-400",children:_[1]},z++)),y.push(b.jsx("span",{className:"text-purple-400",children:_[2]},z++)),y.push(b.jsx("span",{className:"text-slate-300",children:_[3]},z++)),y.push(b.jsx("span",{className:"text-green-400",children:_[4]},z++)),y.push(b.jsx("span",{className:"text-blue-400",children:_[5]},z++))):y.push(b.jsx("span",{className:"text-blue-400",children:A},z++))}else y.push(b.jsx("span",{className:"text-blue-400",children:A},z++));C=P.lastIndex}return C<v.length&&y.push(b.jsx("span",{className:"text-slate-300",children:v.substring(C)},z++)),b.jsx(b.Fragment,{children:y})}else if(w==="js"){const y=/\b(const|let|var|function|return|if|else|for|while|document|addEventListener)\b/g,z=/(["'`])(.*?)\1/g,P=/(\/\/.*$)/g;let C=v;return C=C.replace(P,'<span class="text-slate-500">$1</span>'),C=C.replace(z,'<span class="text-green-400">$&</span>'),C=C.replace(y,'<span class="text-purple-400">$&</span>'),C=C.replace(/\.(querySelector|addEventListener|style|log)/g,'.<span class="text-yellow-400">$1</span>'),b.jsx("span",{dangerouslySetInnerHTML:{__html:C}})}else if(w==="css"){if(v.includes(":")){const y=v.split(":");return b.jsxs(b.Fragment,{children:[b.jsx("span",{className:"text-cyan-400",children:y[0]}),b.jsx("span",{className:"text-slate-300",children:":"}),b.jsx("span",{className:"text-yellow-400",children:y.slice(1).join(":")})]})}return b.jsx("span",{className:"text-slate-300",children:v})}return b.jsx("span",{children:v})};return b.jsx("section",{id:"code-compiler",className:"py-20 px-6 bg-slate-900/30",children:b.jsxs("div",{className:"container mx-auto",children:[b.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-8",children:[b.jsx("h2",{className:"text-3xl font-bold text-white",children:"Code Compiler"}),b.jsxs("div",{className:"flex flex-wrap items-center gap-2 justify-end",children:[b.jsx(mt,{variant:e==="html"?"default":"outline",size:"sm",className:`text-xs ${e==="html"?"bg-blue-600 hover:bg-blue-700":"border-slate-700 text-slate-300 hover:bg-slate-700"}`,onClick:()=>{r("html")},children:"HTML"}),b.jsx(mt,{variant:e==="css"?"default":"outline",size:"sm",className:`text-xs ${e==="css"?"bg-blue-600 hover:bg-blue-700":"border-slate-700 text-slate-300 hover:bg-slate-700"}`,onClick:()=>{r("css")},children:"CSS"}),b.jsx(mt,{variant:e==="js"?"default":"outline",size:"sm",className:`text-xs ${e==="js"?"bg-blue-600 hover:bg-blue-700":"border-slate-700 text-slate-300 hover:bg-slate-700"}`,onClick:()=>{r("js")},children:"JS"}),b.jsxs(mt,{className:"bg-green-600 hover:bg-green-700 text-white text-sm",onClick:()=>{c(!0),setTimeout(()=>f("/compiler"),500)},disabled:u,children:[u?b.jsx(so,{className:"w-4 h-4 mr-2 animate-spin"}):b.jsx(vh,{className:"w-4 h-4 mr-2"}),u?"Loading...":"Try now"]})]})]}),b.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 h-full",children:[b.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col",children:[b.jsx("div",{className:"bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700",children:b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("span",{className:"text-green-400 text-sm",children:"●"}),b.jsx("span",{className:"text-slate-400 text-sm",children:m.fileName})]})}),b.jsxs("div",{className:"bg-slate-950 font-mono text-sm min-h-[300px] flex overflow-hidden",children:[b.jsx("div",{className:"bg-slate-900 px-4 py-4 text-slate-500 select-none border-r border-slate-800 flex flex-col",children:m.code.map((v,w)=>b.jsx("div",{className:"leading-6 whitespace-pre min-w-fit",children:w+1},w))}),b.jsx("div",{className:"flex-1 overflow-auto py-4",children:m.code.map((v,w)=>b.jsx("div",{className:"text-slate-300 leading-6 whitespace-pre px-4",children:g(v,e)},w))})]})]}),b.jsxs("div",{className:"bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col",children:[b.jsx("div",{className:"bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700",children:b.jsx("span",{className:"text-slate-400 text-sm",children:"Output"})}),b.jsx("div",{className:"p-0 bg-slate-950 flex-1 overflow-hidden rounded-b-xl min-h-[320px] sm:min-h-[400px] flex items-center justify-center",children:i?b.jsx("iframe",{ref:l,srcDoc:i,className:"w-full h-full border-0",style:{minHeight:"320px"},sandbox:"allow-scripts"}):b.jsx("div",{className:"font-mono text-sm text-slate-400",children:'// Click "Try now" to see your program...'})})]})]})]})})}function Wp(e,r){(r==null||r>e.length)&&(r=e.length);for(var i=0,a=Array(r);i<r;i++)a[i]=e[i];return a}function _1(e){if(Array.isArray(e))return e}function M1(e,r,i){return(r=$1(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function A1(e,r){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var a,l,u,c,f=[],h=!0,m=!1;try{if(u=(i=i.call(e)).next,r!==0)for(;!(h=(a=u.call(i)).done)&&(f.push(a.value),f.length!==r);h=!0);}catch(g){m=!0,l=g}finally{try{if(!h&&i.return!=null&&(c=i.return(),Object(c)!==c))return}finally{if(m)throw l}}return f}}function O1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yp(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,a)}return i}function qp(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Yp(Object(i),!0).forEach(function(a){M1(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Yp(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function D1(e,r){if(e==null)return{};var i,a,l=F1(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)i=u[a],r.indexOf(i)===-1&&{}.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}function F1(e,r){if(e==null)return{};var i={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(r.indexOf(a)!==-1)continue;i[a]=e[a]}return i}function B1(e,r){return _1(e)||A1(e,r)||V1(e,r)||O1()}function U1(e,r){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function $1(e){var r=U1(e,"string");return typeof r=="symbol"?r:r+""}function V1(e,r){if(e){if(typeof e=="string")return Wp(e,r);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Wp(e,r):void 0}}function H1(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function Gp(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),i.push.apply(i,a)}return i}function Qp(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?Gp(Object(i),!0).forEach(function(a){H1(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Gp(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function W1(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(a){return r.reduceRight(function(l,u){return u(l)},a)}}function no(e){return function r(){for(var i=this,a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return l.length>=e.length?e.apply(this,l):function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];return r.apply(i,[].concat(l,f))}}}function Za(e){return{}.toString.call(e).includes("Object")}function Y1(e){return!Object.keys(e).length}function uo(e){return typeof e=="function"}function q1(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function G1(e,r){return Za(r)||Kn("changeType"),Object.keys(r).some(function(i){return!q1(e,i)})&&Kn("changeField"),r}function Q1(e){uo(e)||Kn("selectorType")}function K1(e){uo(e)||Za(e)||Kn("handlerType"),Za(e)&&Object.values(e).some(function(r){return!uo(r)})&&Kn("handlersType")}function X1(e){e||Kn("initialIsRequired"),Za(e)||Kn("initialType"),Y1(e)&&Kn("initialContent")}function J1(e,r){throw new Error(e[r]||e.default)}var Z1={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Kn=no(J1)(Z1),Da={changes:G1,selector:Q1,handler:K1,initial:X1};function ek(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Da.initial(e),Da.handler(r);var i={current:e},a=no(rk)(i,r),l=no(nk)(i),u=no(Da.changes)(e),c=no(tk)(i);function f(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Da.selector(m),m(i.current)}function h(m){W1(a,l,u,c)(m)}return[f,h]}function tk(e,r){return uo(r)?r(e.current):r}function nk(e,r){return e.current=Qp(Qp({},e.current),r),r}function rk(e,r,i){return uo(r)?r(e.current):Object.keys(i).forEach(function(a){var l;return(l=r[a])===null||l===void 0?void 0:l.call(r,e.current[a])}),i}var ik={create:ek},ok={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function ak(e){return function r(){for(var i=this,a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return l.length>=e.length?e.apply(this,l):function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];return r.apply(i,[].concat(l,f))}}}function lk(e){return{}.toString.call(e).includes("Object")}function sk(e){return e||Kp("configIsRequired"),lk(e)||Kp("configType"),e.urls?(uk(),{paths:{vs:e.urls.monacoBase}}):e}function uk(){console.warn(Xh.deprecation)}function ck(e,r){throw new Error(e[r]||e.default)}var Xh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Kp=ak(ck)(Xh),dk={config:sk},fk=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return function(l){return i.reduceRight(function(u,c){return c(u)},l)}};function Jh(e,r){return Object.keys(r).forEach(function(i){r[i]instanceof Object&&e[i]&&Object.assign(r[i],Jh(e[i],r[i]))}),qp(qp({},e),r)}var pk={type:"cancelation",msg:"operation is manually canceled"};function hu(e){var r=!1,i=new Promise(function(a,l){e.then(function(u){return r?l(pk):a(u)}),e.catch(l)});return i.cancel=function(){return r=!0},i}var mk=["monaco"],hk=ik.create({config:ok,isInitialized:!1,resolve:null,reject:null,monaco:null}),Zh=B1(hk,2),ho=Zh[0],sl=Zh[1];function gk(e){var r=dk.config(e),i=r.monaco,a=D1(r,mk);sl(function(l){return{config:Jh(l.config,a),monaco:i}})}function vk(){var e=ho(function(r){var i=r.monaco,a=r.isInitialized,l=r.resolve;return{monaco:i,isInitialized:a,resolve:l}});if(!e.isInitialized){if(sl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),hu(gu);if(window.monaco&&window.monaco.editor)return eg(window.monaco),e.resolve(window.monaco),hu(gu);fk(yk,bk)(wk)}return hu(gu)}function yk(e){return document.body.appendChild(e)}function xk(e){var r=document.createElement("script");return e&&(r.src=e),r}function bk(e){var r=ho(function(a){var l=a.config,u=a.reject;return{config:l,reject:u}}),i=xk("".concat(r.config.paths.vs,"/loader.js"));return i.onload=function(){return e()},i.onerror=r.reject,i}function wk(){var e=ho(function(i){var a=i.config,l=i.resolve,u=i.reject;return{config:a,resolve:l,reject:u}}),r=window.require;r.config(e.config),r(["vs/editor/editor.main"],function(i){var a=i.m||i;eg(a),e.resolve(a)},function(i){e.reject(i)})}function eg(e){ho().monaco||sl({monaco:e})}function kk(){return ho(function(e){var r=e.monaco;return r})}var gu=new Promise(function(e,r){return sl({resolve:e,reject:r})}),tg={config:gk,init:vk,__getMonacoInstance:kk},Sk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},vu=Sk,Ek={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ck=Ek;function Nk({children:e}){return pr.createElement("div",{style:Ck.container},e)}var Pk=Nk,jk=Pk;function Rk({width:e,height:r,isEditorReady:i,loading:a,_ref:l,className:u,wrapperProps:c}){return pr.createElement("section",{style:{...vu.wrapper,width:e,height:r},...c},!i&&pr.createElement(jk,null,a),pr.createElement("div",{ref:l,style:{...vu.fullWidth,...!i&&vu.hide},className:u}))}var Tk=Rk,ng=k.memo(Tk);function zk(e){k.useEffect(e,[])}var rg=zk;function Ik(e,r,i=!0){let a=k.useRef(!0);k.useEffect(a.current||!i?()=>{a.current=!1}:e,r)}var zt=Ik;function ro(){}function Zr(e,r,i,a){return Lk(e,a)||_k(e,r,i,a)}function Lk(e,r){return e.editor.getModel(ig(e,r))}function _k(e,r,i,a){return e.editor.createModel(r,i,a?ig(e,a):void 0)}function ig(e,r){return e.Uri.parse(r)}function Mk({original:e,modified:r,language:i,originalLanguage:a,modifiedLanguage:l,originalModelPath:u,modifiedModelPath:c,keepCurrentOriginalModel:f=!1,keepCurrentModifiedModel:h=!1,theme:m="light",loading:g="Loading...",options:v={},height:w="100%",width:y="100%",className:z,wrapperProps:P={},beforeMount:C=ro,onMount:j=ro}){let[A,_]=k.useState(!1),[W,H]=k.useState(!0),L=k.useRef(null),V=k.useRef(null),Y=k.useRef(null),Z=k.useRef(j),J=k.useRef(C),te=k.useRef(!1);rg(()=>{let U=tg.init();return U.then(re=>(V.current=re)&&H(!1)).catch(re=>(re==null?void 0:re.type)!=="cancelation"&&console.error("Monaco initialization: error:",re)),()=>L.current?ie():U.cancel()}),zt(()=>{if(L.current&&V.current){let U=L.current.getOriginalEditor(),re=Zr(V.current,e||"",a||i||"text",u||"");re!==U.getModel()&&U.setModel(re)}},[u],A),zt(()=>{if(L.current&&V.current){let U=L.current.getModifiedEditor(),re=Zr(V.current,r||"",l||i||"text",c||"");re!==U.getModel()&&U.setModel(re)}},[c],A),zt(()=>{let U=L.current.getModifiedEditor();U.getOption(V.current.editor.EditorOption.readOnly)?U.setValue(r||""):r!==U.getValue()&&(U.executeEdits("",[{range:U.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),U.pushUndoStop())},[r],A),zt(()=>{var U,re;(re=(U=L.current)==null?void 0:U.getModel())==null||re.original.setValue(e||"")},[e],A),zt(()=>{let{original:U,modified:re}=L.current.getModel();V.current.editor.setModelLanguage(U,a||i||"text"),V.current.editor.setModelLanguage(re,l||i||"text")},[i,a,l],A),zt(()=>{var U;(U=V.current)==null||U.editor.setTheme(m)},[m],A),zt(()=>{var U;(U=L.current)==null||U.updateOptions(v)},[v],A);let ne=k.useCallback(()=>{var me;if(!V.current)return;J.current(V.current);let U=Zr(V.current,e||"",a||i||"text",u||""),re=Zr(V.current,r||"",l||i||"text",c||"");(me=L.current)==null||me.setModel({original:U,modified:re})},[i,r,l,e,a,u,c]),xe=k.useCallback(()=>{var U;!te.current&&Y.current&&(L.current=V.current.editor.createDiffEditor(Y.current,{automaticLayout:!0,...v}),ne(),(U=V.current)==null||U.editor.setTheme(m),_(!0),te.current=!0)},[v,m,ne]);k.useEffect(()=>{A&&Z.current(L.current,V.current)},[A]),k.useEffect(()=>{!W&&!A&&xe()},[W,A,xe]);function ie(){var re,me,F,le;let U=(re=L.current)==null?void 0:re.getModel();f||((me=U==null?void 0:U.original)==null||me.dispose()),h||((F=U==null?void 0:U.modified)==null||F.dispose()),(le=L.current)==null||le.dispose()}return pr.createElement(ng,{width:y,height:w,isEditorReady:A,loading:g,_ref:Y,className:z,wrapperProps:P})}var Ak=Mk;k.memo(Ak);function Ok(e){let r=k.useRef();return k.useEffect(()=>{r.current=e},[e]),r.current}var Dk=Ok,Fa=new Map;function Fk({defaultValue:e,defaultLanguage:r,defaultPath:i,value:a,language:l,path:u,theme:c="light",line:f,loading:h="Loading...",options:m={},overrideServices:g={},saveViewState:v=!0,keepCurrentModel:w=!1,width:y="100%",height:z="100%",className:P,wrapperProps:C={},beforeMount:j=ro,onMount:A=ro,onChange:_,onValidate:W=ro}){let[H,L]=k.useState(!1),[V,Y]=k.useState(!0),Z=k.useRef(null),J=k.useRef(null),te=k.useRef(null),ne=k.useRef(A),xe=k.useRef(j),ie=k.useRef(),U=k.useRef(a),re=Dk(u),me=k.useRef(!1),F=k.useRef(!1);rg(()=>{let R=tg.init();return R.then(B=>(Z.current=B)&&Y(!1)).catch(B=>(B==null?void 0:B.type)!=="cancelation"&&console.error("Monaco initialization: error:",B)),()=>J.current?S():R.cancel()}),zt(()=>{var B,E,ae,ge;let R=Zr(Z.current,e||a||"",r||l||"",u||i||"");R!==((B=J.current)==null?void 0:B.getModel())&&(v&&Fa.set(re,(E=J.current)==null?void 0:E.saveViewState()),(ae=J.current)==null||ae.setModel(R),v&&((ge=J.current)==null||ge.restoreViewState(Fa.get(u))))},[u],H),zt(()=>{var R;(R=J.current)==null||R.updateOptions(m)},[m],H),zt(()=>{!J.current||a===void 0||(J.current.getOption(Z.current.editor.EditorOption.readOnly)?J.current.setValue(a):a!==J.current.getValue()&&(F.current=!0,J.current.executeEdits("",[{range:J.current.getModel().getFullModelRange(),text:a,forceMoveMarkers:!0}]),J.current.pushUndoStop(),F.current=!1))},[a],H),zt(()=>{var B,E;let R=(B=J.current)==null?void 0:B.getModel();R&&l&&((E=Z.current)==null||E.editor.setModelLanguage(R,l))},[l],H),zt(()=>{var R;f!==void 0&&((R=J.current)==null||R.revealLine(f))},[f],H),zt(()=>{var R;(R=Z.current)==null||R.editor.setTheme(c)},[c],H);let le=k.useCallback(()=>{var R;if(!(!te.current||!Z.current)&&!me.current){xe.current(Z.current);let B=u||i,E=Zr(Z.current,a||e||"",r||l||"",B||"");J.current=(R=Z.current)==null?void 0:R.editor.create(te.current,{model:E,automaticLayout:!0,...m},g),v&&J.current.restoreViewState(Fa.get(B)),Z.current.editor.setTheme(c),f!==void 0&&J.current.revealLine(f),L(!0),me.current=!0}},[e,r,i,a,l,u,m,g,v,c,f]);k.useEffect(()=>{H&&ne.current(J.current,Z.current)},[H]),k.useEffect(()=>{!V&&!H&&le()},[V,H,le]),U.current=a,k.useEffect(()=>{var R,B;H&&_&&((R=ie.current)==null||R.dispose(),ie.current=(B=J.current)==null?void 0:B.onDidChangeModelContent(E=>{F.current||_(J.current.getValue(),E)}))},[H,_]),k.useEffect(()=>{if(H){let R=Z.current.editor.onDidChangeMarkers(B=>{var ae;let E=(ae=J.current.getModel())==null?void 0:ae.uri;if(E&&B.find(ge=>ge.path===E.path)){let ge=Z.current.editor.getModelMarkers({resource:E});W==null||W(ge)}});return()=>{R==null||R.dispose()}}return()=>{}},[H,W]);function S(){var R,B;(R=ie.current)==null||R.dispose(),w?v&&Fa.set(u,J.current.saveViewState()):(B=J.current.getModel())==null||B.dispose(),J.current.dispose()}return pr.createElement(ng,{width:y,height:z,isEditorReady:H,loading:h,_ref:te,className:P,wrapperProps:C})}var Bk=Fk,Uk=k.memo(Bk),$k=Uk;let og=null;function Vk(e){og=e}function Hk(){return og}function Wk(){const[e,r]=k.useState("html"),[i,a]=k.useState([]),[l,u]=k.useState(""),[c,f]=k.useState(""),[h,m]=k.useState({html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Dev</title>
</head>
<body>
    <h1 id="name">DevStudio</h1>
</body>
</html>`,css:`#name {
  color: white;
  font-size: 2em;
  cursor: pointer;
  transition: all 0.3s ease;
}`,js:`const name = document.querySelector("#name");

name.addEventListener("click", (e) => {
  name.style.color = "khaki";
  name.style.fontWeight = "bold";
});`}),g=k.useRef(null),v=k.useRef(null),w=gr(),y=C=>{const A="if (Date.now() - __loopStartTime__ > 5000) throw new Error('Infinite loop detected: execution timeout');";return C=C.replace(/while\s*\([^)]*\)\s*\{/g,_=>_+`
const __loopStartTime__ = Date.now();
`),C=C.replace(/while\s*\([^)]*\)\s*\{\s*const __loopStartTime__[^}]*\);\n/g,_=>_+A+`
`),C=C.replace(/for\s*\([^)]*\)\s*\{/g,_=>_+`
const __loopStartTime__ = Date.now();
`),C=C.replace(/do\s*\{/g,_=>_+`
const __loopStartTime__ = Date.now();
`),C};k.useEffect(()=>{const C=Hk();C&&m({html:C.html,css:C.css,js:C.js})},[]),k.useEffect(()=>{const C=j=>{var _,W,H;const A=(_=g.current)==null?void 0:_.contentWindow;if(j.source===A){if(((W=j.data)==null?void 0:W.type)==="console")a(L=>[...L,j.data.message]);else if(((H=j.data)==null?void 0:H.type)==="error"){const L=j.data.error??"Unknown iframe error";u(L),a(V=>[...V,{type:"error",message:L,timestamp:Date.now()}])}}};return window.addEventListener("message",C),()=>window.removeEventListener("message",C)},[]);const z=C=>{switch(C){case"js":return"javascript";case"html":return"html";case"css":return"css";default:return"javascript"}},P=()=>{console.log("Run clicked"),a([]),u("");try{const C=h.html,j=h.css;let A=h.js;A=y(A);const W=`
        <script>
          
        (function() {
          const parent = window.parent;
          const originalLog = console.log;
          const originalWarn = console.warn;
          const originalError = console.error;

          console.log = function(...args) {
            const message = args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch(e) { return String(arg); }
              }
              return String(arg);
            }).join(' ');
            parent.postMessage({
              type: 'console',
              message: { type: 'log', message: message, timestamp: Date.now() }
            }, '*');
            originalLog.apply(console, args);
          };

          console.warn = function(...args) {
            const message = args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch(e) { return String(arg); }
              }
              return String(arg);
            }).join(' ');
            parent.postMessage({
              type: 'console',
              message: { type: 'warn', message: message, timestamp: Date.now() }
            }, '*');
            originalWarn.apply(console, args);
          };

          console.error = function(...args) {
            const message = args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch(e) { return String(arg); }
              }
              return String(arg);
            }).join(' ');
            parent.postMessage({
              type: 'console',
              message: { type: 'error', message: message, timestamp: Date.now() }
            }, '*');
            originalError.apply(console, args);
          };

          window.parent.postMessage({ type: 'ready' }, '*');
        })();
      
          
          window.addEventListener('DOMContentLoaded', function() {
            (function() {
              try {
                ${A.trim()?A:""}
              } catch (error) {
                const errorMessage = (error instanceof Error)
                  ? error.name + ': ' + error.message
                  : String(error);
                window.parent.postMessage({
                  type: 'error',
                  error: errorMessage
                }, '*');
                console.error(errorMessage);
              }
            })();
          });
        <\/script>
      `,H=`<style>${j}</style>`,L="</body>",Y=C.toLowerCase().lastIndexOf("</head>");let Z,J=C;Y!==-1?J=C.substring(0,Y)+H+C.substring(Y):C.toLowerCase().includes("<body")&&(J=C.replace("<body",`<head>${H}</head><body`));const te=J.toLowerCase().lastIndexOf(L);te!==-1?Z=J.substring(0,te)+W+J.substring(te):Z=J+W+"</body></html>",console.log("Bundled code length:",Z.length),console.log("Bundled code:",Z),console.log("About to set iframeContent"),f(Z),console.log("iframeContent set"),g.current&&(v.current=g.current.contentWindow)}catch(C){const j=C instanceof Error?C.message:String(C);u(j)}};return b.jsxs("div",{className:"h-screen bg-slate-950 flex flex-col",children:[b.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800",children:[b.jsxs("button",{onClick:()=>w("/"),className:"flex items-center gap-2 hover:opacity-80 transition",children:[b.jsx("img",{src:"/DevStudio-Logo.png",alt:"DevStudio",className:"w-8 h-8 object-contain object-center"}),b.jsx("span",{className:"font-semibold text-white text-lg",children:"DevStudio"})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(mt,{variant:e==="html"?"default":"outline",size:"sm",className:`text-xs ${e==="html"?"bg-blue-600 hover:bg-blue-700":"border-slate-700 text-slate-300 hover:bg-slate-700"}`,onClick:()=>r("html"),children:"HTML"}),b.jsx(mt,{variant:e==="css"?"default":"outline",size:"sm",className:`text-xs ${e==="css"?"bg-blue-600 hover:bg-blue-700":"border-slate-700 text-slate-300 hover:bg-slate-700"}`,onClick:()=>r("css"),children:"CSS"}),b.jsx(mt,{variant:e==="js"?"default":"outline",size:"sm",className:`text-xs ${e==="js"?"bg-blue-600 hover:bg-blue-700":"border-slate-700 text-slate-300 hover:bg-slate-700"}`,onClick:()=>r("js"),children:"JS"}),b.jsxs(mt,{className:"bg-green-600 hover:bg-green-700 text-white text-sm",onClick:P,children:[b.jsx(vh,{className:"w-4 h-4 mr-2"}),"Run"]})]})]}),b.jsxs("div",{className:"flex flex-1",children:[b.jsxs("div",{className:"w-1/2 flex flex-col",children:[b.jsx("div",{className:"flex items-center px-4 py-2 border-b border-slate-800",children:b.jsx("span",{className:"text-sm font-medium text-slate-300",children:e==="html"?"index.html":e==="css"?"style.css":"script.js"})}),b.jsx("div",{className:"flex-1 overflow-hidden",children:b.jsx($k,{language:z(e),value:h[e],onChange:C=>{C!==void 0&&m(j=>({...j,[e]:C}))},theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,fontFamily:"Fira Code, Menlo, Monaco, monospace",tabSize:2,wordWrap:"on",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]}),b.jsx("div",{className:"w-px bg-slate-700"}),b.jsxs("div",{className:"w-1/2 flex flex-col",children:[b.jsx("div",{className:"flex items-center px-4 py-2 border-b border-slate-800",children:b.jsx("span",{className:"text-sm font-medium text-slate-300",children:"Output"})}),b.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col bg-slate-950",children:[l&&b.jsx("div",{className:"border-b border-slate-800 p-4 bg-red-950/30",children:b.jsxs("div",{className:"font-mono text-sm text-red-400",children:[b.jsx("div",{className:"font-semibold mb-2",children:"Error:"}),b.jsx("div",{className:"whitespace-pre-wrap break-words",children:l})]})}),b.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[b.jsx("div",{className:"flex-1 overflow-hidden",children:b.jsx("iframe",{ref:g,srcDoc:c,className:"w-full h-full border-0 bg-transparent",title:"Code Output",sandbox:"allow-scripts allow-same-origin"})}),i.length>0&&b.jsx("div",{className:"border-t border-slate-800 bg-slate-900/90 p-4 max-h-48 overflow-y-auto",children:b.jsxs("div",{className:"font-mono text-xs",children:[b.jsx("div",{className:"text-slate-400 mb-2",children:"Console Output:"}),i.map((C,j)=>b.jsxs("div",{className:`${C.type==="error"?"text-red-400":C.type==="warn"?"text-yellow-400":"text-green-400"} mb-1`,children:[b.jsxs("span",{className:"text-slate-500",children:["[",C.type,"]"]})," ",C.message]},j))]})})]}),!c&&!l&&i.length===0&&b.jsx("div",{className:"flex items-center justify-center h-full text-slate-500 bg-[#1e1e1e]",children:b.jsx("div",{className:"text-center",children:b.jsx("div",{className:"font-mono text-sm text-slate-400",children:'// Click "Run" to see your program...'})})})]})]})]})]})}function Yk(e,r){const i={};return(e[e.length-1]===""?[...e,""]:e).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const qk=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Gk=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Qk={};function Xp(e,r){return(Qk.jsx?Gk:qk).test(e)}const Kk=/[ \t\n\f\r]/g;function Xk(e){return typeof e=="object"?e.type==="text"?Jp(e.value):!1:Jp(e)}function Jp(e){return e.replace(Kk,"")===""}class go{constructor(r,i,a){this.normal=i,this.property=r,a&&(this.space=a)}}go.prototype.normal={};go.prototype.property={};go.prototype.space=void 0;function ag(e,r){const i={},a={};for(const l of e)Object.assign(i,l.property),Object.assign(a,l.normal);return new go(i,a,r)}function Fu(e){return e.toLowerCase()}class St{constructor(r,i){this.attribute=i,this.property=r}}St.prototype.attribute="";St.prototype.booleanish=!1;St.prototype.boolean=!1;St.prototype.commaOrSpaceSeparated=!1;St.prototype.commaSeparated=!1;St.prototype.defined=!1;St.prototype.mustUseProperty=!1;St.prototype.number=!1;St.prototype.overloadedBoolean=!1;St.prototype.property="";St.prototype.spaceSeparated=!1;St.prototype.space=void 0;let Jk=0;const Ce=xr(),Qe=xr(),Bu=xr(),K=xr(),Ae=xr(),ti=xr(),Tt=xr();function xr(){return 2**++Jk}const Uu=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ce,booleanish:Qe,commaOrSpaceSeparated:Tt,commaSeparated:ti,number:K,overloadedBoolean:Bu,spaceSeparated:Ae},Symbol.toStringTag,{value:"Module"})),yu=Object.keys(Uu);class uc extends St{constructor(r,i,a,l){let u=-1;if(super(r,i),Zp(this,"space",l),typeof a=="number")for(;++u<yu.length;){const c=yu[u];Zp(this,yu[u],(a&Uu[c])===Uu[c])}}}uc.prototype.defined=!0;function Zp(e,r,i){i&&(e[r]=i)}function li(e){const r={},i={};for(const[a,l]of Object.entries(e.properties)){const u=new uc(a,e.transform(e.attributes||{},a),l,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(u.mustUseProperty=!0),r[a]=u,i[Fu(a)]=a,i[Fu(u.attribute)]=a}return new go(r,i,e.space)}const lg=li({properties:{ariaActiveDescendant:null,ariaAtomic:Qe,ariaAutoComplete:null,ariaBusy:Qe,ariaChecked:Qe,ariaColCount:K,ariaColIndex:K,ariaColSpan:K,ariaControls:Ae,ariaCurrent:null,ariaDescribedBy:Ae,ariaDetails:null,ariaDisabled:Qe,ariaDropEffect:Ae,ariaErrorMessage:null,ariaExpanded:Qe,ariaFlowTo:Ae,ariaGrabbed:Qe,ariaHasPopup:null,ariaHidden:Qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ae,ariaLevel:K,ariaLive:null,ariaModal:Qe,ariaMultiLine:Qe,ariaMultiSelectable:Qe,ariaOrientation:null,ariaOwns:Ae,ariaPlaceholder:null,ariaPosInSet:K,ariaPressed:Qe,ariaReadOnly:Qe,ariaRelevant:null,ariaRequired:Qe,ariaRoleDescription:Ae,ariaRowCount:K,ariaRowIndex:K,ariaRowSpan:K,ariaSelected:Qe,ariaSetSize:K,ariaSort:null,ariaValueMax:K,ariaValueMin:K,ariaValueNow:K,ariaValueText:null,role:null},transform(e,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function sg(e,r){return r in e?e[r]:r}function ug(e,r){return sg(e,r.toLowerCase())}const Zk=li({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ti,acceptCharset:Ae,accessKey:Ae,action:null,allow:null,allowFullScreen:Ce,allowPaymentRequest:Ce,allowUserMedia:Ce,alt:null,as:null,async:Ce,autoCapitalize:null,autoComplete:Ae,autoFocus:Ce,autoPlay:Ce,blocking:Ae,capture:null,charSet:null,checked:Ce,cite:null,className:Ae,cols:K,colSpan:null,content:null,contentEditable:Qe,controls:Ce,controlsList:Ae,coords:K|ti,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ce,defer:Ce,dir:null,dirName:null,disabled:Ce,download:Bu,draggable:Qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ce,formTarget:null,headers:Ae,height:K,hidden:Bu,high:K,href:null,hrefLang:null,htmlFor:Ae,httpEquiv:Ae,id:null,imageSizes:null,imageSrcSet:null,inert:Ce,inputMode:null,integrity:null,is:null,isMap:Ce,itemId:null,itemProp:Ae,itemRef:Ae,itemScope:Ce,itemType:Ae,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ce,low:K,manifest:null,max:null,maxLength:K,media:null,method:null,min:null,minLength:K,multiple:Ce,muted:Ce,name:null,nonce:null,noModule:Ce,noValidate:Ce,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ce,optimum:K,pattern:null,ping:Ae,placeholder:null,playsInline:Ce,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ce,referrerPolicy:null,rel:Ae,required:Ce,reversed:Ce,rows:K,rowSpan:K,sandbox:Ae,scope:null,scoped:Ce,seamless:Ce,selected:Ce,shadowRootClonable:Ce,shadowRootDelegatesFocus:Ce,shadowRootMode:null,shape:null,size:K,sizes:null,slot:null,span:K,spellCheck:Qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:K,step:null,style:null,tabIndex:K,target:null,title:null,translate:null,type:null,typeMustMatch:Ce,useMap:null,value:Qe,width:K,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ae,axis:null,background:null,bgColor:null,border:K,borderColor:null,bottomMargin:K,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ce,declare:Ce,event:null,face:null,frame:null,frameBorder:null,hSpace:K,leftMargin:K,link:null,longDesc:null,lowSrc:null,marginHeight:K,marginWidth:K,noResize:Ce,noHref:Ce,noShade:Ce,noWrap:Ce,object:null,profile:null,prompt:null,rev:null,rightMargin:K,rules:null,scheme:null,scrolling:Qe,standby:null,summary:null,text:null,topMargin:K,valueType:null,version:null,vAlign:null,vLink:null,vSpace:K,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ce,disableRemotePlayback:Ce,prefix:null,property:null,results:K,security:null,unselectable:null},space:"html",transform:ug}),e2=li({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:K,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:K,amplitude:K,arabicForm:null,ascent:K,attributeName:null,attributeType:null,azimuth:K,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:K,by:null,calcMode:null,capHeight:K,className:Ae,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:K,diffuseConstant:K,direction:null,display:null,dur:null,divisor:K,dominantBaseline:null,download:Ce,dx:null,dy:null,edgeMode:null,editable:null,elevation:K,enableBackground:null,end:null,event:null,exponent:K,externalResourcesRequired:null,fill:null,fillOpacity:K,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ti,g2:ti,glyphName:ti,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:K,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:K,horizOriginX:K,horizOriginY:K,id:null,ideographic:K,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:K,k:K,k1:K,k2:K,k3:K,k4:K,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:K,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:K,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:K,overlineThickness:K,paintOrder:null,panose1:null,path:null,pathLength:K,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ae,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:K,pointsAtY:K,pointsAtZ:K,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:K,specularExponent:K,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:K,strikethroughThickness:K,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:K,strokeOpacity:K,strokeWidth:null,style:null,surfaceScale:K,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:K,tableValues:null,target:null,targetX:K,targetY:K,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:K,underlineThickness:K,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:K,values:null,vAlphabetic:K,vMathematical:K,vectorEffect:null,vHanging:K,vIdeographic:K,version:null,vertAdvY:K,vertOriginX:K,vertOriginY:K,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:K,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:sg}),cg=li({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,r){return"xlink:"+r.slice(5).toLowerCase()}}),dg=li({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ug}),fg=li({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,r){return"xml:"+r.slice(3).toLowerCase()}}),t2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},n2=/[A-Z]/g,em=/-[a-z]/g,r2=/^data[-\w.:]+$/i;function i2(e,r){const i=Fu(r);let a=r,l=St;if(i in e.normal)return e.property[e.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&r2.test(r)){if(r.charAt(4)==="-"){const u=r.slice(5).replace(em,a2);a="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=r.slice(4);if(!em.test(u)){let c=u.replace(n2,o2);c.charAt(0)!=="-"&&(c="-"+c),r="data"+c}}l=uc}return new l(a,r)}function o2(e){return"-"+e.toLowerCase()}function a2(e){return e.charAt(1).toUpperCase()}const l2=ag([lg,Zk,cg,dg,fg],"html"),cc=ag([lg,e2,cg,dg,fg],"svg");function s2(e){return e.join(" ").trim()}var Xr={},xu,tm;function u2(){if(tm)return xu;tm=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,l=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,f=/^\s+|\s+$/g,h=`
`,m="/",g="*",v="",w="comment",y="declaration";function z(C,j){if(typeof C!="string")throw new TypeError("First argument must be a string");if(!C)return[];j=j||{};var A=1,_=1;function W(ie){var U=ie.match(r);U&&(A+=U.length);var re=ie.lastIndexOf(h);_=~re?ie.length-re:_+ie.length}function H(){var ie={line:A,column:_};return function(U){return U.position=new L(ie),Z(),U}}function L(ie){this.start=ie,this.end={line:A,column:_},this.source=j.source}L.prototype.content=C;function V(ie){var U=new Error(j.source+":"+A+":"+_+": "+ie);if(U.reason=ie,U.filename=j.source,U.line=A,U.column=_,U.source=C,!j.silent)throw U}function Y(ie){var U=ie.exec(C);if(U){var re=U[0];return W(re),C=C.slice(re.length),U}}function Z(){Y(i)}function J(ie){var U;for(ie=ie||[];U=te();)U!==!1&&ie.push(U);return ie}function te(){var ie=H();if(!(m!=C.charAt(0)||g!=C.charAt(1))){for(var U=2;v!=C.charAt(U)&&(g!=C.charAt(U)||m!=C.charAt(U+1));)++U;if(U+=2,v===C.charAt(U-1))return V("End of comment missing");var re=C.slice(2,U-2);return _+=2,W(re),C=C.slice(U),_+=2,ie({type:w,comment:re})}}function ne(){var ie=H(),U=Y(a);if(U){if(te(),!Y(l))return V("property missing ':'");var re=Y(u),me=ie({type:y,property:P(U[0].replace(e,v)),value:re?P(re[0].replace(e,v)):v});return Y(c),me}}function xe(){var ie=[];J(ie);for(var U;U=ne();)U!==!1&&(ie.push(U),J(ie));return ie}return Z(),xe()}function P(C){return C?C.replace(f,v):v}return xu=z,xu}var nm;function c2(){if(nm)return Xr;nm=1;var e=Xr&&Xr.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.default=i;const r=e(u2());function i(a,l){let u=null;if(!a||typeof a!="string")return u;const c=(0,r.default)(a),f=typeof l=="function";return c.forEach(h=>{if(h.type!=="declaration")return;const{property:m,value:g}=h;f?l(m,g,h):g&&(u=u||{},u[m]=g)}),u}return Xr}var Ji={},rm;function d2(){if(rm)return Ji;rm=1,Object.defineProperty(Ji,"__esModule",{value:!0}),Ji.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,l=/^-(ms)-/,u=function(m){return!m||i.test(m)||e.test(m)},c=function(m,g){return g.toUpperCase()},f=function(m,g){return"".concat(g,"-")},h=function(m,g){return g===void 0&&(g={}),u(m)?m:(m=m.toLowerCase(),g.reactCompat?m=m.replace(l,f):m=m.replace(a,f),m.replace(r,c))};return Ji.camelCase=h,Ji}var Zi,im;function f2(){if(im)return Zi;im=1;var e=Zi&&Zi.__importDefault||function(l){return l&&l.__esModule?l:{default:l}},r=e(c2()),i=d2();function a(l,u){var c={};return!l||typeof l!="string"||(0,r.default)(l,function(f,h){f&&h&&(c[(0,i.camelCase)(f,u)]=h)}),c}return a.default=a,Zi=a,Zi}var p2=f2();const m2=nl(p2),pg=mg("end"),dc=mg("start");function mg(e){return r;function r(i){const a=i&&i.position&&i.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function h2(e){const r=dc(e),i=pg(e);if(r&&i)return{start:r,end:i}}function io(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?om(e.position):"start"in e||"end"in e?om(e):"line"in e||"column"in e?$u(e):""}function $u(e){return am(e&&e.line)+":"+am(e&&e.column)}function om(e){return $u(e&&e.start)+"-"+$u(e&&e.end)}function am(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(r,i,a){super(),typeof i=="string"&&(a=i,i=void 0);let l="",u={},c=!1;if(i&&("line"in i&&"column"in i?u={place:i}:"start"in i&&"end"in i?u={place:i}:"type"in i?u={ancestors:[i],place:i.position}:u={...i}),typeof r=="string"?l=r:!u.cause&&r&&(c=!0,l=r.message,u.cause=r),!u.ruleId&&!u.source&&typeof a=="string"){const h=a.indexOf(":");h===-1?u.ruleId=a:(u.source=a.slice(0,h),u.ruleId=a.slice(h+1))}if(!u.place&&u.ancestors&&u.ancestors){const h=u.ancestors[u.ancestors.length-1];h&&(u.place=h.position)}const f=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=l,this.line=f?f.line:void 0,this.name=io(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=c&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const fc={}.hasOwnProperty,g2=new Map,v2=/[A-Z]/g,y2=new Set(["table","tbody","thead","tfoot","tr"]),x2=new Set(["td","th"]),hg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function b2(e,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=r.filePath||void 0;let a;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=j2(i,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=P2(i,r.jsx,r.jsxs)}const l={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:a,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?cc:l2,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},u=gg(l,e,void 0);return u&&typeof u!="string"?u:l.create(e,l.Fragment,{children:u||void 0},void 0)}function gg(e,r,i){if(r.type==="element")return w2(e,r,i);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return k2(e,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return E2(e,r,i);if(r.type==="mdxjsEsm")return S2(e,r);if(r.type==="root")return C2(e,r,i);if(r.type==="text")return N2(e,r)}function w2(e,r,i){const a=e.schema;let l=a;r.tagName.toLowerCase()==="svg"&&a.space==="html"&&(l=cc,e.schema=l),e.ancestors.push(r);const u=yg(e,r.tagName,!1),c=R2(e,r);let f=mc(e,r);return y2.has(r.tagName)&&(f=f.filter(function(h){return typeof h=="string"?!Xk(h):!0})),vg(e,c,u,r),pc(c,f),e.ancestors.pop(),e.schema=a,e.create(r,u,c,i)}function k2(e,r){if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}co(e,r.position)}function S2(e,r){if(r.data&&r.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(r.data.estree);co(e,r.position)}function E2(e,r,i){const a=e.schema;let l=a;r.name==="svg"&&a.space==="html"&&(l=cc,e.schema=l),e.ancestors.push(r);const u=r.name===null?e.Fragment:yg(e,r.name,!0),c=T2(e,r),f=mc(e,r);return vg(e,c,u,r),pc(c,f),e.ancestors.pop(),e.schema=a,e.create(r,u,c,i)}function C2(e,r,i){const a={};return pc(a,mc(e,r)),e.create(r,e.Fragment,a,i)}function N2(e,r){return r.value}function vg(e,r,i,a){typeof i!="string"&&i!==e.Fragment&&e.passNode&&(r.node=a)}function pc(e,r){if(r.length>0){const i=r.length>1?r:r[0];i&&(e.children=i)}}function P2(e,r,i){return a;function a(l,u,c,f){const m=Array.isArray(c.children)?i:r;return f?m(u,c,f):m(u,c)}}function j2(e,r){return i;function i(a,l,u,c){const f=Array.isArray(u.children),h=dc(a);return r(l,u,c,f,{columnNumber:h?h.column-1:void 0,fileName:e,lineNumber:h?h.line:void 0},void 0)}}function R2(e,r){const i={};let a,l;for(l in r.properties)if(l!=="children"&&fc.call(r.properties,l)){const u=z2(e,l,r.properties[l]);if(u){const[c,f]=u;e.tableCellAlignToStyle&&c==="align"&&typeof f=="string"&&x2.has(r.tagName)?a=f:i[c]=f}}if(a){const u=i.style||(i.style={});u[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return i}function T2(e,r){const i={};for(const a of r.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const u=a.data.estree.body[0];u.type;const c=u.expression;c.type;const f=c.properties[0];f.type,Object.assign(i,e.evaluater.evaluateExpression(f.argument))}else co(e,r.position);else{const l=a.name;let u;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const f=a.value.data.estree.body[0];f.type,u=e.evaluater.evaluateExpression(f.expression)}else co(e,r.position);else u=a.value===null?!0:a.value;i[l]=u}return i}function mc(e,r){const i=[];let a=-1;const l=e.passKeys?new Map:g2;for(;++a<r.children.length;){const u=r.children[a];let c;if(e.passKeys){const h=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(h){const m=l.get(h)||0;c=h+"-"+m,l.set(h,m+1)}}const f=gg(e,u,c);f!==void 0&&i.push(f)}return i}function z2(e,r,i){const a=i2(e.schema,r);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=a.commaSeparated?Yk(i):s2(i)),a.property==="style"){let l=typeof i=="object"?i:I2(e,String(i));return e.stylePropertyNameCase==="css"&&(l=L2(l)),["style",l]}return[e.elementAttributeNameCase==="react"&&a.space?t2[a.property]||a.property:a.attribute,i]}}function I2(e,r){try{return m2(r,{reactCompat:!0})}catch(i){if(e.ignoreInvalidStyle)return{};const a=i,l=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=hg+"#cannot-parse-style-attribute",l}}function yg(e,r,i){let a;if(!i)a={type:"Literal",value:r};else if(r.includes(".")){const l=r.split(".");let u=-1,c;for(;++u<l.length;){const f=Xp(l[u])?{type:"Identifier",name:l[u]}:{type:"Literal",value:l[u]};c=c?{type:"MemberExpression",object:c,property:f,computed:!!(u&&f.type==="Literal"),optional:!1}:f}a=c}else a=Xp(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(a.type==="Literal"){const l=a.value;return fc.call(e.components,l)?e.components[l]:l}if(e.evaluater)return e.evaluater.evaluateExpression(a);co(e)}function co(e,r){const i=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=hg+"#cannot-handle-mdx-estrees-without-createevaluater",i}function L2(e){const r={};let i;for(i in e)fc.call(e,i)&&(r[_2(i)]=e[i]);return r}function _2(e){let r=e.replace(v2,M2);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function M2(e){return"-"+e.toLowerCase()}const bu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},A2={};function O2(e,r){const i=A2,a=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,l=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return xg(e,a,l)}function xg(e,r,i){if(D2(e)){if("value"in e)return e.type==="html"&&!i?"":e.value;if(r&&"alt"in e&&e.alt)return e.alt;if("children"in e)return lm(e.children,r,i)}return Array.isArray(e)?lm(e,r,i):""}function lm(e,r,i){const a=[];let l=-1;for(;++l<e.length;)a[l]=xg(e[l],r,i);return a.join("")}function D2(e){return!!(e&&typeof e=="object")}const sm=document.createElement("i");function hc(e){const r="&"+e+";";sm.innerHTML=r;const i=sm.textContent;return i.charCodeAt(i.length-1)===59&&e!=="semi"||i===r?!1:i}function sn(e,r,i,a){const l=e.length;let u=0,c;if(r<0?r=-r>l?0:l+r:r=r>l?l:r,i=i>0?i:0,a.length<1e4)c=Array.from(a),c.unshift(r,i),e.splice(...c);else for(i&&e.splice(r,i);u<a.length;)c=a.slice(u,u+1e4),c.unshift(r,0),e.splice(...c),u+=1e4,r+=1e4}function Bt(e,r){return e.length>0?(sn(e,e.length,0,r),e):r}const um={}.hasOwnProperty;function F2(e){const r={};let i=-1;for(;++i<e.length;)B2(r,e[i]);return r}function B2(e,r){let i;for(i in r){const l=(um.call(e,i)?e[i]:void 0)||(e[i]={}),u=r[i];let c;if(u)for(c in u){um.call(l,c)||(l[c]=[]);const f=u[c];U2(l[c],Array.isArray(f)?f:f?[f]:[])}}}function U2(e,r){let i=-1;const a=[];for(;++i<r.length;)(r[i].add==="after"?e:a).push(r[i]);sn(e,0,0,a)}function bg(e,r){const i=Number.parseInt(e,r);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function ni(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const an=Xn(/[A-Za-z]/),It=Xn(/[\dA-Za-z]/),$2=Xn(/[#-'*+\--9=?A-Z^-~]/);function Vu(e){return e!==null&&(e<32||e===127)}const Hu=Xn(/\d/),V2=Xn(/[\dA-Fa-f]/),H2=Xn(/[!-/:-@[-`{-~]/);function Se(e){return e!==null&&e<-2}function kt(e){return e!==null&&(e<0||e===32)}function Le(e){return e===-2||e===-1||e===32}const W2=Xn(new RegExp("\\p{P}|\\p{S}","u")),Y2=Xn(/\s/);function Xn(e){return r;function r(i){return i!==null&&i>-1&&e.test(String.fromCharCode(i))}}function si(e){const r=[];let i=-1,a=0,l=0;for(;++i<e.length;){const u=e.charCodeAt(i);let c="";if(u===37&&It(e.charCodeAt(i+1))&&It(e.charCodeAt(i+2)))l=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(c=String.fromCharCode(u));else if(u>55295&&u<57344){const f=e.charCodeAt(i+1);u<56320&&f>56319&&f<57344?(c=String.fromCharCode(u,f),l=1):c="�"}else c=String.fromCharCode(u);c&&(r.push(e.slice(a,i),encodeURIComponent(c)),a=i+l+1,c=""),l&&(i+=l,l=0)}return r.join("")+e.slice(a)}function Oe(e,r,i,a){const l=a?a-1:Number.POSITIVE_INFINITY;let u=0;return c;function c(h){return Le(h)?(e.enter(i),f(h)):r(h)}function f(h){return Le(h)&&u++<l?(e.consume(h),f):(e.exit(i),r(h))}}const q2={tokenize:G2};function G2(e){const r=e.attempt(this.parser.constructs.contentInitial,a,l);let i;return r;function a(f){if(f===null){e.consume(f);return}return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Oe(e,r,"linePrefix")}function l(f){return e.enter("paragraph"),u(f)}function u(f){const h=e.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=h),i=h,c(f)}function c(f){if(f===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(f);return}return Se(f)?(e.consume(f),e.exit("chunkText"),u):(e.consume(f),c)}}const Q2={tokenize:K2},cm={tokenize:X2};function K2(e){const r=this,i=[];let a=0,l,u,c;return f;function f(_){if(a<i.length){const W=i[a];return r.containerState=W[1],e.attempt(W[0].continuation,h,m)(_)}return m(_)}function h(_){if(a++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,l&&A();const W=r.events.length;let H=W,L;for(;H--;)if(r.events[H][0]==="exit"&&r.events[H][1].type==="chunkFlow"){L=r.events[H][1].end;break}j(a);let V=W;for(;V<r.events.length;)r.events[V][1].end={...L},V++;return sn(r.events,H+1,0,r.events.slice(W)),r.events.length=V,m(_)}return f(_)}function m(_){if(a===i.length){if(!l)return w(_);if(l.currentConstruct&&l.currentConstruct.concrete)return z(_);r.interrupt=!!(l.currentConstruct&&!l._gfmTableDynamicInterruptHack)}return r.containerState={},e.check(cm,g,v)(_)}function g(_){return l&&A(),j(a),w(_)}function v(_){return r.parser.lazy[r.now().line]=a!==i.length,c=r.now().offset,z(_)}function w(_){return r.containerState={},e.attempt(cm,y,z)(_)}function y(_){return a++,i.push([r.currentConstruct,r.containerState]),w(_)}function z(_){if(_===null){l&&A(),j(0),e.consume(_);return}return l=l||r.parser.flow(r.now()),e.enter("chunkFlow",{_tokenizer:l,contentType:"flow",previous:u}),P(_)}function P(_){if(_===null){C(e.exit("chunkFlow"),!0),j(0),e.consume(_);return}return Se(_)?(e.consume(_),C(e.exit("chunkFlow")),a=0,r.interrupt=void 0,f):(e.consume(_),P)}function C(_,W){const H=r.sliceStream(_);if(W&&H.push(null),_.previous=u,u&&(u.next=_),u=_,l.defineSkip(_.start),l.write(H),r.parser.lazy[_.start.line]){let L=l.events.length;for(;L--;)if(l.events[L][1].start.offset<c&&(!l.events[L][1].end||l.events[L][1].end.offset>c))return;const V=r.events.length;let Y=V,Z,J;for(;Y--;)if(r.events[Y][0]==="exit"&&r.events[Y][1].type==="chunkFlow"){if(Z){J=r.events[Y][1].end;break}Z=!0}for(j(a),L=V;L<r.events.length;)r.events[L][1].end={...J},L++;sn(r.events,Y+1,0,r.events.slice(V)),r.events.length=L}}function j(_){let W=i.length;for(;W-- >_;){const H=i[W];r.containerState=H[1],H[0].exit.call(r,e)}i.length=_}function A(){l.write([null]),u=void 0,l=void 0,r.containerState._closeFlow=void 0}}function X2(e,r,i){return Oe(e,e.attempt(this.parser.constructs.document,r,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function dm(e){if(e===null||kt(e)||Y2(e))return 1;if(W2(e))return 2}function gc(e,r,i){const a=[];let l=-1;for(;++l<e.length;){const u=e[l].resolveAll;u&&!a.includes(u)&&(r=u(r,i),a.push(u))}return r}const Wu={name:"attention",resolveAll:J2,tokenize:Z2};function J2(e,r){let i=-1,a,l,u,c,f,h,m,g;for(;++i<e.length;)if(e[i][0]==="enter"&&e[i][1].type==="attentionSequence"&&e[i][1]._close){for(a=i;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&r.sliceSerialize(e[a][1]).charCodeAt(0)===r.sliceSerialize(e[i][1]).charCodeAt(0)){if((e[a][1]._close||e[i][1]._open)&&(e[i][1].end.offset-e[i][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[i][1].end.offset-e[i][1].start.offset)%3))continue;h=e[a][1].end.offset-e[a][1].start.offset>1&&e[i][1].end.offset-e[i][1].start.offset>1?2:1;const v={...e[a][1].end},w={...e[i][1].start};fm(v,-h),fm(w,h),c={type:h>1?"strongSequence":"emphasisSequence",start:v,end:{...e[a][1].end}},f={type:h>1?"strongSequence":"emphasisSequence",start:{...e[i][1].start},end:w},u={type:h>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[i][1].start}},l={type:h>1?"strong":"emphasis",start:{...c.start},end:{...f.end}},e[a][1].end={...c.start},e[i][1].start={...f.end},m=[],e[a][1].end.offset-e[a][1].start.offset&&(m=Bt(m,[["enter",e[a][1],r],["exit",e[a][1],r]])),m=Bt(m,[["enter",l,r],["enter",c,r],["exit",c,r],["enter",u,r]]),m=Bt(m,gc(r.parser.constructs.insideSpan.null,e.slice(a+1,i),r)),m=Bt(m,[["exit",u,r],["enter",f,r],["exit",f,r],["exit",l,r]]),e[i][1].end.offset-e[i][1].start.offset?(g=2,m=Bt(m,[["enter",e[i][1],r],["exit",e[i][1],r]])):g=0,sn(e,a-1,i-a+3,m),i=a+m.length-g-2;break}}for(i=-1;++i<e.length;)e[i][1].type==="attentionSequence"&&(e[i][1].type="data");return e}function Z2(e,r){const i=this.parser.constructs.attentionMarkers.null,a=this.previous,l=dm(a);let u;return c;function c(h){return u=h,e.enter("attentionSequence"),f(h)}function f(h){if(h===u)return e.consume(h),f;const m=e.exit("attentionSequence"),g=dm(h),v=!g||g===2&&l||i.includes(h),w=!l||l===2&&g||i.includes(a);return m._open=!!(u===42?v:v&&(l||!w)),m._close=!!(u===42?w:w&&(g||!v)),r(h)}}function fm(e,r){e.column+=r,e.offset+=r,e._bufferIndex+=r}const eS={name:"autolink",tokenize:tS};function tS(e,r,i){let a=0;return l;function l(y){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(y),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),u}function u(y){return an(y)?(e.consume(y),c):y===64?i(y):m(y)}function c(y){return y===43||y===45||y===46||It(y)?(a=1,f(y)):m(y)}function f(y){return y===58?(e.consume(y),a=0,h):(y===43||y===45||y===46||It(y))&&a++<32?(e.consume(y),f):(a=0,m(y))}function h(y){return y===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(y),e.exit("autolinkMarker"),e.exit("autolink"),r):y===null||y===32||y===60||Vu(y)?i(y):(e.consume(y),h)}function m(y){return y===64?(e.consume(y),g):$2(y)?(e.consume(y),m):i(y)}function g(y){return It(y)?v(y):i(y)}function v(y){return y===46?(e.consume(y),a=0,g):y===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(y),e.exit("autolinkMarker"),e.exit("autolink"),r):w(y)}function w(y){if((y===45||It(y))&&a++<63){const z=y===45?w:v;return e.consume(y),z}return i(y)}}const ul={partial:!0,tokenize:nS};function nS(e,r,i){return a;function a(u){return Le(u)?Oe(e,l,"linePrefix")(u):l(u)}function l(u){return u===null||Se(u)?r(u):i(u)}}const wg={continuation:{tokenize:iS},exit:oS,name:"blockQuote",tokenize:rS};function rS(e,r,i){const a=this;return l;function l(c){if(c===62){const f=a.containerState;return f.open||(e.enter("blockQuote",{_container:!0}),f.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(c),e.exit("blockQuoteMarker"),u}return i(c)}function u(c){return Le(c)?(e.enter("blockQuotePrefixWhitespace"),e.consume(c),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),r):(e.exit("blockQuotePrefix"),r(c))}}function iS(e,r,i){const a=this;return l;function l(c){return Le(c)?Oe(e,u,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):u(c)}function u(c){return e.attempt(wg,r,i)(c)}}function oS(e){e.exit("blockQuote")}const kg={name:"characterEscape",tokenize:aS};function aS(e,r,i){return a;function a(u){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(u),e.exit("escapeMarker"),l}function l(u){return H2(u)?(e.enter("characterEscapeValue"),e.consume(u),e.exit("characterEscapeValue"),e.exit("characterEscape"),r):i(u)}}const Sg={name:"characterReference",tokenize:lS};function lS(e,r,i){const a=this;let l=0,u,c;return f;function f(v){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(v),e.exit("characterReferenceMarker"),h}function h(v){return v===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(v),e.exit("characterReferenceMarkerNumeric"),m):(e.enter("characterReferenceValue"),u=31,c=It,g(v))}function m(v){return v===88||v===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(v),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),u=6,c=V2,g):(e.enter("characterReferenceValue"),u=7,c=Hu,g(v))}function g(v){if(v===59&&l){const w=e.exit("characterReferenceValue");return c===It&&!hc(a.sliceSerialize(w))?i(v):(e.enter("characterReferenceMarker"),e.consume(v),e.exit("characterReferenceMarker"),e.exit("characterReference"),r)}return c(v)&&l++<u?(e.consume(v),g):i(v)}}const pm={partial:!0,tokenize:uS},mm={concrete:!0,name:"codeFenced",tokenize:sS};function sS(e,r,i){const a=this,l={partial:!0,tokenize:H};let u=0,c=0,f;return h;function h(L){return m(L)}function m(L){const V=a.events[a.events.length-1];return u=V&&V[1].type==="linePrefix"?V[2].sliceSerialize(V[1],!0).length:0,f=L,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),g(L)}function g(L){return L===f?(c++,e.consume(L),g):c<3?i(L):(e.exit("codeFencedFenceSequence"),Le(L)?Oe(e,v,"whitespace")(L):v(L))}function v(L){return L===null||Se(L)?(e.exit("codeFencedFence"),a.interrupt?r(L):e.check(pm,P,W)(L)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),w(L))}function w(L){return L===null||Se(L)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),v(L)):Le(L)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Oe(e,y,"whitespace")(L)):L===96&&L===f?i(L):(e.consume(L),w)}function y(L){return L===null||Se(L)?v(L):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),z(L))}function z(L){return L===null||Se(L)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),v(L)):L===96&&L===f?i(L):(e.consume(L),z)}function P(L){return e.attempt(l,W,C)(L)}function C(L){return e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),j}function j(L){return u>0&&Le(L)?Oe(e,A,"linePrefix",u+1)(L):A(L)}function A(L){return L===null||Se(L)?e.check(pm,P,W)(L):(e.enter("codeFlowValue"),_(L))}function _(L){return L===null||Se(L)?(e.exit("codeFlowValue"),A(L)):(e.consume(L),_)}function W(L){return e.exit("codeFenced"),r(L)}function H(L,V,Y){let Z=0;return J;function J(U){return L.enter("lineEnding"),L.consume(U),L.exit("lineEnding"),te}function te(U){return L.enter("codeFencedFence"),Le(U)?Oe(L,ne,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):ne(U)}function ne(U){return U===f?(L.enter("codeFencedFenceSequence"),xe(U)):Y(U)}function xe(U){return U===f?(Z++,L.consume(U),xe):Z>=c?(L.exit("codeFencedFenceSequence"),Le(U)?Oe(L,ie,"whitespace")(U):ie(U)):Y(U)}function ie(U){return U===null||Se(U)?(L.exit("codeFencedFence"),V(U)):Y(U)}}}function uS(e,r,i){const a=this;return l;function l(c){return c===null?i(c):(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),u)}function u(c){return a.parser.lazy[a.now().line]?i(c):r(c)}}const wu={name:"codeIndented",tokenize:dS},cS={partial:!0,tokenize:fS};function dS(e,r,i){const a=this;return l;function l(m){return e.enter("codeIndented"),Oe(e,u,"linePrefix",5)(m)}function u(m){const g=a.events[a.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?c(m):i(m)}function c(m){return m===null?h(m):Se(m)?e.attempt(cS,c,h)(m):(e.enter("codeFlowValue"),f(m))}function f(m){return m===null||Se(m)?(e.exit("codeFlowValue"),c(m)):(e.consume(m),f)}function h(m){return e.exit("codeIndented"),r(m)}}function fS(e,r,i){const a=this;return l;function l(c){return a.parser.lazy[a.now().line]?i(c):Se(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):Oe(e,u,"linePrefix",5)(c)}function u(c){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?r(c):Se(c)?l(c):i(c)}}const pS={name:"codeText",previous:hS,resolve:mS,tokenize:gS};function mS(e){let r=e.length-4,i=3,a,l;if((e[i][1].type==="lineEnding"||e[i][1].type==="space")&&(e[r][1].type==="lineEnding"||e[r][1].type==="space")){for(a=i;++a<r;)if(e[a][1].type==="codeTextData"){e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}}for(a=i-1,r++;++a<=r;)l===void 0?a!==r&&e[a][1].type!=="lineEnding"&&(l=a):(a===r||e[a][1].type==="lineEnding")&&(e[l][1].type="codeTextData",a!==l+2&&(e[l][1].end=e[a-1][1].end,e.splice(l+2,a-l-2),r-=a-l-2,a=l+2),l=void 0);return e}function hS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function gS(e,r,i){let a=0,l,u;return c;function c(v){return e.enter("codeText"),e.enter("codeTextSequence"),f(v)}function f(v){return v===96?(e.consume(v),a++,f):(e.exit("codeTextSequence"),h(v))}function h(v){return v===null?i(v):v===32?(e.enter("space"),e.consume(v),e.exit("space"),h):v===96?(u=e.enter("codeTextSequence"),l=0,g(v)):Se(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),h):(e.enter("codeTextData"),m(v))}function m(v){return v===null||v===32||v===96||Se(v)?(e.exit("codeTextData"),h(v)):(e.consume(v),m)}function g(v){return v===96?(e.consume(v),l++,g):l===a?(e.exit("codeTextSequence"),e.exit("codeText"),r(v)):(u.type="codeTextData",m(v))}}class vS{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,i){const a=i??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(r,a):r>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(r,i,a){const l=i||0;this.setCursor(Math.trunc(r));const u=this.right.splice(this.right.length-l,Number.POSITIVE_INFINITY);return a&&eo(this.left,a),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),eo(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),eo(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const i=this.left.splice(r,Number.POSITIVE_INFINITY);eo(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);eo(this.left,i.reverse())}}}function eo(e,r){let i=0;if(r.length<1e4)e.push(...r);else for(;i<r.length;)e.push(...r.slice(i,i+1e4)),i+=1e4}function Eg(e){const r={};let i=-1,a,l,u,c,f,h,m;const g=new vS(e);for(;++i<g.length;){for(;i in r;)i=r[i];if(a=g.get(i),i&&a[1].type==="chunkFlow"&&g.get(i-1)[1].type==="listItemPrefix"&&(h=a[1]._tokenizer.events,u=0,u<h.length&&h[u][1].type==="lineEndingBlank"&&(u+=2),u<h.length&&h[u][1].type==="content"))for(;++u<h.length&&h[u][1].type!=="content";)h[u][1].type==="chunkText"&&(h[u][1]._isInFirstContentOfListItem=!0,u++);if(a[0]==="enter")a[1].contentType&&(Object.assign(r,yS(g,i)),i=r[i],m=!0);else if(a[1]._container){for(u=i,l=void 0;u--;)if(c=g.get(u),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(l&&(g.get(l)[1].type="lineEndingBlank"),c[1].type="lineEnding",l=u);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;l&&(a[1].end={...g.get(l)[1].start},f=g.slice(l,i),f.unshift(a),g.splice(l,i-l+1,f))}}return sn(e,0,Number.POSITIVE_INFINITY,g.slice(0)),!m}function yS(e,r){const i=e.get(r)[1],a=e.get(r)[2];let l=r-1;const u=[];let c=i._tokenizer;c||(c=a.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const f=c.events,h=[],m={};let g,v,w=-1,y=i,z=0,P=0;const C=[P];for(;y;){for(;e.get(++l)[1]!==y;);u.push(l),y._tokenizer||(g=a.sliceStream(y),y.next||g.push(null),v&&c.defineSkip(y.start),y._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(g),y._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),v=y,y=y.next}for(y=i;++w<f.length;)f[w][0]==="exit"&&f[w-1][0]==="enter"&&f[w][1].type===f[w-1][1].type&&f[w][1].start.line!==f[w][1].end.line&&(P=w+1,C.push(P),y._tokenizer=void 0,y.previous=void 0,y=y.next);for(c.events=[],y?(y._tokenizer=void 0,y.previous=void 0):C.pop(),w=C.length;w--;){const j=f.slice(C[w],C[w+1]),A=u.pop();h.push([A,A+j.length-1]),e.splice(A,2,j)}for(h.reverse(),w=-1;++w<h.length;)m[z+h[w][0]]=z+h[w][1],z+=h[w][1]-h[w][0]-1;return m}const xS={resolve:wS,tokenize:kS},bS={partial:!0,tokenize:SS};function wS(e){return Eg(e),e}function kS(e,r){let i;return a;function a(f){return e.enter("content"),i=e.enter("chunkContent",{contentType:"content"}),l(f)}function l(f){return f===null?u(f):Se(f)?e.check(bS,c,u)(f):(e.consume(f),l)}function u(f){return e.exit("chunkContent"),e.exit("content"),r(f)}function c(f){return e.consume(f),e.exit("chunkContent"),i.next=e.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,l}}function SS(e,r,i){const a=this;return l;function l(c){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),Oe(e,u,"linePrefix")}function u(c){if(c===null||Se(c))return i(c);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?r(c):e.interrupt(a.parser.constructs.flow,i,r)(c)}}function Cg(e,r,i,a,l,u,c,f,h){const m=h||Number.POSITIVE_INFINITY;let g=0;return v;function v(j){return j===60?(e.enter(a),e.enter(l),e.enter(u),e.consume(j),e.exit(u),w):j===null||j===32||j===41||Vu(j)?i(j):(e.enter(a),e.enter(c),e.enter(f),e.enter("chunkString",{contentType:"string"}),P(j))}function w(j){return j===62?(e.enter(u),e.consume(j),e.exit(u),e.exit(l),e.exit(a),r):(e.enter(f),e.enter("chunkString",{contentType:"string"}),y(j))}function y(j){return j===62?(e.exit("chunkString"),e.exit(f),w(j)):j===null||j===60||Se(j)?i(j):(e.consume(j),j===92?z:y)}function z(j){return j===60||j===62||j===92?(e.consume(j),y):y(j)}function P(j){return!g&&(j===null||j===41||kt(j))?(e.exit("chunkString"),e.exit(f),e.exit(c),e.exit(a),r(j)):g<m&&j===40?(e.consume(j),g++,P):j===41?(e.consume(j),g--,P):j===null||j===32||j===40||Vu(j)?i(j):(e.consume(j),j===92?C:P)}function C(j){return j===40||j===41||j===92?(e.consume(j),P):P(j)}}function Ng(e,r,i,a,l,u){const c=this;let f=0,h;return m;function m(y){return e.enter(a),e.enter(l),e.consume(y),e.exit(l),e.enter(u),g}function g(y){return f>999||y===null||y===91||y===93&&!h||y===94&&!f&&"_hiddenFootnoteSupport"in c.parser.constructs?i(y):y===93?(e.exit(u),e.enter(l),e.consume(y),e.exit(l),e.exit(a),r):Se(y)?(e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),g):(e.enter("chunkString",{contentType:"string"}),v(y))}function v(y){return y===null||y===91||y===93||Se(y)||f++>999?(e.exit("chunkString"),g(y)):(e.consume(y),h||(h=!Le(y)),y===92?w:v)}function w(y){return y===91||y===92||y===93?(e.consume(y),f++,v):v(y)}}function Pg(e,r,i,a,l,u){let c;return f;function f(w){return w===34||w===39||w===40?(e.enter(a),e.enter(l),e.consume(w),e.exit(l),c=w===40?41:w,h):i(w)}function h(w){return w===c?(e.enter(l),e.consume(w),e.exit(l),e.exit(a),r):(e.enter(u),m(w))}function m(w){return w===c?(e.exit(u),h(c)):w===null?i(w):Se(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),Oe(e,m,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===c||w===null||Se(w)?(e.exit("chunkString"),m(w)):(e.consume(w),w===92?v:g)}function v(w){return w===c||w===92?(e.consume(w),g):g(w)}}function oo(e,r){let i;return a;function a(l){return Se(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i=!0,a):Le(l)?Oe(e,a,i?"linePrefix":"lineSuffix")(l):r(l)}}const ES={name:"definition",tokenize:NS},CS={partial:!0,tokenize:PS};function NS(e,r,i){const a=this;let l;return u;function u(y){return e.enter("definition"),c(y)}function c(y){return Ng.call(a,e,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(y)}function f(y){return l=ni(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),y===58?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),h):i(y)}function h(y){return kt(y)?oo(e,m)(y):m(y)}function m(y){return Cg(e,g,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(y)}function g(y){return e.attempt(CS,v,v)(y)}function v(y){return Le(y)?Oe(e,w,"whitespace")(y):w(y)}function w(y){return y===null||Se(y)?(e.exit("definition"),a.parser.defined.push(l),r(y)):i(y)}}function PS(e,r,i){return a;function a(f){return kt(f)?oo(e,l)(f):i(f)}function l(f){return Pg(e,u,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function u(f){return Le(f)?Oe(e,c,"whitespace")(f):c(f)}function c(f){return f===null||Se(f)?r(f):i(f)}}const jS={name:"hardBreakEscape",tokenize:RS};function RS(e,r,i){return a;function a(u){return e.enter("hardBreakEscape"),e.consume(u),l}function l(u){return Se(u)?(e.exit("hardBreakEscape"),r(u)):i(u)}}const TS={name:"headingAtx",resolve:zS,tokenize:IS};function zS(e,r){let i=e.length-2,a=3,l,u;return e[a][1].type==="whitespace"&&(a+=2),i-2>a&&e[i][1].type==="whitespace"&&(i-=2),e[i][1].type==="atxHeadingSequence"&&(a===i-1||i-4>a&&e[i-2][1].type==="whitespace")&&(i-=a+1===i?2:4),i>a&&(l={type:"atxHeadingText",start:e[a][1].start,end:e[i][1].end},u={type:"chunkText",start:e[a][1].start,end:e[i][1].end,contentType:"text"},sn(e,a,i-a+1,[["enter",l,r],["enter",u,r],["exit",u,r],["exit",l,r]])),e}function IS(e,r,i){let a=0;return l;function l(g){return e.enter("atxHeading"),u(g)}function u(g){return e.enter("atxHeadingSequence"),c(g)}function c(g){return g===35&&a++<6?(e.consume(g),c):g===null||kt(g)?(e.exit("atxHeadingSequence"),f(g)):i(g)}function f(g){return g===35?(e.enter("atxHeadingSequence"),h(g)):g===null||Se(g)?(e.exit("atxHeading"),r(g)):Le(g)?Oe(e,f,"whitespace")(g):(e.enter("atxHeadingText"),m(g))}function h(g){return g===35?(e.consume(g),h):(e.exit("atxHeadingSequence"),f(g))}function m(g){return g===null||g===35||kt(g)?(e.exit("atxHeadingText"),f(g)):(e.consume(g),m)}}const LS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hm=["pre","script","style","textarea"],_S={concrete:!0,name:"htmlFlow",resolveTo:OS,tokenize:DS},MS={partial:!0,tokenize:BS},AS={partial:!0,tokenize:FS};function OS(e){let r=e.length;for(;r--&&!(e[r][0]==="enter"&&e[r][1].type==="htmlFlow"););return r>1&&e[r-2][1].type==="linePrefix"&&(e[r][1].start=e[r-2][1].start,e[r+1][1].start=e[r-2][1].start,e.splice(r-2,2)),e}function DS(e,r,i){const a=this;let l,u,c,f,h;return m;function m(E){return g(E)}function g(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),v}function v(E){return E===33?(e.consume(E),w):E===47?(e.consume(E),u=!0,P):E===63?(e.consume(E),l=3,a.interrupt?r:S):an(E)?(e.consume(E),c=String.fromCharCode(E),C):i(E)}function w(E){return E===45?(e.consume(E),l=2,y):E===91?(e.consume(E),l=5,f=0,z):an(E)?(e.consume(E),l=4,a.interrupt?r:S):i(E)}function y(E){return E===45?(e.consume(E),a.interrupt?r:S):i(E)}function z(E){const ae="CDATA[";return E===ae.charCodeAt(f++)?(e.consume(E),f===ae.length?a.interrupt?r:ne:z):i(E)}function P(E){return an(E)?(e.consume(E),c=String.fromCharCode(E),C):i(E)}function C(E){if(E===null||E===47||E===62||kt(E)){const ae=E===47,ge=c.toLowerCase();return!ae&&!u&&hm.includes(ge)?(l=1,a.interrupt?r(E):ne(E)):LS.includes(c.toLowerCase())?(l=6,ae?(e.consume(E),j):a.interrupt?r(E):ne(E)):(l=7,a.interrupt&&!a.parser.lazy[a.now().line]?i(E):u?A(E):_(E))}return E===45||It(E)?(e.consume(E),c+=String.fromCharCode(E),C):i(E)}function j(E){return E===62?(e.consume(E),a.interrupt?r:ne):i(E)}function A(E){return Le(E)?(e.consume(E),A):J(E)}function _(E){return E===47?(e.consume(E),J):E===58||E===95||an(E)?(e.consume(E),W):Le(E)?(e.consume(E),_):J(E)}function W(E){return E===45||E===46||E===58||E===95||It(E)?(e.consume(E),W):H(E)}function H(E){return E===61?(e.consume(E),L):Le(E)?(e.consume(E),H):_(E)}function L(E){return E===null||E===60||E===61||E===62||E===96?i(E):E===34||E===39?(e.consume(E),h=E,V):Le(E)?(e.consume(E),L):Y(E)}function V(E){return E===h?(e.consume(E),h=null,Z):E===null||Se(E)?i(E):(e.consume(E),V)}function Y(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||kt(E)?H(E):(e.consume(E),Y)}function Z(E){return E===47||E===62||Le(E)?_(E):i(E)}function J(E){return E===62?(e.consume(E),te):i(E)}function te(E){return E===null||Se(E)?ne(E):Le(E)?(e.consume(E),te):i(E)}function ne(E){return E===45&&l===2?(e.consume(E),re):E===60&&l===1?(e.consume(E),me):E===62&&l===4?(e.consume(E),R):E===63&&l===3?(e.consume(E),S):E===93&&l===5?(e.consume(E),le):Se(E)&&(l===6||l===7)?(e.exit("htmlFlowData"),e.check(MS,B,xe)(E)):E===null||Se(E)?(e.exit("htmlFlowData"),xe(E)):(e.consume(E),ne)}function xe(E){return e.check(AS,ie,B)(E)}function ie(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),U}function U(E){return E===null||Se(E)?xe(E):(e.enter("htmlFlowData"),ne(E))}function re(E){return E===45?(e.consume(E),S):ne(E)}function me(E){return E===47?(e.consume(E),c="",F):ne(E)}function F(E){if(E===62){const ae=c.toLowerCase();return hm.includes(ae)?(e.consume(E),R):ne(E)}return an(E)&&c.length<8?(e.consume(E),c+=String.fromCharCode(E),F):ne(E)}function le(E){return E===93?(e.consume(E),S):ne(E)}function S(E){return E===62?(e.consume(E),R):E===45&&l===2?(e.consume(E),S):ne(E)}function R(E){return E===null||Se(E)?(e.exit("htmlFlowData"),B(E)):(e.consume(E),R)}function B(E){return e.exit("htmlFlow"),r(E)}}function FS(e,r,i){const a=this;return l;function l(c){return Se(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),u):i(c)}function u(c){return a.parser.lazy[a.now().line]?i(c):r(c)}}function BS(e,r,i){return a;function a(l){return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),e.attempt(ul,r,i)}}const US={name:"htmlText",tokenize:$S};function $S(e,r,i){const a=this;let l,u,c;return f;function f(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),h}function h(S){return S===33?(e.consume(S),m):S===47?(e.consume(S),H):S===63?(e.consume(S),_):an(S)?(e.consume(S),Y):i(S)}function m(S){return S===45?(e.consume(S),g):S===91?(e.consume(S),u=0,z):an(S)?(e.consume(S),A):i(S)}function g(S){return S===45?(e.consume(S),y):i(S)}function v(S){return S===null?i(S):S===45?(e.consume(S),w):Se(S)?(c=v,me(S)):(e.consume(S),v)}function w(S){return S===45?(e.consume(S),y):v(S)}function y(S){return S===62?re(S):S===45?w(S):v(S)}function z(S){const R="CDATA[";return S===R.charCodeAt(u++)?(e.consume(S),u===R.length?P:z):i(S)}function P(S){return S===null?i(S):S===93?(e.consume(S),C):Se(S)?(c=P,me(S)):(e.consume(S),P)}function C(S){return S===93?(e.consume(S),j):P(S)}function j(S){return S===62?re(S):S===93?(e.consume(S),j):P(S)}function A(S){return S===null||S===62?re(S):Se(S)?(c=A,me(S)):(e.consume(S),A)}function _(S){return S===null?i(S):S===63?(e.consume(S),W):Se(S)?(c=_,me(S)):(e.consume(S),_)}function W(S){return S===62?re(S):_(S)}function H(S){return an(S)?(e.consume(S),L):i(S)}function L(S){return S===45||It(S)?(e.consume(S),L):V(S)}function V(S){return Se(S)?(c=V,me(S)):Le(S)?(e.consume(S),V):re(S)}function Y(S){return S===45||It(S)?(e.consume(S),Y):S===47||S===62||kt(S)?Z(S):i(S)}function Z(S){return S===47?(e.consume(S),re):S===58||S===95||an(S)?(e.consume(S),J):Se(S)?(c=Z,me(S)):Le(S)?(e.consume(S),Z):re(S)}function J(S){return S===45||S===46||S===58||S===95||It(S)?(e.consume(S),J):te(S)}function te(S){return S===61?(e.consume(S),ne):Se(S)?(c=te,me(S)):Le(S)?(e.consume(S),te):Z(S)}function ne(S){return S===null||S===60||S===61||S===62||S===96?i(S):S===34||S===39?(e.consume(S),l=S,xe):Se(S)?(c=ne,me(S)):Le(S)?(e.consume(S),ne):(e.consume(S),ie)}function xe(S){return S===l?(e.consume(S),l=void 0,U):S===null?i(S):Se(S)?(c=xe,me(S)):(e.consume(S),xe)}function ie(S){return S===null||S===34||S===39||S===60||S===61||S===96?i(S):S===47||S===62||kt(S)?Z(S):(e.consume(S),ie)}function U(S){return S===47||S===62||kt(S)?Z(S):i(S)}function re(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),r):i(S)}function me(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),F}function F(S){return Le(S)?Oe(e,le,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):le(S)}function le(S){return e.enter("htmlTextData"),c(S)}}const vc={name:"labelEnd",resolveAll:YS,resolveTo:qS,tokenize:GS},VS={tokenize:QS},HS={tokenize:KS},WS={tokenize:XS};function YS(e){let r=-1;const i=[];for(;++r<e.length;){const a=e[r][1];if(i.push(e[r]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const l=a.type==="labelImage"?4:2;a.type="data",r+=l}}return e.length!==i.length&&sn(e,0,e.length,i),e}function qS(e,r){let i=e.length,a=0,l,u,c,f;for(;i--;)if(l=e[i][1],u){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;e[i][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(c){if(e[i][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(u=i,l.type!=="labelLink")){a=2;break}}else l.type==="labelEnd"&&(c=i);const h={type:e[u][1].type==="labelLink"?"link":"image",start:{...e[u][1].start},end:{...e[e.length-1][1].end}},m={type:"label",start:{...e[u][1].start},end:{...e[c][1].end}},g={type:"labelText",start:{...e[u+a+2][1].end},end:{...e[c-2][1].start}};return f=[["enter",h,r],["enter",m,r]],f=Bt(f,e.slice(u+1,u+a+3)),f=Bt(f,[["enter",g,r]]),f=Bt(f,gc(r.parser.constructs.insideSpan.null,e.slice(u+a+4,c-3),r)),f=Bt(f,[["exit",g,r],e[c-2],e[c-1],["exit",m,r]]),f=Bt(f,e.slice(c+1)),f=Bt(f,[["exit",h,r]]),sn(e,u,e.length,f),e}function GS(e,r,i){const a=this;let l=a.events.length,u,c;for(;l--;)if((a.events[l][1].type==="labelImage"||a.events[l][1].type==="labelLink")&&!a.events[l][1]._balanced){u=a.events[l][1];break}return f;function f(w){return u?u._inactive?v(w):(c=a.parser.defined.includes(ni(a.sliceSerialize({start:u.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelEnd"),h):i(w)}function h(w){return w===40?e.attempt(VS,g,c?g:v)(w):w===91?e.attempt(HS,g,c?m:v)(w):c?g(w):v(w)}function m(w){return e.attempt(WS,g,v)(w)}function g(w){return r(w)}function v(w){return u._balanced=!0,i(w)}}function QS(e,r,i){return a;function a(v){return e.enter("resource"),e.enter("resourceMarker"),e.consume(v),e.exit("resourceMarker"),l}function l(v){return kt(v)?oo(e,u)(v):u(v)}function u(v){return v===41?g(v):Cg(e,c,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function c(v){return kt(v)?oo(e,h)(v):g(v)}function f(v){return i(v)}function h(v){return v===34||v===39||v===40?Pg(e,m,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):g(v)}function m(v){return kt(v)?oo(e,g)(v):g(v)}function g(v){return v===41?(e.enter("resourceMarker"),e.consume(v),e.exit("resourceMarker"),e.exit("resource"),r):i(v)}}function KS(e,r,i){const a=this;return l;function l(f){return Ng.call(a,e,u,c,"reference","referenceMarker","referenceString")(f)}function u(f){return a.parser.defined.includes(ni(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?r(f):i(f)}function c(f){return i(f)}}function XS(e,r,i){return a;function a(u){return e.enter("reference"),e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),l}function l(u){return u===93?(e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),e.exit("reference"),r):i(u)}}const JS={name:"labelStartImage",resolveAll:vc.resolveAll,tokenize:ZS};function ZS(e,r,i){const a=this;return l;function l(f){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(f),e.exit("labelImageMarker"),u}function u(f){return f===91?(e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelImage"),c):i(f)}function c(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(f):r(f)}}const e5={name:"labelStartLink",resolveAll:vc.resolveAll,tokenize:t5};function t5(e,r,i){const a=this;return l;function l(c){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelLink"),u}function u(c){return c===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(c):r(c)}}const ku={name:"lineEnding",tokenize:n5};function n5(e,r){return i;function i(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Oe(e,r,"linePrefix")}}const Ga={name:"thematicBreak",tokenize:r5};function r5(e,r,i){let a=0,l;return u;function u(m){return e.enter("thematicBreak"),c(m)}function c(m){return l=m,f(m)}function f(m){return m===l?(e.enter("thematicBreakSequence"),h(m)):a>=3&&(m===null||Se(m))?(e.exit("thematicBreak"),r(m)):i(m)}function h(m){return m===l?(e.consume(m),a++,h):(e.exit("thematicBreakSequence"),Le(m)?Oe(e,f,"whitespace")(m):f(m))}}const wt={continuation:{tokenize:l5},exit:u5,name:"list",tokenize:a5},i5={partial:!0,tokenize:c5},o5={partial:!0,tokenize:s5};function a5(e,r,i){const a=this,l=a.events[a.events.length-1];let u=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0,c=0;return f;function f(y){const z=a.containerState.type||(y===42||y===43||y===45?"listUnordered":"listOrdered");if(z==="listUnordered"?!a.containerState.marker||y===a.containerState.marker:Hu(y)){if(a.containerState.type||(a.containerState.type=z,e.enter(z,{_container:!0})),z==="listUnordered")return e.enter("listItemPrefix"),y===42||y===45?e.check(Ga,i,m)(y):m(y);if(!a.interrupt||y===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),h(y)}return i(y)}function h(y){return Hu(y)&&++c<10?(e.consume(y),h):(!a.interrupt||c<2)&&(a.containerState.marker?y===a.containerState.marker:y===41||y===46)?(e.exit("listItemValue"),m(y)):i(y)}function m(y){return e.enter("listItemMarker"),e.consume(y),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||y,e.check(ul,a.interrupt?i:g,e.attempt(i5,w,v))}function g(y){return a.containerState.initialBlankLine=!0,u++,w(y)}function v(y){return Le(y)?(e.enter("listItemPrefixWhitespace"),e.consume(y),e.exit("listItemPrefixWhitespace"),w):i(y)}function w(y){return a.containerState.size=u+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,r(y)}}function l5(e,r,i){const a=this;return a.containerState._closeFlow=void 0,e.check(ul,l,u);function l(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,Oe(e,r,"listItemIndent",a.containerState.size+1)(f)}function u(f){return a.containerState.furtherBlankLines||!Le(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,c(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(o5,r,c)(f))}function c(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,Oe(e,e.attempt(wt,r,i),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function s5(e,r,i){const a=this;return Oe(e,l,"listItemIndent",a.containerState.size+1);function l(u){const c=a.events[a.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===a.containerState.size?r(u):i(u)}}function u5(e){e.exit(this.containerState.type)}function c5(e,r,i){const a=this;return Oe(e,l,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function l(u){const c=a.events[a.events.length-1];return!Le(u)&&c&&c[1].type==="listItemPrefixWhitespace"?r(u):i(u)}}const gm={name:"setextUnderline",resolveTo:d5,tokenize:f5};function d5(e,r){let i=e.length,a,l,u;for(;i--;)if(e[i][0]==="enter"){if(e[i][1].type==="content"){a=i;break}e[i][1].type==="paragraph"&&(l=i)}else e[i][1].type==="content"&&e.splice(i,1),!u&&e[i][1].type==="definition"&&(u=i);const c={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[l][1].type="setextHeadingText",u?(e.splice(l,0,["enter",c,r]),e.splice(u+1,0,["exit",e[a][1],r]),e[a][1].end={...e[u][1].end}):e[a][1]=c,e.push(["exit",c,r]),e}function f5(e,r,i){const a=this;let l;return u;function u(m){let g=a.events.length,v;for(;g--;)if(a.events[g][1].type!=="lineEnding"&&a.events[g][1].type!=="linePrefix"&&a.events[g][1].type!=="content"){v=a.events[g][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||v)?(e.enter("setextHeadingLine"),l=m,c(m)):i(m)}function c(m){return e.enter("setextHeadingLineSequence"),f(m)}function f(m){return m===l?(e.consume(m),f):(e.exit("setextHeadingLineSequence"),Le(m)?Oe(e,h,"lineSuffix")(m):h(m))}function h(m){return m===null||Se(m)?(e.exit("setextHeadingLine"),r(m)):i(m)}}const p5={tokenize:m5};function m5(e){const r=this,i=e.attempt(ul,a,e.attempt(this.parser.constructs.flowInitial,l,Oe(e,e.attempt(this.parser.constructs.flow,l,e.attempt(xS,l)),"linePrefix")));return i;function a(u){if(u===null){e.consume(u);return}return e.enter("lineEndingBlank"),e.consume(u),e.exit("lineEndingBlank"),r.currentConstruct=void 0,i}function l(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),r.currentConstruct=void 0,i}}const h5={resolveAll:Rg()},g5=jg("string"),v5=jg("text");function jg(e){return{resolveAll:Rg(e==="text"?y5:void 0),tokenize:r};function r(i){const a=this,l=this.parser.constructs[e],u=i.attempt(l,c,f);return c;function c(g){return m(g)?u(g):f(g)}function f(g){if(g===null){i.consume(g);return}return i.enter("data"),i.consume(g),h}function h(g){return m(g)?(i.exit("data"),u(g)):(i.consume(g),h)}function m(g){if(g===null)return!0;const v=l[g];let w=-1;if(v)for(;++w<v.length;){const y=v[w];if(!y.previous||y.previous.call(a,a.previous))return!0}return!1}}}function Rg(e){return r;function r(i,a){let l=-1,u;for(;++l<=i.length;)u===void 0?i[l]&&i[l][1].type==="data"&&(u=l,l++):(!i[l]||i[l][1].type!=="data")&&(l!==u+2&&(i[u][1].end=i[l-1][1].end,i.splice(u+2,l-u-2),l=u+2),u=void 0);return e?e(i,a):i}}function y5(e,r){let i=0;for(;++i<=e.length;)if((i===e.length||e[i][1].type==="lineEnding")&&e[i-1][1].type==="data"){const a=e[i-1][1],l=r.sliceStream(a);let u=l.length,c=-1,f=0,h;for(;u--;){const m=l[u];if(typeof m=="string"){for(c=m.length;m.charCodeAt(c-1)===32;)f++,c--;if(c)break;c=-1}else if(m===-2)h=!0,f++;else if(m!==-1){u++;break}}if(r._contentTypeTextTrailing&&i===e.length&&(f=0),f){const m={type:i===e.length||h||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?c:a.start._bufferIndex+c,_index:a.start._index+u,line:a.end.line,column:a.end.column-f,offset:a.end.offset-f},end:{...a.end}};a.end={...m.start},a.start.offset===a.end.offset?Object.assign(a,m):(e.splice(i,0,["enter",m,r],["exit",m,r]),i+=2)}i++}return e}const x5={42:wt,43:wt,45:wt,48:wt,49:wt,50:wt,51:wt,52:wt,53:wt,54:wt,55:wt,56:wt,57:wt,62:wg},b5={91:ES},w5={[-2]:wu,[-1]:wu,32:wu},k5={35:TS,42:Ga,45:[gm,Ga],60:_S,61:gm,95:Ga,96:mm,126:mm},S5={38:Sg,92:kg},E5={[-5]:ku,[-4]:ku,[-3]:ku,33:JS,38:Sg,42:Wu,60:[eS,US],91:e5,92:[jS,kg],93:vc,95:Wu,96:pS},C5={null:[Wu,h5]},N5={null:[42,95]},P5={null:[]},j5=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:N5,contentInitial:b5,disable:P5,document:x5,flow:k5,flowInitial:w5,insideSpan:C5,string:S5,text:E5},Symbol.toStringTag,{value:"Module"}));function R5(e,r,i){let a={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const l={},u=[];let c=[],f=[];const h={attempt:V(H),check:V(L),consume:A,enter:_,exit:W,interrupt:V(L,{interrupt:!0})},m={code:null,containerState:{},defineSkip:P,events:[],now:z,parser:e,previous:null,sliceSerialize:w,sliceStream:y,write:v};let g=r.tokenize.call(m,h);return r.resolveAll&&u.push(r),m;function v(te){return c=Bt(c,te),C(),c[c.length-1]!==null?[]:(Y(r,0),m.events=gc(u,m.events,m),m.events)}function w(te,ne){return z5(y(te),ne)}function y(te){return T5(c,te)}function z(){const{_bufferIndex:te,_index:ne,line:xe,column:ie,offset:U}=a;return{_bufferIndex:te,_index:ne,line:xe,column:ie,offset:U}}function P(te){l[te.line]=te.column,J()}function C(){let te;for(;a._index<c.length;){const ne=c[a._index];if(typeof ne=="string")for(te=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===te&&a._bufferIndex<ne.length;)j(ne.charCodeAt(a._bufferIndex));else j(ne)}}function j(te){g=g(te)}function A(te){Se(te)?(a.line++,a.column=1,a.offset+=te===-3?2:1,J()):te!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===c[a._index].length&&(a._bufferIndex=-1,a._index++)),m.previous=te}function _(te,ne){const xe=ne||{};return xe.type=te,xe.start=z(),m.events.push(["enter",xe,m]),f.push(xe),xe}function W(te){const ne=f.pop();return ne.end=z(),m.events.push(["exit",ne,m]),ne}function H(te,ne){Y(te,ne.from)}function L(te,ne){ne.restore()}function V(te,ne){return xe;function xe(ie,U,re){let me,F,le,S;return Array.isArray(ie)?B(ie):"tokenize"in ie?B([ie]):R(ie);function R(he){return be;function be(Ee){const Re=Ee!==null&&he[Ee],De=Ee!==null&&he.null,Et=[...Array.isArray(Re)?Re:Re?[Re]:[],...Array.isArray(De)?De:De?[De]:[]];return B(Et)(Ee)}}function B(he){return me=he,F=0,he.length===0?re:E(he[F])}function E(he){return be;function be(Ee){return S=Z(),le=he,he.partial||(m.currentConstruct=he),he.name&&m.parser.constructs.disable.null.includes(he.name)?ge():he.tokenize.call(ne?Object.assign(Object.create(m),ne):m,h,ae,ge)(Ee)}}function ae(he){return te(le,S),U}function ge(he){return S.restore(),++F<me.length?E(me[F]):re}}}function Y(te,ne){te.resolveAll&&!u.includes(te)&&u.push(te),te.resolve&&sn(m.events,ne,m.events.length-ne,te.resolve(m.events.slice(ne),m)),te.resolveTo&&(m.events=te.resolveTo(m.events,m))}function Z(){const te=z(),ne=m.previous,xe=m.currentConstruct,ie=m.events.length,U=Array.from(f);return{from:ie,restore:re};function re(){a=te,m.previous=ne,m.currentConstruct=xe,m.events.length=ie,f=U,J()}}function J(){a.line in l&&a.column<2&&(a.column=l[a.line],a.offset+=l[a.line]-1)}}function T5(e,r){const i=r.start._index,a=r.start._bufferIndex,l=r.end._index,u=r.end._bufferIndex;let c;if(i===l)c=[e[i].slice(a,u)];else{if(c=e.slice(i,l),a>-1){const f=c[0];typeof f=="string"?c[0]=f.slice(a):c.shift()}u>0&&c.push(e[l].slice(0,u))}return c}function z5(e,r){let i=-1;const a=[];let l;for(;++i<e.length;){const u=e[i];let c;if(typeof u=="string")c=u;else switch(u){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=r?" ":"	";break}case-1:{if(!r&&l)continue;c=" ";break}default:c=String.fromCharCode(u)}l=u===-2,a.push(c)}return a.join("")}function I5(e){const a={constructs:F2([j5,...(e||{}).extensions||[]]),content:l(q2),defined:[],document:l(Q2),flow:l(p5),lazy:{},string:l(g5),text:l(v5)};return a;function l(u){return c;function c(f){return R5(a,u,f)}}}function L5(e){for(;!Eg(e););return e}const vm=/[\0\t\n\r]/g;function _5(){let e=1,r="",i=!0,a;return l;function l(u,c,f){const h=[];let m,g,v,w,y;for(u=r+(typeof u=="string"?u.toString():new TextDecoder(c||void 0).decode(u)),v=0,r="",i&&(u.charCodeAt(0)===65279&&v++,i=void 0);v<u.length;){if(vm.lastIndex=v,m=vm.exec(u),w=m&&m.index!==void 0?m.index:u.length,y=u.charCodeAt(w),!m){r=u.slice(v);break}if(y===10&&v===w&&a)h.push(-3),a=void 0;else switch(a&&(h.push(-5),a=void 0),v<w&&(h.push(u.slice(v,w)),e+=w-v),y){case 0:{h.push(65533),e++;break}case 9:{for(g=Math.ceil(e/4)*4,h.push(-2);e++<g;)h.push(-1);break}case 10:{h.push(-4),e=1;break}default:a=!0,e=1}v=w+1}return f&&(a&&h.push(-5),r&&h.push(r),h.push(null)),h}}const M5=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function A5(e){return e.replace(M5,O5)}function O5(e,r,i){if(r)return r;if(i.charCodeAt(0)===35){const l=i.charCodeAt(1),u=l===120||l===88;return bg(i.slice(u?2:1),u?16:10)}return hc(i)||e}const Tg={}.hasOwnProperty;function D5(e,r,i){return r&&typeof r=="object"&&(i=r,r=void 0),F5(i)(L5(I5(i).document().write(_5()(e,r,!0))))}function F5(e){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(kr),autolinkProtocol:Z,autolinkEmail:Z,atxHeading:u(ci),blockQuote:u(De),characterEscape:Z,characterReference:Z,codeFenced:u(Et),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:u(Et,c),codeText:u(un,c),codeTextData:Z,data:Z,codeFlowValue:Z,definition:u(br),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:u(ui),hardBreakEscape:u(di),hardBreakTrailing:u(di),htmlFlow:u(wr,c),htmlFlowData:Z,htmlText:u(wr,c),htmlTextData:Z,image:u(yo),label:c,link:u(kr),listItem:u(Cn),listItemValue:w,listOrdered:u(En,v),listUnordered:u(En),paragraph:u(fi),reference:E,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:u(ci),strong:u(xo),thematicBreak:u(wo)},exit:{atxHeading:h(),atxHeadingSequence:H,autolink:h(),autolinkEmail:Re,autolinkProtocol:Ee,blockQuote:h(),characterEscapeValue:J,characterReferenceMarkerHexadecimal:ge,characterReferenceMarkerNumeric:ge,characterReferenceValue:he,characterReference:be,codeFenced:h(C),codeFencedFence:P,codeFencedFenceInfo:y,codeFencedFenceMeta:z,codeFlowValue:J,codeIndented:h(j),codeText:h(U),codeTextData:J,data:J,definition:h(),definitionDestinationString:W,definitionLabelString:A,definitionTitleString:_,emphasis:h(),hardBreakEscape:h(ne),hardBreakTrailing:h(ne),htmlFlow:h(xe),htmlFlowData:J,htmlText:h(ie),htmlTextData:J,image:h(me),label:le,labelText:F,lineEnding:te,link:h(re),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:ae,resourceDestinationString:S,resourceTitleString:R,resource:B,setextHeading:h(Y),setextHeadingLineSequence:V,setextHeadingText:L,strong:h(),thematicBreak:h()}};zg(r,(e||{}).mdastExtensions||[]);const i={};return a;function a($){let ee={type:"root",children:[]};const we={stack:[ee],tokenStack:[],config:r,enter:f,exit:m,buffer:c,resume:g,data:i},Pe=[];let Te=-1;for(;++Te<$.length;)if($[Te][1].type==="listOrdered"||$[Te][1].type==="listUnordered")if($[Te][0]==="enter")Pe.push(Te);else{const nt=Pe.pop();Te=l($,nt,Te)}for(Te=-1;++Te<$.length;){const nt=r[$[Te][0]];Tg.call(nt,$[Te][1].type)&&nt[$[Te][1].type].call(Object.assign({sliceSerialize:$[Te][2].sliceSerialize},we),$[Te][1])}if(we.tokenStack.length>0){const nt=we.tokenStack[we.tokenStack.length-1];(nt[1]||ym).call(we,void 0,nt[0])}for(ee.position={start:qn($.length>0?$[0][1].start:{line:1,column:1,offset:0}),end:qn($.length>0?$[$.length-2][1].end:{line:1,column:1,offset:0})},Te=-1;++Te<r.transforms.length;)ee=r.transforms[Te](ee)||ee;return ee}function l($,ee,we){let Pe=ee-1,Te=-1,nt=!1,cn,Lt,Nn,Jn;for(;++Pe<=we;){const rt=$[Pe];switch(rt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{rt[0]==="enter"?Te++:Te--,Jn=void 0;break}case"lineEndingBlank":{rt[0]==="enter"&&(cn&&!Jn&&!Te&&!Nn&&(Nn=Pe),Jn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Jn=void 0}if(!Te&&rt[0]==="enter"&&rt[1].type==="listItemPrefix"||Te===-1&&rt[0]==="exit"&&(rt[1].type==="listUnordered"||rt[1].type==="listOrdered")){if(cn){let Xt=Pe;for(Lt=void 0;Xt--;){const Ct=$[Xt];if(Ct[1].type==="lineEnding"||Ct[1].type==="lineEndingBlank"){if(Ct[0]==="exit")continue;Lt&&($[Lt][1].type="lineEndingBlank",nt=!0),Ct[1].type="lineEnding",Lt=Xt}else if(!(Ct[1].type==="linePrefix"||Ct[1].type==="blockQuotePrefix"||Ct[1].type==="blockQuotePrefixWhitespace"||Ct[1].type==="blockQuoteMarker"||Ct[1].type==="listItemIndent"))break}Nn&&(!Lt||Nn<Lt)&&(cn._spread=!0),cn.end=Object.assign({},Lt?$[Lt][1].start:rt[1].end),$.splice(Lt||Pe,0,["exit",cn,rt[2]]),Pe++,we++}if(rt[1].type==="listItemPrefix"){const Xt={type:"listItem",_spread:!1,start:Object.assign({},rt[1].start),end:void 0};cn=Xt,$.splice(Pe,0,["enter",Xt,rt[2]]),Pe++,we++,Nn=void 0,Jn=!0}}}return $[ee][1]._spread=nt,we}function u($,ee){return we;function we(Pe){f.call(this,$(Pe),Pe),ee&&ee.call(this,Pe)}}function c(){this.stack.push({type:"fragment",children:[]})}function f($,ee,we){this.stack[this.stack.length-1].children.push($),this.stack.push($),this.tokenStack.push([ee,we||void 0]),$.position={start:qn(ee.start),end:void 0}}function h($){return ee;function ee(we){$&&$.call(this,we),m.call(this,we)}}function m($,ee){const we=this.stack.pop(),Pe=this.tokenStack.pop();if(Pe)Pe[0].type!==$.type&&(ee?ee.call(this,$,Pe[0]):(Pe[1]||ym).call(this,$,Pe[0]));else throw new Error("Cannot close `"+$.type+"` ("+io({start:$.start,end:$.end})+"): it’s not open");we.position.end=qn($.end)}function g(){return O2(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function w($){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize($),10),this.data.expectingFirstListItemValue=void 0}}function y(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=$}function z(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=$}function P(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.value=$.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function j(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.value=$.replace(/(\r?\n|\r)$/g,"")}function A($){const ee=this.resume(),we=this.stack[this.stack.length-1];we.label=ee,we.identifier=ni(this.sliceSerialize($)).toLowerCase()}function _(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.title=$}function W(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.url=$}function H($){const ee=this.stack[this.stack.length-1];if(!ee.depth){const we=this.sliceSerialize($).length;ee.depth=we}}function L(){this.data.setextHeadingSlurpLineEnding=!0}function V($){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize($).codePointAt(0)===61?1:2}function Y(){this.data.setextHeadingSlurpLineEnding=void 0}function Z($){const we=this.stack[this.stack.length-1].children;let Pe=we[we.length-1];(!Pe||Pe.type!=="text")&&(Pe=bo(),Pe.position={start:qn($.start),end:void 0},we.push(Pe)),this.stack.push(Pe)}function J($){const ee=this.stack.pop();ee.value+=this.sliceSerialize($),ee.position.end=qn($.end)}function te($){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const we=ee.children[ee.children.length-1];we.position.end=qn($.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(ee.type)&&(Z.call(this,$),J.call(this,$))}function ne(){this.data.atHardBreak=!0}function xe(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.value=$}function ie(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.value=$}function U(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.value=$}function re(){const $=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";$.type+="Reference",$.referenceType=ee,delete $.url,delete $.title}else delete $.identifier,delete $.label;this.data.referenceType=void 0}function me(){const $=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";$.type+="Reference",$.referenceType=ee,delete $.url,delete $.title}else delete $.identifier,delete $.label;this.data.referenceType=void 0}function F($){const ee=this.sliceSerialize($),we=this.stack[this.stack.length-2];we.label=A5(ee),we.identifier=ni(ee).toLowerCase()}function le(){const $=this.stack[this.stack.length-1],ee=this.resume(),we=this.stack[this.stack.length-1];if(this.data.inReference=!0,we.type==="link"){const Pe=$.children;we.children=Pe}else we.alt=ee}function S(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.url=$}function R(){const $=this.resume(),ee=this.stack[this.stack.length-1];ee.title=$}function B(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function ae($){const ee=this.resume(),we=this.stack[this.stack.length-1];we.label=ee,we.identifier=ni(this.sliceSerialize($)).toLowerCase(),this.data.referenceType="full"}function ge($){this.data.characterReferenceType=$.type}function he($){const ee=this.sliceSerialize($),we=this.data.characterReferenceType;let Pe;we?(Pe=bg(ee,we==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Pe=hc(ee);const Te=this.stack[this.stack.length-1];Te.value+=Pe}function be($){const ee=this.stack.pop();ee.position.end=qn($.end)}function Ee($){J.call(this,$);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize($)}function Re($){J.call(this,$);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize($)}function De(){return{type:"blockquote",children:[]}}function Et(){return{type:"code",lang:null,meta:null,value:""}}function un(){return{type:"inlineCode",value:""}}function br(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ui(){return{type:"emphasis",children:[]}}function ci(){return{type:"heading",depth:0,children:[]}}function di(){return{type:"break"}}function wr(){return{type:"html",value:""}}function yo(){return{type:"image",title:null,url:"",alt:null}}function kr(){return{type:"link",title:null,url:"",children:[]}}function En($){return{type:"list",ordered:$.type==="listOrdered",start:null,spread:$._spread,children:[]}}function Cn($){return{type:"listItem",spread:$._spread,checked:null,children:[]}}function fi(){return{type:"paragraph",children:[]}}function xo(){return{type:"strong",children:[]}}function bo(){return{type:"text",value:""}}function wo(){return{type:"thematicBreak"}}}function qn(e){return{line:e.line,column:e.column,offset:e.offset}}function zg(e,r){let i=-1;for(;++i<r.length;){const a=r[i];Array.isArray(a)?zg(e,a):B5(e,a)}}function B5(e,r){let i;for(i in r)if(Tg.call(r,i))switch(i){case"canContainEols":{const a=r[i];a&&e[i].push(...a);break}case"transforms":{const a=r[i];a&&e[i].push(...a);break}case"enter":case"exit":{const a=r[i];a&&Object.assign(e[i],a);break}}}function ym(e,r){throw e?new Error("Cannot close `"+e.type+"` ("+io({start:e.start,end:e.end})+"): a different token (`"+r.type+"`, "+io({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+io({start:r.start,end:r.end})+") is still open")}function U5(e){const r=this;r.parser=i;function i(a){return D5(a,{...r.data("settings"),...e,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function $5(e,r){const i={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(r),!0)};return e.patch(r,i),e.applyData(r,i)}function V5(e,r){const i={type:"element",tagName:"br",properties:{},children:[]};return e.patch(r,i),[e.applyData(r,i),{type:"text",value:`
`}]}function H5(e,r){const i=r.value?r.value+`
`:"",a={},l=r.lang?r.lang.split(/\s+/):[];l.length>0&&(a.className=["language-"+l[0]]);let u={type:"element",tagName:"code",properties:a,children:[{type:"text",value:i}]};return r.meta&&(u.data={meta:r.meta}),e.patch(r,u),u=e.applyData(r,u),u={type:"element",tagName:"pre",properties:{},children:[u]},e.patch(r,u),u}function W5(e,r){const i={type:"element",tagName:"del",properties:{},children:e.all(r)};return e.patch(r,i),e.applyData(r,i)}function Y5(e,r){const i={type:"element",tagName:"em",properties:{},children:e.all(r)};return e.patch(r,i),e.applyData(r,i)}function q5(e,r){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(r.identifier).toUpperCase(),l=si(a.toLowerCase()),u=e.footnoteOrder.indexOf(a);let c,f=e.footnoteCounts.get(a);f===void 0?(f=0,e.footnoteOrder.push(a),c=e.footnoteOrder.length):c=u+1,f+=1,e.footnoteCounts.set(a,f);const h={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+l,id:i+"fnref-"+l+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};e.patch(r,h);const m={type:"element",tagName:"sup",properties:{},children:[h]};return e.patch(r,m),e.applyData(r,m)}function G5(e,r){const i={type:"element",tagName:"h"+r.depth,properties:{},children:e.all(r)};return e.patch(r,i),e.applyData(r,i)}function Q5(e,r){if(e.options.allowDangerousHtml){const i={type:"raw",value:r.value};return e.patch(r,i),e.applyData(r,i)}}function Ig(e,r){const i=r.referenceType;let a="]";if(i==="collapsed"?a+="[]":i==="full"&&(a+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+a}];const l=e.all(r),u=l[0];u&&u.type==="text"?u.value="["+u.value:l.unshift({type:"text",value:"["});const c=l[l.length-1];return c&&c.type==="text"?c.value+=a:l.push({type:"text",value:a}),l}function K5(e,r){const i=String(r.identifier).toUpperCase(),a=e.definitionById.get(i);if(!a)return Ig(e,r);const l={src:si(a.url||""),alt:r.alt};a.title!==null&&a.title!==void 0&&(l.title=a.title);const u={type:"element",tagName:"img",properties:l,children:[]};return e.patch(r,u),e.applyData(r,u)}function X5(e,r){const i={src:si(r.url)};r.alt!==null&&r.alt!==void 0&&(i.alt=r.alt),r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(r,a),e.applyData(r,a)}function J5(e,r){const i={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};e.patch(r,i);const a={type:"element",tagName:"code",properties:{},children:[i]};return e.patch(r,a),e.applyData(r,a)}function Z5(e,r){const i=String(r.identifier).toUpperCase(),a=e.definitionById.get(i);if(!a)return Ig(e,r);const l={href:si(a.url||"")};a.title!==null&&a.title!==void 0&&(l.title=a.title);const u={type:"element",tagName:"a",properties:l,children:e.all(r)};return e.patch(r,u),e.applyData(r,u)}function eE(e,r){const i={href:si(r.url)};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(r)};return e.patch(r,a),e.applyData(r,a)}function tE(e,r,i){const a=e.all(r),l=i?nE(i):Lg(r),u={},c=[];if(typeof r.checked=="boolean"){const g=a[0];let v;g&&g.type==="element"&&g.tagName==="p"?v=g:(v={type:"element",tagName:"p",properties:{},children:[]},a.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const g=a[f];(l||f!==0||g.type!=="element"||g.tagName!=="p")&&c.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!l?c.push(...g.children):c.push(g)}const h=a[a.length-1];h&&(l||h.type!=="element"||h.tagName!=="p")&&c.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:u,children:c};return e.patch(r,m),e.applyData(r,m)}function nE(e){let r=!1;if(e.type==="list"){r=e.spread||!1;const i=e.children;let a=-1;for(;!r&&++a<i.length;)r=Lg(i[a])}return r}function Lg(e){const r=e.spread;return r??e.children.length>1}function rE(e,r){const i={},a=e.all(r);let l=-1;for(typeof r.start=="number"&&r.start!==1&&(i.start=r.start);++l<a.length;){const c=a[l];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const u={type:"element",tagName:r.ordered?"ol":"ul",properties:i,children:e.wrap(a,!0)};return e.patch(r,u),e.applyData(r,u)}function iE(e,r){const i={type:"element",tagName:"p",properties:{},children:e.all(r)};return e.patch(r,i),e.applyData(r,i)}function oE(e,r){const i={type:"root",children:e.wrap(e.all(r))};return e.patch(r,i),e.applyData(r,i)}function aE(e,r){const i={type:"element",tagName:"strong",properties:{},children:e.all(r)};return e.patch(r,i),e.applyData(r,i)}function lE(e,r){const i=e.all(r),a=i.shift(),l=[];if(a){const c={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(r.children[0],c),l.push(c)}if(i.length>0){const c={type:"element",tagName:"tbody",properties:{},children:e.wrap(i,!0)},f=dc(r.children[1]),h=pg(r.children[r.children.length-1]);f&&h&&(c.position={start:f,end:h}),l.push(c)}const u={type:"element",tagName:"table",properties:{},children:e.wrap(l,!0)};return e.patch(r,u),e.applyData(r,u)}function sE(e,r,i){const a=i?i.children:void 0,u=(a?a.indexOf(r):1)===0?"th":"td",c=i&&i.type==="table"?i.align:void 0,f=c?c.length:r.children.length;let h=-1;const m=[];for(;++h<f;){const v=r.children[h],w={},y=c?c[h]:void 0;y&&(w.align=y);let z={type:"element",tagName:u,properties:w,children:[]};v&&(z.children=e.all(v),e.patch(v,z),z=e.applyData(v,z)),m.push(z)}const g={type:"element",tagName:"tr",properties:{},children:e.wrap(m,!0)};return e.patch(r,g),e.applyData(r,g)}function uE(e,r){const i={type:"element",tagName:"td",properties:{},children:e.all(r)};return e.patch(r,i),e.applyData(r,i)}const xm=9,bm=32;function cE(e){const r=String(e),i=/\r?\n|\r/g;let a=i.exec(r),l=0;const u=[];for(;a;)u.push(wm(r.slice(l,a.index),l>0,!0),a[0]),l=a.index+a[0].length,a=i.exec(r);return u.push(wm(r.slice(l),l>0,!1)),u.join("")}function wm(e,r,i){let a=0,l=e.length;if(r){let u=e.codePointAt(a);for(;u===xm||u===bm;)a++,u=e.codePointAt(a)}if(i){let u=e.codePointAt(l-1);for(;u===xm||u===bm;)l--,u=e.codePointAt(l-1)}return l>a?e.slice(a,l):""}function dE(e,r){const i={type:"text",value:cE(String(r.value))};return e.patch(r,i),e.applyData(r,i)}function fE(e,r){const i={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(r,i),e.applyData(r,i)}const pE={blockquote:$5,break:V5,code:H5,delete:W5,emphasis:Y5,footnoteReference:q5,heading:G5,html:Q5,imageReference:K5,image:X5,inlineCode:J5,linkReference:Z5,link:eE,listItem:tE,list:rE,paragraph:iE,root:oE,strong:aE,table:lE,tableCell:uE,tableRow:sE,text:dE,thematicBreak:fE,toml:Ba,yaml:Ba,definition:Ba,footnoteDefinition:Ba};function Ba(){}const _g=-1,cl=0,ao=1,el=2,yc=3,xc=4,bc=5,wc=6,Mg=7,Ag=8,mE=typeof self=="object"?self:globalThis,km=(e,r)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new mE[e](r)},hE=(e,r)=>{const i=(l,u)=>(e.set(u,l),l),a=l=>{if(e.has(l))return e.get(l);const[u,c]=r[l];switch(u){case cl:case _g:return i(c,l);case ao:{const f=i([],l);for(const h of c)f.push(a(h));return f}case el:{const f=i({},l);for(const[h,m]of c)f[a(h)]=a(m);return f}case yc:return i(new Date(c),l);case xc:{const{source:f,flags:h}=c;return i(new RegExp(f,h),l)}case bc:{const f=i(new Map,l);for(const[h,m]of c)f.set(a(h),a(m));return f}case wc:{const f=i(new Set,l);for(const h of c)f.add(a(h));return f}case Mg:{const{name:f,message:h}=c;return i(km(f,h),l)}case Ag:return i(BigInt(c),l);case"BigInt":return i(Object(BigInt(c)),l);case"ArrayBuffer":return i(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:f}=new Uint8Array(c);return i(new DataView(f),c)}}return i(km(u,c),l)};return a},Sm=e=>hE(new Map,e)(0),Jr="",{toString:gE}={},{keys:vE}=Object,to=e=>{const r=typeof e;if(r!=="object"||!e)return[cl,r];const i=gE.call(e).slice(8,-1);switch(i){case"Array":return[ao,Jr];case"Object":return[el,Jr];case"Date":return[yc,Jr];case"RegExp":return[xc,Jr];case"Map":return[bc,Jr];case"Set":return[wc,Jr];case"DataView":return[ao,i]}return i.includes("Array")?[ao,i]:i.includes("Error")?[Mg,i]:[el,i]},Ua=([e,r])=>e===cl&&(r==="function"||r==="symbol"),yE=(e,r,i,a)=>{const l=(c,f)=>{const h=a.push(c)-1;return i.set(f,h),h},u=c=>{if(i.has(c))return i.get(c);let[f,h]=to(c);switch(f){case cl:{let g=c;switch(h){case"bigint":f=Ag,g=c.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+h);g=null;break;case"undefined":return l([_g],c)}return l([f,g],c)}case ao:{if(h){let w=c;return h==="DataView"?w=new Uint8Array(c.buffer):h==="ArrayBuffer"&&(w=new Uint8Array(c)),l([h,[...w]],c)}const g=[],v=l([f,g],c);for(const w of c)g.push(u(w));return v}case el:{if(h)switch(h){case"BigInt":return l([h,c.toString()],c);case"Boolean":case"Number":case"String":return l([h,c.valueOf()],c)}if(r&&"toJSON"in c)return u(c.toJSON());const g=[],v=l([f,g],c);for(const w of vE(c))(e||!Ua(to(c[w])))&&g.push([u(w),u(c[w])]);return v}case yc:return l([f,c.toISOString()],c);case xc:{const{source:g,flags:v}=c;return l([f,{source:g,flags:v}],c)}case bc:{const g=[],v=l([f,g],c);for(const[w,y]of c)(e||!(Ua(to(w))||Ua(to(y))))&&g.push([u(w),u(y)]);return v}case wc:{const g=[],v=l([f,g],c);for(const w of c)(e||!Ua(to(w)))&&g.push(u(w));return v}}const{message:m}=c;return l([f,{name:h,message:m}],c)};return u},Em=(e,{json:r,lossy:i}={})=>{const a=[];return yE(!(r||i),!!r,new Map,a)(e),a},tl=typeof structuredClone=="function"?(e,r)=>r&&("json"in r||"lossy"in r)?Sm(Em(e,r)):structuredClone(e):(e,r)=>Sm(Em(e,r));function xE(e,r){const i=[{type:"text",value:"↩"}];return r>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),i}function bE(e,r){return"Back to reference "+(e+1)+(r>1?"-"+r:"")}function wE(e){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=e.options.footnoteBackContent||xE,a=e.options.footnoteBackLabel||bE,l=e.options.footnoteLabel||"Footnotes",u=e.options.footnoteLabelTagName||"h2",c=e.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let h=-1;for(;++h<e.footnoteOrder.length;){const m=e.footnoteById.get(e.footnoteOrder[h]);if(!m)continue;const g=e.all(m),v=String(m.identifier).toUpperCase(),w=si(v.toLowerCase());let y=0;const z=[],P=e.footnoteCounts.get(v);for(;P!==void 0&&++y<=P;){z.length>0&&z.push({type:"text",value:" "});let A=typeof i=="string"?i:i(h,y);typeof A=="string"&&(A={type:"text",value:A}),z.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+w+(y>1?"-"+y:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(h,y),className:["data-footnote-backref"]},children:Array.isArray(A)?A:[A]})}const C=g[g.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const A=C.children[C.children.length-1];A&&A.type==="text"?A.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...z)}else g.push(...z);const j={type:"element",tagName:"li",properties:{id:r+"fn-"+w},children:e.wrap(g,!0)};e.patch(m,j),f.push(j)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...tl(c),id:"footnote-label"},children:[{type:"text",value:l}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(f,!0)},{type:"text",value:`
`}]}}const Og=(function(e){if(e==null)return CE;if(typeof e=="function")return dl(e);if(typeof e=="object")return Array.isArray(e)?kE(e):SE(e);if(typeof e=="string")return EE(e);throw new Error("Expected function, string, or object as test")});function kE(e){const r=[];let i=-1;for(;++i<e.length;)r[i]=Og(e[i]);return dl(a);function a(...l){let u=-1;for(;++u<r.length;)if(r[u].apply(this,l))return!0;return!1}}function SE(e){const r=e;return dl(i);function i(a){const l=a;let u;for(u in e)if(l[u]!==r[u])return!1;return!0}}function EE(e){return dl(r);function r(i){return i&&i.type===e}}function dl(e){return r;function r(i,a,l){return!!(NE(i)&&e.call(this,i,typeof a=="number"?a:void 0,l||void 0))}}function CE(){return!0}function NE(e){return e!==null&&typeof e=="object"&&"type"in e}const Dg=[],PE=!0,Cm=!1,jE="skip";function RE(e,r,i,a){let l;typeof r=="function"&&typeof i!="function"?(a=i,i=r):l=r;const u=Og(l),c=a?-1:1;f(e,void 0,[])();function f(h,m,g){const v=h&&typeof h=="object"?h:{};if(typeof v.type=="string"){const y=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(h.type+(y?"<"+y+">":""))+")"})}return w;function w(){let y=Dg,z,P,C;if((!r||u(h,m,g[g.length-1]||void 0))&&(y=TE(i(h,g)),y[0]===Cm))return y;if("children"in h&&h.children){const j=h;if(j.children&&y[0]!==jE)for(P=(a?j.children.length:-1)+c,C=g.concat(j);P>-1&&P<j.children.length;){const A=j.children[P];if(z=f(A,P,C)(),z[0]===Cm)return z;P=typeof z[1]=="number"?z[1]:P+c}}return y}}}function TE(e){return Array.isArray(e)?e:typeof e=="number"?[PE,e]:e==null?Dg:[e]}function Fg(e,r,i,a){let l,u,c;typeof r=="function"&&typeof i!="function"?(u=void 0,c=r,l=i):(u=r,c=i,l=a),RE(e,u,f,l);function f(h,m){const g=m[m.length-1],v=g?g.children.indexOf(h):void 0;return c(h,v,g)}}const Yu={}.hasOwnProperty,zE={};function IE(e,r){const i=r||zE,a=new Map,l=new Map,u=new Map,c={...pE,...i.handlers},f={all:m,applyData:_E,definitionById:a,footnoteById:l,footnoteCounts:u,footnoteOrder:[],handlers:c,one:h,options:i,patch:LE,wrap:AE};return Fg(e,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const v=g.type==="definition"?a:l,w=String(g.identifier).toUpperCase();v.has(w)||v.set(w,g)}}),f;function h(g,v){const w=g.type,y=f.handlers[w];if(Yu.call(f.handlers,w)&&y)return y(f,g,v);if(f.options.passThrough&&f.options.passThrough.includes(w)){if("children"in g){const{children:P,...C}=g,j=tl(C);return j.children=f.all(g),j}return tl(g)}return(f.options.unknownHandler||ME)(f,g,v)}function m(g){const v=[];if("children"in g){const w=g.children;let y=-1;for(;++y<w.length;){const z=f.one(w[y],g);if(z){if(y&&w[y-1].type==="break"&&(!Array.isArray(z)&&z.type==="text"&&(z.value=Nm(z.value)),!Array.isArray(z)&&z.type==="element")){const P=z.children[0];P&&P.type==="text"&&(P.value=Nm(P.value))}Array.isArray(z)?v.push(...z):v.push(z)}}}return v}}function LE(e,r){e.position&&(r.position=h2(e))}function _E(e,r){let i=r;if(e&&e.data){const a=e.data.hName,l=e.data.hChildren,u=e.data.hProperties;if(typeof a=="string")if(i.type==="element")i.tagName=a;else{const c="children"in i?i.children:[i];i={type:"element",tagName:a,properties:{},children:c}}i.type==="element"&&u&&Object.assign(i.properties,tl(u)),"children"in i&&i.children&&l!==null&&l!==void 0&&(i.children=l)}return i}function ME(e,r){const i=r.data||{},a="value"in r&&!(Yu.call(i,"hProperties")||Yu.call(i,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:e.all(r)};return e.patch(r,a),e.applyData(r,a)}function AE(e,r){const i=[];let a=-1;for(r&&i.push({type:"text",value:`
`});++a<e.length;)a&&i.push({type:"text",value:`
`}),i.push(e[a]);return r&&e.length>0&&i.push({type:"text",value:`
`}),i}function Nm(e){let r=0,i=e.charCodeAt(r);for(;i===9||i===32;)r++,i=e.charCodeAt(r);return e.slice(r)}function Pm(e,r){const i=IE(e,r),a=i.one(e,void 0),l=wE(i),u=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return l&&u.children.push({type:"text",value:`
`},l),u}function OE(e,r){return e&&"run"in e?async function(i,a){const l=Pm(i,{file:a,...r});await e.run(l,a)}:function(i,a){return Pm(i,{file:a,...e||r})}}function jm(e){if(e)throw e}var Su,Rm;function DE(){if(Rm)return Su;Rm=1;var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},u=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var g=e.call(m,"constructor"),v=m.constructor&&m.constructor.prototype&&e.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!g&&!v)return!1;var w;for(w in m);return typeof w>"u"||e.call(m,w)},c=function(m,g){i&&g.name==="__proto__"?i(m,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):m[g.name]=g.newValue},f=function(m,g){if(g==="__proto__")if(e.call(m,g)){if(a)return a(m,g).value}else return;return m[g]};return Su=function h(){var m,g,v,w,y,z,P=arguments[0],C=1,j=arguments.length,A=!1;for(typeof P=="boolean"&&(A=P,P=arguments[1]||{},C=2),(P==null||typeof P!="object"&&typeof P!="function")&&(P={});C<j;++C)if(m=arguments[C],m!=null)for(g in m)v=f(P,g),w=f(m,g),P!==w&&(A&&w&&(u(w)||(y=l(w)))?(y?(y=!1,z=v&&l(v)?v:[]):z=v&&u(v)?v:{},c(P,{name:g,newValue:h(A,z,w)})):typeof w<"u"&&c(P,{name:g,newValue:w}));return P},Su}var FE=DE();const Eu=nl(FE);function qu(e){if(typeof e!="object"||e===null)return!1;const r=Object.getPrototypeOf(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function BE(){const e=[],r={run:i,use:a};return r;function i(...l){let u=-1;const c=l.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);f(null,...l);function f(h,...m){const g=e[++u];let v=-1;if(h){c(h);return}for(;++v<l.length;)(m[v]===null||m[v]===void 0)&&(m[v]=l[v]);l=m,g?UE(g,f)(...m):c(null,...m)}}function a(l){if(typeof l!="function")throw new TypeError("Expected `middelware` to be a function, not "+l);return e.push(l),r}}function UE(e,r){let i;return a;function a(...c){const f=e.length>c.length;let h;f&&c.push(l);try{h=e.apply(this,c)}catch(m){const g=m;if(f&&i)throw g;return l(g)}f||(h&&h.then&&typeof h.then=="function"?h.then(u,l):h instanceof Error?l(h):u(h))}function l(c,...f){i||(i=!0,r(c,...f))}function u(c){l(null,c)}}const rn={basename:$E,dirname:VE,extname:HE,join:WE,sep:"/"};function $E(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');vo(e);let i=0,a=-1,l=e.length,u;if(r===void 0||r.length===0||r.length>e.length){for(;l--;)if(e.codePointAt(l)===47){if(u){i=l+1;break}}else a<0&&(u=!0,a=l+1);return a<0?"":e.slice(i,a)}if(r===e)return"";let c=-1,f=r.length-1;for(;l--;)if(e.codePointAt(l)===47){if(u){i=l+1;break}}else c<0&&(u=!0,c=l+1),f>-1&&(e.codePointAt(l)===r.codePointAt(f--)?f<0&&(a=l):(f=-1,a=c));return i===a?a=c:a<0&&(a=e.length),e.slice(i,a)}function VE(e){if(vo(e),e.length===0)return".";let r=-1,i=e.length,a;for(;--i;)if(e.codePointAt(i)===47){if(a){r=i;break}}else a||(a=!0);return r<0?e.codePointAt(0)===47?"/":".":r===1&&e.codePointAt(0)===47?"//":e.slice(0,r)}function HE(e){vo(e);let r=e.length,i=-1,a=0,l=-1,u=0,c;for(;r--;){const f=e.codePointAt(r);if(f===47){if(c){a=r+1;break}continue}i<0&&(c=!0,i=r+1),f===46?l<0?l=r:u!==1&&(u=1):l>-1&&(u=-1)}return l<0||i<0||u===0||u===1&&l===i-1&&l===a+1?"":e.slice(l,i)}function WE(...e){let r=-1,i;for(;++r<e.length;)vo(e[r]),e[r]&&(i=i===void 0?e[r]:i+"/"+e[r]);return i===void 0?".":YE(i)}function YE(e){vo(e);const r=e.codePointAt(0)===47;let i=qE(e,!r);return i.length===0&&!r&&(i="."),i.length>0&&e.codePointAt(e.length-1)===47&&(i+="/"),r?"/"+i:i}function qE(e,r){let i="",a=0,l=-1,u=0,c=-1,f,h;for(;++c<=e.length;){if(c<e.length)f=e.codePointAt(c);else{if(f===47)break;f=47}if(f===47){if(!(l===c-1||u===1))if(l!==c-1&&u===2){if(i.length<2||a!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(h=i.lastIndexOf("/"),h!==i.length-1){h<0?(i="",a=0):(i=i.slice(0,h),a=i.length-1-i.lastIndexOf("/")),l=c,u=0;continue}}else if(i.length>0){i="",a=0,l=c,u=0;continue}}r&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+e.slice(l+1,c):i=e.slice(l+1,c),a=c-l-1;l=c,u=0}else f===46&&u>-1?u++:u=-1}return i}function vo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const GE={cwd:QE};function QE(){return"/"}function Gu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function KE(e){if(typeof e=="string")e=new URL(e);else if(!Gu(e)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(e.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return XE(e)}function XE(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const r=e.pathname;let i=-1;for(;++i<r.length;)if(r.codePointAt(i)===37&&r.codePointAt(i+1)===50){const a=r.codePointAt(i+2);if(a===70||a===102){const l=new TypeError("File URL path must not include encoded / characters");throw l.code="ERR_INVALID_FILE_URL_PATH",l}}return decodeURIComponent(r)}const Cu=["history","path","basename","stem","extname","dirname"];class Bg{constructor(r){let i;r?Gu(r)?i={path:r}:typeof r=="string"||JE(r)?i={value:r}:i=r:i={},this.cwd="cwd"in i?"":GE.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Cu.length;){const u=Cu[a];u in i&&i[u]!==void 0&&i[u]!==null&&(this[u]=u==="history"?[...i[u]]:i[u])}let l;for(l in i)Cu.includes(l)||(this[l]=i[l])}get basename(){return typeof this.path=="string"?rn.basename(this.path):void 0}set basename(r){Pu(r,"basename"),Nu(r,"basename"),this.path=rn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?rn.dirname(this.path):void 0}set dirname(r){Tm(this.basename,"dirname"),this.path=rn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?rn.extname(this.path):void 0}set extname(r){if(Nu(r,"extname"),Tm(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=rn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){Gu(r)&&(r=KE(r)),Pu(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?rn.basename(this.path,this.extname):void 0}set stem(r){Pu(r,"stem"),Nu(r,"stem"),this.path=rn.join(this.dirname||"",r+(this.extname||""))}fail(r,i,a){const l=this.message(r,i,a);throw l.fatal=!0,l}info(r,i,a){const l=this.message(r,i,a);return l.fatal=void 0,l}message(r,i,a){const l=new dt(r,i,a);return this.path&&(l.name=this.path+":"+l.name,l.file=this.path),l.fatal=!1,this.messages.push(l),l}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Nu(e,r){if(e&&e.includes(rn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+rn.sep+"`")}function Pu(e,r){if(!e)throw new Error("`"+r+"` cannot be empty")}function Tm(e,r){if(!e)throw new Error("Setting `"+r+"` requires `path` to be set too")}function JE(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const ZE=(function(e){const a=this.constructor.prototype,l=a[e],u=function(){return l.apply(u,arguments)};return Object.setPrototypeOf(u,a),u}),eC={}.hasOwnProperty;class kc extends ZE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=BE()}copy(){const r=new kc;let i=-1;for(;++i<this.attachers.length;){const a=this.attachers[i];r.use(...a)}return r.data(Eu(!0,{},this.namespace)),r}data(r,i){return typeof r=="string"?arguments.length===2?(Tu("data",this.frozen),this.namespace[r]=i,this):eC.call(this.namespace,r)&&this.namespace[r]||void 0:r?(Tu("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const l=i.call(r,...a);typeof l=="function"&&this.transformers.use(l)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const i=$a(r),a=this.parser||this.Parser;return ju("parse",a),a(String(i),i)}process(r,i){const a=this;return this.freeze(),ju("process",this.parser||this.Parser),Ru("process",this.compiler||this.Compiler),i?l(void 0,i):new Promise(l);function l(u,c){const f=$a(r),h=a.parse(f);a.run(h,f,function(g,v,w){if(g||!v||!w)return m(g);const y=v,z=a.stringify(y,w);rC(z)?w.value=z:w.result=z,m(g,w)});function m(g,v){g||!v?c(g):u?u(v):i(void 0,v)}}}processSync(r){let i=!1,a;return this.freeze(),ju("processSync",this.parser||this.Parser),Ru("processSync",this.compiler||this.Compiler),this.process(r,l),Im("processSync","process",i),a;function l(u,c){i=!0,jm(u),a=c}}run(r,i,a){zm(r),this.freeze();const l=this.transformers;return!a&&typeof i=="function"&&(a=i,i=void 0),a?u(void 0,a):new Promise(u);function u(c,f){const h=$a(i);l.run(r,h,m);function m(g,v,w){const y=v||r;g?f(g):c?c(y):a(void 0,y,w)}}}runSync(r,i){let a=!1,l;return this.run(r,i,u),Im("runSync","run",a),l;function u(c,f){jm(c),l=f,a=!0}}stringify(r,i){this.freeze();const a=$a(i),l=this.compiler||this.Compiler;return Ru("stringify",l),zm(r),l(r,a)}use(r,...i){const a=this.attachers,l=this.namespace;if(Tu("use",this.frozen),r!=null)if(typeof r=="function")h(r,i);else if(typeof r=="object")Array.isArray(r)?f(r):c(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function u(m){if(typeof m=="function")h(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[g,...v]=m;h(g,v)}else c(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function c(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(m.plugins),m.settings&&(l.settings=Eu(!0,l.settings,m.settings))}function f(m){let g=-1;if(m!=null)if(Array.isArray(m))for(;++g<m.length;){const v=m[g];u(v)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function h(m,g){let v=-1,w=-1;for(;++v<a.length;)if(a[v][0]===m){w=v;break}if(w===-1)a.push([m,...g]);else if(g.length>0){let[y,...z]=g;const P=a[w][1];qu(P)&&qu(y)&&(y=Eu(!0,P,y)),a[w]=[m,y,...z]}}}}const tC=new kc().freeze();function ju(e,r){if(typeof r!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ru(e,r){if(typeof r!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Tu(e,r){if(r)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function zm(e){if(!qu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Im(e,r,i){if(!i)throw new Error("`"+e+"` finished async. Use `"+r+"` instead")}function $a(e){return nC(e)?e:new Bg(e)}function nC(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function rC(e){return typeof e=="string"||iC(e)}function iC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const oC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Lm=[],_m={allowDangerousHtml:!0},aC=/^(https?|ircs?|mailto|xmpp)$/i,lC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function sC(e){const r=uC(e),i=cC(e);return dC(r.runSync(r.parse(i),i),e)}function uC(e){const r=e.rehypePlugins||Lm,i=e.remarkPlugins||Lm,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,..._m}:_m;return tC().use(U5).use(i).use(OE,a).use(r)}function cC(e){const r=e.children||"",i=new Bg;return typeof r=="string"&&(i.value=r),i}function dC(e,r){const i=r.allowedElements,a=r.allowElement,l=r.components,u=r.disallowedElements,c=r.skipHtml,f=r.unwrapDisallowed,h=r.urlTransform||fC;for(const g of lC)Object.hasOwn(r,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+oC+g.id,void 0);return Fg(e,m),b2(e,{Fragment:b.Fragment,components:l,ignoreInvalidStyle:!0,jsx:b.jsx,jsxs:b.jsxs,passKeys:!0,passNode:!0});function m(g,v,w){if(g.type==="raw"&&w&&typeof v=="number")return c?w.children.splice(v,1):w.children[v]={type:"text",value:g.value},v;if(g.type==="element"){let y;for(y in bu)if(Object.hasOwn(bu,y)&&Object.hasOwn(g.properties,y)){const z=g.properties[y],P=bu[y];(P===null||P.includes(g.tagName))&&(g.properties[y]=h(String(z||""),y,g))}}if(g.type==="element"){let y=i?!i.includes(g.tagName):u?u.includes(g.tagName):!1;if(!y&&a&&typeof v=="number"&&(y=!a(g,v,w)),y&&w&&typeof v=="number")return f&&g.children?w.children.splice(v,1,...g.children):w.children.splice(v,1),v}}}function fC(e){const r=e.indexOf(":"),i=e.indexOf("?"),a=e.indexOf("#"),l=e.indexOf("/");return r===-1||l!==-1&&r>l||i!==-1&&r>i||a!==-1&&r>a||aC.test(e.slice(0,r))?e:""}function pC(){const e=gr(),[r,i]=k.useState([{role:"assistant",content:"Welcome to Web Maker! Describe the website you want to build, or pick a starting point from the templates."}]),[a,l]=k.useState(""),[u,c]=k.useState(!1),f=k.useRef(null),h=k.useRef(null),m={Portfolios:{html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Chen - Creative Developer & Designer</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🎨</span>
        Alex Chen
      </div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="cta-btn">Let's Talk</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span>Available for new projects</span>
        </div>
        <h1 class="hero-title">
          Crafting Digital<br>
          <span class="highlight">Experiences</span>
        </h1>
        <p class="hero-subtitle">
          I'm a passionate developer and designer creating meaningful digital solutions that combine beautiful design with powerful functionality.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat">
            <div class="stat-number">3+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat">
            <div class="stat-number">100%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
        </div>
        <div class="hero-actions">
          <button class="primary-button">View My Work</button>
          <button class="secondary-button">Download CV</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="profile-image">
          <div class="image-placeholder">
            <span>👨‍💻</span>
          </div>
          <div class="floating-elements">
            <div class="floating-card card-1">
              <span>💻</span>
            </div>
            <div class="floating-card card-2">
              <span>🎯</span>
            </div>
            <div class="floating-card card-3">
              <span>🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <div class="section-badge">About Me</div>
          <h2 class="section-title">
            Passionate about creating<br>
            <span class="text-highlight">exceptional experiences</span>
          </h2>
          <p class="about-text">
            With over 3 years of experience in web development and design, I specialize in creating digital solutions that not only look beautiful but also deliver exceptional user experiences. My approach combines technical expertise with creative vision.
          </p>
          <p class="about-text">
            I believe in the power of collaboration and continuous learning. Every project is an opportunity to push boundaries and create something truly remarkable.
          </p>
          <div class="about-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">🎯</div>
              <div>
                <h4>Problem Solver</h4>
                <p>Turning complex challenges into elegant solutions</p>
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">💡</div>
              <div>
                <h4>Innovative Thinker</h4>
                <p>Bringing fresh perspectives to every project</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="skills-showcase">
            <div class="skill-circle">
              <div class="circle-content">
                <span class="skill-percentage">95%</span>
                <span class="skill-name">React</span>
              </div>
            </div>
            <div class="skill-circle">
              <div class="circle-content">
                <span class="skill-percentage">90%</span>
                <span class="skill-name">TypeScript</span>
              </div>
            </div>
            <div class="skill-circle">
              <div class="circle-content">
                <span class="skill-percentage">85%</span>
                <span class="skill-name">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="work" class="work">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">My Work</div>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">A selection of projects that showcase my skills and passion for creating exceptional digital experiences.</p>
      </div>
      <div class="work-grid">
        <div class="work-card featured">
          <div class="work-image">
            <div class="image-placeholder">
              <span>🛒</span>
            </div>
            <div class="work-category">E-Commerce</div>
          </div>
          <div class="work-content">
            <h3>EcoShop - Sustainable E-Commerce</h3>
            <p>A modern e-commerce platform built with React and Node.js, featuring sustainable product curation and seamless checkout experience.</p>
            <div class="work-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div class="work-links">
              <a href="#" class="work-link">View Live</a>
              <a href="#" class="work-link secondary">View Code</a>
            </div>
          </div>
        </div>
        <div class="work-card">
          <div class="work-image">
            <div class="image-placeholder">
              <span>📱</span>
            </div>
            <div class="work-category">Mobile App</div>
          </div>
          <div class="work-content">
            <h3>FitTracker Pro</h3>
            <p>A comprehensive fitness tracking app with personalized workout plans and progress analytics.</p>
            <div class="work-tech">
              <span>React Native</span>
              <span>Firebase</span>
            </div>
            <div class="work-links">
              <a href="#" class="work-link">View Live</a>
            </div>
          </div>
        </div>
        <div class="work-card">
          <div class="work-image">
            <div class="image-placeholder">
              <span>🎨</span>
            </div>
            <div class="work-category">Design System</div>
          </div>
          <div class="work-content">
            <h3>DesignFlow UI Kit</h3>
            <p>A comprehensive design system and component library for modern web applications.</p>
            <div class="work-tech">
              <span>Figma</span>
              <span>Storybook</span>
            </div>
            <div class="work-links">
              <a href="#" class="work-link">View Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">Expertise</div>
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Proficient in modern technologies and frameworks</p>
      </div>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend Development</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">⚛️</div>
              <div class="skill-info">
                <h4>React & Next.js</h4>
                <p>Advanced component architecture and SSR</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🎨</div>
              <div class="skill-info">
                <h4>TypeScript & JavaScript</h4>
                <p>Type-safe development and modern ES6+</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">💅</div>
              <div class="skill-info">
                <h4>CSS & Tailwind</h4>
                <p>Responsive design and modern styling</p>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Backend & Tools</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">🟢</div>
              <div class="skill-info">
                <h4>Node.js & Express</h4>
                <p>RESTful APIs and server-side development</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🗄️</div>
              <div class="skill-info">
                <h4>Databases</h4>
                <p>MongoDB, PostgreSQL, and Redis</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">☁️</div>
              <div class="skill-info">
                <h4>Cloud & DevOps</h4>
                <p>AWS, Docker, and CI/CD pipelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to bring your ideas to life?</h2>
        <p>Let's collaborate and create something amazing together.</p>
        <div class="cta-actions">
          <button class="cta-button primary">Start a Project</button>
          <button class="cta-button secondary">Get In Touch</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">🎨</span>
            Alex Chen
          </div>
          <p>Creating digital experiences that matter.</p>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Dribbble</a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Work</h4>
            <a href="#">Portfolio</a>
            <a href="#">Case Studies</a>
            <a href="#">Testimonials</a>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <a href="#">Web Development</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Consulting</a>
          </div>
          <div class="footer-column">
            <h4>Contact</h4>
            <a href="#">hello@alexchen.dev</a>
            <a href="#">Schedule a Call</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Alex Chen. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.cta-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-btn:hover {
  background: #1d4ed8;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="50" r="1" fill="white" opacity="0.05"/></pattern></defs><rect width="1000" height="1000" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #fbbf24;
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.primary-button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero-visual {
  position: relative;
}

.profile-image {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.floating-card {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: -20px;
  right: -20px;
  animation-delay: 0s;
}

.card-2 {
  bottom: -20px;
  left: -20px;
  animation-delay: 2s;
}

.card-3 {
  top: 50%;
  left: -30px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-badge {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.text-highlight {
  color: #2563eb;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.about {
  padding: 6rem 0;
  background: #f8fafc;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-content {
  max-width: 500px;
}

.about-text {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.highlight-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.highlight-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.highlight-item p {
  color: #6b7280;
  font-size: 0.875rem;
}

.about-visual {
  display: flex;
  justify-content: center;
}

.skills-showcase {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-circle {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.skill-circle::before {
  content: '';
  position: absolute;
  inset: 8px;
  background: white;
  border-radius: 50%;
}

.circle-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.skill-percentage {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
  display: block;
}

.skill-name {
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
}

.work {
  padding: 6rem 0;
  background: white;
}

.work-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.work-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.work-card.featured {
  grid-column: span 2;
}

.work-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.work-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #2563eb;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.work-content {
  padding: 1.5rem;
}

.work-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.work-content p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.work-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.work-tech span {
  background: #f3f4f6;
  color: #4b5563;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.work-links {
  display: flex;
  gap: 1rem;
}

.work-link {
  color: #2563eb;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.work-link:hover {
  color: #1d4ed8;
}

.work-link.secondary {
  color: #6b7280;
}

.work-link.secondary:hover {
  color: #4b5563;
}

.skills {
  padding: 6rem 0;
  background: #f8fafc;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.skill-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.skill-info p {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}

.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button.primary {
  background: white;
  color: #2563eb;
  border: none;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #2563eb;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }

  .floating-card {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-visual {
    order: -1;
  }

  .skills-showcase {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .skill-circle {
    width: 100px;
    height: 100px;
  }

  .work-grid {
    grid-template-columns: 1fr;
  }

  .work-card.featured {
    grid-column: span 1;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skill-items {
    gap: 1rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}`},"SaaS Landing Pages":{html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TaskFlow - Productivity Made Simple</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">⚡</span>
        TaskFlow
      </div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>
      <div class="nav-actions">
        <button class="login-btn">Log In</button>
        <button class="signup-btn">Start Free Trial</button>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="badge">
          <span>✨ New: AI-Powered Workflow</span>
        </div>
        <h1 class="hero-title">
          Streamline Your Team's<br>
          <span class="highlight">Productivity</span>
        </h1>
        <p class="hero-subtitle">
          TaskFlow combines powerful project management with intelligent automation to help teams achieve more, faster.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50K+</div>
            <div class="stat-label">Active Users</div>
          </div>
          <div class="stat">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
          <div class="stat">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support</div>
          </div>
        </div>
        <div class="hero-actions">
          <button class="primary-button">Start Free Trial</button>
          <button class="secondary-button">Watch Demo</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="dashboard-preview">
          <div class="preview-header">
            <div class="preview-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="preview-content">
            <div class="preview-card">
              <h4>Project Alpha</h4>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>
            <div class="preview-card">
              <h4>Team Tasks</h4>
              <div class="task-list">
                <div class="task-item">✓ Design review</div>
                <div class="task-item">○ Code review</div>
                <div class="task-item">○ Deploy to production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Everything you need to succeed</h2>
        <p class="section-subtitle">Powerful features designed for modern teams</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Lightning Fast</h3>
          <p>Optimized performance with instant loading and real-time updates across all devices.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Enterprise Security</h3>
          <p>Bank-level encryption and compliance with SOC 2, GDPR, and industry standards.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3>AI Automation</h3>
          <p>Intelligent workflows that learn from your patterns and automate repetitive tasks.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Advanced Analytics</h3>
          <p>Detailed insights and reporting to track progress and optimize team performance.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3>Seamless Integration</h3>
          <p>Connect with 200+ tools including Slack, GitHub, Jira, and Google Workspace.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>Dedicated support team available around the clock with live chat and video calls.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to transform your workflow?</h2>
        <p>Join thousands of teams already using TaskFlow to boost productivity.</p>
        <button class="cta-button">Get Started Today</button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">⚡</span>
            TaskFlow
          </div>
          <p>Streamlining productivity for modern teams.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Security</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Status</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 TaskFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.login-btn {
  background: transparent;
  color: #4b5563;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.login-btn:hover {
  color: #2563eb;
}

.signup-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.signup-btn:hover {
  background: #1d4ed8;
}

.hero {
  padding: 8rem 2rem 6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #fbbf24;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.primary-button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dashboard-preview {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.preview-dots {
  display: flex;
  gap: 0.5rem;
}

.preview-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preview-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(5px);
}

.preview-card h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 75%;
  background: #fbbf24;
  border-radius: 2px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.task-item {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  padding: 6rem 0;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .nav-links {
    display: none;
  }

  .nav-actions {
    flex-direction: column;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}`},"Restaurant Sites":{html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Bella Vista - Fine Italian Dining</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🍽️</span>
        La Bella Vista
      </div>
      <div class="nav-links">
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="reserve-btn">Reserve Table</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <div class="hero-content">
        <div class="badge">
          <span>⭐ Michelin Star Restaurant</span>
        </div>
        <h1 class="hero-title">
          Experience Authentic<br>
          <span class="highlight">Italian Cuisine</span>
        </h1>
        <p class="hero-subtitle">
          Indulge in the finest Italian dining experience with fresh ingredients, traditional recipes, and impeccable service in an elegant atmosphere.
        </p>
        <div class="hero-actions">
          <button class="primary-button">Make Reservation</button>
          <button class="secondary-button">View Menu</button>
        </div>
      </div>
    </div>
  </section>

  <section id="menu" class="menu">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Menu</h2>
        <p class="section-subtitle">Fresh, seasonal ingredients prepared with traditional Italian techniques</p>
      </div>
      <div class="menu-categories">
        <div class="category-tabs">
          <button class="tab active" data-category="appetizers">Appetizers</button>
          <button class="tab" data-category="mains">Main Courses</button>
          <button class="tab" data-category="desserts">Desserts</button>
          <button class="tab" data-category="wines">Wine Selection</button>
        </div>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-info">
              <h3>Antipasto della Casa</h3>
              <p>Selection of cured meats, artisanal cheeses, and seasonal vegetables</p>
            </div>
            <div class="item-price">$24</div>
          </div>
          <div class="menu-item">
            <div class="item-info">
              <h3>Risotto ai Funghi</h3>
              <p>Creamy Arborio rice with wild mushrooms, truffle oil, and Parmesan</p>
            </div>
            <div class="item-price">$28</div>
          </div>
          <div class="menu-item">
            <div class="item-info">
              <h3>Ossobuco alla Milanese</h3>
              <p>Braised veal shanks with saffron risotto and gremolata</p>
            </div>
            <div class="item-price">$42</div>
          </div>
          <div class="menu-item">
            <div class="item-info">
              <h3>Tiramisu Classico</h3>
              <p>Traditional coffee-flavored dessert with mascarpone and ladyfingers</p>
            </div>
            <div class="item-price">$12</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="reservations" class="reservations">
    <div class="container">
      <div class="reservation-content">
        <div class="reservation-info">
          <h2>Make a Reservation</h2>
          <p>Book your table for an unforgettable dining experience</p>
          <div class="reservation-features">
            <div class="feature">
              <span class="feature-icon">🕐</span>
              <span>Open daily 5:30 PM - 11:00 PM</span>
            </div>
            <div class="feature">
              <span class="feature-icon">👥</span>
              <span>Groups up to 12 people</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🎩</span>
              <span>Dress code: Smart casual</span>
            </div>
          </div>
        </div>
        <div class="reservation-form">
          <form>
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" placeholder="Your name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="date">Date</label>
                <input type="date" id="date">
              </div>
              <div class="form-group">
                <label for="time">Time</label>
                <select id="time">
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="guests">Number of Guests</label>
              <select id="guests">
                <option>1 person</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5-8 people</option>
                <option>9+ people</option>
              </select>
            </div>
            <button type="submit" class="submit-btn">Reserve Table</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>Our Story</h2>
          <p>La Bella Vista has been serving authentic Italian cuisine for over 25 years. Our passion for traditional recipes, combined with the finest seasonal ingredients, creates an unforgettable dining experience.</p>
          <p>Chef Marco brings his family's recipes from Tuscany, passed down through generations, to create dishes that celebrate the rich culinary heritage of Italy.</p>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <span>👨‍🍳</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">🍽️</span>
            La Bella Vista
          </div>
          <p>Authentic Italian dining since 1999</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Visit Us</h4>
            <p>123 Italian Street<br>New York, NY 10001</p>
            <p>(555) 123-4567</p>
          </div>
          <div class="footer-column">
            <h4>Hours</h4>
            <p>Mon-Thu: 5:30 PM - 10:00 PM</p>
            <p>Fri-Sat: 5:30 PM - 11:00 PM</p>
            <p>Sunday: 5:00 PM - 9:00 PM</p>
          </div>
          <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 La Bella Vista. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  line-height: 1.6;
  color: #2d3748;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #d97706;
}

.reserve-btn {
  background: #d97706;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reserve-btn:hover {
  background: #b45309;
}

.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%238B4513" width="1200" height="800"/><text fill="white" font-size="100" x="600" y="400" text-anchor="middle">Restaurant</text></svg>');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(217, 119, 6, 0.8), rgba(180, 83, 9, 0.8));
}

.hero-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #fbbf24;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Inter', sans-serif;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button {
  background: white;
  color: #d97706;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.menu {
  padding: 6rem 0;
  background: #f7fafc;
}

.menu-categories {
  max-width: 800px;
  margin: 0 auto;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.tab {
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.tab.active {
  background: #d97706;
  color: white;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.item-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.item-info p {
  color: #718096;
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
}

.item-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #d97706;
}

.reservations {
  padding: 6rem 0;
  background: white;
}

.reservation-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.reservation-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.reservation-info p {
  font-size: 1.125rem;
  color: #718096;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
}

.reservation-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a5568;
}

.feature-icon {
  font-size: 1.25rem;
}

.reservation-form {
  background: #f7fafc;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

label {
  display: block;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
}

input, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}

input:focus, select:focus {
  outline: none;
  border-color: #d97706;
  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
}

.submit-btn {
  width: 100%;
  background: #d97706;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.submit-btn:hover {
  background: #b45309;
}

.about {
  padding: 6rem 0;
  background: #f7fafc;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.125rem;
  color: #718096;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #d97706, #c2410c);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d97706;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #a0aec0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.footer-column p {
  color: #a0aec0;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.social-links a:hover {
  color: #d97706;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding-top: 2rem;
  text-align: center;
  color: #a0aec0;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .nav-links {
    display: none;
  }

  .reservation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .menu-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}`},"E-Commerce Stores":{html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StyleHub - Premium Fashion & Lifestyle</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🛍️</span>
        StyleHub
      </div>
      <div class="nav-links">
        <a href="#products">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
      </div>
      <div class="nav-actions">
        <button class="search-btn">🔍</button>
        <button class="cart-btn">
          <span class="cart-icon">🛒</span>
          <span class="cart-count">3</span>
        </button>
        <button class="account-btn">👤</button>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Discover Your<br>
          <span class="highlight">Style</span>
        </h1>
        <p class="hero-subtitle">
          Premium fashion and lifestyle products curated for the modern individual. Quality, style, and sustainability in every piece.
        </p>
        <div class="hero-actions">
          <button class="primary-button">Shop Collection</button>
          <button class="secondary-button">Explore Categories</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <span>👗</span>
        </div>
      </div>
    </div>
  </section>

  <section id="categories" class="categories">
    <div class="container">
      <h2 class="section-title">Shop by Category</h2>
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-image">
            <span>👗</span>
          </div>
          <h3>Women's Fashion</h3>
          <p>Elegant dresses, tops, and accessories</p>
        </div>
        <div class="category-card">
          <div class="category-image">
            <span>👔</span>
          </div>
          <h3>Men's Collection</h3>
          <p>Contemporary men's wear and accessories</p>
        </div>
        <div class="category-card">
          <div class="category-image">
            <span>💍</span>
          </div>
          <h3>Jewelry & Accessories</h3>
          <p>Statement pieces and everyday essentials</p>
        </div>
        <div class="category-card">
          <div class="category-image">
            <span>🏠</span>
          </div>
          <h3>Home & Living</h3>
          <p>Beautiful home decor and lifestyle items</p>
        </div>
      </div>
    </div>
  </section>

  <section id="products" class="featured-products">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle">Handpicked items from our latest collection</p>
      </div>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>👕</span>
            </div>
            <div class="product-badge">New</div>
          </div>
          <div class="product-info">
            <h3>Elegant Silk Blouse</h3>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(24 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$89.99</span>
              <span class="original-price">$129.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>👜</span>
            </div>
            <div class="product-badge">Sale</div>
          </div>
          <div class="product-info">
            <h3>Designer Handbag</h3>
            <div class="product-rating">
              <span class="stars">★★★★☆</span>
              <span class="reviews">(18 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$199.99</span>
              <span class="original-price">$299.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>👠</span>
            </div>
          </div>
          <div class="product-info">
            <h3>Premium Leather Boots</h3>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(32 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$249.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>🕶️</span>
            </div>
          </div>
          <div class="product-info">
            <h3>Sunglasses Collection</h3>
            <div class="product-rating">
              <span class="stars">★★★★☆</span>
              <span class="reviews">(15 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$79.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay in Style</h2>
        <p>Subscribe to our newsletter for exclusive deals, new arrivals, and style inspiration.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email address">
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">🛍️</span>
            StyleHub
          </div>
          <p>Your destination for premium fashion and lifestyle products.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Shop</h4>
            <a href="#">Women's Fashion</a>
            <a href="#">Men's Collection</a>
            <a href="#">Accessories</a>
            <a href="#">Sale</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">Size Guide</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Sustainability</a>
          </div>
          <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 StyleHub. All rights reserved.</p>
        <div class="payment-methods">
          <span>💳</span>
          <span>💳</span>
          <span>💳</span>
          <span>💳</span>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #7c3aed;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-btn, .account-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.search-btn:hover, .account-btn:hover {
  background: #f3f4f6;
}

.cart-btn {
  position: relative;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.cart-btn:hover {
  background: #f3f4f6;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.primary-button {
  background: white;
  color: #7c3aed;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.categories {
  padding: 6rem 0;
  background: #f8fafc;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.category-image {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #6b7280;
}

.featured-products {
  padding: 6rem 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.product-image {
  position: relative;
  height: 250px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stars {
  color: #fbbf24;
  font-size: 0.875rem;
}

.reviews {
  color: #6b7280;
  font-size: 0.875rem;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.current-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #7c3aed;
}

.original-price {
  font-size: 1rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.add-to-cart-btn {
  width: 100%;
  background: #7c3aed;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #6d28d9;
}

.newsletter {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.newsletter-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.newsletter-form button {
  background: white;
  color: #7c3aed;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7c3aed;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #7c3aed;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #7c3aed;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-methods {
  display: flex;
  gap: 0.5rem;
}

.payment-methods span {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .nav-links {
    display: none;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}`},"Admin Dashboards":{html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AdminPro - Dashboard</title>
</head>
<body>
  <div class="dashboard">
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <span class="logo-icon">📊</span>
          AdminPro
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section">
          <h3>Overview</h3>
          <a href="#" class="nav-link active">
            <span class="nav-icon">📈</span>
            Dashboard
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">📊</span>
            Analytics
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">📋</span>
            Reports
          </a>
        </div>
        <div class="nav-section">
          <h3>Management</h3>
          <a href="#" class="nav-link">
            <span class="nav-icon">👥</span>
            Users
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">📦</span>
            Products
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">🛒</span>
            Orders
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">💬</span>
            Messages
          </a>
        </div>
        <div class="nav-section">
          <h3>Settings</h3>
          <a href="#" class="nav-link">
            <span class="nav-icon">⚙️</span>
            General
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">🔒</span>
            Security
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">🔔</span>
            Notifications
          </a>
        </div>
      </nav>
    </aside>

    <main class="main-content">
      <header class="top-bar">
        <div class="search-bar">
          <input type="text" placeholder="Search...">
          <button class="search-btn">🔍</button>
        </div>
        <div class="user-menu">
          <button class="notification-btn">
            <span class="notification-icon">🔔</span>
            <span class="notification-badge">3</span>
          </button>
          <div class="user-profile">
            <div class="user-avatar">👤</div>
            <span class="user-name">Admin User</span>
          </div>
        </div>
      </header>

      <div class="content">
        <div class="page-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your business today.</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-content">
              <h3>$45,231</h3>
              <p>Total Revenue</p>
              <span class="stat-change positive">+12.5%</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-content">
              <h3>2,543</h3>
              <p>Total Users</p>
              <span class="stat-change positive">+8.2%</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🛒</div>
            <div class="stat-content">
              <h3>1,234</h3>
              <p>Orders</p>
              <span class="stat-change positive">+15.3%</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-content">
              <h3>4.8</h3>
              <p>Average Rating</p>
              <span class="stat-change positive">+0.2</span>
            </div>
          </div>
        </div>

        <div class="charts-section">
          <div class="chart-card">
            <div class="chart-header">
              <h3>Revenue Overview</h3>
              <select>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div class="chart-placeholder">
              <div class="chart-bar" style="height: 40%"></div>
              <div class="chart-bar" style="height: 60%"></div>
              <div class="chart-bar" style="height: 80%"></div>
              <div class="chart-bar" style="height: 50%"></div>
              <div class="chart-bar" style="height: 70%"></div>
              <div class="chart-bar" style="height: 90%"></div>
              <div class="chart-bar" style="height: 65%"></div>
            </div>
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <h3>Recent Activity</h3>
            </div>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">🛒</div>
                <div class="activity-content">
                  <p>New order from John Doe</p>
                  <span class="activity-time">2 minutes ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">👤</div>
                <div class="activity-content">
                  <p>New user registration</p>
                  <span class="activity-time">5 minutes ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">💬</div>
                <div class="activity-content">
                  <p>Support ticket resolved</p>
                  <span class="activity-time">10 minutes ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">📦</div>
                <div class="activity-content">
                  <p>Order #1234 shipped</p>
                  <span class="activity-time">15 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="recent-orders">
          <div class="section-header">
            <h3>Recent Orders</h3>
            <button class="view-all-btn">View All</button>
          </div>
          <div class="orders-table">
            <div class="table-header">
              <div>Order ID</div>
              <div>Customer</div>
              <div>Product</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            <div class="table-row">
              <div>#12345</div>
              <div>John Doe</div>
              <div>Premium Plan</div>
              <div>$99.00</div>
              <div><span class="status completed">Completed</span></div>
            </div>
            <div class="table-row">
              <div>#12344</div>
              <div>Jane Smith</div>
              <div>Basic Plan</div>
              <div>$49.00</div>
              <div><span class="status pending">Pending</span></div>
            </div>
            <div class="table-row">
              <div>#12343</div>
              <div>Mike Johnson</div>
              <div>Pro Plan</div>
              <div>$149.00</div>
              <div><span class="status processing">Processing</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f8fafc;
  color: #1a1a1a;
  line-height: 1.6;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.sidebar-nav {
  flex: 1;
  padding: 2rem 0;
}

.nav-section {
  margin-bottom: 2rem;
}

.nav-section h3 {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 2rem;
  margin-bottom: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;
  color: #4b5563;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: #f3f4f6;
  color: #2563eb;
}

.nav-link.active {
  background: #eff6ff;
  color: #2563eb;
  border-right: 3px solid #2563eb;
}

.nav-icon {
  font-size: 1.125rem;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.top-bar {
  background: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 400px;
}

.search-bar input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.search-bar input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.search-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: #1d4ed8;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.notification-btn:hover {
  background: #f3f4f6;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 600;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.user-name {
  font-weight: 500;
  color: #374151;
}

.content {
  padding: 2rem;
  flex: 1;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: #6b7280;
  font-size: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.stat-content h3 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.stat-content p {
  color: #6b7280;
  font-size: 0.875rem;
}

.stat-change {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.stat-change.positive {
  color: #10b981;
}

.charts-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.chart-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
}

.chart-header select {
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #374151;
}

.chart-placeholder {
  height: 200px;
  padding: 1.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 0.5rem;
}

.chart-bar {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.25rem 0.25rem 0 0;
  flex: 1;
  min-height: 20px;
  transition: height 0.3s ease;
}

.activity-list {
  padding: 1.5rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 32px;
  height: 32px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.activity-content p {
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.25rem;
}

.activity-time {
  font-size: 0.75rem;
  color: #9ca3af;
}

.recent-orders {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.section-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
}

.view-all-btn {
  background: transparent;
  color: #2563eb;
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
}

.orders-table {
  padding: 0;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
}

.table-row:last-child {
  border-bottom: none;
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
}

.status.completed {
  background: #dcfce7;
  color: #166534;
}

.status.pending {
  background: #fef3c7;
  color: #92400e;
}

.status.processing {
  background: #dbeafe;
  color: #1e40af;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }

  .charts-section {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
  }

  .top-bar {
    padding: 1rem;
  }

  .search-bar {
    max-width: none;
  }

  .content {
    padding: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .charts-section {
    grid-template-columns: 1fr;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .table-row {
    text-align: center;
  }
}`},"Blog Layouts":{html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Blog - Insights & Stories</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">✍️</span>
        Modern Blog
      </div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="subscribe-btn">Subscribe</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-meta">
          <span class="featured-badge">Featured</span>
          <span class="reading-time">5 min read</span>
        </div>
        <h1 class="hero-title">
          The Future of Web<br>
          <span class="highlight">Development</span>
        </h1>
        <p class="hero-subtitle">
          Exploring the latest trends, technologies, and best practices shaping the digital landscape. Join us on this journey of innovation and discovery.
        </p>
        <div class="hero-author">
          <div class="author-avatar">👨‍💻</div>
          <div class="author-info">
            <span class="author-name">Alex Chen</span>
            <span class="publish-date">December 15, 2024</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <span>💻</span>
        </div>
      </div>
    </div>
  </section>

  <section class="featured-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Latest Articles</h2>
        <p class="section-subtitle">Stay updated with our latest insights and stories</p>
      </div>
      <div class="posts-grid">
        <article class="post-card featured">
          <div class="post-image">
            <div class="image-placeholder">
              <span>🚀</span>
            </div>
            <div class="post-category">Technology</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="reading-time">7 min read</span>
              <span class="publish-date">Dec 12, 2024</span>
            </div>
            <h3>Building Scalable React Applications</h3>
            <p>Learn how to structure your React applications for growth and maintainability with modern patterns and best practices.</p>
            <div class="post-author">
              <div class="author-avatar">👩‍💻</div>
              <span class="author-name">Sarah Johnson</span>
            </div>
          </div>
        </article>
        <article class="post-card">
          <div class="post-image">
            <div class="image-placeholder">
              <span>🎨</span>
            </div>
            <div class="post-category">Design</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="reading-time">4 min read</span>
              <span class="publish-date">Dec 10, 2024</span>
            </div>
            <h3>The Art of Minimalist UI Design</h3>
            <p>Discover how less can be more in user interface design and how to create clean, effective designs.</p>
            <div class="post-author">
              <div class="author-avatar">🎨</div>
              <span class="author-name">Mike Davis</span>
            </div>
          </div>
        </article>
        <article class="post-card">
          <div class="post-image">
            <div class="image-placeholder">
              <span>📊</span>
            </div>
            <div class="post-category">Business</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="reading-time">6 min read</span>
              <span class="publish-date">Dec 8, 2024</span>
            </div>
            <h3>Digital Transformation Strategies</h3>
            <p>Navigate the complexities of digital transformation with proven strategies and real-world examples.</p>
            <div class="post-author">
              <div class="author-avatar">💼</div>
              <span class="author-name">Emma Wilson</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay in the Loop</h2>
        <p>Get the latest articles and insights delivered straight to your inbox.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email address">
          <button type="submit">Subscribe</button>
        </div>
        <p class="newsletter-note">No spam, unsubscribe at any time.</p>
      </div>
    </div>
  </section>

  <section class="categories">
    <div class="container">
      <h2 class="section-title">Explore Topics</h2>
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-icon">💻</div>
          <h3>Technology</h3>
          <p>Latest in tech and development</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🎨</div>
          <h3>Design</h3>
          <p>UI/UX and creative insights</p>
        </div>
        <div class="category-card">
          <div class="category-icon">📈</div>
          <h3>Business</h3>
          <p>Strategy and growth tips</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🚀</div>
          <h3>Innovation</h3>
          <p>Cutting-edge trends and ideas</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">✍️</span>
            Modern Blog
          </div>
          <p>Sharing insights, stories, and knowledge about the digital world.</p>
          <div class="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Content</h4>
            <a href="#">Articles</a>
            <a href="#">Guides</a>
            <a href="#">Tutorials</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <a href="#">Newsletter</a>
            <a href="#">RSS Feed</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Modern Blog. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,css:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.subscribe-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #1d4ed8;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.featured-badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.reading-time {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  backdrop-filter: blur(10px);
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: white;
}

.publish-date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.featured-posts {
  padding: 6rem 0;
  background: #f8fafc;
}

.posts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.post-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.post-card.featured {
  grid-column: span 2;
}

.post-image {
  position: relative;
  height: 200px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.post-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #2563eb;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.post-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.post-content p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.post-author .author-avatar {
  width: 32px;
  height: 32px;
  background: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.post-author .author-name {
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
}

.newsletter {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.newsletter-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.newsletter-form button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.newsletter-note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
}

.categories {
  padding: 6rem 0;
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, background 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #6b7280;
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #2563eb;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .post-card.featured {
    grid-column: span 1;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .nav-links {
    display: none;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}`}},g=[{name:"Portfolios",icon:"🧑‍🎨"},{name:"SaaS Landing Pages",icon:"🚀"},{name:"Restaurant Sites",icon:"🍽️"},{name:"E-Commerce Stores",icon:"🛍️"},{name:"Admin Dashboards",icon:"📊"},{name:"Blog Layouts",icon:"✍️"}];k.useEffect(()=>{var y;(y=f.current)==null||y.scrollIntoView({behavior:"smooth"})},[r]),k.useEffect(()=>{const y=h.current;y&&(y.style.height="auto",y.style.height=`${y.scrollHeight}px`)},[a]);const v=y=>{const z=m[y];z&&(Vk({html:z.html,css:z.css,js:""}),e("/compiler"))},w=async y=>{y.preventDefault();const z=a.trim();if(!z)return;const P={role:"user",content:z},C=[...r,P];i(C),l(""),c(!0);try{const j=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:C})}),A=await j.json(),_=j.ok&&typeof(A==null?void 0:A.text)=="string"?A.text:"Sorry, I could not retrieve a response from the API.";i(W=>[...W,{role:"assistant",content:_}])}catch(j){console.error("Chat API error:",j),i(A=>[...A,{role:"assistant",content:"Sorry, I could not reach the chat service. Please try again later."}])}finally{c(!1)}};return b.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-950 text-white",children:[b.jsxs("header",{className:"border-b border-slate-800 bg-slate-950 px-6 py-3 flex items-center justify-between gap-6",children:[b.jsxs("button",{onClick:()=>e("/"),className:"flex items-center gap-2 hover:opacity-80 transition",children:[b.jsx("img",{src:"/DevStudio-Logo.png",alt:"DevStudio",className:"w-8 h-8 object-contain object-center"}),b.jsx("span",{className:"font-semibold text-white text-lg",children:"DevStudio"})]}),b.jsxs("div",{className:"flex items-center gap-4",children:[["🔔","👤","⚙️"].map((y,z)=>b.jsx("button",{type:"button",className:"w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 transition border border-slate-700/50 flex items-center justify-center text-base",children:y},z)),b.jsx("button",{className:"ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold text-white transition shadow-lg shadow-blue-500/20",children:"Publish"})]})]}),b.jsxs("div",{className:"flex flex-1 flex-col lg:flex-row overflow-hidden",children:[b.jsxs("div",{className:"w-full lg:w-96 min-h-0 max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-4rem)] border-b border-slate-800 lg:border-b-0 lg:border-r bg-slate-900/50 flex flex-col order-2 lg:order-1 overflow-hidden",children:[b.jsxs("div",{className:"px-5 py-5 border-b border-slate-800",children:[b.jsx("h2",{className:"text-lg font-semibold text-white",children:"Web Maker AI"}),b.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Chat with our assistant"})]}),b.jsxs("div",{className:"flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-4",children:[r.map((y,z)=>{const P=y.role==="user";return b.jsx("div",{className:`flex ${P?"justify-end":"justify-start"}`,children:b.jsx("div",{className:`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${P?"bg-blue-600 text-white rounded-br-[6px] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl":"bg-slate-800 text-slate-200 rounded-bl-[6px] rounded-br-3xl rounded-tr-3xl rounded-tl-3xl border border-slate-700"}`,children:b.jsx("div",{className:P?"text-white":"text-slate-200",children:b.jsx(sC,{children:y.content})})})},`${y.role}-${z}`)}),u&&b.jsx("div",{className:"flex justify-start",children:b.jsx("div",{className:"max-w-[85%] rounded-3xl bg-slate-800 text-slate-200 border border-slate-700 px-4 py-3 text-sm leading-6 animate-pulse",children:"DevStudio is thinking..."})}),b.jsx("div",{ref:f})]}),b.jsx("form",{className:"px-5 py-5 border-t border-slate-800",onSubmit:w,children:b.jsxs("div",{className:"flex gap-2 items-end",children:[b.jsx("textarea",{ref:h,value:a,onChange:y=>{const z=y.currentTarget;l(z.value),z.style.height="auto",z.style.height=`${z.scrollHeight}px`},onKeyDown:y=>{var z;y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),(z=y.currentTarget.form)==null||z.requestSubmit())},placeholder:"Describe a website to build...",disabled:u,className:"flex-1 bg-slate-800 text-white placeholder:text-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-70 resize-none max-h-[200px] overflow-y-auto",rows:1}),b.jsx("button",{type:"submit",disabled:u||!a.trim(),className:"bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-300 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 font-semibold text-sm transition",children:u?"Thinking...":"Send"})]})})]}),b.jsx("div",{className:"flex-1 min-h-0 py-8 px-4 md:overflow-auto order-1 lg:order-2",children:b.jsxs("div",{className:"max-w-4xl mx-auto text-center lg:h-full flex flex-col items-center lg:justify-center gap-4",children:[b.jsxs("div",{className:"mb-4 max-w-3xl",children:[b.jsx("p",{className:"text-xs uppercase tracking-[0.35em] text-slate-500 mb-2",children:"AI Web Maker"}),b.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white mb-2",children:"Build your next website concept in seconds."}),b.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-2xl mx-auto",children:"Pick a starting point and let our future UI builder help you imagine the perfect layout."})]}),b.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3 max-w-4xl w-full",children:g.map(y=>b.jsxs("button",{type:"button",onClick:()=>v(y.name),className:"group text-left rounded-3xl border border-slate-800 bg-slate-900/90 p-4 transition duration-200 hover:border-blue-500/60 hover:bg-slate-800 shadow-sm shadow-black/20",children:[b.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[b.jsx("span",{className:"text-xl",children:y.icon}),b.jsx("h2",{className:"text-lg font-semibold text-white",children:y.name})]}),b.jsx("p",{className:"text-slate-400",children:"Start with a polished, modern base that matches the needs of your next web project."})]},y.name))})]})})]})]})}function mC(){const e=[{icon:Eb,title:"Easy & fun learning",description:"Interactive lessons designed for beginners"},{icon:$b,title:"Ready-made teacher lessons",description:"Comprehensive curriculum for educators"},{icon:Ob,title:"Career preparation",description:"Build real-world projects for your portfolio"}];return b.jsx("section",{className:"py-20 px-6",children:b.jsxs("div",{className:"container mx-auto",children:[b.jsx("h2",{className:"text-3xl font-bold text-white mb-12",children:"Why DevStudio?"}),b.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((r,i)=>{const a=r.icon;return b.jsxs("div",{className:"flex gap-4",children:[b.jsx("div",{className:"flex-shrink-0",children:b.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/30",children:b.jsx(a,{className:"w-6 h-6 text-blue-500"})})}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:r.title}),b.jsx("p",{className:"text-slate-400",children:r.description})]})]},i)})})]})})}function hC(){return b.jsxs("footer",{className:"border-t border-slate-800 py-12 px-6 relative",children:[b.jsx("div",{className:"container mx-auto",children:b.jsx("div",{className:"text-center text-slate-500 text-sm",children:"© 2026 DevStudio. All rights reserved."})}),b.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all",children:b.jsx(mb,{className:"w-6 h-6 text-white"})})]})}function gC(){return b.jsxs("div",{className:"min-h-screen bg-slate-950",children:[b.jsx(j1,{}),b.jsxs("main",{children:[b.jsx(R1,{}),b.jsx(T1,{}),b.jsx(z1,{}),b.jsx(I1,{}),b.jsx(L1,{}),b.jsx(mC,{})]}),b.jsx(hC,{})]})}function vC(){return b.jsx(fx,{children:b.jsxs($0,{children:[b.jsx(Va,{path:"/",element:b.jsx(gC,{})}),b.jsx(Va,{path:"/compiler",element:b.jsx(Wk,{})}),b.jsx(Va,{path:"/webmaker",element:b.jsx(pC,{})})]})})}Vy.createRoot(document.getElementById("root")).render(b.jsx(vC,{}));
