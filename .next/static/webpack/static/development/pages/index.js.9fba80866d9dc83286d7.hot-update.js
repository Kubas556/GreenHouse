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

  var tempData = _firebase_index__WEBPACK_IMPORTED_MODULE_2__["firebase"].database().ref("/users/" + props.userId + "/devices/" + props.id + "/temp");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tempData.on('value', function (data) {
      setTemp(data.val()); //console.log(Object.keys(data.val()));
    });
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Test sklen\xEDk"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: "textSecondary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Aktu\xE1ln\xED teplota: ", temp)));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceInfoCard);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.tsx");
/* harmony import */ var _components_WithAppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WithAppBar */ "./components/WithAppBar.tsx");
/* harmony import */ var _components_DeviceInfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DeviceInfoCard */ "./components/DeviceInfoCard.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function index(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h4",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Seznam chytr\xFDch za\u0159\xEDzen\xED"), __jsx("div", {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_DeviceInfoCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "greenhouse",
    userId: props.user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return __jsx(_components_WithAppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: index,
    title: "Index",
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  });
}));

/***/ })

})
//# sourceMappingURL=index.js.9fba80866d9dc83286d7.hot-update.js.map