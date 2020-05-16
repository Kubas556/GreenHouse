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
  var componentWidth = 500;
  var componentHeight = 500;
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

  var workspaceSize = {
    height: componentHeight + "px",
    width: componentWidth + "px"
  };
  var linesSize = {
    width: componentWidth + "px"
  };
  var lineContainerSizes = {
    width: componentWidth / 2 + "px"
  };
  var handPathSize = {
    width: componentWidth / 2 + "px",
    height: componentHeight / 2 + "px"
  };
  var handSize = {
    width: componentWidth / 2 + "px"
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

        var line = '<div rotate=' + _handAngle + ' style="transform:rotate(' + _handAngle + 'deg)!important;width:' + lineContainerSizes.width + ';" class="lineContainer"><div class="line"></div></div>';
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
      lineNumber: 260
    },
    __self: this
  }, __jsx("div", {
    id: "work",
    onMouseMove: onMove,
    onMouseUp: onDragEnd,
    style: workspaceSize,
    className: "jsx-487617672" + " " + "workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx("svg", {
    id: "handPath",
    style: handPathSize,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 161.45 161.45",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:2px;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
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
      lineNumber: 269
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    style: linesSize,
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    style: handSize,
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
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
      lineNumber: 276
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, ".handle{fill:#2196f3;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-487617672" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  })))))), __jsx("input", {
    ref: valueInput,
    onBlur: inputUpdated,
    type: "number",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "487617672",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}#lines,#handPath,.lineContainer{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer{position:absolute;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:3rem;margin-left:1.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:125px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUytCLEFBRzZDLEFBUU4sQUFJVixBQUlPLEFBT0EsQUFJUCxBQU9DLEFBS0csQUFRRixXQWxDRCxBQWVELEFBT3NCLElBS2xCLENBckNILEVBY0QsQUFPb0IsRUFmZCxFQW9CRSxDQWZwQixLQVZtQixDQWVILENBc0JnQixPQS9CaEMsSUFvQkEsR0FWQSxFQWZvQixHQTJDUixXQUNDLEtBM0NiLE9BNEMrQiw0Q0FkWCxJQVhwQixZQWlCbUIsRUFMbkIsZ0JBT1UsU0FDVixlQU1hLFlBQ00sa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSxNb3VzZUV2ZW50LFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSVRlcm1vc3RhdCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVGVybW9zdGF0XCI7XHJcbmltcG9ydCB7bnVtYmVyfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IDUwMDtcclxuICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMTgwO1xyXG4gICAgY29uc3Qgc2VnQ291bnQgPSAyMi8vMTE7XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuXHJcbiAgICBjb25zdCBbbGFzdE5vZGUsc2V0TGFzdE5vZGVdID0gdXNlU3RhdGU8Q2hpbGROb2RlPigpO1xyXG4gICAgY29uc3QgW2xhc3ROb2RlQW5nbGUsc2V0TGFzdE5vZGVBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBbmdsZSxzZXRDdXJyZW50QW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtoYW5kQW5nbGUsc2V0SGFuZEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2RyYWcsc2V0RHJhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5pdGlhbGl6ZSxzZXRJbml0aWFsaXplXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtzcGFjZVNpemUgPSB7XHJcbiAgICAgICAgaGVpZ2h0OmNvbXBvbmVudEhlaWdodCtcInB4XCIsXHJcbiAgICAgICAgd2lkdGg6Y29tcG9uZW50V2lkdGgrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVzU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDpjb21wb25lbnRXaWR0aCtcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGluZUNvbnRhaW5lclNpemVzID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8yK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kUGF0aFNpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6IGNvbXBvbmVudFdpZHRoLzIrXCJweFwiLFxyXG4gICAgICAgIGhlaWdodDogY29tcG9uZW50SGVpZ2h0LzIrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8yK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbnB1dFVwZGF0ZWQoZTphbnkpe1xyXG4gICAgICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDdXJyZW50VmFsdWUodmFsKTtcclxuICAgICAgICBzZXRDdXJyZW50QW5nbGUoKG1heEFuZ2xlL21heCkqdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdmUoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihlLm5hdGl2ZUV2ZW50Lm9mZnNldFktMjUwLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgtMjUwKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlMiA9IGFuZ2xlICogKDE4MC9NYXRoLlBJKTtcclxuICAgICAgICAgICAgLy90byAzNjAgcmFuZ2VcclxuICAgICAgICAgICAgaWYoYW5nbGUyIDwgMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gMzYwLSgtYW5nbGUyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3NldCAwIGFuZ2xlXHJcbiAgICAgICAgICAgIGFuZ2xlMis9IDE4MDtcclxuICAgICAgICAgICAgLy9jb3JlY3QgYW5nbGVcclxuICAgICAgICAgICAgaWYoYW5nbGUyID4gMzYwKVxyXG4gICAgICAgICAgICAgICAgYW5nbGUyLT0zNjBcclxuXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+PSAwICYmIGFuZ2xlMiA8PSBtYXhBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKE1hdGgucm91bmQoKG1heCAvIG1heEFuZ2xlKSAqIGFuZ2xlMikpO1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhhbmdsZTIpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoIWRyYWcpIHtcclxuICAgICAgICAgICAgc2V0RHJhZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYoaGFuZGxlLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGhhbmRsZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRyYWdFbmQoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgc2V0RHJhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5yb3VuZChoYW5kQW5nbGUpO1xyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPD0gbWF4QW5nbGUgJiYgYW5nbGUgPj0gbWluQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyQW5nbGUgPSBwYXJzZUludChjb250YWluZXJzW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lckFuZ2xlID4gbGFzdE5vZGVBbmdsZSAmJiBjb250YWluZXJBbmdsZSA8PSBhbmdsZSkgfHwgKGNvbnRhaW5lckFuZ2xlIDwgbGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogbGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250YWluZXJzW2ldLmNoaWxkTm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZShjb250YWluZXJzW2ldLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGNvbnRhaW5lckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGlmKGhhbmQuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGhhbmQuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIChhbmdsZSkgKyBcImRlZylcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW2hhbmRBbmdsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBhbmltID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTphbmdsZVRyYW5zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOmFuaW0sXHJcbiAgICAgICAgICAgIHZhbHVlOihjdXJyZW50QW5nbGUpLFxyXG4gICAgICAgICAgICBlYXNpbmc6XCJsaW5lYXJcIixcclxuICAgICAgICAgICAgZHVyYXRpb246NTAwLFxyXG4gICAgICAgICAgICB1cGRhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlSGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTooKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhjdXJyZW50QW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtjdXJyZW50QW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih2YWx1ZUlucHV0LmN1cnJlbnQpXHJcbiAgICAgICAgdmFsdWVJbnB1dC5jdXJyZW50LnZhbHVlID0gY3VycmVudFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYoIWluaXRpYWxpemUpXHJcbiAgICAgICAgcHJvcHMub25WYWx1ZUNoYW5nZWQoY3VycmVudFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSxbY3VycmVudFZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGluaXRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBpZihpbml0VmFsdWUhPXVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmRBbmdsZSA9IE1hdGgucm91bmQoKG1heEFuZ2xlIC8gbWF4KSAqIGopO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSAnPGRpdiByb3RhdGU9JyArIGhhbmRBbmdsZSArICcgc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKCcgKyBoYW5kQW5nbGUgKyAnZGVnKSFpbXBvcnRhbnQ7d2lkdGg6JysobGluZUNvbnRhaW5lclNpemVzLndpZHRoKSsnO1wiIGNsYXNzPVwibGluZUNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lcy5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLmN1cnJlbnQuaW5uZXJIVE1MICs9IGxpbmU7XHJcbiAgICAgICAgICAgICAgICBqICs9IG1heCAvIChzZWdDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGxldCBpbml0bGFzdE5vZGUgPSBjb250RGF0YVswXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgaW5pdExhc3ROb2RlQW5nbGUgPSAwO1xyXG4gICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250RGF0YVswXS5jaGlsZE5vZGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsaW5lU2VncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IFs3MywgODAsIDI0NV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IFsyNDQsIDY3LCA1NF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVTZWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9ICgoaSkgLyAobGluZVNlZ3MubGVuZ3RoIC0gMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWQgPSBmaXJzdFswXSArIHBlcmNlbnQgKiAoc2Vjb25kWzBdIC0gZmlyc3RbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyZWVuID0gZmlyc3RbMV0gKyBwZXJjZW50ICogKHNlY29uZFsxXSAtIGZpcnN0WzFdKTtcclxuICAgICAgICAgICAgICAgIHZhciBibHVlID0gZmlyc3RbMl0gKyBwZXJjZW50ICogKHNlY29uZFsyXSAtIGZpcnN0WzJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5lU2Vnc1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6XCIgKyBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIik7XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcnMoY29udERhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVIYW5kQW5nbGUgPSAoYW5nbGU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBNYXRoLnJvdW5kKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5nbGUgPD0gbWF4QW5nbGUgJiYgYW5nbGUgPj0gbWluQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnREYXRhLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyQW5nbGUgPSBwYXJzZUludChjb250RGF0YVtpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyQW5nbGUgPiBpbml0TGFzdE5vZGVBbmdsZSAmJiBjb250YWluZXJBbmdsZSA8PSBhbmdsZSkgfHwgKGNvbnRhaW5lckFuZ2xlIDwgaW5pdExhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogaW5pdGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhW2ldLmNoaWxkTm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0bGFzdE5vZGUgPSBjb250RGF0YVtpXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdExhc3ROb2RlQW5nbGUgPSBjb250YWluZXJBbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbmRcIikuc3R5bGUudHJhbnNmb3JtPVwicm90YXRlKFwiKyhhbmdsZSkrXCJkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5pdEFuZ2xlVHJhbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0QW5nbGVUcmFucyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSksXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSGFuZEFuZ2xlKGluaXRBbmdsZVRyYW5zLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlKGluaXRsYXN0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShpbml0TGFzdE5vZGVBbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGluaXRWYWx1ZSE9dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShpbml0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50QW5nbGUoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRJbml0aWFsaXplKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcHJvcHMuZGVmYXVsdFZhbHVlXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3b3JrXCIgb25Nb3VzZU1vdmU9e29uTW92ZX0gb25Nb3VzZVVwPXtvbkRyYWdFbmR9IHN0eWxlPXt3b3Jrc3BhY2VTaXplfSBjbGFzc05hbWU9XCJ3b3Jrc3BhY2VcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJoYW5kUGF0aFwiIHN0eWxlPXtoYW5kUGF0aFNpemV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2MS40NSAxNjEuNDVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntcIi5wYXRoY2lyY2xle2ZpbGw6bm9uZTtzdHJva2U6XCIrKHByb3BzLnRoZW1lPT0xP1wid2hpdGVcIjpcImJsYWNrXCIpK1wiO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1vcGFjaXR5OjAuMDg7c3Ryb2tlLXdpZHRoOjJweDt9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yLTJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJwYXRoY2lyY2xlXCIgY3g9XCI4MC43M1wiIGN5PVwiODAuNzNcIiByPVwiODAuNlwiIHN0cm9rZURhc2hhcnJheT1cIjI1M1wiIHN0cm9rZURhc2hvZmZzZXQ9XCIyNTNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtsaW5lc30gaWQ9XCJsaW5lc1wiIHN0eWxlPXtsaW5lc1NpemV9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17aGFuZH0gaWQ9XCJoYW5kXCIgc3R5bGU9e2hhbmRTaXplfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHJlZj17aGFuZGxlfSBvbk1vdXNlRG93bj17b25EcmFnfSBpZD1cImhhbmRsZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI2LjA0IDI2LjA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntcIi5oYW5kbGV7ZmlsbDojMjE5NmYzO31cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRvdsO9IHpkcm9qIDI1PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yLTJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwiaGFuZGxlXCIgY3g9XCIxMy4wMlwiIGN5PVwiMTMuMDJcIiByPVwiMTMuMDJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHJlZj17dmFsdWVJbnB1dH0gb25CbHVyPXtpbnB1dFVwZGF0ZWR9IHR5cGUgPSBcIm51bWJlclwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAud29ya3NwYWNle1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOi8qIzIxMjEyMSovbm9uZTtcclxuICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2xpbmVzLCNoYW5kUGF0aCwubGluZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZFBhdGh7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2xpbmVze1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZXtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6M3JlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MS41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDUwJTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5ke1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRsZXtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OjEyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXJtb3N0YXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.8c1670745d8c345f223c.hot-update.js.map