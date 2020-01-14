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

let fs = 13
let lh = 1.5
let ch = 9.599990844726562
let rlh = fs * lh
let cell = { w: ch, h: rlh / 2 }

let top_lines = 70
let frames = 6
let interval = frames / 2

let names = ['Autoencoder', 'Variational Autoencoder']
let short_names = ['AE', 'VAE']

let id = 0
let sx = 0
let sy = 0
let sd = 1
let sm = 1

let size = 4

let panel_number = 2
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
  let [sort, setSort] = useState(sort_options[0])
  let pcpr_ref = useRef(null)
  let panels_ref = useRef(null)
  let rankings_ref = useRef(null)

  useEffect(() => {
    let c = canvas_ref.current
    let columns = Math.floor(c.offsetWidth / size)

    if (counter % interval === 0) {
      setFlow(function(prev) {
        // make sure counter is not skipping numbers...
        let sample = samples[si.current]
        prev.unshift(sample)

        let anomaly = sample[19] === 1 ? true : false

        // check if anomaly
        let ctx = c.getContext('2d')
        if (anomaly) {
          ctx.fillStyle = 'red'
        } else {
          ctx.fillStyle = 'black'
        }

        let [pc, pr] = pcpr_ref.current

        let [p1, p2, p3, p4] = panels_ref.current
        let tp = [p1, p2, p3, p4]

        for (let p of tp) {
          // ctx.fillStyle = 'pink'
          // ctx.fillRect(...p)
        }

        let panel_data = [p1, p2, p3, p4].slice(0, panel_number)
        let panel_keys = [21, 20]
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
              // true neg
              panels[i][2]++
            } else {
              // false neg
              panels[i][3]++
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

          // accuracy tp / (tp + fp)
          let accuracy = Math.round(
            (panels[i][0] / (panels[i][0] + panels[i][1])) * 100
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
          r1[2].childNodes[1].innerText = panels[i][2]
          r1[3].childNodes[1].innerText = panels[i][3]
        }

        let ranking = rankings_ref.current
        let sorti = sort_options.indexOf(sort)
        accuracies.sort(function(a, b) {
          return b[sorti + 1] - a[sorti + 1]
        })
        ranking.innerHTML = accuracies
          .map(
            (p, i) =>
              `<span style="margin-right: 2ch;">${i + 1}. ${
                short_names[p[0]]
              }: ${p[1]}%</span>`
          )
          .join(' ')

        id++
        return prev
      })
      si.current = si.current + 1
    }
  }, [samples, counter, sort])

  useEffect(() => {
    // assumes only set once
    if (samples !== null) {
      handler_ref.current = setInterval(() => {
        setCounter(function(prev) {
          return prev + 1
        })
      }, 1)
    } else {
      if (handler_ref.current !== null) clearInterval(handler_ref.current)
    }
  }, [samples])

  useEffect(() => {
    fetch('sampled.json')
      .then(r => r.json())
      .then(data => {
        let c = canvas_ref.current
        c.width = window.innerWidth
        c.height = window.innerHeight
        let ctx = c.getContext('2d')

        let columns = Math.floor(c.offsetWidth / size)

        let panel_columns = Math.floor(columns / 2) - 2
        let panel_rows = Math.ceil(10000 / panel_columns)

        let pc = panel_columns
        let pr = panel_rows
        pcpr_ref.current = [pc, pr]

        let p1 = [
          1 * size,
          1 * size + rlh + rlh / 2 + rlh,
          panel_columns * size,
          panel_rows * size,
        ]
        let p2 = [
          1 * size + panel_columns * size + 2 * size,
          1 * size + rlh + rlh / 2 + rlh,
          panel_columns * size,
          panel_rows * size,
        ]
        let p3 = [
          1 * size,
          1 * size + rlh + panel_rows * size + 1 * size + 5 * rlh + rlh * 2,
          panel_columns * size,
          panel_rows * size,
        ]
        let p4 = [
          1 * size + panel_columns * size + 2 * size,
          1 * size + rlh + panel_rows * size + 1 * size + 5 * rlh + rlh * 2,
          panel_columns * size,
          panel_rows * size,
        ]

        let panels = [p1, p2, p3, p4]
        panels_ref.current = panels

        let titles = titles_ref.current
        let readouts = readouts_ref.current
        for (let i = 0; i < readouts.length; i++) {
          let $readout = readouts[i].current
          let panel = panels[i]
          $readout.style.position = 'absolute'
          $readout.style.left = panel[0] + 'px'
          $readout.style.top =
            panel[1] + panel[3] - 4 * rlh + 1 + 4 * rlh + 'px'
          $readout.style.width = panel[2] + 'px'

          let $title = titles[i].current
          $title.style.position = 'absolute'
          $title.style.left = panel[0] + 'px'
          $title.style.top = panel[1] - rlh + 'px'
          $title.style.width = panel[2] + 'px'
          $title.style.textAlign = 'center'
        }

        console.log(data.keys)
        setKeys(data.keys)
        setSamples(data.data)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Hack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div style={{}}>
          {flow.slice(0, 1).map((o, i) => (
            <div
              style={{
                position: 'relative',
                // background: o.anomaly ? 'red' : 'black',
                background: 'black',
                color: 'white',
                paddingLeft: size,
                paddingRight: size,
                height: fs * lh,
              }}
            >
              {o.id}
            </div>
          ))}
        </div>
        <div style={{ marginTop: rlh }}>
          <div style={{ paddingLeft: '1ch', display: 'flex' }}>
            <div>Rank by</div>
            <div
              style={{
                display: 'flex',
                paddingLeft: '0.5ch',
                paddingRight: '0.5ch',
              }}
            >
              {sort_options.map(o => (
                <div
                  style={{
                    background: o === sort ? 'black' : 'white',
                    color: o === sort ? 'white' : 'black',
                    textDecoration: o !== sort ? 'underline' : 'none',
                    cursor: o !== sort ? 'pointer' : 'default',
                    paddingLeft: '0.5ch',
                    paddingRight: '0.5ch',
                  }}
                  onClick={() => {
                    setSort(o)
                  }}
                >
                  {o}
                </div>
              ))}
            </div>
            <div ref={rankings_ref} style={{ display: 'flex' }} />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <canvas
            ref={canvas_ref}
            style={{ position: 'absolute', left: 0, top: 0 }}
          />

          <div style={{ position: 'absolute', left: 0, top: 0 }}>
            {names.map((n, i) => [
              <div ref={titles_ref.current[i]} style={{}}>
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
                    ['true pos', 'red'],
                    ['false pos', 'black'],
                    ['true neg', 'black'],
                    ['false neg', 'red'],
                  ].map((o, i) => {
                    return (
                      <div
                        style={{
                          textAlign: 'center',
                          flexGrow: 1,
                          borderRight: i === 1 ? 'solid 1px white' : 'none',
                          borderLeft: i === 2 ? 'solid 1px white' : 'none',
                        }}
                      >
                        <div>{o[0]}</div>
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
                            background: 'black',
                            color: 'white',
                          }}
                        >
                          0
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>,
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
        * {
          box-sizing: border-box;
        }
        html {
          font-family: 'custom', sans-serif;
          font-size: ${fs}px;
          line-height: ${lh};
          background: #fff;
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
