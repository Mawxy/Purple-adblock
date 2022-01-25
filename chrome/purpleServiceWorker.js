(()=>{"use strict";var e={450:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{o(i.next(e))}catch(e){r(e)}}function l(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}o((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.HLS=void 0,t.HLS=class{constructor(){this._header=["#EXTM3U","#EXT-X-VERSION:3","#EXT-X-TARGETDURATION:6","#EXT-X-MEDIA-SEQUENCE:6"],this._playlist=[],this._sequence=0,this._streamServerList=[]}addStreamLink(e,t="local",i=!1){return n(this,void 0,void 0,(function*(){const n=[];let a;const r=/RESOLUTION=(\S+),C(?:^|\S+\s+)(https:\/\/video(\S+).m3u8)/gs;for(;null!=(a=r.exec(e));)n.push({quality:n.some((e=>e.quality==(null==a?void 0:a[1])))?a[1]+"p30":a[1],url:a[2]});const s={server:t,urlList:n,sig:i};return this._streamServerList.push(s),i||(yield this.signature()),!0}))}signature(){return n(this,void 0,void 0,(function*(){const e=/video-weaver.(.*).hls.ttvnw.net\/v1\/playlist\/(.*).m3u8$/gm;yield new Promise((t=>this._streamServerList.filter((e=>0==e.sig)).forEach((i=>n(this,void 0,void 0,(function*(){const n=e.exec(i.urlList[0].url);try{const e=yield fetch(`https://jupter.ga/hls/v2/sig/${null==n?void 0:n[2]}/${null==n?void 0:n[1]}`,{method:"GET"});LogPrint("Server signature: "+e.ok),i.sig=!0,t(!0)}catch(e){t(!1)}}))))))}))}get StreamServerList(){return this._streamServerList}StreamServerListSet(e){this._streamServerList.push(e)}addPlaylist(e){if(null===e)return!1;let t=!1;const n=e.toString().split(/[\r\n]/);this._header[4]=n[4],this._header[5]=n[5];for(const e in n){if(n[e].includes("#EXT-X-PROGRAM-DATE-TIME:")){const i=Math.floor(new Date(n[e].slice(n[e].length-24,n[e].length)).getTime()/1e3);this._playlist.filter((e=>e.timestamp>=i)).length||(this._sequence=this._sequence+1,this._playlist.push({time:n[parseInt(e)],timestamp:i,info:n[parseInt(e)+1],url:n[parseInt(e)+2]}),t=!0)}for(;this._playlist.length>15;)this._playlist.shift()}return t}getAllPlaylist(){return this._header[0]+"\n"+this._header[1]+"\n"+this._header[2]+"\n"+this._header[3]+this._sequence+"\n"+this._header[4]+"\n"+this._header[5]+"\n"+this._playlist.map((e=>e.time+"\n"+e.info+"\n"+e.url+"\n"))}}},494:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=n(351);t.App=class{constructor(e,t){e.LogPrint=e=>{console.log("[Purple]: ",e)},e.realFetch=fetch,e.quality="",e.addEventListener("message",(function(t){"setQuality"===t.data.funcName&&(e.quality=t.data.args[0].name)})),e.channel=[],e.actualChannel="",e.whitelist=t,new i.fetchService(e.fetch)}}},598:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{o(i.next(e))}catch(e){r(e)}}function l(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}o((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ChannelService=void 0;const a=n(450);t.ChannelService=class{constructor(e,t=fetch){this.channelName=e,this.realFetch=t,console.log(channel)}onStart(e,t){return i(this,void 0,void 0,(function*(){const n=/hls\/(.*).m3u8/gm.exec(e)||[];let i=!1;if(n[1]){if(actualChannel=n[1],whitelist.includes(n[1]))return;channel.find((e=>e.name===n[1]))?i=!0:(LogPrint("new channel 2: "+n[1]),channel.push({name:n[1],flowSig:[],hls:new a.HLS}))}if(LogPrint("Local Server: Loading"),yield channel.find((e=>e.name===actualChannel)).hls.addStreamLink(t),LogPrint("Local Server: OK"),!i){this.newHLS480p();try{LogPrint("External Server: Loading");const e=yield realFetch("https://jupter.ga/hls/v2/channel/"+actualChannel,{method:"GET"}),t=yield e.text();if(!e.ok)throw new Error("server proxy return error or not found");const n=t.split("."),i=n.shift(),a={server:"proxy",urlList:[]};n.forEach(((e,t,n)=>{t%2||a.urlList.push({quality:a.urlList.some((t=>t.quality==e))?e+"p30":e,url:"https://video-weaver."+i+".hls.ttvnw.net/v1/playlist/"+n[t+1]+".m3u8"})})),channel.find((e=>e.name===actualChannel)).hls.StreamServerListSet(a),console.log(channel.find((e=>e.name===actualChannel)).hls.StreamServerList),LogPrint("External Server: OK"),LogPrint("External Server: OK")}catch(e){LogPrint(e)}}}))}newHLS480p(){return i(this,void 0,void 0,(function*(){try{const e=yield realFetch("https://gql.twitch.tv/gql",{method:"POST",headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"},body:`{"operationName":"PlaybackAccessToken","letiables":{"isLive":true,"login":"${this.channelName}","isVod":false,"vodID":"","playerType":"thunderdome"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712"}}}`}),t=yield e.json(),n="https://usher.ttvnw.net/api/channel/hls/"+this.channelName+".m3u8?allow_source=true&fast_bread=true&p="+Math.floor(1e7*Math.random())+"&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig="+t.data.streamPlaybackAccessToken.signature+"&supported_codecs=avc1&token="+t.data.streamPlaybackAccessToken.value,i=yield realFetch(n,{method:"GET"}),a=yield i.text();channel.find((e=>e.name===actualChannel)).hls.addStreamLink(a,"picture",!0),LogPrint("Local Server 480p: OK")}catch(e){console.log(e)}}))}newHLSExternal(){return i(this,void 0,void 0,(function*(){try{const e=yield realFetch("https://gql.twitch.tv/gql",{method:"POST",headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"},body:`{"operationName":"PlaybackAccessToken","letiables":{"isLive":true,"login":"${this.channelName}","isVod":false,"vodID":"","playerType":"thunderdome"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712"}}}`}),t=yield e.json(),n="https://usher.ttvnw.net/api/channel/hls/"+this.channelName+".m3u8?allow_source=true&fast_bread=true&p="+Math.floor(1e7*Math.random())+"&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig="+t.data.streamPlaybackAccessToken.signature+"&supported_codecs=avc1&token="+t.data.streamPlaybackAccessToken.value,i=yield realFetch(n,{method:"GET"}),a=yield i.text();channel.find((e=>e.name===actualChannel)).hls.addStreamLink(a,"picture",!0),LogPrint("Local Server 480p: OK")}catch(e){console.log(e)}}))}newHLSLocal(){return i(this,void 0,void 0,(function*(){try{const e=yield realFetch("https://gql.twitch.tv/gql",{method:"POST",headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"},body:`{"operationName":"PlaybackAccessToken","letiables":{"isLive":true,"login":"${this.channelName}","isVod":false,"vodID":"","playerType":"thunderdome"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712"}}}`}),t=yield e.json(),n="https://usher.ttvnw.net/api/channel/hls/"+this.channelName+".m3u8?allow_source=true&fast_bread=true&p="+Math.floor(1e7*Math.random())+"&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig="+t.data.streamPlaybackAccessToken.signature+"&supported_codecs=avc1&token="+t.data.streamPlaybackAccessToken.value,i=yield realFetch(n,{method:"GET"}),a=yield i.text();channel.find((e=>e.name===actualChannel)).hls.addStreamLink(a,"picture",!0),LogPrint("Local Server 480p: OK")}catch(e){console.log(e)}}))}}},351:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{o(i.next(e))}catch(e){r(e)}}function l(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}o((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchService=void 0;const a=n(598);t.fetchService=class{constructor(e=fetch){this.realFetch=e,this.inflateFetch()}onFetch(e,t){return i(this,void 0,void 0,(function*(){const n=channel.find((e=>e.name===actualChannel)).hls.StreamServerList.map((e=>e.urlList.find((e=>e.url==t)))).find((e=>null!=e)).quality;if(!e.toString().includes("stitched-ad")&&!e.toString().includes("twitch-client-ad"))return channel.find((e=>e.name===actualChannel)).hls.addPlaylist(e),"";{LogPrint("ads found");const e=channel.find((e=>e.name===actualChannel)).hls.StreamServerList;console.log(e);try{if(e.length>0){const t=yield realFetch(e.find((e=>"proxy"==e.server)).urlList.find((e=>e.quality==n)).url,{method:"GET"}),i=yield t.text();return(i.toString().includes("stitched-ad")||i.toString().includes("twitch-client-ad"))&&LogPrint("ads on proxy"),channel.find((e=>e.name===actualChannel)).hls.addPlaylist(i,!0)}throw new Error("No m3u8 valid url found on StreamServerList")}catch(i){const a=yield realFetch(e.filter((e=>e.urlList.find((e=>e.url!=t&&e.quality==n))&&"picture"==e.server)).map((e=>e.urlList.find((e=>e.quality.includes("480")))))[0].url,{method:"GET"}),r=yield a.text();return LogPrint("480P"),LogPrint(i),channel.find((e=>e.name===actualChannel)).hls.addPlaylist(r),""}}}))}inflateFetch(){fetch=(e,t)=>i(this,arguments,void 0,(function*(){if("string"==typeof e){if(e.endsWith(".ts"),e.endsWith("m3u8")&&e.includes("ttvnw.net")&&!whitelist.includes(actualChannel))return new Promise((n=>{realFetch(e,t).then((t=>{t.text().then((t=>i(this,void 0,void 0,(function*(){yield this.onFetch(t,e);const i=channel.find((e=>e.name===actualChannel)).hls.getAllPlaylist();n(new Response(i))}))))}))}));if(e.includes("usher.ttvnw.net/api/channel/hls/")&&!e.includes("picture-by-picture"))return new Promise((function(n,r){!function(e){i(this,void 0,void 0,(function*(){yield realFetch(e,t).then((t=>{t.ok?t.text().then((function(t){return i(this,void 0,void 0,(function*(){yield new a.ChannelService(channel).onStart(e,t),n(new Response(t))}))})):(n(t),LogPrint("channel offline"))}))}))}(e)}));e.includes("picture-by-picture")}return realFetch.apply(this,arguments)}))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}(()=>{const e=n(494);let t;window.Worker=class extends Worker{constructor(n){t&&super(n);const i=`\n                ${e.App.toString()};\n                new App("${whitelist}");\n                importScripts('${n}');\n                `;super(URL.createObjectURL(new Blob([i]))),t=this}}})()})();