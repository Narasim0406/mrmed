webpackHotUpdate_N_E("pages/CartDetails",{

/***/ "./components/MyCartFlow/Address/AddressCard/index.js":
/*!************************************************************!*\
  !*** ./components/MyCartFlow/Address/AddressCard/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddressCard.module.scss */ "./components/MyCartFlow/Address/AddressCard/AddressCard.module.scss");
/* harmony import */ var _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\Address\\AddressCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AddressCard(props) {
  var btnStyle = {
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
    className: "card ".concat(_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card),
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
_c = AddressCard;

var _c;

$RefreshReg$(_c, "AddressCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0FkZHJlc3MvQWRkcmVzc0NhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQWRkcmVzc0NhcmQiLCJwcm9wcyIsImJ0blN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3hTaXppbmciLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjYXJkIiwiY2FyZFRvcCIsImNhcmRUaXRsZSIsImFkZHJlc3MiLCJhZGRyZXNzTmFtZSIsImFkVHlwZSIsInR5cGUiLCJhZFBuIiwiYWRkcmVzc01vYmlsZSIsImNhcmRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFDdEMsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFNBQUssRUFBRSxPQURNO0FBRWJDLFVBQU0sRUFBRSxNQUZLO0FBR2JDLFVBQU0sRUFBRSxtQkFISztBQUliQyxhQUFTLEVBQUUsWUFKRTtBQUtiQyxnQkFBWSxFQUFFLEtBTEQ7QUFNYkMsV0FBTyxFQUFFLE1BTkk7QUFPYkMsbUJBQWUsRUFBRSxNQVBKO0FBUWJDLGNBQVUsRUFBRSxLQVJDO0FBU2JDLFlBQVEsRUFBRSxNQVRHO0FBVWJDLGNBQVUsRUFBRSxNQVZDO0FBV2JDLGlCQUFhLEVBQUUsV0FYRjtBQVliQyxTQUFLLEVBQUU7QUFaTSxHQUFqQjtBQWFBLFNBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCZixLQUEzQixDQUROLEVBRUk7QUFBSyxhQUFTLGlCQUFVZ0IsK0RBQU0sQ0FBQ0MsSUFBakIsQ0FBZDtBQUF1QyxTQUFLLEVBQUU7QUFBQyxlQUFTO0FBQVYsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFFRCwrREFBTSxDQUFDRSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSSxhQUFTLEVBQUVGLCtEQUFNLENBQUNHLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NuQixLQUFLLENBQUNvQixPQUFOLENBQWNDLFdBQWhELENBRFIsRUFFUTtBQUFHLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QnRCLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0csSUFBZCxJQUFvQixDQUFwQixHQUFzQixNQUF0QixHQUE2QnZCLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0csSUFBZCxJQUFvQixDQUFwQixHQUFzQixRQUF0QixHQUErQixPQUExRixDQUZSLENBREEsRUFLSTtBQUFHLGFBQVMsRUFBRVAsK0RBQU0sQ0FBQ1EsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QnhCLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0ssYUFBMUMsQ0FMSixFQU1JO0FBQUcsYUFBUyxFQUFFVCwrREFBTSxDQUFDVSxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDMUIsS0FBSyxDQUFDb0IsT0FBTixDQUFjQSxPQUE5QyxNQU5KLEVBT0k7QUFDQSxTQUFLLEVBQUVuQixRQURQO0FBRUEsYUFBUyxFQUFFZSwrREFBTSxDQUFDLFFBQUQsQ0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixDQURKLENBRkosQ0FESjtBQWtCSDtLQWhDdUJqQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NhcnREZXRhaWxzLmM2YTAzNmQ3MWNhMmFlNDM5ZDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRkcmVzc0NhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkcmVzc0NhcmQocHJvcHMpe1xyXG4gICAgY29uc3QgYnRuU3R5bGUgPSB7IFxyXG4gICAgICAgIHdpZHRoOiAnMjA2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNjA1NEU1JyxcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgICBjb2xvcjogJyM2MDU0RTUnfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTYgbWItM1wiPlxyXG4gICAgICAgICAgICAge2NvbnNvbGUubG9nKFwic2FkZmFmZ3NnZ2hcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQgJHtzdHlsZXMuY2FyZH1gfSBzdHlsZT17e1wid2lkdGhcIjogXCIxOHJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+e3Byb3BzLmFkZHJlc3MuYWRkcmVzc05hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWRUeXBlfT57cHJvcHMuYWRkcmVzcy50eXBlPT0wP1wiSG9tZVwiOnByb3BzLmFkZHJlc3MudHlwZT09MD9cIk9mZmljZVwiOlwiT3RoZXJcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWRQbn0+e3Byb3BzLmFkZHJlc3MuYWRkcmVzc01vYmlsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRleHR9Pntwcm9wcy5hZGRyZXNzLmFkZHJlc3N9LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidG5TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snc3BfYnRuJ119PlNlbGVjdCBBZGRyZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==