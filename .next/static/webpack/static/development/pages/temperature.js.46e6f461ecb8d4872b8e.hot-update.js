webpackHotUpdate("static\\development\\pages\\temperature.js",{

/***/ "./components/Loading.tsx":
/*!********************************!*\
  !*** ./components/Loading.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\Loading.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Loading() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
      delay: animejs__WEBPACK_IMPORTED_MODULE_2__["default"].stagger(300, {
        start: 0
      }),
      loop: true
    });
  }, []);
  return __jsx("div", {
    className: "jsx-4025914299",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4025914299" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4025914299" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4025914299" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4025914299" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4025914299",
    __self: this
  }, ".wrap{width:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.wrap>div{color:white;font-size:5rem;}.wrap>.loadingDot{width:100px;height:100px;background:white;position:relative;margin:1rem;border-radius:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcTG9hZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0IyQixBQUd5QixBQVNDLEFBS0EsV0FiQSxDQVNHLEFBS0YsV0FiSyxFQWNELEVBTGxCLGNBUmMsQ0FjSyxrQkFDTixZQUNPLG1CQUNwQix3QkFoQnFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXEpha3ViIFNlZGxha1xcV2Vic3Rvcm1Qcm9qZWN0c1xccHJvamVrdF9DUCAtIHR5cGVzY3JpcHRcXGNvbXBvbmVudHNcXExvYWRpbmcudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKXtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czpcIi5sb2FkaW5nRG90XCIsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOlwiLTEwMCVcIixkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOlwiMFwiLGR1cmF0aW9uOjYwMCxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIn1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcclxuICAgICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMzAwLCB7c3RhcnQ6IDB9KSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSk7XHJcbnJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nRG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ0RvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdEb3RcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAud3JhcHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAud3JhcCA+IGRpdntcclxuICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLndyYXAgPiAubG9hZGluZ0RvdHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46MXJlbTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Loading.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ })

})
//# sourceMappingURL=temperature.js.46e6f461ecb8d4872b8e.hot-update.js.map