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
var speeds = [640, 320, 160, 80, 40, 20];
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
        vx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1);
        hx.fillStyle = 'rgba(0, 0, 0, 0)';
        hx.fillRect(0, 0, h.width, h.height);
        hx.fillStyle = 'pink';
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
          $r.childNodes[1].childNodes[0].innerHTML = row[2] + '% ';
          $r.childNodes[1].childNodes[1].innerHTML = "(".concat(TP, "+").concat(TN, ")/").concat(total);
          $r.childNodes[2].childNodes[0].innerHTML = row[3] + '% ';
          $r.childNodes[2].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FP, ")");
          $r.childNodes[3].childNodes[0].innerHTML = row[4] + '% ';
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
      lineNumber: 506
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
      lineNumber: 507
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
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
      lineNumber: 510
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
      lineNumber: 519
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
      lineNumber: 526
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
      lineNumber: 536
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
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
      lineNumber: 549
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
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
      lineNumber: 562
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
      lineNumber: 563
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
      lineNumber: 564
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
        lineNumber: 572
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
        lineNumber: 580
      },
      __self: this
    }, k[1]));
  })), __jsx("div", {
    style: (_ref = {
      paddingRight: '1ch',
      height: rlh * termheight,
      background: scheme.bg
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "background", '#433142'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "color", scheme.fg), _ref),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }, data.data.slice(Math.max(frame - termheight, 0), frame).reverse().map(function (d, i) {
    return __jsx("div", {
      key: frame + (termheight - i) - termheight,
      style: {
        position: 'relative',
        display: 'flex',
        paddingLeft: '1ch' // background:
        //   i !== 0 ? (d[19] ? red : scheme.bg) : scheme.bg,

      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607
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
        lineNumber: 617
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
          lineNumber: 628
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
          lineNumber: 636
        },
        __self: this
      }, j === 0 ? frame + (termheight - i) - termheight : d));
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
      lineNumber: 654
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
      lineNumber: 663
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
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
        lineNumber: 677
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
        lineNumber: 679
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
      lineNumber: 685
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
      lineNumber: 690
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
      lineNumber: 694
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
        lineNumber: 696
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
          lineNumber: 698
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
          lineNumber: 699
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: scheme.light
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
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
      lineNumber: 714
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
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
      lineNumber: 726
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
      lineNumber: 730
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
        lineNumber: 735
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
      lineNumber: 746
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
        lineNumber: 755
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
          lineNumber: 762
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
          lineNumber: 765
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
          lineNumber: 773
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
      lineNumber: 787
    },
    __self: this
  }, __jsx("div", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
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
      lineNumber: 795
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontStyle: 'italic'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
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
      lineNumber: 804
    },
    __self: this
  })), __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
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
      lineNumber: 813
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
      lineNumber: 816
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
      lineNumber: 826
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836
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
      lineNumber: 838
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
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
      lineNumber: 856
    },
    __self: this
  }, '<'), '123456'.split('').map(function (n, i) {
    return i == speed ? __jsx("div", {
      style: {
        paddingLeft: '0.25ch',
        paddingRight: '0.25ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 872
      },
      __self: this
    }, n) : __jsx("button", {
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
        lineNumber: 881
      },
      __self: this
    }, n);
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
      lineNumber: 895
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
      lineNumber: 909
    },
    __self: this
  }, pause ? 'Play' : 'Pause'))) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924
    },
    __self: this
  }, "loading..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNjVCeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCwgMzIwLCAxNjAsIDgwLCA0MCwgMjBdXG5cbmxldCBuYW1lcyA9IFtcbiAgJ0F1dG9lbmNvZGVyJyxcbiAgJ1Zhci4gQXV0b2VuY29kZXInLFxuICAnQXV0b2VuY29kZXInLFxuICAnVmFyLiBBdXRvZW5jb2RlcicsXG5dXG5cbmxldCBzaXplID0gNFxuXG5sZXQgdGVybWhlaWdodCA9IDRcblxubGV0IHNvcnRfb3B0aW9ucyA9IFsnYWNjdXJhY3knLCAncHJlY2lzaW9uJywgJ3JlY2FsbCddXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBsZXQgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IGhhbmRsZXJfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB2cmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBocmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByYW5rcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBbZnJhbWUsIHNldEZyYW1lXSA9IHVzZVN0YXRlKDApXG4gIGxldCBbcHNwYWNlLCBzZXRQc3BhY2VdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IFtwbGVmdCwgc2V0UGxlZnRdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IHBhbmVsc19yZWYgPSB1c2VSZWYoWy4uLkFycmF5KDQpXS5tYXAobiA9PiBbLi4uQXJyYXkoNCldLm1hcChuID0+IDApKSlcbiAgbGV0IHBkaW1fcmVmID0gdXNlUmVmKFtdKVxuICBsZXQgdGRpbV9yZWYgPSB1c2VSZWYoW10pXG4gIGxldCB0aXRsZV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJlYWRvdXRfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0cnV0aF9yZWYgPSB1c2VSZWYoWzAsIDBdKVxuICBsZXQgdHJlYWRvdXRfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0cnV0aHRpdGxlX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua2xhYmVsX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdG9wYmFyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2Rwciwgc2V0RHByXSA9IHVzZVN0YXRlKDEpXG4gIGxldCBpY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW3NwZWVkLCBzZXRTcGVlZF0gPSB1c2VTdGF0ZSgzKVxuICBsZXQgW2luaXRTcGVlZCwgc2V0SW5pdFNwZWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbGF5b3V0XG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuXG4gICAgICBsZXQgdndpZHRoID0gcHNwYWNlIC0gOFxuICAgICAgdi53aWR0aCA9IHZ3aWR0aCAqIGRwclxuICAgICAgdi5zdHlsZS5tYXJnaW5MZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuICAgICAgbGV0IHRkaW0gPSB0ZGltX3JlZi5jdXJyZW50XG5cbiAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih2LndpZHRoIC8gc2l6ZSlcbiAgICAgIGxldCBwYW5lbF9jb2x1bW5zID0gTWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5mbG9vcigodi53aWR0aCAvIGRwciAtIHNpemUgKiA0KSAvIHNpemUpIC8gMlxuICAgICAgKVxuICAgICAgbGV0IHBhbmVsX3Jvd3MgPSBNYXRoLmNlaWwoMTAwMDAgLyAocGFuZWxfY29sdW1ucyAtIDEpKVxuXG4gICAgICBsZXQgcHcgPSBwYW5lbF9jb2x1bW5zICogc2l6ZVxuICAgICAgbGV0IHBoID0gcGFuZWxfcm93cyAqIHNpemVcblxuICAgICAgbGV0IHBjID0gMlxuICAgICAgbGV0IHByID0gMlxuXG4gICAgICBsZXQgdG9wID0gcmxoXG4gICAgICBsZXQgYm90dG9tID0gcmxoICogMlxuICAgICAgbGV0IGJvdHRvbV9zcGFjZSA9IHJsaCAvIDJcblxuICAgICAgbGV0IHRjID0gcGFuZWxfY29sdW1ucyAqIDIgKyA0XG4gICAgICBsZXQgdHIgPSBNYXRoLmNlaWwoMTAwMDAgLyAoY29sdW1ucyAtIDEpKVxuICAgICAgbGV0IHR3ID0gdGMgKiBzaXplXG4gICAgICBsZXQgdGggPSB0ciAqIHNpemVcbiAgICAgIHRkaW1fcmVmLmN1cnJlbnQgPSBbdHcsIHRoXVxuXG4gICAgICBsZXQgdmhlaWdodCA9XG4gICAgICAgICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKiAyICsgdG9wICsgYm90dG9tICsgYm90dG9tX3NwYWNlXG4gICAgICB2LmhlaWdodCA9IHZoZWlnaHQgKiBkcHJcblxuICAgICAgdi5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIHYuc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgdnguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCBoID0gaHJlZi5jdXJyZW50XG4gICAgICBoLndpZHRoID0gdi53aWR0aFxuICAgICAgaC5oZWlnaHQgPSB2LmhlaWdodFxuICAgICAgaC5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIGguc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBoeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgbGV0ICRyYW5rID0gcmFua3JlZi5jdXJyZW50XG4gICAgICAkcmFuay5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuICAgICAgJHJhbmsuc3R5bGUubGVmdCA9IHBsZWZ0ICsgJ3B4J1xuICAgICAgbGV0IHMgPSBzcmVmLmN1cnJlbnRcbiAgICAgIGxldCBzd2lkdGggPSB0d1xuICAgICAgbGV0IHNoZWlnaHQgPSBybGggKiA0XG4gICAgICBzLndpZHRoID0gc3dpZHRoICogZHByXG4gICAgICBzLmhlaWdodCA9IHNoZWlnaHQgKiBkcHJcbiAgICAgIHMuc3R5bGUud2lkdGggPSBzd2lkdGggKyAncHgnXG4gICAgICBzLnN0eWxlLmhlaWdodCA9IHNoZWlnaHQgKyAncHgnXG4gICAgICBsZXQgc3ggPSBzLmdldENvbnRleHQoJzJkJylcbiAgICAgIHN4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgcmFua2xhYmVsID0gcmFua2xhYmVsX3JlZi5jdXJyZW50XG4gICAgICByYW5rbGFiZWwuc3R5bGUud2lkdGggPSB0dyArICdweCdcblxuICAgICAgdnguZmlsbFN0eWxlID0gJyNlZWUnXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0IGkgPSByICogcGMgKyBjXG4gICAgICAgICAgbGV0IHggPSBjICogKHB3ICsgc2l6ZSAqIDQpXG4gICAgICAgICAgbGV0IHkgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArIHRvcFxuICAgICAgICAgIGxldCB3ID0gcHdcbiAgICAgICAgICBsZXQgaCA9IHBoXG4gICAgICAgICAgcGRpbVtpXSA9IFt4LCB5LCB3LCBoXVxuICAgICAgICAgIHZ4LmZpbGxSZWN0KHgsIHksIHcsIGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICR0aXRsZXMgPSB0aXRsZV9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkdCA9ICR0aXRsZXMuY2hpbGROb2Rlc1tyICogcGMgKyBjXVxuICAgICAgICAgICR0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICR0LnN0eWxlLnRvcCA9IHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLndpZHRoID0gcHcgKyAncHgnXG4gICAgICAgICAgJHQuc3R5bGUubGVmdCA9IGMgKiAocHcgKyBzaXplICogNCkgKyBjdyArICdweCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdHQgPSB0cnV0aHRpdGxlX3JlZi5jdXJyZW50XG4gICAgICB0dC5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuICAgICAgdHQuc3R5bGUubGVmdCA9IGN3ICsgJ3B4J1xuICAgICAgdHQuc3R5bGUudG9wID0gMiAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyAncHgnXG5cbiAgICAgIGxldCAkcmVhZCA9IHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgJHIgPSAkcmVhZC5jaGlsZE5vZGVzW3IgKiBwYyArIGNdXG4gICAgICAgICAgJHIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgJHIuc3R5bGUudG9wID1cbiAgICAgICAgICAgIHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgdG9wICsgcGggKyAncHgnXG4gICAgICAgICAgJHIuc3R5bGUud2lkdGggPSBwdyArICdweCdcbiAgICAgICAgICAkci5zdHlsZS5sZWZ0ID0gYyAqIChwdyArIHNpemUgKiA0KSArIGN3ICsgJ3B4J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0cmUgPSB0cmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgdHJlLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG4gICAgICB0cmUuc3R5bGUubGVmdCA9IGN3ICsgJ3B4J1xuICAgICAgdHJlLnN0eWxlLnRvcCA9IDIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgcmxoICsgJ3B4J1xuXG4gICAgICBsZXQgdGIgPSB0b3BiYXJfcmVmLmN1cnJlbnRcbiAgICAgIHRiLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG5cbiAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgaWNvbi53aWR0aCA9IGN3ICogZHByXG4gICAgICBpY29uLmhlaWdodCA9IHJsaCAqIDEuNSAqIGRwclxuICAgICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoXG4gICAgICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICBmdW5jdGlvbigvKiBmdW5jdGlvbiAqLyBjYWxsYmFjaywgLyogRE9NRWxlbWVudCAqLyBlbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSkoKVxuXG4gICAgICAvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNnaXN0Y29tbWVudC0xOTUzOTI1XG4gICAgICAvKipcbiAgICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgc2V0SW50ZXJ2YWwgZXhjZXB0IHVzZXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgICAgICovXG4gICAgICB3aW5kb3cuckludGVydmFsID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICF3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICApICYmIC8vIEZpcmVmb3ggNSBzaGlwcyB3aXRob3V0IGNhbmNlbCBzdXBwb3J0XG4gICAgICAgICAgIXdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChmbiwgZGVsYXkpXG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGVsdGEgPSBjdXJyZW50IC0gc3RhcnRcblxuICAgICAgICAgIGlmIChkZWx0YSA+PSBkZWxheSkge1xuICAgICAgICAgICAgZm4uY2FsbCgpXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBjbGVhckludGVydmFsIGV4Y2VwdCB1c2VzIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHdoZXJlIHBvc3NpYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAqIEBwYXJhbSB7aW50fG9iamVjdH0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbCA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgICAgICAgICBoYW5kbGUudmFsdWVcbiAgICAgICAgICAgICkgLyogU3VwcG9ydCBmb3IgbGVnYWN5IEFQSSAqL1xuICAgICAgICAgIDogd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogY2xlYXJJbnRlcnZhbChoYW5kbGUpXG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSB3aW5kb3cuckludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICB9KVxuICAgICAgfSwgc3BlZWRzW3NwZWVkXSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICAgIHNldEluaXRTcGVlZCh0cnVlKVxuICB9LCBbZGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdFNwZWVkICE9IGZhbHNlKSB7XG4gICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSBySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgIH0pXG4gICAgICB9LCBzcGVlZHNbc3BlZWRdKVxuICAgIH1cbiAgfSwgW3NwZWVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0U3BlZWQgIT0gZmFsc2UpIHtcbiAgICAgIGlmIChwYXVzZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVyX3JlZi5jdXJyZW50ID0gckludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBzcGVlZHNbc3BlZWRdKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3BhdXNlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBsZXQgcGFuZWxzID0gcGFuZWxzX3JlZi5jdXJyZW50XG4gICAgICBsZXQgJHJlYWQgPSByZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBsZXQgdHJ1dGggPSB0cnV0aF9yZWYuY3VycmVudFxuICAgICAgbGV0ICR0cnV0aCA9IHRyZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBsZXQgcGRpbSA9IHBkaW1fcmVmLmN1cnJlbnRcblxuICAgICAgbGV0IHYgPSB2cmVmLmN1cnJlbnRcbiAgICAgIGxldCB2eCA9IHYuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICBsZXQgaCA9IGhyZWYuY3VycmVudFxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgIC8vIHVwZGF0ZSBwYW5lbCBkYXRhXG4gICAgICBsZXQgcGFuZWxfa2V5cyA9IFsyMSwgMjAsIDIxLCAyMF1cbiAgICAgIGxldCByZWNvcmQgPSBkYXRhLmRhdGFbZnJhbWVdXG4gICAgICBsZXQgYW5vbWFseSA9IHJlY29yZFsxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcblxuICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICAgIHRydXRoWzBdKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgICB0cnV0aFsxXSsrXG4gICAgICB9XG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzBdXG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzFdXG5cbiAgICAgIGxldCBwYyA9IHBkaW1bMF1bMl0gLyBzaXplXG4gICAgICBsZXQgcHIgPSBwZGltWzBdWzNdIC8gc2l6ZVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgICAgbGV0IGRldGVjdGVkID0gcmVjb3JkW3BhbmVsX2tleXNbaV1dXG5cbiAgICAgICAgbGV0IHAxeCwgcDF5XG4gICAgICAgIC8vIFRQIEZQIFROIEZOXG4gICAgICAgIGlmIChkZXRlY3RlZCA+IDAuMSkge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzBdICsgcGFuZWxzW2ldWzFdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSBNYXRoLmZsb29yKG4gLyBwcikgKiBzaXplXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIHRydWUgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMF0rK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBwb3NcbiAgICAgICAgICAgIHBhbmVsc1tpXVsxXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzJdICsgcGFuZWxzW2ldWzNdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSAocGMgLSBNYXRoLmZsb29yKG4gLyBwcikgLSAxKSAqIHNpemUgLSAxXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIGZhbHNlIG5lZ1xuICAgICAgICAgICAgcGFuZWxzW2ldWzNdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJ1ZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVsyXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpbSA9IHBkaW1baV1cbiAgICAgICAgdnguZmlsbFJlY3QoZGltWzBdICsgcDF4LCBkaW1bMV0gKyBwMXksIHNpemUgKyAxLCBzaXplICsgMSlcblxuICAgICAgICBoeC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwKSdcbiAgICAgICAgaHguZmlsbFJlY3QoMCwgMCwgaC53aWR0aCwgaC5oZWlnaHQpXG5cbiAgICAgICAgaHguZmlsbFN0eWxlID0gJ3BpbmsnXG4gICAgICAgIGh4LmZpbGxSZWN0KFxuICAgICAgICAgIGRpbVswXSArIHAxeCAtIDIsXG4gICAgICAgICAgZGltWzFdICsgcDF5IC0gMixcbiAgICAgICAgICBzaXplICsgMSArIDQsXG4gICAgICAgICAgc2l6ZSArIDEgKyA0XG4gICAgICAgIClcbiAgICAgICAgaHguZmlsbFN0eWxlID0gdnguZmlsbFN0eWxlXG4gICAgICAgIGh4LmZpbGxSZWN0KGRpbVswXSArIHAxeCwgZGltWzFdICsgcDF5LCBzaXplICsgMSwgc2l6ZSArIDEpXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAkcmVhZC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbal0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBwYW5lbFtqXVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hY2N1cmFjeSA9IChUUCtUTikvKFRQK1ROK0ZQK0ZOKVxuICAgICAgICBsZXQgYWNjdXJhY3kgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICgocGFuZWxbMF0gKyBwYW5lbFsyXSkgL1xuICAgICAgICAgICAgKHBhbmVsWzBdICsgcGFuZWxbMV0gKyBwYW5lbFsyXSArIHBhbmVsWzNdKSkgKlxuICAgICAgICAgICAgMTAwXG4gICAgICAgIClcbiAgICAgICAgLy8gcHJlY2lzaW9uIHRwIC8gKHRwICsgZnApXG4gICAgICAgIGxldCBwcmVjaXNpb24gPSBNYXRoLnJvdW5kKChwYW5lbFswXSAvIChwYW5lbFswXSArIHBhbmVsWzFdKSkgKiAxMDApXG5cbiAgICAgICAgLy8gcmVjYWxsIHRwIC8gKHRwICsgZm4pXG4gICAgICAgIGxldCByZWNhbGwgPSBNYXRoLnJvdW5kKChwYW5lbFswXSAvIChwYW5lbFswXSArIHBhbmVsWzNdKSkgKiAxMDApXG5cbiAgICAgICAgLy8gNCA1IDZcbiAgICAgICAgcGFuZWxzW2ldWzRdID0gYWNjdXJhY3lcbiAgICAgICAgcGFuZWxzW2ldWzVdID0gcHJlY2lzaW9uXG4gICAgICAgIHBhbmVsc1tpXVs2XSA9IHJlY2FsbFxuICAgICAgfVxuXG4gICAgICBsZXQgdmhlaWdodCA9IHYuaGVpZ2h0IC8gZHByXG4gICAgICBsZXQgW3R3LCB0aF0gPSB0ZGltX3JlZi5jdXJyZW50XG4gICAgICB2eC5jbGVhclJlY3QoMCwgdmhlaWdodCAtIHJsaCAqIDIgLSAxLCB0dywgcmxoICsgMilcbiAgICAgIGxldCBzcGxpdCA9IHRydXRoWzFdIC8gKHRydXRoWzBdICsgdHJ1dGhbMV0pXG4gICAgICB2eC5maWxsU3R5bGUgPSByZWRcbiAgICAgIHZ4LmZpbGxSZWN0KDAsIHZoZWlnaHQgLSBybGggKiAxLjUsIHR3IC0gdHcgKiBzcGxpdCwgcmxoKVxuICAgICAgdnguZmlsbFN0eWxlID0gc2NoZW1lLmJnXG4gICAgICB2eC5maWxsUmVjdCh0dyAtIHR3ICogc3BsaXQgLSAxLCB2aGVpZ2h0IC0gcmxoICogMS41LCB0dyAqIHNwbGl0LCBybGgpXG5cbiAgICAgIC8vIHNldCByYW5raW5nc1xuICAgICAge1xuICAgICAgICBsZXQgJHJzID0gcmFua3JlZi5jdXJyZW50LmNoaWxkTm9kZXNcbiAgICAgICAgbGV0IHMgPSBzcmVmLmN1cnJlbnRcbiAgICAgICAgbGV0IHN4ID0gcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHN4LmNsZWFyUmVjdCgwLCAwLCBzLndpZHRoIC8gZHByLCBzLmhlaWdodCAvIGRwcilcblxuICAgICAgICBsZXQgcmFua19yb3dzID0gbmFtZXMubWFwKChuLCBpKSA9PiB7XG4gICAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW2ldXG4gICAgICAgICAgcmV0dXJuIFtpLCBuLCBwYW5lbFs0XSwgcGFuZWxbNV0sIHBhbmVsWzZdXVxuICAgICAgICB9KVxuICAgICAgICByYW5rX3Jvd3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGJbMl0gLSBhWzJdXG4gICAgICAgIH0pXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua19yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICAgICAgbGV0IFtUUCwgRlAsIFROLCBGTl0gPSBwYW5lbFxuICAgICAgICAgIGxldCAkciA9ICRyc1tpXVxuICAgICAgICAgIGxldCB0b3RhbCA9IHBhbmVsWzBdICsgcGFuZWxbMV0gKyBwYW5lbFsyXSArIHBhbmVsWzNdXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmJhY2tncm91bmQgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSByb3dbMV1cbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzJdICsgJyUgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgKCR7VFB9KyR7VE59KS8ke3RvdGFsfWBcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzNdICsgJyUgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7RlB9KWBcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzRdICsgJyUgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7Rk59KWBcblxuICAgICAgICAgIGxldCB5ID0gaSAqIHJsaFxuICAgICAgICAgIGxldCB3ID0gcy53aWR0aCAvIGRwclxuICAgICAgICAgIGxldCBoID0gcmxoICsgMVxuICAgICAgICAgIC8vIHN4LmZpbGxTdHlsZSA9IGJnc1tyb3dbMF1dXG4gICAgICAgICAgLy8gc3guZmlsbFJlY3QoMCwgeSwgdywgaClcblxuICAgICAgICAgIHN4LmZpbGxTdHlsZSA9IHNjaGVtZS5mZ1xuICAgICAgICAgIGxldCB4c3RlcCA9IHMud2lkdGggLyBkcHIgLyA0XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gKGMgKyAxKSAqIHhzdGVwXG4gICAgICAgICAgICBsZXQgdyA9IChyb3dbYyArIDJdIC8gMTAwKSAqIHhzdGVwIC0gY3dcbiAgICAgICAgICAgIHN4LmZpbGxSZWN0KHgsIHksIHcsIGgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGljb24gPSBpY29uX3JlZi5jdXJyZW50XG4gICAgICAgIGxldCBpeCA9IGljb24uZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpeC5jbGVhclJlY3QoMCwgMCwgY3csIHJsaClcbiAgICAgICAgbGV0IHN0ZXAgPSAocmxoICogMS41KSAvIDRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rX3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm93ID0gcmFua19yb3dzW2ldXG4gICAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW3Jvd1swXV1cbiAgICAgICAgICBsZXQgeSA9IGkgKiBzdGVwXG4gICAgICAgICAgbGV0IHcgPSAocGFuZWxbNF0gLyAxMDApICogY3dcbiAgICAgICAgICBpeC5maWxsU3R5bGUgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgIGl4LmZpbGxSZWN0KDAsIHksIHcsIHN0ZXApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtkYXRhLCBmcmFtZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuICAgIHNldERwcihkcHIpXG5cbiAgICBsZXQgcCA9IHByZWYuY3VycmVudFxuICAgIGxldCBwc3BhY2UgPSBwLm9mZnNldFdpZHRoXG4gICAgbGV0IHBsZWZ0ID0gcC5vZmZzZXRMZWZ0XG4gICAgc2V0UHNwYWNlKHBzcGFjZSlcbiAgICBzZXRQbGVmdChwbGVmdClcblxuICAgIC8vIGdldCBkYXRhXG4gICAgZmV0Y2goJ3NhbXBsZWQuanNvbicpXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oX2RhdGEgPT4ge1xuICAgICAgICBzZXREYXRhKF9kYXRhKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzFjaCcsIHBhZGRpbmdSaWdodDogJzFjaCcgfX0+XG4gICAgICAgIDxkaXYgcmVmPXtwcmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNiYmInLFxuICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3RvcGJhcl9yZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtpY29uX3JlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICB3aWR0aDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQkxJUFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3t9fT5JbmZvPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZGF0YSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PkNPTk5FQ1RJT05TPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxY2gnIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19PntmcmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiA2ICogMTkgKyAxICsgJ2NoJyB9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7a2V5X2Rlcy5tYXAoKGssIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17a1swXSArICc6ICcgKyBrWzJdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtrWzFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCAqIHRlcm1oZWlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQzMzE0MicsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoTWF0aC5tYXgoZnJhbWUgLSB0ZXJtaGVpZ2h0LCAwKSwgZnJhbWUpXG4gICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgaSAhPT0gMCA/IChkWzE5XSA/IHJlZCA6IHNjaGVtZS5iZykgOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJsaCAvIDIgLSAoc2l6ZSArIDEpIC8gMiAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGN3IC8gMiAtIChzaXplICsgMSkgLyAyICsgY3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZFsxOV0gPyByZWQgOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2Quc2xpY2UoMCwgMTkpLm1hcCgoZCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aiA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmcmFtZSArICh0ZXJtaGVpZ2h0IC0gaSkgLSB0ZXJtaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNUUkFURUdJRVNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JhbmtsYWJlbF9yZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+UmFua2luZzwvZGl2PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgWydBY2N1cmFjeScsICcoVFArVE4pL0FMTCddLFxuICAgICAgICAgICAgICBbJ1ByZWNpc2lvbicsICdUUC8oVFArRlApJ10sXG4gICAgICAgICAgICAgIFsnUmVjYWxsJywgJ1RQLyhUUCtGTiknXSxcbiAgICAgICAgICAgIF0ubWFwKG4gPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAge25bMF19eycgJ31cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0LCBmb250U3R5bGU6ICdub3JtYWwnIH19PlxuICAgICAgICAgICAgICAgICAge25bMV19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMWNoJywgdG9wOiAwIH19XG4gICAgICAgICAgICAgIHJlZj17c3JlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cmFua3JlZn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoNCldLm1hcCgobiwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0IH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVklTVUFMSVpFRFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXt2cmVmfSBzdHlsZT17e319IC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxY2gnLCB0b3A6IDAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXt0aXRsZV9yZWZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e3JlYWRvdXRfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIFBvcycsIHJlZF0sXG4gICAgICAgICAgICAgICAgICAgIFsnRmFsc2UgUG9zJywgYmxhY2tdLFxuICAgICAgICAgICAgICAgICAgICBbJ1RydWUgTmVnJywgYmxhY2tdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIE5lZycsIHJlZF0sXG4gICAgICAgICAgICAgICAgICBdLm1hcCgobywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luTGVmdDogaSA9PT0gMiA/ICcxY2gnIDogMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b1swXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RydXRodGl0bGVfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+REFUQSBCQUxBTkNFPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0cmVhZG91dF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19PkFub21hbGllczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICBOb3JtYWxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoICsgcmxoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCbGlwIGlzIGFuIGFub21hbHkgZGV0ZWN0aW9uIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNsb3VkZXJhIEZhc3QgRm9yd2FyZDwvYT4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2JiYicsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlNwZWVkOjwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCAtIDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7JzEyMzQ1Nicuc3BsaXQoJycpLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICBpID09IHNwZWVkID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChpKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUubGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPCBzcGVlZHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCArIDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnPid9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgIHNldFBhdXNlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRQYXVzZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhdXNlID8gJ1BsYXknIDogJ1BhdXNlJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3JsaH1weDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.f8608e4432762443e450.hot-update.js.map