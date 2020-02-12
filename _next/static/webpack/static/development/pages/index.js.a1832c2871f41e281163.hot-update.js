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
          if (j < 2) {
            $read.childNodes[i].childNodes[j].childNodes[0].innerHTML = panel[j] + ' <em>' + labels[j] + '</em>';
          } else {
            $read.childNodes[i].childNodes[j].childNodes[0].innerHTML = '<em>' + labels[j] + '</em> ' + panel[j];
          }
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
      lineNumber: 578
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
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
      lineNumber: 583
    },
    __self: this
  }, __jsx("div", {
    ref: pref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
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
      lineNumber: 586
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
      lineNumber: 595
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
      lineNumber: 602
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
      lineNumber: 612
    },
    __self: this
  }, "BLIP"), __jsx("button", {
    onClick: function onClick() {
      setInfo(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }, "Info"))), data ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
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
      lineNumber: 631
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, "CONNECTIONS"), __jsx("div", {
    style: {
      marginLeft: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }, __jsx("span", {
    style: {
      color: '#777'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
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
      lineNumber: 646
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
      lineNumber: 647
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
      lineNumber: 648
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
        lineNumber: 656
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
        lineNumber: 664
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
      lineNumber: 678
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
        lineNumber: 698
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
        lineNumber: 706
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
        lineNumber: 716
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
        lineNumber: 724
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
          lineNumber: 737
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
          lineNumber: 745
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
      lineNumber: 761
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
      lineNumber: 770
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
      lineNumber: 771
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: '100%'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
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
        lineNumber: 797
      },
      __self: this
    }, sort === i ? __jsx("span", {
      title: "Rankings sorted by ".concat(sort_options[i]),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 799
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
        lineNumber: 803
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
        lineNumber: 813
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
      lineNumber: 822
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
      lineNumber: 829
    },
    __self: this
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(Array(4)).map(function (n, i) {
    return __jsx("div", {
      style: {},
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831
      },
      __self: this
    }, i + 1);
  })), __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834
    },
    __self: this
  }, ranks.map(function (name, i) {
    return __jsx("div", {
      key: name,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836
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
        lineNumber: 837
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
        lineNumber: 844
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
        lineNumber: 851
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
        lineNumber: 852
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
        lineNumber: 864
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
        lineNumber: 865
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 873
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
        lineNumber: 875
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
        lineNumber: 876
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 884
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
        lineNumber: 886
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
        lineNumber: 887
      },
      __self: this
    }), __jsx("span", {
      style: {
        color: scheme.light
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895
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
      lineNumber: 903
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
      lineNumber: 913
    },
    __self: this
  }, __jsx("canvas", {
    ref: vref,
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914
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
      lineNumber: 915
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
      lineNumber: 919
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
        lineNumber: 924
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
      lineNumber: 935
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
        lineNumber: 944
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
          lineNumber: 951
        },
        __self: this
      }, __jsx("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
          background: o[1],
          height: rlh,
          color: 'white',
          textAlign: 'right',
          paddingRight: '1ch',
          paddingLeft: '1ch'
        }, "textAlign", i < 2 ? 'left' : 'right'),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 957
        },
        __self: this
      }), __jsx("div", {
        style: {
          background: o[1],
          height: rlh,
          color: 'white',
          paddingRight: '1ch',
          paddingLeft: '1ch',
          fontStyle: 'italic',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          display: 'none'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 968
        },
        __self: this
      }, o[0]));
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
      lineNumber: 990
    },
    __self: this
  }, "Blip is an anomaly detection prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999
    },
    __self: this
  }, "Cloudera Fast Forward"), ". See more demos on our", ' ', __jsx("a", {
    href: "https://experiments.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003
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
      lineNumber: 1008
    },
    __self: this
  }, frame + 1 <= finish_line - 1 ? __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026
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
      lineNumber: 1027
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
        lineNumber: 1043
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
        lineNumber: 1052
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
      lineNumber: 1066
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
      lineNumber: 1083
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
      lineNumber: 1092
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
      lineNumber: 1103
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
      lineNumber: 1115
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
      lineNumber: 1125
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
      lineNumber: 1136
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
      lineNumber: 1150
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
      lineNumber: 1165
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173
    },
    __self: this
  }, "Info"), __jsx("button", {
    onClick: function onClick() {
      setInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174
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
      lineNumber: 1182
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
      lineNumber: 1192
    },
    __self: this
  }, "Blip is a prototype by", ' ', __jsx("a", {
    href: "https://www.cloudera.com/products/fast-forward-labs-research.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194
    },
    __self: this
  }, "Cloudera Fast Forward"), ' ', "built to accompany our", ' ', __jsx("a", {
    href: "https://ff12.fastforwardlabs.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198
    },
    __self: this
  }, "report on Deep Learning for Anomaly Detection"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203
    },
    __self: this
  }, "Blip shows how four different algorithms (", names.map(function (n, i) {
    return __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1206
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
        lineNumber: 1207
      },
      __self: this
    }, n), i != names.length - 1 ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1216
      },
      __self: this
    }, ", ") : null);
  }), ") perform at detecting network attacks in the", ' ', __jsx("a", {
    href: "http://kdd.ics.uci.edu/databases/kddcup99/task.html",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1220
    },
    __self: this
  }, "KDD network intrusion dataset"), ". You can read about how each model was trained in the", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224
    },
    __self: this
  }, "protototype section of our report"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226
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
      lineNumber: 1228
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
      lineNumber: 1241
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
      lineNumber: 1251
    },
    __self: this
  }, "normal"), "."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1263
    },
    __self: this
  }, "The STRATEGIES section shows metrics on how each algorithm is peforming on the incoming data. You can see the accuracy, recall, and precision metrics for each strategy."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1268
    },
    __self: this
  }, "The VISUALIZED section provides another view of each strategy's performance. Each connection is visualized as a square. If it is classified as an attack it is placed on the left; if classified normal, it is placed on the right. The color reveals its true status. Over time, the density and position of the colors in each strategy visualization give you a feel for the different models' strengths and weaknesses."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1278
    },
    __self: this
  }, "The simulation will run through 10,000 connections before finishing. You can control the speed of the simulation with the controls at the bottom."), frame != finish_line - 1 ? __jsx("div", {
    style: {
      textAlign: 'right'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284
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
      lineNumber: 1285
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
      lineNumber: 1300
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
      lineNumber: 1314
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
      lineNumber: 1330
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1338
    },
    __self: this
  }, "Finished"), __jsx("button", {
    onClick: function onClick() {
      setFinish(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339
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
      lineNumber: 1347
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1357
    },
    __self: this
  }, "After ", finish_line, " connections, you've reached the end of the anomaly detection simulation."), __jsx("div", {
    style: {
      marginBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1361
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
      lineNumber: 1365
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
        lineNumber: 1372
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
      lineNumber: 1376
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
        lineNumber: 1386
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '100%'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1387
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
        lineNumber: 1389
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
          lineNumber: 1402
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
          lineNumber: 1409
        },
        __self: this
      }), __jsx("div", {
        style: {
          position: 'relative'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1419
        },
        __self: this
      }, v, "%"));
    }));
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1426
    },
    __self: this
  }, "Read more about the models and their performance on the full dataset in", ' ', __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2318732879", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1429
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
      lineNumber: 1436
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
      lineNumber: 1448
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
      lineNumber: 1463
    },
    __self: this
  }, "Loading dataset..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2318732879",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;color:#000;overflow-x:hidden;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}a:hover{opacity:0.8;}#__next-prerender-indicator{display:none;}button{font-family:inherit;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;background:none;border:none;padding:0;margin:0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaThDeUIsQUFHZ0MsQUFLQSxBQU1DLEFBR1csQUFReEIsQUFJSyxBQVFMLEFBTUEsQUFJSyxBQUlBLEFBR0YsQUFHQyxBQUdPLFNBbENWLEFBWVEsQUFNd0IsR0FXNUMsQ0FHQSxDQTVCQSxBQWtCYSxBQUliLEtBekJBLENBa0NnQixDQXhEeUMsQUFLRCxDQUt4RCxHQWtDQSxFQVZzQixLQXJCcUIsRUE0Q2YsYUF0QlAsSUFLckIsZUFKQSxPQXRCMkMscUJBNEN6QixnQkFDSixJQTVDSSxRQTZDTixRQTVDQyxFQTZDRixFQXZEUyxFQUxwQixLQWdCb0IsQUE2Q0gsV0F2RGpCLElBd0RBLEdBN0NBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2ZmMTItZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlUmVmLFxuICBjcmVhdGVSZWYsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VMYXlvdXRFZmZlY3QsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFnZW50IGZyb20gJy4uL2NvbXBvbmVudHMvYWdlbnQnXG5pbXBvcnQgeyBrZXlfZGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25zdGFudHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi9jb21wb25lbnRzL2FuYWx5dGljcydcbmltcG9ydCBGbGlwTW92ZSBmcm9tICdyZWFjdC1mbGlwLW1vdmUnXG5cbmxldCBzY2hlbWUgPSB7XG4gIG5hbWU6ICdQYXJhaXNvIERhcmsnLFxuICBiZzogJyMyZjFlMmUnLFxuICBmZzogJyNiZmJmYmYnLFxuICBsaWdodDogJyM3NzcnLFxuICBodWVzOiBbJyNlZjYxNTUnLCAnIzY1RDZBMycsICcjZmVjNDE4JywgJyM1M0QxRkEnLCAnI0JCOTFFMicsICcjNWJjNGJmJ10sXG59XG5sZXQgcmVkID0gc2NoZW1lLmh1ZXNbMF1cbmxldCBncmVlbiA9IHNjaGVtZS5odWVzWzFdXG5sZXQgeWVsbG93ID0gc2NoZW1lLmh1ZXNbMl1cbmxldCB0ZWFsID0gc2NoZW1lLmh1ZXNbM11cbmxldCBwdXJwbGUgPSBzY2hlbWUuaHVlc1s0XVxubGV0IGJsdWUgPSBzY2hlbWUuaHVlc1s1XVxubGV0IGJncyA9IFt5ZWxsb3csIHRlYWwsIGdyZWVuLCBwdXJwbGVdXG5sZXQgYmxhY2sgPSBzY2hlbWUuYmdcblxubGV0IGZzID0gMTNcbmxldCBsaCA9IDEuNVxubGV0IGNoID0gOS41OTk5OTA4NDQ3MjY1NjJcbmxldCBjdyA9IDhcbmxldCBybGggPSBmcyAqIGxoXG5sZXQgY2VsbCA9IHsgdzogY2gsIGg6IHJsaCAvIDIgfVxuXG5sZXQgc3BlZWRzID0gWzY0MCAqIDIsIDY0MCwgMzIwLCA4MCwgNDAsIDIwXVxuXG5sZXQgbmFtZXMgPSBbJ1BDQScsICdPQ1NWTScsICdBdXRvZW5jb2RlcicsICdCaUdBTiddXG5cbmxldCBuYW1lX21heCA9IG5hbWVzLnJlZHVjZSgodCwgYykgPT4ge1xuICByZXR1cm4gTWF0aC5tYXgoYy5sZW5ndGgsIHQpXG59LCAwKVxuXG5sZXQgc2l6ZSA9IDRcblxubGV0IHRlcm1oZWlnaHQgPSA0XG5cbmxldCBzb3J0X29wdGlvbnMgPSBbJ2FjY3VyYWN5JywgJ3ByZWNpc2lvbicsICdyZWNhbGwnXVxuXG5sZXQgZmluaXNoX2xpbmUgPSAxMDAwMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBoYW5kbGVyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgaHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2ZyYW1lLCBzZXRGcmFtZV0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW3BzcGFjZSwgc2V0UHNwYWNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbcGxlZnQsIHNldFBsZWZ0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBwYW5lbHNfcmVmID0gdXNlUmVmKFsuLi5BcnJheSg0KV0ubWFwKG4gPT4gWy4uLkFycmF5KDQpXS5tYXAobiA9PiAwKSkpXG4gIGxldCByYW5rc3JlZiA9IHVzZVJlZihbLi4uQXJyYXkoNCldLm1hcChuID0+IGNyZWF0ZVJlZigpKSlcbiAgbGV0IHBkaW1fcmVmID0gdXNlUmVmKFtdKVxuICBsZXQgdGl0bGVfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdHJ1dGhfcmVmID0gdXNlUmVmKFswLCAwXSlcbiAgbGV0IHRyZWFkb3V0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmFua2xhYmVsX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdG9wYmFyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2Rwciwgc2V0RHByXSA9IHVzZVN0YXRlKDEpXG4gIGxldCBpY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY29uX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW3NwZWVkLCBzZXRTcGVlZF0gPSB1c2VTdGF0ZSgzKVxuICBsZXQgW2luaXRTcGVlZCwgc2V0SW5pdFNwZWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHRydWUpXG4gIGxldCBbc29ydCwgc2V0U29ydF0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW2ZpbmlzaCwgc2V0RmluaXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW3JhbmtzLCBzZXRSYW5rc10gPSB1c2VTdGF0ZShuYW1lcy5zbGljZSgpKVxuICBsZXQgW3NraXBwaW5nLCBzZXRTa2lwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IFtza2lwcmVsYXksIHNldFNraXByZWxheV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbGF5b3V0XG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuXG4gICAgICBsZXQgdndpZHRoID0gcHNwYWNlIC0gOFxuICAgICAgdi53aWR0aCA9IHZ3aWR0aCAqIGRwclxuICAgICAgdi5zdHlsZS5tYXJnaW5MZWZ0ID0gcGxlZnQgKyAncHgnXG4gICAgICBsZXQgdnggPSB2LmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgc3RhY2tlZCA9IGZhbHNlXG4gICAgICBsZXQgbGMgPSAyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gODAxKSBzdGFja2VkID0gdHJ1ZVxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMSkgbGMgPSAxXG5cbiAgICAgIGxldCBjb2x1bW5zID0gTWF0aC5mbG9vcih2LndpZHRoIC8gc2l6ZSlcbiAgICAgIGxldCBwYW5lbF9jb2x1bW5zID0gTWF0aC5taW4oXG4gICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5mbG9vcigodi53aWR0aCAvIGRwciAtIChzdGFja2VkID8gMCA6IHNpemUgKiA0KSkgLyBzaXplKSAvIGxjXG4gICAgICAgICksXG4gICAgICAgIDMwMFxuICAgICAgKVxuICAgICAgbGV0IHBhbmVsX3Jvd3MgPSBNYXRoLmNlaWwoMTAwMDAgLyAocGFuZWxfY29sdW1ucyAtIDMpKVxuXG4gICAgICBsZXQgcHcgPSBwYW5lbF9jb2x1bW5zICogc2l6ZVxuICAgICAgbGV0IHBoID0gcGFuZWxfcm93cyAqIHNpemVcblxuICAgICAgbGV0IHBjID0gbGNcbiAgICAgIGxldCBwciA9IDQgLyBsY1xuXG4gICAgICBsZXQgdG9wID0gcmxoXG4gICAgICBsZXQgYm90dG9tID0gcmxoICogMlxuICAgICAgbGV0IGJvdHRvbV9zcGFjZSA9IHJsaCAvIDJcblxuICAgICAgbGV0IHRjID0gcGFuZWxfY29sdW1ucyAqIGxjICsgKHN0YWNrZWQgPyAwIDogNClcbiAgICAgIGxldCB0ciA9IE1hdGguY2VpbCgxMDAwMCAvIChjb2x1bW5zIC0gMSkpXG4gICAgICBsZXQgdHcgPSB0YyAqIHNpemVcbiAgICAgIGxldCB0aCA9IHRyICogc2l6ZVxuXG4gICAgICBsZXQgdmhlaWdodCA9ICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKiBwclxuICAgICAgdi5oZWlnaHQgPSB2aGVpZ2h0ICogZHByXG5cbiAgICAgIHYuc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICB2LnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIHZ4LnNjYWxlKGRwciwgZHByKVxuXG4gICAgICBsZXQgaCA9IGhyZWYuY3VycmVudFxuICAgICAgaC53aWR0aCA9IHYud2lkdGhcbiAgICAgIGguaGVpZ2h0ID0gdi5oZWlnaHRcbiAgICAgIGguc3R5bGUud2lkdGggPSB2d2lkdGggKyAncHgnXG4gICAgICBoLnN0eWxlLmhlaWdodCA9IHZoZWlnaHQgKyAncHgnXG5cbiAgICAgIGxldCBoeCA9IGguZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaHguc2NhbGUoZHByLCBkcHIpXG5cbiAgICAgIHZ4LmZpbGxTdHlsZSA9ICcjZWVlJ1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCBpID0gciAqIHBjICsgY1xuICAgICAgICAgIGxldCB4ID0gYyAqIChwdyArIHNpemUgKiA0KVxuICAgICAgICAgIGxldCB5ID0gciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3BcbiAgICAgICAgICBsZXQgdyA9IHB3XG4gICAgICAgICAgbGV0IGggPSBwaFxuICAgICAgICAgIHBkaW1baV0gPSBbeCwgeSwgdywgaF1cbiAgICAgICAgICB2eC5maWxsUmVjdCh4LCB5LCB3LCBoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCAkdGl0bGVzID0gdGl0bGVfcmVmLmN1cnJlbnRcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcHI7IHIrKykge1xuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBjOyBjKyspIHtcbiAgICAgICAgICBsZXQgJHQgPSAkdGl0bGVzLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkdC5zdHlsZS50b3AgPSByICogKHRvcCArIHBoICsgYm90dG9tICsgYm90dG9tX3NwYWNlKSArICdweCdcbiAgICAgICAgICAkdC5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICR0LnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0ICRyZWFkID0gcmVhZG91dF9yZWYuY3VycmVudFxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwcjsgcisrKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGM7IGMrKykge1xuICAgICAgICAgIGxldCAkciA9ICRyZWFkLmNoaWxkTm9kZXNbciAqIHBjICsgY11cbiAgICAgICAgICAkci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAkci5zdHlsZS50b3AgPVxuICAgICAgICAgICAgciAqICh0b3AgKyBwaCArIGJvdHRvbSArIGJvdHRvbV9zcGFjZSkgKyB0b3AgKyBwaCArICdweCdcbiAgICAgICAgICAkci5zdHlsZS53aWR0aCA9IHB3ICsgJ3B4J1xuICAgICAgICAgICRyLnN0eWxlLmxlZnQgPSBjICogKHB3ICsgc2l6ZSAqIDQpICsgY3cgKyAncHgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHRiID0gdG9wYmFyX3JlZi5jdXJyZW50XG4gICAgICB0Yi5zdHlsZS53aWR0aCA9IHR3ICsgJ3B4J1xuXG4gICAgICBsZXQgJHJhbmsgPSByYW5rcmVmLmN1cnJlbnRcbiAgICAgIGxldCByYW5raW5nX3dpZHRoID0gTWF0aC5tYXgoY2ggKiA3NCwgdHcpXG4gICAgICAkcmFuay5zdHlsZS53aWR0aCA9IHJhbmtpbmdfd2lkdGggLSBjdyArICdweCdcbiAgICAgIHJhbmtsYWJlbF9yZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IHJhbmtpbmdfd2lkdGggLSBjdyArICdweCdcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcmFua3NyZWYuY3VycmVudC5sZW5ndGg7IHIrKykge1xuICAgICAgICByYW5rc3JlZi5jdXJyZW50W3JdLmN1cnJlbnQuY2hpbGROb2Rlc1swXS53aWR0aCA9IHJhbmtpbmdfd2lkdGggLSBjd1xuICAgICAgICByYW5rc3JlZi5jdXJyZW50W3JdLmN1cnJlbnQuY2hpbGROb2Rlc1swXS5oZWlnaHQgPSBybGggKyAxXG4gICAgICB9XG5cbiAgICAgIGxldCBpY29uID0gaWNvbl9yZWYuY3VycmVudFxuICAgICAgaWNvbi53aWR0aCA9IGN3ICogZHByXG4gICAgICBpY29uLmhlaWdodCA9IHJsaCAqIDEuNSAqIGRwclxuICAgICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpeC5zY2FsZShkcHIsIGRwcilcblxuICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoXG4gICAgICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICBmdW5jdGlvbigvKiBmdW5jdGlvbiAqLyBjYWxsYmFjaywgLyogRE9NRWxlbWVudCAqLyBlbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSkoKVxuXG4gICAgICAvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNnaXN0Y29tbWVudC0xOTUzOTI1XG4gICAgICAvKipcbiAgICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgc2V0SW50ZXJ2YWwgZXhjZXB0IHVzZXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgICAgICovXG4gICAgICB3aW5kb3cuckludGVydmFsID0gZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgICAgICF3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICApICYmIC8vIEZpcmVmb3ggNSBzaGlwcyB3aXRob3V0IGNhbmNlbCBzdXBwb3J0XG4gICAgICAgICAgIXdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXG4gICAgICAgICAgIXdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRJbnRlcnZhbChmbiwgZGVsYXkpXG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpXG5cbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGVsdGEgPSBjdXJyZW50IC0gc3RhcnRcblxuICAgICAgICAgIGlmIChkZWx0YSA+PSBkZWxheSkge1xuICAgICAgICAgICAgZm4uY2FsbCgpXG4gICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlLnZhbHVlID0gcmVxdWVzdEFuaW1GcmFtZShsb29wKVxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmVoYXZlcyB0aGUgc2FtZSBhcyBjbGVhckludGVydmFsIGV4Y2VwdCB1c2VzIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHdoZXJlIHBvc3NpYmxlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAqIEBwYXJhbSB7aW50fG9iamVjdH0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbCA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICA/IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgICAgICAgICAgICBoYW5kbGUudmFsdWVcbiAgICAgICAgICAgICkgLyogU3VwcG9ydCBmb3IgbGVnYWN5IEFQSSAqL1xuICAgICAgICAgIDogd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpXG4gICAgICAgICAgOiB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgID8gd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgPyB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKVxuICAgICAgICAgIDogY2xlYXJJbnRlcnZhbChoYW5kbGUpXG4gICAgICB9XG5cbiAgICAgIGlmICghcGF1c2UgJiYgIWluZm8pIHtcbiAgICAgICAgaGFuZGxlcl9yZWYuY3VycmVudCA9IHdpbmRvdy5ySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHNwZWVkc1tzcGVlZF0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclJJbnRlcnZhbChoYW5kbGVyX3JlZi5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRJbml0U3BlZWQodHJ1ZSlcbiAgfSwgW2RhdGFdKVxuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRTcGVlZCAhPSBmYWxzZSkge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgICBpZiAoIXBhdXNlICYmICFpbmZvKSB7XG4gICAgICAgIGhhbmRsZXJfcmVmLmN1cnJlbnQgPSBySW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldEZyYW1lKGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIHNwZWVkc1tzcGVlZF0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbc3BlZWQsIHBhdXNlLCBpbmZvXSlcblxuICBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGlmIChoYW5kbGVyX3JlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuY2xlYXJSSW50ZXJ2YWwoaGFuZGxlcl9yZWYuY3VycmVudClcbiAgICB9XG4gICAgc2V0SW5pdFNwZWVkKGZhbHNlKVxuXG4gICAgLy8gZ2V0IGRhdGFcbiAgICBmZXRjaCgnY29tYmluZWQuanNvbicpXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oX2RhdGEgPT4ge1xuICAgICAgICBsZXQgZm9ybWF0dGVkID0gX2RhdGEubWFwKHJvdyA9PlxuICAgICAgICAgIHJvdy5tYXAodiA9PiB7XG4gICAgICAgICAgICBpZiAodi50b1N0cmluZygpLmluZGV4T2YoJy4nKSAhPSAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodikudG9GaXhlZCgyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBsZXQgc2h1ZmZsZWQgPSBfLnNodWZmbGUoZm9ybWF0dGVkKVxuICAgICAgICBzZXREYXRhKHNodWZmbGVkKVxuICAgICAgfSlcblxuICAgIHNldEZyYW1lKDApXG4gICAgcGFuZWxzX3JlZi5jdXJyZW50ID0gWy4uLkFycmF5KDQpXS5tYXAobiA9PiBbLi4uQXJyYXkoNCldLm1hcChuID0+IDApKVxuICAgIHNldFBhdXNlKGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lKSB7XG4gICAgaWYgKGZyYW1lIDwgZGF0YS5sZW5ndGggJiYgZnJhbWUgPCBmaW5pc2hfbGluZSAtIDEpIHtcbiAgICAgIGxldCBwYW5lbHMgPSBwYW5lbHNfcmVmLmN1cnJlbnRcbiAgICAgIGxldCAkcmVhZCA9IHJlYWRvdXRfcmVmLmN1cnJlbnRcbiAgICAgIGxldCBwZGltID0gcGRpbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgdiA9IHZyZWYuY3VycmVudFxuICAgICAgbGV0IHZ4ID0gdi5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgIGxldCBoID0gaHJlZi5jdXJyZW50XG4gICAgICBsZXQgaHggPSBoLmdldENvbnRleHQoJzJkJylcblxuICAgICAgLy8gdXBkYXRlIHBhbmVsIGRhdGFcbiAgICAgIGxldCBwYW5lbF9rZXlzID0gWzE5LCAyMCwgMjEsIDIyXVxuICAgICAgbGV0IHJlY29yZCA9IGRhdGFbZnJhbWVdXG4gICAgICBsZXQgYW5vbWFseSA9IHJlY29yZFsxOF0gPT09IDEgPyB0cnVlIDogZmFsc2VcblxuICAgICAgaWYgKGFub21hbHkpIHtcbiAgICAgICAgdnguZmlsbFN0eWxlID0gcmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2eC5maWxsU3R5bGUgPSBzY2hlbWUuYmdcbiAgICAgIH1cblxuICAgICAgbGV0IHBjID0gcGRpbVswXVsyXSAvIHNpemVcbiAgICAgIGxldCBwciA9IHBkaW1bMF1bM10gLyBzaXplXG5cbiAgICAgIGh4LmNsZWFyUmVjdCgwLCAwLCBoLndpZHRoIC8gZHByLCBoLmhlaWdodCAvIGRwcilcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW2ldXG4gICAgICAgIGxldCBkZXRlY3RlZCA9IHJlY29yZFtwYW5lbF9rZXlzW2ldXVxuXG4gICAgICAgIGxldCBwMXgsIHAxeVxuICAgICAgICAvLyBUUCBGUCBUTiBGTlxuICAgICAgICBpZiAoZGV0ZWN0ZWQgPiAwLjEpIHtcbiAgICAgICAgICBsZXQgbiA9IHBhbmVsc1tpXVswXSArIHBhbmVsc1tpXVsxXVxuICAgICAgICAgIHAxeSA9IChwciAtIChuICUgcHIpIC0gMSkgKiBzaXplXG4gICAgICAgICAgcDF4ID0gTWF0aC5mbG9vcihuIC8gcHIpICogc2l6ZVxuICAgICAgICAgIGlmIChhbm9tYWx5KSB7XG4gICAgICAgICAgICAvLyB0cnVlIHBvc1xuICAgICAgICAgICAgcGFuZWxzW2ldWzBdKytcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZmFsc2UgcG9zXG4gICAgICAgICAgICBwYW5lbHNbaV1bMV0rK1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbiA9IHBhbmVsc1tpXVsyXSArIHBhbmVsc1tpXVszXVxuICAgICAgICAgIHAxeSA9IChwciAtIChuICUgcHIpIC0gMSkgKiBzaXplXG4gICAgICAgICAgcDF4ID0gKHBjIC0gTWF0aC5mbG9vcihuIC8gcHIpIC0gMSkgKiBzaXplIC0gMVxuICAgICAgICAgIGlmIChhbm9tYWx5KSB7XG4gICAgICAgICAgICAvLyBmYWxzZSBuZWdcbiAgICAgICAgICAgIHBhbmVsc1tpXVszXSsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRydWUgbmVnXG4gICAgICAgICAgICBwYW5lbHNbaV1bMl0rK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaW0gPSBwZGltW2ldXG4gICAgICAgIHZ4LmZpbGxSZWN0KGRpbVswXSArIHAxeCwgZGltWzFdICsgcDF5LCBzaXplICsgMSwgc2l6ZSArIDEpXG5cbiAgICAgICAgLy8gaHguZmlsbFN0eWxlID0gJyM0MzMxNDInXG4gICAgICAgIGh4LmZpbGxTdHlsZSA9IGJnc1tpXVxuICAgICAgICBoeC5maWxsUmVjdChcbiAgICAgICAgICBkaW1bMF0gKyBwMXggLSAyLFxuICAgICAgICAgIGRpbVsxXSArIHAxeSAtIDIsXG4gICAgICAgICAgc2l6ZSArIDEgKyA0LFxuICAgICAgICAgIHNpemUgKyAxICsgNFxuICAgICAgICApXG4gICAgICAgIGh4LmZpbGxTdHlsZSA9IHZ4LmZpbGxTdHlsZVxuICAgICAgICBoeC5maWxsUmVjdChkaW1bMF0gKyBwMXgsIGRpbVsxXSArIHAxeSwgc2l6ZSArIDEsIHNpemUgKyAxKVxuXG4gICAgICAgIGxldCBsYWJlbHMgPSBbJ1RQJywgJ0ZQJywgJ1ROJywgJ0ZOJ11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICBpZiAoaiA8IDIpIHtcbiAgICAgICAgICAgICRyZWFkLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1tqXS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgIHBhbmVsW2pdICsgJyA8ZW0+JyArIGxhYmVsc1tqXSArICc8L2VtPidcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHJlYWQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzW2pdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxlbT4nICsgbGFiZWxzW2pdICsgJzwvZW0+ICcgKyBwYW5lbFtqXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWNjdXJhY3kgPSAoVFArVE4pLyhUUCtUTitGUCtGTilcbiAgICAgICAgbGV0IGFjY3VyYWN5ID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAoKHBhbmVsWzBdICsgcGFuZWxbMl0pIC9cbiAgICAgICAgICAgIChwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXSkpICpcbiAgICAgICAgICAgIDEwMFxuICAgICAgICApXG4gICAgICAgIC8vIHByZWNpc2lvbiB0cCAvICh0cCArIGZwKVxuICAgICAgICBsZXQgcHJlY2lzaW9uID0gTWF0aC5yb3VuZCgocGFuZWxbMF0gLyAocGFuZWxbMF0gKyBwYW5lbFsxXSkpICogMTAwKVxuXG4gICAgICAgIC8vIHJlY2FsbCB0cCAvICh0cCArIGZuKVxuICAgICAgICBsZXQgcmVjYWxsID0gTWF0aC5yb3VuZCgocGFuZWxbMF0gLyAocGFuZWxbMF0gKyBwYW5lbFszXSkpICogMTAwKVxuXG4gICAgICAgIC8vIDQgNSA2XG4gICAgICAgIHBhbmVsc1tpXVs0XSA9IGFjY3VyYWN5XG4gICAgICAgIHBhbmVsc1tpXVs1XSA9IHByZWNpc2lvblxuICAgICAgICBwYW5lbHNbaV1bNl0gPSByZWNhbGxcbiAgICAgIH1cblxuICAgICAgc2V0UmFua2luZ3MoKVxuICAgIH1cblxuICAgIC8vIGZpbmlzaCBsaW5lXG4gICAgaWYgKGZyYW1lID49IGZpbmlzaF9saW5lIC0gMSkge1xuICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICBzZXRGaW5pc2godHJ1ZSlcbiAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgcHJvY2Vzc0ZyYW1lKGZyYW1lKVxuICAgIH1cbiAgfSwgW2RhdGEsIGZyYW1lXSlcblxuICBmdW5jdGlvbiBzZXRSYW5raW5ncygpIHtcbiAgICBsZXQgcGFuZWxzID0gcGFuZWxzX3JlZi5jdXJyZW50XG5cbiAgICAvLyBzZXQgcmFua2luZ3NcbiAgICBsZXQgcmFua19yb3dzID0gbmFtZXMubWFwKChuLCBpKSA9PiB7XG4gICAgICBsZXQgcGFuZWwgPSBwYW5lbHNbaV1cbiAgICAgIHJldHVybiBbaSwgbiwgcGFuZWxbNF0sIHBhbmVsWzVdLCBwYW5lbFs2XV1cbiAgICB9KVxuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBuYW1lcy5sZW5ndGg7IHIrKykge1xuICAgICAgbGV0ICRyID0gcmFua3NyZWYuY3VycmVudFtyXS5jdXJyZW50XG4gICAgICBsZXQgcmMgPSAkci5jaGlsZE5vZGVzWzBdXG4gICAgICBsZXQgcmN4ID0gcmMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgcmN4LmNsZWFyUmVjdCgwLCAwLCByYy53aWR0aCwgcmxoICsgMSlcbiAgICAgIGxldCByb3cgPSByYW5rX3Jvd3Nbcl1cbiAgICAgIGxldCBoID0gcmxoICsgMVxuICAgICAgcmN4LmZpbGxTdHlsZSA9ICcjY2NjJ1xuICAgICAgbGV0IHhzdGVwID0gcmMud2lkdGggLyA0XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykge1xuICAgICAgICBsZXQgeCA9IChjICsgMSkgKiB4c3RlcFxuICAgICAgICBsZXQgdyA9IChyb3dbYyArIDJdIC8gMTAwKSAqIHhzdGVwIC0gY3dcbiAgICAgICAgaWYgKHcgPD0gMCkgdyA9IDBcbiAgICAgICAgcmN4LmZpbGxSZWN0KHgsIDAsIHcsIGgpXG4gICAgICB9XG5cbiAgICAgIGxldCBwYW5lbCA9IHBhbmVsc1tyb3dbMF1dXG4gICAgICBsZXQgW1RQLCBGUCwgVE4sIEZOXSA9IHBhbmVsXG4gICAgICBsZXQgdG90YWwgPSBwYW5lbFswXSArIHBhbmVsWzFdICsgcGFuZWxbMl0gKyBwYW5lbFszXVxuXG4gICAgICAkci5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gIWlzTmFOKHJvd1syXSlcbiAgICAgICAgPyByb3dbMl0gKyAnJSAnXG4gICAgICAgIDogJ04vQSAnXG4gICAgICAkci5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCgke1RQfSske1ROfSkvJHt0b3RhbH1gXG4gICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gIWlzTmFOKHJvd1szXSlcbiAgICAgICAgPyByb3dbM10gKyAnJSAnXG4gICAgICAgIDogJ04vQSAnXG4gICAgICAkci5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCR7VFB9Lygke1RQfSske0ZQfSlgXG4gICAgICAkci5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MID0gIWlzTmFOKHJvd1s0XSlcbiAgICAgICAgPyByb3dbNF0gKyAnJSAnXG4gICAgICAgIDogJ04vQSAnXG4gICAgICAkci5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gYCR7VFB9Lygke1RQfSske0ZOfSlgXG4gICAgfVxuXG4gICAgcmFua19yb3dzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGJbMiArIHNvcnRdIC0gYVsyICsgc29ydF1cbiAgICB9KVxuXG4gICAgbGV0IGljb24gPSBpY29uX3JlZi5jdXJyZW50XG4gICAgbGV0IGl4ID0gaWNvbi5nZXRDb250ZXh0KCcyZCcpXG4gICAgaXguY2xlYXJSZWN0KDAsIDAsIGN3LCBybGgpXG4gICAgbGV0IHN0ZXAgPSAocmxoICogMS41KSAvIDRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmtfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IHJhbmtfcm93c1tpXVxuICAgICAgbGV0IHBhbmVsID0gcGFuZWxzW3Jvd1swXV1cbiAgICAgIGxldCB5ID0gaSAqIHN0ZXBcbiAgICAgIGxldCB3ID0gKHBhbmVsWzRdIC8gMTAwKSAqIGN3XG4gICAgICBpeC5maWxsU3R5bGUgPSBiZ3Nbcm93WzBdXVxuICAgICAgaXguZmlsbFJlY3QoMCwgeSwgdywgc3RlcClcbiAgICB9XG5cbiAgICBzZXRSYW5rcyhyYW5rX3Jvd3MubWFwKG8gPT4gb1sxXSkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChza2lwcmVsYXkpIHtcbiAgICAgIGZvciAobGV0IGkgPSBmcmFtZTsgaSA8IGZpbmlzaF9saW5lIC0gMTsgaSsrKSB7XG4gICAgICAgIHByb2Nlc3NGcmFtZShpKVxuICAgICAgfVxuICAgICAgc2V0RnJhbWUoZmluaXNoX2xpbmUgLSAxKVxuICAgICAgc2V0U2tpcHBpbmcoZmFsc2UpXG4gICAgICBzZXRTa2lwcmVsYXkoZmFsc2UpXG4gICAgfVxuICB9LCBbc2tpcHJlbGF5XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChza2lwcGluZykge1xuICAgICAgaWYgKGhhbmRsZXJfcmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyUkludGVydmFsKGhhbmRsZXJfcmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgICBzZXRTa2lwcmVsYXkodHJ1ZSlcbiAgICB9XG4gIH0sIFtza2lwcGluZ10pXG5cbiAgZnVuY3Rpb24gc2tpcEZpbmlzaCgpIHtcbiAgICBzZXRTa2lwcGluZyh0cnVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgc2V0UmFua2luZ3MoKVxuICAgIH1cbiAgfSwgW3NvcnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBzZXREcHIoZHByKVxuXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHNwYWNlID0gcC5vZmZzZXRXaWR0aFxuICAgIGxldCBwbGVmdCA9IHAub2Zmc2V0TGVmdFxuICAgIHNldFBzcGFjZShwc3BhY2UpXG4gICAgc2V0UGxlZnQocGxlZnQpXG5cbiAgICAvLyBnZXQgZGF0YVxuICAgIGZldGNoKCdjb21iaW5lZC5qc29uJylcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihfZGF0YSA9PiB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBfZGF0YS5tYXAocm93ID0+XG4gICAgICAgICAgcm93Lm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGlmICh2LnRvU3RyaW5nKCkuaW5kZXhPZignLicpICE9IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIGxldCBzaHVmZmxlZCA9IF8uc2h1ZmZsZShmb3JtYXR0ZWQpXG4gICAgICAgIHNldERhdGEoc2h1ZmZsZWQpXG4gICAgICB9KVxuXG4gICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgIGluaXRHQSgpXG4gICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlXG4gICAgfVxuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CbGlwPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzFjaCcsIHBhZGRpbmdSaWdodDogJzFjaCcgfX0+XG4gICAgICAgIDxkaXYgcmVmPXtwcmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnLFxuICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3RvcGJhcl9yZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMmNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtpY29uX3JlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICB3aWR0aDogJzFjaCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQkxJUFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SW5mbyh0cnVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJbmZvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZGF0YSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PkNPTk5FQ1RJT05TPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxY2gnIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM3NzcnIH19PlxuICAgICAgICAgICAgICAgIHtNYXRoLm1pbihmcmFtZSwgZmluaXNoX2xpbmUgLSAxKSArIDF9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWluV2lkdGg6IDYgKiAxOSArIDEgKyAnY2gnIH19PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtrZXlfZGVzLm1hcCgoaywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtrWzBdICsgJzogJyArIGtbMl19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2tbMV19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoICogdGVybWhlaWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDMzMTQyJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBzY2hlbWUuZmcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByZWY9e2Nvbl9yZWZ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YVxuICAgICAgICAgICAgICAgICAgLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihmcmFtZSwgZmluaXNoX2xpbmUgLSAxKSAtIHRlcm1oZWlnaHQgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oZnJhbWUsIGZpbmlzaF9saW5lIC0gMSkgKyAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZyYW1lICsgKHRlcm1oZWlnaHQgLSBpKSAtIHRlcm1oZWlnaHQgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmxoIC8gMiAtIChzaXplICsgMSkgLyAyIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY3cgLyAyIC0gKHNpemUgKyAxKSAvIDIgKyBjdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkWzE4XSA/IHJlZCA6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLm1pbihmcmFtZSwgZmluaXNoX2xpbmUgLSAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1oZWlnaHQgLSBpKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybWhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtkLnNsaWNlKDAsIDE4KS5tYXAoKGQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHJsaCAvIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNUUkFURUdJRVNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WDogJ2F1dG8nLCBvdmVyZmxvd1k6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3JhbmtsYWJlbF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5SYW5raW5nPC9kaXY+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgJ0FjY3VyYWN5JyxcbiAgICAgICAgICAgICAgICAgICcoVFArVE4pL0FMTCcsXG4gICAgICAgICAgICAgICAgICAnKFRydWUgUG9zaXRpdmUgKyBUcnVlIE5lZ2F0aXZlKSAvIEFMTCcsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAnUHJlY2lzaW9uJyxcbiAgICAgICAgICAgICAgICAgICdUUC8oVFArRlApJyxcbiAgICAgICAgICAgICAgICAgICdUcnVlIFBvc2l0aXZlIC8gKFRydWUgUG9zaXRpdmUgKyBGYWxzZSBQb3NpdGl2ZSknLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgJ1JlY2FsbCcsXG4gICAgICAgICAgICAgICAgICAnVFAvKFRQK0ZOKScsXG4gICAgICAgICAgICAgICAgICAnVHJ1ZSBQb3NpdGl2ZSAvIChUcnVlIFBvc2l0aXZlICsgRmFsc2UgTmVnYXRpdmUpJyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBdLm1hcCgobiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtzb3J0ID09PSBpID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT17YFJhbmtpbmdzIHNvcnRlZCBieSAke3NvcnRfb3B0aW9uc1tpXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7blswXX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgQ2xpY2sgdG8gc29ydCBieSAke3NvcnRfb3B0aW9uc1tpXX1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnQoaSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTdHlsZTogJ2l0YWxpYycgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtuWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9eycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQsIGZvbnRTdHlsZTogJ25vcm1hbCcgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25bMl19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuWzFdfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3JhbmtyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDQpXS5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT57aSArIDF9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RmxpcE1vdmU+XG4gICAgICAgICAgICAgICAge3JhbmtzLm1hcCgobmFtZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtyYW5rc3JlZi5jdXJyZW50W25hbWVzLmluZGV4T2YobmFtZSldfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbbmFtZXMuaW5kZXhPZihuYW1lKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBzY2hlbWUubGlnaHQgfX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogc2NoZW1lLmxpZ2h0IH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHNjaGVtZS5saWdodCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvRmxpcE1vdmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoIC8gMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVklTVUFMSVpFRFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgb3ZlcmZsb3dYOiAnYXV0bycgfX0+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17dnJlZn0gc3R5bGU9e3t9fSAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9e2hyZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMWNoJywgdG9wOiAwIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwIH19XG4gICAgICAgICAgICAgIHJlZj17dGl0bGVfcmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmdzW2ldLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtyZWFkb3V0X3JlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1suLi5BcnJheSg0KV0ubWFwKCgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIFsnVHJ1ZSBQb3NpdGl2ZScsIHJlZF0sXG4gICAgICAgICAgICAgICAgICAgIFsnRmFsc2UgUG9zaXRpdmUnLCBibGFja10sXG4gICAgICAgICAgICAgICAgICAgIFsnVHJ1ZSBOZWdhdGl2ZScsIGJsYWNrXSxcbiAgICAgICAgICAgICAgICAgICAgWydGYWxzZSBOZWdhdGl2ZScsIHJlZF0sXG4gICAgICAgICAgICAgICAgICBdLm1hcCgobywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnY2FsYygyNSUgLSAwLjI1Y2gpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGkgPT09IDIgPyAnMWNoJyA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogaSA8IDIgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogb1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b1swXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggLyAyICsgcmxoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCbGlwIGlzIGFuIGFub21hbHkgZGV0ZWN0aW9uIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2xvdWRlcmEuY29tL3Byb2R1Y3RzL2Zhc3QtZm9yd2FyZC1sYWJzLXJlc2VhcmNoLmh0bWxcIj5cbiAgICAgICAgICAgICAgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuIFNlZSBtb3JlIGRlbW9zIG9uIG91cnsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9leHBlcmltZW50cy5mYXN0Zm9yd2FyZGxhYnMuY29tXCI+XG4gICAgICAgICAgICAgIGV4cGVyaW1lbnRzIHBhZ2VcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjY2NjJyxcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmcmFtZSArIDEgPD0gZmluaXNoX2xpbmUgLSAxID8gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5TcGVlZDo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BlZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoc3BlZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAge3NwZWVkcy5tYXAoKG4sIGkpID0+XG4gICAgICAgICAgICAgICAgICBpID09IHNwZWVkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoaSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuMjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjI1Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNjaGVtZS5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC4yNWNoJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA8IHNwZWVkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3BlZWQoc3BlZWQgKyAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnPid9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7ZnJhbWUgKyAxIDw9IGZpbmlzaF9saW5lIC0gMSA/IChcbiAgICAgICAgICAgICAgcGF1c2UgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJjaCcgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGF1c2UoZmFsc2UpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXVzZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQYXVzZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtwYXVzZSAmJiBmcmFtZSArIDEgPD0gZmluaXNoX2xpbmUgLSAxID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJjaCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRGcmFtZShmdW5jdGlvbihwcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgMVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGlja1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge3BhdXNlICYmIGZyYW1lICsgMSA8PSBmaW5pc2hfbGluZSAtIDEgPyAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMmNoJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNraXBGaW5pc2goKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTa2lwIHRvIGZpbmlzaFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2ZyYW1lICsgMSA+IGZpbmlzaF9saW5lIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVzdGFydCgpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aW5mbyA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTksXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4yKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJbmZvKGZhbHNlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MGNoJyxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gMmNoKScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoICogMS41LFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PkluZm88L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEluZm8oZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTdHlsZTogJ2l0YWxpYycsIG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQmxpcCBpcyBhIHByb3RvdHlwZSBieXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jbG91ZGVyYS5jb20vcHJvZHVjdHMvZmFzdC1mb3J3YXJkLWxhYnMtcmVzZWFyY2guaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIENsb3VkZXJhIEZhc3QgRm9yd2FyZFxuICAgICAgICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgYnVpbHQgdG8gYWNjb21wYW55IG91cnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZmMTIuZmFzdGZvcndhcmRsYWJzLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydCBvbiBEZWVwIExlYXJuaW5nIGZvciBBbm9tYWx5IERldGVjdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEJsaXAgc2hvd3MgaG93IGZvdXIgZGlmZmVyZW50IGFsZ29yaXRobXMgKFxuICAgICAgICAgICAgICAgICAgICB7bmFtZXMubWFwKChuLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2kgIT0gbmFtZXMubGVuZ3RoIC0gMSA/IDxzcGFuPiwgPC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgKSBwZXJmb3JtIGF0IGRldGVjdGluZyBuZXR3b3JrIGF0dGFja3MgaW4gdGhleycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9rZGQuaWNzLnVjaS5lZHUvZGF0YWJhc2VzL2tkZGN1cDk5L3Rhc2suaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEtERCBuZXR3b3JrIGludHJ1c2lvbiBkYXRhc2V0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLiBZb3UgY2FuIHJlYWQgYWJvdXQgaG93IGVhY2ggbW9kZWwgd2FzIHRyYWluZWQgaW4gdGhleycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5wcm90b3RvdHlwZSBzZWN0aW9uIG9mIG91ciByZXBvcnQ8L2E+LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHRvcCBDT05ORUNUSU9OUyBzZWN0aW9uIHNob3dzIHRoZXsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0MzMxNDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgbmV0d29yayBjb25uZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgY29taW5nIGluLCB3aXRoIHRoZSBmZWF0dXJlcyB1c2VkIGJ5IGVhY2ggbW9kZWwgZm9yIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb24uIFRoZSBjb2xvciBvZiB0aGUgc3F1YXJlIHNob3dzIHRoZSB0cnVlIHN0YXR1cyBvZlxuICAgICAgICAgICAgICAgICAgICB3aGV0aGVyIHRoZSBjb25uZWN0aW9uIGlzIGFueycgJ31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgb3J7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBTVFJBVEVHSUVTIHNlY3Rpb24gc2hvd3MgbWV0cmljcyBvbiBob3cgZWFjaCBhbGdvcml0aG1cbiAgICAgICAgICAgICAgICAgICAgaXMgcGVmb3JtaW5nIG9uIHRoZSBpbmNvbWluZyBkYXRhLiBZb3UgY2FuIHNlZSB0aGUgYWNjdXJhY3ksXG4gICAgICAgICAgICAgICAgICAgIHJlY2FsbCwgYW5kIHByZWNpc2lvbiBtZXRyaWNzIGZvciBlYWNoIHN0cmF0ZWd5LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIFZJU1VBTElaRUQgc2VjdGlvbiBwcm92aWRlcyBhbm90aGVyIHZpZXcgb2YgZWFjaFxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneSdzIHBlcmZvcm1hbmNlLiBFYWNoIGNvbm5lY3Rpb24gaXMgdmlzdWFsaXplZCBhcyBhXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS4gSWYgaXQgaXMgY2xhc3NpZmllZCBhcyBhbiBhdHRhY2sgaXQgaXMgcGxhY2VkIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICBsZWZ0OyBpZiBjbGFzc2lmaWVkIG5vcm1hbCwgaXQgaXMgcGxhY2VkIG9uIHRoZSByaWdodC4gVGhlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIHJldmVhbHMgaXRzIHRydWUgc3RhdHVzLiBPdmVyIHRpbWUsIHRoZSBkZW5zaXR5IGFuZFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiBvZiB0aGUgY29sb3JzIGluIGVhY2ggc3RyYXRlZ3kgdmlzdWFsaXphdGlvbiBnaXZlXG4gICAgICAgICAgICAgICAgICAgIHlvdSBhIGZlZWwgZm9yIHRoZSBkaWZmZXJlbnQgbW9kZWxzJyBzdHJlbmd0aHMgYW5kXG4gICAgICAgICAgICAgICAgICAgIHdlYWtuZXNzZXMuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggLyAyIH19PlxuICAgICAgICAgICAgICAgICAgICBUaGUgc2ltdWxhdGlvbiB3aWxsIHJ1biB0aHJvdWdoIDEwLDAwMCBjb25uZWN0aW9ucyBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoaW5nLiBZb3UgY2FuIGNvbnRyb2wgdGhlIHNwZWVkIG9mIHRoZSBzaW11bGF0aW9uIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgdGhlIGNvbnRyb2xzIGF0IHRoZSBib3R0b20uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmcmFtZSAhPSBmaW5pc2hfbGluZSAtIDEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5mbyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZyYW1lID4gMSA/ICdDb250aW51ZScgOiAnU3RhcnQnfSB0aGUgc2ltdWxhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtmaW5pc2ggPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RmluaXNoKGZhbHNlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc4MGNoJyxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gMmNoKScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzY2hlbWUuYmcsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmZnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogcmxoICogMS41LFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBybGggKiAxLjUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PkZpbmlzaGVkPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaW5pc2goZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2NoZW1lLmJnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIC8gMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQWZ0ZXIge2ZpbmlzaF9saW5lfSBjb25uZWN0aW9ucywgeW91J3ZlIHJlYWNoZWQgdGhlIGVuZCBvZlxuICAgICAgICAgICAgICAgICAgICB0aGUgYW5vbWFseSBkZXRlY3Rpb24gc2ltdWxhdGlvbi5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCAvIDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBmaW5hbCBzdGFuZGluZ3M6XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7WydSYW5raW5nJywgJ0FjY3VyYWN5JywgJ1ByZWNpc2lvbicsICdSZWNhbGwnXS5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PntufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogcmxoIH19PlxuICAgICAgICAgICAgICAgICAgICB7bmFtZXNcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChuLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFuZWwgPSBwYW5lbHNfcmVmLmN1cnJlbnRbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbaSwgbiwgcGFuZWxbNF0sIHBhbmVsWzVdLCBwYW5lbFs2XV1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiWzIgKyBzb3J0XSAtIGFbMiArIHNvcnRdXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX17JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZ3NbclswXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7clsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtbclsyXSwgclszXSwgcls0XV0ubWFwKHYgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmxoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjY2NjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoJHt2fSUgLSAxY2gpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19Pnt2fSU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBSZWFkIG1vcmUgYWJvdXQgdGhlIG1vZGVscyBhbmQgdGhlaXIgcGVyZm9ybWFuY2Ugb24gdGhlIGZ1bGxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldCBpbnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+dGhlIHByb3RvdHlwZSBzZWN0aW9uIG9mIG91ciByZXBvcnQ8L2E+LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3NraXBwaW5nID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwcm9ncmVzcycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNjaGVtZS5iZyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBybGgsXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNraXBwaW5nLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBjdyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogY3csXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIExvYWRpbmcgZGF0YXNldC4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZzfXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xofTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMsXG4gICAgICAgIGg0LFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtybGh9cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/home/grant/sites/ff12-frontend/pages/index.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.a1832c2871f41e281163.hot-update.js.map