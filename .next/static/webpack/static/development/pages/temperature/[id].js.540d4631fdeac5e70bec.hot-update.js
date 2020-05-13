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
  var minAngle = 0;
  var maxAngle = 180;
  var segCount = 22; //11;

  var initValue = props.defaultValue;
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
    if (props.defaultValue != 0) {
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
          setCurrentValue(initValue);
          setCurrentAngle(maxAngle / max * initValue);
          setInitialize(false);
        }
      });
    }
  }, [props.defaultValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return console.log(props.theme);
  }, [props.theme]);
  return __jsx("div", {
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("div", {
    id: "work",
    onMouseMove: onMove,
    onMouseUp: onDragEnd,
    className: "jsx-2108097354" + " " + "workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("svg", {
    id: "handPath",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 161.45 161.45",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:2px;}")), __jsx("title", {
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("circle", {
    cx: "80.73",
    cy: "80.73",
    r: "80.6",
    strokeDasharray: "253",
    strokeDashoffset: "253",
    className: "jsx-2108097354" + " " + "pathcircle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("svg", {
    ref: handle,
    onMouseDown: onDrag,
    id: "handle",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26.04 26.04",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, ".handle{fill:#2196f3;}")), __jsx("title", {
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-2108097354" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })))))), __jsx("input", {
    ref: valueInput,
    onBlur: inputUpdated,
    type: "number",
    className: "jsx-2108097354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2108097354",
    __self: this
  }, ".workspace{background:none;height:500px;width:500px;margin:auto;position:relative;border-radius:100%;}#lines,#handPath,.lineContainer{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;width:500px;margin-top:50%;}.lineContainer{width:250px;position:absolute;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:3rem;margin-left:1.5rem;}#handPath{width:250px;height:250px;margin:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;width:250px;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:125px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvUStCLEFBRzZDLEFBUU4sQUFJVixBQUlPLEFBTUwsQUFLRixBQUtFLEFBT0UsQUFRRixXQWxDRCxBQWVELENBTE8sQUFVRixHQU9ELENBdkNGLEVBZ0JGLEVBUk0sRUFvQkUsQ0FmcEIsRUFvQmUsSUFoQ0YsQUFnQkEsQ0FNbUIsQUFpQkEsTUFOSSxDQXpCcEMsSUFQYSxBQWdCRyxBQVdoQixRQWtCWSxJQTVDTyxHQWdCbkIsSUE2QmEsV0E1Q08sQ0E2Q1csa0JBNUMvQiwwQ0FtQkEsQUFpQm1CLFNBTkcsU0FPVCxTQU5iLEdBT1UsU0FDVixHQU1hLFlBQ00sa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSxNb3VzZUV2ZW50LFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCB7ZmlyZWJhc2V9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSVRlcm1vc3RhdCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVGVybW9zdGF0XCI7XHJcbmZ1bmN0aW9uIFRlcm1vc3RhdChwcm9wczpJVGVybW9zdGF0KXtcclxuICAgIGNvbnN0IG1pbiA9IDA7XHJcbiAgICBjb25zdCBtYXggPSA1MDtcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMTgwO1xyXG4gICAgY29uc3Qgc2VnQ291bnQgPSAyMi8vMTE7XHJcbiAgICBjb25zdCBpbml0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuICAgIGNvbnN0IFtsYXN0Tm9kZSxzZXRMYXN0Tm9kZV0gPSB1c2VTdGF0ZTxDaGlsZE5vZGU+KCk7XHJcbiAgICBjb25zdCBbbGFzdE5vZGVBbmdsZSxzZXRMYXN0Tm9kZUFuZ2xlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50QW5nbGUsc2V0Q3VycmVudEFuZ2xlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2hhbmRBbmdsZSxzZXRIYW5kQW5nbGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtkcmFnLHNldERyYWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luaXRpYWxpemUsc2V0SW5pdGlhbGl6ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbnB1dFVwZGF0ZWQoZTphbnkpe1xyXG4gICAgICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRDdXJyZW50VmFsdWUodmFsKTtcclxuICAgICAgICBzZXRDdXJyZW50QW5nbGUoKG1heEFuZ2xlL21heCkqdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdmUoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihlLm5hdGl2ZUV2ZW50Lm9mZnNldFktMjUwLCBlLm5hdGl2ZUV2ZW50Lm9mZnNldFgtMjUwKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlMiA9IGFuZ2xlICogKDE4MC9NYXRoLlBJKTtcclxuICAgICAgICAgICAgLy90byAzNjAgcmFuZ2VcclxuICAgICAgICAgICAgaWYoYW5nbGUyIDwgMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gMzYwLSgtYW5nbGUyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3NldCAwIGFuZ2xlXHJcbiAgICAgICAgICAgIGFuZ2xlMis9IDE4MDtcclxuICAgICAgICAgICAgLy9jb3JlY3QgYW5nbGVcclxuICAgICAgICAgICAgaWYoYW5nbGUyID4gMzYwKVxyXG4gICAgICAgICAgICAgICAgYW5nbGUyLT0zNjBcclxuXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+PSAwICYmIGFuZ2xlMiA8PSBtYXhBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKE1hdGgucm91bmQoKG1heCAvIG1heEFuZ2xlKSAqIGFuZ2xlMikpO1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhhbmdsZTIpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoIWRyYWcpIHtcclxuICAgICAgICAgICAgc2V0RHJhZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYoaGFuZGxlLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGhhbmRsZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRyYWdFbmQoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgc2V0RHJhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5yb3VuZChoYW5kQW5nbGUpO1xyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPD0gbWF4QW5nbGUgJiYgYW5nbGUgPj0gbWluQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyQW5nbGUgPSBwYXJzZUludChjb250YWluZXJzW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lckFuZ2xlID4gbGFzdE5vZGVBbmdsZSAmJiBjb250YWluZXJBbmdsZSA8PSBhbmdsZSkgfHwgKGNvbnRhaW5lckFuZ2xlIDwgbGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogbGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250YWluZXJzW2ldLmNoaWxkTm9kZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZShjb250YWluZXJzW2ldLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGNvbnRhaW5lckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGlmKGhhbmQuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGhhbmQuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIChhbmdsZSkgKyBcImRlZylcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW2hhbmRBbmdsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBhbmltID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTphbmdsZVRyYW5zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOmFuaW0sXHJcbiAgICAgICAgICAgIHZhbHVlOihjdXJyZW50QW5nbGUpLFxyXG4gICAgICAgICAgICBlYXNpbmc6XCJsaW5lYXJcIixcclxuICAgICAgICAgICAgZHVyYXRpb246NTAwLFxyXG4gICAgICAgICAgICB1cGRhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlSGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTooKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhjdXJyZW50QW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtjdXJyZW50QW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih2YWx1ZUlucHV0LmN1cnJlbnQpXHJcbiAgICAgICAgdmFsdWVJbnB1dC5jdXJyZW50LnZhbHVlID0gY3VycmVudFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYoIWluaXRpYWxpemUpXHJcbiAgICAgICAgcHJvcHMub25WYWx1ZUNoYW5nZWQoY3VycmVudFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSxbY3VycmVudFZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocHJvcHMuZGVmYXVsdFZhbHVlIT0wKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZEFuZ2xlID0gTWF0aC5yb3VuZCgobWF4QW5nbGUgLyBtYXgpICogaik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICc8ZGl2IHJvdGF0ZT0nICsgaGFuZEFuZ2xlICsgJyBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoJyArIGhhbmRBbmdsZSArICdkZWcpIWltcG9ydGFudDtcIiBjbGFzcz1cImxpbmVDb250YWluZXJcIj48ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZXMuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICBsaW5lcy5jdXJyZW50LmlubmVySFRNTCArPSBsaW5lO1xyXG4gICAgICAgICAgICAgICAgaiArPSBtYXggLyAoc2VnQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbnREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZUNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBsZXQgaW5pdGxhc3ROb2RlID0gY29udERhdGFbMF0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgbGV0IGluaXRMYXN0Tm9kZUFuZ2xlID0gMDtcclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbMF0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGluZVNlZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGluZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBbNzMsIDgwLCAyNDVdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBbMjQ0LCA2NywgNTRdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lU2Vncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAoKGkpIC8gKGxpbmVTZWdzLmxlbmd0aCAtIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVkID0gZmlyc3RbMF0gKyBwZXJjZW50ICogKHNlY29uZFswXSAtIGZpcnN0WzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBncmVlbiA9IGZpcnN0WzFdICsgcGVyY2VudCAqIChzZWNvbmRbMV0gLSBmaXJzdFsxXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmx1ZSA9IGZpcnN0WzJdICsgcGVyY2VudCAqIChzZWNvbmRbMl0gLSBmaXJzdFsyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGluZVNlZ3NbaV0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOlwiICsgXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpO1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICAgICBzZXRDb250YWluZXJzKGNvbnREYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlSGFuZEFuZ2xlID0gKGFuZ2xlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gTWF0aC5yb3VuZChhbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IG1heEFuZ2xlICYmIGFuZ2xlID49IG1pbkFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250RGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udERhdGFbaV0uZ2V0QXR0cmlidXRlKCdyb3RhdGUnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lckFuZ2xlID4gaW5pdExhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGFuZ2xlIDw9IGNvbnRhaW5lckFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRsYXN0Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250RGF0YVtpXS5jaGlsZE5vZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGxhc3ROb2RlID0gY29udERhdGFbaV0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRMYXN0Tm9kZUFuZ2xlID0gY29udGFpbmVyQW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW5kXCIpLnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZShcIisoYW5nbGUpK1wiZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRBbmdsZVRyYW5zID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaW5pdEFuZ2xlVHJhbnMsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKChtYXhBbmdsZSAvIG1heCkgKiBpbml0VmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhbmRBbmdsZShpbml0QW5nbGVUcmFucy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZShpbml0bGFzdE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlQW5nbGUoaW5pdExhc3ROb2RlQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShpbml0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBbmdsZSgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbml0aWFsaXplKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcHJvcHMuZGVmYXVsdFZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT5jb25zb2xlLmxvZyhwcm9wcy50aGVtZSksW3Byb3BzLnRoZW1lXSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIndvcmtcIiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBvbk1vdXNlVXA9e29uRHJhZ0VuZH0gY2xhc3NOYW1lPVwid29ya3NwYWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiaGFuZFBhdGhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNjEuNDUgMTYxLjQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT57XCIucGF0aGNpcmNsZXtmaWxsOm5vbmU7c3Ryb2tlOlwiKyhwcm9wcy50aGVtZT09MT9cIndoaXRlXCI6XCJibGFja1wiKStcIjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utb3BhY2l0eTowLjA4O3N0cm9rZS13aWR0aDoycHg7fVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRvdsO9IHpkcm9qIDIyPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMi0yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwicGF0aGNpcmNsZVwiIGN4PVwiODAuNzNcIiBjeT1cIjgwLjczXCIgcj1cIjgwLjZcIiBzdHJva2VEYXNoYXJyYXk9XCIyNTNcIiBzdHJva2VEYXNob2Zmc2V0PVwiMjUzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bGluZXN9IGlkPVwibGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2hhbmR9IGlkPVwiaGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgcmVmPXtoYW5kbGV9IG9uTW91c2VEb3duPXtvbkRyYWd9IGlkPVwiaGFuZGxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjYuMDQgMjYuMDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLmhhbmRsZXtmaWxsOiMyMTk2ZjM7fVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJoYW5kbGVcIiBjeD1cIjEzLjAyXCIgY3k9XCIxMy4wMlwiIHI9XCIxMy4wMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgcmVmPXt2YWx1ZUlucHV0fSBvbkJsdXI9e2lucHV0VXBkYXRlZH0gdHlwZSA9IFwibnVtYmVyXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC53b3Jrc3BhY2V7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6LyojMjEyMTIxKi9ub25lO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lcywjaGFuZFBhdGgsLmxpbmVDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lc3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZXtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6M3JlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MS41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZGxle1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6MTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlcm1vc3RhdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.540d4631fdeac5e70bec.hot-update.js.map