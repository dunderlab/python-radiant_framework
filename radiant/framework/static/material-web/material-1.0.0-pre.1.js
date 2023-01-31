//import '@material/web/actionelement/action-element_test.js';
//import '@material/web/badge/badge_test.js';
//import '@material/web/checkbox/checkbox_test.js';
//import '@material/web/controller/observer-foundation_test.js';
//import '@material/web/controller/foundation_test.js';
//import '@material/web/controller/action-controller_test.js';
//import '@material/web/controller/form-controller_test.js';
//import '@material/web/controller/string-converter_test.js';
//import '@material/web/controller/observer_test.js';
//import '@material/web/controller/events_test.js';
//import '@material/web/controller/is-rtl_test.js';
//import '@material/web/elevation/elevation_test.js';
//import '@material/web/fab/md-fab_test.js';
//import '@material/web/focus/strong-focus_test.js';
//import '@material/web/iconbutton/icon-button_test.js';
//import '@material/web/list/list-item_test.js';
//import '@material/web/list/list_test.js';
//import '@material/web/localization/localize_test.js';
//import '@material/web/menu/menu-button_test.js';
//import '@material/web/menu/menu_test.js';
//import '@material/web/menusurface/menu-surface_test.js';
//import '@material/web/motion/animation_test.js';
//import '@material/web/navigationbar/md-navigation-bar_test.js';
//import '@material/web/navigationtab/md-navigation-tab_test.js';
//import '@material/web/radio/radio_test.js';
//import '@material/web/testing/tokens.js';
//import '@material/web/testing/events.js';
//import '@material/web/testing/templates.js';
//import '@material/web/testing/transform-pseudo-classes.js';
//import '@material/web/testing/skip-animations_test.js';
//import '@material/web/testing/tokens_test.js';
//import '@material/web/testing/skip-animations.js';
//import '@material/web/testing/environment.js';
//import '@material/web/textfield/harness_test.js';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$a=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$6=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$a&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$5("string"==typeof t?t:t+"",void 0,s$5),i$6=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$5)},S$1=(s,n)=>{e$a?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$9=window,r$1=e$9.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$4=e$9.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$6={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$2};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$6}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$6){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:d$1}),(null!==(s$4=e$9.reactiveElementVersions)&&void 0!==s$4?s$4:e$9.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$5=window,s$3=i$5.trustedTypes,e$8=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3=`lit$${(Math.random()+"").slice(9)}$`,n$4="?"+o$3,l$5=`<${n$4}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a$1=/-->/g,f$1=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a$1:void 0!==u[1]?d=f$1:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a$1||d===f$1?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$5:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$3+y):s+o$3+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$8?e$8.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$3),i=t.length-1;if(i>0){l.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r());}}}else if(8===l.nodeType)if(l.data===n$4)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$3,t+1));)c.push({type:7,index:h}),t+=o$3.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r()),this.O(r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$3?s$3.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i$5.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$2=i$5.litHtmlVersions)&&void 0!==t$2?t$2:i$5.litHtmlVersions=[]).push("2.6.1");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$4,o$2;let s$2 = class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}};s$2.finalized=!0,s$2._$litElement$=!0,null===(l$4=globalThis.litElementHydrateSupport)||void 0===l$4||l$4.call(globalThis,{LitElement:s$2});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$2});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.2");

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Enumeration to keep track of the lifecycle of a touch event.
 */
// State transition diagram:
//     +-----------------------------+
//     |                             v
//     |    +------+------ WAITING_FOR_MOUSE_CLICK<----+
//     |    |      |                ^                  |
//     |    V      |                |                  |
// => INACTIVE -> TOUCH_DELAY -> RELEASING          HOLDING
//                 |                                   ^
//                 |                                   |
//                 +-----------------------------------+
var Phase;
(function (Phase) {
    // Initial state of the control, no touch in progress.
    // Transitions:
    //     on touch down: transition to TOUCH_DELAY.
    //     on mouse down: transition to WAITING_FOR_MOUSE_CLICK.
    Phase["INACTIVE"] = "INACTIVE";
    // Touch down has been received, waiting to determine if it's a swipe.
    // Transitions:
    //     on touch up: beginPress(); transition to RELEASING.
    //     on cancel: transition to INACTIVE.
    //     after TOUCH_DELAY_MS: beginPress(); transition to HOLDING.
    Phase["TOUCH_DELAY"] = "TOUCH_DELAY";
    // A touch has been deemed to be a press
    // Transitions:
    //     on pointerup: endPress(); transition to WAITING_FOR_MOUSE_CLICK.
    Phase["HOLDING"] = "HOLDING";
    // The user has released the mouse / touch, but we want to delay calling
    // endPress for a little bit to avoid double clicks.
    // Transitions:
    //    mouse sequence after debounceDelay: endPress(); transition to INACTIVE
    //    when in touch sequence: transitions directly to WAITING_FOR_MOUSE_CLICK
    Phase["RELEASING"] = "RELEASING";
    // The user has touched, but we want to delay endPress until synthetic mouse
    // click event occurs. Stay in this state for a fixed amount of time before
    // giving up and transitioning into rest state.
    // Transitions:
    //     on click: endPress(); transition to INACTIVE.
    //     after WAIT_FOR_MOUSE_CLICK_MS: transition to INACTIVE.
    Phase["WAITING_FOR_MOUSE_CLICK"] = "WAITING_FOR_MOUSE_CLICK";
})(Phase || (Phase = {}));
/**
 * Delay time from touchstart to when element#beginPress is invoked.
 */
const TOUCH_DELAY_MS$1 = 150;
/**
 * Delay time from beginning to wait for synthetic mouse events till giving up.
 */
const WAIT_FOR_MOUSE_CLICK_MS = 500;
/**
 * ActionController normalizes user interaction on components and distills it
 * into calling `beginPress` and `endPress` on the component.
 *
 * `beginPress` is a good hook to affect visuals for pressed state, including
 * ripple.
 *
 * `endPress` is a good hook for firing events based on user interaction, and
 * cleaning up the pressed visual state.
 *
 * A component using an ActionController need only implement the ActionElement
 * interface and add the ActionController's event listeners to understand user
 * interaction.
 */
class ActionController {
    constructor(element) {
        this.element = element;
        this.phase = Phase.INACTIVE;
        this.touchTimer = null;
        this.clickTimer = null;
        this.lastPositionEvent = null;
        this.pressed = false;
        this.checkBoundsAfterContextMenu = false;
        // event listeners
        /**
         * Pointer down event handler.
         */
        this.pointerDown = (e) => {
            if (!this.shouldRespondToEvent(e) || this.phase !== Phase.INACTIVE) {
                return;
            }
            if (this.isTouch(e)) {
                // after a longpress contextmenu event, an extra `pointerdown` can be
                // dispatched to the pressed element. Check that the down is within
                // bounds of the element in this case.
                if (this.checkBoundsAfterContextMenu && !this.inBounds(e)) {
                    return;
                }
                this.checkBoundsAfterContextMenu = false;
                this.lastPositionEvent = e;
                this.setPhase(Phase.TOUCH_DELAY);
                this.touchTimer = setTimeout(() => {
                    this.touchDelayFinished();
                }, TOUCH_DELAY_MS$1);
            }
            else {
                const leftButtonPressed = e.button === 0;
                if (!leftButtonPressed ||
                    (this.ignoreClicksWithModifiers && this.eventHasModifiers(e))) {
                    return;
                }
                this.setPhase(Phase.WAITING_FOR_MOUSE_CLICK);
                this.beginPress(e);
            }
        };
        /**
         * Pointer up event handler.
         */
        this.pointerUp = (e) => {
            if (!this.isTouch(e) || !this.shouldRespondToEvent(e)) {
                return;
            }
            if (this.phase === Phase.HOLDING) {
                this.waitForClick();
            }
            else if (this.phase === Phase.TOUCH_DELAY) {
                this.setPhase(Phase.RELEASING);
                this.beginPress();
                this.waitForClick();
            }
        };
        /**
         * Click event handler.
         */
        this.click = (e) => {
            if (this.disabled ||
                (this.ignoreClicksWithModifiers && this.eventHasModifiers(e))) {
                return;
            }
            if (this.phase === Phase.WAITING_FOR_MOUSE_CLICK) {
                this.endPress();
                this.setPhase(Phase.INACTIVE);
                return;
            }
            // keyboard synthesized click event
            if (this.phase === Phase.INACTIVE && !this.pressed) {
                this.press();
            }
        };
        /**
         * Pointer leave event handler.
         */
        this.pointerLeave = (e) => {
            // cancel a held press that moves outside the element
            if (this.shouldRespondToEvent(e) && !this.isTouch(e) && this.pressed) {
                this.cancelPress();
            }
        };
        /**
         * Pointer cancel event handler.
         */
        this.pointerCancel = (e) => {
            if (this.shouldRespondToEvent(e)) {
                this.cancelPress();
            }
        };
        /**
         * Contextmenu event handler.
         */
        this.contextMenu = () => {
            if (!this.disabled) {
                this.checkBoundsAfterContextMenu = true;
                this.cancelPress();
            }
        };
        this.element.addController(this);
    }
    get disabled() {
        return this.element.disabled;
    }
    get ignoreClicksWithModifiers() {
        return this.element.ignoreClicksWithModifiers ?? false;
    }
    setPhase(newPhase) {
        this.phase = newPhase;
    }
    /**
     * Calls beginPress and then endPress. Allows us to programmatically click
     * on the element.
     */
    press() {
        this.beginPress(/* positionEvent= */ null);
        this.setPhase(Phase.INACTIVE);
        this.endPress();
    }
    /**
     * Call `beginPress` on element with triggering event, if applicable.
     */
    beginPress(positionEvent = this.lastPositionEvent) {
        this.pressed = true;
        this.element.beginPress({ positionEvent });
    }
    /**
     * Call `endPress` on element, and clean up timers.
     */
    endPress() {
        this.pressed = false;
        this.element.endPress({ cancelled: false });
        this.cleanup();
    }
    cleanup() {
        if (this.touchTimer) {
            clearTimeout(this.touchTimer);
        }
        this.touchTimer = null;
        if (this.clickTimer) {
            clearTimeout(this.clickTimer);
        }
        this.clickTimer = null;
        this.lastPositionEvent = null;
    }
    /**
     * Call `endPress` with cancelled state on element, and cleanup timers.
     */
    cancelPress() {
        this.pressed = false;
        this.cleanup();
        if (this.phase === Phase.TOUCH_DELAY) {
            this.setPhase(Phase.INACTIVE);
        }
        else if (this.phase !== Phase.INACTIVE) {
            this.setPhase(Phase.INACTIVE);
            this.element.endPress({ cancelled: true });
        }
    }
    isTouch(e) {
        return e.pointerType === 'touch';
    }
    touchDelayFinished() {
        if (this.phase !== Phase.TOUCH_DELAY) {
            return;
        }
        this.setPhase(Phase.HOLDING);
        this.beginPress();
    }
    waitForClick() {
        this.setPhase(Phase.WAITING_FOR_MOUSE_CLICK);
        this.clickTimer = setTimeout(() => {
            // If a click event does not occur, clean up the interaction state.
            if (this.phase === Phase.WAITING_FOR_MOUSE_CLICK) {
                this.cancelPress();
            }
        }, WAIT_FOR_MOUSE_CLICK_MS);
    }
    /**
     * Check if event should trigger actions on the element.
     */
    shouldRespondToEvent(e) {
        return !this.disabled && e.isPrimary;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds(ev) {
        const { top, left, bottom, right } = this.element.getBoundingClientRect();
        const { x, y } = ev;
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    eventHasModifiers(e) {
        return e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;
    }
    /**
     * Cancel interactions if the element is removed from the DOM.
     */
    hostDisconnected() {
        this.cancelPress();
    }
    /**
     * If the element becomes disabled, cancel interactions.
     */
    hostUpdated() {
        if (this.disabled) {
            this.cancelPress();
        }
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 *
 * ActionElement is a base class that provides a handy starting point for using
 * ActionController. Subclasses should add the event handlers on the interactive
 * node in the template, and override `beginPress` and `endPress` to handle
 * pressed state, ripple interaction, and any other "press" interaction.
 */
class ActionElement extends s$2 {
    constructor() {
        super(...arguments);
        this.actionController = new ActionController(this);
    }
    /**
     * Hook method called when we've confirmed that the gesture is intended to be
     * a press. Subclasses should change the visual state of the control to
     * 'active' at this point, and possibly fire an event. Subclasses should
     * override this method if more needs to be done.
     *
     * @param options `positionEvent` is the Event that is considered the
     * beginning of the press. Null if this was a keyboard interaction.
     */
    beginPress(options) { }
    /**
     * Hook method called when the control goes from a pressed to unpressed
     * state.
     *
     * @param options If `cancelled` is true, means the user canceled the action.
     *    Subclasses which trigger events on endPress() should check the value
     *    of this flag, and modify their behavior accordingly.
     */
    endPress({ cancelled, actionData }) {
        if (!cancelled) {
            this.dispatchEvent(new CustomEvent('action', {
                detail: actionData,
                bubbles: true,
                composed: true,
            }));
        }
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointerdown="${this.handlePointerDown}"`
     */
    handlePointerDown(e) {
        this.actionController.pointerDown(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointerup="${this.handlePointerUp}"`
     */
    handlePointerUp(e) {
        this.actionController.pointerUp(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointercancel="${this.handlePointerCancel}"`
     */
    handlePointerCancel(e) {
        this.actionController.pointerCancel(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@pointerleave="${this.handlePointerleave}"`
     */
    handlePointerLeave(e) {
        this.actionController.pointerLeave(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@click="${this.handleClick}"`
     */
    handleClick(e) {
        this.actionController.click(e);
    }
    /**
     * Hook method for the ActionController.
     * Subclasses should add this method as an event handler on the interactive
     * template element with `@contextmenu="${this.handleContextMenu}"`
     */
    handleContextMenu() {
        this.actionController.contextMenu();
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$7=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$6(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$4(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return e$6({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$5(e){return o$1({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$3(i,n){return o$1({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$4(e){return o$1({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$2;const e$3=null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$3(n){const{slot:l,selector:t}=null!=n?n:{};return o$1({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$3(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$U = i$6 `:host{--_container-elevation: var(--md-menu-surface-container-elevation, 2);--_container-shadow-color: var(--md-menu-surface-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-menu-surface-container-shape, 4px);--_container-surface-tint-layer-color: var(--md-menu-surface-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4))}.md3-menu-surface{border-radius:var(--_container-shape);box-sizing:border-box;display:none;opacity:0;overflow:auto;margin:0;max-height:calc(100vh - 32px);max-width:calc(100vw - 32px);padding:0;position:absolute;transform:scale(1);transform-origin:top left;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);will-change:transform,opacity;z-index:8;--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-elevation-surface-tint-color:var(--_container-surface-tint-layer-color)}.md3-menu-surface md-elevation{z-index:0}.md3-menu-surface:focus{outline:none}.md3-menu-surface--animating-open{display:inline-block;opacity:0;transform:scale(0.8)}.md3-menu-surface--open{display:inline-block;opacity:1;transform:scale(1)}.md3-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}.md3-menu-surface--anchor{overflow:visible;position:relative}.md3-menu-surface--fixed{position:fixed}.md3-menu-surface--fullwidth{width:100%}.md3-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}/*# sourceMappingURL=menu-surface-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Whether or not the elevation level should display a shadow.
         */
        this.shadow = false;
        /**
         * Whether or not the elevation level should display a surface tint color.
         */
        this.surface = false;
    }
    render() {
        return y `
       <span class="surface"></span>
       <span class="shadow"></span>
     `;
    }
}
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Elevation.prototype, "shadow", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Elevation.prototype, "surface", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$T = i$6 `:host{--_duration: var(--md-elevation-duration, 0s);--_easing: var(--md-elevation-easing, cubic-bezier(0.2, 0, 0, 1));--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));--_surface-tint-color: var(--md-elevation-surface-tint-color, var(--md-sys-color-primary, #6750a4));border-radius:inherit;display:flex;position:relative}:host(:not([surface])) .surface,:host(:not([shadow])) .shadow{display:none}.surface,.shadow,.shadow::before,.shadow::after{border-radius:inherit;content:"";inset:0;position:absolute;transition-property:box-shadow,opacity;transition-duration:var(--_duration);transition-timing-function:var(--_easing)}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{opacity:.15;box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color)}.surface{background:var(--_surface-tint-color);opacity:calc(clamp(0,var(--_level),.05) + clamp(0,var(--_level) - 1,.03) + clamp(0,var(--_level) - 2,.03) + clamp(0,var(--_level) - 3,.01) + clamp(0,var(--_level) - 4,.02))}/*# sourceMappingURL=elevation-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 */
let MdElevation = class MdElevation extends Elevation {
};
MdElevation.styles = [styles$T];
MdElevation = __decorate([
    e$7('md-elevation')
], MdElevation);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e$2(class extends i$2{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(s)}const e=i.element.classList;this.nt.forEach((t=>{t in s||(e.remove(t),this.nt.delete(t));}));for(const t in s){const i=!!s[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.nt.add(t)):(e.remove(t),this.nt.delete(t)));}return x}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1=e$2(class extends i$2{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.vt){this.vt=new Set;for(const t in r)this.vt.add(t);return this.render(r)}this.vt.forEach((t=>{null==r[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return x}});

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns `true` if the given element is in a right-to-left direction.
 *
 * @param el Element to determine direction from
 * @param shouldCheck Optional. If `false`, return `false` without checking
 *     direction. Determining the direction of `el` is somewhat expensive, so
 *     this parameter can be used as a conditional guard. Defaults to `true`.
 */
function isRtl(el, shouldCheck = true) {
    return shouldCheck &&
        getComputedStyle(el).getPropertyValue('direction').trim() === 'rtl';
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const cssClasses$1 = {
    ANCHOR: 'md3-menu-surface--anchor',
    ANIMATING_CLOSED: 'md3-menu-surface--animating-closed',
    ANIMATING_OPEN: 'md3-menu-surface--animating-open',
    FIXED: 'md3-menu-surface--fixed',
    IS_OPEN_BELOW: 'md3-menu-surface--is-open-below',
    OPEN: 'md3-menu-surface--open',
    ROOT: 'md3-menu-surface',
};
// tslint:disable:object-literal-sort-keys
const strings$1 = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    CLOSING_EVENT: 'MDCMenuSurface:closing',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    OPENING_EVENT: 'MDCMenuSurface:opening',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)',
        '[href]:not([aria-disabled="true"])',
        'input:not(:disabled)',
        'select:not(:disabled)',
        'textarea:not(:disabled)',
        '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
const numbers$1 = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /**
     * Margin left to the edge of the viewport when menu-surface is at maximum
     * possible height. Also used as a viewport margin.
     */
    MARGIN_TO_EDGE: 32,
    /**
     * Ratio of anchor width to menu-surface width for switching from corner
     * positioning to center positioning.
     */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
    /**
     * Amount of time to wait before restoring focus when closing the menu
     * surface. This is important because if a touch event triggered the menu
     * close, and the subsequent mouse event occurs after focus is restored, then
     * the restored focus would be lost.
     */
    TOUCH_EVENT_WAIT_MS: 30,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class MDCMenuSurfaceFoundation {
    constructor(adapter) {
        this.isSurfaceOpen = false;
        this.isQuickOpen = false;
        this.isHoistedElement = false;
        this.isFixedPosition = false;
        this.isHorizontallyCenteredOnViewport = false;
        this.maxHeight = 0;
        this.openBottomBias = 0;
        this.openAnimationEndTimerId = 0;
        this.closeAnimationEndTimerId = 0;
        this.animationRequestId = 0;
        this.anchorCorner = Corner.TOP_START;
        /**
         * Corner of the menu surface to which menu surface is attached to anchor.
         *
         *  Anchor corner --->+----------+
         *                    |  ANCHOR  |
         *                    +----------+
         *  Origin corner --->+--------------+
         *                    |              |
         *                    |              |
         *                    | MENU SURFACE |
         *                    |              |
         *                    |              |
         *                    +--------------+
         */
        this.originCorner = Corner.TOP_START;
        this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
        this.position = { x: 0, y: 0 };
        this.adapter = { ...MDCMenuSurfaceFoundation.defaultAdapter, ...adapter };
    }
    static get cssClasses() {
        return cssClasses$1;
    }
    static get strings() {
        return strings$1;
    }
    static get numbers() {
        return numbers$1;
    }
    static get Corner() {
        return Corner;
    }
    /**
     * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
     */
    static get defaultAdapter() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: () => undefined,
            removeClass: () => undefined,
            hasClass: () => false,
            hasAnchor: () => false,
            isElementInContainer: () => false,
            isFocused: () => false,
            isRtl: () => false,
            getInnerDimensions: () => ({ height: 0, width: 0 }),
            getAnchorDimensions: () => null,
            getWindowDimensions: () => ({ height: 0, width: 0 }),
            getBodyDimensions: () => ({ height: 0, width: 0 }),
            getWindowScroll: () => ({ x: 0, y: 0 }),
            setPosition: () => undefined,
            setMaxHeight: () => undefined,
            setTransformOrigin: () => undefined,
            saveFocus: () => undefined,
            restoreFocus: () => undefined,
            notifyClose: () => undefined,
            notifyClosing: () => undefined,
            notifyOpen: () => undefined,
            notifyOpening: () => undefined,
        };
        // tslint:enable:object-literal-sort-keys
    }
    init() {
        const { ROOT, OPEN } = MDCMenuSurfaceFoundation.cssClasses;
        if (!this.adapter.hasClass(ROOT)) {
            throw new Error(`${ROOT} class required in root element.`);
        }
        if (this.adapter.hasClass(OPEN)) {
            this.isSurfaceOpen = true;
        }
    }
    destroy() {
        clearTimeout(this.openAnimationEndTimerId);
        clearTimeout(this.closeAnimationEndTimerId);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId);
    }
    /**
     * @param corner Default anchor corner alignment of top-left menu surface
     *     corner.
     */
    setAnchorCorner(corner) {
        this.anchorCorner = corner;
    }
    /**
     * Flips menu corner horizontally.
     */
    flipCornerHorizontally() {
        this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    }
    /**
     * @param margin Set of margin values from anchor.
     */
    setAnchorMargin(margin) {
        this.anchorMargin.top = margin.top || 0;
        this.anchorMargin.right = margin.right || 0;
        this.anchorMargin.bottom = margin.bottom || 0;
        this.anchorMargin.left = margin.left || 0;
    }
    /** Used to indicate if the menu-surface is hoisted to the body. */
    setIsHoisted(isHoisted) {
        this.isHoistedElement = isHoisted;
    }
    /**
     * Used to set the menu-surface calculations based on a fixed position menu.
     */
    setFixedPosition(isFixedPosition) {
        this.isFixedPosition = isFixedPosition;
    }
    /**
     * @return Returns true if menu is in fixed (`position: fixed`) position.
     */
    isFixed() {
        return this.isFixedPosition;
    }
    /** Sets the menu-surface position on the page. */
    setAbsolutePosition(x, y) {
        this.position.x = this.isFinite(x) ? x : 0;
        this.position.y = this.isFinite(y) ? y : 0;
    }
    /** Sets whether menu-surface should be horizontally centered to viewport. */
    setIsHorizontallyCenteredOnViewport(isCentered) {
        this.isHorizontallyCenteredOnViewport = isCentered;
    }
    setQuickOpen(quickOpen) {
        this.isQuickOpen = quickOpen;
    }
    /**
     * Sets maximum menu-surface height on open.
     * @param maxHeight The desired max-height. Set to 0 (default) to
     *     automatically calculate max height based on available viewport space.
     */
    setMaxHeight(maxHeight) {
        this.maxHeight = maxHeight;
    }
    /**
     * Set to a positive integer to influence the menu to preferentially open
     * below the anchor instead of above.
     * @param bias A value of `x` simulates an extra `x` pixels of available space
     *     below the menu during positioning calculations.
     */
    setOpenBottomBias(bias) {
        this.openBottomBias = bias;
    }
    isOpen() {
        return this.isSurfaceOpen;
    }
    /**
     * Open the menu surface.
     */
    open() {
        if (this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyOpening();
        this.adapter.saveFocus();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = true;
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.dimensions = this.adapter.getInnerDimensions();
            this.autoposition();
            this.adapter.notifyOpen();
        }
        else {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
            this.animationRequestId = requestAnimationFrame(() => {
                this.dimensions = this.adapter.getInnerDimensions();
                this.autoposition();
                this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                this.openAnimationEndTimerId = setTimeout(() => {
                    this.openAnimationEndTimerId = 0;
                    this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    this.adapter.notifyOpen();
                }, numbers$1.TRANSITION_OPEN_DURATION);
            });
            this.isSurfaceOpen = true;
        }
    }
    /**
     * Closes the menu surface.
     */
    close(skipRestoreFocus = false) {
        if (!this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyClosing();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = false;
            if (!skipRestoreFocus) {
                this.maybeRestoreFocus();
            }
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            this.adapter.notifyClose();
            return;
        }
        this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        requestAnimationFrame(() => {
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            this.closeAnimationEndTimerId = setTimeout(() => {
                this.closeAnimationEndTimerId = 0;
                this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                this.adapter.notifyClose();
            }, numbers$1.TRANSITION_CLOSE_DURATION);
        });
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus();
        }
    }
    /** Handle clicks and close if not within menu-surface element. */
    handleBodyClick(evt) {
        const el = evt.target;
        if (this.adapter.isElementInContainer(el)) {
            return;
        }
        this.close();
    }
    /** Handle keys that close the surface. */
    handleKeydown(evt) {
        const { keyCode, key } = evt;
        const isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    }
    autoposition() {
        // Compute measurements for autoposition methods reuse.
        this.measurements = this.getAutoLayoutmeasurements();
        const corner = this.getOriginCorner();
        const maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
        const verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
        let horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? 'right' : 'left';
        const horizontalOffset = this.getHorizontalOriginOffset(corner);
        const verticalOffset = this.getVerticalOriginOffset(corner);
        const { anchorSize, surfaceSize } = this.measurements;
        const position = {
            [horizontalAlignment]: horizontalOffset,
            [verticalAlignment]: verticalOffset,
        };
        // Center align when anchor width is comparable or greater than menu
        // surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width >
            numbers$1.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative
        // to the anchor element
        if (this.isHoistedElement || this.isFixedPosition) {
            this.adjustPositionForHoistedElement(position);
        }
        this.adapter.setTransformOrigin(`${horizontalAlignment} ${verticalAlignment}`);
        this.adapter.setPosition(position);
        this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
        // If it is opened from the top then add is-open-below class
        if (!this.hasBit(corner, CornerBit.BOTTOM)) {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
        }
    }
    /**
     * @return Measurements used to position menu surface popup.
     */
    getAutoLayoutmeasurements() {
        let anchorRect = this.adapter.getAnchorDimensions();
        const bodySize = this.adapter.getBodyDimensions();
        const viewportSize = this.adapter.getWindowDimensions();
        const windowScroll = this.adapter.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position.y,
                right: this.position.x,
                bottom: this.position.y,
                left: this.position.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize,
            surfaceSize: this.dimensions,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
                // tslint:enable:object-literal-sort-keys
            },
            viewportSize,
            windowScroll,
        };
    }
    /**
     * Computes the corner of the anchor from which to animate and position the
     * menu surface.
     *
     * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
     * context. E.g., menu surface will be positioned from right side on TOP_END.
     */
    getOriginCorner() {
        let corner = this.originCorner;
        const { viewportDistance, anchorSize, surfaceSize } = this.measurements;
        const { MARGIN_TO_EDGE } = MDCMenuSurfaceFoundation.numbers;
        const isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        let availableTop;
        let availableBottom;
        if (isAnchoredToBottom) {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
            availableBottom =
                viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
        }
        else {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
            availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE +
                anchorSize.height - this.anchorMargin.top;
        }
        const isAvailableBottom = availableBottom - surfaceSize.height > 0;
        if (!isAvailableBottom &&
            availableTop > availableBottom + this.openBottomBias) {
            // Attach bottom side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.BOTTOM);
        }
        const isRtl = this.adapter.isRtl();
        const isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
        const hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) ||
            this.hasBit(corner, CornerBit.RIGHT);
        // Whether surface attached to right side of anchor element.
        let isAnchoredToRight = false;
        // Anchored to start
        if (isRtl && isFlipRtl) {
            isAnchoredToRight = !hasRightBit;
        }
        else {
            // Anchored to right
            isAnchoredToRight = hasRightBit;
        }
        let availableLeft;
        let availableRight;
        if (isAnchoredToRight) {
            availableLeft =
                viewportDistance.left + anchorSize.width + this.anchorMargin.right;
            availableRight = viewportDistance.right - this.anchorMargin.right;
        }
        else {
            availableLeft = viewportDistance.left + this.anchorMargin.left;
            availableRight =
                viewportDistance.right + anchorSize.width - this.anchorMargin.left;
        }
        const isAvailableLeft = availableLeft - surfaceSize.width > 0;
        const isAvailableRight = availableRight - surfaceSize.width > 0;
        const isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) &&
            this.hasBit(corner, CornerBit.RIGHT);
        if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl ||
            !isAvailableLeft && isOriginCornerAlignedToEnd) {
            // Attach left side of surface to the anchor.
            corner = this.unsetBit(corner, CornerBit.RIGHT);
        }
        else if (isAvailableLeft && isAnchoredToRight && isRtl ||
            (isAvailableLeft && !isAnchoredToRight && hasRightBit) ||
            (!isAvailableRight && availableLeft >= availableRight)) {
            // Attach right side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.RIGHT);
        }
        return corner;
    }
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0
     *     indicates should not be set.
     */
    getMenuSurfaceMaxHeight(corner) {
        if (this.maxHeight > 0) {
            return this.maxHeight;
        }
        const { viewportDistance } = this.measurements;
        let maxHeight = 0;
        const isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        const isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        const { MARGIN_TO_EDGE } = MDCMenuSurfaceFoundation.numbers;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements.anchorSize.height;
            }
        }
        else {
            maxHeight = viewportDistance.bottom - this.anchorMargin.bottom +
                this.measurements.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements.anchorSize.height;
            }
        }
        return maxHeight;
    }
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding
     *     anchor corner.
     */
    getHorizontalOriginOffset(corner) {
        const { anchorSize } = this.measurements;
        // isRightAligned corresponds to using the 'right' property on the surface.
        const isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
        const avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
        if (isRightAligned) {
            const rightOffset = avoidHorizontalOverlap ?
                anchorSize.width - this.anchorMargin.left :
                this.anchorMargin.right;
            // For hoisted or fixed elements, adjust the offset by the difference
            // between viewport width and body width so when we calculate the right
            // value (`adjustPositionForHoistedElement`) based on the element
            // position, the right property is correct.
            if (this.isHoistedElement || this.isFixedPosition) {
                return rightOffset -
                    (this.measurements.viewportSize.width -
                        this.measurements.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right :
            this.anchorMargin.left;
    }
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding
     *     anchor corner.
     */
    getVerticalOriginOffset(corner) {
        const { anchorSize } = this.measurements;
        const isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        const avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        let y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top :
                -this.anchorMargin.bottom;
        }
        else {
            y = avoidVerticalOverlap ?
                (anchorSize.height + this.anchorMargin.bottom) :
                this.anchorMargin.top;
        }
        return y;
    }
    /**
     * Calculates the offsets for positioning the menu-surface when the
     * menu-surface has been hoisted to the body.
     */
    adjustPositionForHoistedElement(position) {
        const { windowScroll, viewportDistance, surfaceSize, viewportSize } = this.measurements;
        const props = Object.keys(position);
        for (const prop of props) {
            let value = position[prop] || 0;
            if (this.isHorizontallyCenteredOnViewport &&
                (prop === 'left' || prop === 'right')) {
                position[prop] = (viewportSize.width - surfaceSize.width) / 2;
                continue;
            }
            // Hoisted surfaces need to have the anchor elements location on the page
            // added to the position properties for proper alignment on the body.
            value += viewportDistance[prop];
            // Surfaces that are absolutely positioned need to have additional
            // calculations for scroll and bottom positioning.
            if (!this.isFixedPosition) {
                if (prop === 'top') {
                    value += windowScroll.y;
                }
                else if (prop === 'bottom') {
                    value -= windowScroll.y;
                }
                else if (prop === 'left') {
                    value += windowScroll.x;
                }
                else { // prop === 'right'
                    value -= windowScroll.x;
                }
            }
            position[prop] = value;
        }
    }
    /**
     * The last focused element when the menu surface was opened should regain
     * focus, if the user is focused on or within the menu surface when it is
     * closed.
     */
    maybeRestoreFocus() {
        const isRootFocused = this.adapter.isFocused();
        const ownerDocument = this.adapter.getOwnerDocument ?
            this.adapter.getOwnerDocument() :
            document;
        const childHasFocus = ownerDocument.activeElement &&
            this.adapter.isElementInContainer(ownerDocument.activeElement);
        if (isRootFocused || childHasFocus) {
            // Wait before restoring focus when closing the menu surface. This is
            // important because if a touch event triggered the menu close, and the
            // subsequent mouse event occurs after focus is restored, then the
            // restored focus would be lost.
            setTimeout(() => {
                this.adapter.restoreFocus();
            }, numbers$1.TOUCH_EVENT_WAIT_MS);
        }
    }
    hasBit(corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    }
    setBit(corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    }
    unsetBit(corner, bit) {
        return corner ^ bit;
    }
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    isFinite(num) {
        return typeof num === 'number' && isFinite(num);
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable:no-bitwise
// required for closure compiler
const stringToCorner = {
    'TOP_LEFT': Corner.TOP_LEFT,
    'TOP_RIGHT': Corner.TOP_RIGHT,
    'BOTTOM_LEFT': Corner.BOTTOM_LEFT,
    'BOTTOM_RIGHT': Corner.BOTTOM_RIGHT,
    'TOP_START': Corner.TOP_START,
    'TOP_END': Corner.TOP_END,
    'BOTTOM_START': Corner.BOTTOM_START,
    'BOTTOM_END': Corner.BOTTOM_END,
};
/**
 * @fires opened
 * @fires closed
 */
class MenuSurface extends s$2 {
    constructor() {
        super(...arguments);
        this.absolute = false;
        this.fullwidth = false;
        this.fixed = false;
        this.x = null;
        this.y = null;
        // must be defined before open or else race condition in foundation occurs.
        this.quick = false;
        this.open = false;
        this.stayOpenOnBodyClick = false;
        this.skipRestoreFocus = false;
        this.previousFlipMenuHorizontally = false;
        /**
         * Whether to align the menu surface to the opposite side of the default
         * alignment.
         */
        this.flipMenuHorizontally = false;
        this.corner = 'BOTTOM_START';
        this.styleTop = '';
        this.styleLeft = '';
        this.styleRight = '';
        this.styleBottom = '';
        this.styleMaxHeight = '';
        this.styleTransformOrigin = '';
        this.anchor = null;
        this.previouslyFocused = null;
        this.previousAnchor = null;
        this.onBodyClickBound = () => undefined;
    }
    render() {
        const styles = {
            'top': this.styleTop,
            'left': this.styleLeft,
            'right': this.styleRight,
            'bottom': this.styleBottom,
            'max-height': this.styleMaxHeight,
            'transform-origin': this.styleTransformOrigin,
        };
        return y `
      <div
          class="md3-menu-surface ${o(this.getRenderClasses())}"
          style="${i$1(styles)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <md-elevation shadow></md-elevation>
        <slot></slot>
      </div>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-menu-surface--fixed': this.fixed,
            'md3-menu-surface--fullwidth': this.fullwidth,
        };
    }
    updated(changedProperties) {
        if (changedProperties.has('absolute') && !this.fixed) {
            this.mdcFoundation.setIsHoisted(this.absolute);
        }
        if (changedProperties.has('fixed') && !this.absolute) {
            this.mdcFoundation.setFixedPosition(this.fixed);
        }
        if ((changedProperties.has('x') || changedProperties.has('y')) &&
            this.x !== null && this.y !== null) {
            this.mdcFoundation.setAbsolutePosition(this.x, this.y);
            this.mdcFoundation.setAnchorMargin({ left: this.x, top: this.y, right: -this.y, bottom: this.y });
        }
        if (changedProperties.has('quick')) {
            this.mdcFoundation.setQuickOpen(this.quick);
        }
        if (changedProperties.has('open')) {
            const wasOpen = changedProperties.get('open');
            if (this.open) {
                this.mdcFoundation.open();
                // wasOpen helps with first render (when it is `undefined`) perf
            }
            else if (wasOpen !== undefined) {
                this.mdcFoundation.close(this.skipRestoreFocus);
            }
        }
        if (changedProperties.has('flipMenuHorizontally')) {
            if (this.previousFlipMenuHorizontally !== this.flipMenuHorizontally) {
                this.mdcFoundation.flipCornerHorizontally();
            }
            this.previousFlipMenuHorizontally = this.flipMenuHorizontally;
        }
        if (changedProperties.has('corner') && this.corner) {
            const bitwiseCorner = stringToCorner[this.corner];
            this.mdcFoundation.setAnchorCorner(bitwiseCorner);
        }
    }
    firstUpdated() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        this.mdcFoundation = new MDCMenuSurfaceFoundation(this.createAdapter());
        this.mdcFoundation.init();
    }
    createAdapter() {
        return {
            addClass: (className) => {
                this.mdcRoot.classList.add(className);
            },
            removeClass: (className) => {
                this.mdcRoot.classList.remove(className);
            },
            hasClass: (className) => this.mdcRoot.classList.contains(className),
            hasAnchor: () => {
                return !!this.anchor;
            },
            notifyClose: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closed', init);
                this.open = false;
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyClosing: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closing', init);
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyOpen: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opened', init);
                this.open = true;
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyOpening: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opening', init);
                this.mdcRoot.dispatchEvent(ev);
            },
            isElementInContainer: () => false,
            isRtl: () => this.mdcRoot ? isRtl(this.mdcRoot) : false,
            setTransformOrigin: (origin) => {
                const root = this.mdcRoot;
                if (!root) {
                    return;
                }
                this.styleTransformOrigin = origin;
            },
            isFocused: () => {
                return this.matches(':focus-within');
            },
            saveFocus: () => {
                this.previouslyFocused = document.activeElement;
            },
            restoreFocus: () => {
                if (!this.previouslyFocused) {
                    return;
                }
                if ('focus' in this.previouslyFocused) {
                    this.previouslyFocused.focus();
                }
            },
            getInnerDimensions: () => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return { width: 0, height: 0 };
                }
                return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
            },
            getAnchorDimensions: () => {
                const anchorElement = this.anchor;
                return anchorElement ? anchorElement.getBoundingClientRect() : null;
            },
            getBodyDimensions: () => {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                };
            },
            getWindowDimensions: () => {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            getWindowScroll: () => {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                };
            },
            setPosition: (position) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                this.styleLeft = 'left' in position ? `${position.left}px` : '';
                this.styleRight = 'right' in position ? `${position.right}px` : '';
                this.styleTop = 'top' in position ? `${position.top}px` : '';
                this.styleBottom = 'bottom' in position ? `${position.bottom}px` : '';
            },
            setMaxHeight: async (height) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                // must set both for IE support as IE will not set a var
                this.styleMaxHeight = height;
                await this.updateComplete;
                this.styleMaxHeight = `var(--md3-menu-max-height, ${height})`;
            },
        };
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onBodyClick(evt) {
        if (this.stayOpenOnBodyClick) {
            return;
        }
        const path = evt.composedPath();
        if (path.indexOf(this) === -1) {
            this.close();
        }
    }
    registerBodyClick() {
        this.onBodyClickBound = this.onBodyClick.bind(this);
        // capture otherwise listener closes menu after quick menu opens
        document.body.addEventListener('click', this.onBodyClickBound, { passive: true, capture: true });
    }
    deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound, { capture: true });
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    i$3('.md3-menu-surface'),
    __metadata("design:type", HTMLDivElement)
], MenuSurface.prototype, "mdcRoot", void 0);
__decorate([
    i$3('slot'),
    __metadata("design:type", HTMLSlotElement)
], MenuSurface.prototype, "slotElement", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "absolute", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "fullwidth", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "fixed", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Number)
], MenuSurface.prototype, "x", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Number)
], MenuSurface.prototype, "y", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "quick", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "open", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "skipRestoreFocus", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], MenuSurface.prototype, "flipMenuHorizontally", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], MenuSurface.prototype, "corner", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleTop", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleLeft", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleRight", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleBottom", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleMaxHeight", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], MenuSurface.prototype, "styleTransformOrigin", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** Base class for autocomplete surface component. */
class AutocompleteSurface extends MenuSurface {
    constructor() {
        super(...arguments);
        this.stayOpenOnBodyClick = true;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-autocomplete-surface': true,
        };
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$S = i$6 `.md3-autocomplete-surface{width:100%}/*# sourceMappingURL=autocomplete-surface-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdAutocompleteSurface = class MdAutocompleteSurface extends AutocompleteSurface {
};
MdAutocompleteSurface.styles = [styles$U, styles$S];
MdAutocompleteSurface = __decorate([
    e$7('md-autocomplete-surface')
], MdAutocompleteSurface);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$R = i$6 `:host{--_list-item-one-line-container-height: var(--md-list-list-item-one-line-container-height, 56px);--_list-item-two-line-container-height: var(--md-list-list-item-two-line-container-height, 72px);--_list-item-three-line-container-height: var(--md-list-list-item-three-line-container-height, 88px);--_list-item-container-color: var(--md-list-list-item-container-color, #fff);--_list-item-label-text-font: var(--md-list-list-item-label-text-font, Roboto, sans-serif);--_list-item-label-text-size: var(--md-list-list-item-label-text-size, 16px);--_list-item-label-text-tracking: var(--md-list-list-item-label-text-tracking, 0.03125rem);--_list-item-label-text-weight: var(--md-list-list-item-label-text-weight, 400);--_list-item-label-text-color: var(--md-list-list-item-label-text-color, #1f1f1f);--_list-item-supporting-text-font: var(--md-list-list-item-supporting-text-font, Roboto, sans-serif);--_list-item-supporting-text-size: var(--md-list-list-item-supporting-text-size, 14px);--_list-item-supporting-text-tracking: var(--md-list-list-item-supporting-text-tracking, 0.015625rem);--_list-item-supporting-text-weight: var(--md-list-list-item-supporting-text-weight, 300);--_list-item-supporting-text-color: var(--md-list-list-item-supporting-text-color, #444746);--_list-item-trailing-supporting-text-font: var(--md-list-list-item-trailing-supporting-text-font, Roboto, sans-serif);--_list-item-trailing-supporting-text-size: var(--md-list-list-item-trailing-supporting-text-size, 12px);--_list-item-trailing-supporting-text-tracking: var(--md-list-list-item-trailing-supporting-text-tracking, 0.015625rem);--_list-item-trailing-supporting-text-weight: var(--md-list-list-item-trailing-supporting-text-weight, 300);--_list-item-trailing-supporting-text-color: var(--md-list-list-item-trailing-supporting-text-color, #646766);--_list-item-leading-icon-color: var(--md-list-list-item-leading-icon-color, #444746);--_list-item-container-shape: ;--_list-item-label-text-line-height: ;--_list-item-supporting-text-line-height: var(--md-list-list-item-supporting-text-line-height, 20px);--_list-item-overline-color: ;--_list-item-overline-font: ;--_list-item-overline-line-height: ;--_list-item-overline-size: ;--_list-item-overline-tracking: ;--_list-item-overline-weight: ;--_list-item-leading-icon-size: var(--md-list-list-item-leading-icon-size, 24px);--_list-item-leading-video-shape: var(--md-list-list-item-leading-video-shape, 0px);--_list-item-leading-video-width: var(--md-list-list-item-leading-video-width, 114px);--_list-item-leading-video-height: var(--md-list-list-item-leading-video-height, 64px);--_list-item-leading-avatar-color: ;--_list-item-leading-avatar-shape: var(--md-list-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-list-item-leading-avatar-size, 40px);--_list-item-leading-avatar-label-color: ;--_list-item-leading-avatar-label-font: ;--_list-item-leading-avatar-label-line-height: ;--_list-item-leading-avatar-label-size: ;--_list-item-leading-avatar-label-tracking: ;--_list-item-leading-avatar-label-weight: ;--_list-item-leading-image-width: var(--md-list-list-item-leading-image-width, 56px);--_list-item-leading-image-height: var(--md-list-list-item-leading-image-height, 56px);--_list-item-leading-image-shape: var(--md-list-list-item-leading-image-shape, 0);--_list-item-trailing-supporting-text-line-height: ;--_list-item-trailing-icon-color: var(--md-list-list-item-trailing-icon-color, #444746);--_list-item-trailing-icon-size: var(--md-list-list-item-trailing-icon-size, 24px);--_list-item-selected-trailing-icon-color: ;--_list-item-unselected-trailing-icon-color: ;--_list-item-disabled-label-text-color: var(--md-list-list-item-disabled-label-text-color, #1c1b1f);--_list-item-disabled-label-text-opacity: var(--md-list-list-item-disabled-label-text-opacity, 0.38);--_list-item-disabled-supporting-text-color: var(--md-list-list-item-disabled-supporting-text-color, #1c1b1f);--_list-item-disabled-supporting-text-opacity: var(--md-list-list-item-disabled-supporting-text-opacity, 0.38);--_list-item-disabled-state-layer-color: ;--_list-item-disabled-state-layer-opacity: ;--_list-item-disabled-leading-icon-color: var(--md-list-list-item-disabled-leading-icon-color, #1c1b1f);--_list-item-disabled-leading-icon-opacity: var(--md-list-list-item-disabled-leading-icon-opacity, 0.38);--_list-item-disabled-trailing-icon-color: var(--md-list-list-item-disabled-trailing-icon-color, #1c1b1f);--_list-item-disabled-trailing-icon-opacity: var(--md-list-list-item-disabled-trailing-icon-opacity, 0.38);--_list-item-hover-state-layer-color: ;--_list-item-hover-state-layer-opacity: ;--_list-item-hover-label-text-color: ;--_list-item-hover-leading-icon-color: var(--md-list-list-item-hover-leading-icon-color, #444746);--_list-item-hover-trailing-icon-color: var(--md-list-list-item-hover-trailing-icon-color, #444746);--_list-divider-color: var(--md-list-list-divider-color, #c4c7c5);--_list-divider-height: var(--md-list-list-divider-height, 1px);color:unset;--md-list-item-image-list-item-leading-image-height:var(--_list-item-leading-image-height);--md-list-item-image-list-item-leading-image-width:var(--_list-item-leading-image-width);--md-list-item-image-list-item-leading-image-shape:var(--_list-item-leading-image-shape);--md-list-item-video-list-item-leading-video-height:var(--_list-item-leading-video-height);--md-list-item-video-list-item-leading-video-width:var(--_list-item-leading-video-width);--md-list-item-video-list-item-leading-video-shape:var(--_list-item-leading-video-shape);--md-focus-ring-shape-start-start:4px;--md-focus-ring-shape-start-end:4px;--md-focus-ring-shape-end-end:4px;--md-focus-ring-shape-end-start:4px;--md-focus-ring-offset-vertical:-2px;--md-focus-ring-offset-horizontal:-3px}.md3-list-item{align-items:center;box-sizing:border-box;display:flex;outline:none;position:relative;width:100%;background-color:var(--_list-item-container-color);border-radius:var(--_list-item-container-shape)}.md3-list-item.md3-list-item--enabled{cursor:pointer}.md3-list-item--with-one-line{min-height:var(--_list-item-one-line-container-height)}.md3-list-item--with-two-line{min-height:var(--_list-item-two-line-container-height)}.md3-list-item--with-three-line{min-height:var(--_list-item-three-line-container-height)}.md3-list-item__start{flex:0 0 auto;z-index:1;--md-list-item-icon-list-item-icon-color:var(--_list-item-leading-icon-color);--md-list-item-icon-list-item-icon-size:var(--_list-item-leading-icon-size)}:hover .md3-list-item__start{--md-list-item-icon-list-item-icon-color:var(--_list-item-hover-leading-icon-color)}.md3-list-item--disabled .md3-list-item__start{--md-list-item-icon-list-item-icon-color:var(--_list-item-disabled-leading-icon-color);--md-list-item-icon-list-item-icon-opacity:var(--_list-item-disabled-leading-icon-opacity)}.md3-list-item--with-leading-thumbnail .md3-list-item__start,.md3-list-item--with-leading-image .md3-list-item__start{padding-inline-start:16px}.md3-list-item--with-leading-video .md3-list-item__start{padding-inline-start:0}.md3-list-item__body{box-sizing:border-box;flex:1 0 0;padding-inline-start:16px;width:100%;z-index:1}.md3-list-item__end{flex:0 0 auto;padding-inline-end:24px;z-index:1;--md-list-item-icon-list-item-icon-color:var(--_list-item-trailing-icon-color);--md-list-item-icon-list-item-icon-size:var(--_list-item-trailing-icon-size)}:hover .md3-list-item__end{--md-list-item-icon-list-item-icon-color:var(--_list-item-hover-trailing-icon-color)}.md3-list-item--disabled .md3-list-item__end{--md-list-item-icon-list-item-icon-color:var(--_list-item-disabled-trailing-icon-color);--md-list-item-icon-list-item-icon-opacity:var(--_list-item-disabled-trailing-icon-opacity)}.md3-list-item__label-text{display:flex;color:var(--_list-item-label-text-color);font-family:var(--_list-item-label-text-font);font-size:var(--_list-item-label-text-size);letter-spacing:var(--_list-item-label-text-tracking);font-weight:var(--_list-item-label-text-weight);line-height:var(--_list-item-label-text-line-height)}.md3-list-item--disabled .md3-list-item__label-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.md3-list-item__supporting-text{display:block;padding-block-start:4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;color:var(--_list-item-supporting-text-color);font-family:var(--_list-item-supporting-text-font);font-size:var(--_list-item-supporting-text-size);letter-spacing:var(--_list-item-supporting-text-tracking);font-weight:var(--_list-item-supporting-text-weight);line-height:var(--_list-item-supporting-text-line-height)}.md3-list-item--disabled .md3-list-item__supporting-text{color:var(--_list-item-disabled-supporting-text-color);opacity:var(--_list-item-disabled-supporting-text-opacity)}.md3-list-item__supporting-text--multi-line{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden;white-space:normal}.md3-list-item__trailing-supporting-text{padding-inline-start:16px;font-family:var(--_list-item-trailing-supporting-text-font);font-size:var(--_list-item-trailing-supporting-text-size);letter-spacing:var(--_list-item-trailing-supporting-text-tracking);font-weight:var(--_list-item-trailing-supporting-text-weight);line-height:var(--_list-item-trailing-supporting-text-line-height)}.md3-list-item:not(.md3-list-item--disabled) .md3-list-item__trailing-supporting-text{color:var(--_list-item-trailing-supporting-text-color)}.md3-list-item__ripple{display:inline-flex;inset:0;position:absolute;z-index:0}.md3-list-item__focus-ring{z-index:1}/*# sourceMappingURL=list-item-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * TODO(b/241113345): replace with tokens
 */
var Easing;
(function (Easing) {
    Easing["STANDARD"] = "cubic-bezier(0.2, 0, 0, 1)";
})(Easing || (Easing = {}));
/**
 * Creates an `AnimationSignal` that can be used to cancel a previous task.
 *
 * @example
 * class MyClass {
 *   private labelAnimationSignal = createAnimationSignal();
 *
 *   private async animateLabel() {
 *     // Start of the task. Previous tasks will be canceled.
 *     const signal = this.labelAnimationSignal.start();
 *
 *     // Do async work...
 *     if (signal.aborted) {
 *       // Use AbortSignal to check if a request was made to abort after some
 *       // asynchronous work.
 *       return;
 *     }
 *
 *     const animation = this.animate(...);
 *     // Add event listeners to be notified when the task should be canceled.
 *     signal.addEventListener('abort', () => {
 *       animation.cancel();
 *     });
 *
 *     animation.addEventListener('finish', () => {
 *       // Tell the signal that the current task is finished.
 *       this.labelAnimationSignal.finish();
 *     });
 *   }
 * }
 *
 * @return An `AnimationSignal`.
 */
function createAnimationSignal() {
    // The current animation's AbortController
    let animationAbortController = null;
    return {
        start() {
            // Tell the previous animation to cancel.
            animationAbortController?.abort();
            // Set up a new AbortController for the current animation.
            animationAbortController = new AbortController();
            // Provide the AbortSignal so that the caller can check aborted status
            // and add listeners.
            return animationAbortController.signal;
        },
        finish() {
            animationAbortController = null;
        },
    };
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';
/** @soyCompatible */
class Ripple extends s$2 {
    constructor() {
        super(...arguments);
        // TODO(https://bugs.webkit.org/show_bug.cgi?id=247546)
        // Remove Safari workaround that requires reflecting `unbounded` so
        // it can be styled against.
        this.unbounded = false;
        this.disabled = false;
        this.hovered = false;
        this.focused = false;
        this.pressed = false;
        this.rippleSize = '';
        this.rippleScale = '';
        this.initialSize = 0;
        this.pressAnimationSignal = createAnimationSignal();
        this.growAnimation = null;
        this.delayedEndPressHandle = null;
    }
    /** @soyTemplate */
    render() {
        return y `<div class="md3-ripple-surface ${o(this.getRenderRippleClasses())}"></div>`;
    }
    /** @soyTemplate */
    getRenderRippleClasses() {
        return {
            'md3-ripple--hovered': this.hovered,
            'md3-ripple--focused': this.focused,
            'md3-ripple--pressed': this.pressed,
            'md3-ripple--unbounded': this.unbounded,
        };
    }
    update(changedProps) {
        if (changedProps.has('disabled') && this.disabled) {
            this.endHover();
            this.endFocus();
            this.endPress();
        }
        super.update(changedProps);
    }
    getDimensions() {
        return (this.parentElement ?? this).getBoundingClientRect();
    }
    determineRippleSize() {
        const { height, width } = this.getDimensions();
        const maxDim = Math.max(height, width);
        const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
        let maxRadius = maxDim;
        let initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
        maxRadius = hypotenuse + PADDING;
        // ensure `initialSize` is even for unbounded
        if (this.unbounded) {
            initialSize = initialSize - (initialSize % 2);
        }
        this.initialSize = initialSize;
        this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
        this.rippleSize = `${this.initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
        const { scrollX, scrollY } = window;
        const { left, top } = this.getDimensions();
        const documentX = scrollX + left;
        const documentY = scrollY + top;
        const { pageX, pageY } = pointerEvent;
        return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
        const { height, width } = this.getDimensions();
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        };
        let startPoint;
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
        }
        else {
            startPoint = {
                x: width / 2,
                y: height / 2,
            };
        }
        // center around start point
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
        this.determineRippleSize();
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
        const signal = this.pressAnimationSignal.start();
        const growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
                `translate(${translateStart}) scale(1)`,
                `translate(${translateEnd}) scale(${this.rippleScale})`
            ],
        }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: Easing.STANDARD,
            fill: ANIMATION_FILL
        });
        growAnimation.addEventListener('finish', () => {
            this.pressAnimationSignal.finish();
            this.growAnimation = null;
        });
        signal.addEventListener('abort', () => {
            growAnimation.cancel();
            this.growAnimation = null;
        });
        this.growAnimation = growAnimation;
    }
    /**
     * @deprecated Use beginHover
     */
    startHover(hoverEvent) {
        this.beginHover(hoverEvent);
    }
    beginHover(hoverEvent) {
        if (hoverEvent?.pointerType !== 'touch') {
            this.hovered = true;
        }
    }
    endHover() {
        this.hovered = false;
    }
    /**
     * @deprecated Use beginFocus
     */
    startFocus() {
        this.beginFocus();
    }
    beginFocus() {
        this.focused = true;
    }
    endFocus() {
        this.focused = false;
    }
    /**
     * @deprecated Use beginPress
     */
    startPress(positionEvent) {
        this.beginPress(positionEvent);
    }
    beginPress(positionEvent) {
        this.pressed = true;
        if (this.delayedEndPressHandle !== null) {
            clearTimeout(this.delayedEndPressHandle);
            this.delayedEndPressHandle = null;
        }
        this.startPressAnimation(positionEvent);
    }
    endPress() {
        const pressAnimationPlayState = this.growAnimation?.currentTime ?? Infinity;
        if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
        }
        else {
            this.delayedEndPressHandle = setTimeout(() => {
                this.pressed = false;
                this.delayedEndPressHandle = null;
            }, MINIMUM_PRESS_MS - pressAnimationPlayState);
        }
    }
}
__decorate([
    i$3('.md3-ripple-surface'),
    __metadata("design:type", HTMLElement)
], Ripple.prototype, "mdRoot", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Ripple.prototype, "unbounded", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Ripple.prototype, "disabled", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Ripple.prototype, "hovered", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Ripple.prototype, "focused", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Ripple.prototype, "pressed", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$Q = i$6 `:host{--_dragged-state-layer-opacity: var(--md-ripple-dragged-state-layer-opacity, 0.16);--_focus-state-layer-opacity: var(--md-ripple-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-ripple-hover-state-layer-opacity, 0.08);--_pressed-state-layer-opacity: var(--md-ripple-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-ripple-state-layer-shape, 0px);--_focus-state-layer-color: var(--md-ripple-focus-state-layer-color, black);--_hover-state-layer-color: var(--md-ripple-hover-state-layer-color, black);--_pressed-state-layer-color: var(--md-ripple-pressed-state-layer-color, black);--_dragged-state-layer-color: var(--md-ripple-dragged-state-layer-color, black)}:host{display:flex}:host([disabled]){opacity:0}:host,.md3-ripple-surface{position:absolute;inset:0;pointer-events:none;overflow:hidden}.md3-ripple-surface{border-radius:var(--_state-layer-shape);outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.md3-ripple-surface::before,.md3-ripple-surface::after{position:absolute;opacity:0;pointer-events:none;content:""}.md3-ripple-surface::before{background-color:var(--_hover-state-layer-color);transition:opacity 15ms linear,background-color 15ms linear;inset:0}.md3-ripple-surface::after{background:radial-gradient(closest-side, var(--_pressed-state-layer-color) max(100% - 70px, 65%), transparent 100%);transition:opacity 375ms linear;transform-origin:center center}.md3-ripple--hovered::before{background-color:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.md3-ripple--focused::before{background-color:var(--_focus-state-layer-color);opacity:var(--_focus-state-layer-opacity);transition-duration:75ms}.md3-ripple--pressed::after{opacity:var(--_pressed-state-layer-opacity);transition-duration:105ms}.md3-ripple--unbounded,:host([unbounded]){--_state-layer-shape: var(--md-ripple-state-layer-shape, 9999px)}:host([unbounded]){border-radius:var(--_state-layer-shape)}.md3-ripple--unbounded{transform:scale(1)}@media screen and (forced-colors: active){:host{display:none}}/*# sourceMappingURL=ripple-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdRipple = class MdRipple extends Ripple {
};
MdRipple.styles = [styles$Q];
MdRipple = __decorate([
    e$7('md-ripple')
], MdRipple);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary An accessible, themable ring designed to be shown on
 * `:focus-visible`.
 *
 * @description
 * An accessible, themable ring designed to be shown on focus-visible.
 * Focus ring is designed to be controlled by the `strong-focus` module in the
 * same package.
 *
 * In most cases, `visible` should be set to
 * `shouldShowStrongFocus()` on `focus` and `pointerdown` (see `pointerPress()`
 * documentation in the `strong-focus` module), and `false` on `blur`.
 */
class FocusRing extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Makes the focus ring visible.
         */
        this.visible = false;
    }
    render() {
        return y `<span class="md3-focus-ring ${o(this.getRenderClasses())}"></span>`;
    }
    getRenderClasses() {
        return {
            'md3-focus-ring--visible': this.visible,
        };
    }
}
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], FocusRing.prototype, "visible", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$P = i$6 `:host{--_shape-start-start: var(--md-focus-ring-shape-start-start, 9999px);--_shape-start-end: var(--md-focus-ring-shape-start-end, 9999px);--_shape-end-end: var(--md-focus-ring-shape-end-end, 9999px);--_shape-end-start: var(--md-focus-ring-shape-end-start, 9999px);--_offset-vertical: var(--md-focus-ring-offset-vertical, 2px);--_offset-horizontal: var(--md-focus-ring-offset-horizontal, 2px);--_width: var(--md-focus-ring-width, 3px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));pointer-events:none}.md3-focus-ring{display:none;position:absolute;box-sizing:border-box;border:var(--_width) solid var(--_color);border-start-start-radius:var(--_shape-start-start);border-start-end-radius:var(--_shape-start-end);border-end-start-radius:var(--_shape-end-start);border-end-end-radius:var(--_shape-end-end);inset:calc(-1*(var(--_offset-vertical) + var(--_width))) calc(-1*(var(--_offset-horizontal) + var(--_width)))}.md3-focus-ring--visible{display:block}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFocusRing = class MdFocusRing extends FocusRing {
};
MdFocusRing.styles = [styles$P];
MdFocusRing = __decorate([
    e$7('md-focus-ring')
], MdFocusRing);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A property decorator that helps proxy an aria attribute to an internal node.
 *
 * This decorator is only intended for use with ARIAMixin properties,
 * such as `ariaLabel`, to help with screen readers.
 *
 * This decorator will remove the host `aria-*` attribute at runtime and add it
 * to a `data-aria-*` attribute to avoid screenreader conflicts between the
 * host and internal node.
 *
 * `@ariaProperty` decorated properties should sync with LitElement to the
 * `data-aria-*` attribute, not the native `aria-*` attribute.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement {
 *   \@ariaProperty
 *   // TODO(b/210730484): replace with @soyParam annotation
 *   \@property({ type: String, attribute: 'data-aria-label', noAccessor: true})
 *   ariaLabel!: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function ariaProperty(prototype, property) {
    // Replace the ARIAMixin property with data-* attribute syncing instead of
    // using the native aria-* attribute reflection. This preserves the attribute
    // for SSR and avoids screenreader conflicts after delegating the attribute
    // to a child node.
    Object.defineProperty(prototype, property, {
        configurable: true,
        enumerable: true,
        get() {
            return this.dataset[property] ?? '';
        },
        set(value) {
            // Coerce non-string values to a string
            const strValue = String(value ?? '');
            if (strValue) {
                this.dataset[property] = strValue;
            }
            else {
                delete this.dataset[property];
            }
            // lit will call this setter whenever the data-* attribute changes.
            // However, this.dataset[property] will automatically be updated to the
            // current value. To avoid bugs, always request an update regardless of
            // the old value.
            this.requestUpdate();
        }
    });
    // Define an internal property that syncs from the `aria-*` attribute with lit
    // and delegates to the real ARIAMixin property, which renders an update.
    // This property will immediately remove the `aria-*` attribute, which doesn't
    // work well with SSR (which is why there's a separate synced property).
    const internalAriaProperty = Symbol(property);
    // "ariaLabel" -> "aria-label" / "ariaLabelledBy" -> "aria-labelledby"
    const ariaAttribute = property.replace('aria', 'aria-').toLowerCase();
    const constructor = prototype.constructor;
    let removingAttribute = false;
    Object.defineProperty(prototype, internalAriaProperty, {
        get() {
            // tslint is failing here, but the types are correct (ARIAMixin
            // properties do not obfuscate with closure)
            // tslint:disable-next-line:no-dict-access-on-struct-type
            return this[property];
        },
        set(value) {
            if (removingAttribute) {
                // Ignore this update, which is triggered below
                return;
            }
            // Set the ARIAMixin property, which will sync the `data-*` attribute
            // and trigger rendering if the value changed.
            // tslint is failing here, but the types are correct (ARIAMixin
            // properties do not obfuscate with closure)
            // tslint:disable-next-line:no-dict-access-on-struct-type
            this[property] = value;
            // Remove the `aria-*` attribute, which will call this setter again with
            // the incorrect value. Ignore these updates.
            removingAttribute = true;
            this.removeAttribute(ariaAttribute);
            removingAttribute = false;
        }
    });
    // Tell lit to observe the `aria-*` attribute and set the internal property,
    // which acts as a "aria-* attribute changed" observer.
    constructor.createProperty(internalAriaProperty, {
        attribute: ariaAttribute,
        noAccessor: true,
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class FocusGlobal {
    constructor() {
        this.visible = false;
    }
    setVisible(visible) {
        this.visible = visible;
    }
}
/**
 * This object can be overwritten by the `setup()` function to use a different
 * focus coordination object.
 */
let focusObject = new FocusGlobal();
/**
 * Set of keyboard event codes that correspond to keyboard navigation
 */
const KEYBOARD_NAVIGATION_KEYS = new Set(['Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']);
function keydownHandler(e) {
    if (KEYBOARD_NAVIGATION_KEYS.has(e.key)) {
        focusObject.setVisible(true);
    }
}
/**
 * Set up integration with alternate global focus tracking object
 *
 * @param focusGlobal A global focus object to coordinate between multiple
 *     systems
 * @param enableKeydownHandler Set to true to let StrongFocusService listen for
 *     keyboard navigation
 */
function setup(focusGlobal, enableKeydownHandler = false) {
    focusObject = focusGlobal;
    if (enableKeydownHandler) {
        window.addEventListener('keydown', keydownHandler);
    }
    else {
        window.removeEventListener('keydown', keydownHandler);
    }
}
/**
 * Returns `true` if the component should show strong focus.
 *
 * By default, strong focus is shown only on keyboard navigation, and not on
 * pointer interaction.
 */
function shouldShowStrongFocus() {
    return focusObject.visible;
}
/**
 * Components should call this when a user interacts with a component with a
 * pointing device.
 *
 * By default, this will prevent the strong focus from being shown.
 */
function pointerPress() {
    focusObject.setVisible(false);
}
setup(focusObject, true);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l$2=l=>null!=l?l:b;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ListItem extends ActionElement {
    constructor() {
        super(...arguments);
        // @ts-ignore(b/264292293): Use `override` with TS 4.9+
        this.role = 'listitem';
        this.supportingText = '';
        this.multiLineSupportingText = '';
        this.trailingSupportingText = '';
        this.disabled = false;
        this.itemTabIndex = -1;
        this.headline = '';
        this.showFocusRing = false;
    }
    /** @soyTemplate */
    render() {
        return y `
      <li
          tabindex=${this.itemTabIndex}
          role=${this.role}
          aria-selected=${l$2(this.ariaSelected || undefined)}
          aria-checked=${l$2(this.ariaChecked || undefined)}
          id=${l$2(this.itemId || undefined)}
          data-query-md3-list-item
          class="md3-list-item ${o(this.getRenderClasses())}"
          @pointerdown=${this.handlePointerDown}
          @pointerenter=${this.handlePointerEnter}
          @pointerup=${this.handlePointerUp}
          @pointercancel=${this.handlePointerCancel}
          @pointerleave=${this.handlePointerLeave}
          @keydown=${this.handleKeyDown}
          @keyup=${this.handleKeyUp}
          @click=${this.handleClick}
          @contextmenu=${this.handleContextMenu}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          >
        ${this.renderStart()}
        ${this.renderBody()}
        ${this.renderEnd()}
        <div class="md3-list-item__ripple">
          ${this.renderRipple()}
        </div>
        <div class="md3-list-item__focus-ring">
          ${this.renderFocusRing()}
        </div>
      </li>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return y `<md-ripple ?disabled="${this.disabled}"></md-ripple>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /** @soyTemplate */
    getAriaRole() {
        return 'listitem';
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-list-item--with-one-line': this.supportingText === '' && this.multiLineSupportingText === '',
            'md3-list-item--with-two-line': this.supportingText !== '' && this.multiLineSupportingText === '',
            'md3-list-item--with-three-line': this.multiLineSupportingText !== '',
            'md3-list-item--disabled': this.disabled,
            'md3-list-item--enabled': !this.disabled,
        };
    }
    /** @soyTemplate */
    renderStart() {
        return y `<div class="md3-list-item__start"><!--
      --><slot name="start" @slotchange=${this.handleSlotChange}></slot><!--
    --></div>`;
    }
    /** @soyTemplate */
    renderBody() {
        return y `<div class="md3-list-item__body"><!--
       --><span class="md3-list-item__label-text"><!--
          -->${this.headline}<!--
       --></span><!--
        -->${this.multiLineSupportingText !== '' ?
            this.renderMultiLineSupportingText() :
            this.supportingText !== '' ? this.renderSupportingText() :
                ''}<!--
    --></div>`;
    }
    /** @soyTemplate */
    renderSupportingText() {
        return y `<span class="md3-list-item__supporting-text"><!--
          -->${this.supportingText}<!--
       --></span>`;
    }
    /** @soyTemplate */
    renderMultiLineSupportingText() {
        return y `<span class="md3-list-item__supporting-text md3-list-item__supporting-text--multi-line"><!--
          -->${this.multiLineSupportingText}<!--
       --></span>`;
    }
    /** @soyTemplate */
    renderEnd() {
        return y `<div class="md3-list-item__end"><!--
      --><slot name="end" @slotchange=${this.handleSlotChange}><!--
        -->${this.trailingSupportingText !== '' ?
            this.renderTrailingSupportingText() :
            ''}<!--
      --></slot><!--
    --></div>`;
    }
    /** @soyTemplate */
    renderTrailingSupportingText() {
        return y `<span class="md3-list-item__trailing-supporting-text"><!--
          -->${this.trailingSupportingText}<!--
       --></span>`;
    }
    handleSlotChange() {
        this.requestUpdate();
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress({ cancelled }) {
        this.ripple.endPress();
        if (cancelled)
            return;
        super.endPress({ cancelled, actionData: { item: this } });
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerEnter(e) {
        this.ripple.beginHover(e);
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    /** @bubbleWizEvent */
    handleKeyDown(e) {
        if (e.key !== ' ' && e.key !== 'Enter')
            return;
        e.preventDefault();
        // TODO(b/240124486): Replace with beginPress provided by action
        // element.
        this.ripple.beginPress(e);
    }
    handleKeyUp(e) {
        if (e.key !== ' ' && e.key !== 'Enter')
            return;
        e.preventDefault();
        // TODO(b/240124486): Replace with beginPress provided by action element.
        super.endPress({ cancelled: false, actionData: { item: this } });
        this.ripple.endPress();
    }
    /**
     * Focuses list item and makes list item focusable via keyboard.
     */
    activate() {
        this.itemTabIndex = 0;
        this.listItemRoot.focus();
        this.showFocusRing = true;
    }
    /**
     * Returns true if list item is currently focused and is focusable.
     */
    isActive() {
        return this.itemTabIndex === 0 && this.showFocusRing;
    }
    /**
     * Removes list item from sequential keyboard navigation.
     */
    deactivate() {
        this.itemTabIndex = -1;
    }
}
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    // tslint:disable-next-line:decorator-placement
    ,
    e$6({ type: String, attribute: 'data-role', noAccessor: true }),
    __metadata("design:type", String)
], ListItem.prototype, "role", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-selected', noAccessor: true }),
    __metadata("design:type", String)
], ListItem.prototype, "ariaSelected", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-checked', noAccessor: true }),
    __metadata("design:type", String)
], ListItem.prototype, "ariaChecked", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], ListItem.prototype, "itemId", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "supportingText", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "multiLineSupportingText", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "trailingSupportingText", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], ListItem.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Object)
], ListItem.prototype, "itemTabIndex", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], ListItem.prototype, "headline", void 0);
__decorate([
    i$3('md-ripple'),
    __metadata("design:type", MdRipple)
], ListItem.prototype, "ripple", void 0);
__decorate([
    i$3('[data-query-md3-list-item]'),
    __metadata("design:type", HTMLElement)
], ListItem.prototype, "listItemRoot", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], ListItem.prototype, "showFocusRing", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** Base class for autocomplete item component. */
class AutocompleteItem extends ListItem {
    constructor() {
        super(...arguments);
        this.role = 'option';
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdAutocompleteItem = class MdAutocompleteItem extends AutocompleteItem {
};
MdAutocompleteItem.styles = [styles$R];
MdAutocompleteItem = __decorate([
    e$7('md-autocomplete-item')
], MdAutocompleteItem);

/**
 * @requirecss {field.lib.shared_styles}
 *
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class Field extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.error = false;
        this.focused = false;
        this.populated = false;
        this.required = false;
        /**
         * Whether or not the field has leading content.
         */
        this.hasStart = false;
        /**
         * Whether or not the field has trailing content.
         */
        this.hasEnd = false;
        this.isAnimating = false;
        this.labelAnimationSignal = createAnimationSignal();
    }
    /** @soyTemplate */
    render() {
        return y `
      <span class="md3-field ${o(this.getRenderClasses())}">
        ${this.renderContainer()}
        ${this.renderSupportingText()}
      </span>
    `;
    }
    /** @soyTemplate */
    renderContainer() {
        return y `
      <span class="md3-field__container">
        ${this.renderContainerContents()}
      </span>
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-field--disabled': this.disabled,
            'md3-field--error': this.error,
            'md3-field--focused': this.focused,
            'md3-field--with-start': this.hasStart,
            'md3-field--with-end': this.hasEnd,
            'md3-field--populated': this.populated,
            'md3-field--required': this.required,
            'md3-field--no-label': !this.label,
        };
    }
    /** @soyTemplate */
    renderContainerContents() {
        return y `
      <span class="md3-field__start">
        <slot name="start"></slot>
      </span>
      <span class="md3-field__middle">${this.renderMiddleContents()}</span>
      <span class="md3-field__end">
        <slot name="end"></slot>
      </span>
    `;
    }
    /** @soyTemplate */
    renderMiddleContents() {
        return y `
      <span class="md3-field__content"><slot></slot></span>
    `;
    }
    /** @soyTemplate */
    renderFloatingLabel() {
        const visible = (this.focused || this.populated) && !this.isAnimating;
        /** @classMap */
        const classes = { 'md3-field__label--hidden': !visible };
        return y `
      <span class="md3-field__label md3-field__label--floating ${o(classes)}"
        aria-hidden=${!visible}
      >${this.renderLabelText()}</span>
    `;
        // TODO(b/217441842): Create shared function once argument bug is fixed
        // return this.renderLabel(LabelType.FLOATING);
    }
    /** @soyTemplate */
    renderRestingLabel() {
        const visible = !(this.focused || this.populated) || this.isAnimating;
        /** @classMap */
        const classes = { 'md3-field__label--hidden': !visible };
        return y `
      <span class="md3-field__label md3-field__label--resting ${o(classes)}"
        aria-hidden=${!visible}
      >${this.renderLabelText()}</span>
    `;
        // TODO(b/217441842): Create shared function once argument bug is fixed
        // return this.renderLabel(LabelType.RESTING);
    }
    /** @soyTemplate */
    renderLabelText() {
        const labelText = this.label ?? '';
        const optionalAsterisk = this.required && labelText ? '*' : '';
        return labelText + optionalAsterisk;
    }
    /** @soyTemplate */
    renderSupportingText() {
        return y `
      <span class="md3-field__supporting-text">
        <span class="md3-field__supporting-text-start">
          <slot name="supporting-text"></slot>
        </span>
        <span class="md3-field__supporting-text-end">
          <slot name="supporting-text-end"></slot>
        </span>
      </span>
    `;
    }
    update(props) {
        // Client-side property updates
        // When disabling, remove focus styles if focused.
        if (this.disabled && this.focused) {
            props.set('focused', true);
            this.focused = false;
        }
        // Animate if focused or populated change.
        this.animateLabelIfNeeded({
            wasFocused: props.get('focused'),
            wasPopulated: props.get('populated')
        });
        super.update(props);
    }
    async animateLabelIfNeeded({ wasFocused, wasPopulated }) {
        if (!this.label) {
            return;
        }
        wasFocused ?? (wasFocused = this.focused);
        wasPopulated ?? (wasPopulated = this.populated);
        const wasFloating = wasFocused || wasPopulated;
        const shouldBeFloating = this.focused || this.populated;
        if (wasFloating === shouldBeFloating) {
            return;
        }
        this.isAnimating = true;
        const signal = this.labelAnimationSignal.start();
        // Only one label is visible at a time for clearer text rendering.
        // The resting label is visible and used during animation. At the end of the
        // animation, it will either remain visible (if resting) or hide and the
        // floating label will be shown.
        const labelEl = await this.restingLabelEl;
        const keyframes = await this.getLabelKeyframes();
        if (signal.aborted) {
            // Don't animate if this animation was requested to stop while getting
            // the label element or calculating keyframes
            return;
        }
        // We don't use forward filling because if the dimensions of the text field
        // change (leading icon removed, density changes, etc), then the animation
        // will be inaccurate.
        //
        // Re-calculating the animation each time will prevent any visual glitches
        // from appearing.
        // TODO(b/241113345): use animation tokens
        const animation = labelEl.animate(keyframes, { duration: 150, easing: Easing.STANDARD });
        signal.addEventListener('abort', () => {
            // Cancel if requested (another animation starts playing).
            animation.cancel();
        });
        animation.addEventListener('finish', () => {
            // At the end of the animation, update the visible label.
            this.isAnimating = false;
            this.labelAnimationSignal.finish();
        });
    }
    async getLabelKeyframes() {
        const floatingLabelEl = await this.floatingLabelEl;
        const restingLabelEl = await this.restingLabelEl;
        const { x: floatingX, y: floatingY, width: floatingWidth, height: floatingHeight } = floatingLabelEl.getBoundingClientRect();
        const { x: restingX, y: restingY, width: restingWidth, height: restingHeight } = restingLabelEl.getBoundingClientRect();
        // Scale by width ratio instead of font size since letter-spacing will scale
        // incorrectly. Using the width we can better approximate the adjusted
        // scale and compensate for tracking.
        const scale = floatingWidth / restingWidth;
        const xDelta = floatingX - restingX;
        // The line-height of the resting and floating label are different. When
        // we move the resting label up to the floating label's position, it won't
        // exactly match because of this. We need to adjust by half of what the
        // final scaled resting label's height will be.
        const yDelta = floatingY - restingY +
            Math.round((floatingHeight - restingHeight * scale) / 2);
        // Create the two transforms: resting to floating (using the calculations
        // above), and floating to resting (re-setting the transform to initial
        // values).
        const floatTransform = `translateX(${xDelta}px) translateY(calc(-50% + ${yDelta}px)) scale(${scale})`;
        const restTransform = `translateX(0) translateY(-50%) scale(1)`;
        if (this.focused || this.populated) {
            return [{ transform: restTransform }, { transform: floatTransform }];
        }
        return [{ transform: floatTransform }, { transform: restTransform }];
    }
}
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "error", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "focused", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], Field.prototype, "label", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "populated", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "required", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "hasStart", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Field.prototype, "hasEnd", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Field.prototype, "isAnimating", void 0);
__decorate([
    e$4('.md3-field__label--floating'),
    __metadata("design:type", Promise)
], Field.prototype, "floatingLabelEl", void 0);
__decorate([
    e$4('.md3-field__label--resting'),
    __metadata("design:type", Promise)
], Field.prototype, "restingLabelEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class FilledField extends Field {
    constructor() {
        super(...arguments);
        this.strokeTransformOrigin = '';
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-field--filled': true,
        };
    }
    /** @soyTemplate */
    renderContainer() {
        return y `
      <span class="md3-field__container" @click=${this.handleClick}>
        ${this.renderContainerContents()}
      </span>
    `;
    }
    /** @soyTemplate */
    renderContainerContents() {
        /** @styleMap */
        const strokeStyle = { transformOrigin: this.strokeTransformOrigin };
        return y `
      <span class="md3-field__state-layer"></span>
      ${super.renderContainerContents()}
      <span class="md3-field__active-indicator"
        style="${i$1(strokeStyle)}"></span>
    `;
    }
    /** @soyTemplate */
    renderMiddleContents() {
        return y `
      ${this.renderFloatingLabel()}
      ${this.renderRestingLabel()}
      ${super.renderMiddleContents()}
    `;
    }
    /** @bubbleWizEvent */
    handleClick(event) {
        if (this.disabled) {
            return;
        }
        this.updateStrokeTransformOrigin(event);
    }
    update(props) {
        // Upon losing focus, the stroke resets to expanding from the center, such
        // as when re-focusing with a keyboard.
        const unfocusing = props.has('focused') && !this.focused;
        if (unfocusing) {
            this.updateStrokeTransformOrigin();
        }
        super.update(props);
    }
    async updateStrokeTransformOrigin(event) {
        let transformOrigin = '';
        if (event) {
            // Can't use instanceof TouchEvent since Firefox does not provide the
            // constructor globally.
            const isTouchEvent = 'touches' in event;
            const eventX = isTouchEvent ? event.touches[0].clientX : event.clientX;
            const rootRect = this.getBoundingClientRect();
            transformOrigin = `${eventX - rootRect.x}px`;
        }
        this.strokeTransformOrigin = transformOrigin;
    }
}
__decorate([
    t$1(),
    __metadata("design:type", Object)
], FilledField.prototype, "strokeTransformOrigin", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$O = i$6 `:host{--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, 4px);--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, 4px);--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, 0px);--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, 0px);--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_container-height: var(--md-filled-field-container-height, 56px);--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-leading-icon-opacity: var(--md-filled-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-trailing-icon-opacity: var(--md-filled-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 2px);--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, Roboto);--_label-text-line-height: var(--md-filled-field-label-text-line-height, 1.5rem);--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, 0.75rem);--_label-text-size: var(--md-filled-field-label-text-size, 1rem);--_label-text-tracking: var(--md-filled-field-label-text-tracking, 0.031rem);--_label-text-weight: var(--md-filled-field-label-text-weight, 400);--_leading-icon-color: var(--md-filled-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, Roboto);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, 1rem);--_supporting-text-size: var(--md-filled-field-supporting-text-size, 0.75rem);--_supporting-text-tracking: var(--md-filled-field-supporting-text-tracking, 0.025rem);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, 400);--_trailing-icon-color: var(--md-filled-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-field-trailing-icon-size, 24px);--_container-padding-horizontal: var(--md-filled-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-filled-field-container-padding-vertical, 8px);--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_supporting-text-padding: var(--md-filled-field-supporting-text-padding, 16px);--_supporting-text-padding-top: var(--md-filled-field-supporting-text-padding-top, 4px);--_label-text-populated-font: ;--_label-text-populated-tracking: ;--_label-text-populated-weight: }.md3-field__container{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);overflow:hidden;padding-top:var(--_container-padding-vertical);padding-bottom:var(--_container-padding-vertical);z-index:0}.md3-field__container::before{background:var(--_container-color)}.md3-field__container::after{visibility:hidden}.md3-field__container::before,.md3-field__container::after{border-radius:inherit;content:"";display:flex;height:100%;position:absolute;width:100%;z-index:-1}.md3-field__label--floating{position:absolute;top:0}.md3-field__state-layer{border-radius:inherit;height:100%;position:absolute;width:100%;visibility:hidden;z-index:-1}.md3-field:not(.md3-field--disabled):hover .md3-field__state-layer{visibility:visible}.md3-field__active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%}.md3-field__active-indicator::before,.md3-field__active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.md3-field__active-indicator::after{opacity:0;transform:scaleX(0);transform-origin:inherit;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),transform 0s ease 150ms}.md3-field--focused .md3-field__active-indicator::after{opacity:1;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-field:not(.md3-field--with-start) .md3-field__start{padding-inline-start:var(--_container-padding-horizontal)}.md3-field:not(.md3-field--with-end) .md3-field__end{padding-inline-end:var(--_container-padding-horizontal)}.md3-field:not(.md3-field--no-label) .md3-field__middle{padding-top:var(--_label-text-populated-line-height)}:hover .md3-field__active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}:hover .md3-field__state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.md3-field__active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}.md3-field--disabled .md3-field__active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.md3-field--disabled .md3-field__container::before{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.md3-field--error:not(.md3-field--disabled) .md3-field__active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.md3-field--error:not(.md3-field--disabled):hover .md3-field__active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.md3-field--error:not(.md3-field--disabled):hover .md3-field__state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.md3-field--error:not(.md3-field--disabled) .md3-field__active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$N = i$6 `:host{display:inline-flex}.md3-field{display:inline-flex;flex:1;flex-direction:column;writing-mode:horizontal-tb}.md3-field__container{align-items:center;box-sizing:border-box;display:flex;flex:1;flex-basis:var(--_container-height);position:relative}.md3-field--disabled{pointer-events:none}.md3-field--with-start .md3-field__start,.md3-field--with-end .md3-field__end{min-width:48px}.md3-field--with-start .md3-field__start{margin-inline-end:4px}.md3-field--with-end .md3-field__end{margin-inline-start:4px}.md3-field__start,.md3-field__middle,.md3-field__end{display:flex;align-items:center;box-sizing:border-box;height:100%;position:relative}.md3-field__start,.md3-field__end{justify-content:center}.md3-field__middle{align-self:baseline;flex:1}.md3-field__content{display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.4, 0, 0.2, 1);color:var(--_content-color)}.md3-field--no-label .md3-field__content,.md3-field--focused .md3-field__content,.md3-field--populated .md3-field__content{opacity:1;transition-delay:67ms}.md3-field--disabled.md3-field--no-label .md3-field__content,.md3-field--disabled.md3-field--focused .md3-field__content,.md3-field--disabled.md3-field--populated .md3-field__content{opacity:var(--_disabled-content-opacity)}:hover .md3-field__content{color:var(--_hover-content-color)}.md3-field--focused .md3-field__content{color:var(--_focus-content-color)}.md3-field--disabled .md3-field__content{color:var(--_disabled-content-color)}.md3-field--error:not(.md3-field--disabled) .md3-field__content{color:var(--_error-content-color)}.md3-field--error:not(.md3-field--disabled):hover .md3-field__content{color:var(--_error-hover-content-color)}.md3-field--error:not(.md3-field--disabled).md3-field--focused .md3-field__content{color:var(--_error-focus-content-color)}.md3-field__label{color:var(--_label-text-color);overflow:hidden;max-width:100%;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-weight:var(--_label-text-weight);letter-spacing:var(--_label-text-tracking)}.md3-field__label--resting{position:absolute;top:50%;transform:translateY(-50%);transform-origin:top left;font-size:var(--_label-text-size);line-height:var(--_label-text-line-height)}.md3-field__label--floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height)}.md3-field__label--hidden{opacity:0}.md3-field--no-label .md3-field__label{display:none}:hover .md3-field__label{color:var(--_hover-label-text-color)}.md3-field--focused .md3-field__label{color:var(--_focus-label-text-color)}.md3-field--disabled .md3-field__label{color:var(--_disabled-label-text-color)}.md3-field--disabled .md3-field__label:not(.md3-field__label--hidden){opacity:var(--_disabled-label-text-opacity)}.md3-field--error:not(.md3-field--disabled) .md3-field__label{color:var(--_error-label-text-color)}.md3-field--error:not(.md3-field--disabled):hover .md3-field__label{color:var(--_error-hover-label-text-color)}.md3-field--error:not(.md3-field--disabled).md3-field--focused .md3-field__label{color:var(--_error-focus-label-text-color)}.md3-field__supporting-text{color:var(--_supporting-text-color);display:flex;justify-content:space-between;padding:0 var(--_supporting-text-padding);font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);font-weight:var(--_supporting-text-weight);letter-spacing:var(--_supporting-text-tracking);line-height:var(--_supporting-text-line-height)}.md3-field__supporting-text-start,.md3-field__supporting-text-end{display:flex}.md3-field__supporting-text-start ::slotted(:not(:empty)),.md3-field__supporting-text-end ::slotted(:not(:empty)){padding-top:var(--_supporting-text-padding-top)}.md3-field__supporting-text-end ::slotted(:not(:empty)){padding-inline-start:var(--_supporting-text-padding)}:hover .md3-field__supporting-text{color:var(--_hover-supporting-text-color)}.md3-field--focus .md3-field__supporting-text{color:var(--_focus-supporting-text-color)}.md3-field--disabled .md3-field__supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.md3-field--error:not(.md3-field--disabled) .md3-field__supporting-text{color:var(--_error-supporting-text-color)}.md3-field--error:not(.md3-field--disabled):hover .md3-field__supporting-text{color:var(--_error-hover-supporting-text-color)}.md3-field--error:not(.md3-field--disabled).md3-field--focus .md3-field__supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFilledField = class MdFilledField extends FilledField {
};
MdFilledField.styles = [styles$N, styles$O];
MdFilledField = __decorate([
    e$7('md-filled-field')
], MdFilledField);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$M = i$6 `:host{--_container-color: var(--md-list-container-color, #fff);--_list-divider-color: var(--md-list-list-divider-color, #c4c7c5);--_list-divider-height: var(--md-list-list-divider-height, 1px);--_container-surface-tint-layer-color: var(--md-list-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-list-container-elevation, 0);--md-elevation-level:var(--_container-elevation);--md-elevation-surface-tint-color:var(--_container-surface-tint-layer-color);color:unset}.md3-list{background-color:var(--_container-color);display:block;list-style-type:none;margin:0;min-width:300px;outline:none;padding:8px 0;position:relative;--md-list-divider-list-divider-color:var(--_list-divider-color);--md-list-divider-list-divider-height:var(--_list-divider-height)}md-elevation{inset:0;position:absolute;z-index:0}/*# sourceMappingURL=list-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const NAVIGATABLE_KEYS = {
    ArrowDown: 'ArrowDown',
    ArrowUp: 'ArrowUp',
    Home: 'Home',
    End: 'End',
};
/** @soyCompatible */
class List extends s$2 {
    constructor() {
        super(...arguments);
        // @ts-ignore(b/264292293): Use `override` with TS 4.9+
        this.role = 'list';
        this.listId = '';
        this.listTabIndex = 0;
        this.items = [];
        this.activeListItem = null;
        this.listItemTagName = 'md-list-item';
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.updateItems();
    }
    /** @soyTemplate */
    render() {
        return y `
      <ul class="md3-list ${o(this.getRenderClasses())}"
          aria-label="${l$2(this.ariaLabel)}"
          id=${l$2(this.listId || undefined)}
          tabindex=${this.listTabIndex}
          role=${this.role}
          @action=${this.handleAction}
          @keydown=${this.handleKeydown}
          >
        <span><slot></slot></span>
        <md-elevation surface></md-elevation>
      </ul>
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {};
    }
    handleKeydown(event) {
        if (Object.values(NAVIGATABLE_KEYS).indexOf(event.key) === -1)
            return;
        for (const item of this.items) {
            if (this.isListItemActive(item)) {
                this.activeListItem = item;
            }
            this.deactivateListItem(item);
        }
        if (event.key === NAVIGATABLE_KEYS.ArrowDown) {
            event.preventDefault();
            if (this.activeListItem) {
                this.activeListItem = this.getNextItem(this.activeListItem);
            }
            else {
                this.activeListItem = this.getFirstItem();
            }
        }
        if (event.key === NAVIGATABLE_KEYS.ArrowUp) {
            event.preventDefault();
            if (this.activeListItem) {
                this.activeListItem = this.getPrevItem(this.activeListItem);
            }
            else {
                this.activeListItem = this.getLastItem();
            }
        }
        if (event.key === NAVIGATABLE_KEYS.Home) {
            event.preventDefault();
            this.activeListItem = this.getFirstItem();
        }
        if (event.key === NAVIGATABLE_KEYS.End) {
            event.preventDefault();
            this.activeListItem = this.getLastItem();
        }
        if (this.activeListItem) {
            this.activateListItem(this.activeListItem);
        }
    }
    activateListItem(item) {
        item.activate();
    }
    deactivateListItem(item) {
        item.deactivate();
    }
    isListItemActive(item) {
        return item.isActive();
    }
    handleAction(event) { }
    activateFirstItem() {
        this.activeListItem = this.getFirstItem();
        this.activeListItem.activate();
    }
    activateLastItem() {
        this.activeListItem = this.getLastItem();
        this.activeListItem.activate();
    }
    resetActiveListItem() {
        this.activeListItem = null;
    }
    focusListRoot() {
        this.listRoot.focus();
    }
    /** Updates `this.items` based on slot elements in the DOM. */
    updateItems() {
        const elements = this.assignedElements || [];
        this.items = elements.filter(this.isListItem, this);
    }
    /** @return Whether the given element is a list item element. */
    isListItem(element) {
        return element.tagName.toLowerCase() === this.listItemTagName;
    }
    getFirstItem() {
        return this.items[0];
    }
    getLastItem() {
        return this.items[this.items.length - 1];
    }
    getPrevItem(item) {
        const curIndex = this.items.indexOf(item);
        return this.items[curIndex === 0 ? this.items.length - 1 : curIndex - 1];
    }
    getNextItem(item) {
        const curIndex = this.items.indexOf(item);
        return this.items[(curIndex + 1) % this.items.length];
    }
}
List.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], List.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-activedescendant', noAccessor: true }),
    __metadata("design:type", String)
], List.prototype, "ariaActivedescendant", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    // tslint:disable-next-line:decorator-placement
    ,
    e$6({ type: String, attribute: 'data-role', noAccessor: true }),
    __metadata("design:type", String)
], List.prototype, "role", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], List.prototype, "listId", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Number)
], List.prototype, "listTabIndex", void 0);
__decorate([
    i$3('.md3-list'),
    __metadata("design:type", HTMLElement)
], List.prototype, "listRoot", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], List.prototype, "listItemTagName", void 0);
__decorate([
    l$3({ flatten: true }),
    __metadata("design:type", Array)
], List.prototype, "assignedElements", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** Base class for autocomplete list component. */
class AutocompleteList extends List {
    constructor() {
        super(...arguments);
        this.role = 'listbox';
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-autocomplete-list': true,
        };
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$L = i$6 `.md3-autocomplete-list{min-width:unset}/*# sourceMappingURL=autocomplete-list-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdAutocompleteList = class MdAutocompleteList extends AutocompleteList {
};
MdAutocompleteList.styles = [styles$M, styles$L];
MdAutocompleteList = __decorate([
    e$7('md-autocomplete-list')
], MdAutocompleteList);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),l$1=t=>{if((null==t?void 0:t.r)===e$1)return null==t?void 0:t._$litStatic$},i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,l)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[l+1]),t[0]),r:e$1}),s$1=new Map,a=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l$1(a));)c+=i+r[++$],f=!0;u.push(a),n.push(c),$++;}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s$1.get(t))&&(n.raw=n,s$1.set(t,r=n)),e=u;}return t(r,...e)},n$1=a(y);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$K = i$6 `@media(forced-colors: active){:host{--md-filled-text-field-disabled-active-indicator-color:GrayText;--md-filled-text-field-disabled-active-indicator-opacity:1;--md-filled-text-field-disabled-input-text-color:GrayText;--md-filled-text-field-disabled-input-text-opacity:1;--md-filled-text-field-disabled-label-text-color:GrayText;--md-filled-text-field-disabled-label-text-opacity:1;--md-filled-text-field-disabled-leading-icon-color:GrayText;--md-filled-text-field-disabled-leading-icon-opacity:1;--md-filled-text-field-disabled-supporting-text-color:GrayText;--md-filled-text-field-disabled-supporting-text-opacity:1;--md-filled-text-field-disabled-trailing-icon-color:GrayText;--md-filled-text-field-disabled-trailing-icon-opacity:1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$J = i$6 `:host{--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, 4px);--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, 4px);--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, 0px);--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, 0px);--_container-padding-horizontal: var(--md-filled-text-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-filled-text-field-container-padding-vertical, 8px);--_input-text-prefix-padding: var(--md-filled-text-field-input-text-prefix-padding, 2px);--_input-text-suffix-padding: var(--md-filled-text-field-input-text-suffix-padding, 2px);--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_container-height: var(--md-filled-text-field-container-height, 56px);--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 2px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_input-text-font: var(--md-filled-text-field-input-text-font, Roboto);--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, 1.5rem);--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, 1rem);--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-tracking: var(--md-filled-text-field-input-text-tracking, 0.031rem);--_input-text-type: var(--md-filled-text-field-input-text-type, 400 1rem / 1.5rem Roboto);--_input-text-weight: var(--md-filled-text-field-input-text-weight, 400);--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, Roboto);--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, 1.5rem);--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, 0.75rem);--_label-text-size: var(--md-filled-text-field-label-text-size, 1rem);--_label-text-tracking: var(--md-filled-text-field-label-text-tracking, 0.031rem);--_label-text-type: var(--md-filled-text-field-label-text-type, 400 1rem / 1.5rem Roboto);--_label-text-weight: var(--md-filled-text-field-label-text-weight, 400);--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, Roboto);--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, 1rem);--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, 0.75rem);--_supporting-text-tracking: var(--md-filled-text-field-supporting-text-tracking, 0.025rem);--_supporting-text-type: var(--md-filled-text-field-supporting-text-type, 400 0.75rem / 1rem Roboto);--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, 400);--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-container-shape-start-start:var(--_container-shape-start-start);--md-filled-field-container-shape-start-end:var(--_container-shape-start-end);--md-filled-field-container-shape-end-end:var(--_container-shape-end-end);--md-filled-field-container-shape-end-start:var(--_container-shape-end-start);--md-filled-field-active-indicator-color:var(--_active-indicator-color);--md-filled-field-active-indicator-height:var(--_active-indicator-height);--md-filled-field-container-color:var(--_container-color);--md-filled-field-container-height:var(--_container-height);--md-filled-field-container-padding-horizontal:var(--_container-padding-horizontal);--md-filled-field-container-padding-vertical:var(--_container-padding-vertical);--md-filled-field-content-color:var(--_input-text-color);--md-filled-field-disabled-active-indicator-color:var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height:var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity:var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color:var(--_disabled-container-color);--md-filled-field-disabled-container-opacity:var(--_disabled-container-opacity);--md-filled-field-disabled-content-color:var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity:var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color:var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity:var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-icon-color:var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-icon-opacity:var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color:var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity:var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-icon-color:var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-icon-opacity:var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color:var(--_error-active-indicator-color);--md-filled-field-error-focus-active-indicator-color:var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color:var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color:var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-icon-color:var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color:var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-icon-color:var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color:var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color:var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color:var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-icon-color:var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color:var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity:var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color:var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-icon-color:var(--_error-hover-trailing-icon-color);--md-filled-field-error-content-color:var(--_error-input-text-color);--md-filled-field-error-label-text-color:var(--_error-label-text-color);--md-filled-field-error-leading-icon-color:var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color:var(--_error-supporting-text-color);--md-filled-field-error-trailing-icon-color:var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color:var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height:var(--_focus-active-indicator-height);--md-filled-field-focus-content-color:var(--_focus-input-text-color);--md-filled-field-focus-label-text-color:var(--_focus-label-text-color);--md-filled-field-focus-leading-icon-color:var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color:var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-icon-color:var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color:var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height:var(--_hover-active-indicator-height);--md-filled-field-hover-content-color:var(--_hover-input-text-color);--md-filled-field-hover-label-text-color:var(--_hover-label-text-color);--md-filled-field-hover-leading-icon-color:var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color:var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color:var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-icon-color:var(--_hover-trailing-icon-color);--md-filled-field-label-text-color:var(--_label-text-color);--md-filled-field-label-text-font:var(--_label-text-font);--md-filled-field-label-text-line-height:var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height:var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size:var(--_label-text-populated-size);--md-filled-field-label-text-size:var(--_label-text-size);--md-filled-field-label-text-tracking:var(--_label-text-tracking);--md-filled-field-label-text-weight:var(--_label-text-weight);--md-filled-field-leading-icon-color:var(--_leading-icon-color);--md-filled-field-leading-icon-size:var(--_leading-icon-size);--md-filled-field-supporting-text-color:var(--_supporting-text-color);--md-filled-field-supporting-text-font:var(--_supporting-text-font);--md-filled-field-supporting-text-line-height:var(--_supporting-text-line-height);--md-filled-field-supporting-text-size:var(--_supporting-text-size);--md-filled-field-supporting-text-tracking:var(--_supporting-text-tracking);--md-filled-field-supporting-text-weight:var(--_supporting-text-weight);--md-filled-field-trailing-icon-color:var(--_trailing-icon-color);--md-filled-field-trailing-icon-size:var(--_trailing-icon-size)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$I = i$6 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.md3-text-field{display:inline-flex;flex:1}.md3-text-field__field{cursor:text;flex:1}.md3-text-field--disabled .md3-text-field__field{cursor:default}.md3-text-field__counter{white-space:nowrap}.md3-text-field__icon{display:flex}.md3-text-field__icon ::slotted(*){display:flex}.md3-text-field__icon--leading{color:var(--_leading-icon-color)}.md3-text-field__icon--trailing{color:var(--_trailing-icon-color)}:hover .md3-text-field__icon--leading{color:var(--_hover-leading-icon-color)}:hover .md3-text-field__icon--trailing{color:var(--_hover-trailing-icon-color)}:focus-within .md3-text-field__icon--leading{color:var(--_focus-leading-icon-color)}:focus-within .md3-text-field__icon--trailing{color:var(--_focus-trailing-icon-color)}.md3-text-field--disabled .md3-text-field__icon--leading{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}.md3-text-field--disabled .md3-text-field__icon--trailing{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}.md3-text-field--error:not(.md3-text-field--disabled) .md3-text-field__icon--leading{color:var(--_error-leading-icon-color)}.md3-text-field--error:not(.md3-text-field--disabled) .md3-text-field__icon--trailing{color:var(--_error-trailing-icon-color)}.md3-text-field--error:not(.md3-text-field--disabled):hover .md3-text-field__icon--leading{color:var(--_error-hover-leading-icon-color)}.md3-text-field--error:not(.md3-text-field--disabled):hover .md3-text-field__icon--trailing{color:var(--_error-hover-trailing-icon-color)}.md3-text-field--error:not(.md3-text-field--disabled):focus-within .md3-text-field__icon--leading{color:var(--_error-focus-leading-icon-color)}.md3-text-field--error:not(.md3-text-field--disabled):focus-within .md3-text-field__icon--trailing{color:var(--_error-focus-trailing-icon-color)}.md3-text-field__input{appearance:none;background:none;border:none;caret-color:var(--_caret-color);color:currentColor;outline:none;padding:0;text-align:inherit;width:100%}.md3-text-field__input::placeholder{color:currentColor;opacity:1}.md3-text-field__input::-webkit-calendar-picker-indicator{display:none}@media(forced-colors: active){.md3-text-field__input{background-color:Field}}:focus-within .md3-text-field__input{caret-color:var(--_focus-caret-color)}.md3-text-field--error:focus-within .md3-text-field__input{caret-color:var(--_error-focus-caret-color)}.md3-text-field__input,.md3-text-field__prefix,.md3-text-field__suffix{font-family:var(--_input-text-font);font-size:var(--_input-text-size);font-weight:var(--_input-text-weight);letter-spacing:var(--_input-text-tracking);line-height:var(--_input-text-line-height)}.md3-text-field:not(.md3-text-field--disabled) .md3-text-field__prefix,.md3-text-field:not(.md3-text-field--disabled) .md3-text-field__suffix{color:var(--_input-text-prefix-color)}.md3-text-field:not(.md3-text-field--disabled) .md3-text-field__input::placeholder{color:var(--_input-text-placeholder-color)}.md3-text-field__prefix{padding-inline-end:var(--_input-text-prefix-padding)}.md3-text-field__suffix{padding-inline-start:var(--_input-text-suffix-padding)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=o=>void 0===o.strings,f={},s=(o,l=f)=>o._$AH=l;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$2(class extends i$2{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===x||t$1===b)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return x}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return x}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return x;return s(i),t$1}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * class MyInput extends LitElement {
 *   render() {
 *     return html`<input @change=${this.redispatchEvent}>`;
 *   }
 *
 *   protected redispatchEvent(event: Event) {
 *     redispatchEvent(this, event);
 *   }
 * }
 *
 * @param element The element to dispatch the event from.
 * @param event The event to re-dispatch.
 * @return Whether or not the event was dispatched (if cancelable).
 */
function redispatchEvent(element, event) {
    // For bubbling events in SSR light DOM (or composed), stop their propagation
    // and dispatch the copy.
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
        event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
        event.preventDefault();
    }
    return dispatched;
}
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
    const event = new MouseEvent('click', { bubbles: true });
    element.dispatchEvent(event);
    return event;
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
    // Event must start at the event target.
    if (event.composedPath()[0] !== event.target) {
        return false;
    }
    // Target must not be disabled; this should only occur for a synthetically
    // dispatched click.
    if (event.target.disabled) {
        return false;
    }
    // This is an activation if the event should not be squelched.
    return !squelchEvent(event);
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
}
// Ignore events for one microtask only.
let isSquelchingEvents = false;
async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    // Need to pause for just one microtask.
    // tslint:disable-next-line
    await null;
    isSquelchingEvents = false;
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function bound(target, propertyKey, methodDescriptor) {
    const descriptor = methodDescriptor || {
        configurable: true,
        enumerable: true,
        writable: true,
    };
    const memoizedBoundValues = new WeakMap();
    let get;
    let set;
    if (descriptor.get || descriptor.writable) {
        get = function () {
            const self = this; // Needed for closure conformance
            if (descriptor.get) {
                // Separate variables needed for closure conformance
                const getter = descriptor.get;
                const value = getter.call(self);
                return value.bind(self);
            }
            if (!memoizedBoundValues.has(self)) {
                const bound = (descriptor.value || self[propertyKey])?.bind(self);
                memoizedBoundValues.set(self, bound);
                return bound;
            }
            return memoizedBoundValues.get(self);
        };
    }
    if (descriptor.set || descriptor.writable) {
        set = function (value) {
            const self = this; // Needed for closure conformance
            value = value.bind(self);
            if (descriptor.set) {
                descriptor.set.call(self, value);
            }
            memoizedBoundValues.set(self, value);
        };
    }
    return {
        get,
        set,
        configurable: descriptor.configurable,
        enumerable: descriptor.enumerable,
    };
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns true if the element is a form associated custom element (FACE).
 */
function isFormAssociated(element) {
    return element.constructor.formAssociated;
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO Label activation shim is currently only needed for Safari. Remove it
// when no longer needed, see b/261871554.
/**
 * Returns true if labeling is supported for form associated custom elemeents.
 * Chrome and Firefox currently do and Safari support appears to be in progress,
 * see https://bugs.webkit.org/show_bug.cgi?id=197960.
 */
const SUPPORTS_FACE_LABEL = 'labels' in (globalThis?.ElementInternals?.prototype ?? {});
function isCustomElement(element) {
    return element.localName.match('-');
}
// Elements that can be associated with a <label> element include <button>,
// <input> (except for type="hidden"), <meter>, <output>, <progress>, <select>
// and <textarea>.
const implicitLabelReactive = new Set(['button', 'input', 'meter', 'progress', 'output', 'select', 'textarea']);
function isLabelReactive(element) {
    return implicitLabelReactive.has(element.localName) ||
        isFormAssociated(element);
}
/**
 * Provides a shim for labeling form associated custom elements via clicks
 * on label elements. Note, this is currently needed only in Safari and
 * support appears to be in progress, see
 * https://bugs.webkit.org/show_bug.cgi?id=197960.
 */
function shimLabelSupport(root) {
    // Listen for clicks on root to find clicks on label elements
    root.addEventListener('click', labelActivationListener);
}
function labelActivationListener(event) {
    // Find label on which user clicked.
    const path = event.composedPath();
    const root = event.currentTarget;
    let label = undefined;
    for (let i = 0; i < path.length; i++) {
        const target = path[i];
        // Not element or not in scope.
        if (target.nodeType !== Node.ELEMENT_NODE ||
            target.getRootNode() !== root) {
            continue;
        }
        // If the click is on a label reactive element, this is not a label click.
        if (isLabelReactive(target)) {
            return;
        }
        if (target.localName === 'label') {
            label = target;
        }
    }
    if (label === undefined) {
        return;
    }
    // Find associated element to activate.
    const forId = label.getAttribute('for');
    const target = forId ?
        root.getElementById(forId) :
        Array.from(label.querySelectorAll('*'))
            .find((el) => isCustomElement(el) && isFormAssociated(el));
    if (target == null) {
        return;
    }
    // Simulate FACE by issuing a click on the associated element.
    const simulatedClick = new PointerEvent('click', { composed: true, bubbles: true });
    target.dispatchEvent(simulatedClick);
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique symbol key for `FormController` elements to implement their
 * `getFormValue()` function.
 */
const getFormValue = Symbol('getFormValue');
/**
 * A `ReactiveController` that adds `<form>` support to an element.
 *
 * Elements should also set `static formAssociated = true` which
 * provides platform support for forms. When an element is form associated,
 * it can be activated via clicks on associated label elements. It is the
 * responsibility of the element to process this click and perform any necessary
 * activation tasks, for example focusing and clicking on an internal element.
 *
 */
class FormController {
    /**
     * Creates a new `FormController` for the given element.
     *
     * @param element The element to add `<form>` support to.
     */
    constructor(element) {
        this.element = element;
    }
    hostConnected() {
        // If the component internals are not in Shadow DOM, subscribing to form
        // data events could lead to duplicated data, which may not work correctly
        // on the server side.
        if (!this.element.shadowRoot || window.ShadyDOM?.inUse) {
            return;
        }
        // Preserve a reference to the form, since on hostDisconnected it may be
        // null if the child was removed.
        this.form = this.element.form;
        this.form?.addEventListener('formdata', this.formDataListener);
        // TODO(b/261871554) Label activation shim is currently only needed for
        // Safari. Remove it when no longer needed.
        if (isFormAssociated(this.element) && !SUPPORTS_FACE_LABEL) {
            shimLabelSupport(this.element.getRootNode());
        }
    }
    hostDisconnected() {
        this.form?.removeEventListener('formdata', this.formDataListener);
    }
    formDataListener(event) {
        if (this.element.disabled) {
            // Check for truthiness since some elements may not support disabling.
            return;
        }
        const value = this.element[getFormValue]();
        // If given a `FormData` instance, append all values to the form. This
        // allows elements to customize what is added beyond a single name/value
        // pair.
        if (value instanceof FormData) {
            for (const [key, dataValue] of value) {
                event.formData.append(key, dataValue);
            }
            return;
        }
        // Do not associate the value with the form if there is no value or no name.
        if (value === null || !this.element.name) {
            return;
        }
        event.formData.append(this.element.name, value);
    }
}
__decorate([
    bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FormDataEvent]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "formDataListener", null);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const stringConverter = {
    fromAttribute(value) {
        return value ?? '';
    },
    toAttribute(value) {
        return value || null;
    }
};

/**
 * @requirecss {textfield.lib.shared_styles}
 *
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class TextField extends s$2 {
    constructor() {
        super();
        this.disabled = false;
        /**
         * Gets or sets whether or not the text field is in a visually invalid state.
         *
         * Calling `reportValidity()` will automatically update `error`.
         */
        this.error = false;
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * Calling `reportValidity()` will automatically update `errorText` to the
         * native `validationMessage`.
         */
        this.errorText = '';
        this.required = false;
        /**
         * The current value of the text field. It is always a string.
         *
         * This is equal to `defaultValue` before user input.
         */
        this.value = '';
        /**
         * The default value of the text field. Before user input, changing the
         * default value will update `value` as well.
         *
         * When the text field is reset, its `value` will be set to this default
         * value.
         */
        this.defaultValue = '';
        /**
         * An optional prefix to display before the input value.
         */
        this.prefixText = '';
        /**
         * An optional suffix to display after the input value.
         */
        this.suffixText = '';
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false;
        /**
         * Whether or not the text field has a trailing icon. Used for SSR.
         */
        this.hasTrailingIcon = false;
        /**
         * Conveys additional information below the text field, such as how it should
         * be used.
         */
        this.supportingText = '';
        /**
         * Override the input text CSS `direction`. Useful for RTL languages that use
         * LTR notation for fractions.
         */
        this.textDirection = '';
        // ARIA
        // TODO(b/210730484): replace with @soyParam annotation
        this.ariaAutoComplete = null;
        this.ariaControls = null;
        this.ariaActiveDescendant = null;
        this.ariaExpanded = null;
        // tslint:disable:decorator-placement
        // @ts-ignore(b/264292293): Use `override` with TS 4.9+
        this.role = null;
        this.name = '';
        // <input> properties
        /**
         * Defines the greatest value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
         */
        this.max = '';
        /**
         * The maximum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        this.maxLength = -1;
        /**
         * Defines the most negative value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
         */
        this.min = '';
        /**
         * The minimum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        this.minLength = -1;
        /**
         * A regular expression that the text field's value must match to pass
         * constraint validation.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        this.pattern = '';
        this.placeholder = '';
        /**
         * Indicates whether or not a user should be able to edit the text field's
         * value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
         */
        this.readOnly = false;
        /**
         * Returns or sets the element's step attribute, which works with min and max
         * to limit the increments at which a numeric or date-time value can be set.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
         */
        this.step = '';
        // TODO(b/237284412): replace with exported types
        this.type = 'text';
        /**
         * Returns true when the text field has been interacted with. Native
         * validation errors only display in response to user interactions.
         */
        this.dirty = false;
        this.focused = false;
        /**
         * When set to true, the error text's `role="alert"` will be removed, then
         * re-added after an animation frame. This will re-announce an error message
         * to screen readers.
         */
        this.refreshErrorAlert = false;
        /**
         * Returns true when the text field's `value` property has been changed from
         * it's initial value.
         *
         * Setting `value` should always overwrite `defaultValue`, even when `value`
         * is an empty string. This flag ensures that behavior.
         */
        this.valueHasChanged = false;
        /**
         * Whether or not to ignore the next `value` change when computing
         * `valueHasChanged`.
         */
        this.ignoreNextValueChange = false;
        /**
         * Whether or not a native error has been reported via `reportValidity()`.
         */
        this.nativeError = false;
        /**
         * The validation message displayed from a native error via
         * `reportValidity()`.
         */
        this.nativeErrorText = '';
        /** @soyUniqueAttribute */
        this.counterId = 'counter';
        /** @soyUniqueAttribute */
        this.supportingTextId = 'support';
        this.addController(new FormController(this));
        // TODO(b/244574653): replace this.handleClick with this.focus
        this.addEventListener('click', this.handleClick);
        this.addEventListener('focusin', this.handleFocusin);
        this.addEventListener('focusout', this.handleFocusout);
    }
    // tslint:enable:decorator-placement
    // FormElement
    get form() {
        return this.closest('form');
    }
    [getFormValue]() {
        return this.value;
    }
    /**
     * Gets or sets the direction in which selection occurred.
     */
    get selectionDirection() {
        return this.getInput().selectionDirection;
    }
    set selectionDirection(value) {
        this.getInput().selectionDirection = value;
    }
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    get selectionEnd() {
        return this.getInput().selectionEnd;
    }
    set selectionEnd(value) {
        this.getInput().selectionEnd = value;
    }
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    get selectionStart() {
        return this.getInput().selectionStart;
    }
    set selectionStart(value) {
        this.getInput().selectionStart = value;
    }
    /**
     * Returns the native validation error message that would be displayed upon
     * calling `reportValidity()`.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
     */
    get validationMessage() {
        return this.getInput().validationMessage;
    }
    /**
     * Returns a ValidityState object that represents the validity states of the
     * text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    get validity() {
        return this.getInput().validity;
    }
    /**
     * The text field's value as a number.
     */
    get valueAsNumber() {
        return this.getInput().valueAsNumber;
    }
    set valueAsNumber(value) {
        this.getInput().valueAsNumber = value;
        this.value = this.getInput().value;
    }
    /**
     * The text field's value as a Date.
     */
    get valueAsDate() {
        return this.getInput().valueAsDate;
    }
    set valueAsDate(value) {
        this.getInput().valueAsDate = value;
        this.value = this.getInput().value;
    }
    /**
     * Returns whether an element will successfully validate based on forms
     * validation rules and constraints.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/willValidate
     */
    get willValidate() {
        return this.getInput().willValidate;
    }
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    checkValidity() {
        const { valid } = this.checkValidityAndDispatch();
        return valid;
    }
    /**
     * Focuses the text field's input text.
     */
    focus() {
        if (this.disabled || this.matches(':focus-within')) {
            // Don't shift focus from an element within the text field, like an icon
            // button, to the input when focus is requested.
            return;
        }
        // TODO(b/210731759): replace with super.focus() once SSR supports
        // delegating focus
        this.getInput().focus();
    }
    /**
     * Unfocuses the text field.
     */
    blur() {
        this.getInput().blur();
    }
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * This method will display or clear an error text message equal to the text
     * field's `validationMessage`, unless the invalid event is canceled.
     *
     * Use `setCustomValidity()` to customize the `validationMessage`.
     *
     * This method can also be used to re-announce error messages to screen
     * readers.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    reportValidity() {
        const { valid, canceled } = this.checkValidityAndDispatch();
        if (!canceled) {
            const prevMessage = this.getErrorText();
            this.nativeError = !valid;
            this.nativeErrorText = this.validationMessage;
            const needsRefresh = this.shouldErrorAnnounce() && prevMessage === this.getErrorText();
            if (needsRefresh) {
                this.refreshErrorAlert = true;
            }
        }
        return valid;
    }
    /**
     * Selects all the text in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
     */
    select() {
        this.getInput().select();
    }
    /**
     * Sets the text field's native validation error message. This is used to
     * customize `validationMessage`.
     *
     * When the error is not an empty string, the text field is considered invalid
     * and `validity.customError` will be true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     *
     * @param error The error message to display.
     */
    setCustomValidity(error) {
        this.getInput().setCustomValidity(error);
    }
    setRangeText(...args) {
        // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
        // Use spread syntax and type casting to ensure correct usage.
        this.getInput().setRangeText(...args);
        this.value = this.getInput().value;
    }
    /**
     * Sets the start and end positions of a selection in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
     *
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start, end, direction) {
        this.getInput().setSelectionRange(start, end, direction);
    }
    /**
     * Decrements the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
     *
     * @param stepDecrement The number of steps to decrement, defaults to 1.
     */
    stepDown(stepDecrement) {
        const input = this.getInput();
        input.stepDown(stepDecrement);
        this.value = input.value;
    }
    /**
     * Increments the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
     *
     * @param stepIncrement The number of steps to increment, defaults to 1.
     */
    stepUp(stepIncrement) {
        const input = this.getInput();
        input.stepUp(stepIncrement);
        this.value = input.value;
    }
    /**
     * Reset the text field to its default value.
     */
    reset() {
        this.dirty = false;
        this.valueHasChanged = false;
        this.ignoreNextValueChange = true;
        this.value = this.defaultValue;
        this.nativeError = false;
        this.nativeErrorText = '';
    }
    /** @soyTemplate */
    render() {
        return y `
       <span class="md3-text-field ${o(this.getRenderClasses())}">
         ${this.renderField()}
       </span>
     `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-text-field--disabled': this.disabled,
            'md3-text-field--error': this.getError(),
        };
    }
    /** @soyTemplate */
    getError() {
        return this.error || this.nativeError;
    }
    /** @soyTemplate */
    renderField() {
        const prefix = this.renderPrefix();
        const suffix = this.renderSuffix();
        const input = this.renderInput();
        const inputValue = this.getInputValue();
        return n$1 `<${this.fieldTag}
      class="md3-text-field__field"
      ?disabled=${this.disabled}
      ?error=${this.getError()}
      ?focused=${this.focused}
      ?hasEnd=${this.hasTrailingIcon}
      ?hasStart=${this.hasLeadingIcon}
      .label=${this.label}
      ?populated=${!!inputValue}
      ?required=${this.required}
    >
      ${this.renderLeadingIcon()}
      ${prefix}${input}${suffix}
      ${this.renderTrailingIcon()}
      ${this.renderSupportingText()}
      ${this.renderCounter()}
    </${this.fieldTag}>`;
    }
    /**
     * @soyTemplate
     * @slotName start
     */
    renderLeadingIcon() {
        return y `
       <span class="md3-text-field__icon md3-text-field__icon--leading"
           slot="start">
         <slot name="leadingicon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
    }
    /**
     * @soyTemplate
     * @slotName end
     */
    renderTrailingIcon() {
        return y `
       <span class="md3-text-field__icon md3-text-field__icon--trailing"
           slot="end">
         <slot name="trailingicon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
    }
    /** @soyTemplate */
    renderInput() {
        // TODO(b/237283903): remove when custom isTruthy directive is supported
        const placeholderValue = this.placeholder || undefined;
        const ariaActiveDescendantValue = this.ariaActiveDescendant || undefined;
        const ariaAutoCompleteValue = this.ariaAutoComplete || undefined;
        const ariaControlsValue = this.ariaControls || undefined;
        const ariaDescribedByValue = this.getAriaDescribedBy() || undefined;
        const ariaExpandedValue = this.ariaExpanded || undefined;
        const ariaLabelValue = this.ariaLabel || this.label || undefined;
        const ariaLabelledByValue = this.ariaLabelledBy || undefined;
        const maxValue = this.max || undefined;
        const maxLengthValue = this.maxLength > -1 ? this.maxLength : undefined;
        const minValue = this.min || undefined;
        const minLengthValue = this.minLength > -1 ? this.minLength : undefined;
        const patternValue = this.pattern || undefined;
        const roleValue = this.role || undefined;
        const stepValue = this.step || undefined;
        /** @styleMap */
        const style = { direction: this.textDirection };
        // TODO(b/243805848): remove `as unknown as number` once lit analyzer is
        // fixed
        return y `<input
       class="md3-text-field__input"
       style=${i$1(style)}
       aria-activedescendant=${l$2(ariaActiveDescendantValue)}
       aria-autocomplete=${l$2(ariaAutoCompleteValue)}
       aria-controls=${l$2(ariaControlsValue)}
       aria-describedby=${l$2(ariaDescribedByValue)}
       aria-expanded=${l$2(ariaExpandedValue)}
       aria-invalid=${this.getError()}
       aria-label=${l$2(ariaLabelValue)}
       aria-labelledby=${l$2(ariaLabelledByValue)}
       ?disabled=${this.disabled}
       max=${l$2(maxValue)}
       maxlength=${l$2(maxLengthValue)}
       min=${l$2(minValue)}
       minlength=${l$2(minLengthValue)}
       pattern=${l$2(patternValue)}
       placeholder=${l$2(placeholderValue)}
       role=${l$2(roleValue)}
       ?readonly=${this.readOnly}
       ?required=${this.required}
       step=${l$2(stepValue)}
       type=${this.type}
       .value=${l(this.getInputValue())}
       @change=${this.redispatchEvent}
       @input=${this.handleInput}
       @select=${this.redispatchEvent}
     >`;
    }
    /** @soyTemplate */
    getInputValue() {
        const alwaysShowValue = this.dirty || this.valueHasChanged;
        return alwaysShowValue ? this.value : this.defaultValue || this.value;
    }
    /** @soyTemplate */
    getAriaDescribedBy() {
        const hasSupport = !!this.getSupportingText();
        const hasCounter = this.hasCounter();
        // TODO(b/244609052): remove parens
        return (hasSupport || hasCounter) ?
            `${hasSupport ? this.supportingTextId : ''} ${hasCounter ? this.counterId : ''}` :
            '';
    }
    /** @soyTemplate */
    renderPrefix() {
        return this.prefixText ?
            y `<span class="md3-text-field__prefix">${this.prefixText}</span>` :
            y ``;
        // TODO(b/217441842): Create shared function once argument bug is fixed
        // return this.renderAffix(/* isSuffix */ false);
    }
    /** @soyTemplate */
    renderSuffix() {
        return this.suffixText ?
            y `<span class="md3-text-field__suffix">${this.suffixText}</span>` :
            y ``;
        // TODO(b/217441842): Create shared function once argument bug is fixed
        // return this.renderAffix(/* isSuffix */ true);
    }
    /**
     * @soyTemplate
     * @slotName supporting-text
     */
    renderSupportingText() {
        const shouldAlert = this.shouldErrorAnnounce();
        const text = this.getSupportingText();
        const template = y `<span id=${this.supportingTextId} 
      slot="supporting-text" 
      role=${l$2(shouldAlert ? 'alert' : undefined)}>${text}</span>`;
        return text ? template : y ``;
    }
    /** @soyTemplate */
    getSupportingText() {
        const errorText = this.getErrorText();
        return this.getError() && errorText ? errorText : this.supportingText;
    }
    /** @soyTemplate */
    getErrorText() {
        return this.error ? this.errorText : this.nativeErrorText;
    }
    /** @soyTemplate */
    shouldErrorAnnounce() {
        // Announce if there is an error and error text visible.
        // If refreshErrorAlert is true, do not announce. This will remove the
        // role="alert" attribute. Another render cycle will happen after an
        // animation frame to re-add the role.
        return this.getError() && !!this.getErrorText() && !this.refreshErrorAlert;
    }
    /**
     * @soyTemplate
     * @slotName supporting-text-end
     */
    renderCounter() {
        const counter = y `<span id=${this.counterId}
       class="md3-text-field__counter"
       slot="supporting-text-end">${this.getCounterText()}</span>`;
        // TODO(b/244473435): add aria-label and announcements
        return this.hasCounter() ? counter : y ``;
    }
    // TODO(b/244197198): replace with !!this.getCounterText()
    /** @soyTemplate */
    hasCounter() {
        return this.maxLength > -1;
    }
    /** @soyTemplate */
    getCounterText() {
        // TODO(b/244197198): replace with string return
        const length = this.value.length;
        return this.hasCounter() ? y `${length} / ${this.maxLength}` : y ``;
    }
    update(changedProperties) {
        // Consider a value change anything that is not the initial empty string
        // value.
        const valueHasChanged = changedProperties.has('value') &&
            changedProperties.get('value') !== undefined;
        if (valueHasChanged && !this.ignoreNextValueChange) {
            this.valueHasChanged = true;
        }
        if (this.ignoreNextValueChange) {
            this.ignoreNextValueChange = false;
        }
        super.update(changedProperties);
    }
    updated(changedProperties) {
        // If a property such as `type` changes and causes the internal <input>
        // value to change without dispatching an event, re-sync it.
        const value = this.getInput().value;
        if (this.value !== value) {
            // Don't consider these updates (such as setting `defaultValue`) as
            // the developer directly changing the `value`.
            this.ignoreNextValueChange = true;
            // Note this is typically inefficient in updated() since it schedules
            // another update. However, it is needed for the <input> to fully render
            // before checking its value.
            this.value = value;
        }
        if (this.refreshErrorAlert) {
            // The past render cycle removed the role="alert" from the error message.
            // Re-add it after an animation frame to re-announce the error.
            requestAnimationFrame(() => {
                this.refreshErrorAlert = false;
            });
        }
    }
    /** @bubbleWizEvent */
    handleClick() {
        this.focus();
    }
    /** @bubbleWizEvent */
    handleFocusin(event) {
        this.focused = true;
    }
    /** @bubbleWizEvent */
    handleFocusout(event) {
        if (this.matches(':focus-within')) {
            // Changing focus to another child within the text field, like a button
            return;
        }
        this.focused = false;
    }
    handleInput(event) {
        this.dirty = true;
        this.value = event.target.value;
        this.redispatchEvent(event);
    }
    redispatchEvent(event) {
        redispatchEvent(this, event);
    }
    getInput() {
        if (!this.input) {
            // If the input is not yet defined, synchronously render.
            // e.g.
            // const textField = document.createElement('md-outlined-text-field');
            // document.body.appendChild(textField);
            // textField.focus(); // synchronously render
            this.connectedCallback();
            this.scheduleUpdate();
        }
        if (this.isUpdatePending) {
            // If there are pending updates, synchronously perform them. This ensures
            // that constraint validation properties (like `required`) are synced
            // before interacting with input APIs that depend on them.
            this.scheduleUpdate();
        }
        return this.input;
    }
    checkValidityAndDispatch() {
        const valid = this.getInput().checkValidity();
        let canceled = false;
        if (!valid) {
            canceled = !this.dispatchEvent(new Event('invalid', { cancelable: true }));
        }
        return { valid, canceled };
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0;
        this.hasTrailingIcon = this.trailingIcons.length > 0;
    }
}
TextField.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], TextField.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], TextField.prototype, "error", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "errorText", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], TextField.prototype, "label", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], TextField.prototype, "required", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "value", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "defaultValue", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "prefixText", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "suffixText", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], TextField.prototype, "hasLeadingIcon", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], TextField.prototype, "hasTrailingIcon", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "supportingText", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "textDirection", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-autocomplete', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "ariaAutoComplete", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-controls', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "ariaControls", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-activedescendant', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "ariaActiveDescendant", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-expanded', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "ariaExpanded", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "ariaLabel", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-labelledby', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-role', noAccessor: true }),
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    __metadata("design:type", String)
], TextField.prototype, "role", void 0);
__decorate([
    e$6({ type: String, reflect: true, converter: stringConverter }),
    __metadata("design:type", Object)
], TextField.prototype, "name", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "max", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Object)
], TextField.prototype, "maxLength", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "min", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Object)
], TextField.prototype, "minLength", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "pattern", void 0);
__decorate([
    e$6({ type: String, reflect: true, converter: stringConverter }),
    __metadata("design:type", Object)
], TextField.prototype, "placeholder", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], TextField.prototype, "readOnly", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], TextField.prototype, "step", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", String)
], TextField.prototype, "type", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], TextField.prototype, "dirty", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], TextField.prototype, "focused", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], TextField.prototype, "refreshErrorAlert", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], TextField.prototype, "valueHasChanged", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], TextField.prototype, "nativeError", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], TextField.prototype, "nativeErrorText", void 0);
__decorate([
    i$3('.md3-text-field__input'),
    __metadata("design:type", HTMLInputElement)
], TextField.prototype, "input", void 0);
__decorate([
    l$3({ slot: 'leadingicon' }),
    __metadata("design:type", Array)
], TextField.prototype, "leadingIcons", void 0);
__decorate([
    l$3({ slot: 'trailingicon' }),
    __metadata("design:type", Array)
], TextField.prototype, "trailingIcons", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class Autocomplete extends TextField {
    constructor() {
        super(...arguments);
        this.role = 'combobox';
        this.ariaAutoComplete = 'list';
        /**
         * The ID on the list element, used for SSR.
         */
        this.listId = 'autocomplete-list';
        /**
         * The ID prefix for the item elements, used for SSR.
         */
        this.itemIdPrefix = 'autocomplete-item';
        this.value = '';
        this.selectedItem = null;
    }
    /** @soyTemplate */
    render() {
        return y `<div class="md3-autocomplete ${o(this.getAutocompleteRenderClasses())}"
            @click=${this.handleClicked}
            @focusout=${this.handleFocusout}
            @action=${this.handleAction}
            @input=${this.handleInput}
            @keydown=${this.handleKeydown}
            @keyup=${this.handleKeyup}>
            ${super.render()}
            ${this.renderMenuSurface()}</div>`;
    }
    /** @soyTemplate */
    getAutocompleteRenderClasses() {
        return {};
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('selectedItem')) {
            this.updateSelectedItem();
            this.ariaActiveDescendant = this.selectedItem?.itemId ?? null;
        }
        if (changedProperties.has('value')) {
            this.dispatchEvent(new CustomEvent('autocomplete-value-changed', { detail: { value: this.value }, bubbles: true, composed: true }));
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.menuSurface.anchor = this;
    }
    /** @soyTemplate */
    renderMenuSurface() {
        return n$1 `<${this.menuSurfaceTag}
      class="md3-autocomplete__menu-surface">
      <${this.listTag} class="md3-autocomplete__list">
        <slot></slot>
      </${this.listTag}>
    </${this.menuSurfaceTag}>`;
    }
    isOpen() {
        return this.menuSurface?.open || false;
    }
    open() {
        this.menuSurface?.show();
        this.ariaExpanded = 'true';
    }
    close() {
        this.menuSurface?.close();
        this.selectedItem = null;
        this.ariaExpanded = 'false';
    }
    handleClicked(event) {
        // When clicking the list (not items nor text field) the menu should stay
        // open.
        if (this.isOpen() &&
            event.target?.parentNode !== this.menuSurface) {
            this.close();
        }
        else {
            this.open();
        }
    }
    handleFocusout() {
        if (this.matches(':focus-within')) {
            this.getInput().focus();
            return;
        }
        this.close();
        this.focused = false;
    }
    handleAction(event) {
        const detail = event.detail;
        this.value = detail.item.headline;
    }
    handleKeydown(event) {
        let bubble = true;
        const altKey = event.altKey;
        switch (event.key) {
            case 'Enter':
                if (this.selectedItem) {
                    this.value = this.selectedItem.headline;
                }
                this.close();
                bubble = false;
                break;
            case 'ArrowDown':
                if (!this.slottedItems)
                    return;
                if (this.slottedItems.length) {
                    if (this.selectedItem) {
                        this.selectedItem = this.getNextItem();
                    }
                    else {
                        this.open();
                        if (!altKey) {
                            this.selectedItem = this.slottedItems[0];
                        }
                    }
                }
                bubble = false;
                break;
            case 'ArrowUp':
                if (!this.slottedItems)
                    return;
                if (this.slottedItems.length) {
                    if (this.selectedItem) {
                        this.selectedItem = this.getPreviousItem();
                    }
                    else {
                        this.open();
                        if (!altKey) {
                            this.selectedItem =
                                this.slottedItems[this.slottedItems.length - 1];
                        }
                    }
                }
                bubble = false;
                break;
            case 'Escape':
                if (this.isOpen()) {
                    this.close();
                }
                else {
                    this.value = '';
                }
                this.selectedItem = null;
                bubble = false;
                break;
            case 'Tab':
                if (this.selectedItem) {
                    this.value = this.selectedItem.headline;
                }
                this.close();
                break;
            case 'Home':
                this.setSelectionRange(0, 0);
                this.selectedItem = null;
                bubble = false;
                break;
            case 'End':
                this.setSelectionRange(this.value.length, this.value.length);
                this.selectedItem = null;
                bubble = false;
                break;
        }
        if (bubble)
            return;
        event.stopPropagation();
        event.preventDefault();
    }
    handleKeyup(event) {
        let bubble = true;
        switch (event.key) {
            case 'Backspace':
            case 'ArrowLeft':
            case 'ArrowRight':
                this.selectedItem = null;
                bubble = false;
                break;
        }
        if (bubble)
            return;
        event.stopPropagation();
        event.preventDefault();
    }
    /**
     * When selectedItem is updated, item prefixes and aria-selected status will
     * be updated along with scrolling the selected item into view, if needed.
     */
    updateSelectedItem() {
        if (!this.slottedItems)
            return;
        this.slottedItems.forEach((item, index) => {
            item.itemId = `${this.itemIdPrefix}-${index}`;
            if (this.selectedItem && item === this.selectedItem && this.list) {
                item.ariaSelected = 'true';
                item.showFocusRing = true;
                // Scroll into view
                if (this.list.scrollTop + this.list.offsetHeight <
                    item.offsetTop + item.offsetHeight) {
                    this.list.scrollTop =
                        item.offsetTop + item.offsetHeight - this.list.offsetHeight;
                }
                else if (this.list.scrollTop > item.offsetTop + 2) {
                    this.list.scrollTop = item.offsetTop;
                }
            }
            else {
                item.ariaSelected = 'false';
                item.showFocusRing = false;
            }
        });
    }
    getPreviousItem() {
        if (!this.slottedItems)
            return null;
        const index = this.selectedItem ? this.slottedItems.indexOf(this.selectedItem) : 0;
        const length = this.slottedItems.length;
        return this.slottedItems[(index - 1 + length) % length];
    }
    getNextItem() {
        if (!this.slottedItems)
            return null;
        const index = this.selectedItem ? this.slottedItems.indexOf(this.selectedItem) : 0;
        const length = this.slottedItems.length;
        return this.slottedItems[(index + 1) % length];
    }
}
Autocomplete.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Autocomplete.prototype, "listId", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Autocomplete.prototype, "itemIdPrefix", void 0);
__decorate([
    i$3('.md3-autocomplete__menu-surface'),
    __metadata("design:type", AutocompleteSurface)
], Autocomplete.prototype, "menuSurface", void 0);
__decorate([
    i$3('.md3-autocomplete__list'),
    __metadata("design:type", AutocompleteList)
], Autocomplete.prototype, "list", void 0);
__decorate([
    l$3({ flatten: true }),
    __metadata("design:type", Array)
], Autocomplete.prototype, "slottedItems", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Autocomplete.prototype, "value", void 0);
__decorate([
    t$1(),
    __metadata("design:type", AutocompleteItem)
], Autocomplete.prototype, "selectedItem", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$H = i$6 `:host{--_text-field-container-shape-start-start: var(--md-filled-autocomplete-text-field-container-shape-start-start, 4px);--_text-field-container-shape-start-end: var(--md-filled-autocomplete-text-field-container-shape-start-end, 4px);--_text-field-container-shape-end-end: var(--md-filled-autocomplete-text-field-container-shape-end-end, 0px);--_text-field-container-shape-end-start: var(--md-filled-autocomplete-text-field-container-shape-end-start, 0px);--_menu-cascading-menu-indicator-icon-color: var(--md-filled-autocomplete-menu-cascading-menu-indicator-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_menu-cascading-menu-indicator-icon-size: var(--md-filled-autocomplete-menu-cascading-menu-indicator-icon-size, 24px);--_menu-container-color: var(--md-filled-autocomplete-menu-container-color, var(--md-sys-color-surface, #fffbfe));--_menu-container-elevation: var(--md-filled-autocomplete-menu-container-elevation, 2);--_menu-container-shadow-color: var(--md-filled-autocomplete-menu-container-shadow-color, var(--md-sys-color-shadow, #000));--_menu-container-shape: var(--md-filled-autocomplete-menu-container-shape, 4px);--_menu-container-surface-tint-layer-color: var(--md-filled-autocomplete-menu-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_menu-divider-color: var(--md-filled-autocomplete-menu-divider-color, var(--md-sys-color-surface-variant, #e7e0ec));--_menu-divider-height: var(--md-filled-autocomplete-menu-divider-height, 1px);--_menu-list-item-container-height: var(--md-filled-autocomplete-menu-list-item-container-height, 48px);--_menu-list-item-label-text-color: var(--md-filled-autocomplete-menu-list-item-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_menu-list-item-label-text-font: var(--md-filled-autocomplete-menu-list-item-label-text-font, Roboto);--_menu-list-item-label-text-line-height: var(--md-filled-autocomplete-menu-list-item-label-text-line-height, 1.25rem);--_menu-list-item-label-text-size: var(--md-filled-autocomplete-menu-list-item-label-text-size, 0.875rem);--_menu-list-item-label-text-tracking: var(--md-filled-autocomplete-menu-list-item-label-text-tracking, 0.006rem);--_menu-list-item-label-text-type: var(--md-filled-autocomplete-menu-list-item-label-text-type, 500 0.875rem / 1.25rem Roboto);--_menu-list-item-label-text-weight: var(--md-filled-autocomplete-menu-list-item-label-text-weight, 500);--_menu-list-item-selected-container-color: var(--md-filled-autocomplete-menu-list-item-selected-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_text-field-active-indicator-color: var(--md-filled-autocomplete-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-autocomplete-text-field-active-indicator-height, 1px);--_text-field-caret-color: var(--md-filled-autocomplete-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_text-field-container-color: var(--md-filled-autocomplete-text-field-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_text-field-container-height: var(--md-filled-autocomplete-text-field-container-height, 56px);--_text-field-disabled-active-indicator-color: var(--md-filled-autocomplete-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-active-indicator-height: var(--md-filled-autocomplete-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-autocomplete-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-autocomplete-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-container-opacity: var(--md-filled-autocomplete-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-autocomplete-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-input-text-opacity: var(--md-filled-autocomplete-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-autocomplete-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-label-text-opacity: var(--md-filled-autocomplete-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-autocomplete-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-leading-icon-opacity: var(--md-filled-autocomplete-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-autocomplete-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-supporting-text-opacity: var(--md-filled-autocomplete-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-autocomplete-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-autocomplete-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-autocomplete-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-autocomplete-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-caret-color: var(--md-filled-autocomplete-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-autocomplete-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-focus-label-text-color: var(--md-filled-autocomplete-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-autocomplete-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-autocomplete-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-autocomplete-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-autocomplete-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-autocomplete-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-hover-label-text-color: var(--md-filled-autocomplete-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-autocomplete-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-autocomplete-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-hover-state-layer-opacity: var(--md-filled-autocomplete-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-autocomplete-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-autocomplete-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-autocomplete-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-label-text-color: var(--md-filled-autocomplete-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-autocomplete-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-autocomplete-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-autocomplete-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-autocomplete-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-autocomplete-text-field-focus-active-indicator-height, 2px);--_text-field-focus-input-text-color: var(--md-filled-autocomplete-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-focus-label-text-color: var(--md-filled-autocomplete-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-autocomplete-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-autocomplete-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-autocomplete-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-active-indicator-color: var(--md-filled-autocomplete-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-hover-active-indicator-height: var(--md-filled-autocomplete-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-autocomplete-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-hover-label-text-color: var(--md-filled-autocomplete-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-leading-icon-color: var(--md-filled-autocomplete-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-autocomplete-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-hover-state-layer-opacity: var(--md-filled-autocomplete-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-autocomplete-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-autocomplete-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-autocomplete-text-field-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-input-text-font: var(--md-filled-autocomplete-text-field-input-text-font, Roboto);--_text-field-input-text-line-height: var(--md-filled-autocomplete-text-field-input-text-line-height, 1.5rem);--_text-field-input-text-size: var(--md-filled-autocomplete-text-field-input-text-size, 1rem);--_text-field-input-text-tracking: var(--md-filled-autocomplete-text-field-input-text-tracking, 0.031rem);--_text-field-input-text-type: var(--md-filled-autocomplete-text-field-input-text-type, 400 1rem / 1.5rem Roboto);--_text-field-input-text-weight: var(--md-filled-autocomplete-text-field-input-text-weight, 400);--_text-field-label-text-color: var(--md-filled-autocomplete-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-autocomplete-text-field-label-text-font, Roboto);--_text-field-label-text-line-height: var(--md-filled-autocomplete-text-field-label-text-line-height, 1.5rem);--_text-field-label-text-populated-line-height: var(--md-filled-autocomplete-text-field-label-text-populated-line-height, 1rem);--_text-field-label-text-populated-size: var(--md-filled-autocomplete-text-field-label-text-populated-size, 0.75rem);--_text-field-label-text-size: var(--md-filled-autocomplete-text-field-label-text-size, 1rem);--_text-field-label-text-tracking: var(--md-filled-autocomplete-text-field-label-text-tracking, 0.031rem);--_text-field-label-text-type: var(--md-filled-autocomplete-text-field-label-text-type, 400 1rem / 1.5rem Roboto);--_text-field-label-text-weight: var(--md-filled-autocomplete-text-field-label-text-weight, 400);--_text-field-leading-icon-color: var(--md-filled-autocomplete-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-autocomplete-text-field-leading-icon-size, 20px);--_text-field-supporting-text-color: var(--md-filled-autocomplete-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-autocomplete-text-field-supporting-text-font, Roboto);--_text-field-supporting-text-line-height: var(--md-filled-autocomplete-text-field-supporting-text-line-height, 1rem);--_text-field-supporting-text-size: var(--md-filled-autocomplete-text-field-supporting-text-size, 0.75rem);--_text-field-supporting-text-tracking: var(--md-filled-autocomplete-text-field-supporting-text-tracking, 0.025rem);--_text-field-supporting-text-type: var(--md-filled-autocomplete-text-field-supporting-text-type, 400 0.75rem / 1rem Roboto);--_text-field-supporting-text-weight: var(--md-filled-autocomplete-text-field-supporting-text-weight, 400);--_text-field-trailing-icon-color: var(--md-filled-autocomplete-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-autocomplete-text-field-trailing-icon-size, 24px)}.md3-text-field{--md-filled-text-field-active-indicator-color:var(--_text-field-active-indicator-color);--md-filled-text-field-active-indicator-height:var(--_text-field-active-indicator-height);--md-filled-text-field-caret-color:var(--_text-field-caret-color);--md-filled-text-field-container-color:var(--_text-field-container-color);--md-filled-text-field-container-height:var(--_text-field-container-height);--md-filled-text-field-disabled-active-indicator-color:var(--_text-field-disabled-active-indicator-color);--md-filled-text-field-disabled-active-indicator-height:var(--_text-field-disabled-active-indicator-height);--md-filled-text-field-disabled-active-indicator-opacity:var(--_text-field-disabled-active-indicator-opacity);--md-filled-text-field-disabled-container-color:var(--_text-field-disabled-container-color);--md-filled-text-field-disabled-container-opacity:var(--_text-field-disabled-container-opacity);--md-filled-text-field-disabled-input-text-color:var(--_text-field-disabled-input-text-color);--md-filled-text-field-disabled-input-text-opacity:var(--_text-field-disabled-input-text-opacity);--md-filled-text-field-disabled-label-text-color:var(--_text-field-disabled-label-text-color);--md-filled-text-field-disabled-label-text-opacity:var(--_text-field-disabled-label-text-opacity);--md-filled-text-field-disabled-leading-icon-color:var(--_text-field-disabled-leading-icon-color);--md-filled-text-field-disabled-leading-icon-opacity:var(--_text-field-disabled-leading-icon-opacity);--md-filled-text-field-disabled-supporting-text-color:var(--_text-field-disabled-supporting-text-color);--md-filled-text-field-disabled-supporting-text-opacity:var(--_text-field-disabled-supporting-text-opacity);--md-filled-text-field-disabled-trailing-icon-color:var(--_text-field-disabled-trailing-icon-color);--md-filled-text-field-disabled-trailing-icon-opacity:var(--_text-field-disabled-trailing-icon-opacity);--md-filled-text-field-error-active-indicator-color:var(--_text-field-error-active-indicator-color);--md-filled-text-field-error-focus-active-indicator-color:var(--_text-field-error-focus-active-indicator-color);--md-filled-text-field-error-focus-caret-color:var(--_text-field-error-focus-caret-color);--md-filled-text-field-error-focus-input-text-color:var(--_text-field-error-focus-input-text-color);--md-filled-text-field-error-focus-label-text-color:var(--_text-field-error-focus-label-text-color);--md-filled-text-field-error-focus-leading-icon-color:var(--_text-field-error-focus-leading-icon-color);--md-filled-text-field-error-focus-supporting-text-color:var(--_text-field-error-focus-supporting-text-color);--md-filled-text-field-error-focus-trailing-icon-color:var(--_text-field-error-focus-trailing-icon-color);--md-filled-text-field-error-hover-active-indicator-color:var(--_text-field-error-hover-active-indicator-color);--md-filled-text-field-error-hover-input-text-color:var(--_text-field-error-hover-input-text-color);--md-filled-text-field-error-hover-label-text-color:var(--_text-field-error-hover-label-text-color);--md-filled-text-field-error-hover-leading-icon-color:var(--_text-field-error-hover-leading-icon-color);--md-filled-text-field-error-hover-state-layer-color:var(--_text-field-error-hover-state-layer-color);--md-filled-text-field-error-hover-state-layer-opacity:var(--_text-field-error-hover-state-layer-opacity);--md-filled-text-field-error-hover-supporting-text-color:var(--_text-field-error-hover-supporting-text-color);--md-filled-text-field-error-hover-trailing-icon-color:var(--_text-field-error-hover-trailing-icon-color);--md-filled-text-field-error-input-text-color:var(--_text-field-error-input-text-color);--md-filled-text-field-error-label-text-color:var(--_text-field-error-label-text-color);--md-filled-text-field-error-leading-icon-color:var(--_text-field-error-leading-icon-color);--md-filled-text-field-error-supporting-text-color:var(--_text-field-error-supporting-text-color);--md-filled-text-field-error-trailing-icon-color:var(--_text-field-error-trailing-icon-color);--md-filled-text-field-focus-active-indicator-color:var(--_text-field-focus-active-indicator-color);--md-filled-text-field-focus-active-indicator-height:var(--_text-field-focus-active-indicator-height);--md-filled-text-field-focus-input-text-color:var(--_text-field-focus-input-text-color);--md-filled-text-field-focus-label-text-color:var(--_text-field-focus-label-text-color);--md-filled-text-field-focus-leading-icon-color:var(--_text-field-focus-leading-icon-color);--md-filled-text-field-focus-supporting-text-color:var(--_text-field-focus-supporting-text-color);--md-filled-text-field-focus-trailing-icon-color:var(--_text-field-focus-trailing-icon-color);--md-filled-text-field-hover-active-indicator-color:var(--_text-field-hover-active-indicator-color);--md-filled-text-field-hover-active-indicator-height:var(--_text-field-hover-active-indicator-height);--md-filled-text-field-hover-input-text-color:var(--_text-field-hover-input-text-color);--md-filled-text-field-hover-label-text-color:var(--_text-field-hover-label-text-color);--md-filled-text-field-hover-leading-icon-color:var(--_text-field-hover-leading-icon-color);--md-filled-text-field-hover-state-layer-color:var(--_text-field-hover-state-layer-color);--md-filled-text-field-hover-state-layer-opacity:var(--_text-field-hover-state-layer-opacity);--md-filled-text-field-hover-supporting-text-color:var(--_text-field-hover-supporting-text-color);--md-filled-text-field-hover-trailing-icon-color:var(--_text-field-hover-trailing-icon-color);--md-filled-text-field-input-text-color:var(--_text-field-input-text-color);--md-filled-text-field-input-text-font:var(--_text-field-input-text-font);--md-filled-text-field-input-text-line-height:var(--_text-field-input-text-line-height);--md-filled-text-field-input-text-size:var(--_text-field-input-text-size);--md-filled-text-field-input-text-tracking:var(--_text-field-input-text-tracking);--md-filled-text-field-input-text-type:var(--_text-field-input-text-type);--md-filled-text-field-input-text-weight:var(--_text-field-input-text-weight);--md-filled-text-field-label-text-color:var(--_text-field-label-text-color);--md-filled-text-field-label-text-font:var(--_text-field-label-text-font);--md-filled-text-field-label-text-line-height:var(--_text-field-label-text-line-height);--md-filled-text-field-label-text-populated-line-height:var(--_text-field-label-text-populated-line-height);--md-filled-text-field-label-text-populated-size:var(--_text-field-label-text-populated-size);--md-filled-text-field-label-text-size:var(--_text-field-label-text-size);--md-filled-text-field-label-text-tracking:var(--_text-field-label-text-tracking);--md-filled-text-field-label-text-type:var(--_text-field-label-text-type);--md-filled-text-field-label-text-weight:var(--_text-field-label-text-weight);--md-filled-text-field-leading-icon-color:var(--_text-field-leading-icon-color);--md-filled-text-field-leading-icon-size:var(--_text-field-leading-icon-size);--md-filled-text-field-supporting-text-color:var(--_text-field-supporting-text-color);--md-filled-text-field-supporting-text-font:var(--_text-field-supporting-text-font);--md-filled-text-field-supporting-text-line-height:var(--_text-field-supporting-text-line-height);--md-filled-text-field-supporting-text-size:var(--_text-field-supporting-text-size);--md-filled-text-field-supporting-text-tracking:var(--_text-field-supporting-text-tracking);--md-filled-text-field-supporting-text-weight:var(--_text-field-supporting-text-weight);--md-filled-text-field-trailing-icon-color:var(--_text-field-trailing-icon-color);--md-filled-text-field-trailing-icon-size:var(--_text-field-trailing-icon-size);--md-filled-field-container-shape-start-start:var(--_text-field-container-shape-start-start);--md-filled-field-container-shape-start-end:var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-end-end:var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start:var(--_text-field-container-shape-end-start)}.md3-autocomplete__menu-surface{--md-menu-surface-container-elevation:var(--_menu-container-elevation);--md-menu-surface-container-shape:var(--_menu-container-shape);--md-menu-surface-container-shadow-color:var(--_menu-container-shadow-color);--md-list-container-color:var(--_menu-container-color);--md-list-container-surface-tint-layer-color:var(--_menu-container-surface-tint-layer-color);--md-list-container-elevation:var(--_menu-container-elevation);--md-list-list-item-container-color:var(--_menu-container-color);--md-list-list-item-one-line-container-height:var(--_menu-list-item-container-height);--md-list-list-item-label-text-color:var(--_menu-list-item-label-text-color);--md-list-list-item-label-text-font:var(--_menu-list-item-label-text-font);--md-list-list-item-label-text-line-height:var(--_menu-list-item-label-text-line-height);--md-list-list-item-label-text-size:var(--_menu-list-item-label-text-size);--md-list-list-item-label-text-tracking:var(--_menu-list-item-label-text-tracking);--md-list-list-item-label-text-weight:var(--_menu-list-item-label-text-weight)}.md3-autocomplete ::slotted([data-aria-selected=true]){--md-list-list-item-container-color:var(--_menu-list-item-selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$G = i$6 `.md3-autocomplete{display:inline-flex;flex:1}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFilledAutocomplete = class MdFilledAutocomplete extends Autocomplete {
    constructor() {
        super(...arguments);
        this.listTag = i `md-autocomplete-list`;
        this.menuSurfaceTag = i `md-autocomplete-surface`;
        this.fieldTag = i `md-filled-field`;
    }
    /** @soyTemplate */
    getAutocompleteRenderClasses() {
        return {
            ...super.getAutocompleteRenderClasses(),
            'md3-autocomplete--filled': true,
        };
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-text-field--filled': true,
        };
    }
};
MdFilledAutocomplete.styles = [
    styles$I, styles$J, styles$K,
    styles$G, styles$H
];
MdFilledAutocomplete = __decorate([
    e$7('md-filled-autocomplete')
], MdFilledAutocomplete);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class OutlinedField extends Field {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-field--outlined': true,
        };
    }
    /** @soyTemplate */
    renderContainerContents() {
        return y `
      ${this.renderOutline()}
      ${super.renderContainerContents()}
    `;
    }
    /** @soyTemplate */
    renderOutline() {
        return y `
      <span class="md3-field__outline">
        <span class="md3-field__outline-start"></span>
        <span class="md3-field__outline-notch">
          <span class="md3-field__outline-panel-inactive"></span>
          <span class="md3-field__outline-panel-active"></span>
          ${this.renderFloatingLabel()}
        </span>
        <span class="md3-field__outline-end"></span>
      </span>
    `;
    }
    /** @soyTemplate */
    renderMiddleContents() {
        return y `
      ${this.renderRestingLabel()}
      ${super.renderMiddleContents()}
    `;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$F = i$6 `:host{--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, 4px);--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, 4px);--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, 4px);--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, 4px);--_container-height: var(--md-outlined-field-container-height, 56px);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-leading-icon-opacity: var(--md-outlined-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-trailing-icon-opacity: var(--md-outlined-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 2px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-leading-icon-color: var(--md-outlined-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, Roboto);--_label-text-line-height: var(--md-outlined-field-label-text-line-height, 1.5rem);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, 0.75rem);--_label-text-size: var(--md-outlined-field-label-text-size, 1rem);--_label-text-tracking: var(--md-outlined-field-label-text-tracking, 0.031rem);--_label-text-weight: var(--md-outlined-field-label-text-weight, 400);--_leading-icon-color: var(--md-outlined-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, Roboto);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, 1rem);--_supporting-text-size: var(--md-outlined-field-supporting-text-size, 0.75rem);--_supporting-text-tracking: var(--md-outlined-field-supporting-text-tracking, 0.025rem);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, 400);--_trailing-icon-color: var(--md-outlined-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-field-trailing-icon-size, 24px);--_container-padding-horizontal: var(--md-outlined-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-outlined-field-container-padding-vertical, 8px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1c1b1f));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_supporting-text-padding: var(--md-outlined-field-supporting-text-padding, 16px);--_supporting-text-padding-top: var(--md-outlined-field-supporting-text-padding-top, 4px);--_label-text-populated-font: ;--_label-text-populated-tracking: ;--_label-text-populated-weight: }.md3-field__outline{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);border-color:var(--_outline-color);color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%}.md3-field__outline-start::before,.md3-field__outline-start::after,.md3-field__outline-panel-inactive::before,.md3-field__outline-panel-inactive::after,.md3-field__outline-panel-active::before,.md3-field__outline-panel-active::after,.md3-field__outline-end::before,.md3-field__outline-end::after{border:inherit;content:"";inset:0;position:absolute}.md3-field__outline-start,.md3-field__outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.md3-field__outline-start::before,.md3-field__outline-start::after,.md3-field__outline-end::before,.md3-field__outline-end::after{border-bottom-style:solid;border-top-style:solid}.md3-field__outline-start::after,.md3-field__outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-field--focused .md3-field__outline-start::after,.md3-field--focused .md3-field__outline-end::after{opacity:1}.md3-field__outline-start::before,.md3-field__outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.md3-field__outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.md3-field__outline-end::before,.md3-field__outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.md3-field__outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - 2*var(--_container-padding-horizontal));padding:0 var(--_outline-label-padding);position:relative}.md3-field--no-label .md3-field__outline-notch{display:none}.md3-field__outline-panel-inactive,.md3-field__outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.md3-field__outline-panel-inactive::before,.md3-field__outline-panel-inactive::after,.md3-field__outline-panel-active::before,.md3-field__outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-field__outline-panel-inactive::before,.md3-field__outline-panel-active::before{right:50%;transform-origin:top left}.md3-field__outline-panel-inactive::after,.md3-field__outline-panel-active::after{left:50%;transform-origin:top right}.md3-field--populated .md3-field__outline-panel-inactive::before,.md3-field--populated .md3-field__outline-panel-inactive::after,.md3-field--focused .md3-field__outline-panel-inactive::before,.md3-field--focused .md3-field__outline-panel-inactive::after,.md3-field--populated .md3-field__outline-panel-active::before,.md3-field--populated .md3-field__outline-panel-active::after,.md3-field--focused .md3-field__outline-panel-active::before,.md3-field--focused .md3-field__outline-panel-active::after{transform:scaleX(0)}.md3-field__outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-field--focused .md3-field__outline-panel-active{opacity:1}.md3-field__label--floating{transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.md3-field__outline-start,.md3-field:not(.md3-field--with-start) .md3-field__start{padding-inline-start:max(var(--_container-padding-horizontal),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.md3-field:not(.md3-field--with-end) .md3-field__end{padding-inline-end:max(var(--_container-padding-horizontal),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.md3-field__outline-start::before,.md3-field__outline-end::before,.md3-field__outline-panel-inactive,.md3-field__outline-panel-inactive::before,.md3-field__outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .md3-field__outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .md3-field__outline-start::before,:hover .md3-field__outline-end::before,:hover .md3-field__outline-panel-inactive,:hover .md3-field__outline-panel-inactive::before,:hover .md3-field__outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.md3-field--focused .md3-field__outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.md3-field__outline-start::after,.md3-field__outline-end::after,.md3-field__outline-panel-active,.md3-field__outline-panel-active::before,.md3-field__outline-panel-active::after{border-width:var(--_focus-outline-width)}.md3-field--disabled .md3-field__outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.md3-field--disabled .md3-field__outline-start,.md3-field--disabled .md3-field__outline-end,.md3-field--disabled .md3-field__outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.md3-field--disabled .md3-field__outline-start::before,.md3-field--disabled .md3-field__outline-end::before,.md3-field--disabled .md3-field__outline-panel-inactive,.md3-field--disabled .md3-field__outline-panel-inactive::before,.md3-field--disabled .md3-field__outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.md3-field--error:not(.md3-field--disabled) .md3-field__outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.md3-field--error:not(.md3-field--disabled):hover .md3-field__outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.md3-field--error:not(.md3-field--disabled).md3-field--focused .md3-field__outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedField = class MdOutlinedField extends OutlinedField {
};
MdOutlinedField.styles = [styles$N, styles$F];
MdOutlinedField = __decorate([
    e$7('md-outlined-field')
], MdOutlinedField);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$E = i$6 `@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color:GrayText;--md-outlined-text-field-disabled-input-text-opacity:1;--md-outlined-text-field-disabled-label-text-color:GrayText;--md-outlined-text-field-disabled-label-text-opacity:1;--md-outlined-text-field-disabled-leading-icon-color:GrayText;--md-outlined-text-field-disabled-leading-icon-opacity:1;--md-outlined-text-field-disabled-outline-color:GrayText;--md-outlined-text-field-disabled-outline-opacity:1;--md-outlined-text-field-disabled-supporting-text-color:GrayText;--md-outlined-text-field-disabled-supporting-text-opacity:1;--md-outlined-text-field-disabled-trailing-icon-color:GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity:1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$D = i$6 `:host{--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, 4px);--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, 4px);--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, 4px);--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, 4px);--_container-padding-horizontal: var(--md-outlined-text-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-outlined-text-field-container-padding-vertical, 8px);--_input-text-prefix-padding: var(--md-outlined-text-field-input-text-prefix-padding, 2px);--_input-text-suffix-padding: var(--md-outlined-text-field-input-text-suffix-padding, 2px);--_outline-label-padding: var(--md-outlined-text-field-outline-label-padding, 4px);--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-outlined-text-field-container-height, 56px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 2px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_input-text-font: var(--md-outlined-text-field-input-text-font, Roboto);--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, 1.5rem);--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, 1rem);--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-tracking: var(--md-outlined-text-field-input-text-tracking, 0.031rem);--_input-text-type: var(--md-outlined-text-field-input-text-type, 400 1rem / 1.5rem Roboto);--_input-text-weight: var(--md-outlined-text-field-input-text-weight, 400);--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, Roboto);--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, 1.5rem);--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, 0.75rem);--_label-text-size: var(--md-outlined-text-field-label-text-size, 1rem);--_label-text-tracking: var(--md-outlined-text-field-label-text-tracking, 0.031rem);--_label-text-type: var(--md-outlined-text-field-label-text-type, 400 1rem / 1.5rem Roboto);--_label-text-weight: var(--md-outlined-text-field-label-text-weight, 400);--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, Roboto);--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, 1rem);--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, 0.75rem);--_supporting-text-tracking: var(--md-outlined-text-field-supporting-text-tracking, 0.025rem);--_supporting-text-type: var(--md-outlined-text-field-supporting-text-type, 400 0.75rem / 1rem Roboto);--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, 400);--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--md-outlined-field-container-shape-start-start:var(--_container-shape-start-start);--md-outlined-field-container-shape-start-end:var(--_container-shape-start-end);--md-outlined-field-container-shape-end-end:var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start:var(--_container-shape-end-start);--md-outlined-field-container-height:var(--_container-height);--md-outlined-field-disabled-content-color:var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity:var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color:var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity:var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-icon-color:var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-icon-opacity:var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color:var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity:var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width:var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color:var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity:var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-icon-color:var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-icon-opacity:var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-focus-content-color:var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color:var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-icon-color:var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color:var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color:var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-icon-color:var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color:var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color:var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-icon-color:var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color:var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color:var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-icon-color:var(--_error-hover-trailing-icon-color);--md-outlined-field-error-content-color:var(--_error-input-text-color);--md-outlined-field-error-label-text-color:var(--_error-label-text-color);--md-outlined-field-error-leading-icon-color:var(--_error-leading-icon-color);--md-outlined-field-error-outline-color:var(--_error-outline-color);--md-outlined-field-error-supporting-text-color:var(--_error-supporting-text-color);--md-outlined-field-error-trailing-icon-color:var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color:var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color:var(--_focus-label-text-color);--md-outlined-field-focus-leading-icon-color:var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color:var(--_focus-outline-color);--md-outlined-field-focus-outline-width:var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color:var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-icon-color:var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color:var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color:var(--_hover-label-text-color);--md-outlined-field-hover-leading-icon-color:var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color:var(--_hover-outline-color);--md-outlined-field-hover-outline-width:var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color:var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-icon-color:var(--_hover-trailing-icon-color);--md-outlined-field-content-color:var(--_input-text-color);--md-outlined-field-label-text-color:var(--_label-text-color);--md-outlined-field-label-text-font:var(--_label-text-font);--md-outlined-field-label-text-line-height:var(--_label-text-line-height);--md-outlined-field-label-text-padding-bottom:var(--_label-text-padding-bottom);--md-outlined-field-label-text-populated-line-height:var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size:var(--_label-text-populated-size);--md-outlined-field-label-text-size:var(--_label-text-size);--md-outlined-field-label-text-tracking:var(--_label-text-tracking);--md-outlined-field-label-text-weight:var(--_label-text-weight);--md-outlined-field-leading-icon-color:var(--_leading-icon-color);--md-outlined-field-leading-icon-size:var(--_leading-icon-size);--md-outlined-field-outline-color:var(--_outline-color);--md-outlined-field-outline-width:var(--_outline-width);--md-outlined-field-supporting-text-color:var(--_supporting-text-color);--md-outlined-field-supporting-text-font:var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height:var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size:var(--_supporting-text-size);--md-outlined-field-supporting-text-tracking:var(--_supporting-text-tracking);--md-outlined-field-supporting-text-weight:var(--_supporting-text-weight);--md-outlined-field-trailing-icon-color:var(--_trailing-icon-color);--md-outlined-field-trailing-icon-size:var(--_trailing-icon-size)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$C = i$6 `:host{--_text-field-container-shape-start-start: var(--md-outlined-autocomplete-text-field-container-shape-start-start, 4px);--_text-field-container-shape-start-end: var(--md-outlined-autocomplete-text-field-container-shape-start-end, 4px);--_text-field-container-shape-end-end: var(--md-outlined-autocomplete-text-field-container-shape-end-end, 4px);--_text-field-container-shape-end-start: var(--md-outlined-autocomplete-text-field-container-shape-end-start, 4px);--_menu-cascading-menu-indicator-icon-color: var(--md-outlined-autocomplete-menu-cascading-menu-indicator-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_menu-cascading-menu-indicator-icon-size: var(--md-outlined-autocomplete-menu-cascading-menu-indicator-icon-size, 24px);--_menu-container-color: var(--md-outlined-autocomplete-menu-container-color, var(--md-sys-color-surface, #fffbfe));--_menu-container-elevation: var(--md-outlined-autocomplete-menu-container-elevation, 2);--_menu-container-shadow-color: var(--md-outlined-autocomplete-menu-container-shadow-color, var(--md-sys-color-shadow, #000));--_menu-container-shape: var(--md-outlined-autocomplete-menu-container-shape, 4px);--_menu-container-surface-tint-layer-color: var(--md-outlined-autocomplete-menu-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_menu-divider-color: var(--md-outlined-autocomplete-menu-divider-color, var(--md-sys-color-surface-variant, #e7e0ec));--_menu-divider-height: var(--md-outlined-autocomplete-menu-divider-height, 1px);--_menu-list-item-container-height: var(--md-outlined-autocomplete-menu-list-item-container-height, 48px);--_menu-list-item-label-text-color: var(--md-outlined-autocomplete-menu-list-item-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_menu-list-item-label-text-font: var(--md-outlined-autocomplete-menu-list-item-label-text-font, Roboto);--_menu-list-item-label-text-line-height: var(--md-outlined-autocomplete-menu-list-item-label-text-line-height, 1.25rem);--_menu-list-item-label-text-size: var(--md-outlined-autocomplete-menu-list-item-label-text-size, 0.875rem);--_menu-list-item-label-text-tracking: var(--md-outlined-autocomplete-menu-list-item-label-text-tracking, 0.006rem);--_menu-list-item-label-text-type: var(--md-outlined-autocomplete-menu-list-item-label-text-type, 500 0.875rem / 1.25rem Roboto);--_menu-list-item-label-text-weight: var(--md-outlined-autocomplete-menu-list-item-label-text-weight, 500);--_menu-list-item-selected-container-color: var(--md-outlined-autocomplete-menu-list-item-selected-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_text-field-caret-color: var(--md-outlined-autocomplete-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_text-field-container-color: var(--md-outlined-autocomplete-text-field-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_text-field-container-height: var(--md-outlined-autocomplete-text-field-container-height, 56px);--_text-field-disabled-input-text-color: var(--md-outlined-autocomplete-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-input-text-opacity: var(--md-outlined-autocomplete-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-autocomplete-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-label-text-opacity: var(--md-outlined-autocomplete-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-autocomplete-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-autocomplete-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-autocomplete-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-outline-opacity: var(--md-outlined-autocomplete-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-autocomplete-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-autocomplete-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-autocomplete-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-autocomplete-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-autocomplete-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-caret-color: var(--md-outlined-autocomplete-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-outlined-autocomplete-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-focus-label-text-color: var(--md-outlined-autocomplete-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-autocomplete-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-autocomplete-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-autocomplete-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-autocomplete-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-autocomplete-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-hover-label-text-color: var(--md-outlined-autocomplete-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-autocomplete-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-autocomplete-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-state-layer-color: var(--md-outlined-autocomplete-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-hover-state-layer-opacity: var(--md-outlined-autocomplete-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-outlined-autocomplete-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-autocomplete-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-autocomplete-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-error-label-text-color: var(--md-outlined-autocomplete-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-autocomplete-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-autocomplete-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-autocomplete-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-autocomplete-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-autocomplete-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-focus-label-text-color: var(--md-outlined-autocomplete-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-autocomplete-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-autocomplete-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-autocomplete-text-field-focus-outline-width, 2px);--_text-field-focus-supporting-text-color: var(--md-outlined-autocomplete-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-autocomplete-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-input-text-color: var(--md-outlined-autocomplete-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-hover-label-text-color: var(--md-outlined-autocomplete-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-leading-icon-color: var(--md-outlined-autocomplete-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-autocomplete-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-hover-outline-width: var(--md-outlined-autocomplete-text-field-hover-outline-width, 1px);--_text-field-hover-state-layer-color: var(--md-outlined-autocomplete-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-hover-state-layer-opacity: var(--md-outlined-autocomplete-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-outlined-autocomplete-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-autocomplete-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-autocomplete-text-field-input-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_text-field-input-text-font: var(--md-outlined-autocomplete-text-field-input-text-font, Roboto);--_text-field-input-text-line-height: var(--md-outlined-autocomplete-text-field-input-text-line-height, 1.5rem);--_text-field-input-text-size: var(--md-outlined-autocomplete-text-field-input-text-size, 1rem);--_text-field-input-text-tracking: var(--md-outlined-autocomplete-text-field-input-text-tracking, 0.031rem);--_text-field-input-text-type: var(--md-outlined-autocomplete-text-field-input-text-type, 400 1rem / 1.5rem Roboto);--_text-field-input-text-weight: var(--md-outlined-autocomplete-text-field-input-text-weight, 400);--_text-field-label-text-color: var(--md-outlined-autocomplete-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-autocomplete-text-field-label-text-font, Roboto);--_text-field-label-text-line-height: var(--md-outlined-autocomplete-text-field-label-text-line-height, 1.5rem);--_text-field-label-text-populated-line-height: var(--md-outlined-autocomplete-text-field-label-text-populated-line-height, 1rem);--_text-field-label-text-populated-size: var(--md-outlined-autocomplete-text-field-label-text-populated-size, 0.75rem);--_text-field-label-text-size: var(--md-outlined-autocomplete-text-field-label-text-size, 1rem);--_text-field-label-text-tracking: var(--md-outlined-autocomplete-text-field-label-text-tracking, 0.031rem);--_text-field-label-text-type: var(--md-outlined-autocomplete-text-field-label-text-type, 400 1rem / 1.5rem Roboto);--_text-field-label-text-weight: var(--md-outlined-autocomplete-text-field-label-text-weight, 400);--_text-field-leading-icon-color: var(--md-outlined-autocomplete-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-autocomplete-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-autocomplete-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-autocomplete-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-autocomplete-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-autocomplete-text-field-supporting-text-font, Roboto);--_text-field-supporting-text-line-height: var(--md-outlined-autocomplete-text-field-supporting-text-line-height, 1rem);--_text-field-supporting-text-size: var(--md-outlined-autocomplete-text-field-supporting-text-size, 0.75rem);--_text-field-supporting-text-tracking: var(--md-outlined-autocomplete-text-field-supporting-text-tracking, 0.025rem);--_text-field-supporting-text-type: var(--md-outlined-autocomplete-text-field-supporting-text-type, 400 0.75rem / 1rem Roboto);--_text-field-supporting-text-weight: var(--md-outlined-autocomplete-text-field-supporting-text-weight, 400);--_text-field-trailing-icon-color: var(--md-outlined-autocomplete-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-autocomplete-text-field-trailing-icon-size, 24px);--_text-field-container-shape: var(--md-outlined-autocomplete-text-field-container-shape, 4px)}.md3-text-field{--md-outlined-text-field-caret-color:var(--_text-field-caret-color);--md-outlined-text-field-container-height:var(--_text-field-container-height);--md-outlined-text-field-disabled-input-text-color:var(--_text-field-disabled-input-text-color);--md-outlined-text-field-disabled-input-text-opacity:var(--_text-field-disabled-input-text-opacity);--md-outlined-text-field-disabled-label-text-color:var(--_text-field-disabled-label-text-color);--md-outlined-text-field-disabled-label-text-opacity:var(--_text-field-disabled-label-text-opacity);--md-outlined-text-field-disabled-leading-icon-color:var(--_text-field-disabled-leading-icon-color);--md-outlined-text-field-disabled-leading-icon-opacity:var(--_text-field-disabled-leading-icon-opacity);--md-outlined-text-field-disabled-outline-color:var(--_text-field-disabled-outline-color);--md-outlined-text-field-disabled-outline-opacity:var(--_text-field-disabled-outline-opacity);--md-outlined-text-field-disabled-outline-width:var(--_text-field-disabled-outline-width);--md-outlined-text-field-disabled-supporting-text-color:var(--_text-field-disabled-supporting-text-color);--md-outlined-text-field-disabled-supporting-text-opacity:var(--_text-field-disabled-supporting-text-opacity);--md-outlined-text-field-disabled-trailing-icon-color:var(--_text-field-disabled-trailing-icon-color);--md-outlined-text-field-disabled-trailing-icon-opacity:var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-text-field-error-focus-caret-color:var(--_text-field-error-focus-caret-color);--md-outlined-text-field-error-focus-input-text-color:var(--_text-field-error-focus-input-text-color);--md-outlined-text-field-error-focus-label-text-color:var(--_text-field-error-focus-label-text-color);--md-outlined-text-field-error-focus-leading-icon-color:var(--_text-field-error-focus-leading-icon-color);--md-outlined-text-field-error-focus-outline-color:var(--_text-field-error-focus-outline-color);--md-outlined-text-field-error-focus-supporting-text-color:var(--_text-field-error-focus-supporting-text-color);--md-outlined-text-field-error-focus-trailing-icon-color:var(--_text-field-error-focus-trailing-icon-color);--md-outlined-text-field-error-hover-input-text-color:var(--_text-field-error-hover-input-text-color);--md-outlined-text-field-error-hover-label-text-color:var(--_text-field-error-hover-label-text-color);--md-outlined-text-field-error-hover-leading-icon-color:var(--_text-field-error-hover-leading-icon-color);--md-outlined-text-field-error-hover-outline-color:var(--_text-field-error-hover-outline-color);--md-outlined-text-field-error-hover-supporting-text-color:var(--_text-field-error-hover-supporting-text-color);--md-outlined-text-field-error-hover-trailing-icon-color:var(--_text-field-error-hover-trailing-icon-color);--md-outlined-text-field-error-input-text-color:var(--_text-field-error-input-text-color);--md-outlined-text-field-error-label-text-color:var(--_text-field-error-label-text-color);--md-outlined-text-field-error-leading-icon-color:var(--_text-field-error-leading-icon-color);--md-outlined-text-field-error-outline-color:var(--_text-field-error-outline-color);--md-outlined-text-field-error-supporting-text-color:var(--_text-field-error-supporting-text-color);--md-outlined-text-field-error-trailing-icon-color:var(--_text-field-error-trailing-icon-color);--md-outlined-text-field-focus-input-text-color:var(--_text-field-focus-input-text-color);--md-outlined-text-field-focus-label-text-color:var(--_text-field-focus-label-text-color);--md-outlined-text-field-focus-leading-icon-color:var(--_text-field-focus-leading-icon-color);--md-outlined-text-field-focus-outline-color:var(--_text-field-focus-outline-color);--md-outlined-text-field-focus-outline-width:var(--_text-field-focus-outline-width);--md-outlined-text-field-focus-supporting-text-color:var(--_text-field-focus-supporting-text-color);--md-outlined-text-field-focus-trailing-icon-color:var(--_text-field-focus-trailing-icon-color);--md-outlined-text-field-hover-input-text-color:var(--_text-field-hover-input-text-color);--md-outlined-text-field-hover-label-text-color:var(--_text-field-hover-label-text-color);--md-outlined-text-field-hover-leading-icon-color:var(--_text-field-hover-leading-icon-color);--md-outlined-text-field-hover-outline-color:var(--_text-field-hover-outline-color);--md-outlined-text-field-hover-outline-width:var(--_text-field-hover-outline-width);--md-outlined-text-field-hover-supporting-text-color:var(--_text-field-hover-supporting-text-color);--md-outlined-text-field-hover-trailing-icon-color:var(--_text-field-hover-trailing-icon-color);--md-outlined-text-field-input-text-color:var(--_text-field-input-text-color);--md-outlined-text-field-input-text-font:var(--_text-field-input-text-font);--md-outlined-text-field-input-text-line-height:var(--_text-field-input-text-line-height);--md-outlined-text-field-input-text-size:var(--_text-field-input-text-size);--md-outlined-text-field-input-text-tracking:var(--_text-field-input-text-tracking);--md-outlined-text-field-input-text-type:var(--_text-field-input-text-type);--md-outlined-text-field-input-text-weight:var(--_text-field-input-text-weight);--md-outlined-text-field-label-text-color:var(--_text-field-label-text-color);--md-outlined-text-field-label-text-font:var(--_text-field-label-text-font);--md-outlined-text-field-label-text-line-height:var(--_text-field-label-text-line-height);--md-outlined-text-field-label-text-populated-line-height:var(--_text-field-label-text-populated-line-height);--md-outlined-text-field-label-text-populated-size:var(--_text-field-label-text-populated-size);--md-outlined-text-field-label-text-size:var(--_text-field-label-text-size);--md-outlined-text-field-label-text-tracking:var(--_text-field-label-text-tracking);--md-outlined-text-field-label-text-type:var(--_text-field-label-text-type);--md-outlined-text-field-label-text-weight:var(--_text-field-label-text-weight);--md-outlined-text-field-leading-icon-color:var(--_text-field-leading-icon-color);--md-outlined-text-field-leading-icon-size:var(--_text-field-leading-icon-size);--md-outlined-text-field-outline-color:var(--_text-field-outline-color);--md-outlined-text-field-outline-width:var(--_text-field-outline-width);--md-outlined-text-field-supporting-text-color:var(--_text-field-supporting-text-color);--md-outlined-text-field-supporting-text-font:var(--_text-field-supporting-text-font);--md-outlined-text-field-supporting-text-line-height:var(--_text-field-supporting-text-line-height);--md-outlined-text-field-supporting-text-size:var(--_text-field-supporting-text-size);--md-outlined-text-field-supporting-text-tracking:var(--_text-field-supporting-text-tracking);--md-outlined-text-field-supporting-text-weight:var(--_text-field-supporting-text-weight);--md-outlined-text-field-trailing-icon-color:var(--_text-field-trailing-icon-color);--md-outlined-text-field-trailing-icon-size:var(--_text-field-trailing-icon-size);--md-outlined-field-container-shape-start-start:var(--_text-field-container-shape-start-start);--md-outlined-field-container-shape-start-end:var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-end-end:var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start:var(--_text-field-container-shape-end-start)}.md3-autocomplete__menu-surface{--md-menu-surface-container-elevation:var(--_menu-container-elevation);--md-menu-surface-container-shape:var(--_menu-container-shape);--md-menu-surface-container-shadow-color:var(--_menu-container-shadow-color);--md-list-container-color:var(--_menu-container-color);--md-list-container-surface-tint-layer-color:var(--_menu-container-surface-tint-layer-color);--md-list-container-elevation:var(--_menu-container-elevation);--md-list-list-item-container-color:var(--_menu-container-color);--md-list-list-item-one-line-container-height:var(--_menu-list-item-container-height);--md-list-list-item-label-text-color:var(--_menu-list-item-label-text-color);--md-list-list-item-label-text-font:var(--_menu-list-item-label-text-font);--md-list-list-item-label-text-line-height:var(--_menu-list-item-label-text-line-height);--md-list-list-item-label-text-size:var(--_menu-list-item-label-text-size);--md-list-list-item-label-text-tracking:var(--_menu-list-item-label-text-tracking);--md-list-list-item-label-text-weight:var(--_menu-list-item-label-text-weight)}.md3-autocomplete ::slotted([data-aria-selected=true]){--md-list-list-item-container-color:var(--_menu-list-item-selected-container-color)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedAutocomplete = class MdOutlinedAutocomplete extends Autocomplete {
    constructor() {
        super(...arguments);
        this.listTag = i `md-autocomplete-list`;
        this.menuSurfaceTag = i `md-autocomplete-surface`;
        this.fieldTag = i `md-outlined-field`;
    }
    /** @soyTemplate */
    getAutocompleteRenderClasses() {
        return {
            ...super.getAutocompleteRenderClasses(),
            'md3-autocomplete--outlined': true,
        };
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-text-field--outlined': true,
        };
    }
};
MdOutlinedAutocomplete.styles = [
    styles$I, styles$D, styles$E,
    styles$G, styles$C
];
MdOutlinedAutocomplete = __decorate([
    e$7('md-outlined-autocomplete')
], MdOutlinedAutocomplete);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class Badge extends s$2 {
    constructor() {
        super(...arguments);
        this.value = '';
    }
    /** @soyTemplate */
    render() {
        return y `<div class="md3-badge ${o(this.getRenderClasses())}"><p class="md3-badge__value">${this.value}</p></div>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-badge--large': this.value,
        };
    }
}
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Badge.prototype, "value", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$B = i$6 `:host{--_color: var(--md-badge-color, var(--md-sys-color-error, #b3261e));--_large-color: var(--md-badge-large-color, var(--md-sys-color-error, #b3261e));--_large-label-text-color: var(--md-badge-large-label-text-color, var(--md-sys-color-on-error, #fff));--_large-label-text-font: var(--md-badge-large-label-text-font, Roboto);--_large-label-text-line-height: var(--md-badge-large-label-text-line-height, 1rem);--_large-label-text-size: var(--md-badge-large-label-text-size, 0.688rem);--_large-label-text-tracking: var(--md-badge-large-label-text-tracking, 0.031rem);--_large-label-text-weight: var(--md-badge-large-label-text-weight, 500);--_large-shape: var(--md-badge-large-shape, 9999px);--_large-size: var(--md-badge-large-size, 16px);--_shape: var(--md-badge-shape, 9999px);--_size: var(--md-badge-size, 6px)}.md3-badge{inset-inline-start:50%;margin-inline-start:6px;margin-block-start:4px;position:absolute;inset-block-start:0px;background-color:var(--_color);border-radius:var(--_shape);height:var(--_size)}.md3-badge:not(.md3-badge--large){width:var(--_size)}.md3-badge.md3-badge--large{display:flex;flex-direction:column;justify-content:center;margin-inline-start:2px;margin-block-start:1px;background-color:var(--_large-color);border-radius:var(--_large-shape);height:var(--_large-size);min-width:var(--_large-size);color:var(--_large-label-text-color)}.md3-badge.md3-badge--large .md3-badge__value{padding:0px 4px}.md3-badge__value{font-family:var(--_large-label-text-font);font-size:var(--_large-label-text-size);letter-spacing:var(--_large-label-text-tracking);line-height:var(--_large-label-text-line-height);font-weight:var(--_large-label-text-weight)}/*# sourceMappingURL=badge-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdBadge = class MdBadge extends Badge {
};
MdBadge.styles = [styles$B];
MdBadge = __decorate([
    e$7('md-badge')
], MdBadge);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$A = i$6 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-state-layer-color:var(--_hover-state-layer-color);--md-ripple-focus-state-layer-color:var(--_focus-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_pressed-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity);--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.md3-button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;block-size:var(--_container-height);font-family:var(--_label-text-font);font-size:var(--_label-text-size);letter-spacing:var(--_label-text-tracking);font-weight:var(--_label-text-weight);background-color:var(--_container-color);color:var(--_label-text-color);padding-inline-start:var(--_spacing-leading);padding-inline-end:var(--_spacing-trailing)}.md3-button::-moz-focus-inner{padding:0;border:0}.md3-button:hover{color:var(--_hover-label-text-color);cursor:pointer}.md3-button:focus{color:var(--_focus-label-text-color)}.md3-button:active{color:var(--_pressed-label-text-color);outline:none}.md3-button:disabled{background-color:var(--_disabled-container-color);color:var(--_disabled-label-text-color)}@media(forced-colors: active){.md3-button::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}}.md3-button,.md3-button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}md-elevation,.md3-button__ripple{z-index:-1}.md3-button--icon-leading{padding-inline-start:var(--_with-icon-spacing-leading);padding-inline-end:var(--_with-icon-spacing-trailing)}.md3-button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-spacing-leading);padding-inline-end:var(--_with-trailing-icon-spacing-trailing)}.md3-link-button-wrapper{inline-size:100%}.md3-button__icon-slot-container{display:inline-flex}.md3-button__icon-slot-container ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;color:var(--_with-icon-icon-color);font-size:var(--_with-icon-icon-size);inline-size:var(--_with-icon-icon-size);block-size:var(--_with-icon-icon-size)}.md3-button:hover .md3-button__icon-slot-container ::slotted([slot=icon]){color:var(--_with-icon-hover-icon-color)}.md3-button:focus .md3-button__icon-slot-container ::slotted([slot=icon]){color:var(--_with-icon-focus-icon-color)}.md3-button:active .md3-button__icon-slot-container ::slotted([slot=icon]){color:var(--_with-icon-pressed-icon-color)}.md3-button:disabled .md3-button__icon-slot-container ::slotted([slot=icon]){color:var(--_with-icon-disabled-icon-color)}.md3-button__icon--leading ::slotted([slot=icon]){margin-inline-end:8px}.md3-button__icon--trailing ::slotted([slot=icon]){margin-inline-start:8px}.md3-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n,o,r){return n?o():null==r?void 0:r()}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150;
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State;
(function (State) {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    State[State["INACTIVE"] = 0] = "INACTIVE";
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: beginPress(); transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `TOUCH_DELAY_MS`: beginPress(); transition to `HOLDING`.
     */
    State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    State[State["HOLDING"] = 2] = "HOLDING";
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click endPress(); transition to `INACTIVE`.
     */
    State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
class RippleDirective extends i$2 {
    constructor(partInfo) {
        super(partInfo);
        this.rippleGetter = async () => null;
        this.state = State.INACTIVE;
        this.checkBoundsAfterContextMenu = false;
        this.rippleStartEvent = null;
        this.touchTimer = null;
        this.clickTimer = null;
        if (partInfo.type !== t.ELEMENT) {
            throw new Error('The `ripple` directive must be used on an element');
        }
    }
    render(ripple) {
        return x;
    }
    // Use EventListenerObject::handleEvent interface to handle events without
    // generating bound event handlers
    async handleEvent(event) {
        const ripple = await this.rippleGetter();
        if (!ripple) {
            return;
        }
        switch (event.type) {
            case 'click':
                this.click(ripple);
                break;
            case 'contextmenu':
                this.contextMenu(ripple);
                break;
            case 'pointercancel':
                this.pointerCancel(ripple, event);
                break;
            case 'pointerdown':
                this.pointerDown(ripple, event);
                break;
            case 'pointerenter':
                this.pointerEnter(ripple, event);
                break;
            case 'pointerleave':
                this.pointerLeave(ripple, event);
                break;
            case 'pointerup':
                this.pointerUp(ripple, event);
                break;
        }
    }
    update(part, [ripple]) {
        if (!this.element) {
            // NOTE: addEventListener typing needs to be used with HTMLElements or a
            // subclass
            this.element = part.element;
            this.element.addEventListener('click', this);
            this.element.addEventListener('contextmenu', this);
            this.element.addEventListener('pointercancel', this);
            this.element.addEventListener('pointerdown', this);
            this.element.addEventListener('pointerenter', this);
            this.element.addEventListener('pointerleave', this);
            this.element.addEventListener('pointerup', this);
        }
        // Normalize given ripple accessor
        this.rippleGetter = typeof ripple === 'function' ? ripple : () => ripple;
        return x;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(ripple, ev, hovering = false) {
        const enabled = !ripple.disabled;
        const isPrimaryPointer = ev.isPrimary;
        const isInteractionPointer = this.rippleStartEvent === null ||
            this.rippleStartEvent.pointerId === ev.pointerId;
        const isPrimaryButton = ev.buttons === 1;
        return enabled && isPrimaryPointer && isInteractionPointer &&
            (this.isTouch(ev) || isPrimaryButton || hovering);
    }
    isTouch({ pointerType }) {
        return pointerType === 'touch';
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x, y }) {
        const { top, left, bottom, right } = this.element.getBoundingClientRect();
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    beginPress(ripple) {
        ripple.beginPress(this.rippleStartEvent);
    }
    endPress(ripple) {
        ripple.endPress();
        this.state = State.INACTIVE;
        this.rippleStartEvent = null;
        if (this.touchTimer) {
            clearTimeout(this.touchTimer);
            this.touchTimer = null;
        }
        if (this.clickTimer) {
            clearTimeout(this.clickTimer);
            this.clickTimer = null;
        }
    }
    waitForTouchHold() {
        if (this.touchTimer !== null) {
            clearTimeout(this.touchTimer);
        }
        this.state = State.TOUCH_DELAY;
        this.touchTimer = setTimeout(async () => {
            const ripple = await this.rippleGetter();
            if (ripple === null || this.state !== State.TOUCH_DELAY) {
                return;
            }
            this.state = State.HOLDING;
            this.beginPress(ripple);
        }, TOUCH_DELAY_MS);
    }
    click(ripple) {
        // Click is a MouseEvent in Firefox and Safari, so we cannot use
        // `shouldReactToEvent`
        if (ripple.disabled) {
            return;
        }
        if (this.state === State.WAITING_FOR_CLICK) {
            this.endPress(ripple);
        }
        else if (this.state === State.INACTIVE) {
            // keyboard synthesized click event
            this.beginPress(ripple);
            this.endPress(ripple);
        }
    }
    contextMenu(ripple) {
        if (!ripple.disabled) {
            this.checkBoundsAfterContextMenu = true;
            this.endPress(ripple);
        }
    }
    pointerDown(ripple, ev) {
        if (!this.shouldReactToEvent(ripple, ev)) {
            return;
        }
        this.rippleStartEvent = ev;
        if (this.isTouch(ev)) {
            // after a longpress contextmenu event, an extra `pointerdown` can be
            // dispatched to the pressed element. Check that the down is within
            // bounds of the element in this case.
            if (this.checkBoundsAfterContextMenu && !this.inBounds(ev)) {
                return;
            }
            this.checkBoundsAfterContextMenu = false;
            this.waitForTouchHold();
        }
        else {
            this.state = State.WAITING_FOR_CLICK;
            this.beginPress(ripple);
        }
    }
    pointerUp(ripple, ev) {
        if (!this.isTouch(ev) || !this.shouldReactToEvent(ripple, ev)) {
            return;
        }
        if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
        }
        else if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.beginPress(ripple);
        }
    }
    pointerCancel(ripple, ev) {
        if (this.shouldReactToEvent(ripple, ev)) {
            this.endPress(ripple);
        }
    }
    pointerEnter(ripple, ev) {
        if (this.shouldReactToEvent(ripple, ev, true)) {
            ripple.beginHover(ev);
        }
    }
    pointerLeave(ripple, ev) {
        if (this.shouldReactToEvent(ripple, ev, true)) {
            ripple.endHover();
            // release a held mouse or pen press that moves outside the element
            if (!this.isTouch(ev) && this.state !== State.INACTIVE) {
                this.endPress(ripple);
            }
        }
    }
}
/**
 * Connects a Ripple element to a node that drives the interaction
 *
 * @param rippleGetter A function that returns an `md-ripple` element
 * @param simulateKeyboardClick For elements that do not issue a click on
 *     keyboard interaction, pass `true` to enable press animations on Enter or
 *     Spacebar
 */
const ripple = e$2(RippleDirective);

/**
 * @requirecss {button.lib.shared_styles}
 *
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class Button extends s$2 {
    constructor() {
        super();
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * Whether to render the icon at the inline end of the label rather than the
         * inline start.
         *
         * _Note:_ Link buttons cannot have trailing icons.
         */
        this.trailingIcon = false;
        /**
         * The button's visible label.
         */
        this.label = '';
        /**
         * Whether to display the icon or not.
         */
        this.hasIcon = false;
        /**
         * Whether `preventDefault()` should be called on the underlying button.
         * Useful for preventing certain native functionalities like preventing form
         * submissions.
         */
        this.preventClickDefault = false;
        this.showFocusRing = false;
        this.showRipple = false;
        this.handleActivationClick = (event) => {
            if (!isActivationClick((event))) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.buttonElement);
        };
        this.getRipple = () => {
            this.showRipple = true;
            return this.ripple;
        };
        this.renderRipple = () => {
            return y `<md-ripple class="md3-button__ripple" ?disabled="${this.disabled}"></md-ripple>`;
        };
        this.addEventListener('click', this.handleActivationClick);
    }
    focus() {
        this.buttonElement.focus();
    }
    blur() {
        this.buttonElement.blur();
    }
    render() {
        // TODO(b/237283903): Replace ifDefined(... || undefined) with ifTruthy(...)
        return y `
      <button
          class="md3-button ${o(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.ariaLabel || b}"
          aria-haspopup="${this.ariaHasPopup || b}"
          @pointerdown="${this.handlePointerDown}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @click="${this.handleClick}"
          ${ripple(this.getRipple)}>
        ${this.renderFocusRing()}
        ${this.renderElevation()}
        ${n(this.showRipple, this.renderRipple)}
        ${this.renderOutline()}
        ${this.renderTouchTarget()}
        ${this.renderLeadingIcon()}
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </button>`;
    }
    getRenderClasses() {
        return {
            'md3-button--icon-leading': !this.trailingIcon && this.hasIcon,
            'md3-button--icon-trailing': this.trailingIcon && this.hasIcon,
        };
    }
    getIconContainerClasses() {
        return {
            'md3-button__icon--leading': !this.trailingIcon,
            'md3-button__icon--trailing': this.trailingIcon,
        };
    }
    renderTouchTarget() {
        return y `
      <span class="md3-button__touch"></span>
    `;
    }
    renderElevation() {
        return y ``;
    }
    renderOutline() {
        return y ``;
    }
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    renderLabel() {
        return y `<span class="md3-button__label">${this.label}</span>`;
    }
    renderLeadingIcon() {
        return this.trailingIcon ? '' : this.renderIcon();
    }
    renderTrailingIcon() {
        return this.trailingIcon ? this.renderIcon() : '';
    }
    renderIcon() {
        return y `<span class="md3-button__icon-slot-container ${o(this.getIconContainerClasses())}">
                  <slot name="icon" @slotchange="${this.handleSlotChange}">
                  </slot>
                </span>`;
    }
    handlePointerDown(e) {
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleClick(e) {
        if (this.preventClickDefault) {
            e.preventDefault();
        }
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0;
    }
}
Button.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$6({ type: String, attribute: 'data-aria-has-popup', noAccessor: true }),
    ariaProperty,
    __metadata("design:type", String)
], Button.prototype, "ariaHasPopup", void 0);
__decorate([
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    ariaProperty,
    __metadata("design:type", String)
], Button.prototype, "ariaLabel", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Button.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean, attribute: 'trailingicon' }),
    __metadata("design:type", Object)
], Button.prototype, "trailingIcon", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Button.prototype, "label", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Button.prototype, "hasIcon", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Button.prototype, "preventClickDefault", void 0);
__decorate([
    i$3('.md3-button'),
    __metadata("design:type", HTMLElement)
], Button.prototype, "buttonElement", void 0);
__decorate([
    e$4('md-ripple'),
    __metadata("design:type", Promise)
], Button.prototype, "ripple", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Button.prototype, "showFocusRing", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Button.prototype, "showRipple", void 0);
__decorate([
    l$3({ slot: 'icon', flatten: true }),
    __metadata("design:type", Array)
], Button.prototype, "assignedIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class TextButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--text': true,
        };
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$z = i$6 `:host{--_container-shape-start-start: var(--md-text-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-text-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-text-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-text-button-container-shape-end-start, 9999px);--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-color: var(--md-text-button-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-text-button-focus-state-layer-opacity, 0.12);--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, Roboto);--_label-text-line-height: var(--md-text-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-text-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-text-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-text-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-text-button-label-text-weight, 500);--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-text-button-with-icon-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_with-icon-focus-icon-color: var(--md-text-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-text-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-text-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-text-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-text-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-text-button-spacing-leading, 12px);--_spacing-trailing: var(--md-text-button-spacing-trailing, 12px);--_with-icon-spacing-leading: var(--md-text-button-with-icon-spacing-leading, 12px);--_with-icon-spacing-trailing: var(--md-text-button-with-icon-spacing-trailing, 16px);--_with-trailing-icon-spacing-leading: var(--md-text-button-with-trailing-icon-spacing-leading, 16px);--_with-trailing-icon-spacing-trailing: var(--md-text-button-with-trailing-icon-spacing-trailing, 12px)}/*# sourceMappingURL=text-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
let MdTextButton = class MdTextButton extends TextButton {
};
MdTextButton.styles = [styles$A, styles$z];
MdTextButton = __decorate([
    e$7('md-text-button')
], MdTextButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$y = i$6 `md-elevation{inset:0;position:absolute}.md3-button{--md-elevation-duration:280ms;--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-elevation-surface-tint-color:var(--_container-surface-tint-layer-color)}.md3-button:focus{--md-elevation-level:var(--_focus-container-elevation)}.md3-button:hover{--md-elevation-level:var(--_hover-container-elevation)}.md3-button:active{--md-elevation-level:var(--_pressed-container-elevation)}.md3-button:disabled{--md-elevation-level:var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class LinkButton extends Button {
    constructor() {
        super(...arguments);
        /**
         * Link buttons cannot be disabled.
         */
        this.disabled = false;
    }
    // Note: link buttons cannot have trailing icons.
    getRenderClasses() {
        return {
            'md3-button--icon-leading': this.hasIcon,
        };
    }
    getIconContainerClasses() {
        return {
            'md3-button__icon--leading': true,
        };
    }
    render() {
        return y `
      <span class="md3-link-button-wrapper">
        <a class="md3-button ${o(this.getRenderClasses())}"
          href="${l$2(this.href)}"
          target="${l$2(this.target)}"
          aria-label="${l$2(this.ariaLabel)}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @pointerdown="${this.handlePointerDown}"
          @click="${this.handleClick}"
          ${ripple(this.getRipple)}>
            ${this.renderFocusRing()}
            ${this.renderElevation()}
            ${n(this.showRipple, this.renderRipple)}
            ${this.renderOutline()}
            ${this.renderTouchTarget()}
            ${this.renderIcon()}
            ${this.renderLabel()}</a>
      </span>`;
    }
}
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], LinkButton.prototype, "href", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], LinkButton.prototype, "target", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class TonalLinkButton extends LinkButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--tonal': true,
        };
    }
    /** @soyTemplate */
    renderElevation() {
        return y `<md-elevation shadow></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$x = i$6 `:host{--_container-shape-start-start: var(--md-tonal-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-tonal-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-tonal-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-tonal-button-container-shape-end-start, 9999px);--_container-color: var(--md-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-tonal-button-container-elevation, 0);--_container-height: var(--md-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-tonal-button-disabled-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-container-elevation: var(--md-tonal-button-disabled-container-elevation, 0);--_disabled-label-text-color: var(--md-tonal-button-disabled-label-text-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_focus-container-elevation: var(--md-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-color: var(--md-tonal-button-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-opacity: var(--md-tonal-button-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-tonal-button-label-text-font, Roboto);--_label-text-line-height: var(--md-tonal-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-tonal-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-tonal-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-tonal-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-tonal-button-label-text-weight, 500);--_pressed-container-elevation: var(--md-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-tonal-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-tonal-button-with-icon-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_with-icon-focus-icon-color: var(--md-tonal-button-with-icon-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_with-icon-hover-icon-color: var(--md-tonal-button-with-icon-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_with-icon-icon-color: var(--md-tonal-button-with-icon-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_with-icon-icon-size: var(--md-tonal-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-tonal-button-with-icon-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_spacing-leading: var(--md-tonal-button-spacing-leading, 24px);--_spacing-trailing: var(--md-tonal-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-tonal-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-tonal-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-tonal-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-tonal-button-with-trailing-icon-spacing-trailing, 16px)}/*# sourceMappingURL=tonal-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdTonalLinkButton = class MdTonalLinkButton extends TonalLinkButton {
};
MdTonalLinkButton.styles = [styles$A, styles$y, styles$x];
MdTonalLinkButton = __decorate([
    e$7('md-tonal-link-button')
], MdTonalLinkButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class OutlinedLinkButton extends LinkButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--outlined': true,
        };
    }
    renderOutline() {
        return y `<span class="md3-button__outline"></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$w = i$6 `:host{--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, 9999px);--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-color: var(--md-outlined-button-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-color: var(--md-outlined-button-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-outlined-button-focus-state-layer-opacity, 0.12);--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-outline-color: var(--md-outlined-button-hover-outline-color, var(--md-sys-color-outline, #79747e));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, Roboto);--_label-text-line-height: var(--md-outlined-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-outlined-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-outlined-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-outlined-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-outlined-button-label-text-weight, 500);--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-outlined-button-with-icon-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_with-icon-focus-icon-color: var(--md-outlined-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-outlined-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-outlined-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-outlined-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-outlined-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-outlined-button-spacing-leading, 24px);--_spacing-trailing: var(--md-outlined-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-outlined-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-outlined-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-outlined-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-outlined-button-with-trailing-icon-spacing-trailing, 16px)}.md3-button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button:active .md3-button__outline{border-color:var(--_pressed-outline-color)}.md3-button:disabled .md3-button__outline{border-color:var(--_disabled-outline-color)}.md3-button__outline,.md3-button__ripple{border-width:var(--_outline-width)}.md3-button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedLinkButton = class MdOutlinedLinkButton extends OutlinedLinkButton {
};
MdOutlinedLinkButton.styles = [styles$A, styles$w];
MdOutlinedLinkButton = __decorate([
    e$7('md-outlined-link-button')
], MdOutlinedLinkButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class OutlinedButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--outlined': true,
        };
    }
    renderOutline() {
        return y `<span class="md3-button__outline"></span>`;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedButton = class MdOutlinedButton extends OutlinedButton {
};
MdOutlinedButton.styles = [styles$A, styles$w];
MdOutlinedButton = __decorate([
    e$7('md-outlined-button')
], MdOutlinedButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class ElevatedButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--elevated': true,
        };
    }
    renderElevation() {
        return y `<md-elevation shadow surface></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$v = i$6 `:host{--_container-shape-start-start: var(--md-elevated-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-elevated-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-elevated-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-elevated-button-container-shape-end-start, 9999px);--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface, #fffbfe));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-surface-tint-layer-color: var(--md-elevated-button-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_disabled-container-color: var(--md-elevated-button-disabled-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-color: var(--md-elevated-button-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-elevated-button-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-elevated-button-label-text-font, Roboto);--_label-text-line-height: var(--md-elevated-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-elevated-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-elevated-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-elevated-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-elevated-button-label-text-weight, 500);--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-elevated-button-with-icon-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_with-icon-focus-icon-color: var(--md-elevated-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-elevated-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-elevated-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-elevated-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-elevated-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-elevated-button-spacing-leading, 24px);--_spacing-trailing: var(--md-elevated-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-elevated-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-elevated-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-elevated-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-elevated-button-with-trailing-icon-spacing-trailing, 16px)}/*# sourceMappingURL=elevated-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Elevated buttons are essentially filled buttons with a lighter
 * background color and a shadow. To prevent shadow creep, only use them when
 * absolutely necessary, such as when the button requires visual separation from
 * a patterned background.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdElevatedButton = class MdElevatedButton extends ElevatedButton {
};
MdElevatedButton.styles = [styles$A, styles$y, styles$v];
MdElevatedButton = __decorate([
    e$7('md-elevated-button')
], MdElevatedButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class FilledLinkButton extends LinkButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--filled': true,
        };
    }
    /** @soyTemplate */
    renderElevation() {
        return y `<md-elevation shadow surface></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$u = i$6 `:host{--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, 9999px);--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_dragged-container-elevation: var(--md-filled-button-dragged-container-elevation, 6);--_dragged-label-text-color: var(--md-filled-button-dragged-label-text-color, var(--md-sys-color-on-primary, #fff));--_dragged-state-layer-color: var(--md-filled-button-dragged-state-layer-color, var(--md-sys-color-on-primary, #fff));--_dragged-state-layer-opacity: var(--md-filled-button-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-color: var(--md-filled-button-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-opacity: var(--md-filled-button-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, Roboto);--_label-text-line-height: var(--md-filled-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-filled-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-filled-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-filled-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-filled-button-label-text-weight, 500);--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-filled-button-with-icon-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_with-icon-dragged-icon-color: var(--md-filled-button-with-icon-dragged-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-focus-icon-color: var(--md-filled-button-with-icon-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-hover-icon-color: var(--md-filled-button-with-icon-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-icon-color: var(--md-filled-button-with-icon-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-icon-size: var(--md-filled-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-filled-button-with-icon-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_spacing-leading: var(--md-filled-button-spacing-leading, 24px);--_spacing-trailing: var(--md-filled-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-filled-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-filled-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-filled-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-filled-button-with-trailing-icon-spacing-trailing, 16px)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledLinkButton = class MdFilledLinkButton extends FilledLinkButton {
};
MdFilledLinkButton.styles = [styles$A, styles$y, styles$u];
MdFilledLinkButton = __decorate([
    e$7('md-filled-link-button')
], MdFilledLinkButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class ElevatedLinkButton extends LinkButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--elevated': true,
        };
    }
    renderElevation() {
        return y `<md-elevation shadow surface></md-elevation>`;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Elevated buttons are essentially filled buttons with a lighter
 * background color and a shadow. To prevent shadow creep, only use them when
 * absolutely necessary, such as when the button requires visual separation from
 * a patterned background.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdElevatedLinkButton = class MdElevatedLinkButton extends ElevatedLinkButton {
};
MdElevatedLinkButton.styles = [styles$A, styles$y, styles$v];
MdElevatedLinkButton = __decorate([
    e$7('md-elevated-link-button')
], MdElevatedLinkButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class TonalButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--tonal': true,
        };
    }
    /** @soyTemplate */
    renderElevation() {
        return y `<md-elevation shadow></md-elevation>`;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdTonalButton = class MdTonalButton extends TonalButton {
};
MdTonalButton.styles = [styles$A, styles$y, styles$x];
MdTonalButton = __decorate([
    e$7('md-tonal-button')
], MdTonalButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class FilledButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--filled': true,
        };
    }
    /** @soyTemplate */
    renderElevation() {
        return y `<md-elevation shadow surface></md-elevation>`;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledButton = class MdFilledButton extends FilledButton {
};
MdFilledButton.styles = [styles$A, styles$y, styles$u];
MdFilledButton = __decorate([
    e$7('md-filled-button')
], MdFilledButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class TextLinkButton extends LinkButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--text': true,
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
let MdTextLinkButton = class MdTextLinkButton extends TextLinkButton {
};
MdTextLinkButton.styles = [styles$A, styles$z];
MdTextLinkButton = __decorate([
    e$7('md-text-link-button')
], MdTextLinkButton);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A checkbox component.
 */
class Checkbox extends s$2 {
    constructor() {
        super();
        this.checked = false;
        this.disabled = false;
        this.error = false;
        this.indeterminate = false;
        this.value = 'on';
        this.name = '';
        this.prevChecked = false;
        this.prevDisabled = false;
        this.prevIndeterminate = false;
        this.showFocusRing = false;
        this.showRipple = false;
        this.getRipple = () => {
            this.showRipple = true;
            return this.ripple;
        };
        this.renderRipple = () => {
            return y `<md-ripple ?disabled=${this.disabled} unbounded></md-ripple>`;
        };
        this.addController(new FormController(this));
        this.addEventListener('click', (event) => {
            if (!isActivationClick(event)) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.input);
        });
    }
    get form() {
        return this.closest('form');
    }
    focus() {
        this.input?.focus();
    }
    [getFormValue]() {
        return this.checked ? this.value : null;
    }
    update(changed) {
        if (changed.has('checked') || changed.has('disabled') ||
            changed.has('indeterminate')) {
            this.prevChecked = changed.get('checked') ?? this.checked;
            this.prevDisabled = changed.get('disabled') ?? this.disabled;
            this.prevIndeterminate =
                changed.get('indeterminate') ?? this.indeterminate;
        }
        super.update(changed);
    }
    render() {
        const prevNone = !this.prevChecked && !this.prevIndeterminate;
        const prevChecked = this.prevChecked && !this.prevIndeterminate;
        const prevIndeterminate = this.prevIndeterminate;
        const isChecked = this.checked && !this.indeterminate;
        const isIndeterminate = this.indeterminate;
        const containerClasses = o({
            'selected': isChecked || isIndeterminate,
            'unselected': !isChecked && !isIndeterminate,
            'checked': isChecked,
            'indeterminate': isIndeterminate,
            'error': this.error && !this.disabled,
            'prev-unselected': prevNone,
            'prev-checked': prevChecked,
            'prev-indeterminate': prevIndeterminate,
            'prev-disabled': this.prevDisabled,
        });
        return y `
      <div class="container ${containerClasses}">
        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring .visible=${this.showFocusRing}></md-focus-ring>
        ${n(this.showRipple, this.renderRipple)}
        <svg class="icon" viewBox="0 0 18 18">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
      <input type="checkbox"
        aria-checked=${isIndeterminate ? 'mixed' : b}
        aria-label=${this.ariaLabel || b}
        ?disabled=${this.disabled}
        .indeterminate=${this.indeterminate}
        .checked=${this.checked}
        @blur=${this.handleBlur}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @pointerdown=${this.handlePointerDown}
        ${ripple(this.getRipple)}
      >
     `;
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handleChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = target.indeterminate;
        redispatchEvent(this, event);
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerDown() {
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
}
Checkbox.formAssociated = true;
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "checked", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "error", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    e$6(),
    __metadata("design:type", Object)
], Checkbox.prototype, "value", void 0);
__decorate([
    e$6(),
    __metadata("design:type", Object)
], Checkbox.prototype, "name", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], Checkbox.prototype, "ariaLabel", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Checkbox.prototype, "prevChecked", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Checkbox.prototype, "prevDisabled", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Checkbox.prototype, "prevIndeterminate", void 0);
__decorate([
    e$4('md-ripple'),
    __metadata("design:type", Promise)
], Checkbox.prototype, "ripple", void 0);
__decorate([
    i$3('input'),
    __metadata("design:type", HTMLInputElement)
], Checkbox.prototype, "input", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Checkbox.prototype, "showFocusRing", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Checkbox.prototype, "showRipple", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$t = i$6 `:host{--_container-height: var(--md-checkbox-container-height, 18px);--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-width: var(--md-checkbox-container-width, 18px);--_error-focus-state-layer-color: var(--md-checkbox-error-focus-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-hover-state-layer-color: var(--md-checkbox-error-hover-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-hover-state-layer-opacity: var(--md-checkbox-error-hover-state-layer-opacity, 0.08);--_error-pressed-state-layer-color: var(--md-checkbox-error-pressed-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-pressed-state-layer-opacity: var(--md-checkbox-error-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1c1b1f));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fffbfe));--_selected-error-container-color: var(--md-checkbox-selected-error-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-focus-container-color: var(--md-checkbox-selected-error-focus-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-focus-icon-color: var(--md-checkbox-selected-error-focus-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-hover-container-color: var(--md-checkbox-selected-error-hover-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-hover-icon-color: var(--md-checkbox-selected-error-hover-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-icon-color: var(--md-checkbox-selected-error-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-pressed-container-color: var(--md-checkbox-selected-error-pressed-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-pressed-icon-color: var(--md-checkbox-selected-error-pressed-icon-color, var(--md-sys-color-on-error, #fff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-focus-state-layer-color: var(--md-checkbox-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-checkbox-selected-focus-state-layer-opacity, 0.12);--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_unselected-disabled-container-opacity: var(--md-checkbox-unselected-disabled-container-opacity, 0.38);--_unselected-disabled-outline-color: var(--md-checkbox-unselected-disabled-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-disabled-outline-width: var(--md-checkbox-unselected-disabled-outline-width, 2px);--_unselected-error-focus-outline-color: var(--md-checkbox-unselected-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-focus-outline-width: var(--md-checkbox-unselected-error-focus-outline-width, 2px);--_unselected-error-hover-outline-color: var(--md-checkbox-unselected-error-hover-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-hover-outline-width: var(--md-checkbox-unselected-error-hover-outline-width, 2px);--_unselected-error-outline-color: var(--md-checkbox-unselected-error-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-pressed-outline-color: var(--md-checkbox-unselected-error-pressed-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-pressed-outline-width: var(--md-checkbox-unselected-error-pressed-outline-width, 2px);--_unselected-focus-outline-color: var(--md-checkbox-unselected-focus-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-outline-width: var(--md-checkbox-unselected-focus-outline-width, 2px);--_unselected-focus-state-layer-color: var(--md-checkbox-unselected-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-state-layer-opacity: var(--md-checkbox-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-outline-color: var(--md-checkbox-unselected-hover-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-outline-width: var(--md-checkbox-unselected-hover-outline-width, 2px);--_unselected-hover-state-layer-color: var(--md-checkbox-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-state-layer-opacity: var(--md-checkbox-unselected-hover-state-layer-opacity, 0.08);--_unselected-outline-color: var(--md-checkbox-unselected-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-width: var(--md-checkbox-unselected-outline-width, 2px);--_unselected-pressed-outline-color: var(--md-checkbox-unselected-pressed-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-outline-width: var(--md-checkbox-unselected-pressed-outline-width, 2px);--_unselected-pressed-state-layer-color: var(--md-checkbox-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-pressed-state-layer-opacity: var(--md-checkbox-unselected-pressed-state-layer-opacity, 0.12);border-radius:var(--_container-shape);display:inline-flex;height:48px;position:relative;vertical-align:top;width:48px;-webkit-tap-highlight-color:rgba(0,0,0,0)}input{appearance:none;inset:0;margin:0;outline:none;position:absolute;opacity:0;block-size:100%;inline-size:100%}.container{border-radius:inherit;height:100%;position:relative;width:100%}.outline,.background,md-ripple,.icon{inset:0;margin:auto;position:absolute}.outline,.background{border-radius:inherit;height:var(--_container-height);width:var(--_container-width)}.outline{border-color:var(--_unselected-outline-color);border-style:solid;border-width:var(--_unselected-outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}.selected .background,.selected .icon{opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-focus-ring{--md-focus-ring-shape-start-start:9999px;--md-focus-ring-shape-start-end:9999px;--md-focus-ring-shape-end-end:9999px;--md-focus-ring-shape-end-start:9999px;--md-focus-ring-offset-vertical:-2px;--md-focus-ring-offset-horizontal:-2px}md-ripple{height:var(--_state-layer-size);width:var(--_state-layer-size);--md-ripple-focus-state-layer-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_unselected-pressed-state-layer-opacity);--md-ripple-state-layer-shape:var(--_state-layer-shape)}.selected md-ripple{--md-ripple-focus-state-layer-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_selected-pressed-state-layer-opacity)}.error md-ripple{--md-ripple-focus-state-layer-color:var(--_error-focus-state-layer-color);--md-ripple-hover-state-layer-color:var(--_error-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_error-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_error-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_error-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}.error .outline{border-color:var(--_unselected-error-outline-color)}.error .background{background:var(--_selected-error-container-color)}.error .icon{fill:var(--_selected-error-icon-color)}:host(:hover) .outline{border-color:var(--_unselected-hover-outline-color);border-width:var(--_unselected-hover-outline-width)}:host(:hover) .background{background:var(--_selected-hover-container-color)}:host(:hover) .icon{fill:var(--_selected-hover-icon-color)}:host(:hover) .error .outline{border-color:var(--_unselected-error-hover-outline-color);border-width:var(--_unselected-error-hover-outline-width)}:host(:hover) .error .background{background:var(--_selected-error-hover-container-color)}:host(:hover) .error .icon{fill:var(--_selected-error-hover-icon-color)}:host(:focus-within) .outline{border-color:var(--_unselected-focus-outline-color);border-width:var(--_unselected-focus-outline-width)}:host(:focus-within) .background{background:var(--_selected-focus-container-color)}:host(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:host(:focus-within) .error .outline{border-color:var(--_unselected-error-focus-outline-color);border-width:var(--_unselected-error-focus-outline-width)}:host(:focus-within) .error .background{background:var(--_selected-error-focus-container-color)}:host(:focus-within) .error .icon{fill:var(--_selected-error-focus-icon-color)}:host(:active) .outline{border-color:var(--_unselected-pressed-outline-color);border-width:var(--_unselected-pressed-outline-width)}:host(:active) .background{background:var(--_selected-pressed-container-color)}:host(:active) .icon{fill:var(--_selected-pressed-icon-color)}:host(:active) .error .outline{border-color:var(--_unselected-error-pressed-outline-color);border-width:var(--_unselected-error-pressed-outline-width)}:host(:active) .error .background{background:var(--_selected-error-pressed-container-color)}:host(:active) .error .icon{fill:var(--_selected-error-pressed-icon-color)}:host([disabled]) .background,:host([disabled]) .icon,:host([disabled]) .mark,.prev-disabled .background,.prev-disabled .icon,.prev-disabled .mark{animation-duration:0s;transition-duration:0s}:host([disabled]) .outline{border-color:var(--_unselected-disabled-outline-color);border-width:var(--_unselected-disabled-outline-width);opacity:var(--_unselected-disabled-container-opacity)}:host([disabled]) .selected .outline{visibility:hidden}:host([disabled]) .selected .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:host([disabled]) .icon{fill:var(--_selected-disabled-icon-color)}/*# sourceMappingURL=checkbox-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$s = i$6 `@media(forced-colors: active){:host{--md-checkbox-selected-container-color:CanvasText;--md-checkbox-selected-disabled-container-color:GrayText;--md-checkbox-selected-disabled-container-opacity:1;--md-checkbox-selected-disabled-icon-color:Canvas;--md-checkbox-selected-error-container-color:CanvasText;--md-checkbox-selected-error-focus-container-color:CanvasText;--md-checkbox-selected-error-focus-icon-color:Canvas;--md-checkbox-selected-error-hover-container-color:CanvasText;--md-checkbox-selected-error-hover-icon-color:Canvas;--md-checkbox-selected-error-icon-color:Canvas;--md-checkbox-selected-error-pressed-container-color:CanvasText;--md-checkbox-selected-error-pressed-icon-color:Canvas;--md-checkbox-selected-focus-container-color:CanvasText;--md-checkbox-selected-focus-icon-color:Canvas;--md-checkbox-selected-hover-container-color:CanvasText;--md-checkbox-selected-hover-icon-color:Canvas;--md-checkbox-selected-icon-color:Canvas;--md-checkbox-selected-pressed-container-color:CanvasText;--md-checkbox-selected-pressed-icon-color:Canvas;--md-checkbox-unselected-disabled-container-opacity:1;--md-checkbox-unselected-disabled-outline-color:GrayText;--md-checkbox-unselected-error-focus-outline-color:CanvasText;--md-checkbox-unselected-error-hover-outline-color:CanvasText;--md-checkbox-unselected-error-outline-color:CanvasText;--md-checkbox-unselected-error-pressed-outline-color:CanvasText;--md-checkbox-unselected-focus-outline-color:CanvasText;--md-checkbox-unselected-hover-outline-color:CanvasText;--md-checkbox-unselected-outline-color:CanvasText;--md-checkbox-unselected-pressed-outline-color:CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Checkboxes allow users to select one or more items from a set. Checkboxes can
 * turn an option on or off.
 */
let MdCheckbox = class MdCheckbox extends Checkbox {
};
MdCheckbox.styles = [styles$t, styles$s];
MdCheckbox = __decorate([
    e$7('md-checkbox')
], MdCheckbox);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class Icon extends s$2 {
    /** @soyTemplate */
    render() {
        return y `<span><slot></slot></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$r = i$6 `:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Icons");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-varation-settings);line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdIcon = class MdIcon extends Icon {
};
MdIcon.styles = [styles$r];
MdIcon = __decorate([
    e$7('md-icon')
], MdIcon);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 */
class FabShared extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.icon = '';
        this.label = '';
        this.lowered = false;
        this.reducedTouchTarget = false;
        this.showFocusRing = false;
    }
    /**
     * @soyTemplate
     * @soyClasses fabClasses: .md3-fab
     */
    render() {
        const ariaLabel = this.label ? this.label : this.icon;
        return y `
      <button
        class="md3-fab md3-surface ${o(this.getRenderClasses())}"
        ?disabled="${this.disabled}"
        aria-label="${ariaLabel}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointercancel="${this.handlePointerCancel}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
        @click="${this.handleClick}"
        @contextmenu="${this.handleContextMenu}">
        ${this.renderElevation()}
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        <span class="md3-fab__icon">
          <slot name="icon">${this.renderIcon(this.icon)}</slot>
        </span>
        ${this.renderLabel()}
        ${this.renderTouchTarget()}
      </button>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return { 'md3-fab--lowered': this.lowered };
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return this.reducedTouchTarget ? y `` :
            y `<div class="md3-fab__touch"></div>`;
    }
    /** @soyTemplate */
    renderLabel() {
        return '';
    }
    /** @soyTemplate */
    renderElevation() {
        return y `<md-elevation shadow surface></md-elevation>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return y `<md-ripple class="md3-fab__ripple" ?disabled="${this.disabled}"></md-ripple>`;
    }
    /** @soyTemplate */
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress(options) {
        this.ripple.endPress();
        super.endPress(options);
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerEnter(e) {
        this.ripple.beginHover(e);
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
}
FabShared.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], FabShared.prototype, "disabled", void 0);
__decorate([
    e$6(),
    __metadata("design:type", Object)
], FabShared.prototype, "icon", void 0);
__decorate([
    e$6(),
    __metadata("design:type", Object)
], FabShared.prototype, "label", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], FabShared.prototype, "lowered", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], FabShared.prototype, "reducedTouchTarget", void 0);
__decorate([
    i$3('md-ripple'),
    __metadata("design:type", MdRipple)
], FabShared.prototype, "ripple", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], FabShared.prototype, "showFocusRing", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 */
class Fab extends FabShared {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-fab--regular': true,
        };
    }
    /** @soyTemplate */
    renderIcon(icon) {
        return '';
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$q = i$6 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top}:host([disabled]){cursor:default;pointer-events:none}.md3-fab{display:inline-flex;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;align-items:center;justify-content:center;position:relative;z-index:0;background-color:var(--_container-color);--md-focus-ring-shape-start-start:var(--_container-shape);--md-focus-ring-shape-start-end:var(--_container-shape);--md-focus-ring-shape-end-end:var(--_container-shape);--md-focus-ring-shape-end-start:var(--_container-shape);--md-ripple-hover-state-layer-color:var(--_hover-state-layer-color);--md-ripple-focus-state-layer-color:var(--_focus-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_pressed-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity);--md-elevation-duration:280ms;--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-elevation-surface-tint-color:var(--_container-surface-tint-layer-color)}.md3-fab.md3-fab--lowered{--md-elevation-level:var(--_lowered-container-elevation)}.md3-fab:focus{--md-elevation-level:var(--_focus-container-elevation)}.md3-fab:focus.md3-fab--lowered{--md-elevation-level:var(--_lowered-focus-container-elevation)}.md3-fab:hover{cursor:pointer;--md-elevation-level:var(--_hover-container-elevation)}.md3-fab:hover.md3-fab--lowered{--md-elevation-level:var(--_lowered-hover-container-elevation)}.md3-fab:active{outline:none;--md-elevation-level:var(--_pressed-container-elevation)}.md3-fab:active.md3-fab--lowered{--md-elevation-level:var(--_lowered-pressed-container-elevation)}md-elevation{inset:0;position:absolute;z-index:-1}.md3-fab__ripple{overflow:hidden;z-index:-1}.md3-fab,.md3-fab__ripple{border-radius:var(--_container-shape)}.md3-fab__icon{display:inline-flex}.md3-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.md3-fab__icon ::slotted(*),.md3-fab__icon{color:var(--_icon-color);font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.md3-fab:hover .md3-fab__icon ::slotted(*),.md3-fab:hover .md3-fab__icon{color:var(--_hover-icon-color)}.md3-fab:focus .md3-fab__icon ::slotted(*),.md3-fab:focus .md3-fab__icon{color:var(--_focus-icon-color)}.md3-fab:active .md3-fab__icon ::slotted(*),.md3-fab:active .md3-fab__icon{color:var(--_pressed-icon-color)}@media(forced-colors: active){.md3-fab{--md-focus-ring-offset-vertical:3px;--md-focus-ring-offset-horizontal:3px;border:1px solid ButtonText}}/*# sourceMappingURL=fab-shared-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$p = i$6 `:host{--_container-color: var(--md-fab-container-color, var(--md-sys-color-surface, #fffbfe));--_container-elevation: var(--md-fab-container-elevation, 3);--_container-height: var(--md-fab-container-height, 56px);--_container-shadow-color: var(--md-fab-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-fab-container-shape, 16px);--_container-surface-tint-layer-color: var(--md-fab-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_container-width: var(--md-fab-container-width, 56px);--_focus-container-elevation: var(--md-fab-focus-container-elevation, 3);--_focus-icon-color: var(--md-fab-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-color: var(--md-fab-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-fab-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-fab-hover-container-elevation, 4);--_hover-icon-color: var(--md-fab-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-fab-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-fab-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-fab-icon-size, 24px);--_lowered-container-elevation: var(--md-fab-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-pressed-container-elevation, 3);--_pressed-icon-color: var(--md-fab-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-fab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-pressed-state-layer-opacity, 0.12)}.md3-fab{width:var(--_container-width);height:var(--_container-height)}.md3-fab--regular{padding:0}/*# sourceMappingURL=fab-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFab = class MdFab extends Fab {
    /** @soyTemplate */
    renderIcon(icon) {
        return icon ? y `<md-icon class="md3-fab__icon">${icon}</md-icon>` : '';
    }
};
MdFab.styles = [styles$q, styles$p];
MdFab = __decorate([
    e$7('md-fab')
], MdFab);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 */
class FabExtended extends FabShared {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-fab--extended': true,
        };
    }
    /** @soyTemplate */
    renderIcon(icon) {
        return '';
    }
    /** @soyTemplate */
    renderLabel() {
        return y `<span class="md3-fab__label">${this.label}</span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$o = i$6 `:host{--_container-color: var(--md-fab-extended-container-color, var(--md-sys-color-surface, #fffbfe));--_container-elevation: var(--md-fab-extended-container-elevation, 3);--_container-height: var(--md-fab-extended-container-height, 56px);--_container-shadow-color: var(--md-fab-extended-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-fab-extended-container-shape, 16px);--_container-surface-tint-layer-color: var(--md-fab-extended-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-container-elevation: var(--md-fab-extended-focus-container-elevation, 3);--_focus-icon-color: var(--md-fab-extended-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-fab-extended-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-color: var(--md-fab-extended-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-fab-extended-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-fab-extended-hover-container-elevation, 4);--_hover-icon-color: var(--md-fab-extended-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-extended-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-fab-extended-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-extended-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-fab-extended-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-fab-extended-icon-size, 24px);--_label-text-color: var(--md-fab-extended-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-fab-extended-label-text-font, Roboto);--_label-text-line-height: var(--md-fab-extended-label-text-line-height, 1.25rem);--_label-text-size: var(--md-fab-extended-label-text-size, 0.875rem);--_label-text-tracking: var(--md-fab-extended-label-text-tracking, 0.006rem);--_label-text-type: var(--md-fab-extended-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-fab-extended-label-text-weight, 500);--_lowered-container-elevation: var(--md-fab-extended-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-extended-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-extended-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-extended-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-extended-pressed-container-elevation, 3);--_pressed-icon-color: var(--md-fab-extended-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-label-text-color: var(--md-fab-extended-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-fab-extended-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-extended-pressed-state-layer-opacity, 0.12)}.md3-fab--extended{box-sizing:border-box;padding-inline-start:16px;padding-inline-end:20px;height:var(--_container-height);font-family:var(--_label-text-font);line-height:var(--_label-text-line-height);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);letter-spacing:var(--_label-text-tracking)}.md3-fab__label{padding-inline-start:12px;color:var(--_label-text-color)}.md3-fab:hover .md3-fab__label{color:var(--_hover-label-text-color)}.md3-fab:focus .md3-fab__label{color:var(--_focus-label-text-color)}.md3-fab:active .md3-fab__label{color:var(--_pressed-label-text-color)}@media(forced-colors: active){.md3-fab--extended{padding-inline-start:15px;padding-inline-end:19px}}/*# sourceMappingURL=fab-extended-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFabExtended = class MdFabExtended extends FabExtended {
    /** @soyTemplate */
    renderIcon(icon) {
        return icon ? y `<md-icon class="md3-fab__icon">${icon}</md-icon>` : '';
    }
};
MdFabExtended.styles = [styles$q, styles$o];
MdFabExtended = __decorate([
    e$7('md-fab-extended')
], MdFabExtended);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$n = i$6 `:host{--_container-shape-start-start: var(--md-filled-tonal-icon-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-filled-tonal-icon-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-filled-tonal-icon-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-filled-tonal-icon-button-container-shape-end-start, 9999px);--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-size: var(--md-filled-tonal-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-color: var(--md-filled-tonal-icon-button-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-opacity: var(--md-filled-tonal-icon-button-focus-state-layer-opacity, 0.12);--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-focus-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-unselected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-focus-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}.md3-icon-button{background-color:var(--_container-color);color:var(--_icon-color);--md-ripple-focus-state-layer-color:var(--_focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-icon-button:hover{color:var(--_hover-icon-color)}.md3-icon-button:focus{color:var(--_focus-icon-color)}.md3-icon-button:active{color:var(--_pressed-icon-color)}.md3-icon-button:disabled{background-color:var(--_disabled-container-color);color:var(--_disabled-icon-color)}.md3-icon-button--toggle-filled-tonal{--md-ripple-focus-state-layer-color:var(--_toggle-unselected-focus-state-layer-color);--md-ripple-hover-state-layer-color:var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_toggle-unselected-pressed-state-layer-color)}.md3-icon-button--toggle-filled-tonal:not(:disabled){background-color:var(--_unselected-container-color);color:var(--_toggle-unselected-icon-color)}.md3-icon-button--toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.md3-icon-button--toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.md3-icon-button--toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.md3-icon-button--on{--md-ripple-focus-state-layer-color:var(--_toggle-selected-focus-state-layer-color);--md-ripple-hover-state-layer-color:var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_toggle-selected-pressed-state-layer-color)}.md3-icon-button--on:not(:disabled){background-color:var(--_selected-container-color);color:var(--_toggle-selected-icon-color)}.md3-icon-button--on:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.md3-icon-button--on:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.md3-icon-button--on:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class IconButton extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        /**
         * The glyph of the icon to display from the applied icon font. See the
         * associated typography tokens for more info.
         */
        this.icon = '';
        /**
         * Flips the icon if it is in an RTL context at startup.
         */
        this.flipIconInRtl = false;
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        this.showFocusRing = false;
        this.showRipple = false;
        this.getRipple = () => {
            this.showRipple = true;
            return this.ripple;
        };
        this.renderRipple = () => {
            return y `<md-ripple ?disabled="${this.disabled}"></md-ripple>`;
        };
    }
    render() {
        return y `<button
        class="md3-icon-button ${o(this.getRenderClasses())}"
        aria-label="${l$2(this.ariaLabel)}"
        aria-haspopup="${l$2(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        ${ripple(this.getRipple)}>
        ${this.renderFocusRing()}
        ${n(this.showRipple, this.renderRipple)}
        ${this.renderIcon()}
        ${this.renderTouchTarget()}
  </button>`;
    }
    getRenderClasses() {
        return {
            'md3-icon-button--flip-icon': this.flipIcon,
        };
    }
    renderIcon() {
        // Note, it's important not to render the icon property as a slot fallback
        // to avoid any whitespace from overridding it.
        return y `<span class="md3-icon-button__icon"><md-icon>${this.icon ? this.icon : y `<slot></slot>`}</md-icon></span>`;
    }
    renderTouchTarget() {
        return y `<span class="md3-icon-button__touch"></span>`;
    }
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    connectedCallback() {
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        super.connectedCallback();
    }
    handlePointerDown() {
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
}
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], IconButton.prototype, "disabled", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], IconButton.prototype, "icon", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Boolean)
], IconButton.prototype, "flipIcon", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-label' }),
    __metadata("design:type", String)
], IconButton.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-haspopup' }),
    __metadata("design:type", String)
], IconButton.prototype, "ariaHasPopup", void 0);
__decorate([
    i$3('button'),
    __metadata("design:type", HTMLElement)
], IconButton.prototype, "buttonElement", void 0);
__decorate([
    e$4('md-ripple'),
    __metadata("design:type", Promise)
], IconButton.prototype, "ripple", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], IconButton.prototype, "showFocusRing", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], IconButton.prototype, "showRipple", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$m = i$6 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([disabled]){pointer-events:none}.md3-icon-button{align-items:center;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;height:var(--_container-size);width:var(--_container-size);margin:max(0px,(48px - var(--_container-size))/2);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-icon-button__icon{--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-icon-button--flip-icon .md3-icon-button__icon{transform:scaleX(-1)}.md3-icon-button__icon{display:inline-flex}.md3-icon-button__icon.md3-icon-button__icon--on{display:none}.md3-icon-button--on .md3-icon-button__icon{display:none}.md3-icon-button--on .md3-icon-button__icon.md3-icon-button__icon--on{display:inline-flex}.md3-icon-button__link{height:100%;outline:none;position:absolute;width:100%}.md3-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledTonalIconButton = class MdFilledTonalIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled-tonal': true,
        };
    }
};
MdFilledTonalIconButton.styles = [styles$m, styles$n];
MdFilledTonalIconButton = __decorate([
    e$7('md-filled-tonal-icon-button')
], MdFilledTonalIconButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires icon-button-toggle-change {CustomEvent<{selected: boolean}>}
 * Dispatched whenever `selected` is changed via user click
 */
class IconButtonToggle extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Disables the icon button and makes it non-interactive.
         */
        this.disabled = false;
        /**
         * The glyph of the icon to display from the applied icon font when toggle
         * button is selected or "on". See the associated typography tokens for more
         * info.
         */
        this.onIcon = '';
        /**
         * The glyph of the icon to display from the applied icon font when toggle
         * button is not selected or "off". See the associated typography tokens for
         * more info.
         */
        this.offIcon = '';
        /**
         * Sets the toggle button to the "on" state and displays the `onIcon`. If
         * false, sets the toggle button to the "off" state and displays the
         * `offIcon`.
         */
        this.selected = false;
        this.showFocusRing = false;
        this.showRipple = false;
        this.getRipple = () => {
            this.showRipple = true;
            return this.ripple;
        };
        this.renderRipple = () => {
            return y `<md-ripple ?disabled="${this.disabled}"></md-ripple>`;
        };
    }
    render() {
        const hasToggledAriaLabel = this.ariaLabelOn && this.ariaLabelOff;
        const ariaPressedValue = hasToggledAriaLabel ? undefined : this.selected;
        const ariaLabelValue = hasToggledAriaLabel ?
            (this.selected ? this.ariaLabelOn : this.ariaLabelOff) :
            this.ariaLabel;
        return y `<button
          class="md3-icon-button ${o(this.getRenderClasses())}"
          aria-pressed="${l$2(ariaPressedValue)}"
          aria-label="${l$2(ariaLabelValue)}"
          ?disabled="${this.disabled}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @pointerdown="${this.handlePointerDown}"
          @click="${this.handleClick}"
          ${ripple(this.getRipple)}>
        ${this.renderFocusRing()}
        ${n(this.showRipple, this.renderRipple)}
        ${this.renderTouchTarget()}
        <span class="md3-icon-button__icon">
          <slot name="offIcon">${this.renderIcon(this.offIcon)}</slot>
        </span>
        <span class="md3-icon-button__icon md3-icon-button__icon--on">
          <slot name="onIcon">${this.renderIcon(this.onIcon)}</slot>
        </span>
      </button>`;
    }
    getRenderClasses() {
        return {
            'md3-icon-button--on': this.selected,
        };
    }
    renderIcon(icon) {
        return icon ? y `<md-icon>${icon}</md-icon>` : '';
    }
    renderTouchTarget() {
        return y `<span class="md3-icon-button__touch"></span>`;
    }
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    handlePointerDown(e) {
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handleClick() {
        this.selected = !this.selected;
        const detail = { selected: this.selected };
        this.dispatchEvent(new CustomEvent('icon-button-toggle-change', { detail, bubbles: true, composed: true }));
    }
}
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-label' }),
    __metadata("design:type", String)
], IconButtonToggle.prototype, "ariaLabel", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "disabled", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "onIcon", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "offIcon", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], IconButtonToggle.prototype, "ariaLabelOn", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], IconButtonToggle.prototype, "ariaLabelOff", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "selected", void 0);
__decorate([
    e$4('md-ripple'),
    __metadata("design:type", Promise)
], IconButtonToggle.prototype, "ripple", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "showFocusRing", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], IconButtonToggle.prototype, "showRipple", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$l = i$6 `:host{--_state-layer-shape-start-start: var(--md-icon-button-state-layer-shape-start-start, 9999px);--_state-layer-shape-start-end: var(--md-icon-button-state-layer-shape-start-end, 9999px);--_state-layer-shape-end-end: var(--md-icon-button-state-layer-shape-end-end, 9999px);--_state-layer-shape-end-start: var(--md-icon-button-state-layer-shape-end-start, 9999px);--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color: var(--md-icon-button-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-icon-button-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-opacity: var(--md-icon-button-unselected-focus-state-layer-opacity, 0.08);--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);--md-focus-ring-shape-start-start:var(--_state-layer-shape-start-start);--md-focus-ring-shape-start-end:var(--_state-layer-shape-start-end);--md-focus-ring-shape-end-end:var(--_state-layer-shape-end-end);--md-focus-ring-shape-end-start:var(--_state-layer-shape-end-start)}.md3-icon-button--standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);height:var(--_state-layer-size);width:var(--_state-layer-size);margin:max(0px,(48px - var(--_state-layer-size))/2);--md-ripple-focus-state-layer-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_unselected-pressed-state-layer-opacity);--md-ripple-state-layer-shape:var(--_state-layer-shape-start-start)}.md3-icon-button--standard:hover{color:var(--_unselected-hover-icon-color)}.md3-icon-button--standard:focus{color:var(--_unselected-focus-icon-color)}.md3-icon-button--standard:active{color:var(--_unselected-pressed-icon-color)}.md3-icon-button--standard:disabled{color:var(--_disabled-icon-color)}.md3-icon-button--on{--md-ripple-focus-state-layer-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_selected-pressed-state-layer-opacity)}.md3-icon-button--on:not(:disabled){color:var(--_selected-icon-color)}.md3-icon-button--on:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.md3-icon-button--on:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.md3-icon-button--on:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This variant can toggle between icons.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdStandardIconButtonToggle = class MdStandardIconButtonToggle extends IconButtonToggle {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--standard': true,
        };
    }
};
MdStandardIconButtonToggle.styles = [styles$m, styles$l];
MdStandardIconButtonToggle = __decorate([
    e$7('md-standard-icon-button-toggle')
], MdStandardIconButtonToggle);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$k = i$6 `:host{--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, 9999px);--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-color: var(--md-filled-icon-button-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-opacity: var(--md-filled-icon-button-focus-state-layer-opacity, 0.12);--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-focus-state-layer-color: var(--md-filled-icon-button-toggle-selected-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-unselected-focus-icon-color: var(--md-filled-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-focus-state-layer-color: var(--md-filled-icon-button-toggle-unselected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-icon-color: var(--md-filled-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-state-layer-color: var(--md-filled-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-icon-color: var(--md-filled-icon-button-toggle-unselected-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-icon-color: var(--md-filled-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}.md3-icon-button{background-color:var(--_container-color);color:var(--_icon-color);--md-ripple-focus-state-layer-color:var(--_focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-icon-button:hover{color:var(--_hover-icon-color)}.md3-icon-button:focus{color:var(--_focus-icon-color)}.md3-icon-button:active{color:var(--_pressed-icon-color)}.md3-icon-button:disabled{background-color:var(--_disabled-container-color);color:var(--_disabled-icon-color)}.md3-icon-button--toggle-filled{--md-ripple-focus-state-layer-color:var(--_toggle-unselected-focus-state-layer-color);--md-ripple-hover-state-layer-color:var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_toggle-unselected-pressed-state-layer-color)}.md3-icon-button--toggle-filled:not(:disabled){background-color:var(--_unselected-container-color);color:var(--_toggle-unselected-icon-color)}.md3-icon-button--toggle-filled:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.md3-icon-button--toggle-filled:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.md3-icon-button--toggle-filled:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.md3-icon-button--on{--md-ripple-focus-state-layer-color:var(--_toggle-selected-focus-state-layer-color);--md-ripple-hover-state-layer-color:var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_toggle-selected-pressed-state-layer-color)}.md3-icon-button--on:not(:disabled){background-color:var(--_selected-container-color);color:var(--_toggle-selected-icon-color)}.md3-icon-button--on:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.md3-icon-button--on:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.md3-icon-button--on:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledIconButton = class MdFilledIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled': true,
        };
    }
};
MdFilledIconButton.styles = [styles$m, styles$k];
MdFilledIconButton = __decorate([
    e$7('md-filled-icon-button')
], MdFilledIconButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This variant can toggle between icons.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledTonalIconButtonToggle = class MdFilledTonalIconButtonToggle extends IconButtonToggle {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled-tonal': true,
            'md3-icon-button--toggle-filled-tonal': true,
        };
    }
};
MdFilledTonalIconButtonToggle.styles = [styles$m, styles$n];
MdFilledTonalIconButtonToggle = __decorate([
    e$7('md-filled-tonal-icon-button-toggle')
], MdFilledTonalIconButtonToggle);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class LinkIconButton extends IconButton {
    constructor() {
        super(...arguments);
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.linkHref = '';
        /**
         * Link buttons cannot be disabled.
         */
        this.disabled = false;
    }
    willUpdate() {
        this.disabled = false;
    }
    render() {
        return y `<div
        class="md3-icon-button ${o(this.getRenderClasses())}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        ${ripple(this.getRipple)}>
        ${this.renderFocusRing()}
        ${n(this.showRipple, this.renderRipple)}
        ${this.renderIcon()}
        ${this.renderTouchTarget()}
      <a class="md3-icon-button__link" href="${this.linkHref}"
          target="${l$2(this.linkTarget)}"
          aria-label="${l$2(this.ariaLabel)}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}">
      </a>
    </div>`;
    }
}
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], LinkIconButton.prototype, "linkHref", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], LinkIconButton.prototype, "linkTarget", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdStandardLinkIconButton = class MdStandardLinkIconButton extends LinkIconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--standard': true,
        };
    }
};
MdStandardLinkIconButton.styles = [styles$m, styles$l];
MdStandardLinkIconButton = __decorate([
    e$7('md-standard-link-icon-button')
], MdStandardLinkIconButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This variant can toggle between icons.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledIconButtonToggle = class MdFilledIconButtonToggle extends IconButtonToggle {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled': true,
            'md3-icon-button--toggle-filled': true,
        };
    }
};
MdFilledIconButtonToggle.styles = [styles$m, styles$k];
MdFilledIconButtonToggle = __decorate([
    e$7('md-filled-icon-button-toggle')
], MdFilledIconButtonToggle);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledLinkIconButton = class MdFilledLinkIconButton extends LinkIconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled': true,
        };
    }
};
MdFilledLinkIconButton.styles = [styles$m, styles$k];
MdFilledLinkIconButton = __decorate([
    e$7('md-filled-link-icon-button')
], MdFilledLinkIconButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdStandardIconButton = class MdStandardIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--standard': true,
        };
    }
};
MdStandardIconButton.styles = [styles$m, styles$l];
MdStandardIconButton = __decorate([
    e$7('md-standard-icon-button')
], MdStandardIconButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$j = i$6 `:host{--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, 9999px);--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, 9999px);--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, 9999px);--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, 9999px);--_container-size: var(--md-outlined-icon-button-container-size, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-unselected-outline-color: var(--md-outlined-icon-button-disabled-unselected-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-unselected-outline-opacity: var(--md-outlined-icon-button-disabled-unselected-outline-opacity, 0.12);--_focus-state-layer-opacity: var(--md-outlined-icon-button-focus-state-layer-opacity, 0.08);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #313033));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_selected-focus-state-layer-color: var(--md-outlined-icon-button-selected-focus-state-layer-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f4eff4));--_unselected-focus-icon-color: var(--md-outlined-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-outlined-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-outlined-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-outlined-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-icon-color: var(--md-outlined-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-color: var(--md-outlined-icon-button-unselected-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-outline-width: var(--md-outlined-icon-button-unselected-outline-width, 1px);--_unselected-pressed-icon-color: var(--md-outlined-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-state-layer-color: var(--md-outlined-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}.md3-icon-button--outlined{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-state-layer-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-icon-button--outlined::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.md3-icon-button--outlined:hover{color:var(--_unselected-hover-icon-color)}.md3-icon-button--outlined:focus{color:var(--_unselected-focus-icon-color)}.md3-icon-button--outlined:active{color:var(--_unselected-pressed-icon-color)}.md3-icon-button--outlined:disabled{color:var(--_disabled-icon-color)}.md3-icon-button--outlined:disabled::before{border-color:var(--_disabled-outline-color)}.md3-icon-button--outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute}.md3-icon-button--outlined.md3-icon-button--on::before{border-width:0}.md3-icon-button--on{--md-ripple-focus-state-layer-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-icon-button--on:not(:disabled){background-color:var(--_selected-container-color);color:var(--_selected-icon-color)}.md3-icon-button--on:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.md3-icon-button--on:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.md3-icon-button--on:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.md3-icon-button--on:disabled{background-color:var(--_disabled-selected-container-color)}@media(forced-colors: active){.md3-icon-button--on::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.md3-icon-button--on:disabled::before{border-color:var(--_disabled-outline-color)}}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdOutlinedIconButton = class MdOutlinedIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--outlined': true,
        };
    }
};
MdOutlinedIconButton.styles = [styles$m, styles$j];
MdOutlinedIconButton = __decorate([
    e$7('md-outlined-icon-button')
], MdOutlinedIconButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This variant can toggle between icons.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdOutlinedIconButtonToggle = class MdOutlinedIconButtonToggle extends IconButtonToggle {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--outlined': true,
        };
    }
};
MdOutlinedIconButtonToggle.styles = [styles$m, styles$j];
MdOutlinedIconButtonToggle = __decorate([
    e$7('md-outlined-icon-button-toggle')
], MdOutlinedIconButtonToggle);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledTonalLinkIconButton = class MdFilledTonalLinkIconButton extends LinkIconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--filled-tonal': true,
        };
    }
};
MdFilledTonalLinkIconButton.styles = [styles$m, styles$n];
MdFilledTonalLinkIconButton = __decorate([
    e$7('md-filled-tonal-link-icon-button')
], MdFilledTonalLinkIconButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This is a linkable variant.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdOutlinedLinkIconButton = class MdOutlinedLinkIconButton extends LinkIconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-icon-button--outlined': true,
        };
    }
};
MdOutlinedLinkIconButton.styles = [styles$m, styles$j];
MdOutlinedLinkIconButton = __decorate([
    e$7('md-outlined-link-icon-button')
], MdOutlinedLinkIconButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ListItemAvatar extends s$2 {
    constructor() {
        super(...arguments);
        this.avatar = '';
    }
    /**
     * @soyTemplate
     * @soyClasses imageClasses: .md3-list-item__avatar
     */
    render() {
        return y `
       <img src="${this.avatar}" alt="${l$2(this.altText)}"
        class="md3-list-item__avatar" />
     `;
    }
}
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemAvatar.prototype, "avatar", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", String)
], ListItemAvatar.prototype, "altText", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$i = i$6 `:host{--_list-item-leading-avatar-color: ;--_list-item-leading-avatar-shape: var(--md-list-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-list-item-leading-avatar-size, 40px)}.md3-list-item__avatar{border-radius:var(--_list-item-leading-avatar-shape);display:inline-flex;height:var(--_list-item-leading-avatar-size);margin-inline-start:16px;width:var(--_list-item-leading-avatar-size)}/*# sourceMappingURL=list-item-avatar-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListItemAvatar = class MdListItemAvatar extends ListItemAvatar {
};
MdListItemAvatar.styles = [styles$i];
MdListItemAvatar = __decorate([
    e$7('md-list-item-avatar')
], MdListItemAvatar);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ListItemVideo extends s$2 {
    constructor() {
        super(...arguments);
        this.media = 'video';
        this.video = '';
    }
    /** @soyTemplate */
    render() {
        return y `
        <img src="${this.video}" alt="${l$2(this.altText)}"
         class="md3-list-item__video" />
      `;
    }
}
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemVideo.prototype, "media", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemVideo.prototype, "video", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", String)
], ListItemVideo.prototype, "altText", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$h = i$6 `:host{--_list-item-leading-video-height: var(--md-list-item-video-list-item-leading-video-height, 64px);--_list-item-leading-video-width: var(--md-list-item-video-list-item-leading-video-width, 114px);--_list-item-leading-video-shape: var(--md-list-item-video-list-item-leading-video-shape, 0px);display:inline-flex}.md3-list-item__video{display:inline-flex;margin-block-end:12px;margin-block-start:12px;object-fit:cover;height:var(--_list-item-leading-video-height);width:var(--_list-item-leading-video-width);border-radius:var(--_list-item-leading-video-shape)}/*# sourceMappingURL=list-item-video-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListItemVideo = class MdListItemVideo extends ListItemVideo {
};
MdListItemVideo.styles = [styles$h];
MdListItemVideo = __decorate([
    e$7('md-list-item-video')
], MdListItemVideo);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdList = class MdList extends List {
};
MdList.styles = [styles$M];
MdList = __decorate([
    e$7('md-list')
], MdList);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ListItemImage extends s$2 {
    constructor() {
        super(...arguments);
        this.media = 'image';
        this.image = '';
    }
    /** @soyTemplate */
    render() {
        return y `
        <img src="${this.image}" alt="${l$2(this.altText)}"
         class="md3-list-item__image" />
      `;
    }
}
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemImage.prototype, "media", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemImage.prototype, "image", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", String)
], ListItemImage.prototype, "altText", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$g = i$6 `:host{--_list-item-leading-image-height: var(--md-list-item-image-list-item-leading-image-height, 56px);--_list-item-leading-image-width: var(--md-list-item-image-list-item-leading-image-width, 56px);--_list-item-leading-image-shape: var(--md-list-item-image-list-item-leading-image-shape, 0)}.md3-list-item__image{display:inline-flex;margin-block-end:8px;margin-block-start:8px;margin-inline-start:16px;height:var(--_list-item-leading-image-height);width:var(--_list-item-leading-image-width);border-radius:var(--_list-item-leading-image-shape)}/*# sourceMappingURL=list-item-image-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListItemImage = class MdListItemImage extends ListItemImage {
};
MdListItemImage.styles = [styles$g];
MdListItemImage = __decorate([
    e$7('md-list-item-image')
], MdListItemImage);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ListDivider extends s$2 {
    constructor() {
        super(...arguments);
        // @ts-ignore(b/264292293): Use `override` with TS 4.9+
        this.role = 'separator';
    }
    /** @soyTemplate */
    render() {
        return y `
       <li role="separator" class="md3-list__divider">
       </li>
     `;
    }
}
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    // tslint:disable-next-line:decorator-placement
    ,
    e$6({ type: String, attribute: 'data-role', noAccessor: true }),
    __metadata("design:type", String)
], ListDivider.prototype, "role", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$f = i$6 `:host{--_list-divider-color: var(--md-list-divider-list-divider-color, #c4c7c5);--_list-divider-height: var(--md-list-divider-list-divider-height, 1px)}.md3-list__divider{background-clip:content-box;background-color:var(--_list-divider-color);height:var(--_list-divider-height);padding:0}/*# sourceMappingURL=list-divider-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListDivider = class MdListDivider extends ListDivider {
};
MdListDivider.styles = [styles$f];
MdListDivider = __decorate([
    e$7('md-list-divider')
], MdListDivider);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListItem = class MdListItem extends ListItem {
};
MdListItem.styles = [styles$R];
MdListItem = __decorate([
    e$7('md-list-item')
], MdListItem);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ListItemIcon extends s$2 {
    constructor() {
        super(...arguments);
        this.media = 'icon';
    }
    /** @soyTemplate */
    render() {
        return y `
      <span class="md3-list-item__icon"><slot></slot></span>
    `;
    }
}
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], ListItemIcon.prototype, "media", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$e = i$6 `:host{--_list-item-icon-color: var(--md-list-item-icon-list-item-icon-color, #000);--_list-item-icon-size: var(--md-list-item-icon-list-item-icon-size, 0);--_list-item-icon-opacity: var(--md-list-item-icon-list-item-icon-opacity, 1)}.md3-list-item__icon{color:var(--_list-item-icon-color);opacity:var(--_list-item-icon-opacity);font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:var(--_list-item-icon-size);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;height:100%;width:100%;padding-inline-start:16px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}/*# sourceMappingURL=list-item-icon-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdListItemIcon = class MdListItemIcon extends ListItemIcon {
};
MdListItemIcon.styles = [styles$e];
MdListItemIcon = __decorate([
    e$7('md-list-item-icon')
], MdListItemIcon);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** Base class for menu item component. */
class MenuItem extends ListItem {
    constructor() {
        super(...arguments);
        this.role = 'menuitem';
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdMenuItem = class MdMenuItem extends MenuItem {
};
MdMenuItem.styles = [styles$R];
MdMenuItem = __decorate([
    e$7('md-menu-item')
], MdMenuItem);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdMenuSurface = class MdMenuSurface extends MenuSurface {
};
MdMenuSurface.styles = [styles$U];
MdMenuSurface = __decorate([
    e$7('md-menu-surface')
], MdMenuSurface);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const cssClasses = {
    MENU_SELECTED_LIST_ITEM: 'md3-menu-item--selected',
    MENU_SELECTION_GROUP: 'md3-menu__selection-group',
    ROOT: 'md3-menu',
};
const strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.md3-list,.md3-deprecated-list',
    SELECTED_EVENT: 'MDCMenu:selected',
    SKIP_RESTORE_FOCUS: 'data-menu-item-skip-restore-focus',
};
const numbers = {
    FOCUS_ROOT_INDEX: -1,
};

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const LIST_ITEM_DISABLED_CLASS = 'md3-list-item--disabled';
class MDCMenuFoundation {
    constructor(adapter) {
        this.closeAnimationEndTimerId = 0;
        this.selectedIndex = -1;
        this.adapter = { ...MDCMenuFoundation.defaultAdapter, ...adapter };
    }
    static get cssClasses() {
        return cssClasses;
    }
    static get strings() {
        return strings;
    }
    static get numbers() {
        return numbers;
    }
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    static get defaultAdapter() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClassToElementAtIndex: () => undefined,
            removeClassFromElementAtIndex: () => undefined,
            addAttributeToElementAtIndex: () => undefined,
            removeAttributeFromElementAtIndex: () => undefined,
            getAttributeFromElementAtIndex: () => null,
            elementContainsClass: () => false,
            closeSurface: () => undefined,
            getElementIndex: () => -1,
            notifySelected: () => undefined,
            getMenuItemCount: () => 0,
            getSelectedSiblingOfItemAtIndex: () => -1,
            isSelectableItemAtIndex: () => false,
        };
        // tslint:enable:object-literal-sort-keys
    }
    destroy() {
        if (this.closeAnimationEndTimerId) {
            clearTimeout(this.closeAnimationEndTimerId);
        }
        this.adapter.closeSurface();
    }
    handleKeydown(evt) {
        const { key, keyCode } = evt;
        const isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter.closeSurface(/** skipRestoreFocus */ true);
        }
    }
    handleItemAction(listItem) {
        const index = this.adapter.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter.notifySelected({ index });
        const skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings.SKIP_RESTORE_FOCUS) === 'true';
        this.adapter.closeSurface(skipRestoreFocus);
        // Wait for the menu to close before adding/removing classes that affect
        // styles.
        this.closeAnimationEndTimerId = setTimeout(() => {
            // Recompute the index in case the menu contents have changed.
            const recomputedIndex = this.adapter.getElementIndex(listItem);
            if (recomputedIndex >= 0 &&
                this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
                this.setSelectedIndex(recomputedIndex);
            }
        }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    }
    /** @return Index of the currently selected list item within the menu. */
    getSelectedIndex() {
        return this.selectedIndex;
    }
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    setSelectedIndex(index) {
        this.validatedIndex(index);
        if (!this.adapter.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        const prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings.ARIA_CHECKED_ATTR);
            this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter.addClassToElementAtIndex(index, cssClasses.MENU_SELECTED_LIST_ITEM);
        this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_CHECKED_ATTR, 'true');
        this.selectedIndex = index;
    }
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    setEnabled(index, isEnabled) {
        this.validatedIndex(index);
        if (isEnabled) {
            this.adapter.removeClassFromElementAtIndex(index, LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter.addClassToElementAtIndex(index, LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_DISABLED_ATTR, 'true');
        }
    }
    validatedIndex(index) {
        const menuSize = this.adapter.getMenuItemCount();
        const isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 * @fires opened
 * @fires closed
 */
class Menu extends s$2 {
    constructor() {
        super(...arguments);
        this.listElementInternal = null;
        this.anchor = null;
        this.open = false;
        this.quick = false;
        this.corner = 'BOTTOM_START';
        this.x = null;
        this.y = null;
        this.absolute = false;
        this.activatable = false;
        this.fixed = false;
        this.forceGroupSelection = false;
        this.fullwidth = false;
        this.flipMenuHorizontally = false;
        this.stayOpenOnBodyClick = false;
        this.skipRestoreFocus = false;
        this.defaultFocus = 'LIST_ROOT';
        this.listUpdateComplete = null;
    }
    get listElement() {
        if (!this.listElementInternal) {
            this.listElementInternal = this.renderRoot.querySelector('md-list');
            return this.listElementInternal;
        }
        return this.listElementInternal;
    }
    get items() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.items;
        }
        return [];
    }
    render() {
        return y `
      <md-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .flipMenuHorizontally=${this.flipMenuHorizontally}
          .skipRestoreFocus=${this.skipRestoreFocus}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="md3-menu"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <md-list
          aria-label="${l$2(this.ariaLabel)}"
          role=${'menu'}
          .listTabIndex=${-1}
          .listItemTagName=${this.getMenuItemTagName()}
          @action=${this.onAction}>
        <slot></slot>
      </md-list>
    </md-menu-surface>`;
    }
    getMenuItemTagName() {
        return 'md-menu-item';
    }
    createAdapter() {
        return {
            addClassToElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.classList.add(className);
            },
            removeClassFromElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.classList.remove(className);
            },
            addAttributeToElementAtIndex: (index, attr, value) => {
                // TODO(b/240174946): This method is only used for setting
                // `aria-checked` and `aria-disabled` on the menu items when selected
                // and disabled states change. Remove this in favor of adding to the
                // template declaratively.
            },
            removeAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.removeAttribute(attr);
            },
            getAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return null;
                }
                const element = listElement.items[index];
                if (!element) {
                    return null;
                }
                return element.getAttribute(attr);
            },
            elementContainsClass: (element, className) => element.classList.contains(className),
            closeSurface: (skipRestoreFocus) => {
                this.skipRestoreFocus = Boolean(skipRestoreFocus);
                this.open = false;
            },
            getElementIndex: (element) => {
                const listElement = this.listElement;
                if (listElement) {
                    return listElement.items.indexOf(element);
                }
                return -1;
            },
            notifySelected: () => { },
            getMenuItemCount: () => {
                const listElement = this.listElement;
                if (!listElement) {
                    return 0;
                }
                return listElement.items.length;
            },
            getSelectedSiblingOfItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return -1;
                }
                // TODO(b/240177152): Remove/refactor this when implementing keyboard
                // navigation support.
                // const elementAtIndex = listElement.items[index];
                // if (!elementAtIndex || !elementAtIndex.group) {
                //   return -1;
                // }
                // for (let i = 0; i < listElement.items.length; i++) {
                //   if (i === index) {
                //     continue;
                //   }
                //   const current = listElement.items[i];
                //   if (current.selected && current.group === elementAtIndex.group) {
                //     return i;
                //   }
                // }
                return -1;
            },
            isSelectableItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return false;
                }
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex) {
                    return false;
                }
                return elementAtIndex.hasAttribute('group');
            },
        };
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onAction(evt) {
        const listElement = this.listElement;
        if (this.mdcFoundation && listElement) {
            const el = evt.detail.item;
            if (el) {
                this.mdcFoundation.handleItemAction(el);
            }
        }
    }
    onOpened() {
        this.skipRestoreFocus = false;
        this.open = true;
        this.listElement?.resetActiveListItem();
        switch (this.defaultFocus) {
            case 'FIRST_ITEM':
                this.listElement?.activateFirstItem();
                break;
            case 'LAST_ITEM':
                this.listElement?.activateLastItem();
                break;
            case 'NONE':
                // Do nothing.
                break;
            case 'LIST_ROOT':
            default:
                this.listElement?.focus();
                break;
        }
    }
    onClosed() {
        this.open = false;
    }
    // tslint:disable:ban-ts-suppressions
    async getUpdateComplete() {
        await this.listUpdateComplete;
        // @ts-ignore
        const result = await super.getUpdateComplete();
        return result;
    }
    // tslint:enable:ban-ts-suppressions
    async firstUpdated() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        this.mdcFoundation = new MDCMenuFoundation(this.createAdapter());
        const listElement = this.listElement;
        if (listElement) {
            this.listUpdateComplete = listElement.updateComplete;
            await this.listUpdateComplete;
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
__decorate([
    i$3('.md3-menu'),
    __metadata("design:type", MenuSurface)
], Menu.prototype, "mdcRoot", void 0);
__decorate([
    i$3('slot'),
    __metadata("design:type", HTMLSlotElement)
], Menu.prototype, "slotElement", void 0);
__decorate([
    e$6({ type: Object }),
    __metadata("design:type", HTMLElement)
], Menu.prototype, "anchor", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], Menu.prototype, "ariaLabel", void 0);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Menu.prototype, "open", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "quick", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], Menu.prototype, "corner", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Number)
], Menu.prototype, "x", void 0);
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Number)
], Menu.prototype, "y", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "absolute", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "activatable", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "fixed", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "forceGroupSelection", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "fullwidth", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "flipMenuHorizontally", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Menu.prototype, "skipRestoreFocus", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], Menu.prototype, "defaultFocus", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$d = i$6 `:host{--_cascading-menu-indicator-icon-color: var(--md-menu-cascading-menu-indicator-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_cascading-menu-indicator-icon-size: var(--md-menu-cascading-menu-indicator-icon-size, 24px);--_container-color: var(--md-menu-container-color, var(--md-sys-color-surface, #fffbfe));--_container-elevation: var(--md-menu-container-elevation, 2);--_container-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-menu-container-shape, 4px);--_container-surface-tint-layer-color: var(--md-menu-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_divider-color: var(--md-menu-divider-color, var(--md-sys-color-surface-variant, #e7e0ec));--_divider-height: var(--md-menu-divider-height, 1px);--_list-item-container-height: var(--md-menu-list-item-container-height, 48px);--_list-item-disabled-label-text-color: var(--md-menu-list-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-disabled-label-text-opacity: var(--md-menu-list-item-disabled-label-text-opacity, 0.38);--_list-item-focus-label-text-color: var(--md-menu-list-item-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-focus-state-layer-color: var(--md-menu-list-item-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-focus-state-layer-opacity: var(--md-menu-list-item-focus-state-layer-opacity, 0.12);--_list-item-hover-label-text-color: var(--md-menu-list-item-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-hover-state-layer-color: var(--md-menu-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-hover-state-layer-opacity: var(--md-menu-list-item-hover-state-layer-opacity, 0.08);--_list-item-label-text-color: var(--md-menu-list-item-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-label-text-font: var(--md-menu-list-item-label-text-font, Roboto);--_list-item-label-text-line-height: var(--md-menu-list-item-label-text-line-height, 1.25rem);--_list-item-label-text-size: var(--md-menu-list-item-label-text-size, 0.875rem);--_list-item-label-text-tracking: var(--md-menu-list-item-label-text-tracking, 0.006rem);--_list-item-label-text-type: var(--md-menu-list-item-label-text-type, 500 0.875rem / 1.25rem Roboto);--_list-item-label-text-weight: var(--md-menu-list-item-label-text-weight, 500);--_list-item-pressed-label-text-color: var(--md-menu-list-item-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-pressed-state-layer-color: var(--md-menu-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-pressed-state-layer-opacity: var(--md-menu-list-item-pressed-state-layer-opacity, 0.12);--_list-item-selected-container-color: var(--md-menu-list-item-selected-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_list-item-with-leading-icon-disabled-leading-icon-color: var(--md-menu-list-item-with-leading-icon-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-with-leading-icon-disabled-leading-icon-opacity: var(--md-menu-list-item-with-leading-icon-disabled-leading-icon-opacity, 0.38);--_list-item-with-leading-icon-focus-icon-color: var(--md-menu-list-item-with-leading-icon-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-leading-icon-hover-icon-color: var(--md-menu-list-item-with-leading-icon-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-leading-icon-leading-icon-color: var(--md-menu-list-item-with-leading-icon-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-leading-icon-leading-icon-size: var(--md-menu-list-item-with-leading-icon-leading-icon-size, 24px);--_list-item-with-leading-icon-pressed-icon-color: var(--md-menu-list-item-with-leading-icon-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-trailing-icon-disabled-trailing-icon-color: var(--md-menu-list-item-with-trailing-icon-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_list-item-with-trailing-icon-disabled-trailing-icon-opacity: var(--md-menu-list-item-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);--_list-item-with-trailing-icon-focus-icon-color: var(--md-menu-list-item-with-trailing-icon-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-trailing-icon-hover-icon-color: var(--md-menu-list-item-with-trailing-icon-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-trailing-icon-pressed-icon-color: var(--md-menu-list-item-with-trailing-icon-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-trailing-icon-trailing-icon-color: var(--md-menu-list-item-with-trailing-icon-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-with-trailing-icon-trailing-icon-size: var(--md-menu-list-item-with-trailing-icon-trailing-icon-size, 24px)}.md3-menu{--md-menu-surface-container-elevation:var(--_container-elevation);--md-menu-surface-container-shape:var(--_container-shape);--md-menu-surface-container-shadow-color:var(--_container-shadow-color);--md-menu-surface-container-surface-tint-layer-color:var(--_container-surface-tint-layer-color);--md-list-container-color:var(--_container-color);--md-list-container-surface-tint-layer-color:var(--_container-surface-tint-layer-color);--md-list-container-elevation:var(--_container-elevation);--md-list-list-item-container-color:var(--_container-color);--md-list-list-item-one-line-container-height:var(--_list-item-container-height);--md-list-list-item-disabled-label-text-color:var(--_list-item-disabled-label-text-color);--md-list-list-item-disabled-label-text-opacity:var(--_list-item-disabled-label-text-opacity);--md-list-list-item-hover-label-text-color:var(--_list-item-hover-label-text-color);--md-list-list-item-hover-state-layer-color:var(--_list-item-hover-state-layer-color);--md-list-list-item-hover-state-layer-opacity:var(--_list-item-hover-state-layer-opacity);--md-list-list-item-label-text-color:var(--_list-item-label-text-color);--md-list-list-item-label-text-font:var(--_list-item-label-text-font);--md-list-list-item-label-text-line-height:var(--_list-item-label-text-line-height);--md-list-list-item-label-text-size:var(--_list-item-label-text-size);--md-list-list-item-label-text-tracking:var(--_list-item-label-text-tracking);--md-list-list-item-label-text-weight:var(--_list-item-label-text-tracking);--md-list-list-item-disabled-leading-icon-color:var(--_list-item-with-leading-icon-disabled-leading-icon-color);--md-list-list-item-disabled-leading-icon-opacity:var(--_list-item-with-leading-icon-disabled-leading-icon-opacity);--md-list-list-item-hover-leading-icon-color:var(--_list-item-with-leading-icon-hover-icon-color);--md-list-list-item-leading-icon-color:var(--_list-item-with-leading-icon-leading-icon-color);--md-list-list-item-leading-icon-size:var(--_list-item-with-leading-icon-leading-icon-size);--md-list-list-item-disabled-trailing-icon-color:var(--_list-item-with-trailing-icon-disabled-trailing-icon-color);--md-list-list-item-disabled-trailing-icon-opacity:var(--_list-item-with-trailing-icon-disabled-trailing-icon-opacity);--md-list-list-item-hover-trailing-icon-color:var(--_list-item-with-trailing-icon-hover-icon-color);--md-list-list-item-trailing-icon-color:var(--_list-item-with-trailing-icon-trailing-icon-color);--md-list-list-item-trailing-icon-size:var(--_list-item-with-leading-icon-trailing-icon-size)}/*# sourceMappingURL=menu-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdMenu = class MdMenu extends Menu {
};
MdMenu.styles = [styles$d];
MdMenu = __decorate([
    e$7('md-menu')
], MdMenu);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Menu button component that automatically attaches a slotted menu to the
 * slotted button.
 */
class MenuButton extends s$2 {
    get button() {
        if (this.buttonAssignedElements.length === 0) {
            throw new Error('MenuButton: Missing a slot="button" element.');
        }
        return this.buttonAssignedElements[0];
    }
    get menu() {
        if (this.menuAssignedElements.length === 0) {
            throw new Error('MenuButton: Missing a slot="menu" element.');
        }
        if (!(this.menuAssignedElements[0] instanceof Menu)) {
            throw new Error('MenuButton: The slot="menu" element must be an instance of the ' +
                'Menu component.');
        }
        return this.menuAssignedElements[0];
    }
    render() {
        return y `
      <div class="md3-menu-button">
        <span>
          <slot name="button"
              @click=${this.handleButtonClick}
              @keydown=${this.handleButtonKeydown}>
          </slot>
        </span>
        <span><slot name="menu"></slot></span>
      </div>
    `;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (!this.menu.anchor) {
            this.menu.anchor = this.button;
        }
    }
    /**
     * If key event is ArrowUp or ArrowDown, opens the menu.
     */
    handleButtonKeydown(event) {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')
            return;
        if (event.key === 'ArrowUp') {
            this.menu.defaultFocus = 'LAST_ITEM';
        }
        else if (event.key === 'ArrowDown') {
            this.menu.defaultFocus = 'FIRST_ITEM';
        }
        this.menu.show();
    }
    /**
     * Toggles the menu on button click.
     */
    handleButtonClick(event) {
        if (this.menu.open) {
            this.menu.close();
            return;
        }
        // Whether the click is from SPACE or ENTER keypress on a button, for which
        // the browser fires a synthetic click event.
        const isSyntheticClickEvent = event.pointerType === '';
        if (isSyntheticClickEvent) {
            // Key events should automatically focus on first menu item.
            this.menu.defaultFocus = 'FIRST_ITEM';
        }
        else {
            this.menu.defaultFocus = 'LIST_ROOT';
        }
        this.menu.show();
    }
}
__decorate([
    l$3({ slot: 'button', flatten: true }),
    __metadata("design:type", Array)
], MenuButton.prototype, "buttonAssignedElements", void 0);
__decorate([
    l$3({ slot: 'menu', flatten: true }),
    __metadata("design:type", Array)
], MenuButton.prototype, "menuAssignedElements", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$c = i$6 `.md3-menu-button{overflow:visible;position:relative}/*# sourceMappingURL=menu-button-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdMenuButton = class MdMenuButton extends MenuButton {
};
MdMenuButton.styles = [styles$c];
MdMenuButton = __decorate([
    e$7('md-menu-button')
], MdMenuButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class NavigationBar extends s$2 {
    constructor() {
        super(...arguments);
        this.activeIndex = 0;
        this.hideInactiveLabels = false;
        this.tabs = [];
    }
    /** @soyTemplate */
    render() {
        return y `<div class="md3-navigation-bar"
            role="tablist"
            aria-label="${l$2(this.ariaLabel || undefined)}"
            @keydown="${this.handleKeydown}"
            @navigation-tab-interaction="${this.handleNavigationTabInteraction}"
            @navigation-tab-rendered=${this.handleNavigationTabConnected}
          ><md-elevation shadow surface
          ></md-elevation><div class="md3-navigation-bar__tabs-slot-container"
        ><slot></slot></div></div>`;
    }
    updated(changedProperties) {
        if (changedProperties.has('activeIndex')) {
            this.onActiveIndexChange(this.activeIndex);
            this.dispatchEvent(new CustomEvent('navigation-bar-activated', {
                detail: { tab: this.tabs[this.activeIndex], activeIndex: this.activeIndex },
                bubbles: true,
                composed: true
            }));
        }
        if (changedProperties.has('hideInactiveLabels')) {
            this.onHideInactiveLabelsChange(this.hideInactiveLabels);
        }
        if (changedProperties.has('tabs')) {
            this.onHideInactiveLabelsChange(this.hideInactiveLabels);
            this.onActiveIndexChange(this.activeIndex);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.layout();
    }
    layout() {
        if (!this.tabsElement)
            return;
        const navTabs = [];
        for (const node of this.tabsElement) {
            navTabs.push(node);
        }
        this.tabs = navTabs;
    }
    handleNavigationTabConnected(event) {
        const target = event.target;
        if (this.tabs.indexOf(target) === -1) {
            this.layout();
        }
    }
    handleNavigationTabInteraction(event) {
        this.activeIndex = this.tabs.indexOf(event.detail.state);
    }
    handleKeydown(event) {
        const key = event.key;
        const focusedTabIndex = this.tabs.findIndex((tab) => {
            return tab.matches(':focus-within');
        });
        const isRTL = isRtl(this);
        const maxIndex = this.tabs.length - 1;
        if (key === 'Enter' || key === ' ') {
            this.activeIndex = focusedTabIndex;
            return;
        }
        if (key === 'Home') {
            this.tabs[0].focus();
            return;
        }
        if (key === 'End') {
            this.tabs[maxIndex].focus();
            return;
        }
        const toNextTab = (key === 'ArrowRight' && !isRTL) || (key === 'ArrowLeft' && isRTL);
        if (toNextTab && focusedTabIndex === maxIndex) {
            this.tabs[0].focus();
            return;
        }
        if (toNextTab) {
            this.tabs[focusedTabIndex + 1].focus();
            return;
        }
        const toPreviousTab = (key === 'ArrowLeft' && !isRTL) || (key === 'ArrowRight' && isRTL);
        if (toPreviousTab && focusedTabIndex === 0) {
            this.tabs[maxIndex].focus();
            return;
        }
        if (toPreviousTab) {
            this.tabs[focusedTabIndex - 1].focus();
            return;
        }
    }
    onActiveIndexChange(value) {
        if (!this.tabs[value]) {
            throw new Error('NavigationBar: activeIndex is out of bounds.');
        }
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = i === value;
        }
    }
    onHideInactiveLabelsChange(value) {
        for (const tab of this.tabs) {
            tab.hideInactiveLabel = value;
        }
    }
}
__decorate([
    e$6({ type: Number }),
    __metadata("design:type", Object)
], NavigationBar.prototype, "activeIndex", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], NavigationBar.prototype, "hideInactiveLabels", void 0);
__decorate([
    l$3({ flatten: true }),
    __metadata("design:type", Array)
], NavigationBar.prototype, "tabsElement", void 0);
__decorate([
    ariaProperty,
    e$6({ attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], NavigationBar.prototype, "ariaLabel", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$b = i$6 `:host{--_active-indicator-color: var(--md-navigation-bar-active-indicator-color, var(--md-sys-color-secondary-container, #e8def8));--_active-indicator-height: var(--md-navigation-bar-active-indicator-height, 32px);--_active-indicator-shape: var(--md-navigation-bar-active-indicator-shape, 9999px);--_active-indicator-width: var(--md-navigation-bar-active-indicator-width, 64px);--_active-focus-icon-color: var(--md-navigation-bar-active-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-focus-label-text-color: var(--md-navigation-bar-active-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-focus-state-layer-color: var(--md-navigation-bar-active-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-hover-icon-color: var(--md-navigation-bar-active-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-hover-label-text-color: var(--md-navigation-bar-active-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-hover-state-layer-color: var(--md-navigation-bar-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-icon-color: var(--md-navigation-bar-active-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-label-text-color: var(--md-navigation-bar-active-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-label-text-weight: var(--md-navigation-bar-active-label-text-weight, 700);--_active-pressed-icon-color: var(--md-navigation-bar-active-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-pressed-label-text-color: var(--md-navigation-bar-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-pressed-state-layer-color: var(--md-navigation-bar-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_badge-color: var(--md-navigation-bar-badge-color, var(--md-sys-color-error, #b3261e));--_badge-shape: var(--md-navigation-bar-badge-shape, 3px);--_badge-size: var(--md-navigation-bar-badge-size, 6px);--_container-color: var(--md-navigation-bar-container-color, var(--md-sys-color-surface, #fffbfe));--_container-elevation: var(--md-navigation-bar-container-elevation, 2);--_container-height: var(--md-navigation-bar-container-height, 80px);--_container-shadow-color: var(--md-navigation-bar-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-navigation-bar-container-shape, 0px);--_container-surface-tint-layer-color: var(--md-navigation-bar-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-navigation-bar-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-navigation-bar-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-navigation-bar-icon-size, 24px);--_inactive-focus-icon-color: var(--md-navigation-bar-inactive-focus-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-focus-label-text-color: var(--md-navigation-bar-inactive-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-focus-state-layer-color: var(--md-navigation-bar-inactive-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-hover-icon-color: var(--md-navigation-bar-inactive-hover-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-hover-label-text-color: var(--md-navigation-bar-inactive-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-hover-state-layer-color: var(--md-navigation-bar-inactive-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-icon-color: var(--md-navigation-bar-inactive-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-label-text-color: var(--md-navigation-bar-inactive-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-pressed-icon-color: var(--md-navigation-bar-inactive-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-pressed-label-text-color: var(--md-navigation-bar-inactive-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-pressed-state-layer-color: var(--md-navigation-bar-inactive-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_label-text-font: var(--md-navigation-bar-label-text-font, Roboto);--_label-text-line-height: var(--md-navigation-bar-label-text-line-height, 1rem);--_label-text-size: var(--md-navigation-bar-label-text-size, 0.75rem);--_label-text-tracking: var(--md-navigation-bar-label-text-tracking, 0.031rem);--_label-text-type: var(--md-navigation-bar-label-text-type, 500 0.75rem / 1rem Roboto);--_label-text-weight: var(--md-navigation-bar-label-text-weight, 500);--_large-badge-color: var(--md-navigation-bar-large-badge-color, var(--md-sys-color-error, #b3261e));--_large-badge-shape: var(--md-navigation-bar-large-badge-shape, 8px);--_large-badge-size: var(--md-navigation-bar-large-badge-size, 16px);--_pressed-state-layer-opacity: var(--md-navigation-bar-pressed-state-layer-opacity, 0.12);width:100%}.md3-navigation-bar{display:flex;position:relative;width:100%;background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height);--md-elevation-duration:280ms;--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-elevation-surface-tint-color:var(--_container-surface-tint-layer-color)}.md3-navigation-bar .md3-navigation-bar__tabs-slot-container{display:inherit;width:inherit}md-elevation{inset:0;position:absolute;z-index:0}/*# sourceMappingURL=navigation-bar-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdNavigationBar = class MdNavigationBar extends NavigationBar {
};
MdNavigationBar.styles = [styles$b];
MdNavigationBar = __decorate([
    e$7('md-navigation-bar')
], MdNavigationBar);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class NavigationDrawer extends s$2 {
    constructor() {
        super(...arguments);
        // tslint:disable-next-line:no-new-decorators
        this.ariaModal = 'false';
        this.opened = false;
        this.pivot = 'end';
    }
    /** @soyTemplate */
    render() {
        const ariaExpanded = this.opened ? 'true' : 'false';
        const ariaHidden = !this.opened ? 'true' : 'false';
        return y `
      <div
        aria-describedby="${l$2(this.ariaDescribedBy)}"
        aria-expanded="${ariaExpanded}"
        aria-hidden="${ariaHidden}"
        aria-label="${l$2(this.ariaLabel)}"
        aria-labelledby="${l$2(this.ariaLabelledBy)}"
        aria-modal="${this.ariaModal}"
        class="md3-navigation-drawer ${this.getRenderClasses()}"
        role="dialog">
        <md-elevation shadow surface></md-elevation>
        <div class="md3-navigation-drawer__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    /** @soyTemplate classMap */
    getRenderClasses() {
        return o({
            'md3-navigation-drawer--opened': this.opened,
            'md3-navigation-drawer--pivot-at-start': this.pivot === 'start',
        });
    }
    updated(changedProperties) {
        if (changedProperties.has('opened')) {
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('navigation-drawer-changed', { detail: { opened: this.opened }, bubbles: true, composed: true }));
            }, 250);
        }
    }
}
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-describedby', noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaDescribedBy", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ attribute: 'data-aria-modal', type: String, noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaModal", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-labelledby', noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$6({ type: Boolean }) // tslint:disable-next-line:no-new-decorators
    ,
    __metadata("design:type", Object)
], NavigationDrawer.prototype, "opened", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], NavigationDrawer.prototype, "pivot", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$a = i$6 `:host{--_container-shape-start-start: var(--md-navigation-drawer-container-shape-start-start, 0);--_container-shape-start-end: var(--md-navigation-drawer-container-shape-start-end, 16px);--_container-shape-end-end: var(--md-navigation-drawer-container-shape-end-end, 16px);--_container-shape-end-start: var(--md-navigation-drawer-container-shape-end-start, 0);--_container-color: var(--md-navigation-drawer-container-color, #fff);--_container-height: var(--md-navigation-drawer-container-height, 100%);--_container-surface-tint-layer-color: ;--_container-width: var(--md-navigation-drawer-container-width, 360px);--_divider-color: var(--md-navigation-drawer-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-container-elevation, 1);--_standard-container-elevation: var(--md-navigation-drawer-standard-container-elevation, 0);--md-elevation-level:var(--_standard-container-elevation);--md-elevation-shadow-color:var(--_divider-color);--md-elevation-surface-tint-color:var(--_container-surface-tint-layer-color)}:host{display:flex}.md3-navigation-drawer{inline-size:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;overflow-y:auto;visibility:hidden;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}md-elevation{inset:0;position:absolute;width:inherit;z-index:0}.md3-navigation-drawer--opened{visibility:visible;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer__slot-content{display:flex;flex-direction:column;position:relative}/*# sourceMappingURL=navigation-drawer-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$9 = i$6 `.md3-navigation-drawer-modal{background-color:var(--_container-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdNavigationDrawer = class MdNavigationDrawer extends NavigationDrawer {
};
MdNavigationDrawer.styles = [styles$9, styles$a];
MdNavigationDrawer = __decorate([
    e$7('md-navigation-drawer')
], MdNavigationDrawer);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class NavigationDrawerModal extends s$2 {
    constructor() {
        super(...arguments);
        // tslint:disable-next-line:no-new-decorators
        this.ariaModal = 'false';
        this.opened = false;
        this.pivot = 'end';
    }
    /** @soyTemplate */
    render() {
        const ariaExpanded = this.opened ? 'true' : 'false';
        const ariaHidden = !this.opened ? 'true' : 'false';
        return y `
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-describedby="${l$2(this.ariaDescribedBy)}"
        aria-expanded="${ariaExpanded}"
        aria-hidden="${ariaHidden}"
        aria-label="${l$2(this.ariaLabel)}"
        aria-labelledby="${l$2(this.ariaLabelledBy)}"
        aria-modal="${this.ariaModal}"
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"><div class="md3-elevation-overlay"
        ></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    /** @soyTemplate classMap */
    getScrimClasses() {
        return o({
            'md3-navigation-drawer-modal--scrim-visible': this.opened,
        });
    }
    /** @soyTemplate classMap */
    getRenderClasses() {
        return o({
            'md3-navigation-drawer-modal--opened': this.opened,
            'md3-navigation-drawer-modal--pivot-at-start': this.pivot === 'start',
        });
    }
    updated(changedProperties) {
        if (changedProperties.has('opened')) {
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('navigation-drawer-changed', { detail: { opened: this.opened }, bubbles: true, composed: true }));
            }, 250);
        }
    }
    handleKeyDown(e) {
        if (e.code === 'Escape') {
            this.opened = false;
        }
    }
    handleScrimClick() {
        this.opened = !this.opened;
    }
}
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-describedby', noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawerModal.prototype, "ariaDescribedBy", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawerModal.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ attribute: 'data-aria-modal', type: String, noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawerModal.prototype, "ariaModal", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-labelledby', noAccessor: true }),
    __metadata("design:type", String)
], NavigationDrawerModal.prototype, "ariaLabelledBy", void 0);
__decorate([
    e$6({ type: Boolean }) // tslint:disable-next-line:no-new-decorators
    ,
    __metadata("design:type", Object)
], NavigationDrawerModal.prototype, "opened", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], NavigationDrawerModal.prototype, "pivot", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$8 = i$6 `:host{--_container-shape-start-start: var(--md-navigation-drawer-modal-container-shape-start-start, 0);--_container-shape-start-end: var(--md-navigation-drawer-modal-container-shape-start-end, 16px);--_container-shape-end-end: var(--md-navigation-drawer-modal-container-shape-end-end, 16px);--_container-shape-end-start: var(--md-navigation-drawer-modal-container-shape-end-start, 0);--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-surface-tint-layer-color: ;--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: ;--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level:var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}/*# sourceMappingURL=navigation-drawer-modal-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdNavigationDrawerModal = class MdNavigationDrawerModal extends NavigationDrawerModal {
};
MdNavigationDrawerModal.styles = [styles$9, styles$8];
MdNavigationDrawerModal = __decorate([
    e$7('md-navigation-drawer-modal')
], MdNavigationDrawerModal);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class NavigationTab extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.active = false;
        this.hideInactiveLabel = false;
        this.badgeValue = '';
        this.showBadge = false;
        this.showFocusRing = false;
    }
    /** @soyTemplate */
    render() {
        return y `
      <button
        class="md3-navigation-tab ${o(this.getRenderClasses())}"
        role="tab"
        aria-selected="${this.active}"
        aria-label="${l$2(this.ariaLabel)}"
        tabindex="${this.active ? 0 : -1}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointercancel="${this.handlePointerCancel}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
        @click="${this.handleClick}"
        @contextmenu="${this.handleContextMenu}"
      >${this.renderFocusRing()}${this.renderRipple()}
        <span aria-hidden="true" class="md3-navigation-tab__icon-content"
          ><span class="md3-navigation-tab__active-indicator"
            ></span><span class="md3-navigation-tab__icon"
          ><slot name="inactiveIcon"></slot
        ></span>
        <span class="md3-navigation-tab__icon md3-navigation-tab__icon--active"
          ><slot name="activeIcon"></slot
        ></span>${this.renderBadge()}</span
        >${this.renderLabel()}
      </button>`;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-navigation-tab--hide-inactive-label': this.hideInactiveLabel,
            'md3-navigation-tab--active': this.active,
        };
    }
    /** @soyTemplate */
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return y `<md-ripple class="md3-navigation-tab__ripple"></md-ripple>`;
    }
    /** @soyTemplate */
    renderBadge() {
        return this.showBadge ?
            y `<md-badge .value="${this.badgeValue}"></md-badge>` :
            '';
    }
    /** @soyTemplate */
    renderLabel() {
        const ariaHidden = this.ariaLabel ? 'true' : 'false';
        return !this.label ?
            '' :
            y `
        <span aria-hidden="${ariaHidden}" class="md3-navigation-tab__label-text">${this.label}</span>`;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const event = new Event('navigation-tab-rendered', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            buttonElement.blur();
        }
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress(options) {
        this.ripple.endPress();
        super.endPress(options);
        if (!options.cancelled) {
            this.dispatchEvent(new CustomEvent('navigation-tab-interaction', { detail: { state: this }, bubbles: true, composed: true }));
        }
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerUp(e) {
        super.handlePointerUp(e);
    }
    handlePointerEnter(e) {
        this.ripple.beginHover(e);
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
}
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "active", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "hideInactiveLabel", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", String)
], NavigationTab.prototype, "label", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "badgeValue", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], NavigationTab.prototype, "showBadge", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], NavigationTab.prototype, "showFocusRing", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], NavigationTab.prototype, "ariaLabel", void 0);
__decorate([
    i$3('button'),
    __metadata("design:type", HTMLElement)
], NavigationTab.prototype, "buttonElement", void 0);
__decorate([
    i$3('md-ripple'),
    __metadata("design:type", MdRipple)
], NavigationTab.prototype, "ripple", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$7 = i$6 `:host{--_active-indicator-color: var(--md-navigation-bar-active-indicator-color, var(--md-sys-color-secondary-container, #e8def8));--_active-indicator-height: var(--md-navigation-bar-active-indicator-height, 32px);--_active-indicator-shape: var(--md-navigation-bar-active-indicator-shape, 9999px);--_active-indicator-width: var(--md-navigation-bar-active-indicator-width, 64px);--_active-focus-icon-color: var(--md-navigation-bar-active-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-focus-label-text-color: var(--md-navigation-bar-active-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-focus-state-layer-color: var(--md-navigation-bar-active-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-hover-icon-color: var(--md-navigation-bar-active-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-hover-label-text-color: var(--md-navigation-bar-active-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-hover-state-layer-color: var(--md-navigation-bar-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-icon-color: var(--md-navigation-bar-active-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-label-text-color: var(--md-navigation-bar-active-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-label-text-weight: var(--md-navigation-bar-active-label-text-weight, 700);--_active-pressed-icon-color: var(--md-navigation-bar-active-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_active-pressed-label-text-color: var(--md-navigation-bar-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_active-pressed-state-layer-color: var(--md-navigation-bar-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_badge-color: var(--md-navigation-bar-badge-color, var(--md-sys-color-error, #b3261e));--_badge-shape: var(--md-navigation-bar-badge-shape, 3px);--_badge-size: var(--md-navigation-bar-badge-size, 6px);--_container-color: var(--md-navigation-bar-container-color, var(--md-sys-color-surface, #fffbfe));--_container-elevation: var(--md-navigation-bar-container-elevation, 3);--_container-height: var(--md-navigation-bar-container-height, 80px);--_container-shadow-color: var(--md-navigation-bar-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-navigation-bar-container-shape, 0px);--_container-surface-tint-layer-color: var(--md-navigation-bar-container-surface-tint-layer-color, var(--md-sys-color-primary, #6750a4));--_focus-state-layer-opacity: var(--md-navigation-bar-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-navigation-bar-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-navigation-bar-icon-size, 24px);--_inactive-focus-icon-color: var(--md-navigation-bar-inactive-focus-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-focus-label-text-color: var(--md-navigation-bar-inactive-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-focus-state-layer-color: var(--md-navigation-bar-inactive-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-hover-icon-color: var(--md-navigation-bar-inactive-hover-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-hover-label-text-color: var(--md-navigation-bar-inactive-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-hover-state-layer-color: var(--md-navigation-bar-inactive-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-icon-color: var(--md-navigation-bar-inactive-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-label-text-color: var(--md-navigation-bar-inactive-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_inactive-pressed-icon-color: var(--md-navigation-bar-inactive-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-pressed-label-text-color: var(--md-navigation-bar-inactive-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_inactive-pressed-state-layer-color: var(--md-navigation-bar-inactive-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_label-text-font: var(--md-navigation-bar-label-text-font, Roboto);--_label-text-line-height: var(--md-navigation-bar-label-text-line-height, 1rem);--_label-text-size: var(--md-navigation-bar-label-text-size, 0.75rem);--_label-text-tracking: var(--md-navigation-bar-label-text-tracking, 0.031rem);--_label-text-type: var(--md-navigation-bar-label-text-type, 500 0.75rem / 1rem Roboto);--_label-text-weight: var(--md-navigation-bar-label-text-weight, 500);--_large-badge-color: var(--md-navigation-bar-large-badge-color, var(--md-sys-color-error, #b3261e));--_large-badge-shape: var(--md-navigation-bar-large-badge-shape, 8px);--_large-badge-size: var(--md-navigation-bar-large-badge-size, 16px);--_pressed-state-layer-opacity: var(--md-navigation-bar-pressed-state-layer-opacity, 0.12);display:flex;flex-grow:1}.md3-navigation-tab{align-items:center;appearance:none;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;height:100%;justify-content:center;min-height:48px;min-width:48px;outline:none;padding:8px 0px 12px;position:relative;text-align:center;width:100%;font-family:var(--_label-text-font);font-size:var(--_label-text-size);letter-spacing:var(--_label-text-tracking);font-weight:var(--_label-text-weight);line-height:var(--_label-text-line-height);--md-focus-ring-shape-start-start:8px;--md-focus-ring-shape-start-end:8px;--md-focus-ring-shape-end-end:8px;--md-focus-ring-shape-end-start:8px;--md-focus-ring-offset-vertical:-2px;--md-focus-ring-offset-horizontal:-2px;--md-badge-color:var(--_badge-color);--md-badge-size:var(--_badge-size);--md-badge-shape:var(--_badge-shape);--md-badge-large-color:var(--_large-badge-color);--md-badge-large-size:var(--_large-badge-size);--md-badge-large-shape:var(--_large-badge-shape)}.md3-navigation-tab::-moz-focus-inner{border:0;padding:0}.md3-navigation-tab__icon-content{align-items:center;box-sizing:border-box;display:flex;justify-content:center;position:relative;z-index:1}.md3-navigation-tab__label-text{height:16px;margin-top:4px;opacity:1;transition:opacity 100ms cubic-bezier(0.4, 0, 0.2, 1),height 100ms cubic-bezier(0.4, 0, 0.2, 1);z-index:1}.md3-navigation-tab--hide-inactive-label:not(.md3-navigation-tab--active) .md3-navigation-tab__label-text{height:0;opacity:0}.md3-navigation-tab__active-indicator{display:flex;justify-content:center;opacity:0;position:absolute;transition:width 100ms cubic-bezier(0.4, 0, 0.2, 1),opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);width:32px;background-color:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape)}.md3-navigation-tab--active .md3-navigation-tab__active-indicator{opacity:1}.md3-navigation-tab__active-indicator,.md3-navigation-tab__icon-content{height:var(--_active-indicator-height)}.md3-navigation-tab--active .md3-navigation-tab__active-indicator,.md3-navigation-tab__icon-content{width:var(--_active-indicator-width)}.md3-navigation-tab__icon{fill:currentColor;align-self:center;display:inline-block;position:relative;width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}.md3-navigation-tab__icon.md3-navigation-tab__icon--active{display:none}.md3-navigation-tab--active .md3-navigation-tab__icon{display:none}.md3-navigation-tab--active .md3-navigation-tab__icon.md3-navigation-tab__icon--active{display:inline-block}.md3-navigation-tab__ripple{z-index:0}.md3-navigation-tab--active{--md-ripple-hover-state-layer-color:var(--_active-hover-state-layer-color);--md-ripple-focus-state-layer-color:var(--_active-focus-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_active-pressed-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-navigation-tab--active .md3-navigation-tab__icon{color:var(--_active-icon-color)}.md3-navigation-tab--active .md3-navigation-tab__label-text{color:var(--_active-label-text-color)}.md3-navigation-tab--active:hover .md3-navigation-tab__icon{color:var(--_active-hover-icon-color)}.md3-navigation-tab--active:hover .md3-navigation-tab__label-text{color:var(--_active-hover-label-text-color)}.md3-navigation-tab--active:focus .md3-navigation-tab__icon{color:var(--_active-focus-icon-color)}.md3-navigation-tab--active:focus .md3-navigation-tab__label-text{color:var(--_active-focus-label-text-color)}.md3-navigation-tab--active:active .md3-navigation-tab__icon{color:var(--_active-pressed-icon-color)}.md3-navigation-tab--active:active .md3-navigation-tab__label-text{color:var(--_active-pressed-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active){--md-ripple-hover-state-layer-color:var(--_inactive-hover-state-layer-color);--md-ripple-focus-state-layer-color:var(--_inactive-focus-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_inactive-pressed-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-navigation-tab:not(.md3-navigation-tab--active) .md3-navigation-tab__icon{color:var(--_inactive-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active) .md3-navigation-tab__label-text{color:var(--_inactive-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):hover .md3-navigation-tab__icon{color:var(--_inactive-hover-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):hover .md3-navigation-tab__label-text{color:var(--_inactive-hover-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):focus .md3-navigation-tab__icon{color:var(--_inactive-focus-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):focus .md3-navigation-tab__label-text{color:var(--_inactive-focus-label-text-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):active .md3-navigation-tab__icon{color:var(--_inactive-pressed-icon-color)}.md3-navigation-tab:not(.md3-navigation-tab--active):active .md3-navigation-tab__label-text{color:var(--_inactive-pressed-label-text-color)}/*# sourceMappingURL=navigation-tab-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdNavigationTab = class MdNavigationTab extends NavigationTab {
};
MdNavigationTab.styles = [styles$7];
MdNavigationTab = __decorate([
    e$7('md-navigation-tab')
], MdNavigationTab);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$6 = i$6 `@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color:GrayText;--md-radio-disabled-selected-icon-opacity:1;--md-radio-disabled-unselected-icon-color:GrayText;--md-radio-disabled-unselected-icon-opacity:1;--md-radio-selected-icon-color:CanvasText;--md-radio-selected-hover-icon-color:CanvasText;--md-radio-selected-focus-icon-color:CanvasText;--md-radio-selected-pressed-icon-color:CanvasText;--md-radio-unselected-icon-color:CanvasText;--md-radio-unselected-hover-icon-color:CanvasText;--md-radio-unselected-focus-icon-color:CanvasText;--md-radio-unselected-pressed-icon-color:CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A `ReactiveController` that provides root node-scoped single selection for
 * elements, similar to native `<input type="radio">` selection.
 *
 * To use, elements should add the controller and call
 * `selectionController.handleCheckedChange()` in a getter/setter. This must
 * be synchronous to match native behavior.
 *
 * @example
 * const CHECKED = Symbol('checked');
 *
 * class MyToggle extends LitElement {
 *   get checked() { return this[CHECKED]; }
 *   set checked(checked: boolean) {
 *     const oldValue = this.checked;
 *     if (oldValue === checked) {
 *       return;
 *     }
 *
 *     this[CHECKED] = checked;
 *     this.selectionController.handleCheckedChange();
 *     this.requestUpdate('checked', oldValue);
 *   }
 *
 *   [CHECKED] = false;
 *
 *   private selectionController = new SingleSelectionController(this);
 *
 *   constructor() {
 *     super();
 *     this.addController(this.selectionController);
 *   }
 * }
 */
class SingleSelectionController {
    constructor(host) {
        this.host = host;
        this.focused = false;
        this.root = null;
        this.handleFocusIn = () => {
            this.focused = true;
            this.updateTabIndices();
        };
        this.handleFocusOut = () => {
            this.focused = false;
            this.updateTabIndices();
        };
        /**
         * Handles arrow key events from the host. Using the arrow keys will
         * select and check the next or previous sibling with the host's
         * `name` attribute.
         */
        this.handleKeyDown = (event) => {
            const isDown = event.key === 'ArrowDown';
            const isUp = event.key === 'ArrowUp';
            const isLeft = event.key === 'ArrowLeft';
            const isRight = event.key === 'ArrowRight';
            // Ignore non-arrow keys
            if (!isLeft && !isRight && !isDown && !isUp) {
                return;
            }
            // Don't try to select another sibling if there aren't any.
            const siblings = this.getNamedSiblings();
            if (!siblings.length) {
                return;
            }
            // Prevent default interactions on the element for arrow keys,
            // since this controller will introduce new behavior.
            event.preventDefault();
            // Check if moving forwards or backwards
            const isRtl = getComputedStyle(this.host).direction === 'rtl';
            const forwards = isRtl ? isLeft || isDown : isRight || isDown;
            const hostIndex = siblings.indexOf(this.host);
            let nextIndex = forwards ? hostIndex + 1 : hostIndex - 1;
            // Search for the next sibling that is not disabled to select.
            // If we return to the host index, there is nothing to select.
            while (nextIndex !== hostIndex) {
                if (nextIndex >= siblings.length) {
                    // Return to start if moving past the last item.
                    nextIndex = 0;
                }
                else if (nextIndex < 0) {
                    // Go to end if moving before the first item.
                    nextIndex = siblings.length - 1;
                }
                // Check if the next sibling is disabled. If so,
                // move the index and continue searching.
                const nextSibling = siblings[nextIndex];
                if (nextSibling.hasAttribute('disabled')) {
                    if (forwards) {
                        nextIndex++;
                    }
                    else {
                        nextIndex--;
                    }
                    continue;
                }
                // Uncheck and remove focusability from other siblings.
                for (const sibling of siblings) {
                    if (sibling !== nextSibling) {
                        sibling.checked = false;
                        sibling.tabIndex = -1;
                    }
                }
                // The next sibling should be checked and focused.
                nextSibling.checked = true;
                nextSibling.removeAttribute('tabindex');
                nextSibling.focus();
                break;
            }
        };
    }
    hostConnected() {
        this.root = this.host.getRootNode();
        this.host.addEventListener('keydown', this.handleKeyDown);
        this.host.addEventListener('focusin', this.handleFocusIn);
        this.host.addEventListener('focusout', this.handleFocusOut);
        if (this.host.checked) {
            // Uncheck other siblings when attached if already checked. This mimics
            // native <input type="radio"> behavior.
            this.uncheckSiblings();
        }
        // Update for the newly added host.
        this.updateTabIndices();
    }
    hostDisconnected() {
        this.host.removeEventListener('keydown', this.handleKeyDown);
        this.host.removeEventListener('focusin', this.handleFocusIn);
        this.host.removeEventListener('focusout', this.handleFocusOut);
        // Update for siblings that are still connected.
        this.updateTabIndices();
        this.root = null;
    }
    /**
     * Should be called whenever the host's `checked` property changes
     * synchronously.
     */
    handleCheckedChange() {
        if (!this.host.checked) {
            return;
        }
        this.uncheckSiblings();
        this.updateTabIndices();
    }
    uncheckSiblings() {
        for (const sibling of this.getNamedSiblings()) {
            if (sibling !== this.host) {
                sibling.checked = false;
            }
        }
    }
    /**
     * Updates the `tabindex` of the host and its siblings.
     */
    updateTabIndices() {
        // There are three tabindex states for a group of elements:
        // 1. If any are checked, that element is focusable.
        const siblings = this.getNamedSiblings();
        const checkedSibling = siblings.find(sibling => sibling.checked);
        // 2. If an element is focused, the others are no longer focusable.
        if (checkedSibling || this.focused) {
            const focusable = checkedSibling || this.host;
            focusable.removeAttribute('tabindex');
            for (const sibling of siblings) {
                if (sibling !== focusable) {
                    sibling.tabIndex = -1;
                }
            }
            return;
        }
        // 3. If none are checked or focused, all are focusable.
        for (const sibling of siblings) {
            sibling.removeAttribute('tabindex');
        }
    }
    /**
     * Retrieves all siblings in the host element's root with the same `name`
     * attribute.
     */
    getNamedSiblings() {
        const name = this.host.getAttribute('name');
        if (!name || !this.root) {
            return [];
        }
        return Array.from(this.root.querySelectorAll(`[name="${name}"]`));
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
const CHECKED = Symbol('checked');
/**
 * @fires checked
 */
class Radio extends s$2 {
    constructor() {
        super();
        this[_a] = false;
        this.disabled = false;
        /**
         * The element value to use in form submission when checked.
         */
        this.value = 'on';
        /**
         * The HTML name to use in form submission.
         */
        this.name = '';
        this.selectionController = new SingleSelectionController(this);
        this.showFocusRing = false;
        this.showRipple = false;
        this.getRipple = () => {
            this.showRipple = true;
            return this.ripple;
        };
        this.renderRipple = () => {
            return y `<md-ripple unbounded ?disabled=${this.disabled}></md-ripple>`;
        };
        this.addController(new FormController(this));
        this.addController(this.selectionController);
        this.addEventListener('click', (event) => {
            if (!isActivationClick(event)) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.input);
        });
    }
    get checked() {
        return this[CHECKED];
    }
    set checked(checked) {
        const wasChecked = this.checked;
        if (wasChecked === checked) {
            return;
        }
        this[CHECKED] = checked;
        this.requestUpdate('checked', wasChecked);
        this.selectionController.handleCheckedChange();
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.closest('form');
    }
    [(_a = CHECKED, getFormValue)]() {
        return this.checked ? this.value : null;
    }
    focus() {
        this.input?.focus();
    }
    render() {
        return y `
      ${n(this.showRipple, this.renderRipple)}
      ${this.renderFocusRing()}
      <svg class="icon" viewBox="0 0 20 20">
        <mask id="cutout">
          <rect width="100%" height="100%" fill="white" />
          <circle cx="10" cy="10" r="8" fill="black" />
        </mask>
        <circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout)" />
        <circle class="inner circle" cx="10" cy="10" r="5" />
      </svg>
      <input
        type="radio"
        name=${this.name}
        aria-label=${this.ariaLabel || b}
        .checked=${this.checked}
        .value=${this.value}
        ?disabled=${this.disabled}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @pointerdown=${this.handlePointerDown}
        ${ripple(this.getRipple)}
      >
    `;
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleChange(event) {
        if (this.disabled) {
            return;
        }
        // Per spec, the change event on a radio input always represents checked.
        this.checked = true;
        redispatchEvent(this, event);
    }
    handlePointerDown() {
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    renderFocusRing() {
        return y `<md-focus-ring .visible=${this.showFocusRing}></md-focus-ring>`;
    }
}
Radio.shadowRootOptions = { ...s$2.shadowRootOptions, delegatesFocus: true };
Radio.formAssociated = true;
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Radio.prototype, "checked", null);
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Radio.prototype, "disabled", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Radio.prototype, "value", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], Radio.prototype, "name", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], Radio.prototype, "ariaLabel", void 0);
__decorate([
    i$3('input'),
    __metadata("design:type", HTMLInputElement)
], Radio.prototype, "input", void 0);
__decorate([
    e$4('md-ripple'),
    __metadata("design:type", Promise)
], Radio.prototype, "ripple", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Radio.prototype, "showFocusRing", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Radio.prototype, "showRipple", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$5 = i$6 `:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color: var(--md-radio-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-radio-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-radio-unselected-focus-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-state-layer-color: var(--md-radio-unselected-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-state-layer-opacity: var(--md-radio-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-icon-color: var(--md-radio-unselected-hover-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-state-layer-color: var(--md-radio-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-state-layer-opacity: var(--md-radio-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-radio-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-radio-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-state-layer-color: var(--md-radio-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-pressed-state-layer-opacity: var(--md-radio-unselected-pressed-state-layer-opacity, 0.12);--md-ripple-focus-state-layer-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_unselected-pressed-state-layer-opacity);--md-focus-ring-offset-vertical:-2px;--md-focus-ring-offset-horizontal:-2px;display:inline-flex;height:48px;position:relative;vertical-align:top;width:48px;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([checked]){--md-ripple-focus-state-layer-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-hover-state-layer-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_selected-pressed-state-layer-opacity)}input,md-ripple,md-focus-ring,.icon{inset:0;margin:auto;position:absolute}input{appearance:none;outline:none}md-ripple{height:var(--_state-layer-size);width:var(--_state-layer-size)}.icon{fill:var(--_unselected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}:host([checked]) .icon{fill:var(--_selected-icon-color)}:host([checked]) .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_unselected-hover-icon-color)}:host(:focus-within) .icon{fill:var(--_unselected-focus-icon-color)}:host(:active) .icon{fill:var(--_unselected-pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host([checked]:hover) .icon{fill:var(--_selected-hover-icon-color)}:host([checked]:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:host([checked]:active) .icon{fill:var(--_selected-pressed-icon-color)}:host([checked][disabled]) .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let MdRadio = class MdRadio extends Radio {
};
MdRadio.styles = [styles$5, styles$6];
MdRadio = __decorate([
    e$7('md-radio')
], MdRadio);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * SegmentedButton is a web component implementation of the Material Design
 * segmented button component. It is intended **only** for use as a child of a
 * `SementedButtonSet` component. It is **not** intended for use in any other
 * context.
 * @soyCompatible
 */
class SegmentedButton extends ActionElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.selected = false;
        this.label = '';
        this.noCheckmark = false;
        this.hasIcon = false;
        this.animState = '';
        this.showFocusRing = false;
    }
    update(props) {
        this.animState = this.nextAnimationState(props);
        super.update(props);
        // NOTE: This needs to be set *after* calling super.update() to ensure the
        // appropriate CSS classes are applied.
        this.hasIcon = this.iconElement.length > 0;
    }
    nextAnimationState(changedProps) {
        const prevSelected = changedProps.get('selected');
        // Early exit for first update.
        if (prevSelected === undefined)
            return '';
        const nextSelected = this.selected;
        const nextHasCheckmark = !this.noCheckmark;
        if (!prevSelected && nextSelected && nextHasCheckmark) {
            return 'selecting';
        }
        if (prevSelected && !nextSelected && nextHasCheckmark) {
            return 'deselecting';
        }
        return '';
    }
    beginPress({ positionEvent }) {
        this.ripple.beginPress(positionEvent);
    }
    endPress(options) {
        this.ripple.endPress();
        super.endPress(options);
        if (!options.cancelled) {
            const event = new Event('segmented-button-interaction', { bubbles: true, composed: true });
            this.dispatchEvent(event);
        }
    }
    handlePointerDown(e) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }
    handlePointerUp(e) {
        super.handlePointerUp(e);
    }
    handlePointerEnter(e) {
        this.ripple.beginHover(e);
    }
    handlePointerLeave(e) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    /** @soyTemplate */
    render() {
        return y `
      <button
        tabindex="${this.disabled ? '-1' : '0'}"
        aria-label="${l$2(this.ariaLabel)}"
        aria-pressed=${this.selected}
        ?disabled=${this.disabled}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointercancel="${this.handlePointerCancel}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
        @click="${this.handleClick}"
        @contextmenu="${this.handleContextMenu}"
        class="md3-segmented-button ${o(this.getRenderClasses())}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderLeading()}
        ${this.renderLabel()}
        ${this.renderTouchTarget()}
      </button>
    `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'md3-segmented-button--selected': this.selected,
            'md3-segmented-button--unselected': !this.selected,
            'md3-segmented-button--with-label': this.label !== '',
            'md3-segmented-button--without-label': this.label === '',
            'md3-segmented-button--with-icon': this.hasIcon,
            'md3-segmented-button--with-checkmark': !this.noCheckmark,
            'md3-segmented-button--without-checkmark': this.noCheckmark,
            'md3-segmented-button--selecting': this.animState === 'selecting',
            'md3-segmented-button--deselecting': this.animState === 'deselecting',
        };
    }
    /** @soyTemplate */
    renderFocusRing() {
        return y `<md-focus-ring .visible="${this.showFocusRing}" class="md3-segmented-button__focus-ring"></md-focus-ring>`;
    }
    /** @soyTemplate */
    renderRipple() {
        return y `<md-ripple ?disabled="${this.disabled}" class="md3-segmented-button__ripple"> </md-ripple>`;
    }
    /** @soyTemplate */
    renderOutline() {
        return y ``;
    }
    /** @soyTemplate */
    renderLeading() {
        return this.label === '' ? this.renderLeadingWithoutLabel() :
            this.renderLeadingWithLabel();
    }
    /** @soyTemplate */
    renderLeadingWithoutLabel() {
        return y `
      <span class="md3-segmented-button__leading" aria-hidden="true">
        <span class="md3-segmented-button__graphic">
          <svg class="md3-segmented-button__checkmark" viewBox="0 0 24 24">
            <path class="md3-segmented-button__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
        </span>
        <span class="md3-segmented-button__icon" aria-hidden="true">
          <slot name="icon"></slot>
        </span>
      </span>
    `;
    }
    /** @soyTemplate */
    renderLeadingWithLabel() {
        return y `
      <span class="md3-segmented-button__leading" aria-hidden="true">
        <span class="md3-segmented-button__graphic">
          <svg class="md3-segmented-button__checkmark" viewBox="0 0 24 24">
            <path class="md3-segmented-button__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <span class="md3-segmented-button__icon" aria-hidden="true">
            <slot name="icon"></slot>
          </span>
        </span>
      </span>
    `;
    }
    /** @soyTemplate */
    renderLabel() {
        return y `
      <span class="md3-segmented-button__label-text">${this.label}</span>
    `;
    }
    /** @soyTemplate */
    renderTouchTarget() {
        return y `<span class="md3-segmented-button__touch"></span>`;
    }
}
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "selected", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "label", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "noCheckmark", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "hasIcon", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], SegmentedButton.prototype, "ariaLabel", void 0);
__decorate([
    t$1(),
    __metadata("design:type", String)
], SegmentedButton.prototype, "animState", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], SegmentedButton.prototype, "showFocusRing", void 0);
__decorate([
    l$3({ slot: 'icon', flatten: true }),
    __metadata("design:type", Array)
], SegmentedButton.prototype, "iconElement", void 0);
__decorate([
    i$3('md-ripple'),
    __metadata("design:type", MdRipple)
], SegmentedButton.prototype, "ripple", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class OutlinedSegmentedButton extends SegmentedButton {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-segmented-button--outlined': true,
        };
    }
    /** @soyTemplate */
    renderOutline() {
        return y `<span class="md3-segmented-button__outline"></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$4 = i$6 `:host{--_container-height: var(--md-segmented-button-container-height, 40px);--_disabled-icon-color: var(--md-segmented-button-disabled-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_disabled-label-text-color: var(--md-segmented-button-disabled-label-text-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_disabled-outline-color: var(--md-segmented-button-disabled-outline-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_focus-state-layer-opacity: var(--md-segmented-button-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-segmented-button-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-segmented-button-label-text-font, Roboto);--_label-text-line-height: var(--md-segmented-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-segmented-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-segmented-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-segmented-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-segmented-button-label-text-weight, 500);--_outline-color: var(--md-segmented-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-segmented-button-outline-width, 1px);--_pressed-state-layer-opacity: var(--md-segmented-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-segmented-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-icon-color: var(--md-segmented-button-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-focus-label-text-color: var(--md-segmented-button-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-focus-state-layer-color: var(--md-segmented-button-selected-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-icon-color: var(--md-segmented-button-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-segmented-button-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-segmented-button-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-label-text-color: var(--md-segmented-button-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-icon-color: var(--md-segmented-button-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-segmented-button-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-segmented-button-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-with-icon-icon-color: var(--md-segmented-button-selected-with-icon-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_shape: var(--md-segmented-button-shape, 9999px);--_unselected-focus-icon-color: var(--md-segmented-button-unselected-focus-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-label-text-color: var(--md-segmented-button-unselected-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-state-layer-color: var(--md-segmented-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-icon-color: var(--md-segmented-button-unselected-hover-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-label-text-color: var(--md-segmented-button-unselected-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-state-layer-color: var(--md-segmented-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-label-text-color: var(--md-segmented-button-unselected-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-icon-color: var(--md-segmented-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-label-text-color: var(--md-segmented-button-unselected-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-state-layer-color: var(--md-segmented-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-with-icon-icon-color: var(--md-segmented-button-unselected-with-icon-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_with-icon-icon-size: var(--md-segmented-button-with-icon-icon-size, 18px);--_spacing-leading: var(--md-segmented-button-spacing-leading, 12px);--_spacing-trailing: var(--md-segmented-button-spacing-trailing, 12px)}.md3-segmented-button__outline{border-radius:inherit;border-style:solid;border-width:1px;inset:0px -0.5px;pointer-events:none;position:absolute}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$3 = i$6 `@keyframes md3-segmented-button-checkmark-selection-draw-in{from{stroke-dashoffset:29.7833385}to{stroke-dashoffset:0}}@keyframes md3-segmented-button-simple-fade-out{from{opacity:1}to{opacity:0}}@keyframes md3-segmented-button-simple-fade-in{from{opacity:0}to{opacity:1}}:host{display:inline-flex;outline:none}.md3-segmented-button{align-items:center;background:rgba(0,0,0,0);border:none;border-radius:inherit;display:flex;flex:1;justify-content:center;outline:none;position:relative;vertical-align:middle;padding-inline-start:var(--_spacing-leading);padding-inline-end:var(--_spacing-trailing)}.md3-segmented-button .md3-segmented-button__outline{border-color:var(--_outline-color)}.md3-segmented-button:disabled .md3-segmented-button__outline{border-color:var(--_disabled-outline-color)}.md3-segmented-button .md3-segmented-button__graphic,.md3-segmented-button .md3-segmented-button__checkmark,.md3-segmented-button .md3-segmented-button__icon,.md3-segmented-button .md3-segmented-button__icon ::slotted([slot=icon]){height:var(--_with-icon-icon-size);width:var(--_with-icon-icon-size);font-size:var(--_with-icon-icon-size)}.md3-segmented-button.md3-segmented-button--with-icon.md3-segmented-button--with-label .md3-segmented-button__graphic,.md3-segmented-button.md3-segmented-button--selected.md3-segmented-button--with-label.md3-segmented-button--with-checkmark .md3-segmented-button__graphic,.md3-segmented-button.md3-segmented-button--selected.md3-segmented-button--without-label.md3-segmented-button--with-checkmark .md3-segmented-button__graphic{width:calc(var(--_with-icon-icon-size) + 8px)}.md3-segmented-button .md3-segmented-button__label-text{font-family:var(--_label-text-font);font-size:var(--_label-text-size);letter-spacing:var(--_label-text-tracking);font-weight:var(--_label-text-weight)}.md3-segmented-button.md3-segmented-button--selected:enabled .md3-segmented-button__label-text{color:var(--_selected-label-text-color)}.md3-segmented-button.md3-segmented-button--selected:enabled:hover .md3-segmented-button__label-text{color:var(--_selected-hover-label-text-color)}.md3-segmented-button.md3-segmented-button--selected:enabled:focus .md3-segmented-button__label-text{color:var(--_selected-focus-label-text-color)}.md3-segmented-button.md3-segmented-button--selected:enabled:active .md3-segmented-button__label-text{color:var(--_selected-pressed-label-text-color)}.md3-segmented-button.md3-segmented-button--unselected:enabled .md3-segmented-button__label-text{color:var(--_unselected-label-text-color)}.md3-segmented-button.md3-segmented-button--unselected:enabled:hover .md3-segmented-button__label-text{color:var(--_unselected-hover-label-text-color)}.md3-segmented-button.md3-segmented-button--unselected:enabled:focus .md3-segmented-button__label-text{color:var(--_unselected-focus-label-text-color)}.md3-segmented-button.md3-segmented-button--unselected:enabled:active .md3-segmented-button__label-text{color:var(--_unselected-pressed-label-text-color)}.md3-segmented-button:disabled .md3-segmented-button__label-text{color:var(--_disabled-label-text-color)}.md3-segmented-button--unselected{--md-ripple-hover-state-layer-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-state-layer-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-segmented-button--unselected .md3-segmented-button__icon{color:var(--_unselected-with-icon-icon-color)}.md3-segmented-button--unselected:hover .md3-segmented-button__icon{color:var(--_unselected-hover-icon-color)}.md3-segmented-button--unselected:focus .md3-segmented-button__icon{color:var(--_unselected-focus-icon-color)}.md3-segmented-button--unselected:active .md3-segmented-button__icon{color:var(--_unselected-pressed-icon-color)}.md3-segmented-button--unselected:disabled .md3-segmented-button__icon{color:var(--_disabled-icon-color)}.md3-segmented-button--selected{background-color:var(--_selected-container-color);--md-ripple-hover-state-layer-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_hover-state-layer-opacity);--md-ripple-focus-state-layer-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-state-layer-opacity:var(--_focus-state-layer-opacity);--md-ripple-pressed-state-layer-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-state-layer-opacity:var(--_pressed-state-layer-opacity)}.md3-segmented-button--selected .md3-segmented-button__icon{color:var(--_selected-with-icon-icon-color)}.md3-segmented-button--selected .md3-segmented-button__checkmark-path{stroke:var(--_selected-with-icon-icon-color)}.md3-segmented-button--selected:hover .md3-segmented-button__checkmark-path{stroke:var(--_selected-hover-icon-color)}.md3-segmented-button--selected:focus .md3-segmented-button__checkmark-path{stroke:var(--_selected-focus-icon-color)}.md3-segmented-button--selected:active .md3-segmented-button__checkmark-path{stroke:var(--_selected-pressed-icon-color)}.md3-segmented-button--selected:disabled .md3-segmented-button__checkmark-path{stroke:var(--_disabled-icon-color)}.md3-segmented-button:enabled{cursor:pointer}.md3-segmented-button__focus-ring{z-index:1}.md3-segmented-button__ripple{border-radius:inherit;z-index:0}.md3-segmented-button__touch{position:absolute;top:50%;height:48px;left:50%;width:100%;transform:translate(-50%, -50%)}.md3-segmented-button__leading,.md3-segmented-button__graphic{display:inline-flex;justify-content:flex-start;align-items:center}.md3-segmented-button__graphic{position:relative;overflow:hidden}.md3-segmented-button__graphic{transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-segmented-button--unselected.md3-segmented-button--with-label .md3-segmented-button__graphic,.md3-segmented-button--unselected.md3-segmented-button--without-label .md3-segmented-button__graphic,.md3-segmented-button--selected.md3-segmented-button--without-checkmark .md3-segmented-button__graphic{width:0}.md3-segmented-button--unselected .md3-segmented-button__checkmark{opacity:0}.md3-segmented-button--selected.md3-segmented-button--with-label .md3-segmented-button__icon{opacity:0}.md3-segmented-button--with-label .md3-segmented-button__checkmark{display:inline-flex;position:absolute}.md3-segmented-button__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385}.md3-segmented-button--selecting .md3-segmented-button__checkmark-path{stroke-dashoffset:29.7833385;animation:md3-segmented-button-checkmark-selection-draw-in;animation-duration:150ms;animation-delay:50ms;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.md3-segmented-button--selecting.md3-segmented-button--with-label .md3-segmented-button__icon{animation:md3-segmented-button-simple-fade-out;animation-duration:75ms;animation-timing-function:linear;animation-fill-mode:forwards}.md3-segmented-button--deselecting .md3-segmented-button__checkmark{animation:md3-segmented-button-simple-fade-out;animation-duration:50ms;animation-timing-function:linear;animation-fill-mode:forwards}.md3-segmented-button--deselecting.md3-segmented-button--with-label .md3-segmented-button__icon{opacity:0;animation:md3-segmented-button-simple-fade-in;animation-delay:50ms;animation-duration:150ms;animation-timing-function:linear;animation-fill-mode:forwards}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * MdOutlinedSegmentedButton is the custom element for the Material
 * Design outlined segmented button component.
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedSegmentedButton = class MdOutlinedSegmentedButton extends OutlinedSegmentedButton {
};
MdOutlinedSegmentedButton.styles = [styles$3, styles$4];
MdOutlinedSegmentedButton = __decorate([
    e$7('md-outlined-segmented-button')
], MdOutlinedSegmentedButton);

/**
 * @requirecss {segmentedbuttonset.lib.shared_styles}
 *
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * SegmentedButtonSet is the parent component for two or more
 * `SegmentedButton` components. **Only** `SegmentedButton` components may be
 * used as children.
 * @soyCompatible
 */
class SegmentedButtonSet extends s$2 {
    constructor() {
        super(...arguments);
        this.multiselect = false;
    }
    getButtonDisabled(index) {
        if (this.indexOutOfBounds(index))
            return false;
        return this.buttons[index].disabled;
    }
    setButtonDisabled(index, disabled) {
        if (this.indexOutOfBounds(index))
            return;
        this.buttons[index].disabled = disabled;
    }
    getButtonSelected(index) {
        if (this.indexOutOfBounds(index))
            return false;
        return this.buttons[index].selected;
    }
    setButtonSelected(index, selected) {
        // Ignore out-of-index values.
        if (this.indexOutOfBounds(index))
            return;
        // Ignore disabled buttons.
        if (this.getButtonDisabled(index))
            return;
        if (this.multiselect) {
            this.buttons[index].selected = selected;
            this.emitSelectionEvent(index);
            return;
        }
        // Single-select segmented buttons are not unselectable.
        if (!selected)
            return;
        this.buttons[index].selected = true;
        this.emitSelectionEvent(index);
        // Deselect all other buttons for single-select.
        for (let i = 0; i < this.buttons.length; i++) {
            if (i === index)
                continue;
            this.buttons[i].selected = false;
        }
    }
    handleSegmentedButtonInteraction(e) {
        const index = this.buttons.indexOf(e.target);
        this.toggleSelection(index);
    }
    toggleSelection(index) {
        if (this.indexOutOfBounds(index))
            return;
        this.setButtonSelected(index, !this.buttons[index].selected);
    }
    indexOutOfBounds(index) {
        return index < 0 || index >= this.buttons.length;
    }
    emitSelectionEvent(index) {
        this.dispatchEvent(new CustomEvent('segmented-button-set-selection', {
            detail: {
                button: this.buttons[index],
                selected: this.buttons[index].selected,
                index,
            },
            bubbles: true,
            composed: true
        }));
    }
    /** @soyTemplate */
    render() {
        return y `
     <span
       role="group"
       @segmented-button-interaction="${this.handleSegmentedButtonInteraction}"
       aria-label="${l$2(this.ariaLabel)}"
       class="md3-segmented-button-set ${o(this.getRenderClasses())}">
       <slot></slot>
     </span>
     `;
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {};
    }
}
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], SegmentedButtonSet.prototype, "multiselect", void 0);
__decorate([
    ariaProperty // tslint:disable-line:no-new-decorators
    ,
    e$6({ type: String, attribute: 'aria-label' }),
    __metadata("design:type", String)
], SegmentedButtonSet.prototype, "ariaLabel", void 0);
__decorate([
    l$3({ flatten: true }),
    __metadata("design:type", Array)
], SegmentedButtonSet.prototype, "buttons", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class OutlinedSegmentedButtonSet extends SegmentedButtonSet {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-segmented-button-set--outlined': true,
        };
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = i$6 `:host{--_shape-start-start: var(--md-segmented-button-shape-start-start, 9999px);--_shape-start-end: var(--md-segmented-button-shape-start-end, 9999px);--_shape-end-end: var(--md-segmented-button-shape-end-end, 9999px);--_shape-end-start: var(--md-segmented-button-shape-end-start, 9999px);--_container-height: var(--md-segmented-button-container-height, 40px);--_disabled-icon-color: var(--md-segmented-button-disabled-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-icon-opacity: var(--md-segmented-button-disabled-icon-opacity, 0.38);--_disabled-label-text-color: var(--md-segmented-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-label-text-opacity: var(--md-segmented-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-segmented-button-disabled-outline-color, var(--md-sys-color-on-surface, #1c1b1f));--_disabled-outline-opacity: var(--md-segmented-button-disabled-outline-opacity, 0.12);--_focus-state-layer-opacity: var(--md-segmented-button-focus-state-layer-opacity, 0.12);--_hover-state-layer-opacity: var(--md-segmented-button-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-segmented-button-label-text-font, Roboto);--_label-text-line-height: var(--md-segmented-button-label-text-line-height, 1.25rem);--_label-text-size: var(--md-segmented-button-label-text-size, 0.875rem);--_label-text-tracking: var(--md-segmented-button-label-text-tracking, 0.006rem);--_label-text-type: var(--md-segmented-button-label-text-type, 500 0.875rem / 1.25rem Roboto);--_label-text-weight: var(--md-segmented-button-label-text-weight, 500);--_outline-color: var(--md-segmented-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-segmented-button-outline-width, 1px);--_pressed-state-layer-opacity: var(--md-segmented-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-segmented-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-icon-color: var(--md-segmented-button-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-focus-label-text-color: var(--md-segmented-button-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-focus-state-layer-color: var(--md-segmented-button-selected-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-icon-color: var(--md-segmented-button-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-segmented-button-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-segmented-button-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-label-text-color: var(--md-segmented-button-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-icon-color: var(--md-segmented-button-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-segmented-button-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-segmented-button-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-with-icon-icon-color: var(--md-segmented-button-selected-with-icon-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_unselected-focus-icon-color: var(--md-segmented-button-unselected-focus-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-label-text-color: var(--md-segmented-button-unselected-focus-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-state-layer-color: var(--md-segmented-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-icon-color: var(--md-segmented-button-unselected-hover-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-label-text-color: var(--md-segmented-button-unselected-hover-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-state-layer-color: var(--md-segmented-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-label-text-color: var(--md-segmented-button-unselected-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-icon-color: var(--md-segmented-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-label-text-color: var(--md-segmented-button-unselected-pressed-label-text-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-state-layer-color: var(--md-segmented-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-with-icon-icon-color: var(--md-segmented-button-unselected-with-icon-icon-color, var(--md-sys-color-on-surface, #1c1b1f));--_with-icon-icon-size: var(--md-segmented-button-with-icon-icon-size, 18px)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i$6 `:host{display:flex;outline:none}.md3-segmented-button-set{display:grid;grid-auto-columns:1fr;grid-auto-flow:column;grid-auto-rows:auto;width:100%;height:var(--_container-height)}.md3-segmented-button-set ::slotted(:first-child){border-start-start-radius:var(--_shape-start-start);border-end-start-radius:var(--_shape-end-start)}.md3-segmented-button-set ::slotted(:last-child){border-start-end-radius:var(--_shape-start-end);border-end-end-radius:var(--_shape-end-end)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * MdOutlinedSegmentedButtonSet is the custom element for the Material
 * Design outlined segmented button set component.
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedSegmentedButtonSet = class MdOutlinedSegmentedButtonSet extends OutlinedSegmentedButtonSet {
};
MdOutlinedSegmentedButtonSet.styles = [styles$1, styles$2];
MdOutlinedSegmentedButtonSet = __decorate([
    e$7('md-outlined-segmented-button-set')
], MdOutlinedSegmentedButtonSet);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires input {InputEvent} Fired whenever `selected` changes due to user
 * interaction (bubbles and composed).
 * @fires change {Event} Fired whenever `selected` changes due to user
 * interaction (bubbles).
 */
class Switch extends s$2 {
    constructor() {
        super();
        /**
         * Disables the switch and makes it non-interactive.
         */
        this.disabled = false;
        /**
         * Puts the switch in the selected state and sets the form submission value to
         * the `value` property.
         */
        this.selected = false;
        /**
         * Shows both the selected and deselected icons.
         */
        this.icons = false;
        /**
         * Shows only the selected icon, and not the deselected icon. If `true`,
         * overrides the behavior of the `icons` property.
         */
        this.showOnlySelectedIcon = false;
        this.ariaLabelledBy = '';
        this.showFocusRing = false;
        this.showRipple = false;
        /**
         * The HTML name to use in form submission.
         */
        this.name = '';
        /**
         * The value associated with this switch on form submission. `null` is
         * submitted when `selected` is `false`.
         */
        this.value = 'on';
        this.renderRipple = () => {
            return y `
      <span class="md3-switch__ripple">
        <md-ripple
          ?disabled="${this.disabled}"
          unbounded>
        </md-ripple>
      </span>
    `;
        };
        this.getRipple = () => {
            this.showRipple = true;
            return this.ripple;
        };
        this.renderFocusRing = () => {
            return y `<md-focus-ring visible></md-focus-ring>`;
        };
        this.addController(new FormController(this));
        this.addEventListener('click', (event) => {
            if (!isActivationClick(event)) {
                return;
            }
            this.button?.focus();
            if (this.button != null) {
                // this triggers the click behavior, and the ripple
                dispatchActivationClick(this.button);
            }
        });
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.closest('form');
    }
    [getFormValue]() {
        return this.selected ? this.value : null;
    }
    render() {
        const ariaLabelValue = this.ariaLabel ? this.ariaLabel : undefined;
        const ariaLabelledByValue = this.ariaLabelledBy ? this.ariaLabelledBy : undefined;
        // NOTE: buttons must use only [phrasing
        // content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)
        // children, which includes custom elements, but not `div`s
        return y `
      <button
        type="button"
        class="md3-switch ${o(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${l$2(ariaLabelValue)}"
        aria-labelledby="${l$2(ariaLabelledByValue)}"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown=${this.handlePointerDown}
        ${ripple(this.getRipple)}
      >
        ${n(this.showFocusRing, this.renderFocusRing)}
        <span class="md3-switch__track">
          ${this.renderHandle()}
        </span>
      </button>
    `;
    }
    getRenderClasses() {
        return {
            'md3-switch--selected': this.selected,
            'md3-switch--unselected': !this.selected,
        };
    }
    renderHandle() {
        /** @classMap */
        const classes = {
            'md3-switch__handle--big': this.icons && !this.showOnlySelectedIcon,
        };
        return y `
      <span class="md3-switch__handle-container">
        ${n(this.showRipple, this.renderRipple)}
        <span class="md3-switch__handle ${o(classes)}">
          ${this.shouldShowIcons() ? this.renderIcons() : y ``}
        </span>
        ${this.renderTouchTarget()}
      </span>
    `;
    }
    renderIcons() {
        return y `
      <div class="md3-switch__icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon ? y `` : this.renderOffIcon()}
      </div>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     */
    renderOnIcon() {
        return y `
      <svg class="md3-switch__icon md3-switch__icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     */
    renderOffIcon() {
        return y `
      <svg class="md3-switch__icon md3-switch__icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `;
    }
    renderTouchTarget() {
        return y `<span class="md3-switch__touch"></span>`;
    }
    shouldShowIcons() {
        return this.icons || this.showOnlySelectedIcon;
    }
    handleClick() {
        if (this.disabled) {
            return;
        }
        this.selected = !this.selected;
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        // Bubbles but does not compose to mimic native browser <input> & <select>
        // Additionally, native change event is not an InputEvent.
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
    handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }
    handleBlur() {
        this.showFocusRing = false;
    }
    handlePointerDown() {
        pointerPress();
        this.showFocusRing = false;
    }
}
Switch.shadowRootOptions = { mode: 'open', delegatesFocus: true };
Switch.formAssociated = true;
__decorate([
    e$6({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], Switch.prototype, "disabled", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "selected", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "icons", void 0);
__decorate([
    e$6({ type: Boolean }),
    __metadata("design:type", Object)
], Switch.prototype, "showOnlySelectedIcon", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-label', noAccessor: true }),
    __metadata("design:type", String)
], Switch.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$6({ type: String, attribute: 'data-aria-labelledby', noAccessor: true }),
    __metadata("design:type", Object)
], Switch.prototype, "ariaLabelledBy", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Switch.prototype, "showFocusRing", void 0);
__decorate([
    t$1(),
    __metadata("design:type", Object)
], Switch.prototype, "showRipple", void 0);
__decorate([
    e$4('md-ripple'),
    __metadata("design:type", Promise)
], Switch.prototype, "ripple", void 0);
__decorate([
    i$3('button'),
    __metadata("design:type", HTMLButtonElement)
], Switch.prototype, "button", void 0);
__decorate([
    e$6({ type: String, reflect: true }),
    __metadata("design:type", Object)
], Switch.prototype, "name", void 0);
__decorate([
    e$6({ type: String }),
    __metadata("design:type", Object)
], Switch.prototype, "value", void 0);
__decorate([
    e$5({ passive: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Switch.prototype, "handlePointerDown", null);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i$6 `:host{--_handle-shape-start-start: var(--md-switch-handle-shape-start-start, 9999px);--_handle-shape-start-end: var(--md-switch-handle-shape-start-end, 9999px);--_handle-shape-end-end: var(--md-switch-handle-shape-end-end, 9999px);--_handle-shape-end-start: var(--md-switch-handle-shape-end-start, 9999px);--_track-shape-start-start: var(--md-switch-track-shape-start-start, 9999px);--_track-shape-start-end: var(--md-switch-track-shape-start-end, 9999px);--_track-shape-end-end: var(--md-switch-track-shape-end-end, 9999px);--_track-shape-end-start: var(--md-switch-track-shape-end-start, 9999px);--_disabled-handle-elevation: var(--md-switch-disabled-handle-elevation, 0);--_disabled-handle-opacity: var(--md-switch-disabled-handle-opacity, 0.38);--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, rgb(var(--md-sys-color-surface-rgb, 255, 251, 254), 1));--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_disabled-unselected-handle-color: var(--md-switch-disabled-unselected-handle-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.38));--_disabled-unselected-icon-color: var(--md-switch-disabled-unselected-icon-color, rgb(var(--md-sys-color-surface-variant-rgb, 231, 224, 236), 0.38));--_disabled-unselected-track-color: var(--md-switch-disabled-unselected-track-color, rgb(var(--md-sys-color-surface-variant-rgb, 231, 224, 236), 0.12));--_disabled-unselected-track-outline-color: var(--md-switch-disabled-unselected-track-outline-color, rgb(var(--md-sys-color-on-surface-rgb, 28, 27, 31), 0.12));--_handle-elevation: var(--md-switch-handle-elevation, 1);--_handle-height: var(--md-switch-handle-height, 20px);--_handle-shadow-color: var(--md-switch-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-width: var(--md-switch-handle-width, 20px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-state-layer-color: var(--md-switch-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-switch-selected-focus-state-layer-opacity, 0.12);--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-width: var(--md-switch-track-width, 52px);--_unselected-focus-handle-color: var(--md-switch-unselected-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-icon-color: var(--md-switch-unselected-focus-icon-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-focus-state-layer-color: var(--md-switch-unselected-focus-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-focus-state-layer-opacity: var(--md-switch-unselected-focus-state-layer-opacity, 0.12);--_unselected-focus-track-color: var(--md-switch-unselected-focus-track-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-focus-track-outline-color: var(--md-switch-unselected-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-handle-color: var(--md-switch-unselected-handle-color, var(--md-sys-color-outline, #79747e));--_unselected-handle-height: var(--md-switch-unselected-handle-height, 16px);--_unselected-handle-width: var(--md-switch-unselected-handle-width, 16px);--_unselected-hover-handle-color: var(--md-switch-unselected-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-switch-unselected-hover-icon-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-hover-state-layer-color: var(--md-switch-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-hover-state-layer-opacity: var(--md-switch-unselected-hover-state-layer-opacity, 0.08);--_unselected-hover-track-color: var(--md-switch-unselected-hover-track-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-hover-track-outline-color: var(--md-switch-unselected-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-icon-color: var(--md-switch-unselected-icon-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-icon-size: var(--md-switch-unselected-icon-size, 16px);--_unselected-pressed-handle-color: var(--md-switch-unselected-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-switch-unselected-pressed-icon-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-pressed-state-layer-color: var(--md-switch-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1c1b1f));--_unselected-pressed-state-layer-opacity: var(--md-switch-unselected-pressed-state-layer-opacity, 0.12);--_unselected-pressed-track-color: var(--md-switch-unselected-pressed-track-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-pressed-track-outline-color: var(--md-switch-unselected-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-track-color: var(--md-switch-unselected-track-color, var(--md-sys-color-surface-variant, #e7e0ec));--_unselected-track-outline-color: var(--md-switch-unselected-track-outline-color, var(--md-sys-color-outline, #79747e));--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}@media screen and (forced-colors: active){:host{--md-switch-disabled-selected-icon-color:GrayText;--md-switch-disabled-selected-track-color:GrayText;--md-switch-disabled-unselected-handle-color:GrayText;--md-switch-disabled-unselected-icon-color:Canvas;--md-switch-selected-focus-track-color:ButtonText;--md-switch-selected-hover-track-color:ButtonText;--md-switch-selected-icon-color:ButtonText;--md-switch-selected-pressed-track-color:ButtonText;--md-switch-selected-track-color:ButtonText;--md-switch-unselected-focus-handle-color:ButtonText;--md-switch-unselected-handle-color:ButtonText;--md-switch-unselected-hover-handle-color:ButtonText;--md-switch-unselected-icon-color:Canvas;--md-switch-unselected-pressed-handle-color:ButtonText}}md-focus-ring{--md-focus-ring-shape-start-start:var(--_track-shape-start-start);--md-focus-ring-shape-start-end:var(--_track-shape-start-end);--md-focus-ring-shape-end-end:var(--_track-shape-end-start);--md-focus-ring-shape-end-start:var(--_track-shape-end-end)}.md3-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.md3-switch__handle::before,.md3-switch__track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity;transition-duration:75ms}.md3-switch__track{position:relative;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.md3-switch__track::before{border-style:solid}.md3-switch--selected .md3-switch__track::before{opacity:0}.md3-switch__handle-container{position:relative;transition:margin 75ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-switch__handle{transform-origin:center;transition:transform 75ms cubic-bezier(0.4, 0, 0.2, 1)}.md3-switch--selected .md3-switch__handle::before{opacity:0}.md3-switch__ripple{position:absolute;display:inline-flex;left:50%;top:50%;transform:translate(-50%, -50%)}.md3-switch__icons{position:relative;height:100%;width:100%}.md3-switch__icon{position:absolute;inset:0;margin:auto;transition-property:fill;transition-duration:75ms;opacity:0}.md3-switch--selected .md3-switch__icon--on,.md3-switch--unselected .md3-switch__icon--off{opacity:1}.md3-switch__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.md3-switch:disabled{cursor:default;pointer-events:none}.md3-switch:disabled .md3-switch__track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.md3-switch:disabled .md3-switch__track::before{background-clip:content-box}.md3-switch--selected:disabled .md3-switch__track{background-clip:border-box}.md3-switch__track{background-color:var(--_selected-track-color)}.md3-switch--selected:hover .md3-switch__track{background-color:var(--_selected-hover-track-color)}.md3-switch--selected:focus-visible .md3-switch__track{background-color:var(--_selected-focus-track-color)}.md3-switch--selected:active .md3-switch__track{background-color:var(--_selected-pressed-track-color)}.md3-switch--selected:disabled .md3-switch__track{background-color:var(--_disabled-selected-track-color)}.md3-switch__track::before{border-width:var(--_track-outline-width);background-color:var(--_unselected-track-color);border-color:var(--_unselected-track-outline-color)}.md3-switch--unselected:hover .md3-switch__track::before{background-color:var(--_unselected-hover-track-color);border-color:var(--_unselected-hover-track-outline-color)}.md3-switch--unselected:focus-visible .md3-switch__track::before{background-color:var(--_unselected-focus-track-color);border-color:var(--_unselected-focus-track-outline-color)}.md3-switch--unselected:active .md3-switch__track::before{background-color:var(--_unselected-pressed-track-color);border-color:var(--_unselected-pressed-track-outline-color)}.md3-switch--unselected:disabled .md3-switch__track::before{background-color:var(--_disabled-unselected-track-color);border-color:var(--_disabled-unselected-track-outline-color)}.md3-switch__handle-container{display:flex}.md3-switch--selected .md3-switch__handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.md3-switch--unselected .md3-switch__handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.md3-switch__handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_handle-height);width:var(--_handle-width);background-color:var(--_selected-handle-color)}.md3-switch--selected .md3-switch__handle,.md3-switch--unselected .md3-switch__handle.md3-switch__handle--big{transform:scale(1.2)}.md3-switch--unselected .md3-switch__handle{transform:scale(0.8)}.md3-switch--selected:enabled:active .md3-switch__handle,.md3-switch--unselected:enabled:active .md3-switch__handle{transform:scale(1.4)}.md3-switch--selected:hover .md3-switch__handle{background-color:var(--_selected-hover-handle-color)}.md3-switch--selected:focus-visible .md3-switch__handle{background-color:var(--_selected-focus-handle-color)}.md3-switch--selected:active .md3-switch__handle{background-color:var(--_selected-pressed-handle-color)}.md3-switch--selected:disabled .md3-switch__handle{background-color:var(--_disabled-selected-handle-color)}.md3-switch__handle::before{background-color:var(--_unselected-handle-color)}.md3-switch--unselected:hover .md3-switch__handle::before{background-color:var(--_unselected-hover-handle-color)}.md3-switch--unselected:focus-visible .md3-switch__handle::before{background-color:var(--_unselected-focus-handle-color)}.md3-switch--unselected:active .md3-switch__handle::before{background-color:var(--_unselected-pressed-handle-color)}.md3-switch--unselected:disabled .md3-switch__handle::before{background-color:var(--_disabled-unselected-handle-color)}.md3-switch__ripple{height:var(--_state-layer-size);width:var(--_state-layer-size)}.md3-switch--selected .md3-switch__ripple{--md-ripple-hover-state-layer-color:var(--_selected-hover-state-layer-color);--md-ripple-focus-state-layer-color:var(--_selected-focus-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_selected-pressed-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-focus-state-layer-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-pressed-state-layer-opacity:var(--_selected-pressed-state-layer-opacity)}.md3-switch--unselected .md3-switch__ripple{--md-ripple-hover-state-layer-color:var(--_unselected-hover-state-layer-color);--md-ripple-focus-state-layer-color:var(--_unselected-focus-state-layer-color);--md-ripple-pressed-state-layer-color:var(--_unselected-pressed-state-layer-color);--md-ripple-hover-state-layer-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-focus-state-layer-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-pressed-state-layer-opacity:var(--_unselected-pressed-state-layer-opacity)}.md3-switch--selected .md3-switch__icon{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.md3-switch--unselected .md3-switch__icon{width:var(--_unselected-icon-size);height:var(--_unselected-icon-size);fill:var(--_unselected-icon-color)}.md3-switch--selected:disabled .md3-switch__icon{fill:var(--_disabled-selected-icon-color)}.md3-switch--unselected:disabled .md3-switch__icon{fill:var(--_disabled-unselected-icon-color)}/*# sourceMappingURL=switch-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Switches toggle the state of a single item on or off.
 *
 * @description
 * There's one type of switch in Material. Use this selection control when the
 * user needs to toggle a single item on or off.
 *
 * @final
 * @suppress {visibility}
 */
let MdSwitch = class MdSwitch extends Switch {
};
MdSwitch.styles = [styles];
MdSwitch = __decorate([
    e$7('md-switch')
], MdSwitch);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class FilledTextField extends TextField {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-text-field--filled': true,
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdFilledTextField = class MdFilledTextField extends FilledTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i `md-filled-field`;
    }
};
MdFilledTextField.styles = [styles$I, styles$J, styles$K];
MdFilledTextField = __decorate([
    e$7('md-filled-text-field')
], MdFilledTextField);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class OutlinedTextField extends TextField {
    /** @soyTemplate */
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-text-field--outlined': true,
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i `md-outlined-field`;
    }
};
MdOutlinedTextField.styles = [styles$I, styles$D, styles$E];
MdOutlinedTextField = __decorate([
    e$7('md-outlined-text-field')
], MdOutlinedTextField);
