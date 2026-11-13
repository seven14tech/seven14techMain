import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-block reveal">
          <span className="eyebrow">A 30-minute walkthrough</span>
          <h2 className="h2">
            See it running on <em>your</em> business.
          </h2>
          <p className="lead">
            Bring your product list, your fee structure or your idea. We will walk you through the
            billing system, the ERP or a plan for your build, with an honest quote and no pressure.
          </p>
          <div className="row-wrap" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
            <Button href="/contact" arrow>
              Book a demo
            </Button>
            <Button href={`mailto:${site.email}`} variant="secondary">
              {site.email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
