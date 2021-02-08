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
    className: "".concat(_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardTop),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, props.address.name), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, props.address.type)), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.adPn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "+91 56182 16548"), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "12 Random street in random city Chennai, Tamil nadu - 600000."), __jsx("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0FkZHJlc3MvQWRkcmVzc0NhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQWRkcmVzc0NhcmQiLCJwcm9wcyIsImJ0blN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3hTaXppbmciLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjYXJkIiwiY2FyZFRvcCIsImNhcmRUaXRsZSIsImFkZHJlc3MiLCJuYW1lIiwiYWRUeXBlIiwidHlwZSIsImFkUG4iLCJjYXJkVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQ3RDLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxTQUFLLEVBQUUsT0FETTtBQUViQyxVQUFNLEVBQUUsTUFGSztBQUdiQyxVQUFNLEVBQUUsbUJBSEs7QUFJYkMsYUFBUyxFQUFFLFlBSkU7QUFLYkMsZ0JBQVksRUFBRSxLQUxEO0FBTWJDLFdBQU8sRUFBRSxNQU5JO0FBT2JDLG1CQUFlLEVBQUUsTUFQSjtBQVFiQyxjQUFVLEVBQUUsS0FSQztBQVNiQyxZQUFRLEVBQUUsTUFURztBQVViQyxjQUFVLEVBQUUsTUFWQztBQVdiQyxpQkFBYSxFQUFFLFdBWEY7QUFZYkMsU0FBSyxFQUFFO0FBWk0sR0FBakI7QUFhQSxTQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQmYsS0FBM0IsQ0FETixFQUVJO0FBQUssYUFBUyxpQkFBVWdCLCtEQUFNLENBQUNDLElBQWpCLENBQWQ7QUFBdUMsU0FBSyxFQUFFO0FBQUMsZUFBUztBQUFWLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsWUFBS0QsK0RBQU0sQ0FBQ0UsT0FBWixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBRUYsK0RBQU0sQ0FBQ0csU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ25CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0MsSUFBaEQsQ0FESixFQUVJO0FBQUcsYUFBUyxFQUFFTCwrREFBTSxDQUFDTSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCdEIsS0FBSyxDQUFDb0IsT0FBTixDQUFjRyxJQUE1QyxDQUZKLENBREosRUFLSTtBQUFHLGFBQVMsRUFBRVAsK0RBQU0sQ0FBQ1EsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSixFQU1JO0FBQUcsYUFBUyxFQUFFUiwrREFBTSxDQUFDUyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFFQU5KLEVBT0k7QUFDQSxTQUFLLEVBQUV4QixRQURQO0FBRUEsYUFBUyxFQUFFZSwrREFBTSxDQUFDLFFBQUQsQ0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixDQURKLENBRkosQ0FESjtBQWtCSDtLQWhDdUJqQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NhcnREZXRhaWxzLmQyNmJjOTBjODhmYWJjY2E5YjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRkcmVzc0NhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkcmVzc0NhcmQocHJvcHMpe1xyXG4gICAgY29uc3QgYnRuU3R5bGUgPSB7IFxyXG4gICAgICAgIHdpZHRoOiAnMjA2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNjA1NEU1JyxcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNXB4JyxcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgICBjb2xvcjogJyM2MDU0RTUnfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTYgbWItM1wiPlxyXG4gICAgICAgICAgICAge2NvbnNvbGUubG9nKFwic2FkZmFmZ3NnZ2hcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQgJHtzdHlsZXMuY2FyZH1gfSBzdHlsZT17e1wid2lkdGhcIjogXCIxOHJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZFRvcH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+e3Byb3BzLmFkZHJlc3MubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hZFR5cGV9Pntwcm9wcy5hZGRyZXNzLnR5cGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFkUG59Pis5MSA1NjE4MiAxNjU0ODwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGV4dH0+MTIgUmFuZG9tIHN0cmVldCBpbiByYW5kb20gY2l0eSBDaGVubmFpLCBUYW1pbCBuYWR1IC0gNjAwMDAwLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidG5TdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snc3BfYnRuJ119PlNlbGVjdCBBZGRyZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==