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
  hues: ['#ef6155', '#48b685', '#fec418', '#06b6ef', '#815ba4', '#5bc4bf'],
}
let red = scheme.hues[0]
let green = scheme.hues[1]
let yellow = scheme.hues[2]
let teal = scheme.hues[3]
let blue = scheme.hues[4]
let purple = scheme.hues[5]
let bgs = [yellow, teal, green, blue]
let black = scheme.bg

let fs = 13
let lh = 1.5
let ch = 9.599990844726562
let cw = 8
let rlh = fs * lh
let cell = { w: ch, h: rlh / 2 }

let names = [
  'Autoencoder',
  'Var. Autoencoder',
  'Autoencoder',
  'Var. Autoencoder',
]

let size = 4

let sort_options = ['accuracy', 'precision', 'recall']

let rInterval = function(callback, delay) {
  var dateNow = Date.now,
    requestAnimation = window.requestAnimationFrame,
    start = dateNow(),
    stop,
    intervalFunc = function() {
      dateNow() - start < delay || ((start += delay), callback())
      stop || requestAnimation(intervalFunc)
    }
  requestAnimation(intervalFunc)
  return {
    clear: function() {
      stop = 1
    },
  }
}

export default function Index() {
  let [data, setData] = useState(null)
  let handler_ref = useRef(null)
  let pref = useRef(null)
  let sref = useRef(null)
  let vref = useRef(null)
  let rankref = useRef(null)
  let [frame, setFrame] = useState(0)
  let [pspace, setPspace] = useState(null)
  let [pleft, setPleft] = useState(null)
  let panels_ref = useRef([...Array(4)].map(n => [...Array(4)].map(n => 0)))
  let title_ref = useRef(null)
  let readout_ref = useRef(null)
  let truth_ref = useRef([0, 0])
  let treadout_ref = useRef(null)
  let truthtitle_ref = useRef(null)

  useEffect(() => {
    if (data !== null) {
      // set layout
      let v = vref.current
      v.width = pspace - 8
      v.style.marginLeft = pleft + 'px'
      let vx = v.getContext('2d')

      let columns = Math.floor(v.width / size)
      let panel_columns = Math.floor(
        Math.floor((v.width - size * 4) / size) / 2
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

      v.height =
        (top + ph + bottom + bottom_space) * 2 +
        top +
        th +
        bottom +
        bottom_space

      let $rank = rankref.current
      $rank.style.width = tw + 'px'
      $rank.style.left = pleft + 'px'
      let s = sref.current
      s.width = tw
      s.height = rlh * 4

      vx.fillStyle = '#eee'
      for (let r = 0; r < pr; r++) {
        for (let c = 0; c < pc; c++) {
          let x = c * (pw + size * 4)
          let y = r * (top + ph + bottom + bottom_space) + top
          let w = pw
          let h = ph
          vx.fillRect(x, y, w, h)
        }
      }

      vx.fillRect(0, 2 * (top + ph + bottom + bottom_space) + top, tw, th)

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

      let tt = truthtitle_ref.current
      tt.style.width = tw + 'px'
      tt.style.left = cw + 'px'
      tt.style.top = 2 * (top + ph + bottom + bottom_space) + 'px'

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

      let tre = treadout_ref.current
      tre.style.width = tw + 'px'
      tre.style.left = cw + 'px'
      tre.style.top = 2 * (top + ph + bottom + bottom_space) + th + rlh + 'px'

      handler_ref.current = rInterval(() => {
        setFrame(function(prev) {
          return prev + 1
        })
      }, 80)
    } else {
      if (handler_ref.current !== null) {
        handler_ref.current.clear()
      }
    }
  }, [data])

  useEffect(() => {
    if (data !== null) {
      let panels = panels_ref.current
      let $read = readout_ref.current
      let truth = truth_ref.current
      let $truth = treadout_ref.current

      // update panel data
      let panel_keys = [21, 20, 21, 20]
      let record = data.data[frame]
      let anomaly = record[19] === 1 ? true : false

      if (anomaly) {
        truth[0]++
      } else {
        truth[1]++
      }
      $truth.childNodes[0].childNodes[1].innerHTML = truth[0]
      $truth.childNodes[1].childNodes[1].innerHTML = truth[1]

      for (let i = 0; i < panels.length; i++) {
        let panel = panels[i]
        let detected = record[panel_keys[i]]
        // TP FP TN FN
        if (detected > 0.1) {
          if (anomaly) {
            // true pos
            panels[i][0]++
          } else {
            // false pos
            panels[i][1]++
          }
        } else {
          if (anomaly) {
            // false neg
            panels[i][3]++
          } else {
            // true neg
            panels[i][2]++
          }
        }

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

      // set rankings
      {
        let $rs = rankref.current.childNodes
        let s = sref.current
        let sx = s.getContext('2d')
        sx.fillStyle = scheme.fg
        sx.clearRect(0, 0, s.width, s.height)

        let rank_rows = names.map((n, i) => {
          let panel = panels[i]
          return [i, n, panel[4], panel[5], panel[6]]
        })
        rank_rows.sort(function(a, b) {
          return b[2] - a[2]
        })
        for (let i = 0; i < rank_rows.length; i++) {
          let row = rank_rows[i]
          let panel = panels[row[0]]
          let [TP, FP, TN, FN] = panel
          let $r = $rs[i]
          let total = panel[0] + panel[1] + panel[2] + panel[3]
          $r.childNodes[0].childNodes[0].style.background = bgs[row[0]]
          $r.childNodes[0].childNodes[0].innerHTML = row[1]
          $r.childNodes[1].childNodes[0].innerHTML = row[2] + '% '
          $r.childNodes[1].childNodes[1].innerHTML = `(${TP}+${TN})/${total}`
          $r.childNodes[2].childNodes[0].innerHTML = row[3] + '% '
          $r.childNodes[2].childNodes[1].innerHTML = `${TP}/(${TP}+${FP})`
          $r.childNodes[3].childNodes[0].innerHTML = row[4] + '% '
          $r.childNodes[3].childNodes[1].innerHTML = `${TP}/(${TP}+${FN})`

          let xstep = s.width / 4
          for (let c = 0; c < 3; c++) {
            let x = (c + 1) * xstep
            let y = i * rlh
            let w = (row[c + 2] / 100) * xstep - cw
            let h = rlh + 1
            sx.fillRect(x, y, w, h)
          }
        }
      }
    }
  }, [data, frame])

  useEffect(() => {
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
      <div style={{ paddingLeft: '1ch', paddingRight: '1ch' }}>
        <div ref={pref} />
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
              <span style={{ color: '#777' }}>{frame}</span>
            </div>
          </div>
          <div style={{ width: '100%', overflow: 'auto' }}>
            <div style={{ width: '100%', minWidth: 6 * 19 + 1 + 'ch' }}>
              <div style={{ display: 'flex', paddingRight: '1ch' }}>
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
                  background: scheme.bg,
                  color: scheme.fg,
                  paddingRight: '1ch',
                  height: rlh * 5,
                }}
              >
                {data.data.slice(frame - 5, frame).map((d, i) => (
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    {d.slice(0, 19).map((d, j) => (
                      <div
                        style={{
                          display: 'flex',
                          paddingLeft: '1ch',
                          flexGrow: 1,
                        }}
                      >
                        <div
                          style={{
                            width: '5ch',
                            overflow: 'hidden',
                            textAlign: 'right',
                          }}
                        >
                          {j === 0 ? frame + i : d}
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
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              fontStyle: 'italic',
              display: 'flex',
            }}
          >
            <div style={{ width: '100%' }}>Ranking</div>
            {[
              ['Accuracy', '(TP+TN)/ALL'],
              ['Precision', 'TP/(TP+FP)'],
              ['Recall', 'TP/(TP+FN)'],
            ].map(n => (
              <div style={{ width: '100%' }}>
                {n[0]}{' '}
                <span style={{ color: scheme.light, fontStyle: 'normal' }}>
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
                      <span
                        style={{
                          paddingTop: 1,
                          paddingBottom: 1,
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
            <canvas ref={vref} style={{ left: 0, top: 0 }} />
            <div
              style={{ position: 'absolute', left: 0, top: 0 }}
              ref={title_ref}
            >
              {names.map((n, i) => (
                <div style={{ background: bgs[i] }}>{n}</div>
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
            <div
              ref={truthtitle_ref}
              style={{
                position: 'absolute',
              }}
            >
              <div
                style={{
                  background: scheme.bg,
                  color: scheme.fg,
                }}
              >
                Truth
              </div>
            </div>
            <div
              ref={treadout_ref}
              style={{
                position: 'absolute',
                display: 'flex',
              }}
            >
              <div style={{ width: '100%' }}>
                <div style={{ background: scheme.fg, fontStyle: 'italic' }}>
                  Positive
                </div>
                <div
                  style={{
                    background: red,
                    color: 'white',
                    paddingRight: '1ch',
                    textAlign: 'right',
                  }}
                ></div>
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ background: scheme.fg, fontStyle: 'italic' }}>
                  Negative
                </div>
                <div
                  style={{
                    background: black,
                    color: 'white',
                    paddingRight: '1ch',
                    textAlign: 'right',
                  }}
                ></div>
              </div>
            </div>
          </div>
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
      `}</style>
    </div>
  )
}
