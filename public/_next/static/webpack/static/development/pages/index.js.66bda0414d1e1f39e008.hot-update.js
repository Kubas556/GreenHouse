webpackHotUpdate("static\\development\\pages\\index.tsx",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.js");
/* harmony import */ var _components_Tempmeter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Tempmeter */ "./components/Tempmeter.js");
/* harmony import */ var _firebase_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../firebase/index.tsx */ "./firebase/index.js");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;












var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    center: {
      display: 'flex'
    },
    tempmeter: {
      margin: '50px'
    }
  };
});

function Index(props) {
  var classes = useStyle();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(-50),
      temp = _useState[0],
      setTemp = _useState[1];

  var tempData = _firebase_index_js__WEBPACK_IMPORTED_MODULE_11__["firebase"].database().ref("/greenhouse/temp");
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    tempData.on('value', function (data) {
      setTemp(data.val());
    });
  }, []);
  return __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, props.session !== null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    className: classes.header,
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.session) : null, __jsx("div", {
    className: classes.tempmeter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_Tempmeter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    theme: props.theme,
    temp: temp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(Index));

/***/ })

})
//# sourceMappingURL=index.tsx.66bda0414d1e1f39e008.hot-update.js.map