exports.ids=[0],exports.modules={36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DEFAULT_TIMEOUT=3e4;t.ERRORS={InvalidSocksCommand:"An invalid SOCKS command was provided. Valid options are connect, bind, and associate.",InvalidSocksCommandForOperation:"An invalid SOCKS command was provided. Only a subset of commands are supported for this operation.",InvalidSocksCommandChain:"An invalid SOCKS command was provided. Chaining currently only supports the connect command.",InvalidSocksClientOptionsDestination:"An invalid destination host was provided.",InvalidSocksClientOptionsExistingSocket:"An invalid existing socket was provided. This should be an instance of stream.Duplex.",InvalidSocksClientOptionsProxy:"Invalid SOCKS proxy details were provided.",InvalidSocksClientOptionsTimeout:"An invalid timeout value was provided. Please enter a value above 0 (in ms).",InvalidSocksClientOptionsProxiesLength:"At least two socks proxies must be provided for chaining.",NegotiationError:"Negotiation error",SocketClosed:"Socket closed",ProxyConnectionTimedOut:"Proxy connection timed out",InternalError:"SocksClient internal error (this should not happen)",InvalidSocks4HandshakeResponse:"Received invalid Socks4 handshake response",Socks4ProxyRejectedConnection:"Socks4 Proxy rejected connection",InvalidSocks4IncomingConnectionResponse:"Socks4 invalid incoming connection response",Socks4ProxyRejectedIncomingBoundConnection:"Socks4 Proxy rejected incoming bound connection",InvalidSocks5InitialHandshakeResponse:"Received invalid Socks5 initial handshake response",InvalidSocks5IntiailHandshakeSocksVersion:"Received invalid Socks5 initial handshake (invalid socks version)",InvalidSocks5InitialHandshakeNoAcceptedAuthType:"Received invalid Socks5 initial handshake (no accepted authentication type)",InvalidSocks5InitialHandshakeUnknownAuthType:"Received invalid Socks5 initial handshake (unknown authentication type)",Socks5AuthenticationFailed:"Socks5 Authentication failed",InvalidSocks5FinalHandshake:"Received invalid Socks5 final handshake response",InvalidSocks5FinalHandshakeRejected:"Socks5 proxy rejected connection",InvalidSocks5IncomingConnectionResponse:"Received invalid Socks5 incoming connection response",Socks5ProxyRejectedIncomingBoundConnection:"Socks5 Proxy rejected incoming bound connection"};var i,r,s,o,a,f;t.SOCKS_INCOMING_PACKET_SIZES={Socks5InitialHandshakeResponse:2,Socks5UserPassAuthenticationResponse:2,Socks5ResponseHeader:5,Socks5ResponseIPv4:10,Socks5ResponseIPv6:22,Socks5ResponseHostname:e=>e+7,Socks4Response:8},function(e){e[e.connect=1]="connect",e[e.bind=2]="bind",e[e.associate=3]="associate"}(i||(i={})),t.SocksCommand=i,function(e){e[e.Granted=90]="Granted",e[e.Failed=91]="Failed",e[e.Rejected=92]="Rejected",e[e.RejectedIdent=93]="RejectedIdent"}(r||(r={})),t.Socks4Response=r,function(e){e[e.NoAuth=0]="NoAuth",e[e.GSSApi=1]="GSSApi",e[e.UserPass=2]="UserPass"}(s||(s={})),t.Socks5Auth=s,function(e){e[e.Granted=0]="Granted",e[e.Failure=1]="Failure",e[e.NotAllowed=2]="NotAllowed",e[e.NetworkUnreachable=3]="NetworkUnreachable",e[e.HostUnreachable=4]="HostUnreachable",e[e.ConnectionRefused=5]="ConnectionRefused",e[e.TTLExpired=6]="TTLExpired",e[e.CommandNotSupported=7]="CommandNotSupported",e[e.AddressNotSupported=8]="AddressNotSupported"}(o||(o={})),t.Socks5Response=o,function(e){e[e.IPv4=1]="IPv4",e[e.Hostname=3]="Hostname",e[e.IPv6=4]="IPv6"}(a||(a={})),t.Socks5HostType=a,function(e){e[e.Created=0]="Created",e[e.Connecting=1]="Connecting",e[e.Connected=2]="Connected",e[e.SentInitialHandshake=3]="SentInitialHandshake",e[e.ReceivedInitialHandshakeResponse=4]="ReceivedInitialHandshakeResponse",e[e.SentAuthentication=5]="SentAuthentication",e[e.ReceivedAuthenticationResponse=6]="ReceivedAuthenticationResponse",e[e.SentFinalHandshake=7]="SentFinalHandshake",e[e.ReceivedFinalResponse=8]="ReceivedFinalResponse",e[e.BoundWaitingForConnection=9]="BoundWaitingForConnection",e[e.Established=10]="Established",e[e.Disconnected=11]="Disconnected",e[e.Error=99]="Error"}(f||(f={})),t.SocksClientState=f},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i extends Error{constructor(e,t){super(e),this.options=t}}t.SocksClientError=i,t.shuffleArray=function(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(56))},56:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{f(i.next(e))}catch(e){s(e)}}function a(e){try{f(i.throw(e))}catch(e){s(e)}}function f(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}f((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(9),s=n(10),o=n(57),a=n(58),f=n(36),c=n(60),u=n(61),h=n(37);class d extends r.EventEmitter{constructor(e){super(),this._options=Object.assign({},e),c.validateSocksClientOptions(e),this.state=f.SocksClientState.Created}static createConnection(e,t){return c.validateSocksClientOptions(e,["connect"]),new Promise((n,i)=>{const r=new d(e);r.connect(e.existing_socket),r.once("established",e=>{r.removeAllListeners(),"function"==typeof t?(t(null,e),n()):n(e)}),r.once("error",e=>{r.removeAllListeners(),"function"==typeof t?(t(e),n()):i(e)})})}static createConnectionChain(e,t){return c.validateSocksClientChainOptions(e),e.randomizeChain&&h.shuffleArray(e.proxies),new Promise((n,r)=>i(this,void 0,void 0,(function*(){let i;try{for(let t=0;t<e.proxies.length;t++){const n=e.proxies[t],r=t===e.proxies.length-1?e.destination:{host:e.proxies[t+1].ipaddress,port:e.proxies[t+1].port},s=yield d.createConnection({command:"connect",proxy:n,destination:r});i||(i=s.socket)}"function"==typeof t?(t(null,{socket:i}),n()):n({socket:i})}catch(e){"function"==typeof t?(t(e),n()):r(e)}})))}static createUDPFrame(e){const t=new a.SmartBuffer;return t.writeUInt16BE(0),t.writeUInt8(e.frameNumber||0),s.isIPv4(e.remoteHost.host)?(t.writeUInt8(f.Socks5HostType.IPv4),t.writeUInt32BE(o.toLong(e.remoteHost.host))):s.isIPv6(e.remoteHost.host)?(t.writeUInt8(f.Socks5HostType.IPv6),t.writeBuffer(o.toBuffer(e.remoteHost.host))):(t.writeUInt8(f.Socks5HostType.Hostname),t.writeUInt8(Buffer.byteLength(e.remoteHost.host)),t.writeString(e.remoteHost.host)),t.writeUInt16BE(e.remoteHost.port),t.writeBuffer(e.data),t.toBuffer()}static parseUDPFrame(e){const t=a.SmartBuffer.fromBuffer(e);t.readOffset=2;const n=t.readUInt8(),i=t.readUInt8();let r;return r=i===f.Socks5HostType.IPv4?o.fromLong(t.readUInt32BE()):i===f.Socks5HostType.IPv6?o.toString(t.readBuffer(16)):t.readString(t.readUInt8()),{frameNumber:n,remoteHost:{host:r,port:t.readUInt16BE()},data:t.readBuffer()}}get state(){return this._state}set state(e){this._state!==f.SocksClientState.Error&&(this._state=e)}connect(e){this._onDataReceived=e=>this.onDataReceived(e),this._onClose=()=>this.onClose(),this._onError=e=>this.onError(e),this._onConnect=()=>this.onConnect();const t=setTimeout(()=>this.onEstablishedTimeout(),this._options.timeout||f.DEFAULT_TIMEOUT);t.unref&&"function"==typeof t.unref&&t.unref(),this._socket=e||new s.Socket,this._socket.once("close",this._onClose),this._socket.once("error",this._onError),this._socket.once("connect",this._onConnect),this._socket.on("data",this._onDataReceived),this.state=f.SocksClientState.Connecting,this._receiveBuffer=new u.ReceiveBuffer,e?this._socket.emit("connect"):(this._socket.connect(this.getSocketOptions()),void 0!==this._options.set_tcp_nodelay&&null!==this._options.set_tcp_nodelay&&this._socket.setNoDelay(!!this._options.set_tcp_nodelay)),this.prependOnceListener("established",e=>{setImmediate(()=>{if(this._receiveBuffer.length>0){const t=this._receiveBuffer.get(this._receiveBuffer.length);e.socket.emit("data",t)}e.socket.resume()})})}getSocketOptions(){return Object.assign(Object.assign({},this._options.socket_options),{host:this._options.proxy.host||this._options.proxy.ipaddress,port:this._options.proxy.port})}onEstablishedTimeout(){this.state!==f.SocksClientState.Established&&this.state!==f.SocksClientState.BoundWaitingForConnection&&this._closeSocket(f.ERRORS.ProxyConnectionTimedOut)}onConnect(){this.state=f.SocksClientState.Connected,4===this._options.proxy.type?this.sendSocks4InitialHandshake():this.sendSocks5InitialHandshake(),this.state=f.SocksClientState.SentInitialHandshake}onDataReceived(e){this._receiveBuffer.append(e),this.processData()}processData(){this._receiveBuffer.length>=this._nextRequiredPacketBufferSize&&(this.state===f.SocksClientState.SentInitialHandshake?4===this._options.proxy.type?this.handleSocks4FinalHandshakeResponse():this.handleInitialSocks5HandshakeResponse():this.state===f.SocksClientState.SentAuthentication?this.handleInitialSocks5AuthenticationHandshakeResponse():this.state===f.SocksClientState.SentFinalHandshake?this.handleSocks5FinalHandshakeResponse():this.state===f.SocksClientState.BoundWaitingForConnection?4===this._options.proxy.type?this.handleSocks4IncomingConnectionResponse():this.handleSocks5IncomingConnectionResponse():this.state===f.SocksClientState.Established||this._closeSocket(f.ERRORS.InternalError))}onClose(){this._closeSocket(f.ERRORS.SocketClosed)}onError(e){this._closeSocket(e.message)}removeInternalSocketHandlers(){this._socket.pause(),this._socket.removeListener("data",this._onDataReceived),this._socket.removeListener("close",this._onClose),this._socket.removeListener("error",this._onError),this._socket.removeListener("connect",this.onConnect)}_closeSocket(e){this.state!==f.SocksClientState.Error&&(this.state=f.SocksClientState.Error,this._socket.destroy(),this.removeInternalSocketHandlers(),this.emit("error",new h.SocksClientError(e,this._options)))}sendSocks4InitialHandshake(){const e=this._options.proxy.userId||"",t=new a.SmartBuffer;t.writeUInt8(4),t.writeUInt8(f.SocksCommand[this._options.command]),t.writeUInt16BE(this._options.destination.port),s.isIPv4(this._options.destination.host)?(t.writeBuffer(o.toBuffer(this._options.destination.host)),t.writeStringNT(e)):(t.writeUInt8(0),t.writeUInt8(0),t.writeUInt8(0),t.writeUInt8(1),t.writeStringNT(e),t.writeStringNT(this._options.destination.host)),this._nextRequiredPacketBufferSize=f.SOCKS_INCOMING_PACKET_SIZES.Socks4Response,this._socket.write(t.toBuffer())}handleSocks4FinalHandshakeResponse(){const e=this._receiveBuffer.get(8);if(e[1]!==f.Socks4Response.Granted)this._closeSocket(`${f.ERRORS.Socks4ProxyRejectedConnection} - (${f.Socks4Response[e[1]]})`);else if(f.SocksCommand[this._options.command]===f.SocksCommand.bind){const t=a.SmartBuffer.fromBuffer(e);t.readOffset=2;const n={port:t.readUInt16BE(),host:o.fromLong(t.readUInt32BE())};"0.0.0.0"===n.host&&(n.host=this._options.proxy.ipaddress),this.state=f.SocksClientState.BoundWaitingForConnection,this.emit("bound",{socket:this._socket,remoteHost:n})}else this.state=f.SocksClientState.Established,this.removeInternalSocketHandlers(),this.emit("established",{socket:this._socket})}handleSocks4IncomingConnectionResponse(){const e=this._receiveBuffer.get(8);if(e[1]!==f.Socks4Response.Granted)this._closeSocket(`${f.ERRORS.Socks4ProxyRejectedIncomingBoundConnection} - (${f.Socks4Response[e[1]]})`);else{const t=a.SmartBuffer.fromBuffer(e);t.readOffset=2;const n={port:t.readUInt16BE(),host:o.fromLong(t.readUInt32BE())};this.state=f.SocksClientState.Established,this.removeInternalSocketHandlers(),this.emit("established",{socket:this._socket,remoteHost:n})}}sendSocks5InitialHandshake(){const e=new a.SmartBuffer;e.writeUInt8(5),this._options.proxy.userId||this._options.proxy.password?(e.writeUInt8(2),e.writeUInt8(f.Socks5Auth.NoAuth),e.writeUInt8(f.Socks5Auth.UserPass)):(e.writeUInt8(1),e.writeUInt8(f.Socks5Auth.NoAuth)),this._nextRequiredPacketBufferSize=f.SOCKS_INCOMING_PACKET_SIZES.Socks5InitialHandshakeResponse,this._socket.write(e.toBuffer()),this.state=f.SocksClientState.SentInitialHandshake}handleInitialSocks5HandshakeResponse(){const e=this._receiveBuffer.get(2);5!==e[0]?this._closeSocket(f.ERRORS.InvalidSocks5IntiailHandshakeSocksVersion):255===e[1]?this._closeSocket(f.ERRORS.InvalidSocks5InitialHandshakeNoAcceptedAuthType):e[1]===f.Socks5Auth.NoAuth?this.sendSocks5CommandRequest():e[1]===f.Socks5Auth.UserPass?this.sendSocks5UserPassAuthentication():this._closeSocket(f.ERRORS.InvalidSocks5InitialHandshakeUnknownAuthType)}sendSocks5UserPassAuthentication(){const e=this._options.proxy.userId||"",t=this._options.proxy.password||"",n=new a.SmartBuffer;n.writeUInt8(1),n.writeUInt8(Buffer.byteLength(e)),n.writeString(e),n.writeUInt8(Buffer.byteLength(t)),n.writeString(t),this._nextRequiredPacketBufferSize=f.SOCKS_INCOMING_PACKET_SIZES.Socks5UserPassAuthenticationResponse,this._socket.write(n.toBuffer()),this.state=f.SocksClientState.SentAuthentication}handleInitialSocks5AuthenticationHandshakeResponse(){this.state=f.SocksClientState.ReceivedAuthenticationResponse,0!==this._receiveBuffer.get(2)[1]?this._closeSocket(f.ERRORS.Socks5AuthenticationFailed):this.sendSocks5CommandRequest()}sendSocks5CommandRequest(){const e=new a.SmartBuffer;e.writeUInt8(5),e.writeUInt8(f.SocksCommand[this._options.command]),e.writeUInt8(0),s.isIPv4(this._options.destination.host)?(e.writeUInt8(f.Socks5HostType.IPv4),e.writeBuffer(o.toBuffer(this._options.destination.host))):s.isIPv6(this._options.destination.host)?(e.writeUInt8(f.Socks5HostType.IPv6),e.writeBuffer(o.toBuffer(this._options.destination.host))):(e.writeUInt8(f.Socks5HostType.Hostname),e.writeUInt8(this._options.destination.host.length),e.writeString(this._options.destination.host)),e.writeUInt16BE(this._options.destination.port),this._nextRequiredPacketBufferSize=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader,this._socket.write(e.toBuffer()),this.state=f.SocksClientState.SentFinalHandshake}handleSocks5FinalHandshakeResponse(){const e=this._receiveBuffer.peek(5);if(5!==e[0]||e[1]!==f.Socks5Response.Granted)this._closeSocket(`${f.ERRORS.InvalidSocks5FinalHandshakeRejected} - ${f.Socks5Response[e[1]]}`);else{const t=e[3];let n,i;if(t===f.Socks5HostType.IPv4){const e=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;if(this._receiveBuffer.length<e)return void(this._nextRequiredPacketBufferSize=e);i=a.SmartBuffer.fromBuffer(this._receiveBuffer.get(e).slice(4)),n={host:o.fromLong(i.readUInt32BE()),port:i.readUInt16BE()},"0.0.0.0"===n.host&&(n.host=this._options.proxy.ipaddress)}else if(t===f.Socks5HostType.Hostname){const t=e[4],r=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(t);if(this._receiveBuffer.length<r)return void(this._nextRequiredPacketBufferSize=r);i=a.SmartBuffer.fromBuffer(this._receiveBuffer.get(r).slice(5)),n={host:i.readString(t),port:i.readUInt16BE()}}else if(t===f.Socks5HostType.IPv6){const e=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;if(this._receiveBuffer.length<e)return void(this._nextRequiredPacketBufferSize=e);i=a.SmartBuffer.fromBuffer(this._receiveBuffer.get(e).slice(4)),n={host:o.toString(i.readBuffer(16)),port:i.readUInt16BE()}}this.state=f.SocksClientState.ReceivedFinalResponse,f.SocksCommand[this._options.command]===f.SocksCommand.connect?(this.state=f.SocksClientState.Established,this.removeInternalSocketHandlers(),this.emit("established",{socket:this._socket})):f.SocksCommand[this._options.command]===f.SocksCommand.bind?(this.state=f.SocksClientState.BoundWaitingForConnection,this._nextRequiredPacketBufferSize=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader,this.emit("bound",{socket:this._socket,remoteHost:n})):f.SocksCommand[this._options.command]===f.SocksCommand.associate&&(this.state=f.SocksClientState.Established,this.removeInternalSocketHandlers(),this.emit("established",{socket:this._socket,remoteHost:n}))}}handleSocks5IncomingConnectionResponse(){const e=this._receiveBuffer.peek(5);if(5!==e[0]||e[1]!==f.Socks5Response.Granted)this._closeSocket(`${f.ERRORS.Socks5ProxyRejectedIncomingBoundConnection} - ${f.Socks5Response[e[1]]}`);else{const t=e[3];let n,i;if(t===f.Socks5HostType.IPv4){const e=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;if(this._receiveBuffer.length<e)return void(this._nextRequiredPacketBufferSize=e);i=a.SmartBuffer.fromBuffer(this._receiveBuffer.get(e).slice(4)),n={host:o.fromLong(i.readUInt32BE()),port:i.readUInt16BE()},"0.0.0.0"===n.host&&(n.host=this._options.proxy.ipaddress)}else if(t===f.Socks5HostType.Hostname){const t=e[4],r=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(t);if(this._receiveBuffer.length<r)return void(this._nextRequiredPacketBufferSize=r);i=a.SmartBuffer.fromBuffer(this._receiveBuffer.get(r).slice(5)),n={host:i.readString(t),port:i.readUInt16BE()}}else if(t===f.Socks5HostType.IPv6){const e=f.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;if(this._receiveBuffer.length<e)return void(this._nextRequiredPacketBufferSize=e);i=a.SmartBuffer.fromBuffer(this._receiveBuffer.get(e).slice(4)),n={host:o.toString(i.readBuffer(16)),port:i.readUInt16BE()}}this.state=f.SocksClientState.Established,this.removeInternalSocketHandlers(),this.emit("established",{socket:this._socket,remoteHost:n})}}get socksClientOptions(){return Object.assign({},this._options)}}t.SocksClient=d},57:function(e,t,n){"use strict";var i=t,r=n(13).Buffer,s=n(20);i.toBuffer=function(e,t,n){var i;if(n=~~n,this.isV4Format(e))i=t||new r(n+4),e.split(/\./g).map((function(e){i[n++]=255&parseInt(e,10)}));else if(this.isV6Format(e)){var s,o=e.split(":",8);for(s=0;s<o.length;s++){var a;this.isV4Format(o[s])&&(a=this.toBuffer(o[s]),o[s]=a.slice(0,2).toString("hex")),a&&++s<8&&o.splice(s,0,a.slice(2,4).toString("hex"))}if(""===o[0])for(;o.length<8;)o.unshift("0");else if(""===o[o.length-1])for(;o.length<8;)o.push("0");else if(o.length<8){for(s=0;s<o.length&&""!==o[s];s++);var f=[s,1];for(s=9-o.length;s>0;s--)f.push("0");o.splice.apply(o,f)}for(i=t||new r(n+16),s=0;s<o.length;s++){var c=parseInt(o[s],16);i[n++]=c>>8&255,i[n++]=255&c}}if(!i)throw Error("Invalid ip address: "+e);return i},i.toString=function(e,t,n){t=~~t;var i=[];if(4===(n=n||e.length-t)){for(var r=0;r<n;r++)i.push(e[t+r]);i=i.join(".")}else if(16===n){for(r=0;r<n;r+=2)i.push(e.readUInt16BE(t+r).toString(16));i=(i=(i=i.join(":")).replace(/(^|:)0(:0)*:0(:|$)/,"$1::$3")).replace(/:{3,4}/,"::")}return i};var o=/^(\d{1,3}\.){3,3}\d{1,3}$/,a=/^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;function f(e){return e?e.toLowerCase():"ipv4"}i.isV4Format=function(e){return o.test(e)},i.isV6Format=function(e){return a.test(e)},i.fromPrefixLen=function(e,t){var n=4;"ipv6"===(t=e>32?"ipv6":f(t))&&(n=16);for(var s=new r(n),o=0,a=s.length;o<a;++o){var c=8;e<8&&(c=e),e-=c,s[o]=255&~(255>>c)}return i.toString(s)},i.mask=function(e,t){e=i.toBuffer(e),t=i.toBuffer(t);var n=new r(Math.max(e.length,t.length)),s=0;if(e.length===t.length)for(s=0;s<e.length;s++)n[s]=e[s]&t[s];else if(4===t.length)for(s=0;s<t.length;s++)n[s]=e[e.length-4+s]&t[s];else{for(s=0;s<n.length-6;s++)n[s]=0;for(n[10]=255,n[11]=255,s=0;s<e.length;s++)n[s+12]=e[s]&t[s+12];s+=12}for(;s<n.length;s++)n[s]=0;return i.toString(n)},i.cidr=function(e){var t=e.split("/"),n=t[0];if(2!==t.length)throw new Error("invalid CIDR subnet: "+n);var r=i.fromPrefixLen(parseInt(t[1],10));return i.mask(n,r)},i.subnet=function(e,t){for(var n=i.toLong(i.mask(e,t)),r=i.toBuffer(t),s=0,o=0;o<r.length;o++)if(255===r[o])s+=8;else for(var a=255&r[o];a;)a=a<<1&255,s++;var f=Math.pow(2,32-s);return{networkAddress:i.fromLong(n),firstAddress:f<=2?i.fromLong(n):i.fromLong(n+1),lastAddress:f<=2?i.fromLong(n+f-1):i.fromLong(n+f-2),broadcastAddress:i.fromLong(n+f-1),subnetMask:t,subnetMaskLength:s,numHosts:f<=2?f:f-2,length:f,contains:function(e){return n===i.toLong(i.mask(e,t))}}},i.cidrSubnet=function(e){var t=e.split("/"),n=t[0];if(2!==t.length)throw new Error("invalid CIDR subnet: "+n);var r=i.fromPrefixLen(parseInt(t[1],10));return i.subnet(n,r)},i.not=function(e){for(var t=i.toBuffer(e),n=0;n<t.length;n++)t[n]=255^t[n];return i.toString(t)},i.or=function(e,t){if(e=i.toBuffer(e),t=i.toBuffer(t),e.length===t.length){for(var n=0;n<e.length;++n)e[n]|=t[n];return i.toString(e)}var r=e,s=t;t.length>e.length&&(r=t,s=e);var o=r.length-s.length;for(n=o;n<r.length;++n)r[n]|=s[n-o];return i.toString(r)},i.isEqual=function(e,t){if(e=i.toBuffer(e),t=i.toBuffer(t),e.length===t.length){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}if(4===t.length){var r=t;t=e,e=r}for(n=0;n<10;n++)if(0!==t[n])return!1;var s=t.readUInt16BE(10);if(0!==s&&65535!==s)return!1;for(n=0;n<4;n++)if(e[n]!==t[n+12])return!1;return!0},i.isPrivate=function(e){return/^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e)||/^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e)||/^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e)||/^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e)||/^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e)||/^f[cd][0-9a-f]{2}:/i.test(e)||/^fe80:/i.test(e)||/^::1$/.test(e)||/^::$/.test(e)},i.isPublic=function(e){return!i.isPrivate(e)},i.isLoopback=function(e){return/^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(e)||/^fe80::1$/.test(e)||/^::1$/.test(e)||/^::$/.test(e)},i.loopback=function(e){if("ipv4"!==(e=f(e))&&"ipv6"!==e)throw new Error("family must be ipv4 or ipv6");return"ipv4"===e?"127.0.0.1":"fe80::1"},i.address=function(e,t){var n,r=s.networkInterfaces();if(t=f(t),e&&"private"!==e&&"public"!==e){var o=r[e].filter((function(e){return e.family.toLowerCase()===t}));if(0===o.length)return;return o[0].address}return(n=Object.keys(r).map((function(n){var s=r[n].filter((function(n){return n.family=n.family.toLowerCase(),n.family===t&&!i.isLoopback(n.address)&&(!e||("public"===e?i.isPrivate(n.address):i.isPublic(n.address)))}));return s.length?s[0].address:void 0})).filter(Boolean)).length?n[0]:i.loopback(t)},i.toLong=function(e){var t=0;return e.split(".").forEach((function(e){t<<=8,t+=parseInt(e)})),t>>>0},i.fromLong=function(e){return(e>>>24)+"."+(e>>16&255)+"."+(e>>8&255)+"."+(255&e)}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(59);class r{constructor(e){if(this.length=0,this._encoding="utf8",this._writeOffset=0,this._readOffset=0,r.isSmartBufferOptions(e))if(e.encoding&&(i.checkEncoding(e.encoding),this._encoding=e.encoding),e.size){if(!(i.isFiniteInteger(e.size)&&e.size>0))throw new Error(i.ERRORS.INVALID_SMARTBUFFER_SIZE);this._buff=Buffer.allocUnsafe(e.size)}else if(e.buff){if(!(e.buff instanceof Buffer))throw new Error(i.ERRORS.INVALID_SMARTBUFFER_BUFFER);this._buff=e.buff,this.length=e.buff.length}else this._buff=Buffer.allocUnsafe(4096);else{if(void 0!==e)throw new Error(i.ERRORS.INVALID_SMARTBUFFER_OBJECT);this._buff=Buffer.allocUnsafe(4096)}}static fromSize(e,t){return new this({size:e,encoding:t})}static fromBuffer(e,t){return new this({buff:e,encoding:t})}static fromOptions(e){return new this(e)}static isSmartBufferOptions(e){const t=e;return t&&(void 0!==t.encoding||void 0!==t.size||void 0!==t.buff)}readInt8(e){return this._readNumberValue(Buffer.prototype.readInt8,1,e)}readInt16BE(e){return this._readNumberValue(Buffer.prototype.readInt16BE,2,e)}readInt16LE(e){return this._readNumberValue(Buffer.prototype.readInt16LE,2,e)}readInt32BE(e){return this._readNumberValue(Buffer.prototype.readInt32BE,4,e)}readInt32LE(e){return this._readNumberValue(Buffer.prototype.readInt32LE,4,e)}readBigInt64BE(e){return i.bigIntAndBufferInt64Check("readBigInt64BE"),this._readNumberValue(Buffer.prototype.readBigInt64BE,8,e)}readBigInt64LE(e){return i.bigIntAndBufferInt64Check("readBigInt64LE"),this._readNumberValue(Buffer.prototype.readBigInt64LE,8,e)}writeInt8(e,t){return this._writeNumberValue(Buffer.prototype.writeInt8,1,e,t),this}insertInt8(e,t){return this._insertNumberValue(Buffer.prototype.writeInt8,1,e,t)}writeInt16BE(e,t){return this._writeNumberValue(Buffer.prototype.writeInt16BE,2,e,t)}insertInt16BE(e,t){return this._insertNumberValue(Buffer.prototype.writeInt16BE,2,e,t)}writeInt16LE(e,t){return this._writeNumberValue(Buffer.prototype.writeInt16LE,2,e,t)}insertInt16LE(e,t){return this._insertNumberValue(Buffer.prototype.writeInt16LE,2,e,t)}writeInt32BE(e,t){return this._writeNumberValue(Buffer.prototype.writeInt32BE,4,e,t)}insertInt32BE(e,t){return this._insertNumberValue(Buffer.prototype.writeInt32BE,4,e,t)}writeInt32LE(e,t){return this._writeNumberValue(Buffer.prototype.writeInt32LE,4,e,t)}insertInt32LE(e,t){return this._insertNumberValue(Buffer.prototype.writeInt32LE,4,e,t)}writeBigInt64BE(e,t){return i.bigIntAndBufferInt64Check("writeBigInt64BE"),this._writeNumberValue(Buffer.prototype.writeBigInt64BE,8,e,t)}insertBigInt64BE(e,t){return i.bigIntAndBufferInt64Check("writeBigInt64BE"),this._insertNumberValue(Buffer.prototype.writeBigInt64BE,8,e,t)}writeBigInt64LE(e,t){return i.bigIntAndBufferInt64Check("writeBigInt64LE"),this._writeNumberValue(Buffer.prototype.writeBigInt64LE,8,e,t)}insertBigInt64LE(e,t){return i.bigIntAndBufferInt64Check("writeBigInt64LE"),this._insertNumberValue(Buffer.prototype.writeBigInt64LE,8,e,t)}readUInt8(e){return this._readNumberValue(Buffer.prototype.readUInt8,1,e)}readUInt16BE(e){return this._readNumberValue(Buffer.prototype.readUInt16BE,2,e)}readUInt16LE(e){return this._readNumberValue(Buffer.prototype.readUInt16LE,2,e)}readUInt32BE(e){return this._readNumberValue(Buffer.prototype.readUInt32BE,4,e)}readUInt32LE(e){return this._readNumberValue(Buffer.prototype.readUInt32LE,4,e)}readBigUInt64BE(e){return i.bigIntAndBufferInt64Check("readBigUInt64BE"),this._readNumberValue(Buffer.prototype.readBigUInt64BE,8,e)}readBigUInt64LE(e){return i.bigIntAndBufferInt64Check("readBigUInt64LE"),this._readNumberValue(Buffer.prototype.readBigUInt64LE,8,e)}writeUInt8(e,t){return this._writeNumberValue(Buffer.prototype.writeUInt8,1,e,t)}insertUInt8(e,t){return this._insertNumberValue(Buffer.prototype.writeUInt8,1,e,t)}writeUInt16BE(e,t){return this._writeNumberValue(Buffer.prototype.writeUInt16BE,2,e,t)}insertUInt16BE(e,t){return this._insertNumberValue(Buffer.prototype.writeUInt16BE,2,e,t)}writeUInt16LE(e,t){return this._writeNumberValue(Buffer.prototype.writeUInt16LE,2,e,t)}insertUInt16LE(e,t){return this._insertNumberValue(Buffer.prototype.writeUInt16LE,2,e,t)}writeUInt32BE(e,t){return this._writeNumberValue(Buffer.prototype.writeUInt32BE,4,e,t)}insertUInt32BE(e,t){return this._insertNumberValue(Buffer.prototype.writeUInt32BE,4,e,t)}writeUInt32LE(e,t){return this._writeNumberValue(Buffer.prototype.writeUInt32LE,4,e,t)}insertUInt32LE(e,t){return this._insertNumberValue(Buffer.prototype.writeUInt32LE,4,e,t)}writeBigUInt64BE(e,t){return i.bigIntAndBufferInt64Check("writeBigUInt64BE"),this._writeNumberValue(Buffer.prototype.writeBigUInt64BE,8,e,t)}insertBigUInt64BE(e,t){return i.bigIntAndBufferInt64Check("writeBigUInt64BE"),this._insertNumberValue(Buffer.prototype.writeBigUInt64BE,8,e,t)}writeBigUInt64LE(e,t){return i.bigIntAndBufferInt64Check("writeBigUInt64LE"),this._writeNumberValue(Buffer.prototype.writeBigUInt64LE,8,e,t)}insertBigUInt64LE(e,t){return i.bigIntAndBufferInt64Check("writeBigUInt64LE"),this._insertNumberValue(Buffer.prototype.writeBigUInt64LE,8,e,t)}readFloatBE(e){return this._readNumberValue(Buffer.prototype.readFloatBE,4,e)}readFloatLE(e){return this._readNumberValue(Buffer.prototype.readFloatLE,4,e)}writeFloatBE(e,t){return this._writeNumberValue(Buffer.prototype.writeFloatBE,4,e,t)}insertFloatBE(e,t){return this._insertNumberValue(Buffer.prototype.writeFloatBE,4,e,t)}writeFloatLE(e,t){return this._writeNumberValue(Buffer.prototype.writeFloatLE,4,e,t)}insertFloatLE(e,t){return this._insertNumberValue(Buffer.prototype.writeFloatLE,4,e,t)}readDoubleBE(e){return this._readNumberValue(Buffer.prototype.readDoubleBE,8,e)}readDoubleLE(e){return this._readNumberValue(Buffer.prototype.readDoubleLE,8,e)}writeDoubleBE(e,t){return this._writeNumberValue(Buffer.prototype.writeDoubleBE,8,e,t)}insertDoubleBE(e,t){return this._insertNumberValue(Buffer.prototype.writeDoubleBE,8,e,t)}writeDoubleLE(e,t){return this._writeNumberValue(Buffer.prototype.writeDoubleLE,8,e,t)}insertDoubleLE(e,t){return this._insertNumberValue(Buffer.prototype.writeDoubleLE,8,e,t)}readString(e,t){let n;"number"==typeof e?(i.checkLengthValue(e),n=Math.min(e,this.length-this._readOffset)):(t=e,n=this.length-this._readOffset),void 0!==t&&i.checkEncoding(t);const r=this._buff.slice(this._readOffset,this._readOffset+n).toString(t||this._encoding);return this._readOffset+=n,r}insertString(e,t,n){return i.checkOffsetValue(t),this._handleString(e,!0,t,n)}writeString(e,t,n){return this._handleString(e,!1,t,n)}readStringNT(e){void 0!==e&&i.checkEncoding(e);let t=this.length;for(let e=this._readOffset;e<this.length;e++)if(0===this._buff[e]){t=e;break}const n=this._buff.slice(this._readOffset,t);return this._readOffset=t+1,n.toString(e||this._encoding)}insertStringNT(e,t,n){return i.checkOffsetValue(t),this.insertString(e,t,n),this.insertUInt8(0,t+e.length),this}writeStringNT(e,t,n){return this.writeString(e,t,n),this.writeUInt8(0,"number"==typeof t?t+e.length:this.writeOffset),this}readBuffer(e){void 0!==e&&i.checkLengthValue(e);const t="number"==typeof e?e:this.length,n=Math.min(this.length,this._readOffset+t),r=this._buff.slice(this._readOffset,n);return this._readOffset=n,r}insertBuffer(e,t){return i.checkOffsetValue(t),this._handleBuffer(e,!0,t)}writeBuffer(e,t){return this._handleBuffer(e,!1,t)}readBufferNT(){let e=this.length;for(let t=this._readOffset;t<this.length;t++)if(0===this._buff[t]){e=t;break}const t=this._buff.slice(this._readOffset,e);return this._readOffset=e+1,t}insertBufferNT(e,t){return i.checkOffsetValue(t),this.insertBuffer(e,t),this.insertUInt8(0,t+e.length),this}writeBufferNT(e,t){return void 0!==t&&i.checkOffsetValue(t),this.writeBuffer(e,t),this.writeUInt8(0,"number"==typeof t?t+e.length:this._writeOffset),this}clear(){return this._writeOffset=0,this._readOffset=0,this.length=0,this}remaining(){return this.length-this._readOffset}get readOffset(){return this._readOffset}set readOffset(e){i.checkOffsetValue(e),i.checkTargetOffset(e,this),this._readOffset=e}get writeOffset(){return this._writeOffset}set writeOffset(e){i.checkOffsetValue(e),i.checkTargetOffset(e,this),this._writeOffset=e}get encoding(){return this._encoding}set encoding(e){i.checkEncoding(e),this._encoding=e}get internalBuffer(){return this._buff}toBuffer(){return this._buff.slice(0,this.length)}toString(e){const t="string"==typeof e?e:this._encoding;return i.checkEncoding(t),this._buff.toString(t,0,this.length)}destroy(){return this.clear(),this}_handleString(e,t,n,r){let s=this._writeOffset,o=this._encoding;"number"==typeof n?s=n:"string"==typeof n&&(i.checkEncoding(n),o=n),"string"==typeof r&&(i.checkEncoding(r),o=r);const a=Buffer.byteLength(e,o);return t?this.ensureInsertable(a,s):this._ensureWriteable(a,s),this._buff.write(e,s,a,o),t?this._writeOffset+=a:"number"==typeof n?this._writeOffset=Math.max(this._writeOffset,s+a):this._writeOffset+=a,this}_handleBuffer(e,t,n){const i="number"==typeof n?n:this._writeOffset;return t?this.ensureInsertable(e.length,i):this._ensureWriteable(e.length,i),e.copy(this._buff,i),t?this._writeOffset+=e.length:"number"==typeof n?this._writeOffset=Math.max(this._writeOffset,i+e.length):this._writeOffset+=e.length,this}ensureReadable(e,t){let n=this._readOffset;if(void 0!==t&&(i.checkOffsetValue(t),n=t),n<0||n+e>this.length)throw new Error(i.ERRORS.INVALID_READ_BEYOND_BOUNDS)}ensureInsertable(e,t){i.checkOffsetValue(t),this._ensureCapacity(this.length+e),t<this.length&&this._buff.copy(this._buff,t+e,t,this._buff.length),t+e>this.length?this.length=t+e:this.length+=e}_ensureWriteable(e,t){const n="number"==typeof t?t:this._writeOffset;this._ensureCapacity(n+e),n+e>this.length&&(this.length=n+e)}_ensureCapacity(e){const t=this._buff.length;if(e>t){let n=this._buff,i=3*t/2+1;i<e&&(i=e),this._buff=Buffer.allocUnsafe(i),n.copy(this._buff,0,0,t)}}_readNumberValue(e,t,n){this.ensureReadable(t,n);const i=e.call(this._buff,"number"==typeof n?n:this._readOffset);return void 0===n&&(this._readOffset+=t),i}_insertNumberValue(e,t,n,r){return i.checkOffsetValue(r),this.ensureInsertable(t,r),e.call(this._buff,n,r),this._writeOffset+=t,this}_writeNumberValue(e,t,n,r){if("number"==typeof r){if(r<0)throw new Error(i.ERRORS.INVALID_WRITE_BEYOND_BOUNDS);i.checkOffsetValue(r)}const s="number"==typeof r?r:this._writeOffset;return this._ensureWriteable(t,s),e.call(this._buff,n,s),"number"==typeof r?this._writeOffset=Math.max(this._writeOffset,s+t):this._writeOffset+=t,this}}t.SmartBuffer=r},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(13),r={INVALID_ENCODING:"Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.",INVALID_SMARTBUFFER_SIZE:"Invalid size provided. Size must be a valid integer greater than zero.",INVALID_SMARTBUFFER_BUFFER:"Invalid Buffer provided in SmartBufferOptions.",INVALID_SMARTBUFFER_OBJECT:"Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.",INVALID_OFFSET:"An invalid offset value was provided.",INVALID_OFFSET_NON_NUMBER:"An invalid offset value was provided. A numeric value is required.",INVALID_LENGTH:"An invalid length value was provided.",INVALID_LENGTH_NON_NUMBER:"An invalid length value was provived. A numeric value is required.",INVALID_TARGET_OFFSET:"Target offset is beyond the bounds of the internal SmartBuffer data.",INVALID_TARGET_LENGTH:"Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.",INVALID_READ_BEYOND_BOUNDS:"Attempted to read beyond the bounds of the managed data.",INVALID_WRITE_BEYOND_BOUNDS:"Attempted to write beyond the bounds of the managed data."};function s(e){return"number"==typeof e&&isFinite(e)&&function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}(e)}function o(e,t){if("number"!=typeof e)throw new Error(t?r.INVALID_OFFSET_NON_NUMBER:r.INVALID_LENGTH_NON_NUMBER);if(!s(e)||e<0)throw new Error(t?r.INVALID_OFFSET:r.INVALID_LENGTH)}t.ERRORS=r,t.checkEncoding=function(e){if(!i.Buffer.isEncoding(e))throw new Error(r.INVALID_ENCODING)},t.isFiniteInteger=s,t.checkLengthValue=function(e){o(e,!1)},t.checkOffsetValue=function(e){o(e,!0)},t.checkTargetOffset=function(e,t){if(e<0||e>t.length)throw new Error(r.INVALID_TARGET_OFFSET)},t.bigIntAndBufferInt64Check=function(e){if("undefined"==typeof BigInt)throw new Error("Platform does not support JS BigInt type.");if(void 0===i.Buffer.prototype[e])throw new Error(`Platform does not support Buffer.prototype.${e}.`)}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(37),r=n(36),s=n(8);function o(e){return e&&"string"==typeof e.host&&"number"==typeof e.port&&e.port>=0&&e.port<=65535}function a(e){return e&&("string"==typeof e.host||"string"==typeof e.ipaddress)&&"number"==typeof e.port&&e.port>=0&&e.port<=65535&&(4===e.type||5===e.type)}function f(e){return"number"==typeof e&&e>0}t.validateSocksClientOptions=function(e,t=["connect","bind","associate"]){if(!r.SocksCommand[e.command])throw new i.SocksClientError(r.ERRORS.InvalidSocksCommand,e);if(-1===t.indexOf(e.command))throw new i.SocksClientError(r.ERRORS.InvalidSocksCommandForOperation,e);if(!o(e.destination))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsDestination,e);if(!a(e.proxy))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsProxy,e);if(e.timeout&&!f(e.timeout))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsTimeout,e);if(e.existing_socket&&!(e.existing_socket instanceof s.Duplex))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsExistingSocket,e)},t.validateSocksClientChainOptions=function(e){if("connect"!==e.command)throw new i.SocksClientError(r.ERRORS.InvalidSocksCommandChain,e);if(!o(e.destination))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsDestination,e);if(!(e.proxies&&Array.isArray(e.proxies)&&e.proxies.length>=2))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsProxiesLength,e);if(e.proxies.forEach(t=>{if(!a(t))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsProxy,e)}),e.timeout&&!f(e.timeout))throw new i.SocksClientError(r.ERRORS.InvalidSocksClientOptionsTimeout,e)}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ReceiveBuffer=class{constructor(e=4096){this._buffer=Buffer.allocUnsafe(e),this._offset=0,this._originalSize=e}get length(){return this._offset}append(e){if(!Buffer.isBuffer(e))throw new Error("Attempted to append a non-buffer instance to ReceiveBuffer.");if(this._offset+e.length>=this._buffer.length){const t=this._buffer;this._buffer=Buffer.allocUnsafe(Math.max(this._buffer.length+this._originalSize,this._buffer.length+e.length)),t.copy(this._buffer)}return e.copy(this._buffer,this._offset),this._offset+=e.length}peek(e){if(e>this._offset)throw new Error("Attempted to read beyond the bounds of the managed internal data.");return this._buffer.slice(0,e)}get(e){if(e>this._offset)throw new Error("Attempted to read beyond the bounds of the managed internal data.");const t=Buffer.allocUnsafe(e);return this._buffer.slice(0,e).copy(t),this._buffer.copyWithin(0,e,e+this._offset-e),this._offset-=e,t}}}};
//# sourceMappingURL=0.extension.js.map