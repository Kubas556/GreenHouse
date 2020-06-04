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
  var maxAngle = 270;
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
      if (angle2 < 0) angle2 = -(angle2 - angleOverlap);else angle2 = -(angle2 - maxAngle - angleOverlap);
      console.log(angle2);

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
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}.workspace .valueGroup{position:absolute;margin:0px;margin-top:50%;margin-left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:2rem;}#lines,#handPath,.lineContainer,.valueLineContainer,.valueGroup{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer,.valueLineContainer{height:0;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:2rem;margin-left:0.5rem;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.smallValueLine{height:2px;width:0.5rem;margin-left:3.5rem;opacity:0.2;}.bigValueLine{height:2px;width:1rem;margin-left:3.5rem;opacity:0.2;}.valueLineGroup{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.value{margin-left:0.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%)rotate(180deg);-ms-transform:translate(-50%,-50%)rotate(180deg);transform:translate(-50%,-50%)rotate(180deg);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:50%;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2VStCLEFBRzZDLEFBUVIsQUFRRSxBQUlWLEFBSU8sQUFPVCxBQVFFLEFBTUMsQUFNQSxBQU1FLEFBS08sQUFLVCxBQUtHLEFBUUYsU0FoREssRUFYTixBQW1CRCxBQU1HLEFBTUYsQUFnQmtDLElBSy9CLENBdEVILEVBTUEsQUFnQkQsQ0FzQ1osQ0E5Q2tCLEVBd0JFLEFBWUMsQ0EvQnJCLENBeUJxQixHQWRQLENBN0JLLENBTUYsQUFpQkQsQ0ErQ2dCLE9BeERoQyxJQXdCZ0MsQUFZbkIsRUFOQSxDQXJDSyxBQWlCbEIsRUF2Qm9CLEdBNEVSLElBMUJaLEVBTkEsS0FyQ2tDLEFBc0VyQixLQTVFYixPQTZFK0IsRUF6QlYsMkJBeEJELCtCQXlDRCxXQWhDbkIsQUFnQnFCLE9Ba0JYLFFBUlUsQ0FTcEIsTUFqRWlCLFNBdUVMLEVBZFosSUF4REEsSUF1RW1CLFVBbERDLFFBbURwQixrQ0ExQkEsMkJBeEJnQyxzR0FDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxKYWt1YiBTZWRsYWtcXFdlYnN0b3JtUHJvamVjdHNcXHByb2pla3RfQ1AgLSB0eXBlc2NyaXB0XFxjb21wb25lbnRzXFxUZXJtb3N0YXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLE1vdXNlRXZlbnQsU3ludGhldGljRXZlbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IHtmaXJlYmFzZX0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBJVGVybW9zdGF0IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lUZXJtb3N0YXRcIjtcclxuaW1wb3J0IHtudW1iZXJ9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7dXNlVGhlbWV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IDMzNztcclxuICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IDMzNztcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMjcwO1xyXG4gICAgY29uc3QgYW5nbGVPdmVybGFwID0gLShtYXhBbmdsZS0xODApLzI7XHJcbiAgICBjb25zdCBsaW5lU2VnQ291bnQgPSAyNS8vMTE7XHJcbiAgICBjb25zdCB2YWx1ZUxpbmVTZWdDb3VudCA9ICgxNioyKSsxO1xyXG4gICAgY29uc3QgdmFsdWVMaW5lU2VnQmlnRWFjaCA9IDg7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCBoYW5kbGVDb2xvciA9IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluO1xyXG5cclxuICAgIGNvbnN0IGxpbmVzID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IHZhbHVlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBoYW5kID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmRsZSA9IHVzZVJlZjxTVkdTVkdFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbY29udGFpbmVycyxzZXRDb250YWluZXJzXSA9IHVzZVN0YXRlPEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4+KCk7XHJcblxyXG4gICAgY29uc3QgW2xhc3ROb2RlLHNldExhc3ROb2RlXSA9IHVzZVN0YXRlPENoaWxkTm9kZT4oKTtcclxuICAgIGNvbnN0IFtsYXN0Tm9kZUFuZ2xlLHNldExhc3ROb2RlQW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFthbmdsZVRyYW5zLHNldEFuZ2xlVHJhbnNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjdXJyZW50QW5nbGUsc2V0Q3VycmVudEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbaGFuZEFuZ2xlLHNldEhhbmRBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRWYWx1ZSxzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtkcmFnLHNldERyYWddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2luaXRpYWxpemUsc2V0SW5pdGlhbGl6ZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBjb25zdCB3b3Jrc3BhY2VTaXplID0ge1xyXG4gICAgICAgIGhlaWdodDpjb21wb25lbnRIZWlnaHQrXCJweFwiLFxyXG4gICAgICAgIHdpZHRoOmNvbXBvbmVudFdpZHRoK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5lc1NpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6Y29tcG9uZW50V2lkdGgrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDb250YWluZXJTaXplcyA9IHtcclxuICAgICAgICB3aWR0aDogY29tcG9uZW50V2lkdGgvMitcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZFBhdGhTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8zK1wicHhcIixcclxuICAgICAgICBoZWlnaHQ6IGNvbXBvbmVudEhlaWdodC8zK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogY29tcG9uZW50V2lkdGgvMitcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2l6ZSA9IHtcclxuICAgICAgICByaWdodDogKGNvbXBvbmVudFdpZHRoLzIpLzMrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRQYXRoQ2lyY2xlID0ge1xyXG4gICAgICAgIGNpcmNsZVJhZGl1czoyKk1hdGguUEkqODAuNixcclxuICAgICAgICB0cmFuc2Zvcm06XCJyb3RhdGUoXCIrYW5nbGVPdmVybGFwK1wiZGVnKVwiLFxyXG4gICAgICAgIG1heFJhZGl1czooMipNYXRoLlBJKjgwLjYpLSgoKDIqTWF0aC5QSSo4MC42KS8zNjApKm1heEFuZ2xlKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbnB1dFVwZGF0ZWQoZTphbnkpe1xyXG4gICAgICAgIGxldCB2YWwgPSBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICBzZXRDdXJyZW50VmFsdWUodmFsKTtcclxuICAgICAgICBzZXRDdXJyZW50QW5nbGUoKCgobWF4QW5nbGUpL21heCkqdmFsKSsoYW5nbGVPdmVybGFwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZS5uYXRpdmVFdmVudC5vZmZzZXRZLShjb21wb25lbnRIZWlnaHQvMiksIGUubmF0aXZlRXZlbnQub2Zmc2V0WC0oY29tcG9uZW50V2lkdGgvMikpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUyID0gYW5nbGUgKiAoMTgwL01hdGguUEkpO1xyXG4gICAgICAgICAgICAvL3RvIDM2MCByYW5nZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPCAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAzNjAtKC1hbmdsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2V0IDAgYW5nbGVcclxuICAgICAgICAgICAgYW5nbGUyKz0gMTgwO1xyXG4gICAgICAgICAgICAvL2NvcmVjdCBhbmdsZVxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPiAzNjApXHJcbiAgICAgICAgICAgICAgICBhbmdsZTItPTM2MFxyXG5cclxuICAgICAgICAgICAgYW5nbGUyPShtYXhBbmdsZS1hbmdsZTIpO1xyXG4gICAgICAgICAgICBpZihhbmdsZTIgPCAwKVxyXG4gICAgICAgICAgICAgICAgYW5nbGUyPS0oYW5nbGUyLWFuZ2xlT3ZlcmxhcCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGFuZ2xlMj0tKGFuZ2xlMi1tYXhBbmdsZS1hbmdsZU92ZXJsYXApO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYW5nbGUyKTtcclxuICAgICAgICAgICAgaWYoYW5nbGUyID49IChtaW5BbmdsZSkgJiYgYW5nbGUyIDw9IChtYXhBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShNYXRoLnJvdW5kKCgobWF4IC8gbWF4QW5nbGUpICogYW5nbGUyKSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0QW5nbGVUcmFucyhhbmdsZTIrYW5nbGVPdmVybGFwKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmdsZTIrYW5nbGVPdmVybGFwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRyYWcoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZighZHJhZykge1xyXG4gICAgICAgICAgICBzZXREcmFnKHRydWUpO1xyXG4gICAgICAgICAgICBpZihoYW5kbGUuY3VycmVudClcclxuICAgICAgICAgICAgaGFuZGxlLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cz0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRHJhZ0VuZChlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKGRyYWcpe1xyXG4gICAgICAgICAgICBzZXREcmFnKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYoaGFuZGxlLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGhhbmRsZS5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY29udGFpbmVycykge1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLnJvdW5kKGhhbmRBbmdsZSk7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZSA8PSAobWF4QW5nbGUpICYmIGFuZ2xlID49IChtaW5BbmdsZSthbmdsZU92ZXJsYXApKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb250YWluZXJBbmdsZSA+IGxhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGxhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGUoY29udGFpbmVyc1tpXS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShjb250YWluZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZihoYW5kLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBoYW5kLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyBhbmdsZSArIFwiZGVnKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaGFuZEFuZ2xlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGFuaW0gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOmFuZ2xlVHJhbnNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6YW5pbSxcclxuICAgICAgICAgICAgdmFsdWU6KGN1cnJlbnRBbmdsZSksXHJcbiAgICAgICAgICAgIGVhc2luZzpcImxpbmVhclwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjo1MDAsXHJcbiAgICAgICAgICAgIHVwZGF0ZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy91cGRhdGVIYW5kQW5nbGUoYW5pbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIYW5kQW5nbGUoYW5pbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOigpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRBbmdsZVRyYW5zKGN1cnJlbnRBbmdsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sW2N1cnJlbnRBbmdsZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHZhbHVlSW5wdXQuY3VycmVudClcclxuICAgICAgICB2YWx1ZUlucHV0LmN1cnJlbnQuaW5uZXJIVE1MID0gY3VycmVudFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYoIWluaXRpYWxpemUpXHJcbiAgICAgICAgcHJvcHMub25WYWx1ZUNoYW5nZWQoY3VycmVudFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSxbY3VycmVudFZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGluaXRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBpZihpbml0VmFsdWUhPXVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgayA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVMaW5lU2VnQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmRBbmdsZSA9IE1hdGgucm91bmQoKG1heEFuZ2xlIC8gbWF4KSAqIGspK2FuZ2xlT3ZlcmxhcDtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gJzxkaXYgc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKCcgKyBoYW5kQW5nbGUgKyAnZGVnKSFpbXBvcnRhbnQ7d2lkdGg6JysobGluZUNvbnRhaW5lclNpemVzLndpZHRoKSsnO1wiIGNsYXNzPVwidmFsdWVMaW5lQ29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ2YWx1ZUxpbmVHcm91cFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPScrKChpJXZhbHVlTGluZVNlZ0JpZ0VhY2g9PTApP1wiYmlnVmFsdWVMaW5lXCI6XCJzbWFsbFZhbHVlTGluZVwiKSsnPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidmFsdWVcIiBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoJyArIC1oYW5kQW5nbGUgKyAnZGVnKVwiPicrKChpJXZhbHVlTGluZVNlZ0JpZ0VhY2g9PTApP01hdGgucm91bmQoayk6XCJcIikrJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXMuY3VycmVudC5pbm5lckhUTUwgKz0gbGluZTtcclxuICAgICAgICAgICAgICAgIGsgKz0gbWF4IC8gKHZhbHVlTGluZVNlZ0NvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lU2VnQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmRBbmdsZSA9IE1hdGgucm91bmQoKG1heEFuZ2xlIC8gbWF4KSAqIGopK2FuZ2xlT3ZlcmxhcDtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gJzxkaXYgcm90YXRlPScgKyBoYW5kQW5nbGUgKyAnIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgaGFuZEFuZ2xlICsgJ2RlZykhaW1wb3J0YW50O3dpZHRoOicrKGxpbmVDb250YWluZXJTaXplcy53aWR0aCkrJztcIiBjbGFzcz1cImxpbmVDb250YWluZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lcy5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLmN1cnJlbnQuaW5uZXJIVE1MICs9IGxpbmU7XHJcbiAgICAgICAgICAgICAgICBqICs9IG1heCAvIChsaW5lU2VnQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbnREYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZUNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBsZXQgaW5pdGxhc3ROb2RlID0gY29udERhdGFbMF0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgbGV0IGluaXRMYXN0Tm9kZUFuZ2xlID0gMDtcclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogY29udERhdGFbMF0uY2hpbGROb2Rlc1swXSxcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGluZVNlZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGluZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBbNzMsIDgwLCAyNDVdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBbMjQ0LCA2NywgNTRdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lU2Vncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAoKGkpIC8gKGxpbmVTZWdzLmxlbmd0aCAtIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVkID0gZmlyc3RbMF0gKyBwZXJjZW50ICogKHNlY29uZFswXSAtIGZpcnN0WzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBncmVlbiA9IGZpcnN0WzFdICsgcGVyY2VudCAqIChzZWNvbmRbMV0gLSBmaXJzdFsxXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmx1ZSA9IGZpcnN0WzJdICsgcGVyY2VudCAqIChzZWNvbmRbMl0gLSBmaXJzdFsyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGluZVNlZ3NbaV0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kOlwiICsgXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpO1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICAgICBzZXRDb250YWluZXJzKGNvbnREYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlSGFuZEFuZ2xlID0gKGFuZ2xlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gTWF0aC5yb3VuZChhbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IG1heEFuZ2xlICYmIGFuZ2xlID49IG1pbkFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250RGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lckFuZ2xlID0gcGFyc2VJbnQoY29udERhdGFbaV0uZ2V0QXR0cmlidXRlKCdyb3RhdGUnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lckFuZ2xlID4gaW5pdExhc3ROb2RlQW5nbGUgJiYgY29udGFpbmVyQW5nbGUgPD0gYW5nbGUpIHx8IChjb250YWluZXJBbmdsZSA8IGluaXRMYXN0Tm9kZUFuZ2xlICYmIGFuZ2xlIDw9IGNvbnRhaW5lckFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGluaXRsYXN0Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250RGF0YVtpXS5jaGlsZE5vZGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGxhc3ROb2RlID0gY29udERhdGFbaV0uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRMYXN0Tm9kZUFuZ2xlID0gY29udGFpbmVyQW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW5kXCIpLnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZShcIisoYW5nbGUpK1wiZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRBbmdsZVRyYW5zID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaW5pdEFuZ2xlVHJhbnMsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKChtYXhBbmdsZSAvIG1heCkgKiBpbml0VmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUhhbmRBbmdsZShpbml0QW5nbGVUcmFucy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZShpbml0bGFzdE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlQW5nbGUoaW5pdExhc3ROb2RlQW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihpbml0VmFsdWUhPXVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoaW5pdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEFuZ2xlKCgobWF4QW5nbGUgLyBtYXgpICogaW5pdFZhbHVlKSthbmdsZU92ZXJsYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5pdGlhbGl6ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3Byb3BzLmRlZmF1bHRWYWx1ZV0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwid29ya1wiIG9uTW91c2VNb3ZlPXtvbk1vdmV9IG9uTW91c2VVcD17b25EcmFnRW5kfSBzdHlsZT17d29ya3NwYWNlU2l6ZX0gY2xhc3NOYW1lPVwid29ya3NwYWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiaGFuZFBhdGhcIiBzdHlsZT17aGFuZFBhdGhTaXplfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNjEuNDUgMTYxLjQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT57XCIucGF0aGNpcmNsZXtmaWxsOm5vbmU7c3Ryb2tlOlwiKyhwcm9wcy50aGVtZT09MT9cIndoaXRlXCI6XCJibGFja1wiKStcIjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utb3BhY2l0eTowLjA4O3N0cm9rZS13aWR0aDozcHg7fVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRvdsO9IHpkcm9qIDIyPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMi0yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwicGF0aGNpcmNsZVwiIGN4PVwiODAuNzNcIiBjeT1cIjgwLjczXCIgcj1cIjgwLjZcIiBzdHlsZT17e3RyYW5zZm9ybTpoYW5kUGF0aENpcmNsZS50cmFuc2Zvcm0sdHJhbnNmb3JtT3JpZ2luOlwiY2VudGVyXCJ9fSBzdHJva2VEYXNoYXJyYXk9e2hhbmRQYXRoQ2lyY2xlLmNpcmNsZVJhZGl1c30gc3Ryb2tlRGFzaG9mZnNldD17aGFuZFBhdGhDaXJjbGUubWF4UmFkaXVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtsaW5lc30gaWQ9XCJsaW5lc1wiIHN0eWxlPXtsaW5lc1NpemV9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17aGFuZH0gaWQ9XCJoYW5kXCIgc3R5bGU9e2hhbmRTaXplfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHJlZj17aGFuZGxlfSBvbk1vdXNlRG93bj17b25EcmFnfSBpZD1cImhhbmRsZVwiIHN0eWxlPXtoYW5kbGVTaXplfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNi4wNCAyNi4wNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT57XCIuaGFuZGxle2ZpbGw6XCIraGFuZGxlQ29sb3IrXCJ9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGF0b3bDvSB6ZHJvaiAyNTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMi0yXCIgZGF0YS1uYW1lPVwiVnJzdHZhIDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cImhhbmRsZVwiIGN4PVwiMTMuMDJcIiBjeT1cIjEzLjAyXCIgcj1cIjEzLjAyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInZhbHVlR3JvdXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gcmVmPXt2YWx1ZUlucHV0fSBzdHlsZT17e3BvaW50ZXJFdmVudHM6XCJhbGxcIn19IG9uQmx1cj17aW5wdXRVcGRhdGVkfSBjb250ZW50RWRpdGFibGUvPjxzcGFuPsKwQzwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT57XCIuc21hbGxWYWx1ZUxpbmUsLmJpZ1ZhbHVlTGluZXtiYWNrZ3JvdW5kOlwiKyhwcm9wcy50aGVtZT09MT9cIndoaXRlXCI6XCJibGFja1wiKStcIn1cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLndvcmtzcGFjZXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDovKiMyMTIxMjEqL25vbmU7XHJcbiAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53b3Jrc3BhY2UgLnZhbHVlR3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNsaW5lcywjaGFuZFBhdGgsLmxpbmVDb250YWluZXIsLnZhbHVlTGluZUNvbnRhaW5lciwudmFsdWVHcm91cHtcclxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OnZpc2libGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZFBhdGh7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDo1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2xpbmVze1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgICAgLy93aWR0aDo1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZUNvbnRhaW5lciwudmFsdWVMaW5lQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGluZXtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc21hbGxWYWx1ZUxpbmV7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iaWdWYWx1ZUxpbmV7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudmFsdWVMaW5lR3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudmFsdWV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRQYXRoe1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDUwJTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKXJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kbGV7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoNTAlLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXJtb3N0YXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.b72d5f0bf2eac73dbb82.hot-update.js.map