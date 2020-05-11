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
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.id), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: "textSecondary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Typ: Sklen\xEDk"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    color: "textSecondary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Aktu\xE1ln\xED teplota: ", temp)));
}

/* harmony default export */ __webpack_exports__["default"] = (DeviceInfoCard);

/***/ })

})
//# sourceMappingURL=index.js.9749e79253a691abb0fb.hot-update.js.map