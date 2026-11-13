/* Thin-line Indian architectural motifs, used sparingly as framing. */

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1 } as const;

/** Pointed (Mughal) arch from x, width w, crown at `top`, standing on `base`. */
function arch(x: number, w: number, top: number, base: number) {
  const cx = x + w / 2;
  const spring = top + w * 0.5;
  const h = spring - top;
  return [
    `M ${x} ${base}`,
    `V ${spring}`,
    `C ${x} ${spring - h * 0.62} ${cx - w * 0.2} ${top + h * 0.14} ${cx} ${top}`,
    `C ${cx + w * 0.2} ${top + h * 0.14} ${x + w} ${spring - h * 0.62} ${x + w} ${spring}`,
    `V ${base}`,
  ].join(" ");
}

/** Cusps (small scallops) running along the inside of an arch. */
function cusps(x: number, w: number, top: number, count = 11) {
  const cx = x + w / 2;
  const spring = top + w * 0.5;
  const r = w / 2;
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const a0 = Math.PI * (1 - i / count);
    const a1 = Math.PI * (1 - (i + 1) / count);
    const p = (a: number) => [cx + Math.cos(a) * r, spring - Math.sin(a) * (spring - top) * 1.0] as const;
    const [x0, y0] = p(a0);
    const [x1, y1] = p(a1);
    const lobe = (Math.hypot(x1 - x0, y1 - y0) / 2) * 1.05;
    out.push(`M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${lobe.toFixed(1)} ${lobe.toFixed(1)} 0 0 0 ${x1.toFixed(1)} ${y1.toFixed(1)}`);
  }
  return out.join(" ");
}

/** Nested palace arches framing the hero. */
export function PalaceArches() {
  return (
    <svg className="ornament ornament-arch" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMin meet" aria-hidden>
      <g {...stroke}>
        <path d={arch(170, 860, 46, 680)} />
        <path d={arch(214, 772, 92, 680)} strokeDasharray="2 7" />
        <path d={cusps(258, 684, 150, 13)} />
        <path d={arch(36, 120, 300, 680)} />
        <path d={arch(1044, 120, 300, 680)} />
        <line x1="0" y1="679" x2="1200" y2="679" />
        <g transform="translate(600 46)">
          <line x1="0" y1="0" x2="0" y2="-22" />
          <circle cx="0" cy="-28" r="5" />
          <path d="M -10 -6 Q 0 -20 10 -6" />
        </g>
      </g>
    </svg>
  );
}

/** Corner piece: quarter sunburst with a chakra hub and a lotus on the diagonal. */
export function CornerMotif({ position = "tl" }: { position?: "tl" | "tr" | "bl" | "br" }) {
  const rays = Array.from({ length: 13 }, (_, i) => {
    const a = (Math.PI / 2) * (i / 12);
    const r1 = i % 2 === 0 ? 150 : 116;
    return (
      <line
        key={i}
        x1={(Math.cos(a) * 36).toFixed(1)}
        y1={(Math.sin(a) * 36).toFixed(1)}
        x2={(Math.cos(a) * r1).toFixed(1)}
        y2={(Math.sin(a) * r1).toFixed(1)}
      />
    );
  });
  const spokes = Array.from({ length: 7 }, (_, i) => {
    const a = (Math.PI / 2) * (i / 6);
    return <line key={i} x1="0" y1="0" x2={(Math.cos(a) * 26).toFixed(1)} y2={(Math.sin(a) * 26).toFixed(1)} />;
  });
  return (
    <svg className={`ornament ornament-corner ${position}`} viewBox="-4 -4 172 172" aria-hidden>
      <g {...stroke}>
        <path d="M 0 26 A 26 26 0 0 0 26 0" />
        <path d="M 0 36 A 36 36 0 0 0 36 0" />
        {spokes}
        {rays}
        <path d="M 0 164 A 164 164 0 0 0 164 0" strokeDasharray="1 5" />
        <g transform="translate(96 96) rotate(-45)">
          <LotusPath />
        </g>
      </g>
    </svg>
  );
}

function LotusPath() {
  return (
    <>
      <path d="M 0 -16 Q 7 -6 0 6 Q -7 -6 0 -16 Z" />
      <path d="M 0 6 Q 10 -2 14 -12 Q 4 -8 0 6" />
      <path d="M 0 6 Q -10 -2 -14 -12 Q -4 -8 0 6" />
      <path d="M -15 9 Q 0 14 15 9" />
    </>
  );
}

/** Small lotus glyph for inline use. */
export function Lotus({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-17 -18 34 32" aria-hidden {...stroke}>
      <LotusPath />
    </svg>
  );
}
