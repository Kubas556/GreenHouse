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

  var workspaceStyle = {
    height: "500px",
    width: "500px"
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

        var line = '<div rotate=' + _handAngle + ' style="transform:rotate(' + _handAngle + 'deg)!important;" class="lineContainer"><div class="line"></div></div>';
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
      lineNumber: 243
    },
    __self: this
  }, __jsx("div", {
    id: "work",
    onMouseMove: onMove,
    onMouseUp: onDragEnd,
    style: workspaceStyle,
    className: "jsx-487617672" + " " + "workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("svg", {
    id: "handPath",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 161.45 161.45",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:2px;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
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
      lineNumber: 252
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
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
      lineNumber: 259
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, ".handle{fill:#2196f3;}")), __jsx("title", {
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-487617672" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  })))))), __jsx("input", {
    ref: valueInput,
    onBlur: inputUpdated,
    type: "number",
    className: "jsx-487617672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "487617672",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}#lines,#handPath,.lineContainer{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer{position:absolute;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:3rem;margin-left:1.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:125px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnUitCLEFBRzZDLEFBUU4sQUFJVixBQUlPLEFBT0EsQUFJUCxBQU9DLEFBS0csQUFRRixXQWxDRCxBQWVELEFBT3NCLElBS2xCLENBckNILEVBY0QsQUFPb0IsRUFmZCxFQW9CRSxDQWZwQixLQVZtQixDQWVILENBc0JnQixPQS9CaEMsSUFvQkEsR0FWQSxFQWZvQixHQTJDUixXQUNDLEtBM0NiLE9BNEMrQiw0Q0FkWCxJQVhwQixZQWlCbUIsRUFMbkIsZ0JBT1UsU0FDVixlQU1hLFlBQ00sa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSxNb3VzZUV2ZW50LFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSVRlcm1vc3RhdCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVGVybW9zdGF0XCI7XHJcbmltcG9ydCB7bnVtYmVyfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCB3aWR0aCA9IDUwMDtcclxuICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMTgwO1xyXG4gICAgY29uc3Qgc2VnQ291bnQgPSAyMi8vMTE7XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuXHJcbiAgICBjb25zdCBbbGFzdE5vZGUsc2V0TGFzdE5vZGVdID0gdXNlU3RhdGU8Q2hpbGROb2RlPigpO1xyXG4gICAgY29uc3QgW2xhc3ROb2RlQW5nbGUsc2V0TGFzdE5vZGVBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBbmdsZSxzZXRDdXJyZW50QW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtoYW5kQW5nbGUsc2V0SGFuZEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2RyYWcsc2V0RHJhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5pdGlhbGl6ZSxzZXRJbml0aWFsaXplXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtzcGFjZVN0eWxlID0ge1xyXG4gICAgICAgIGhlaWdodDpcIjUwMHB4XCIsXHJcbiAgICAgICAgd2lkdGg6XCI1MDBweFwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5wdXRVcGRhdGVkKGU6YW55KXtcclxuICAgICAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKHZhbCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEFuZ2xlKChtYXhBbmdsZS9tYXgpKnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZS5uYXRpdmVFdmVudC5vZmZzZXRZLTI1MCwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLTI1MCk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZTIgPSBhbmdsZSAqICgxODAvTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIC8vdG8gMzYwIHJhbmdlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA8IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IDM2MC0oLWFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9zZXQgMCBhbmdsZVxyXG4gICAgICAgICAgICBhbmdsZTIrPSAxODA7XHJcbiAgICAgICAgICAgIC8vY29yZWN0IGFuZ2xlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+IDM2MClcclxuICAgICAgICAgICAgICAgIGFuZ2xlMi09MzYwXHJcblxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPj0gMCAmJiBhbmdsZTIgPD0gbWF4QW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShNYXRoLnJvdW5kKChtYXggLyBtYXhBbmdsZSkgKiBhbmdsZTIpKTtcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoYW5nbGUyKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRHJhZyhlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKCFkcmFnKSB7XHJcbiAgICAgICAgICAgIHNldERyYWcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnRW5kKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIHNldERyYWcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZihoYW5kbGUuY3VycmVudClcclxuICAgICAgICAgICAgaGFuZGxlLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGgucm91bmQoaGFuZEFuZ2xlKTtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IG1heEFuZ2xlICYmIGFuZ2xlID49IG1pbkFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGxhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGxhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShjb250YWluZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZihoYW5kLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBoYW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyAoYW5nbGUpICsgXCJkZWcpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtoYW5kQW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgYW5pbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6YW5nbGVUcmFuc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czphbmltLFxyXG4gICAgICAgICAgICB2YWx1ZTooY3VycmVudEFuZ2xlKSxcclxuICAgICAgICAgICAgZWFzaW5nOlwibGluZWFyXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOjUwMCxcclxuICAgICAgICAgICAgdXBkYXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZUhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6KCk9PntcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoY3VycmVudEFuZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbY3VycmVudEFuZ2xlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodmFsdWVJbnB1dC5jdXJyZW50KVxyXG4gICAgICAgIHZhbHVlSW5wdXQuY3VycmVudC52YWx1ZSA9IGN1cnJlbnRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKCFpbml0aWFsaXplKVxyXG4gICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH0sW2N1cnJlbnRWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbml0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBqKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gJzxkaXYgcm90YXRlPScgKyBoYW5kQW5nbGUgKyAnIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgaGFuZEFuZ2xlICsgJ2RlZykhaW1wb3J0YW50O1wiIGNsYXNzPVwibGluZUNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lcy5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLmN1cnJlbnQuaW5uZXJIVE1MICs9IGxpbmU7XHJcbiAgICAgICAgICAgICAgICBqICs9IG1heCAvIChzZWdDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGxldCBpbml0bGFzdE5vZGUgPSBjb250RGF0YVswXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgaW5pdExhc3ROb2RlQW5nbGUgPSAwO1xyXG4gICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250RGF0YVswXS5jaGlsZE5vZGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsaW5lU2VncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IFs3MywgODAsIDI0NV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IFsyNDQsIDY3LCA1NF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVTZWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9ICgoaSkgLyAobGluZVNlZ3MubGVuZ3RoIC0gMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWQgPSBmaXJzdFswXSArIHBlcmNlbnQgKiAoc2Vjb25kWzBdIC0gZmlyc3RbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyZWVuID0gZmlyc3RbMV0gKyBwZXJjZW50ICogKHNlY29uZFsxXSAtIGZpcnN0WzFdKTtcclxuICAgICAgICAgICAgICAgIHZhciBibHVlID0gZmlyc3RbMl0gKyBwZXJjZW50ICogKHNlY29uZFsyXSAtIGZpcnN0WzJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5lU2Vnc1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6XCIgKyBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIik7XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcnMoY29udERhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVIYW5kQW5nbGUgPSAoYW5nbGU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBNYXRoLnJvdW5kKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5nbGUgPD0gbWF4QW5nbGUgJiYgYW5nbGUgPj0gbWluQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnREYXRhLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyQW5nbGUgPSBwYXJzZUludChjb250RGF0YVtpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyQW5nbGUgPiBpbml0TGFzdE5vZGVBbmdsZSAmJiBjb250YWluZXJBbmdsZSA8PSBhbmdsZSkgfHwgKGNvbnRhaW5lckFuZ2xlIDwgaW5pdExhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogaW5pdGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhW2ldLmNoaWxkTm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0bGFzdE5vZGUgPSBjb250RGF0YVtpXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdExhc3ROb2RlQW5nbGUgPSBjb250YWluZXJBbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbmRcIikuc3R5bGUudHJhbnNmb3JtPVwicm90YXRlKFwiKyhhbmdsZSkrXCJkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5pdEFuZ2xlVHJhbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0QW5nbGVUcmFucyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSksXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSGFuZEFuZ2xlKGluaXRBbmdsZVRyYW5zLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlKGluaXRsYXN0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShpbml0TGFzdE5vZGVBbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGluaXRWYWx1ZSE9dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShpbml0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50QW5nbGUoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRJbml0aWFsaXplKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcHJvcHMuZGVmYXVsdFZhbHVlXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3b3JrXCIgb25Nb3VzZU1vdmU9e29uTW92ZX0gb25Nb3VzZVVwPXtvbkRyYWdFbmR9IHN0eWxlPXt3b3Jrc3BhY2VTdHlsZX0gY2xhc3NOYW1lPVwid29ya3NwYWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiaGFuZFBhdGhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNjEuNDUgMTYxLjQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT57XCIucGF0aGNpcmNsZXtmaWxsOm5vbmU7c3Ryb2tlOlwiKyhwcm9wcy50aGVtZT09MT9cIndoaXRlXCI6XCJibGFja1wiKStcIjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utb3BhY2l0eTowLjA4O3N0cm9rZS13aWR0aDoycHg7fVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRvdsO9IHpkcm9qIDIyPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMi0yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwicGF0aGNpcmNsZVwiIGN4PVwiODAuNzNcIiBjeT1cIjgwLjczXCIgcj1cIjgwLjZcIiBzdHJva2VEYXNoYXJyYXk9XCIyNTNcIiBzdHJva2VEYXNob2Zmc2V0PVwiMjUzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bGluZXN9IGlkPVwibGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2hhbmR9IGlkPVwiaGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgcmVmPXtoYW5kbGV9IG9uTW91c2VEb3duPXtvbkRyYWd9IGlkPVwiaGFuZGxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjYuMDQgMjYuMDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLmhhbmRsZXtmaWxsOiMyMTk2ZjM7fVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJoYW5kbGVcIiBjeD1cIjEzLjAyXCIgY3k9XCIxMy4wMlwiIHI9XCIxMy4wMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgcmVmPXt2YWx1ZUlucHV0fSBvbkJsdXI9e2lucHV0VXBkYXRlZH0gdHlwZSA9IFwibnVtYmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC53b3Jrc3BhY2V7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6LyojMjEyMTIxKi9ub25lO1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXMsI2hhbmRQYXRoLC5saW5lQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kUGF0aHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6NXJlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXN7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDozcmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZFBhdGh7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmR7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZGxle1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6MTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlcm1vc3RhdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.1c854e0ea55e44aacb4b.hot-update.js.map