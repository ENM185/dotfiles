exports.ids=[8],exports.modules={63:function(e,t,r){"use strict";r.r(t),r.d(t,"MemoryDuplex",(function(){return i})),r.d(t,"WritableFunctionStream",(function(){return u}));var f=r(8),s=function(e,t,r,f){return new(r||(r=Promise))((function(s,i){function u(e){try{o(f.next(e))}catch(e){i(e)}}function n(e){try{o(f.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,n)}o((f=f.apply(e,t||[])).next())}))};class i extends f.Duplex{constructor(e=4092){super(),this.size=e,this.buffer=Buffer.alloc(this.size),this.buffered=0,this.doPush=!1}_write(e,t,r){const f=e instanceof Buffer?e:Buffer.from(e,t);if(this.buffered+f.length>this.size)return r(new Error("Buffer overflow"));this.buffered+=f.copy(this.buffer,this.buffered,0),this.doPush&&this._read(),r()}_read(){const e=this.buffer.slice(0,this.buffered);this.buffered=0,this.buffer=Buffer.alloc(this.size),this.doPush=this.push(e)}bytesBuffered(){return this.buffered}}class u extends f.Writable{constructor(e){super(),this.func=e}_write(e,t,r){return s(this,void 0,void 0,(function*(){const f=e instanceof Buffer?e:Buffer.from(e,t);try{yield this.func(f),r()}catch(e){r(e)}}))}}}};
//# sourceMappingURL=8.extension.js.map