webpackHotUpdate_N_E("pages/CartDetails",{

/***/ "./components/MyCartFlow/OrderSummarys/orderSummary/index.js":
/*!*******************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/orderSummary/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OrderSummary.module.scss */ "./components/MyCartFlow/OrderSummarys/orderSummary/OrderSummary.module.scss");
/* harmony import */ var _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _NeedSigin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NeedSigin */ "./components/MyCartFlow/OrderSummarys/orderSummary/NeedSigin.js");
/* harmony import */ var _Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Attached Prescriptions/index */ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js");
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../apiVariables */ "./apiVariables.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\OrderSummarys\\orderSummary\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var OrderSummary = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(OrderSummary, _Component);

  var _super = _createSuper(OrderSummary);

  function OrderSummary(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrderSummary);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setDeliveryCharge", function () {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setModal", function () {
      var modal = _this.state.modal;
      modal = !modal;

      _this.setState({
        modal: modal
      });
    });

    _this.state = {
      deliveryCharge: 40,
      modal: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrderSummary, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          deliveryCharge = _this$state.deliveryCharge,
          modal = _this$state.modal;
      var cartProducts = this.props.cartProducts;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.summaryBox,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.orderSummary,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.details,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.right,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, "\u20B9", cartProducts.totalPrice)), __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.details,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.right,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }
      }, "\u20B9", cartProducts.deliveryPrice)), __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.details,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.right,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.orderTotal,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.right,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.proceed,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.btnProceed,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrescription,
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
      }, "Cancel Order")))), __jsx(_NeedSigin__WEBPACK_IMPORTED_MODULE_10__["default"], {
        modal: modal,
        toggle: this.setModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddelivery__details__container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddelivery__details,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, "Delivery Details"), __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddelivery__inner_sec,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "".concat(_OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddelPersonInnerContainer, " d-flex"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddelPersonInnnerLeft,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddel_person_name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }
      }, cartProducts.addressName), __jsx("p", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddel_person_number,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      }, cartProducts.addressMobile)), __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddel_person_innerRight,
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
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mdstreet,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }, cartProducts.address), __jsx("div", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.changeBtn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.report_order1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }
      }, "CHANGE")))), __jsx(_Attached_Prescriptions_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
        cartProducts: this.props.cartProducts,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }));
    }
  }]);

  return OrderSummary;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userDetail: state.auth.userDetails,
    chooseMedicines: state.chooseMedicines,
    prescription: state.prescription
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(OrderSummary));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvb3JkZXJTdW1tYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIk9yZGVyU3VtbWFyeSIsInByb3BzIiwibW9kYWwiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVsaXZlcnlDaGFyZ2UiLCJjYXJ0UHJvZHVjdHMiLCJzdHlsZXMiLCJzdW1tYXJ5Qm94Iiwib3JkZXJTdW1tYXJ5IiwiZGV0YWlscyIsInJpZ2h0IiwidG90YWxQcmljZSIsImRlbGl2ZXJ5UHJpY2UiLCJzYXZlZEFtb3VudCIsIm9yZGVyVG90YWwiLCJ0b0ZpeGVkIiwicHJvY2VlZCIsImJ0blByb2NlZWQiLCJzZXRNb2RhbCIsImJ0blByZXNjcmlwdGlvbiIsIm1kZGVsaXZlcnlfX2RldGFpbHNfX2NvbnRhaW5lciIsIm1kZGVsaXZlcnlfX2RldGFpbHMiLCJtZGRlbGl2ZXJ5X19pbm5lcl9zZWMiLCJtZGRlbFBlcnNvbklubmVyQ29udGFpbmVyIiwibWRkZWxQZXJzb25Jbm5uZXJMZWZ0IiwibWRkZWxfcGVyc29uX25hbWUiLCJhZGRyZXNzTmFtZSIsIm1kZGVsX3BlcnNvbl9udW1iZXIiLCJhZGRyZXNzTW9iaWxlIiwibWRkZWxfcGVyc29uX2lubmVyUmlnaHQiLCJhZGRyZXNzVHlwZSIsIm1kc3RyZWV0IiwiYWRkcmVzcyIsImNoYW5nZUJ0biIsInJlcG9ydF9vcmRlcjEiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyRGV0YWlsIiwiYXV0aCIsInVzZXJEZXRhaWxzIiwiY2hvb3NlTWVkaWNpbmVzIiwicHJlc2NyaXB0aW9uIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDRix3QkFBWUMsS0FBWixFQUFrQjtBQUFB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OztFQXpGMEI4QiwrQzs7QUE2RjNCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQWxDLEtBQUs7QUFBQSxTQUFLO0FBQzlCbUMsY0FBVSxFQUFFbkMsS0FBSyxDQUFDb0MsSUFBTixDQUFXQyxXQURPO0FBRTlCQyxtQkFBZSxFQUFFdEMsS0FBSyxDQUFDc0MsZUFGTztBQUc5QkMsZ0JBQVksRUFBRXZDLEtBQUssQ0FBQ3VDO0FBSFUsR0FBTDtBQUFBLENBQTdCOztBQU1pQkMsMEhBQU8sQ0FBQ04sZUFBRCxDQUFQLENBQXlCckMsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DYXJ0RGV0YWlscy42ZjkxZDI0M2NmNTU1MjE2NWMxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vT3JkZXJTdW1tYXJ5Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmVlZFNpZ25JbiBmcm9tICcuL05lZWRTaWdpbic7XHJcbmltcG9ydCBBdHRhY2hlZFByZXNjcmlwdGlvbnMgZnJvbSAnLi4vQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHJvZmlsZXNfdXJsLCBvcmRlcnNfdXJsICB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaVZhcmlhYmxlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBPcmRlclN1bW1hcnkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5Q2hhcmdlOiA0MCxcclxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgIFxyXG4gICAgc2V0RGVsaXZlcnlDaGFyZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgeyBtb2RhbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBtb2RhbCA9ICFtb2RhbDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9kYWxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBkZWxpdmVyeUNoYXJnZSwgbW9kYWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHsgY2FydFByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyU3VtbWFyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPk9yZGVyIFN1bW1hcnk8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FydCBWYWx1ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtjYXJ0UHJvZHVjdHMudG90YWxQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGl2ZXJ5IENoYXJnZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtjYXJ0UHJvZHVjdHMuZGVsaXZlcnlQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TYXZlZCBBbW91bnQ8cD4oQ09VUE9OIEFQUExJRUQpPC9wPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXtjYXJ0UHJvZHVjdHMuc2F2ZWRBbW91bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlclRvdGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+T3JkZXIgVG90YWw8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT7igrl7Y2FydFByb2R1Y3RzLnRvdGFsUHJpY2UgPyAoY2FydFByb2R1Y3RzLnRvdGFsUHJpY2UrY2FydFByb2R1Y3RzLmRlbGl2ZXJ5Q2hhcmdlLWNhcnRQcm9kdWN0cy5zYXZlZEFtb3VudCkudG9GaXhlZCgyKSA6IDB9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9jZWVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5Qcm9jZWVkfSBvbkNsaWNrPXt0aGlzLnNldE1vZGFsfT48Yj5QUk9DRUVEIFRPIFBBWTwvYj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5QcmVzY3JpcHRpb259PjxiPkNhbmNlbCBPcmRlcjwvYj48L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdXBvbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtzdHlsZXMuYXBwbHl9PkFQUExZIENPVVBPTlM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFwcGx5RmllbGR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBcHBseSBjb3Vwb24gY29kZSBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkNvZGV9PjxiPkFQUExZIENPREU8L2I+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdXBvbk5vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPk9SREVSIEFCT1ZFIOKCuTUwMCBUTyBTQVZFIE9OIERFTElWRVJZIENIQVJHRVMuIEZSRUUgREVMSVZFUlkgV0lUSCBDQVJUIFZBTFVFIEFCT1ZFIOKCuTEwMDA8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8TmVlZFNpZ25JbiBtb2RhbD17bW9kYWx9IHRvZ2dsZT17dGhpcy5zZXRNb2RhbH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbGl2ZXJ5X19kZXRhaWxzX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxpdmVyeV9fZGV0YWlsc30+RGVsaXZlcnkgRGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxpdmVyeV9faW5uZXJfc2VjfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1kZGVsUGVyc29uSW5uZXJDb250YWluZXJ9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsUGVyc29uSW5ubmVyTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbF9wZXJzb25fbmFtZX0+e2NhcnRQcm9kdWN0cy5hZGRyZXNzTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbF9wZXJzb25fbnVtYmVyfT57Y2FydFByb2R1Y3RzLmFkZHJlc3NNb2JpbGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbF9wZXJzb25faW5uZXJSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2FydFByb2R1Y3RzLmFkZHJlc3NUeXBlPT0wP1wiSG9tZVwiOmNhcnRQcm9kdWN0cy5hZGRyZXNzVHlwZT09MD9cIk9mZmljZVwiOlwiT3RoZXJzXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZHN0cmVldH0+e2NhcnRQcm9kdWN0cy5hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW5nZUJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucmVwb3J0X29yZGVyMX0+Q0hBTkdFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QXR0YWNoZWRQcmVzY3JpcHRpb25zIGNhcnRQcm9kdWN0cz17dGhpcy5wcm9wcy5jYXJ0UHJvZHVjdHN9PjwvQXR0YWNoZWRQcmVzY3JpcHRpb25zPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG59XHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXNlckRldGFpbDogc3RhdGUuYXV0aC51c2VyRGV0YWlscyxcclxuICAgIGNob29zZU1lZGljaW5lczogc3RhdGUuY2hvb3NlTWVkaWNpbmVzLFxyXG4gICAgcHJlc2NyaXB0aW9uOiBzdGF0ZS5wcmVzY3JpcHRpb25cclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoT3JkZXJTdW1tYXJ5KTsiXSwic291cmNlUm9vdCI6IiJ9