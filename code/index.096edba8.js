const Zs=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};Zs();const en="modulepreload",Wi={},tn="./",mt=function(t,o){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=`${tn}${i}`,i in Wi)return;Wi[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":en,r||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),r)return new Promise((c,l)=>{n.addEventListener("load",c),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=window,Pi=bo.ShadowRoot&&(bo.ShadyCSS===void 0||bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zi=Symbol(),qi=new WeakMap;class jr{constructor(t,o,i){if(this._$cssResult$=!0,i!==zi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(Pi&&t===void 0){const i=o!==void 0&&o.length===1;i&&(t=qi.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&qi.set(o,t))}return t}toString(){return this.cssText}}const dt=e=>new jr(typeof e=="string"?e:e+"",void 0,zi),g=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new jr(o,e,zi)},on=(e,t)=>{Pi?e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):t.forEach(o=>{const i=document.createElement("style"),r=bo.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,e.appendChild(i)})},Bi=Pi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const i of t.cssRules)o+=i.cssText;return dt(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wo;const Co=window,Gi=Co.trustedTypes,rn=Gi?Gi.emptyScript:"",Ki=Co.reactiveElementPolyfillSupport,Yt={toAttribute(e,t){switch(t){case Boolean:e=e?rn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Wr=(e,t)=>t!==e&&(t==t||e==e),qo={attribute:!0,type:String,converter:Yt,reflect:!1,hasChanged:Wr},li="finalized";class gt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var o;this.finalize(),((o=this.h)!==null&&o!==void 0?o:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((o,i)=>{const r=this._$Ep(i,o);r!==void 0&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,o=qo){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(t,o),!o.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,o);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,o,i){return{get(){return this[o]},set(r){const s=this[t];this[o]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||qo}static finalize(){if(this.hasOwnProperty(li))return!1;this[li]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const r of i)this.createProperty(r,o[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)o.unshift(Bi(r))}else t!==void 0&&o.push(Bi(t));return o}static _$Ep(t,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(o=>o(this))}addController(t){var o,i;((o=this._$ES)!==null&&o!==void 0?o:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var o;(o=this._$ES)===null||o===void 0||o.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,o)=>{this.hasOwnProperty(o)&&(this._$Ei.set(o,this[o]),delete this[o])})}createRenderRoot(){var t;const o=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return on(o,this.constructor.elementStyles),o}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(t,o,i){this._$AK(t,i)}_$EO(t,o,i=qo){var r;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Yt).toAttribute(o,i.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,o){var i;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Yt;this._$El=s,this[s]=c.fromAttribute(o,n.type),this._$El=null}}requestUpdate(t,o,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Wr)(this[t],o)?(this._$AL.has(t)||this._$AL.set(t,o),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw o=!1,this._$Ek(),r}o&&this._$AE(i)}willUpdate(t){}_$AE(t){var o;(o=this._$ES)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$EO(i,this[i],o)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}gt[li]=!0,gt.elementProperties=new Map,gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},Ki==null||Ki({ReactiveElement:gt}),((Wo=Co.reactiveElementVersions)!==null&&Wo!==void 0?Wo:Co.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bo;const So=window,wt=So.trustedTypes,Yi=wt?wt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ci="$lit$",je=`lit$${(Math.random()+"").slice(9)}$`,qr="?"+je,sn=`<${qr}>`,st=document,Xt=()=>st.createComment(""),Jt=e=>e===null||typeof e!="object"&&typeof e!="function",Br=Array.isArray,nn=e=>Br(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Go=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xi=/-->/g,Ji=/>/g,Ze=RegExp(`>|${Go}(?:([^\\s"'>=/]+)(${Go}*=${Go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qi=/'/g,Zi=/"/g,Gr=/^(?:script|style|textarea|title)$/i,an=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),b=an(1),me=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),er=new WeakMap,tt=st.createTreeWalker(st,129,null,!1);function Kr(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yi!==void 0?Yi.createHTML(t):t}const ln=(e,t)=>{const o=e.length-1,i=[];let r,s=t===2?"<svg>":"",n=Nt;for(let c=0;c<o;c++){const l=e[c];let u,h,p=-1,m=0;for(;m<l.length&&(n.lastIndex=m,h=n.exec(l),h!==null);)m=n.lastIndex,n===Nt?h[1]==="!--"?n=Xi:h[1]!==void 0?n=Ji:h[2]!==void 0?(Gr.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=Ze):h[3]!==void 0&&(n=Ze):n===Ze?h[0]===">"?(n=r!=null?r:Nt,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?Ze:h[3]==='"'?Zi:Qi):n===Zi||n===Qi?n=Ze:n===Xi||n===Ji?n=Nt:(n=Ze,r=void 0);const f=n===Ze&&e[c+1].startsWith("/>")?" ":"";s+=n===Nt?l+sn:p>=0?(i.push(u),l.slice(0,p)+ci+l.slice(p)+je+f):l+je+(p===-2?(i.push(void 0),c):f)}return[Kr(e,s+(e[o]||"<?>")+(t===2?"</svg>":"")),i]};class Qt{constructor({strings:t,_$litType$:o},i){let r;this.parts=[];let s=0,n=0;const c=t.length-1,l=this.parts,[u,h]=ln(t,o);if(this.el=Qt.createElement(u,i),tt.currentNode=this.el.content,o===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(r=tt.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const m of r.getAttributeNames())if(m.endsWith(ci)||m.startsWith(je)){const f=h[n++];if(p.push(m),f!==void 0){const v=r.getAttribute(f.toLowerCase()+ci).split(je),w=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:w[2],strings:v,ctor:w[1]==="."?dn:w[1]==="?"?hn:w[1]==="@"?pn:Do})}else l.push({type:6,index:s})}for(const m of p)r.removeAttribute(m)}if(Gr.test(r.tagName)){const p=r.textContent.split(je),m=p.length-1;if(m>0){r.textContent=wt?wt.emptyScript:"";for(let f=0;f<m;f++)r.append(p[f],Xt()),tt.nextNode(),l.push({type:2,index:++s});r.append(p[m],Xt())}}}else if(r.nodeType===8)if(r.data===qr)l.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(je,p+1))!==-1;)l.push({type:7,index:s}),p+=je.length-1}s++}}static createElement(t,o){const i=st.createElement("template");return i.innerHTML=t,i}}function _t(e,t,o=e,i){var r,s,n,c;if(t===me)return t;let l=i!==void 0?(r=o._$Co)===null||r===void 0?void 0:r[i]:o._$Cl;const u=Jt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(e),l._$AT(e,o,i)),i!==void 0?((n=(c=o)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=l:o._$Cl=l),l!==void 0&&(t=_t(e,l._$AS(e,t.values),l,i)),t}class cn{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var o;const{el:{content:i},parts:r}=this._$AD,s=((o=t==null?void 0:t.creationScope)!==null&&o!==void 0?o:st).importNode(i,!0);tt.currentNode=s;let n=tt.nextNode(),c=0,l=0,u=r[0];for(;u!==void 0;){if(c===u.index){let h;u.type===2?h=new oo(n,n.nextSibling,this,t):u.type===1?h=new u.ctor(n,u.name,u.strings,this,t):u.type===6&&(h=new fn(n,this,t)),this._$AV.push(h),u=r[++l]}c!==(u==null?void 0:u.index)&&(n=tt.nextNode(),c++)}return tt.currentNode=st,s}v(t){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,o),o+=i.strings.length-2):i._$AI(t[o])),o++}}class oo{constructor(t,o,i,r){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,o;return(o=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&o!==void 0?o:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=_t(this,t,o),Jt(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):nn(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&Jt(this._$AH)?this._$AA.nextSibling.data=t:this.$(st.createTextNode(t)),this._$AH=t}g(t){var o;const{values:i,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Qt.createElement(Kr(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===s)this._$AH.v(i);else{const n=new cn(s,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let o=er.get(t.strings);return o===void 0&&er.set(t.strings,o=new Qt(t)),o}T(t){Br(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const s of t)r===o.length?o.push(i=new oo(this.k(Xt()),this.k(Xt()),this,this.options)):i=o[r],i._$AI(s),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(t=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var o;this._$AM===void 0&&(this._$Cp=t,(o=this._$AP)===null||o===void 0||o.call(this,t))}}class Do{constructor(t,o,i,r,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=o,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,o=this,i,r){const s=this.strings;let n=!1;if(s===void 0)t=_t(this,t,o,0),n=!Jt(t)||t!==this._$AH&&t!==me,n&&(this._$AH=t);else{const c=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=_t(this,c[i+l],o,l),u===me&&(u=this._$AH[l]),n||(n=!Jt(u)||u!==this._$AH[l]),u===j?t=j:t!==j&&(t+=(u!=null?u:"")+s[l+1]),this._$AH[l]=u}n&&!r&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class dn extends Do{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const un=wt?wt.emptyScript:"";class hn extends Do{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,un):this.element.removeAttribute(this.name)}}class pn extends Do{constructor(t,o,i,r,s){super(t,o,i,r,s),this.type=5}_$AI(t,o=this){var i;if((t=(i=_t(this,t,o,0))!==null&&i!==void 0?i:j)===me)return;const r=this._$AH,s=t===j&&r!==j||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==j&&(r===j||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o,i;typeof this._$AH=="function"?this._$AH.call((i=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class fn{constructor(t,o,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}}const tr=So.litHtmlPolyfillSupport;tr==null||tr(Qt,oo),((Bo=So.litHtmlVersions)!==null&&Bo!==void 0?Bo:So.litHtmlVersions=[]).push("2.8.0");const mn=(e,t,o)=>{var i,r;const s=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:t;let n=s._$litPart$;if(n===void 0){const c=(r=o==null?void 0:o.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new oo(t.insertBefore(Xt(),c),c,void 0,o!=null?o:{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ko,Yo;class B extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,o;const i=super.createRenderRoot();return(t=(o=this.renderOptions).renderBefore)!==null&&t!==void 0||(o.renderBefore=i.firstChild),i}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mn(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return me}}B.finalized=!0,B._$litElement$=!0,(Ko=globalThis.litElementHydrateSupport)===null||Ko===void 0||Ko.call(globalThis,{LitElement:B});const or=globalThis.litElementPolyfillSupport;or==null||or({LitElement:B});((Yo=globalThis.litElementVersions)!==null&&Yo!==void 0?Yo:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=e=>t=>typeof t=="function"?((o,i)=>(customElements.define(o,i),i))(e,t):((o,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(n){customElements.define(o,n)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},bn=(e,t,o)=>{t.constructor.createProperty(o,e)};function d(e){return(t,o)=>o!==void 0?bn(e,t,o):gn(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e){return d({...e,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=({finisher:e,descriptor:t})=>(o,i)=>{var r;if(i===void 0){const s=(r=o.originalKey)!==null&&r!==void 0?r:o.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(o.key)}:{...o,key:s};return e!=null&&(n.finisher=function(c){e(c,s)}),n}{const s=o.constructor;t!==void 0&&Object.defineProperty(o,i,t(i)),e==null||e(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e,t){return vn({descriptor:o=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xo;((Xo=window.HTMLSlotElement)===null||Xo===void 0?void 0:Xo.prototype.assignedElements)!=null;function Eo(e){return e=e||[],Array.isArray(e)?e:[e]}function ke(e){return`[Vaadin.Router] ${e}`}function yn(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Po="module",zo="nomodule",di=[Po,zo];function ir(e){if(!e.match(/.+\.[m]?js$/))throw new Error(ke(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Yr(e){if(!e||!xe(e.path))throw new Error(ke('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,o=["component","redirect","bundle"];if(!nt(e.action)&&!Array.isArray(e.children)&&!nt(e.children)&&!Ao(t)&&!o.some(i=>xe(e[i])))throw new Error(ke(`Expected route config "${e.path}" to include either "${o.join('", "')}" or "action" function but none found.`));if(t)if(xe(t))ir(t);else if(di.some(i=>i in t))di.forEach(i=>i in t&&ir(t[i]));else throw new Error(ke('Expected route bundle to include either "'+zo+'" or "'+Po+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(ke(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function rr(e){Eo(e).forEach(t=>Yr(t))}function sr(e,t){let o=document.head.querySelector('script[src="'+e+'"][async]');return o||(o=document.createElement("script"),o.setAttribute("src",e),t===Po?o.setAttribute("type",Po):t===zo&&o.setAttribute(zo,""),o.async=!0),new Promise((i,r)=>{o.onreadystatechange=o.onload=s=>{o.__dynamicImportLoaded=!0,i(s)},o.onerror=s=>{o.parentNode&&o.parentNode.removeChild(o),r(s)},o.parentNode===null?document.head.appendChild(o):o.__dynamicImportLoaded&&i()})}function wn(e){return xe(e)?sr(e):Promise.race(di.filter(t=>t in e).map(t=>sr(e[t],t)))}function Kt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Ao(e){return typeof e=="object"&&!!e}function nt(e){return typeof e=="function"}function xe(e){return typeof e=="string"}function Xr(e){const t=new Error(ke(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const bt=new class{};function _n(e){const t=e.port,o=e.protocol,s=o==="http:"&&t==="80"||o==="https:"&&t==="443"?e.hostname:e.host;return`${o}//${s}`}function nr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const o=e.composedPath?e.composedPath():e.path||[];for(let c=0;c<o.length;c++){const l=o[c];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){t=l;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||_n(t))!==window.location.origin)return;const{pathname:r,search:s,hash:n}=t;Kt("go",{pathname:r,search:s,hash:n})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const xn={activate(){window.document.addEventListener("click",nr)},inactivate(){window.document.removeEventListener("click",nr)}},kn=/Trident/.test(navigator.userAgent);kn&&!nt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var o=document.createEvent("Event");return o.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),o.state=t.state||null,o},window.PopStateEvent.prototype=window.Event.prototype);function ar(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:o,hash:i}=window.location;Kt("go",{pathname:t,search:o,hash:i})}const $n={activate(){window.addEventListener("popstate",ar)},inactivate(){window.removeEventListener("popstate",ar)}};var St=os,Cn=Ai,Sn=An,En=Zr,Pn=ts,Jr="/",Qr="./",zn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ai(e,t){for(var o=[],i=0,r=0,s="",n=t&&t.delimiter||Jr,c=t&&t.delimiters||Qr,l=!1,u;(u=zn.exec(e))!==null;){var h=u[0],p=u[1],m=u.index;if(s+=e.slice(r,m),r=m+h.length,p){s+=p[1],l=!0;continue}var f="",v=e[r],w=u[2],A=u[3],$=u[4],z=u[5];if(!l&&s.length){var O=s.length-1;c.indexOf(s[O])>-1&&(f=s[O],s=s.slice(0,O))}s&&(o.push(s),s="",l=!1);var H=f!==""&&v!==void 0&&v!==f,F=z==="+"||z==="*",N=z==="?"||z==="*",Z=f||n,ie=A||$;o.push({name:w||i++,prefix:f,delimiter:Z,optional:N,repeat:F,partial:H,pattern:ie?Tn(ie):"[^"+Ne(Z)+"]+?"})}return(s||r<e.length)&&o.push(s+e.substr(r)),o}function An(e,t){return Zr(Ai(e,t))}function Zr(e){for(var t=new Array(e.length),o=0;o<e.length;o++)typeof e[o]=="object"&&(t[o]=new RegExp("^(?:"+e[o].pattern+")$"));return function(i,r){for(var s="",n=r&&r.encode||encodeURIComponent,c=0;c<e.length;c++){var l=e[c];if(typeof l=="string"){s+=l;continue}var u=i?i[l.name]:void 0,h;if(Array.isArray(u)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(u.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var p=0;p<u.length;p++){if(h=n(u[p],l),!t[c].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');s+=(p===0?l.prefix:l.delimiter)+h}continue}if(typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(h=n(String(u),l),!t[c].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+h+'"');s+=l.prefix+h;continue}if(l.optional){l.partial&&(s+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return s}}function Ne(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Tn(e){return e.replace(/([=!:$/()])/g,"\\$1")}function es(e){return e&&e.sensitive?"":"i"}function Ln(e,t){if(!t)return e;var o=e.source.match(/\((?!\?)/g);if(o)for(var i=0;i<o.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function On(e,t,o){for(var i=[],r=0;r<e.length;r++)i.push(os(e[r],t,o).source);return new RegExp("(?:"+i.join("|")+")",es(o))}function Rn(e,t,o){return ts(Ai(e,o),t,o)}function ts(e,t,o){o=o||{};for(var i=o.strict,r=o.start!==!1,s=o.end!==!1,n=Ne(o.delimiter||Jr),c=o.delimiters||Qr,l=[].concat(o.endsWith||[]).map(Ne).concat("$").join("|"),u=r?"^":"",h=e.length===0,p=0;p<e.length;p++){var m=e[p];if(typeof m=="string")u+=Ne(m),h=p===e.length-1&&c.indexOf(m[m.length-1])>-1;else{var f=m.repeat?"(?:"+m.pattern+")(?:"+Ne(m.delimiter)+"(?:"+m.pattern+"))*":m.pattern;t&&t.push(m),m.optional?m.partial?u+=Ne(m.prefix)+"("+f+")?":u+="(?:"+Ne(m.prefix)+"("+f+"))?":u+=Ne(m.prefix)+"("+f+")"}}return s?(i||(u+="(?:"+n+")?"),u+=l==="$"?"$":"(?="+l+")"):(i||(u+="(?:"+n+"(?="+l+"))?"),h||(u+="(?="+n+"|"+l+")")),new RegExp(u,es(o))}function os(e,t,o){return e instanceof RegExp?Ln(e,t):Array.isArray(e)?On(e,t,o):Rn(e,t,o)}St.parse=Cn;St.compile=Sn;St.tokensToFunction=En;St.tokensToRegExp=Pn;const{hasOwnProperty:In}=Object.prototype,ui=new Map;ui.set("|false",{keys:[],pattern:/(?:)/});function lr(e){try{return decodeURIComponent(e)}catch{return e}}function Mn(e,t,o,i,r){o=!!o;const s=`${e}|${o}`;let n=ui.get(s);if(!n){const u=[];n={keys:u,pattern:St(e,u,{end:o,strict:e===""})},ui.set(s,n)}const c=n.pattern.exec(t);if(!c)return null;const l=Object.assign({},r);for(let u=1;u<c.length;u++){const h=n.keys[u-1],p=h.name,m=c[u];(m!==void 0||!In.call(l,p))&&(h.repeat?l[p]=m?m.split(h.delimiter).map(lr):[]:l[p]=m&&lr(m))}return{path:c[0],keys:(i||[]).concat(n.keys),params:l}}function is(e,t,o,i,r){let s,n,c=0,l=e.path||"";return l.charAt(0)==="/"&&(o&&(l=l.substr(1)),o=!0),{next(u){if(e===u)return{done:!0};const h=e.__children=e.__children||e.children;if(!s&&(s=Mn(l,t,!h,i,r),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!n){const m=h[c];m.parent=e;let f=s.path.length;f>0&&t.charAt(f)==="/"&&(f+=1),n=is(m,t.substr(f),o,s.keys,s.params)}const p=n.next(u);if(!p.done)return{done:!1,value:p.value};n=null,c++}return{done:!0}}}}function Un(e){if(nt(e.route.action))return e.route.action(e)}function Dn(e,t){let o=t;for(;o;)if(o=o.parent,o===e)return!0;return!1}function Fn(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const o=(e.route||{}).path;return o&&(t+=` Resolution had failed on route: '${o}'`),t}function Vn(e,t){const{route:o,path:i}=t;if(o&&!o.__synthetic){const r={path:i,route:o};if(!e.chain)e.chain=[];else if(o.parent){let s=e.chain.length;for(;s--&&e.chain[s].route&&e.chain[s].route!==o.parent;)e.chain.pop()}e.chain.push(r)}}class Zt{constructor(t,o={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=o.baseUrl||"",this.errorHandler=o.errorHandler,this.resolveRoute=o.resolveRoute||Un,this.context=Object.assign({resolver:this},o.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){rr(t);const o=[...Eo(t)];this.root.__children=o}addRoutes(t){return rr(t),this.root.__children.push(...Eo(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const o=Object.assign({},this.context,xe(t)?{pathname:t}:t),i=is(this.root,this.__normalizePathname(o.pathname),this.baseUrl),r=this.resolveRoute;let s=null,n=null,c=o;function l(u,h=s.value.route,p){const m=p===null&&s.value.route;return s=n||i.next(m),n=null,!u&&(s.done||!Dn(h,s.value.route))?(n=s,Promise.resolve(bt)):s.done?Promise.reject(Xr(o)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},o,s.value),Vn(c,s.value),Promise.resolve(r(c)).then(f=>f!=null&&f!==bt?(c.result=f.result||f,c):l(u,h,f)))}return o.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(u=>{const h=Fn(c);if(u?console.warn(h):u=new Error(h),u.context=u.context||c,u instanceof DOMException||(u.code=u.code||500),this.errorHandler)return c.result=this.errorHandler(u),c;throw u})}static __createUrl(t,o){return new URL(t,o)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const o=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,o).href;if(i.slice(0,o.length)===o)return i.slice(o.length)}}Zt.pathToRegexp=St;const{pathToRegexp:cr}=Zt,dr=new Map;function rs(e,t,o){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(o))for(let r=0;r<o.length;r++){const s=o[r];s.parent=t,rs(e,s,s.__children||s.children)}}function ur(e,t){const o=e.get(t);if(o&&o.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return o&&o[0]}function hr(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Nn(e,t={}){if(!(e instanceof Zt))throw new TypeError("An instance of Resolver is expected");const o=new Map;return(i,r)=>{let s=ur(o,i);if(!s&&(o.clear(),rs(o,e.root,e.root.__children),s=ur(o,i),!s))throw new Error(`Route "${i}" not found`);let n=dr.get(s.fullPath);if(!n){let l=hr(s),u=s.parent;for(;u;){const f=hr(u);f&&(l=f.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),u=u.parent}const h=cr.parse(l),p=cr.tokensToFunction(h),m=Object.create(null);for(let f=0;f<h.length;f++)xe(h[f])||(m[h[f].name]=!0);n={toPath:p,keys:m},dr.set(l,n),s.fullPath=l}let c=n.toPath(r,t)||"/";if(t.stringifyQueryParams&&r){const l={},u=Object.keys(r);for(let p=0;p<u.length;p++){const m=u[p];n.keys[m]||(l[m]=r[m])}const h=t.stringifyQueryParams(l);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let pr=[];function Hn(e){pr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),pr=e}const jn=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Wn=(e,t)=>{const o=()=>{e.removeEventListener("animationend",o),t()};e.addEventListener("animationend",o)};function fr(e,t){return e.classList.add(t),new Promise(o=>{if(jn(e)){const i=e.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${r}`),Wn(e,()=>{e.classList.remove(t),e.removeAttribute("style"),o()})}else e.classList.remove(t),o()})}const qn=256;function Jo(e){return e!=null}function Bn(e){const t=Object.assign({},e);return delete t.next,t}function we({pathname:e="",search:t="",hash:o="",chain:i=[],params:r={},redirectFrom:s,resolver:n},c){const l=i.map(u=>u.route);return{baseUrl:n&&n.baseUrl||"",pathname:e,search:t,hash:o,routes:l,route:c||l.length&&l[l.length-1]||null,params:r,redirectFrom:s,getUrl:(u={})=>yo(Ee.pathToRegexp.compile(ss(l))(Object.assign({},r,u)),n)}}function mr(e,t){const o=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:o}}}function Gn(e,t){t.location=we(e);const o=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[o].element=t,t}function vo(e,t,o){if(nt(e))return e.apply(o,t)}function gr(e,t,o){return i=>{if(i&&(i.cancel||i.redirect))return i;if(o)return vo(o[e],t,o)}}function Kn(e,t){if(!Array.isArray(e)&&!Ao(e))throw new Error(ke(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const o=Eo(e);for(let i=0;i<o.length;i++)Yr(o[i]),t.__children.push(o[i])}function uo(e){if(e&&e.length){const t=e[0].parentNode;for(let o=0;o<e.length;o++)t.removeChild(e[o])}}function yo(e,t){const o=t.__effectiveBaseUrl;return o?t.constructor.__createUrl(e.replace(/^\//,""),o).pathname:e}function ss(e){return e.map(t=>t.path).reduce((t,o)=>o.length?t.replace(/\/$/,"")+"/"+o.replace(/^\//,""):t,"")}class Ee extends Zt{constructor(t,o){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&Zt.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},o)),this.resolveRoute=n=>this.__resolveRoute(n);const s=Ee.NavigationTrigger;Ee.setTriggers.apply(Ee,Object.keys(s).map(n=>s[n])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=we({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const o=t.route;let i=Promise.resolve();nt(o.children)&&(i=i.then(()=>o.children(Bn(t))).then(s=>{!Jo(s)&&!nt(o.children)&&(s=o.children),Kn(s,o)}));const r={redirect:s=>mr(t,s),component:s=>{const n=document.createElement(s);return this.__createdByRouter.set(n,!0),n}};return i.then(()=>{if(this.__isLatestRender(t))return vo(o.action,[t,r],o)}).then(s=>{if(Jo(s)&&(s instanceof HTMLElement||s.redirect||s===bt))return s;if(xe(o.redirect))return r.redirect(o.redirect);if(o.bundle)return wn(o.bundle).then(()=>{},()=>{throw new Error(ke(`Bundle not found: ${o.bundle}. Check if the file name is correct`))})}).then(s=>{if(Jo(s))return s;if(xe(o.component))return r.component(o.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,o=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),o||this.__onNavigationEvent(),this.ready}render(t,o){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},xe(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const n=this.__previousContext;if(s===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=we(s),o&&this.__updateBrowserHistory(s,i===1),Kt("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,n),this.__previousContext=s,this.location;this.__addAppearingContent(s,n);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,n),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw o&&this.__updateBrowserHistory(r),uo(this.__outlet&&this.__outlet.children),this.location=we(Object.assign(r,{resolver:this})),Kt("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(t,o=t){return this.__findComponentContextAfterAllRedirects(o).then(i=>{const s=i!==o?i:t,c=yo(ss(i.chain),i.resolver)===i.pathname,l=(u,h=u.route,p)=>u.next(void 0,h,p).then(m=>m===null||m===bt?c?u:h.parent!==null?l(u,h.parent,m):m:m);return l(i).then(u=>{if(u===null||u===bt)throw Xr(s);return u&&u!==bt&&u!==i?this.__fullyResolveChain(s,u):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const o=t.result;return o instanceof HTMLElement?(Gn(t,o),Promise.resolve(t)):o.redirect?this.__redirect(o.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):o instanceof Error?Promise.reject(o):Promise.reject(new Error(ke(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${yn(o)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(o=>o===this.__previousContext||o===t?o:this.__fullyResolveChain(o))}__runOnBeforeCallbacks(t){const o=this.__previousContext||{},i=o.chain||[],r=t.chain;let s=Promise.resolve();const n=()=>({cancel:!0}),c=l=>mr(t,l);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let l=0;l<Math.min(i.length,r.length)&&!(i[l].route!==r[l].route||i[l].path!==r[l].path&&i[l].element!==r[l].element||!this.__isReusableElement(i[l].element,r[l].element));l=++t.__divergedChainIndex);if(t.__skipAttach=r.length===i.length&&t.__divergedChainIndex==r.length&&this.__isReusableElement(t.result,o.result),t.__skipAttach){for(let l=r.length-1;l>=0;l--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:n},i[l]);for(let l=0;l<r.length;l++)s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:n,redirect:c},r[l]),i[l].element.location=we(t,i[l].route)}else for(let l=i.length-1;l>=t.__divergedChainIndex;l--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:n},i[l])}if(!t.__skipAttach)for(let l=0;l<r.length;l++)l<t.__divergedChainIndex?l<i.length&&i[l].element&&(i[l].element.location=we(t,i[l].route)):(s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:n,redirect:c},r[l]),r[l].element&&(r[l].element.location=we(t,r[l].route)));return s.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,o,i,r){const s=we(o);return t.then(n=>{if(this.__isLatestRender(o))return gr("onBeforeLeave",[s,i,this],r.element)(n)}).then(n=>{if(!(n||{}).redirect)return n})}__runOnBeforeEnterCallbacks(t,o,i,r){const s=we(o,r.route);return t.then(n=>{if(this.__isLatestRender(o))return gr("onBeforeEnter",[s,i,this],r.element)(n)})}__isReusableElement(t,o){return t&&o?this.__createdByRouter.get(t)&&this.__createdByRouter.get(o)?t.localName===o.localName:t===o:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,o,i){if(o>qn)throw new Error(ke(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(o||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(ke(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:o="",hash:i=""},r){if(window.location.pathname!==t||window.location.search!==o||window.location.hash!==i){const s=r?"replaceState":"pushState";window.history[s](null,document.title,t+o+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,o){let i=this.__outlet;for(let r=0;r<t.__divergedChainIndex;r++){const s=o&&o.chain[r].element;if(s)if(s.parentNode===i)t.chain[r].element=s,i=s;else break}return i}__addAppearingContent(t,o){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,o);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==t.result);let r=i;for(let s=t.__divergedChainIndex;s<t.chain.length;s++){const n=t.chain[s].element;n&&(r.appendChild(n),this.__addedByRouter.set(n,!0),r===i&&this.__appearingContent.push(n),r=n)}}__removeDisappearingContent(){this.__disappearingContent&&uo(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(uo(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,o){if(!!o)for(let i=o.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const r=o.chain[i].element;if(!!r)try{const s=we(t);vo(r.onAfterLeave,[s,{},o.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&uo(r.children)}}}__runOnAfterEnterCallbacks(t){for(let o=t.__divergedChainIndex;o<t.chain.length&&this.__isLatestRender(t);o++){const i=t.chain[o].element||{},r=we(t,t.chain[o].route);vo(i.onAfterEnter,[r,{},t.resolver],i)}}__animateIfNeeded(t){const o=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],s=t.chain;let n;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){n=s[c-1].route.animate;break}if(o&&i&&n){const c=Ao(n)&&n.leave||"leaving",l=Ao(n)&&n.enter||"entering";r.push(fr(o,c)),r.push(fr(i,l))}return Promise.all(r).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:o,search:i,hash:r}=t?t.detail:window.location;xe(this.__normalizePathname(o))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:o,search:i,hash:r},!0))}static setTriggers(...t){Hn(t)}urlForName(t,o){return this.__urlForName||(this.__urlForName=Nn(this)),yo(this.__urlForName(t,o),this)}urlForPath(t,o){return yo(Ee.pathToRegexp.compile(t)(o),this)}static go(t){const{pathname:o,search:i,hash:r}=xe(t)?this.__createUrl(t,"http://a"):t;return Kt("go",{pathname:o,search:i,hash:r})}}const Yn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,wo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xn(){function e(){return!0}return ns(e)}function Jn(){try{return Qn()?!0:Zn()?wo?!ea():!Xn():!1}catch{return!1}}function Qn(){return localStorage.getItem("vaadin.developmentmode.force")}function Zn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ea(){return!!(wo&&Object.keys(wo).map(t=>wo[t]).filter(t=>t.productionMode).length>0)}function ns(e,t){if(typeof e!="function")return;const o=Yn.exec(e.toString());if(o)try{e=new Function(o[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const br=function(e,t){if(window.Vaadin.developmentMode)return ns(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Jn());function ta(){}const oa=function(){if(typeof br=="function")return br(ta)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});oa();Ee.NavigationTrigger={POPSTATE:$n,CLICK:xn};var I=g`
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
`;const hi=new Set,ra=new MutationObserver(cs),vt=new Map;let as=document.documentElement.dir||"ltr",ls=document.documentElement.lang||navigator.language,et;ra.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function sa(...e){e.map(t=>{const o=t.$code.toLowerCase();vt.has(o)?vt.set(o,Object.assign(Object.assign({},vt.get(o)),t)):vt.set(o,t),et||(et=t)}),cs()}function cs(){as=document.documentElement.dir||"ltr",ls=document.documentElement.lang||navigator.language,[...hi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}class na{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){hi.add(this.host)}hostDisconnected(){hi.delete(this.host)}dir(){return`${this.host.dir||as}`.toLowerCase()}lang(){return`${this.host.lang||ls}`.toLowerCase()}getTranslationData(t){var o,i;const r=new Intl.Locale(t.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(i=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",c=vt.get(`${s}-${n}`),l=vt.get(s);return{locale:r,language:s,region:n,primary:c,secondary:l}}exists(t,o){var i;const{primary:r,secondary:s}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[t]||s&&s[t]||o.includeFallback&&et&&et[t])}term(t,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[t])s=i[t];else if(r&&r[t])s=r[t];else if(et&&et[t])s=et[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...o):s}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}}var oe=class extends na{},ds=Object.defineProperty,aa=Object.defineProperties,la=Object.getOwnPropertyDescriptor,ca=Object.getOwnPropertyDescriptors,vr=Object.getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,ua=Object.prototype.propertyIsEnumerable,yr=(e,t,o)=>t in e?ds(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ue=(e,t)=>{for(var o in t||(t={}))da.call(t,o)&&yr(e,o,t[o]);if(vr)for(var o of vr(t))ua.call(t,o)&&yr(e,o,t[o]);return e},io=(e,t)=>aa(e,ca(t)),a=(e,t,o,i)=>{for(var r=i>1?void 0:i?la(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&ds(t,o,r),r},E=class extends B{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,Ue({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},o);return}let r=" (unknown version)",s=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&(s=" v"+i.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${s} has already been registered.`)}};E.version="2.7.0";E.dependencies={};a([d()],E.prototype,"dir",2);a([d()],E.prototype,"lang",2);var us=class extends E{constructor(){super(...arguments),this.localize=new oe(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};us.styles=ia;var Ht=new WeakMap,jt=new WeakMap,Qo=new WeakSet,ho=new WeakMap,ut=class{constructor(e,t){this.handleFormData=o=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!i&&!n&&typeof r=="string"&&r.length>0&&typeof s!="undefined"&&(Array.isArray(s)?s.forEach(c=>{o.formData.append(r,c.toString())}):o.formData.append(r,s.toString()))},this.handleFormSubmit=o=>{var i;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Ht.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ho.set(this.host,[])},this.handleInteraction=o=>{const i=ho.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ue({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){const i=o.getRootNode(),r=o.getAttribute("form");if(r)return i.getElementById(r)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ho.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ho.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ht.has(this.form)?Ht.get(this.form).add(this.host):Ht.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),jt.has(this.form)||(jt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Ht.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),jt.has(this.form)&&(this.form.reportValidity=jt.get(this.form),jt.delete(this.form))),this.form=void 0}setUserInteracted(e,t){t?Qo.add(e):Qo.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&o.setAttribute(i,t.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=Boolean(Qo.has(t)),i=Boolean(t.required);t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Fo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ha=Object.freeze(io(Ue({},Fo),{valid:!1,valueMissing:!0})),pa=Object.freeze(io(Ue({},Fo),{valid:!1,customError:!0})),fa=g`
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
`,Et=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function ma(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var ga=g`
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
`,pi="";function fi(e){pi=e}function ba(e=""){if(!pi){const t=[...document.getElementsByTagName("script")],o=t.find(i=>i.hasAttribute("data-shoelace"));if(o)fi(o.getAttribute("data-shoelace"));else{const i=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";i&&(r=i.getAttribute("src")),fi(r.split("/").slice(0,-1).join("/"))}}return pi.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var va={name:"default",resolver:e=>ba(`assets/icons/${e}.svg`)},ya=va,wr={caret:`
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
  `},wa={name:"system",resolver:e=>e in wr?`data:image/svg+xml,${encodeURIComponent(wr[e])}`:""},_a=wa,xa=[ya,_a],mi=[];function ka(e){mi.push(e)}function $a(e){mi=mi.filter(t=>t!==e)}function _r(e){return xa.find(t=>t.name===e)}function C(e,t){const o=Ue({waitUntilFirstUpdate:!1},t);return(i,r)=>{const{update:s}=i,n=Array.isArray(e)?e:[e];i.update=function(c){n.forEach(l=>{const u=l;if(c.has(u)){const h=c.get(u),p=this[u];h!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,p)}}),s.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Sa=e=>e.strings===void 0,Ea={},Pa=(e,t=Ea)=>e._$AH=t;var Wt=Symbol(),po=Symbol(),Zo,ei=new Map,W=class extends E{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let i;if(t!=null&&t.spriteSheet)return b`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Wt:po}catch{return po}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())!=="svg")return Wt;Zo||(Zo=new DOMParser);const c=Zo.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Wt}catch{return Wt}}connectedCallback(){super.connectedCallback(),ka(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),$a(this)}getUrl(){const e=_r(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=_r(this.library),o=this.getUrl();if(!o){this.svg=null;return}let i=ei.get(o);if(i||(i=this.resolveIcon(o,t),ei.set(o,i)),!this.initialRender)return;const r=await i;if(r===po&&ei.delete(o),o===this.getUrl()){if(Ca(r)){this.svg=r;return}switch(r){case po:case Wt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};W.styles=ga;a([x()],W.prototype,"svg",2);a([d({reflect:!0})],W.prototype,"name",2);a([d()],W.prototype,"src",2);a([d()],W.prototype,"label",2);a([d({reflect:!0})],W.prototype,"library",2);a([C("label")],W.prototype,"handleLabelChange",1);a([C(["name","src","library"])],W.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ti=e=>(...t)=>({_$litDirective$:e,values:t});class Li{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,i){this._$Ct=t,this._$AM=o,this._$Ci=i}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=Ti(class extends Li{constructor(e){var t;if(super(e),e.type!==He.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((o=this.nt)===null||o===void 0)&&o.has(s))&&this.it.add(s);return this.render(t)}const r=e.element.classList;this.it.forEach(s=>{s in t||(r.remove(s),this.it.delete(s))});for(const s in t){const n=!!t[s];n===this.it.has(s)||((i=this.nt)===null||i===void 0?void 0:i.has(s))||(n?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return me}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=Symbol.for(""),za=e=>{if((e==null?void 0:e.r)===hs)return e==null?void 0:e._$litStatic$},To=(e,...t)=>({_$litStatic$:t.reduce((o,i,r)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[r+1],e[0]),r:hs}),xr=new Map,Aa=e=>(t,...o)=>{const i=o.length;let r,s;const n=[],c=[];let l,u=0,h=!1;for(;u<i;){for(l=t[u];u<i&&(s=o[u],(r=za(s))!==void 0);)l+=r+t[++u],h=!0;u!==i&&c.push(s),n.push(l),u++}if(u===i&&n.push(t[i]),h){const p=n.join("$$lit$$");(t=xr.get(p))===void 0&&(n.raw=n,xr.set(p,t=n)),o=c}return e(t,...o)},_o=Aa(b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=e=>e!=null?e:j;var L=class extends E{constructor(){super(...arguments),this.formControlController=new ut(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),o=e.getAttribute("form");return t.getElementById(o)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Et(this,"[default]","prefix","suffix"),this.localize=new oe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Fo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?To`a`:To`button`;return _o`
      <${t}
        part="base"
        class=${R({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:this.type)}
        title=${this.title}
        name=${y(e?void 0:this.name)}
        value=${y(e?void 0:this.value)}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e?this.rel:void 0)}
        role=${y(e?void 0:"button")}
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
      </${t}>
    `}};L.styles=fa;L.dependencies={"sl-icon":W,"sl-spinner":us};a([_(".button")],L.prototype,"button",2);a([x()],L.prototype,"hasFocus",2);a([x()],L.prototype,"invalid",2);a([d()],L.prototype,"title",2);a([d({reflect:!0})],L.prototype,"variant",2);a([d({reflect:!0})],L.prototype,"size",2);a([d({type:Boolean,reflect:!0})],L.prototype,"caret",2);a([d({type:Boolean,reflect:!0})],L.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],L.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],L.prototype,"outline",2);a([d({type:Boolean,reflect:!0})],L.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],L.prototype,"circle",2);a([d()],L.prototype,"type",2);a([d()],L.prototype,"name",2);a([d()],L.prototype,"value",2);a([d()],L.prototype,"href",2);a([d()],L.prototype,"target",2);a([d()],L.prototype,"rel",2);a([d()],L.prototype,"download",2);a([d()],L.prototype,"form",2);a([d({attribute:"formaction"})],L.prototype,"formAction",2);a([d({attribute:"formenctype"})],L.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],L.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],L.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],L.prototype,"formTarget",2);a([C("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);L.define("sl-button");var Ta={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};sa(Ta);var La=g`
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
`,ro=(e="value")=>(t,o)=>{const i=t.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,n,c){var l;const u=i.getPropertyOptions(e),h=typeof u.attribute=="string"?u.attribute:e;if(s===h){const p=u.converter||Yt,f=(typeof p=="function"?p:(l=p==null?void 0:p.fromAttribute)!=null?l:Yt.fromAttribute)(c,u.type);this[e]!==f&&(this[o]=f)}r.call(this,s,n,c)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=Ti(class extends Li{constructor(e){if(super(e),e.type!==He.PROPERTY&&e.type!==He.ATTRIBUTE&&e.type!==He.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Sa(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===me||t===j)return t;const o=e.element,i=e.name;if(e.type===He.PROPERTY){if(t===o[i])return me}else if(e.type===He.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return me}else if(e.type===He.ATTRIBUTE&&o.getAttribute(i)===t+"")return me;return Pa(e),t}});var Y=class extends E{constructor(){super(...arguments),this.formControlController=new ut(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return b`
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
    `}};Y.styles=La;Y.dependencies={"sl-icon":W};a([_('input[type="checkbox"]')],Y.prototype,"input",2);a([x()],Y.prototype,"hasFocus",2);a([d()],Y.prototype,"title",2);a([d()],Y.prototype,"name",2);a([d()],Y.prototype,"value",2);a([d({reflect:!0})],Y.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"checked",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"indeterminate",2);a([ro("checked")],Y.prototype,"defaultChecked",2);a([d({reflect:!0})],Y.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"required",2);a([C("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);a([C(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Y.prototype,"handleStateChange",1);Y.define("sl-checkbox");var Oa=g`
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
`,ps=class extends E{render(){return b` <slot></slot> `}};ps.styles=Oa;function ti(e,t){function o(r){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,c=s.left+n.pageXOffset,l=s.top+n.pageYOffset,u=r.pageX-c,h=r.pageY-l;t!=null&&t.onMove&&t.onMove(u,h)}function i(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&o(t.initialEvent)}var Vo=g`
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
  ${Vo}

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
`,k=class extends E{constructor(){super(...arguments),this.formControlController=new ut(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Et(this,"help-text","label"),this.localize=new oe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,i){this.input.setRangeText(e,t,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,i=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly,s=r&&(typeof this.value=="number"||this.value.length>0);return b`
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
    `}};k.styles=Ra;k.dependencies={"sl-icon":W};a([_(".input__control")],k.prototype,"input",2);a([x()],k.prototype,"hasFocus",2);a([d()],k.prototype,"title",2);a([d({reflect:!0})],k.prototype,"type",2);a([d()],k.prototype,"name",2);a([d()],k.prototype,"value",2);a([ro()],k.prototype,"defaultValue",2);a([d({reflect:!0})],k.prototype,"size",2);a([d({type:Boolean,reflect:!0})],k.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],k.prototype,"pill",2);a([d()],k.prototype,"label",2);a([d({attribute:"help-text"})],k.prototype,"helpText",2);a([d({type:Boolean})],k.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],k.prototype,"disabled",2);a([d()],k.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],k.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],k.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],k.prototype,"passwordVisible",2);a([d({attribute:"no-spin-buttons",type:Boolean})],k.prototype,"noSpinButtons",2);a([d({reflect:!0})],k.prototype,"form",2);a([d({type:Boolean,reflect:!0})],k.prototype,"required",2);a([d()],k.prototype,"pattern",2);a([d({type:Number})],k.prototype,"minlength",2);a([d({type:Number})],k.prototype,"maxlength",2);a([d()],k.prototype,"min",2);a([d()],k.prototype,"max",2);a([d()],k.prototype,"step",2);a([d()],k.prototype,"autocapitalize",2);a([d()],k.prototype,"autocorrect",2);a([d()],k.prototype,"autocomplete",2);a([d({type:Boolean})],k.prototype,"autofocus",2);a([d()],k.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],k.prototype,"spellcheck",2);a([d()],k.prototype,"inputmode",2);a([C("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);a([C("step",{waitUntilFirstUpdate:!0})],k.prototype,"handleStepChange",1);a([C("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1);var Ia=g`
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
`;function fs(e){return Ma(e)}function oi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ma(e){for(let t=e;t;t=oi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=oi(e);t;t=oi(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}function Ua(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null&&fs(e)===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Da(e){var t,o;const i=xo(e),r=(t=i[0])!=null?t:null,s=(o=i[i.length-1])!=null?o:null;return{start:r,end:s}}function xo(e){const t=[];function o(i){i instanceof Element&&(t.push(i),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)),[...i.children].forEach(r=>o(r))}return o(e),t.filter(Ua).sort((i,r)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var Fa=g`
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
`;const qe=Math.min,ne=Math.max,Oo=Math.round,fo=Math.floor,Be=e=>({x:e,y:e}),Va={left:"right",right:"left",bottom:"top",top:"bottom"},Na={start:"end",end:"start"};function gi(e,t,o){return ne(e,qe(t,o))}function Pt(e,t){return typeof e=="function"?e(t):e}function Ge(e){return e.split("-")[0]}function zt(e){return e.split("-")[1]}function ms(e){return e==="x"?"y":"x"}function Oi(e){return e==="y"?"height":"width"}function so(e){return["top","bottom"].includes(Ge(e))?"y":"x"}function Ri(e){return ms(so(e))}function Ha(e,t,o){o===void 0&&(o=!1);const i=zt(e),r=Ri(e),s=Oi(r);let n=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(n=Ro(n)),[n,Ro(n)]}function ja(e){const t=Ro(e);return[bi(e),t,bi(t)]}function bi(e){return e.replace(/start|end/g,t=>Na[t])}function Wa(e,t,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?s:n;default:return[]}}function qa(e,t,o,i){const r=zt(e);let s=Wa(Ge(e),o==="start",i);return r&&(s=s.map(n=>n+"-"+r),t&&(s=s.concat(s.map(bi)))),s}function Ro(e){return e.replace(/left|right|bottom|top/g,t=>Va[t])}function Ba(e){return{top:0,right:0,bottom:0,left:0,...e}}function gs(e){return typeof e!="number"?Ba(e):{top:e,right:e,bottom:e,left:e}}function Io(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function kr(e,t,o){let{reference:i,floating:r}=e;const s=so(t),n=Ri(t),c=Oi(n),l=Ge(t),u=s==="y",h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,m=i[c]/2-r[c]/2;let f;switch(l){case"top":f={x:h,y:i.y-r.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:p};break;case"left":f={x:i.x-r.width,y:p};break;default:f={x:i.x,y:i.y}}switch(zt(t)){case"start":f[n]-=m*(o&&u?-1:1);break;case"end":f[n]+=m*(o&&u?-1:1);break}return f}const Ga=async(e,t,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:n}=o,c=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let u=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:p}=kr(u,i,l),m=i,f={},v=0;for(let w=0;w<c.length;w++){const{name:A,fn:$}=c[w],{x:z,y:O,data:H,reset:F}=await $({x:h,y:p,initialPlacement:i,placement:m,strategy:r,middlewareData:f,rects:u,platform:n,elements:{reference:e,floating:t}});if(h=z!=null?z:h,p=O!=null?O:p,f={...f,[A]:{...f[A],...H}},F&&v<=50){v++,typeof F=="object"&&(F.placement&&(m=F.placement),F.rects&&(u=F.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:r}):F.rects),{x:h,y:p}=kr(u,m,l)),w=-1;continue}}return{x:h,y:p,placement:m,strategy:r,middlewareData:f}};async function Ii(e,t){var o;t===void 0&&(t={});const{x:i,y:r,platform:s,rects:n,elements:c,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:m=!1,padding:f=0}=Pt(t,e),v=gs(f),A=c[m?p==="floating"?"reference":"floating":p],$=Io(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(A)))==null||o?A:A.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:u,rootBoundary:h,strategy:l})),z=p==="floating"?{...n.floating,x:i,y:r}:n.reference,O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),H=await(s.isElement==null?void 0:s.isElement(O))?await(s.getScale==null?void 0:s.getScale(O))||{x:1,y:1}:{x:1,y:1},F=Io(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:z,offsetParent:O,strategy:l}):z);return{top:($.top-F.top+v.top)/H.y,bottom:(F.bottom-$.bottom+v.bottom)/H.y,left:($.left-F.left+v.left)/H.x,right:(F.right-$.right+v.right)/H.x}}const Ka=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:r,rects:s,platform:n,elements:c,middlewareData:l}=t,{element:u,padding:h=0}=Pt(e,t)||{};if(u==null)return{};const p=gs(h),m={x:o,y:i},f=Ri(r),v=Oi(f),w=await n.getDimensions(u),A=f==="y",$=A?"top":"left",z=A?"bottom":"right",O=A?"clientHeight":"clientWidth",H=s.reference[v]+s.reference[f]-m[f]-s.floating[v],F=m[f]-s.reference[f],N=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let Z=N?N[O]:0;(!Z||!await(n.isElement==null?void 0:n.isElement(N)))&&(Z=c.floating[O]||s.floating[v]);const ie=H/2-F/2,Fe=Z/2-w[v]/2-1,Dt=qe(p[$],Fe),Ft=qe(p[z],Fe),pe=Dt,Vt=Z-w[v]-Ft,re=Z/2-w[v]/2+ie,Ce=gi(pe,re,Vt),Se=!l.arrow&&zt(r)!=null&&re!=Ce&&s.reference[v]/2-(re<pe?Dt:Ft)-w[v]/2<0,Re=Se?re<pe?re-pe:re-Vt:0;return{[f]:m[f]+Re,data:{[f]:Ce,centerOffset:re-Ce-Re,...Se&&{alignmentOffset:Re}},reset:Se}}}),Ya=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:r,middlewareData:s,rects:n,initialPlacement:c,platform:l,elements:u}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...A}=Pt(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const $=Ge(r),z=Ge(c)===c,O=await(l.isRTL==null?void 0:l.isRTL(u.floating)),H=m||(z||!w?[Ro(c)]:ja(c));!m&&v!=="none"&&H.push(...qa(c,w,v,O));const F=[c,...H],N=await Ii(t,A),Z=[];let ie=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&Z.push(N[$]),p){const pe=Ha(r,n,O);Z.push(N[pe[0]],N[pe[1]])}if(ie=[...ie,{placement:r,overflows:Z}],!Z.every(pe=>pe<=0)){var Fe,Dt;const pe=(((Fe=s.flip)==null?void 0:Fe.index)||0)+1,Vt=F[pe];if(Vt)return{data:{index:pe,overflows:ie},reset:{placement:Vt}};let re=(Dt=ie.filter(Ce=>Ce.overflows[0]<=0).sort((Ce,Se)=>Ce.overflows[1]-Se.overflows[1])[0])==null?void 0:Dt.placement;if(!re)switch(f){case"bestFit":{var Ft;const Ce=(Ft=ie.map(Se=>[Se.placement,Se.overflows.filter(Re=>Re>0).reduce((Re,Qs)=>Re+Qs,0)]).sort((Se,Re)=>Se[1]-Re[1])[0])==null?void 0:Ft[0];Ce&&(re=Ce);break}case"initialPlacement":re=c;break}if(r!==re)return{reset:{placement:re}}}return{}}}};async function Xa(e,t){const{placement:o,platform:i,elements:r}=e,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=Ge(o),c=zt(o),l=so(o)==="y",u=["left","top"].includes(n)?-1:1,h=s&&l?-1:1,p=Pt(t,e);let{mainAxis:m,crossAxis:f,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return c&&typeof v=="number"&&(f=c==="end"?v*-1:v),l?{x:f*h,y:m*u}:{x:m*u,y:f*h}}const Ja=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:i}=t,r=await Xa(t,e);return{x:o+r.x,y:i+r.y,data:r}}}},Qa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:r}=t,{mainAxis:s=!0,crossAxis:n=!1,limiter:c={fn:A=>{let{x:$,y:z}=A;return{x:$,y:z}}},...l}=Pt(e,t),u={x:o,y:i},h=await Ii(t,l),p=so(Ge(r)),m=ms(p);let f=u[m],v=u[p];if(s){const A=m==="y"?"top":"left",$=m==="y"?"bottom":"right",z=f+h[A],O=f-h[$];f=gi(z,f,O)}if(n){const A=p==="y"?"top":"left",$=p==="y"?"bottom":"right",z=v+h[A],O=v-h[$];v=gi(z,v,O)}const w=c.fn({...t,[m]:f,[p]:v});return{...w,data:{x:w.x-o,y:w.y-i}}}}},$r=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:r,elements:s}=t,{apply:n=()=>{},...c}=Pt(e,t),l=await Ii(t,c),u=Ge(o),h=zt(o),p=so(o)==="y",{width:m,height:f}=i.floating;let v,w;u==="top"||u==="bottom"?(v=u,w=h===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(w=u,v=h==="end"?"top":"bottom");const A=f-l[v],$=m-l[w],z=!t.middlewareData.shift;let O=A,H=$;if(p){const N=m-l.left-l.right;H=h||z?qe($,N):N}else{const N=f-l.top-l.bottom;O=h||z?qe(A,N):N}if(z&&!h){const N=ne(l.left,0),Z=ne(l.right,0),ie=ne(l.top,0),Fe=ne(l.bottom,0);p?H=m-2*(N!==0||Z!==0?N+Z:ne(l.left,l.right)):O=f-2*(ie!==0||Fe!==0?ie+Fe:ne(l.top,l.bottom))}await n({...t,availableWidth:H,availableHeight:O});const F=await r.getDimensions(s.floating);return m!==F.width||f!==F.height?{reset:{rects:!0}}:{}}}};function Ke(e){return bs(e)?(e.nodeName||"").toLowerCase():"#document"}function ce(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function De(e){var t;return(t=(bs(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bs(e){return e instanceof Node||e instanceof ce(e).Node}function Me(e){return e instanceof Element||e instanceof ce(e).Element}function Pe(e){return e instanceof HTMLElement||e instanceof ce(e).HTMLElement}function Cr(e){return typeof ShadowRoot=="undefined"?!1:e instanceof ShadowRoot||e instanceof ce(e).ShadowRoot}function no(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=be(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function Za(e){return["table","td","th"].includes(Ke(e))}function Mi(e){const t=Ui(),o=be(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function el(e){let t=xt(e);for(;Pe(t)&&!No(t);){if(Mi(t))return t;t=xt(t)}return null}function Ui(){return typeof CSS=="undefined"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function No(e){return["html","body","#document"].includes(Ke(e))}function be(e){return ce(e).getComputedStyle(e)}function Ho(e){return Me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function xt(e){if(Ke(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Cr(e)&&e.host||De(e);return Cr(t)?t.host:t}function vs(e){const t=xt(e);return No(t)?e.ownerDocument?e.ownerDocument.body:e.body:Pe(t)&&no(t)?t:vs(t)}function eo(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const r=vs(e),s=r===((i=e.ownerDocument)==null?void 0:i.body),n=ce(r);return s?t.concat(n,n.visualViewport||[],no(r)?r:[],n.frameElement&&o?eo(n.frameElement):[]):t.concat(r,eo(r,[],o))}function ys(e){const t=be(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Pe(e),s=r?e.offsetWidth:o,n=r?e.offsetHeight:i,c=Oo(o)!==s||Oo(i)!==n;return c&&(o=s,i=n),{width:o,height:i,$:c}}function Di(e){return Me(e)?e:e.contextElement}function yt(e){const t=Di(e);if(!Pe(t))return Be(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:s}=ys(t);let n=(s?Oo(o.width):o.width)/i,c=(s?Oo(o.height):o.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const tl=Be(0);function ws(e){const t=ce(e);return!Ui()||!t.visualViewport?tl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ol(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==ce(e)?!1:t}function at(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const r=e.getBoundingClientRect(),s=Di(e);let n=Be(1);t&&(i?Me(i)&&(n=yt(i)):n=yt(e));const c=ol(s,o,i)?ws(s):Be(0);let l=(r.left+c.x)/n.x,u=(r.top+c.y)/n.y,h=r.width/n.x,p=r.height/n.y;if(s){const m=ce(s),f=i&&Me(i)?ce(i):i;let v=m.frameElement;for(;v&&i&&f!==m;){const w=yt(v),A=v.getBoundingClientRect(),$=be(v),z=A.left+(v.clientLeft+parseFloat($.paddingLeft))*w.x,O=A.top+(v.clientTop+parseFloat($.paddingTop))*w.y;l*=w.x,u*=w.y,h*=w.x,p*=w.y,l+=z,u+=O,v=ce(v).frameElement}}return Io({width:h,height:p,x:l,y:u})}function il(e){let{rect:t,offsetParent:o,strategy:i}=e;const r=Pe(o),s=De(o);if(o===s)return t;let n={scrollLeft:0,scrollTop:0},c=Be(1);const l=Be(0);if((r||!r&&i!=="fixed")&&((Ke(o)!=="body"||no(s))&&(n=Ho(o)),Pe(o))){const u=at(o);c=yt(o),l.x=u.x+o.clientLeft,l.y=u.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-n.scrollLeft*c.x+l.x,y:t.y*c.y-n.scrollTop*c.y+l.y}}function rl(e){return Array.from(e.getClientRects())}function _s(e){return at(De(e)).left+Ho(e).scrollLeft}function sl(e){const t=De(e),o=Ho(e),i=e.ownerDocument.body,r=ne(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=ne(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+_s(e);const c=-o.scrollTop;return be(i).direction==="rtl"&&(n+=ne(t.clientWidth,i.clientWidth)-r),{width:r,height:s,x:n,y:c}}function nl(e,t){const o=ce(e),i=De(e),r=o.visualViewport;let s=i.clientWidth,n=i.clientHeight,c=0,l=0;if(r){s=r.width,n=r.height;const u=Ui();(!u||u&&t==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:s,height:n,x:c,y:l}}function al(e,t){const o=at(e,!0,t==="fixed"),i=o.top+e.clientTop,r=o.left+e.clientLeft,s=Pe(e)?yt(e):Be(1),n=e.clientWidth*s.x,c=e.clientHeight*s.y,l=r*s.x,u=i*s.y;return{width:n,height:c,x:l,y:u}}function Sr(e,t,o){let i;if(t==="viewport")i=nl(e,o);else if(t==="document")i=sl(De(e));else if(Me(t))i=al(t,o);else{const r=ws(e);i={...t,x:t.x-r.x,y:t.y-r.y}}return Io(i)}function xs(e,t){const o=xt(e);return o===t||!Me(o)||No(o)?!1:be(o).position==="fixed"||xs(o,t)}function ll(e,t){const o=t.get(e);if(o)return o;let i=eo(e,[],!1).filter(c=>Me(c)&&Ke(c)!=="body"),r=null;const s=be(e).position==="fixed";let n=s?xt(e):e;for(;Me(n)&&!No(n);){const c=be(n),l=Mi(n);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||no(n)&&!l&&xs(e,n))?i=i.filter(h=>h!==n):r=c,n=xt(n)}return t.set(e,i),i}function cl(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e;const n=[...o==="clippingAncestors"?ll(t,this._c):[].concat(o),i],c=n[0],l=n.reduce((u,h)=>{const p=Sr(t,h,r);return u.top=ne(p.top,u.top),u.right=qe(p.right,u.right),u.bottom=qe(p.bottom,u.bottom),u.left=ne(p.left,u.left),u},Sr(t,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function dl(e){return ys(e)}function ul(e,t,o){const i=Pe(t),r=De(t),s=o==="fixed",n=at(e,!0,s,t);let c={scrollLeft:0,scrollTop:0};const l=Be(0);if(i||!i&&!s)if((Ke(t)!=="body"||no(r))&&(c=Ho(t)),i){const u=at(t,!0,s,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else r&&(l.x=_s(r));return{x:n.left+c.scrollLeft-l.x,y:n.top+c.scrollTop-l.y,width:n.width,height:n.height}}function Er(e,t){return!Pe(e)||be(e).position==="fixed"?null:t?t(e):e.offsetParent}function ks(e,t){const o=ce(e);if(!Pe(e))return o;let i=Er(e,t);for(;i&&Za(i)&&be(i).position==="static";)i=Er(i,t);return i&&(Ke(i)==="html"||Ke(i)==="body"&&be(i).position==="static"&&!Mi(i))?o:i||el(e)||o}const hl=async function(e){let{reference:t,floating:o,strategy:i}=e;const r=this.getOffsetParent||ks,s=this.getDimensions;return{reference:ul(t,await r(o),i),floating:{x:0,y:0,...await s(o)}}};function pl(e){return be(e).direction==="rtl"}const ko={convertOffsetParentRelativeRectToViewportRelativeRect:il,getDocumentElement:De,getClippingRect:cl,getOffsetParent:ks,getElementRects:hl,getClientRects:rl,getDimensions:dl,getScale:yt,isElement:Me,isRTL:pl};function fl(e,t){let o=null,i;const r=De(e);function s(){clearTimeout(i),o&&o.disconnect(),o=null}function n(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:u,top:h,width:p,height:m}=e.getBoundingClientRect();if(c||t(),!p||!m)return;const f=fo(h),v=fo(r.clientWidth-(u+p)),w=fo(r.clientHeight-(h+m)),A=fo(u),z={rootMargin:-f+"px "+-v+"px "+-w+"px "+-A+"px",threshold:ne(0,qe(1,l))||1};let O=!0;function H(F){const N=F[0].intersectionRatio;if(N!==l){if(!O)return n();N?n(!1,N):i=setTimeout(()=>{n(!1,1e-7)},100)}O=!1}try{o=new IntersectionObserver(H,{...z,root:r.ownerDocument})}catch{o=new IntersectionObserver(H,z)}o.observe(e)}return n(!0),s}function ml(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=Di(e),h=r||s?[...u?eo(u):[],...eo(t)]:[];h.forEach($=>{r&&$.addEventListener("scroll",o,{passive:!0}),s&&$.addEventListener("resize",o)});const p=u&&c?fl(u,o):null;let m=-1,f=null;n&&(f=new ResizeObserver($=>{let[z]=$;z&&z.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(t)})),o()}),u&&!l&&f.observe(u),f.observe(t));let v,w=l?at(e):null;l&&A();function A(){const $=at(e);w&&($.x!==w.x||$.y!==w.y||$.width!==w.width||$.height!==w.height)&&o(),w=$,v=requestAnimationFrame(A)}return o(),()=>{h.forEach($=>{r&&$.removeEventListener("scroll",o),s&&$.removeEventListener("resize",o)}),p&&p(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(v)}}const gl=(e,t,o)=>{const i=new Map,r={platform:ko,...o},s={...r.platform,_c:i};return Ga(e,t,{...r,platform:s})};function bl(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var M=class extends E{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||bl(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=ml(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ja({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push($r({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ya({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Qa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push($r({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Ka({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>ko.getOffsetParent(o,fs):ko.getOffsetParent;gl(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:io(Ue({},ko),{getOffsetParent:t})}).then(({x:o,y:i,middlewareData:r,placement:s})=>{const n=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,u=r.arrow.y;let h="",p="",m="",f="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?v:"",f=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":v,f=n?v:"",m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:p,bottom:m,left:f,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${R({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?b`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};M.styles=Fa;a([_(".popup")],M.prototype,"popup",2);a([_(".popup__arrow")],M.prototype,"arrowEl",2);a([d()],M.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],M.prototype,"active",2);a([d({reflect:!0})],M.prototype,"placement",2);a([d({reflect:!0})],M.prototype,"strategy",2);a([d({type:Number})],M.prototype,"distance",2);a([d({type:Number})],M.prototype,"skidding",2);a([d({type:Boolean})],M.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],M.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],M.prototype,"arrowPadding",2);a([d({type:Boolean})],M.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],M.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],M.prototype,"flipFallbackStrategy",2);a([d({type:Object})],M.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],M.prototype,"flipPadding",2);a([d({type:Boolean})],M.prototype,"shift",2);a([d({type:Object})],M.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],M.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],M.prototype,"autoSize",2);a([d()],M.prototype,"sync",2);a([d({type:Object})],M.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],M.prototype,"autoSizePadding",2);var $s=new Map,vl=new WeakMap;function yl(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function Pr(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ue(e,t){$s.set(e,yl(t))}function ae(e,t,o){const i=vl.get(e);if(i!=null&&i[t])return Pr(i[t],o.dir);const r=$s.get(t);return r?Pr(r,o.dir):{keyframes:[],options:{duration:0}}}function ze(e,t){return new Promise(o=>{function i(r){r.target===e&&(e.removeEventListener(t,i),o())}e.addEventListener(t,i)})}function le(e,t,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,io(Ue({},o),{duration:wl()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function zr(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function wl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ge(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{const i=requestAnimationFrame(o);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function Ar(e,t){return e.map(o=>io(Ue({},o),{height:o.height==="auto"?`${t}px`:o.height}))}var ee=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,r;const s=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const o=t.getAllItems(),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Da(i).start);let o;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=t.button;break;default:o=t}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ze(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,ze(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ge(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ae(this,"dropdown.show",{dir:this.localize.dir()});await le(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ge(this);const{keyframes:e,options:t}=ae(this,"dropdown.hide",{dir:this.localize.dir()});await le(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return b`
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
    `}};ee.styles=Ia;ee.dependencies={"sl-popup":M};a([_(".dropdown")],ee.prototype,"popup",2);a([_(".dropdown__trigger")],ee.prototype,"trigger",2);a([_(".dropdown__panel")],ee.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"open",2);a([d({reflect:!0})],ee.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);a([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ee.prototype,"stayOpenOnSelect",2);a([d({attribute:!1})],ee.prototype,"containingElement",2);a([d({type:Number})],ee.prototype,"distance",2);a([d({type:Number})],ee.prototype,"skidding",2);a([d({type:Boolean})],ee.prototype,"hoist",2);a([C("open",{waitUntilFirstUpdate:!0})],ee.prototype,"handleOpenChange",1);ue("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ue("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var _l=g`
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
`;function fe(e,t,o){const i=r=>Object.is(r,-0)?0:r;return e<t?i(t):e>o?i(o):i(e)}var xl=g`
  ${I}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,At=class extends E{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=qt(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=qt(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=qt(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=qt(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const o=e.indexOf(t),i=qt(t);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",o===0),i.classList.toggle("sl-button-group__button--inner",o>0&&o<e.length-1),i.classList.toggle("sl-button-group__button--last",o===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return b`
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
    `}};At.styles=xl;a([_("slot")],At.prototype,"defaultSlot",2);a([x()],At.prototype,"disableRole",2);a([d()],At.prototype,"label",2);function qt(e){var t;const o="sl-button, sl-radio-button";return(t=e.closest(o))!=null?t:e.querySelector(o)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs="important",kl=" !"+Cs,Ve=Ti(class extends Li{constructor(e){var t;if(super(e),e.type!==He.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const i=e[o];return i==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ht===void 0){this.ht=new Set;for(const i in t)this.ht.add(i);return this.render(t)}this.ht.forEach(i=>{t[i]==null&&(this.ht.delete(i),i.includes("-")?o.removeProperty(i):o[i]="")});for(const i in t){const r=t[i];if(r!=null){this.ht.add(i);const s=typeof r=="string"&&r.endsWith(kl);i.includes("-")||s?o.setProperty(i,s?r.slice(0,-11):r,s?Cs:""):o[i]=r}}return me}});function K(e,t){$l(e)&&(e="100%");var o=Cl(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),o&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function mo(e){return Math.min(1,Math.max(0,e))}function $l(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Cl(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Ss(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function go(e){return e<=1?"".concat(Number(e)*100,"%"):e}function ot(e){return e.length===1?"0"+e:String(e)}function Sl(e,t,o){return{r:K(e,255)*255,g:K(t,255)*255,b:K(o,255)*255}}function Tr(e,t,o){e=K(e,255),t=K(t,255),o=K(o,255);var i=Math.max(e,t,o),r=Math.min(e,t,o),s=0,n=0,c=(i+r)/2;if(i===r)n=0,s=0;else{var l=i-r;switch(n=c>.5?l/(2-i-r):l/(i+r),i){case e:s=(t-o)/l+(t<o?6:0);break;case t:s=(o-e)/l+2;break;case o:s=(e-t)/l+4;break}s/=6}return{h:s,s:n,l:c}}function ii(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(t-e)*(6*o):o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function El(e,t,o){var i,r,s;if(e=K(e,360),t=K(t,100),o=K(o,100),t===0)r=o,s=o,i=o;else{var n=o<.5?o*(1+t):o+t-o*t,c=2*o-n;i=ii(c,n,e+1/3),r=ii(c,n,e),s=ii(c,n,e-1/3)}return{r:i*255,g:r*255,b:s*255}}function Lr(e,t,o){e=K(e,255),t=K(t,255),o=K(o,255);var i=Math.max(e,t,o),r=Math.min(e,t,o),s=0,n=i,c=i-r,l=i===0?0:c/i;if(i===r)s=0;else{switch(i){case e:s=(t-o)/c+(t<o?6:0);break;case t:s=(o-e)/c+2;break;case o:s=(e-t)/c+4;break}s/=6}return{h:s,s:l,v:n}}function Pl(e,t,o){e=K(e,360)*6,t=K(t,100),o=K(o,100);var i=Math.floor(e),r=e-i,s=o*(1-t),n=o*(1-r*t),c=o*(1-(1-r)*t),l=i%6,u=[o,n,s,s,c,o][l],h=[c,o,o,n,s,s][l],p=[s,s,c,o,o,n][l];return{r:u*255,g:h*255,b:p*255}}function Or(e,t,o,i){var r=[ot(Math.round(e).toString(16)),ot(Math.round(t).toString(16)),ot(Math.round(o).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function zl(e,t,o,i,r){var s=[ot(Math.round(e).toString(16)),ot(Math.round(t).toString(16)),ot(Math.round(o).toString(16)),ot(Al(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Al(e){return Math.round(parseFloat(e)*255).toString(16)}function Rr(e){return se(e)/255}function se(e){return parseInt(e,16)}function Tl(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var vi={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ll(e){var t={r:0,g:0,b:0},o=1,i=null,r=null,s=null,n=!1,c=!1;return typeof e=="string"&&(e=Il(e)),typeof e=="object"&&(Ie(e.r)&&Ie(e.g)&&Ie(e.b)?(t=Sl(e.r,e.g,e.b),n=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Ie(e.h)&&Ie(e.s)&&Ie(e.v)?(i=go(e.s),r=go(e.v),t=Pl(e.h,i,r),n=!0,c="hsv"):Ie(e.h)&&Ie(e.s)&&Ie(e.l)&&(i=go(e.s),s=go(e.l),t=El(e.h,i,s),n=!0,c="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(o=e.a)),o=Ss(o),{ok:n,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:o}}var Ol="[-\\+]?\\d+%?",Rl="[-\\+]?\\d*\\.\\d+%?",We="(?:".concat(Rl,")|(?:").concat(Ol,")"),ri="[\\s|\\(]+(".concat(We,")[,|\\s]+(").concat(We,")[,|\\s]+(").concat(We,")\\s*\\)?"),si="[\\s|\\(]+(".concat(We,")[,|\\s]+(").concat(We,")[,|\\s]+(").concat(We,")[,|\\s]+(").concat(We,")\\s*\\)?"),_e={CSS_UNIT:new RegExp(We),rgb:new RegExp("rgb"+ri),rgba:new RegExp("rgba"+si),hsl:new RegExp("hsl"+ri),hsla:new RegExp("hsla"+si),hsv:new RegExp("hsv"+ri),hsva:new RegExp("hsva"+si),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Il(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(vi[e])e=vi[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var o=_e.rgb.exec(e);return o?{r:o[1],g:o[2],b:o[3]}:(o=_e.rgba.exec(e),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=_e.hsl.exec(e),o?{h:o[1],s:o[2],l:o[3]}:(o=_e.hsla.exec(e),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=_e.hsv.exec(e),o?{h:o[1],s:o[2],v:o[3]}:(o=_e.hsva.exec(e),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=_e.hex8.exec(e),o?{r:se(o[1]),g:se(o[2]),b:se(o[3]),a:Rr(o[4]),format:t?"name":"hex8"}:(o=_e.hex6.exec(e),o?{r:se(o[1]),g:se(o[2]),b:se(o[3]),format:t?"name":"hex"}:(o=_e.hex4.exec(e),o?{r:se(o[1]+o[1]),g:se(o[2]+o[2]),b:se(o[3]+o[3]),a:Rr(o[4]+o[4]),format:t?"name":"hex8"}:(o=_e.hex3.exec(e),o?{r:se(o[1]+o[1]),g:se(o[2]+o[2]),b:se(o[3]+o[3]),format:t?"name":"hex"}:!1)))))))))}function Ie(e){return Boolean(_e.CSS_UNIT.exec(String(e)))}var Ir=function(){function e(t,o){t===void 0&&(t=""),o===void 0&&(o={});var i;if(t instanceof e)return t;typeof t=="number"&&(t=Tl(t)),this.originalInput=t;var r=Ll(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=o.format)!==null&&i!==void 0?i:r.format,this.gradientType=o.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),o,i,r,s=t.r/255,n=t.g/255,c=t.b/255;return s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),c<=.03928?r=c/12.92:r=Math.pow((c+.055)/1.055,2.4),.2126*o+.7152*i+.0722*r},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=Ss(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Lr(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Lr(this.r,this.g,this.b),o=Math.round(t.h*360),i=Math.round(t.s*100),r=Math.round(t.v*100);return this.a===1?"hsv(".concat(o,", ").concat(i,"%, ").concat(r,"%)"):"hsva(".concat(o,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Tr(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Tr(this.r,this.g,this.b),o=Math.round(t.h*360),i=Math.round(t.s*100),r=Math.round(t.l*100);return this.a===1?"hsl(".concat(o,", ").concat(i,"%, ").concat(r,"%)"):"hsla(".concat(o,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Or(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),zl(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),o=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(o,", ").concat(i,")"):"rgba(".concat(t,", ").concat(o,", ").concat(i,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(o){return"".concat(Math.round(K(o,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(o){return Math.round(K(o,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Or(this.r,this.g,this.b,!1),o=0,i=Object.entries(vi);o<i.length;o++){var r=i[o],s=r[0],n=r[1];if(t===n)return s}return!1},e.prototype.toString=function(t){var o=Boolean(t);t=t!=null?t:this.format;var i=!1,r=this.a<1&&this.a>=0,s=!o&&r&&(t.startsWith("hex")||t==="name");return s?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var o=this.toHsl();return o.l+=t/100,o.l=mo(o.l),new e(o)},e.prototype.brighten=function(t){t===void 0&&(t=10);var o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(t/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(t/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(t/100)))),new e(o)},e.prototype.darken=function(t){t===void 0&&(t=10);var o=this.toHsl();return o.l-=t/100,o.l=mo(o.l),new e(o)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var o=this.toHsl();return o.s-=t/100,o.s=mo(o.s),new e(o)},e.prototype.saturate=function(t){t===void 0&&(t=10);var o=this.toHsl();return o.s+=t/100,o.s=mo(o.s),new e(o)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var o=this.toHsl(),i=(o.h+t)%360;return o.h=i<0?360+i:i,new e(o)},e.prototype.mix=function(t,o){o===void 0&&(o=50);var i=this.toRgb(),r=new e(t).toRgb(),s=o/100,n={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new e(n)},e.prototype.analogous=function(t,o){t===void 0&&(t=6),o===void 0&&(o=30);var i=this.toHsl(),r=360/o,s=[this];for(i.h=(i.h-(r*t>>1)+720)%360;--t;)i.h=(i.h+r)%360,s.push(new e(i));return s},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var o=this.toHsv(),i=o.h,r=o.s,s=o.v,n=[],c=1/t;t--;)n.push(new e({h:i,s:r,v:s})),s=(s+c)%1;return n},e.prototype.splitcomplement=function(){var t=this.toHsl(),o=t.h;return[this,new e({h:(o+72)%360,s:t.s,l:t.l}),new e({h:(o+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var o=this.toRgb(),i=new e(t).toRgb(),r=o.a+i.a*(1-o.a);return new e({r:(o.r*o.a+i.r*i.a*(1-o.a))/r,g:(o.g*o.a+i.g*i.a*(1-o.a))/r,b:(o.b*o.a+i.b*i.a*(1-o.a))/r,a:r})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var o=this.toHsl(),i=o.h,r=[this],s=360/t,n=1;n<t;n++)r.push(new e({h:(i+n*s)%360,s:o.s,l:o.l}));return r},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),Mr="EyeDropper"in window,S=class extends E{constructor(){super(),this.formControlController=new ut(this),this.isSafeValue=!1,this.localize=new oe(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),o=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let r=this.value;o.focus(),e.preventDefault(),ti(t,{onMove:s=>{this.alpha=fe(s/i*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),o=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let r=this.value;o.focus(),e.preventDefault(),ti(t,{onMove:s=>{this.hue=fe(s/i*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),o=t.querySelector(".color-picker__grid-handle"),{width:i,height:r}=t.getBoundingClientRect();let s=this.value;o.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,ti(t,{onMove:(n,c)=>{this.saturation=fe(n/i*100,0,100),this.brightness=fe(100-c/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,o=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=fe(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=fe(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,o=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=fe(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=fe(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,o=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=fe(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=fe(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=fe(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=fe(this.brightness-t,0,100),this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,o=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Ir(e);if(!t.isValid)return null;const o=t.toHsl(),i={h:o.h,s:o.s*100,l:o.l*100,a:o.a},r=t.toRgb(),s=t.toHexString(),n=t.toHex8String(),c=t.toHsv(),l={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Mr)return;new EyeDropper().open().then(t=>{const o=this.value;this.setColor(t.sRGBHex),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,o,i=100){const r=new Ir(`hsva(${e}, ${t}, ${o}, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const o=this.parseColor(t);o!==null?(this.inputValue=this.value,this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=o.hsva.a*100,this.syncValues()):this.inputValue=e!=null?e:""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),i=b`
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
          style=${Ve({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${R({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ve({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                style=${Ve({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
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
                      style=${Ve({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ve({left:`${this.alpha}%`})}
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
            style=${Ve({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                        style=${Ve({backgroundColor:s.hexa})}
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
          style=${Ve({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};S.styles=_l;S.dependencies={"sl-button-group":At,"sl-button":L,"sl-dropdown":ee,"sl-icon":W,"sl-input":k,"sl-visually-hidden":ps};a([_('[part~="base"]')],S.prototype,"base",2);a([_('[part~="input"]')],S.prototype,"input",2);a([_(".color-dropdown")],S.prototype,"dropdown",2);a([_('[part~="preview"]')],S.prototype,"previewButton",2);a([_('[part~="trigger"]')],S.prototype,"trigger",2);a([x()],S.prototype,"hasFocus",2);a([x()],S.prototype,"isDraggingGridHandle",2);a([x()],S.prototype,"isEmpty",2);a([x()],S.prototype,"inputValue",2);a([x()],S.prototype,"hue",2);a([x()],S.prototype,"saturation",2);a([x()],S.prototype,"brightness",2);a([x()],S.prototype,"alpha",2);a([d()],S.prototype,"value",2);a([ro()],S.prototype,"defaultValue",2);a([d()],S.prototype,"label",2);a([d()],S.prototype,"format",2);a([d({type:Boolean,reflect:!0})],S.prototype,"inline",2);a([d({reflect:!0})],S.prototype,"size",2);a([d({attribute:"no-format-toggle",type:Boolean})],S.prototype,"noFormatToggle",2);a([d()],S.prototype,"name",2);a([d({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([d({type:Boolean})],S.prototype,"hoist",2);a([d({type:Boolean})],S.prototype,"opacity",2);a([d({type:Boolean})],S.prototype,"uppercase",2);a([d()],S.prototype,"swatches",2);a([d({reflect:!0})],S.prototype,"form",2);a([d({type:Boolean,reflect:!0})],S.prototype,"required",2);a([C("format",{waitUntilFirstUpdate:!0})],S.prototype,"handleFormatChange",1);a([C("opacity",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpacityChange",1);a([C("value")],S.prototype,"handleValueChange",1);S.define("sl-color-picker");var Ml=g`
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
`,$e=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ge(this.body);const{keyframes:t,options:o}=ae(this,"details.show",{dir:this.localize.dir()});await le(this.body,Ar(t,this.body.scrollHeight),o),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ge(this.body);const{keyframes:t,options:o}=ae(this,"details.hide",{dir:this.localize.dir()});await le(this.body,Ar(t,this.body.scrollHeight),o),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ze(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ze(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return b`
      <details
        part="base"
        class=${R({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};$e.styles=Ml;$e.dependencies={"sl-icon":W};a([_(".details")],$e.prototype,"details",2);a([_(".details__header")],$e.prototype,"header",2);a([_(".details__body")],$e.prototype,"body",2);a([_(".details__expand-icon-slot")],$e.prototype,"expandIconSlot",2);a([d({type:Boolean,reflect:!0})],$e.prototype,"open",2);a([d()],$e.prototype,"summary",2);a([d({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);a([C("open",{waitUntilFirstUpdate:!0})],$e.prototype,"handleOpenChange",1);ue("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ue("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});$e.define("sl-details");var Ul=g`
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
`,X=class extends E{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?To`a`:To`button`;return _o`
      <${t}
        part="base"
        class=${R({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:"button")}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e&&this.target?"noreferrer noopener":void 0)}
        role=${y(e?void 0:"button")}
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
      </${t}>
    `}};X.styles=Dl;X.dependencies={"sl-icon":W};a([_(".icon-button")],X.prototype,"button",2);a([x()],X.prototype,"hasFocus",2);a([d()],X.prototype,"name",2);a([d()],X.prototype,"library",2);a([d()],X.prototype,"src",2);a([d()],X.prototype,"href",2);a([d()],X.prototype,"target",2);a([d()],X.prototype,"download",2);a([d()],X.prototype,"label",2);a([d({type:Boolean,reflect:!0})],X.prototype,"disabled",2);X.define("sl-icon-button");k.define("sl-input");var Fl=g`
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
`,Fi=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const o=e.target.closest("sl-menu-item");!o||o.disabled||o.inert||(o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}}))}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),o=this.getCurrentItem();let i=o?t.indexOf(o):0;t.length>0&&(e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===e?"0":"-1")})}render(){return b`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Fi.styles=Fl;a([_("slot")],Fi.prototype,"defaultSlot",2);Fi.define("sl-menu");var Vl=g`
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
`,ve=class extends E{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return ma(this.defaultSlot)}render(){return b`
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
    `}};ve.styles=Vl;ve.dependencies={"sl-icon":W};a([_("slot:not([name])")],ve.prototype,"defaultSlot",2);a([_(".menu-item")],ve.prototype,"menuItem",2);a([d()],ve.prototype,"type",2);a([d({type:Boolean,reflect:!0})],ve.prototype,"checked",2);a([d()],ve.prototype,"value",2);a([d({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);a([C("checked")],ve.prototype,"handleCheckedChange",1);a([C("disabled")],ve.prototype,"handleDisabledChange",1);a([C("type")],ve.prototype,"handleTypeChange",1);ve.define("sl-menu-item");var Nl=g`
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
`,Xe=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return b`
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
    `}};Xe.styles=Hl;Xe.dependencies={"sl-icon-button":X};a([d({reflect:!0})],Xe.prototype,"variant",2);a([d({reflect:!0})],Xe.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Xe.prototype,"pill",2);a([d({type:Boolean})],Xe.prototype,"removable",2);var jl=g`
  ${I}
  ${Vo}

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
`;function Wl(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var yi=new Set;function ql(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ur(e){if(yi.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=ql();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Dr(e){yi.delete(e),yi.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function wi(e,t,o="vertical",i="smooth"){const r=Wl(e,t),s=r.top+t.scrollTop,n=r.left+t.scrollLeft,c=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,h=t.scrollTop+t.offsetHeight;(o==="horizontal"||o==="both")&&(n<c?t.scrollTo({left:n,behavior:i}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(s<u?t.scrollTo({top:s,behavior:i}):s+e.clientHeight>h&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:i}))}var P=class extends E{constructor(){super(...arguments),this.formControlController=new ut(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Et(this,"help-text","label"),this.localize=new oe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,o=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(o||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let n=Math.max(0,s);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=s+1,n>r.length-1&&(n=0)):e.key==="ArrowUp"?(n=s-1,n<0&&(n=r.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(e.key.length===1||e.key==="Backspace"){const r=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const s of r)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const o=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const o=e.target.closest("sl-option"),i=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(e.forEach(i=>o.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),o=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),o.length&&o.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,o,i;this.selectedOptions=this.getAllOptions().filter(r=>r.selected),this.multiple?(this.value=this.selectedOptions.map(r=>r.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(o=>t.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ge(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=ae(this,"select.show",{dir:this.localize.dir()});await le(this.popup.popup,e,t),this.currentOption&&wi(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ge(this);const{keyframes:e,options:t}=ae(this,"select.hide",{dir:this.localize.dir()});await le(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ze(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ze(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,i=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return b`
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
    `}};P.styles=jl;P.dependencies={"sl-icon":W,"sl-popup":M,"sl-tag":Xe};a([_(".select")],P.prototype,"popup",2);a([_(".select__combobox")],P.prototype,"combobox",2);a([_(".select__display-input")],P.prototype,"displayInput",2);a([_(".select__value-input")],P.prototype,"valueInput",2);a([_(".select__listbox")],P.prototype,"listbox",2);a([x()],P.prototype,"hasFocus",2);a([x()],P.prototype,"displayLabel",2);a([x()],P.prototype,"currentOption",2);a([x()],P.prototype,"selectedOptions",2);a([d()],P.prototype,"name",2);a([d({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],P.prototype,"value",2);a([ro()],P.prototype,"defaultValue",2);a([d({reflect:!0})],P.prototype,"size",2);a([d()],P.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],P.prototype,"multiple",2);a([d({attribute:"max-options-visible",type:Number})],P.prototype,"maxOptionsVisible",2);a([d({type:Boolean,reflect:!0})],P.prototype,"disabled",2);a([d({type:Boolean})],P.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],P.prototype,"open",2);a([d({type:Boolean})],P.prototype,"hoist",2);a([d({type:Boolean,reflect:!0})],P.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],P.prototype,"pill",2);a([d()],P.prototype,"label",2);a([d({reflect:!0})],P.prototype,"placement",2);a([d({attribute:"help-text"})],P.prototype,"helpText",2);a([d({reflect:!0})],P.prototype,"form",2);a([d({type:Boolean,reflect:!0})],P.prototype,"required",2);a([C("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);a([C("value",{waitUntilFirstUpdate:!0})],P.prototype,"handleValueChange",1);a([C("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);ue("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ue("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});P.define("sl-select");var Bl=g`
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
`,Gl=0,Ae=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.attrId=++Gl,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,b`
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
    `}};Ae.styles=Bl;Ae.dependencies={"sl-icon-button":X};a([_(".tab")],Ae.prototype,"tab",2);a([d({reflect:!0})],Ae.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],Ae.prototype,"active",2);a([d({type:Boolean})],Ae.prototype,"closable",2);a([d({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);a([C("active")],Ae.prototype,"handleActiveChange",1);a([C("disabled")],Ae.prototype,"handleDisabledChange",1);Ae.define("sl-tab");var Kl=g`
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
`,he=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((o,i)=>{var r;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),i.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(o=>e.includeDisabled?o.tagName.toLowerCase()==="sl-tab":o.tagName.toLowerCase()==="sl-tab"&&!o.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const o=e.target.closest("sl-tab");(o==null?void 0:o.closest("sl-tab-group"))===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(e){const o=e.target.closest("sl-tab");if((o==null?void 0:o.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const r=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(r);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&wi(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Ue({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const o=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var r;return i.active=i.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&wi(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(o=>o.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,o=e.clientHeight,i=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(e)).reduce((c,l)=>({left:c.left+l.clientWidth,top:c.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(o=>o.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return b`
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
                  name=${e?"chevron-right":"chevron-left"}
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
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};he.styles=Kl;he.dependencies={"sl-icon-button":X};a([_(".tab-group")],he.prototype,"tabGroup",2);a([_(".tab-group__body")],he.prototype,"body",2);a([_(".tab-group__nav")],he.prototype,"nav",2);a([_(".tab-group__indicator")],he.prototype,"indicator",2);a([x()],he.prototype,"hasScrollControls",2);a([d()],he.prototype,"placement",2);a([d()],he.prototype,"activation",2);a([d({attribute:"no-scroll-controls",type:Boolean})],he.prototype,"noScrollControls",2);a([C("noScrollControls",{waitUntilFirstUpdate:!0})],he.prototype,"updateScrollControls",1);a([C("placement",{waitUntilFirstUpdate:!0})],he.prototype,"syncIndicator",1);he.define("sl-tab-group");var Yl=g`
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
`,Xl=0,ao=class extends E{constructor(){super(...arguments),this.attrId=++Xl,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return b`
      <slot
        part="base"
        class=${R({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};ao.styles=Yl;a([d({reflect:!0})],ao.prototype,"name",2);a([d({type:Boolean,reflect:!0})],ao.prototype,"active",2);a([C("active")],ao.prototype,"handleActiveChange",1);ao.define("sl-tab-panel");var Jl=g`
  ${I}
  ${Vo}

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
`,T=class extends E{constructor(){super(...arguments),this.formControlController=new ut(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Et(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,i){this.input.setRangeText(e,t,o,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,i=this.helpText?!0:!!t;return b`
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
    `}};T.styles=Jl;a([_(".textarea__control")],T.prototype,"input",2);a([x()],T.prototype,"hasFocus",2);a([d()],T.prototype,"title",2);a([d()],T.prototype,"name",2);a([d()],T.prototype,"value",2);a([d({reflect:!0})],T.prototype,"size",2);a([d({type:Boolean,reflect:!0})],T.prototype,"filled",2);a([d()],T.prototype,"label",2);a([d({attribute:"help-text"})],T.prototype,"helpText",2);a([d()],T.prototype,"placeholder",2);a([d({type:Number})],T.prototype,"rows",2);a([d()],T.prototype,"resize",2);a([d({type:Boolean,reflect:!0})],T.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],T.prototype,"readonly",2);a([d({reflect:!0})],T.prototype,"form",2);a([d({type:Boolean,reflect:!0})],T.prototype,"required",2);a([d({type:Number})],T.prototype,"minlength",2);a([d({type:Number})],T.prototype,"maxlength",2);a([d()],T.prototype,"autocapitalize",2);a([d()],T.prototype,"autocorrect",2);a([d()],T.prototype,"autocomplete",2);a([d({type:Boolean})],T.prototype,"autofocus",2);a([d()],T.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],T.prototype,"spellcheck",2);a([d()],T.prototype,"inputmode",2);a([ro()],T.prototype,"defaultValue",2);a([C("disabled",{waitUntilFirstUpdate:!0})],T.prototype,"handleDisabledChange",1);a([C("rows",{waitUntilFirstUpdate:!0})],T.prototype,"handleRowsChange",1);a([C("value",{waitUntilFirstUpdate:!0})],T.prototype,"handleValueChange",1);T.define("sl-textarea");var Ql=g`
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
`,J=class extends E{constructor(){super(),this.localize=new oe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=zr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=zr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await ge(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=ae(this,"tooltip.show",{dir:this.localize.dir()});await le(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await ge(this.body);const{keyframes:e,options:t}=ae(this,"tooltip.hide",{dir:this.localize.dir()});await le(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ze(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,ze(this,"sl-after-hide")}render(){return b`
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
    `}};J.styles=Ql;J.dependencies={"sl-popup":M};a([_("slot:not([name])")],J.prototype,"defaultSlot",2);a([_(".tooltip__body")],J.prototype,"body",2);a([_("sl-popup")],J.prototype,"popup",2);a([d()],J.prototype,"content",2);a([d()],J.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],J.prototype,"disabled",2);a([d({type:Number})],J.prototype,"distance",2);a([d({type:Boolean,reflect:!0})],J.prototype,"open",2);a([d({type:Number})],J.prototype,"skidding",2);a([d()],J.prototype,"trigger",2);a([d({type:Boolean})],J.prototype,"hoist",2);a([C("open",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpenChange",1);a([C(["content","distance","hoist","placement","skidding"])],J.prototype,"handleOptionsChange",1);a([C("disabled")],J.prototype,"handleDisabledChange",1);ue("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ue("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});J.define("sl-tooltip");var Zl=g`
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
`,Vi=class extends E{constructor(){super(...arguments),this.effect="none"}render(){return b`
      <div
        part="base"
        class=${R({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Vi.styles=Zl;a([d()],Vi.prototype,"effect",2);Vi.define("sl-skeleton");var ec=g`
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
`,ye=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return b`
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
    `}};ye.styles=ec;ye.dependencies={"sl-icon":W};a([_(".option__label")],ye.prototype,"defaultSlot",2);a([x()],ye.prototype,"current",2);a([x()],ye.prototype,"selected",2);a([x()],ye.prototype,"hasHover",2);a([d({reflect:!0})],ye.prototype,"value",2);a([d({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);a([C("disabled")],ye.prototype,"handleDisabledChange",1);a([C("selected")],ye.prototype,"handleSelectedChange",1);a([C("value")],ye.prototype,"handleValueChange",1);ye.define("sl-option");var Bt=[],tc=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=t=>{var o;if(t.key!=="Tab")return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const i=xo(this.element),r=i[0];let s=this.currentFocusIndex;if(s===-1){this.currentFocus=r,this.currentFocus.focus({preventScroll:!0});return}const n=this.tabDirection==="forward"?1:-1;s+n>=i.length?s=0:this.currentFocusIndex+n<0?s=i.length-1:s+=n,this.currentFocus=i[s],(o=this.currentFocus)==null||o.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){Bt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Bt=Bt.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Bt[Bt.length-1]===this.element}checkFocus(){if(this.isActive()){const e=xo(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],i=this.tabDirection==="forward"?t:o;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}get currentFocusIndex(){return xo(this.element).findIndex(e=>e===this.currentFocus)}},oc=g`
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
`,Te=class extends E{constructor(){super(...arguments),this.hasSlotController=new Et(this,"footer"),this.localize=new oe(this),this.modal=new tc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ur(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Dr(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=ae(this,"dialog.denyClose",{dir:this.localize.dir()});le(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ur(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ge(this.dialog),ge(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=ae(this,"dialog.show",{dir:this.localize.dir()}),o=ae(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([le(this.panel,t.keyframes,t.options),le(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ge(this.dialog),ge(this.overlay)]);const e=ae(this,"dialog.hide",{dir:this.localize.dir()}),t=ae(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([le(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),le(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Dr(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ze(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,ze(this,"sl-after-hide")}render(){return b`
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
    `}};Te.styles=oc;Te.dependencies={"sl-icon-button":X};a([_(".dialog")],Te.prototype,"dialog",2);a([_(".dialog__panel")],Te.prototype,"panel",2);a([_(".dialog__overlay")],Te.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],Te.prototype,"open",2);a([d({reflect:!0})],Te.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],Te.prototype,"noHeader",2);a([C("open",{waitUntilFirstUpdate:!0})],Te.prototype,"handleOpenChange",1);ue("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ue("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ue("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ue("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ue("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Te.define("sl-dialog");W.define("sl-icon");var ic=g`
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
`,Tt=class extends E{constructor(){super(...arguments),this.localize=new oe(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*t,i=o-this.value/100*o;this.indicatorOffset=`${i}px`}}render(){return b`
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
    `}};Tt.styles=ic;a([_(".progress-ring__indicator")],Tt.prototype,"indicator",2);a([x()],Tt.prototype,"indicatorOffset",2);a([d({type:Number,reflect:!0})],Tt.prototype,"value",2);a([d()],Tt.prototype,"label",2);Tt.define("sl-progress-ring");var rc=g`
  ${I}
  ${Vo}

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
`,Q=class extends E{constructor(){super(...arguments),this.formControlController=new ut(this),this.hasSlotController=new Et(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?pa:e?ha:Fo}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,o.forEach(r=>r.checked=r===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const o=this.getAllRadios().filter(c=>!c.disabled),i=(t=o.find(c=>c.checked))!=null?t:o[0],r=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,s=this.value;let n=o.indexOf(i)+r;n<0&&(n=o.length-1),n>o.length-1&&(n=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=o[n].value,o[n].checked=!0,this.hasButtonGroup?o[n].shadowRoot.querySelector("button").focus():(o[n].tabIndex=0,o[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),o=e.find(i=>i.checked)||e[0];o&&o.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const o=this.getAllRadios();if(await Promise.all(o.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=o.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!o.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=o[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else o[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,i=this.helpText?!0:!!t,r=b`
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
    `}};Q.styles=rc;Q.dependencies={"sl-button-group":At};a([_("slot:not([name])")],Q.prototype,"defaultSlot",2);a([_(".radio-group__validation-input")],Q.prototype,"validationInput",2);a([x()],Q.prototype,"hasButtonGroup",2);a([x()],Q.prototype,"errorMessage",2);a([x()],Q.prototype,"defaultValue",2);a([d()],Q.prototype,"label",2);a([d({attribute:"help-text"})],Q.prototype,"helpText",2);a([d()],Q.prototype,"name",2);a([d({reflect:!0})],Q.prototype,"value",2);a([d({reflect:!0})],Q.prototype,"size",2);a([d({reflect:!0})],Q.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([C("size",{waitUntilFirstUpdate:!0})],Q.prototype,"handleSizeChange",1);a([C("value")],Q.prototype,"handleValueChange",1);Q.define("sl-radio-group");var sc=g`
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
`,Le=class extends E{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return b`
      <span
        part="base"
        class=${R({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?b` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Le.styles=sc;Le.dependencies={"sl-icon":W};a([x()],Le.prototype,"checked",2);a([x()],Le.prototype,"hasFocus",2);a([d()],Le.prototype,"value",2);a([d({reflect:!0})],Le.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);a([C("checked")],Le.prototype,"handleCheckedChange",1);a([C("disabled",{waitUntilFirstUpdate:!0})],Le.prototype,"handleDisabledChange",1);Le.define("sl-radio");Xe.define("sl-tag");ee.define("sl-dropdown");fi("/assets/sl-icons");const nc={done:"Done",upload:"Upload",download:"Download",generate:"Generate",add_url:"+ Add URL"},ac={home:{error:{promises:"There was a problem retrieving the manifest from your site.",invalidURL:"Invalid URL, please try again."}},manifest:{screenshot:{error:"The url needs to be an absolute url."}},publish:{windows:{test_package:"Want to test your app first before going to the Microsoft Store? Tap Download to get a package you can install and test."},base_package:{download:"Download your generated Web Manifest and chosen Service Worker to make your app a PWA!"}},basepack:{run_new:"After uploading the above files to your Web App tap Run New Test to test your PWA again!"}},lc={publish:{windows_platform:{p:"Your download will contain instructions for submitting your app to the Microsoft Store. Your app will be powered by the Chromium-based Edge platform."}},base_package:{top_section:{h1:"Make your app a PWA",p:"Looks like your web app is not a PWA yet, but you're on your way! Head below to download your base file package and get one step closer to packaging your app for the app stores."},summary_body:{h1:"Download PWA Base Files",p:"Whether you edited your manifest or added a service worker, in your downloaded base package files you will receive a manifest and service worker files ready to be added to your server, along with some helpful documentation."},next_steps:{h1:"Next Steps"}},manifest_options:{top_section:{h1:"Manifest"},summary_body:{h1:"Summary",p:"Easily update and upgrade your Web Manifest with our built-in Web Manifest editor"},info:{h1:"Info"},images:{h1:"Images",icons:{h3:"Upload App Icons"},screenshots:{h3:"Generate Screenshots",p:"Specify the URLs to generate desktop and mobile screenshots from. You may add up to 8 screenshots or Store Listings."}},settings:{h1:"Settings",background_color:{h3:"Background Color"},theme_color:{h3:"Theme Color"}},view_code:{h1:"View Code"},titles:{name:"Name",short_name:"Short Name",description:"Description",start_url:"Start URL",scope:"Scope",display:"Display",orientation:"Orientation",language:"Language"},descriptions:{short_name:"Used in app launchers",description:"Used in app storefronts and install dialogs",start_url:"The relative URL that loads when your app starts",scope:"Which URLs can load within your app",display:"The appearance of your app window",orientation:"The default screen orientation of your app",language:"The primary language of your app"}},android:{titles:{package_name:"Package Name",app_name:"App name",launcher_name:"Launcher name",all_settings:"All Settings",app_version:"App version",app_version_code:"App version code",host:"Host",start_url:"Start URL",theme_color:"Status bar color",splash_color:"Splash color",nav_color:"Nav color",dark_color:"Nav dark color",div_color:"Nav divider color",div_dark_color:"Nav divider dark color",icon_url:"Icon URL",mask_icon_url:"Maskable icon URL",mono_icon_url:"Monochrome icon URL",fallback:"Fallback behavior",custom:"Custom Tabs",web_view:"Web View",display_mode:"Display mode",standalone:"Standalone",fullscreen:"Fullscreen",notification:"Notification delegation",enable:"Enable",location_delegation:"Location delegation",google_play_billing:"Google Play billing",settings_shortcut:"Settings shortcut",chromeos_only:"ChromeOS only",metaquest:"Meta Quest compatible",generate:"Generate",source_code:"Include source code",none:"None",signing_key:"Signing key",key_file:"Key file",key_alias:"Key alias",key_fullname:"Key full name",key_org:"Key organization",key_org_unit:"Key organizational unit",key_country_code:"Key country code",key_pw:"Key password",key_store_pw:"Key store password"},description:{package_name:"The unique identifier of your app. It should contain only letters, numbers, and periods. Example: com.companyname.appname",launcher_name:"The app name used on the Android launch screen. Typically, this is the short name of the app.",app_version:"The version of your app displayed to users. This is a string, typically in the form of '1.0.0.0'. Maps to android:versionName.",app_version_code:"A positive integer used as an internal version number. This is not shown to users. Android uses this value to protect against downgrades. Maps to android:versionCode.",start_url:"The start path for the TWA. Must be relative to the Host URL. You can specify '/' if you don't have a start URL different from Host.",start_url_short:"The start path for the TWA. Must be relative to the Host URL.",theme_color:"Also known as the theme color, this is the color of the Android status bar in your app. Note: the status bar will be hidden if Display Mode is set to fullscreen.",splash_color:"Also known as background color, this is the color of the splash screen for your app.",nav_color:"The color of the Android navigation bar in your app. Note: the navigation bar will be hidden if Display Mode is set to fullscreen.",dark_color:"The color of the Android navigation bar in your app when Android is in dark mode.",div_color:"The color of the Android navigation bar divider in your app.",div_dark_color:"The color of the Android navigation navigation bar divider in your app when Android is in dark mode.",mask_icon_url:"Optional. The URL to an icon with a minimum safe zone of trimmable padding, enabling rounded icons on certain Android platforms.",mono_icon_url:"Optional. The URL to an icon containing only white and black colors, enabling Android to fill the icon with user-specified color or gradient depending on theme, color mode, or contrast settings.",custom:"Use Chrome Custom Tabs as a fallback for your PWA when the full trusted web activity (TWA) experience is unavailable.",web_view:"Use a web view as the fallback for your PWA when the full trusted web activity (TWA) experience is unavailable.",standalone:"Your PWA will use the whole screen but keep the Android status bar and navigation bar.",fullscreen:"Your PWA will use the whole screen and remove the Android status bar and navigation bar. Suitable for immersive experiences such as games or media apps.",notification:"Whether to enable Push Notification Delegation. If enabled, your PWA can send push notifications without browser permission prompts.",location_delegation:"Whether to enable Location Delegation. If enabled, your PWA can acess navigator.geolocation without browser permission prompts.",google_play_billing:"Whether to enable in-app purchases through Google Play Billing and the Digital Goods API.",settings_shortcut:"If enabled, users can long-press on your app tile and a Settings menu item will appear, letting users manage space for your app.",chromeos_only:"If enabled, your Android package will only run on ChromeOS devices.",metaquest:"If enabled, your Android package will be compatible with Meta Quest devices.",form_details:"Your download will contain instructions for submitting your app to the Google Play Store.",source_code:"If enabled, your download will include the source code for your Android app.",signing_key:"PWABuilder will generate a new signing key for you and sign your APK with it. Your download will contain the new signing key and passwords.",unsigned_key:"PWABuilder will generate an unsigned APK. Google Play Store will sign your package. This is Google's recommended approach.",upload_signing_key:"Upload your existing signing key. Use this option if you already have a signing key and you want to publish a new version of an existing app in Google Play.",key_country_code:"The 2 letter country code to list on the signing key",key_pw:"The password for the signing key. Type a new password or leave empty to use a generated password.",key_store_pw:"The password for the key store. Type a new password or leave empty to use a generated password."}},resource_hub:{titles:{blog:"Blog",demo:"Demo",documentation:"Documentation"},description:{blog:"Check out the PWABuilder blog for all the latest on PWABuilder and PWAs",demo:"Check out our demos to see what PWAs are capable of!",documentation:"Looking for our documentation? Tap View Documentation to get started!"}},resource_hub_new:{titles:{manifest:"Web Manifest",sw:"Service Worker",https:"Secure HTTPS"},description:{manifest:"A Web App Manifest of a website governs how your Progressive Web App (PWA) looks and behaves when installed on a device.",sw:"Service Workers are a special type of Web Worker with the ability to intercept, modify, and respond to all offline and online network requests using the Fetch API.",https:"Having a secure HTTPS endpoint and other user safeguards making the user experience secure from end to end."}},community_hub:{titles:{github:"Contribute on GitHub",twitter:"Follow us on Twitter!",discord:"Join us on our Discord Server"},description:{github:"Contribute to this open source project by joining our PWA community on GitHub.",twitter:"Meet our fellow PWA enthusiast and follow our latest releases and updates on Twitter.",discord:"Join the PWABuilder Discord community to connect with the people and resources you need."}},success_stories:{stat:{trivago:"User traffic",alibaba:"Total conversions",pintrest:"Ad revenue",tinder:"Storage efficient"},value:{trivago:"+150%",alibaba:"+76%",pintrest:"+44%",tinder:"+90%"},description:{trivago:"Engagement for users who add to homescreen has increased by 150%. This increased engagement led to a 97% increase in click outs to hotel offers.",alibaba:"After upgrading to a PWA, Alibaba saw a 76% increase in total conversions across browsers. And 30% more monthly active users on Android.",pintrest:"With the new Pinterest PWA they were able to increase user-generated ad revenue by 44% and core engagement by 60%.",tinder:"The native Tinder application was a whopping 30MB, when Tinder transitioned to PWA they were able to reduce their file size down to 2.8MB. "}}},cc={manifest_options:{upload:"Your app's icon. This is the icon operating systems will use to represent your app. In Windows this is used in the taskbar, start menu etc, launch screen.",generate:"Screenshots of your PWA can be used in stores and the in-browser install prompt to help promote your PWA.",background_color:"The background_color member controls the splash screen color of your app.",theme_color:"The theme_color member defines the default theme color for your app. On Windows, this will be the color of your app's title bar.",name:"The name of your app as displayed to the user.",short_name:"The short name for your app. It's used where there is insufficent space to display the full name.",start_url:"A URL relative to the root of your domain that is opened when your app is launched, e.g. /index.html. Typically this is set to '/', indicating the root of the domain.",scope:"The scope member is a string that defines the navigation scope of this web application's application context.",display:"How your app is displayed. Standalone: Recommended. Your PWA appears like a native app, no browser UI is shown. Minimal-ui: similar to standalone but includes a refresh button and back button in your app's title bar. Fullscreen: Typically used in immersive games, your PWA takes up all the available display area without any browser UI or app title bar. Browser: full browser UI is shown.",orientation:"The default orientation your app should be used in, such as portrait or landscape.",language:"Specifies the primary language of the app.",description:"A description of your app. Appears in app listings, app storefronts, and app install UI."}},dc={none:"None",transparent:"Transparent",custom:"Custom Color"},uc={windows11:"Windows 11",windows10:"Windows 10",android:"Android",ios:"iOS",image_generator:"Image Generator",image_generator_text:"Quickly and easily create app icons for various platforms in the right size and format",image_details:"Image Details",image_details_text:"Specify the image details below.",input_image:"Choose your base image",input_image_help:"You should choose a 512x512 or larger square PNG/SVG/WEBP image. This image will be used to generate all the images for your chosen platforms.",padding:"Padding",padding_text:"0 is no padding, 1 is 100% of the source image. 0.3 is a typical value for most icons. For Windows 11 platform, this value is overriden on individual images based on UX guidelines.",background_color:"Background Color",best_guess:"Best guess",transparent:"Transparent",custom_color:"Custom color",platforms:"Platforms",platforms_text:"Select the platforms to generate images for."};var hc={button:nc,input:ac,text:lc,tooltip:cc,values:dc,imageGenerator:uc},pc=[{code:"ab",name:"Abkhaz"},{code:"aa",name:"Afar"},{code:"af",name:"Afrikaans"},{code:"ak",name:"Akan"},{code:"sq",name:"Albanian"},{code:"am",name:"Amharic"},{code:"ar",name:"Arabic"},{code:"an",name:"Aragonese"},{code:"hy",name:"Armenian"},{code:"as",name:"Assamese"},{code:"av",name:"Avaric"},{code:"ae",name:"Avestan"},{code:"ay",name:"Aymara"},{code:"az",name:"Azerbaijani"},{code:"bm",name:"Bambara"},{code:"ba",name:"Bashkir"},{code:"eu",name:"Basque"},{code:"be",name:"Belarusian"},{code:"bn",name:"Bengali"},{code:"bh",name:"Bihari"},{code:"bi",name:"Bislama"},{code:"bs",name:"Bosnian"},{code:"br",name:"Breton"},{code:"bg",name:"Bulgarian"},{code:"my",name:"Burmese"},{code:"ca",name:"Catalan; Valencian"},{code:"ch",name:"Chamorro"},{code:"ce",name:"Chechen"},{code:"ny",name:"Chichewa; Chewa; Nyanja"},{code:"zh",name:"Chinese"},{code:"cv",name:"Chuvash"},{code:"kw",name:"Cornish"},{code:"co",name:"Corsican"},{code:"cr",name:"Cree"},{code:"hr",name:"Croatian"},{code:"cs",name:"Czech"},{code:"da",name:"Danish"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;"},{code:"nl",name:"Dutch"},{code:"en",name:"English"},{code:"eo",name:"Esperanto"},{code:"et",name:"Estonian"},{code:"ee",name:"Ewe"},{code:"fo",name:"Faroese"},{code:"fj",name:"Fijian"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular"},{code:"gl",name:"Galician"},{code:"ka",name:"Georgian"},{code:"de",name:"German"},{code:"el",name:"Greek, Modern"},{code:"gn",name:"Guaran\xED"},{code:"gu",name:"Gujarati"},{code:"ht",name:"Haitian; Haitian Creole"},{code:"ha",name:"Hausa"},{code:"he",name:"Hebrew (modern)"},{code:"hz",name:"Herero"},{code:"hi",name:"Hindi"},{code:"ho",name:"Hiri Motu"},{code:"hu",name:"Hungarian"},{code:"ia",name:"Interlingua"},{code:"id",name:"Indonesian"},{code:"ie",name:"Interlingue"},{code:"ga",name:"Irish"},{code:"ig",name:"Igbo"},{code:"ik",name:"Inupiaq"},{code:"io",name:"Ido"},{code:"is",name:"Icelandic"},{code:"it",name:"Italian"},{code:"iu",name:"Inuktitut"},{code:"ja",name:"Japanese"},{code:"jv",name:"Javanese"},{code:"kl",name:"Kalaallisut, Greenlandic"},{code:"kn",name:"Kannada"},{code:"kr",name:"Kanuri"},{code:"ks",name:"Kashmiri"},{code:"kk",name:"Kazakh"},{code:"km",name:"Khmer"},{code:"ki",name:"Kikuyu, Gikuyu"},{code:"rw",name:"Kinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz"},{code:"kv",name:"Komi"},{code:"kg",name:"Kongo"},{code:"ko",name:"Korean"},{code:"ku",name:"Kurdish"},{code:"kj",name:"Kwanyama, Kuanyama"},{code:"la",name:"Latin"},{code:"lb",name:"Luxembourgish, Letzeburgesch"},{code:"lg",name:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger"},{code:"ln",name:"Lingala"},{code:"lo",name:"Lao"},{code:"lt",name:"Lithuanian"},{code:"lu",name:"Luba-Katanga"},{code:"lv",name:"Latvian"},{code:"gv",name:"Manx"},{code:"mk",name:"Macedonian"},{code:"mg",name:"Malagasy"},{code:"ms",name:"Malay"},{code:"ml",name:"Malayalam"},{code:"mt",name:"Maltese"},{code:"mi",name:"M\u0101ori"},{code:"mr",name:"Marathi (Mar\u0101\u1E6Dh\u012B)"},{code:"mh",name:"Marshallese"},{code:"mn",name:"Mongolian"},{code:"na",name:"Nauru"},{code:"nv",name:"Navajo, Navaho"},{code:"nb",name:"Norwegian Bokm\xE5l"},{code:"nd",name:"North Ndebele"},{code:"ne",name:"Nepali"},{code:"ng",name:"Ndonga"},{code:"nn",name:"Norwegian Nynorsk"},{code:"no",name:"Norwegian"},{code:"ii",name:"Nuosu"},{code:"nr",name:"South Ndebele"},{code:"oc",name:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa"},{code:"cu",name:"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{code:"om",name:"Oromo"},{code:"or",name:"Oriya"},{code:"os",name:"Ossetian, Ossetic"},{code:"pa",name:"Panjabi, Punjabi"},{code:"pi",name:"P\u0101li"},{code:"fa",name:"Persian"},{code:"pl",name:"Polish"},{code:"ps",name:"Pashto, Pushto"},{code:"pt",name:"Portuguese"},{code:"qu",name:"Quechua"},{code:"rm",name:"Romansh"},{code:"rn",name:"Kirundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan"},{code:"ru",name:"Russian"},{code:"sa",name:"Sanskrit (Sa\u1E41sk\u1E5Bta)"},{code:"sc",name:"Sardinian"},{code:"sd",name:"Sindhi"},{code:"se",name:"Northern Sami"},{code:"sm",name:"Samoan"},{code:"sg",name:"Sango"},{code:"sr",name:"Serbian"},{code:"gd",name:"Scottish Gaelic; Gaelic"},{code:"sn",name:"Shona"},{code:"si",name:"Sinhala, Sinhalese"},{code:"sk",name:"Slovak"},{code:"sl",name:"Slovene"},{code:"so",name:"Somali"},{code:"st",name:"Southern Sotho"},{code:"es",name:"Spanish; Castilian"},{code:"su",name:"Sundanese"},{code:"sw",name:"Swahili"},{code:"ss",name:"Swati"},{code:"sv",name:"Swedish"},{code:"ta",name:"Tamil"},{code:"te",name:"Telugu"},{code:"tg",name:"Tajik"},{code:"th",name:"Thai"},{code:"ti",name:"Tigrinya"},{code:"bo",name:"Tibetan Standard, Tibetan, Central"},{code:"tk",name:"Turkmen"},{code:"tl",name:"Tagalog"},{code:"tn",name:"Tswana"},{code:"to",name:"Tonga (Tonga Islands)"},{code:"tr",name:"Turkish"},{code:"ts",name:"Tsonga"},{code:"tt",name:"Tatar"},{code:"tw",name:"Twi"},{code:"ty",name:"Tahitian"},{code:"ug",name:"Uighur, Uyghur"},{code:"uk",name:"Ukrainian"},{code:"ur",name:"Urdu"},{code:"uz",name:"Uzbek"},{code:"ve",name:"Venda"},{code:"vi",name:"Vietnamese"},{code:"vo",name:"Volap\xFCk"},{code:"wa",name:"Walloon"},{code:"cy",name:"Welsh"},{code:"wo",name:"Wolof"},{code:"fy",name:"Western Frisian"},{code:"xh",name:"Xhosa"},{code:"yi",name:"Yiddish"},{code:"yo",name:"Yoruba"},{code:"za",name:"Zhuang, Chuang"}];function fc(){return hc}const U=fc();pc.map(e=>({formatted:e.name,code:e.code}));var mc=(e=>(e[e.smallUpper=479]="smallUpper",e[e.mediumLower=480]="mediumLower",e[e.mediumUpper=639]="mediumUpper",e[e.largeLower=640]="largeLower",e[e.largeUpper=1023]="largeUpper",e[e.xLargeLower=1024]="xLargeLower",e[e.xLargeUpper=1365]="xLargeUpper",e[e.xxLargeLower=1366]="xxLargeLower",e[e.xxLargeUpper=1919]="xxLargeUpper",e[e.xxxLargeLower=1920]="xxxLargeLower",e))(mc||{});function Je(e){return dt(`
    @media screen ${Lt({upper:479})} {
      ${e}
    }
  `)}function Oe(e,t="both"){return dt(`
    @media screen ${Lt({lower:t!=="no-lower"?480:void 0,upper:t!=="no-upper"?639:void 0})} {
      ${e}
    }
  `)}function ht(e,t="both"){return dt(`
    @media screen ${Lt({lower:t!=="no-lower"?640:void 0,upper:t!=="no-upper"?1023:void 0})} {
      ${e}
    }
  `)}function pt(e,t="both"){return dt(`
    @media screen ${Lt({lower:t!=="no-lower"?1024:void 0,upper:t!=="no-upper"?1365:void 0})} {
      ${e}
    }
  `)}function gc(e,t="both"){return dt(`
    @media screen ${Lt({lower:t!=="no-lower"?1366:void 0,upper:t!=="no-upper"?1919:void 0})} {
      ${e}
    }
  `)}function Qe(e){return dt(`
    @media screen ${Lt({lower:1920})} {
      ${e}
    }
  `)}function Lt({lower:e,upper:t}){const o=[];return e&&o.push(`(min-width: ${e}px)`),t&&o.push(`(max-width: ${t}px)`),"and "+o.join(" and ")}function Ad(e,t){let o;try{t&&(o=new URL(t))}catch(i){i instanceof TypeError||console.error(i)}if(!o)try{e&&t&&(o=new URL(t,e))}catch(i){console.error(i)}return!o&&e?new URL(e):o}function Td(e,t){try{return new URL(e,t),null}catch(o){return`${o}`}}function Ps(e){let t;if(e&&!e.startsWith("http")&&!e.startsWith("https")&&(t="https://"+e),t){if(_i(t)===!1&&!e.toLowerCase().startsWith("http://"))throw new Error("This error means that you may have a bad https cert or the url may not be correct");return t}return e}function _i(e){var t=new RegExp("^((https?:)?\\/\\/)?(?:\\S+(?::\\S*)?@)?(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\\\#[-a-z\\\\d_]*)?","i");return!!t.test(e)}let ni;function bc(e,t,o){const i={name:t,uri:e,properties:o};zs().then(r=>r.trackPageView(i)).catch(r=>console.warn("OneDS record page view error",r))}function vc(e,t,o,i){zs().then(r=>r.capturePageAction(null,{actionType:"O",behavior:o,contentTags:{scn:e,scnstp:t},content:i})).catch(r=>console.warn("Process step was not recorded",r))}function zs(){return ni||(ni=new Promise((e,t)=>{const o=document.createElement("script");o.onerror=()=>t("Analytics script failed to load"),o.onload=()=>{const i=yc();i instanceof Error?t(i):e(i)},o.src="https://az416426.vo.msecnd.net/scripts/c/ms.analytics-web-2.min.js",document.head.appendChild(o)})),ni}function yc(){try{const e=new window.oneDS.ApplicationInsights,t={instrumentationKey:"f72753e593724c6183de8c8a3a5f419d-5e71f893-09c1-41d8-abf0-667e691c28a9-6593",webAnalyticsConfiguration:{manageCv:!0,urlCollectHash:!1,syncPageActionNavClick:!1,autoCapture:{click:!0,scroll:!1,pageView:!1,jsError:!1,msTags:!1,onUnload:!0}}};return e.initialize(t,[]),e}catch(e){return e instanceof Error?e:new Error(`Error initializing analytics: ${e}`)}}var D;(function(e){e[e.ContentUpdate=0]="ContentUpdate",e[e.NavigationBack=1]="NavigationBack",e[e.NavigationSelectionJump=2]="NavigationSelectionJump",e[e.NavigationForward=3]="NavigationForward",e[e.Apply=4]="Apply",e[e.Remove=5]="Remove",e[e.Sort=6]="Sort",e[e.Expand=7]="Expand",e[e.Reduce=8]="Reduce",e[e.OpenContextMenu=9]="OpenContextMenu",e[e.Tab=10]="Tab",e[e.Copy=11]="Copy",e[e.Experimentation=12]="Experimentation",e[e.Print=13]="Print",e[e.Show=14]="Show",e[e.Hide=15]="Hide",e[e.Maximize=16]="Maximize",e[e.Minimize=17]="Minimize",e[e.Backbutton=18]="Backbutton",e[e.StartProcess=20]="StartProcess",e[e.ProcessCheckpoint=21]="ProcessCheckpoint",e[e.CompleteProcess=22]="CompleteProcess",e[e.CancelProcess=23]="CancelProcess",e[e.DownloadCommit=40]="DownloadCommit",e[e.Download=41]="Download",e[e.SearchAutoComplete=60]="SearchAutoComplete",e[e.Search=61]="Search",e[e.SearchInitiate=62]="SearchInitiate",e[e.TextBoxInput=63]="TextBoxInput",e[e.Purchase=80]="Purchase",e[e.AddToCart=81]="AddToCart",e[e.ViewCart=82]="ViewCart",e[e.AddToWishlist=83]="AddToWishlist",e[e.FindStore=84]="FindStore",e[e.Checkout=85]="Checkout",e[e.RemoveFromCart=86]="RemoveFromCart",e[e.PurchaseComplete=87]="PurchaseComplete",e[e.ViewCheckoutPage=88]="ViewCheckoutPage",e[e.ViewCartPage=89]="ViewCartPage",e[e.ViewPDP=90]="ViewPDP",e[e.UpdateItemQuantity=91]="UpdateItemQuantity",e[e.IntentToBuy=92]="IntentToBuy",e[e.PushToInstall=93]="PushToInstall",e[e.SignIn=100]="SignIn",e[e.SignOut=101]="SignOut",e[e.SocialShare=120]="SocialShare",e[e.SocialLike=121]="SocialLike",e[e.SocialReply=122]="SocialReply",e[e.Call=123]="Call",e[e.Email=124]="Email",e[e.Community=125]="Community",e[e.SocialFollow=126]="SocialFollow",e[e.Vote=140]="Vote",e[e.SurveyInitiate=141]="SurveyInitiate",e[e.SurveyComplete=142]="SurveyComplete",e[e.ReportApplication=143]="ReportApplication",e[e.ReportReview=144]="ReportReview",e[e.SurveyCheckpoint=145]="SurveyCheckpoint",e[e.Contact=145]="Contact",e[e.InitiateRegistration=161]="InitiateRegistration",e[e.RegistrationComplete=162]="RegistrationComplete",e[e.CancelSubscription=163]="CancelSubscription",e[e.RenewSubscription=164]="RenewSubscription",e[e.ChangeSubscription=165]="ChangeSubscription",e[e.RegistrationCheckpoint=166]="RegistrationCheckpoint",e[e.ChatInitiate=180]="ChatInitiate",e[e.ChatEnd=181]="ChatEnd",e[e.TrialSignup=200]="TrialSignup",e[e.TrialInitiate=201]="TrialInitiate",e[e.SignUp=210]="SignUp",e[e.FreeSignUp=211]="FreeSignUp",e[e.PartnerReferral=220]="PartnerReferral",e[e.LearnLowerFunnel=230]="LearnLowerFunnel",e[e.LearnHigherFunnel=231]="LearnHigherFunnel",e[e.ShoppingIntent=232]="ShoppingIntent",e[e.VideoStart=240]="VideoStart",e[e.VideoPause=241]="VideoPause",e[e.VideoContinue=242]="VideoContinue",e[e.VideoCheckpoint=243]="VideoCheckpoint",e[e.VideoJump=244]="VideoJump",e[e.VideoComplete=245]="VideoComplete",e[e.VideoBuffering=246]="VideoBuffering",e[e.VideoError=247]="VideoError",e[e.VideoMute=248]="VideoMute",e[e.VideoUnmute=249]="VideoUnmute",e[e.VideoFullScreen=250]="VideoFullScreen",e[e.VideoUnfullscreen=251]="VideoUnfullscreen",e[e.VideoReplay=252]="VideoReplay",e[e.VideoPlayerLoad=253]="VideoPlayerLoad",e[e.VideoPlayerClick=254]="VideoPlayerClick",e[e.VideoVolumeControl=255]="VideoVolumeControl",e[e.VideoAudioTrackControl=256]="VideoAudioTrackControl",e[e.VideoClosedCaptionControl=257]="VideoClosedCaptionControl",e[e.VideoClosedCaptionStyle=258]="VideoClosedCaptionStyle",e[e.VideoResolutionControl=259]="VideoResolutionControl",e[e.VirtualEventJoin=260]="VirtualEventJoin",e[e.VirtualEventEnd=261]="VirtualEventEnd",e[e.Impression=280]="Impression",e[e.Click=281]="Click",e[e.RichMediaComplete=282]="RichMediaComplete",e[e.AdBuffering=283]="AdBuffering",e[e.AdError=284]="AdError",e[e.AdStart=285]="AdStart",e[e.AdComplete=286]="AdComplete",e[e.AdSkip=287]="AdSkip",e[e.AdTimeout=288]="AdTimeout",e[e.Other=300]="Other"})(D||(D={}));const G={isProduction:!1,manifestCreatorUrl:"",api:"",windowsPackageGeneratorUrl:"",androidPackageGeneratorUrl:"",iosPackageGeneratorUrl:"",oculusPackageGeneratorUrl:"",imageGeneratorUrl:"",safeUrlFetcher:"",webPackageGeneratorFormUrl:"",zipCreatorUrl:"",validateGiveawayUrl:"",tokensCampaignRunning:!1};G.isProduction=!0,G.api="https://pwabuilder-apiv2-node.azurewebsites.net/api",G.manifestCreatorUrl="https://pwabuilder-manifest-creator.azurewebsites.net/api/create",G.windowsPackageGeneratorUrl="https://pwabuilder-windows-docker.azurewebsites.net/msix/generatezip",G.androidPackageGeneratorUrl="https://pwabuilder-cloudapk.azurewebsites.net",G.iosPackageGeneratorUrl="https://pwabuilder-ios.azurewebsites.net/packages/create",G.oculusPackageGeneratorUrl="https://pwabuilder-oculus-linux-docker-app.azurewebsites.net/packages/create",G.imageGeneratorUrl="https://appimagegenerator-prod-dev.azurewebsites.net",G.safeUrlFetcher="https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl",G.webPackageGeneratorFormUrl="https://pwabuilder-web-platform.azurewebsites.net/form",G.zipCreatorUrl="https://azure-express-zip-creator.azurewebsites.net/api",G.validateGiveawayUrl="https://pwabuilder-tokens-giveaway.azurewebsites.net/api";function wc(e,t,o){G.isProduction&&bc(e,t,As(o))}function V(e,t,o){{const i=JSON.parse(sessionStorage.getItem("demoURL"));let r="pwa-builder-v4";i&&(r="demo-process");let s=window.location.pathname.slice(1);s.length==0&&(s="home"),s==="freeToken"&&(r="free-tokens-flow");let n=s+"."+e;_c(r,n,t,o)}}function _c(e,t,o,i){G.isProduction&&vc(e,t,o,As(i))}function xc(e){const t=new URLSearchParams(window.location.search).get(e);t&&sessionStorage.setItem(e,t)}function As(e){const t=sessionStorage.getItem("ref");return t&&(e.referrer=t),e}var kc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,Ts=(e,t,o,i)=>{for(var r=i>1?void 0:i?$c(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&kc(t,o,r),r};let xi=class extends B{constructor(){super(),this.page="home"}static get styles(){return g`
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

      ${Je(g`

      `)}

      ${Oe(g`
        header nav {
          display: initial;
        }

        #desktop-nav {
          display: flex;
        }

      `)}


      ${ht(g`
        #desktop-nav {
          display: flex;
        }

      `)}

      ${pt(g`
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

      ${Qe(g`
        header {
          background-color: white;
        }
      `)}
    `}firstUpdated(){var e,t;console.log("first updated page",this.page),(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#header-icon"))==null||t.addEventListener("keydown",o=>{o.key==="Enter"&&Ee.go("/")})}recordGoingHome(){window.location.href="/",V("header.logo_clicked",D.ProcessCheckpoint)}showMenu(){let e=this.shadowRoot.querySelector("sl-dropdown");e.open?(V("header.community_dropdown_closed",D.ProcessCheckpoint),e.hide()):(V("header.community_dropdown_expanded",D.ProcessCheckpoint),e.show())}handleClickingLink(e,t){this.shadowRoot.querySelector('[data-tag="'+e+'"]').click(),V(t,D.ProcessCheckpoint)}render(){return console.log(this.page),b`
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
              @click=${()=>V("header.blog_clicked",D.ProcessCheckpoint)}
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
              @click=${()=>V("header.docs_clicked",D.ProcessCheckpoint)}
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
    `}};Ts([d({type:String})],xi.prototype,"page",2);xi=Ts([de("app-header")],xi);var Cc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,Ni=(e,t,o,i)=>{for(var r=i>1?void 0:i?Sc(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Cc(t,o,r),r};let Mo=class extends B{constructor(){super(),this.companies=["facebook","instagram","mailchimp","plutotv","sketchapp","glass","tiktok","twitter"],this.paused=!1}static get styles(){return[g`
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
    `]}connectedCallback(){super.connectedCallback()}shuffle(e){let t=e.length,o;for(;t!=0;)o=Math.floor(Math.random()*t),t--,[e[t],e[o]]=[e[o],e[t]];return e}toggleAnimation(){this.paused=!this.paused;let e=this.shadowRoot.querySelector(".slide-track");this.paused?(e.style.animationPlayState="paused",V("middle.carousel_paused",D.ProcessCheckpoint)):(e.style.animationPlayState="running",V("middle.carousel_played",D.ProcessCheckpoint))}render(){return b`
    <div id="success-wrapper">
      <div id="success-title">
          <h2>Apps packaged</h2>
          <p>Companies of all sizes—from startups to Fortune 500s—have used PWABuilder to package their PWAs.</p>
      </div>
      <div class="slider">
        <div class="slide-track">
          ${this.companies.map(e=>b`
              <div class="slide">
                <img src="/assets/new/${e}_carousel.png" alt="${e} logo" />
              </div>`)}
            ${this.companies.map(e=>b`
              <div class="slide">
                <img src="/assets/new/${e}_carousel.png" alt="${e} logo" />
              </div>`)}
        </div>
      </div>
      ${this.paused?b`<button class="controls" type="button" @click=${()=>this.toggleAnimation()}  role="button" aria-label="Click here to play carousel">
              <sl-icon name="play-fill" alt="Play apps scrolling button"  role="img"></sl-icon>
            </button>`:b`<button class="controls" type="button" @click=${()=>this.toggleAnimation()} role="button" aria-label="Click here to pause carousel"> 
              <sl-icon name="pause-fill" alt="Pause apps scrolling button" role="img"></sl-icon>
            </button>`}
    </div>
    `}};Ni([x()],Mo.prototype,"companies",2);Ni([x()],Mo.prototype,"paused",2);Mo=Ni([de("companies-packaged")],Mo);const Ec=[{imageUrl:"/assets/new/manifest.svg",title:U.text.resource_hub_new.titles.manifest,description:U.text.resource_hub_new.description.manifest,linkUrl:"https://docs.pwabuilder.com/#/home/pwa-intro?id=web-app-manifests"},{imageUrl:"/assets/new/sw.svg",title:U.text.resource_hub_new.titles.sw,description:U.text.resource_hub_new.description.sw,linkUrl:"https://docs.pwabuilder.com/#/home/sw-intro"},{imageUrl:"/assets/new/https.svg",title:U.text.resource_hub_new.titles.https,description:U.text.resource_hub_new.description.https,linkUrl:"https://docs.pwabuilder.com/#/home/sw-intro?id=security"}];function Pc(){return Ec}var zc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,lo=(e,t,o,i)=>{for(var r=i>1?void 0:i?Ac(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&zc(t,o,r),r};let kt=class extends B{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.linkRoute=""}static get styles(){return[g`
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
      ${Je(g`
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
      ${Oe(g`
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
      ${ht(g`
        .card {
          min-width: 140px;
          max-width: 200px;
          height: 12em;
          padding: .75em;
          padding-bottom: 1.25em;
        }
      `)}
      /*1024px - 1365px*/
      ${pt(g`
      `)}
      /* > 1920 */
      ${Qe(g`
          
      `)}
    `]}firstUpdated(){}render(){return b`
      <div class="card">
        <div class="card-content">
          <img src=${this.imageUrl} alt="${this.cardTitle} icon" role="img"/>
          <h3>${this.cardTitle}</h3>
          <p>${this.description}</p>
        </div>
        <div class="card-actions" @click=${()=>V("middle."+this.cardTitle+"_learn_more_clicked",D.ProcessCheckpoint)}>
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
    `}};lo([d({type:String})],kt.prototype,"imageUrl",2);lo([d({type:String})],kt.prototype,"cardTitle",2);lo([d({type:String})],kt.prototype,"description",2);lo([d({type:String})],kt.prototype,"linkRoute",2);kt=lo([de("info-card")],kt);var Tc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Ls=(e,t,o,i)=>{for(var r=i>1?void 0:i?Lc(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Tc(t,o,r),r};let ki=class extends B{constructor(){super(),this.cards=[]}static get styles(){return[g`
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
      ${Je(g`
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
      ${Oe(g`
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
      ${ht(g`
          #hub-panel{
            background-image: url(/assets/new/OtterBackgroundPWA1024.jpg);
            background-position: center center;
            padding: 3.25em;
          }
      `)}

      /*1024px - 1365px*/
      ${pt(g`
          #hub-panel {
            background: url(/assets/new/OtterBackgroundPWA1366.jpg);
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
          }
      `)}

      /* > 1920 */
      ${Qe(g`
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
          ${this.cards.map(e=>b`
            <info-card
            cardTitle=${e.title}
            description=${e.description}
            imageUrl=${e.imageUrl}
            linkRoute=${e.linkUrl}
          >
          </info-card>
          `)}
        </div>
      </div>
    `}};Ls([x()],ki.prototype,"cards",2);ki=Ls([de("resource-hub")],ki);const Oc=[{imageUrl:"/assets/new/trivago.png",stat:U.text.success_stories.stat.trivago,description:U.text.success_stories.description.trivago,value:U.text.success_stories.value.trivago,company:"trivago",source:"https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/"},{imageUrl:"/assets/new/alibaba.png",stat:U.text.success_stories.stat.alibaba,description:U.text.success_stories.description.alibaba,value:U.text.success_stories.value.alibaba,company:"alibaba",source:"https://developers.google.com/web/showcase/2016/alibaba"},{imageUrl:"/assets/new/pintrest.png",stat:U.text.success_stories.stat.pintrest,description:U.text.success_stories.description.pintrest,value:U.text.success_stories.value.pintrest,company:"pintrest",source:"https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154"},{imageUrl:"/assets/new/tinder.png",stat:U.text.success_stories.stat.tinder,description:U.text.success_stories.description.tinder,value:U.text.success_stories.value.tinder,company:"tinder",source:"https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0"}];function Rc(){return Oc}var Ic=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,ft=(e,t,o,i)=>{for(var r=i>1?void 0:i?Mc(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Ic(t,o,r),r};let Ye=class extends B{constructor(){super(),this.imageUrl="",this.cardStat="",this.description="",this.cardValue="",this.company="",this.source=""}static get styles(){return[g`
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
      ${Je(g`
        .success-card {
          width: 280px;
          box-sizing: border-box;
        }
        
      `)}

      /* 480px - 639px */
      ${Oe(g`
        .success-card {
          width: 400px;
        }
        .success-line-one h3 {
          font-size: 28px;
        }
      `)}

      /* 640px - 1023px */
      ${ht(g`
          .success-card {
            width: 305px;
          }
      `)}

      /*1024px - 1365px*/
      ${pt(g`

      `)}

      /* > 1920px */
      ${Qe(g`
        .success-card {
          width: 525px;
        }
      `)}
    `]}render(){return b`
      <a @click=${()=>V("middle."+this.company+"_clicked",D.ProcessCheckpoint)} class="success-card" href="${this.source}" rel="noopener" target="_blank" aria-label=${"Success story of "+this.company+" link, click for more details on separate tab"}>
        <div class="success-line-one">
           <img src=${this.imageUrl} alt="${this.company} logo"/>
           <h3 class="success-stat">
             <span>${this.cardValue}</span> ${this.cardStat}
           </h3>    
        </div>
        <p class="success-desc">${this.description}</p>
  </a>
    `}};ft([d({type:String})],Ye.prototype,"imageUrl",2);ft([d({type:String})],Ye.prototype,"cardStat",2);ft([d({type:String})],Ye.prototype,"description",2);ft([d({type:String})],Ye.prototype,"cardValue",2);ft([d({type:String})],Ye.prototype,"company",2);ft([d({type:String})],Ye.prototype,"source",2);Ye=ft([de("success-card")],Ye);var Uc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Os=(e,t,o,i)=>{for(var r=i>1?void 0:i?Dc(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Uc(t,o,r),r};let $i=class extends B{constructor(){super(),this.cards=[]}static get styles(){return[g`
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
      ${Je(g`
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
      ${Oe(g`
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
      ${ht(g`
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
      ${pt(g`
          #success-panel {
            /* padding-left: 15%; */
            padding-bottom: 2.5em;
          }
      `)}

      /* > 1920px */
      ${Qe(g`
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
            ${this.cards.map(e=>b`
            <success-card
            cardStat=${e.stat}
            description=${e.description}
            imageUrl=${e.imageUrl}
            cardValue=${e.value}
            company=${e.company}
            source=${e.source}
            >
            </success-card>
            `)}
          </div>
        </div>
      </div>
    `}};Os([x()],$i.prototype,"cards",2);$i=Os([de("success-stories")],$i);const Fc=[{imageUrl:"/assets/new/github.png",title:U.text.community_hub.titles.github,description:U.text.community_hub.description.github,links:[{link:"https://github.com/pwa-builder/PWABuilder",text:"Visit us on GitHub"},{link:"https://github.com/pwa-builder/PWABuilder/wiki/How-to-contribute-to-PWABuilder",text:"Contribute to project"}],company:"github"},{imageUrl:"/assets/new/twitter.png",title:U.text.community_hub.titles.twitter,description:U.text.community_hub.description.twitter,links:[{link:"https://twitter.com/pwabuilder",text:"Follow our Twitter"}],company:"twitter"},{imageUrl:"/assets/new/discord.png",title:U.text.community_hub.titles.discord,description:U.text.community_hub.description.discord,links:[{link:"https://aka.ms/pwabuilderdiscord",text:"Join our Discord"}],company:"discord"}];function Vc(){return Fc}var Nc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,Ot=(e,t,o,i)=>{for(var r=i>1?void 0:i?Hc(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Nc(t,o,r),r};let lt=class extends B{constructor(){super(),this.imageUrl="",this.cardTitle="",this.description="",this.company="",this.links=[]}static get styles(){return[g`
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
      ${Je(g`
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
      ${Oe(g`
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
            ${this.links&&this.links.map(e=>b`
              <div class="card-link-box">
                <a @click=${()=>V("bottom."+e.text+"_clicked",D.ProcessCheckpoint)} href=${e.link} target="_blank" rel="noopener" aria-label="${e.text}, will open in separate tab">${e.text}</a>
                <img src="/assets/new/arrow.svg" alt="Click here to ${e.text}, will open separate tab" role="button"/>
              </div>
              `)}
          </div>
        </div>
      </div>
    `}};Ot([d({type:String})],lt.prototype,"imageUrl",2);Ot([d({type:String})],lt.prototype,"cardTitle",2);Ot([d({type:String})],lt.prototype,"description",2);Ot([d({type:String})],lt.prototype,"company",2);Ot([d({type:Array})],lt.prototype,"links",2);lt=Ot([de("community-card")],lt);var jc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Rs=(e,t,o,i)=>{for(var r=i>1?void 0:i?Wc(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&jc(t,o,r),r};let Ci=class extends B{constructor(){super(),this.cards=[]}static get styles(){return[g`
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
       ${Je(g`
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
      ${Oe(g`
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
      ${ht(g`
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
      ${pt(g`
          
      `)}

      @media (min-width: 1024px) and (max-width: 1160px) {
        #community-photo img { 
          width: 380px;
        }
      }

      /* > 1920px */
      ${Qe(g`
          #community-photo img { 
            width: 569px;
            height: auto;
          }
      `)}
    `]}connectedCallback(){super.connectedCallback(),this.cards=Vc()}render(){return b`
      <div id="community-panel">
        <div id="community-photo">
          <img src="/assets/new/community-image.png" alt="social hub image" role="img"/>
        </div>
        <div id="community-content">
          <h2>Join our community</h2>
          <div id="community-cards">
            ${this.cards.map(e=>b`
              <community-card
              cardTitle=${e.title}
              description=${e.description}
              imageUrl=${e.imageUrl}
              company=${e.company}
              .links=${e.links}
            >
            </community-card>
            `)}
          </div>
        </div>
      </div>
    `}};Rs([x()],Ci.prototype,"cards",2);Ci=Rs([de("community-hub")],Ci);var $t=(e=>(e.manifest="PWABuilderManifest",e.currentUrl="current_url",e))($t||{}),Is=(e=>(e.manifestUpdate="MANIFEST_UPDATE",e))(Is||{}),te=(e=>(e.DONE="done",e.ACTIVE="active",e.PENDING="pending",e))(te||{}),Gt=(e=>(e.TEST="Test",e.REVIEW="Review",e.PUBLISH="Package",e.COMPLETE="Complete",e))(Gt||{});function q(e,t,o,i,r){if(!e||e.length===0)return null;const s=qc(e)?e:e.map(l=>new Rt(l)),n=s.findLast(l=>l.isExactMatch(t,o,i,r));if(n)return n.getIcon();var c=s.findLast(l=>l.isSuitableIcon(t,o,i,r));return(c==null?void 0:c.getIcon())||null}function Ld(e){const t=(e||[]).map(o=>new Rt(o));return q(t,"any",512,512,"image/png")||q(t,"maskable",512,512,"image/png")||q(t,"any",192,192,"image/png")||q(t,"maskable",192,192,"image/png")||q(t,"any",512,512,"image/jpeg")||q(t,"maskable",512,512,"image/jpeg")||q(t,"any",192,192,"image/jpeg")||q(t,"maskable",192,192,"image/jpeg")||q(t,"any",512,512,void 0)||q(t,"maskable",512,512,void 0)||q(t,"any",192,192,void 0)||q(t,"maskable",192,192,void 0)||q(t,"any",0,0,"image/png")||q(t,"maskable",0,0,"image/png")||q(t,"any",0,0,"image/jpeg")||q(t,"maskable",0,0,"image/jpeg")||q(t,"any",0,0,void 0)||q(t,"maskable",0,0,void 0)}function qc(e){return e[0]instanceof Rt}const it=class{constructor(e){this.icon=e}getProbableFileExtension(){if(!this.icon.type)return this.getFileExtensionFromSrc();const e=this.getFormat();if(e)return e.exts[0];const t=this.icon.type.lastIndexOf("/");return t!=-1?this.icon.type.substring(t+1):null}isAtLeast(e,t){return this.getDimensions().some(i=>i.width>=e&&i.height>=t)}get isPng(){return this.getMimeTypeOrGuessFromSrc()===it.pngFormat.mime}get isJpg(){return this.getMimeTypeOrGuessFromSrc()===it.jpgFormat.mime}get isSquare(){return this.getDimensions().some(t=>t.width===t.height)}get isEmbedded(){return this.icon.src.includes("data:image")}hasPurpose(e){return e?(this.icon.purpose||"any").split(" ").some(t=>t.toLowerCase()===e.toLowerCase()):!0}hasSize(e){return(this.icon.sizes||"0x0").split(" ").some(t=>t===e)}createIconWithoutUrlEncodedSrc(e){var o;const t={...this.icon};return(o=t.src)!=null&&o.startsWith("data:image")&&(t.src=e),t}getIcon(){return this.icon}getDimensions(){return(this.icon.sizes||"0x0").split(" ").map(e=>{const t=e.split("x");return{width:Number.parseInt(t[0]||"0",10),height:Number.parseInt(t[1]||"0",10)}})}hasMimeType(e){return e?this.getMimeTypeOrGuessFromSrc()===e.toLowerCase():!0}isExactMatch(e,t,o,i){const r=`${t}x${o}`;return this.hasPurpose(e)&&this.hasSize(r)&&!this.isEmbedded&&this.hasMimeType(i)}isSuitableIcon(e,t,o,i){if(this.isExactMatch(e,t,o,i)||!e&&this.isExactMatch(null,t,o,i))return!0;const n=!(t===o)||this.isSquare;return!!(this.hasPurpose(e)&&this.isAtLeast(t,o)&&!this.isEmbedded&&this.hasMimeType(i)&&n)}async resolvesSuccessfully(e){return this.icon.src?new Promise(t=>{const o=new Image,i=new URL(this.icon.src,e);o.src=`${G.safeUrlFetcher}?checkExistsOnly=false&url=${encodeURIComponent(i.toString())}`,o.onload=()=>{o.complete&&o.naturalHeight>0?t(!0):t(!1)},o.onerror=()=>{t(!1)}}):Promise.resolve(!1)}getFileExtensionFromSrc(){const e=this.getFormat();return(e==null?void 0:e.exts[0])||null}getFormat(){var i;const e=it.formats.find(r=>r.mime===this.icon.type);if(e)return e;const t=((i=this.icon.src)==null?void 0:i.toLowerCase())||"",o=it.formats.find(r=>r.exts.some(s=>t.endsWith(`.${s}`)));return o!=null?o:null}getMimeTypeOrGuessFromSrc(){if(this.icon.type)return this.icon.type;const e=this.getFormat();return(e==null?void 0:e.mime)||null}};let Rt=it;Rt.pngFormat={exts:["png"],mime:"image/png"};Rt.jpgFormat={exts:["jpg","jpeg"],mime:"image/jpeg"};Rt.formats=[it.pngFormat,it.jpgFormat,{exts:["webp"],mime:"image/webp"},{exts:["gif"],mime:"image/gif"},{exts:["ico"],mime:"image/x-icon"},{exts:["tiff"],mime:"image/tiff"},{exts:["bmp"],mime:"image/bmp"},{exts:["svg"],mime:"image/svg+xml"}];var Ms=Object.defineProperty,Bc=e=>Ms(e,"__esModule",{value:!0}),It=(e,t)=>()=>(e&&(t=e(e=0)),t),Mt=(e,t)=>{Bc(e);for(var o in t)Ms(e,o,{get:t[o],enumerable:!0})},Us={};Mt(Us,{default:()=>Ds});var Ds,Gc=It(()=>{Ds=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,o)=>{let i=document.createElement("input");i.type="file";let r=[...e.map(l=>l.mimeTypes||[]).join(),e.map(l=>l.extensions||[]).join()].join();i.multiple=e[0].multiple||!1,i.accept=r||"";let s=()=>c(o),n=l=>{typeof c=="function"&&c(),t(l)},c=e[0].legacySetup&&e[0].legacySetup(n,s,i);i.addEventListener("change",()=>{n(i.multiple?Array.from(i.files):i.files[0])}),i.click()}))}),Fs={};Mt(Fs,{default:()=>Vs});var Fr,Vs,Kc=It(()=>{Fr=async e=>{let t=await e.getFile();return t.handle=e,t},Vs=async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((r,s)=>{t[s]={description:r.description||"",accept:{}},r.mimeTypes?r.mimeTypes.map(n=>{t[s].accept[n]=r.extensions||[]}):t[s].accept["*/*"]=r.extensions||[]});let o=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),i=await Promise.all(o.map(Fr));return e[0].multiple?i:i[0]}}),Ns={};Mt(Ns,{default:()=>Hs});var Hs,Yc=It(()=>{Hs=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,o)=>{let i=document.createElement("input");i.type="file",i.webkitdirectory=!0;let r=()=>n(o),s=c=>{typeof n=="function"&&n(),t(c)},n=e[0].legacySetup&&e[0].legacySetup(s,r,i);i.addEventListener("change",()=>{let c=Array.from(i.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(c=c.filter(l=>l.webkitRelativePath.split("/").every(u=>!e[0].skipDirectory({name:u,kind:"directory"})))):c=c.filter(l=>l.webkitRelativePath.split("/").length===2),s(c)}),i.click()}))}),js={};Mt(js,{default:()=>Ws});var ai,Ws,Xc=It(()=>{ai=async(e,t,o=e.name,i)=>{let r=[],s=[];for await(let n of e.values()){let c=`${o}/${n.name}`;n.kind==="file"?s.push(n.getFile().then(l=>(l.directoryHandle=e,Object.defineProperty(l,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>c})))):n.kind==="directory"&&t&&(!i||!i(n))&&r.push(ai(n,t,c,i))}return[...(await Promise.all(r)).flat(),...await Promise.all(s)]},Ws=async(e={})=>{e.recursive=e.recursive||!1;let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return ai(t,e.recursive,void 0,e.skipDirectory)}}),qs={};Mt(qs,{default:()=>Bs});async function Jc(e,t){let o=e.getReader(),i=new ReadableStream({start(s){return n();async function n(){return o.read().then(({done:c,value:l})=>{if(c){s.close();return}return s.enqueue(l),n()})}}}),r=new Response(i);return o.releaseLock(),new Blob([await r.blob()],{type:t})}var Bs,Qc=It(()=>{Bs=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let o=document.createElement("a"),i=e;"body"in e&&(i=await Jc(e.body,e.headers.get("content-type"))),o.download=t.fileName||"Untitled",o.href=URL.createObjectURL(i);let r=()=>n(reject),s=()=>{typeof n=="function"&&n()},n=t.legacySetup&&t.legacySetup(s,r,o);return o.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(o.href),30*1e3),s()}),o.click(),null}}),Gs={};Mt(Gs,{default:()=>Ks});var Ks,Zc=It(()=>{Ks=async(e,t=[{}],o=null,i=!1)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";let r=[];if(t.forEach((c,l)=>{r[l]={description:c.description||"",accept:{}},c.mimeTypes?(l===0&&(e.type?c.mimeTypes.push(e.type):e.headers&&e.headers.get("content-type")&&c.mimeTypes.push(e.headers.get("content-type"))),c.mimeTypes.map(u=>{r[l].accept[u]=c.extensions||[]})):e.type&&(r[l].accept[e.type]=c.extensions||[])}),o)try{await o.getFile()}catch(c){if(o=null,i)throw c}let s=o||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:r,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),n=await s.createWritable();return"stream"in e?(await e.stream().pipeTo(n),s):"body"in e?(await e.body.pipeTo(n),s):(await n.write(blob),await n.close(),s)}}),ed=(()=>{if(typeof self=="undefined")return!1;if("top"in self&&self!==top)try{top.location+""}catch{return!1}else if("showOpenFilePicker"in self)return"showOpenFilePicker";return!1})(),Hi=ed;Hi?Promise.resolve().then(()=>(Kc(),Fs)):Promise.resolve().then(()=>(Gc(),Us));Hi?Promise.resolve().then(()=>(Xc(),js)):Promise.resolve().then(()=>(Yc(),Ns));Hi?Promise.resolve().then(()=>(Zc(),Gs)):Promise.resolve().then(()=>(Qc(),qs));// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
let Uo,$o,Vr={progress:[{header:Gt.TEST,location:"/",done:te.ACTIVE,items:[{name:"Submit URL",done:te.PENDING},{name:"Run Tests",done:te.PENDING}]},{header:Gt.REVIEW,location:"/reportcard",done:te.PENDING,items:[{name:"Manifest",done:te.PENDING},{name:"Service Worker",done:te.PENDING},{name:"Security",done:te.PENDING}]},{header:Gt.PUBLISH,location:"/publish",done:te.PENDING,items:[{name:"Package",done:te.PENDING},{name:"Publish",done:te.PENDING}]},{header:Gt.COMPLETE,location:"/complete",done:te.PENDING,items:[{name:"Resources",done:te.PENDING}]}]};function td(e){Vr=e,sessionStorage.setItem("current_progress",JSON.stringify(Vr))}function Ys(e){e&&(Uo=e,sessionStorage.setItem($t.currentUrl,Uo))}function od(){const e=sessionStorage.getItem($t.currentUrl);if(Uo)return Uo;if(e)return e;throw new Error("No Good URL found for the current site")}function rt(){return $o||($o=id()),$o}function ji(e){$o=e,sessionStorage.setItem($t.manifest,JSON.stringify(e)),Ys(e.siteUrl)}function Od(){return rt().manifestUrl}function id(){try{const t=sessionStorage.getItem($t.manifest);if(t)return JSON.parse(t)}catch(t){console.error("Unable to load manifest from session",t)}const e={dir:"auto",display:"fullscreen",name:"placeholder",short_name:"placeholder",start_url:void 0,scope:"/",lang:"en",description:"placeholder description",theme_color:"#000000",background_color:"#000000",icons:[],screenshots:[]};return{manifest:e,initialManifest:e,siteUrl:sessionStorage.getItem($t.currentUrl)||"",manifestUrl:"",isGenerated:!0,isEdited:!1}}function rd(e,t){e===t&&(rt().isEdited=!1),Object.keys(e).forEach(o=>{if(Array.isArray(e[o])&&Array.isArray(t[o])){let i=e[o].flat(2),r=t[o].flat(2);i.forEach((s,n)=>{r.includes(s)===!0&&r[n]!==s&&(rt().isEdited=!0)})}else JSON.stringify(e[o])!==JSON.stringify(t[o])&&(rt().isEdited=!0)})}const sd="PWABuilder",nd="1.0.0";function ad(){let e="";for(let t=0;t<32;t++){let o=window.crypto.getRandomValues(new Uint8Array(1))[0]%16+1;(t==8||t==12||t==16||t==20)&&(e+="-"),e+=(t==12?4:t==16?o&3|8:o).toString(16)}return e}function ld(){let e="";return sessionStorage.getItem("uid")?e=sessionStorage.getItem("uid"):(e=ad(),sessionStorage.setItem("uid",e)),{"platform-identifier":sd,"platform-identifier-version":nd,"correlation-id":e}}const cd=new EventTarget;let to;function dd(){to=void 0}async function ud(e){const t=encodeURIComponent(e),o=G.api+`/FindWebManifest?site=${t}`;let i=ld();try{const r=await fetch(o,{method:"POST",headers:new Headers(i)});if(!r.ok)throw console.warn("Fetching manifest failed",r.statusText),new Error(`Unable to fetch response using ${o}. Response status  ${r}`);const s=await r.json();if(!s)throw console.warn("Fetching manifest failed due to no response data",r),new Error(`Unable to get JSON from ${o}`);if(s.content&&s.content.json)return{content:s.content.json,format:"w3c",generatedUrl:s.content.url||e,siteUrl:e,default:{short_name:s.content.json.short_name||""},id:"",generated:!s.content,errors:[],suggestions:[],warnings:[]}}catch(r){return console.warn("Manifest not found",r),null}return null}async function hd(e){let t;try{t=Ps(e)}catch(i){reject(i);return}const o=await ud(t);if(o){const i=rt();return i.initialManifest||(to=o.content,i.initialManifest=to,ji(i)),o}else{console.error("All manifest detectors failed: Timeout expired.");return}}async function Rd(e){const t=e||pd();if(!t)throw new Error("No available site URL");Ys(t);let o;if(o=await hd(t),!o){console.error("No Manifest found.");return}const i={manifest:o.content,initialManifest:to,manifestUrl:o.generatedUrl,isGenerated:o.generated,siteUrl:o.siteUrl,isEdited:!1};return ji(i),await fd({...o.content}),i}function pd(){const e=rt();if(e.siteUrl)return e.siteUrl;const o=new URLSearchParams(location.search).get("site");if(o)return o;const i=od();return sessionStorage?i:null}async function Id(e){let t;try{t=await(await fetch(`${G.manifestCreatorUrl}?url=${e}`,{method:"POST",headers:new Headers({"content-type":"application/json"})})).json()}catch(r){console.error("Manifest creation service failed to create the manifest. Falling back to empty manifest.",r)}console.log("created manifest",t);const o=gd(t,e,!0);return{manifest:o.content,initialManifest:to,manifestUrl:o.generatedUrl,isGenerated:o.generated,siteUrl:o.siteUrl,isEdited:!1}}function fd(e){const t=rt();return t.manifest=Object.assign(t.manifest,e),t.initialManifest&&rd(t.initialManifest,t.manifest),ji(t),cd.dispatchEvent(md({...t.manifest})),t.manifest}function md(e){return new CustomEvent(Is.manifestUpdate,{detail:e,bubbles:!0,composed:!0})}function gd(e,t,o){return{content:e,format:"w3c",siteUrl:t,generated:o,id:"",generatedUrl:"",default:{short_name:e.short_name||"My PWA"},errors:[],suggestions:[],warnings:[]}}var bd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,Ut=(e,t,o,i)=>{for(var r=i>1?void 0:i?vd(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&bd(t,o,r),r};let ct=class extends B{constructor(){super(),this.gettingManifest=!1,this.errorGettingURL=!1,this.disableStart=!0}static get styles(){return[g`

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
        ${ht(g`
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
        ${Oe(g`
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
        ${pt(g`
            #home-block {
              background: url(/assets/new/Hero1366_withmani.png);
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
            }
        `)}
          /* > 1920 */
        ${Qe(g`
            #wrapper {
              width: 1160px;
            }
        `)}
      `]}async firstUpdated(){const e=sessionStorage.getItem("ref");sessionStorage.clear(),e&&sessionStorage.setItem("ref",e),dd();const o=new URLSearchParams(location.search).get("site");o&&(this.siteURL=o.trim(),await this.analyzeSite()),V("landing-page-loaded",D.StartProcess)}handleURL(e){e&&(this.siteURL=e.target.value.trim()),_i(this.siteURL)?this.disableStart=!1:this.disableStart=!0}async start(e){e.preventDefault(),await this.analyzeSite()}async analyzeSite(){var e,t;if(this.siteURL!==Nr&&sessionStorage.setItem("demoURL",JSON.stringify(!1)),this.siteURL){this.gettingManifest=!0,this.siteURL=Ps(this.siteURL);const o=_i(this.siteURL);V("top.entered_link_testing_started",D.ProcessCheckpoint,{url:this.siteURL,valid:o}),o?(sessionStorage.getItem("uid")&&sessionStorage.removeItem("uid"),Ee.go(`/reportcard?site=${this.siteURL}`)):(this.errorMessage=U.input.home.error.invalidURL,this.errorGettingURL=!0,await this.updateComplete,(t=(e=this.shadowRoot)==null?void 0:e.querySelector(".error-message"))==null||t.focus()),setTimeout(()=>this.gettingManifest=!1,100)}}updateProgress(e){e&&e.progress[0]&&e.progress[0].items[0]&&(e.progress[0].items[0].done=te.DONE,td(e))}placeDemoURL(){sessionStorage.setItem("demoURL",JSON.stringify(!0)),V("top.DemoURL_clicked",D.ProcessCheckpoint),this.siteURL=Nr;let e=this.shadowRoot.getElementById("input-box");e.value=this.siteURL,this.analyzeSite()}render(){return b`
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
                  <a @click=${()=>V("top.PWAStarter_clicked",D.ProcessCheckpoint)} href="https://docs.pwabuilder.com/#/starter/quick-start" target="_blank" rel="noopener" aria-label="Start a new pwa, will open in separate tab">Start a new PWA</a>
                  <img src="/assets/new/arrow.svg" alt="arrow"/>

                </div>
                <p>
                  Looking to build a new Progressive Web App? Checkout all the documentation here.
                </p>
              </div>

              <div class="intro-grid-item">
                <div class="grid-item-header">
                  <a @click=${()=>V("home.top.PWAStudio_clicked",D.ProcessCheckpoint)} href="https://aka.ms/install-pwa-studio" target="_blank" rel="noopener" aria-label="Use dev tools, will open a separate tab">Use dev tools</a>
                  <img src="/assets/new/arrow.svg" alt="arrow"/>
                </div>
                <p>
                  Use our VS Code extension to create, improve, and package your PWA directly in your code editor.
                </p>
              </div>
            </section>

            <form id="input-form" slot="input-container" @submit="${e=>this.start(e)}">
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
                      class="${R({error:this.errorGettingURL})}" aria-labelledby="input-header" @input="${e=>this.handleURL(e)}">
                    </sl-input>

                    ${this.errorMessage&&this.errorMessage.length>0?b`<span role="alert" aria-live="polite" class="error-message">${this.errorMessage}</span>`:null}
                  </div>

                  <sl-button
                    id="start-button"
                    type="submit"
                    class="navigation raise"
                    ?loading="${this.gettingManifest}"
                    ?disabled="${this.disableStart}"
                    @click="${e=>this.start(e)}"
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
    `}};Ut([x()],ct.prototype,"siteURL",2);Ut([x()],ct.prototype,"gettingManifest",2);Ut([x()],ct.prototype,"errorGettingURL",2);Ut([x()],ct.prototype,"errorMessage",2);Ut([x()],ct.prototype,"disableStart",2);ct=Ut([de("app-home")],ct);const Nr="https://webboard.app";var yd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,_d=(e,t,o,i)=>{for(var r=i>1?void 0:i?wd(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&yd(t,o,r),r};let Hr=class extends B{static get styles(){return g`
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

      ${Qe(g`
          footer {
            justify-content: center;
          }

          /* 30em here to line up with rest of
          layout at this size */
          #footer-top {
            margin-right: 30em;
          }
        `)}

      ${Oe(g`
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

      ${Je(g`
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
              @click=${()=>V("footer.privacy_policy_clicked",D.ProcessCheckpoint)}
              >Our Privacy Statement</a
            >
            <a
              target="_blank"
              rel="noopener"
              href="https://go.microsoft.com/fwlink/?linkid=2259814"
              @click=${()=>V("footer.consumer_health_policy_clicked",D.ProcessCheckpoint)}
              >Consumer Health Privacy</a
            >
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/pwa-builder/PWABuilder/blob/master/TERMS_OF_USE.md"
              @click=${()=>V("footer.terms_of_use_clicked",D.ProcessCheckpoint)}
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
            @click=${()=>V("footer.github_clicked",D.ProcessCheckpoint)}
          >
            <span title="Contribute to our Github"><sl-icon name="github" role="presentation"></sl-icon></span>
          </a>

          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://twitter.com/pwabuilder"
            aria-label="Follow us on Twitter, will open in separate tab"
            @click=${()=>V("footer.twitter_clicked",D.ProcessCheckpoint)}
          >
            <span title="Follow us on Twitter"><sl-icon name="twitter" role="presentation"></sl-icon></span>
          </a>

          <a
            target="_blank"
            rel="noopener"
            appearance="hypertext"
            href="https://www.youtube.com/c/PWABuilder"
            aria-label="Subscribe to our Youtube, will open in separate tab"
            @click=${()=>V("footer.youtube_clicked",D.ProcessCheckpoint)}
          >
            <span title="Subscribe to our Youtube"><sl-icon name="youtube" role="presentation"></sl-icon></span>
          </a>
        </div>
      </footer>
    `}};Hr=_d([de("app-footer")],Hr);const xd=g`
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
`;var kd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,co=(e,t,o,i)=>{for(var r=i>1?void 0:i?$d(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&kd(t,o,r),r};let Ct=class extends B{constructor(){super(),this.type="",this.colorMode="primary",this.appearance="neutral",this.disabled=!1}static get styles(){return[g`
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
      `,Oe(g`
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
    `}};co([d({type:String})],Ct.prototype,"type",2);co([d({type:String})],Ct.prototype,"colorMode",2);co([d({type:String})],Ct.prototype,"appearance",2);co([d({type:Boolean})],Ct.prototype,"disabled",2);Ct=co([de("app-button")],Ct);var Cd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Xs=(e,t,o,i)=>{for(var r=i>1?void 0:i?Sd(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Cd(t,o,r),r};let Si=class extends B{constructor(){super(),this.show=!0}static get styles(){return g`
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
          <p>Want to chat? Join us on <a @click=${()=>V("discord_box_link_clicked",D.ProcessCheckpoint)} href="https://aka.ms/pwabuilderdiscord" target="_blank" rel="noopener" aria-label="Click to join us on Discord">Discord</a></p>
          <button id="close-wrapper" @click=${()=>this.close()} aria-label="discord modal close" type="button"><img id="close" src="/assets/images/Close_desk.png" role="presentation"/></button>
        </div>`:null}
    `}};Xs([x()],Si.prototype,"show",2);Si=Xs([de("discord-box")],Si);var Ed=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Js=(e,t,o,i)=>{for(var r=i>1?void 0:i?Pd(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Ed(t,o,r),r};let Ei=class extends B{constructor(){super(),this.pageName="",this.handlePageChange=()=>{var e=new URL(location.href),t=e.pathname;this.pageName=t.replace(/^\//,"");const o={reportcard:"Report Card",freetoken:"Free Token",congratulations:"Congratulations",portals:"Portals",imagegenerator:"Image Generator"};this.setPageTitle(o[this.pageName.toLocaleLowerCase()]||"Home")},xc("ref"),window.addEventListener("vaadin-router-location-changed",e=>{var t;window.scrollTo({top:0,behavior:"smooth"}),wc(e.detail.location.pathname,(t=e.detail.location.route)==null?void 0:t.component)})}static get styles(){return g`
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
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("DOMContentLoaded",this.handlePageChange),window.addEventListener("popstate",this.handlePageChange)}disconnectedCallback(){window.removeEventListener("DOMContentLoaded",this.handlePageChange),window.removeEventListener("popstate",this.handlePageChange),super.disconnectedCallback()}setPageTitle(e){document.getElementById("pageTitle").textContent=e,document.title=`${e} / PWABuilder`}firstUpdated(){var t;new Ee((t=this.shadowRoot)==null?void 0:t.querySelector("#router-outlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/reportcard",component:"app-report",action:async()=>{await mt(()=>import("./app-report.7301e0bc.js"),["code/app-report.7301e0bc.js","code/test-publish-pane.85f306d6.js","code/arrow-link.b865ef08.js","code/app-report.api.0e9a7110.js"])}},{path:"/portals",component:"powerplatform-publish",action:async()=>{await mt(()=>import("./powerplatform-publish.737ab374.js"),["code/powerplatform-publish.737ab374.js","code/test-publish-pane.85f306d6.js","code/arrow-link.b865ef08.js"])}},{path:"/imageGenerator",component:"image-generator",action:async()=>{await mt(()=>import("./image-generator.cef24646.js"),[])}},{path:"/congratulations/:token/:appurl/:appname/:appicon/:username/:email",component:"token-congratulations",action:async()=>{await mt(()=>import("./token-congratulations.80862a9d.js"),["code/token-congratulations.80862a9d.js","code/arrow-link.b865ef08.js"])}},{path:"/congratulations/:token/:username/:email",component:"token-congratulations",action:async()=>{await mt(()=>import("./token-congratulations.80862a9d.js"),["code/token-congratulations.80862a9d.js","code/arrow-link.b865ef08.js"])}},{path:"/freeToken",component:"app-token",action:async()=>{await mt(()=>import("./app-token.34d5a5a5.js"),["code/app-token.34d5a5a5.js","code/arrow-link.b865ef08.js","code/app-report.api.0e9a7110.js"])}},{path:"(.*)",redirect:"/"}]}])}render(){return b`
      <div id="wrapper">
        <!-- cookie banner not required so long as we only have essential cookies -->
        <!-- <cookie-banner></cookie-banner> -->

        <div id="content">
          <div id="router-outlet"></div>
        </div>
        ${this.pageName==="freeToken"||this.pageName==="congratulations"?null:b`<discord-box></discord-box>`}
        <app-footer></app-footer>
      </div>

    `}};Js([x()],Ei.prototype,"pageName",2);Ei=Js([de("app-index")],Ei);export{D as A,mc as B,G as C,Td as D,Od as E,od as F,y as G,Rd as H,U as I,_c as J,ud as K,_ as L,xd as M,_i as N,Ps as O,Ee as R,Je as a,pt as b,Qe as c,Li as d,de as e,Sa as f,rt as g,He as h,g as i,Ti as j,j as k,ht as l,Oe as m,d as n,R as o,Id as p,ji as q,V as r,B as s,x as t,Ad as u,Ve as v,Ld as w,b as x,q as y,ld as z};
//# sourceMappingURL=index.096edba8.js.map
