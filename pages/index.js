import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useCallback,
} from 'react'
import Head from 'next/head'
import Agent from '../components/agent'
import { key_des } from '../components/constants'
import * as _ from 'lodash'

let scheme = {
  name: 'Paraiso Dark',
  bg: '#2f1e2e',
  fg: '#bfbfbf',
  light: '#777',
  hues: ['#ef6155', '#65D6A3', '#fec418', '#53D1FA', '#BB91E2', '#5bc4bf'],
}
let red = scheme.hues[0]
let green = scheme.hues[1]
let yellow = scheme.hues[2]
let teal = scheme.hues[3]
let purple = scheme.hues[4]
let blue = scheme.hues[5]
let bgs = [yellow, teal, green, purple]
let black = scheme.bg

let fs = 13
let lh = 1.5
let ch = 9.599990844726562
let cw = 8
let rlh = fs * lh
let cell = { w: ch, h: rlh / 2 }

let speeds = [640 * 2, 640, 320, 80, 40, 20]

let names = ['OSVM', 'Autoencoder', 'Var Autoencoder', 'BiGAN']

let name_max = names.reduce((t, c) => {
  console.log(c)
  console.log(c.length)
  return Math.max(c.length, t)
}, 0)

let size = 4

let termheight = 4

let sort_options = ['accuracy', 'precision', 'recall']

let finish_line = 10000

export default function Index() {
  let [data, setData] = useState(null)
  let handler_ref = useRef(null)
  let pref = useRef(null)
  let sref = useRef(null)
  let vref = useRef(null)
  let href = useRef(null)
  let rankref = useRef(null)
  let [frame, setFrame] = useState(0)
  let [pspace, setPspace] = useState(null)
  let [pleft, setPleft] = useState(null)
  let panels_ref = useRef([...Array(4)].map(n => [...Array(4)].map(n => 0)))
  let pdim_ref = useRef([])
  let tdim_ref = useRef([])
  let title_ref = useRef(null)
  let readout_ref = useRef(null)
  let truth_ref = useRef([0, 0])
  let treadout_ref = useRef(null)
  let ranklabel_ref = useRef(null)
  let topbar_ref = useRef(null)
  let [dpr, setDpr] = useState(1)
  let icon_ref = useRef(null)
  let con_ref = useRef(null)
  let [speed, setSpeed] = useState(3)
  let [initSpeed, setInitSpeed] = useState(false)
  let [pause, setPause] = useState(false)
  let [info, setInfo] = useState(false)
  let [sort, setSort] = useState(0)
  let [finish, setFinish] = useState(false)

  useEffect(() => {
    if (data !== null) {
      // set layout
      let v = vref.current

      let vwidth = pspace - 8
      v.width = vwidth * dpr
      v.style.marginLeft = pleft + 'px'
      let vx = v.getContext('2d')
      let pdim = pdim_ref.current
      let tdim = tdim_ref.current

      let columns = Math.floor(v.width / size)
      let panel_columns = Math.floor(
        Math.floor((v.width / dpr - size * 4) / size) / 2
      )
      let panel_rows = Math.ceil(10000 / (panel_columns - 1))

      let pw = panel_columns * size
      let ph = panel_rows * size

      let pc = 2
      let pr = 2

      let top = rlh
      let bottom = rlh * 2
      let bottom_space = rlh / 2

      let tc = panel_columns * 2 + 4
      let tr = Math.ceil(10000 / (columns - 1))
      let tw = tc * size
      let th = tr * size
      tdim_ref.current = [tw, th]

      let vheight = (top + ph + bottom + bottom_space) * 2
      v.height = vheight * dpr

      v.style.width = vwidth + 'px'
      v.style.height = vheight + 'px'

      vx.scale(dpr, dpr)

      let h = href.current
      h.width = v.width
      h.height = v.height
      h.style.width = vwidth + 'px'
      h.style.height = vheight + 'px'

      let hx = h.getContext('2d')
      hx.scale(dpr, dpr)

      let $rank = rankref.current
      $rank.style.width = tw + 'px'
      $rank.style.left = pleft + 'px'
      let s = sref.current
      let swidth = tw
      let sheight = rlh * 4
      s.width = swidth * dpr
      s.height = sheight * dpr
      s.style.width = swidth + 'px'
      s.style.height = sheight + 'px'
      let sx = s.getContext('2d')
      sx.scale(dpr, dpr)

      let ranklabel = ranklabel_ref.current
      ranklabel.style.width = tw + 'px'

      vx.fillStyle = '#eee'
      for (let r = 0; r < pr; r++) {
        for (let c = 0; c < pc; c++) {
          let i = r * pc + c
          let x = c * (pw + size * 4)
          let y = r * (top + ph + bottom + bottom_space) + top
          let w = pw
          let h = ph
          pdim[i] = [x, y, w, h]
          vx.fillRect(x, y, w, h)
        }
      }

      let $titles = title_ref.current
      for (let r = 0; r < pr; r++) {
        for (let c = 0; c < pc; c++) {
          let $t = $titles.childNodes[r * pc + c]
          $t.style.position = 'absolute'
          $t.style.top = r * (top + ph + bottom + bottom_space) + 'px'
          $t.style.width = pw + 'px'
          $t.style.left = c * (pw + size * 4) + cw + 'px'
        }
      }

      let $read = readout_ref.current
      for (let r = 0; r < pr; r++) {
        for (let c = 0; c < pc; c++) {
          let $r = $read.childNodes[r * pc + c]
          $r.style.position = 'absolute'
          $r.style.top =
            r * (top + ph + bottom + bottom_space) + top + ph + 'px'
          $r.style.width = pw + 'px'
          $r.style.left = c * (pw + size * 4) + cw + 'px'
        }
      }

      let tb = topbar_ref.current
      tb.style.width = tw + 'px'

      let icon = icon_ref.current
      icon.width = cw * dpr
      icon.height = rlh * 1.5 * dpr
      let ix = icon.getContext('2d')
      ix.scale(dpr, dpr)

      // requestAnimationFrame() shim by Paul Irish
      // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
      window.requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60)
          }
        )
      })()

      // from https://gist.github.com/joelambert/1002116#gistcomment-1953925
      /**
       * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
       * @param {function} fn The callback function
       * @param {int} delay The delay in milliseconds
       */
      window.rInterval = function(fn, delay) {
        if (
          !window.requestAnimationFrame &&
          !window.webkitRequestAnimationFrame &&
          !(
            window.mozRequestAnimationFrame &&
            window.mozCancelRequestAnimationFrame
          ) && // Firefox 5 ships without cancel support
          !window.oRequestAnimationFrame &&
          !window.msRequestAnimationFrame
        )
          return window.setInterval(fn, delay)

        var start = new Date().getTime(),
          handle = new Object()

        function loop() {
          var current = new Date().getTime(),
            delta = current - start

          if (delta >= delay) {
            fn.call()
            start = new Date().getTime()
          }

          handle.value = requestAnimFrame(loop)
        }

        handle.value = requestAnimFrame(loop)
        return handle
      }

      /**
       * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
       * @param {int|object} fn The callback function
       */
      window.clearRInterval = function(handle) {
        window.cancelAnimationFrame
          ? window.cancelAnimationFrame(handle.value)
          : window.webkitCancelAnimationFrame
          ? window.webkitCancelAnimationFrame(handle.value)
          : window.webkitCancelRequestAnimationFrame
          ? window.webkitCancelRequestAnimationFrame(
              handle.value
            ) /* Support for legacy API */
          : window.mozCancelRequestAnimationFrame
          ? window.mozCancelRequestAnimationFrame(handle.value)
          : window.oCancelRequestAnimationFrame
          ? window.oCancelRequestAnimationFrame(handle.value)
          : window.msCancelRequestAnimationFrame
          ? window.msCancelRequestAnimationFrame(handle.value)
          : clearInterval(handle)
      }

      if (!pause && !info) {
        handler_ref.current = window.rInterval(() => {
          setFrame(function(prev) {
            return prev + 1
          })
        }, speeds[speed])
      }
    } else {
      if (handler_ref.current !== null) {
        window.clearRInterval(handler_ref.current)
      }
    }
    setInitSpeed(true)
  }, [data])

  useEffect(() => {
    if (initSpeed != false) {
      if (handler_ref.current !== null) {
        window.clearRInterval(handler_ref.current)
      }
      if (!pause && !info) {
        handler_ref.current = rInterval(() => {
          setFrame(function(prev) {
            return prev + 1
          })
        }, speeds[speed])
      }
    }
  }, [speed, pause, info])

  useEffect(() => {
    if (data !== null) {
      let panels = panels_ref.current
      let $read = readout_ref.current
      let pdim = pdim_ref.current

      let v = vref.current
      let vx = v.getContext('2d')

      let h = href.current
      let hx = h.getContext('2d')

      // update panel data
      let panel_keys = [21, 20, 21, 20]
      let record = data.data[frame]
      let anomaly = record[19] === 1 ? true : false

      if (anomaly) {
        vx.fillStyle = red
      } else {
        vx.fillStyle = scheme.bg
      }

      let pc = pdim[0][2] / size
      let pr = pdim[0][3] / size

      hx.clearRect(0, 0, h.width / dpr, h.height / dpr)

      // let con = con_ref.current
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

      for (let i = 0; i < panels.length; i++) {
        let panel = panels[i]
        let detected = record[panel_keys[i]]

        let p1x, p1y
        // TP FP TN FN
        if (detected > 0.1) {
          let n = panels[i][0] + panels[i][1]
          p1y = (pr - (n % pr) - 1) * size
          p1x = Math.floor(n / pr) * size
          if (anomaly) {
            // true pos
            panels[i][0]++
          } else {
            // false pos
            panels[i][1]++
          }
        } else {
          let n = panels[i][2] + panels[i][3]
          p1y = (pr - (n % pr) - 1) * size
          p1x = (pc - Math.floor(n / pr) - 1) * size - 1
          if (anomaly) {
            // false neg
            panels[i][3]++
          } else {
            // true neg
            panels[i][2]++
          }
        }

        let dim = pdim[i]
        vx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1)

        // hx.fillStyle = '#433142'
        hx.fillStyle = bgs[i]
        hx.fillRect(
          dim[0] + p1x - 2,
          dim[1] + p1y - 2,
          size + 1 + 4,
          size + 1 + 4
        )
        hx.fillStyle = vx.fillStyle
        hx.fillRect(dim[0] + p1x, dim[1] + p1y, size + 1, size + 1)

        for (let j = 0; j < 4; j++) {
          $read.childNodes[i].childNodes[j].childNodes[1].innerHTML = panel[j]
        }

        //accuracy = (TP+TN)/(TP+TN+FP+FN)
        let accuracy = Math.round(
          ((panel[0] + panel[2]) /
            (panel[0] + panel[1] + panel[2] + panel[3])) *
            100
        )
        // precision tp / (tp + fp)
        let precision = Math.round((panel[0] / (panel[0] + panel[1])) * 100)

        // recall tp / (tp + fn)
        let recall = Math.round((panel[0] / (panel[0] + panel[3])) * 100)

        // 4 5 6
        panels[i][4] = accuracy
        panels[i][5] = precision
        panels[i][6] = recall
      }

      let vheight = v.height / dpr

      // set rankings
      {
        let $rs = rankref.current.childNodes
        let s = sref.current
        let sx = s.getContext('2d')
        sx.clearRect(0, 0, s.width / dpr, s.height / dpr)

        let rank_rows = names.map((n, i) => {
          let panel = panels[i]
          return [i, n, panel[4], panel[5], panel[6]]
        })
        rank_rows.sort(function(a, b) {
          return b[2 + sort] - a[2 + sort]
        })
        for (let i = 0; i < rank_rows.length; i++) {
          let row = rank_rows[i]
          let panel = panels[row[0]]
          let [TP, FP, TN, FN] = panel
          let $r = $rs[i]
          let total = panel[0] + panel[1] + panel[2] + panel[3]

          $r.childNodes[0].childNodes[0].innerHTML = i + 1
          $r.childNodes[0].childNodes[1].style.background = bgs[row[0]]
          $r.childNodes[0].childNodes[1].innerHTML = row[1]
          $r.childNodes[1].childNodes[0].innerHTML = !isNaN(row[2])
            ? row[2] + '% '
            : 'N/A '
          $r.childNodes[1].childNodes[1].innerHTML = `(${TP}+${TN})/${total}`
          $r.childNodes[2].childNodes[0].innerHTML = !isNaN(row[3])
            ? row[3] + '% '
            : 'N/A '
          $r.childNodes[2].childNodes[1].innerHTML = `${TP}/(${TP}+${FP})`
          $r.childNodes[3].childNodes[0].innerHTML = !isNaN(row[4])
            ? row[4] + '% '
            : 'N/A '
          $r.childNodes[3].childNodes[1].innerHTML = `${TP}/(${TP}+${FN})`

          let y = i * rlh
          let w = s.width / dpr
          let h = rlh + 1
          // sx.fillStyle = bgs[row[0]]
          // sx.fillRect(0, y, w, h)

          sx.fillStyle = scheme.fg
          let xstep = s.width / dpr / 4
          for (let c = 0; c < 3; c++) {
            let x = (c + 1) * xstep
            let w = (row[c + 2] / 100) * xstep - cw
            if (w <= 0) w = 0
            sx.fillRect(x, y, w, h)
          }
        }

        let icon = icon_ref.current
        let ix = icon.getContext('2d')
        ix.clearRect(0, 0, cw, rlh)
        let step = (rlh * 1.5) / 4
        for (let i = 0; i < rank_rows.length; i++) {
          let row = rank_rows[i]
          let panel = panels[row[0]]
          let y = i * step
          let w = (panel[4] / 100) * cw
          ix.fillStyle = bgs[row[0]]
          ix.fillRect(0, y, w, step)
        }
      }

      // finish line
      if (frame === finish_line - 1) {
        window.clearRInterval(handler_ref.current)
        setFinish(true)
        setPause(true)
      }
    }
  }, [data, frame, sort])

  useEffect(() => {
    let dpr = window.devicePixelRatio || 1
    setDpr(dpr)

    let p = pref.current
    let pspace = p.offsetWidth
    let pleft = p.offsetLeft
    setPspace(pspace)
    setPleft(pleft)

    // get data
    fetch('sampled.json')
      .then(r => r.json())
      .then(_data => {
        setData(_data)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Blip</title>
      </Head>

      <div style={{ paddingLeft: '1ch', paddingRight: '1ch' }}>
        <div ref={pref} />
      </div>
      <div
        style={{
          background: '#bbb',
          height: rlh,
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
      >
        <div
          ref={topbar_ref}
          style={{
            display: 'flex',
            paddingLeft: '2ch',
          }}
        >
          <canvas
            ref={icon_ref}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: rlh,
              width: '1ch',
            }}
          />
          <div
            style={{
              position: 'relative',
              marginRight: '1ch',
            }}
          >
            BLIP
          </div>
          <button
            onClick={() => {
              setInfo(true)
            }}
          >
            Info
          </button>
        </div>
      </div>
      {data ? (
        <div>
          <div
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              marginTop: rlh / 2,
              display: 'flex',
            }}
          >
            <div>CONNECTIONS</div>
            <div style={{ marginLeft: '1ch' }}>
              <span style={{ color: '#777' }}>{frame + 1}</span>
            </div>
          </div>
          <div style={{ width: '100%', overflow: 'auto' }}>
            <div style={{ width: '100%', minWidth: 6 * 19 + 1 + 'ch' }}>
              <div
                style={{
                  display: 'flex',
                  paddingRight: '1ch',
                  paddingLeft: '1ch',
                }}
              >
                {key_des.map((k, i) => (
                  <div
                    style={{
                      display: 'flex',
                      paddingLeft: '1ch',
                      flexGrow: 1,
                    }}
                    title={k[0] + ': ' + k[2]}
                  >
                    <div
                      style={{
                        width: '5ch',
                        overflow: 'hidden',
                        textAlign: 'right',
                        fontStyle: 'italic',
                      }}
                    >
                      {k[1]}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  paddingRight: '1ch',
                  height: rlh * termheight,
                  background: scheme.bg,
                  background: '#433142',
                  color: scheme.fg,
                }}
                ref={con_ref}
              >
                {data.data
                  .slice(Math.max(frame - termheight + 1, 0), frame + 1)
                  .reverse()
                  .map((d, i) => (
                    <div
                      key={frame + (termheight - i) - termheight + 1}
                      style={{
                        position: 'relative',
                        display: 'flex',
                        paddingLeft: '1ch',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: rlh / 2 - (size + 1) / 2 - 1,
                          left: cw / 2 - (size + 1) / 2 + cw,
                          height: size + 1,
                          width: size + 1,
                          background: d[19] ? red : scheme.bg,
                        }}
                      />
                      {d.slice(0, 19).map((d, j) => (
                        <div
                          style={{
                            display: 'flex',
                            paddingLeft: '1ch',
                            flexGrow: 1,
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              width: '5ch',
                              overflow: 'hidden',
                              textAlign: 'right',
                            }}
                          >
                            {j === 0
                              ? frame + (termheight - i) - termheight
                              : d}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              marginTop: rlh / 2,
            }}
          >
            STRATEGIES
          </div>
          <div
            ref={ranklabel_ref}
            style={{
              marginLeft: '1ch',
              fontStyle: 'italic',
              display: 'flex',
            }}
          >
            <div style={{ width: '100%' }}>Ranking</div>
            {[
              [
                'Accuracy',
                '(TP+TN)/ALL',
                '(True Positive + True Negative) / ALL',
              ],
              [
                'Precision',
                'TP/(TP+FP)',
                'True Positive / (True Positive + False Positive)',
              ],
              [
                'Recall',
                'TP/(TP+FN)',
                'True Positive / (True Positive + False Negative)',
              ],
            ].map((n, i) => (
              <div style={{ width: '100%' }}>
                {sort === i ? (
                  <span title={`Rankings sorted by ${sort_options[i]}`}>
                    {n[0]}
                  </span>
                ) : (
                  <button
                    title={`Click to sort by ${sort_options[i]}`}
                    onClick={() => {
                      setSort(i)
                    }}
                    style={{ fontStyle: 'italic' }}
                  >
                    {n[0]}
                  </button>
                )}{' '}
                <span
                  style={{ color: scheme.light, fontStyle: 'normal' }}
                  title={n[2]}
                >
                  {n[1]}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              position: 'relative',
            }}
          >
            <canvas
              style={{ position: 'absolute', left: '1ch', top: 0 }}
              ref={sref}
            />
            <div ref={rankref} style={{ position: 'relative' }}>
              {names.map((n, i) => (
                <div style={{ display: 'flex' }}>
                  {[...Array(4)].map((n, j) => (
                    <div style={{ width: '100%' }}>
                      {j === 0 ? (
                        <span style={{ marginRight: '1ch' }}></span>
                      ) : null}
                      <span
                        style={{
                          display: 'inline-block',
                          marginRight: '0.5ch',
                          paddingLeft: '0.5ch',
                          paddingRight: '0.5ch',
                          textAlign: 'left',
                        }}
                      ></span>
                      <span style={{ color: scheme.light }}></span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              marginTop: rlh / 2,
            }}
          >
            VISUALIZED
          </div>

          <div style={{ position: 'relative' }}>
            <canvas ref={vref} style={{}} />
            <canvas
              ref={href}
              style={{ position: 'absolute', left: '1ch', top: 0 }}
            />
            <div
              style={{ position: 'absolute', left: 0, top: 0 }}
              ref={title_ref}
            >
              {names.map((n, i) => (
                <div
                  style={{
                    background: bgs[i],
                    paddingLeft: '0.5ch',
                    paddingRight: '0.5ch',
                  }}
                >
                  {n}
                </div>
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
              }}
              ref={readout_ref}
            >
              {[...Array(4)].map(() => (
                <div style={{ display: 'flex' }}>
                  {[
                    ['True Pos', red],
                    ['False Pos', black],
                    ['True Neg', black],
                    ['False Neg', red],
                  ].map((o, i) => (
                    <div
                      style={{ width: '100%', marginLeft: i === 2 ? '1ch' : 0 }}
                    >
                      <div
                        style={{
                          background: scheme.fg,
                          fontStyle: 'italic',
                        }}
                      >
                        {o[0]}
                      </div>
                      <div
                        style={{
                          background: o[1],
                          height: rlh,
                          color: 'white',
                          textAlign: 'right',
                          paddingRight: '1ch',
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              marginTop: 0,
              marginBottom: rlh / 2 + rlh,
            }}
          >
            Blip is an anomaly detection prototype by{' '}
            <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
              Cloudera Fast Forward
            </a>
            .
          </div>
          <div
            style={{
              position: 'fixed',
              left: 0,
              bottom: 0,
              right: 0,
              height: rlh,
              background: '#bbb',
              paddingLeft: '1ch',
              display: 'flex',
            }}
          >
            {frame + 1 != finish_line ? (
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div>Speed:</div>
                <button
                  style={{
                    paddingLeft: '0.25ch',
                    paddingRight: '0.25ch',
                    marginLeft: '0.5ch',
                  }}
                  onClick={() => {
                    if (speed > 0) {
                      setSpeed(speed - 1)
                    }
                  }}
                >
                  {'<'}
                </button>
                {speeds.map((n, i) =>
                  i == speed ? (
                    <div
                      style={{
                        paddingLeft: '0.25ch',
                        paddingRight: '0.25ch',
                      }}
                    >
                      {i + 1}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setSpeed(i)
                      }}
                      style={{
                        paddingLeft: '0.25ch',
                        paddingRight: '0.25ch',
                        color: scheme.light,
                      }}
                    >
                      {i + 1}
                    </button>
                  )
                )}
                <button
                  style={{
                    paddingLeft: '0.25ch',
                    paddingRight: '0.25ch',
                  }}
                  onClick={() => {
                    if (speed < speeds.length - 1) {
                      setSpeed(speed + 1)
                    }
                  }}
                >
                  {'>'}
                </button>
              </div>
            ) : null}
            {frame + 1 != finish_line ? (
              pause ? (
                <button
                  style={{ marginLeft: '2ch' }}
                  onClick={() => {
                    setPause(false)
                  }}
                >
                  Play
                </button>
              ) : (
                <button
                  style={{ marginLeft: '2ch' }}
                  onClick={() => {
                    setPause(true)
                  }}
                >
                  Pause
                </button>
              )
            ) : null}
            {pause && frame + 1 != finish_line ? (
              <button
                style={{ marginLeft: '2ch' }}
                onClick={() => {
                  setFrame(function(prev) {
                    return prev + 1
                  })
                }}
              >
                Tick
              </button>
            ) : null}
          </div>
          {info ? (
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                background: 'rgba(0,0,0,0.2)',
              }}
              onClick={() => {
                setInfo(false)
              }}
            >
              <div
                onClick={e => {
                  e.stopPropagation()
                }}
                style={{
                  width: '80ch',
                  maxWidth: '100%',
                  background: scheme.bg,
                  color: scheme.fg,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: rlh * 1.5,
                  marginBottom: rlh * 1.5,
                }}
              >
                <div
                  style={{
                    paddingLeft: '1ch',
                    paddingRight: '1ch',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>Info</div>
                  <button
                    onClick={() => {
                      setInfo(false)
                    }}
                  >
                    X
                  </button>
                </div>
                <div
                  style={{
                    background: '#fff',
                    paddingTop: rlh / 2,
                    paddingLeft: '1ch',
                    paddingRight: '1ch',
                    color: scheme.bg,
                    paddingBottom: rlh / 2,
                  }}
                >
                  <div style={{ fontStyle: 'italic', marginBottom: rlh / 2 }}>
                    Blip is a prototype by{' '}
                    <a href="https://www.cloudera.com/products/fast-forward-labs-research.html">
                      Cloudera Fast Forward
                    </a>{' '}
                    built to accompany our{' '}
                    <a href="https://ff12.fastforwardlabs.com">
                      report on Deep Learning for Anomaly Detection
                    </a>
                    .
                  </div>
                  <div style={{ marginBottom: rlh / 2 }}>
                    Blip shows how four different algorithms (
                    {names.map((n, i) => (
                      <span>
                        <span
                          style={{
                            background: bgs[i],
                            paddingLeft: '0.5ch',
                            paddingRight: '0.5ch',
                          }}
                        >
                          {n}
                        </span>
                        {i != names.length - 1 ? <span>, </span> : null}
                      </span>
                    ))}
                    ) perform at detecting network attacks in the{' '}
                    <a href="http://kdd.ics.uci.edu/databases/kddcup99/task.html">
                      KDD network intrusion dataset
                    </a>
                    . You can read about how each model was trained in the{' '}
                    <a href="#">protototype section of our report</a>.
                  </div>
                  <div style={{ marginBottom: rlh / 2 }}>
                    The top CONNECTIONS section shows the{' '}
                    <span
                      style={{
                        paddingLeft: '0.5ch',
                        paddingRight: '0.5ch',
                        background: '#433142',
                        color: '#fff',
                      }}
                    >
                      network connections
                    </span>{' '}
                    coming in, with the features used by each model for their
                    prediction. The color of the square shows the true status of
                    whether the connection is an{' '}
                    <span
                      style={{
                        background: red,
                        paddingLeft: '0.5ch',
                        paddingRight: '0.5ch',
                      }}
                    >
                      attack
                    </span>{' '}
                    or{' '}
                    <span
                      style={{
                        background: scheme.bg,
                        color: scheme.fg,
                        paddingLeft: '0.5ch',
                        paddingRight: '0.5ch',
                      }}
                    >
                      normal
                    </span>
                    .
                  </div>
                  <div style={{ marginBottom: rlh / 2 }}>
                    The STRATEGIES section shows metrics on how each algorithm
                    is peforming on the incoming data. You can see the accuracy,
                    recall, and precision metrics for each strategy.
                  </div>
                  <div style={{ marginBottom: rlh / 2 }}>
                    The VISUALIZED section provides another view of each
                    strategy's performance. Each connection is visualized as a
                    square. If it is classified as an attack it is placed on the
                    left; if classified normal, it is placed on the right. The
                    color reveals its true status. Over time the density and
                    position of the colors in each strategy visualization give
                    you a feel for the different models strengths and
                    weaknesses.
                  </div>
                  <div style={{ marginBottom: rlh / 2 }}>
                    The simulation will run through 10,000 connections before
                    finishing. You can control the speed of the simulation with
                    the controls at the bottom.
                  </div>
                  {frame != finish_line - 1 ? (
                    <div style={{ textAlign: 'right' }}>
                      <button
                        style={{
                          background: scheme.bg,
                          color: '#fff',
                          paddingLeft: '0.5ch',
                          paddingRight: '0.5ch',
                        }}
                        onClick={() => {
                          setInfo(false)
                        }}
                      >
                        Start the simulation
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
          {finish ? (
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                background: 'rgba(0,0,0,0.2)',
              }}
              onClick={() => {
                setFinish(false)
              }}
            >
              <div
                onClick={e => {
                  e.stopPropagation()
                }}
                style={{
                  width: '80ch',
                  maxWidth: '100%',
                  background: scheme.bg,
                  color: scheme.fg,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: rlh * 1.5,
                  marginBottom: rlh * 1.5,
                }}
              >
                <div
                  style={{
                    paddingLeft: '1ch',
                    paddingRight: '1ch',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>Finished</div>
                  <button
                    onClick={() => {
                      setFinish(false)
                    }}
                  >
                    X
                  </button>
                </div>
                <div
                  style={{
                    background: '#fff',
                    paddingTop: rlh / 2,
                    paddingLeft: '1ch',
                    paddingRight: '1ch',
                    color: scheme.bg,
                    paddingBottom: rlh / 2,
                  }}
                >
                  <div style={{ marginBottom: rlh / 2 }}>
                    After {finish_line} connections, you've reached the end of
                    the anomaly detection simulation.
                  </div>
                  <div style={{ marginBottom: rlh / 2 }}>
                    The final standings:
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      fontStyle: 'italic',
                    }}
                  >
                    {['Ranking', 'Accuracy', 'Precision', 'Recall'].map(n => (
                      <div style={{ width: '100%' }}>{n}</div>
                    ))}
                  </div>

                  <div style={{ marginBottom: rlh }}>
                    {names
                      .map((n, i) => {
                        let panel = panels_ref.current[i]
                        return [i, n, panel[4], panel[5], panel[6]]
                      })
                      .sort(function(a, b) {
                        return b[2 + sort] - a[2 + sort]
                      })
                      .map((r, i) => (
                        <div style={{ display: 'flex' }}>
                          <div style={{ width: '100%' }}>
                            {i + 1}{' '}
                            <span
                              style={{
                                background: bgs[r[0]],
                                display: 'inline-block',
                                paddingLeft: '0.5ch',
                                paddingRight: '0.5ch',
                              }}
                            >
                              {r[1]}
                            </span>
                          </div>

                          {[r[2], r[3], r[4]].map(v => (
                            <div
                              style={{
                                width: '100%',
                                position: 'relative',
                                paddingLeft: '0.5ch',
                              }}
                            >
                              <div
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: 0,
                                  height: rlh,
                                  background: '#ccc',
                                  width: `calc(${v}% - 1ch)`,
                                }}
                              />
                              <div style={{ position: 'relative' }}>{v}%</div>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>

                  <div>
                    Read more about the models and their performance on the full
                    dataset in{' '}
                    <a href="#">the prototype section of our report</a>.
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div>loading...</div>
      )}
      <style global jsx>{`
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Italic.woff') format('woff');
          font-style: italic;
        }
        * {
          box-sizing: border-box;
        }
        html {
          font-family: 'custom', sans-serif;
          font-size: ${fs}px;
          line-height: ${lh};
          background: #ddd;
          color: #000;
          overflow-x: hidden;
        }
        body {
          margin: 0;
          padding: 0;
        }
        canvas {
          display: block;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: inherit;
          line-height: inherit;
          font-weight: normal;
        }
        p {
          margin: 0;
          margin-top: ${rlh}px;
        }
        img {
          display: block;
          width: 100%;
        }
        a {
          color: inherit;
        }
        a:hover {
          opacity: 0.8;
        }
        #__next-prerender-indicator {
          display: none;
        }
        button {
          font-family: inherit;
          color: inherit;
          text-decoration: underline;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
