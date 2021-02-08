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
      }, cartProducts && cartProducts.items && cartProducts.items.length > 0 ? cartProducts.items.map(function (product, ind) {
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
        }, product.medicineName), __jsx("img", {
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
        }, product.manufacturer)), __jsx("div", {
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
        }, product.quantity), __jsx("td", {
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
        }, "\u20B9", product.price), __jsx("span", {
          className: _MedicineDetail_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.original,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 45
          }
        }, "MRP \u20B9", product.itemPrice)))), __jsx("hr", {
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
        cartProducts: cartProducts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvbWVkaWNpbmVEZXRhaWwvaW5kZXguanMiXSwibmFtZXMiOlsiTWVkaWNpbmVEZXRhaWwiLCJwcm9wcyIsImdldE9yZGVyRGV0YWlsIiwiY2FydFByb2R1Y3RzIiwic3RhdGUiLCJ1c2VyRGV0YWlsIiwiYXhpb3MiLCJnZXQiLCJvcmRlcnNfdXJsIiwidGhlbiIsInJlcyIsIm9iaiIsImRhdGEiLCJzZXRTdGF0ZSIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwicHJvZHVjdCIsImluZCIsInN0eWxlcyIsImJhY2tncm91bmQiLCJpbWciLCJjYXRlZ29yeSIsIm5hbWUiLCJtZWRpY2luZU5hbWUiLCJjYXJ0cGlJbWciLCJtYW51ZmFjdHVyZXIiLCJxdWFudGl0eSIsInF1YW50aXR5QnRucyIsInRkQ29sIiwicHJpY2VSZXF1ZXN0IiwicHJpY2UiLCJkaXNjb3VudCIsIm9yaWdpbmFsIiwiaXRlbVByaWNlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiYXV0aCIsInVzZXJEZXRhaWxzIiwiY2hvb3NlTWVkaWNpbmVzIiwicHJlc2NyaXB0aW9uIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7OztBQUNGLDBCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47O0FBRGMsNE5BT0UsWUFBTTtBQUN0QixZQUFLQyxjQUFMO0FBQ0gsS0FUaUI7O0FBQUEsdVpBWUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUhDLDBCQUZHLEdBRWMsTUFBS0MsS0FGbkIsQ0FFSEQsWUFGRztBQUdIRSx3QkFIRyxHQUdZLE1BQUtKLEtBSGpCLENBR0hJLFVBSEc7QUFBQTtBQUFBLHFC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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXdDaEIsT0FBTyxDQUFDaUIsU0FBaEQsQ0FGSixDQUZKLENBN0JILENBREwsRUFzQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXRDSixDQURKO0FBMENILE9BM0NxRSxDQUF0RSxHQTJDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBTCxFQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUE5QixDQTdDVCxDQWpDSixFQWlGSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyw0REFBRDtBQUFjLGFBQUssRUFBRSxHQUFyQjtBQUEwQixtQkFBVyxFQUFFLEdBQXZDO0FBQTRDLG9CQUFZLEVBQUUvQixZQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FqRkosQ0FEUjtBQXVGSDs7OztFQXZINEJnQywrQzs7QUEwSDdCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQWhDLEtBQUs7QUFBQSxTQUFLO0FBQzlCQyxjQUFVLEVBQUVELEtBQUssQ0FBQ2lDLElBQU4sQ0FBV0MsV0FETztBQUU5QkMsbUJBQWUsRUFBRW5DLEtBQUssQ0FBQ21DLGVBRk87QUFHOUJDLGdCQUFZLEVBQUVwQyxLQUFLLENBQUNvQztBQUhVLEdBQUw7QUFBQSxDQUE3Qjs7QUFNaUJDLDJIQUFPLENBQUNMLGVBQUQsQ0FBUCxDQUF5QnBDLGNBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2FydERldGFpbHMuMTk5YjAwYmZjNmQxM2I4ZDc4ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tICcuLi9vcmRlclN1bW1hcnkvaW5kZXgnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZWRpY2luZURldGFpbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBwcm9maWxlc191cmwsIG9yZGVyc191cmwgIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpVmFyaWFibGVzJztcclxuXHJcbmNsYXNzIE1lZGljaW5lRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2FydFByb2R1Y3RzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0T3JkZXJEZXRhaWwoKTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgZ2V0T3JkZXJEZXRhaWwgPSBhc3luYygpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgeyBjYXJ0UHJvZHVjdHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgIGxldCB7IHVzZXJEZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldChgJHtvcmRlcnNfdXJsfS9vcmRlci82MDBlNTVkODViOTRjYzZiY2NhNDRlZjJgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjYXJ0UHJvZHVjdHM9cmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkcmVzc0xpc3QpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHByb2R1Y3RMaXN0KHJlcy5kYXRhLmRhdGEubGlzdCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgIH1cclxuIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IGNhcnRQcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e3JlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRpYWJldGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5CaWZpbGFjIFRhYmxldHM8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFudWZhY3R1cmVyXCI+TWFudWZhY3R1cmVyOiBOYXR1cmVzIFZlbHZldCBMaWZlY2FyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8rLnBuZycpfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8tLnBuZycpfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwcmljZS1yZXF1ZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByaWNlIE1hdGNoIFJlcXVlc3RlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA8aHIvPiAgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFByb2R1Y3RzICYmIGNhcnRQcm9kdWN0cy5pdGVtcyAmJiBjYXJ0UHJvZHVjdHMuaXRlbXMubGVuZ3RoID4gMCA/IGNhcnRQcm9kdWN0cy5pdGVtcy5tYXAoKHByb2R1Y3QsaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXsnL3Byb2R1Y3QtMy5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaWFiZXRlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57cHJvZHVjdC5tZWRpY2luZU5hbWV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuY2FydHBpSW1nfSBzcmM9eycvcHJlc2NyaXB0aW9uLnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFudWZhY3R1cmVyfT57cHJvZHVjdC5tYW51ZmFjdHVyZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eUJ0bnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy50ZENvbH0+PGltZyBzcmM9eycvKy5wbmcnfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMudGRDb2x9Pntwcm9kdWN0LnF1YW50aXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnRkQ29sfT48aW1nIHNyYz17Jy8tLnBuZyd9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC1tZC00ICR7c3R5bGVzLnByaWNlUmVxdWVzdH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL3JlbW92ZS1jYXJ0LnBuZyd9IGFsdD1cInJlbW92ZS1jYXJ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtzdHlsZXMuZGlzY291bnR9PuKCuXtwcm9kdWN0LnByaWNlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vcmlnaW5hbH0+TVJQIOKCuXtwcm9kdWN0Lml0ZW1QcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiA8ZGl2PjxwPllvdXIgQ2FydCBpcyBFbXB0eTwvcD48cD5QbGVhc2UgQWRkIHByb2R1Y3RzIHRvIHRoZSBjYXJ0PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSB0b3RhbD17NTAwfSBzYXZlZEFtb3VudD17MTAwfSBjYXJ0UHJvZHVjdHM9e2NhcnRQcm9kdWN0c30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzZXJEZXRhaWw6IHN0YXRlLmF1dGgudXNlckRldGFpbHMsXHJcbiAgICBjaG9vc2VNZWRpY2luZXM6IHN0YXRlLmNob29zZU1lZGljaW5lcyxcclxuICAgIHByZXNjcmlwdGlvbjogc3RhdGUucHJlc2NyaXB0aW9uXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lZGljaW5lRGV0YWlsKTsiXSwic291cmNlUm9vdCI6IiJ9