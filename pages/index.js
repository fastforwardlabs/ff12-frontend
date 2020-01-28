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
  let pdim_ref = useRef([])
  let tdim_ref = useRef([])
  let title_ref = useRef(null)
  let readout_ref = useRef(null)
  let truth_ref = useRef([0, 0])
  let treadout_ref = useRef(null)
  let truthtitle_ref = useRef(null)
  let ranklabel_ref = useRef(null)
  let topbar_ref = useRef(null)
  let [dpr, setDpr] = useState(1)
  let icon_ref = useRef(null)

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

      let vheight =
        (top + ph + bottom + bottom_space) * 2 + top + bottom + bottom_space
      v.height = vheight * dpr

      v.style.width = vwidth + 'px'
      v.style.height = vheight + 'px'

      vx.scale(dpr, dpr)

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
      tre.style.top = 2 * (top + ph + bottom + bottom_space) + rlh + 'px'

      let tb = topbar_ref.current
      tb.style.width = tw + 'px'

      let icon = icon_ref.current
      icon.width = cw * dpr
      icon.height = rlh * 1.5 * dpr
      let ix = icon.getContext('2d')
      ix.scale(dpr, dpr)

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
      let pdim = pdim_ref.current

      let v = vref.current
      let vx = v.getContext('2d')

      // update panel data
      let panel_keys = [21, 20, 21, 20]
      let record = data.data[frame]
      let anomaly = record[19] === 1 ? true : false

      if (anomaly) {
        vx.fillStyle = red
        truth[0]++
      } else {
        vx.fillStyle = scheme.bg
        truth[1]++
      }
      $truth.childNodes[0].childNodes[1].innerHTML = truth[0]
      $truth.childNodes[1].childNodes[1].innerHTML = truth[1]

      let pc = pdim[0][2] / size
      let pr = pdim[0][3] / size

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
      let [tw, th] = tdim_ref.current
      vx.clearRect(0, vheight - rlh * 2 - 1, tw, rlh + 2)
      let split = truth[1] / (truth[0] + truth[1])
      vx.fillStyle = red
      vx.fillRect(0, vheight - rlh * 1.5, tw - tw * split, rlh)
      vx.fillStyle = scheme.bg
      vx.fillRect(tw - tw * split - 1, vheight - rlh * 1.5, tw * split, rlh)

      // set rankings
      {
        let $rs = rankref.current.childNodes
        let s = sref.current
        let sx = s.getContext('2d')
        sx.fillStyle = scheme.fg
        sx.clearRect(0, 0, s.width / dpr, s.height / dpr)

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

          let xstep = s.width / dpr / 4
          for (let c = 0; c < 3; c++) {
            let x = (c + 1) * xstep
            let y = i * rlh
            let w = (row[c + 2] / 100) * xstep - cw
            let h = rlh + 1
            sx.fillRect(x, y, w, h)
          }
        }

        let icon = icon_ref.current
        let ix = icon.getContext('2d')
        ix.clearRect(0, 0, cw, rlh)
        let step = (rlh * 1.5) / 4
        for (let i = 0; i < rank_rows.length; i++) {
          let row = rank_rows[i]
          let y = i * step
          ix.fillStyle = bgs[row[0]]
          ix.fillRect(0, y, cw, step)
        }
      }
    }
  }, [data, frame])

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
            paddingLeft: '1ch',
          }}
        >
          <canvas
            ref={icon_ref}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: rlh * 1.5,
              width: '11ch',
              display: 'none',
            }}
          />
          <div
            style={{
              position: 'relative',
              letterSpacing: '0.5ch',
              marginRight: '1ch',
            }}
          >
            ANOMAL
          </div>
          <div style={{ display: 'flex' }}>
            <button>Info</button>
            <div
              style={{
                marginLeft: '1.25ch',
                marginRight: '1.25ch',
                display: 'flex',
              }}
            >
              Speed:
              {'012345678'.split('').map(i =>
                i == 6 ? (
                  <div
                    style={{
                      paddingLeft: '0.25ch',
                      paddingRight: '0.25ch',
                    }}
                  >
                    {i}
                  </div>
                ) : (
                  <button
                    style={{
                      paddingLeft: '0.25ch',
                      paddingRight: '0.25ch',
                      color: scheme.light,
                    }}
                  >
                    {i}
                  </button>
                )
              )}
            </div>
            <button>{'Pause'}</button>
          </div>
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
                  height: rlh * 4,
                }}
              >
                {data.data
                  .slice(frame - 4, frame)
                  .reverse()
                  .map((d, i) => (
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
            ref={ranklabel_ref}
            style={{
              marginLeft: '1ch',
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
                          display: 'inline-block',
                          marginRight: '0.5ch',
                          paddingLeft: '0.5ch',
                          paddingRight: '0.5ch',
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
            <div
              ref={truthtitle_ref}
              style={{
                position: 'absolute',
              }}
            >
              <div style={{}}>DATA BALANCE</div>
            </div>
            <div
              ref={treadout_ref}
              style={{
                position: 'absolute',
                display: 'flex',
              }}
            >
              <div style={{ width: '100%' }}>
                <div style={{ fontStyle: 'italic' }}>Anomalies</div>
                <div
                  style={{
                    color: 'white',
                    paddingLeft: '1ch',
                    textAlign: 'left',
                  }}
                ></div>
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ fontStyle: 'italic', textAlign: 'right' }}>
                  Normal
                </div>
                <div
                  style={{
                    color: 'white',
                    paddingRight: '1ch',
                    textAlign: 'right',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              marginTop: rlh / 2,
              textAlign: 'center',
              marginBottom: rlh / 2,
            }}
          >
            Anomal is an anomaly detection prototype by{' '}
            <a href="#">Cloudera Fast Forward</a>.
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
