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
      var orderDetail = this.props.orderDetail;
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
      }, "\u20B9", this.props.total)), __jsx("div", {
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
      }, "\u20B9", deliveryCharge)), __jsx("div", {
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
      }, "\u20B9", this.props.savedAmount)), __jsx("hr", {
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
      }, "\u20B9", this.props.total != 0 ? (this.props.total + deliveryCharge - this.props.savedAmount).toFixed(2) : 0)), __jsx("hr", {
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
      }, "John Doe"), __jsx("p", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mddel_person_number,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      }, "+91 56182 16548")), __jsx("div", {
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
      }, "Home"))), __jsx("p", {
        className: _OrderSummary_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mdstreet,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }, "12 Random street in random city Chennai,", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 92
        }
      }), " Tamil nadu - 600000"), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvb3JkZXJTdW1tYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIk9yZGVyU3VtbWFyeSIsInByb3BzIiwibW9kYWwiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVsaXZlcnlDaGFyZ2UiLCJvcmRlckRldGFpbCIsInN0eWxlcyIsInN1bW1hcnlCb3giLCJvcmRlclN1bW1hcnkiLCJkZXRhaWxzIiwicmlnaHQiLCJ0b3RhbCIsInNhdmVkQW1vdW50Iiwib3JkZXJUb3RhbCIsInRvRml4ZWQiLCJwcm9jZWVkIiwiYnRuUHJvY2VlZCIsInNldE1vZGFsIiwiYnRuUHJlc2NyaXB0aW9uIiwibWRkZWxpdmVyeV9fZGV0YWlsc19fY29udGFpbmVyIiwibWRkZWxpdmVyeV9fZGV0YWlscyIsIm1kZGVsaXZlcnlfX2lubmVyX3NlYyIsIm1kZGVsUGVyc29uSW5uZXJDb250YWluZXIiLCJtZGRlbFBlcnNvbklubm5lckxlZnQiLCJtZGRlbF9wZXJzb25fbmFtZSIsIm1kZGVsX3BlcnNvbl9udW1iZXIiLCJtZGRlbF9wZXJzb25faW5uZXJSaWdodCIsIm1kc3RyZWV0IiwiY2hhbmdlQnRuIiwicmVwb3J0X29yZGVyMSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJEZXRhaWwiLCJhdXRoIiwidXNlckRldGFpbHMiLCJjaG9vc2VNZWRpY2luZXMiLCJwcmVzY3JpcHRpb24iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7OztBQUNGLHdCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47O0FBRGMsNE5BVUUsWUFBTSxDQUV6QixDQVppQjs7QUFBQSxtTkFlUCxZQUFNO0FBQUEs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LENBQXlCaEMsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DYXJ0RGV0YWlscy42NjBjZmZkYTczYjc1ZTM1Y2QxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vT3JkZXJTdW1tYXJ5Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmVlZFNpZ25JbiBmcm9tICcuL05lZWRTaWdpbic7XHJcbmltcG9ydCBBdHRhY2hlZFByZXNjcmlwdGlvbnMgZnJvbSAnLi4vQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHJvZmlsZXNfdXJsLCBvcmRlcnNfdXJsICB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaVZhcmlhYmxlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBPcmRlclN1bW1hcnkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5Q2hhcmdlOiA0MCxcclxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgIFxyXG4gICAgc2V0RGVsaXZlcnlDaGFyZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgeyBtb2RhbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBtb2RhbCA9ICFtb2RhbDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9kYWxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBkZWxpdmVyeUNoYXJnZSwgbW9kYWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHsgb3JkZXJEZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJTdW1tYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+T3JkZXIgU3VtbWFyeTwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYXJ0IFZhbHVlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+4oK5e3RoaXMucHJvcHMudG90YWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxpdmVyeSBDaGFyZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT7igrl7ZGVsaXZlcnlDaGFyZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2F2ZWQgQW1vdW50PHA+KENPVVBPTiBBUFBMSUVEKTwvcD48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT7igrl7dGhpcy5wcm9wcy5zYXZlZEFtb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyVG90YWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5PcmRlciBUb3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PuKCuXt0aGlzLnByb3BzLnRvdGFsIT0wID8gKHRoaXMucHJvcHMudG90YWwrZGVsaXZlcnlDaGFyZ2UtdGhpcy5wcm9wcy5zYXZlZEFtb3VudCkudG9GaXhlZCgyKSA6IDB9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9jZWVkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5Qcm9jZWVkfSBvbkNsaWNrPXt0aGlzLnNldE1vZGFsfT48Yj5QUk9DRUVEIFRPIFBBWTwvYj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG5QcmVzY3JpcHRpb259PjxiPkNhbmNlbCBPcmRlcjwvYj48L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdXBvbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtzdHlsZXMuYXBwbHl9PkFQUExZIENPVVBPTlM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFwcGx5RmllbGR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBcHBseSBjb3Vwb24gY29kZSBoZXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkNvZGV9PjxiPkFQUExZIENPREU8L2I+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdXBvbk5vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPk9SREVSIEFCT1ZFIOKCuTUwMCBUTyBTQVZFIE9OIERFTElWRVJZIENIQVJHRVMuIEZSRUUgREVMSVZFUlkgV0lUSCBDQVJUIFZBTFVFIEFCT1ZFIOKCuTEwMDA8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8TmVlZFNpZ25JbiBtb2RhbD17bW9kYWx9IHRvZ2dsZT17dGhpcy5zZXRNb2RhbH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbGl2ZXJ5X19kZXRhaWxzX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxpdmVyeV9fZGV0YWlsc30+RGVsaXZlcnkgRGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWRkZWxpdmVyeV9faW5uZXJfc2VjfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1kZGVsUGVyc29uSW5uZXJDb250YWluZXJ9IGQtZmxleGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsUGVyc29uSW5ubmVyTGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbF9wZXJzb25fbmFtZX0+Sm9obiBEb2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZGRlbF9wZXJzb25fbnVtYmVyfT4rOTEgNTYxODIgMTY1NDg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1kZGVsX3BlcnNvbl9pbm5lclJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1kc3RyZWV0fT4xMiBSYW5kb20gc3RyZWV0IGluIHJhbmRvbSBjaXR5IENoZW5uYWksPGJyIC8+IFRhbWlsIG5hZHUgLSA2MDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFuZ2VCdG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlcG9ydF9vcmRlcjF9PkNIQU5HRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEF0dGFjaGVkUHJlc2NyaXB0aW9ucy8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbn1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICB1c2VyRGV0YWlsOiBzdGF0ZS5hdXRoLnVzZXJEZXRhaWxzLFxyXG4gICAgY2hvb3NlTWVkaWNpbmVzOiBzdGF0ZS5jaG9vc2VNZWRpY2luZXMsXHJcbiAgICBwcmVzY3JpcHRpb246IHN0YXRlLnByZXNjcmlwdGlvblxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShPcmRlclN1bW1hcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=