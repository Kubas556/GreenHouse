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

        var line = '<div rotate=' + _handAngle + ' style="transform:rotate(' + _handAngle + 'deg)!important;width:' + width / 2 + 'px;" class="lineContainer"><div class="line"></div></div>';
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
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}#lines,#handPath,.lineContainer{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer{position:absolute;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:3rem;margin-left:1.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:125px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UitCLEFBRzZDLEFBUU4sQUFJVixBQUlPLEFBT0EsQUFJUCxBQU9DLEFBS0csQUFRRixXQWxDRCxBQWVELEFBT3NCLElBS2xCLENBckNILEVBY0QsQUFPb0IsRUFmZCxFQW9CRSxDQWZwQixLQVZtQixDQWVILENBc0JnQixPQS9CaEMsSUFvQkEsR0FWQSxFQWZvQixHQTJDUixXQUNDLEtBM0NiLE9BNEMrQiw0Q0FkWCxJQVhwQixZQWlCbUIsRUFMbkIsZ0JBT1UsU0FDVixlQU1hLFlBQ00sa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSxNb3VzZUV2ZW50LFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSVRlcm1vc3RhdCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVGVybW9zdGF0XCI7XHJcbmltcG9ydCB7bnVtYmVyfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCB3aWR0aCA9IDUwMDtcclxuICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMTgwO1xyXG4gICAgY29uc3Qgc2VnQ291bnQgPSAyMi8vMTE7XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuXHJcbiAgICBjb25zdCBbbGFzdE5vZGUsc2V0TGFzdE5vZGVdID0gdXNlU3RhdGU8Q2hpbGROb2RlPigpO1xyXG4gICAgY29uc3QgW2xhc3ROb2RlQW5nbGUsc2V0TGFzdE5vZGVBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBbmdsZSxzZXRDdXJyZW50QW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtoYW5kQW5nbGUsc2V0SGFuZEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2RyYWcsc2V0RHJhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5pdGlhbGl6ZSxzZXRJbml0aWFsaXplXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtzcGFjZVNpemVzID0ge1xyXG4gICAgICAgIGhlaWdodDpcIjUwMHB4XCIsXHJcbiAgICAgICAgd2lkdGg6XCI1MDBweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVzU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDpcIjUwMHB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGluZUNvbnRhaW5lclNpemVzID0ge1xyXG4gICAgICAgIHdpZHRoOiBcIjI1MHB4XCJcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaW5wdXRVcGRhdGVkKGU6YW55KXtcclxuICAgICAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKHZhbCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEFuZ2xlKChtYXhBbmdsZS9tYXgpKnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZS5uYXRpdmVFdmVudC5vZmZzZXRZLTI1MCwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLTI1MCk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZTIgPSBhbmdsZSAqICgxODAvTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIC8vdG8gMzYwIHJhbmdlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA8IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IDM2MC0oLWFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9zZXQgMCBhbmdsZVxyXG4gICAgICAgICAgICBhbmdsZTIrPSAxODA7XHJcbiAgICAgICAgICAgIC8vY29yZWN0IGFuZ2xlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+IDM2MClcclxuICAgICAgICAgICAgICAgIGFuZ2xlMi09MzYwXHJcblxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPj0gMCAmJiBhbmdsZTIgPD0gbWF4QW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShNYXRoLnJvdW5kKChtYXggLyBtYXhBbmdsZSkgKiBhbmdsZTIpKTtcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoYW5nbGUyKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRHJhZyhlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKCFkcmFnKSB7XHJcbiAgICAgICAgICAgIHNldERyYWcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnRW5kKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIHNldERyYWcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZihoYW5kbGUuY3VycmVudClcclxuICAgICAgICAgICAgaGFuZGxlLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGgucm91bmQoaGFuZEFuZ2xlKTtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IG1heEFuZ2xlICYmIGFuZ2xlID49IG1pbkFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGxhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGxhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShjb250YWluZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZihoYW5kLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBoYW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyAoYW5nbGUpICsgXCJkZWcpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtoYW5kQW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgYW5pbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6YW5nbGVUcmFuc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czphbmltLFxyXG4gICAgICAgICAgICB2YWx1ZTooY3VycmVudEFuZ2xlKSxcclxuICAgICAgICAgICAgZWFzaW5nOlwibGluZWFyXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOjUwMCxcclxuICAgICAgICAgICAgdXBkYXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZUhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6KCk9PntcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoY3VycmVudEFuZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbY3VycmVudEFuZ2xlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodmFsdWVJbnB1dC5jdXJyZW50KVxyXG4gICAgICAgIHZhbHVlSW5wdXQuY3VycmVudC52YWx1ZSA9IGN1cnJlbnRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKCFpbml0aWFsaXplKVxyXG4gICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH0sW2N1cnJlbnRWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbml0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBqKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gJzxkaXYgcm90YXRlPScgKyBoYW5kQW5nbGUgKyAnIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgaGFuZEFuZ2xlICsgJ2RlZykhaW1wb3J0YW50O3dpZHRoOicrKHdpZHRoLzIpKydweDtcIiBjbGFzcz1cImxpbmVDb250YWluZXJcIj48ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZXMuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICBsaW5lcy5jdXJyZW50LmlubmVySFRNTCArPSBsaW5lO1xyXG4gICAgICAgICAgICAgICAgaiArPSBtYXggLyAoc2VnQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbnREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZUNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBsZXQgaW5pdGxhc3ROb2RlID0gY29udERhdGFbMF0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgbGV0IGluaXRMYXN0Tm9kZUFuZ2xlID0gMDtcclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbMF0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGluZVNlZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGluZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBbNzMsIDgwLCAyNDVdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBbMjQ0LCA2NywgNTRdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lU2Vncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAoKGkpIC8gKGxpbmVTZWdzLmxlbmd0aCAtIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVkID0gZmlyc3RbMF0gKyBwZXJjZW50ICogKHNlY29uZFswXSAtIGZpcnN0WzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBncmVlbiA9IGZpcnN0WzFdICsgcGVyY2VudCAqIChzZWNvbmRbMV0gLSBmaXJzdFsxXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmx1ZSA9IGZpcnN0WzJdICsgcGVyY2VudCAqIChzZWNvbmRbMl0gLSBmaXJzdFsyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGluZVNlZ3NbaV0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOlwiICsgXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpO1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICAgICBzZXRDb250YWluZXJzKGNvbnREYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlSGFuZEFuZ2xlID0gKGFuZ2xlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gTWF0aC5yb3VuZChhbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IG1heEFuZ2xlICYmIGFuZ2xlID49IG1pbkFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250RGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udERhdGFbaV0uZ2V0QXR0cmlidXRlKCdyb3RhdGUnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lckFuZ2xlID4gaW5pdExhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGFuZ2xlIDw9IGNvbnRhaW5lckFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRsYXN0Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250RGF0YVtpXS5jaGlsZE5vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGxhc3ROb2RlID0gY29udERhdGFbaV0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRMYXN0Tm9kZUFuZ2xlID0gY29udGFpbmVyQW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW5kXCIpLnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZShcIisoYW5nbGUpK1wiZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRBbmdsZVRyYW5zID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaW5pdEFuZ2xlVHJhbnMsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKChtYXhBbmdsZSAvIG1heCkgKiBpbml0VmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhbmRBbmdsZShpbml0QW5nbGVUcmFucy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZShpbml0bGFzdE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlQW5nbGUoaW5pdExhc3ROb2RlQW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihpbml0VmFsdWUhPXVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoaW5pdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEFuZ2xlKChtYXhBbmdsZSAvIG1heCkgKiBpbml0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5pdGlhbGl6ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Byb3BzLmRlZmF1bHRWYWx1ZV0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwid29ya1wiIG9uTW91c2VNb3ZlPXtvbk1vdmV9IG9uTW91c2VVcD17b25EcmFnRW5kfSBzdHlsZT17d29ya3NwYWNlU2l6ZXN9IGNsYXNzTmFtZT1cIndvcmtzcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cImhhbmRQYXRoXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYxLjQ1IDE2MS40NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLnBhdGhjaXJjbGV7ZmlsbDpub25lO3N0cm9rZTpcIisocHJvcHMudGhlbWU9PTE/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLW9wYWNpdHk6MC4wODtzdHJva2Utd2lkdGg6MnB4O31cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGF0b3bDvSB6ZHJvaiAyMjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cInBhdGhjaXJjbGVcIiBjeD1cIjgwLjczXCIgY3k9XCI4MC43M1wiIHI9XCI4MC42XCIgc3Ryb2tlRGFzaGFycmF5PVwiMjUzXCIgc3Ryb2tlRGFzaG9mZnNldD1cIjI1M1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2xpbmVzfSBpZD1cImxpbmVzXCIgc3R5bGU9e2xpbmVzU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtoYW5kfSBpZD1cImhhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHJlZj17aGFuZGxlfSBvbk1vdXNlRG93bj17b25EcmFnfSBpZD1cImhhbmRsZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI2LjA0IDI2LjA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntcIi5oYW5kbGV7ZmlsbDojMjE5NmYzO31cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRvdsO9IHpkcm9qIDI1PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yLTJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwiaGFuZGxlXCIgY3g9XCIxMy4wMlwiIGN5PVwiMTMuMDJcIiByPVwiMTMuMDJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHJlZj17dmFsdWVJbnB1dH0gb25CbHVyPXtpbnB1dFVwZGF0ZWR9IHR5cGUgPSBcIm51bWJlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAud29ya3NwYWNle1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOi8qIzIxMjEyMSovbm9uZTtcclxuICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2xpbmVzLCNoYW5kUGF0aCwubGluZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZFBhdGh7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2xpbmVze1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZXtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6M3JlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MS41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDUwJTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5ke1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRsZXtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OjEyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXJtb3N0YXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.cfe5bec79a97af155eea.hot-update.js.map