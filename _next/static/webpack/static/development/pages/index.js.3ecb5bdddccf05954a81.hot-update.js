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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/number/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var _components_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/analytics */ "./components/analytics.js");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");





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
var names = ['PCA', 'OCSVM', 'Autoencoder', 'BiGAN'];
var name_max = names.reduce(function (t, c) {
  return Math.max(c.length, t);
}, 0);
var size = 4;
var termheight = 4;
var sort_options = ['accuracy', 'precision', 'recall'];
var finish_line = 10000;
function Index() {
  var _ref, _ref3;

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

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      skipping = _useState13[0],
      setSkipping = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      skiprelay = _useState14[0],
      setSkiprelay = _useState14[1];

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
      var bottom = rlh;
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
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useLayoutEffect"])(function () {
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

  function restart() {
    if (handler_ref.current !== null) {
      window.clearRInterval(handler_ref.current);
    }

    setInitSpeed(false); // get data

    fetch('combined.json').then(function (r) {
      return r.json();
    }).then(function (_data) {
      var formatted = _data.map(function (row) {
        return row.map(function (v) {
          if (v.toString().indexOf('.') != -1) {
            return _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_3___default()(v).toFixed(2);
          } else {
            return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(v);
          }
        });
      });

      var shuffled = lodash__WEBPACK_IMPORTED_MODULE_10__["shuffle"](formatted);

      setData(shuffled);
    });
    setFrame(0);
    panels_ref.current = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n) {
      return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n) {
        return 0;
      });
    });
    setPause(false);
  }

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
        var labels = ['TP', 'FP', 'TN', 'FN'];

        for (var j = 0; j < 4; j++) {
          $read.childNodes[i].childNodes[j].childNodes[0].innerHTML = '<em>' + labels[j] + '</em> ' + panel[j];
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
      rcx.clearRect(0, 0, rc.width, rlh + 1);
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

      var _panel = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(panel, 4),
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

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (skiprelay) {
      for (var i = frame; i < finish_line - 1; i++) {
        processFrame(i);
      }

      setFrame(finish_line - 1);
      setSkipping(false);
      setSkiprelay(false);
    }
  }, [skiprelay]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (skipping) {
      if (handler_ref.current !== null) {
        window.clearRInterval(handler_ref.current);
      }

      setSkiprelay(true);
    }
  }, [skipping]);

  function skipFinish() {
    setSkipping(true);
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
            return _babel_runtime_corejs2_core_js_number_parse_float__WEBPACK_IMPORTED_MODULE_3___default()(v).toFixed(2);
          } else {
            return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(v);
          }
        });
      });

      var shuffled = lodash__WEBPACK_IMPORTED_MODULE_10__["shuffle"](formatted);

      setData(shuffled);
    });

    if (!window.GA_INITIALIZED) {
      Object(_components_analytics__WEBPACK_IMPORTED_MODULE_11__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_components_analytics__WEBPACK_IMPORTED_MODULE_11__["logPageView"])();
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
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
      lineNumber: 578
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  })), __jsx("div", {
    style: {
      background: '#ccc',
      height: rlh,
      position: 'sticky',
      top: 0,
      zIndex: 999
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
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
      lineNumber: 590
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
      lineNumber: 597
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
      lineNumber: 607
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    onClick: function onClick() {
      setInfo(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
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
      lineNumber: 626
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
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
      lineNumber: 641
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
      lineNumber: 642
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
      lineNumber: 643
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
        lineNumber: 651
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
        lineNumber: 659
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
      lineNumber: 673
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
        lineNumber: 693
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
        lineNumber: 701
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
        lineNumber: 711
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
        lineNumber: 719
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
          lineNumber: 732
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
          lineNumber: 740
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
      lineNumber: 756
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
      lineNumber: 765
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
      lineNumber: 766
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
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
        lineNumber: 792
      },
      __self: this
    }, sort === i ? __jsx("span", {
      title: "Rankings sorted by ".concat(sort_options[i]),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794
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
        lineNumber: 798
      },
      __self: this
    }, n[0]), ' ', __jsx("span", {
      style: {
        color: scheme.light
      },
      title: n[2],
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808
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
      lineNumber: 814
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
      lineNumber: 821
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n, i) {
    return __jsx("div", {
      style: {},
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823
      },
      __self: this
    }, i + 1);
  })), __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826
    },
    __self: this
  }, ranks.map(function (name, i) {
    return __jsx("div", {
      key: name,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 828
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
        lineNumber: 829
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
        lineNumber: 836
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
        lineNumber: 843
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
        lineNumber: 844
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
        lineNumber: 856
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
        lineNumber: 857
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 865
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
        lineNumber: 867
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
        lineNumber: 868
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876
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
        lineNumber: 878
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
        lineNumber: 879
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 887
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
      lineNumber: 895
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
      lineNumber: 905
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906
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
      lineNumber: 907
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
      lineNumber: 911
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
        lineNumber: 916
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
      lineNumber: 927
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
        lineNumber: 936
      },
      __self: this
    }, [['True Positive', red], ['False Positive', black], ['True Negative', black], ['False Negative', red]].map(function (o, i) {
      var _ref2;

      return __jsx("div", {
        title: o[0],
        style: {
          width: 'calc(25% - 0.25ch)',
          marginLeft: i === 2 ? '1ch' : 0
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943
        },
        __self: this
      }, __jsx("div", {
        style: (_ref2 = {
          background: o[1],
          height: rlh,
          color: 'white',
          textAlign: 'right',
          paddingRight: '1ch',
          paddingLeft: '1ch'
        }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "textAlign", i < 2 ? 'left' : 'right'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "pointerEvents", 'none'), _ref2),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 950
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
      lineNumber: 968
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977
    },
    __self: this
  }, "Cloudera Fast Forward"), ". See more demos on our", ' ', __jsx("a", {
    href: "https://experiments.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981
    },
    __self: this
  }, "experiments page"), "."), __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0,
      height: rlh,
      background: '#ccc',
      paddingLeft: '1ch',
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986
    },
    __self: this
  }, frame + 1 <= finish_line - 1 ? __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004
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
      lineNumber: 1005
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
        lineNumber: 1021
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
        lineNumber: 1030
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
      lineNumber: 1044
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
      lineNumber: 1061
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
      lineNumber: 1070
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
      lineNumber: 1081
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
      lineNumber: 1093
    },
    __self: this
  }, "Skip to finish") : null, frame + 1 > finish_line - 1 ? __jsx("button", {
    style: {
      marginLeft: ''
    },
    onClick: function onClick() {
      restart();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103
    },
    __self: this
  }, "Restart") : null), info ? __jsx("div", {
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
      lineNumber: 1114
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
      lineNumber: 1128
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
      lineNumber: 1143
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151
    },
    __self: this
  }, "Info"), __jsx("button", {
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152
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
      lineNumber: 1160
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
      lineNumber: 1170
    },
    __self: this
  }, "Blip is a prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172
    },
    __self: this
  }, "Cloudera Fast Forward"), ' ', "built to accompany our", ' ', __jsx("a", {
    href: "https://ff12.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176
    },
    __self: this
  }, "report on Deep Learning for Anomaly Detection"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181
    },
    __self: this
  }, "Blip shows how four different algorithms (", names.map(function (n, i) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1184
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
        lineNumber: 1185
      },
      __self: this
    }, n), i != names.length - 1 ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1194
      },
      __self: this
    }, ", ") : null);
  }), ") perform at detecting network attacks in the", ' ', __jsx("a", {
    href: "http://kdd.ics.uci.edu/databases/kddcup99/task.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198
    },
    __self: this
  }, "KDD network intrusion dataset"), ". You can read about how each model was trained in the", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202
    },
    __self: this
  }, "protototype section of our report"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204
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
      lineNumber: 1206
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
      lineNumber: 1219
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
      lineNumber: 1229
    },
    __self: this
  }, "normal"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241
    },
    __self: this
  }, "The STRATEGIES section shows metrics on how each algorithm is peforming on the incoming data. You can see the accuracy, recall, and precision metrics for each strategy."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1246
    },
    __self: this
  }, "The VISUALIZED section provides another view of each strategy's performance. Each connection is visualized as a square. If it is classified as an attack it is placed on the left; if classified normal, it is placed on the right. The color reveals its true status. Over time, the density and position of the colors in each strategy visualization give you a feel for the different models' strengths and weaknesses."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1256
    },
    __self: this
  }, "The simulation will run through 10,000 connections before finishing. You can control the speed of the simulation with the controls at the bottom."), frame != finish_line - 1 ? __jsx("div", {
    style: {
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1262
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
      lineNumber: 1263
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
      lineNumber: 1278
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    style: (_ref3 = {
      width: '80ch',
      maxWidth: 'calc(100% - 2ch)',
      background: scheme.bg
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "background", scheme.bg), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "color", scheme.fg), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "marginLeft", 'auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "marginRight", 'auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "marginTop", rlh * 1.5), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "marginBottom", rlh * 1.5), _ref3),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1292
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
      lineNumber: 1308
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1316
    },
    __self: this
  }, "Finished"), __jsx("button", {
    onClick: function onClick() {
      setFinish(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1317
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
      lineNumber: 1325
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1335
    },
    __self: this
  }, "After ", finish_line, " connections, you've reached the end of the anomaly detection simulation."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339
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
      lineNumber: 1343
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
        lineNumber: 1350
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
      lineNumber: 1354
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
        lineNumber: 1364
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1365
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
        lineNumber: 1367
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
          lineNumber: 1380
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
          lineNumber: 1387
        },
        __self: this
      }), __jsx("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1397
        },
        __self: this
      }, v, "%"));
    }));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1404
    },
    __self: this
  }, "Read more about the models and their performance on the full dataset in", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1407
    },
    __self: this
  }, "the prototype section of our report"), ".")))) : null, skipping ? __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
      background: 'rgba(0,0,0,0.2)',
      cursor: 'progress'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1414
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      background: scheme.bg,
      color: 'white',
      height: rlh,
      cursor: 'progress'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1426
    },
    __self: this
  }, "Skipping...")) : null) : __jsx("div", {
    style: {
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2,
      paddingLeft: cw,
      paddingRight: cw
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1441
    },
    __self: this
  }, "Loading dataset..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMjZDeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VMYXlvdXRFZmZlY3QsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFnZW50IGZyb20gJy4uL2NvbXBvbmVudHMvYWdlbnQnXG5pbXBvcnQgeyBrZXlfZGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuYWx5dGljcydcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCAqIDIsIDY0MCwgMzIwLCA4MCwgNDAsIDIwXVxuXG5sZXQgbmFtZXMgPSBbJ1BDQScsICdPQ1NWTScsICdBdXRvZW5jb2RlcicsICdCaUdBTiddXG5cbmxldCBuYW1lX21heCA9IG5hbWVzLnJlZHVjZSgodCwgYykgPT4ge1xuICByZXR1cm4gTWF0aC5tYXgoYy5sZW5ndGgsIHQpXG59LCAwKVxuXG5sZXQgc2l6ZSA9IDRcblxubGV0IHRlcm1oZWlnaHQgPSA0XG5cbmxldCBzb3J0X29wdGlvbnMgPSBbJ2FjY3VyYWN5JywgJ3ByZWNpc2lvbicsICdyZWNhbGwnXVxuXG5sZXQgZmluaXNoX2xpbmUgPSAxMDAwMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBoYW5kbGVyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgaHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2ZyYW1lLCBzZXRGcmFtZV0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW3BzcGFjZSwgc2V0UHNwYWNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbcGxlZnQsIHNldFBsZWZ0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBwYW5lbHNfcmVmID0gdXNlUmVmKFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gWy4uLkFycmF5KDQpXS5tYXAobiA9PiAwKSkpXG4gIGxldCByYW5rc3JlZiA9IHVzZVJlZihbLi4uQXJyYXkoNCldLm1hcChuID0+IGNyZWF0ZVJlZigpKSlcbiAgbGV0IHBkaW1fcmVmID0gdXNlUmVmKFtdKVxuICBsZXQgdGl0bGVfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJ1dGhfcmVmID0gdXNlUmVmKFswLCAwXSlcbiAgbGV0IHRyZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua2xhYmVsX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdG9wYmFyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2Rwciwgc2V0RHByXSA9IHVzZVN0YXRlKDEpXG4gIGxldCBpY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW3NwZWVkLCBzZXRTcGVlZF0gPSB1c2VTdGF0ZSgzKVxuICBsZXQgW2luaXRTcGVlZCwgc2V0SW5pdFNwZWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHRydWUpXG4gIGxldCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW2ZpbmlzaCwgc2V0RmluaXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3JhbmtzLCBzZXRSYW5rc10gPSB1c2VTdGF0ZShuYW1lcy5zbGljZSgpKVxuICBsZXQgW3NraXBwaW5nLCBzZXRTa2lwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtza2lwcmVsYXksIHNldFNraXByZWxheV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbGF5b3V0XG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuXG4gICAgICBsZXQgdndpZHRoID0gcHNwYWNlIC0gOFxuICAgICAgdi53aWR0aCA9IHZ3aWR0aCAqIGRwclxuICAgICAgdi5zdHlsZS5tYXJnaW5MZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgc3RhY2tlZCA9IGZhbHNlXG4gICAgICBsZXQgbGMgPSAyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gODAxKSBzdGFja2VkID0gdHJ1ZVxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMSkgbGMgPSAxXG5cbiAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih2LndpZHRoIC8gc2l6ZSlcbiAgICAgIGxldCBwYW5lbF9jb2x1bW5zID0gTWF0aC5taW4oXG4gICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5mbG9vcigodi53aWR0aCAvIGRwciAtIChzdGFja2VkID8gMCA6IHNpemUgKiA0KSkgLyBzaXplKSAvIGxjXG4gICAgICAgICksXG4gICAgICAgIDMwMFxuICAgICAgKVxuICAgICAgbGV0IHBhbmVsX3Jvd3MgPSBNYXRoLmNlaWwoMTAwMDAgLyAocGFuZWxfY29sdW1ucyAtIDMpKVxuXG4gICAgICBsZXQgcHcgPSBwYW5lbF9jb2x1bW5zICogc2l6ZVxuICAgICAgbGV0IHBoID0gcGFuZWxfcm93cyAqIHNpemVcblxuICAgICAgbGV0IHBjID0gbGNcbiAgICAgIGxldCBwciA9IDQgLyBsY1xuXG4gICAgICBsZXQgdG9wID0gcmxoXG4gICAgICBsZXQgYm90dG9tID0gcmxoXG4gICAgICBsZXQgYm90dG9tX3NwYWNlID0gcmxoIC8gMlxuXG4gICAgICBsZXQgdGMgPSBwYW5lbF9jb2x1bW5zICogbGMgKyAoc3RhY2tlZCA/IDAgOiA0KVxuICAgICAgbGV0IHRyID0gTWF0aC5jZWlsKDEwMDAwIC8gKGNvbHVtbnMgLSAxKSlcbiAgICAgIGxldCB0dyA9IHRjICogc2l6ZVxuICAgICAgbGV0IHRoID0gdHIgKiBzaXplXG5cbiAgICAgIGxldCB2aGVpZ2h0ID0gKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSAqIHByXG4gICAgICB2LmhlaWdodCA9IHZoZWlnaHQgKiBkcHJcblxuICAgICAgdi5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIHYuc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgdnguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIGxldCBoID0gaHJlZi5jdXJyZW50XG4gICAgICBoLndpZHRoID0gdi53aWR0aFxuICAgICAgaC5oZWlnaHQgPSB2LmhlaWdodFxuICAgICAgaC5zdHlsZS53aWR0aCA9IHZ3aWR0aCArICdweCdcbiAgICAgIGguc3R5bGUuaGVpZ2h0ID0gdmhlaWdodCArICdweCdcblxuICAgICAgbGV0IGh4ID0gaC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBoeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgdnguZmlsbFN0eWxlID0gJyNlZWUnXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0IGkgPSByICogcGMgKyBjXG4gICAgICAgICAgbGV0IHggPSBjICogKHB3ICsgc2l6ZSAqIDQpXG4gICAgICAgICAgbGV0IHkgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArIHRvcFxuICAgICAgICAgIGxldCB3ID0gcHdcbiAgICAgICAgICBsZXQgaCA9IHBoXG4gICAgICAgICAgcGRpbVtpXSA9IFt4LCB5LCB3LCBoXVxuICAgICAgICAgIHZ4LmZpbGxSZWN0KHgsIHksIHcsIGgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICR0aXRsZXMgPSB0aXRsZV9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkdCA9ICR0aXRsZXMuY2hpbGROb2Rlc1tyICogcGMgKyBjXVxuICAgICAgICAgICR0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICR0LnN0eWxlLnRvcCA9IHIgKiAodG9wICsgcGggKyBib3R0b20gKyBib3R0b21fc3BhY2UpICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLndpZHRoID0gcHcgKyAncHgnXG4gICAgICAgICAgJHQuc3R5bGUubGVmdCA9IGMgKiAocHcgKyBzaXplICogNCkgKyBjdyArICdweCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgJHJlYWQgPSByZWFkb3V0X3JlZi5jdXJyZW50XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IHByOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwYzsgYysrKSB7XG4gICAgICAgICAgbGV0ICRyID0gJHJlYWQuY2hpbGROb2Rlc1tyICogcGMgKyBjXVxuICAgICAgICAgICRyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgICRyLnN0eWxlLnRvcCA9XG4gICAgICAgICAgICByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArIHRvcCArIHBoICsgJ3B4J1xuICAgICAgICAgICRyLnN0eWxlLndpZHRoID0gcHcgKyAncHgnXG4gICAgICAgICAgJHIuc3R5bGUubGVmdCA9IGMgKiAocHcgKyBzaXplICogNCkgKyBjdyArICdweCdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGIgPSB0b3BiYXJfcmVmLmN1cnJlbnRcbiAgICAgIHRiLnN0eWxlLndpZHRoID0gdHcgKyAncHgnXG5cbiAgICAgIGxldCAkcmFuayA9IHJhbmtyZWYuY3VycmVudFxuICAgICAgbGV0IHJhbmtpbmdfd2lkdGggPSBNYXRoLm1heChjaCAqIDc0LCB0dylcbiAgICAgICRyYW5rLnN0eWxlLndpZHRoID0gcmFua2luZ193aWR0aCAtIGN3ICsgJ3B4J1xuICAgICAgcmFua2xhYmVsX3JlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gcmFua2luZ193aWR0aCAtIGN3ICsgJ3B4J1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByYW5rc3JlZi5jdXJyZW50Lmxlbmd0aDsgcisrKSB7XG4gICAgICAgIHJhbmtzcmVmLmN1cnJlbnRbcl0uY3VycmVudC5jaGlsZE5vZGVzWzBdLndpZHRoID0gcmFua2luZ193aWR0aCAtIGN3XG4gICAgICAgIHJhbmtzcmVmLmN1cnJlbnRbcl0uY3VycmVudC5jaGlsZE5vZGVzWzBdLmhlaWdodCA9IHJsaCArIDFcbiAgICAgIH1cblxuICAgICAgbGV0IGljb24gPSBpY29uX3JlZi5jdXJyZW50XG4gICAgICBpY29uLndpZHRoID0gY3cgKiBkcHJcbiAgICAgIGljb24uaGVpZ2h0ID0gcmxoICogMS41ICogZHByXG4gICAgICBsZXQgaXggPSBpY29uLmdldENvbnRleHQoJzJkJylcbiAgICAgIGl4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSBzaGltIGJ5IFBhdWwgSXJpc2hcbiAgICAgIC8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIGZ1bmN0aW9uKC8qIGZ1bmN0aW9uICovIGNhbGxiYWNrLCAvKiBET01FbGVtZW50ICovIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9KSgpXG5cbiAgICAgIC8vIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9lbGFtYmVydC8xMDAyMTE2I2dpc3Rjb21tZW50LTE5NTM5MjVcbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBzZXRJbnRlcnZhbCBleGNlcHQgdXNlcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB3aGVyZSBwb3NzaWJsZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAqIEBwYXJhbSB7aW50fSBkZWxheSBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5ySW50ZXJ2YWwgPSBmdW5jdGlvbihmbiwgZGVsYXkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICkgJiYgLy8gRmlyZWZveCA1IHNoaXBzIHdpdGhvdXQgY2FuY2VsIHN1cHBvcnRcbiAgICAgICAgICAhd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAhd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKGZuLCBkZWxheSlcblxuICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KClcblxuICAgICAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBkZWx0YSA9IGN1cnJlbnQgLSBzdGFydFxuXG4gICAgICAgICAgaWYgKGRlbHRhID49IGRlbGF5KSB7XG4gICAgICAgICAgICBmbi5jYWxsKClcbiAgICAgICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGUudmFsdWUgPSByZXF1ZXN0QW5pbUZyYW1lKGxvb3ApXG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGUudmFsdWUgPSByZXF1ZXN0QW5pbUZyYW1lKGxvb3ApXG4gICAgICAgIHJldHVybiBoYW5kbGVcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBCZWhhdmVzIHRoZSBzYW1lIGFzIGNsZWFySW50ZXJ2YWwgZXhjZXB0IHVzZXMgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtpbnR8b2JqZWN0fSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAqL1xuICAgICAgd2luZG93LmNsZWFyUkludGVydmFsID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgICAgICAgICAgIGhhbmRsZS52YWx1ZVxuICAgICAgICAgICAgKSAvKiBTdXBwb3J0IGZvciBsZWdhY3kgQVBJICovXG4gICAgICAgICAgOiB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSlcbiAgICAgICAgICA6IHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiBjbGVhckludGVydmFsKGhhbmRsZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXVzZSAmJiAhaW5mbykge1xuICAgICAgICBoYW5kbGVyX3JlZi5jdXJyZW50ID0gd2luZG93LnJJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgc3BlZWRzW3NwZWVkXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICAgIHNldEluaXRTcGVlZCh0cnVlKVxuICB9LCBbZGF0YV0pXG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdFNwZWVkICE9IGZhbHNlKSB7XG4gICAgICBpZiAoaGFuZGxlcl9yZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIGlmICghcGF1c2UgJiYgIWluZm8pIHtcbiAgICAgICAgaGFuZGxlcl9yZWYuY3VycmVudCA9IHJJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0RnJhbWUoZnVuY3Rpb24ocHJldikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgc3BlZWRzW3NwZWVkXSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzcGVlZCwgcGF1c2UsIGluZm9dKVxuXG4gIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgIH1cbiAgICBzZXRJbml0U3BlZWQoZmFsc2UpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdjb21iaW5lZC5qc29uJylcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihfZGF0YSA9PiB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBfZGF0YS5tYXAocm93ID0+XG4gICAgICAgICAgcm93Lm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGlmICh2LnRvU3RyaW5nKCkuaW5kZXhPZignLicpICE9IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIGxldCBzaHVmZmxlZCA9IF8uc2h1ZmZsZShmb3JtYXR0ZWQpXG4gICAgICAgIHNldERhdGEoc2h1ZmZsZWQpXG4gICAgICB9KVxuXG4gICAgc2V0RnJhbWUoMClcbiAgICBwYW5lbHNfcmVmLmN1cnJlbnQgPSBbLi4uQXJyYXkoNCldLm1hcChuID0+IFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gMCkpXG4gICAgc2V0UGF1c2UoZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWUpIHtcbiAgICBpZiAoZnJhbWUgPCBkYXRhLmxlbmd0aCAmJiBmcmFtZSA8IGZpbmlzaF9saW5lIC0gMSkge1xuICAgICAgbGV0IHBhbmVscyA9IHBhbmVsc19yZWYuY3VycmVudFxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgbGV0IHBkaW0gPSBwZGltX3JlZi5jdXJyZW50XG5cbiAgICAgIGxldCB2ID0gdnJlZi5jdXJyZW50XG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcblxuICAgICAgbGV0IGggPSBocmVmLmN1cnJlbnRcbiAgICAgIGxldCBoeCA9IGguZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAvLyB1cGRhdGUgcGFuZWwgZGF0YVxuICAgICAgbGV0IHBhbmVsX2tleXMgPSBbMTksIDIwLCAyMSwgMjJdXG4gICAgICBsZXQgcmVjb3JkID0gZGF0YVtmcmFtZV1cbiAgICAgIGxldCBhbm9tYWx5ID0gcmVjb3JkWzE4XSA9PT0gMSA/IHRydWUgOiBmYWxzZVxuXG4gICAgICBpZiAoYW5vbWFseSkge1xuICAgICAgICB2eC5maWxsU3R5bGUgPSByZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZ4LmZpbGxTdHlsZSA9IHNjaGVtZS5iZ1xuICAgICAgfVxuXG4gICAgICBsZXQgcGMgPSBwZGltWzBdWzJdIC8gc2l6ZVxuICAgICAgbGV0IHByID0gcGRpbVswXVszXSAvIHNpemVcblxuICAgICAgaHguY2xlYXJSZWN0KDAsIDAsIGgud2lkdGggLyBkcHIsIGguaGVpZ2h0IC8gZHByKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgICAgbGV0IGRldGVjdGVkID0gcmVjb3JkW3BhbmVsX2tleXNbaV1dXG5cbiAgICAgICAgbGV0IHAxeCwgcDF5XG4gICAgICAgIC8vIFRQIEZQIFROIEZOXG4gICAgICAgIGlmIChkZXRlY3RlZCA+IDAuMSkge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzBdICsgcGFuZWxzW2ldWzFdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSBNYXRoLmZsb29yKG4gLyBwcikgKiBzaXplXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIHRydWUgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMF0rK1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBwb3NcbiAgICAgICAgICAgIHBhbmVsc1tpXVsxXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuID0gcGFuZWxzW2ldWzJdICsgcGFuZWxzW2ldWzNdXG4gICAgICAgICAgcDF5ID0gKHByIC0gKG4gJSBwcikgLSAxKSAqIHNpemVcbiAgICAgICAgICBwMXggPSAocGMgLSBNYXRoLmZsb29yKG4gLyBwcikgLSAxKSAqIHNpemUgLSAxXG4gICAgICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgICAgIC8vIGZhbHNlIG5lZ1xuICAgICAgICAgICAgcGFuZWxzW2ldWzNdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJ1ZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVsyXSsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpbSA9IHBkaW1baV1cbiAgICAgICAgdnguZmlsbFJlY3QoZGltWzBdICsgcDF4LCBkaW1bMV0gKyBwMXksIHNpemUgKyAxLCBzaXplICsgMSlcblxuICAgICAgICAvLyBoeC5maWxsU3R5bGUgPSAnIzQzMzE0MidcbiAgICAgICAgaHguZmlsbFN0eWxlID0gYmdzW2ldXG4gICAgICAgIGh4LmZpbGxSZWN0KFxuICAgICAgICAgIGRpbVswXSArIHAxeCAtIDIsXG4gICAgICAgICAgZGltWzFdICsgcDF5IC0gMixcbiAgICAgICAgICBzaXplICsgMSArIDQsXG4gICAgICAgICAgc2l6ZSArIDEgKyA0XG4gICAgICAgIClcbiAgICAgICAgaHguZmlsbFN0eWxlID0gdnguZmlsbFN0eWxlXG4gICAgICAgIGh4LmZpbGxSZWN0KGRpbVswXSArIHAxeCwgZGltWzFdICsgcDF5LCBzaXplICsgMSwgc2l6ZSArIDEpXG5cbiAgICAgICAgbGV0IGxhYmVscyA9IFsnVFAnLCAnRlAnLCAnVE4nLCAnRk4nXVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICRyZWFkLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPGVtPicgKyBsYWJlbHNbal0gKyAnPC9lbT4gJyArIHBhbmVsW2pdXG4gICAgICAgIH1cblxuICAgICAgICAvL2FjY3VyYWN5ID0gKFRQK1ROKS8oVFArVE4rRlArRk4pXG4gICAgICAgIGxldCBhY2N1cmFjeSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgKChwYW5lbFswXSArIHBhbmVsWzJdKSAvXG4gICAgICAgICAgICAocGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM10pKSAqXG4gICAgICAgICAgICAxMDBcbiAgICAgICAgKVxuICAgICAgICAvLyBwcmVjaXNpb24gdHAgLyAodHAgKyBmcClcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbMV0pKSAqIDEwMClcblxuICAgICAgICAvLyByZWNhbGwgdHAgLyAodHAgKyBmbilcbiAgICAgICAgbGV0IHJlY2FsbCA9IE1hdGgucm91bmQoKHBhbmVsWzBdIC8gKHBhbmVsWzBdICsgcGFuZWxbM10pKSAqIDEwMClcblxuICAgICAgICAvLyA0IDUgNlxuICAgICAgICBwYW5lbHNbaV1bNF0gPSBhY2N1cmFjeVxuICAgICAgICBwYW5lbHNbaV1bNV0gPSBwcmVjaXNpb25cbiAgICAgICAgcGFuZWxzW2ldWzZdID0gcmVjYWxsXG4gICAgICB9XG5cbiAgICAgIHNldFJhbmtpbmdzKClcbiAgICB9XG5cbiAgICAvLyBmaW5pc2ggbGluZVxuICAgIGlmIChmcmFtZSA+PSBmaW5pc2hfbGluZSAtIDEpIHtcbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgc2V0RmluaXNoKHRydWUpXG4gICAgICBzZXRQYXVzZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIHByb2Nlc3NGcmFtZShmcmFtZSlcbiAgICB9XG4gIH0sIFtkYXRhLCBmcmFtZV0pXG5cbiAgZnVuY3Rpb24gc2V0UmFua2luZ3MoKSB7XG4gICAgbGV0IHBhbmVscyA9IHBhbmVsc19yZWYuY3VycmVudFxuXG4gICAgLy8gc2V0IHJhbmtpbmdzXG4gICAgbGV0IHJhbmtfcm93cyA9IG5hbWVzLm1hcCgobiwgaSkgPT4ge1xuICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW2ldXG4gICAgICByZXR1cm4gW2ksIG4sIHBhbmVsWzRdLCBwYW5lbFs1XSwgcGFuZWxbNl1dXG4gICAgfSlcblxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgbmFtZXMubGVuZ3RoOyByKyspIHtcbiAgICAgIGxldCAkciA9IHJhbmtzcmVmLmN1cnJlbnRbcl0uY3VycmVudFxuICAgICAgbGV0IHJjID0gJHIuY2hpbGROb2Rlc1swXVxuICAgICAgbGV0IHJjeCA9IHJjLmdldENvbnRleHQoJzJkJylcbiAgICAgIHJjeC5jbGVhclJlY3QoMCwgMCwgcmMud2lkdGgsIHJsaCArIDEpXG4gICAgICBsZXQgcm93ID0gcmFua19yb3dzW3JdXG4gICAgICBsZXQgaCA9IHJsaCArIDFcbiAgICAgIHJjeC5maWxsU3R5bGUgPSAnI2NjYydcbiAgICAgIGxldCB4c3RlcCA9IHJjLndpZHRoIC8gNFxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIHtcbiAgICAgICAgbGV0IHggPSAoYyArIDEpICogeHN0ZXBcbiAgICAgICAgbGV0IHcgPSAocm93W2MgKyAyXSAvIDEwMCkgKiB4c3RlcCAtIGN3XG4gICAgICAgIGlmICh3IDw9IDApIHcgPSAwXG4gICAgICAgIHJjeC5maWxsUmVjdCh4LCAwLCB3LCBoKVxuICAgICAgfVxuXG4gICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbcm93WzBdXVxuICAgICAgbGV0IFtUUCwgRlAsIFROLCBGTl0gPSBwYW5lbFxuICAgICAgbGV0IHRvdGFsID0gcGFuZWxbMF0gKyBwYW5lbFsxXSArIHBhbmVsWzJdICsgcGFuZWxbM11cblxuICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbMl0pXG4gICAgICAgID8gcm93WzJdICsgJyUgJ1xuICAgICAgICA6ICdOL0EgJ1xuICAgICAgJHIuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAoJHtUUH0rJHtUTn0pLyR7dG90YWx9YFxuICAgICAgJHIuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbM10pXG4gICAgICAgID8gcm93WzNdICsgJyUgJ1xuICAgICAgICA6ICdOL0EgJ1xuICAgICAgJHIuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAke1RQfS8oJHtUUH0rJHtGUH0pYFxuICAgICAgJHIuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICFpc05hTihyb3dbNF0pXG4gICAgICAgID8gcm93WzRdICsgJyUgJ1xuICAgICAgICA6ICdOL0EgJ1xuICAgICAgJHIuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGAke1RQfS8oJHtUUH0rJHtGTn0pYFxuICAgIH1cblxuICAgIHJhbmtfcm93cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBiWzIgKyBzb3J0XSAtIGFbMiArIHNvcnRdXG4gICAgfSlcblxuICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgIGxldCBpeCA9IGljb24uZ2V0Q29udGV4dCgnMmQnKVxuICAgIGl4LmNsZWFyUmVjdCgwLCAwLCBjdywgcmxoKVxuICAgIGxldCBzdGVwID0gKHJsaCAqIDEuNSkgLyA0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5rX3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSByYW5rX3Jvd3NbaV1cbiAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICBsZXQgeSA9IGkgKiBzdGVwXG4gICAgICBsZXQgdyA9IChwYW5lbFs0XSAvIDEwMCkgKiBjd1xuICAgICAgaXguZmlsbFN0eWxlID0gYmdzW3Jvd1swXV1cbiAgICAgIGl4LmZpbGxSZWN0KDAsIHksIHcsIHN0ZXApXG4gICAgfVxuXG4gICAgc2V0UmFua3MocmFua19yb3dzLm1hcChvID0+IG9bMV0pKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2tpcHJlbGF5KSB7XG4gICAgICBmb3IgKGxldCBpID0gZnJhbWU7IGkgPCBmaW5pc2hfbGluZSAtIDE7IGkrKykge1xuICAgICAgICBwcm9jZXNzRnJhbWUoaSlcbiAgICAgIH1cbiAgICAgIHNldEZyYW1lKGZpbmlzaF9saW5lIC0gMSlcbiAgICAgIHNldFNraXBwaW5nKGZhbHNlKVxuICAgICAgc2V0U2tpcHJlbGF5KGZhbHNlKVxuICAgIH1cbiAgfSwgW3NraXByZWxheV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2tpcHBpbmcpIHtcbiAgICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgfVxuICAgICAgc2V0U2tpcHJlbGF5KHRydWUpXG4gICAgfVxuICB9LCBbc2tpcHBpbmddKVxuXG4gIGZ1bmN0aW9uIHNraXBGaW5pc2goKSB7XG4gICAgc2V0U2tpcHBpbmcodHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIHNldFJhbmtpbmdzKClcbiAgICB9XG4gIH0sIFtzb3J0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgc2V0RHByKGRwcilcblxuICAgIGxldCBwID0gcHJlZi5jdXJyZW50XG4gICAgbGV0IHBzcGFjZSA9IHAub2Zmc2V0V2lkdGhcbiAgICBsZXQgcGxlZnQgPSBwLm9mZnNldExlZnRcbiAgICBzZXRQc3BhY2UocHNwYWNlKVxuICAgIHNldFBsZWZ0KHBsZWZ0KVxuXG4gICAgLy8gZ2V0IGRhdGFcbiAgICBmZXRjaCgnY29tYmluZWQuanNvbicpXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oX2RhdGEgPT4ge1xuICAgICAgICBsZXQgZm9ybWF0dGVkID0gX2RhdGEubWFwKHJvdyA9PlxuICAgICAgICAgIHJvdy5tYXAodiA9PiB7XG4gICAgICAgICAgICBpZiAodi50b1N0cmluZygpLmluZGV4T2YoJy4nKSAhPSAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodikudG9GaXhlZCgyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBsZXQgc2h1ZmZsZWQgPSBfLnNodWZmbGUoZm9ybWF0dGVkKVxuICAgICAgICBzZXREYXRhKHNodWZmbGVkKVxuICAgICAgfSlcblxuICAgIGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG4gICAgICBpbml0R0EoKVxuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZVxuICAgIH1cbiAgICBsb2dQYWdlVmlldygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxpcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxY2gnLCBwYWRkaW5nUmlnaHQ6ICcxY2gnIH19PlxuICAgICAgICA8ZGl2IHJlZj17cHJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICcjY2NjJyxcbiAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXt0b3BiYXJfcmVmfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzJjaCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHJlZj17aWNvbl9yZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxY2gnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJMSVBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEluZm8odHJ1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5mb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2RhdGEgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5DT05ORUNUSU9OUzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjNzc3JyB9fT5cbiAgICAgICAgICAgICAgICB7TWF0aC5taW4oZnJhbWUsIGZpbmlzaF9saW5lIC0gMSkgKyAxfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiA2ICogMTkgKyAxICsgJ2NoJyB9fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7a2V5X2Rlcy5tYXAoKGssIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17a1swXSArICc6ICcgKyBrWzJdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtrWzFdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCAqIHRlcm1oZWlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQzMzE0MicsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtjb25fcmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGFcbiAgICAgICAgICAgICAgICAgIC5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oZnJhbWUsIGZpbmlzaF9saW5lIC0gMSkgLSB0ZXJtaGVpZ2h0ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWluKGZyYW1lLCBmaW5pc2hfbGluZSAtIDEpICsgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtmcmFtZSArICh0ZXJtaGVpZ2h0IC0gaSkgLSB0ZXJtaGVpZ2h0ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHJsaCAvIDIgLSAoc2l6ZSArIDEpIC8gMiAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGN3IC8gMiAtIChzaXplICsgMSkgLyAyICsgY3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZFsxOF0gPyByZWQgOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5taW4oZnJhbWUsIGZpbmlzaF9saW5lIC0gMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZXJtaGVpZ2h0IC0gaSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZC5zbGljZSgwLCAxOCkubWFwKChkLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTVFJBVEVHSUVTXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1g6ICdhdXRvJywgb3ZlcmZsb3dZOiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXtyYW5rbGFiZWxfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+UmFua2luZzwvZGl2PlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICdBY2N1cmFjeScsXG4gICAgICAgICAgICAgICAgICAnKFRQK1ROKS9BTEwnLFxuICAgICAgICAgICAgICAgICAgJyhUcnVlIFBvc2l0aXZlICsgVHJ1ZSBOZWdhdGl2ZSkgLyBBTEwnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgJ1ByZWNpc2lvbicsXG4gICAgICAgICAgICAgICAgICAnVFAvKFRQK0ZQKScsXG4gICAgICAgICAgICAgICAgICAnVHJ1ZSBQb3NpdGl2ZSAvIChUcnVlIFBvc2l0aXZlICsgRmFsc2UgUG9zaXRpdmUpJyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICdSZWNhbGwnLFxuICAgICAgICAgICAgICAgICAgJ1RQLyhUUCtGTiknLFxuICAgICAgICAgICAgICAgICAgJ1RydWUgUG9zaXRpdmUgLyAoVHJ1ZSBQb3NpdGl2ZSArIEZhbHNlIE5lZ2F0aXZlKScsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXS5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICB7c29ydCA9PT0gaSA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9e2BSYW5raW5ncyBzb3J0ZWQgYnkgJHtzb3J0X29wdGlvbnNbaV19YH0+XG4gICAgICAgICAgICAgICAgICAgICAge25bMF19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YENsaWNrIHRvIHNvcnQgYnkgJHtzb3J0X29wdGlvbnNbaV19YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0KGkpXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7blswXX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApfXsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0IH19IHRpdGxlPXtuWzJdfT5cbiAgICAgICAgICAgICAgICAgICAge25bMV19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17cmFua3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwIH19PlxuICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoNCldLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PntpICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxGbGlwTW92ZT5cbiAgICAgICAgICAgICAgICB7cmFua3MubWFwKChuYW1lLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3JhbmtzcmVmLmN1cnJlbnRbbmFtZXMuaW5kZXhPZihuYW1lKV19XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tuYW1lcy5pbmRleE9mKG5hbWUpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0IH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9GbGlwTW92ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWSVNVQUxJWkVEXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBvdmVyZmxvd1g6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXt2cmVmfSBzdHlsZT17e319IC8+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxY2gnLCB0b3A6IDAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgICAgICAgcmVmPXt0aXRsZV9yZWZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbaV0sXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e3JlYWRvdXRfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIFBvc2l0aXZlJywgcmVkXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBQb3NpdGl2ZScsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydUcnVlIE5lZ2F0aXZlJywgYmxhY2tdLFxuICAgICAgICAgICAgICAgICAgICBbJ0ZhbHNlIE5lZ2F0aXZlJywgcmVkXSxcbiAgICAgICAgICAgICAgICAgIF0ubWFwKChvLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17b1swXX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDI1JSAtIDAuMjVjaCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaSA9PT0gMiA/ICcxY2gnIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBpIDwgMiA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCAvIDIgKyBybGgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJsaXAgaXMgYW4gYW5vbWFseSBkZXRlY3Rpb24gcHJvdG90eXBlIGJ5eycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jbG91ZGVyYS5jb20vcHJvZHVjdHMvZmFzdC1mb3J3YXJkLWxhYnMtcmVzZWFyY2guaHRtbFwiPlxuICAgICAgICAgICAgICBDbG91ZGVyYSBGYXN0IEZvcndhcmRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC4gU2VlIG1vcmUgZGVtb3Mgb24gb3VyeycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2V4cGVyaW1lbnRzLmZhc3Rmb3J3YXJkbGFicy5jb21cIj5cbiAgICAgICAgICAgICAgZXhwZXJpbWVudHMgcGFnZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnLFxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZyYW1lICsgMSA8PSBmaW5pc2hfbGluZSAtIDEgPyAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlNwZWVkOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyc8J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c3BlZWRzLm1hcCgobiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIGkgPT0gc3BlZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChpKVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWVkIDwgc3BlZWRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVlZChzcGVlZCArIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyc+J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtmcmFtZSArIDEgPD0gZmluaXNoX2xpbmUgLSAxID8gKFxuICAgICAgICAgICAgICBwYXVzZSA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXVzZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGxheVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBhdXNlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge3BhdXNlICYmIGZyYW1lICsgMSA8PSBmaW5pc2hfbGluZSAtIDEgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUaWNrXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7cGF1c2UgJiYgZnJhbWUgKyAxIDw9IGZpbmlzaF9saW5lIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyY2gnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2tpcEZpbmlzaCgpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNraXAgdG8gZmluaXNoXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7ZnJhbWUgKyAxID4gZmluaXNoX2xpbmUgLSAxID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJycgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXN0YXJ0KClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVzdGFydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpbmZvID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEluZm8oZmFsc2UpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzgwY2gnLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSAyY2gpJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCAqIDEuNSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+SW5mbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0SW5mbyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFN0eWxlOiAnaXRhbGljJywgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBCbGlwIGlzIGEgcHJvdG90eXBlIGJ5eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNsb3VkZXJhLmNvbS9wcm9kdWN0cy9mYXN0LWZvcndhcmQtbGFicy1yZXNlYXJjaC5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkXG4gICAgICAgICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAgICAgICBidWlsdCB0byBhY2NvbXBhbnkgb3VyeycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZmYxMi5mYXN0Zm9yd2FyZGxhYnMuY29tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgcmVwb3J0IG9uIERlZXAgTGVhcm5pbmcgZm9yIEFub21hbHkgRGV0ZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQmxpcCBzaG93cyBob3cgZm91ciBkaWZmZXJlbnQgYWxnb3JpdGhtcyAoXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmdzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aSAhPSBuYW1lcy5sZW5ndGggLSAxID8gPHNwYW4+LCA8L3NwYW4+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICApIHBlcmZvcm0gYXQgZGV0ZWN0aW5nIG5ldHdvcmsgYXR0YWNrcyBpbiB0aGV7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2tkZC5pY3MudWNpLmVkdS9kYXRhYmFzZXMva2RkY3VwOTkvdGFzay5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgS0REIG5ldHdvcmsgaW50cnVzaW9uIGRhdGFzZXRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAuIFlvdSBjYW4gcmVhZCBhYm91dCBob3cgZWFjaCBtb2RlbCB3YXMgdHJhaW5lZCBpbiB0aGV7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnByb3RvdG90eXBlIHNlY3Rpb24gb2Ygb3VyIHJlcG9ydDwvYT4uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBUaGUgdG9wIENPTk5FQ1RJT05TIHNlY3Rpb24gc2hvd3MgdGhleycgJ31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQzMzE0MicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrIGNvbm5lY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICBjb21pbmcgaW4sIHdpdGggdGhlIGZlYXR1cmVzIHVzZWQgYnkgZWFjaCBtb2RlbCBmb3IgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbi4gVGhlIGNvbG9yIG9mIHRoZSBzcXVhcmUgc2hvd3MgdGhlIHRydWUgc3RhdHVzIG9mXG4gICAgICAgICAgICAgICAgICAgIHdoZXRoZXIgdGhlIGNvbm5lY3Rpb24gaXMgYW57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgYXR0YWNrXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICBvcnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgbm9ybWFsXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIFNUUkFURUdJRVMgc2VjdGlvbiBzaG93cyBtZXRyaWNzIG9uIGhvdyBlYWNoIGFsZ29yaXRobVxuICAgICAgICAgICAgICAgICAgICBpcyBwZWZvcm1pbmcgb24gdGhlIGluY29taW5nIGRhdGEuIFlvdSBjYW4gc2VlIHRoZSBhY2N1cmFjeSxcbiAgICAgICAgICAgICAgICAgICAgcmVjYWxsLCBhbmQgcHJlY2lzaW9uIG1ldHJpY3MgZm9yIGVhY2ggc3RyYXRlZ3kuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBUaGUgVklTVUFMSVpFRCBzZWN0aW9uIHByb3ZpZGVzIGFub3RoZXIgdmlldyBvZiBlYWNoXG4gICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5J3MgcGVyZm9ybWFuY2UuIEVhY2ggY29ubmVjdGlvbiBpcyB2aXN1YWxpemVkIGFzIGFcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLiBJZiBpdCBpcyBjbGFzc2lmaWVkIGFzIGFuIGF0dGFjayBpdCBpcyBwbGFjZWQgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ7IGlmIGNsYXNzaWZpZWQgbm9ybWFsLCBpdCBpcyBwbGFjZWQgb24gdGhlIHJpZ2h0LiBUaGVcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgcmV2ZWFscyBpdHMgdHJ1ZSBzdGF0dXMuIE92ZXIgdGltZSwgdGhlIGRlbnNpdHkgYW5kXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIG9mIHRoZSBjb2xvcnMgaW4gZWFjaCBzdHJhdGVneSB2aXN1YWxpemF0aW9uIGdpdmVcbiAgICAgICAgICAgICAgICAgICAgeW91IGEgZmVlbCBmb3IgdGhlIGRpZmZlcmVudCBtb2RlbHMnIHN0cmVuZ3RocyBhbmRcbiAgICAgICAgICAgICAgICAgICAgd2Vha25lc3Nlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBzaW11bGF0aW9uIHdpbGwgcnVuIHRocm91Z2ggMTAsMDAwIGNvbm5lY3Rpb25zIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hpbmcuIFlvdSBjYW4gY29udHJvbCB0aGUgc3BlZWQgb2YgdGhlIHNpbXVsYXRpb24gd2l0aFxuICAgICAgICAgICAgICAgICAgICB0aGUgY29udHJvbHMgYXQgdGhlIGJvdHRvbS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2ZyYW1lICE9IGZpbmlzaF9saW5lIC0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnJhbWUgPiAxID8gJ0NvbnRpbnVlJyA6ICdTdGFydCd9IHRoZSBzaW11bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2ZpbmlzaCA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4yKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRGaW5pc2goZmFsc2UpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzgwY2gnLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSAyY2gpJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCAqIDEuNSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+RmluaXNoZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEZpbmlzaChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBBZnRlciB7ZmluaXNoX2xpbmV9IGNvbm5lY3Rpb25zLCB5b3UndmUgcmVhY2hlZCB0aGUgZW5kIG9mXG4gICAgICAgICAgICAgICAgICAgIHRoZSBhbm9tYWx5IGRldGVjdGlvbiBzaW11bGF0aW9uLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHN0YW5kaW5nczpcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtbJ1JhbmtpbmcnLCAnQWNjdXJhY3knLCAnUHJlY2lzaW9uJywgJ1JlY2FsbCddLm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+e259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggfX0+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lc1xuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG4sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYW5lbCA9IHBhbmVsc19yZWYuY3VycmVudFtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpLCBuLCBwYW5lbFs0XSwgcGFuZWxbNV0sIHBhbmVsWzZdXVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJbMiArIHNvcnRdIC0gYVsyICsgc29ydF1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tyWzBdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1tyWzJdLCByWzNdLCByWzRdXS5tYXAodiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygke3Z9JSAtIDFjaClgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+e3Z9JTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZSBhYm91dCB0aGUgbW9kZWxzIGFuZCB0aGVpciBwZXJmb3JtYW5jZSBvbiB0aGUgZnVsbFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0IGlueycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj50aGUgcHJvdG90eXBlIHNlY3Rpb24gb2Ygb3VyIHJlcG9ydDwvYT4uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7c2tpcHBpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJsaCxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2tpcHBpbmcuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGN3LFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBjdyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTG9hZGluZyBkYXRhc2V0Li4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3JsaH1weDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.3ecb5bdddccf05954a81.hot-update.js.map