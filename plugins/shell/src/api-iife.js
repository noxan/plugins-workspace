if("__TAURI__"in window){var __TAURI_PLUGIN_SHELL__=function(e){"use strict";function t(e,t,s,r){if("a"===s&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?r:"a"===s?r.call(e):r?r.value:t.get(e)}var s;"function"==typeof SuppressedError&&SuppressedError;class r{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,s.set(this,(()=>{})),this.id=function(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}((e=>{t(this,s,"f").call(this,e)}))}set onmessage(e){!function(e,t,s,r,n){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===r?n.call(e,s):n?n.value=s:t.set(e,s)}(this,s,e,"f")}get onmessage(){return t(this,s,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function n(e,t={},s){return window.__TAURI_INTERNALS__.invoke(e,t,s)}s=new WeakMap;class i{constructor(){this.eventListeners=Object.create(null)}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}on(e,t){return e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t],this}once(e,t){const s=r=>{this.removeListener(e,s),t(r)};return this.addListener(e,s)}off(e,t){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter((e=>e!==t))),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,t){if(e in this.eventListeners){const s=this.eventListeners[e];for(const e of s)e(t);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,t){return e in this.eventListeners?this.eventListeners[e].unshift(t):this.eventListeners[e]=[t],this}prependOnceListener(e,t){const s=r=>{this.removeListener(e,s),t(r)};return this.prependListener(e,s)}}class o{constructor(e){this.pid=e}async write(e){return n("plugin:shell|stdin_write",{pid:this.pid,buffer:"string"==typeof e?e:Array.from(e)})}async kill(){return n("plugin:shell|kill",{cmd:"killChild",pid:this.pid})}}class a extends i{constructor(e,t=[],s){super(),this.stdout=new i,this.stderr=new i,this.program=e,this.args="string"==typeof t?[t]:t,this.options=s??{}}static create(e,t=[],s){return new a(e,t,s)}static sidecar(e,t=[],s){const r=new a(e,t,s);return r.options.sidecar=!0,r}async spawn(){return async function(e,t,s=[],i){"object"==typeof s&&Object.freeze(s);const o=new r;return o.onmessage=e,n("plugin:shell|execute",{program:t,args:s,options:i,onEvent:o})}((e=>{switch(e.event){case"Error":this.emit("error",e.payload);break;case"Terminated":this.emit("close",e.payload);break;case"Stdout":this.stdout.emit("data",e.payload);break;case"Stderr":this.stderr.emit("data",e.payload)}}),this.program,this.args,this.options).then((e=>new o(e)))}async execute(){return new Promise(((e,t)=>{this.on("error",t);const s=[],r=[];this.stdout.on("data",(e=>{s.push(e)})),this.stderr.on("data",(e=>{r.push(e)})),this.on("close",(t=>{e({code:t.code,signal:t.signal,stdout:this.collectOutput(s),stderr:this.collectOutput(r)})})),this.spawn().catch(t)}))}collectOutput(e){return"raw"===this.options.encoding?e.reduce(((e,t)=>new Uint8Array([...e,...t,10])),new Uint8Array):e.join("\n")}}return e.Child=o,e.Command=a,e.EventEmitter=i,e.open=async function(e,t){return n("plugin:shell|open",{path:e,with:t})},e}({});Object.defineProperty(window.__TAURI__,"shell",{value:__TAURI_PLUGIN_SHELL__})}