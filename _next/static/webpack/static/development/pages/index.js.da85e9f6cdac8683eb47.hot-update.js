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
var names = ['OSVM', 'Autoencoder', 'Var Autoencoder', 'BiGAN'];
var name_max = names.reduce(function (t, c) {
  console.log(c);
  console.log(c.length);
  return Math.max(c.length, t);
}, 0);
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      info = _useState9[0],
      setInfo = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      sort = _useState10[0],
      setSort = _useState10[1];

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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (data !== null) {
      var panels = panels_ref.current;
      var $read = readout_ref.current;
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
    onClick: function onClick() {
      setInfo(true);
    },
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
      lineNumber: 554
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
      lineNumber: 555
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
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
      lineNumber: 568
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
      lineNumber: 569
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
      lineNumber: 570
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
        lineNumber: 578
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
        lineNumber: 586
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
      lineNumber: 600
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
        lineNumber: 614
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
        lineNumber: 622
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
          lineNumber: 633
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
          lineNumber: 641
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
      lineNumber: 659
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
      lineNumber: 668
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }, "Ranking"), [['Accuracy', '(TP+TN)/ALL'], ['Precision', 'TP/(TP+FP)'], ['Recall', 'TP/(TP+FN)']].map(function (n, i) {
    return __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682
      },
      __self: this
    }, sort === i ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683
      },
      __self: this
    }, n[0]) : __jsx("button", {
      style: {
        fontStyle: 'italic'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683
      },
      __self: this
    }, n[0]), ' ', __jsx("span", {
      style: {
        color: scheme.light,
        fontStyle: 'normal'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684
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
      lineNumber: 690
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
      lineNumber: 695
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
      lineNumber: 699
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
        lineNumber: 701
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
          lineNumber: 703
        },
        __self: this
      }, j === 0 ? __jsx("span", {
        style: {
          marginRight: '1ch'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: scheme.light
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716
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
      lineNumber: 723
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
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
      lineNumber: 735
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
      lineNumber: 739
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
        lineNumber: 744
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
      lineNumber: 755
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
        lineNumber: 764
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
          lineNumber: 771
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
          lineNumber: 774
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
          lineNumber: 782
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
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
  }, '>')), pause ? __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setPause(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883
    },
    __self: this
  }, "Play") : __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setPause(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892
    },
    __self: this
  }, "Pause"), pause ? __jsx("button", {
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
      lineNumber: 902
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952
    },
    __self: this
  }, "Info"), __jsx("button", {
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontStyle: 'italic',
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971
    },
    __self: this
  }, "Blip is a prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973
    },
    __self: this
  }, "Cloudera Fast Forward"), ' ', "built to accompany our", ' ', __jsx("a", {
    href: "https://ff12.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977
    },
    __self: this
  }, "report on Deep Learning for Anomaly Detection"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982
    },
    __self: this
  }, "Blip shows how four different algorithms (", names.map(function (n, i) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985
      },
      __self: this
    }, __jsx("span", {
      style: {
        background: bgs[i],
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 986
      },
      __self: this
    }, n), i != names.length - 1 ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995
      },
      __self: this
    }, ", ") : null);
  }), ") perform at detecting network attacks in the", ' ', __jsx("a", {
    href: "http://kdd.ics.uci.edu/databases/kddcup99/task.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999
    },
    __self: this
  }, "KDD network intrusion dataset"), ". You can read about how each model was trained in the", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003
    },
    __self: this
  }, "protototype section of our report"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005
    },
    __self: this
  }, "The top CONNECTIONS section shows the", ' ', __jsx("span", {
    style: {
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch',
      background: '#433142',
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007
    },
    __self: this
  }, "network connections"), ' ', "coming in, with the features used by each model for their prediction. The color of the square shows the true status of whether the connection is an", ' ', __jsx("span", {
    style: {
      background: red,
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020
    },
    __self: this
  }, "attack"), ' ', "or", ' ', __jsx("span", {
    style: {
      background: scheme.bg,
      color: scheme.fg,
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030
    },
    __self: this
  }, "normal"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042
    },
    __self: this
  }, "The STRATEGIES section shows metrics on how each algorithm is peforming on the incoming data. You can see the accuracy, recall, and precision metrics for each strategy."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047
    },
    __self: this
  }, "The VISUALIZED section provides another view of each strategy's performance. Each connection is visualized as a square. If it is classified as an attack it is placed on the left; if classified normal, it is placed on the right. The color reveals its true status. Over time the density and position of the colors in each strategy visualization give you a feel for the different models strengths and weaknesses."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057
    },
    __self: this
  }, "The simulation will run through 10,000 connections before finishing. You can control the speed of the simulation with the controls at the bottom."), __jsx("div", {
    style: {
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063
    },
    __self: this
  }, "Start the simulation"))))) : null) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083
    },
    __self: this
  }, "loading..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNGpDeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCAqIDIsIDY0MCwgMzIwLCA4MCwgNDAsIDIwXVxuXG5sZXQgbmFtZXMgPSBbJ09TVk0nLCAnQXV0b2VuY29kZXInLCAnVmFyIEF1dG9lbmNvZGVyJywgJ0JpR0FOJ11cblxubGV0IG5hbWVfbWF4ID0gbmFtZXMucmVkdWNlKCh0LCBjKSA9PiB7XG4gIGNvbnNvbGUubG9nKGMpXG4gIGNvbnNvbGUubG9nKGMubGVuZ3RoKVxuICByZXR1cm4gTWF0aC5tYXgoYy5sZW5ndGgsIHQpXG59LCAwKVxuXG5sZXQgc2l6ZSA9IDRcblxubGV0IHRlcm1oZWlnaHQgPSA0XG5cbmxldCBzb3J0X29wdGlvbnMgPSBbJ2FjY3VyYWN5JywgJ3ByZWNpc2lvbicsICdyZWNhbGwnXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBoYW5kbGVyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgaHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2ZyYW1lLCBzZXRGcmFtZV0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW3BzcGFjZSwgc2V0UHNwYWNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbcGxlZnQsIHNldFBsZWZ0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBwYW5lbHNfcmVmID0gdXNlUmVmKFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gWy4uLkFycmF5KDQpXS5tYXAobiA9PiAwKSkpXG4gIGxldCBwZGltX3JlZiA9IHVzZVJlZihbXSlcbiAgbGV0IHRkaW1fcmVmID0gdXNlUmVmKFtdKVxuICBsZXQgdGl0bGVfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJ1dGhfcmVmID0gdXNlUmVmKFswLCAwXSlcbiAgbGV0IHRyZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua2xhYmVsX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdG9wYmFyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2Rwciwgc2V0RHByXSA9IHVzZVN0YXRlKDEpXG4gIGxldCBpY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW3NwZWVkLCBzZXRTcGVlZF0gPSB1c2VTdGF0ZSgzKVxuICBsZXQgW2luaXRTcGVlZCwgc2V0SW5pdFNwZWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHRydWUpXG4gIGxldCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIC8vIHNldCBsYXlvdXRcbiAgICAgIGxldCB2ID0gdnJlZi5jdXJyZW50XG5cbiAgICAgIGxldCB2d2lkdGggPSBwc3BhY2UgLSA4XG4gICAgICB2LndpZHRoID0gdndpZHRoICogZHByXG4gICAgICB2LnN0eWxlLm1hcmdpbkxlZnQgPSBwbGVmdCArICdweCdcbiAgICAgIGxldCB2eCA9IHYuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgbGV0IHBkaW0gPSBwZGltX3JlZi5jdXJyZW50XG4gICAgICBsZXQgdGRpbSA9IHRkaW1fcmVmLmN1cnJlbnRcblxuICAgICAgbGV0IGNvbHVtbnMgPSBNYXRoLmZsb29yKHYud2lkdGggLyBzaXplKVxuICAgICAgbGV0IHBhbmVsX2NvbHVtbnMgPSBNYXRoLmZsb29yKFxuICAgICAgICBNYXRoLmZsb29yKCh2LndpZHRoIC8gZHByIC0gc2l6ZSAqIDQpIC8gc2l6ZSkgLyAyXG4gICAgICApXG4gICAgICBsZXQgcGFuZWxfcm93cyA9IE1hdGguY2VpbCgxMDAwMCAvIChwYW5lbF9jb2x1bW5zIC0gMSkpXG5cbiAgICAgIGxldCBwdyA9IHBhbmVsX2NvbHVtbnMgKiBzaXplXG4gICAgICBsZXQgcGggPSBwYW5lbF9yb3dzICogc2l6ZVxuXG4gICAgICBsZXQgcGMgPSAyXG4gICAgICBsZXQgcHIgPSAyXG5cbiAgICAgIGxldCB0b3AgPSBybGhcbiAgICAgIGxldCBib3R0b20gPSBybGggKiAyXG4gICAgICBsZXQgYm90dG9tX3NwYWNlID0gcmxoIC8gMlxuXG4gICAgICBsZXQgdGMgPSBwYW5lbF9jb2x1bW5zICogMiArIDRcbiAgICAgIGxldCB0ciA9IE1hdGguY2VpbCgxMDAwMCAvIChjb2x1bW5zIC0gMSkpXG4gICAgICBsZXQgdHcgPSB0YyAqIHNpemVcbiAgICAgIGxldCB0aCA9IHRyICogc2l6ZVxuICAgICAgdGRpbV9yZWYuY3VycmVudCA9IFt0dywgdGhdXG5cbiAgICAgIGxldCB2aGVpZ2h0ID0gKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSAqIDJcbiAgICAgIHYuaGVpZ2h0ID0gdmhlaWdodCAqIGRwclxuXG4gICAgICB2LnN0eWxlLndpZHRoID0gdndpZHRoICsgJ3B4J1xuICAgICAgdi5zdHlsZS5oZWlnaHQgPSB2aGVpZ2h0ICsgJ3B4J1xuXG4gICAgICB2eC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgbGV0IGggPSBocmVmLmN1cnJlbnRcbiAgICAgIGgud2lkdGggPSB2LndpZHRoXG4gICAgICBoLmhlaWdodCA9IHYuaGVpZ2h0XG4gICAgICBoLnN0eWxlLndpZHRoID0gdndpZHRoICsgJ3B4J1xuICAgICAgaC5zdHlsZS5oZWlnaHQgPSB2aGVpZ2h0ICsgJ3B4J1xuXG4gICAgICBsZXQgaHggPSBoLmdldENvbnRleHQoJzJkJylcbiAgICAgIGh4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgJHJhbmsgPSByYW5rcmVmLmN1cnJlbnRcbiAgICAgICRyYW5rLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG4gICAgICAkcmFuay5zdHlsZS5sZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgcyA9IHNyZWYuY3VycmVudFxuICAgICAgbGV0IHN3aWR0aCA9IHR3XG4gICAgICBsZXQgc2hlaWdodCA9IHJsaCAqIDRcbiAgICAgIHMud2lkdGggPSBzd2lkdGggKiBkcHJcbiAgICAgIHMuaGVpZ2h0ID0gc2hlaWdodCAqIGRwclxuICAgICAgcy5zdHlsZS53aWR0aCA9IHN3aWR0aCArICdweCdcbiAgICAgIHMuc3R5bGUuaGVpZ2h0ID0gc2hlaWdodCArICdweCdcbiAgICAgIGxldCBzeCA9IHMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgc3guc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCByYW5rbGFiZWwgPSByYW5rbGFiZWxfcmVmLmN1cnJlbnRcbiAgICAgIHJhbmtsYWJlbC5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuXG4gICAgICB2eC5maWxsU3R5bGUgPSAnI2VlZSdcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgaSA9IHIgKiBwYyArIGNcbiAgICAgICAgICBsZXQgeCA9IGMgKiAocHcgKyBzaXplICogNClcbiAgICAgICAgICBsZXQgeSA9IHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgdG9wXG4gICAgICAgICAgbGV0IHcgPSBwd1xuICAgICAgICAgIGxldCBoID0gcGhcbiAgICAgICAgICBwZGltW2ldID0gW3gsIHksIHcsIGhdXG4gICAgICAgICAgdnguZmlsbFJlY3QoeCwgeSwgdywgaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgJHRpdGxlcyA9IHRpdGxlX3JlZi5jdXJyZW50XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0ICR0ID0gJHRpdGxlcy5jaGlsZE5vZGVzW3IgKiBwYyArIGNdXG4gICAgICAgICAgJHQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgJHQuc3R5bGUudG9wID0gciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyAncHgnXG4gICAgICAgICAgJHQuc3R5bGUud2lkdGggPSBwdyArICdweCdcbiAgICAgICAgICAkdC5zdHlsZS5sZWZ0ID0gYyAqIChwdyArIHNpemUgKiA0KSArIGN3ICsgJ3B4J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCAkcmVhZCA9IHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgJHIgPSAkcmVhZC5jaGlsZE5vZGVzW3IgKiBwYyArIGNdXG4gICAgICAgICAgJHIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgJHIuc3R5bGUudG9wID1cbiAgICAgICAgICAgIHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgdG9wICsgcGggKyAncHgnXG4gICAgICAgICAgJHIuc3R5bGUud2lkdGggPSBwdyArICdweCdcbiAgICAgICAgICAkci5zdHlsZS5sZWZ0ID0gYyAqIChwdyArIHNpemUgKiA0KSArIGN3ICsgJ3B4J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0YiA9IHRvcGJhcl9yZWYuY3VycmVudFxuICAgICAgdGIuc3R5bGUud2lkdGggPSB0dyArICdweCdcblxuICAgICAgbGV0IGljb24gPSBpY29uX3JlZi5jdXJyZW50XG4gICAgICBpY29uLndpZHRoID0gY3cgKiBkcHJcbiAgICAgIGljb24uaGVpZ2h0ID0gcmxoICogMS41ICogZHByXG4gICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgIGl4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSBzaGltIGJ5IFBhdWwgSXJpc2hcbiAgICAgIC8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIGZ1bmN0aW9uKC8qIGZ1bmN0aW9uICovIGNhbGxiYWNrLCAvKiBET01FbGVtZW50ICovIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9KSgpXG5cbiAgICAgIC8vIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9lbGFtYmVydC8xMDAyMTE2I2dpc3Rjb21tZW50LTE5NTM5MjVcbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBzZXRJbnRlcnZhbCBleGNlcHQgdXNlcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB3aGVyZSBwb3NzaWJsZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAqIEBwYXJhbSB7aW50fSBkZWxheSBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5ySW50ZXJ2YWwgPSBmdW5jdGlvbihmbiwgZGVsYXkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICkgJiYgLy8gRmlyZWZveCA1IHNoaXBzIHdpdGhvdXQgY2FuY2VsIHN1cHBvcnRcbiAgICAgICAgICAhd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAhd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKGZuLCBkZWxheSlcblxuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KClcblxuICAgICAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBkZWx0YSA9IGN1cnJlbnQgLSBzdGFydFxuXG4gICAgICAgICAgaWYgKGRlbHRhID49IGRlbGF5KSB7XG4gICAgICAgICAgICBmbi5jYWxsKClcbiAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGUudmFsdWUgPSByZXF1ZXN0QW5pbUZyYW1lKGxvb3ApXG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGUudmFsdWUgPSByZXF1ZXN0QW5pbUZyYW1lKGxvb3ApXG4gICAgICAgIHJldHVybiBoYW5kbGVcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBCZWhhdmVzIHRoZSBzYW1lIGFzIGNsZWFySW50ZXJ2YWwgZXhjZXB0IHVzZXMgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtpbnR8b2JqZWN0fSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAqL1xuICAgICAgd2luZG93LmNsZWFyUkludGVydmFsID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgICAgICAgICAgIGhhbmRsZS52YWx1ZVxuICAgICAgICAgICAgKSAvKiBTdXBwb3J0IGZvciBsZWdhY3kgQVBJICovXG4gICAgICAgICAgOiB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiBjbGVhckludGVydmFsKGhhbmRsZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXVzZSAmJiAhaW5mbykge1xuICAgICAgICBoYW5kbGVyX3JlZi5jdXJyZW50ID0gd2luZG93LnJJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgc3BlZWRzW3NwZWVkXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICAgIHNldEluaXRTcGVlZCh0cnVlKVxuICB9LCBbZGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdFNwZWVkICE9IGZhbHNlKSB7XG4gICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIGlmICghcGF1c2UgJiYgIWluZm8pIHtcbiAgICAgICAgaGFuZGxlcl9yZWYuY3VycmVudCA9IHJJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgc3BlZWRzW3NwZWVkXSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzcGVlZCwgcGF1c2UsIGluZm9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYW5lbHMgPSBwYW5lbHNfcmVmLmN1cnJlbnRcbiAgICAgIGxldCAkcmVhZCA9IHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuICAgICAgbGV0IHZ4ID0gdi5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgIGxldCBoID0gaHJlZi5jdXJyZW50XG4gICAgICBsZXQgaHggPSBoLmdldENvbnRleHQoJzJkJylcblxuICAgICAgLy8gdXBkYXRlIHBhbmVsIGRhdGFcbiAgICAgIGxldCBwYW5lbF9rZXlzID0gWzIxLCAyMCwgMjEsIDIwXVxuICAgICAgbGV0IHJlY29yZCA9IGRhdGEuZGF0YVtmcmFtZV1cbiAgICAgIGxldCBhbm9tYWx5ID0gcmVjb3JkWzE5XSA9PT0gMSA/IHRydWUgOiBmYWxzZVxuXG4gICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICB2eC5maWxsU3R5bGUgPSByZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgfVxuXG4gICAgICBsZXQgcGMgPSBwZGltWzBdWzJdIC8gc2l6ZVxuICAgICAgbGV0IHByID0gcGRpbVswXVszXSAvIHNpemVcblxuICAgICAgaHguY2xlYXJSZWN0KDAsIDAsIGgud2lkdGggLyBkcHIsIGguaGVpZ2h0IC8gZHByKVxuXG4gICAgICAvLyBsZXQgY29uID0gY29uX3JlZi5jdXJyZW50XG4gICAgICAvLyBsZXQgcmVjb3JkcyA9IGRhdGEuZGF0YVxuICAgICAgLy8gICAuc2xpY2UoTWF0aC5tYXgoMCwgZnJhbWUgKyAxIC0gdGVybWhlaWdodCksIGZyYW1lICsgMSlcbiAgICAgIC8vICAgLnJldmVyc2UoKVxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgIGxldCByZWMgPSByZWNvcmRzW2ldXG4gICAgICAvLyAgIGxldCByb3cgPSBjb24uY2hpbGROb2Rlc1tpXVxuICAgICAgLy8gICBsZXQgYW5vbWFseSA9IHJlY1sxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcbiAgICAgIC8vICAgcm93LmNoaWxkTm9kZXNbMF1cbiAgICAgIC8vICAgbGV0IGluZGljYXRvciA9IChyb3cuY2hpbGROb2Rlc1swXS5zdHlsZS5iYWNrZ3JvdW5kID0gYW5vbWFseVxuICAgICAgLy8gICAgID8gcmVkXG4gICAgICAvLyAgICAgOiBzY2hlbWUuYmcpXG4gICAgICAvLyAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAvLyAgICAgbGV0IGNlbGwgPSByb3cuY2hpbGROb2Rlc1tqICsgMV0uY2hpbGROb2Rlc1swXVxuICAgICAgLy8gICAgIGlmIChqID09PSAwKSB7XG4gICAgICAvLyAgICAgICBjZWxsLmlubmVySFRNTCA9IGZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHQgKyAxXG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGlmIChjZWxsLmlubmVySFRNTCAhPT0gcmVjW2pdKSB7XG4gICAgICAvLyAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gcmVjW2pdXG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tpXVxuICAgICAgICBsZXQgZGV0ZWN0ZWQgPSByZWNvcmRbcGFuZWxfa2V5c1tpXV1cblxuICAgICAgICBsZXQgcDF4LCBwMXlcbiAgICAgICAgLy8gVFAgRlAgVE4gRk5cbiAgICAgICAgaWYgKGRldGVjdGVkID4gMC4xKSB7XG4gICAgICAgICAgbGV0IG4gPSBwYW5lbHNbaV1bMF0gKyBwYW5lbHNbaV1bMV1cbiAgICAgICAgICBwMXkgPSAocHIgLSAobiAlIHByKSAtIDEpICogc2l6ZVxuICAgICAgICAgIHAxeCA9IE1hdGguZmxvb3IobiAvIHByKSAqIHNpemVcbiAgICAgICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICAgICAgLy8gdHJ1ZSBwb3NcbiAgICAgICAgICAgIHBhbmVsc1tpXVswXSsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZhbHNlIHBvc1xuICAgICAgICAgICAgcGFuZWxzW2ldWzFdKytcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG4gPSBwYW5lbHNbaV1bMl0gKyBwYW5lbHNbaV1bM11cbiAgICAgICAgICBwMXkgPSAocHIgLSAobiAlIHByKSAtIDEpICogc2l6ZVxuICAgICAgICAgIHAxeCA9IChwYyAtIE1hdGguZmxvb3IobiAvIHByKSAtIDEpICogc2l6ZSAtIDFcbiAgICAgICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICAgICAgLy8gZmFsc2UgbmVnXG4gICAgICAgICAgICBwYW5lbHNbaV1bM10rK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0cnVlIG5lZ1xuICAgICAgICAgICAgcGFuZWxzW2ldWzJdKytcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGltID0gcGRpbVtpXVxuICAgICAgICB2eC5maWxsUmVjdChkaW1bMF0gKyBwMXgsIGRpbVsxXSArIHAxeSwgc2l6ZSArIDEsIHNpemUgKyAxKVxuXG4gICAgICAgIC8vIGh4LmZpbGxTdHlsZSA9ICcjNDMzMTQyJ1xuICAgICAgICBoeC5maWxsU3R5bGUgPSBiZ3NbaV1cbiAgICAgICAgaHguZmlsbFJlY3QoXG4gICAgICAgICAgZGltWzBdICsgcDF4IC0gMixcbiAgICAgICAgICBkaW1bMV0gKyBwMXkgLSAyLFxuICAgICAgICAgIHNpemUgKyAxICsgNCxcbiAgICAgICAgICBzaXplICsgMSArIDRcbiAgICAgICAgKVxuICAgICAgICBoeC5maWxsU3R5bGUgPSB2eC5maWxsU3R5bGVcbiAgICAgICAgaHguZmlsbFJlY3QoZGltWzBdICsgcDF4LCBkaW1bMV0gKyBwMXksIHNpemUgKyAxLCBzaXplICsgMSlcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICRyZWFkLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHBhbmVsW2pdXG4gICAgICAgIH1cblxuICAgICAgICAvL2FjY3VyYWN5ID0gKFRQK1ROKS8oVFArVE4rRlArRk4pXG4gICAgICAgIGxldCBhY2N1cmFjeSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgKChwYW5lbFswXSArIHBhbmVsWzJdKSAvXG4gICAgICAgICAgICAocGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM10pKSAqXG4gICAgICAgICAgICAxMDBcbiAgICAgICAgKVxuICAgICAgICAvLyBwcmVjaXNpb24gdHAgLyAodHAgKyBmcClcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbMV0pKSAqIDEwMClcblxuICAgICAgICAvLyByZWNhbGwgdHAgLyAodHAgKyBmbilcbiAgICAgICAgbGV0IHJlY2FsbCA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbM10pKSAqIDEwMClcblxuICAgICAgICAvLyA0IDUgNlxuICAgICAgICBwYW5lbHNbaV1bNF0gPSBhY2N1cmFjeVxuICAgICAgICBwYW5lbHNbaV1bNV0gPSBwcmVjaXNpb25cbiAgICAgICAgcGFuZWxzW2ldWzZdID0gcmVjYWxsXG4gICAgICB9XG5cbiAgICAgIGxldCB2aGVpZ2h0ID0gdi5oZWlnaHQgLyBkcHJcblxuICAgICAgLy8gc2V0IHJhbmtpbmdzXG4gICAgICB7XG4gICAgICAgIGxldCAkcnMgPSByYW5rcmVmLmN1cnJlbnQuY2hpbGROb2Rlc1xuICAgICAgICBsZXQgcyA9IHNyZWYuY3VycmVudFxuICAgICAgICBsZXQgc3ggPSBzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgc3guY2xlYXJSZWN0KDAsIDAsIHMud2lkdGggLyBkcHIsIHMuaGVpZ2h0IC8gZHByKVxuXG4gICAgICAgIGxldCByYW5rX3Jvd3MgPSBuYW1lcy5tYXAoKG4sIGkpID0+IHtcbiAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgICAgICByZXR1cm4gW2ksIG4sIHBhbmVsWzRdLCBwYW5lbFs1XSwgcGFuZWxbNl1dXG4gICAgICAgIH0pXG4gICAgICAgIHJhbmtfcm93cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYlsyXSAtIGFbMl1cbiAgICAgICAgfSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rX3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm93ID0gcmFua19yb3dzW2ldXG4gICAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW3Jvd1swXV1cbiAgICAgICAgICBsZXQgW1RQLCBGUCwgVE4sIEZOXSA9IHBhbmVsXG4gICAgICAgICAgbGV0ICRyID0gJHJzW2ldXG4gICAgICAgICAgbGV0IHRvdGFsID0gcGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM11cblxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSBpICsgMVxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5zdHlsZS5iYWNrZ3JvdW5kID0gYmdzW3Jvd1swXV1cbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gcm93WzFdXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbMl0pXG4gICAgICAgICAgICA/IHJvd1syXSArICclICdcbiAgICAgICAgICAgIDogJ04vQSAnXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAoJHtUUH0rJHtUTn0pLyR7dG90YWx9YFxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSAhaXNOYU4ocm93WzNdKVxuICAgICAgICAgICAgPyByb3dbM10gKyAnJSAnXG4gICAgICAgICAgICA6ICdOL0EgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7RlB9KWBcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gIWlzTmFOKHJvd1s0XSlcbiAgICAgICAgICAgID8gcm93WzRdICsgJyUgJ1xuICAgICAgICAgICAgOiAnTi9BICdcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCR7VFB9Lygke1RQfSske0ZOfSlgXG5cbiAgICAgICAgICBsZXQgeSA9IGkgKiBybGhcbiAgICAgICAgICBsZXQgdyA9IHMud2lkdGggLyBkcHJcbiAgICAgICAgICBsZXQgaCA9IHJsaCArIDFcbiAgICAgICAgICAvLyBzeC5maWxsU3R5bGUgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgIC8vIHN4LmZpbGxSZWN0KDAsIHksIHcsIGgpXG5cbiAgICAgICAgICBzeC5maWxsU3R5bGUgPSBzY2hlbWUuZmdcbiAgICAgICAgICBsZXQgeHN0ZXAgPSBzLndpZHRoIC8gZHByIC8gNFxuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IChjICsgMSkgKiB4c3RlcFxuICAgICAgICAgICAgbGV0IHcgPSAocm93W2MgKyAyXSAvIDEwMCkgKiB4c3RlcCAtIGN3XG4gICAgICAgICAgICBpZiAodyA8PSAwKSB3ID0gMFxuICAgICAgICAgICAgc3guZmlsbFJlY3QoeCwgeSwgdywgaClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWNvbiA9IGljb25fcmVmLmN1cnJlbnRcbiAgICAgICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGl4LmNsZWFyUmVjdCgwLCAwLCBjdywgcmxoKVxuICAgICAgICBsZXQgc3RlcCA9IChybGggKiAxLjUpIC8gNFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmtfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByb3cgPSByYW5rX3Jvd3NbaV1cbiAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbcm93WzBdXVxuICAgICAgICAgIGxldCB5ID0gaSAqIHN0ZXBcbiAgICAgICAgICBsZXQgdyA9IChwYW5lbFs0XSAvIDEwMCkgKiBjd1xuICAgICAgICAgIGl4LmZpbGxTdHlsZSA9IGJnc1tyb3dbMF1dXG4gICAgICAgICAgaXguZmlsbFJlY3QoMCwgeSwgdywgc3RlcClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2RhdGEsIGZyYW1lXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgc2V0RHByKGRwcilcblxuICAgIGxldCBwID0gcHJlZi5jdXJyZW50XG4gICAgbGV0IHBzcGFjZSA9IHAub2Zmc2V0V2lkdGhcbiAgICBsZXQgcGxlZnQgPSBwLm9mZnNldExlZnRcbiAgICBzZXRQc3BhY2UocHNwYWNlKVxuICAgIHNldFBsZWZ0KHBsZWZ0KVxuXG4gICAgLy8gZ2V0IGRhdGFcbiAgICBmZXRjaCgnc2FtcGxlZC5qc29uJylcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihfZGF0YSA9PiB7XG4gICAgICAgIHNldERhdGEoX2RhdGEpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMWNoJywgcGFkZGluZ1JpZ2h0OiAnMWNoJyB9fT5cbiAgICAgICAgPGRpdiByZWY9e3ByZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2JiYicsXG4gICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17dG9wYmFyX3JlZn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICByZWY9e2ljb25fcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMWNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCTElQXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJbmZvKHRydWUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluZm9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkYXRhID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+Q09OTkVDVElPTlM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzFjaCcgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzc3NycgfX0+e2ZyYW1lICsgMX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiA2ICogMTkgKyAxICsgJ2NoJyB9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7a2V5X2Rlcy5tYXAoKGssIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17a1swXSArICc6ICcgKyBrWzJdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtrWzFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCAqIHRlcm1oZWlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQzMzE0MicsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtjb25fcmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgLnNsaWNlKE1hdGgubWF4KGZyYW1lIC0gdGVybWhlaWdodCArIDEsIDApLCBmcmFtZSArIDEpXG4gICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHQgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmxoIC8gMiAtIChzaXplICsgMSkgLyAyIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY3cgLyAyIC0gKHNpemUgKyAxKSAvIDIgKyBjdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkWzE5XSA/IHJlZCA6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7ZC5zbGljZSgwLCAxOSkubWFwKChkLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtqID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHQgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNUUkFURUdJRVNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JhbmtsYWJlbF9yZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+UmFua2luZzwvZGl2PlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgWydBY2N1cmFjeScsICcoVFArVE4pL0FMTCddLFxuICAgICAgICAgICAgICBbJ1ByZWNpc2lvbicsICdUUC8oVFArRlApJ10sXG4gICAgICAgICAgICAgIFsnUmVjYWxsJywgJ1RQLyhUUCtGTiknXSxcbiAgICAgICAgICAgIF0ubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICB7c29ydCA9PT0gaSA/IDxzcGFuPntuWzBdfTwvc3Bhbj4gOiA8YnV0dG9uIHN0eWxlPXt7Zm9udFN0eWxlOiAnaXRhbGljJ319PntuWzBdfTwvYnV0dG9uPn17JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQsIGZvbnRTdHlsZTogJ25vcm1hbCcgfX0+XG4gICAgICAgICAgICAgICAgICB7blsxXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxY2gnLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXtzcmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtyYW5rcmVmfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKChuLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7aiA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMWNoJyB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZJU1VBTElaRURcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17dnJlZn0gc3R5bGU9e3t9fSAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2hyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMWNoJywgdG9wOiAwIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwIH19XG4gICAgICAgICAgICAgIHJlZj17dGl0bGVfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmdzW2ldLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtyZWFkb3V0X3JlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKCgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIFsnVHJ1ZSBQb3MnLCByZWRdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIFBvcycsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIE5lZycsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBOZWcnLCByZWRdLFxuICAgICAgICAgICAgICAgICAgXS5tYXAoKG8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbkxlZnQ6IGkgPT09IDIgPyAnMWNoJyA6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29bMF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggLyAyICsgcmxoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCbGlwIGlzIGFuIGFub21hbHkgZGV0ZWN0aW9uIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2JiYicsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlNwZWVkOjwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCAtIDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7c3BlZWRzLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICBpID09IHNwZWVkID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoaSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA8IHNwZWVkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNwZWVkKHNwZWVkICsgMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyc+J31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtwYXVzZSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0UGF1c2UoZmFsc2UpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJjaCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRQYXVzZSh0cnVlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYXVzZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cGF1c2UgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUaWNrXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2luZm8gPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SW5mbyhmYWxzZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBjaCcsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAqIDEuNSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoICogMS41LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5JbmZvPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnLCBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEJsaXAgaXMgYSBwcm90b3R5cGUgYnl7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDbG91ZGVyYSBGYXN0IEZvcndhcmRcbiAgICAgICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIGJ1aWx0IHRvIGFjY29tcGFueSBvdXJ7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mZjEyLmZhc3Rmb3J3YXJkbGFicy5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICByZXBvcnQgb24gRGVlcCBMZWFybmluZyBmb3IgQW5vbWFseSBEZXRlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBCbGlwIHNob3dzIGhvdyBmb3VyIGRpZmZlcmVudCBhbGdvcml0aG1zIChcbiAgICAgICAgICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpICE9IG5hbWVzLmxlbmd0aCAtIDEgPyA8c3Bhbj4sIDwvc3Bhbj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICkgcGVyZm9ybSBhdCBkZXRlY3RpbmcgbmV0d29yayBhdHRhY2tzIGluIHRoZXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8va2RkLmljcy51Y2kuZWR1L2RhdGFiYXNlcy9rZGRjdXA5OS90YXNrLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBLREQgbmV0d29yayBpbnRydXNpb24gZGF0YXNldFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIC4gWW91IGNhbiByZWFkIGFib3V0IGhvdyBlYWNoIG1vZGVsIHdhcyB0cmFpbmVkIGluIHRoZXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cHJvdG90b3R5cGUgc2VjdGlvbiBvZiBvdXIgcmVwb3J0PC9hPi5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSB0b3AgQ09OTkVDVElPTlMgc2VjdGlvbiBzaG93cyB0aGV7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDMzMTQyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmsgY29ubmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIGNvbWluZyBpbiwgd2l0aCB0aGUgZmVhdHVyZXMgdXNlZCBieSBlYWNoIG1vZGVsIGZvciB0aGVpclxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uLiBUaGUgY29sb3Igb2YgdGhlIHNxdWFyZSBzaG93cyB0aGUgdHJ1ZSBzdGF0dXMgb2ZcbiAgICAgICAgICAgICAgICAgICAgd2hldGhlciB0aGUgY29ubmVjdGlvbiBpcyBhbnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIG9yeycgJ31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBub3JtYWxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBUaGUgU1RSQVRFR0lFUyBzZWN0aW9uIHNob3dzIG1ldHJpY3Mgb24gaG93IGVhY2ggYWxnb3JpdGhtXG4gICAgICAgICAgICAgICAgICAgIGlzIHBlZm9ybWluZyBvbiB0aGUgaW5jb21pbmcgZGF0YS4gWW91IGNhbiBzZWUgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgICAgICAgICAgICByZWNhbGwsIGFuZCBwcmVjaXNpb24gbWV0cmljcyBmb3IgZWFjaCBzdHJhdGVneS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBWSVNVQUxJWkVEIHNlY3Rpb24gcHJvdmlkZXMgYW5vdGhlciB2aWV3IG9mIGVhY2hcbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3kncyBwZXJmb3JtYW5jZS4gRWFjaCBjb25uZWN0aW9uIGlzIHZpc3VhbGl6ZWQgYXMgYVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuIElmIGl0IGlzIGNsYXNzaWZpZWQgYXMgYW4gYXR0YWNrIGl0IGlzIHBsYWNlZCBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgbGVmdDsgaWYgY2xhc3NpZmllZCBub3JtYWwsIGl0IGlzIHBsYWNlZCBvbiB0aGUgcmlnaHQuIFRoZVxuICAgICAgICAgICAgICAgICAgICBjb2xvciByZXZlYWxzIGl0cyB0cnVlIHN0YXR1cy4gT3ZlciB0aW1lIHRoZSBkZW5zaXR5IGFuZFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiBvZiB0aGUgY29sb3JzIGluIGVhY2ggc3RyYXRlZ3kgdmlzdWFsaXphdGlvbiBnaXZlXG4gICAgICAgICAgICAgICAgICAgIHlvdSBhIGZlZWwgZm9yIHRoZSBkaWZmZXJlbnQgbW9kZWxzIHN0cmVuZ3RocyBhbmRcbiAgICAgICAgICAgICAgICAgICAgd2Vha25lc3Nlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBzaW11bGF0aW9uIHdpbGwgcnVuIHRocm91Z2ggMTAsMDAwIGNvbm5lY3Rpb25zIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hpbmcuIFlvdSBjYW4gY29udHJvbCB0aGUgc3BlZWQgb2YgdGhlIHNpbXVsYXRpb24gd2l0aFxuICAgICAgICAgICAgICAgICAgICB0aGUgY29udHJvbHMgYXQgdGhlIGJvdHRvbS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5mbyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU3RhcnQgdGhlIHNpbXVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZzfXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xofTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMsXG4gICAgICAgIGg0LFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtybGh9cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.da85e9f6cdac8683eb47.hot-update.js.map