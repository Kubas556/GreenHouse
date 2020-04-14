webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.js");
/* harmony import */ var _components_WithAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WithAppBar */ "./components/WithAppBar.js");
/* harmony import */ var _components_Tempmeter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Tempmeter */ "./components/Tempmeter.js");
/* harmony import */ var _components_Termostat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Termostat */ "./components/Termostat.js");
/* harmony import */ var _firebase_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/index.js */ "./firebase/index.js");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-50),
      temp = _useState[0],
      setTemp = _useState[1];

  var tempData = _firebase_index_js__WEBPACK_IMPORTED_MODULE_7__["firebase"].database().ref("/greenhouse/temp");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tempData.on('value', function (data) {
      setTemp(data.val());
    });
  }, []);
  return __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.session !== null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.session) : null, __jsx("div", {
    className: classes.tempmeter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_Tempmeter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: props.theme,
    temp: temp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_Termostat__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: props.theme,
    defaultValue: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })));
}

function ex(props) {
  return __jsx(_components_WithAppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Index,
    text: "some app",
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(ex));

/***/ })

})
//# sourceMappingURL=index.js.65d7d57867f5b0616092.hot-update.js.map