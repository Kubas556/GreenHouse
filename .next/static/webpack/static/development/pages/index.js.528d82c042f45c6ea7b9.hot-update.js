webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DeviceInfoCard.tsx":
/*!***************************************!*\
  !*** ./components/DeviceInfoCard.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/index */ "./firebase/index.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\DeviceInfoCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function DeviceInfoCard(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("waiting"),
      temp = _useState[0],
      setTemp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("waiting"),
      name = _useState2[0],
      setName = _useState2[1];

  var tempData = _firebase_index__WEBPACK_IMPORTED_MODULE_2__["firebase"].database().ref("/users/" + props.userId + "/devices/" + props.id + "/temp");
  var nameData = _firebase_index__WEBPACK_IMPORTED_MODULE_2__["firebase"].database().ref("/users/" + props.userId + "/devices/" + props.id + "/name");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tempData.on('value', function (data) {
      setTemp(data.val());
    });
    nameData.on('value', function (data) {
      setName(data.val()); //console.log(Object.keys(data.val()));
    });
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: "textSecondary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Typ: Sklen\xEDk"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: "textSecondary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Aktu\xE1ln\xED teplota: ", temp)));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(DeviceInfoCard));

/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.tsx");
/* harmony import */ var _components_WithAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WithAppBar */ "./components/WithAppBar.tsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var _components_DeviceInfoCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DeviceInfoCard */ "./components/DeviceInfoCard.tsx");

var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








function index(props) {
  var devicesData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      devices = _useState[0],
      setDevices = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    devicesData.on('value', function (data) {
      //console.log(Object.keys(data.val()));
      setDevices(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.val()));
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Seznam chytr\xFDch za\u0159\xEDzen\xED"), __jsx("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, devices.map(function (id, index) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/temperature',
        query: {
          name: 'test'
        }
      },
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(_components_DeviceInfoCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      id: id,
      userId: props.user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(function (props) {
  return __jsx(_components_WithAppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: index,
    title: "Index",
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.528d82c042f45c6ea7b9.hot-update.js.map