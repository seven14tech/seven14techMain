import { Monitor, Smartphone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PalaceArches, CornerMotif } from "@/components/ornament/Ornaments";

const outlets = [
  { name: "Indiranagar", bills: "412", sales: "₹1,58,240", state: "Live" },
  { name: "Koramangala", bills: "367", sales: "₹1,36,905", state: "Live" },
  { name: "HSR Layout", bills: "298", sales: "₹1,04,480", state: "Syncing" },
];

/** Smooth sparkline path through evenly spaced points. */
function sparkPath(values: number[], w = 520, h = 108, pad = 6) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pts = values.map((v, i) => [
    pad + (i * (w - pad * 2)) / (values.length - 1),
    h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2),
  ]);
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx.toFixed(1)} ${y0.toFixed(1)} ${cx.toFixed(1)} ${y1.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  return { d, area: `${d} L ${w - pad} ${h} L ${pad} ${h} Z` };
}

const series = [18, 22, 20, 31, 28, 42, 39, 47, 44, 58, 63, 57, 71, 76];

export function Hero() {
  const { d, area } = sparkPath(series);
  return (
    <section className="hero">
      <PalaceArches />
      <CornerMotif position="tl" />
      <CornerMotif position="tr" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal">Billing System · Education ERP · Custom software</span>
          <h1 className="display reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
            Software that <em>runs</em> Indian businesses and institutes.
          </h1>
          <p className="lead reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
            A GST-ready billing system for shops and restaurants, an education ERP for schools and
            colleges, and a studio that builds the custom websites and apps around them.
          </p>
          <div className="hero-actions reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
            <Button href="/contact" arrow>
              Book a demo
            </Button>
            <Button href="#offerings" variant="secondary">
              See what we offer
            </Button>
          </div>
          <div className="hero-meta reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
            <span>
              <Monitor aria-hidden /> Billing on Windows
            </span>
            <span>
              <Smartphone aria-hidden /> Android apps
            </span>
            <span>
              <GraduationCap aria-hidden /> ERP live at erp.seven14tech.com
            </span>
          </div>
        </div>

        <div className="reveal" style={{ position: "relative", "--d": "200ms" } as React.CSSProperties}>
          <div className="window" role="img" aria-label="Seven14 Billing dashboard showing today's sales across three branches">
            <div className="window-bar">
              <div className="dots" aria-hidden>
                <i />
                <i />
                <i />
              </div>
              <span className="mono">seven14 billing / today · all branches</span>
              <span className="mono">IST 14:32</span>
            </div>
            <div className="window-body">
              <div className="kpis">
                <div className="kpi">
                  <div className="label">Net sales</div>
                  <div className="value">₹3,99,625</div>
                  <div className="delta">+12.4% vs last Thu</div>
                </div>
                <div className="kpi">
                  <div className="label">Bills closed</div>
                  <div className="value">1,077</div>
                  <div className="delta">+8.1%</div>
                </div>
                <div className="kpi">
                  <div className="label">Avg. ticket</div>
                  <div className="value">₹371</div>
                  <div className="delta">+3.9%</div>
                </div>
              </div>
              <svg className="spark" viewBox="0 0 520 108" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2E5BFF" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#2E5BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[27, 54, 81].map((y) => (
                  <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgba(15,23,42,.06)" />
                ))}
                <path d={area} fill="url(#spark-fill)" />
                <path d={d} fill="none" stroke="#2E5BFF" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
              </svg>
              <table className="mini-table">
                <thead>
                  <tr>
                    <th>Branch</th>
                    <th className="num">Bills</th>
                    <th className="num">Sales</th>
                    <th style={{ textAlign: "right" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {outlets.map((o) => (
                    <tr key={o.name}>
                      <td>{o.name}</td>
                      <td className="num">{o.bills}</td>
                      <td className="num">{o.sales}</td>
                      <td style={{ textAlign: "right" }}>
                        <span className={`status${o.state === "Syncing" ? " pending" : ""}`}>{o.state}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="hero-float" aria-hidden>
            <div className="faint small">GST invoice</div>
            <div className="mono" style={{ fontSize: "0.95rem", marginTop: 2 }}>
              INV-24-08812 · ₹2,360.00
            </div>
            <div className="status mt-1">Paid by UPI · posted to the books</div>
          </div>
        </div>
      </div>
    </section>
  );
}
