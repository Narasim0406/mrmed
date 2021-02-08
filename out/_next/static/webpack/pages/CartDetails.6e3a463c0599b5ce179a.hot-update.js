webpackHotUpdate_N_E("pages/CartDetails",{

/***/ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js":
/*!*****************************************************************************!*\
  !*** ./components/MyCartFlow/OrderSummarys/Attached Prescriptions/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttachedPrescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachedPrescription.module.scss */ "./components/MyCartFlow/OrderSummarys/Attached Prescriptions/AttachedPrescription.module.scss");
/* harmony import */ var _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Surya\\Documents\\mr_med_frontend\\components\\MyCartFlow\\OrderSummarys\\Attached Prescriptions\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import delete1 from  '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import tick from '/tickmark.png';




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_1__["A11y"]]);
function AttachedPrescription(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: '1',
    img: ''
  }, {
    id: '2',
    img: ''
  }]),
      prescriptionsList = _useState[0],
      setPrescriptionsList = _useState[1];

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.attachedPrescription, " font-weight-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Attached Prescription")), __jsx("div", {
    className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionRightBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    onSwiper: function onSwiper(swiper) {
      return console.log(swiper);
    },
    onSlideChange: function onSlideChange() {
      return console.log('slide change');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, props.cartProducts && props.cartProducts.length > 0 ? props.cartProducts.prescriptionUrls.map(function (prescriptions, ind) {
    return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionAttachContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.attachedPrescription1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, console.log("asdfgsdhgghfg", props, prescriptions), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionTickmark,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/tickmark.png',
      alt: "tickmark",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: prescriptions,
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconsList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/delete.png',
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/ev.svg',
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/download.png',
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 41
      }
    })))));
  }) : "")));
}

_s(AttachedPrescription, "d6LxGRnX87IUtfujFo0179c+y0M=");

_c = AttachedPrescription;

var _c;

$RefreshReg$(_c, "AttachedPrescription");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiUGFnaW5hdGlvbiIsIlNjcm9sbGJhciIsIkExMXkiLCJBdHRhY2hlZFByZXNjcmlwdGlvbiIsInByb3BzIiwidXNlU3RhdGUiLCJpZCIsImltZyIsInByZXNjcmlwdGlvbnNMaXN0Iiwic2V0UHJlc2NyaXB0aW9uc0xpc3QiLCJzdHlsZXMiLCJhdHRhY2hlZFByZXNjcmlwdGlvbiIsInByZXNjcmlwdGlvblJpZ2h0Qm94IiwiY2xpY2thYmxlIiwic3dpcGVyIiwiY29uc29sZSIsImxvZyIsImNhcnRQcm9kdWN0cyIsImxlbmd0aCIsInByZXNjcmlwdGlvblVybHMiLCJtYXAiLCJwcmVzY3JpcHRpb25zIiwiaW5kIiwicHJlc2NyaXB0aW9uQXR0YWNoQ29udGFpbmVyIiwiYXR0YWNoZWRQcmVzY3JpcHRpb24xIiwicHJlc2NyaXB0aW9uVGlja21hcmsiLCJwcmVzY3JpcHRpb25JbWFnZSIsImljb25zTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBQSw4Q0FBVSxDQUFDQyxHQUFYLENBQWUsQ0FBRUMsaURBQUYsRUFBY0MsZ0RBQWQsRUFBeUJDLDJDQUF6QixDQUFmO0FBRWUsU0FBU0Msb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsQ0FDdEQ7QUFDSUMsTUFBRSxFQUFDLEdBRFA7QUFFSUMsT0FBRyxFQUFDO0FBRlIsR0FEc0QsRUFLdEQ7QUFDSUQsTUFBRSxFQUFDLEdBRFA7QUFFSUMsT0FBRyxFQUFDO0FBRlIsR0FMc0QsQ0FBRCxDQURWO0FBQUEsTUFDeENDLGlCQUR3QztBQUFBLE1BQ3RC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MTc5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgZGVsZXRlMSBmcm9tICAnL2RlbGV0ZTEucG5nJztcclxuLy8gaW1wb3J0IHZpZXcgZnJvbSAnL3ZpZXcucG5nJztcclxuLy8gaW1wb3J0IGRvd25sb2FkIGZyb20gJy9kb3dubG9hZC5wbmcnO1xyXG4vLyBpbXBvcnQgdGljayBmcm9tICcvdGlja21hcmsucG5nJztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5IH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXR0YWNoZWRQcmVzY3JpcHRpb24ubW9kdWxlLnNjc3MnO1xyXG5cclxuU3dpcGVyQ29yZS51c2UoWyBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXldKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF0dGFjaGVkUHJlc2NyaXB0aW9uKHByb3BzKXtcclxuICAgIGNvbnN0IFtwcmVzY3JpcHRpb25zTGlzdCxzZXRQcmVzY3JpcHRpb25zTGlzdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonMScsXHJcbiAgICAgICAgICAgIGltZzonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonMicsXHJcbiAgICAgICAgICAgIGltZzonJ1xyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmF0dGFjaGVkUHJlc2NyaXB0aW9ufSBmb250LXdlaWdodC1ib2xkYH0+XHJcbiAgICAgICAgICAgICAgICA8Yj5BdHRhY2hlZCBQcmVzY3JpcHRpb248L2I+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXNjcmlwdGlvblJpZ2h0Qm94fT5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IGNvbnNvbGUubG9nKHN3aXBlcil9XHJcbiAgICAgICAgICAgICAgICBvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhcnRQcm9kdWN0cyAmJiBwcm9wcy5jYXJ0UHJvZHVjdHMubGVuZ3RoPjAgPyBwcm9wcy5jYXJ0UHJvZHVjdHMucHJlc2NyaXB0aW9uVXJscy5tYXAoKHByZXNjcmlwdGlvbnMsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25BdHRhY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXR0YWNoZWRQcmVzY3JpcHRpb24xfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImFzZGZnc2RoZ2doZmdcIiwgcHJvcHMsIHByZXNjcmlwdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXNjcmlwdGlvblRpY2ttYXJrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL3RpY2ttYXJrLnBuZyd9IGFsdD1cInRpY2ttYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ByZXNjcmlwdGlvbnN9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kZWxldGUucG5nJ30gYWx0PVwicHJlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2V2LnN2Zyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kb3dubG9hZC5wbmcnfSBhbHQ9XCJwcmVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOlwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Td2lwZXI+ICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9