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

/***/ "./components/Tempmeter.tsx":
/*!**********************************!*\
  !*** ./components/Tempmeter.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\Tempmeter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Tempmeter(props) {
  const maxHeight = 8;
  const minHeight = 215;
  const height = minHeight - maxHeight;
  const maxTemp = 50;
  const minTemp = -50; //const range = Math.abs(minTemp)+maxTemp;

  let temp = props.temp;
  let rangeVal = temp >= 0 ? 50 / maxTemp * temp + 50 : 50 - 50 / Math.abs(minTemp) * Math.abs(temp);
  let y = height - (height / 100 * rangeVal - 8);
  const text = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const tempValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const textLine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const water = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const duration = 5000;
  const easing = "spring(1, 82, 12, 0)";
  const {
    0: prevText,
    1: setPrevtext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(minTemp);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var textAnim = {
      text: prevText
    };
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: textAnim,
      text: temp,
      duration: duration,
      easing: easing,
      round: 1,
      update: function () {
        if (text.current) text.current.innerHTML = textAnim.text + "°C";
      },
      complete: function (anim) {
        setPrevtext(temp);
      }
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: tempValue.current,
      y2: y,
      duration: duration,
      easing: easing,
      update: function () {}
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: textLine.current,
      y2: y,
      y1: y,
      duration: duration,
      easing: easing,
      update: function () {}
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: text.current,
      transform: "translate(55.59 " + (y - 2.77) + ")",
      duration: duration,
      easing: easing,
      update: function () {}
    });
    animejs__WEBPACK_IMPORTED_MODULE_1___default()({
      targets: water.current,
      d: "M 0.14 16.09 C 0.14 16.09 21.14 20.25 22.49 12.8 C 23.84 5.35 17.37 0.13 9.87 0.13 C 2.37 0.13 0.14 16.09 0.14 16.09 Z",
      duration: 1000,
      easing: 'linear',
      direction: 'alternate',
      loop: true
    });
  }, [props.temp]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100",
    viewBox: "0 0 83.45 252.84",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, ".cls-1,.cls-3,.cls-5{fill:none;stroke-miterlimit:10;}.cls-1{stroke:#4950f5;stroke-linecap:round;stroke-width:7px;}.cls-2{fill:#4950f5;}.cls-3,.cls-5{stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-width:0.25px;}.cls-4{font - size:12px;fill:" + (props.theme == 1 ? "white" : "black") + ";font-family:CenturyGothic, Century Gothic;}.cls-5{stroke - dasharray:0.99 0.99;}")), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Datov\xFD zdroj 27"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("line", {
    ref: tempValue,
    className: "cls-1",
    x1: "39.07",
    y1: "236.19",
    x2: "39.07",
    y2: minHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("circle", {
    className: "cls-2",
    cx: "39.07",
    cy: "236.19",
    r: "12.65",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("line", {
    className: "cls-3",
    x1: "31.85",
    y1: "214.27",
    x2: "6.31",
    y2: "214.27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("text", {
    className: "cls-4",
    transform: "translate(6.31 211.27)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "-50"), __jsx("text", {
    className: "cls-4",
    transform: "translate(0 10.31)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "50"), __jsx("path", {
    className: "cls-3",
    d: "M31.85,221.33a16.53,16.53,0,1,0,14.45,0v-7.07",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("path", {
    className: "cls-3",
    d: "M0,13.31H29.77a2.08,2.08,0,0,1,2.08,2.08V221.33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("line", {
    ref: textLine,
    className: "cls-3",
    x1: "82.82",
    y1: minHeight,
    x2: "39.07",
    y2: minHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("text", {
    ref: text,
    className: "cls-4",
    transform: "translate(55.59 " + (minHeight - 2.77) + ")",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "20\xB0C"), __jsx("text", {
    className: "cls-4",
    transform: "translate(6.3 110.81)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "0"), __jsx("line", {
    className: "cls-3",
    x1: "6.31",
    y1: "113.81",
    x2: "31.85",
    y2: "113.81",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("line", {
    className: "cls-3",
    x1: "45.66",
    y1: "113.81",
    x2: "45.16",
    y2: "113.81",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx("line", {
    className: "cls-5",
    x1: "44.18",
    y1: "113.81",
    x2: "32.85",
    y2: "113.81",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("line", {
    className: "cls-3",
    x1: "32.35",
    y1: "113.81",
    x2: "31.85",
    y2: "113.81",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tempmeter);

/***/ }),

/***/ "./components/Termostat.tsx":
/*!**********************************!*\
  !*** ./components/Termostat.tsx ***!
  \**********************************/
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
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\Termostat.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Termostat(props) {
  const min = 0;
  const max = 50;
  const componentWidth = 337;
  const componentHeight = 337;
  const minAngle = 0;
  const maxAngle = 270;
  const angleOverlap = -(maxAngle - 180) / 2;
  const lineSegCount = 25; //11;

  const valueLineSegCount = 16 * 2 + 1;
  const valueLineSegBigEach = 8;
  const theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])(); // @ts-ignore

  const handleColor = theme.palette.primary.main;
  const lines = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const valueInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const hand = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const handle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: containers,
    1: setContainers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: lastNode,
    1: setLastNode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: lastNodeAngle,
    1: setLastNodeAngle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: angleTrans,
    1: setAngleTrans
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: currentAngle,
    1: setCurrentAngle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: handAngle,
    1: setHandAngle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: currentValue,
    1: setCurrentValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: drag,
    1: setDrag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: initialize,
    1: setInitialize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const workspaceSize = {
    height: componentHeight + "px",
    width: componentWidth + "px"
  };
  const linesSize = {
    width: componentWidth + "px"
  };
  const lineContainerSizes = {
    width: componentWidth / 2 + "px"
  };
  const handPathSize = {
    width: componentWidth / 3 + "px",
    height: componentHeight / 3 + "px"
  };
  const handSize = {
    width: componentWidth / 2 + "px"
  };
  const handleSize = {
    right: componentWidth / 2 / 3 + "px"
  };
  const handPathCircle = {
    circleRadius: 2 * Math.PI * 80.6,
    transform: "rotate(" + angleOverlap + "deg)",
    maxRadius: 2 * Math.PI * 80.6 - 2 * Math.PI * 80.6 / 360 * maxAngle
  };

  function inputUpdated(e) {
    let val = Number.parseInt(e.target.innerHTML);
    setCurrentValue(val);
    setCurrentAngle(maxAngle / max * val + angleOverlap);
  }

  function onMove(e) {
    if (drag) {
      let angle = Math.atan2(e.nativeEvent.offsetY - componentHeight / 2, e.nativeEvent.offsetX - componentWidth / 2);
      let angle2 = angle * (180 / Math.PI); //to 360 range

      if (angle2 < 0) {
        angle2 = 360 - -angle2;
      } //set 0 angle


      angle2 += 180; //corect angle

      if (angle2 > 360) angle2 -= 360;
      angle2 = 270 - angle2;
      if (angle2 < 0) angle2 = -(angle2 - angleOverlap);else angle2 = -(angle2 - 270 - 45);

      if (angle2 >= minAngle && angle2 <= maxAngle) {
        setCurrentValue(Math.round(max / maxAngle * angle2));
        setAngleTrans(angle2 + angleOverlap);
        setHandAngle(angle2 + angleOverlap);
      }
    }
  }

  function onDrag(e) {
    if (!drag) {
      setDrag(true);
      if (handle.current) handle.current.style.pointerEvents = "none";
    }
  }

  function onDragEnd(e) {
    if (drag) {
      setDrag(false);
      if (handle.current) handle.current.style.pointerEvents = "all";
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (containers) {
      let angle = Math.round(handAngle);

      if (angle <= maxAngle && angle >= minAngle + angleOverlap) {
        for (let i = 0; i < containers.length; i++) {
          let containerAngle = parseInt(containers[i].getAttribute('rotate'));

          if (containerAngle > lastNodeAngle && containerAngle <= angle || containerAngle < lastNodeAngle && angle <= containerAngle) {
            animejs__WEBPACK_IMPORTED_MODULE_2___default()({
              targets: lastNode,
              scale: [{
                value: 1,
                easing: 'easeInOutQuad',
                duration: 500
              }],
              delay: 0
            });
            animejs__WEBPACK_IMPORTED_MODULE_2___default()({
              targets: containers[i].childNodes[0],
              scale: [{
                value: 1.5,
                easing: 'easeOutSine',
                duration: 500
              }],
              delay: 0
            });
            setLastNode(containers[i].childNodes[0]);
            setLastNodeAngle(containerAngle);
            break;
          }
        }

        ;
        if (hand.current) hand.current.style.transform = "rotate(" + angle + "deg)";
      }
    }
  }, [handAngle]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let anim = {
      value: angleTrans
    };
    animejs__WEBPACK_IMPORTED_MODULE_2___default()({
      targets: anim,
      value: currentAngle,
      easing: "linear",
      duration: 500,
      update: function () {
        //updateHandAngle(anim.value);
        setHandAngle(anim.value);
      },
      complete: () => {
        setAngleTrans(currentAngle);
      }
    });
  }, [currentAngle]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (valueInput.current) valueInput.current.innerHTML = currentValue.toString();
    if (!initialize) props.onValueChanged(currentValue.toString());
  }, [currentValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let initValue = props.defaultValue;

    if (initValue != undefined) {
      let k = 0;

      for (let i = 0; i < valueLineSegCount; i++) {
        let handAngle = Math.round(maxAngle / max * k) + angleOverlap;
        let line = '<div style="transform:rotate(' + handAngle + 'deg)!important;width:' + lineContainerSizes.width + ';" class="valueLineContainer">' + '<div class="valueLineGroup">' + '<div class=' + (i % valueLineSegBigEach == 0 ? "bigValueLine" : "smallValueLine") + '></div>' + '<div class="value" style="transform:rotate(' + -handAngle + 'deg)">' + (i % valueLineSegBigEach == 0 ? Math.round(k) : "") + '</div>' + '</div>' + '</div>';
        if (lines.current) lines.current.innerHTML += line;
        k += max / (valueLineSegCount - 1);
      }

      let j = 0;

      for (let i = 0; i < lineSegCount; i++) {
        let handAngle = Math.round(maxAngle / max * j) + angleOverlap;
        let line = '<div rotate=' + handAngle + ' style="transform:rotate(' + handAngle + 'deg)!important;width:' + lineContainerSizes.width + ';" class="lineContainer">' + '<div class="line"></div>' + '</div>';
        if (lines.current) lines.current.innerHTML += line;
        j += max / (lineSegCount - 1);
      }

      let contData = document.getElementsByClassName('lineContainer');
      let initlastNode = contData[0].childNodes[0];
      let initLastNodeAngle = 0;
      animejs__WEBPACK_IMPORTED_MODULE_2___default()({
        targets: contData[0].childNodes[0],
        scale: [{
          value: 1.5,
          easing: 'easeOutSine',
          duration: 500
        }],
        delay: 0
      });
      let lineSegs = document.getElementsByClassName("line");
      const first = [73, 80, 245];
      const second = [244, 67, 54];

      for (let i = 0; i < lineSegs.length; i++) {
        var percent = i / (lineSegs.length - 1);
        var red = first[0] + percent * (second[0] - first[0]);
        var green = first[1] + percent * (second[1] - first[1]);
        var blue = first[2] + percent * (second[2] - first[2]);
        lineSegs[i].setAttribute("style", "background:" + "rgb(" + red + "," + green + "," + blue + ");");
      }

      ;
      setContainers(contData);

      const updateHandAngle = angle => {
        angle = Math.round(angle);

        if (angle <= maxAngle && angle >= minAngle) {
          for (let i = 0; i < contData.length; i++) {
            let containerAngle = parseInt(contData[i].getAttribute('rotate'));

            if (containerAngle > initLastNodeAngle && containerAngle <= angle || containerAngle < initLastNodeAngle && angle <= containerAngle) {
              animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                targets: initlastNode,
                scale: [{
                  value: 1,
                  easing: 'easeInOutQuad',
                  duration: 500
                }],
                delay: 0
              });
              animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                targets: contData[i].childNodes[0],
                scale: [{
                  value: 1.5,
                  easing: 'easeOutSine',
                  duration: 500
                }],
                delay: 0
              });
              initlastNode = contData[i].childNodes[0];
              initLastNodeAngle = containerAngle;
              break;
            }
          }

          ; //document.getElementById("hand").style.transform="rotate("+(angle)+"deg)";
        }
      };

      let initAngleTrans = {
        value: 0
      };
      animejs__WEBPACK_IMPORTED_MODULE_2___default()({
        targets: initAngleTrans,
        value: maxAngle / max * initValue,
        easing: "linear",
        duration: 500,
        update: function () {
          updateHandAngle(initAngleTrans.value);
        },
        complete: function () {
          setLastNode(initlastNode);
          setLastNodeAngle(initLastNodeAngle);

          if (initValue != undefined) {
            setCurrentValue(initValue);
            setCurrentAngle(maxAngle / max * initValue + angleOverlap);
          }

          setInitialize(false);
        }
      });
    }
  }, [props.defaultValue]);
  return __jsx("div", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("div", {
    id: "work",
    onMouseMove: onMove,
    onMouseUp: onDragEnd,
    style: workspaceSize,
    className: "jsx-1771400329" + " " + "workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx("svg", {
    id: "handPath",
    style: handPathSize,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 161.45 161.45",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:3px;}")), __jsx("title", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("circle", {
    cx: "80.73",
    cy: "80.73",
    r: "80.6",
    style: {
      transform: handPathCircle.transform,
      transformOrigin: "center"
    },
    strokeDasharray: handPathCircle.circleRadius,
    strokeDashoffset: handPathCircle.maxRadius,
    className: "jsx-1771400329" + " " + "pathcircle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    style: linesSize,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    style: handSize,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx("svg", {
    ref: handle,
    onMouseDown: onDrag,
    id: "handle",
    style: handleSize,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26.04 26.04",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, ".handle{fill:" + handleColor + "}")), __jsx("title", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-1771400329" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-1771400329" + " " + "valueGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("span", {
    ref: valueInput,
    style: {
      pointerEvents: "all"
    },
    onBlur: inputUpdated,
    contentEditable: true,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "\xB0C")))), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, ".smallValueLine,.bigValueLine{background:" + (props.theme == 1 ? "white" : "black") + "}"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1771400329",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}.workspace .valueGroup{position:absolute;margin:0px;margin-top:50%;margin-left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:2rem;}#lines,#handPath,.lineContainer,.valueLineContainer,.valueGroup{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer,.valueLineContainer{height:0;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:2rem;margin-left:0.5rem;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.smallValueLine{height:2px;width:0.5rem;margin-left:3.5rem;opacity:0.2;}.bigValueLine{height:2px;width:1rem;margin-left:3.5rem;opacity:0.2;}.valueLineGroup{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.value{margin-left:0.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%)rotate(180deg);-ms-transform:translate(-50%,-50%)rotate(180deg);transform:translate(-50%,-50%)rotate(180deg);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:50%;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0VStCLEFBRzZDLEFBUVIsQUFRRSxBQUlWLEFBSU8sQUFPVCxBQVFFLEFBTUMsQUFNQSxBQU1FLEFBS08sQUFLVCxBQUtHLEFBUUYsU0FoREssRUFYTixBQW1CRCxBQU1HLEFBTUYsQUFnQmtDLElBSy9CLENBdEVILEVBTUEsQUFnQkQsQ0FzQ1osQ0E5Q2tCLEVBd0JFLEFBWUMsQ0EvQnJCLENBeUJxQixHQWRQLENBN0JLLENBTUYsQUFpQkQsQ0ErQ2dCLE9BeERoQyxJQXdCZ0MsQUFZbkIsRUFOQSxDQXJDSyxBQWlCbEIsRUF2Qm9CLEdBNEVSLElBMUJaLEVBTkEsS0FyQ2tDLEFBc0VyQixLQTVFYixPQTZFK0IsRUF6QlYsMkJBeEJELCtCQXlDRCxXQWhDbkIsQUFnQnFCLE9Ba0JYLFFBUlUsQ0FTcEIsTUFqRWlCLFNBdUVMLEVBZFosSUF4REEsSUF1RW1CLFVBbERDLFFBbURwQixrQ0ExQkEsMkJBeEJnQyxzR0FDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxKYWt1YiBTZWRsYWtcXFdlYnN0b3JtUHJvamVjdHNcXHByb2pla3RfQ1AgLSB0eXBlc2NyaXB0XFxjb21wb25lbnRzXFxUZXJtb3N0YXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLE1vdXNlRXZlbnQsU3ludGhldGljRXZlbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IHtmaXJlYmFzZX0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBJVGVybW9zdGF0IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lUZXJtb3N0YXRcIjtcclxuaW1wb3J0IHtudW1iZXJ9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7dXNlVGhlbWV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IDMzNztcclxuICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IDMzNztcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMjcwO1xyXG4gICAgY29uc3QgYW5nbGVPdmVybGFwID0gLShtYXhBbmdsZS0xODApLzI7XHJcbiAgICBjb25zdCBsaW5lU2VnQ291bnQgPSAyNS8vMTE7XHJcbiAgICBjb25zdCB2YWx1ZUxpbmVTZWdDb3VudCA9ICgxNioyKSsxO1xyXG4gICAgY29uc3QgdmFsdWVMaW5lU2VnQmlnRWFjaCA9IDg7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCBoYW5kbGVDb2xvciA9IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluO1xyXG5cclxuICAgIGNvbnN0IGxpbmVzID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IHZhbHVlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBoYW5kID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZSA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbY29udGFpbmVycyxzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlPEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4+KCk7XHJcblxyXG4gICAgY29uc3QgW2xhc3ROb2RlLHNldExhc3ROb2RlXSA9IHVzZVN0YXRlPENoaWxkTm9kZT4oKTtcclxuICAgIGNvbnN0IFtsYXN0Tm9kZUFuZ2xlLHNldExhc3ROb2RlQW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFthbmdsZVRyYW5zLHNldEFuZ2xlVHJhbnNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50QW5nbGUsc2V0Q3VycmVudEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbaGFuZEFuZ2xlLHNldEhhbmRBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRWYWx1ZSxzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtkcmFnLHNldERyYWddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2luaXRpYWxpemUsc2V0SW5pdGlhbGl6ZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBjb25zdCB3b3Jrc3BhY2VTaXplID0ge1xyXG4gICAgICAgIGhlaWdodDpjb21wb25lbnRIZWlnaHQrXCJweFwiLFxyXG4gICAgICAgIHdpZHRoOmNvbXBvbmVudFdpZHRoK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5lc1NpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6Y29tcG9uZW50V2lkdGgrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDb250YWluZXJTaXplcyA9IHtcclxuICAgICAgICB3aWR0aDogY29tcG9uZW50V2lkdGgvMitcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZFBhdGhTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8zK1wicHhcIixcclxuICAgICAgICBoZWlnaHQ6IGNvbXBvbmVudEhlaWdodC8zK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogY29tcG9uZW50V2lkdGgvMitcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2l6ZSA9IHtcclxuICAgICAgICByaWdodDogKGNvbXBvbmVudFdpZHRoLzIpLzMrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRQYXRoQ2lyY2xlID0ge1xyXG4gICAgICAgIGNpcmNsZVJhZGl1czoyKk1hdGguUEkqODAuNixcclxuICAgICAgICB0cmFuc2Zvcm06XCJyb3RhdGUoXCIrYW5nbGVPdmVybGFwK1wiZGVnKVwiLFxyXG4gICAgICAgIG1heFJhZGl1czooMipNYXRoLlBJKjgwLjYpLSgoKDIqTWF0aC5QSSo4MC42KS8zNjApKm1heEFuZ2xlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbnB1dFVwZGF0ZWQoZTphbnkpe1xyXG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICBzZXRDdXJyZW50VmFsdWUodmFsKTtcclxuICAgICAgICBzZXRDdXJyZW50QW5nbGUoKCgobWF4QW5nbGUpL21heCkqdmFsKSsoYW5nbGVPdmVybGFwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZS5uYXRpdmVFdmVudC5vZmZzZXRZLShjb21wb25lbnRIZWlnaHQvMiksIGUubmF0aXZlRXZlbnQub2Zmc2V0WC0oY29tcG9uZW50V2lkdGgvMikpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUyID0gYW5nbGUgKiAoMTgwL01hdGguUEkpO1xyXG4gICAgICAgICAgICAvL3RvIDM2MCByYW5nZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPCAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAzNjAtKC1hbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2V0IDAgYW5nbGVcclxuICAgICAgICAgICAgYW5nbGUyKz0gMTgwO1xyXG4gICAgICAgICAgICAvL2NvcmVjdCBhbmdsZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPiAzNjApXHJcbiAgICAgICAgICAgICAgICBhbmdsZTItPTM2MFxyXG5cclxuICAgICAgICAgICAgYW5nbGUyPSgyNzAtYW5nbGUyKTtcclxuICAgICAgICAgICAgaWYoYW5nbGUyIDwgMClcclxuICAgICAgICAgICAgICAgIGFuZ2xlMj0tKGFuZ2xlMi1hbmdsZU92ZXJsYXApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBhbmdsZTI9LShhbmdsZTItMjcwLTQ1KTtcclxuXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+PSAobWluQW5nbGUpICYmIGFuZ2xlMiA8PSAobWF4QW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoTWF0aC5yb3VuZCgoKG1heCAvIG1heEFuZ2xlKSAqIGFuZ2xlMikpKTtcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoYW5nbGUyK2FuZ2xlT3ZlcmxhcCk7XHJcbiAgICAgICAgICAgICAgICBzZXRIYW5kQW5nbGUoYW5nbGUyK2FuZ2xlT3ZlcmxhcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoIWRyYWcpIHtcclxuICAgICAgICAgICAgc2V0RHJhZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYoaGFuZGxlLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGhhbmRsZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRyYWdFbmQoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgc2V0RHJhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5yb3VuZChoYW5kQW5nbGUpO1xyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPD0gKG1heEFuZ2xlKSAmJiBhbmdsZSA+PSAobWluQW5nbGUrYW5nbGVPdmVybGFwKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnRhaW5lcnNbaV0uZ2V0QXR0cmlidXRlKCdyb3RhdGUnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyQW5nbGUgPiBsYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBsYXN0Tm9kZUFuZ2xlICYmIGFuZ2xlIDw9IGNvbnRhaW5lckFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBsYXN0Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnRhaW5lcnNbaV0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlKGNvbnRhaW5lcnNbaV0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlQW5nbGUoY29udGFpbmVyQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgaWYoaGFuZC5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgaGFuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgYW5nbGUgKyBcImRlZylcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW2hhbmRBbmdsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBhbmltID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTphbmdsZVRyYW5zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOmFuaW0sXHJcbiAgICAgICAgICAgIHZhbHVlOihjdXJyZW50QW5nbGUpLFxyXG4gICAgICAgICAgICBlYXNpbmc6XCJsaW5lYXJcIixcclxuICAgICAgICAgICAgZHVyYXRpb246NTAwLFxyXG4gICAgICAgICAgICB1cGRhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlSGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTooKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhjdXJyZW50QW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtjdXJyZW50QW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih2YWx1ZUlucHV0LmN1cnJlbnQpXHJcbiAgICAgICAgdmFsdWVJbnB1dC5jdXJyZW50LmlubmVySFRNTCA9IGN1cnJlbnRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKCFpbml0aWFsaXplKVxyXG4gICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH0sW2N1cnJlbnRWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbml0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlTGluZVNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBrKSthbmdsZU92ZXJsYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICc8ZGl2IHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgaGFuZEFuZ2xlICsgJ2RlZykhaW1wb3J0YW50O3dpZHRoOicrKGxpbmVDb250YWluZXJTaXplcy53aWR0aCkrJztcIiBjbGFzcz1cInZhbHVlTGluZUNvbnRhaW5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidmFsdWVMaW5lR3JvdXBcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz0nKygoaSV2YWx1ZUxpbmVTZWdCaWdFYWNoPT0wKT9cImJpZ1ZhbHVlTGluZVwiOlwic21hbGxWYWx1ZUxpbmVcIikrJz48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInZhbHVlXCIgc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKCcgKyAtaGFuZEFuZ2xlICsgJ2RlZylcIj4nKygoaSV2YWx1ZUxpbmVTZWdCaWdFYWNoPT0wKT9NYXRoLnJvdW5kKGspOlwiXCIpKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lcy5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLmN1cnJlbnQuaW5uZXJIVE1MICs9IGxpbmU7XHJcbiAgICAgICAgICAgICAgICBrICs9IG1heCAvICh2YWx1ZUxpbmVTZWdDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBqKSthbmdsZU92ZXJsYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICc8ZGl2IHJvdGF0ZT0nICsgaGFuZEFuZ2xlICsgJyBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoJyArIGhhbmRBbmdsZSArICdkZWcpIWltcG9ydGFudDt3aWR0aDonKyhsaW5lQ29udGFpbmVyU2l6ZXMud2lkdGgpKyc7XCIgY2xhc3M9XCJsaW5lQ29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZXMuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICBsaW5lcy5jdXJyZW50LmlubmVySFRNTCArPSBsaW5lO1xyXG4gICAgICAgICAgICAgICAgaiArPSBtYXggLyAobGluZVNlZ0NvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb250RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmVDb250YWluZXInKTtcclxuICAgICAgICAgICAgbGV0IGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBpbml0TGFzdE5vZGVBbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVTZWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gWzczLCA4MCwgMjQ1XTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gWzI0NCwgNjcsIDU0XTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKChpKSAvIChsaW5lU2Vncy5sZW5ndGggLSAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZCA9IGZpcnN0WzBdICsgcGVyY2VudCAqIChzZWNvbmRbMF0gLSBmaXJzdFswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JlZW4gPSBmaXJzdFsxXSArIHBlcmNlbnQgKiAoc2Vjb25kWzFdIC0gZmlyc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsdWUgPSBmaXJzdFsyXSArIHBlcmNlbnQgKiAoc2Vjb25kWzJdIC0gZmlyc3RbMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpbmVTZWdzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDpcIiArIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKTtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29udGFpbmVycyhjb250RGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUhhbmRBbmdsZSA9IChhbmdsZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IE1hdGgucm91bmQoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbmdsZSA8PSBtYXhBbmdsZSAmJiBhbmdsZSA+PSBtaW5BbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udERhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnREYXRhW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBpbml0TGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0bGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbaV0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhW2ldLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0TGFzdE5vZGVBbmdsZSA9IGNvbnRhaW5lckFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFuZFwiKS5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoXCIrKGFuZ2xlKStcImRlZylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0QW5nbGVUcmFucyA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRBbmdsZVRyYW5zLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYW5kQW5nbGUoaW5pdEFuZ2xlVHJhbnMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoaW5pdGxhc3ROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGluaXRMYXN0Tm9kZUFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKGluaXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBbmdsZSgoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSkrYW5nbGVPdmVybGFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluaXRpYWxpemUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFtwcm9wcy5kZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIndvcmtcIiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBvbk1vdXNlVXA9e29uRHJhZ0VuZH0gc3R5bGU9e3dvcmtzcGFjZVNpemV9IGNsYXNzTmFtZT1cIndvcmtzcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cImhhbmRQYXRoXCIgc3R5bGU9e2hhbmRQYXRoU2l6ZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYxLjQ1IDE2MS40NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLnBhdGhjaXJjbGV7ZmlsbDpub25lO3N0cm9rZTpcIisocHJvcHMudGhlbWU9PTE/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLW9wYWNpdHk6MC4wODtzdHJva2Utd2lkdGg6M3B4O31cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGF0b3bDvSB6ZHJvaiAyMjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cInBhdGhjaXJjbGVcIiBjeD1cIjgwLjczXCIgY3k9XCI4MC43M1wiIHI9XCI4MC42XCIgc3R5bGU9e3t0cmFuc2Zvcm06aGFuZFBhdGhDaXJjbGUudHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbjpcImNlbnRlclwifX0gc3Ryb2tlRGFzaGFycmF5PXtoYW5kUGF0aENpcmNsZS5jaXJjbGVSYWRpdXN9IHN0cm9rZURhc2hvZmZzZXQ9e2hhbmRQYXRoQ2lyY2xlLm1heFJhZGl1c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bGluZXN9IGlkPVwibGluZXNcIiBzdHlsZT17bGluZXNTaXplfT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2hhbmR9IGlkPVwiaGFuZFwiIHN0eWxlPXtoYW5kU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyByZWY9e2hhbmRsZX0gb25Nb3VzZURvd249e29uRHJhZ30gaWQ9XCJoYW5kbGVcIiBzdHlsZT17aGFuZGxlU2l6ZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjYuMDQgMjYuMDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLmhhbmRsZXtmaWxsOlwiK2hhbmRsZUNvbG9yK1wifVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJoYW5kbGVcIiBjeD1cIjEzLjAyXCIgY3k9XCIxMy4wMlwiIHI9XCIxMy4wMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ2YWx1ZUdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHJlZj17dmFsdWVJbnB1dH0gc3R5bGU9e3twb2ludGVyRXZlbnRzOlwiYWxsXCJ9fSBvbkJsdXI9e2lucHV0VXBkYXRlZH0gY29udGVudEVkaXRhYmxlLz48c3Bhbj7CsEM8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+e1wiLnNtYWxsVmFsdWVMaW5lLC5iaWdWYWx1ZUxpbmV7YmFja2dyb3VuZDpcIisocHJvcHMudGhlbWU9PTE/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCJ9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC53b3Jrc3BhY2V7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6LyojMjEyMTIxKi9ub25lO1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAud29ya3NwYWNlIC52YWx1ZUdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXMsI2hhbmRQYXRoLC5saW5lQ29udGFpbmVyLC52YWx1ZUxpbmVDb250YWluZXIsLnZhbHVlR3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lc3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmVDb250YWluZXIsLnZhbHVlTGluZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmV7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNtYWxsVmFsdWVMaW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmlnVmFsdWVMaW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlTGluZUdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVle1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kUGF0aHtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSlyb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmR7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZGxle1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVybW9zdGF0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

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
    href: "/irrigation",
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

/***/ "./pages/temperature/[id].tsx":
/*!************************************!*\
  !*** ./pages/temperature/[id].tsx ***!
  \************************************/
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
/* harmony import */ var _components_Tempmeter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Tempmeter */ "./components/Tempmeter.tsx");
/* harmony import */ var _components_Termostat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Termostat */ "./components/Termostat.tsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase/index */ "./firebase/index.tsx");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\pages\\temperature\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  center: {
    display: 'flex'
  },
  controllComponent: {
    margin: '50px',
    padding: '1rem'
  }
}));

function Id(props) {
  const classes = useStyle();
  const {
    0: temp,
    1: setTemp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-50);
  const {
    0: defTemp,
    1: setDefTemp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  let tempData = _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/temp");
  let targetTempData = _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp");

  const termostatChange = value => {
    _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/targetTemp").set(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    tempData.on('value', data => {
      setTemp(data.val());
    });
    targetTempData.once('value', data => {
      setDefTemp(data.val());
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h1",
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Teplota"), __jsx("div", {
    className: classes.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_components_Tempmeter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: props.theme,
    temp: temp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), __jsx("div", {
    className: classes.controllComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 3,
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_components_Termostat__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: props.theme,
    onValueChanged: termostatChange,
    defaultValue: defTemp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })))));
}

function ex(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  let nameData = _firebase_index__WEBPACK_IMPORTED_MODULE_8__["firebase"].database().ref("/users/" + props.user + "/devices/" + id + "/name");
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
      lineNumber: 86
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_WithAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(ex));

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/temperature/[id].tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jakub Sedlak\WebstormProjects\projekt_CP - typescript\pages\temperature\[id].tsx */"./pages/temperature/[id].tsx");


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

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

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