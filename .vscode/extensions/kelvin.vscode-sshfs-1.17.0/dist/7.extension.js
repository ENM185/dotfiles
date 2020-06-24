exports.ids=[7],exports.modules={65:function(e,t,n){"use strict";n.r(t),n.d(t,"open",(function(){return g})),n.d(t,"navigate",(function(){return h}));var i=n(5),o=n(12),s=n(0),r=n(2),c=n(4),a=n(1),u=n(3),l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function c(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((i=i.apply(e,t||[])).next())}))};let d,v;const f=process.execArgv.find(e=>e.includes("--inspect"))?3e3:void 0;function g(){return l(this,void 0,void 0,(function*(){if(!d){d=s.window.createWebviewPanel("sshfs-settings","SSH-FS Settings",s.ViewColumn.One,{enableFindWidget:!0,enableScripts:!0}),d.onDidDispose(()=>d=void 0),d.webview.onDidReceiveMessage(p);let e=yield function(){return l(this,void 0,void 0,(function*(){if(!f)return!1;const e=`http://localhost:${f}/`,t=yield Promise.resolve().then(n.t.bind(null,21,7)).catch(()=>null);if(!t)throw new Error("Could not load 'request' library");return Object(u.b)(n=>t.get(e,(e,t,i)=>{if(e)return n(new Error("Could not connect to React dev server. Not running?"));i=i.toString().replace(/\/static\/js\/bundle\.js/,`http://localhost:${f}/static/js/bundle.js`),n(null,i)}))}))}().catch(e=>(s.window.showErrorMessage(e.message),null));if(!e){const t=function(){const e=s.extensions.getExtension("Kelvin.vscode-sshfs");return e&&e.extensionPath}();if(!t)throw new Error("Could not get extensionPath");e=i.readFileSync(o.resolve(t,"webview/build/index.html")).toString(),e=e.replace(/\/static\//g,s.Uri.file(o.join(t,"webview/build/static/")).with({scheme:"vscode-resource"}).toString())}d.webview.html=e}d.reveal()}))}function h(e){return l(this,void 0,void 0,(function*(){return v=e,w({navigation:e,type:"navigate"}),g()}))}function w(e){d&&d.webview.postMessage(e)}function p(e){return l(this,void 0,void 0,(function*(){switch(console.log("Got message:",e),"navigated"===e.type&&(v=void 0),v&&(w({type:"navigate",navigation:v}),v=void 0),e.type){case"requestData":{const e=yield Object(r.f)();return w({configs:e,locations:Object(c.b)(e),type:"responseData"})}case"saveConfig":{const{uniqueId:t,config:n,name:i,remove:o}=e;let s;try{o?yield Object(r.b)(n):yield Object(r.g)(n,i)}catch(e){a.c(e),s=e.message}return w({uniqueId:t,config:n,error:s,type:"saveConfigResult"})}case"promptPath":{const{uniqueId:t}=e;let n,i;try{const e=yield s.window.showOpenDialog({});e&&([n]=e)}catch(e){a.c(e),i=e.message}return w({uniqueId:t,path:n&&n.fsPath,type:"promptPathResult"})}}}))}f&&console.warn("[vscode-sshfs] Detected we are running in debug mode")}};
//# sourceMappingURL=7.extension.js.map