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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/CartDetails/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/*! exports provided: userDetails, userToken, cartProduct, productList, chooseMedicine, uploadPrescriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDetails", function() { return userDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToken", function() { return userToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartProduct", function() { return cartProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productList", function() { return productList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMedicine", function() { return chooseMedicine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPrescriptions", function() { return uploadPrescriptions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./types.js");
 // // INITIALIZES CLOCK ON SERVER
// export const serverRenderClock = () => (dispatch) =>
//   dispatch({
//     type: types.TICK,
//     payload: { light: false, ts: Date.now() },
//   })
// // INITIALIZES CLOCK ON CLIENT
// export const startClock = () => (dispatch) =>
//   setInterval(() => {
//     dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
//   }, 1000)
// // INCREMENT COUNTER BY 1
// export const incrementCount = () => ({ type: types.INCREMENT })
// // DECREMENT COUNTER BY 1
// export const decrementCount = () => ({ type: types.DECREMENT })
// // RESET COUNTER
// export const resetCount = () => ({ type: types.RESET })

const userDetails = details => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_DETAILS"],
    payload: details
  };
};
const userToken = token => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_TOKEN"],
    payload: token
  };
};
const cartProduct = products => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CART_PRODUCTS"],
    payload: products
  };
};
const productList = products => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_LISTS"],
    payload: products
  };
};
const chooseMedicine = details => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CHOOSE_MEDICINE"],
    payload: details
  };
};
const uploadPrescriptions = details => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPLOAD_PRESCRIPTION"],
    payload: details
  };
};

/***/ }),

/***/ "./apiVariables.js":
/*!*************************!*\
  !*** ./apiVariables.js ***!
  \*************************/
/*! exports provided: url, auth_url, admin_url, profiles_url, orders_url, products_url, payments_url, medplans_url, notifications_url, cms_url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth_url", function() { return auth_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin_url", function() { return admin_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profiles_url", function() { return profiles_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orders_url", function() { return orders_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products_url", function() { return products_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payments_url", function() { return payments_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "medplans_url", function() { return medplans_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications_url", function() { return notifications_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cms_url", function() { return cms_url; });
const url = 'http://180.151.69.138';
const auth_url = `${url}:2254/api/v1`;
const admin_url = `${url}:2255/api/v1`;
const profiles_url = `${url}:2256/api/v1`;
const orders_url = `${url}:2257/api/v1`;
const products_url = `${url}:2258/api/v1`;
const payments_url = `${url}:2259/api/v1`;
const medplans_url = `${url}:2260/api/v1`;
const notifications_url = `${url}:2261/api/v1`;
const cms_url = `${url}:2262/api/v1`;

/***/ }),

/***/ "./components/Footer/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/Footer.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3f33N",
	"footerRight": "Footer_footerRight__3adjF",
	"footerIconAlign": "Footer_footerIconAlign__Z0cXO",
	"footerLine": "Footer_footerLine__1795J",
	"copyright": "Footer_copyright__3I8Dv",
	"terms": "Footer_terms__219XY"
};


/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\Footer\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Footer() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: '/footer-logo.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, "MrMed is the first choice of Indian Online Pharmacy for many satisfied customers for buy medicines online with discount for life-threatening diseases like cancer, HIV/AIDS, Hepatitis and many others, everyone knows how expensive medical treatment is & with the increasing cost of medicines it has become unaffordable to buy essential medicines."), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footerIconAlign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/mrmedhq",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: '/facebook.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 92
    }
  })), __jsx("a", {
    href: "https://www.twitter.com/mrmedhq",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: '/twitter.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 91
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/mrmedhq",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: '/instagram.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 93
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/mrmedin",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: '/linkedin.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 100
    }
  })), __jsx("a", {
    href: "",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: '/youtube.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 60
    }
  })))), __jsx("div", {
    className: "col-md-7 offset-md-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: `row ${_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footerRight}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }, "COMPANY"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  }, "About Us"), __jsx("span", {
    onClick: () => router.push('/Career'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, "Careers"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }, "Partner with mrMED"), __jsx("span", {
    onClick: () => router.push('/NeedHelps'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, "FAQ"), __jsx("span", {
    onClick: () => router.push('/Contact'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, "Contact Us")), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, "Speciality Medicines"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, "Personal care"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, "Diabetics"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, "Fitness &  Supplement"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }, "Health conditions"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, "Health care devices"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }, "Corona virus prevention")), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 41
    }
  }, "Policy Info"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 41
    }
  }, "Editorial Policy"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, "Privacy Policy"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, "Terms and Conditions")))))), __jsx("hr", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footerLine,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Copyright \xA9 2021 Eazymed Technologies Private Limited"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headers": "Header_headers__dbCVu",
	"greyBack": "Header_greyBack__kQ8b0",
	"logo": "Header_logo__1QUnI",
	"deliveryContainer": "Header_deliveryContainer__pHBdr",
	"deliver": "Header_deliver__ObCUQ",
	"deliveryContent": "Header_deliveryContent__bngJj",
	"searchIcon": "Header_searchIcon__3nPSp",
	"lang": "Header_lang__VaauW",
	"btnLocation": "Header_btnLocation__3KAAO",
	"dropdownMenu": "Header_dropdownMenu__LjuSh",
	"item": "Header_item__1N_vZ",
	"imgLogo": "Header_imgLogo__1hlCI",
	"iconAlign": "Header_iconAlign__V4XLf",
	"headerIcon": "Header_headerIcon__30jRj",
	"greenBack": "Header_greenBack__2-W6w",
	"btnUpload": "Header_btnUpload__1HYTj",
	"uploadPrescription": "Header_uploadPrescription__WI59j",
	"cartBadge": "Header_cartBadge__1kfAy",
	"locationDropdown": "Header_locationDropdown__3rEw1"
};


/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_Signin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login/Signin/index */ "./components/Login/Signin/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./actions.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\Header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const whatsapp = require('../../assets/images/whatsapp-fab.png');






function Header() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const userDetail = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.auth);
  const cartProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartDetail);
  let {
    0: userData,
    1: setuserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: cartLength,
    1: setCartLength
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let {
    0: langDropDown,
    1: setLangDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: locationPopOver,
    1: setLocationPopOver
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: userDropDown,
    1: setUserDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.productList);
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const userDropDowne = () => {
    setUserDropDown(!userDropDown);
  };

  const langDropDowns = () => {
    setLangDropDown(!langDropDown);
  };

  const locationPopOvers = () => {
    setLocationPopOver(!locationPopOver);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.userData) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["userDetails"])(JSON.parse(localStorage.userData)));
      setuserData(JSON.parse(localStorage.userData));
    }

    let len = cartProducts.cartProduct ? cartProducts.cartProduct.length : 0;
    setCartLength(len);
    console.log(cartProducts.cartProduct, "dsfsfdfgsdhgfdghj", cartLength, cartProducts.cartProduct.length); // if(userDetail.token){
    //     toggle();
    // }
  }, [cartProducts]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const toggle = async () => {
    setModal(!modal);

    if (localStorage.userData) {
      await dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["userDetails"])(JSON.parse(localStorage.userData)));
      setuserData(JSON.parse(localStorage.userData));
    }
  };

  return __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headers,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.greyBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: '/whatsapp-fab.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, "+91-941183088"), __jsx("img", {
    src: '/phone.png',
    style: {
      objectFit: 'contain'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, "+91-941183088")), __jsx("div", {
    className: "col-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.lang,
    isOpen: langDropDown,
    toggle: langDropDowns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    caret: true,
    tag: "span",
    "data-toggle": "dropdown",
    "aria-expanded": langDropDown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, "EN")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 41
    }
  }, "Language"))))))), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-9 d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("img", {
    onClick: () => router.push('/'),
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imgLogo,
    src: '/logo.png',
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.deliveryContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "/loc.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.deliveryContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 37
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }, "Deliver to"), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.deliver,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 41
    }
  }, __jsx("input", {
    id: "pin",
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.deliver,
    type: "text",
    placeholder: "pincode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 45
    }
  }), __jsx("label", {
    htmlFor: "pin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "/edit.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 66
    }
  }))))), __jsx("input", {
    type: "text",
    placeholder: "Search for medicines and health products",
    className: "search-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }), __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.searchIcon,
    src: '/search.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "btn-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    isOpen: userDropDown,
    toggle: userDropDowne,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    tag: "span",
    "data-toggle": "dropdown",
    "aria-expanded": userDropDown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.iconAlign,
    onClick: userData && userData.token && userData.name ? userDropDowne : toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 49
    }
  }, userData && userData.token && userData.name ? userData.name : 'Login/Sign Up'), __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.iconAlign,
    src: '/user.svg',
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 49
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdownMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 45
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
    onClick: () => router.push('/Accounts/Profiles'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 49
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdownIcon,
    src: '/user.svg',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 57
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 57
    }
  }, "My Profile")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
    onClick: () => router.push('/Accounts/Order'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 49
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdownIcon,
    src: '/delivery.svg',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 57
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 57
    }
  }, "My Orders")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
    onClick: () => router.push('/Accounts/MyPrescription'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 49
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdownIcon,
    src: '/prescription.svg',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 57
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 57
    }
  }, "My Prescription")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
    onClick: () => router.push('/Accounts/Payments'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 49
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdownIcon,
    src: '/credit-card.svg',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 57
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 57
    }
  }, "Payments")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 49
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdownIcon,
    src: '/exit.svg',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 53
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 53
    }
  }, "Logout"))))), __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.iconAlign,
    src: '/line.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }), __jsx("span", {
    onClick: () => router.push('/Cart'),
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.iconAlign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  }, "Cart"), __jsx("img", {
    onClick: () => router.push('/Cart'),
    src: '/shopping-cart.png',
    style: {
      cursor: 'pointer'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 41
    }
  }), __jsx("button", {
    onClick: () => router.push('/Cart'),
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.cartBadge,
    id: "cart-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }, cartLength)))))), __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.greenBack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 33
    }
  }, __jsx("li", {
    onClick: () => router.push('/SpecialityMed'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listImg,
    src: '/wings.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 41
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 41
    }
  }, " SPECIALITY MEDICINES")), __jsx("li", {
    onClick: () => router.push('/PapAssistance'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listImg,
    src: '/patient.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 45
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 45
    }
  }, " PATIENT ASSISTANCE PROGRAMME")), __jsx("li", {
    onClick: () => router.push('/ImportedMedicineComponet'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 41
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listImg,
    src: '/tablet.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 45
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 45
    }
  }, " IMPORTED MEDICINE")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.listImg,
    src: '/heart-rate.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 41
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 41
    }
  }, " WELLNESS")), __jsx("div", {
    onClick: () => router.push('/UploadStepper'),
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.uploadPrescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnUpload,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 45
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 82
    }
  }, "UPLOAD PRESCRIPTION")))))))), __jsx(_Login_Signin_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modal: modal,
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Login/CarouselForLogIn/CarouselForAll.module.scss":
/*!**********************************************************************!*\
  !*** ./components/Login/CarouselForLogIn/CarouselForAll.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mrmed_maincontainer": "CarouselForAll_mrmed_maincontainer__1Bp7y",
	"mr_med_logo": "CarouselForAll_mr_med_logo__2Ui3c",
	"mr_med_carinner": "CarouselForAll_mr_med_carinner__2XMwt",
	"mr_med_tablets": "CarouselForAll_mr_med_tablets__1gmrn",
	"know_medicine": "CarouselForAll_know_medicine__YmNBW",
	"mr_med_foottext": "CarouselForAll_mr_med_foottext__Q-hbs",
	"swiper-pagination-bullet-active": "CarouselForAll_swiper-pagination-bullet-active__drSAl"
};


/***/ }),

/***/ "./components/Login/CarouselForLogIn/index.js":
/*!****************************************************!*\
  !*** ./components/Login/CarouselForLogIn/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselForAll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselForAll.module.scss */ "./components/Login/CarouselForLogIn/CarouselForAll.module.scss");
/* harmony import */ var _CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\Login\\CarouselForLogIn\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import mainlogo from 'assets/images/logo.png';
// import carouselImg from 'assets/images/carousel-tablets.png';




swiper__WEBPACK_IMPORTED_MODULE_1___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_1__["A11y"]]);
function CarouselForAll() {
  const {
    0: loginCarouselList,
    1: setLoginCarouselList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: '1',
    img: ''
  }, {
    id: '2',
    img: ''
  }, {
    id: '3',
    img: ''
  }]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    onSwiper: swiper => console.log(swiper),
    onSlideChange: () => console.log('slide change'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, loginCarouselList.map((login, ind) => {
    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
      key: ind,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: `col-md-11 ${_CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mrmed_maincontainer}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: `${_CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mr_med_logo} d-flex align-items-center justify-content-end`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 45
      }
    }, __jsx("img", {
      className: `${_CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo_img} object-fit-contain`,
      src: "/logo.png",
      alt: "cancel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 49
      }
    })), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: `col-md-10 ${_CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mr_med_carinner} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: `${_CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mr_med_tablets} d-flex justify-content-center align-items-center`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 53
      }
    }, __jsx("img", {
      className: "caro_img object-fit-contain",
      src: "/carousel-tablets.png",
      alt: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 57
      }
    })), __jsx("p", {
      className: _CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.now_medicine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 53
      }
    }, "Know your medicine"), __jsx("p", {
      className: _CarouselForAll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mr_med_foottext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 53
      }
    }, "Lorem ipsum is a placeholder text commonly used to demonstrate the visual", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 164
      }
    }), " form of a document ")))));
  }))));
}

/***/ }),

/***/ "./components/Login/Signin/SingnInComponent.module.scss":
/*!**************************************************************!*\
  !*** ./components/Login/Signin/SingnInComponent.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"signInUpModal": "SingnInComponent_signInUpModal__3zEjS",
	"signIn": "SingnInComponent_signIn__28vDl",
	"signInCard": "SingnInComponent_signInCard__2BwCp",
	"signinInput": "SingnInComponent_signinInput__26xj8",
	"singninFormInput": "SingnInComponent_singninFormInput__19a3H",
	"signinHeader": "SingnInComponent_signinHeader__22mev",
	"signinBtns": "SingnInComponent_signinBtns__2-8Oh",
	"verifyBtn": "SingnInComponent_verifyBtn__3sMp8",
	"noAccount": "SingnInComponent_noAccount__3lK9H",
	"register": "SingnInComponent_register__3jBAd",
	"signUp": "SingnInComponent_signUp__3aSTS",
	"signupContent": "SingnInComponent_signupContent__1xudW",
	"signupHeader": "SingnInComponent_signupHeader__3gMaW",
	"signupMain": "SingnInComponent_signupMain__2u7Ak",
	"signupFormInput": "SingnInComponent_signupFormInput__Dk0ez",
	"sverifyBtn": "SingnInComponent_sverifyBtn__3YoRK",
	"accountsMain": "SingnInComponent_accountsMain__7ONzU",
	"nosignAccooun": "SingnInComponent_nosignAccooun__3gI0M",
	"nosignupAccount": "SingnInComponent_nosignupAccount__2P0Gz",
	"login_link": "SingnInComponent_login_link__21Y54",
	"signupFooter": "SingnInComponent_signupFooter__3aQFR",
	"termsCont": "SingnInComponent_termsCont__1klQs",
	"otpLogin_inner": "SingnInComponent_otpLogin_inner__2tDnM",
	"textContent": "SingnInComponent_textContent__1Kmz6",
	"otp_header": "SingnInComponent_otp_header__15zCm",
	"otp_number": "SingnInComponent_otp_number__1DzRh",
	"otpno_container": "SingnInComponent_otpno_container__38R9Y",
	"otp_form_input": "SingnInComponent_otp_form_input__3iaOq",
	"otp_verify": "SingnInComponent_otp_verify__38LqG"
};


/***/ }),

/***/ "./components/Login/Signin/index.js":
/*!******************************************!*\
  !*** ./components/Login/Signin/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingnInComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ "./actions.js");
/* harmony import */ var _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SingnInComponent.module.scss */ "./components/Login/Signin/SingnInComponent.module.scss");
/* harmony import */ var _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CarouselForLogIn_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CarouselForLogIn/index */ "./components/Login/CarouselForLogIn/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apiVariables */ "./apiVariables.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\Login\\Signin\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function SingnInComponent(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  let {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  let {
    0: isSignUp,
    1: handleIsSignup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: decoded,
    1: setDecoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: which,
    1: setWhich
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: emailIdMobileNo,
    1: setemailIdMobileNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: otp,
    1: setOtp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: ""
  });
  const {
    0: signUpData,
    1: setSignUpData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    emailId: "",
    mobileNo: "",
    userTypeId: 3,
    mobileVerifyStatus: 1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setWhich(0);
  }, []);

  const handelSignIn = () => {
    handleIsSignup(true);
    setWhich(0);
  };

  const handelSignUp = () => {
    handleIsSignup(true);
    setWhich(1);
  };

  const handelOtp = () => {
    setWhich(2);
  };

  const onChangeForm = e => {
    const {
      name,
      value
    } = e.target;
    setSignUpData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const onChangeOtp = e => {
    const {
      name,
      value
    } = e.target;
    setOtp(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));

    if (value === "") {
      handleBackspace(e);
    } else {
      handleEnter(e);
    }
  };

  const handleSignInData = async e => {
    e.preventDefault();
    handleIsSignup(false);
    const url = `${_apiVariables__WEBPACK_IMPORTED_MODULE_7__["auth_url"]}/user/signInByEmailPhone`;
    let isNewUser = emailIdMobileNo === signUpData.mobileNo ? true : false;
    let data = isNewUser ? {
      emailIdMobileNo,
      isNewUser
    } : {
      emailIdMobileNo
    };
    let res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, data);

    if (res.status === 200) {
      console.log(res.data);
      if (isNewUser === true) signUp();
      handelOtp();
    } else if (res.status === 404) {// alert(res.statusText)
    }
  };

  const verifyOtp = async e => {
    e.preventDefault();

    if (isSignUp === false) {
      signInVerify();
    } else {
      signUpVerify();
    }
  };

  const signUpVerify = async () => {
    const url = `${_apiVariables__WEBPACK_IMPORTED_MODULE_7__["auth_url"]}/user/verifySignInByEmailPhone`;
    let code = otp.code1 + otp.code2 + otp.code3 + otp.code4 + otp.code5 + otp.code6;
    let isNewUser = true;
    let data = {
      emailIdMobileNo,
      isNewUser,
      code
    };
    let res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, data);

    if (res.status === 200 || res.status === "success") {
      setOtp({
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: ""
      });
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.data.userData));
      console.log(res, "verifyOtp", localStorage);
      signUp();
    } else {// alert("otp verification failed")
    }
  };

  const signInVerify = async () => {
    const url = `${_apiVariables__WEBPACK_IMPORTED_MODULE_7__["auth_url"]}/user/verifySignInByEmailPhone`;
    let code = otp.code1 + otp.code2 + otp.code3 + otp.code4 + otp.code5 + otp.code6;
    let isNewUser = false;
    let data = {
      emailIdMobileNo,
      isNewUser,
      code
    };
    let res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, data);

    if (res.status === 200 || res.status == "success") {
      setOtp({
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: ""
      });
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.data.userData));
      console.log(res, "verifyOtp", localStorage); // if(isNewUser===false){
      //     dispatch(userDetails(res.data.data.token));
      //     dispatch(userToken(res.data.data.userData));
      // }

      props.toggle();
    } else {// alert("otp verification failed")
    }
  };

  const signUp = async () => {
    const url = `${_apiVariables__WEBPACK_IMPORTED_MODULE_7__["auth_url"]}/user/signup`;
    console.log(signUpData, "signUpData");
    let res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, signUpData);

    if (res.status === 200 || res.status === "success") {
      console.log(res.data, "signUp");
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["userDetails"])(res.data.data.token));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["userToken"])(res.data.data.userData));
      props.toggle();
      setSignUpData({
        name: '',
        emailId: '',
        mobileNo: '',
        userTypeId: 3,
        mobileVerifyStatus: 1
      });
    } else if (res.status === 400) {// alert("User Already has Registered");
    }
  };

  const handleSignUpData = async e => {
    e.preventDefault();
    handleIsSignup(true);
    setemailIdMobileNo(signUpData.mobileNo);
    sendSignUpOtp();
  };

  const sendSignUpOtp = async () => {
    handleIsSignup(false);
    const url = `${_apiVariables__WEBPACK_IMPORTED_MODULE_7__["auth_url"]}/user/signInByEmailPhone`;
    let isNewUser = true;
    let data = {
      "emailIdMobileNo": signUpData.mobileNo,
      "isNewUser": true
    };
    let res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, data);

    if (res.status === 200 || res.status === "success") {
      handelOtp();
    }
  };

  function handleEnter(event) {
    console.log(event.keyCode, "sdfgsdhsdf");
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    console.log(form, index, "sdfgsdhsdf");

    if (index !== 5) {
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  function handleBackspace(event) {
    console.log(event.keyCode, "sdfgsdhsdf");
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    console.log(form, index, "sdfgsdhsdf");

    if (index !== 0) {
      form.elements[index - 1].focus();
      event.preventDefault();
    }
  }

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: props.modal,
    toggle: props.toggle,
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signInUpModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, which === 0 ? __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signInCard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 33
    }
  }, __jsx("form", {
    method: "post",
    onSubmit: handleSignInData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signinInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signinHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 45
    }
  }, "Welcome to MrMed"), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.singninFormInput,
    name: "mobileNo",
    placeholder: "Mobile number",
    value: emailIdMobileNo,
    onChange: e => setemailIdMobileNo(e.target.value),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signinBtns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 41
    }
  }, __jsx("button", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.verifyBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 45
    }
  }, "VERIFY NUMBER"), __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.noAccount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 45
    }
  }, "Don't have account ? ", __jsx("span", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.register,
    onClick: handelSignUp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 98
    }
  }, "Register"))))))), __jsx("div", {
    className: "col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, __jsx(_CarouselForLogIn_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }))) : "", which === 1 ? __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signUp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, "Welcome to MrMed"), __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 37
    }
  }, "Register"), __jsx("form", {
    method: "post",
    onSubmit: handleSignUpData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupMain,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupFormInput,
    name: "name",
    placeholder: "Name",
    value: signUpData.name,
    onChange: e => onChangeForm(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 45
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupFormInput,
    name: "emailId",
    placeholder: "Email Address",
    value: signUpData.emailId,
    onChange: e => onChangeForm(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 45
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupFormInput,
    name: "mobileNo",
    placeholder: "MobileNumber",
    value: signUpData.mobileNo,
    onChange: e => onChangeForm(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 45
    }
  })), __jsx("button", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sverifyBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 41
    }
  }, "SIGN UP"))), __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accountsMain,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.nosignAccooun,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.nosignupAccount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }, "Already have an account ? ", __jsx("span", {
    onClick: handelSignIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 105
    }
  }, "Login"))), __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.signupFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.termsCont,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 41
    }
  }, "By continuing  you agree to the to our ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 112
    }
  }, "Terms of use and Privacy policy"))))))), __jsx("div", {
    className: "col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, __jsx(_CarouselForLogIn_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 25
    }
  }))) : "", which === 2 ? __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otpLogin_inner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 33
    }
  }, "Verify OTP"), __jsx("p", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 33
    }
  }, "Please enter the OTP code sent to your ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 105
    }
  }), " mobile number +91 ", emailIdMobileNo)), __jsx("form", {
    method: "post",
    onSubmit: verifyOtp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otpno_container,
    id: "otp-screen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_form_input,
    name: "code1",
    value: otp.code1,
    onChange: e => onChangeOtp(e),
    maxLength: "1",
    required: true,
    placeholder: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 37
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_form_input,
    name: "code2",
    placeholder: "0",
    maxLength: "1",
    value: otp.code2,
    onChange: e => onChangeOtp(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 37
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_form_input,
    name: "code3",
    placeholder: "0",
    maxLength: "1",
    value: otp.code3,
    onChange: e => onChangeOtp(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 37
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_form_input,
    name: "code4",
    placeholder: "0",
    maxLength: "1",
    value: otp.code4,
    onChange: e => onChangeOtp(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 37
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_form_input,
    name: "code5",
    placeholder: "0",
    maxLength: "1",
    value: otp.code5,
    onChange: e => onChangeOtp(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 37
    }
  }), __jsx("input", {
    type: "text",
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_form_input,
    name: "code6",
    placeholder: "0",
    maxLength: "1",
    value: otp.code6,
    onChange: e => onChangeOtp(e),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: _SingnInComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.otp_verify,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 37
    }
  }, "VERIFY"))))), __jsx("div", {
    className: "col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 21
    }
  }, __jsx(_CarouselForLogIn_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 25
    }
  }))) : "");
}

/***/ }),

/***/ "./components/MyCartFlow/Address/AddressCard/AddressCard.module.scss":
/*!***************************************************************************!*\
  !*** ./components/MyCartFlow/Address/AddressCard/AddressCard.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "AddressCard_container__2-0rc",
	"card": "AddressCard_card__1GXwS",
	"adPn": "AddressCard_adPn__ZwbDE",
	"cardText": "AddressCard_cardText__2ftJa",
	"cardTitle": "AddressCard_cardTitle__1kVtR",
	"adType": "AddressCard_adType__2-3cb",
	"cardTop": "AddressCard_cardTop__1sXPl"
};


/***/ }),

/***/ "./components/MyCartFlow/Address/AddressCard/index.js":
/*!************************************************************!*\
  !*** ./components/MyCartFlow/Address/AddressCard/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddressCard.module.scss */ "./components/MyCartFlow/Address/AddressCard/AddressCard.module.scss");
/* harmony import */ var _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\Address\\AddressCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AddressCard(props) {
  const btnStyle = {
    width: '206px',
    height: '32px',
    border: '1px solid #6054E5',
    boxSizing: 'border-box',
    borderRadius: '2px',
    outline: 'none',
    backgroundColor: '#fff',
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    color: '#6054E5'
  };
  return __jsx("div", {
    className: "container col-md-6 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, console.log("sadfafgsggh", props), __jsx("div", {
    className: `card ${_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card}`,
    style: {
      "width": "18rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, props.address.addressName), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, props.address.type == 0 ? "Home" : props.address.type == 0 ? "Office" : "Other")), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adPn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, props.address.addressMobile), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, props.address.address, "."), __jsx("button", {
    style: btnStyle,
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['sp_btn'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Select Address"))));
}

/***/ }),

/***/ "./components/MyCartFlow/Address/AddressDetails/Address.js":
/*!*****************************************************************!*\
  !*** ./components/MyCartFlow/Address/AddressDetails/Address.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddressCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddressCard */ "./components/MyCartFlow/Address/AddressCard/index.js");
/* harmony import */ var _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddressDetails.module.scss */ "./components/MyCartFlow/Address/AddressDetails/AddressDetails.module.scss");
/* harmony import */ var _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../apiVariables */ "./apiVariables.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\Address\\AddressDetails\\Address.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Address extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      addressType: 0,
      modal: false,
      addressList: [],
      isOpen: false,
      formField: {
        name: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        landmark: ""
      },
      selectedAddressindex: null,
      selectedAddress: {}
    });

    _defineProperty(this, "getAddress", async () => {
      let {
        addressList
      } = this.state;
      let {
        userDetail
      } = this.props;
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${_apiVariables__WEBPACK_IMPORTED_MODULE_8__["profiles_url"]}/address/user/${userDetail.userId}`).then(res => {
        let obj = res.data.data;
        addressList = res.data.data;
        this.setState({
          addressList
        }); // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
      });
    });

    _defineProperty(this, "handleAddAddress", async () => {
      let {
        addressList,
        formField,
        addressType
      } = this.state;
      let {
        userDetail
      } = this.props;
      let data = {
        userId: userDetail.userId,
        addressName: formField.name,
        addressMobile: formField.phoneNumber,
        address: formField.address,
        city: formField.city,
        state: formField.state,
        pinCode: formField.pincode,
        landMark: formField.landmark,
        type: addressType
      };
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(`${_apiVariables__WEBPACK_IMPORTED_MODULE_8__["profiles_url"]}/address`, data).then(res => {
        let obj = res.data.data;
        addressList = res.data.data;
        formField = {
          name: "",
          phoneNumber: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          landmark: ""
        };
        this.setState({
          formField,
          addressList
        });
        this.toggle1(); // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
      });
    });

    _defineProperty(this, "handleAddressType0", () => {
      this.setState({
        addressType: 0
      });
    });

    _defineProperty(this, "handleAddressType1", () => {
      this.setState({
        addressType: 1
      });
    });

    _defineProperty(this, "handleAddressType2", () => {
      this.setState({
        addressType: 2
      });
    });

    _defineProperty(this, "toggle", () => {
      let {
        modal
      } = this.state;
      modal = !modal;
      this.setState({
        modal
      });
    });

    _defineProperty(this, "toggle1", () => {
      let {
        isOpen
      } = this.state;
      isOpen = !isOpen;
      this.setState({
        isOpen
      });
    });

    _defineProperty(this, "handleChange", e => {
      let {
        formField
      } = this.state;
      formField[e.target.name] = e.target.value;
      this.setState({
        formField
      });
    });

    _defineProperty(this, "handleSelectAddress", (index, address) => {
      let {
        selectedAddressindex,
        selectedAddress
      } = this.state;
      selectedAddressindex = index;
      selectedAddress = address;
      console.log("sdfgghfhfgh", index, address);
      this.setState({
        selectedAddressindex,
        selectedAddress
      });
    });

    _defineProperty(this, "handlePlaceOrder", async () => {
      let {
        addressList,
        formField,
        addressType,
        selectedAddress
      } = this.state;
      let {
        userDetail,
        prescription,
        chooseMedicines
      } = this.props;
      let prescriptionUrl = prescription.uploadPrescription.map((data, index) => data.url);
      let data = {
        "prescriptionUrls": prescriptionUrl,
        "dosageDuration": Number(chooseMedicines.chooseMedicine),
        "address": selectedAddress.address,
        "addressName": selectedAddress.addressName,
        "addressMobile": selectedAddress.addressMobile,
        "addressCity": selectedAddress.city,
        "addressState": selectedAddress.state,
        "addressPincode": String(selectedAddress.pinCode),
        "addressLandmark": selectedAddress.landMark,
        "addressType": selectedAddress.type == 0 ? "Home" : selectedAddress.type == 1 ? "Office" : "Other",
        "adminStatus": 0,
        "userStatus": 0,
        "orderType": 0,
        "items": []
      };
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(`${_apiVariables__WEBPACK_IMPORTED_MODULE_8__["orders_url"]}/order`, data).then(res => {
        this.props.handleSubmitedOrder(); // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
      });
    });

    _defineProperty(this, "handleSubmitCall", async () => {
      let {
        addressList,
        formField,
        addressType,
        selectedAddress
      } = this.state;
      let {
        userDetail,
        prescription,
        chooseMedicines
      } = this.props;
      let prescriptionUrl = prescription.uploadPrescription.map((data, index) => data.url);
      let data = {
        "prescriptionUrls": prescriptionUrl,
        "address": selectedAddress.address,
        "addressName": selectedAddress.addressName,
        "addressMobile": selectedAddress.addressMobile,
        "addressCity": selectedAddress.city,
        "addressState": selectedAddress.state,
        "addressPincode": String(selectedAddress.pinCode),
        "addressLandmark": selectedAddress.landMark,
        "addressType": selectedAddress.type == 0 ? "Home" : selectedAddress.type == 1 ? "Office" : "Other",
        "adminStatus": 0,
        "userStatus": 0,
        "orderType": 2,
        "items": []
      };
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(`${_apiVariables__WEBPACK_IMPORTED_MODULE_8__["orders_url"]}/order`, data).then(res => {
        this.props.handleSubmitedOrder(); // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
      });
    });
  }

  componentDidMount() {
    console.log(this.props.userDetail, "saasdfasdsgfs");
    this.getAddress();
  }

  render() {
    let {
      formField,
      selectedAddressindex,
      selectedAddress
    } = this.state;
    let {
      name,
      phoneNumber,
      address,
      city,
      state,
      pincode,
      landmark,
      addressType
    } = formField;
    return __jsx("div", {
      className: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addressDetails,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }
    }, "3.Address Details"), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, "Saved Addrss Details"), __jsx("div", {
      className: `${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addressCards} col-md-12`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }, this.state.addressList.map((address, ind) => {
      {
        console.log("sadfafgsggh", address, ind, this.state.addressList);
      }
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_AddressCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        index: ind,
        address: address,
        selectedAddress: selectedAddressindex,
        selectAddress: () => this.handleSelectAddress(ind, address),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 41
        }
      }));
    })), __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addressItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 25
      }
    }, __jsx("div", {
      onClick: this.toggle1,
      className: `${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.deliverFlip} col-md-12`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 29
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, "Deliver to new address"), __jsx("img", {
      src: '/down.png',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 33
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
      className: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addForm,
      isOpen: this.state.isOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 33
      }
    }, "Address Details"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "col-md-6 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 45
      }
    }, "Name"), __jsx("input", {
      onChange: this.handleChange,
      type: "name",
      value: name,
      name: "name",
      className: "form-control",
      id: "name",
      placeholder: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "col-md-6 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 45
      }
    }, "Phone Number"), __jsx("input", {
      onChange: this.handleChange,
      type: "text",
      value: phoneNumber,
      name: "phoneNumber",
      className: "form-control",
      id: "phoneNumber",
      placeholder: "Phone Number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 45
      }
    }))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "col-md-12 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 45
      }
    }, "Address"), __jsx("textarea", {
      onChange: this.handleChange,
      value: address,
      name: "address",
      className: "form-control",
      id: "address",
      rows: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 45
      }
    }))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "col-md-6 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 45
      }
    }, "City"), __jsx("input", {
      onChange: this.handleChange,
      type: "city",
      value: "city",
      name: "city",
      className: "form-control",
      id: "city",
      placeholder: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: `col-md-6 form-group mb-3 ${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stateCol}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 45
      }
    }, "State"), __jsx("select", {
      onChange: this.handleChange,
      className: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formSelect,
      value: state,
      name: "state",
      id: "state",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 45
      }
    }, __jsx("option", {
      selected: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 49
      }
    }, "State"), __jsx("option", {
      value: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 49
      }
    }, "TamilNadu"), __jsx("option", {
      value: "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 49
      }
    }, "Karnataka"), __jsx("option", {
      value: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 49
      }
    }, "Telungana")))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "col-md-6 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 45
      }
    }, "Pin Code"), __jsx("input", {
      onChange: this.handleChange,
      type: "text",
      value: pincode,
      name: "pincode",
      className: "form-control",
      id: "pincode",
      placeholder: "Pin Code",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "col-md-6 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 41
      }
    }, __jsx("label", {
      className: "form-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 45
      }
    }, "Landmark"), __jsx("input", {
      onChange: this.handleChange,
      type: "text",
      value: landmark,
      name: "landmark",
      className: "form-control",
      id: "landmark",
      placeholder: "Landmark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 45
      }
    }))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: `btn-group col-md-12 form-group mb-3 mt-3 ${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.place}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 41
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 45
      }
    }, "Type of Place"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 45
      }
    }, __jsx("label", {
      className: `toggle-btn ${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toggleBtn} ${this.state.addressType === 0 ? _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toggleBack : ""}`,
      onClick: this.handleAddressType0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 45
      }
    }, "Home"), __jsx("input", {
      type: "radio",
      name: "options",
      id: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.option,
      autoComplete: "off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 45
      }
    }), __jsx("label", {
      className: `toggle-btn ${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toggleBtn} ${this.state.addressType === 1 ? _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toggleBack : ""}`,
      onClick: this.handleAddressType1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 45
      }
    }, "Office"), __jsx("input", {
      type: "radio",
      name: "options",
      id: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.option,
      autoComplete: "off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 45
      }
    }), __jsx("label", {
      className: `toggle-btn ${_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toggleBtn} ${this.state.addressType === 2 ? _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toggleBack : ""}`,
      onClick: this.handleAddressType2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 45
      }
    }, "Other"), __jsx("input", {
      type: "radio",
      name: "options",
      id: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.option,
      autoComplete: "off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 45
      }
    })))), __jsx("div", {
      className: "row mt-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "col-md-5 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 41
      }
    }, __jsx("button", {
      onClick: this.handleAddAddress,
      className: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.save,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 45
      }
    }, "Add Address"))))), __jsx("div", {
      className: "row mt-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-md-5 form-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 33
      }
    }, __jsx("button", {
      onClick: this.props.handleSubmitedOrder,
      className: _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.save,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 37
      }
    }, "save & place order"))))));
  }

}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetails,
  chooseMedicines: state.chooseMedicines,
  prescription: state.prescription
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Address));

/***/ }),

/***/ "./components/MyCartFlow/Address/AddressDetails/AddressDetails.module.scss":
/*!*********************************************************************************!*\
  !*** ./components/MyCartFlow/Address/AddressDetails/AddressDetails.module.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"stateCol": "AddressDetails_stateCol__2aacs",
	"formSelect": "AddressDetails_formSelect__Tat9j",
	"addForm": "AddressDetails_addForm__2eU0g",
	"addressItem": "AddressDetails_addressItem__NSROy",
	"deliverFlip": "AddressDetails_deliverFlip__2fe84",
	"addressDetails": "AddressDetails_addressDetails__2Xhrq",
	"save": "AddressDetails_save__1EMvy",
	"place": "AddressDetails_place__3B9sr",
	"addressCards": "AddressDetails_addressCards__3FLc9",
	"address": "AddressDetails_address__2kX0d",
	"toggleBtn": "AddressDetails_toggleBtn__3DFdc",
	"toggleBack": "AddressDetails_toggleBack__DafgB",
	"option": "AddressDetails_option__14avn"
};


/***/ }),

/***/ "./components/MyCartFlow/Address/AddressDetails/index.js":
/*!***************************************************************!*\
  !*** ./components/MyCartFlow/Address/AddressDetails/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddressCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AddressCard */ "./components/MyCartFlow/Address/AddressCard/index.js");
/* harmony import */ var _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddressDetails.module.scss */ "./components/MyCartFlow/Address/AddressDetails/AddressDetails.module.scss");
/* harmony import */ var _AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AddressDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Address */ "./components/MyCartFlow/Address/AddressDetails/Address.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\Address\\AddressDetails\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function AddressDetails(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  return __jsx(_Address__WEBPACK_IMPORTED_MODULE_6__["default"], {
    router: router,
    dispatch: dispatch,
    handleSubmitedOrder: props.handleSubmitedOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  });
}

/***/ }),

/***/ "./components/MyCartFlow/Address/index.js":
/*!************************************************!*\
  !*** ./components/MyCartFlow/Address/index.js ***!
  \************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddressDetails_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddressDetails/index */ "./components/MyCartFlow/Address/AddressDetails/index.js");
/* harmony import */ var _Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Attached Prescriptions/index */ "./components/MyCartFlow/Attached Prescriptions/index.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\Address\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Address extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmited", () => {
      console.log("props working fine");
      this.props.handleSubmitedOrder();
    });
  }

  componentDidMount() {
    console.log("sdfgsfghsfghfg", this.props, this.props.match);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-md-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, __jsx(_AddressDetails_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      handleSubmitedOrder: this.handleSubmited,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "col-md-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx(_Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    })))));
  }

}

/***/ }),

/***/ "./components/MyCartFlow/Attached Prescriptions/AttachedPrescription.module.scss":
/*!***************************************************************************************!*\
  !*** ./components/MyCartFlow/Attached Prescriptions/AttachedPrescription.module.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"attachedPrescription": "AttachedPrescription_attachedPrescription__2t1np",
	"swiper-pagination-fraction": "AttachedPrescription_swiper-pagination-fraction__1g66S",
	"swiper-pagination-custom": "AttachedPrescription_swiper-pagination-custom__2998c",
	"swiper-container-horizontal": "AttachedPrescription_swiper-container-horizontal__o0isP",
	"swiper-pagination-bullets": "AttachedPrescription_swiper-pagination-bullets__1VoMy",
	"swiper-pagination-bullet-active": "AttachedPrescription_swiper-pagination-bullet-active__3hjkr",
	"prescriptionRightBox": "AttachedPrescription_prescriptionRightBox__5SaPh",
	"prescriptionAttachContainer": "AttachedPrescription_prescriptionAttachContainer__-CXfV",
	"attachedPrescription1": "AttachedPrescription_attachedPrescription1__3QBeK",
	"prescriptionTickmark": "AttachedPrescription_prescriptionTickmark__38Kuw",
	"prescriptionImage": "AttachedPrescription_prescriptionImage__3gqLC",
	"iconsList": "AttachedPrescription_iconsList__1q1f_"
};


/***/ }),

/***/ "./components/MyCartFlow/Attached Prescriptions/index.js":
/*!***************************************************************!*\
  !*** ./components/MyCartFlow/Attached Prescriptions/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttachedPrescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachedPrescription.module.scss */ "./components/MyCartFlow/Attached Prescriptions/AttachedPrescription.module.scss");
/* harmony import */ var _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\Attached Prescriptions\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import delete1 from  '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import tick from '/tickmark.png';




swiper__WEBPACK_IMPORTED_MODULE_1___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_1__["A11y"]]);
function AttachedPrescription() {
  const {
    0: prescriptionsList,
    1: setPrescriptionsList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: '1',
    img: ''
  }, {
    id: '2',
    img: ''
  }]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.attachedPrescription} font-weight-bold`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Attached Prescription"), __jsx("div", {
    className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionRightBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    onSwiper: swiper => console.log(swiper),
    onSlideChange: () => console.log('slide change'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, prescriptionsList.map((prescriptions, ind) => {
    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionAttachContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.attachedPrescription1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionTickmark,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/tickmark.png',
      alt: "tickmark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/prescription-img.png',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconsList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/delete1.png',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/view.png',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/download.png',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 41
      }
    })))));
  }))));
}

/***/ }),

/***/ "./components/MyCartFlow/CartDetails.module.scss":
/*!*******************************************************!*\
  !*** ./components/MyCartFlow/CartDetails.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"indication": "CartDetails_indication__2Ywmj",
	"buttonsContainer": "CartDetails_buttonsContainer__df9rl",
	"prevBtn": "CartDetails_prevBtn__3ZcGa",
	"nextBtn": "CartDetails_nextBtn__2Qdu5",
	"stepperContainerHorizontal": "CartDetails_stepperContainerHorizontal__3L8VW"
};


/***/ }),

/***/ "./components/MyCartFlow/CartPage/CartPageComponent.module.scss":
/*!**********************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/CartPageComponent.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"medicineDetail": "CartPageComponent_medicineDetail__248Sk",
	"indication": "CartPageComponent_indication__31piA"
};


/***/ }),

/***/ "./components/MyCartFlow/CartPage/index.js":
/*!*************************************************!*\
  !*** ./components/MyCartFlow/CartPage/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CartPage_medicineDetail_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CartPage/medicineDetail/index */ "./components/MyCartFlow/CartPage/medicineDetail/index.js");
/* harmony import */ var _CartPage_relatedProduct_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CartPage/relatedProduct/index */ "./components/MyCartFlow/CartPage/relatedProduct/index.js");
/* harmony import */ var _CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartPageComponent.module.scss */ "./components/MyCartFlow/CartPage/CartPageComponent.module.scss");
/* harmony import */ var _CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\CartPage\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CartPageComponent(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx(_CartPage_medicineDetail_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleProceed: props.handleProceed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (CartPageComponent);

/***/ }),

/***/ "./components/MyCartFlow/CartPage/medicineDetail/MedicineDetail.module.scss":
/*!**********************************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/medicineDetail/MedicineDetail.module.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"background": "MedicineDetail_background__96XXG",
	"img": "MedicineDetail_img__rmDmN",
	"category": "MedicineDetail_category__16sUZ",
	"name": "MedicineDetail_name__19_1l",
	"manufacturer": "MedicineDetail_manufacturer__1C7rx",
	"quantity": "MedicineDetail_quantity__FUBKo",
	"quantityBtns": "MedicineDetail_quantityBtns__3M9P0",
	"cart": "MedicineDetail_cart__3Z-8w",
	"priceRequest": "MedicineDetail_priceRequest__1q1vo",
	"btnMatch": "MedicineDetail_btnMatch__2DcIL",
	"price": "MedicineDetail_price__1EXKS",
	"discount": "MedicineDetail_discount__2GBMU",
	"original": "MedicineDetail_original__1Aant",
	"tdCol": "MedicineDetail_tdCol__1M3r2",
	"cartpiImg": "MedicineDetail_cartpiImg__3esZp"
};


/***/ }),

/***/ "./components/MyCartFlow/CartPage/medicineDetail/index.js":
/*!****************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/medicineDetail/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _orderSummary_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderSummary/index */ "./components/MyCartFlow/CartPage/orderSummary/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions */ "./actions.js");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MedicineDetail.module.scss */ "./components/MyCartFlow/CartPage/medicineDetail/MedicineDetail.module.scss");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../apiVariables */ "./apiVariables.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\CartPage\\medicineDetail\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MedicineDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "removeFromCart", async id => {
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_apiVariables__WEBPACK_IMPORTED_MODULE_5__["products_url"]}/cart/${id}`).then(res => {
        console.log(res);
      });
      this.fetchCart();
    });

    _defineProperty(this, "fetchCart", async id => {
      //let userId = "601cd4f10787cd421e6f6acc";
      let {
        userDetail
      } = this.props;
      const api = `${_apiVariables__WEBPACK_IMPORTED_MODULE_5__["products_url"]}/cart?userId=${userDetail.userId}`;
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(api).then(res => {
        this.setState({
          cartProducts: res.data.data.cartData,
          cartDetails: res.data.data
        });
        this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["cartProduct"])(res.data.data.cartData));
      });
    });

    this.state = {
      cartProducts: [],
      cartDetails: {}
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  render() {
    let {
      cartProducts,
      cartDetails
    } = this.state;
    return __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "col-md-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, "Items Prescription Required"), cartProducts && cartProducts.length !== 0 ? cartProducts.map((product, ind) => {
      let {
        _id,
        medicineName,
        manufacturer,
        price,
        priceToCustomer
      } = product;
      return __jsx("div", {
        key: ind,
        className: "mt-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 24
        }
      }, __jsx("div", {
        className: "col-md-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.background,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 31
        }
      }, __jsx("img", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.img,
        src: '/product-3.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 35
        }
      }))), __jsx("div", {
        className: "col-md-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.category,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 31
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 35
        }
      }, "Diabetes")), __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 31
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 35
        }
      }, medicineName), __jsx("img", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cartpiImg,
        src: '/prescription.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 35
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 31
        }
      }, __jsx("span", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.manufacturer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 35
        }
      }, "Manufacturer: ", manufacturer)), __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quantity,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 31
        }
      }, __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 35
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 39
        }
      }, __jsx("tr", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.quantityBtns,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 43
        }
      }, __jsx("td", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tdCol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 47
        }
      }, __jsx("img", {
        src: '/+.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 76
        }
      })), __jsx("td", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tdCol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 47
        }
      }, product.qty), __jsx("td", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tdCol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 47
        }
      }, __jsx("img", {
        src: '/-.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 76
        }
      }))))))), __jsx("div", {
        className: `col-md-4 ${_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.priceRequest}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 27
        }
      }, __jsx("img", {
        onClick: () => this.removeFromCart(_id),
        src: '/remove-cart.png',
        alt: "remove-cart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 31
        }
      }), __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.price,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 31
        }
      }, __jsx("b", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.discount,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 35
        }
      }, "\u20B9", price), __jsx("span", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.original,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 35
        }
      }, "MRP \u20B9", price)))), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 23
        }
      }));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 16
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }, "Your Cart is Empty"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 46
      }
    }, "Please Add products to the cart")), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }
    }, "Items NOT Prescription Required")), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }
    }, __jsx(_orderSummary_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      cartDetails: cartDetails,
      handleProceed: this.props.handleProceed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    })));
  }

}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetails,
  cartDetail: state.cartDetail,
  productList: state.productList
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(MedicineDetail));

/***/ }),

/***/ "./components/MyCartFlow/CartPage/orderSummary/NeedSigin.js":
/*!******************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/orderSummary/NeedSigin.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NeedSignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NeedSigin.module.scss */ "./components/MyCartFlow/CartPage/orderSummary/NeedSigin.module.scss");
/* harmony import */ var _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\CartPage\\orderSummary\\NeedSigin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import cancel from '/cancel.png';



function NeedSignIn(props) {
  let {
    modal,
    toggle
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modals,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.needSignin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("img", {
    onClick: toggle,
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cancelImg,
    src: '/cancel.png',
    alt: "cancel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: `row ${_NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ptMsg}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Need To Sigin!")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.needSignInBtns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cancelBtn,
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "Cancel"), __jsx("button", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.signinBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, "SignIn"))))));
}

/***/ }),

/***/ "./components/MyCartFlow/CartPage/orderSummary/NeedSigin.module.scss":
/*!***************************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/orderSummary/NeedSigin.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modals": "NeedSigin_modals__3qqpb",
	"needSignin": "NeedSigin_needSignin__WgZMt",
	"ptMsg": "NeedSigin_ptMsg__3M20b",
	"cancelImg": "NeedSigin_cancelImg__1r4Di",
	"needSignInBtns": "NeedSigin_needSignInBtns__3mN4x",
	"signinBtn": "NeedSigin_signinBtn__3DUr3",
	"cancelBtn": "NeedSigin_cancelBtn__3ANIB",
	"paymentMsg": "NeedSigin_paymentMsg__3QmBa"
};


/***/ }),

/***/ "./components/MyCartFlow/CartPage/orderSummary/OrderSummary.module.scss":
/*!******************************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/orderSummary/OrderSummary.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summaryBox": "OrderSummary_summaryBox__1Ymmx",
	"orderSummary": "OrderSummary_orderSummary__2cP5s",
	"right": "OrderSummary_right__e88x_",
	"details": "OrderSummary_details__3EBBG",
	"orderTotal": "OrderSummary_orderTotal__30Hho",
	"proceed": "OrderSummary_proceed__3xpwU",
	"btnProceed": "OrderSummary_btnProceed__DwRqM",
	"btnPrescription": "OrderSummary_btnPrescription__3HmiD",
	"btnPrice": "OrderSummary_btnPrice__1ObjE",
	"couponBox": "OrderSummary_couponBox__1EJ7r",
	"apply": "OrderSummary_apply__uJE7c",
	"applyField": "OrderSummary_applyField__jpkib",
	"btnCode": "OrderSummary_btnCode__GNXv5",
	"couponNote": "OrderSummary_couponNote__3UiTa"
};


/***/ }),

/***/ "./components/MyCartFlow/CartPage/orderSummary/index.js":
/*!**************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/orderSummary/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderSummary.module.scss */ "./components/MyCartFlow/CartPage/orderSummary/OrderSummary.module.scss");
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NeedSigin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NeedSigin */ "./components/MyCartFlow/CartPage/orderSummary/NeedSigin.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\CartPage\\orderSummary\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function OrderSummary(props) {
  const {
    0: deliveryCharge,
    1: setDeliveryCharge
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(40);
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => {
    setModal(!modal);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.summaryBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.orderSummary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Order Summary")), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Cart Value"), __jsx("span", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "\u20B9", props.total)), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "Delivery Charge"), __jsx("span", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "\u20B9", deliveryCharge)), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Saved Amount"), __jsx("span", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "\u20B9", props.savedAmount)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.orderTotal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "Order Total"), __jsx("b", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "\u20B9", props.total != 0 ? (props.total + deliveryCharge - props.savedAmount).toFixed(2) : 0)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.proceed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnProceed,
    onClick: props.handleProceed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 93
    }
  }, "PROCEED TO BUY")))), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.couponBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.apply,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "APPLY COUPONS"), __jsx("input", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.applyField,
    type: "text",
    placeholder: "Apply coupon code here",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 56
    }
  }, "APPLY CODE"))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.couponNote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "ORDER ABOVE \u20B9500 TO SAVE ON DELIVERY CHARGES. FREE DELIVERY WITH CART VALUE ABOVE \u20B91000")), __jsx(_NeedSigin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modal: modal,
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (OrderSummary);

/***/ }),

/***/ "./components/MyCartFlow/CartPage/relatedProduct/RelatedProduct.module.scss":
/*!**********************************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/relatedProduct/RelatedProduct.module.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"alignCenter": "RelatedProduct_alignCenter__1tPwm",
	"image": "RelatedProduct_image__3vrYF",
	"productCategory": "RelatedProduct_productCategory__F-wPz",
	"right": "RelatedProduct_right__3mofE",
	"productName": "RelatedProduct_productName__3g_go",
	"discountPrice": "RelatedProduct_discountPrice__3q1Pn",
	"actualPrice": "RelatedProduct_actualPrice__110ak",
	"btnArrow": "RelatedProduct_btnArrow__26sPM",
	"btnView": "RelatedProduct_btnView__M5EBY"
};


/***/ }),

/***/ "./components/MyCartFlow/CartPage/relatedProduct/index.js":
/*!****************************************************************!*\
  !*** ./components/MyCartFlow/CartPage/relatedProduct/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedProduct.module.scss */ "./components/MyCartFlow/CartPage/relatedProduct/RelatedProduct.module.scss");
/* harmony import */ var _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\CartPage\\relatedProduct\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import {Link} from 'react-router-dom';




function RelatedProduct() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    speciality: 'Diabetics',
    quantity: '10 Tablets',
    name: 'Bifilac Tablets',
    company: 'Natures Velvet Lifecare',
    actualPrice: '200',
    discountPrice: '150'
  }, {
    speciality: 'Diabetics',
    quantity: '10 Tablets',
    name: 'Bifilac Tablets',
    company: 'Natures Velvet Lifecare',
    actualPrice: '200',
    discountPrice: '150'
  }, {
    speciality: 'Diabetics',
    quantity: '10 Tablets',
    name: 'Bifilac Tablets',
    company: 'Natures Velvet Lifecare',
    actualPrice: '200',
    discountPrice: '150'
  }, {
    speciality: 'Diabetics',
    quantity: '10 Tablets',
    name: 'Bifilac Tablets',
    company: 'Natures Velvet Lifecare',
    actualPrice: '200',
    discountPrice: '150'
  }]);
  let productList = products.map((value, index) => {
    return __jsx("div", {
      key: index,
      className: "col-md-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.alignCenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: '/product-3.png',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productCategory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, value.speciality), __jsx("div", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }, value.quantity))), __jsx("b", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, value.name), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }), __jsx("span", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productCategory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, "Manufacturer: ", value.company), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }), __jsx("b", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.discountPrice,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, "\u20B9 ", value.discountPrice), __jsx("span", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actualPrice,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, "MRP \u20B9 ", value.actualPrice), __jsx("div", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx("button", {
      className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnArrow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: '/arrow.png',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 65
      }
    })))));
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, productList), __jsx("div", {
    className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.alignCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => router.push('/ShopProductComponent'),
    className: _RelatedProduct_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 113
    }
  }, "VIEW MORE"))));
}

/* harmony default export */ __webpack_exports__["default"] = (RelatedProduct);

/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/AttachedPrescription.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/Attached Prescriptions/AttachedPrescription.module.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"attachedPrescription": "AttachedPrescription_attachedPrescription__2VMzB",
	"swiper-pagination-fraction": "AttachedPrescription_swiper-pagination-fraction__2tyLa",
	"swiper-pagination-custom": "AttachedPrescription_swiper-pagination-custom__1o23n",
	"swiper-container-horizontal": "AttachedPrescription_swiper-container-horizontal__3TehF",
	"swiper-pagination-bullets": "AttachedPrescription_swiper-pagination-bullets__2Wq--",
	"swiper-pagination-bullet-active": "AttachedPrescription_swiper-pagination-bullet-active__QTB1P",
	"prescriptionRightBox": "AttachedPrescription_prescriptionRightBox__kpa7H",
	"prescriptionAttachContainer": "AttachedPrescription_prescriptionAttachContainer__1q7L-",
	"attachedPrescription1": "AttachedPrescription_attachedPrescription1__mOsKX",
	"prescriptionTickmark": "AttachedPrescription_prescriptionTickmark__c9TP6",
	"prescriptionImage": "AttachedPrescription_prescriptionImage__3cCRv",
	"iconsList": "AttachedPrescription_iconsList__3i3LB"
};


/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js":
/*!*****************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttachedPrescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachedPrescription.module.scss */ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/AttachedPrescription.module.scss");
/* harmony import */ var _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\OrderSummarys\\Attached Prescriptions\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import delete1 from  '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import tick from '/tickmark.png';




swiper__WEBPACK_IMPORTED_MODULE_1___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_1__["A11y"]]);
function AttachedPrescription(props) {
  const {
    0: prescriptionsList,
    1: setPrescriptionsList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: '1',
    img: ''
  }, {
    id: '2',
    img: ''
  }]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.attachedPrescription} font-weight-bold`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Attached Prescription")), __jsx("div", {
    className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionRightBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    onSwiper: swiper => console.log(swiper),
    onSlideChange: () => console.log('slide change'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, props.cartProducts && props.cartProducts.prescriptionUrls ? props.cartProducts.prescriptionUrls.map((prescriptions, ind) => {
    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionAttachContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.attachedPrescription1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, console.log("asdfgsdhgghfg", props, prescriptions), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionTickmark,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/tickmark.png',
      alt: "tickmark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: prescriptions,
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconsList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/delete.png',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/ev.svg',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/download.png',
      alt: "prescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 41
      }
    })))));
  }) : "")));
}

/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/CartPageComponent.module.scss":
/*!***************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/CartPageComponent.module.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"medicineDetail": "CartPageComponent_medicineDetail__2em6J",
	"indication": "CartPageComponent_indication__1KGkF"
};


/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/index.js":
/*!******************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _medicineDetail_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicineDetail/index */ "./components/MyCartFlow/OrderSummarys/medicineDetail/index.js");
/* harmony import */ var _CartPage_relatedProduct_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CartPage/relatedProduct/index */ "./components/MyCartFlow/CartPage/relatedProduct/index.js");
/* harmony import */ var _CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartPageComponent.module.scss */ "./components/MyCartFlow/OrderSummarys/CartPageComponent.module.scss");
/* harmony import */ var _CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\OrderSummarys\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CartPageComponent(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _CartPageComponent_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.medicineDetail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Medicines Details")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_medicineDetail_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (CartPageComponent);

/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/medicineDetail/MedicineDetail.module.scss":
/*!***************************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/medicineDetail/MedicineDetail.module.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"background": "MedicineDetail_background__1DJ-j",
	"img": "MedicineDetail_img__D7Ceu",
	"category": "MedicineDetail_category__1RAZN",
	"name": "MedicineDetail_name__4CRzK",
	"manufacturer": "MedicineDetail_manufacturer__1kOC8",
	"quantity": "MedicineDetail_quantity__2Yrms",
	"quantityBtns": "MedicineDetail_quantityBtns__19--Z",
	"cart": "MedicineDetail_cart__1YiAu",
	"priceRequest": "MedicineDetail_priceRequest__28Taa",
	"btnMatch": "MedicineDetail_btnMatch__2E30I",
	"price": "MedicineDetail_price__Za_jB",
	"discount": "MedicineDetail_discount__1EcLq",
	"original": "MedicineDetail_original__gfJvF",
	"tdCol": "MedicineDetail_tdCol__Kqyfo",
	"cartpiImg": "MedicineDetail_cartpiImg__bQmtf"
};


/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/medicineDetail/index.js":
/*!*********************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/medicineDetail/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _orderSummary_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orderSummary/index */ "./components/MyCartFlow/OrderSummarys/orderSummary/index.js");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MedicineDetail.module.scss */ "./components/MyCartFlow/OrderSummarys/medicineDetail/MedicineDetail.module.scss");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../apiVariables */ "./apiVariables.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\OrderSummarys\\medicineDetail\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MedicineDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "componentDidMount", () => {
      this.getOrderDetail();
    });

    _defineProperty(this, "getOrderDetail", async () => {
      let {
        cartProducts
      } = this.state;
      let {
        userDetail
      } = this.props;
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_apiVariables__WEBPACK_IMPORTED_MODULE_5__["orders_url"]}/order/600e55d85b94cc6bcca44ef2`).then(res => {
        let obj = res.data.data;
        cartProducts = res.data.data;
        this.setState({
          cartProducts
        }); // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
      });
    });

    this.state = {
      cartProducts: []
    };
  }

  render() {
    let {
      cartProducts
    } = this.state;
    return __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, cartProducts && cartProducts.items && cartProducts.items.length > 0 ? cartProducts.items.map((product, ind) => {
      return __jsx("div", {
        key: ind,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 34
        }
      }, __jsx("div", {
        className: "col-md-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.background,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 41
        }
      }, __jsx("img", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img,
        src: '/product-3.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 45
        }
      }))), __jsx("div", {
        className: "col-md-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.category,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 41
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 45
        }
      }, "Diabetes")), __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 41
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 45
        }
      }, product.medicineName), __jsx("img", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cartpiImg,
        src: '/prescription.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 45
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 41
        }
      }, __jsx("span", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.manufacturer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 45
        }
      }, product.manufacturer)), __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.quantity,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 41
        }
      }, __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 45
        }
      }, __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 49
        }
      }, __jsx("tr", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.quantityBtns,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 53
        }
      }, __jsx("td", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tdCol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 57
        }
      }, __jsx("img", {
        src: '/+.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 86
        }
      })), __jsx("td", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tdCol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 57
        }
      }, product.quantity), __jsx("td", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tdCol,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 57
        }
      }, __jsx("img", {
        src: '/-.png',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 86
        }
      }))))))), __jsx("div", {
        className: `col-md-4 ${_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.priceRequest}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 37
        }
      }, __jsx("img", {
        src: '/remove-cart.png',
        alt: "remove-cart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 41
        }
      }), __jsx("div", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.price,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 41
        }
      }, __jsx("b", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.discount,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 45
        }
      }, "\u20B9", product.price), __jsx("span", {
        className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.original,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 45
        }
      }, "MRP \u20B9", product.itemPrice)))), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 33
        }
      }));
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 26
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 31
      }
    }, "Your Cart is Empty"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 56
      }
    }, "Please Add products to the cart"))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, __jsx(_orderSummary_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      total: 500,
      savedAmount: 100,
      cartProducts: cartProducts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    })));
  }

}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetails,
  chooseMedicines: state.chooseMedicines,
  prescription: state.prescription
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(MedicineDetail));

/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.js":
/*!***********************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NeedSignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NeedSigin.module.scss */ "./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.module.scss");
/* harmony import */ var _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\OrderSummarys\\orderSummary\\NeedSigin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import cancel from './cancel.png';



function NeedSignIn(props) {
  let {
    modal,
    toggle
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modals,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.needSignin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("img", {
    onClick: toggle,
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cancelImg,
    src: './cancel.png',
    alt: "cancel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: `row ${_NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ptMsg}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Need To Sigin!")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.needSignInBtns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cancelBtn,
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "Cancel"), __jsx("button", {
    className: _NeedSigin_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.signinBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, "SignIn"))))));
}

/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.module.scss":
/*!********************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.module.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modals": "NeedSigin_modals__2h7yy",
	"needSignin": "NeedSigin_needSignin__31gna",
	"ptMsg": "NeedSigin_ptMsg__XsxI_",
	"cancelImg": "NeedSigin_cancelImg__iGSzX",
	"needSignInBtns": "NeedSigin_needSignInBtns__3Revr",
	"signinBtn": "NeedSigin_signinBtn__1kPRC",
	"cancelBtn": "NeedSigin_cancelBtn__3npYs",
	"paymentMsg": "NeedSigin_paymentMsg__10UZ-"
};


/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/orderSummary/OrderSummary.module.scss":
/*!***********************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/orderSummary/OrderSummary.module.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summaryBox": "OrderSummary_summaryBox__2g1BH",
	"orderSummary": "OrderSummary_orderSummary__1F_lH",
	"right": "OrderSummary_right__mLq0X",
	"details": "OrderSummary_details__1xZws",
	"orderTotal": "OrderSummary_orderTotal__3hVoK",
	"proceed": "OrderSummary_proceed__dUjyB",
	"btnProceed": "OrderSummary_btnProceed__1rd6J",
	"btnPrescription": "OrderSummary_btnPrescription__rsGGO",
	"btnPrice": "OrderSummary_btnPrice__SFfI_",
	"couponBox": "OrderSummary_couponBox__1qxZ9",
	"apply": "OrderSummary_apply__2G__X",
	"applyField": "OrderSummary_applyField__1aLUR",
	"btnCode": "OrderSummary_btnCode__SEQ5e",
	"couponNote": "OrderSummary_couponNote__17IeM",
	"mddelivery__details__container": "OrderSummary_mddelivery__details__container__24Mkj",
	"mddelivery__details": "OrderSummary_mddelivery__details__Vi7Sw",
	"mddelivery__inner_sec": "OrderSummary_mddelivery__inner_sec__1VCUp",
	"changeBtn": "OrderSummary_changeBtn__2lXEp",
	"report_order1": "OrderSummary_report_order1__o_pSw",
	"mddelPersonInnerContainer": "OrderSummary_mddelPersonInnerContainer__1TbUK",
	"mddelPersonInnnerLeft": "OrderSummary_mddelPersonInnnerLeft__3wmWv",
	"mddel_person_name": "OrderSummary_mddel_person_name__3I70-",
	"mddel_person_number": "OrderSummary_mddel_person_number__2qJZx",
	"mddel_person_innerRight": "OrderSummary_mddel_person_innerRight__3rAy5",
	"mdstreet": "OrderSummary_mdstreet__3PExo"
};


/***/ }),

/***/ "./components/MyCartFlow/OrderSummarys/orderSummary/index.js":
/*!*******************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/orderSummary/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderSummary.module.scss */ "./components/MyCartFlow/OrderSummarys/orderSummary/OrderSummary.module.scss");
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NeedSigin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NeedSigin */ "./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.js");
/* harmony import */ var _Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Attached Prescriptions/index */ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js");
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../apiVariables */ "./apiVariables.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\OrderSummarys\\orderSummary\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class OrderSummary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setDeliveryCharge", () => {});

    _defineProperty(this, "setModal", () => {
      let {
        modal
      } = this.state;
      modal = !modal;
      this.setState({
        modal
      });
    });

    this.state = {
      deliveryCharge: 40,
      modal: false
    };
  }

  render() {
    let {
      deliveryCharge,
      modal
    } = this.state;
    let {
      cartProducts
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.summaryBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.orderSummary,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, "Order Summary")), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, "Cart Value"), __jsx("span", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, "\u20B9", cartProducts.totalPrice)), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, "Delivery Charge"), __jsx("span", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, "\u20B9", cartProducts.deliveryPrice)), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }, "Saved Amount", __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 43
      }
    }, "(COUPON APPLIED)")), __jsx("span", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, "\u20B9", cartProducts.savedAmount)), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.orderTotal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, "Order Total"), __jsx("b", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, "\u20B9", cartProducts.totalPrice ? (cartProducts.totalPrice + cartProducts.deliveryCharge - cartProducts.savedAmount).toFixed(2) : 0)), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.proceed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("button", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnProceed,
      onClick: this.setModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 87
      }
    }, "PROCEED TO PAY")), __jsx("button", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnPrescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 68
      }
    }, "Cancel Order")))), __jsx(_NeedSigin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      modal: modal,
      toggle: this.setModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddelivery__details__container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddelivery__details,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, "Delivery Details"), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddelivery__inner_sec,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: `${_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddelPersonInnerContainer} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddelPersonInnnerLeft,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddel_person_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, cartProducts.addressName), __jsx("p", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddel_person_number,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, cartProducts.addressMobile)), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mddel_person_innerRight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, cartProducts.addressType == 0 ? "Home" : cartProducts.addressType == 0 ? "Office" : "Others"))), __jsx("p", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mdstreet,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, cartProducts.address), __jsx("div", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changeBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx("button", {
      className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.report_order1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, "CHANGE")))), __jsx(_Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cartProducts: this.props.cartProducts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }));
  }

}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetails,
  chooseMedicines: state.chooseMedicines,
  prescription: state.prescription
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OrderSummary));

/***/ }),

/***/ "./components/MyCartFlow/Stepper/Stepper.module.scss":
/*!***********************************************************!*\
  !*** ./components/MyCartFlow/Stepper/Stepper.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"stepperWrapperHorizontal": "Stepper_stepperWrapperHorizontal__3mQbv",
	"stepWrapper": "Stepper_stepWrapper__1KVaO",
	"stepName": "Stepper_stepName__SOiA-",
	"stepNumber": "Stepper_stepNumber__ogJEi",
	"circle": "Stepper_circle__2iiI1",
	"dividerLine": "Stepper_dividerLine__3tc8X",
	"borderColor": "Stepper_borderColor__3867v",
	"dividerLine_1": "Stepper_dividerLine_1__Xuh1f",
	"dividerLine_2": "Stepper_dividerLine_2__2zdSH",
	"dividerLine_3": "Stepper_dividerLine_3__TxRjh",
	"dividerLine_4": "Stepper_dividerLine_4__3COBs",
	"dividerLine_5": "Stepper_dividerLine_5__3tYlV",
	"stepperWrapperVertical": "Stepper_stepperWrapperVertical__3vKuM",
	"stepDescription": "Stepper_stepDescription__1qq1I",
	"stepNumberSelected": "Stepper_stepNumberSelected__-x4vr",
	"stepNumberDisabled": "Stepper_stepNumberDisabled__3ppXw",
	"stepDescriptionActive": "Stepper_stepDescriptionActive__1aybz"
};


/***/ }),

/***/ "./components/MyCartFlow/Stepper/index.js":
/*!************************************************!*\
  !*** ./components/MyCartFlow/Stepper/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UploadPrescription_UploadPrescriptions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UploadPrescription/UploadPrescriptions/index */ "./components/UploadPrescription/UploadPrescriptions/index.js");
/* harmony import */ var _Address_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Address/index */ "./components/MyCartFlow/Address/index.js");
/* harmony import */ var _CartPage_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CartPage/index */ "./components/MyCartFlow/CartPage/index.js");
/* harmony import */ var _OrderSummarys_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OrderSummarys/index */ "./components/MyCartFlow/OrderSummarys/index.js");
/* harmony import */ var _Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stepper.module.scss */ "./components/MyCartFlow/Stepper/Stepper.module.scss");
/* harmony import */ var _Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UploadPrescription_UploadPrescriptions_PresPopup_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UploadPrescription/UploadPrescriptions/PresPopup/index */ "./components/UploadPrescription/UploadPrescriptions/PresPopup/index.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\Stepper\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CartStepper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleProceed", () => {
      let {
        step
      } = this.state;
      this.setState({
        step: step + 1
      });
      this.props.handleStepper();
    });

    _defineProperty(this, "toggle", () => {
      let {
        modal
      } = this.state;
      modal = !modal;
      this.setState({
        modal
      });
    });

    this.state = {
      steps: [],
      modal: false
    };
  }

  componentDidMount() {
    const {
      steps,
      currentStepNumber
    } = this.props;
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      stepObj.completed = false;
      return stepObj;
    });
    const currentSteps = this.updateStep(currentStepNumber, stepsState);
    this.setState({
      steps: currentSteps
    });
  }

  componentDidUpdate(prevProps) {
    const {
      steps
    } = this.state;
    const currentSteps = this.updateStep(this.props.currentStepNumber, steps);
    if (prevProps.currentStepNumber !== this.props.currentStepNumber) this.setState({
      steps: currentSteps
    });
  }

  updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0; // Completed - to add a check mark
    // Selected - to fill step with color
    // Highlighted - to make text of selected step bold

    while (stepCounter < newSteps.length) {
      // Current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = _objectSpread(_objectSpread({}, newSteps[stepCounter]), {}, {
          highlighted: true,
          selected: true,
          completed: false
        });
        stepCounter++;
      } // Past step
      else if (stepCounter < stepNumber) {
          newSteps[stepCounter] = _objectSpread(_objectSpread({}, newSteps[stepCounter]), {}, {
            highlighted: false,
            selected: true,
            completed: true
          });
          stepCounter++;
        } // Future step
        else {
            newSteps[stepCounter] = _objectSpread(_objectSpread({}, newSteps[stepCounter]), {}, {
              highlighted: false,
              selected: false,
              completed: false
            });
            stepCounter++;
          }
    }

    return newSteps;
  }

  render() {
    const {
      direction,
      stepColor = "violet"
    } = this.props;
    const {
      steps
    } = this.state;
    const stepsJSX = steps.map((step, index) => {
      return __jsx("div", {
        className: _Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepWrapper,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepNumber} ${step.selected ? `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepNumberSelected}` : `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepNumberDisabled}`}`,
        style: {
          background: `${step.selected ? stepColor : "none"}`
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.circle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 23
        }
      })), step.completed ? "" : ""), __jsx("div", {
        className: `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepDescription} ${step.highlighted && `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepDescriptionActive}`}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }
      }, step.description), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: _Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stepName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, "Step ", index + 1)), index !== steps.length - 1 && __jsx("div", {
        className: `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['dividerLine']} ${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a[`dividerLine_${steps.length}`]} ${step.completed ? `${_Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.borderColor}` : ""}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      }));
    });
    const st = `stepperWrapper${direction}`;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: _Stepper_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a[st],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, stepsJSX), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, this.props.currentStepNumber === 0 ? __jsx(_UploadPrescription_UploadPrescriptions_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 47
      }
    }) : "", this.props.currentStepNumber === 1 ? __jsx(_CartPage_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleProceed: this.handleProceed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 47
      }
    }) : "", this.props.currentStepNumber === 2 ? __jsx(_Address_index__WEBPACK_IMPORTED_MODULE_3__["Address"], {
      handleSubmitedOrder: this.handleProceed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 47
      }
    }) : "", this.props.currentStepNumber === 3 ? __jsx(_OrderSummarys_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      handleSubmitedOrder: this.toggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 47
      }
    }) : ""), __jsx(_UploadPrescription_UploadPrescriptions_PresPopup_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
      modal: this.state.modal,
      toggle: this.toggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }
    }));
  }

}
CartStepper.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  currentStepNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  steps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  stepColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./components/MyCartFlow/index.js":
/*!****************************************!*\
  !*** ./components/MyCartFlow/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepperMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stepper_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stepper/index */ "./components/MyCartFlow/Stepper/index.js");
/* harmony import */ var _CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartDetails.module.scss */ "./components/MyCartFlow/CartDetails.module.scss");
/* harmony import */ var _CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./actions.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\MyCartFlow\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// export {OrderSuccess} from './OrderSuccessFull/index';
// export {Address} from './Address/index';
// export {Payment} from './Payment/index';
// //export {UploadPrescriptions} from './UploadPrescriptions/index';






function StepperMain() {
  const {
    0: currentStep,
    1: setCurrentStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  const handleClick = clickType => {
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      setCurrentStep(newStep);
    }
  };

  const handleDispatch = async data => {
    console.log("fdgsdfgsdfg", data);
    await dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["uploadPrescriptions"])(data));
  };

  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: `col-md-12 ${_CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.indication}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx("span", {
    onClick: () => router.push('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Home >"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 70
    }
  }, "Cart Details"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "My Cart"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stepperContainerHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_Stepper_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    direction: "Horizontal",
    currentStepNumber: currentStep - 1,
    steps: stepsArray,
    stepColor: "#6054E5",
    handleStepper: () => handleClick("next"),
    dispatch: data => handleDispatch(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: _CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.prevBtn,
    onClick: () => handleClick(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Previous"), __jsx("button", {
    className: _CartDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nextBtn,
    onClick: () => handleClick("next"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Next")));
}
const stepsArray = [// "Create your account",
"Uploaded Prescription", "My Cart", "Add Address", "Order Summary", "Payment"];

/***/ }),

/***/ "./components/UploadPrescription/UploadPrescriptions/PresPopup/PresPopup.module.scss":
/*!*******************************************************************************************!*\
  !*** ./components/UploadPrescription/UploadPrescriptions/PresPopup/PresPopup.module.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modals": "PresPopup_modals__3aNCd",
	"order_MainContainer": "PresPopup_order_MainContainer__1ZHrO",
	"RegConfirmMain": "PresPopup_RegConfirmMain__3i7JN",
	"contact_mr": "PresPopup_contact_mr__179ip",
	"orderSuccessImg": "PresPopup_orderSuccessImg__qn7Ai",
	"mr_med_lower": "PresPopup_mr_med_lower__w9RBX",
	"contact_text": "PresPopup_contact_text__25Tk-",
	"mr_medcontact": "PresPopup_mr_medcontact__1P1S8",
	"enrolling_section": "PresPopup_enrolling_section__2KjEy",
	"explore_med": "PresPopup_explore_med__1-VYf",
	"explore_medBtn": "PresPopup_explore_medBtn__1bgKE"
};


/***/ }),

/***/ "./components/UploadPrescription/UploadPrescriptions/PresPopup/index.js":
/*!******************************************************************************!*\
  !*** ./components/UploadPrescription/UploadPrescriptions/PresPopup/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PresPopup.module.scss */ "./components/UploadPrescription/UploadPrescriptions/PresPopup/PresPopup.module.scss");
/* harmony import */ var _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\UploadPrescription\\UploadPrescriptions\\PresPopup\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // import stick from '/success.png';
// import cancel from '/closee.png';








const PresPopup = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(MyClass, _extends({}, props, {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }));
};

class MyClass extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      loc: props.router.query.loc,
      loaded: false
    };
  }

  componentDidMount() {
    console.log("sdfgsfghsfghfg", this.props);
  }

  render() {
    let {
      modal,
      toggle,
      router
    } = this.props;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: modal,
      toggle: toggle,
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modals,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: `row ${_PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.order_MainContainer} d-flex justify-content-center`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.RegConfirmMain,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }
    }, __jsx("div", {
      className: `${_PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contact_mr} d-flex justify-content-end`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: `${_PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.order_sec} d-flex justify-content-center`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx("img", {
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.orderSuccessImg,
      src: "/success.png",
      alt: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 22
      }
    })), __jsx("div", {
      className: `${_PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mr_med_lower} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contact_text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 22
      }
    }, __jsx("p", {
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mr_medcontact,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, "Thank You"), __jsx("p", {
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.enrolling_section,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, "We will reach you soon")), __jsx("div", {
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explore_med,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 22
      }
    }, __jsx("button", {
      onClick: () => router.push('/ShopProductComponent'),
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explore_medBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, "Continue Shopping"), __jsx("button", {
      onClick: () => router.push('/Accounts/Order'),
      className: _PresPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.explore_medBtn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, "My Orders")))))));
  }

}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetails,
  chooseMedicines: state.chooseMedicines,
  prescription: state.prescription
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PresPopup));

/***/ }),

/***/ "./components/UploadPrescription/UploadPrescriptions/UploadPrescriptions.module.scss":
/*!*******************************************************************************************!*\
  !*** ./components/UploadPrescription/UploadPrescriptions/UploadPrescriptions.module.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"uploadMainHead": "UploadPrescriptions_uploadMainHead__2DlgX",
	"uploadPresMainContainer": "UploadPrescriptions_uploadPresMainContainer__1w5AG",
	"uploadPresBox": "UploadPrescriptions_uploadPresBox__xoeNz",
	"validPrescrip": "UploadPrescriptions_validPrescrip__NssFh",
	"uploadImg": "UploadPrescriptions_uploadImg__2pwUT",
	"diffDocs": "UploadPrescriptions_diffDocs__1TrV2",
	"uploadFile": "UploadPrescriptions_uploadFile__1WO56",
	"prescripList": "UploadPrescriptions_prescripList__1d8cw",
	"prescripListtext": "UploadPrescriptions_prescripListtext__XPRPC",
	"uploadprescripCards": "UploadPrescriptions_uploadprescripCards__3J_3g",
	"uploadprescripAttachContainer": "UploadPrescriptions_uploadprescripAttachContainer__xnYcS",
	"uploadattachedPrescrip1": "UploadPrescriptions_uploadattachedPrescrip1__6w8D5",
	"uploadprescripTickmark": "UploadPrescriptions_uploadprescripTickmark__XXzsi",
	"uploadprescripImg": "UploadPrescriptions_uploadprescripImg__PdlRy",
	"uploadIconsList": "UploadPrescriptions_uploadIconsList__3TgL6",
	"uploadPrescripProceed": "UploadPrescriptions_uploadPrescripProceed__3yO4d",
	"uploadproceedButton": "UploadPrescriptions_uploadproceedButton__1g3Z3",
	"uploadPresBoxright": "UploadPrescriptions_uploadPresBoxright__3Jbv5",
	"validprescripImg": "UploadPrescriptions_validprescripImg__2iThy",
	"validTextend1": "UploadPrescriptions_validTextend1__3hJ4f",
	"blueTickImg": "UploadPrescriptions_blueTickImg___Df24",
	"upload_label": "UploadPrescriptions_upload_label__2sAHx",
	"upload_file": "UploadPrescriptions_upload_file__3USlt"
};


/***/ }),

/***/ "./components/UploadPrescription/UploadPrescriptions/index.js":
/*!********************************************************************!*\
  !*** ./components/UploadPrescription/UploadPrescriptions/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadPrescriptions.module.scss */ "./components/UploadPrescription/UploadPrescriptions/UploadPrescriptions.module.scss");
/* harmony import */ var _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiVariables */ "./apiVariables.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions */ "./actions.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\components\\UploadPrescription\\UploadPrescriptions\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import upload from '/upload.png';
// import delete1 from '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import tick from '/tickmark.png';
// import bluetick from '/bluetick.png';







class UploadPrescriptions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      uploadImages: []
    });

    _defineProperty(this, "handleFileUpload", async e => {
      let {
        uploadImages
      } = this.state;
      var formData = new FormData();
      let selectedFile = e.target.files[0];
      formData.append('file', selectedFile);
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_apiVariables__WEBPACK_IMPORTED_MODULE_2__["products_url"]}/upload/uploadFile/single`, formData).then(res => {
        let obj = res.data.data;
        uploadImages.push(obj);
        this.setState({
          uploadImages
        });
        this.props.dispatch(uploadImages); // this.props.dispatch(productList(res.data.data.list))
      });
    });
  }

  componentDidMount() {
    this.setState({
      uploadImages: []
    });
  }

  render() {
    let {
      uploadImages
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadMainHead} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, "Upload Prescription")), __jsx("div", {
      className: `row ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadPresMainContainer}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: `${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadPresBox}  d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "/upload.png",
      alt: "upload-image",
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 33
      }
    }), __jsx("p", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.diffDocs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }, "Drag & Drop or Browse files to upload photo of your", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 115
      }
    }), " prescription (JPG, PDF, Doc, etc.)"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    }, __jsx("label", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.upload_label,
      htmlFor: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.upload_file,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 37
      }
    }, "Browse Files"), __jsx("input", {
      onChange: this.handleFileUpload,
      type: "file",
      id: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.upload_file,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }))), __jsx("div", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.prescripList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.prescripListtext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }, "Upload Prescription"), __jsx("div", {
      className: `${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadprescripCards} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, uploadImages.length > 0 ? uploadImages.map((item, index) => {
      return __jsx("div", {
        className: `${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 49
        }
      }, __jsx("div", {
        className: `${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadattachedPrescrip1} d-flex`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 53
        }
      }, __jsx("div", {
        className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadprescripTickmark,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 57
        }
      }, __jsx("img", {
        src: "/tickmark.png",
        alt: "tickmark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 61
        }
      })), __jsx("div", {
        className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadprescripImg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 57
        }
      }, __jsx("img", {
        src: item.url,
        alt: "prescription-img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 61
        }
      })), __jsx("div", {
        className: `${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadIconsList} d-flex align-items-center`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 57
        }
      }, __jsx("img", {
        src: "/delete1.png",
        alt: "delete-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 61
        }
      }), __jsx("img", {
        src: "/view.png",
        alt: "view-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 61
        }
      }), __jsx("img", {
        src: "/download.png",
        alt: "download-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 61
        }
      }))));
    }) : ""), __jsx("div", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadPrescripProceed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, __jsx("button", {
      onClick: () => this.props.handleStep('next'),
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadproceedButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 37
      }
    }, "CONTINUE")))), __jsx("div", {
      className: `col-md-4 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.uploadPresBoxright}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validPrescrip}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 29
      }
    }, "What is a valid prescription?"), __jsx("img", {
      src: '/prescription-img.png',
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validprescripImg}`,
      alt: "valid-prescription image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "mt-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validTextend1} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/bluetick.png",
      alt: "bluetick-image",
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.blueTickImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 37
      }
    }), __jsx("p", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validtextEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 37
      }
    }, "Patient Details")), __jsx("div", {
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validTextend1} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/bluetick.png",
      alt: "bluetick-image",
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.blueTickImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 37
      }
    }), __jsx("p", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validtextEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 37
      }
    }, "Doctor\u2019s Details")), __jsx("div", {
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validTextend1} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: '/bluetick.png',
      alt: "bluetick-image",
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.blueTickImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 37
      }
    }), __jsx("p", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validtextEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 37
      }
    }, "Doctor\u2019s Sign + Stamp")), __jsx("div", {
      className: `col-md-12 ${_UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validTextend1} d-flex`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: '/bluetick.png',
      alt: "bluetick-image",
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.blueTickImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }), __jsx("p", {
      className: _UploadPrescriptions_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.validtextEnd,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 37
      }
    }, "Medicine Details")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UploadPrescriptions);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/CartDetails/index.js":
/*!************************************!*\
  !*** ./pages/CartDetails/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/index */ "./components/Header/index.js");
/* harmony import */ var _components_Footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer/index */ "./components/Footer/index.js");
/* harmony import */ var _components_MyCartFlow_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyCartFlow/index */ "./components/MyCartFlow/index.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mrmed\\pages\\CartDetails\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function CartDetails() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_Header_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_components_MyCartFlow_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(_components_Footer_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CartDetails);

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

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwaVZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4vQ2Fyb3VzZWxGb3JMb2dJbi9DYXJvdXNlbEZvckFsbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL0Nhcm91c2VsRm9yTG9nSW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9TaWduaW4vU2luZ25JbkNvbXBvbmVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL1NpZ25pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvQWRkcmVzcy9BZGRyZXNzQ2FyZC9BZGRyZXNzQ2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvQWRkcmVzcy9BZGRyZXNzQ2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvQWRkcmVzcy9BZGRyZXNzRGV0YWlscy9BZGRyZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9BZGRyZXNzL0FkZHJlc3NEZXRhaWxzL0FkZHJlc3NEZXRhaWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9BZGRyZXNzL0FkZHJlc3NEZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9BZGRyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9BdHRhY2hlZCBQcmVzY3JpcHRpb25zL0F0dGFjaGVkUHJlc2NyaXB0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9BdHRhY2hlZCBQcmVzY3JpcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9DYXJ0RGV0YWlscy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvQ2FydFBhZ2UvQ2FydFBhZ2VDb21wb25lbnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0NhcnRQYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9DYXJ0UGFnZS9tZWRpY2luZURldGFpbC9NZWRpY2luZURldGFpbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvQ2FydFBhZ2UvbWVkaWNpbmVEZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0NhcnRQYWdlL29yZGVyU3VtbWFyeS9OZWVkU2lnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0NhcnRQYWdlL29yZGVyU3VtbWFyeS9OZWVkU2lnaW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0NhcnRQYWdlL29yZGVyU3VtbWFyeS9PcmRlclN1bW1hcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0NhcnRQYWdlL29yZGVyU3VtbWFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvQ2FydFBhZ2UvcmVsYXRlZFByb2R1Y3QvUmVsYXRlZFByb2R1Y3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0NhcnRQYWdlL3JlbGF0ZWRQcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9PcmRlclN1bW1hcnlzL0F0dGFjaGVkIFByZXNjcmlwdGlvbnMvQXR0YWNoZWRQcmVzY3JpcHRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvT3JkZXJTdW1tYXJ5cy9DYXJ0UGFnZUNvbXBvbmVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvT3JkZXJTdW1tYXJ5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvT3JkZXJTdW1tYXJ5cy9tZWRpY2luZURldGFpbC9NZWRpY2luZURldGFpbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvT3JkZXJTdW1tYXJ5cy9tZWRpY2luZURldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvT3JkZXJTdW1tYXJ5cy9vcmRlclN1bW1hcnkvTmVlZFNpZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDYXJ0Rmxvdy9PcmRlclN1bW1hcnlzL29yZGVyU3VtbWFyeS9OZWVkU2lnaW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvb3JkZXJTdW1tYXJ5L09yZGVyU3VtbWFyeS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvT3JkZXJTdW1tYXJ5cy9vcmRlclN1bW1hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L1N0ZXBwZXIvU3RlcHBlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvU3RlcHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015Q2FydEZsb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VcGxvYWRQcmVzY3JpcHRpb24vVXBsb2FkUHJlc2NyaXB0aW9ucy9QcmVzUG9wdXAvUHJlc1BvcHVwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXBsb2FkUHJlc2NyaXB0aW9uL1VwbG9hZFByZXNjcmlwdGlvbnMvUHJlc1BvcHVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXBsb2FkUHJlc2NyaXB0aW9uL1VwbG9hZFByZXNjcmlwdGlvbnMvVXBsb2FkUHJlc2NyaXB0aW9ucy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VwbG9hZFByZXNjcmlwdGlvbi9VcGxvYWRQcmVzY3JpcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ2FydERldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2lwZXIvcmVhY3RcIiJdLCJuYW1lcyI6WyJ1c2VyRGV0YWlscyIsImRldGFpbHMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwidXNlclRva2VuIiwidG9rZW4iLCJjYXJ0UHJvZHVjdCIsInByb2R1Y3RzIiwicHJvZHVjdExpc3QiLCJjaG9vc2VNZWRpY2luZSIsInVwbG9hZFByZXNjcmlwdGlvbnMiLCJ1cmwiLCJhdXRoX3VybCIsImFkbWluX3VybCIsInByb2ZpbGVzX3VybCIsIm9yZGVyc191cmwiLCJwcm9kdWN0c191cmwiLCJwYXltZW50c191cmwiLCJtZWRwbGFuc191cmwiLCJub3RpZmljYXRpb25zX3VybCIsImNtc191cmwiLCJGb290ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJJY29uQWxpZ24iLCJmb290ZXJSaWdodCIsInB1c2giLCJmb290ZXJMaW5lIiwiY29weXJpZ2h0IiwiSGVhZGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJEZXRhaWwiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsImNhcnRQcm9kdWN0cyIsImNhcnREZXRhaWwiLCJ1c2VyRGF0YSIsInNldHVzZXJEYXRhIiwidXNlU3RhdGUiLCJjYXJ0TGVuZ3RoIiwic2V0Q2FydExlbmd0aCIsImxhbmdEcm9wRG93biIsInNldExhbmdEcm9wRG93biIsImxvY2F0aW9uUG9wT3ZlciIsInNldExvY2F0aW9uUG9wT3ZlciIsInVzZXJEcm9wRG93biIsInNldFVzZXJEcm9wRG93biIsIm1vZGFsIiwic2V0TW9kYWwiLCJ1c2VyRHJvcERvd25lIiwibGFuZ0Ryb3BEb3ducyIsImxvY2F0aW9uUG9wT3ZlcnMiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsZW4iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRvZ2dsZSIsImhlYWRlcnMiLCJncmV5QmFjayIsIm9iamVjdEZpdCIsImxhbmciLCJsb2dvIiwiaW1nTG9nbyIsImN1cnNvciIsImRlbGl2ZXJ5Q29udGVudCIsImRlbGl2ZXJ5Q29udGFpbmVyIiwiZGVsaXZlciIsInNlYXJjaEljb24iLCJoZWFkZXJJY29uIiwiaWNvbkFsaWduIiwibmFtZSIsImRyb3Bkb3duTWVudSIsIml0ZW0iLCJkcm9wZG93bkljb24iLCJjYXJ0QmFkZ2UiLCJncmVlbkJhY2siLCJsaXN0SW1nIiwidXBsb2FkUHJlc2NyaXB0aW9uIiwiYnRuVXBsb2FkIiwiU3dpcGVyQ29yZSIsInVzZSIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiQ2Fyb3VzZWxGb3JBbGwiLCJsb2dpbkNhcm91c2VsTGlzdCIsInNldExvZ2luQ2Fyb3VzZWxMaXN0IiwiaWQiLCJpbWciLCJjbGlja2FibGUiLCJzd2lwZXIiLCJtYXAiLCJsb2dpbiIsImluZCIsIm1ybWVkX21haW5jb250YWluZXIiLCJtcl9tZWRfbG9nbyIsImxvZ29faW1nIiwibXJfbWVkX2NhcmlubmVyIiwibXJfbWVkX3RhYmxldHMiLCJub3dfbWVkaWNpbmUiLCJtcl9tZWRfZm9vdHRleHQiLCJTaW5nbkluQ29tcG9uZW50IiwicHJvcHMiLCJzZXRUb2tlbiIsImlzU2lnblVwIiwiaGFuZGxlSXNTaWdudXAiLCJkZWNvZGVkIiwic2V0RGVjb2RlZCIsIndoaWNoIiwic2V0V2hpY2giLCJlbWFpbElkTW9iaWxlTm8iLCJzZXRlbWFpbElkTW9iaWxlTm8iLCJvdHAiLCJzZXRPdHAiLCJjb2RlMSIsImNvZGUyIiwiY29kZTMiLCJjb2RlNCIsImNvZGU1IiwiY29kZTYiLCJzaWduVXBEYXRhIiwic2V0U2lnblVwRGF0YSIsImVtYWlsSWQiLCJtb2JpbGVObyIsInVzZXJUeXBlSWQiLCJtb2JpbGVWZXJpZnlTdGF0dXMiLCJoYW5kZWxTaWduSW4iLCJoYW5kZWxTaWduVXAiLCJoYW5kZWxPdHAiLCJvbkNoYW5nZUZvcm0iLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJvbkNoYW5nZU90cCIsImhhbmRsZUJhY2tzcGFjZSIsImhhbmRsZUVudGVyIiwiaGFuZGxlU2lnbkluRGF0YSIsInByZXZlbnREZWZhdWx0IiwiaXNOZXdVc2VyIiwiZGF0YSIsInJlcyIsImF4aW9zIiwicG9zdCIsInN0YXR1cyIsInNpZ25VcCIsInZlcmlmeU90cCIsInNpZ25JblZlcmlmeSIsInNpZ25VcFZlcmlmeSIsImNvZGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlU2lnblVwRGF0YSIsInNlbmRTaWduVXBPdHAiLCJldmVudCIsImtleUNvZGUiLCJmb3JtIiwiaW5kZXgiLCJBcnJheSIsInByb3RvdHlwZSIsImluZGV4T2YiLCJjYWxsIiwiZWxlbWVudHMiLCJmb2N1cyIsInNpZ25JblVwTW9kYWwiLCJzaWduSW4iLCJzaWduSW5DYXJkIiwic2lnbmluSW5wdXQiLCJzaWduaW5IZWFkZXIiLCJzaW5nbmluRm9ybUlucHV0Iiwic2lnbmluQnRucyIsInZlcmlmeUJ0biIsIm5vQWNjb3VudCIsInJlZ2lzdGVyIiwic2lnbnVwQ29udGVudCIsInNpZ251cEhlYWRlciIsInNpZ251cE1haW4iLCJzaWdudXBGb3JtSW5wdXQiLCJzdmVyaWZ5QnRuIiwiYWNjb3VudHNNYWluIiwibm9zaWduQWNjb291biIsIm5vc2lnbnVwQWNjb3VudCIsInNpZ251cEZvb3RlciIsInRlcm1zQ29udCIsIm90cExvZ2luX2lubmVyIiwidGV4dENvbnRlbnQiLCJvdHBfaGVhZGVyIiwib3RwX251bWJlciIsIm90cG5vX2NvbnRhaW5lciIsIm90cF9mb3JtX2lucHV0IiwiYnRuQ29udGFpbmVyIiwib3RwX3ZlcmlmeSIsIkFkZHJlc3NDYXJkIiwiYnRuU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwiY2FyZCIsImNhcmRUb3AiLCJjYXJkVGl0bGUiLCJhZGRyZXNzIiwiYWRkcmVzc05hbWUiLCJhZFR5cGUiLCJhZFBuIiwiYWRkcmVzc01vYmlsZSIsImNhcmRUZXh0IiwiQWRkcmVzcyIsIkNvbXBvbmVudCIsImFkZHJlc3NUeXBlIiwiYWRkcmVzc0xpc3QiLCJpc09wZW4iLCJmb3JtRmllbGQiLCJwaG9uZU51bWJlciIsImNpdHkiLCJwaW5jb2RlIiwibGFuZG1hcmsiLCJzZWxlY3RlZEFkZHJlc3NpbmRleCIsInNlbGVjdGVkQWRkcmVzcyIsImdldCIsInVzZXJJZCIsInRoZW4iLCJvYmoiLCJzZXRTdGF0ZSIsInBpbkNvZGUiLCJsYW5kTWFyayIsInRvZ2dsZTEiLCJwcmVzY3JpcHRpb24iLCJjaG9vc2VNZWRpY2luZXMiLCJwcmVzY3JpcHRpb25VcmwiLCJOdW1iZXIiLCJTdHJpbmciLCJoYW5kbGVTdWJtaXRlZE9yZGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRBZGRyZXNzIiwicmVuZGVyIiwiYWRkcmVzc0RldGFpbHMiLCJhZGRyZXNzQ2FyZHMiLCJoYW5kbGVTZWxlY3RBZGRyZXNzIiwiYWRkcmVzc0l0ZW0iLCJkZWxpdmVyRmxpcCIsImFkZEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJzdGF0ZUNvbCIsImZvcm1TZWxlY3QiLCJwbGFjZSIsInRvZ2dsZUJ0biIsInRvZ2dsZUJhY2siLCJoYW5kbGVBZGRyZXNzVHlwZTAiLCJvcHRpb24iLCJoYW5kbGVBZGRyZXNzVHlwZTEiLCJoYW5kbGVBZGRyZXNzVHlwZTIiLCJoYW5kbGVBZGRBZGRyZXNzIiwic2F2ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJBZGRyZXNzRGV0YWlscyIsIm1hdGNoIiwiaGFuZGxlU3VibWl0ZWQiLCJBdHRhY2hlZFByZXNjcmlwdGlvbiIsInByZXNjcmlwdGlvbnNMaXN0Iiwic2V0UHJlc2NyaXB0aW9uc0xpc3QiLCJhdHRhY2hlZFByZXNjcmlwdGlvbiIsInByZXNjcmlwdGlvblJpZ2h0Qm94IiwicHJlc2NyaXB0aW9ucyIsInByZXNjcmlwdGlvbkF0dGFjaENvbnRhaW5lciIsImF0dGFjaGVkUHJlc2NyaXB0aW9uMSIsInByZXNjcmlwdGlvblRpY2ttYXJrIiwicHJlc2NyaXB0aW9uSW1hZ2UiLCJpY29uc0xpc3QiLCJDYXJ0UGFnZUNvbXBvbmVudCIsImhhbmRsZVByb2NlZWQiLCJNZWRpY2luZURldGFpbCIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJkZWxldGUiLCJmZXRjaENhcnQiLCJhcGkiLCJjYXJ0RGF0YSIsImNhcnREZXRhaWxzIiwicHJvZHVjdCIsIl9pZCIsIm1lZGljaW5lTmFtZSIsIm1hbnVmYWN0dXJlciIsInByaWNlIiwicHJpY2VUb0N1c3RvbWVyIiwiYmFja2dyb3VuZCIsImNhdGVnb3J5IiwiY2FydHBpSW1nIiwicXVhbnRpdHkiLCJxdWFudGl0eUJ0bnMiLCJ0ZENvbCIsInF0eSIsInByaWNlUmVxdWVzdCIsInJlbW92ZUZyb21DYXJ0IiwiZGlzY291bnQiLCJvcmlnaW5hbCIsIk5lZWRTaWduSW4iLCJtb2RhbHMiLCJuZWVkU2lnbmluIiwiY2FuY2VsSW1nIiwicHRNc2ciLCJuZWVkU2lnbkluQnRucyIsImNhbmNlbEJ0biIsInNpZ25pbkJ0biIsIk9yZGVyU3VtbWFyeSIsImRlbGl2ZXJ5Q2hhcmdlIiwic2V0RGVsaXZlcnlDaGFyZ2UiLCJzdW1tYXJ5Qm94Iiwib3JkZXJTdW1tYXJ5IiwicmlnaHQiLCJ0b3RhbCIsInNhdmVkQW1vdW50Iiwib3JkZXJUb3RhbCIsInRvRml4ZWQiLCJwcm9jZWVkIiwiYnRuUHJvY2VlZCIsImNvdXBvbkJveCIsImFwcGx5IiwiYXBwbHlGaWVsZCIsImJ0bkNvZGUiLCJjb3Vwb25Ob3RlIiwiUmVsYXRlZFByb2R1Y3QiLCJzZXRQcm9kdWN0cyIsInNwZWNpYWxpdHkiLCJjb21wYW55IiwiYWN0dWFsUHJpY2UiLCJkaXNjb3VudFByaWNlIiwiaW1hZ2UiLCJhbGlnbkNlbnRlciIsInByb2R1Y3RDYXRlZ29yeSIsInByb2R1Y3ROYW1lIiwiYnRuQXJyb3ciLCJidG5WaWV3IiwicHJlc2NyaXB0aW9uVXJscyIsIm1lZGljaW5lRGV0YWlsIiwiZ2V0T3JkZXJEZXRhaWwiLCJpdGVtcyIsIml0ZW1QcmljZSIsInRvdGFsUHJpY2UiLCJkZWxpdmVyeVByaWNlIiwiYnRuUHJlc2NyaXB0aW9uIiwibWRkZWxpdmVyeV9fZGV0YWlsc19fY29udGFpbmVyIiwibWRkZWxpdmVyeV9fZGV0YWlscyIsIm1kZGVsaXZlcnlfX2lubmVyX3NlYyIsIm1kZGVsUGVyc29uSW5uZXJDb250YWluZXIiLCJtZGRlbFBlcnNvbklubm5lckxlZnQiLCJtZGRlbF9wZXJzb25fbmFtZSIsIm1kZGVsX3BlcnNvbl9udW1iZXIiLCJtZGRlbF9wZXJzb25faW5uZXJSaWdodCIsIm1kc3RyZWV0IiwiY2hhbmdlQnRuIiwicmVwb3J0X29yZGVyMSIsIkNhcnRTdGVwcGVyIiwic3RlcCIsImhhbmRsZVN0ZXBwZXIiLCJzdGVwcyIsImN1cnJlbnRTdGVwTnVtYmVyIiwic3RlcHNTdGF0ZSIsInN0ZXBPYmoiLCJkZXNjcmlwdGlvbiIsImhpZ2hsaWdodGVkIiwic2VsZWN0ZWQiLCJjb21wbGV0ZWQiLCJjdXJyZW50U3RlcHMiLCJ1cGRhdGVTdGVwIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwic3RlcE51bWJlciIsIm5ld1N0ZXBzIiwic3RlcENvdW50ZXIiLCJkaXJlY3Rpb24iLCJzdGVwQ29sb3IiLCJzdGVwc0pTWCIsInN0ZXBXcmFwcGVyIiwic3RlcE51bWJlclNlbGVjdGVkIiwic3RlcE51bWJlckRpc2FibGVkIiwiY2lyY2xlIiwic3RlcERlc2NyaXB0aW9uIiwic3RlcERlc2NyaXB0aW9uQWN0aXZlIiwic3RlcE5hbWUiLCJib3JkZXJDb2xvciIsInN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImFycmF5IiwiU3RlcHBlck1haW4iLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiaGFuZGxlQ2xpY2siLCJjbGlja1R5cGUiLCJuZXdTdGVwIiwiaGFuZGxlRGlzcGF0Y2giLCJpbmRpY2F0aW9uIiwic3RlcHBlckNvbnRhaW5lckhvcml6b250YWwiLCJzdGVwc0FycmF5IiwiYnV0dG9uc0NvbnRhaW5lciIsInByZXZCdG4iLCJuZXh0QnRuIiwiUHJlc1BvcHVwIiwiTXlDbGFzcyIsImxvYyIsInF1ZXJ5IiwibG9hZGVkIiwib3JkZXJfTWFpbkNvbnRhaW5lciIsIlJlZ0NvbmZpcm1NYWluIiwiY29udGFjdF9tciIsIm9yZGVyX3NlYyIsIm9yZGVyU3VjY2Vzc0ltZyIsIm1yX21lZF9sb3dlciIsImNvbnRhY3RfdGV4dCIsIm1yX21lZGNvbnRhY3QiLCJlbnJvbGxpbmdfc2VjdGlvbiIsImV4cGxvcmVfbWVkIiwiZXhwbG9yZV9tZWRCdG4iLCJVcGxvYWRQcmVzY3JpcHRpb25zIiwidXBsb2FkSW1hZ2VzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInNlbGVjdGVkRmlsZSIsImZpbGVzIiwiYXBwZW5kIiwidXBsb2FkTWFpbkhlYWQiLCJ1cGxvYWRQcmVzTWFpbkNvbnRhaW5lciIsInVwbG9hZFByZXNCb3giLCJ1cGxvYWRJbWciLCJkaWZmRG9jcyIsInVwbG9hZF9sYWJlbCIsInVwbG9hZF9maWxlIiwiaGFuZGxlRmlsZVVwbG9hZCIsInByZXNjcmlwTGlzdCIsInByZXNjcmlwTGlzdHRleHQiLCJ1cGxvYWRwcmVzY3JpcENhcmRzIiwidXBsb2FkcHJlc2NyaXBBdHRhY2hDb250YWluZXIiLCJ1cGxvYWRhdHRhY2hlZFByZXNjcmlwMSIsInVwbG9hZHByZXNjcmlwVGlja21hcmsiLCJ1cGxvYWRwcmVzY3JpcEltZyIsInVwbG9hZEljb25zTGlzdCIsInVwbG9hZFByZXNjcmlwUHJvY2VlZCIsImhhbmRsZVN0ZXAiLCJ1cGxvYWRwcm9jZWVkQnV0dG9uIiwidXBsb2FkUHJlc0JveHJpZ2h0IiwidmFsaWRQcmVzY3JpcCIsInZhbGlkcHJlc2NyaXBJbWciLCJ2YWxpZFRleHRlbmQxIiwiYmx1ZVRpY2tJbWciLCJ2YWxpZHRleHRFbmQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInZhbGlkYXRlIiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsImNvbXBpbGVOb25QYXRoIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsImZzUGF0aG5hbWUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2FydERldGFpbHMiLCJVU0VSX0RFVEFJTFMiLCJVU0VSX1RPS0VOIiwiQ0FSVF9QUk9EVUNUUyIsIlBST0RVQ1RfTElTVFMiLCJDSE9PU0VfTUVESUNJTkUiLCJVUExPQURfUFJFU0NSSVBUSU9OIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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RUksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKO0FBT0g7O0FBRWNBLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLE1BQU1DLFlBQVksR0FBQyxjQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBQyxZQUFqQjtBQUNBLE1BQU1DLGFBQWEsR0FBQyxlQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBQyxlQUFwQjtBQUNBLE1BQU1DLGVBQWUsR0FBQyxpQkFBdEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUIsQzs7Ozs7Ozs7Ozs7QUNWUCwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9DYXJ0RGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvQ2FydERldGFpbHMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbi8vIC8vIElOSVRJQUxJWkVTIENMT0NLIE9OIFNFUlZFUlxyXG4vLyBleHBvcnQgY29uc3Qgc2VydmVyUmVuZGVyQ2xvY2sgPSAoKSA9PiAoZGlzcGF0Y2gpID0+XHJcbi8vICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogdHlwZXMuVElDSyxcclxuLy8gICAgIHBheWxvYWQ6IHsgbGlnaHQ6IGZhbHNlLCB0czogRGF0ZS5ub3coKSB9LFxyXG4vLyAgIH0pXHJcblxyXG4vLyAvLyBJTklUSUFMSVpFUyBDTE9DSyBPTiBDTElFTlRcclxuLy8gZXhwb3J0IGNvbnN0IHN0YXJ0Q2xvY2sgPSAoKSA9PiAoZGlzcGF0Y2gpID0+XHJcbi8vICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5USUNLLCBwYXlsb2FkOiB7IGxpZ2h0OiB0cnVlLCB0czogRGF0ZS5ub3coKSB9IH0pXHJcbi8vICAgfSwgMTAwMClcclxuXHJcbi8vIC8vIElOQ1JFTUVOVCBDT1VOVEVSIEJZIDFcclxuLy8gZXhwb3J0IGNvbnN0IGluY3JlbWVudENvdW50ID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuSU5DUkVNRU5UIH0pXHJcblxyXG4vLyAvLyBERUNSRU1FTlQgQ09VTlRFUiBCWSAxXHJcbi8vIGV4cG9ydCBjb25zdCBkZWNyZW1lbnRDb3VudCA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLkRFQ1JFTUVOVCB9KVxyXG5cclxuLy8gLy8gUkVTRVQgQ09VTlRFUlxyXG4vLyBleHBvcnQgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLlJFU0VUIH0pXHJcblxyXG5leHBvcnQgY29uc3QgdXNlckRldGFpbHMgPSAoZGV0YWlscykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGVzLlVTRVJfREVUQUlMUyxcclxuICAgICAgcGF5bG9hZDogZGV0YWlsc1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgdXNlclRva2VuID0gKHRva2VuKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGVzLlVTRVJfVE9LRU4sXHJcbiAgICAgIHBheWxvYWQ6IHRva2VuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBjYXJ0UHJvZHVjdCA9IChwcm9kdWN0cykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGVzLkNBUlRfUFJPRFVDVFMsXHJcbiAgICAgIHBheWxvYWQ6IHByb2R1Y3RzXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0TGlzdCA9IChwcm9kdWN0cykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGVzLlBST0RVQ1RfTElTVFMsXHJcbiAgICAgIHBheWxvYWQ6IHByb2R1Y3RzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hvb3NlTWVkaWNpbmUgPSAoZGV0YWlscykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGVzLkNIT09TRV9NRURJQ0lORSxcclxuICAgICAgcGF5bG9hZDogZGV0YWlsc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZFByZXNjcmlwdGlvbnMgPSAoZGV0YWlscykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGVzLlVQTE9BRF9QUkVTQ1JJUFRJT04sXHJcbiAgICAgIHBheWxvYWQ6IGRldGFpbHNcclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgdXJsID0gJ2h0dHA6Ly8xODAuMTUxLjY5LjEzOCc7XHJcbmV4cG9ydCBjb25zdCBhdXRoX3VybCA9IGAke3VybH06MjI1NC9hcGkvdjFgO1xyXG5leHBvcnQgY29uc3QgYWRtaW5fdXJsID0gYCR7dXJsfToyMjU1L2FwaS92MWA7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlc191cmwgPSBgJHt1cmx9OjIyNTYvYXBpL3YxYDtcclxuZXhwb3J0IGNvbnN0IG9yZGVyc191cmwgPSBgJHt1cmx9OjIyNTcvYXBpL3YxYDtcclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzX3VybCA9IGAke3VybH06MjI1OC9hcGkvdjFgO1xyXG5leHBvcnQgY29uc3QgcGF5bWVudHNfdXJsID0gYCR7dXJsfToyMjU5L2FwaS92MWA7XHJcbmV4cG9ydCBjb25zdCBtZWRwbGFuc191cmwgPSBgJHt1cmx9OjIyNjAvYXBpL3YxYDtcclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbnNfdXJsID0gYCR7dXJsfToyMjYxL2FwaS92MWA7XHJcbmV4cG9ydCBjb25zdCBjbXNfdXJsID0gYCR7dXJsfToyMjYyL2FwaS92MWA7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzNmMzNOXCIsXG5cdFwiZm9vdGVyUmlnaHRcIjogXCJGb290ZXJfZm9vdGVyUmlnaHRfXzNhZGpGXCIsXG5cdFwiZm9vdGVySWNvbkFsaWduXCI6IFwiRm9vdGVyX2Zvb3Rlckljb25BbGlnbl9fWjBjWE9cIixcblx0XCJmb290ZXJMaW5lXCI6IFwiRm9vdGVyX2Zvb3RlckxpbmVfXzE3OTVKXCIsXG5cdFwiY29weXJpZ2h0XCI6IFwiRm9vdGVyX2NvcHlyaWdodF9fM0k4RHZcIixcblx0XCJ0ZXJtc1wiOiBcIkZvb3Rlcl90ZXJtc19fMjE5WFlcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcigpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2Zvb3Rlci1sb2dvLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXJNZWQgaXMgdGhlIGZpcnN0IGNob2ljZSBvZiBJbmRpYW4gT25saW5lIFBoYXJtYWN5IGZvciBtYW55IHNhdGlzZmllZCBjdXN0b21lcnMgZm9yIGJ1eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGljaW5lcyBvbmxpbmUgd2l0aCBkaXNjb3VudCBmb3IgbGlmZS10aHJlYXRlbmluZyBkaXNlYXNlcyBsaWtlIGNhbmNlciwgSElWL0FJRFMsIEhlcGF0aXRpcyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW55IG90aGVycywgZXZlcnlvbmUga25vd3MgaG93IGV4cGVuc2l2ZSBtZWRpY2FsIHRyZWF0bWVudCBpcyAmYW1wOyB3aXRoIHRoZSBpbmNyZWFzaW5nIGNvc3Qgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpY2luZXMgaXQgaGFzIGJlY29tZSB1bmFmZm9yZGFibGUgdG8gYnV5IGVzc2VudGlhbCBtZWRpY2luZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlckljb25BbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcm1lZGhxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9eycvZmFjZWJvb2sucG5nJ30vPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vbXJtZWRocVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPXsnL3R3aXR0ZXIucG5nJ30vPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tcm1lZGhxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9eycvaW5zdGFncmFtLnBuZyd9Lz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L21ybWVkaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17Jy9saW5rZWRpbi5wbmcnfS8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz17Jy95b3V0dWJlLnBuZyd9Lz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNyBvZmZzZXQtbWQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlcy5mb290ZXJSaWdodH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Q09NUEFOWTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFib3V0IFVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9DYXJlZXInKX0+Q2FyZWVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBhcnRuZXIgd2l0aCBtck1FRDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL05lZWRIZWxwcycpfT5GQVE8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9Db250YWN0Jyl9PkNvbnRhY3QgVXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TcGVjaWFsaXR5IE1lZGljaW5lczwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBlcnNvbmFsIGNhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaWFiZXRpY3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GaXRuZXNzICZhbXA7ICBTdXBwbGVtZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SGVhbHRoIGNvbmRpdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IZWFsdGggY2FyZSBkZXZpY2VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29yb25hIHZpcnVzIHByZXZlbnRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5Qb2xpY3kgSW5mbzwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVkaXRvcmlhbCBQb2xpY3k8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcml2YWN5IFBvbGljeTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRlcm1zIGFuZCBDb25kaXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxpbmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDIxIEVhenltZWQgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVybXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+UHJpdmFjeSAvIFRlcm1zICYjMzg7IENvbmRpdGlvbnMgLyBDb250YWN0IFVzPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlcnNcIjogXCJIZWFkZXJfaGVhZGVyc19fZGJDVnVcIixcblx0XCJncmV5QmFja1wiOiBcIkhlYWRlcl9ncmV5QmFja19fa1E4YjBcIixcblx0XCJsb2dvXCI6IFwiSGVhZGVyX2xvZ29fXzFRVW5JXCIsXG5cdFwiZGVsaXZlcnlDb250YWluZXJcIjogXCJIZWFkZXJfZGVsaXZlcnlDb250YWluZXJfX3BIQmRyXCIsXG5cdFwiZGVsaXZlclwiOiBcIkhlYWRlcl9kZWxpdmVyX19PYkNVUVwiLFxuXHRcImRlbGl2ZXJ5Q29udGVudFwiOiBcIkhlYWRlcl9kZWxpdmVyeUNvbnRlbnRfX2JuZ0pqXCIsXG5cdFwic2VhcmNoSWNvblwiOiBcIkhlYWRlcl9zZWFyY2hJY29uX18zblBTcFwiLFxuXHRcImxhbmdcIjogXCJIZWFkZXJfbGFuZ19fVmFhdVdcIixcblx0XCJidG5Mb2NhdGlvblwiOiBcIkhlYWRlcl9idG5Mb2NhdGlvbl9fM0tBQU9cIixcblx0XCJkcm9wZG93bk1lbnVcIjogXCJIZWFkZXJfZHJvcGRvd25NZW51X19ManVTaFwiLFxuXHRcIml0ZW1cIjogXCJIZWFkZXJfaXRlbV9fMU5fdlpcIixcblx0XCJpbWdMb2dvXCI6IFwiSGVhZGVyX2ltZ0xvZ29fXzFobENJXCIsXG5cdFwiaWNvbkFsaWduXCI6IFwiSGVhZGVyX2ljb25BbGlnbl9fVjRYTGZcIixcblx0XCJoZWFkZXJJY29uXCI6IFwiSGVhZGVyX2hlYWRlckljb25fXzMwalJqXCIsXG5cdFwiZ3JlZW5CYWNrXCI6IFwiSGVhZGVyX2dyZWVuQmFja19fMi1XNndcIixcblx0XCJidG5VcGxvYWRcIjogXCJIZWFkZXJfYnRuVXBsb2FkX18xSFlUalwiLFxuXHRcInVwbG9hZFByZXNjcmlwdGlvblwiOiBcIkhlYWRlcl91cGxvYWRQcmVzY3JpcHRpb25fX1dJNTlqXCIsXG5cdFwiY2FydEJhZGdlXCI6IFwiSGVhZGVyX2NhcnRCYWRnZV9fMWtmQXlcIixcblx0XCJsb2NhdGlvbkRyb3Bkb3duXCI6IFwiSGVhZGVyX2xvY2F0aW9uRHJvcGRvd25fXzNyRXcxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vTG9naW4vU2lnbmluL2luZGV4JztcclxuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBjb25zdCB3aGF0c2FwcCA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2hhdHNhcHAtZmFiLnBuZycpO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZXJEZXRhaWxzLCB1c2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpe1xyXG4gICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgIGNvbnN0IHVzZXJEZXRhaWwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gICBjb25zdCBjYXJ0UHJvZHVjdHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXJ0RGV0YWlsKVxyXG4gICBsZXQgW3VzZXJEYXRhLCBzZXR1c2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgIGNvbnN0IFtjYXJ0TGVuZ3RoLHNldENhcnRMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgIGxldCBbbGFuZ0Ryb3BEb3duLCBzZXRMYW5nRHJvcERvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICBsZXQgW2xvY2F0aW9uUG9wT3Zlciwgc2V0TG9jYXRpb25Qb3BPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgbGV0IFt1c2VyRHJvcERvd24sIHNldFVzZXJEcm9wRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdExpc3QpXHJcbiAgIGNvbnN0IFttb2RhbCxzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJEcm9wRG93bmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckRyb3BEb3duKCF1c2VyRHJvcERvd24pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFuZ0Ryb3BEb3ducyA9ICgpID0+IHtcclxuICAgICAgICBzZXRMYW5nRHJvcERvd24oIWxhbmdEcm9wRG93bik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2NhdGlvblBvcE92ZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvY2F0aW9uUG9wT3ZlcighbG9jYXRpb25Qb3BPdmVyKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLnVzZXJEYXRhKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2godXNlckRldGFpbHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudXNlckRhdGEpKSk7XHJcblxyXG4gICAgICAgICAgICBzZXR1c2VyRGF0YShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS51c2VyRGF0YSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZW4gPSBjYXJ0UHJvZHVjdHMuY2FydFByb2R1Y3QgPyBjYXJ0UHJvZHVjdHMuY2FydFByb2R1Y3QubGVuZ3RoIDogMFxyXG4gICAgICAgIHNldENhcnRMZW5ndGgobGVuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJ0UHJvZHVjdHMuY2FydFByb2R1Y3QsIFwiZHNmc2ZkZmdzZGhnZmRnaGpcIiwgY2FydExlbmd0aCwgY2FydFByb2R1Y3RzLmNhcnRQcm9kdWN0Lmxlbmd0aCk7XHJcbiAgICAgICAgLy8gaWYodXNlckRldGFpbC50b2tlbil7XHJcbiAgICAgICAgLy8gICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtjYXJ0UHJvZHVjdHNdKVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSBhc3luYygpID0+IHtcclxuICAgICAgICBzZXRNb2RhbCghbW9kYWwpO1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS51c2VyRGF0YSl7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHVzZXJEZXRhaWxzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnVzZXJEYXRhKSkpO1xyXG5cclxuICAgICAgICAgICAgc2V0dXNlckRhdGEoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudXNlckRhdGEpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyZXlCYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy93aGF0c2FwcC1mYWIucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPis5MS05NDExODMwODg8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcGhvbmUucG5nJ30gc3R5bGU9e3tvYmplY3RGaXQ6J2NvbnRhaW4nfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPis5MS05NDExODMwODg8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPXtzdHlsZXMubGFuZ30gaXNPcGVuPXtsYW5nRHJvcERvd259IHRvZ2dsZT17bGFuZ0Ryb3BEb3duc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldCB0YWc9XCJzcGFuXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9e2xhbmdEcm9wRG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+TGFuZ3VhZ2U8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkxpbmsgaWQ9XCJuYXYtbGlua1wiIHRvPVwiL2Rhc2hib2FyZC9sYW5kaW5nUGFnZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSBjbGFzc05hbWU9e3N0eWxlcy5pbWdMb2dvfSBzcmM9eycvbG9nby5wbmcnfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTmF2TGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxpdmVyeUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2xvYy5wbmcnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxpdmVyeUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVsaXZlciB0bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlbGl2ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBpblwiIGNsYXNzTmFtZT17c3R5bGVzLmRlbGl2ZXJ9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwaW5jb2RlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGluXCI+PGltZyBzcmM9Jy9lZGl0LnBuZycvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQb3BvdmVyIHN0eWxlPXt7J3dpZHRoJzonMTc1cHgnfX0gcGxhY2VtZW50PVwiYXV0by1zdGFydFwiIGlzT3Blbj17bG9jYXRpb25Qb3BPdmVyfSB0YXJnZXQ9XCJQb3BvdmVyMVwiIHRvZ2dsZT17bG9jYXRpb25Qb3BPdmVyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25Ecm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ltYWdlcy9saXZlci5wbmcnKX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYW5nYWxvcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGl2ZXIucG5nJyl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TXVtYmFpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xpdmVyLnBuZycpfSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlB1bmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGl2ZXIucG5nJyl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsaGk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGl2ZXIucG5nJyl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9pZGE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGl2ZXIucG5nJyl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R3VyZ2Fvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ltYWdlcy9saXZlci5wbmcnKX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IeWRlcmFiYWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGl2ZXIucG5nJyl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2hlbm5haTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBtZWRpY2luZXMgYW5kIGhlYWx0aCBwcm9kdWN0c1wiIGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn0gc3JjPXsnL3NlYXJjaC5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGlzT3Blbj17dXNlckRyb3BEb3dufSB0b2dnbGU9e3VzZXJEcm9wRG93bmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEcm9wZG93biBpc09wZW49e3RoaXMuc3RhdGUudXNlckRyb3BEb3dufSB0b2dnbGU9eygpPT50aGlzLnVzZXJEcm9wRG93bigpfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIHRhZz1cInNwYW5cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD17dXNlckRyb3BEb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkFsaWdufSBvbkNsaWNrPXt1c2VyRGF0YSAmJiB1c2VyRGF0YS50b2tlbiAmJiB1c2VyRGF0YS5uYW1lID8gdXNlckRyb3BEb3duZTp0b2dnbGV9Pnt1c2VyRGF0YSAmJiB1c2VyRGF0YS50b2tlbiAmJiB1c2VyRGF0YS5uYW1lID8gdXNlckRhdGEubmFtZSA6ICdMb2dpbi9TaWduIFVwJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkFsaWdufSBzcmM9eycvdXNlci5zdmcnfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duTWVudX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvQWNjb3VudHMvUHJvZmlsZXMnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkxpbmsgaWQ9XCJuYXYtbGlua1wiIHRvPVwiL2FjY291bnQvcHJvZmlsZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duSWNvbn0gc3JjPXsnL3VzZXIuc3ZnJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk15IFByb2ZpbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9OYXZMaW5rPiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvQWNjb3VudHMvT3JkZXInKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkxpbmsgaWQ9XCJuYXYtbGlua1wiIHRvPVwiL2FjY291bnQvb3JkZXJcIj4gICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25JY29ufSBzcmM9eycvZGVsaXZlcnkuc3ZnJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk15IE9yZGVyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L05hdkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL0FjY291bnRzL015UHJlc2NyaXB0aW9uJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXZMaW5rIGlkPVwibmF2LWxpbmtcIiB0bz1cIi9hY2NvdW50L3ByZXNjcmlwdGlvblwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duSWNvbn0gc3JjPXsnL3ByZXNjcmlwdGlvbi5zdmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TXkgUHJlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTmF2TGluaz4gICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaWQ9XCJuYXYtbGlua1wiIHRvPVwiL2FjY291bnQvd2lzaGxpc3RcIj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25JY29ufSBzcmM9e3JlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2lzaGxpc3Quc3ZnJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XaXNobGlzdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9BY2NvdW50cy9QYXltZW50cycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2TGluayBpZD1cIm5hdi1saW5rXCIgdG89XCIvYWNjb3VudC9wYXltZW50XCI+ICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duSWNvbn0gc3JjPXsnL2NyZWRpdC1jYXJkLnN2Zyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXltZW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L05hdkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9BY2NvdW50cy9sb2dvdXQnKX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duSWNvbn0gc3JjPXsnL2V4aXQuc3ZnJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9nb3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb25BbGlnbn0gc3JjPXsnL2xpbmUucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE5hdkxpbmsgaWQ9XCJuYXYtbGlua1wiIHRvPVwiL2Rhc2hib2FyZC9jYXJ0UGFnZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvQ2FydCcpfSBjbGFzc05hbWU9e3N0eWxlcy5pY29uQWxpZ259PkNhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvQ2FydCcpfSBzcmM9eycvc2hvcHBpbmctY2FydC5wbmcnfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvQ2FydCcpfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0QmFkZ2V9IGlkPVwiY2FydC1jb3VudFwiPntjYXJ0TGVuZ3RofTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9OYXZMaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmVlbkJhY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9TcGVjaWFsaXR5TWVkJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5saXN0SW1nfSBzcmM9eycvd2luZ3MucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IFNQRUNJQUxJVFkgTUVESUNJTkVTPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaWQ9XCJuYXYtbGlua1wiIGhyZWY9XCIvcGFnZXMvUGFwQXNzaXN0YW5jZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL1BhcEFzc2lzdGFuY2UnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5saXN0SW1nfSBzcmM9eycvcGF0aWVudC5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IFBBVElFTlQgQVNTSVNUQU5DRSBQUk9HUkFNTUU8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOYXZMaW5rIGlkPVwibmF2LWxpbmtcIiB0bz1cIi9kYXNoYm9hcmQvaW1wb3J0ZWRNZWRpY2luZVwiPiAqL30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9JbXBvcnRlZE1lZGljaW5lQ29tcG9uZXQnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5saXN0SW1nfSBzcmM9eycvdGFibGV0LnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4gSU1QT1JURUQgTUVESUNJTkU8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9OYXZMaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5saXN0SW1nfSBzcmM9eycvaGVhcnQtcmF0ZS5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4gV0VMTE5FU1M8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2TGluayB0bz1cIi9kYXNoYm9hcmQvc3RlcHBlclN1Y2Nlc3NcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvVXBsb2FkU3RlcHBlcicpfSBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRQcmVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuVXBsb2FkfT48Yj5VUExPQUQgUFJFU0NSSVBUSU9OPC9iPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L05hdkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2lnbkluIG1vZGFsPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1ybWVkX21haW5jb250YWluZXJcIjogXCJDYXJvdXNlbEZvckFsbF9tcm1lZF9tYWluY29udGFpbmVyX18xQnA3eVwiLFxuXHRcIm1yX21lZF9sb2dvXCI6IFwiQ2Fyb3VzZWxGb3JBbGxfbXJfbWVkX2xvZ29fXzJVaTNjXCIsXG5cdFwibXJfbWVkX2NhcmlubmVyXCI6IFwiQ2Fyb3VzZWxGb3JBbGxfbXJfbWVkX2NhcmlubmVyX18yWE13dFwiLFxuXHRcIm1yX21lZF90YWJsZXRzXCI6IFwiQ2Fyb3VzZWxGb3JBbGxfbXJfbWVkX3RhYmxldHNfXzFnbXJuXCIsXG5cdFwia25vd19tZWRpY2luZVwiOiBcIkNhcm91c2VsRm9yQWxsX2tub3dfbWVkaWNpbmVfX1ltTkJXXCIsXG5cdFwibXJfbWVkX2Zvb3R0ZXh0XCI6IFwiQ2Fyb3VzZWxGb3JBbGxfbXJfbWVkX2Zvb3R0ZXh0X19RLWhic1wiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmVcIjogXCJDYXJvdXNlbEZvckFsbF9zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlX19kclNBbFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IG1haW5sb2dvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xyXG4vLyBpbXBvcnQgY2Fyb3VzZWxJbWcgZnJvbSAnYXNzZXRzL2ltYWdlcy9jYXJvdXNlbC10YWJsZXRzLnBuZyc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Nhcm91c2VsRm9yQWxsLm1vZHVsZS5zY3NzJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXldKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsRm9yQWxsKCl7XHJcbiAgICBjb25zdCBbbG9naW5DYXJvdXNlbExpc3Qsc2V0TG9naW5DYXJvdXNlbExpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgaW1nOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzInLFxyXG4gICAgICAgICAgICBpbWc6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnMycsXHJcbiAgICAgICAgICAgIGltZzogJydcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IGNvbnNvbGUubG9nKHN3aXBlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luQ2Fyb3VzZWxMaXN0Lm1hcCgobG9naW4saW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTExICR7c3R5bGVzLm1ybWVkX21haW5jb250YWluZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tcl9tZWRfbG9nb30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtzdHlsZXMubG9nb19pbWd9IG9iamVjdC1maXQtY29udGFpbmB9IHNyYz17XCIvbG9nby5wbmdcIn0gYWx0PVwiY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC0xMCAke3N0eWxlcy5tcl9tZWRfY2FyaW5uZXJ9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tcl9tZWRfdGFibGV0c30gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJvX2ltZyBvYmplY3QtZml0LWNvbnRhaW5cIiBzcmM9e1wiL2Nhcm91c2VsLXRhYmxldHMucG5nXCJ9IGFsdD1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3dfbWVkaWNpbmV9Pktub3cgeW91ciBtZWRpY2luZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1yX21lZF9mb290dGV4dH0+TG9yZW0gaXBzdW0gaXMgYSBwbGFjZWhvbGRlciB0ZXh0IGNvbW1vbmx5IHVzZWQgdG8gZGVtb25zdHJhdGUgdGhlIHZpc3VhbDxiciAvPiBmb3JtIG9mIGEgZG9jdW1lbnQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lnbkluVXBNb2RhbFwiOiBcIlNpbmduSW5Db21wb25lbnRfc2lnbkluVXBNb2RhbF9fM3pFalNcIixcblx0XCJzaWduSW5cIjogXCJTaW5nbkluQ29tcG9uZW50X3NpZ25Jbl9fMjh2RGxcIixcblx0XCJzaWduSW5DYXJkXCI6IFwiU2luZ25JbkNvbXBvbmVudF9zaWduSW5DYXJkX18yQndDcFwiLFxuXHRcInNpZ25pbklucHV0XCI6IFwiU2luZ25JbkNvbXBvbmVudF9zaWduaW5JbnB1dF9fMjZ4ajhcIixcblx0XCJzaW5nbmluRm9ybUlucHV0XCI6IFwiU2luZ25JbkNvbXBvbmVudF9zaW5nbmluRm9ybUlucHV0X18xOWEzSFwiLFxuXHRcInNpZ25pbkhlYWRlclwiOiBcIlNpbmduSW5Db21wb25lbnRfc2lnbmluSGVhZGVyX18yMm1ldlwiLFxuXHRcInNpZ25pbkJ0bnNcIjogXCJTaW5nbkluQ29tcG9uZW50X3NpZ25pbkJ0bnNfXzItOE9oXCIsXG5cdFwidmVyaWZ5QnRuXCI6IFwiU2luZ25JbkNvbXBvbmVudF92ZXJpZnlCdG5fXzNzTXA4XCIsXG5cdFwibm9BY2NvdW50XCI6IFwiU2luZ25JbkNvbXBvbmVudF9ub0FjY291bnRfXzNsSzlIXCIsXG5cdFwicmVnaXN0ZXJcIjogXCJTaW5nbkluQ29tcG9uZW50X3JlZ2lzdGVyX18zakJBZFwiLFxuXHRcInNpZ25VcFwiOiBcIlNpbmduSW5Db21wb25lbnRfc2lnblVwX18zYVNUU1wiLFxuXHRcInNpZ251cENvbnRlbnRcIjogXCJTaW5nbkluQ29tcG9uZW50X3NpZ251cENvbnRlbnRfXzF4dWRXXCIsXG5cdFwic2lnbnVwSGVhZGVyXCI6IFwiU2luZ25JbkNvbXBvbmVudF9zaWdudXBIZWFkZXJfXzNnTWFXXCIsXG5cdFwic2lnbnVwTWFpblwiOiBcIlNpbmduSW5Db21wb25lbnRfc2lnbnVwTWFpbl9fMnU3QWtcIixcblx0XCJzaWdudXBGb3JtSW5wdXRcIjogXCJTaW5nbkluQ29tcG9uZW50X3NpZ251cEZvcm1JbnB1dF9fRGswZXpcIixcblx0XCJzdmVyaWZ5QnRuXCI6IFwiU2luZ25JbkNvbXBvbmVudF9zdmVyaWZ5QnRuX18zWW9SS1wiLFxuXHRcImFjY291bnRzTWFpblwiOiBcIlNpbmduSW5Db21wb25lbnRfYWNjb3VudHNNYWluX183T056VVwiLFxuXHRcIm5vc2lnbkFjY29vdW5cIjogXCJTaW5nbkluQ29tcG9uZW50X25vc2lnbkFjY29vdW5fXzNnSTBNXCIsXG5cdFwibm9zaWdudXBBY2NvdW50XCI6IFwiU2luZ25JbkNvbXBvbmVudF9ub3NpZ251cEFjY291bnRfXzJQMEd6XCIsXG5cdFwibG9naW5fbGlua1wiOiBcIlNpbmduSW5Db21wb25lbnRfbG9naW5fbGlua19fMjFZNTRcIixcblx0XCJzaWdudXBGb290ZXJcIjogXCJTaW5nbkluQ29tcG9uZW50X3NpZ251cEZvb3Rlcl9fM2FRRlJcIixcblx0XCJ0ZXJtc0NvbnRcIjogXCJTaW5nbkluQ29tcG9uZW50X3Rlcm1zQ29udF9fMWtsUXNcIixcblx0XCJvdHBMb2dpbl9pbm5lclwiOiBcIlNpbmduSW5Db21wb25lbnRfb3RwTG9naW5faW5uZXJfXzJ0RG5NXCIsXG5cdFwidGV4dENvbnRlbnRcIjogXCJTaW5nbkluQ29tcG9uZW50X3RleHRDb250ZW50X18xS216NlwiLFxuXHRcIm90cF9oZWFkZXJcIjogXCJTaW5nbkluQ29tcG9uZW50X290cF9oZWFkZXJfXzE1ekNtXCIsXG5cdFwib3RwX251bWJlclwiOiBcIlNpbmduSW5Db21wb25lbnRfb3RwX251bWJlcl9fMUR6UmhcIixcblx0XCJvdHBub19jb250YWluZXJcIjogXCJTaW5nbkluQ29tcG9uZW50X290cG5vX2NvbnRhaW5lcl9fMzhSOVlcIixcblx0XCJvdHBfZm9ybV9pbnB1dFwiOiBcIlNpbmduSW5Db21wb25lbnRfb3RwX2Zvcm1faW5wdXRfXzNpYU9xXCIsXG5cdFwib3RwX3ZlcmlmeVwiOiBcIlNpbmduSW5Db21wb25lbnRfb3RwX3ZlcmlmeV9fMzhMcUdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VyRGV0YWlscywgdXNlclRva2VuIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpbmduSW5Db21wb25lbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWxGb3JBbGwgZnJvbSAnLi4vQ2Fyb3VzZWxGb3JMb2dJbi9pbmRleCc7XHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCB7IGF1dGhfdXJsIH0gZnJvbSAnLi4vLi4vLi4vYXBpVmFyaWFibGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmduSW5Db21wb25lbnQocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBsZXQgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGxldCBbaXNTaWduVXAsIGhhbmRsZUlzU2lnbnVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkZWNvZGVkLCBzZXREZWNvZGVkXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFt3aGljaCwgc2V0V2hpY2hdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZW1haWxJZE1vYmlsZU5vLCBzZXRlbWFpbElkTW9iaWxlTm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbb3RwLCBzZXRPdHBdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNvZGUxOiBcIlwiLFxyXG4gICAgICAgIGNvZGUyOiBcIlwiLFxyXG4gICAgICAgIGNvZGUzOiBcIlwiLFxyXG4gICAgICAgIGNvZGU0OiBcIlwiLFxyXG4gICAgICAgIGNvZGU1OiBcIlwiLFxyXG4gICAgICAgIGNvZGU2OiBcIlwiXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3NpZ25VcERhdGEsIHNldFNpZ25VcERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWxJZDogXCJcIixcclxuICAgICAgICBtb2JpbGVObzogXCJcIixcclxuICAgICAgICB1c2VyVHlwZUlkOiAzLFxyXG4gICAgICAgIG1vYmlsZVZlcmlmeVN0YXR1czogMVxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFdoaWNoKDApO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgaGFuZGVsU2lnbkluID0gKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUlzU2lnbnVwKHRydWUpXHJcbiAgICAgICAgc2V0V2hpY2goMClcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRlbFNpZ25VcCA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVJc1NpZ251cCh0cnVlKVxyXG4gICAgICAgIHNldFdoaWNoKDEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kZWxPdHAgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2hpY2goMilcclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ2hhbmdlRm9ybSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICBzZXRTaWduVXBEYXRhKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ2hhbmdlT3RwID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgICAgIHNldE90cChwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgaWYodmFsdWU9PT1cIlwiKXtcclxuICAgICAgICAgICAgaGFuZGxlQmFja3NwYWNlKGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlRW50ZXIoZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTaWduSW5EYXRhID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlSXNTaWdudXAoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke2F1dGhfdXJsfS91c2VyL3NpZ25JbkJ5RW1haWxQaG9uZWA7XHJcbiAgICAgICAgbGV0IGlzTmV3VXNlciA9IGVtYWlsSWRNb2JpbGVObyA9PT0gc2lnblVwRGF0YS5tb2JpbGVObyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgZGF0YSA9IGlzTmV3VXNlciA/IHsgZW1haWxJZE1vYmlsZU5vLCBpc05ld1VzZXIgfSA6IHsgZW1haWxJZE1vYmlsZU5vIH07XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV3VXNlciA9PT0gdHJ1ZSkgc2lnblVwKCk7XHJcbiAgICAgICAgICAgIGhhbmRlbE90cCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHJlcy5zdGF0dXNUZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHZlcmlmeU90cCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoaXNTaWduVXAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNpZ25JblZlcmlmeSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNpZ25VcFZlcmlmeSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZ25VcFZlcmlmeSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHthdXRoX3VybH0vdXNlci92ZXJpZnlTaWduSW5CeUVtYWlsUGhvbmVgO1xyXG4gICAgICAgIGxldCBjb2RlID0gb3RwLmNvZGUxICsgb3RwLmNvZGUyICsgb3RwLmNvZGUzICsgb3RwLmNvZGU0ICsgb3RwLmNvZGU1ICsgb3RwLmNvZGU2O1xyXG4gICAgICAgIGxldCBpc05ld1VzZXIgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBlbWFpbElkTW9iaWxlTm8sIGlzTmV3VXNlciwgY29kZSB9O1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCB8fCByZXMuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICBzZXRPdHAoe1xyXG4gICAgICAgICAgICAgICAgY29kZTE6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb2RlMjogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvZGUzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29kZTQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb2RlNTogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvZGU2OiBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMuZGF0YS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJyxKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhLnVzZXJEYXRhKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJ2ZXJpZnlPdHBcIiwgbG9jYWxTdG9yYWdlKVxyXG5cclxuICAgICAgICAgICAgc2lnblVwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJvdHAgdmVyaWZpY2F0aW9uIGZhaWxlZFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaWduSW5WZXJpZnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7YXV0aF91cmx9L3VzZXIvdmVyaWZ5U2lnbkluQnlFbWFpbFBob25lYDtcclxuICAgICAgICBsZXQgY29kZSA9IG90cC5jb2RlMSArIG90cC5jb2RlMiArIG90cC5jb2RlMyArIG90cC5jb2RlNCArIG90cC5jb2RlNSArIG90cC5jb2RlNjtcclxuICAgICAgICBsZXQgaXNOZXdVc2VyID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IGVtYWlsSWRNb2JpbGVObywgaXNOZXdVc2VyLCBjb2RlIH07XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwIHx8IHJlcy5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgc2V0T3RwKHtcclxuICAgICAgICAgICAgICAgIGNvZGUxOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29kZTI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb2RlMzogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvZGU0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29kZTU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb2RlNjogXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy5kYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YS5kYXRhLnVzZXJEYXRhKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJ2ZXJpZnlPdHBcIiwgbG9jYWxTdG9yYWdlKVxyXG4gICAgICAgICAgICAvLyBpZihpc05ld1VzZXI9PT1mYWxzZSl7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwYXRjaCh1c2VyRGV0YWlscyhyZXMuZGF0YS5kYXRhLnRva2VuKSk7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwYXRjaCh1c2VyVG9rZW4ocmVzLmRhdGEuZGF0YS51c2VyRGF0YSkpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZSgpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwib3RwIHZlcmlmaWNhdGlvbiBmYWlsZWRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lnblVwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke2F1dGhfdXJsfS91c2VyL3NpZ251cGA7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2lnblVwRGF0YSwgXCJzaWduVXBEYXRhXCIpO1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgc2lnblVwRGF0YSk7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCB8fCByZXMuc3RhdHVzPT09XCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEsIFwic2lnblVwXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh1c2VyRGV0YWlscyhyZXMuZGF0YS5kYXRhLnRva2VuKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJUb2tlbihyZXMuZGF0YS5kYXRhLnVzZXJEYXRhKSk7XHJcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZW1haWxJZDogJycsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVObzogJycsXHJcbiAgICAgICAgICAgICAgICB1c2VyVHlwZUlkOiAzLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlVmVyaWZ5U3RhdHVzOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJVc2VyIEFscmVhZHkgaGFzIFJlZ2lzdGVyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTaWduVXBEYXRhID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlSXNTaWdudXAodHJ1ZSk7XHJcblxyXG4gICAgICAgIHNldGVtYWlsSWRNb2JpbGVObyhzaWduVXBEYXRhLm1vYmlsZU5vKTtcclxuICAgICAgICBzZW5kU2lnblVwT3RwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZFNpZ25VcE90cCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBoYW5kbGVJc1NpZ251cChmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7YXV0aF91cmx9L3VzZXIvc2lnbkluQnlFbWFpbFBob25lYDtcclxuICAgICAgICBsZXQgaXNOZXdVc2VyID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJlbWFpbElkTW9iaWxlTm9cIjogc2lnblVwRGF0YS5tb2JpbGVObyxcclxuICAgICAgICAgICAgXCJpc05ld1VzZXJcIjogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwIHx8IHJlcy5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIGhhbmRlbE90cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUVudGVyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSwgXCJzZGZnc2Roc2RmXCIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5mb3JtO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChmb3JtLCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0sIGluZGV4LCBcInNkZmdzZGhzZGZcIilcclxuICAgICAgICBpZihpbmRleCE9PTUpe1xyXG4gICAgICAgICAgZm9ybS5lbGVtZW50c1tpbmRleCArIDFdLmZvY3VzKCk7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSwgXCJzZGZnc2Roc2RmXCIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5mb3JtO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChmb3JtLCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0sIGluZGV4LCBcInNkZmdzZGhzZGZcIilcclxuICAgICAgICBpZihpbmRleCE9PTApe1xyXG4gICAgICAgICAgZm9ybS5lbGVtZW50c1tpbmRleCAtIDFdLmZvY3VzKCk7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsIGlzT3Blbj17cHJvcHMubW9kYWx9IHRvZ2dsZT17cHJvcHMudG9nZ2xlfSBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5VcE1vZGFsfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2hpY2ggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbklufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2hhbmRsZVNpZ25JbkRhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduaW5JbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmluSGVhZGVyfT5XZWxjb21lIHRvIE1yTWVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpbmduaW5Gb3JtSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9iaWxlIG51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbElkTW9iaWxlTm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0ZW1haWxJZE1vYmlsZU5vKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25pbkJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi9hdXRoL290cExvZ2luL1wiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnZlcmlmeUJ0bn0+VkVSSUZZIE5VTUJFUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm9BY2NvdW50fT5Eb24ndCBoYXZlIGFjY291bnQgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcn0gb25DbGljaz17aGFuZGVsU2lnblVwfT5SZWdpc3Rlcjwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxGb3JBbGwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2hpY2ggPT09IDEgPyA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduVXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXBDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXBIZWFkZXJ9PldlbGNvbWUgdG8gTXJNZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnJlZ2lzdGVyfT5SZWdpc3RlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtoYW5kbGVTaWduVXBEYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwTWFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwRm9ybUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWduVXBEYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VGb3JtKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwRm9ybUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWduVXBEYXRhLmVtYWlsSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VGb3JtKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwRm9ybUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vYmlsZU51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWduVXBEYXRhLm1vYmlsZU5vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRm9ybShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN2ZXJpZnlCdG59PlNJR04gVVA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudHNNYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3NpZ25BY2Nvb3VufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vc2lnbnVwQWNjb3VudH0+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQgPyA8c3BhbiBvbkNsaWNrPXtoYW5kZWxTaWduSW59PkxvZ2luPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRlcm1zQ29udH0+QnkgY29udGludWluZyAgeW91IGFncmVlIHRvIHRoZSB0byBvdXIgPHNwYW4+VGVybXMgb2YgdXNlIGFuZCBQcml2YWN5IHBvbGljeTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsRm9yQWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2hpY2ggPT09IDIgPyA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdHBMb2dpbl9pbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5vdHBfaGVhZGVyfT5WZXJpZnkgT1RQPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm90cF9udW1iZXJ9PlBsZWFzZSBlbnRlciB0aGUgT1RQIGNvZGUgc2VudCB0byB5b3VyIDxiciAvPiBtb2JpbGUgbnVtYmVyICs5MSB7ZW1haWxJZE1vYmlsZU5vfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXt2ZXJpZnlPdHB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3Rwbm9fY29udGFpbmVyfSBpZD1cIm90cC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm90cF9mb3JtX2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZGUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvdHAuY29kZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlT3RwKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm90cF9mb3JtX2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZGUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvdHAuY29kZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlT3RwKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vdHBfZm9ybV9pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2RlM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3RwLmNvZGUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU90cChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMub3RwX2Zvcm1faW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29kZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e290cC5jb2RlNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VPdHAoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm90cF9mb3JtX2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZGU1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvdHAuY29kZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlT3RwKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vdHBfZm9ybV9pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb2RlNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3RwLmNvZGU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZU90cChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm90cF92ZXJpZnl9PlZFUklGWTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEZvckFsbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkFkZHJlc3NDYXJkX2NvbnRhaW5lcl9fMi0wcmNcIixcblx0XCJjYXJkXCI6IFwiQWRkcmVzc0NhcmRfY2FyZF9fMUdYd1NcIixcblx0XCJhZFBuXCI6IFwiQWRkcmVzc0NhcmRfYWRQbl9fWndiREVcIixcblx0XCJjYXJkVGV4dFwiOiBcIkFkZHJlc3NDYXJkX2NhcmRUZXh0X18yZnRKYVwiLFxuXHRcImNhcmRUaXRsZVwiOiBcIkFkZHJlc3NDYXJkX2NhcmRUaXRsZV9fMWtWdFJcIixcblx0XCJhZFR5cGVcIjogXCJBZGRyZXNzQ2FyZF9hZFR5cGVfXzItM2NiXCIsXG5cdFwiY2FyZFRvcFwiOiBcIkFkZHJlc3NDYXJkX2NhcmRUb3BfXzFzWFBsXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRkcmVzc0NhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkcmVzc0NhcmQocHJvcHMpe1xyXG4gICAgY29uc3QgYnRuU3R5bGUgPSB7IFxyXG4gICAgICAgIHdpZHRoOiAnMjA2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNjA1NEU1JyxcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgICBjb2xvcjogJyM2MDU0RTUnfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTYgbWItM1wiPlxyXG4gICAgICAgICAgICAge2NvbnNvbGUubG9nKFwic2FkZmFmZ3NnZ2hcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQgJHtzdHlsZXMuY2FyZH1gfSBzdHlsZT17e1wid2lkdGhcIjogXCIxOHJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+e3Byb3BzLmFkZHJlc3MuYWRkcmVzc05hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWRUeXBlfT57cHJvcHMuYWRkcmVzcy50eXBlPT0wP1wiSG9tZVwiOnByb3BzLmFkZHJlc3MudHlwZT09MD9cIk9mZmljZVwiOlwiT3RoZXJcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWRQbn0+e3Byb3BzLmFkZHJlc3MuYWRkcmVzc01vYmlsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRleHR9Pntwcm9wcy5hZGRyZXNzLmFkZHJlc3N9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidG5TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snc3BfYnRuJ119PlNlbGVjdCBBZGRyZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFkZHJlc3NDYXJkIGZyb20gJy4uL0FkZHJlc3NDYXJkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FkZHJlc3NEZXRhaWxzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQ29sbGFwc2UsIEJ1dHRvbiwgQ2FyZEJvZHksIENhcmQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBwcm9maWxlc191cmwsIG9yZGVyc191cmwgIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpVmFyaWFibGVzJztcclxuXHJcbmNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgYWRkcmVzc1R5cGU6IDAsXHJcbiAgICBtb2RhbDogZmFsc2UsXHJcbiAgICBhZGRyZXNzTGlzdDogW10sXHJcbiAgaXNPcGVuOiBmYWxzZSxcclxuICBmb3JtRmllbGQ6IHtcclxuICAgIG5hbWU6IFwiXCIsIFxyXG4gICAgcGhvbmVOdW1iZXI6IFwiXCIsIFxyXG4gICAgYWRkcmVzczogXCJcIiwgXHJcbiAgICBjaXR5OiBcIlwiLCBcclxuICAgIHN0YXRlOiBcIlwiLCBcclxuICAgIHBpbmNvZGU6IFwiXCIsIFxyXG4gICAgbGFuZG1hcms6IFwiXCJcclxuICB9LFxyXG4gIHNlbGVjdGVkQWRkcmVzc2luZGV4OiBudWxsLFxyXG4gIHNlbGVjdGVkQWRkcmVzczoge31cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnVzZXJEZXRhaWwsIFwic2Fhc2RmYXNkc2dmc1wiKVxyXG4gICAgdGhpcy5nZXRBZGRyZXNzKClcclxuICB9XHJcblxyXG4gIGdldEFkZHJlc3MgPSBhc3luYygpID0+IHtcclxuICAgIGxldCB7IGFkZHJlc3NMaXN0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHsgdXNlckRldGFpbCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGF3YWl0IGF4aW9zLmdldChgJHtwcm9maWxlc191cmx9L2FkZHJlc3MvdXNlci8ke3VzZXJEZXRhaWwudXNlcklkfWApXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCBvYmogPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgIGFkZHJlc3NMaXN0PXJlcy5kYXRhLmRhdGFcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGFkZHJlc3NMaXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRyZXNzTGlzdClcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RMaXN0KHJlcy5kYXRhLmRhdGEubGlzdCkpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQWRkcmVzcyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgbGV0IHsgYWRkcmVzc0xpc3QsIGZvcm1GaWVsZCwgYWRkcmVzc1R5cGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgeyB1c2VyRGV0YWlsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHVzZXJJZDogdXNlckRldGFpbC51c2VySWQsXHJcbiAgICAgIGFkZHJlc3NOYW1lOiBmb3JtRmllbGQubmFtZSxcclxuICAgICAgYWRkcmVzc01vYmlsZTogZm9ybUZpZWxkLnBob25lTnVtYmVyLFxyXG4gICAgICBhZGRyZXNzOiBmb3JtRmllbGQuYWRkcmVzcyxcclxuICAgICAgY2l0eTogZm9ybUZpZWxkLmNpdHksXHJcbiAgICAgIHN0YXRlOiBmb3JtRmllbGQuc3RhdGUsXHJcbiAgICAgIHBpbkNvZGU6IGZvcm1GaWVsZC5waW5jb2RlLFxyXG4gICAgICBsYW5kTWFyazogZm9ybUZpZWxkLmxhbmRtYXJrLFxyXG4gICAgICB0eXBlOiBhZGRyZXNzVHlwZVxyXG4gICAgfVxyXG4gICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9maWxlc191cmx9L2FkZHJlc3NgLCBkYXRhKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgb2JqID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICBhZGRyZXNzTGlzdCA9cmVzLmRhdGEuZGF0YVxyXG4gICAgICAgIGZvcm1GaWVsZCA9IHtcclxuICAgICAgICAgIG5hbWU6IFwiXCIsIFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IFwiXCIsIFxyXG4gICAgICAgICAgYWRkcmVzczogXCJcIiwgXHJcbiAgICAgICAgICBjaXR5OiBcIlwiLCBcclxuICAgICAgICAgIHN0YXRlOiBcIlwiLCBcclxuICAgICAgICAgIHBpbmNvZGU6IFwiXCIsIFxyXG4gICAgICAgICAgbGFuZG1hcms6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmb3JtRmllbGQsXHJcbiAgICAgICAgICBhZGRyZXNzTGlzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlMSgpXHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRyZXNzTGlzdClcclxuICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RMaXN0KHJlcy5kYXRhLmRhdGEubGlzdCkpXHJcbiAgICB9KVxyXG4gIH1cclxuICAgIFxyXG4gICAgIGhhbmRsZUFkZHJlc3NUeXBlMCA9ICgpID0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYWRkcmVzc1R5cGU6IDBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgICBoYW5kbGVBZGRyZXNzVHlwZTEgPSAoKSA9PntcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYWRkcmVzc1R5cGU6IDFcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAgaGFuZGxlQWRkcmVzc1R5cGUyID0gKCkgPT57XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBhZGRyZXNzVHlwZTogMlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICBsZXQgeyBtb2RhbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgbW9kYWwgPSAhbW9kYWw7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vZGFsXHJcbiAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIHRvZ2dsZTEgPSAoKSA9PiB7XHJcbiAgICAgICBsZXQgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICBpc09wZW4gPSAhaXNPcGVuXHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgaXNPcGVuXHJcbiAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICBsZXQgeyBmb3JtRmllbGQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICBmb3JtRmllbGRbZS50YXJnZXQubmFtZV09IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgZm9ybUZpZWxkXHJcbiAgICAgICB9KVxyXG4gICAgIH1cclxuXHJcbiAgICAgaGFuZGxlU2VsZWN0QWRkcmVzcyA9IChpbmRleCwgYWRkcmVzcykgPT4ge1xyXG4gICAgICBsZXQgeyBzZWxlY3RlZEFkZHJlc3NpbmRleCwgc2VsZWN0ZWRBZGRyZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBzZWxlY3RlZEFkZHJlc3NpbmRleCA9IGluZGV4O1xyXG4gICAgICBzZWxlY3RlZEFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNkZmdnaGZoZmdoXCIsIGluZGV4LCBhZGRyZXNzKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzZWxlY3RlZEFkZHJlc3NpbmRleCxcclxuICAgICAgICBzZWxlY3RlZEFkZHJlc3NcclxuICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgIGhhbmRsZVBsYWNlT3JkZXIgPSBhc3luYygpID0+IHtcclxuXHJcbiAgICAgIGxldCB7IGFkZHJlc3NMaXN0LCBmb3JtRmllbGQsIGFkZHJlc3NUeXBlLCBzZWxlY3RlZEFkZHJlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGxldCB7IHVzZXJEZXRhaWwsIHByZXNjcmlwdGlvbiwgY2hvb3NlTWVkaWNpbmVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBsZXQgcHJlc2NyaXB0aW9uVXJsID0gcHJlc2NyaXB0aW9uLnVwbG9hZFByZXNjcmlwdGlvbi5tYXAoKGRhdGEsIGluZGV4KT0+IGRhdGEudXJsKVxyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBcInByZXNjcmlwdGlvblVybHNcIjogcHJlc2NyaXB0aW9uVXJsLFxyXG4gICAgICAgIFwiZG9zYWdlRHVyYXRpb25cIjogTnVtYmVyKGNob29zZU1lZGljaW5lcy5jaG9vc2VNZWRpY2luZSksXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IHNlbGVjdGVkQWRkcmVzcy5hZGRyZXNzLFxyXG4gICAgICAgIFwiYWRkcmVzc05hbWVcIjogc2VsZWN0ZWRBZGRyZXNzLmFkZHJlc3NOYW1lLFxyXG4gICAgICAgIFwiYWRkcmVzc01vYmlsZVwiOiBzZWxlY3RlZEFkZHJlc3MuYWRkcmVzc01vYmlsZSxcclxuICAgICAgICBcImFkZHJlc3NDaXR5XCI6IHNlbGVjdGVkQWRkcmVzcy5jaXR5LFxyXG4gICAgICAgIFwiYWRkcmVzc1N0YXRlXCI6IHNlbGVjdGVkQWRkcmVzcy5zdGF0ZSxcclxuICAgICAgICBcImFkZHJlc3NQaW5jb2RlXCI6IFN0cmluZyhzZWxlY3RlZEFkZHJlc3MucGluQ29kZSksXHJcbiAgICAgICAgXCJhZGRyZXNzTGFuZG1hcmtcIjogc2VsZWN0ZWRBZGRyZXNzLmxhbmRNYXJrLFxyXG4gICAgICAgIFwiYWRkcmVzc1R5cGVcIjogc2VsZWN0ZWRBZGRyZXNzLnR5cGU9PTA/XCJIb21lXCI6c2VsZWN0ZWRBZGRyZXNzLnR5cGU9PTE/XCJPZmZpY2VcIjpcIk90aGVyXCIsXHJcbiAgICAgICAgXCJhZG1pblN0YXR1c1wiOiAwLFxyXG4gICAgICAgIFwidXNlclN0YXR1c1wiOiAwLFxyXG4gICAgICAgIFwib3JkZXJUeXBlXCI6IDAsXHJcbiAgICAgICAgXCJpdGVtc1wiOiBbXVxyXG4gICAgfVxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke29yZGVyc191cmx9L29yZGVyYCwgZGF0YSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRlZE9yZGVyKClcclxuICAgICAgICAgXHJcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZHJlc3NMaXN0KVxyXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0TGlzdChyZXMuZGF0YS5kYXRhLmxpc3QpKVxyXG4gICAgICB9KVxyXG4gICAgIH1cclxuXHJcbiAgICAgaGFuZGxlU3VibWl0Q2FsbCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICBsZXQgeyBhZGRyZXNzTGlzdCwgZm9ybUZpZWxkLCBhZGRyZXNzVHlwZSwgc2VsZWN0ZWRBZGRyZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBsZXQgeyB1c2VyRGV0YWlsLCBwcmVzY3JpcHRpb24sIGNob29zZU1lZGljaW5lcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHByZXNjcmlwdGlvblVybCA9IHByZXNjcmlwdGlvbi51cGxvYWRQcmVzY3JpcHRpb24ubWFwKChkYXRhLCBpbmRleCk9PiBkYXRhLnVybClcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgXCJwcmVzY3JpcHRpb25VcmxzXCI6IHByZXNjcmlwdGlvblVybCxcclxuICAgICAgICBcImFkZHJlc3NcIjogc2VsZWN0ZWRBZGRyZXNzLmFkZHJlc3MsXHJcbiAgICAgICAgXCJhZGRyZXNzTmFtZVwiOiBzZWxlY3RlZEFkZHJlc3MuYWRkcmVzc05hbWUsXHJcbiAgICAgICAgXCJhZGRyZXNzTW9iaWxlXCI6IHNlbGVjdGVkQWRkcmVzcy5hZGRyZXNzTW9iaWxlLFxyXG4gICAgICAgIFwiYWRkcmVzc0NpdHlcIjogc2VsZWN0ZWRBZGRyZXNzLmNpdHksXHJcbiAgICAgICAgXCJhZGRyZXNzU3RhdGVcIjogc2VsZWN0ZWRBZGRyZXNzLnN0YXRlLFxyXG4gICAgICAgIFwiYWRkcmVzc1BpbmNvZGVcIjogU3RyaW5nKHNlbGVjdGVkQWRkcmVzcy5waW5Db2RlKSxcclxuICAgICAgICBcImFkZHJlc3NMYW5kbWFya1wiOiBzZWxlY3RlZEFkZHJlc3MubGFuZE1hcmssXHJcbiAgICAgICAgXCJhZGRyZXNzVHlwZVwiOiBzZWxlY3RlZEFkZHJlc3MudHlwZT09MD9cIkhvbWVcIjpzZWxlY3RlZEFkZHJlc3MudHlwZT09MT9cIk9mZmljZVwiOlwiT3RoZXJcIixcclxuICAgICAgICBcImFkbWluU3RhdHVzXCI6IDAsXHJcbiAgICAgICAgXCJ1c2VyU3RhdHVzXCI6IDAsXHJcbiAgICAgICAgXCJvcmRlclR5cGVcIjogMixcclxuICAgICAgICBcIml0ZW1zXCI6IFtdXHJcbiAgICB9XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7b3JkZXJzX3VybH0vb3JkZXJgLCBkYXRhKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdGVkT3JkZXIoKVxyXG4gICAgICAgICBcclxuICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkcmVzc0xpc3QpXHJcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RMaXN0KHJlcy5kYXRhLmRhdGEubGlzdCkpXHJcbiAgICAgIH0pXHJcbiAgICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgbGV0IHsgZm9ybUZpZWxkLCBzZWxlY3RlZEFkZHJlc3NpbmRleCwgc2VsZWN0ZWRBZGRyZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBsZXQgeyBuYW1lLCBwaG9uZU51bWJlciwgYWRkcmVzcywgY2l0eSwgc3RhdGUsIHBpbmNvZGUsIGxhbmRtYXJrLCBhZGRyZXNzVHlwZSB9ID0gZm9ybUZpZWxkO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc0RldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgPGgyPjMuQWRkcmVzcyBEZXRhaWxzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZWQgQWRkcnNzIERldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hZGRyZXNzQ2FyZHN9IGNvbC1tZC0xMmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZHJlc3NMaXN0Lm1hcCgoYWRkcmVzcyxpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKFwic2FkZmFmZ3NnZ2hcIiwgYWRkcmVzcywgaW5kLCB0aGlzLnN0YXRlLmFkZHJlc3NMaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkcmVzc0NhcmQgaW5kZXg9e2luZH0gYWRkcmVzcz17YWRkcmVzc30gc2VsZWN0ZWRBZGRyZXNzPXtzZWxlY3RlZEFkZHJlc3NpbmRleH0gc2VsZWN0QWRkcmVzcz17KCk9PnRoaXMuaGFuZGxlU2VsZWN0QWRkcmVzcyhpbmQsIGFkZHJlc3MpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlMX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuZGVsaXZlckZsaXB9IGNvbC1tZC0xMmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGl2ZXIgdG8gbmV3IGFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPXsnL2Rvd24ucG5nJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgY2xhc3NOYW1lPXtzdHlsZXMuYWRkRm9ybX0gaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWRkcmVzcyBEZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdHlwZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Bob25lTnVtYmVyfSBuYW1lPVwicGhvbmVOdW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBob25lTnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBmb3JtLWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXthZGRyZXNzfSBuYW1lPVwiYWRkcmVzc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYWRkcmVzc1wiIHJvd3M9XCIzXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB0eXBlPVwiY2l0eVwiIHZhbHVlPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC02IGZvcm0tZ3JvdXAgbWItMyAke3N0eWxlcy5zdGF0ZUNvbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVNlbGVjdH0gdmFsdWU9e3N0YXRlfSBuYW1lPVwic3RhdGVcIiBpZD1cInN0YXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+U3RhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5UYW1pbE5hZHU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5LYXJuYXRha2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5UZWx1bmdhbmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QaW4gQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiB2YWx1ZT17cGluY29kZX0gbmFtZT1cInBpbmNvZGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBpbmNvZGVcIiBwbGFjZWhvbGRlcj1cIlBpbiBDb2RlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TGFuZG1hcms8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xhbmRtYXJrfSBuYW1lPVwibGFuZG1hcmtcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhbmRtYXJrXCIgcGxhY2Vob2xkZXI9XCJMYW5kbWFya1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnRuLWdyb3VwIGNvbC1tZC0xMiBmb3JtLWdyb3VwIG1iLTMgbXQtMyAke3N0eWxlcy5wbGFjZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXBlIG9mIFBsYWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YHRvZ2dsZS1idG4gJHtzdHlsZXMudG9nZ2xlQnRufSAke3RoaXMuc3RhdGUuYWRkcmVzc1R5cGU9PT0wID8gc3R5bGVzLnRvZ2dsZUJhY2sgOlwiXCJ9YH0gb25DbGljaz17dGhpcy5oYW5kbGVBZGRyZXNzVHlwZTB9PkhvbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPXtzdHlsZXMub3B0aW9ufSBhdXRvQ29tcGxldGU9XCJvZmZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YHRvZ2dsZS1idG4gJHtzdHlsZXMudG9nZ2xlQnRufSAke3RoaXMuc3RhdGUuYWRkcmVzc1R5cGU9PT0xID8gc3R5bGVzLnRvZ2dsZUJhY2sgOlwiXCJ9YH0gb25DbGljaz17dGhpcy5oYW5kbGVBZGRyZXNzVHlwZTF9Pk9mZmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25zXCIgaWQ9e3N0eWxlcy5vcHRpb259IGF1dG9Db21wbGV0ZT1cIm9mZlwiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YHRvZ2dsZS1idG4gJHtzdHlsZXMudG9nZ2xlQnRufSAke3RoaXMuc3RhdGUuYWRkcmVzc1R5cGU9PT0yID8gc3R5bGVzLnRvZ2dsZUJhY2s6XCJcIn1gfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZHJlc3NUeXBlMn0+T3RoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPXtzdHlsZXMub3B0aW9ufSBhdXRvQ29tcGxldGU9XCJvZmZcIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGRBZGRyZXNzfSBjbGFzc05hbWU9e3N0eWxlcy5zYXZlfT5BZGQgQWRkcmVzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlU3VibWl0ZWRPcmRlcn0gY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZX0+c2F2ZSAmIHBsYWNlIG9yZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICB1c2VyRGV0YWlsOiBzdGF0ZS5hdXRoLnVzZXJEZXRhaWxzLFxyXG4gIGNob29zZU1lZGljaW5lczogc3RhdGUuY2hvb3NlTWVkaWNpbmVzLFxyXG4gIHByZXNjcmlwdGlvbjogc3RhdGUucHJlc2NyaXB0aW9uXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFkZHJlc3MpIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3RhdGVDb2xcIjogXCJBZGRyZXNzRGV0YWlsc19zdGF0ZUNvbF9fMmFhY3NcIixcblx0XCJmb3JtU2VsZWN0XCI6IFwiQWRkcmVzc0RldGFpbHNfZm9ybVNlbGVjdF9fVGF0OWpcIixcblx0XCJhZGRGb3JtXCI6IFwiQWRkcmVzc0RldGFpbHNfYWRkRm9ybV9fMmVVMGdcIixcblx0XCJhZGRyZXNzSXRlbVwiOiBcIkFkZHJlc3NEZXRhaWxzX2FkZHJlc3NJdGVtX19OU1JPeVwiLFxuXHRcImRlbGl2ZXJGbGlwXCI6IFwiQWRkcmVzc0RldGFpbHNfZGVsaXZlckZsaXBfXzJmZTg0XCIsXG5cdFwiYWRkcmVzc0RldGFpbHNcIjogXCJBZGRyZXNzRGV0YWlsc19hZGRyZXNzRGV0YWlsc19fMlhocnFcIixcblx0XCJzYXZlXCI6IFwiQWRkcmVzc0RldGFpbHNfc2F2ZV9fMUVNdnlcIixcblx0XCJwbGFjZVwiOiBcIkFkZHJlc3NEZXRhaWxzX3BsYWNlX18zQjlzclwiLFxuXHRcImFkZHJlc3NDYXJkc1wiOiBcIkFkZHJlc3NEZXRhaWxzX2FkZHJlc3NDYXJkc19fM0ZMYzlcIixcblx0XCJhZGRyZXNzXCI6IFwiQWRkcmVzc0RldGFpbHNfYWRkcmVzc19fMmtYMGRcIixcblx0XCJ0b2dnbGVCdG5cIjogXCJBZGRyZXNzRGV0YWlsc190b2dnbGVCdG5fXzNERmRjXCIsXG5cdFwidG9nZ2xlQmFja1wiOiBcIkFkZHJlc3NEZXRhaWxzX3RvZ2dsZUJhY2tfX0RhZmdCXCIsXG5cdFwib3B0aW9uXCI6IFwiQWRkcmVzc0RldGFpbHNfb3B0aW9uX18xNGF2blwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFkZHJlc3NDYXJkIGZyb20gJy4uL0FkZHJlc3NDYXJkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FkZHJlc3NEZXRhaWxzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQ29sbGFwc2UsIEJ1dHRvbiwgQ2FyZEJvZHksIENhcmQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi9BZGRyZXNzJ1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZHJlc3NEZXRhaWxzKHByb3BzKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFkZHJlc3Mgcm91dGVyPXtyb3V0ZXJ9IGRpc3BhdGNoPXtkaXNwYXRjaH0gaGFuZGxlU3VibWl0ZWRPcmRlcj17cHJvcHMuaGFuZGxlU3VibWl0ZWRPcmRlcn0+PC9BZGRyZXNzPlxyXG4gICAgICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWRkcmVzc0RldGFpbHMgZnJvbSAnLi9BZGRyZXNzRGV0YWlscy9pbmRleCc7XHJcbmltcG9ydCBBdHRhY2hlZFByZXNjcmlwdGlvbnMgZnJvbSAnLi4vQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleCc7XHJcblxyXG5cclxuZXhwb3J0ICBjbGFzcyBBZGRyZXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgaGFuZGxlU3VibWl0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInByb3BzIHdvcmtpbmcgZmluZVwiKVxyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRlZE9yZGVyKCk7XHJcbiAgIH1cclxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNkZmdzZmdoc2ZnaGZnXCIsIHRoaXMucHJvcHMsIHRoaXMucHJvcHMubWF0Y2gpXHJcbiB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkcmVzc0RldGFpbHMgaGFuZGxlU3VibWl0ZWRPcmRlcj17dGhpcy5oYW5kbGVTdWJtaXRlZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF0dGFjaGVkUHJlc2NyaXB0aW9ucy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdHRhY2hlZFByZXNjcmlwdGlvblwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX2F0dGFjaGVkUHJlc2NyaXB0aW9uX18ydDFucFwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb25fXzFnNjZTXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tX18yOTk4Y1wiLFxuXHRcInN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbFwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3N3aXBlci1jb250YWluZXItaG9yaXpvbnRhbF9fbzBpc1BcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c19fMVZvTXlcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZV9fM2hqa3JcIixcblx0XCJwcmVzY3JpcHRpb25SaWdodEJveFwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3ByZXNjcmlwdGlvblJpZ2h0Qm94X181U2FQaFwiLFxuXHRcInByZXNjcmlwdGlvbkF0dGFjaENvbnRhaW5lclwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3ByZXNjcmlwdGlvbkF0dGFjaENvbnRhaW5lcl9fLUNYZlZcIixcblx0XCJhdHRhY2hlZFByZXNjcmlwdGlvbjFcIjogXCJBdHRhY2hlZFByZXNjcmlwdGlvbl9hdHRhY2hlZFByZXNjcmlwdGlvbjFfXzNRQmVLXCIsXG5cdFwicHJlc2NyaXB0aW9uVGlja21hcmtcIjogXCJBdHRhY2hlZFByZXNjcmlwdGlvbl9wcmVzY3JpcHRpb25UaWNrbWFya19fMzhLdXdcIixcblx0XCJwcmVzY3JpcHRpb25JbWFnZVwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3ByZXNjcmlwdGlvbkltYWdlX18zZ3FMQ1wiLFxuXHRcImljb25zTGlzdFwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX2ljb25zTGlzdF9fMXExZl9cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGRlbGV0ZTEgZnJvbSAgJy9kZWxldGUxLnBuZyc7XHJcbi8vIGltcG9ydCB2aWV3IGZyb20gJy92aWV3LnBuZyc7XHJcbi8vIGltcG9ydCBkb3dubG9hZCBmcm9tICcvZG93bmxvYWQucG5nJztcclxuLy8gaW1wb3J0IHRpY2sgZnJvbSAnL3RpY2ttYXJrLnBuZyc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F0dGFjaGVkUHJlc2NyaXB0aW9uLm1vZHVsZS5zY3NzJztcclxuXHJcblN3aXBlckNvcmUudXNlKFsgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5XSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdHRhY2hlZFByZXNjcmlwdGlvbigpe1xyXG4gICAgY29uc3QgW3ByZXNjcmlwdGlvbnNMaXN0LHNldFByZXNjcmlwdGlvbnNMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicxJyxcclxuICAgICAgICAgICAgaW1nOicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicyJyxcclxuICAgICAgICAgICAgaW1nOicnXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXR0YWNoZWRQcmVzY3JpcHRpb259IGZvbnQtd2VpZ2h0LWJvbGRgfT5cclxuICAgICAgICAgICAgICAgIEF0dGFjaGVkIFByZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25SaWdodEJveH0+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiBjb25zb2xlLmxvZyhzd2lwZXIpfVxyXG4gICAgICAgICAgICAgICAgb25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVzY3JpcHRpb25zTGlzdC5tYXAoKHByZXNjcmlwdGlvbnMsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uQXR0YWNoQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dGFjaGVkUHJlc2NyaXB0aW9uMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uVGlja21hcmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvdGlja21hcmsucG5nJ30gYWx0PVwidGlja21hcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25JbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9wcmVzY3JpcHRpb24taW1nLnBuZyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kZWxldGUxLnBuZyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy92aWV3LnBuZyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kb3dubG9hZC5wbmcnfSBhbHQ9XCJwcmVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPiAgXHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5kaWNhdGlvblwiOiBcIkNhcnREZXRhaWxzX2luZGljYXRpb25fXzJZd21qXCIsXG5cdFwiYnV0dG9uc0NvbnRhaW5lclwiOiBcIkNhcnREZXRhaWxzX2J1dHRvbnNDb250YWluZXJfX2RmOXJsXCIsXG5cdFwicHJldkJ0blwiOiBcIkNhcnREZXRhaWxzX3ByZXZCdG5fXzNaY0dhXCIsXG5cdFwibmV4dEJ0blwiOiBcIkNhcnREZXRhaWxzX25leHRCdG5fXzJRZHU1XCIsXG5cdFwic3RlcHBlckNvbnRhaW5lckhvcml6b250YWxcIjogXCJDYXJ0RGV0YWlsc19zdGVwcGVyQ29udGFpbmVySG9yaXpvbnRhbF9fM0w4VldcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lZGljaW5lRGV0YWlsXCI6IFwiQ2FydFBhZ2VDb21wb25lbnRfbWVkaWNpbmVEZXRhaWxfXzI0OFNrXCIsXG5cdFwiaW5kaWNhdGlvblwiOiBcIkNhcnRQYWdlQ29tcG9uZW50X2luZGljYXRpb25fXzMxcGlBXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTWVkaWNpbmVEZXRhaWwgZnJvbSAnLi4vQ2FydFBhZ2UvbWVkaWNpbmVEZXRhaWwvaW5kZXgnXHJcbmltcG9ydCBSZWxhdGVkUHJvZHVjdCBmcm9tICcuLi9DYXJ0UGFnZS9yZWxhdGVkUHJvZHVjdC9pbmRleCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJ0UGFnZUNvbXBvbmVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBDYXJ0UGFnZUNvbXBvbmVudChwcm9wcyl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGljaW5lRGV0YWlsIGhhbmRsZVByb2NlZWQ9e3Byb3BzLmhhbmRsZVByb2NlZWR9PjwvTWVkaWNpbmVEZXRhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC0xMiAke3N0eWxlcy50aXRsZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlJFTEFURUQgUFJPRFVDVFM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF0ZWRQcm9kdWN0PjwvUmVsYXRlZFByb2R1Y3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZUNvbXBvbmVudDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYWNrZ3JvdW5kXCI6IFwiTWVkaWNpbmVEZXRhaWxfYmFja2dyb3VuZF9fOTZYWEdcIixcblx0XCJpbWdcIjogXCJNZWRpY2luZURldGFpbF9pbWdfX3JtRG1OXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJNZWRpY2luZURldGFpbF9jYXRlZ29yeV9fMTZzVVpcIixcblx0XCJuYW1lXCI6IFwiTWVkaWNpbmVEZXRhaWxfbmFtZV9fMTlfMWxcIixcblx0XCJtYW51ZmFjdHVyZXJcIjogXCJNZWRpY2luZURldGFpbF9tYW51ZmFjdHVyZXJfXzFDN3J4XCIsXG5cdFwicXVhbnRpdHlcIjogXCJNZWRpY2luZURldGFpbF9xdWFudGl0eV9fRlVCS29cIixcblx0XCJxdWFudGl0eUJ0bnNcIjogXCJNZWRpY2luZURldGFpbF9xdWFudGl0eUJ0bnNfXzNNOVAwXCIsXG5cdFwiY2FydFwiOiBcIk1lZGljaW5lRGV0YWlsX2NhcnRfXzNaLTh3XCIsXG5cdFwicHJpY2VSZXF1ZXN0XCI6IFwiTWVkaWNpbmVEZXRhaWxfcHJpY2VSZXF1ZXN0X18xcTF2b1wiLFxuXHRcImJ0bk1hdGNoXCI6IFwiTWVkaWNpbmVEZXRhaWxfYnRuTWF0Y2hfXzJEY0lMXCIsXG5cdFwicHJpY2VcIjogXCJNZWRpY2luZURldGFpbF9wcmljZV9fMUVYS1NcIixcblx0XCJkaXNjb3VudFwiOiBcIk1lZGljaW5lRGV0YWlsX2Rpc2NvdW50X18yR0JNVVwiLFxuXHRcIm9yaWdpbmFsXCI6IFwiTWVkaWNpbmVEZXRhaWxfb3JpZ2luYWxfXzFBYW50XCIsXG5cdFwidGRDb2xcIjogXCJNZWRpY2luZURldGFpbF90ZENvbF9fMU0zcjJcIixcblx0XCJjYXJ0cGlJbWdcIjogXCJNZWRpY2luZURldGFpbF9jYXJ0cGlJbWdfXzNlc1pwXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4uL29yZGVyU3VtbWFyeS9pbmRleCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgY2FydFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWNpbmVEZXRhaWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHByb2R1Y3RzX3VybCwgb3JkZXJzX3VybCwgcHJvZmlsZXNfdXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpVmFyaWFibGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIE1lZGljaW5lRGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXJ0UHJvZHVjdHM6IFtdLFxyXG4gICAgICBjYXJ0RGV0YWlsczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy5mZXRjaENhcnQoKTtcclxuICB9XHJcblxyXG5cclxucmVtb3ZlRnJvbUNhcnQgPSBhc3luYyhpZCkgPT4ge1xyXG4gICBhd2FpdCBheGlvcy5kZWxldGUoYCR7cHJvZHVjdHNfdXJsfS9jYXJ0LyR7aWR9YClcclxuICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgIH0pO1xyXG4gICB0aGlzLmZldGNoQ2FydCgpO1xyXG59XHJcblxyXG5mZXRjaENhcnQgID0gYXN5bmMoaWQpID0+IHtcclxuICAgIC8vbGV0IHVzZXJJZCA9IFwiNjAxY2Q0ZjEwNzg3Y2Q0MjFlNmY2YWNjXCI7XHJcbiAgICBsZXQgeyB1c2VyRGV0YWlsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgYXBpPWAke3Byb2R1Y3RzX3VybH0vY2FydD91c2VySWQ9JHt1c2VyRGV0YWlsLnVzZXJJZH1gO1xyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGFwaSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhcnRQcm9kdWN0czogcmVzLmRhdGEuZGF0YS5jYXJ0RGF0YSxcclxuICAgICAgICAgICAgY2FydERldGFpbHM6IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2FydFByb2R1Y3QocmVzLmRhdGEuZGF0YS5jYXJ0RGF0YSkpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIGxldCB7IGNhcnRQcm9kdWN0cywgY2FydERldGFpbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e3JlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EaWFiZXRlczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+QmlmaWxhYyBUYWJsZXRzPC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hbnVmYWN0dXJlclwiPk1hbnVmYWN0dXJlcjogTmF0dXJlcyBWZWx2ZXQgTGlmZWNhcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvKy5wbmcnKX0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLy0ucG5nJyl9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHByaWNlLXJlcXVlc3RcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5QcmljZSBNYXRjaCBSZXF1ZXN0ZWQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IDxoci8+ICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICA8Yj5JdGVtcyBQcmVzY3JpcHRpb24gUmVxdWlyZWQ8L2I+XHJcbiAgICAgIHtcclxuICAgICAgICAgIGNhcnRQcm9kdWN0cyAmJiBjYXJ0UHJvZHVjdHMubGVuZ3RoIT09MCA/IGNhcnRQcm9kdWN0cy5tYXAoKHByb2R1Y3QsaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHtfaWQsbWVkaWNpbmVOYW1lLG1hbnVmYWN0dXJlcixwcmljZSxwcmljZVRvQ3VzdG9tZXJ9ID0gcHJvZHVjdDtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kfSBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXsnL3Byb2R1Y3QtMy5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlhYmV0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e21lZGljaW5lTmFtZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRwaUltZ30gc3JjPXsnL3ByZXNjcmlwdGlvbi5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1hbnVmYWN0dXJlcn0+TWFudWZhY3R1cmVyOiB7bWFudWZhY3R1cmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVhbnRpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5QnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9PjxpbWcgc3JjPXsnLysucG5nJ30vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9Pntwcm9kdWN0LnF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRkQ29sfT48aW1nIHNyYz17Jy8tLnBuZyd9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC00ICR7c3R5bGVzLnByaWNlUmVxdWVzdH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZyb21DYXJ0KF9pZCl9IHNyYz17Jy9yZW1vdmUtY2FydC5wbmcnfSBhbHQ9XCJyZW1vdmUtY2FydFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5kaXNjb3VudH0+4oK5e3ByaWNlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yaWdpbmFsfT5NUlAg4oK5e3ByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyLz4gIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSkgOiA8ZGl2PjxwPllvdXIgQ2FydCBpcyBFbXB0eTwvcD48cD5QbGVhc2UgQWRkIHByb2R1Y3RzIHRvIHRoZSBjYXJ0PC9wPjwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8Yj5JdGVtcyBOT1QgUHJlc2NyaXB0aW9uIFJlcXVpcmVkPC9iPiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICA8T3JkZXJTdW1tYXJ5IGNhcnREZXRhaWxzPXtjYXJ0RGV0YWlsc30gaGFuZGxlUHJvY2VlZD17dGhpcy5wcm9wcy5oYW5kbGVQcm9jZWVkfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c2VyRGV0YWlsOiBzdGF0ZS5hdXRoLnVzZXJEZXRhaWxzLFxyXG4gICAgY2FydERldGFpbDogc3RhdGUuY2FydERldGFpbCxcclxuICAgIHByb2R1Y3RMaXN0OiBzdGF0ZS5wcm9kdWN0TGlzdFxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNZWRpY2luZURldGFpbClcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGNhbmNlbCBmcm9tICcvY2FuY2VsLnBuZyc7XHJcbmltcG9ydCB7IE1vZGFsfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05lZWRTaWdpbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZWVkU2lnbkluKHByb3BzKXtcclxuICAgICAgICBsZXQge21vZGFsLHRvZ2dsZX0gPSBwcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWx9IHRvZ2dsZT17dG9nZ2xlfSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZWVkU2lnbmlufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsSW1nfSBzcmM9eycvY2FuY2VsLnBuZyd9IGFsdD1cImNhbmNlbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlcy5wdE1zZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5lZWQgVG8gU2lnaW4hPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lZWRTaWduSW5CdG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnRufSBvbkNsaWNrPXt0b2dnbGV9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPVwiL2F1dGgvc2lnbkluXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmluQnRufT5TaWduSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsc1wiOiBcIk5lZWRTaWdpbl9tb2RhbHNfXzNxcXBiXCIsXG5cdFwibmVlZFNpZ25pblwiOiBcIk5lZWRTaWdpbl9uZWVkU2lnbmluX19XZ1pNdFwiLFxuXHRcInB0TXNnXCI6IFwiTmVlZFNpZ2luX3B0TXNnX18zTTIwYlwiLFxuXHRcImNhbmNlbEltZ1wiOiBcIk5lZWRTaWdpbl9jYW5jZWxJbWdfXzFyNERpXCIsXG5cdFwibmVlZFNpZ25JbkJ0bnNcIjogXCJOZWVkU2lnaW5fbmVlZFNpZ25JbkJ0bnNfXzNtTjR4XCIsXG5cdFwic2lnbmluQnRuXCI6IFwiTmVlZFNpZ2luX3NpZ25pbkJ0bl9fM0RVcjNcIixcblx0XCJjYW5jZWxCdG5cIjogXCJOZWVkU2lnaW5fY2FuY2VsQnRuX18zQU5JQlwiLFxuXHRcInBheW1lbnRNc2dcIjogXCJOZWVkU2lnaW5fcGF5bWVudE1zZ19fM1FtQmFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlCb3hcIjogXCJPcmRlclN1bW1hcnlfc3VtbWFyeUJveF9fMVltbXhcIixcblx0XCJvcmRlclN1bW1hcnlcIjogXCJPcmRlclN1bW1hcnlfb3JkZXJTdW1tYXJ5X18yY1A1c1wiLFxuXHRcInJpZ2h0XCI6IFwiT3JkZXJTdW1tYXJ5X3JpZ2h0X19lODh4X1wiLFxuXHRcImRldGFpbHNcIjogXCJPcmRlclN1bW1hcnlfZGV0YWlsc19fM0VCQkdcIixcblx0XCJvcmRlclRvdGFsXCI6IFwiT3JkZXJTdW1tYXJ5X29yZGVyVG90YWxfXzMwSGhvXCIsXG5cdFwicHJvY2VlZFwiOiBcIk9yZGVyU3VtbWFyeV9wcm9jZWVkX18zeHB3VVwiLFxuXHRcImJ0blByb2NlZWRcIjogXCJPcmRlclN1bW1hcnlfYnRuUHJvY2VlZF9fRHdScU1cIixcblx0XCJidG5QcmVzY3JpcHRpb25cIjogXCJPcmRlclN1bW1hcnlfYnRuUHJlc2NyaXB0aW9uX18zSG1pRFwiLFxuXHRcImJ0blByaWNlXCI6IFwiT3JkZXJTdW1tYXJ5X2J0blByaWNlX18xT2JqRVwiLFxuXHRcImNvdXBvbkJveFwiOiBcIk9yZGVyU3VtbWFyeV9jb3Vwb25Cb3hfXzFFSjdyXCIsXG5cdFwiYXBwbHlcIjogXCJPcmRlclN1bW1hcnlfYXBwbHlfX3VKRTdjXCIsXG5cdFwiYXBwbHlGaWVsZFwiOiBcIk9yZGVyU3VtbWFyeV9hcHBseUZpZWxkX19qcGtpYlwiLFxuXHRcImJ0bkNvZGVcIjogXCJPcmRlclN1bW1hcnlfYnRuQ29kZV9fR05YdjVcIixcblx0XCJjb3Vwb25Ob3RlXCI6IFwiT3JkZXJTdW1tYXJ5X2NvdXBvbk5vdGVfXzNVaVRhXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vT3JkZXJTdW1tYXJ5Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmVlZFNpZ25JbiBmcm9tICcuL05lZWRTaWdpbic7XHJcblxyXG5mdW5jdGlvbiBPcmRlclN1bW1hcnkocHJvcHMpe1xyXG4gICAgY29uc3QgW2RlbGl2ZXJ5Q2hhcmdlLCBzZXREZWxpdmVyeUNoYXJnZV0gPSB1c2VTdGF0ZSg0MCk7XHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgXHJcbiAgICBjb25zdCB0b2dnbGU9KCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsKCFtb2RhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyU3VtbWFyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPk9yZGVyIFN1bW1hcnk8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FydCBWYWx1ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtwcm9wcy50b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXJ5IENoYXJnZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtkZWxpdmVyeUNoYXJnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TYXZlZCBBbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT7igrl7cHJvcHMuc2F2ZWRBbW91bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclRvdGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+T3JkZXIgVG90YWw8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT7igrl7cHJvcHMudG90YWwhPTAgPyAocHJvcHMudG90YWwrZGVsaXZlcnlDaGFyZ2UtcHJvcHMuc2F2ZWRBbW91bnQpLnRvRml4ZWQoMikgOiAwfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvY2VlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuUHJvY2VlZH0gb25DbGljaz17cHJvcHMuaGFuZGxlUHJvY2VlZH0+PGI+UFJPQ0VFRCBUTyBCVVk8L2I+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cG9uQm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5hcHBseX0+QVBQTFkgQ09VUE9OUzwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYXBwbHlGaWVsZH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFwcGx5IGNvdXBvbiBjb2RlIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuQ29kZX0+PGI+QVBQTFkgQ09ERTwvYj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cG9uTm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+T1JERVIgQUJPVkUg4oK5NTAwIFRPIFNBVkUgT04gREVMSVZFUlkgQ0hBUkdFUy4gRlJFRSBERUxJVkVSWSBXSVRIIENBUlQgVkFMVUUgQUJPVkUg4oK5MTAwMDwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5lZWRTaWduSW4gbW9kYWw9e21vZGFsfSB0b2dnbGU9e3RvZ2dsZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlclN1bW1hcnk7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWxpZ25DZW50ZXJcIjogXCJSZWxhdGVkUHJvZHVjdF9hbGlnbkNlbnRlcl9fMXRQd21cIixcblx0XCJpbWFnZVwiOiBcIlJlbGF0ZWRQcm9kdWN0X2ltYWdlX18zdnJZRlwiLFxuXHRcInByb2R1Y3RDYXRlZ29yeVwiOiBcIlJlbGF0ZWRQcm9kdWN0X3Byb2R1Y3RDYXRlZ29yeV9fRi13UHpcIixcblx0XCJyaWdodFwiOiBcIlJlbGF0ZWRQcm9kdWN0X3JpZ2h0X18zbW9mRVwiLFxuXHRcInByb2R1Y3ROYW1lXCI6IFwiUmVsYXRlZFByb2R1Y3RfcHJvZHVjdE5hbWVfXzNnX2dvXCIsXG5cdFwiZGlzY291bnRQcmljZVwiOiBcIlJlbGF0ZWRQcm9kdWN0X2Rpc2NvdW50UHJpY2VfXzNxMVBuXCIsXG5cdFwiYWN0dWFsUHJpY2VcIjogXCJSZWxhdGVkUHJvZHVjdF9hY3R1YWxQcmljZV9fMTEwYWtcIixcblx0XCJidG5BcnJvd1wiOiBcIlJlbGF0ZWRQcm9kdWN0X2J0bkFycm93X18yNnNQTVwiLFxuXHRcImJ0blZpZXdcIjogXCJSZWxhdGVkUHJvZHVjdF9idG5WaWV3X19NNUVCWVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuLy8gaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JlbGF0ZWRQcm9kdWN0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFJlbGF0ZWRQcm9kdWN0KCl7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgICAgY29uc3QgW3Byb2R1Y3RzLHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eSA6ICdEaWFiZXRpY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgOiAnMTAgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ0JpZmlsYWMgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55IDogJ05hdHVyZXMgVmVsdmV0IExpZmVjYXJlJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbFByaWNlIDogJzIwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlIDogJzE1MCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eSA6ICdEaWFiZXRpY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgOiAnMTAgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ0JpZmlsYWMgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55IDogJ05hdHVyZXMgVmVsdmV0IExpZmVjYXJlJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbFByaWNlIDogJzIwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlIDogJzE1MCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eSA6ICdEaWFiZXRpY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgOiAnMTAgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ0JpZmlsYWMgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55IDogJ05hdHVyZXMgVmVsdmV0IExpZmVjYXJlJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbFByaWNlIDogJzIwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlIDogJzE1MCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl0eSA6ICdEaWFiZXRpY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgOiAnMTAgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBuYW1lIDogJ0JpZmlsYWMgVGFibGV0cycsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55IDogJ05hdHVyZXMgVmVsdmV0IExpZmVjYXJlJyxcclxuICAgICAgICAgICAgICAgIGFjdHVhbFByaWNlIDogJzIwMCcsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlIDogJzE1MCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBsZXQgcHJvZHVjdExpc3QgPSBwcm9kdWN0cy5tYXAoKHZhbHVlLGluZGV4KT0+e1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGlnbkNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9wcm9kdWN0LTMucG5nJ30gLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdENhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZS5zcGVjaWFsaXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZS5xdWFudGl0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3ROYW1lfT57dmFsdWUubmFtZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RDYXRlZ29yeX0+TWFudWZhY3R1cmVyOiB7dmFsdWUuY29tcGFueX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT17c3R5bGVzLmRpc2NvdW50UHJpY2V9PiYjODM3Nzsge3ZhbHVlLmRpc2NvdW50UHJpY2V9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hY3R1YWxQcmljZX0+TVJQICYjODM3Nzsge3ZhbHVlLmFjdHVhbFByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkFycm93fT48aW1nIHNyYz17Jy9hcnJvdy5wbmcnfS8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdExpc3R9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxpZ25DZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayB0bz1cIi9kYXNoYm9hcmQvc2hvcFByb2R1Y3RcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9TaG9wUHJvZHVjdENvbXBvbmVudCcpfSBjbGFzc05hbWU9e3N0eWxlcy5idG5WaWV3fT48Yj5WSUVXIE1PUkU8L2I+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWxhdGVkUHJvZHVjdDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdHRhY2hlZFByZXNjcmlwdGlvblwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX2F0dGFjaGVkUHJlc2NyaXB0aW9uX18yVk16QlwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb25fXzJ0eUxhXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tX18xbzIzblwiLFxuXHRcInN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbFwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3N3aXBlci1jb250YWluZXItaG9yaXpvbnRhbF9fM1RlaEZcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c19fMldxLS1cIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCI6IFwiQXR0YWNoZWRQcmVzY3JpcHRpb25fc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZV9fUVRCMVBcIixcblx0XCJwcmVzY3JpcHRpb25SaWdodEJveFwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3ByZXNjcmlwdGlvblJpZ2h0Qm94X19rcGE3SFwiLFxuXHRcInByZXNjcmlwdGlvbkF0dGFjaENvbnRhaW5lclwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3ByZXNjcmlwdGlvbkF0dGFjaENvbnRhaW5lcl9fMXE3TC1cIixcblx0XCJhdHRhY2hlZFByZXNjcmlwdGlvbjFcIjogXCJBdHRhY2hlZFByZXNjcmlwdGlvbl9hdHRhY2hlZFByZXNjcmlwdGlvbjFfX21Pc0tYXCIsXG5cdFwicHJlc2NyaXB0aW9uVGlja21hcmtcIjogXCJBdHRhY2hlZFByZXNjcmlwdGlvbl9wcmVzY3JpcHRpb25UaWNrbWFya19fYzlUUDZcIixcblx0XCJwcmVzY3JpcHRpb25JbWFnZVwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX3ByZXNjcmlwdGlvbkltYWdlX18zY0NSdlwiLFxuXHRcImljb25zTGlzdFwiOiBcIkF0dGFjaGVkUHJlc2NyaXB0aW9uX2ljb25zTGlzdF9fM2kzTEJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGRlbGV0ZTEgZnJvbSAgJy9kZWxldGUxLnBuZyc7XHJcbi8vIGltcG9ydCB2aWV3IGZyb20gJy92aWV3LnBuZyc7XHJcbi8vIGltcG9ydCBkb3dubG9hZCBmcm9tICcvZG93bmxvYWQucG5nJztcclxuLy8gaW1wb3J0IHRpY2sgZnJvbSAnL3RpY2ttYXJrLnBuZyc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F0dGFjaGVkUHJlc2NyaXB0aW9uLm1vZHVsZS5zY3NzJztcclxuXHJcblN3aXBlckNvcmUudXNlKFsgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5XSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdHRhY2hlZFByZXNjcmlwdGlvbihwcm9wcyl7XHJcbiAgICBjb25zdCBbcHJlc2NyaXB0aW9uc0xpc3Qsc2V0UHJlc2NyaXB0aW9uc0xpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgICAgICBpbWc6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzInLFxyXG4gICAgICAgICAgICBpbWc6JydcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hdHRhY2hlZFByZXNjcmlwdGlvbn0gZm9udC13ZWlnaHQtYm9sZGB9PlxyXG4gICAgICAgICAgICAgICAgPGI+QXR0YWNoZWQgUHJlc2NyaXB0aW9uPC9iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25SaWdodEJveH0+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiBjb25zb2xlLmxvZyhzd2lwZXIpfVxyXG4gICAgICAgICAgICAgICAgb25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYXJ0UHJvZHVjdHMgJiYgcHJvcHMuY2FydFByb2R1Y3RzLnByZXNjcmlwdGlvblVybHMgPyBwcm9wcy5jYXJ0UHJvZHVjdHMucHJlc2NyaXB0aW9uVXJscy5tYXAoKHByZXNjcmlwdGlvbnMsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25BdHRhY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXR0YWNoZWRQcmVzY3JpcHRpb24xfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImFzZGZnc2RoZ2doZmdcIiwgcHJvcHMsIHByZXNjcmlwdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXNjcmlwdGlvblRpY2ttYXJrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL3RpY2ttYXJrLnBuZyd9IGFsdD1cInRpY2ttYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ByZXNjcmlwdGlvbnN9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kZWxldGUucG5nJ30gYWx0PVwicHJlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2V2LnN2Zyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kb3dubG9hZC5wbmcnfSBhbHQ9XCJwcmVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOlwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Td2lwZXI+ICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZWRpY2luZURldGFpbFwiOiBcIkNhcnRQYWdlQ29tcG9uZW50X21lZGljaW5lRGV0YWlsX18yZW02SlwiLFxuXHRcImluZGljYXRpb25cIjogXCJDYXJ0UGFnZUNvbXBvbmVudF9pbmRpY2F0aW9uX18xS0drRlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IE1lZGljaW5lRGV0YWlsIGZyb20gJy4vbWVkaWNpbmVEZXRhaWwvaW5kZXgnXHJcbmltcG9ydCBSZWxhdGVkUHJvZHVjdCBmcm9tICcuLi9DYXJ0UGFnZS9yZWxhdGVkUHJvZHVjdC9pbmRleCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJ0UGFnZUNvbXBvbmVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBDYXJ0UGFnZUNvbXBvbmVudChwcm9wcyl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGljaW5lRGV0YWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+TWVkaWNpbmVzIERldGFpbHM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpY2luZURldGFpbD48L01lZGljaW5lRGV0YWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbWQtMTIgJHtzdHlsZXMudGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5SRUxBVEVEIFBST0RVQ1RTPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWxhdGVkUHJvZHVjdD48L1JlbGF0ZWRQcm9kdWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2VDb21wb25lbnQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2dyb3VuZFwiOiBcIk1lZGljaW5lRGV0YWlsX2JhY2tncm91bmRfXzFESi1qXCIsXG5cdFwiaW1nXCI6IFwiTWVkaWNpbmVEZXRhaWxfaW1nX19EN0NldVwiLFxuXHRcImNhdGVnb3J5XCI6IFwiTWVkaWNpbmVEZXRhaWxfY2F0ZWdvcnlfXzFSQVpOXCIsXG5cdFwibmFtZVwiOiBcIk1lZGljaW5lRGV0YWlsX25hbWVfXzRDUnpLXCIsXG5cdFwibWFudWZhY3R1cmVyXCI6IFwiTWVkaWNpbmVEZXRhaWxfbWFudWZhY3R1cmVyX18xa09DOFwiLFxuXHRcInF1YW50aXR5XCI6IFwiTWVkaWNpbmVEZXRhaWxfcXVhbnRpdHlfXzJZcm1zXCIsXG5cdFwicXVhbnRpdHlCdG5zXCI6IFwiTWVkaWNpbmVEZXRhaWxfcXVhbnRpdHlCdG5zX18xOS0tWlwiLFxuXHRcImNhcnRcIjogXCJNZWRpY2luZURldGFpbF9jYXJ0X18xWWlBdVwiLFxuXHRcInByaWNlUmVxdWVzdFwiOiBcIk1lZGljaW5lRGV0YWlsX3ByaWNlUmVxdWVzdF9fMjhUYWFcIixcblx0XCJidG5NYXRjaFwiOiBcIk1lZGljaW5lRGV0YWlsX2J0bk1hdGNoX18yRTMwSVwiLFxuXHRcInByaWNlXCI6IFwiTWVkaWNpbmVEZXRhaWxfcHJpY2VfX1phX2pCXCIsXG5cdFwiZGlzY291bnRcIjogXCJNZWRpY2luZURldGFpbF9kaXNjb3VudF9fMUVjTHFcIixcblx0XCJvcmlnaW5hbFwiOiBcIk1lZGljaW5lRGV0YWlsX29yaWdpbmFsX19nZkp2RlwiLFxuXHRcInRkQ29sXCI6IFwiTWVkaWNpbmVEZXRhaWxfdGRDb2xfX0txeWZvXCIsXG5cdFwiY2FydHBpSW1nXCI6IFwiTWVkaWNpbmVEZXRhaWxfY2FydHBpSW1nX19iUW10ZlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4uL29yZGVyU3VtbWFyeS9pbmRleCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGljaW5lRGV0YWlsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHByb2ZpbGVzX3VybCwgb3JkZXJzX3VybCAgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGlWYXJpYWJsZXMnO1xyXG5cclxuY2xhc3MgTWVkaWNpbmVEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXJ0UHJvZHVjdHM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRPcmRlckRldGFpbCgpO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICBnZXRPcmRlckRldGFpbCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGxldCB7IGNhcnRQcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgbGV0IHsgdXNlckRldGFpbCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke29yZGVyc191cmx9L29yZGVyLzYwMGU1NWQ4NWI5NGNjNmJjY2E0NGVmMmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNhcnRQcm9kdWN0cz1yZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0UHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRyZXNzTGlzdClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdExpc3QocmVzLmRhdGEuZGF0YS5saXN0KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgY2FydFByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ1wiIHNyYz17cmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlhYmV0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkJpZmlsYWMgVGFibGV0czwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYW51ZmFjdHVyZXJcIj5NYW51ZmFjdHVyZXI6IE5hdHVyZXMgVmVsdmV0IExpZmVjYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLysucG5nJyl9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLy0ucG5nJyl9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHByaWNlLXJlcXVlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2UgTWF0Y2ggUmVxdWVzdGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDxoci8+ICAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0UHJvZHVjdHMgJiYgY2FydFByb2R1Y3RzLml0ZW1zICYmIGNhcnRQcm9kdWN0cy5pdGVtcy5sZW5ndGggPiAwID8gY2FydFByb2R1Y3RzLml0ZW1zLm1hcCgocHJvZHVjdCxpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9eycvcHJvZHVjdC0zLnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRpYWJldGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntwcm9kdWN0Lm1lZGljaW5lTmFtZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0cGlJbWd9IHNyYz17Jy9wcmVzY3JpcHRpb24ucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYW51ZmFjdHVyZXJ9Pntwcm9kdWN0Lm1hbnVmYWN0dXJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVhbnRpdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5QnRuc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRkQ29sfT48aW1nIHNyYz17Jy8rLnBuZyd9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50ZENvbH0+e3Byb2R1Y3QucXVhbnRpdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9PjxpbWcgc3JjPXsnLy0ucG5nJ30vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTQgJHtzdHlsZXMucHJpY2VSZXF1ZXN0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcmVtb3ZlLWNhcnQucG5nJ30gYWx0PVwicmVtb3ZlLWNhcnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5kaXNjb3VudH0+4oK5e3Byb2R1Y3QucHJpY2V9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yaWdpbmFsfT5NUlAg4oK5e3Byb2R1Y3QuaXRlbVByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KSA6IDxkaXY+PHA+WW91ciBDYXJ0IGlzIEVtcHR5PC9wPjxwPlBsZWFzZSBBZGQgcHJvZHVjdHMgdG8gdGhlIGNhcnQ8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IHRvdGFsPXs1MDB9IHNhdmVkQW1vdW50PXsxMDB9IGNhcnRQcm9kdWN0cz17Y2FydFByb2R1Y3RzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXNlckRldGFpbDogc3RhdGUuYXV0aC51c2VyRGV0YWlscyxcclxuICAgIGNob29zZU1lZGljaW5lczogc3RhdGUuY2hvb3NlTWVkaWNpbmVzLFxyXG4gICAgcHJlc2NyaXB0aW9uOiBzdGF0ZS5wcmVzY3JpcHRpb25cclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVkaWNpbmVEZXRhaWwpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBjYW5jZWwgZnJvbSAnLi9jYW5jZWwucG5nJztcclxuaW1wb3J0IHsgTW9kYWx9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmVlZFNpZ2luLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5lZWRTaWduSW4ocHJvcHMpe1xyXG4gICAgICAgIGxldCB7bW9kYWwsdG9nZ2xlfSA9IHByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lZWRTaWduaW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17dG9nZ2xlfSBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWxJbWd9IHNyYz17Jy4vY2FuY2VsLnBuZyd9IGFsdD1cImNhbmNlbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlcy5wdE1zZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5lZWQgVG8gU2lnaW4hPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5lZWRTaWduSW5CdG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsQnRufSBvbkNsaWNrPXt0b2dnbGV9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPVwiL2F1dGgvc2lnbkluXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmluQnRufT5TaWduSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsc1wiOiBcIk5lZWRTaWdpbl9tb2RhbHNfXzJoN3l5XCIsXG5cdFwibmVlZFNpZ25pblwiOiBcIk5lZWRTaWdpbl9uZWVkU2lnbmluX18zMWduYVwiLFxuXHRcInB0TXNnXCI6IFwiTmVlZFNpZ2luX3B0TXNnX19Yc3hJX1wiLFxuXHRcImNhbmNlbEltZ1wiOiBcIk5lZWRTaWdpbl9jYW5jZWxJbWdfX2lHU3pYXCIsXG5cdFwibmVlZFNpZ25JbkJ0bnNcIjogXCJOZWVkU2lnaW5fbmVlZFNpZ25JbkJ0bnNfXzNSZXZyXCIsXG5cdFwic2lnbmluQnRuXCI6IFwiTmVlZFNpZ2luX3NpZ25pbkJ0bl9fMWtQUkNcIixcblx0XCJjYW5jZWxCdG5cIjogXCJOZWVkU2lnaW5fY2FuY2VsQnRuX18zbnBZc1wiLFxuXHRcInBheW1lbnRNc2dcIjogXCJOZWVkU2lnaW5fcGF5bWVudE1zZ19fMTBVWi1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlCb3hcIjogXCJPcmRlclN1bW1hcnlfc3VtbWFyeUJveF9fMmcxQkhcIixcblx0XCJvcmRlclN1bW1hcnlcIjogXCJPcmRlclN1bW1hcnlfb3JkZXJTdW1tYXJ5X18xRl9sSFwiLFxuXHRcInJpZ2h0XCI6IFwiT3JkZXJTdW1tYXJ5X3JpZ2h0X19tTHEwWFwiLFxuXHRcImRldGFpbHNcIjogXCJPcmRlclN1bW1hcnlfZGV0YWlsc19fMXhad3NcIixcblx0XCJvcmRlclRvdGFsXCI6IFwiT3JkZXJTdW1tYXJ5X29yZGVyVG90YWxfXzNoVm9LXCIsXG5cdFwicHJvY2VlZFwiOiBcIk9yZGVyU3VtbWFyeV9wcm9jZWVkX19kVWp5QlwiLFxuXHRcImJ0blByb2NlZWRcIjogXCJPcmRlclN1bW1hcnlfYnRuUHJvY2VlZF9fMXJkNkpcIixcblx0XCJidG5QcmVzY3JpcHRpb25cIjogXCJPcmRlclN1bW1hcnlfYnRuUHJlc2NyaXB0aW9uX19yc0dHT1wiLFxuXHRcImJ0blByaWNlXCI6IFwiT3JkZXJTdW1tYXJ5X2J0blByaWNlX19TRmZJX1wiLFxuXHRcImNvdXBvbkJveFwiOiBcIk9yZGVyU3VtbWFyeV9jb3Vwb25Cb3hfXzFxeFo5XCIsXG5cdFwiYXBwbHlcIjogXCJPcmRlclN1bW1hcnlfYXBwbHlfXzJHX19YXCIsXG5cdFwiYXBwbHlGaWVsZFwiOiBcIk9yZGVyU3VtbWFyeV9hcHBseUZpZWxkX18xYUxVUlwiLFxuXHRcImJ0bkNvZGVcIjogXCJPcmRlclN1bW1hcnlfYnRuQ29kZV9fU0VRNWVcIixcblx0XCJjb3Vwb25Ob3RlXCI6IFwiT3JkZXJTdW1tYXJ5X2NvdXBvbk5vdGVfXzE3SWVNXCIsXG5cdFwibWRkZWxpdmVyeV9fZGV0YWlsc19fY29udGFpbmVyXCI6IFwiT3JkZXJTdW1tYXJ5X21kZGVsaXZlcnlfX2RldGFpbHNfX2NvbnRhaW5lcl9fMjRNa2pcIixcblx0XCJtZGRlbGl2ZXJ5X19kZXRhaWxzXCI6IFwiT3JkZXJTdW1tYXJ5X21kZGVsaXZlcnlfX2RldGFpbHNfX1ZpN1N3XCIsXG5cdFwibWRkZWxpdmVyeV9faW5uZXJfc2VjXCI6IFwiT3JkZXJTdW1tYXJ5X21kZGVsaXZlcnlfX2lubmVyX3NlY19fMVZDVXBcIixcblx0XCJjaGFuZ2VCdG5cIjogXCJPcmRlclN1bW1hcnlfY2hhbmdlQnRuX18ybFhFcFwiLFxuXHRcInJlcG9ydF9vcmRlcjFcIjogXCJPcmRlclN1bW1hcnlfcmVwb3J0X29yZGVyMV9fb19wU3dcIixcblx0XCJtZGRlbFBlcnNvbklubmVyQ29udGFpbmVyXCI6IFwiT3JkZXJTdW1tYXJ5X21kZGVsUGVyc29uSW5uZXJDb250YWluZXJfXzFUYlVLXCIsXG5cdFwibWRkZWxQZXJzb25Jbm5uZXJMZWZ0XCI6IFwiT3JkZXJTdW1tYXJ5X21kZGVsUGVyc29uSW5ubmVyTGVmdF9fM3dtV3ZcIixcblx0XCJtZGRlbF9wZXJzb25fbmFtZVwiOiBcIk9yZGVyU3VtbWFyeV9tZGRlbF9wZXJzb25fbmFtZV9fM0k3MC1cIixcblx0XCJtZGRlbF9wZXJzb25fbnVtYmVyXCI6IFwiT3JkZXJTdW1tYXJ5X21kZGVsX3BlcnNvbl9udW1iZXJfXzJxSlp4XCIsXG5cdFwibWRkZWxfcGVyc29uX2lubmVyUmlnaHRcIjogXCJPcmRlclN1bW1hcnlfbWRkZWxfcGVyc29uX2lubmVyUmlnaHRfXzNyQXk1XCIsXG5cdFwibWRzdHJlZXRcIjogXCJPcmRlclN1bW1hcnlfbWRzdHJlZXRfXzNQRXhvXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9PcmRlclN1bW1hcnkubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOZWVkU2lnbkluIGZyb20gJy4vTmVlZFNpZ2luJztcclxuaW1wb3J0IEF0dGFjaGVkUHJlc2NyaXB0aW9ucyBmcm9tICcuLi9BdHRhY2hlZCBQcmVzY3JpcHRpb25zL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwcm9maWxlc191cmwsIG9yZGVyc191cmwgIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpVmFyaWFibGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIE9yZGVyU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVsaXZlcnlDaGFyZ2U6IDQwLFxyXG4gICAgICAgICAgICBtb2RhbDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgXHJcbiAgICBzZXREZWxpdmVyeUNoYXJnZSA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7IG1vZGFsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIG1vZGFsID0gIW1vZGFsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb2RhbFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IGRlbGl2ZXJ5Q2hhcmdlLCBtb2RhbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgeyBjYXJ0UHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJTdW1tYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+T3JkZXIgU3VtbWFyeTwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYXJ0IFZhbHVlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+4oK5e2NhcnRQcm9kdWN0cy50b3RhbFByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsaXZlcnkgQ2hhcmdlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+4oK5e2NhcnRQcm9kdWN0cy5kZWxpdmVyeVByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNhdmVkIEFtb3VudDxwPihDT1VQT04gQVBQTElFRCk8L3A+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+4oK5e2NhcnRQcm9kdWN0cy5zYXZlZEFtb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyVG90YWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5PcmRlciBUb3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtjYXJ0UHJvZHVjdHMudG90YWxQcmljZSA/IChjYXJ0UHJvZHVjdHMudG90YWxQcmljZStjYXJ0UHJvZHVjdHMuZGVsaXZlcnlDaGFyZ2UtY2FydFByb2R1Y3RzLnNhdmVkQW1vdW50KS50b0ZpeGVkKDIpIDogMH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2NlZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0blByb2NlZWR9IG9uQ2xpY2s9e3RoaXMuc2V0TW9kYWx9PjxiPlBST0NFRUQgVE8gUEFZPC9iPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0blByZXNjcmlwdGlvbn0+PGI+Q2FuY2VsIE9yZGVyPC9iPjwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cG9uQm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5hcHBseX0+QVBQTFkgQ09VUE9OUzwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYXBwbHlGaWVsZH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFwcGx5IGNvdXBvbiBjb2RlIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuQ29kZX0+PGI+QVBQTFkgQ09ERTwvYj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cG9uTm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+T1JERVIgQUJPVkUg4oK5NTAwIFRPIFNBVkUgT04gREVMSVZFUlkgQ0hBUkdFUy4gRlJFRSBERUxJVkVSWSBXSVRIIENBUlQgVkFMVUUgQUJPVkUg4oK5MTAwMDwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxOZWVkU2lnbkluIG1vZGFsPXttb2RhbH0gdG9nZ2xlPXt0aGlzLnNldE1vZGFsfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsaXZlcnlfX2RldGFpbHNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbGl2ZXJ5X19kZXRhaWxzfT5EZWxpdmVyeSBEZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbGl2ZXJ5X19pbm5lcl9zZWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWRkZWxQZXJzb25Jbm5lckNvbnRhaW5lcn0gZC1mbGV4YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxQZXJzb25Jbm5uZXJMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsX3BlcnNvbl9uYW1lfT57Y2FydFByb2R1Y3RzLmFkZHJlc3NOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsX3BlcnNvbl9udW1iZXJ9PntjYXJ0UHJvZHVjdHMuYWRkcmVzc01vYmlsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsX3BlcnNvbl9pbm5lclJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjYXJ0UHJvZHVjdHMuYWRkcmVzc1R5cGU9PTA/XCJIb21lXCI6Y2FydFByb2R1Y3RzLmFkZHJlc3NUeXBlPT0wP1wiT2ZmaWNlXCI6XCJPdGhlcnNcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1kc3RyZWV0fT57Y2FydFByb2R1Y3RzLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlQnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZXBvcnRfb3JkZXIxfT5DSEFOR0U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBdHRhY2hlZFByZXNjcmlwdGlvbnMgY2FydFByb2R1Y3RzPXt0aGlzLnByb3BzLmNhcnRQcm9kdWN0c30+PC9BdHRhY2hlZFByZXNjcmlwdGlvbnM+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbn1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c2VyRGV0YWlsOiBzdGF0ZS5hdXRoLnVzZXJEZXRhaWxzLFxyXG4gICAgY2hvb3NlTWVkaWNpbmVzOiBzdGF0ZS5jaG9vc2VNZWRpY2luZXMsXHJcbiAgICBwcmVzY3JpcHRpb246IHN0YXRlLnByZXNjcmlwdGlvblxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShPcmRlclN1bW1hcnkpOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0ZXBwZXJXcmFwcGVySG9yaXpvbnRhbFwiOiBcIlN0ZXBwZXJfc3RlcHBlcldyYXBwZXJIb3Jpem9udGFsX18zbVFidlwiLFxuXHRcInN0ZXBXcmFwcGVyXCI6IFwiU3RlcHBlcl9zdGVwV3JhcHBlcl9fMUtWYU9cIixcblx0XCJzdGVwTmFtZVwiOiBcIlN0ZXBwZXJfc3RlcE5hbWVfX1NPaUEtXCIsXG5cdFwic3RlcE51bWJlclwiOiBcIlN0ZXBwZXJfc3RlcE51bWJlcl9fb2dKRWlcIixcblx0XCJjaXJjbGVcIjogXCJTdGVwcGVyX2NpcmNsZV9fMmlpSTFcIixcblx0XCJkaXZpZGVyTGluZVwiOiBcIlN0ZXBwZXJfZGl2aWRlckxpbmVfXzN0YzhYXCIsXG5cdFwiYm9yZGVyQ29sb3JcIjogXCJTdGVwcGVyX2JvcmRlckNvbG9yX18zODY3dlwiLFxuXHRcImRpdmlkZXJMaW5lXzFcIjogXCJTdGVwcGVyX2RpdmlkZXJMaW5lXzFfX1h1aDFmXCIsXG5cdFwiZGl2aWRlckxpbmVfMlwiOiBcIlN0ZXBwZXJfZGl2aWRlckxpbmVfMl9fMnpkU0hcIixcblx0XCJkaXZpZGVyTGluZV8zXCI6IFwiU3RlcHBlcl9kaXZpZGVyTGluZV8zX19UeFJqaFwiLFxuXHRcImRpdmlkZXJMaW5lXzRcIjogXCJTdGVwcGVyX2RpdmlkZXJMaW5lXzRfXzNDT0JzXCIsXG5cdFwiZGl2aWRlckxpbmVfNVwiOiBcIlN0ZXBwZXJfZGl2aWRlckxpbmVfNV9fM3RZbFZcIixcblx0XCJzdGVwcGVyV3JhcHBlclZlcnRpY2FsXCI6IFwiU3RlcHBlcl9zdGVwcGVyV3JhcHBlclZlcnRpY2FsX18zdkt1TVwiLFxuXHRcInN0ZXBEZXNjcmlwdGlvblwiOiBcIlN0ZXBwZXJfc3RlcERlc2NyaXB0aW9uX18xcXExSVwiLFxuXHRcInN0ZXBOdW1iZXJTZWxlY3RlZFwiOiBcIlN0ZXBwZXJfc3RlcE51bWJlclNlbGVjdGVkX18teDR2clwiLFxuXHRcInN0ZXBOdW1iZXJEaXNhYmxlZFwiOiBcIlN0ZXBwZXJfc3RlcE51bWJlckRpc2FibGVkX18zcHBYd1wiLFxuXHRcInN0ZXBEZXNjcmlwdGlvbkFjdGl2ZVwiOiBcIlN0ZXBwZXJfc3RlcERlc2NyaXB0aW9uQWN0aXZlX18xYXlielwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBVcGxvYWRQcmVzY3JpcHRpb25zIGZyb20gJy4uLy4uL1VwbG9hZFByZXNjcmlwdGlvbi9VcGxvYWRQcmVzY3JpcHRpb25zL2luZGV4JztcclxuaW1wb3J0IHtBZGRyZXNzfSBmcm9tIFwiLi4vQWRkcmVzcy9pbmRleFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9DYXJ0UGFnZS9pbmRleCc7XHJcbmltcG9ydCBPcmRlclN1bW1hcnlzIGZyb20gJy4uL09yZGVyU3VtbWFyeXMvaW5kZXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N0ZXBwZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFByZXNQb3AgZnJvbSAnLi4vLi4vVXBsb2FkUHJlc2NyaXB0aW9uL1VwbG9hZFByZXNjcmlwdGlvbnMvUHJlc1BvcHVwL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRTdGVwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGVwczogW10sXHJcbiAgICAgIG1vZGFsOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc3RlcHMsIGN1cnJlbnRTdGVwTnVtYmVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IHN0ZXBzU3RhdGUgPSBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0ZXBPYmogPSB7fTtcclxuICAgICAgc3RlcE9iai5kZXNjcmlwdGlvbiA9IHN0ZXA7XHJcbiAgICAgIHN0ZXBPYmouaGlnaGxpZ2h0ZWQgPSBpbmRleCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgc3RlcE9iai5zZWxlY3RlZCA9IGluZGV4ID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICBzdGVwT2JqLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RlcE9iajtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTdGVwcyA9IHRoaXMudXBkYXRlU3RlcChjdXJyZW50U3RlcE51bWJlciwgc3RlcHNTdGF0ZSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN0ZXBzOiBjdXJyZW50U3RlcHNcclxuICAgIH0pO1xyXG4gIH1cclxuICBoYW5kbGVQcm9jZWVkID0gKCkgPT4ge1xyXG4gICAgbGV0IHsgc3RlcCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdGVwOiBzdGVwKzFcclxuICAgIH0pXHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN0ZXBwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBjdXJyZW50U3RlcHMgPSB0aGlzLnVwZGF0ZVN0ZXAodGhpcy5wcm9wcy5jdXJyZW50U3RlcE51bWJlciwgc3RlcHMpO1xyXG5cclxuICAgIGlmIChwcmV2UHJvcHMuY3VycmVudFN0ZXBOdW1iZXIgIT09IHRoaXMucHJvcHMuY3VycmVudFN0ZXBOdW1iZXIpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN0ZXBzOiBjdXJyZW50U3RlcHNcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGVwKHN0ZXBOdW1iZXIsIHN0ZXBzKSB7XHJcbiAgICBjb25zdCBuZXdTdGVwcyA9IFsuLi5zdGVwc107XHJcbiAgICBsZXQgc3RlcENvdW50ZXIgPSAwO1xyXG5cclxuICAgIC8vIENvbXBsZXRlZCAtIHRvIGFkZCBhIGNoZWNrIG1hcmtcclxuICAgIC8vIFNlbGVjdGVkIC0gdG8gZmlsbCBzdGVwIHdpdGggY29sb3JcclxuICAgIC8vIEhpZ2hsaWdodGVkIC0gdG8gbWFrZSB0ZXh0IG9mIHNlbGVjdGVkIHN0ZXAgYm9sZFxyXG5cclxuICAgIHdoaWxlIChzdGVwQ291bnRlciA8IG5ld1N0ZXBzLmxlbmd0aCkge1xyXG4gICAgICAvLyBDdXJyZW50IHN0ZXBcclxuICAgICAgaWYgKHN0ZXBDb3VudGVyID09PSBzdGVwTnVtYmVyKSB7XHJcbiAgICAgICAgbmV3U3RlcHNbc3RlcENvdW50ZXJdID0ge1xyXG4gICAgICAgICAgLi4ubmV3U3RlcHNbc3RlcENvdW50ZXJdLFxyXG4gICAgICAgICAgaGlnaGxpZ2h0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0ZXBDb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUGFzdCBzdGVwXHJcbiAgICAgIGVsc2UgaWYgKHN0ZXBDb3VudGVyIDwgc3RlcE51bWJlcikge1xyXG4gICAgICAgIG5ld1N0ZXBzW3N0ZXBDb3VudGVyXSA9IHtcclxuICAgICAgICAgIC4uLm5ld1N0ZXBzW3N0ZXBDb3VudGVyXSxcclxuICAgICAgICAgIGhpZ2hsaWdodGVkOiBmYWxzZSxcclxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgY29tcGxldGVkOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGVwQ291bnRlcisrO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEZ1dHVyZSBzdGVwXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG5ld1N0ZXBzW3N0ZXBDb3VudGVyXSA9IHtcclxuICAgICAgICAgIC4uLm5ld1N0ZXBzW3N0ZXBDb3VudGVyXSxcclxuICAgICAgICAgIGhpZ2hsaWdodGVkOiBmYWxzZSxcclxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0ZXBDb3VudGVyKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U3RlcHM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgeyBtb2RhbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIG1vZGFsID0gIW1vZGFsXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb2RhbFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIHN0ZXBDb2xvcj1cInZpb2xldFwiIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBzdGVwcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHN0ZXBzSlNYID0gc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcFdyYXBwZXJ9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN0ZXBOdW1iZXJ9ICR7XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXAuc2VsZWN0ZWQgPyBgJHtzdHlsZXMuc3RlcE51bWJlclNlbGVjdGVkfWAgOiBgJHtzdHlsZXMuc3RlcE51bWJlckRpc2FibGVkfWBcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogYCR7c3RlcC5zZWxlY3RlZCA/ICBzdGVwQ29sb3IgOiBcIm5vbmVcIn1gIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGV9PjwvZGl2Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtzdGVwLmNvbXBsZXRlZCAgPyBcIlwiIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGVwRGVzY3JpcHRpb259ICR7c3RlcC5oaWdobGlnaHRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICBgJHtzdHlsZXMuc3RlcERlc2NyaXB0aW9uQWN0aXZlfWB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RlcC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcE5hbWV9PlN0ZXAge2luZGV4KzF9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aW5kZXggIT09IHN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2RpdmlkZXJMaW5lJ119ICR7c3R5bGVzW2BkaXZpZGVyTGluZV8ke3N0ZXBzLmxlbmd0aH1gXX0gJHtzdGVwLmNvbXBsZXRlZCA/IGAke3N0eWxlcy5ib3JkZXJDb2xvcn1gIDpcIlwifWB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0ID0gYHN0ZXBwZXJXcmFwcGVyJHtkaXJlY3Rpb259YFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW3N0XX0+XHJcbiAgICAgICAge3N0ZXBzSlNYfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50U3RlcE51bWJlcj09PTAgPyA8VXBsb2FkUHJlc2NyaXB0aW9ucy8+IDogXCJcIn1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmN1cnJlbnRTdGVwTnVtYmVyPT09MSA/IDxDYXJ0IGhhbmRsZVByb2NlZWQ9e3RoaXMuaGFuZGxlUHJvY2VlZH0vPiA6IFwiXCJ9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50U3RlcE51bWJlcj09PTIgPyA8QWRkcmVzcyBoYW5kbGVTdWJtaXRlZE9yZGVyPXt0aGlzLmhhbmRsZVByb2NlZWR9Lz4gOiBcIlwifVxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY3VycmVudFN0ZXBOdW1iZXI9PT0zID8gPE9yZGVyU3VtbWFyeXMgaGFuZGxlU3VibWl0ZWRPcmRlcj17dGhpcy50b2dnbGV9Lz4gOiBcIlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQcmVzUG9wIG1vZGFsPXt0aGlzLnN0YXRlLm1vZGFsfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkNhcnRTdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICBkaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjdXJyZW50U3RlcE51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBzdGVwQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59OyIsIi8vIGV4cG9ydCB7T3JkZXJTdWNjZXNzfSBmcm9tICcuL09yZGVyU3VjY2Vzc0Z1bGwvaW5kZXgnO1xyXG4vLyBleHBvcnQge0FkZHJlc3N9IGZyb20gJy4vQWRkcmVzcy9pbmRleCc7XHJcbi8vIGV4cG9ydCB7UGF5bWVudH0gZnJvbSAnLi9QYXltZW50L2luZGV4JztcclxuLy8gLy9leHBvcnQge1VwbG9hZFByZXNjcmlwdGlvbnN9IGZyb20gJy4vVXBsb2FkUHJlc2NyaXB0aW9ucy9pbmRleCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDYXJ0U3RlcHBlciBmcm9tIFwiLi9TdGVwcGVyL2luZGV4XCI7IFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FydERldGFpbHMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXBsb2FkUHJlc2NyaXB0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RlcHBlck1haW4oKXtcclxuICAgY29uc3QgW2N1cnJlbnRTdGVwLHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDIpO1xyXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGNsaWNrVHlwZSkgPT4ge1xyXG4gICAgbGV0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcDtcclxuICAgIGNsaWNrVHlwZSA9PT0gXCJuZXh0XCIgPyBuZXdTdGVwKysgOiBuZXdTdGVwLS07XHJcblxyXG4gICAgaWYgKG5ld1N0ZXAgPiAwICYmIG5ld1N0ZXAgPD0gNSkge1xyXG4gICAgICBzZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3BhdGNoID0gYXN5bmMoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJmZGdzZGZnc2RmZ1wiLCBkYXRhKVxyXG4gICAgYXdhaXQgZGlzcGF0Y2godXBsb2FkUHJlc2NyaXB0aW9ucyhkYXRhKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgIHsvKiA8QWRkcmVzcy8+IFxyXG4gICAgICAgICA8T3JkZXJDYW5jZWxsYXRpb24vPiBcclxuICAgICAgICAgPFBheW1lbnQvPiAgKi99XHJcbiAgICAgICAgIHsvKiA8U3dpcGVyRGVtby8+ICovfVxyXG4gICAgICAgICB7LyogPFBheW1lbnRTdWNjZXNzLz4gKi99XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC0xMiAke3N0eWxlcy5pbmRpY2F0aW9ufWB9PlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+SG9tZSAmZ3Q7PC9zcGFuPjxzcGFuPkNhcnQgRGV0YWlsczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxiPk15IENhcnQ8L2I+XHJcbiAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwcGVyQ29udGFpbmVySG9yaXpvbnRhbH0+XHJcbiAgICAgICAgICAgIDxDYXJ0U3RlcHBlclxyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cIkhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgIGN1cnJlbnRTdGVwTnVtYmVyPXtjdXJyZW50U3RlcCAtIDF9XHJcbiAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzQXJyYXl9XHJcbiAgICAgICAgICAgICAgc3RlcENvbG9yPVwiIzYwNTRFNVwiXHJcbiAgICAgICAgICAgICAgaGFuZGxlU3RlcHBlcj17KCkgPT4gaGFuZGxlQ2xpY2soXCJuZXh0XCIpfVxyXG4gICAgICAgICAgICAgIGRpc3BhdGNoPXsoZGF0YSk9PmhhbmRsZURpc3BhdGNoKGRhdGEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZCdG59IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dEJ0bn0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJuZXh0XCIpfT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmNvbnN0IHN0ZXBzQXJyYXkgPSBbXHJcbiAgLy8gXCJDcmVhdGUgeW91ciBhY2NvdW50XCIsXHJcbiAgXCJVcGxvYWRlZCBQcmVzY3JpcHRpb25cIixcclxuICBcIk15IENhcnRcIixcclxuICBcIkFkZCBBZGRyZXNzXCIsXHJcbiAgXCJPcmRlciBTdW1tYXJ5XCIsXHJcbiAgXCJQYXltZW50XCJcclxuXTtcclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsc1wiOiBcIlByZXNQb3B1cF9tb2RhbHNfXzNhTkNkXCIsXG5cdFwib3JkZXJfTWFpbkNvbnRhaW5lclwiOiBcIlByZXNQb3B1cF9vcmRlcl9NYWluQ29udGFpbmVyX18xWkhyT1wiLFxuXHRcIlJlZ0NvbmZpcm1NYWluXCI6IFwiUHJlc1BvcHVwX1JlZ0NvbmZpcm1NYWluX18zaTdKTlwiLFxuXHRcImNvbnRhY3RfbXJcIjogXCJQcmVzUG9wdXBfY29udGFjdF9tcl9fMTc5aXBcIixcblx0XCJvcmRlclN1Y2Nlc3NJbWdcIjogXCJQcmVzUG9wdXBfb3JkZXJTdWNjZXNzSW1nX19xbjdBaVwiLFxuXHRcIm1yX21lZF9sb3dlclwiOiBcIlByZXNQb3B1cF9tcl9tZWRfbG93ZXJfX3c5UkJYXCIsXG5cdFwiY29udGFjdF90ZXh0XCI6IFwiUHJlc1BvcHVwX2NvbnRhY3RfdGV4dF9fMjVUay1cIixcblx0XCJtcl9tZWRjb250YWN0XCI6IFwiUHJlc1BvcHVwX21yX21lZGNvbnRhY3RfXzFQMVM4XCIsXG5cdFwiZW5yb2xsaW5nX3NlY3Rpb25cIjogXCJQcmVzUG9wdXBfZW5yb2xsaW5nX3NlY3Rpb25fXzJLakV5XCIsXG5cdFwiZXhwbG9yZV9tZWRcIjogXCJQcmVzUG9wdXBfZXhwbG9yZV9tZWRfXzEtVllmXCIsXG5cdFwiZXhwbG9yZV9tZWRCdG5cIjogXCJQcmVzUG9wdXBfZXhwbG9yZV9tZWRCdG5fXzFiZ0tFXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBzdGljayBmcm9tICcvc3VjY2Vzcy5wbmcnO1xyXG4vLyBpbXBvcnQgY2FuY2VsIGZyb20gJy9jbG9zZWUucG5nJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ByZXNQb3B1cC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFByZXNQb3B1cCA9IChwcm9wcykgPT4ge1xyXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICByZXR1cm4gPE15Q2xhc3Mgey4uLnByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cclxuIH1cclxuXHJcbmNsYXNzIE15Q2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBsb2M6IHByb3BzLnJvdXRlci5xdWVyeS5sb2MsXHJcbiAgICAgICAgbG9hZGVkOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzZGZnc2ZnaHNmZ2hmZ1wiLCB0aGlzLnByb3BzKVxyXG4gICB9XHJcbiAgIFxyXG4gICByZW5kZXIoKSB7XHJcbiAgIGxldCB7bW9kYWwsdG9nZ2xlLCByb3V0ZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7c3R5bGVzLm9yZGVyX01haW5Db250YWluZXJ9IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUmVnQ29uZmlybU1haW59PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RfbXJ9IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbEltZ30gb25DbGljaz17dG9nZ2xlfSBzcmM9e1wiL2Nsb3NlZS5wbmdcIn0gYWx0PVwiY2FuY2VsXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm9yZGVyX3NlY30gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclN1Y2Nlc3NJbWd9IHNyYz17XCIvc3VjY2Vzcy5wbmdcIn0gYWx0PVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1yX21lZF9sb3dlcn0gZC1mbGV4YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdF90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubXJfbWVkY29udGFjdH0+VGhhbmsgWW91PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lbnJvbGxpbmdfc2VjdGlvbn0+V2Ugd2lsbCByZWFjaCB5b3Ugc29vbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZV9tZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvU2hvcFByb2R1Y3RDb21wb25lbnQnKX0gY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZV9tZWRCdG59PkNvbnRpbnVlIFNob3BwaW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9BY2NvdW50cy9PcmRlcicpfSBjbGFzc05hbWU9e3N0eWxlcy5leHBsb3JlX21lZEJ0bn0+TXkgT3JkZXJzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgIHVzZXJEZXRhaWw6IHN0YXRlLmF1dGgudXNlckRldGFpbHMsXHJcbiAgIGNob29zZU1lZGljaW5lczogc3RhdGUuY2hvb3NlTWVkaWNpbmVzLFxyXG4gICBwcmVzY3JpcHRpb246IHN0YXRlLnByZXNjcmlwdGlvblxyXG4gfSk7XHJcbiBcclxuIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcmVzUG9wdXApXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVwbG9hZE1haW5IZWFkXCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc191cGxvYWRNYWluSGVhZF9fMkRsZ1hcIixcblx0XCJ1cGxvYWRQcmVzTWFpbkNvbnRhaW5lclwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkUHJlc01haW5Db250YWluZXJfXzF3NUFHXCIsXG5cdFwidXBsb2FkUHJlc0JveFwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkUHJlc0JveF9feG9lTnpcIixcblx0XCJ2YWxpZFByZXNjcmlwXCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc192YWxpZFByZXNjcmlwX19Oc3NGaFwiLFxuXHRcInVwbG9hZEltZ1wiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkSW1nX18ycHdVVFwiLFxuXHRcImRpZmZEb2NzXCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc19kaWZmRG9jc19fMVRyVjJcIixcblx0XCJ1cGxvYWRGaWxlXCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc191cGxvYWRGaWxlX18xV081NlwiLFxuXHRcInByZXNjcmlwTGlzdFwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfcHJlc2NyaXBMaXN0X18xZDhjd1wiLFxuXHRcInByZXNjcmlwTGlzdHRleHRcIjogXCJVcGxvYWRQcmVzY3JpcHRpb25zX3ByZXNjcmlwTGlzdHRleHRfX1hQUlBDXCIsXG5cdFwidXBsb2FkcHJlc2NyaXBDYXJkc1wiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkcHJlc2NyaXBDYXJkc19fM0pfM2dcIixcblx0XCJ1cGxvYWRwcmVzY3JpcEF0dGFjaENvbnRhaW5lclwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkcHJlc2NyaXBBdHRhY2hDb250YWluZXJfX3huWWNTXCIsXG5cdFwidXBsb2FkYXR0YWNoZWRQcmVzY3JpcDFcIjogXCJVcGxvYWRQcmVzY3JpcHRpb25zX3VwbG9hZGF0dGFjaGVkUHJlc2NyaXAxX182dzhENVwiLFxuXHRcInVwbG9hZHByZXNjcmlwVGlja21hcmtcIjogXCJVcGxvYWRQcmVzY3JpcHRpb25zX3VwbG9hZHByZXNjcmlwVGlja21hcmtfX1hYenNpXCIsXG5cdFwidXBsb2FkcHJlc2NyaXBJbWdcIjogXCJVcGxvYWRQcmVzY3JpcHRpb25zX3VwbG9hZHByZXNjcmlwSW1nX19QZGxSeVwiLFxuXHRcInVwbG9hZEljb25zTGlzdFwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkSWNvbnNMaXN0X18zVGdMNlwiLFxuXHRcInVwbG9hZFByZXNjcmlwUHJvY2VlZFwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkUHJlc2NyaXBQcm9jZWVkX18zeU80ZFwiLFxuXHRcInVwbG9hZHByb2NlZWRCdXR0b25cIjogXCJVcGxvYWRQcmVzY3JpcHRpb25zX3VwbG9hZHByb2NlZWRCdXR0b25fXzFnM1ozXCIsXG5cdFwidXBsb2FkUHJlc0JveHJpZ2h0XCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc191cGxvYWRQcmVzQm94cmlnaHRfXzNKYnY1XCIsXG5cdFwidmFsaWRwcmVzY3JpcEltZ1wiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdmFsaWRwcmVzY3JpcEltZ19fMmlUaHlcIixcblx0XCJ2YWxpZFRleHRlbmQxXCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc192YWxpZFRleHRlbmQxX18zaEo0ZlwiLFxuXHRcImJsdWVUaWNrSW1nXCI6IFwiVXBsb2FkUHJlc2NyaXB0aW9uc19ibHVlVGlja0ltZ19fX0RmMjRcIixcblx0XCJ1cGxvYWRfbGFiZWxcIjogXCJVcGxvYWRQcmVzY3JpcHRpb25zX3VwbG9hZF9sYWJlbF9fMnNBSHhcIixcblx0XCJ1cGxvYWRfZmlsZVwiOiBcIlVwbG9hZFByZXNjcmlwdGlvbnNfdXBsb2FkX2ZpbGVfXzNVU2x0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VwbG9hZFByZXNjcmlwdGlvbnMubW9kdWxlLnNjc3MnO1xyXG4vLyBpbXBvcnQgdXBsb2FkIGZyb20gJy91cGxvYWQucG5nJztcclxuLy8gaW1wb3J0IGRlbGV0ZTEgZnJvbSAnL2RlbGV0ZTEucG5nJztcclxuLy8gaW1wb3J0IHZpZXcgZnJvbSAnL3ZpZXcucG5nJztcclxuLy8gaW1wb3J0IGRvd25sb2FkIGZyb20gJy9kb3dubG9hZC5wbmcnO1xyXG4vLyBpbXBvcnQgdGljayBmcm9tICcvdGlja21hcmsucG5nJztcclxuLy8gaW1wb3J0IGJsdWV0aWNrIGZyb20gJy9ibHVldGljay5wbmcnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHByb2R1Y3RzX3VybCB9IGZyb20gJy4uLy4uLy4uL2FwaVZhcmlhYmxlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExlYWtBZGRUd29Ub25lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXBsb2FkUHJlc2NyaXB0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xyXG5jbGFzcyBVcGxvYWRQcmVzY3JpcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBcclxuICAgICAgICB1cGxvYWRJbWFnZXM6IFtdXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXBsb2FkSW1hZ2VzOiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBoYW5kbGVGaWxlVXBsb2FkID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBsZXQgeyB1cGxvYWRJbWFnZXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlbGVjdGVkRmlsZSk7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvZHVjdHNfdXJsfS91cGxvYWQvdXBsb2FkRmlsZS9zaW5nbGVgLCBmb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvYmogPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdXBsb2FkSW1hZ2VzLnB1c2gob2JqKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkSW1hZ2VzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBsb2FkSW1hZ2VzKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChwcm9kdWN0TGlzdChyZXMuZGF0YS5kYXRhLmxpc3QpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyB1cGxvYWRJbWFnZXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbWQtMTIgJHtzdHlsZXMudXBsb2FkTWFpbkhlYWR9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIFByZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlcy51cGxvYWRQcmVzTWFpbkNvbnRhaW5lcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy51cGxvYWRQcmVzQm94fSAgZC1mbGV4YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL3VwbG9hZC5wbmdcIn0gYWx0PVwidXBsb2FkLWltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRpZmZEb2NzfT5EcmFnICYgRHJvcCBvciBCcm93c2UgZmlsZXMgdG8gdXBsb2FkIHBob3RvIG9mIHlvdXI8YnIgLz4gcHJlc2NyaXB0aW9uIChKUEcsIFBERiwgRG9jLCBldGMuKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkX2xhYmVsfSBodG1sRm9yPXtzdHlsZXMudXBsb2FkX2ZpbGV9PkJyb3dzZSBGaWxlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlVXBsb2FkfSB0eXBlPVwiZmlsZVwiIGlkPXtzdHlsZXMudXBsb2FkX2ZpbGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXBMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcExpc3R0ZXh0fT5VcGxvYWQgUHJlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudXBsb2FkcHJlc2NyaXBDYXJkc30gZC1mbGV4YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZEltYWdlcy5sZW5ndGggPiAwID8gdXBsb2FkSW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnVwbG9hZHByZXNjcmlwQXR0YWNoQ29udGFpbmVyfSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudXBsb2FkYXR0YWNoZWRQcmVzY3JpcDF9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkcHJlc2NyaXBUaWNrbWFya30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi90aWNrbWFyay5wbmdcIn0gYWx0PVwidGlja21hcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkcHJlc2NyaXBJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmx9IGFsdD1cInByZXNjcmlwdGlvbi1pbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudXBsb2FkSWNvbnNMaXN0fSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9kZWxldGUxLnBuZ1wifSBhbHQ9XCJkZWxldGUtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi92aWV3LnBuZ1wifSBhbHQ9XCJ2aWV3LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvZG93bmxvYWQucG5nXCJ9IGFsdD1cImRvd25sb2FkLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnVwbG9hZHByZXNjcmlwQXR0YWNoQ29udGFpbmVyfSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudXBsb2FkYXR0YWNoZWRQcmVzY3JpcDF9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkcHJlc2NyaXBUaWNrbWFya30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi90aWNrbWFyay5wbmdcIn0gYWx0PVwidGlja21hcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkcHJlc2NyaXBJbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvcHJlc2NyaXB0aW9uLWltZy5wbmdcIn0gYWx0PVwicHJlc2NyaXB0aW9uLWltZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy51cGxvYWRJY29uc0xpc3R9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2RlbGV0ZTEucG5nXCJ9IGFsdD1cImRlbGV0ZS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL3ZpZXcucG5nXCJ9IGFsdD1cInZpZXctaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9kb3dubG9hZC5wbmdcIn0gYWx0PVwiZG93bmxvYWQtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkUHJlc2NyaXBQcm9jZWVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oYW5kbGVTdGVwKCduZXh0Jyl9IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZHByb2NlZWRCdXR0b259PkNPTlRJTlVFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTQgJHtzdHlsZXMudXBsb2FkUHJlc0JveHJpZ2h0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgY29sLW1kLTEyICR7c3R5bGVzLnZhbGlkUHJlc2NyaXB9YH0+V2hhdCBpcyBhIHZhbGlkIHByZXNjcmlwdGlvbj88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ2YWxpZHByZXNjcmlwLWltZ1wiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL3ByZXNjcmlwdGlvbi1pbWcucG5nJ30gY2xhc3NOYW1lPXtgY29sLW1kLTEyICR7c3R5bGVzLnZhbGlkcHJlc2NyaXBJbWd9YH0gYWx0PVwidmFsaWQtcHJlc2NyaXB0aW9uIGltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC0xMiAke3N0eWxlcy52YWxpZFRleHRlbmQxfSBkLWZsZXhgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9ibHVldGljay5wbmcnIGFsdD1cImJsdWV0aWNrLWltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmx1ZVRpY2tJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkdGV4dEVuZH0+UGF0aWVudCBEZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTEyICR7c3R5bGVzLnZhbGlkVGV4dGVuZDF9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2JsdWV0aWNrLnBuZycgYWx0PVwiYmx1ZXRpY2staW1hZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5ibHVlVGlja0ltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudmFsaWR0ZXh0RW5kfT5Eb2N0b3LigJlzIERldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbWQtMTIgJHtzdHlsZXMudmFsaWRUZXh0ZW5kMX0gZC1mbGV4YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2JsdWV0aWNrLnBuZyd9IGFsdD1cImJsdWV0aWNrLWltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmx1ZVRpY2tJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkdGV4dEVuZH0+RG9jdG9y4oCZcyBTaWduICsgU3RhbXA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbWQtMTIgJHtzdHlsZXMudmFsaWRUZXh0ZW5kMX0gZC1mbGV4YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2JsdWV0aWNrLnBuZyd9IGFsdD1cImJsdWV0aWNrLWltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmx1ZVRpY2tJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkdGV4dEVuZH0+TWVkaWNpbmUgRGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZFByZXNjcmlwdGlvbnM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICBjb25zdCBsb2NhbGVEb21haW4gPSBnZXREb21haW5Mb2NhbGUoXG4gICAgICBhcyxcbiAgICAgIGN1ckxvY2FsZSxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoXG4gICAgICAgICAgYWRkTG9jYWxlKGRlbEJhc2VQYXRoKHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lKSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICAgICAgaGFzQmFzZVBhdGgocmVzb2x2ZWRBcykgPyBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgICAgICkucGF0aG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKHJlc29sdmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHwgKG9wdGlvbnMuc2Nyb2xsID8geyB4OiAwLCB5OiAwIH0gOiBudWxsKVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWU6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlLmluY2x1ZGVzKCc6JykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2BcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsICdnJyksIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwgJ2cnKSxcbiAgICAgICAgICBgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIHZhbHVlID0gdmFsdWVcbiAgICAucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCAnXFxcXCQxJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywgJysnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywgJzonKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywgJz8nKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csICcqJylcblxuICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgLy8gY29ycmVjdGx5XG4gIHJldHVybiBwYXRoVG9SZWdleHBcbiAgICAuY29tcGlsZShgLyR7dmFsdWV9YCwgeyB2YWxpZGF0ZTogZmFsc2UgfSkocGFyYW1zKVxuICAgIC5zdWJzdHIoMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgY29uc3QgaGFkTG9jYWxlID0gcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGNvbXBpbGVOb25QYXRoKHZhbHVlLCBwYXJhbXMpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgbGV0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICAvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbiAgaWYgKGhhZExvY2FsZSkge1xuICAgIHBhcmFtS2V5cyA9IHBhcmFtS2V5cy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICduZXh0SW50ZXJuYWxMb2NhbGUnKVxuICB9XG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIChwYXJzZWREZXN0aW5hdGlvbiBhcyBhbnkpLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uLy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMobm9ybWFsaXplTG9jYWxlUGF0aChhc1BhdGgsIGxvY2FsZXMpLnBhdGhuYW1lKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGNvbnN0IGZzUGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCksXG4gICAgICAgICAgbG9jYWxlc1xuICAgICAgICApLnBhdGhuYW1lXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoZnNQYXRobmFtZSlcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9pbmRleCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXgnO1xyXG5pbXBvcnQgQ2FydERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL015Q2FydEZsb3cvaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gQ2FydERldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8Q2FydERldGFpbC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0RGV0YWlsc1xyXG4iLCIvLyBSRURVWCBBQ1RJT04gVFlQRVNcclxuLy8gZXhwb3J0IGNvbnN0IFRJQ0sgPSAnVElDSydcclxuLy8gZXhwb3J0IGNvbnN0IElOQ1JFTUVOVCA9ICdJTkNSRU1FTlQnXHJcbi8vIGV4cG9ydCBjb25zdCBERUNSRU1FTlQgPSAnREVDUkVNRU5UJ1xyXG4vLyBleHBvcnQgY29uc3QgUkVTRVQgPSAnUkVTRVQnXHJcbmV4cG9ydCBjb25zdCBVU0VSX0RFVEFJTFM9J1VTRVJfREVUQUlMUydcclxuZXhwb3J0IGNvbnN0IFVTRVJfVE9LRU49J1VTRVJfVE9LRU4nXHJcbmV4cG9ydCBjb25zdCBDQVJUX1BST0RVQ1RTPSdDQVJUX1BST0RVQ1RTJ1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9MSVNUUz0nUFJPRFVDVF9MSVNUUydcclxuZXhwb3J0IGNvbnN0IENIT09TRV9NRURJQ0lORT0nQ0hPT1NFX01FRElDSU5FJ1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BSRVNDUklQVElPTj0nVVBMT0FEX1BSRVNDUklQVElPTidcclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9