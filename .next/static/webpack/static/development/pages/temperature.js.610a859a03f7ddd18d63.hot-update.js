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
    className: "jsx-3012145034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3012145034" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3012145034",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Loading"), __jsx("div", {
    className: "jsx-3012145034" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3012145034" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3012145034" + " " + "loadingDot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3012145034",
    __self: this
  }, ".wrap{width:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.wrap>div{color:white;font-size:5rem;}.wrap>.loadingDot{width:2rem;height:2rem;background:white;position:relative;margin:1rem;border-radius:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcTG9hZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0IyQixBQUd5QixBQVNDLEFBS0QsV0FiQyxBQWNBLENBTEcsV0FSRyxBQWNELElBTGxCLGFBTW1CLENBZEwsaUJBZUQsWUFDTyxtQkFDcEIsMEJBaEJxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKYWt1YiBTZWRsYWtcXFdlYnN0b3JtUHJvamVjdHNcXHByb2pla3RfQ1AgLSB0eXBlc2NyaXB0XFxjb21wb25lbnRzXFxMb2FkaW5nLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCl7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6XCIubG9hZGluZ0RvdFwiLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTpcIi0xMDAlXCIsZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRDdWJpY1wifSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTpcIjBcIixkdXJhdGlvbjo2MDAsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2FsdGVybmF0ZScsXHJcbiAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDMwMCwge3N0YXJ0OiAwfSksXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pO1xyXG5yZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ0RvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdEb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nRG90XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLndyYXB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLndyYXAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC53cmFwID4gLmxvYWRpbmdEb3R7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MnJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjoxcmVtO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Loading.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ })

})
//# sourceMappingURL=temperature.js.610a859a03f7ddd18d63.hot-update.js.map