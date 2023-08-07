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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Regular.ttf */ \"./src/Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Handwritten.ttf */ \"./src/Handwritten.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./github.svg */ \"./src/github.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --c-first: #a6e4e7; \n    --c-second: #f9f9f9; \n    --c-third: #ebcbae; \n    --c-fouth: #8f8787;\n    --c-fifth: #000000;\n    --c-fifth-tr: #0000007a;\n    --f-handwritten: 'Handwritten', sans-serif;\n    --f-regular: 'Regular', serif;\n}\n\n@font-face {\n    font-family: 'Regular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n}\n\n@font-face {\n    font-family: 'Handwritten';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n}\n\nbody {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-size: cover;\n    background-attachment: fixed;\n    scroll-behavior: smooth;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr auto;\n    justify-content: center;\n}\n\n.header,\n.footer {\n    display: grid;\n    background-color: var(--c-fifth-tr);\n    border: 1px solid var(--c-fifth);\n    box-shadow: 0 0 5px var(--c-fifth);\n}\n\n.header {\n    grid-template-columns: 1fr auto auto auto 1fr;\n    grid-template-rows: 1fr auto;\n}\n\n.hero {\n    grid-column: 2 / 5;\n    color: var(--c-second);\n    font-family: var(--f-handwritten);\n    font-size: 5rem;\n    text-shadow: 0 0 5px var(--c-fifth);\n    text-align: center;\n    margin: 0px 0px;\n}\n\n.button {\n    grid-row: 2 / 3;\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n    outline: none;\n    font-family: var(--f-regular);\n    color: var(--c-third);\n    font-size: 2rem;\n    font-weight: 600;\n    text-shadow: 0 0 5px var(--c-fifth);\n}\n\n.button:nth-of-type(1) {\n    grid-column: 2 / 3;\n}\n\n.button:nth-of-type(2) {\n    grid-column: 3 / 4;\n}\n\n.button:nth-of-type(3) {\n    grid-column: 4 / 5;\n}\n\n.button:hover {\n    transform: translateY(-0.5rem);\n    transition: 100ms ease-out;\n    cursor: pointer;\n}\n\n\n.underline {\n    text-decoration: underline;\n}\n\n.underline:hover {\n    cursor: default;\n}\n\n\n.footer {\n    justify-content: center;\n    font-family: var(--f-regular);\n    color: var(--c-second);\n    font-weight: 500;\n    text-shadow: 0 0 5px var(--c-fifth);\n}\n\n.git-logo {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n    display: inline;\n    height: 1em;\n}\n\na:hover {\n    opacity: 0.7;\n    transition: 100ms ease-out;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    font-family: var(--f-regular);\n    color: var(--c-second);\n    text-shadow: 0 0 5px var(--c-fifth);\n    height: fit-content;\n    min-height: calc(100vh - (152px + 56px));\n    margin: 3rem auto\n}\n\n.greeting,\n.menu {\n    height: auto;\n    background-color: var(--c-fifth-tr);\n    border: 1px solid var(--c-fifth);\n    box-shadow: 0 0 3px var(--c-fifth);\n    padding: 1rem;\n    font-weight: 650;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.greeting {\n    width: 30vw;\n}\n\n.menu {\n    width: 45vw;\n}\n\n.title,\nh2 {\n    font-family: var(--f-handwritten);\n    color: var(--c-third);\n}\n\n.title {\n    font-size: 2em;\n    padding: 0 0.15em;\n}\n\n.greeting > img,\n.menu-image {\n    height: auto;\n    width: 70%;\n    border: 1px solid var(--c-fifth);\n    border-radius: 1rem;\n    margin: 0 auto;\n    box-shadow: 0 0 3px var(--c-fifth);\n}\n\n.dish-card {\n    display: grid;\n    grid-template-areas:\n    'title title'\n    'photo text'\n    'photo text'\n    'photo price';\n}\n\n.menu-title {\n    grid-area: title;\n}\n\n.menu-image {\n    grid-area: photo;\n}\n\nh2 {\n    font-size: 4rem;\n    margin: 0;\n}\n\nh3,\n.price {\n    font-size: 2rem;\n    font-weight: 400;\n    color: var(--c-first);\n}\n\nh3 {\n    text-decoration: underline;\n}\n\n.price {\n    grid-area: price;\n}\n\n.menu-text {\n    grid-area: text;\n}\n\n.price::before {\n    content: \"Price: \\$\";\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sunny-side-cafe/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sunny-side-cafe/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sunny-side-cafe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/frame.js":
/*!**********************!*\
  !*** ./src/frame.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFrame: () => (/* binding */ createFrame)\n/* harmony export */ });\nconst createFrame = () => {\n    const headerCreator = () => {\n        const header = document.createElement('div');\n        header.classList.add('header');\n\n        const hero = document.createElement('h1');\n        hero.classList.add('hero');\n        hero.textContent = 'Sunny Side Café Shenanigans';\n        header.appendChild(hero);\n\n        const createButton = (textContent) => {\n        const button = document.createElement('button');\n        button.classList.add('button');\n        button.textContent = textContent;\n        const buttonId = textContent.toLowerCase();\n        button.id = buttonId;\n        header.appendChild(button);\n        return button;\n        };  \n\n        const homeButton = createButton('Home');\n    \n        const menuButton = createButton('Menu');\n    \n        const contactButton = createButton('Contact');\n\n        return header;\n    };\n\n    const footerCreator = () => {\n        const footer = document.createElement('div');\n        footer.classList.add('footer');\n\n        const footerMessage = document.createElement('p');\n        footerMessage.textContent = '2023 Coded by hrv3str';\n\n        const gitLink = document.createElement('a');\n        gitLink.href = 'https://github.com/hrv3str';\n        gitLink.target = '_blank'\n\n        const gitIcon = document.createElement('span');\n        gitIcon.classList.add('git-logo');\n\n        gitLink.appendChild(gitIcon);\n        footerMessage.appendChild(gitLink);\n        footer.appendChild(footerMessage);\n\n        return footer;\n    };\n\n    const header = headerCreator();\n    const footer = footerCreator();\n\n    return {\n        header,\n        footer\n    };\n}\n\n//# sourceURL=webpack://sunny-side-cafe/./src/frame.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomeContent: () => (/* binding */ createHomeContent)\n/* harmony export */ });\n/* harmony import */ var _bar_photo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-photo.jpg */ \"./src/bar-photo.jpg\");\n\n\nconst createHomeContent = () => {\n    const greetingMessage = document.createElement('div');\n    greetingMessage.classList.add('greeting');\n\n    const paraFirst = document.createElement('p');\n    paraFirst.textContent = 'Welcome to';\n    greetingMessage.appendChild(paraFirst);\n\n    const spanTitle = document.createElement('span');\n    spanTitle.textContent = 'Sunny Side Café Shenanigans'\n    spanTitle.classList.add('title');\n    greetingMessage.appendChild(spanTitle);\n\n    const paraSecond = document.createElement('p');\n    paraSecond.textContent = \"Where every meal is served with a side of sunshine and a sprinkle of laughter. Come in, relax, and let the good times roll as we serve up delicious delights and heartwarming memories. From our kitchen to your table, it's all about the joy of sharing moments and savoring flavors. Embrace the sunny side of life with every bite and every sip. We're thrilled to have you here!\";\n    greetingMessage.appendChild(paraSecond);\n\n    const greetingPhoto = document.createElement('img');\n    greetingPhoto.alt = 'photo of dish';\n    greetingPhoto.src = _bar_photo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    greetingMessage.appendChild(greetingPhoto);\n\n    const paraThird = document.createElement(\"p\");\n    paraThird.textContent = 'Visit us or order the delivery';\n    greetingMessage.appendChild(paraThird);\n    \n    return greetingMessage;\n}\n\n//# sourceURL=webpack://sunny-side-cafe/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame.js */ \"./src/frame.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\nconst frame = (() => {\n    const underLine = (target) => {\n        target.classList.add('underline')\n    };\n\n    const deUnderLine = (target) => {\n        target.classList.remove('underline');\n    }\n\n    const sections = (0,_frame_js__WEBPACK_IMPORTED_MODULE_2__.createFrame)();\n\n    const main = document.createElement('div');\n    main.classList.add('main');\n    main.id = 'main'\n\n    content.appendChild(sections.header);\n    content.appendChild(main);\n    content.appendChild(sections.footer);\n\n    return {\n        underLine,\n        deUnderLine\n    }\n})();\n\n\nconst main = document.getElementById('main');\nconst homePageContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomeContent)();\nconst menuPageContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.createMenuContent)();\n\nmain.appendChild(homePageContent);\n\nconst homeButton = document.getElementById('home');\nconst menuButton = document.getElementById(\"menu\");\nconst contactButton = document.getElementById('contact');\n\nconst handleButtons = (event) => {\n    const button = event.target;\n\n    const buttons = document.querySelectorAll('button');\n    const buttonArray = Array.from(buttons);\n\n    (() => { // clears 'main' div\n        while (main.firstChild) {\n            main.removeChild(main.firstChild);\n        }\n    })();\n\n    (() => { // clears buttons from underlines and event listeners\n        buttonArray.forEach(button => {\n            frame.deUnderLine(button);\n            button.removeEventListener('click', handleButtons)\n        });\n    })();\n\n    switch (button.id) {\n        case 'home':\n            main.appendChild(homePageContent);\n            frame.underLine(homeButton);\n            break;\n        case 'menu':\n            main.appendChild(menuPageContent);\n            frame.underLine(menuButton);\n            break;\n        case 'contact':\n            main.appendChild(contactPageContent);\n            frame.underLine(contactButton);\n            break;\n    }\n\n    listenButtons();\n};\n\nconst listenButtons = () => {\n    const buttons = document.querySelectorAll('button');\n    const buttonArray = Array.from(buttons);\n\n    const activeButtons = buttonArray.filter(button => !button.classList.contains('underline'));\n\n    activeButtons.forEach(button => {\n        button.addEventListener('click', handleButtons);\n    });\n}\n\nframe.underLine(homeButton);\nlistenButtons();\n\n\n\n//# sourceURL=webpack://sunny-side-cafe/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent)\n/* harmony export */ });\n/* harmony import */ var _menu_smoothie_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-smoothie.jpg */ \"./src/menu-smoothie.jpg\");\n/* harmony import */ var _menu_tea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-tea.jpg */ \"./src/menu-tea.jpg\");\n/* harmony import */ var _menu_latte_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-latte.jpg */ \"./src/menu-latte.jpg\");\n/* harmony import */ var _menu_lemonade_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-lemonade.jpg */ \"./src/menu-lemonade.jpg\");\n/* harmony import */ var _menu_brownie_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-brownie.jpg */ \"./src/menu-brownie.jpg\");\n/* harmony import */ var _menu_burger_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-burger.jpg */ \"./src/menu-burger.jpg\");\n/* harmony import */ var _menu_caesar_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-caesar.jpg */ \"./src/menu-caesar.jpg\");\n/* harmony import */ var _menu_cheezecake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-cheezecake.jpg */ \"./src/menu-cheezecake.jpg\");\n/* harmony import */ var _menu_midteranian_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-midteranian.jpg */ \"./src/menu-midteranian.jpg\");\n/* harmony import */ var _menu_mozzarella_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-mozzarella.jpg */ \"./src/menu-mozzarella.jpg\");\n/* harmony import */ var _menu_onion_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-onion.jpg */ \"./src/menu-onion.jpg\");\n/* harmony import */ var _menu_pizza_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-pizza.jpg */ \"./src/menu-pizza.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst createMenuContent = () => {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const title = document.createElement('h1');\n    title.textContent = 'Menu';\n    menu.appendChild(title);\n\n    const createHeader = (text) => {\n        const header = document.createElement('h2');\n        header.textContent = text;\n        menu.appendChild(header);\n    };\n\n    createHeader('Beverages');\n\n    const createDishCard = (name, description, dishPrice, image) => {\n        const techName = name.replace(/\\s+/g, '-').toLowerCase();\n\n        const container = document.createElement('div');\n        container.classList.add('dish-card');\n\n        const title = document.createElement('h3');\n        title.classList.add('menu-title');\n        title.textContent = name;\n        container.appendChild(title);\n\n        const photo = document.createElement('img');\n        photo.alt = name.toLowerCase();\n        photo.src = image;\n        photo.classList.add('menu-image');\n        container.appendChild(photo);\n\n        const text = document.createElement('p');\n        text.classList.add('menu-text');\n        text.textContent = description;\n        container.appendChild(text);\n\n        const price = document.createElement('span');\n        price.classList.add('price');\n        price.textContent = dishPrice;\n        container.appendChild(price);\n\n        menu.appendChild(container);\n    }\n\n    const smoothieTitle = 'Mint Smoothie';\n    const smoothieDesc = 'Experience a refreshing escape with our Cool Mint Dream Smoothie. This invigorating blend combines fresh mint, creamy yogurt, ripe bananas, and a touch of honey for natural sweetness. Sip your way to rejuvenation and savor the minty delight that uplifts your day.';\n    const smooothiePrice = '4';\n\n    createDishCard(smoothieTitle, smoothieDesc, smooothiePrice, _menu_smoothie_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\n    const raspberryTeaTitle = 'Raspberry Tea';\n    const raspberryTeaDesc = 'Delight in the vibrant flavors of our Raspberry Bliss Tea. Experience the natural sweetness and tanginess of ripe raspberries infused into every sip. A refreshing and invigorating choice that captures the essence of summer in a cup. Enjoy a moment of pure fruity indulgence.';\n    const raspberryTeaPrice = '2.50';\n\n    createDishCard(raspberryTeaTitle, raspberryTeaDesc, raspberryTeaPrice, _menu_tea_jpg__WEBPACK_IMPORTED_MODULE_1__);\n\n    const lemonadeTitle = 'Refreshing Lemonade';\n    const lemonadeDesc = \"Enjoy the delightful tang of freshly squeezed lemon juice harmoniously blended with just the right touch of sweetness. Our Refreshing Lemonade is the epitome of quenching your thirst on a sunny day. Whether you're looking to cool down or simply savor a classic favorite, this invigorating drink is sure to hit the spot.\";\n    const lemonadePrice = '2.99'\n\n    createDishCard(lemonadeTitle, lemonadeDesc, lemonadePrice, _menu_lemonade_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n    const latteTitle = 'Iced Caramel Latte';\n    const latteDesc = \"Embark on a journey of rich flavors and smooth textures with our Iced Caramel Latte. Immerse yourself in the harmonious fusion of chilled espresso, luxuriously drizzled caramel syrup, and creamy milk, all masterfully served over a bed of ice. Each sip offers a delightful contrast of bold coffee and velvety sweetness that's perfect for those seeking a refreshing pick-me-up.\";\n    const lattePrice = '4.49'\n\n    createDishCard(latteTitle, latteDesc, lattePrice, _menu_latte_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n    createHeader('Appetizers');\n\n    const mozzarellaSticksTitle = 'Mouthwatering Mozzarella Sticks';\n    const mozzarellaSticksDesc = \"Indulge in the ultimate comfort food experience with our Mouthwatering Mozzarella Sticks. These delectable treats feature crispy, golden-brown exteriors that give way to warm, gooey centers of premium mozzarella cheese. Served alongside a classic marinara sauce for dipping, each bite offers a delightful contrast between the crunchy coating and the creamy, melted cheese. Whether you're enjoying them as an appetizer or sharing with friends, these mozzarella sticks are a taste of cheesy perfection.\";\n    const mozzarellaSticksPrice = '7.99'\n\n    createDishCard(mozzarellaSticksTitle, mozzarellaSticksDesc, mozzarellaSticksPrice, _menu_mozzarella_jpg__WEBPACK_IMPORTED_MODULE_9__);\n\n    const onionRingsTitle = 'Golden Onion Rings';\n    const onionRingsDesc = \"Satisfy your craving for crunch and flavor with our Golden Onion Rings. Each ring is expertly coated in a light and crispy batter, delivering a satisfying crunch with every bite. The onions inside are tender and sweet, providing the perfect contrast to the outer texture. Whether you choose to dip them in zesty ranch, tangy barbecue, or another favorite sauce, our onion rings are a versatile and delicious side that complements any meal. Share them with friends or savor them all to yourself!\";\n    const onionRingsPrice = '6.49';\n\n    createDishCard(onionRingsTitle, onionRingsDesc, onionRingsPrice, _menu_onion_jpg__WEBPACK_IMPORTED_MODULE_10__);\n\n    createHeader('Salads');\n\n    const caesarTitle = 'Crispy Chicken Caesar Salad';\n    const caesarDesk = \"Elevate your salad experience with our Crispy Chicken Caesar Salad. Immerse yourself in a symphony of flavors and textures as you savor each bite. Crisp and fresh romaine lettuce serves as the base, accompanied by tender, seasoned grilled chicken that adds a savory kick to every forkful. The croutons lend a satisfying crunch, while the generous sprinkle of parmesan cheese brings a rich, salty depth to the dish. All of these delightful elements come together harmoniously, united by the velvety embrace of our Caesar dressing. Embark on a culinary journey that balances vibrant greens, satisfying protein, and the classic allure of Caesar salad.\";\n    const caesarPrice = '9.99';\n\n    createDishCard(caesarTitle, caesarDesk, caesarPrice, _menu_caesar_jpg__WEBPACK_IMPORTED_MODULE_6__);\n\n    const quinoaSaladTitle = 'Mediterranean Quinoa Salad';\n    const quinoaSaladDesk = \"Experience the vibrant flavors of the Mediterranean with our enchanting Mediterranean Quinoa Salad. This wholesome creation marries the nutty goodness of quinoa with the juiciness of cherry tomatoes, the refreshing crunch of cucumbers, and the bold character of olives. The ensemble of ingredients is further elevated by the addition of crumbled feta cheese, which imparts a creamy tang that beautifully complements the other elements. Drizzled with balsamic vinaigrette, this salad is a symphony of tastes and textures that transports you to the shores of the Mediterranean, even as you enjoy it in the heart of our diner.\";\n    const quinoaSaladPrice = '8.49';\n\n    createDishCard(quinoaSaladTitle, quinoaSaladDesk, quinoaSaladPrice, _menu_midteranian_jpg__WEBPACK_IMPORTED_MODULE_8__);\n\n    createHeader('Main Courses');\n\n    const burgerTitle = 'Classic Burger';\n    const burgerDesc = \"Indulge in the timeless delight of our Classic Burger, a quintessential American favorite that captures the essence of comfort and satisfaction. Sink your teeth into a juicy beef patty, lovingly cooked to perfection to unleash a burst of savory flavors with every bite. The ensemble is thoughtfully crowned with crisp lettuce, ripe tomato slices, and a generous scattering of onion for that perfect crunch and pungency. As a final touch, you have the freedom to personalize your burger by choosing from an array of delectable cheeses that melt seamlessly over the patty, creating a harmonious symphony of textures and tastes. Accompanied by a side of golden and crispy fries, this is a burger experience that pays homage to tradition while embracing your individual palate.\";\n    const burgerPrice = '10.99';\n\n    createDishCard(burgerTitle, burgerDesc, burgerPrice, _menu_burger_jpg__WEBPACK_IMPORTED_MODULE_5__);\n\n    const pizzaTitle = 'Deluxe Veggie Pizza';\n    const pizzaDesc = \"Embark on a culinary journey through layers of flavor with our Deluxe Veggie Pizza. This thin-crust masterpiece showcases a delightful arrangement of fresh vegetables that dance across the canvas of the pizza, offering a vivid and colorful spectrum of taste. Each slice is a medley of vibrant bell peppers, succulent mushrooms, zesty red onions, and more, all harmoniously mingling atop a bed of melted cheese. The delicate, crispy crust serves as the perfect canvas for this symphony of textures and tastes. Whether you're a devoted vegetarian or simply craving a burst of garden-fresh goodness, the Deluxe Veggie Pizza is a delightful culinary creation that brings together the joy of pizza and the healthful essence of vegetables.\"\n    const pizzaPrice = '12.49';\n\n    createDishCard(pizzaTitle, pizzaDesc, pizzaPrice, _menu_pizza_jpg__WEBPACK_IMPORTED_MODULE_11__);\n\n    createHeader('Desserts');\n\n    const brownieTitle = 'Decadent Chocolate Brownie';\n    const brownieDesc = \"ndulge in the rich flavors of our Decadent Chocolate Brownie. This warm and gooey delight is made with premium cocoa and topped with a generous scoop of velvety vanilla ice cream. As you take a bite, the fudgy texture and melty chocolate will envelop your taste buds in pure bliss. A final drizzle of chocolate sauce adds an extra layer of sweetness to this dessert masterpiece. The contrast between the warm brownie and the cold ice cream creates a symphony of flavors and temperatures that's truly satisfying. Perfect for sharing or savoring all on your own.\";\n    const browniePrice = '5.99'\n\n    createDishCard(brownieTitle, brownieDesc, browniePrice, _menu_brownie_jpg__WEBPACK_IMPORTED_MODULE_4__);\n\n    const cheseCakeTitle = 'Classic New York Cheesecake';\n    const cheseCakeDesk = \"Experience the timeless elegance of our Classic New York Cheesecake. This creamy masterpiece features a luscious cheesecake filling nestled atop a golden graham cracker crust. The silky smooth texture and rich flavor of the cheesecake are complemented by a delightful berry compote, adding a burst of fruity freshness to each forkful. Every bite is a harmonious combination of velvety richness and fruity tanginess. Whether you're celebrating a special occasion or simply treating yourself, our Classic New York Cheesecake is the epitome of dessert perfection.\";\n    const cheseCakePrice = '6.49';\n\n    createDishCard(cheseCakeTitle, cheseCakeDesk, cheseCakePrice, _menu_cheezecake_jpg__WEBPACK_IMPORTED_MODULE_7__);\n\n    return menu;\n};\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu.js?");

/***/ }),

/***/ "./src/Handwritten.ttf":
/*!*****************************!*\
  !*** ./src/Handwritten.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bf817572dac90c949bb.ttf\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/Handwritten.ttf?");

/***/ }),

/***/ "./src/Regular.ttf":
/*!*************************!*\
  !*** ./src/Regular.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d087b545bf495f3d86d.ttf\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/Regular.ttf?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b62e6b3699ea892c053.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/background.jpg?");

/***/ }),

/***/ "./src/bar-photo.jpg":
/*!***************************!*\
  !*** ./src/bar-photo.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfea8d72bb97eddbbdcb.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/bar-photo.jpg?");

/***/ }),

/***/ "./src/github.svg":
/*!************************!*\
  !*** ./src/github.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eed91e36902f7d95fa5d.svg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/github.svg?");

/***/ }),

/***/ "./src/menu-brownie.jpg":
/*!******************************!*\
  !*** ./src/menu-brownie.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ac03c5816b489b862c2.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-brownie.jpg?");

/***/ }),

/***/ "./src/menu-burger.jpg":
/*!*****************************!*\
  !*** ./src/menu-burger.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36188f220b1805a6bcef.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-burger.jpg?");

/***/ }),

/***/ "./src/menu-caesar.jpg":
/*!*****************************!*\
  !*** ./src/menu-caesar.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f95155c5f7c9f9ec8730.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-caesar.jpg?");

/***/ }),

/***/ "./src/menu-cheezecake.jpg":
/*!*********************************!*\
  !*** ./src/menu-cheezecake.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46de416f46b30ff35a12.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-cheezecake.jpg?");

/***/ }),

/***/ "./src/menu-latte.jpg":
/*!****************************!*\
  !*** ./src/menu-latte.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b69d74ca42635cd2f4a6.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-latte.jpg?");

/***/ }),

/***/ "./src/menu-lemonade.jpg":
/*!*******************************!*\
  !*** ./src/menu-lemonade.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8349d23becde8d7a1f62.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-lemonade.jpg?");

/***/ }),

/***/ "./src/menu-midteranian.jpg":
/*!**********************************!*\
  !*** ./src/menu-midteranian.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a7af38fca787f6d5548.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-midteranian.jpg?");

/***/ }),

/***/ "./src/menu-mozzarella.jpg":
/*!*********************************!*\
  !*** ./src/menu-mozzarella.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3ac1df5126d58454208.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-mozzarella.jpg?");

/***/ }),

/***/ "./src/menu-onion.jpg":
/*!****************************!*\
  !*** ./src/menu-onion.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a851041470b59146914f.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-onion.jpg?");

/***/ }),

/***/ "./src/menu-pizza.jpg":
/*!****************************!*\
  !*** ./src/menu-pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0f632ec7eaff80f6021.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-pizza.jpg?");

/***/ }),

/***/ "./src/menu-smoothie.jpg":
/*!*******************************!*\
  !*** ./src/menu-smoothie.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4c04854a1a973e25edd.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-smoothie.jpg?");

/***/ }),

/***/ "./src/menu-tea.jpg":
/*!**************************!*\
  !*** ./src/menu-tea.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e26afe2bdef6dbba338.jpg\";\n\n//# sourceURL=webpack://sunny-side-cafe/./src/menu-tea.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;