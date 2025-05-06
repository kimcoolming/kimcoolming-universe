const th=()=>{};var Lo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},eh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|c>>4;let R=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(R=64)),r.push(e[p],e[v],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(nu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):eh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||v==null)throw new nh;const R=o<<2|c>>4;if(r.push(R),d!==64){const b=c<<4&240|d>>2;if(r.push(b),v!==64){const k=d<<6&192|v;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rh=function(n){const t=nu(n);return ru.encodeByteArray(t,!0)},lr=function(n){return rh(n).replace(/\./g,"")},sh=function(n){try{return ru.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=()=>ih().__FIREBASE_DEFAULTS__,ah=()=>{if(typeof process>"u"||typeof Lo>"u")return;const n=Lo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&sh(n[1]);return t&&JSON.parse(t)},Gs=()=>{try{return th()||oh()||ah()||uh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ch=n=>{var t,e;return(e=(t=Gs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},lh=n=>{const t=ch(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},su=()=>{var n;return(n=Gs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lr(JSON.stringify(e)),lr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ph(){var n;const t=(n=Gs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gh(){return!ph()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iu(){try{return typeof indexedDB=="object"}catch{return!1}}function ou(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function _h(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="FirebaseError";class ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=yh,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Eh(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ae(s,c,r)}}function Eh(n,t){return n.replace(Th,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Th=/\{\$([^}]+)}/g;function En(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Fo(o)&&Fo(a)){if(!En(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Fo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=1e3,Ih=2,wh=4*60*60*1e3,Ah=.5;function Uo(n,t=vh,e=Ih){const r=t*Math.pow(e,n),s=Math.round(Ah*r*(Math.random()-.5)*2);return Math.min(wh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new hh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ph(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(n){return n===de?void 0:n}function Ph(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Rh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Ch={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Vh=$.INFO,Dh={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Nh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Dh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ks{constructor(t){this.name=t,this._logLevel=Vh,this._logHandler=Nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ch[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const kh=(n,t)=>t.some(e=>n instanceof e);let Bo,qo;function Oh(){return Bo||(Bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mh(){return qo||(qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,Is=new WeakMap,uu=new WeakMap,hs=new WeakMap,Hs=new WeakMap;function xh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Qt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&au.set(e,n)}).catch(()=>{}),Hs.set(t,n),t}function Lh(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let ws={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||uu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Fh(n){ws=n(ws)}function Uh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ds(this),t,...e);return uu.set(r,t.sort?t.sort():[t]),Qt(r)}:Mh().includes(n)?function(...t){return n.apply(ds(this),t),Qt(au.get(this))}:function(...t){return Qt(n.apply(ds(this),t))}}function Bh(n){return typeof n=="function"?Uh(n):(n instanceof IDBTransaction&&Lh(n),kh(n,Oh())?new Proxy(n,ws):n)}function Qt(n){if(n instanceof IDBRequest)return xh(n);if(hs.has(n))return hs.get(n);const t=Bh(n);return t!==n&&(hs.set(n,t),Hs.set(t,n)),t}const ds=n=>Hs.get(n);function cu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Qt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const qh=["get","getKey","getAll","getAllKeys","count"],$h=["put","add","delete","clear"],fs=new Map;function $o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(fs.get(t))return fs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=$h.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return fs.set(t,o),o}Fh(n=>({...n,get:(t,e,r)=>$o(t,e)||n.get(t,e,r),has:(t,e)=>!!$o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function zh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const As="@firebase/app",jo="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Ks("@firebase/app"),Gh="@firebase/app-compat",Kh="@firebase/analytics-compat",Hh="@firebase/analytics",Wh="@firebase/app-check-compat",Qh="@firebase/app-check",Yh="@firebase/auth",Xh="@firebase/auth-compat",Jh="@firebase/database",Zh="@firebase/data-connect",td="@firebase/database-compat",ed="@firebase/functions",nd="@firebase/functions-compat",rd="@firebase/installations",sd="@firebase/installations-compat",id="@firebase/messaging",od="@firebase/messaging-compat",ad="@firebase/performance",ud="@firebase/performance-compat",cd="@firebase/remote-config",ld="@firebase/remote-config-compat",hd="@firebase/storage",dd="@firebase/storage-compat",fd="@firebase/firestore",pd="@firebase/vertexai",md="@firebase/firestore-compat",gd="firebase",_d="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]",yd={[As]:"fire-core",[Gh]:"fire-core-compat",[Hh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Qh]:"fire-app-check",[Wh]:"fire-app-check-compat",[Yh]:"fire-auth",[Xh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Zh]:"fire-data-connect",[td]:"fire-rtdb-compat",[ed]:"fire-fn",[nd]:"fire-fn-compat",[rd]:"fire-iid",[sd]:"fire-iid-compat",[id]:"fire-fcm",[od]:"fire-fcm-compat",[ad]:"fire-perf",[ud]:"fire-perf-compat",[cd]:"fire-rc",[ld]:"fire-rc-compat",[hd]:"fire-gcs",[dd]:"fire-gcs-compat",[fd]:"fire-fst",[md]:"fire-fst-compat",[pd]:"fire-vertex","fire-js":"fire-js",[gd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Map,Ed=new Map,Ss=new Map;function zo(n,t){try{n.container.addComponent(t)}catch(e){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function te(n){const t=n.name;if(Ss.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;Ss.set(t,n);for(const e of hr.values())zo(e,n);for(const e of Ed.values())zo(e,n);return!0}function Cn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Td(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Ar("app","Firebase",vd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=_d;function lu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=su()),!e)throw Yt.create("no-options");const o=hr.get(s);if(o){if(En(e,o.options)&&En(r,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new bh(s);for(const h of Ss.values())a.addComponent(h);const c=new Id(e,r,a);return hr.set(s,c),c}function hu(n=Rs){const t=hr.get(n);if(!t&&n===Rs&&su())return lu();if(!t)throw Yt.create("no-app",{appName:n});return t}function Vt(n,t,e){var r;let s=(r=yd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}te(new Bt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="firebase-heartbeat-database",Rd=1,Tn="firebase-heartbeat-store";let ps=null;function du(){return ps||(ps=cu(Ad,Rd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),ps}async function Sd(n){try{const e=(await du()).transaction(Tn),r=await e.objectStore(Tn).get(fu(n));return await e.done,r}catch(t){if(t instanceof ae)qt.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(e.message)}}}async function Go(n,t){try{const r=(await du()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,fu(n)),await r.done}catch(e){if(e instanceof ae)qt.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qt.warn(r.message)}}}function fu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=1024,bd=30;class Cd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ko();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>bd){const a=Nd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:r,unsentEntries:s}=Vd(this._heartbeatsCache.heartbeats),o=lr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return qt.warn(e),""}}}function Ko(){return new Date().toISOString().substring(0,10)}function Vd(n,t=Pd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ho(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ho(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iu()?ou().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Go(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Go(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ho(n){return lr(JSON.stringify({version:2,heartbeats:n})).length}function Nd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){te(new Bt("platform-logger",t=>new jh(t),"PRIVATE")),te(new Bt("heartbeat",t=>new Cd(t),"PRIVATE")),Vt(As,jo,n),Vt(As,jo,"esm2017"),Vt("fire-js","")}kd("");var Od="firebase",Md="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(Od,Md,"app");const pu="@firebase/installations",Ws="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=1e4,gu=`w:${Ws}`,_u="FIS_v2",xd="https://firebaseinstallations.googleapis.com/v1",Ld=60*60*1e3,Fd="installations",Ud="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},me=new Ar(Fd,Ud,Bd);function yu(n){return n instanceof ae&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu({projectId:n}){return`${xd}/projects/${n}/installations`}function Tu(n){return{token:n.token,requestStatus:2,expiresIn:$d(n.expiresIn),creationTime:Date.now()}}async function vu(n,t){const r=(await t.json()).error;return me.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Iu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function qd(n,{refreshToken:t}){const e=Iu(n);return e.append("Authorization",jd(t)),e}async function wu(n){const t=await n();return t.status>=500&&t.status<600?n():t}function $d(n){return Number(n.replace("s","000"))}function jd(n){return`${_u} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Eu(n),s=Iu(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:_u,appId:n.appId,sdkVersion:gu},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await wu(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Tu(d.authToken)}}else throw await vu("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=/^[cdef][\w-]{21}$/,Ps="";function Hd(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Wd(n);return Kd.test(e)?e:Ps}catch{return Ps}}function Wd(n){return Gd(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map;function Su(n,t){const e=Rr(n);Pu(e,t),Qd(e,t)}function Pu(n,t){const e=Ru.get(n);if(e)for(const r of e)r(t)}function Qd(n,t){const e=Yd();e&&e.postMessage({key:n,fid:t}),Xd()}let fe=null;function Yd(){return!fe&&"BroadcastChannel"in self&&(fe=new BroadcastChannel("[Firebase] FID Change"),fe.onmessage=n=>{Pu(n.data.key,n.data.fid)}),fe}function Xd(){Ru.size===0&&fe&&(fe.close(),fe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="firebase-installations-database",Zd=1,ge="firebase-installations-store";let ms=null;function Qs(){return ms||(ms=cu(Jd,Zd,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ge)}}})),ms}async function dr(n,t){const e=Rr(n),s=(await Qs()).transaction(ge,"readwrite"),o=s.objectStore(ge),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Su(n,t.fid),t}async function bu(n){const t=Rr(n),r=(await Qs()).transaction(ge,"readwrite");await r.objectStore(ge).delete(t),await r.done}async function Sr(n,t){const e=Rr(n),s=(await Qs()).transaction(ge,"readwrite"),o=s.objectStore(ge),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&Su(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(n){let t;const e=await Sr(n.appConfig,r=>{const s=tf(r),o=ef(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ps?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function tf(n){const t=n||{fid:Hd(),registrationStatus:0};return Cu(t)}function ef(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(me.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=nf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rf(n)}:{installationEntry:t}}async function nf(n,t){try{const e=await zd(n,t);return dr(n.appConfig,e)}catch(e){throw yu(e)&&e.customData.serverCode===409?await bu(n.appConfig):await dr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function rf(n){let t=await Wo(n.appConfig);for(;t.registrationStatus===1;)await Au(100),t=await Wo(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ys(n);return r||e}return t}function Wo(n){return Sr(n,t=>{if(!t)throw me.create("installation-not-found");return Cu(t)})}function Cu(n){return sf(n)?{fid:n.fid,registrationStatus:0}:n}function sf(n){return n.registrationStatus===1&&n.registrationTime+mu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of({appConfig:n,heartbeatServiceProvider:t},e){const r=af(n,e),s=qd(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:gu,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await wu(()=>fetch(r,c));if(h.ok){const d=await h.json();return Tu(d)}else throw await vu("Generate Auth Token",h)}function af(n,{fid:t}){return`${Eu(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(n,t=!1){let e;const r=await Sr(n.appConfig,o=>{if(!Vu(o))throw me.create("not-registered");const a=o.authToken;if(!t&&lf(a))return o;if(a.requestStatus===1)return e=uf(n,t),o;{if(!navigator.onLine)throw me.create("app-offline");const c=df(o);return e=cf(n,c),c}});return e?await e:r.authToken}async function uf(n,t){let e=await Qo(n.appConfig);for(;e.authToken.requestStatus===1;)await Au(100),e=await Qo(n.appConfig);const r=e.authToken;return r.requestStatus===0?Xs(n,t):r}function Qo(n){return Sr(n,t=>{if(!Vu(t))throw me.create("not-registered");const e=t.authToken;return ff(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function cf(n,t){try{const e=await of(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await dr(n.appConfig,r),e}catch(e){if(yu(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await bu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await dr(n.appConfig,r)}throw e}}function Vu(n){return n!==void 0&&n.registrationStatus===2}function lf(n){return n.requestStatus===2&&!hf(n)}function hf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Ld}function df(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function ff(n){return n.requestStatus===1&&n.requestTime+mu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n){const t=n,{installationEntry:e,registrationPromise:r}=await Ys(t);return r?r.catch(console.error):Xs(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n,t=!1){const e=n;return await gf(e),(await Xs(e,t)).token}async function gf(n){const{registrationPromise:t}=await Ys(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n){if(!n||!n.options)throw gs("App Configuration");if(!n.name)throw gs("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw gs(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function gs(n){return me.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="installations",yf="installations-internal",Ef=n=>{const t=n.getProvider("app").getImmediate(),e=_f(t),r=Cn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Tf=n=>{const t=n.getProvider("app").getImmediate(),e=Cn(t,Du).getImmediate();return{getId:()=>pf(e),getToken:s=>mf(e,s)}};function vf(){te(new Bt(Du,Ef,"PUBLIC")),te(new Bt(yf,Tf,"PRIVATE"))}vf();Vt(pu,Ws);Vt(pu,Ws,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="analytics",If="firebase_id",wf="origin",Af=60*1e3,Rf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Js="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Ks("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new Ar("analytics","Analytics",Sf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n){if(!n.startsWith(Js)){const t=wt.create("invalid-gtag-resource",{gtagURL:n});return vt.warn(t.message),""}return n}function Nu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function bf(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Cf(n,t){const e=bf("firebase-js-sdk-policy",{createScriptURL:Pf}),r=document.createElement("script"),s=`${Js}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Vf(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Df(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Nu(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){vt.error(c)}n("config",s,o)}async function Nf(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Nu(e);for(const h of a){const d=c.find(v=>v.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){vt.error(o)}}function kf(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await Nf(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await Df(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){vt.error(c)}}return s}function Of(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=kf(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Mf(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Js)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=30,Lf=1e3;class Ff{constructor(t={},e=Lf){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ku=new Ff;function Uf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Bf(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Uf(r)},o=Rf.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function qf(n,t=ku,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw wt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw wt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new zf;return setTimeout(async()=>{c.abort()},Af),Ou({appId:r,apiKey:s,measurementId:o},a,c,t)}async function Ou(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=ku){var o;const{appId:a,measurementId:c}=n;try{await $f(r,t)}catch(h){if(c)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await Bf(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!jf(d)){if(s.deleteThrottleMetadata(a),c)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Uo(e,s.intervalMillis,xf):Uo(e,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,v),vt.debug(`Calling attemptFetch again in ${p} millis`),Ou(n,v,r,s)}}function $f(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(wt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function jf(n){if(!(n instanceof ae)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class zf{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Gf(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(){if(iu())try{await ou()}catch(n){return vt.warn(wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vt.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hf(n,t,e,r,s,o,a){var c;const h=qf(n);h.then(b=>{e[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>vt.error(b)),t.push(h);const d=Kf().then(b=>{if(b)return r.getId()}),[p,v]=await Promise.all([h,d]);Mf(o)||Cf(o,p.measurementId),s("js",new Date);const R=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return R[wf]="firebase",R.update=!0,v!=null&&(R[If]=v),s("config",p.measurementId,R),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t){this.app=t}_delete(){return delete pn[this.app.options.appId],Promise.resolve()}}let pn={},Yo=[];const Xo={};let _s="dataLayer",Qf="gtag",Jo,Mu,Zo=!1;function Yf(){const n=[];if(mh()&&n.push("This is a browser extension environment."),_h()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=wt.create("invalid-analytics-context",{errorInfo:t});vt.warn(e.message)}}function Xf(n,t,e){Yf();const r=n.options.appId;if(!r)throw wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(pn[r]!=null)throw wt.create("already-exists",{id:r});if(!Zo){Vf(_s);const{wrappedGtag:o,gtagCore:a}=Of(pn,Yo,Xo,_s,Qf);Mu=o,Jo=a,Zo=!0}return pn[r]=Hf(n,Yo,Xo,t,Jo,_s,e),new Wf(n)}function Jf(n=hu()){n=Zt(n);const t=Cn(n,fr);return t.isInitialized()?t.getImmediate():Zf(n)}function Zf(n,t={}){const e=Cn(n,fr);if(e.isInitialized()){const s=e.getImmediate();if(En(t,e.getOptions()))return s;throw wt.create("already-initialized")}return e.initialize({options:t})}function tp(n,t,e,r){n=Zt(n),Gf(Mu,pn[n.app.options.appId],t,e,r).catch(s=>vt.error(s))}const ta="@firebase/analytics",ea="0.10.12";function ep(){te(new Bt(fr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Xf(r,s,e)},"PUBLIC")),te(new Bt("analytics-internal",n,"PRIVATE")),Vt(ta,ea),Vt(ta,ea,"esm2017");function n(t){try{const e=t.getProvider(fr).getImmediate();return{logEvent:(r,s,o)=>tp(e,r,s,o)}}catch(e){throw wt.create("interop-component-reg-failed",{reason:e})}}}ep();var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,xu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,w){for(var g=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)g[Mt-2]=arguments[Mt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var w=T.g[3],g=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<m;)if(y[E++]=T[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return V(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var v=h(0),R=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-V(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(O(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var E=st(_,m).g;_=K(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,k(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=K(this,T),O(T)?-1:k(T)?0:1};function V(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new a(_,~T.h).add(R)}n.abs=function(){return O(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(T,m){return T.add(V(m))}n.j=function(T){if(k(this)||k(T))return v;if(O(this))return O(T)?V(this).j(V(T)):V(V(this).j(T));if(O(T))return V(this.j(V(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,Mt=T.i(E)>>>16,Ke=T.i(E)&65535;_[2*y+2*E]+=g*Ke,G(_,2*y+2*E),_[2*y+2*E+1]+=w*Ke,G(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Mt,G(_,2*y+2*E+1),_[2*y+2*E+2]+=w*Mt,G(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function G(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function st(T,m){if(k(m))throw Error("division by zero");if(k(T))return new H(v,v);if(O(T))return m=st(V(T),m),new H(V(m.g),V(m.h));if(O(m))return m=st(T,V(m)),new H(V(m.g),m.h);if(30<T.g.length){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=Ot(_),y=Ot(y);var E=ot(_,1),w=ot(y,1);for(y=ot(y,2),_=ot(_,2);!k(y);){var g=w.add(y);0>=g.l(T)&&(E=E.add(_),w=g),y=ot(y,1),_=ot(_,1)}return m=K(T,E.j(m)),new H(E,m)}for(E=v;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);O(g)||0<g.l(T);)_-=y,w=d(_),g=w.j(m);k(w)&&(w=R),E=E.add(w),T=K(T,g)}return new H(E,T)}n.A=function(T){return st(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function Ot(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Xt=a}).apply(typeof na<"u"?na:typeof self<"u"?self:typeof window<"u"?window:{});var Zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lu,ln,Fu,sr,bs,Uu,Bu,qu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zn=="object"&&Zn];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in l))break t;l=l[I]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,I={next:function(){if(!f&&l<i.length){var A=l++;return{value:u(A,i[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,l){return i.call.apply(i.bind,arguments)}function v(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function R(i,u,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,R.apply(null,arguments)}function b(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function k(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,I,A){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return u.prototype[I].apply(f,C)}}function O(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=i.length||0,A=f.length||0;i.length=I+A;for(let C=0;C<A;C++)i[I+C]=f[C]}else i.push(f)}}class K{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var Ot=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ot(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)i[l]=f[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function E(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function g(){var i=qr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Mt{constructor(){this.h=this.g=null}add(u,l){const f=Ke.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Ke=new K(()=>new El,i=>i.reset());class El{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let He,We=!1,qr=new Mt,xi=()=>{const i=c.Promise.resolve(void 0);He=()=>{i.then(Tl)}};var Tl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){w(l)}var u=Ke;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}We=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var vl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Qe(i,u){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Ot){t:{try{st(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Il[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Qe.aa.h.call(this)}}k(Qe,ht);var Il={2:"touch",3:"pen",4:"mouse"};Qe.prototype.h=function(){Qe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),wl=0;function Al(i,u,l,f,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=I,this.key=++wl,this.da=this.fa=!1}function Mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function xn(i){this.src=i,this.g={},this.h=0}xn.prototype.add=function(i,u,l,f,I){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var C=jr(i,u,f,I);return-1<C?(u=i[C],l||(u.fa=!1)):(u=new Al(u,this.src,A,!!f,I),u.fa=l,i.push(u)),u};function $r(i,u){var l=u.type;if(l in i.g){var f=i.g[l],I=Array.prototype.indexOf.call(f,u,void 0),A;(A=0<=I)&&Array.prototype.splice.call(f,I,1),A&&(Mn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function jr(i,u,l,f){for(var I=0;I<i.length;++I){var A=i[I];if(!A.da&&A.listener==u&&A.capture==!!l&&A.ha==f)return I}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),Gr={};function Li(i,u,l,f,I){if(Array.isArray(u)){for(var A=0;A<u.length;A++)Li(i,u[A],l,f,I);return null}return l=Bi(l),i&&i[On]?i.K(u,l,d(f)?!!f.capture:!1,I):Rl(i,u,l,!1,f,I)}function Rl(i,u,l,f,I,A){if(!u)throw Error("Invalid event type");var C=d(I)?!!I.capture:!!I,W=Hr(i);if(W||(i[zr]=W=new xn(i)),l=W.add(u,l,f,C,A),l.proxy)return l;if(f=Sl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)vl||(I=C),I===void 0&&(I=!1),i.addEventListener(u.toString(),f,I);else if(i.attachEvent)i.attachEvent(Ui(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Sl(){function i(l){return u.call(i.src,i.listener,l)}const u=Pl;return i}function Fi(i,u,l,f,I){if(Array.isArray(u))for(var A=0;A<u.length;A++)Fi(i,u[A],l,f,I);else f=d(f)?!!f.capture:!!f,l=Bi(l),i&&i[On]?(i=i.i,u=String(u).toString(),u in i.g&&(A=i.g[u],l=jr(A,l,f,I),-1<l&&(Mn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[u],i.h--)))):i&&(i=Hr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=jr(u,l,f,I)),(l=-1<i?u[i]:null)&&Kr(l))}function Kr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[On])$r(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(Ui(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=Hr(u))?($r(l,i),l.h==0&&(l.src=null,u[zr]=null)):Mn(i)}}}function Ui(i){return i in Gr?Gr[i]:Gr[i]="on"+i}function Pl(i,u){if(i.da)i=!0;else{u=new Qe(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&Kr(i),i=l.call(f,u)}return i}function Hr(i){return i=i[zr],i instanceof xn?i:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bi(i){return typeof i=="function"?i:(i[Wr]||(i[Wr]=function(u){return i.handleEvent(u)}),i[Wr])}function dt(){zt.call(this),this.i=new xn(this),this.M=this,this.F=null}k(dt,zt),dt.prototype[On]=!0,dt.prototype.removeEventListener=function(i,u,l,f){Fi(this,i,u,l,f)};function yt(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new ht(u,i);else if(u instanceof ht)u.target=u.target||i;else{var I=u;u=new ht(f,i),y(u,I)}if(I=!0,l)for(var A=l.length-1;0<=A;A--){var C=u.g=l[A];I=Ln(C,f,!0,u)&&I}if(C=u.g=i,I=Ln(C,f,!0,u)&&I,I=Ln(C,f,!1,u)&&I,l)for(A=0;A<l.length;A++)C=u.g=l[A],I=Ln(C,f,!1,u)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Mn(l[f]);delete i.g[u],i.h--}}this.F=null},dt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},dt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function Ln(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,A=0;A<u.length;++A){var C=u[A];if(C&&!C.da&&C.capture==l){var W=C.listener,at=C.ha||C.src;C.fa&&$r(i.i,C),I=W.call(at,f)!==!1&&I}}return I&&!f.defaultPrevented}function qi(i,u,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function $i(i){i.g=qi(()=>{i.g=null,i.i&&(i.i=!1,$i(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class bl extends zt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$i(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(i){zt.call(this),this.h=i,this.g={}}k(Ye,zt);var ji=[];function zi(i){ot(i.g,function(u,l){this.g.hasOwnProperty(l)&&Kr(u)},i),i.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),zi(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=c.JSON.stringify,Cl=c.JSON.parse,Vl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Yr(){}Yr.prototype.h=null;function Gi(i){return i.h||(i.h=i.i())}function Ki(){}var Xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){ht.call(this,"d")}k(Xr,ht);function Jr(){ht.call(this,"c")}k(Jr,ht);var ue={},Hi=null;function Fn(){return Hi=Hi||new dt}ue.La="serverreachability";function Wi(i){ht.call(this,ue.La,i)}k(Wi,ht);function Je(i){const u=Fn();yt(u,new Wi(u))}ue.STAT_EVENT="statevent";function Qi(i,u){ht.call(this,ue.STAT_EVENT,i),this.stat=u}k(Qi,ht);function Et(i){const u=Fn();yt(u,new Qi(u,i))}ue.Ma="timingevent";function Yi(i,u){ht.call(this,ue.Ma,i),this.size=u}k(Yi,ht);function Ze(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function tn(){this.g=!0}tn.prototype.xa=function(){this.g=!1};function Dl(i,u,l,f,I,A){i.info(function(){if(i.g)if(A)for(var C="",W=A.split("&"),at=0;at<W.length;at++){var j=W[at].split("=");if(1<j.length){var ft=j[0];j=j[1];var pt=ft.split("_");C=2<=pt.length&&pt[1]=="type"?C+(ft+"="+j+"&"):C+(ft+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+l+`
`+C})}function Nl(i,u,l,f,I,A,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+l+`
`+A+" "+C})}function Ae(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ol(i,l)+(f?" "+f:"")})}function kl(i,u){i.info(function(){return"TIMEOUT: "+u})}tn.prototype.info=function(){};function Ol(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return Qr(l)}catch{return u}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zr;function Bn(){}k(Bn,Yr),Bn.prototype.g=function(){return new XMLHttpRequest},Bn.prototype.i=function(){return{}},Zr=new Bn;function Gt(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ji}function Ji(){this.i=null,this.g="",this.h=!1}var Zi={},ts={};function es(i,u,l){i.L=1,i.v=zn(xt(u)),i.m=l,i.P=!0,to(i,null)}function to(i,u){i.F=Date.now(),qn(i),i.A=xt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),mo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Ji,i.g=ko(i.j,l?u:null,!i.m),0<i.O&&(i.M=new bl(R(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(ji[0]=I.toString()),I=ji);for(var A=0;A<I.length;A++){var C=Li(l,I[A],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Je(),Dl(i.i,i.u,i.A,i.l,i.R,i.m)}Gt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Lt(i)==3?u.j():this.Y(i)},Gt.prototype.Y=function(i){try{if(i==this.g)t:{const pt=Lt(this.g);var u=this.g.Ba();const Pe=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Io(this.g)))){this.J||pt!=4||u==7||(u==8||0>=Pe?Je(3):Je(2)),ns(this);var l=this.g.Z();this.X=l;e:if(eo(this)){var f=Io(this.g);i="";var I=f.length,A=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),en(this);var C="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(A&&u==I-1)});f.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Nl(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(W)){var j=W;break e}}j=null}if(l=j)Ae(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,l);else{this.o=!1,this.s=3,Et(12),ce(this),en(this);break t}}if(this.P){l=!0;let St;for(;!this.J&&this.C<C.length;)if(St=Ml(this,C),St==ts){pt==4&&(this.s=4,Et(14),l=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Zi){this.s=4,Et(15),Ae(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Ae(this.i,this.l,St,null),rs(this,St);if(eo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)Ae(this.i,this.l,C,"[Invalid Chunked Response]"),ce(this),en(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),cs(ft),ft.M=!0,Et(11))}}else Ae(this.i,this.l,C,null),rs(this,C);pt==4&&ce(this),this.o&&!this.J&&(pt==4?Co(this.j,this):(this.o=!1,qn(this)))}else Jl(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ce(this),en(this)}}}catch{}finally{}};function eo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Ml(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?ts:(l=Number(u.substring(l,f)),isNaN(l)?Zi:(f+=1,f+l>u.length?ts:(u=u.slice(f,f+l),i.C=f+l,u)))}Gt.prototype.cancel=function(){this.J=!0,ce(this)};function qn(i){i.S=Date.now()+i.I,no(i,i.I)}function no(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ze(R(i.ba,i),u)}function ns(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(kl(this.i,this.A),this.L!=2&&(Je(),Et(17)),ce(this),this.s=2,en(this)):no(this,this.S-i)};function en(i){i.j.G==0||i.J||Co(i.j,i)}function ce(i){ns(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,zi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function rs(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||ss(l.h,i))){if(!i.K&&ss(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Yn(l),Wn(l);else break t;us(l),Et(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ze(R(l.Za,l),6e3));if(1>=io(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else he(l,11)}else if((i.K||l.g==i)&&Yn(l),!G(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let j=I[u];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ft=j[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const pt=j[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const Pe=j[5];Pe!=null&&typeof Pe=="number"&&0<Pe&&(f=1.5*Pe,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const St=i.g;if(St){const Jn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var A=f.h;A.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(is(A,A.h),A.h=null))}if(f.D){const ls=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;ls&&(f.ya=ls,Q(f.I,f.D,ls))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=i;if(f.qa=No(f,f.J?f.ia:null,f.W),C.K){oo(f.h,C);var W=C,at=f.L;at&&(W.I=at),W.B&&(ns(W),qn(W)),f.g=C}else Po(f);0<l.i.length&&Qn(l)}else j[0]!="stop"&&j[0]!="close"||he(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?he(l,7):as(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Je(4)}catch{}}var xl=class{constructor(i,u){this.g=i,this.map=u}};function ro(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function so(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function io(i){return i.h?1:i.g?i.g.size:0}function ss(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function is(i,u){i.g?i.g.add(u):i.h=u}function oo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}ro.prototype.cancel=function(){if(this.i=ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ao(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return O(i.i)}function Ll(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function Fl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function uo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Fl(i),f=Ll(i),I=f.length,A=0;A<I;A++)u.call(void 0,f[A],l&&l[A],i)}var co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ul(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),I=null;if(0<=f){var A=i[l].substring(0,f);I=i[l].substring(f+1)}else A=i[l];u(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function le(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof le){this.h=i.h,$n(this,i.j),this.o=i.o,this.g=i.g,jn(this,i.s),this.l=i.l;var u=i.i,l=new sn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),lo(this,l),this.m=i.m}else i&&(u=String(i).match(co))?(this.h=!1,$n(this,u[1]||"",!0),this.o=nn(u[2]||""),this.g=nn(u[3]||"",!0),jn(this,u[4]),this.l=nn(u[5]||"",!0),lo(this,u[6]||"",!0),this.m=nn(u[7]||"")):(this.h=!1,this.i=new sn(null,this.h))}le.prototype.toString=function(){var i=[],u=this.j;u&&i.push(rn(u,ho,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(rn(u,ho,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(rn(l,l.charAt(0)=="/"?$l:ql,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",rn(l,zl)),i.join("")};function xt(i){return new le(i)}function $n(i,u,l){i.j=l?nn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function jn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function lo(i,u,l){u instanceof sn?(i.i=u,Gl(i.i,i.h)):(l||(u=rn(u,jl)),i.i=new sn(u,i.h))}function Q(i,u,l){i.i.set(u,l)}function zn(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function nn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function rn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Bl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Bl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ho=/[#\/\?@]/g,ql=/[#\?:]/g,$l=/[#\?]/g,jl=/[#\?@]/g,zl=/#/g;function sn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Kt(i){i.g||(i.g=new Map,i.h=0,i.i&&Ul(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=sn.prototype,n.add=function(i,u){Kt(this),this.i=null,i=Re(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function fo(i,u){Kt(i),u=Re(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function po(i,u){return Kt(i),u=Re(i,u),i.g.has(u)}n.forEach=function(i,u){Kt(this),this.g.forEach(function(l,f){l.forEach(function(I){i.call(u,I,f,this)},this)},this)},n.na=function(){Kt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const I=i[f];for(let A=0;A<I.length;A++)l.push(u[f])}return l},n.V=function(i){Kt(this);let u=[];if(typeof i=="string")po(this,i)&&(u=u.concat(this.g.get(Re(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Kt(this),this.i=null,i=Re(this,i),po(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function mo(i,u,l){fo(i,u),0<l.length&&(i.i=null,i.g.set(Re(i,u),O(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var I=A;C[f]!==""&&(I+="="+encodeURIComponent(String(C[f]))),i.push(I)}}return this.i=i.join("&")};function Re(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Gl(i,u){u&&!i.j&&(Kt(i),i.i=null,i.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(fo(this,f),mo(this,I,l))},i)),i.j=u}function Kl(i,u){const l=new tn;if(c.Image){const f=new Image;f.onload=b(Ht,l,"TestLoadImage: loaded",!0,u,f),f.onerror=b(Ht,l,"TestLoadImage: error",!1,u,f),f.onabort=b(Ht,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=b(Ht,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Hl(i,u){const l=new tn,f=new AbortController,I=setTimeout(()=>{f.abort(),Ht(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(A=>{clearTimeout(I),A.ok?Ht(l,"TestPingServer: ok",!0,u):Ht(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Ht(l,"TestPingServer: error",!1,u)})}function Ht(i,u,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function Wl(){this.g=new Vl}function Ql(i,u,l){const f=l||"";try{uo(i,function(I,A){let C=I;d(I)&&(C=Qr(I)),u.push(f+A+"="+encodeURIComponent(C))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Gn(i){this.l=i.Ub||null,this.j=i.eb||!1}k(Gn,Yr),Gn.prototype.g=function(){return new Kn(this.l,this.j)},Gn.prototype.i=function(i){return function(){return i}}({});function Kn(i,u){dt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Kn,dt),n=Kn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,an(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;go(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function go(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?on(this):an(this),this.readyState==3&&go(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,on(this))},n.Qa=function(i){this.g&&(this.response=i,on(this))},n.ga=function(){this.g&&on(this)};function on(i){i.readyState=4,i.l=null,i.j=null,i.v=null,an(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function an(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function _o(i){let u="";return ot(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function os(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=_o(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Q(i,u,l))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,dt);var Yl=/^https?$/i,Xl=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zr.g(),this.v=this.o?Gi(this.o):Gi(Zr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(A){yo(this,A);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())l.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xl,u,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vo(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){yo(this,A)}};function yo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Eo(i),Hn(i)}function Eo(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Hn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?To(this):this.bb())},n.bb=function(){To(this)};function To(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Lt(i)!=4||i.Z()!=2)){if(i.u&&Lt(i)==4)qi(i.Ea,0,i);else if(yt(i,"readystatechange"),Lt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=C===0){var I=String(i.D).match(co)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Yl.test(I?I.toLowerCase():"")}l=f}if(l)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var A=2<Lt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",Eo(i)}}finally{Hn(i)}}}}function Hn(i,u){if(i.g){vo(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||yt(i,"ready");try{l.onreadystatechange=f}catch{}}}function vo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Lt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Cl(u)}};function Io(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Jl(i){const u={};i=(i.g&&2<=Lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(G(i[f]))continue;var l=E(i[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=u[I]||[];u[I]=A,A.push(l)}T(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function un(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function wo(i){this.Aa=0,this.i=[],this.j=new tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=un("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=un("baseRetryDelayMs",5e3,i),this.cb=un("retryDelaySeedMs",1e4,i),this.Wa=un("forwardChannelMaxRetries",2,i),this.wa=un("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ro(i&&i.concurrentRequestLimit),this.Da=new Wl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){Et(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=No(this,null,this.W),Qn(this)};function as(i){if(Ao(i),i.G==3){var u=i.U++,l=xt(i.I);if(Q(l,"SID",i.K),Q(l,"RID",u),Q(l,"TYPE","terminate"),cn(i,l),u=new Gt(i,i.j,u),u.L=2,u.v=zn(xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=ko(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qn(u)}Do(i)}function Wn(i){i.g&&(cs(i),i.g.cancel(),i.g=null)}function Ao(i){Wn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Yn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Qn(i){if(!so(i.h)&&!i.s){i.s=!0;var u=i.Ga;He||xi(),We||(He(),We=!0),qr.add(u,i),i.B=0}}function Zl(i,u){return io(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ze(R(i.Ga,i,u),Vo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Gt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=So(this,I,u),l=xt(this.I),Q(l,"RID",i),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),cn(this,l),A&&(this.O?u="headers="+encodeURIComponent(String(_o(A)))+"&"+u:this.m&&os(l,this.m,A)),is(this.h,I),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",u),Q(l,"SID","null"),I.T=!0,es(I,l,null)):es(I,l,u),this.G=2}}else this.G==3&&(i?Ro(this,i):this.i.length==0||so(this.h)||Ro(this))};function Ro(i,u){var l;u?l=u.l:l=i.U++;const f=xt(i.I);Q(f,"SID",i.K),Q(f,"RID",l),Q(f,"AID",i.T),cn(i,f),i.m&&i.o&&os(f,i.m,i.o),l=new Gt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=So(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),is(i.h,l),es(l,f,u)}function cn(i,u){i.H&&ot(i.H,function(l,f){Q(u,f,l)}),i.l&&uo({},function(l,f){Q(u,f,l)})}function So(i,u,l){l=Math.min(i.i.length,l);var f=i.l?R(i.l.Na,i.l,i):null;t:{var I=i.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=I[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let W=!0;for(let at=0;at<l;at++){let j=I[at].g;const ft=I[at].map;if(j-=A,0>j)A=Math.max(0,I[at].g-100),W=!1;else try{Ql(ft,C,"req"+j+"_")}catch{f&&f(ft)}}if(W){f=C.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Po(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;He||xi(),We||(He(),We=!0),qr.add(u,i),i.v=0}}function us(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ze(R(i.Fa,i),Vo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,bo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ze(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Wn(this),bo(this))};function cs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function bo(i){i.g=new Gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=xt(i.qa);Q(u,"RID","rpc"),Q(u,"SID",i.K),Q(u,"AID",i.T),Q(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(u,"TO",i.ja),Q(u,"TYPE","xmlhttp"),cn(i,u),i.m&&i.o&&os(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=zn(xt(u)),l.m=null,l.P=!0,to(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),us(this),Et(19))};function Yn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Co(i,u){var l=null;if(i.g==u){Yn(i),cs(i),i.g=null;var f=2}else if(ss(i.h,u))l=u.D,oo(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;f=Fn(),yt(f,new Yi(f,l)),Qn(i)}else Po(i);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&Zl(i,u)||f==2&&us(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:he(i,5);break;case 4:he(i,10);break;case 3:he(i,6);break;default:he(i,2)}}}function Vo(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function he(i,u){if(i.j.info("Error code "+u),u==2){var l=R(i.fb,i),f=i.Xa;const I=!f;f=new le(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$n(f,"https"),zn(f),I?Kl(f.toString(),l):Hl(f.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(u),Do(i),Ao(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Do(i){if(i.G=0,i.ka=[],i.l){const u=ao(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function No(i,u,l){var f=l instanceof le?xt(l):new le(l);if(f.g!="")u&&(f.g=u+"."+f.g),jn(f,f.s);else{var I=c.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var A=new le(null);f&&$n(A,f),u&&(A.g=u),I&&jn(A,I),l&&(A.l=l),f=A}return l=i.D,u=i.ya,l&&u&&Q(f,l,u),Q(f,"VER",i.la),cn(i,f),f}function ko(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new J(new Gn({eb:l})):new J(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oo(){}n=Oo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xn(){}Xn.prototype.g=function(i,u){return new It(i,u)};function It(i,u){dt.call(this),this.g=new wo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!G(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Se(this)}k(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){as(this.g)},It.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Qr(i),i=l);u.i.push(new xl(u.Ya++,i)),u.G==3&&Qn(u)},It.prototype.N=function(){this.g.l=null,delete this.j,as(this.g),delete this.g,It.aa.N.call(this)};function Mo(i){Xr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}k(Mo,Xr);function xo(){Jr.call(this),this.status=1}k(xo,Jr);function Se(i){this.g=i}k(Se,Oo),Se.prototype.ua=function(){yt(this.g,"a")},Se.prototype.ta=function(i){yt(this.g,new Mo(i))},Se.prototype.sa=function(i){yt(this.g,new xo)},Se.prototype.ra=function(){yt(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,qu=function(){return new Xn},Bu=function(){return Fn()},Uu=ue,bs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,sr=Un,Xi.COMPLETE="complete",Fu=Xi,Ki.EventType=Xe,Xe.OPEN="a",Xe.CLOSE="b",Xe.ERROR="c",Xe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,ln=Ki,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Lu=J}).apply(typeof Zn<"u"?Zn:typeof self<"u"?self:typeof window<"u"?window:{});const ra="@firebase/firestore",sa="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new Ks("@firebase/firestore");function be(){return _e.logLevel}function D(n,...t){if(_e.logLevel<=$.DEBUG){const e=t.map(Zs);_e.debug(`Firestore (${qe}): ${n}`,...e)}}function $t(n,...t){if(_e.logLevel<=$.ERROR){const e=t.map(Zs);_e.error(`Firestore (${qe}): ${n}`,...e)}}function ke(n,...t){if(_e.logLevel<=$.WARN){const e=t.map(Zs);_e.warn(`Firestore (${qe}): ${n}`,...e)}}function Zs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,$u(n,r,e)}function $u(n,t,e){let r=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw $t(r),new Error(r)}function z(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||$u(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class np{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class rp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class sp{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ft,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ft)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string",31837,{l:r}),new ju(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class ip{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class op{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new ip(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ia{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ap{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Td(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){z(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ia(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ia(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=up(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function Cs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=zu(),a=cp(o.encode(oa(n,e)),o.encode(oa(t,e)));return a!==0?a:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function oa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function cp(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Oe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=-62135596800,ua=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ua);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<aa)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ua}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-aa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="__name__";class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ct.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),s=Ct.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):Cs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xt.fromString(t.substring(4,t.length-2))}}class Y extends Ct{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const lp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ct{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return lp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ca}static keyField(){return new ct([ca])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=-1;function hp(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new ee(s,M.empty(),t)}function dp(n){return new ee(n.readTime,n.key,vn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(L.min(),M.empty(),vn)}static max(){return new ee(L.max(),M.empty(),vn)}}function fp(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==pp)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++c,c===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function gp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function je(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Pr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=-1;function br(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function _p(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="";function yp(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=la(t)),t=Ep(n.get(e),t);return la(t)}function Ep(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Ku:e+="";break;default:e+=o}}return e}function la(n){return n+Ku+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ee(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Hu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new tr(this.root,t,this.comparator,!0)}}class tr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(t){return new da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new rt(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Oe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wu("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Tp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(z(!!n,39018),typeof n=="string"){let t=0;const e=Tp.exec(n);if(z(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="server_timestamp",Yu="__type__",Xu="__previous_value__",Ju="__local_write_time__";function ei(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Yu])===null||e===void 0?void 0:e.stringValue)===Qu}function Cr(n){const t=n.mapValue.fields[Xu];return ei(t)?Cr(t):t}function In(n){const t=ne(n.mapValue.fields[Ju].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const mr="(default)";class wn{constructor(t,e){this.projectId=t,this.database=e||mr}static empty(){return new wn("","")}get isDefaultDatabase(){return this.database===mr}isEqual(t){return t instanceof wn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="__type__",Ip="__max__",er={mapValue:{}},tc="__vector__",gr="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ei(n)?4:Ap(n)?9007199254740991:wp(n)?10:11:x(28295,{value:n})}function kt(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return In(n).isEqual(In(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ne(s.timestampValue),c=ne(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return re(s.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),c=Z(o.doubleValue);return a===c?pr(a)===pr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Oe(n.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ha(a)!==ha(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!kt(a[h],c[h])))return!1;return!0}(n,t);default:return x(52216,{left:n})}}function An(n,t){return(n.values||[]).find(e=>kt(e,t))!==void 0}function Me(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return fa(n.timestampValue,t.timestampValue);case 4:return fa(In(n),In(t));case 5:return Cs(n.stringValue,t.stringValue);case 6:return function(o,a){const c=re(o),h=re(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=U(c[d],h[d]);if(p!==0)return p}return U(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=U(Z(o.latitude),Z(a.latitude));return c!==0?c:U(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return pa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,p;const v=o.fields||{},R=a.fields||{},b=(c=v[gr])===null||c===void 0?void 0:c.arrayValue,k=(h=R[gr])===null||h===void 0?void 0:h.arrayValue,O=U(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:pa(b,k)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===er.mapValue&&a===er.mapValue)return 0;if(o===er.mapValue)return 1;if(a===er.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const R=Cs(h[v],p[v]);if(R!==0)return R;const b=Me(c[h[v]],d[p[v]]);if(b!==0)return b}return U(h.length,p.length)}(n.mapValue,t.mapValue);default:throw x(23264,{Pe:e})}}function fa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ne(n),r=ne(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function pa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Me(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function xe(n){return Vs(n)}function Vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Vs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Vs(e.fields[a])}`;return s+"}"}(n.mapValue):x(61005,{value:n})}function ir(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Cr(n);return t?16+ir(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ir(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ee(r.fields,(o,a)=>{s+=o.length+ir(a)}),s}(n.mapValue);default:throw x(13486,{value:n})}}function ma(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ds(n){return!!n&&"integerValue"in n}function ni(n){return!!n&&"arrayValue"in n}function ga(n){return!!n&&"nullValue"in n}function _a(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function or(n){return!!n&&"mapValue"in n}function wp(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Zu])===null||e===void 0?void 0:e.stringValue)===tc}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ee(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Ap(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ip}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!or(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mn(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=mn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());or(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];or(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ee(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Rt(mn(this.value))}}function ec(n){const t=[];return Ee(n.fields,(e,r)=>{const s=new ct([e]);if(or(r)){const o=ec(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this.position=t,this.inclusive=e}}function ya(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Me(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ea(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{}class et extends nc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pp(t,e,r):e==="array-contains"?new Vp(t,r):e==="in"?new Dp(t,r):e==="not-in"?new Np(t,r):e==="array-contains-any"?new kp(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bp(t,r):new Cp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Me(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends nc{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new bt(t,e)}matches(t){return rc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function rc(n){return n.op==="and"}function sc(n){return Sp(n)&&rc(n)}function Sp(n){for(const t of n.filters)if(t instanceof bt)return!1;return!0}function Ns(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+xe(n.value);if(sc(n))return n.filters.map(t=>Ns(t)).join(",");{const t=n.filters.map(e=>Ns(e)).join(",");return`${n.op}(${t})`}}function ic(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&kt(r.value,s.value)}(n,t):n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&ic(a,s.filters[c]),!0):!1}(n,t):void x(19439)}function oc(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(n):n instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(oc).join(" ,")+"}"}(n):"Filter"}class Pp extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class bp extends et{constructor(t,e){super(t,"in",e),this.keys=ac("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Cp extends et{constructor(t,e){super(t,"not-in",e),this.keys=ac("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ac(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Vp extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ni(e)&&An(e.arrayValue,this.value)}}class Dp extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class Np extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!An(this.value.arrayValue,e)}}class kp extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ni(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>An(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function Ta(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Op(n,t,e,r,s,o,a)}function ri(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ns(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),br(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>xe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>xe(r)).join(",")),t.Ie=e}return t.Ie}function si(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ic(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ea(n.startAt,t.startAt)&&Ea(n.endAt,t.endAt)}function ks(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Mp(n,t,e,r,s,o,a,c){return new ze(n,t,e,r,s,o,a,c)}function ii(n){return new ze(n)}function va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uc(n){return n.collectionGroup!==null}function gn(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new rt(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Rn(o,r))}),e.has(ct.keyField().canonicalString())||t.Ee.push(new Rn(ct.keyField(),r))}return t.Ee}function Dt(n){const t=F(n);return t.de||(t.de=xp(t,gn(n))),t.de}function xp(n,t){if(n.limitType==="F")return Ta(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Rn(s.field,o)});const e=n.endAt?new _r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _r(n.startAt.position,n.startAt.inclusive):null;return Ta(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Os(n,t){const e=n.filters.concat([t]);return new ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ms(n,t,e){return new ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Vr(n,t){return si(Dt(n),Dt(t))&&n.limitType===t.limitType}function cc(n){return`${ri(Dt(n))}|lt:${n.limitType}`}function Ce(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>oc(s)).join(", ")}]`),br(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>xe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>xe(s)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function Dr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of gn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=ya(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,gn(r),s)||r.endAt&&!function(a,c,h){const d=ya(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,gn(r),s))}(n,t)}function Lp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lc(n){return(t,e)=>{let r=!1;for(const s of gn(n)){const o=Fp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Fp(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Me(h,d):x(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new X(M.comparator);function jt(){return Up}const hc=new X(M.comparator);function hn(...n){let t=hc;for(const e of n)t=t.insert(e.key,e);return t}function dc(n){let t=hc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pe(){return _n()}function fc(){return _n()}function _n(){return new Te(n=>n.toString(),(n,t)=>n.isEqual(t))}const Bp=new X(M.comparator),qp=new rt(M.comparator);function B(...n){let t=qp;for(const e of n)t=t.add(e);return t}const $p=new rt(U);function jp(){return $p}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function pc(n){return{integerValue:""+n}}function zp(n,t){return _p(t)?pc(t):oi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this._=void 0}}function Gp(n,t,e){return n instanceof Sn?function(s,o){const a={fields:{[Yu]:{stringValue:Qu},[Ju]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ei(o)&&(o=Cr(o)),o&&(a.fields[Xu]=o),{mapValue:a}}(e,t):n instanceof Pn?gc(n,t):n instanceof bn?_c(n,t):function(s,o){const a=mc(s,o),c=Ia(a)+Ia(s.Re);return Ds(a)&&Ds(s.Re)?pc(c):oi(s.serializer,c)}(n,t)}function Kp(n,t,e){return n instanceof Pn?gc(n,t):n instanceof bn?_c(n,t):e}function mc(n,t){return n instanceof yr?function(r){return Ds(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Sn extends Nr{}class Pn extends Nr{constructor(t){super(),this.elements=t}}function gc(n,t){const e=yc(t);for(const r of n.elements)e.some(s=>kt(s,r))||e.push(r);return{arrayValue:{values:e}}}class bn extends Nr{constructor(t){super(),this.elements=t}}function _c(n,t){let e=yc(t);for(const r of n.elements)e=e.filter(s=>!kt(s,r));return{arrayValue:{values:e}}}class yr extends Nr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Ia(n){return Z(n.integerValue||n.doubleValue)}function yc(n){return ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e){this.field=t,this.transform=e}}function Wp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Pn&&s instanceof Pn||r instanceof bn&&s instanceof bn?Oe(r.elements,s.elements,kt):r instanceof yr&&s instanceof yr?kt(r.Re,s.Re):r instanceof Sn&&s instanceof Sn}(n.transform,t.transform)}class Qp{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ar(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class kr{}function Ec(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new vc(n.key,Ut.none()):new Vn(n.key,n.data,Ut.none());{const e=n.data,r=Rt.empty();let s=new rt(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ve(n.key,r,new Pt(s.toArray()),Ut.none())}}function Yp(n,t,e){n instanceof Vn?function(s,o,a){const c=s.value.clone(),h=Aa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ve?function(s,o,a){if(!ar(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Aa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Tc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function yn(n,t,e,r){return n instanceof Vn?function(o,a,c,h){if(!ar(o.precondition,a))return c;const d=o.value.clone(),p=Ra(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ve?function(o,a,c,h){if(!ar(o.precondition,a))return c;const d=Ra(o.fieldTransforms,h,a),p=a.data;return p.setAll(Tc(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,c){return ar(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Xp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=mc(r.transform,s||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function wa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Oe(r,s,(o,a)=>Wp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Vn extends kr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ve extends kr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Tc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Aa(n,t,e){const r=new Map;z(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Kp(a,c,e[s]))}return r}function Ra(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Gp(o,a,t))}return r}class vc extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jp extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Yp(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=fc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Ec(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Oe(this.mutations,t.mutations,(e,r)=>wa(e,r))&&Oe(this.baseMutations,t.baseMutations,(e,r)=>wa(e,r))}}class ai{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){z(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return Bp}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ai(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,q;function nm(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Ic(n){if(n===void 0)return $t("GRPC error has no .code"),S.UNKNOWN;switch(n){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(q=tt||(tt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new Xt([4294967295,4294967295],0);function Sa(n){const t=zu().encode(n),e=new xu;return e.update(t),new Uint8Array(e.digest())}function Pa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([s,o],0)]}class ui{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new dn(`Invalid padding: ${e}`);if(r<0)throw new dn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new dn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new dn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Xt.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(Xt.fromNumber(r)));return s.compare(rm)===1&&(s=new Xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Sa(t),[r,s]=Pa(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ui(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.pe===0)return;const e=Sa(t),[r,s]=Pa(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Dn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Or(L.min(),s,new X(U),jt(),B())}}class Dn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Dn(r,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class wc{constructor(t,e){this.targetId=t,this.Ce=e}}class Ac{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ba{constructor(){this.Fe=0,this.Me=Ca(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=B(),e=B(),r=B();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:o})}}),new Dn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Ca()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,z(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class sm{constructor(t){this.ze=t,this.je=new Map,this.He=jt(),this.Je=nr(),this.Ye=nr(),this.Ze=new X(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:x(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(ks(o))if(r===0){const a=new M(o.path);this.tt(e,a,_t.newNoDocument(a,L.min()))}else z(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const c=this.ct(t),h=c?this.lt(c,t,a):1;if(h!==0){this.st(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=re(r).toUint8Array()}catch(h){if(h instanceof Wu)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ui(a,s,o)}catch(h){return ke(h instanceof dn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&ks(c.target)){const h=new M(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,_t.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=B();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new Or(t,e,this.Ze,this.He,r);return this.He=jt(),this.Je=nr(),this.Ye=nr(),this.Ze=new X(U),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new ba,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new rt(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new rt(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new ba),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function nr(){return new X(M.comparator)}function Ca(){return new X(M.comparator)}const im={asc:"ASCENDING",desc:"DESCENDING"},om={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},am={and:"AND",or:"OR"};class um{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function xs(n,t){return n.useProto3Json||br(t)?t:{value:t}}function Er(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function cm(n,t){return Er(n,t.toTimestamp())}function Nt(n){return z(!!n,49232),L.fromTimestamp(function(e){const r=ne(e);return new nt(r.seconds,r.nanos)}(n))}function ci(n,t){return Ls(n,t).canonicalString()}function Ls(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Sc(n){const t=Y.fromString(n);return z(Dc(t),10190,{key:t.toString()}),t}function Fs(n,t){return ci(n.databaseId,t.path)}function ys(n,t){const e=Sc(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(bc(e))}function Pc(n,t){return ci(n.databaseId,t)}function lm(n){const t=Sc(n);return t.length===4?Y.emptyPath():bc(t)}function Us(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bc(n){return z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Va(n,t,e){return{name:Fs(n,t),fields:e.value.mapValue.fields}}function hm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(z(p===void 0||typeof p=="string",58123),lt.fromBase64String(p||"")):(z(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),lt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Ic(d.code);return new N(p,d.message||"")}(a);e=new Ac(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ys(n,r.document.name),o=Nt(r.document.updateTime),a=r.document.createTime?Nt(r.document.createTime):L.min(),c=new Rt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];e=new ur(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ys(n,r.document),o=r.readTime?Nt(r.readTime):L.min(),a=_t.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ur([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ys(n,r.document),o=r.removedTargetIds||[];e=new ur([],o,s,null)}else{if(!("filter"in t))return x(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new em(s,o),c=r.targetId;e=new wc(c,a)}}return e}function dm(n,t){let e;if(t instanceof Vn)e={update:Va(n,t.key,t.value)};else if(t instanceof vc)e={delete:Fs(n,t.key)};else if(t instanceof ve)e={update:Va(n,t.key,t.data),updateMask:vm(t.fieldMask)};else{if(!(t instanceof Jp))return x(16599,{ft:t.type});e={verify:Fs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Sn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof yr)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw x(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:cm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,t.precondition)),e}function fm(n,t){return n&&n.length>0?(z(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Nt(s.updateTime):Nt(o);return a.isEqual(L.min())&&(a=Nt(o)),new Qp(a,s.transformResults||[])}(e,t))):[]}function pm(n,t){return{documents:[Pc(n,t.path)]}}function mm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Pc(n,s);const o=function(d){if(d.length!==0)return Vc(bt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(R){return{field:Ve(R.field),direction:ym(R.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=xs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:s}}function gm(n){let t=lm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){z(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const R=Cc(v);return R instanceof bt&&sc(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(R=>function(k){return new Rn(De(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(v){let R;return R=typeof v=="object"?v.value:v,br(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(v){const R=!!v.before,b=v.values||[];return new _r(b,R)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const R=!v.before,b=v.values||[];return new _r(b,R)}(e.endAt)),Mp(t,s,a,o,c,"F",h,d)}function _m(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=De(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=De(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=De(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=De(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(e){return et.create(De(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(r=>Cc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(e.compositeFilter.op))}(n):x(30097,{filter:n})}function ym(n){return im[n]}function Em(n){return om[n]}function Tm(n){return am[n]}function Ve(n){return{fieldPath:n.canonicalString()}}function De(n){return ct.fromServerFormat(n.fieldPath)}function Vc(n){return n instanceof et?function(e){if(e.op==="=="){if(_a(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NAN"}};if(ga(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_a(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NAN"}};if(ga(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ve(e.field),op:Em(e.op),value:e.value}}}(n):n instanceof bt?function(e){const r=e.getFilters().map(s=>Vc(s));return r.length===1?r[0]:{compositeFilter:{op:Tm(e.op),filters:r}}}(n):x(54877,{filter:n})}function vm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Dc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e,r,s,o=L.min(),a=L.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t){this.wt=t}}function wm(n){const t=gm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ms(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.yn=new Rm}addToCollectionParentIndex(t,e){return this.yn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(ee.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Rm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new rt(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new rt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nc=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Nc,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Le(0)}static ir(){return new Le(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="LruGarbageCollector",Sm=1048576;function ka([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class Pm{constructor(t){this.cr=t,this.buffer=new rt(ka),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ka(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){D(Na,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){je(e)?D(Na,"Ignoring IndexedDB error during garbage collection: ",e):await $e(e)}await this.Ir(3e5)})}}class Cm{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Pr.le);const r=new Pm(e);return this.Er.forEachTarget(t,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(t,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Er.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Da)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Da):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let r,s,o,a,c,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,c=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(d=Date.now(),be()<=$.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function Vm(n,t){return new Cm(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.changes=new Te(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&yn(r.mutation,s,Pt.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const s=pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=hn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=jt();const a=_n(),c=function(){return _n()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof ve)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),yn(p.mutation,d,p.mutation.getFieldMask(),nt.now())):a.set(d.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var v;return c.set(d,new Nm(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const r=_n();let s=new X((a,c)=>a-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Pt.empty();p=c.applyToLocalView(d,p),r.set(h,p);const v=(s.get(c.batchId)||B()).add(h);s=s.insert(c.batchId,v)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,v=fc();p.forEach(R=>{if(!o.has(R)){const b=Ec(e.get(R),r.get(R));b!==null&&v.set(R,b),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):uc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(pe());let c=vn,h=o;return a.next(d=>P.forEach(d,(p,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,B())).next(p=>({batchId:c,changes:dc(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=hn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(v,R){return new ze(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((v,R)=>{a=a.insert(v,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_t.newInvalidDocument(p)))});let c=hn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&yn(p.mutation,d,Pt.empty(),nt.now()),Dr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return P.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(s){return{name:s.name,query:wm(s.bundledQuery),readTime:Nt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.overlays=new X(M.comparator),this.Or=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=pe(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new X((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=pe(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return P.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tm(e,r));let o=this.Or.get(e);o===void 0&&(o=B(),this.Or.set(e,o)),this.Or.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.Nr=new rt(it.Br),this.Lr=new rt(it.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Qr(new it(t,e))}$r(t,e){t.forEach(r=>this.removeReference(r,e))}Ur(t){const e=new M(new Y([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.Lr.forEachInRange([r,s],a=>{this.Qr(a),o.push(a.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new M(new Y([])),r=new it(e,t),s=new it(e,t+1);let o=B();return this.Lr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.Nr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return M.comparator(t.key,e.key)||U(t.Gr,e.Gr)}static kr(t,e){return U(t.Gr,e.Gr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new rt(it.Br)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zp(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.zr=this.zr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Hr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?ti:this.Jn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,s],a=>{const c=this.jr(a.Gr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rt(U);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,a],c=>{r=r.add(c.Gr)})}),P.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new it(new M(o),0);let c=new rt(U);return this.zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Gr)),!0)},a),P.resolve(this.Jr(c))}Jr(t){const e=[];return t.forEach(r=>{const s=this.jr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){z(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return P.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.zr=r})}Xn(t){}containsKey(t,e){const r=new it(e,0),s=this.zr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.Zr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Zr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||fp(dp(p),r)<=0||(s.has(p.key)||Dr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x(9500)}Xr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Um(this)}getSize(t){return P.resolve(this.size)}}class Um extends Dm{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.vr.addEntry(t,s)):this.vr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t){this.persistence=t,this.ei=new Te(e=>ri(e),si),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ti=0,this.ni=new li,this.targetCount=0,this.ri=Le.rr()}forEachTarget(t,e){return this.ei.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ti&&(this.ti=e),P.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Le(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.ar(e),P.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ei.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ei.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.ei.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.ni.qr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.ni.$r(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ni.Wr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.ii={},this.overlays={},this.si=new Pr(0),this.oi=!1,this.oi=!0,this._i=new xm,this.referenceDelegate=t(this),this.ai=new Bm(this),this.indexManager=new Am,this.remoteDocumentCache=function(s){return new Fm(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new Im(e),this.ci=new Om(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ii[t.toKey()];return r||(r=new Lm(e,this.referenceDelegate),this.ii[t.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new qm(this.si.next());return this.referenceDelegate.li(),r(s).next(o=>this.referenceDelegate.hi(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Pi(t,e){return P.or(Object.values(this.ii).map(r=>()=>r.containsKey(t,e)))}}class qm extends mp{constructor(t){super(),this.currentSequenceNumber=t}}class hi{constructor(t){this.persistence=t,this.Ti=new li,this.Ii=null}static Ei(t){return new hi(t)}get di(){if(this.Ii)return this.Ii;throw x(60996)}addReference(t,e,r){return this.Ti.addReference(r,e),this.di.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ti.removeReference(r,e),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=M.fromPath(r);return this.Ai(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return P.or([()=>P.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Tr{constructor(t,e){this.persistence=t,this.Ri=new Te(r=>yp(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Vm(this,e)}static Ei(t,e){return new Tr(t,e)}li(){}hi(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}Vr(t){let e=0;return this.Ar(t,r=>{e++}).next(()=>e)}Ar(t,e){return P.forEach(this.Ri,(r,s)=>this.gr(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Xr(t,a=>this.gr(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),P.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ir(t.data.value)),e}gr(t,e,r){return P.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Ri.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ls=r,this.hs=s}static Ps(t,e){let r=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new di(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return gh()?8:gp(fh())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Vs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new $m;return this.fs(t,e,a).next(c=>{if(o.result=c,this.Is)return this.gs(t,e,a,c.size)})}).next(()=>o.result)}gs(t,e,r,s){return r.documentReadCount<this.Es?(be()<=$.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),P.resolve()):(be()<=$.DEBUG&&D("QueryEngine","Query:",Ce(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(be()<=$.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dt(e))):P.resolve())}Rs(t,e){if(va(e))return P.resolve(null);let r=Dt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ms(e,null,"F"),r=Dt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=B(...o);return this.As.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ps(e,c);return this.ys(e,d,a,h.readTime)?this.Rs(t,Ms(e,null,"F")):this.ws(t,d,e,h)}))})))}Vs(t,e,r,s){return va(e)||s.isEqual(L.min())?P.resolve(null):this.As.getDocuments(t,r).next(o=>{const a=this.ps(e,o);return this.ys(e,a,r,s)?P.resolve(null):(be()<=$.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ce(e)),this.ws(t,a,e,hp(s,vn)).next(c=>c))})}ps(t,e){let r=new rt(lc(t));return e.forEach((s,o)=>{Dr(t,o)&&(r=r.add(o))}),r}ys(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}fs(t,e,r){return be()<=$.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ce(e)),this.As.getDocumentsMatchingQuery(t,e,ee.min(),r)}ws(t,e,r,s){return this.As.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="LocalStore",zm=3e8;class Gm{constructor(t,e,r,s){this.persistence=t,this.bs=e,this.serializer=s,this.Ss=new X(U),this.Ds=new Te(o=>ri(o),si),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(r)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new km(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function Km(n,t,e,r){return new Gm(n,t,e,r)}async function Oc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=B();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ms:d,removedBatchIds:a,addedBatchIds:c}))})})}function Hm(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const v=d.batch,R=v.keys();let b=P.resolve();return R.forEach(k=>{b=b.next(()=>p.getEntry(h,k)).next(O=>{const V=d.docVersions.get(k);z(V!==null,48541),O.version.compareTo(V)<0&&(v.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=B();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Mc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function Wm(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Cs.newChangeBuffer({trackRemovals:!0});s=e.Ss;const c=[];t.targetChanges.forEach((p,v)=>{const R=s.get(v);if(!R)return;c.push(e.ai.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.ai.addMatchingKeys(o,p.addedDocuments,v)));let b=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?b=b.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(v,b),function(O,V,K){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=zm?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,b,p)&&c.push(e.ai.updateTargetData(o,b))});let h=jt(),d=B();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(Qm(o,a,t.documentUpdates).next(p=>{h=p.xs,d=p.Os})),!r.isEqual(L.min())){const p=e.ai.getLastRemoteSnapshotVersion(o).next(v=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ss=s,o))}function Qm(n,t,e){let r=B(),s=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):D(fi,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{xs:a,Os:s}})}function Ym(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ti),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Xm(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.ai.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.ai.allocateTargetId(r).next(a=>(s=new Wt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(r.targetId,r),e.Ds.set(t,r.targetId)),r})}async function Bs(n,t,e){const r=F(n),s=r.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!je(a))throw a;D(fi,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ss=r.Ss.remove(t),r.Ds.delete(s.target)}function Oa(n,t,e){const r=F(n);let s=L.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=F(h),R=v.Ds.get(p);return R!==void 0?P.resolve(v.Ss.get(R)):v.ai.getTargetData(d,p)}(r,a,Dt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.bs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:B())).next(c=>(Jm(r,Lp(t),c),{documents:c,Ns:o})))}function Jm(n,t,e){let r=n.vs.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(t,r)}class Ma{constructor(){this.activeTargetIds=jp()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zm{constructor(){this.So=new Ma,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,r){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="ConnectivityMonitor";class La{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){D(xa,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){D(xa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr=null;function qs(){return rr===null?rr=function(){return 268435456+Math.round(2147483648*Math.random())}():rr++,"0x"+rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RestConnection",eg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ng{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===mr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(t,e,r,s,o){const a=qs(),c=this.$o(t,e.toUriEncodedString());D(Es,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(h,s,o),this.Ko(t,c,h,r).then(d=>(D(Es,`Received RPC '${t}' ${a}: `,d),d),d=>{throw ke(Es,`RPC '${t}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Wo(t,e,r,s,o,a){return this.Qo(t,e,r,s,o)}Uo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}$o(t,e){const r=eg[t];return`${this.Lo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class sg extends ng{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,r,s){const o=qs();return new Promise((a,c)=>{const h=new Lu;h.setWithCredentials(!0),h.listenOnce(Fu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case sr.NO_ERROR:const p=h.getResponseJson();D(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case sr.TIMEOUT:D(mt,`RPC '${t}' ${o} timed out`),c(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const v=h.getStatus();if(D(mt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const b=R==null?void 0:R.error;if(b&&b.status&&b.message){const k=function(V){const K=V.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(b.status);c(new N(k,b.message))}else c(new N(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{s_:t,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{D(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);D(mt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}a_(t,e,r){const s=qs(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=qu(),c=Bu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");D(mt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);let R=!1,b=!1;const k=new rg({Go:V=>{b?D(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(R||(D(mt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),R=!0),D(mt,`RPC '${t}' stream ${s} sending:`,V),v.send(V))},zo:()=>v.close()}),O=(V,K,G)=>{V.listen(K,H=>{try{G(H)}catch(st){setTimeout(()=>{throw st},0)}})};return O(v,ln.EventType.OPEN,()=>{b||(D(mt,`RPC '${t}' stream ${s} transport opened.`),k.t_())}),O(v,ln.EventType.CLOSE,()=>{b||(b=!0,D(mt,`RPC '${t}' stream ${s} transport closed`),k.r_())}),O(v,ln.EventType.ERROR,V=>{b||(b=!0,ke(mt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),k.r_(new N(S.UNAVAILABLE,"The operation could not be completed")))}),O(v,ln.EventType.MESSAGE,V=>{var K;if(!b){const G=V.data[0];z(!!G,16349);const H=G,st=(H==null?void 0:H.error)||((K=H[0])===null||K===void 0?void 0:K.error);if(st){D(mt,`RPC '${t}' stream ${s} received error:`,st);const Ot=st.status;let ot=function(_){const y=tt[_];if(y!==void 0)return Ic(y)}(Ot),T=st.message;ot===void 0&&(ot=S.INTERNAL,T="Unknown error status: "+Ot+" with message "+st.message),b=!0,k.r_(new N(ot,T)),v.close()}else D(mt,`RPC '${t}' stream ${s} received:`,G),k.i_(G)}}),O(c,Uu.STAT_EVENT,V=>{V.stat===bs.PROXY?D(mt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===bs.NOPROXY&&D(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.n_()},0),k}}function Ts(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return new um(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=r,this.c_=s,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="PersistentStream";class Lc{constructor(t,e,r,s,o,a,c,h){this.bi=t,this.R_=r,this.V_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new xc(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===e&&this.B_(r,s)},r=>{t(()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(t,e){const r=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return D(Fa,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(D(Fa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ig extends Lc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=hm(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Nt(a.readTime):L.min()}(t);return this.listener.Q_(e,r)}U_(t){const e={};e.database=Us(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=ks(h)?{documents:pm(o,h)}:{query:mm(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Rc(o,a.resumeToken);const d=xs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Er(o,a.snapshotVersion.toTimestamp());const d=xs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=_m(this.serializer,t);r&&(e.labels=r),this.F_(e)}K_(t){const e={};e.database=Us(this.serializer),e.removeTarget=t,this.F_(e)}}class og extends Lc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=fm(t.writeResults,t.commitTime),r=Nt(t.commitTime);return this.listener.j_(r,e)}H_(){const t={};t.database=Us(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>dm(this.serializer,r))};this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{}class ug extends ag{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Qo(t,Ls(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())})}Wo(t,e,r,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Wo(t,Ls(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class cg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?($t(e),this.ea=!1):D("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="RemoteStore";class lg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(a=>{r.enqueueAndForget(async()=>{Ie(this)&&(D(ye,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.aa.add(4),await Nn(d),d.la.set("Unknown"),d.aa.delete(4),await xr(d)}(this))})}),this.la=new cg(r,s)}}async function xr(n){if(Ie(n))for(const t of n.ua)await t(!0)}async function Nn(n){for(const t of n.ua)await t(!1)}function Fc(n,t){const e=F(n);e._a.has(t.targetId)||(e._a.set(t.targetId,t),_i(e)?gi(e):Ge(e).b_()&&mi(e,t))}function pi(n,t){const e=F(n),r=Ge(e);e._a.delete(t),r.b_()&&Uc(e,t),e._a.size===0&&(r.b_()?r.v_():Ie(e)&&e.la.set("Unknown"))}function mi(n,t){if(n.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(n).U_(t)}function Uc(n,t){n.ha.Ke(t),Ge(n).K_(t)}function gi(n){n.ha=new sm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n._a.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Ge(n).start(),n.la.ta()}function _i(n){return Ie(n)&&!Ge(n).w_()&&n._a.size>0}function Ie(n){return F(n).aa.size===0}function Bc(n){n.ha=void 0}async function hg(n){n.la.set("Online")}async function dg(n){n._a.forEach((t,e)=>{mi(n,t)})}async function fg(n,t){Bc(n),_i(n)?(n.la.ia(t),gi(n)):n.la.set("Unknown")}async function pg(n,t,e){if(n.la.set("Online"),t instanceof Ac&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s._a.delete(c),s.ha.removeTarget(c))}(n,t)}catch(r){D(ye,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vr(n,r)}else if(t instanceof ur?n.ha.Xe(t):t instanceof wc?n.ha.ot(t):n.ha.nt(t),!e.isEqual(L.min()))try{const r=await Mc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.ha.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o._a.get(d);p&&o._a.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=o._a.get(h);if(!p)return;o._a.set(h,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),Uc(o,h);const v=new Wt(p.target,h,d,p.sequenceNumber);mi(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){D(ye,"Failed to raise snapshot:",r),await vr(n,r)}}async function vr(n,t,e){if(!je(t))throw t;n.aa.add(1),await Nn(n),n.la.set("Offline"),e||(e=()=>Mc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(ye,"Retrying IndexedDB access"),await e(),n.aa.delete(1),await xr(n)})}function qc(n,t){return t().catch(e=>vr(n,e,t))}async function Lr(n){const t=F(n),e=ie(t);let r=t.oa.length>0?t.oa[t.oa.length-1].batchId:ti;for(;mg(t);)try{const s=await Ym(t.localStore,r);if(s===null){t.oa.length===0&&e.v_();break}r=s.batchId,gg(t,s)}catch(s){await vr(t,s)}$c(t)&&jc(t)}function mg(n){return Ie(n)&&n.oa.length<10}function gg(n,t){n.oa.push(t);const e=ie(n);e.b_()&&e.W_&&e.G_(t.mutations)}function $c(n){return Ie(n)&&!ie(n).w_()&&n.oa.length>0}function jc(n){ie(n).start()}async function _g(n){ie(n).H_()}async function yg(n){const t=ie(n);for(const e of n.oa)t.G_(e.mutations)}async function Eg(n,t,e){const r=n.oa.shift(),s=ai.from(r,t,e);await qc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lr(n)}async function Tg(n,t){t&&ie(n).W_&&await async function(r,s){if(function(a){return nm(a)&&a!==S.ABORTED}(s.code)){const o=r.oa.shift();ie(r).D_(),await qc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Lr(r)}}(n,t),$c(n)&&jc(n)}async function Ua(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(ye,"RemoteStore received new credentials");const r=Ie(e);e.aa.add(3),await Nn(e),r&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await xr(e)}async function vg(n,t){const e=F(n);t?(e.aa.delete(2),await xr(e)):t||(e.aa.add(2),await Nn(e),e.la.set("Unknown"))}function Ge(n){return n.Pa||(n.Pa=function(e,r,s){const o=F(e);return o.Y_(),new ig(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{jo:hg.bind(null,n),Jo:dg.bind(null,n),Zo:fg.bind(null,n),Q_:pg.bind(null,n)}),n.ua.push(async t=>{t?(n.Pa.D_(),_i(n)?gi(n):n.la.set("Unknown")):(await n.Pa.stop(),Bc(n))})),n.Pa}function ie(n){return n.Ta||(n.Ta=function(e,r,s){const o=F(e);return o.Y_(),new og(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:_g.bind(null,n),Zo:Tg.bind(null,n),z_:yg.bind(null,n),j_:Eg.bind(null,n)}),n.ua.push(async t=>{t?(n.Ta.D_(),await Lr(n)):(await n.Ta.stop(),n.oa.length>0&&(D(ye,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new yi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ei(n,t){if($t("AsyncQueue",`${t}: ${n}`),je(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static emptySet(t){return new Ne(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=hn(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ne;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.Ia=new X(M.comparator)}track(t){const e=t.doc.key,r=this.Ia.get(e);r?t.type!==0&&r.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&r.type!==1?this.Ia=this.Ia.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Ia=this.Ia.remove(e):t.type===1&&r.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):x(63341,{Vt:t,Ea:r}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,r)=>{t.push(r)}),t}}class Fe{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Fe(t,e,Ne.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class wg{constructor(){this.queries=qa(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=qa(),o.forEach((a,c)=>{for(const h of c.Ra)h.onError(r)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function qa(){return new Te(n=>cc(n),Vr)}async function zc(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Va()&&t.ma()&&(r=2):(o=new Ig,r=t.ma()?0:1);try{switch(r){case 0:o.Aa=await e.onListen(s,!0);break;case 1:o.Aa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ei(a,`Initialization of query '${Ce(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&Ti(e)}async function Gc(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Ra.indexOf(t);a>=0&&(o.Ra.splice(a,1),o.Ra.length===0?s=t.ma()?0:1:!o.Va()&&t.ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ag(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Ra)c.pa(s)&&(r=!0);a.Aa=s}}r&&Ti(e)}function Rg(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Ra)o.onError(e);r.queries.delete(t)}function Ti(n){n.fa.forEach(t=>{t.next()})}var $s,$a;($a=$s||($s={})).ya="default",$a.Cache="cache";class Kc{constructor(t,e,r){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const r=e!=="Offline";return(!this.options.Fa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==$s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.key=t}}class Wc{constructor(t){this.key=t}}class Sg{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=B(),this.mutatedKeys=B(),this.Ua=lc(t),this.Ka=new Ne(this.Ua)}get Wa(){return this.qa}Ga(t,e){const r=e?e.za:new Ba,s=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const R=s.get(p),b=Dr(this.query,v)?v:null,k=!!R&&this.mutatedKeys.has(R.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;R&&b?R.data.isEqual(b.data)?k!==O&&(r.track({type:3,doc:b}),V=!0):this.ja(R,b)||(r.track({type:2,doc:b}),V=!0,(h&&this.Ua(b,h)>0||d&&this.Ua(b,d)<0)&&(c=!0)):!R&&b?(r.track({type:0,doc:b}),V=!0):R&&!b&&(r.track({type:1,doc:R}),V=!0,(h||d)&&(c=!0)),V&&(b?(a=a.add(b),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ka:a,za:r,ys:c,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const a=t.za.da();a.sort((p,v)=>function(b,k){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Vt:V})}};return O(b)-O(k)}(p.type,v.type)||this.Ua(p.doc,v.doc)),this.Ha(r),s=s!=null&&s;const c=e&&!s?this.Ja():[],h=this.$a.size===0&&this.current&&!s?1:0,d=h!==this.Qa;return this.Qa=h,a.length!==0||d?{snapshot:new Fe(this.query,t.Ka,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Ba,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=B(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const e=[];return t.forEach(r=>{this.$a.has(r)||e.push(new Wc(r))}),this.$a.forEach(r=>{t.has(r)||e.push(new Hc(r))}),e}Xa(t){this.qa=t.Ns,this.$a=B();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return Fe.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const vi="SyncEngine";class Pg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class bg{constructor(t){this.key=t,this.tu=!1}}class Cg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new Te(c=>cc(c),Vr),this.iu=new Map,this.su=new Set,this.ou=new X(M.comparator),this._u=new Map,this.au=new li,this.uu={},this.cu=new Map,this.lu=Le.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Vg(n,t,e=!0){const r=tl(n);let s;const o=r.ru.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.eu()):s=await Qc(r,t,e,!0),s}async function Dg(n,t){const e=tl(n);await Qc(e,t,!0,!1)}async function Qc(n,t,e,r){const s=await Xm(n.localStore,Dt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Ng(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Fc(n.remoteStore,s),c}async function Ng(n,t,e,r,s){n.Pu=(v,R,b)=>async function(O,V,K,G){let H=V.view.Ga(K);H.ys&&(H=await Oa(O.localStore,V.query,!1).then(({documents:T})=>V.view.Ga(T,H)));const st=G&&G.targetChanges.get(V.targetId),Ot=G&&G.targetMismatches.get(V.targetId)!=null,ot=V.view.applyChanges(H,O.isPrimaryClient,st,Ot);return za(O,V.targetId,ot.Ya),ot.snapshot}(n,v,R,b);const o=await Oa(n.localStore,t,!0),a=new Sg(t,o.Ns),c=a.Ga(o.documents),h=Dn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);za(n,e,d.Ya);const p=new Pg(t,e,a);return n.ru.set(t,p),n.iu.has(e)?n.iu.get(e).push(t):n.iu.set(e,[t]),d.snapshot}async function kg(n,t,e){const r=F(n),s=r.ru.get(t),o=r.iu.get(s.targetId);if(o.length>1)return r.iu.set(s.targetId,o.filter(a=>!Vr(a,t))),void r.ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&pi(r.remoteStore,s.targetId),js(r,s.targetId)}).catch($e)):(js(r,s.targetId),await Bs(r.localStore,s.targetId,!0))}async function Og(n,t){const e=F(n),r=e.ru.get(t),s=e.iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),pi(e.remoteStore,r.targetId))}async function Mg(n,t,e){const r=$g(n);try{const s=await function(a,c){const h=F(a),d=nt.now(),p=c.reduce((b,k)=>b.add(k.key),B());let v,R;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=jt(),O=B();return h.Cs.getEntries(b,p).next(V=>{k=V,k.forEach((K,G)=>{G.isValidDocument()||(O=O.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,k)).next(V=>{v=V;const K=[];for(const G of c){const H=Xp(G,v.get(G.key).overlayedDocument);H!=null&&K.push(new ve(G.key,H,ec(H.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,K,c)}).next(V=>{R=V;const K=V.applyToLocalDocumentSet(v,O);return h.documentOverlayCache.saveOverlays(b,V.batchId,K)})}).then(()=>({batchId:R.batchId,changes:dc(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.uu[a.currentUser.toKey()];d||(d=new X(U)),d=d.insert(c,h),a.uu[a.currentUser.toKey()]=d}(r,s.batchId,e),await kn(r,s.changes),await Lr(r.remoteStore)}catch(s){const o=Ei(s,"Failed to persist write");e.reject(o)}}async function Yc(n,t){const e=F(n);try{const r=await Wm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e._u.get(o);a&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?z(a.tu,14607):s.removedDocuments.size>0&&(z(a.tu,42227),a.tu=!1))}),await kn(e,r,t)}catch(r){await $e(r)}}function ja(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ru.forEach((o,a)=>{const c=a.view.ga(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let d=!1;h.queries.forEach((p,v)=>{for(const R of v.Ra)R.ga(c)&&(d=!0)}),d&&Ti(h)}(r.eventManager,t),s.length&&r.nu.Q_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xg(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r._u.get(t),o=s&&s.key;if(o){let a=new X(M.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const c=B().add(o),h=new Or(L.min(),new Map,new X(U),a,c);await Yc(r,h),r.ou=r.ou.remove(o),r._u.delete(t),Ii(r)}else await Bs(r.localStore,t,!1).then(()=>js(r,t,e)).catch($e)}async function Lg(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Hm(e.localStore,t);Jc(e,r,null),Xc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await kn(e,s)}catch(s){await $e(s)}}async function Fg(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(v=>(z(v!==null,37113),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Jc(r,t,e),Xc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await kn(r,s)}catch(s){await $e(s)}}function Xc(n,t){(n.cu.get(t)||[]).forEach(e=>{e.resolve()}),n.cu.delete(t)}function Jc(n,t,e){const r=F(n);let s=r.uu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.uu[r.currentUser.toKey()]=s}}function js(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.iu.get(t))n.ru.delete(r),e&&n.nu.Tu(r,e);n.iu.delete(t),n.isPrimaryClient&&n.au.Ur(t).forEach(r=>{n.au.containsKey(r)||Zc(n,r)})}function Zc(n,t){n.su.delete(t.path.canonicalString());const e=n.ou.get(t);e!==null&&(pi(n.remoteStore,e),n.ou=n.ou.remove(t),n._u.delete(e),Ii(n))}function za(n,t,e){for(const r of e)r instanceof Hc?(n.au.addReference(r.key,t),Ug(n,r)):r instanceof Wc?(D(vi,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,t),n.au.containsKey(r.key)||Zc(n,r.key)):x(19791,{Iu:r})}function Ug(n,t){const e=t.key,r=e.path.canonicalString();n.ou.get(e)||n.su.has(r)||(D(vi,"New document in limbo: "+e),n.su.add(r),Ii(n))}function Ii(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const t=n.su.values().next().value;n.su.delete(t);const e=new M(Y.fromString(t)),r=n.lu.next();n._u.set(r,new bg(e)),n.ou=n.ou.insert(e,r),Fc(n.remoteStore,new Wt(Dt(ii(e.path)),r,"TargetPurposeLimboResolution",Pr.le))}}async function kn(n,t,e){const r=F(n),s=[],o=[],a=[];r.ru.isEmpty()||(r.ru.forEach((c,h)=>{a.push(r.Pu(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=di.Ps(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.nu.Q_(s),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>P.forEach(d,R=>P.forEach(R.ls,b=>p.persistence.referenceDelegate.addReference(v,R.targetId,b)).next(()=>P.forEach(R.hs,b=>p.persistence.referenceDelegate.removeReference(v,R.targetId,b)))))}catch(v){if(!je(v))throw v;D(fi,"Failed to update sequence numbers: "+v)}for(const v of d){const R=v.targetId;if(!v.fromCache){const b=p.Ss.get(R),k=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(k);p.Ss=p.Ss.insert(R,O)}}}(r.localStore,o))}async function Bg(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(vi,"User change. New user:",t.toKey());const r=await Oc(e.localStore,t);e.currentUser=t,function(o,a){o.cu.forEach(c=>{c.forEach(h=>{h.reject(new N(S.CANCELLED,a))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await kn(e,r.Ms)}}function qg(n,t){const e=F(n),r=e._u.get(t);if(r&&r.tu)return B().add(r.key);{let s=B();const o=e.iu.get(t);if(!o)return s;for(const a of o){const c=e.ru.get(a);s=s.unionWith(c.view.Wa)}return s}}function tl(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xg.bind(null,t),t.nu.Q_=Ag.bind(null,t.eventManager),t.nu.Tu=Rg.bind(null,t.eventManager),t}function $g(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Fg.bind(null,t),t}class Ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mr(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return Km(this.persistence,new jm,t.initialUser,this.serializer)}Ru(t){return new kc(hi.Ei,this.serializer)}Au(t){return new Zm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ir.provider={build:()=>new Ir};class jg extends Ir{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){z(this.persistence.referenceDelegate instanceof Tr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bm(r,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new kc(r=>Tr.Ei(r,e),this.serializer)}}class zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ja(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bg.bind(null,this.syncEngine),await vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wg}()}createDatastore(t){const e=Mr(t.databaseInfo.databaseId),r=function(o){return new sg(o)}(t.databaseInfo);return function(o,a,c,h){return new ug(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new lg(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ja(this.syncEngine,e,0),function(){return La.C()?new La:new tg}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,p){const v=new Cg(s,o,a,c,h,d);return p&&(v.hu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);D(ye,"RemoteStore shutting down."),o.aa.add(5),await Nn(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}zs.provider={build:()=>new zs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="FirestoreClient";class zg{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ei(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function vs(n,t){n.asyncQueue.verifyOperationInProgress(),D(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Oc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ga(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Gg(n);D(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ua(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ua(t.remoteStore,s)),n._onlineComponents=t}async function Gg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(oe,"Using user provided OfflineComponentProvider");try{await vs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await vs(n,new Ir)}}else D(oe,"Using default OfflineComponentProvider"),await vs(n,new jg(void 0));return n._offlineComponents}async function nl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(oe,"Using user provided OnlineComponentProvider"),await Ga(n,n._uninitializedComponentsProvider._online)):(D(oe,"Using default OnlineComponentProvider"),await Ga(n,new zs))),n._onlineComponents}function Kg(n){return nl(n).then(t=>t.syncEngine)}async function rl(n){const t=await nl(n),e=t.eventManager;return e.onListen=Vg.bind(null,t.syncEngine),e.onUnlisten=kg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Og.bind(null,t.syncEngine),e}function Hg(n,t,e={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new el({next:R=>{p.yu(),a.enqueueAndForget(()=>Gc(o,v));const b=R.docs.has(c);!b&&R.fromCache?d.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&R.fromCache&&h&&h.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),v=new Kc(ii(c.path),p,{includeMetadataChanges:!0,Fa:!0});return zc(o,v)}(await rl(n),n.asyncQueue,t,e,r)),r.promise}function Wg(n,t,e={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new el({next:R=>{p.yu(),a.enqueueAndForget(()=>Gc(o,v)),R.fromCache&&h.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),v=new Kc(c,p,{includeMetadataChanges:!0,Fa:!0});return zc(o,v)}(await rl(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qg(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ha(n){if(!M.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wa(n){if(M.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Ue(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fr(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="firestore.googleapis.com",Qa=!0;class Ya{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ol,this.ssl=Qa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Qa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Nc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Sm)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ur{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ya({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ya(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new np;switch(r.type){case"firstParty":return new op(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ka.get(e);r&&(D("ComponentProvider","Removing Datastore"),Ka.delete(e),r.terminate())}(this),Promise.resolve()}}function Yg(n,t,e,r={}){var s;const o=(n=Ue(n,Ur))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==ol&&o.host!==c&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!En(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=gt.MOCK_USER;else{d=dh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new gt(v)}n._authCredentials=new rp(new ju(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new we(this.firestore,t,this._query)}}class At{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Jt extends we{constructor(t,e,r){super(t,e,ii(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new M(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function y_(n,t,...e){if(n=Zt(n),il("collection","path",t),n instanceof Ur){const r=Y.fromString(t,...e);return Wa(r),new Jt(n,null,r)}{if(!(n instanceof At||n instanceof Jt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Wa(r),new Jt(n.firestore,null,r)}}function Xg(n,t,...e){if(n=Zt(n),arguments.length===1&&(t=Gu.newId()),il("doc","path",t),n instanceof Ur){const r=Y.fromString(t,...e);return Ha(r),new At(n,null,new M(r))}{if(!(n instanceof At||n instanceof Jt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Ha(r),new At(n.firestore,n instanceof Jt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="AsyncQueue";class Ja{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new xc(this,"async_queue_retry"),this.ju=()=>{const r=Ts();r&&D(Xa,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=t;const e=Ts();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=Ts();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new Ft;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!je(t))throw t;D(Xa,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(r=>{throw this.Ku=r,this.Wu=!1,$t("INTERNAL UNHANDLED ERROR: ",Za(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=e,e}enqueueAfterDelay(t,e,r){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const s=yi.createAndSchedule(this,t,e,r,o=>this.Xu(o));return this.Uu.push(s),s}Ju(){this.Ku&&x(47125,{ec:Za(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function Za(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Br extends Ur{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ja,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ja(t),this._firestoreClient=void 0,await t}}}function Jg(n,t){const e=typeof n=="object"?n:hu(),r=typeof n=="string"?n:mr,s=Cn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=lh("firestore");o&&Yg(s,...o)}return s}function wi(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zg(n),n._firestoreClient}function Zg(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,p){return new vp(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,sl(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new zg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Be(lt.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Be(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=/^__.*__$/;class e_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vn(t,this.data,e,this.fieldTransforms)}}function al(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{oc:n})}}class bi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new bi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:r,cc:!1});return s.lc(t),s}hc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return wr(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(al(this.oc)&&t_.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class n_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Mr(t)}dc(t,e,r,s=!1){return new bi({oc:t,methodName:e,Ec:r,path:ct.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ul(n){const t=n._freezeSettings(),e=Mr(n._databaseId);return new n_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function r_(n,t,e,r,s,o={}){const a=n.dc(o.merge||o.mergeFields?2:0,t,e,s);hl("Data must be an object, but it was:",a,r);const c=cl(r,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const R=i_(t,v,e);if(!a.contains(R))throw new N(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);a_(p,R)||p.push(R)}h=new Pt(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new e_(new Rt(c),h,d)}class Ci extends Ri{_toFieldTransform(t){return new Hp(t.path,new Sn)}isEqual(t){return t instanceof Ci}}function s_(n,t,e,r=!1){return Vi(e,n.dc(r?4:3,t))}function Vi(n,t){if(ll(n=Zt(n)))return hl("Unsupported field value:",t,n),cl(n,t);if(n instanceof Ri)return function(r,s){if(!al(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Vi(c,s.Pc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Er(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Er(s.serializer,o)}}if(r instanceof Si)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:Rc(s.serializer,r._byteString)};if(r instanceof At){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ci(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pi)return function(a,c){return{mapValue:{fields:{[Zu]:{stringValue:tc},[gr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Tc("VectorValues must only contain numeric values.");return oi(c.serializer,d)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${Fr(r)}`)}(n,t)}function cl(n,t){const e={};return Hu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(n,(r,s)=>{const o=Vi(s,t.uc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ll(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Si||n instanceof Be||n instanceof At||n instanceof Ri||n instanceof Pi)}function hl(n,t,e){if(!ll(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Fr(e);throw r==="an object"?t.Tc(n+" a custom object"):t.Tc(n+" "+r)}}function i_(n,t,e){if((t=Zt(t))instanceof Ai)return t._internalPath;if(typeof t=="string")return dl(n,t);throw wr("Field path arguments must be of type string or ",n,!1,void 0,e)}const o_=new RegExp("[~\\*/\\[\\]]");function dl(n,t,e){if(t.search(o_)>=0)throw wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ai(...t.split("."))._internalPath}catch{throw wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function wr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(S.INVALID_ARGUMENT,c+n+h)}function a_(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new u_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Di("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class u_ extends fl{data(){return super.data()}}function Di(n,t){return typeof t=="string"?dl(n,t):t instanceof Ai?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ni{}class pl extends Ni{}function E_(n,t,...e){let r=[];t instanceof Ni&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Oi).length,c=o.filter(h=>h instanceof ki).length;if(a>1||a>0&&c>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ki extends pl{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ki(t,e,r)}_apply(t){const e=this._parse(t);return ml(t._query,e),new we(t.firestore,t.converter,Os(t._query,e))}_parse(t){const e=ul(t.firestore);return function(o,a,c,h,d,p,v){let R;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){eu(v,p);const k=[];for(const O of v)k.push(tu(h,o,O));R={arrayValue:{values:k}}}else R=tu(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||eu(v,p),R=s_(c,a,v,p==="in"||p==="not-in");return et.create(d,p,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Oi extends Ni{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Oi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:bt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)ml(a,h),a=Os(a,h)}(t._query,e),new we(t.firestore,t.converter,Os(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mi extends pl{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Mi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rn(o,a)}(t._query,this._field,this._direction);return new we(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new ze(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function T_(n,t="asc"){const e=t,r=Di("orderBy",n);return Mi._create(r,e)}function tu(n,t,e){if(typeof(e=Zt(e))=="string"){if(e==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uc(t)&&e.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Y.fromString(e));if(!M.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ma(n,new M(r))}if(e instanceof At)return ma(n,e._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fr(e)}.`)}function eu(n,t){if(!Array.isArray(n)||n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ml(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class l_{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ee(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[gr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new Pi(o)}convertGeoPoint(t){return new Si(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Cr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=ne(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);z(Dc(r),9688,{name:t});const s=new wn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gl extends fl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Di("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class cr extends gl{data(t={}){return super.data(t)}}class d_{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new cr(this._firestore,this._userDataWriter,r.key,r,new fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:f_(c.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function f_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n){n=Ue(n,At);const t=Ue(n.firestore,Br);return Hg(wi(t),n._key).then(e=>m_(t,n,e))}class _l extends l_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Be(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function I_(n){n=Ue(n,we);const t=Ue(n.firestore,Br),e=wi(t),r=new _l(t);return c_(n._query),Wg(e,n._query).then(s=>new d_(t,r,n,s))}function w_(n,t){const e=Ue(n.firestore,Br),r=Xg(n),s=h_(n.converter,t);return p_(e,[r_(ul(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function p_(n,t){return function(r,s){const o=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Mg(await Kg(r),s,o)),o.promise}(wi(n),t)}function m_(n,t,e){const r=e.docs.get(t._key),s=new _l(n);return new gl(n,s,t._key,r,new fn(e.hasPendingWrites,e.fromCache),t.converter)}function A_(){return new Ci("serverTimestamp")}(function(t,e=!0){(function(s){qe=s})(wd),te(new Bt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Br(new sp(r.getProvider("auth-internal")),new ap(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wn(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Vt(ra,sa,t),Vt(ra,sa,"esm2017")})();const g_={apiKey:"AIzaSyABwDlNlibL5iliAzYD-J_3g648ClweKIU",authDomain:"guest-board-31d25.firebaseapp.com",projectId:"guest-board-31d25",storageBucket:"guest-board-31d25.firebasestorage.app",messagingSenderId:"563871935427",appId:"1:563871935427:web:74be75057729dcd1f26b76",measurementId:"G-K4J3GC8SXW"},yl=lu(g_);Jf(yl);const R_=Jg(yl);export{Xg as a,v_ as b,y_ as c,R_ as d,w_ as e,I_ as g,T_ as o,E_ as q,A_ as s};
