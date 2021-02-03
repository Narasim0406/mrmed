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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/1DH":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAyMVYxOUMyMCAxNy45MzkxIDE5LjU3ODYgMTYuOTIxNyAxOC44Mjg0IDE2LjE3MTZDMTguMDc4MyAxNS40MjE0IDE3LjA2MDkgMTUgMTYgMTVIOEM2LjkzOTEzIDE1IDUuOTIxNzIgMTUuNDIxNCA1LjE3MTU3IDE2LjE3MTZDNC40MjE0MyAxNi45MjE3IDQgMTcuOTM5MSA0IDE5VjIxIiBzdHJva2U9IiM2NDY0NjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTIgMTFDMTQuMjA5MSAxMSAxNiA5LjIwOTE0IDE2IDdDMTYgNC43OTA4NiAxNC4yMDkxIDMgMTIgM0M5Ljc5MDg2IDMgOCA0Ljc5MDg2IDggN0M4IDkuMjA5MTQgOS43OTA4NiAxMSAxMiAxMVoiIHN0cm9rZT0iIzY0NjQ2NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0KDQo="

/***/ }),

/***/ "/xQm":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "0Kpr":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/carousel-tablets-8a6524d3e83c5f68a7cb73238a13dcfd.png";

/***/ }),

/***/ "0yMW":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGTSURBVHgBtVTBVYNAEB2wANOBHD2SDvBRgC3ozZtaALBAASY3b6aEePMGuXnEDuhAbAD8A0MkBFaSvMx784Zld//+mf07RGcwQzeplLIQbPgMXsAz/MvpGFBsdAzDCPDpDEynVVU9Y01GI3bR/xFF0QvCK9xidgD/gH8KU2Z8jfGD67qUJMmG/mMax3FQlqViALBZIi7AqOhkwKBPkgWZpqk8zwtHQbHhDovf+BuAc116vbU3GKfdeXOLbhiPHMFUWy8BXUkm1LLeA+3cchGG4YKmmZLoSFl2QQWQU9nQRJNatxlZQ6D1SSj8Nx1gIPHVJdUHPcpQzyv5zIdAMznZocPMHgWV2+YaWfyaaIKxrKgp297T3aYPKdUiZv2JGnSAVislxGV/fudFQU4JNe89F1HnA4COCN9ilkEQzLWgwiChP4mkGL8jiwLKmOGgW+o1GcyvfN+/HwXtgKuhlyLW9oW1EJj1e8BoP5W6OnAbmy7B9ocalazbJoNoDwFrm/QU6wKjvjXeSeIX0Iy7Gl8sndN+AQIMtxuLeW7PAAAAAElFTkSuQmCC"

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "57gg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNC43MzE2IDEyLjAwNjhIMTIuOTI3N1YxMi42MDgxSDE0LjczMTZWMTIuMDA2OFoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik0xMi4zMjYzIDEyLjAwNjhIMTAuNTIyNVYxMi42MDgxSDEyLjMyNjNWMTIuMDA2OFoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik05LjkyMTAxIDEyLjAwNjhIOC4xMTcxOVYxMi42MDgxSDkuOTIxMDFWMTIuMDA2OFoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik0xNy43MzM2IDYuMjM1MTlMMTEuNzg0OSAwLjI4NTU5NUMxMS42MTYgMC4xMTUwNTkgMTEuMzg1OCAwLjAxOTIzMTMgMTEuMTQ1OCAwLjAxOTUzMkgxMS4xNDMxQzEwLjkwNDYgMC4wMTk2NDQ3IDEwLjY3NjIgMC4xMTU1MSAxMC41MDkgMC4yODU1OTVMNC4xOTg2OCA2LjU5NTA1SDAuOTAxOTA4QzAuNDAzNzkyIDYuNTk1MDUgMCA2Ljk5ODg0IDAgNy40OTY5NlYxNS45MTQ4QzAgMTYuNDEyOSAwLjQwMzc5MiAxNi44MTY3IDAuOTAxOTA4IDE2LjgxNjdINS4zNTYxM0w2LjI1MzIzIDE3LjcxNDdDNi40MjIxNCAxNy44ODUyIDYuNjUyMzIgMTcuOTgxMSA2Ljg5MjM4IDE3Ljk4MDdINi44OTQ3OEM3LjEzMzM0IDE3Ljk4MDcgNy4zNjE5IDE3Ljg4NDggNy41MjkxMiAxNy43MTQ3TDguNDI4MDMgMTYuODE2N0gxNS4zMzI0QzE1LjgzMDUgMTYuODE2NyAxNi4yMzQzIDE2LjQxMjkgMTYuMjM0MyAxNS45MTQ4VjkuMDEwMzZMMTcuNzMyMSA3LjUxMjU5QzE3LjkwMzEgNy4zNDUyNSAxNy45OTk2IDcuMTE2MjQgMTggNi44NzcwNUMxOC4wMDA5IDYuNjM2MDEgMTcuOTA0OSA2LjQwNDc1IDE3LjczMzYgNi4yMzUxOVpNMTMuOTA5MiAzLjI2MDk5TDEwLjU3NTIgNi41OTUwNUg4LjAyMjE3TDEyLjYzMjcgMS45ODQ0OUwxMy45MDkyIDMuMjYwOTlaTTEwLjkzNDcgMC43MDk0OTJDMTEuMDQ5MSAwLjU5MjM1NyAxMS4yMzY4IDAuNTkwMTAyIDExLjM1MzkgMC43MDQ0OTRDMTEuMzU1NiAwLjcwNjE0OCAxMS4zNTczIDAuNzA3ODAxIDExLjM1ODkgMC43MDk0OTJMMTIuMjA3NiAxLjU1OTM5TDcuMTcxNjcgNi41OTUwNUg1LjA0ODg4TDEwLjkzNDcgMC43MDk0OTJaTTcuMTAzNDIgMTcuMjkwOEM3LjA0ODQ1IDE3LjM0ODIgNi45NzI0NiAxNy4zODA4IDYuODkyOTggMTcuMzgxQzYuODEyNDEgMTcuMzgwOCA2LjczNTI5IDE3LjM0ODMgNi42Nzg5MyAxNy4yOTA4TDYuMjA2NjMgMTYuODE2N0g3LjU3NzgzTDcuMTAzNDIgMTcuMjkwOFpNMTUuNjMzMSAxNS45MTQ4QzE1LjYzMzEgMTYuMDgwOCAxNS40OTg1IDE2LjIxNTQgMTUuMzMyNCAxNi4yMTU0SDAuOTAxOTA4QzAuNzM1ODgxIDE2LjIxNTQgMC42MDEyNzIgMTYuMDgwOCAwLjYwMTI3MiAxNS45MTQ4VjExLjcwNTlIMTUuNjMzMVYxNS45MTQ4Wk0xNS42MzMxIDExLjEwNDZIMC42MDEyNzJWOS4zMDA3OEgxNS42MzMxVjExLjEwNDZaTTE1LjYzMzEgOC42OTk1SDAuNjAxMjcyVjcuNDk2OTZDMC42MDEyNzIgNy4zMzA5MyAwLjczNTg4MSA3LjE5NjMyIDAuOTAxOTA4IDcuMTk2MzJIMTUuMzMyNEMxNS40OTg1IDcuMTk2MzIgMTUuNjMzMSA3LjMzMDkzIDE1LjYzMzEgNy40OTY5NlY4LjY5OTVaTTE3LjMwODUgNy4wODU5OUwxNi4yMzQzIDguMTYwMTZWNy40OTY5NkMxNi4yMzQzIDYuOTk4ODQgMTUuODMwNSA2LjU5NTA1IDE1LjMzMjQgNi41OTUwNUgxMS40MjQyTDE0LjMzMzEgMy42ODYwOUwxNy4zMDczIDYuNjYwMjlDMTcuMzY1MSA2LjcxNjg4IDE3LjM5NzYgNi43OTQzNyAxNy4zOTc1IDYuODc1MjRDMTcuMzk3NCA2Ljk1NDYxIDE3LjM2NTMgNy4wMzA2IDE3LjMwODUgNy4wODU5OVoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik0yLjg4MzcyIDE1LjYyMjRDMi45Mjc2MSAxNS41ODQ1IDIuOTY4NzIgMTUuNTQzMyAzLjAwNjY4IDE1LjQ5OTVDMy40MDQyMyAxNS45NjI1IDQuMDg3MzIgMTYuMDUwNSA0LjU4OTIzIDE1LjcwMzNDNC45MTMxNyAxNS40NzY4IDUuMTA3NiAxNS4xMDc2IDUuMTExMTQgMTQuNzEyNEM1LjExMTE0IDE0LjA0ODMgNC41NzI3MyAxMy41MDk5IDMuOTA4NTkgMTMuNTA5OUMzLjg0ODkxIDEzLjUwOSAzLjc4OTMxIDEzLjUxNDEgMy43MzA2MSAxMy41MjQ5TDMuNzIyOCAxMy41MjdDMy43MTk3OSAxMy41MjcgMy43MTY3OCAxMy41MjcgMy43MTQwOCAxMy41MjdDMy40Mzg2NiAxMy41NzI4IDMuMTg4MTkgMTMuNzE0MSAzLjAwNjY4IDEzLjkyNjJDMi41NzIyNiAxMy40MjM5IDEuODEyODEgMTMuMzY4OCAxLjMxMDQ5IDEzLjgwMzNDMC44MDgxMjIgMTQuMjM3NyAwLjc1MzA2OCAxNC45OTcxIDEuMTg3NTMgMTUuNDk5NUMxLjYyMTk1IDE2LjAwMTggMi4zODEzNSAxNi4wNTY5IDIuODgzNzIgMTUuNjIyNFpNMy44MzI1MyAxNC4xMTc0QzMuODU3NTkgMTQuMTEyNyAzLjg4MzA3IDE0LjExMDYgMy45MDg1OSAxNC4xMTExQzQuMjQwNjggMTQuMTExMSA0LjUwOTg2IDE0LjM4MDMgNC41MDk4NiAxNC43MTI0QzQuNTA5NTYgMTQuODM5NiA0LjQ2ODExIDE0Ljk2MzMgNC4zOTE3MSAxNS4wNjVDNC4zODA4OSAxNS4wNzk4IDQuMzcyNDcgMTUuMDk1MSA0LjM2MDE1IDE1LjExMDRDNC4zNTgwNCAxNS4xMTI4IDQuMzU1MDQgMTUuMTE0MyA0LjM1MjYzIDE1LjExNjdDNC4yMzkwNyAxNS4yNDIxIDQuMDc3NzcgMTUuMzEzNyAzLjkwODU5IDE1LjMxMzdDMy41NzY1NyAxNS4zMDggMy4zMTE5OCAxNS4wMzQzIDMuMzE3NjUgMTQuNzAyMkMzLjMyMjY5IDE0LjQwNzQgMy41NDA3MiAxNC4xNTk3IDMuODMyNTMgMTQuMTE3NFpNMi4xMDQ3NyAxNC4xMTExQzIuNDM2ODYgMTQuMTExMSAyLjcwNjA0IDE0LjM4MDMgMi43MDYwNCAxNC43MTI0QzIuNzA2MDQgMTUuMDQ0NSAyLjQzNjg2IDE1LjMxMzcgMi4xMDQ3NyAxNS4zMTM3QzEuNzcyNjggMTUuMzEzNyAxLjUwMzUgMTUuMDQ0NSAxLjUwMzUgMTQuNzEyNEMxLjUwMzUgMTQuMzgwMyAxLjc3MjY4IDE0LjExMTEgMi4xMDQ3NyAxNC4xMTExWiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "5eiu":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgBrZThDYIwEIWfTtAR2EBGYAQ30Q10E9zAEeoGxgnaDXCD8y7pj6YeKdfykgvhhX7weAUQ0Zv+dYVRR55R8U9oAH0Vf0ADKCr+CKME9FF8x+/JBBPQS/Ej9Mjr4ju7ojFp0aFFvNBnoAmtksUZyKNHDHj2bMgcNPAse0U8Z6BFg6Vy6luDL7oXLd4KSEh+SCXNPJetMJ+iz7QiVGIG2ihUYspTPLpBFuABBgmQD1Ma+WfJuXxO8QfrL21lwhSFFgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FPAh");


/***/ }),

/***/ "AzC5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsCAYAAADxRjE/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT2SURBVHgBzZnPTxtHFMffG6+dElELAkVqIoJRD1RqpcKhh6aqkkjttTFN+NFTIf8AcOmVcGx7KJHSa0JOqTAREKmnVqpzSHvIAR/aA1WjOkFtJMIPq0ZQ1bszeW/MWmaxvTO2CXwk8Hh3dvfL2/drBoQGSS4+TzhuLIlCvAcKEnQocWCCghwg5BTKjHLVQ283n14a781BAyDUQfLOX22xeNuEUjBGqhJgDaZBendTw51zUAdWokfvPU94sdg0KByDZoCQBU/O2Io3Fj18f3taKTVJwzZoNiReSW98YeiNtNn0ELR1o6cWadgPRwwi3pi/2j4TOq/WyaH59X6IOIv7AfaqSBfyOLg03l41WKuK1oKF8zMchTuEoSBT2MHL1YRXFL3vEitwHIJ9aggXwQPFDHHqeCxcDkJ/LC6nK506JLqY0l6pD1dFKZwcSW1OBo8fcI+h+Y0xEOIOnCxyFJi95W5SsjRXOYiIaTh5tAXdpCTaaY2PnRS3CMJukqRY8787/gAFTpDoI+G0g3DhHMD5VgG7LsCzvIRf/lGH5uy61QVEojH2be3f2qevLmwkBYhFCKHjtWIIbP5n/tddOCtg9G3UosrZ3FNwKyNhtwDw4TmE7jjCdyterVuVfFtbWiBeMbHyJz0IA10IXz+WRsJ57vV3RcVzHS0I0x9E9JitP/OrF3a7NqfV5VYiXbyjwiQY0P066od9+b7Q4zBG+gSYkFmXcP0dAX3tte+pUGidQpdrw0LCFmF8K336VnVRLKCzxayJZBda3Vb6pxYC8KL+lEIkwJC1/MGbsuivPorQQw/7bEcLGHP7Nw8ePJEmU3Wn6aDCftOu+hFF/Mc9HOlQJo79tuibK+tsLQlr/9KcqPn6YnXbeCp89sNeDz8+YXrBHkX6gz89ygaRiuc58Aa6InCUiN2dXsfmgnHKBGzlDUpXpv5qAqc/G8zCex/26b4z2FTBa3mwxkr0T09lKYM0C44BW1h01nQyC/7msddU4Y/+tnMNVE5OoFJZm4vYRbh6ce/QqHh2jWAaDSM13J6hsJIZSy+BUap0fWcOpr56+PFpaOkOkuFfIjXcxQOrbSouBMFiYgu/qWCnFw4WRRfHkAYL+JVyR7axB3WxSdctP7EPQOl5y/ypX7BU8i61pkZNk8/KCwXPdjzqMai1PCt0KjSB4+BWxrPOzUTu/kjnEg+0pb1IJA2WLsL4D+6Om833s49t8BXBpdLIH1xLbd6gbamqa0T24Zb9wDsf5y5O6NWIqW+vbim4/busx8KaQoEWAJ+3Z3lcin/XEbNRT01AlTa1JQpwhbo67uhsYOty4HJhqh+c8wXrb+WnyNqTZO1va13OXZ3vx7xEqpT2uDf5Y4u7QhnaIxuQIysPVBXNDC1s8e7SJTDEd5vT9CZ4vbfnQs0Fqi20vTy1MNQxW37sUFWJFHBcb3YbwgJ5vcjBxZ/NFMxuERTMHBL9Pb8Gzx2EOrJJUyHDFfIwVelUxfqtq6SUU3BcsOD/Lbd6fY5pjzpDgTdYHnhBanZKbHHy8QEbH28ECeombchcriWYMU66YcWnIcgo0pVTfpkOn27B6L3thOtIFv8FNIccpbSb7o6YrfU/liB19Zcl8YI2T+rYaaWkmKYEvExi52zE+jS8Qr2WenGJQqOfrH+RxCSwuCVRHrhZOp5DVBnw1MNCtJBeGnwzCw3wEhL8At6yEPcCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "CSOR":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgBzZntdZswFIYvOf0fRiAThExQdQNvUDJBRzCZoGyAM4G7Ae4EdifAnQA6we29FmpxYinoC3jPeQ+2kaWHq2+RgIcQIKWLIH8mZ+Qc5G/pkKQnn4frifyTfEjk9/lEoILckDsyOrhG+aDRQQty6wh5y5xXAaFFmWZDRDGS9yibVBDYbx5Vb+POO9qUwXYG0Lfegovoj98XgHWDXiiybtAo2+zSsMpfP4Ll0aBDAFyJmSUzAR9XBKvcjBmTEWxBlxqmKE2lWVkGVur7a0/TFwI9XP2CphlMCMT9HrFtMbiOR8S6RsyyyVFm2I028WaDs4kDo4cWY+C9NmGMqOrUNCbgWsGm2kR5jrMrTU0jRnoHpmWe6lhzSt+JGSY3A+c5WOl8Bm+Zy7wAP2pv20b44QHg5QW8ZC7zkYHD1ntZSvDXV3CSGfgSYX0d2E4KStw0ikKCn04QUJdOF08M/vQE8Pwcpn1HB1a6vw824jBwvC23EDSpNgBVFQq4/wQS+HZuveOzcNuvawkcVmeOsL5X2AJzFLdbWka17rDmMv9whH9rb9t2FAb1rXpzmQeO8A/tbZcI+8pc5kktfm5vi3iNup7FT8vEd8n/g7r34uoJO/CbxWXpI3z49wnl4Z5+idl1GF1chnnXIa7w0XR2xhntdnI7ExKeNwecZ1VN3iKNN6H8BA1M1XgjOv6s07j3221AWe83oSyMe0Lp6lr7GLi+g5QWPzqGRXlovRbgDUwRJSxXAFuCjRaGLsFFC0GX4CMM/yJGZ+7sAkII5eixiwgb7qXMG/DQ0W5wpvd1Yoi4y5jN/6lcQRPw1FAwmw9keH7Ohquae9Vq8Bdfb06xFvoLwKOi9RRrg+0AAAAASUVORK5CYII="

/***/ }),

/***/ "ChW8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART_PRODUCTS; });
// REDUX ACTION TYPES
// export const TICK = 'TICK'
// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'
// export const RESET = 'RESET'
const USER_DETAILS = 'USER_DETAILS';
const USER_TOKEN = 'USER_TOKEN';
const CART_PRODUCTS = 'CART_PRODUCTS';

/***/ }),

/***/ "FPAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header/index.js + 2 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: ./components/Footer/index.js
var Footer = __webpack_require__("Fl18");

// EXTERNAL MODULE: ./components/Careers/CareerItem.module.scss
var CareerItem_module = __webpack_require__("VBX7");
var CareerItem_module_default = /*#__PURE__*/__webpack_require__.n(CareerItem_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Careers/CareerItem.js
var __jsx = external_react_default.a.createElement;




function CareerItem() {
  const router = Object(router_["useRouter"])();
  const {
    job
  } = router.query;
  const {
    0: jobDescriptions,
    1: setJobDescriptions
  } = Object(external_react_["useState"])([{
    title: 'Content Writer',
    work: {
      content: "Mr. Med is looking for a dynamic English language content writer to help our marketing and product teams in writing blogs, reviewing, and proof-reading marketing copy and posting and responding to social media content. As a content writer, you will be part of a dynamic team comprising of youth and experience and interact with senior management as well as marketing teams. You will enhance your writing skills and get exposed to the exponentially growing healthcare content industry. You will also learn marketing copy skills and get exposed to creating good tag lines, hashtags and social media content. ",
      workList: ['Research healthcare and pharmaceutical industry trends, identify gaps and customer needs to create blog worthy topics', 'Creating crisp, engaging and SEO friendly healthcare blogs using a content management system', 'Assist the SEO team in basic keyword research to further identify topics to create written content', 'Working with graphic and web designers to ensure blogs have relevant and attractive images/graphics', 'Review and proof-read marketing creatives', 'Create, post and promote marketing social media content with relevant descriptions and hashtags', 'Respond to social media queries and get involved in marketing and lead generation efforts', 'Train support desk executives in written English, supervise and review replies on support tickets and marketing leads via chat and other channels.']
    },
    qualications: ['Excellent writing and editing skills in English', 'Bachelor’s degree in any field. Marketing, Journalism, English preferred', 'Two years’ experience as an English content writer, copy writer or similar role', 'Portfolio of published articles is required ', 'Healthcare experience is a major plus', 'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job', 'Experience and passion to research industry trends and identify customer needs', 'Ability to work independently and with others', 'Ability to meet deadlines and strong organizational skills'],
    location: "Chennai"
  }, {
    title: 'Customer Care',
    work: {
      content: "Mr. Med is looking for customer care executives to assist our customers in order fulfillment and post order support. As customer care executive, you will be the brand ambassador of Mr. Med and will be responsible for ensuring customers are always delighted by our products and services. ",
      workList: ['Answering phone calls and making follow-up outbound calls', 'Use support desk software (Freshdesk, etc) to effectively communicate in omni channel mode', 'Identifying issues and resolving within prescribed SLAs ', 'Escalating issues to team leads and persistent issues directly to senior management', 'Responding directly to customers’ queries via WhatsApp messages and other chat channels']
    },
    qualications: ['Excellent communication skills in English, Tamil, Hindi, Telugu (English required, any three is a major plus)', 'Excellent writing skills in English ', 'Bachelor’s degree in any field. Communications, English, Journalism is a plus', 'Two years’ experience in customer care', 'Experience in using support desk software (Freshdesk, Zoho, Zendesk, etc) is a major plus', 'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job', 'Ability to work independently and with others', 'Extremely organized with strong time-management skills', 'Should possess a temperament for handling customers with care', 'Ability to think and react in a dynamic, fast-paced environment.', 'Should be comfortable to work in shifts and on weekends'],
    location: 'Chennai'
  }, {
    title: "Graphic Designer",
    work: {
      content: "Mr. Med is looking for a brilliant graphic designer with basic video editing skills who has a passion to excel in the growing design driven economy. As a graphic designer, you will be part of a dynamic team that comprises of youth and experience and will be the go-to internal person for all design requirements. It is imperative that you are a detail-oriented individual that understands the importance of every icon, every image and every creative that is part of creating the Mr. Med product. ",
      workList: ['Provide creatives and imagery with a thorough understanding of colours, layouts and typography', 'Understand and document requirements from product, content, and marketing teams ', 'Provide imagery for Mr. Med product team (web and mobile): icons, logos, illustrations, thumbnails, banners, etc.', 'Create marketing collaterals – flyers, posters, standees, emailers, digital marketing banners etc', 'Support content team in creating engaging blogs by providing imagery', 'Test graphics and creatives across various media', 'Amend designs post feedback', 'Build upon the established brand guidelines to ensure all cases are standardized', 'Work with digital marketing team to understand nuances in banner design and create optimized creatives for digital banners', 'Basic video editing skills to create short marketing videos']
    },
    qualications: ['Proven graphic design experience', 'Bachelor’s degree in any field. Design and Fine Arts related field is a bonus', 'Portfolio of illustrations, creatives and other graphics is required', 'Experience with design software – Illustrator, Dreamweaver, Photoshop, InDesign', 'Experience in video editing software - Final Cut Pro X, Adobe After Effect (or any other new age video editing software)', 'Healthcare experience is a major plus', 'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job', 'Experience and passion to research industry trends and identify customer needs', 'Ability to work independently and with others', 'Ability to meet deadlines and strong organizational skills'],
    location: "Chennai"
  }, {
    title: "Lead Pharmacist",
    work: {
      content: "Mr. Med is looking for a head pharmacist to help our customers in prescription verification, order fulfillment and post order support. As the lead pharmacist you will quickly adapt to the nuances of super specialty pharma such as prescription requirements, patient assistance programs and imported medicine order fulfillment. You will also be the lead of the customer service teams and be the escalation point of contact with prescription related queries. ",
      workList: ['Verifying prescriptions to ensure that there are no errors and that they are appropriate and safe for the individual patient.', 'Updating patient cart for directly uploaded medications', `Dispensing prescribed drugs as per the physician's instructions for online subscription orders.`, 'Managing high volume of prescriptions and coordinating operational activities to ensure order fulfilment', 'Digitizing medicines as per the prescription.', `Contacting referring physician's offices with questions regarding prescription.`, 'Handle customer queries, resolve issues or initiate appropriate steps such complaint escalation to relevant departments for resolution', 'Ensuring that medicines are correctly and safely supplied.', 'Manage compliance documents and documents related to NABH inspection', 'Manage support level queries on patient assistance program and coordinate with pharmaceutical companies and other partners to ensure patient enrolment', 'Follow-up on customer leads and ensuring prescription related queries are resolved', 'Random quality checks on orders', 'Any other assigned from time to time']
    },
    qualications: ['D. Pharm/B.Pharm with minimum of 4 years experience and minimum 2 years experience working in a pharmacy (e-Pharmacy is a plus)', 'Registered free license from Tamil Nadu Pharmacy Counci', 'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job', 'Ability to work independently and with others', 'Extremely organized with strong time-management skills', 'Should possess a temperament for handling customers with care', 'Ability to think and react in a dynamic, fast-paced environment.', 'Should be comfortable to work in shifts and on weekends'],
    location: "Chennai"
  }, {
    title: "Medical Content Writer",
    work: {
      content: "Mr. Med is looking for a Medical Content Writer to create content related to the various pharmaceutical products. As a medical content writer, you will work closely with a dynamic team in creating accurate technical content and review healthcare content created by junior copywriters. You will enhance your writing skills and get exposed to the exponentially growing healthcare content industry. You will also get the opportunity to help marketing teams in identifying and creating trending content",
      workList: ['Create drug overview, side effects, usage and other technical information related to pharmaceuticals', 'Research top publications and ensure correct citations and references are documented for all technical content created', 'Brainstorm with senior management, SEO strategy team to create a priority list and to ensure technical content created helps marketing efforts', 'Research healthcare and pharmaceutical industry trends, identify gaps and customer needs to create blog worthy topics', 'Review blogs, posts and other healthcare related content created by junior copywriters', 'Work closely with the lead pharmacist in creating customer support manuals for various prescription related queries.', 'Train support desk executives in technical and prescription related queries, supervise and review replies on support tickets and marketing leads via chat and other channels.']
    },
    qualications: ['B.Pharm, MBBS or any other Bachelor’s degree in medical field', 'Excellent writing and editing skills in English', 'Five years’ experience, with at least one year experience as a technical content writer', 'Portfolio of published articles is required', 'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job', 'Experience and passion to research industry trends and identify customer needs', 'Ability to work independently and with others', 'Ability to meet deadlines and strong organizational skills'],
    location: "Chennai"
  }]);
  const data = jobDescriptions[job];
  return __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: `col-md-12 ${CareerItem_module_default.a.indication}`
  }, __jsx("br", null), __jsx("span", {
    onClick: () => router.push('/')
  }, "Home"), " ", __jsx("span", null, "> Careers"), __jsx("br", null), __jsx("b", null, "Careers"), __jsx("hr", null)), __jsx("div", {
    className: CareerItem_module_default.a.job_description
  }, __jsx("p", {
    className: CareerItem_module_default.a.title
  }, data.title), __jsx("div", {
    className: CareerItem_module_default.a.job_detail
  }, __jsx("p", null, "ID : 2345"), __jsx("p", null, "1-2 years"), __jsx("p", null, data.location)), __jsx("div", {
    className: "mt-3"
  }, __jsx("b", null, "About Mr.med"), __jsx("p", {
    className: "mt-3"
  }, "Mr. Med is India\u2019s largest online pharmacy for super specialty medicines with a vision of creating a patient centric, technology enabled business. Mr. Med goes beyond the call of a pharma marketplace by providing patient centric services that help in procurement of medicines and adherence of patient assistance programs. At Mr. Med you will be working with business leaders with decades of experience in the pharmaceutical industry as well as professionals with top-tier consulting and engineering backgrounds. ")), __jsx("div", null, __jsx("b", null, "Work you will do"), __jsx("p", {
    className: "mt-3"
  }, "Mr. Med is looking for customer care executives to assist our customers in order fulfillment and post order support. As customer care executive, you will be the brand ambassador of Mr. Med and will be responsible for ensuring customers are always delighted by our products and services. "), __jsx("p", null, "Your work will entail the following: "), __jsx("ul", null, data.qualications.map((item, i) => {
    return __jsx("li", {
      key: i
    }, item);
  }))), __jsx("div", null, __jsx("b", null, "Desired Profile/ Qualifications"), __jsx("ul", {
    className: "mt-3"
  }, data.work.workList.map((item, i) => {
    return __jsx("li", {
      key: i
    }, item);
  }))), __jsx("p", null, "Location: ", __jsx("b", null, data.location)), __jsx("div", null, __jsx("b", null, "How You\u2019ll Grow"), __jsx("p", {
    className: "mt-3"
  }, "We want you to develop naturally, by ensuring your strengths are complimented with challenging work experiences that help you develop into future leaders.  Our goal is to accelerate your career by providing a dynamic and ownership driven culture. We see tremendous potential in exponential growth and as the first few employees of the company, your growth will be tightly aligned to achieving business targets. ")), __jsx("div", null, __jsx("b", null, "Mr. Med\u2019s Culture"), __jsx("p", {
    className: "mt-3"
  }, "The working culture at Mr. Med is positive, dynamic, target oriented and aimed at getting the best out of our professionals. We allow the individuals to display their uniqueness by offering flexibility in their working style to make daily works done. Our culture is amalgam of start-up and an established pharmaceutical player, giving our professionals a unique experience to thrive in today\u2019s dynamic work scenario."))), __jsx("a", {
    href: "mailto:example@gmail.com",
    target: "_blank"
  }, __jsx("button", {
    className: CareerItem_module_default.a.apply
  }, "apply")));
}

/* harmony default export */ var Careers_CareerItem = (CareerItem);
// CONCATENATED MODULE: ./pages/CareerPage.js
var CareerPage_jsx = external_react_default.a.createElement;





function career() {
  return CareerPage_jsx("div", null, CareerPage_jsx(Header["a" /* default */], null), CareerPage_jsx(Careers_CareerItem, null), CareerPage_jsx(Footer["a" /* default */], null));
}

/* harmony default export */ var CareerPage = __webpack_exports__["default"] = (career);

/***/ }),

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kzqI");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Footer() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-4"
  }, __jsx("img", {
    src: __webpack_require__("IYva")
  }), __jsx("br", null), __jsx("p", null, "MrMed is the first choice of Indian Online Pharmacy for many satisfied customers for buy medicines online with discount for life-threatening diseases like cancer, HIV/AIDS, Hepatitis and many others, everyone knows how expensive medical treatment is & with the increasing cost of medicines it has become unaffordable to buy essential medicines."), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footerIconAlign
  }, __jsx("img", {
    src: __webpack_require__("hZ7X")
  }), __jsx("img", {
    src: __webpack_require__("AzC5")
  }), __jsx("img", {
    src: __webpack_require__("q51q")
  }), __jsx("img", {
    src: __webpack_require__("S4Aq")
  }), __jsx("img", {
    src: __webpack_require__("CSOR")
  }))), __jsx("div", {
    className: "col-md-7 offset-md-1"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: `row ${_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footerRight}`
  }, __jsx("div", {
    className: "col-md-4"
  }, __jsx("b", null, "COMPANY"), __jsx("span", null, "About Us"), __jsx("span", {
    onClick: () => router.push('/Career')
  }, "Careers"), __jsx("span", null, "Partner with mrMED"), __jsx("span", null, "FAQ"), __jsx("span", null, "Contact Us")), __jsx("div", {
    className: "col-md-4"
  }, __jsx("b", null, "Speciality Medicines"), __jsx("span", null, "Personal care"), __jsx("span", null, "Diabetics"), __jsx("span", null, "Fitness &  Supplement"), __jsx("span", null, "Health conditions"), __jsx("span", null, "Health care devices"), __jsx("span", null, "Corona virus prevention")), __jsx("div", {
    className: "col-md-4"
  }, __jsx("b", null, "Policy Info"), __jsx("span", null, "Editorial Policy"), __jsx("span", null, "Privacy Policy"), __jsx("span", null, "Terms and Conditions")))))), __jsx("hr", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footerLine
  }), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.copyright
  }, __jsx("span", null, "Copyright \xA9 2020 mrmed. All rights reserved."), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.terms
  }, __jsx("b", null, "Privacy / Terms & Conditions / Contact Us")))));
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "IYva":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "KAop":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAPCAYAAAAlH6X5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgBpcRBEQAAAAFBo3+SK4kO9rECYs1dAdyMAxoeIAz1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./actions.js
var actions = __webpack_require__("w89z");

// EXTERNAL MODULE: ./components/Login/Signin/SingnInComponent.module.scss
var SingnInComponent_module = __webpack_require__("n2BJ");
var SingnInComponent_module_default = /*#__PURE__*/__webpack_require__.n(SingnInComponent_module);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./assets/images/logo.png
var logo = __webpack_require__("P6Ho");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./assets/images/carousel-tablets.png
var carousel_tablets = __webpack_require__("0Kpr");
var carousel_tablets_default = /*#__PURE__*/__webpack_require__.n(carousel_tablets);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__("mNWG");

// EXTERNAL MODULE: ./components/Login/CarouselForLogIn/CarouselForAll.module.scss
var CarouselForAll_module = __webpack_require__("fgjs");
var CarouselForAll_module_default = /*#__PURE__*/__webpack_require__.n(CarouselForAll_module);

// CONCATENATED MODULE: ./components/Login/CarouselForLogIn/index.js
var __jsx = external_react_default.a.createElement;






external_swiper_default.a.use([external_swiper_["Pagination"], external_swiper_["Scrollbar"], external_swiper_["A11y"]]);
function CarouselForAll() {
  const {
    0: loginCarouselList,
    1: setLoginCarouselList
  } = Object(external_react_["useState"])([{
    id: '1',
    img: ''
  }, {
    id: '2',
    img: ''
  }, {
    id: '3',
    img: ''
  }]);
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "row"
  }, __jsx(react_["Swiper"], {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    onSwiper: swiper => console.log(swiper),
    onSlideChange: () => console.log('slide change')
  }, loginCarouselList.map((login, ind) => {
    return __jsx(react_["SwiperSlide"], {
      key: ind
    }, __jsx("div", {
      className: `col-md-11 ${CarouselForAll_module_default.a.mrmed_maincontainer}`
    }, __jsx("div", {
      className: `${CarouselForAll_module_default.a.mr_med_logo} d-flex align-items-center justify-content-end`
    }, __jsx("img", {
      className: `${CarouselForAll_module_default.a.logo_img} object-fit-contain`,
      src: logo_default.a,
      alt: "cancel"
    })), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: `col-md-10 ${CarouselForAll_module_default.a.mr_med_carinner} d-flex`
    }, __jsx("div", {
      className: `${CarouselForAll_module_default.a.mr_med_tablets} d-flex justify-content-center align-items-center`
    }, __jsx("img", {
      className: "caro_img object-fit-contain",
      src: carousel_tablets_default.a,
      alt: "success"
    })), __jsx("p", {
      className: CarouselForAll_module_default.a.now_medicine
    }, "Know your medicine"), __jsx("p", {
      className: CarouselForAll_module_default.a.mr_med_foottext
    }, "Lorem ipsum is a placeholder text commonly used to demonstrate the visual", __jsx("br", null), " form of a document ")))));
  }))));
}
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__("tlnx");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// EXTERNAL MODULE: ./apiVariables.js
var apiVariables = __webpack_require__("rcTn");

// CONCATENATED MODULE: ./components/Login/Signin/index.js
var Signin_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function SingnInComponent(props) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  let {
    0: token,
    1: setToken
  } = Object(external_react_["useState"])("");
  const {
    0: decoded,
    1: setDecoded
  } = Object(external_react_["useState"])({});
  const {
    0: which,
    1: setWhich
  } = Object(external_react_["useState"])(0);
  const {
    0: emailIdMobileNo,
    1: setemailIdMobileNo
  } = Object(external_react_["useState"])("");
  const {
    0: otp,
    1: setOtp
  } = Object(external_react_["useState"])({
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
  } = Object(external_react_["useState"])({
    name: '',
    emailId: '',
    phoneNo: '',
    mobileVerifyStatus: 1,
    userTypeId: 3
  });
  Object(external_react_["useEffect"])(() => {
    setWhich(0);
  }, []);

  const handelSignIn = () => {
    setWhich(0);
  };

  const handelSignUp = () => {
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
  };

  const handleSignInData = async e => {
    e.preventDefault();
    const url = `${apiVariables["a" /* auth_url */]}/user/signInByEmailPhone`;
    let isNewUser = emailIdMobileNo === signUpData.phoneNo ? true : false;
    let data = isNewUser ? {
      emailIdMobileNo,
      isNewUser
    } : {
      emailIdMobileNo
    };
    console.log(data);
    let res = await httpPostRequest(url, data);
    console.log(res);

    if (res.status === 200) {
      alert(res.message);
      handelOtp();
    } else if (res.status == 404) {
      alert("mobile or email not registered");
    }
  };

  const verifyOtp = async e => {
    e.preventDefault();
    const url = `${apiVariables["a" /* auth_url */]}/user/verifySignInByEmailPhone`;
    let code = otp.code1 + otp.code2 + otp.code3 + otp.code4 + otp.code5 + otp.code6;
    let isNewUser = emailIdMobileNo === signUpData.phoneNo ? true : false;
    let data = {
      emailIdMobileNo,
      isNewUser,
      code
    };
    let res = await httpPostRequest(url, data);
    console.log(res);

    if (res.status === 200) {
      alert(res.message);
      setOtp({
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: ""
      });
      signUp();
    } else {
      alert("otp verification failed");
    }
  };

  const signUp = async () => {
    const url = `${apiVariables["a" /* auth_url */]}/user/signup`;
    let data = signUpData;
    let res = await httpPostRequest(url, data);
    console.log(res);

    if (res.status === 200) {
      alert(res.message);
      setToken(res.data.token);
      var decodeds = await external_jwt_decode_default()(token);
      setDecoded(decodeds);
      dispatch(Object(actions["a" /* userDetails */])(decoded));
      dispatch(Object(actions["b" /* userToken */])(token));
      console.log(decoded); //res.data.userData
    } else if (res.status === 400) {
      alert("User Already has Registered");
    }

    console.log(signUpData);
    setSignUpData({
      name: '',
      emailId: '',
      phoneNo: '',
      userTypeId: 1,
      mobileVerifyStatus: 1
    });
  };

  const handleSignUpData = async e => {
    e.preventDefault();
    handelSignIn();
    setemailIdMobileNo(signUpData.phoneNo);
  };

  const httpPostRequest = async (url, body) => {
    console.log(body);
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await result;
  };

  return Signin_jsx(external_reactstrap_["Modal"], {
    isOpen: props.modal,
    toggle: props.toggle,
    className: SingnInComponent_module_default.a.signInUpModal
  }, which === 0 ? Signin_jsx("div", {
    className: "row"
  }, Signin_jsx("div", {
    className: "col-md-5"
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signIn
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signInCard
  }, Signin_jsx("form", {
    method: "post",
    onSubmit: handleSignInData
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signinInput
  }, Signin_jsx("p", {
    className: SingnInComponent_module_default.a.signinHeader
  }, "Welcome to MrMed"), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.singninFormInput,
    name: "mobileNo",
    placeholder: "Mobile number",
    value: emailIdMobileNo,
    onChange: e => setemailIdMobileNo(e.target.value),
    required: true
  })), Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signinBtns
  }, Signin_jsx("button", {
    className: SingnInComponent_module_default.a.verifyBtn
  }, "VERIFY NUMBER"), Signin_jsx("p", {
    className: SingnInComponent_module_default.a.noAccount
  }, "Don't have account ? ", Signin_jsx("span", {
    className: SingnInComponent_module_default.a.register,
    onClick: handelSignUp
  }, "Register"))))))), Signin_jsx("div", {
    className: "col-md-7"
  }, Signin_jsx(CarouselForAll, null))) : "", which === 1 ? Signin_jsx("div", {
    className: "row"
  }, Signin_jsx("div", {
    className: "col-md-5"
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signUp
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signupContent
  }, Signin_jsx("div", null, Signin_jsx("p", {
    className: SingnInComponent_module_default.a.signupHeader
  }, "Welcome to MrMed"), Signin_jsx("p", {
    className: SingnInComponent_module_default.a.register
  }, "Register"), Signin_jsx("form", {
    method: "post",
    onSubmit: handleSignUpData
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signupMain
  }, Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.signupFormInput,
    name: "name",
    placeholder: "Name",
    value: signUpData.name,
    onChange: e => onChangeForm(e),
    required: true
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.signupFormInput,
    name: "emailId",
    placeholder: "Email Address",
    value: signUpData.emailId,
    onChange: e => onChangeForm(e),
    required: true
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.signupFormInput,
    name: "phoneNo",
    placeholder: "MobileNumber",
    value: signUpData.phoneNo,
    onChange: e => onChangeForm(e),
    required: true
  })), Signin_jsx("button", {
    className: SingnInComponent_module_default.a.sverifyBtn
  }, "SIGN UP"))), Signin_jsx("div", {
    className: SingnInComponent_module_default.a.accountsMain
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.nosignAccooun
  }, Signin_jsx("p", {
    className: SingnInComponent_module_default.a.nosignupAccount
  }, "Already have an account ? ", Signin_jsx("span", {
    onClick: handelSignIn
  }, "Login"))), Signin_jsx("div", {
    className: SingnInComponent_module_default.a.signupFooter
  }, Signin_jsx("p", {
    className: SingnInComponent_module_default.a.termsCont
  }, "By continuing  you agree to the to our ", Signin_jsx("span", null, "Terms of use and Privacy policy"))))))), Signin_jsx("div", {
    className: "col-md-7"
  }, Signin_jsx(CarouselForAll, null))) : "", which === 2 ? Signin_jsx("div", {
    className: "row"
  }, Signin_jsx("div", {
    className: "col-md-5"
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.otpLogin_inner
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.textContent
  }, Signin_jsx("p", {
    className: SingnInComponent_module_default.a.otp_header
  }, "Verify OTP"), Signin_jsx("p", {
    className: SingnInComponent_module_default.a.otp_number
  }, "Please enter the OTP code sent to your ", Signin_jsx("br", null), " mobile number +91 98783 87377")), Signin_jsx("form", {
    method: "post",
    onSubmit: verifyOtp
  }, Signin_jsx("div", {
    className: SingnInComponent_module_default.a.otpno_container
  }, Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.otp_form_input,
    name: "code1",
    value: otp.code1,
    onChange: e => onChangeOtp(e),
    maxLength: "1",
    required: true,
    placeholder: "0"
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.otp_form_input,
    name: "code2",
    placeholder: "0",
    maxLength: "1",
    value: otp.code2,
    onChange: e => onChangeOtp(e),
    required: true
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.otp_form_input,
    name: "code3",
    placeholder: "0",
    maxLength: "1",
    value: otp.code3,
    onChange: e => onChangeOtp(e),
    required: true
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.otp_form_input,
    name: "code4",
    placeholder: "0",
    maxLength: "1",
    value: otp.code4,
    onChange: e => onChangeOtp(e),
    required: true
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.otp_form_input,
    name: "code5",
    placeholder: "0",
    maxLength: "1",
    value: otp.code5,
    onChange: e => onChangeOtp(e),
    required: true
  }), Signin_jsx("input", {
    type: "text",
    className: SingnInComponent_module_default.a.otp_form_input,
    name: "code6",
    placeholder: "0",
    maxLength: "1",
    value: otp.code6,
    onChange: e => onChangeOtp(e),
    required: true
  })), Signin_jsx("div", {
    className: SingnInComponent_module_default.a.btnContainer
  }, Signin_jsx("button", {
    className: SingnInComponent_module_default.a.otp_verify
  }, "VERIFY"))))), Signin_jsx("div", {
    className: "col-md-7"
  }, Signin_jsx(CarouselForAll, null))) : "");
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Header/index.js
var Header_jsx = external_react_default.a.createElement;





const whatsapp = __webpack_require__("/xQm");





function Header() {
  var _userDetails$userDeta, _userDetails$userDeta2;

  const userDetails = Object(external_react_redux_["useSelector"])(state => state.auth);
  const cartProducts = Object(external_react_redux_["useSelector"])(state => state.auth.cartProducts);
  let {
    0: langDropDown,
    1: setLangDropDown
  } = Object(external_react_["useState"])(false);
  let {
    0: locationPopOver,
    1: setLocationPopOver
  } = Object(external_react_["useState"])(false);
  let {
    0: userDropDown,
    1: setUserDropDown
  } = Object(external_react_["useState"])(false);
  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();

  const userDropDowne = () => {
    setUserDropDown(!userDropDown);
  };

  const langDropDowns = () => {
    setLangDropDown(!langDropDown);
  };

  const locationPopOvers = () => {
    setLocationPopOver(!locationPopOver);
  };

  Object(external_react_["useEffect"])(() => {
    console.log(userDetails.userDetails, "dsfsf");

    if (userDetails.userToken) {
      toggle();
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  return Header_jsx("div", {
    className: Header_module_default.a.headers
  }, Header_jsx("div", {
    className: Header_module_default.a.greyBack
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx("div", {
    className: "row"
  }, Header_jsx("div", {
    className: "col-md-10"
  }, Header_jsx("img", {
    src: whatsapp
  }), Header_jsx("b", null, "+91-941183088"), Header_jsx("img", {
    src: __webpack_require__("5eiu"),
    style: {
      objectFit: 'contain'
    }
  }), Header_jsx("b", null, "+91-941183088")), Header_jsx("div", {
    className: "col-md-2"
  }, Header_jsx(external_reactstrap_["Dropdown"], {
    className: Header_module_default.a.lang,
    isOpen: langDropDown,
    toggle: langDropDowns
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    caret: true,
    tag: "span",
    "data-toggle": "dropdown",
    "aria-expanded": langDropDown
  }, Header_jsx("span", null, "EN")), Header_jsx(external_reactstrap_["DropdownMenu"], null, Header_jsx(external_reactstrap_["DropdownItem"], null, "Language"))))))), Header_jsx("div", {
    className: Header_module_default.a.logo
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx("div", {
    className: "row"
  }, Header_jsx("div", {
    className: "col-md-9"
  }, Header_jsx("img", {
    onClick: () => router.push('/'),
    className: Header_module_default.a.imgLogo,
    src: __webpack_require__("P6Ho"),
    style: {
      cursor: 'pointer'
    }
  }), Header_jsx("button", {
    id: "Popover1",
    type: "button",
    className: Header_module_default.a.btnLocation
  }, "Chennai \u25BC"), Header_jsx(external_reactstrap_["Popover"], {
    style: {
      'width': '175px'
    },
    placement: "auto-start",
    isOpen: locationPopOver,
    target: "Popover1",
    toggle: locationPopOvers
  }, Header_jsx(external_reactstrap_["PopoverBody"], null, Header_jsx("div", {
    className: Header_module_default.a.locationDropdown
  }, Header_jsx("div", {
    className: "row bottom"
  }, Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Bangalore")), Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Mumbai"))), Header_jsx("div", {
    className: "row bottom"
  }, Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Pune")), Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Delhi"))), Header_jsx("div", {
    className: "row bottom"
  }, Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Noida")), Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Gurgaon"))), Header_jsx("div", {
    className: "row bottom"
  }, Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Hyderabad")), Header_jsx("div", {
    className: "col-md-6"
  }, Header_jsx("span", null, "Chennai")))))), Header_jsx("input", {
    type: "text",
    placeholder: "Search for medicines and health products",
    className: "search-box"
  }), Header_jsx("img", {
    className: Header_module_default.a.searchIcon,
    src: __webpack_require__("0yMW")
  })), Header_jsx("div", {
    className: "col-md-3"
  }, Header_jsx("div", {
    className: Header_module_default.a.headerIcon
  }, Header_jsx("div", {
    className: "btn-group"
  }, Header_jsx(external_reactstrap_["Dropdown"], {
    isOpen: userDetails.userToken ? true : false,
    toggle: userDropDowne
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    tag: "span",
    "data-toggle": "dropdown",
    "aria-expanded": userDropDown
  }, Header_jsx("span", {
    className: Header_module_default.a.iconAlign,
    onClick: userDetails ? toggle : ""
  }, (_userDetails$userDeta = userDetails.userDetails) !== null && _userDetails$userDeta !== void 0 && _userDetails$userDeta.name ? (_userDetails$userDeta2 = userDetails.userDetails) === null || _userDetails$userDeta2 === void 0 ? void 0 : _userDetails$userDeta2.name : 'Login/Sign Up'), Header_jsx("img", {
    className: Header_module_default.a.iconAlign,
    src: __webpack_require__("/1DH"),
    style: {
      cursor: 'pointer'
    }
  })), Header_jsx(external_reactstrap_["DropdownMenu"], {
    className: Header_module_default.a.dropdownMenu
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    className: Header_module_default.a.item,
    onClick: () => router.push('/Accounts/Profiles')
  }, Header_jsx("img", {
    className: Header_module_default.a.dropdownIcon,
    src: __webpack_require__("/1DH")
  }), Header_jsx("span", null, "My Profile")), Header_jsx(external_reactstrap_["DropdownItem"], {
    className: Header_module_default.a.item,
    onClick: () => router.push('/Accounts/Order')
  }, Header_jsx("img", {
    className: Header_module_default.a.dropdownIcon,
    src: __webpack_require__("XV9G")
  }), Header_jsx("span", null, "My Orders")), Header_jsx(external_reactstrap_["DropdownItem"], {
    className: Header_module_default.a.item,
    onClick: () => router.push('/Accounts/MyPrescription')
  }, Header_jsx("img", {
    className: Header_module_default.a.dropdownIcon,
    src: __webpack_require__("PEEv")
  }), Header_jsx("span", null, "My Prescription")), Header_jsx(external_reactstrap_["DropdownItem"], {
    className: Header_module_default.a.item,
    onClick: () => router.push('/Accounts/Payments')
  }, Header_jsx("img", {
    className: Header_module_default.a.dropdownIcon,
    src: __webpack_require__("57gg")
  }), Header_jsx("span", null, "Payments")), Header_jsx(external_reactstrap_["DropdownItem"], {
    className: Header_module_default.a.item,
    onClick: () => router.push('/Accounts/logout')
  }, Header_jsx("img", {
    className: Header_module_default.a.dropdownIcon,
    src: __webpack_require__("goKT")
  }), Header_jsx("span", null, "Logout"))))), Header_jsx("img", {
    className: Header_module_default.a.iconAlign,
    src: __webpack_require__("KAop")
  }), Header_jsx("span", {
    onClick: () => router.push('/Cart'),
    className: Header_module_default.a.iconAlign
  }, "Cart"), Header_jsx("img", {
    onClick: () => router.push('/Cart'),
    src: __webpack_require__("qPB9"),
    style: {
      cursor: 'pointer'
    }
  }), Header_jsx("button", {
    onClick: () => router.push('/Cart'),
    className: Header_module_default.a.cartBadge,
    id: "cart-count"
  }, cartProducts ? cartProducts.length : 0)))))), Header_jsx("div", {
    className: Header_module_default.a.greenBack
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx("div", {
    className: "row"
  }, Header_jsx("div", {
    className: "col-md-12"
  }, Header_jsx("ul", null, Header_jsx("li", {
    onClick: () => router.push('/SpecialityMed')
  }, Header_jsx("img", {
    className: Header_module_default.a.listImg,
    src: __webpack_require__("gD5v")
  }), Header_jsx("b", null, " SPECIALITY MEDICINES")), Header_jsx("li", {
    onClick: () => router.push('/PapAssistance')
  }, Header_jsx("img", {
    className: Header_module_default.a.listImg,
    src: __webpack_require__("nVgH")
  }), Header_jsx("b", null, " PATIENT ASSISTANCE PROGRAMME")), Header_jsx("li", {
    onClick: () => router.push('/ImportedMedicineComponet')
  }, Header_jsx("img", {
    className: Header_module_default.a.listImg,
    src: __webpack_require__("PVMv")
  }), Header_jsx("b", null, " IMPORTED MEDICINE")), Header_jsx("li", null, Header_jsx("img", {
    className: Header_module_default.a.listImg,
    src: __webpack_require__("TNK8")
  }), Header_jsx("b", null, " WELLNESS")), Header_jsx("div", {
    onClick: () => router.push('/UploadStepper'),
    className: Header_module_default.a.uploadPrescription
  }, Header_jsx("button", {
    className: Header_module_default.a.btnUpload
  }, Header_jsx("b", null, "UPLOAD PRESCRIPTION")))))))), Header_jsx(SingnInComponent, {
    modal: modal,
    toggle: toggle
  }));
}

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "P6Ho":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "PEEv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPg0KPHBhdGggZD0iTTguMzg2NzkgNS4zNDUyN0g3LjQ1MjYyVjQuNDExMUM3LjQ1MjYyIDQuMjE2OTMgNy4yOTUxOSA0LjA1OTU3IDcuMTAxMDkgNC4wNTk1N0M2LjkwNjk5IDQuMDU5NTcgNi43NDk1NiA0LjIxNjk2IDYuNzQ5NTYgNC40MTExVjUuMzQ1MjdINS44MTUzOUM1LjYyMTI2IDUuMzQ1MjcgNS40NjM4NyA1LjUwMjY2IDUuNDYzODcgNS42OTY3OUM1LjQ2Mzg3IDUuODkwOTMgNS42MjEyNiA2LjA0ODMyIDUuODE1MzkgNi4wNDgzMkg2Ljc0OTU2VjYuOTgyNDlDNi43NDk1NiA3LjE3NjY2IDYuOTA2OTkgNy4zMzQwMiA3LjEwMTA5IDcuMzM0MDJDNy4yOTUxOSA3LjMzNDAyIDcuNDUyNjIgNy4xNzY2MiA3LjQ1MjYyIDYuOTgyNDlWNi4wNDgzMkg4LjM4Njc5QzguNTgwOTIgNi4wNDgzMiA4LjczODMxIDUuODkwOTMgOC43MzgzMSA1LjY5Njc5QzguNzM4MzEgNS41MDI2NiA4LjU4MDkyIDUuMzQ1MjcgOC4zODY3OSA1LjM0NTI3WiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTcuMTAxMzggMi42MDMwM0M1LjM5NTYgMi42MDMwMyA0LjAwNzgxIDMuOTkwODIgNC4wMDc4MSA1LjY5NjZDNC4wMDc4MSA3LjQwMjM3IDUuMzk1NiA4Ljc5MDE2IDcuMTAxMzggOC43OTAxNkM4LjgwNzE2IDguNzkwMTYgMTAuMTk0OSA3LjQwMjM3IDEwLjE5NDkgNS42OTY2QzEwLjE5NDkgMy45OTA4MiA4LjgwNzE2IDIuNjAzMDMgNy4xMDEzOCAyLjYwMzAzWk03LjEwMTM4IDguMDg3MDRDNS43ODMyNyA4LjA4NzA0IDQuNzEwOSA3LjAxNDY3IDQuNzEwOSA1LjY5NjU2QzQuNzEwOSA0LjM3ODQ1IDUuNzgzMjcgMy4zMDYwOCA3LjEwMTM4IDMuMzA2MDhDOC40MTk0OSAzLjMwNjA4IDkuNDkxODYgNC4zNzg0NSA5LjQ5MTg2IDUuNjk2NTZDOS40OTE4NiA3LjAxNDY3IDguNDE5NDkgOC4wODcwNCA3LjEwMTM4IDguMDg3MDRaIiBmaWxsPSIjMzMzMzMzIi8+DQo8cGF0aCBkPSJNMTQuMDk5MiAzLjIzMjY3TDEwLjk3MDYgMC4xMDM5NDlDMTAuOTA0NiAwLjAzODAzMTIgMTAuODE1MiAwLjAwMDk3NjU2MiAxMC43MjIgMC4wMDA5NzY1NjJIMS4wNTQ2MkMwLjQ3MzA5NyAwLjAwMDk3NjU2MiAwIDAuNDc0MTA4IDAgMS4wNTU2M1YxNi45NDUzQzAgMTcuNTI2OCAwLjQ3MzA5NyAxNy45OTk5IDEuMDU0NjIgMTcuOTk5OUg3Ljc2OTc2QzcuOTYzOSAxNy45OTk5IDguMTIxMjkgMTcuODQyNSA4LjEyMTI5IDE3LjY0ODRDOC4xMjEyOSAxNy40NTQzIDcuOTYzODYgMTcuMjk2OSA3Ljc2OTc2IDE3LjI5NjlIMS4wNTQ2MkMwLjg2MDc2NCAxNy4yOTY5IDAuNzAzMDg5IDE3LjEzOTIgMC43MDMwODkgMTYuOTQ1M1YxLjA1NTYzQzAuNzAzMDg5IDAuODYxNzc2IDAuODYwNzk5IDAuNzA0MSAxLjA1NDYyIDAuNzA0MUgxMC4zNzA0VjIuNzc4MTdDMTAuMzcwNCAzLjM1OTY5IDEwLjg0MzUgMy44MzI3OSAxMS40MjUgMy44MzI3OUgxMy40OTkxVjEwLjA5MDJDMTMuNDk5MSAxMC4yODQzIDEzLjY1NjUgMTAuNDQxNyAxMy44NTA2IDEwLjQ0MTdDMTQuMDQ0NyAxMC40NDE3IDE0LjIwMjEgMTAuMjg0MyAxNC4yMDIxIDEwLjA5MDJWMy40ODEyM0MxNC4yMDIyIDMuMzg3OTkgMTQuMTY1MiAzLjI5ODU5IDE0LjA5OTIgMy4yMzI2N1pNMTEuNDI1MSAzLjEyOTdDMTEuMjMxMiAzLjEyOTcgMTEuMDczNSAyLjk3MTk5IDExLjA3MzUgMi43NzgxN1YxLjIwMTI0TDEzLjAwMiAzLjEyOTdIMTEuNDI1MVoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik0xMS42MDAyIDkuODQzNzVINS40OTUwOEM1LjMwMDk1IDkuODQzNzUgNS4xNDM1NSAxMC4wMDEyIDUuMTQzNTUgMTAuMTk1M0M1LjE0MzU1IDEwLjM4OTQgNS4zMDA5OCAxMC41NDY4IDUuNDk1MDggMTAuNTQ2OEgxMS42MDAyQzExLjc5NDMgMTAuNTQ2OCAxMS45NTE3IDEwLjM4OTQgMTEuOTUxNyAxMC4xOTUzQzExLjk1MTcgMTAuMDAxMiAxMS43OTQzIDkuODQzNzUgMTEuNjAwMiA5Ljg0Mzc1WiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTMuNzQ2OTkgOS44NDM3NUgyLjYwMTUzQzIuNDA3MzkgOS44NDM3NSAyLjI1IDEwLjAwMTIgMi4yNSAxMC4xOTUzQzIuMjUgMTAuMzg5NCAyLjQwNzQzIDEwLjU0NjggMi42MDE1MyAxMC41NDY4SDMuNzQ2OTlDMy45NDExMiAxMC41NDY4IDQuMDk4NTIgMTAuMzg5NCA0LjA5ODUyIDEwLjE5NTNDNC4wOTg1MiAxMC4wMDEyIDMuOTQxMTIgOS44NDM3NSAzLjc0Njk5IDkuODQzNzVaIiBmaWxsPSIjMzMzMzMzIi8+DQo8cGF0aCBkPSJNOC45OTg3OCAxMS44MTJINS40OTUwOEM1LjMwMDk1IDExLjgxMiA1LjE0MzU1IDExLjk2OTQgNS4xNDM1NSAxMi4xNjM1QzUuMTQzNTUgMTIuMzU3NiA1LjMwMDk4IDEyLjUxNTEgNS40OTUwOCAxMi41MTUxSDguOTk4NzhDOS4xOTI5MSAxMi41MTUxIDkuMzUwMzEgMTIuMzU3NyA5LjM1MDMxIDEyLjE2MzVDOS4zNTAzMSAxMS45Njk0IDkuMTkyOTEgMTEuODEyIDguOTk4NzggMTEuODEyWiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTMuNzQ2OTkgMTEuODEySDIuNjAxNTNDMi40MDczOSAxMS44MTIgMi4yNSAxMS45Njk0IDIuMjUgMTIuMTYzNUMyLjI1IDEyLjM1NzYgMi40MDc0MyAxMi41MTUxIDIuNjAxNTMgMTIuNTE1MUgzLjc0Njk5QzMuOTQxMTIgMTIuNTE1MSA0LjA5ODUyIDEyLjM1NzYgNC4wOTg1MiAxMi4xNjM1QzQuMDk4NTIgMTEuOTY5NCAzLjk0MTEyIDExLjgxMiAzLjc0Njk5IDExLjgxMloiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik01Ljc0MzY0IDEzLjg4MzhDNS42NzgyOCAxMy44MTg0IDUuNTg3ODkgMTMuNzgwOCA1LjQ5NTEyIDEzLjc4MDhDNS40MDI2NiAxMy43ODA4IDUuMzEyMyAxMy44MTgzIDUuMjQ2NTYgMTMuODgzOEM1LjE4MTE3IDEzLjk0OTIgNS4xNDM1NSAxNC4wMzk5IDUuMTQzNTUgMTQuMTMyM0M1LjE0MzU1IDE0LjIyNDggNS4xODExNCAxNC4zMTU1IDUuMjQ2NTYgMTQuMzgwOEM1LjMxMTk1IDE0LjQ0NjIgNS40MDI2NiAxNC40ODM5IDUuNDk1MTIgMTQuNDgzOUM1LjU4NzkzIDE0LjQ4MzkgNS42NzgyOCAxNC40NDYzIDUuNzQzNjQgMTQuMzgwOEM1LjgwOTM4IDE0LjMxNTUgNS44NDY2OCAxNC4yMjQ4IDUuODQ2NjggMTQuMTMyM0M1Ljg0NjY4IDE0LjAzOTkgNS44MDkzOCAxMy45NDkyIDUuNzQzNjQgMTMuODgzOFoiIGZpbGw9IiMzMzMzMzMiLz4NCjxwYXRoIGQ9Ik0zLjc0Njk5IDEzLjc4MDhIMi42MDE1M0MyLjQwNzM5IDEzLjc4MDggMi4yNSAxMy45MzgyIDIuMjUgMTQuMTMyM0MyLjI1IDE0LjMyNjQgMi40MDc0MyAxNC40ODM4IDIuNjAxNTMgMTQuNDgzOEgzLjc0Njk5QzMuOTQxMTIgMTQuNDgzOCA0LjA5ODUyIDE0LjMyNjQgNC4wOTg1MiAxNC4xMzIzQzQuMDk4NTUgMTMuOTM4MiAzLjk0MTEyIDEzLjc4MDggMy43NDY5OSAxMy43ODA4WiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTE1LjgyMDUgMTMuNjQwNEMxNS43MTczIDEzLjY0MDQgMTUuNjE2IDEzLjY0ODEgMTUuNTE2NiAxMy42NjIxQzE1LjczODEgMTIuOTE5MSAxNS41NTYyIDEyLjA4MDQgMTQuOTcwNiAxMS40OTQ4QzE0LjU1ODkgMTEuMDgzMiAxNC4wMTE2IDEwLjg1NjQgMTMuNDI5NCAxMC44NTY0QzEyLjg0NzIgMTAuODU2NCAxMi4yOTk5IDExLjA4MzIgMTEuODg4MiAxMS40OTQ4TDkuMTA0MTkgMTQuMjc4OEM4LjY5MjU0IDE0LjY5MDUgOC40NjU4MiAxNS4yMzc4IDguNDY1ODIgMTUuODJDOC40NjU4MiAxNi40MDIyIDguNjkyNTQgMTYuOTQ5NSA5LjEwNDE5IDE3LjM2MTJDOS41MjkxNSAxNy43ODYxIDEwLjA4NzIgMTcuOTk4NSAxMC42NDU0IDE3Ljk5ODVDMTEuMjAzNCAxNy45OTg1IDExLjc2MTcgMTcuNzg2IDEyLjE4NjUgMTcuMzYxMkwxMy42NDMxIDE1LjkwNDZDMTMuNjg3OCAxNy4wNjczIDE0LjY0NzEgMTcuOTk5NSAxNS44MjA2IDE3Ljk5OTVDMTcuMDIyNCAxNy45OTk1IDE4LjAwMDEgMTcuMDIxOCAxOC4wMDAxIDE1LjgyQzE4LjAwMDEgMTQuNjE4MSAxNy4wMjI0IDEzLjY0MDQgMTUuODIwNSAxMy42NDA0Wk0xMS42ODkzIDE2Ljg2NEMxMS4xMTM3IDE3LjQzOTggMTAuMTc3IDE3LjQzOTggOS42MDEzMyAxNi44NjRDOS4zMjI0NCAxNi41ODUyIDkuMTY4ODcgMTYuMjE0NCA5LjE2ODg3IDE1LjgyQzkuMTY4ODcgMTUuNDI1NyA5LjMyMjQ0IDE1LjA1NDkgOS42MDEzMyAxNC43NzZMMTAuNzQ0OCAxMy42MzI2TDEyLjgzMjggMTUuNzIwNkwxMS42ODkzIDE2Ljg2NFpNMTMuMzI5OSAxNS4yMjM0TDExLjI0MTkgMTMuMTM1NEwxMi4zODUzIDExLjk5MkMxMi42NjQyIDExLjcxMzEgMTMuMDM1IDExLjU1OTUgMTMuNDI5MyAxMS41NTk1QzEzLjgyMzcgMTEuNTU5NSAxNC4xOTQ1IDExLjcxMzEgMTQuNDczMyAxMS45OTJDMTUuMDQ5IDEyLjU2NzYgMTUuMDQ5IDEzLjUwNDMgMTQuNDczMyAxNC4wOEwxMy4zMjk5IDE1LjIyMzRaTTE1LjQ2OSAxNy4yNTM5QzE0LjgyNDEgMTcuMDk1NyAxNC4zNDQgMTYuNTEzIDE0LjM0NCAxNS44MkMxNC4zNDQgMTUuMTI3IDE0LjgyNDEgMTQuNTQ0MyAxNS40NjkgMTQuMzg2MlYxNy4yNTM5Wk0xNi4xNzIxIDE3LjI1MzlWMTQuMzg2MUMxNi44MTcgMTQuNTQ0MyAxNy4yOTcgMTUuMTI3IDE3LjI5NyAxNS44MkMxNy4yOTcgMTYuNTEyOSAxNi44MTcgMTcuMDk1NyAxNi4xNzIxIDE3LjI1MzlaIiBmaWxsPSIjMzMzMzMzIi8+DQo8L2c+DQo8ZGVmcz4NCjxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "PVMv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgBnVZNTttQEJ55fsmmLIwERJUqNdwgnKDhBIUTkOyqxhVGImmlLkgWlWiohFET1B3hBNATACcgPQHpipYfEalFQvGzX2fsBhwr/59kOfYbfzPvm58XhClgv7lMSwlpJR+ajrPYHmSHMAFK1u8VALFFPzPddxrg1FUq73x73orbCxgTm4Vrm8yPiKytUed9gGVfwwZqnU5KeV58e5WZKvKSdUvR+mW6KtVaqhxd+0AS+VIegUazkzCWHGe2PXbkceLiu6tcNMptkoN2sQFIO1BeNvqtmISYn1HjAUQ0Z3ypzZ/SjSL2MmOR9yPuPu/sLzRgDMjhxARtXPDNA/3DoARW6yknbm+HMpkARjP6HodFTElKA+Ia3XPV+twh9IFtX5hJNXMCWpvV+sJidE0MImYpyDhHHx1Sshqlws3aQGKAtNawGl/HQcQ9TgtXjfgOeoh9vUx5aPYlL1q36wi+04+4n4NO4s/3UcQBuW3fmUnXO0cBp5+/zuVhCCIOWiSVycRu8r6V6DxL83rciTC48KkBfO9hD0agk7inEUD1TPYeYB4E7tIO7lDgOV+UlwtqsNwjuUDfDL2+aA4jjmhs8myhstzFsJkq5GiVL5L1jJwclKxrHm5Pdf6xcPfyU3325wjiDEnBEVPl+CCUt7QdmYbvCzevNc9JgPKmdXkmXCNxzE9KKHscYhegSRFnqfQqMeID2lGObXgMI8gt8X+KVcjYLhV+2cOIue0TRjhX3GQYVJyYbZDloW8CWaq1+XLRujERjV1KyjolLNRfYTY4DsBf3dlPHffbWZw4uvbYoTu1OZsPAE6KDuYEt4De68i/i1T7j8SuB4FjqR4yg4g1iFc6lG9yFK3rEwQkeYJa7yHudjq/l9OQG3Rm+oZxQg1F/YQmVUZWgOCpyFW0Eo7lVGOqyBnB8WYY5aBjn9AmTSrV+nwwlqcm74IrSqqZjFKqFf8H8A/KNLJKI0gdEwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "S4Aq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPYSURBVHgB1ZlNTBNBFMf/MyUBiZFq4sdBscaPiyJq4sGkRjwhwUS44gE4ctNb4QK9APECXuQmEAM3AxwQiQdq4KYxBeJBYyJFY6IebD1UIO6O7+1S6dJtuy1sP35Js+3MzvS/b968mX0jsFcCcw0Q4gok6qHoCngt9UKsQakooC9DRwiDTSHsAYF8METKe5Cig8R4c2orRBQK09C18XzE5yaYhXo8vSSyAfvDGlk+iP6mMacNnAl+MOVF9cFR6rwFriDGyOJBsvha1juz3bBt1amchz531pxYW2aqRM98L6RcKIBYxkdyRtHzqjfTTZ60NSwW6EPBoflxsx1YfPbartZecNHEJkgvOtWHu1+0QJDPlgIKHRhoHE8usgoOzPkMnzX8yZ7m80dQd7wa67EtLK3H6LoJF4lC168mR48KS7WkGAvlS9d6qbPeEJuAxfpHVxDb+AuX8NJoUzjF7UTBTpTg8AXVka6lv/aQRSxTW1OJtktH4SqC/NnQZrIj2CMyhhMWZ1vurYTrCM9/baZgfgIlGjK1mf34C7HN1KGfXP0B10mysilYetqztWGx/qcrWKSJFiHf5Wvb8w9Y/R5HQdi2shkleuY/I0NkKBGiiMfPVGyb2ocCUFNVgbpj5sTlEctxdLyoqrpSYWy+HRIL3Egpa558T/H4t/F9tetayuTsmv1k1I80nzMiTTIcFgeWvuYwD0SLJMG34CKna6ow23YxRSzDDzfSfBbd/lNwiI8Eu7sT67p+Im1ITBDwn7R9oBSkqJcUznxwkZpKczFln41kWMbb6o7BAV6JAjCw9AW1Q29weeQd6uhjt/+4e+Gwk67cFzyx+hODNLESsNgnb7+l3Mcjkc11GNcF845uN7xq5gtNOgrI5YISYUn7zWWUCxJRcgkRRrmg6csU1lT5CNZFSNL6HDbSR+XAVpwE992m9yZtBqWOrmYw3Bo1w5rCGEodndJZSMRhziIqFUKpoiiN9ahxmr/uvDUrFSRfbsjULpLllT4S26C+rcQ2tLz6sqAo57aNNS/R/XIhm+giEEZ/49XED+vSrFRnaUUMwYmU1uQSq2DOsGjaQ5QK7Aq7csapm59Bzs/u+EwRCWLgzvDuQvvs5eJECDfvk38XyZ919ZjEBuyq0ueHiyc6mE4s4+TIoIOODIbcz8Lz6ZJu6waWu+AEIw0rhvg1G24gaNHSKELty6FMMmxtIXuplQ/7Aa9gZiQYc9pkDweLYPFZc3I2fxmF0MNk0aD7B4u74fO7A9WU+dToaEzWU3deM22Q8HdehPjYllYrXYtQQi+EP/EQ77qQJ/8ANtRlvsAKrD8AAAAASUVORK5CYII="

/***/ }),

/***/ "TNK8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALhSURBVHgBnVVdbhJRFL7nzgxpYkymScH4JF2B7Q7oCoQVSN+MTOM0FvQNeGuopkOkxjfoCoorgK6guoLiU7VgJNEmwszc4zkDQ4cf29KTwL1zz+/9vnNmQCwQ2z43xd8Vk/fOp8edZfVRgSnHFxdJQ9frdJiKmPQBRHPgumVd15OkK07pETogsTnQ9LLjrPZnE8hwU8j1nsd044z3Soitoeeto8JNBLWLSqVimtEi49acXqoyremY659xgQtvwIpRcL9aqT0qiTlIfpmG55cAsVM5ijuL9DHPa6EQ/YNafGsuwZtcr64Ak7PKZeQtFal0nYqE7UptrSmiECFgFgRUZ50KO93DgvWjdIf4wpcakQ5tQD8bPZf2y8sN3hionc15KUiTyaubAufJn/g7Bwnkj2kE+axgdYuTBCvK7y9yDAgj2Ghr7lkXqf/ZgJQtaoTPQ/3PaqUWB0Jjm1XhzeX+qI/7rhhkos6GoaUEkUrEtUFo6UUJDF2zBSoiNmE7znpQ6MGHRIOS7PLNmXyd/4TnE3wa4d09nHhTZLp2Qyn8KgH4ynbe6raoxOTIwKuigKcC1PFsYlczmtRVdWN4lZQ8HEpgJqyWezz8DbTfu56hNxgmwjrLA4YADve+9LFJzzSE8GTuakM3KMKNPehMJnnP6qaCQULIVo7WpqoKKqckVIRZOUqsz/ic0KBtHXxMfAl4oddIzHtYR4Emt/1kkt/V4m1aykSskx93VigU/JSWDSK0HT0f+1S5gwjek/xOr07Bz4mXDc3zmOzrVwULdUGJcD0mh1Z07AmuILCP7hze7OMLyFDF30YnWB0aV5v7N70EC7nLBvd2NMlrqzfVSQxP0CC3iFx0SDhnqe7TGI1+CNf7yPgXrJ9F5ssYk7l0guskY3xz3+1J8B1uZWUTsdshsTcJ3GZA5JVoKZKlQ7PBw2ciisxdgt8pAQvjrwmsE4Ed6fmZ/Vu+YvcS7u/gU7mk/AN9W273SDuPCgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "VBX7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"indication": "CareerItem_indication__1gRMj",
	"apply": "CareerItem_apply__2VIVO",
	"job_description": "CareerItem_job_description__3SOU8",
	"title": "CareerItem_title__PKpgY",
	"job_detail": "CareerItem_job_detail__1FIFa"
};


/***/ }),

/***/ "XV9G":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xOCAxLjA1OTA4SDQuMjM2MzNWOC40NzI2NkgwVjE0LjgyMjhIMS41ODY0M0MyLjI3NjMzIDE0LjgyMjggMi44NjQ1IDE0LjM3OTkgMy4wODIzOSAxMy43NjM3SDMuNDg2MTNMNi42NjM0NCAxNi45NDA5TDEzLjc2MyAxNi45Mzk2VjE1LjM1MzlDMTMuNzYzIDE1LjE2NzYgMTMuNzMwNSAxNC45ODg5IDEzLjY3MTIgMTQuODIyOEgxOFYxLjA1OTA4Wk0xNi45NDUzIDIuMTEzNzdWMy4xNzcyNUgxMy4yMzQxVjIuMTEzNzdIMTYuOTQ1M1pNMTIuMTc5NSAyLjExMzc3VjUuNzE1NzdMMTEuMTE4MiA1LjI0NjA5TDEwLjA1NjkgNS43MTU3N1YyLjExMzc3SDEyLjE3OTVaTTkuMDAyMTggMi4xMTM3N1YzLjE3NzI1SDUuMjkxMDJWMi4xMTM3N0g5LjAwMjE4Wk0xLjU4NjQzIDEzLjc2ODFIMS4wNTQ2OVY5LjUyNzM0SDIuMTE4MTZWMTMuMjM2M0MyLjExODE2IDEzLjUyOTUgMS44Nzk2MyAxMy43NjgxIDEuNTg2NDMgMTMuNzY4MVpNMTIuNzA4NCAxNS4zNTM5VjE1Ljg4NTFDMTAuOTMzMiAxNS44ODU1IDcuOTMwNjkgMTUuODg2IDcuMTAwMjMgMTUuODg2MUwzLjkyMzAyIDEyLjcwOUgzLjE3Mjg1VjkuNTI3MzRINS40NTg1NEM2LjYxOTQzIDkuNTE4MDYgNy41MTA4NSAxMC41NTE5IDcuNDE0MDMgMTEuNzAwOEw4Ljg3OTQxIDEzLjE2NjJDOS4wODY3MyAxMy4zNzM1IDkuMDg2NzMgMTMuNzEwOSA4Ljg3OTQxIDEzLjkxODJDOC42NzIxIDE0LjEyNTUgOC4zMzQ3NyAxNC4xMjU1IDguMTI3NDIgMTMuOTE4M0w2LjExNjA2IDExLjkwNjlMNS4zNzAyOSAxMi42NTI3TDcuMzgxNjUgMTQuNjY0MUM3Ljk0MTggMTUuMjI0MSA4LjgxOTk3IDE1LjI3NyA5LjQ0MDEyIDE0LjgyMjhIMTIuMTc3MkMxMi40NzAxIDE0LjgyMjggMTIuNzA4NCAxNS4wNjEgMTIuNzA4NCAxNS4zNTM5Wk0xMC4wNzMgMTMuNzY4MUMxMC4xNDEyIDEzLjI5MDMgOS45OTE4NiAxMi43ODcyIDkuNjI1MTUgMTIuNDIwNUw4LjQ2MDE0IDExLjI1NTRDOC4zNDg1NSA5LjY1MjE1IDYuOTI4MzEgOC4zODc1MSA1LjI5MTAyIDguNDcyNjZWNC4yMzE5M0g5LjAwMjE4VjcuMzM1OThMMTEuMTE4MiA2LjM5OTQyTDEzLjIzNDEgNy4zMzU5OFY0LjIzMTkzSDE2Ljk0NTNWMTMuNzY4MUgxMC4wNzNaIiBmaWxsPSIjMzMzMzMzIi8+DQo8cGF0aCBkPSJNMTIuNzA5IDkuNTMxNzRIMTUuODgxOFYxMC41ODY0SDEyLjcwOVY5LjUzMTc0WiIgZmlsbD0iIzMzMzMzMyIvPg0KPHBhdGggZD0iTTEzLjc2NTYgMTEuNjQ5OUgxNS44Nzk0VjEyLjcwNDZIMTMuNzY1NlYxMS42NDk5WiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fgjs":
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

/***/ "gD5v":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOvSURBVHgBpVZBbttWEJ35/GK9cBAGiF1kVfkEkU8Q+wSqT2BpV9QKxACJ0B3tXROnsIXKRXeWT2DpBJZPEPoEYVZFrQBRgASwRXImM1+RoARSAiIfkCjy/3kz897MUAAFVhi+DoqcR/16ujcMkXlw+M96vOxg6/HwCBi2GGAExE+WndUAvOzOliFK7B+//VcmhIgRq629t2VGTpxXhJg467/sPBiEv19XkGjj+cnPm08bwy0PeV+O/KpANl2tocGHSNkVgn3IKWxJyDF6MHKRtxrXr5igrtG41G9WAmttWTYj+QzG1rb9LLsYZ9lOyfpVg1y5TdMD39pzMe8zcS/1PybHxxsjtfezO6dM1HfgLnprX8nPRNP2sqz+578PXAbPGsML5LzPqM54V58J2LZEKwDcloC6U2oNguxjGZG7z/9ee2J0Q4EENGa6radzwLpSa3cATEWAmwDUlkcBopGI6WAKrCsrfeiO7YdtZOjlQqc+MzMlRCQ0P51Kqketxv/7YfhuUhk3N8E4z/dFi/qkBDB5cXJ/gwmTafU8e3xd8/PVqJStnhPSe9VpVi2ziti77qqxipqm+aBk7ak7xFwmwLZBCgC9XZaogXF3spf3DXpxChh4wJERXaaZm3lwIxEKo1WJKnDAxGeHnbVtPSbVU3WHmAMHLHuqjTojzitmQlt/ntIvIp8Tt4ZMlducwkn0fOUcQD6SazMHrHtAESIOKOczEfeCAHZedtYGXwT7NbgTV2ghoadkPa2A+LCzHgJS/Jnz0V+d+71xlu8wQy31S4k8Tb4GXgiuK/VKPQR8BARdKbd70lyvkc2MFu3WSY1T3c+oycCXi3AWgh8f3xupMFrLaAwz04GU6hs5rg4CoFx+Qw/YOxIH6DJbsBC+s1qN4b5cIhExUSfgiRHJPWIgAWzOC1gIPBRxfeudy2hoSxZNVymarHSgs5WqGZe8Tc10kb35FrhvTYVRgUF4xUsBPVMLYngvND3Sez+9rS2zXwo+6VATsdABbALDcHdmhHBXG8tNUKGnMPjnVHWyRcq1trUTVECFjpp46CFj02TUXYZh4RtLR6nj2hhxxDLtMGZpdwIzkgFVFcfJzcrKqHDkk1080s5TYBVTmkapamqr65wXHd742TgsDK5jQK8ym8vaJGzgACC/0g59cbK+Ic5qKVFXsvmlMLjWrxNNhphSoNfpno5YeS0mvjER5XBZGNxt5vm2i9yYgb4XpSN3JeLYVZCOZnmVzb8wfmgV/WvxCUt3/RAaI9jXAAAAAElFTkSuQmCC"

/***/ }),

/***/ "goKT":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPg0KPHBhdGggZD0iTTEyLjcyNjYgMTMuNzgxMlYxNS4xODc1QzEyLjcyNjYgMTYuNzM4NCAxMS40NjQ5IDE4IDkuOTE0MDYgMThIMi44NDc2NkMxLjI5NjggMTggMC4wMzUxNTYyIDE2LjczODQgMC4wMzUxNTYyIDE1LjE4NzVWMi44MTI1QzAuMDM1MTU2MiAxLjI2MTY0IDEuMjk2OCAwIDIuODQ3NjYgMEg5LjkxNDA2QzExLjQ2NDkgMCAxMi43MjY2IDEuMjYxNjQgMTIuNzI2NiAyLjgxMjVWNC4yMTg3NUMxMi43MjY2IDQuNjA3MTIgMTIuNDExOCA0LjkyMTg4IDEyLjAyMzQgNC45MjE4OEMxMS42MzUxIDQuOTIxODggMTEuMzIwMyA0LjYwNzEyIDExLjMyMDMgNC4yMTg3NVYyLjgxMjVDMTEuMzIwMyAyLjAzNzE0IDEwLjY4OTQgMS40MDYyNSA5LjkxNDA2IDEuNDA2MjVIMi44NDc2NkMyLjA3MjMgMS40MDYyNSAxLjQ0MTQxIDIuMDM3MTQgMS40NDE0MSAyLjgxMjVWMTUuMTg3NUMxLjQ0MTQxIDE1Ljk2MjkgMi4wNzIzIDE2LjU5MzggMi44NDc2NiAxNi41OTM4SDkuOTE0MDZDMTAuNjg5NCAxNi41OTM4IDExLjMyMDMgMTUuOTYyOSAxMS4zMjAzIDE1LjE4NzVWMTMuNzgxMkMxMS4zMjAzIDEzLjM5MjkgMTEuNjM1MSAxMy4wNzgxIDEyLjAyMzQgMTMuMDc4MUMxMi40MTE4IDEzLjA3ODEgMTIuNzI2NiAxMy4zOTI5IDEyLjcyNjYgMTMuNzgxMlpNMTcuNTIwMyA3Ljc5MjE5TDE1Ljk0NTggNi4yMTc3MUMxNS42NzEyIDUuOTQzMDUgMTUuMjI2IDUuOTQzMDUgMTQuOTUxNCA2LjIxNzcxQzE0LjY3NjggNi40OTIyMyAxNC42NzY4IDYuOTM3NDUgMTQuOTUxNCA3LjIxMTk4TDE2LjA3MTQgOC4zMzIwM0g3LjYyODkxQzcuMjQwNTQgOC4zMzIwMyA2LjkyNTc4IDguNjQ2NzkgNi45MjU3OCA5LjAzNTE2QzYuOTI1NzggOS40MjM1MiA3LjI0MDU0IDkuNzM4MjggNy42Mjg5MSA5LjczODI4SDE2LjA3MTRMMTQuOTUxNCAxMC44NTgzQzE0LjY3NjggMTEuMTMyOSAxNC42NzY4IDExLjU3ODEgMTQuOTUxNCAxMS44NTI2QzE1LjA4ODggMTEuOTg5OSAxNS4yNjg3IDEyLjA1ODYgMTUuNDQ4NiAxMi4wNTg2QzE1LjYyODYgMTIuMDU4NiAxNS44MDg1IDExLjk4OTkgMTUuOTQ1OCAxMS44NTI2TDE3LjUyMDMgMTAuMjc4MUMxOC4yMDU3IDkuNTkyNzEgMTguMjA1NyA4LjQ3NzYgMTcuNTIwMyA3Ljc5MjE5WiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4NCjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0id2hpdGUiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hZ7X":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO7SURBVHgB1ZlNSFRRFMf/986kVgoDGWRQTNAHFORELaIsXrsKBKGNtlEhsFlF2wrSReuGgsxVRtDXJheF22d+0CJowDa5etZCwaIxzS94czr36YzPceY5c9+MzfxAfb57H/Of+86599z/FfCB0fIstFSzFBGCIpJkI4SIECjk7iMAi4AEITlEJOKfXkdN+EBAg7OtvUYAoh2SWkAiVODjFn+qaSfpuY74ggQ7QoW4z5cGioNpE/UUIjwvwSw0zEKfoXhCM1X084gr4dbWXbfgfFtfO0QypvHqC8WStrg9/LZrwKtTwKvxXGvffU6oGH+vGpSeEEm0HjjZjB/j74dydcopeE1sN7YZfuWGl+isgv+X2BReojfF8LnW3g6xmmDaNOytQ+R4Q9a2waEJ5IsgujSSMYNsEOzMBhJfdBNMCb3TZeDU8f05+zRd70P+iMSOxapD5kBnInVHupulEA/9iH18r9lTbOFQaGXn8oa3nRbshALQAk06r53GPhZdbJSmJl6wUv+vj/DqCqZF7a4qXL14DKWCXNqC6pdacvmbhKHJkXB9zra3g+OYX1iGTww1yioBHcEByYUMQZt99bVZ7w9/tvDoxRiKQVIIFa6mNDoehlhsB0pAEUY2jVDVISPt5WoDFQGFVFgEbUhDpyiu21WN2t1VznUtX2dD3W/ImDmmZuagiy1kJCgIjTpl/OHwHmfe9eLCmbDzk2J+YQWXb+gvopKoUfJ0VuqyMc30zB/4QiLCgpNhbBNzPMK+IITkNhTmaaZ9xG+KIDSZ/7uCqZ+rAup4pcuWeGpac4/qhPULfhHnr/f+9jvKVy4exd2blzbdH/z4DQ+emigiFieeSKBysLj4EXFUCEQ0y4JpEpVDXAaQNFEhSFX8BKqXTd48VUAci4QqL6XZfzvBtVv5xzGRY7A4Ow4B6kGZwxqfq7+OYDXUpFzF8sVKbffX93RUvqNMLm1pwWOvo/1cXJgoNwj9jrY1NvgSNqizzGYMy87Irw2CHX/WlmUTGkSbPWOZ2Wn0TVdMlEE8sxnZ4w6F9P1cDzS1PY3xzHELeaAcn4b6za6PKj91amAlduRltDtrm9eDvEvtJh+OkA5eYhWeDvz3rx/MgyeaZ3n3d7bkLjwnOxGio6+iMc9uyIPVQxn5jtMggtKgTpM6i3Io40Y5nMo09OPDZWCqBB8p9rFXJhfanrSwAdOuZc+qeZ5PRAsVmn4cPlBHt/bORcNOsnsklCGj9oausHHi0tmCxZHEpBQ0EFyqibsd9UL5B3oAa8CX1G2JAAAAAElFTkSuQmCC"

/***/ }),

/***/ "kzqI":
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

/***/ "mNWG":
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "n2BJ":
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

/***/ "nVgH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMiSURBVHgBnVVLThtBEK3q6XE2kTKRgIQV5gSYE2BOAJwA2EVhkI0CTnbALjFENsKg7GJOADkB5gQxJ8CsUDAIR4KNPdOV12Ml+Mc4SUnj8XTNe12fVz1Mf2Ebb69TokKvcy0IqFb8Ml6Lw3GcM/vmKplw3NPBSPFIwu38weviU3hNMea6Thq7Vz7tjyz3+j5gY6P1d/z9P3IWSQqFl7+fbSau625SaPY+Ho5Vc37di8PHkrfNmVpfqWeZaQ5ZpMiYb6T4NLdaL5PEI6Oab6xeLxGpGeqPPEUinihVESPngXtfLhYnG1FJHGeLmBeJzIKwM9dNKo1mK9jjd/7NvCOmgBer2KkrTRFOEodH+dKrrUGRoSw29m3gugIT4oaQeEqx8Zi5hrV5g5/OC6Hjpf6MrGUhT9zgp5lODJ49RI6L0o81xwY7+yOzXQTZOy8RBBfr/lV6tzRe6fQ9Y5VB/if5HiXZErPYcg1paLH4soEBWlNKH+f8H3uGTEWR8pBNRsh4TedhNg4/VC07h2NlRIMKqQKIo8Yh5WRTP0za5sZhVZxz3a+nIbmCJWaWk3xpdLqptY3Wc4Pnx8hqyWr/n8g3/NtMzr+5g/NUIBlDsoDbfG7lZvFZKyxARkeGeA96X0xoffHerx8P2qSP3L7EEmYtIQnXmFRltzRqdT6L2hRRa84fjC19Lo2cMJkzZFTGRpeu1l+HkrfPEzlXmMjocCKxzZxH7atNfT9pie17dg3TmxGj0pjacjS9g8ilrdfK4yrfYTGrgmBaWJZZKCLsbqDaFGPWoO4zsFi/92TkCiPb6wyVzcKZMqxeUJ+hZIoz9thgTCQNMLaiVxA9Ik8hyjVlMJFsT0ObjVwCOGHv0F+1Dyw8h+b+RM2rKGPBZtmBb0+otFOqoIGLhv8cdVhjr/3E+DDQVC955GO2oz4hHfgoEzE13XLck0SrlW6nF2OIxqqn3WTLzLEDJBIdaMMt+txBz80gmEy4OmPX8vuja8NwQ8lz/u0mFJEdFGkzbM3GfaRjxz8ykaWBMaBMCe2m4qBDDy6F6AKtk738bKSxczhajcP+AlWHcNuIwIqbAAAAAElFTkSuQmCC"

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "q51q":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "qPB9":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF6SURBVHgB3VRLUoNAEO2ZUJVtPIF4gsQTGE9gcgJTlc8mK28Qb+CGDZ8qPEE8whwhniB4AlmyAXyNYEUFwmdWeVUwzdDdb7pfg1iv18c0TU06gRAicBznhjRAJknyb5MJt9vtNWmA4Xner5Mul8s9KphFUXSLxw/qCVmyVySdkgaUESi+oQqTNED83VgsFqZhGEfSAB4WUfZitVp9YhlRf4RG2S6mSLHQWOcYgjdqCQzKDPF7mAdZ4dNLaCSf0PdB36sIVO5oUgcg8bjIU0oQx/EhN++oA4qDSSnLRWYUQg+HQ9OyrMYfHKZwhCnk2NB13auqFmVC85p/0Y2B5JPczLoga3y7Cv0j8DkCxTf0c0wNwe1B4oecIKvAqHKG0GowGAQgmEKPlFoAyQP8pRXblRX4vh+C5J7ySlpAIW6O+IAuAqLu5WazeUQvX6BDiGtn2/ZrW9+6KWKxdlh4MkwO7uJ7jmB0YoddfGsJcJInHjkOwH/lWZevVnwBQ5zEEjID5QQAAAAASUVORK5CYII="

/***/ }),

/***/ "rcTn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth_url; });
/* unused harmony export admin_url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return profiles_url; });
/* unused harmony export orders_url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return products_url; });
/* unused harmony export payments_url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return medplans_url; });
/* unused harmony export notifications_url */
/* unused harmony export cms_url */
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

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "w89z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userToken; });
/* unused harmony export cartProducts */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ChW8");
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
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_DETAILS */ "b"],
    payload: details
  };
};
const userToken = token => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* USER_TOKEN */ "c"],
    payload: token
  };
};
const cartProducts = products => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* CART_PRODUCTS */ "a"],
    payload: products
  };
};

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headers": "Header_headers__dbCVu",
	"greyBack": "Header_greyBack__kQ8b0",
	"logo": "Header_logo__1QUnI",
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


/***/ })

/******/ });