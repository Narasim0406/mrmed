webpackHotUpdate_N_E("pages/CartDetails",{

/***/ "./components/MyCartFlow/OrderSummarys/medicineDetail/index.js":
/*!*********************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/medicineDetail/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _orderSummary_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orderSummary/index */ "./components/MyCartFlow/OrderSummarys/orderSummary/index.js");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MedicineDetail.module.scss */ "./components/MyCartFlow/OrderSummarys/medicineDetail/MedicineDetail.module.scss");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\OrderSummarys\\medicineDetail\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var MedicineDetail = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MedicineDetail, _Component);

  var _super = _createSuper(MedicineDetail);

  function MedicineDetail(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MedicineDetail);

    _this = _super.call(this, props);
    _this.state = {
      cartProducts: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MedicineDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var cartProducts = this.state.cartProducts;
      return __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-md-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, cartProducts && cartProducts.length !== 0 ? cartProducts.map(function (product, ind) {
        return __jsx("div", {
          key: ind,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "row",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 34
          }
        }, __jsx("div", {
          className: "col-md-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.background,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 41
          }
        }, __jsx("img", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.img,
          src: '/product-3.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 45
          }
        }))), __jsx("div", {
          className: "col-md-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.category,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 41
          }
        }, __jsx("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 45
          }
        }, "Diabetes")), __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 41
          }
        }, __jsx("b", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 45
          }
        }, "Bifilac Tablets"), __jsx("img", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.cartpiImg,
          src: '/prescription.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 45
          }
        })), __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.manufacturer,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 45
          }
        }, "Manufacturer: Natures Velvet Lifecare")), __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.quantity,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 41
          }
        }, __jsx("table", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }
        }, __jsx("tbody", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 49
          }
        }, __jsx("tr", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.quantityBtns,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 53
          }
        }, __jsx("td", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tdCol,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 57
          }
        }, __jsx("img", {
          src: '/+.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 86
          }
        })), __jsx("td", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tdCol,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 57
          }
        }, "0"), __jsx("td", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tdCol,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 57
          }
        }, __jsx("img", {
          src: '/-.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 86
          }
        }))))))), __jsx("div", {
          className: "col-md-4 ".concat(_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.priceRequest),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 37
          }
        }, __jsx("img", {
          src: '/remove-cart.png',
          alt: "remove-cart",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 41
          }
        }), __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.price,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 41
          }
        }, __jsx("b", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.discount,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 45
          }
        }, "\u20B9150"), __jsx("span", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.original,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 45
          }
        }, "MRP \u20B9200")))), __jsx("hr", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 33
          }
        }));
      }) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 26
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 31
        }
      }, "Your Cart is Empty"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 56
        }
      }, "Please Add products to the cart"))), __jsx("div", {
        className: "col-md-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, __jsx(_orderSummary_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        total: 500,
        savedAmount: 100,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }
      })));
    }
  }]);

  return MedicineDetail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userDetail: state.auth.userDetails,
    chooseMedicines: state.chooseMedicines,
    prescription: state.prescription
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(MedicineDetail));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvbWVkaWNpbmVEZXRhaWwvaW5kZXguanMiXSwibmFtZXMiOlsiTWVkaWNpbmVEZXRhaWwiLCJwcm9wcyIsInN0YXRlIiwiY2FydFByb2R1Y3RzIiwibGVuZ3RoIiwibWFwIiwicHJvZHVjdCIsImluZCIsInN0eWxlcyIsImJhY2tncm91bmQiLCJpbWciLCJjYXRlZ29yeSIsIm5hbWUiLCJjYXJ0cGlJbWciLCJtYW51ZmFjdHVyZXIiLCJxdWFudGl0eSIsInF1YW50aXR5QnRucyIsInRkQ29sIiwicHJpY2VSZXF1ZXN0IiwicHJpY2UiLCJkaXNjb3VudCIsIm9yaWdpbmFsIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRldGFpbCIsImF1dGgiLCJ1c2VyRGV0YWlscyIsImNob29zZU1lZGljaW5lcyIsInByZXNjcmlwdGlvbiIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7OztBQUNGLDBCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQVksRUFBRTtBQURMLEtBQWI7QUFGYztBQUtqQjs7Ozs2QkFHUTtBQUFBOztBQUFBLFVBQ0NBLFlBREQsR0FDa0IsS0FBS0QsS0FEdkIsQ0FDQ0MsWUFERDtBQUVULGFBQ1E7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUlBLFlBQVksSUFBSUEsWUFBWSxDQUFDQyxNQUFiLEtBQXNCLENBQXRDLEdBQTBDRCxZQUFZLENBQUNFLEdB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ZXRhaWxzLmRkNmYyZjhkOThhNzVmNmVjMzczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSAnLi4vb3JkZXJTdW1tYXJ5L2luZGV4J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWNpbmVEZXRhaWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIE1lZGljaW5lRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2FydFByb2R1Y3RzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IGNhcnRQcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e3JlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRpYWJldGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5CaWZpbGFjIFRhYmxldHM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFudWZhY3R1cmVyXCI+TWFudWZhY3R1cmVyOiBOYXR1cmVzIFZlbHZldCBMaWZlY2FyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8rLnBuZycpfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8tLnBuZycpfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwcmljZS1yZXF1ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByaWNlIE1hdGNoIFJlcXVlc3RlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA8aHIvPiAgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFByb2R1Y3RzICYmIGNhcnRQcm9kdWN0cy5sZW5ndGghPT0wID8gY2FydFByb2R1Y3RzLm1hcCgocHJvZHVjdCxpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9eycvcHJvZHVjdC0zLnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRpYWJldGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkJpZmlsYWMgVGFibGV0czwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRwaUltZ30gc3JjPXsnL3ByZXNjcmlwdGlvbi5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1hbnVmYWN0dXJlcn0+TWFudWZhY3R1cmVyOiBOYXR1cmVzIFZlbHZldCBMaWZlY2FyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZXMucXVhbnRpdHlCdG5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9PjxpbWcgc3JjPXsnLysucG5nJ30vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRkQ29sfT4wPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9PjxpbWcgc3JjPXsnLy0ucG5nJ30vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTQgJHtzdHlsZXMucHJpY2VSZXF1ZXN0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvcmVtb3ZlLWNhcnQucG5nJ30gYWx0PVwicmVtb3ZlLWNhcnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9e3N0eWxlcy5kaXNjb3VudH0+4oK5MTUwPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yaWdpbmFsfT5NUlAg4oK5MjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIDogPGRpdj48cD5Zb3VyIENhcnQgaXMgRW1wdHk8L3A+PHA+UGxlYXNlIEFkZCBwcm9kdWN0cyB0byB0aGUgY2FydDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgdG90YWw9ezUwMH0gc2F2ZWRBbW91bnQ9ezEwMH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzZXJEZXRhaWw6IHN0YXRlLmF1dGgudXNlckRldGFpbHMsXHJcbiAgICBjaG9vc2VNZWRpY2luZXM6IHN0YXRlLmNob29zZU1lZGljaW5lcyxcclxuICAgIHByZXNjcmlwdGlvbjogc3RhdGUucHJlc2NyaXB0aW9uXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lZGljaW5lRGV0YWlsKTsiXSwic291cmNlUm9vdCI6IiJ9