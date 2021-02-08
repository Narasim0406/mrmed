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
        columnNumber: 25
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
    }, __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionTickmark,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/tickmark.png',
      alt: "tickmark",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescriptionImage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: prescriptions,
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: _AttachedPrescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconsList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: '/delete.png',
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/ev.svg',
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: '/download.png',
      alt: "prescription",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiUGFnaW5hdGlvbiIsIlNjcm9sbGJhciIsIkExMXkiLCJBdHRhY2hlZFByZXNjcmlwdGlvbiIsInByb3BzIiwidXNlU3RhdGUiLCJpZCIsImltZyIsInByZXNjcmlwdGlvbnNMaXN0Iiwic2V0UHJlc2NyaXB0aW9uc0xpc3QiLCJzdHlsZXMiLCJhdHRhY2hlZFByZXNjcmlwdGlvbiIsInByZXNjcmlwdGlvblJpZ2h0Qm94IiwiY2xpY2thYmxlIiwic3dpcGVyIiwiY29uc29sZSIsImxvZyIsImNhcnRQcm9kdWN0cyIsImxlbmd0aCIsInByZXNjcmlwdGlvblVybHMiLCJtYXAiLCJwcmVzY3JpcHRpb25zIiwiaW5kIiwicHJlc2NyaXB0aW9uQXR0YWNoQ29udGFpbmVyIiwiYXR0YWNoZWRQcmVzY3JpcHRpb24xIiwicHJlc2NyaXB0aW9uVGlja21hcmsiLCJwcmVzY3JpcHRpb25JbWFnZSIsImljb25zTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBQSw4Q0FBVSxDQUFDQyxHQUFYLENBQWUsQ0FBRUMsaURBQUYsRUFBY0MsZ0RBQWQsRUFBeUJDLDJDQUF6QixDQUFmO0FBRWUsU0FBU0Msb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsQ0FDdEQ7QUFDSUMsTUFBRSxFQUFDLEdBRFA7QUFFSUMsT0FBRyxFQUFDO0FBRlIsR0FEc0QsRUFLdEQ7QUFDSUQsTUFBRSxFQUFDLEdBRFA7QUFFSUMsT0FBRyxFQUFDO0FBRlIsR0FMc0QsQ0FBRCxDQURWO0FBQUEsTUFDeENDLGlCQUR3QztBQUFBLE1BQ3RCQyxvQkFEc0I7O0FBVy9DLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxZQUFLQyx3RUFBTSxDQUFDQyxvQkFBWixzQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUVELHdFQUFNLENBQUNFLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxtREFBRDtBQUNJLGdCQUFZLEVBQUUsRUFEbEI7QUFFSSxpQkFBYSxFQUFFLENBRm5CO0FBR0ksY0FBVSxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBSGhCO0FBSUksWUFBUSxFQUFFLGtCQUFDQyxNQUFEO0FBQUEsYUFBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBWjtBQUFBLEtBSmQ7QUFLSSxpQkFBYSxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQUFOO0FBQUEsS0FMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9RWixLQUFLLENBQUNhLFlBQU4sSUFBc0JiLEtBQUssQ0FBQ2EsWUFBTixDQUFtQkMsTUFBbkIsR0FBMEIsQ0FBaEQsR0FBb0RkLEtBQUssQ0FBQ2EsWUFBTixDQUFtQkUsZ0JBQW5CLENBQW9DQyxHQUFwQyxDQUF3QyxVQUFDQyxhQUFELEVBQWdCQyxHQUFoQixFQUF3QjtBQUNwSCxXQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFWix3RUFBTSxDQUFDYSwyQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFYix3RUFBTSxDQUFDYyxxQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFZCx3RUFBTSxDQUFDZSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFLGVBQVY7QUFBMkIsU0FBRyxFQUFDLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUk7QUFBSyxlQUFTLEVBQUVmLHdFQUFNLENBQUNnQixpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFTCxhQUFWO0FBQXlCLFNBQUcsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FKSixFQU9JO0FBQUssZUFBUyxFQUFFWCx3RUFBTSxDQUFDaUIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFLGFBQVY7QUFBeUIsU0FBRyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUssU0FBRyxFQUFFLFNBQVY7QUFBcUIsU0FBRyxFQUFDLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixFQUdJO0FBQUssU0FBRyxFQUFFLGVBQVY7QUFBMkIsU0FBRyxFQUFDLGNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixDQVBKLENBREosQ0FESixDQURKO0FBbUJDLEdBcEJtRCxDQUFwRCxHQW9CRyxFQTNCWCxDQURBLENBSkosQ0FESjtBQXVDSDs7R0FsRHVCeEIsb0I7O0tBQUFBLG9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NhcnREZXRhaWxzLmIyNDhhZDE5OWJiOGI4Y2ZiYWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBkZWxldGUxIGZyb20gICcvZGVsZXRlMS5wbmcnO1xyXG4vLyBpbXBvcnQgdmlldyBmcm9tICcvdmlldy5wbmcnO1xyXG4vLyBpbXBvcnQgZG93bmxvYWQgZnJvbSAnL2Rvd25sb2FkLnBuZyc7XHJcbi8vIGltcG9ydCB0aWNrIGZyb20gJy90aWNrbWFyay5wbmcnO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXkgfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BdHRhY2hlZFByZXNjcmlwdGlvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXR0YWNoZWRQcmVzY3JpcHRpb24ocHJvcHMpe1xyXG4gICAgY29uc3QgW3ByZXNjcmlwdGlvbnNMaXN0LHNldFByZXNjcmlwdGlvbnNMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicxJyxcclxuICAgICAgICAgICAgaW1nOicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicyJyxcclxuICAgICAgICAgICAgaW1nOicnXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXR0YWNoZWRQcmVzY3JpcHRpb259IGZvbnQtd2VpZ2h0LWJvbGRgfT5cclxuICAgICAgICAgICAgICAgIDxiPkF0dGFjaGVkIFByZXNjcmlwdGlvbjwvYj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uUmlnaHRCb3h9PlxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cclxuICAgICAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2FydFByb2R1Y3RzICYmIHByb3BzLmNhcnRQcm9kdWN0cy5sZW5ndGg+MCA/IHByb3BzLmNhcnRQcm9kdWN0cy5wcmVzY3JpcHRpb25VcmxzLm1hcCgocHJlc2NyaXB0aW9ucywgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25BdHRhY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXR0YWNoZWRQcmVzY3JpcHRpb24xfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25UaWNrbWFya30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy90aWNrbWFyay5wbmcnfSBhbHQ9XCJ0aWNrbWFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXNjcmlwdGlvbkltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcmVzY3JpcHRpb25zfSBhbHQ9XCJwcmVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc0xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvZGVsZXRlLnBuZyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9ldi5zdmcnfSBhbHQ9XCJwcmVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvZG93bmxvYWQucG5nJ30gYWx0PVwicHJlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTpcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPiAgXHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==