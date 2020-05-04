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
    className: "jsx-1894852193",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1894852193" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1894852193" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1894852193" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1894852193" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1894852193",
    __self: this
  }, ".wrap{background:black;width:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.wrap>div{color:white;font-size:5rem;}.wrap>.loadingDot{width:100px;height:100px;background:white;position:relative;margin:1rem;border-radius:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcTG9hZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUIyQixBQUcrQixBQVVMLEFBS0EsWUFKRyxBQUtGLEtBZkYsUUFnQk0sRUFMbEIsQ0FWYSxZQUNNLEVBZUEsZ0JBZEwsRUFlRCxZQUNPLG1CQUNwQix5Q0FoQnFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXEpha3ViIFNlZGxha1xcV2Vic3Rvcm1Qcm9qZWN0c1xccHJvamVrdF9DUCAtIHR5cGVzY3JpcHRcXGNvbXBvbmVudHNcXExvYWRpbmcudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKXtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czpcIi5sb2FkaW5nRG90XCIsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOlwiLTEwMCVcIixkdXJhdGlvbjozMDAsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOlwiMFwiLGR1cmF0aW9uOjYwMCxlYXNpbmc6XCJlYXNlT3V0Q3ViaWNcIn1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcclxuICAgICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMzAwLCB7c3RhcnQ6IDB9KSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSk7XHJcbnJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdEb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nRG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ0RvdFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIC53cmFwe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLndyYXAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC53cmFwID4gLmxvYWRpbmdEb3R7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjFyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZzsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Loading.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ })

})
//# sourceMappingURL=temperature.js.1e775e01ce9bc281938a.hot-update.js.map