webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.tsx");
/* harmony import */ var _components_WithAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WithAppBar */ "./components/WithAppBar.tsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var _components_DeviceInfoCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DeviceInfoCard */ "./components/DeviceInfoCard.tsx");

var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function index(props) {
  var devicesData = _firebase_index__WEBPACK_IMPORTED_MODULE_5__["firebase"].database().ref("/users/" + props.user + "/devices");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      devices = _useState[0],
      setDevices = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    devicesData.on('value', function (data) {
      //console.log(Object.keys(data.val()));
      setDevices(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.val()));
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Seznam chytr\xFDch za\u0159\xEDzen\xED"), __jsx("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, devices.forEach(function (id) {
    __jsx(_components_DeviceInfoCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: id,
      userId: props.user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(function (props) {
  return __jsx(_components_WithAppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: index,
    title: "Index",
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.8418fe36f94428b4c25c.hot-update.js.map