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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi2 */ \"./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { theme , dictapi_data  } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"rap\");\n    const [dictData, setDictData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(dictapi_data);\n    const [audioPlaying, setAudioPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const renderDictionaryData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            dictData.map((param)=>{\n                let { word , phonetic , phonetics , meanings  } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-flow-col gap-28 w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid items-end\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"text-8xl font-bold\",\n                                            children: word\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"text-xl font-semibold text-secondary\",\n                                            children: phonetic\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"justify-end items-center text-success flex-none flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiOutlinePlay, {\n                                            className: \"btn btn-ghost btn-circle btn-outline w-20 h-20 p-4 cursor-pointer\",\n                                            onClick: ()=>setAudioPlaying(true)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            url: phonetics[0].audio,\n                                            playing: audioPlaying,\n                                            height: 0,\n                                            width: 0,\n                                            onEnded: ()=>setAudioPlaying(false)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: meanings.map((meaning)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: meaning.partOfSpeech\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 21\n                                        }, this),\n                                        meaning.definitions.map((definition)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        children: [\n                                                            \"Meaning: \",\n                                                            definition.definition\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 27\n                                                    }, this),\n                                                    (definition === null || definition === void 0 ? void 0 : definition.synonyms) || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        children: [\n                                                            \"Synonyms: \",\n                                                            definition.synonyms\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 29\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        children: [\n                                                            \"Antonyms: \",\n                                                            definition.antonyms\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 27\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        children: [\n                                                            \"Example: \",\n                                                            definition.example\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 25\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(dictData, undefined, 2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        const data = await searchDictApi(searchTerm);\n        setDictData(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dictionary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    className: \"m-6 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type here\",\n                                    className: \"input input-bordered input-primary w-full max-w-xs\",\n                                    onChange: handleChange,\n                                    value: searchTerm\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-success\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this),\n                        renderDictionaryData\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"LslUkBdZ7qLLnrjeaSiuzDF5nRE=\");\n_c = Home;\nconst searchDictApi = async (searchTerm)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://api.dictionaryapi.dev/api/v2/entries/en/\".concat(searchTerm));\n    return response.data;\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDb0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1p0QyxXQUFVO29DQUNWdUMsVUFBVWxEO29DQUNWRyxPQUFPVDs7Ozs7OzhDQUVULDhEQUFDeUQ7b0NBQU94QyxXQUFVOzhDQUFrQjs7Ozs7Ozs7Ozs7O3dCQUVyQ1A7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQXRHdUJiO0tBQUFBO0FBd0d4QixNQUFNNkMsZ0JBQWdCLE9BQU8xQyxhQUF1QjtJQUNsRCxNQUFNMEQsV0FBVyxNQUFNakUsaURBQVMsQ0FDOUIsbURBQThELE9BQVhPO0lBR3JELE9BQU8wRCxTQUFTakIsSUFBSTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIaU91dGxpbmVQbGF5IH0gZnJvbSBcInJlYWN0LWljb25zL2hpMlwiO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgdGhlbWU6IHN0cmluZztcbiAgZGljdGFwaV9kYXRhOiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRoZW1lLCBkaWN0YXBpX2RhdGEgfTogSG9tZVByb3BzKSB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwicmFwXCIpO1xuICBjb25zdCBbZGljdERhdGEsIHNldERpY3REYXRhXSA9IHVzZVN0YXRlKGRpY3RhcGlfZGF0YSk7XG4gIGNvbnN0IFthdWRpb1BsYXlpbmcsIHNldEF1ZGlvUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJEaWN0aW9uYXJ5RGF0YSA9IChcbiAgICA8PlxuICAgICAge2RpY3REYXRhLm1hcCgoeyB3b3JkLCBwaG9uZXRpYywgcGhvbmV0aWNzLCBtZWFuaW5ncyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctY29sIGdhcC0yOCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBmb250LWJvbGRcIj57d29yZH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtwaG9uZXRpY31cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdGV4dC1zdWNjZXNzIGZsZXgtbm9uZSBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPEhpT3V0bGluZVBsYXlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLWNpcmNsZSBidG4tb3V0bGluZSB3LTIwIGgtMjAgcC00IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF1ZGlvUGxheWluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgdXJsPXtwaG9uZXRpY3NbMF0uYXVkaW99XG4gICAgICAgICAgICAgICAgICBwbGF5aW5nPXthdWRpb1BsYXlpbmd9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgICAgICAgIG9uRW5kZWQ9eygpID0+IHNldEF1ZGlvUGxheWluZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsvKiA8cHJlIGlkPVwianNvblwiPntKU09OLnN0cmluZ2lmeShtZWFuaW5ncywgdW5kZWZpbmVkLCAyKX08L3ByZT4gKi99XG4gICAgICAgICAgICAgIHttZWFuaW5ncy5tYXAoKG1lYW5pbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnttZWFuaW5nLnBhcnRPZlNwZWVjaH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7bWVhbmluZy5kZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1lYW5pbmc6IHtkZWZpbml0aW9uLmRlZmluaXRpb259PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RlZmluaXRpb24/LnN5bm9ueW1zIHx8IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3lub255bXM6IHtkZWZpbml0aW9uLnN5bm9ueW1zfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbnRvbnltczoge2RlZmluaXRpb24uYW50b255bXN9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkV4YW1wbGU6IHtkZWZpbml0aW9uLmV4YW1wbGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuXG4gICAgICB7LyogYXBpIGpzb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cC1jb2RlXCI+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRpY3REYXRhLCB1bmRlZmluZWQsIDIpfTwvcHJlPlxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoZTogQ2hhbmdlRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VhcmNoRGljdEFwaShzZWFyY2hUZXJtKTtcblxuICAgIHNldERpY3REYXRhKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGljdGlvbmFyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0gY2xhc3NOYW1lPVwibS02IHNwYWNlLXktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGlucHV0LXByaW1hcnkgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyRGljdGlvbmFyeURhdGF9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3Qgc2VhcmNoRGljdEFwaSA9IGFzeW5jIChzZWFyY2hUZXJtOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vYXBpLmRpY3Rpb25hcnlhcGkuZGV2L2FwaS92Mi9lbnRyaWVzL2VuLyR7c2VhcmNoVGVybX1gXG4gICk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IFwibmlnaHRcIjtcbiAgY29uc3QgZGljdGFwaV9kYXRhID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGhlbWUsXG4gICAgICBkaWN0YXBpX2RhdGEsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkhpT3V0bGluZVBsYXkiLCJSZWFjdFBsYXllciIsIkhvbWUiLCJ0aGVtZSIsImRpY3RhcGlfZGF0YSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZGljdERhdGEiLCJzZXREaWN0RGF0YSIsImF1ZGlvUGxheWluZyIsInNldEF1ZGlvUGxheWluZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJEaWN0aW9uYXJ5RGF0YSIsIm1hcCIsIndvcmQiLCJwaG9uZXRpYyIsInBob25ldGljcyIsIm1lYW5pbmdzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJvbkNsaWNrIiwidXJsIiwiYXVkaW8iLCJwbGF5aW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkVuZGVkIiwibWVhbmluZyIsInBhcnRPZlNwZWVjaCIsImRlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsInN5bm9ueW1zIiwiYW50b255bXMiLCJleGFtcGxlIiwiY29kZSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwic2VhcmNoRGljdEFwaSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInJlc3BvbnNlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});