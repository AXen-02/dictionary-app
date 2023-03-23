"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi2 */ \"react-icons/hi2\");\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Home({ theme , dictapi_data  }) {\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"rap\");\n    const [dictData, setDictData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(dictapi_data);\n    const [audioPlaying, setAudioPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const renderDictionaryData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: dictData.map(({ word , phonetic , phonetics , meanings  })=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-flow-col gap-28 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid items-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-8xl font-bold\",\n                                        children: word\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-xl font-semibold text-secondary\",\n                                        children: phonetic\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"justify-end items-center text-success flex-none flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiOutlinePlay, {\n                                        className: \"btn btn-ghost btn-circle btn-outline w-20 h-20 p-4 cursor-pointer\",\n                                        onClick: ()=>setAudioPlaying(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_player__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        url: phonetics[0].audio,\n                                        playing: audioPlaying,\n                                        height: 0,\n                                        width: 0,\n                                        onEnded: ()=>setAudioPlaying(false)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: meanings.map((meaning)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-2xl font-bold\",\n                                        children: meaning.partOfSpeech\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    }, this),\n                                    meaning.definitions.map((definition)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid grid-flow-row pl-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"* \",\n                                                        definition.definition\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 27\n                                                }, this),\n                                                definition?.synonyms || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Synonyms: \",\n                                                        definition.synonyms\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 29\n                                                }, this),\n                                                definition?.antonyms || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Antonyms: \",\n                                                        definition.antonyms\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 29\n                                                }, this),\n                                                definition?.example && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"font-extralight italic\",\n                                                    children: [\n                                                        '\"',\n                                                        definition.example,\n                                                        '\"'\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 25\n                                        }, this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-x-6\",\n                                        children: [\n                                            meaning.synonyms.length === 0 ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"text-primary\",\n                                                children: \"Synonyms: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 25\n                                            }, this),\n                                            meaning.synonyms.map((synonym)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-primary-focus font-bold\",\n                                                    children: synonym\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 25\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        const data = await searchDictApi(searchTerm);\n        setDictData(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dictionary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    className: \"m-6 space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type here\",\n                                    className: \"input input-bordered input-primary w-full max-w-xs\",\n                                    onChange: handleChange,\n                                    value: searchTerm\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-success\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this),\n                        renderDictionaryData\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Instructor Acct\\\\Desktop\\\\React 2023\\\\_NextJS\\\\_Frontend-Mentor\\\\dictionary-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst searchDictApi = async (searchTerm)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);\n    return response.data;\n};\nconst getStaticProps = async (ctx)=>{\n    const theme = \"night\";\n    const dictapi_data = [];\n    return {\n        props: {\n            theme,\n            dictapi_data\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUs5QixXQUFVOzBCQUNkLDRFQUFDK0I7b0JBQUtDLFVBQVVkO29CQUFjbEIsV0FBVTs7c0NBQ3RDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNpQztvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWm5DLFdBQVU7b0NBQ1ZvQyxVQUFVL0M7b0NBQ1ZHLE9BQU9UOzs7Ozs7OENBRVQsOERBQUNzRDtvQ0FBT3JDLFdBQVU7OENBQWtCOzs7Ozs7Ozs7Ozs7d0JBRXJDUDs7Ozs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0FBRUQsTUFBTTZCLGdCQUFnQixPQUFPdkMsYUFBdUI7SUFDbEQsTUFBTXVELFdBQVcsTUFBTTlELGlEQUFTLENBQzlCLENBQUMsZ0RBQWdELEVBQUVPLFdBQVcsQ0FBQztJQUdqRSxPQUFPdUQsU0FBU2pCLElBQUk7QUFDdEI7QUFFTyxNQUFNbUIsaUJBQWlDLE9BQU9DLE1BQVE7SUFDM0QsTUFBTTVELFFBQVE7SUFDZCxNQUFNQyxlQUFlLEVBQUU7SUFFdkIsT0FBTztRQUNMNEQsT0FBTztZQUNMN0Q7WUFDQUM7UUFDRjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpY3Rpb25hcnktYXBwLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lUGxheSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaTJcIjtcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIGRpY3RhcGlfZGF0YTogW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0aGVtZSwgZGljdGFwaV9kYXRhIH06IEhvbWVQcm9wcykge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcInJhcFwiKTtcbiAgY29uc3QgW2RpY3REYXRhLCBzZXREaWN0RGF0YV0gPSB1c2VTdGF0ZShkaWN0YXBpX2RhdGEpO1xuICBjb25zdCBbYXVkaW9QbGF5aW5nLCBzZXRBdWRpb1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRGljdGlvbmFyeURhdGEgPSAoXG4gICAgPD5cbiAgICAgIHtkaWN0RGF0YS5tYXAoKHsgd29yZCwgcGhvbmV0aWMsIHBob25ldGljcywgbWVhbmluZ3MgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LWNvbCBnYXAtMjggdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC04eGwgZm9udC1ib2xkXCI+e3dvcmR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7cGhvbmV0aWN9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHRleHQtc3VjY2VzcyBmbGV4LW5vbmUgZmxleFwiPlxuICAgICAgICAgICAgICAgIDxIaU91dGxpbmVQbGF5XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IGJ0bi1jaXJjbGUgYnRuLW91dGxpbmUgdy0yMCBoLTIwIHAtNCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBdWRpb1BsYXlpbmcodHJ1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICAgIHVybD17cGhvbmV0aWNzWzBdLmF1ZGlvfVxuICAgICAgICAgICAgICAgICAgcGxheWluZz17YXVkaW9QbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXswfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgICAgICAgICBvbkVuZGVkPXsoKSA9PiBzZXRBdWRpb1BsYXlpbmcoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7LyogPHByZSBpZD1cImpzb25cIj57SlNPTi5zdHJpbmdpZnkobWVhbmluZ3MsIHVuZGVmaW5lZCwgMil9PC9wcmU+ICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgIHttZWFuaW5ncy5tYXAoKG1lYW5pbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZWFuaW5nLnBhcnRPZlNwZWVjaH1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge21lYW5pbmcuZGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93IHBsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPioge2RlZmluaXRpb24uZGVmaW5pdGlvbn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVmaW5pdGlvbj8uc3lub255bXMgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TeW5vbnltczoge2RlZmluaXRpb24uc3lub255bXN9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RlZmluaXRpb24/LmFudG9ueW1zIHx8IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QW50b255bXM6IHtkZWZpbml0aW9uLmFudG9ueW1zfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkZWZpbml0aW9uPy5leGFtcGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0IGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ7ZGVmaW5pdGlvbi5leGFtcGxlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZWFuaW5nLnN5bm9ueW1zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+U3lub255bXM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7bWVhbmluZy5zeW5vbnltcy5tYXAoKHN5bm9ueW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZm9jdXMgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzeW5vbnltfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG5cbiAgICAgIHsvKiBhcGkganNvbiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cC1jb2RlXCI+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRpY3REYXRhLCB1bmRlZmluZWQsIDIpfTwvcHJlPlxuICAgICAgICA8L2NvZGU+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGU6IENoYW5nZUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaERpY3RBcGkoc2VhcmNoVGVybSk7XG5cbiAgICBzZXREaWN0RGF0YShkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpY3Rpb25hcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9IGNsYXNzTmFtZT1cIm0tNiBzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCBpbnB1dC1wcmltYXJ5IHctZnVsbCBtYXgtdy14c1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbmRlckRpY3Rpb25hcnlEYXRhfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IHNlYXJjaERpY3RBcGkgPSBhc3luYyAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2FwaS5kaWN0aW9uYXJ5YXBpLmRldi9hcGkvdjIvZW50cmllcy9lbi8ke3NlYXJjaFRlcm19YFxuICApO1xuXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBcIm5pZ2h0XCI7XG4gIGNvbnN0IGRpY3RhcGlfZGF0YSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRoZW1lLFxuICAgICAgZGljdGFwaV9kYXRhLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsImF4aW9zIiwidXNlU3RhdGUiLCJIaU91dGxpbmVQbGF5IiwiUmVhY3RQbGF5ZXIiLCJIb21lIiwidGhlbWUiLCJkaWN0YXBpX2RhdGEiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImRpY3REYXRhIiwic2V0RGljdERhdGEiLCJhdWRpb1BsYXlpbmciLCJzZXRBdWRpb1BsYXlpbmciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyRGljdGlvbmFyeURhdGEiLCJtYXAiLCJ3b3JkIiwicGhvbmV0aWMiLCJwaG9uZXRpY3MiLCJtZWFuaW5ncyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwib25DbGljayIsInVybCIsImF1ZGlvIiwicGxheWluZyIsImhlaWdodCIsIndpZHRoIiwib25FbmRlZCIsIm1lYW5pbmciLCJwYXJ0T2ZTcGVlY2giLCJkZWZpbml0aW9ucyIsImRlZmluaXRpb24iLCJzeW5vbnltcyIsImFudG9ueW1zIiwiZXhhbXBsZSIsImxlbmd0aCIsInN5bm9ueW0iLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwic2VhcmNoRGljdEFwaSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInJlc3BvbnNlIiwiZ2V0IiwiZ2V0U3RhdGljUHJvcHMiLCJjdHgiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/hi2":
/*!**********************************!*\
  !*** external "react-icons/hi2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-icons/hi2");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();