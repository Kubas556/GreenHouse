webpackHotUpdate("static\\development\\pages\\temperature\\[id].js",{

/***/ "./components/Termostat.tsx":
/*!**********************************!*\
  !*** ./components/Termostat.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");

var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\Termostat.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Termostat(props) {
  var min = 0;
  var max = 50;
  var width = 500;
  var height = 500;
  var minAngle = 0;
  var maxAngle = 180;
  var segCount = 22; //11;

  var lines = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var valueInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var hand = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var handle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      containers = _useState[0],
      setContainers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      lastNode = _useState2[0],
      setLastNode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      lastNodeAngle = _useState3[0],
      setLastNodeAngle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      angleTrans = _useState4[0],
      setAngleTrans = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentAngle = _useState5[0],
      setCurrentAngle = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      handAngle = _useState6[0],
      setHandAngle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentValue = _useState7[0],
      setCurrentValue = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      drag = _useState8[0],
      setDrag = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      initialize = _useState9[0],
      setInitialize = _useState9[1];

  var workspaceSizes = {
    height: "500px",
    width: "500px"
  };
  var linesSize = {
    width: "500px"
  };
  var lineContainerSizes = {
    width: "250px"
  };

  function inputUpdated(e) {
    var val = e.target.value;
    setCurrentValue(val);
    setCurrentAngle(maxAngle / max * val);
  }

  function onMove(e) {
    if (drag) {
      var angle = Math.atan2(e.nativeEvent.offsetY - 250, e.nativeEvent.offsetX - 250);
      var angle2 = angle * (180 / Math.PI); //to 360 range

      if (angle2 < 0) {
        angle2 = 360 - -angle2;
      } //set 0 angle


      angle2 += 180; //corect angle

      if (angle2 > 360) angle2 -= 360;

      if (angle2 >= 0 && angle2 <= maxAngle) {
        setCurrentValue(Math.round(max / maxAngle * angle2));
        setAngleTrans(angle2);
        setHandAngle(angle2);
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (containers) {
      var angle = Math.round(handAngle);

      if (angle <= maxAngle && angle >= minAngle) {
        for (var i = 0; i < containers.length; i++) {
          var containerAngle = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(containers[i].getAttribute('rotate'));

          if (containerAngle > lastNodeAngle && containerAngle <= angle || containerAngle < lastNodeAngle && angle <= containerAngle) {
            Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
              targets: lastNode,
              scale: [{
                value: 1,
                easing: 'easeInOutQuad',
                duration: 500
              }],
              delay: 0
            });
            Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
              targets: containers[i].childNodes,
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var anim = {
      value: angleTrans
    };
    Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
      targets: anim,
      value: currentAngle,
      easing: "linear",
      duration: 500,
      update: function update() {
        //updateHandAngle(anim.value);
        setHandAngle(anim.value);
      },
      complete: function complete() {
        setAngleTrans(currentAngle);
      }
    });
  }, [currentAngle]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (valueInput.current) valueInput.current.value = currentValue.toString();
    if (!initialize) props.onValueChanged(currentValue.toString());
  }, [currentValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var initValue = props.defaultValue;

    if (initValue != undefined) {
      var j = 0;

      for (var i = 0; i < segCount; i++) {
        var _handAngle = Math.round(maxAngle / max * j);

        var line = '<div rotate=' + _handAngle + ' style="transform:rotate(' + _handAngle + 'deg)!important;" width=' + width / 2 + ' class="lineContainer"><div class="line"></div></div>';
        if (lines.current) lines.current.innerHTML += line;
        j += max / (segCount - 1);
      }

      var contData = document.getElementsByClassName('lineContainer');
      var initlastNode = contData[0].childNodes[0];
      var initLastNodeAngle = 0;
      Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
        targets: contData[0].childNodes[0],
        scale: [{
          value: 1.5,
          easing: 'easeOutSine',
          duration: 500
        }],
        delay: 0
      });
      var lineSegs = document.getElementsByClassName("line");
      var first = [73, 80, 245];
      var second = [244, 67, 54];

      for (var _i = 0; _i < lineSegs.length; _i++) {
        var percent = _i / (lineSegs.length - 1);
        var red = first[0] + percent * (second[0] - first[0]);
        var green = first[1] + percent * (second[1] - first[1]);
        var blue = first[2] + percent * (second[2] - first[2]);

        lineSegs[_i].setAttribute("style", "background:" + "rgb(" + red + "," + green + "," + blue + ");");
      }

      ;
      setContainers(contData);

      var updateHandAngle = function updateHandAngle(angle) {
        angle = Math.round(angle);

        if (angle <= maxAngle && angle >= minAngle) {
          for (var _i2 = 0; _i2 < contData.length; _i2++) {
            var containerAngle = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(contData[_i2].getAttribute('rotate'));

            if (containerAngle > initLastNodeAngle && containerAngle <= angle || containerAngle < initLastNodeAngle && angle <= containerAngle) {
              Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
                targets: initlastNode,
                scale: [{
                  value: 1,
                  easing: 'easeInOutQuad',
                  duration: 500
                }],
                delay: 0
              });
              Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
                targets: contData[_i2].childNodes,
                scale: [{
                  value: 1.5,
                  easing: 'easeOutSine',
                  duration: 500
                }],
                delay: 0
              });
              initlastNode = contData[_i2].childNodes[0];
              initLastNodeAngle = containerAngle;
              break;
            }
          }

          ; //document.getElementById("hand").style.transform="rotate("+(angle)+"deg)";
        }
      };

      var initAngleTrans = {
        value: 0
      };
      Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
        targets: initAngleTrans,
        value: maxAngle / max * initValue,
        easing: "linear",
        duration: 500,
        update: function update() {
          updateHandAngle(initAngleTrans.value);
        },
        complete: function complete() {
          setLastNode(initlastNode);
          setLastNodeAngle(initLastNodeAngle);

          if (initValue != undefined) {
            setCurrentValue(initValue);
            setCurrentAngle(maxAngle / max * initValue);
          }

          setInitialize(false);
        }
      });
    }
  }, [props.defaultValue]);
  return __jsx("div", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("div", {
    id: "work",
    onMouseMove: onMove,
    onMouseUp: onDragEnd,
    style: workspaceSizes,
    className: "jsx-487617672" + " " + "workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("svg", {
    id: "handPath",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 161.45 161.45",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:2px;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("circle", {
    cx: "80.73",
    cy: "80.73",
    r: "80.6",
    strokeDasharray: "253",
    strokeDashoffset: "253",
    className: "jsx-487617672" + " " + "pathcircle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    style: linesSize,
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx("svg", {
    ref: handle,
    onMouseDown: onDrag,
    id: "handle",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26.04 26.04",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, ".handle{fill:#2196f3;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-487617672" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  })))))), __jsx("input", {
    ref: valueInput,
    onBlur: inputUpdated,
    type: "number",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "487617672",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}#lines,#handPath,.lineContainer{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer{position:absolute;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:3rem;margin-left:1.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:125px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UitCLEFBRzZDLEFBUU4sQUFJVixBQUlPLEFBT0EsQUFJUCxBQU9DLEFBS0csQUFRRixXQWxDRCxBQWVELEFBT3NCLElBS2xCLENBckNILEVBY0QsQUFPb0IsRUFmZCxFQW9CRSxDQWZwQixLQVZtQixDQWVILENBc0JnQixPQS9CaEMsSUFvQkEsR0FWQSxFQWZvQixHQTJDUixXQUNDLEtBM0NiLE9BNEMrQiw0Q0FkWCxJQVhwQixZQWlCbUIsRUFMbkIsZ0JBT1UsU0FDVixlQU1hLFlBQ00sa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSxNb3VzZUV2ZW50LFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSVRlcm1vc3RhdCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVGVybW9zdGF0XCI7XHJcbmltcG9ydCB7bnVtYmVyfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCB3aWR0aCA9IDUwMDtcclxuICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMTgwO1xyXG4gICAgY29uc3Qgc2VnQ291bnQgPSAyMi8vMTE7XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuXHJcbiAgICBjb25zdCBbbGFzdE5vZGUsc2V0TGFzdE5vZGVdID0gdXNlU3RhdGU8Q2hpbGROb2RlPigpO1xyXG4gICAgY29uc3QgW2xhc3ROb2RlQW5nbGUsc2V0TGFzdE5vZGVBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBbmdsZSxzZXRDdXJyZW50QW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtoYW5kQW5nbGUsc2V0SGFuZEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2RyYWcsc2V0RHJhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5pdGlhbGl6ZSxzZXRJbml0aWFsaXplXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtzcGFjZVNpemVzID0ge1xyXG4gICAgICAgIGhlaWdodDpcIjUwMHB4XCIsXHJcbiAgICAgICAgd2lkdGg6XCI1MDBweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVzU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDpcIjUwMHB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGluZUNvbnRhaW5lclNpemVzID0ge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1MHB4XCJcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5wdXRVcGRhdGVkKGU6YW55KXtcclxuICAgICAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKHZhbCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEFuZ2xlKChtYXhBbmdsZS9tYXgpKnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZS5uYXRpdmVFdmVudC5vZmZzZXRZLTI1MCwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLTI1MCk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZTIgPSBhbmdsZSAqICgxODAvTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIC8vdG8gMzYwIHJhbmdlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA8IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IDM2MC0oLWFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9zZXQgMCBhbmdsZVxyXG4gICAgICAgICAgICBhbmdsZTIrPSAxODA7XHJcbiAgICAgICAgICAgIC8vY29yZWN0IGFuZ2xlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+IDM2MClcclxuICAgICAgICAgICAgICAgIGFuZ2xlMi09MzYwXHJcblxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPj0gMCAmJiBhbmdsZTIgPD0gbWF4QW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShNYXRoLnJvdW5kKChtYXggLyBtYXhBbmdsZSkgKiBhbmdsZTIpKTtcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoYW5nbGUyKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRHJhZyhlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKCFkcmFnKSB7XHJcbiAgICAgICAgICAgIHNldERyYWcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnRW5kKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIHNldERyYWcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZihoYW5kbGUuY3VycmVudClcclxuICAgICAgICAgICAgaGFuZGxlLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGgucm91bmQoaGFuZEFuZ2xlKTtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IG1heEFuZ2xlICYmIGFuZ2xlID49IG1pbkFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGxhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGxhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShjb250YWluZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZihoYW5kLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBoYW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyAoYW5nbGUpICsgXCJkZWcpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtoYW5kQW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgYW5pbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6YW5nbGVUcmFuc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czphbmltLFxyXG4gICAgICAgICAgICB2YWx1ZTooY3VycmVudEFuZ2xlKSxcclxuICAgICAgICAgICAgZWFzaW5nOlwibGluZWFyXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOjUwMCxcclxuICAgICAgICAgICAgdXBkYXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZUhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6KCk9PntcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoY3VycmVudEFuZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbY3VycmVudEFuZ2xlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodmFsdWVJbnB1dC5jdXJyZW50KVxyXG4gICAgICAgIHZhbHVlSW5wdXQuY3VycmVudC52YWx1ZSA9IGN1cnJlbnRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKCFpbml0aWFsaXplKVxyXG4gICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH0sW2N1cnJlbnRWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbml0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBqKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gJzxkaXYgcm90YXRlPScgKyBoYW5kQW5nbGUgKyAnIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgaGFuZEFuZ2xlICsgJ2RlZykhaW1wb3J0YW50O1wiIHdpZHRoPScrKHdpZHRoLzIpKycgY2xhc3M9XCJsaW5lQ29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXMuY3VycmVudC5pbm5lckhUTUwgKz0gbGluZTtcclxuICAgICAgICAgICAgICAgIGogKz0gbWF4IC8gKHNlZ0NvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb250RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmVDb250YWluZXInKTtcclxuICAgICAgICAgICAgbGV0IGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBpbml0TGFzdE5vZGVBbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVTZWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gWzczLCA4MCwgMjQ1XTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gWzI0NCwgNjcsIDU0XTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKChpKSAvIChsaW5lU2Vncy5sZW5ndGggLSAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZCA9IGZpcnN0WzBdICsgcGVyY2VudCAqIChzZWNvbmRbMF0gLSBmaXJzdFswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JlZW4gPSBmaXJzdFsxXSArIHBlcmNlbnQgKiAoc2Vjb25kWzFdIC0gZmlyc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsdWUgPSBmaXJzdFsyXSArIHBlcmNlbnQgKiAoc2Vjb25kWzJdIC0gZmlyc3RbMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpbmVTZWdzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDpcIiArIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKTtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29udGFpbmVycyhjb250RGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUhhbmRBbmdsZSA9IChhbmdsZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IE1hdGgucm91bmQoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbmdsZSA8PSBtYXhBbmdsZSAmJiBhbmdsZSA+PSBtaW5BbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udERhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnREYXRhW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBpbml0TGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0bGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbaV0uY2hpbGROb2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhW2ldLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0TGFzdE5vZGVBbmdsZSA9IGNvbnRhaW5lckFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFuZFwiKS5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoXCIrKGFuZ2xlKStcImRlZylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0QW5nbGVUcmFucyA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRBbmdsZVRyYW5zLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYW5kQW5nbGUoaW5pdEFuZ2xlVHJhbnMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoaW5pdGxhc3ROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGluaXRMYXN0Tm9kZUFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKGluaXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBbmdsZSgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluaXRpYWxpemUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFtwcm9wcy5kZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIndvcmtcIiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBvbk1vdXNlVXA9e29uRHJhZ0VuZH0gc3R5bGU9e3dvcmtzcGFjZVNpemVzfSBjbGFzc05hbWU9XCJ3b3Jrc3BhY2VcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJoYW5kUGF0aFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2MS40NSAxNjEuNDVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntcIi5wYXRoY2lyY2xle2ZpbGw6bm9uZTtzdHJva2U6XCIrKHByb3BzLnRoZW1lPT0xP1wid2hpdGVcIjpcImJsYWNrXCIpK1wiO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1vcGFjaXR5OjAuMDg7c3Ryb2tlLXdpZHRoOjJweDt9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yLTJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJwYXRoY2lyY2xlXCIgY3g9XCI4MC43M1wiIGN5PVwiODAuNzNcIiByPVwiODAuNlwiIHN0cm9rZURhc2hhcnJheT1cIjI1M1wiIHN0cm9rZURhc2hvZmZzZXQ9XCIyNTNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtsaW5lc30gaWQ9XCJsaW5lc1wiIHN0eWxlPXtsaW5lc1NpemV9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17aGFuZH0gaWQ9XCJoYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyByZWY9e2hhbmRsZX0gb25Nb3VzZURvd249e29uRHJhZ30gaWQ9XCJoYW5kbGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNi4wNCAyNi4wNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT57XCIuaGFuZGxle2ZpbGw6IzIxOTZmMzt9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGF0b3bDvSB6ZHJvaiAyNTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMi0yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cImhhbmRsZVwiIGN4PVwiMTMuMDJcIiBjeT1cIjEzLjAyXCIgcj1cIjEzLjAyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3ZhbHVlSW5wdXR9IG9uQmx1cj17aW5wdXRVcGRhdGVkfSB0eXBlID0gXCJudW1iZXJcIj48L2lucHV0PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLndvcmtzcGFjZXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDovKiMyMTIxMjEqL25vbmU7XHJcbiAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lcywjaGFuZFBhdGgsLmxpbmVDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lc3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmVDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmV7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjNyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kUGF0aHtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kbGV7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDoxMjVweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVybW9zdGF0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.aab535ae9e7f9c93b933.hot-update.js.map