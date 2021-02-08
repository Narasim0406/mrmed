module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/components/navigation/navigation.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/components/navigation/navigation.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/components/pagination/pagination.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/components/pagination/pagination.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/components/scrollbar/scrollbar.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/components/scrollbar/scrollbar.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/components/navigation/navigation.scss */ "./node_modules/swiper/components/navigation/navigation.scss");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_components_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/components/pagination/pagination.scss */ "./node_modules/swiper/components/pagination/pagination.scss");
/* harmony import */ var swiper_components_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_components_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_components_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/components/scrollbar/scrollbar.scss */ "./node_modules/swiper/components/scrollbar/scrollbar.scss");
/* harmony import */ var swiper_components_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_components_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function App({
  Component,
  pageProps
}) {
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_2__["useStore"])(pageProps.initialReduxState);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./reducers.js":
/*!*********************!*\
  !*** ./reducers.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./types.js");


const initialAuth = {
  userDetails: {},
  userToken: "",
  cartProduct: [],
  products: []
};
const initialPresc = {
  uploadPrescription: [],
  chooseMedicine: ""
};

const reducer = (state = initialAuth, {
  type,
  payload
}) => {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["USER_DETAILS"]:
      {
        console.log("USER_DETAILS", type, payload);
        return {
          userDetails: payload
        };
      }

    default:
      return state;
  }
};

const userToken = (state = initialAuth, {
  type,
  payload
}) => {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["USER_TOKEN"]:
      {
        console.log("USER_TOKEN", type, payload);
        return {
          userToken: payload
        };
      }

    default:
      return state;
  }
};

const cartProduct = (state = initialAuth, {
  type,
  payload
}) => {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["CART_PRODUCTS"]:
      {
        console.log("CART_PRODUCTS", type, payload);
        return {
          cartProduct: payload
        };
      }

    default:
      return state;
  }
};

const products = (state = initialAuth, {
  type,
  payload
}) => {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_LISTS"]:
      {
        console.log("PRODUCT_LISTS", type, payload);
        return {
          products: payload
        };
      }

    default:
      return state;
  }
};

const upload_prescription = (state = initialPresc, {
  type,
  payload
}) => {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_PRESCRIPTION"]:
      {
        console.log("USER_DETAILS", type, payload);
        return {
          uploadPrescription: payload
        };
      }

    default:
      return state;
  }
};

const choose_medicine = (state = initialPresc, {
  type,
  payload
}) => {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["CHOOSE_MEDICINE"]:
      {
        console.log("USER_TOKEN", type, payload);
        return {
          chooseMedicine: payload
        };
      }

    default:
      return state;
  }
}; // // COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1
//     case types.DECREMENT:
//       return state - 1
//     case types.RESET:
//       return 0
//     default:
//       return state
//   }
// }
// // INITIAL TIMER STATE
// const initialTimerState = {
//   lastUpdate: 0,
//   light: false,
// }
// // TIMER REDUCER
// const timerReducer = (state = initialTimerState, { type, payload }) => {
//   switch (type) {
//     case types.TICK:
//       return {
//         lastUpdate: payload.ts,
//         light: !!payload.light,
//       }
//     default:
//       return state
//   }
// }
// COMBINED REDUCERS


const reducers = {
  // counter: counterReducer,
  // timer: timerReducer,
  auth: reducer,
  userDetail: reducer,
  userToken: userToken,
  cartDetail: cartProduct,
  productList: products,
  prescription: upload_prescription,
  chooseMedicines: choose_medicine
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./reducers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;

function initStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./types.js":
/*!******************!*\
  !*** ./types.js ***!
  \******************/
/*! exports provided: USER_DETAILS, USER_TOKEN, CART_PRODUCTS, PRODUCT_LISTS, CHOOSE_MEDICINE, UPLOAD_PRESCRIPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DETAILS", function() { return USER_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TOKEN", function() { return USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_PRODUCTS", function() { return CART_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LISTS", function() { return PRODUCT_LISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHOOSE_MEDICINE", function() { return CHOOSE_MEDICINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_PRESCRIPTION", function() { return UPLOAD_PRESCRIPTION; });
// REDUX ACTION TYPES
// export const TICK = 'TICK'
// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'
// export const RESET = 'RESET'
const USER_DETAILS = 'USER_DETAILS';
const USER_TOKEN = 'USER_TOKEN';
const CART_PRODUCTS = 'CART_PRODUCTS';
const PRODUCT_LISTS = 'PRODUCT_LISTS';
const CHOOSE_MEDICINE = 'CHOOSE_MEDICINE';
const UPLOAD_PRESCRIPTION = 'UPLOAD_PRESCRIPTION';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImluaXRpYWxBdXRoIiwidXNlckRldGFpbHMiLCJ1c2VyVG9rZW4iLCJjYXJ0UHJvZHVjdCIsInByb2R1Y3RzIiwiaW5pdGlhbFByZXNjIiwidXBsb2FkUHJlc2NyaXB0aW9uIiwiY2hvb3NlTWVkaWNpbmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsInR5cGVzIiwiY29uc29sZSIsImxvZyIsInVwbG9hZF9wcmVzY3JpcHRpb24iLCJjaG9vc2VfbWVkaWNpbmUiLCJyZWR1Y2VycyIsImF1dGgiLCJ1c2VyRGV0YWlsIiwiY2FydERldGFpbCIsInByb2R1Y3RMaXN0IiwicHJlc2NyaXB0aW9uIiwiY2hvb3NlTWVkaWNpbmVzIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZU1lbW8iLCJVU0VSX0RFVEFJTFMiLCJVU0VSX1RPS0VOIiwiQ0FSVF9QUk9EVUNUUyIsIlBST0RVQ1RfTElTVFMiLCJDSE9PU0VfTUVESUNJTkUiLCJVUExPQURfUFJFU0NSSVBUSU9OIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3BELFFBQU1DLEtBQUssR0FBR0MsdURBQVEsQ0FBQ0YsU0FBUyxDQUFDRyxpQkFBWCxDQUF0QjtBQUVB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YyxJQUFJbkMsS0FBdEIsRUFBNkI7QUFDM0JvQyxVQUFNLEdBQUdSLFNBQVMsaUNBQ2I1QixLQUFLLENBQUNxQyxRQUFOLEVBRGEsR0FFYkYsY0FGYSxFQUFsQixDQUQyQixDQUszQjs7QUFDQW5DLFNBQUssR0FBR3NDLFNBQVI7QUFDRCxHQVpnRCxDQWVqRDs7O0FBQ0EsWUFBbUMsT0FBT0YsTUFBUCxDQWhCYyxDQWlCakQ7O0FBQ0EsTUFBSSxDQUFDcEMsS0FBTCxFQUFZQSxLQUFLLEdBQUdvQyxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBckJNO0FBdUJBLFNBQVNuQyxRQUFULENBQWtCNEIsWUFBbEIsRUFBZ0M7QUFFckMsUUFBTTdCLEtBQUssR0FBR3VDLHFEQUFPLENBQUMsTUFBTUwsZUFBZSxDQUFDTCxZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFFQSxTQUFPN0IsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzVDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNd0MsWUFBWSxHQUFDLGNBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFDLFlBQWpCO0FBQ0EsTUFBTUMsYUFBYSxHQUFDLGVBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFDLGVBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFDLGlCQUF0QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFDLHFCQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLnNjc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2Nzcyc7XHJcbmltcG9ydCAnc3dpcGVyL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmNvbnN0IGluaXRpYWxBdXRoID0ge1xyXG4gIHVzZXJEZXRhaWxzOnt9LFxyXG4gIHVzZXJUb2tlbjpcIlwiLFxyXG4gIGNhcnRQcm9kdWN0OltdLFxyXG4gIHByb2R1Y3RzOltdXHJcbn1cclxuY29uc3QgaW5pdGlhbFByZXNjID0ge1xyXG4gIHVwbG9hZFByZXNjcmlwdGlvbjogW10sXHJcbiAgY2hvb3NlTWVkaWNpbmU6IFwiXCJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsQXV0aCx7dHlwZSxwYXlsb2FkfSkgPT4ge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5VU0VSX0RFVEFJTFM6e1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVTRVJfREVUQUlMU1wiLCB0eXBlLCBwYXlsb2FkKVxyXG4gICAgICByZXR1cm4ge3VzZXJEZXRhaWxzOnBheWxvYWR9O1xyXG4gICAgfVxyXG4gICBcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdXNlclRva2VuID0gKHN0YXRlPWluaXRpYWxBdXRoLHt0eXBlLHBheWxvYWR9KSA9PiB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgIFxyXG4gICAgY2FzZSB0eXBlcy5VU0VSX1RPS0VOOntcclxuICAgICAgY29uc29sZS5sb2coXCJVU0VSX1RPS0VOXCIsIHR5cGUsIHBheWxvYWQpXHJcbiAgICAgIHJldHVybiB7dXNlclRva2VuOnBheWxvYWR9O1xyXG4gICAgfVxyXG4gICBcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2FydFByb2R1Y3QgPSAoc3RhdGU9aW5pdGlhbEF1dGgse3R5cGUscGF5bG9hZH0pID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgXHJcbiAgIFxyXG4gICAgY2FzZSB0eXBlcy5DQVJUX1BST0RVQ1RTOntcclxuICAgICAgY29uc29sZS5sb2coXCJDQVJUX1BST0RVQ1RTXCIsIHR5cGUsIHBheWxvYWQpXHJcbiAgICAgIHJldHVybiB7Y2FydFByb2R1Y3Q6cGF5bG9hZH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPWluaXRpYWxBdXRoLHt0eXBlLHBheWxvYWR9KSA9PiB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgIFxyXG4gICBcclxuICAgIGNhc2UgdHlwZXMuUFJPRFVDVF9MSVNUUzp7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUFJPRFVDVF9MSVNUU1wiLCB0eXBlLCBwYXlsb2FkKVxyXG4gICAgICByZXR1cm4ge3Byb2R1Y3RzOnBheWxvYWR9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cGxvYWRfcHJlc2NyaXB0aW9uID0gKHN0YXRlPWluaXRpYWxQcmVzYyx7dHlwZSxwYXlsb2FkfSkgPT4ge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5VUExPQURfUFJFU0NSSVBUSU9OOntcclxuICAgICAgY29uc29sZS5sb2coXCJVU0VSX0RFVEFJTFNcIiwgdHlwZSwgcGF5bG9hZClcclxuICAgICAgcmV0dXJuIHt1cGxvYWRQcmVzY3JpcHRpb246cGF5bG9hZH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNob29zZV9tZWRpY2luZSA9IChzdGF0ZT1pbml0aWFsUHJlc2Mse3R5cGUscGF5bG9hZH0pID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgXHJcbiAgICBjYXNlIHR5cGVzLkNIT09TRV9NRURJQ0lORTp7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVVNFUl9UT0tFTlwiLCB0eXBlLCBwYXlsb2FkKVxyXG4gICAgICByZXR1cm4ge2Nob29zZU1lZGljaW5lOnBheWxvYWR9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyAvLyBDT1VOVEVSIFJFRFVDRVJcclxuLy8gY29uc3QgY291bnRlclJlZHVjZXIgPSAoc3RhdGUgPSAwLCB7IHR5cGUgfSkgPT4ge1xyXG4vLyAgIHN3aXRjaCAodHlwZSkge1xyXG4vLyAgICAgY2FzZSB0eXBlcy5JTkNSRU1FTlQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZSArIDFcclxuLy8gICAgIGNhc2UgdHlwZXMuREVDUkVNRU5UOlxyXG4vLyAgICAgICByZXR1cm4gc3RhdGUgLSAxXHJcbi8vICAgICBjYXNlIHR5cGVzLlJFU0VUOlxyXG4vLyAgICAgICByZXR1cm4gMFxyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgcmV0dXJuIHN0YXRlXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBJTklUSUFMIFRJTUVSIFNUQVRFXHJcbi8vIGNvbnN0IGluaXRpYWxUaW1lclN0YXRlID0ge1xyXG4vLyAgIGxhc3RVcGRhdGU6IDAsXHJcbi8vICAgbGlnaHQ6IGZhbHNlLFxyXG4vLyB9XHJcblxyXG4vLyAvLyBUSU1FUiBSRURVQ0VSXHJcbi8vIGNvbnN0IHRpbWVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxUaW1lclN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4vLyAgIHN3aXRjaCAodHlwZSkge1xyXG4vLyAgICAgY2FzZSB0eXBlcy5USUNLOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIGxhc3RVcGRhdGU6IHBheWxvYWQudHMsXHJcbi8vICAgICAgICAgbGlnaHQ6ICEhcGF5bG9hZC5saWdodCxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgcmV0dXJuIHN0YXRlXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBDT01CSU5FRCBSRURVQ0VSU1xyXG5jb25zdCByZWR1Y2VycyA9IHtcclxuICAvLyBjb3VudGVyOiBjb3VudGVyUmVkdWNlcixcclxuICAvLyB0aW1lcjogdGltZXJSZWR1Y2VyLFxyXG4gIGF1dGg6cmVkdWNlcixcclxuICB1c2VyRGV0YWlsOnJlZHVjZXIsXHJcbiAgdXNlclRva2VuOnVzZXJUb2tlbixcclxuICBjYXJ0RGV0YWlsOmNhcnRQcm9kdWN0LFxyXG4gIHByb2R1Y3RMaXN0OnByb2R1Y3RzLFxyXG4gIHByZXNjcmlwdGlvbjp1cGxvYWRfcHJlc2NyaXB0aW9uLFxyXG4gIGNob29zZU1lZGljaW5lczpjaG9vc2VfbWVkaWNpbmVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKVxyXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmZ1bmN0aW9uIGluaXRTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICByZWR1Y2VycyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcblxyXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIFxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcbiIsIi8vIFJFRFVYIEFDVElPTiBUWVBFU1xyXG4vLyBleHBvcnQgY29uc3QgVElDSyA9ICdUSUNLJ1xyXG4vLyBleHBvcnQgY29uc3QgSU5DUkVNRU5UID0gJ0lOQ1JFTUVOVCdcclxuLy8gZXhwb3J0IGNvbnN0IERFQ1JFTUVOVCA9ICdERUNSRU1FTlQnXHJcbi8vIGV4cG9ydCBjb25zdCBSRVNFVCA9ICdSRVNFVCdcclxuZXhwb3J0IGNvbnN0IFVTRVJfREVUQUlMUz0nVVNFUl9ERVRBSUxTJ1xyXG5leHBvcnQgY29uc3QgVVNFUl9UT0tFTj0nVVNFUl9UT0tFTidcclxuZXhwb3J0IGNvbnN0IENBUlRfUFJPRFVDVFM9J0NBUlRfUFJPRFVDVFMnXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX0xJU1RTPSdQUk9EVUNUX0xJU1RTJ1xyXG5leHBvcnQgY29uc3QgQ0hPT1NFX01FRElDSU5FPSdDSE9PU0VfTUVESUNJTkUnXHJcbmV4cG9ydCBjb25zdCBVUExPQURfUFJFU0NSSVBUSU9OPSdVUExPQURfUFJFU0NSSVBUSU9OJ1xyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9