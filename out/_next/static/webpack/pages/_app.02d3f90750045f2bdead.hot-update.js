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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index.js */ "./store/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/public/scss/plugins/owl-carousel/owl.carousel.scss */ "./public/scss/plugins/owl-carousel/owl.carousel.scss");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/public/scss/style.scss */ "./public/scss/style.scss");
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pages_pages_coming_soon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/pages/coming-soon */ "./pages/pages/coming-soon.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Rivers\\Desktop\\vioStore\\vio-next\\pages\\_app.jsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);












var WrappedApp = function WrappedApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (store.getState().demo.current != "11") {
      store.dispatch(_store_demo__WEBPACK_IMPORTED_MODULE_8__.actions.refreshStore("11"));
    }
  }, []);
  return __jsx(_pages_pages_coming_soon__WEBPACK_IMPORTED_MODULE_11__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }) // <Provider store={store}>
  //     <PersistGate
  //         persistor={store.__persistor}
  //         loading={
  //             <div className="loading-overlay">
  //                 <div className="bounce-loader">
  //                     <div className="bounce1"></div>
  //                     <div className="bounce2"></div>
  //                     <div className="bounce3"></div>
  //                 </div>
  //             </div>
  //         }>
  //         <Helmet>
  //             <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  //             <meta name="keywords" content="Molla React Template" />
  //             <meta name="description" content="Molla –  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites."
  //             />
  //             <meta name="author" content="d-themes" />
  //             <meta name="apple-mobile-web-app-title" content="Molla" />
  //             <meta name="application-name" content="Molla React eCommerce Template" />
  //             <meta name="msapplication-TileColor" content="#cc9966" />
  //             <meta name="msapplication-config" content="images/icons/browserconfig.xml" />
  //             <meta name="theme-color" content="#ffffff" />
  //             <title>Violette - Ecommerce Store</title>
  //             <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
  //             <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
  //             <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
  //             <link rel="manifest" href="images/icons/site.webmanifest" />
  //             <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
  //             <link rel="shortcut icon" href="images/icons/favicon.ico" />
  //         </Helmet>
  //         <Layout>
  //             <Component {...pageProps} />
  //         </Layout>
  //     </PersistGate>
  // </Provider >
  ;
};

_s(WrappedApp, "7WX0f3w9+vyXsBWAiuPF4CU1RJU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useStore];
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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_index_js__WEBPACK_IMPORTED_MODULE_6__.wrapper.withRedux(WrappedApp));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOlsiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJnZXRTdGF0ZSIsImRlbW8iLCJjdXJyZW50IiwicHJvY2VzcyIsImRpc3BhdGNoIiwiZGVtb0FjdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM3QyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlGLEtBQUssQ0FBQ0csUUFBTixHQUFpQkMsSUFBakIsQ0FBc0JDLE9BQXRCLElBQWlDQyxJQUFyQyxFQUFtRTtBQUMvRE4sV0FBSyxDQUFDTyxRQUFOLENBQWVDLDZEQUFBLENBQXdCRixJQUF4QixDQUFmO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDQSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDSjtBQXlDSCxDQWpERDs7R0FBTVQsVTtVQUNZSSxpRDs7O0tBRFpKLFU7O0FBbUROQSxVQUFVLENBQUNZLGVBQVg7QUFBQSxzVUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNYLHFCQUFULFNBQVNBLFNBQVQsRUFBb0JZLEdBQXBCLFNBQW9CQSxHQUFwQjtBQUNyQlgscUJBRHFCLEdBQ1QsRUFEUzs7QUFBQSxpQkFFckJELFNBQVMsQ0FBQ1csZUFGVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdIWCxTQUFTLENBQUNXLGVBQVYsQ0FBMEJDLEdBQTFCLENBSEc7O0FBQUE7QUFHckJYLHFCQUhxQjs7QUFBQTtBQUFBLDZDQUtsQjtBQUFFQSx1QkFBUyxFQUFUQTtBQUFGLGFBTGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLCtEQUFlLE1BQUFZLDhEQUFBLENBQWtCZCxVQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDJkM2Y5MDc1MDA0NWYyYmRlYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUvaW5kZXguanNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIGRlbW9BY3Rpb24gfSBmcm9tIFwiLi4vc3RvcmUvZGVtb1wiO1xyXG5cclxuaW1wb3J0ICd+L3B1YmxpYy9zY3NzL3BsdWdpbnMvb3dsLWNhcm91c2VsL293bC5jYXJvdXNlbC5zY3NzJztcclxuaW1wb3J0IFwifi9wdWJsaWMvc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgQ29taW5nU29vbiBmcm9tICcuLi9wYWdlcy9wYWdlcy9jb21pbmctc29vbidcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yZS5nZXRTdGF0ZSgpLmRlbW8uY3VycmVudCAhPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERU1PKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGRlbW9BY3Rpb24ucmVmcmVzaFN0b3JlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU8pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENvbWluZ1Nvb24vPlxyXG4gICAgICAgIC8vIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIC8vICAgICA8UGVyc2lzdEdhdGVcclxuICAgICAgICAvLyAgICAgICAgIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9XHJcbiAgICAgICAgLy8gICAgICAgICBsb2FkaW5nPXtcclxuICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctb3ZlcmxheVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZS1sb2FkZXJcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMVwiPjwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UyXCI+PC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTNcIj48L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICB9PlxyXG5cclxuICAgICAgICAvLyAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJNb2xsYSBSZWFjdCBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk1vbGxhIOKAkyAgZUNvbW1lcmNlIFJlYWN0IFRlbXBsYXRlIGlzIGEgbXVsdGktdXNlIFJlYWN0IHRlbXBsYXRlLiBJdCBpcyBkZXNpZ25lZCB0byBnbyB3ZWxsIHdpdGggbXVsdGktcHVycG9zZSB3ZWJzaXRlcy5cIlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJkLXRoZW1lc1wiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIk1vbGxhXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJNb2xsYSBSZWFjdCBlQ29tbWVyY2UgVGVtcGxhdGVcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjY2M5OTY2XCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiaW1hZ2VzL2ljb25zL2Jyb3dzZXJjb25maWcueG1sXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPHRpdGxlPlZpb2xldHRlIC0gRWNvbW1lcmNlIFN0b3JlPC90aXRsZT5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cImltYWdlcy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cImltYWdlcy9pY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cImltYWdlcy9pY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiaW1hZ2VzL2ljb25zL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNjY2NjY2XCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImltYWdlcy9pY29ucy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICA8L0hlbG1ldD5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAvLyAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIC8vICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgIC8vIDwvUHJvdmlkZXIgPlxyXG4gICAgKVxyXG59O1xyXG5cclxuV3JhcHBlZEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=