"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const POINTS = 48;
const LIMIT = 480; // contracted peak, kW
const W = 600;
const H = 220;
const MAX = 620;

/** Deterministic-ish factory load: base + shift wave + random spikes. */
const sample = (t: number) =>
  360 + 70 * Math.sin(t / 5) + 30 * Math.sin(t / 1.7) + (Math.random() > 0.9 ? 90 : 0) + Math.random() * 20;

/**
 * Hero centrepiece: a live, simulated load curve. Toggle "Peak Guard" to see what
 * the product does — demand above the contracted limit gets clipped.
 */
export default function LoadChart() {
  const [t, setT] = useState(0);
  const [data, setData] = useState<number[]>(() => Array.from({ length: POINTS }, (_, i) => 380 + 60 * Math.sin(i / 5)));
  const [guard, setGuard] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setT((x) => x + 1);
      setData((d) => [...d.slice(1), sample(t + POINTS)]);
    }, 900);
    return () => clearInterval(id);
  }, [t]);

  const shown = useMemo(() => (guard ? data.map((v) => Math.min(v, LIMIT * 0.97)) : data), [data, guard]);
  const x = (i: number) => (i / (POINTS - 1)) * W;
  const y = (v: number) => H - (v / MAX) * H;
  const line = shown.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  const now = shown[shown.length - 1];
  const over = now > LIMIT;

  return (
    <div className="rounded-lg border border-ink/15 bg-fog-card p-5 shadow-[0_20px_50px_-25px_rgba(13,43,46,.45)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-ink-soft">Main incomer · Plant 2</p>
          <p className="font-display text-4xl font-bold tabular-nums">
            {Math.round(now)} <span className="text-lg font-medium text-ink-soft">kW</span>
          </p>
        </div>
        <span
          className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            over ? "bg-amber/25 text-amber-deep" : "bg-signal/15 text-signal-deep"
          }`}
          role="status"
        >
          {over ? "Above contracted peak" : "Within limit"}
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 h-auto w-full" role="img" aria-label="Live power demand over the last 45 seconds">
        <defs>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={guard ? "#1F9D6B" : "#F2A21B"} stopOpacity=".35" />
            <stop offset="1" stopColor={guard ? "#1F9D6B" : "#F2A21B"} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="#CBD8D4" strokeWidth="1" />
        ))}
        <line x1="0" x2={W} y1={y(LIMIT)} y2={y(LIMIT)} stroke="#0D2B2E" strokeDasharray="6 5" strokeWidth="1.5" />
        <text x={W - 4} y={y(LIMIT) - 6} textAnchor="end" fontSize="12" fill="#0D2B2E">
          Peak limit {LIMIT} kW
        </text>
        <path d={area} fill="url(#fill)" />
        <path d={line} fill="none" stroke={guard ? "#1F9D6B" : "#B86F00"} strokeWidth="2.5" strokeLinejoin="round" />
        <motion.circle cx={x(POINTS - 1)} cy={y(now)} r="5" fill={guard ? "#1F9D6B" : "#B86F00"} animate={{ r: [5, 8, 5] }} transition={{ repeat: Infinity, duration: 1.8 }} />
      </svg>

      <button
        onClick={() => setGuard((g) => !g)}
        aria-pressed={guard}
        className={`mt-4 flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
          guard ? "bg-signal text-white hover:bg-signal-deep" : "bg-ink text-fog hover:bg-ink-soft"
        }`}
      >
        <ShieldCheck size={18} />
        {guard ? "Peak Guard is on. Peaks are shaved" : "Turn on Peak Guard"}
      </button>
      <p className="mt-2 text-center text-xs text-ink-soft">Simulated data for demonstration.</p>
    </div>
  );
}
