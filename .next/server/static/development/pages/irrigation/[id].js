module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AirHumidity.tsx":
/*!************************************!*\
  !*** ./components/AirHumidity.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\AirHumidity.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //@ts-ignore




/*type Props = {
    width:String
}*/
const AirHumidity = props => {
  const componentWidth = 337;
  const componentHeight = 337;
  const minY = 176.4;
  const maxY = 18;
  const {
    0: currentValue,
    1: setCurrentValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value ? props.value : 0);
  const {
    0: currentY,
    1: setCurrentY
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(minY);
  const {
    0: animX1,
    1: setAnimX1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 60.15
  });
  const {
    0: animX2,
    1: setAnimX2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 60.15
  });
  const wave1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const wave2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageLine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageLine2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const waveGap = 125;

  function setValue(val) {
    let value = maxY + (minY - maxY) / 100 * (100 - val);
    let percentage = Math.round(100 - (value - maxY) / (minY - maxY) * 100);
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

  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: animX1,
    x: [60.15, 100],
    direction: 'alternate',
    duration: 7000,
    easing: 'easeInOutQuad',
    loop: true,
    update: function () {
      if (wave2.current) wave2.current.setAttribute("transform", "translate(" + animX1.x + "," + (currentY - waveGap) + ")");
    }
  });
  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: animX2,
    x: [60.15, 30],
    direction: 'alternate',
    duration: 5000,
    easing: 'easeInOutQuad',
    loop: true,
    update: function () {
      if (wave1.current) wave1.current.setAttribute("transform", "translate(" + animX2.x + "," + (currentY - waveGap) + ")");
    }
  });
  /*useEffect(() => {
      setValue(0);
  },[]);*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const animParam = {
      value: currentValue
    };
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: animParam,
      value: props.value ? props.value : 0,
      update: function () {
        setValue(animParam.value);
        setCurrentValue(animParam.value);
      }
    });
  }, [props.value]);
  return __jsx("div", {
    style: {
      width: componentWidth,
      height: componentHeight
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 225.68 211.24",
    style: {
      width: componentWidth
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, ".cls-1-vlh-vz,.cls-7-vlh-vz,.cls-8-vlh-vz{fill:none;}.cls-2-vlh-vz{font-size:12px;fill:" + (props.theme == 1 ? "white" : "black") + ";font-family:CenturyGothic, Century Gothic;}.cls-3-vlh-vz{clip-path:url(#clip-path-vlh-vz);}.cls-4-vlh-vz,.cls-5-vlh-vz,.cls-6-vlh-vz{fill:#18b8d4;}.cls-5-vlh-vz{opacity:0.2;}.cls-6-vlh-vz{opacity:0.4;}.cls-7-vlh-vz,.cls-8-vlh-vz{stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;}.cls-7-vlh-vz{stroke-width:0.25px;}.cls-8-vlh-vz{stroke-opacity:0.49;}"), __jsx("clipPath", {
    id: "clip-path-vlh-vz",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("path", {
    className: "cls-1-vlh-vz",
    d: "M97.89,131.23a45.2,45.2,0,0,1-90.4,0c0-25,45.2-112.92,45.2-112.92S97.89,106.27,97.89,131.23Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Datov\xFD zdroj 34"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("text", {
    className: "cls-2-vlh-vz",
    ref: percentageText,
    transform: "translate(168.67 92.37)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "20%"), __jsx("g", {
    className: "cls-3-vlh-vz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("path", {
    className: "cls-4-vlh-vz",
    ref: percentageLevel,
    d: "M107.87,130V178H-2.5V130Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), __jsx("path", {
    className: "cls-5-vlh-vz",
    ref: wave1,
    d: "M-60.15,119.12C-50,117.26-33.65,115.07-22.6,106c8.67-7.15,39.09,15,64.25,2.33,16.79-8.48,29.88,7.41,49.55-2.71,21.4-11,26.09,9.28,50.31,5.13,13.61-2.33,18-.34,24,8.42v92.12H-60.15Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), __jsx("path", {
    className: "cls-6-vlh-vz",
    ref: wave2,
    d: "M-60.15,130.57c10.16-1.46,18.58-3.63,27.06-13.73,8.21-9.78,26.9,11.07,52.65-.63,19.47-8.84,22.05,5,40.11,1.79,14.11-2.54,31.12-4.79,38.47,1.54s15.27-3.27,21.14-2.38c20.72,3.12,16.17-3,31.36-7.92,13.05-4.26,8.85,14.4,14.89,21.33v73H-60.15Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
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
    __self: undefined
  })), __jsx("path", {
    className: "cls-8-vlh-vz",
    d: "M104.87,131.47a52.19,52.19,0,0,1-104.37,0C.5,102.64,52.69,1.09,52.69,1.09S104.87,102.64,104.87,131.47Z",
    transform: "translate(60.15)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
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
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AirHumidity);

/***/ }),

/***/ "./components/Loading.tsx":
/*!********************************!*\
  !*** ./components/Loading.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\Loading.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Loading() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    animejs__WEBPACK_IMPORTED_MODULE_2___default()({
      targets: ".loadingDot",
      translateY: [{
        value: "-100%",
        duration: 300,
        easing: "easeOutCubic"
      }, {
        value: "0",
        duration: 600,
        easing: "easeOutCubic"
      }],
      direction: 'alternate',
      delay: animejs__WEBPACK_IMPORTED_MODULE_2___default.a.stagger(300, {
        start: 0
      }),
      loop: true
    });
  }, []);
  return __jsx("div", {
    className: "jsx-1376406882" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1376406882" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1376406882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Loading"), __jsx("div", {
    className: "jsx-1376406882" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "."), __jsx("div", {
    className: "jsx-1376406882" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "."), __jsx("div", {
    className: "jsx-1376406882" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, ".")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1376406882",
    __self: this
  }, ".wrap{width:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.wrap>div{font-size:5rem;}.wrap>.loadingDot{width:2rem;height:2rem;position:relative;margin:1rem;border-radius:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcTG9hZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0IyQixBQUd5QixBQVNJLEFBSUosV0FaQyxBQWFBLElBSmIsUUFSbUIsQUFhQSxrQkFaTCxBQWFELFlBQ08sbUJBQ3BCLDJDQWRxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKYWt1YiBTZWRsYWtcXFdlYnN0b3JtUHJvamVjdHNcXHByb2pla3RfQ1AgLSB0eXBlc2NyaXB0XFxjb21wb25lbnRzXFxMb2FkaW5nLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCl7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6XCIubG9hZGluZ0RvdFwiLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTpcIi0xMDAlXCIsZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRDdWJpY1wifSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTpcIjBcIixkdXJhdGlvbjo2MDAsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FsdGVybmF0ZScsXHJcbiAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDMwMCwge3N0YXJ0OiAwfSksXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pO1xyXG5yZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wid3JhcFwifT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ0RvdFwiPi48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nRG90XCI+LjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdEb3RcIj4uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLndyYXB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLndyYXAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC53cmFwID4gLmxvYWRpbmdEb3R7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MnJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46MXJlbTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Loading.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/SoilHumidity.tsx":
/*!*************************************!*\
  !*** ./components/SoilHumidity.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\SoilHumidity.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //@ts-ignore




/*type Props = {
    width:String
}*/
const SoilHumidity = props => {
  const componentWidth = 337;
  const componentHeight = 337;
  const bubbleBaseSize = 7;
  const minY = 251.27;
  const maxY = 113.27;
  const bubbleConfig = [{
    y: 50,
    delay: 1000
  }, {
    y: 40,
    delay: 3000
  }, {
    y: 60,
    delay: 2000
  }];
  const {
    0: currentValue,
    1: setCurrentValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value ? props.value : 0);
  const {
    0: currentY,
    1: setCurrentY
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(minY);
  const {
    0: animX,
    1: setAnimX
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 37.49
  });
  const waves = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageLine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageLine2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const waterLevel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const percentageText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const waveGap = 195;

  function setValue(val) {
    let value = maxY + (minY - maxY) / 100 * (100 - val);
    let percentage = Math.round(100 - (value - maxY) / (minY - maxY) * 100);
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

    document.querySelectorAll(".bubble").forEach((el, i) => {
      el.setAttribute("cy", value.toString());
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
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

  animejs__WEBPACK_IMPORTED_MODULE_1___default()({
    targets: animX,
    x: [10, 75],
    loop: true,
    duration: 4000,
    easing: "easeInOutQuad",
    direction: 'alternate',
    update: function () {
      if (waves.current) waves.current.setAttribute("transform", "translate(" + animX.x + "," + (currentY - waveGap) + ")");
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const animParam = {
      value: currentValue
    };
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: animParam,
      value: props.value ? props.value : 0,
      update: function () {
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
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, ".vlh-pud-svg{" + "position:absolute;" + "pointer-events:none;" + "left:0" + "}"), __jsx("svg", {
    style: {
      height: 0
    },
    className: "vlh-pud-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx("filter", {
    id: "filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("feGaussianBlur", {
    stdDeviation: "11 11",
    result: "blur",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
    in: "blur",
    result: "colormatrix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("feComposite", {
    in: "SourceGraphic",
    in2: "colormatrix",
    operator: "atop",
    result: "composite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
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
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, ".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:" + (props.theme == 1 ? "white" : "black") + ";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path-vlh-pud);}.cls-8-vlh-pud{fill:#18b8d4;}"), __jsx("clipPath", {
    id: "clip-path-vlh-pud",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("path", {
    className: "cls-1-vlh-pud",
    d: "M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Datov\xFD zdroj 39"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("g", {
    id: "Vrstva_4",
    "data-name": "Vrstva 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
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
      lineNumber: 142
    },
    __self: undefined
  }, "50%"), __jsx("polygon", {
    className: "cls-3-vlh-pud",
    points: "38.16 100.94 242.91 100.94 196 261.92 85.08 261.92 38.16 100.94",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
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
      lineNumber: 148
    },
    __self: undefined
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "140.54",
    y1: "100.94",
    x2: "78.71",
    y2: "121.49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M104.54,30.4V101h-3V32.36l.09-.25c.21-.58.42-1.15.65-1.71Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M104.08,43.66c-.82-.79-1.67-1.55-2.54-2.28A53.92,53.92,0,0,0,30,43.66l-1.12,1.08L30,45.83A53.19,53.19,0,0,0,67,60.58a53.3,53.3,0,0,0,34.51-12.47c.87-.73,1.72-1.49,2.54-2.28l.46-.44V44.1ZM67,57.58a50.25,50.25,0,0,1-33.8-12.84,50.92,50.92,0,0,1,67.61,0A50.26,50.26,0,0,1,67,57.58Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M174,71.75a51.74,51.74,0,0,0-69.42-16.32c-.71.41-1.42.85-2.11,1.3l-.89.58v.8l.46.7c.8,1.22,1.65,2.41,2.54,3.55A51.4,51.4,0,0,0,134.65,81.1a52.31,52.31,0,0,0,10.74,1.12,51.46,51.46,0,0,0,28.13-8.39l1.26-.82Zm-38.69,6.42a48.53,48.53,0,0,1-29.91-19.74,48.72,48.72,0,0,1,65.23,13.7A48.46,48.46,0,0,1,135.27,78.17Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx("path", {
    className: "cls-6-vlh-pud",
    d: "M163.38,2.82a48.37,48.37,0,0,0-61.1,27.58c-.23.56-.44,1.13-.65,1.71l-.09.25v1.32l1,.35c.67.24,1.33.46,2,.66a48.25,48.25,0,0,0,14.23,2.15,48.21,48.21,0,0,0,20.7-4.69A48.13,48.13,0,0,0,164.29,4.74l.51-1.42ZM138.19,29.44A45.11,45.11,0,0,1,105,31.69,45.39,45.39,0,0,1,160.93,5.16,45.14,45.14,0,0,1,138.19,29.44Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }), __jsx("polyline", {
    className: "cls-5-vlh-pud",
    points: "175.47 136.72 140.54 100.94 130.06 142.65",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "110.93",
    y1: "110.78",
    x2: "116.13",
    y2: "127.94",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "156.22",
    y1: "117",
    x2: "175.47",
    y2: "107.74",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), __jsx("line", {
    className: "cls-5-vlh-pud",
    x1: "136.51",
    y1: "117",
    x2: "147.87",
    y2: "129.75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }), __jsx("g", {
    className: "cls-7-vlh-pud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
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
      lineNumber: 159
    },
    __self: undefined
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
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, ".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:" + (props.theme == 1 ? "white" : "black") + ";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path);}.cls-8-vlh-pud{fill:#18b8d4;}"), __jsx("clipPath", {
    id: "clip-path",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx("path", {
    className: "cls-1-vlh-pud",
    d: "M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "Datov\xFD zdroj 39"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("g", {
    id: "Vrstva_4",
    "data-name": "Vrstva 4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, __jsx("g", {
    className: "cls-7-vlh-pud",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("path", {
    className: "cls-8-vlh-pud",
    ref: waves,
    id: "waves",
    d: "M-37.49,186.07s21.6-11.18,35.87-9.94c4.86.43,18.05,9.46,56,9.94,18.25.23,11.15-10.47,35.65-6.45,21.14,3.47,37.89,7.81,42.32,7.81,17.23,0,20.75-6.33,27.61-3.17,21.18,9.76,31-2.27,49.3,3.17,17.78,5.28,25.25,1.22,26.32-1.36v87.2h-273Z",
    transform: "translate(37.49)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "143.17",
    cy: "255.18",
    r: bubbleBaseSize + 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "103.17",
    cy: "255.18",
    r: bubbleBaseSize + 2.63,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), __jsx("circle", {
    className: "bubble cls-8-vlh-pud",
    cx: "183.17",
    cy: "255.18",
    r: bubbleBaseSize + 1.63,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
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
      lineNumber: 177
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SoilHumidity);

/***/ }),

/***/ "./components/WithAuth.tsx":
/*!*********************************!*\
  !*** ./components/WithAuth.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./components/Loading.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\WithAuth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const withAuth = Component => {
  return class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: 'LOADING'
      };
    }

    componentDidMount() {
      _firebase_index__WEBPACK_IMPORTED_MODULE_2__["auth"].onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN'
          });
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
        }
      });
    }

    renderContent() {
      // @ts-ignore
      const {
        status
      } = this.state;

      if (status == 'LOADING') {
        return __jsx("div", {
          style: {
            position: "absolute",
            width: "100%",
            height: "100%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }));
      } else if (status == 'SIGNED_IN') {
        // @ts-ignore
        return __jsx(Component, _extends({
          user: _firebase_index__WEBPACK_IMPORTED_MODULE_2__["auth"].currentUser.uid
        }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }));
      }
    }

    render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.renderContent());
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./components/WithDrawerAppBar.tsx":
/*!*****************************************!*\
  !*** ./components/WithDrawerAppBar.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithDrawerAppBar; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/menu */ "@material-ui/icons/menu");
/* harmony import */ var _material_ui_icons_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/VpnKey */ "@material-ui/icons/VpnKey");
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Brightness7 */ "@material-ui/icons/Brightness7");
/* harmony import */ var _material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Brightness4 */ "@material-ui/icons/Brightness4");
/* harmony import */ var _material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var _icons_tempIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/tempIcon */ "./icons/tempIcon.tsx");
/* harmony import */ var _icons_waterCanIconFilled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icons/waterCanIconFilled */ "./icons/waterCanIconFilled.tsx");
/* harmony import */ var _icons_fertilizerIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../icons/fertilizerIcon */ "./icons/fertilizerIcon.tsx");
/* harmony import */ var _material_ui_icons_ShowChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ShowChart */ "@material-ui/icons/ShowChart");
/* harmony import */ var _material_ui_icons_ShowChart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShowChart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\WithDrawerAppBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  avatarIcon: {
    cursor: "pointer"
  },
  grow: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  appBar: {
    background: theme.palette.type == "dark" ? theme.palette.background.paper : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 0
  },
  tabs: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: 240,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1)
  },
  toolbarOffset: _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
function WithDrawerAppBar(props) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["useTheme"])();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const {
    0: avatarOpen,
    1: setAvatarOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);
  const avatarAnchor = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  const devId = props.deviceId;
  const Component = props.component;
  const compProps = props.componentProps;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    _firebase_index__WEBPACK_IMPORTED_MODULE_12__["auth"].signOut().then(function () {
      alert('Logout successful');
    }).catch(function (error) {
      alert('OOps something went wrong check your console');
      console.log(error);
    });
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["AppBar"], {
    position: "fixed",
    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(classes.appBar, {
      [classes.appBarShift]: open
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Toolbar"], {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    onClick: handleDrawerOpen,
    edge: "start",
    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(classes.menuButton, {
      [classes.hide]: open
    }),
    color: "inherit",
    "aria-label": "open drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_material_ui_icons_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.title,
    variant: "h5",
    noWrap: true,
    component: "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, props.title), __jsx("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    onClick: compProps.switchTheme,
    "aria-label": "display more actions",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, compProps.theme === true ? __jsx(_material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }) : __jsx(_material_ui_icons_Brightness4__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), _firebase_index__WEBPACK_IMPORTED_MODULE_12__["auth"].currentUser ? __jsx("div", {
    ref: avatarAnchor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    onClick: () => setAvatarOpen(true),
    className: classes.avatarIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
    open: avatarOpen,
    onClick: () => setAvatarOpen(false),
    anchorEl: avatarAnchor.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    onClick: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Log Out"))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/login"),
    "aria-label": "display more actions",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Drawer"], {
    variant: "permanent",
    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open
    }),
    classes: {
      paper: clsx__WEBPACK_IMPORTED_MODULE_10___default()({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    onClick: handleDrawerClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }) : __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/temperature/" + devId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(_icons_tempIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: "Teplota",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/irrigation/" + devId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_icons_waterCanIconFilled__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: "Zavlažování",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/fertilization",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(_icons_fertilizerIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: "Hnojení",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["List"], {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx(_material_ui_icons_ShowChart__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
    primary: "Statistiky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  })), __jsx("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItem"], {
    style: {
      padding: "2px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
    title: "Zp\u011Bt na list",
    "aria-label": "add",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "contained",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/"),
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }),
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }))))), __jsx("main", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("div", {
    className: classes.toolbarOffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), __jsx(Component, _extends({}, compProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./firebase/index.tsx":
/*!****************************!*\
  !*** ./firebase/index.tsx ***!
  \****************************/
/*! exports provided: auth, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



const config = {
  apiKey: "AIzaSyBjjKTJrHGT6IYaLRTtiuRfRIUt5QWMWYc",
  authDomain: "my-website-c179c.firebaseapp.com",
  databaseURL: "https://my-website-c179c.firebaseio.com",
  projectId: "my-website-c179c",
  storageBucket: "my-website-c179c.appspot.com",
  messagingSenderId: "141034843850"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./icons/fertilizerIcon.tsx":
/*!**********************************!*\
  !*** ./icons/fertilizerIcon.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FertilizerIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\icons\\fertilizerIcon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function FertilizerIcon(props) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["SvgIcon"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("path", {
    d: "M288.38,287.44A21.52,21.52,0,0,0,264,297.73V265.66c2.06-.93,3.84-3.3,5-6.76,4.3,2.12,8,2.18,10.07.12s2-5.75-.14-10c4.53-1.54,7.2-4.12,7.2-7s-2.67-5.46-7.2-7c2.1-4.3,2.17-8,.14-10.07s-5.77-2-10.08.13c-1.53-4.53-4.1-7.2-7-7.2s-5.48,2.67-7,7.2c-4.32-2.1-8-2.17-10.07-.13s-2,5.77.13,10.06c-4.53,1.55-7.2,4.12-7.2,7s2.67,5.48,7.2,7c-2.11,4.29-2.18,8-.13,10s5.76,2,10.05-.12c1.18,3.46,3,5.83,5,6.76v32a21.13,21.13,0,0,0-3.56-4.69,21.49,21.49,0,0,0-20.8-5.57A21.52,21.52,0,0,0,262,313.8a21.52,21.52,0,0,0,26.36-26.36Zm-31.83-30.26-.34-1.22-1.11.62c-3.81,2.14-7.24,2.54-8.74,1s-1.1-4.94,1-8.74l.62-1.11-1.22-.34c-4.27-1.21-6.92-3.31-6.92-5.47s2.65-4.24,6.92-5.45l1.22-.34-.62-1.11c-2.13-3.8-2.54-7.24-1-8.75s4.88-1.13,8.77,1l1.1.62.34-1.22c1.18-4.2,3.32-6.91,5.45-6.91s4.26,2.71,5.44,6.91l.34,1.22,1.1-.62c3.89-2.15,7.26-2.54,8.78-1s1.09,5-1,8.77l-.62,1.11,1.22.34c4.2,1.19,6.91,3.32,6.91,5.44s-2.71,4.27-6.91,5.46l-1.22.34.62,1.11c2.12,3.82,2.52,7.25,1,8.75s-4.89,1.14-8.76-1l-1.11-.62-.34,1.22c-1.09,3.87-3,6.48-4.93,6.87a2.33,2.33,0,0,1-1.05,0C259.52,263.66,257.66,261.1,256.55,257.18Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("path", {
    d: "M269.49,242a7.48,7.48,0,1,1-7.47-7.47A7.48,7.48,0,0,1,269.49,242Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("path", {
    d: "M380.85,145H144.92a422.74,422.74,0,0,0,0,235.93H380.85A422.74,422.74,0,0,0,380.85,145ZM262,329.84c-88.58-4.76-83.83-127.43,0-130C350.59,204.59,345.82,327.28,262,329.84Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("path", {
    d: "M380,132.32H144.05l-7.91-20.56a4.1,4.1,0,0,1,3.83-5.57H384.06a4.1,4.1,0,0,1,3.82,5.57Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("path", {
    d: "M144.05,397.37H380l7.9,20.56a4.1,4.1,0,0,1-3.82,5.57H140a4.1,4.1,0,0,1-3.83-5.57Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}

/***/ }),

/***/ "./icons/tempIcon.tsx":
/*!****************************!*\
  !*** ./icons/tempIcon.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TempIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\icons\\tempIcon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function TempIcon(props) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["SvgIcon"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("path", {
    d: "M341.333,288.593V85.333C341.333,38.205,303.128,0,256,0s-85.333,38.205-85.333,85.333v203.259\r C144.48,312.03,128,346.091,128,384c0,70.693,57.308,128,128,128s128-57.307,128-128C384,346.091,367.52,312.03,341.333,288.593z\r M256,469.333c-47.128,0-85.333-38.205-85.333-85.333c0-24.637,10.441-47.492,28.455-63.615l14.212-12.72V85.333\r c0-23.564,19.103-42.667,42.667-42.667s42.667,19.102,42.667,42.667v222.332l14.212,12.72\r c18.014,16.123,28.455,38.977,28.455,63.615C341.333,431.128,303.128,469.333,256,469.333z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("rect", {
    x: "234.667",
    y: "170.667",
    width: "42.667",
    height: "256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("circle", {
    cx: "256",
    cy: "384",
    r: "64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
}

/***/ }),

/***/ "./icons/waterCanIconFilled.tsx":
/*!**************************************!*\
  !*** ./icons/waterCanIconFilled.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaterCanIconFilled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\icons\\waterCanIconFilled.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function WaterCanIconFilled(props) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["SvgIcon"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("path", {
    d: "M498,242.91c0,38.87-10,68.46-29.74,88-15.81,15.62-37.8,24.72-65.51,27.12V333c20.74-2.14,36.86-8.79,48-19.84,14.84-14.65,22.36-38.29,22.36-70.27,0-24.7-3.2-59.76-18.41-86.54-14.53-25.58-36.62-38-67.53-38-34.23,0-73.61,14.61-81.68,54.51H280.32a86,86,0,0,1,31.47-55.16c19.26-15.61,46-24.2,75.42-24.2,39.52,0,70.34,17.49,89.14,50.59C494.24,175.6,498,215.22,498,242.91Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("path", {
    d: "M393.87,213.89V401a17.51,17.51,0,0,1-17.5,17.49H205.22A17.51,17.51,0,0,1,187.73,401V339.76L99.31,254l-28.1-28.1L104.09,193l83.64,81.09V213.89a32.17,32.17,0,0,1,32.14-32.15H361.73A32.18,32.18,0,0,1,393.87,213.89Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("polygon", {
    points: "96.83 181.47 59.86 218.44 14 199.27 77.65 135.62 96.83 181.47",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (true) {
      var rewriteUrlForNextExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js").rewriteUrlForNextExport;

      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = rewriteUrlForNextExport(props.href);
      }
    }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');

  if (path) {
    path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

    if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  }

  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (true) {
      const rewriteUrlForNextExport = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js").rewriteUrlForNextExport;

      return rewriteUrlForNextExport(url);
    } else {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (true) {
        const rewriteUrlForNextExport = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js").rewriteUrlForNextExport; // @ts-ignore this is temporarily global (attached to window)


        if (__NEXT_DATA__.nextExport) {
          as = rewriteUrlForNextExport(as);
        }
      }

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/irrigation/[id].tsx":
/*!***********************************!*\
  !*** ./pages/irrigation/[id].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WithAuth */ "./components/WithAuth.tsx");
/* harmony import */ var _components_WithDrawerAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WithDrawerAppBar */ "./components/WithDrawerAppBar.tsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase/index */ "./firebase/index.tsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SoilHumidity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SoilHumidity */ "./components/SoilHumidity.tsx");
/* harmony import */ var _components_AirHumidity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/AirHumidity */ "./components/AirHumidity.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\irrigation\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
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
}));

function Id(props) {
  const classes = useStyle();
  const {
    0: soilHumidity,
    1: setSoilHumidity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: airHumidity,
    1: setAirHumidity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: airHumidityHistoryCharData,
    1: setAirHumidityHistoryCharData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: aitHumidityHistoryCharLabels,
    1: setAirHumidityHistoryCharLabels
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: defTemp,
    1: setDefTemp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const timeFormat = 'MM/DD/YYYY HH:mm';
  let soilHumidityData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/soilHumidity");
  let airHumidityData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/airHumidity");
  let humidityHistoryData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/history/airHumidity"); //let targetTempData = firebase.database().ref("/users/"+props.user+"/devices/"+id+"/targetTemp");

  const termostatChange = value => {
    _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp").set(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    soilHumidityData.on('value', data => {
      setSoilHumidity(data.val());
    });
    airHumidityData.on('value', data => {
      setAirHumidity(data.val());
    });
    humidityHistoryData.on('value', data => {
      let charData = [];
      let charLabels = [];
      Object.keys(data.val()).forEach(key => {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_components_SoilHumidity__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_components_AirHumidity__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__["Line"], {
    height: 200,
    data: {
      labels: aitHumidityHistoryCharLabels,
      datasets: [{
        label: 'value',
        data: airHumidityHistoryCharData,
        backgroundColor: function (context) {
          let gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  let nameData = _firebase_index__WEBPACK_IMPORTED_MODULE_6__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/name");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    nameData.on('value', data => {
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
      lineNumber: 171
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(ex2));

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/irrigation/[id].tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jakub Sedlak\WebstormProjects\projekt_CP - typescript\pages\irrigation\[id].tsx */"./pages/irrigation/[id].tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/Brightness4":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Brightness4" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brightness4");

/***/ }),

/***/ "@material-ui/icons/Brightness7":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Brightness7" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brightness7");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/ShowChart":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ShowChart" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShowChart");

/***/ }),

/***/ "@material-ui/icons/VpnKey":
/*!********************************************!*\
  !*** external "@material-ui/icons/VpnKey" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VpnKey");

/***/ }),

/***/ "@material-ui/icons/menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/menu");

/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map