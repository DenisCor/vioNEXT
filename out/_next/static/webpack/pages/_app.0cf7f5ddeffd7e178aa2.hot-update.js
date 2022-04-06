self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/index.js */ "./store/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/public/scss/plugins/owl-carousel/owl.carousel.scss */ "./public/scss/plugins/owl-carousel/owl.carousel.scss");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/public/scss/style.scss */ "./public/scss/style.scss");
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_scss_style_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_pages_coming_soon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/pages/coming-soon */ "./pages/pages/coming-soon.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Rivers\\Desktop\\vioStore\\vio-next\\pages\\_app.jsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_3___default().createElement);












var WrappedApp = function WrappedApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (store.getState().demo.current != "11") {
      store.dispatch(_store_demo__WEBPACK_IMPORTED_MODULE_9__.actions.refreshStore("11"));
    }
  }, []);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__.PersistGate, {
    persistor: store.__persistor,
    loading: __jsx("div", {
      className: "loading-overlay",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "bounce-loader",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bounce1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "bounce2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "bounce3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "Molla React Template",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "description",
    content: "Molla \u2013  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "author",
    content: "d-themes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Molla",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "application-name",
    content: "Molla React eCommerce Template",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#cc9966",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "images/icons/browserconfig.xml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "Violette - Ecommerce Store"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images/icons/apple-touch-icon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "images/icons/favicon-32x32.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "images/icons/favicon-16x16.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "images/icons/site.webmanifest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "images/icons/safari-pinned-tab.svg",
    color: "#666666",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "images/icons/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(Component, (0,C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  })))));
};

_s(WrappedApp, "7WX0f3w9+vyXsBWAiuPF4CU1RJU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useStore];
});

_c = WrappedApp;

WrappedApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var Component, ctx, pageProps;
    return C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            pageProps = {};

            if (!Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(ctx);

          case 5:
            pageProps = _context.sent;

          case 6:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_index_js__WEBPACK_IMPORTED_MODULE_7__.wrapper.withRedux(WrappedApp));

var _c, _c2;

$RefreshReg$(_c, "WrappedApp");
$RefreshReg$(_c2, "%default%");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOlsiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJnZXRTdGF0ZSIsImRlbW8iLCJjdXJyZW50IiwicHJvY2VzcyIsImRpc3BhdGNoIiwiZGVtb0FjdGlvbiIsIl9fcGVyc2lzdG9yIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0MsTUFBTUMsS0FBSyxHQUFHQyxxREFBUSxFQUF0QjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCQyxPQUF0QixJQUFpQ0MsSUFBckMsRUFBbUU7QUFDL0ROLFdBQUssQ0FBQ08sUUFBTixDQUFlQyw2REFBQSxDQUF3QkYsSUFBeEIsQ0FBZjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBRUksTUFBQyxpREFBRDtBQUFVLFNBQUssRUFBRU4sS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0VBQUQ7QUFDSSxhQUFTLEVBQUVBLEtBQUssQ0FBQ1MsV0FEckI7QUFFSSxXQUFPLEVBQ0g7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtB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QUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FaSixFQWdDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQseUpBQWVWLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBaENKLENBREosQ0FGSjtBQXlDSCxDQWpERDs7R0FBTUYsVTtVQUNZSSxpRDs7O0tBRFpKLFU7O0FBbUROQSxVQUFVLENBQUNhLGVBQVg7QUFBQSxzVUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNaLHFCQUFULFNBQVNBLFNBQVQsRUFBb0JhLEdBQXBCLFNBQW9CQSxHQUFwQjtBQUNyQloscUJBRHFCLEdBQ1QsRUFEUzs7QUFBQSxpQkFFckJELFNBQVMsQ0FBQ1ksZUFGVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdIWixTQUFTLENBQUNZLGVBQVYsQ0FBMEJDLEdBQTFCLENBSEc7O0FBQUE7QUFHckJaLHFCQUhxQjs7QUFBQTtBQUFBLDZDQUtsQjtBQUFFQSx1QkFBUyxFQUFUQTtBQUFGLGFBTGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLCtEQUFlLE1BQUFhLDhEQUFBLENBQWtCZixVQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGNmN2Y1ZGRlZmZkN2UxNzhhYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUvaW5kZXguanNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tIFwiLi4vc3RvcmUvZGVtb1wiO1xyXG5cclxuaW1wb3J0ICd+L3B1YmxpYy9zY3NzL3BsdWdpbnMvb3dsLWNhcm91c2VsL293bC5jYXJvdXNlbC5zY3NzJztcclxuaW1wb3J0IFwifi9wdWJsaWMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgQ29taW5nU29vbiBmcm9tICcuLi9wYWdlcy9wYWdlcy9jb21pbmctc29vbidcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yZS5nZXRTdGF0ZSgpLmRlbW8uY3VycmVudCAhPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGRlbW9BY3Rpb24ucmVmcmVzaFN0b3JlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU8pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxQZXJzaXN0R2F0ZVxyXG4gICAgICAgICAgICAgICAgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlLWxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIk1vbGxhIFJlYWN0IFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTW9sbGEg4oCTICBlQ29tbWVyY2UgUmVhY3QgVGVtcGxhdGUgaXMgYSBtdWx0aS11c2UgUmVhY3QgdGVtcGxhdGUuIEl0IGlzIGRlc2lnbmVkIHRvIGdvIHdlbGwgd2l0aCBtdWx0aS1wdXJwb3NlIHdlYnNpdGVzLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImQtdGhlbWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiTW9sbGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIk1vbGxhIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNjYzk5NjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCJpbWFnZXMvaWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VmlvbGV0dGUgLSBFY29tbWVyY2UgU3RvcmU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cImltYWdlcy9pY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM2NjY2NjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVsbWV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgICAgPC9Qcm92aWRlciA+XHJcbiAgICApXHJcbn07XHJcblxyXG5XcmFwcGVkQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChXcmFwcGVkQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==