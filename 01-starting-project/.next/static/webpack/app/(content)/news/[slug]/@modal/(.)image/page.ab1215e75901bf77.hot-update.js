/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(content)/news/[slug]/@modal/(.)image/page",{

/***/ "(app-pages-browser)/./app/(content)/news/[slug]/@modal/(.)image/page.js":
/*!***********************************************************!*\
  !*** ./app/(content)/news/[slug]/@modal/(.)image/page.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InterceptedImagePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_modal_backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal-backdrop */ \"(app-pages-browser)/./components/modal-backdrop.js\");\n/* harmony import */ var _components_modal_backdrop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modal_backdrop__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction InterceptedImagePage(param) {\n    let { params } = param;\n    _s();\n    //Closes image when user clicks on backdrop\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // from /[slug] page.js\n    const newsItemSlug = params.slug;\n    const newsItem = DUMMY_NEWS.find((newsItem)=>newsItem.slug === newsItemSlug);\n    // Redirects to notFound if newsItem doesn't exist\n    if (!newsItem) {\n        (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.notFound)();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_modal_backdrop__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Student\\\\Desktop\\\\Fetching-Data\\\\01-starting-project\\\\app\\\\(content)\\\\news\\\\[slug]\\\\@modal\\\\(.)image\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n                className: \"modal\",\n                open: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fullscreen-image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/news/\".concat(newsItem.image)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Student\\\\Desktop\\\\Fetching-Data\\\\01-starting-project\\\\app\\\\(content)\\\\news\\\\[slug]\\\\@modal\\\\(.)image\\\\page.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Student\\\\Desktop\\\\Fetching-Data\\\\01-starting-project\\\\app\\\\(content)\\\\news\\\\[slug]\\\\@modal\\\\(.)image\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Student\\\\Desktop\\\\Fetching-Data\\\\01-starting-project\\\\app\\\\(content)\\\\news\\\\[slug]\\\\@modal\\\\(.)image\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(InterceptedImagePage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = InterceptedImagePage;\nvar _c;\n$RefreshReg$(_c, \"InterceptedImagePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29udGVudCkvbmV3cy9bc2x1Z10vQG1vZGFsLyguKWltYWdlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ1k7QUFDekMsU0FBU0cscUJBQXFCLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDekMsMkNBQTJDO0lBQzNDLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUV4Qix1QkFBdUI7SUFDdkIsTUFBTUssZUFBYUYsT0FBT0csSUFBSTtJQUM5QixNQUFNQyxXQUFXQyxXQUFXQyxJQUFJLENBQUNGLENBQUFBLFdBQVlBLFNBQVNELElBQUksS0FBS0Q7SUFFM0Qsa0RBQWtEO0lBQ3RELElBQUksQ0FBQ0UsVUFBUztRQUNOUix5REFBUUE7SUFDaEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNFLG1FQUFhQTs7Ozs7MEJBQ1YsOERBQUNTO2dCQUFPQyxXQUFVO2dCQUFRQyxJQUFJOzBCQUNsQyw0RUFBQ0M7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNHO3dCQUFJQyxLQUFLLGdCQUErQixPQUFmUixTQUFTUyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEQ7R0F4QndCZDs7UUFFTEYsc0RBQVNBOzs7S0FGSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhjb250ZW50KS9uZXdzL1tzbHVnXS9AbW9kYWwvKC4paW1hZ2UvcGFnZS5qcz9mMGRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBub3RGb3VuZCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTW9kYWxCYWNrZHJvcCBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFsLWJhY2tkcm9wXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVyY2VwdGVkSW1hZ2VQYWdlKHtwYXJhbXN9KXtcclxuICAgIC8vQ2xvc2VzIGltYWdlIHdoZW4gdXNlciBjbGlja3Mgb24gYmFja2Ryb3BcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIGZyb20gL1tzbHVnXSBwYWdlLmpzXHJcbiAgICBjb25zdCBuZXdzSXRlbVNsdWc9cGFyYW1zLnNsdWc7XHJcbiAgICBjb25zdCBuZXdzSXRlbSA9IERVTU1ZX05FV1MuZmluZChuZXdzSXRlbSA9PiBuZXdzSXRlbS5zbHVnID09PSBuZXdzSXRlbVNsdWcpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gUmVkaXJlY3RzIHRvIG5vdEZvdW5kIGlmIG5ld3NJdGVtIGRvZXNuJ3QgZXhpc3RcclxuICAgIGlmICghbmV3c0l0ZW0pe1xyXG4gICAgICAgICAgICBub3RGb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsQmFja2Ryb3AgLz5cclxuICAgICAgICAgICAgICAgIDxkaWFsb2cgY2xhc3NOYW1lPVwibW9kYWxcIiBvcGVuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4taW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltYWdlcy9uZXdzLyR7bmV3c0l0ZW0uaW1hZ2V9YH0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpYWxvZz5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsibm90Rm91bmQiLCJ1c2VSb3V0ZXIiLCJNb2RhbEJhY2tkcm9wIiwiSW50ZXJjZXB0ZWRJbWFnZVBhZ2UiLCJwYXJhbXMiLCJyb3V0ZXIiLCJuZXdzSXRlbVNsdWciLCJzbHVnIiwibmV3c0l0ZW0iLCJEVU1NWV9ORVdTIiwiZmluZCIsImRpYWxvZyIsImNsYXNzTmFtZSIsIm9wZW4iLCJkaXYiLCJpbWciLCJzcmMiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(content)/news/[slug]/@modal/(.)image/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/modal-backdrop.js":
/*!**************************************!*\
  !*** ./components/modal-backdrop.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});