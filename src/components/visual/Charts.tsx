/**
 * Lightweight, dependency-free SVG charts.
 * Deterministic (no random) so SSR and client markup match.
 */

function buildPath(values: number[], w: number, h: number, pad = 4) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  return values.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return { x, y };
  });
}

export function AreaChart({
  data,
  color = "var(--color-brand)",
  className,
  height = 120,
}: {
  data: number[];
  color?: string;
  className?: string;
  height?: number;
}) {
  const w = 320;
  const pts = buildPath(data, w, height);
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = `${line} L${pts[pts.length - 1].x},${height} L${pts[0].x},${height} Z`;
  const gid = `area-${color.replace(/[^a-z]/gi, "")}`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className={className} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.32" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === pts.length - 1 ? 3.5 : 0} fill={color} />
      ))}
    </svg>
  );
}

export function BarChart({
  data,
  color = "var(--color-brand)",
  className,
  height = 120,
}: {
  data: number[];
  color?: string;
  className?: string;
  height?: number;
}) {
  const w = 320;
  const max = Math.max(...data);
  const gap = 8;
  const bw = (w - gap * (data.length - 1)) / data.length;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className={className} preserveAspectRatio="none" aria-hidden>
      {data.map((v, i) => {
        const bh = (v / max) * (height - 8);
        return (
          <rect
            key={i}
            x={i * (bw + gap)}
            y={height - bh}
            width={bw}
            height={bh}
            rx={Math.min(bw / 2.4, 6)}
            fill={color}
            opacity={i === data.length - 1 ? 1 : 0.4}
          />
        );
      })}
    </svg>
  );
}

export function DonutChart({
  segments,
  size = 120,
  thickness = 16,
  className,
}: {
  segments: { value: number; color: string }[];
  size?: number;
  thickness?: number;
  className?: string;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((seg, i) => {
          const len = (seg.value / total) * c;
          const el = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={thickness}
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
            />
          );
          offset += len;
          return el;
        })}
      </g>
    </svg>
  );
}

export function Sparkline({
  data,
  color = "var(--color-emerald)",
  className,
}: {
  data: number[];
  color?: string;
  className?: string;
}) {
  const w = 90;
  const h = 28;
  const pts = buildPath(data, w, h, 2);
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none" aria-hidden>
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
