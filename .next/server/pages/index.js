"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(774);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(273);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Home({ theme , dictapi_data  }) {
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [dictData, setDictData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(dictapi_data);
    const [audioPlaying, setAudioPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleChange = (event)=>{
        setSearchTerm(event.target.value);
    };
    const renderDictionaryData = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: dictData?.map(({ word , phonetic , phonetics , meanings  })=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-flow-col gap-28 w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid items-end",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "items-center flex gap-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "text-8xl font-bold",
                                            children: word
                                        }),
                                        phonetics[0]?.audio && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiOutlinePlay, {
                                                    className: "btn btn-ghost btn-circle btn-outline p-2 cursor-pointer",
                                                    onClick: ()=>setAudioPlaying(true)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    url: phonetics[0].audio,
                                                    playing: audioPlaying,
                                                    height: 0,
                                                    width: 0,
                                                    onEnded: ()=>setAudioPlaying(false)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "text-xl font-semibold text-secondary",
                                    children: phonetic
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: meanings.map((meaning)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-flow-row gap-y-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-2xl font-bold mt-6",
                                        children: meaning.partOfSpeech
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "text-primary-focus",
                                        children: "Meaning "
                                    }),
                                    meaning.definitions.map((definition)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-flow-row pl-6 -gap-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    children: [
                                                        "• ",
                                                        definition.definition
                                                    ]
                                                }),
                                                definition?.synonyms || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    children: [
                                                        "Synonyms: ",
                                                        definition.synonyms
                                                    ]
                                                }),
                                                definition?.antonyms || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    children: [
                                                        "Antonyms: ",
                                                        definition.antonyms
                                                    ]
                                                }),
                                                definition?.example && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "font-extralight italic text-primary-focus pl-2",
                                                    children: [
                                                        '"',
                                                        definition.example,
                                                        '"'
                                                    ]
                                                })
                                            ]
                                        }, Math.floor(Math.random() * 999999) + 1);
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-x-6",
                                        children: [
                                            meaning.synonyms.length === 0 ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "text-primary-focus",
                                                children: "Synonyms"
                                            }),
                                            meaning.synonyms.map((synonym)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "text-primary-focus font-bold",
                                                    children: synonym
                                                }, synonym + (Math.floor(Math.random() * 999999) + 1)))
                                        ]
                                    })
                                ]
                            }, Math.floor(Math.random() * 999999) + 1);
                        })
                    })
                ]
            }, word + (Math.floor(Math.random() * 999999) + 1));
        }) || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-5xl font-bold",
                    children: "Word not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "text-lg font-semibold text-secondary",
                    children: "Sorry pal, we couldn't find definitions for the word you were looking for."
                })
            ]
        })
    });
    const handleSearch = async (e)=>{
        e.preventDefault();
        const data = await searchDictApi(searchTerm);
        setDictData(data);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Dictionary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSearch,
                    className: "m-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-x-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: "Type a word here...",
                                    className: "input input-bordered input-primary w-full max-w-xs",
                                    onChange: handleChange,
                                    value: searchTerm
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "btn btn-success",
                                    children: "Search"
                                })
                            ]
                        }),
                        renderDictionaryData
                    ]
                })
            })
        ]
    });
}
const searchDictApi = async (searchTerm)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`).catch((e)=>{
        return e;
    });
    return response.data;
};
const getStaticProps = async (ctx)=>{
    const theme = "night";
    const dictapi_data = [];
    return {
        props: {
            theme,
            dictapi_data
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 774:
/***/ ((module) => {

module.exports = require("react-icons/hi2");

/***/ }),

/***/ 273:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(85));
module.exports = __webpack_exports__;

})();