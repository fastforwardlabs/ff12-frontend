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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_agent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/agent */ "./components/agent.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/constants */ "./components/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/home/grant/sites/ff12-frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





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
var names = ['Autoencoder', 'Var. Autoencoder', 'Autoencoder', 'Var. Autoencoder'];
var size = 4;
var termheight = 4;
var sort_options = ['accuracy', 'precision', 'recall'];
function Index() {
  var _ref;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var handler_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var sref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var vref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var href = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var rankref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      frame = _useState2[0],
      setFrame = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      pspace = _useState3[0],
      setPspace = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      pleft = _useState4[0],
      setPleft = _useState4[1];

  var panels_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(4)).map(function (n) {
    return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(4)).map(function (n) {
      return 0;
    });
  }));
  var pdim_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([]);
  var tdim_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([]);
  var title_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var readout_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var truth_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([0, 0]);
  var treadout_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var ranklabel_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var topbar_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      dpr = _useState5[0],
      setDpr = _useState5[1];

  var icon_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var con_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(3),
      speed = _useState6[0],
      setSpeed = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      initSpeed = _useState7[0],
      setInitSpeed = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      pause = _useState8[0],
      setPause = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
      var vheight = (top + ph + bottom + bottom_space) * 2 + top + bottom + bottom_space;
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

      if (!pause) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (initSpeed != false) {
      if (handler_ref.current !== null) {
        window.clearRInterval(handler_ref.current);
      }

      if (!pause) {
        handler_ref.current = rInterval(function () {
          setFrame(function (prev) {
            return prev + 1;
          });
        }, speeds[speed]);
      }
    }
  }, [speed, pause]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (data !== null) {
      var panels = panels_ref.current;
      var $read = readout_ref.current;
      var truth = truth_ref.current;
      var $truth = treadout_ref.current;
      var pdim = pdim_ref.current;
      var v = vref.current;
      var vx = v.getContext('2d');
      var h = href.current;
      var hx = h.getContext('2d'); // update panel data

      var panel_keys = [21, 20, 21, 20];
      var record = data.data[frame];
      var anomaly = record[19] === 1 ? true : false;

      if (anomaly) {
        vx.fillStyle = red;
        truth[0]++;
      } else {
        vx.fillStyle = scheme.bg;
        truth[1]++;
      }

      $truth.childNodes[0].childNodes[1].innerHTML = truth[0];
      $truth.childNodes[1].childNodes[1].innerHTML = truth[1];
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

      var vheight = v.height / dpr;

      var _tdim_ref$current = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tdim_ref.current, 2),
          tw = _tdim_ref$current[0],
          th = _tdim_ref$current[1];

      vx.clearRect(0, vheight - rlh * 2 - 1, tw, rlh + 2);
      var split = truth[1] / (truth[0] + truth[1]);
      vx.fillStyle = red;
      vx.fillRect(0, vheight - rlh * 1.5, tw - tw * split, rlh);
      vx.fillStyle = scheme.bg;
      vx.fillRect(tw - tw * split - 1, vheight - rlh * 1.5, tw * split, rlh); // set rankings

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
          return b[2] - a[2];
        });

        for (var _i = 0; _i < rank_rows.length; _i++) {
          var row = rank_rows[_i];
          var _panel = panels[row[0]];

          var _panel2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_panel, 4),
              TP = _panel2[0],
              FP = _panel2[1],
              TN = _panel2[2],
              FN = _panel2[3];

          var $r = $rs[_i];
          var total = _panel[0] + _panel[1] + _panel[2] + _panel[3];
          $r.childNodes[0].childNodes[0].style.background = bgs[row[0]];
          $r.childNodes[0].childNodes[0].innerHTML = row[1];
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
      }
    }
  }, [data, frame]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var dpr = window.devicePixelRatio || 1;
    setDpr(dpr);
    var p = pref.current;
    var pspace = p.offsetWidth;
    var pleft = p.offsetLeft;
    setPspace(pspace);
    setPleft(pleft); // get data

    fetch('sampled.json').then(function (r) {
      return r.json();
    }).then(function (_data) {
      setData(_data);
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, __jsx("div", {
    ref: topbar_ref,
    style: {
      display: 'flex',
      paddingLeft: '2ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative',
      marginRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2,
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, frame + 1))), __jsx("div", {
    style: {
      width: '100%',
      overflow: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%',
      minWidth: 6 * 19 + 1 + 'ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      paddingRight: '1ch',
      paddingLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, _components_constants__WEBPACK_IMPORTED_MODULE_7__["key_des"].map(function (k, i) {
    return __jsx("div", {
      style: {
        display: 'flex',
        paddingLeft: '1ch',
        flexGrow: 1
      },
      title: k[0] + ': ' + k[2],
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '5ch',
        overflow: 'hidden',
        textAlign: 'right',
        fontStyle: 'italic'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, data.data.slice(Math.max(frame - termheight + 1, 0), frame + 1).reverse().map(function (d, i) {
    return __jsx("div", {
      key: frame + (termheight - i) - termheight + 1,
      style: {
        position: 'relative',
        display: 'flex',
        paddingLeft: '1ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618
      },
      __self: this
    }, __jsx("div", {
      style: {
        position: 'absolute',
        top: rlh / 2 - (size + 1) / 2 - 1,
        left: cw / 2 - (size + 1) / 2 + cw,
        height: size + 1,
        width: size + 1,
        background: d[19] ? red : scheme.bg
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626
      },
      __self: this
    }), d.slice(0, 19).map(function (d, j) {
      return __jsx("div", {
        style: {
          display: 'flex',
          paddingLeft: '1ch',
          flexGrow: 1,
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        },
        __self: this
      }, __jsx("div", {
        style: {
          width: '5ch',
          overflow: 'hidden',
          textAlign: 'right'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645
        },
        __self: this
      }, j === 0 ? frame + (termheight - i) - termheight + 1 : d));
    }));
  })))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, "STRATEGIES"), __jsx("div", {
    ref: ranklabel_ref,
    style: {
      marginLeft: '1ch',
      fontStyle: 'italic',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, "Ranking"), [['Accuracy', '(TP+TN)/ALL'], ['Precision', 'TP/(TP+FP)'], ['Recall', 'TP/(TP+FN)']].map(function (n) {
    return __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, n[0], ' ', __jsx("span", {
      style: {
        color: scheme.light,
        fontStyle: 'normal'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688
      },
      __self: this
    }, n[1]));
  })), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, __jsx("canvas", {
    style: {
      position: 'absolute',
      left: '1ch',
      top: 0
    },
    ref: sref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }), __jsx("div", {
    ref: rankref,
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }, names.map(function (n, i) {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705
      },
      __self: this
    }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(4)).map(function (n, j) {
      return __jsx("div", {
        style: {
          width: '100%'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        __self: this
      }, __jsx("span", {
        style: {
          display: 'inline-block',
          marginRight: '0.5ch',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch',
          minWidth: '5ch',
          textAlign: 'left'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: scheme.light
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  }), __jsx("canvas", {
    ref: href,
    style: {
      position: 'absolute',
      left: '1ch',
      top: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    ref: title_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }, names.map(function (n, i) {
    return __jsx("div", {
      style: {
        background: bgs[i],
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 746
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(4)).map(function () {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766
      },
      __self: this
    }, [['True Pos', red], ['False Pos', black], ['True Neg', black], ['False Neg', red]].map(function (o, i) {
      return __jsx("div", {
        style: {
          width: '100%',
          marginLeft: i === 2 ? '1ch' : 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        __self: this
      }, __jsx("div", {
        style: {
          background: scheme.fg,
          fontStyle: 'italic'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
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
      marginTop: rlh / 2,
      textAlign: 'center',
      marginBottom: rlh + rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, '<'), speeds.map(function (n, i) {
    return i == speed ? __jsx("div", {
      style: {
        paddingLeft: '0.25ch',
        paddingRight: '0.25ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 845
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: this
  }, '>')), __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      if (pause) {
        setPause(false);
      } else {
        setPause(true);
      }
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882
    },
    __self: this
  }, pause ? 'Play' : 'Pause'), pause ? __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setFrame(function (prev) {
        return prev + 1;
      });
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895
    },
    __self: this
  }, "Tick") : null)) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909
    },
    __self: this
  }, "loading..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBODRCeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCAqIDIsIDY0MCwgMzIwLCA4MCwgNDAsIDIwXVxuXG5sZXQgbmFtZXMgPSBbXG4gICdBdXRvZW5jb2RlcicsXG4gICdWYXIuIEF1dG9lbmNvZGVyJyxcbiAgJ0F1dG9lbmNvZGVyJyxcbiAgJ1Zhci4gQXV0b2VuY29kZXInLFxuXVxuXG5sZXQgc2l6ZSA9IDRcblxubGV0IHRlcm1oZWlnaHQgPSA0XG5cbmxldCBzb3J0X29wdGlvbnMgPSBbJ2FjY3VyYWN5JywgJ3ByZWNpc2lvbicsICdyZWNhbGwnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBoYW5kbGVyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgaHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2ZyYW1lLCBzZXRGcmFtZV0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW3BzcGFjZSwgc2V0UHNwYWNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbcGxlZnQsIHNldFBsZWZ0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBwYW5lbHNfcmVmID0gdXNlUmVmKFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gWy4uLkFycmF5KDQpXS5tYXAobiA9PiAwKSkpXG4gIGxldCBwZGltX3JlZiA9IHVzZVJlZihbXSlcbiAgbGV0IHRkaW1fcmVmID0gdXNlUmVmKFtdKVxuICBsZXQgdGl0bGVfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJ1dGhfcmVmID0gdXNlUmVmKFswLCAwXSlcbiAgbGV0IHRyZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua2xhYmVsX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdG9wYmFyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2Rwciwgc2V0RHByXSA9IHVzZVN0YXRlKDEpXG4gIGxldCBpY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW3NwZWVkLCBzZXRTcGVlZF0gPSB1c2VTdGF0ZSgzKVxuICBsZXQgW2luaXRTcGVlZCwgc2V0SW5pdFNwZWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbGF5b3V0XG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuXG4gICAgICBsZXQgdndpZHRoID0gcHNwYWNlIC0gOFxuICAgICAgdi53aWR0aCA9IHZ3aWR0aCAqIGRwclxuICAgICAgdi5zdHlsZS5tYXJnaW5MZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuICAgICAgbGV0IHRkaW0gPSB0ZGltX3JlZi5jdXJyZW50XG5cbiAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih2LndpZHRoIC8gc2l6ZSlcbiAgICAgIGxldCBwYW5lbF9jb2x1bW5zID0gTWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5mbG9vcigodi53aWR0aCAvIGRwciAtIHNpemUgKiA0KSAvIHNpemUpIC8gMlxuICAgICAgKVxuICAgICAgbGV0IHBhbmVsX3Jvd3MgPSBNYXRoLmNlaWwoMTAwMDAgLyAocGFuZWxfY29sdW1ucyAtIDEpKVxuXG4gICAgICBsZXQgcHcgPSBwYW5lbF9jb2x1bW5zICogc2l6ZVxuICAgICAgbGV0IHBoID0gcGFuZWxfcm93cyAqIHNpemVcblxuICAgICAgbGV0IHBjID0gMlxuICAgICAgbGV0IHByID0gMlxuXG4gICAgICBsZXQgdG9wID0gcmxoXG4gICAgICBsZXQgYm90dG9tID0gcmxoICogMlxuICAgICAgbGV0IGJvdHRvbV9zcGFjZSA9IHJsaCAvIDJcblxuICAgICAgbGV0IHRjID0gcGFuZWxfY29sdW1ucyAqIDIgKyA0XG4gICAgICBsZXQgdHIgPSBNYXRoLmNlaWwoMTAwMDAgLyAoY29sdW1ucyAtIDEpKVxuICAgICAgbGV0IHR3ID0gdGMgKiBzaXplXG4gICAgICBsZXQgdGggPSB0ciAqIHNpemVcbiAgICAgIHRkaW1fcmVmLmN1cnJlbnQgPSBbdHcsIHRoXVxuXG4gICAgICBsZXQgdmhlaWdodCA9XG4gICAgICAgICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKiAyICsgdG9wICsgYm90dG9tICsgYm90dG9tX3NwYWNlXG4gICAgICB2LmhlaWdodCA9IHZoZWlnaHQgKiBkcHJcblxuICAgICAgdi5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIHYuc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgdnguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCBoID0gaHJlZi5jdXJyZW50XG4gICAgICBoLndpZHRoID0gdi53aWR0aFxuICAgICAgaC5oZWlnaHQgPSB2LmhlaWdodFxuICAgICAgaC5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIGguc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBoeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgbGV0ICRyYW5rID0gcmFua3JlZi5jdXJyZW50XG4gICAgICAkcmFuay5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuICAgICAgJHJhbmsuc3R5bGUubGVmdCA9IHBsZWZ0ICsgJ3B4J1xuICAgICAgbGV0IHMgPSBzcmVmLmN1cnJlbnRcbiAgICAgIGxldCBzd2lkdGggPSB0d1xuICAgICAgbGV0IHNoZWlnaHQgPSBybGggKiA0XG4gICAgICBzLndpZHRoID0gc3dpZHRoICogZHByXG4gICAgICBzLmhlaWdodCA9IHNoZWlnaHQgKiBkcHJcbiAgICAgIHMuc3R5bGUud2lkdGggPSBzd2lkdGggKyAncHgnXG4gICAgICBzLnN0eWxlLmhlaWdodCA9IHNoZWlnaHQgKyAncHgnXG4gICAgICBsZXQgc3ggPSBzLmdldENvbnRleHQoJzJkJylcbiAgICAgIHN4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgcmFua2xhYmVsID0gcmFua2xhYmVsX3JlZi5jdXJyZW50XG4gICAgICByYW5rbGFiZWwuc3R5bGUud2lkdGggPSB0dyArICdweCdcblxuICAgICAgdnguZmlsbFN0eWxlID0gJyNlZWUnXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0IGkgPSByICogcGMgKyBjXG4gICAgICAgICAgbGV0IHggPSBjICogKHB3ICsgc2l6ZSAqIDQpXG4gICAgICAgICAgbGV0IHkgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArIHRvcFxuICAgICAgICAgIGxldCB3ID0gcHdcbiAgICAgICAgICBsZXQgaCA9IHBoXG4gICAgICAgICAgcGRpbVtpXSA9IFt4LCB5LCB3LCBoXVxuICAgICAgICAgIHZ4LmZpbGxSZWN0KHgsIHksIHcsIGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICR0aXRsZXMgPSB0aXRsZV9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkdCA9ICR0aXRsZXMuY2hpbGROb2Rlc1tyICogcGMgKyBjXVxuICAgICAgICAgICR0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICR0LnN0eWxlLnRvcCA9IHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLndpZHRoID0gcHcgKyAncHgnXG4gICAgICAgICAgJHQuc3R5bGUubGVmdCA9IGMgKiAocHcgKyBzaXplICogNCkgKyBjdyArICdweCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgJHJlYWQgPSByZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0ICRyID0gJHJlYWQuY2hpbGROb2Rlc1tyICogcGMgKyBjXVxuICAgICAgICAgICRyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICRyLnN0eWxlLnRvcCA9XG4gICAgICAgICAgICByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArIHRvcCArIHBoICsgJ3B4J1xuICAgICAgICAgICRyLnN0eWxlLndpZHRoID0gcHcgKyAncHgnXG4gICAgICAgICAgJHIuc3R5bGUubGVmdCA9IGMgKiAocHcgKyBzaXplICogNCkgKyBjdyArICdweCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGIgPSB0b3BiYXJfcmVmLmN1cnJlbnRcbiAgICAgIHRiLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG5cbiAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgaWNvbi53aWR0aCA9IGN3ICogZHByXG4gICAgICBpY29uLmhlaWdodCA9IHJsaCAqIDEuNSAqIGRwclxuICAgICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoXG4gICAgICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICBmdW5jdGlvbigvKiBmdW5jdGlvbiAqLyBjYWxsYmFjaywgLyogRE9NRWxlbWVudCAqLyBlbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSkoKVxuXG4gICAgICAvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNnaXN0Y29tbWVudC0xOTUzOTI1XG4gICAgICAvKipcbiAgICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgc2V0SW50ZXJ2YWwgZXhjZXB0IHVzZXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgICAgICovXG4gICAgICB3aW5kb3cuckludGVydmFsID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICF3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICApICYmIC8vIEZpcmVmb3ggNSBzaGlwcyB3aXRob3V0IGNhbmNlbCBzdXBwb3J0XG4gICAgICAgICAgIXdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChmbiwgZGVsYXkpXG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGVsdGEgPSBjdXJyZW50IC0gc3RhcnRcblxuICAgICAgICAgIGlmIChkZWx0YSA+PSBkZWxheSkge1xuICAgICAgICAgICAgZm4uY2FsbCgpXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBjbGVhckludGVydmFsIGV4Y2VwdCB1c2VzIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHdoZXJlIHBvc3NpYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAqIEBwYXJhbSB7aW50fG9iamVjdH0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbCA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgICAgICAgICBoYW5kbGUudmFsdWVcbiAgICAgICAgICAgICkgLyogU3VwcG9ydCBmb3IgbGVnYWN5IEFQSSAqL1xuICAgICAgICAgIDogd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogY2xlYXJJbnRlcnZhbChoYW5kbGUpXG4gICAgICB9XG5cbiAgICAgIGlmICghcGF1c2UpIHtcbiAgICAgICAgaGFuZGxlcl9yZWYuY3VycmVudCA9IHdpbmRvdy5ySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHNwZWVkc1tzcGVlZF0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRJbml0U3BlZWQodHJ1ZSlcbiAgfSwgW2RhdGFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRTcGVlZCAhPSBmYWxzZSkge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgICBpZiAoIXBhdXNlKSB7XG4gICAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSBySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHNwZWVkc1tzcGVlZF0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbc3BlZWQsIHBhdXNlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBsZXQgcGFuZWxzID0gcGFuZWxzX3JlZi5jdXJyZW50XG4gICAgICBsZXQgJHJlYWQgPSByZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBsZXQgdHJ1dGggPSB0cnV0aF9yZWYuY3VycmVudFxuICAgICAgbGV0ICR0cnV0aCA9IHRyZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBsZXQgcGRpbSA9IHBkaW1fcmVmLmN1cnJlbnRcblxuICAgICAgbGV0IHYgPSB2cmVmLmN1cnJlbnRcbiAgICAgIGxldCB2eCA9IHYuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICBsZXQgaCA9IGhyZWYuY3VycmVudFxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgIC8vIHVwZGF0ZSBwYW5lbCBkYXRhXG4gICAgICBsZXQgcGFuZWxfa2V5cyA9IFsyMSwgMjAsIDIxLCAyMF1cbiAgICAgIGxldCByZWNvcmQgPSBkYXRhLmRhdGFbZnJhbWVdXG4gICAgICBsZXQgYW5vbWFseSA9IHJlY29yZFsxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcblxuICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICAgIHRydXRoWzBdKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgICB0cnV0aFsxXSsrXG4gICAgICB9XG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzBdXG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzFdXG5cbiAgICAgIGxldCBwYyA9IHBkaW1bMF1bMl0gLyBzaXplXG4gICAgICBsZXQgcHIgPSBwZGltWzBdWzNdIC8gc2l6ZVxuXG4gICAgICBoeC5jbGVhclJlY3QoMCwgMCwgaC53aWR0aCAvIGRwciwgaC5oZWlnaHQgLyBkcHIpXG5cbiAgICAgIC8vIGxldCBjb24gPSBjb25fcmVmLmN1cnJlbnRcbiAgICAgIC8vIGxldCByZWNvcmRzID0gZGF0YS5kYXRhXG4gICAgICAvLyAgIC5zbGljZShNYXRoLm1heCgwLCBmcmFtZSArIDEgLSB0ZXJtaGVpZ2h0KSwgZnJhbWUgKyAxKVxuICAgICAgLy8gICAucmV2ZXJzZSgpXG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICAgbGV0IHJlYyA9IHJlY29yZHNbaV1cbiAgICAgIC8vICAgbGV0IHJvdyA9IGNvbi5jaGlsZE5vZGVzW2ldXG4gICAgICAvLyAgIGxldCBhbm9tYWx5ID0gcmVjWzE5XSA9PT0gMSA/IHRydWUgOiBmYWxzZVxuICAgICAgLy8gICByb3cuY2hpbGROb2Rlc1swXVxuICAgICAgLy8gICBsZXQgaW5kaWNhdG9yID0gKHJvdy5jaGlsZE5vZGVzWzBdLnN0eWxlLmJhY2tncm91bmQgPSBhbm9tYWx5XG4gICAgICAvLyAgICAgPyByZWRcbiAgICAgIC8vICAgICA6IHNjaGVtZS5iZylcbiAgICAgIC8vICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3cuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgIC8vICAgICBsZXQgY2VsbCA9IHJvdy5jaGlsZE5vZGVzW2ogKyAxXS5jaGlsZE5vZGVzWzBdXG4gICAgICAvLyAgICAgaWYgKGogPT09IDApIHtcbiAgICAgIC8vICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZnJhbWUgKyAodGVybWhlaWdodCAtIGkpIC0gdGVybWhlaWdodCArIDFcbiAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICAgaWYgKGNlbGwuaW5uZXJIVE1MICE9PSByZWNbal0pIHtcbiAgICAgIC8vICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSByZWNbal1cbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW2ldXG4gICAgICAgIGxldCBkZXRlY3RlZCA9IHJlY29yZFtwYW5lbF9rZXlzW2ldXVxuXG4gICAgICAgIGxldCBwMXgsIHAxeVxuICAgICAgICAvLyBUUCBGUCBUTiBGTlxuICAgICAgICBpZiAoZGV0ZWN0ZWQgPiAwLjEpIHtcbiAgICAgICAgICBsZXQgbiA9IHBhbmVsc1tpXVswXSArIHBhbmVsc1tpXVsxXVxuICAgICAgICAgIHAxeSA9IChwciAtIChuICUgcHIpIC0gMSkgKiBzaXplXG4gICAgICAgICAgcDF4ID0gTWF0aC5mbG9vcihuIC8gcHIpICogc2l6ZVxuICAgICAgICAgIGlmIChhbm9tYWx5KSB7XG4gICAgICAgICAgICAvLyB0cnVlIHBvc1xuICAgICAgICAgICAgcGFuZWxzW2ldWzBdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZmFsc2UgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMV0rK1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbiA9IHBhbmVsc1tpXVsyXSArIHBhbmVsc1tpXVszXVxuICAgICAgICAgIHAxeSA9IChwciAtIChuICUgcHIpIC0gMSkgKiBzaXplXG4gICAgICAgICAgcDF4ID0gKHBjIC0gTWF0aC5mbG9vcihuIC8gcHIpIC0gMSkgKiBzaXplIC0gMVxuICAgICAgICAgIGlmIChhbm9tYWx5KSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVszXSsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRydWUgbmVnXG4gICAgICAgICAgICBwYW5lbHNbaV1bMl0rK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaW0gPSBwZGltW2ldXG4gICAgICAgIHZ4LmZpbGxSZWN0KGRpbVswXSArIHAxeCwgZGltWzFdICsgcDF5LCBzaXplICsgMSwgc2l6ZSArIDEpXG5cbiAgICAgICAgLy8gaHguZmlsbFN0eWxlID0gJyM0MzMxNDInXG4gICAgICAgIGh4LmZpbGxTdHlsZSA9IGJnc1tpXVxuICAgICAgICBoeC5maWxsUmVjdChcbiAgICAgICAgICBkaW1bMF0gKyBwMXggLSAyLFxuICAgICAgICAgIGRpbVsxXSArIHAxeSAtIDIsXG4gICAgICAgICAgc2l6ZSArIDEgKyA0LFxuICAgICAgICAgIHNpemUgKyAxICsgNFxuICAgICAgICApXG4gICAgICAgIGh4LmZpbGxTdHlsZSA9IHZ4LmZpbGxTdHlsZVxuICAgICAgICBoeC5maWxsUmVjdChkaW1bMF0gKyBwMXgsIGRpbVsxXSArIHAxeSwgc2l6ZSArIDEsIHNpemUgKyAxKVxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgJHJlYWQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gcGFuZWxbal1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWNjdXJhY3kgPSAoVFArVE4pLyhUUCtUTitGUCtGTilcbiAgICAgICAgbGV0IGFjY3VyYWN5ID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAoKHBhbmVsWzBdICsgcGFuZWxbMl0pIC9cbiAgICAgICAgICAgIChwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXSkpICpcbiAgICAgICAgICAgIDEwMFxuICAgICAgICApXG4gICAgICAgIC8vIHByZWNpc2lvbiB0cCAvICh0cCArIGZwKVxuICAgICAgICBsZXQgcHJlY2lzaW9uID0gTWF0aC5yb3VuZCgocGFuZWxbMF0gLyAocGFuZWxbMF0gKyBwYW5lbFsxXSkpICogMTAwKVxuXG4gICAgICAgIC8vIHJlY2FsbCB0cCAvICh0cCArIGZuKVxuICAgICAgICBsZXQgcmVjYWxsID0gTWF0aC5yb3VuZCgocGFuZWxbMF0gLyAocGFuZWxbMF0gKyBwYW5lbFszXSkpICogMTAwKVxuXG4gICAgICAgIC8vIDQgNSA2XG4gICAgICAgIHBhbmVsc1tpXVs0XSA9IGFjY3VyYWN5XG4gICAgICAgIHBhbmVsc1tpXVs1XSA9IHByZWNpc2lvblxuICAgICAgICBwYW5lbHNbaV1bNl0gPSByZWNhbGxcbiAgICAgIH1cblxuICAgICAgbGV0IHZoZWlnaHQgPSB2LmhlaWdodCAvIGRwclxuICAgICAgbGV0IFt0dywgdGhdID0gdGRpbV9yZWYuY3VycmVudFxuICAgICAgdnguY2xlYXJSZWN0KDAsIHZoZWlnaHQgLSBybGggKiAyIC0gMSwgdHcsIHJsaCArIDIpXG4gICAgICBsZXQgc3BsaXQgPSB0cnV0aFsxXSAvICh0cnV0aFswXSArIHRydXRoWzFdKVxuICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICB2eC5maWxsUmVjdCgwLCB2aGVpZ2h0IC0gcmxoICogMS41LCB0dyAtIHR3ICogc3BsaXQsIHJsaClcbiAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgdnguZmlsbFJlY3QodHcgLSB0dyAqIHNwbGl0IC0gMSwgdmhlaWdodCAtIHJsaCAqIDEuNSwgdHcgKiBzcGxpdCwgcmxoKVxuXG4gICAgICAvLyBzZXQgcmFua2luZ3NcbiAgICAgIHtcbiAgICAgICAgbGV0ICRycyA9IHJhbmtyZWYuY3VycmVudC5jaGlsZE5vZGVzXG4gICAgICAgIGxldCBzID0gc3JlZi5jdXJyZW50XG4gICAgICAgIGxldCBzeCA9IHMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBzeC5jbGVhclJlY3QoMCwgMCwgcy53aWR0aCAvIGRwciwgcy5oZWlnaHQgLyBkcHIpXG5cbiAgICAgICAgbGV0IHJhbmtfcm93cyA9IG5hbWVzLm1hcCgobiwgaSkgPT4ge1xuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tpXVxuICAgICAgICAgIHJldHVybiBbaSwgbiwgcGFuZWxbNF0sIHBhbmVsWzVdLCBwYW5lbFs2XV1cbiAgICAgICAgfSlcbiAgICAgICAgcmFua19yb3dzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBiWzJdIC0gYVsyXVxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmtfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByb3cgPSByYW5rX3Jvd3NbaV1cbiAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbcm93WzBdXVxuICAgICAgICAgIGxldCBbVFAsIEZQLCBUTiwgRk5dID0gcGFuZWxcbiAgICAgICAgICBsZXQgJHIgPSAkcnNbaV1cbiAgICAgICAgICBsZXQgdG90YWwgPSBwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXVxuXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmJhY2tncm91bmQgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSByb3dbMV1cbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gIWlzTmFOKHJvd1syXSlcbiAgICAgICAgICAgID8gcm93WzJdICsgJyUgJ1xuICAgICAgICAgICAgOiAnTi9BICdcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCgke1RQfSske1ROfSkvJHt0b3RhbH1gXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbM10pXG4gICAgICAgICAgICA/IHJvd1szXSArICclICdcbiAgICAgICAgICAgIDogJ04vQSAnXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAke1RQfS8oJHtUUH0rJHtGUH0pYFxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSAhaXNOYU4ocm93WzRdKVxuICAgICAgICAgICAgPyByb3dbNF0gKyAnJSAnXG4gICAgICAgICAgICA6ICdOL0EgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7Rk59KWBcblxuICAgICAgICAgIGxldCB5ID0gaSAqIHJsaFxuICAgICAgICAgIGxldCB3ID0gcy53aWR0aCAvIGRwclxuICAgICAgICAgIGxldCBoID0gcmxoICsgMVxuICAgICAgICAgIC8vIHN4LmZpbGxTdHlsZSA9IGJnc1tyb3dbMF1dXG4gICAgICAgICAgLy8gc3guZmlsbFJlY3QoMCwgeSwgdywgaClcblxuICAgICAgICAgIHN4LmZpbGxTdHlsZSA9IHNjaGVtZS5mZ1xuICAgICAgICAgIGxldCB4c3RlcCA9IHMud2lkdGggLyBkcHIgLyA0XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gKGMgKyAxKSAqIHhzdGVwXG4gICAgICAgICAgICBsZXQgdyA9IChyb3dbYyArIDJdIC8gMTAwKSAqIHhzdGVwIC0gY3dcbiAgICAgICAgICAgIGlmICh3IDw9IDApIHcgPSAwXG4gICAgICAgICAgICBzeC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaXguY2xlYXJSZWN0KDAsIDAsIGN3LCBybGgpXG4gICAgICAgIGxldCBzdGVwID0gKHJsaCAqIDEuNSkgLyA0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua19yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICAgICAgbGV0IHkgPSBpICogc3RlcFxuICAgICAgICAgIGxldCB3ID0gKHBhbmVsWzRdIC8gMTAwKSAqIGN3XG4gICAgICAgICAgaXguZmlsbFN0eWxlID0gYmdzW3Jvd1swXV1cbiAgICAgICAgICBpeC5maWxsUmVjdCgwLCB5LCB3LCBzdGVwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YSwgZnJhbWVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBzZXREcHIoZHByKVxuXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHNwYWNlID0gcC5vZmZzZXRXaWR0aFxuICAgIGxldCBwbGVmdCA9IHAub2Zmc2V0TGVmdFxuICAgIHNldFBzcGFjZShwc3BhY2UpXG4gICAgc2V0UGxlZnQocGxlZnQpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdzYW1wbGVkLmpzb24nKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKF9kYXRhID0+IHtcbiAgICAgICAgc2V0RGF0YShfZGF0YSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxY2gnLCBwYWRkaW5nUmlnaHQ6ICcxY2gnIH19PlxuICAgICAgICA8ZGl2IHJlZj17cHJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjYmJiJyxcbiAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXt0b3BiYXJfcmVmfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHJlZj17aWNvbl9yZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxY2gnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJMSVBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7fX0+SW5mbzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2RhdGEgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5DT05ORUNUSU9OUzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjNzc3JyB9fT57ZnJhbWUgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWluV2lkdGg6IDYgKiAxOSArIDEgKyAnY2gnIH19PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtrZXlfZGVzLm1hcCgoaywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtrWzBdICsgJzogJyArIGtbMl19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2tbMV19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoICogdGVybWhlaWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDMzMTQyJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByZWY9e2Nvbl9yZWZ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoTWF0aC5tYXgoZnJhbWUgLSB0ZXJtaGVpZ2h0ICsgMSwgMCksIGZyYW1lICsgMSlcbiAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZnJhbWUgKyAodGVybWhlaWdodCAtIGkpIC0gdGVybWhlaWdodCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBybGggLyAyIC0gKHNpemUgKyAxKSAvIDIgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjdyAvIDIgLSAoc2l6ZSArIDEpIC8gMiArIGN3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRbMTldID8gcmVkIDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtkLnNsaWNlKDAsIDE5KS5tYXAoKGQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ogPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZnJhbWUgKyAodGVybWhlaWdodCAtIGkpIC0gdGVybWhlaWdodCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU1RSQVRFR0lFU1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmFua2xhYmVsX3JlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5SYW5raW5nPC9kaXY+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICBbJ0FjY3VyYWN5JywgJyhUUCtUTikvQUxMJ10sXG4gICAgICAgICAgICAgIFsnUHJlY2lzaW9uJywgJ1RQLyhUUCtGUCknXSxcbiAgICAgICAgICAgICAgWydSZWNhbGwnLCAnVFAvKFRQK0ZOKSddLFxuICAgICAgICAgICAgXS5tYXAobiA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICB7blswXX17JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQsIGZvbnRTdHlsZTogJ25vcm1hbCcgfX0+XG4gICAgICAgICAgICAgICAgICB7blsxXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxY2gnLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXtzcmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtyYW5rcmVmfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKChuLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWSVNVQUxJWkVEXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e3ZyZWZ9IHN0eWxlPXt7fX0gLz5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgcmVmPXtocmVmfVxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzFjaCcsIHRvcDogMCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAgICAgICByZWY9e3RpdGxlX3JlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlZj17cmVhZG91dF9yZWZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoNCldLm1hcCgoKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICBbJ1RydWUgUG9zJywgcmVkXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBQb3MnLCBibGFja10sXG4gICAgICAgICAgICAgICAgICAgIFsnVHJ1ZSBOZWcnLCBibGFja10sXG4gICAgICAgICAgICAgICAgICAgIFsnRmFsc2UgTmVnJywgcmVkXSxcbiAgICAgICAgICAgICAgICAgIF0ubWFwKChvLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5MZWZ0OiBpID09PSAyID8gJzFjaCcgOiAwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvWzBdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoICsgcmxoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCbGlwIGlzIGFuIGFub21hbHkgZGV0ZWN0aW9uIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNsb3VkZXJhIEZhc3QgRm9yd2FyZDwvYT4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2JiYicsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlNwZWVkOjwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCAtIDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7c3BlZWRzLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICBpID09IHNwZWVkID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoaSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA8IHNwZWVkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNwZWVkKHNwZWVkICsgMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyc+J31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJjaCcgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgICAgICAgc2V0UGF1c2UoZmFsc2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGF1c2UgPyAnUGxheScgOiAnUGF1c2UnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7cGF1c2UgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUaWNrXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmc31weDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaH07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.db46dea731a2e97292b5.hot-update.js.map