"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi2 */ \"./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { theme , dictapi_data  } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"rap\");\n    const [dictData, setDictData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(dictapi_data);\n    const [audioPlaying, setAudioPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const renderDictionaryData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            dictData.map((param)=>{\n                let { word , phonetic , phonetics , meanings  } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-flow-col gap-28 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid items-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-8xl font-bold\",\n                                        children: word\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-xl font-semibold text-secondary\",\n                                        children: phonetic\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-end items-center text-success flex-none flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiOutlinePlay, {\n                                        className: \"btn btn-ghost btn-circle btn-outline w-20 h-20 p-4 cursor-pointer\",\n                                        onClick: ()=>setAudioPlaying(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        url: phonetics[0].audio,\n                                        playing: audioPlaying,\n                                        height: 0,\n                                        width: 0,\n                                        onEnded: ()=>setAudioPlaying(false)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(dictData, undefined, 2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        const data = await searchDictApi(searchTerm);\n        setDictData(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dictionary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    className: \"m-6 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type here\",\n                                    className: \"input input-bordered input-primary w-full max-w-xs\",\n                                    onChange: handleChange,\n                                    value: searchTerm\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-success\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        renderDictionaryData\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"LslUkBdZ7qLLnrjeaSiuzDF5nRE=\");\n_c = Home;\nconst searchDictApi = async (searchTerm)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.dictionaryapi.dev/api/v2/entries/en/\".concat(searchTerm));\n    return response.data;\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVTUE7QUFWdUI7QUFLSDtBQUMrQjtBQUNUO0FBQ1Q7O0FBU3hCLFNBQVNNLEtBQUssS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxNQUFLLEVBQUVDLGFBQVksRUFBYSxHQUFsQzs7SUFDM0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQ0s7SUFDekMsTUFBTSxDQUFDSyxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUV0RCxNQUFNWSxlQUFlLENBQUNDLFFBQXlDO1FBQzdETixjQUFjTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbEM7SUFFQSxNQUFNQyxxQ0FDSjs7WUFDR1IsU0FBU1MsR0FBRyxDQUFDLFNBQTZDO29CQUE1QyxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUU7Z0JBQ3BELHFCQUNFOzhCQUNFLDRFQUFDQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0M7d0NBQU1ELFdBQVU7a0RBQXNCTDs7Ozs7O2tEQUN2Qyw4REFBQ007d0NBQU1ELFdBQVU7a0RBQ2RKOzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNHO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ3RCLDBEQUFhQTt3Q0FDWnNCLFdBQVU7d0NBQ1ZFLFNBQVMsSUFBTWQsZ0JBQWdCLElBQUk7Ozs7OztrREFFckMsOERBQUNULG9EQUFXQTt3Q0FDVndCLEtBQUtOLFNBQVMsQ0FBQyxFQUFFLENBQUNPLEtBQUs7d0NBQ3ZCQyxTQUFTbEI7d0NBQ1RtQixRQUFRO3dDQUNSQyxPQUFPO3dDQUNQQyxTQUFTLElBQU1wQixnQkFBZ0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1oRDswQkFHQSw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNTOzhCQUNDLDRFQUFDQztrQ0FBS0MsS0FBS0MsU0FBUyxDQUFDM0IsVUFBVTRCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1sRCxNQUFNQyxlQUFlLE9BQU9DLElBQW9DO1FBQzlEQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU8sTUFBTUMsY0FBY25DO1FBRWpDRyxZQUFZK0I7SUFDZDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQzFDLGtEQUFJQTs7a0NBQ0gsOERBQUM0QztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBSzFCLFdBQVU7MEJBQ2QsNEVBQUMyQjtvQkFBS0MsVUFBVWQ7b0JBQWNkLFdBQVU7O3NDQUN0Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDNkI7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1ovQixXQUFVO29DQUNWZ0MsVUFBVTNDO29DQUNWRyxPQUFPVDs7Ozs7OzhDQUVULDhEQUFDa0Q7b0NBQU9qQyxXQUFVOzhDQUFrQjs7Ozs7Ozs7Ozs7O3dCQUVyQ1A7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQWhGdUJiO0tBQUFBO0FBa0Z4QixNQUFNc0MsZ0JBQWdCLE9BQU9uQyxhQUF1QjtJQUNsRCxNQUFNbUQsV0FBVyxNQUFNMUQsaURBQVMsQ0FDOUIsbURBQThELE9BQVhPO0lBR3JELE9BQU9tRCxTQUFTakIsSUFBSTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIaU91dGxpbmVQbGF5IH0gZnJvbSBcInJlYWN0LWljb25zL2hpMlwiO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgdGhlbWU6IHN0cmluZztcbiAgZGljdGFwaV9kYXRhOiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRoZW1lLCBkaWN0YXBpX2RhdGEgfTogSG9tZVByb3BzKSB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwicmFwXCIpO1xuICBjb25zdCBbZGljdERhdGEsIHNldERpY3REYXRhXSA9IHVzZVN0YXRlKGRpY3RhcGlfZGF0YSk7XG4gIGNvbnN0IFthdWRpb1BsYXlpbmcsIHNldEF1ZGlvUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJEaWN0aW9uYXJ5RGF0YSA9IChcbiAgICA8PlxuICAgICAge2RpY3REYXRhLm1hcCgoeyB3b3JkLCBwaG9uZXRpYywgcGhvbmV0aWNzLCBtZWFuaW5ncyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctY29sIGdhcC0yOCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBmb250LWJvbGRcIj57d29yZH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtwaG9uZXRpY31cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdGV4dC1zdWNjZXNzIGZsZXgtbm9uZSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPEhpT3V0bGluZVBsYXlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLWNpcmNsZSBidG4tb3V0bGluZSB3LTIwIGgtMjAgcC00IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF1ZGlvUGxheWluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgdXJsPXtwaG9uZXRpY3NbMF0uYXVkaW99XG4gICAgICAgICAgICAgICAgICBwbGF5aW5nPXthdWRpb1BsYXlpbmd9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgICAgICAgIG9uRW5kZWQ9eygpID0+IHNldEF1ZGlvUGxheWluZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICB7LyogYXBpIGpzb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cC1jb2RlXCI+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRpY3REYXRhLCB1bmRlZmluZWQsIDIpfTwvcHJlPlxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoZTogQ2hhbmdlRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoRGljdEFwaShzZWFyY2hUZXJtKTtcblxuICAgIHNldERpY3REYXRhKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGljdGlvbmFyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0gY2xhc3NOYW1lPVwibS02IHNwYWNlLXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGlucHV0LXByaW1hcnkgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyRGljdGlvbmFyeURhdGF9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3Qgc2VhcmNoRGljdEFwaSA9IGFzeW5jIChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vYXBpLmRpY3Rpb25hcnlhcGkuZGV2L2FwaS92Mi9lbnRyaWVzL2VuLyR7c2VhcmNoVGVybX1gXG4gICk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IFwibmlnaHRcIjtcbiAgY29uc3QgZGljdGFwaV9kYXRhID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGhlbWUsXG4gICAgICBkaWN0YXBpX2RhdGEsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkhpT3V0bGluZVBsYXkiLCJSZWFjdFBsYXllciIsIkhvbWUiLCJ0aGVtZSIsImRpY3RhcGlfZGF0YSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZGljdERhdGEiLCJzZXREaWN0RGF0YSIsImF1ZGlvUGxheWluZyIsInNldEF1ZGlvUGxheWluZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJEaWN0aW9uYXJ5RGF0YSIsIm1hcCIsIndvcmQiLCJwaG9uZXRpYyIsInBob25ldGljcyIsIm1lYW5pbmdzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJvbkNsaWNrIiwidXJsIiwiYXVkaW8iLCJwbGF5aW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkVuZGVkIiwiY29kZSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwic2VhcmNoRGljdEFwaSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInJlc3BvbnNlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});