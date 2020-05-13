webpackHotUpdate("static\\development\\pages\\temperature\\[id].js",{

/***/ "./pages/temperature/[id].tsx":
/*!************************************!*\
  !*** ./pages/temperature/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WithAuth */ "./components/WithAuth.tsx");
/* harmony import */ var _components_WithDrawerAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WithDrawerAppBar */ "./components/WithDrawerAppBar.tsx");
/* harmony import */ var _components_Tempmeter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Tempmeter */ "./components/Tempmeter.tsx");
/* harmony import */ var _components_Termostat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Termostat */ "./components/Termostat.tsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase/index */ "./firebase/index.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\temperature\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    center: {
      display: 'flex'
    },
    controllComponent: {
      margin: '50px',
      padding: '1rem'
    }
  };
});

function Id(props) {
  var classes = useStyle();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-50),
      temp = _useState[0],
      setTemp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      defTemp = _useState2[0],
      setDefTemp = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var tempData = _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/temp");
  var targetTempData = _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp");

  var termostatChange = function termostatChange(value) {
    _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp").set(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tempData.on('value', function (data) {
      setTemp(data.val());
    });
    targetTempData.once('value', function (data) {
      setDefTemp(data.val());
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Teplota"), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_Tempmeter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: props.theme,
    temp: temp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_components_Termostat__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: props.theme,
    onValueChanged: termostatChange,
    defaultValue: defTemp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))));
}

function ex(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var nameData = _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/name");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    nameData.on('value', function (data) {
      setName(data.val());
    });
  }, []);
  return __jsx(_components_WithDrawerAppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: Id,
    title: name,
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(ex));

/***/ })

})
//# sourceMappingURL=[id].js.05f3c5dd59b567385a19.hot-update.js.map