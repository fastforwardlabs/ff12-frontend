import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useCallback,
} from 'react'
import Head from 'next/head'
import Agent from '../components/agent'
import { color } from '../components/constants'
import * as _ from 'lodash'

let scheme = {
  name: 'Paraiso Dark',
  bg: '#2f1e2e',
  fg: '#bbb',
  hues: ['#ef6155', '#48b685', '#fec418', '#06b6ef', '#815ba4', '#5bc4bf'],
}
let red = scheme.hues[0]
let green = scheme.hues[1]
let yellow = scheme.hues[2]
let teal = scheme.hues[3]
let blue = scheme.hues[4]
let purple = scheme.hues[5]

let fs = 13
let lh = 1.5
let ch = 9.599990844726562
let rlh = fs * lh
let cell = { w: ch, h: rlh / 2 }

let top_lines = 70
let frames = 6
let interval = frames / 2

let names = [
  'Autoencoder',
  'Variational Autoencoder',
  'Autoencoder',
  'Variational Autoencoder',
]
let bgs = [yellow, teal, green, blue]
let short_names = ['AE', 'VAE', 'AE', 'VAE']

let id = 0
let sx = 0
let sy = 0
let sd = 1
let sm = 1

let size = 4

let panel_number = 4
let panels = [...Array(panel_number)].map(n => [0, 0, 0, 0])

let sort_options = ['accuracy', 'precision', 'recall']

export default function Index() {
  let [counter, setCounter] = useState(-1)
  let si = useRef(0)
  let [flow, setFlow] = useState([])
  let [samples, setSamples] = useState(null)
  let [keys, setKeys] = useState(null)
  let handler_ref = useRef(null)
  let canvas_ref = useRef(null)
  let readouts_ref = useRef([...Array(panel_number)].map(() => createRef()))
  let titles_ref = useRef([...Array(panel_number)].map(() => createRef()))
  let borders_ref = useRef([...Array(panel_number)].map(() => createRef()))
  let [sort, setSort] = useState(sort_options[0])
  let pcpr_ref = useRef(null)
  let panels_ref = useRef(null)
  let rankings_ref = useRef(null)
  let cr_ref = useRef(null)

  useEffect(() => {
    let c = canvas_ref.current
    let columns = Math.floor(c.offsetWidth / size)

    if (counter % interval === 0 && si.current < 10000 - 1) {
      setFlow(function(prev) {
        // make sure counter is not skipping numbers...
        let sample = samples[si.current]
        prev.unshift(sample)

        let anomaly = sample[19] === 1 ? true : false

        // check if anomaly
        let ctx = c.getContext('2d')
        if (anomaly) {
          ctx.fillStyle = red
        } else {
          ctx.fillStyle = scheme.bg
        }

        let [pc, pr] = pcpr_ref.current

        let [p1, p2, p3, p4] = panels_ref.current
        let tp = [p1, p2, p3, p4]

        for (let p of tp) {
          // ctx.fillStyle = 'pink'
          // ctx.fillRect(...p)
        }

        let panel_data = [p1, p2, p3, p4]
        let panel_keys = [21, 20, 21, 20]
        for (let i = 0; i < panel_data.length; i++) {
          let pan = panel_data[i]
          let detected = sample[panel_keys[i]]
          if (si.current < 100) {
            console.log(detected)
          }
          let p1x, p1y
          if (detected > 0.1) {
            let n = panels[i][0] + panels[i][1]
            p1y = pr - (n % pr) - 1
            p1x = Math.floor(n / pr)
            if (anomaly) {
              // true pos
              panels[i][0]++
            } else {
              // false pos
              panels[i][1]++
            }
          } else {
            let n = panels[i][2] + panels[i][3]
            p1y = pr - (n % pr) - 1
            p1x = pc - Math.floor(n / pr) - 1
            if (anomaly) {
              // false neg
              panels[i][3]++
            } else {
              // true neg
              panels[i][2]++
            }
          }
          ctx.fillRect(
            pan[0] + p1x * size,
            pan[1] + p1y * size,
            size + 1,
            size + 1
          )
        }

        let readouts = readouts_ref.current

        let accuracies = []
        for (let i = 0; i < readouts.length; i++) {
          let $r = readouts[i].current
          let r0 = $r.childNodes[1].childNodes
          let r1 = $r.childNodes[0].childNodes

          // tp 0, fp 1, tn 2, fn 3

          // precision tp / (tp + fp)
          let precision = Math.round(
            (panels[i][0] / (panels[i][0] + panels[i][1])) * 100
          )
          r0[0].childNodes[1].innerText = precision + '%'

          //Accuracy = (TP+TN)/(TP+TN+FP+FN)
          let accuracy = Math.round(
            ((panels[i][0] + panels[i][2]) /
              (panels[i][0] + panels[i][1] + panels[i][2] + panels[i][3])) *
              100
          )
          r0[1].childNodes[1].innerText = accuracy + '%'

          // recall tp / (tp + fn)
          let recall = Math.round(
            (panels[i][0] / (panels[i][0] + panels[i][3])) * 100
          )
          r0[2].childNodes[1].innerText = recall + '%'

          accuracies.push([i, accuracy, precision, recall])

          r1[0].childNodes[1].innerText = panels[i][0]
          r1[1].childNodes[1].innerText = panels[i][1]
          r1[3].childNodes[1].innerText = panels[i][2]
          r1[4].childNodes[1].innerText = panels[i][3]
        }

        let cr = cr_ref.current
        let crx = cr.getContext('2d')
        cr.width = window.innerWidth - ch * 2
        cr.height = rlh * 4

        let ranking = rankings_ref.current
        let sorti = sort_options.indexOf(sort)
        accuracies.sort(function(a, b) {
          return b[sorti + 1] - a[sorti + 1]
        })

        let crstep = cr.width / 4
        crx.clearRect(0, 0, cr.with, cr.height)
        crx.fillStyle = scheme.fg
        for (let a = 0; a < accuracies.length; a++) {
          let p = accuracies[a]
          let y = a * rlh
          for (let cra = 0; cra < 3; cra++) {
            let x = cra * crstep + crstep
            let y = a * rlh
            // crx.fillStyle = bgs[p[0]]
            crx.fillRect(x, y - 1, (p[cra + 1] / 100) * crstep, rlh + 2)
          }
        }

        ranking.innerHTML = accuracies
          .map(
            (p, i) => `<div style="display: flex; position: relative;">
            <div style="position: absolute; left: -0.5px; top: -0.5px; height: ${rlh +
              1}px;
            border: solid 1px #bbb; display: none;  width: ${pc * size * 2 +
              ch * 2 +
              1}px;
            "></div>
              <div style="width: 100%;"><span style="position: relative; display: inline-block; background: ${
                bgs[p[0]]
              }; padding-right: 0.5ch; padding-left: 0.5ch;">${
              names[p[0]]
            }</div> 
              <div style="width: 100%;">${p[1]}%</div>
              <div style="width: 100%;">${p[2]}%</div>
              <div style="width: 100%;">${p[3]}%</div>
            </div>`
          )
          .join(' ')

        id++
        return prev
      })
      si.current = si.current + 1

      if (si.current >= 10000) {
        if (handler_ref.current !== null) clearInterval(handler_ref.current)
      }
    }
  }, [samples, counter, sort])

  useEffect(() => {
    // assumes only set once
    if (samples !== null) {
      handler_ref.current = setInterval(() => {
        setCounter(function(prev) {
          return prev + 1
        })
      }, 10)
    } else {
      if (handler_ref.current !== null) clearInterval(handler_ref.current)
    }
  }, [samples])

  useEffect(() => {
    fetch('sampled.json')
      .then(r => r.json())
      .then(data => {
        let c = canvas_ref.current
        c.style.top = '0px'
        c.width = window.innerWidth
        let ctx = c.getContext('2d')

        // ctx.fillStyle = '#ddd'
        // ctx.fillRect(0, 0, c.width, c.height)

        let columns = Math.floor((c.offsetWidth - 4 * ch) / size)

        let panel_columns = Math.floor(columns / 2)
        let panel_rows = Math.ceil(10000 / (panel_columns - 1))

        let pc = panel_columns
        let pr = panel_rows
        pcpr_ref.current = [pc, pr]

        let p1 = [ch, rlh, panel_columns * size + 1, panel_rows * size + 1]
        let p2 = [
          ch * 3 + panel_columns * size,
          rlh,
          panel_columns * size + 1,
          panel_rows * size + 1,
        ]
        let p3 = [
          ch,
          rlh + pr * size + 4 * rlh,
          panel_columns * size + 1,
          panel_rows * size + 1,
        ]
        let p4 = [
          ch * 3 + panel_columns * size,
          rlh + pr * size + 4 * rlh,
          panel_columns * size + 1,
          panel_rows * size + 1,
        ]

        let panels = [p1, p2, p3, p4]
        panels_ref.current = panels

        c.height = p4[1] + p4[3] + 4 * rlh

        let borders = borders_ref.current

        for (let panel of panels) {
          // ctx.fillStyle = scheme.fg
          // ctx.fillRect(
          //   panel[0] - 0.5,
          //   panel[1] - rlh - 0.5,
          //   panel[2] + 1,
          //   panel[3] + rlh * 5 + 1
          // )
          // ctx.strokeRect(
          //   panel[0] - 0.5,
          //   panel[1] - rlh - 0.5,
          //   panel[2] + 1,
          //   panel[3] + rlh * 5 + 1
          // // )
          ctx.fillStyle = '#ccc'
          ctx.fillRect(panel[0], panel[1], panel[2], panel[3] + 1)
        }

        let titles = titles_ref.current
        let readouts = readouts_ref.current
        for (let i = 0; i < readouts.length; i++) {
          let $readout = readouts[i].current
          let panel = panels[i]
          $readout.style.position = 'absolute'
          $readout.style.left = panel[0] + 'px'
          $readout.style.top = panel[1] + panel[3] - 4 * rlh + 4 * rlh + 'px'
          $readout.style.width = panel[2] + 'px'

          let $title = titles[i].current
          $title.style.position = 'absolute'
          $title.style.left = panel[0] + 'px'
          $title.style.top = panel[1] - rlh + 'px'
          $title.style.width = panel[2] + 'px'
          $title.style.textAlign = 'center'

          let $border = borders[i].current
          $border.style.position = 'absolute'
          $border.style.left = panel[0] - 1 + 'px'
          $border.style.top = panel[1] - rlh + 'px'
          $border.style.width = panel[2] + 2 + 'px'
          $border.style.height = panel[3] + rlh * 3 + 2 + 'px'
          $border.style.border = 'solid 2px ' + bgs[i]
          $border.style.borderTop = 'none'
        }

        setKeys(data.keys)
        setSamples(data.data)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Failsafe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ paddingLeft: '1ch', marginTop: rlh / 4 }}>CONNECTIONS</div>
      <div style={{}}>
        <div
          style={{ height: rlh * 4, background: scheme.bg, overflow: 'hidden' }}
        >
          {flow.slice(0, 5).map((o, i) => (
            <div
              style={{
                position: 'relative',
                paddingLeft: '1ch',
                paddingRight: '1ch',
                color: 'white',
                height: fs * lh,
                display: 'flex',
              }}
            >
              <div style={{ width: '100%', textAlign: 'right' }}>{counter}</div>
              {o.slice(1, 19).map(v => (
                <div style={{ width: '100%', textAlign: 'right' }}>{v}</div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: rlh / 4 + 2, position: 'relative' }}>
          <div style={{ paddingLeft: '1ch', paddingRight: '1ch' }}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '100%',
                }}
              >
                STRATEGY RANKINGS
              </div>
              {sort_options.map(o => (
                <div
                  style={{
                    width: '100%',
                    // background: o === sort ? scheme.bg : 'white',
                    // color: o === sort ? 'white' : scheme.bg,
                    textDecoration: o !== sort ? 'underline' : 'none',
                    cursor: o !== sort ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    setSort(o)
                  }}
                >
                  {o}
                </div>
              ))}
            </div>
          </div>
          <canvas
            ref={cr_ref}
            style={{ position: 'absolute', left: ch, bottom: 0 }}
          />
          <div
            ref={rankings_ref}
            style={{
              paddingLeft: '1ch',
              paddingRight: '1ch',
              position: 'relative',
            }}
          />
        </div>

        <div style={{ paddingLeft: '1ch', marginTop: rlh / 4 }}>STRATEGIES</div>
        <div style={{ position: 'relative' }}>
          <canvas ref={canvas_ref} style={{ position: 'relative' }} />

          <div style={{ position: 'absolute', left: 0, top: 0 }}>
            {names.map((n, i) => [
              <div
                ref={titles_ref.current[i]}
                style={{
                  background: bgs[i],
                }}
              >
                {n}
              </div>,
              <div ref={readouts_ref.current[i]} style={{}}>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  {[
                    ['true pos', red],
                    ['false pos', scheme.bg],
                    ['spacer'],
                    ['true neg', scheme.bg],
                    ['false neg', red],
                  ].map((o, i2) => {
                    return o[0] === 'spacer' ? (
                      <div style={{ width: ch }}>
                        <div
                          style={{ width: ch, height: rlh, background: '#ccc' }}
                        />
                        <div
                          style={{ width: ch, height: rlh, background: '#ccc' }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          textAlign: 'center',
                          flexGrow: 1,
                          background: '#aaa',
                          // color: 'white',
                        }}
                      >
                        <div style={{ fontStyle: 'italic' }}>{o[0]}</div>
                        <div
                          style={{
                            background: o[1],
                            color: 'white',
                          }}
                        >
                          0
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                    display: 'none',
                  }}
                >
                  {[
                    ['precision', '25%'],
                    ['accuracy', '50%'],
                    ['recall', '25%'],
                  ].map(o => {
                    return (
                      <div
                        style={{
                          textAlign: 'center',
                          width: o[1],
                        }}
                      >
                        <div>{o[0]}</div>
                        <div
                          style={{
                            background: scheme.bg,
                            color: 'white',
                            // fontSize: fs * 1.25,
                          }}
                        >
                          0
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>,
              <div ref={borders_ref.current[i]} style={{}} />,
            ])}
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            right: cell.w,
            bottom: cell.h,
            background: 'blue',
            color: 'white',
            display: 'none',
          }}
        >
          counter {counter}
        </div>
      </div>

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
