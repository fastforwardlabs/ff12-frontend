import React, { useState, useEffect, useRef, useCallback } from 'react';
import { color } from './constants';

let padding = 10;

export default function Agent({
  cell,
  counter,
  flow,
  frames,
  agent_key,
  name,
}) {
  let canvas_ref = useRef(null);
  let container_ref = useRef(null);
  let [dims, setDims] = useState(null);

  function snapx(val) {
    return Math.floor(val / cell.w) * cell.w;
  }
  function snapy(val) {
    return Math.floor(val / cell.h) * cell.h;
  }

  let draw = () => {
    let container = container_ref.current;

    let _w = container.offsetWidth - padding * 2;
    let _h = container.offsetHeight - padding * 2;

    let width = Math.floor(_w / cell.w) * cell.w;
    let height = Math.floor(_h / cell.h) * cell.h;

    let canvas = canvas_ref.current;
    let ctx = canvas.getContext('2d');
    canvas.width = width + padding * 2;
    canvas.height = height + padding * 2;

    {
      let w = width;
      let h = height;
      let c = cell;
      let p = padding;
      let wallx = snapx(0.2 * width);

      let threshy = snapy(h / 2);
      let thirdy = threshy / 3;

      let avail_sort_frames = Math.floor((frames * thirdy) / height);

      ctx.fillStyle = color.fg3;
      ctx.fillRect(padding, padding, width, height);
      ctx.fillStyle = color.fg4;
      ctx.fillRect(p, p + threshy, width, height - threshy);

      ctx.fillStyle = color.bg4;
      ctx.fillRect(p + wallx, p + threshy, c.w, height - threshy);
      // ctx.fillRect(p, p + h - c.h, w, c.h);

      let sorter_y = snapy(h * 0.25);

      let sorter_active = false;
      let target_flow;
      let sorter_percent = 0;
      let slicer = flow.length;
      for (let i = 0; i < flow.length; i++) {
        target_flow = flow[i];
        let check = counter - flow[i].gen;
        let x = snapx(w / 2);
        let y = snapy((check / frames) * h);

        if (target_flow.detected[agent_key]) {
          if (y >= thirdy * 1.5 && y <= thirdy * 2.5) {
            sorter_active = true;
            if (y - thirdy * 1.5 < thirdy / 2) {
              sorter_percent = (y - thirdy * 1.5) / (thirdy / 2);
            } else {
              sorter_percent = (thirdy - (y - thirdy * 1.5)) / (thirdy / 2);
            }
          }
          if (y > thirdy * 1.5 + thirdy / 2) {
            x = snapx(w * 0.1);
          } else if (y > thirdy * 1.5) {
            let pusher_x = snapx(w * (0.6 - 0.5 * sorter_percent)) + c.w;
            if (pusher_x < w / 2) {
              x = pusher_x - c.w;
            }
          }
        }

        if (y > threshy) {
          slicer = i;
          break;
        } else {
          if (flow[i].anomaly) {
            ctx.fillStyle = color.red;
          } else {
          }
          ctx.fillStyle = color.bg2;
          ctx.fillRect(x, y, c.w, c.h);
        }
      }

      // sorter
      {
        ctx.fillStyle = color.aqua;
        let left_x;
        if (sorter_active) {
          left_x = snapx(w * (0.6 - 0.5 * sorter_percent)) + c.w;
        } else {
          left_x = snapx(w * 0.6);
        }
        ctx.fillRect(
          p + left_x,
          p + thirdy + thirdy / 2 - c.h,
          w - left_x,
          c.h * 3
        );
      }

      // received
      ctx.fillStyle = color.bg2;
      let rec_cols = (w - (wallx + c.w)) / c.w;
      let corner_x = rec_cols;

      let sliced = flow.slice(slicer).reverse();
      let detected = sliced.filter(f => f.detected[agent_key]);
      let received = sliced.filter(f => !f.detected[agent_key]);

      {
        let cc = 0;
        let cr = 0;
        for (let i = 0; i < detected.length; i++) {
          let flo = detected[i];
          if (cc === wallx / c.w) {
            cc = 0;
            cr += 1;
          }
          let x = p + cc * c.w;
          let y = p + threshy + (h - threshy - c.h * 1) - cr * c.h;
          if (flo.anomaly) {
            ctx.fillStyle = color.red;
          } else {
            ctx.fillStyle = color.bg2;
          }
          ctx.fillRect(x, y, c.w, c.h);
          cc += 1;
        }
      }

      {
        let cc = 0;
        let cr = 0;
        for (let i = 0; i < received.length; i++) {
          let flo = received[i];
          if (cc === (w - wallx - c.w) / c.w) {
            cc = 0;
            cr += 1;
          }
          let x = p + wallx + c.w + cc * c.w;
          let y = p + threshy + (h - threshy - c.h * 1) - cr * c.h;
          if (flo.anomaly) {
            ctx.fillStyle = color.red;
          } else {
            ctx.fillStyle = color.bg2;
          }
          ctx.fillRect(x, y, c.w, c.h);
          cc += 1;
        }
      }

      // let cc = 0;
      // let cr = 0;
      // for (let i = slicer; i < flow.length; i++) {
      //   let flo = flow[i];
      //   if (cc === rec_cols) {
      //     cc = 0;
      //     cr += 1;
      //   }
      //   let x = p + wallx + c.w + cc * c.w;
      //   let y = p + threshy + (h - threshy - c.h * 2) - cr * c.h;
      //   ctx.fillRect(x, y, c.w, c.h);
      //   cc += 1;
      // }
    }
  };

  useEffect(() => {
    if (dims !== null) {
      draw();
    }
  }, [counter]);

  useEffect(() => {
    let container = container_ref.current;
    let _w = container.offsetWidth - padding * 2;
    let _h = container.offsetHeight - padding * 2;
    let width = Math.floor(_w / cell.w) * cell.w;
    let height = Math.floor(_h / cell.h) * cell.h;
    setDims([width, height]);
  }, []);

  return (
    <div ref={container_ref} style={{ position: 'relative' }}>
      {dims ? (
        <div style={{ width: dims[0], height: dims[1], position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              right: cell.w - padding,
              top: padding + snapy((dims[1] / 2 / 3) * 1.5),
            }}
          >
            {name}
          </div>
          <canvas ref={canvas_ref} />
        </div>
      ) : null}
    </div>
  );
}
