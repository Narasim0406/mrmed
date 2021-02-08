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
  }, props.address.addressName), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L0FkZHJlc3MvQWRkcmVzc0NhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQWRkcmVzc0NhcmQiLCJwcm9wcyIsImJ0blN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3hTaXppbmciLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjYXJkIiwiY2FyZFRvcCIsImNhcmRUaXRsZSIsImFkZHJlc3MiLCJhZGRyZXNzTmFtZSIsImFkVHlwZSIsInR5cGUiLCJhZFBuIiwiY2FyZFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUEyQjtBQUN0QyxNQUFNQyxRQUFRLEdBQUc7QUFDYkMsU0FBSyxFQUFFLE9BRE07QUFFYkMsVUFBTSxFQUFFLE1BRks7QUFHYkMsVUFBTSxFQUFFLG1CQUhLO0FBSWJDLGFBQVMsRUFBRSxZQUpFO0FBS2JDLGdCQUFZLEVBQUUsS0FMRDtBQU1iQyxXQUFPLEVBQUUsTUFOSTtBQU9iQyxtQkFBZSxFQUFFLE1BUEo7QUFRYkMsY0FBVSxFQUFFLEtBUkM7QUFTYkMsWUFBUSxFQUFFLE1BVEc7QUFVYkMsY0FBVSxFQUFFLE1BVkM7QUFXYkMsaUJBQWEsRUFBRSxXQVhGO0FBWWJDLFNBQUssRUFBRTtBQVpNLEdBQWpCO0FBYUEsU0FDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJmLEtBQTNCLENBRE4sRUFFSTtBQUFLLGFBQVMsaUJBQVVnQiwrREFBTSxDQUFDQyxJQUFqQixDQUFkO0FBQXVDLFNBQUssRUFBRTtBQUFDLGVBQVM7QUFBVixLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLFlBQUtELCtEQUFNLENBQUNFLE9BQVosQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVGLCtEQUFNLENBQUNHLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NuQixLQUFLLENBQUNvQixPQUFOLENBQWNDLFdBQWhELENBREosRUFFSTtBQUFHLGFBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QnRCLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY0csSUFBNUMsQ0FGSixDQURKLEVBS0k7QUFBRyxhQUFTLEVBQUVQLCtEQUFNLENBQUNRLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosRUFNSTtBQUFHLGFBQVMsRUFBRVIsK0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFOSixFQU9JO0FBQ0EsU0FBSyxFQUFFeEIsUUFEUDtBQUVBLGFBQVMsRUFBRWUsK0RBQU0sQ0FBQyxRQUFELENBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEosQ0FESixDQUZKLENBREo7QUFrQkg7S0FoQ3VCakIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DYXJ0RGV0YWlscy5lZGRmYzE5NzRlZjFhOTAxZGEwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FkZHJlc3NDYXJkLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZHJlc3NDYXJkKHByb3BzKXtcclxuICAgIGNvbnN0IGJ0blN0eWxlID0geyBcclxuICAgICAgICB3aWR0aDogJzIwNnB4JyxcclxuICAgICAgICBoZWlnaHQ6ICczMnB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzYwNTRFNScsXHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTVweCcsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICAgY29sb3I6ICcjNjA1NEU1J307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC02IG1iLTNcIj5cclxuICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcInNhZGZhZmdzZ2doXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7c3R5bGVzLmNhcmR9YH0gc3R5bGU9e3tcIndpZHRoXCI6IFwiMThyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmRUb3B9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9Pntwcm9wcy5hZGRyZXNzLmFkZHJlc3NOYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFkVHlwZX0+e3Byb3BzLmFkZHJlc3MudHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWRQbn0+KzkxIDU2MTgyIDE2NTQ4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUZXh0fT4xMiBSYW5kb20gc3RyZWV0IGluIHJhbmRvbSBjaXR5IENoZW5uYWksIFRhbWlsIG5hZHUgLSA2MDAwMDAuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0blN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydzcF9idG4nXX0+U2VsZWN0IEFkZHJlc3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9