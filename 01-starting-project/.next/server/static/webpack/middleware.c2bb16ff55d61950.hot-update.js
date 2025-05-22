"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n// All request will be logged, ex: opening the news page will fetch all data on that page\nfunction middleware(request) {\n    console.log(request);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\n// This filters all the request fetched\nconst config = {\n    matcher: \"/news\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFM0MseUZBQXlGO0FBQ2xGLFNBQVNDLFdBQVdDLE9BQU87SUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFPRixrRkFBWUEsQ0FBQ0ssSUFBSTtBQUM1QjtBQUVBLHVDQUF1QztBQUNoQyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO0FBQ2IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG4vLyBBbGwgcmVxdWVzdCB3aWxsIGJlIGxvZ2dlZCwgZXg6IG9wZW5pbmcgdGhlIG5ld3MgcGFnZSB3aWxsIGZldGNoIGFsbCBkYXRhIG9uIHRoYXQgcGFnZVxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0KXtcclxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn1cclxuXHJcbi8vIFRoaXMgZmlsdGVycyBhbGwgdGhlIHJlcXVlc3QgZmV0Y2hlZFxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgbWF0Y2hlcjogJy9uZXdzJ1xyXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});