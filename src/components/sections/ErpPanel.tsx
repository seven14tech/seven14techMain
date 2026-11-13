import { ArrowUpRight } from "lucide-react";
import { erpAreas, erpUrl } from "@/lib/content";
import { Button } from "@/components/ui/Button";

/** The one dark panel on the home page: the Education ERP at a glance. */
export function ErpPanel() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="card card-dark erp-panel reveal">
          <div className="stack" style={{ alignContent: "start", gap: "1.25rem" }}>
            <span className="eyebrow eyebrow-dark">Seven14 Education ERP · live</span>
            <h2 className="h2" style={{ color: "#fff" }}>
              Run the whole <em>institute</em> from one place.
            </h2>
            <p className="muted" style={{ fontSize: "1.05rem", maxWidth: "30rem" }}>
              Admissions to alumni for schools, colleges and training institutes, with a staff app, a
              student and parent portal, and a native Android app on the same live data.
            </p>
            <div className="row-wrap" style={{ marginTop: "0.5rem" }}>
              <Button href="/erp" variant="cobalt" arrow>
                Explore the ERP
              </Button>
              <a href={erpUrl} className="btn btn-ghost-dark" target="_blank" rel="noopener noreferrer" data-magnetic>
                erp.seven14tech.com <ArrowUpRight aria-hidden />
              </a>
            </div>
          </div>
          <ol className="erp-list">
            {erpAreas.map((a, i) => (
              <li key={a.id}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="erp-name">{a.name}</span>
                <span className="erp-tag">{a.tagline}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
