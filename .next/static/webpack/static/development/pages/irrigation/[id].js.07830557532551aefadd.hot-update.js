webpackHotUpdate("static\\development\\pages\\irrigation\\[id].js",{

/***/ "./components/AirHumidity.tsx":
/*!************************************!*\
  !*** ./components/AirHumidity.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\AirHumidity.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //@ts-ignore




/*type Props = {
    width:String
}*/
var AirHumidity = function AirHumidity(props) {
  var componentWidth = 337;
  var componentHeight = 337;
  var minY = 176.4;
  var maxY = 18;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value ? props.value : 0),
      currentValue = _useState[0],
      setCurrentValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(minY),
      currentY = _useState2[0],
      setCurrentY = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 60.15
  }),
      animX1 = _useState3[0],
      setAnimX1 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 60.15
  }),
      animX2 = _useState4[0],
      setAnimX2 = _useState4[1];

  var wave1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var wave2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageLine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageLine2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var waveGap = 125;

  function setValue(val) {
    var value = maxY + (minY - maxY) / 100 * (100 - val);
    var percentage = Math.round(100 - (value - maxY) / (minY - maxY) * 100);
    setCurrentY(percentage > 0 ? value : minY + 150);

    if (percentageLine.current) {
      percentageLine.current.setAttribute("y1", value.toString());
      percentageLine.current.setAttribute("y2", value.toString());
    }

    if (percentageLine2.current) {
      percentageLine2.current.setAttribute("y1", value.toString());
      percentageLine2.current.setAttribute("y2", value.toString());
    }

    if (percentageLevel.current) percentageLevel.current.setAttribute("d", "M107.87," + value + "V178H-2.5V" + value + "Z");

    if (percentageText.current) {
      percentageText.current.setAttribute("transform", "translate(168.67 " + (value - 2.5) + ")");
      percentageText.current.innerHTML = percentage + "%";
    }
  }

  Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
    targets: animX1,
    x: [60.15, 100],
    direction: 'alternate',
    duration: 7000,
    easing: 'easeInOutQuad',
    loop: true,
    update: function update() {
      if (wave2.current) wave2.current.setAttribute("transform", "translate(" + animX1.x + "," + (currentY - waveGap) + ")");
    }
  });
  Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
    targets: animX2,
    x: [60.15, 30],
    direction: 'alternate',
    duration: 5000,
    easing: 'easeInOutQuad',
    loop: true,
    update: function update() {
      if (wave1.current) wave1.current.setAttribute("transform", "translate(" + animX2.x + "," + (currentY - waveGap) + ")");
    }
  });
  /*useEffect(() => {
      setValue(0);
  },[]);*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var animParam = {
      value: currentValue
    };
    Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: animParam,
      value: props.value ? props.value : 0,
      update: function update() {
        setValue(animParam.value);
        setCurrentValue(animParam.value);
      }
    });
  }, [props.value]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 225.68 211.24",
    style: {
      width: props.width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, ".cls-1-vlh-vz,.cls-7-vlh-vz,.cls-8-vlh-vz{fill:none;}.cls-2-vlh-vz{font-size:12px;fill:#fff;font-family:CenturyGothic, Century Gothic;}.cls-3-vlh-vz{clip-path:url(#clip-path-vlh-pud);}.cls-4-vlh-vz,.cls-5-vlh-vz,.cls-6-vlh-vz{fill:#18b8d4;}.cls-5-vlh-vz{opacity:0.2;}.cls-6-vlh-vz{opacity:0.4;}.cls-7-vlh-vz,.cls-8-vlh-vz{stroke:#fff;stroke-miterlimit:10;}.cls-7-vlh-vz{stroke-width:0.25px;}.cls-8-vlh-vz{stroke-opacity:0.49;}"), __jsx("clipPath", {
    id: "clip-path-vlh-pud",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("path", {
    className: "cls-1-vlh-vz",
    d: "M97.89,131.23a45.2,45.2,0,0,1-90.4,0c0-25,45.2-112.92,45.2-112.92S97.89,106.27,97.89,131.23Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Datov\xFD zdroj 34"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("text", {
    className: "cls-2-vlh-vz",
    ref: percentageText,
    transform: "translate(168.67 92.37)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "20%"), __jsx("g", {
    className: "cls-3-vlh-vz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("path", {
    className: "cls-4-vlh-vz",
    ref: percentageLevel,
    d: "M107.87,130V178H-2.5V130Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("path", {
    className: "cls-5-vlh-vz",
    ref: wave1,
    d: "M-60.15,119.12C-50,117.26-33.65,115.07-22.6,106c8.67-7.15,39.09,15,64.25,2.33,16.79-8.48,29.88,7.41,49.55-2.71,21.4-11,26.09,9.28,50.31,5.13,13.61-2.33,18-.34,24,8.42v92.12H-60.15Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-vz",
    ref: wave2,
    d: "M-60.15,130.57c10.16-1.46,18.58-3.63,27.06-13.73,8.21-9.78,26.9,11.07,52.65-.63,19.47-8.84,22.05,5,40.11,1.79,14.11-2.54,31.12-4.79,38.47,1.54s15.27-3.27,21.14-2.38c20.72,3.12,16.17-3,31.36-7.92,13.05-4.26,8.85,14.4,14.89,21.33v73H-60.15Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx("line", {
    ref: percentageLine,
    className: "cls-7-vlh-vz",
    x1: "60.65",
    y1: "94.6",
    x2: "192.78",
    y2: "94.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), __jsx("path", {
    className: "cls-8-vlh-vz",
    d: "M104.87,131.47a52.19,52.19,0,0,1-104.37,0C.5,102.64,52.69,1.09,52.69,1.09S104.87,102.64,104.87,131.47Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("line", {
    ref: percentageLine2,
    "data-name": "Percentage-line",
    className: "cls-7-vlh-vz",
    x1: "112.84",
    y1: "94.6",
    x2: "192.78",
    y2: "94.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AirHumidity);

/***/ }),

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
/* harmony import */ var _components_AirHumidity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/AirHumidity */ "./components/AirHumidity.tsx");
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
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Zavla\u017Eov\xE1n\xED"), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components_SoilHumidity__WEBPACK_IMPORTED_MODULE_9__["default"], {
    theme: props.theme,
    value: soilHumidity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components_AirHumidity__WEBPACK_IMPORTED_MODULE_10__["default"], {
    theme: props.theme,
    value: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    style: {
      width: 'calc(100% - 100px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
      lineNumber: 99
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
      lineNumber: 151
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_OnlyDesktop__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(ex)));

/***/ })

})
//# sourceMappingURL=[id].js.07830557532551aefadd.hot-update.js.map