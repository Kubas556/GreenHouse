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
  var angleOverlap = (maxAngle - 180) / 2;
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
      if (angle2 < 0) angle2 = -(angleOverlap + (360 - maxAngle + angle2));else angle2 = -(angle2 - maxAngle + angleOverlap);

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
      lineNumber: 300
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
      lineNumber: 301
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
      lineNumber: 302
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, ".pathcircle{fill:none;stroke:" + (props.theme == 1 ? "white" : "black") + ";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:3px;}")), __jsx("title", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Datov\xFD zdroj 22"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
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
      lineNumber: 309
    },
    __self: this
  })))), __jsx("div", {
    ref: lines,
    id: "lines",
    style: linesSize,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), __jsx("div", {
    ref: hand,
    id: "hand",
    style: handSize,
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
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
      lineNumber: 316
    },
    __self: this
  }, __jsx("defs", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, ".handle{fill:" + handleColor + "}")), __jsx("title", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Datov\xFD zdroj 25"), __jsx("g", {
    id: "Vrstva_2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, __jsx("g", {
    id: "Vrstva_2-2",
    "data-name": "Vrstva 2",
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, __jsx("circle", {
    cx: "13.02",
    cy: "13.02",
    r: "13.02",
    className: "jsx-1771400329" + " " + "handle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-1771400329" + " " + "valueGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
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
      lineNumber: 329
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1771400329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "\xB0C")))), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, ".smallValueLine,.bigValueLine{background:" + (props.theme == 1 ? "white" : "black") + "}"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1771400329",
    __self: this
  }, ".workspace{background:none;margin:auto;position:relative;border-radius:100%;}.workspace .valueGroup{position:absolute;margin:0px;margin-top:50%;margin-left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:2rem;}#lines,#handPath,.lineContainer,.valueLineContainer,.valueGroup{pointer-events:none;overflow:visible;}#handPath{width:5rem;height:5rem;}#lines{position:absolute;height:0px;margin-top:50%;}.lineContainer,.valueLineContainer{height:0;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.line{height:5px;width:2rem;margin-left:0.5rem;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;}.smallValueLine{height:2px;width:0.5rem;margin-left:3.5rem;opacity:0.2;}.bigValueLine{height:2px;width:1rem;margin-left:3.5rem;opacity:0.2;}.valueLineGroup{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.value{margin-left:0.5rem;}#handPath{margin:50%;-webkit-transform:translate(-50%,-50%)rotate(180deg);-ms-transform:translate(-50%,-50%)rotate(180deg);transform:translate(-50%,-50%)rotate(180deg);position:absolute;}#hand{margin-top:50%;background:red;-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;position:absolute;height:0;}#handle{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;width:2rem;height:2rem;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);right:50%;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFrdWIgU2VkbGFrXFxXZWJzdG9ybVByb2plY3RzXFxwcm9qZWt0X0NQIC0gdHlwZXNjcmlwdFxcY29tcG9uZW50c1xcVGVybW9zdGF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0VStCLEFBRzZDLEFBUVIsQUFRRSxBQUlWLEFBSU8sQUFPVCxBQVFFLEFBTUMsQUFNQSxBQU1FLEFBS08sQUFLVCxBQUtHLEFBUUYsU0FoREssRUFYTixBQW1CRCxBQU1HLEFBTUYsQUFnQmtDLElBSy9CLENBdEVILEVBTUEsQUFnQkQsQ0FzQ1osQ0E5Q2tCLEVBd0JFLEFBWUMsQ0EvQnJCLENBeUJxQixHQWRQLENBN0JLLENBTUYsQUFpQkQsQ0ErQ2dCLE9BeERoQyxJQXdCZ0MsQUFZbkIsRUFOQSxDQXJDSyxBQWlCbEIsRUF2Qm9CLEdBNEVSLElBMUJaLEVBTkEsS0FyQ2tDLEFBc0VyQixLQTVFYixPQTZFK0IsRUF6QlYsMkJBeEJELCtCQXlDRCxXQWhDbkIsQUFnQnFCLE9Ba0JYLFFBUlUsQ0FTcEIsTUFqRWlCLFNBdUVMLEVBZFosSUF4REEsSUF1RW1CLFVBbERDLFFBbURwQixrQ0ExQkEsMkJBeEJnQyxzR0FDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxKYWt1YiBTZWRsYWtcXFdlYnN0b3JtUHJvamVjdHNcXHByb2pla3RfQ1AgLSB0eXBlc2NyaXB0XFxjb21wb25lbnRzXFxUZXJtb3N0YXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLE1vdXNlRXZlbnQsU3ludGhldGljRXZlbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IHtmaXJlYmFzZX0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBJVGVybW9zdGF0IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lUZXJtb3N0YXRcIjtcclxuaW1wb3J0IHtudW1iZXJ9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7dXNlVGhlbWV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBUZXJtb3N0YXQocHJvcHM6SVRlcm1vc3RhdCl7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gNTA7XHJcbiAgICBjb25zdCBjb21wb25lbnRXaWR0aCA9IDMzNztcclxuICAgIGNvbnN0IGNvbXBvbmVudEhlaWdodCA9IDMzNztcclxuICAgIGNvbnN0IG1pbkFuZ2xlID0gMDtcclxuICAgIGNvbnN0IG1heEFuZ2xlID0gMjQwO1xyXG4gICAgY29uc3QgYW5nbGVPdmVybGFwID0gKG1heEFuZ2xlLTE4MCkvMjtcclxuICAgIGNvbnN0IGxpbmVTZWdDb3VudCA9IDI1Ly8xMTtcclxuICAgIGNvbnN0IHZhbHVlTGluZVNlZ0NvdW50ID0gKDE2KjIpKzE7XHJcbiAgICBjb25zdCB2YWx1ZUxpbmVTZWdCaWdFYWNoID0gODtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IGhhbmRsZUNvbG9yID0gdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW47XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgdmFsdWVJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IGhhbmQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgaGFuZGxlID0gdXNlUmVmPFNWR1NWR0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjb250YWluZXJzLHNldENvbnRhaW5lcnNdID0gdXNlU3RhdGU8SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50Pj4oKTtcclxuXHJcbiAgICBjb25zdCBbbGFzdE5vZGUsc2V0TGFzdE5vZGVdID0gdXNlU3RhdGU8Q2hpbGROb2RlPigpO1xyXG4gICAgY29uc3QgW2xhc3ROb2RlQW5nbGUsc2V0TGFzdE5vZGVBbmdsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FuZ2xlVHJhbnMsc2V0QW5nbGVUcmFuc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2N1cnJlbnRBbmdsZSxzZXRDdXJyZW50QW5nbGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtoYW5kQW5nbGUsc2V0SGFuZEFuZ2xlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2RyYWcsc2V0RHJhZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5pdGlhbGl6ZSxzZXRJbml0aWFsaXplXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtzcGFjZVNpemUgPSB7XHJcbiAgICAgICAgaGVpZ2h0OmNvbXBvbmVudEhlaWdodCtcInB4XCIsXHJcbiAgICAgICAgd2lkdGg6Y29tcG9uZW50V2lkdGgrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVzU2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDpjb21wb25lbnRXaWR0aCtcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGluZUNvbnRhaW5lclNpemVzID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8yK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kUGF0aFNpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6IGNvbXBvbmVudFdpZHRoLzMrXCJweFwiLFxyXG4gICAgICAgIGhlaWdodDogY29tcG9uZW50SGVpZ2h0LzMrXCJweFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBjb21wb25lbnRXaWR0aC8yK1wicHhcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaXplID0ge1xyXG4gICAgICAgIHJpZ2h0OiAoY29tcG9uZW50V2lkdGgvMikvMytcInB4XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZFBhdGhDaXJjbGUgPSB7XHJcbiAgICAgICAgY2lyY2xlUmFkaXVzOjIqTWF0aC5QSSo4MC42LFxyXG4gICAgICAgIHRyYW5zZm9ybTpcInJvdGF0ZShcIithbmdsZU92ZXJsYXArXCJkZWcpXCIsXHJcbiAgICAgICAgbWF4UmFkaXVzOigyKk1hdGguUEkqODAuNiktKCgoMipNYXRoLlBJKjgwLjYpLzM2MCkqbWF4QW5nbGUpXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlucHV0VXBkYXRlZChlOmFueSl7XHJcbiAgICAgICAgbGV0IHZhbCA9IE51bWJlci5wYXJzZUludChlLnRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgIHNldEN1cnJlbnRWYWx1ZSh2YWwpO1xyXG4gICAgICAgIHNldEN1cnJlbnRBbmdsZSgoKChtYXhBbmdsZSkvbWF4KSp2YWwpKyhhbmdsZU92ZXJsYXApKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdmUoZTpNb3VzZUV2ZW50KXtcclxuICAgICAgICBpZihkcmFnKXtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihlLm5hdGl2ZUV2ZW50Lm9mZnNldFktKGNvbXBvbmVudEhlaWdodC8yKSwgZS5uYXRpdmVFdmVudC5vZmZzZXRYLShjb21wb25lbnRXaWR0aC8yKSk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZTIgPSBhbmdsZSAqICgxODAvTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIC8vdG8gMzYwIHJhbmdlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA8IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IDM2MC0oLWFuZ2xlMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9zZXQgMCBhbmdsZVxyXG4gICAgICAgICAgICBhbmdsZTIrPSAxODA7XHJcbiAgICAgICAgICAgIC8vY29yZWN0IGFuZ2xlXHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA+IDM2MClcclxuICAgICAgICAgICAgICAgIGFuZ2xlMi09MzYwXHJcblxyXG4gICAgICAgICAgICBhbmdsZTI9KG1heEFuZ2xlLWFuZ2xlMik7XHJcbiAgICAgICAgICAgIGlmKGFuZ2xlMiA8IDApXHJcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAtKGFuZ2xlT3ZlcmxhcCsoKDM2MC1tYXhBbmdsZSkgKyBhbmdsZTIpKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYW5nbGUyPS0oYW5nbGUyLW1heEFuZ2xlK2FuZ2xlT3ZlcmxhcCk7XHJcblxyXG4gICAgICAgICAgICBpZihhbmdsZTIgPj0gKG1pbkFuZ2xlKSAmJiBhbmdsZTIgPD0gKG1heEFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKE1hdGgucm91bmQoKChtYXggLyBtYXhBbmdsZSkgKiBhbmdsZTIpKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBbmdsZVRyYW5zKGFuZ2xlMithbmdsZU92ZXJsYXApO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFuZEFuZ2xlKGFuZ2xlMithbmdsZU92ZXJsYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRHJhZyhlOk1vdXNlRXZlbnQpe1xyXG4gICAgICAgIGlmKCFkcmFnKSB7XHJcbiAgICAgICAgICAgIHNldERyYWcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKGhhbmRsZS5jdXJyZW50KVxyXG4gICAgICAgICAgICBoYW5kbGUuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25EcmFnRW5kKGU6TW91c2VFdmVudCl7XHJcbiAgICAgICAgaWYoZHJhZyl7XHJcbiAgICAgICAgICAgIHNldERyYWcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZihoYW5kbGUuY3VycmVudClcclxuICAgICAgICAgICAgaGFuZGxlLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGgucm91bmQoaGFuZEFuZ2xlKTtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlIDw9IChtYXhBbmdsZSkgJiYgYW5nbGUgPj0gKG1pbkFuZ2xlK2FuZ2xlT3ZlcmxhcCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyQW5nbGUgPSBwYXJzZUludChjb250YWluZXJzW2ldLmdldEF0dHJpYnV0ZSgncm90YXRlJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnRhaW5lckFuZ2xlID4gbGFzdE5vZGVBbmdsZSAmJiBjb250YWluZXJBbmdsZSA8PSBhbmdsZSkgfHwgKGNvbnRhaW5lckFuZ2xlIDwgbGFzdE5vZGVBbmdsZSAmJiBhbmdsZSA8PSBjb250YWluZXJBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogbGFzdE5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250YWluZXJzW2ldLmNoaWxkTm9kZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMS41LCBlYXNpbmc6ICdlYXNlT3V0U2luZScsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZShjb250YWluZXJzW2ldLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0Tm9kZUFuZ2xlKGNvbnRhaW5lckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGlmKGhhbmQuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGhhbmQuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArIGFuZ2xlICsgXCJkZWcpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtoYW5kQW5nbGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgYW5pbSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6YW5nbGVUcmFuc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czphbmltLFxyXG4gICAgICAgICAgICB2YWx1ZTooY3VycmVudEFuZ2xlKSxcclxuICAgICAgICAgICAgZWFzaW5nOlwibGluZWFyXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOjUwMCxcclxuICAgICAgICAgICAgdXBkYXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZUhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldEhhbmRBbmdsZShhbmltLnZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6KCk9PntcclxuICAgICAgICAgICAgICAgIHNldEFuZ2xlVHJhbnMoY3VycmVudEFuZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbY3VycmVudEFuZ2xlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYodmFsdWVJbnB1dC5jdXJyZW50KVxyXG4gICAgICAgIHZhbHVlSW5wdXQuY3VycmVudC5pbm5lckhUTUwgPSBjdXJyZW50VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZighaW5pdGlhbGl6ZSlcclxuICAgICAgICBwcm9wcy5vblZhbHVlQ2hhbmdlZChjdXJyZW50VmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9LFtjdXJyZW50VmFsdWVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgaW5pdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGlmKGluaXRWYWx1ZSE9dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUxpbmVTZWdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZEFuZ2xlID0gTWF0aC5yb3VuZCgobWF4QW5nbGUgLyBtYXgpICogaykrYW5nbGVPdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSAnPGRpdiBzdHlsZT1cInRyYW5zZm9ybTpyb3RhdGUoJyArIGhhbmRBbmdsZSArICdkZWcpIWltcG9ydGFudDt3aWR0aDonKyhsaW5lQ29udGFpbmVyU2l6ZXMud2lkdGgpKyc7XCIgY2xhc3M9XCJ2YWx1ZUxpbmVDb250YWluZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInZhbHVlTGluZUdyb3VwXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9JysoKGkldmFsdWVMaW5lU2VnQmlnRWFjaD09MCk/XCJiaWdWYWx1ZUxpbmVcIjpcInNtYWxsVmFsdWVMaW5lXCIpKyc+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ2YWx1ZVwiIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgnICsgLWhhbmRBbmdsZSArICdkZWcpXCI+JysoKGkldmFsdWVMaW5lU2VnQmlnRWFjaD09MCk/TWF0aC5yb3VuZChrKTpcIlwiKSsnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZXMuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICBsaW5lcy5jdXJyZW50LmlubmVySFRNTCArPSBsaW5lO1xyXG4gICAgICAgICAgICAgICAgayArPSBtYXggLyAodmFsdWVMaW5lU2VnQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVTZWdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZEFuZ2xlID0gTWF0aC5yb3VuZCgobWF4QW5nbGUgLyBtYXgpICogaikrYW5nbGVPdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSAnPGRpdiByb3RhdGU9JyArIGhhbmRBbmdsZSArICcgc3R5bGU9XCJ0cmFuc2Zvcm06cm90YXRlKCcgKyBoYW5kQW5nbGUgKyAnZGVnKSFpbXBvcnRhbnQ7d2lkdGg6JysobGluZUNvbnRhaW5lclNpemVzLndpZHRoKSsnO1wiIGNsYXNzPVwibGluZUNvbnRhaW5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXMuY3VycmVudC5pbm5lckhUTUwgKz0gbGluZTtcclxuICAgICAgICAgICAgICAgIGogKz0gbWF4IC8gKGxpbmVTZWdDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5lQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGxldCBpbml0bGFzdE5vZGUgPSBjb250RGF0YVswXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgaW5pdExhc3ROb2RlQW5nbGUgPSAwO1xyXG4gICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBjb250RGF0YVswXS5jaGlsZE5vZGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IDEuNSwgZWFzaW5nOiAnZWFzZU91dFNpbmUnLCBkdXJhdGlvbjogNTAwfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsaW5lU2VncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IFs3MywgODAsIDI0NV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IFsyNDQsIDY3LCA1NF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVTZWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9ICgoaSkgLyAobGluZVNlZ3MubGVuZ3RoIC0gMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWQgPSBmaXJzdFswXSArIHBlcmNlbnQgKiAoc2Vjb25kWzBdIC0gZmlyc3RbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyZWVuID0gZmlyc3RbMV0gKyBwZXJjZW50ICogKHNlY29uZFsxXSAtIGZpcnN0WzFdKTtcclxuICAgICAgICAgICAgICAgIHZhciBibHVlID0gZmlyc3RbMl0gKyBwZXJjZW50ICogKHNlY29uZFsyXSAtIGZpcnN0WzJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5lU2Vnc1tpXS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQ6XCIgKyBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIik7XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbnRhaW5lcnMoY29udERhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVIYW5kQW5nbGUgPSAoYW5nbGU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBNYXRoLnJvdW5kKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5nbGUgPD0gbWF4QW5nbGUgJiYgYW5nbGUgPj0gbWluQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnREYXRhLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyQW5nbGUgPSBwYXJzZUludChjb250RGF0YVtpXS5nZXRBdHRyaWJ1dGUoJ3JvdGF0ZScpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoY29udGFpbmVyQW5nbGUgPiBpbml0TGFzdE5vZGVBbmdsZSAmJiBjb250YWluZXJBbmdsZSA8PSBhbmdsZSkgfHwgKGNvbnRhaW5lckFuZ2xlIDwgaW5pdExhc3ROb2RlQW5nbGUgJiYgYW5nbGUgPD0gY29udGFpbmVyQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogaW5pdGxhc3ROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmF0aW9uOiA1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNvbnREYXRhW2ldLmNoaWxkTm9kZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiAxLjUsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0bGFzdE5vZGUgPSBjb250RGF0YVtpXS5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdExhc3ROb2RlQW5nbGUgPSBjb250YWluZXJBbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbmRcIikuc3R5bGUudHJhbnNmb3JtPVwicm90YXRlKFwiKyhhbmdsZSkrXCJkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5pdEFuZ2xlVHJhbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpbml0QW5nbGVUcmFucyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoKG1heEFuZ2xlIC8gbWF4KSAqIGluaXRWYWx1ZSksXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSGFuZEFuZ2xlKGluaXRBbmdsZVRyYW5zLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExhc3ROb2RlKGluaXRsYXN0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5vZGVBbmdsZShpbml0TGFzdE5vZGVBbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGluaXRWYWx1ZSE9dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShpbml0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50QW5nbGUoKChtYXhBbmdsZSAvIG1heCkgKiBpbml0VmFsdWUpK2FuZ2xlT3ZlcmxhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRJbml0aWFsaXplKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcHJvcHMuZGVmYXVsdFZhbHVlXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3b3JrXCIgb25Nb3VzZU1vdmU9e29uTW92ZX0gb25Nb3VzZVVwPXtvbkRyYWdFbmR9IHN0eWxlPXt3b3Jrc3BhY2VTaXplfSBjbGFzc05hbWU9XCJ3b3Jrc3BhY2VcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJoYW5kUGF0aFwiIHN0eWxlPXtoYW5kUGF0aFNpemV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2MS40NSAxNjEuNDVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntcIi5wYXRoY2lyY2xle2ZpbGw6bm9uZTtzdHJva2U6XCIrKHByb3BzLnRoZW1lPT0xP1wid2hpdGVcIjpcImJsYWNrXCIpK1wiO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1vcGFjaXR5OjAuMDg7c3Ryb2tlLXdpZHRoOjNweDt9XCJ9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRhdG92w70gemRyb2ogMjI8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiVnJzdHZhXzJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yLTJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJwYXRoY2lyY2xlXCIgY3g9XCI4MC43M1wiIGN5PVwiODAuNzNcIiByPVwiODAuNlwiIHN0eWxlPXt7dHJhbnNmb3JtOmhhbmRQYXRoQ2lyY2xlLnRyYW5zZm9ybSx0cmFuc2Zvcm1PcmlnaW46XCJjZW50ZXJcIn19IHN0cm9rZURhc2hhcnJheT17aGFuZFBhdGhDaXJjbGUuY2lyY2xlUmFkaXVzfSBzdHJva2VEYXNob2Zmc2V0PXtoYW5kUGF0aENpcmNsZS5tYXhSYWRpdXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2xpbmVzfSBpZD1cImxpbmVzXCIgc3R5bGU9e2xpbmVzU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtoYW5kfSBpZD1cImhhbmRcIiBzdHlsZT17aGFuZFNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgcmVmPXtoYW5kbGV9IG9uTW91c2VEb3duPXtvbkRyYWd9IGlkPVwiaGFuZGxlXCIgc3R5bGU9e2hhbmRsZVNpemV9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI2LjA0IDI2LjA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntcIi5oYW5kbGV7ZmlsbDpcIitoYW5kbGVDb2xvcitcIn1cIn08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRvdsO9IHpkcm9qIDI1PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJWcnN0dmFfMlwiIGRhdGEtbmFtZT1cIlZyc3R2YSAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlZyc3R2YV8yLTJcIiBkYXRhLW5hbWU9XCJWcnN0dmEgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwiaGFuZGxlXCIgY3g9XCIxMy4wMlwiIGN5PVwiMTMuMDJcIiByPVwiMTMuMDJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1widmFsdWVHcm91cFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiByZWY9e3ZhbHVlSW5wdXR9IHN0eWxlPXt7cG9pbnRlckV2ZW50czpcImFsbFwifX0gb25CbHVyPXtpbnB1dFVwZGF0ZWR9IGNvbnRlbnRFZGl0YWJsZS8+PHNwYW4+wrBDPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPntcIi5zbWFsbFZhbHVlTGluZSwuYmlnVmFsdWVMaW5le2JhY2tncm91bmQ6XCIrKHByb3BzLnRoZW1lPT0xP1wid2hpdGVcIjpcImJsYWNrXCIpK1wifVwifTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAud29ya3NwYWNle1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOi8qIzIxMjEyMSovbm9uZTtcclxuICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLndvcmtzcGFjZSAudmFsdWVHcm91cHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2xpbmVzLCNoYW5kUGF0aCwubGluZUNvbnRhaW5lciwudmFsdWVMaW5lQ29udGFpbmVyLC52YWx1ZUdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5kUGF0aHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6NXJlbTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbGluZXN7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL3dpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5lQ29udGFpbmVyLC52YWx1ZUxpbmVDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5le1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbWFsbFZhbHVlTGluZXtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MC4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJpZ1ZhbHVlTGluZXtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OjAuMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52YWx1ZUxpbmVHcm91cHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52YWx1ZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjaGFuZFBhdGh7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAvL2hlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNoYW5ke1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2hhbmRsZXtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSg1MCUsLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlcm1vc3RhdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Jakub Sedlak\\\\WebstormProjects\\\\projekt_CP - typescript\\\\components\\\\Termostat.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Termostat);

/***/ })

})
//# sourceMappingURL=[id].js.013a01967e31a8de0f00.hot-update.js.map