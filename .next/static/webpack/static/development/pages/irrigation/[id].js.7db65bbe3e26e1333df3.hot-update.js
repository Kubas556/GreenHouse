webpackHotUpdate("static\\development\\pages\\irrigation\\[id].js",{

/***/ "./pages/irrigation/[id].tsx":
/*!***********************************!*\
  !*** ./pages/irrigation/[id].tsx ***!
  \***********************************/
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
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _components_OnlyDesktop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/OnlyDesktop */ "./components/OnlyDesktop.tsx");
/* harmony import */ var _components_SoilHumidity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SoilHumidity */ "./components/SoilHumidity.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\irrigation\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    center: {
      display: 'flex'
    },
    controllComponent: {
      margin: '50px',
      width: 'min-content',
      padding: '1rem'
    }
  };
});

function Id(props) {
  var classes = useStyle();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      soilHumidity = _useState[0],
      setSoilHumidity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      tempHistoryCharData = _useState2[0],
      setTempHistoryCharData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      tempHistoryCharLabels = _useState3[0],
      setTempHistoryCharLabels = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      defTemp = _useState4[0],
      setDefTemp = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var timeFormat = 'MM/DD/YYYY HH:mm';
  var soilHumidityData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/soilHumidity");
  var humidityHistoryData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/humiditys"); //let targetTempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp");

  var termostatChange = function termostatChange(value) {
    _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp").set(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    soilHumidityData.on('value', function (data) {
      setSoilHumidity(data.val());
    });
    /*humidityHistoryData.on('value',data=>{
        let charData:any[] = [];
        let charLabels:any[] = [];
        Object.keys(data.val()).forEach(key => {
            charData.push(data.val()[key].temp);
            charLabels.push(data.val()[key].time[1]+'/'+data.val()[key].time[2]+'/'+data.val()[key].time[0]+' '+data.val()[key].time[3]+':'+data.val()[key].time[4])
        });
          setTempHistoryCharData(charData);
        setTempHistoryCharLabels(charLabels);
    });*/

    /*targetTempData.once('value',data=>{
        setDefTemp(data.val());
    });*/
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Zavla\u017Eov\xE1n\xED"), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_components_SoilHumidity__WEBPACK_IMPORTED_MODULE_9__["default"], {
    theme: props.theme,
    value: soilHumidity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    style: {
      width: 'calc(100% - 100px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__["Line"], {
    data: {
      labels: tempHistoryCharLabels,
      datasets: [{
        label: 'temp',
        data: tempHistoryCharData,
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 0
      }]
    },
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            color: props.theme == 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            zeroLineColor: props.theme == 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            drawTicks: false
          },
          ticks: {
            stepSize: 10,
            padding: 10
          }
        }]
      },
      maintainAspectRatio: false
      /*xAxes:[{
        }]*/

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })))));
}

function ex(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState5[0],
      setName = _useState5[1];

  var nameData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/name");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    nameData.on('value', function (data) {
      setName(data.val());
    });
  }, []);
  return __jsx(_components_WithDrawerAppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: Id,
    title: name,
    deviceId: id.toString(),
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_OnlyDesktop__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(ex)));

/***/ })

})
//# sourceMappingURL=[id].js.7db65bbe3e26e1333df3.hot-update.js.map