import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useCallback,
} from 'react';
import Head from 'next/head';
import Agent from '../components/agent';
import { color } from '../components/constants';

let fs = 13;
let lh = 1.5;
let ch = 9.599990844726562;
let rlh = fs * lh;
let cell = { w: ch, h: rlh / 2 };

let top_lines = 70;
let frames = 6;
let interval = frames / 2;

let names = ['SVM', 'Deep', 'GAN', 'Sequencer'];

let id = 0;
let sx = 0;
let sy = 0;
let sd = 1;
let sm = 1;

let size = 4;

function spiral(n) {
  // given n an index in the squared spiral
  // p the sum of point in inner square
  // a the position on the current square
  // n = p + a

  // Original code: http://jsfiddle.net/davidonet/HJQ4g/
  if (n === 0) return [0, 0, r];
  --n;

  var r = Math.floor((Math.sqrt(n + 1) - 1) / 2) + 1;

  // compute radius : inverse arithmetic sum of 8+16+24+...=
  var p = (8 * r * (r - 1)) / 2;
  // compute total point on radius -1 : arithmetic sum of 8+16+24+...

  var en = r * 2;
  // points by face

  var a = (1 + n - p) % (r * 8);
  // compute de position and shift it so the first is (-r,-r) but (-r+1,-r)
  // so square can connect

  var pos = [0, 0, r];
  switch (Math.floor(a / (r * 2))) {
    // find the face : 0 top, 1 right, 2, bottom, 3 left
    case 0:
      {
        pos[0] = a - r;
        pos[1] = -r;
      }
      break;
    case 1:
      {
        pos[0] = r;
        pos[1] = (a % en) - r;
      }
      break;
    case 2:
      {
        pos[0] = r - (a % en);
        pos[1] = r;
      }
      break;
    case 3:
      {
        pos[0] = -r;
        pos[1] = r - (a % en);
      }
      break;
  }
  return pos;
}

let panels = [...Array(4)].map(n => [0, 0, 0, 0]);

export default function Index() {
  let [counter, setCounter] = useState(-1);
  let [flow, setFlow] = useState([]);
  let handler_ref = useRef(null);
  let canvas_ref = useRef(null);
  let readouts_ref = useRef([...Array(4)].map(() => createRef()));

  useEffect(() => {
    let c = canvas_ref.current;
    let columns = Math.floor(c.offsetWidth / size);

    if (counter % interval === 0) {
      setFlow(function(prev) {
        let anomaly = Math.random() > 0.8;
        let datum = {
          id: id,
          gen: counter,
          anomaly: anomaly,
          detected: [
            anomaly ? Math.random() > 0.4 : Math.random() > 0.9,
            anomaly ? Math.random() > 0.3 : Math.random() > 0.92,
            anomaly ? Math.random() > 0.2 : Math.random() > 0.94,
            anomaly ? Math.random() > 0.1 : Math.random() > 0.96,
          ],
        };
        prev.unshift(datum);

        let ctx = c.getContext('2d');
        if (datum.anomaly) {
          ctx.fillStyle = 'red';
        } else {
          ctx.fillStyle = 'black';
        }

        let x_gaps = 4 * 2 + 4;
        let panel_columns = Math.floor((columns - (4 * 2 + 4)) / 2);
        // border of 1
        let panel_rows = Math.ceil(10000 / (panel_columns - 2)) + 2;

        let pc = panel_columns - 2;
        let pr = panel_rows - 2;

        let offset = columns * 4;
        if (id < offset) {
          let x = id % columns;
          let y = Math.floor(id / columns);
          // ctx.fillRect(x * size, y * size + fs * lh, size, size);
        } else {
          // let id_adjusted = id - offset;
          // let col = id_adjusted % x_gaps;
          // let row = Math.floor(id_adjusted / x_gaps);
          // let x;
          // if (col < 4) {
          //   x = col * size;
          // } else if (col < 8) {
          //   x = col * size + panel_columns * size;
          // } else {
          //   x = col * size + panel_columns * size * 2;
          // }
          // let y = row + 4;
          let x = id % columns;
          let y = Math.floor(id / columns);
          if (
            x < 4 ||
            (x > 4 + panel_columns - 1 && x < 4 + panel_columns + 4) ||
            x > 4 * 2 + panel_columns * 2 - 1
          ) {
            // ctx.fillRect(x * size, y * size + fs * lh, size, size);
          }
        }

        let p1 = [
          4 * size,
          4 * size + fs * lh,
          panel_columns * size,
          panel_rows * size + rlh * 2,
        ];
        let p2 = [
          4 * size + panel_columns * size + 4 * size,
          4 * size + fs * lh,
          panel_columns * size,
          panel_rows * size + rlh * 2,
        ];
        let p3 = [
          4 * size,
          4 * size + fs * lh + panel_rows * size + 4 * size + rlh * 2,
          panel_columns * size,
          panel_rows * size + rlh * 2,
        ];
        let p4 = [
          4 * size + panel_columns * size + 4 * size,
          4 * size + fs * lh + panel_rows * size + 4 * size + rlh * 2,
          panel_columns * size,
          panel_rows * size + rlh * 2,
        ];

        let tp = [p1, p2, p3, p4];
        // if (datum.anomaly) {
        //   ctx.fillStyle = 'red';
        // } else {
        //   ctx.fillStyle = 'black';
        // }
        //

        let panel_data = [p1, p2, p3, p4];
        for (let i = 0; i < panel_data.length; i++) {
          let pan = panel_data[i];
          let p1x, p1y;
          if (datum.detected[i]) {
            let n = panels[i][0] + panels[i][1];
            p1y = pr - (n % pr);
            p1x = Math.floor(n / pr) + 1;
            if (datum.anomaly) {
              // true pos
              panels[i][0]++;
            } else {
              // false pos
              panels[i][1]++;
            }
          } else {
            let n = panels[i][2] + panels[i][3];
            p1y = pr - (n % pr);
            p1x = pc - Math.floor(n / pr);
            if (!datum.anomaly) {
              // true neg
              panels[i][2]++;
            } else {
              // false neg
              panels[i][3]++;
            }
          }
          ctx.fillRect(pan[0] + p1x * size, pan[1] + p1y * size, size, size);
        }

        let readouts = readouts_ref.current;
        for (let i = 0; i < readouts.length; i++) {
          let $r = readouts[i].current;
          let r0 = $r.childNodes[0].childNodes;
          let r1 = $r.childNodes[1].childNodes;

          r0[0].innerText =
            Math.round((panels[i][0] / (panels[i][0] + panels[i][3])) * 100) +
            '%';
          r0[1].innerText =
            Math.round((panels[i][0] / (panels[i][0] + panels[i][1])) * 100) +
            '%';
          r0[2].innerText =
            Math.round((panels[i][0] / (panels[i][0] + panels[i][3])) * 100) +
            '%';

          r1[0].innerText = panels[i][0] + panels[i][1];
          r1[1].innerText = panels[i][1];
          r1[2].innerText = panels[i][2] + panels[i][3];
          r1[3].innerText = panels[i][3];
        }

        id++;
        return prev;
      });
    }
  }, [counter]);

  useEffect(() => {
    let c = canvas_ref.current;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    let ctx = c.getContext('2d');

    let columns = Math.floor(c.offsetWidth / size);

    let x_gaps = 4 * 2 + 4;
    let panel_columns = Math.floor((columns - (4 * 2 + 4)) / 2);
    // border of 1
    let panel_rows = Math.ceil(10000 / (panel_columns - 2)) + 2;

    let pc = panel_columns - 2;
    let pr = panel_rows - 2;

    let p1 = [
      4 * size,
      4 * size + fs * lh,
      panel_columns * size,
      panel_rows * size + rlh * 2,
    ];
    let p2 = [
      4 * size + panel_columns * size + 4 * size,
      4 * size + fs * lh,
      panel_columns * size,
      panel_rows * size + rlh * 2,
    ];
    let p3 = [
      4 * size,
      4 * size + fs * lh + panel_rows * size + 4 * size + rlh * 2,
      panel_columns * size,
      panel_rows * size + rlh * 2,
    ];
    let p4 = [
      4 * size + panel_columns * size + 4 * size,
      4 * size + fs * lh + panel_rows * size + 4 * size + rlh * 2,
      panel_columns * size,
      panel_rows * size + rlh * 2,
    ];

    let panels = [p1, p2, p3, p4];

    ctx.fillStyle = '#ddd';
    for (let i = 0; i < panels.length; i++) {
      ctx.fillRect(...panels[i]);
    }

    // ctx.fillStyle = 'white';
    // ctx.fillRect(...p1);
    // ctx.fillRect(...p2);
    // ctx.fillRect(...p3);
    // ctx.fillRect(...p4);

    let readouts = readouts_ref.current;
    for (let i = 0; i < readouts.length; i++) {
      let $readout = readouts[i].current;
      let panel = panels[i];
      $readout.style.position = 'absolute';
      $readout.style.left = panel[0] + size + 'px';
      $readout.style.top = panel[1] + panel[3] - rlh * 2 + 'px';
      $readout.style.width = panel[2] - size * 2 + 'px';
      $readout.style.height = fs * lh + 'px';
    }

    handler_ref.current = setInterval(() => {
      setCounter(function(prev) {
        return prev + 1;
      });
    }, 10);
    return () => {
      if (handler_ref.current !== null) clearInterval(handler_ref.current);
    };
  }, []);

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
                background: o.anomaly ? 'red' : 'black',
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

        <canvas
          ref={canvas_ref}
          style={{ position: 'absolute', left: 0, top: 0 }}
        />

        <div style={{ position: 'absolute', left: 0, top: 0 }}>
          {[...Array(4)].map((n, i) => (
            <div ref={readouts_ref.current[i]} style={{}}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>0</div>
                <div>0</div>
                <div>0</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
              </div>
            </div>
          ))}
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
  );
}
