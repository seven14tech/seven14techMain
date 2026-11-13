import { ArrowUpRight } from "lucide-react";
import type { Module } from "@/lib/content";

type Props = {
  modules: Module[];
  /** Bento span per card ("w3", "w4", "w6" or "" for a third of the row). */
  spans: string[];
  /** Optional tinted surface per card ("lilac", "saffron", "sage"). */
  tones?: Record<number, string>;
  /** Cards that also list their features. */
  detailed?: number[];
  /** Anchor prefix for card ids, so links like /billing#pos land on the card. */
  anchor?: boolean;
};

export function ModuleBento({ modules, spans, tones = {}, detailed = [], anchor = true }: Props) {
  return (
    <div className="bento">
      {modules.map((m, i) => {
        const Icon = m.icon;
        const wide = spans[i] === "w6";
        return (
          <article
            key={m.id}
            id={anchor ? m.id : undefined}
            className={`card lift reveal ${spans[i] ?? ""} ${tones[i] ?? ""}`}
            style={
              {
                "--d": `${(i % 3) * 70}ms`,
                display: "grid",
                gap: "1rem",
                alignContent: "start",
                gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.2fr)" : undefined,
                alignItems: wide ? "center" : undefined,
                scrollMarginTop: "calc(var(--header-h) + 1.5rem)",
              } as React.CSSProperties
            }
          >
            <div style={{ display: "grid", gap: "1rem" }}>
              <span className="icon">
                <Icon aria-hidden />
              </span>
              <div>
                <div className="faint small">{m.tagline}</div>
                <h3 className="h3 mt-1">{m.name}</h3>
              </div>
              <p className="muted small">{m.description}</p>
            </div>
            {(detailed.includes(i) || wide) &&
              (wide ? (
                <div className="tags" style={{ justifyContent: "flex-end" }}>
                  {m.features.map((f) => (
                    <span key={f} className="tag">
                      {f}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="list">
                  {m.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              ))}
          </article>
        );
      })}
    </div>
  );
}

export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="link">
      {children}
      <ArrowUpRight aria-hidden />
    </a>
  );
}
