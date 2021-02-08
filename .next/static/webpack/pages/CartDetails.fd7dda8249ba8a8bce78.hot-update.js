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
/* harmony import */ var _MyCartFlow_Address_AddressDetails_Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../MyCartFlow/Address/AddressDetails/Address */ "./components/MyCartFlow/Address/AddressDetails/Address.js");
/* harmony import */ var _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddressCard.module.scss */ "./components/MyCartFlow/Address/AddressCard/AddressCard.module.scss");
/* harmony import */ var _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\Address\\AddressCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function AddressCard(props) {
  var btnStyle = {
    width: '176px',
    height: '32px',
    border: '1px solid #6054E5',
    boxSizing: 'border-box',
    borderRadius: '2px',
    outline: 'none',
    backgroundColor: props.selectedAddress === props.index ? "#6054E5" : "#fff",
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    color: props.selectedAddress === props.index ? "#fff" : "#6054E5"
  };
  return __jsx("div", {
    className: "container col-md-6 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, console.log("sadfafgsggh", props), __jsx("div", {
    className: "card ".concat(_AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card),
    style: {
      "width": "18rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cardTop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, props.address.addressName), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.adType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, props.address.type == 0 ? "Home" : props.address.type == 1 ? "Office" : "Others")), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.adPn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, props.addressMobile), __jsx("p", {
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cardText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, props.address, "."), __jsx("button", {
    style: btnStyle,
    onClick: props.selectAddress,
    className: _AddressCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['sp_btn'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Select & Place Order"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0FkZHJlc3MvQWRkcmVzc0NhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQWRkcmVzc0NhcmQiLCJwcm9wcyIsImJ0blN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3hTaXppbmciLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0ZWRBZGRyZXNzIiwiaW5kZXgiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNhcmQiLCJjYXJkVG9wIiwiY2FyZFRpdGxlIiwiYWRkcmVzcyIsImFkZHJlc3NOYW1lIiwiYWRUeXBlIiwidHlwZSIsImFkUG4iLCJhZGRyZXNzTW9iaWxlIiwiY2FyZFRleHQiLCJzZWxlY3RBZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBMkI7QUFDdEMsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFNBQUssRUFBRSxPQURNO0FBRWJDLFVBQU0sRUFBRSxNQUZLO0FBR2JDLFVBQU0sRUFBRSxtQkFISztBQUliQyxhQUFTLEVBQUUsWUFKRTtBQUtiQyxnQkFBWSxFQUFFLEtBTEQ7QUFNYkMsV0FBTyxFQUFFLE1BTkk7QUFPYkMsbUJBQWUsRUFBRVIsS0FBSyxDQUFDUyxlQUFOLEtBQXdCVCxLQUFLLENBQUNVLEtBQTlCLEdBQXNDLFNBQXRDLEdBQWdELE1BUHBEO0FBUWJDLGNBQVUsRUFBRSxLQVJDO0FBU2JDLFlBQVEsRUFBRSxNQVRHO0FBVWJDLGNBQVUsRUFBRSxNQVZDO0FBV2JDLGlCQUFhLEVBQUUsV0FYRjtBQVliQyxTQUFLLEVBQUVmLEtBQUssQ0FBQ1MsZUFBTixLQUF3QlQsS0FBSyxDQUFDVSxLQUE5QixHQUFzQyxNQUF0QyxHQUE2QztBQVp2QyxHQUFqQjtBQWFBLFNBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCakIsS0FBM0IsQ0FETCxFQUVJO0FBQUssYUFBUyxpQkFBVWtCLCtEQUFNLENBQUNDLElBQWpCLENBQWQ7QUFBdUMsU0FBSyxFQUFFO0FBQUMsZUFBUztBQUFWLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUQsK0RBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRiwrREFBTSxDQUFDRyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDckIsS0FBSyxDQUFDc0IsT0FBTixDQUFjQyxXQUFoRCxDQURKLEVBRUk7QUFBRyxhQUFTLEVBQUVMLCtEQUFNLENBQUNNLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEJ4QixLQUFLLENBQUNzQixPQUFOLENBQWNHLElBQWQsSUFBb0IsQ0FBcEIsR0FBc0IsTUFBdEIsR0FBNkJ6QixLQUFLLENBQUNzQixPQUFOLENBQWNHLElBQWQsSUFBb0IsQ0FBcEIsR0FBc0IsUUFBdEIsR0FBK0IsUUFBMUYsQ0FGSixDQURKLEVBS0k7QUFBRyxhQUFTLEVBQUVQLCtEQUFNLENBQUNRLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEIxQixLQUFLLENBQUMyQixhQUFsQyxDQUxKLEVBTUk7QUFBRyxhQUFTLEVBQUVULCtEQUFNLENBQUNVLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0M1QixLQUFLLENBQUNzQixPQUF0QyxNQU5KLEVBT0k7QUFDQSxTQUFLLEVBQUVyQixRQURQO0FBRUEsV0FBTyxFQUFFRCxLQUFLLENBQUM2QixhQUZmO0FBR0EsYUFBUyxFQUFFWCwrREFBTSxDQUFDLFFBQUQsQ0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQSixDQURKLENBRkosQ0FESjtBQW1CSDtLQWpDdUJuQixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NhcnREZXRhaWxzLmZkN2RkYTgyNDliYThhOGJjZTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWRkcmVzcyBmcm9tICcuLi8uLi8uLi9NeUNhcnRGbG93L0FkZHJlc3MvQWRkcmVzc0RldGFpbHMvQWRkcmVzcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAgJy4vQWRkcmVzc0NhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkcmVzc0NhcmQocHJvcHMpe1xyXG4gICAgY29uc3QgYnRuU3R5bGUgPSB7IFxyXG4gICAgICAgIHdpZHRoOiAnMTc2cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNjA1NEU1JyxcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLnNlbGVjdGVkQWRkcmVzcz09PXByb3BzLmluZGV4ID8gXCIjNjA1NEU1XCI6XCIjZmZmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICAgY29sb3I6IHByb3BzLnNlbGVjdGVkQWRkcmVzcz09PXByb3BzLmluZGV4ID8gXCIjZmZmXCI6XCIjNjA1NEU1XCJ9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNiBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcInNhZGZhZmdzZ2doXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7c3R5bGVzLmNhcmR9YH0gc3R5bGU9e3tcIndpZHRoXCI6IFwiMThyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUb3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT57cHJvcHMuYWRkcmVzcy5hZGRyZXNzTmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hZFR5cGV9Pntwcm9wcy5hZGRyZXNzLnR5cGU9PTA/XCJIb21lXCI6cHJvcHMuYWRkcmVzcy50eXBlPT0xP1wiT2ZmaWNlXCI6XCJPdGhlcnNcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWRQbn0+e3Byb3BzLmFkZHJlc3NNb2JpbGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUZXh0fT57cHJvcHMuYWRkcmVzc30uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0blN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNlbGVjdEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3NwX2J0biddfT5TZWxlY3QgJiBQbGFjZSBPcmRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=