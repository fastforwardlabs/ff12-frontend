import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Agent from '../components/agent';
import { color } from '../components/constants';

let fs = 16;
let lh = 1.5;
let ch = 9.599990844726562;
let rlh = fs * lh;
let cell = { w: ch, h: rlh / 2 };

let top_lines = 6;
let frames = 48;
let interval = frames / 2;

let names = ['SVM', 'Deep', 'GAN', 'Sequencer'];

export default function Index() {
  let [counter, setCounter] = useState(0);
  let [flow, setFlow] = useState([]);
  let handler_ref = useRef(null);

  useEffect(() => {
    if (counter % interval === 0) {
      setFlow(function(prev) {
        let anomaly = Math.random() > 0.8;
        prev.unshift({
          gen: counter,
          anomaly: anomaly,
          detected: [
            anomaly ? Math.random() > 0.4 : Math.random() > 0.9,
            anomaly ? Math.random() > 0.3 : Math.random() > 0.92,
            anomaly ? Math.random() > 0.2 : Math.random() > 0.94,
            anomaly ? Math.random() > 0.1 : Math.random() > 0.96,
          ],
        });
        return prev;
      });
    }
  }, [counter]);

  useEffect(() => {
    handler_ref.current = setInterval(() => {
      setCounter(function(prev) {
        return prev + 1;
      });
    }, 10);
    return () => {
      if (handler_ref.current !== null) clearInterval(handler_ref.current);
    };
  });

  return (
    <div>
      <Head>
        <title>Hack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ height: top_lines * rlh }}>
        {flow.slice(0, top_lines * 10).map((o, i) => (
          <div
            style={{
              position: 'relative',
              background: o.anomaly ? color.red : color.bg2,
              paddingLeft: '1ch',
              paddingRight: '1ch',
            }}
          >
            {counter - o.gen}
          </div>
        ))}
      </div>

      <div
        style={{
          height: `calc(100vh - ${top_lines * rlh}px)`,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '50% 50%',
        }}
      >
        {[...Array(4)].map((n, i) => (
          <Agent
            cell={cell}
            frames={frames}
            flow={flow}
            counter={counter}
            agent_key={i}
            name={names[i]}
          />
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
          background: ${color.bg4};
          color: ${color.fg};
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
