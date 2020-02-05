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
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");





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
  return Math.max(c.length, t);
}, 0);
var size = 4;
var termheight = 4;
var sort_options = ['accuracy', 'precision', 'recall'];
var finish_line = 10000;
function Index() {
  var _ref, _ref2;

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
  var ranksref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n) {
    return Object(react__WEBPACK_IMPORTED_MODULE_6__["createRef"])();
  }));
  var pdim_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      info = _useState9[0],
      setInfo = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      sort = _useState10[0],
      setSort = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      finish = _useState11[0],
      setFinish = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(names.slice()),
      ranks = _useState12[0],
      setRanks = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (data !== null) {
      // set layout
      var v = vref.current;
      var vwidth = pspace - 8;
      v.width = vwidth * dpr;
      v.style.marginLeft = pleft + 'px';
      var vx = v.getContext('2d');
      var pdim = pdim_ref.current;
      var stacked = false;
      var lc = 2;
      if (window.innerWidth <= 801) stacked = true;
      if (window.innerWidth <= 801) lc = 1;
      var columns = Math.floor(v.width / size);
      var panel_columns = Math.min(Math.floor(Math.floor((v.width / dpr - (stacked ? 0 : size * 4)) / size) / lc), 300);
      var panel_rows = Math.ceil(10000 / (panel_columns - 3));
      var pw = panel_columns * size;
      var ph = panel_rows * size;
      var pc = lc;
      var pr = 4 / lc;
      var top = rlh;
      var bottom = rlh * 2;
      var bottom_space = rlh / 2;
      var tc = panel_columns * lc + (stacked ? 0 : 4);
      var tr = Math.ceil(10000 / (columns - 1));
      var tw = tc * size;
      var th = tr * size;
      var vheight = (top + ph + bottom + bottom_space) * pr;
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
      var $rank = rankref.current;
      var ranking_width = Math.max(ch * 74, tw);
      $rank.style.width = ranking_width - cw + 'px';
      ranklabel_ref.current.style.width = ranking_width - cw + 'px';

      for (var _r3 = 0; _r3 < ranksref.current.length; _r3++) {
        ranksref.current[_r3].current.childNodes[0].width = ranking_width - cw;
        ranksref.current[_r3].current.childNodes[0].height = rlh + 1;
      }

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

  function processFrame(frame) {
    if (frame < data.length && frame < finish_line - 1) {
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
      hx.clearRect(0, 0, h.width / dpr, h.height / dpr);

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

      setRankings();
    } // finish line


    if (frame >= finish_line - 1) {
      window.clearRInterval(handler_ref.current);
      setFinish(true);
      setPause(true);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (data !== null) {
      processFrame(frame);
    }
  }, [data, frame]);

  function setRankings() {
    var panels = panels_ref.current; // set rankings

    var rank_rows = names.map(function (n, i) {
      var panel = panels[i];
      return [i, n, panel[4], panel[5], panel[6]];
    });

    for (var r = 0; r < names.length; r++) {
      var $r = ranksref.current[r].current;
      var rc = $r.childNodes[0];
      var rcx = rc.getContext('2d');
      rcx.clearRect(0, 0, rc.width, rlh);
      var row = rank_rows[r];
      var h = rlh + 1;
      rcx.fillStyle = '#ccc';
      var xstep = rc.width / 4;

      for (var c = 0; c < 3; c++) {
        var x = (c + 1) * xstep;
        var w = row[c + 2] / 100 * xstep - cw;
        if (w <= 0) w = 0;
        rcx.fillRect(x, 0, w, h);
      }

      var panel = panels[row[0]];

      var _panel = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(panel, 4),
          TP = _panel[0],
          FP = _panel[1],
          TN = _panel[2],
          FN = _panel[3];

      var total = panel[0] + panel[1] + panel[2] + panel[3];
      $r.childNodes[2].childNodes[0].innerHTML = !isNaN(row[2]) ? row[2] + '% ' : 'N/A ';
      $r.childNodes[2].childNodes[1].innerHTML = "(".concat(TP, "+").concat(TN, ")/").concat(total);
      $r.childNodes[3].childNodes[0].innerHTML = !isNaN(row[3]) ? row[3] + '% ' : 'N/A ';
      $r.childNodes[3].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FP, ")");
      $r.childNodes[4].childNodes[0].innerHTML = !isNaN(row[4]) ? row[4] + '% ' : 'N/A ';
      $r.childNodes[4].childNodes[1].innerHTML = "".concat(TP, "/(").concat(TP, "+").concat(FN, ")");
    }

    rank_rows.sort(function (a, b) {
      return b[2 + sort] - a[2 + sort];
    });
    var icon = icon_ref.current;
    var ix = icon.getContext('2d');
    ix.clearRect(0, 0, cw, rlh);
    var step = rlh * 1.5 / 4;

    for (var i = 0; i < rank_rows.length; i++) {
      var _row = rank_rows[i];
      var _panel2 = panels[_row[0]];
      var y = i * step;

      var _w = _panel2[4] / 100 * cw;

      ix.fillStyle = bgs[_row[0]];
      ix.fillRect(0, y, _w, step);
    }

    setRanks(rank_rows.map(function (o) {
      return o[1];
    }));
  }

  function skipFinish() {
    if (handler_ref.current !== null) {
      window.clearRInterval(handler_ref.current);
    }

    for (var i = frame; i < finish_line - 1; i++) {
      processFrame(i);
    }

    setFrame(finish_line - 1);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (data !== null) {
      setRankings();
    }
  }, [sort]);
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

      var shuffled = lodash__WEBPACK_IMPORTED_MODULE_10__["shuffle"](formatted);

      setData(shuffled);
    });
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
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
      lineNumber: 524
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
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
      lineNumber: 527
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
      lineNumber: 536
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
      lineNumber: 543
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
      lineNumber: 553
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    onClick: function onClick() {
      setInfo(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
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
      lineNumber: 572
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, Math.min(frame, finish_line - 1) + 1))), __jsx("div", {
    style: {
      width: '100%',
      overflow: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, data.slice(Math.max(Math.min(frame, finish_line - 1) - termheight + 1, 0), Math.min(frame, finish_line - 1) + 1).reverse().map(function (d, i) {
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
        lineNumber: 639
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
        lineNumber: 647
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
        lineNumber: 657
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
        lineNumber: 665
      },
      __self: this
    }, Math.min(frame, finish_line - 1) + (termheight - i) - termheight)), d.slice(0, 18).map(function (d, j) {
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
          lineNumber: 678
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
          lineNumber: 686
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
      lineNumber: 702
    },
    __self: this
  }, "STRATEGIES"), __jsx("div", {
    style: {
      overflowX: 'auto',
      overflowY: 'hidden'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711
    },
    __self: this
  }, __jsx("div", {
    ref: ranklabel_ref,
    style: {
      marginLeft: '1ch',
      fontStyle: 'italic',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
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
        lineNumber: 738
      },
      __self: this
    }, sort === i ? __jsx("span", {
      title: "Rankings sorted by ".concat(sort_options[i]),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740
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
        lineNumber: 744
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
        lineNumber: 754
      },
      __self: this
    }, n[1]));
  })), __jsx("div", {
    ref: rankref,
    style: {
      position: 'relative',
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n, i) {
    return __jsx("div", {
      style: {},
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772
      },
      __self: this
    }, i + 1);
  })), __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: this
  }, ranks.map(function (name, i) {
    return __jsx("div", {
      key: name,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777
      },
      __self: this
    }, __jsx("div", {
      ref: ranksref.current[names.indexOf(name)],
      style: {
        display: 'flex',
        position: 'relative'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778
      },
      __self: this
    }, __jsx("canvas", {
      style: {
        position: 'absolute',
        left: 0,
        top: 0
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785
      },
      __self: this
    }), __jsx("div", {
      style: {
        width: '100%',
        position: 'relative'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 792
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: 'inline-block',
        marginLeft: '2ch',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch',
        background: bgs[names.indexOf(name)]
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793
      },
      __self: this
    }, name)), __jsx("div", {
      style: {
        width: '100%',
        position: 'relative'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805
      },
      __self: this
    }, __jsx("span", {
      style: {
        display: 'inline-block',
        marginRight: '0.5ch',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814
      },
      __self: this
    })), __jsx("div", {
      style: {
        width: '100%',
        position: 'relative'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816
      },
      __self: this
    }, __jsx("span", {
      style: {
        display: 'inline-block',
        marginRight: '0.5ch',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 825
      },
      __self: this
    })), __jsx("div", {
      style: {
        width: '100%',
        position: 'relative'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 827
      },
      __self: this
    }, __jsx("span", {
      style: {
        display: 'inline-block',
        marginRight: '0.5ch',
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 828
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836
      },
      __self: this
    }))));
  })))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      marginTop: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: this
  }, "VISUALIZED"), __jsx("div", {
    style: {
      position: 'relative',
      overflowX: 'auto'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
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
      lineNumber: 856
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
      lineNumber: 860
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
        lineNumber: 865
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
      lineNumber: 876
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
        lineNumber: 885
      },
      __self: this
    }, [['True Positive', red], ['False Positive', black], ['True Negative', black], ['False Negative', red]].map(function (o, i) {
      return __jsx("div", {
        style: {
          width: 'calc(25% - 0.25ch)',
          marginLeft: i === 2 ? '1ch' : 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 892
        },
        __self: this
      }, __jsx("div", {
        style: {
          background: scheme.fg,
          fontStyle: 'italic',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898
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
          lineNumber: 909
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
      lineNumber: 924
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933
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
      lineNumber: 938
    },
    __self: this
  }, frame + 1 <= finish_line - 1 ? __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956
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
      lineNumber: 957
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
        lineNumber: 973
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
        lineNumber: 982
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
      lineNumber: 996
    },
    __self: this
  }, '>')) : null, frame + 1 <= finish_line - 1 ? pause ? __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      setPause(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013
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
      lineNumber: 1022
    },
    __self: this
  }, "Pause") : null, pause && frame + 1 <= finish_line - 1 ? __jsx("button", {
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
      lineNumber: 1033
    },
    __self: this
  }, "Tick") : null, pause && frame + 1 <= finish_line - 1 ? __jsx("button", {
    style: {
      marginLeft: '2ch'
    },
    onClick: function onClick() {
      skipFinish();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045
    },
    __self: this
  }, "Skip to finish") : null), info ? __jsx("div", {
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
      lineNumber: 1056
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    style: {
      width: '80ch',
      maxWidth: 'calc(100% - 2ch)',
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
      lineNumber: 1070
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
      lineNumber: 1085
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093
    },
    __self: this
  }, "Info"), __jsx("button", {
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094
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
      lineNumber: 1102
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
      lineNumber: 1112
    },
    __self: this
  }, "Blip is a prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114
    },
    __self: this
  }, "Cloudera Fast Forward"), ' ', "built to accompany our", ' ', __jsx("a", {
    href: "https://ff12.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1118
    },
    __self: this
  }, "report on Deep Learning for Anomaly Detection"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123
    },
    __self: this
  }, "Blip shows how four different algorithms (", names.map(function (n, i) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126
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
        lineNumber: 1127
      },
      __self: this
    }, n), i != names.length - 1 ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1136
      },
      __self: this
    }, ", ") : null);
  }), ") perform at detecting network attacks in the", ' ', __jsx("a", {
    href: "http://kdd.ics.uci.edu/databases/kddcup99/task.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140
    },
    __self: this
  }, "KDD network intrusion dataset"), ". You can read about how each model was trained in the", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144
    },
    __self: this
  }, "protototype section of our report"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146
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
      lineNumber: 1148
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
      lineNumber: 1161
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
      lineNumber: 1171
    },
    __self: this
  }, "normal"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183
    },
    __self: this
  }, "The STRATEGIES section shows metrics on how each algorithm is peforming on the incoming data. You can see the accuracy, recall, and precision metrics for each strategy."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188
    },
    __self: this
  }, "The VISUALIZED section provides another view of each strategy's performance. Each connection is visualized as a square. If it is classified as an attack it is placed on the left; if classified normal, it is placed on the right. The color reveals its true status. Over time the density and position of the colors in each strategy visualization give you a feel for the different models strengths and weaknesses."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198
    },
    __self: this
  }, "The simulation will run through 10,000 connections before finishing. You can control the speed of the simulation with the controls at the bottom."), frame != finish_line - 1 ? __jsx("div", {
    style: {
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204
    },
    __self: this
  }, __jsx("button", {
    style: {},
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205
    },
    __self: this
  }, frame > 1 ? 'Continue' : 'Start', " the simulation")) : null))) : null, finish ? __jsx("div", {
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
      lineNumber: 1220
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    style: (_ref2 = {
      width: '80ch',
      maxWidth: 'calc(100% - 2ch)',
      background: scheme.bg
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "background", scheme.bg), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "color", scheme.fg), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginLeft", 'auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginRight", 'auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginTop", rlh * 1.5), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginBottom", rlh * 1.5), _ref2),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234
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
      lineNumber: 1250
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1258
    },
    __self: this
  }, "Finished"), __jsx("button", {
    onClick: function onClick() {
      setFinish(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1259
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
      lineNumber: 1267
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1277
    },
    __self: this
  }, "After ", finish_line, " connections, you've reached the end of the anomaly detection simulation."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281
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
      lineNumber: 1285
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
        lineNumber: 1292
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
      lineNumber: 1296
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
        lineNumber: 1306
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1307
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
        lineNumber: 1309
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
          lineNumber: 1322
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
          lineNumber: 1329
        },
        __self: this
      }), __jsx("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1339
        },
        __self: this
      }, v, "%"));
    }));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1346
    },
    __self: this
  }, "Read more about the models and their performance on the full dataset in", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1349
    },
    __self: this
  }, "the prototype section of our report"), ".")))) : null) : __jsx("div", {
    style: {
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2,
      paddingLeft: cw,
      paddingRight: cw
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1357
    },
    __self: this
  }, "Loading dataset..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdTFDeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9jb21wb25lbnRzL2FnZW50J1xuaW1wb3J0IHsga2V5X2RlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJ1xuXG5sZXQgc2NoZW1lID0ge1xuICBuYW1lOiAnUGFyYWlzbyBEYXJrJyxcbiAgYmc6ICcjMmYxZTJlJyxcbiAgZmc6ICcjYmZiZmJmJyxcbiAgbGlnaHQ6ICcjNzc3JyxcbiAgaHVlczogWycjZWY2MTU1JywgJyM2NUQ2QTMnLCAnI2ZlYzQxOCcsICcjNTNEMUZBJywgJyNCQjkxRTInLCAnIzViYzRiZiddLFxufVxubGV0IHJlZCA9IHNjaGVtZS5odWVzWzBdXG5sZXQgZ3JlZW4gPSBzY2hlbWUuaHVlc1sxXVxubGV0IHllbGxvdyA9IHNjaGVtZS5odWVzWzJdXG5sZXQgdGVhbCA9IHNjaGVtZS5odWVzWzNdXG5sZXQgcHVycGxlID0gc2NoZW1lLmh1ZXNbNF1cbmxldCBibHVlID0gc2NoZW1lLmh1ZXNbNV1cbmxldCBiZ3MgPSBbeWVsbG93LCB0ZWFsLCBncmVlbiwgcHVycGxlXVxubGV0IGJsYWNrID0gc2NoZW1lLmJnXG5cbmxldCBmcyA9IDEzXG5sZXQgbGggPSAxLjVcbmxldCBjaCA9IDkuNTk5OTkwODQ0NzI2NTYyXG5sZXQgY3cgPSA4XG5sZXQgcmxoID0gZnMgKiBsaFxubGV0IGNlbGwgPSB7IHc6IGNoLCBoOiBybGggLyAyIH1cblxubGV0IHNwZWVkcyA9IFs2NDAgKiAyLCA2NDAsIDMyMCwgODAsIDQwLCAyMF1cblxubGV0IG5hbWVzID0gWydPQ1NWTScsICdBdXRvZW5jb2RlcicsICdWYXIgQXV0b2VuY29kZXInLCAnQmlHQU4nXVxuXG5sZXQgbmFtZV9tYXggPSBuYW1lcy5yZWR1Y2UoKHQsIGMpID0+IHtcbiAgcmV0dXJuIE1hdGgubWF4KGMubGVuZ3RoLCB0KVxufSwgMClcblxubGV0IHNpemUgPSA0XG5cbmxldCB0ZXJtaGVpZ2h0ID0gNFxuXG5sZXQgc29ydF9vcHRpb25zID0gWydhY2N1cmFjeScsICdwcmVjaXNpb24nLCAncmVjYWxsJ11cblxubGV0IGZpbmlzaF9saW5lID0gMTAwMDBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgaGFuZGxlcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHZyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGhyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJhbmtyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtmcmFtZSwgc2V0RnJhbWVdID0gdXNlU3RhdGUoMClcbiAgbGV0IFtwc3BhY2UsIHNldFBzcGFjZV0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW3BsZWZ0LCBzZXRQbGVmdF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgcGFuZWxzX3JlZiA9IHVzZVJlZihbLi4uQXJyYXkoNCldLm1hcChuID0+IFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gMCkpKVxuICBsZXQgcmFua3NyZWYgPSB1c2VSZWYoWy4uLkFycmF5KDQpXS5tYXAobiA9PiBjcmVhdGVSZWYoKSkpXG4gIGxldCBwZGltX3JlZiA9IHVzZVJlZihbXSlcbiAgbGV0IHRpdGxlX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmVhZG91dF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRydXRoX3JlZiA9IHVzZVJlZihbMCwgMF0pXG4gIGxldCB0cmVhZG91dF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJhbmtsYWJlbF9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRvcGJhcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtkcHIsIHNldERwcl0gPSB1c2VTdGF0ZSgxKVxuICBsZXQgaWNvbl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IGNvbl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IFtzcGVlZCwgc2V0U3BlZWRdID0gdXNlU3RhdGUoMylcbiAgbGV0IFtpbml0U3BlZWQsIHNldEluaXRTcGVlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZSh0cnVlKVxuICBsZXQgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoMClcbiAgbGV0IFtmaW5pc2gsIHNldEZpbmlzaF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtyYW5rcywgc2V0UmFua3NdID0gdXNlU3RhdGUobmFtZXMuc2xpY2UoKSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbGF5b3V0XG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuXG4gICAgICBsZXQgdndpZHRoID0gcHNwYWNlIC0gOFxuICAgICAgdi53aWR0aCA9IHZ3aWR0aCAqIGRwclxuICAgICAgdi5zdHlsZS5tYXJnaW5MZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgc3RhY2tlZCA9IGZhbHNlXG4gICAgICBsZXQgbGMgPSAyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gODAxKSBzdGFja2VkID0gdHJ1ZVxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMSkgbGMgPSAxXG5cbiAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih2LndpZHRoIC8gc2l6ZSlcbiAgICAgIGxldCBwYW5lbF9jb2x1bW5zID0gTWF0aC5taW4oXG4gICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5mbG9vcigodi53aWR0aCAvIGRwciAtIChzdGFja2VkID8gMCA6IHNpemUgKiA0KSkgLyBzaXplKSAvIGxjXG4gICAgICAgICksXG4gICAgICAgIDMwMFxuICAgICAgKVxuICAgICAgbGV0IHBhbmVsX3Jvd3MgPSBNYXRoLmNlaWwoMTAwMDAgLyAocGFuZWxfY29sdW1ucyAtIDMpKVxuXG4gICAgICBsZXQgcHcgPSBwYW5lbF9jb2x1bW5zICogc2l6ZVxuICAgICAgbGV0IHBoID0gcGFuZWxfcm93cyAqIHNpemVcblxuICAgICAgbGV0IHBjID0gbGNcbiAgICAgIGxldCBwciA9IDQgLyBsY1xuXG4gICAgICBsZXQgdG9wID0gcmxoXG4gICAgICBsZXQgYm90dG9tID0gcmxoICogMlxuICAgICAgbGV0IGJvdHRvbV9zcGFjZSA9IHJsaCAvIDJcblxuICAgICAgbGV0IHRjID0gcGFuZWxfY29sdW1ucyAqIGxjICsgKHN0YWNrZWQgPyAwIDogNClcbiAgICAgIGxldCB0ciA9IE1hdGguY2VpbCgxMDAwMCAvIChjb2x1bW5zIC0gMSkpXG4gICAgICBsZXQgdHcgPSB0YyAqIHNpemVcbiAgICAgIGxldCB0aCA9IHRyICogc2l6ZVxuXG4gICAgICBsZXQgdmhlaWdodCA9ICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKiBwclxuICAgICAgdi5oZWlnaHQgPSB2aGVpZ2h0ICogZHByXG5cbiAgICAgIHYuc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICB2LnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIHZ4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgaCA9IGhyZWYuY3VycmVudFxuICAgICAgaC53aWR0aCA9IHYud2lkdGhcbiAgICAgIGguaGVpZ2h0ID0gdi5oZWlnaHRcbiAgICAgIGguc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICBoLnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIGxldCBoeCA9IGguZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaHguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIHZ4LmZpbGxTdHlsZSA9ICcjZWVlJ1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCBpID0gciAqIHBjICsgY1xuICAgICAgICAgIGxldCB4ID0gYyAqIChwdyArIHNpemUgKiA0KVxuICAgICAgICAgIGxldCB5ID0gciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3BcbiAgICAgICAgICBsZXQgdyA9IHB3XG4gICAgICAgICAgbGV0IGggPSBwaFxuICAgICAgICAgIHBkaW1baV0gPSBbeCwgeSwgdywgaF1cbiAgICAgICAgICB2eC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCAkdGl0bGVzID0gdGl0bGVfcmVmLmN1cnJlbnRcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgJHQgPSAkdGl0bGVzLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkdC5zdHlsZS50b3AgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArICdweCdcbiAgICAgICAgICAkdC5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkciA9ICRyZWFkLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkci5zdHlsZS50b3AgPVxuICAgICAgICAgICAgciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3AgKyBwaCArICdweCdcbiAgICAgICAgICAkci5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICRyLnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHRiID0gdG9wYmFyX3JlZi5jdXJyZW50XG4gICAgICB0Yi5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuXG4gICAgICBsZXQgJHJhbmsgPSByYW5rcmVmLmN1cnJlbnRcbiAgICAgIGxldCByYW5raW5nX3dpZHRoID0gTWF0aC5tYXgoY2ggKiA3NCwgdHcpXG4gICAgICAkcmFuay5zdHlsZS53aWR0aCA9IHJhbmtpbmdfd2lkdGggLSBjdyArICdweCdcbiAgICAgIHJhbmtsYWJlbF9yZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IHJhbmtpbmdfd2lkdGggLSBjdyArICdweCdcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcmFua3NyZWYuY3VycmVudC5sZW5ndGg7IHIrKykge1xuICAgICAgICByYW5rc3JlZi5jdXJyZW50W3JdLmN1cnJlbnQuY2hpbGROb2Rlc1swXS53aWR0aCA9IHJhbmtpbmdfd2lkdGggLSBjd1xuICAgICAgICByYW5rc3JlZi5jdXJyZW50W3JdLmN1cnJlbnQuY2hpbGROb2Rlc1swXS5oZWlnaHQgPSBybGggKyAxXG4gICAgICB9XG5cbiAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgaWNvbi53aWR0aCA9IGN3ICogZHByXG4gICAgICBpY29uLmhlaWdodCA9IHJsaCAqIDEuNSAqIGRwclxuICAgICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoXG4gICAgICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICBmdW5jdGlvbigvKiBmdW5jdGlvbiAqLyBjYWxsYmFjaywgLyogRE9NRWxlbWVudCAqLyBlbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSkoKVxuXG4gICAgICAvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNnaXN0Y29tbWVudC0xOTUzOTI1XG4gICAgICAvKipcbiAgICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgc2V0SW50ZXJ2YWwgZXhjZXB0IHVzZXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgICAgICovXG4gICAgICB3aW5kb3cuckludGVydmFsID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICF3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICApICYmIC8vIEZpcmVmb3ggNSBzaGlwcyB3aXRob3V0IGNhbmNlbCBzdXBwb3J0XG4gICAgICAgICAgIXdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChmbiwgZGVsYXkpXG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGVsdGEgPSBjdXJyZW50IC0gc3RhcnRcblxuICAgICAgICAgIGlmIChkZWx0YSA+PSBkZWxheSkge1xuICAgICAgICAgICAgZm4uY2FsbCgpXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBjbGVhckludGVydmFsIGV4Y2VwdCB1c2VzIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHdoZXJlIHBvc3NpYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAqIEBwYXJhbSB7aW50fG9iamVjdH0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbCA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgICAgICAgICBoYW5kbGUudmFsdWVcbiAgICAgICAgICAgICkgLyogU3VwcG9ydCBmb3IgbGVnYWN5IEFQSSAqL1xuICAgICAgICAgIDogd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogY2xlYXJJbnRlcnZhbChoYW5kbGUpXG4gICAgICB9XG5cbiAgICAgIGlmICghcGF1c2UgJiYgIWluZm8pIHtcbiAgICAgICAgaGFuZGxlcl9yZWYuY3VycmVudCA9IHdpbmRvdy5ySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHNwZWVkc1tzcGVlZF0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRJbml0U3BlZWQodHJ1ZSlcbiAgfSwgW2RhdGFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRTcGVlZCAhPSBmYWxzZSkge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgICBpZiAoIXBhdXNlICYmICFpbmZvKSB7XG4gICAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSBySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHNwZWVkc1tzcGVlZF0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbc3BlZWQsIHBhdXNlLCBpbmZvXSlcblxuICBmdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWUpIHtcbiAgICBpZiAoZnJhbWUgPCBkYXRhLmxlbmd0aCAmJiBmcmFtZSA8IGZpbmlzaF9saW5lIC0gMSkge1xuICAgICAgbGV0IHBhbmVscyA9IHBhbmVsc19yZWYuY3VycmVudFxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgbGV0IHBkaW0gPSBwZGltX3JlZi5jdXJyZW50XG5cbiAgICAgIGxldCB2ID0gdnJlZi5jdXJyZW50XG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcblxuICAgICAgbGV0IGggPSBocmVmLmN1cnJlbnRcbiAgICAgIGxldCBoeCA9IGguZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAvLyB1cGRhdGUgcGFuZWwgZGF0YVxuICAgICAgbGV0IHBhbmVsX2tleXMgPSBbMTksIDIwLCAyMSwgMjJdXG4gICAgICBsZXQgcmVjb3JkID0gZGF0YVtmcmFtZV1cbiAgICAgIGxldCBhbm9tYWx5ID0gcmVjb3JkWzE4XSA9PT0gMSA/IHRydWUgOiBmYWxzZVxuXG4gICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICB2eC5maWxsU3R5bGUgPSByZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgfVxuXG4gICAgICBsZXQgcGMgPSBwZGltWzBdWzJdIC8gc2l6ZVxuICAgICAgbGV0IHByID0gcGRpbVswXVszXSAvIHNpemVcblxuICAgICAgaHguY2xlYXJSZWN0KDAsIDAsIGgud2lkdGggLyBkcHIsIGguaGVpZ2h0IC8gZHByKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgICAgbGV0IGRldGVjdGVkID0gcmVjb3JkW3BhbmVsX2tleXNbaV1dXG5cbiAgICAgICAgbGV0IHAxeCwgcDF5XG4gICAgICAgIC8vIFRQIEZQIFROIEZOXG4gICAgICAgIGlmIChkZXRlY3RlZCA+IDAuMSkge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzBdICsgcGFuZWxzW2ldWzFdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSBNYXRoLmZsb29yKG4gLyBwcikgKiBzaXplXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIHRydWUgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMF0rK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBwb3NcbiAgICAgICAgICAgIHBhbmVsc1tpXVsxXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzJdICsgcGFuZWxzW2ldWzNdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSAocGMgLSBNYXRoLmZsb29yKG4gLyBwcikgLSAxKSAqIHNpemUgLSAxXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIGZhbHNlIG5lZ1xuICAgICAgICAgICAgcGFuZWxzW2ldWzNdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJ1ZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVsyXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpbSA9IHBkaW1baV1cbiAgICAgICAgdnguZmlsbFJlY3QoZGltWzBdICsgcDF4LCBkaW1bMV0gKyBwMXksIHNpemUgKyAxLCBzaXplICsgMSlcblxuICAgICAgICAvLyBoeC5maWxsU3R5bGUgPSAnIzQzMzE0MidcbiAgICAgICAgaHguZmlsbFN0eWxlID0gYmdzW2ldXG4gICAgICAgIGh4LmZpbGxSZWN0KFxuICAgICAgICAgIGRpbVswXSArIHAxeCAtIDIsXG4gICAgICAgICAgZGltWzFdICsgcDF5IC0gMixcbiAgICAgICAgICBzaXplICsgMSArIDQsXG4gICAgICAgICAgc2l6ZSArIDEgKyA0XG4gICAgICAgIClcbiAgICAgICAgaHguZmlsbFN0eWxlID0gdnguZmlsbFN0eWxlXG4gICAgICAgIGh4LmZpbGxSZWN0KGRpbVswXSArIHAxeCwgZGltWzFdICsgcDF5LCBzaXplICsgMSwgc2l6ZSArIDEpXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAkcmVhZC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbal0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBwYW5lbFtqXVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hY2N1cmFjeSA9IChUUCtUTikvKFRQK1ROK0ZQK0ZOKVxuICAgICAgICBsZXQgYWNjdXJhY3kgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICgocGFuZWxbMF0gKyBwYW5lbFsyXSkgL1xuICAgICAgICAgICAgKHBhbmVsWzBdICsgcGFuZWxbMV0gKyBwYW5lbFsyXSArIHBhbmVsWzNdKSkgKlxuICAgICAgICAgICAgMTAwXG4gICAgICAgIClcbiAgICAgICAgLy8gcHJlY2lzaW9uIHRwIC8gKHRwICsgZnApXG4gICAgICAgIGxldCBwcmVjaXNpb24gPSBNYXRoLnJvdW5kKChwYW5lbFswXSAvIChwYW5lbFswXSArIHBhbmVsWzFdKSkgKiAxMDApXG5cbiAgICAgICAgLy8gcmVjYWxsIHRwIC8gKHRwICsgZm4pXG4gICAgICAgIGxldCByZWNhbGwgPSBNYXRoLnJvdW5kKChwYW5lbFswXSAvIChwYW5lbFswXSArIHBhbmVsWzNdKSkgKiAxMDApXG5cbiAgICAgICAgLy8gNCA1IDZcbiAgICAgICAgcGFuZWxzW2ldWzRdID0gYWNjdXJhY3lcbiAgICAgICAgcGFuZWxzW2ldWzVdID0gcHJlY2lzaW9uXG4gICAgICAgIHBhbmVsc1tpXVs2XSA9IHJlY2FsbFxuICAgICAgfVxuXG4gICAgICBzZXRSYW5raW5ncygpXG4gICAgfVxuXG4gICAgLy8gZmluaXNoIGxpbmVcbiAgICBpZiAoZnJhbWUgPj0gZmluaXNoX2xpbmUgLSAxKSB7XG4gICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgIHNldEZpbmlzaCh0cnVlKVxuICAgICAgc2V0UGF1c2UodHJ1ZSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBwcm9jZXNzRnJhbWUoZnJhbWUpXG4gICAgfVxuICB9LCBbZGF0YSwgZnJhbWVdKVxuXG4gIGZ1bmN0aW9uIHNldFJhbmtpbmdzKCkge1xuICAgIGxldCBwYW5lbHMgPSBwYW5lbHNfcmVmLmN1cnJlbnRcblxuICAgIC8vIHNldCByYW5raW5nc1xuICAgIGxldCByYW5rX3Jvd3MgPSBuYW1lcy5tYXAoKG4sIGkpID0+IHtcbiAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tpXVxuICAgICAgcmV0dXJuIFtpLCBuLCBwYW5lbFs0XSwgcGFuZWxbNV0sIHBhbmVsWzZdXVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCByID0gMDsgciA8IG5hbWVzLmxlbmd0aDsgcisrKSB7XG4gICAgICBsZXQgJHIgPSByYW5rc3JlZi5jdXJyZW50W3JdLmN1cnJlbnRcbiAgICAgIGxldCByYyA9ICRyLmNoaWxkTm9kZXNbMF1cbiAgICAgIGxldCByY3ggPSByYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICByY3guY2xlYXJSZWN0KDAsIDAsIHJjLndpZHRoLCBybGgpXG4gICAgICBsZXQgcm93ID0gcmFua19yb3dzW3JdXG4gICAgICBsZXQgaCA9IHJsaCArIDFcbiAgICAgIHJjeC5maWxsU3R5bGUgPSAnI2NjYydcbiAgICAgIGxldCB4c3RlcCA9IHJjLndpZHRoIC8gNFxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIHtcbiAgICAgICAgbGV0IHggPSAoYyArIDEpICogeHN0ZXBcbiAgICAgICAgbGV0IHcgPSAocm93W2MgKyAyXSAvIDEwMCkgKiB4c3RlcCAtIGN3XG4gICAgICAgIGlmICh3IDw9IDApIHcgPSAwXG4gICAgICAgIHJjeC5maWxsUmVjdCh4LCAwLCB3LCBoKVxuICAgICAgfVxuXG4gICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbcm93WzBdXVxuICAgICAgbGV0IFtUUCwgRlAsIFROLCBGTl0gPSBwYW5lbFxuICAgICAgbGV0IHRvdGFsID0gcGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM11cblxuICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbMl0pXG4gICAgICAgID8gcm93WzJdICsgJyUgJ1xuICAgICAgICA6ICdOL0EgJ1xuICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAoJHtUUH0rJHtUTn0pLyR7dG90YWx9YFxuICAgICAgJHIuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbM10pXG4gICAgICAgID8gcm93WzNdICsgJyUgJ1xuICAgICAgICA6ICdOL0EgJ1xuICAgICAgJHIuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAke1RQfS8oJHtUUH0rJHtGUH0pYFxuICAgICAgJHIuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbNF0pXG4gICAgICAgID8gcm93WzRdICsgJyUgJ1xuICAgICAgICA6ICdOL0EgJ1xuICAgICAgJHIuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAke1RQfS8oJHtUUH0rJHtGTn0pYFxuICAgIH1cblxuICAgIHJhbmtfcm93cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBiWzIgKyBzb3J0XSAtIGFbMiArIHNvcnRdXG4gICAgfSlcblxuICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgIGxldCBpeCA9IGljb24uZ2V0Q29udGV4dCgnMmQnKVxuICAgIGl4LmNsZWFyUmVjdCgwLCAwLCBjdywgcmxoKVxuICAgIGxldCBzdGVwID0gKHJsaCAqIDEuNSkgLyA0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rX3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSByYW5rX3Jvd3NbaV1cbiAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICBsZXQgeSA9IGkgKiBzdGVwXG4gICAgICBsZXQgdyA9IChwYW5lbFs0XSAvIDEwMCkgKiBjd1xuICAgICAgaXguZmlsbFN0eWxlID0gYmdzW3Jvd1swXV1cbiAgICAgIGl4LmZpbGxSZWN0KDAsIHksIHcsIHN0ZXApXG4gICAgfVxuXG4gICAgc2V0UmFua3MocmFua19yb3dzLm1hcChvID0+IG9bMV0pKVxuICB9XG5cbiAgZnVuY3Rpb24gc2tpcEZpbmlzaCgpIHtcbiAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBmcmFtZTsgaSA8IGZpbmlzaF9saW5lIC0gMTsgaSsrKSB7XG4gICAgICBwcm9jZXNzRnJhbWUoaSlcbiAgICB9XG4gICAgc2V0RnJhbWUoZmluaXNoX2xpbmUgLSAxKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgc2V0UmFua2luZ3MoKVxuICAgIH1cbiAgfSwgW3NvcnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBzZXREcHIoZHByKVxuXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHNwYWNlID0gcC5vZmZzZXRXaWR0aFxuICAgIGxldCBwbGVmdCA9IHAub2Zmc2V0TGVmdFxuICAgIHNldFBzcGFjZShwc3BhY2UpXG4gICAgc2V0UGxlZnQocGxlZnQpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdjb21iaW5lZC5qc29uJylcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihfZGF0YSA9PiB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBfZGF0YS5tYXAocm93ID0+XG4gICAgICAgICAgcm93Lm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGlmICh2LnRvU3RyaW5nKCkuaW5kZXhPZignLicpICE9IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIGxldCBzaHVmZmxlZCA9IF8uc2h1ZmZsZShmb3JtYXR0ZWQpXG4gICAgICAgIHNldERhdGEoc2h1ZmZsZWQpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJsaXA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMWNoJywgcGFkZGluZ1JpZ2h0OiAnMWNoJyB9fT5cbiAgICAgICAgPGRpdiByZWY9e3ByZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2JiYicsXG4gICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17dG9wYmFyX3JlZn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICByZWY9e2ljb25fcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMWNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCTElQXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJbmZvKHRydWUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluZm9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkYXRhID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+Q09OTkVDVElPTlM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzFjaCcgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzc3NycgfX0+XG4gICAgICAgICAgICAgICAge01hdGgubWluKGZyYW1lLCBmaW5pc2hfbGluZSAtIDEpICsgMX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtaW5XaWR0aDogNiAqIDE5ICsgMSArICdjaCcgfX0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleV9kZXMubWFwKChrLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2tbMF0gKyAnOiAnICsga1syXX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7a1sxXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGggKiB0ZXJtaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0MzMxNDInLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHJlZj17Y29uX3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKGZyYW1lLCBmaW5pc2hfbGluZSAtIDEpIC0gdGVybWhlaWdodCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihmcmFtZSwgZmluaXNoX2xpbmUgLSAxKSArIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZnJhbWUgKyAodGVybWhlaWdodCAtIGkpIC0gdGVybWhlaWdodCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBybGggLyAyIC0gKHNpemUgKyAxKSAvIDIgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjdyAvIDIgLSAoc2l6ZSArIDEpIC8gMiArIGN3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2l6ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRbMThdID8gcmVkIDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgubWluKGZyYW1lLCBmaW5pc2hfbGluZSAtIDEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWhlaWdodCAtIGkpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2Quc2xpY2UoMCwgMTgpLm1hcCgoZCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU1RSQVRFR0lFU1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnYXV0bycsIG92ZXJmbG93WTogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17cmFua2xhYmVsX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlJhbmtpbmc8L2Rpdj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAnQWNjdXJhY3knLFxuICAgICAgICAgICAgICAgICAgJyhUUCtUTikvQUxMJyxcbiAgICAgICAgICAgICAgICAgICcoVHJ1ZSBQb3NpdGl2ZSArIFRydWUgTmVnYXRpdmUpIC8gQUxMJyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICdQcmVjaXNpb24nLFxuICAgICAgICAgICAgICAgICAgJ1RQLyhUUCtGUCknLFxuICAgICAgICAgICAgICAgICAgJ1RydWUgUG9zaXRpdmUgLyAoVHJ1ZSBQb3NpdGl2ZSArIEZhbHNlIFBvc2l0aXZlKScsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAnUmVjYWxsJyxcbiAgICAgICAgICAgICAgICAgICdUUC8oVFArRk4pJyxcbiAgICAgICAgICAgICAgICAgICdUcnVlIFBvc2l0aXZlIC8gKFRydWUgUG9zaXRpdmUgKyBGYWxzZSBOZWdhdGl2ZSknLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIF0ubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAge3NvcnQgPT09IGkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPXtgUmFua2luZ3Mgc29ydGVkIGJ5ICR7c29ydF9vcHRpb25zW2ldfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtuWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BDbGljayB0byBzb3J0IGJ5ICR7c29ydF9vcHRpb25zW2ldfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydChpKVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFN0eWxlOiAnaXRhbGljJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge25bMF19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX17JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCwgZm9udFN0eWxlOiAnbm9ybWFsJyB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17blsyXX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge25bMV19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17cmFua3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwIH19PlxuICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoNCldLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PntpICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxGbGlwTW92ZT5cbiAgICAgICAgICAgICAgICB7cmFua3MubWFwKChuYW1lLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3JhbmtzcmVmLmN1cnJlbnRbbmFtZXMuaW5kZXhPZihuYW1lKV19XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tuYW1lcy5pbmRleE9mKG5hbWUpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0IH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9GbGlwTW92ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWSVNVQUxJWkVEXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvd1g6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXt2cmVmfSBzdHlsZT17e319IC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxY2gnLCB0b3A6IDAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXt0aXRsZV9yZWZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e3JlYWRvdXRfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIFBvc2l0aXZlJywgcmVkXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBQb3NpdGl2ZScsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIE5lZ2F0aXZlJywgYmxhY2tdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIE5lZ2F0aXZlJywgcmVkXSxcbiAgICAgICAgICAgICAgICAgIF0ubWFwKChvLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDI1JSAtIDAuMjVjaCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaSA9PT0gMiA/ICcxY2gnIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvWzBdfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoIC8gMiArIHJsaCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmxpcCBpcyBhbiBhbm9tYWx5IGRldGVjdGlvbiBwcm90b3R5cGUgYnl7JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsb3VkZXJhLmNvbS9wcm9kdWN0cy9mYXN0LWZvcndhcmQtbGFicy1yZXNlYXJjaC5odG1sXCI+XG4gICAgICAgICAgICAgIENsb3VkZXJhIEZhc3QgRm9yd2FyZFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNiYmInLFxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZyYW1lICsgMSA8PSBmaW5pc2hfbGluZSAtIDEgPyAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlNwZWVkOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyc8J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c3BlZWRzLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIGkgPT0gc3BlZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChpKVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWVkIDwgc3BlZWRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCArIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyc+J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtmcmFtZSArIDEgPD0gZmluaXNoX2xpbmUgLSAxID8gKFxuICAgICAgICAgICAgICBwYXVzZSA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXVzZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGxheVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBhdXNlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge3BhdXNlICYmIGZyYW1lICsgMSA8PSBmaW5pc2hfbGluZSAtIDEgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUaWNrXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7cGF1c2UgJiYgZnJhbWUgKyAxIDw9IGZpbmlzaF9saW5lIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2tpcEZpbmlzaCgpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNraXAgdG8gZmluaXNoXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2luZm8gPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SW5mbyhmYWxzZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBjaCcsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDJjaCknLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAqIDEuNSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoICogMS41LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj5JbmZvPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnLCBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEJsaXAgaXMgYSBwcm90b3R5cGUgYnl7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDbG91ZGVyYSBGYXN0IEZvcndhcmRcbiAgICAgICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIGJ1aWx0IHRvIGFjY29tcGFueSBvdXJ7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mZjEyLmZhc3Rmb3J3YXJkbGFicy5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICByZXBvcnQgb24gRGVlcCBMZWFybmluZyBmb3IgQW5vbWFseSBEZXRlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBCbGlwIHNob3dzIGhvdyBmb3VyIGRpZmZlcmVudCBhbGdvcml0aG1zIChcbiAgICAgICAgICAgICAgICAgICAge25hbWVzLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpICE9IG5hbWVzLmxlbmd0aCAtIDEgPyA8c3Bhbj4sIDwvc3Bhbj4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICkgcGVyZm9ybSBhdCBkZXRlY3RpbmcgbmV0d29yayBhdHRhY2tzIGluIHRoZXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8va2RkLmljcy51Y2kuZWR1L2RhdGFiYXNlcy9rZGRjdXA5OS90YXNrLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBLREQgbmV0d29yayBpbnRydXNpb24gZGF0YXNldFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIC4gWW91IGNhbiByZWFkIGFib3V0IGhvdyBlYWNoIG1vZGVsIHdhcyB0cmFpbmVkIGluIHRoZXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+cHJvdG90b3R5cGUgc2VjdGlvbiBvZiBvdXIgcmVwb3J0PC9hPi5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSB0b3AgQ09OTkVDVElPTlMgc2VjdGlvbiBzaG93cyB0aGV7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDMzMTQyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmsgY29ubmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIGNvbWluZyBpbiwgd2l0aCB0aGUgZmVhdHVyZXMgdXNlZCBieSBlYWNoIG1vZGVsIGZvciB0aGVpclxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uLiBUaGUgY29sb3Igb2YgdGhlIHNxdWFyZSBzaG93cyB0aGUgdHJ1ZSBzdGF0dXMgb2ZcbiAgICAgICAgICAgICAgICAgICAgd2hldGhlciB0aGUgY29ubmVjdGlvbiBpcyBhbnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIG9yeycgJ31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5mZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBub3JtYWxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBUaGUgU1RSQVRFR0lFUyBzZWN0aW9uIHNob3dzIG1ldHJpY3Mgb24gaG93IGVhY2ggYWxnb3JpdGhtXG4gICAgICAgICAgICAgICAgICAgIGlzIHBlZm9ybWluZyBvbiB0aGUgaW5jb21pbmcgZGF0YS4gWW91IGNhbiBzZWUgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgICAgICAgICAgICByZWNhbGwsIGFuZCBwcmVjaXNpb24gbWV0cmljcyBmb3IgZWFjaCBzdHJhdGVneS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBWSVNVQUxJWkVEIHNlY3Rpb24gcHJvdmlkZXMgYW5vdGhlciB2aWV3IG9mIGVhY2hcbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3kncyBwZXJmb3JtYW5jZS4gRWFjaCBjb25uZWN0aW9uIGlzIHZpc3VhbGl6ZWQgYXMgYVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuIElmIGl0IGlzIGNsYXNzaWZpZWQgYXMgYW4gYXR0YWNrIGl0IGlzIHBsYWNlZCBvbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgbGVmdDsgaWYgY2xhc3NpZmllZCBub3JtYWwsIGl0IGlzIHBsYWNlZCBvbiB0aGUgcmlnaHQuIFRoZVxuICAgICAgICAgICAgICAgICAgICBjb2xvciByZXZlYWxzIGl0cyB0cnVlIHN0YXR1cy4gT3ZlciB0aW1lIHRoZSBkZW5zaXR5IGFuZFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiBvZiB0aGUgY29sb3JzIGluIGVhY2ggc3RyYXRlZ3kgdmlzdWFsaXphdGlvbiBnaXZlXG4gICAgICAgICAgICAgICAgICAgIHlvdSBhIGZlZWwgZm9yIHRoZSBkaWZmZXJlbnQgbW9kZWxzIHN0cmVuZ3RocyBhbmRcbiAgICAgICAgICAgICAgICAgICAgd2Vha25lc3Nlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBzaW11bGF0aW9uIHdpbGwgcnVuIHRocm91Z2ggMTAsMDAwIGNvbm5lY3Rpb25zIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hpbmcuIFlvdSBjYW4gY29udHJvbCB0aGUgc3BlZWQgb2YgdGhlIHNpbXVsYXRpb24gd2l0aFxuICAgICAgICAgICAgICAgICAgICB0aGUgY29udHJvbHMgYXQgdGhlIGJvdHRvbS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2ZyYW1lICE9IGZpbmlzaF9saW5lIC0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnJhbWUgPiAxID8gJ0NvbnRpbnVlJyA6ICdTdGFydCd9IHRoZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2ZpbmlzaCA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4yKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRGaW5pc2goZmFsc2UpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzgwY2gnLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSAyY2gpJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCAqIDEuNSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+RmluaXNoZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEZpbmlzaChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBBZnRlciB7ZmluaXNoX2xpbmV9IGNvbm5lY3Rpb25zLCB5b3UndmUgcmVhY2hlZCB0aGUgZW5kIG9mXG4gICAgICAgICAgICAgICAgICAgIHRoZSBhbm9tYWx5IGRldGVjdGlvbiBzaW11bGF0aW9uLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHN0YW5kaW5nczpcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtbJ1JhbmtpbmcnLCAnQWNjdXJhY3knLCAnUHJlY2lzaW9uJywgJ1JlY2FsbCddLm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+e259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggfX0+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lc1xuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG4sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc19yZWYuY3VycmVudFtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpLCBuLCBwYW5lbFs0XSwgcGFuZWxbNV0sIHBhbmVsWzZdXVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJbMiArIHNvcnRdIC0gYVsyICsgc29ydF1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tyWzBdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1tyWzJdLCByWzNdLCByWzRdXS5tYXAodiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygke3Z9JSAtIDFjaClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+e3Z9JTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZSBhYm91dCB0aGUgbW9kZWxzIGFuZCB0aGVpciBwZXJmb3JtYW5jZSBvbiB0aGUgZnVsbFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0IGlueycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj50aGUgcHJvdG90eXBlIHNlY3Rpb24gb2Ygb3VyIHJlcG9ydDwvYT4uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGN3LFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBjdyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTG9hZGluZyBkYXRhc2V0Li4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3JsaH1weDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.5568302292c24bbc927a.hot-update.js.map