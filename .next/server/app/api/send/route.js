/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send/route";
exports.ids = ["app/api/send/route"];
exports.modules = {

/***/ "(rsc)/./app/api/send/route.ts":
/*!*******************************!*\
  !*** ./app/api/send/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_rss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/rss */ \"(rsc)/./lib/rss.ts\");\n/* harmony import */ var _lib_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mail */ \"(rsc)/./lib/mail.ts\");\n\n\n\n\nasync function GET() {\n    const data = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync('./data/users.json', 'utf8'));\n    for (const email of Object.keys(data)){\n        for (const keyword of data[email]){\n            const news = await (0,_lib_rss__WEBPACK_IMPORTED_MODULE_2__.getNewsByKeyword)(keyword);\n            if (news?.length) {\n                await (0,_lib_mail__WEBPACK_IMPORTED_MODULE_3__.sendDigest)(email, keyword, news);\n            }\n        }\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: '모든 유저에게 뉴스 발송 완료!'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ3ZCO0FBRWdDO0FBQ0w7QUFFdkMsZUFBZUk7SUFDcEIsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTixzREFBZSxDQUFDLHFCQUFxQjtJQUU3RCxLQUFLLE1BQU1RLFNBQVNDLE9BQU9DLElBQUksQ0FBQ04sTUFBTztRQUNyQyxLQUFLLE1BQU1PLFdBQVdQLElBQUksQ0FBQ0ksTUFBTSxDQUFFO1lBQ2pDLE1BQU1JLE9BQU8sTUFBTVgsMERBQWdCQSxDQUFDVTtZQUNwQyxJQUFJQyxNQUFNQyxRQUFRO2dCQUNoQixNQUFNWCxxREFBVUEsQ0FBQ00sT0FBT0csU0FBU0M7WUFDbkM7UUFDRjtJQUNGO0lBRUEsT0FBT2IscURBQVlBLENBQUNlLElBQUksQ0FBQztRQUFFQyxTQUFTO0lBQW9CO0FBQzFEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1aQzAxLVlNLkxFRVxcRG93bmxvYWRzXFxuZXdzcGluLWRpZ2VzdFxcYXBwXFxhcGlcXHNlbmRcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGdldE5ld3NCeUtleXdvcmQgfSBmcm9tICcuLi8uLi8uLi9saWIvcnNzJ1xuaW1wb3J0IHsgc2VuZERpZ2VzdCB9IGZyb20gJy4uLy4uLy4uL2xpYi9tYWlsJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoJy4vZGF0YS91c2Vycy5qc29uJywgJ3V0ZjgnKSlcblxuICBmb3IgKGNvbnN0IGVtYWlsIG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgZm9yIChjb25zdCBrZXl3b3JkIG9mIGRhdGFbZW1haWxdKSB7XG4gICAgICBjb25zdCBuZXdzID0gYXdhaXQgZ2V0TmV3c0J5S2V5d29yZChrZXl3b3JkKVxuICAgICAgaWYgKG5ld3M/Lmxlbmd0aCkge1xuICAgICAgICBhd2FpdCBzZW5kRGlnZXN0KGVtYWlsLCBrZXl3b3JkLCBuZXdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICfrqqjrk6Ag7Jyg7KCA7JeQ6rKMIOuJtOyKpCDrsJzshqEg7JmE66OMIScgfSlcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZnMiLCJnZXROZXdzQnlLZXl3b3JkIiwic2VuZERpZ2VzdCIsIkdFVCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJlbWFpbCIsIk9iamVjdCIsImtleXMiLCJrZXl3b3JkIiwibmV3cyIsImxlbmd0aCIsImpzb24iLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mail.ts":
/*!*********************!*\
  !*** ./lib/mail.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendDigest: () => (/* binding */ sendDigest)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nasync function sendDigest(to, keyword, articles) {\n    const html = `\n    <h3>📬 NewsPin Digest – \"${keyword}\" 관련 뉴스</h3>\n    <ul>\n      ${articles.map((a)=>`\n        <li>\n          <a href=\"${a.link}\">${a.title}</a><br/>\n          <small>${a.summary}</small>\n        </li>\n      `).join('')}\n    </ul>\n  `;\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n        service: 'gmail',\n        auth: {\n            user: process.env.MAIL_USER,\n            pass: process.env.MAIL_PASS\n        }\n    });\n    await transporter.sendMail({\n        from: '\"NewsPin\" <noreply@newspin.ai>',\n        to,\n        subject: `[뉴스요약] \"${keyword}\" 관련 주요 기사`,\n        html\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWFpbC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUU1QixlQUFlQyxXQUFXQyxFQUFVLEVBQUVDLE9BQWUsRUFBRUMsUUFBZTtJQUMzRSxNQUFNQyxPQUFPLENBQUM7NkJBQ2EsRUFBRUYsUUFBUTs7TUFFakMsRUFBRUMsU0FBU0UsR0FBRyxDQUFDQyxDQUFBQSxJQUFLLENBQUM7O21CQUVSLEVBQUVBLEVBQUVDLElBQUksQ0FBQyxFQUFFLEVBQUVELEVBQUVFLEtBQUssQ0FBQztpQkFDdkIsRUFBRUYsRUFBRUcsT0FBTyxDQUFDOztNQUV2QixDQUFDLEVBQUVDLElBQUksQ0FBQyxJQUFJOztFQUVoQixDQUFDO0lBRUQsTUFBTUMsY0FBY1osdURBQTBCLENBQUM7UUFDN0NjLFNBQVM7UUFDVEMsTUFBTTtZQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDM0JDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csU0FBUztRQUM3QjtJQUNGO0lBRUEsTUFBTVQsWUFBWVUsUUFBUSxDQUFDO1FBQ3pCQyxNQUFNO1FBQ05yQjtRQUNBc0IsU0FBUyxDQUFDLFFBQVEsRUFBRXJCLFFBQVEsVUFBVSxDQUFDO1FBQ3ZDRTtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTVpDMDEtWU0uTEVFXFxEb3dubG9hZHNcXG5ld3NwaW4tZGlnZXN0XFxsaWJcXG1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcidcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmREaWdlc3QodG86IHN0cmluZywga2V5d29yZDogc3RyaW5nLCBhcnRpY2xlczogYW55W10pIHtcbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8aDM+8J+TrCBOZXdzUGluIERpZ2VzdCDigJMgXCIke2tleXdvcmR9XCIg6rSA66CoIOuJtOyKpDwvaDM+XG4gICAgPHVsPlxuICAgICAgJHthcnRpY2xlcy5tYXAoYSA9PiBgXG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiJHthLmxpbmt9XCI+JHthLnRpdGxlfTwvYT48YnIvPlxuICAgICAgICAgIDxzbWFsbD4ke2Euc3VtbWFyeX08L3NtYWxsPlxuICAgICAgICA8L2xpPlxuICAgICAgYCkuam9pbignJyl9XG4gICAgPC91bD5cbiAgYFxuXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6ICdnbWFpbCcsXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuTUFJTF9VU0VSLFxuICAgICAgcGFzczogcHJvY2Vzcy5lbnYuTUFJTF9QQVNTLFxuICAgIH0sXG4gIH0pXG5cbiAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgIGZyb206ICdcIk5ld3NQaW5cIiA8bm9yZXBseUBuZXdzcGluLmFpPicsXG4gICAgdG8sXG4gICAgc3ViamVjdDogYFvribTsiqTsmpTslb1dIFwiJHtrZXl3b3JkfVwiIOq0gOugqCDso7zsmpQg6riw7IKsYCxcbiAgICBodG1sXG4gIH0pXG59Il0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJzZW5kRGlnZXN0IiwidG8iLCJrZXl3b3JkIiwiYXJ0aWNsZXMiLCJodG1sIiwibWFwIiwiYSIsImxpbmsiLCJ0aXRsZSIsInN1bW1hcnkiLCJqb2luIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9VU0VSIiwicGFzcyIsIk1BSUxfUEFTUyIsInNlbmRNYWlsIiwiZnJvbSIsInN1YmplY3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mail.ts\n");

/***/ }),

/***/ "(rsc)/./lib/rss.ts":
/*!********************!*\
  !*** ./lib/rss.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNewsByKeyword: () => (/* binding */ getNewsByKeyword)\n/* harmony export */ });\n/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rss-parser */ \"(rsc)/./node_modules/rss-parser/index.js\");\n/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rss_parser__WEBPACK_IMPORTED_MODULE_0__);\n\nconst parser = new (rss_parser__WEBPACK_IMPORTED_MODULE_0___default())();\nasync function getNewsByKeyword(keyword) {\n    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(keyword)}&hl=ko&gl=KR&ceid=KR:ko`;\n    const feed = await parser.parseURL(url);\n    return feed.items?.slice(0, 3).map((item)=>({\n            title: item.title,\n            link: item.link,\n            summary: item.contentSnippet || ''\n        }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcnNzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUMvQixNQUFNQyxTQUFTLElBQUlELG1EQUFNQTtBQUVsQixlQUFlRSxpQkFBaUJDLE9BQWU7SUFDcEQsTUFBTUMsTUFBTSxDQUFDLHFDQUFxQyxFQUFFQyxtQkFBbUJGLFNBQVMsdUJBQXVCLENBQUM7SUFDeEcsTUFBTUcsT0FBTyxNQUFNTCxPQUFPTSxRQUFRLENBQUNIO0lBRW5DLE9BQU9FLEtBQUtFLEtBQUssRUFBRUMsTUFBTSxHQUFHLEdBQUdDLElBQUlDLENBQUFBLE9BQVM7WUFDMUNDLE9BQU9ELEtBQUtDLEtBQUs7WUFDakJDLE1BQU1GLEtBQUtFLElBQUk7WUFDZkMsU0FBU0gsS0FBS0ksY0FBYyxJQUFJO1FBQ2xDO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTVpDMDEtWU0uTEVFXFxEb3dubG9hZHNcXG5ld3NwaW4tZGlnZXN0XFxsaWJcXHJzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJ3Jzcy1wYXJzZXInXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ld3NCeUtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL25ld3MuZ29vZ2xlLmNvbS9yc3Mvc2VhcmNoP3E9JHtlbmNvZGVVUklDb21wb25lbnQoa2V5d29yZCl9JmhsPWtvJmdsPUtSJmNlaWQ9S1I6a29gXG4gIGNvbnN0IGZlZWQgPSBhd2FpdCBwYXJzZXIucGFyc2VVUkwodXJsKVxuXG4gIHJldHVybiBmZWVkLml0ZW1zPy5zbGljZSgwLCAzKS5tYXAoaXRlbSA9PiAoe1xuICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgIGxpbms6IGl0ZW0ubGluayxcbiAgICBzdW1tYXJ5OiBpdGVtLmNvbnRlbnRTbmlwcGV0IHx8ICcnXG4gIH0pKVxufSJdLCJuYW1lcyI6WyJQYXJzZXIiLCJwYXJzZXIiLCJnZXROZXdzQnlLZXl3b3JkIiwia2V5d29yZCIsInVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZlZWQiLCJwYXJzZVVSTCIsIml0ZW1zIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJsaW5rIiwic3VtbWFyeSIsImNvbnRlbnRTbmlwcGV0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/rss.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_MZC01_YM_LEE_Downloads_newspin_digest_app_api_send_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send/route.ts */ \"(rsc)/./app/api/send/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send/route\",\n        pathname: \"/api/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/send/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\MZC01-YM.LEE\\\\Downloads\\\\newspin-digest\\\\app\\\\api\\\\send\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_MZC01_YM_LEE_Downloads_newspin_digest_app_api_send_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNWkMwMS1ZTS5MRUUlNUNEb3dubG9hZHMlNUNuZXdzcGluLWRpZ2VzdCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDTVpDMDEtWU0uTEVFJTVDRG93bmxvYWRzJTVDbmV3c3Bpbi1kaWdlc3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxNWkMwMS1ZTS5MRUVcXFxcRG93bmxvYWRzXFxcXG5ld3NwaW4tZGlnZXN0XFxcXGFwcFxcXFxhcGlcXFxcc2VuZFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxNWkMwMS1ZTS5MRUVcXFxcRG93bmxvYWRzXFxcXG5ld3NwaW4tZGlnZXN0XFxcXGFwcFxcXFxhcGlcXFxcc2VuZFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/xmlbuilder","vendor-chunks/entities","vendor-chunks/xml2js","vendor-chunks/rss-parser","vendor-chunks/sax"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMZC01-YM.LEE%5CDownloads%5Cnewspin-digest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();