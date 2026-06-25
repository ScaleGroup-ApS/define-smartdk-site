/**
 * Visuals — canvas-driven water animations and animated counters ported from
 * the Define Smart prototype. All drawing runs inside useEffect (client only),
 * so these render as inert <canvas>/<span> elements during SSR.
 */
import { useEffect, useRef, useState, type CSSProperties } from "react";

// ── Canvas sizing ──────────────────────────────────────────────────────────

function fit(canvas: HTMLCanvasElement) {
  const r = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = Math.max(1, Math.round(r.width * dpr));
  const H = Math.max(1, Math.round(r.height * dpr));
  if (canvas.width !== W || canvas.height !== H) {
    canvas.width = W;
    canvas.height = H;
  }
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: r.width, h: r.height };
}

/** Run `draw(t)` on every animation frame until the element unmounts. */
function useRaf(draw: (t: number) => void) {
  const drawRef = useRef(draw);
  drawRef.current = draw;
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      drawRef.current((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
}

// ── Wave background ─────────────────────────────────────────────────────────

interface Ripple {
  x: number;
  y: number;
  t: number;
}

interface WaveCanvasProps {
  variant?: "light" | "dark";
  /** Enable cursor ripples (listens on the canvas' parent element). */
  interactive?: boolean;
  intensity?: number;
  style?: CSSProperties;
}

export function WaveCanvas({
  variant = "light",
  interactive = false,
  intensity = 1,
  style,
}: WaveCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Ripple[]>([]);
  const tRef = useRef(0);

  useEffect(() => {
    if (!interactive) return;
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const arr = ripples.current;
      const last = arr[arr.length - 1];
      if (last && Math.hypot(last.x - x, last.y - y) < 36) return;
      arr.push({ x, y, t: tRef.current });
      if (arr.length > 16) arr.shift();
    };
    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, [interactive]);

  useRaf((t) => {
    const canvas = ref.current;
    if (!canvas || !canvas.isConnected) return;
    tRef.current = t;
    const { ctx, w, h } = fit(canvas);
    ctx.clearRect(0, 0, w, h);

    const dark = variant === "dark";
    const layers = dark
      ? [
          { amp: 16, len: 0.01, sp: 0.5, y: 0.45, col: "rgba(95,211,230,0.10)" },
          { amp: 22, len: 0.007, sp: -0.38, y: 0.6, col: "rgba(21,182,207,0.14)" },
          { amp: 30, len: 0.005, sp: 0.28, y: 0.78, col: "rgba(14,99,199,0.30)" },
        ]
      : [
          { amp: 14, len: 0.011, sp: 0.55, y: 0.55, col: "rgba(14,99,199,0.07)" },
          { amp: 20, len: 0.008, sp: -0.4, y: 0.66, col: "rgba(21,182,207,0.10)" },
          { amp: 28, len: 0.0055, sp: 0.3, y: 0.8, col: "rgba(14,99,199,0.13)" },
        ];

    layers.forEach((L) => {
      ctx.beginPath();
      ctx.moveTo(0, h);
      const baseY = h * L.y;
      for (let x = 0; x <= w; x += 5) {
        const y =
          baseY +
          Math.sin(x * L.len + t * L.sp) * L.amp * intensity +
          Math.sin(x * L.len * 2.4 + t * L.sp * 1.7) * L.amp * 0.3 * intensity;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = L.col;
      ctx.fill();
    });

    if (interactive) {
      ripples.current = ripples.current.filter((r) => t - r.t < 1.5);
      ripples.current.forEach((r) => {
        const age = t - r.t;
        const rad = age * 140;
        ctx.beginPath();
        ctx.arc(r.x, r.y, rad, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(21,182,207," + 0.4 * (1 - age / 1.5) + ")";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r.x, r.y, rad * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(14,99,199," + 0.25 * (1 - age / 1.5) + ")";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    }
  });

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", ...style }}
    />
  );
}

// ── Mini live-flow strip ────────────────────────────────────────────────────

export function MiniFlowCanvas({ style }: { style?: CSSProperties }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useRaf((t) => {
    const canvas = ref.current;
    if (!canvas || !canvas.isConnected) return;
    const { ctx, w, h } = fit(canvas);
    ctx.clearRect(0, 0, w, h);
    const base = h * 0.55;
    const wave = (x: number) =>
      base + Math.sin(x * 0.05 + t * 1.0) * 12 + Math.sin(x * 0.02 - t * 0.6) * 16;

    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 4) ctx.lineTo(x, wave(x));
    ctx.lineTo(w, h);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(95,211,230,0.45)");
    g.addColorStop(1, "rgba(95,211,230,0.02)");
    ctx.fillStyle = g;
    ctx.fill();

    ctx.beginPath();
    for (let x = 0; x <= w; x += 4) {
      if (x === 0) ctx.moveTo(x, wave(x));
      else ctx.lineTo(x, wave(x));
    }
    ctx.strokeStyle = "#5FD3E6";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
  return <canvas ref={ref} aria-hidden="true" style={{ width: "100%", height: 150, display: "block", borderRadius: 10, ...style }} />;
}

// ── Dashboard 24h area chart ────────────────────────────────────────────────

export function AreaChartCanvas({ style }: { style?: CSSProperties }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useRaf((t) => {
    const canvas = ref.current;
    if (!canvas || !canvas.isConnected) return;
    const { ctx, w, h } = fit(canvas);
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = "#EDF3F8";
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const y = (h * i) / 4;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const base = h * 0.52;
    const flow = (x: number) =>
      base +
      Math.sin(x * 0.014 + t * 0.8) * 14 +
      Math.sin(x * 0.006 - t * 0.5) * 20 +
      Math.sin(x * 0.03 + t * 1.3) * 5;

    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 4) {
      if (x === 0) ctx.moveTo(x, flow(x));
      else ctx.lineTo(x, flow(x));
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(21,182,207,0.32)");
    g.addColorStop(1, "rgba(14,99,199,0.02)");
    ctx.fillStyle = g;
    ctx.fill();

    ctx.beginPath();
    for (let x = 0; x <= w; x += 4) {
      if (x === 0) ctx.moveTo(x, flow(x));
      else ctx.lineTo(x, flow(x));
    }
    ctx.strokeStyle = "#0E63C7";
    ctx.lineWidth = 2.5;
    ctx.lineJoin = "round";
    ctx.stroke();

    const mx = w - 1;
    const my = flow(mx);
    ctx.beginPath();
    ctx.arc(mx - 6, my, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = "#0E63C7";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mx - 6, my, 9, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(14,99,199,0.3)";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
  return <canvas ref={ref} aria-hidden="true" style={{ width: "100%", height: 230, display: "block", ...style }} />;
}

// ── Dashboard flow gauge ────────────────────────────────────────────────────

export function GaugeCanvas({ style }: { style?: CSSProperties }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useRaf((t) => {
    const canvas = ref.current;
    if (!canvas || !canvas.isConnected) return;
    const { ctx, w, h } = fit(canvas);
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const cy = h * 0.82;
    const R = Math.min(w, h * 1.4) * 0.42;
    const start = Math.PI * 0.9;
    const end = Math.PI * 2.1;

    ctx.beginPath();
    ctx.arc(cx, cy, R, start, end);
    ctx.strokeStyle = "#E7F0F8";
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.stroke();

    const frac = (138 + Math.sin(t * 0.9) * 16 + Math.sin(t * 2.3) * 5) / 400;
    const vEnd = start + (end - start) * Math.max(0, Math.min(1, frac));
    const grad = ctx.createLinearGradient(cx - R, cy, cx + R, cy);
    grad.addColorStop(0, "#0E63C7");
    grad.addColorStop(1, "#19C0D6");
    ctx.beginPath();
    ctx.arc(cx, cy, R, start, vEnd);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.stroke();

    const tx = cx + Math.cos(vEnd) * R;
    const ty = cy + Math.sin(vEnd) * R;
    ctx.beginPath();
    ctx.arc(tx, ty, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(tx, ty, 8, 0, Math.PI * 2);
    ctx.strokeStyle = "#19C0D6";
    ctx.lineWidth = 3;
    ctx.stroke();
  });
  return <canvas ref={ref} aria-hidden="true" style={{ width: 200, height: 160, display: "block", ...style }} />;
}

// ── Animated count-up ───────────────────────────────────────────────────────

export type CountFmt = "liters" | "percent" | "plus" | "seconds" | "plain";

function format(v: number, fmt: CountFmt): string {
  switch (fmt) {
    case "liters":
      return v >= 1e9
        ? (v / 1e9).toFixed(2).replace(".", ",") + " mia."
        : (v / 1e6).toFixed(0) + " mio.";
    case "percent":
      return Math.round(v) + "%";
    case "plus":
      return Math.round(v) + "+";
    case "seconds":
      return "<" + Math.round(v) + "s";
    default:
      return String(Math.round(v));
  }
}

export function CountUp({
  target,
  fmt = "plain",
  duration = 1500,
  style,
}: {
  target: number;
  fmt?: CountFmt;
  duration?: number;
  style?: CSSProperties;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(target * e);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return <span style={style}>{format(val, fmt)}</span>;
}

// ── Live updating flow number ───────────────────────────────────────────────

export function LiveFlow({ unit = true, style }: { unit?: boolean; style?: CSSProperties }) {
  const [flow, setFlow] = useState(142);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const t = (now - start) / 1000;
      setFlow(Math.round(138 + Math.sin(t * 0.9) * 16 + Math.sin(t * 2.3) * 5));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <span style={style}>
      {flow}
      {unit && <span style={{ fontSize: 14, color: "#94A8B8", fontWeight: 400 }}> L/min</span>}
    </span>
  );
}

// ── Small shared brand mark (the rotated water-drop diamond) ─────────────────

export function DropMark({ size = 26, style }: { size?: number; style?: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(150deg,#19C0D6,#0E63C7)",
        borderRadius: "50% 50% 50% 2px",
        transform: "rotate(45deg)",
        boxShadow: "0 4px 12px rgba(14,99,199,0.32)",
        ...style,
      }}
    />
  );
}
