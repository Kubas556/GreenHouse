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
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");


var _jsxFileName = "C:\\Users\\Jakub Sedlak\\WebstormProjects\\projekt_CP - typescript\\components\\Termostat.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Termostat(props) {
  var min = 0;
  var max = 50;
  var componentWidth = 337;
  var componentHeight = 337;
  var minAngle = 0;
  var maxAngle = 240;
  var angleOverlap = -(maxAngle - 180) / 2;
  var lineSegCount = 25; //11;

  var valueLineSegCount = 16 * 2 + 1;
  var valueLineSegBigEach = 8;
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])(); // @ts-ignore

  var handleColor = theme.palette.primary.main;
  var lines = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var valueInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var hand = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var handle = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      containers = _useState[0],
      setContainers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      lastNode = _useState2[0],
      setLastNode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      lastNodeAngle = _useState3[0],
      setLastNodeAngle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      angleTrans = _useState4[0],
      setAngleTrans = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentAngle = _useState5[0],
      setCurrentAngle = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      handAngle = _useState6[0],
      setHandAngle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentValue = _useState7[0],
      setCurrentValue = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      drag = _useState8[0],
      setDrag = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
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
    width: componentWidth / 3 + "px",
    height: componentHeight / 3 + "px"
  };
  var handSize = {
    width: componentWidth / 2 + "px"
  };
  var handleSize = {
    right: componentWidth / 2 / 3 + "px"
  };
  var handPathCircle = {
    circleRadius: 2 * Math.PI * 80.6,
    transform: "rotate(" + angleOverlap + "deg)",
    maxRadius: 2 * Math.PI * 80.6 - 2 * Math.PI * 80.6 / 360 * maxAngle
  };

  function inputUpdated(e) {
    var val = _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(e.target.innerHTML);

    setCurrentValue(val);
    setCurrentAngle(maxAngle / max * val + angleOverlap);
  }

  function onMove(e) {
    if (drag) {
      var angle = Math.atan2(e.nativeEvent.offsetY - componentHeight / 2, e.nativeEvent.offsetX - componentWidth / 2);
      var angle2 = angle * (180 / Math.PI); //to 360 range

      if (angle2 < 0) {
        angle2 = 360 - -angle2;
      } //set 0 angle


      angle2 += 180; //corect angle

      if (angle2 > 360) angle2 -= 360;
      angle2 = maxAngle - angle2;

      if (angle2 < 0) {
        angle2 = angleOverlap + (120 + angle2);
        console.log(angle2);
      } else angle2 = -(angle2 - maxAngle + angleOverlap);

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (containers) {
      var angle = Math.round(handAngle);

      if (angle <= maxAngle && angle >= minAngle + angleOverlap) {
        for (var i = 0; i < containers.length; i++) {
          var containerAngle = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(containers[i].getAttribute('rotate'));

          if (containerAngle > lastNodeAngle && containerAngle <= angle || containerAngle < lastNodeAngle && angle <= containerAngle) {
            Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
              targets: lastNode,
              scale: [{
                value: 1,
                easing: 'easeInOutQuad',
                duration: 500
              }],
              delay: 0
            });
            Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var anim = {
      value: angleTrans
    };
    Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (valueInput.current) valueInput.current.innerHTML = currentValue.toString();
    if (!initialize) props.onValueChanged(currentValue.toString());
  }, [currentValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var initValue = props.defaultValue;

    if (initValue != undefined) {
      var k = 0;

      for (var i = 0; i < valueLineSegCount; i++) {
        var _handAngle = Math.round(maxAngle / max * k) + angleOverlap;

        var line = '<div style="transform:rotate(' + _handAngle + 'deg)!important;width:' + lineContainerSizes.width + ';" class="valueLineContainer">' + '<div class="valueLineGroup">' + '<div class=' + (i % valueLineSegBigEach == 0 ? "bigValueLine" : "smallValueLine") + '></div>' + '<div class="value" style="transform:rotate(' + -_handAngle + 'deg)">' + (i % valueLineSegBigEach == 0 ? Math.round(k) : "") + '</div>' + '</div>' + '</div>';
        if (lines.current) lines.current.innerHTML += line;
        k += max / (valueLineSegCount - 1);
      }

      var j = 0;

      for (var _i = 0; _i < lineSegCount; _i++) {
        var _handAngle2 = Math.round(maxAngle / max * j) + angleOverlap;

        var _line = '<div rotate=' + _handAngle2 + ' style="transform:rotate(' + _handAngle2 + 'deg)!important;width:' + lineContainerSizes.width + ';" class="lineContainer">' + '<div class="line"></div>' + '</div>';

        if (lines.current) lines.current.innerHTML += _line;
        j += max / (lineSegCount - 1);
      }

      var contData = document.getElementsByClassName('lineContainer');
      var initlastNode = contData[0].childNodes[0];
      var initLastNodeAngle = 0;
      Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
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

      for (var _i2 = 0; _i2 < lineSegs.length; _i2++) {
        var percent = _i2 / (lineSegs.length - 1);
        var red = first[0] + percent * (second[0] - first[0]);
        var green = first[1] + percent * (second[1] - first[1]);
        var blue = first[2] + percent * (second[2] - first[2]);

        lineSegs[_i2].setAttribute("style", "background:" + "rgb(" + red + "," + green + "," + blue + ");");
      }

      ;
      setContainers(contData);

      var updateHandAngle = function updateHandAngle(angle) {
        angle = Math.round(angle);

        if (angle <= maxAngle && angle >= minAngle) {
          for (var _i3 = 0; _i3 < contData.length; _i3++) {
            var containerAngle = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(contData[_i3].getAttribute('rotate'));

            if (containerAngle > initLastNodeAngle && containerAngle <= angle || containerAngle < initLastNodeAngle && angle <= containerAngle) {
              Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
                targets: initlastNode,
                scale: [{
                  value: 1,
                  easing: 'easeInOutQuad',
                  duration: 500
                }],
                delay: 0
              });
              Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
                targets: contData[_i3].childNodes[0],
                scale: [{
                  value: 1.5,
                  easing: 'easeOutSine',
                  duration: 500
                }],
                delay: 0
              });
              initlastNode = contData[_i3].childNodes[0];
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
      Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
      lineNumber: 301
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
      lineNumber: 302
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
      lineNumber: 303
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:3px;}")), __jsx("title", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
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
      lineNumber: 310
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    style: linesSize,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    style: handSize,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
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
      lineNumber: 317
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, ".handle{fill:" + handleColor + "}")), __jsx("title", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-1771400329" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-1771400329" + " " + "valueGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
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
      lineNumber: 330
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, "\xB0C")))), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, ".smallValueLine,.bigValueLine{background:" + (props.theme == 1 ? "white" : "black") + "}"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1771400329",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}.workspace .valueGroup{position:absolute;margin:0px;margin-top:50%;margin-left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:2rem;}#lines,#handPath,.lineContainer,.valueLineContainer,.valueGroup{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer,.valueLineContainer{height:0;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:2rem;margin-left:0.5rem;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.smallValueLine{height:2px;width:0.5rem;margin-left:3.5rem;opacity:0.2;}.bigValueLine{height:2px;width:1rem;margin-left:3.5rem;opacity:0.2;}.valueLineGroup{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.value{margin-left:0.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%)rotate(180deg);-ms-transform:translate(-50%,-50%)rotate(180deg);transform:translate(-50%,-50%)rotate(180deg);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:50%;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2VStCLEFBRzZDLEFBUVIsQUFRRSxBQUlWLEFBSU8sQUFPVCxBQVFFLEFBTUMsQUFNQSxBQU1FLEFBS08sQUFLVCxBQUtHLEFBUUYsU0FoREssRUFYTixBQW1CRCxBQU1HLEFBTUYsQUFnQmtDLElBSy9CLENBdEVILEVBTUEsQUFnQkQsQ0FzQ1osQ0E5Q2tCLEVBd0JFLEFBWUMsQ0EvQnJCLENBeUJxQixHQWRQLENBN0JLLENBTUYsQUFpQkQsQ0ErQ2dCLE9BeERoQyxJQXdCZ0MsQUFZbkIsRUFOQSxDQXJDSyxBQWlCbEIsRUF2Qm9CLEdBNEVSLElBMUJaLEVBTkEsS0FyQ2tDLEFBc0VyQixLQTVFYixPQTZFK0IsRUF6QlYsMkJBeEJELCtCQXlDRCxXQWhDbkIsQUFnQnFCLE9Ba0JYLFFBUlUsQ0FTcEIsTUFqRWlCLFNBdUVMLEVBZFosSUF4REEsSUF1RW1CLFVBbERDLFFBbURwQixrQ0ExQkEsMkJBeEJnQyxzR0FDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxKYWt1YiBTZWRsYWtcXFdlYnN0b3JtUHJvamVjdHNcXHByb2pla3RfQ1AgLSB0eXBlc2NyaXB0XFxjb21wb25lbnRzXFxUZXJtb3N0YXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLE1vdXNlRXZlbnQsU3ludGhldGljRXZlbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IHtmaXJlYmFzZX0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBJVGVybW9zdGF0IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lUZXJtb3N0YXRcIjtcclxuaW1wb3J0IHtudW1iZXJ9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7dXNlVGhlbWV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IDMzNztcclxuICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IDMzNztcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMjQwO1xyXG4gICAgY29uc3QgYW5nbGVPdmVybGFwID0gLShtYXhBbmdsZS0xODApLzI7XHJcbiAgICBjb25zdCBsaW5lU2VnQ291bnQgPSAyNS8vMTE7XHJcbiAgICBjb25zdCB2YWx1ZUxpbmVTZWdDb3VudCA9ICgxNioyKSsxO1xyXG4gICAgY29uc3QgdmFsdWVMaW5lU2VnQmlnRWFjaCA9IDg7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCBoYW5kbGVDb2xvciA9IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluO1xyXG5cclxuICAgIGNvbnN0IGxpbmVzID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IHZhbHVlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBoYW5kID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZSA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbY29udGFpbmVycyxzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlPEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4+KCk7XHJcblxyXG4gICAgY29uc3QgW2xhc3ROb2RlLHNldExhc3ROb2RlXSA9IHVzZVN0YXRlPENoaWxkTm9kZT4oKTtcclxuICAgIGNvbnN0IFtsYXN0Tm9kZUFuZ2xlLHNldExhc3ROb2RlQW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFthbmdsZVRyYW5zLHNldEFuZ2xlVHJhbnNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50QW5nbGUsc2V0Q3VycmVudEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbaGFuZEFuZ2xlLHNldEhhbmRBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRWYWx1ZSxzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtkcmFnLHNldERyYWddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2luaXRpYWxpemUsc2V0SW5pdGlhbGl6ZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBjb25zdCB3b3Jrc3BhY2VTaXplID0ge1xyXG4gICAgICAgIGhlaWdodDpjb21wb25lbnRIZWlnaHQrXCJweFwiLFxyXG4gICAgICAgIHdpZHRoOmNvbXBvbmVudFdpZHRoK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5lc1NpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6Y29tcG9uZW50V2lkdGgrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDb250YWluZXJTaXplcyA9IHtcclxuICAgICAgICB3aWR0aDogY29tcG9uZW50V2lkdGgvMitcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZFBhdGhTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8zK1wicHhcIixcclxuICAgICAgICBoZWlnaHQ6IGNvbXBvbmVudEhlaWdodC8zK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogY29tcG9uZW50V2lkdGgvMitcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2l6ZSA9IHtcclxuICAgICAgICByaWdodDogKGNvbXBvbmVudFdpZHRoLzIpLzMrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRQYXRoQ2lyY2xlID0ge1xyXG4gICAgICAgIGNpcmNsZVJhZGl1czoyKk1hdGguUEkqODAuNixcclxuICAgICAgICB0cmFuc2Zvcm06XCJyb3RhdGUoXCIrYW5nbGVPdmVybGFwK1wiZGVnKVwiLFxyXG4gICAgICAgIG1heFJhZGl1czooMipNYXRoLlBJKjgwLjYpLSgoKDIqTWF0aC5QSSo4MC42KS8zNjApKm1heEFuZ2xlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbnB1dFVwZGF0ZWQoZTphbnkpe1xyXG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICBzZXRDdXJyZW50VmFsdWUodmFsKTtcclxuICAgICAgICBzZXRDdXJyZW50QW5nbGUoKCgobWF4QW5nbGUpL21heCkqdmFsKSsoYW5nbGVPdmVybGFwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZS5uYXRpdmVFdmVudC5vZmZzZXRZLShjb21wb25lbnRIZWlnaHQvMiksIGUubmF0aXZlRXZlbnQub2Zmc2V0WC0oY29tcG9uZW50V2lkdGgvMikpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUyID0gYW5nbGUgKiAoMTgwL01hdGguUEkpO1xyXG4gICAgICAgICAgICAvL3RvIDM2MCByYW5nZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPCAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAzNjAtKC1hbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2V0IDAgYW5nbGVcclxuICAgICAgICAgICAgYW5nbGUyKz0gMTgwO1xyXG4gICAgICAgICAgICAvL2NvcmVjdCBhbmdsZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPiAzNjApXHJcbiAgICAgICAgICAgICAgICBhbmdsZTItPTM2MFxyXG5cclxuICAgICAgICAgICAgYW5nbGUyPShtYXhBbmdsZS1hbmdsZTIpO1xyXG4gICAgICAgICAgICBpZihhbmdsZTIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAoYW5nbGVPdmVybGFwKygxMjAgKyBhbmdsZTIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICBhbmdsZTI9LShhbmdsZTItbWF4QW5nbGUrYW5nbGVPdmVybGFwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+PSAobWluQW5nbGUpICYmIGFuZ2xlMiA8PSAobWF4QW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoTWF0aC5yb3VuZCgoKG1heCAvIG1heEFuZ2xlKSAqIGFuZ2xlMikpKTtcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoYW5nbGUyK2FuZ2xlT3ZlcmxhcCk7XHJcbiAgICAgICAgICAgICAgICBzZXRIYW5kQW5nbGUoYW5nbGUyK2FuZ2xlT3ZlcmxhcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoIWRyYWcpIHtcclxuICAgICAgICAgICAgc2V0RHJhZyh0cnVlKTtcclxuICAgICAgICAgICAgaWYoaGFuZGxlLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGhhbmRsZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRyYWdFbmQoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgc2V0RHJhZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5yb3VuZChoYW5kQW5nbGUpO1xyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPD0gKG1heEFuZ2xlKSAmJiBhbmdsZSA+PSAobWluQW5nbGUrYW5nbGVPdmVybGFwKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnRhaW5lcnNbaV0uZ2V0QXR0cmlidXRlKCdyb3RhdGUnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyQW5nbGUgPiBsYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBsYXN0Tm9kZUFuZ2xlICYmIGFuZ2xlIDw9IGNvbnRhaW5lckFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBsYXN0Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnRhaW5lcnNbaV0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlKGNvbnRhaW5lcnNbaV0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlQW5nbGUoY29udGFpbmVyQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgaWYoaGFuZC5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgaGFuZC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgYW5nbGUgKyBcImRlZylcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW2hhbmRBbmdsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBhbmltID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTphbmdsZVRyYW5zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOmFuaW0sXHJcbiAgICAgICAgICAgIHZhbHVlOihjdXJyZW50QW5nbGUpLFxyXG4gICAgICAgICAgICBlYXNpbmc6XCJsaW5lYXJcIixcclxuICAgICAgICAgICAgZHVyYXRpb246NTAwLFxyXG4gICAgICAgICAgICB1cGRhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdXBkYXRlSGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuaW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTooKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhjdXJyZW50QW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtjdXJyZW50QW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih2YWx1ZUlucHV0LmN1cnJlbnQpXHJcbiAgICAgICAgdmFsdWVJbnB1dC5jdXJyZW50LmlubmVySFRNTCA9IGN1cnJlbnRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKCFpbml0aWFsaXplKVxyXG4gICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZS50b1N0cmluZygpKTtcclxuICAgIH0sW2N1cnJlbnRWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbml0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlTGluZVNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBrKSthbmdsZU92ZXJsYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICc8ZGl2IHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgaGFuZEFuZ2xlICsgJ2RlZykhaW1wb3J0YW50O3dpZHRoOicrKGxpbmVDb250YWluZXJTaXplcy53aWR0aCkrJztcIiBjbGFzcz1cInZhbHVlTGluZUNvbnRhaW5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidmFsdWVMaW5lR3JvdXBcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz0nKygoaSV2YWx1ZUxpbmVTZWdCaWdFYWNoPT0wKT9cImJpZ1ZhbHVlTGluZVwiOlwic21hbGxWYWx1ZUxpbmVcIikrJz48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInZhbHVlXCIgc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKCcgKyAtaGFuZEFuZ2xlICsgJ2RlZylcIj4nKygoaSV2YWx1ZUxpbmVTZWdCaWdFYWNoPT0wKT9NYXRoLnJvdW5kKGspOlwiXCIpKyc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lcy5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLmN1cnJlbnQuaW5uZXJIVE1MICs9IGxpbmU7XHJcbiAgICAgICAgICAgICAgICBrICs9IG1heCAvICh2YWx1ZUxpbmVTZWdDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kQW5nbGUgPSBNYXRoLnJvdW5kKChtYXhBbmdsZSAvIG1heCkgKiBqKSthbmdsZU92ZXJsYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICc8ZGl2IHJvdGF0ZT0nICsgaGFuZEFuZ2xlICsgJyBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoJyArIGhhbmRBbmdsZSArICdkZWcpIWltcG9ydGFudDt3aWR0aDonKyhsaW5lQ29udGFpbmVyU2l6ZXMud2lkdGgpKyc7XCIgY2xhc3M9XCJsaW5lQ29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZXMuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICBsaW5lcy5jdXJyZW50LmlubmVySFRNTCArPSBsaW5lO1xyXG4gICAgICAgICAgICAgICAgaiArPSBtYXggLyAobGluZVNlZ0NvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb250RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmVDb250YWluZXInKTtcclxuICAgICAgICAgICAgbGV0IGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBpbml0TGFzdE5vZGVBbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhWzBdLmNoaWxkTm9kZXNbMF0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVTZWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gWzczLCA4MCwgMjQ1XTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gWzI0NCwgNjcsIDU0XTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKChpKSAvIChsaW5lU2Vncy5sZW5ndGggLSAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZCA9IGZpcnN0WzBdICsgcGVyY2VudCAqIChzZWNvbmRbMF0gLSBmaXJzdFswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JlZW4gPSBmaXJzdFsxXSArIHBlcmNlbnQgKiAoc2Vjb25kWzFdIC0gZmlyc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsdWUgPSBmaXJzdFsyXSArIHBlcmNlbnQgKiAoc2Vjb25kWzJdIC0gZmlyc3RbMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpbmVTZWdzW2ldLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZDpcIiArIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKTtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29udGFpbmVycyhjb250RGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUhhbmRBbmdsZSA9IChhbmdsZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IE1hdGgucm91bmQoYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbmdsZSA8PSBtYXhBbmdsZSAmJiBhbmdsZSA+PSBtaW5BbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udERhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJBbmdsZSA9IHBhcnNlSW50KGNvbnREYXRhW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGNvbnRhaW5lckFuZ2xlIDw9IGFuZ2xlKSB8fCAoY29udGFpbmVyQW5nbGUgPCBpbml0TGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0bGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbaV0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRsYXN0Tm9kZSA9IGNvbnREYXRhW2ldLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0TGFzdE5vZGVBbmdsZSA9IGNvbnRhaW5lckFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFuZFwiKS5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoXCIrKGFuZ2xlKStcImRlZylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0QW5nbGVUcmFucyA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRBbmdsZVRyYW5zLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYW5kQW5nbGUoaW5pdEFuZ2xlVHJhbnMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoaW5pdGxhc3ROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGluaXRMYXN0Tm9kZUFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5pdFZhbHVlIT11bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKGluaXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBbmdsZSgoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSkrYW5nbGVPdmVybGFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluaXRpYWxpemUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFtwcm9wcy5kZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIndvcmtcIiBvbk1vdXNlTW92ZT17b25Nb3ZlfSBvbk1vdXNlVXA9e29uRHJhZ0VuZH0gc3R5bGU9e3dvcmtzcGFjZVNpemV9IGNsYXNzTmFtZT1cIndvcmtzcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBpZD1cImhhbmRQYXRoXCIgc3R5bGU9e2hhbmRQYXRoU2l6ZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYxLjQ1IDE2MS40NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLnBhdGhjaXJjbGV7ZmlsbDpub25lO3N0cm9rZTpcIisocHJvcHMudGhlbWU9PTE/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLW9wYWNpdHk6MC4wODtzdHJva2Utd2lkdGg6M3B4O31cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGF0b3bDvSB6ZHJvaiAyMjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cInBhdGhjaXJjbGVcIiBjeD1cIjgwLjczXCIgY3k9XCI4MC43M1wiIHI9XCI4MC42XCIgc3R5bGU9e3t0cmFuc2Zvcm06aGFuZFBhdGhDaXJjbGUudHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbjpcImNlbnRlclwifX0gc3Ryb2tlRGFzaGFycmF5PXtoYW5kUGF0aENpcmNsZS5jaXJjbGVSYWRpdXN9IHN0cm9rZURhc2hvZmZzZXQ9e2hhbmRQYXRoQ2lyY2xlLm1heFJhZGl1c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bGluZXN9IGlkPVwibGluZXNcIiBzdHlsZT17bGluZXNTaXplfT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2hhbmR9IGlkPVwiaGFuZFwiIHN0eWxlPXtoYW5kU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyByZWY9e2hhbmRsZX0gb25Nb3VzZURvd249e29uRHJhZ30gaWQ9XCJoYW5kbGVcIiBzdHlsZT17aGFuZGxlU2l6ZX0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjYuMDQgMjYuMDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e1wiLmhhbmRsZXtmaWxsOlwiK2hhbmRsZUNvbG9yK1wifVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzItMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJoYW5kbGVcIiBjeD1cIjEzLjAyXCIgY3k9XCIxMy4wMlwiIHI9XCIxMy4wMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ2YWx1ZUdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHJlZj17dmFsdWVJbnB1dH0gc3R5bGU9e3twb2ludGVyRXZlbnRzOlwiYWxsXCJ9fSBvbkJsdXI9e2lucHV0VXBkYXRlZH0gY29udGVudEVkaXRhYmxlLz48c3Bhbj7CsEM8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+e1wiLnNtYWxsVmFsdWVMaW5lLC5iaWdWYWx1ZUxpbmV7YmFja2dyb3VuZDpcIisocHJvcHMudGhlbWU9PTE/XCJ3aGl0ZVwiOlwiYmxhY2tcIikrXCJ9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC53b3Jrc3BhY2V7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6LyojMjEyMTIxKi9ub25lO1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAud29ya3NwYWNlIC52YWx1ZUdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXMsI2hhbmRQYXRoLC5saW5lQ29udGFpbmVyLC52YWx1ZUxpbmVDb250YWluZXIsLnZhbHVlR3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lc3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmVDb250YWluZXIsLnZhbHVlTGluZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmV7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNtYWxsVmFsdWVMaW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmlnVmFsdWVMaW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlTGluZUdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVle1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kUGF0aHtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSlyb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmR7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZGxle1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVybW9zdGF0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.715c79ce890c85561012.hot-update.js.map