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

  var workspaceSize = {
    height: "500px",
    width: "500px"
  };
  var linesSize = {
    width: "500px"
  };
  var lineContainerSizes = {
    width: "250px"
  };
  var handPathSize = {
    width: "250px",
    height: "250px"
  };
  var handSize = {
    width: "250px",
    height: "250px"
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
      lineNumber: 261
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
      lineNumber: 262
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
      lineNumber: 263
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:2px;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
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
      lineNumber: 270
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    style: linesSize,
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    style: handSize,
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
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
      lineNumber: 277
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, ".handle{fill:#2196f3;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-487617672" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  })))))), __jsx("input", {
    ref: valueInput,
    onBlur: inputUpdated,
    type: "number",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "487617672",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}#lines,#handPath,.lineContainer{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer{position:absolute;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:3rem;margin-left:1.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:125px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrUytCLEFBRzZDLEFBUU4sQUFJVixBQUlPLEFBT0EsQUFJUCxBQU9DLEFBS0csQUFRRixXQWxDRCxBQWVELEFBT3NCLElBS2xCLENBckNILEVBY0QsQUFPb0IsRUFmZCxFQW9CRSxDQWZwQixLQVZtQixDQWVILENBc0JnQixPQS9CaEMsSUFvQkEsR0FWQSxFQWZvQixHQTJDUixXQUNDLEtBM0NiLE9BNEMrQiw0Q0FkWCxJQVhwQixZQWlCbUIsRUFMbkIsZ0JBT1UsU0FDVixlQU1hLFlBQ00sa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSxNb3VzZUV2ZW50LFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSVRlcm1vc3RhdCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVGVybW9zdGF0XCI7XHJcbmltcG9ydCB7bnVtYmVyfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCB3aWR0aCA9IDUwMDtcclxuICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMTgwO1xyXG4gICAgY29uc3Qgc2VnQ291bnQgPSAyMi8vMTE7XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuXHJcbiAgICBjb25zdCBbbGFzdE5vZGUsc2V0TGFzdE5vZGVdID0gdXNlU3RhdGU8Q2hpbGROb2RlPigpO1xyXG4gICAgY29uc3QgW2xhc3ROb2RlQW5nbGUsc2V0TGFzdE5vZGVBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBbmdsZSxzZXRDdXJyZW50QW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtoYW5kQW5nbGUsc2V0SGFuZEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2RyYWcsc2V0RHJhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5pdGlhbGl6ZSxzZXRJbml0aWFsaXplXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtzcGFjZVNpemUgPSB7XHJcbiAgICAgICAgaGVpZ2h0OlwiNTAwcHhcIixcclxuICAgICAgICB3aWR0aDpcIjUwMHB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGluZXNTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOlwiNTAwcHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5lQ29udGFpbmVyU2l6ZXMgPSB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjUwcHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kUGF0aFNpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6IFwiMjUwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMjUwcHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogXCIyNTBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyNTBweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlucHV0VXBkYXRlZChlOmFueSl7XHJcbiAgICAgICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldEN1cnJlbnRWYWx1ZSh2YWwpO1xyXG4gICAgICAgIHNldEN1cnJlbnRBbmdsZSgobWF4QW5nbGUvbWF4KSp2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW92ZShlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKGRyYWcpe1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGUubmF0aXZlRXZlbnQub2Zmc2V0WS0yNTAsIGUubmF0aXZlRXZlbnQub2Zmc2V0WC0yNTApO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUyID0gYW5nbGUgKiAoMTgwL01hdGguUEkpO1xyXG4gICAgICAgICAgICAvL3RvIDM2MCByYW5nZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPCAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAzNjAtKC1hbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2V0IDAgYW5nbGVcclxuICAgICAgICAgICAgYW5nbGUyKz0gMTgwO1xyXG4gICAgICAgICAgICAvL2NvcmVjdCBhbmdsZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPiAzNjApXHJcbiAgICAgICAgICAgICAgICBhbmdsZTItPTM2MFxyXG5cclxuICAgICAgICAgICAgaWYoYW5nbGUyID49IDAgJiYgYW5nbGUyIDw9IG1heEFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoTWF0aC5yb3VuZCgobWF4IC8gbWF4QW5nbGUpICogYW5nbGUyKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBbmdsZVRyYW5zKGFuZ2xlMik7XHJcbiAgICAgICAgICAgICAgICBzZXRIYW5kQW5nbGUoYW5nbGUyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRyYWcoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZighZHJhZykge1xyXG4gICAgICAgICAgICBzZXREcmFnKHRydWUpO1xyXG4gICAgICAgICAgICBpZihoYW5kbGUuY3VycmVudClcclxuICAgICAgICAgICAgaGFuZGxlLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cz0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRHJhZ0VuZChlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKGRyYWcpe1xyXG4gICAgICAgICAgICBzZXREcmFnKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYoaGFuZGxlLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGhhbmRsZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY29udGFpbmVycykge1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLnJvdW5kKGhhbmRBbmdsZSk7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZSA8PSBtYXhBbmdsZSAmJiBhbmdsZSA+PSBtaW5BbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnRhaW5lcnNbaV0uZ2V0QXR0cmlidXRlKCdyb3RhdGUnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyQW5nbGUgPiBsYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBsYXN0Tm9kZUFuZ2xlICYmIGFuZ2xlIDw9IGNvbnRhaW5lckFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBsYXN0Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnRhaW5lcnNbaV0uY2hpbGROb2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlKGNvbnRhaW5lcnNbaV0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlQW5nbGUoY29udGFpbmVyQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgaWYoaGFuZC5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgaGFuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgKGFuZ2xlKSArIFwiZGVnKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaGFuZEFuZ2xlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGFuaW0gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOmFuZ2xlVHJhbnNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6YW5pbSxcclxuICAgICAgICAgICAgdmFsdWU6KGN1cnJlbnRBbmdsZSksXHJcbiAgICAgICAgICAgIGVhc2luZzpcImxpbmVhclwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjo1MDAsXHJcbiAgICAgICAgICAgIHVwZGF0ZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGVIYW5kQW5nbGUoYW5pbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIYW5kQW5nbGUoYW5pbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOigpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRBbmdsZVRyYW5zKGN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sW2N1cnJlbnRBbmdsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHZhbHVlSW5wdXQuY3VycmVudClcclxuICAgICAgICB2YWx1ZUlucHV0LmN1cnJlbnQudmFsdWUgPSBjdXJyZW50VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZighaW5pdGlhbGl6ZSlcclxuICAgICAgICBwcm9wcy5vblZhbHVlQ2hhbmdlZChjdXJyZW50VmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9LFtjdXJyZW50VmFsdWVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgaW5pdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGlmKGluaXRWYWx1ZSE9dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZEFuZ2xlID0gTWF0aC5yb3VuZCgobWF4QW5nbGUgLyBtYXgpICogaik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICc8ZGl2IHJvdGF0ZT0nICsgaGFuZEFuZ2xlICsgJyBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoJyArIGhhbmRBbmdsZSArICdkZWcpIWltcG9ydGFudDt3aWR0aDonKyhsaW5lQ29udGFpbmVyU2l6ZXMud2lkdGgpKyc7XCIgY2xhc3M9XCJsaW5lQ29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXMuY3VycmVudC5pbm5lckhUTUwgKz0gbGluZTtcclxuICAgICAgICAgICAgICAgIGogKz0gbWF4IC8gKHNlZ0NvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb250RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmVDb250YWluZXInKTtcclxuICAgICAgICAgICAgbGV0IGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBpbml0TGFzdE5vZGVBbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVTZWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gWzczLCA4MCwgMjQ1XTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gWzI0NCwgNjcsIDU0XTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKChpKSAvIChsaW5lU2Vncy5sZW5ndGggLSAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZCA9IGZpcnN0WzBdICsgcGVyY2VudCAqIChzZWNvbmRbMF0gLSBmaXJzdFswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JlZW4gPSBmaXJzdFsxXSArIHBlcmNlbnQgKiAoc2Vjb25kWzFdIC0gZmlyc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsdWUgPSBmaXJzdFsyXSArIHBlcmNlbnQgKiAoc2Vjb25kWzJdIC0gZmlyc3RbMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpbmVTZWdzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDpcIiArIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKTtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29udGFpbmVycyhjb250RGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUhhbmRBbmdsZSA9IChhbmdsZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IE1hdGgucm91bmQoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbmdsZSA8PSBtYXhBbmdsZSAmJiBhbmdsZSA+PSBtaW5BbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udERhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnREYXRhW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBpbml0TGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0bGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbaV0uY2hpbGROb2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhW2ldLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0TGFzdE5vZGVBbmdsZSA9IGNvbnRhaW5lckFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFuZFwiKS5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoXCIrKGFuZ2xlKStcImRlZylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0QW5nbGVUcmFucyA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRBbmdsZVRyYW5zLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYW5kQW5nbGUoaW5pdEFuZ2xlVHJhbnMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoaW5pdGxhc3ROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGluaXRMYXN0Tm9kZUFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKGluaXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBbmdsZSgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluaXRpYWxpemUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFtwcm9wcy5kZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIndvcmtcIiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBvbk1vdXNlVXA9e29uRHJhZ0VuZH0gc3R5bGU9e3dvcmtzcGFjZVNpemV9IGNsYXNzTmFtZT1cIndvcmtzcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cImhhbmRQYXRoXCIgc3R5bGU9e2hhbmRQYXRoU2l6ZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYxLjQ1IDE2MS40NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLnBhdGhjaXJjbGV7ZmlsbDpub25lO3N0cm9rZTpcIisocHJvcHMudGhlbWU9PTE/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLW9wYWNpdHk6MC4wODtzdHJva2Utd2lkdGg6MnB4O31cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGF0b3bDvSB6ZHJvaiAyMjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cInBhdGhjaXJjbGVcIiBjeD1cIjgwLjczXCIgY3k9XCI4MC43M1wiIHI9XCI4MC42XCIgc3Ryb2tlRGFzaGFycmF5PVwiMjUzXCIgc3Ryb2tlRGFzaG9mZnNldD1cIjI1M1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2xpbmVzfSBpZD1cImxpbmVzXCIgc3R5bGU9e2xpbmVzU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtoYW5kfSBpZD1cImhhbmRcIiBzdHlsZT17aGFuZFNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgcmVmPXtoYW5kbGV9IG9uTW91c2VEb3duPXtvbkRyYWd9IGlkPVwiaGFuZGxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjYuMDQgMjYuMDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLmhhbmRsZXtmaWxsOiMyMTk2ZjM7fVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJoYW5kbGVcIiBjeD1cIjEzLjAyXCIgY3k9XCIxMy4wMlwiIHI9XCIxMy4wMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgcmVmPXt2YWx1ZUlucHV0fSBvbkJsdXI9e2lucHV0VXBkYXRlZH0gdHlwZSA9IFwibnVtYmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC53b3Jrc3BhY2V7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6LyojMjEyMTIxKi9ub25lO1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXMsI2hhbmRQYXRoLC5saW5lQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kUGF0aHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6NXJlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXN7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDozcmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZFBhdGh7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmR7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZGxle1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6MTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlcm1vc3RhdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.f0bd97dcd8a491a28e1f.hot-update.js.map