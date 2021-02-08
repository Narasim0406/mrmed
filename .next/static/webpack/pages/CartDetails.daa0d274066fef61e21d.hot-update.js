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
  }, prescriptionsList.map(function (prescriptions, ind) {
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
      src: '/prescription-img.png',
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
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcnRGbG93L09yZGVyU3VtbWFyeXMvQXR0YWNoZWQgUHJlc2NyaXB0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTd2lwZXJDb3JlIiwidXNlIiwiUGFnaW5hdGlvbiIsIlNjcm9sbGJhciIsIkExMXkiLCJBdHRhY2hlZFByZXNjcmlwdGlvbiIsInByb3BzIiwidXNlU3RhdGUiLCJpZCIsImltZyIsInByZXNjcmlwdGlvbnNMaXN0Iiwic2V0UHJlc2NyaXB0aW9uc0xpc3QiLCJzdHlsZXMiLCJhdHRhY2hlZFByZXNjcmlwdGlvbiIsInByZXNjcmlwdGlvblJpZ2h0Qm94IiwiY2xpY2thYmxlIiwic3dpcGVyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInByZXNjcmlwdGlvbnMiLCJpbmQiLCJwcmVzY3JpcHRpb25BdHRhY2hDb250YWluZXIiLCJhdHRhY2hlZFByZXNjcmlwdGlvbjEiLCJwcmVzY3JpcHRpb25UaWNrbWFyayIsInByZXNjcmlwdGlvbkltYWdlIiwiaWNvbnNMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUFBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFFQyxpREFBRixFQUFjQyxnREFBZCxFQUF5QkMsMkNBQXpCLENBQWY7QUFFZSxTQUFTQyxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBb0M7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxDQUN0RDtBQUNJQyxNQUFFLEVBQUMsR0FEUDtBQUVJQyxPQUFHLEVBQUM7QUFGUixHQURzRCxFQUt0RDtBQUNJRCxNQUFFLEVBQUMsR0FEUDtBQUVJQyxPQUFHLEVBQUM7QUFGUixHQUxzRCxDQUFELENBRFY7QUFBQSxNQUN4Q0MsaUJBRHdDO0FBQUEsTUFDdEJDLG9CQURzQjs7QUFXL0MsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLFlBQUtDLHdFQUFNLENBQUNDLG9CQUFaLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBRUQsd0VBQU0sQ0FBQ0Usb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG1EQUFEO0FBQ0ksZ0JBQVksRUFBRSxFQURsQjtBQUVJLGlCQUFhLEVBQUUsQ0FGbkI7QUFHSSxjQUFVLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FIaEI7QUFJSSxZQUFRLEVBQUUsa0JBQUNDLE1BQUQ7QUFBQSxhQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQUFaO0FBQUEsS0FKZDtBQUtJLGlCQUFhLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQU47QUFBQSxLQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT1FSLGlCQUFpQixDQUFDUyxHQUFsQixDQUFzQixVQUFDQyxhQUFELEVBQWdCQyxHQUFoQixFQUF3QjtBQUM5QyxXQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFVCx3RUFBTSxDQUFDVSwyQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFVix3RUFBTSxDQUFDVyxxQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFWCx3RUFBTSxDQUFDWSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFLGVBQVY7QUFBMkIsU0FBRyxFQUFDLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUk7QUFBSyxlQUFTLEVBQUVaLHdFQUFNLENBQUNhLGlCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUUsdUJBQVY7QUFBbUMsU0FBRyxFQUFDLGNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUpKLEVBT0k7QUFBSyxlQUFTLEVBQUViLHdFQUFNLENBQUNjLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRSxhQUFWO0FBQXlCLFNBQUcsRUFBQyxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFLLFNBQUcsRUFBRSxTQUFWO0FBQXFCLFNBQUcsRUFBQyxjQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSTtBQUFLLFNBQUcsRUFBRSxlQUFWO0FBQTJCLFNBQUcsRUFBQyxjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosQ0FQSixDQURKLENBREosQ0FESjtBQW1CQyxHQXBCRCxDQVBSLENBREEsQ0FKSixDQURKO0FBdUNIOztHQWxEdUJyQixvQjs7S0FBQUEsb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2FydERldGFpbHMuZGFhMGQyNzQwNjZmZWY2MWUyMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGRlbGV0ZTEgZnJvbSAgJy9kZWxldGUxLnBuZyc7XHJcbi8vIGltcG9ydCB2aWV3IGZyb20gJy92aWV3LnBuZyc7XHJcbi8vIGltcG9ydCBkb3dubG9hZCBmcm9tICcvZG93bmxvYWQucG5nJztcclxuLy8gaW1wb3J0IHRpY2sgZnJvbSAnL3RpY2ttYXJrLnBuZyc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F0dGFjaGVkUHJlc2NyaXB0aW9uLm1vZHVsZS5zY3NzJztcclxuXHJcblN3aXBlckNvcmUudXNlKFsgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5XSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdHRhY2hlZFByZXNjcmlwdGlvbihwcm9wcyl7XHJcbiAgICBjb25zdCBbcHJlc2NyaXB0aW9uc0xpc3Qsc2V0UHJlc2NyaXB0aW9uc0xpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgICAgICBpbWc6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzInLFxyXG4gICAgICAgICAgICBpbWc6JydcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hdHRhY2hlZFByZXNjcmlwdGlvbn0gZm9udC13ZWlnaHQtYm9sZGB9PlxyXG4gICAgICAgICAgICAgICAgPGI+QXR0YWNoZWQgUHJlc2NyaXB0aW9uPC9iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25SaWdodEJveH0+XHJcbiAgICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiBjb25zb2xlLmxvZyhzd2lwZXIpfVxyXG4gICAgICAgICAgICAgICAgb25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVzY3JpcHRpb25zTGlzdC5tYXAoKHByZXNjcmlwdGlvbnMsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uQXR0YWNoQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dGFjaGVkUHJlc2NyaXB0aW9uMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJlc2NyaXB0aW9uVGlja21hcmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvdGlja21hcmsucG5nJ30gYWx0PVwidGlja21hcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVzY3JpcHRpb25JbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9wcmVzY3JpcHRpb24taW1nLnBuZyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kZWxldGUucG5nJ30gYWx0PVwicHJlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnL2V2LnN2Zyd9IGFsdD1cInByZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9kb3dubG9hZC5wbmcnfSBhbHQ9XCJwcmVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPiAgXHJcbiAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==