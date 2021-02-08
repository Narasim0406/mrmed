webpackHotUpdate_N_E("pages/CartDetails",{

/***/ "./components/MyCartFlow/OrderSummarys/orderSummary/index.js":
/*!*******************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/orderSummary/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderSummary.module.scss */ "./components/MyCartFlow/OrderSummarys/orderSummary/OrderSummary.module.scss");
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NeedSigin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NeedSigin */ "./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.js");
/* harmony import */ var _Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Attached Prescriptions/index */ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js");
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\OrderSummarys\\orderSummary\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function OrderSummary(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(40),
      deliveryCharge = _useState[0],
      setDeliveryCharge = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modal = _useState2[0],
      setModal = _useState2[1];

  var toggle = function toggle() {
    setModal(!modal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.summaryBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.orderSummary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Order Summarydffdfd")), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Cart Value"), __jsx("span", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "\u20B9", props.total)), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "Delivery Charge"), __jsx("span", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "\u20B9", deliveryCharge)), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "Saved Amount", __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 43
    }
  }, "(COUPON APPLIED)")), __jsx("span", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "\u20B9", props.savedAmount)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.orderTotal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, "Order Total"), __jsx("b", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "\u20B9", props.total != 0 ? (props.total + deliveryCharge - props.savedAmount).toFixed(2) : 0)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.proceed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnProceed,
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 80
    }
  }, "PROCEED TO PAY")), __jsx("button", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btnPrescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 68
    }
  }, "Cancel Order")))), __jsx(_NeedSigin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modal: modal,
    toggle: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddelivery__details__container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddelivery__details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Delivery Details"), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddelivery__inner_sec,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "".concat(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddelPersonInnerContainer, " d-flex"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddelPersonInnnerLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddel_person_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "John Doe"), __jsx("p", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddel_person_number,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "+91 56182 16548")), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mddel_person_innerRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Home"))), __jsx("p", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mdstreet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "12 Random street in random city Chennai,", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 92
    }
  }), " Tamil nadu - 600000"), __jsx("div", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.changeBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.report_order1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, "CHANGE")))), __jsx(_Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }));
}

_s(OrderSummary, "vFtaF1EyoQ2KNZb4GX+Up4WmArk=");

_c = OrderSummary;
/* harmony default export */ __webpack_exports__["default"] = (OrderSummary);

var _c;

$RefreshReg$(_c, "OrderSummary");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvb3JkZXJTdW1tYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIk9yZGVyU3VtbWFyeSIsInByb3BzIiwidXNlU3RhdGUiLCJkZWxpdmVyeUNoYXJnZSIsInNldERlbGl2ZXJ5Q2hhcmdlIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsInN0eWxlcyIsInN1bW1hcnlCb3giLCJvcmRlclN1bW1hcnkiLCJkZXRhaWxzIiwicmlnaHQiLCJ0b3RhbCIsInNhdmVkQW1vdW50Iiwib3JkZXJUb3RhbCIsInRvRml4ZWQiLCJwcm9jZWVkIiwiYnRuUHJvY2VlZCIsImJ0blByZXNjcmlwdGlvbiIsIm1kZGVsaXZlcnlfX2RldGFpbHNfX2NvbnRhaW5lciIsIm1kZGVsaXZlcnlfX2RldGFpbHMiLCJtZGRlbGl2ZXJ5X19pbm5lcl9zZWMiLCJtZGRlbFBlcnNvbklubmVyQ29udGFpbmVyIiwibWRkZWxQZXJzb25Jbm5uZXJMZWZ0IiwibWRkZWxfcGVyc29uX25hbWUiLCJtZGRlbF9wZXJzb25fbnVtYmVyIiwibWRkZWxfcGVyc29uX2lubmVyUmlnaHQiLCJtZHN0cmVldCIsImNoYW5nZUJ0biIsInJlcG9ydF9vcmRlcjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTRCO0FBQUE7O0FBQUEsa0JBQ29CQyxzREFBUSxDQUFDLEVBQUQsQ0FENUI7QUFBQSxNQUNqQkMsY0FEaUI7QUFBQSxNQUNEQyxpQkFEQzs7QUFBQSxtQkFFRUYsc0RBQVEsQ0FBQyxLQUFELENBRlY7QUFBQSxNQUVqQkcsS0FGaUI7QUFBQSxNQUVWQyxRQUZVOztBQUl4QixNQUFNQyxNQUFNLEdBQUMsU0FBUEEsTUFBTyxHQUFNO0FBQ2ZELFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSCxH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eUJBVkosRUFXSTtBQUFLLGFBQVMsRUFBRXBCLGdFQUFNLENBQUNxQixTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUVyQixnRUFBTSxDQUFDc0IsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLENBWEosQ0FGSixDQXhDSixFQTBESSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExREosQ0FESjtBQThESDs7R0FyRVE5QixZOztLQUFBQSxZO0FBdUVNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DYXJ0RGV0YWlscy5lM2M5NWExODY3MzViYjc4NzU4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL09yZGVyU3VtbWFyeS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5lZWRTaWduSW4gZnJvbSAnLi9OZWVkU2lnaW4nO1xyXG5pbXBvcnQgQXR0YWNoZWRQcmVzY3JpcHRpb25zIGZyb20gJy4uL0F0dGFjaGVkIFByZXNjcmlwdGlvbnMvaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gT3JkZXJTdW1tYXJ5KHByb3BzKXtcclxuICAgIGNvbnN0IFtkZWxpdmVyeUNoYXJnZSwgc2V0RGVsaXZlcnlDaGFyZ2VdID0gdXNlU3RhdGUoNDApO1xyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIFxyXG4gICAgY29uc3QgdG9nZ2xlPSgpID0+IHtcclxuICAgICAgICBzZXRNb2RhbCghbW9kYWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyU3VtbWFyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPk9yZGVyIFN1bW1hcnlkZmZkZmQ8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FydCBWYWx1ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtwcm9wcy50b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXJ5IENoYXJnZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtkZWxpdmVyeUNoYXJnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TYXZlZCBBbW91bnQ8cD4oQ09VUE9OIEFQUExJRUQpPC9wPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtwcm9wcy5zYXZlZEFtb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyVG90YWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5PcmRlciBUb3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtwcm9wcy50b3RhbCE9MCA/IChwcm9wcy50b3RhbCtkZWxpdmVyeUNoYXJnZS1wcm9wcy5zYXZlZEFtb3VudCkudG9GaXhlZCgyKSA6IDB9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9jZWVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5Qcm9jZWVkfSBvbkNsaWNrPXt0b2dnbGV9PjxiPlBST0NFRUQgVE8gUEFZPC9iPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0blByZXNjcmlwdGlvbn0+PGI+Q2FuY2VsIE9yZGVyPC9iPjwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cG9uQm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5hcHBseX0+QVBQTFkgQ09VUE9OUzwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYXBwbHlGaWVsZH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFwcGx5IGNvdXBvbiBjb2RlIGhlcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuQ29kZX0+PGI+QVBQTFkgQ09ERTwvYj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291cG9uTm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+T1JERVIgQUJPVkUg4oK5NTAwIFRPIFNBVkUgT04gREVMSVZFUlkgQ0hBUkdFUy4gRlJFRSBERUxJVkVSWSBXSVRIIENBUlQgVkFMVUUgQUJPVkUg4oK5MTAwMDwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxOZWVkU2lnbkluIG1vZGFsPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxpdmVyeV9fZGV0YWlsc19fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsaXZlcnlfX2RldGFpbHN9PkRlbGl2ZXJ5IERldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsaXZlcnlfX2lubmVyX3NlY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZGRlbFBlcnNvbklubmVyQ29udGFpbmVyfSBkLWZsZXhgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbFBlcnNvbklubm5lckxlZnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxfcGVyc29uX25hbWV9PkpvaG4gRG9lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxfcGVyc29uX251bWJlcn0+KzkxIDU2MTgyIDE2NTQ4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbF9wZXJzb25faW5uZXJSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZHN0cmVldH0+MTIgUmFuZG9tIHN0cmVldCBpbiByYW5kb20gY2l0eSBDaGVubmFpLDxiciAvPiBUYW1pbCBuYWR1IC0gNjAwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlQnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZXBvcnRfb3JkZXIxfT5DSEFOR0U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBdHRhY2hlZFByZXNjcmlwdGlvbnMvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlclN1bW1hcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==