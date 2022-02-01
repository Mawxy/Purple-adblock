/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HLS.ts":
/*!********************!*\
  !*** ./src/HLS.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HLS\": () => (/* binding */ HLS)\n/* harmony export */ });\nclass HLS {\r\n    constructor() {\r\n        this._header = [\"#EXTM3U\", \"#EXT-X-VERSION:3\", \"#EXT-X-TARGETDURATION:6\", \"#EXT-X-MEDIA-SEQUENCE:6\"];\r\n        this._playlist = [];\r\n        this._sequence = 0;\r\n        this._streamServerList = [];\r\n    }\r\n    async addStreamLink(text, type = \"local\", sig = false) {\r\n        const qualityUrlSplit = [];\r\n        let captureArray;\r\n        const REGEX = /NAME=\"((?:\\S+\\s+\\S+|\\S+))\",AUTO(?:^|\\S+\\s+)(?:^|\\S+\\s+)(https:\\/\\/video(\\S+).m3u8)/g;\r\n        while ((captureArray = REGEX.exec(text)) !== null) {\r\n            qualityUrlSplit.push({ quality: captureArray[1], url: captureArray[2] });\r\n        }\r\n        console.log(qualityUrlSplit);\r\n        const streamList = { server: type, urlList: qualityUrlSplit, sig: sig };\r\n        this._streamServerList.push(streamList);\r\n        if (!sig) {\r\n            await this.signature();\r\n        }\r\n        return true;\r\n    }\r\n    async signature() {\r\n        const REGEX = /video-weaver.(.*).hls.ttvnw.net\\/v1\\/playlist\\/(.*).m3u8$/gm;\r\n        await new Promise((resolve) => this._streamServerList\r\n            .filter((x) => x.sig == false)\r\n            .forEach(async (x) => {\r\n            const match = REGEX.exec(x.urlList[0].url);\r\n            if (match) {\r\n                try {\r\n                    const a = await fetch(\"https://jupter.ga/hls/v2/sig/\" + match[2] + \"/\" + match[1], {\r\n                        method: \"GET\",\r\n                    });\r\n                    x.sig = true;\r\n                    resolve(true);\r\n                }\r\n                catch {\r\n                    resolve(false);\r\n                }\r\n            }\r\n            else {\r\n                resolve(false);\r\n            }\r\n        }));\r\n    }\r\n    get StreamServerList() {\r\n        return this._streamServerList;\r\n    }\r\n    StreamServerListSet(value) {\r\n        this._streamServerList.push(value);\r\n    }\r\n    addPlaylist(playlist) {\r\n        if (playlist === null) {\r\n            return false;\r\n        }\r\n        let changed = false;\r\n        const lines = playlist.toString().split(/[\\r\\n]/);\r\n        this._header[4] = lines[4];\r\n        this._header[5] = lines[5];\r\n        for (const i in lines) {\r\n            if (lines[i].includes(\"#EXT-X-PROGRAM-DATE-TIME:\")) {\r\n                const sequenceTimestamp = Math.floor(new Date(lines[i].slice(lines[i].length - 24, lines[i].length)).getTime() / 1000);\r\n                const r = this._playlist.filter((x) => {\r\n                    return x.timestamp >= sequenceTimestamp;\r\n                });\r\n                if (!r.length) {\r\n                    this._sequence = this._sequence + 1;\r\n                    this._playlist.push({\r\n                        time: lines[parseInt(i)],\r\n                        timestamp: sequenceTimestamp,\r\n                        info: lines[parseInt(i) + 1],\r\n                        url: lines[parseInt(i) + 2],\r\n                    });\r\n                    changed = true;\r\n                }\r\n            }\r\n            while (this._playlist.length > 15) {\r\n                this._playlist.shift();\r\n            }\r\n        }\r\n        return changed;\r\n    }\r\n    getAllPlaylist() {\r\n        return (this._header[0] +\r\n            \"\\n\" +\r\n            this._header[1] +\r\n            \"\\n\" +\r\n            this._header[2] +\r\n            \"\\n\" +\r\n            this._header[3] +\r\n            this._sequence +\r\n            \"\\n\" +\r\n            this._header[4] +\r\n            \"\\n\" +\r\n            this._header[5] +\r\n            \"\\n\" +\r\n            this._playlist.map((x) => {\r\n                return x.time + \"\\n\" + x.info + \"\\n\" + x.url + \"\\n\";\r\n            }));\r\n    }\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSExTLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0hMUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRztJQUFoQjtRQUNVLFlBQU8sR0FBa0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUMvRyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsc0JBQWlCLEdBQW1CLEVBQUUsQ0FBQztJQStHakQsQ0FBQztJQTdHQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQVksRUFBRSxJQUFJLEdBQUcsT0FBTyxFQUFFLEdBQUcsR0FBRyxLQUFLO1FBQzNELE1BQU0sZUFBZSxHQUFpQixFQUFFLENBQUM7UUFDekMsSUFBSSxZQUFvQyxDQUFDO1FBRXpDLE1BQU0sS0FBSyxHQUFHLHFGQUFxRixDQUFDO1FBRXBHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMvQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsTUFBTSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJ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\n\n//# sourceURL=webpack:///./src/HLS.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _fetch_fetch_inflate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch/fetch.inflate */ \"./src/fetch/fetch.inflate.ts\");\n/* harmony import */ var _HLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HLS */ \"./src/HLS.ts\");\n/* harmony import */ var _channel_on_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel/on.channel */ \"./src/channel/on.channel.ts\");\n/* harmony import */ var _fetch_on_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch/on.fetch */ \"./src/fetch/on.fetch.ts\");\n/* harmony import */ var _channel_current_channel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/current.channel */ \"./src/channel/current.channel.ts\");\n/* harmony import */ var _fetch_picture_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch/picture.fetch */ \"./src/fetch/picture.fetch.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction app(scope, whitelist) {\r\n    scope.LogPrint = (x) => {\r\n        console.log(\"[Purple]: \", x);\r\n    };\r\n    scope.realFetch = fetch;\r\n    scope.quality = \"\";\r\n    scope.addEventListener(\"message\", function (e) {\r\n        switch (e.data.funcName) {\r\n            case \"setQuality\": {\r\n                scope.quality = e.data.args[0].name;\r\n                console.log(scope.quality);\r\n                break;\r\n            }\r\n            default: {\r\n                break;\r\n            }\r\n        }\r\n    });\r\n    scope.channel = [];\r\n    scope.actualChannel = \"\";\r\n    scope.whitelist = whitelist;\r\n    scope.onFetch = _fetch_on_fetch__WEBPACK_IMPORTED_MODULE_3__.on;\r\n    scope.newPicture = _fetch_picture_fetch__WEBPACK_IMPORTED_MODULE_5__.picture;\r\n    scope.onStartChannel = _channel_on_channel__WEBPACK_IMPORTED_MODULE_2__.onStart;\r\n    scope.currentChannel = _channel_current_channel__WEBPACK_IMPORTED_MODULE_4__.current;\r\n    scope.HLS = _HLS__WEBPACK_IMPORTED_MODULE_1__.HLS;\r\n    (0,_fetch_fetch_inflate__WEBPACK_IMPORTED_MODULE_0__.inflateFetch)(scope);\r\n}\r\napp(self, [\"jukes\"]);\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUM1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFVLEVBQUUsU0FBZ0I7SUFDNUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsS0FBSyxZQUFZLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixNQUFNO2FBQ1A7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxNQUFNO2FBQ1A7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsS0FBSyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDekIsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFFNUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFFM0IsS0FBSyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDL0IsS0FBSyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFFL0IsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFaEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/channel/current.channel.ts":
/*!****************************************!*\
  !*** ./src/channel/current.channel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"current\": () => (/* binding */ current)\n/* harmony export */ });\nfunction current() {\r\n    return __webpack_require__.g.channel.find((x) => x.name === __webpack_require__.g.actualChannel);\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC5jaGFubmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NoYW5uZWwvY3VycmVudC5jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxPQUFPO0lBQ25CLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/channel/current.channel.ts?");

/***/ }),

/***/ "./src/channel/on.channel.ts":
/*!***********************************!*\
  !*** ./src/channel/on.channel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onStart\": () => (/* binding */ onStart)\n/* harmony export */ });\nasync function onStart(_window, url, text /* isOffline = false */) {\r\n    const regex = /hls\\/(.*).m3u8/gm;\r\n    const match = regex.exec(url) || [];\r\n    let existent = false;\r\n    if (match[1]) {\r\n        _window.actualChannel = match[1];\r\n        if (_window.whitelist.includes(match[1])) {\r\n            return;\r\n        }\r\n        if (!_window.channel.find((c) => c.name === match[1])) {\r\n            _window.LogPrint(\"new channel 2: \" + match[1]);\r\n            _window.channel.push({ name: match[1], flowSig: [], hls: new _window.HLS() });\r\n        }\r\n        else {\r\n            existent = true;\r\n        }\r\n    }\r\n    //--------------------------------------------//\r\n    //--------------------------------------------//\r\n    _window.LogPrint(\"Local Server: Loading\");\r\n    __webpack_require__.g.currentChannel().hls.addStreamLink(text);\r\n    _window.LogPrint(\"Local Server: OK\");\r\n    if (existent)\r\n        return;\r\n    //--------------------------------------------//\r\n    //--------------------------------------------//\r\n    __webpack_require__.g.newPicture(__webpack_require__.g.actualChannel).then(textPicture => {\r\n        __webpack_require__.g.currentChannel().hls.addStreamLink(textPicture, \"picture\", true);\r\n        __webpack_require__.g.LogPrint(\"Local Server 480p: OK\");\r\n    });\r\n    //--------------------------------------------//\r\n    //--------------------------------------------//\r\n    try {\r\n        _window.LogPrint(\"External Server: Loading\");\r\n        const a = await _window.realFetch(\"https://jupter.ga/hls/v2/channel/\" + _window.actualChannel, { method: \"GET\" });\r\n        const text = await a.text();\r\n        if (!a.ok) {\r\n            throw new Error(\"server proxy return error or not found\");\r\n        }\r\n        const qualityUrlSplit = text.split(\".\");\r\n        const server = qualityUrlSplit.shift();\r\n        const streamList = { server: \"proxy\", urlList: [] };\r\n        qualityUrlSplit.forEach((element, index, array) => {\r\n            if (!(index % 2)) {\r\n                streamList.urlList.push({\r\n                    quality: streamList.urlList.some((x) => x.quality == element) ? element + \"p30\" : element,\r\n                    url: \"https://video-weaver.\" + server + \".hls.ttvnw.net/v1/playlist/\" + array[index + 1] + \".m3u8\",\r\n                });\r\n            }\r\n        });\r\n        _window.channel.find((x) => x.name === _window.actualChannel).hls.StreamServerListSet(streamList);\r\n        _window.LogPrint(\"External Server: OK\");\r\n    }\r\n    catch (e) {\r\n        _window.LogPrint(e);\r\n    }\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24uY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFubmVsL29uLmNoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLEtBQUssVUFBVSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsdUJBQXVCO0lBQ3BFLE1BQU0sS0FBSyxHQUFHLGtCQUFrQixDQUFDO0lBQ2pDLE1BQU0sS0FBSyxHQUF5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFckIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRCxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNILFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDSjtJQUNELGdEQUFnRDtJQUVoRCxnREFB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\n\n//# sourceURL=webpack:///./src/channel/on.channel.ts?");

/***/ }),

/***/ "./src/fetch/fetch.inflate.ts":
/*!************************************!*\
  !*** ./src/fetch/fetch.inflate.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inflateFetch\": () => (/* binding */ inflateFetch)\n/* harmony export */ });\nfunction inflateFetch(_window) {\r\n    // eslint-disable-next-line no-global-assign\r\n    _window.fetch = async function (url, options) {\r\n        if (typeof url === 'string') {\r\n            if (url.endsWith('.ts')) {\r\n                //var p = channel.find(x => x.name === actualChannel).hls.getPlaylistByUrl(url);\r\n                //var pp = channel.find(x => x.name === actualChannel).hls.getAllPlaylist();\r\n                //LogPrint(\"ts timestamp: \" + p[0].timestamp);\r\n            }\r\n            if (url.endsWith('m3u8') && url.includes('ttvnw.net') && !_window.whitelist.includes(_window.actualChannel)) {\r\n                return new Promise(function (resolve, reject) {\r\n                    var processFetch = async function (url) {\r\n                        // await onBeforeFetch(url);\r\n                        await _window.realFetch(url, options).then(function (response) {\r\n                            response.text().then(function (text) {\r\n                                _window.onFetch(_window, text, url).then(function (r) {\r\n                                    var p = _window.channel.find(x => x.name === _window.actualChannel).hls.getAllPlaylist();\r\n                                    resolve(new Response(p));\r\n                                });\r\n                            });\r\n                        });\r\n                    };\r\n                    processFetch(url);\r\n                });\r\n            }\r\n            if (url.includes(\"usher.ttvnw.net/api/channel/hls/\") && !url.includes('picture-by-picture')) {\r\n                console.log(url);\r\n                return new Promise(function (resolve, reject) {\r\n                    var processFetch = async function (url) {\r\n                        await _window.realFetch(url, options).then(function (response) {\r\n                            if (response.ok) {\r\n                                response.text().then(async function (text) {\r\n                                    console.log(\"ccccccccccccccccccccccccccccccccccccccccccc\");\r\n                                    await _window.onStartChannel(_window, url, text);\r\n                                    resolve(new Response(text));\r\n                                });\r\n                            }\r\n                            else {\r\n                                resolve(response);\r\n                                _window.LogPrint(\"channel offline\");\r\n                            }\r\n                        });\r\n                    };\r\n                    processFetch(url);\r\n                });\r\n            }\r\n            if (url.includes('picture-by-picture')) {\r\n            }\r\n        }\r\n        return _window.realFetch.apply(this, arguments);\r\n    };\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guaW5mbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9mZXRjaC5pbmZsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBTztJQUNoQyw0Q0FBNEM7SUFDNUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU87UUFDcEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixnRkFBZ0Y7Z0JBQ2hGLDRFQUE0RTtnQkFFNUUsOENBQThDO2FBQ2pEO1lBRUQsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3pHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtvQkFDeEMsSUFBSSxZQUFZLEdBQUcsS0FBSyxXQUFXLEdBQUc7d0JBQ2xDLDRCQUE0Qjt3QkFDNUIsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFROzRCQUN6RCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQ0FDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0NBQ2hELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO29DQUN6RixPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDO29CQUNGLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dCQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07b0JBQ3hDLElBQUksWUFBWSxHQUFHLEtBQUssV0FBVyxHQUFHO3dCQUNsQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQVE7NEJBQ3pELElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtnQ0FDYixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxJQUFJO29DQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUE7b0NBQzFELE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29DQUNqRCxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQ0FDaEMsQ0FBQyxDQUFDLENBQUM7NkJBQ047aUNBQU07Z0NBQ0gsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUNsQixPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7NkJBQ3ZDO3dCQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQztvQkFDRixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFFRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsRUFBRTthQUN2QztTQUVKO1FBRUQsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/fetch/fetch.inflate.ts?");

/***/ }),

/***/ "./src/fetch/on.fetch.ts":
/*!*******************************!*\
  !*** ./src/fetch/on.fetch.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"on\": () => (/* binding */ on)\n/* harmony export */ });\nasync function on(_window, response, url) {\r\n    //  if (Math.random() < 0.5 ){\r\n    //      response += \"twitch-client-ad\";\r\n    //  }\r\n    const channelCurrent = await __webpack_require__.g.currentChannel();\r\n    //if ads find on main link called from twitch api player\r\n    if (response.toString().includes(\"stitched-ad\") || response.toString().includes(\"twitch-client-ad\")) {\r\n        __webpack_require__.g.LogPrint(\"ads found\");\r\n        const quality = __webpack_require__.g.quality;\r\n        const StreamServerList = channelCurrent.hls.StreamServerList;\r\n        try {\r\n            //try all hls sigs that have on StreamServerList from HLS\r\n            if (StreamServerList.length > 0) {\r\n                const returno = await __webpack_require__.g.realFetch(StreamServerList.find((x) => x.server == \"proxy\").urlList.find((a) => a.quality == quality).url, {\r\n                    method: \"GET\",\r\n                }).text();\r\n                if (returno.toString().includes(\"stitched-ad\") || returno.toString().includes(\"twitch-client-ad\")) {\r\n                    __webpack_require__.g.LogPrint(\"ads on proxy\");\r\n                    throw new Error(\"No m3u8 valid url found on StreamServerList\");\r\n                }\r\n                return channelCurrent.hls.addPlaylist(returno, true);\r\n                //gera erro se nao tiver link\r\n            }\r\n            throw new Error(\"No m3u8 valid url found on StreamServerList\");\r\n        }\r\n        catch (e) {\r\n            //if nothing resolve, return 480p flow\r\n            //LogPrint(StreamServerList.filter(x => x.urlList.find(a => a.url != url && a.quality == quality) && x.server == \"local\").map(x => x.urlList.find(x => x.quality.includes('480')))[0]);\r\n            const pictureStream = StreamServerList.filter((x) => x.server == \"picture\")\r\n                .map((x) => x.urlList.find((x) => x.quality.includes(\"480\")))[0].url;\r\n            const returno = await (await __webpack_require__.g.realFetch(pictureStream)).text();\r\n            __webpack_require__.g.LogPrint(\"480P\");\r\n            __webpack_require__.g.LogPrint(e);\r\n            channelCurrent.hls.addPlaylist(returno);\r\n            return true;\r\n        }\r\n    }\r\n    else {\r\n        channelCurrent.hls.addPlaylist(response);\r\n        //LogPrint(channel.find(x => x.name === actualChannel).hls.StreamServerList.filter(x => x.urlList.find(a => a.url == url)));\r\n        //LogPrint(channel.find(x => x.name === actualChannel).hls.StreamServerList.filter(x => x.urlList.find(a => a.url == url && a.quality == quality)));\r\n        //LogPrint(channel.find(x => x.name === actualChannel).hls.StreamServerList.filter(x => x.urlList.find(a => a.url != url && a.quality == quality)));\r\n        //LogPrint(\"ok\")\r\n        return true;\r\n    }\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24uZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmV0Y2gvb24uZmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzNDLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsS0FBSztJQUVQLE1BQU0sY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXJELHdEQUF3RDtJQUN4RCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ25HLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFFN0QsSUFBSTtZQUNGLHlEQUF5RDtZQUN6RCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQ3RJLE1BQU0sRUFBRSxLQUFLO2lCQUNkLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDVixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO29CQUNqRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7aUJBQ2hFO2dCQUVELE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUVyRCw2QkFBNkI7YUFDOUI7WUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDaEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLHNDQUFzQztZQUN0Qyx1TEFBdUw7WUFFdkwsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztpQkFDeEUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtZQUV0RSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtTQUFNO1FBQ0wsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsNEhBQTRIO1FBQzVILG9KQUFvSjtRQUNwSixvSkFBb0o7UUFDcEosZ0JBQWdCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/fetch/on.fetch.ts?");

/***/ }),

/***/ "./src/fetch/picture.fetch.ts":
/*!************************************!*\
  !*** ./src/fetch/picture.fetch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"picture\": () => (/* binding */ picture)\n/* harmony export */ });\nasync function picture(channelName) {\r\n    try {\r\n        const gql = await __webpack_require__.g.realFetch(\"https://gql.twitch.tv/gql\", {\r\n            method: \"POST\",\r\n            headers: { \"Client-ID\": \"kimne78kx3ncx6brgo4mv6wki5h1ko\" },\r\n            body: `{\"operationName\":\"PlaybackAccessToken\",\"variables\":{\"isLive\":true,\"login\":\"${channelName}\",\"isVod\":false,\"vodID\":\"\",\"playerType\":\"thunderdome\"},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712\"}}}`,\r\n        });\r\n        const status = await gql.json();\r\n        const url = \"https://usher.ttvnw.net/api/channel/hls/\" +\r\n            channelName +\r\n            \".m3u8?allow_source=true&fast_bread=true&p=\" +\r\n            Math.floor(Math.random() * 1e7) +\r\n            \"&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig=\" +\r\n            status[\"data\"][\"streamPlaybackAccessToken\"][\"signature\"] +\r\n            \"&supported_codecs=avc1&token=\" +\r\n            status[\"data\"][\"streamPlaybackAccessToken\"][\"value\"];\r\n        const text = await (await __webpack_require__.g.realFetch(url)).text();\r\n        return text;\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS5mZXRjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZXRjaC9waWN0dXJlLmZldGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsT0FBTyxDQUFDLFdBQW1CO0lBQzdDLElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsMkJBQTJCLEVBQUU7WUFDNUQsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsZ0NBQWdDLEVBQUU7WUFDMUQsSUFBSSxFQUFFLDhFQUE4RSxXQUFXLHVMQUF1TDtTQUN6UixDQUFDLENBQUM7UUFFSCxNQUFNLE1BQU0sR0FBVyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV4QyxNQUFNLEdBQUcsR0FDTCwwQ0FBMEM7WUFDMUMsV0FBVztZQUNYLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDL0IsZ0dBQWdHO1lBQ2hHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUN4RCwrQkFBK0I7WUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7QUFDTCxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/fetch/picture.fetch.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;