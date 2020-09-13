webpackHotUpdate("static\\development\\pages\\irrigation\\[id].js",{

/***/ "./components/SoilHumidity.tsx":
/*!*************************************!*\
  !*** ./components/SoilHumidity.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\SoilHumidity.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //@ts-ignore




/*type Props = {
    width:String
}*/
var SoilHumidity = function SoilHumidity(props) {
  var componentWidth = 337;
  var componentHeight = 337;
  var bubbleBaseSize = 7;
  var minY = 251.27;
  var maxY = 113.27;
  var bubbleConfig = [{
    y: 50,
    delay: 1000
  }, {
    y: 40,
    delay: 3000
  }, {
    y: 60,
    delay: 2000
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value ? props.value : 0),
      currentValue = _useState[0],
      setCurrentValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(minY),
      currentY = _useState2[0],
      setCurrentY = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 37.49
  }),
      animX = _useState3[0],
      setAnimX = _useState3[1];

  var waves = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageLine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageLine2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var waterLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var percentageText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var waveGap = 195;

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

    if (waterLevel.current) {
      waterLevel.current.style.height = minY - value + "px";
      waterLevel.current.style.transform = "translate(51px," + value + "px)";
    }

    if (percentageText.current) {
      percentageText.current.setAttribute("transform", "translate(248 " + (value - 2.5) + ")");
      percentageText.current.innerHTML = percentage + "%";
    }

    document.querySelectorAll(".bubble").forEach(function (el, i) {
      el.setAttribute("cy", value.toString());
      Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
        targets: el,
        cy: value - bubbleConfig[i].y,
        opacity: [{
          value: 1,
          easing: "linear",
          duration: 1500
        }, {
          value: 0,
          easing: "linear",
          duration: 1000
        }],
        loop: true,
        duration: 2000,
        easing: "easeInOutQuad",
        delay: bubbleConfig[i].delay
      });
    });
  }

  Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
    targets: animX,
    x: [10, 75],
    loop: true,
    duration: 4000,
    easing: "easeInOutQuad",
    direction: 'alternate',
    update: function update() {
      if (waves.current) waves.current.setAttribute("transform", "translate(" + animX.x + "," + (currentY - waveGap) + ")");
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var animParam = {
      value: currentValue
    };
    console.log(props.value);
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
    style: {
      width: componentWidth,
      height: componentHeight,
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, ".vlh-pud-svg{" + "position:absolute;" + "pointer-events:none;" + "left:0" + "}"), __jsx("svg", {
    style: {
      height: 0
    },
    className: "vlh-pud-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("filter", {
    id: "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("feGaussianBlur", {
    stdDeviation: "11 11",
    result: "blur",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
    "in": "blur",
    result: "colormatrix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    in2: "colormatrix",
    operator: "atop",
    result: "composite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })))), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "vlh-pud-svg",
    style: {
      width: componentWidth,
      zIndex: 1
    },
    viewBox: "0 0 277.6 273.27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, ".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:" + (props.theme == 1 ? "white" : "black") + ";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path-vlh-pud);}.cls-8-vlh-pud{fill:#18b8d4;}"), __jsx("clipPath", {
    id: "clip-path-vlh-pud",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("path", {
    className: "cls-1-vlh-pud",
    d: "M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Datov\xFD zdroj 39"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_4",
    "data-name": "Vrstva 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("text", {
    id: "Percentage-text",
    ref: percentageText,
    style: {
      fontSize: 12 + "px",
      fill: props.theme == 1 ? "white" : "black",
      fontFamily: "CenturyGothic, Century Gothic"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "50%"), __jsx("polygon", {
    className: "cls-3-vlh-pud",
    points: "38.16 100.94 242.91 100.94 196 261.92 85.08 261.92 38.16 100.94",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("line", {
    className: "cls-4-vlh-pud",
    id: "Percentage-line",
    ref: percentageLine2,
    x1: "140.54",
    y1: "171.72",
    x2: "277.03",
    y2: "171.72",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "140.54",
    y1: "100.94",
    x2: "78.71",
    y2: "121.49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M104.54,30.4V101h-3V32.36l.09-.25c.21-.58.42-1.15.65-1.71Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M104.08,43.66c-.82-.79-1.67-1.55-2.54-2.28A53.92,53.92,0,0,0,30,43.66l-1.12,1.08L30,45.83A53.19,53.19,0,0,0,67,60.58a53.3,53.3,0,0,0,34.51-12.47c.87-.73,1.72-1.49,2.54-2.28l.46-.44V44.1ZM67,57.58a50.25,50.25,0,0,1-33.8-12.84,50.92,50.92,0,0,1,67.61,0A50.26,50.26,0,0,1,67,57.58Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M174,71.75a51.74,51.74,0,0,0-69.42-16.32c-.71.41-1.42.85-2.11,1.3l-.89.58v.8l.46.7c.8,1.22,1.65,2.41,2.54,3.55A51.4,51.4,0,0,0,134.65,81.1a52.31,52.31,0,0,0,10.74,1.12,51.46,51.46,0,0,0,28.13-8.39l1.26-.82Zm-38.69,6.42a48.53,48.53,0,0,1-29.91-19.74,48.72,48.72,0,0,1,65.23,13.7A48.46,48.46,0,0,1,135.27,78.17Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M163.38,2.82a48.37,48.37,0,0,0-61.1,27.58c-.23.56-.44,1.13-.65,1.71l-.09.25v1.32l1,.35c.67.24,1.33.46,2,.66a48.25,48.25,0,0,0,14.23,2.15,48.21,48.21,0,0,0,20.7-4.69A48.13,48.13,0,0,0,164.29,4.74l.51-1.42ZM138.19,29.44A45.11,45.11,0,0,1,105,31.69,45.39,45.39,0,0,1,160.93,5.16,45.14,45.14,0,0,1,138.19,29.44Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx("polyline", {
    className: "cls-5-vlh-pud",
    points: "175.47 136.72 140.54 100.94 130.06 142.65",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "110.93",
    y1: "110.78",
    x2: "116.13",
    y2: "127.94",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "156.22",
    y1: "117",
    x2: "175.47",
    y2: "107.74",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "136.51",
    y1: "117",
    x2: "147.87",
    y2: "129.75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("g", {
    className: "cls-7-vlh-pud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("line", {
    className: "cls-4-vlh-pud",
    id: "Percentage-line",
    ref: percentageLine,
    style: {
      zIndex: 10
    },
    x1: "277.03",
    y1: "171.72",
    x2: "38.16",
    y2: "171.72",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }))))), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "vlh-pud-svg",
    style: {
      filter: "url(#filter)",
      zIndex: 0,
      width: componentWidth
    },
    viewBox: "0 0 277.6 273.27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, ".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:" + (props.theme == 1 ? "white" : "black") + ";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path);}.cls-8-vlh-pud{fill:#18b8d4;}"), __jsx("clipPath", {
    id: "clip-path",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("path", {
    className: "cls-1-vlh-pud",
    d: "M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Datov\xFD zdroj 39"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_4",
    "data-name": "Vrstva 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("g", {
    className: "cls-7-vlh-pud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("path", {
    className: "cls-8-vlh-pud",
    ref: waves,
    id: "waves",
    d: "M-37.49,186.07s21.6-11.18,35.87-9.94c4.86.43,18.05,9.46,56,9.94,18.25.23,11.15-10.47,35.65-6.45,21.14,3.47,37.89,7.81,42.32,7.81,17.23,0,20.75-6.33,27.61-3.17,21.18,9.76,31-2.27,49.3,3.17,17.78,5.28,25.25,1.22,26.32-1.36v87.2h-273Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "143.17",
    cy: "255.18",
    r: bubbleBaseSize + 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "103.17",
    cy: "255.18",
    r: bubbleBaseSize + 2.63,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "183.17",
    cy: "255.18",
    r: bubbleBaseSize + 1.63,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx("rect", {
    id: "water-level",
    ref: waterLevel,
    className: "cls-8-vlh-pud",
    style: {
      transform: "translate(51px, 58px)",
      width: 179 + "px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SoilHumidity);

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
    value: 10,
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
//# sourceMappingURL=[id].js.c4209cbe7aeef3901407.hot-update.js.map