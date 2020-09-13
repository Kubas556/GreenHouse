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
      lineNumber: 113
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, ".vlh-pud-svg{" + "position:absolute;" + "pointer-events:none;" + "left:0" + "}"), __jsx("svg", {
    style: {
      height: 0
    },
    className: "vlh-pud-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("filter", {
    id: "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("feGaussianBlur", {
    stdDeviation: "11 11",
    result: "blur",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
    "in": "blur",
    result: "colormatrix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("feComposite", {
    "in": "SourceGraphic",
    in2: "colormatrix",
    operator: "atop",
    result: "composite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
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
      lineNumber: 133
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, ".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:" + (props.theme == 1 ? "white" : "black") + ";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path-vlh-pud);}.cls-8-vlh-pud{fill:#18b8d4;}"), __jsx("clipPath", {
    id: "clip-path-vlh-pud",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("path", {
    className: "cls-1-vlh-pud",
    d: "M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Datov\xFD zdroj 39"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_4",
    "data-name": "Vrstva 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("text", {
    id: "Percentage-text",
    ref: percentageText,
    style: {
      fontSize: 12 + "px",
      fill: "#fff",
      fontFamily: "CenturyGothic, Century Gothic"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "50%"), __jsx("polygon", {
    className: "cls-3-vlh-pud",
    points: "38.16 100.94 242.91 100.94 196 261.92 85.08 261.92 38.16 100.94",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
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
      lineNumber: 149
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
      lineNumber: 150
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M104.54,30.4V101h-3V32.36l.09-.25c.21-.58.42-1.15.65-1.71Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M104.08,43.66c-.82-.79-1.67-1.55-2.54-2.28A53.92,53.92,0,0,0,30,43.66l-1.12,1.08L30,45.83A53.19,53.19,0,0,0,67,60.58a53.3,53.3,0,0,0,34.51-12.47c.87-.73,1.72-1.49,2.54-2.28l.46-.44V44.1ZM67,57.58a50.25,50.25,0,0,1-33.8-12.84,50.92,50.92,0,0,1,67.61,0A50.26,50.26,0,0,1,67,57.58Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M174,71.75a51.74,51.74,0,0,0-69.42-16.32c-.71.41-1.42.85-2.11,1.3l-.89.58v.8l.46.7c.8,1.22,1.65,2.41,2.54,3.55A51.4,51.4,0,0,0,134.65,81.1a52.31,52.31,0,0,0,10.74,1.12,51.46,51.46,0,0,0,28.13-8.39l1.26-.82Zm-38.69,6.42a48.53,48.53,0,0,1-29.91-19.74,48.72,48.72,0,0,1,65.23,13.7A48.46,48.46,0,0,1,135.27,78.17Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M163.38,2.82a48.37,48.37,0,0,0-61.1,27.58c-.23.56-.44,1.13-.65,1.71l-.09.25v1.32l1,.35c.67.24,1.33.46,2,.66a48.25,48.25,0,0,0,14.23,2.15,48.21,48.21,0,0,0,20.7-4.69A48.13,48.13,0,0,0,164.29,4.74l.51-1.42ZM138.19,29.44A45.11,45.11,0,0,1,105,31.69,45.39,45.39,0,0,1,160.93,5.16,45.14,45.14,0,0,1,138.19,29.44Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("polyline", {
    className: "cls-5-vlh-pud",
    points: "175.47 136.72 140.54 100.94 130.06 142.65",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
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
      lineNumber: 156
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
      lineNumber: 157
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
      lineNumber: 158
    },
    __self: this
  }), __jsx("g", {
    className: "cls-7-vlh-pud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
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
      lineNumber: 160
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
      lineNumber: 163
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, ".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path);}.cls-8-vlh-pud{fill:#18b8d4;}"), __jsx("clipPath", {
    id: "clip-path",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("path", {
    className: "cls-1-vlh-pud",
    d: "M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Datov\xFD zdroj 39"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_4",
    "data-name": "Vrstva 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("g", {
    className: "cls-7-vlh-pud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
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
      lineNumber: 174
    },
    __self: this
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "143.17",
    cy: "255.18",
    r: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "103.17",
    cy: "255.18",
    r: "4.63",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "183.17",
    cy: "255.18",
    r: "5.63",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
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
      lineNumber: 178
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SoilHumidity);

/***/ })

})
//# sourceMappingURL=[id].js.d10dadfe181c73627e3d.hot-update.js.map