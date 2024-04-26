const Zs=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};Zs();const tn="modulepreload",Wi={},en="./",me=function(e,o){return!o||o.length===0?e():Promise.all(o.map(i=>{if(i=`${en}${i}`,i in Wi)return;Wi[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":tn,r||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),r)return new Promise((c,l)=>{n.addEventListener("load",c),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=window,Pi=bo.ShadowRoot&&(bo.ShadyCSS===void 0||bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zi=Symbol(),qi=new WeakMap;class jr{constructor(e,o,i){if(this._$cssResult$=!0,i!==zi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(Pi&&e===void 0){const i=o!==void 0&&o.length===1;i&&(e=qi.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qi.set(o,e))}return e}toString(){return this.cssText}}const de=t=>new jr(typeof t=="string"?t:t+"",void 0,zi),g=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new jr(o,t,zi)},on=(t,e)=>{Pi?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const i=document.createElement("style"),r=bo.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)})},Bi=Pi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return de(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wo;const Co=window,Gi=Co.trustedTypes,rn=Gi?Gi.emptyScript:"",Ki=Co.reactiveElementPolyfillSupport,Xe={toAttribute(t,e){switch(e){case Boolean:t=t?rn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Wr=(t,e)=>e!==t&&(e==e||t==t),qo={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Wr},li="finalized";class ge extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var o;this.finalize(),((o=this.h)!==null&&o!==void 0?o:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((o,i)=>{const r=this._$Ep(i,o);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,o=qo){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,o);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,o,i){return{get(){return this[o]},set(r){const s=this[e];this[o]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qo}static finalize(){if(this.hasOwnProperty(li))return!1;this[li]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const r of i)this.createProperty(r,o[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)o.unshift(Bi(r))}else e!==void 0&&o.push(Bi(e));return o}static _$Ep(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,i;((o=this._$ES)!==null&&o!==void 0?o:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var o;(o=this._$ES)===null||o===void 0||o.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Ei.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;const o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return on(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$EO(e,o,i=qo){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Xe).toAttribute(o,i.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,o){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Xe;this._$El=s,this[s]=c.fromAttribute(o,n.type),this._$El=null}}requestUpdate(e,o,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Wr)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw o=!1,this._$Ek(),r}o&&this._$AE(i)}willUpdate(e){}_$AE(e){var o;(o=this._$ES)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$EO(i,this[i],o)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}ge[li]=!0,ge.elementProperties=new Map,ge.elementStyles=[],ge.shadowRootOptions={mode:"open"},Ki==null||Ki({ReactiveElement:ge}),((Wo=Co.reactiveElementVersions)!==null&&Wo!==void 0?Wo:Co.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bo;const So=window,we=So.trustedTypes,Xi=we?we.createPolicy("lit-html",{createHTML:t=>t}):void 0,ci="$lit$",jt=`lit$${(Math.random()+"").slice(9)}$`,qr="?"+jt,sn=`<${qr}>`,se=document,Je=()=>se.createComment(""),Ye=t=>t===null||typeof t!="object"&&typeof t!="function",Br=Array.isArray,nn=t=>Br(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Go=`[ 	
\f\r]`,Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ji=/-->/g,Yi=/>/g,Zt=RegExp(`>|${Go}(?:([^\\s"'>=/]+)(${Go}*=${Go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qi=/'/g,Zi=/"/g,Gr=/^(?:script|style|textarea|title)$/i,an=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),b=an(1),mt=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),tr=new WeakMap,ee=se.createTreeWalker(se,129,null,!1);function Kr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xi!==void 0?Xi.createHTML(e):e}const ln=(t,e)=>{const o=t.length-1,i=[];let r,s=e===2?"<svg>":"",n=Ne;for(let c=0;c<o;c++){const l=t[c];let u,h,p=-1,m=0;for(;m<l.length&&(n.lastIndex=m,h=n.exec(l),h!==null);)m=n.lastIndex,n===Ne?h[1]==="!--"?n=Ji:h[1]!==void 0?n=Yi:h[2]!==void 0?(Gr.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=Zt):h[3]!==void 0&&(n=Zt):n===Zt?h[0]===">"?(n=r!=null?r:Ne,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?Zt:h[3]==='"'?Zi:Qi):n===Zi||n===Qi?n=Zt:n===Ji||n===Yi?n=Ne:(n=Zt,r=void 0);const f=n===Zt&&t[c+1].startsWith("/>")?" ":"";s+=n===Ne?l+sn:p>=0?(i.push(u),l.slice(0,p)+ci+l.slice(p)+jt+f):l+jt+(p===-2?(i.push(void 0),c):f)}return[Kr(t,s+(t[o]||"<?>")+(e===2?"</svg>":"")),i]};class Qe{constructor({strings:e,_$litType$:o},i){let r;this.parts=[];let s=0,n=0;const c=e.length-1,l=this.parts,[u,h]=ln(e,o);if(this.el=Qe.createElement(u,i),ee.currentNode=this.el.content,o===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(r=ee.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const m of r.getAttributeNames())if(m.endsWith(ci)||m.startsWith(jt)){const f=h[n++];if(p.push(m),f!==void 0){const v=r.getAttribute(f.toLowerCase()+ci).split(jt),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:w[2],strings:v,ctor:w[1]==="."?dn:w[1]==="?"?hn:w[1]==="@"?pn:Do})}else l.push({type:6,index:s})}for(const m of p)r.removeAttribute(m)}if(Gr.test(r.tagName)){const p=r.textContent.split(jt),m=p.length-1;if(m>0){r.textContent=we?we.emptyScript:"";for(let f=0;f<m;f++)r.append(p[f],Je()),ee.nextNode(),l.push({type:2,index:++s});r.append(p[m],Je())}}}else if(r.nodeType===8)if(r.data===qr)l.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(jt,p+1))!==-1;)l.push({type:7,index:s}),p+=jt.length-1}s++}}static createElement(e,o){const i=se.createElement("template");return i.innerHTML=e,i}}function _e(t,e,o=t,i){var r,s,n,c;if(e===mt)return e;let l=i!==void 0?(r=o._$Co)===null||r===void 0?void 0:r[i]:o._$Cl;const u=Ye(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(t),l._$AT(t,o,i)),i!==void 0?((n=(c=o)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:o._$Cl=l),l!==void 0&&(e=_e(t,l._$AS(t,e.values),l,i)),e}class cn{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var o;const{el:{content:i},parts:r}=this._$AD,s=((o=e==null?void 0:e.creationScope)!==null&&o!==void 0?o:se).importNode(i,!0);ee.currentNode=s;let n=ee.nextNode(),c=0,l=0,u=r[0];for(;u!==void 0;){if(c===u.index){let h;u.type===2?h=new oo(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new fn(n,this,e)),this._$AV.push(h),u=r[++l]}c!==(u==null?void 0:u.index)&&(n=ee.nextNode(),c++)}return ee.currentNode=se,s}v(e){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}}class oo{constructor(e,o,i,r){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=_e(this,e,o),Ye(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==mt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):nn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(se.createTextNode(e)),this._$AH=e}g(e){var o;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Qe.createElement(Kr(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===s)this._$AH.v(i);else{const n=new cn(s,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(e){let o=tr.get(e.strings);return o===void 0&&tr.set(e.strings,o=new Qe(e)),o}T(e){Br(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const s of e)r===o.length?o.push(i=new oo(this.k(Je()),this.k(Je()),this,this.options)):i=o[r],i._$AI(s),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var o;this._$AM===void 0&&(this._$Cp=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}}class Do{constructor(e,o,i,r,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=o,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,o=this,i,r){const s=this.strings;let n=!1;if(s===void 0)e=_e(this,e,o,0),n=!Ye(e)||e!==this._$AH&&e!==mt,n&&(this._$AH=e);else{const c=e;let l,u;for(e=s[0],l=0;l<s.length-1;l++)u=_e(this,c[i+l],o,l),u===mt&&(u=this._$AH[l]),n||(n=!Ye(u)||u!==this._$AH[l]),u===j?e=j:e!==j&&(e+=(u!=null?u:"")+s[l+1]),this._$AH[l]=u}n&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class dn extends Do{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}const un=we?we.emptyScript:"";class hn extends Do{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,un):this.element.removeAttribute(this.name)}}class pn extends Do{constructor(e,o,i,r,s){super(e,o,i,r,s),this.type=5}_$AI(e,o=this){var i;if((e=(i=_e(this,e,o,0))!==null&&i!==void 0?i:j)===mt)return;const r=this._$AH,s=e===j&&r!==j||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==j&&(r===j||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o,i;typeof this._$AH=="function"?this._$AH.call((i=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class fn{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){_e(this,e)}}const er=So.litHtmlPolyfillSupport;er==null||er(Qe,oo),((Bo=So.litHtmlVersions)!==null&&Bo!==void 0?Bo:So.litHtmlVersions=[]).push("2.8.0");const mn=(t,e,o)=>{var i,r;const s=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:e;let n=s._$litPart$;if(n===void 0){const c=(r=o==null?void 0:o.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new oo(e.insertBefore(Je(),c),c,void 0,o!=null?o:{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ko,Xo;class B extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,o;const i=super.createRenderRoot();return(e=(o=this.renderOptions).renderBefore)!==null&&e!==void 0||(o.renderBefore=i.firstChild),i}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mn(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return mt}}B.finalized=!0,B._$litElement$=!0,(Ko=globalThis.litElementHydrateSupport)===null||Ko===void 0||Ko.call(globalThis,{LitElement:B});const or=globalThis.litElementPolyfillSupport;or==null||or({LitElement:B});((Xo=globalThis.litElementVersions)!==null&&Xo!==void 0?Xo:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=t=>e=>typeof e=="function"?((o,i)=>(customElements.define(o,i),i))(t,e):((o,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){customElements.define(o,n)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}},bn=(t,e,o)=>{e.constructor.createProperty(o,t)};function d(t){return(e,o)=>o!==void 0?bn(t,e,o):gn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return d({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=({finisher:t,descriptor:e})=>(o,i)=>{var r;if(i===void 0){const s=(r=o.originalKey)!==null&&r!==void 0?r:o.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:{...o,key:s};return t!=null&&(n.finisher=function(c){t(c,s)}),n}{const s=o.constructor;e!==void 0&&Object.defineProperty(o,i,e(i)),t==null||t(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(t,e){return vn({descriptor:o=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jo;((Jo=window.HTMLSlotElement)===null||Jo===void 0?void 0:Jo.prototype.assignedElements)!=null;function Eo(t){return t=t||[],Array.isArray(t)?t:[t]}function kt(t){return`[Vaadin.Router] ${t}`}function yn(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Po="module",zo="nomodule",di=[Po,zo];function ir(t){if(!t.match(/.+\.[m]?js$/))throw new Error(kt(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Xr(t){if(!t||!xt(t.path))throw new Error(kt('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,o=["component","redirect","bundle"];if(!ne(t.action)&&!Array.isArray(t.children)&&!ne(t.children)&&!Ao(e)&&!o.some(i=>xt(t[i])))throw new Error(kt(`Expected route config "${t.path}" to include either "${o.join('", "')}" or "action" function but none found.`));if(e)if(xt(e))ir(e);else if(di.some(i=>i in e))di.forEach(i=>i in e&&ir(e[i]));else throw new Error(kt('Expected route bundle to include either "'+zo+'" or "'+Po+'" keys, or both'));t.redirect&&["bundle","component"].forEach(i=>{i in t&&console.warn(kt(`Route config "${t.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function rr(t){Eo(t).forEach(e=>Xr(e))}function sr(t,e){let o=document.head.querySelector('script[src="'+t+'"][async]');return o||(o=document.createElement("script"),o.setAttribute("src",t),e===Po?o.setAttribute("type",Po):e===zo&&o.setAttribute(zo,""),o.async=!0),new Promise((i,r)=>{o.onreadystatechange=o.onload=s=>{o.__dynamicImportLoaded=!0,i(s)},o.onerror=s=>{o.parentNode&&o.parentNode.removeChild(o),r(s)},o.parentNode===null?document.head.appendChild(o):o.__dynamicImportLoaded&&i()})}function wn(t){return xt(t)?sr(t):Promise.race(di.filter(e=>e in t).map(e=>sr(t[e],e)))}function Ke(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Ao(t){return typeof t=="object"&&!!t}function ne(t){return typeof t=="function"}function xt(t){return typeof t=="string"}function Jr(t){const e=new Error(kt(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const be=new class{};function _n(t){const e=t.port,o=t.protocol,s=o==="http:"&&e==="80"||o==="https:"&&e==="443"?t.hostname:t.host;return`${o}//${s}`}function nr(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const o=t.composedPath?t.composedPath():t.path||[];for(let c=0;c<o.length;c++){const l=o[c];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){e=l;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||_n(e))!==window.location.origin)return;const{pathname:r,search:s,hash:n}=e;Ke("go",{pathname:r,search:s,hash:n})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const xn={activate(){window.document.addEventListener("click",nr)},inactivate(){window.document.removeEventListener("click",nr)}},kn=/Trident/.test(navigator.userAgent);kn&&!ne(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var o=document.createEvent("Event");return o.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),o.state=e.state||null,o},window.PopStateEvent.prototype=window.Event.prototype);function ar(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:o,hash:i}=window.location;Ke("go",{pathname:e,search:o,hash:i})}const $n={activate(){window.addEventListener("popstate",ar)},inactivate(){window.removeEventListener("popstate",ar)}};var Se=os,Cn=Ai,Sn=An,En=Zr,Pn=es,Yr="/",Qr="./",zn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ai(t,e){for(var o=[],i=0,r=0,s="",n=e&&e.delimiter||Yr,c=e&&e.delimiters||Qr,l=!1,u;(u=zn.exec(t))!==null;){var h=u[0],p=u[1],m=u.index;if(s+=t.slice(r,m),r=m+h.length,p){s+=p[1],l=!0;continue}var f="",v=t[r],w=u[2],A=u[3],$=u[4],z=u[5];if(!l&&s.length){var O=s.length-1;c.indexOf(s[O])>-1&&(f=s[O],s=s.slice(0,O))}s&&(o.push(s),s="",l=!1);var H=f!==""&&v!==void 0&&v!==f,V=z==="+"||z==="*",N=z==="?"||z==="*",Z=f||n,it=A||$;o.push({name:w||i++,prefix:f,delimiter:Z,optional:N,repeat:V,partial:H,pattern:it?Tn(it):"[^"+Nt(Z)+"]+?"})}return(s||r<t.length)&&o.push(s+t.substr(r)),o}function An(t,e){return Zr(Ai(t,e))}function Zr(t){for(var e=new Array(t.length),o=0;o<t.length;o++)typeof t[o]=="object"&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$"));return function(i,r){for(var s="",n=r&&r.encode||encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if(typeof l=="string"){s+=l;continue}var u=i?i[l.name]:void 0,h;if(Array.isArray(u)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(u.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var p=0;p<u.length;p++){if(h=n(u[p],l),!e[c].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');s+=(p===0?l.prefix:l.delimiter)+h}continue}if(typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(h=n(String(u),l),!e[c].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+h+'"');s+=l.prefix+h;continue}if(l.optional){l.partial&&(s+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return s}}function Nt(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Tn(t){return t.replace(/([=!:$/()])/g,"\\$1")}function ts(t){return t&&t.sensitive?"":"i"}function Ln(t,e){if(!e)return t;var o=t.source.match(/\((?!\?)/g);if(o)for(var i=0;i<o.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function On(t,e,o){for(var i=[],r=0;r<t.length;r++)i.push(os(t[r],e,o).source);return new RegExp("(?:"+i.join("|")+")",ts(o))}function Rn(t,e,o){return es(Ai(t,o),e,o)}function es(t,e,o){o=o||{};for(var i=o.strict,r=o.start!==!1,s=o.end!==!1,n=Nt(o.delimiter||Yr),c=o.delimiters||Qr,l=[].concat(o.endsWith||[]).map(Nt).concat("$").join("|"),u=r?"^":"",h=t.length===0,p=0;p<t.length;p++){var m=t[p];if(typeof m=="string")u+=Nt(m),h=p===t.length-1&&c.indexOf(m[m.length-1])>-1;else{var f=m.repeat?"(?:"+m.pattern+")(?:"+Nt(m.delimiter)+"(?:"+m.pattern+"))*":m.pattern;e&&e.push(m),m.optional?m.partial?u+=Nt(m.prefix)+"("+f+")?":u+="(?:"+Nt(m.prefix)+"("+f+"))?":u+=Nt(m.prefix)+"("+f+")"}}return s?(i||(u+="(?:"+n+")?"),u+=l==="$"?"$":"(?="+l+")"):(i||(u+="(?:"+n+"(?="+l+"))?"),h||(u+="(?="+n+"|"+l+")")),new RegExp(u,ts(o))}function os(t,e,o){return t instanceof RegExp?Ln(t,e):Array.isArray(t)?On(t,e,o):Rn(t,e,o)}Se.parse=Cn;Se.compile=Sn;Se.tokensToFunction=En;Se.tokensToRegExp=Pn;const{hasOwnProperty:In}=Object.prototype,ui=new Map;ui.set("|false",{keys:[],pattern:/(?:)/});function lr(t){try{return decodeURIComponent(t)}catch{return t}}function Mn(t,e,o,i,r){o=!!o;const s=`${t}|${o}`;let n=ui.get(s);if(!n){const u=[];n={keys:u,pattern:Se(t,u,{end:o,strict:t===""})},ui.set(s,n)}const c=n.pattern.exec(e);if(!c)return null;const l=Object.assign({},r);for(let u=1;u<c.length;u++){const h=n.keys[u-1],p=h.name,m=c[u];(m!==void 0||!In.call(l,p))&&(h.repeat?l[p]=m?m.split(h.delimiter).map(lr):[]:l[p]=m&&lr(m))}return{path:c[0],keys:(i||[]).concat(n.keys),params:l}}function is(t,e,o,i,r){let s,n,c=0,l=t.path||"";return l.charAt(0)==="/"&&(o&&(l=l.substr(1)),o=!0),{next(u){if(t===u)return{done:!0};const h=t.__children=t.__children||t.children;if(!s&&(s=Mn(l,e,!h,i,r),s))return{done:!1,value:{route:t,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!n){const m=h[c];m.parent=t;let f=s.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),n=is(m,e.substr(f),o,s.keys,s.params)}const p=n.next(u);if(!p.done)return{done:!1,value:p.value};n=null,c++}return{done:!0}}}}function Un(t){if(ne(t.route.action))return t.route.action(t)}function Dn(t,e){let o=e;for(;o;)if(o=o.parent,o===t)return!0;return!1}function Vn(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const o=(t.route||{}).path;return o&&(e+=` Resolution had failed on route: '${o}'`),e}function Fn(t,e){const{route:o,path:i}=e;if(o&&!o.__synthetic){const r={path:i,route:o};if(!t.chain)t.chain=[];else if(o.parent){let s=t.chain.length;for(;s--&&t.chain[s].route&&t.chain[s].route!==o.parent;)t.chain.pop()}t.chain.push(r)}}class Ze{constructor(e,o={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=o.baseUrl||"",this.errorHandler=o.errorHandler,this.resolveRoute=o.resolveRoute||Un,this.context=Object.assign({resolver:this},o.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){rr(e);const o=[...Eo(e)];this.root.__children=o}addRoutes(e){return rr(e),this.root.__children.push(...Eo(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const o=Object.assign({},this.context,xt(e)?{pathname:e}:e),i=is(this.root,this.__normalizePathname(o.pathname),this.baseUrl),r=this.resolveRoute;let s=null,n=null,c=o;function l(u,h=s.value.route,p){const m=p===null&&s.value.route;return s=n||i.next(m),n=null,!u&&(s.done||!Dn(h,s.value.route))?(n=s,Promise.resolve(be)):s.done?Promise.reject(Jr(o)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},o,s.value),Fn(c,s.value),Promise.resolve(r(c)).then(f=>f!=null&&f!==be?(c.result=f.result||f,c):l(u,h,f)))}return o.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(u=>{const h=Vn(c);if(u?console.warn(h):u=new Error(h),u.context=u.context||c,u instanceof DOMException||(u.code=u.code||500),this.errorHandler)return c.result=this.errorHandler(u),c;throw u})}static __createUrl(e,o){return new URL(e,o)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const o=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,o).href;if(i.slice(0,o.length)===o)return i.slice(o.length)}}Ze.pathToRegexp=Se;const{pathToRegexp:cr}=Ze,dr=new Map;function rs(t,e,o){const i=e.name||e.component;if(i&&(t.has(i)?t.get(i).push(e):t.set(i,[e])),Array.isArray(o))for(let r=0;r<o.length;r++){const s=o[r];s.parent=e,rs(t,s,s.__children||s.children)}}function ur(t,e){const o=t.get(e);if(o&&o.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return o&&o[0]}function hr(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Nn(t,e={}){if(!(t instanceof Ze))throw new TypeError("An instance of Resolver is expected");const o=new Map;return(i,r)=>{let s=ur(o,i);if(!s&&(o.clear(),rs(o,t.root,t.root.__children),s=ur(o,i),!s))throw new Error(`Route "${i}" not found`);let n=dr.get(s.fullPath);if(!n){let l=hr(s),u=s.parent;for(;u;){const f=hr(u);f&&(l=f.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),u=u.parent}const h=cr.parse(l),p=cr.tokensToFunction(h),m=Object.create(null);for(let f=0;f<h.length;f++)xt(h[f])||(m[h[f].name]=!0);n={toPath:p,keys:m},dr.set(l,n),s.fullPath=l}let c=n.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const l={},u=Object.keys(r);for(let p=0;p<u.length;p++){const m=u[p];n.keys[m]||(l[m]=r[m])}const h=e.stringifyQueryParams(l);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let pr=[];function Hn(t){pr.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),pr=t}const jn=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},Wn=(t,e)=>{const o=()=>{t.removeEventListener("animationend",o),e()};t.addEventListener("animationend",o)};function fr(t,e){return t.classList.add(e),new Promise(o=>{if(jn(t)){const i=t.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;t.setAttribute("style",`position: absolute; ${r}`),Wn(t,()=>{t.classList.remove(e),t.removeAttribute("style"),o()})}else t.classList.remove(e),o()})}const qn=256;function Yo(t){return t!=null}function Bn(t){const e=Object.assign({},t);return delete e.next,e}function wt({pathname:t="",search:e="",hash:o="",chain:i=[],params:r={},redirectFrom:s,resolver:n},c){const l=i.map(u=>u.route);return{baseUrl:n&&n.baseUrl||"",pathname:t,search:e,hash:o,routes:l,route:c||l.length&&l[l.length-1]||null,params:r,redirectFrom:s,getUrl:(u={})=>yo(Et.pathToRegexp.compile(ss(l))(Object.assign({},r,u)),n)}}function mr(t,e){const o=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:o}}}function Gn(t,e){e.location=wt(t);const o=t.chain.map(i=>i.route).indexOf(t.route);return t.chain[o].element=e,e}function vo(t,e,o){if(ne(t))return t.apply(o,e)}function gr(t,e,o){return i=>{if(i&&(i.cancel||i.redirect))return i;if(o)return vo(o[t],e,o)}}function Kn(t,e){if(!Array.isArray(t)&&!Ao(t))throw new Error(kt(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const o=Eo(t);for(let i=0;i<o.length;i++)Xr(o[i]),e.__children.push(o[i])}function uo(t){if(t&&t.length){const e=t[0].parentNode;for(let o=0;o<t.length;o++)e.removeChild(t[o])}}function yo(t,e){const o=e.__effectiveBaseUrl;return o?e.constructor.__createUrl(t.replace(/^\//,""),o).pathname:t}function ss(t){return t.map(e=>e.path).reduce((e,o)=>o.length?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):e,"")}class Et extends Ze{constructor(e,o){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&Ze.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},o)),this.resolveRoute=n=>this.__resolveRoute(n);const s=Et.NavigationTrigger;Et.setTriggers.apply(Et,Object.keys(s).map(n=>s[n])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=wt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const o=e.route;let i=Promise.resolve();ne(o.children)&&(i=i.then(()=>o.children(Bn(e))).then(s=>{!Yo(s)&&!ne(o.children)&&(s=o.children),Kn(s,o)}));const r={redirect:s=>mr(e,s),component:s=>{const n=document.createElement(s);return this.__createdByRouter.set(n,!0),n}};return i.then(()=>{if(this.__isLatestRender(e))return vo(o.action,[e,r],o)}).then(s=>{if(Yo(s)&&(s instanceof HTMLElement||s.redirect||s===be))return s;if(xt(o.redirect))return r.redirect(o.redirect);if(o.bundle)return wn(o.bundle).then(()=>{},()=>{throw new Error(kt(`Bundle not found: ${o.bundle}. Check if the file name is correct`))})}).then(s=>{if(Yo(s))return s;if(xt(o.component))return r.component(o.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,o=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),o||this.__onNavigationEvent(),this.ready}render(e,o){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},xt(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const n=this.__previousContext;if(s===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=wt(s),o&&this.__updateBrowserHistory(s,i===1),Ke("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,n),this.__previousContext=s,this.location;this.__addAppearingContent(s,n);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,n),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw o&&this.__updateBrowserHistory(r),uo(this.__outlet&&this.__outlet.children),this.location=wt(Object.assign(r,{resolver:this})),Ke("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(e,o=e){return this.__findComponentContextAfterAllRedirects(o).then(i=>{const s=i!==o?i:e,c=yo(ss(i.chain),i.resolver)===i.pathname,l=(u,h=u.route,p)=>u.next(void 0,h,p).then(m=>m===null||m===be?c?u:h.parent!==null?l(u,h.parent,m):m:m);return l(i).then(u=>{if(u===null||u===be)throw Jr(s);return u&&u!==be&&u!==i?this.__fullyResolveChain(s,u):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const o=e.result;return o instanceof HTMLElement?(Gn(e,o),Promise.resolve(e)):o.redirect?this.__redirect(o.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):o instanceof Error?Promise.reject(o):Promise.reject(new Error(kt(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${yn(o)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(o=>o===this.__previousContext||o===e?o:this.__fullyResolveChain(o))}__runOnBeforeCallbacks(e){const o=this.__previousContext||{},i=o.chain||[],r=e.chain;let s=Promise.resolve();const n=()=>({cancel:!0}),c=l=>mr(e,l);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let l=0;l<Math.min(i.length,r.length)&&!(i[l].route!==r[l].route||i[l].path!==r[l].path&&i[l].element!==r[l].element||!this.__isReusableElement(i[l].element,r[l].element));l=++e.__divergedChainIndex);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,o.result),e.__skipAttach){for(let l=r.length-1;l>=0;l--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:n},i[l]);for(let l=0;l<r.length;l++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:n,redirect:c},r[l]),i[l].element.location=wt(e,i[l].route)}else for(let l=i.length-1;l>=e.__divergedChainIndex;l--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:n},i[l])}if(!e.__skipAttach)for(let l=0;l<r.length;l++)l<e.__divergedChainIndex?l<i.length&&i[l].element&&(i[l].element.location=wt(e,i[l].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:n,redirect:c},r[l]),r[l].element&&(r[l].element.location=wt(e,r[l].route)));return s.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,o,i,r){const s=wt(o);return e.then(n=>{if(this.__isLatestRender(o))return gr("onBeforeLeave",[s,i,this],r.element)(n)}).then(n=>{if(!(n||{}).redirect)return n})}__runOnBeforeEnterCallbacks(e,o,i,r){const s=wt(o,r.route);return e.then(n=>{if(this.__isLatestRender(o))return gr("onBeforeEnter",[s,i,this],r.element)(n)})}__isReusableElement(e,o){return e&&o?this.__createdByRouter.get(e)&&this.__createdByRouter.get(o)?e.localName===o.localName:e===o:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,o,i){if(o>qn)throw new Error(kt(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(o||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(kt(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:o="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==o||window.location.hash!==i){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+o+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,o){let i=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=o&&o.chain[r].element;if(s)if(s.parentNode===i)e.chain[r].element=s,i=s;else break}return i}__addAppearingContent(e,o){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,o);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let r=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const n=e.chain[s].element;n&&(r.appendChild(n),this.__addedByRouter.set(n,!0),r===i&&this.__appearingContent.push(n),r=n)}}__removeDisappearingContent(){this.__disappearingContent&&uo(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(uo(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,o){if(!!o)for(let i=o.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const r=o.chain[i].element;if(!!r)try{const s=wt(e);vo(r.onAfterLeave,[s,{},o.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&uo(r.children)}}}__runOnAfterEnterCallbacks(e){for(let o=e.__divergedChainIndex;o<e.chain.length&&this.__isLatestRender(e);o++){const i=e.chain[o].element||{},r=wt(e,e.chain[o].route);vo(i.onAfterEnter,[r,{},e.resolver],i)}}__animateIfNeeded(e){const o=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],s=e.chain;let n;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){n=s[c-1].route.animate;break}if(o&&i&&n){const c=Ao(n)&&n.leave||"leaving",l=Ao(n)&&n.enter||"entering";r.push(fr(o,c)),r.push(fr(i,l))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:o,search:i,hash:r}=e?e.detail:window.location;xt(this.__normalizePathname(o))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:o,search:i,hash:r},!0))}static setTriggers(...e){Hn(e)}urlForName(e,o){return this.__urlForName||(this.__urlForName=Nn(this)),yo(this.__urlForName(e,o),this)}urlForPath(e,o){return yo(Et.pathToRegexp.compile(e)(o),this)}static go(e){const{pathname:o,search:i,hash:r}=xt(e)?this.__createUrl(e,"http://a"):e;return Ke("go",{pathname:o,search:i,hash:r})}}const Xn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,wo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Jn(){function t(){return!0}return ns(t)}function Yn(){try{return Qn()?!0:Zn()?wo?!ta():!Jn():!1}catch{return!1}}function Qn(){return localStorage.getItem("vaadin.developmentmode.force")}function Zn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ta(){return!!(wo&&Object.keys(wo).map(e=>wo[e]).filter(e=>e.productionMode).length>0)}function ns(t,e){if(typeof t!="function")return;const o=Xn.exec(t.toString());if(o)try{t=new Function(o[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return t(e)}window.Vaadin=window.Vaadin||{};const br=function(t,e){if(window.Vaadin.developmentMode)return ns(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Yn());function ea(){}const oa=function(){if(typeof br=="function")return br(ea)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});oa();Et.NavigationTrigger={POPSTATE:$n,CLICK:xn};var I=g`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ia=g`
  ${I}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;const hi=new Set,ra=new MutationObserver(cs),ve=new Map;let as=document.documentElement.dir||"ltr",ls=document.documentElement.lang||navigator.language,te;ra.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function sa(...t){t.map(e=>{const o=e.$code.toLowerCase();ve.has(o)?ve.set(o,Object.assign(Object.assign({},ve.get(o)),e)):ve.set(o,e),te||(te=e)}),cs()}function cs(){as=document.documentElement.dir||"ltr",ls=document.documentElement.lang||navigator.language,[...hi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}class na{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){hi.add(this.host)}hostDisconnected(){hi.delete(this.host)}dir(){return`${this.host.dir||as}`.toLowerCase()}lang(){return`${this.host.lang||ls}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(i=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",c=ve.get(`${s}-${n}`),l=ve.get(s);return{locale:r,language:s,region:n,primary:c,secondary:l}}exists(e,o){var i;const{primary:r,secondary:s}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||s&&s[e]||o.includeFallback&&te&&te[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(te&&te[e])s=te[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}}var ot=class extends na{},ds=Object.defineProperty,aa=Object.defineProperties,la=Object.getOwnPropertyDescriptor,ca=Object.getOwnPropertyDescriptors,vr=Object.getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,ua=Object.prototype.propertyIsEnumerable,yr=(t,e,o)=>e in t?ds(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Ut=(t,e)=>{for(var o in e||(e={}))da.call(e,o)&&yr(t,o,e[o]);if(vr)for(var o of vr(e))ua.call(e,o)&&yr(t,o,e[o]);return t},io=(t,e)=>aa(t,ca(e)),a=(t,e,o,i)=>{for(var r=i>1?void 0:i?la(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&ds(e,o,r),r},E=class extends B{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,Ut({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}};E.version="2.7.0";E.dependencies={};a([d()],E.prototype,"dir",2);a([d()],E.prototype,"lang",2);var us=class extends E{constructor(){super(...arguments),this.localize=new ot(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};us.styles=ia;var He=new WeakMap,je=new WeakMap,Qo=new WeakSet,ho=new WeakMap,ue=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!i&&!n&&typeof r=="string"&&r.length>0&&typeof s!="undefined"&&(Array.isArray(s)?s.forEach(c=>{o.formData.append(r,c.toString())}):o.formData.append(r,s.toString()))},this.handleFormSubmit=o=>{var i;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=He.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ho.set(this.host,[])},this.handleInteraction=o=>{const i=ho.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ut({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){const i=o.getRootNode(),r=o.getAttribute("form");if(r)return i.getElementById(r)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ho.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ho.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,He.has(this.form)?He.get(this.form).add(this.host):He.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),je.has(this.form)||(je.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=He.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),je.has(this.form)&&(this.form.reportValidity=je.get(this.form),je.delete(this.form))),this.form=void 0}setUserInteracted(t,e){e?Qo.add(t):Qo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(Qo.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Vo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ha=Object.freeze(io(Ut({},Vo),{valid:!1,valueMissing:!0})),pa=Object.freeze(io(Ut({},Vo),{valid:!1,customError:!0})),fa=g`
  ${I}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ee=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function ma(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var ga=g`
  ${I}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,pi="";function fi(t){pi=t}function ba(t=""){if(!pi){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)fi(o.getAttribute("data-shoelace"));else{const i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";i&&(r=i.getAttribute("src")),fi(r.split("/").slice(0,-1).join("/"))}}return pi.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var va={name:"default",resolver:t=>ba(`assets/icons/${t}.svg`)},ya=va,wr={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},wa={name:"system",resolver:t=>t in wr?`data:image/svg+xml,${encodeURIComponent(wr[t])}`:""},_a=wa,xa=[ya,_a],mi=[];function ka(t){mi.push(t)}function $a(t){mi=mi.filter(e=>e!==t)}function _r(t){return xa.find(e=>e.name===t)}function C(t,e){const o=Ut({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:s}=i,n=Array.isArray(t)?t:[t];i.update=function(c){n.forEach(l=>{const u=l;if(c.has(u)){const h=c.get(u),p=this[u];h!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,p)}}),s.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,Sa=t=>t.strings===void 0,Ea={},Pa=(t,e=Ea)=>t._$AH=e;var We=Symbol(),po=Symbol(),Zo,ti=new Map,W=class extends E{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return b`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?We:po}catch{return po}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())!=="svg")return We;Zo||(Zo=new DOMParser);const c=Zo.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):We}catch{return We}}connectedCallback(){super.connectedCallback(),ka(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),$a(this)}getUrl(){const t=_r(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=_r(this.library),o=this.getUrl();if(!o){this.svg=null;return}let i=ti.get(o);if(i||(i=this.resolveIcon(o,e),ti.set(o,i)),!this.initialRender)return;const r=await i;if(r===po&&ti.delete(o),o===this.getUrl()){if(Ca(r)){this.svg=r;return}switch(r){case po:case We:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=e==null?void 0:e.mutator)==null||t.call(e,this.svg),this.emit("sl-load")}}}render(){return this.svg}};W.styles=ga;a([x()],W.prototype,"svg",2);a([d({reflect:!0})],W.prototype,"name",2);a([d()],W.prototype,"src",2);a([d()],W.prototype,"label",2);a([d({reflect:!0})],W.prototype,"library",2);a([C("label")],W.prototype,"handleLabelChange",1);a([C(["name","src","library"])],W.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ti=t=>(...e)=>({_$litDirective$:t,values:e});class Li{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=Ti(class extends Li{constructor(t){var e;if(super(t),t.type!==Ht.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((o=this.nt)===null||o===void 0)&&o.has(s))&&this.it.add(s);return this.render(e)}const r=t.element.classList;this.it.forEach(s=>{s in e||(r.remove(s),this.it.delete(s))});for(const s in e){const n=!!e[s];n===this.it.has(s)||((i=this.nt)===null||i===void 0?void 0:i.has(s))||(n?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return mt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=Symbol.for(""),za=t=>{if((t==null?void 0:t.r)===hs)return t==null?void 0:t._$litStatic$},To=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:hs}),xr=new Map,Aa=t=>(e,...o)=>{const i=o.length;let r,s;const n=[],c=[];let l,u=0,h=!1;for(;u<i;){for(l=e[u];u<i&&(s=o[u],(r=za(s))!==void 0);)l+=r+e[++u],h=!0;u!==i&&c.push(s),n.push(l),u++}if(u===i&&n.push(e[i]),h){const p=n.join("$$lit$$");(e=xr.get(p))===void 0&&(n.raw=n,xr.set(p,e=n)),o=c}return t(e,...o)},_o=Aa(b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=t=>t!=null?t:j;var L=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Ee(this,"[default]","prefix","suffix"),this.localize=new ot(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Vo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?To`a`:To`button`;return _o`
      <${e}
        part="base"
        class=${R({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(t?void 0:this.disabled)}
        type=${y(t?void 0:this.type)}
        title=${this.title}
        name=${y(t?void 0:this.name)}
        value=${y(t?void 0:this.value)}
        href=${y(t?this.href:void 0)}
        target=${y(t?this.target:void 0)}
        download=${y(t?this.download:void 0)}
        rel=${y(t?this.rel:void 0)}
        role=${y(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?_o` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?_o`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};L.styles=fa;L.dependencies={"sl-icon":W,"sl-spinner":us};a([_(".button")],L.prototype,"button",2);a([x()],L.prototype,"hasFocus",2);a([x()],L.prototype,"invalid",2);a([d()],L.prototype,"title",2);a([d({reflect:!0})],L.prototype,"variant",2);a([d({reflect:!0})],L.prototype,"size",2);a([d({type:Boolean,reflect:!0})],L.prototype,"caret",2);a([d({type:Boolean,reflect:!0})],L.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],L.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],L.prototype,"outline",2);a([d({type:Boolean,reflect:!0})],L.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],L.prototype,"circle",2);a([d()],L.prototype,"type",2);a([d()],L.prototype,"name",2);a([d()],L.prototype,"value",2);a([d()],L.prototype,"href",2);a([d()],L.prototype,"target",2);a([d()],L.prototype,"rel",2);a([d()],L.prototype,"download",2);a([d()],L.prototype,"form",2);a([d({attribute:"formaction"})],L.prototype,"formAction",2);a([d({attribute:"formenctype"})],L.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],L.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],L.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],L.prototype,"formTarget",2);a([C("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);L.define("sl-button");var Ta={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};sa(Ta);var La=g`
  ${I}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ro=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,n,c){var l;const u=i.getPropertyOptions(t),h=typeof u.attribute=="string"?u.attribute:t;if(s===h){const p=u.converter||Xe,f=(typeof p=="function"?p:(l=p==null?void 0:p.fromAttribute)!=null?l:Xe.fromAttribute)(c,u.type);this[t]!==f&&(this[o]=f)}r.call(this,s,n,c)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=Ti(class extends Li{constructor(t){if(super(t),t.type!==Ht.PROPERTY&&t.type!==Ht.ATTRIBUTE&&t.type!==Ht.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Sa(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===mt||e===j)return e;const o=t.element,i=t.name;if(t.type===Ht.PROPERTY){if(e===o[i])return mt}else if(t.type===Ht.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return mt}else if(t.type===Ht.ATTRIBUTE&&o.getAttribute(i)===e+"")return mt;return Pa(t),e}});var X=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return b`
      <label
        part="base"
        class=${R({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${y(this.value)}
          .indeterminate=${Lo(this.indeterminate)}
          .checked=${Lo(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?b`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?b`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};X.styles=La;X.dependencies={"sl-icon":W};a([_('input[type="checkbox"]')],X.prototype,"input",2);a([x()],X.prototype,"hasFocus",2);a([d()],X.prototype,"title",2);a([d()],X.prototype,"name",2);a([d()],X.prototype,"value",2);a([d({reflect:!0})],X.prototype,"size",2);a([d({type:Boolean,reflect:!0})],X.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],X.prototype,"checked",2);a([d({type:Boolean,reflect:!0})],X.prototype,"indeterminate",2);a([ro("checked")],X.prototype,"defaultChecked",2);a([d({reflect:!0})],X.prototype,"form",2);a([d({type:Boolean,reflect:!0})],X.prototype,"required",2);a([C("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);a([C(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],X.prototype,"handleStateChange",1);X.define("sl-checkbox");var Oa=g`
  ${I}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,ps=class extends E{render(){return b` <slot></slot> `}};ps.styles=Oa;function ei(t,e){function o(r){const s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,c=s.left+n.pageXOffset,l=s.top+n.pageYOffset,u=r.pageX-c,h=r.pageY-l;e!=null&&e.onMove&&e.onMove(u,h)}function i(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",i),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&o(e.initialEvent)}var Fo=g`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Ra=g`
  ${I}
  ${Fo}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,k=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ee(this,"help-text","label"),this.localize=new ot(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly,s=r&&(typeof this.value=="number"||this.value.length>0);return b`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${y(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              min=${y(this.min)}
              max=${y(this.max)}
              step=${y(this.step)}
              .value=${Lo(this.value)}
              autocapitalize=${y(this.autocapitalize)}
              autocomplete=${y(this.autocomplete)}
              autocorrect=${y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${y(this.pattern)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?b`
                  <button
                    part="clear-button"
                    class=${R({input__clear:!0,"input__clear--visible":s})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?b`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?b`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:b`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};k.styles=Ra;k.dependencies={"sl-icon":W};a([_(".input__control")],k.prototype,"input",2);a([x()],k.prototype,"hasFocus",2);a([d()],k.prototype,"title",2);a([d({reflect:!0})],k.prototype,"type",2);a([d()],k.prototype,"name",2);a([d()],k.prototype,"value",2);a([ro()],k.prototype,"defaultValue",2);a([d({reflect:!0})],k.prototype,"size",2);a([d({type:Boolean,reflect:!0})],k.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],k.prototype,"pill",2);a([d()],k.prototype,"label",2);a([d({attribute:"help-text"})],k.prototype,"helpText",2);a([d({type:Boolean})],k.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],k.prototype,"disabled",2);a([d()],k.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],k.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],k.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],k.prototype,"passwordVisible",2);a([d({attribute:"no-spin-buttons",type:Boolean})],k.prototype,"noSpinButtons",2);a([d({reflect:!0})],k.prototype,"form",2);a([d({type:Boolean,reflect:!0})],k.prototype,"required",2);a([d()],k.prototype,"pattern",2);a([d({type:Number})],k.prototype,"minlength",2);a([d({type:Number})],k.prototype,"maxlength",2);a([d()],k.prototype,"min",2);a([d()],k.prototype,"max",2);a([d()],k.prototype,"step",2);a([d()],k.prototype,"autocapitalize",2);a([d()],k.prototype,"autocorrect",2);a([d()],k.prototype,"autocomplete",2);a([d({type:Boolean})],k.prototype,"autofocus",2);a([d()],k.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],k.prototype,"spellcheck",2);a([d()],k.prototype,"inputmode",2);a([C("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);a([C("step",{waitUntilFirstUpdate:!0})],k.prototype,"handleStepChange",1);a([C("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1);var Ia=g`
  ${I}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function fs(t){return Ma(t)}function oi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ma(t){for(let e=t;e;e=oi(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=oi(t);e;e=oi(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Ua(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null&&fs(t)===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Da(t){var e,o;const i=xo(t),r=(e=i[0])!=null?e:null,s=(o=i[i.length-1])!=null?o:null;return{start:r,end:s}}function xo(t){const e=[];function o(i){i instanceof Element&&(e.push(i),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)),[...i.children].forEach(r=>o(r))}return o(t),e.filter(Ua).sort((i,r)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var Va=g`
  ${I}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const qt=Math.min,nt=Math.max,Oo=Math.round,fo=Math.floor,Bt=t=>({x:t,y:t}),Fa={left:"right",right:"left",bottom:"top",top:"bottom"},Na={start:"end",end:"start"};function gi(t,e,o){return nt(t,qt(e,o))}function Pe(t,e){return typeof t=="function"?t(e):t}function Gt(t){return t.split("-")[0]}function ze(t){return t.split("-")[1]}function ms(t){return t==="x"?"y":"x"}function Oi(t){return t==="y"?"height":"width"}function so(t){return["top","bottom"].includes(Gt(t))?"y":"x"}function Ri(t){return ms(so(t))}function Ha(t,e,o){o===void 0&&(o=!1);const i=ze(t),r=Ri(t),s=Oi(r);let n=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=Ro(n)),[n,Ro(n)]}function ja(t){const e=Ro(t);return[bi(t),e,bi(e)]}function bi(t){return t.replace(/start|end/g,e=>Na[e])}function Wa(t,e,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?s:n;default:return[]}}function qa(t,e,o,i){const r=ze(t);let s=Wa(Gt(t),o==="start",i);return r&&(s=s.map(n=>n+"-"+r),e&&(s=s.concat(s.map(bi)))),s}function Ro(t){return t.replace(/left|right|bottom|top/g,e=>Fa[e])}function Ba(t){return{top:0,right:0,bottom:0,left:0,...t}}function gs(t){return typeof t!="number"?Ba(t):{top:t,right:t,bottom:t,left:t}}function Io(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function kr(t,e,o){let{reference:i,floating:r}=t;const s=so(e),n=Ri(e),c=Oi(n),l=Gt(e),u=s==="y",h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,m=i[c]/2-r[c]/2;let f;switch(l){case"top":f={x:h,y:i.y-r.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:p};break;case"left":f={x:i.x-r.width,y:p};break;default:f={x:i.x,y:i.y}}switch(ze(e)){case"start":f[n]-=m*(o&&u?-1:1);break;case"end":f[n]+=m*(o&&u?-1:1);break}return f}const Ga=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:n}=o,c=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:p}=kr(u,i,l),m=i,f={},v=0;for(let w=0;w<c.length;w++){const{name:A,fn:$}=c[w],{x:z,y:O,data:H,reset:V}=await $({x:h,y:p,initialPlacement:i,placement:m,strategy:r,middlewareData:f,rects:u,platform:n,elements:{reference:t,floating:e}});if(h=z!=null?z:h,p=O!=null?O:p,f={...f,[A]:{...f[A],...H}},V&&v<=50){v++,typeof V=="object"&&(V.placement&&(m=V.placement),V.rects&&(u=V.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):V.rects),{x:h,y:p}=kr(u,m,l)),w=-1;continue}}return{x:h,y:p,placement:m,strategy:r,middlewareData:f}};async function Ii(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:n,elements:c,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:m=!1,padding:f=0}=Pe(e,t),v=gs(f),A=c[m?p==="floating"?"reference":"floating":p],$=Io(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(A)))==null||o?A:A.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:u,rootBoundary:h,strategy:l})),z=p==="floating"?{...n.floating,x:i,y:r}:n.reference,O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),H=await(s.isElement==null?void 0:s.isElement(O))?await(s.getScale==null?void 0:s.getScale(O))||{x:1,y:1}:{x:1,y:1},V=Io(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:z,offsetParent:O,strategy:l}):z);return{top:($.top-V.top+v.top)/H.y,bottom:(V.bottom-$.bottom+v.bottom)/H.y,left:($.left-V.left+v.left)/H.x,right:(V.right-$.right+v.right)/H.x}}const Ka=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:s,platform:n,elements:c,middlewareData:l}=e,{element:u,padding:h=0}=Pe(t,e)||{};if(u==null)return{};const p=gs(h),m={x:o,y:i},f=Ri(r),v=Oi(f),w=await n.getDimensions(u),A=f==="y",$=A?"top":"left",z=A?"bottom":"right",O=A?"clientHeight":"clientWidth",H=s.reference[v]+s.reference[f]-m[f]-s.floating[v],V=m[f]-s.reference[f],N=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let Z=N?N[O]:0;(!Z||!await(n.isElement==null?void 0:n.isElement(N)))&&(Z=c.floating[O]||s.floating[v]);const it=H/2-V/2,Vt=Z/2-w[v]/2-1,De=qt(p[$],Vt),Ve=qt(p[z],Vt),pt=De,Fe=Z-w[v]-Ve,rt=Z/2-w[v]/2+it,Ct=gi(pt,rt,Fe),St=!l.arrow&&ze(r)!=null&&rt!=Ct&&s.reference[v]/2-(rt<pt?De:Ve)-w[v]/2<0,Rt=St?rt<pt?rt-pt:rt-Fe:0;return{[f]:m[f]+Rt,data:{[f]:Ct,centerOffset:rt-Ct-Rt,...St&&{alignmentOffset:Rt}},reset:St}}}),Xa=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:s,rects:n,initialPlacement:c,platform:l,elements:u}=e,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...A}=Pe(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const $=Gt(r),z=Gt(c)===c,O=await(l.isRTL==null?void 0:l.isRTL(u.floating)),H=m||(z||!w?[Ro(c)]:ja(c));!m&&v!=="none"&&H.push(...qa(c,w,v,O));const V=[c,...H],N=await Ii(e,A),Z=[];let it=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&Z.push(N[$]),p){const pt=Ha(r,n,O);Z.push(N[pt[0]],N[pt[1]])}if(it=[...it,{placement:r,overflows:Z}],!Z.every(pt=>pt<=0)){var Vt,De;const pt=(((Vt=s.flip)==null?void 0:Vt.index)||0)+1,Fe=V[pt];if(Fe)return{data:{index:pt,overflows:it},reset:{placement:Fe}};let rt=(De=it.filter(Ct=>Ct.overflows[0]<=0).sort((Ct,St)=>Ct.overflows[1]-St.overflows[1])[0])==null?void 0:De.placement;if(!rt)switch(f){case"bestFit":{var Ve;const Ct=(Ve=it.map(St=>[St.placement,St.overflows.filter(Rt=>Rt>0).reduce((Rt,Qs)=>Rt+Qs,0)]).sort((St,Rt)=>St[1]-Rt[1])[0])==null?void 0:Ve[0];Ct&&(rt=Ct);break}case"initialPlacement":rt=c;break}if(r!==rt)return{reset:{placement:rt}}}return{}}}};async function Ja(t,e){const{placement:o,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=Gt(o),c=ze(o),l=so(o)==="y",u=["left","top"].includes(n)?-1:1,h=s&&l?-1:1,p=Pe(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&typeof v=="number"&&(f=c==="end"?v*-1:v),l?{x:f*h,y:m*u}:{x:m*u,y:f*h}}const Ya=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:i}=e,r=await Ja(e,t);return{x:o+r.x,y:i+r.y,data:r}}}},Qa=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:c={fn:A=>{let{x:$,y:z}=A;return{x:$,y:z}}},...l}=Pe(t,e),u={x:o,y:i},h=await Ii(e,l),p=so(Gt(r)),m=ms(p);let f=u[m],v=u[p];if(s){const A=m==="y"?"top":"left",$=m==="y"?"bottom":"right",z=f+h[A],O=f-h[$];f=gi(z,f,O)}if(n){const A=p==="y"?"top":"left",$=p==="y"?"bottom":"right",z=v+h[A],O=v-h[$];v=gi(z,v,O)}const w=c.fn({...e,[m]:f,[p]:v});return{...w,data:{x:w.x-o,y:w.y-i}}}}},$r=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:r,elements:s}=e,{apply:n=()=>{},...c}=Pe(t,e),l=await Ii(e,c),u=Gt(o),h=ze(o),p=so(o)==="y",{width:m,height:f}=i.floating;let v,w;u==="top"||u==="bottom"?(v=u,w=h===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(w=u,v=h==="end"?"top":"bottom");const A=f-l[v],$=m-l[w],z=!e.middlewareData.shift;let O=A,H=$;if(p){const N=m-l.left-l.right;H=h||z?qt($,N):N}else{const N=f-l.top-l.bottom;O=h||z?qt(A,N):N}if(z&&!h){const N=nt(l.left,0),Z=nt(l.right,0),it=nt(l.top,0),Vt=nt(l.bottom,0);p?H=m-2*(N!==0||Z!==0?N+Z:nt(l.left,l.right)):O=f-2*(it!==0||Vt!==0?it+Vt:nt(l.top,l.bottom))}await n({...e,availableWidth:H,availableHeight:O});const V=await r.getDimensions(s.floating);return m!==V.width||f!==V.height?{reset:{rects:!0}}:{}}}};function Kt(t){return bs(t)?(t.nodeName||"").toLowerCase():"#document"}function ct(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Dt(t){var e;return(e=(bs(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function bs(t){return t instanceof Node||t instanceof ct(t).Node}function Mt(t){return t instanceof Element||t instanceof ct(t).Element}function Pt(t){return t instanceof HTMLElement||t instanceof ct(t).HTMLElement}function Cr(t){return typeof ShadowRoot=="undefined"?!1:t instanceof ShadowRoot||t instanceof ct(t).ShadowRoot}function no(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=bt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function Za(t){return["table","td","th"].includes(Kt(t))}function Mi(t){const e=Ui(),o=bt(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function tl(t){let e=xe(t);for(;Pt(e)&&!No(e);){if(Mi(e))return e;e=xe(e)}return null}function Ui(){return typeof CSS=="undefined"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function No(t){return["html","body","#document"].includes(Kt(t))}function bt(t){return ct(t).getComputedStyle(t)}function Ho(t){return Mt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function xe(t){if(Kt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Cr(t)&&t.host||Dt(t);return Cr(e)?e.host:e}function vs(t){const e=xe(t);return No(e)?t.ownerDocument?t.ownerDocument.body:t.body:Pt(e)&&no(e)?e:vs(e)}function to(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=vs(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),n=ct(r);return s?e.concat(n,n.visualViewport||[],no(r)?r:[],n.frameElement&&o?to(n.frameElement):[]):e.concat(r,to(r,[],o))}function ys(t){const e=bt(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Pt(t),s=r?t.offsetWidth:o,n=r?t.offsetHeight:i,c=Oo(o)!==s||Oo(i)!==n;return c&&(o=s,i=n),{width:o,height:i,$:c}}function Di(t){return Mt(t)?t:t.contextElement}function ye(t){const e=Di(t);if(!Pt(e))return Bt(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:s}=ys(e);let n=(s?Oo(o.width):o.width)/i,c=(s?Oo(o.height):o.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const el=Bt(0);function ws(t){const e=ct(t);return!Ui()||!e.visualViewport?el:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ol(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==ct(t)?!1:e}function ae(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=Di(t);let n=Bt(1);e&&(i?Mt(i)&&(n=ye(i)):n=ye(t));const c=ol(s,o,i)?ws(s):Bt(0);let l=(r.left+c.x)/n.x,u=(r.top+c.y)/n.y,h=r.width/n.x,p=r.height/n.y;if(s){const m=ct(s),f=i&&Mt(i)?ct(i):i;let v=m.frameElement;for(;v&&i&&f!==m;){const w=ye(v),A=v.getBoundingClientRect(),$=bt(v),z=A.left+(v.clientLeft+parseFloat($.paddingLeft))*w.x,O=A.top+(v.clientTop+parseFloat($.paddingTop))*w.y;l*=w.x,u*=w.y,h*=w.x,p*=w.y,l+=z,u+=O,v=ct(v).frameElement}}return Io({width:h,height:p,x:l,y:u})}function il(t){let{rect:e,offsetParent:o,strategy:i}=t;const r=Pt(o),s=Dt(o);if(o===s)return e;let n={scrollLeft:0,scrollTop:0},c=Bt(1);const l=Bt(0);if((r||!r&&i!=="fixed")&&((Kt(o)!=="body"||no(s))&&(n=Ho(o)),Pt(o))){const u=ae(o);c=ye(o),l.x=u.x+o.clientLeft,l.y=u.y+o.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-n.scrollLeft*c.x+l.x,y:e.y*c.y-n.scrollTop*c.y+l.y}}function rl(t){return Array.from(t.getClientRects())}function _s(t){return ae(Dt(t)).left+Ho(t).scrollLeft}function sl(t){const e=Dt(t),o=Ho(t),i=t.ownerDocument.body,r=nt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=nt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+_s(t);const c=-o.scrollTop;return bt(i).direction==="rtl"&&(n+=nt(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:n,y:c}}function nl(t,e){const o=ct(t),i=Dt(t),r=o.visualViewport;let s=i.clientWidth,n=i.clientHeight,c=0,l=0;if(r){s=r.width,n=r.height;const u=Ui();(!u||u&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:s,height:n,x:c,y:l}}function al(t,e){const o=ae(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,s=Pt(t)?ye(t):Bt(1),n=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,u=i*s.y;return{width:n,height:c,x:l,y:u}}function Sr(t,e,o){let i;if(e==="viewport")i=nl(t,o);else if(e==="document")i=sl(Dt(t));else if(Mt(e))i=al(e,o);else{const r=ws(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return Io(i)}function xs(t,e){const o=xe(t);return o===e||!Mt(o)||No(o)?!1:bt(o).position==="fixed"||xs(o,e)}function ll(t,e){const o=e.get(t);if(o)return o;let i=to(t,[],!1).filter(c=>Mt(c)&&Kt(c)!=="body"),r=null;const s=bt(t).position==="fixed";let n=s?xe(t):t;for(;Mt(n)&&!No(n);){const c=bt(n),l=Mi(n);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||no(n)&&!l&&xs(t,n))?i=i.filter(h=>h!==n):r=c,n=xe(n)}return e.set(t,i),i}function cl(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const n=[...o==="clippingAncestors"?ll(e,this._c):[].concat(o),i],c=n[0],l=n.reduce((u,h)=>{const p=Sr(e,h,r);return u.top=nt(p.top,u.top),u.right=qt(p.right,u.right),u.bottom=qt(p.bottom,u.bottom),u.left=nt(p.left,u.left),u},Sr(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function dl(t){return ys(t)}function ul(t,e,o){const i=Pt(e),r=Dt(e),s=o==="fixed",n=ae(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=Bt(0);if(i||!i&&!s)if((Kt(e)!=="body"||no(r))&&(c=Ho(e)),i){const u=ae(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else r&&(l.x=_s(r));return{x:n.left+c.scrollLeft-l.x,y:n.top+c.scrollTop-l.y,width:n.width,height:n.height}}function Er(t,e){return!Pt(t)||bt(t).position==="fixed"?null:e?e(t):t.offsetParent}function ks(t,e){const o=ct(t);if(!Pt(t))return o;let i=Er(t,e);for(;i&&Za(i)&&bt(i).position==="static";)i=Er(i,e);return i&&(Kt(i)==="html"||Kt(i)==="body"&&bt(i).position==="static"&&!Mi(i))?o:i||tl(t)||o}const hl=async function(t){let{reference:e,floating:o,strategy:i}=t;const r=this.getOffsetParent||ks,s=this.getDimensions;return{reference:ul(e,await r(o),i),floating:{x:0,y:0,...await s(o)}}};function pl(t){return bt(t).direction==="rtl"}const ko={convertOffsetParentRelativeRectToViewportRelativeRect:il,getDocumentElement:Dt,getClippingRect:cl,getOffsetParent:ks,getElementRects:hl,getClientRects:rl,getDimensions:dl,getScale:ye,isElement:Mt,isRTL:pl};function fl(t,e){let o=null,i;const r=Dt(t);function s(){clearTimeout(i),o&&o.disconnect(),o=null}function n(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:u,top:h,width:p,height:m}=t.getBoundingClientRect();if(c||e(),!p||!m)return;const f=fo(h),v=fo(r.clientWidth-(u+p)),w=fo(r.clientHeight-(h+m)),A=fo(u),z={rootMargin:-f+"px "+-v+"px "+-w+"px "+-A+"px",threshold:nt(0,qt(1,l))||1};let O=!0;function H(V){const N=V[0].intersectionRatio;if(N!==l){if(!O)return n();N?n(!1,N):i=setTimeout(()=>{n(!1,1e-7)},100)}O=!1}try{o=new IntersectionObserver(H,{...z,root:r.ownerDocument})}catch{o=new IntersectionObserver(H,z)}o.observe(t)}return n(!0),s}function ml(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=Di(t),h=r||s?[...u?to(u):[],...to(e)]:[];h.forEach($=>{r&&$.addEventListener("scroll",o,{passive:!0}),s&&$.addEventListener("resize",o)});const p=u&&c?fl(u,o):null;let m=-1,f=null;n&&(f=new ResizeObserver($=>{let[z]=$;z&&z.target===u&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(e)})),o()}),u&&!l&&f.observe(u),f.observe(e));let v,w=l?ae(t):null;l&&A();function A(){const $=ae(t);w&&($.x!==w.x||$.y!==w.y||$.width!==w.width||$.height!==w.height)&&o(),w=$,v=requestAnimationFrame(A)}return o(),()=>{h.forEach($=>{r&&$.removeEventListener("scroll",o),s&&$.removeEventListener("resize",o)}),p&&p(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(v)}}const gl=(t,e,o)=>{const i=new Map,r={platform:ko,...o},s={...r.platform,_c:i};return Ga(t,e,{...r,platform:s})};function bl(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var M=class extends E{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||bl(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=ml(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ya({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push($r({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Xa({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Qa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push($r({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ka({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>ko.getOffsetParent(o,fs):ko.getOffsetParent;gl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:io(Ut({},ko),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:s})=>{const n=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,u=r.arrow.y;let h="",p="",m="",f="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?v:"",f=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":v,f=n?v:"",m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:p,bottom:m,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${R({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?b`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};M.styles=Va;a([_(".popup")],M.prototype,"popup",2);a([_(".popup__arrow")],M.prototype,"arrowEl",2);a([d()],M.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],M.prototype,"active",2);a([d({reflect:!0})],M.prototype,"placement",2);a([d({reflect:!0})],M.prototype,"strategy",2);a([d({type:Number})],M.prototype,"distance",2);a([d({type:Number})],M.prototype,"skidding",2);a([d({type:Boolean})],M.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],M.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],M.prototype,"arrowPadding",2);a([d({type:Boolean})],M.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],M.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],M.prototype,"flipFallbackStrategy",2);a([d({type:Object})],M.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],M.prototype,"flipPadding",2);a([d({type:Boolean})],M.prototype,"shift",2);a([d({type:Object})],M.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],M.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],M.prototype,"autoSize",2);a([d()],M.prototype,"sync",2);a([d({type:Object})],M.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],M.prototype,"autoSizePadding",2);var $s=new Map,vl=new WeakMap;function yl(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function Pr(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function ut(t,e){$s.set(t,yl(e))}function at(t,e,o){const i=vl.get(t);if(i!=null&&i[e])return Pr(i[e],o.dir);const r=$s.get(e);return r?Pr(r,o.dir):{keyframes:[],options:{duration:0}}}function zt(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function lt(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,io(Ut({},o),{duration:wl()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function zr(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function wl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}function Ar(t,e){return t.map(o=>io(Ut({},o),{height:o.height==="auto"?`${e}px`:o.height}))}var tt=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,r;const s=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>Da(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,zt(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,zt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await gt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=at(this,"dropdown.show",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await gt(this);const{keyframes:t,options:e}=at(this,"dropdown.hide",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return b`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${R({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};tt.styles=Ia;tt.dependencies={"sl-popup":M};a([_(".dropdown")],tt.prototype,"popup",2);a([_(".dropdown__trigger")],tt.prototype,"trigger",2);a([_(".dropdown__panel")],tt.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],tt.prototype,"open",2);a([d({reflect:!0})],tt.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);a([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],tt.prototype,"stayOpenOnSelect",2);a([d({attribute:!1})],tt.prototype,"containingElement",2);a([d({type:Number})],tt.prototype,"distance",2);a([d({type:Number})],tt.prototype,"skidding",2);a([d({type:Boolean})],tt.prototype,"hoist",2);a([C("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);ut("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ut("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var _l=g`
  ${I}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function ft(t,e,o){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>o?i(o):i(t)}var xl=g`
  ${I}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ae=class extends E{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=qe(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=qe(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=qe(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=qe(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=qe(e);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",o===0),i.classList.toggle("sl-button-group__button--inner",o>0&&o<t.length-1),i.classList.toggle("sl-button-group__button--last",o===t.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return b`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ae.styles=xl;a([_("slot")],Ae.prototype,"defaultSlot",2);a([x()],Ae.prototype,"disableRole",2);a([d()],Ae.prototype,"label",2);function qe(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs="important",kl=" !"+Cs,Ft=Ti(class extends Li{constructor(t){var e;if(super(t),t.type!==Ht.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const i=t[o];return i==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ht===void 0){this.ht=new Set;for(const i in e)this.ht.add(i);return this.render(e)}this.ht.forEach(i=>{e[i]==null&&(this.ht.delete(i),i.includes("-")?o.removeProperty(i):o[i]="")});for(const i in e){const r=e[i];if(r!=null){this.ht.add(i);const s=typeof r=="string"&&r.endsWith(kl);i.includes("-")||s?o.setProperty(i,s?r.slice(0,-11):r,s?Cs:""):o[i]=r}}return mt}});function K(t,e){$l(t)&&(t="100%");var o=Cl(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),o&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function mo(t){return Math.min(1,Math.max(0,t))}function $l(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Cl(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Ss(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function go(t){return t<=1?"".concat(Number(t)*100,"%"):t}function oe(t){return t.length===1?"0"+t:String(t)}function Sl(t,e,o){return{r:K(t,255)*255,g:K(e,255)*255,b:K(o,255)*255}}function Tr(t,e,o){t=K(t,255),e=K(e,255),o=K(o,255);var i=Math.max(t,e,o),r=Math.min(t,e,o),s=0,n=0,c=(i+r)/2;if(i===r)n=0,s=0;else{var l=i-r;switch(n=c>.5?l/(2-i-r):l/(i+r),i){case t:s=(e-o)/l+(e<o?6:0);break;case e:s=(o-t)/l+2;break;case o:s=(t-e)/l+4;break}s/=6}return{h:s,s:n,l:c}}function ii(t,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(e-t)*(6*o):o<1/2?e:o<2/3?t+(e-t)*(2/3-o)*6:t}function El(t,e,o){var i,r,s;if(t=K(t,360),e=K(e,100),o=K(o,100),e===0)r=o,s=o,i=o;else{var n=o<.5?o*(1+e):o+e-o*e,c=2*o-n;i=ii(c,n,t+1/3),r=ii(c,n,t),s=ii(c,n,t-1/3)}return{r:i*255,g:r*255,b:s*255}}function Lr(t,e,o){t=K(t,255),e=K(e,255),o=K(o,255);var i=Math.max(t,e,o),r=Math.min(t,e,o),s=0,n=i,c=i-r,l=i===0?0:c/i;if(i===r)s=0;else{switch(i){case t:s=(e-o)/c+(e<o?6:0);break;case e:s=(o-t)/c+2;break;case o:s=(t-e)/c+4;break}s/=6}return{h:s,s:l,v:n}}function Pl(t,e,o){t=K(t,360)*6,e=K(e,100),o=K(o,100);var i=Math.floor(t),r=t-i,s=o*(1-e),n=o*(1-r*e),c=o*(1-(1-r)*e),l=i%6,u=[o,n,s,s,c,o][l],h=[c,o,o,n,s,s][l],p=[s,s,c,o,o,n][l];return{r:u*255,g:h*255,b:p*255}}function Or(t,e,o,i){var r=[oe(Math.round(t).toString(16)),oe(Math.round(e).toString(16)),oe(Math.round(o).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function zl(t,e,o,i,r){var s=[oe(Math.round(t).toString(16)),oe(Math.round(e).toString(16)),oe(Math.round(o).toString(16)),oe(Al(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Al(t){return Math.round(parseFloat(t)*255).toString(16)}function Rr(t){return st(t)/255}function st(t){return parseInt(t,16)}function Tl(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var vi={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ll(t){var e={r:0,g:0,b:0},o=1,i=null,r=null,s=null,n=!1,c=!1;return typeof t=="string"&&(t=Il(t)),typeof t=="object"&&(It(t.r)&&It(t.g)&&It(t.b)?(e=Sl(t.r,t.g,t.b),n=!0,c=String(t.r).substr(-1)==="%"?"prgb":"rgb"):It(t.h)&&It(t.s)&&It(t.v)?(i=go(t.s),r=go(t.v),e=Pl(t.h,i,r),n=!0,c="hsv"):It(t.h)&&It(t.s)&&It(t.l)&&(i=go(t.s),s=go(t.l),e=El(t.h,i,s),n=!0,c="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(o=t.a)),o=Ss(o),{ok:n,format:t.format||c,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:o}}var Ol="[-\\+]?\\d+%?",Rl="[-\\+]?\\d*\\.\\d+%?",Wt="(?:".concat(Rl,")|(?:").concat(Ol,")"),ri="[\\s|\\(]+(".concat(Wt,")[,|\\s]+(").concat(Wt,")[,|\\s]+(").concat(Wt,")\\s*\\)?"),si="[\\s|\\(]+(".concat(Wt,")[,|\\s]+(").concat(Wt,")[,|\\s]+(").concat(Wt,")[,|\\s]+(").concat(Wt,")\\s*\\)?"),_t={CSS_UNIT:new RegExp(Wt),rgb:new RegExp("rgb"+ri),rgba:new RegExp("rgba"+si),hsl:new RegExp("hsl"+ri),hsla:new RegExp("hsla"+si),hsv:new RegExp("hsv"+ri),hsva:new RegExp("hsva"+si),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Il(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(vi[t])t=vi[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var o=_t.rgb.exec(t);return o?{r:o[1],g:o[2],b:o[3]}:(o=_t.rgba.exec(t),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=_t.hsl.exec(t),o?{h:o[1],s:o[2],l:o[3]}:(o=_t.hsla.exec(t),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=_t.hsv.exec(t),o?{h:o[1],s:o[2],v:o[3]}:(o=_t.hsva.exec(t),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=_t.hex8.exec(t),o?{r:st(o[1]),g:st(o[2]),b:st(o[3]),a:Rr(o[4]),format:e?"name":"hex8"}:(o=_t.hex6.exec(t),o?{r:st(o[1]),g:st(o[2]),b:st(o[3]),format:e?"name":"hex"}:(o=_t.hex4.exec(t),o?{r:st(o[1]+o[1]),g:st(o[2]+o[2]),b:st(o[3]+o[3]),a:Rr(o[4]+o[4]),format:e?"name":"hex8"}:(o=_t.hex3.exec(t),o?{r:st(o[1]+o[1]),g:st(o[2]+o[2]),b:st(o[3]+o[3]),format:e?"name":"hex"}:!1)))))))))}function It(t){return Boolean(_t.CSS_UNIT.exec(String(t)))}var Ir=function(){function t(e,o){e===void 0&&(e=""),o===void 0&&(o={});var i;if(e instanceof t)return e;typeof e=="number"&&(e=Tl(e)),this.originalInput=e;var r=Ll(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=o.format)!==null&&i!==void 0?i:r.format,this.gradientType=o.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),o,i,r,s=e.r/255,n=e.g/255,c=e.b/255;return s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),c<=.03928?r=c/12.92:r=Math.pow((c+.055)/1.055,2.4),.2126*o+.7152*i+.0722*r},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Ss(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=Lr(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=Lr(this.r,this.g,this.b),o=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(o,", ").concat(i,"%, ").concat(r,"%)"):"hsva(".concat(o,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=Tr(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=Tr(this.r,this.g,this.b),o=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(o,", ").concat(i,"%, ").concat(r,"%)"):"hsla(".concat(o,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),Or(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),zl(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),o=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(o,", ").concat(i,")"):"rgba(".concat(e,", ").concat(o,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(o){return"".concat(Math.round(K(o,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(o){return Math.round(K(o,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Or(this.r,this.g,this.b,!1),o=0,i=Object.entries(vi);o<i.length;o++){var r=i[o],s=r[0],n=r[1];if(e===n)return s}return!1},t.prototype.toString=function(e){var o=Boolean(e);e=e!=null?e:this.format;var i=!1,r=this.a<1&&this.a>=0,s=!o&&r&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var o=this.toHsl();return o.l+=e/100,o.l=mo(o.l),new t(o)},t.prototype.brighten=function(e){e===void 0&&(e=10);var o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(e/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(e/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(e/100)))),new t(o)},t.prototype.darken=function(e){e===void 0&&(e=10);var o=this.toHsl();return o.l-=e/100,o.l=mo(o.l),new t(o)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var o=this.toHsl();return o.s-=e/100,o.s=mo(o.s),new t(o)},t.prototype.saturate=function(e){e===void 0&&(e=10);var o=this.toHsl();return o.s+=e/100,o.s=mo(o.s),new t(o)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var o=this.toHsl(),i=(o.h+e)%360;return o.h=i<0?360+i:i,new t(o)},t.prototype.mix=function(e,o){o===void 0&&(o=50);var i=this.toRgb(),r=new t(e).toRgb(),s=o/100,n={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new t(n)},t.prototype.analogous=function(e,o){e===void 0&&(e=6),o===void 0&&(o=30);var i=this.toHsl(),r=360/o,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new t(i));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var o=this.toHsv(),i=o.h,r=o.s,s=o.v,n=[],c=1/e;e--;)n.push(new t({h:i,s:r,v:s})),s=(s+c)%1;return n},t.prototype.splitcomplement=function(){var e=this.toHsl(),o=e.h;return[this,new t({h:(o+72)%360,s:e.s,l:e.l}),new t({h:(o+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var o=this.toRgb(),i=new t(e).toRgb(),r=o.a+i.a*(1-o.a);return new t({r:(o.r*o.a+i.r*i.a*(1-o.a))/r,g:(o.g*o.a+i.g*i.a*(1-o.a))/r,b:(o.b*o.a+i.b*i.a*(1-o.a))/r,a:r})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var o=this.toHsl(),i=o.h,r=[this],s=360/e,n=1;n<e;n++)r.push(new t({h:(i+n*s)%360,s:o.s,l:o.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),Mr="EyeDropper"in window,S=class extends E{constructor(){super(),this.formControlController=new ue(this),this.isSafeValue=!1,this.localize=new ot(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),o=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value;o.focus(),t.preventDefault(),ei(e,{onMove:s=>{this.alpha=ft(s/i*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),o=e.querySelector(".color-picker__slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value;o.focus(),t.preventDefault(),ei(e,{onMove:s=>{this.hue=ft(s/i*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),o=e.querySelector(".color-picker__grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let s=this.value;o.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ei(e,{onMove:(n,c)=>{this.saturation=ft(n/i*100,0,100),this.brightness=ft(100-c/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=ft(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=ft(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=ft(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=ft(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=ft(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=ft(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=ft(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=ft(this.brightness-e,0,100),this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,o=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new Ir(t);if(!e.isValid)return null;const o=e.toHsl(),i={h:o.h,s:o.s*100,l:o.l*100,a:o.a},r=e.toRgb(),s=e.toHexString(),n=e.toHex8String(),c=e.toHsv(),l={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Mr)return;new EyeDropper().open().then(e=>{const o=this.value;this.setColor(e.sRGBHex),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,o,i=100){const r=new Ir(`hsva(${t}, ${e}, ${o}, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const o=this.parseColor(e);o!==null?(this.inputValue=this.value,this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=o.hsva.a*100,this.syncValues()):this.inputValue=t!=null?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=b`
      <div
        part="base"
        class=${R({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?b`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ft({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${R({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ft({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${y(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Ft({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${y(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?b`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ft({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ft({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${y(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Ft({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":b`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Mr?b`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${o.length>0?b`
              <div part="swatches" class="color-picker__swatches">
                ${o.map(r=>{const s=this.parseColor(r);return s?b`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${y(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(s.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ft({backgroundColor:s.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:b`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${R({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Ft({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};S.styles=_l;S.dependencies={"sl-button-group":Ae,"sl-button":L,"sl-dropdown":tt,"sl-icon":W,"sl-input":k,"sl-visually-hidden":ps};a([_('[part~="base"]')],S.prototype,"base",2);a([_('[part~="input"]')],S.prototype,"input",2);a([_(".color-dropdown")],S.prototype,"dropdown",2);a([_('[part~="preview"]')],S.prototype,"previewButton",2);a([_('[part~="trigger"]')],S.prototype,"trigger",2);a([x()],S.prototype,"hasFocus",2);a([x()],S.prototype,"isDraggingGridHandle",2);a([x()],S.prototype,"isEmpty",2);a([x()],S.prototype,"inputValue",2);a([x()],S.prototype,"hue",2);a([x()],S.prototype,"saturation",2);a([x()],S.prototype,"brightness",2);a([x()],S.prototype,"alpha",2);a([d()],S.prototype,"value",2);a([ro()],S.prototype,"defaultValue",2);a([d()],S.prototype,"label",2);a([d()],S.prototype,"format",2);a([d({type:Boolean,reflect:!0})],S.prototype,"inline",2);a([d({reflect:!0})],S.prototype,"size",2);a([d({attribute:"no-format-toggle",type:Boolean})],S.prototype,"noFormatToggle",2);a([d()],S.prototype,"name",2);a([d({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([d({type:Boolean})],S.prototype,"hoist",2);a([d({type:Boolean})],S.prototype,"opacity",2);a([d({type:Boolean})],S.prototype,"uppercase",2);a([d()],S.prototype,"swatches",2);a([d({reflect:!0})],S.prototype,"form",2);a([d({type:Boolean,reflect:!0})],S.prototype,"required",2);a([C("format",{waitUntilFirstUpdate:!0})],S.prototype,"handleFormatChange",1);a([C("opacity",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpacityChange",1);a([C("value")],S.prototype,"handleValueChange",1);S.define("sl-color-picker");var Ml=g`
  ${I}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,$t=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await gt(this.body);const{keyframes:e,options:o}=at(this,"details.show",{dir:this.localize.dir()});await lt(this.body,Ar(e,this.body.scrollHeight),o),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await gt(this.body);const{keyframes:e,options:o}=at(this,"details.hide",{dir:this.localize.dir()});await lt(this.body,Ar(e,this.body.scrollHeight),o),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,zt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,zt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return b`
      <details
        part="base"
        class=${R({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};$t.styles=Ml;$t.dependencies={"sl-icon":W};a([_(".details")],$t.prototype,"details",2);a([_(".details__header")],$t.prototype,"header",2);a([_(".details__body")],$t.prototype,"body",2);a([_(".details__expand-icon-slot")],$t.prototype,"expandIconSlot",2);a([d({type:Boolean,reflect:!0})],$t.prototype,"open",2);a([d()],$t.prototype,"summary",2);a([d({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);a([C("open",{waitUntilFirstUpdate:!0})],$t.prototype,"handleOpenChange",1);ut("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ut("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});$t.define("sl-details");var Ul=g`
  ${I}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,jo=class extends E{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};jo.styles=Ul;a([d({type:Boolean,reflect:!0})],jo.prototype,"vertical",2);a([C("vertical")],jo.prototype,"handleVerticalChange",1);jo.define("sl-divider");var Dl=g`
  ${I}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,J=class extends E{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?To`a`:To`button`;return _o`
      <${e}
        part="base"
        class=${R({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${y(t?void 0:this.disabled)}
        type=${y(t?void 0:"button")}
        href=${y(t?this.href:void 0)}
        target=${y(t?this.target:void 0)}
        download=${y(t?this.download:void 0)}
        rel=${y(t&&this.target?"noreferrer noopener":void 0)}
        role=${y(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${y(this.name)}
          library=${y(this.library)}
          src=${y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};J.styles=Dl;J.dependencies={"sl-icon":W};a([_(".icon-button")],J.prototype,"button",2);a([x()],J.prototype,"hasFocus",2);a([d()],J.prototype,"name",2);a([d()],J.prototype,"library",2);a([d()],J.prototype,"src",2);a([d()],J.prototype,"href",2);a([d()],J.prototype,"target",2);a([d()],J.prototype,"download",2);a([d()],J.prototype,"label",2);a([d({type:Boolean,reflect:!0})],J.prototype,"disabled",2);J.define("sl-icon-button");k.define("sl-input");var Vl=g`
  ${I}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Vi=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const o=t.target.closest("sl-menu-item");!o||o.disabled||o.inert||(o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}}))}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),e==null||e.click()}if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return b`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Vi.styles=Vl;a([_("slot")],Vi.prototype,"defaultSlot",2);Vi.define("sl-menu");var Fl=g`
  ${I}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,vt=class extends E{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return ma(this.defaultSlot)}render(){return b`
      <div
        part="base"
        class=${R({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};vt.styles=Fl;vt.dependencies={"sl-icon":W};a([_("slot:not([name])")],vt.prototype,"defaultSlot",2);a([_(".menu-item")],vt.prototype,"menuItem",2);a([d()],vt.prototype,"type",2);a([d({type:Boolean,reflect:!0})],vt.prototype,"checked",2);a([d()],vt.prototype,"value",2);a([d({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);a([C("checked")],vt.prototype,"handleCheckedChange",1);a([C("disabled")],vt.prototype,"handleDisabledChange",1);a([C("type")],vt.prototype,"handleTypeChange",1);vt.define("sl-menu-item");var Nl=g`
  ${I}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,Es=class extends E{render(){return b` <slot part="base" class="menu-label"></slot> `}};Es.styles=Nl;Es.define("sl-menu-label");var Hl=g`
  ${I}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Jt=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return b`
      <span
        part="base"
        class=${R({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?b`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Jt.styles=Hl;Jt.dependencies={"sl-icon-button":J};a([d({reflect:!0})],Jt.prototype,"variant",2);a([d({reflect:!0})],Jt.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Jt.prototype,"pill",2);a([d({type:Boolean})],Jt.prototype,"removable",2);var jl=g`
  ${I}
  ${Fo}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Wl(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var yi=new Set;function ql(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ur(t){if(yi.add(t),!document.body.classList.contains("sl-scroll-lock")){const e=ql();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Dr(t){yi.delete(t),yi.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function wi(t,e,o="vertical",i="smooth"){const r=Wl(t,e),s=r.top+e.scrollTop,n=r.left+e.scrollLeft,c=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,u=e.scrollTop,h=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(n<c?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(s<u?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>h&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}var P=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ee(this,"help-text","label"),this.localize=new ot(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(o||i)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let n=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=s+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=s-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of r)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const o=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("sl-option"),i=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(t.forEach(i=>o.push(i.value)),this.setSelectedOptions(t.filter(i=>e.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),o.length&&o.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o,i;this.selectedOptions=this.getAllOptions().filter(r=>r.selected),this.multiple?(this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(i=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>e.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await gt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=at(this,"select.show",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.currentOption&&wi(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await gt(this);const{keyframes:t,options:e}=at(this,"select.hide",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,zt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,zt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return b`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${R({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?b`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((n,c)=>c<this.maxOptionsVisible||this.maxOptionsVisible<=0?b`
                            <sl-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              removable
                              @sl-remove=${l=>this.handleTagRemove(l,n)}
                            >
                              ${n.getTextLabel()}
                            </sl-tag>
                          `:c===this.maxOptionsVisible?b` <sl-tag size=${this.size}> +${this.selectedOptions.length-c} </sl-tag> `:null)}
                    </div>
                  `:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?b`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};P.styles=jl;P.dependencies={"sl-icon":W,"sl-popup":M,"sl-tag":Jt};a([_(".select")],P.prototype,"popup",2);a([_(".select__combobox")],P.prototype,"combobox",2);a([_(".select__display-input")],P.prototype,"displayInput",2);a([_(".select__value-input")],P.prototype,"valueInput",2);a([_(".select__listbox")],P.prototype,"listbox",2);a([x()],P.prototype,"hasFocus",2);a([x()],P.prototype,"displayLabel",2);a([x()],P.prototype,"currentOption",2);a([x()],P.prototype,"selectedOptions",2);a([d()],P.prototype,"name",2);a([d({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],P.prototype,"value",2);a([ro()],P.prototype,"defaultValue",2);a([d({reflect:!0})],P.prototype,"size",2);a([d()],P.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],P.prototype,"multiple",2);a([d({attribute:"max-options-visible",type:Number})],P.prototype,"maxOptionsVisible",2);a([d({type:Boolean,reflect:!0})],P.prototype,"disabled",2);a([d({type:Boolean})],P.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],P.prototype,"open",2);a([d({type:Boolean})],P.prototype,"hoist",2);a([d({type:Boolean,reflect:!0})],P.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],P.prototype,"pill",2);a([d()],P.prototype,"label",2);a([d({reflect:!0})],P.prototype,"placement",2);a([d({attribute:"help-text"})],P.prototype,"helpText",2);a([d({reflect:!0})],P.prototype,"form",2);a([d({type:Boolean,reflect:!0})],P.prototype,"required",2);a([C("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);a([C("value",{waitUntilFirstUpdate:!0})],P.prototype,"handleValueChange",1);a([C("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);ut("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ut("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});P.define("sl-select");var Bl=g`
  ${I}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Gl=0,At=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.attrId=++Gl,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,b`
      <div
        part="base"
        class=${R({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?b`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};At.styles=Bl;At.dependencies={"sl-icon-button":J};a([_(".tab")],At.prototype,"tab",2);a([d({reflect:!0})],At.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],At.prototype,"active",2);a([d({type:Boolean})],At.prototype,"closable",2);a([d({type:Boolean,reflect:!0})],At.prototype,"disabled",2);a([C("active")],At.prototype,"handleActiveChange",1);a([C("disabled")],At.prototype,"handleDisabledChange",1);At.define("sl-tab");var Kl=g`
  ${I}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,ht=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,i)=>{var r;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(o=>t.includeDisabled?o.tagName.toLowerCase()==="sl-tab":o.tagName.toLowerCase()==="sl-tab"&&!o.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const o=t.target.closest("sl-tab");(o==null?void 0:o.closest("sl-tab-group"))===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){const o=t.target.closest("sl-tab");if((o==null?void 0:o.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(r);t.key==="Home"?n=0:t.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&wi(this.tabs[n],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Ut({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&wi(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(t)).reduce((c,l)=>({left:c.left+l.clientWidth,top:c.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(o=>o.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return b`
      <div
        part="base"
        class=${R({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?b`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?b`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ht.styles=Kl;ht.dependencies={"sl-icon-button":J};a([_(".tab-group")],ht.prototype,"tabGroup",2);a([_(".tab-group__body")],ht.prototype,"body",2);a([_(".tab-group__nav")],ht.prototype,"nav",2);a([_(".tab-group__indicator")],ht.prototype,"indicator",2);a([x()],ht.prototype,"hasScrollControls",2);a([d()],ht.prototype,"placement",2);a([d()],ht.prototype,"activation",2);a([d({attribute:"no-scroll-controls",type:Boolean})],ht.prototype,"noScrollControls",2);a([C("noScrollControls",{waitUntilFirstUpdate:!0})],ht.prototype,"updateScrollControls",1);a([C("placement",{waitUntilFirstUpdate:!0})],ht.prototype,"syncIndicator",1);ht.define("sl-tab-group");var Xl=g`
  ${I}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Jl=0,ao=class extends E{constructor(){super(...arguments),this.attrId=++Jl,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return b`
      <slot
        part="base"
        class=${R({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};ao.styles=Xl;a([d({reflect:!0})],ao.prototype,"name",2);a([d({type:Boolean,reflect:!0})],ao.prototype,"active",2);a([C("active")],ao.prototype,"handleActiveChange",1);ao.define("sl-tab-panel");var Yl=g`
  ${I}
  ${Fo}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,T=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ee(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e;return b`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${y(this.name)}
              .value=${Lo(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              rows=${y(this.rows)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              autocapitalize=${y(this.autocapitalize)}
              autocorrect=${y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${y(this.spellcheck)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};T.styles=Yl;a([_(".textarea__control")],T.prototype,"input",2);a([x()],T.prototype,"hasFocus",2);a([d()],T.prototype,"title",2);a([d()],T.prototype,"name",2);a([d()],T.prototype,"value",2);a([d({reflect:!0})],T.prototype,"size",2);a([d({type:Boolean,reflect:!0})],T.prototype,"filled",2);a([d()],T.prototype,"label",2);a([d({attribute:"help-text"})],T.prototype,"helpText",2);a([d()],T.prototype,"placeholder",2);a([d({type:Number})],T.prototype,"rows",2);a([d()],T.prototype,"resize",2);a([d({type:Boolean,reflect:!0})],T.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],T.prototype,"readonly",2);a([d({reflect:!0})],T.prototype,"form",2);a([d({type:Boolean,reflect:!0})],T.prototype,"required",2);a([d({type:Number})],T.prototype,"minlength",2);a([d({type:Number})],T.prototype,"maxlength",2);a([d()],T.prototype,"autocapitalize",2);a([d()],T.prototype,"autocorrect",2);a([d()],T.prototype,"autocomplete",2);a([d({type:Boolean})],T.prototype,"autofocus",2);a([d()],T.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],T.prototype,"spellcheck",2);a([d()],T.prototype,"inputmode",2);a([ro()],T.prototype,"defaultValue",2);a([C("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);a([C("rows",{waitUntilFirstUpdate:!0})],T.prototype,"handleRowsChange",1);a([C("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);T.define("sl-textarea");var Ql=g`
  ${I}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,Y=class extends E{constructor(){super(),this.localize=new ot(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=zr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=zr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await gt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=at(this,"tooltip.show",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await gt(this.body);const{keyframes:t,options:e}=at(this,"tooltip.hide",{dir:this.localize.dir()});await lt(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,zt(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,zt(this,"sl-after-hide")}render(){return b`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${R({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Y.styles=Ql;Y.dependencies={"sl-popup":M};a([_("slot:not([name])")],Y.prototype,"defaultSlot",2);a([_(".tooltip__body")],Y.prototype,"body",2);a([_("sl-popup")],Y.prototype,"popup",2);a([d()],Y.prototype,"content",2);a([d()],Y.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);a([d({type:Number})],Y.prototype,"distance",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"open",2);a([d({type:Number})],Y.prototype,"skidding",2);a([d()],Y.prototype,"trigger",2);a([d({type:Boolean})],Y.prototype,"hoist",2);a([C("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);a([C(["content","distance","hoist","placement","skidding"])],Y.prototype,"handleOptionsChange",1);a([C("disabled")],Y.prototype,"handleDisabledChange",1);ut("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ut("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Y.define("sl-tooltip");var Zl=g`
  ${I}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Fi=class extends E{constructor(){super(...arguments),this.effect="none"}render(){return b`
      <div
        part="base"
        class=${R({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Fi.styles=Zl;a([d()],Fi.prototype,"effect",2);Fi.define("sl-skeleton");var tc=g`
  ${I}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,yt=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var t;return((t=this.textContent)!=null?t:"").trim()}render(){return b`
      <div
        part="base"
        class=${R({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};yt.styles=tc;yt.dependencies={"sl-icon":W};a([_(".option__label")],yt.prototype,"defaultSlot",2);a([x()],yt.prototype,"current",2);a([x()],yt.prototype,"selected",2);a([x()],yt.prototype,"hasHover",2);a([d({reflect:!0})],yt.prototype,"value",2);a([d({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);a([C("disabled")],yt.prototype,"handleDisabledChange",1);a([C("selected")],yt.prototype,"handleSelectedChange",1);a([C("value")],yt.prototype,"handleValueChange",1);yt.define("sl-option");var Be=[],ec=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab")return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();const i=xo(this.element),r=i[0];let s=this.currentFocusIndex;if(s===-1){this.currentFocus=r,this.currentFocus.focus({preventScroll:!0});return}const n=this.tabDirection==="forward"?1:-1;s+n>=i.length?s=0:this.currentFocusIndex+n<0?s=i.length-1:s+=n,this.currentFocus=i[s],(o=this.currentFocus)==null||o.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){Be.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Be=Be.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Be[Be.length-1]===this.element}checkFocus(){if(this.isActive()){const t=xo(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}get currentFocusIndex(){return xo(this.element).findIndex(t=>t===this.currentFocus)}},oc=g`
  ${I}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Tt=class extends E{constructor(){super(...arguments),this.hasSlotController=new Ee(this,"footer"),this.localize=new ot(this),this.modal=new ec(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ur(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Dr(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=at(this,"dialog.denyClose",{dir:this.localize.dir()});lt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ur(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([gt(this.dialog),gt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=at(this,"dialog.show",{dir:this.localize.dir()}),o=at(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([lt(this.panel,e.keyframes,e.options),lt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([gt(this.dialog),gt(this.overlay)]);const t=at(this,"dialog.hide",{dir:this.localize.dir()}),e=at(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([lt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),lt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Dr(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,zt(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,zt(this,"sl-after-hide")}render(){return b`
      <div
        part="base"
        class=${R({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${y(this.noHeader?this.label:void 0)}
          aria-labelledby=${y(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":b`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Tt.styles=oc;Tt.dependencies={"sl-icon-button":J};a([_(".dialog")],Tt.prototype,"dialog",2);a([_(".dialog__panel")],Tt.prototype,"panel",2);a([_(".dialog__overlay")],Tt.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],Tt.prototype,"open",2);a([d({reflect:!0})],Tt.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],Tt.prototype,"noHeader",2);a([C("open",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleOpenChange",1);ut("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ut("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ut("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ut("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ut("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Tt.define("sl-dialog");W.define("sl-icon");var ic=g`
  ${I}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,Te=class extends E{constructor(){super(...arguments),this.localize=new ot(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*e,i=o-this.value/100*o;this.indicatorOffset=`${i}px`}}render(){return b`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Te.styles=ic;a([_(".progress-ring__indicator")],Te.prototype,"indicator",2);a([x()],Te.prototype,"indicatorOffset",2);a([d({type:Number,reflect:!0})],Te.prototype,"value",2);a([d()],Te.prototype,"label",2);Te.define("sl-progress-ring");var rc=g`
  ${I}
  ${Fo}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Q=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this),this.hasSlotController=new Ee(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?pa:t?ha:Vo}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),i=this.value;e.disabled||(this.value=e.value,o.forEach(r=>r.checked=r===e),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(c=>!c.disabled),i=(e=o.find(c=>c.checked))!=null?e:o[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value;let n=o.indexOf(i)+r;n<0&&(n=o.length-1),n>o.length-1&&(n=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=o[n].value,o[n].checked=!0,this.hasButtonGroup?o[n].shadowRoot.querySelector("button").focus():(o[n].tabIndex=0,o[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),o=t.find(i=>i.checked)||t[0];o&&o.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const o=this.getAllRadios();if(await Promise.all(o.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=o.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!o.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=o[0].shadowRoot)==null?void 0:t.querySelector("button");i&&(i.tabIndex=0)}else o[0].tabIndex=0;if(this.hasButtonGroup){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=b`
      <span @click=${this.handleRadioClick} @keydown=${this.handleKeyDown} role="presentation">
        <slot @slotchange=${this.syncRadios}></slot>
      </span>
    `;return b`
      <fieldset
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?b`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Q.styles=rc;Q.dependencies={"sl-button-group":Ae};a([_("slot:not([name])")],Q.prototype,"defaultSlot",2);a([_(".radio-group__validation-input")],Q.prototype,"validationInput",2);a([x()],Q.prototype,"hasButtonGroup",2);a([x()],Q.prototype,"errorMessage",2);a([x()],Q.prototype,"defaultValue",2);a([d()],Q.prototype,"label",2);a([d({attribute:"help-text"})],Q.prototype,"helpText",2);a([d()],Q.prototype,"name",2);a([d({reflect:!0})],Q.prototype,"value",2);a([d({reflect:!0})],Q.prototype,"size",2);a([d({reflect:!0})],Q.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([C("size",{waitUntilFirstUpdate:!0})],Q.prototype,"handleSizeChange",1);a([C("value")],Q.prototype,"handleValueChange",1);Q.define("sl-radio-group");var sc=g`
  ${I}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,Lt=class extends E{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return b`
      <span
        part="base"
        class=${R({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?b` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Lt.styles=sc;Lt.dependencies={"sl-icon":W};a([x()],Lt.prototype,"checked",2);a([x()],Lt.prototype,"hasFocus",2);a([d()],Lt.prototype,"value",2);a([d({reflect:!0})],Lt.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);a([C("checked")],Lt.prototype,"handleCheckedChange",1);a([C("disabled",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleDisabledChange",1);Lt.define("sl-radio");Jt.define("sl-tag");tt.define("sl-dropdown");fi("/assets/sl-icons");const nc={done:"\u5B8C\u6210",upload:"\u4E0A\u4F20",download:"\u4E0B\u8F7D",generate:"\u751F\u6210",add_url:"+\u6DFB\u52A0URL"},ac={home:{error:{promises:"\u4ECE\u60A8\u7684\u7F51\u7AD9\u68C0\u7D22\u6E05\u5355\u65F6\u51FA\u73B0\u95EE\u9898\u3002",invalidURL:"URL\u5730\u5740\u65E0\u6548\uFF0C\u8BF7\u91CD\u8BD5\u3002"}},manifest:{screenshot:{error:"url\u5730\u5740\u5FC5\u987B\u662F\u7EDD\u5BF9\u5730\u5740\u3002"}},publish:{windows:{test_package:"\u60F3\u8981\u5728\u8FDB\u5165Microsoft\u5546\u5E97\u4E4B\u524D\u5148\u6D4B\u8BD5\u60A8\u7684\u5E94\u7528\u5417\uFF1F\u70B9\u51FB\u201C\u4E0B\u8F7D\u201D\u4EE5\u83B7\u53D6\u53EF\u4EE5\u5B89\u88C5\u548C\u6D4B\u8BD5\u7684\u8F6F\u4EF6\u5305\u3002"},base_package:{download:"\u4E0B\u8F7D\u751F\u6210\u7684Web\u6E05\u5355\u5E76\u9009\u62E9Service Worker\uFF0C\u4F7F\u4F60\u7684\u5E94\u7528\u6210\u4E3APWA\uFF01"}},basepack:{run_new:"\u5C06\u4E0A\u8FF0\u6587\u4EF6\u4E0A\u4F20\u5230Web\u670D\u52A1\u5668\u540E\uFF0C\u70B9\u51FB\u201C\u8FD0\u884C\u65B0\u6D4B\u8BD5\u201D\u4EE5\u518D\u6B21\u6D4B\u8BD5PWA\uFF01"}},lc={publish:{windows_platform:{p:"\u4F60\u7684\u4E0B\u8F7D\u5305\u542B\u5C06\u5E94\u7528\u63D0\u4EA4\u5230 Microsoft Store \u7684\u8BF4\u660E\u3002\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u5C06\u7531\u57FA\u4E8E Chromium \u7684 Edge \u5E73\u53F0\u63D0\u4F9B\u652F\u6301\u3002"}},base_package:{top_section:{h1:"\u4F7F\u4F60\u7684\u5E94\u7528\u6210\u4E3A PWA",p:"\u770B\u8D77\u6765\u4F60\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u8FD8\u4E0D\u662F PWA\uFF0C\u4F46\u4F60\u6B63\u5728\u8DEF\u4E0A\uFF01\u8BF7\u524D\u5F80\u4E0B\u65B9\u4E0B\u8F7D\u60A8\u7684\u57FA\u7840\u6587\u4EF6\u5305\uFF0C\u5E76\u66F4\u63A5\u8FD1\u4E8E\u4E3A\u5E94\u7528\u5546\u5E97\u6253\u5305\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u3002"},summary_body:{h1:"\u4E0B\u8F7D PWA \u57FA\u672C\u6587\u4EF6",p:"\u65E0\u8BBA\u60A8\u662F\u7F16\u8F91\u6E05\u5355\u8FD8\u662F\u6DFB\u52A0 Service Worker\uFF0C\u5728\u4E0B\u8F7D\u7684\u57FA\u672C\u5305\u6587\u4EF6\u4E2D\uFF0C\u60A8\u90FD\u4F1A\u6536\u5230\u4E00\u4E2A\u6E05\u5355\u548C Service Worker \u6587\u4EF6\uFF0C\u51C6\u5907\u6DFB\u52A0\u5230\u60A8\u7684\u670D\u52A1\u5668\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u6709\u7528\u7684\u6587\u6863\u3002"},next_steps:{h1:"\u4E0B\u4E00\u6B65"}},manifest_options:{top_section:{h1:"\u6E05\u5355"},summary_body:{h1:"\u6458\u8981",p:"\u4F7F\u7528\u6211\u4EEC\u5185\u7F6E\u7684 Web \u6E05\u5355\u7F16\u8F91\u5668\u8F7B\u677E\u66F4\u65B0\u548C\u5347\u7EA7\u60A8\u7684 Web \u6E05\u5355"},info:{h1:"\u4FE1\u606F"},images:{h1:"\u56FE\u50CF",icons:{h3:"\u4E0A\u4F20\u5E94\u7528\u56FE\u6807"},screenshots:{h3:"\u751F\u6210\u5C4F\u5E55\u622A\u56FE",p:"\u6307\u5B9A\u8981\u4ECE\u4E2D\u751F\u6210\u684C\u9762\u548C\u79FB\u52A8\u5C4F\u5E55\u622A\u56FE\u7684 URL\u3002\u60A8\u6700\u591A\u53EF\u4EE5\u6DFB\u52A0 8 \u5F20\u5C4F\u5E55\u622A\u56FE\u6216\u5546\u54C1\u8BE6\u60C5\u3002"}},settings:{h1:"\u8BBE\u7F6E",background_color:{h3:"\u80CC\u666F\u989C\u8272"},theme_color:{h3:"\u4E3B\u9898\u989C\u8272"}},view_code:{h1:"\u67E5\u770B\u4EE3\u7801"},titles:{name:"\u540D\u79F0",short_name:"\u7B80\u79F0",description:"\u63CF\u8FF0",start_url:"\u5F00\u59CB URL",scope:"\u8303\u56F4",display:"\u663E\u793A",orientation:"\u65B9\u5411",language:"\u8BED\u8A00"},descriptions:{short_name:"\u5728\u5E94\u7528\u542F\u52A8\u5668\u4E2D\u4F7F\u7528",description:"\u7528\u4E8E\u5E94\u7528\u5546\u5E97\u548C\u5B89\u88C5\u5BF9\u8BDD\u6846",start_url:"\u5E94\u7528\u542F\u52A8\u65F6\u52A0\u8F7D\u7684\u76F8\u5BF9 URL",scope:"\u54EA\u4E9B URL \u53EF\u4EE5\u5728\u60A8\u7684\u5E94\u7528\u4E2D\u52A0\u8F7D",display:"\u5E94\u7528\u7A97\u53E3\u7684\u5916\u89C2",orientation:"\u5E94\u7528\u7684\u9ED8\u8BA4\u5C4F\u5E55\u65B9\u5411",language:"\u5E94\u7528\u7684\u4E3B\u8981\u8BED\u8A00"}},android:{titles:{package_name:"\u8F6F\u4EF6\u5305\u540D\u79F0",app_name:"\u5E94\u7528\u540D\u79F0",launcher_name:"\u542F\u52A8\u5668\u540D\u79F0",all_settings:"\u6240\u6709\u8BBE\u7F6E",app_version:"\u5E94\u7528\u7248\u672C",app_version_code:"\u5E94\u7528\u7248\u672C\u4EE3\u7801",host:"\u4E3B\u673A",start_url:"\u5F00\u59CB URL",theme_color:"\u72B6\u6001\u680F\u989C\u8272",splash_color:"\u98DE\u6E85\u989C\u8272",nav_color:"\u5BFC\u822A\u989C\u8272",dark_color:"\u5BFC\u822A\u6DF1\u8272",div_color:"\u5BFC\u822A\u5206\u9694\u7EBF\u989C\u8272",div_dark_color:"\u5BFC\u822A\u5206\u9694\u7EBF\u6DF1\u8272",icon_url:"\u56FE\u6807\u7F51\u5740",mask_icon_url:"\u53EF\u5C4F\u853D\u56FE\u6807 URL",mono_icon_url:"\u5355\u8272\u56FE\u6807 URL",fallback:"\u56DE\u9000\u884C\u4E3A",custom:"\u81EA\u5B9A\u4E49\u9009\u9879\u5361",web_view:"Web \u89C6\u56FE",display_mode:"\u663E\u793A\u6A21\u5F0F",standalone:"\u72EC\u7ACB",fullscreen:"\u5168\u5C4F",notification:"\u901A\u77E5\u59D4\u6D3E",enable:"\u542F\u7528",location_delegation:"\u4F4D\u7F6E\u59D4\u6D3E",google_play_billing:"Google Play \u7ED3\u7B97",settings_shortcut:"\u8BBE\u7F6E\u5FEB\u6377\u65B9\u5F0F",chromeos_only:"\u4EC5\u9650 ChromeOS",metaquest:"\u517C\u5BB9 Meta Quest",generate:"\u751F\u6210",source_code:"\u5305\u542B\u6E90\u4EE3\u7801",none:"\u65E0",signing_key:"\u7B7E\u540D\u5BC6\u94A5",key_file:"\u5BC6\u94A5\u6587\u4EF6",key_alias:"\u5BC6\u94A5\u522B\u540D",key_fullname:"\u5BC6\u94A5\u5168\u79F0",key_org:"\u5173\u952E\u7EC4\u7EC7",key_org_unit:"\u4E3B\u8981\u7EC4\u7EC7\u5355\u4F4D",key_country_code:"\u5173\u952E\u56FD\u5BB6/\u5730\u533A\u4EE3\u7801",key_pw:"\u5BC6\u94A5\u5BC6\u7801",key_store_pw:"\u5BC6\u94A5\u5E93\u5BC6\u7801"},description:{package_name:"\u5E94\u7528\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002\u5B83\u5E94\u8BE5\u53EA\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u53E5\u70B9\u3002\u793A\u4F8B\uFF1Acom.companyname.appname",launcher_name:"Android \u542F\u52A8\u5C4F\u5E55\u4E0A\u4F7F\u7528\u7684\u5E94\u7528\u540D\u79F0\u3002\u901A\u5E38\uFF0C\u8FD9\u662F\u5E94\u7528\u7A0B\u5E8F\u7684\u7B80\u79F0\u3002",app_version:"\u5411\u7528\u6237\u663E\u793A\u7684\u5E94\u7528\u7248\u672C\u3002\u8FD9\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u901A\u5E38\u91C7\u7528\u201C1.0.0.0\u201D\u7684\u5F62\u5F0F\u3002\u6620\u5C04\u5230 android\uFF1AversionName\u3002",app_version_code:"\u7528\u4F5C\u5185\u90E8\u7248\u672C\u53F7\u7684\u6B63\u6574\u6570\u3002\u8FD9\u4E0D\u4F1A\u5411\u7528\u6237\u663E\u793A\u3002Android \u4F7F\u7528\u6B64\u503C\u6765\u9632\u6B62\u964D\u7EA7\u3002\u6620\u5C04\u5230 android\uFF1AversionCode\u3002",start_url:"TWA\u7684\u8D77\u59CB\u8DEF\u5F84\u3002\u5FC5\u987B\u76F8\u5BF9\u4E8E\u4E3B\u673A URL\u3002\u5982\u679C\u60A8\u6CA1\u6709\u4E0E Host \u4E0D\u540C\u7684\u8D77\u59CB URL\uFF0C\u5219\u53EF\u4EE5\u6307\u5B9A\u201C/\u201D\u3002",start_url_short:"TWA\u7684\u8D77\u59CB\u8DEF\u5F84\u3002\u5FC5\u987B\u76F8\u5BF9\u4E8E\u4E3B\u673A URL\u3002",theme_color:"\u4E5F\u79F0\u4E3A\u4E3B\u9898\u989C\u8272\uFF0C\u8FD9\u662F\u5E94\u7528\u4E2D Android \u72B6\u6001\u680F\u7684\u989C\u8272\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u663E\u793A\u6A21\u5F0F\u8BBE\u7F6E\u4E3A\u5168\u5C4F\uFF0C\u72B6\u6001\u680F\u5C06\u88AB\u9690\u85CF\u3002",splash_color:"\u4E5F\u79F0\u4E3A\u80CC\u666F\u8272\uFF0C\u8FD9\u662F\u5E94\u7528\u7684\u521D\u59CB\u5C4F\u5E55\u7684\u989C\u8272\u3002",nav_color:"\u5E94\u7528\u4E2D Android \u5BFC\u822A\u680F\u7684\u989C\u8272\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u663E\u793A\u6A21\u5F0F\u8BBE\u7F6E\u4E3A\u5168\u5C4F\uFF0C\u5BFC\u822A\u680F\u5C06\u88AB\u9690\u85CF\u3002",dark_color:"\u5F53 Android \u5904\u4E8E\u6DF1\u8272\u6A21\u5F0F\u65F6\uFF0C\u5E94\u7528\u4E2D Android \u5BFC\u822A\u680F\u7684\u989C\u8272\u3002",div_color:"\u5E94\u7528\u4E2D Android \u5BFC\u822A\u680F\u5206\u9694\u7EBF\u7684\u989C\u8272\u3002",div_dark_color:"\u5F53 Android \u5904\u4E8E\u6DF1\u8272\u6A21\u5F0F\u65F6\uFF0C\u5E94\u7528\u4E2D Android \u5BFC\u822A\u680F\u5206\u9694\u7EBF\u7684\u989C\u8272\u3002",mask_icon_url:"\u53EF\u9009\u3002\u5177\u6709\u6700\u5C0F\u53EF\u4FEE\u526A\u586B\u5145\u5B89\u5168\u533A\u7684\u56FE\u6807\u7684 URL\uFF0C\u5728\u67D0\u4E9B Android \u5E73\u53F0\u4E0A\u542F\u7528\u5706\u89D2\u56FE\u6807\u3002",mono_icon_url:"\u53EF\u9009\u3002\u4EC5\u5305\u542B\u767D\u8272\u548C\u9ED1\u8272\u7684\u56FE\u6807\u7684 URL\uFF0C\u4F7F Android \u80FD\u591F\u6839\u636E\u4E3B\u9898\u3001\u989C\u8272\u6A21\u5F0F\u6216\u5BF9\u6BD4\u5EA6\u8BBE\u7F6E\u4F7F\u7528\u7528\u6237\u6307\u5B9A\u7684\u989C\u8272\u6216\u6E10\u53D8\u586B\u5145\u56FE\u6807\u3002",custom:"\u5F53\u5B8C\u5168\u53D7\u4FE1\u4EFB\u7684 Web \u6D3B\u52A8 \uFF08TWA\uFF09 \u4F53\u9A8C\u4E0D\u53EF\u7528\u65F6\uFF0C\u4F7F\u7528 Chrome \u81EA\u5B9A\u4E49\u6807\u7B7E\u9875\u4F5C\u4E3A PWA \u7684\u540E\u5907\u65B9\u6848\u3002",web_view:"\u5F53\u5B8C\u5168\u53D7\u4FE1\u4EFB\u7684 Web \u6D3B\u52A8 \uFF08TWA\uFF09 \u4F53\u9A8C\u4E0D\u53EF\u7528\u65F6\uFF0C\u4F7F\u7528 Web \u89C6\u56FE\u4F5C\u4E3A PWA \u7684\u56DE\u9000\u3002",standalone:"\u60A8\u7684 PWA \u5C06\u4F7F\u7528\u6574\u4E2A\u5C4F\u5E55\uFF0C\u4F46\u4FDD\u7559 Android \u72B6\u6001\u680F\u548C\u5BFC\u822A\u680F\u3002",fullscreen:"\u60A8\u7684 PWA \u5C06\u4F7F\u7528\u6574\u4E2A\u5C4F\u5E55\u5E76\u5220\u9664 Android \u72B6\u6001\u680F\u548C\u5BFC\u822A\u680F\u3002\u9002\u7528\u4E8E\u6C89\u6D78\u5F0F\u4F53\u9A8C\uFF0C\u5982\u6E38\u620F\u6216\u5A92\u4F53\u5E94\u7528\u7A0B\u5E8F\u3002",notification:"\u662F\u5426\u5F00\u542F\u63A8\u9001\u901A\u77E5\u59D4\u6D3E\u3002\u5982\u679C\u542F\u7528\uFF0C\u60A8\u7684 PWA \u53EF\u4EE5\u5728\u6CA1\u6709\u6D4F\u89C8\u5668\u6743\u9650\u63D0\u793A\u7684\u60C5\u51B5\u4E0B\u53D1\u9001\u63A8\u9001\u901A\u77E5\u3002",location_delegation:"\u662F\u5426\u542F\u7528\u4F4D\u7F6E\u59D4\u6D3E\u3002\u5982\u679C\u542F\u7528\uFF0C\u60A8\u7684 PWA \u53EF\u4EE5\u5728\u6CA1\u6709\u6D4F\u89C8\u5668\u6743\u9650\u63D0\u793A\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 navigator.geolocation\u3002",google_play_billing:"\u662F\u5426\u901A\u8FC7 Google Play \u7ED3\u7B97\u670D\u52A1\u548C Digital Goods API \u542F\u7528\u5E94\u7528\u5185\u8D2D\u4E70\u3002",settings_shortcut:"\u5982\u679C\u542F\u7528\uFF0C\u7528\u6237\u53EF\u4EE5\u957F\u6309\u60A8\u7684\u5E94\u7528\u78C1\u8D34\uFF0C\u5C06\u51FA\u73B0\u8BBE\u7F6E\u83DC\u5355\u9879\uFF0C\u8BA9\u7528\u6237\u7BA1\u7406\u60A8\u7684\u5E94\u7528\u7A7A\u95F4\u3002",chromeos_only:"\u5982\u679C\u542F\u7528\uFF0C\u60A8\u7684 Android \u7A0B\u5E8F\u5305\u5C06\u4EC5\u5728 ChromeOS \u8BBE\u5907\u4E0A\u8FD0\u884C\u3002",metaquest:"\u5982\u679C\u542F\u7528\uFF0C\u60A8\u7684 Android \u8F6F\u4EF6\u5305\u5C06\u4E0E Meta Quest \u8BBE\u5907\u517C\u5BB9\u3002",form_details:"\u60A8\u7684\u4E0B\u8F7D\u5185\u5BB9\u5C06\u5305\u542B\u5C06\u5E94\u7528\u63D0\u4EA4\u5230 Google Play \u5546\u5E97\u7684\u8BF4\u660E\u3002",source_code:"\u5982\u679C\u542F\u7528\uFF0C\u60A8\u7684\u4E0B\u8F7D\u5C06\u5305\u542B\u60A8\u7684 Android \u5E94\u7528\u7684\u6E90\u4EE3\u7801\u3002",signing_key:"PWABuilder \u5C06\u4E3A\u60A8\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u7B7E\u540D\u5BC6\u94A5\uFF0C\u5E76\u7528\u5B83\u5BF9\u60A8\u7684 APK \u8FDB\u884C\u7B7E\u540D\u3002\u60A8\u7684\u4E0B\u8F7D\u5C06\u5305\u542B\u65B0\u7684\u7B7E\u540D\u5BC6\u94A5\u548C\u5BC6\u7801\u3002",unsigned_key:"PWABuilder \u5C06\u751F\u6210\u4E00\u4E2A\u672A\u7B7E\u540D\u7684 APK\u3002Google Play \u5546\u5E97\u5C06\u5BF9\u60A8\u7684\u5305\u88F9\u8FDB\u884C\u7B7E\u540D\u3002\u8FD9\u662F\u8C37\u6B4C\u63A8\u8350\u7684\u65B9\u6CD5\u3002",upload_signing_key:"\u4E0A\u4F20\u60A8\u73B0\u6709\u7684\u7B7E\u540D\u5BC6\u94A5\u3002\u5982\u679C\u60A8\u5DF2\u7ECF\u62E5\u6709\u7B7E\u540D\u5BC6\u94A5\uFF0C\u5E76\u4E14\u60F3\u8981\u5728 Google Play \u4E2D\u53D1\u5E03\u73B0\u6709\u5E94\u7528\u7684\u65B0\u7248\u672C\uFF0C\u8BF7\u4F7F\u7528\u6B64\u9009\u9879\u3002",key_country_code:"\u8981\u5728\u7B7E\u540D\u5BC6\u94A5\u4E0A\u5217\u51FA\u7684 2 \u4E2A\u5B57\u6BCD\u7684\u56FD\u5BB6/\u5730\u533A\u4EE3\u7801\u3002",key_pw:"\u7B7E\u540D\u5BC6\u94A5\u7684\u5BC6\u7801\u3002\u952E\u5165\u65B0\u5BC6\u7801\u6216\u7559\u7A7A\u4EE5\u4F7F\u7528\u751F\u6210\u7684\u5BC6\u7801\u3002",key_store_pw:"\u5BC6\u94A5\u5E93\u7684\u5BC6\u7801\u3002\u952E\u5165\u65B0\u5BC6\u7801\u6216\u7559\u7A7A\u4EE5\u4F7F\u7528\u751F\u6210\u7684\u5BC6\u7801\u3002"}},resource_hub:{titles:{blog:"\u535A\u5BA2",demo:"\u6F14\u793A",documentation:"\u6587\u6863"},description:{blog:"\u67E5\u770B PWABuilder \u535A\u5BA2\uFF0C\u4E86\u89E3\u6709\u5173 PWABuilder \u548C PWA \u7684\u6240\u6709\u6700\u65B0\u4FE1\u606F\u3002",demo:"\u67E5\u770B\u6211\u4EEC\u7684\u6F14\u793A\uFF0C\u4E86\u89E3 PWA \u7684\u529F\u80FD\uFF01",documentation:"\u5BFB\u627E\u6211\u4EEC\u7684\u6587\u6863\uFF1F\u70B9\u51FB\u67E5\u770B\u6587\u6863\u5F00\u59CB\uFF01"}},resource_hub_new:{titles:{manifest:"Web \u6E05\u5355",sw:"Service Worker",https:"\u5B89\u5168 HTTPS"},description:{manifest:"\u7F51\u7AD9\u7684 Web \u5E94\u7528\u6E05\u5355\u63A7\u5236\u6E10\u8FDB\u5F0F Web \u5E94\u7528 \uFF08PWA\uFF09 \u5B89\u88C5\u5728\u8BBE\u5907\u4E0A\u7684\u5916\u89C2\u548C\u884C\u4E3A\u3002",sw:"Service Worker \u662F\u4E00\u79CD\u7279\u6B8A\u7C7B\u578B\u7684 Web Worker\uFF0C\u80FD\u591F\u4F7F\u7528 Fetch API \u62E6\u622A\u3001\u4FEE\u6539\u548C\u54CD\u5E94\u6240\u6709\u79BB\u7EBF\u548C\u8054\u673A\u7F51\u7EDC\u8BF7\u6C42\u3002",https:"\u62E5\u6709\u5B89\u5168\u7684 HTTPS \u7AEF\u70B9\u548C\u5176\u4ED6\u7528\u6237\u4FDD\u62A4\u63AA\u65BD\uFF0C\u4F7F\u7528\u6237\u4F53\u9A8C\u4ECE\u5934\u5230\u5C3E\u90FD\u5B89\u5168\u3002"}},community_hub:{titles:{github:"\u5728 GitHub \u4E0A\u505A\u8D21\u732E",twitter:"\u5728Twitter\u4E0A\u5173\u6CE8\u6211\u4EEC\uFF01",discord:"\u52A0\u5165\u6211\u4EEC\u7684 Discord \u670D\u52A1\u5668\u3002"},description:{github:"\u901A\u8FC7\u52A0\u5165\u6211\u4EEC\u5728 GitHub \u4E0A\u7684 PWA \u793E\u533A\uFF0C\u4E3A\u8FD9\u4E2A\u5F00\u6E90\u9879\u76EE\u505A\u51FA\u8D21\u732E\u3002",twitter:"\u8BA4\u8BC6\u6211\u4EEC\u7684 PWA \u7231\u597D\u8005\uFF0C\u5E76\u5728 Twitter \u4E0A\u5173\u6CE8\u6211\u4EEC\u7684\u6700\u65B0\u7248\u672C\u548C\u66F4\u65B0\u3002",discord:"\u52A0\u5165 PWABuilder Discord \u793E\u533A\uFF0C\u4E0E\u60A8\u9700\u8981\u7684\u4EBA\u548C\u8D44\u6E90\u5EFA\u7ACB\u8054\u7CFB\u3002"}},success_stories:{stat:{trivago:"\u7528\u6237\u6D41\u91CF",alibaba:"\u603B\u8F6C\u5316\u6B21\u6570",pintrest:"\u5E7F\u544A\u6536\u5165",tinder:"\u5B58\u50A8\u6548\u7387\u9AD8"},value:{trivago:"+150%",alibaba:"+76%",pintrest:"+44%",tinder:"+90%"},description:{trivago:"\u6DFB\u52A0\u5230\u4E3B\u5C4F\u5E55\u7684\u7528\u6237\u7684\u53C2\u4E0E\u5EA6\u589E\u52A0\u4E86 150%\u3002\u8FD9\u79CD\u53C2\u4E0E\u5EA6\u7684\u63D0\u9AD8\u5BFC\u81F4\u9152\u5E97\u4F18\u60E0\u7684\u70B9\u51FB\u7387\u589E\u52A0\u4E86 97%\u3002",alibaba:"\u5347\u7EA7\u5230 PWA \u540E\uFF0C\u963F\u91CC\u5DF4\u5DF4\u7684\u6D4F\u89C8\u5668\u603B\u8F6C\u5316\u7387\u589E\u52A0\u4E86 76%\u3002Android \u4E0A\u7684\u6708\u6D3B\u8DC3\u7528\u6237\u589E\u52A0\u4E86 30%\u3002",pintrest:"\u501F\u52A9\u65B0\u7684 Pinterest PWA\uFF0C\u4ED6\u4EEC\u80FD\u591F\u5C06\u7528\u6237\u4EA7\u751F\u7684\u5E7F\u544A\u6536\u5165\u63D0\u9AD8 44%\uFF0C\u5C06\u6838\u5FC3\u53C2\u4E0E\u5EA6\u63D0\u9AD8 60%\u3002",tinder:"\u539F\u751F Tinder \u5E94\u7528\u7A0B\u5E8F\u9AD8\u8FBE 30MB\uFF0C\u5F53 Tinder \u8FC7\u6E21\u5230 PWA \u65F6\uFF0C\u4ED6\u4EEC\u80FD\u591F\u5C06\u6587\u4EF6\u5927\u5C0F\u51CF\u5C11\u5230 2.8MB\u3002 "}}},cc={manifest_options:{upload:"\u5E94\u7528\u7684\u56FE\u6807\u3002\u8FD9\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5C06\u7528\u4E8E\u8868\u793A\u5E94\u7528\u7684\u56FE\u6807\u3002\u5728Windows\u4E2D\uFF0C\u8FD9\u7528\u4E8E\u4EFB\u52A1\u680F\uFF0C\u5F00\u59CB\u83DC\u5355\u7B49\uFF0C\u542F\u52A8\u5C4F\u5E55\u3002",generate:"PWA \u7684\u5C4F\u5E55\u622A\u56FE\u53EF\u7528\u4E8E\u5546\u5E97\u548C\u6D4F\u89C8\u5668\u5185\u5B89\u88C5\u63D0\u793A\uFF0C\u4EE5\u5E2E\u52A9\u63A8\u5E7F PWA\u3002",background_color:"background_color \u7528\u6765\u63A7\u5236\u5E94\u7528\u7684\u521D\u59CB\u5C4F\u5E55\u989C\u8272\u3002",theme_color:"theme_color \u7528\u6765\u5B9A\u4E49\u5E94\u7528\u7684\u9ED8\u8BA4\u4E3B\u9898\u989C\u8272\u3002\u5728 Windows \u4E0A\uFF0C\u8FD9\u5C06\u662F\u5E94\u7528\u6807\u9898\u680F\u7684\u989C\u8272\u3002",name:"\u5411\u7528\u6237\u663E\u793A\u7684\u5E94\u7528\u540D\u79F0\u3002",short_name:"\u5E94\u7528\u7684\u7B80\u79F0\u3002\u5B83\u7528\u4E8E\u7A7A\u95F4\u4E0D\u8DB3\u4EE5\u663E\u793A\u5168\u540D\u7684\u5730\u65B9\u3002",start_url:"\u76F8\u5BF9\u4E8E\u60A8\u7684\u57DF\u6839\u76EE\u5F55\u7684 URL\uFF0C\u5728\u542F\u52A8\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u65F6\u6253\u5F00\uFF0C\u4F8B\u5982\uFF1A\u201C/\u201D \u6216 \u201C/index.html\u201D",scope:"scope \u6210\u5458\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u5E94\u7528\u7A0B\u5E8F\u4E0A\u4E0B\u6587\u7684\u5BFC\u822A\u8303\u56F4\u3002",display:"\u5E94\u7528\u7684\u663E\u793A\u65B9\u5F0F\u3002\u5355\u673A\u7248\uFF1A\u63A8\u8350\u3002PWA \u770B\u8D77\u6765\u50CF\u672C\u673A\u5E94\u7528\uFF0C\u4E0D\u663E\u793A\u6D4F\u89C8\u5668 UI\u3002Minimal-ui\uFF1A\u7C7B\u4F3C\u4E8E\u72EC\u7ACB\u7248\uFF0C\u4F46\u5728\u5E94\u7528\u7684\u6807\u9898\u680F\u4E2D\u5305\u542B\u5237\u65B0\u6309\u94AE\u548C\u540E\u9000\u6309\u94AE\u3002\u5168\u5C4F\uFF1APWA \u901A\u5E38\u7528\u4E8E\u6C89\u6D78\u5F0F\u6E38\u620F\uFF0C\u5B83\u5360\u7528\u6240\u6709\u53EF\u7528\u7684\u663E\u793A\u533A\u57DF\uFF0C\u800C\u6CA1\u6709\u4EFB\u4F55\u6D4F\u89C8\u5668 UI \u6216\u5E94\u7528\u6807\u9898\u680F\u3002\u6D4F\u89C8\u5668\uFF1A\u663E\u793A\u5B8C\u6574\u7684\u6D4F\u89C8\u5668 UI\u3002",orientation:"\u5E94\u7528\u5E94\u4F7F\u7528\u7684\u9ED8\u8BA4\u65B9\u5411\uFF0C\u4F8B\u5982\u7EB5\u5411\u6216\u6A2A\u5411\u3002",language:"\u6307\u5B9A\u5E94\u7528\u7684\u4E3B\u8981\u8BED\u8A00\u3002",description:"\u5E94\u7528\u7684\u63CF\u8FF0\u3002\u663E\u793A\u5728\u5E94\u7528\u4E00\u89C8\u3001\u5E94\u7528\u5546\u5E97\u548C\u5E94\u7528\u5B89\u88C5\u754C\u9762\u4E2D\u3002"}},dc={none:"\u65E0",transparent:"\u900F\u660E",custom:"\u81EA\u5B9A\u4E49\u989C\u8272"},uc={windows11:"Windows 11",windows10:"Windows 10",android:"Android",ios:"iOS",image_generator:"\u56FE\u50CF\u751F\u6210\u5668",image_generator_text:"\u4EE5\u5408\u9002\u7684\u5927\u5C0F\u548C\u683C\u5F0F\u5FEB\u901F\u8F7B\u677E\u5730\u4E3A\u5404\u79CD\u5E73\u53F0\u521B\u5EFA\u5E94\u7528\u7A0B\u5E8F\u56FE\u6807",image_details:"\u56FE\u6807\u8BE6\u7EC6\u4FE1\u606F",image_details_text:"\u5728\u4E0B\u9762\u6307\u5B9A\u56FE\u6807\u8BE6\u7EC6\u4FE1\u606F\u3002",input_image:"\u9009\u62E9\u57FA\u7840\u56FE\u6807",input_image_help:"\u60A8\u5E94\u8BE5\u9009\u62E9 512x512 \u6216\u66F4\u5927\u7684\u65B9\u5F62 PNG/SVG/WEBP \u56FE\u50CF\u3002\u6B64\u56FE\u50CF\u5C06\u7528\u4E8E\u4E3A\u60A8\u9009\u62E9\u7684\u5E73\u53F0\u751F\u6210\u6240\u6709\u56FE\u50CF\u3002",padding:"\u586B\u5145",padding_text:"0 \u8868\u793A\u65E0\u586B\u5145\uFF0C1 \u8868\u793A\u6E90\u56FE\u50CF\u7684 100%\u30020.3 \u662F\u5927\u591A\u6570\u56FE\u6807\u7684\u5178\u578B\u503C\u3002\u5BF9\u4E8E Windows 11 \u5E73\u53F0\uFF0C\u6B64\u503C\u5C06\u6839\u636E UX \u6307\u5357\u8986\u76D6\u5728\u5355\u4E2A\u56FE\u50CF\u4E0A\u3002",background_color:"\u80CC\u666F\u989C\u8272",best_guess:"\u6700\u4F73\u731C\u6D4B",transparent:"\u900F\u660E",custom_color:"\u81EA\u5B9A\u4E49\u989C\u8272",platforms:"\u5E73\u53F0",platforms_text:"\u9009\u62E9\u8981\u4E3A\u5176\u751F\u6210\u56FE\u50CF\u7684\u5E73\u53F0\u3002"};var hc={button:nc,input:ac,text:lc,tooltip:cc,values:dc,imageGenerator:uc},pc=[{code:"ab",name:"Abkhaz"},{code:"aa",name:"Afar"},{code:"af",name:"Afrikaans"},{code:"ak",name:"Akan"},{code:"sq",name:"Albanian"},{code:"am",name:"Amharic"},{code:"ar",name:"Arabic"},{code:"an",name:"Aragonese"},{code:"hy",name:"Armenian"},{code:"as",name:"Assamese"},{code:"av",name:"Avaric"},{code:"ae",name:"Avestan"},{code:"ay",name:"Aymara"},{code:"az",name:"Azerbaijani"},{code:"bm",name:"Bambara"},{code:"ba",name:"Bashkir"},{code:"eu",name:"Basque"},{code:"be",name:"Belarusian"},{code:"bn",name:"Bengali"},{code:"bh",name:"Bihari"},{code:"bi",name:"Bislama"},{code:"bs",name:"Bosnian"},{code:"br",name:"Breton"},{code:"bg",name:"Bulgarian"},{code:"my",name:"Burmese"},{code:"ca",name:"Catalan; Valencian"},{code:"ch",name:"Chamorro"},{code:"ce",name:"Chechen"},{code:"ny",name:"Chichewa; Chewa; Nyanja"},{code:"zh",name:"Chinese"},{code:"cv",name:"Chuvash"},{code:"kw",name:"Cornish"},{code:"co",name:"Corsican"},{code:"cr",name:"Cree"},{code:"hr",name:"Croatian"},{code:"cs",name:"Czech"},{code:"da",name:"Danish"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;"},{code:"nl",name:"Dutch"},{code:"en",name:"English"},{code:"eo",name:"Esperanto"},{code:"et",name:"Estonian"},{code:"ee",name:"Ewe"},{code:"fo",name:"Faroese"},{code:"fj",name:"Fijian"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular"},{code:"gl",name:"Galician"},{code:"ka",name:"Georgian"},{code:"de",name:"German"},{code:"el",name:"Greek, Modern"},{code:"gn",name:"Guaran\xED"},{code:"gu",name:"Gujarati"},{code:"ht",name:"Haitian; Haitian Creole"},{code:"ha",name:"Hausa"},{code:"he",name:"Hebrew (modern)"},{code:"hz",name:"Herero"},{code:"hi",name:"Hindi"},{code:"ho",name:"Hiri Motu"},{code:"hu",name:"Hungarian"},{code:"ia",name:"Interlingua"},{code:"id",name:"Indonesian"},{code:"ie",name:"Interlingue"},{code:"ga",name:"Irish"},{code:"ig",name:"Igbo"},{code:"ik",name:"Inupiaq"},{code:"io",name:"Ido"},{code:"is",name:"Icelandic"},{code:"it",name:"Italian"},{code:"iu",name:"Inuktitut"},{code:"ja",name:"Japanese"},{code:"jv",name:"Javanese"},{code:"kl",name:"Kalaallisut, Greenlandic"},{code:"kn",name:"Kannada"},{code:"kr",name:"Kanuri"},{code:"ks",name:"Kashmiri"},{code:"kk",name:"Kazakh"},{code:"km",name:"Khmer"},{code:"ki",name:"Kikuyu, Gikuyu"},{code:"rw",name:"Kinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz"},{code:"kv",name:"Komi"},{code:"kg",name:"Kongo"},{code:"ko",name:"Korean"},{code:"ku",name:"Kurdish"},{code:"kj",name:"Kwanyama, Kuanyama"},{code:"la",name:"Latin"},{code:"lb",name:"Luxembourgish, Letzeburgesch"},{code:"lg",name:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger"},{code:"ln",name:"Lingala"},{code:"lo",name:"Lao"},{code:"lt",name:"Lithuanian"},{code:"lu",name:"Luba-Katanga"},{code:"lv",name:"Latvian"},{code:"gv",name:"Manx"},{code:"mk",name:"Macedonian"},{code:"mg",name:"Malagasy"},{code:"ms",name:"Malay"},{code:"ml",name:"Malayalam"},{code:"mt",name:"Maltese"},{code:"mi",name:"M\u0101ori"},{code:"mr",name:"Marathi (Mar\u0101\u1E6Dh\u012B)"},{code:"mh",name:"Marshallese"},{code:"mn",name:"Mongolian"},{code:"na",name:"Nauru"},{code:"nv",name:"Navajo, Navaho"},{code:"nb",name:"Norwegian Bokm\xE5l"},{code:"nd",name:"North Ndebele"},{code:"ne",name:"Nepali"},{code:"ng",name:"Ndonga"},{code:"nn",name:"Norwegian Nynorsk"},{code:"no",name:"Norwegian"},{code:"ii",name:"Nuosu"},{code:"nr",name:"South Ndebele"},{code:"oc",name:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{code:"om",name:"Oromo"},{code:"or",name:"Oriya"},{code:"os",name:"Ossetian, Ossetic"},{code:"pa",name:"Panjabi, Punjabi"},{code:"pi",name:"P\u0101li"},{code:"fa",name:"Persian"},{code:"pl",name:"Polish"},{code:"ps",name:"Pashto, Pushto"},{code:"pt",name:"Portuguese"},{code:"qu",name:"Quechua"},{code:"rm",name:"Romansh"},{code:"rn",name:"Kirundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan"},{code:"ru",name:"Russian"},{code:"sa",name:"Sanskrit (Sa\u1E41sk\u1E5Bta)"},{code:"sc",name:"Sardinian"},{code:"sd",name:"Sindhi"},{code:"se",name:"Northern Sami"},{code:"sm",name:"Samoan"},{code:"sg",name:"Sango"},{code:"sr",name:"Serbian"},{code:"gd",name:"Scottish Gaelic; Gaelic"},{code:"sn",name:"Shona"},{code:"si",name:"Sinhala, Sinhalese"},{code:"sk",name:"Slovak"},{code:"sl",name:"Slovene"},{code:"so",name:"Somali"},{code:"st",name:"Southern Sotho"},{code:"es",name:"Spanish; Castilian"},{code:"su",name:"Sundanese"},{code:"sw",name:"Swahili"},{code:"ss",name:"Swati"},{code:"sv",name:"Swedish"},{code:"ta",name:"Tamil"},{code:"te",name:"Telugu"},{code:"tg",name:"Tajik"},{code:"th",name:"Thai"},{code:"ti",name:"Tigrinya"},{code:"bo",name:"Tibetan Standard, Tibetan, Central"},{code:"tk",name:"Turkmen"},{code:"tl",name:"Tagalog"},{code:"tn",name:"Tswana"},{code:"to",name:"Tonga (Tonga Islands)"},{code:"tr",name:"Turkish"},{code:"ts",name:"Tsonga"},{code:"tt",name:"Tatar"},{code:"tw",name:"Twi"},{code:"ty",name:"Tahitian"},{code:"ug",name:"Uighur, Uyghur"},{code:"uk",name:"Ukrainian"},{code:"ur",name:"Urdu"},{code:"uz",name:"Uzbek"},{code:"ve",name:"Venda"},{code:"vi",name:"Vietnamese"},{code:"vo",name:"Volap\xFCk"},{code:"wa",name:"Walloon"},{code:"cy",name:"Welsh"},{code:"wo",name:"Wolof"},{code:"fy",name:"Western Frisian"},{code:"xh",name:"Xhosa"},{code:"yi",name:"Yiddish"},{code:"yo",name:"Yoruba"},{code:"za",name:"Zhuang, Chuang"}];function fc(){return hc}const U=fc();pc.map(t=>({formatted:t.name,code:t.code}));var mc=(t=>(t[t.smallUpper=479]="smallUpper",t[t.mediumLower=480]="mediumLower",t[t.mediumUpper=639]="mediumUpper",t[t.largeLower=640]="largeLower",t[t.largeUpper=1023]="largeUpper",t[t.xLargeLower=1024]="xLargeLower",t[t.xLargeUpper=1365]="xLargeUpper",t[t.xxLargeLower=1366]="xxLargeLower",t[t.xxLargeUpper=1919]="xxLargeUpper",t[t.xxxLargeLower=1920]="xxxLargeLower",t))(mc||{});function Yt(t){return de(`
    @media screen ${Le({upper:479})} {
      ${t}
    }
  `)}function Ot(t,e="both"){return de(`
    @media screen ${Le({lower:e!=="no-lower"?480:void 0,upper:e!=="no-upper"?639:void 0})} {
      ${t}
    }
  `)}function he(t,e="both"){return de(`
    @media screen ${Le({lower:e!=="no-lower"?640:void 0,upper:e!=="no-upper"?1023:void 0})} {
      ${t}
    }
  `)}function pe(t,e="both"){return de(`
    @media screen ${Le({lower:e!=="no-lower"?1024:void 0,upper:e!=="no-upper"?1365:void 0})} {
      ${t}
    }
  `)}function gc(t,e="both"){return de(`
    @media screen ${Le({lower:e!=="no-lower"?1366:void 0,upper:e!=="no-upper"?1919:void 0})} {
      ${t}
    }
  `)}function Qt(t){return de(`
    @media screen ${Le({lower:1920})} {
      ${t}
    }
  `)}function Le({lower:t,upper:e}){const o=[];return t&&o.push(`(min-width: ${t}px)`),e&&o.push(`(max-width: ${e}px)`),"and "+o.join(" and ")}function Ad(t,e){let o;try{e&&(o=new URL(e))}catch(i){i instanceof TypeError||console.error(i)}if(!o)try{t&&e&&(o=new URL(e,t))}catch(i){console.error(i)}return!o&&t?new URL(t):o}function Td(t,e){try{return new URL(t,e),null}catch(o){return`${o}`}}function Ps(t){let e;if(t&&!t.startsWith("http")&&!t.startsWith("https")&&(e="https://"+t),e){if(_i(e)===!1&&!t.toLowerCase().startsWith("http://"))throw new Error("This error means that you may have a bad https cert or the url may not be correct");return e}return t}function _i(t){var e=new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\\\#[-a-z\\\\d_]*)?","i");return!!e.test(t)}let ni;function bc(t,e,o){const i={name:e,uri:t,properties:o};zs().then(r=>r.trackPageView(i)).catch(r=>console.warn("OneDS record page view error",r))}function vc(t,e,o,i){zs().then(r=>r.capturePageAction(null,{actionType:"O",behavior:o,contentTags:{scn:t,scnstp:e},content:i})).catch(r=>console.warn("Process step was not recorded",r))}function zs(){return ni||(ni=new Promise((t,e)=>{const o=document.createElement("script");o.onerror=()=>e("Analytics script failed to load"),o.onload=()=>{const i=yc();i instanceof Error?e(i):t(i)},o.src="https://az416426.vo.msecnd.net/scripts/c/ms.analytics-web-2.min.js",document.head.appendChild(o)})),ni}function yc(){try{const t=new window.oneDS.ApplicationInsights,e={instrumentationKey:"f72753e593724c6183de8c8a3a5f419d-5e71f893-09c1-41d8-abf0-667e691c28a9-6593",webAnalyticsConfiguration:{manageCv:!0,urlCollectHash:!1,syncPageActionNavClick:!1,autoCapture:{click:!0,scroll:!1,pageView:!1,jsError:!1,msTags:!1,onUnload:!0}}};return t.initialize(e,[]),t}catch(t){return t instanceof Error?t:new Error(`Error initializing analytics: ${t}`)}}var D;(function(t){t[t.ContentUpdate=0]="ContentUpdate",t[t.NavigationBack=1]="NavigationBack",t[t.NavigationSelectionJump=2]="NavigationSelectionJump",t[t.NavigationForward=3]="NavigationForward",t[t.Apply=4]="Apply",t[t.Remove=5]="Remove",t[t.Sort=6]="Sort",t[t.Expand=7]="Expand",t[t.Reduce=8]="Reduce",t[t.OpenContextMenu=9]="OpenContextMenu",t[t.Tab=10]="Tab",t[t.Copy=11]="Copy",t[t.Experimentation=12]="Experimentation",t[t.Print=13]="Print",t[t.Show=14]="Show",t[t.Hide=15]="Hide",t[t.Maximize=16]="Maximize",t[t.Minimize=17]="Minimize",t[t.Backbutton=18]="Backbutton",t[t.StartProcess=20]="StartProcess",t[t.ProcessCheckpoint=21]="ProcessCheckpoint",t[t.CompleteProcess=22]="CompleteProcess",t[t.CancelProcess=23]="CancelProcess",t[t.DownloadCommit=40]="DownloadCommit",t[t.Download=41]="Download",t[t.SearchAutoComplete=60]="SearchAutoComplete",t[t.Search=61]="Search",t[t.SearchInitiate=62]="SearchInitiate",t[t.TextBoxInput=63]="TextBoxInput",t[t.Purchase=80]="Purchase",t[t.AddToCart=81]="AddToCart",t[t.ViewCart=82]="ViewCart",t[t.AddToWishlist=83]="AddToWishlist",t[t.FindStore=84]="FindStore",t[t.Checkout=85]="Checkout",t[t.RemoveFromCart=86]="RemoveFromCart",t[t.PurchaseComplete=87]="PurchaseComplete",t[t.ViewCheckoutPage=88]="ViewCheckoutPage",t[t.ViewCartPage=89]="ViewCartPage",t[t.ViewPDP=90]="ViewPDP",t[t.UpdateItemQuantity=91]="UpdateItemQuantity",t[t.IntentToBuy=92]="IntentToBuy",t[t.PushToInstall=93]="PushToInstall",t[t.SignIn=100]="SignIn",t[t.SignOut=101]="SignOut",t[t.SocialShare=120]="SocialShare",t[t.SocialLike=121]="SocialLike",t[t.SocialReply=122]="SocialReply",t[t.Call=123]="Call",t[t.Email=124]="Email",t[t.Community=125]="Community",t[t.SocialFollow=126]="SocialFollow",t[t.Vote=140]="Vote",t[t.SurveyInitiate=141]="SurveyInitiate",t[t.SurveyComplete=142]="SurveyComplete",t[t.ReportApplication=143]="ReportApplication",t[t.ReportReview=144]="ReportReview",t[t.SurveyCheckpoint=145]="SurveyCheckpoint",t[t.Contact=145]="Contact",t[t.InitiateRegistration=161]="InitiateRegistration",t[t.RegistrationComplete=162]="RegistrationComplete",t[t.CancelSubscription=163]="CancelSubscription",t[t.RenewSubscription=164]="RenewSubscription",t[t.ChangeSubscription=165]="ChangeSubscription",t[t.RegistrationCheckpoint=166]="RegistrationCheckpoint",t[t.ChatInitiate=180]="ChatInitiate",t[t.ChatEnd=181]="ChatEnd",t[t.TrialSignup=200]="TrialSignup",t[t.TrialInitiate=201]="TrialInitiate",t[t.SignUp=210]="SignUp",t[t.FreeSignUp=211]="FreeSignUp",t[t.PartnerReferral=220]="PartnerReferral",t[t.LearnLowerFunnel=230]="LearnLowerFunnel",t[t.LearnHigherFunnel=231]="LearnHigherFunnel",t[t.ShoppingIntent=232]="ShoppingIntent",t[t.VideoStart=240]="VideoStart",t[t.VideoPause=241]="VideoPause",t[t.VideoContinue=242]="VideoContinue",t[t.VideoCheckpoint=243]="VideoCheckpoint",t[t.VideoJump=244]="VideoJump",t[t.VideoComplete=245]="VideoComplete",t[t.VideoBuffering=246]="VideoBuffering",t[t.VideoError=247]="VideoError",t[t.VideoMute=248]="VideoMute",t[t.VideoUnmute=249]="VideoUnmute",t[t.VideoFullScreen=250]="VideoFullScreen",t[t.VideoUnfullscreen=251]="VideoUnfullscreen",t[t.VideoReplay=252]="VideoReplay",t[t.VideoPlayerLoad=253]="VideoPlayerLoad",t[t.VideoPlayerClick=254]="VideoPlayerClick",t[t.VideoVolumeControl=255]="VideoVolumeControl",t[t.VideoAudioTrackControl=256]="VideoAudioTrackControl",t[t.VideoClosedCaptionControl=257]="VideoClosedCaptionControl",t[t.VideoClosedCaptionStyle=258]="VideoClosedCaptionStyle",t[t.VideoResolutionControl=259]="VideoResolutionControl",t[t.VirtualEventJoin=260]="VirtualEventJoin",t[t.VirtualEventEnd=261]="VirtualEventEnd",t[t.Impression=280]="Impression",t[t.Click=281]="Click",t[t.RichMediaComplete=282]="RichMediaComplete",t[t.AdBuffering=283]="AdBuffering",t[t.AdError=284]="AdError",t[t.AdStart=285]="AdStart",t[t.AdComplete=286]="AdComplete",t[t.AdSkip=287]="AdSkip",t[t.AdTimeout=288]="AdTimeout",t[t.Other=300]="Other"})(D||(D={}));const G={isProduction:!1,manifestCreatorUrl:"",api:"",windowsPackageGeneratorUrl:"",androidPackageGeneratorUrl:"",iosPackageGeneratorUrl:"",oculusPackageGeneratorUrl:"",imageGeneratorUrl:"",safeUrlFetcher:"",webPackageGeneratorFormUrl:"",zipCreatorUrl:"",validateGiveawayUrl:"",tokensCampaignRunning:!1};G.isProduction=!0,G.api="https://pwabuilder-apiv2-node.azurewebsites.net/api",G.manifestCreatorUrl="https://pwabuilder-manifest-creator.azurewebsites.net/api/create",G.windowsPackageGeneratorUrl="https://pwabuilder-windows-docker.azurewebsites.net/msix/generatezip",G.androidPackageGeneratorUrl="https://pwabuilder-cloudapk.azurewebsites.net",G.iosPackageGeneratorUrl="https://pwabuilder-ios.azurewebsites.net/packages/create",G.oculusPackageGeneratorUrl="https://pwabuilder-oculus-linux-docker-app.azurewebsites.net/packages/create",G.imageGeneratorUrl="https://appimagegenerator-prod-dev.azurewebsites.net",G.safeUrlFetcher="https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl",G.webPackageGeneratorFormUrl="https://pwabuilder-web-platform.azurewebsites.net/form",G.zipCreatorUrl="https://azure-express-zip-creator.azurewebsites.net/api",G.validateGiveawayUrl="https://pwabuilder-tokens-giveaway.azurewebsites.net/api";function wc(t,e,o){G.isProduction&&bc(t,e,As(o))}function F(t,e,o){{const i=JSON.parse(sessionStorage.getItem("demoURL"));let r="pwa-builder-v4";i&&(r="demo-process");let s=window.location.pathname.slice(1);s.length==0&&(s="home"),s==="freeToken"&&(r="free-tokens-flow");let n=s+"."+t;_c(r,n,e,o)}}function _c(t,e,o,i){G.isProduction&&vc(t,e,o,As(i))}function xc(t){const e=new URLSearchParams(window.location.search).get(t);e&&sessionStorage.setItem(t,e)}function As(t){const e=sessionStorage.getItem("ref");return e&&(t.referrer=e),t}var kc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,Ts=(t,e,o,i)=>{for(var r=i>1?void 0:i?$c(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&kc(e,o,r),r};let xi=class extends B{constructor(){super(),this.page="home"}static get styles(){return g`
      :host {
        --header-background: white;
        --header-border: rgba(0, 0, 0, 0.25) solid 1px;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--header-background);
        color: white;
        height: 71px;

        border-bottom: var(--header-border);
        z-index: 1;
      }

      header img {
        cursor: pointer;
        width: 100px;
        height: auto;
      }

      nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 8em;
        gap: .75em;
      }

      .nav_button {
        all: unset;
      }

      .nav_link {
        color: var(--font-color);
        text-decoration: none;
        border-bottom: none;
        font-weight: var(--font-bold);
        font-size: var(--subheader-font-size);
        margin: 0;
      }

      .nav_link:focus {
        outline: solid;
        outline-width: 2px;
      }

      .nav_link span {
        display: inline-block;
        height: 18px;
        font-size: 20px;
      }

      .nav_link:hover span{
        cursor: pointer;
      }

      nav sl-icon {
        font-size: 2em;
      }

      .nav_link:visited {
        color: black;
      }

      .link {
        display: block;
        width: 100%;
        text-decoration: none;
      }

      .link:visited, .link:active, .link:link {
        color: #777777;
      }

      .hover-color:hover {
        color: var(--primary-color);
      }

      sl-menu {
        display: flex;
        flex-direction: column;
        background-color: white;
        gap: 5px;
        color: #777777;
        font-size: 16px;
        border-radius: 5px;
        height: fit-content;
        width: 136px;
        padding: 16px 22px;
      }

      sl-menu-item::part(checked-icon), sl-menu-item::part(submenu-icon) {
        display: none;
      }

      sl-menu-item::part(base){
        color: #777777;
        text-decoration: none;
        border-bottom: none;
        font-size: 14px;
        margin: 0;
        padding: 0;
      }

      sl-menu-item::part(base):hover sl-menu-item::part(label) {
        background-color: unset;
        color: var(--primary-color);
      }

      sl-menu-item:focus-visible::part(base) {
        color: var(--primary-color);
        background-color: transparent;
        
      }

      sl-menu-item:hover::part(base) {
        color: var(--primary-color);
        background-color: transparent;
        font-weight: 700;
      }

      sl-menu-item:focus-visible .link, sl-menu-item:hover .link {
        color: var(--primary-color);
        background-color: transparent;
        font-weight: 700;
      }

      sl-dropdown {
        position: relative;
        
      }
      sl-dropdown::part(base){
        box-shadow: 0px 16px 24px 0px #00000026;
      }

      .col-header {
        text-decoration: none;
        margin: 0;
        white-space: nowrap;
        font-weight: bold;
        color: #777777;
        padding: 0;
        font-size: 14px;
      }

      @media (prefers-color-scheme: light) {
        header {
          color: black;
        }
      }

      ${Yt(g`

      `)}

      ${Ot(g`
        header nav {
          display: initial;
        }

        #desktop-nav {
          display: flex;
        }

      `)}


      ${he(g`
        #desktop-nav {
          display: flex;
        }

      `)}

      ${pe(g`
        header {
          padding-left: 1em;
          padding-right: 1em;
        }
      `)}

      ${gc(g`
        header {
          padding-left: 3em;
          padding-right: 3em;
        }
      `)}

      ${Qt(g`
        header {
          background-color: white;
        }
      `)}
    `}firstUpdated(){var t,e;console.log("first updated page",this.page),(e=(t=this.shadowRoot)==null?void 0:t.querySelector("#header-icon"))==null||e.addEventListener("keydown",o=>{o.key==="Enter"&&Et.go("/")})}recordGoingHome(){window.location.href="/",F("header.logo_clicked",D.ProcessCheckpoint)}showMenu(){let t=this.shadowRoot.querySelector("sl-dropdown");t.open?(F("header.community_dropdown_closed",D.ProcessCheckpoint),t.hide()):(F("header.community_dropdown_expanded",D.ProcessCheckpoint),t.show())}handleClickingLink(t,e){this.shadowRoot.querySelector('[data-tag="'+t+'"]').click(),F(e,D.ProcessCheckpoint)}render(){return console.log(this.page),b`
      <header part="header">
       
          <img id="header-icon" tabindex="0" src="/assets/logos/header_logo.png" 
          alt="PWABuilder logo" @click=${()=>this.recordGoingHome()}/>
       

        <nav id="desktop-nav">
        ${this.page==="home"?b`
            <a
              class="nav_link"
              appearance="hypertext"
              href="https://blog.pwabuilder.com"
              aria-label="PWABuilder Blog, will open in separate tab"
              rel="noopener"
              @click=${()=>F("header.blog_clicked",D.ProcessCheckpoint)}
            >
              <span class="hover-color">Blog</span>
            </a>
            <a
              class="nav_link"
              appearance="hypertext"
              href="https://docs.pwabuilder.com"
              target="_blank"
              aria-label="PWABuilder Docs, will open in separate tab"
              rel="noopener"
              @click=${()=>F("header.docs_clicked",D.ProcessCheckpoint)}
            >
              <span class="hover-color">Docs</span>
            </a>
          `:null}
          
          <sl-dropdown distance="5">
            <button slot="trigger" type="button" @mouseover=${()=>this.showMenu()} class="nav_link nav_button"><span class="hover-color">Community</span></button>
            
            <sl-menu>
                <p class="col-header">Follow us on</p>
                <sl-menu-item @click=${()=>this.handleClickingLink("github_link","header.github_clicked")}>
                  <a 
                    class="link" 
                    href="https://github.com/pwa-builder/PWABuilder"
                    target="_blank"
                    aria-label="PWABuilder Github repo, will open in separate tab"
                    rel="noopener"
                    data-tag="github_link"
                  >
                    Github
                  </a>
                </sl-menu-item>
                <sl-menu-item @click=${()=>this.handleClickingLink("twitter_link","header.twitter_clicked")}>
                  <a 
                    class="link" 
                    href="https://twitter.com/pwabuilder"
                    target="_blank"
                    aria-label="PWABuilder Twitter, will open in separate tab"
                    rel="noopener"
                    data-tag="twitter_link"
                  >
                    Twitter
                  </a>
                </sl-menu-item>
                <sl-menu-item @click=${()=>this.handleClickingLink("discord_link","header.discord_clicked")}>
                  <a 
                    class="link" 
                    href="https://aka.ms/pwabuilderdiscord"
                    target="_blank"
                    aria-label="Invitation link to PWABuilder Discord server, will open in separate tab"
                    rel="noopener"
                    data-tag="discord_link"
                  >
                    Discord
                  </a>
                </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </nav>
      </header>
    `}};Ts([d({type:String})],xi.prototype,"page",2);xi=Ts([dt("app-header")],xi);var Cc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,Ni=(t,e,o,i)=>{for(var r=i>1?void 0:i?Sc(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Cc(e,o,r),r};let Mo=class extends B{constructor(){super(),this.companies=["facebook","instagram","mailchimp","plutotv","sketchapp","glass","tiktok","twitter"],this.paused=!1}static get styles(){return[g`
      :host {
        --carousel-width: 1000px;
        --slide-width: 200px;
        --slide-height: 80px;
        --carousel-image-width: 120px;
      }
      #success-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2em 0;
        background-color: white;
      }

      #success-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--font-color);
        margin-bottom: 1em;
      }

      #success-title h2 {
        text-align: center;
        font-size: var(--header-font-size);
        margin: 0;
      }

      #success-title p {
        text-align: center;
        margin: 0;
        font-size:  var(--body-font-size);
      }

      #success-wrapper #img-box {
        background-image: url("/assets/new/packaged_1366.svg");
        height: 4em;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .controls {
        height: 25px;
        width: 25px;
        border: 1px solid var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
      }

      .controls:hover {
        cursor: pointer;
      }

      sl-icon {
        color: var(--primary-color);
        font-size: 15px;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        12% { transform: translateX(calc(var(--slide-width) * -1)); }
        24% { transform: translateX(calc(var(--slide-width) * -2)); }
        36% { transform: translateX(calc(var(--slide-width) * -3)); }
        48% { transform: translateX(calc(var(--slide-width) * -4)); }
        60% { transform: translateX(calc(var(--slide-width) * -5)); }
        72% { transform: translateX(calc(var(--slide-width) * -6)); }
        84% { transform: translateX(calc(var(--slide-width) * -7)); }
        100% { transform: translateX(calc(var(--slide-width) * -8)); }
      }

      .slider {
        background: #ffffff;
        height: var(--slide-height);
        overflow:hidden;
        position: relative;
        width: var(--carousel-width);
      }

      .slider::before,
      .slider::after {
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
      }
      
      .slider::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }

      .slider::before {
        left: 0;
        top: 0;
      }

      .slide-track {
        animation: scroll 21s infinite ease;
        animation-delay: 3s;
        display: flex;
        width: calc(var(--slide-width) * 16);
      }
      
      .slide {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--slide-height);
        width: var(--slide-width)
      }

      .slide img {
        height: auto;
        width: var(--carousel-image-width);
      }

      @media (min-width: 200px) and (max-width: 400px) {
        :host {
          --carousel-width: 200px;
        }
      }

      @media (min-width: 400px) and (max-width: 600px) {
        :host {
          --carousel-width: 400px;
        }
      }

      @media (min-width: 600px) and (max-width: 800px) {
        :host {
          --carousel-width: 600px;
        }
      }

      @media (min-width: 800px) and (max-width: 1000px) {
        :host {
          --carousel-width: 800px;
        }
      }

      @media (min-width: 1000px) {
        :host {
          --carousel-width: 1000px;
        }
      }

      @media screen and (-ms-high-contrast: white-on-black) {
        .controls sl-icon {
          color: #ffffff;
          border-color: #ffffff;
        }
      }
    `]}connectedCallback(){super.connectedCallback()}shuffle(t){let e=t.length,o;for(;e!=0;)o=Math.floor(Math.random()*e),e--,[t[e],t[o]]=[t[o],t[e]];return t}toggleAnimation(){this.paused=!this.paused;let t=this.shadowRoot.querySelector(".slide-track");this.paused?(t.style.animationPlayState="paused",F("middle.carousel_paused",D.ProcessCheckpoint)):(t.style.animationPlayState="running",F("middle.carousel_played",D.ProcessCheckpoint))}render(){return b`
    <div id="success-wrapper">
      <div id="success-title">
          <h2>Apps packaged</h2>
          <p>Companies of all sizes—from startups to Fortune 500s—have used PWABuilder to package their PWAs.</p>
      </div>
      <div class="slider">
        <div class="slide-track">
          ${this.companies.map(t=>b`
              <div class="slide">
                <img src="/assets/new/${t}_carousel.png" alt="${t} logo" />
              </div>`)}
            ${this.companies.map(t=>b`
              <div class="slide">
                <img src="/assets/new/${t}_carousel.png" alt="${t} logo" />
              </div>`)}
        </div>
      </div>
      ${this.paused?b`<button class="controls" type="button" @click=${()=>this.toggleAnimation()}  role="button" aria-label="Click here to play carousel">
              <sl-icon name="play-fill" alt="Play apps scrolling button"  role="img"></sl-icon>
            </button>`:b`<button class="controls" type="button" @click=${()=>this.toggleAnimation()} role="button" aria-label="Click here to pause carousel"> 
              <sl-icon name="pause-fill" alt="Pause apps scrolling button" role="img"></sl-icon>
            </button>`}
    </div>
    `}};Ni([x()],Mo.prototype,"companies",2);Ni([x()],Mo.prototype,"paused",2);Mo=Ni([dt("companies-packaged")],Mo);const Ec=[{imageUrl:"/assets/new/manifest.svg",title:U.text.resource_hub_new.titles.manifest,description:U.text.resource_hub_new.description.manifest,linkUrl:"https://docs.pwabuilder.com/#/home/pwa-intro?id=web-app-manifests"},{imageUrl:"/assets/new/sw.svg",title:U.text.resource_hub_new.titles.sw,description:U.text.resource_hub_new.description.sw,linkUrl:"https://docs.pwabuilder.com/#/home/sw-intro"},{imageUrl:"/assets/new/https.svg",title:U.text.resource_hub_new.titles.https,description:U.text.resource_hub_new.description.https,linkUrl:"https://docs.pwabuilder.com/#/home/sw-intro?id=security"}];function Pc(){return Ec}var zc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,lo=(t,e,o,i)=>{for(var r=i>1?void 0:i?Ac(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&zc(e,o,r),r};let ke=class extends B{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.linkRoute=""}static get styles(){return[g`
      .card {
        min-width: 140px;
        max-width: 220px;
        height: 12em;
        padding: .5em 1.25em;
        padding-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background: #ffffff;
        border-radius: var(--card-border-radius);
        box-shadow: 0px 16px 24px 0px #00000026;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .card-content img {
        width: 4em;
        height: auto;
      }
      .card-content h3 {
        font-size: var(--subheader-font-size);
        line-height: 24px;
        color: var(--font-color);
        font-weight: var(--font-bold);
        margin: 0;
        margin-bottom: .5em;
        text-align: center;
        white-space: nowrap;
      }
      .card-content p {
        color: var(--secondary-font-color);
        font-size: var(--card-body-font-size);
        line-height: 18px;
        text-align: center;
        margin: 0;
      }
      .card-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%
      }
      .card-actions a {
        color: var(--primary-color);
        font-weight: bold;
        text-decoration: none;
        font-size: var(--card-body-font-size);
        margin: 0;
      }
      .card-actions a:hover {
        cursor: pointer;
      }
      .arrow_link {
        margin: 0;
        border-bottom: 1px solid var(--primary-color);
        white-space: nowrap;
      }
      .arrow_anchor {
        text-decoration: none;
        font-size: var(--arrow-link-font-size);
        font-weight: bold;
        margin: 0px 0.5em 0px 0px;
        line-height: 1em;
        color: rgb(79, 63, 182);
        display: flex;
        column-gap: 10px;
      }
      .arrow_anchor:visited {
        color: var(--primary-color);
      }
      .arrow_anchor:hover {
        cursor: pointer;
      }
      .arrow_anchor:hover img {
        animation: bounce 1s;
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateX(-5px);
        }
        60% {
          transform: translateX(5px);
        }
      }
      /* < 480px */
      ${Yt(g`
          .card {
            min-width: 140px;
            max-width: 300px;
            height: 15em;
          }
          .card-content img {
            width: 6em;
          }
          .card-content p {
            font-size: 14px;
          }
          .card-content h3 {
            font-size: 20px;
          }
      `)}
      /* 480px - 639px */
      ${Ot(g`
        .card {
            min-width: 140px;
            max-width: 300px;
            height: 12em;
          }
          .card-content p {
            font-size: .825em;
          }
          .card-content h3 {
            font-size: 20px;
          }
      `)}
      /* 640px - 1023px */
      ${he(g`
        .card {
          min-width: 140px;
          max-width: 200px;
          height: 12em;
          padding: .75em;
          padding-bottom: 1.25em;
        }
      `)}
      /*1024px - 1365px*/
      ${pe(g`
      `)}
      /* > 1920 */
      ${Qt(g`
          
      `)}
    `]}firstUpdated(){}render(){return b`
      <div class="card">
        <div class="card-content">
          <img src=${this.imageUrl} alt="${this.cardTitle} icon" role="img"/>
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
        </div>
        <div class="card-actions" @click=${()=>F("middle."+this.cardTitle+"_learn_more_clicked",D.ProcessCheckpoint)}>
          <a
            class="arrow_anchor"
            href=${this.linkRoute}
            rel="noopener"
            target="_blank"
            aria-label="Learn more about ${this.cardTitle}, will open separate tab"
          >
            <p class="arrow_link">Learn More</p>
            <img
              src="/assets/new/arrow.svg"
              alt="Click here to learn more about ${this.cardTitle}, will open separate tab"
              role="button"
            />
          </a>
        </div>
      </div>
    `}};lo([d({type:String})],ke.prototype,"imageUrl",2);lo([d({type:String})],ke.prototype,"cardTitle",2);lo([d({type:String})],ke.prototype,"description",2);lo([d({type:String})],ke.prototype,"linkRoute",2);ke=lo([dt("info-card")],ke);var Tc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Ls=(t,e,o,i)=>{for(var r=i>1?void 0:i?Lc(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Tc(e,o,r),r};let ki=class extends B{constructor(){super(),this.cards=[]}static get styles(){return[g`
      #hub-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(/assets/new/OtterBackgroundPWA1920.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 2em;
      }

      #hub-panel h2 {
        color: #ffffff;
        margin: 0;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: var(--header-font-size);
        text-align: center;
      }

      #cards {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        column-gap: 1em;
      }

      /* < 480px */
      ${Yt(g`
          #hub-panel{
            background-image: url(/assets/new/BackgroundPWA320.png);
            padding: 2em 1em;
          }
          #cards {
            flex-direction: column;
            row-gap: 1em;
            align-items: center;
            justify-content: center;
          }
      `)}

      /* 480px - 639px */
      ${Ot(g`
          #hub-panel{
            background-image: url(/assets/new/BackgroundPWA480.png);
            padding: 2em 4em;
          }
          #cards {
            flex-direction: column;
            row-gap: 1em;
            align-items: center;
            justify-content: center;
          }
      `)}

      /* 640px - 1023px */
      ${he(g`
          #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1024.jpg);
            background-position: center center;
            padding: 3.25em;
          }
      `)}

      /*1024px - 1365px*/
      ${pe(g`
          #hub-panel {
            background: url(/assets/new/OtterBackgroundPWA1366.jpg);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
      `)}

      /* > 1920 */
      ${Qt(g`
            #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1920.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            padding: 3em;
          }
      `)}

      
    `]}connectedCallback(){super.connectedCallback(),this.cards=Pc()}render(){return b`
      <div id="hub-panel">
        <h2>What makes a PWA?</h2>
        <div id="cards">
          ${this.cards.map(t=>b`
            <info-card
            cardTitle=${t.title}
            description=${t.description}
            imageUrl=${t.imageUrl}
            linkRoute=${t.linkUrl}
          >
          </info-card>
          `)}
        </div>
      </div>
    `}};Ls([x()],ki.prototype,"cards",2);ki=Ls([dt("resource-hub")],ki);const Oc=[{imageUrl:"/assets/new/trivago.png",stat:U.text.success_stories.stat.trivago,description:U.text.success_stories.description.trivago,value:U.text.success_stories.value.trivago,company:"trivago",source:"https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/"},{imageUrl:"/assets/new/alibaba.png",stat:U.text.success_stories.stat.alibaba,description:U.text.success_stories.description.alibaba,value:U.text.success_stories.value.alibaba,company:"alibaba",source:"https://developers.google.com/web/showcase/2016/alibaba"},{imageUrl:"/assets/new/pintrest.png",stat:U.text.success_stories.stat.pintrest,description:U.text.success_stories.description.pintrest,value:U.text.success_stories.value.pintrest,company:"pintrest",source:"https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154"},{imageUrl:"/assets/new/tinder.png",stat:U.text.success_stories.stat.tinder,description:U.text.success_stories.description.tinder,value:U.text.success_stories.value.tinder,company:"tinder",source:"https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0"}];function Rc(){return Oc}var Ic=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,fe=(t,e,o,i)=>{for(var r=i>1?void 0:i?Mc(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Ic(e,o,r),r};let Xt=class extends B{constructor(){super(),this.imageUrl="",this.cardStat="",this.description="",this.cardValue="",this.company="",this.source=""}static get styles(){return[g`
      .success-card {
        width: 350px;
        height: max-content;
        padding: 1em;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background: #ffffff;
        border-radius: var(--card-border-radius);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: black;
      }

      .success-line-one {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        /* for screen reader scan */
        flex-direction: row-reverse;
        color: var(--font-color);
      }

      .success-stat {
        margin: 0;
        font-size: var(--subheader-font-size);
        line-height: 28px;
        font-weight: var(--font-bold);
        margin-bottom: .75em;
        color: var(--font-color);
      }

      .success-stat span {
        margin-right: 50%;
        font-size: 36px;
        line-height: 36px;
        font-weight: bold;
      }

      .success-desc {
        margin: 0;
        font-size:  var(--card-body-font-size);
        line-height: 18px;
        color: var(--secondary-font-color);
      }

      @media screen and (-ms-high-contrast: white-on-black) {
        .success-card:focus{
          border: 4px solid #ffffff;
          border-radius: 5px;
        }
      }

      @media(max-width: 800px){
        .success-card img {
          margin-bottom: 10px;
        }
        .success-line-one {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .success-stat span {
          margin-right: 0;
        }
        .success-line-one h3 {
          font-size: 20px;
          text-align: center;
        }
      }

      /* < 480px */
      ${Yt(g`
        .success-card {
          width: 280px;
          box-sizing: border-box;
        }
        
      `)}

      /* 480px - 639px */
      ${Ot(g`
        .success-card {
          width: 400px;
        }
        .success-line-one h3 {
          font-size: 28px;
        }
      `)}

      /* 640px - 1023px */
      ${he(g`
          .success-card {
            width: 305px;
          }
      `)}

      /*1024px - 1365px*/
      ${pe(g`

      `)}

      /* > 1920px */
      ${Qt(g`
        .success-card {
          width: 525px;
        }
      `)}
    `]}render(){return b`
      <a @click=${()=>F("middle."+this.company+"_clicked",D.ProcessCheckpoint)} class="success-card" href="${this.source}" rel="noopener" target="_blank" aria-label=${"Success story of "+this.company+" link, click for more details on separate tab"}>
        <div class="success-line-one">
           <img src=${this.imageUrl} alt="${this.company} logo"/>
           <h3 class="success-stat">
             <span>${this.cardValue}</span> ${this.cardStat}
           </h3>    
        </div>
        <p class="success-desc">${this.description}</p>
  </a>
    `}};fe([d({type:String})],Xt.prototype,"imageUrl",2);fe([d({type:String})],Xt.prototype,"cardStat",2);fe([d({type:String})],Xt.prototype,"description",2);fe([d({type:String})],Xt.prototype,"cardValue",2);fe([d({type:String})],Xt.prototype,"company",2);fe([d({type:String})],Xt.prototype,"source",2);Xt=fe([dt("success-card")],Xt);var Uc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Os=(t,e,o,i)=>{for(var r=i>1?void 0:i?Dc(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Uc(e,o,r),r};let $i=class extends B{constructor(){super(),this.cards=[]}static get styles(){return[g`
      #success-panel::before {
        content: "";
      }
      #success-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(/assets/new/successBG_1920.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        padding: 2em;
        /* padding-left: 20%; */
      }

      #success-panel h2 {
        margin: 0;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: var(--header-font-size);
        text-align: left;
      }

      #success-cards {
        width: 100%;
        display: grid;
        grid-template-columns: min-content min-content;
        grid-template-rows: auto auto;
        row-gap: .8em;
        column-gap: 1em;
      }

      /* < 480px */
      ${Yt(g`
          #success-panel {
            background-image: url(/assets/new/successBG_320.png);
            padding: 2em 1em;
          }
          #success-panel h2 {
            text-align: left;
            width: 100%;
            padding-left: 5px;
            font-size: 1.75em;
            margin-bottom: .5em;
          }
          
          #success-cards {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            align-self: center;
          }
      `)}

      /* 480px - 639px */
      ${Ot(g`
        #success-panel {
          background-image: url(/assets/new/successBG_480.png);
          padding: 1em;
          padding-bottom: 2em;
        }

        #success-panel h2 {
          text-align: left;
          width: 100%;
          padding-left: 5px;
          margin-bottom: .5em;
        }
        
        #success-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          align-self: center;
        }
      `)}

      /* 640px - 1023px */
      ${he(g`
          #success-panel {
            background-image: url(/assets/new/successBG_1024.png);
            padding-left: 2em;
          }
          #success-panel h2 {
            margin-bottom: .5em;
          }
      `)}

      @media (min-width: 640px) and (max-width: 850px) {
        #success-panel {
          background-image: url(/assets/new/successBG_480.png);
          padding: 1em;
          padding-bottom: 2em;
        }

        #success-panel h2 {
          text-align: center;
          width: 100%;
        }
        
        #success-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: fit-content;
          align-self: center;
        }
      }
      

      /*1024px - 1365px*/
      ${pe(g`
          #success-panel {
            /* padding-left: 15%; */
            padding-bottom: 2.5em;
          }
      `)}

      /* > 1920px */
      ${Qt(g`
          #success-panel {
            /* padding-left: 30%; */
            padding-bottom: 2.5em;
          }
          #success-panel h2 {
            margin-bottom: .5em;
          }
      `)}
    `]}connectedCallback(){super.connectedCallback(),this.cards=Rc()}render(){return b`
      <div id="success-panel">
        <div id="success-panel-wrapper">
          <h2>PWA success stories</h2>
          <div id="success-cards">
            ${this.cards.map(t=>b`
            <success-card
            cardStat=${t.stat}
            description=${t.description}
            imageUrl=${t.imageUrl}
            cardValue=${t.value}
            company=${t.company}
            source=${t.source}
            >
            </success-card>
            `)}
          </div>
        </div>
      </div>
    `}};Os([x()],$i.prototype,"cards",2);$i=Os([dt("success-stories")],$i);const Vc=[{imageUrl:"/assets/new/github.png",title:U.text.community_hub.titles.github,description:U.text.community_hub.description.github,links:[{link:"https://github.com/pwa-builder/PWABuilder",text:"Visit us on GitHub"},{link:"https://github.com/pwa-builder/PWABuilder/wiki/How-to-contribute-to-PWABuilder",text:"Contribute to project"}],company:"github"},{imageUrl:"/assets/new/twitter.png",title:U.text.community_hub.titles.twitter,description:U.text.community_hub.description.twitter,links:[{link:"https://twitter.com/pwabuilder",text:"Follow our Twitter"}],company:"twitter"},{imageUrl:"/assets/new/discord.png",title:U.text.community_hub.titles.discord,description:U.text.community_hub.description.discord,links:[{link:"https://aka.ms/pwabuilderdiscord",text:"Join our Discord"}],company:"discord"}];function Fc(){return Vc}var Nc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,Oe=(t,e,o,i)=>{for(var r=i>1?void 0:i?Hc(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Nc(e,o,r),r};let le=class extends B{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.company="",this.links=[]}static get styles(){return[g`
      .community-card {
        width: max-content;
        max-width: 480px;
        height: max-content;
        color: var(--font-color);
        display: flex;
        align-items: flex-start;
        column-gap: 1.5em;
        padding: .5em;
        padding-left: 0;
      }

      .community-card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      .community-card img {
        width: 3em;
        height: auto;
      }

      .community-card-content h3 {
        margin: 0;
        font-size: var(--subheader-font-size);
        font-weight: var(--font-bold);
      }

      .community-card-content p {
        font-size:  var(--body-font-size);
        margin-top: 0;
        margin-bottom: .25em;
      }

      .community-card-actions {
        color: var(--primary-color);
        fill: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 1.5em;
      }

      .community-card-actions a {
        color: var(--primary-color);;
        font-size: var(--arrow-link-font-size);
        font-weight: bold;
        margin-right: .5em;
        width: 100%;
        border-bottom: 1px solid rgb(79, 63, 182);
        text-decoration: none;
        line-height: 14px;
      }

      .card-link-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: max-content;
      }

      .community-card-image img {
        width: 50px;
        height: auto;
      }

      .community-card-actions a:hover {
        cursor: pointer;
      }

      .community-card-actions a:visited {
        color:  var(--primary-color);;
      }
      .card-link-box img {
        width: .5em;
        height: auto;
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
      }

      .card-link-box:hover img {
        animation: bounce 1s;
      }

      /* < 480px */
      ${Yt(g`
          .community-card {
            width: 100%;
          }
          .community-card-actions {
            flex-direction: column;
            align-items: flex-start;
            row-gap: .5em;
          }
          .community-card-image img {
            width: 35px;
            height: auto;
          }
          .community-card-content p {
            font-size: 16px;
          }
      `)}

      /* 480px - 639px */
      ${Ot(g`
          .community-card {
            width: 100%;
          }
      `)}
    `]}firstUpdated(){}render(){return b`
      <div class="community-card">
        <div class="community-card-image">
          <img src=${this.imageUrl} alt ="${this.company} logo" />
        </div>
        <div class="community-card-content">
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
          <div class="community-card-actions">
            ${this.links&&this.links.map(t=>b`
              <div class="card-link-box">
                <a @click=${()=>F("bottom."+t.text+"_clicked",D.ProcessCheckpoint)} href=${t.link} target="_blank" rel="noopener" aria-label="${t.text}, will open in separate tab">${t.text}</a>
                <img src="/assets/new/arrow.svg" alt="Click here to ${t.text}, will open separate tab" role="button"/>
              </div>
              `)}
          </div>
        </div>
      </div>
    `}};Oe([d({type:String})],le.prototype,"imageUrl",2);Oe([d({type:String})],le.prototype,"cardTitle",2);Oe([d({type:String})],le.prototype,"description",2);Oe([d({type:String})],le.prototype,"company",2);Oe([d({type:Array})],le.prototype,"links",2);le=Oe([dt("community-card")],le);var jc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Rs=(t,e,o,i)=>{for(var r=i>1?void 0:i?Wc(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&jc(e,o,r),r};let Ci=class extends B{constructor(){super(),this.cards=[]}static get styles(){return[g`
      #community-panel {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background: #ffffff;
        padding: 2em;
        column-gap: 1em;
      }

      #community-photo {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      #community-photo img { 
        width: 500px;
        height: auto;
      }

      #community-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      #community-content h2 {
        color: var(--font-color);
        margin: 0;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: var(--header-font-size);
      }

      #community-cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 30px;
      }

       /* < 480px */
       ${Yt(g`
          #community-photo img { 
            display: none;
          }
          #community-panel {
            column-gap: 0;
          }
          #community-content h2 {
            width: 100%;
            margin-bottom: .5em;
          }
          #community-content{
            width: 280px;
          }
      `)}

      /* 480px - 639px */
      ${Ot(g`
          #community-photo img { 
            display: none;
          }
          #success-panel {
            align-items: center;
            justify-content: center;
          }
          #community-panel {
            column-gap: 0;
          }
          #community-content {
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          #community-content h2 {
            width: 100%;
            margin-bottom: .5em;
          }
      `)}

      

      /* 640px - 1023px */
      ${he(g`
          #community-photo img { 
            max-width: 18em;
            height: auto;
          }
          #community-panel h2 {
            margin-bottom: .5em;
          }
          #community-cards {
            row-gap: 15px;
          }
      `)}

      @media (min-width: 640px) and (max-width: 850px) {
        #community-photo img { 
          display: none;
        }
        #success-panel {
          align-items: center;
          justify-content: center;
        }
      }

      
      

      /*1024px - 1365px*/
      ${pe(g`
          
      `)}

      @media (min-width: 1024px) and (max-width: 1160px) {
        #community-photo img { 
          width: 380px;
        }
      }

      /* > 1920px */
      ${Qt(g`
          #community-photo img { 
            width: 569px;
            height: auto;
          }
      `)}
    `]}connectedCallback(){super.connectedCallback(),this.cards=Fc()}render(){return b`
      <div id="community-panel">
        <div id="community-photo">
          <img src="/assets/new/community-image.png" alt="social hub image" role="img"/>
        </div>
        <div id="community-content">
          <h2>Join our community</h2>
          <div id="community-cards">
            ${this.cards.map(t=>b`
              <community-card
              cardTitle=${t.title}
              description=${t.description}
              imageUrl=${t.imageUrl}
              company=${t.company}
              .links=${t.links}
            >
            </community-card>
            `)}
          </div>
        </div>
      </div>
    `}};Rs([x()],Ci.prototype,"cards",2);Ci=Rs([dt("community-hub")],Ci);var $e=(t=>(t.manifest="PWABuilderManifest",t.currentUrl="current_url",t))($e||{}),Is=(t=>(t.manifestUpdate="MANIFEST_UPDATE",t))(Is||{}),et=(t=>(t.DONE="done",t.ACTIVE="active",t.PENDING="pending",t))(et||{}),Ge=(t=>(t.TEST="Test",t.REVIEW="Review",t.PUBLISH="Package",t.COMPLETE="Complete",t))(Ge||{});function q(t,e,o,i,r){if(!t||t.length===0)return null;const s=qc(t)?t:t.map(l=>new Re(l)),n=s.findLast(l=>l.isExactMatch(e,o,i,r));if(n)return n.getIcon();var c=s.findLast(l=>l.isSuitableIcon(e,o,i,r));return(c==null?void 0:c.getIcon())||null}function Ld(t){const e=(t||[]).map(o=>new Re(o));return q(e,"any",512,512,"image/png")||q(e,"maskable",512,512,"image/png")||q(e,"any",192,192,"image/png")||q(e,"maskable",192,192,"image/png")||q(e,"any",512,512,"image/jpeg")||q(e,"maskable",512,512,"image/jpeg")||q(e,"any",192,192,"image/jpeg")||q(e,"maskable",192,192,"image/jpeg")||q(e,"any",512,512,void 0)||q(e,"maskable",512,512,void 0)||q(e,"any",192,192,void 0)||q(e,"maskable",192,192,void 0)||q(e,"any",0,0,"image/png")||q(e,"maskable",0,0,"image/png")||q(e,"any",0,0,"image/jpeg")||q(e,"maskable",0,0,"image/jpeg")||q(e,"any",0,0,void 0)||q(e,"maskable",0,0,void 0)}function qc(t){return t[0]instanceof Re}const ie=class{constructor(t){this.icon=t}getProbableFileExtension(){if(!this.icon.type)return this.getFileExtensionFromSrc();const t=this.getFormat();if(t)return t.exts[0];const e=this.icon.type.lastIndexOf("/");return e!=-1?this.icon.type.substring(e+1):null}isAtLeast(t,e){return this.getDimensions().some(i=>i.width>=t&&i.height>=e)}get isPng(){return this.getMimeTypeOrGuessFromSrc()===ie.pngFormat.mime}get isJpg(){return this.getMimeTypeOrGuessFromSrc()===ie.jpgFormat.mime}get isSquare(){return this.getDimensions().some(e=>e.width===e.height)}get isEmbedded(){return this.icon.src.includes("data:image")}hasPurpose(t){return t?(this.icon.purpose||"any").split(" ").some(e=>e.toLowerCase()===t.toLowerCase()):!0}hasSize(t){return(this.icon.sizes||"0x0").split(" ").some(e=>e===t)}createIconWithoutUrlEncodedSrc(t){var o;const e={...this.icon};return(o=e.src)!=null&&o.startsWith("data:image")&&(e.src=t),e}getIcon(){return this.icon}getDimensions(){return(this.icon.sizes||"0x0").split(" ").map(t=>{const e=t.split("x");return{width:Number.parseInt(e[0]||"0",10),height:Number.parseInt(e[1]||"0",10)}})}hasMimeType(t){return t?this.getMimeTypeOrGuessFromSrc()===t.toLowerCase():!0}isExactMatch(t,e,o,i){const r=`${e}x${o}`;return this.hasPurpose(t)&&this.hasSize(r)&&!this.isEmbedded&&this.hasMimeType(i)}isSuitableIcon(t,e,o,i){if(this.isExactMatch(t,e,o,i)||!t&&this.isExactMatch(null,e,o,i))return!0;const n=!(e===o)||this.isSquare;return!!(this.hasPurpose(t)&&this.isAtLeast(e,o)&&!this.isEmbedded&&this.hasMimeType(i)&&n)}async resolvesSuccessfully(t){return this.icon.src?new Promise(e=>{const o=new Image,i=new URL(this.icon.src,t);o.src=`${G.safeUrlFetcher}?checkExistsOnly=false&url=${encodeURIComponent(i.toString())}`,o.onload=()=>{o.complete&&o.naturalHeight>0?e(!0):e(!1)},o.onerror=()=>{e(!1)}}):Promise.resolve(!1)}getFileExtensionFromSrc(){const t=this.getFormat();return(t==null?void 0:t.exts[0])||null}getFormat(){var i;const t=ie.formats.find(r=>r.mime===this.icon.type);if(t)return t;const e=((i=this.icon.src)==null?void 0:i.toLowerCase())||"",o=ie.formats.find(r=>r.exts.some(s=>e.endsWith(`.${s}`)));return o!=null?o:null}getMimeTypeOrGuessFromSrc(){if(this.icon.type)return this.icon.type;const t=this.getFormat();return(t==null?void 0:t.mime)||null}};let Re=ie;Re.pngFormat={exts:["png"],mime:"image/png"};Re.jpgFormat={exts:["jpg","jpeg"],mime:"image/jpeg"};Re.formats=[ie.pngFormat,ie.jpgFormat,{exts:["webp"],mime:"image/webp"},{exts:["gif"],mime:"image/gif"},{exts:["ico"],mime:"image/x-icon"},{exts:["tiff"],mime:"image/tiff"},{exts:["bmp"],mime:"image/bmp"},{exts:["svg"],mime:"image/svg+xml"}];var Ms=Object.defineProperty,Bc=t=>Ms(t,"__esModule",{value:!0}),Ie=(t,e)=>()=>(t&&(e=t(t=0)),e),Me=(t,e)=>{Bc(t);for(var o in e)Ms(t,o,{get:e[o],enumerable:!0})},Us={};Me(Us,{default:()=>Ds});var Ds,Gc=Ie(()=>{Ds=async(t=[{}])=>(Array.isArray(t)||(t=[t]),new Promise((e,o)=>{let i=document.createElement("input");i.type="file";let r=[...t.map(l=>l.mimeTypes||[]).join(),t.map(l=>l.extensions||[]).join()].join();i.multiple=t[0].multiple||!1,i.accept=r||"";let s=()=>c(o),n=l=>{typeof c=="function"&&c(),e(l)},c=t[0].legacySetup&&t[0].legacySetup(n,s,i);i.addEventListener("change",()=>{n(i.multiple?Array.from(i.files):i.files[0])}),i.click()}))}),Vs={};Me(Vs,{default:()=>Fs});var Vr,Fs,Kc=Ie(()=>{Vr=async t=>{let e=await t.getFile();return e.handle=t,e},Fs=async(t=[{}])=>{Array.isArray(t)||(t=[t]);let e=[];t.forEach((r,s)=>{e[s]={description:r.description||"",accept:{}},r.mimeTypes?r.mimeTypes.map(n=>{e[s].accept[n]=r.extensions||[]}):e[s].accept["*/*"]=r.extensions||[]});let o=await window.showOpenFilePicker({id:t[0].id,startIn:t[0].startIn,types:e,multiple:t[0].multiple||!1,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),i=await Promise.all(o.map(Vr));return t[0].multiple?i:i[0]}}),Ns={};Me(Ns,{default:()=>Hs});var Hs,Xc=Ie(()=>{Hs=async(t=[{}])=>(Array.isArray(t)||(t=[t]),t[0].recursive=t[0].recursive||!1,new Promise((e,o)=>{let i=document.createElement("input");i.type="file",i.webkitdirectory=!0;let r=()=>n(o),s=c=>{typeof n=="function"&&n(),e(c)},n=t[0].legacySetup&&t[0].legacySetup(s,r,i);i.addEventListener("change",()=>{let c=Array.from(i.files);t[0].recursive?t[0].recursive&&t[0].skipDirectory&&(c=c.filter(l=>l.webkitRelativePath.split("/").every(u=>!t[0].skipDirectory({name:u,kind:"directory"})))):c=c.filter(l=>l.webkitRelativePath.split("/").length===2),s(c)}),i.click()}))}),js={};Me(js,{default:()=>Ws});var ai,Ws,Jc=Ie(()=>{ai=async(t,e,o=t.name,i)=>{let r=[],s=[];for await(let n of t.values()){let c=`${o}/${n.name}`;n.kind==="file"?s.push(n.getFile().then(l=>(l.directoryHandle=t,Object.defineProperty(l,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>c})))):n.kind==="directory"&&e&&(!i||!i(n))&&r.push(ai(n,e,c,i))}return[...(await Promise.all(r)).flat(),...await Promise.all(s)]},Ws=async(t={})=>{t.recursive=t.recursive||!1;let e=await window.showDirectoryPicker({id:t.id,startIn:t.startIn});return ai(e,t.recursive,void 0,t.skipDirectory)}}),qs={};Me(qs,{default:()=>Bs});async function Yc(t,e){let o=t.getReader(),i=new ReadableStream({start(s){return n();async function n(){return o.read().then(({done:c,value:l})=>{if(c){s.close();return}return s.enqueue(l),n()})}}}),r=new Response(i);return o.releaseLock(),new Blob([await r.blob()],{type:e})}var Bs,Qc=Ie(()=>{Bs=async(t,e={})=>{Array.isArray(e)&&(e=e[0]);let o=document.createElement("a"),i=t;"body"in t&&(i=await Yc(t.body,t.headers.get("content-type"))),o.download=e.fileName||"Untitled",o.href=URL.createObjectURL(i);let r=()=>n(reject),s=()=>{typeof n=="function"&&n()},n=e.legacySetup&&e.legacySetup(s,r,o);return o.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(o.href),30*1e3),s()}),o.click(),null}}),Gs={};Me(Gs,{default:()=>Ks});var Ks,Zc=Ie(()=>{Ks=async(t,e=[{}],o=null,i=!1)=>{Array.isArray(e)||(e=[e]),e[0].fileName=e[0].fileName||"Untitled";let r=[];if(e.forEach((c,l)=>{r[l]={description:c.description||"",accept:{}},c.mimeTypes?(l===0&&(t.type?c.mimeTypes.push(t.type):t.headers&&t.headers.get("content-type")&&c.mimeTypes.push(t.headers.get("content-type"))),c.mimeTypes.map(u=>{r[l].accept[u]=c.extensions||[]})):t.type&&(r[l].accept[t.type]=c.extensions||[])}),o)try{await o.getFile()}catch(c){if(o=null,i)throw c}let s=o||await window.showSaveFilePicker({suggestedName:e[0].fileName,id:e[0].id,startIn:e[0].startIn,types:r,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await s.createWritable();return"stream"in t?(await t.stream().pipeTo(n),s):"body"in t?(await t.body.pipeTo(n),s):(await n.write(blob),await n.close(),s)}}),td=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{top.location+""}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),Hi=td;Hi?Promise.resolve().then(()=>(Kc(),Vs)):Promise.resolve().then(()=>(Gc(),Us));Hi?Promise.resolve().then(()=>(Jc(),js)):Promise.resolve().then(()=>(Xc(),Ns));Hi?Promise.resolve().then(()=>(Zc(),Gs)):Promise.resolve().then(()=>(Qc(),qs));// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
let Uo,$o,Fr={progress:[{header:Ge.TEST,location:"/",done:et.ACTIVE,items:[{name:"Submit URL",done:et.PENDING},{name:"Run Tests",done:et.PENDING}]},{header:Ge.REVIEW,location:"/reportcard",done:et.PENDING,items:[{name:"Manifest",done:et.PENDING},{name:"Service Worker",done:et.PENDING},{name:"Security",done:et.PENDING}]},{header:Ge.PUBLISH,location:"/publish",done:et.PENDING,items:[{name:"Package",done:et.PENDING},{name:"Publish",done:et.PENDING}]},{header:Ge.COMPLETE,location:"/complete",done:et.PENDING,items:[{name:"Resources",done:et.PENDING}]}]};function ed(t){Fr=t,sessionStorage.setItem("current_progress",JSON.stringify(Fr))}function Xs(t){t&&(Uo=t,sessionStorage.setItem($e.currentUrl,Uo))}function od(){const t=sessionStorage.getItem($e.currentUrl);if(Uo)return Uo;if(t)return t;throw new Error("No Good URL found for the current site")}function re(){return $o||($o=id()),$o}function ji(t){$o=t,sessionStorage.setItem($e.manifest,JSON.stringify(t)),Xs(t.siteUrl)}function Od(){return re().manifestUrl}function id(){try{const e=sessionStorage.getItem($e.manifest);if(e)return JSON.parse(e)}catch(e){console.error("Unable to load manifest from session",e)}const t={dir:"auto",display:"fullscreen",name:"placeholder",short_name:"placeholder",start_url:void 0,scope:"/",lang:"en",description:"placeholder description",theme_color:"#000000",background_color:"#000000",icons:[],screenshots:[]};return{manifest:t,initialManifest:t,siteUrl:sessionStorage.getItem($e.currentUrl)||"",manifestUrl:"",isGenerated:!0,isEdited:!1}}function rd(t,e){t===e&&(re().isEdited=!1),Object.keys(t).forEach(o=>{if(Array.isArray(t[o])&&Array.isArray(e[o])){let i=t[o].flat(2),r=e[o].flat(2);i.forEach((s,n)=>{r.includes(s)===!0&&r[n]!==s&&(re().isEdited=!0)})}else JSON.stringify(t[o])!==JSON.stringify(e[o])&&(re().isEdited=!0)})}const sd="PWABuilder",nd="1.0.0";function ad(){let t="";for(let e=0;e<32;e++){let o=window.crypto.getRandomValues(new Uint8Array(1))[0]%16+1;(e==8||e==12||e==16||e==20)&&(t+="-"),t+=(e==12?4:e==16?o&3|8:o).toString(16)}return t}function ld(){let t="";return sessionStorage.getItem("uid")?t=sessionStorage.getItem("uid"):(t=ad(),sessionStorage.setItem("uid",t)),{"platform-identifier":sd,"platform-identifier-version":nd,"correlation-id":t}}const cd=new EventTarget;let eo;function dd(){eo=void 0}async function ud(t){const e=encodeURIComponent(t),o=G.api+`/FindWebManifest?site=${e}`;let i=ld();try{const r=await fetch(o,{method:"POST",headers:new Headers(i)});if(!r.ok)throw console.warn("Fetching manifest failed",r.statusText),new Error(`Unable to fetch response using ${o}. Response status  ${r}`);const s=await r.json();if(!s)throw console.warn("Fetching manifest failed due to no response data",r),new Error(`Unable to get JSON from ${o}`);if(s.content&&s.content.json)return{content:s.content.json,format:"w3c",generatedUrl:s.content.url||t,siteUrl:t,default:{short_name:s.content.json.short_name||""},id:"",generated:!s.content,errors:[],suggestions:[],warnings:[]}}catch(r){return console.warn("Manifest not found",r),null}return null}async function hd(t){let e;try{e=Ps(t)}catch(i){reject(i);return}const o=await ud(e);if(o){const i=re();return i.initialManifest||(eo=o.content,i.initialManifest=eo,ji(i)),o}else{console.error("All manifest detectors failed: Timeout expired.");return}}async function Rd(t){const e=t||pd();if(!e)throw new Error("No available site URL");Xs(e);let o;if(o=await hd(e),!o){console.error("No Manifest found.");return}const i={manifest:o.content,initialManifest:eo,manifestUrl:o.generatedUrl,isGenerated:o.generated,siteUrl:o.siteUrl,isEdited:!1};return ji(i),await fd({...o.content}),i}function pd(){const t=re();if(t.siteUrl)return t.siteUrl;const o=new URLSearchParams(location.search).get("site");if(o)return o;const i=od();return sessionStorage?i:null}async function Id(t){let e;try{e=await(await fetch(`${G.manifestCreatorUrl}?url=${t}`,{method:"POST",headers:new Headers({"content-type":"application/json"})})).json()}catch(r){console.error("Manifest creation service failed to create the manifest. Falling back to empty manifest.",r)}console.log("created manifest",e);const o=gd(e,t,!0);return{manifest:o.content,initialManifest:eo,manifestUrl:o.generatedUrl,isGenerated:o.generated,siteUrl:o.siteUrl,isEdited:!1}}function fd(t){const e=re();return e.manifest=Object.assign(e.manifest,t),e.initialManifest&&rd(e.initialManifest,e.manifest),ji(e),cd.dispatchEvent(md({...e.manifest})),e.manifest}function md(t){return new CustomEvent(Is.manifestUpdate,{detail:t,bubbles:!0,composed:!0})}function gd(t,e,o){return{content:t,format:"w3c",siteUrl:e,generated:o,id:"",generatedUrl:"",default:{short_name:t.short_name||"My PWA"},errors:[],suggestions:[],warnings:[]}}var bd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,Ue=(t,e,o,i)=>{for(var r=i>1?void 0:i?vd(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&bd(e,o,r),r};let ce=class extends B{constructor(){super(),this.gettingManifest=!1,this.errorGettingURL=!1,this.disableStart=!0}static get styles(){return[g`

        :host {
          --sl-focus-ring-width: 3px;
          --sl-input-focus-ring-color: #595959;
          --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
          --sl-input-border-color-focus: #4F3FB6ac;
          --sl-color-primary-300: var(--primary-color);
        }

        #home-block::before {
          content: "";
        }
        #home-block {
          background: url(/assets/new/Hero1920_withmani.jpg);
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4em;
        }

        #mani {
          position: fixed;
        }

        #wrapper {
          width: 1000px;
        }
        app-header::part(header) {
          background-color: transparent;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          z-index: 2;
          border: none;
        }
        #input-header {
          font-size: var(--subheader-font-size);
          font-weight: bold;
          margin: 0;
          line-height: 1.75em;
          color: var(--primary-color);
        }
        #content-grid {
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: auto auto;
          width: fit-content;
        }
        .intro-grid-item {
          width: max-content;
          margin-right: 1em;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
          }
          40% {
            transform: translateX(-5px);
          }
          60% {
              transform: translateX(5px);
          }
        }
        .grid-item-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-weight: bold;
          margin-bottom: .25em;
        }
        .grid-item-header a {
          text-decoration: none;
          border-bottom: 1px solid rgb(79, 63, 182);
          font-size: var(--subheader-font-size);
          font-weight: bold;
          margin: 0px 0.5em 0px 0px;
          line-height: 1em;
          color: rgb(79, 63, 182);
        }
        .grid-item-header a:visited {
          color: var(--primary-color);
        }
        .grid-item-header:hover {
          cursor: pointer;
        }
        .grid-item-header:hover img {
          animation: bounce 1s;
        }
        .intro-grid-item p {
          margin: 0;
          color: var(--font-color);
          font-size:  var(--body-font-size);
          width: 15em;
        }
        #input-form {
          margin-top: 1em;
          width: max-content;
        }
        #input-header-holder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          margin-bottom: 10px;
        }
        #input-header-holder img {
          width: auto;
          height: 1em;
          margin-left: 20px;
        }
        #input-area {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 1fr 1fr;
          row-gap: 5px;
          place-items: center;
        }
        #input-and-error {
          grid-area: 1 / 1 / auto / 5;
          display: flex;
          flex-direction: column;
        }
        #start-button {
          grid-area: 1 / 5 / auto / auto;
          width: 100%;
        }
        .raise:hover:not(disabled){
          transform: scale(1.01);
        }
        .raise:focus:not(disabled) {
          transform: scale(1.01);
          outline: 1px solid #000000;
        }
        #input-form sl-input {
          margin-right: 10px;
        }
        #input-form sl-input::part(base) {
          border: 1px solid #e5e5e5;
          border-radius: var(--input-border-radius);
          color: var(--font-color);
          width: 28em;
          font-size: 14px;
          height: 3em;
        }

        #input-form sl-input::part(input) {
          height: 3em;
        }

        #input-form .error::part(base){
          border-color: #eb5757;
          --sl-input-focus-ring-color: #eb575770;
          --sl-focus-ring-width: 3px;
          --sl-focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
          --sl-input-border-color-focus: #eb5757ac;
        }

        .error-message {
          color: var(--error-color);
          font-size: var(--small-font-size);
          margin-top: 6px;
        }

        #input-form .navigation::part(base) {
          background-color: var(--font-color);
          color: white;
          font-size: 14px;
          height: 3em;
          min-height: unset;
          border-radius: 50px;
        }

        #input-form .navigation::part(label){
          display: flex;
          align-items: center;
        }

        #input-block {
          display: flex;
          flex-direction: column;
          flex: 0.8 1 0%;
          width: 100%;
        }
        #demo {
          font-size: 12px;
          color: var(--font-color);
          margin: 0;
          grid-area: 2 / 1 / auto / 2;
          place-self: start;
        }
        #demo-action {
          margin: 0;
          text-decoration: underline;
          font-weight: bold;
          background: none;
          border: none;
          padding: 0;
          font-size: 1em;
          margin-left: 1px;
          color: var(--font-color);
        }
        #demo-action:hover{
          cursor: pointer;
        }
        #home-header {
          max-width: 498px;
          line-height: 48px;
          letter-spacing: -0.015em;
          margin-bottom: 20px;
          font-size: var(--title-font-size);
        }
        /* 640px - 1023px */
        ${he(g`
          #home-block {
            padding-left: 4.5em;
            background: url(/assets/new/Hero1024_withmani.png);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #wrapper {
            width: 825px;
          }
          #content-grid {
            column-gap: 1em;
          }
        `)}
        /* 480px - 639px */
        ${Ot(g`
          #home-block {
            padding: 1.5em;
            padding-top: 4em;
            padding-bottom: 6em;
            background: url(/assets/new/Hero480_withmani.jpg);
            background-position: center bottom;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #wrapper {
            width: 530px;
          }
          .intro-grid-item p {
            width: 13em;
          }
          #input-area {
            width: 100%;
            column-gap: 10px;
          }
          #input-and-error {
            margin-right: 10px;
            width: 100%;
          }
          sl-input {
            width: 100%;
            margin-right: 10px;
          }
          #input-form sl-input::part(base){
            width: 100%;
          }
          #input-form {
            width: 100%;
          }
          #home-header{
            font-size: 40px;
          }
          #input-form .navigation::part(base) {
            width: 8em;
          }
          #demo {
            grid-area: 2 / 1 / auto / 3;
          }
        `)}

        @media (min-width: 480px) and (max-width: 580px) {
          #wrapper {
            width: 400px;
          }
          #input-area {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* < 480px */
        @media (max-width: 480px) {
          #home-block {
            padding: 1em;
            padding-top: 4em;
            padding-bottom: 2em;
            background: url(/assets/new/Hero480_withmani.jpg);
            background-position: center bottom;
            background-size: cover;
            background-repeat: no-repeat;
          }
          #wrapper {
            width: 400px;
          }
          #home-header {
            font-size: 32px;
            line-height: 36px;
          }
          #content-grid {
            display: flex;
            flex-direction: column;
            row-gap: 1em;
          }
          #input-and-error{
            width: 100%;
          }
          sl-input {
            width: 100%;
          }
          #input-form sl-input::part(base){
            width: 100%;
          }
          #input-area {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 5px;
          }
          #input-header-holder img {
            display: none;
          }
          #input-form {
            width: 100%;
          }
          .grid-item-header {
            font-size: 20px;
          }
          #input-header {
            font-size: 20px;
          }
          #input-form .navigation::part(base) {
            width: 8em;
          }
        }
        @media (max-width: 415px) {
          #wrapper {
            width: 300px;
          }
        }
        @media (min-width: 640px) and (max-width: 955px) {
          #home-block {
            background-position: center;
          }
          #wrapper {
            width: 600px;
          }
        }

        /*1024px - 1365px*/
        ${pe(g`
            #home-block {
              background: url(/assets/new/Hero1366_withmani.png);
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
        `)}
          /* > 1920 */
        ${Qt(g`
            #wrapper {
              width: 1160px;
            }
        `)}
      `]}async firstUpdated(){const t=sessionStorage.getItem("ref");sessionStorage.clear(),t&&sessionStorage.setItem("ref",t),dd();const o=new URLSearchParams(location.search).get("site");o&&(this.siteURL=o.trim(),await this.analyzeSite()),F("landing-page-loaded",D.StartProcess)}handleURL(t){t&&(this.siteURL=t.target.value.trim()),_i(this.siteURL)?this.disableStart=!1:this.disableStart=!0}async start(t){t.preventDefault(),await this.analyzeSite()}async analyzeSite(){var t,e;if(this.siteURL!==Nr&&sessionStorage.setItem("demoURL",JSON.stringify(!1)),this.siteURL){this.gettingManifest=!0,this.siteURL=Ps(this.siteURL);const o=_i(this.siteURL);F("top.entered_link_testing_started",D.ProcessCheckpoint,{url:this.siteURL,valid:o}),o?(sessionStorage.getItem("uid")&&sessionStorage.removeItem("uid"),Et.go(`/reportcard?site=${this.siteURL}`)):(this.errorMessage=U.input.home.error.invalidURL,this.errorGettingURL=!0,await this.updateComplete,(e=(t=this.shadowRoot)==null?void 0:t.querySelector(".error-message"))==null||e.focus()),setTimeout(()=>this.gettingManifest=!1,100)}}updateProgress(t){t&&t.progress[0]&&t.progress[0].items[0]&&(t.progress[0].items[0].done=et.DONE,ed(t))}placeDemoURL(){sessionStorage.setItem("demoURL",JSON.stringify(!0)),F("top.DemoURL_clicked",D.ProcessCheckpoint),this.siteURL=Nr;let t=this.shadowRoot.getElementById("input-box");t.value=this.siteURL,this.analyzeSite()}render(){return b`
      <app-header part="header" .page=${"home"}></app-header>
      <main>
        <div id="home-block">
          <div id="wrapper">
            <h1 id="home-header" slot="hero-container">
              Helping developers build and publish PWAs
            </h1>
            <section id="content-grid" slot="grid-container">
              <div class="intro-grid-item">
                <div class="grid-item-header">
                  <a @click=${()=>F("top.PWAStarter_clicked",D.ProcessCheckpoint)} href="https://docs.pwabuilder.com/#/starter/quick-start" target="_blank" rel="noopener" aria-label="Start a new pwa, will open in separate tab">Start a new PWA</a>
                  <img src="/assets/new/arrow.svg" alt="arrow"/>

                </div>
                <p>
                  Looking to build a new Progressive Web App? Checkout all the documentation here.
                </p>
              </div>

              <div class="intro-grid-item">
                <div class="grid-item-header">
                  <a @click=${()=>F("home.top.PWAStudio_clicked",D.ProcessCheckpoint)} href="https://aka.ms/install-pwa-studio" target="_blank" rel="noopener" aria-label="Use dev tools, will open a separate tab">Use dev tools</a>
                  <img src="/assets/new/arrow.svg" alt="arrow"/>
                </div>
                <p>
                  Use our VS Code extension to create, improve, and package your PWA directly in your code editor.
                </p>
              </div>
            </section>

            <form id="input-form" slot="input-container" @submit="${t=>this.start(t)}">
              <div id="input-block" role="region">
                <div id="input-header-holder">
                  <h2 id="input-header">Ship your PWA to app stores</h2>
                  <img title="Windows" src="/assets/windows_icon.svg" alt="Windows" />
                  <img title="iOS" src="/assets/apple_icon.svg" alt="iOS" />
                  <img title="Android" src="/assets/android_icon_full.svg" alt="Android" />
                  <img title="Meta Quest" src="/assets/meta_icon.svg" alt="Meta Quest" />
                </div>
                <div id="input-area">
                  <div id="input-and-error">
                    <sl-input slot="input-container" type="text" id="input-box" placeholder="Enter the URL to your PWA" name="url-input"
                      class="${R({error:this.errorGettingURL})}" aria-labelledby="input-header" @input="${t=>this.handleURL(t)}">
                    </sl-input>

                    ${this.errorMessage&&this.errorMessage.length>0?b`<span role="alert" aria-live="polite" class="error-message">${this.errorMessage}</span>`:null}
                  </div>

                  <sl-button
                    id="start-button"
                    type="submit"
                    class="navigation raise"
                    ?loading="${this.gettingManifest}"
                    ?disabled="${this.disableStart}"
                    @click="${t=>this.start(t)}"
                    aria-label="Start your pwa, will redirect to testing page">Start</sl-button>
                  <p id="demo">Try a <button id="demo-action" aria-label="click here for demo url, will redirect to testing page" @click=${()=>this.placeDemoURL()}>demo url</button></p>
                </div>

              </div>
            </form>
          </div>
        </div>
        <companies-packaged></companies-packaged>
        <resource-hub></resource-hub>
        <success-stories></success-stories>
        <community-hub></community-hub>
      </main>
    `}};Ue([x()],ce.prototype,"siteURL",2);Ue([x()],ce.prototype,"gettingManifest",2);Ue([x()],ce.prototype,"errorGettingURL",2);Ue([x()],ce.prototype,"errorMessage",2);Ue([x()],ce.prototype,"disableStart",2);ce=Ue([dt("app-home")],ce);const Nr="https://webboard.app";var yd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,_d=(t,e,o,i)=>{for(var r=i>1?void 0:i?wd(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&yd(e,o,r),r};let Hr=class extends B{static get styles(){return g`
      footer {
        /*temp color*/
        background: var(--font-color);
        color: #ffffff;
        fill: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 37px;
        padding-right: 37px;
        font-weight: 700;
        font-size: var(--footer-font-size);
      }


      sl-icon {
        font-size: var(--font-size);
        color: #ffffff;
        pointer-events: none;
      }

      span {
        max-width: 672px;
        display: block;
      }

      #icons {
        width: 8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #links {
        margin-top: 8px;
      }

      #links a {
        margin-right: 12px;
        color: #ffffff;
      }

      #links a:visited {
        color: #ffffff;
      }

      @media screen and (-ms-high-contrast: black-on-white) {
          /* All high contrast styling rules */
          sl-icon {
            color: var(--font-color);
          }
      } 

      ${Qt(g`
          footer {
            justify-content: center;
          }

          /* 30em here to line up with rest of
          layout at this size */
          #footer-top {
            margin-right: 30em;
          }
        `)}

      ${Ot(g`
          footer {
            flex-direction: column;
          }

          #footer-top {
            align-items: center;
            text-align: center;
            display: flex;
            flex-direction: column;
          }

          #links {
            margin-top: 30px;
            margin-bottom: 30px;
          }

          #icons {
            color: #ffffff;
            width: 10em;
          }

          #icons a {
            margin-right: 46px;
          }

          #icons sl-icon {
            font-size: 27px;
            color: #ffffff;
          }
        `)}

      ${Yt(g`
        footer {
          align-items: center;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        #icons {
          margin-top: 10px;
        }
      `)}
    `}constructor(){super()}render(){return b`
      <footer>
        <div id="footer-top">
          <span
            >PWABuilder was founded by Microsoft as a community guided, open
            source project to help move PWA adoption forward.</span
          >

          <div id="links">
            <a
              target="_blank"
              rel="noopener"
              href="https://privacy.microsoft.com/en-us/privacystatement"
              @click=${()=>F("footer.privacy_policy_clicked",D.ProcessCheckpoint)}
              >Our Privacy Statement</a
            >
            <a
              target="_blank"
              rel="noopener"
              href="https://go.microsoft.com/fwlink/?linkid=2259814"
              @click=${()=>F("footer.consumer_health_policy_clicked",D.ProcessCheckpoint)}
              >Consumer Health Privacy</a
            >
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
              @click=${()=>F("footer.terms_of_use_clicked",D.ProcessCheckpoint)}
              >Terms of Use</a
            >
          </div>
        </div>

        <div id="icons">
          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://github.com/pwa-builder/PWABuilder"
            aria-label="Contribute to our Github, will open in separate tab"
            @click=${()=>F("footer.github_clicked",D.ProcessCheckpoint)}
          >
            <span title="Contribute to our Github"><sl-icon name="github" role="presentation"></sl-icon></span>
          </a>

          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://twitter.com/pwabuilder"
            aria-label="Follow us on Twitter, will open in separate tab"
            @click=${()=>F("footer.twitter_clicked",D.ProcessCheckpoint)}
          >
            <span title="Follow us on Twitter"><sl-icon name="twitter" role="presentation"></sl-icon></span>
          </a>

          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://www.youtube.com/c/PWABuilder"
            aria-label="Subscribe to our Youtube, will open in separate tab"
            @click=${()=>F("footer.youtube_clicked",D.ProcessCheckpoint)}
          >
            <span title="Subscribe to our Youtube"><sl-icon name="youtube" role="presentation"></sl-icon></span>
          </a>
        </div>
      </footer>
    `}};Hr=_d([dt("app-footer")],Hr);const xd=g`
  fast-button {
    color: var(--button-font-color);
    height: var(--button-height);
    width: var(--button-width);

    border-radius: var(--button-radius);
    box-shadow: var(--button-shadow);
  }

  fast-button:disabled::part(control) {
    cursor: not-allowed;
  }

  fast-button::part(control) {
    font-size: var(--font-size);
    font-weight: var(--font-bold);
    width: 100%;
    padding-top: var(--padding-vertical);
    padding-bottom: var(--padding-vertical);
    padding-left: var(--padding-horizontal);
    padding-right: var(--padding-horizontal);
  }

  fast-button.secondary {
    background: var(--secondary-color);
    color: var(--font-color);
    border-color: transparent;
  }

  fast-button.alternate {
    background: var(--secondary-color);
    color: #4F3FB6;
    border: 1px solid #4F3FB6;
  }

  fast-button.alternate:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  }

  fast-button[appearance='lightweight'] {
    --accent-foreground-rest: var(--secondary-font-color);
    --accent-foreground-active: var(--font-color);
    --accent-foreground-hover: var(--font-color);
  }
`;g`
  @media screen and (min-width: 480px) and (max-width: 639px) {
    fast-anchor.button {
      font-size: 22px;
      height: 64px;
    }
  }
`;g`
  fast-text-field {
    --accent-fill-rest: var(--secondary-font-color);
    --accent-fill-active: var(--font-color);
    --accent-fill-hover: var(--font-color);
  }

  fast-text-field.error {
    --neutral-foreground-rest: var(--error-color);
    --accent-fill-rest: var(--error-color);
    --accent-fill-active: var(--error-color);
  }
`;g`
  fast-number-field {
    --accent-fill-rest: var(--secondary-font-color);
    --accent-fill-active: var(--secondary-font-color);
    --accent-fill-hover: var(--secondary-font-color);
    --neutral-foreground-rest: var(--font-color);
    --neutral-fill-input-hover: var(--primary-background-color);
    --neutral-fill-input-rest: var(--primary-background-color);
  }

  fast-number-field.error {
    --neutral-foreground-rest: var(--error-color);
    --accent-fill-rest: var(--error-color);
    --accent-fill-active: var(--error-color);
  }
`;g`
  fast-checkbox {
    --neutral-foreground-rest: var(--font-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;g`
  fast-radio {
    --neutral-foreground-rest: var(--font-color);
    --neutral-fill-input-rest: var(--primary-background-color);
    --accent-foreground-cut-rest: var(--primary-backgroud-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;g`
  fast-menu {
  }

  fast-menu-item {
    --neutral-fill-input-rest: var(--primary-background-color);
    --accent-foreground-cut-rest: var(--primary-backgroud-color);
    --accent-fill-rest: var(--link-color);
    --accent-fill-active: var(--link-color);
    --accent-fill-hover: var(--link-color);
  }
`;var kd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,co=(t,e,o,i)=>{for(var r=i>1?void 0:i?$d(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&kd(e,o,r),r};let Ce=class extends B{constructor(){super(),this.type="",this.colorMode="primary",this.appearance="neutral",this.disabled=!1}static get styles(){return[g`
        :host {
          border-radius: var(--button-radius);
          display: block;
          outline: none;
          --font-size: var(--desktop-button-font-size);
          --button-height: 44px;
          --button-height: var(--desktop-button-height);
          --button-square: var(--button-height);
          --button-width: 127px;
          --button-width: var(--button-width);
          --button-font-color: var(--secondary-color);
          --pading-vertical: 0;
          --padding-horizontal: 34px;
        }
      `,xd,g`
        [appearance='lightweight'] {
          box-shadow: none;
        }
        fast-button.link {
          --accent-foreground-active: var(--font-color);
          --accent-foreground-hover: var(--font-color);
          width: auto;
          border-radius: unset;
          box-shadow: none;
          background-color: transparent;
        }
        fast-button.link::part(control) {
          --padding-horizontal: 0;
          width: auto;
        }
        fast-button.round,
        fast-button.square {
          height: var(--button-square);
          width: var(--button-square);
        }
        fast-button.round::part(control),
        fast-button.square::part(control) {
          /* assumption is that the button is 14x21 */
          --padding-horizontal: 15px;
          align-items: center;
          line-height: 0;
        }
        fast-button:focus {
          outline: solid;
          outline-width: 2px;
        }
      `,Ot(g`
          fast-button.navigation {
            --button-width: 100px;
            --button-height: 40px;
            line-height: 28px;
            font-size: 16px;
          }
        `)]}render(){return b`
      <fast-button
        part="underlying-button"
        class="${R({[this.className]:this.className,link:this.appearance==="lightweight",secondary:this.appearance==="outline"})}"
        .appearance="${this.appearance}"
        .type="${this.type}"
        .color="${this.colorMode}"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </fast-button>
    `}};co([d({type:String})],Ce.prototype,"type",2);co([d({type:String})],Ce.prototype,"colorMode",2);co([d({type:String})],Ce.prototype,"appearance",2);co([d({type:Boolean})],Ce.prototype,"disabled",2);Ce=co([dt("app-button")],Ce);var Cd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Js=(t,e,o,i)=>{for(var r=i>1?void 0:i?Sd(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Cd(e,o,r),r};let Si=class extends B{constructor(){super(),this.show=!0}static get styles(){return g`
      #discord-box {
        display: flex;
        align-items: flex-start;
        position: fixed;
        z-index: 1;
        bottom: 0;
        right: 0;
        width: 200px;
        height: 30px;
        background-color: #F5F7FA;
        padding: 10px;
        border-top-left-radius: var(--card-border-radius);
        column-gap: 10px;
        align-items: center;
      }

      #discord-box #logo {
        height: 29px;
        width: 29px;
      }

      #discord-box #close {
        height: 13px;
        width: 13px;
        align-self: flex-start;
      }

      #discord-box p {
        font-size: 14px;
        line-height: 14px;
        color: black;
        font-weight: bold;
      }
      #discord-box a {
        text-decoration: none;
        color: black;
        border-bottom: 1px solid black;
        display: inline-block;
        height: 12px;
      }
      #discord-box a:visited{
        color: black;
      }
      #close-wrapper {
        border: none;
        background-color: transparent;
      }
      #close:hover {
        cursor: pointer;
      }
    `}firstUpdated(){}close(){this.show=!1}render(){return b`
      ${this.show?b`
        <div id="discord-box">
          <img id="logo" src="/assets/images/discord_logo.svg" alt="discord logo"/>
          <p>Want to chat? Join us on <a @click=${()=>F("discord_box_link_clicked",D.ProcessCheckpoint)} href="https://aka.ms/pwabuilderdiscord" target="_blank" rel="noopener" aria-label="Click to join us on Discord">Discord</a></p>
          <button id="close-wrapper" @click=${()=>this.close()} aria-label="discord modal close" type="button"><img id="close" src="/assets/images/Close_desk.png" role="presentation"/></button>
        </div>`:null}
    `}};Js([x()],Si.prototype,"show",2);Si=Js([dt("discord-box")],Si);var Ed=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Ys=(t,e,o,i)=>{for(var r=i>1?void 0:i?Pd(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&Ed(e,o,r),r};let Ei=class extends B{constructor(){super(),this.pageName="",this.handlePageChange=()=>{var t=new URL(location.href),e=t.pathname;this.pageName=e.replace(/^\//,"");const o={reportcard:"Report Card",freetoken:"Free Token",congratulations:"Congratulations",portals:"Portals",imagegenerator:"Image Generator"};this.setPageTitle(o[this.pageName.toLocaleLowerCase()]||"Home")},xc("ref"),window.addEventListener("vaadin-router-location-changed",t=>{var e;window.scrollTo({top:0,behavior:"smooth"}),wc(t.detail.location.pathname,(e=t.detail.location.route)==null?void 0:e.component)})}static get styles(){return g`
      #router-outlet > * {
        width: 100% !important;
      }

      #router-outlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #router-outlet > .entering {
        animation: 160ms fadeIn linear;
      }

      #router-outlet {
        position: relative;
      }

      #wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }

      #content {
        flex: 1;
        background-color: rgb(242, 243, 251);
      }

      @media (min-width: 1920px) {
        #router-outlet {
          background: var(--primary-purple);
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
      /* To handle sidebar & main */
      .container {
        display: grid;
        grid-template-columns: minmax(280px, auto);
        grid-template-areas: 'sidebar main';
        margin: 0 auto;
        height: 100%;
        position: relative;
      }
      .container > .main {
        width: calc(100vw - 280px);
        grid-area: main;
      }
      .container > .sidebar {
        grid-area: sidebar;
      }
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("DOMContentLoaded",this.handlePageChange),window.addEventListener("popstate",this.handlePageChange)}disconnectedCallback(){window.removeEventListener("DOMContentLoaded",this.handlePageChange),window.removeEventListener("popstate",this.handlePageChange),super.disconnectedCallback()}setPageTitle(t){document.getElementById("pageTitle").textContent=t,document.title=`${t} / PWABuilder`}firstUpdated(){var e;new Et((e=this.shadowRoot)==null?void 0:e.querySelector("#router-outlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/reportcard",component:"app-report",action:async()=>{await me(()=>import("./app-report.12b0abbb.js"),["code/app-report.12b0abbb.js","code/test-publish-pane.c297993a.js","code/arrow-link.c8be6c70.js","code/app-report.api.39a3449e.js"])}},{path:"/portals",component:"powerplatform-publish",action:async()=>{await me(()=>import("./powerplatform-publish.8b57e0b7.js"),["code/powerplatform-publish.8b57e0b7.js","code/test-publish-pane.c297993a.js","code/arrow-link.c8be6c70.js"])}},{path:"/imageGenerator",component:"image-generator",action:async()=>{await me(()=>import("./image-generator.6ee0b752.js"),[])}},{path:"/congratulations/:token/:appurl/:appname/:appicon/:username/:email",component:"token-congratulations",action:async()=>{await me(()=>import("./token-congratulations.c87ca8a3.js"),["code/token-congratulations.c87ca8a3.js","code/arrow-link.c8be6c70.js"])}},{path:"/congratulations/:token/:username/:email",component:"token-congratulations",action:async()=>{await me(()=>import("./token-congratulations.c87ca8a3.js"),["code/token-congratulations.c87ca8a3.js","code/arrow-link.c8be6c70.js"])}},{path:"/freeToken",component:"app-token",action:async()=>{await me(()=>import("./app-token.1c91c2dd.js"),["code/app-token.1c91c2dd.js","code/arrow-link.c8be6c70.js","code/app-report.api.39a3449e.js"])}},{path:"(.*)",redirect:"/"}]}])}render(){return b`
      <div id="wrapper">
        <!-- cookie banner not required so long as we only have essential cookies -->
        <!-- <cookie-banner></cookie-banner> -->

        <div id="content">
          <div id="router-outlet"></div>
        </div>
        ${this.pageName==="freeToken"||this.pageName==="congratulations"?null:b`<discord-box></discord-box>`}
        <app-footer></app-footer>
      </div>

    `}};Ys([x()],Ei.prototype,"pageName",2);Ei=Ys([dt("app-index")],Ei);export{D as A,mc as B,G as C,Td as D,Od as E,od as F,y as G,Rd as H,U as I,_c as J,ud as K,_ as L,xd as M,_i as N,Ps as O,Et as R,Yt as a,pe as b,Qt as c,Li as d,dt as e,Sa as f,re as g,Ht as h,g as i,Ti as j,j as k,he as l,Ot as m,d as n,R as o,Id as p,ji as q,F as r,B as s,x as t,Ad as u,Ft as v,Ld as w,b as x,q as y,ld as z};
//# sourceMappingURL=index.655a240e.js.map
