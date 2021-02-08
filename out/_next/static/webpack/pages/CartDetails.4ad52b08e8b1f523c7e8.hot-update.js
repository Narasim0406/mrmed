webpackHotUpdate_N_E("pages/CartDetails",{

/***/ "./components/MyCartFlow/OrderSummarys/medicineDetail/index.js":
/*!*********************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/medicineDetail/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _orderSummary_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../orderSummary/index */ "./components/MyCartFlow/OrderSummarys/orderSummary/index.js");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MedicineDetail.module.scss */ "./components/MyCartFlow/OrderSummarys/medicineDetail/MedicineDetail.module.scss");
/* harmony import */ var _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _apiVariables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../apiVariables */ "./apiVariables.js");









var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\OrderSummarys\\medicineDetail\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var MedicineDetail = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MedicineDetail, _Component);

  var _super = _createSuper(MedicineDetail);

  function MedicineDetail(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MedicineDetail);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      _this.getOrderDetail();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getOrderDetail", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cartProducts, userDetail;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cartProducts = _this.state.cartProducts;
              userDetail = _this.props.userDetail;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("".concat(_apiVariables__WEBPACK_IMPORTED_MODULE_14__["orders_url"], "/order/600e55d85b94cc6bcca44ef2")).then(function (res) {
                var obj = res.data.data;
                cartProducts = res.data.data;

                _this.setState({
                  cartProducts: cartProducts
                }); // this.props.dispatch(addressList)
                // this.props.dispatch(productList(res.data.data.list))

              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      cartProducts: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MedicineDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var cartProducts = this.state.cartProducts;
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
      }, cartProducts && cartProducts.length !== 0 ? cartProducts.map(function (product, ind) {
        return __jsx("div", {
          key: ind,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "row",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 34
          }
        }, __jsx("div", {
          className: "col-md-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.background,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 41
          }
        }, __jsx("img", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.img,
          src: '/product-3.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 45
          }
        }))), __jsx("div", {
          className: "col-md-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.category,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 41
          }
        }, __jsx("span", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 45
          }
        }, "Diabetes")), __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 41
          }
        }, __jsx("b", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 45
          }
        }, "Bifilac Tablets"), __jsx("img", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.cartpiImg,
          src: '/prescription.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 45
          }
        })), __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 41
          }
        }, __jsx("span", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.manufacturer,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 45
          }
        }, "Manufacturer: Natures Velvet Lifecare")), __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.quantity,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 41
          }
        }, __jsx("table", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 45
          }
        }, __jsx("tbody", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 49
          }
        }, __jsx("tr", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.quantityBtns,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 53
          }
        }, __jsx("td", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.tdCol,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 57
          }
        }, __jsx("img", {
          src: '/+.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 86
          }
        })), __jsx("td", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.tdCol,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 57
          }
        }, "0"), __jsx("td", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.tdCol,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 57
          }
        }, __jsx("img", {
          src: '/-.png',
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 86
          }
        }))))))), __jsx("div", {
          className: "col-md-4 ".concat(_MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.priceRequest),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 37
          }
        }, __jsx("img", {
          src: '/remove-cart.png',
          alt: "remove-cart",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 41
          }
        }), __jsx("div", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.price,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 41
          }
        }, __jsx("b", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.discount,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 45
          }
        }, "\u20B9150"), __jsx("span", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.original,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 45
          }
        }, "MRP \u20B9200")))), __jsx("hr", {
          __self: _this2,
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
      }, __jsx(_orderSummary_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
        total: 500,
        savedAmount: 100,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      })));
    }
  }]);

  return MedicineDetail;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userDetail: state.auth.userDetails,
    chooseMedicines: state.chooseMedicines,
    prescription: state.prescription
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(MedicineDetail));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvbWVkaWNpbmVEZXRhaWwvaW5kZXguanMiXSwibmFtZXMiOlsiTWVkaWNpbmVEZXRhaWwiLCJwcm9wcyIsImdldE9yZGVyRGV0YWlsIiwiY2FydFByb2R1Y3RzIiwic3RhdGUiLCJ1c2VyRGV0YWlsIiwiYXhpb3MiLCJnZXQiLCJvcmRlcnNfdXJsIiwidGhlbiIsInJlcyIsIm9iaiIsImRhdGEiLCJzZXRTdGF0ZSIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmQiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kIiwiaW1nIiwiY2F0ZWdvcnkiLCJuYW1lIiwiY2FydHBpSW1nIiwibWFudWZhY3R1cmVyIiwicXVhbnRpdHkiLCJxdWFudGl0eUJ0bnMiLCJ0ZENvbCIsInByaWNlUmVxdWVzdCIsInByaWNlIiwiZGlzY291bnQiLCJvcmlnaW5hbCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGgiLCJ1c2VyRGV0YWlscyIsImNob29zZU1lZGljaW5lcyIsInByZXNjcmlwdGlvbiIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYzs7Ozs7QUFDRiwwQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLDROQU9FLFlBQU07QUFDdEIsWUFBS0MsY0FBTDtBQUNILEtBVGlCOztBQUFBLHVaQVlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVIQywwQkFGRyxHQUVjLE1BQUtDLEtBRm5CLENBRUhELFlBRkc7QUFHSEUsd0JBSEcsR0FHWSxNQUFLSixLQUhqQixDQUdISSxVQUhHO0FBQUE7QUFBQSxxQkFJSEMsNkNBQUssQ0FBQ0MsR0FBTixXQUFhQyx5REFBYixz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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQUwsRUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FBOUIsQ0E3Q1QsQ0FqQ0osRUFpRkk7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNERBQUQ7QUFBYyxhQUFLLEVBQUUsR0FBckI7QUFBMEIsbUJBQVcsRUFBRSxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FqRkosQ0FEUjtBQXVGSDs7OztFQXZINEJDLCtDOztBQTBIN0IsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBN0IsS0FBSztBQUFBLFNBQUs7QUFDOUJDLGNBQVUsRUFBRUQsS0FBSyxDQUFDOEIsSUFBTixDQUFXQyxXQURPO0FBRTlCQyxtQkFBZSxFQUFFaEMsS0FBSyxDQUFDZ0MsZUFGTztBQUc5QkMsZ0JBQVksRUFBRWpDLEtBQUssQ0FBQ2lDO0FBSFUsR0FBTDtBQUFBLENBQTdCOztBQU1pQkMsMkhBQU8sQ0FBQ0wsZUFBRCxDQUFQLENBQXlCakMsY0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DYXJ0RGV0YWlscy40YWQ1MmIwOGU4YjFmNTIzYzdlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4uL29yZGVyU3VtbWFyeS9pbmRleCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGljaW5lRGV0YWlsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHByb2ZpbGVzX3VybCwgb3JkZXJzX3VybCAgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGlWYXJpYWJsZXMnO1xyXG5cclxuY2xhc3MgTWVkaWNpbmVEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXJ0UHJvZHVjdHM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRPcmRlckRldGFpbCgpO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICBnZXRPcmRlckRldGFpbCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGxldCB7IGNhcnRQcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgbGV0IHsgdXNlckRldGFpbCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAke29yZGVyc191cmx9L29yZGVyLzYwMGU1NWQ4NWI5NGNjNmJjY2E0NGVmMmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNhcnRQcm9kdWN0cz1yZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0UHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRyZXNzTGlzdClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2gocHJvZHVjdExpc3QocmVzLmRhdGEuZGF0YS5saXN0KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgY2FydFByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ1wiIHNyYz17cmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlhYmV0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkJpZmlsYWMgVGFibGV0czwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYW51ZmFjdHVyZXJcIj5NYW51ZmFjdHVyZXI6IE5hdHVyZXMgVmVsdmV0IExpZmVjYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLysucG5nJyl9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLy0ucG5nJyl9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHByaWNlLXJlcXVlc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2UgTWF0Y2ggUmVxdWVzdGVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDxoci8+ICAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0UHJvZHVjdHMgJiYgY2FydFByb2R1Y3RzLmxlbmd0aCE9PTAgPyBjYXJ0UHJvZHVjdHMubWFwKChwcm9kdWN0LGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17Jy9wcm9kdWN0LTMucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlhYmV0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+QmlmaWxhYyBUYWJsZXRzPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuY2FydHBpSW1nfSBzcmM9eycvcHJlc2NyaXB0aW9uLnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFudWZhY3R1cmVyfT5NYW51ZmFjdHVyZXI6IE5hdHVyZXMgVmVsdmV0IExpZmVjYXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eUJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50ZENvbH0+PGltZyBzcmM9eycvKy5wbmcnfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9PjA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50ZENvbH0+PGltZyBzcmM9eycvLS5wbmcnfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtbWQtNCAke3N0eWxlcy5wcmljZVJlcXVlc3R9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9yZW1vdmUtY2FydC5wbmcnfSBhbHQ9XCJyZW1vdmUtY2FydFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT17c3R5bGVzLmRpc2NvdW50fT7igrkxNTA8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMub3JpZ2luYWx9Pk1SUCDigrkyMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiA8ZGl2PjxwPllvdXIgQ2FydCBpcyBFbXB0eTwvcD48cD5QbGVhc2UgQWRkIHByb2R1Y3RzIHRvIHRoZSBjYXJ0PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSB0b3RhbD17NTAwfSBzYXZlZEFtb3VudD17MTAwfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXNlckRldGFpbDogc3RhdGUuYXV0aC51c2VyRGV0YWlscyxcclxuICAgIGNob29zZU1lZGljaW5lczogc3RhdGUuY2hvb3NlTWVkaWNpbmVzLFxyXG4gICAgcHJlc2NyaXB0aW9uOiBzdGF0ZS5wcmVzY3JpcHRpb25cclxuICB9KTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVkaWNpbmVEZXRhaWwpOyJdLCJzb3VyY2VSb290IjoiIn0=