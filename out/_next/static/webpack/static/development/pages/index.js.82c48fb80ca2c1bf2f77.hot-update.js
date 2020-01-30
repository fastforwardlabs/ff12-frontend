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
  var truthtitle_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var ranklabel_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var topbar_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      dpr = _useState5[0],
      setDpr = _useState5[1];

  var icon_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var con_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      speed = _useState6[0],
      setSpeed = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      initSpeed = _useState7[0],
      setInitSpeed = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
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

      var tt = truthtitle_ref.current;
      tt.style.width = tw + 'px';
      tt.style.left = cw + 'px';
      tt.style.top = 2 * (top + ph + bottom + bottom_space) + 'px';
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

      var tre = treadout_ref.current;
      tre.style.width = tw + 'px';
      tre.style.left = cw + 'px';
      tre.style.top = 2 * (top + ph + bottom + bottom_space) + rlh + 'px';
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

      handler_ref.current = window.rInterval(function () {
        setFrame(function (prev) {
          return prev + 1;
        });
      }, speeds[speed]);
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

      handler_ref.current = rInterval(function () {
        setFrame(function (prev) {
          return prev + 1;
        });
      }, speeds[speed]);
    }
  }, [speed]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (initSpeed != false) {
      if (pause === true) {
        if (handler_ref.current !== null) {
          window.clearRInterval(handler_ref.current);
        }
      } else {
        handler_ref.current = rInterval(function () {
          setFrame(function (prev) {
            return prev + 1;
          });
        }, speeds[speed]);
      }
    }
  }, [pause]);
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
      hx.clearRect(0, 0, h.width / dpr, h.height / dpr);
      var con = con_ref.current;
      var records = data.data.slice(Math.max(0, frame - termheight), frame).reverse();

      for (var i = 0; i < records.length; i++) {
        var rec = records[i];
        var row = con.childNodes[i];

        var _anomaly = rec[19] === 1 ? true : false;

        row.childNodes[0];
        var indicator = row.childNodes[0].style.background = _anomaly ? red : scheme.bg;

        for (var j = 0; j < row.childNodes.length - 1; j++) {
          var _cell = row.childNodes[j + 1].childNodes[0];

          if (j === 0) {
            _cell.innerHTML = frame + (termheight - i) - termheight;
          } else {
            if (_cell.innerHTML !== rec[j]) {
              _cell.innerHTML = rec[j];
            }
          }
        }
      }

      for (var _i = 0; _i < panels.length; _i++) {
        var panel = panels[_i];
        var detected = record[panel_keys[_i]];
        var p1x = void 0,
            p1y = void 0; // TP FP TN FN

        if (detected > 0.1) {
          var n = panels[_i][0] + panels[_i][1];
          p1y = (pr - n % pr - 1) * size;
          p1x = Math.floor(n / pr) * size;

          if (anomaly) {
            // true pos
            panels[_i][0]++;
          } else {
            // false pos
            panels[_i][1]++;
          }
        } else {
          var _n = panels[_i][2] + panels[_i][3];

          p1y = (pr - _n % pr - 1) * size;
          p1x = (pc - Math.floor(_n / pr) - 1) * size - 1;

          if (anomaly) {
            // false neg
            panels[_i][3]++;
          } else {
            // true neg
            panels[_i][2]++;
          }
        }

        var dim = pdim[_i];
        vx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1); // hx.fillStyle = '#433142'

        hx.fillStyle = bgs[_i];
        hx.fillRect(dim[0] + p1x - 2, dim[1] + p1y - 2, size + 1 + 4, size + 1 + 4);
        hx.fillStyle = vx.fillStyle;
        hx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1);

        for (var _j = 0; _j < 4; _j++) {
          $read.childNodes[_i].childNodes[_j].childNodes[1].innerHTML = panel[_j];
        } //accuracy = (TP+TN)/(TP+TN+FP+FN)


        var accuracy = Math.round((panel[0] + panel[2]) / (panel[0] + panel[1] + panel[2] + panel[3]) * 100); // precision tp / (tp + fp)

        var precision = Math.round(panel[0] / (panel[0] + panel[1]) * 100); // recall tp / (tp + fn)

        var recall = Math.round(panel[0] / (panel[0] + panel[3]) * 100); // 4 5 6

        panels[_i][4] = accuracy;
        panels[_i][5] = precision;
        panels[_i][6] = recall;
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

        for (var _i2 = 0; _i2 < rank_rows.length; _i2++) {
          var _row = rank_rows[_i2];
          var _panel = panels[_row[0]];

          var _panel2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_panel, 4),
              TP = _panel2[0],
              FP = _panel2[1],
              TN = _panel2[2],
              FN = _panel2[3];

          var $r = $rs[_i2];
          var total = _panel[0] + _panel[1] + _panel[2] + _panel[3];
          $r.childNodes[0].childNodes[0].style.background = bgs[_row[0]];
          $r.childNodes[0].childNodes[0].innerHTML = _row[1];
          $r.childNodes[1].childNodes[0].innerHTML = _row[2] + '% ';
          $r.childNodes[1].childNodes[1].innerHTML = "(".concat(TP, "+").concat(TN, ")/").concat(total);
          $r.childNodes[2].childNodes[0].innerHTML = _row[3] + '% ';
          $r.childNodes[2].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FP, ")");
          $r.childNodes[3].childNodes[0].innerHTML = _row[4] + '% ';
          $r.childNodes[3].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FN, ")");
          var y = _i2 * rlh;
          var w = s.width / dpr;

          var _h2 = rlh + 1; // sx.fillStyle = bgs[row[0]]
          // sx.fillRect(0, y, w, h)


          sx.fillStyle = scheme.fg;
          var xstep = s.width / dpr / 4;

          for (var c = 0; c < 3; c++) {
            var x = (c + 1) * xstep;

            var _w = _row[c + 2] / 100 * xstep - cw;

            sx.fillRect(x, y, _w, _h2);
          }
        }

        var icon = icon_ref.current;
        var ix = icon.getContext('2d');
        ix.clearRect(0, 0, cw, rlh);
        var step = rlh * 1.5 / 4;

        for (var _i3 = 0; _i3 < rank_rows.length; _i3++) {
          var _row2 = rank_rows[_i3];
          var _panel3 = panels[_row2[0]];

          var _y = _i3 * step;

          var _w2 = _panel3[4] / 100 * cw;

          ix.fillStyle = bgs[_row2[0]];
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
      lineNumber: 531
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
      lineNumber: 532
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
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
      lineNumber: 535
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
      lineNumber: 544
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
      lineNumber: 551
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
      lineNumber: 561
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
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
      lineNumber: 574
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, frame))), __jsx("div", {
    style: {
      width: '100%',
      overflow: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
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
      lineNumber: 588
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
      lineNumber: 589
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
        lineNumber: 597
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
        lineNumber: 605
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
      lineNumber: 619
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(4)).map(function (n, i) {
    return __jsx("div", {
      style: {
        position: 'relative',
        display: 'flex',
        paddingLeft: '1ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    }, __jsx("div", {
      style: {
        position: 'absolute',
        top: rlh / 2 - (size + 1) / 2 - 1,
        left: cw / 2 - (size + 1) / 2 + cw,
        height: size + 1,
        width: size + 1
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637
      },
      __self: this
    }), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(19)).map(function (o, j) {
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
          lineNumber: 647
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
          lineNumber: 655
        },
        __self: this
      }));
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
      lineNumber: 669
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
      lineNumber: 678
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
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
        lineNumber: 692
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
        lineNumber: 694
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
      lineNumber: 700
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
      lineNumber: 705
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
      lineNumber: 709
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
        lineNumber: 711
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
          lineNumber: 713
        },
        __self: this
      }, __jsx("span", {
        style: {
          display: 'inline-block',
          marginRight: '0.5ch',
          paddingLeft: '0.5ch',
          paddingRight: '0.5ch'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: scheme.light
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
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
      lineNumber: 729
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740
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
      lineNumber: 741
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
      lineNumber: 745
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
        lineNumber: 750
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
      lineNumber: 761
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
        lineNumber: 770
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
          lineNumber: 777
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
          lineNumber: 780
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
          lineNumber: 788
        },
        __self: this
      }));
    }));
  })), __jsx("div", {
    ref: truthtitle_ref,
    style: {
      position: 'absolute'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802
    },
    __self: this
  }, __jsx("div", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: this
  }, "DATA BALANCE")), __jsx("div", {
    ref: treadout_ref,
    style: {
      position: 'absolute',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontStyle: 'italic'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  }, "Anomalies"), __jsx("div", {
    style: {
      color: 'white',
      paddingLeft: '1ch',
      textAlign: 'left'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819
    },
    __self: this
  })), __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontStyle: 'italic',
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828
    },
    __self: this
  }, "Normal"), __jsx("div", {
    style: {
      color: 'white',
      paddingRight: '1ch',
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831
    },
    __self: this
  })))), __jsx("div", {
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
      lineNumber: 841
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851
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
      lineNumber: 853
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
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
      lineNumber: 871
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
        lineNumber: 887
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
        lineNumber: 896
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
      lineNumber: 910
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
      lineNumber: 924
    },
    __self: this
  }, pause ? 'Play' : 'Pause'))) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 939
    },
    __self: this
  }, "loading..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNDZCeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCAqIDIsIDY0MCwgMzIwLCA4MCwgNDAsIDIwXVxuXG5sZXQgbmFtZXMgPSBbXG4gICdBdXRvZW5jb2RlcicsXG4gICdWYXIuIEF1dG9lbmNvZGVyJyxcbiAgJ0F1dG9lbmNvZGVyJyxcbiAgJ1Zhci4gQXV0b2VuY29kZXInLFxuXVxuXG5sZXQgc2l6ZSA9IDRcblxubGV0IHRlcm1oZWlnaHQgPSA0XG5cbmxldCBzb3J0X29wdGlvbnMgPSBbJ2FjY3VyYWN5JywgJ3ByZWNpc2lvbicsICdyZWNhbGwnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBoYW5kbGVyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgaHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2ZyYW1lLCBzZXRGcmFtZV0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW3BzcGFjZSwgc2V0UHNwYWNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbcGxlZnQsIHNldFBsZWZ0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBwYW5lbHNfcmVmID0gdXNlUmVmKFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gWy4uLkFycmF5KDQpXS5tYXAobiA9PiAwKSkpXG4gIGxldCBwZGltX3JlZiA9IHVzZVJlZihbXSlcbiAgbGV0IHRkaW1fcmVmID0gdXNlUmVmKFtdKVxuICBsZXQgdGl0bGVfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJ1dGhfcmVmID0gdXNlUmVmKFswLCAwXSlcbiAgbGV0IHRyZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJ1dGh0aXRsZV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJhbmtsYWJlbF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRvcGJhcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtkcHIsIHNldERwcl0gPSB1c2VTdGF0ZSgxKVxuICBsZXQgaWNvbl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNvbl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtzcGVlZCwgc2V0U3BlZWRdID0gdXNlU3RhdGUoMClcbiAgbGV0IFtpbml0U3BlZWQsIHNldEluaXRTcGVlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbGF5b3V0XG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuXG4gICAgICBsZXQgdndpZHRoID0gcHNwYWNlIC0gOFxuICAgICAgdi53aWR0aCA9IHZ3aWR0aCAqIGRwclxuICAgICAgdi5zdHlsZS5tYXJnaW5MZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuICAgICAgbGV0IHRkaW0gPSB0ZGltX3JlZi5jdXJyZW50XG5cbiAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih2LndpZHRoIC8gc2l6ZSlcbiAgICAgIGxldCBwYW5lbF9jb2x1bW5zID0gTWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5mbG9vcigodi53aWR0aCAvIGRwciAtIHNpemUgKiA0KSAvIHNpemUpIC8gMlxuICAgICAgKVxuICAgICAgbGV0IHBhbmVsX3Jvd3MgPSBNYXRoLmNlaWwoMTAwMDAgLyAocGFuZWxfY29sdW1ucyAtIDEpKVxuXG4gICAgICBsZXQgcHcgPSBwYW5lbF9jb2x1bW5zICogc2l6ZVxuICAgICAgbGV0IHBoID0gcGFuZWxfcm93cyAqIHNpemVcblxuICAgICAgbGV0IHBjID0gMlxuICAgICAgbGV0IHByID0gMlxuXG4gICAgICBsZXQgdG9wID0gcmxoXG4gICAgICBsZXQgYm90dG9tID0gcmxoICogMlxuICAgICAgbGV0IGJvdHRvbV9zcGFjZSA9IHJsaCAvIDJcblxuICAgICAgbGV0IHRjID0gcGFuZWxfY29sdW1ucyAqIDIgKyA0XG4gICAgICBsZXQgdHIgPSBNYXRoLmNlaWwoMTAwMDAgLyAoY29sdW1ucyAtIDEpKVxuICAgICAgbGV0IHR3ID0gdGMgKiBzaXplXG4gICAgICBsZXQgdGggPSB0ciAqIHNpemVcbiAgICAgIHRkaW1fcmVmLmN1cnJlbnQgPSBbdHcsIHRoXVxuXG4gICAgICBsZXQgdmhlaWdodCA9XG4gICAgICAgICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKiAyICsgdG9wICsgYm90dG9tICsgYm90dG9tX3NwYWNlXG4gICAgICB2LmhlaWdodCA9IHZoZWlnaHQgKiBkcHJcblxuICAgICAgdi5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIHYuc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgdnguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCBoID0gaHJlZi5jdXJyZW50XG4gICAgICBoLndpZHRoID0gdi53aWR0aFxuICAgICAgaC5oZWlnaHQgPSB2LmhlaWdodFxuICAgICAgaC5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIGguc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBoeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgbGV0ICRyYW5rID0gcmFua3JlZi5jdXJyZW50XG4gICAgICAkcmFuay5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuICAgICAgJHJhbmsuc3R5bGUubGVmdCA9IHBsZWZ0ICsgJ3B4J1xuICAgICAgbGV0IHMgPSBzcmVmLmN1cnJlbnRcbiAgICAgIGxldCBzd2lkdGggPSB0d1xuICAgICAgbGV0IHNoZWlnaHQgPSBybGggKiA0XG4gICAgICBzLndpZHRoID0gc3dpZHRoICogZHByXG4gICAgICBzLmhlaWdodCA9IHNoZWlnaHQgKiBkcHJcbiAgICAgIHMuc3R5bGUud2lkdGggPSBzd2lkdGggKyAncHgnXG4gICAgICBzLnN0eWxlLmhlaWdodCA9IHNoZWlnaHQgKyAncHgnXG4gICAgICBsZXQgc3ggPSBzLmdldENvbnRleHQoJzJkJylcbiAgICAgIHN4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgcmFua2xhYmVsID0gcmFua2xhYmVsX3JlZi5jdXJyZW50XG4gICAgICByYW5rbGFiZWwuc3R5bGUud2lkdGggPSB0dyArICdweCdcblxuICAgICAgdnguZmlsbFN0eWxlID0gJyNlZWUnXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0IGkgPSByICogcGMgKyBjXG4gICAgICAgICAgbGV0IHggPSBjICogKHB3ICsgc2l6ZSAqIDQpXG4gICAgICAgICAgbGV0IHkgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArIHRvcFxuICAgICAgICAgIGxldCB3ID0gcHdcbiAgICAgICAgICBsZXQgaCA9IHBoXG4gICAgICAgICAgcGRpbVtpXSA9IFt4LCB5LCB3LCBoXVxuICAgICAgICAgIHZ4LmZpbGxSZWN0KHgsIHksIHcsIGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICR0aXRsZXMgPSB0aXRsZV9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkdCA9ICR0aXRsZXMuY2hpbGROb2Rlc1tyICogcGMgKyBjXVxuICAgICAgICAgICR0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICR0LnN0eWxlLnRvcCA9IHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLndpZHRoID0gcHcgKyAncHgnXG4gICAgICAgICAgJHQuc3R5bGUubGVmdCA9IGMgKiAocHcgKyBzaXplICogNCkgKyBjdyArICdweCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdHQgPSB0cnV0aHRpdGxlX3JlZi5jdXJyZW50XG4gICAgICB0dC5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuICAgICAgdHQuc3R5bGUubGVmdCA9IGN3ICsgJ3B4J1xuICAgICAgdHQuc3R5bGUudG9wID0gMiAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyAncHgnXG5cbiAgICAgIGxldCAkcmVhZCA9IHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgJHIgPSAkcmVhZC5jaGlsZE5vZGVzW3IgKiBwYyArIGNdXG4gICAgICAgICAgJHIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgJHIuc3R5bGUudG9wID1cbiAgICAgICAgICAgIHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgdG9wICsgcGggKyAncHgnXG4gICAgICAgICAgJHIuc3R5bGUud2lkdGggPSBwdyArICdweCdcbiAgICAgICAgICAkci5zdHlsZS5sZWZ0ID0gYyAqIChwdyArIHNpemUgKiA0KSArIGN3ICsgJ3B4J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0cmUgPSB0cmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgdHJlLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG4gICAgICB0cmUuc3R5bGUubGVmdCA9IGN3ICsgJ3B4J1xuICAgICAgdHJlLnN0eWxlLnRvcCA9IDIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgcmxoICsgJ3B4J1xuXG4gICAgICBsZXQgdGIgPSB0b3BiYXJfcmVmLmN1cnJlbnRcbiAgICAgIHRiLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG5cbiAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgaWNvbi53aWR0aCA9IGN3ICogZHByXG4gICAgICBpY29uLmhlaWdodCA9IHJsaCAqIDEuNSAqIGRwclxuICAgICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoXG4gICAgICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICBmdW5jdGlvbigvKiBmdW5jdGlvbiAqLyBjYWxsYmFjaywgLyogRE9NRWxlbWVudCAqLyBlbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSkoKVxuXG4gICAgICAvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNnaXN0Y29tbWVudC0xOTUzOTI1XG4gICAgICAvKipcbiAgICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgc2V0SW50ZXJ2YWwgZXhjZXB0IHVzZXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgICAgICovXG4gICAgICB3aW5kb3cuckludGVydmFsID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICF3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICApICYmIC8vIEZpcmVmb3ggNSBzaGlwcyB3aXRob3V0IGNhbmNlbCBzdXBwb3J0XG4gICAgICAgICAgIXdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChmbiwgZGVsYXkpXG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGVsdGEgPSBjdXJyZW50IC0gc3RhcnRcblxuICAgICAgICAgIGlmIChkZWx0YSA+PSBkZWxheSkge1xuICAgICAgICAgICAgZm4uY2FsbCgpXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBjbGVhckludGVydmFsIGV4Y2VwdCB1c2VzIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHdoZXJlIHBvc3NpYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAqIEBwYXJhbSB7aW50fG9iamVjdH0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbCA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgICAgICAgICBoYW5kbGUudmFsdWVcbiAgICAgICAgICAgICkgLyogU3VwcG9ydCBmb3IgbGVnYWN5IEFQSSAqL1xuICAgICAgICAgIDogd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogY2xlYXJJbnRlcnZhbChoYW5kbGUpXG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSB3aW5kb3cuckludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICB9KVxuICAgICAgfSwgc3BlZWRzW3NwZWVkXSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICAgIHNldEluaXRTcGVlZCh0cnVlKVxuICB9LCBbZGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdFNwZWVkICE9IGZhbHNlKSB7XG4gICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSBySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgIH0pXG4gICAgICB9LCBzcGVlZHNbc3BlZWRdKVxuICAgIH1cbiAgfSwgW3NwZWVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0U3BlZWQgIT0gZmFsc2UpIHtcbiAgICAgIGlmIChwYXVzZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVyX3JlZi5jdXJyZW50ID0gckludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBzcGVlZHNbc3BlZWRdKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3BhdXNlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBsZXQgcGFuZWxzID0gcGFuZWxzX3JlZi5jdXJyZW50XG4gICAgICBsZXQgJHJlYWQgPSByZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBsZXQgdHJ1dGggPSB0cnV0aF9yZWYuY3VycmVudFxuICAgICAgbGV0ICR0cnV0aCA9IHRyZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBsZXQgcGRpbSA9IHBkaW1fcmVmLmN1cnJlbnRcblxuICAgICAgbGV0IHYgPSB2cmVmLmN1cnJlbnRcbiAgICAgIGxldCB2eCA9IHYuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICBsZXQgaCA9IGhyZWYuY3VycmVudFxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgIC8vIHVwZGF0ZSBwYW5lbCBkYXRhXG4gICAgICBsZXQgcGFuZWxfa2V5cyA9IFsyMSwgMjAsIDIxLCAyMF1cbiAgICAgIGxldCByZWNvcmQgPSBkYXRhLmRhdGFbZnJhbWVdXG4gICAgICBsZXQgYW5vbWFseSA9IHJlY29yZFsxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcblxuICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICAgIHRydXRoWzBdKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgICB0cnV0aFsxXSsrXG4gICAgICB9XG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzBdXG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzFdXG5cbiAgICAgIGxldCBwYyA9IHBkaW1bMF1bMl0gLyBzaXplXG4gICAgICBsZXQgcHIgPSBwZGltWzBdWzNdIC8gc2l6ZVxuXG4gICAgICBoeC5jbGVhclJlY3QoMCwgMCwgaC53aWR0aCAvIGRwciwgaC5oZWlnaHQgLyBkcHIpXG5cbiAgICAgIGxldCBjb24gPSBjb25fcmVmLmN1cnJlbnRcbiAgICAgIGxldCByZWNvcmRzID0gZGF0YS5kYXRhXG4gICAgICAgIC5zbGljZShNYXRoLm1heCgwLCBmcmFtZSAtIHRlcm1oZWlnaHQpLCBmcmFtZSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWMgPSByZWNvcmRzW2ldXG4gICAgICAgIGxldCByb3cgPSBjb24uY2hpbGROb2Rlc1tpXVxuICAgICAgICBsZXQgYW5vbWFseSA9IHJlY1sxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgcm93LmNoaWxkTm9kZXNbMF1cbiAgICAgICAgbGV0IGluZGljYXRvciA9IChyb3cuY2hpbGROb2Rlc1swXS5zdHlsZS5iYWNrZ3JvdW5kID0gYW5vbWFseVxuICAgICAgICAgID8gcmVkXG4gICAgICAgICAgOiBzY2hlbWUuYmcpXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgbGV0IGNlbGwgPSByb3cuY2hpbGROb2Rlc1tqICsgMV0uY2hpbGROb2Rlc1swXVxuICAgICAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IGZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNlbGwuaW5uZXJIVE1MICE9PSByZWNbal0pIHtcbiAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSByZWNbal1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW2ldXG4gICAgICAgIGxldCBkZXRlY3RlZCA9IHJlY29yZFtwYW5lbF9rZXlzW2ldXVxuXG4gICAgICAgIGxldCBwMXgsIHAxeVxuICAgICAgICAvLyBUUCBGUCBUTiBGTlxuICAgICAgICBpZiAoZGV0ZWN0ZWQgPiAwLjEpIHtcbiAgICAgICAgICBsZXQgbiA9IHBhbmVsc1tpXVswXSArIHBhbmVsc1tpXVsxXVxuICAgICAgICAgIHAxeSA9IChwciAtIChuICUgcHIpIC0gMSkgKiBzaXplXG4gICAgICAgICAgcDF4ID0gTWF0aC5mbG9vcihuIC8gcHIpICogc2l6ZVxuICAgICAgICAgIGlmIChhbm9tYWx5KSB7XG4gICAgICAgICAgICAvLyB0cnVlIHBvc1xuICAgICAgICAgICAgcGFuZWxzW2ldWzBdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZmFsc2UgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMV0rK1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbiA9IHBhbmVsc1tpXVsyXSArIHBhbmVsc1tpXVszXVxuICAgICAgICAgIHAxeSA9IChwciAtIChuICUgcHIpIC0gMSkgKiBzaXplXG4gICAgICAgICAgcDF4ID0gKHBjIC0gTWF0aC5mbG9vcihuIC8gcHIpIC0gMSkgKiBzaXplIC0gMVxuICAgICAgICAgIGlmIChhbm9tYWx5KSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVszXSsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRydWUgbmVnXG4gICAgICAgICAgICBwYW5lbHNbaV1bMl0rK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaW0gPSBwZGltW2ldXG4gICAgICAgIHZ4LmZpbGxSZWN0KGRpbVswXSArIHAxeCwgZGltWzFdICsgcDF5LCBzaXplICsgMSwgc2l6ZSArIDEpXG5cbiAgICAgICAgLy8gaHguZmlsbFN0eWxlID0gJyM0MzMxNDInXG4gICAgICAgIGh4LmZpbGxTdHlsZSA9IGJnc1tpXVxuICAgICAgICBoeC5maWxsUmVjdChcbiAgICAgICAgICBkaW1bMF0gKyBwMXggLSAyLFxuICAgICAgICAgIGRpbVsxXSArIHAxeSAtIDIsXG4gICAgICAgICAgc2l6ZSArIDEgKyA0LFxuICAgICAgICAgIHNpemUgKyAxICsgNFxuICAgICAgICApXG4gICAgICAgIGh4LmZpbGxTdHlsZSA9IHZ4LmZpbGxTdHlsZVxuICAgICAgICBoeC5maWxsUmVjdChkaW1bMF0gKyBwMXgsIGRpbVsxXSArIHAxeSwgc2l6ZSArIDEsIHNpemUgKyAxKVxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgJHJlYWQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gcGFuZWxbal1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWNjdXJhY3kgPSAoVFArVE4pLyhUUCtUTitGUCtGTilcbiAgICAgICAgbGV0IGFjY3VyYWN5ID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAoKHBhbmVsWzBdICsgcGFuZWxbMl0pIC9cbiAgICAgICAgICAgIChwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXSkpICpcbiAgICAgICAgICAgIDEwMFxuICAgICAgICApXG4gICAgICAgIC8vIHByZWNpc2lvbiB0cCAvICh0cCArIGZwKVxuICAgICAgICBsZXQgcHJlY2lzaW9uID0gTWF0aC5yb3VuZCgocGFuZWxbMF0gLyAocGFuZWxbMF0gKyBwYW5lbFsxXSkpICogMTAwKVxuXG4gICAgICAgIC8vIHJlY2FsbCB0cCAvICh0cCArIGZuKVxuICAgICAgICBsZXQgcmVjYWxsID0gTWF0aC5yb3VuZCgocGFuZWxbMF0gLyAocGFuZWxbMF0gKyBwYW5lbFszXSkpICogMTAwKVxuXG4gICAgICAgIC8vIDQgNSA2XG4gICAgICAgIHBhbmVsc1tpXVs0XSA9IGFjY3VyYWN5XG4gICAgICAgIHBhbmVsc1tpXVs1XSA9IHByZWNpc2lvblxuICAgICAgICBwYW5lbHNbaV1bNl0gPSByZWNhbGxcbiAgICAgIH1cblxuICAgICAgbGV0IHZoZWlnaHQgPSB2LmhlaWdodCAvIGRwclxuICAgICAgbGV0IFt0dywgdGhdID0gdGRpbV9yZWYuY3VycmVudFxuICAgICAgdnguY2xlYXJSZWN0KDAsIHZoZWlnaHQgLSBybGggKiAyIC0gMSwgdHcsIHJsaCArIDIpXG4gICAgICBsZXQgc3BsaXQgPSB0cnV0aFsxXSAvICh0cnV0aFswXSArIHRydXRoWzFdKVxuICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICB2eC5maWxsUmVjdCgwLCB2aGVpZ2h0IC0gcmxoICogMS41LCB0dyAtIHR3ICogc3BsaXQsIHJsaClcbiAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgdnguZmlsbFJlY3QodHcgLSB0dyAqIHNwbGl0IC0gMSwgdmhlaWdodCAtIHJsaCAqIDEuNSwgdHcgKiBzcGxpdCwgcmxoKVxuXG4gICAgICAvLyBzZXQgcmFua2luZ3NcbiAgICAgIHtcbiAgICAgICAgbGV0ICRycyA9IHJhbmtyZWYuY3VycmVudC5jaGlsZE5vZGVzXG4gICAgICAgIGxldCBzID0gc3JlZi5jdXJyZW50XG4gICAgICAgIGxldCBzeCA9IHMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBzeC5jbGVhclJlY3QoMCwgMCwgcy53aWR0aCAvIGRwciwgcy5oZWlnaHQgLyBkcHIpXG5cbiAgICAgICAgbGV0IHJhbmtfcm93cyA9IG5hbWVzLm1hcCgobiwgaSkgPT4ge1xuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tpXVxuICAgICAgICAgIHJldHVybiBbaSwgbiwgcGFuZWxbNF0sIHBhbmVsWzVdLCBwYW5lbFs2XV1cbiAgICAgICAgfSlcbiAgICAgICAgcmFua19yb3dzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBiWzJdIC0gYVsyXVxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmtfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByb3cgPSByYW5rX3Jvd3NbaV1cbiAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbcm93WzBdXVxuICAgICAgICAgIGxldCBbVFAsIEZQLCBUTiwgRk5dID0gcGFuZWxcbiAgICAgICAgICBsZXQgJHIgPSAkcnNbaV1cbiAgICAgICAgICBsZXQgdG90YWwgPSBwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXVxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5zdHlsZS5iYWNrZ3JvdW5kID0gYmdzW3Jvd1swXV1cbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzFdXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9IHJvd1syXSArICclICdcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCgke1RQfSske1ROfSkvJHt0b3RhbH1gXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9IHJvd1szXSArICclICdcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCR7VFB9Lygke1RQfSske0ZQfSlgXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9IHJvd1s0XSArICclICdcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCR7VFB9Lygke1RQfSske0ZOfSlgXG5cbiAgICAgICAgICBsZXQgeSA9IGkgKiBybGhcbiAgICAgICAgICBsZXQgdyA9IHMud2lkdGggLyBkcHJcbiAgICAgICAgICBsZXQgaCA9IHJsaCArIDFcbiAgICAgICAgICAvLyBzeC5maWxsU3R5bGUgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgIC8vIHN4LmZpbGxSZWN0KDAsIHksIHcsIGgpXG5cbiAgICAgICAgICBzeC5maWxsU3R5bGUgPSBzY2hlbWUuZmdcbiAgICAgICAgICBsZXQgeHN0ZXAgPSBzLndpZHRoIC8gZHByIC8gNFxuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IChjICsgMSkgKiB4c3RlcFxuICAgICAgICAgICAgbGV0IHcgPSAocm93W2MgKyAyXSAvIDEwMCkgKiB4c3RlcCAtIGN3XG4gICAgICAgICAgICBzeC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaXguY2xlYXJSZWN0KDAsIDAsIGN3LCBybGgpXG4gICAgICAgIGxldCBzdGVwID0gKHJsaCAqIDEuNSkgLyA0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua19yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICAgICAgbGV0IHkgPSBpICogc3RlcFxuICAgICAgICAgIGxldCB3ID0gKHBhbmVsWzRdIC8gMTAwKSAqIGN3XG4gICAgICAgICAgaXguZmlsbFN0eWxlID0gYmdzW3Jvd1swXV1cbiAgICAgICAgICBpeC5maWxsUmVjdCgwLCB5LCB3LCBzdGVwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YSwgZnJhbWVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBzZXREcHIoZHByKVxuXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHNwYWNlID0gcC5vZmZzZXRXaWR0aFxuICAgIGxldCBwbGVmdCA9IHAub2Zmc2V0TGVmdFxuICAgIHNldFBzcGFjZShwc3BhY2UpXG4gICAgc2V0UGxlZnQocGxlZnQpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdzYW1wbGVkLmpzb24nKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKF9kYXRhID0+IHtcbiAgICAgICAgc2V0RGF0YShfZGF0YSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxY2gnLCBwYWRkaW5nUmlnaHQ6ICcxY2gnIH19PlxuICAgICAgICA8ZGl2IHJlZj17cHJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjYmJiJyxcbiAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXt0b3BiYXJfcmVmfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHJlZj17aWNvbl9yZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxY2gnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJMSVBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7fX0+SW5mbzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2RhdGEgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5DT05ORUNUSU9OUzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjNzc3JyB9fT57ZnJhbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogNiAqIDE5ICsgMSArICdjaCcgfX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleV9kZXMubWFwKChrLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2tbMF0gKyAnOiAnICsga1syXX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7a1sxXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGggKiB0ZXJtaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0MzMxNDInLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHJlZj17Y29uX3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoNCldLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJsaCAvIDIgLSAoc2l6ZSArIDEpIC8gMiAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjdyAvIDIgLSAoc2l6ZSArIDEpIC8gMiArIGN3LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDE5KV0ubWFwKChvLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTVFJBVEVHSUVTXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyYW5rbGFiZWxfcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlJhbmtpbmc8L2Rpdj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFsnQWNjdXJhY3knLCAnKFRQK1ROKS9BTEwnXSxcbiAgICAgICAgICAgICAgWydQcmVjaXNpb24nLCAnVFAvKFRQK0ZQKSddLFxuICAgICAgICAgICAgICBbJ1JlY2FsbCcsICdUUC8oVFArRk4pJ10sXG4gICAgICAgICAgICBdLm1hcChuID0+IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHtuWzBdfXsnICd9XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCwgZm9udFN0eWxlOiAnbm9ybWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtuWzFdfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzFjaCcsIHRvcDogMCB9fVxuICAgICAgICAgICAgICByZWY9e3NyZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiByZWY9e3JhbmtyZWZ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKG4sIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZJU1VBTElaRURcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17dnJlZn0gc3R5bGU9e3t9fSAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2hyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMWNoJywgdG9wOiAwIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwIH19XG4gICAgICAgICAgICAgIHJlZj17dGl0bGVfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmdzW2ldLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtyZWFkb3V0X3JlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKCgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIFsnVHJ1ZSBQb3MnLCByZWRdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIFBvcycsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIE5lZycsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBOZWcnLCByZWRdLFxuICAgICAgICAgICAgICAgICAgXS5tYXAoKG8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbkxlZnQ6IGkgPT09IDIgPyAnMWNoJyA6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29bMF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0cnV0aHRpdGxlX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PkRBVEEgQkFMQU5DRTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17dHJlYWRvdXRfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5Bbm9tYWxpZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFN0eWxlOiAnaXRhbGljJywgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgTm9ybWFsXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCArIHJsaCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmxpcCBpcyBhbiBhbm9tYWx5IGRldGVjdGlvbiBwcm90b3R5cGUgYnl7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DbG91ZGVyYSBGYXN0IEZvcndhcmQ8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNiYmInLFxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5TcGVlZDo8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoc3BlZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7JzwnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge3NwZWVkcy5tYXAoKG4sIGkpID0+XG4gICAgICAgICAgICAgICAgaSA9PSBzcGVlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWVkKGkpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPCBzcGVlZHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCArIDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnPid9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhdXNlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYXVzZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhdXNlID8gJ1BsYXknIDogJ1BhdXNlJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3JsaH1weDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.82c48fb80ca2c1bf2f77.hot-update.js.map