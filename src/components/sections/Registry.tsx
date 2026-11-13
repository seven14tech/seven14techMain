import type { Module } from "@/lib/content";

type Props = {
  items: Module[];
  labels?: [string, string, string];
  /** Give rows ids so in-page links can land on them. */
  anchor?: boolean;
};

/** Editorial registry table: hairline rules, no zebra stripes. */
export function Registry({ items, labels = ["Name", "What it covers", "Includes"], anchor = false }: Props) {
  return (
    <div className="reveal">
      <table className="registry">
        <thead>
          <tr>
            <th>No.</th>
            <th>{labels[0]}</th>
            <th>{labels[1]}</th>
            <th>{labels[2]}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((s, i) => (
            <tr key={s.id} id={anchor ? s.id : undefined} style={{ scrollMarginTop: "calc(var(--header-h) + 1.5rem)" }}>
              <td className="idx">{String(i + 1).padStart(2, "0")}</td>
              <td style={{ width: "26%" }}>
                <div className="name">{s.name}</div>
                <div className="faint small mt-1">{s.tagline}</div>
              </td>
              <td className="muted" style={{ width: "34%" }}>
                {s.description}
              </td>
              <td>
                <div className="tags">
                  {s.features.map((f) => (
                    <span key={f} className="tag">
                      {f}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
