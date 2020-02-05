webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/number/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/agent */ "./components/agent.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/constants */ "./components/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/home/grant/sites/ff12-frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var scheme = {
  name: 'Paraiso Dark',
  bg: '#2f1e2e',
  fg: '#bfbfbf',
  light: '#777',
  hues: ['#ef6155', '#65D6A3', '#fec418', '#53D1FA', '#BB91E2', '#5bc4bf']
};
var red = scheme.hues[0];
var green = scheme.hues[1];
var yellow = scheme.hues[2];
var teal = scheme.hues[3];
var purple = scheme.hues[4];
var blue = scheme.hues[5];
var bgs = [yellow, teal, green, purple];
var black = scheme.bg;
var fs = 13;
var lh = 1.5;
var ch = 9.599990844726562;
var cw = 8;
var rlh = fs * lh;
var cell = {
  w: ch,
  h: rlh / 2
};
var speeds = [640 * 2, 640, 320, 80, 40, 20];
var names = ['OCSVM', 'Autoencoder', 'Var Autoencoder', 'BiGAN'];
var name_max = names.reduce(function (t, c) {
  console.log(c);
  console.log(c.length);
  return Math.max(c.length, t);
}, 0);
var size = 4;
var termheight = 4;
var sort_options = ['accuracy', 'precision', 'recall'];
var finish_line = 10000;
function Index() {
  var _ref;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var handler_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var sref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var vref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var href = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var rankref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      frame = _useState2[0],
      setFrame = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      pspace = _useState3[0],
      setPspace = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      pleft = _useState4[0],
      setPleft = _useState4[1];

  var panels_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n) {
    return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n) {
      return 0;
    });
  }));
  var pdim_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var tdim_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var title_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var readout_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var truth_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([0, 0]);
  var treadout_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var ranklabel_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var topbar_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(1),
      dpr = _useState5[0],
      setDpr = _useState5[1];

  var icon_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var con_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(3),
      speed = _useState6[0],
      setSpeed = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      initSpeed = _useState7[0],
      setInitSpeed = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      pause = _useState8[0],
      setPause = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      info = _useState9[0],
      setInfo = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      sort = _useState10[0],
      setSort = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      finish = _useState11[0],
      setFinish = _useState11[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (data !== null) {
      // set layout
      var v = vref.current;
      var vwidth = pspace - 8;
      v.width = vwidth * dpr;
      v.style.marginLeft = pleft + 'px';
      var vx = v.getContext('2d');
      var pdim = pdim_ref.current;
      var tdim = tdim_ref.current;
      var columns = Math.floor(v.width / size);
      var panel_columns = Math.floor(Math.floor((v.width / dpr - size * 4) / size) / 2);
      var panel_rows = Math.ceil(10000 / (panel_columns - 1));
      var pw = panel_columns * size;
      var ph = panel_rows * size;
      var pc = 2;
      var pr = 2;
      var top = rlh;
      var bottom = rlh * 2;
      var bottom_space = rlh / 2;
      var tc = panel_columns * 2 + 4;
      var tr = Math.ceil(10000 / (columns - 1));
      var tw = tc * size;
      var th = tr * size;
      tdim_ref.current = [tw, th];
      var vheight = (top + ph + bottom + bottom_space) * 2;
      v.height = vheight * dpr;
      v.style.width = vwidth + 'px';
      v.style.height = vheight + 'px';
      vx.scale(dpr, dpr);
      var h = href.current;
      h.width = v.width;
      h.height = v.height;
      h.style.width = vwidth + 'px';
      h.style.height = vheight + 'px';
      var hx = h.getContext('2d');
      hx.scale(dpr, dpr);
      var $rank = rankref.current;
      $rank.style.width = tw + 'px';
      $rank.style.left = pleft + 'px';
      var s = sref.current;
      var swidth = tw;
      var sheight = rlh * 4;
      s.width = swidth * dpr;
      s.height = sheight * dpr;
      s.style.width = swidth + 'px';
      s.style.height = sheight + 'px';
      var sx = s.getContext('2d');
      sx.scale(dpr, dpr);
      var ranklabel = ranklabel_ref.current;
      ranklabel.style.width = tw + 'px';
      vx.fillStyle = '#eee';

      for (var r = 0; r < pr; r++) {
        for (var c = 0; c < pc; c++) {
          var i = r * pc + c;
          var x = c * (pw + size * 4);
          var y = r * (top + ph + bottom + bottom_space) + top;
          var w = pw;
          var _h = ph;
          pdim[i] = [x, y, w, _h];
          vx.fillRect(x, y, w, _h);
        }
      }

      var $titles = title_ref.current;

      for (var _r = 0; _r < pr; _r++) {
        for (var _c = 0; _c < pc; _c++) {
          var $t = $titles.childNodes[_r * pc + _c];
          $t.style.position = 'absolute';
          $t.style.top = _r * (top + ph + bottom + bottom_space) + 'px';
          $t.style.width = pw + 'px';
          $t.style.left = _c * (pw + size * 4) + cw + 'px';
        }
      }

      var $read = readout_ref.current;

      for (var _r2 = 0; _r2 < pr; _r2++) {
        for (var _c2 = 0; _c2 < pc; _c2++) {
          var $r = $read.childNodes[_r2 * pc + _c2];
          $r.style.position = 'absolute';
          $r.style.top = _r2 * (top + ph + bottom + bottom_space) + top + ph + 'px';
          $r.style.width = pw + 'px';
          $r.style.left = _c2 * (pw + size * 4) + cw + 'px';
        }
      }

      var tb = topbar_ref.current;
      tb.style.width = tw + 'px';
      var icon = icon_ref.current;
      icon.width = cw * dpr;
      icon.height = rlh * 1.5 * dpr;
      var ix = icon.getContext('2d');
      ix.scale(dpr, dpr); // requestAnimationFrame() shim by Paul Irish
      // http://paulirish.com/2011/requestanimationframe-for-smart-animating/

      window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
        /* function */
        callback,
        /* DOMElement */
        element) {
          window.setTimeout(callback, 1000 / 60);
        };
      }(); // from https://gist.github.com/joelambert/1002116#gistcomment-1953925

      /**
       * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
       * @param {function} fn The callback function
       * @param {int} delay The delay in milliseconds
       */


      window.rInterval = function (fn, delay) {
        if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setInterval(fn, delay);
        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
          var current = new Date().getTime(),
              delta = current - start;

          if (delta >= delay) {
            fn.call();
            start = new Date().getTime();
          }

          handle.value = requestAnimFrame(loop);
        }

        handle.value = requestAnimFrame(loop);
        return handle;
      };
      /**
       * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
       * @param {int|object} fn The callback function
       */


      window.clearRInterval = function (handle) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)
        /* Support for legacy API */
        : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) : clearInterval(handle);
      };

      if (!pause && !info) {
        handler_ref.current = window.rInterval(function () {
          setFrame(function (prev) {
            return prev + 1;
          });
        }, speeds[speed]);
      }
    } else {
      if (handler_ref.current !== null) {
        window.clearRInterval(handler_ref.current);
      }
    }

    setInitSpeed(true);
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (initSpeed != false) {
      if (handler_ref.current !== null) {
        window.clearRInterval(handler_ref.current);
      }

      if (!pause && !info) {
        handler_ref.current = rInterval(function () {
          setFrame(function (prev) {
            return prev + 1;
          });
        }, speeds[speed]);
      }
    }
  }, [speed, pause, info]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (data !== null) {
      var panels = panels_ref.current;
      var $read = readout_ref.current;
      var pdim = pdim_ref.current;
      var v = vref.current;
      var vx = v.getContext('2d');
      var h = href.current;
      var hx = h.getContext('2d'); // update panel data

      var panel_keys = [19, 20, 21, 22];
      var record = data[frame];
      var anomaly = record[18] === 1 ? true : false;

      if (anomaly) {
        vx.fillStyle = red;
      } else {
        vx.fillStyle = scheme.bg;
      }

      var pc = pdim[0][2] / size;
      var pr = pdim[0][3] / size;
      hx.clearRect(0, 0, h.width / dpr, h.height / dpr); // let con = con_ref.current
      // let records = data.data
      //   .slice(Math.max(0, frame + 1 - termheight), frame + 1)
      //   .reverse()
      // for (let i = 0; i < records.length; i++) {
      //   let rec = records[i]
      //   let row = con.childNodes[i]
      //   let anomaly = rec[19] === 1 ? true : false
      //   row.childNodes[0]
      //   let indicator = (row.childNodes[0].style.background = anomaly
      //     ? red
      //     : scheme.bg)
      //   for (let j = 0; j < row.childNodes.length - 1; j++) {
      //     let cell = row.childNodes[j + 1].childNodes[0]
      //     if (j === 0) {
      //       cell.innerHTML = frame + (termheight - i) - termheight + 1
      //     } else {
      //       if (cell.innerHTML !== rec[j]) {
      //         cell.innerHTML = rec[j]
      //       }
      //     }
      //   }
      // }

      for (var i = 0; i < panels.length; i++) {
        var panel = panels[i];
        var detected = record[panel_keys[i]];
        var p1x = void 0,
            p1y = void 0; // TP FP TN FN

        if (detected > 0.1) {
          var n = panels[i][0] + panels[i][1];
          p1y = (pr - n % pr - 1) * size;
          p1x = Math.floor(n / pr) * size;

          if (anomaly) {
            // true pos
            panels[i][0]++;
          } else {
            // false pos
            panels[i][1]++;
          }
        } else {
          var _n = panels[i][2] + panels[i][3];

          p1y = (pr - _n % pr - 1) * size;
          p1x = (pc - Math.floor(_n / pr) - 1) * size - 1;

          if (anomaly) {
            // false neg
            panels[i][3]++;
          } else {
            // true neg
            panels[i][2]++;
          }
        }

        var dim = pdim[i];
        vx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1); // hx.fillStyle = '#433142'

        hx.fillStyle = bgs[i];
        hx.fillRect(dim[0] + p1x - 2, dim[1] + p1y - 2, size + 1 + 4, size + 1 + 4);
        hx.fillStyle = vx.fillStyle;
        hx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1);

        for (var j = 0; j < 4; j++) {
          $read.childNodes[i].childNodes[j].childNodes[1].innerHTML = panel[j];
        } //accuracy = (TP+TN)/(TP+TN+FP+FN)


        var accuracy = Math.round((panel[0] + panel[2]) / (panel[0] + panel[1] + panel[2] + panel[3]) * 100); // precision tp / (tp + fp)

        var precision = Math.round(panel[0] / (panel[0] + panel[1]) * 100); // recall tp / (tp + fn)

        var recall = Math.round(panel[0] / (panel[0] + panel[3]) * 100); // 4 5 6

        panels[i][4] = accuracy;
        panels[i][5] = precision;
        panels[i][6] = recall;
      }

      var vheight = v.height / dpr; // set rankings

      {
        var $rs = rankref.current.childNodes;
        var s = sref.current;
        var sx = s.getContext('2d');
        sx.clearRect(0, 0, s.width / dpr, s.height / dpr);
        var rank_rows = names.map(function (n, i) {
          var panel = panels[i];
          return [i, n, panel[4], panel[5], panel[6]];
        });
        rank_rows.sort(function (a, b) {
          return b[2 + sort] - a[2 + sort];
        });

        for (var _i = 0; _i < rank_rows.length; _i++) {
          var row = rank_rows[_i];
          var _panel = panels[row[0]];

          var _panel2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_panel, 4),
              TP = _panel2[0],
              FP = _panel2[1],
              TN = _panel2[2],
              FN = _panel2[3];

          var $r = $rs[_i];
          var total = _panel[0] + _panel[1] + _panel[2] + _panel[3];
          $r.childNodes[0].childNodes[0].innerHTML = _i + 1;
          $r.childNodes[0].childNodes[1].style.background = bgs[row[0]];
          $r.childNodes[0].childNodes[1].innerHTML = row[1];
          $r.childNodes[1].childNodes[0].innerHTML = !isNaN(row[2]) ? row[2] + '% ' : 'N/A ';
          $r.childNodes[1].childNodes[1].innerHTML = "(".concat(TP, "+").concat(TN, ")/").concat(total);
          $r.childNodes[2].childNodes[0].innerHTML = !isNaN(row[3]) ? row[3] + '% ' : 'N/A ';
          $r.childNodes[2].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FP, ")");
          $r.childNodes[3].childNodes[0].innerHTML = !isNaN(row[4]) ? row[4] + '% ' : 'N/A ';
          $r.childNodes[3].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FN, ")");
          var y = _i * rlh;
          var w = s.width / dpr;

          var _h2 = rlh + 1; // sx.fillStyle = bgs[row[0]]
          // sx.fillRect(0, y, w, h)


          sx.fillStyle = scheme.fg;
          var xstep = s.width / dpr / 4;

          for (var c = 0; c < 3; c++) {
            var x = (c + 1) * xstep;

            var _w = row[c + 2] / 100 * xstep - cw;

            if (_w <= 0) _w = 0;
            sx.fillRect(x, y, _w, _h2);
          }
        }

        var icon = icon_ref.current;
        var ix = icon.getContext('2d');
        ix.clearRect(0, 0, cw, rlh);
        var step = rlh * 1.5 / 4;

        for (var _i2 = 0; _i2 < rank_rows.length; _i2++) {
          var _row = rank_rows[_i2];
          var _panel3 = panels[_row[0]];

          var _y = _i2 * step;

          var _w2 = _panel3[4] / 100 * cw;

          ix.fillStyle = bgs[_row[0]];
          ix.fillRect(0, _y, _w2, step);
        }
      } // finish line

      if (frame === finish_line - 1) {
        window.clearRInterval(handler_ref.current);
        setFinish(true);
        setPause(true);
      }
    }
  }, [data, frame, sort]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var dpr = window.devicePixelRatio || 1;
    setDpr(dpr);
    var p = pref.current;
    var pspace = p.offsetWidth;
    var pleft = p.offsetLeft;
    setPspace(pspace);
    setPleft(pleft); // get data

    fetch('combined.json').then(function (r) {
      return r.json();
    }).then(function (_data) {
      var formatted = _data.map(function (row) {
        return row.map(function (v) {
          if (v.toString().indexOf('.') != -1) {
            return _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(v).toFixed(2);
          } else {
            return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(v);
          }
        });
      });

      setData(formatted);
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, "Blip")), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  })), __jsx("div", {
    style: {
      background: '#bbb',
      height: rlh,
      position: 'sticky',
      top: 0,
      zIndex: 999
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, __jsx("div", {
    ref: topbar_ref,
    style: {
      display: 'flex',
      paddingLeft: '2ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, __jsx("canvas", {
    ref: icon_ref,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: rlh,
      width: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative',
      marginRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    onClick: function onClick() {
      setInfo(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2,
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, frame + 1))), __jsx("div", {
    style: {
      width: '100%',
      overflow: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%',
      minWidth: 6 * 19 + 1 + 'ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      paddingRight: '1ch',
      paddingLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }, _components_constants__WEBPACK_IMPORTED_MODULE_9__["key_des"].map(function (k, i) {
    return __jsx("div", {
      style: {
        display: 'flex',
        paddingLeft: '1ch',
        flexGrow: 1
      },
      title: k[0] + ': ' + k[2],
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '5ch',
        overflow: 'hidden',
        textAlign: 'right',
        fontStyle: 'italic'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609
      },
      __self: this
    }, k[1]));
  })), __jsx("div", {
    style: (_ref = {
      paddingRight: '1ch',
      height: rlh * termheight,
      background: scheme.bg
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "background", '#433142'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "color", scheme.fg), _ref),
    ref: con_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, data.slice(Math.max(frame - termheight + 1, 0), frame + 1).reverse().map(function (d, i) {
    return __jsx("div", {
      key: frame + (termheight - i) - termheight + 1,
      style: {
        position: 'relative',
        display: 'flex',
        paddingLeft: '1ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637
      },
      __self: this
    }, __jsx("div", {
      style: {
        position: 'absolute',
        top: rlh / 2 - (size + 1) / 2 - 1,
        left: cw / 2 - (size + 1) / 2 + cw,
        height: size + 1,
        width: size + 1,
        background: d[18] ? red : scheme.bg
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645
      },
      __self: this
    }), __jsx("div", {
      style: {
        display: 'flex',
        paddingLeft: '1ch',
        flexGrow: 1,
        position: 'relative'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '5ch',
        overflow: 'hidden',
        textAlign: 'right'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663
      },
      __self: this
    }, frame + (termheight - i) - termheight)), d.slice(0, 18).map(function (d, j) {
      return __jsx("div", {
        style: {
          display: 'flex',
          paddingLeft: '1ch',
          flexGrow: 1,
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        __self: this
      }, __jsx("div", {
        style: {
          width: '5ch',
          overflow: 'hidden',
          textAlign: 'right'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }, d));
    }));
  })))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }, "STRATEGIES"), __jsx("div", {
    ref: ranklabel_ref,
    style: {
      marginLeft: '1ch',
      fontStyle: 'italic',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, "Ranking"), [['Accuracy', '(TP+TN)/ALL', '(True Positive + True Negative) / ALL'], ['Precision', 'TP/(TP+FP)', 'True Positive / (True Positive + False Positive)'], ['Recall', 'TP/(TP+FN)', 'True Positive / (True Positive + False Negative)']].map(function (n, i) {
    return __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733
      },
      __self: this
    }, sort === i ? __jsx("span", {
      title: "Rankings sorted by ".concat(sort_options[i]),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735
      },
      __self: this
    }, n[0]) : __jsx("button", {
      title: "Click to sort by ".concat(sort_options[i]),
      onClick: function onClick() {
        setSort(i);
      },
      style: {
        fontStyle: 'italic'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 739
      },
      __self: this
    }, n[0]), ' ', __jsx("span", {
      style: {
        color: scheme.light,
        fontStyle: 'normal'
      },
      title: n[2],
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749
      },
      __self: this
    }, n[1]));
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      position: 'absolute',
      left: '1ch',
      top: 0
    },
    ref: sref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }), __jsx("div", {
    ref: rankref,
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }, names.map(function (n, i) {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 769
      },
      __self: this
    }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n, j) {
      return __jsx("div", {
        style: {
          width: '100%'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771
        },
        __self: this
      }, j === 0 ? __jsx("span", {
        style: {
          marginRight: '1ch'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        __self: this
      }) : null, __jsx("span", {
        style: {
          display: 'inline-block',
          marginRight: '0.5ch',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
          textAlign: 'left'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: scheme.light
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 784
        },
        __self: this
      }));
    }));
  }))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802
    },
    __self: this
  }), __jsx("canvas", {
    ref: href,
    style: {
      position: 'absolute',
      left: '1ch',
      top: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: title_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }, names.map(function (n, i) {
    return __jsx("div", {
      style: {
        background: bgs[i],
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 812
      },
      __self: this
    }, n);
  })), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: readout_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function () {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832
      },
      __self: this
    }, [['True Pos', red], ['False Pos', black], ['True Neg', black], ['False Neg', red]].map(function (o, i) {
      return __jsx("div", {
        style: {
          width: '100%',
          marginLeft: i === 2 ? '1ch' : 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }, __jsx("div", {
        style: {
          background: scheme.fg,
          fontStyle: 'italic'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 842
        },
        __self: this
      }, o[0]), __jsx("div", {
        style: {
          background: o[1],
          height: rlh,
          color: 'white',
          textAlign: 'right',
          paddingRight: '1ch'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 850
        },
        __self: this
      }));
    }));
  }))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: 0,
      marginBottom: rlh / 2 + rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874
    },
    __self: this
  }, "Cloudera Fast Forward"), "."), __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0,
      height: rlh,
      background: '#bbb',
      paddingLeft: '1ch',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: this
  }, frame + 1 != finish_line ? __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897
    },
    __self: this
  }, "Speed:"), __jsx("button", {
    style: {
      paddingLeft: '0.25ch',
      paddingRight: '0.25ch',
      marginLeft: '0.5ch'
    },
    onClick: function onClick() {
      if (speed > 0) {
        setSpeed(speed - 1);
      }
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898
    },
    __self: this
  }, '<'), speeds.map(function (n, i) {
    return i == speed ? __jsx("div", {
      style: {
        paddingLeft: '0.25ch',
        paddingRight: '0.25ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914
      },
      __self: this
    }, i + 1) : __jsx("button", {
      onClick: function onClick() {
        setSpeed(i);
      },
      style: {
        paddingLeft: '0.25ch',
        paddingRight: '0.25ch',
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923
      },
      __self: this
    }, i + 1);
  }), __jsx("button", {
    style: {
      paddingLeft: '0.25ch',
      paddingRight: '0.25ch'
    },
    onClick: function onClick() {
      if (speed < speeds.length - 1) {
        setSpeed(speed + 1);
      }
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937
    },
    __self: this
  }, '>')) : null, frame + 1 != finish_line ? pause ? __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setPause(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954
    },
    __self: this
  }, "Play") : __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setPause(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963
    },
    __self: this
  }, "Pause") : null, pause && frame + 1 != finish_line ? __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setFrame(function (prev) {
        return prev + 1;
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974
    },
    __self: this
  }, "Tick") : null), info ? __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
      background: 'rgba(0,0,0,0.2)'
    },
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    style: {
      width: '80ch',
      maxWidth: '100%',
      background: scheme.bg,
      color: scheme.fg,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: rlh * 1.5,
      marginBottom: rlh * 1.5
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024
    },
    __self: this
  }, "Info"), __jsx("button", {
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025
    },
    __self: this
  }, "X")), __jsx("div", {
    style: {
      background: '#fff',
      paddingTop: rlh / 2,
      paddingLeft: '1ch',
      paddingRight: '1ch',
      color: scheme.bg,
      paddingBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontStyle: 'italic',
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043
    },
    __self: this
  }, "Blip is a prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045
    },
    __self: this
  }, "Cloudera Fast Forward"), ' ', "built to accompany our", ' ', __jsx("a", {
    href: "https://ff12.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049
    },
    __self: this
  }, "report on Deep Learning for Anomaly Detection"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054
    },
    __self: this
  }, "Blip shows how four different algorithms (", names.map(function (n, i) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1057
      },
      __self: this
    }, __jsx("span", {
      style: {
        background: bgs[i],
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1058
      },
      __self: this
    }, n), i != names.length - 1 ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067
      },
      __self: this
    }, ", ") : null);
  }), ") perform at detecting network attacks in the", ' ', __jsx("a", {
    href: "http://kdd.ics.uci.edu/databases/kddcup99/task.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1071
    },
    __self: this
  }, "KDD network intrusion dataset"), ". You can read about how each model was trained in the", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075
    },
    __self: this
  }, "protototype section of our report"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077
    },
    __self: this
  }, "The top CONNECTIONS section shows the", ' ', __jsx("span", {
    style: {
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch',
      background: '#433142',
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079
    },
    __self: this
  }, "network connections"), ' ', "coming in, with the features used by each model for their prediction. The color of the square shows the true status of whether the connection is an", ' ', __jsx("span", {
    style: {
      background: red,
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092
    },
    __self: this
  }, "attack"), ' ', "or", ' ', __jsx("span", {
    style: {
      background: scheme.bg,
      color: scheme.fg,
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102
    },
    __self: this
  }, "normal"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114
    },
    __self: this
  }, "The STRATEGIES section shows metrics on how each algorithm is peforming on the incoming data. You can see the accuracy, recall, and precision metrics for each strategy."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119
    },
    __self: this
  }, "The VISUALIZED section provides another view of each strategy's performance. Each connection is visualized as a square. If it is classified as an attack it is placed on the left; if classified normal, it is placed on the right. The color reveals its true status. Over time the density and position of the colors in each strategy visualization give you a feel for the different models strengths and weaknesses."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129
    },
    __self: this
  }, "The simulation will run through 10,000 connections before finishing. You can control the speed of the simulation with the controls at the bottom."), frame != finish_line - 1 ? __jsx("div", {
    style: {
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135
    },
    __self: this
  }, __jsx("button", {
    style: {
      background: scheme.bg,
      color: '#fff',
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136
    },
    __self: this
  }, "Start the simulation")) : null))) : null, finish ? __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
      background: 'rgba(0,0,0,0.2)'
    },
    onClick: function onClick() {
      setFinish(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    style: {
      width: '80ch',
      maxWidth: '100%',
      background: scheme.bg,
      color: scheme.fg,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: rlh * 1.5,
      marginBottom: rlh * 1.5
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1170
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193
    },
    __self: this
  }, "Finished"), __jsx("button", {
    onClick: function onClick() {
      setFinish(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194
    },
    __self: this
  }, "X")), __jsx("div", {
    style: {
      background: '#fff',
      paddingTop: rlh / 2,
      paddingLeft: '1ch',
      paddingRight: '1ch',
      color: scheme.bg,
      paddingBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1212
    },
    __self: this
  }, "After ", finish_line, " connections, you've reached the end of the anomaly detection simulation."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1216
    },
    __self: this
  }, "The final standings:"), __jsx("div", {
    style: {
      display: 'flex',
      fontStyle: 'italic'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1220
    },
    __self: this
  }, ['Ranking', 'Accuracy', 'Precision', 'Recall'].map(function (n) {
    return __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1227
      },
      __self: this
    }, n);
  })), __jsx("div", {
    style: {
      marginBottom: rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231
    },
    __self: this
  }, names.map(function (n, i) {
    var panel = panels_ref.current[i];
    return [i, n, panel[4], panel[5], panel[6]];
  }).sort(function (a, b) {
    return b[2 + sort] - a[2 + sort];
  }).map(function (r, i) {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1241
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1242
      },
      __self: this
    }, i + 1, ' ', __jsx("span", {
      style: {
        background: bgs[r[0]],
        display: 'inline-block',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1244
      },
      __self: this
    }, r[1])), [r[2], r[3], r[4]].map(function (v) {
      return __jsx("div", {
        style: {
          width: '100%',
          position: 'relative',
          paddingLeft: '0.5ch'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1257
        },
        __self: this
      }, __jsx("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          height: rlh,
          background: '#ccc',
          width: "calc(".concat(v, "% - 1ch)")
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1264
        },
        __self: this
      }), __jsx("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1274
        },
        __self: this
      }, v, "%"));
    }));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281
    },
    __self: this
  }, "Read more about the models and their performance on the full dataset in", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284
    },
    __self: this
  }, "the prototype section of our report"), ".")))) : null) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1292
    },
    __self: this
  }, "loading..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNndDeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCAqIDIsIDY0MCwgMzIwLCA4MCwgNDAsIDIwXVxuXG5sZXQgbmFtZXMgPSBbJ09DU1ZNJywgJ0F1dG9lbmNvZGVyJywgJ1ZhciBBdXRvZW5jb2RlcicsICdCaUdBTiddXG5cbmxldCBuYW1lX21heCA9IG5hbWVzLnJlZHVjZSgodCwgYykgPT4ge1xuICBjb25zb2xlLmxvZyhjKVxuICBjb25zb2xlLmxvZyhjLmxlbmd0aClcbiAgcmV0dXJuIE1hdGgubWF4KGMubGVuZ3RoLCB0KVxufSwgMClcblxubGV0IHNpemUgPSA0XG5cbmxldCB0ZXJtaGVpZ2h0ID0gNFxuXG5sZXQgc29ydF9vcHRpb25zID0gWydhY2N1cmFjeScsICdwcmVjaXNpb24nLCAncmVjYWxsJ11cblxubGV0IGZpbmlzaF9saW5lID0gMTAwMDBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgaGFuZGxlcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHZyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGhyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJhbmtyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtmcmFtZSwgc2V0RnJhbWVdID0gdXNlU3RhdGUoMClcbiAgbGV0IFtwc3BhY2UsIHNldFBzcGFjZV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW3BsZWZ0LCBzZXRQbGVmdF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgcGFuZWxzX3JlZiA9IHVzZVJlZihbLi4uQXJyYXkoNCldLm1hcChuID0+IFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gMCkpKVxuICBsZXQgcGRpbV9yZWYgPSB1c2VSZWYoW10pXG4gIGxldCB0ZGltX3JlZiA9IHVzZVJlZihbXSlcbiAgbGV0IHRpdGxlX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmVhZG91dF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRydXRoX3JlZiA9IHVzZVJlZihbMCwgMF0pXG4gIGxldCB0cmVhZG91dF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJhbmtsYWJlbF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRvcGJhcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtkcHIsIHNldERwcl0gPSB1c2VTdGF0ZSgxKVxuICBsZXQgaWNvbl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNvbl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtzcGVlZCwgc2V0U3BlZWRdID0gdXNlU3RhdGUoMylcbiAgbGV0IFtpbml0U3BlZWQsIHNldEluaXRTcGVlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKDApXG4gIGxldCBbZmluaXNoLCBzZXRGaW5pc2hdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgLy8gc2V0IGxheW91dFxuICAgICAgbGV0IHYgPSB2cmVmLmN1cnJlbnRcblxuICAgICAgbGV0IHZ3aWR0aCA9IHBzcGFjZSAtIDhcbiAgICAgIHYud2lkdGggPSB2d2lkdGggKiBkcHJcbiAgICAgIHYuc3R5bGUubWFyZ2luTGVmdCA9IHBsZWZ0ICsgJ3B4J1xuICAgICAgbGV0IHZ4ID0gdi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBsZXQgcGRpbSA9IHBkaW1fcmVmLmN1cnJlbnRcbiAgICAgIGxldCB0ZGltID0gdGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3Iodi53aWR0aCAvIHNpemUpXG4gICAgICBsZXQgcGFuZWxfY29sdW1ucyA9IE1hdGguZmxvb3IoXG4gICAgICAgIE1hdGguZmxvb3IoKHYud2lkdGggLyBkcHIgLSBzaXplICogNCkgLyBzaXplKSAvIDJcbiAgICAgIClcbiAgICAgIGxldCBwYW5lbF9yb3dzID0gTWF0aC5jZWlsKDEwMDAwIC8gKHBhbmVsX2NvbHVtbnMgLSAxKSlcblxuICAgICAgbGV0IHB3ID0gcGFuZWxfY29sdW1ucyAqIHNpemVcbiAgICAgIGxldCBwaCA9IHBhbmVsX3Jvd3MgKiBzaXplXG5cbiAgICAgIGxldCBwYyA9IDJcbiAgICAgIGxldCBwciA9IDJcblxuICAgICAgbGV0IHRvcCA9IHJsaFxuICAgICAgbGV0IGJvdHRvbSA9IHJsaCAqIDJcbiAgICAgIGxldCBib3R0b21fc3BhY2UgPSBybGggLyAyXG5cbiAgICAgIGxldCB0YyA9IHBhbmVsX2NvbHVtbnMgKiAyICsgNFxuICAgICAgbGV0IHRyID0gTWF0aC5jZWlsKDEwMDAwIC8gKGNvbHVtbnMgLSAxKSlcbiAgICAgIGxldCB0dyA9IHRjICogc2l6ZVxuICAgICAgbGV0IHRoID0gdHIgKiBzaXplXG4gICAgICB0ZGltX3JlZi5jdXJyZW50ID0gW3R3LCB0aF1cblxuICAgICAgbGV0IHZoZWlnaHQgPSAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICogMlxuICAgICAgdi5oZWlnaHQgPSB2aGVpZ2h0ICogZHByXG5cbiAgICAgIHYuc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICB2LnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIHZ4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgaCA9IGhyZWYuY3VycmVudFxuICAgICAgaC53aWR0aCA9IHYud2lkdGhcbiAgICAgIGguaGVpZ2h0ID0gdi5oZWlnaHRcbiAgICAgIGguc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICBoLnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIGxldCBoeCA9IGguZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaHguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCAkcmFuayA9IHJhbmtyZWYuY3VycmVudFxuICAgICAgJHJhbmsuc3R5bGUud2lkdGggPSB0dyArICdweCdcbiAgICAgICRyYW5rLnN0eWxlLmxlZnQgPSBwbGVmdCArICdweCdcbiAgICAgIGxldCBzID0gc3JlZi5jdXJyZW50XG4gICAgICBsZXQgc3dpZHRoID0gdHdcbiAgICAgIGxldCBzaGVpZ2h0ID0gcmxoICogNFxuICAgICAgcy53aWR0aCA9IHN3aWR0aCAqIGRwclxuICAgICAgcy5oZWlnaHQgPSBzaGVpZ2h0ICogZHByXG4gICAgICBzLnN0eWxlLndpZHRoID0gc3dpZHRoICsgJ3B4J1xuICAgICAgcy5zdHlsZS5oZWlnaHQgPSBzaGVpZ2h0ICsgJ3B4J1xuICAgICAgbGV0IHN4ID0gcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBzeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgbGV0IHJhbmtsYWJlbCA9IHJhbmtsYWJlbF9yZWYuY3VycmVudFxuICAgICAgcmFua2xhYmVsLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG5cbiAgICAgIHZ4LmZpbGxTdHlsZSA9ICcjZWVlJ1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCBpID0gciAqIHBjICsgY1xuICAgICAgICAgIGxldCB4ID0gYyAqIChwdyArIHNpemUgKiA0KVxuICAgICAgICAgIGxldCB5ID0gciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3BcbiAgICAgICAgICBsZXQgdyA9IHB3XG4gICAgICAgICAgbGV0IGggPSBwaFxuICAgICAgICAgIHBkaW1baV0gPSBbeCwgeSwgdywgaF1cbiAgICAgICAgICB2eC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCAkdGl0bGVzID0gdGl0bGVfcmVmLmN1cnJlbnRcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgJHQgPSAkdGl0bGVzLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkdC5zdHlsZS50b3AgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArICdweCdcbiAgICAgICAgICAkdC5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkciA9ICRyZWFkLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkci5zdHlsZS50b3AgPVxuICAgICAgICAgICAgciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3AgKyBwaCArICdweCdcbiAgICAgICAgICAkci5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICRyLnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHRiID0gdG9wYmFyX3JlZi5jdXJyZW50XG4gICAgICB0Yi5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuXG4gICAgICBsZXQgaWNvbiA9IGljb25fcmVmLmN1cnJlbnRcbiAgICAgIGljb24ud2lkdGggPSBjdyAqIGRwclxuICAgICAgaWNvbi5oZWlnaHQgPSBybGggKiAxLjUgKiBkcHJcbiAgICAgIGxldCBpeCA9IGljb24uZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaXguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHNoaW0gYnkgUGF1bCBJcmlzaFxuICAgICAgLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgZnVuY3Rpb24oLyogZnVuY3Rpb24gKi8gY2FsbGJhY2ssIC8qIERPTUVsZW1lbnQgKi8gZWxlbWVudCkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MClcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0pKClcblxuICAgICAgLy8gZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qb2VsYW1iZXJ0LzEwMDIxMTYjZ2lzdGNvbW1lbnQtMTk1MzkyNVxuICAgICAgLyoqXG4gICAgICAgKiBCZWhhdmVzIHRoZSBzYW1lIGFzIHNldEludGVydmFsIGV4Y2VwdCB1c2VzIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHdoZXJlIHBvc3NpYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICogQHBhcmFtIHtpbnR9IGRlbGF5IFRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAqL1xuICAgICAgd2luZG93LnJJbnRlcnZhbCA9IGZ1bmN0aW9uKGZuLCBkZWxheSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAhd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICEoXG4gICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgKSAmJiAvLyBGaXJlZm94IDUgc2hpcHMgd2l0aG91dCBjYW5jZWwgc3VwcG9ydFxuICAgICAgICAgICF3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICF3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoZm4sIGRlbGF5KVxuXG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgIGhhbmRsZSA9IG5ldyBPYmplY3QoKVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGRlbHRhID0gY3VycmVudCAtIHN0YXJ0XG5cbiAgICAgICAgICBpZiAoZGVsdGEgPj0gZGVsYXkpIHtcbiAgICAgICAgICAgIGZuLmNhbGwoKVxuICAgICAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZS52YWx1ZSA9IHJlcXVlc3RBbmltRnJhbWUobG9vcClcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZS52YWx1ZSA9IHJlcXVlc3RBbmltRnJhbWUobG9vcClcbiAgICAgICAgcmV0dXJuIGhhbmRsZVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgY2xlYXJJbnRlcnZhbCBleGNlcHQgdXNlcyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB3aGVyZSBwb3NzaWJsZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgKiBAcGFyYW0ge2ludHxvYmplY3R9IGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICovXG4gICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShcbiAgICAgICAgICAgICAgaGFuZGxlLnZhbHVlXG4gICAgICAgICAgICApIC8qIFN1cHBvcnQgZm9yIGxlZ2FjeSBBUEkgKi9cbiAgICAgICAgICA6IHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IGNsZWFySW50ZXJ2YWwoaGFuZGxlKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXBhdXNlICYmICFpbmZvKSB7XG4gICAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSB3aW5kb3cuckludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBzcGVlZHNbc3BlZWRdKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5pdFNwZWVkKHRydWUpXG4gIH0sIFtkYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0U3BlZWQgIT0gZmFsc2UpIHtcbiAgICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgfVxuICAgICAgaWYgKCFwYXVzZSAmJiAhaW5mbykge1xuICAgICAgICBoYW5kbGVyX3JlZi5jdXJyZW50ID0gckludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBzcGVlZHNbc3BlZWRdKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3NwZWVkLCBwYXVzZSwgaW5mb10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHBhbmVscyA9IHBhbmVsc19yZWYuY3VycmVudFxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgbGV0IHBkaW0gPSBwZGltX3JlZi5jdXJyZW50XG5cbiAgICAgIGxldCB2ID0gdnJlZi5jdXJyZW50XG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcblxuICAgICAgbGV0IGggPSBocmVmLmN1cnJlbnRcbiAgICAgIGxldCBoeCA9IGguZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAvLyB1cGRhdGUgcGFuZWwgZGF0YVxuICAgICAgbGV0IHBhbmVsX2tleXMgPSBbMTksIDIwLCAyMSwgMjJdXG4gICAgICBsZXQgcmVjb3JkID0gZGF0YVtmcmFtZV1cbiAgICAgIGxldCBhbm9tYWx5ID0gcmVjb3JkWzE4XSA9PT0gMSA/IHRydWUgOiBmYWxzZVxuXG4gICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICB2eC5maWxsU3R5bGUgPSByZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgfVxuXG4gICAgICBsZXQgcGMgPSBwZGltWzBdWzJdIC8gc2l6ZVxuICAgICAgbGV0IHByID0gcGRpbVswXVszXSAvIHNpemVcblxuICAgICAgaHguY2xlYXJSZWN0KDAsIDAsIGgud2lkdGggLyBkcHIsIGguaGVpZ2h0IC8gZHByKVxuXG4gICAgICAvLyBsZXQgY29uID0gY29uX3JlZi5jdXJyZW50XG4gICAgICAvLyBsZXQgcmVjb3JkcyA9IGRhdGEuZGF0YVxuICAgICAgLy8gICAuc2xpY2UoTWF0aC5tYXgoMCwgZnJhbWUgKyAxIC0gdGVybWhlaWdodCksIGZyYW1lICsgMSlcbiAgICAgIC8vICAgLnJldmVyc2UoKVxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgIGxldCByZWMgPSByZWNvcmRzW2ldXG4gICAgICAvLyAgIGxldCByb3cgPSBjb24uY2hpbGROb2Rlc1tpXVxuICAgICAgLy8gICBsZXQgYW5vbWFseSA9IHJlY1sxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcbiAgICAgIC8vICAgcm93LmNoaWxkTm9kZXNbMF1cbiAgICAgIC8vICAgbGV0IGluZGljYXRvciA9IChyb3cuY2hpbGROb2Rlc1swXS5zdHlsZS5iYWNrZ3JvdW5kID0gYW5vbWFseVxuICAgICAgLy8gICAgID8gcmVkXG4gICAgICAvLyAgICAgOiBzY2hlbWUuYmcpXG4gICAgICAvLyAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAvLyAgICAgbGV0IGNlbGwgPSByb3cuY2hpbGROb2Rlc1tqICsgMV0uY2hpbGROb2Rlc1swXVxuICAgICAgLy8gICAgIGlmIChqID09PSAwKSB7XG4gICAgICAvLyAgICAgICBjZWxsLmlubmVySFRNTCA9IGZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHQgKyAxXG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGlmIChjZWxsLmlubmVySFRNTCAhPT0gcmVjW2pdKSB7XG4gICAgICAvLyAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gcmVjW2pdXG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tpXVxuICAgICAgICBsZXQgZGV0ZWN0ZWQgPSByZWNvcmRbcGFuZWxfa2V5c1tpXV1cblxuICAgICAgICBsZXQgcDF4LCBwMXlcbiAgICAgICAgLy8gVFAgRlAgVE4gRk5cbiAgICAgICAgaWYgKGRldGVjdGVkID4gMC4xKSB7XG4gICAgICAgICAgbGV0IG4gPSBwYW5lbHNbaV1bMF0gKyBwYW5lbHNbaV1bMV1cbiAgICAgICAgICBwMXkgPSAocHIgLSAobiAlIHByKSAtIDEpICogc2l6ZVxuICAgICAgICAgIHAxeCA9IE1hdGguZmxvb3IobiAvIHByKSAqIHNpemVcbiAgICAgICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICAgICAgLy8gdHJ1ZSBwb3NcbiAgICAgICAgICAgIHBhbmVsc1tpXVswXSsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZhbHNlIHBvc1xuICAgICAgICAgICAgcGFuZWxzW2ldWzFdKytcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG4gPSBwYW5lbHNbaV1bMl0gKyBwYW5lbHNbaV1bM11cbiAgICAgICAgICBwMXkgPSAocHIgLSAobiAlIHByKSAtIDEpICogc2l6ZVxuICAgICAgICAgIHAxeCA9IChwYyAtIE1hdGguZmxvb3IobiAvIHByKSAtIDEpICogc2l6ZSAtIDFcbiAgICAgICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICAgICAgLy8gZmFsc2UgbmVnXG4gICAgICAgICAgICBwYW5lbHNbaV1bM10rK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0cnVlIG5lZ1xuICAgICAgICAgICAgcGFuZWxzW2ldWzJdKytcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGltID0gcGRpbVtpXVxuICAgICAgICB2eC5maWxsUmVjdChkaW1bMF0gKyBwMXgsIGRpbVsxXSArIHAxeSwgc2l6ZSArIDEsIHNpemUgKyAxKVxuXG4gICAgICAgIC8vIGh4LmZpbGxTdHlsZSA9ICcjNDMzMTQyJ1xuICAgICAgICBoeC5maWxsU3R5bGUgPSBiZ3NbaV1cbiAgICAgICAgaHguZmlsbFJlY3QoXG4gICAgICAgICAgZGltWzBdICsgcDF4IC0gMixcbiAgICAgICAgICBkaW1bMV0gKyBwMXkgLSAyLFxuICAgICAgICAgIHNpemUgKyAxICsgNCxcbiAgICAgICAgICBzaXplICsgMSArIDRcbiAgICAgICAgKVxuICAgICAgICBoeC5maWxsU3R5bGUgPSB2eC5maWxsU3R5bGVcbiAgICAgICAgaHguZmlsbFJlY3QoZGltWzBdICsgcDF4LCBkaW1bMV0gKyBwMXksIHNpemUgKyAxLCBzaXplICsgMSlcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICRyZWFkLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHBhbmVsW2pdXG4gICAgICAgIH1cblxuICAgICAgICAvL2FjY3VyYWN5ID0gKFRQK1ROKS8oVFArVE4rRlArRk4pXG4gICAgICAgIGxldCBhY2N1cmFjeSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgKChwYW5lbFswXSArIHBhbmVsWzJdKSAvXG4gICAgICAgICAgICAocGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM10pKSAqXG4gICAgICAgICAgICAxMDBcbiAgICAgICAgKVxuICAgICAgICAvLyBwcmVjaXNpb24gdHAgLyAodHAgKyBmcClcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbMV0pKSAqIDEwMClcblxuICAgICAgICAvLyByZWNhbGwgdHAgLyAodHAgKyBmbilcbiAgICAgICAgbGV0IHJlY2FsbCA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbM10pKSAqIDEwMClcblxuICAgICAgICAvLyA0IDUgNlxuICAgICAgICBwYW5lbHNbaV1bNF0gPSBhY2N1cmFjeVxuICAgICAgICBwYW5lbHNbaV1bNV0gPSBwcmVjaXNpb25cbiAgICAgICAgcGFuZWxzW2ldWzZdID0gcmVjYWxsXG4gICAgICB9XG5cbiAgICAgIGxldCB2aGVpZ2h0ID0gdi5oZWlnaHQgLyBkcHJcblxuICAgICAgLy8gc2V0IHJhbmtpbmdzXG4gICAgICB7XG4gICAgICAgIGxldCAkcnMgPSByYW5rcmVmLmN1cnJlbnQuY2hpbGROb2Rlc1xuICAgICAgICBsZXQgcyA9IHNyZWYuY3VycmVudFxuICAgICAgICBsZXQgc3ggPSBzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgc3guY2xlYXJSZWN0KDAsIDAsIHMud2lkdGggLyBkcHIsIHMuaGVpZ2h0IC8gZHByKVxuXG4gICAgICAgIGxldCByYW5rX3Jvd3MgPSBuYW1lcy5tYXAoKG4sIGkpID0+IHtcbiAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgICAgICByZXR1cm4gW2ksIG4sIHBhbmVsWzRdLCBwYW5lbFs1XSwgcGFuZWxbNl1dXG4gICAgICAgIH0pXG4gICAgICAgIHJhbmtfcm93cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYlsyICsgc29ydF0gLSBhWzIgKyBzb3J0XVxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmtfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByb3cgPSByYW5rX3Jvd3NbaV1cbiAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbcm93WzBdXVxuICAgICAgICAgIGxldCBbVFAsIEZQLCBUTiwgRk5dID0gcGFuZWxcbiAgICAgICAgICBsZXQgJHIgPSAkcnNbaV1cbiAgICAgICAgICBsZXQgdG90YWwgPSBwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXVxuXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9IGkgKyAxXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnN0eWxlLmJhY2tncm91bmQgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSByb3dbMV1cbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gIWlzTmFOKHJvd1syXSlcbiAgICAgICAgICAgID8gcm93WzJdICsgJyUgJ1xuICAgICAgICAgICAgOiAnTi9BICdcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCgke1RQfSske1ROfSkvJHt0b3RhbH1gXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbM10pXG4gICAgICAgICAgICA/IHJvd1szXSArICclICdcbiAgICAgICAgICAgIDogJ04vQSAnXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAke1RQfS8oJHtUUH0rJHtGUH0pYFxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSAhaXNOYU4ocm93WzRdKVxuICAgICAgICAgICAgPyByb3dbNF0gKyAnJSAnXG4gICAgICAgICAgICA6ICdOL0EgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7Rk59KWBcblxuICAgICAgICAgIGxldCB5ID0gaSAqIHJsaFxuICAgICAgICAgIGxldCB3ID0gcy53aWR0aCAvIGRwclxuICAgICAgICAgIGxldCBoID0gcmxoICsgMVxuICAgICAgICAgIC8vIHN4LmZpbGxTdHlsZSA9IGJnc1tyb3dbMF1dXG4gICAgICAgICAgLy8gc3guZmlsbFJlY3QoMCwgeSwgdywgaClcblxuICAgICAgICAgIHN4LmZpbGxTdHlsZSA9IHNjaGVtZS5mZ1xuICAgICAgICAgIGxldCB4c3RlcCA9IHMud2lkdGggLyBkcHIgLyA0XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gKGMgKyAxKSAqIHhzdGVwXG4gICAgICAgICAgICBsZXQgdyA9IChyb3dbYyArIDJdIC8gMTAwKSAqIHhzdGVwIC0gY3dcbiAgICAgICAgICAgIGlmICh3IDw9IDApIHcgPSAwXG4gICAgICAgICAgICBzeC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaXguY2xlYXJSZWN0KDAsIDAsIGN3LCBybGgpXG4gICAgICAgIGxldCBzdGVwID0gKHJsaCAqIDEuNSkgLyA0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua19yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICAgICAgbGV0IHkgPSBpICogc3RlcFxuICAgICAgICAgIGxldCB3ID0gKHBhbmVsWzRdIC8gMTAwKSAqIGN3XG4gICAgICAgICAgaXguZmlsbFN0eWxlID0gYmdzW3Jvd1swXV1cbiAgICAgICAgICBpeC5maWxsUmVjdCgwLCB5LCB3LCBzdGVwKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbmlzaCBsaW5lXG4gICAgICBpZiAoZnJhbWUgPT09IGZpbmlzaF9saW5lIC0gMSkge1xuICAgICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgICAgc2V0RmluaXNoKHRydWUpXG4gICAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YSwgZnJhbWUsIHNvcnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBzZXREcHIoZHByKVxuXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHNwYWNlID0gcC5vZmZzZXRXaWR0aFxuICAgIGxldCBwbGVmdCA9IHAub2Zmc2V0TGVmdFxuICAgIHNldFBzcGFjZShwc3BhY2UpXG4gICAgc2V0UGxlZnQocGxlZnQpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdjb21iaW5lZC5qc29uJylcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihfZGF0YSA9PiB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBfZGF0YS5tYXAocm93ID0+XG4gICAgICAgICAgcm93Lm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGlmICh2LnRvU3RyaW5nKCkuaW5kZXhPZignLicpICE9IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIHNldERhdGEoZm9ybWF0dGVkKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CbGlwPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzFjaCcsIHBhZGRpbmdSaWdodDogJzFjaCcgfX0+XG4gICAgICAgIDxkaXYgcmVmPXtwcmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNiYmInLFxuICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3RvcGJhcl9yZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtpY29uX3JlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICB3aWR0aDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQkxJUFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SW5mbyh0cnVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJbmZvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZGF0YSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PkNPTk5FQ1RJT05TPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxY2gnIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19PntmcmFtZSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogNiAqIDE5ICsgMSArICdjaCcgfX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleV9kZXMubWFwKChrLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2tbMF0gKyAnOiAnICsga1syXX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7a1sxXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGggKiB0ZXJtaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0MzMxNDInLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHJlZj17Y29uX3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoTWF0aC5tYXgoZnJhbWUgLSB0ZXJtaGVpZ2h0ICsgMSwgMCksIGZyYW1lICsgMSlcbiAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZnJhbWUgKyAodGVybWhlaWdodCAtIGkpIC0gdGVybWhlaWdodCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBybGggLyAyIC0gKHNpemUgKyAxKSAvIDIgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjdyAvIDIgLSAoc2l6ZSArIDEpIC8gMiArIGN3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRbMThdID8gcmVkIDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZC5zbGljZSgwLCAxOCkubWFwKChkLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTVFJBVEVHSUVTXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyYW5rbGFiZWxfcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlJhbmtpbmc8L2Rpdj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnQWNjdXJhY3knLFxuICAgICAgICAgICAgICAgICcoVFArVE4pL0FMTCcsXG4gICAgICAgICAgICAgICAgJyhUcnVlIFBvc2l0aXZlICsgVHJ1ZSBOZWdhdGl2ZSkgLyBBTEwnLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ1ByZWNpc2lvbicsXG4gICAgICAgICAgICAgICAgJ1RQLyhUUCtGUCknLFxuICAgICAgICAgICAgICAgICdUcnVlIFBvc2l0aXZlIC8gKFRydWUgUG9zaXRpdmUgKyBGYWxzZSBQb3NpdGl2ZSknLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ1JlY2FsbCcsXG4gICAgICAgICAgICAgICAgJ1RQLyhUUCtGTiknLFxuICAgICAgICAgICAgICAgICdUcnVlIFBvc2l0aXZlIC8gKFRydWUgUG9zaXRpdmUgKyBGYWxzZSBOZWdhdGl2ZSknLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXS5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHtzb3J0ID09PSBpID8gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9e2BSYW5raW5ncyBzb3J0ZWQgYnkgJHtzb3J0X29wdGlvbnNbaV19YH0+XG4gICAgICAgICAgICAgICAgICAgIHtuWzBdfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgQ2xpY2sgdG8gc29ydCBieSAke3NvcnRfb3B0aW9uc1tpXX1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U29ydChpKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuWzBdfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX17JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0LCBmb250U3R5bGU6ICdub3JtYWwnIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT17blsyXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7blsxXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxY2gnLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXtzcmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtyYW5rcmVmfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKChuLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7aiA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMWNoJyB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZJU1VBTElaRURcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17dnJlZn0gc3R5bGU9e3t9fSAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2hyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMWNoJywgdG9wOiAwIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwIH19XG4gICAgICAgICAgICAgIHJlZj17dGl0bGVfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmdzW2ldLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtyZWFkb3V0X3JlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKCgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIFsnVHJ1ZSBQb3MnLCByZWRdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIFBvcycsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIE5lZycsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBOZWcnLCByZWRdLFxuICAgICAgICAgICAgICAgICAgXS5tYXAoKG8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbkxlZnQ6IGkgPT09IDIgPyAnMWNoJyA6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29bMF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggLyAyICsgcmxoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCbGlwIGlzIGFuIGFub21hbHkgZGV0ZWN0aW9uIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2JiYicsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZnJhbWUgKyAxICE9IGZpbmlzaF9saW5lID8gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5TcGVlZDo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoc3BlZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAge3NwZWVkcy5tYXAoKG4sIGkpID0+XG4gICAgICAgICAgICAgICAgICBpID09IHNwZWVkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoaSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA8IHNwZWVkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoc3BlZWQgKyAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnPid9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7ZnJhbWUgKyAxICE9IGZpbmlzaF9saW5lID8gKFxuICAgICAgICAgICAgICBwYXVzZSA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXVzZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGxheVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBhdXNlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge3BhdXNlICYmIGZyYW1lICsgMSAhPSBmaW5pc2hfbGluZSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRpY2tcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aW5mbyA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4yKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MGNoJyxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoICogMS41LFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PkluZm88L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEluZm8oZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQmxpcCBpcyBhIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jbG91ZGVyYS5jb20vcHJvZHVjdHMvZmFzdC1mb3J3YXJkLWxhYnMtcmVzZWFyY2guaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIENsb3VkZXJhIEZhc3QgRm9yd2FyZFxuICAgICAgICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgYnVpbHQgdG8gYWNjb21wYW55IG91cnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZmMTIuZmFzdGZvcndhcmRsYWJzLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydCBvbiBEZWVwIExlYXJuaW5nIGZvciBBbm9tYWx5IERldGVjdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEJsaXAgc2hvd3MgaG93IGZvdXIgZGlmZmVyZW50IGFsZ29yaXRobXMgKFxuICAgICAgICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2kgIT0gbmFtZXMubGVuZ3RoIC0gMSA/IDxzcGFuPiwgPC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgKSBwZXJmb3JtIGF0IGRldGVjdGluZyBuZXR3b3JrIGF0dGFja3MgaW4gdGhleycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9rZGQuaWNzLnVjaS5lZHUvZGF0YWJhc2VzL2tkZGN1cDk5L3Rhc2suaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEtERCBuZXR3b3JrIGludHJ1c2lvbiBkYXRhc2V0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLiBZb3UgY2FuIHJlYWQgYWJvdXQgaG93IGVhY2ggbW9kZWwgd2FzIHRyYWluZWQgaW4gdGhleycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wcm90b3RvdHlwZSBzZWN0aW9uIG9mIG91ciByZXBvcnQ8L2E+LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHRvcCBDT05ORUNUSU9OUyBzZWN0aW9uIHNob3dzIHRoZXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0MzMxNDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgbmV0d29yayBjb25uZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgY29taW5nIGluLCB3aXRoIHRoZSBmZWF0dXJlcyB1c2VkIGJ5IGVhY2ggbW9kZWwgZm9yIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb24uIFRoZSBjb2xvciBvZiB0aGUgc3F1YXJlIHNob3dzIHRoZSB0cnVlIHN0YXR1cyBvZlxuICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIHRoZSBjb25uZWN0aW9uIGlzIGFueycgJ31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgb3J7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBTVFJBVEVHSUVTIHNlY3Rpb24gc2hvd3MgbWV0cmljcyBvbiBob3cgZWFjaCBhbGdvcml0aG1cbiAgICAgICAgICAgICAgICAgICAgaXMgcGVmb3JtaW5nIG9uIHRoZSBpbmNvbWluZyBkYXRhLiBZb3UgY2FuIHNlZSB0aGUgYWNjdXJhY3ksXG4gICAgICAgICAgICAgICAgICAgIHJlY2FsbCwgYW5kIHByZWNpc2lvbiBtZXRyaWNzIGZvciBlYWNoIHN0cmF0ZWd5LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIFZJU1VBTElaRUQgc2VjdGlvbiBwcm92aWRlcyBhbm90aGVyIHZpZXcgb2YgZWFjaFxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneSdzIHBlcmZvcm1hbmNlLiBFYWNoIGNvbm5lY3Rpb24gaXMgdmlzdWFsaXplZCBhcyBhXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS4gSWYgaXQgaXMgY2xhc3NpZmllZCBhcyBhbiBhdHRhY2sgaXQgaXMgcGxhY2VkIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICBsZWZ0OyBpZiBjbGFzc2lmaWVkIG5vcm1hbCwgaXQgaXMgcGxhY2VkIG9uIHRoZSByaWdodC4gVGhlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIHJldmVhbHMgaXRzIHRydWUgc3RhdHVzLiBPdmVyIHRpbWUgdGhlIGRlbnNpdHkgYW5kXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIG9mIHRoZSBjb2xvcnMgaW4gZWFjaCBzdHJhdGVneSB2aXN1YWxpemF0aW9uIGdpdmVcbiAgICAgICAgICAgICAgICAgICAgeW91IGEgZmVlbCBmb3IgdGhlIGRpZmZlcmVudCBtb2RlbHMgc3RyZW5ndGhzIGFuZFxuICAgICAgICAgICAgICAgICAgICB3ZWFrbmVzc2VzLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHNpbXVsYXRpb24gd2lsbCBydW4gdGhyb3VnaCAxMCwwMDAgY29ubmVjdGlvbnMgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGluZy4gWW91IGNhbiBjb250cm9sIHRoZSBzcGVlZCBvZiB0aGUgc2ltdWxhdGlvbiB3aXRoXG4gICAgICAgICAgICAgICAgICAgIHRoZSBjb250cm9scyBhdCB0aGUgYm90dG9tLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ZnJhbWUgIT0gZmluaXNoX2xpbmUgLSAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydCB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtmaW5pc2ggPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RmluaXNoKGZhbHNlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MGNoJyxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoICogMS41LFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PkZpbmlzaGVkPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaW5pc2goZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQWZ0ZXIge2ZpbmlzaF9saW5lfSBjb25uZWN0aW9ucywgeW91J3ZlIHJlYWNoZWQgdGhlIGVuZCBvZlxuICAgICAgICAgICAgICAgICAgICB0aGUgYW5vbWFseSBkZXRlY3Rpb24gc2ltdWxhdGlvbi5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBmaW5hbCBzdGFuZGluZ3M6XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7WydSYW5raW5nJywgJ0FjY3VyYWN5JywgJ1ByZWNpc2lvbicsICdSZWNhbGwnXS5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PntufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIH19PlxuICAgICAgICAgICAgICAgICAgICB7bmFtZXNcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChuLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNfcmVmLmN1cnJlbnRbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbaSwgbiwgcGFuZWxbNF0sIHBhbmVsWzVdLCBwYW5lbFs2XV1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiWzIgKyBzb3J0XSAtIGFbMiArIHNvcnRdXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX17JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbclswXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7clsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtbclsyXSwgclszXSwgcls0XV0ubWFwKHYgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoJHt2fSUgLSAxY2gpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19Pnt2fSU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBSZWFkIG1vcmUgYWJvdXQgdGhlIG1vZGVscyBhbmQgdGhlaXIgcGVyZm9ybWFuY2Ugb24gdGhlIGZ1bGxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldCBpbnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+dGhlIHByb3RvdHlwZSBzZWN0aW9uIG9mIG91ciByZXBvcnQ8L2E+LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmc31weDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaH07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.2da78a5021d3a04357e0.hot-update.js.map