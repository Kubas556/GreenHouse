webpackHotUpdate("static\\development\\pages\\irrigation\\[id].js",{

/***/ "./pages/irrigation/[id].tsx":
/*!***********************************!*\
  !*** ./pages/irrigation/[id].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WithAuth */ "./components/WithAuth.tsx");
/* harmony import */ var _components_WithDrawerAppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WithDrawerAppBar */ "./components/WithDrawerAppBar.tsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _components_OnlyDesktop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/OnlyDesktop */ "./components/OnlyDesktop.tsx");
/* harmony import */ var _components_SoilHumidity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SoilHumidity */ "./components/SoilHumidity.tsx");
/* harmony import */ var _components_AirHumidity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/AirHumidity */ "./components/AirHumidity.tsx");

var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\irrigation\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    center: {
      display: 'flex',
      width: 'calc(100% - 1px)'
    },
    page: {
      width: '100%',
      position: 'relative'
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      soilHumidity = _useState[0],
      setSoilHumidity = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      airHumidity = _useState2[0],
      setAirHumidity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      airHumidityHistoryCharData = _useState3[0],
      setAirHumidityHistoryCharData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      aitHumidityHistoryCharLabels = _useState4[0],
      setAirHumidityHistoryCharLabels = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      defTemp = _useState5[0],
      setDefTemp = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;
  var timeFormat = 'MM/DD/YYYY HH:mm';
  var soilHumidityData = _firebase_index__WEBPACK_IMPORTED_MODULE_7__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/soilHumidity");
  var airHumidityData = _firebase_index__WEBPACK_IMPORTED_MODULE_7__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/airHumidity");
  var humidityHistoryData = _firebase_index__WEBPACK_IMPORTED_MODULE_7__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/history/airHumidity"); //let targetTempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp");

  var termostatChange = function termostatChange(value) {
    _firebase_index__WEBPACK_IMPORTED_MODULE_7__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp").set(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    soilHumidityData.on('value', function (data) {
      setSoilHumidity(data.val());
    });
    airHumidityData.on('value', function (data) {
      setAirHumidity(data.val());
    });
    humidityHistoryData.on('value', function (data) {
      var charData = [];
      var charLabels = [];

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.val()).forEach(function (key) {
        charData.push(data.val()[key].value);
        charLabels.push(data.val()[key].time[1] + '/' + data.val()[key].time[2] + '/' + data.val()[key].time[0] + ' ' + data.val()[key].time[3] + ':' + data.val()[key].time[4]);
      });

      setAirHumidityHistoryCharData(charData);
      setAirHumidityHistoryCharLabels(charLabels);
    });
    /*targetTempData.once('value',data=>{
        setDefTemp(data.val());
    });*/
  }, []);
  return __jsx("div", {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    component: "h1",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Zavla\u017Eov\xE1n\xED"), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_components_SoilHumidity__WEBPACK_IMPORTED_MODULE_10__["default"], {
    theme: props.theme,
    value: soilHumidity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))), __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_components_AirHumidity__WEBPACK_IMPORTED_MODULE_11__["default"], {
    theme: props.theme,
    value: airHumidity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    style: {
      width: 'calc(100% - 100px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__["Line"], {
    height: 200,
    data: {
      labels: aitHumidityHistoryCharLabels,
      datasets: [{
        label: 'value',
        data: airHumidityHistoryCharData,
        backgroundColor: function backgroundColor(context) {
          var gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(24,184,212,0.5)');
          gradient.addColorStop(1, 'rgba(24,184,212,0)');
          return gradient;
        },
        pointBackgroundColor: 'rgb(24,184,212)',
        borderColor: 'rgb(24,184,212)',
        borderWidth: 0,
        fill: true
      }]
    },
    options: {
      scales: {
        xAxes: [{
          display: false,
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: props.theme == 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            zeroLineColor: props.theme == 1 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            drawTicks: false,
            display: false
          },
          ticks: {
            stepSize: 10,
            padding: 10
          }
        }]
      },
      legend: {
        display: true
      },
      maintainAspectRatio: false
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })))));
}

function ex2(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState6[0],
      setName = _useState6[1];

  var nameData = _firebase_index__WEBPACK_IMPORTED_MODULE_7__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/name");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    nameData.on('value', function (data) {
      setName(data.val());
    });
  }, []);
  return __jsx(_components_WithDrawerAppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: Id,
    title: name,
    deviceId: id.toString(),
    componentProps: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_OnlyDesktop__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(ex2)));

/***/ })

})
//# sourceMappingURL=[id].js.42c261ecae6b0ac8d406.hot-update.js.map