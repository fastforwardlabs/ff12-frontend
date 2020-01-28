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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
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
var names = ['Autoencoder', 'Var. Autoencoder', 'Autoencoder', 'Var. Autoencoder'];
var size = 4;
var sort_options = ['accuracy', 'precision', 'recall'];

var rInterval = function rInterval(callback, delay) {
  var dateNow = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default.a,
      requestAnimation = window.requestAnimationFrame,
      start = dateNow(),
      stop,
      intervalFunc = function intervalFunc() {
    dateNow() - start < delay || (start += delay, callback());
    stop || requestAnimation(intervalFunc);
  };

  requestAnimation(intervalFunc);
  return {
    clear: function clear() {
      stop = 1;
    }
  };
};

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var handler_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var sref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var vref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
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

  var panels_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(4)).map(function (n) {
    return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(4)).map(function (n) {
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
          var h = ph;
          pdim[i] = [x, y, w, h];
          vx.fillRect(x, y, w, h);
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
      ix.scale(dpr, dpr);
      handler_ref.current = rInterval(function () {
        setFrame(function (prev) {
          return prev + 1;
        });
      }, 80);
    } else {
      if (handler_ref.current !== null) {
        handler_ref.current.clear();
      }
    }
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (data !== null) {
      var panels = panels_ref.current;
      var $read = readout_ref.current;
      var truth = truth_ref.current;
      var $truth = treadout_ref.current;
      var pdim = pdim_ref.current;
      var v = vref.current;
      var vx = v.getContext('2d'); // update panel data

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

      var _tdim_ref$current = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tdim_ref.current, 2),
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
        sx.fillStyle = scheme.fg;
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

          var _panel2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_panel, 4),
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
          var xstep = s.width / dpr / 4;

          for (var c = 0; c < 3; c++) {
            var x = (c + 1) * xstep;
            var y = _i * rlh;
            var w = row[c + 2] / 100 * xstep - cw;
            var h = rlh + 1;
            sx.fillRect(x, y, w, h);
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

          var _w = _panel3[4] / 100 * cw;

          ix.fillStyle = bgs[_row[0]];
          ix.fillRect(0, _y, _w, step);
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
      lineNumber: 381
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
      lineNumber: 382
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
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
      lineNumber: 385
    },
    __self: this
  }, __jsx("div", {
    ref: topbar_ref,
    style: {
      display: 'flex',
      paddingLeft: '2.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
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
      lineNumber: 401
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative',
      letterSpacing: '0.5ch',
      marginRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "ANOMAL"), __jsx("button", {
    style: {
      color: scheme.light
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
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
      lineNumber: 425
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
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
      lineNumber: 438
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
      lineNumber: 439
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      paddingRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
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
        lineNumber: 442
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
        lineNumber: 450
      },
      __self: this
    }, k[1]));
  })), __jsx("div", {
    style: {
      background: scheme.bg,
      color: scheme.fg,
      paddingRight: '1ch',
      height: rlh * 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, data.data.slice(frame - 4, frame).reverse().map(function (d, i) {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }, d.slice(0, 19).map(function (d, j) {
      return __jsx("div", {
        style: {
          display: 'flex',
          paddingLeft: '1ch',
          flexGrow: 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
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
          lineNumber: 489
        },
        __self: this
      }, j === 0 ? frame + i : d));
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
      lineNumber: 505
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
      lineNumber: 514
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
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
        lineNumber: 528
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
        lineNumber: 530
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
      lineNumber: 536
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
      lineNumber: 541
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
      lineNumber: 545
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
        lineNumber: 547
      },
      __self: this
    }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(4)).map(function (n, j) {
      return __jsx("div", {
        style: {
          width: '100%'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
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
          lineNumber: 550
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: scheme.light
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
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
      lineNumber: 565
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {
      left: 0,
      top: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
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
      lineNumber: 577
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
        lineNumber: 582
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
      lineNumber: 593
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(4)).map(function () {
    return __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602
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
          lineNumber: 609
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
          lineNumber: 612
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
          lineNumber: 620
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
      lineNumber: 634
    },
    __self: this
  }, __jsx("div", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
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
      lineNumber: 642
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontStyle: 'italic'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
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
      lineNumber: 651
    },
    __self: this
  })), __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
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
      lineNumber: 660
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
      lineNumber: 663
    },
    __self: this
  })))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2,
      textAlign: 'center',
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }, "Anomal is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Cloudera Fast Forward"), "."), __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginLeft: '1.25ch',
      marginRight: '1.25ch',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }, "Speed:"), __jsx("button", {
    style: {
      paddingLeft: '0.25ch',
      paddingRight: '0.25ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, '<'), '123456'.split('').map(function (i) {
    return i == 6 ? __jsx("div", {
      style: {
        paddingLeft: '0.25ch',
        paddingRight: '0.25ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704
      },
      __self: this
    }, i) : __jsx("button", {
      style: {
        paddingLeft: '0.25ch',
        paddingRight: '0.25ch',
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, i);
  }), __jsx("button", {
    style: {
      paddingLeft: '0.25ch',
      paddingRight: '0.25ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }, '>')), __jsx("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: this
  }, 'Pause'))) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: this
  }, "loading..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa3VCeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgbmFtZXMgPSBbXG4gICdBdXRvZW5jb2RlcicsXG4gICdWYXIuIEF1dG9lbmNvZGVyJyxcbiAgJ0F1dG9lbmNvZGVyJyxcbiAgJ1Zhci4gQXV0b2VuY29kZXInLFxuXVxuXG5sZXQgc2l6ZSA9IDRcblxubGV0IHNvcnRfb3B0aW9ucyA9IFsnYWNjdXJhY3knLCAncHJlY2lzaW9uJywgJ3JlY2FsbCddXG5cbmxldCBySW50ZXJ2YWwgPSBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIGRhdGVOb3cgPSBEYXRlLm5vdyxcbiAgICByZXF1ZXN0QW5pbWF0aW9uID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICBzdGFydCA9IGRhdGVOb3coKSxcbiAgICBzdG9wLFxuICAgIGludGVydmFsRnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZGF0ZU5vdygpIC0gc3RhcnQgPCBkZWxheSB8fCAoKHN0YXJ0ICs9IGRlbGF5KSwgY2FsbGJhY2soKSlcbiAgICAgIHN0b3AgfHwgcmVxdWVzdEFuaW1hdGlvbihpbnRlcnZhbEZ1bmMpXG4gICAgfVxuICByZXF1ZXN0QW5pbWF0aW9uKGludGVydmFsRnVuYylcbiAgcmV0dXJuIHtcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBzdG9wID0gMVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgaGFuZGxlcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHZyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJhbmtyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtmcmFtZSwgc2V0RnJhbWVdID0gdXNlU3RhdGUoMClcbiAgbGV0IFtwc3BhY2UsIHNldFBzcGFjZV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW3BsZWZ0LCBzZXRQbGVmdF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgcGFuZWxzX3JlZiA9IHVzZVJlZihbLi4uQXJyYXkoNCldLm1hcChuID0+IFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gMCkpKVxuICBsZXQgcGRpbV9yZWYgPSB1c2VSZWYoW10pXG4gIGxldCB0ZGltX3JlZiA9IHVzZVJlZihbXSlcbiAgbGV0IHRpdGxlX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmVhZG91dF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRydXRoX3JlZiA9IHVzZVJlZihbMCwgMF0pXG4gIGxldCB0cmVhZG91dF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRydXRodGl0bGVfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByYW5rbGFiZWxfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCB0b3BiYXJfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBbZHByLCBzZXREcHJdID0gdXNlU3RhdGUoMSlcbiAgbGV0IGljb25fcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgLy8gc2V0IGxheW91dFxuICAgICAgbGV0IHYgPSB2cmVmLmN1cnJlbnRcblxuICAgICAgbGV0IHZ3aWR0aCA9IHBzcGFjZSAtIDhcbiAgICAgIHYud2lkdGggPSB2d2lkdGggKiBkcHJcbiAgICAgIHYuc3R5bGUubWFyZ2luTGVmdCA9IHBsZWZ0ICsgJ3B4J1xuICAgICAgbGV0IHZ4ID0gdi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBsZXQgcGRpbSA9IHBkaW1fcmVmLmN1cnJlbnRcbiAgICAgIGxldCB0ZGltID0gdGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgY29sdW1ucyA9IE1hdGguZmxvb3Iodi53aWR0aCAvIHNpemUpXG4gICAgICBsZXQgcGFuZWxfY29sdW1ucyA9IE1hdGguZmxvb3IoXG4gICAgICAgIE1hdGguZmxvb3IoKHYud2lkdGggLyBkcHIgLSBzaXplICogNCkgLyBzaXplKSAvIDJcbiAgICAgIClcbiAgICAgIGxldCBwYW5lbF9yb3dzID0gTWF0aC5jZWlsKDEwMDAwIC8gKHBhbmVsX2NvbHVtbnMgLSAxKSlcblxuICAgICAgbGV0IHB3ID0gcGFuZWxfY29sdW1ucyAqIHNpemVcbiAgICAgIGxldCBwaCA9IHBhbmVsX3Jvd3MgKiBzaXplXG5cbiAgICAgIGxldCBwYyA9IDJcbiAgICAgIGxldCBwciA9IDJcblxuICAgICAgbGV0IHRvcCA9IHJsaFxuICAgICAgbGV0IGJvdHRvbSA9IHJsaCAqIDJcbiAgICAgIGxldCBib3R0b21fc3BhY2UgPSBybGggLyAyXG5cbiAgICAgIGxldCB0YyA9IHBhbmVsX2NvbHVtbnMgKiAyICsgNFxuICAgICAgbGV0IHRyID0gTWF0aC5jZWlsKDEwMDAwIC8gKGNvbHVtbnMgLSAxKSlcbiAgICAgIGxldCB0dyA9IHRjICogc2l6ZVxuICAgICAgbGV0IHRoID0gdHIgKiBzaXplXG4gICAgICB0ZGltX3JlZi5jdXJyZW50ID0gW3R3LCB0aF1cblxuICAgICAgbGV0IHZoZWlnaHQgPVxuICAgICAgICAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICogMiArIHRvcCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZVxuICAgICAgdi5oZWlnaHQgPSB2aGVpZ2h0ICogZHByXG5cbiAgICAgIHYuc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICB2LnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIHZ4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgJHJhbmsgPSByYW5rcmVmLmN1cnJlbnRcbiAgICAgICRyYW5rLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG4gICAgICAkcmFuay5zdHlsZS5sZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgcyA9IHNyZWYuY3VycmVudFxuICAgICAgbGV0IHN3aWR0aCA9IHR3XG4gICAgICBsZXQgc2hlaWdodCA9IHJsaCAqIDRcbiAgICAgIHMud2lkdGggPSBzd2lkdGggKiBkcHJcbiAgICAgIHMuaGVpZ2h0ID0gc2hlaWdodCAqIGRwclxuICAgICAgcy5zdHlsZS53aWR0aCA9IHN3aWR0aCArICdweCdcbiAgICAgIHMuc3R5bGUuaGVpZ2h0ID0gc2hlaWdodCArICdweCdcbiAgICAgIGxldCBzeCA9IHMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgc3guc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCByYW5rbGFiZWwgPSByYW5rbGFiZWxfcmVmLmN1cnJlbnRcbiAgICAgIHJhbmtsYWJlbC5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuXG4gICAgICB2eC5maWxsU3R5bGUgPSAnI2VlZSdcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgaSA9IHIgKiBwYyArIGNcbiAgICAgICAgICBsZXQgeCA9IGMgKiAocHcgKyBzaXplICogNClcbiAgICAgICAgICBsZXQgeSA9IHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgdG9wXG4gICAgICAgICAgbGV0IHcgPSBwd1xuICAgICAgICAgIGxldCBoID0gcGhcbiAgICAgICAgICBwZGltW2ldID0gW3gsIHksIHcsIGhdXG4gICAgICAgICAgdnguZmlsbFJlY3QoeCwgeSwgdywgaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgJHRpdGxlcyA9IHRpdGxlX3JlZi5jdXJyZW50XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0ICR0ID0gJHRpdGxlcy5jaGlsZE5vZGVzW3IgKiBwYyArIGNdXG4gICAgICAgICAgJHQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgICAgICAgJHQuc3R5bGUudG9wID0gciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyAncHgnXG4gICAgICAgICAgJHQuc3R5bGUud2lkdGggPSBwdyArICdweCdcbiAgICAgICAgICAkdC5zdHlsZS5sZWZ0ID0gYyAqIChwdyArIHNpemUgKiA0KSArIGN3ICsgJ3B4J1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0dCA9IHRydXRodGl0bGVfcmVmLmN1cnJlbnRcbiAgICAgIHR0LnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG4gICAgICB0dC5zdHlsZS5sZWZ0ID0gY3cgKyAncHgnXG4gICAgICB0dC5zdHlsZS50b3AgPSAyICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArICdweCdcblxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkciA9ICRyZWFkLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkci5zdHlsZS50b3AgPVxuICAgICAgICAgICAgciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3AgKyBwaCArICdweCdcbiAgICAgICAgICAkci5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICRyLnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHRyZSA9IHRyZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICB0cmUuc3R5bGUud2lkdGggPSB0dyArICdweCdcbiAgICAgIHRyZS5zdHlsZS5sZWZ0ID0gY3cgKyAncHgnXG4gICAgICB0cmUuc3R5bGUudG9wID0gMiAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyBybGggKyAncHgnXG5cbiAgICAgIGxldCB0YiA9IHRvcGJhcl9yZWYuY3VycmVudFxuICAgICAgdGIuc3R5bGUud2lkdGggPSB0dyArICdweCdcblxuICAgICAgbGV0IGljb24gPSBpY29uX3JlZi5jdXJyZW50XG4gICAgICBpY29uLndpZHRoID0gY3cgKiBkcHJcbiAgICAgIGljb24uaGVpZ2h0ID0gcmxoICogMS41ICogZHByXG4gICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgIGl4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBoYW5kbGVyX3JlZi5jdXJyZW50ID0gckludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICB9KVxuICAgICAgfSwgODApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQuY2xlYXIoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2RhdGFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYW5lbHMgPSBwYW5lbHNfcmVmLmN1cnJlbnRcbiAgICAgIGxldCAkcmVhZCA9IHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGxldCB0cnV0aCA9IHRydXRoX3JlZi5jdXJyZW50XG4gICAgICBsZXQgJHRydXRoID0gdHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuICAgICAgbGV0IHZ4ID0gdi5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgIC8vIHVwZGF0ZSBwYW5lbCBkYXRhXG4gICAgICBsZXQgcGFuZWxfa2V5cyA9IFsyMSwgMjAsIDIxLCAyMF1cbiAgICAgIGxldCByZWNvcmQgPSBkYXRhLmRhdGFbZnJhbWVdXG4gICAgICBsZXQgYW5vbWFseSA9IHJlY29yZFsxOV0gPT09IDEgPyB0cnVlIDogZmFsc2VcblxuICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICAgIHRydXRoWzBdKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgICB0cnV0aFsxXSsrXG4gICAgICB9XG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzBdXG4gICAgICAkdHJ1dGguY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHRydXRoWzFdXG5cbiAgICAgIGxldCBwYyA9IHBkaW1bMF1bMl0gLyBzaXplXG4gICAgICBsZXQgcHIgPSBwZGltWzBdWzNdIC8gc2l6ZVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgICAgbGV0IGRldGVjdGVkID0gcmVjb3JkW3BhbmVsX2tleXNbaV1dXG5cbiAgICAgICAgbGV0IHAxeCwgcDF5XG4gICAgICAgIC8vIFRQIEZQIFROIEZOXG4gICAgICAgIGlmIChkZXRlY3RlZCA+IDAuMSkge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzBdICsgcGFuZWxzW2ldWzFdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSBNYXRoLmZsb29yKG4gLyBwcikgKiBzaXplXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIHRydWUgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMF0rK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBwb3NcbiAgICAgICAgICAgIHBhbmVsc1tpXVsxXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzJdICsgcGFuZWxzW2ldWzNdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSAocGMgLSBNYXRoLmZsb29yKG4gLyBwcikgLSAxKSAqIHNpemUgLSAxXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIGZhbHNlIG5lZ1xuICAgICAgICAgICAgcGFuZWxzW2ldWzNdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJ1ZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVsyXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpbSA9IHBkaW1baV1cbiAgICAgICAgdnguZmlsbFJlY3QoZGltWzBdICsgcDF4LCBkaW1bMV0gKyBwMXksIHNpemUgKyAxLCBzaXplICsgMSlcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICRyZWFkLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHBhbmVsW2pdXG4gICAgICAgIH1cblxuICAgICAgICAvL2FjY3VyYWN5ID0gKFRQK1ROKS8oVFArVE4rRlArRk4pXG4gICAgICAgIGxldCBhY2N1cmFjeSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgKChwYW5lbFswXSArIHBhbmVsWzJdKSAvXG4gICAgICAgICAgICAocGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM10pKSAqXG4gICAgICAgICAgICAxMDBcbiAgICAgICAgKVxuICAgICAgICAvLyBwcmVjaXNpb24gdHAgLyAodHAgKyBmcClcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbMV0pKSAqIDEwMClcblxuICAgICAgICAvLyByZWNhbGwgdHAgLyAodHAgKyBmbilcbiAgICAgICAgbGV0IHJlY2FsbCA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbM10pKSAqIDEwMClcblxuICAgICAgICAvLyA0IDUgNlxuICAgICAgICBwYW5lbHNbaV1bNF0gPSBhY2N1cmFjeVxuICAgICAgICBwYW5lbHNbaV1bNV0gPSBwcmVjaXNpb25cbiAgICAgICAgcGFuZWxzW2ldWzZdID0gcmVjYWxsXG4gICAgICB9XG5cbiAgICAgIGxldCB2aGVpZ2h0ID0gdi5oZWlnaHQgLyBkcHJcbiAgICAgIGxldCBbdHcsIHRoXSA9IHRkaW1fcmVmLmN1cnJlbnRcbiAgICAgIHZ4LmNsZWFyUmVjdCgwLCB2aGVpZ2h0IC0gcmxoICogMiAtIDEsIHR3LCBybGggKyAyKVxuICAgICAgbGV0IHNwbGl0ID0gdHJ1dGhbMV0gLyAodHJ1dGhbMF0gKyB0cnV0aFsxXSlcbiAgICAgIHZ4LmZpbGxTdHlsZSA9IHJlZFxuICAgICAgdnguZmlsbFJlY3QoMCwgdmhlaWdodCAtIHJsaCAqIDEuNSwgdHcgLSB0dyAqIHNwbGl0LCBybGgpXG4gICAgICB2eC5maWxsU3R5bGUgPSBzY2hlbWUuYmdcbiAgICAgIHZ4LmZpbGxSZWN0KHR3IC0gdHcgKiBzcGxpdCAtIDEsIHZoZWlnaHQgLSBybGggKiAxLjUsIHR3ICogc3BsaXQsIHJsaClcblxuICAgICAgLy8gc2V0IHJhbmtpbmdzXG4gICAgICB7XG4gICAgICAgIGxldCAkcnMgPSByYW5rcmVmLmN1cnJlbnQuY2hpbGROb2Rlc1xuICAgICAgICBsZXQgcyA9IHNyZWYuY3VycmVudFxuICAgICAgICBsZXQgc3ggPSBzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgc3guZmlsbFN0eWxlID0gc2NoZW1lLmZnXG4gICAgICAgIHN4LmNsZWFyUmVjdCgwLCAwLCBzLndpZHRoIC8gZHByLCBzLmhlaWdodCAvIGRwcilcblxuICAgICAgICBsZXQgcmFua19yb3dzID0gbmFtZXMubWFwKChuLCBpKSA9PiB7XG4gICAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW2ldXG4gICAgICAgICAgcmV0dXJuIFtpLCBuLCBwYW5lbFs0XSwgcGFuZWxbNV0sIHBhbmVsWzZdXVxuICAgICAgICB9KVxuICAgICAgICByYW5rX3Jvd3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGJbMl0gLSBhWzJdXG4gICAgICAgIH0pXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua19yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICAgICAgbGV0IFtUUCwgRlAsIFROLCBGTl0gPSBwYW5lbFxuICAgICAgICAgIGxldCAkciA9ICRyc1tpXVxuICAgICAgICAgIGxldCB0b3RhbCA9IHBhbmVsWzBdICsgcGFuZWxbMV0gKyBwYW5lbFsyXSArIHBhbmVsWzNdXG4gICAgICAgICAgJHIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmJhY2tncm91bmQgPSBiZ3Nbcm93WzBdXVxuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lckhUTUwgPSByb3dbMV1cbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzJdICsgJyUgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgKCR7VFB9KyR7VE59KS8ke3RvdGFsfWBcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzNdICsgJyUgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7RlB9KWBcbiAgICAgICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gcm93WzRdICsgJyUgJ1xuICAgICAgICAgICRyLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBgJHtUUH0vKCR7VFB9KyR7Rk59KWBcblxuICAgICAgICAgIGxldCB4c3RlcCA9IHMud2lkdGggLyBkcHIgLyA0XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gKGMgKyAxKSAqIHhzdGVwXG4gICAgICAgICAgICBsZXQgeSA9IGkgKiBybGhcbiAgICAgICAgICAgIGxldCB3ID0gKHJvd1tjICsgMl0gLyAxMDApICogeHN0ZXAgLSBjd1xuICAgICAgICAgICAgbGV0IGggPSBybGggKyAxXG4gICAgICAgICAgICBzeC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaXguY2xlYXJSZWN0KDAsIDAsIGN3LCBybGgpXG4gICAgICAgIGxldCBzdGVwID0gKHJsaCAqIDEuNSkgLyA0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFua19yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICAgICAgbGV0IHkgPSBpICogc3RlcFxuICAgICAgICAgIGxldCB3ID0gKHBhbmVsWzRdIC8gMTAwKSAqIGN3XG4gICAgICAgICAgaXguZmlsbFN0eWxlID0gYmdzW3Jvd1swXV1cbiAgICAgICAgICBpeC5maWxsUmVjdCgwLCB5LCB3LCBzdGVwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YSwgZnJhbWVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBzZXREcHIoZHByKVxuXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHNwYWNlID0gcC5vZmZzZXRXaWR0aFxuICAgIGxldCBwbGVmdCA9IHAub2Zmc2V0TGVmdFxuICAgIHNldFBzcGFjZShwc3BhY2UpXG4gICAgc2V0UGxlZnQocGxlZnQpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdzYW1wbGVkLmpzb24nKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKF9kYXRhID0+IHtcbiAgICAgICAgc2V0RGF0YShfZGF0YSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxY2gnLCBwYWRkaW5nUmlnaHQ6ICcxY2gnIH19PlxuICAgICAgICA8ZGl2IHJlZj17cHJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjYmJiJyxcbiAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXt0b3BiYXJfcmVmfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzIuNWNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtpY29uX3JlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICB3aWR0aDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjVjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQU5PTUFMXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0IH19PkluZm88L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkYXRhID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+Q09OTkVDVElPTlM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzFjaCcgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzc3NycgfX0+e2ZyYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWluV2lkdGg6IDYgKiAxOSArIDEgKyAnY2gnIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZ1JpZ2h0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgICB7a2V5X2Rlcy5tYXAoKGssIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17a1swXSArICc6ICcgKyBrWzJdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtrWzFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGggKiA0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoZnJhbWUgLSA0LCBmcmFtZSlcbiAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkLnNsaWNlKDAsIDE5KS5tYXAoKGQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ogPT09IDAgPyBmcmFtZSArIGkgOiBkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTVFJBVEVHSUVTXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyYW5rbGFiZWxfcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlJhbmtpbmc8L2Rpdj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFsnQWNjdXJhY3knLCAnKFRQK1ROKS9BTEwnXSxcbiAgICAgICAgICAgICAgWydQcmVjaXNpb24nLCAnVFAvKFRQK0ZQKSddLFxuICAgICAgICAgICAgICBbJ1JlY2FsbCcsICdUUC8oVFArRk4pJ10sXG4gICAgICAgICAgICBdLm1hcChuID0+IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHtuWzBdfXsnICd9XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCwgZm9udFN0eWxlOiAnbm9ybWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtuWzFdfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzFjaCcsIHRvcDogMCB9fVxuICAgICAgICAgICAgICByZWY9e3NyZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiByZWY9e3JhbmtyZWZ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKG4sIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZJU1VBTElaRURcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17dnJlZn0gc3R5bGU9e3sgbGVmdDogMCwgdG9wOiAwIH19IC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXt0aXRsZV9yZWZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e3JlYWRvdXRfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIFBvcycsIHJlZF0sXG4gICAgICAgICAgICAgICAgICAgIFsnRmFsc2UgUG9zJywgYmxhY2tdLFxuICAgICAgICAgICAgICAgICAgICBbJ1RydWUgTmVnJywgYmxhY2tdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIE5lZycsIHJlZF0sXG4gICAgICAgICAgICAgICAgICBdLm1hcCgobywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luTGVmdDogaSA9PT0gMiA/ICcxY2gnIDogMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b1swXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RydXRodGl0bGVfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+REFUQSBCQUxBTkNFPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0cmVhZG91dF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19PkFub21hbGllczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICBOb3JtYWxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQW5vbWFsIGlzIGFuIGFub21hbHkgZGV0ZWN0aW9uIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNsb3VkZXJhIEZhc3QgRm9yd2FyZDwvYT4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMCB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMS4yNWNoJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEuMjVjaCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlNwZWVkOjwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICB7JzEyMzQ1Nicuc3BsaXQoJycpLm1hcChpID0+XG4gICAgICAgICAgICAgICAgaSA9PSA2ID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyc+J31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24+eydQYXVzZSd9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmc31weDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaH07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.baae1b3f4b52369e78c7.hot-update.js.map